/**
 * GERENCIADOR DO CADERNO DE ERROS INTELIGENTE COM REPETIÇÃO ESPAÇADA (ALGORITMO SM-2 / ANKI)
 * Memoriza automaticamente todas as questões que o soldado erra em qualquer modo.
 * Agenda revisões inteligentes (1 dia, 3 dias, 7 dias, 15 dias, 30 dias) para retenção de longo prazo.
 */

const STORAGE_PREFIX = 'pmpe_mistakes_';

export type SrsRating = 'again' | 'hard' | 'good' | 'easy';

export interface MistakeRecord {
  questionId: string;
  failedCount: number;
  firstFailedAt: string;
  lastFailedAt: string;
  isResolved: boolean;
  resolvedAt?: string;
  // Campos do Algoritmo SM-2 (Repetição Espaçada)
  intervalDays: number; // Intervalo atual em dias (ex: 1, 3, 7, 15, 30)
  repetitions: number;  // Quantidade de revisões com sucesso consecutivas
  easeFactor: number;   // Fator de facilidade (padrão 2.5)
  nextReviewDate: string; // Data e hora (ISO) em que a questão vence para revisão
  lastReviewedAt?: string;
  srsStage: 'learning' | 'reviewing' | 'mastered';
}

function getUserMistakesKey(userName: string): string {
  const clean = userName.trim().toLowerCase().replace(/\s+/g, '_');
  return `${STORAGE_PREFIX}${clean}`;
}

export function getAllMistakes(userName: string): Record<string, MistakeRecord> {
  if (!userName) return {};
  try {
    const raw = localStorage.getItem(getUserMistakesKey(userName));
    if (raw) {
      const parsed = JSON.parse(raw);
      // Garante retrocompatibilidade se faltarem campos novos do SRS
      for (const key of Object.keys(parsed)) {
        if (!parsed[key].intervalDays) parsed[key].intervalDays = 1;
        if (typeof parsed[key].repetitions !== 'number') parsed[key].repetitions = 0;
        if (!parsed[key].easeFactor) parsed[key].easeFactor = 2.5;
        if (!parsed[key].nextReviewDate) parsed[key].nextReviewDate = parsed[key].lastFailedAt || new Date().toISOString();
        if (!parsed[key].srsStage) parsed[key].srsStage = parsed[key].isResolved ? 'mastered' : 'learning';
      }
      return parsed;
    }
  } catch {}
  return {};
}

export function saveAllMistakes(userName: string, data: Record<string, MistakeRecord>): void {
  if (!userName) return;
  try {
    localStorage.setItem(getUserMistakesKey(userName), JSON.stringify(data));
  } catch {}
}

/**
 * Registra que o soldado errou uma questão em qualquer simulado ou modo.
 * Inicializa a questão no ciclo de Repetição Espaçada com revisão agendada para 24h depois.
 */
export function recordMistake(userName: string, questionId: string): void {
  if (!userName || !questionId) return;
  const db = getAllMistakes(userName);
  const now = new Date();
  const nextDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 dia

  if (!db[questionId]) {
    db[questionId] = {
      questionId,
      failedCount: 1,
      firstFailedAt: now.toISOString(),
      lastFailedAt: now.toISOString(),
      isResolved: false,
      intervalDays: 1,
      repetitions: 0,
      easeFactor: 2.5,
      nextReviewDate: nextDate.toISOString(),
      srsStage: 'learning'
    };
  } else {
    db[questionId].failedCount += 1;
    db[questionId].lastFailedAt = now.toISOString();
    db[questionId].isResolved = false;
    // Reseta o ciclo do SM-2 para 1 dia se falhou novamente
    db[questionId].intervalDays = 1;
    db[questionId].repetitions = 0;
    db[questionId].nextReviewDate = nextDate.toISOString();
    db[questionId].srsStage = 'learning';
  }

  saveAllMistakes(userName, db);
}

/**
 * Processa a resposta do aluno na sessão de Repetição Espaçada usando o algoritmo SM-2
 * Avaliações:
 * - 'again' (Errei): Intervalo volta para 1 dia.
 * - 'hard' (Difícil): Intervalo de 3 dias.
 * - 'good' (Bom / Lembrei): Intervalo avança para 7 dias.
 * - 'easy' (Fácil / Dominado): Intervalo avança para 15 a 30 dias.
 */
