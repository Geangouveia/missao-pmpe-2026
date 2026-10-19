/**
 * GERENCIADOR DE COMPETIÇÃO SEMANAL & TELEMETRIA EM TEMPO REAL DO PELOTÃO PMPE 2026
 *
 * Regras Operacionais Oficiais:
 * 1. Ciclo Semanal: Segunda-feira 00:00:00 até Sábado 23:59:59.
 * 2. Domingo é DIA DE DESCANSO / REUNIÃO DO PELOTÃO: atividades no domingo NÃO pontuam na competição.
 * 3. Pontuação: 1 acerto = 1 ponto no ranking de pontuação (de Segunda a Sábado).
 * 4. Telemetria em Tempo Real: a cada questão respondida (certa ou errada), atualiza local e nuvem KVdb:
 *    - Se teve acesso hoje (hasAccessedToday)
 *    - Quantas questões respondeu hoje (questionsToday)
 *    - Total de respondidas, acertos, erros e aproveitamento (%)
 *    - Dias ativos na semana e tempo logado/estudo
 * 5. Controle de Acesso Master: Somente o Comandante Gean pode cadastrar participantes e estipular a premiação (R$).
 */

import { isMasterUser, normalizeUserName, updateStudentTelemetry } from './authManager';

const CLOUD_BUCKET_ID = 'NdxEHuePZcZiBQmK9oR99o';
const CLOUD_API_BASE = `https://kvdb.io/${CLOUD_BUCKET_ID}`;

export interface MilitaryWeekInfo {
  weekId: string; // Ex: "week_2026-10-12" (segunda-feira da semana de referência)
  year: number;
  startDateFormatted: string; // "12/10/2026 (Segunda)"
  endDateFormatted: string; // "17/10/2026 (Sábado)"
  isSunday: boolean; // Verdadeiro no Domingo (Dia de Descanso/Reunião)
  isRondaNoturna: boolean; // Verdadeiro das 21:00 às 23:59 (Pontos em Dobro!)
  statusLabel: string;
  daysRemaining: number;
}

export interface PastWeekChampion {
  id: string;
  weekId: string;
  weekLabel: string; // Ex: "Semana de 12/10 a 17/10/2026"
  winnerName: string;
  score: number;
  totalAnswered: number;
  accuracy: number;
  prizeText: string;
  awardedAt: string;
}

export interface CompetitionConfig {
  prizeText: string; // Ex: "R$ 20,00"
  prizeDescription: string; // Ex: "PIX ao 1º colocado do ranking no fechamento de Sábado às 23:59!"
  enrolledSoldiers: string[]; // Chaves normalizadas dos soldados participantes (ex: ["thiago", "marcos"])
  updatedAt: string;
  updatedBy: string;
}

export interface SoldierCompetitionScore {
  soldierKey: string;
  displayName: string;
  weekId: string;
  // Pontuação da semana oficial (Segunda a Sábado)
  weekScore: number; // Quantidade de questões acertadas na semana
  weekTotalAnswered: number; // Total de questões feitas na semana
  weekWrongAnswers: number;
  weekAccuracy: number; // 0-100%
  // Telemetria diária em tempo real
  todayDate: string; // "YYYY-MM-DD"
  questionsToday: number; // Quantas questões respondeu HOJE
  hasAccessedToday: boolean; // Teve acesso hoje
  lastActiveIso: string;
  // Frequência e tempo
  weekActiveDays: string[]; // Lista de datas "YYYY-MM-DD"
  daysActiveCount: number; // Quantas vezes entrou na semana
  weekMinutesOnline: number; // Minutos estimados de estudo
  // Totais gerais acumulados
  totalLifetimeAnswered: number;
  totalLifetimeCorrect: number;
  totalLifetimeWrong: number;
}

export interface LeaderboardEntry extends SoldierCompetitionScore {
  rank: number; // 1, 2, 3...
  isFirstPlace: boolean;
  isEnrolled: boolean;
  rankBadge: string; // "🥇 1º", "🥈 2º", etc.
}

const LOCAL_COMP_CONFIG_KEY = 'pmpe_comp_config_v1';
const LOCAL_COMP_SCORE_PREFIX = 'pmpe_comp_score_';
const CLOUD_CONFIG_KEY = 'comp_config_pmpe_v1';

