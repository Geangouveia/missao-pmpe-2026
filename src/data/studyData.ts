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
    name: 'Direitos Humanos',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'Dimensões dos Direitos Humanos (1ª, 2ª, 3ª, 4ª e 5ª), Pacto de São José da Costa Rica (CADH), DUDH e Princípios Internacionais.',
    icon: 'ShieldAlert',
    color: '#ef4444',
    accent: 'from-red-500 to-rose-600',
    badge: 'Direitos Humanos'
  },
  {
    id: 'legislacao_extravagante',
    name: 'Legislação Extravagante',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'Abuso de Autoridade (13.869), Drogas (11.343), Desarmamento (10.826), Hediondos (8.072), Maria da Penha (11.340), Tortura (9.455), ECA (8.069) e Trânsito (CTB).',
    icon: 'BookOpen',
    color: '#f97316',
    accent: 'from-orange-500 to-amber-600',
    badge: 'Leis Extravagantes'
  },
  {
    id: 'legislacao_pmpe',
    name: 'Legislação da PMPE (Estatuto)',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/1974), bases, hierarquia e deveres.',
    icon: 'Shield',
    color: '#22c55e',
    accent: 'from-green-600 to-emerald-700',
    badge: 'Estatuto PMPE'
  }
];

export const INITIAL_QUESTIONS: QuizQuestion[] = ALL_QUESTIONS;

import { FULL_TACTICAL_MATCH_PAIRS } from './matchPairsData';

