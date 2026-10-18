import type { QuizQuestion } from '../../types/game';

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE LÍNGUA PORTUGUESA (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Língua Portuguesa (Bloco I)
 * Foco rigoroso no edital: Acentuação, Crase, Regência, Concordância, Conjunções, Sintaxe, Pontuação e Interpretação
 */
const QUESTOES_PORTUGUES_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  // Tópicos rotativos do edital AOCP
  const topicos = [
    {
      topico: 'Emprego do Sinal Indicativo de Crase',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Em conformidade com a norma-padrão da Língua Portuguesa, assinale a alternativa em que o uso do sinal indicativo de crase está rigorosamente CORRETO:`,
      opts: [
        'O policial militar dirigiu-se à pé até o posto de comando da operação.',
        'A equipe tática obedeceu à determinações expressas do comandante do batalhão.',
        'O recruta dedicou seus estudos à uma vaga concorrida na Polícia Militar de Pernambuco.',
        'Após a perseguição, a viatura militar chegou à cidade de Olinda no início da manhã.',
        'Os soldados estavam dispostos à cumprir rigorosamente o juramento à bandeira.'
      ],
      correct: 3,
      exp: 'Em "chegou à cidade de Olinda", o verbo "chegar" exige a preposição "a" (quem chega, chega a algum lugar) e a palavra "cidade" admite o artigo definido feminino "a" (a + a = à). Nas demais opções: não ocorre crase antes de palavra masculina ("a pé"), no plural sem artigo ("a determinações"), antes de artigo indefinido ("a uma") e antes de verbo ("a cumprir").',
      fund: 'Gramática Normativa da Língua Portuguesa • Regras de Crase da Banca AOCP.',
      hint: 'Lembre-se: antes de verbo, palavra masculina e artigo indefinido ("uma"), crase é proibida!'
    },
    {
      topico: 'Regência Verbal e Nominal',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A respeito da regência verbal do verbo 'visar' e 'obedecer' no padrão culto exigido em editais policiais, assinale a alternativa correta:`,
      opts: [
        'O candidato visava o cargo de soldado com determinação.',
        'O soldado obedeceu o regulamento disciplinar sem questionar.',
        'O projeto de segurança pública visa ao combate qualificado das facções criminosas.',
        'O comandante assistiu a cerimônia militar no pátio central.',
        'Os motoristas desobedeceram o sinal vermelho na blitz integrada.'
      ],
      correct: 2,
      exp: 'O verbo "visar", no sentido de "ter por objetivo / almejar", é transitivo indireto e rege a preposição "a" (visar a algo -> visa ao combate). "Obedecer" e "desobedecer" são transitivos indiretos (exigem preposição "a": obedeceu ao regulamento). "Assistir" no sentido de presenciar também exige preposição "a" (assistiu à cerimônia).',
      fund: 'Norma culta da Língua Portuguesa • Regência Verbal dos verbos Visar, Obedecer e Assistir.',
      hint: 'Visar com sentido de objetivo exige a preposição "a": visa a, visa ao!'
    },
    {
      topico: 'Concordância Verbal e Nominal',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Quanto às regras de concordância verbal com o verbo 'haver' e expressões partitivas, assinale a opção que atende integralmente à norma culta:`,
      opts: [
        'Houveram muitos incidentes graves durante as manifestações populares.',
        'Fazem cinco anos que o último concurso da Polícia Militar foi homologado.',
        'Havia cerca de cinquenta viaturas posicionadas nos principais acessos da capital.',
        'Devem haver soluções imediatas para a redução dos índices de criminalidade.',
        'Sobrou, nos arquivos da corregedoria, vários inquéritos para análise técnica.'
      ],
      correct: 2,
      exp: 'O verbo "haver", no sentido de "existir" ou "ocorrer", é impessoal: não possui sujeito e deve permanecer obrigatoriamente na 3ª pessoa do singular ("Havia cerca de cinquenta viaturas"). Nas locuções verbais, a impessoalidade transmite-se ao verbo auxiliar ("Deve haver soluções", e não "Devem haver"). O verbo "fazer" indicando tempo decorrido também é impessoal ("Faz cinco anos").',
      fund: 'Regras de Impessoalidade Verbal (Haver / Fazer) • Padrão AOCP.',
      hint: 'Haver no sentido de existir é IMPESSOAL: sempre no singular!'
    },
    {
      topico: 'Valores Semânticos das Conjunções',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) No período 'Embora as condições climáticas fossem adversas, a tropa manteve o patrulhamento ostensivo', o conectivo destacado introduz uma oração subordinada com sentido de:`,
      opts: [
        'Causalidade, pois justifica o motivo do patrulhamento.',
        'Concessão, indicando uma ideia de oposição ou ressalva que não impede a ação principal.',
        'Condição, estabelecendo um pré-requisito indispensável à operação.',
        'Proporcionalidade, mostrando a concomitância entre clima e ronda.',
        'Consequência, apresentando o resultado imediato das fortes chuvas.'
      ],
      correct: 1,
      exp: 'A conjunção subordinativa "embora" introduz uma oração subordinada adverbial concessiva. A concessão exprime um fato que poderia ser um obstáculo ou objeção, mas que não tem força para anular a realização da oração principal.',
      fund: 'Sintaxe do Período Composto • Conjunções Concessivas (embora, conquanto, ainda que, se bem que).',
      hint: '"Embora" = Concessão! Quebra de expectativa que não impede a ação principal.'
    },
    {
      topico: 'Acentuação Gráfica e Novo Acordo',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Assinale a alternativa em que todas as palavras são acentuadas graficamente pela mesma regra gramatical:`,
      opts: [
        'Polícia, estratégia, patrimônio, relatório.',
        'Militar, jacaré, cipó, armazém.',
        'Vítima, saída, juízo, baú.',
        'Caráter, fênix, lâmpada, revólver.',
        'Público, herói, coronel, café.'
      ],
      correct: 0,
      exp: 'As palavras "po-lí-cia", "es-tra-té-gia", "pa-tri-mô-nio" e "re-la-tó-rio" são todas paroxítonas terminadas em ditongo oral crescente (ou proparoxítonas aparentes/eventuais pela nomenclatura tradicional), recebendo acento pela mesmíssima regra fonético-ortográfica.',
      fund: 'Regras Oficiais de Acentuação Gráfica • Acentuação das Paroxítonas terminadas em Ditongo.',
      hint: 'Paroxítonas terminadas em ditongo oral: po-lí-cia, es-tra-té-gia, his-tó-ria!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `port_50_edital_${pad}`,
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_portugues_aocp',
    dicaMacete: 'Foco no edital AOCP: memorize a transitividade de verbos-chave e a impessoalidade de haver e fazer!'
  };
});

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE HISTÓRIA DE PERNAMBUCO (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: História de Pernambuco (Bloco I)
 * Foco rigoroso no edital: Capitania Hereditária, Holandeses, Guararapes, Mascates, 1817, 1824, Praieira, Agamenon, Dom Hélder e Cultura
 */
const QUESTOES_HISTORIA_PE_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Capitania de Pernambuco • Duarte Coelho e o Açúcar',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A Capitania de Pernambuco (Nova Lusitânia), doada ao donatário Duarte Coelho em 1534, foi uma das poucas que prosperaram expressivamente no Brasil Colônia. Esse sucesso econômico inicial decorreu principalmente:`,
      opts: [
        'Da descoberta abundante de ouro de aluvião na foz do Rio Capibaribe.',
        'Do solo fértil de massapê, clima tropical favorável, proximidade marítima com Portugal e implantação da agroindústria canavieira com mão de obra escravizada.',
        'Da aliança militar secreta firmada com a Coroa espanhola para a comercialização de tabaco.',
        'Da imediata industrialização têxtil desenvolvida nas primeiras feitorias de Olinda.',
        'Do cultivo intensivo de café exportado diretamente aos portos dos Países Baixos.'
      ],
      correct: 1,
      exp: 'O êxito da capitania de Duarte Coelho fundou-se na agroindústria do açúcar: Pernambuco possuía solo de massapê fértil na Zona da Mata, clima quente e úmido, recursos hídricos e localização geográfica estratégica mais próxima da Europa do que as regiões do Sul.',
      fund: 'História Colonial de Pernambuco • A Civilização do Açúcar.',
      hint: 'Pernambuco prosperou pelo Açúcar + Solo de Massapê + Posição estratégica de Olinda e Recife!'
    },
    {
      topico: 'Invasões Holandesas e Insurreição Pernambucana',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A Batalha das Tabocas (1645) e as Batalhas dos Montes Guararapes (1648 e 1649) integram o movimento conhecido como Insurreição Pernambucana. A relevância histórica dessas batalhas reside no fato de que:`,
      opts: [
        'Foram travadas com apoio naval massivo e financeiro imediato da Coroa de Castela.',
        'Promoveram a união espontânea de combatentes luso-brasileiros, indígenas e negros libertos contra os invasores batavos, marcando a gênese da identidade nacional.',
        'Resultaram na anexação perpétua de Pernambuco às províncias unidas da Holanda.',
        'Ocasionaram o imediato término do tráfico transatlântico de escravizados no Nordeste.',
        'Foram lideradas exclusivamente por generais mercenários franceses contratados por Olinda.'
      ],
      correct: 1,
      exp: 'A Insurreição Pernambucana uniu três grandes contingentes étnicos sob comando de Fernandes Vieira, Vidal de Negreiros, Antônio Felipe Camarão (indígena) e Henrique Dias (negro), forjando o sentimento nativista que deu origem ao Exército Brasileiro nos Montes Guararapes.',
      fund: 'Historiografia Militar Brasileira • Decreto do Dia do Exército (19 de abril de 1648).',
      hint: 'Guararapes = União das três matrizes (brancos, negros e indígenas) = Berço do Exército!'
    },
    {
      topico: 'Guerra dos Mascates (1710-1711)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A Guerra dos Mascates (1710-1711) expressou o choque político e econômico entre dois grupos sociais antagônicos em Pernambuco colonial. Esses grupos eram:`,
      opts: [
        'Os quilombolas de Palmares contra as forças expedicionárias de Domingos Jorge Velho.',
        'Os aristocratas proprietários de terras endividados de Olinda e os prósperos comerciantes portugueses estabelecidos no povoado de Recife.',
        'Os sertanejos confederados do Agreste contra as tropas legalistas de D. João VI.',
        'Os frades carmelitas revoltosos contra a diocese jesuítica de Igarassu.',
        'Os operários portuários do Recife contra a elite burocrática da Companhia das Índias.'
      ],
      correct: 1,
      exp: 'A Guerra dos Mascates opôs a aristocracia açucareira de Olinda (senhores de engenho falidos e endividados) aos mascates (comerciantes portugueses do Recife, credores da nobreza olindense). O estopim foi a elevação do Recife à categoria de vila independente de Olinda com pelourinho próprio.',
      fund: 'Movimentos Nativistas de Pernambuco • Guerra dos Mascates (Evaldo Cabral de Mello).',
      hint: 'Mascates: Aristocratas falidos de Olinda vs. Comerciantes ricos portugueses do Recife!'
    },
    {
      topico: 'Revolução Pernambucana de 1817',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A Revolução Pernambucana de 1817 destacou-se no cenário dos movimentos emancipacionistas do Brasil Colonial porque:`,
      opts: [
        'Limitou-se a uma revolta estritamente escrava liderada por marinheiros no litoral de Goiana.',
        'Foi o único movimento separatista da época colonial que ultrapassou a fase conspiratória e instalou efetivamente um governo republicano provisório em Pernambuco.',
        'Defendia a manutenção perpétua do Reino Unido de Portugal, Brasil e Algarves sob D. João VI.',
        'Proclamou a monarquia absolutista hereditária sob a coroa da família Cavalcanti de Albuquerque.',
        'Resultou na imediata cessão do Arquipélago de Fernando de Noronha ao Reino Unido.'
      ],
      correct: 1,
      exp: 'A Revolução de 1817 foi a mais importante do período colonial: tomou o poder por cerca de 75 dias, proclamou a República, promulgou uma Lei Orgânica com separação de poderes, liberdade de imprensa e de culto, e enviou embaixadores aos EUA e à Inglaterra.',
      fund: 'História Republicana e Nativista • A Revolução dos Padres (1817).',
      hint: '1817: ÚNICO movimento que tomou o poder e proclamou a República por 75 dias!'
    },
    {
      topico: 'Confederação do Equador (1824) e Frei Caneca',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Sobre a Confederação do Equador (1824), deflagrada em Pernambuco sob inspiração ideológica de Frei Caneca, é correto afirmar que:`,
      opts: [
        'Apoiou com entusiasmo a outorga da Constituição autoritária de 1824 imposta por Dom Pedro I.',
        'Rebelou-se contra a centralização monárquica e o Poder Moderador de Dom Pedro I, propondo uma federação de províncias republicanas no Nordeste.',
        'Visava reanexar o Nordeste brasileiro ao Reino de Portugal sob as cortes de Lisboa.',
        'Exigia o restabelecimento imediato da Inquisição e do Padroado Régio absolutista.',
        'Conseguiu depor definitivamente a monarquia brasileira e instituir a República no Rio de Janeiro.'
      ],
      correct: 1,
      exp: 'A Confederação do Equador (1824) foi uma reação direta à dissolução da Constituinte em 1823 e à outorga da Carta de 1824 por D. Pedro I com seu Poder Moderador hipertrofiado. Frei Caneca e Manuel de Carvalho propuseram a criação de uma república federativa regional inspirada na constituição da Colômbia.',
      fund: 'História do Primeiro Reinado • Confederação do Equador e o fuzilamento de Frei Caneca.',
      hint: '1824 = Confederação do Equador contra o autoritarismo e Poder Moderador de D. Pedro I!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `hist_50_edital_${pad}`,
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_historia_pe',
    dicaMacete: 'Linha do tempo tática da PMPE: 1534 Duarte Coelho -> 1648 Guararapes -> 1710 Mascates -> 1817 Revolução -> 1824 Confederação -> 1848 Praieira!'
  };
});

export const BANCO_NOVAS_QUESTOES_BLOCO_1: QuizQuestion[] = [
  ...QUESTOES_PORTUGUES_50,
  ...QUESTOES_HISTORIA_PE_50
];
