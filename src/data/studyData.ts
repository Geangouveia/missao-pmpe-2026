import type { Category, QuizQuestion, MatchPair, Flashcard, BossEnemy, Achievement } from '../types/game';

export const CATEGORIES: Category[] = [
  // BLOCO I
  {
    id: 'portugues',
    name: 'Língua Portuguesa',
    bloco: 'bloco_1',
    blocoNome: 'Bloco I (AOCP)',
    description: 'Crase, regência, concordância, orações subordinadas e interpretação de texto.',
    icon: 'BookOpen',
    color: '#3b82f6',
    accent: 'from-blue-500 to-indigo-600',
    badge: '10 Questões'
  },
  {
    id: 'historia_pe',
    name: 'História de Pernambuco',
    bloco: 'bloco_1',
    blocoNome: 'Bloco I (AOCP)',
    description: 'Insurreição Pernambucana, Guararapes, 1817, Confederação do Equador e Cangaço.',
    icon: 'Landmark',
    color: '#06b6d4',
    accent: 'from-cyan-500 to-teal-600',
    badge: '10 Questões'
  },

  // BLOCO II
  {
    id: 'raciocinio',
    name: 'Raciocínio Lógico',
    bloco: 'bloco_2',
    blocoNome: 'Bloco II (AOCP)',
    description: 'Tabela-verdade, Leis de De Morgan, equivalências, diagramas e probabilidade.',
    icon: 'BrainCircuit',
    color: '#8b5cf6',
    accent: 'from-purple-500 to-violet-600',
    badge: '10 Questões'
  },
  {
    id: 'informatica',
    name: 'Noções de Informática',
    bloco: 'bloco_2',
    blocoNome: 'Bloco II (AOCP)',
    description: 'Windows, pacote Office, redes, segurança cibernética e atalhos essenciais.',
    icon: 'Laptop',
    color: '#10b981',
    accent: 'from-emerald-500 to-green-600',
    badge: '10 Questões'
  },

  // BLOCO III
  {
    id: 'constitucional',
    name: 'Direito Constitucional',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'Art. 5º (Direitos Fundamentais), Art. 37 (Adm. Pública) e Art. 144 (Segurança Pública/PMPE).',
    icon: 'Scale',
    color: '#f59e0b',
    accent: 'from-amber-500 to-yellow-600',
    badge: '10 Questões'
  },
  {
    id: 'humanos_leis',
    name: 'Direitos Humanos & Leis',
    bloco: 'bloco_3',
    blocoNome: 'Bloco III (AOCP)',
    description: 'DUDH, San José da Costa Rica, Abuso de Autoridade, Maria da Penha e Drogas.',
    icon: 'ShieldAlert',
    color: '#ef4444',
    accent: 'from-red-500 to-rose-600',
    badge: '10 Questões'
  }
];

