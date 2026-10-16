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
  // Trava de Dispositivo Único (Single Device Lock)
  boundDeviceId?: string;
  boundDeviceName?: string;
  boundAt?: string;
}

/**
 * Obtém ou gera a impressão digital única deste dispositivo
 */
export function getCurrentDeviceId(): string {
  try {
    let devId = localStorage.getItem('pmpe_device_fingerprint_id');
    if (!devId) {
      devId = 'dev_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
      localStorage.setItem('pmpe_device_fingerprint_id', devId);
    }
    return devId;
  } catch {
    return 'dev_generic_' + Date.now();
  }
}

/**
 * Identifica o nome amigável do sistema operacional do dispositivo atual
 */
export function getDeviceFriendlyName(): string {
  try {
    const ua = navigator.userAgent;
    let os = 'Dispositivo';
    if (/android/i.test(ua)) os = 'Celular Android';
    else if (/iphone|ipad|ipod/i.test(ua)) os = 'iPhone / iPad (iOS)';
    else if (/windows/i.test(ua)) os = 'Computador Windows';
    else if (/macintosh|mac os x/i.test(ua)) os = 'Mac / MacBook';
    else if (/linux/i.test(ua)) os = 'Linux';
    return os;
  } catch {
    return 'Dispositivo Móvel / PC';
  }
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
  if (!name) return false;
  const clean = name.trim().toLowerCase().replace(/_/g, ' ');
  return clean === 'gean' || clean === 'soldado gean' || clean === 'comandante gean';
}

export const PURGED_LEGACY_KEYS: string[] = [];

export function filterPurgedUsers(record: Record<string, UserAccessRecord>): Record<string, UserAccessRecord> {
  const clean: Record<string, UserAccessRecord> = { ...record };
  if (!clean['gean']) {
    clean['gean'] = {
      name: 'Soldado Gean',
      status: 'approved',
      isAdmin: true,
      requestedAt: '2026-10-13T09:49:38.463Z',
      approvedAt: '2026-10-14T14:26:07.510Z',
      hasChangedPassword: true,
      personalPassword: 'PMPE2026',
    };
  }
  return clean;
}

/**
 * Carrega todos os usuários do localStorage, expurgando automaticamente os usuários antigos
 */
export function getLocalUsersRegistry(): Record<string, UserAccessRecord> {
  try {
    const raw = localStorage.getItem(LOCAL_AUTH_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const filtered = filterPurgedUsers(parsed);
      return filtered;
    }
  } catch (err) {
    console.error('Erro ao ler registro local de usuários:', err);
  }

  // Inicialização padrão com o Comandante Gean
  const initial: Record<string, UserAccessRecord> = {
    gean: {
      name: 'Soldado Gean',
      status: 'approved',
      isAdmin: true,
      requestedAt: '2026-10-13T09:49:38.463Z',
      approvedAt: '2026-10-14T14:26:07.510Z',
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
 * Apaga todos os usuários cadastrados mantendo exclusivamente o Comandante Gean (tanto local quanto em nuvem)
 */
export async function purgeAllUsersExceptCommander(): Promise<boolean> {
  const cleanRegistry: Record<string, UserAccessRecord> = {
    gean: {
      name: 'Soldado Gean',
      status: 'approved',
      isAdmin: true,
      requestedAt: '2026-10-13T09:49:38.463Z',
      approvedAt: new Date().toISOString(),
      hasChangedPassword: true,
      personalPassword: 'PMPE2026',
    },
  };
  saveLocalUsersRegistry(cleanRegistry);
  return await pushRegistryToCloud(cleanRegistry);
}

/**
 * Fetch com timeout para impedir congelamento de tela em redes lentas de celular
 */
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 3800): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Sincroniza o registro na nuvem KVdb garantindo preservacao total de todos os alunos
 */
export async function pushRegistryToCloud(registry: Record<string, UserAccessRecord>): Promise<boolean> {
  try {
    // 1. Busca os dados atuais da nuvem para mesclar e JAMAIS perder nenhum aluno
    let currentCloud: Record<string, UserAccessRecord> = {};
    try {
      const resCheck = await fetchWithTimeout(`${CLOUD_API_BASE}/${MASTER_KEY_PREFIX}?_t=${Date.now()}`, {
        cache: 'no-store'
      }, 3500);
      if (resCheck.ok) {
        currentCloud = await resCheck.json();
      }
    } catch {}

    const consolidated = { ...currentCloud, ...registry };

    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/${MASTER_KEY_PREFIX}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(consolidated),
    }, 4500);
    return res.ok;
  } catch (err) {
    console.warn('Erro ao sincronizar registro com a nuvem:', err);
    return false;
  }
}