export const INITIAL_MATCH_PAIRS: MatchPair[] = [
  ...FULL_TACTICAL_MATCH_PAIRS,
  // História de PE
  {
    id: 'm-hist-1',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    difficulty: 'facilimo',
    term: 'Batalha dos Guararapes (1648-1649)',
    definition: 'Vitória sobre os holandeses nos montes de Jaboatão, considerada berço do Exército Brasileiro.',
    explanation: 'A Batalha dos Guararapes (1648 e 1649) uniu brancos, negros e indígenas nos Montes Guararapes em Jaboatão para expulsar os invasores holandeses.'
  },
  {
    id: 'm-hist-2',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    difficulty: 'facilimo',
    term: 'Revolução Pernambucana de 1817',
    definition: 'Movimento republicano e iluminista que proclamou a República de Pernambuco por 75 dias.',
    explanation: 'A Revolução de 1817 foi o único movimento separatista do período colonial que de fato instalou um governo republicano em solo pernambucano.'
  },
  {
    id: 'm-hist-3',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    difficulty: 'facil',
    term: 'Confederação do Equador (1824)',
    definition: 'Revolta federalista liderada por Frei Caneca em oposição ao autoritarismo de D. Pedro I.',
    explanation: 'A Confederação do Equador rebelou-se contra a outorga autoritária da Carta Constitucional de 1824 e o Poder Moderador do Imperador.'
  },
  {
    id: 'm-hist-4',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    difficulty: 'medio',
    term: 'Guerra dos Mascates (1710-1711)',
    definition: 'Conflito entre a nobreza agrária de Olinda e os comerciantes portugueses do Recife.',
    explanation: 'A Guerra dos Mascates eclodiu quando Recife foi elevado a vila, gerando forte revolta na aristocracia canavieira endividada de Olinda.'
  },
  {
    id: 'm-hist-5',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    difficulty: 'medio',
    term: 'Guerra dos Cabanos (1832-1835)',
    definition: 'Revolta restauradora do período regencial em PE e AL em defesa do retorno de D. Pedro I.',
    explanation: 'A Cabanada mobilizou camponeses, índios e ex-escravizados nas matas do sul de Pernambuco e Alagoas lutando pelo retorno de D. Pedro I.'
  },

  // Português
  {
    id: 'm-port-1',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    difficulty: 'facil',
    term: 'Conquanto / Embora',
    definition: 'Conjunção subordinativa concessiva (indica oposição que não anula a oração principal).',
    explanation: '"Conquanto" e "embora" são conjunções concessivas por excelência; introduzem fato que admite quebra de expectativa sem anular a matriz.'
  },
  {
    id: 'm-port-2',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    difficulty: 'facil',
    term: 'À medida que',
    definition: 'Locução conjuntiva proporcional (ideia de proporção simultânea entre dois fatos).',
    explanation: '"À medida que" exprime proporção exata entre duas ações ("à medida que estudo, aprendo mais"). Pegadinha: "na medida em que" tem valor causal!'
  },
  {
    id: 'm-port-3',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    difficulty: 'facilimo',
    term: 'Verbo Têm (com circunflexo)',
    definition: 'Acento diferencial de número para concordância com sujeito na 3ª pessoa do plural.',
    explanation: 'No padrão culto, ele tem (sem acento, singular) e eles têm (com circunflexo diferencial de plural).'
  },

  // RLM
  {
    id: 'm-rlm-1',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    difficulty: 'facilimo',
    term: 'Regra do MANÉ (~(P -> Q))',
    definition: 'Para negar o condicional: Mantém a primeira E Nega a segunda (P ^ ~Q).',
    explanation: 'Para negar "Se P, então Q", mantém a primeira proposição verdadeira e afirma a falsidade da segunda com a conjunção "E".'
  },
  {
    id: 'm-rlm-2',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    difficulty: 'facil',
    term: '1ª Lei de De Morgan (~(P ^ Q))',
    definition: 'Negação da conjunção: troca o "E" por "OU" e nega as duas partes (~P v ~Q).',
    explanation: 'Para negar uma conjunção (P e Q), negam-se ambas as componentes e substitui-se o conectivo pelo disjuntivo OU (~P ou ~Q).'
  },

  // Informática
  {
    id: 'm-inf-1',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    difficulty: 'medio',
    term: 'Endereço MAC',
    definition: 'Identificador físico exclusivo de 48 bits gravado na placa de rede do computador.',
    explanation: 'O MAC address é o endereço físico de nível 2 (enlace de dados), hexadecimal e único mundialmente para cada placa de rede.'
  },
  {
    id: 'm-inf-2',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    difficulty: 'medio',
    term: 'Protocolo IMAP',
    definition: 'Acesso e sincronização de e-mails mantendo cópia das mensagens no servidor.',
    explanation: 'O IMAP permite ler e gerenciar mensagens de correio eletrônico remotamente preservando a estrutura de pastas no servidor de e-mail.'
  },
  {
    id: 'm-inf-3',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    difficulty: 'facil',
    term: 'Servidor DHCP',
    definition: 'Distribuição e configuração dinâmica e automatizada de endereços IP na rede.',
    explanation: 'O DHCP (Dynamic Host Configuration Protocol) concede IPs e gateways automaticamente aos computadores clientes na rede local.'
  },

  // Direito Constitucional
  {
    id: 'm-const-1',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    difficulty: 'facilimo',
    term: 'Art. 144, § 5º da CF/88',
    definition: 'Atribui às Polícias Militares a polícia ostensiva e a preservação da ordem pública.',
    explanation: 'O art. 144, § 5º da Carta Magna estabelece como competências da PM o policiamento preventivo e ostensivo fardado para assegurar a ordem pública.'
  },
  {
    id: 'm-const-2',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    difficulty: 'facilimo',
    term: 'Inviolabilidade de Domicílio',
    definition: 'Casa é asilo inviolável: determinação judicial SÓ pode ser cumprida durante o dia.',
    explanation: 'CF art. 5º, XI: Por ordem judicial, apenas durante o dia! À noite, apenas com consentimento do morador, flagrante, desastre ou socorro.'
  },
  {
    id: 'm-const-3',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    difficulty: 'medio',
    term: 'Mandado de Injunção',
    definition: 'Remédio constitucional cabível diante da falta de norma regulamentadora.',
    explanation: 'O Mandado de Injunção (art. 5º, LXXI) sana a inércia legislativa que impede o exercício de direitos e liberdades constitucionais.'
  },

  // Direitos Humanos e Leis
  {
    id: 'm-dh-1',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    difficulty: 'dificil',
    term: 'Lei 13.869/2019 (Abuso de Autoridade)',
    definition: 'Exige dolo específico: finalidade de prejudicar outrem, beneficiar-se ou mero capricho.',
    explanation: 'A caracterização de abuso de autoridade requer elemento subjetivo específico: intenção de prejudicar outrem, beneficiar a si ou satisfazer capricho pessoal.'
  },
  {
    id: 'm-dh-2',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    difficulty: 'medio',
    term: 'Art. 28 da Lei de Drogas (11.343/06)',
    definition: 'Posse de drogas para consumo pessoal NÃO prevê pena privativa de liberdade.',
    explanation: 'O porte de drogas para consumo próprio comina apenas advertência sobre os efeitos, prestação de serviços à comunidade e medida educativa, sem prisão.'
  },
  {
    id: 'm-dh-3',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    difficulty: 'dificil',
    term: 'Estatuto da PMPE (Lei 6.783/74)',
    definition: 'Licença especial de 6 meses a cada decênio (10 anos) de efetivo serviço prestado.',
    explanation: 'Segundo a Lei 6.783/74, a licença especial é uma autorização de afastamento temporário de 6 meses concedida após 10 anos de serviço policial militar.'
  }
];

