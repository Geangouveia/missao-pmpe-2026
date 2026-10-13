import type { QuizQuestion } from '../../types/game';

export const SIMULADO_SEMANA_2: QuizQuestion[] = [
  // ==========================================
  // NOÇÕES DE INFORMÁTICA (BLOCO II)
  // ==========================================
  {
    id: 's2-inf-01',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Redes de Computadores - Intranet',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Determinada rede privada de computadores é caracterizada pelo uso da tecnologia WWW dentro de uma rede corporativa, sendo constituída de uma ou mais redes locais interligadas e podendo incluir computadores ou redes remotas, sem acesso externo, com o principal objetivo de compartilhar informações internas. Trata-se da:',
    options: [
      'PAN (Personal Area Network).',
      'Internet.',
      'extranet.',
      'intranet.',
      'VPN.'
    ],
    correctIndex: 3,
    explanation: 'A Intranet é uma rede privada e restrita aos colaboradores de uma organização, que utiliza os mesmos protocolos e tecnologias da Internet (como HTTP, TCP/IP e navegadores web) para circulação interna de informações corporativas.',
    fundamentacaoLegal: 'Conceito de Redes Corporativas: Intranet opera com tecnologia internet em ambiente estritamente corporativo interno.',
    hint: 'Privada, interna aos funcionários e sem acesso externo direto = INTRANET.',
    difficulty: 'easy'
  },
  {
    id: 's2-inf-02',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Topologias e Equipamentos de Rede',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Os microcomputadores (PCs) de uma escola estadual estão ligados entre si por um cabo coaxial contínuo que funciona como um barramento físico compartilhado. Sempre que um cabo se rompe em algum ponto, toda a rede para de funcionar. O técnico de informática foi chamado para ajudar a resolver esse problema, que pode facilmente ser solucionado com a substituição da topologia e a instalação de um:',
    options: [
      'UTP.',
      'STP.',
      'Hub.',
      'RJ-45.',
      'RJ-65.'
    ],
    correctIndex: 2,
    explanation: 'A topologia em barramento (cabo coaxial único) sofre do problema de ponto único de falha: se o cabo se rompe, toda a rede cai. A instalação de um Hub (ou Switch) permite migrar para uma topologia em Estrela, onde a quebra de um cabo isola apenas aquela máquina, sem paralisar o restante da rede.',
    fundamentacaoLegal: 'Topologias de Redes: Transição de barramento físico para topologia em estrela com concentrador central (Hub/Switch).',
    hint: 'Dispositivo concentrador que conecta vários computadores numa topologia estrela.',
    difficulty: 'medium'
  },
  {
    id: 's2-inf-03',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Protocolo IPv4 - Validação de Endereçamento',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Em uma rede TCP/IP, todos os hosts têm um endereço IP composto por 4 bytes, totalizando 32 bits. Assinale a alternativa que apresenta um endereço IP válido.',
    options: [
      '192.288.012.03',
      '192.105.003.11',
      '256.118.035.28',
      '256.003.020.014',
      '211.113.005.288'
    ],
    correctIndex: 1,
    explanation: 'No padrão IPv4 (4 bytes / 32 bits), cada um dos 4 octetos pode variar de 0 até 255. Valores como 288 ou 256 são inválidos. Portanto, "192.105.003.11" é o único endereço IP com todos os valores dentro do intervalo permitido (0 a 255).',
    fundamentacaoLegal: 'RFC 791 (IPv4 Specification): Cada octeto varia estritamente no intervalo decimal de 0 a 255.',
    hint: 'Nenhum número entre os pontos pode ser maior que 255.',
    difficulty: 'easy'
  },
  {
    id: 's2-inf-04',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Modelo OSI - Camadas e Equipamentos',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Um repetidor é um dispositivo em redes de computadores que pode ser utilizado para estender o alcance de uma rede LAN regenerando os sinais elétricos. Em qual camada do Modelo OSI o repetidor atua?',
    options: [
      'Aplicação.',
      'Transporte.',
      'Física.',
      'Sessão.',
      'Apresentação.'
    ],
    correctIndex: 2,
    explanation: 'O repetidor (repeater) atua na Camada 1 (Física) do modelo OSI. Ele apenas recebe o sinal elétrico/óptico degradado, amplifica/regenera e retransmite nos mesmos bits, sem analisar quadros (enlace) ou pacotes (rede).',
    fundamentacaoLegal: 'Modelo ISO/OSI: Camada 1 (Física) - Repetidores e Hubs.',
    hint: 'Regeneração de sinal bruto e bits ocorre na Camada 1 (Física).',
    difficulty: 'medium'
  },
  {
    id: 's2-inf-05',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Modelo OSI - Camada de Aplicação',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'No modelo de rede OSI, a camada responsável pelos protocolos utilizados diretamente pelos usuários para tarefas como navegação web e envio de e-mails é a camada de:',
    options: [
      'rede.',
      'apresentação.',
      'sessão.',
      'transporte.',
      'aplicação.'
    ],
    correctIndex: 4,
    explanation: 'A Camada de Aplicação (Camada 7 no Modelo OSI) é a que faz a interface direta com as aplicações do usuário (navegadores, clientes de e-mail, terminal SSH), provendo protocolos como HTTP, HTTPS, FTP, SMTP e DNS.',
    fundamentacaoLegal: 'Modelo de Referência OSI: Camada 7 (Aplicação).',
    hint: 'É a camada de nível mais alto, diretamente conectada aos programas dos usuários.',
    difficulty: 'easy'
  },

  // ==========================================
  // DIREITO CONSTITUCIONAL (BLOCO III)
  // ==========================================
  {
    id: 's2-con-06',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Princípios Fundamentais (CF/88 Art. 1º a 4º)',
    banca: 'AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: '(AOCP - 2022 - IPE Prev) Em relação aos princípios fundamentais da Constituição Federal de 1988, assinale a alternativa correta.',
    options: [
      'A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Social.',
      'São Poderes da União, dependentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.',
      'A igualdade entre os Estados e o repúdio ao terrorismo e ao racismo são princípios que regem a República Federativa do Brasil nas suas relações internacionais.',
      'Construir uma sociedade livre, justa e solidária é um dos fundamentos da República Federativa do Brasil.',
      'A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América, visando à formação de uma comunidade americana de nações.'
    ],
    correctIndex: 2,
    explanation: 'O art. 4º da CF/88 estabelece os princípios nas relações internacionais: igualdade entre os Estados (inciso V) e repúdio ao terrorismo e ao racismo (inciso VIII). Na A, o Brasil é Estado Democrático de Direito; na B, são INDEPENDENTES e harmônicos; na D, construir sociedade livre é OBJETIVO fundamental (art. 3º); na E, comunidade LATINO-AMERICANA de nações.',
    fundamentacaoLegal: 'CF/88, Art. 4º, incisos V e VIII.',
    hint: 'Relações internacionais da RFB: repúdio ao racismo e terrorismo, igualdade entre os Estados.',
    difficulty: 'medium'
  },
  {
    id: 's2-con-07',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Fundamentos vs Objetivos Fundamentais (Art. 1º vs Art. 3º)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: '(Instituto AOCP - 2022 - PC-GO) Acerca dos princípios fundamentais previstos na Constituição Federal de 1988, assinale a alternativa INCORRETA.',
    options: [
      'Nas relações internacionais, a República Federativa do Brasil rege-se, dentre outros, pelo princípio da solução pacífica de conflitos.',
      'Está entre os objetivos fundamentais da República Federativa do Brasil o pluralismo político.',
      'Um dos objetivos fundamentais da República Federativa do Brasil é a construção de uma sociedade livre, justa e solidária.',
      'A República Federativa do Brasil tem como princípio a independência nacional em relação às relações internacionais.',
      'A dignidade da pessoa humana é um dos fundamentos da República Federativa do Brasil.'
    ],
    correctIndex: 1,
    explanation: 'O "pluralismo político" é um FUNDAMENTO da República (art. 1º, V - mnemônico SO-CI-DI-VA-PLU), e NÃO um objetivo fundamental (art. 3º - mnemônico CON-GA-ER-PRO). Portanto, a assertiva B está incorreta.',
    fundamentacaoLegal: 'CF/88, Art. 1º, inciso V c/c Art. 3º.',
    hint: 'Fundamentos (SO-CI-DI-VA-PLU) vs Objetivos (verbos no infinitivo: Construir, Garantir, Erradicar, Promover).',
    difficulty: 'medium'
  },
  {
    id: 's2-con-08',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Objetivos Fundamentais da República (CF/88 Art. 3º)',
    banca: 'AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: '(AOCP - 2021 - ITEP RN) Conforme a Constituição Federal, constitui objetivo fundamental da República Federativa do Brasil:',
    options: [
      'garantir o desenvolvimento dos povos.',
      'erradicar a fome e a criminalização.',
      'a cooperação entre os povos para o progresso da humanidade.',
      'a solução pacífica dos conflitos.',
      'reduzir as desigualdades sociais e regionais.'
    ],
    correctIndex: 4,
    explanation: 'Conforme o Art. 3º, III da CF/88, constituem objetivos fundamentais: "erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais". As opções C e D são princípios das relações internacionais (art. 4º).',
    fundamentacaoLegal: 'CF/88, Art. 3º, inciso III.',
    hint: 'Objetivos fundamentais começam com verbo: Construir, Garantir, Erradicar e Reduzir, Promover.',
    difficulty: 'easy'
  },
  {
    id: 's2-con-09',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Título I da CF/88 - Princípios Fundamentais',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: '(Instituto AOCP - 2018 - ADAF) Sobre o Título I (dos princípios fundamentais) da Constituição Federal de 1988, assinale a alternativa correta.',
    options: [
      'Construir uma sociedade livre, justa e igualitária não é um objetivo fundamental do Brasil.',
      'O poder exercido pelos representantes eleitos não emana do povo.',
      'O princípio da independência nacional não é um dos princípios que regem as relações internacionais entre o Brasil e outros países.',
      'É um dos objetivos fundamentais do Brasil garantir o desenvolvimento nacional.',
      'Os valores sociais do trabalho, exceto o derivado da livre iniciativa, são um dos fundamentos do Brasil.'
    ],
    correctIndex: 3,
    explanation: 'Conforme o Art. 3º, II da CF/88: Constitui objetivo fundamental da República Federativa do Brasil garantir o desenvolvimento nacional.',
    fundamentacaoLegal: 'CF/88, Art. 3º, inciso II.',
    hint: 'Art. 3º, II: "garantir o desenvolvimento nacional".',
    difficulty: 'easy'
  },
  {
    id: 's2-con-10',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Objetivos Fundamentais da República (Art. 3º)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: '(Instituto AOCP - 2014 - EBSERH) Analise as assertivas e assinale a alternativa que aponta as corretas. De acordo com a Constituição Federal, constituem objetivos fundamentais da República Federativa do Brasil:\nI. construir uma sociedade livre, justa e solidária.\nII. garantir o desenvolvimento nacional.\nIII. erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.\nIV. promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.',
    options: [
      'Apenas I, II e III.',
      'Apenas I, III e IV.',
      'Apenas II e III.',
      'Apenas I e IV.',
      'I, II, III e IV.'
    ],
    correctIndex: 4,
    explanation: 'Todas as quatro assertivas correspondem fielmente aos 4 incisos do Art. 3º da CF/88 (I - sociedade livre, justa e solidária; II - desenvolvimento nacional; III - erradicar pobreza e reduzir desigualdades; IV - promover o bem de todos sem preconceitos).',
    fundamentacaoLegal: 'CF/88, Art. 3º, incisos I, II, III e IV.',
    hint: 'Todos os 4 itens do Artigo 3º estão contemplados integralmente.',
    difficulty: 'easy'
  },

  // ==========================================
  // LÍNGUA PORTUGUESA (BLOCO I)
  // ==========================================
  {
    id: 's2-por-11',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Conjunções Coordenativas - Valor Semântico do "MAS"',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'No trecho "Ele ajuda a compreender um país, mas não expressa importantes fatores [...]", o emprego da conjunção coordenativa destacada tem valor semântico:',
    options: [
      'alternativo.',
      'adversativo.',
      'aditivo.',
      'explicativo.',
      'conclusivo.'
    ],
    correctIndex: 1,
    explanation: 'A conjunção coordenativa "mas" introduz uma oração coordenada adversativa, exprimindo ideia de oposição, quebra de expectativa ou contraste com a informação anterior.',
    fundamentacaoLegal: 'Gramática Normativa: Conjunções Coordenativas Adversativas (mas, porém, contudo, todavia, entretanto, no entanto).',
    hint: '"Mas" exprime oposição / contraste.',
    difficulty: 'easy'
  },
  {
    id: 's2-por-12',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Orações Subordinadas Adverbiais Proporcionais',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Assinale a alternativa que classifica corretamente a primeira oração em "Quanto mais acurada for a mensuração da quantidade e qualidade da força de trabalho e do estoque de capital empregado, menor tende a ser a PTF."',
    options: [
      'Oração subordinada substantiva subjetiva.',
      'Oração subordinada adjetiva restritiva.',
      'Oração subordinada adverbial consecutiva.',
      'Oração subordinada adverbial proporcional.',
      'Oração subordinada substantiva objetiva direta reduzida de infinitivo.'
    ],
    correctIndex: 3,
    explanation: 'A estrutura correlativa "Quanto mais... menor..." expressa ideia de proporcionalidade simultânea entre os dois fatos, tratando-se tipicamente de uma oração subordinada adverbial proporcional.',
    fundamentacaoLegal: 'Sintaxe do Período Composto: Orações Subordinadas Adverbiais Proporcionais (à medida que, à proporção que, quanto mais... mais/menos).',
    hint: '"Quanto mais... menor..." indica relação de proporção.',
    difficulty: 'medium'
  },
  {
    id: 's2-por-13',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Sentidos da Conjunção "OU" - Relação de Consequência',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'A conjunção "ou" tipicamente sinaliza alternância. No entanto, ela também pode indicar uma relação de consequência (ameaça ou desdobramento). Assinale a alternativa em que o "ou" também indica uma possível consequência:',
    options: [
      'Abra a porta ou eu vou derrubá-la!',
      'As Malvinas para os argentinos, ou Falklands para os ingleses, são ilhas do Atlântico Sul.',
      'Não sei se fico em casa ou se saio hoje à noite.',
      'Ou ele fala ou come!',
      'Paulo, ou Dr. Paulo, recomendou exercícios físicos.'
    ],
    correctIndex: 0,
    explanation: 'Em "Abra a porta ou eu vou derrubá-la!", a segunda oração ("eu vou derrubá-la") representa a consequência iminente que ocorrerá caso a ordem ("Abra a porta") não seja cumprida. Nas demais alternativas, "ou" expressa alternância pura ou retificação/sinonímia.',
    fundamentacaoLegal: 'Semântica e Pragmática Textual: Valores discursivos e contextuais das conjunções coordenativas.',
    hint: '"Faça isso OU haverá tal consequência": ideia de condição/consequência.',
    difficulty: 'medium'
  },
  {
    id: 's2-por-14',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Tipologia e Classificação das Orações',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Assinale a alternativa correta.',
    options: [
      'Em "Segundo afirma a Fundação Oswaldo Cruz (Fiocruz), no Brasil, a cada dez casos de intoxicação por plantas, seis ocorrem em crianças com menos de 10 anos de idade [...]", há uma oração conformativa.',
      'Em "Nível 2a: estão as espécies que, por meio do contato de sua seiva com as mucosas, incluindo a boca, ocasionam dor e irritação.", há um sujeito composto.',
      'Em "pertencem ao nível 1 as plantas que causam apenas uma reação alérgica na pele, (vermelhidão, coceira, bolhas etc.).", há uma oração causal.',
      'Em "Sua ingestão pode afetar os rins, o coração, o fígado e o cérebro e requer atendimento médico imediato.", há uma oração conclusiva.',
      'Em "Para a prevenção e para a resposta aos acidentes também é importante conhecer quais são as reações causadas pelo contato com plantas venenosas.", há uma oração consecutiva.'
    ],
    correctIndex: 0,
    explanation: 'O conectivo "Segundo" introduz oração subordinada adverbial conformativa ("Segundo afirma a Fiocruz..." = Conforme afirma a Fiocruz).',
    fundamentacaoLegal: 'Sintaxe: Conjunções Adverbiais Conformativas (conforme, segundo, consoante, como).',
    hint: '"Segundo afirma fulano..." = oração adverbial conformativa.',
    difficulty: 'medium'
  },
  {
    id: 's2-por-15',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Locução Conjuntiva Proporcional - "À MEDIDA QUE"',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Em relação à expressão destacada em "[...] a riqueza de um país aumenta à medida que o Produto Interno Bruto (PIB) se expande [...]", assinale a alternativa correta.',
    options: [
      'Ela poderia ser substituída por "na medida que" sem que isso causasse prejuízo sintático ou semântico ao período.',
      'Ela sinaliza uma relação sintático-semântica de causalidade entre as orações.',
      'O termo "que" contido nela é uma conjunção integrante que une uma oração substantiva a uma oração principal.',
      'São sinônimos dela: "na medida em que" e "conforme".',
      'Ela sinaliza uma relação sintático-semântica de proporcionalidade entre as orações.'
    ],
    correctIndex: 4,
    explanation: '"À medida que" é a locução conjuntiva proporcional por excelência, indicando fatos que progridem em proporção simultânea. "Na medida em que" expressa causa, e "na medida que" é uma forma inexistente na norma culta.',
    fundamentacaoLegal: 'Gramática Normativa: "À medida que" (proporção); "Na medida em que" (causa). Não misturar as duas.',
    hint: 'À medida que = Proporção!',
    difficulty: 'easy'
  },

  // ==========================================
  // RACIOCÍNIO LÓGICO (BLOCO II)
  // ==========================================
  {
    id: 's2-rlm-16',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Lógica de Argumentação e Dedução Proposicional',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'André é inocente ou Beto é inocente. Se Beto é inocente, então Caio é culpado. Caio é inocente se e somente se Dênis é culpado. Ora, Dênis é culpado. Logo:',
    options: [
      'Caio e Beto são inocentes.',
      'André e Caio são inocentes.',
      'André e Beto são inocentes.',
      'Caio e Dênis são culpados.',
      'Beto e Dênis são inocentes.'
    ],
    correctIndex: 1,
    explanation: 'Passo a passo:\n1) "Dênis é culpado" é VERDADE.\n2) "Caio é inocente <-> Dênis é culpado": como Dênis é culpado é V, "Caio é inocente" é VERDADE.\nLogo, "Caio é culpado" é FALSO.\n3) "Se Beto é inocente, então Caio é culpado": como o consequente ("Caio é culpado") é F, o antecedente ("Beto é inocente") tem que ser FALSO para a condicional ser verdadeira. Logo, Beto NÃO é inocente (Beto é culpado).\n4) "André é inocente ou Beto é inocente": como "Beto é inocente" é F, para a disjunção ser verdadeira, "André é inocente" TEM que ser VERDADE.\nConclusão: André e Caio são inocentes.',
    fundamentacaoLegal: 'Lógica Proposicional: Tabela-verdade da Condicional, Bicondicional e Disjunção.',
    hint: 'Dênis culpado -> Caio inocente (logo Caio culpado é F) -> Beto culpado -> André inocente.',
    difficulty: 'hard'
  },
  {
    id: 's2-rlm-17',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência Lógica da Condicional - Contrapositiva',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Considere verdadeira a declaração: "Se alguém é brasileiro, então não desiste nunca". Com base na declaração, é correto concluir que:',
    options: [
      'se alguém desiste, então não é brasileiro.',
      'se alguém não desiste nunca, então é brasileiro.',
      'se alguém não desiste nunca, então não é brasileiro.',
      'se alguém não é brasileiro, então desiste.',
      'se alguém desiste, então é brasileiro.'
    ],
    correctIndex: 0,
    explanation: 'A equivalência lógica da condicional p -> q pela contrapositiva é ~q -> ~p (inverte e nega ambas as proposições). Negação de "não desiste nunca" = "desiste". Negação de "é brasileiro" = "não é brasileiro". Logo: "Se alguém desiste, então não é brasileiro".',
    fundamentacaoLegal: 'Equivalências Notáveis: (p → q) ≡ (~q → ~p) [Contrapositiva].',
    hint: 'Contrapositiva: inverta a ordem e negue as duas partes.',
    difficulty: 'easy'
  },
  {
    id: 's2-rlm-18',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Conectivos Lógicos - O Valor Lógico de "MAS"',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Considere a proposição "Paula estuda, mas não passa no concurso". Nessa proposição, o conectivo lógico representado pelo termo "mas" é uma:',
    options: [
      'condicional.',
      'bicondicional.',
      'disjunção inclusiva.',
      'conjunção.',
      'disjunção exclusiva.'
    ],
    correctIndex: 3,
    explanation: 'No raciocínio lógico formal, conjunções adversativas como "mas", "porém", "contudo" e "todavia" equivalem ao conectivo de CONJUNÇÃO (∧ / "e"), pois expressam que ambas as proposições ocorrem simultaneamente.',
    fundamentacaoLegal: 'Lógica Proposicional: A conjunção "mas" possui operador lógico equivalente a "E" (conjunção ∧).',
    hint: 'Em RLM, a palavra "mas" opera logicamente como uma conjunção "E".',
    difficulty: 'easy'
  },
  {
    id: 's2-rlm-19',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Diagramas Lógicos e Quantificadores (Todo, Algum, Nenhum)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Avalie as afirmativas a seguir:\nI – Se todo X é Y e todo Y é Z então todo X é Z.\nII – Se nem todo A é B então existe A que não é B.\nIII – Se todo A é B então todo B é A.\nEstá correto o que se afirma em:',
    options: [
      'I, apenas;',
      'I e II, apenas;',
      'I e III, apenas;',
      'II e III, apenas;',
      'I, II e III.'
    ],
    correctIndex: 1,
    explanation: 'I. Transitividade da inclusão de conjuntos: X ⊆ Y e Y ⊆ Z implica X ⊆ Z (Verdadeira).\nII. "Nem todo A é B" é a negação de "todo A é B", o que equivale logicamente a "pelo menos um A não é B" / "existe A que não é B" (Verdadeira).\nIII. Se A ⊆ B, não necessariamente B ⊆ A (ex: todo recifense é pernambucano, mas nem todo pernambucano é recifense) (Falsa).\nCorretas: I e II, apenas.',
    fundamentacaoLegal: 'Lógica dos Predicados: Silogismos Categóricos e Relações de Inclusão de Subconjuntos.',
    hint: 'Todo A é B não significa que todo B é A! (Ex: todo gato é animal, mas nem todo animal é gato).',
    difficulty: 'medium'
  },
  {
    id: 's2-rlm-20',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Leis de De Morgan - Negação de Conjunção',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Dizer que "não é verdade que Pedro é pobre e Alberto é alto" é logicamente equivalente a dizer que é verdade que:',
    options: [
      'Pedro não é pobre ou Alberto não é alto.',
      'Pedro não é pobre e Alberto não é alto.',
      'Pedro é pobre ou Alberto não é alto.',
      'se Pedro não é pobre, então Alberto é alto.',
      'Pedro é rico e Alberto é baixo.'
    ],
    correctIndex: 0,
    explanation: 'Aplicando a Primeira Lei de De Morgan para negar uma conjunção: ~(p ∧ q) ≡ ~p ∨ ~q.\nNega-se a primeira ("Pedro não é pobre"), troca-se o conectivo "e" por "ou", e nega-se a segunda ("Alberto não é alto").',
    fundamentacaoLegal: 'Leis de Augustus De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q.',
    hint: 'Negação do "E": nega tudo e troca o "E" pelo "OU".',
    difficulty: 'easy'
  },

  // ==========================================
  // LEGISLAÇÃO EXTRAVAGANTE - LEI DE DROGAS (BLOCO III)
  // ==========================================
  {
    id: 's2-leg-21',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Drogas (Lei 11.343/2006) - Plantio para Consumo Pessoal',
    banca: 'FUNDATEC',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Um Guarda Municipal constatou algumas plantas de maconha em área pública. O plantador alegou ser dependente e que o plantio se destinava exclusivamente ao consumo pessoal. Nessas condições (art. 28, § 2º da Lei 11.343/06), podem ser aplicadas as seguintes penas:\nI. Advertência devido ao uso de área pública sem autorização.\nII. Prestação de serviços à comunidade.\nIII. Medida educativa em programa ou curso educativo.\nQuais estão corretas?',
    options: [
      'Apenas I.',
      'Apenas I e II.',
      'Apenas I e III.',
      'Apenas II e III.',
      'I, II e III.'
    ],
    correctIndex: 3,
    explanation: 'O Art. 28 da Lei 11.343/2006 prevê apenas 3 penas para quem adquire, guarda, transporta ou cultiva drogas para consumo pessoal: I - advertência sobre os efeitos das drogas; II - prestação de serviços à comunidade; III - medida educativa em programa ou curso educativo. A advertência descrita no item I ("por uso de área pública") não é pena da Lei de Drogas. Logo, estão corretas II e III.',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Art. 28, incisos I, II e III.',
    hint: 'Penas do art. 28: Advertência sobre efeitos, Prestação de serviços e Medida educativa.',
    difficulty: 'medium'
  },
  {
    id: 's2-leg-22',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Drogas (Lei 11.343/2006) - Tipos Penais Especiais',
    banca: 'IBFC',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Acerca da Lei de Drogas (Lei 11.343/06), dê valores V ou F:\n( ) Associarem-se 4 ou mais pessoas para praticar tráfico será considerado crime de formação de quadrilha pelo Código Penal em combinação com a Lei de Drogas.\n( ) Médicos ou Enfermeiros poderão responder criminalmente por prescrever ou ministrar, culposamente, drogas sem necessidade ou em doses excessivas.\n( ) Caso um Bioquímico venha possuir ou guardar aparelhos destinados à fabricação de drogas sem autorização regulamentar, cometerá crime descrito na Lei de Drogas.\n( ) O informante que colabora com associação responderá por associação para o tráfico via art. 29 do CP, já que não existe tipo penal específico na Lei de Drogas.',
    options: [
      'F - V - F - V',
      'F - V - V - F',
      'V - F - F - F',
      'V - V - F - F',
      'F - F - V - V'
    ],
    correctIndex: 1,
    explanation: '1ª Falsa: Associação para o tráfico é crime AUTÔNOMO previsto no art. 35 da Lei de Drogas e exige apenas 2 ou mais pessoas.\n2ª Verdadeira: Art. 38 tipifica a conduta culposa do médico, dentista, farmacêutico ou enfermeiro.\n3ª Verdadeira: Art. 34 tipifica fabricar, guardar ou fornecer maquinário ou aparelhos para produção de drogas.\n4ª Falsa: EXISTE tipo penal específico no Art. 37 da Lei de Drogas ("Colaborar, como informante, com grupo, associação ou organização destinados ao tráfico"). Sequência: F - V - V - F.',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Arts. 34, 35, 37 e 38.',
    hint: 'Art. 37 da Lei de Drogas pune expressamente o informante ("fogueteiro"). Não precisa recorrer ao CP!',
    difficulty: 'hard'
  },
  {
    id: 's2-leg-23',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Drogas - Porte para Consumo Pessoal',
    banca: 'VUNESP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: '(VUNESP - PC-RR - Delegado) Para quem transporta, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar, a Lei nº 11.343/2006 (Lei Antidrogas) prevê a pena de:',
    options: [
      'advertência sobre os efeitos das drogas.',
      'prisão simples.',
      'detenção.',
      'reclusão.',
      'perda de bens e valores.'
    ],
    correctIndex: 0,
    explanation: 'O art. 28 da Lei 11.343/2006 despenalizou o porte para consumo pessoal quanto à prisão. Não há pena de prisão simples, detenção ou reclusão no art. 28, aplicando-se apenas: advertência sobre os efeitos das drogas (inciso I), prestação de serviços à comunidade (inciso II) ou medida educativa (inciso III).',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Art. 28, inciso I.',
    hint: 'Usuário (art. 28) NÃO vai preso: não há reclusão nem detenção.',
    difficulty: 'easy'
  },
  {
    id: 's2-leg-24',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Drogas - Crimes que NÃO admitem Reclusão',
    banca: 'COPESE - UFPI',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Acerca da Lei nº 11.343/2006 (Sisnad), qual dos crimes abaixo NÃO é punido com pena de reclusão?',
    options: [
      'Oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem.',
      'Importar, exportar, remeter, preparar, produzir, fabricar ou vender drogas sem autorização.',
      'Semear, cultivar ou fazer a colheita, sem autorização, de plantas que se constituam em matéria-prima para drogas.',
      'Utilizar local ou bem de qualquer natureza para o tráfico ilícito de drogas.',
      'Vender ou entregar matéria-prima ou insumo destinado à preparação de drogas a policial disfarçado.'
    ],
    correctIndex: 0,
    explanation: 'A conduta da alternativa A corresponde ao uso compartilhado (art. 33, § 3º da Lei de Drogas), que é punido com DETENÇÃO de 6 meses a 1 ano (e não com reclusão). Todas as demais condutas listadas (B, C, D e E) são modalidades de tráfico ou figuras equiparadas do art. 33, apenadas com RECLUSÃO de 5 a 15 anos.',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Art. 33, § 3º (Detenção de 6 meses a 1 ano).',
    hint: 'Uso compartilhado sem lucro (art. 33, § 3º) é punido com DETENÇÃO.',
    difficulty: 'hard'
  },
  {
    id: 's2-leg-25',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Drogas - Pena do Tráfico Ilícito de Drogas',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'O Art. 33 da Lei n.º 11.343/06 tipifica o tráfico de drogas (importar, exportar, vender, expor à venda, transportar, ter em depósito etc.). Assinale a alternativa que representa a respectiva pena privativa de liberdade e pecuniária prevista no caput do Art. 33:',
    options: [
      'Pena - reclusão de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa.',
      'Pena - reclusão de 10 a 30 anos e pagamento de 1.000 a 3.000 dias-multa.',
      'Pena - reclusão de 2 a 7 anos e pagamento de 250 a 750 dias-multa.',
      'Pena - reclusão de 1 a 20 anos e pagamento de 100 a 5.000 dias-multa.',
      'Pena - detenção de 3 a 10 anos e pagamento de 300 a 800 dias-multa.'
    ],
    correctIndex: 0,
    explanation: 'Conforme expressamente estipulado no caput do Art. 33 da Lei 11.343/2006: "Pena - reclusão de 5 (cinco) a 15 (quinze) anos e pagamento de 500 (quinhentos) a 1.500 (mil e quinhentos) dias-multa".',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Art. 33, caput.',
    hint: 'Pena do tráfico: 5 a 15 anos de reclusão + 500 a 1.500 dias-multa.',
    difficulty: 'easy'
  }
];