/**
 * Puxa o registro mais recente da nuvem KVdb (consolidando auth_registry_pmpe e todas as contas student_*)
 */
export async function fetchRegistryFromCloud(): Promise<Record<string, UserAccessRecord>> {
  const local = getLocalUsersRegistry();
  const t = Date.now();
  let cloudRegistry: Record<string, UserAccessRecord> = {};

  // 1. Busca auth_registry_pmpe com cache-busting (rapido e confiavel em 1 unica requisicao)
  try {
    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/${MASTER_KEY_PREFIX}?_t=${t}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    }, 4500);
    if (res.ok) {
      const cloudData: Record<string, UserAccessRecord> = await res.json();
      if (cloudData && typeof cloudData === 'object') {
        cloudRegistry = cloudData;
      }
    }
  } catch (err) {
    console.warn('Nuvem indisponivel no momento para auth_registry_pmpe, utilizando dados locais.');
  }

  // 2. Busca e integra eventuais chaves student_* que ainda nao estejam em cloudRegistry
  try {
    const listRes = await fetchWithTimeout(`${CLOUD_API_BASE}/?prefix=student_&format=json&_t=${t}`, {
      cache: 'no-store'
    }, 3500);
    if (listRes.ok) {
      const keys: string[] = await listRes.json();
      if (Array.isArray(keys)) {
        const missingKeys = keys.filter(k => {
          const raw = k.replace(/^student_/, '');
          return !cloudRegistry[raw] && !local[raw];
        });

        // Carrega apenas os faltantes em pequenos lotes de 4 para nao saturar as conexoes HTTP
        for (let i = 0; i < missingKeys.length; i += 4) {
          const batch = missingKeys.slice(i, i + 4);
          await Promise.all(
            batch.map(async (k) => {
              try {
                const sRes = await fetchWithTimeout(`${CLOUD_API_BASE}/${encodeURIComponent(k)}?_t=${t}`, {
                  cache: 'no-store'
                }, 3000);
                if (sRes.ok) {
                  const sp = await sRes.json();
                  if (sp && sp.name && !isMasterUser(sp.name)) {
                    const sKey = normalizeUserName(sp.name);
                    if (!cloudRegistry[sKey]) {
                      cloudRegistry[sKey] = {
                        name: sp.name,
                        status: 'approved',
                        isAdmin: false,
                        requestedAt: sp.firstLogin || new Date().toISOString(),
                        approvedAt: sp.firstLogin || new Date().toISOString(),
                        hasChangedPassword: true,
                        personalPassword: 'PMPE2026'
                      };
                    }
                  }
                }
              } catch {}
            })
          );
        }
      }
    }
  } catch (err) {
    console.warn('Erro ao ler chaves student_* da nuvem:', err);
  }

  // 3. Mescla sem perdas: local + nuvem registry
  const merged: Record<string, UserAccessRecord> = { ...local, ...cloudRegistry };
  
  // Garante que a conta titular do Comandante Gean sempre exista
  if (!merged['gean']) {
    merged['gean'] = {
      name: 'Soldado Gean',
      status: 'approved',
      isAdmin: true,
      requestedAt: '2026-10-13T09:49:38.463Z',
      approvedAt: new Date().toISOString(),
      hasChangedPassword: true,
      personalPassword: 'PMPE2026',
    };
  }

  saveLocalUsersRegistry(merged);
  return merged;
}

/**
 * Exclui permanentemente um usuário (da nuvem e do armazenamento local)
 */
