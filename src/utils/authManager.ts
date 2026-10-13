/**
 * GERENCIADOR DE ACESSO MILITAR & AUTORIZAÇÃO MASTER (CONTA GEAN)
 * Permite que apenas a conta titular do Comandante Gean autorize novos alunos (ex: Thiago).
 * Sincronizado em tempo real na nuvem KVdb para múltiplos aparelhos (PC, celular, tablet).
 */

export interface UserAccessRecord {
  name: string;
  status: 'approved' | 'pending' | 'rejected';
  isAdmin: boolean;
  requestedAt: string;
  approvedAt?: string;
  personalPassword?: string;
  hasChangedPassword: boolean;
}

const LOCAL_AUTH_KEY = 'pmpe_users_auth_registry';
const CLOUD_BUCKET_ID = 'NdxEHuePZcZiBQmK9oR99o';
const CLOUD_API_BASE = `https://kvdb.io/${CLOUD_BUCKET_ID}`;
const MASTER_KEY_PREFIX = 'auth_registry_pmpe';

// Senhas Padrão Militares Iniciais
export const DEFAULT_PASSCODES = ['PMPE2026', 'AOCP2026', 'FARDADO2026', 'POLICIA2026'];

/**
 * Normaliza o nome do usuário para chave única
 */
export function normalizeUserName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, '_');
}

/**
 * Verifica se a conta é o Comandante Titular Gean
 */
export function isMasterUser(name: string): boolean {
  const clean = name.trim().toLowerCase();
  return clean === 'gean' || clean === 'soldado gean' || clean === 'comandante gean' || clean.includes('gean');
}

/**
 * Carrega todos os usuários do localStorage
 */
export function getLocalUsersRegistry(): Record<string, UserAccessRecord> {
  try {
    const raw = localStorage.getItem(LOCAL_AUTH_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Erro ao ler registro local de usuários:', err);
  }

  // Inicialização padrão com o Comandante Gean
  const initial: Record<string, UserAccessRecord> = {
    gean: {
      name: 'Soldado Gean',
      status: 'approved',
      isAdmin: true,
      requestedAt: new Date().toISOString(),
      approvedAt: new Date().toISOString(),
      hasChangedPassword: true,
      personalPassword: 'PMPE2026',
    },
  };
  saveLocalUsersRegistry(initial);
  return initial;
}

/**
 * Salva todos os usuários no localStorage
 */
export function saveLocalUsersRegistry(registry: Record<string, UserAccessRecord>): void {
  try {
    localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(registry));
  } catch (err) {
    console.error('Erro ao salvar registro local de usuários:', err);
  }
}

/**
 * Sincroniza o registro na nuvem KVdb
 */
