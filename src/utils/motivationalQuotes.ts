export interface MotivationalQuote {
  id: number;
  quote: string;
  author: string;
  tag: string;
}

export const MOTIVATIONAL_QUOTES: MotivationalQuote[] = [
  {
    id: 1,
    quote: "A dor da disciplina é temporária, mas a honra de envergar a farda da Polícia Militar de Pernambuco é para toda a vida!",
    author: "Batalhão de Operações Policiais",
    tag: "Disciplina & Honra"
  },
  {
    id: 2,
    quote: "Cada questão resolvida hoje é um passo mais próximo do Diário Oficial. Não desista, o seu nome estará na lista dos aprovados!",
    author: "Guerreiros da PMPE",
    tag: "Foco na Missão"
  },
  {
    id: 3,
    quote: "Combati o bom combate, acabei a carreira, guardei a fé. Estude com a determinação de quem já enxerga a formatura no CFSD!",
    author: "Lema de Vitória",
    tag: "Resiliência"
  },
  {
    id: 4,
    quote: "Quem sua mais no treinamento, sangra menos na batalha. Domine o Instituto AOCP questão por questão!",
    author: "Doutrina Militar",
    tag: "Preparação Extrema"
  },
  {
    id: 5,
    quote: "O cansaço passa, as horas de sono perdidas são esquecidas, mas o distintivo no peito ninguém jamais poderá tirar de você.",
    author: "Futuro Soldado PMPE",
    tag: "Superação"
  },
  {
    id: 6,
    quote: "Pernambuco é terra de bravos, de heróis de 1817 e de Guararapes. Honre essa história dedicando o seu melhor nos estudos hoje!",
    author: "Herança Pernambucana",
    tag: "Tradição & Bravura"
  },
  {
    id: 7,
    quote: "Não espere condições perfeitas para estudar. O soldado se forja na tempestade, na renúncia e na constância inabalável.",
    author: "Mentalidade Tática",
    tag: "Constância"
  },
  {
    id: 8,
    quote: "A concorrência descansa enquanto você avança. Mantenha o padrão elevado e a mente afiada até o soar do alarme da aprovação!",
    author: "Estratégia de Guerra",
    tag: "Foco Total"
  },
  {
    id: 9,
    quote: "O ponto de corte não é páreo para quem estuda com estratégia, revisa a letra da lei e não aceita a derrota como opção.",
    author: "Pelotão dos Aprovados",
    tag: "Estratégia"
  },
  {
    id: 10,
    quote: "Levante a cabeça, respire fundo e revise com energia. O seu futuro pelotão está esperando por você no campo de instrução!",
    author: "Comando da Missão",
    tag: "Motivação Máxima"
  },
  {
    id: 11,
    quote: "Sonhos exigem sacrifício. Se hoje está difícil, alegre-se: o peso da cruz é a garantia da glória no dia da posse!",
    author: "Vencer ou Vencer",
    tag: "Sacrifício & Glória"
  },
  {
    id: 12,
    quote: "A mente que domina os seus pensamentos comanda qualquer cenário de crise. Confie no processo e acerte as questões!",
    author: "Controle Operacional",
    tag: "Força Mental"
  },
  {
    id: 13,
    quote: "Nenhum obstáculo é grande demais quando a vontade de proteger e servir ao povo de Pernambuco queima no peito.",
    author: "Vocação Policial Militar",
    tag: "Vocação"
  },
  {
    id: 14,
    quote: "O sucesso é o somatório de pequenos esforços repetidos dia após dia, sem esmorecer. Mais 10 questões, mais uma vitória!",
    author: "Persistência Diária",
    tag: "Hábitos Vitoriosos"
  },
  {
    id: 15,
    quote: "Seja implacável com as suas fraquezas. Se errou em RLM ou Informática, comemore a chance de aprender agora para gabaritar na prova!",
    author: "Evolução Contínua",
    tag: "Aprendizado"
  }
];

export function getDailyMotivationalQuote(): MotivationalQuote {
  // Gera um índice baseado no dia do ano atual para garantir uma frase diferente a cada dia
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = Math.abs(dayOfYear) % MOTIVATIONAL_QUOTES.length;
  return MOTIVATIONAL_QUOTES[index];
}
