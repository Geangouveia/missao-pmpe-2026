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

export const INITIAL_QUESTIONS: QuizQuestion[] = [
  // =========================================================================
  // MATÉRIA: NOÇÕES DE INFORMÁTICA (BLOCO II)
  // ==========================================
  {
    id: 'inf-s3-1',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Modelos de Arquitetura de Redes (OSI/ISO e TCP/IP)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Em relação aos modelos de arquitetura (OSI/ISO e TCP/IP), as camadas 5, 6 e 7 do modelo OSI/ISO são agregadas em uma só camada no modelo TCP/IP. Qual é o nome dessa camada?',
    options: [
      'Transporte.',
      'Sessão.',
      'Aplicação.',
      'Enlace.',
      'Internet.'
    ],
    correctIndex: 2,
    explanation: 'No modelo de referência OSI/ISO existem 7 camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação). Já a arquitetura TCP/IP agrega as três camadas superiores (Sessão, Apresentação e Aplicação) em uma única camada chamada Camada de Aplicação.',
    fundamentacaoLegal: 'Arquitetura de Redes: Camada de Aplicação no modelo TCP/IP engloba as camadas 5, 6 e 7 do OSI.',
    hint: 'É a camada mais próxima do usuário final onde operam navegadores e clientes de e-mail.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s3-2',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Protocolos de Redes e Camada de Aplicação',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Determinada rede de computadores opera segundo um conjunto de protocolos em camadas, tendo cada uma delas funções específicas. Uma dessas camadas é usada para enviar e receber dados de outros programas pela Internet. Com base nessas informações, assinale a opção que indica dois dos protocolos que atuam na camada descrita.',
    options: [
      'FTP e SMTP',
      'TCP e UDP',
      'SMTP e UDP',
      'FTP e TCP',
      'IP e ICMP'
    ],
    correctIndex: 0,
    explanation: 'A questão descreve a Camada de Aplicação, responsável pela interface direta entre as aplicações e a rede. O FTP (File Transfer Protocol - transferência de arquivos) e o SMTP (Simple Mail Transfer Protocol - envio de e-mails) operam na camada de aplicação. Já TCP e UDP pertencem à camada de Transporte.',
    fundamentacaoLegal: 'Camada de Aplicação: FTP (porta 20/21), SMTP (porta 587/25), HTTP (80), DNS (53).',
    hint: 'Ambos são protocolos de programas/serviços de usuário (arquivos e e-mails).',
    difficulty: 'medium'
  },
  {
    id: 'inf-s3-3',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Protocolo HTTP e Navegação Web',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'No modelo de arquitetura TCP/IP, a camada em que se dá o uso do protocolo HTTP é a camada de:',
    options: [
      'Aplicação.',
      'Transporte.',
      'Rede.',
      'Enlace.',
      'Física.'
    ],
    correctIndex: 0,
    explanation: 'O HTTP (Hypertext Transfer Protocol) é o protocolo fundamental da Web para transferência de páginas e dados entre cliente e servidor web, operando diretamente na Camada de Aplicação.',
    fundamentacaoLegal: 'Protocolo HTTP (porta 80): nível de aplicação no modelo TCP/IP.',
    hint: 'Aplicações web funcionam no topo da pilha de protocolos.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s3-4',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Correio Eletrônico e Protocolos de E-mail',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Na camada de aplicação do TCP funcionam protocolos que suportam serviços de email; um deles provê o acesso às mensagens de email de um servidor ao cliente, para que possam ser baixadas as mensagens no computador cliente e, ainda, manter uma cópia das mensagens no servidor. Trata-se do:',
    options: [
      'FTP.',
      'RTP.',
      'IMAP.',
      'UDP.',
      'SMTP.'
    ],
    correctIndex: 2,
    explanation: 'O IMAP (Internet Message Access Protocol) permite sincronizar e gerenciar e-mails diretamente no servidor, possibilitando que o usuário acesse as mensagens e mantenha uma cópia segura no servidor. O POP3 baixa e por padrão exclui do servidor, enquanto o SMTP serve apenas para o ENVIO.',
    fundamentacaoLegal: 'IMAP (porta 143/993): acesso e sincronização mantendo cópia no servidor.',
    hint: 'Para envio é SMTP; para acesso sincronizado no servidor é IMAP.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s3-5',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Conceitos de Internet, Intranet e Extranet',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'As empresas podem oferecer diversos serviços via web para seus clientes e fornecedores por meio de uma tecnologia de rede de computadores que permite o compartilhamento de dados, serviços e aplicações mediante autenticação segura. Assinale a opção que corresponde a essa tecnologia.',
    options: [
      'Rede sem fio',
      'Internet',
      'Intranet',
      'Extranet',
      'FTP'
    ],
    correctIndex: 3,
    explanation: 'A Extranet é a extensão da rede interna (intranet) para usuários externos autorizados, como parceiros, fornecedores e clientes externos, mediante autenticação segura.',
    fundamentacaoLegal: 'Extranet: acesso externo controlado de parceiros/clientes a recursos da intranet.',
    hint: 'Acesso seguro externo para fornecedores e parceiros.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s2-1',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Conceitos de Intranet',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Determinada rede privada de computadores é caracterizada pelo uso da tecnologia WWW dentro de uma rede corporativa, sendo constituída de uma ou mais redes locais interligadas e podendo incluir computadores ou redes remotas, sem acesso externo, com o principal objetivo de compartilhar informações internas. Trata-se da:',
    options: [
      'PAN.',
      'Internet.',
      'Extranet.',
      'Intranet.',
      'VPN.'
    ],
    correctIndex: 3,
    explanation: 'A Intranet é uma rede privada e exclusiva dos colaboradores de uma organização que utiliza os mesmos protocolos e tecnologias da Internet (TCP/IP, HTTP) para compartilhamento seguro de informações estritamente internas.',
    fundamentacaoLegal: 'Intranet: uso interno e exclusivo de tecnologias de internet dentro da corporação.',
    hint: '"Intra" significa interno/restrito à corporação.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s2-3',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Endereçamento IPv4 de 32 bits',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Em uma rede TCP/IP, todos os hosts têm um endereço IP, composto por 4 bytes, totalizando 32 bits. Assinale a alternativa que apresenta um endereço IP válido.',
    options: [
      '192.288.012.03',
      '192.105.003.11',
      '256.118.035.28',
      '256.003.020.014',
      '211.113.005.288'
    ],
    correctIndex: 1,
    explanation: 'No padrão IPv4 (32 bits divididos em 4 octetos), cada número varia obrigatoriamente de 0 a 255 (2^8 = 256 valores). Nas alternativas A, C, D e E há números inválidos (288, 256), tornando apenas 192.105.003.11 um IP tecnicamente válido.',
    fundamentacaoLegal: 'IPv4: 4 octetos decimais separados por ponto, cada qual no intervalo de 0 a 255.',
    hint: 'Nenhum número de IP IPv4 pode ultrapassar 255.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s4-1',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Placas de Rede e Endereço Físico MAC',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Os computadores comunicam-se entre si e com os demais meios de transmissão de dados por meio de placas de rede, as quais possuem um número único denominado:',
    options: [
      'Endereço WWW (World Wide Web).',
      'Endereço IP (Internet Protocol).',
      'Endereço MAC (Media Access Control).',
      'Endereço de email (correio eletrônico).',
      'Endereço DNS (Domain Name System).'
    ],
    correctIndex: 2,
    explanation: 'O endereço MAC (Media Access Control) é o identificador físico gravado de fábrica na placa de rede do dispositivo (camada de enlace), composto por 48 bits expressos em 12 dígitos hexadecimais.',
    fundamentacaoLegal: 'Endereço MAC: identificador físico exclusivo de camada 2.',
    hint: 'É o endereço físico de fábrica da placa de rede.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s4-2',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Busca Avançada no Google e Operadores',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Usando o Google, um usuário pretende encontrar somente arquivos do tipo PDF que contenham a expressão ApexBrasil e que não contenham a expressão franchising. Considerando essa situação hipotética, assinale a opção que apresenta o texto que esse usuário deve digitar no campo de busca do Google para que a pesquisa retorne o resultado desejado por ele.',
    options: [
      'ApexBrasil in pdf not franchising',
      'ApexBrasil in pdf exclude franchising',
      'ApexBrasil filetype:pdf -franchising',
      'ApexBrasil file:pdf not franchising',
      'ApexBrasil type:pdf except franchising'
    ],
    correctIndex: 2,
    explanation: 'No Google, o operador "filetype:" restringe os resultados ao formato especificado (filetype:pdf) e o sinal de menos colado à palavra (-termo) exclui páginas contendo aquele termo.',
    fundamentacaoLegal: 'Operadores de busca Google: filetype:extensao e -termo para exclusão.',
    hint: 'Use filetype:pdf e o sinal de menos (-) sem espaço para excluir.',
    difficulty: 'easy'
  },
  {
    id: 'inf-s4-4',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Serviço DHCP em Redes Corporativas',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Imagine que você trabalha como administrador de redes em uma empresa de médio porte. O departamento de TI decidiu implementar um novo servidor DHCP (Dynamic Host Configuration Protocol) para melhorar a gestão dos endereços IP na rede interna. Nesse contexto, qual é a função primária de um servidor DHCP?',
    options: [
      'Filtrar o tráfego de rede com base em regras de acesso.',
      'Fornecer endereços IP dinamicamente aos dispositivos na rede.',
      'Armazenar em cache e controlar o acesso a conteúdo da web.',
      'Autenticar e autorizar usuários e dispositivos na rede.',
      'Oferecer serviços de resolução de nomes de domínio (DNS).'
    ],
    correctIndex: 1,
    explanation: 'O protocolo DHCP (Dynamic Host Configuration Protocol) tem por finalidade distribuir e configurar automaticamente endereços IP, máscara de sub-rede e gateway para os dispositivos conectados à rede.',
    fundamentacaoLegal: 'DHCP: atribuição dinâmica e automatizada de endereços IP.',
    hint: '"Dynamic Host Configuration" = Configuração e atribuição dinâmica de IP.',
    difficulty: 'easy'
  },
  {
    id: 'inf-pmpe-34',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Princípios da Segurança da Informação (Irretratabilidade)',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Quanto aos princípios e conceitos relacionados à segurança da informação, qual das seguintes alternativas define a Irretratabilidade (Não Repúdio):',
    options: [
      'Garantia de que os dados estejam disponíveis e de forma ininterrupta, sem poder negar o acesso a esses recursos para quem tiver autorização de acesso.',
      'Garantia de sigilo das informações e prevenção do vazamento de dados.',
      'Garantia da Identificação da pessoa ou do servidor com quem vai se estabelecer comunicação.',
      'Garantia de que a informação acessada está completa e que não foi alterada por pessoas não autorizadas.',
      'Uma ação cometida sobre os dados não pode ser negada, ou seja, deve ser capaz de identificar com precisão a origem ou o causador de algum evento.'
    ],
    correctIndex: 4,
    explanation: 'A Irretratabilidade (ou Não Repúdio) garante que o autor de uma ação ou transação digital não possa negar a sua autoria posteriormente, muito comum no uso de certificados e assinaturas digitais.',
    fundamentacaoLegal: 'Segurança da Informação: Confidencialidade, Integridade, Disponibilidade, Autenticidade e Irretratabilidade.',
    hint: 'Não poder voltar atrás ou negar a autoria do ato praticado.',
    difficulty: 'medium'
  },
  {
    id: 'inf-pmpe-35',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Malwares em Redes (Worm vs Vírus)',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'A rede corporativa começou a apresentar lentidão. Os analistas da rede constataram que um tipo bem específico de software malicioso atingiu o ambiente através da rede corporativa, explorando vulnerabilidades encontradas em sistemas operacionais das estações de trabalho e consumindo recursos da rede. Além do que foi relatado, nenhum outro problema foi causado. Pela descrição desse software malicioso, a classificação mais adequada para ele seria:',
    options: [
      'Vírus.',
      'Cavalo de Troia.',
      'Worm.',
      'Spyware.',
      'Ransomware.'
    ],
    correctIndex: 2,
    explanation: 'O Worm (verme) se propaga de forma autônoma pela rede sem precisar de intervenção do usuário ou hospedeiro, explorando vulnerabilidades e causando lentidão e sobrecarga no tráfego.',
    fundamentacaoLegal: 'Malware: Worm propaga-se automaticamente via rede explorando falhas.',
    hint: 'Propaga-se sozinho pela rede e consome muita banda/recursos.',
    difficulty: 'medium'
  },
  {
    id: 'inf-pmpe-38',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Funções do Microsoft Excel (SOMASE)',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Em uma planilha do Microsoft Office Excel 2019 com comissões de funcionários nas células C2 a C8 (valores: 100, 101, 200, 100, 110, 99, 101), ao inserir a fórmula =SOMASE(C2:C8;">100";C2:C8), qual será o resultado retornado?',
    options: [
      '712',
      '811',
      '95',
      '607',
      '512'
    ],
    correctIndex: 4,
    explanation: 'A fórmula soma apenas os valores estritamente maiores que 100. Valores considerados: 101 + 200 + 110 + 101 = 512. Os valores 100 e 99 são desconsiderados pela condição ">100".',
    fundamentacaoLegal: 'Excel: SOMASE(intervalo; critério; [intervalo_soma]).',
    hint: 'Some apenas os números maiores que 100: 101 + 200 + 110 + 101.',
    difficulty: 'medium'
  },

  // =========================================================================
  // MATÉRIA: DIREITO CONSTITUCIONAL (BLOCO III)
  // ==========================================
  {
    id: 'con-s3-6',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Artigo 5º da CF/88 - Liberdade de Expressão e Pensamento',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Com base no artigo 5° da Constituição Federal de 1988, é correto afirmar que:',
    options: [
      'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo por determinação judicial.',
      'Ninguém será submetido à tortura nem a tratamento desumano ou degradante, salvo em caso de guerra declarada.',
      'Sob nenhuma circunstância, haverá pena de morte.',
      'A prática do racismo constitui crime afiançável e prescritível, sujeito à pena de multa, nos termos da lei.',
      'É livre a manifestação do pensamento, sendo vedado o anonimato.'
    ],
    correctIndex: 4,
    explanation: 'O Art. 5º, IV, da CF/88 prevê: "é livre a manifestação do pensamento, sendo vedado o anonimato". Erros das outras opções: a determinação judicial em domicílio só pode ocorrer DURANTE O DIA; tortura é vedada em qualquer caso (mesmo em guerra); pena de morte é permitida em caso de guerra declarada (art. 5º, XLVII, a); racismo é inafiançável e imprescritível (art. 5º, XLII).',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso IV.',
    hint: 'A manifestação do pensamento é livre, mas nunca sob o anonimato.',
    difficulty: 'easy'
  },
  {
    id: 'con-s3-7',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Direito de Associação (Art. 5º, XVII a XXI)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Renomada associação privada de âmbito municipal foi denunciada em matéria jornalística com indícios de envolvimento ilícito. Considerando o caso e as disposições constitucionais acerca das associações, é correto afirmar que:',
    options: [
      'A entidade associativa não poderá ser compulsoriamente dissolvida, em razão do direito constitucional de liberdade de associação.',
      'A associação somente poderá ter suas atividades suspensas ao final de regular processo administrativo, em que lhe seja assegurada ampla defesa.',
      'As atividades da associação não poderão ser suspensas, eis que ela não detém caráter paramilitar.',
      'Na esfera administrativa, para que a associação tenha suas atividades suspensas, faz-se imprescindível que o processo judicial já tenha transitado em julgado.',
      'As atividades da associação só poderão ser suspensas por decisão judicial, independentemente do trânsito em julgado da ação.'
    ],
    correctIndex: 4,
    explanation: 'Conforme o Art. 5º, XIX, da CF/88: "as associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso (dissolução), o trânsito em julgado". Logo, para a SUSPENSÃO das atividades, basta decisão judicial, sem necessidade de trânsito em julgado.',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XIX.',
    hint: 'Dissolução exige trânsito em julgado; suspensão exige apenas decisão judicial.',
    difficulty: 'hard'
  },
  {
    id: 'con-s3-8',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Escusa de Consciência (Art. 5º, VIII da CF/88)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Aos brasileiros e aos estrangeiros residentes no país é garantida a inviolabilidade dos direitos fundamentais. Sobre as garantias constitucionais, assinale a alternativa correta:',
    options: [
      'É plena a liberdade de associação para fins lícitos, sendo permitida inclusive a de caráter paramilitar.',
      'É assegurado a todos o acesso à informação, resguardado o sigilo da fonte, exceto quando for necessário ao exercício profissional.',
      'Ninguém será privado de direitos por motivo de crença religiosa ou de convicção filosófica ou política, salvo se as invocar para eximir-se de obrigação legal a todos imposta e recusar-se a cumprir prestação alternativa, fixada em lei.',
      'As entidades associativas, a qualquer tempo e em qualquer situação, possuem legitimidade para representar seus filiados judicial ou extrajudicialmente.',
      'É inviolável a liberdade de consciência e de crença religiosa, sendo assegurado o livre exercício dos cultos religiosos na forma cristã.'
    ],
    correctIndex: 2,
    explanation: 'A alternativa C reproduz com exatidão o Art. 5º, VIII, da CF/88 (Escusa de Consciência). Erros: é VEDADA a associação paramilitar; o sigilo da fonte é resguardado QUANDO necessário ao exercício profissional; entidades associativas precisam de autorização expressa para representação; e a liberdade de culto não se restringe à forma cristã.',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso VIII.',
    hint: 'A privação de direitos só ocorre se recusar cumprir também a prestação alternativa.',
    difficulty: 'medium'
  },
  {
    id: 'con-s2-6',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Princípios das Relações Internacionais (Art. 4º da CF/88)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Em relação aos princípios fundamentais da Constituição Federal de 1988, assinale a alternativa correta:',
    options: [
      'A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Social.',
      'São Poderes da União, dependentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.',
      'A igualdade entre os Estados e o repúdio ao terrorismo e ao racismo são princípios que regem a República Federativa do Brasil nas suas relações internacionais.',
      'Construir uma sociedade livre, justa e solidária é um dos fundamentos da República Federativa do Brasil.',
      'A República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da América, visando à formação de uma comunidade americana de nações.'
    ],
    correctIndex: 2,
    explanation: 'O Art. 4º, incisos V e VIII, estabelece como princípios das relações internacionais a igualdade entre os Estados e o repúdio ao terrorismo e ao racismo. Erros: Brasil é Estado Democrático de Direito; Poderes são INDEPENDENTES e harmônicos; construir sociedade livre é OBJETIVO fundamental (art. 3º), não fundamento; e a integração busca comunidade LATINO-AMERICANA de nações (parágrafo único do art. 4º).',
    fundamentacaoLegal: 'CF/88, Artigo 4º, incisos V e VIII.',
    hint: 'Repúdio ao terrorismo e racismo é princípio internacional da República.',
    difficulty: 'medium'
  },
  {
    id: 'con-s4-8',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Crimes Inafiançáveis e Insuscetíveis de Graça ou Anistia (TTT)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Preencha as lacunas e assinale a alternativa correta: "De acordo com a Constituição do Brasil, a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da _______, o _______, o _______ e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem."',
    options: [
      'improbidade administrativa / tráfico ilícito de entorpecentes e drogas afins / terrorismo.',
      'tortura / racismo / terrorismo.',
      'tortura / tráfico ilícito de entorpecentes e drogas afins / terrorismo.',
      'tortura / tráfico ilícito de entorpecentes e drogas afins / racismo.',
      'improbidade administrativa / tráfico ilícito de entorpecentes e drogas afins / racismo.'
    ],
    correctIndex: 2,
    explanation: 'Conforme o Art. 5º, XLIII, da CF/88, os crimes inafiançáveis e insuscetíveis de graça ou anistia formam a regra do "3T + Hediondos": Tortura, Tráfico ilícito de entorpecentes e Terrorismo.',
    fundamentacaoLegal: 'CF/88, Art. 5º, XLIII (Regra do 3T + H: Tortura, Tráfico, Terrorismo e Hediondos).',
    hint: 'Mnemônico 3T: Tortura, Tráfico e Terrorismo.',
    difficulty: 'easy'
  },
  {
    id: 'con-pmpe-58',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Art. 144 da CF/88 - Repartição de Atribuições na Segurança Pública',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Conforme a Constituição Federal de 1988, apurar infrações penais contra a ordem política, as funções de polícia judiciária do Estado, a segurança dos estabelecimentos penais estaduais e as funções de polícia de fronteiras incumbem, respectivamente, à:',
    options: [
      'polícia federal, à polícia militar, à polícia civil e à polícia militar.',
      'polícia federal, à polícia civil, à polícia penal e à polícia militar.',
      'polícia militar, à polícia civil, à polícia penal e à polícia federal.',
      'polícia civil, à polícia federal, à polícia militar e à polícia federal.',
      'polícia federal, à polícia civil, à polícia penal e à polícia federal.'
    ],
    correctIndex: 4,
    explanation: 'Art. 144 da CF/88: Infrações contra ordem política e polícia de fronteiras = Polícia Federal (§ 1º); Polícia judiciária estadual = Polícia Civil (§ 4º); Segurança dos estabelecimentos penais estaduais = Polícia Penal (§ 5º-A).',
    fundamentacaoLegal: 'CF/88, Artigo 144, §§ 1º, 4º e 5º-A.',
    hint: 'Ordem política e fronteiras são atribuições exclusivas da Polícia Federal.',
    difficulty: 'medium'
  },

  // =========================================================================
  // MATÉRIA: LÍNGUA PORTUGUESA (BLOCO I)
  // ==========================================
  {
    id: 'por-s1-1',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Acentuação Gráfica e Acento Diferencial',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Em "[...] especialistas que têm uma habilidade especial [...]", por que o verbo em destaque está acentuado graficamente?',
    options: [
      'Porque se trata de uma palavra que possui apenas uma sílaba.',
      'Porque é uma palavra tônica, diferente de "tem" em "ele tem estudado muito", por exemplo.',
      'Porque a autora cometeu um erro de acentuação gráfica.',
      'Porque ele é pronunciado com o "e" fechado, diferente de "até", por exemplo, que é pronunciado com o "e" aberto.',
      'Porque o termo "especialistas" está no plural, exigindo acento diferencial de número.'
    ],
    correctIndex: 4,
    explanation: 'Os verbos "ter" e "vir" e seus derivados recebem acento circunflexo na 3ª pessoa do plural do presente do indicativo para se diferenciar da 3ª pessoa do singular (ele tem / eles têm; ele vem / eles vêm).',
    fundamentacaoLegal: 'Acentuação diferencial de número: Ele tem (sem acento) / Eles têm (com acento circunflexo).',
    hint: 'Acento circunflexo diferencial para marcar a concordância com sujeito no plural.',
    difficulty: 'easy'
  },
  {
    id: 'por-s1-2',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Regras de Proparoxítonas e Paroxítonas',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Assinale a alternativa em que ambos os vocábulos destacados foram acentuados em estrita obediência à mesma norma gramatical:',
    options: [
      'impôs e públicas',
      'princípio e até',
      'políticas e públicas',
      'impôs e recíproca',
      'país e saúde'
    ],
    correctIndex: 2,
    explanation: '"Políticas" e "públicas" são ambas palavras proparoxítonas (sílaba tônica é a antepenúltima: po-LÍ-ti-cas e PÚ-bli-cas). Toda proparoxítona é obrigatoriamente acentuada.',
    fundamentacaoLegal: 'Regra geral das proparoxítonas: 100% das palavras proparoxítonas levam acento gráfico.',
    hint: 'Ambas possuem a antepenúltima sílaba tônica.',
    difficulty: 'easy'
  },
  {
    id: 'por-s3-11',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Classes de Palavras - Advérbios de Tempo',
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
    explanation: 'Ambas as afirmativas são verdadeiras. Em I, "ontem" e "sempre" modificam o verbo indicando circunstância temporal. Em II, todos os termos listados expressam noções cronológicas ou de frequência temporal.',
    fundamentacaoLegal: 'Morfologia: Advérbios de tempo exprimem circunstância temporal da ação.',
    hint: 'Ontem, sempre, jamais e cedo indicam tempo.',
    difficulty: 'easy'
  },
  {
    id: 'por-s3-13',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Semântica e Classes Gramaticais',
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
    explanation: 'O vocábulo "tão" atua como advérbio de intensidade, intensificando a qualidade expressa pelo adjetivo "originais" (equivale a "muito originais" ou "extremamente originais").',
    fundamentacaoLegal: 'Advérbio de intensidade intensificando adjetivo.',
    hint: 'Equivale a "muito originais".',
    difficulty: 'easy'
  },
  {
    id: 'por-s2-11',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Conjunções Coordenativas Adversativas',
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
    explanation: 'A conjunção coordenativa "mas" introduz uma ideia de oposição, quebra de expectativa ou contraste em relação à oração anterior, possuindo valor puramente adversativo.',
    fundamentacaoLegal: 'Conjunções adversativas: mas, porém, contudo, todavia, entretanto, no entanto.',
    hint: '"Mas" introduz oposição ou contraste.',
    difficulty: 'easy'
  },
  {
    id: 'por-s2-15',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Orações Subordinadas Proporcionais',
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
    explanation: '"À medida que" é locução conjuntiva subordinativa proporcional (expressa fatos que aumentam ou diminuem em proporção simultânea). Atenção: "na medida em que" indica causa; "na medida que" não existe na norma culta.',
    fundamentacaoLegal: 'Locução conjuntiva proporcional: à medida que, à proporção que.',
    hint: 'À medida que = proporção simultânea.',
    difficulty: 'medium'
  },
  {
    id: 'por-s4-11',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Colocação Pronominal (Próclise Obrigatória)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Assinale a alternativa em que a única colocação pronominal permitida é a anteposição ao verbo (próclise obrigatória):',
    options: [
      '“Exercitar a mente ativa é o caminho para mantê-la saudável”.',
      '“[...] pode nos ajudar a manter a mente saudável.”. ',
      '“[...] a televisão se tornou objeto de discussões [...]”',
      '“Fazer uso dos recursos que a conectividade com o conhecimento nos traz [...]”.',
      '“Com o computador deu-se o mesmo [...]”.'
    ],
    correctIndex: 3,
    explanation: 'Na alternativa D, o pronome relativo "que" ("recursos que a conectividade... nos traz") funciona como palavra atrativa obrigatória, atraindo o pronome oblíquo átono "nos" para antes do verbo "traz" (próclise obrigatória).',
    fundamentacaoLegal: 'Próclise obrigatória: pronomes relativos atraem o pronome oblíquo.',
    hint: 'Pronomes relativos ("que") são palavras atrativas imediatas de próclise.',
    difficulty: 'medium'
  },

  // =========================================================================
  // MATÉRIA: HISTÓRIA DE PERNAMBUCO (BLOCO I)
  // ==========================================
  {
    id: 'his-pmpe-12',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Economia Açucareira e Mão de Obra Colonial',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'O açúcar foi um produto econômico bastante desenvolvido na capitania de Pernambuco, com multiplicação de engenhos em terras férteis de massapê. Sobre essa temática colonial, marque a alternativa INCORRETA:',
    options: [
      'De base monocultora, a atividade açucareira se adaptou positivamente quando produzida nas terras da capitania de Pernambuco, principalmente as chamadas de massapê.',
      'O avanço do açúcar permitiu o crescimento das vilas e povoados, bem como o crescimento populacional em Pernambuco de imigrantes e cristãos-novos.',
      'Os engenhos eram as principais unidades de produção econômica, onde se localizavam equipamentos básicos, como a casa de purgar, além da casa-grande e da senzala.',
      'No final do século XVI, o modelo agrário-exportador do açúcar já tinha avançado bastante em Pernambuco, o que gerou expressiva lucratividade para Portugal e a Holanda.',
      'O avanço do açúcar foi um fator determinante não apenas para a economia local, mas também para a formação da sociedade colonial baseada nas elites açucareiras e na mão de obra livre.'
    ],
    correctIndex: 4,
    explanation: 'A alternativa E está incorreta porque a economia açucareira colonial de Pernambuco baseou-se categoricamente na escravidão (mão de obra escravizada indígena e, predominantemente, africana), e NÃO em mão de obra livre.',
    fundamentacaoLegal: 'História Colonial de PE: Sociedade patriarcal baseada no latifúndio, monocultura e trabalho escravo.',
    hint: 'A produção de açúcar colonial era sustentada pelo trabalho escravo africano.',
    difficulty: 'easy'
  },
  {
    id: 'his-pmpe-14',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Guerra dos Mascates (1710-1711)',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'A chegada dos comerciantes reinóis em Pernambuco representou o início de conflitos e divergências políticas que resultaram na Guerra dos Mascates (1710-1711). Sobre essa temática, marque a alternativa correta:',
    options: [
      'Ansiosos em conquistar a independência nacional, os mascates iniciaram conflitos armados contra os senhores de engenho para se tornar uma república.',
      'A aristocracia rural de Olinda havia conquistado bastante poder político desde o século XVI e não desejava ser ameaçada em seu controle pelos comerciantes reinóis do Recife.',
      'Ao contrário de outros movimentos em Pernambuco, a Guerra dos Mascates é considerada um levante emancipacionista.',
      'Os senhores de engenhos, endividados e enfraquecidos economicamente, buscaram manter o controle do Recife para a monarquia britânica.',
      'Os comerciantes de grosso trato não resistiram ao avanço armado dos senhores de engenho, sendo expulsos de Pernambuco.'
    ],
    correctIndex: 1,
    explanation: 'A Guerra dos Mascates (1710-1711) foi uma revolta nativista decorrente da disputa entre a decadente aristocracia agrária olindense e os prósperos comerciantes portugueses do Recife (apelidados de mascates), deflagrada pela elevação do Recife à categoria de vila independente de Olinda.',
    fundamentacaoLegal: 'Guerra dos Mascates: Disputa Olinda (senhores rurais) vs Recife (comerciantes mascates).',
    hint: 'Olinda dominava politicamente, mas Recife tinha o dinheiro dos comerciantes.',
    difficulty: 'medium'
  },
  {
    id: 'his-pmpe-17',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'A Guerra dos Cabanos no Período Regencial (1832-1835)',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'A Guerra dos Cabanos, episódio ocorrido em Pernambuco e Alagoas entre os anos de 1832 e 1835, representou uma das revoltas do período regencial. Acerca desse tema, marque a alternativa correta:',
    options: [
      'Inspirada nos ideais iluministas, a guerra aconteceu com fins políticos visando estabelecer uma república a partir de Pernambuco.',
      'De caráter exclusivamente popular, visava realizar importantes reformas sociais e defender o fim da escravidão.',
      'Diante das instabilidades políticas do início do período regencial, grupos restauradores, reunidos em torno da Coluna Trono e Altar, almejavam o retorno do fortalecimento do poder central e de D. Pedro I ao Brasil.',
      'Os liberais lideraram mais uma revolta que contou com intensa participação das camadas dominantes açucareiras.',
      'A revolta durou até o ano de 1835, quando D. Pedro I faleceu e os revoltosos desistiram de lutar pela restauração.'
    ],
    correctIndex: 2,
    explanation: 'A Cabanada ou Guerra dos Cabanos (1832-1835) em Pernambuco e Alagoas teve forte cunho restaurador/conservador ("Coluna Trono e Altar"), exigindo o retorno do imperador D. Pedro I (que havia abdicado em 1831) e a defesa da religião católica, unindo camponeses, índios e escravizados descontentes com o governo regencial.',
    fundamentacaoLegal: 'Cabanada de Pernambuco (1832-1835): Revolta restauradora do período regencial.',
    hint: 'Queriam a volta de Dom Pedro I ao trono brasileiro.',
    difficulty: 'hard'
  },
  {
    id: 'his-pmpe-18',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Estado Novo e Interventoria de Agamenon Magalhães em PE',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Durante a ditadura do Estado Novo de Getúlio Vargas, Pernambuco foi governado pelo interventor Agamenon Magalhães. Sobre as características desse período em Pernambuco, marque a alternativa INCORRETA:',
    options: [
      'Seguindo as diretrizes nacionais, Agamenon Magalhães buscava implementar em Pernambuco a estrutura de governo de Vargas, baseada na perseguição principalmente aos comunistas.',
      'A partir da constituição de 1937, conhecida como a Polaca, estabeleceu-se no Brasil o estado de emergência, que permitia prender, exilar e julgar sumariamente os opositores.',
      'A censura demarcou profundamente os meios de comunicação da época, controlando rádios, jornais e cinema em Pernambuco.',
      'A participação do Brasil na Segunda Guerra contra o Eixo demonstra o amplo repúdio que o Estado Novo previamente tinha das políticas estatais nazifascistas.',
      'A Liga Social contra o Mocambo foi uma política desenvolvida pelo interventor Agamenon Magalhães para reformar o Recife e substituir os mocambos.'
    ],
    correctIndex: 3,
    explanation: 'A alternativa D é incorreta: o Estado Novo de Vargas tinha evidente inspiração autoritária e simpatias com os regimes fascistas europeus (como a Carta de 1937 baseada na constituição polonesa fascista). O Brasil só entrou na guerra ao lado dos Aliados em 1942 por pressões diplomáticas e econômicas dos Estados Unidos.',
    fundamentacaoLegal: 'História Republicana de PE: O Estado Novo e a interventoria de Agamenon Magalhães.',
    hint: 'Vargas mantinha fortes simpatias com o autoritarismo do Eixo antes de 1942.',
    difficulty: 'hard'
  },
  {
    id: 'his-pmpe-20',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Cultura e Manifestações Populares de Pernambuco',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'As manifestações culturais populares em Pernambuco refletem o processo de formação histórica da região. Sobre esses elementos culturais, identifique a alternativa correta:',
    options: [
      'O carnaval é uma das maiores expressões artísticas da cultura pernambucana, em que aparecem elementos da cultura africana, indígena e a ausência dos colonizadores.',
      'O maracatu, de forte origem afro-brasileira, apresenta duas formas principais de expressão: o maracatu rural, conhecido como de baque solto, e o maracatu nação, sendo este de baque virado mais presente nos centros urbanos.',
      'Entre as festas populares, destaca-se o São João que demarca um tipo de festividade puramente democrática, sem nenhuma manifestação de religiosidade.',
      'A herança afrodescendente demonstra a preocupação que o estado brasileiro teve logo após a Lei Áurea de integrar dignamente os ex-escravizados.',
      'O frevo é um elemento cultural típico de Pernambuco que surgiu ainda no século XVI nas senzalas coloniais.'
    ],
    correctIndex: 1,
    explanation: 'O Maracatu divide-se em Maracatu Nação (baque virado, ligado ao Candomblé e aos centros urbanos do Recife e Olinda) e Maracatu Rural (baque solto, ligado aos trabalhadores dos canaviais da Zona da Mata). O frevo surgiu no final do século XIX/início do XX, e não no século XVI.',
    fundamentacaoLegal: 'Cultura Pernambucana: Maracatu Nação (baque virado) e Maracatu Rural (baque solto).',
    hint: 'Maracatu Rural (baque solto) da Zona da Mata e Maracatu Nação (baque virado) urbano.',
    difficulty: 'easy'
  },

  // =========================================================================
  // MATÉRIA: RACIOCÍNIO LÓGICO MATEMÁTICO (BLOCO II)
  // ==========================================
  {
    id: 'rlm-s3-16',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência Lógica da Condicional (Contrapositiva)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'Se o sino da igreja toca e minha avó o escuta, então minha avó vai para a igreja. Uma afirmação equivalente a essa, do ponto de vista lógico, é:',
    options: [
      'Se minha avó não vai para a igreja, então o sino da igreja não toca ou minha avó não o escuta.',
      'Se minha avó não o escuta, então o sino da igreja não toca e minha avó não vai para a igreja.',
      'Minha avó não o escuta ou o sino da igreja toca ou minha avó vai para a igreja.',
      'Se o sino da igreja toca e minha avó vai para a igreja, então minha avó o escuta.',
      'Se o sino da igreja não toca ou minha avó não o escuta, então minha avó não vai para a igreja.'
    ],
    correctIndex: 0,
    explanation: 'Pela regra da contrapositiva: (P ^ Q) -> R equivale logicamente a ~R -> ~(P ^ Q). Negando o antecedente pela Lei de De Morgan: ~(P ^ Q) = ~P v ~Q. Logo: "Se minha avó NÃO vai para a igreja, então o sino NÃO toca OU minha avó NÃO o escuta".',
    fundamentacaoLegal: 'Contrapositiva com De Morgan: A -> B <=> ~B -> ~A.',
    hint: 'Inverte e nega tudo: se não vai, então não tocou OU não escutou.',
    difficulty: 'medium'
  },
  {
    id: 'rlm-s3-18',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Disjunção Exclusiva e Bicondicional',
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
    explanation: 'A disjunção exclusiva (Ou P ou Q) significa que exatamente uma das proposições é verdadeira e a outra é falsa. Isso equivale logicamente a: "P se e somente se não Q" (P <-> ~Q). Portanto: "Renato é o gerente da loja se, e somente se, Rodrigo não é o dono da loja".',
    fundamentacaoLegal: 'Disjunção exclusiva: (P v_ Q) <=> (P <-> ~Q).',
    hint: 'Na disjunção exclusiva, se um for verdade, o outro obrigatoriamente é falso.',
    difficulty: 'medium'
  },
  {
    id: 'rlm-s1-17',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Negação da Condicional (Regra do MANÉ)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Considere a afirmação: "Se Jonas é um soldado então é forte". A negação dessa afirmação é:',
    options: [
      'Jonas é um soldado e não é forte.',
      'Se Jonas não é um soldado então é forte.',
      'Se Jonas é um soldado então não é forte.',
      'Se Jonas não é um soldado então não é forte.',
      'Se Jonas não é forte então não é um soldado.'
    ],
    correctIndex: 0,
    explanation: 'Para negar uma condicional (P -> Q), aplica-se a regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q). Logo: "Jonas é um soldado E não é forte".',
    fundamentacaoLegal: 'Negação de P -> Q = P ^ ~Q.',
    hint: 'MANÉ: Mantém a primeira E Nega a segunda.',
    difficulty: 'easy'
  },
  {
    id: 'rlm-s1-12',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Análise Combinatória (Permutação)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Para ter acesso a um arquivo, um operador de computador precisa digitar uma sequência de 5 símbolos distintos, formada de duas letras e três algarismos. Ele se lembra dos símbolos, mas não da sequência em que aparecem. O maior número de tentativas diferentes que o operador pode fazer para acessar o arquivo é:',
    options: [
      '115',
      '120',
      '150',
      '200',
      '249'
    ],
    correctIndex: 1,
    explanation: 'Como os 5 símbolos já são conhecidos e distintos, o número de maneiras de ordená-los é a permutação simples de 5 elementos: P(5) = 5! = 5 * 4 * 3 * 2 * 1 = 120 tentativas.',
    fundamentacaoLegal: 'Permutação Simples: P_n = n!',
    hint: 'Permutação de 5 elementos conhecidos: 5! = 120.',
    difficulty: 'easy'
  },
  {
    id: 'rlm-pmpe-27',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Princípio Fundamental da Contagem',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Para realizar a avaliação de um programa de governo, uma equipe será montada com um coordenador e um agente operacional. Para coordenar os trabalhos, pode-se escolher qualquer um dos 8 analistas reguladores, enquanto que, para o posto de agente operacional, tanto se pode escolher um dos 5 técnicos administrativos quanto um dos 6 inspetores reguladores. A quantidade de maneiras que se pode montar esta equipe é igual a:',
    options: [
      '240',
      '19',
      '46',
      '53',
      '88'
    ],
    correctIndex: 4,
    explanation: 'Coordenador: 8 opções de analistas. Agente operacional: 5 técnicos + 6 inspetores = 11 opções. Pelo princípio fundamental da contagem: 8 * 11 = 88 maneiras distintas.',
    fundamentacaoLegal: 'Princípio Multiplicativo: N = n1 * (n2a + n2b).',
    hint: 'Multiplique as 8 opções de coordenador pelas 11 opções de agente.',
    difficulty: 'easy'
  },
  {
    id: 'rlm-pmpe-29',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Probabilidade de Eventos',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Em uma empresa trabalham 50 funcionários, dos quais 20 são mulheres. Sabendo que 20 funcionários são loiros, dos quais 12 são homens, determine a probabilidade de, ao se escolher um funcionário dessa empresa ao acaso, ele ser um homem moreno (não loiro).',
    options: [
      '36%',
      '24%',
      '48%',
      '30%',
      '18%'
    ],
    correctIndex: 0,
    explanation: 'Total de funcionários = 50. Total de homens = 50 - 20 mulheres = 30 homens. Homens loiros = 12. Homens morenos = 30 - 12 = 18. Probabilidade = 18 / 50 = 36 / 100 = 36%.',
    fundamentacaoLegal: 'Probabilidade Simples: P(A) = n(A) / n(Espaço Amostral).',
    hint: '30 homens no total menos 12 loiros = 18 homens morenos. 18 de 50 = 36%.',
    difficulty: 'medium'
  },

  // =========================================================================
  // MATÉRIA: LEGISLAÇÃO EXTRAVAGANTE & DIREITOS HUMANOS (BLOCO III)
  // ==========================================
  {
    id: 'leg-s3-21',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Extravagante',
    topicoEdital: 'Lei Maria da Penha (Lei nº 11.340/2006)',
    banca: 'FCC / MPE-PB',
    simuladoOrigem: 'Simulado 3ª Semana',
    question: 'A Lei nº 11.340/2006 (Lei Maria da Penha) estabelece que:',
    options: [
      'O juiz assegurará à mulher em situação de violência doméstica e familiar, para preservar sua integridade física e psicológica, a manutenção do vínculo trabalhista, quando necessário o afastamento do local de trabalho, por até dois anos.',
      'É direito da mulher em situação de violência doméstica e familiar o atendimento policial e pericial especializado, ininterrupto e prestado por servidoras exclusivamente do sexo feminino, previamente capacitadas.',
      'Os dispositivos de segurança destinados ao uso em caso de perigo iminente e disponibilizados para o monitoramento das vítimas de violência doméstica ou familiar amparadas por medidas protetivas terão seus custos ressarcidos pelo agressor.',
      'Ainda que haja risco à integridade física da ofendida ou à efetividade da medida protetiva de urgência, poderá ser concedida liberdade provisória ao preso, mediante fiança, a ser estipulada pela autoridade policial.',
      'Configura violência doméstica qualquer ação que cause dano moral, desde que constatado que as relações entre os envolvidos são de natureza exclusivamente heterossexual.'
    ],
    correctIndex: 2,
    explanation: 'O Art. 9º, § 7º da Lei Maria da Penha determina que os dispositivos de segurança (como botão do pânico e tornozeleiras) disponibilizados para monitoramento da vítima terão seus custos ressarcidos pelo agressor. Erros: afastamento do trabalho é por até 6 meses; atendimento por mulheres é PREFERENCIALMENTE, não exclusivamente; independe de orientação sexual.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Art. 9º, § 7º.',
    hint: 'O agressor deve ressarcir os custos dos dispositivos de proteção à vítima.',
    difficulty: 'hard'
  },
  {
    id: 'leg-s2-23',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Extravagante',
    topicoEdital: 'Lei de Drogas (Lei nº 11.343/2006) - Porte para Consumo',
    banca: 'VUNESP',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'Para quem transporta, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar, a Lei nº 11.343/2006 (Lei Antidrogas) prevê a pena de:',
    options: [
      'advertência sobre os efeitos das drogas.',
      'prisão simples.',
      'detenção.',
      'reclusão.',
      'perda de bens e valores.'
    ],
    correctIndex: 0,
    explanation: 'O Artigo 28 da Lei 11.343/2006 prevê apenas 3 penas para o usuário de drogas: I - advertência sobre os efeitos das drogas; II - prestação de serviços à comunidade; III - medida educativa de comparecimento a programa ou curso educativo. NÃO há cominação de pena privativa de liberdade (reclusão ou detenção).',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Artigo 28, inciso I.',
    hint: 'O usuário não sofre pena de prisão (reclusão/detenção).',
    difficulty: 'easy'
  },
  {
    id: 'leg-s2-33',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Extravagante',
    topicoEdital: 'Lei de Drogas - Pena do Tráfico Ilícito (Art. 33)',
    banca: 'VUNESP / TJ-CE',
    simuladoOrigem: 'Simulado 2ª Semana',
    question: 'O Art. 33 da Lei n.º 11.343/06 (Sisnad) comina pena para quem importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar drogas sem autorização. Assinale a alternativa que representa a respectiva pena de acordo com o Art. 33 da Lei n.º 11.343/06:',
    options: [
      'Pena - reclusão de 5 (cinco) a 15 (quinze) anos e pagamento de 500 a 1.500 dias-multa.',
      'Pena - reclusão de 10 (dez) a 30 (trinta) anos e pagamento de 1.000 a 3.000 dias-multa.',
      'Pena - reclusão de 2 (dois) a 7 (sete) anos e pagamento de 250 a 750 dias-multa.',
      'Pena - reclusão de 1 (um) a 20 (vinte) anos e pagamento de 100 a 5.000 dias-multa.',
      'Pena - detenção de 3 (três) a 8 (oito) anos e multa.'
    ],
    correctIndex: 0,
    explanation: 'O crime de tráfico ilícito de drogas tipificado no caput do Art. 33 da Lei nº 11.343/2006 é apenado com reclusão de 5 (cinco) a 15 (quinze) anos e pagamento de 500 (quinhentos) a 1.500 (mil e quinhentos) dias-multa.',
    fundamentacaoLegal: 'Lei nº 11.343/2006, Artigo 33, caput.',
    hint: 'Tráfico de drogas: 5 a 15 anos de reclusão.',
    difficulty: 'easy'
  },
  {
    id: 'leg-s1-6',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Extravagante',
    topicoEdital: 'Lei dos Crimes Hediondos (Lei nº 8.072/1990)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Assinale a alternativa que apresenta a hipótese em que TODOS os crimes são rotulados expressamente de hediondos ou equiparados:',
    options: [
      'Homicídio privilegiado, latrocínio, estupro de vulnerável e tortura.',
      'Extorsão qualificada pela restrição da liberdade da vítima, favorecimento da prostituição ou de outra forma de exploração sexual de criança ou adolescente ou de vulnerável, e furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum.',
      'Homicídio qualificado, latrocínio, terrorismo e redução à condição análoga de escravo.',
      'Posse ou porte ilegal de arma de fogo de uso proibido, comércio ilegal de armas de fogo, tráfico internacional de arma de fogo, acessório ou munição e extorsão em todas as suas modalidades.',
      'Roubo simples, tráfico de drogas, tortura e sequestro relâmpago.'
    ],
    correctIndex: 1,
    explanation: 'A alternativa B traz crimes incluídos e mantidos no rol taxativo da Lei 8.072/1990 (extorsão com restrição de liberdade - art. 1º, III; favorecimento de prostituição de vulnerável - art. 1º, VIII; furto com explosivo - art. 1º, IX). Homicídio privilegiado e redução à condição análoga de escravo NÃO são hediondos; extorsão nem em todas as modalidades é hedionda.',
    fundamentacaoLegal: 'Lei nº 8.072/1990, Artigo 1º (Rol taxativo de crimes hediondos).',
    hint: 'Furto com explosivo e exploração sexual de menor foram consolidados como hediondos.',
    difficulty: 'hard'
  },
  {
    id: 'leg-s4-21',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Extravagante',
    topicoEdital: 'Lei de Abuso de Autoridade (Lei nº 13.869/2019)',
    banca: 'CESPE / CEBRASPE',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Em relação aos crimes de abuso de autoridade disciplinados pela Lei nº 13.869/2019, assinale a opção correta:',
    options: [
      'A divergência na interpretação de lei ou na avaliação da prova configura abuso de autoridade.',
      'São penas restritivas de direitos a prestação de serviços à comunidade ou a entidades públicas e a suspensão temporária e sem vencimentos do cargo, função ou mandato, as quais podem ser aplicadas de forma autônoma ou cumulativa.',
      'Apenas membros de Poderes podem ser sujeitos ativos de tais infrações penais, excluída a possibilidade da prática por procuradores municipais.',
      'A ação penal nos crimes de abuso de autoridade é pública condicionada à representação da vítima.',
      'A perda do cargo público e a inabilitação temporária para o exercício de função pública são efeitos automáticos da condenação.'
    ],
    correctIndex: 1,
    explanation: 'Conforme o Art. 5º da Lei 13.869/2019, as penas restritivas de direitos substitutivas são: prestação de serviços à comunidade e suspensão do cargo por 1 a 6 meses sem vencimentos, aplicadas autônoma ou cumulativamente. Erros: divergência hermenêutica NÃO é crime (art. 1º, § 2º); ação penal é PÚBLICA INCONDICIONADA (art. 3º); e efeitos da perda do cargo NÃO são automáticos (art. 4º, parágrafo único).',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Artigo 5º.',
    hint: 'Penas restritivas de direitos: prestação de serviços e suspensão do cargo sem remuneração.',
    difficulty: 'medium'
  },
  {
    id: 'leg-pmpe-48',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Institucional PMPE',
    topicoEdital: 'Estatuto dos Policiais Militares de PE (Lei Estadual nº 6.783/74) - Licenças',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Sobre as Licenças concedidas aos policiais militares de Pernambuco de acordo com o Estatuto da Corporação, marque a alternativa INCORRETA:',
    options: [
      'Licença é a autorização para o afastamento total do serviço, em caráter temporário, concedida ao policial-militar, obedecidas as disposições legais e regulamentares.',
      'A licença especial é a autorização para afastamento total do serviço, relativa a cada decênio (10 anos) de tempo de efetivo serviço prestado, concedida ao policial militar que a requerer, sem que implique em qualquer restrição para a sua carreira.',
      'A Licença Especial tem a duração de 6 (seis) meses, a ser gozada de uma só vez, não podendo, em qualquer hipótese, ser parcelada.',
      'O período de licença especial não interrompe a contagem do tempo de efetivo serviço.',
      'A licença para tratar de interesse particular é a autorização para afastamento total do serviço, concedida ao policial-militar com mais de 10 (dez) anos de efetivo serviço, que a requerer com aquela finalidade.'
    ],
    correctIndex: 2,
    explanation: 'A alternativa C é a incorreta: segundo o Estatuto dos Policiais Militares de PE (Lei nº 6.783/1974), a licença especial tem duração de 6 meses por decênio, mas PODE SIM ser usufruída de forma parcelada (em períodos de 2 ou 3 meses), a pedido do policial e a critério da administração.',
    fundamentacaoLegal: 'Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/1974), Artigo 63.',
    hint: 'A licença especial pode sim ser parcelada.',
    difficulty: 'hard'
  },
  {
    id: 'leg-pmpe-50',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação Institucional PMPE',
    topicoEdital: 'Estatuto dos Militares da PMPE - Afastamentos Totais',
    banca: 'NUCE Concursos PMPE',
    simuladoOrigem: 'Simulado Completo PMPE 2024',
    question: 'Os policiais militares do Estado de Pernambuco têm direito aos seguintes períodos de afastamento total do serviço regulamentares, com EXCEÇÃO de um:',
    options: [
      'núpcias: 8 (oito) dias;',
      'luto: 8 (oito) dias;',
      'instalação: até 10 (dez) dias;',
      'trânsito: até 30 (trinta) dias;',
      'Licença eleitoral: 20 (vinte) dias.'
    ],
    correctIndex: 4,
    explanation: 'O Estatuto dos Policiais Militares prevê afastamentos totais do serviço por: núpcias (8 dias), luto (8 dias), instalação (até 10 dias) e trânsito (até 30 dias). Não existe afastamento total sob o prazo de "licença eleitoral de 20 dias".',
    fundamentacaoLegal: 'Lei Estadual de Pernambuco nº 6.783/1974, Artigo 61.',
    hint: 'Afastamentos clássicos: núpcias 8 dias, luto 8 dias, instalação até 10, trânsito até 30.',
    difficulty: 'medium'
  }
];

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
