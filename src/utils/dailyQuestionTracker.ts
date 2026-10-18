function getCanonicalUser(userName?: string): string {
  if (userName && userName.trim()) {
    return userName.trim().toLowerCase().replace(/\s+/g, '_');
  }
  try {
    const local = localStorage.getItem('pmpe_auth_user');
    if (local) {
      const parsed = JSON.parse(local);
      if (parsed?.name) return parsed.name.trim().toLowerCase().replace(/\s+/g, '_');
    }
    const session = sessionStorage.getItem('pmpe_auth_user');
    if (session) {
      const parsed = JSON.parse(session);
      if (parsed?.name) return parsed.name.trim().toLowerCase().replace(/\s+/g, '_');
    }
  } catch {
    // fallback
  }
  return 'combatente';
}

function getTodayKey(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function normalizeQuestionKey(text?: string): string {
  if (!text) return '';
  return text.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F]/g, '').slice(0, 90);
}

export function getAnsweredTodayIds(userName?: string): Set<string> {
  try {
    const today = getTodayKey();
    const userClean = getCanonicalUser(userName);
    const storageKey = `pmpe_answered_${userClean}_${today}`;
    const raw = localStorage.getItem(storageKey);
    if (!raw) return new Set();
    const list = JSON.parse(raw);
    return new Set(Array.isArray(list) ? list : []);
  } catch {
    return new Set();
  }
}

export function markQuestionAnsweredToday(
  userName: string | undefined, 
  questionId: string, 
  questionText?: string
): void {
  try {
    if (!questionId && !questionText) return;
    const today = getTodayKey();
    const userClean = getCanonicalUser(userName);
    const storageKey = `pmpe_answered_${userClean}_${today}`;
    
    // Limpar chaves antigas de outros dias para liberar espaço no navegador
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`pmpe_answered_${userClean}_`) && !k.endsWith(today)) {
        localStorage.removeItem(k);
      }
    }

    const currentSet = getAnsweredTodayIds(userName);
    if (questionId) currentSet.add(questionId);
    if (questionText) {
      const textHash = normalizeQuestionKey(questionText);
      if (textHash) currentSet.add(`txt_${textHash}`);
    }
    localStorage.setItem(storageKey, JSON.stringify(Array.from(currentSet)));
  } catch {
    // fallback
  }
}

export function clearAnsweredToday(userName?: string): void {
  try {
    const today = getTodayKey();
    const userClean = getCanonicalUser(userName);
    const storageKey = `pmpe_answered_${userClean}_${today}`;
    localStorage.removeItem(storageKey);
  } catch {
    // fallback
  }
}

export function filterOutAnsweredToday<T extends { id?: string; question?: string }>(
  items: T[], 
  userName?: string
): T[] {
  if (!items || items.length === 0) return [];
  const answeredToday = getAnsweredTodayIds(userName);
  if (answeredToday.size === 0) return items;

  // Filtra ESTRITAMENTE: se foi respondida hoje (por id ou por texto), NUNCA mais aparece hoje!
  return items.filter((item) => {
    if (item.id && answeredToday.has(item.id)) return false;
    if (item.question) {
      const textKey = `txt_${normalizeQuestionKey(item.question)}`;
      if (answeredToday.has(textKey)) return false;
    }
    return true;
  });
}