function sanitizeKey(str: string): string {
  return encodeURIComponent(str.trim().toLowerCase().replace(/\s+/g, '_'));
}

/**
 * Calcula o ciclo semanal militar PMPE:
 * Segunda-feira 00:00 até Sábado 23:59.
 * Domingo é dia de descanso/reunião.
 */
export function getMilitaryWeekInfo(referenceDate = new Date()): MilitaryWeekInfo {
  const d = new Date(referenceDate);
  const dayOfWeek = d.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const isSunday = dayOfWeek === 0;

  let monday: Date;
  let saturday: Date;
  let daysRemaining = 0;

  if (isSunday) {
    // No domingo, o ciclo que encerrou foi de 6 dias atrás até ontem (sábado)
    monday = new Date(d);
    monday.setDate(d.getDate() - 6);
    saturday = new Date(d);
    saturday.setDate(d.getDate() - 1);
    daysRemaining = 0;
  } else {
    // Segunda a Sábado
    const diffToMonday = dayOfWeek - 1; // 1 -> 0, 2 -> 1, ..., 6 -> 5
    monday = new Date(d);
    monday.setDate(d.getDate() - diffToMonday);
    saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);
    daysRemaining = 6 - dayOfWeek;
  }

  // Zera horários para consistência
  monday.setHours(0, 0, 0, 0);
  saturday.setHours(23, 59, 59, 999);

  const mondayIso = monday.toISOString().slice(0, 10);
  const weekId = `week_${mondayIso}`;

  const pad = (n: number) => String(n).padStart(2, '0');
  const startStr = `${pad(monday.getDate())}/${pad(monday.getMonth() + 1)}/${monday.getFullYear()} (Segunda)`;
  const endStr = `${pad(saturday.getDate())}/${pad(saturday.getMonth() + 1)}/${saturday.getFullYear()} (Sábado)`;

  const isRondaNoturna = !isSunday && new Date().getHours() >= 21 && new Date().getHours() <= 23;

  return {
    weekId,
    year: monday.getFullYear(),
    startDateFormatted: startStr,
    endDateFormatted: endStr,
    isSunday,
    isRondaNoturna,
    statusLabel: isSunday
      ? '🏖️ DOMINGO: DESCANSO / REUNIÃO DO PELOTÃO'
      : isRondaNoturna
      ? '🚨 RONDA NOTURNA ATIVA: 2X PONTOS!'
      : `⚔️ DISPUTA ATIVA (Faltam ${daysRemaining} ${daysRemaining === 1 ? 'dia' : 'dias'})`,
    daysRemaining,
  };
}

/**
 * Verifica se a Ronda Noturna do Pelotão está ativa (21h às 23h59)
 * Durante esse horário de prontidão tática, cada acerto vale 2 PONTOS na competição!
 */
export function isRondaNoturnaActive(): boolean {
  const d = new Date();
  if (d.getDay() === 0) return false; // Domingo não pontua
  const hour = d.getHours();
  return hour >= 21 && hour <= 23;
}

const CLOUD_HALL_OF_FAME_KEY = 'comp_hall_of_fame_pmpe';
const LOCAL_HALL_OF_FAME_KEY = 'pmpe_comp_hall_of_fame';

