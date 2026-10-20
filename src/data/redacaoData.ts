export interface RedacaoTema {
  id: string;
  titulo: string;
  eixoTematico: 'Segurança Pública' | 'Direitos Humanos' | 'Cidadania & Sociedade' | 'Tecnologia & Ética';
  textosMotivadores: string[];
  repertoriosSugeridos: string[];
}

export interface RedacaoEsqueleto {
  id: string;
  nome: string;
  eixo: string;
  descricao: string;
  estrutura: {
    introducao: string;
    desenvolvimento1: string;
    desenvolvimento2: string;
    conclusao: string;
  };
}

export interface RepertorioSociocultural {
  id: string;
  fonte: string;
  autorOuDocumento: string;
  conceitoChave: string;
  comoAplicar: string;
  fraseOuCitacao: string;
}

export const TEMAS_REDACAO_PMPE: RedacaoTema[] = [
  {
    id: 'tema-01',
    titulo: 'O papel da polícia comunitária na consolidação da segurança cidadã',
    eixoTematico: 'Segurança Pública',
    textosMotivadores: [
      'Texto I: A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio (Art. 144 da CF/88).',
      'Texto II: O policiamento comunitário não é apenas uma tática operacional, mas uma filosofia institucional que promove a parceria permanente entre a corporação militar e a população local para diagnosticar e neutralizar as causas da criminalidade.',
      'Texto III: Dados do Fórum Brasileiro de Segurança Pública apontam que municípios com bases comunitárias ativas registram queda de até 35% nos índices de homicídios e crimes patrimoniais.'
    ],
    repertoriosSugeridos: [
      'Artigo 144 da Constituição Federal de 1988',
      'Filosofia de Polícia Comunitária (Robert Peel)',
      'Gilberto Dimenstein - "O Cidadão de Papel"'
    ]
  },
  {
    id: 'tema-02',
    titulo: 'Tecnologia e o uso de câmeras corporais na atividade policial militar',
    eixoTematico: 'Tecnologia & Ética',
    textosMotivadores: [
      'Texto I: A adoção de câmeras operacionais portáteis (COPs) acopladas ao uniforme de policiais militares gerou intenso debate quanto à transparência das ações e à salvaguarda da atuação dos próprios agentes de segurança.',
      'Texto II: Relatórios científicos demonstram que o uso de câmeras corporais reduziu em mais de 60% a letalidade policial e em mais de 70% as falsas denúncias de abuso contra policiais na linha de frente.',
      'Texto III: É fundamental garantir o equilíbrio entre a fiscalização da atuação estatal e a proteção dos dados pessoais dos cidadãos abordados e a integridade tática da tropa.'
    ],
    repertoriosSugeridos: [
      'Princípio da Eficiência e Publicidade (Art. 37 da CF/88)',
      'Zygmunt Bauman - A sociedade vigiada e a transparência contemporânea',
      'Lei Geral de Proteção de Dados (LGPD)'
    ]
  },
  {
    id: 'tema-03',
    titulo: 'A atuação das forças de segurança na proteção dos direitos fundamentais',
    eixoTematico: 'Direitos Humanos',
    textosMotivadores: [
      'Texto I: O Artigo 3º da Declaração Universal dos Direitos Humanos proclama: "Todo ser humano tem direito à vida, à liberdade e à segurança pessoal".',
      'Texto II: As forças policiais não são antagonistas dos direitos humanos; são, por excelência, os guardiões práticos encarregados de garantir que todo cidadão desfrute de suas liberdades fundamentais com dignidade.',
      'Texto III: O uso diferenciado e progressivo da força constitui preceito balizador da doutrina militar contemporânea para a preservação de vidas.'
    ],
    repertoriosSugeridos: [
      'Declaração Universal dos Direitos Humanos de 1948',
      'Pacto de São José da Costa Rica (CADH)',
      'Thomas Hobbes - O Leviatã e a garantia da ordem social'
    ]
  },
  {
    id: 'tema-04',
    titulo: 'Caminhos para o enfrentamento da violência doméstica e do feminicídio',
    eixoTematico: 'Cidadania & Sociedade',
    textosMotivadores: [
      'Texto I: A Lei Maria da Penha (Lei nº 11.340/2006) completou quase duas décadas como uma das legislações mais avançadas do mundo, mas os índices de feminicídio ainda desafiam o Estado.',
      'Texto II: O atendimento preventivo especializado, como o Programa Ronda Maria da Penha da PMPE, fiscaliza o cumprimento de medidas protetivas de urgência e salva vidas diárias.',
      'Texto III: A desconstrução de padrões machistas e a celeridade no afastamento do agressor são pilares indispensáveis para interromper o ciclo de abusos.'
    ],
    repertoriosSugeridos: [
      'Lei nº 11.340/2006 (Lei Maria da Penha)',
      'Simone de Beauvoir - Construção social de gênero',
      'Artigo 226, § 8º da Constituição Federal'
    ]
  },
  {
    id: 'tema-05',
    titulo: 'A saúde mental dos profissionais de segurança pública contemporâneos',
    eixoTematico: 'Segurança Pública',
    textosMotivadores: [
      'Texto I: O cotidiano policial militar impõe rotinas de estresse extremo, vigília constante e contato direto com o trauma e a violência urbana.',
      'Texto II: Pesquisas institucionais indicam que o número de suicídios e licenças psiquiátricas entre policiais muitas vezes supera o total de baixas por confronto armado em serviço.',
      'Texto III: Programas de apoio psicológico, valorização salarial e condições dignas de trabalho são cruciais para a resiliência emocional da tropa.'
    ],
    repertoriosSugeridos: [
      'Artigo 6º da CF/88 (Saúde como direito social universal)',
      'Byung-Chul Han - "A Sociedade do Cansaço"',
      'Doutrina de Valorização do Policial Militar'
    ]
  },
  {
    id: 'tema-06',
    titulo: 'Juventude e criminalidade: entre a repressão qualificada e a prevenção social',
    eixoTematico: 'Cidadania & Sociedade',
    textosMotivadores: [
      'Texto I: O Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) estabelece o princípio da prioridade absoluta na garantia dos direitos fundamentais da infância e juventude.',
      'Texto II: A ausência de equipamentos de lazer, educação de tempo integral e perspectiva profissional nos bairros vulneráveis transforma jovens em alvos fáceis para o narcotráfico.',
      'Texto III: A segurança pública inteligente combina presença policial ostensiva com políticas públicas transversais de inclusão social e esporte.'
    ],
    repertoriosSugeridos: [
      'Artigo 227 da Constituição Federal (Doutrina da Proteção Integral)',
      'Paulo Freire - A educação como prática de liberdade',
      'Estatuto da Criança e do Adolescente (Lei nº 8.069/90)'
    ]
  },
  {
    id: 'tema-07',
    titulo: 'O combate ao crime organizado e a preservação do Estado Democrático de Direito',
    eixoTematico: 'Segurança Pública',
    textosMotivadores: [
      'Texto I: A Lei nº 12.850/2013 disciplina os meios extraordinários de obtenção de prova contra organizações criminosas estruturadas.',
      'Texto II: Facções criminosas interestaduais buscam infiltrar-se no tecido econômico e desafiar as instituições estatais com armamentos de grosso calibre.',
      'Texto III: A resposta estatal deve basear-se na inteligência policial integrada, bloqueio de ativos financeiros e rigorosa observância das garantias legais.'
    ],
    repertoriosSugeridos: [
      'Lei nº 12.850/2013 (Organizações Criminosas)',
      'Max Weber - O monopólio legítimo da força física pelo Estado',
      'Sistema Único de Segurança Pública (SUSP)'
    ]
  },
  {
    id: 'tema-08',
    titulo: 'Segurança viária e a responsabilidade social no trânsito brasileiro',
    eixoTematico: 'Cidadania & Sociedade',
    textosMotivadores: [
      'Texto I: O trânsito em condições seguras é um direito de todos e dever dos órgãos do Sistema Nacional de Trânsito (Art. 1º, § 2º do CTB).',
      'Texto II: As operações da Lei Seca e o policiamento ostensivo rodoviário da PMPE reduzem expressivamente as colisões fatais e a superlotação de leitos hospitalares de trauma.',
      'Texto III: A mudança cultural exige rigor punitivo para crimes de embriaguez ao volante aliado a campanhas educativas permanentes.'
    ],
    repertoriosSugeridos: [
      'Código de Trânsito Brasileiro (Lei nº 9.503/1997)',
      'Princípio da Dignidade da Pessoa Humana',
      'Dados do SUS sobre custos de acidentes automobilísticos'
    ]
  },
  {
    id: 'tema-09',
    titulo: 'Inteligência artificial e videomonitoramento no policiamento urbano',
    eixoTematico: 'Tecnologia & Ética',
    textosMotivadores: [
      'Texto I: Sistemas de reconhecimento facial e leitura de placas (OCR) permitem que o Copom identifique foragidos da justiça e veículos roubados em segundos.',
      'Texto II: É fundamental mitigar vieses algorítmicos para evitar falsos positivos e abordagens indevidas a minorias étnicas.',
      'Texto III: O uso ético da tecnologia potencializa o efetivo e torna a segurança pública preditiva e eficiente.'
    ],
    repertoriosSugeridos: [
      'Princípio da Impessoalidade e Eficiência Administrativa',
      'Yuval Noah Harari - "Homo Deus" e a era dos algoritmos',
      'Constituição Federal de 1988 (Art. 5º - Intimidade e Privacidade)'
    ]
  },
  {
    id: 'tema-10',
    titulo: 'O combate ao racismo e à injúria racial nas relações sociais brasileiras',
    eixoTematico: 'Direitos Humanos',
    textosMotivadores: [
      'Texto I: A Lei nº 14.532/2023 equiparou a injúria racial ao crime de racismo, tornando-a inafiançável e imprescritível perante o ordenamento pátrio.',
      'Texto II: A formação do policial militar deve pautar-se pelo combate implacável a preconceitos de raça, cor, etnia ou religião durante o atendimento comunitário.',
      'Texto III: O Brasil carrega heranças históricas da escravidão que demandam ações afirmativas e postura antirracista ativa de todos os agentes públicos.'
    ],
    repertoriosSugeridos: [
      'Lei nº 7.716/1989 e Lei nº 14.532/2023',
      'Silvio Almeida - "Racismo Estrutural"',
      'Constituição Federal de 1988 (Art. 3º, IV - Promover o bem de todos sem preconceitos)'
    ]
  }
];