export async function deleteUserPermanently(targetKeyOrName: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const key = findUserKey(local, targetKeyOrName) || normalizeUserName(targetKeyOrName);
  
  if (local[key]) {
    delete local[key];
    saveLocalUsersRegistry(local);
  }

  try {
    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/${MASTER_KEY_PREFIX}`, {}, 3500);
    if (res.ok) {
      const cloudData: Record<string, UserAccessRecord> = await res.json();
      if (cloudData && cloudData[key]) {
        delete cloudData[key];
        const clean = filterPurgedUsers(cloudData);
        saveLocalUsersRegistry(clean);
        await pushRegistryToCloud(clean);
      }
    }
  } catch {}

  try {
    const studentKey = `student_${key}`;
    await fetch(`${CLOUD_API_BASE}/${studentKey}`, { method: 'DELETE' });
  } catch {}

  return true;
}

/**
 * Solicita ou recupera registro de um usuário
 */
export async function getOrCreateUser(name: string): Promise<UserAccessRecord> {
  const cleanName = name.trim();
  const key = normalizeUserName(cleanName);
  const registry = await fetchRegistryFromCloud();

  if (isMasterUser(cleanName)) {
    const existing = registry[key] || registry['gean'];
    const masterRecord: UserAccessRecord = {
      name: cleanName,
      status: 'approved',
      isAdmin: true,
      requestedAt: existing?.requestedAt || new Date().toISOString(),
      approvedAt: new Date().toISOString(),
      hasChangedPassword: existing?.hasChangedPassword ?? true,
      personalPassword: existing?.personalPassword || 'PMPE2026',
    };
    registry[key] = masterRecord;
    registry['gean'] = masterRecord;
    saveLocalUsersRegistry(registry);
    pushRegistryToCloud(registry);
    return masterRecord;
  }

  // Busca se já existe por chave direta ou normalizada
  const existingKey = Object.keys(registry).find(
    k => k === key || k.toLowerCase() === key || (registry[k].name && registry[k].name.trim().toLowerCase() === cleanName.toLowerCase())
  );

  if (existingKey && registry[existingKey]) {
    return registry[existingKey];
  }

  // Novo usuário solicitando acesso: AUTO-APROVAÇÃO ATIVA! Entrada imediata sem fila.
  const newRecord: UserAccessRecord = {
    name: cleanName,
    status: 'approved',
    isAdmin: false,
    requestedAt: new Date().toISOString(),
    approvedAt: new Date().toISOString(),
    hasChangedPassword: false,
    personalPassword: 'PMPE2026',
  };

  registry[key] = newRecord;
  saveLocalUsersRegistry(registry);
  pushRegistryToCloud(registry);
  return newRecord;
}

/**
 * Cadastra um novo usuário militar e libera entrada IMEDIATA sem necessidade de aprovação
 */
export async function registerNewUser(
  name: string,
  pass: string
): Promise<{ success: boolean; message: string; userRecord?: UserAccessRecord }> {
  const cleanName = name.trim();
  const cleanPass = pass.trim();

  if (!cleanName || cleanName.length < 2) {
    return { success: false, message: 'Informe seu nome ou identificação com pelo menos 2 caracteres.' };
  }

  if (!cleanPass || cleanPass.length < 4) {
    return { success: false, message: 'A sua senha de segurança deve conter pelo menos 4 caracteres.' };
  }

  const key = normalizeUserName(cleanName);
  const registry = await fetchRegistryFromCloud();

  const existingKey = Object.keys(registry).find(
    k => k === key || (registry[k].name && registry[k].name.trim().toLowerCase() === cleanName.toLowerCase())
  );

  // Se já existe e já tem senha pessoal cadastrada:
  if (existingKey && registry[existingKey] && registry[existingKey].hasChangedPassword) {
    if (registry[existingKey].personalPassword && registry[existingKey].personalPassword.toUpperCase() === cleanPass.toUpperCase()) {
      return {
        success: true,
        message: `Bem-vindo de volta, guerreiro ${cleanName}!`,
        userRecord: registry[existingKey]
      };
    }
    return {
      success: false,
      message: `O guerreiro "${cleanName}" já está cadastrado. Vá para a aba "Entrar" e digite sua senha de acesso.`
    };
  }

  const newUser: UserAccessRecord = {
    name: cleanName,
    status: 'approved',
    isAdmin: isMasterUser(cleanName),
    requestedAt: new Date().toISOString(),
    approvedAt: new Date().toISOString(),
    hasChangedPassword: true,
    personalPassword: cleanPass,
  };

  registry[key] = newUser;
  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);

  return {
    success: true,
    message: `Alistamento concluído com sucesso! Bem-vindo(a) à Missão PMPE, ${cleanName}!`,
    userRecord: newUser
  };
}

/**
 * Cadastra e matricula um novo aluno pelo Comandante Gean
 * Cria já com status 'approved' e senha definida
 */
export async function registerStudentByCommander(
  name: string,
  pass: string
): Promise<{ success: boolean; message: string; userRecord?: UserAccessRecord }> {
  const cleanName = name.trim();
  const cleanPass = pass.trim();

  if (!cleanName || cleanName.length < 2) {
    return { success: false, message: 'Informe o nome do aluno com pelo menos 2 caracteres.' };
  }

  if (!cleanPass || cleanPass.length < 4) {
    return { success: false, message: 'A senha de acesso militar deve ter pelo menos 4 caracteres.' };
  }

  const key = normalizeUserName(cleanName);
  const registry = await fetchRegistryFromCloud();

  const existingKey = Object.keys(registry).find(
    k => k === key || (registry[k].name && registry[k].name.trim().toLowerCase() === cleanName.toLowerCase())
  );

  if (existingKey && registry[existingKey]) {
    // Aluno já existe, atualiza senha e garante aprovação ativa
    registry[existingKey].status = 'approved';
    registry[existingKey].personalPassword = cleanPass;
    registry[existingKey].hasChangedPassword = true;
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return {
      success: true,
      message: `Aluno "${cleanName}" já existia e teve a matrícula e senha atualizadas com sucesso!`,
      userRecord: registry[existingKey]
    };
  }

  const newStudent: UserAccessRecord = {
    name: cleanName,
    status: 'approved',
    isAdmin: isMasterUser(cleanName),
    requestedAt: new Date().toISOString(),
    approvedAt: new Date().toISOString(),
    hasChangedPassword: true,
    personalPassword: cleanPass,
  };

  registry[key] = newStudent;
  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);

  // Também registra na nuvem de pelotão (student_*) para sincronizar com o ranking e estatísticas!
  try {
    const studentCloudKey = `student_${encodeURIComponent(key)}`;
    await fetch(`${CLOUD_API_BASE}/${studentCloudKey}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: cleanName,
        firstLogin: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        totalSessions: 0,
        totalAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        overallAccuracy: 0,
        totalScore: 0,
        totalXp: 0,
        totalTimeSpentSeconds: 0,
        averageTimePerQuestion: 0,
        sessions: [],
        subjectStats: {}
      })
    });
  } catch {}

  return {
    success: true,
    message: `Aluno "${cleanName}" matriculado com sucesso no Batalhão! Senha liberada.`,
    userRecord: newStudent
  };
}

