export interface StudentSessionRecord {
  id: string;
  date: string; // ISO
  formattedDate: string; // "13/10/2026 01:45"
  simuladoName: string;
  totalAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number; // percentage 0-100
  score: number;
  xpEarned: number;
  timeSpentSeconds: number;
  averageTimePerQuestion: number; // segundos por questão
  subjectBreakdown: Record<string, { total: number; correct: number }>;
}

export interface StudentProfile {
  name: string;
  firstLogin: string;
  lastLogin: string;
  totalSessions: number;
  totalAnswered: number;
  totalCorrect: number;
  totalWrong: number;
  overallAccuracy: number;
  totalScore: number;
  totalXp: number;
  totalTimeSpentSeconds: number;
  averageTimePerQuestion: number;
  sessions: StudentSessionRecord[];
  subjectStats: Record<string, { answered: number; correct: number; accuracy: number }>;
}

const STORAGE_KEY = 'pmpe_students_analytics_db';

// Nuvem KVdb do Pelotão PMPE 2026 (CORS aberto, persistente para múltiplos dispositivos)
const CLOUD_BUCKET_ID = 'NdxEHuePZcZiBQmK9oR99o';
const CLOUD_API_BASE = `https://kvdb.io/${CLOUD_BUCKET_ID}`;

function sanitizeKey(name: string): string {
  return encodeURIComponent(name.trim().toLowerCase().replace(/\s+/g, '_'));
}

export function getAllStudents(): Record<string, StudentProfile> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Erro ao carregar estudantes locais:', err);
  }
  return {};
}

export function saveAllStudents(data: Record<string, StudentProfile>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Erro ao salvar estudantes locais:', err);
  }
}

/**
 * Envia o perfil do aluno para a Nuvem do Pelotão
 */
