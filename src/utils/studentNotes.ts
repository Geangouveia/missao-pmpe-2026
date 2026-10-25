/**
 * Gerenciador de Anotações Táticas do Aluno por Questão
 * Permite que o estudante registre macetes, alertas de pegadinha e anotações pessoais.
 */
const NOTES_PREFIX = 'pmpe_student_notes_';

function getStorageKey(userName: string): string {
  const safe = (userName || 'recruta').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '_');
  return `${NOTES_PREFIX}${safe}`;
}

export function getAllStudentNotes(userName: string): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(getStorageKey(userName));
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.error('Erro ao ler anotações do aluno:', err);
  }
  return {};
}

export function getQuestionNote(userName: string, questionId: string): string {
  const all = getAllStudentNotes(userName);
  return all[questionId] || '';
}

export function saveQuestionNote(userName: string, questionId: string, noteText: string): void {
  if (typeof window === 'undefined') return;
  try {
    const all = getAllStudentNotes(userName);
    if (!noteText.trim()) {
      delete all[questionId];
    } else {
      all[questionId] = noteText.trim();
    }
    localStorage.setItem(getStorageKey(userName), JSON.stringify(all));
  } catch (err) {
    console.error('Erro ao salvar anotação do aluno:', err);
  }
}