/**
 * Desvincula o aparelho do aluno para permitir conexão em um novo celular/computador
 */
export async function unbindUserDevice(targetKeyOrName: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName);
  if (localKey && local[localKey]) {
    delete local[localKey].boundDeviceId;
    delete local[localKey].boundDeviceName;
    delete local[localKey].boundAt;
    saveLocalUsersRegistry(local);
  }

  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;

  if (key && registry[key]) {
    delete registry[key].boundDeviceId;
    delete registry[key].boundDeviceName;
    delete registry[key].boundAt;
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return true;
  } else if (localKey) {
    await pushRegistryToCloud(local);
    return true;
  }
  return false;
}

/**
 * Encontra a chave exata no registro
 */
function findUserKey(registry: Record<string, UserAccessRecord>, targetKeyOrName: string): string | null {
  if (registry[targetKeyOrName]) return targetKeyOrName;
  const norm = normalizeUserName(targetKeyOrName);
  if (registry[norm]) return norm;
  const lower = targetKeyOrName.trim().toLowerCase();
  for (const [k, u] of Object.entries(registry)) {
    if (k.toLowerCase() === lower || (u.name && u.name.trim().toLowerCase() === lower)) {
      return k;
    }
  }
  return null;
}

/**
 * Autoriza um usuário (Apenas o Comandante Gean pode acionar)
 */
export async function approveUserAccess(targetKeyOrName: string): Promise<boolean> {
  // 1. Atualização local imediata
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName);
  if (localKey && local[localKey]) {
    local[localKey].status = 'approved';
    local[localKey].approvedAt = new Date().toISOString();
    saveLocalUsersRegistry(local);
  }

  // 2. Atualização e sincronização na nuvem
  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;

  if (key && registry[key]) {
    registry[key].status = 'approved';
    registry[key].approvedAt = new Date().toISOString();
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return true;
  } else if (localKey) {
    await pushRegistryToCloud(local);
    return true;
  }
  return false;
}

