import type { QuizQuestion } from '../../types/game';

// Textos de Apoio Oficiais do Simulado NUCE / AOCP PMPE
const TEXTO_FRANTZ_FANON = `A reflexão sobre o tempo e a existência humana exige compreender como os indivíduos se situam diante de sua própria história. É preciso saber, em dez anos ou em um século, se a consciência individual foi capaz de emancipar-se das amarras que a paralisam e construir caminhos reais de liberdade coletiva. A alienação manifesta-se com frequência na incapacidade de articular a memória histórica às aspirações do porvir.

A relação que estabelecemos com a temporalidade define a essência da nossa ação no mundo. Há aqueles cuja postura é marcada pela fixação obsessiva no ontem, recusando qualquer transformação. Quem não leva em conta o passado transforma-se em uma pessoa com a qual não se pode contar, desprovida de raízes e referências. Por outro lado, quem se apega exclusivamente ao momento presente acha, com todo o ímpeto, que tudo se encerra no agora e que não existe nada além dele mesmo no planeta. Por fim, aqueles que se refugiam em visões de um futuro distante descompromissado da realidade concreta alienam-se da responsabilidade do agir imediato. A verdadeira liberdade nasce da síntese ativa entre memória, compromisso no presente e projeto de futuro.`;

const TEXTO_SEMIARIDO = `O semiárido brasileiro é um dos biomas que merece atenção especial por suas peculiaridades ecológicas e sociais. Historicamente marcado pelo estigma da seca e da escassez, a região vem passando por profundas transformações no modo como as populações locais se relacionam com o meio ambiente. Diversas organizações sociais vêm atuando junto às comunidades rurais para mudar esse paradigma. Elas mobilizam os agricultores e agricultoras, promovendo trocas de experiência e qualificação técnica para a produção agroecológica.

Mesmo sofrendo com a problemática das mudanças climáticas que tanto aflige, principalmente, os agricultores familiares, a proposta central é transformar os obstáculos provocados pelo clima em oportunidades reais de emancipação. Isso inclui premissas como o cuidado com o meio ambiente para uma vida digna, o armazenamento de água para produção e a segurança alimentar. Assim, constrói-se uma convivência harmoniosa e sustentável com o semiárido, desmistificando a ideia de que a região é inviável para o desenvolvimento humano.`;

