export type GameMode = 'quiz' | 'match' | 'battle' | 'flashcards' | 'survival' | 'maze' | 'wordsearch';

export type CategoryId = 
  | 'portugues' 
  | 'historia_pe' 
  | 'raciocinio' 
  | 'informatica' 
  | 'constitucional' 
  | 'humanos_leis' 
  | 'legislacao_pmpe'
  | 'legislacao_extravagante'
  | 'simulado_geral'
  | 'custom';

export type BlocoEdital = 'bloco_1' | 'bloco_2' | 'bloco_3';

export interface Category {
  id: CategoryId;
  name: string;
  bloco?: BlocoEdital;
  blocoNome?: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  badge?: string;
}

export interface QuizQuestion {
  id: string;
  categoryId: CategoryId;
  bloco: BlocoEdital;
  materiaNome: string;
  topicoEdital?: string;
  question: string;
  options: string[];
  correctIndex: number; // 0 a 4 (A, B, C, D, E)
  explanation: string;
  fundamentacaoLegal?: string;
  hint: string;
  difficulty: 'easy' | 'medium' | 'hard';
  banca?: string; // Ex: 'Instituto AOCP'
  simuladoOrigem?: string; // Ex: 'Simulado 1ª Semana', 'Simulado 2ª Semana', 'Simulado Oficial NUCE PMPE'
  passoAPassoConta?: string[]; // Passo a passo detalhado de resolução matemática em RLM
  analiseAlternativas?: Record<string, string>; // Raio-X de cada alternativa: A, B, C, D, E
  dicaMacete?: string; // Macete mnemônico tático da PMPE / AOCP
  porqueErrou?: Record<number, string>; // Feedback específico para a alternativa incorreta que o usuário marcou
  textoApoio?: string; // Texto base / motivador para questões de interpretação e análise textual
  tituloTexto?: string; // Título do texto de apoio
}

export interface MatchPair {
  id: string;
  categoryId: CategoryId;
  bloco: BlocoEdital;
  term: string;
  definition: string;
  difficulty?: 'facilimo' | 'facil' | 'medio' | 'dificil' | 'dificilimo';
  explanation?: string;
}

export interface Flashcard {
  id: string;
  categoryId: CategoryId;
  bloco: BlocoEdital;
  front: string;
  back: string;
  categoryName: string;
  tag?: string;
}

export interface BossEnemy {
  id: string;
  name: string;
  title: string;
  avatar: string;
  maxHp: number;
  attackPower: number;
  description: string;
  weakness: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface PlayerStats {
  xp: number;
  level: number;
  streakDays: number;
  totalAnswered: number;
  correctAnswers: number;
  bossesDefeated: number;
  matchesCompleted: number;
  flashcardsMastered: number;
  achievements: Achievement[];
  // Estatísticas específicas PMPE por Bloco
  bloco1Stats?: { answered: number; correct: number };
  bloco2Stats?: { answered: number; correct: number };
  bloco3Stats?: { answered: number; correct: number };
}

export interface CustomDeck {
  id: string;
  name: string;
  description: string;
  questions: QuizQuestion[];
  matchPairs: MatchPair[];
  flashcards: Flashcard[];
}
