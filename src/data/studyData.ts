import { ALL_QUESTIONS } from './questions';
import type { Category, QuizQuestion, MatchPair, Flashcard, BossEnemy, Achievement } from '../types/game';

export const CATEGORIES: Category[] = [
  // BLOCO I
  {
    id: 'portugues',
    name: 'Língua Portuguesa',
    bloco: 'bloco_1',
    blocoNome: 'Bloco I (AOCP)',
    description: 'Acentuação, advérbios, conjunções, concordância, regência, crase e interpretação textual.',
    icon: 'BookOpen',
    color: '#3b82f6',
    accent: 'from-blue-500 to-indigo-600',
    badge: 'Bloco I'
  },
  {
    id: 'historia_pe',
    name: 'História de Pernambuco',
    bloco: 'bloco_1',
    blocoNome: 'Bloco I (AOCP)',
    description: 'Açúcar, Holandeses, Guararapes, Mascates, 1817, Cabanos, Agamenon, Dom Hélder e Cultura.',
    icon: 'Landmark',
    color: '#06b6d4',
    accent: 'from-cyan-500 to-teal-600',
    badge: 'Bloco I'
  },

  // BLOCO II
  {
    id: 'raciocinio',
    name: 'Raciocínio Lógico',
    bloco: 'bloco_2',
    blocoNome: 'Bloco II (AOCP)',
    description: 'Equivalências, negações (De Morgan / MANÉ), tautologias, análise combinatória e probabilidade.',
    icon: 'BrainCircuit',
    color: '#8b5cf6',
    accent: 'from-purple-500 to-violet-600',
    badge: 'Bloco II'
  },
  {
    id: 'informatica',
    name: 'Noções de Informática',
    bloco: 'bloco_2',
    blocoNome: 'Bloco II (AOCP)',
    description: 'Modelos OSI e TCP/IP, redes, intranet, IPs, segurança (malware/phishing), Windows 10 e planilhas.',
    icon: 'Laptop',
    color: '#10b981',
    accent: 'from-emerald-500 to-green-600',
    badge: 'Bloco II'
  },

  // BLOCO III
  {
    id: 'constitucional',
    name: 'Direito Constitucional',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'Art. 1º a 4º (Princípios), Art. 5º (Direitos Fundamentais), Art. 144 (Segurança Pública) e Poderes.',
    icon: 'Scale',
    color: '#f59e0b',
    accent: 'from-amber-500 to-yellow-600',
    badge: 'Bloco III'
  },
  {
    id: 'humanos_leis',
    name: 'Legislação & Direitos Humanos',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'Estatuto dos Militares da PMPE, Lei Maria da Penha, Lei de Drogas, Crimes Hediondos e Abuso de Autoridade.',
    icon: 'ShieldAlert',
    color: '#ef4444',
    accent: 'from-red-500 to-rose-600',
    badge: 'Bloco III'
  }
];

export const INITIAL_QUESTIONS: QuizQuestion[] = ALL_QUESTIONS;