export const INITIAL_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // BLOCO I: LÍNGUA PORTUGUESA (AOCP)
  // ==========================================
  {
    id: 'port-1',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Emprego do Sinal Indicativo de Crase',
    banca: 'Instituto AOCP',
    question: 'Assinale a alternativa em que o sinal indicativo de crase foi empregado em estrita conformidade com a norma-padrão da língua portuguesa:',
    options: [
      'O comandante dirigiu-se à ela com serenidade e respeito.',
      'A viatura policial chegou à uma hora da madrugada ao local do chamado.',
      'Os policiais militares estavam dispostos à colaborar com a operação conjunta.',
      'O suspeito permaneceu calado frente à qualquer questionamento da equipe.',
      'O soldado dedicou a medalha de honra à capitã do pelotão.'
    ],
    correctIndex: 4,
    explanation: 'A alternativa E está correta pois há a fusão da preposição "a" (exigida pela regência do verbo dedicar: "dedicar algo a alguém") com o artigo definido feminino "a" que antecede o substantivo feminino "capitã". Nas demais: não há crase antes de pronome pessoal (ela), artigo indefinido (uma), verbo (colaborar) ou pronome indefinido (qualquer).',
    fundamentacaoLegal: 'Regra geral de crase: Preposição "A" + Artigo definido feminino "A".',
    hint: 'Lembre-se das proibições clássicas: antes de verbos, pronomes pessoais e termos masculinos não ocorre crase.',
    difficulty: 'medium'
  },
  {
    id: 'port-2',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Concordância Verbal e Nominal',
    banca: 'Instituto AOCP',
    question: 'No que concerne à concordância verbal, assinale a frase que se encontra inteiramente CORRETA segundo a norma culta:',
    options: [
      'Fazem dez anos que a lei de segurança pública foi sancionada no Estado.',
      'Houveram muitos incidentes durante o patrulhamento ostensivo noturno.',
      'Mais de um policial militar participou da ocorrência e foram elogiados pelo comando.',
      'Alugam-se alojamentos destinados aos novos soldados do batalhão.',
      'Tratam-se de questões prioritárias para a preservação da ordem pública.'
    ],
    correctIndex: 3,
    explanation: 'Em "Alugam-se alojamentos", a partícula "se" é pronome apassivador (alojamentos são alugados), logo o verbo deve concordar com o sujeito paciente no plural ("alojamentos"). Nas outras opções: "fazer" indicando tempo decorrido é impessoal (faz dez anos); "haver" com sentido de existir é impessoal (houve muitos incidentes); com índice de indeterminação do sujeito o verbo fica no singular (trata-se de questões).',
    fundamentacaoLegal: 'Concordância com voz passiva sintética (verbo transitivo direto + se).',
    hint: 'Quem aluga, aluga algo: se o termo tem função de sujeito paciente no plural, o verbo flexiona no plural.',
    difficulty: 'medium'
  },
  {
    id: 'port-3',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Orações Subordinadas e Conjunções',
    banca: 'Instituto AOCP',
    question: 'No período: "Conquanto chovesse torrencialmente no Sertão do Moxotó, a guarnição manteve a fiscalização nas rodovias", a oração destacada expressa sentido de:',
    options: [
      'Causa, justificando o motivo da realização da fiscalização.',
      'Concessão, indicando uma ideia de oposição que não impede o fato principal.',
      'Consequência, evidenciando o efeito produzido pela tempestade.',
      'Condição, estabelecendo uma exigência para o patrulhamento rodoviário.',
      'Conformidade, expressando concordância com a regra de segurança.'
    ],
    correctIndex: 1,
    explanation: 'A conjunção subordinativa "conquanto" possui valor estritamente concessivo (equivalente a "embora", "ainda que", "mesmo que", "posto que"), introduzindo uma oração que expressa um obstáculo que não é suficiente para anular a oração principal.',
    fundamentacaoLegal: 'Conjunções subordinativas concessivas: embora, conquanto, ainda que, se bem que.',
    hint: '"Conquanto" é sinônimo direto de "embora".',
    difficulty: 'easy'
  },

  // ==========================================
  // BLOCO I: HISTÓRIA DE PERNAMBUCO (AOCP)
  // ==========================================
  {
    id: 'hist-1',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Invasões Holandesas e Insurreição Pernambucana',
    banca: 'Instituto AOCP',
    question: 'Durante o período da presença holandesa em Pernambuco (1630-1654), a administração de Maurício de Nassau (1637-1644) destacou-se por medidas que modernizaram a cidade do Recife. Em seguida, após sua partida, eclodiu a Insurreição Pernambucana. Assinale o acontecimento que consolidou a expulsão definitiva dos holandeses e que é tradicionalmente considerado o berço histórico do Exército Brasileiro:',
    options: [
      'A Guerra dos Mascates travada entre mercadores de Recife e senhores de Olinda.',
      'A Batalha dos Guararapes (1648 e 1649), unindo luso-brasileiros, indígenas e negros.',
      'A Revolução Praieira no litoral sul pernambucano com o Manifesto ao Mundo.',
      'O Cerco de Tabocas liderado por Matias de Albuquerque no interior.',
      'A Confederação do Equador proclamada na Praça da República.'
    ],
    correctIndex: 1,
    explanation: 'As Batalhas dos Guararapes (primeira em 1648 e segunda em 1649), travadas nos Montes Guararapes (atual Jaboatão dos Guararapes/PE), selaram a derrocada militar holandesa e uniram soldados de diferentes etnias (luso-brasileiros como Fernandes Vieira, indígenas liderados por Filipe Camarão e negros sob comando de Henrique Dias), sendo celebradas como a certidão de nascimento do Exército Brasileiro.',
    fundamentacaoLegal: 'Montes Guararapes - Berço da Pátria e do Exército Brasileiro (1648-1649).',
    hint: 'Ocorreu nos Montes de Jaboatão e uniu brancos, índios e negros.',
    difficulty: 'easy'
  },
  {
    id: 'hist-2',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Movimentos Emancipacionistas - Revolução de 1817',
    banca: 'Instituto AOCP',
    question: 'A Revolução Pernambucana de 1817 é considerada um dos mais emblemáticos movimentos emancipacionistas do Brasil colonial, chegando a instituir uma República independente em solo pernambucano por cerca de 75 dias. Entre as principais motivações e características desse movimento, destaca-se:',
    options: [
      'A intenção de restaurar o domínio português absolutista contra as forças de D. Pedro I.',
      'O descontentamento com a excessiva tributação cobrada pela Corte do Rio de Janeiro e a difusão dos ideais iluministas de liberdade e república.',
      'A aliança incondicional com a coroa britânica para transformar o Recife em entreposto exclusivo de açúcar.',
      'A recusa categórica da participação do clero católico, cujos sacerdotes foram sumariamente expulsos da província.',
      'O objetivo primário de reconquistar a Capitania de Itamaracá contra invasores franceses.'
    ],
    correctIndex: 1,
    explanation: 'A Revolução de 1817 foi motivada pela insatisfação com os pesados tributos cobrados pela Corte de D. João VI radicada no Rio de Janeiro (para bancar o luxo da corte e a iluminação pública carioca), a seca de 1816 e a forte influência das ideias iluministas e maçônicas. Teve ampla adesão do clero ("Revolução dos Padres") e líderes como Domingos José Martins e Frei Caneca.',
    fundamentacaoLegal: 'Revolução de 1817: Proclamação da República de Pernambuco, com bandeira tricolor que originou a bandeira estadual.',
    hint: 'Os altos impostos para sustentar a família real no Rio causaram imensa revolta entre os pernambucanos.',
    difficulty: 'medium'
  },
  {
    id: 'hist-3',
    categoryId: 'historia_pe',
    bloco: 'bloco_1',
    materiaNome: 'História de Pernambuco',
    topicoEdital: 'Confederação do Equador (1824)',
    banca: 'Instituto AOCP',
    question: 'Em 1824, eclodiu no Nordeste a Confederação do Equador, tendo Pernambuco como epicentro. Esse movimento de caráter republicano e federalista opôs-se frontalmente a qual medida adotada por D. Pedro I?',
    options: [
      'À assinatura do Tratado de Comércio e Navegação com a Inglaterra.',
      'À dissolução da Assembleia Constituinte de 1823 e à outorga autoritária da Carta Constitucional de 1824 com o Poder Moderador.',
      'À criação imediata da Guarda Nacional e abolição das milícias provinciais.',
      'À promulgação da Lei de Terras que privatizou as áreas do agreste pernambucano.',
      'À transferência compulsória da sede do governo de Olinda para São Luís.'
    ],
    correctIndex: 1,
    explanation: 'A Confederação do Equador foi uma reação imediata e vigorosa ao autoritarismo de D. Pedro I, que dissolveu a Constituinte de 1823 (a "Constituinte da Mandioca") e outorgou a Constituição de 1824 criando o Poder Moderador e centralizando o poder nas mãos do imperador. Frei Caneca foi um dos principais articuladores e mártires do movimento, fuzilado no Recife.',
    fundamentacaoLegal: 'Confederação do Equador (1824): Oposição à Carta Outorgada de 1824 e ao Poder Moderador.',
    hint: 'O imperador impôs à força a Carta Magna e nomeou governadores à revelia das províncias.',
    difficulty: 'medium'
  },

  // ==========================================
  // BLOCO II: RACIOCÍNIO LÓGICO (AOCP)
  // ==========================================
  {
    id: 'rac-1',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência e Negação de Proposições Compostas',
    banca: 'Instituto AOCP',
    question: 'Considere a proposição condicional: "Se o candidato estuda com método, então ele é aprovado no concurso da PMPE". De acordo com a lógica sentencial, qual proposição representa a sua NEGAÇÃO lógica correta?',
    options: [
      'Se o candidato não estuda com método, então ele não é aprovado no concurso da PMPE.',
      'O candidato estuda com método e não é aprovado no concurso da PMPE.',
      'Se o candidato for aprovado na PMPE, então ele estudou com método.',
      'O candidato não estuda com método ou ele é aprovado no concurso da PMPE.',
      'O candidato não estuda com método e ele é aprovado no concurso da PMPE.'
    ],
    correctIndex: 1,
    explanation: 'A negação de uma condicional "Se P, então Q" (P -> Q) é dada pela regra do "MANÉ": Mantém a primeira (P) E (conjunção ^) Nega a segunda (~Q). Portanto: ~(P -> Q) <=> P ^ ~Q ("O candidato estuda com método E não é aprovado").',
    fundamentacaoLegal: 'Negação da Condicional: ~(P -> Q) = P ^ ~Q.',
    hint: 'Regra do MANÉ: Mantém a primeira E Nega a segunda.',
    difficulty: 'easy'
  },
  {
    id: 'rac-2',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Leis de De Morgan',
    banca: 'Instituto AOCP',
    question: 'A negação lógica da afirmação: "O policial foi promovido e os índices de criminalidade caíram" é dada por:',
    options: [
      'O policial não foi promovido e os índices de criminalidade não caíram.',
      'O policial foi promovido ou os índices de criminalidade aumentaram.',
      'O policial não foi promovido ou os índices de criminalidade não caíram.',
      'Se o policial não foi promovido, então os índices não caíram.',
      'O policial não foi promovido e os índices caíram.'
    ],
    correctIndex: 2,
    explanation: 'Pela 1ª Lei de De Morgan, para negar uma conjunção "P e Q" (~(P ^ Q)), nega-se a primeira (~P), nega-se a segunda (~Q) e troca-se o conectivo "E" pelo conectivo "OU" (disjunção v). Logo: "O policial não foi promovido OU os índices de criminalidade não caíram".',
    fundamentacaoLegal: 'Leis de De Morgan: ~(A ^ B) = ~A v ~B.',
    hint: 'Nega as duas partes e troca o "E" por "OU".',
    difficulty: 'easy'
  },

  // ==========================================
  // BLOCO II: INFORMÁTICA (AOCP)
  // ==========================================
  {
    id: 'info-1',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Segurança da Informação e Tipos de Malware',
    banca: 'Instituto AOCP',
    question: 'Um tipo de código malicioso muito comum sequestra os arquivos da vítima através de criptografia avançada e exige o pagamento de um resgate (geralmente em criptomoedas) para que seja disponibilizada a chave de descriptografia. Esse malware é conhecido tecnicamente como:',
    options: [
      'Spyware',
      'Trojan Horse (Cavalo de Troia)',
      'Ransomware',
      'Keylogger',
      'Adware'
    ],
    correctIndex: 2,
    explanation: 'Ransomware (da palavra inglesa "ransom", que significa resgate) é o software malicioso que bloqueia o acesso aos dados da vítima mediante criptografia, solicitando quantias financeiras para liberar o acesso.',
    fundamentacaoLegal: 'Segurança da Informação: Ransomware é classificado como malware extorsivo.',
    hint: '"Ransom" em inglês significa resgate.',
    difficulty: 'easy'
  },
  {
    id: 'info-2',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Sistemas Operacionais Windows e Atalhos',
    banca: 'Instituto AOCP',
    question: 'No ambiente operacional Windows 10 e Windows 11, um policial militar necessita bloquear imediatamente sua estação de trabalho ao afastar-se momentaneamente da mesa de atendimento. O atalho de teclado padrão para essa ação é:',
    options: [
      'Ctrl + Alt + Del',
      'Windows + L',
      'Windows + D',
      'Alt + F4',
      'Windows + Tab'
    ],
    correctIndex: 1,
    explanation: 'O atalho Tecla do logotipo do Windows + L (de "Lock") bloqueia instantaneamente a tela do computador, impedindo acessos não autorizados e exigindo a senha ou credencial para retorno.',
    fundamentacaoLegal: 'Atalhos do Windows: Win + L bloqueia a máquina.',
    hint: '"L" vem de Lock (travar/bloquear).',
    difficulty: 'easy'
  },

  // ==========================================
  // BLOCO III: DIREITO CONSTITUCIONAL (AOCP)
  // ==========================================
  {
    id: 'const-1',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Art. 5º da CF/88 - Inviolabilidade de Domicílio',
    banca: 'Instituto AOCP',
    question: 'A respeito do direito fundamental à inviolabilidade domiciliar consagrado no art. 5º, inciso XI, da Constituição Federal de 1988, é CORRETO afirmar que:',
    options: [
      'A autoridade policial pode adentrar a qualquer hora do dia ou da noite na casa do indivíduo mediante simples mandado judicial.',
      'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.',
      'O morador não pode impedir a entrada da polícia durante o dia mesmo sem determinação judicial, se houver mera suspeita informal de crime.',
      'A determinação judicial autoriza a entrada domiciliar a qualquer horário, desde que devidamente comunicada ao Ministério Público.',
      'Em caso de desastre, a entrada forçada só é permitida no período diurno.'
    ],
    correctIndex: 1,
    explanation: 'O art. 5º, XI, da CF/88 estipula que a casa é asilo inviolável, admitindo exceções: 1) A qualquer hora (dia ou noite): consentimento do morador, flagrante delito, desastre ou socorro. 2) Apenas durante o dia: por determinação judicial.',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XI.',
    hint: 'Mandado judicial SÓ pode ser cumprido durante o dia.',
    difficulty: 'medium'
  },
  {
    id: 'const-2',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Art. 144 da CF/88 - Da Segurança Pública e Polícia Militar',
    banca: 'Instituto AOCP',
    question: 'Conforme preceitua expressamente o artigo 144 da Constituição Federal de 1988 sobre a Segurança Pública, assinale a incumbência precípua atribuída às Polícias Militares dos Estados:',
    options: [
      'A apuração de infrações penais contra a ordem política e social em âmbito federal.',
      'A polícia ostensiva e a preservação da ordem pública, cabendo-lhes ainda a condição de forças auxiliares e reserva do Exército.',
      'A execução exclusiva das funções de polícia judiciária e investigação de crimes comuns.',
      'O patrulhamento ostensivo das rodovias federais e ferrovias da União.',
      'O controle de fronteiras e emissão exclusiva de passaportes nacionais.'
    ],
    correctIndex: 1,
    explanation: 'De acordo com o Art. 144, § 5º, da CF/88: "Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares (...) a execução de atividades de defesa civil". E o § 6º prevê que as PMs e CBMs são forças auxiliares e reserva do Exército.',
    fundamentacaoLegal: 'CF/88, Art. 144, §§ 5º e 6º.',
    hint: 'Palavras-chave: Polícia ostensiva e preservação da ordem pública.',
    difficulty: 'easy'
  },
  {
    id: 'const-3',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Remédios Constitucionais (Art. 5º, LXVIII a LXXIII)',
    banca: 'Instituto AOCP',
    question: 'Qual é o remédio constitucional cabível para conceder sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania?',
    options: [
      'Habeas Corpus',
      'Mandado de Segurança Coletivo',
      'Habeas Data',
      'Mandado de Injunção',
      'Ação Popular'
    ],
    correctIndex: 3,
    explanation: 'Conforme o Art. 5º, inciso LXXI, da CF/88: "conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania".',
    fundamentacaoLegal: 'CF/88, Art. 5º, LXXI (Mandado de Injunção).',
    hint: 'Falta de norma regulamentadora = Mandado de Injunção.',
    difficulty: 'easy'
  },

  // ==========================================
  // BLOCO III: DIREITOS HUMANOS & LEIS (AOCP)
  // ==========================================
  {
    id: 'dh-1',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Direitos Humanos & Legislação',
    topicoEdital: 'Lei de Abuso de Autoridade (Lei nº 13.869/2019)',
    banca: 'Instituto AOCP',
    question: 'A Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade) disciplina os crimes cometidos por agentes públicos. Segundo o texto expresso da lei, para a configuração dos crimes de abuso de autoridade é indispensável:',
    options: [
      'A demonstração de culpa grave ou negligência inescusável do servidor público.',
      'Apenas o dolo genérico de praticar a conduta descrita no tipo penal.',
      'O dolo específico consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.',
      'A constatação prévia de lesão corporal ou dano financeiro à administração.',
      'A prévia demissão do servidor através de processo administrativo disciplinar.'
    ],
    correctIndex: 2,
    explanation: 'O art. 1º, § 1º, da Lei 13.869/2019 exige elemento subjetivo específico (dolo específico): "As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal". Além disso, o § 2º ressalta que a divergência na interpretação de lei não configura abuso.',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Art. 1º, § 1º.',
    hint: 'Exige finalidade específica: prejudicar outrem, beneficiar a si/terceiro ou mero capricho.',
    difficulty: 'medium'
  },
  {
    id: 'dh-2',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Direitos Humanos & Legislação',
    topicoEdital: 'Lei Maria da Penha (Lei nº 11.340/2006)',
    banca: 'Instituto AOCP',
    question: 'De acordo com a Lei nº 11.340/2006 (Lei Maria da Penha), são expressamente reconhecidas como formas de violência doméstica e familiar contra a mulher:',
    options: [
      'Apenas a violência física e o homicídio tentado.',
      'A violência física, psicológica, sexual, patrimonial e moral.',
      'Exclusivamente a violência física e patrimonial.',
      'A violência verbal, estrutural e institucional, excluindo a patrimonial.',
      'A violência patrimonial e financeira apenas se houver casamento civil.'
    ],
    correctIndex: 1,
    explanation: 'O Art. 7º da Lei Maria da Penha enumera as cinco formas expressas de violência doméstica e familiar contra a mulher: I - física; II - psicológica; III - sexual; IV - patrimonial; V - moral.',
    fundamentacaoLegal: 'Lei nº 11.340/2006, Artigo 7º.',
    hint: 'São 5 formas clássicas: Física, Psicológica, Sexual, Patrimonial e Moral.',
    difficulty: 'easy'
  },
  {
    id: 'dh-3',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Direitos Humanos & Legislação',
    topicoEdital: 'Declaração Universal dos Direitos Humanos (DUDH)',
    banca: 'Instituto AOCP',
    question: 'Adotada e proclamada pela Assembleia Geral das Nações Unidas em 10 de dezembro de 1948, a Declaração Universal dos Direitos Humanos (DUDH) estabelece que:',
    options: [
      'Os direitos humanos podem ser revogados a qualquer tempo pelo Estado em caso de crise econômica.',
      'Todo ser humano tem direito, em plena igualdade, a uma justa e pública audiência por parte de um tribunal independente e imparcial.',
      'A escravidão é admitida em circunstâncias excepcionais de trabalho compulsório militar.',
      'Apenas os cidadãos natos de países democráticos possuem direito à liberdade de pensamento e religião.',
      'A prisão por dívidas civis é expressamente recomendada para a proteção dos contratos comerciais.'
    ],
    correctIndex: 1,
    explanation: 'O Artigo X da DUDH prevê que "Todo ser humano tem direito, em plena igualdade, a uma justa e pública audiência por parte de um tribunal independente e imparcial, para decidir de seus direitos e deveres ou do fundamento de qualquer acusação criminal contra ele". A escravidão é terminantemente proibida (Artigo IV).',
    fundamentacaoLegal: 'DUDH (1948), Artigo X.',
    hint: 'Direito ao devido processo legal e ao julgamento por tribunal imparcial.',
    difficulty: 'easy'
  }
];