export const ESQUELETOS_CORINGA: RedacaoEsqueleto[] = [
  {
    id: 'esq-01',
    nome: 'Modelo Coringa de Elite: Segurança Pública & Cidadania',
    eixo: 'Segurança Pública / Ordem Social',
    descricao: 'Estrutura dissertativa clássica de 4 parágrafos adaptável a qualquer tema de segurança pública, direitos ou policiamento.',
    estrutura: {
      introducao: 'Em sua Carta Magna de 1988, o legislador constituinte brasileiro consagrou a segurança pública como dever irrevogável do Estado e direito e responsabilidade de toda a sociedade. Não obstante essa previsão nobre, observa-se que, na contemporaneidade, [TEMA ESPECÍFICO] ainda representa um entrave desafiador à consolidação da paz social. Nesse panorama, torna-se imperioso analisar não apenas [ARGUMENTO 1 - causa estrutural/institucional], mas também [ARGUMENTO 2 - consequência/desafio prático], a fim de mitigar esse revés.',
      desenvolvimento1: 'Em primeiro plano, cabe pontuar que [ARGUMENTO 1] atua como propulsor basilar dessa problemática. Sob a perspectiva do filósofo Thomas Hobbes, cabe ao Estado o monopólio da garantia da ordem para resguardar os cidadãos do caos e da vulnerabilidade social. Contudo, constata-se com frequência uma dissonância entre a teoria normativa e a realidade fática nas ruas de Pernambuco e do Brasil, tendo em vista que [Aprofundamento com dados ou fatos do tema]. Destarte, sem investimentos consistentes em treinamento, inteligência e valorização operacional, a preservação do bem comum permanece fragilizada.',
      desenvolvimento2: 'Ademais, é fulcral destacar que [ARGUMENTO 2] corrobora a perpetuação desse cenário hostil. De acordo com o jornalista Gilberto Dimenstein em sua obra "O Cidadão de Papel", os direitos fundamentais garantidos no ordenamento jurídico correm o risco de se tornarem inócuos se não forem traduzidos em ações concretas de proteção diária. Desse modo, quando [Causa ou desdobramento do tema], a população perde a confiança nas instituições e a criminalidade ganha terreno fértil, revelando a urgência de uma atuação policial técnica, humanizada e resolutiva.',
      conclusao: 'Infere-se, portanto, a urgência de medidas interventivas para suplantar os obstáculos concernentes a [RETOMADA DO TEMA]. Para tanto, cabe à Secretaria de Defesa Social, em consonância com o Governo do Estado e a Polícia Militar, intensificar as ações preventivas e operacionais voltadas a [Ação concreta]. Essa medida deve ser efetivada mediante o reaparelhamento tecnológico das tropas e a ampliação do policiamento comunitário nas áreas de maior vulnerabilidade, com o fito de garantir o pleno exercício da cidadania e a segurança perene de todos os pernambucanos.'
    }
  },
  {
    id: 'esq-02',
    nome: 'Modelo Coringa de Direitos Fundamentais & Dignidade',
    eixo: 'Direitos Humanos / Vulnerabilidades',
    descricao: 'Ideal para temas envolvendo direitos humanos, combate a discriminações, violência doméstica e grupos vulneráveis.',
    estrutura: {
      introducao: 'A Declaração Universal dos Direitos Humanos, proclamada em 1948, assevera que todo indivíduo possui direito intrínseco à vida, à liberdade e à dignidade. Todavia, a conjuntura brasileira contemporânea distancia-se desse ideal quando se examina [TEMA ESPECÍFICO]. Com efeito, a persistência desse panorama lesivo decorre tanto de [ARGUMENTO 1 - raízes culturais/omissão], quanto de [ARGUMENTO 2 - escassez de fiscalização/assistência], fatores que urgem por imediata superação institucional.',
      desenvolvimento1: 'De início, convém ressaltar que [ARGUMENTO 1] perpetua a violação de garantias basilares. Segundo o sociólogo Zygmunt Bauman, a modernidade líquida é marcada pela fragilização dos laços comunitários e pela indiferença coletiva diante do sofrimento alheio. No contexto brasileiro, isso se manifesta quando [Exemplo prático do tema], evidenciando que preconceitos enraizados e a tolerância social com a violência enfraquecem o Estado Democrático de Direito.',
      desenvolvimento2: 'Outrossim, deve-se salientar que [ARGUMENTO 2] agrava a vulnerabilidade das vítimas. Conforme estipula o Artigo 5º da Carta Republicana de 1988, todos são iguais perante a lei, sem distinção de qualquer natureza. Não obstante, a escassez de estruturas especializadas e o tempo de resposta deficitário em determinadas localidades impedem que as medidas legais alcancem eficácia máxima. Logo, a atuação enérgica das forças de segurança constitui o escudo indispensável para restituir a dignidade violada.',
      conclusao: 'Torna-se evidente, por conseguinte, que [TEMA] demanda uma resposta coordenada do poder público. Compete ao Ministério da Justiça, em parceria com os governos estaduais e a corporação policial, estruturar forças-tarefas permanentes dedicadas ao acolhimento e proteção de [Público-alvo]. Isso deve ser viabilizado pela capacitação continuada dos militares em direitos humanos e pelo fortalecimento das redes de apoio psicossocial, consolidando, assim, uma sociedade verdadeiramente fraterna e segura.'
    }
  }
];

