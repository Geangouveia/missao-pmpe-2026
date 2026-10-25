/**
 * Sistema Tático de Vibração Háptica (Haptic Feedback)
 * Fornece feedback sensorial físico ao tocar, acertar ou errar questões no celular.
 */
export const haptics = {
  // Toque suave em botões e navegação
  tap: () => {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      try {
        navigator.vibrate(15);
      } catch {}
    }
  },

  // Disparo certeiro / Acerto de questão
  success: () => {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      try {
        navigator.vibrate([25]);
      } catch {}
    }
  },

  // Falha tática / Erro de questão
  error: () => {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      try {
        navigator.vibrate([40, 50, 40]);
      } catch {}
    }
  },

  // Promoção de patente / Conquista militar
  levelUp: () => {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      try {
        navigator.vibrate([50, 70, 50, 70, 100]);
      } catch {}
    }
  }
};