export const INITIAL_FLASHCARDS: Flashcard[] = [
  {
    id: 'f-pmpe-1',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: 'Art. 144 CF',
    front: 'Quais são as atribuições constitucionais exclusivas da Polícia Militar segundo o Art. 144, § 5º da CF/88?',
    back: '1. Polícia Ostensiva\n2. Preservação da Ordem Pública\n* Forças auxiliares e reserva do Exército Brasileiro subordinadas aos Governadores de Estado.'
  },
  {
    id: 'f-pmpe-crase-1',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    categoryName: 'Língua Portuguesa',
    tag: 'Mnemônico Crase',
    front: 'Quais são os 3 casos clássicos de Crase Facultativa mais cobrados pelo Instituto AOCP?',
    back: 'Mnemônico "ATÉ A MARIA SUA":\n• ATÉ (preposição até)\n• MARIA (nomes próprios femininos sem especificador)\n• SUA (pronomes possessivos femininos no singular: minha, tua, sua)\n\nExemplo: Fui até a (ou à) praia. Entreguei o livro à (ou a) Maria.'
  },
  {
    id: 'f-pmpe-crase-2',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    categoryName: 'Língua Portuguesa',
    tag: 'Crase Proibida',
    front: 'Quais as 4 proibições absolutas de uso do acento grave indicativo de crase?',
    back: 'NUNCA ocorre crase:\n1. Antes de palavras masculinas (a pé, a cavalo, a prazo)\n2. Antes de verbos no infinitivo (a partir, a caminhar)\n3. Antes de pronomes de tratamento e indefinidos (a ela, a ninguém, a você - exceto senhora/senhorita)\n4. Entre palavras repetidas (dia a dia, cara a cara)'
  },
  {
    id: 'f-pmpe-eca-1',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Legislação Extravagante',
    tag: 'ECA - Medida de Internação',
    front: 'Quais os 3 prazos fatais da Medida Socioeducativa de Internação no ECA (Art. 121)?',
    back: '• Prazo Máximo: 3 anos (período máximo contínuo)\n• Reavaliação Obrigatória: no máximo a cada 6 meses\n• Liberação Compulsória e Improrrogável: aos 21 anos de idade.'
  },
  {
    id: 'f-pmpe-rlm-1',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    categoryName: 'Raciocínio Lógico',
    tag: 'Regra do MANÉ',
    front: 'Como se nega uma proposição condicional do tipo "Se P, então Q"?',
    back: 'Aplica-se a regra do MANÉ:\n• MAntém a primeira parte (P)\n• E (conjunção ^)\n• NEga a segunda parte (~Q)\n\nExemplo: "Se sou policial, ando armado" -> Negação: "Sou policial E não ando armado".'
  },
  {
    id: 'f-pmpe-rlm-demorgan',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    categoryName: 'Raciocínio Lógico',
    tag: 'Leis de De Morgan',
    front: 'Como aplicar as Leis de De Morgan na negação de "P e Q" e na negação de "P ou Q"?',
    back: '• Negação de (P e Q): ~P OU ~Q (Nega tudo e troca "e" por "ou")\n• Negação de (P ou Q): ~P E ~Q (Nega tudo e troca "ou" por "e")\n\nEx: Negação de "Estudo e passo": "Não estudo OU não passo".'
  },
  {
    id: 'f-pmpe-rlm-equiv',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    categoryName: 'Raciocínio Lógico',
    tag: 'Equivalência da Condicional',
    front: 'Quais são as 2 equivalências lógicas fundamentais de "Se P, então Q"?',
    back: '1. Contrapositiva: "Se ~Q, então ~P" (Inverte os lados e nega ambos)\n2. Regra do NE-OU: "~P OU Q" (Nega a primeira OU mantém a segunda)'
  },
  {
    id: 'f-pmpe-const-3th',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: '3T + H',
    front: 'Quais crimes são Inafiançáveis e Insuscetíveis de Graça ou Anistia na CF/88 (Art. 5º, XLIII)?',
    back: 'Mnemônico "3T + H":\n• Tortura\n• Tráfico ilícito de entorpecentes\n• Terrorismo\n• Hediondos\n\n* Por eles respondem mandantes, executores e os que, podendo evitá-los, se omitirem.'
  },
  {
    id: 'f-pmpe-const-racao',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: 'Crimes Imprescritíveis',
    front: 'Quais são os únicos 2 crimes Imprescritíveis e Inafiançáveis previstos expressamente na Constituição?',
    back: 'Mnemônico "RAÇÃO":\n• RA: Racismo (sujeito à pena de reclusão)\n• AÇÃO: Ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.'
  },
  {
    id: 'f-pmpe-hist-1817',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    categoryName: 'História de PE',
    tag: 'Revolução de 1817',
    front: 'O que motivou a Revolução Pernambucana de 1817 e qual seu legado para a bandeira do Estado?',
    back: 'Motivos: Altos tributos cobrados pela Corte no RJ, seca de 1816 e ideias iluministas.\nLegado: A bandeira tricolor republicana criada em 1817 com arco-íris, sol e cruz é a atual Bandeira Oficial do Estado de Pernambuco!'
  },
  {
    id: 'f-pmpe-hist-1824',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    categoryName: 'História de PE',
    tag: 'Confederação do Equador',
    front: 'Quem foi o líder mártir da Confederação do Equador em 1824 e qual era a principal reivindicação?',
    back: 'Líder: Frei Joaquim do Amor Divino Caneca (Frei Caneca).\nMotivo: Revolta contra o autoritarismo de D. Pedro I, dissolução da Constituinte e imposição do Poder Moderador na Constituição outorgada de 1824.\nDesfecho: Frei Caneca foi fuzilado no Forte das Cinco Pontas no Recife.'
  },
  {
    id: 'f-pmpe-hist-guararapes',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    categoryName: 'História de PE',
    tag: 'Guararapes 1648/1649',
    front: 'Qual o significado histórico da Batalha dos Guararapes travada em Pernambuco?',
    back: 'Travada em 1648 e 1649 no Monte dos Guararapes (Jaboatão dos Guararapes), uniu brancos, negros e indígenas (liderados por Fernandes Vieira, Henrique Dias e Filipe Camarão) para expulsar os invasores holandeses.\nÉ considerada o Berço Histórico do Exército Brasileiro e da Nacionalidade!'
  },
  {
    id: 'f-pmpe-hist-criacao',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    categoryName: 'História de PE / PMPE',
    tag: 'Criação da PMPE 1825',
    front: 'Em que data e por qual ato imperial foi fundada a Polícia Militar de Pernambuco?',
    back: 'Data: 11 de junho de 1825.\nAto: Decreto Imperial emitido por Dom Pedro I, criando o "Corpo de Polícia da Província de Pernambuco", com a missão de manter a ordem após as agitações da Confederação do Equador.'
  },
  {
    id: 'f-pmpe-abuso-1',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Legislação Extravagante',
    tag: 'Lei 13.869/19 (Abuso)',
    front: 'O que é indispensável para a configuração de crime de Abuso de Autoridade segundo o Art. 1º, § 1º?',
    back: 'Exige-se DOLO ESPECÍFICO (elemento subjetivo especial):\n• Finalidade específica de prejudicar outrem;\n• Beneficiar a si mesmo ou a terceiro;\n• Ou por mero capricho ou satisfação pessoal.\n* A mera divergência na interpretação de lei ou avaliação de fatos NÃO configura abuso.'
  },
  {
    id: 'f-pmpe-maria-penha',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Legislação Extravagante',
    tag: 'Lei Maria da Penha',
    front: 'Quais são as 5 formas de violência doméstica e familiar contra a mulher previstas na Lei 11.340/06?',
    back: '1. Física (integridade ou saúde corporal)\n2. Psicológica (dano emocional, controle, ameaça, humilhação)\n3. Sexual (constrangimento ao ato sexual ou reprodução)\n4. Patrimonial (retenção, subtração ou destruição de bens e documentos)\n5. Moral (calúnia, difamação ou injúria)'
  },
  {
    id: 'f-pmpe-estatuto-afastamentos',
    categoryId: 'legislacao_pmpe',
    bloco: 'bloco_3',
    categoryName: 'Estatuto PMPE',
    tag: 'Lei Estadual 6.783/74',
    front: 'Quais os períodos de afastamento total do serviço previstos no Estatuto dos Policiais Militares de PE?',
    back: '• Núpcias (casamento): 8 dias\n• Luto (falecimento de cônjuge, pais, filhos, irmãos): 8 dias\n• Instalação: até 10 dias\n• Trânsito: até 30 dias'
  },
  {
    id: 'f-pmpe-tortura-perda',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Legislação Extravagante',
    tag: 'Lei de Tortura 9.455/97',
    front: 'Qual o efeito automático da condenação pelo crime de Tortura para o servidor público?',
    back: '• Perda automática do cargo, função ou emprego público;\n• Interdição para o exercício de qualquer função pública pelo DOBRO do prazo da pena privativa de liberdade aplicada.'
  },
  {
    id: 'f-pmpe-info-malware',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    categoryName: 'Informática',
    tag: 'Segurança da Informação',
    front: 'Qual a diferença entre Ransomware, Phishing e Spyware nos concursos policiais da AOCP?',
    back: '• Ransomware: Criptografa arquivos da vítima e exige pagamento de resgate (geralmente em criptomoedas).\n• Phishing: Técnica de engenharia social que usa e-mails ou sites falsos para "pescar" dados bancários e senhas.\n• Spyware: Software espião que monitora as atividades do usuário (ex: Keylogger captura teclas digitadas).'
  },
  {
    id: 'f-pmpe-dh-sanjose',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    categoryName: 'Direitos Humanos',
    tag: 'Pacto de San José (CADH)',
    front: 'O que estabelece a Súmula Vinculante 25 do STF com base no Pacto de San José da Costa Rica sobre prisão civil?',
    back: '"É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito."\n* No ordenamento brasileiro atual, a ÚNICA prisão civil admitida é a do devedor inescusável de alimentos (pensão alimentícia).'
  },
  {
    id: 'f-pmpe-const-domicilio',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: 'Art. 5º, XI CF',
    front: 'Em quais hipóteses a autoridade policial pode adentrar em domicílio alheio durante a NOITE sem consentimento?',
    back: 'Durante a NOITE, apenas em 3 situações estritas:\n1. Flagrante delito\n2. Desastre\n3. Prestar socorro\n\nCUIDADO: Determinação Judicial (mandado) só pode ser cumprida DURANTE O DIA!'
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
  // 1. Apresentação & Início
  { id: 'recruit', title: 'Alistamento Concluído', description: 'Apresentou-se para a missão militar rumo à aprovação na PMPE 2026.', icon: '🎖️', unlocked: false },
  { id: 'first-win', title: 'Primeiro Turno Cumprido', description: 'Complete seu primeiro simulado ou sessão de estudos da PMPE.', icon: '🎯', unlocked: false },
  { id: 'first-perfect', title: 'Mira Cirúrgica 100%', description: 'Acerte 100% das questões em uma rodada completa de no mínimo 5 questões.', icon: '💎', unlocked: false },
  { id: 'oath-iron', title: 'Juramento da Farda', description: 'Cumpra 3 turnos de estudo no mesmo dia com disciplina militar.', icon: '⚔️', unlocked: false },

  // 2. Pontaria & Combos de Precisão
  { id: 'combo-5', title: 'Operação Precisa 5x', description: 'Acerte 5 questões consecutivas sem errar nenhuma pegadinha da AOCP.', icon: '⚡', unlocked: false },
  { id: 'combo-10', title: 'Sniper de Elite 10x', description: 'Alcance uma sequência de 10 acertos consecutivos com mira cirúrgica.', icon: '🎯', unlocked: false },
  { id: 'combo-15', title: 'Atirador Tático 15x', description: 'Alcance 15 acertos consecutivos sem vacilar na linha de fogo.', icon: '🔥', unlocked: false },
  { id: 'combo-20', title: 'Atirador Especial 20x', description: 'Sequência lendária de 20 acertos consecutivos sem falhas na prova.', icon: '🦅', unlocked: false },
  { id: 'combo-30', title: 'Lenda do Batalhão 30x', description: 'Marca histórica de 30 acertos ininterruptos no edital da PMPE.', icon: '👑', unlocked: false },

  // 3. Patentes por Volume de Questões Respondidas
  { id: 'soldier-25', title: 'Soldado de Infantaria', description: 'Responda a 25 questões no total e consolide sua base operacional.', icon: '🪖', unlocked: false },
  { id: 'cabo-50', title: 'Graduação: Cabo Tático', description: 'Supere a marca de 50 questões resolvidas na plataforma.', icon: '⚔️', unlocked: false },
  { id: 'sargento-100', title: 'Graduação: 3º Sargento', description: 'Alcance a marca de 100 questões resolvidas com disciplina policial.', icon: '🛡️', unlocked: false },
  { id: 'subtenente-200', title: 'Graduação: Subtenente', description: 'Bata 200 questões de treinamento e lidere a preparação da tropa.', icon: '🌟', unlocked: false },
  { id: 'aspirante-350', title: 'Aspirante a Oficial', description: 'Supere 350 questões resolvidas no acervo preparatório.', icon: '⭐', unlocked: false },
  { id: 'oficial-500', title: 'Oficial Superior da PMPE', description: 'Complete 500 questões resolvidas e domine o edital da AOCP por completo.', icon: '🏆', unlocked: false },
  { id: 'coronel-1000', title: 'Comandante Geral', description: 'Atinja a marca lendária de 1.000 questões respondidas no batalhão.', icon: '🎖️', unlocked: false },

  // 4. Disciplina & Ofensiva Diária (Fogo Sagrado)
  { id: 'streak-3', title: 'Chama Invicta (3 Dias)', description: 'Mantenha 3 dias consecutivos de estudos sem falhar um único dia.', icon: '🔥', unlocked: false },
  { id: 'streak-7', title: 'Fogo Sagrado (7 Dias)', description: 'Mantenha 7 dias seguidos de dedicação tática inabalável.', icon: '🏆', unlocked: false },
  { id: 'streak-14', title: 'Quinzena de Aço (14 Dias)', description: 'Duas semanas ininterruptas de treinamento diário rumo à farda.', icon: '⚡', unlocked: false },
  { id: 'streak-30', title: 'Disciplina de Batalhão (30 Dias)', description: 'Um mês inabalável de vigília diária sem apagar a chama sagrada.', icon: '🛡️', unlocked: false },
  { id: 'early-bird', title: 'Alvorada Operacional', description: 'Inicie uma sessão de treinamento logo cedo antes das 08h da manhã.', icon: '🌅', unlocked: false },
  { id: 'night-patrol', title: 'Vigília da Noite', description: 'Treine durante o plantão noturno após as 21h com foco total.', icon: '🌙', unlocked: false },

  // 5. Domínio por Disciplinas do Edital AOCP
  { id: 'pe-master', title: 'Coração Pernambucano', description: 'Acerte questões sobre a Revolução de 1817, Mascates e Guararapes.', icon: '🦁', unlocked: false },
  { id: 'cf-guardian', title: 'Sentinela da Constituição', description: 'Acerte questões fundamentais dos Artigos 5º e 144 da CF/88.', icon: '⚖️', unlocked: false },
  { id: 'dh-patriot', title: 'Guardião dos Direitos Humanos', description: 'Acerte questões de Direitos Humanos e Legislação Institucional.', icon: '🕊️', unlocked: false },
  { id: 'rlm-strategist', title: 'Raciocínio Blindado', description: 'Resolva questões complexas de Raciocínio Lógico e Matemática AOCP.', icon: '🧮', unlocked: false },
  { id: 'info-operator', title: 'Operador de Cibersegurança', description: 'Domine as questões de Informática, Redes e Segurança Policial.', icon: '💻', unlocked: false },
  { id: 'portugues-mestre', title: 'Mestre da Língua Pátria', description: 'Domine concordância, regência e interpretação da banca AOCP.', icon: '📚', unlocked: false },
  { id: 'estatuto-expert', title: 'Doutrinador do Estatuto PMPE', description: 'Acerte questões da Lei Estadual nº 6.783/74 (Estatuto dos Militares).', icon: '📜', unlocked: false },
  { id: 'penal-tactical', title: 'Legislação Especial Penal', description: 'Acerte questões da Lei Maria da Penha, Drogas e Abuso de Autoridade.', icon: '🚔', unlocked: false },

  // 6. Conexão Tática por Níveis (5 Níveis Militares)
  { id: 'match-level-1', title: 'Conexão: Recruta', description: 'Vença o Nível 1 (Facílimo) no modo Conexão Tática.', icon: '🔰', unlocked: false },
  { id: 'match-level-2', title: 'Conexão: Soldado', description: 'Vença o Nível 2 (Fácil) no modo Conexão Tática com precisão.', icon: '🎖️', unlocked: false },
  { id: 'match-level-3', title: 'Conexão: Cabo', description: 'Vença o Nível 3 (Médio) no modo Conexão Tática.', icon: '⚔️', unlocked: false },
  { id: 'match-level-4', title: 'Conexão: 3º Sargento', description: 'Vença o Nível 4 (Difícil) no modo Conexão Tática.', icon: '🛡️', unlocked: false },
  { id: 'match-level-5', title: 'Caveira da Conexão Tática', description: 'Supere o Nível 5 (Dificílimo) com salva cerimonial de tiros.', icon: '💀', unlocked: false },
  { id: 'matrix-master', title: 'Conexão Tática Perfeita', description: 'Conecte todos os pares de História e Leis sem cometer nenhum erro.', icon: '🧠', unlocked: false },

  // 7. Modos Táticos Especiais (Sobrevivência & Boss)
  { id: 'survival-veteran', title: 'Sobrevivente do Batalhão', description: 'Alcance mais de 10 acertos na Operação Sobrevivência: Tiro Certo.', icon: '🩸', unlocked: false },
  { id: 'survival-25', title: 'Resistência de Aço', description: 'Alcance mais de 25 acertos na Operação Sobrevivência: Tiro Certo.', icon: '🛡️', unlocked: false },
  { id: 'survival-50', title: 'Blindagem Operacional', description: 'Alcance 50 acertos consecutivos na Operação Sobrevivência.', icon: '⚡', unlocked: false },
  { id: 'boss-slayer', title: 'Banca AOCP Superada', description: 'Derrote a temível Banca Examinadora AOCP no modo Desafio da Banca.', icon: '⚔️', unlocked: false },
  { id: 'boss-phantom', title: 'Fantasma Superado', description: 'Supere o Fantasma da Nota de Corte na Operação CFSD.', icon: '👻', unlocked: false },
  { id: 'boss-cfsd', title: 'Instrutor Respeitado', description: 'Vença o Instrutor do CFSD em combate de questões de alta pressão.', icon: '👮‍♂️', unlocked: false },

  // 8. Cofre da Lei Seca & XP de Carreira
  { id: 'card-scholar', title: 'Lei Seca na Ponta da Língua', description: 'Revise os flashcards de artigos e prazos no Cofre da Lei Seca.', icon: '🗂️', unlocked: false },
  { id: 'card-vault-30', title: 'Mestre do Cofre Legal', description: 'Revise mais de 30 flashcards para consolidar a memória de longo prazo.', icon: '🗝️', unlocked: false },
  { id: 'card-vault-100', title: 'Sentinela da Lei Seca', description: 'Revise mais de 100 flashcards acumulados no Cofre da Lei Seca.', icon: '📖', unlocked: false },
  { id: 'xp-cadet-1000', title: 'Cadete Operacional', description: 'Alcance a marca de 1.000 XP acumulados em treinamento militar.', icon: '🏅', unlocked: false },
  { id: 'xp-capitao-5000', title: 'Capitão Condecorado', description: 'Atinja 5.000 XP e lidere a pontuação dos aprovados na PMPE.', icon: '🎖️', unlocked: false },
  { id: 'xp-general-10000', title: 'Marechal dos Estudos', description: 'Marca de glória de 10.000 XP na jornada de preparação da PMPE.', icon: '👑', unlocked: false },
  { id: 'creator-badge', title: 'Instrutor do Concurso', description: 'Crie sua própria questão ou flashcard no estúdio personalizado.', icon: '🛠️', unlocked: false },

  // 9. Conquistas Táticas de Elite (Comandante Gean)
  { id: 'dh-dimensoes-master', title: 'Mestre das 5 Dimensões DH', description: 'Domine a teoria das cinco gerações e dimensões dos Direitos Humanos.', icon: '🕊️', unlocked: false },
  { id: 'pacto-san-jose', title: 'Sentinela do Pacto de San José', description: 'Gabarite questões sobre o Pacto de São José da Costa Rica (CADH) e súmula 25.', icon: '⚖️', unlocked: false },
  { id: 'planalto-specialist', title: 'Doutrina Atualizada do Planalto', description: 'Domine as legislações penais extravagantes e alterações legislativas recentes.', icon: '🏛️', unlocked: false },
  { id: 'promocao-oficialato', title: 'Ascensão ao Oficialato', description: 'Conquiste promoções sucessivas na Operação Sobrevivência com 3 acertos seguidos.', icon: '🌟', unlocked: false },
  { id: 'sniper-calculos', title: 'Calculista de Elite RLM', description: 'Resolva problemas numéricos de contagem, dados e porcentagem sem errar.', icon: '🧮', unlocked: false },
  { id: 'probabilidade-mestre', title: 'Especialista em Probabilidade', description: 'Vença desafios de probabilidade sucessiva e regra de Laplace.', icon: '🎲', unlocked: false },
  { id: 'cyber-pmpe', title: 'Muralha Cibernética', description: 'Acerte questões cruciais de segurança da informação, malware e redes.', icon: '🛡️', unlocked: false }
];