export function processSrsAnswer(userName: string, questionId: string, rating: SrsRating): MistakeRecord | null {
  if (!userName || !questionId) return null;
  const db = getAllMistakes(userName);
  const record = db[questionId];
  if (!record) return null;

  const now = new Date();
  record.lastReviewedAt = now.toISOString();

  let nextDays = 1;

  switch (rating) {
    case 'again':
      record.repetitions = 0;
      record.easeFactor = Math.max(1.3, record.easeFactor - 0.2);
      nextDays = 1;
      record.srsStage = 'learning';
      record.isResolved = false;
      break;

    case 'hard':
      record.repetitions += 1;
      record.easeFactor = Math.max(1.3, record.easeFactor - 0.15);
      nextDays = record.repetitions === 1 ? 2 : 3;
      record.srsStage = 'learning';
      record.isResolved = false;
      break;

    case 'good':
      record.repetitions += 1;
      if (record.repetitions === 1) nextDays = 3;
      else if (record.repetitions === 2) nextDays = 7;
      else nextDays = Math.round(record.intervalDays * record.easeFactor);
      record.srsStage = nextDays >= 15 ? 'mastered' : 'reviewing';
      record.isResolved = nextDays >= 15;
      if (record.isResolved) record.resolvedAt = now.toISOString();
      break;

    case 'easy':
      record.repetitions += 1;
      record.easeFactor += 0.15;
      if (record.repetitions === 1) nextDays = 7;
      else nextDays = Math.max(15, Math.round(record.intervalDays * record.easeFactor * 1.3));
      record.srsStage = 'mastered';
      record.isResolved = true;
      record.resolvedAt = now.toISOString();
      break;
  }

  record.intervalDays = nextDays;
  record.nextReviewDate = new Date(now.getTime() + nextDays * 24 * 60 * 60 * 1000).toISOString();

  db[questionId] = record;
  saveAllMistakes(userName, db);
  return record;
}

/**
 * Registra que o soldado acertou e superou uma questão (compatibilidade legado)
 */
export function resolveMistake(userName: string, questionId: string): void {
  processSrsAnswer(userName, questionId, 'good');
}

/**
 * Retorna os IDs das questões que venceram hoje para revisão no algoritmo SM-2
 */
export function getDueTodayMistakeIds(userName: string): string[] {
  const db = getAllMistakes(userName);
  const nowTime = new Date().getTime();
  return Object.values(db)
    .filter(m => {
      if (m.isResolved && m.srsStage === 'mastered') return false;
      const reviewTime = new Date(m.nextReviewDate).getTime();
      return reviewTime <= nowTime;
    })
    .sort((a, b) => new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime())
    .map(m => m.questionId);
}

/**
 * Retorna quantas questões estão vencidas para revisão hoje
 */
export function getDueTodayMistakesCount(userName: string): number {
  return getDueTodayMistakeIds(userName).length;
}

/**
 * Retorna todos os IDs pendentes de retreinamento (compatibilidade legado)
 */
export function getPendingMistakeIds(userName: string): string[] {
  const db = getAllMistakes(userName);
  return Object.values(db)
    .filter(m => !m.isResolved)
    .sort((a, b) => new Date(b.lastFailedAt).getTime() - new Date(a.lastFailedAt).getTime())
    .map(m => m.questionId);
}

/**
 * Quantidade de falhas pendentes de retreinamento (compatibilidade legado)
 */
export function getPendingMistakesCount(userName: string): number {
  return getPendingMistakeIds(userName).length;
}

/**
 * Retorna as estatísticas consolidadas do SRS para o dashboard
 */
export function getSrsStatistics(userName: string) {
  const db = getAllMistakes(userName);
  const all = Object.values(db);
  const nowTime = new Date().getTime();

  const dueToday = all.filter(m => (!m.isResolved || m.srsStage !== 'mastered') && new Date(m.nextReviewDate).getTime() <= nowTime).length;
  const learning = all.filter(m => m.srsStage === 'learning' && !m.isResolved).length;
  const reviewing = all.filter(m => m.srsStage === 'reviewing' && !m.isResolved).length;
  const mastered = all.filter(m => m.srsStage === 'mastered' || m.isResolved).length;

  return {
    totalMistakes: all.length,
    dueToday,
    learning,
    reviewing,
    mastered
  };
}

/**
 * Limpa todos os erros resolvidos
 */
export function clearResolvedMistakes(userName: string): void {
  const db = getAllMistakes(userName);
  const clean: Record<string, MistakeRecord> = {};
  for (const [id, rec] of Object.entries(db)) {
    if (!rec.isResolved) {
      clean[id] = rec;
    }
  }
  saveAllMistakes(userName, clean);
}