export const INITIAL_MATCH_PAIRS: MatchPair[] = [
  // História de PE
  { id: 'm-hist-1', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Batalha dos Guararapes (1648-1649)', definition: 'Vitória sobre os holandeses nos montes de Jaboatão, considerada berço do Exército Brasileiro.' },
  { id: 'm-hist-2', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Revolução Pernambucana de 1817', definition: 'Movimento republicano e iluminista que proclamou a República de Pernambuco por 75 dias.' },
  { id: 'm-hist-3', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Confederação do Equador (1824)', definition: 'Revolta federalista liderada por Frei Caneca em oposição ao autoritarismo de D. Pedro I.' },
  { id: 'm-hist-4', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Guerra dos Mascates (1710-1711)', definition: 'Conflito entre a nobreza agrária de Olinda e os comerciantes portugueses do Recife.' },
  { id: 'm-hist-5', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Guerra dos Cabanos (1832-1835)', definition: 'Revolta restauradora do período regencial em PE e AL em defesa do retorno de D. Pedro I.' },

  // Português
  { id: 'm-port-1', categoryId: 'portugues', bloco: 'bloco_1', term: 'Conquanto / Embora', definition: 'Conjunção subordinativa concessiva (indica oposição que não anula a oração principal).' },
  { id: 'm-port-2', categoryId: 'portugues', bloco: 'bloco_1', term: 'À medida que', definition: 'Locução conjuntiva proporcional (ideia de proporção simultânea entre dois fatos).' },
  { id: 'm-port-3', categoryId: 'portugues', bloco: 'bloco_1', term: 'Verbo Têm (com circunflexo)', definition: 'Acento diferencial de número para concordância com sujeito na 3ª pessoa do plural.' },

  // RLM
  { id: 'm-rlm-1', categoryId: 'raciocinio', bloco: 'bloco_2', term: 'Regra do MANÉ (~(P -> Q))', definition: 'Para negar o condicional: Mantém a primeira E Nega a segunda (P ^ ~Q).' },
  { id: 'm-rlm-2', categoryId: 'raciocinio', bloco: 'bloco_2', term: '1ª Lei de De Morgan (~(P ^ Q))', definition: 'Negação da conjunção: troca o "E" por "OU" e nega as duas partes (~P v ~Q).' },

  // Informática
  { id: 'm-inf-1', categoryId: 'informatica', bloco: 'bloco_2', term: 'Endereço MAC', definition: 'Identificador físico exclusivo de 48 bits gravado na placa de rede do computador.' },
  { id: 'm-inf-2', categoryId: 'informatica', bloco: 'bloco_2', term: 'Protocolo IMAP', definition: 'Acesso e sincronização de e-mails mantendo cópia das mensagens no servidor.' },
  { id: 'm-inf-3', categoryId: 'informatica', bloco: 'bloco_2', term: 'Servidor DHCP', definition: 'Distribuição e configuração dinâmica e automatizada de endereços IP na rede.' },

  // Direito Constitucional
  { id: 'm-const-1', categoryId: 'constitucional', bloco: 'bloco_3', term: 'Art. 144, § 5º da CF/88', definition: 'Atribui às Polícias Militares a polícia ostensiva e a preservação da ordem pública.' },
  { id: 'm-const-2', categoryId: 'constitucional', bloco: 'bloco_3', term: 'Inviolabilidade de Domicílio', definition: 'Casa é asilo inviolável: determinação judicial SÓ pode ser cumprida durante o dia.' },
  { id: 'm-const-3', categoryId: 'constitucional', bloco: 'bloco_3', term: 'Mandado de Injunção', definition: 'Remédio constitucional cabível diante da falta de norma regulamentadora.' },

  // Direitos Humanos e Leis
  { id: 'm-dh-1', categoryId: 'humanos_leis', bloco: 'bloco_3', term: 'Lei 13.869/2019 (Abuso de Autoridade)', definition: 'Exige dolo específico: finalidade de prejudicar outrem, beneficiar-se ou mero capricho.' },
  { id: 'm-dh-2', categoryId: 'humanos_leis', bloco: 'bloco_3', term: 'Art. 28 da Lei de Drogas (11.343/06)', definition: 'Posse de drogas para consumo pessoal NÃO prevê pena privativa de liberdade.' },
  { id: 'm-dh-3', categoryId: 'humanos_leis', bloco: 'bloco_3', term: 'Estatuto da PMPE (Lei 6.783/74)', definition: 'Licença especial de 6 meses a cada decênio (10 anos) de efetivo serviço prestado.' }
];

export const INITIAL_FLASHCARDS: Flashcard[] = [
  {
    id: 'f-pmpe-1',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: 'Art. 144 CF',
    front: 'Quais são as atribuições constitucionais exclusivas da Polícia Militar segundo o Art. 144, § 5º?',
    back: '1. Polícia Ostensiva\n2. Preservação da Ordem Pública\n* Além de serem forças auxiliares e reserva do Exército.'
  },
  {
    id: 'f-pmpe-2',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    categoryName: 'História de PE',
    tag: 'Revolução de 1817',
    front: 'O que motivou a Revolução Pernambucana de 1817 e qual seu legado para a bandeira do Estado?',
    back: 'Motivos: Altos tributos cobrados pela Corte no RJ, seca de 1816 e ideias iluministas.\nLegado: A bandeira tricolor republicana criada em 1817 é a atual Bandeira Oficial do Estado de Pernambuco!'
  },
  {
    id: 'f-pmpe-3',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: 'Art. 5º, XI CF',
    front: 'Em quais hipóteses é permitido adentrar em domicílio alheio durante a NOITE sem consentimento?',
    back: 'Durante a NOITE, apenas em 3 casos:\n1. Flagrante delito\n2. Desastre\n3. Prestar socorro\n\nATENÇÃO: Mandado Judicial NUNCA pode ser cumprido à noite!'
  },
  {
    id: 'f-pmpe-4',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    categoryName: 'Raciocínio Lógico',
    tag: 'Regra do MANÉ',
    front: 'Como se nega uma proposição condicional do tipo "Se P, então Q"?',
    back: 'Aplica-se a regra do MANÉ:\n• MAntém a primeira parte (P)\n• E (conjunção ^)\n• NEga a segunda parte (~Q)\n\nExemplo: "Se sou policial, ando armado" -> Negação: "Sou policial E não ando armado".'
  },
  {
    id: 'f-pmpe-5',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Legislação Extravagante',
    tag: 'Lei 11.340/06',
    front: 'Quais são as 5 formas de violência doméstica previstas na Lei Maria da Penha?',
    back: '1. Física (ofensa à integridade corporal)\n2. Psicológica (humilhação, ameaça, controle)\n3. Sexual (constrangimento ao ato sexual forçado)\n4. Patrimonial (destruição de bens, retenção de documentos)\n5. Moral (calúnia, difamação, injúria)'
  },
  {
    id: 'f-pmpe-6',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Estatuto PMPE',
    tag: 'Lei 6.783/74',
    front: 'Quais os períodos de afastamento total do serviço previstos no Estatuto dos Policiais Militares de PE?',
    back: '• Núpcias: 8 dias\n• Luto: 8 dias\n• Instalação: até 10 dias\n• Trânsito: até 30 dias'
  }
];

export const BOSS_ENEMIES: BossEnemy[] = [
  {
    id: 'boss-aocp-1',
    name: 'Banca Examinadora AOCP',
    title: 'Mestre das Pegadinhas de Concurso',
    avatar: '📝',
    maxHp: 180,
    attackPower: 22,
    description: 'Usa enunciados longos com casos concretos e alternativas com pegadinhas sutis de lei seca.',
    weakness: 'Atenção aos detalhes da letra da lei e calma na leitura do comando da questão.'
  },
  {
    id: 'boss-aocp-2',
    name: 'O Fantasma do Ponto de Corte',
    title: 'A Pressão dos 3 Blocos de PE',
    avatar: '⚖️',
    maxHp: 220,
    attackPower: 26,
    description: 'Tenta fazer o candidato esquecer o mínimo de 30% em cada bloco ou zerar uma disciplina.',
    weakness: 'Equilíbrio nos estudos: dominar Português, História de PE, RLM, Informática e Direito igualmente.'
  },
  {
    id: 'boss-aocp-3',
    name: 'O Instrutor do CFSD',
    title: 'Guardião da Farda Pernambucana',
    avatar: '👮‍♂️',
    maxHp: 300,
    attackPower: 34,
    description: 'O teste definitivo de disciplina, honra e resistência antes da formatura no batalhão da PMPE.',
    weakness: 'Sequências perfeitas de acertos e convicção na aprovação!'
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'first-win', title: 'Primeiro Turno Cumprido', description: 'Complete seu primeiro simulado ou sessão de estudos da PMPE.', icon: '🎯', unlocked: false },
  { id: 'combo-5', title: 'Operação Precisa 5x', description: 'Acerte 5 questões consecutivas sem errar nenhuma pegadinha.', icon: '⚡', unlocked: false },
  { id: 'boss-slayer', title: 'Banca AOCP Superada', description: 'Derrote a temível Banca Examinadora AOCP no modo Guardião.', icon: '⚔️', unlocked: false },
  { id: 'pe-master', title: 'Coração Pernambucano', description: 'Acerte questões sobre os heróis de 1817 e a Batalha dos Guararapes.', icon: '🦁', unlocked: false },
  { id: 'matrix-master', title: 'Conexão Tática Perfeita', description: 'Conecte todos os pares de História e Leis sem cometer erros.', icon: '🧠', unlocked: false },
  { id: 'card-scholar', title: 'Lei Seca na Ponta da Língua', description: 'Revise os flashcards do Art. 5º e do Art. 144 da CF/88 no Cofre.', icon: '🗂️', unlocked: false },
  { id: 'creator-badge', title: 'Instrutor do Concurso', description: 'Crie sua própria questão ou flashcard no estúdio personalizado.', icon: '🛠️', unlocked: false }
];