export async function fetchHallOfFame(): Promise<PastWeekChampion[]> {
  try {
    const res = await fetch(`${CLOUD_API_BASE}/${CLOUD_HALL_OF_FAME_KEY}?_t=${Date.now()}`);
    if (res.ok) {
      const list = await res.json();
      if (Array.isArray(list)) {
        localStorage.setItem(LOCAL_HALL_OF_FAME_KEY, JSON.stringify(list));
        return list;
      }
    }
  } catch {}

  try {
    const raw = localStorage.getItem(LOCAL_HALL_OF_FAME_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}

  return [
    {
      id: 'champ-pmpe-initial',
      weekId: 'week_2026-10-05',
      weekLabel: 'Semana de 05/10 a 10/10/2026',
      winnerName: 'Thiago',
      score: 165,
      totalAnswered: 190,
      accuracy: 87,
      prizeText: 'R$ 20,00',
      awardedAt: '2026-10-10T23:59:00.000Z'
    }
  ];
}

export async function archivePastChampion(
  championOrName: PastWeekChampion | string,
  weekId?: string,
  weekLabel?: string,
  score?: number,
  accuracy?: number,
  prizeText?: string,
  _notes?: string
): Promise<boolean> {
  let champion: PastWeekChampion;
  if (typeof championOrName === 'object') {
    champion = championOrName;
  } else {
    champion = {
      id: `champ_${Date.now()}`,
      weekId: weekId || `week_${Date.now()}`,
      weekLabel: weekLabel || 'Semana Encerrada',
      winnerName: championOrName,
      score: score || 0,
      totalAnswered: score || 0,
      accuracy: accuracy || 100,
      prizeText: prizeText || 'R$ 20,00',
      awardedAt: new Date().toISOString()
    };
  }

  const current = await fetchHallOfFame();
  const filtered = current.filter((c) => c.weekId !== champion.weekId);
  const updated = [champion, ...filtered];

  try {
    localStorage.setItem(LOCAL_HALL_OF_FAME_KEY, JSON.stringify(updated));
    const res = await fetch(`${CLOUD_API_BASE}/${CLOUD_HALL_OF_FAME_KEY}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    return res.ok;
  } catch {
    return true;
  }
}

/**
 * Obtém a configuração da competição (premiação e soldados inscritos)
 */
export function getLocalCompetitionConfig(): CompetitionConfig {
  try {
    const raw = localStorage.getItem(LOCAL_COMP_CONFIG_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}

  return {
    prizeText: 'R$ 20,00',
    prizeDescription: 'PIX ao 1º colocado do ranking no fechamento de Sábado às 23:59!',
    enrolledSoldiers: ['thiago'],
    updatedAt: new Date().toISOString(),
    updatedBy: 'Comandante Gean',
  };
}

export function saveLocalCompetitionConfig(config: CompetitionConfig): void {
  try {
    localStorage.setItem(LOCAL_COMP_CONFIG_KEY, JSON.stringify(config));
  } catch {}
}

/**
 * Puxa configuração da competição da nuvem KVdb
 */
export async function fetchCompetitionConfig(): Promise<CompetitionConfig> {
  const local = getLocalCompetitionConfig();
  try {
    const res = await fetch(`${CLOUD_API_BASE}/${CLOUD_CONFIG_KEY}?_t=${Date.now()}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const cloudConfig: CompetitionConfig = await res.json();
      if (cloudConfig && cloudConfig.prizeText) {
        saveLocalCompetitionConfig(cloudConfig);
        return cloudConfig;
      }
    }
  } catch {}
  return local;
}

/**
 * Salva a configuração da competição na nuvem (Apenas Comandante Gean)
 */
export async function saveCompetitionConfig(
  newConfig: Partial<CompetitionConfig>,
  callerName: string
): Promise<boolean> {
  if (!isMasterUser(callerName)) {
    console.warn('Tentativa não autorizada de editar premiação da competição!');
    return false;
  }

  const current = getLocalCompetitionConfig();
  const merged: CompetitionConfig = {
    ...current,
    ...newConfig,
    updatedAt: new Date().toISOString(),
    updatedBy: callerName.trim(),
  };

  saveLocalCompetitionConfig(merged);

  try {
    const res = await fetch(`${CLOUD_API_BASE}/${CLOUD_CONFIG_KEY}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(merged),
    });
    return res.ok;
  } catch (err) {
    console.warn('Erro ao salvar config da competição na nuvem:', err);
    return false;
  }
}

/**
 * Inscreve ou desinscreve um soldado na competição semanal (Apenas Comandante Gean)
 */
export async function toggleSoldierEnrollment(
  soldierName: string,
  enroll: boolean,
  callerName: string
): Promise<CompetitionConfig | null> {
  if (!isMasterUser(callerName)) return null;

  const config = await fetchCompetitionConfig();
  const key = normalizeUserName(soldierName);

  let updatedList = [...(config.enrolledSoldiers || [])];
  if (enroll) {
    if (!updatedList.includes(key)) updatedList.push(key);
  } else {
    updatedList = updatedList.filter((k) => k !== key);
  }

  const updatedConfig: CompetitionConfig = {
    ...config,
    enrolledSoldiers: updatedList,
    updatedAt: new Date().toISOString(),
    updatedBy: callerName,
  };

  saveLocalCompetitionConfig(updatedConfig);
  await saveCompetitionConfig(updatedConfig, callerName);
  return updatedConfig;
}

/**
 * Obtém o score de um soldado do localStorage
 */
export function getLocalSoldierScore(soldierName: string, weekId: string): SoldierCompetitionScore {
  const soldierKey = normalizeUserName(soldierName);
  const storageKey = `${LOCAL_COMP_SCORE_PREFIX}${weekId}_${soldierKey}`;
  const todayStr = new Date().toISOString().slice(0, 10);

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const data: SoldierCompetitionScore = JSON.parse(raw);
      // Atualiza hasAccessedToday com base na data da última atividade
      data.hasAccessedToday = data.todayDate === todayStr && data.questionsToday > 0;
      return data;
    }
  } catch {}

  return {
    soldierKey,
    displayName: soldierName.trim(),
    weekId,
    weekScore: 0,
    weekTotalAnswered: 0,
    weekWrongAnswers: 0,
    weekAccuracy: 0,
    todayDate: todayStr,
    questionsToday: 0,
    hasAccessedToday: false,
    lastActiveIso: new Date().toISOString(),
    weekActiveDays: [],
    daysActiveCount: 0,
    weekMinutesOnline: 0,
    totalLifetimeAnswered: 0,
    totalLifetimeCorrect: 0,
    totalLifetimeWrong: 0,
  };
}

export function saveLocalSoldierScore(score: SoldierCompetitionScore): void {
  try {
    const storageKey = `${LOCAL_COMP_SCORE_PREFIX}${score.weekId}_${score.soldierKey}`;
    localStorage.setItem(storageKey, JSON.stringify(score));
  } catch {}
}

// Fila de sincronização com debounce para não engasgar a animação de resposta
let syncTimeout: any = null;
const pendingSyncs: Map<string, SoldierCompetitionScore> = new Map();

async function pushScoreToCloud(score: SoldierCompetitionScore): Promise<boolean> {
  const cloudKey = `comp_score_${score.weekId}_${sanitizeKey(score.soldierKey)}`;
  try {
    const res = await fetch(`${CLOUD_API_BASE}/${cloudKey}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(score),
    });
    return res.ok;
  } catch (err) {
    console.warn('Erro ao sincronizar score da competição na nuvem:', err);
    return false;
  }
}

