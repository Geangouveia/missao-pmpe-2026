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
  sessions: StudentSessionRecord[];
  subjectStats: Record<string, { answered: number; correct: number; accuracy: number }>;
}

const STORAGE_KEY = 'pmpe_students_analytics_db';

export function getAllStudents(): Record<string, StudentProfile> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Erro ao carregar estudantes:', err);
  }
  return {};
}

export function saveAllStudents(data: Record<string, StudentProfile>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Erro ao salvar estudantes:', err);
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
      sessions: [],
      subjectStats: {}
    };
  } else {
    db[cleanName].lastLogin = nowIso;
  }

  saveAllStudents(db);
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
    subjectBreakdown: sessionData.subjectBreakdown || {}
  };

  // Atualiza totais globais
  profile.totalSessions += 1;
  profile.totalAnswered += sessionData.totalAnswered;
  profile.totalCorrect += sessionData.correctAnswers;
  profile.totalWrong += wrongAnswers;
  profile.totalScore += sessionData.score;
  profile.totalXp += sessionData.xpEarned;
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
  return profile;
}

export function getStudentProfile(name: string): StudentProfile | null {
  const db = getAllStudents();
  return db[name.trim()] || null;
}
