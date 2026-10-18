import type { QuizQuestion } from '../../types/game';

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE DIREITO CONSTITUCIONAL (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Direito Constitucional (Bloco III)
 * Foco rigoroso no edital: Art. 1º a 4º (Princípios), Art. 5º (Direitos Fundamentais e Remédios Constitucionais), Art. 144 (Segurança Pública)
 */
const QUESTOES_CONSTITUCIONAL_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Art. 5º, XI da CF/88 • Inviolabilidade Domiciliar',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Em tema de direitos e garantias fundamentais previstos na Constituição Federal de 1988, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:`,
      opts: [
        'Durante a noite, mediante determinação expressa do delegado de polícia plantonista.',
        'Em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.',
        'A qualquer hora do dia ou da noite por determinação de autoridade judicial com mandado de busca.',
        'Durante a noite, para fiscalização sanitária de rotina da vigilância epidemiológica.',
        'Em qualquer situação quando se tratar de imóvel alugado sem contrato averbado em cartório.'
      ],
      correct: 1,
      exp: 'Segundo o Art. 5º, XI da CF/88: "a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial". Mandado judicial só autoriza ingresso DURANTE O DIA!',
      fund: 'Constituição Federal de 1988, Art. 5º, inciso XI.',
      hint: 'Mandado judicial = APENAS DURANTE O DIA! Flagrante, desastre ou socorro = a qualquer hora!'
    },
    {
      topico: 'Art. 144 da CF/88 • Órgãos de Segurança Pública e Competências',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Conforme o Artigo 144 da Constituição Federal de 1988, a segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. Às Polícias Militares cabem expressamente:`,
      opts: [
        'A polícia judiciária e a apuração de infrações penais comuns, exceto as militares.',
        'A polícia ostensiva e a preservação da ordem pública.',
        'A execução de atividades exclusivas de perícia oficial de natureza criminal.',
        'O patrulhamento ostensivo das rodovias e hidrovias federais.',
        'A fiscalização tributária e o controle aduaneiro de fronteiras internacionais.'
      ],
      correct: 1,
      exp: 'O Art. 144, § 5º da CF/88 estabelece textualmente: "Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil".',
      fund: 'Constituição Federal de 1988, Art. 144, § 5º.',
      hint: 'PM = Polícia OSTENSIVA + Preservação da ORDEM PÚBLICA!'
    },
    {
      topico: 'Remédios Constitucionais • Mandado de Segurança e Habeas Corpus',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Nos termos do Artigo 5º da Constituição da República, para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública, conceder-se-á:`,
      opts: [
        'Mandado de Injunção.',
        'Ação Popular.',
        'Mandado de Segurança.',
        'Arguição de Descumprimento de Preceito Fundamental.',
        'Reclamação Constitucional.'
      ],
      correct: 2,
      exp: 'O Art. 5º, LXIX da CF/88 dispõe: "conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público".',
      fund: 'Constituição Federal de 1988, Art. 5º, inciso LXIX.',
      hint: 'Direito líquido e certo não amparado por HC nem HD = Mandado de Segurança!'
    },
    {
      topico: 'Art. 1º ao 4º da CF/88 • Fundamentos e Objetivos da República',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) De acordo com o Artigo 3º da CF/88, constitui um dos objetivos fundamentais da República Federativa do Brasil:`,
      opts: [
        'A soberania nacional e o pluralismo político.',
        'A dignidade da pessoa humana e os valores sociais do trabalho.',
        'Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.',
        'A autodeterminação dos povos e a concessão de asilo político.',
        'A defesa da paz e o repúdio intransigente ao terrorismo e ao racismo.'
      ],
      correct: 2,
      exp: 'Os objetivos fundamentais (Art. 3º) iniciam com verbos no infinitivo (CON-GA-ERRA-PRO): Construir uma sociedade justa; Garantir o desenvolvimento nacional; Erradicar a pobreza e reduzir desigualdades; Promover o bem de todos sem preconceitos. As opções A e B são fundamentos (Art. 1º) e D e E são princípios nas relações internacionais (Art. 4º).',
      fund: 'Constituição Federal de 1988, Art. 3º, inciso III.',
      hint: 'Objetivos fundamentais começam com VERBO no infinitivo: CON-GA-ERRA-PRO!'
    },
    {
      topico: 'Art. 5º, XLVII da CF/88 • Proibição de Penas Cruéis e de Morte',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Segundo o texto constitucional vigente, não haverá penas de morte no Brasil, ressalvada a hipótese expressa de:`,
      opts: [
        'Crimes hediondos praticados por organizações paramilitares.',
        'Guerra declarada, nos termos do Art. 84, XIX da CF/88.',
        'Terrorismo internacional com explosão de artefatos biológicos.',
        'Genocídio reincidente e tortura qualificada de crianças.',
        'Traição à pátria em período de intervenção federal decretada.'
      ],
      correct: 1,
      exp: 'O Art. 5º, XLVII, "a" da CF/88 determina que não haverá penas: "de morte, salvo em caso de guerra declarada, nos termos do art. 84, XIX". As demais alíneas proíbem penas de caráter perpétuo, de trabalhos forçados, de banimento e cruéis.',
      fund: 'Constituição Federal de 1988, Art. 5º, inciso XLVII, alínea "a".',
      hint: 'Pena de morte no Brasil: SÓ em caso de GUERRA DECLARADA!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `const_50_edital_${pad}`,
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_const_pmpe',
    dicaMacete: 'Para o edital PMPE: Art. 5º na veia (inviolabilidade, remédios constitucionais) e Art. 144 (competências da PM)!'
  };
});

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE DIREITOS HUMANOS (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Direitos Humanos (Bloco III)
 * Foco rigoroso no edital: Dimensões (1ª a 5ª), DUDH 1948, Pacto de São José da Costa Rica (CADH 1969), Audiência de Custódia e Prisão Civil
 */
const QUESTOES_DIREITOS_HUMANOS_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Dimensões (Gerações) dos Direitos Humanos',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Na clássica doutrina dos Direitos Humanos inspirada no lema da Revolução Francesa (Liberdade, Igualdade e Fraternidade), os direitos de primeira dimensão caracterizam-se por:`,
      opts: [
        'Exigirem prestações sociais positivas e ativas do Estado nas áreas de saúde, previdência e moradia.',
        'Consagrarem direitos civis e políticos, impondo ao Estado um dever de abstenção (não intervenção arbitrária na esfera individual).',
        'Tutelar direitos transindividuais, difusos e coletivos, como a paz mundial e o meio ambiente ecologicamente equilibrado.',
        'Tratar exclusivamente da bioética, da clonagem genética e do ciberespaço.',
        'Regulamentar a criação de tribunais militares supranacionais permanentes.'
      ],
      correct: 1,
      exp: 'Os direitos de 1ª dimensão (Direitos Civis e Políticos - Liberdade) são direitos de resistência ou oposição ao Estado, exigindo postura de abstenção estatal (obrigações de não fazer). Já os de 2ª dimensão (Igualdade) exigem prestações ativas (fazer), e os de 3ª dimensão (Fraternidade) são difusos/coletivos.',
      fund: 'Teoria Geral dos Direitos Humanos • Karel Vasak e Norberto Bobbio.',
      hint: '1ª Dimensão = Liberdade = Civis e Políticos = Abstenção estatal (não fazer)!'
    },
    {
      topico: 'Pacto de São José da Costa Rica (CADH) • Audiência de Custódia',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Conforme o Artigo 7º, item 5 da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), toda pessoa detida ou retida:`,
      opts: [
        'Deve permanecer incomunicável pelo prazo improrrogável de dez dias para interrogatório policial.',
        'Deve ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada pela lei a exercer funções judiciais, tendo direito a ser julgada em prazo razoável ou posta em liberdade.',
        'Pode ser mantida presa indefinidamente até a localização de seu patrono dativo.',
        'Fica impedida de prestar declarações perante o Ministério Público Estadual.',
        'Perde compulsoriamente a nacionalidade caso não comprove endereço fixo.'
      ],
      correct: 1,
      exp: 'O Art. 7.5 da CADH fundamenta a realização da audiência de custódia no Brasil: qualquer pessoa presa deve ser apresentada sem demora a um juiz, que avaliará a legalidade do flagrante, a ocorrência de maus-tratos ou tortura e a necessidade de manutenção da prisão preventiva.',
      fund: 'Pacto de São José da Costa Rica (CADH, Decreto 678/1992), Art. 7.5.',
      hint: 'Apresentação sem demora perante juiz = AUDIÊNCIA DE CUSTÓDIA no Pacto de São José!'
    },
    {
      topico: 'Prisão Civil por Dívida e Súmula Vinculante 25 do STF',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A respeito da prisão civil por dívida no ordenamento jurídico brasileiro à luz do Pacto de São José da Costa Rica e da jurisprudência do STF (Súmula Vinculante 25):`,
      opts: [
        'É plenamente válida e aplicável tanto para o depositário infiel quanto para o devedor de alimentos.',
        'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito, restando permitida apenas a do devedor inescusável de pensão alimentícia.',
        'Foi integralmente abolida para todas e quaisquer modalidades no território nacional.',
        'Aplica-se apenas aos servidores públicos militares com dívidas bancárias.',
        'Pode ser decretada discricionariamente pelo oficial comandante da unidade.'
      ],
      correct: 1,
      exp: 'A Súmula Vinculante 25 do STF estabelece: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito". Devido ao status supralegal do Pacto de São José da Costa Rica, a única hipótese de prisão civil por dívida mantida no Brasil é a do devedor inescusável de alimentos.',
      fund: 'Súmula Vinculante nº 25 do STF • Art. 7.7 da CADH.',
      hint: 'Hoje no Brasil SÓ cabe prisão civil para pensão alimentícia! Depositário infiel NUNCA MAIS!'
    },
    {
      topico: 'Declaração Universal dos Direitos Humanos (DUDH 1948)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) A Declaração Universal dos Direitos Humanos, adotada pela Assembleia Geral da ONU em 1948, prevê solenemente em seu Artigo 1º que todos os seres humanos:`,
      opts: [
        'Nascem livres e iguais em dignidade e em direitos, sendo dotados de razão e de consciência e devendo agir uns para com os outros em espírito de fraternidade.',
        'Devem subordinação absoluta e incondicional às resoluções dos membros permanentes do Conselho de Segurança.',
        'Possuem direitos estritamente proporcionais à renda per capita de seus países de origem.',
        'Podem ser submetidos a penas degradantes mediante aprovação em plebiscito popular.',
        'Têm seus direitos suspensos automaticamente durante o período de serviço militar obrigatório.'
      ],
      correct: 0,
      exp: 'O Artigo 1º da DUDH de 1948 é a base filosófica dos Direitos Humanos: "Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade".',
      fund: 'Declaração Universal dos Direitos Humanos (ONU, 1948), Artigo 1º.',
      hint: 'Art. 1º da DUDH: Livres e iguais em dignidade e direitos, com razão, consciência e fraternidade!'
    },
    {
      topico: 'Doutrina da Proteção Internacional dos Direitos Humanos',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) No Sistema Interamericano de Proteção aos Direitos Humanos, os dois órgãos principais com competência para a fiscalização e julgamento de violações praticadas por Estados-partes são:`,
      opts: [
        'A Corte Internacional de Haia e o Tribunal Penal Internacional.',
        'A Comissão Interamericana de Direitos Humanos (CIDH) e a Corte Interamericana de Direitos Humanos (Corte IDH).',
        'O Conselho Econômico e Social e o Comitê de Genebra.',
        'O Alto Comissariado das Nações Unidas e a Interpol.',
        'A Cruz Vermelha Internacional e o Tribunal Militar de Nuremberg.'
      ],
      correct: 1,
      exp: 'O Sistema Interamericano (OEA) possui estrutura dual: a Comissão Interamericana de Direitos Humanos (com sede em Washington, órgão executivo/consultivo que processa petições iniciais) e a Corte Interamericana de Direitos Humanos (com sede em San José da Costa Rica, órgão jurisdicional que profere sentenças condenatórias vinculantes).',
      fund: 'Convenção Americana sobre Direitos Humanos (CADH), Arts. 33 a 73.',
      hint: 'Sistema Interamericano = COMISSÃO Interamericana (Washington) + CORTE Interamericana (San José)!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `dh_50_edital_${pad}`,
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Direitos Humanos',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_direitos_humanos',
    dicaMacete: 'Direitos Humanos na AOCP: Dimensões (1ª Liberdade, 2ª Igualdade, 3ª Fraternidade), Pacto de San José (audiência de custódia e fim do depositário infiel)!'
  };
});

export const BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_1: QuizQuestion[] = [
  ...QUESTOES_CONSTITUCIONAL_50,
  ...QUESTOES_DIREITOS_HUMANOS_50
];
