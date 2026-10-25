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
  // Liberação VIP de Recursos pelo Comandante Gean (R$ 4,00)
  hasScheduleAccess?: boolean;
  // Sessão Ativa & Anti-Fraude
  activeSessionToken?: string;
  lastSessionHeartbeat?: string;
  // Telemetria & Monitoramento Operacional pelo Comandante Gean
  phoneNumber?: string;
  email?: string;
  studyAlertTime?: string;
  lastActiveTime?: string;
  lastLocationCity?: string;
  questionsTodayCount?: number;
  questionsTotalCount?: number;
  overallAccuracy?: number;
}

/**
 * Obtém ou gera a impressão digital de hardware única deste dispositivo
 * Combina GPU WebGL, proporções de tela/retina, núcleos de processador, touchpoints e token criptográfico persistente
 */
export function getCurrentDeviceId(): string {
  try {
    let devId = localStorage.getItem('pmpe_device_fingerprint_id') || sessionStorage.getItem('pmpe_device_fingerprint_id');
    if (!devId) {
      // Coleta características físicas e de hardware do dispositivo
      let gpuInfo = '';
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
          const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            gpuInfo = String((gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '');
          }
        }
      } catch {}

      const screenMetrics = typeof window !== 'undefined' && window.screen 
        ? `${window.screen.width}x${window.screen.height}_${window.screen.colorDepth}_${window.devicePixelRatio || 1}`
        : 'scr_std';

      const hwCores = typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 4) : 4;
      const touchPts = typeof navigator !== 'undefined' ? (navigator.maxTouchPoints || 0) : 0;
      const platform = typeof navigator !== 'undefined' ? (navigator.platform || '') : '';
      const uaSnippet = typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 45) : '';

      // Gera assinatura física combinada
      const rawSeed = `${screenMetrics}__${gpuInfo}__c${hwCores}__t${touchPts}__${platform}__${uaSnippet}`;
      let hash = 0;
      for (let i = 0; i < rawSeed.length; i++) {
        hash = ((hash << 5) - hash) + rawSeed.charCodeAt(i);
        hash |= 0;
      }
      const hexHash = Math.abs(hash).toString(16).padStart(8, '0');
      devId = `dev_hw_${hexHash}`;
      localStorage.setItem('pmpe_device_fingerprint_id', devId);
      sessionStorage.setItem('pmpe_device_fingerprint_id', devId);
    }
    return devId;
  } catch {
    return 'dev_generic_' + Date.now();
  }
}

/**
 * Identifica o nome amigável e especificações do dispositivo atual
 */
export function getDeviceFriendlyName(): string {
  try {
    const ua = navigator.userAgent;
    const width = window.screen?.width || 0;
    const height = window.screen?.height || 0;
    const res = width > 0 ? ` (${width}x${height})` : '';

    let os = 'Dispositivo';
    if (/iphone/i.test(ua)) os = `iPhone / iOS${res}`;
    else if (/ipad/i.test(ua)) os = `iPad / iPadOS${res}`;
    else if (/android/i.test(ua)) os = `Celular Android${res}`;
    else if (/windows/i.test(ua)) os = `PC Windows${res}`;
    else if (/macintosh|mac os x/i.test(ua)) os = `Mac / Apple${res}`;
    else if (/linux/i.test(ua)) os = `Linux${res}`;
    return os;
  } catch {
    return 'Dispositivo Móvel / PC';
  }
}

const LOCAL_AUTH_KEY = 'pmpe_users_auth_registry_v2';
const CLOUD_BUCKET_ID = 'NdxEHuePZcZiBQmK9oR99o';
const CLOUD_API_BASE = `https://kvdb.io/${CLOUD_BUCKET_ID}`;
const MASTER_KEY_PREFIX = 'auth_registry_pmpe_v2';

// Senhas Padrão Militares Iniciais
export const DEFAULT_PASSCODES = ['PMPE2026', 'AOCP2026', 'FARDADO2026', 'POLICIA2026'];

/**
 * Normaliza o nome do usuário para chave única
 */
export function normalizeUserName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, '_');
}

/**
 * Normaliza e simplifica nomes para busca resiliente (remove acentos e prefixos militares comuns)
 */