/**
 * Rejeita ou bloqueia o acesso de um usuário
 */
export async function rejectUserAccess(targetKeyOrName: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName);
  if (localKey && local[localKey]) {
    local[localKey].status = 'rejected';
    saveLocalUsersRegistry(local);
  }

  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;

  if (key && registry[key]) {
    registry[key].status = 'rejected';
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return true;
  } else if (localKey) {
    await pushRegistryToCloud(local);
    return true;
  }
  return false;
}

/**
 * Registra a nova senha pessoal do usuário (obrigatório no primeiro acesso)
 */
export async function setUserPersonalPassword(targetKeyOrName: string, newPass: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName);
  if (localKey && local[localKey]) {
    local[localKey].personalPassword = newPass.trim();
    local[localKey].hasChangedPassword = true;
    saveLocalUsersRegistry(local);
  }

  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;

  if (key && registry[key]) {
    registry[key].personalPassword = newPass.trim();
    registry[key].hasChangedPassword = true;
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return true;
  } else if (localKey) {
    await pushRegistryToCloud(local);
    return true;
  }
  return false;
}

/**
 * Reseta a senha de um aluno de volta para o padrão (pelo Comandante Gean)
 */
export async function resetUserToDefaultPass(targetKeyOrName: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName);
  if (localKey && local[localKey]) {
    delete local[localKey].personalPassword;
    local[localKey].hasChangedPassword = false;
    saveLocalUsersRegistry(local);
  }

  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;

  if (key && registry[key]) {
    delete registry[key].personalPassword;
    registry[key].hasChangedPassword = false;
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return true;
  } else if (localKey) {
    await pushRegistryToCloud(local);
    return true;
  }
  return false;
}

/**
 * Altera a senha da conta titular do Comandante Gean
 */
export async function setMasterUserPassword(newPass: string): Promise<boolean> {
  const cleanPass = newPass.trim();
  if (!cleanPass || cleanPass.length < 4) return false;

  const registry = await fetchRegistryFromCloud();
  const masterKey = 'gean';

  const existing = registry[masterKey] || {
    name: 'Soldado Gean',
    status: 'approved' as const,
    isAdmin: true,
    requestedAt: new Date().toISOString(),
    approvedAt: new Date().toISOString(),
  };

  registry[masterKey] = {
    ...existing,
    personalPassword: cleanPass,
    hasChangedPassword: true,
  };

  saveLocalUsersRegistry(registry);
  await pushRegistryToCloud(registry);
  return true;
}

export interface LoginValidationResult {
  allowed: boolean;
  status: 'approved' | 'pending' | 'rejected' | 'wrong_password' | 'needs_new_password' | 'device_locked';
  message: string;
  userRecord?: UserAccessRecord;
  isFirstLogin?: boolean;
}