export async function syncStudentToCloud(profile: StudentProfile): Promise<boolean> {
  try {
    const key = `student_${sanitizeKey(profile.name)}`;
    const res = await fetch(`${CLOUD_API_BASE}/${key}?ttl=31536000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });
    return res.ok;
  } catch (err) {
    console.warn('Erro ao sincronizar perfil do aluno na nuvem:', err);
    return false;
  }
}

/**
 * Busca todos os estudantes cadastrados na Nuvem do Pelotão
 * e mescla com os dados locais sem sobrescrever dados mais recentes.
 */
export async function fetchCloudPelotao(): Promise<Record<string, StudentProfile>> {
  try {
    const res = await fetch(`${CLOUD_API_BASE}/?prefix=student_&format=json`);
    if (!res.ok) throw new Error('Falha ao listar membros do pelotão na nuvem');
    const keys: string[] = await res.json();

    const cloudProfiles: Record<string, StudentProfile> = {};

    await Promise.all(
      keys.map(async (key) => {
        try {
          const r = await fetch(`${CLOUD_API_BASE}/${key}`);
          if (r.ok) {
            const profile: StudentProfile = await r.json();
            if (profile && profile.name) {
              cloudProfiles[profile.name] = profile;
            }
          }
        } catch {
          // Continua para as outras chaves
        }
      })
    );

    const localDb = getAllStudents();
    const mergedDb: Record<string, StudentProfile> = { ...localDb };

    for (const [name, cloudP] of Object.entries(cloudProfiles)) {
      const localP = mergedDb[name];
      if (!localP) {
        mergedDb[name] = cloudP;
      } else {
        const cloudDate = new Date(cloudP.lastLogin || 0).getTime();
        const localDate = new Date(localP.lastLogin || 0).getTime();
        if (cloudDate >= localDate || (cloudP.sessions && cloudP.sessions.length >= (localP.sessions?.length || 0))) {
          mergedDb[name] = cloudP;
        }
      }
    }

    saveAllStudents(mergedDb);
    return mergedDb;
  } catch (err) {
    console.warn('Falha na sincronização em nuvem, mantendo dados locais:', err);
    return getAllStudents();
  }
}

export function recordStudentLogin(name: string): StudentProfile {
  const cleanName = name.trim();
  const db = getAllStudents();
  const now = new Date();
  const nowIso = now.toISOString();

  if (!db[cleanName]) {
    db[cleanName] = {
      name: cleanName,
      firstLogin: nowIso,
      lastLogin: nowIso,
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
    };
  } else {
    db[cleanName].lastLogin = nowIso;
  }

  saveAllStudents(db);

  // Sincroniza em segundo plano com a nuvem
  syncStudentToCloud(db[cleanName]).catch(() => {});

  return db[cleanName];
}

export function recordQuizCompletion(
  name: string,
  sessionData: {
    simuladoName: string;
    totalAnswered: number;
    correctAnswers: number;
    score: number;
    xpEarned: number;
    subjectBreakdown: Record<string, { total: number; correct: number }>;
    timeSpentSeconds?: number;
    averageTimePerQuestion?: number;
  }
): StudentProfile {
  const cleanName = name.trim();
  const db = getAllStudents();
  const now = new Date();

  // Garante que o perfil existe
  if (!db[cleanName]) {
    recordStudentLogin(cleanName);
  }

  const profile = db[cleanName];
  const wrongAnswers = Math.max(0, sessionData.totalAnswered - sessionData.correctAnswers);
  const accuracy = Math.round((sessionData.correctAnswers / Math.max(1, sessionData.totalAnswered)) * 100);

  const formattedDate = now.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  const sessionTimeSpent = sessionData.timeSpentSeconds || 0;
  const sessionAvgTime = sessionData.averageTimePerQuestion || 
    (sessionTimeSpent > 0 ? Math.round((sessionTimeSpent / Math.max(1, sessionData.totalAnswered)) * 10) / 10 : 0);

  const newSession: StudentSessionRecord = {
    id: `sess-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    date: now.toISOString(),
    formattedDate,
    simuladoName: sessionData.simuladoName || 'Simulado Geral',
    totalAnswered: sessionData.totalAnswered,
    correctAnswers: sessionData.correctAnswers,
    wrongAnswers,
    accuracy,
    score: sessionData.score,
    xpEarned: sessionData.xpEarned,
    timeSpentSeconds: sessionTimeSpent,
    averageTimePerQuestion: sessionAvgTime,
    subjectBreakdown: sessionData.subjectBreakdown || {}
  };

  // Atualiza totais globais
  profile.totalSessions += 1;
  profile.totalAnswered += sessionData.totalAnswered;
  profile.totalCorrect += sessionData.correctAnswers;
  profile.totalWrong += wrongAnswers;
  profile.totalScore += sessionData.score;
  profile.totalXp += sessionData.xpEarned;
  profile.totalTimeSpentSeconds = (profile.totalTimeSpentSeconds || 0) + sessionTimeSpent;
  profile.averageTimePerQuestion = profile.totalAnswered > 0
    ? Math.round(((profile.totalTimeSpentSeconds || 0) / profile.totalAnswered) * 10) / 10
    : 0;
  profile.overallAccuracy = Math.round((profile.totalCorrect / Math.max(1, profile.totalAnswered)) * 100);
  profile.lastLogin = now.toISOString();

  // Histórico de sessões (mantém as últimas 50)
  profile.sessions.unshift(newSession);
  if (profile.sessions.length > 50) {
    profile.sessions.pop();
  }

  // Atualiza estatísticas por disciplina
  if (!profile.subjectStats) profile.subjectStats = {};
  for (const [subject, data] of Object.entries(sessionData.subjectBreakdown || {})) {
    if (!profile.subjectStats[subject]) {
      profile.subjectStats[subject] = { answered: 0, correct: 0, accuracy: 0 };
    }
    const stat = profile.subjectStats[subject];
    stat.answered += data.total;
    stat.correct += data.correct;
    stat.accuracy = Math.round((stat.correct / Math.max(1, stat.answered)) * 100);
  }

  saveAllStudents(db);

  // Sincroniza em segundo plano com a nuvem compartilhada
  syncStudentToCloud(profile).catch(() => {});

  return profile;
}

export function getStudentProfile(name: string): StudentProfile | null {
  const db = getAllStudents();
  return db[name.trim()] || null;
}
