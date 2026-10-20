/**
 * NARRADOR TÁTICO DE QUESTÕES (TEXT-TO-SPEECH NATIVO PT-BR)
 * Utiliza a Web Speech API para narrar enunciados e alternativas para estudo no TAF, trânsito ou academia.
 */

let isCurrentlySpeaking = false;

export interface SpeechCallbacks {
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
}

export function speakQuestion(
  questionStem: string, 
  options: string[], 
  callbacksOrStart?: SpeechCallbacks | (() => void), 
  maybeEnd?: () => void
): void {
  if (!('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis não suportado neste navegador.');
    return;
  }

  let onStart: (() => void) | undefined;
  let onEnd: (() => void) | undefined;
  let onError: (() => void) | undefined;

  if (typeof callbacksOrStart === 'function') {
    onStart = callbacksOrStart;
    onEnd = maybeEnd;
  } else if (callbacksOrStart && typeof callbacksOrStart === 'object') {
    onStart = callbacksOrStart.onStart;
    onEnd = callbacksOrStart.onEnd;
    onError = callbacksOrStart.onError;
  }

  // Interrompe qualquer narração prévia
  window.speechSynthesis.cancel();

  // Limpa tags do enunciado
  const cleanStem = questionStem.replace(/^\[[^\]]+\]\s*/i, '').replace(/^\([^)]+\)\s*/i, '');
  
  // Monta texto contínuo e fluído
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const optionsText = options.map((opt, idx) => `Alternativa ${letters[idx]}: ${opt}`).join('. ');
  const fullText = `Questão: ${cleanStem}. ${optionsText}`;

  const utterance = new SpeechSynthesisUtterance(fullText);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.08; // Leve aceleração natural para agilidade
  utterance.pitch = 1.0;

  // Busca voz brasileira de qualidade
  const voices = window.speechSynthesis.getVoices();
  const brVoice = voices.find(v => v.lang === 'pt-BR' || v.lang === 'pt_BR');
  if (brVoice) {
    utterance.voice = brVoice;
  }

  utterance.onstart = () => {
    isCurrentlySpeaking = true;
    onStart?.();
  };

  utterance.onend = () => {
    isCurrentlySpeaking = false;
    onEnd?.();
  };

  utterance.onerror = () => {
    isCurrentlySpeaking = false;
    onError?.() || onEnd?.();
  };

  window.speechSynthesis.speak(utterance);
}

export function stopSpeech(): void {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    isCurrentlySpeaking = false;
  }
}

export const stopSpeaking = stopSpeech;

export function isSpeechActive(): boolean {
  return 'speechSynthesis' in window && window.speechSynthesis.speaking;
}
