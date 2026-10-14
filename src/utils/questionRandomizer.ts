import type { QuizQuestion } from '../types/game';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/**
 * Embaralha as alternativas (A, B, C, D, E) de uma questão
 * e recalcula o `correctIndex` para que o gabarito correto
 * fique distribuído aleatoriamente entre A, B, C, D e E.
 */
export function randomizeQuestionOptions(question: QuizQuestion): QuizQuestion {
  if (!question.options || question.options.length <= 1) {
    return question;
  }

  const originalCorrectIndex = question.correctIndex ?? 0;
  const correctText = question.options[originalCorrectIndex];

  // Mapear cada opção com sua referência original
  const indexedOptions = question.options.map((text, idx) => ({
    text,
    originalLetter: LETTERS[idx] || `Opção ${idx + 1}`,
    isCorrect: idx === originalCorrectIndex,
  }));

  // Fisher-Yates Shuffle para as alternativas
  for (let i = indexedOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
  }

  const newOptions = indexedOptions.map((item) => item.text);
  const newCorrectIndex = indexedOptions.findIndex((item) => item.isCorrect);

  // Remapear analiseAlternativas se existir
  let newAnaliseAlternativas: Record<string, string> | undefined = undefined;
  if (question.analiseAlternativas) {
    newAnaliseAlternativas = {};
    indexedOptions.forEach((item, newIdx) => {
      const newLetter = LETTERS[newIdx];
      const oldText = question.analiseAlternativas?.[item.originalLetter];
      if (oldText) {
        newAnaliseAlternativas![newLetter] = oldText;
      } else if (item.isCorrect) {
        newAnaliseAlternativas![newLetter] = 'Alternativa correta segundo o gabarito oficial da banca AOCP.';
      } else {
        newAnaliseAlternativas![newLetter] = 'Alternativa incorreta.';
      }
    });
  }

  return {
    ...question,
    options: newOptions,
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
    analiseAlternativas: newAnaliseAlternativas || question.analiseAlternativas,
  };
}

/**
 * Prepara o lote de questões para uma partida:
 * 1. Embaralha completamente a ordem das questões (para nunca repetir a mesma sequência inicial).
 * 2. Embaralha aleatoriamente as alternativas (A a E) de cada questão.
 * 3. Opcionalmente limita a quantidade de questões por sessão (ex: 20, 30 ou todas).
 */
export function prepareGameQuestions(questions: QuizQuestion[], limit?: number): QuizQuestion[] {
  if (!questions || questions.length === 0) return [];

  // Fisher-Yates Shuffle para as perguntas
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = limit && limit > 0 ? shuffled.slice(0, limit) : shuffled;

  // Embaralha as alternativas de cada pergunta selecionada
  return selected.map(randomizeQuestionOptions);
}