/**
 * Validação completa de Login e Senha com a Hierarquia Militar e Trava de Dispositivo Único
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

  const key = normalizeUserName(cleanName);
  const registry = await fetchRegistryFromCloud();

  const existingKey = Object.keys(registry).find(
    k => k === key || k.toLowerCase() === key || (registry[k].name && registry[k].name.trim().toLowerCase() === cleanName.toLowerCase())
  );

  // Aluno não cadastrado pelo Comandante Gean
  if (!existingKey && !isMasterUser(cleanName)) {
    return {
      allowed: false,
      status: 'rejected',
      message: `O guerreiro "${cleanName}" ainda não possui matrícula ativa. Fale com o Comandante Gean para liberar seu acesso.`
    };
  }

  const user = existingKey ? registry[existingKey] : await getOrCreateUser(cleanName);

  // 1. Caso seja o Comandante Titular Gean (Acesso Total irrestrito em qualquer aparelho)
  if (user.isAdmin || isMasterUser(cleanName)) {
    const hasCustomPass = Boolean(user.personalPassword && user.personalPassword.toUpperCase() !== 'PMPE2026');
    const isMasterPassValid = hasCustomPass
      ? (user.personalPassword && cleanPass === user.personalPassword.toUpperCase())
      : (DEFAULT_PASSCODES.includes(cleanPass) || cleanPass === 'GEAN2026' || cleanPass === 'COMANDANTE');

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
        message: hasCustomPass 
          ? 'Senha Master Incorreta. Digite a sua nova senha pessoal de Comandante.'
          : 'Chave Master Incorreta. Digite sua chave de segurança titular.',
      };
    }
  }

  // 2. Auto-aprovação Militar
  if (user.status === 'pending') {
    user.status = 'approved';
    user.approvedAt = new Date().toISOString();
    const registry = getLocalUsersRegistry();
    const key = normalizeUserName(cleanName);
    if (registry[key]) {
      registry[key].status = 'approved';
      registry[key].approvedAt = user.approvedAt;
      saveLocalUsersRegistry(registry);
      pushRegistryToCloud(registry);
    }
  }

  if (user.status === 'rejected') {
    return {
      allowed: false,
      status: 'rejected',
      message: `Acesso Restrito: A identificação ${cleanName} foi desativada pelo Comando Militar.`,
      userRecord: user,
    };
  }

  // Helper interno para validar e vincular o dispositivo único do aluno
  const verifyDeviceLock = async (u: UserAccessRecord): Promise<{ allowed: boolean; message?: string }> => {
    const currentDevId = getCurrentDeviceId();
    const currentDevName = getDeviceFriendlyName();

    if (!u.boundDeviceId) {
      // Primeiro login: vincula o aparelho atual à conta do aluno
      u.boundDeviceId = currentDevId;
      u.boundDeviceName = currentDevName;
      u.boundAt = new Date().toISOString();

      const registry = getLocalUsersRegistry();
      const key = normalizeUserName(cleanName);
      if (registry[key]) {
        registry[key].boundDeviceId = currentDevId;
        registry[key].boundDeviceName = currentDevName;
        registry[key].boundAt = u.boundAt;
        saveLocalUsersRegistry(registry);
      }
      await pushRegistryToCloud(registry);
      return { allowed: true };
    }

    if (u.boundDeviceId !== currentDevId) {
      return {
        allowed: false,
        message: `🚫 ACESSO BLOQUEADO: Esta conta já está vinculada a outro aparelho (${u.boundDeviceName || 'Celular/PC anterior'}). Por segurança, cada aluno pode usar somente em 1 dispositivo. Caso tenha trocado de celular, solicite ao Comandante Gean para desvincular o aparelho antigo.`
      };
    }

    return { allowed: true };
  };

  // 3. Usuário APROVADO: Checagem de Senha e Dispositivo
  // Caso 3.1: Já cadastrou senha pessoal própria
  if (user.hasChangedPassword && user.personalPassword) {
    if (cleanPass === user.personalPassword.toUpperCase() || cleanPass === user.personalPassword) {
      // Senha correta -> Checa a trava de dispositivo único
      const deviceCheck = await verifyDeviceLock(user);
      if (!deviceCheck.allowed) {
        return {
          allowed: false,
          status: 'device_locked',
          message: deviceCheck.message || 'Dispositivo não autorizado para esta conta.',
          userRecord: user
        };
      }

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
        message: `Senha incorreta para ${cleanName}. Digite a senha cadastrada pelo guerreiro.`,
      };
    }
  }

  // Caso 3.2: Usuário novo definindo senha ou usando chave padrão
  const isDefaultValid = DEFAULT_PASSCODES.includes(cleanPass);
  if (isDefaultValid) {
    return {
      allowed: false,
      status: 'needs_new_password',
      message: `Primeiro Acesso Autorizado! Cadastre agora sua nova senha pessoal para ${cleanName}.`,
      userRecord: user,
      isFirstLogin: true,
    };
  } else if (cleanPass.length >= 4) {
    // Aluno digitou uma senha pessoal inédita no login: grava e vincula dispositivo
    await setUserPersonalPassword(cleanName, cleanPass);
    user.hasChangedPassword = true;
    user.personalPassword = cleanPass;

    const deviceCheck = await verifyDeviceLock(user);
    if (!deviceCheck.allowed) {
      return {
        allowed: false,
        status: 'device_locked',
        message: deviceCheck.message || 'Dispositivo não autorizado para esta conta.',
        userRecord: user
      };
    }

    return {
      allowed: true,
      status: 'approved',
      message: `Acesso Militar Liberado! Senha e aparelho registrados com sucesso para ${cleanName}.`,
      userRecord: user,
    };
  } else {
    return {
      allowed: false,
      status: 'wrong_password',
      message: 'A senha de acesso deve ter pelo menos 4 dígitos.',
    };
  }
}