export async function pushRegistryToCloud(registry: Record<string, UserAccessRecord>): Promise<boolean> {
  try {
    const res = await fetch(`${CLOUD_API_BASE}/${MASTER_KEY_PREFIX}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registry),
    });
    return res.ok;
  } catch (err) {
    console.warn('Erro ao sincronizar registro com a nuvem:', err);
    return false;
  }
}

/**
 * Puxa o registro mais recente da nuvem KVdb e mescla com o local
 */
export async function fetchRegistryFromCloud(): Promise<Record<string, UserAccessRecord>> {
  const local = getLocalUsersRegistry();
  try {
    const res = await fetch(`${CLOUD_API_BASE}/${MASTER_KEY_PREFIX}`);
    if (res.ok) {
      const cloudData: Record<string, UserAccessRecord> = await res.json();
      if (cloudData && typeof cloudData === 'object') {
        const merged: Record<string, UserAccessRecord> = { ...local, ...cloudData };
        saveLocalUsersRegistry(merged);
        return merged;
      }
    }
  } catch (err) {
    console.warn('Nuvem indisponível no momento, utilizando dados locais.');
  }
  return local;
}

/**
 * Solicita ou recupera registro de um usuário
 */
export async function getOrCreateUser(name: string): Promise<UserAccessRecord> {
  const cleanName = name.trim();
  const key = normalizeUserName(cleanName);
  const registry = await fetchRegistryFromCloud();

  if (isMasterUser(cleanName)) {
    const masterRecord: UserAccessRecord = {
      name: cleanName,
      status: 'approved',
      isAdmin: true,
      requestedAt: registry[key]?.requestedAt || new Date().toISOString(),
      approvedAt: new Date().toISOString(),
      hasChangedPassword: registry[key]?.hasChangedPassword ?? true,
      personalPassword: registry[key]?.personalPassword || 'PMPE2026',
    };
    registry[key] = masterRecord;
    saveLocalUsersRegistry(registry);
    pushRegistryToCloud(registry);
    return masterRecord;
  }

  if (registry[key]) {
    return registry[key];
  }

  // Novo usuário solicitando acesso: inicia como PENDENTE aguardando Gean!
  const newRecord: UserAccessRecord = {
    name: cleanName,
    status: 'pending',
    isAdmin: false,
    requestedAt: new Date().toISOString(),
    hasChangedPassword: false,
  };

  registry[key] = newRecord;
  saveLocalUsersRegistry(registry);
  pushRegistryToCloud(registry);
  return newRecord;
}

/**
 * Autoriza um usuário (Apenas o Comandante Gean pode acionar)
 */
export async function approveUserAccess(targetName: string): Promise<boolean> {
  const key = normalizeUserName(targetName);
  const registry = await fetchRegistryFromCloud();

  if (!registry[key]) return false;

  registry[key].status = 'approved';
  registry[key].approvedAt = new Date().toISOString();
  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);
  return true;
}

/**
 * Rejeita ou bloqueia o acesso de um usuário
 */
export async function rejectUserAccess(targetName: string): Promise<boolean> {
  const key = normalizeUserName(targetName);
  const registry = await fetchRegistryFromCloud();

  if (!registry[key]) return false;

  registry[key].status = 'rejected';
  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);
  return true;
}

/**
 * Registra a nova senha pessoal do usuário (obrigatório no primeiro acesso)
 */
export async function setUserPersonalPassword(targetName: string, newPass: string): Promise<boolean> {
  const key = normalizeUserName(targetName);
  const registry = await fetchRegistryFromCloud();

  if (!registry[key]) return false;

  registry[key].personalPassword = newPass.trim();
  registry[key].hasChangedPassword = true;
  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);
  return true;
}

/**
 * Reseta a senha de um aluno de volta para o padrão (pelo Comandante Gean)
 */
export async function resetUserToDefaultPass(targetName: string): Promise<boolean> {
  const key = normalizeUserName(targetName);
  const registry = await fetchRegistryFromCloud();

  if (!registry[key]) return false;

  delete registry[key].personalPassword;
  registry[key].hasChangedPassword = false;
  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);
  return true;
}

export interface LoginValidationResult {
  allowed: boolean;
  status: 'approved' | 'pending' | 'rejected' | 'wrong_password' | 'needs_new_password';
  message: string;
  userRecord?: UserAccessRecord;
  isFirstLogin?: boolean;
}

/**
 * Validação completa de Login e Senha com a Hierarquia Militar
 */
export async function validateLoginAttempt(
  name: string,
  passAttempt: string
): Promise<LoginValidationResult> {
  const cleanName = name.trim();
  const cleanPass = passAttempt.trim().toUpperCase();

  if (!cleanName) {
    return {
      allowed: false,
      status: 'rejected',
      message: 'Informe o nome de guerra do guerreiro.',
    };
  }

  const user = await getOrCreateUser(cleanName);

  // 1. Caso seja o Comandante Titular Gean
  if (user.isAdmin || isMasterUser(cleanName)) {
    const isMasterPassValid =
      DEFAULT_PASSCODES.includes(cleanPass) ||
      (user.personalPassword && cleanPass === user.personalPassword.toUpperCase()) ||
      cleanPass === 'GEAN2026' ||
      cleanPass === 'COMANDANTE';

    if (isMasterPassValid) {
      return {
        allowed: true,
        status: 'approved',
        message: 'Acesso Master Autorizado: Bem-vindo, Comandante Gean!',
        userRecord: user,
      };
    } else {
      return {
        allowed: false,
        status: 'wrong_password',
        message: 'Chave Master Incorreta. Digite sua chave de segurança titular.',
      };
    }
  }

  // 2. Caso seja outro usuário: checar status de autorização pelo Gean
  if (user.status === 'pending') {
    return {
      allowed: false,
      status: 'pending',
      message: `Acesso Pendente! A sua entrada (${cleanName}) precisa ser autorizada pela conta principal do Comandante Gean. Solicitação registrada!`,
      userRecord: user,
    };
  }

  if (user.status === 'rejected') {
    return {
      allowed: false,
      status: 'rejected',
      message: `Acesso Negado: A autorização para ${cleanName} foi revogada ou não foi concedida pelo Comandante Gean.`,
      userRecord: user,
    };
  }

  // 3. Usuário está APROVADO: Checagem de Senha
  // Caso 3.1: Já cadastrou senha pessoal própria
  if (user.hasChangedPassword && user.personalPassword) {
    if (cleanPass === user.personalPassword.toUpperCase()) {
      return {
        allowed: true,
        status: 'approved',
        message: `Acesso Autorizado! Bem-vindo(a), ${cleanName}!`,
        userRecord: user,
      };
    } else {
      return {
        allowed: false,
        status: 'wrong_password',
        message: `Senha incorreta. Você já cadastrou sua senha pessoal exclusiva para ${cleanName}.`,
      };
    }
  }

  // Caso 3.2: Primeiro acesso com a senha padrão da corporação
  const isDefaultValid = DEFAULT_PASSCODES.includes(cleanPass);
  if (isDefaultValid) {
    // Aluno usou a senha padrão, mas é o primeiro acesso -> Obriga a criar nova senha!
    return {
      allowed: false,
      status: 'needs_new_password',
      message: `Primeiro Acesso Autorizado! Cadastre agora sua nova senha pessoal para ${cleanName}.`,
      userRecord: user,
      isFirstLogin: true,
    };
  } else {
    return {
      allowed: false,
      status: 'wrong_password',
      message: 'Chave inicial incorreta. No primeiro acesso, use a chave padrão (ex: PMPE2026).',
    };
  }
}