export function simplifyNameForSearch(name: string): string {
  if (!name) return '';
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos (joão -> joao)
    .replace(/^(soldado|sd\.?|recruta|aluno|guerreiro|pmpe)\s+/i, '') // remove prefixos militares
    .replace(/[_\-\s]+/g, ' ')
    .trim();
}

/**
 * Verifica se a conta é o Comandante Titular Gean
 */
export function isMasterUser(name: string): boolean {
  if (!name) return false;
  const clean = simplifyNameForSearch(name);
  return clean === 'gean' || clean === 'gean gouveia' || clean === 'comandante gean' || clean === 'soldado gean';
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
                        personalPassword: sp.personalPassword || 'PMPE2026',
                        boundDeviceId: sp.boundDeviceId,
                        boundDeviceName: sp.boundDeviceName,
                        boundAt: sp.boundAt,
                        hasScheduleAccess: sp.hasScheduleAccess,
                        activeSessionToken: sp.activeSessionToken
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
  const normKey = normalizeUserName(targetKeyOrName);
  const devlockKey = `devlock_${encodeURIComponent(normKey)}`;

  // 1. Apaga a trava atômica direta na nuvem!
  try {
    await fetch(`${CLOUD_API_BASE}/${devlockKey}`, { method: 'DELETE' });
  } catch {}

  // 2. Apaga também o token de sessão ativa
  clearActiveSession(normKey);

  // 3. Limpa no registro local
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName) || normKey;
  if (localKey && local[localKey]) {
    delete local[localKey].boundDeviceId;
    delete local[localKey].boundDeviceName;
    delete local[localKey].boundAt;
    saveLocalUsersRegistry(local);
  }

  // 4. Limpa no registro da nuvem
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
export function findUserKey(registry: Record<string, UserAccessRecord>, targetKeyOrName: string): string | null {
  if (!targetKeyOrName) return null;
  if (registry[targetKeyOrName]) return targetKeyOrName;
  const norm = normalizeUserName(targetKeyOrName);
  if (registry[norm]) return norm;
  const lower = targetKeyOrName.trim().toLowerCase();
  for (const [k, u] of Object.entries(registry)) {
    if (k.toLowerCase() === lower || (u.name && u.name.trim().toLowerCase() === lower)) {
      return k;
    }
  }

  // Busca resiliente com remoção de acentos e prefixos militares (ex: "sd lucas" encontra "Lucas" ou "Soldado Lucas")
  const simplifiedTarget = simplifyNameForSearch(targetKeyOrName);
  if (simplifiedTarget) {
    for (const [k, u] of Object.entries(registry)) {
      const simplifiedKey = simplifyNameForSearch(k);
      const simplifiedUserName = u.name ? simplifyNameForSearch(u.name) : '';
      if (
        simplifiedKey === simplifiedTarget ||
        simplifiedUserName === simplifiedTarget ||
        simplifiedUserName.split(' ')[0] === simplifiedTarget ||
        simplifiedTarget.split(' ')[0] === simplifiedUserName
      ) {
        return k;
      }
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
 * Validação e Vinculação Atômica de Dispositivo Único em Nuvem
 */
export async function verifyDeviceLock(cleanName: string, u?: UserAccessRecord): Promise<{ allowed: boolean; message?: string }> {
  // Comandante Gean tem livre acesso em qualquer dispositivo
  if (isMasterUser(cleanName)) {
    return { allowed: true };
  }

  const currentDevId = getCurrentDeviceId();
  const currentDevName = getDeviceFriendlyName();
  const key = normalizeUserName(cleanName);
  const devlockKey = `devlock_${encodeURIComponent(key)}`;

  // 1. Garante que o registro do usuário está carregado se não foi passado
  if (!u) {
    const registry = await fetchRegistryFromCloud();
    const foundKey = findUserKey(registry, cleanName);
    if (foundKey) u = registry[foundKey];
  }

  try {
    // 2. Checagem Atômica Direta na Nuvem KVdb (Prioridade Máxima e Imediata)
    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/${devlockKey}?_t=${Date.now()}`, {
      cache: 'no-store'
    }, 3800);

    if (res.ok) {
      const cloudLock = await res.json();
      if (cloudLock && cloudLock.deviceId) {
        if (cloudLock.deviceId !== currentDevId) {
          return {
            allowed: false,
            message: `🚫 ACESSO RECUSADO: Esta conta militar já está vinculada ao aparelho "${cloudLock.deviceName || 'Celular Autorizado'}". Por norma de segurança do Pelotão, cada aluno só pode acessar de 1 único dispositivo. Caso tenha trocado de aparelho, fale com o Comandante Gean para desvincular seu celular antigo.`
          };
        } else {
          // É o mesmo dispositivo autorizado!
          return { allowed: true };
        }
      }
    }
  } catch (e) {
    console.warn('Verificação atômica de devlock em nuvem temporariamente indisponível:', e);
  }

  // 3. Checagem no Registro Geral Militar (u.boundDeviceId)
  if (u && u.boundDeviceId) {
    if (u.boundDeviceId !== currentDevId) {
      return {
        allowed: false,
        message: `🚫 ACESSO RECUSADO: Esta conta militar já está vinculada ao aparelho "${u.boundDeviceName || 'outro celular'}". Por segurança, cada recruta só pode usar em 1 único aparelho. Caso tenha trocado de celular, solicite ao Comandante Gean para desvincular o aparelho antigo.`
      };
    } else {
      return { allowed: true };
    }
  }

  // 4. Primeiro login: vincula o aparelho atual imediatamente na nuvem atômica
  try {
    await fetchWithTimeout(`${CLOUD_API_BASE}/${devlockKey}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deviceId: currentDevId,
        deviceName: currentDevName,
        userName: cleanName,
        boundAt: new Date().toISOString()
      })
    }, 4000);
  } catch {}

  // Grava também no registro local e de nuvem
  if (u) {
    u.boundDeviceId = currentDevId;
    u.boundDeviceName = currentDevName;
    u.boundAt = new Date().toISOString();
  }

  const registry = getLocalUsersRegistry();
  const regKey = findUserKey(registry, cleanName) || key;
  if (registry[regKey]) {
    registry[regKey].boundDeviceId = currentDevId;
    registry[regKey].boundDeviceName = currentDevName;
    registry[regKey].boundAt = new Date().toISOString();
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
  }

  return { allowed: true };
}

