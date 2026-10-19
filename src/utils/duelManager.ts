/**
 * GERENCIADOR DE DUELOS 1 VS 1 TÁTICOS DO PELOTÃO PMPE 2026
 * Permite que um soldado desafie outro soldado cadastrado para um combate tático de 5 questões da AOCP.
 * Sincronizado na nuvem KVdb para combate entre múltiplos dispositivos.
 */

import { normalizeUserName } from './authManager';

const CLOUD_BUCKET_ID = 'NdxEHuePZcZiBQmK9oR99o';
const CLOUD_API_BASE = `https://kvdb.io/${CLOUD_BUCKET_ID}`;
const LOCAL_DUELS_KEY = 'pmpe_platoon_duels_v1';

export interface PlatoonDuel {
  id: string;
  challengerName: string;
  opponentName: string;
  questionIds: string[];
  // Respostas do Desafiante
  challengerScore: number;
  challengerTimeSeconds: number;
  challengerCompleted: boolean;
  // Respostas do Desafiado
  opponentScore: number;
  opponentTimeSeconds: number;
  opponentCompleted: boolean;
  // Desfecho do Combate
  winnerName: string | null; // Nome do vencedor ou 'Empate Tático'
  status: 'waiting_opponent' | 'finished';
  createdAt: string;
  completedAt?: string;
}

export function getLocalDuels(): PlatoonDuel[] {
  try {
    const raw = localStorage.getItem(LOCAL_DUELS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

export function saveLocalDuels(duels: PlatoonDuel[]): void {
  try {
    localStorage.setItem(LOCAL_DUELS_KEY, JSON.stringify(duels));
  } catch {}
}

/**
 * Cria um novo duelo e salva na nuvem
 */
export async function createDuel(
  challengerName: string,
  opponentName: string,
  questionIds: string[],
  challengerScore: number,
  challengerTimeSeconds: number
): Promise<PlatoonDuel | null> {
  const duelId = `duel_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const newDuel: PlatoonDuel = {
    id: duelId,
    challengerName: challengerName.trim(),
    opponentName: opponentName.trim(),
    questionIds,
    challengerScore,
    challengerTimeSeconds,
    challengerCompleted: true,
    opponentScore: 0,
    opponentTimeSeconds: 0,
    opponentCompleted: false,
    winnerName: null,
    status: 'waiting_opponent',
    createdAt: now
  };

  // Salva localmente
  const duels = getLocalDuels();
  const updated = [newDuel, ...duels];
  saveLocalDuels(updated);

  // Sincroniza na nuvem
  try {
    await fetch(`${CLOUD_API_BASE}/${duelId}?ttl=2592000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDuel)
    });
  } catch {}

  return newDuel;
}

/**
 * Conclui a participação do desafiado e define o vencedor
 */
export async function completeDuelOpponent(
  duelId: string,
  opponentScore: number,
  opponentTimeSeconds: number
): Promise<PlatoonDuel | null> {
  let duel: PlatoonDuel | null = null;

  // Busca duelo atualizado na nuvem
  try {
    const res = await fetch(`${CLOUD_API_BASE}/${duelId}`);
    if (res.ok) {
      duel = await res.json();
    }
  } catch {}

  if (!duel) {
    const local = getLocalDuels();
    duel = local.find(d => d.id === duelId) || null;
  }

  if (!duel) return null;

  duel.opponentScore = opponentScore;
  duel.opponentTimeSeconds = opponentTimeSeconds;
  duel.opponentCompleted = true;
  duel.status = 'finished';
  duel.completedAt = new Date().toISOString();

  // Critério de Vitória:
  // 1º Quem acertou mais questões
  // 2º Critério de desempate: Quem respondeu mais rápido (menos segundos)
  if (duel.opponentScore > duel.challengerScore) {
    duel.winnerName = duel.opponentName;
  } else if (duel.challengerScore > duel.opponentScore) {
    duel.winnerName = duel.challengerName;
  } else {
    // Empate em acertos -> decide no tempo
    if (duel.opponentTimeSeconds < duel.challengerTimeSeconds) {
      duel.winnerName = duel.opponentName;
    } else if (duel.challengerTimeSeconds < duel.opponentTimeSeconds) {
      duel.winnerName = duel.challengerName;
    } else {
      duel.winnerName = 'Empate Tático';
    }
  }

  // Atualiza local e nuvem
  const localList = getLocalDuels();
  const updatedList = [duel, ...localList.filter(d => d.id !== duelId)];
  saveLocalDuels(updatedList);

  try {
    await fetch(`${CLOUD_API_BASE}/${duelId}?ttl=2592000`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(duel)
    });
  } catch {}

  return duel;
}

/**
 * Busca todos os duelos em que o usuário está envolvido (como desafiante ou desafiado)
 */
export async function fetchUserDuels(userName: string): Promise<PlatoonDuel[]> {
  const clean = userName.trim().toLowerCase();
  const local = getLocalDuels();

  try {
    const res = await fetch(`${CLOUD_API_BASE}/?prefix=duel_&format=json`);
    if (res.ok) {
      const keys: string[] = await res.json();
      const cloudDuels: PlatoonDuel[] = [];

      await Promise.all(
        keys.map(async (key) => {
          try {
            const r = await fetch(`${CLOUD_API_BASE}/${key}`);
            if (r.ok) {
              const d: PlatoonDuel = await r.json();
              if (
                d &&
                (d.challengerName.toLowerCase() === clean ||
                 d.opponentName.toLowerCase() === clean)
              ) {
                cloudDuels.push(d);
              }
            }
          } catch {}
        })
      );

      // Mescla com locais sem duplicar
      const map: Record<string, PlatoonDuel> = {};
      [...cloudDuels, ...local].forEach(d => {
        if (!map[d.id] || d.status === 'finished') {
          map[d.id] = d;
        }
      });

      const merged = Object.values(map).sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      saveLocalDuels(merged);
      return merged;
    }
  } catch {}

  return local.filter(
    d => d.challengerName.toLowerCase() === clean || d.opponentName.toLowerCase() === clean
  );
}
