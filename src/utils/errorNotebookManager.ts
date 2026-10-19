/**
 * GERENCIADOR DO CADERNO DE ERROS INTELIGENTE (PRONTUÁRIO DE FALHAS)
 * Memoriza automaticamente todas as questões que o soldado erra em qualquer modo.
 * Permite retreinamento tático focado até a eliminação completa das fraquezas na banca AOCP.
 */

const STORAGE_PREFIX = 'pmpe_mistakes_';

export interface MistakeRecord {
  questionId: string;
  failedCount: number;
  firstFailedAt: string;
  lastFailedAt: string;
  isResolved: boolean;
  resolvedAt?: string;
}

function getUserMistakesKey(userName: string): string {
  const clean = userName.trim().toLowerCase().replace(/\s+/g, '_');
  return `${STORAGE_PREFIX}${clean}`;
}

export function getAllMistakes(userName: string): Record<string, MistakeRecord> {
  if (!userName) return {};
  try {
    const raw = localStorage.getItem(getUserMistakesKey(userName));
    if (raw) return JSON.parse(raw);
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
 * Registra que o soldado errou uma questão
 */
export function recordMistake(userName: string, questionId: string): void {
  if (!userName || !questionId) return;
  const db = getAllMistakes(userName);
  const now = new Date().toISOString();

  if (!db[questionId]) {
    db[questionId] = {
      questionId,
      failedCount: 1,
      firstFailedAt: now,
      lastFailedAt: now,
      isResolved: false
    };
  } else {
    db[questionId].failedCount += 1;
    db[questionId].lastFailedAt = now;
    db[questionId].isResolved = false;
  }

  saveAllMistakes(userName, db);
}

/**
 * Registra que o soldado acertou e superou uma questão do caderno de erros
 */
export function resolveMistake(userName: string, questionId: string): void {
  if (!userName || !questionId) return;
  const db = getAllMistakes(userName);
  if (db[questionId]) {
    db[questionId].isResolved = true;
    db[questionId].resolvedAt = new Date().toISOString();
    saveAllMistakes(userName, db);
  }
}

/**
 * Retorna os IDs das questões pendentes de retreinamento (não resolvidas)
 */
export function getPendingMistakeIds(userName: string): string[] {
  const db = getAllMistakes(userName);
  return Object.values(db)
    .filter(m => !m.isResolved)
    .sort((a, b) => new Date(b.lastFailedAt).getTime() - new Date(a.lastFailedAt).getTime())
    .map(m => m.questionId);
}

/**
 * Quantidade de falhas pendentes de retreinamento
 */
export function getPendingMistakesCount(userName: string): number {
  return getPendingMistakeIds(userName).length;
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