export const INITIAL_MATCH_PAIRS: MatchPair[] = [
  // História de PE
  { id: 'm-hist-1', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Batalha dos Guararapes (1648-1649)', definition: 'Vitória sobre os holandeses nos montes de Jaboatão, considerada berço do Exército Brasileiro.' },
  { id: 'm-hist-2', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Revolução Pernambucana de 1817', definition: 'Movimento republicano e iluminista que proclamou a República de Pernambuco por 75 dias.' },
  { id: 'm-hist-3', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Confederação do Equador (1824)', definition: 'Revolta federalista liderada por Frei Caneca em oposição ao autoritarismo de D. Pedro I.' },
  { id: 'm-hist-4', categoryId: 'historia_pe', bloco: 'bloco_1', term: 'Guerra dos Mascates (1710-1711)', definition: 'Conflito entre a nobreza agrária de Olinda e os comerciantes portugueses do Recife.' },

  // Português
  { id: 'm-port-1', categoryId: 'portugues', bloco: 'bloco_1', term: 'Conquanto / Embora', definition: 'Conjunção subordinativa concessiva (indica oposição que não anula a oração principal).' },
  { id: 'm-port-2', categoryId: 'portugues', bloco: 'bloco_1', term: 'Crase Obrigatória', definition: 'Fusão da preposição "a" exigida pela regência com artigo definido feminino "a" do substantivo.' },
  { id: 'm-port-3', categoryId: 'portugues', bloco: 'bloco_1', term: 'Verbo Haver (sentido de existir)', definition: 'Verbo impessoal que não possui sujeito e deve permanecer invariável na 3ª pessoa do singular.' },

  // Direito Constitucional
  { id: 'm-const-1', categoryId: 'constitucional', bloco: 'bloco_3', term: 'Art. 144, § 5º da CF/88', definition: 'Atribui às Polícias Militares a polícia ostensiva e a preservação da ordem pública.' },
  { id: 'm-const-2', categoryId: 'constitucional', bloco: 'bloco_3', term: 'Inviolabilidade de Domicílio', definition: 'Casa é asilo inviolável: determinação judicial SÓ pode ser cumprida durante o dia.' },
  { id: 'm-const-3', categoryId: 'constitucional', bloco: 'bloco_3', term: 'Habeas Data', definition: 'Remédio constitucional para assegurar o conhecimento ou retificação de informações pessoais.' },

  // Direitos Humanos e Leis
  { id: 'm-dh-1', categoryId: 'humanos_leis', bloco: 'bloco_3', term: 'Lei 13.869/2019 (Abuso de Autoridade)', definition: 'Exige dolo específico: finalidade de prejudicar outrem, beneficiar-se ou mero capricho.' },
  { id: 'm-dh-2', categoryId: 'humanos_leis', bloco: 'bloco_3', term: 'Art. 28 da Lei de Drogas (11.343/06)', definition: 'Posse de drogas para consumo pessoal NÃO prevê pena privativa de liberdade.' },
  { id: 'm-dh-3', categoryId: 'humanos_leis', bloco: 'bloco_3', term: 'Pacto de São José da Costa Rica', definition: 'Tratado interamericano que proíbe prisão civil por dívida, ressalvada a de pensão alimentícia.' }
];

export const INITIAL_FLASHCARDS: Flashcard[] = [
  {
    id: 'f-pmpe-1',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    categoryName: 'Direito Constitucional',
    tag: 'Art. 144 CF',
    front: 'Quais são as atribuições constitucionais exclusivas da Polícia Militar segundo o Art. 144, § 5º?',
    back: '1. Polícia Ostensiva\n2. Preservação da Ordem Pública\n* Além de serem forças auxiliares e reserva do Exército (junto aos Corpos de Bombeiros Militares).'
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
    categoryId: 'portugues',
    bloco: 'bloco_1',
    categoryName: 'Língua Portuguesa',
    tag: 'Regência e Crase',
    front: 'Quais são as 4 proibições clássicas do uso de crase mais cobradas pela banca AOCP?',
    back: 'NÃO ocorre crase diante de:\n1. Verbos (ex: disposto a cooperar)\n2. Palavras masculinas (ex: a cavalo, a prazo)\n3. Pronomes pessoais e de tratamento em geral (ex: a ela, a você)\n4. Pronomes indefinidos (ex: a qualquer, a toda)'
  }
];

export const BOSS_ENEMIES: BossEnemy[] = [
  {
    id: 'boss-aocp-1',
    name: 'Banca Examinadora AOCP',
    title: 'Mestre das Pegadinhas de Concurso',
    avatar: '📝',
    maxHp: 150,
    attackPower: 20,
    description: 'Usa enunciados longos com casos concretos e alternativas com pegadinhas sutis de lei seca.',
    weakness: 'Atenção aos detalhes da letra da lei e calma na leitura do comando da questão.'
  },
  {
    id: 'boss-aocp-2',
    name: 'O Fantasma do Ponto de Corte',
    title: 'A Pressão dos 3 Blocos de PE',
    avatar: '⚖️',
    maxHp: 200,
    attackPower: 25,
    description: 'Tenta fazer o candidato esquecer o mínimo de 30% em cada bloco ou zerar uma disciplina.',
    weakness: 'Equilíbrio nos estudos: dominar Português, História de PE, RLM, Informática e Direito igualmente.'
  },
  {
    id: 'boss-aocp-3',
    name: 'O Instrutor do CFSD',
    title: 'Guardião da Farda Pernambucana',
    avatar: '👮‍♂️',
    maxHp: 280,
    attackPower: 32,
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
