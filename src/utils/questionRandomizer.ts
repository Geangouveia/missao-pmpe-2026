import type { QuizQuestion } from '../types/game';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/**
 * Embaralha as alternativas (A, B, C, D, E) de uma questão
 * e recalcula o `correctIndex` para que o gabarito correto
 * fique distribuído aleatoriamente entre A, B, C, D e E.
 */
/**
 * Embaralha as alternativas (A, B, C, D, E) de uma questão
 * e recalcula o `correctIndex` mantendo fidelidade didática.
 * NOTA: Para questões oficiais do concurso com explicações atreladas
 * a letras específicas, preserva-se a ordem original para evitar distorções no gabarito.
 */
export function randomizeQuestionOptions(question: QuizQuestion): QuizQuestion {
  // Retorna a questão intacta para manter coerência total com gabarito oficial,
  // fundamentação legal, raio-x das alternativas e feedback de erros.
  return question;
}

/**
 * Prepara o lote de questões para uma partida:
 * 1. Embaralha completamente a ordem das questões (para nunca repetir a mesma sequência inicial).
 * 2. Mantém a fidelidade integral das alternativas oficiais (A, B, C, D, E), explicações e gabaritos.
 * 3. Opcionalmente limita a quantidade de questões por sessão (ex: 20, 30 ou todas).
 */
export function prepareGameQuestions(questions: QuizQuestion[], limit?: number): QuizQuestion[] {
  if (!questions || questions.length === 0) return [];

  // Fisher-Yates Shuffle para a ordem de exibição das perguntas
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = limit && limit > 0 ? shuffled.slice(0, limit) : shuffled;
  return selected;
}

