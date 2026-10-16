import { getAllStudents } from './studentAnalytics';
import { isMasterUser } from './authManager';

/**
 * Retorna a data local no formato YYYY-MM-DD (fuso horário do Brasil/dispositivo do usuário)
 */
export function getLocalDayString(dateObj: Date = new Date()): string {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, '0');
  const d = String(dateObj.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Registra o dia de hoje como ativo e calcula a sequência (streak) real ininterrupta de dias
 */
export function updateAndCalculateStreak(userName: string): number {
  if (!userName || !userName.trim()) return 1;

  const cleanName = userName.trim();
  const storageKey = `pmpe_study_history_${cleanName.toLowerCase().replace(/[^a-z0-9_-]/g, '_')}`;
  
  // 1. Carrega histórico de dias salvos
  let datesSet = new Set<string>();
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const arr = JSON.parse(saved);
      if (Array.isArray(arr)) {
        arr.forEach((d: string) => datesSet.add(d));
      }
    }
  } catch {
    // fallback
  }

  // 2. Extrai datas de sessões registradas no histórico do aluno
  try {
    const all = getAllStudents();
    const profile = all[cleanName] || all[Object.keys(all).find(k => k.toLowerCase() === cleanName.toLowerCase()) || ''];
    if (profile && Array.isArray(profile.sessions)) {
      profile.sessions.forEach((s) => {
        if (s.date) {
          try {
            const d = new Date(s.date);
            datesSet.add(getLocalDayString(d));
          } catch {
            // fallback
          }
        }
      });
    }
  } catch {
    // fallback
  }

  // 3. Adiciona o dia de hoje
  const today = new Date();
  const todayStr = getLocalDayString(today);
  datesSet.add(todayStr);

  // 4. Tratamento especial para o Comandante Gean (3 dias consecutivos já jogados)
  if (isMasterUser(cleanName)) {
    const d1 = new Date(today);
    d1.setDate(d1.getDate() - 1);
    const d2 = new Date(today);
    d2.setDate(d2.getDate() - 2);
    datesSet.add(getLocalDayString(d1));
    datesSet.add(getLocalDayString(d2));
  }

  // Salva histórico de datas atualizado
  const datesArray = Array.from(datesSet).sort();
  try {
    localStorage.setItem(storageKey, JSON.stringify(datesArray));
  } catch {
    // fallback
  }

  // 5. Calcula o streak contando dias consecutivos para trás a partir de hoje
  let streak = 0;
  const runner = new Date(today);

  while (datesSet.has(getLocalDayString(runner))) {
    streak++;
    runner.setDate(runner.getDate() - 1);
  }

  return Math.max(1, streak);
}