export const REPERTORIOS_BOLSO: RepertorioSociocultural[] = [
  {
    id: 'rep-01',
    fonte: 'Constituição Federal de 1988',
    autorOuDocumento: 'Artigo 144 da CF/88',
    conceitoChave: 'Segurança como dever estatal e direito/responsabilidade de todos',
    comoAplicar: 'Base legal obrigatória em qualquer redação sobre o papel da polícia militar e a manutenção da ordem pública.',
    fraseOuCitacao: '"A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio."'
  },
  {
    id: 'rep-02',
    fonte: 'Declaração Universal dos Direitos Humanos',
    autorOuDocumento: 'ONU (1948 - Artigo 3º)',
    conceitoChave: 'Direito à vida, liberdade e segurança pessoal',
    comoAplicar: 'Utilize para fundamentar que a segurança não se opõe aos direitos humanos, mas é a sua principal garantia prática.',
    fraseOuCitacao: '"Todo ser humano tem direito à vida, à liberdade e à segurança pessoal."'
  },
  {
    id: 'rep-03',
    fonte: 'Filosofia Política Moderna',
    autorOuDocumento: 'Thomas Hobbes (1588-1679)',
    conceitoChave: 'O Leviatã e o Contrato Social',
    comoAplicar: 'Argumente que cabe ao Estado o monopólio da força legítima para evitar a barbárie e garantir a convivência civilizada.',
    fraseOuCitacao: 'Sem um poder comum capaz de manter a todos em respeito, os homens viveriam em perpétua condição de guerra de todos contra todos.'
  },
  {
    id: 'rep-04',
    fonte: 'Sociologia Brasileira',
    autorOuDocumento: 'Gilberto Dimenstein (1956-2020)',
    conceitoChave: 'O Cidadão de Papel',
    comoAplicar: 'Denuncie o abismo entre leis perfeitas no papel e a carência de efetividade e proteção nos bairros periféricos.',
    fraseOuCitacao: 'A cidadania plena no Brasil é frequentemente fictícia, restrita ao texto da lei, gerando cidadãos de papel.'
  },
  {
    id: 'rep-05',
    fonte: 'Sociologia Contemporânea',
    autorOuDocumento: 'Zygmunt Bauman (1925-2017)',
    conceitoChave: 'Medo Líquido e Insegurança Urbana',
    comoAplicar: 'Explique a sensação de vulnerabilidade da sociedade contemporânea diante do avanço do crime organizado e da desintegração social.',
    fraseOuCitacao: 'O medo contemporâneo é líquido e difuso, alimentado pela incerteza e pela sensação de desproteção constante.'
  },
  {
    id: 'rep-06',
    fonte: 'Filosofia Política',
    autorOuDocumento: 'Hannah Arendt (1906-1975)',
    conceitoChave: 'A Banalidade do Mal',
    comoAplicar: 'Mostre como a rotinização da violência urbana anestesia a sociedade, que passa a normalizar homicídios cotidianos.',
    fraseOuCitacao: 'O maior mal do mundo é cometido por pessoas que se recusam a ser pessoas e que normalizam a injustiça sem reflexão crítica.'
  }
];