function scheduleCloudSync(score: SoldierCompetitionScore) {
  pendingSyncs.set(score.soldierKey, score);
  if (syncTimeout) clearTimeout(syncTimeout);

  syncTimeout = setTimeout(() => {
    pendingSyncs.forEach((item) => {
      pushScoreToCloud(item).catch(() => {});
    });
    pendingSyncs.clear();
  }, 450);
}

// Rastreamento de tempo da sessão em memória
let lastQuestionTimestamp = Date.now();

/**
 * REGISTRO EM TEMPO REAL: Chamado a CADA questão respondida no app!
 *
 * Atualiza instantaneamente:
 * - Quantas questões respondeu hoje
 * - Se acessou hoje
 * - Total de acertos/erros
 * - Pontos da semana (se não for Domingo)
 * - Dias ativos e tempo de estudo
 */
export function recordLiveQuestionAnswer(
  soldierName: string,
  isCorrect: boolean,
  estimatedStudySeconds?: number
): SoldierCompetitionScore {
  if (!soldierName || !soldierName.trim()) {
    return getLocalSoldierScore('soldado', 'week_temp');
  }

  const cleanName = soldierName.trim();
  const soldierKey = normalizeUserName(cleanName);
  const weekInfo = getMilitaryWeekInfo();
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const nowIso = now.toISOString();

  const score = getLocalSoldierScore(cleanName, weekInfo.weekId);

  // 1. Telemetria diária (Questões respondidas hoje)
  if (score.todayDate !== todayStr) {
    // Novo dia: reinicia o contador diário
    score.todayDate = todayStr;
    score.questionsToday = 1;
  } else {
    score.questionsToday = (score.questionsToday || 0) + 1;
  }
  score.hasAccessedToday = true;
  score.lastActiveIso = nowIso;

  // 2. Totais acumulados gerais do aluno
  score.totalLifetimeAnswered = (score.totalLifetimeAnswered || 0) + 1;
  if (isCorrect) {
    score.totalLifetimeCorrect = (score.totalLifetimeCorrect || 0) + 1;
  } else {
    score.totalLifetimeWrong = (score.totalLifetimeWrong || 0) + 1;
  }

  // 3. Regra Operacional da Competição Semanal (Segunda a Sábado)
  // DOMINGO É DIA DE DESCANSO / REUNIÃO DO PELOTÃO: atividades no domingo NÃO pontuam na competição semanal!
  if (!weekInfo.isSunday) {
    score.weekTotalAnswered = (score.weekTotalAnswered || 0) + 1;
    if (isCorrect) {
      // 1 acerto = 1 ponto (ou 2 PONTOS se estiver em Ronda Noturna das 21h às 23h59!)
      const points = isRondaNoturnaActive() ? 2 : 1;
      score.weekScore = (score.weekScore || 0) + points;
    } else {
      score.weekWrongAnswers = (score.weekWrongAnswers || 0) + 1;
    }

    // Dias ativos na semana
    if (!score.weekActiveDays) score.weekActiveDays = [];
    if (!score.weekActiveDays.includes(todayStr)) {
      score.weekActiveDays.push(todayStr);
    }
    score.daysActiveCount = score.weekActiveDays.length;
  }

  // Aproveitamento percentual da semana
  const totalInWeek = Math.max(1, score.weekTotalAnswered);
  score.weekAccuracy = Math.round((score.weekScore / totalInWeek) * 100);

  // 4. Tempo logado estimado na semana
  const nowMs = Date.now();
  const gapMinutes = (nowMs - lastQuestionTimestamp) / (1000 * 60);
  lastQuestionTimestamp = nowMs;

  let addedMinutes = 0;
  if (estimatedStudySeconds && estimatedStudySeconds > 0) {
    addedMinutes = Math.round((estimatedStudySeconds / 60) * 10) / 10;
  } else if (gapMinutes > 0 && gapMinutes < 20) {
    // Intervalo normal entre questões (até 20 minutos)
    addedMinutes = Math.min(3, Math.round(gapMinutes * 10) / 10);
  } else {
    addedMinutes = 1; // Pelo menos 1 minuto por questão
  }

  if (!weekInfo.isSunday) {
    score.weekMinutesOnline = Math.round(((score.weekMinutesOnline || 0) + addedMinutes) * 10) / 10;
  }

  // Salva no localStorage imediatamente
  saveLocalSoldierScore(score);

  // Sincroniza em segundo plano com a nuvem KVdb (debounce 450ms)
  scheduleCloudSync(score);

  // Atualiza também os dados de telemetria no authManager para o Comandante ver
  updateStudentTelemetry(cleanName, {
    questionsTodayCount: score.questionsToday,
    questionsTotalCount: score.totalLifetimeAnswered,
    overallAccuracy: Math.round(
      (score.totalLifetimeCorrect / Math.max(1, score.totalLifetimeAnswered)) * 100
    ),
  }).catch(() => {});

  return score;
}