export const SIMULADO_COMPLETO_PMPE: QuizQuestion[] = [
  // =========================================================================
  // BLOCO I: LÍNGUA PORTUGUESA (QUESTÕES 01 A 10)
  // =========================================================================
  {
    id: 'pmpe-por-01',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Interpretação e Compreensão Textual (Frantz Fanon)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'De acordo com os sentidos do texto de Frantz Fanon ("Alienação e Liberdade"), as pessoas que:',
    options: [
      'desvalorizam o passado são incultas.',
      'valorizam apenas o passado são inconsequentes.',
      'valorizam apenas o futuro são inovadoras.',
      'desvalorizam o presente são desprezíveis.',
      'valorizam apenas o presente são egoístas.'
    ],
    correctIndex: 4,
    explanation: 'No texto, Fanon argumenta que quem foca exclusivamente no momento presente sem pensar no ontem nem no amanhã age como se não existisse nada além de si mesmo no planeta, assumindo uma postura individualista e egoísta.',
    fundamentacaoLegal: 'Interpretação Textual: Compreensão global dos sentidos do texto e das ideias do autor.',
    tituloTexto: 'Texto I: "Alienação e Liberdade" — Frantz Fanon',
    textoApoio: TEXTO_FRANTZ_FANON,
    hint: 'Quem vive só o agora crê que nada existe além de si mesmo no planeta.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-por-02',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Coesão e Estrutura Paragrafal',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'No segundo parágrafo do texto, o quarto, o quinto e o sexto períodos descrevem:',
    options: [
      'três tipos distintos de personalidade, respectivamente.',
      'a pessoa que leva em conta, simultaneamente, os três elementos do tempo.',
      'as características indispensáveis a quem deseje inventar um novo modo de vida.',
      'os atributos essenciais de quem preserva a memória e a tradição.',
      'uma mesma pessoa, cujo anonimato é marcado pelo emprego do pronome "Quem".'
    ],
    correctIndex: 0,
    explanation: 'Os períodos descrevem 3 perfis temporais opostos: aquele que só olha o passado, aquele que só olha o presente e aquele que sonha apenas com um futuro longínquo, tipificando três posturas/personalidades distintas perante o tempo.',
    fundamentacaoLegal: 'Análise Textual: Organização retórica e tipologia das ideias no parágrafo.',
    tituloTexto: 'Texto I: "Alienação e Liberdade" — Frantz Fanon',
    textoApoio: TEXTO_FRANTZ_FANON,
    hint: 'São três atitudes diferentes em relação ao passado, presente e futuro.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-por-03',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Sintaxe e Pontuação - Deslocamento de Termos',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Os sentidos e a correção gramatical do texto seriam preservados caso se deslocasse:',
    options: [
      'a expressão "em dez anos" para imediatamente depois de "saber", no segundo período do primeiro parágrafo.',
      'a expressão "no planeta" para imediatamente antes de "não existe", no final do quinto período do segundo parágrafo.',
      'o vocábulo "não" para imediatamente depois de "Quem", no início do quarto período do segundo parágrafo.',
      'a expressão "com todo o ímpeto" para imediatamente depois de "acha", no quinto período do segundo parágrafo.',
      'o vocábulo "mesmo" para imediatamente antes de "nada", no final do quinto período do segundo parágrafo.'
    ],
    correctIndex: 1,
    explanation: 'Em "...e que não existe nada além dele mesmo no planeta", a locução adverbial de lugar "no planeta" pode ser anteposta: "...e que, no planeta, não existe nada além dele mesmo", mantendo rigorosamente o sentido e a gramática.',
    fundamentacaoLegal: 'Sintaxe: Deslocamento de Adjunto Adverbial e manutenção da coesão e coerência.',
    tituloTexto: 'Texto I: "Alienação e Liberdade" — Frantz Fanon',
    textoApoio: TEXTO_FRANTZ_FANON,
    hint: 'Adjunto adverbial pode se deslocar no período mantendo a correção.',
    difficulty: 'hard'
  },
  {
    id: 'pmpe-por-04',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Emprego de Pronomes Relativos e Regência',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Mantendo-se a correção gramatical e os sentidos do texto, a expressão "com a qual", no final do quarto período do segundo parágrafo, referindo-se a uma pessoa, poderia ser substituída por:',
    options: [
      'junto da qual.',
      'para com quem.',
      'pela qual.',
      'junto a quem.',
      'com quem.'
    ],
    correctIndex: 4,
    explanation: 'O pronome relativo "a qual", quando se refere a ser humano/pessoa ("uma pessoa com a qual não se pode contar"), pode ser substituído perfeitamente por "quem" precedido da mesma preposição regida pelo verbo contar (contar COM alguém): "com quem".',
    fundamentacaoLegal: 'Gramática Normativa: O pronome "quem" substitui antecedente humano precedido de preposição.',
    tituloTexto: 'Texto I: "Alienação e Liberdade" — Frantz Fanon',
    textoApoio: TEXTO_FRANTZ_FANON,
    hint: 'Para pessoas: "com a qual" = "com quem".',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-por-05',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Concordância Verbal e Colocação Pronominal',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Assinale a alternativa em que a frase está em conformidade com a norma-padrão de concordância e colocação dos pronomes átonos:',
    options: [
      'Percebe-se que, em 2020, já havia setenta anos desde que Hannah Arendt se mostrou preocupada com as formas de autoridade que entraram em colapso.',
      'Foi constatado inúmeras formas de desautorização, até mesmo das que se via nos anos 1950.',
      'Poderia-se dizer que a vida adulta, hoje, representa um problema para os que não a enfrenta com maturidade.',
      'Existe sempre e em todos os tempos desafios à autoridade, em suas diversas manifestações, haja vista o que passa-se entre pais e filhos.',
      'Já vão fazer décadas que a ideia de as pessoas adultarem estão se firmando nas sociedades ocidentais.'
    ],
    correctIndex: 0,
    explanation: 'A alternativa A é perfeita: verbo HAVER indicando tempo transcorrido é impessoal (já havia setenta anos) e próclise adequada após o pronome. Na B, deveria ser "Foram constatadas inúmeras formas"; na C, não se inicia oração com pronome oblíquo nem se usa ênclise em futuro do pretérito ("Poder-se-ia dizer"); na D, "Existem desafios" (plural) e próclise "o que se passa"; na E, "Já vai fazer décadas".',
    fundamentacaoLegal: 'Concordância Verbal (verbo HAVER impessoal) e Sintaxe de Colocação Pronominal.',
    hint: 'Verbo HAVER no sentido de tempo decorrido não vai para o plural!',
    difficulty: 'hard'
  },
  {
    id: 'pmpe-por-06',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Regência Verbal e Nominal',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Assinale a alternativa que, de acordo com a norma-padrão de regência, dá sequência correta ao enunciado: "Qualquer homem ou mulher..."',
    options: [
      'consentiria de permanecer adolescente, sem deveres aos quais assumir.',
      'aspiraria a não adultar para evitar obrigações a que se prender.',
      'preferiria não adultar do que assumir deveres nos quais todos estão sujeitos.',
      'assistiria feliz o fim da autoridade da qual nunca depositou confiança.',
      'visaria menos deveres e obrigações dos quais se preocupar.'
    ],
    correctIndex: 1,
    explanation: 'O verbo ASPIRAR no sentido de almejar/pretender é transitivo indireto e exige a preposição "a" ("aspiraria A não adultar"). O verbo prender rege a preposição "a" ("obrigações A QUE se prender"). Na C, o verbo preferir não aceita "do que" (prefere algo A outro); na D, assistir exige preposição "a"; na E, visar (almejar) exige preposição "a".',
    fundamentacaoLegal: 'Sintaxe de Regência: Aspirar (no sentido de desejar) rege preposição A.',
    hint: 'Aspirar no sentido de almejar exige a preposição A.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-por-07',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Coesão Referencial - Termos Anafóricos',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Considere as passagens do texto sobre o semiárido:\n• "Isso inclui premissas como o cuidado com o meio ambiente para uma vida digna..."\n• "Elas mobilizam os agricultores e agricultoras, promovendo trocas de experiência..."\nOs termos destacados ("Isso" e "Elas") referem-se, correta e respectivamente, a:',
    options: [
      'trazer o real significado sociotransformador; as lutas populares.',
      'levar a uma compreensão equivocada; as possibilidades de riqueza.',
      'sofrer com as mudanças climáticas; as alternativas já geradas.',
      'mudar as condições de vida; transformações no comportamento.',
      'transformar os obstáculos em oportunidades; organizações sociais.'
    ],
    correctIndex: 4,
    explanation: 'No texto, "Isso" resume a proposta de "transformar os obstáculos provocados pelas mudanças climáticas em oportunidades", enquanto "Elas" retoma o sujeito no plural "organizações sociais".',
    fundamentacaoLegal: 'Coesão Textual: Pronomes demonstrativos de síntese e pronomes pessoais anafóricos.',
    tituloTexto: 'Texto II: "Convivência com o Semiárido e Agroecologia"',
    textoApoio: TEXTO_SEMIARIDO,
    hint: '"Elas" refere-se às organizações sociais; "Isso" à transformação de obstáculos em oportunidades.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-por-08',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Semântica - Sentido de Conectivos e Verbos',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Em relação aos termos destacados em "sofrendo com a problemática das mudanças climáticas que tanto aflige, principalmente, os agricultores...", é correto afirmar que o conectivo "com" expressa sentido de:',
    options: [
      'causa; e a forma verbal "aflige", de "atormentar".',
      'intensidade; e a forma verbal "aflige", de "influenciar".',
      'comparação; e a forma verbal "aflige", de "prejudicar".',
      'modo; e a forma verbal "aflige", de "espairecer".',
      'consequência; e a forma verbal "aflige", de "devastar".'
    ],
    correctIndex: 0,
    explanation: 'O "com" introduz a causa do sofrimento (sofrer em razão de / por causa da problemática das mudanças climáticas), e o verbo "afligir" tem o sentido exato de causar aflição, atormentar, angustiar.',
    fundamentacaoLegal: 'Semântica: Valor circunstancial causal da preposição "com" e sinonímia verbal.',
    tituloTexto: 'Texto II: "Convivência com o Semiárido e Agroecologia"',
    textoApoio: TEXTO_SEMIARIDO,
    hint: 'Sofrendo COM a seca = sofrer POR CAUSA da seca (causa).',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-por-09',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Concordância Verbal e Emprego dos Verbos',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Assinale a alternativa em que a concordância verbal e o emprego de verbos estão de acordo com a norma-padrão:',
    options: [
      'O semiárido é um dos biomas que merece atenção por suas peculiaridades, no qual o homem interveio para buscar riquezas com a produção agroecológica.',
      'Quando o homem quiser melhor aproveitamento do semiárido, as mudanças climáticas que compõe obstáculos deverão ser contornadas.',
      'É preciso que hajam trocas de experiências e qualificação dos agricultores para que se garanta a construção coletiva.',
      'Já fazem anos que famílias vem se dedicando à produção agroecológica, ainda que muitos consideram que ali só existe adversidades.',
      'Gera-se riquezas de possibilidades, de caminhos e de alternativas na região do semiárido, caso se mantém a qualificação dos agricultores.'
    ],
    correctIndex: 0,
    explanation: 'Na alternativa A, a flexão do verbo intervir no pretérito perfeito é "interveio" (corretíssima, derivada de veio). Na B, "que compõem obstáculos" (plural); na C, o verbo haver no sentido de existir não vai para o plural ("haja trocas"); na D, "Já faz anos" e "vêm se dedicando"; na E, "Geram-se riquezas" e "caso se mantenha".',
    fundamentacaoLegal: 'Conjugação Verbal e Concordância: Verbo intervir conjuga-se como vir (ele veio -> interveio).',
    tituloTexto: 'Texto II: "Convivência com o Semiárido e Agroecologia"',
    textoApoio: TEXTO_SEMIARIDO,
    hint: 'Verbo intervir: ele VEIO, logo ele INTERVEIO.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-por-10',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Redação Oficial - Clareza, Concisão e Formalidade',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Assinale a alternativa com redação que expressa o uso da variante linguística adequada às situações formais de comunicação escrita, atentando para clareza, adequação vocabular e concisão:',
    options: [
      'Faço saber que para que vocês atendam adequadamente o público por quem quer que seja da seção terá novas medidas que sejam iguais para todos.',
      'Esclarecemos aos senhores servidores desta seção que serão adotadas medidas para padronização dos procedimentos de atendimento ao público.',
      'Aviso meu a quem interessar possa: novas medidas que uniformizem maneiras de atender o público vão ser tomadas nessa seção pelos servidores.',
      'Comunicado a todo mundo da seção: Vossas Senhorias terão medidas padronizadas nos métodos de atendimento ao público.',
      'Pra que ocorra atendimento ao público pelos encarregados dessa tarefa, vou baixar normas garantindo uniformidade.'
    ],
    correctIndex: 1,
    explanation: 'A alternativa B emprega a linguagem formal padrão exigida no serviço público: clareza, impessoalidade, correção gramatical, vocabulário sóbrio e estrutura concisa.',
    fundamentacaoLegal: 'Manual de Redação da Presidência da República: Padrões de Formalidade, Clareza e Impessoalidade.',
    hint: 'A redação oficial preza pela impessoalidade, clareza e polidez formal.',
    difficulty: 'easy'
  },

  // =========================================================================
  // BLOCO I: HISTÓRIA DE PERNAMBUCO (QUESTÕES 11 A 20)
  // =========================================================================
  {
    id: 'pmpe-his-11',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Primeiros Contatos Europeus e Sociedades Indígenas em Pernambuco',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A chegada dos portugueses na América ocorreu em 1500. Diversos relacionamentos foram desenvolvidos junto aos povos nativos. Acerca dos primeiros contatos, é correto afirmar:',
    options: [
      'A chegada dos europeus representou o início do completo extermínio imediato de todas as culturas indígenas.',
      'O avanço da colonização ocasionou uma postura unificada dos povos nativos, que se uniram todos contra os invasores.',
      'A diversidade étnica existente entre os indígenas permitiu aos portugueses estabelecerem alianças com certos grupos para que pudessem enfrentar a resistência de outros.',
      'Os grupos tupi do litoral pernambucano impediram o avanço dos colonizadores ao longo de todo o século XVI.',
      'As poucas habilidades dos indígenas com a guerra permitiram aos portugueses domínio imediato sem resistência.'
    ],
    correctIndex: 2,
    explanation: 'Os povos indígenas não eram um bloco homogêneo; havia rivalidades ancestrais entre diferentes etnias (como Tupiniquins, Tupinambás, Tabajaras e Caetés). Os colonizadores portugueses se aproveitaram dessas rivalidades para forjar alianças com alguns grupos (como os Tabajaras) contra outros inimigos.',
    fundamentacaoLegal: 'Historiografia de Pernambuco: Alianças luso-indígenas e ocupação da Capitania de Duarte Coelho.',
    hint: 'Rivalidades prévias entre povos indígenas permitiram alianças estratégicas com os europeus.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-his-12',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'A Economia Açucareira na Capitania de Pernambuco',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'O açúcar foi um produto econômico muito desenvolvido na Capitania de Pernambuco. Sobre essa temática, marque a alternativa INCORRETA:',
    options: [
      'De base monocultora, a atividade açucareira se adaptou positivamente nas terras de massapê da Zona da Mata de Pernambuco.',
      'O avanço do açúcar permitiu o crescimento das vilas e povoados, bem como o fluxo populacional de imigrantes e cristãos-novos.',
      'Os engenhos eram as principais unidades de produção econômica, integrando casa de purgar, casa-grande e senzala.',
      'No final do século XVI, o modelo açucareiro gerou expressiva lucratividade para Portugal e comerciantes holandeses.',
      'O avanço do açúcar foi um fator determinante para a formação da sociedade colonial baseada nas elites açucareiras e na mão de obra livre.'
    ],
    correctIndex: 4,
    explanation: 'A alternativa E está incorreta porque a sociedade açucareira colonial baseava-se fundamentalmente no trabalho compulsório e na mão de obra ESCRAVIZADA (inicialmente indígena e predominantemente africana), e NÃO em mão de obra livre.',
    fundamentacaoLegal: 'História Colonial de Pernambuco: Sociedade patriarcal, latifundiária e escravocrata do açúcar.',
    hint: 'A mão de obra da economia açucareira era escrava, nunca livre.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-his-13',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Pernambuco Holandês e a Era de Maurício de Nassau (1637-1644)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'No século XVII, a presença holandesa em Pernambuco marcou a história estadual. Sobre o governo de Maurício de Nassau (1637-1644), marque a alternativa correta:',
    options: [
      'Chegando em 1637, Nassau foi contratado pela WIC com o exclusivo objetivo de expulsar todos os colonos portugueses.',
      'O conde holandês Nassau destacou-se pela grande reforma urbana na Cidade Maurícia (Recife), erguendo pontes, observatório astronômico, palácios e assegurando a liberdade de cultos religiosos.',
      'Durante o seu governo, os senhores de engenho não foram cooptados pelos holandeses por conta de total aversão mútua.',
      'Buscando recuperar a capitania, Nassau proibiu empréstimos financeiros aos senhores de engenho pernambucanos.',
      'Visando ampliar o domínio político, Nassau substituiu a Câmara dos Escabinos pelo monopólio absolutista holandês.'
    ],
    correctIndex: 1,
    explanation: 'Maurício de Nassau promoveu uma modernização sem precedentes no Recife (construção de pontes, palácio de Vrijburg, primeiro observatório astronômico das Américas, jardim zoológico) e adotou uma política de tolerância religiosa entre católicos, calvinistas e judeus da Sinagoga Kahal Zur Israel.',
    fundamentacaoLegal: 'História de Pernambuco: Governo de João Maurício de Nassau-Siegen (1637-1644).',
    hint: 'Nassau: Cidade Maurícia, pontes, observatório e tolerância religiosa.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-his-14',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'A Guerra dos Mascates (1710-1711)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A rivalidade entre Olinda e Recife resultou na Guerra dos Mascates (1710-1711). Sobre essa temática, marque a alternativa correta:',
    options: [
      'Ansiosos em conquistar a independência, os mascates iniciaram conflitos para fundar uma república.',
      'A aristocracia rural de Olinda havia conquistado poder político histórico e não desejava ver sua hegemonia ameaçada pela ascensão dos comerciantes reinóis ("mascates") do Recife.',
      'A Guerra dos Mascates é considerada um movimento separatista que visava romper laços com a Coroa portuguesa.',
      'Os senhores de engenho, fortalecidos com capitais em abundância, compraram a praça comercial do Recife.',
      'Os comerciantes de grosso trato do Recife foram permanentemente derrotados e expulsos de Pernambuco.'
    ],
    correctIndex: 1,
    explanation: 'A Guerra dos Mascates colocou em confronto os aristocratas rurais de Olinda (senhores de engenho endividados) contra os comerciantes reinóis do Recife ("mascates"), que obtiveram a autonomia da vila do Recife com a criação de seu próprio pelourinho, ameaçando a supremacia política olindense.',
    fundamentacaoLegal: 'História de Pernambuco: Revolta Nativista da Guerra dos Mascates (1710-1711).',
    hint: 'Senhores de engenho de Olinda (endividados) vs Comerciantes do Recife (Mascates).',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-his-15',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Insurreições Liberais em Pernambuco (Século XIX)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'As insurreições liberais do século XIX em Pernambuco (1817, 1824, 1848) buscavam autonomia e transformações políticas. Diversos foram os motivos que estimularam essas revoluções, EXCETO:',
    options: [
      'O aumento dos impostos derivados da presença da corte portuguesa no Rio de Janeiro a partir de 1808.',
      'O controle hegemônico exercido pelos comerciantes e funcionários portugueses na alta administração pública.',
      'A estabilidade socioeconômica plena gerada pelo enriquecimento homogêneo de todas as classes rurais.',
      'O fortalecimento das ideologias iluministas, republicanas e das revoluções atlânticas (Francesa e Americana).',
      'O forte sentimento antilusitano contra a centralização de poder imposta pelo governo central.'
    ],
    correctIndex: 2,
    explanation: 'Não havia estabilidade socioeconômica nem enriquecimento homogêneo. Pelo contrário: Pernambuco enfrentava severa seca em 1816, queda das cotações do açúcar e algodão no mercado internacional e profunda desigualdade social, o que alimentou o estopim da Revolução Pernambucana de 1817.',
    fundamentacaoLegal: 'Movimentos Emancipacionistas: Revolução de 1817 e Confederação do Equador de 1824.',
    hint: 'O século XIX em Pernambuco foi marcado por crises econômicas severas e secas, não por estabilidade homogênea.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-his-16',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Resistência Negra e Quilombos em Pernambuco',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A experiência dos escravizados em Pernambuco envolveu múltiplas formas de resistência, com destaque para os quilombos. Sobre o tema, marque a alternativa correta:',
    options: [
      'Os quilombos eram espaços de fuga que não mantinham nenhuma relação de troca ou contato com povoados coloniais vizinhos.',
      'Os quilombos eram formados exclusivamente por africanos recém-chegados, sem presença de negros nascidos no Brasil.',
      'Desde o século XVI, os quilombos começaram a ser formados e organizados em múltiplos mocambos diante do aumento de fugitivos.',
      'O Quilombo dos Palmares situava-se no litoral e foi combatido apenas pelos holandeses.',
      'O Quilombo do Catucá existiu exclusivamente durante o governo de Maurício de Nassau.'
    ],
    correctIndex: 2,
    explanation: 'Desde fins do século XVI, fugitivos da escravidão começaram a constituir mocambos no interior da então Capitania de Pernambuco, que se consolidaram na federação de mocambos do Quilombo dos Palmares na Serra da Barriga (hoje Alagoas). O Quilombo do Catucá, nas matas ao norte do Recife, foi marcante nas primeiras décadas do século XIX (e não na época de Nassau).',
    fundamentacaoLegal: 'História Social da Escravidão em Pernambuco: Quilombos de Palmares e do Catucá.',
    hint: 'Palmares era formado por uma rede de mocambos interligados desde o final do século XVI.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-his-17',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'A Guerra dos Cabanos (1832-1835)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A Guerra dos Cabanos (1832-1835), conflito ocorrido entre as matas de Pernambuco e Alagoas durante o Período Regencial, caracterizou-se por:',
    options: [
      'Ter sido inspirada nos ideais da Revolução Francesa e visar proclamar uma república comunista.',
      'Um levante liberal de juristas que lutava pela separação definitiva de Pernambuco do Império.',
      'Diante da instabilidade da Regência, grupos restauradores (Coluna Trono e Altar) mobilizaram índios e camponeses almejando o retorno de D. Pedro I ao trono brasileiro.',
      'Ter sido conduzida por senhores de engenho ricos contrários a qualquer presença de índios ou negros.',
      'Ser encerrada de forma pacífica com a anistia imediata e posse de líderes rebeldes na presidência provincial.'
    ],
    correctIndex: 2,
    explanation: 'A Guerra dos Cabanos (ou Cabanada em PE/AL) foi uma revolta popular e guerrilheira de caráter restaurador/conservador ("Trono e Altar"), na qual caboclos, camponeses e negros lutavam pelo retorno de D. Pedro I (que havia abdicado em 1831) e em defesa da religião católica contra as reformas da Regência.',
    fundamentacaoLegal: 'Período Regencial em Pernambuco: Cabanada (1832-1835) e o movimento restaurador.',
    hint: 'Cabanada Pernambucana: Restauradora ("Pelo Trono e pelo Altar" - volta de D. Pedro I).',
    difficulty: 'hard'
  },
  {
    id: 'pmpe-his-18',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'O Estado Novo e a Interventoria de Agamenon Magalhães (1937-1945)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Sobre o governo do Estado Novo de Getúlio Vargas e a interventoria de Agamenon Magalhães em Pernambuco, marque a alternativa INCORRETA:',
    options: [
      'Agamenon Magalhães implementou a estrutura autoritária varguista no estado, com severa repressão aos opositores políticos e comunistas.',
      'A Constituição outorgada de 1937 (a "Polaca") permitiu ao regime perseguir, censurar e prender desafetos sob estado de emergência.',
      'A censura atuou ostensivamente nos jornais, emissoras de rádio e manifestações artísticas em Pernambuco.',
      'A participação do Brasil na 2ª Guerra Mundial contra o Eixo comprovou que o Estado Novo repudiava por completo os métodos autoritários e a centralização estatista.',
      'A Liga Social Contra o Mocambo foi um projeto marcante de Agamenon para erradicar habitações precárias e construir vilas operárias no Recife.'
    ],
    correctIndex: 3,
    explanation: 'A alternativa D está incorreta porque o Estado Novo era um regime ditatorial e corporativista com fortes inspirações nas cartas e métodos autoritários europeus da década de 1930. O alinhamento do Brasil com os Aliados na 2ª Guerra foi fruto de negociações econômicas (financiamento de Volta Redonda) e pressões norte-americanas, e não de um suposto repúdio ideológico prévio ao autoritarismo.',
    fundamentacaoLegal: 'História Contemporânea de Pernambuco: Interventoria de Agamenon Magalhães (1937-1945).',
    hint: 'O Estado Novo era uma ditadura fechada que usava métodos autoritários; sua entrada na guerra gerou a contradição que derrubou Vargas.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-his-19',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'A Ditadura Militar em Pernambuco (1964-1985)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Sobre as características e os acontecimentos que marcaram a Ditadura Civil-Militar (1964-1985) em Pernambuco, é correto afirmar:',
    options: [
      'O combate ao comunismo seguiu sem novidades contextuais em relação a períodos anteriores, sem criação de órgãos de espionagem.',
      'A repressão em Pernambuco foi branda em razão do apoio total unânime de todas as elites e camponeses ao golpe.',
      'As Ligas Camponesas apoiaram o governo militar e se fortaleceram durante o regime.',
      'Dom Hélder Câmara aliou-se prontamente às forças militares e apoiou as intervenções policiais nos sindicatos.',
      'Por meio de órgãos como o DOPS (Departamento de Ordem Política e Social), o regime exerceu rigorosa vigilância, censura e perseguição contra movimentos sindicais, estudantes e opositores em Pernambuco.'
    ],
    correctIndex: 4,
    explanation: 'Em Pernambuco, Miguel Arraes foi deposto logo em 1º de abril de 1964. O regime utilizou o DOPS, o SNI e o IV Exército para monitorar e reprimir opositores, líderes estudantis, sindicais e as Ligas Camponesas de Francisco Julião. Dom Hélder Câmara, Arcebispo de Olinda e Recife, tornou-se um dos maiores símbolos mundiais de resistência e denúncia dos abusos do regime militar.',
    fundamentacaoLegal: 'História Republicana de Pernambuco: Golpe de 1964, DOPS e a atuação de Dom Hélder Câmara.',
    hint: 'O DOPS foi o principal órgão policial estadual de vigilância, censura e repressão política.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-his-20',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Patrimônio Cultural e Manifestações Populares de Pernambuco',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'As manifestações culturais pernambucanas expressam a identidade e a miscigenação histórica do estado. Sobre esses elementos, identifique a alternativa correta:',
    options: [
      'O carnaval pernambucano é marcado apenas por elementos indígenas e africanos, sem influência europeia.',
      'O maracatu apresenta duas vertentes principais: o maracatu de baque solto (rural, característico da Zona da Mata com a figura do caboclo de lança) e o maracatu de baque virado (maracatu nação, das coroações e das comunidades urbanas).',
      'As festas juninas no interior pernambucano são celebrações puramente laicas, desvinculadas de santos católicos.',
      'O frevo nasceu nos salões imperiais no século XVII para entretenimento exclusivo da nobreza.',
      'O maracatu rural surgiu nos manguezais do Recife no início do século XXI junto com o movimento Manguebeat.'
    ],
    correctIndex: 1,
    explanation: 'O Maracatu desdobra-se no Maracatu Nação (baque virado), com raízes no cortejo real e coroações dos reis do congo nas cidades litorâneas, e no Maracatu Rural (baque solto), típico da Zona da Mata canavieira, tendo como figura central os guerreiros caboclos de lança.',
    fundamentacaoLegal: 'Patrimônio Cultural Imaterial do Brasil (IPHAN): Maracatu Nação e Maracatu de Baque Solto.',
    hint: 'Baque Virado = Nação (urbano/Recife); Baque Solto = Rural (Zona da Mata / caboclo de lança).',
    difficulty: 'easy'
  },

  // =========================================================================
  // BLOCO II: RACIOCÍNIO LÓGICO MATEMÁTICO (QUESTÕES 21 A 30)
  // =========================================================================
  {
    id: 'pmpe-rlm-21',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Tabela-Verdade da Condicional',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Para que seja verdadeira a afirmação condicional "Se Rose é contadora, então ela estudou para fazer concurso e hoje trabalha no setor público", é SUFICIENTE que Rose:',
    options: [
      'não seja contadora.',
      'seja contadora.',
      'tenha estudado para fazer o concurso.',
      'não tenha estudado para fazer o concurso.',
      'trabalhe no setor público.'
    ],
    correctIndex: 0,
    explanation: 'Na tabela-verdade da condicional (P → Q), sempre que o antecedente P for FALSO (F → qualquer coisa), a condicional é obrigatoriamente VERDADEIRA! Portanto, basta que "Rose não seja contadora" (P = F) para que a proposição condicional seja inquestionavelmente verdadeira.',
    fundamentacaoLegal: 'Lógica Proposicional: Tabela-verdade da Condicional. (F → V = V) e (F → F = V).',
    hint: 'Se a primeira parte for FALSA, a condicional toda é garantidamente VERDADE.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-rlm-22',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Operações Lógicas e Valoração de Proposições Compostas',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Sabendo que os valores lógicos das proposições simples p e q são, respectivamente, a VERDADE (V) e a FALSIDADE (F), assinale o item que apresenta a proposição composta cujo valor lógico é a VERDADE:',
    options: [
      '~p ∨ q → q',
      'p ∨ q → q',
      'p → q',
      'p ↔ q',
      'q ∧ (p ∨ q)'
    ],
    correctIndex: 0,
    explanation: 'Temos p = V e q = F.\nVamos avaliar as alternativas:\nA) ~p ∨ q → q: ~p = F; q = F; (~p ∨ q) = (F ∨ F) = F. Então temos F → F, que na condicional é VERDADE (V)!\nB) p ∨ q → q: (V ∨ F) → F = V → F = Falsa.\nC) p → q: V → F = Falsa.\nD) p ↔ q: V ↔ F = Falsa.\nE) q ∧ (p ∨ q): F ∧ (V ∨ F) = Falsa.\nLogo, a única verdadeira é a alternativa A.',
    fundamentacaoLegal: 'Cálculo Proposicional: Avaliação de fórmulas bem-formadas com valorações booleanas.',
    hint: 'Na condicional, Falso implica Falso resulta em VERDADE!',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-rlm-23',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Condição Suficiente e Condição Necessária',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: '"Um indivíduo ser contador é condição suficiente para ele ter condições de trabalhar no ramo de Auditoria." Assim sendo, conclui-se que:',
    options: [
      'todos que têm condições de trabalhar no ramo de Auditoria são contadores.',
      'é possível que alguns contadores não tenham condições de trabalhar no ramo de Auditoria.',
      'um indivíduo que não tem condições de trabalhar no ramo de Auditoria nunca é contador.',
      'a maioria dos indivíduos que têm condições de trabalhar no ramo de Auditoria são contadores.',
      'os indivíduos que têm condições de trabalhar no ramo de Auditoria sempre são contadores.'
    ],
    correctIndex: 2,
    explanation: 'Se P ("ser contador") é suficiente para Q ("ter condições em auditoria"), temos a condicional: P → Q (Se é contador, então tem condições em auditoria). Pela contrapositiva (~Q → ~P), quem NÃO tem condições de trabalhar em auditoria NÃO pode ser contador.',
    fundamentacaoLegal: 'Lógica Proposicional: Relação entre Condição Suficiente (antecedente) e Necessária (consequente).',
    hint: 'Contrapositiva: Não ter condições em auditoria implica NÃO ser contador.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-rlm-24',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Raciocínio Dedutivo - Transitividade de Condições',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Considere as premissas:\n"Sem A, não se tem B."\n"Sem B, não se tem C."\nAssim, conclui-se que:',
    options: [
      'A é suficiente para B e para C;',
      'B é necessário para A e para C;',
      'C é suficiente para A e para B;',
      'A e B são suficientes para C;',
      'B é necessário para A e suficiente para C.'
    ],
    correctIndex: 2,
    explanation: '1) "Sem A não se tem B" significa: ~A → ~B. Pela contrapositiva: B → A (B é suficiente para A; A é necessário para B).\n2) "Sem B não se tem C" significa: ~B → ~C. Pela contrapositiva: C → B (C é suficiente para B; B é necessário para C).\nPor transitividade: C → B → A. Logo, ter C garante ter B e garante ter A! Ou seja: C é condição suficiente para A e para B.',
    fundamentacaoLegal: 'Lógica Dedutiva: Silogismo Hipotético e transitividade de condicionais.',
    hint: 'C garante B, e B garante A. Logo, ter C é suficiente para ter ambos!',
    difficulty: 'hard'
  },
  {
    id: 'pmpe-rlm-25',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Formalização de Proposições na Linguagem Simbólica',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Um provérbio chinês diz que: "Se o seu problema não tem solução, então não é preciso se preocupar com ele, pois nada que você fizer o resolverá." Considere P: "Seu problema tem solução", Q: "Nada que você fizer resolverá seu problema", e R: "Não é preciso se preocupar com seu problema". A proposição corretamente representada na linguagem simbólica é:',
    options: [
      '(~P) → (R → Q).',
      '((Q → (~P)) → R.',
      '((~P) → Q) → R.',
      '(~P) → (Q → R).',
      '((~P) → R) → Q.'
    ],
    correctIndex: 3,
    explanation: '"Se o seu problema não tem solução" = (~P).\nA oração explicativa "pois nada que você fizer o resolverá" atua como a causa/condição interna para "não se preocupar": se nada que fizer o resolverá (Q), então não se preocupe (R), ou seja: (Q → R).\nConectando tudo pela condicional principal: (~P) → (Q → R).',
    fundamentacaoLegal: 'Lógica Proposicional: Formalização de conectivos condicionais e causas explicativas.',
    hint: 'Se ~P, então a consequência é que Q leva a R: (~P) → (Q → R).',
    difficulty: 'hard'
  },
  {
    id: 'pmpe-rlm-26',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Problemas de Verdades e Mentiras',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Aldo, Daniel e Eduardo são três amigos. Dois deles têm 66 anos e sempre mentem. O outro tem 48 anos e sempre diz a verdade. Se Aldo disse "A idade de Daniel não é 66 anos", é correto afirmar que:',
    options: [
      'Eduardo e Daniel dizem a verdade.',
      'Aldo e Eduardo mentem.',
      'Aldo diz a verdade.',
      'Aldo tem 48 anos.',
      'Eduardo tem 48 anos.'
    ],
    correctIndex: 4,
    explanation: 'Analisando os casos:\nHipótese 1: Aldo diz a verdade (tem 48 anos). Então a frase dele é verdadeira: "Daniel não tem 66 anos" -> Daniel teria que ter 48 anos. Mas só UM tem 48 anos! Contradição.\nHipótese 2: Aldo mente (tem 66 anos). Então a frase dele é falsa, o que significa que Daniel TEM 66 anos (e mente). Como Aldo (66) e Daniel (66) mentem, sobra para Eduardo ter 48 anos e falar a verdade!\nConclusão: Eduardo tem 48 anos.',
    fundamentacaoLegal: 'Lógica Dedutiva: Método da Redução ao Absurdo em proposições com mentirosos.',
    hint: 'Se Aldo falasse a verdade haveria dois de 48 anos. Logo Aldo mente, Daniel mente e Eduardo tem 48 anos!',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-rlm-27',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Princípio Fundamental da Contagem (PFC)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Uma equipe será montada com um coordenador e um agente operacional. Para coordenar os trabalhos, pode-se escolher qualquer um dos 8 analistas reguladores. Para agente operacional, tanto se pode escolher um dos 5 técnicos administrativos quanto um dos 6 inspetores reguladores. A quantidade de maneiras que se pode montar esta equipe é igual a:',
    options: [
      '240',
      '19',
      '46',
      '53',
      '88'
    ],
    correctIndex: 4,
    explanation: '1) Escolha do coordenador: 8 possibilidades (8 analistas).\n2) Escolha do agente operacional: pode ser técnico (5) OU inspetor (6) = 5 + 6 = 11 possibilidades.\nPelo Princípio Fundamental da Contagem (PFC): 8 × 11 = 88 maneiras distintas de formar a equipe.',
    fundamentacaoLegal: 'Análise Combinatória: Princípio Multiplicativo e Princípio Aditivo.',
    hint: 'Multiplique as opções de coordenador pelas opções totais de agente: 8 × (5 + 6) = 88.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-rlm-28',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Arranjo Simples',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Em uma sala de aula com 18 alunos, serão escolhidos um líder, um vice-líder e um representante de assuntos esportivos (cargos distintos). Considerando que 2 alunos não participarão da eleição, de quantas maneiras diferentes essa escolha pode ser feita?',
    options: [
      '3.360',
      '4.360',
      '4.896',
      '43.680',
      '1.028.160'
    ],
    correctIndex: 0,
    explanation: 'Total de alunos disponíveis: 18 - 2 = 16 alunos.\nComo os cargos são distintos (líder, vice-líder, representante esportivo), a ordem da escolha importa (trata-se de Arranjo):\n- Para líder: 16 possibilidades.\n- Para vice-líder: 15 possibilidades.\n- Para representante: 14 possibilidades.\nTotal = 16 × 15 × 14 = 3.360 maneiras.',
    fundamentacaoLegal: 'Análise Combinatória: Arranjo A(16, 3) = 16! / (16 - 3)! = 16 × 15 × 14 = 3360.',
    hint: '16 alunos aptos para 3 cargos ordenados: 16 × 15 × 14 = 3.360.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-rlm-29',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Cálculo de Probabilidade Simples',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Em uma empresa trabalham 50 funcionários, dos quais 20 são mulheres. Sabendo que 20 funcionários são loiros, dos quais 12 são homens, determine a probabilidade de, ao se escolher um funcionário ao acaso, ele ser um homem moreno (não loiro):',
    options: [
      '36%',
      '24%',
      '48%',
      '30%',
      '18%'
    ],
    correctIndex: 0,
    explanation: '1) Total de funcionários = 50.\n2) Mulheres = 20 → Homens = 50 - 20 = 30 homens.\n3) Dos 30 homens, 12 são loiros.\n4) Logo, homens morenos = 30 - 12 = 18 homens morenos.\n5) Probabilidade = 18 / 50 = 36 / 100 = 36%.',
    fundamentacaoLegal: 'Teoria das Probabilidades: P(E) = Casos Favoráveis / Casos Possíveis.',
    hint: '30 homens no total menos 12 loiros = 18 morenos. 18 / 50 = 36%.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-rlm-30',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Probabilidade Condicional',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Dois indivíduos X e Y são suspeitos de cometer um crime. A chance de apenas o indivíduo X ter cometido o crime é 1/2. A chance de ambos terem cometido o crime é de 1/4. Y confessa o crime. A chance de X ser criminoso, dado que Y confessou (é culpado), é:',
    options: [
      '0',
      '1/8',
      '1/4',
      '1/2',
      '3/4'
    ],
    correctIndex: 3,
    explanation: 'Probabilidade condicional: P(X|Y) = P(X ∩ Y) / P(Y).\nO espaço de probabilidade total do crime é composto por:\n- Apenas X: 1/2\n- Ambos X e Y: 1/4\n- Apenas Y: 1 - (1/2 + 1/4) = 1/4.\nLogo, a chance total de Y cometer o crime é P(Y) = P(Ambos) + P(Apenas Y) = 1/4 + 1/4 = 1/2.\nPortanto: P(X|Y) = (1/4) / (1/2) = (1/4) × (2/1) = 2/4 = 1/2.',
    fundamentacaoLegal: 'Teoria das Probabilidades: Teorema de Bayes e Probabilidade Condicional P(A|B) = P(A ∩ B) / P(B).',
    hint: 'P(X|Y) = P(ambos) / P(Y) = (1/4) / (1/2) = 1/2.',
    difficulty: 'hard'
  },

  // =========================================================================
  // BLOCO II: NOÇÕES DE INFORMÁTICA (QUESTÕES 31 A 40)
  // =========================================================================
  {
    id: 'pmpe-inf-31',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Segurança na Web - HTTP vs HTTPS',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Sobre endereços de internet que iniciam com "http" e "https", é CORRETO afirmar que:',
    options: [
      'O protocolo HTTP é mais seguro contra vírus. Já o HTTPS é vulnerável e trafega dados abertos.',
      'O protocolo HTTPS é mais seguro, pois ele criptografa os dados trafegados por meio de SSL/TLS.',
      'Tanto o protocolo HTTP como o HTTPS são idênticos em segurança, indicando apenas preferências de navegação.',
      'Nenhum dos protocolos é seguro, visto que ambos trafegam dados em texto claro.',
      'O protocolo HTTPS só pode ser utilizado por empresas com autorização direta governamental.'
    ],
    correctIndex: 1,
    explanation: 'O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia robusta (utilizando os protocolos SSL/TLS) sobre o tráfego HTTP, garantindo confidencialidade, autenticidade e integridade dos dados trafegados entre o navegador e o servidor web.',
    fundamentacaoLegal: 'Segurança da Informação e Criptografia: Protocolo HTTPS (RFC 2818).',
    hint: 'HTTPS possui a letra S de "Secure", criptografando as informações transmitidas.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-inf-32',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Navegadores de Internet - Atalhos do Google Chrome',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Utilizando o navegador Google Chrome no Windows 10 em português, qual atalho de teclado pode ser utilizado para adicionar a página atual aos favoritos?',
    options: [
      'Ctrl + D',
      'Ctrl + F',
      'Ctrl + J',
      'Ctrl + H',
      'Ctrl + T'
    ],
    correctIndex: 0,
    explanation: 'Ctrl + D é o atalho padrão para adicionar aos favoritos no Google Chrome e outros navegadores. Ctrl + F é para localizar na página, Ctrl + J abre downloads, Ctrl + H abre histórico e Ctrl + T abre uma nova aba.',
    fundamentacaoLegal: 'Atalhos Padrão de Navegação Web no Google Chrome (Ctrl+D = Bookmark/Favoritos).',
    hint: 'D de "Definir favorito" (Bookmark). Ctrl + D adiciona a página aos favoritos.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-inf-33',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Sistema Operacional Windows 10 - Atalhos de Teclado',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Para acessar o aplicativo Configurações do Windows 10 por meio de um atalho de teclado no teclado padrão, qual combinação de teclas deve ser utilizada?',
    options: [
      'Win + L',
      'Win + S',
      'Win + R',
      'Win + I',
      'Win + E'
    ],
    correctIndex: 3,
    explanation: 'A tecla com logotipo do Windows + I abre o aplicativo Configurações (Settings). Win + L bloqueia a máquina, Win + S abre pesquisa, Win + R abre o comando Executar, e Win + E abre o Explorador de Arquivos.',
    fundamentacaoLegal: 'Documentação Oficial Microsoft Windows 10: Atalhos de Sistema (Windows Key + I = Configurações).',
    hint: 'Windows + I abre as Informações/Configurações do sistema.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-inf-34',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Princípios da Segurança da Informação - Irretratabilidade (Não-Repúdio)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Quanto aos princípios fundamentais da segurança da informação, qual das seguintes alternativas define a Irretratabilidade (Não-Repúdio)?',
    options: [
      'Garantia de que os dados estejam disponíveis e de forma ininterrupta para usuários autorizados.',
      'Garantia de sigilo das informações e prevenção do vazamento de dados.',
      'Garantia da identificação do usuário ou servidor com quem se estabelece comunicação.',
      'Garantia de que a informação acessada está íntegra e não sofreu alteração por terceiros.',
      'Garantia de que uma ação cometida sobre os dados não pode ser negada pelo seu autor, permitindo identificar com precisão a origem do evento.'
    ],
    correctIndex: 4,
    explanation: 'Irretratabilidade (ou Não-Repúdio) é a propriedade que impede que o autor de uma transação ou assinatura digital negue a autoria do fato por ele praticado. As opções A, B, C e D definem, respectivamente: Disponibilidade, Confidencialidade, Autenticidade e Integridade.',
    fundamentacaoLegal: 'Norma ISO/IEC 27002: Pilares da Segurança da Informação (CIDAI: Confidencialidade, Integridade, Disponibilidade, Autenticidade, Irretratabilidade).',
    hint: 'Irretratabilidade = Impossibilidade de o autor negar o que fez.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-inf-35',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Malwares e Ameaças Virtuais - Worms',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A rede corporativa apresentou lentidão. Constatou-se que um tipo de software malicioso se propagou de forma autônoma pela rede explorando vulnerabilidades dos sistemas operacionais, consumindo banda e recursos de rede sem causar outro dano direto aos arquivos. A classificação mais adequada para essa ameaça é:',
    options: [
      'Vírus.',
      'Cavalo de Troia (Trojan).',
      'Worm (Verme).',
      'Spyware.',
      'Ransomware.'
    ],
    correctIndex: 2,
    explanation: 'O Worm (verme da rede) é um malware autônomo e autorreplicante que se propaga automaticamente através de redes de computadores explorando falhas/vulnerabilidades, gerando congestionamento de tráfego e lentidão, diferentemente do vírus que necessita de um arquivo hospedeiro para ser executado.',
    fundamentacaoLegal: 'Cartilha de Segurança para a Internet (CERT.br): Definição de Worm vs Vírus.',
    hint: 'Worm propaga-se sozinho pela rede e consome recursos, sem precisar de hospedeiro.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-inf-36',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Engenharia Social e Golpes Virtuais - Phishing',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Uma ameaça comum na internet consiste em mensagens fraudulentas enviadas por e-mail ou mensagens instantâneas simulando instituições financeiras para enganar vítimas e obter senhas, números de cartão e credenciais bancárias. Essa ameaça é chamada de:',
    options: [
      'Trojan.',
      'Phishing.',
      'Backdoor.',
      'Vírus de Boot.',
      'Pharming.'
    ],
    correctIndex: 1,
    explanation: 'Phishing (pescaria de dados) é o ataque de engenharia social em que criminosos enviam e-mails falsificados com links para páginas clonadas com o objetivo de "pescar" dados confidenciais dos usuários.',
    fundamentacaoLegal: 'Guia do CERT.br de Ameaças Cibernéticas: Phishing e Engenharia Social.',
    hint: 'Phishing = "pescar" senhas e dados confidenciais através de e-mails fraudulentos.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-inf-37',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Planilhas Eletrônicas - Funções SOMA e MAIOR',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Considerando o LibreOffice Calc ou MS Excel com a tabela:\nA1=1, B1=2, C1=3\nA2=4, B2=5, C2=6\nA3=7, B3=8, C3=9\nQual o resultado retornado pela fórmula: =SOMA(A1:B2) + MAIOR(B1:C2; 3)?',
    options: [
      '15',
      '9',
      '7',
      '5',
      '3'
    ],
    correctIndex: 0,
    explanation: '1) Intervalo A1:B2 contém as células A1 (1), B1 (2), A2 (4), B2 (5). SOMA(A1:B2) = 1 + 2 + 4 + 5 = 12.\n2) Intervalo B1:C2 contém B1 (2), C1 (3), B2 (5), C2 (6). Ordenando em ordem decrescente: 6, 5, 3, 2. A função MAIOR(B1:C2; 3) busca o 3º maior valor, que é 3.\n3) Resultado final: 12 + 3 = 15.',
    fundamentacaoLegal: 'Sintaxe das Funções de Planilha: SOMA() e MAIOR(matriz; k).',
    hint: 'SOMA(A1:B2) dá 12. O 3º maior entre 2, 3, 5, 6 é 3. 12 + 3 = 15.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-inf-38',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Planilhas Eletrônicas - Função SOMASE',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Em uma planilha de controle financeiro no MS Excel, ao inserir a fórmula =SOMASE(C2:C8; ">100"; C2:C8), onde as comissões registradas são: 100, 101, 200, 100, 110, 99 e 101, qual será o resultado retornado?',
    options: [
      '712',
      '811',
      '95',
      '607',
      '512'
    ],
    correctIndex: 4,
    explanation: 'A fórmula SOMASE com critério ">100" somará apenas os valores estritamente maiores que 100:\nValores: 101 + 200 + 110 + 101 = 512. (Os valores iguais a 100 e 99 são desconsiderados por não serem maiores que 100). Resultado = 512.',
    fundamentacaoLegal: 'Funções Matemáticas no Excel: =SOMASE(intervalo; critério; [intervalo_soma]).',
    hint: 'Critério ">100" exclui o próprio 100. Some apenas: 101 + 200 + 110 + 101 = 512.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-inf-39',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Referências Absolutas e Relativas ($) em Planilhas',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'No Excel, quando a fórmula =B$2*$C3 é copiada (Ctrl+C) da sua célula original e colada (Ctrl+V) em uma célula localizada duas colunas à direita e quatro linhas abaixo, o conteúdo exibido na célula de destino é:',
    options: [
      '=B$2*B$3',
      '=$D2*$B3',
      '=$B2*C$7',
      '=$B6*$D7',
      '=D$2*$C7'
    ],
    correctIndex: 4,
    explanation: 'Deslocamento: +2 colunas e +4 linhas.\n1) Termo "B$2": A coluna B é relativa, desloca +2 colunas e vira D. A linha 2 é absoluta ($2) e permanece fixa em $2. Fica: D$2.\n2) Termo "$C3": A coluna C é absoluta ($C) e permanece fixa em $C. A linha 3 é relativa, desloca +4 linhas e vira 7 (3 + 4 = 7). Fica: $C7.\nResultado da fórmula final: =D$2*$C7.',
    fundamentacaoLegal: 'Operadores de Referência em Planilhas: O símbolo cifrão ($) fixa coluna ou linha durante a cópia.',
    hint: 'O que tem cifrão antes ($2 e $C) não muda; o que não tem varia com o deslocamento.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-inf-40',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Pacote Office - Ferramenta Pincel de Formatação',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A ferramenta Pincel de Formatação, presente no Word e no Excel, tem como funcionalidade principal:',
    options: [
      'copiar o texto de um documento para outro.',
      'criar uma caixa de texto com fundo personalizado.',
      'copiar a formatação de um texto ou célula para outro que está com formatação diferente.',
      'criar uma forma geométrica abstrata para preenchimento de cor.',
      'inserir figuras artísticas do WordArt no cabeçalho.'
    ],
    correctIndex: 2,
    explanation: 'O Pincel de Formatação copia todos os atributos visuais (fonte, tamanho, cor, negrito, alinhamento, bordas) de uma seleção para aplicá-los rapidamente em outro trecho sem alterar o conteúdo textual.',
    fundamentacaoLegal: 'Ferramentas de Produtividade Office: Pincel de Formatação (Format Painter).',
    hint: 'Pincel copia apenas o visual/estilo (formatação), não as palavras.',
    difficulty: 'easy'
  },

  // =========================================================================
  // BLOCO III: LEGISLAÇÃO EXTRAVAGANTE & ESTATUTO PMPE (QUESTÕES 41 A 50)
  // =========================================================================
  {
    id: 'pmpe-leg-41',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Drogas (Lei 11.343/2006) - Induzimento ou Auxílio ao Uso',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Aquele que induzir, instigar ou auxiliar alguém ao uso indevido de droga (art. 33, § 2º da Lei 11.343/2006) estará sujeito à pena de:',
    options: [
      'advertência sobre os efeitos das drogas.',
      'detenção e pagamento de multa.',
      'prestação de serviços à comunidade.',
      'reclusão e pagamento de multa.',
      'tratamento médico compulsório em clínica fechada.'
    ],
    correctIndex: 1,
    explanation: 'Conforme o Art. 33, § 2º da Lei 11.343/2006: "Induzir, instigar ou auxiliar alguém ao uso indevido de droga: Pena - detenção, de 1 (um) a 3 (três) anos, e multa de 100 a 300 dias-multa".',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Art. 33, § 2º (Pena: detenção de 1 a 3 anos e multa).',
    hint: 'Induzir ou instigar ao uso é apenado com DETENÇÃO e multa.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-42',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Crimes Ambientais (Lei 9.605/1998) - Penas para Pessoa Jurídica',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Conforme a Lei nº 9.605/1998, as penas restritivas de direito aplicáveis às pessoas jurídicas incluem:\nI. Perda de bens e valores.\nII. Interdição temporária de estabelecimento.\nIII. Limitações de fins de semana.\nIV. Proibição de contratar com o Poder Público.\nEstá correto o que se afirma apenas em:',
    options: [
      'IV.',
      'I e II.',
      'I e IV.',
      'II e III.',
      'II e IV.'
    ],
    correctIndex: 4,
    explanation: 'O Art. 22 da Lei 9.605/1998 lista as penas restritivas de direitos para pessoa jurídica: I - suspensão parcial ou total de atividades; II - interdição temporária de estabelecimento, obra ou atividade; III - proibição de contratar com o Poder Público, bem como dele obter subsídios, pelo prazo de até 10 anos. "Limitação de fim de semana" e "perda de bens" são penas voltadas a pessoas físicas.',
    fundamentacaoLegal: 'Lei nº 9.605/1998, Art. 22, incisos II e III.',
    hint: 'Pessoa jurídica não cumpre limitação de fim de semana nem perda de bens como restritiva de direitos.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-43',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Abuso de Autoridade (Lei 13.869/2019) - Artigo 9º',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'O crime de decretar medida privativa de liberdade fora das hipóteses legais, previsto no art. 9º da Lei de Abuso de Autoridade (Lei 13.869/2019):',
    options: [
      'é processável por ação penal pública condicionada à representação do ofendido.',
      'é aplicável à autoridade judicial que deixar de relaxar prisão manifestamente ilegal, dentro de prazo razoável.',
      'não prevê a aplicação das disposições da Lei nº 9.099/95.',
      'é apenado com reclusão de 1 a 4 anos.',
      'prevê como efeito automático da condenação a perda do cargo público por 15 anos.'
    ],
    correctIndex: 1,
    explanation: 'O parágrafo único do art. 9º pune nas mesmas penas (detenção de 1 a 4 anos e multa) a autoridade judicial que, dentro de prazo razoável, deixar de: I - relaxar a prisão manifestamente ilegal; II - substituir a prisão preventiva por medida cautelar diversa ou conceder liberdade provisória quando cabível.',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Art. 9º, Parágrafo único, inciso I.',
    hint: 'Deixar de relaxar prisão manifestamente ilegal dentro de prazo razoável é crime de abuso pelo juiz.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-44',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei Maria da Penha - Medidas Protetivas de Urgência pelo Juiz',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Tendo como base a Lei Maria da Penha, относительно às Medidas Protetivas de Urgência, assinale V ou F para o que o juiz poderá determinar:\n( ) Que o agressor se afaste do lar onde convive com a mulher vítima de violência doméstica.\n( ) A prestação de alimentos de forma definitiva.\n( ) O comparecimento do agressor a programas de recuperação e reeducação.\nA ordem correta é:',
    options: [
      'V – V – V.',
      'V – F – F.',
      'V – F – V.',
      'F – V – F.',
      'F – V – V.'
    ],
    correctIndex: 2,
    explanation: '1) Verdadeiro: Art. 22, II (afastamento do lar).\n2) Falso: Art. 22, V prevê a fixação de alimentos PROVISIONAIS ou transitórios (alimentos definitivos são decididos na vara de família em ação de alimentos própria).\n3) Verdadeiro: Art. 22, VI prevê o comparecimento obrigatório do agressor a programas de recuperação e reeducação.\nSequência correta: V – F – V.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 22, incisos II, V e VI.',
    hint: 'Medida protetiva fixa alimentos PROVISIONAIS, nunca definitivos!',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-45',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Preconceito de Raça e Cor (Lei 7.716/1989) - Perda do Cargo',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'A Lei nº 7.716/1989 define os crimes resultantes de preconceito de raça ou de cor. O efeito da condenação consistente na perda do cargo ou função pública para o servidor:',
    options: [
      'não é automático, tampouco necessita de condenação motivada.',
      'é automático, bastando a condenação por dolo na sentença.',
      'é automático, ainda que não motivadamente declarado na sentença.',
      'não é automático, devendo ser motivadamente declarado na sentença.',
      'é automático apenas para servidores das carreiras de segurança pública.'
    ],
    correctIndex: 3,
    explanation: 'O Art. 18 da Lei 7.716/1989 estabelece: "Os efeitos de que tratam os arts. 16 e 17 desta Lei NÃO SÃO AUTOMÁTICOS, devendo ser motivadamente declarados na sentença".',
    fundamentacaoLegal: 'Lei nº 7.716/1989, Art. 18 c/c Art. 92, parágrafo único do Código Penal.',
    hint: 'Na Lei de Racismo, a perda do cargo NÃO é automática: o juiz deve motivar na sentença.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-46',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Estatuto da Criança e do Adolescente (ECA) - Súmula 500 do STJ',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Dispõe o art. 244-B do ECA sobre o crime de "corromper ou facilitar a corrupção de menor de 18 anos, praticando com ele infração penal ou induzindo-o a praticá-la". Assinale a alternativa com o entendimento sumulado do STJ:',
    options: [
      'A corrupção de menores é crime habitual, exigindo reiteração criminosa.',
      'Não há crime se o menor já possuir histórico de atos infracionais anteriores.',
      'A configuração do crime independe da prova da efetiva corrupção do menor, por se tratar de delito formal.',
      'Não se configura o crime se a infração penal praticada pelo menor não chegar à consumação.',
      'A mera indução não é punível caso o menor desista voluntariamente.'
    ],
    correctIndex: 2,
    explanation: 'Súmula 500 do STJ: "A configuração do crime do art. 244-B do ECA independe da prova da efetiva corrupção do menor, por se tratar de crime formal". Não importa se o jovem já era infrator ou se foi corrompido naquele instante.',
    fundamentacaoLegal: 'Súmula 500 do Superior Tribunal de Justiça (STJ).',
    hint: 'Súmula 500 do STJ: Crime formal, dispensa comprovação de que o menor foi de fato corrompido.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-leg-47',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Teoria Geral dos Direitos Humanos - Direitos vs Garantias',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Assinale a alternativa correta a respeito da teoria e disciplina dos direitos e garantias fundamentais na Constituição Federal de 1988:',
    options: [
      'Os direitos e garantias fundamentais não podem sofrer qualquer relativização pelo Estado mesmo em estado de defesa ou de sítio.',
      'Os direitos e garantias fundamentais são apenas os previstos taxativamente no artigo 5º da Carta Magna.',
      'Tratados internacionais de direitos humanos somente integram o ordenamento se aprovados como emenda constitucional.',
      'Os direitos fundamentais podem ser totalmente abolidos por emenda constitucional se houver aprovação de dois terços do parlamento.',
      'Enquanto os direitos fundamentais são disposições declaratórias que reconhecem bens jurídicos inerentes à dignidade, as garantias são instrumentos assecuratórios destinados a proteger e efetivar o exercício desses direitos.'
    ],
    correctIndex: 4,
    explanation: 'Conforme a clássica lição de Rui Barbosa e da doutrina constitucional, Direitos são declaratórios (enunciam as prerrogativas e liberdades), ao passo que as Garantias são assecuratórias (são os instrumentos de proteção, como os remédios constitucionais do habeas corpus, mandado de segurança etc.). Direitos fundamentais são cláusula pétrea (art. 60, § 4º, IV) e o rol é não exaustivo (art. 5º, § 2º).',
    fundamentacaoLegal: 'Teoria Geral dos Direitos Fundamentais: Distinção dogmática entre Direitos e Garantias.',
    hint: 'Direito declara a prerrogativa; Garantia protege o direito com instrumentos jurídicos.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-48',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Estatuto dos Militares da PMPE - Licença Especial',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Sobre as Licenças previstas no Estatuto dos Policiais Militares do Estado de Pernambuco, marque a alternativa INCORRETA:',
    options: [
      'Licença é a autorização para afastamento total do serviço, em caráter temporário, concedida ao policial militar.',
      'A licença especial é a autorização para afastamento total do serviço, relativa a cada decênio (10 anos) de efetivo serviço prestado.',
      'A Licença Especial tem a duração de 6 (seis) meses, a ser gozada de uma só vez, não podendo, em qualquer hipótese, ser parcelada.',
      'O período de licença especial não interrompe a contagem do tempo de efetivo serviço.',
      'A licença para tratar de interesse particular é a autorização concedida ao policial com mais de 10 anos de efetivo serviço.'
    ],
    correctIndex: 2,
    explanation: 'O Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/1974) prevê que a Licença Especial de 6 meses PODE SIM ser parcelada em períodos de 2 ou 3 meses, a pedido do militar e a juízo da Administração. Logo, afirmar que "não pode em qualquer hipótese ser parcelada" é falso.',
    fundamentacaoLegal: 'Lei Estadual nº 6.783/1974 (Estatuto da PMPE), Seção das Licenças.',
    hint: 'A Licença Especial da PMPE pode ser parcelada a requerimento do militar.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-leg-49',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Estatuto dos Militares da PMPE - Comando e Subordinação',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Acerca do COMANDO E DA SUBORDINAÇÃO no Estatuto da Polícia Militar de Pernambuco, assinale a alternativa INCORRETA:',
    options: [
      'Os subtenentes e sargentos auxiliam e complementam as atividades dos oficiais na instrução e na administração.',
      'O oficial é preparado, ao longo da carreira, para o exercício do comando, da chefia e da direção das Organizações Policiais-Militares.',
      'Os Subtenentes e os Sargentos não poderão ser empregados na execução de atividades de policiamento ostensivo peculiares à Polícia Militar.',
      'Os cabos e soldados são, essencialmente, os elementos de execução.',
      'Às praças especiais cabe a rigorosa observância dos regulamentos, exigindo-se inteira dedicação ao estudo e ao aprendizado técnico-profissional.'
    ],
    correctIndex: 2,
    explanation: 'Conforme o Estatuto dos Policiais Militares de PE, os subtenentes e sargentos PODEM SIM ser empregados no policiamento ostensivo, coordenando frações de tropa ou executando patrulhamento tático e ostensivo próprio da corporação.',
    fundamentacaoLegal: 'Lei Estadual nº 6.783/1974 (Estatuto da PMPE), Do Comando e da Subordinação.',
    hint: 'Subtenentes e Sargentos atuam ativamente na supervisão e execução do policiamento ostensivo.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-leg-50',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Estatuto dos Militares da PMPE - Prazos de Afastamento Total',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Os policiais militares têm direito a períodos de afastamento total do serviço por motivos disciplinares ou pessoais, com EXCEÇÃO de um prazo incorreto:',
    options: [
      'núpcias: 8 (oito) dias;',
      'luto: 8 (oito) dias;',
      'instalação: até 10 (dez) dias;',
      'trânsito: até 30 (trinta) dias;',
      'Licença eleitoral: 20 (vinte) dias.'
    ],
    correctIndex: 4,
    explanation: 'Os prazos clássicos do estatuto militar para afastamentos temporários são: Núpcias (8 dias), Luto (8 dias), Instalação (até 10 dias) e Trânsito (até 30 dias). Não existe na legislação prazo padrão de "Licença eleitoral de 20 dias".',
    fundamentacaoLegal: 'Lei Estadual nº 6.783/1974 (Estatuto da PMPE), Afastamentos Temporários do Serviço.',
    hint: 'Núpcias = 8 dias; Luto = 8 dias; Instalação = até 10 dias; Trânsito = até 30 dias.',
    difficulty: 'medium'
  },

  // =========================================================================
  // BLOCO III: DIREITO CONSTITUCIONAL (QUESTÕES 51 A 60)
  // =========================================================================
  {
    id: 'pmpe-con-51',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Princípios Fundamentais (Art. 3º da CF/88)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'É um dos OBJETIVOS FUNDAMENTAIS da República Federativa do Brasil expressamente previsto no art. 3º da Constituição Federal de 1988:',
    options: [
      'garantir o desenvolvimento nacional.',
      'a soberania.',
      'a dignidade da pessoa humana.',
      'a cidadania.',
      'o pluralismo político.'
    ],
    correctIndex: 0,
    explanation: 'Conforme o Art. 3º, II da CF/88: "garantir o desenvolvimento nacional" é um OBJETIVO fundamental. As opções B, C, D e E (Soberania, Cidadania, Dignidade da pessoa humana e Pluralismo político) são FUNDAMENTOS da República inscritos no art. 1º (SO-CI-DI-VA-PLU).',
    fundamentacaoLegal: 'CF/88, Art. 3º, inciso II c/c Art. 1º.',
    hint: 'Objetivo fundamental tem verbo no infinitivo: Garantir o desenvolvimento nacional.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-con-52',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Direitos e Garantias Fundamentais (Art. 5º)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Em relação aos direitos e às garantias fundamentais previstos na CF/88, assinale a opção correta:',
    options: [
      'Em virtude da laicidade do Estado, a CF veda a assistência religiosa em entidades de internação coletiva militares.',
      'De acordo com a CF, o sigilo das comunicações telefônicas não pode ser quebrado em nenhuma hipótese.',
      'É possível, nos termos da CF, que alguém seja privado de direitos por motivo de crença religiosa se, além de se eximir de obrigação legal a todos imposta, recusar-se a cumprir prestação alternativa.',
      'O direito de resposta assegurado não abarca indenização por dano à imagem.',
      'O acesso à informação é assegurado, sendo expressamente vedado qualquer sigilo de fonte.'
    ],
    correctIndex: 2,
    explanation: 'O Art. 5º, VIII da CF/88 autoriza a perda/privação de direitos pela escusa de consciência caso o indivíduo se recuse cumulativamente a cumprir a obrigação geral E a prestação alternativa fixada em lei. A assistência religiosa é assegurada em entidades civis e militares (VII); a interceptação telefônica pode ser quebrada por ordem judicial penal (XII); e o sigilo de fonte é resguardado (XIV).',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso VIII.',
    hint: 'Privação de direitos por motivo religioso exige dupla recusa: obrigação legal + prestação alternativa.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-con-53',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Nacionalidade (CF/88 Art. 12 e EC 131/2023)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Maria, brasileira, teve a filha Ingrid com Fritz, alemão a serviço da embaixada da Alemanha no Brasil. Ingrid foi levada para a Itália logo após o nascimento. Anos depois, Maria naturalizou-se italiana para fins de trabalho. Ao completar 21 anos, Ingrid decidiu morar no Brasil. À luz da Constituição e das regras de nacionalidade:',
    options: [
      'Maria não praticou ato que importa em perda automática da nacionalidade brasileira, e Ingrid é brasileira nata por ter mãe brasileira registrada ou optando.',
      'Maria perdeu sumariamente a nacionalidade e Ingrid não pode ser brasileira.',
      'Maria terá cancelada sua naturalização por decreto do presidente sem direito de defesa.',
      'Ingrid é considerada apátrida até os 35 anos.',
      'A aquisição de outra nacionalidade acarreta sempre e em qualquer hipótese a perda da brasileira.'
    ],
    correctIndex: 0,
    explanation: 'Com a Emenda Constitucional nº 131/2023, o brasileiro que adquire outra nacionalidade NÃO perde mais a nacionalidade brasileira, a não ser que formalize pedido expresso de renúncia perante autoridade competente. Além disso, filhos de brasileiros nascidos no exterior podem optar pela nacionalidade brasileira nata (art. 12, I, "c").',
    fundamentacaoLegal: 'CF/88, Art. 12, § 4º (com redação dada pela Emenda Constitucional nº 131/2023).',
    hint: 'EC 131/2023: Adquirir outra cidadania não gera mais perda automática da brasileira!',
    difficulty: 'hard'
  },
  {
    id: 'pmpe-con-54',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Direitos Políticos - Condições de Elegibilidade (Art. 14)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'No que diz respeito a direitos políticos e condições de elegibilidade (art. 14 da CF/88), assinale a opção correta:',
    options: [
      'A capacidade eleitoral passiva consiste na possibilidade de os cidadãos votarem em eleições.',
      'O analfabeto não pode ser eleitor.',
      'Os partidos políticos são considerados entes públicos de administração direta.',
      'A Constituição não permite a cassação nem a perda de direitos políticos sob nenhuma hipótese.',
      'Alistamento eleitoral, domicílio eleitoral na circunscrição onde pretende concorrer e filiação partidária são algumas das condições de elegibilidade.'
    ],
    correctIndex: 4,
    explanation: 'O Art. 14, § 3º da CF/88 lista as condições de elegibilidade: I - nacionalidade brasileira; II - pleno exercício dos direitos políticos; III - alistamento eleitoral; IV - domicílio eleitoral na circunscrição; V - filiação partidária; VI - idade mínima. O analfabeto tem voto facultativo (art. 14, § 1º, II); capacidade eleitoral passiva é o direito de SER VOTADO.',
    fundamentacaoLegal: 'CF/88, Art. 14, § 3º.',
    hint: 'Condições de elegibilidade: alistamento, filiação e domicílio na circunscrição.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-con-55',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Organização do Estado - Distrito Federal (Art. 32)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'À luz do que dispõe a Constituição Federal a respeito da organização do Estado, assinale a opção correta:',
    options: [
      'É vedada ao Distrito Federal a sua divisão em municípios.',
      'Compete à União e aos municípios, concorrentemente, legislar sobre custas forenses.',
      'Ao Distrito Federal são atribuídas apenas competências de âmbito municipal.',
      'A União poderá intervir livremente nos municípios situados dentro dos Estados-membros.',
      'Cabe aos municípios explorar o serviço local de gás canalizado.'
    ],
    correctIndex: 0,
    explanation: 'O Art. 32 da CF/88 determina expressamente: "O Distrito Federal, vedada sua divisão em municípios, reger-se-á por lei orgânica". O DF acumula competências estaduais e municipais; e os serviços de gás canalizado cabem aos Estados (art. 25, § 2º).',
    fundamentacaoLegal: 'CF/88, Art. 32, caput.',
    hint: 'Art. 32 da CF: É proibido dividir o Distrito Federal em municípios!',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-con-56',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Poder Executivo - Responsabilidade do Presidente da República',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Com base nas disposições da CF/88 referentes ao Presidente da República, assinale a opção correta:',
    options: [
      'O Presidente da República poderá ser preso em flagrante por contravenção penal.',
      'Compete ao Presidente, em ato indelegável, conceder indulto e comutar penas.',
      'O Presidente da República cometerá crime de responsabilidade se praticar ato que atente contra a segurança interna do País.',
      'Em caso de vacância do cargo nos últimos dois anos do mandato, será feita eleição direta em noventa dias.',
      'O Presidente da República é inviolável penalmente por suas opiniões, palavras e votos.'
    ],
    correctIndex: 2,
    explanation: 'Conforme o Art. 85, IV da CF/88, são crimes de responsabilidade os atos do Presidente que atentem contra "a segurança interna do País". A concessão de indulto pode ser delegada a ministros ou PGR (art. 84, parágrafo único); a imunidade material por votos e opiniões é de parlamentares (art. 53), e a vacância nos últimos dois anos enseja eleição INDIRETA (art. 81, § 1º).',
    fundamentacaoLegal: 'CF/88, Art. 85, inciso IV.',
    hint: 'Art. 85, IV: Atos contra a segurança interna configuram crime de responsabilidade (impeachment).',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-con-57',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Poder Legislativo - Competência Exclusiva do Congresso Nacional',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Conforme o texto constitucional, a sustação de atos normativos editados pelo Poder Executivo que exorbitem do poder regulamentar é competência:',
    options: [
      'exclusiva do Supremo Tribunal Federal.',
      'exclusiva do Senado Federal.',
      'privativa da Presidência da Câmara dos Deputados.',
      'exclusiva do Congresso Nacional.',
      'privativa do Ministério Público Federal.'
    ],
    correctIndex: 3,
    explanation: 'O Art. 49, inciso V da CF/88 estabelece que é da competência EXCLUSIVA DO CONGRESSO NACIONAL: "sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa" (mediante Decreto Legislativo).',
    fundamentacaoLegal: 'CF/88, Art. 49, inciso V.',
    hint: 'Art. 49, V: Congresso Nacional susta decretos presidenciais que exorbitem o regulamento.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-con-58',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Segurança Pública (CF/88 Art. 144) - Competências Policiais',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Conforme a CF/88 (art. 144), apurar infrações penais contra a ordem política, as funções de polícia judiciária do Estado, a segurança dos estabelecimentos penais estaduais e as funções de polícia de fronteiras incumbem, respectivamente, à:',
    options: [
      'polícia federal, à polícia militar, à polícia civil e à polícia militar.',
      'polícia federal, à polícia civil, à polícia penal e à polícia militar.',
      'polícia militar, à polícia civil, à polícia penal e à polícia federal.',
      'polícia civil, à polícia federal, à polícia militar e à polícia federal.',
      'polícia federal, à polícia civil, à polícia penal e à polícia federal.'
    ],
    correctIndex: 4,
    explanation: 'Conforme o Art. 144 da CF/88:\n1) Infrações contra a ordem política: Polícia Federal (§ 1º, I);\n2) Polícia judiciária dos Estados: Polícia Civil (§ 4º);\n3) Segurança dos estabelecimentos penais estaduais: Polícia Penal (§ 5º-A);\n4) Polícia de fronteiras: Polícia Federal (§ 1º, III).\nOrdem exata: polícia federal, polícia civil, polícia penal e polícia federal.',
    fundamentacaoLegal: 'CF/88, Art. 144, § 1º, I e III; § 4º; e § 5º-A.',
    hint: 'Fronteiras e ordem política = PF; Polícia Judiciária estadual = PC; Presídios = Polícia Penal.',
    difficulty: 'easy'
  },
  {
    id: 'pmpe-con-59',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Poder Judiciário - Conselho Nacional de Justiça (CNJ)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Acerca do que dispõe a Constituição Federal sobre o Poder Judiciário, assinale a opção correta:',
    options: [
      'O Conselho Nacional de Justiça não integra o Poder Judiciário.',
      'As súmulas vinculantes editadas pelo STF não alcançam a administração direta dos Estados.',
      'O Conselho Nacional de Justiça (CNJ) compõe-se de 15 (quinze) membros com mandato de 2 (dois) anos, admitida 1 (uma) recondução.',
      'O Superior Tribunal de Justiça é composto por apenas onze ministros.',
      'Compete ao STJ processar e julgar os Ministros do STF em crimes comuns.'
    ],
    correctIndex: 2,
    explanation: 'O Art. 103-B da CF/88 determina: "O Conselho Nacional de Justiça compõe-se de 15 (quinze) membros com mandato de 2 (dois) anos, admitida 1 (uma) recondução". O STJ é composto por no mínimo 33 ministros (art. 104); o CNJ é órgão integrante do Poder Judiciário (art. 92, I-A).',
    fundamentacaoLegal: 'CF/88, Art. 103-B, caput.',
    hint: 'CNJ: 15 membros, mandato de 2 anos, permitida 1 recondução.',
    difficulty: 'medium'
  },
  {
    id: 'pmpe-con-60',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Administração Pública - Acumulação de Cargos (Art. 37, XVI)',
    banca: 'Instituto AOCP / NUCE',
    simuladoOrigem: 'Simulado Completo PMPE 2024 (NUCE)',
    question: 'Com base nas normas da CF/88 acerca dos servidores públicos e da Administração Pública, assinale a opção correta:',
    options: [
      'Eventuais acréscimos pecuniários percebidos por servidor público serão computados para concessão de acréscimos ulteriores (efeito cascata).',
      'Lei ordinária estadual estabelecerá normas gerais para as Forças Armadas.',
      'Aplica-se aos policiais militares o direito irrestrito de greve e sindicalização.',
      'Todo agente público deve ter estabilidade imediata sem estágio probatório.',
      'Em regra, é vedada a acumulação remunerada de cargos, empregos e funções públicas, ressalvadas as hipóteses constitucionais com compatibilidade de horários.'
    ],
    correctIndex: 4,
    explanation: 'Conforme o Art. 37, inciso XVI da CF/88: "é vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários: a) a de dois cargos de professor; b) a de um cargo de professor com outro técnico ou científico; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas". Ao militar é proibida greve e sindicalização (art. 142, § 3º, IV).',
    fundamentacaoLegal: 'CF/88, Art. 37, inciso XVI c/c Art. 142, § 3º, IV.',
    hint: 'Regra geral: é proibido acumular cargos públicos remunerados (com apenas 3 exceções constitucionais).',
    difficulty: 'easy'
  }
];