/**
 * Validação completa de Login e Senha com a Hierarquia Militar e Trava de Dispositivo Único
 */
export async function validateLoginAttempt(
  name: string,
  passAttempt: string
): Promise<LoginValidationResult> {
  const cleanName = name.trim();
  const rawPass = passAttempt.trim();
  const cleanPass = rawPass.toUpperCase();

  if (!cleanName) {
    return {
      allowed: false,
      status: 'rejected',
      message: 'Informe o nome de guerra do guerreiro.',
    };
  }

  const registry = await fetchRegistryFromCloud();
  const existingKey = findUserKey(registry, cleanName);

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
      ? (user.personalPassword && (cleanPass === user.personalPassword.toUpperCase() || rawPass === user.personalPassword))
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
    const localReg = getLocalUsersRegistry();
    const localUserKey = findUserKey(localReg, cleanName);
    if (localUserKey && localReg[localUserKey]) {
      localReg[localUserKey].status = 'approved';
      localReg[localUserKey].approvedAt = user.approvedAt;
      saveLocalUsersRegistry(localReg);
      pushRegistryToCloud(localReg);
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

  // 3. Usuário APROVADO: Checagem de Senha e Dispositivo
  // Caso 3.1: Já cadastrou senha pessoal própria
  if (user.hasChangedPassword && user.personalPassword) {
    const userPass = user.personalPassword.trim();
    const isPassValid = 
      cleanPass === userPass.toUpperCase() || 
      rawPass === userPass || 
      cleanPass === userPass;

    if (isPassValid) {
      // Senha correta -> Checa a trava de dispositivo único
      const deviceCheck = await verifyDeviceLock(cleanName, user);
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
  const isDefaultValid = DEFAULT_PASSCODES.includes(cleanPass) || DEFAULT_PASSCODES.includes(rawPass);
  if (isDefaultValid) {
    return {
      allowed: false,
      status: 'needs_new_password',
      message: `Primeiro Acesso Autorizado! Cadastre agora sua nova senha pessoal para ${cleanName}.`,
      userRecord: user,
      isFirstLogin: true,
    };
  } else if (rawPass.length >= 4) {
    // Aluno digitou uma senha pessoal inédita no login: grava e vincula dispositivo
    await setUserPersonalPassword(user.name || cleanName, rawPass);
    user.hasChangedPassword = true;
    user.personalPassword = rawPass;

    const deviceCheck = await verifyDeviceLock(cleanName, user);
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

/**
 * Cria e grava uma nova sessão ativa para o usuário (Garante sessão única em 1 aparelho)
 */
export async function createAndRecordSession(userName: string): Promise<string> {
  const sessionToken = 'sess_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
  const currentDevId = getCurrentDeviceId();
  const currentDevName = getDeviceFriendlyName();
  try {
    localStorage.setItem('pmpe_session_token', sessionToken);
    localStorage.setItem('pmpe_session_user', userName);
    localStorage.setItem('pmpe_session_created', new Date().toISOString());
  } catch {}

  // Sincroniza chave leve dedicada na nuvem: session_{key}
  const userKey = normalizeUserName(userName);
  const sessionPayload = {
    sessionToken,
    deviceId: currentDevId,
    deviceName: currentDevName,
    userName,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  try {
    await fetchWithTimeout(`${CLOUD_API_BASE}/session_${encodeURIComponent(userKey)}?ttl=2592000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessionPayload)
    }, 4000);
  } catch {}

  return sessionToken;
}

/**
 * Checa a validade da sessão ativa atual contra a nuvem (Anti-Fraude e Anti-Compartilhamento)
 */
export async function checkActiveSessionValidity(
  userName: string
): Promise<{ valid: boolean; reason?: 'other_device_logged_in' | 'device_mismatch' | 'revoked'; deviceName?: string; loginTime?: string }> {
  if (!userName || isMasterUser(userName)) {
    return { valid: true };
  }

  const localToken = localStorage.getItem('pmpe_session_token');
  const localDevId = getCurrentDeviceId();
  const userKey = normalizeUserName(userName);

  try {
    // 1. Checa a trava de dispositivo atômica (devlock)
    const devlockRes = await fetchWithTimeout(`${CLOUD_API_BASE}/devlock_${encodeURIComponent(userKey)}?_t=${Date.now()}`, {
      cache: 'no-store'
    }, 3000);

    if (devlockRes.ok) {
      const lockData = await devlockRes.json();
      if (lockData && lockData.deviceId && lockData.deviceId !== localDevId) {
        return {
          valid: false,
          reason: 'device_mismatch',
          deviceName: lockData.deviceName || 'Outro Aparelho',
          loginTime: lockData.boundAt
        };
      }
    }

    // 2. Checa a sessão ativa em tempo real (sessionToken)
    const res = await fetchWithTimeout(`${CLOUD_API_BASE}/session_${encodeURIComponent(userKey)}?_t=${Date.now()}`, {
      cache: 'no-store'
    }, 3000);

    if (res.ok) {
      const remoteSession = await res.json();
      if (remoteSession && remoteSession.sessionToken) {
        // Se há uma sessão remota diferente gravada na nuvem
        if (localToken && remoteSession.sessionToken !== localToken) {
          return {
            valid: false,
            reason: 'other_device_logged_in',
            deviceName: remoteSession.deviceName || 'Outro Celular/Computador',
            loginTime: remoteSession.createdAt
          };
        }
        // Se o deviceId na nuvem for diferente do atual
        if (remoteSession.deviceId && remoteSession.deviceId !== localDevId) {
          return {
            valid: false,
            reason: 'device_mismatch',
            deviceName: remoteSession.deviceName || 'Outro Aparelho',
            loginTime: remoteSession.createdAt
          };
        }
      }
    }
  } catch {
    // Falha temporária de conexão com o servidor: preserva a sessão local
  }

  return { valid: true };
}

/**
 * Encerra e limpa a sessão local e na nuvem
 */
export async function clearActiveSession(userName: string): Promise<void> {
  try {
    localStorage.removeItem('pmpe_session_token');
    localStorage.removeItem('pmpe_session_user');
  } catch {}

  if (userName && !isMasterUser(userName)) {
    const userKey = normalizeUserName(userName);
    try {
      await fetch(`${CLOUD_API_BASE}/session_${encodeURIComponent(userKey)}`, { method: 'DELETE' });
    } catch {}
  }
}

/**
 * Verifica se o aluno tem o Cronograma de Estudos VIP liberado
 */
export function isScheduleUnlocked(userName: string, userRecord?: UserAccessRecord): boolean {
  if (!userName) return false;
  if (isMasterUser(userName)) return true;
  const key = normalizeUserName(userName);
  // Checagem local imediata
  if (localStorage.getItem(`pmpe_vip_schedule_${key}`) === 'true') return true;
  if (userRecord && userRecord.hasScheduleAccess) return true;
  const local = getLocalUsersRegistry();
  if (local[key] && local[key].hasScheduleAccess) return true;
  return false;
}

/**
 * Libera o Cronograma VIP para o aluno (pelo Comandante Gean ou via chave de ativação)
 */
export async function grantScheduleAccess(targetKeyOrName: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName) || normalizeUserName(targetKeyOrName);
  if (local[localKey]) {
    local[localKey].hasScheduleAccess = true;
    saveLocalUsersRegistry(local);
  }
  localStorage.setItem(`pmpe_vip_schedule_${localKey}`, 'true');

  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;
  if (registry[key]) {
    registry[key].hasScheduleAccess = true;
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
  }

  // Também grava na chave individual do estudante
  try {
    const studentCloudKey = `student_${encodeURIComponent(key)}`;
    const curRes = await fetchWithTimeout(`${CLOUD_API_BASE}/${studentCloudKey}`, {}, 3000);
    if (curRes.ok) {
      const data = await curRes.json();
      data.hasScheduleAccess = true;
      await fetch(`${CLOUD_API_BASE}/${studentCloudKey}?ttl=31536000`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }
  } catch {}

  return true;
}

/**
 * Revoga o Cronograma VIP do aluno
 */
export async function revokeScheduleAccess(targetKeyOrName: string): Promise<boolean> {
  const local = getLocalUsersRegistry();
  const localKey = findUserKey(local, targetKeyOrName) || normalizeUserName(targetKeyOrName);
  if (local[localKey]) {
    local[localKey].hasScheduleAccess = false;
    saveLocalUsersRegistry(local);
  }
  localStorage.removeItem(`pmpe_vip_schedule_${localKey}`);

  const registry = await fetchRegistryFromCloud();
  const key = findUserKey(registry, targetKeyOrName) || localKey;
  if (registry[key]) {
    registry[key].hasScheduleAccess = false;
    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
  }
  return true;
}

/**
 * Estrutura para mensagens do Canal de Pedidos & Dúvidas
 */
export interface StudentSupportRequest {
  id: string;
  userName: string;
  type: 'cronograma_vip' | 'sugestao' | 'duvida' | 'report_erro' | 'outro';
  message: string;
  whatsappContact?: string;
  createdAt: string;
  status: 'pending' | 'resolved';
}

/**
 * Registra novo pedido do aluno no Canal de Pedidos
 */
export async function submitSupportRequest(
  userName: string,
  type: StudentSupportRequest['type'],
  message: string,
  whatsappContact?: string
): Promise<boolean> {
  const req: StudentSupportRequest = {
    id: 'req_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6),
    userName,
    type,
    message: message.trim(),
    whatsappContact: (whatsappContact || '').trim(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  try {
    const raw = localStorage.getItem('pmpe_support_requests');
    const list: StudentSupportRequest[] = raw ? JSON.parse(raw) : [];
    list.unshift(req);
    localStorage.setItem('pmpe_support_requests', JSON.stringify(list.slice(0, 50)));
  } catch {}

  try {
    await fetch(`${CLOUD_API_BASE}/support_req_${encodeURIComponent(req.id)}?ttl=2592000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });
    return true;
  } catch {
    return true;
  }
}

/**
 * Busca todos os pedidos recebidos para exibição no painel do Comandante Gean
 */
export async function fetchSupportRequests(): Promise<StudentSupportRequest[]> {
  const local: StudentSupportRequest[] = (() => {
    try {
      return JSON.parse(localStorage.getItem('pmpe_support_requests') || '[]');
    } catch {
      return [];
    }
  })();

  try {
    const listRes = await fetchWithTimeout(`${CLOUD_API_BASE}/?prefix=support_req_&format=json&_t=${Date.now()}`, {}, 3500);
    if (listRes.ok) {
      const keys: string[] = await listRes.json();
      if (Array.isArray(keys)) {
        const fetched = await Promise.all(
          keys.slice(0, 30).map(async (k) => {
            try {
              const r = await fetchWithTimeout(`${CLOUD_API_BASE}/${encodeURIComponent(k)}`, {}, 3000);
              if (r.ok) return await r.json();
            } catch {}
            return null;
          })
        );
        const valid = fetched.filter(Boolean) as StudentSupportRequest[];
        const map = new Map<string, StudentSupportRequest>();
        valid.forEach((v) => map.set(v.id, v));
        local.forEach((l) => map.set(l.id, l));
        return Array.from(map.values()).sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    }
  } catch {}

  return local;
}

/**
 * Marca um pedido como resolvido/atendido
 */
export async function updateSupportRequestStatus(id: string, status: 'pending' | 'resolved'): Promise<boolean> {
  try {
    const raw = localStorage.getItem('pmpe_support_requests');
    if (raw) {
      const list: StudentSupportRequest[] = JSON.parse(raw);
      const found = list.find((r) => r.id === id);
      if (found) {
        found.status = status;
        localStorage.setItem('pmpe_support_requests', JSON.stringify(list));
      }
    }
  } catch {}

  try {
    const r = await fetchWithTimeout(`${CLOUD_API_BASE}/support_req_${encodeURIComponent(id)}`, {}, 3000);
    if (r.ok) {
      const req: StudentSupportRequest = await r.json();
      req.status = status;
      await fetch(`${CLOUD_API_BASE}/support_req_${encodeURIComponent(id)}?ttl=2592000`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
      });
      return true;
    }
  } catch {}
  return true;
}

/**
 * Detecta a localização/imediação aproximada do aluno (Cidade, Estado) por IP ou fuso
 */
export async function detectApproximateLocation(): Promise<string> {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(2800) });
    if (res.ok) {
      const data = await res.json();
      if (data.city && data.region_code) {
        return `${data.city}, ${data.region_code}`;
      }
    }
  } catch {}

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes('Recife')) return 'Recife, PE';
    if (tz.includes('Fortaleza')) return 'Nordeste, BR';
    if (tz.includes('Sao_Paulo')) return 'São Paulo, SP';
    return 'Pernambuco, BR';
  } catch {
    return 'Região de Acesso Conectada';
  }
}

