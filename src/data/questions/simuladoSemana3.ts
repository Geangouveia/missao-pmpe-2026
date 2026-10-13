import type { QuizQuestion } from '../../types/game';

export const SIMULADO_SEMANA_3: QuizQuestion[] = [
  // ==========================================
  // NOÇÕES DE INFORMÁTICA (BLOCO II)
  // ==========================================
  {
    id: 's3-inf-01',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Modelos de Arquitetura de Redes (OSI e TCP/IP)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP) Em relação aos modelos de arquitetura (OSI/ISO e TCP/IP), as camadas 5, 6 e 7 do modelo OSI/ISO são agregadas em uma só camada no modelo TCP/IP. Qual é o nome dessa camada?',
    options: [
      'Transporte.',
      'Sessão.',
      'Aplicação.',
      'Enlace.',
      'Internet.'
    ],
    correctIndex: 2,
    explanation: 'No modelo de referência OSI/ISO há 7 camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação). A pilha TCP/IP agrupa as camadas 5 (Sessão), 6 (Apresentação) e 7 (Aplicação) em uma única camada consolidada: a Camada de Aplicação.',
    fundamentacaoLegal: 'Arquitetura TCP/IP vs Modelo OSI: Camada de Aplicação no TCP/IP absorve Sessão e Apresentação.',
    hint: 'As 3 camadas superiores do OSI viram apenas uma no TCP/IP: Aplicação.',
    difficulty: 'easy'
  },
  {
    id: 's3-inf-02',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Protocolos de Redes - Camada de Aplicação',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP) Determinada rede de computadores opera segundo um conjunto de protocolos em camadas, tendo cada uma delas funções específicas. Uma dessas camadas é usada para enviar e receber dados de outros programas pela Internet. Com base nessas informações, assinale a opção que indica dois dos protocolos que atuam na camada descrita.',
    options: [
      'FTP e SMTP',
      'TCP e UDP',
      'SMTP e UDP',
      'FTP e TCP',
      'IP e ARP'
    ],
    correctIndex: 0,
    explanation: 'A questão descreve a camada de aplicação, que permite aos programas transferirem dados diretamente. FTP (File Transfer Protocol) e SMTP (Simple Mail Transfer Protocol) operam na camada de aplicação. Já TCP e UDP pertencem à camada de transporte.',
    fundamentacaoLegal: 'Camada de Aplicação: FTP (porta 20/21) e SMTP (porta 587/25).',
    hint: 'FTP (arquivos) e SMTP (correio eletrônico) são protocolos da camada de aplicação.',
    difficulty: 'easy'
  },
  {
    id: 's3-inf-03',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Protocolo HTTP e Camada TCP/IP',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP) No modelo de arquitetura TCP/IP, a camada em que se dá o uso do protocolo HTTP é a camada de:',
    options: [
      'aplicação.',
      'transporte.',
      'rede.',
      'enlace.',
      'física.'
    ],
    correctIndex: 0,
    explanation: 'O protocolo HTTP (HyperText Transfer Protocol), usado para a transferência de páginas web navegadas no browser, atua estritamente na Camada de Aplicação da arquitetura TCP/IP.',
    fundamentacaoLegal: 'Pilha TCP/IP: Protocolo HTTP (RFC 2616) opera na Camada de Aplicação.',
    hint: 'HTTP, HTTPS, DNS, DHCP e FTP operam todos na camada de aplicação.',
    difficulty: 'easy'
  },
  {
    id: 's3-inf-04',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Protocolos de Correio Eletrônico - IMAP vs POP3 vs SMTP',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP) Na camada de aplicação do TCP funcionam protocolos que suportam serviços de e-mail; um deles provê o acesso às mensagens de e-mail de um servidor ao cliente, para que possam ser baixadas as mensagens no computador cliente e, ainda, manter uma cópia das mensagens no servidor. Trata-se do:',
    options: [
      'FTP.',
      'RTP.',
      'IMAP.',
      'UDP.',
      'SMTP.'
    ],
    correctIndex: 2,
    explanation: 'O protocolo IMAP (Internet Message Access Protocol) permite a sincronização bidirecional das mensagens, possibilitando ler os e-mails no cliente enquanto mantém as mensagens e pastas salvas e sincronizadas no servidor. O POP3 tipicamente baixa e remove do servidor, e o SMTP é usado para envio.',
    fundamentacaoLegal: 'Protocolos de E-mail: IMAP (porta 143/993) sincroniza mantendo cópia no servidor.',
    hint: 'IMAP = Acesso e sincronização mantendo cópias no servidor.',
    difficulty: 'medium'
  },
  {
    id: 's3-inf-05',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Conceitos de Redes - Extranet',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP) As empresas podem oferecer diversos serviços via web para seus clientes e fornecedores por meio de uma tecnologia de rede de computadores que permite o compartilhamento de dados, serviços e aplicações mediante autenticação segura. Assinale a opção que corresponde a essa tecnologia.',
    options: [
      'rede sem fio',
      'Internet',
      'intranet',
      'extranet',
      'FTP'
    ],
    correctIndex: 3,
    explanation: 'A Extranet é a extensão da intranet corporativa para parceiros externos autorizados, fornecedores e clientes, mediante controle de acesso rigoroso e criptografia.',
    fundamentacaoLegal: 'Redes Corporativas: Extranet = acesso externo concedido a parceiros, fornecedores e clientes.',
    hint: 'Acesso externo para clientes e fornecedores = EXTRANET.',
    difficulty: 'easy'
  },

  // ==========================================
  // DIREITO CONSTITUCIONAL (BLOCO III)
  // ==========================================
  {
    id: 's3-con-06',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Direitos e Deveres Individuais e Coletivos (CF/88 Art. 5º)',
    banca: 'AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP - 2022 - EMBASA) Com base no artigo 5º da Constituição Federal de 1988, é correto afirmar que:',
    options: [
      'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo por determinação judicial.',
      'ninguém será submetido à tortura nem a tratamento desumano ou degradante, salvo em caso de guerra declarada.',
      'sob nenhuma circunstância, haverá pena de morte.',
      'a prática do racismo constitui crime afiançável e prescritível, sujeito à pena de multa, nos termos da lei.',
      'é livre a manifestação do pensamento, sendo vedado o anonimato.'
    ],
    correctIndex: 4,
    explanation: 'Conforme o Art. 5º, IV da CF/88: "é livre a manifestação do pensamento, sendo vedado o anonimato". Na A, faltaram flagrante delito, desastre e socorro; na B, a vedação à tortura é absoluta; na C, admite-se pena de morte em caso de guerra declarada (art. 5º, XLVII, "a"); na D, o racismo é inafiançável e imprescritível (art. 5º, XLII).',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso IV.',
    hint: 'Art. 5º, IV: Manifestação livre do pensamento + Vedação expressa ao anonimato.',
    difficulty: 'easy'
  },
  {
    id: 's3-con-07',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Liberdade de Associação e Intervenção Judicial (CF/88 Art. 5º, XIX)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(Instituto AOCP - 2022 - PM GO) Renomada associação privada de âmbito municipal foi denunciada por envolvimento no tráfico internacional de menores. Considerando o caso e as disposições constitucionais acerca das associações, é correto afirmar que:',
    options: [
      'a entidade associativa não poderá ser compulsoriamente dissolvida, em razão do direito constitucional de liberdade de associação.',
      'a associação somente poderá ter suas atividades suspensas ao final de regular processo administrativo, em que lhe seja assegurada ampla defesa.',
      'as atividades da associação não poderão ser suspensas, eis que ela não detém caráter paramilitar.',
      'na esfera administrativa, para que a associação tenha suas atividades suspensas, faz-se imprescindível que o processo judicial já tenha transitado em julgado.',
      'as atividades da associação só poderão ser suspensas por decisão judicial, independentemente do trânsito em julgado da ação.'
    ],
    correctIndex: 4,
    explanation: 'Nos termos do Art. 5º, XIX da CF/88: "as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso, o trânsito em julgado". Ou seja, para SUSPENSÃO das atividades basta decisão judicial (inclusive liminar/cautelar), sem necessidade de trânsito em julgado!',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XIX.',
    hint: 'Dissolução compulsória = exige trânsito em julgado. Suspensão = basta decisão judicial.',
    difficulty: 'hard'
  },
  {
    id: 's3-con-08',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Escusa de Consciência (CF/88 Art. 5º, VIII)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(Instituto AOCP - 2022 - FUNDASE RN) Aos brasileiros e aos estrangeiros residentes no país é garantida a inviolabilidade à vida, liberdade, igualdade, segurança e propriedade. Sobre os direitos e garantias fundamentais, assinale a alternativa correta.',
    options: [
      'É plena a liberdade de associação para fins lícitos, sendo permitida inclusive a de caráter paramilitar.',
      'É assegurado a todos o acesso à informação, resguardado o sigilo da fonte, exceto quando for necessário ao exercício profissional.',
      'Ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa, fixada em lei.',
      'As entidades associativas, a qualquer tempo e em qualquer situação, possuem legitimidade para representar seus filiados judicial ou extrajudicialmente.',
      'É inviolável a liberdade de consciência e de crença religiosa, sendo assegurado o livre exercício dos cultos religiosos na forma cristã e garantida a proteção aos locais de culto.'
    ],
    correctIndex: 2,
    explanation: 'A alternativa C transcreve com perfeição a escusa de consciência prevista no Art. 5º, VIII da CF/88. A associação de caráter paramilitar é vedada (XVII); o sigilo de fonte é resguardado QUANDO necessário ao exercício profissional (XIV); entidades associativas precisam de autorização expressa (XXI); e a liberdade religiosa não se limita à fé cristã (VI).',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso VIII.',
    hint: 'Escusa de consciência (Art. 5º, VIII): perderá direitos apenas se recusar cumprir a obrigação legal E a prestação alternativa fixada em lei.',
    difficulty: 'medium'
  },
  {
    id: 's3-con-09',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Princípio da Legalidade (CF/88 Art. 5º, II)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(Instituto AOCP - 2019 - UFRB) O art. 5º da Constituição Federal traz em seu bojo aquilo que se denomina "Direitos e Garantias Fundamentais". Dentre esses direitos, é possível destacar:',
    options: [
      'a soberania do indivíduo sobre o coletivo.',
      'a não interferência do Estado na vida privada em qualquer circunstância.',
      'o direito a não ser obrigado a nada senão em virtude da lei.',
      'a obrigatoriedade de filiação a sindicatos.',
      'a censura prévia de publicações jornalísticas de conteúdo político.'
    ],
    correctIndex: 2,
    explanation: 'Trata-se do clássico Princípio da Legalidade expresso no Art. 5º, inciso II da CF/88: "ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei".',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso II.',
    hint: 'Princípio da Legalidade: fazer ou deixar de fazer algo apenas em virtude de LEI.',
    difficulty: 'easy'
  },
  {
    id: 's3-con-10',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Liberdade de Expressão da Atividade Intelectual (Art. 5º, IX)',
    banca: 'AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(AOCP - 2018 - SEAP PA) Dentre as alternativas a seguir, qual apresenta um direito fundamental expressamente previsto na Constituição Federal?',
    options: [
      'Liberdade de expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença.',
      'Liberdade de associação para fins lícitos, inclusive a de caráter paramilitar.',
      'É assegurado a todos o acesso à informação, porém sem sigilo da fonte.',
      'Direito a ser compelido a associar-se ou a permanecer associado.',
      'Direito de não haver pena de morte em nenhuma hipótese, mesmo em guerra.'
    ],
    correctIndex: 0,
    explanation: 'A alternativa A reproduz integralmente o Art. 5º, IX da Constituição Federal: "é livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença".',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso IX.',
    hint: 'Atividade intelectual, artística e científica: livre e sem censura nem licença.',
    difficulty: 'easy'
  },

  // ==========================================
  // LÍNGUA PORTUGUESA (BLOCO I)
  // ==========================================
  {
    id: 's3-por-11',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Classes Gramaticais - Advérbios de Tempo',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Analise as afirmativas a seguir:\nI. Ocorre advérbio de tempo nas seguintes frases: "Ontem estivemos numa reunião de trabalho" e "Sempre estamos juntos".\nII. São exemplos de advérbio de tempo as seguintes palavras: hoje, agora, amanhã, ontem, tarde, breve, cedo, jamais e nunca.\nMarque a alternativa CORRETA:',
    options: [
      'As duas afirmativas são verdadeiras.',
      'A afirmativa I é verdadeira, e a II é falsa.',
      'A afirmativa II é verdadeira, e a I é falsa.',
      'As duas afirmativas são falsas.',
      'As duas são parcialmente verdadeiras.'
    ],
    correctIndex: 0,
    explanation: 'I. "Ontem" e "sempre" modificam os verbos indicando a circunstância temporal (Verdadeira).\nII. Todas as palavras listadas (hoje, agora, amanhã, ontem, tarde, breve, cedo, jamais, nunca) são autênticos advérbios de tempo (Verdadeira).\nPortanto, as duas afirmativas são verdadeiras.',
    fundamentacaoLegal: 'Morfologia: Advérbios de Tempo.',
    hint: 'Ontem, hoje, amanhã, sempre e nunca indicam tempo.',
    difficulty: 'easy'
  },
  {
    id: 's3-por-12',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Classes Gramaticais - Advérbios de Lugar',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Analise as afirmativas a seguir:\nI. São exemplos de advérbio de lugar, entre outros: aí, aqui, acolá, cá, lá, ali, adiante, abaixo, embaixo, acima e adentro.\nII. Ocorre advérbio de lugar nas seguintes frases: "Minha casa é ali" e "O livro está embaixo da sua mesa".\nMarque a alternativa CORRETA:',
    options: [
      'As duas afirmativas são verdadeiras.',
      'A afirmativa I é verdadeira, e a II é falsa.',
      'A afirmativa II é verdadeira, e a I é falsa.',
      'As duas afirmativas são falsas.',
      'As duas são parcialmente verdadeiras.'
    ],
    correctIndex: 0,
    explanation: 'I. A lista traz advérbios de lugar clássicos da gramática normativa (Verdadeira).\nII. Em "Minha casa é ali", "ali" é advérbio de lugar; em "embaixo da sua mesa", temos locução adverbial de lugar (Verdadeira).\nLogo, ambas as afirmativas são verdadeiras.',
    fundamentacaoLegal: 'Morfologia: Classificação semântica dos Advérbios e Locuções Adverbiais de Lugar.',
    hint: 'Aqui, ali, lá, acolá, acima e embaixo indicam localização no espaço.',
    difficulty: 'easy'
  },
  {
    id: 's3-por-13',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Advérbios de Intensidade',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'É correto afirmar que na frase "Como você consegue inventar umas frases tão originais?" o vocábulo "tão" indica:',
    options: [
      'comparação.',
      'tempo.',
      'intensidade.',
      'duração.',
      'dúvida.'
    ],
    correctIndex: 2,
    explanation: 'Na frase, o vocábulo "tão" atua como advérbio de intensidade, intensificando o sentido do adjetivo "originais" (= extremamente originais / muito originais).',
    fundamentacaoLegal: 'Morfologia: Advérbio de Intensidade modificando um adjetivo.',
    hint: '"Tão originais" = "muito originais" (intensidade).',
    difficulty: 'easy'
  },
  {
    id: 's3-por-14',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Processos de Formação e Classes de Palavras',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Considere as seguintes afirmações acerca das palavras:\nI - A palavra "necessariamente" é um advérbio derivado de um adjetivo.\nII - A palavra "desinformação" é um substantivo derivado de um substantivo.\nIII - A palavra "alucinados" é um adjetivo derivado de um substantivo.\nQuais estão corretas?',
    options: [
      'Apenas I.',
      'Apenas III.',
      'Apenas I e II.',
      'Apenas II e III.',
      'I, II e III.'
    ],
    correctIndex: 2,
    explanation: 'I. Correta: "necessariamente" é formado pelo adjetivo "necessária" + sufixo adverbial "-mente".\nII. Correta: "desinformação" é formado pelo prefixo "des-" + substantivo primitivo "informação".\nIII. Incorreta: "alucinados" deriva diretamente do VERBO "alucinar" (particípio adjetivado), e não de um substantivo primitivo.\nCorretas: Apenas I e II.',
    fundamentacaoLegal: 'Morfologia: Processos de Derivação Sufixal e Prefixal.',
    hint: 'Alucinados vem do verbo ALUCINAR, e não de um substantivo.',
    difficulty: 'medium'
  },
  {
    id: 's3-por-15',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Classes Gramaticais - Pronome Relativo e Preposição',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Em: "[...] bonecas de pano, que foram feitas totalmente com materiais recicláveis doados por empresas parceiras." As palavras destacadas ("que" e "por") são, respectivamente:',
    options: [
      'Substantivo - verbo.',
      'Conjunção - verbo.',
      'Advérbio - advérbio.',
      'Pronome relativo - preposição.',
      'Preposição - preposição.'
    ],
    correctIndex: 3,
    explanation: 'O "que" introduz oração adjetiva e retoma o substantivo antecedente ("bonecas de pano" = as quais foram feitas), exercendo papel de PRONOME RELATIVO. A palavra "por" é uma PREPOSIÇÃO essencial que introduz o agente da passiva ("doados por empresas parceiras").',
    fundamentacaoLegal: 'Morfossintaxe: Pronome Relativo e Preposição Acidental/Essencial.',
    hint: '"que" substitui o substantivo antecedente; "por" liga as palavras como preposição.',
    difficulty: 'easy'
  },

  // ==========================================
  // RACIOCÍNIO LÓGICO (BLOCO II)
  // ==========================================
  {
    id: 's3-rlm-16',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência Lógica da Condicional com Conjunção no Antecedente',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '"Se o sino da igreja toca e minha avó o escuta, então minha avó vai para a igreja." Uma afirmação logicamente equivalente a essa é:',
    options: [
      'Se minha avó não vai para a igreja, então o sino da igreja não toca ou minha avó não o escuta.',
      'Se minha avó não o escuta, então o sino da igreja não toca e minha avó não vai para a igreja.',
      'Minha avó não o escuta ou o sino da igreja toca ou minha avó vai para a igreja.',
      'Se o sino da igreja toca e minha avó vai para a igreja, então minha avó o escuta.',
      'Se o sino da igreja não toca ou minha avó não o escuta, então minha avó não vai para a igreja.'
    ],
    correctIndex: 0,
    explanation: 'Estrutura: (P ∧ Q) → R.\nA contrapositiva de uma condicional é ~R → ~(P ∧ Q).\nPela Lei de De Morgan, a negação de (P ∧ Q) é (~P ∨ ~Q).\nLogo: Se a avó NÃO vai para a igreja, então o sino NÃO toca OU a avó NÃO o escuta.',
    fundamentacaoLegal: 'Lógica Proposicional: Contrapositiva [(P ∧ Q) → R] ≡ [~R → (~P ∨ ~Q)].',
    hint: 'Contrapositiva + De Morgan: Se nega o fim, então nega o início trocando E por OU.',
    difficulty: 'medium'
  },
  {
    id: 's3-rlm-17',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência Lógica da Condicional para Disjunção',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '"Se não chove, então passeamos ou jogamos bola." Uma afirmação logicamente equivalente é:',
    options: [
      'Se chove, então não passeamos e jogamos bola.',
      'Se passeamos ou jogamos bola, então não chove.',
      'Chove ou, passeamos ou jogamos bola.',
      'Não chove e, passeamos ou jogamos bola.',
      'Se jogamos bola e passeamos, então chove.'
    ],
    correctIndex: 2,
    explanation: 'Equivalência clássica da condicional em disjunção: (P → Q) ≡ (~P ∨ Q) [Regra do "NéOu" - Nega a 1ª OU Mantém a 2ª].\nAqui, o antecedente é "Não chove". Negando o antecedente temos: "Chove". Mantendo o consequente temos: "passeamos ou jogamos bola".\nResultado: "Chove ou, passeamos ou jogamos bola."',
    fundamentacaoLegal: 'Lógica Proposicional: (P → Q) ≡ (~P ∨ Q).',
    hint: 'Nega a primeira (chove) + OU + mantém a segunda (passeamos ou jogamos bola).',
    difficulty: 'medium'
  },
  {
    id: 's3-rlm-18',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Disjunção Exclusiva vs Bicondicional',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Se a afirmação "Ou Renato é o gerente da loja ou Rodrigo é o dono da loja" é verdadeira, então uma afirmação necessariamente verdadeira é:',
    options: [
      'Renato é o gerente da loja e Rodrigo é o dono da loja.',
      'Renato é o gerente da loja se, e somente se, Rodrigo não é o dono da loja.',
      'Se Renato não é o gerente da loja, então Rodrigo não é o dono da loja.',
      'Se Renato é o gerente da loja, então Rodrigo é o dono da loja.',
      'Renato é o gerente da loja.'
    ],
    correctIndex: 1,
    explanation: 'A disjunção exclusiva (P ⊻ Q) significa que exatamente uma das duas é verdadeira e a outra é necessariamente falsa. Isso equivale exatamente a dizer que P acontece se e somente se o outro NÃO acontece: P ↔ ~Q.\n"Renato é gerente se, e somente se, Rodrigo NÃO é dono".',
    fundamentacaoLegal: 'Lógica Proposicional: (P ⊻ Q) ≡ (P ↔ ~Q).',
    hint: 'Ou... ou... significa que um é verdade SE E SOMENTE SE o outro for falso.',
    difficulty: 'hard'
  },
  {
    id: 's3-rlm-19',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência Lógica da Condicional Simples',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Uma afirmação equivalente para "Se estou feliz, então passei no concurso" é:',
    options: [
      'Se não passei no concurso, então não estou feliz.',
      'Não passei no concurso e não estou feliz.',
      'Estou feliz e passei no concurso.',
      'Passei no concurso e não estou feliz.',
      'Se passei no concurso, então estou feliz.'
    ],
    correctIndex: 0,
    explanation: 'A contrapositiva de "P → Q" é "~Q → ~P".\nAntecedente P: "estou feliz". Consequente Q: "passei no concurso".\nContrapositiva: Se não passei no concurso (~Q), então não estou feliz (~P).',
    fundamentacaoLegal: 'Lógica Formal: (P → Q) ≡ (~Q → ~P).',
    hint: 'Volta negando tudo: Se não passei, então não estou feliz.',
    difficulty: 'easy'
  },
  {
    id: 's3-rlm-20',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Contrapositiva da Condicional',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'A proposição "Se Mário é cabo, então Cláudio é sargento" tem, como equivalente, a proposição:',
    options: [
      'Mário é cabo e Cláudio é sargento.',
      'se Mário não é cabo, então Cláudio não é sargento.',
      'se Cláudio é sargento, então Mário é cabo.',
      'se Cláudio não é sargento, então Mário não é cabo.',
      'Mário é cabo ou Cláudio não é sargento.'
    ],
    correctIndex: 3,
    explanation: 'A contrapositiva inverte as proposições negando ambas: "se Cláudio NÃO é sargento, então Mário NÃO é cabo".',
    fundamentacaoLegal: 'Lógica Proposicional: Contrapositiva (P → Q) ≡ (~Q → ~P).',
    hint: 'Inverta a ordem e negue as duas frases.',
    difficulty: 'easy'
  },

  // ==========================================
  // LEGISLAÇÃO EXTRAVAGANTE - LEI MARIA DA PENHA (BLOCO III)
  // ==========================================
  {
    id: 's3-leg-21',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei Maria da Penha (Lei 11.340/2006) - Ressarcimento de Dispositivos',
    banca: 'FCC',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(FCC - 2023 - MPE-PB) A Lei nº 11.340/2006, conhecida como Lei Maria da Penha, estabelece expressamente que:',
    options: [
      'O juiz assegurará à mulher a manutenção do vínculo trabalhista por até dois anos quando necessário o afastamento.',
      'É direito da mulher o atendimento pericial especializado prestado por servidoras exclusivamente do sexo feminino.',
      'Os dispositivos de segurança destinados ao uso em caso de perigo iminente e disponibilizados para o monitoramento das vítimas amparadas por medidas protetivas terão seus custos ressarcidos pelo agressor.',
      'Ainda que haja risco à integridade da ofendida, poderá ser concedida liberdade provisória com fiança pela autoridade policial.',
      'Configura violência doméstica contra a mulher a ação ou omissão desde que comprovadas relações exclusivamente heterossexuais.'
    ],
    correctIndex: 2,
    explanation: 'O Art. 9º, § 7º da Lei 11.340/2006 (inserido pela Lei 13.871/2019) dispõe: "Os dispositivos de segurança destinados ao uso em caso de perigo iminente e disponibilizados para o monitoramento das vítimas de violência doméstica ou familiar amparadas por medidas protetivas terão seus custos ressarcidos pelo agressor". Na A, o afastamento do trabalho é de até seis meses (art. 9º, § 2º, II); na B, a lei diz "preferencialmente" e não exclusivamente; na E, a proteção abrange também casais homoafetivos.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 9º, § 7º c/c Art. 9º, § 2º, II.',
    hint: 'O agressor deve ressarcir os custos dos dispositivos de proteção/monitoramento.',
    difficulty: 'medium'
  },
  {
    id: 's3-leg-22',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei Maria da Penha - Formas de Violência Doméstica (Violência Física)',
    banca: 'FUNDATEC',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(FUNDATEC - 2023 - PROCERGS) De acordo com as disposições da Lei Maria da Penha, entre as formas de violência doméstica e familiar contra a mulher, está a violência física, entendida como qualquer conduta que:',
    options: [
      'Cause-lhe dano emocional e diminuição da autoestima ou que lhe prejudique o pleno desenvolvimento.',
      'Configure calúnia, difamação ou injúria.',
      'Configure retenção, subtração, destruição parcial ou total de seus instrumentos de trabalho ou documentos pessoais.',
      'Ofenda sua integridade ou saúde corporal.',
      'A constranja a presenciar, a manter ou a participar de relação sexual não desejada mediante coerção ou uso da força.'
    ],
    correctIndex: 3,
    explanation: 'Conforme o Art. 7º, inciso I da Lei 11.340/2006: "a violência física, entendida como qualquer conduta que ofenda sua integridade ou saúde corporal". A alternativa A trata da violência psicológica; a B da moral; a C da patrimonial; e a E da sexual.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 7º, inciso I.',
    hint: 'Violência física = ofensa à integridade ou saúde corporal.',
    difficulty: 'easy'
  },
  {
    id: 's3-leg-23',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei Maria da Penha - Formas de Violência e Atendimento Policial',
    banca: 'FUNDATEC',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(FUNDATEC - 2023 - PROCERGS) Com base nas disposições da Lei Maria da Penha, analise as assertivas:\nI. São formas de violência doméstica e familiar contra a mulher, entre outras: física, psicológica, sexual, patrimonial e moral.\nII. No atendimento à mulher em situação de violência doméstica, a autoridade policial deverá garantir proteção policial, comunicando de imediato ao Conselho Tutelar.\nIII. É direito da mulher atendimento policial e pericial especializado, ininterrupto e prestado por servidores – preferencialmente do sexo feminino – previamente capacitados.\nQuais estão corretas?',
    options: [
      'Apenas III.',
      'Apenas I e II.',
      'Apenas I e III.',
      'Apenas II e III.',
      'I, II e III.'
    ],
    correctIndex: 2,
    explanation: 'I. Correta: são as 5 formas expressas no Art. 7º.\nII. Incorreta: o Art. 11, I prevê comunicar de imediato ao Ministério Público e ao Poder Judiciário (e não ao Conselho Tutelar, salvo se envolver criança).\nIII. Correta: Art. 10-A, § 1º assegura atendimento preferencialmente por servidoras do sexo feminino previamente capacitadas.\nCorretas: I e III.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 7º, Art. 10-A, § 1º e Art. 11, I.',
    hint: 'Autoridade policial comunica imediatamente ao Judiciário e MP, e servidoras preferencialmente femininas.',
    difficulty: 'medium'
  },
  {
    id: 's3-leg-24',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei Maria da Penha - Medidas da Autoridade Policial (Art. 11)',
    banca: 'OBJETIVA',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Uma dona de casa foi agredida com gravidade pelo marido no domicílio familiar. Em conformidade com a Lei nº 11.340/2006, entre outras providências, a autoridade policial deverá:\nI. Obrigatoriamente, acompanhar a ofendida para assegurar a retirada de seus pertences do domicílio familiar.\nII. Garantir proteção policial, quando necessário, comunicando de imediato ao Ministério Público e ao Poder Judiciário.\nIII. Fornecer transporte para a ofendida e seus dependentes para abrigo ou local seguro, quando houver risco de vida.\nIV. Encaminhar a ofendida ao hospital ou posto de saúde e ao Instituto Médico Legal.\nEstão CORRETOS:',
    options: [
      'Somente os itens I e II.',
      'Somente os itens I e III.',
      'Somente os itens I, III e IV.',
      'Somente os itens II, III e IV.',
      'Todos os itens.'
    ],
    correctIndex: 3,
    explanation: 'O Art. 11, inciso II diz: "acompanhar a ofendida para assegurar a retirada de seus pertences, SE NECESSÁRIO" (e não obrigatoriamente em todos os casos). Os itens II (inciso I), III (inciso III) e IV (inciso IV) reproduzem fielmente os deveres da autoridade policial.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 11, incisos I, II, III e IV.',
    hint: 'A retirada de pertences é acompanhada "se necessário", e não de forma compulsória/obrigatória.',
    difficulty: 'hard'
  },
  {
    id: 's3-leg-25',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei Maria da Penha - Medidas Protetivas de Urgência (Art. 22)',
    banca: 'IDECAN',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: '(IDECAN - 2023) Pedro ofendeu a companheira Elvira chamando-a de prostituta e agrediu-a fisicamente com um tapa, causando lesão comprovada em corpo de delito. Nos termos da Lei Maria da Penha e alterações, assinale a alternativa correta:',
    options: [
      'A forma de violência praticada por Pedro e sofrida por Elvira foi unicamente a violência física.',
      'Elvira tem direito a atendimento policial prestado por servidores exclusivamente do sexo feminino.',
      'Deverá o juiz, sem prejuízo de outras medidas, encaminhar Elvira a programa oficial de proteção mesmo contra sua expressa vontade.',
      'O juiz poderá aplicar, de imediato, ao agressor o afastamento do lar, domicílio ou local de convivência com a ofendida.',
      'A autoridade policial poderá conceder de plano liberdade provisória com fiança caso Pedro seja primário.'
    ],
    correctIndex: 3,
    explanation: 'Conforme o Art. 22, inciso II da Lei 11.340/2006, constatada a prática de violência doméstica, o juiz poderá aplicar, de imediato, ao agressor: "afastamento do lar, domicílio ou local de convivência com a ofendida". Pedro também praticou violência moral (injúria), o atendimento policial é preferencialmente feminino (e não exclusivo), e não cabe fiança policial quando há lesão corporal qualificada em violência doméstica.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 22, inciso II c/c Art. 7º, V.',
    hint: 'Afastamento do lar pelo juiz (Art. 22, II) é medida protetiva imediata clássica.',
    difficulty: 'medium'
  }
];