/**
 * Busca o Leaderboard completo da semana (Segunda a Sábado)
 * Consolidando pontuações da nuvem KVdb e dados de todos os soldados cadastrados
 */
export async function fetchWeeklyLeaderboard(
  targetWeekId?: string
): Promise<{
  entries: LeaderboardEntry[];
  config: CompetitionConfig;
  weekInfo: MilitaryWeekInfo;
}> {
  const weekInfo = getMilitaryWeekInfo();
  const weekId = targetWeekId || weekInfo.weekId;
  const config = await fetchCompetitionConfig();
  const todayStr = new Date().toISOString().slice(0, 10);

  // 1. Busca todos os scores da semana armazenados na nuvem
  const cloudScores: Record<string, SoldierCompetitionScore> = {};

  try {
    const listRes = await fetch(`${CLOUD_API_BASE}/?prefix=comp_score_${weekId}_&format=json`);
    if (listRes.ok) {
      const keys: string[] = await listRes.json();
      await Promise.all(
        keys.map(async (key) => {
          try {
            const r = await fetch(`${CLOUD_API_BASE}/${key}`);
            if (r.ok) {
              const sc: SoldierCompetitionScore = await r.json();
              if (sc && sc.soldierKey) {
                cloudScores[sc.soldierKey] = sc;
              }
            }
          } catch {}
        })
      );
    }
  } catch (err) {
    console.warn('Erro ao listar scores da nuvem:', err);
  }

  // 2. Busca o registro de todos os alunos do pelotão para garantir que todos apareçam
  let allRegistryUsers: Record<string, any> = {};
  try {
    const authRes = await fetch(`${CLOUD_API_BASE}/auth_registry_pmpe_v2?_t=${Date.now()}`);
    if (authRes.ok) {
      allRegistryUsers = await authRes.json();
    }
  } catch {}

  const enrolledSet = new Set((config.enrolledSoldiers || []).map((s) => normalizeUserName(s)));

  // 3. Mescla todos os soldados
  const candidateKeys = new Set<string>([
    ...Object.keys(cloudScores),
    ...Object.keys(allRegistryUsers),
    ...enrolledSet,
  ]);

  const entries: LeaderboardEntry[] = [];

  candidateKeys.forEach((key) => {
    // Ignora contas não-soldado se for o caso
    const isCommander = isMasterUser(key);
    const regUser = allRegistryUsers[key];
    const cloudSc = cloudScores[key];
    const localSc = getLocalSoldierScore(key, weekId);

    const displayName =
      regUser?.name || cloudSc?.displayName || localSc?.displayName || key.toUpperCase();

    // Prioriza o score mais atualizado
    const baseScore: SoldierCompetitionScore = cloudSc || localSc;

    const isToday = baseScore.todayDate === todayStr;
    const questionsToday = isToday ? (baseScore.questionsToday || regUser?.questionsTodayCount || 0) : 0;
    const hasAccessedToday = isToday && questionsToday > 0;

    const isEnrolled = enrolledSet.has(key);

    const entry: LeaderboardEntry = {
      ...baseScore,
      soldierKey: key,
      displayName,
      weekScore: baseScore.weekScore || 0,
      weekTotalAnswered: baseScore.weekTotalAnswered || 0,
      weekWrongAnswers: baseScore.weekWrongAnswers || 0,
      weekAccuracy:
        baseScore.weekTotalAnswered > 0
          ? Math.round((baseScore.weekScore / baseScore.weekTotalAnswered) * 100)
          : 0,
      todayDate: todayStr,
      questionsToday,
      hasAccessedToday,
      lastActiveIso: baseScore.lastActiveIso || regUser?.lastActiveTime || new Date().toISOString(),
      weekActiveDays: baseScore.weekActiveDays || (hasAccessedToday ? [todayStr] : []),
      daysActiveCount: (baseScore.weekActiveDays || []).length || (hasAccessedToday ? 1 : 0),
      weekMinutesOnline: baseScore.weekMinutesOnline || 0,
      totalLifetimeAnswered:
        baseScore.totalLifetimeAnswered || regUser?.questionsTotalCount || baseScore.weekTotalAnswered || 0,
      totalLifetimeCorrect: baseScore.totalLifetimeCorrect || baseScore.weekScore || 0,
      totalLifetimeWrong: baseScore.totalLifetimeWrong || baseScore.weekWrongAnswers || 0,
      rank: 0,
      isFirstPlace: false,
      isEnrolled,
      rankBadge: '',
    };

    // Só adiciona ao leaderboard se estiver inscrito na competição pelo Comandante
    // OU se for o próprio Comandante inspecionando
    if (isEnrolled || enrolledSet.size === 0) {
      entries.push(entry);
    }
  });

  // 4. Ordenação oficial do ranking:
  // 1º Critério: Mais acertos na semana (weekScore)
  // 2º Critério: Maior taxa de acerto (%)
  // 3º Critério: Total de questões respondidas
  entries.sort((a, b) => {
    if (b.weekScore !== a.weekScore) return b.weekScore - a.weekScore;
    if (b.weekAccuracy !== a.weekAccuracy) return b.weekAccuracy - a.weekAccuracy;
    return b.weekTotalAnswered - a.weekTotalAnswered;
  });

  // 5. Atribui posições e medalhas
  entries.forEach((entry, idx) => {
    const rank = idx + 1;
    entry.rank = rank;
    entry.isFirstPlace = rank === 1 && entry.weekScore > 0;

    if (rank === 1) entry.rankBadge = '🥇 1º LUGAR';
    else if (rank === 2) entry.rankBadge = '🥈 2º LUGAR';
    else if (rank === 3) entry.rankBadge = '🥉 3º LUGAR';
    else entry.rankBadge = `${rank}º`;
  });

  return {
    entries,
    config,
    weekInfo,
  };
}