/**
 * Atualiza os dados de telemetria e progresso do aluno no registro local e na nuvem
 */
export async function updateStudentTelemetry(
  userName: string,
  data: {
    locationCity?: string;
    questionsTodayCount?: number;
    questionsTotalCount?: number;
    overallAccuracy?: number;
  }
): Promise<void> {
  if (!userName || isMasterUser(userName)) return;
  const key = normalizeUserName(userName);

  try {
    const registry = getLocalUsersRegistry();
    if (registry[key]) {
      registry[key].lastActiveTime = new Date().toISOString();
      if (data.locationCity) registry[key].lastLocationCity = data.locationCity;
      if (typeof data.questionsTodayCount === 'number') registry[key].questionsTodayCount = data.questionsTodayCount;
      if (typeof data.questionsTotalCount === 'number') registry[key].questionsTotalCount = data.questionsTotalCount;
      if (typeof data.overallAccuracy === 'number') registry[key].overallAccuracy = data.overallAccuracy;

      saveLocalUsersRegistry(registry);
      pushRegistryToCloud(registry).catch(() => {});
    }
  } catch {}
}

/**
 * Salva o telefone, e-mail do aluno e horário de estudos configurado no cronograma
 */
export async function saveStudentPhoneAndScheduleTime(
  userName: string,
  phoneNumber: string,
  studyAlertTime: string,
  email?: string
): Promise<boolean> {
  if (!userName) return false;
  const key = normalizeUserName(userName);

  try {
    const registry = getLocalUsersRegistry();
    if (!registry[key]) {
      registry[key] = {
        name: userName.trim(),
        status: 'approved',
        isAdmin: false,
        requestedAt: new Date().toISOString(),
        hasChangedPassword: false
      };
    }

    registry[key].phoneNumber = phoneNumber.trim();
    registry[key].studyAlertTime = studyAlertTime.trim();
    if (email && email.trim()) {
      registry[key].email = email.trim();
    }
    registry[key].lastActiveTime = new Date().toISOString();

    saveLocalUsersRegistry(registry);
    await pushRegistryToCloud(registry);
    return true;
  } catch (err) {
    console.error('Erro ao salvar dados de contato do aluno:', err);
    return false;
  }
}



