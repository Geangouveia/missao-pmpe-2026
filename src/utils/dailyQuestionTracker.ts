/**
 * GESTOR DE ROTATIVIDADE DIÁRIA DE QUESTÕES (PMPE 2026)
 * Evita a repetição de questões já respondidas no mesmo dia pelo guerreiro.
 * À meia-noite (00:00), o histórico diário reseta automaticamente.
 */

function getTodayKey(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getAnsweredTodayIds(userName: string): Set<string> {
  try {
    const today = getTodayKey();
    const userClean = (userName || 'combatente').trim().toLowerCase().replace(/\s+/g, '_');
    const storageKey = `pmpe_answered_${userClean}_${today}`;
    const raw = localStorage.getItem(storageKey);
    if (!raw) return new Set();
    const list = JSON.parse(raw);
    return new Set(Array.isArray(list) ? list : []);
  } catch {
    return new Set();
  }
}

export function markQuestionAnsweredToday(userName: string, questionId: string): void {
  try {
    if (!questionId) return;
    const today = getTodayKey();
    const userClean = (userName || 'combatente').trim().toLowerCase().replace(/\s+/g, '_');
    const storageKey = `pmpe_answered_${userClean}_${today}`;
    
    // Limpar chaves antigas de outros dias para liberar espaço no navegador
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`pmpe_answered_${userClean}_`) && !k.endsWith(today)) {
        localStorage.removeItem(k);
      }
    }

    const currentSet = getAnsweredTodayIds(userName);
    currentSet.add(questionId);
    localStorage.setItem(storageKey, JSON.stringify(Array.from(currentSet)));
  } catch {
    // fallback
  }
}

export function filterOutAnsweredToday<T extends { id?: string }>(
  items: T[], 
  userName: string
): T[] {
  if (!items || items.length === 0) return items;
  const answeredToday = getAnsweredTodayIds(userName);
  if (answeredToday.size === 0) return items;

  const unanswered = items.filter((item) => item.id && !answeredToday.has(item.id));
  
  // Se o aluno já respondeu todas as questões disponíveis hoje, permite reciclar
  if (unanswered.length === 0) {
    return items;
  }
  return unanswered;
}
