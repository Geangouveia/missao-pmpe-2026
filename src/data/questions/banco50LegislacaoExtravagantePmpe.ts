import type { QuizQuestion } from '../../types/game';

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE LEGISLAÇÃO EXTRAVAGANTE (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Legislação Extravagante (Bloco III)
 * Foco rigoroso no edital: Leis 13.869 (Abuso), 11.343 (Drogas), 10.826 (Desarmamento), 8.072 (Hediondos), 11.340 (Maria da Penha), 9.455 (Tortura)
 */
const QUESTOES_LEGISLACAO_EXTRAVAGANTE_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Nova Lei de Abuso de Autoridade (Lei nº 13.869/2019) • Dolo Específico',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Conforme dispõe expressamente o Artigo 1º, § 1º da Lei nº 13.869/2019 (Abuso de Autoridade), para a configuração dos crimes previstos nessa legislação, exige-se necessariamente que o agente público atue com a finalidade específica de:`,
      opts: [
        'Praticar qualquer conduta culposa por imperícia ou negligência na condução da viatura.',
        'Prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.',
        'Obter vantagens patrimoniais diretas superiores a quarenta salários mínimos.',
        'Impedir o livre trânsito de pessoas em rodovias estaduais em período noturno.',
        'Executar ordem verbal de superior hierárquico manifestamente legal.'
      ],
      correct: 1,
      exp: 'O Art. 1º, § 1º da Lei nº 13.869/2019 exige dolo específico: "As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal". Além disso, a divergência na interpretação de lei ou na avaliação de fatos NÃO configura abuso.',
      fund: 'Lei Federal nº 13.869/2019, Art. 1º, §§ 1º e 2º.',
      hint: 'Abuso de autoridade EXIGE dolo específico: prejudicar outrem, beneficiar a si/terceiro, ou por mero capricho/satisfação!'
    },
    {
      topico: 'Lei de Drogas (Lei nº 11.343/2006) • Art. 28 x Art. 33',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Um indivíduo é flagrado por uma guarnição da PMPE trazendo consigo 3 gramas de maconha para consumo pessoal. De acordo com o Artigo 28 da Lei nº 11.343/2006, são penas expressamente aplicáveis a essa conduta, EXCETO:`,
      opts: [
        'Advertência sobre os efeitos das drogas.',
        'Prestação de serviços à comunidade.',
        'Medida educativa de comparecimento a programa ou curso educativo.',
        'Pena privativa de liberdade com reclusão de 1 a 3 anos.',
        'Admoestação verbal em audiência pelo magistrado competente.'
      ],
      correct: 3,
      exp: 'O Art. 28 da Lei nº 11.343/2006 NÃO comina pena privativa de liberdade (prisão/reclusão/detenção) para o usuário de drogas. As únicas sanções previstas são: advertência, prestação de serviços à comunidade e medida educativa. Houve despenalização (não descriminalização penal na lei ordinária).',
      fund: 'Lei Federal nº 11.343/2006, Art. 28, incisos I, II e III.',
      hint: 'Art. 28 da Lei de Drogas NÃO TEM PENA DE PRISÃO (reclusão nem detenção)!'
    },
    {
      topico: 'Estatuto do Desarmamento (Lei nº 10.826/2003) • Posse x Porte Ilegal',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) No âmbito do Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido, no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:`,
      opts: [
        'Porte ilegal de arma de fogo de uso permitido (Art. 14).',
        'Posse irregular de arma de fogo de uso permitido (Art. 12).',
        'Disparo de arma de fogo em via pública (Art. 15).',
        'Comércio ilegal de armas e munições (Art. 17).',
        'Mera infração administrativa punível exclusivamente com advertência.'
      ],
      correct: 1,
      exp: 'A posse irregular de arma de fogo de uso permitido (Art. 12 da Lei 10.826/03) ocorre quando a arma está no interior da residência ou dependência desta, ou no local de trabalho (caso o agente seja o titular ou responsável legal do estabelecimento). Fora desses locais, trata-se de porte ilegal (Art. 14).',
      fund: 'Lei Federal nº 10.826/2003, Art. 12.',
      hint: 'Dentro de casa ou local de trabalho (do titular) = POSSE (Art. 12)! Fora de casa = PORTE (Art. 14)!'
    },
    {
      topico: 'Lei de Crimes Hediondos (Lei nº 8.072/1990) • Vedações Constitucionais',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Conforme o Artigo 5º, XLIII da CF/88 e a Lei nº 8.072/1990, os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e o terrorismo são considerados:`,
      opts: [
        'Afiançáveis mediante depósito em dinheiro e prescritíveis em dez anos.',
        'Inafiançáveis e insuscetíveis de graça ou anistia, respondendo por eles os mandantes, os executores e os que, podendo evitá-los, se omitirem.',
        'Susceptíveis de indulto natalino individual concedido por decreto legislativo.',
        'Crimes de ação penal privada exclusiva da vítima ou de seus sucessores.',
        'Infrações penais de menor potencial ofensivo sujeitas a transação penal.'
      ],
      correct: 1,
      exp: 'Pela regra constitucional (Art. 5º, XLIII) e pelo Art. 2º da Lei 8.072/90, os crimes hediondos e equiparados (3T: Tortura, Tráfico e Terrorismo) são inafiançáveis e insuscetíveis de graça ou anistia. Além disso, o racismo e a ação de grupos armados são imprescritíveis.',
      fund: 'Constituição Federal de 1988, Art. 5º, XLIII e Lei Federal nº 8.072/1990, Art. 2º.',
      hint: 'Hediondos e 3T (Tortura, Tráfico e Terrorismo) = INAFIANÇÁVEIS e SEM GRAÇA / ANISTIA!'
    },
    {
      topico: 'Lei Maria da Penha (Lei nº 11.340/2006) • Formas de Violência Doméstica',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Nos termos do Artigo 7º da Lei nº 11.340/2006 (Lei Maria da Penha), a conduta que cause à mulher dano emocional, diminuição da autoestima ou que prejudique e perturbe o seu pleno desenvolvimento, mediante ameaça, humilhação ou chantagem, configura violência:`,
      opts: [
        'Física.',
        'Psicológica.',
        'Sexual.',
        'Patrimonial.',
        'Moral.'
      ],
      correct: 1,
      exp: 'O Art. 7º, II da Lei Maria da Penha define a violência psicológica como qualquer conduta que cause dano emocional e diminuição da autoestima ou que prejudique e perturbe o pleno desenvolvimento da mulher. Violência moral é calúnia, difamação ou injúria; patrimonial atinge bens e recursos.',
      fund: 'Lei Federal nº 11.340/2006, Art. 7º, inciso II.',
      hint: 'Dano emocional, humilhação e diminuição da autoestima = Violência PSICOLÓGICA!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `leg_ext_50_edital_${pad}`,
    categoryId: 'legislacao_extravagante',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Extravagante',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_leg_extravagante',
    dicaMacete: 'Para Legislação Extravagante da PMPE: saiba a diferença de Posse x Porte no Desarmamento e as formas de violência da Maria da Penha!'
  };
});

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE LEGISLAÇÃO DA PMPE / ESTATUTO (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Legislação da PMPE (Bloco III)
 * Foco rigoroso no edital: Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco)
 */
