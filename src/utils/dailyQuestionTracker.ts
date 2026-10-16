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

export function markQuestionAnsweredToday(userName: string | undefined, questionId: string): void {
  try {
    if (!questionId) return;
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
    currentSet.add(questionId);
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

export function filterOutAnsweredToday<T extends { id?: string }>(
  items: T[], 
  userName?: string
): T[] {
  if (!items || items.length === 0) return [];
  const answeredToday = getAnsweredTodayIds(userName);
  if (answeredToday.size === 0) return items;

  // Filtra ESTRITAMENTE: se foi respondida hoje, NUNCA mais aparece hoje!
  return items.filter((item) => item.id && !answeredToday.has(item.id));
}