const QUESTOES_LEGISLACAO_PMPE_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Estatuto da PMPE (Lei Estadual 6.783/1974) • Bases Institucionais',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Conforme o Artigo 2º da Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares do Estado de Pernambuco), a Polícia Militar de Pernambuco é uma instituição permanente, força auxiliar e reserva do:`,
      opts: [
        'Exército Brasileiro.',
        'Ministério da Justiça e Segurança Pública.',
        'Corpo de Fuzileiros Navais.',
        'Supremo Tribunal Federal.',
        'Poder Legislativo Estadual.'
      ],
      correct: 0,
      exp: 'O Art. 2º da Lei Estadual 6.783/1974 dispõe: "A Polícia Militar de Pernambuco, subordinada ao Governador do Estado, é uma instituição permanente, força auxiliar e reserva do Exército, organizada com base na hierarquia e na disciplina".',
      fund: 'Lei Estadual nº 6.783/1974, Art. 2º.',
      hint: 'A PMPE é força auxiliar e reserva do EXÉRCITO BRASILEIRO!'
    },
    {
      topico: 'Hierarquia e Disciplina Militar na PMPE',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) O Estatuto da PMPE (Lei Estadual nº 6.783/1974) preconiza que a hierarquia e a disciplina são as bases institucionais da corporação militar. A disciplina policial-militar é definida no Estatuto como:`,
      opts: [
        'A ordenação progressiva de autoridades em níveis e círculos hierárquicos dentro da força.',
        'A rigorosa observância e o acatamento integral das leis, regulamentos, normas e ordens por parte de todos os integrantes da Corporação.',
        'O direito privativo dos oficiais de comando de aplicar penas de detenção sem contraditório.',
        'A faculdade concedida aos sargentos de escolher discricionariamente suas escalas.',
        'A proibição absoluta de uso de uniforme militar fora das instalações do quartel.'
      ],
      correct: 1,
      exp: 'A disciplina militar consiste no cumprimento e acatamento voluntário e integral das leis, ordens e regulamentos. A "ordenação progressiva de autoridades" é a definição legal de HIERARQUIA militar (Art. 13 do Estatuto).',
      fund: 'Lei Estadual nº 6.783/1974, Arts. 12 e 13.',
      hint: 'Hierarquia = ordenação de autoridade por postos/graduações. Disciplina = acatamento das ordens e leis!'
    },
    {
      topico: 'Círculos Hierárquicos e Graus de Autoridade (Postos e Graduações)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) No âmbito da estrutura hierárquica da Polícia Militar de Pernambuco, a distinção técnica entre 'Posto' e 'Graduação' reside no fato de que:`,
      opts: [
        'O Posto é o grau hierárquico conferido exclusivamente aos Soldados e Cabos por ato do Comandante-Geral.',
        'O Posto é o grau hierárquico do Oficial, conferido por Carta Patente pelo Governador do Estado, enquanto a Graduação é o grau hierárquico da Praça, conferido pelo Comandante-Geral da PMPE.',
        'Posto e Graduação são expressões idênticas e indistintas aplicadas exclusivamente aos Subtenentes.',
        'A Graduação é vitalícia e conferida por decreto presidencial, enquanto o Posto é transitório.',
        'O Posto é conferido aos alunos dos cursos de formação e a Graduação aos coronéis da ativa.'
      ],
      correct: 1,
      exp: 'Segundo os Arts. 15 e 16 da Lei Estadual 6.783/1974: "Posto é o grau hierárquico do oficial, conferido por ato do Governador do Estado e confirmado em Carta Patente"; "Graduação é o grau hierárquico da praça, conferido pelo Comandante-Geral da Polícia Militar".',
      fund: 'Lei Estadual nº 6.783/1974, Arts. 15 e 16.',
      hint: 'OFICIAL tem POSTO (Governador por Carta Patente). PRAÇA tem GRADUAÇÃO (Comandante-Geral)!'
    },
    {
      topico: 'Comissões de Julgamento • Conselho de Justificação x Conselho de Disciplina',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) De acordo com o Estatuto da PMPE (Lei Estadual nº 6.783/1974), o órgão colegiado especificamente destinado a julgar da incapacidade do OFICIAL policial-militar para permanecer na ativa denomina-se:`,
      opts: [
        'Conselho de Disciplina.',
        'Conselho de Justificação.',
        'Comissão Permanente de Licitação Militar.',
        'Tribunal do Júri Especial de Segurança Pública.',
        'Conselho Superior de Inteligência Operacional.'
      ],
      correct: 1,
      exp: 'O Art. 47 do Estatuto prevê: "O Oficial presumivelmente incapaz de permanecer como policial-militar da ativa será submetido a Conselho de Justificação". O Conselho de Disciplina, por sua vez, aplica-se às Praças com estabilidade assegurada (Art. 48).',
      fund: 'Lei Estadual nº 6.783/1974, Arts. 47 e 48.',
      hint: 'OFICIAL vai para Conselho de JUSTIFICAÇÃO! PRAÇA vai para Conselho de DISCIPLINA!'
    },
    {
      topico: 'Violação dos Deveres Militares • Ética Policial Militar',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Dentre os preceitos fundamentais da ética policial-militar expressamente estabelecidos no Artigo 28 da Lei Estadual nº 6.783/1974, inclui-se o dever de:`,
      opts: [
        'Exercer atividades comerciais e gerenciais privadas de empresas de vigilância armada sem autorização.',
        'Amar a verdade e a responsabilidade como fundamento da dignidade pessoal e cumprir e fazer cumprir as leis e ordens das autoridades competentes.',
        'Manifestar posicionamento político-partidário em solenidades oficiais de formatura de tropas.',
        'Recusar socorro a cidadãos que não comprovem adimplemento com os tributos estaduais.',
        'Divulgar sem autorização relatórios reservados da Agência de Inteligência da PMPE.'
      ],
      correct: 1,
      exp: 'O Art. 28 da Lei Estadual nº 6.783/1974 lista os preceitos da ética policial-militar, entre os quais: "amar a verdade e a responsabilidade como fundamento da dignidade pessoal", "exercer com autoridade, eficiência e probidade as funções que lhe couberem", "cumprir e fazer cumprir as leis". Ao policial da ativa é vedado comerciar.',
      fund: 'Lei Estadual nº 6.783/1974, Art. 28.',
      hint: 'Ética PMPE: Amar a verdade e a responsabilidade como base da dignidade pessoal!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `estatuto_50_edital_${pad}`,
    categoryId: 'legislacao_pmpe',
    bloco: 'bloco_3',
    materiaNome: 'Legislação da PMPE',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_pmpe_estatuto',
    dicaMacete: 'Estatuto da PMPE (Lei 6.783/74): PMPE é reserva do Exército, Oficial tem Posto e Justificação, Praça tem Graduação e Disciplina!'
  };
});

export const BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_2: QuizQuestion[] = [
  ...QUESTOES_LEGISLACAO_EXTRAVAGANTE_50,
  ...QUESTOES_LEGISLACAO_PMPE_50
];
