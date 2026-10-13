import type { QuizQuestion } from '../../types/game';

export const SIMULADO_SEMANA_4: QuizQuestion[] = [
  // ==========================================
  // NOÇÕES DE INFORMÁTICA (BLOCO II)
  // ==========================================
  {
    id: 's4-inf-01',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Placas de Rede e Endereço Físico MAC',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(AOCP) Os computadores comunicam-se entre si e com os demais meios de transmissão de dados por meio de placas de rede, as quais possuem um número físico e único de fábrica denominado:',
    options: [
      'Endereço WWW (World Wide Web).',
      'Endereço IP (Internet Protocol).',
      'Endereço MAC (Media Access Control).',
      'Endereço de e-mail (correio eletrônico).',
      'Endereço DNS (Domain Name System).'
    ],
    correctIndex: 2,
    explanation: 'O endereço MAC (Media Access Control) é o identificador físico exclusivo gravado na memória ROM da placa de rede (NIC) durante a sua fabricação, composto por 48 bits (6 pares hexadecimais), operando na Camada de Enlace (Camada 2 do Modelo OSI).',
    fundamentacaoLegal: 'Padrão IEEE 802: Endereço MAC (Hardware Address) identifica univocamente a interface de rede.',
    hint: 'MAC Address é o endereço físico de 48 bits fixado na placa de rede.',
    difficulty: 'easy'
  },
  {
    id: 's4-inf-02',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Mecanismos de Busca Avançada - Google',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(AOCP) Usando o Google, um usuário pretende encontrar somente arquivos do tipo PDF que contenham a expressão ApexBrasil e que não contenham a expressão franchising. Assinale a opção com o comando exato de busca a ser digitado:',
    options: [
      'ApexBrasil in pdf not franchising',
      'ApexBrasil in pdf exclude franchising',
      'ApexBrasil filetype:pdf -franchising',
      'ApexBrasil file:pdf not franchising',
      'ApexBrasil format:pdf ~franchising'
    ],
    correctIndex: 2,
    explanation: 'No buscador Google, o operador "filetype:extensao" restringe os resultados ao formato de arquivo indicado (ex: filetype:pdf), e o operador de subtração/hífen colado ao termo ("-termo") exclui os resultados que contenham aquela palavra.',
    fundamentacaoLegal: 'Operadores de Busca do Google: filetype:pdf e sinal de menos (-) para exclusão booleana.',
    hint: 'filetype:pdf para o formato de arquivo e sinal de menos (-) para excluir a palavra.',
    difficulty: 'easy'
  },
  {
    id: 's4-inf-03',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Busca Avançada no Google - Operadores Booleanos',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(AOCP) A busca avançada do Google pode ser utilizada para refinar resultados com operadores lógicos em maiúsculas. Qual, dentre as alternativas, apresenta dois operadores booleanos válidos aceitos pelo Google?',
    options: [
      '"AND" e "extensão:"',
      '"OR" e "AND"',
      '"extensão:" e "naurl:"',
      '"AND" e "NOT"',
      '"OR" e "NOT"'
    ],
    correctIndex: 1,
    explanation: 'O Google suporta formalmente os operadores lógicos booleanos "OR" (para buscar um termo ou outro) e "AND" (para conjunção de termos, embora o AND seja o padrão implícito no espaço entre termos).',
    fundamentacaoLegal: 'Sintaxe Oficial de Busca Google: Operadores Lógicos OR e AND (em letras maiúsculas).',
    hint: 'Operadores lógicos padrão em pesquisas são OR e AND.',
    difficulty: 'medium'
  },
  {
    id: 's4-inf-04',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Serviços e Protocolos de Rede - Servidor DHCP',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(AOCP) O departamento de TI de uma empresa implementou um novo servidor DHCP (Dynamic Host Configuration Protocol). Qual é a função primária de um servidor DHCP?',
    options: [
      'Filtrar o tráfego de rede com base em regras de firewall e portas.',
      'Fornecer endereços IP dinamicamente aos dispositivos na rede.',
      'Armazenar em cache e controlar o acesso a páginas web.',
      'Autenticar e autorizar credenciais e senhas na rede interna.',
      'Oferecer serviços de resolução de nomes de domínio (DNS).'
    ],
    correctIndex: 1,
    explanation: 'O protocolo DHCP (Dynamic Host Configuration Protocol) tem a função primordial de atribuir automaticamente configurações de rede IP (endereço IP, máscara de sub-rede, gateway padrão e DNS) para dispositivos que se conectam à rede local.',
    fundamentacaoLegal: 'RFC 2131 (DHCP Specification): Atribuição dinâmica e automática de configurações IPv4.',
    hint: 'DHCP = Atribuição dinâmica e automática de endereços IP.',
    difficulty: 'easy'
  },
  {
    id: 's4-inf-05',
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: 'Gerenciamento de Redes - Protocolo SNMP',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(AOCP) O protocolo comumente utilizado para monitoramento e gerenciamento de dispositivos e armazenamento em uma rede corporativa SAN (Storage Area Network) é o:',
    options: [
      'SNMP.',
      'DHCP.',
      'SMTP.',
      'POP3.',
      'NNTP.'
    ],
    correctIndex: 0,
    explanation: 'O SNMP (Simple Network Management Protocol) é o protocolo padrão da Camada de Aplicação utilizado para monitorar, coletar métricas e gerenciar dispositivos de rede (roteadores, switches, servidores e storages SAN).',
    fundamentacaoLegal: 'RFC 1157: SNMP (Simple Network Management Protocol) - Gerenciamento de ativos de rede.',
    hint: 'SNMP = Simple Network MANAGEMENT Protocol (Protocolo Simples de Gerenciamento de Rede).',
    difficulty: 'medium'
  },

  // ==========================================
  // DIREITO CONSTITUCIONAL (BLOCO III)
  // ==========================================
  {
    id: 's4-con-06',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Direitos e Garantias Fundamentais - Princípio da Anterioridade e Irretroatividade Penal',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(Instituto AOCP - 2019 - UFRB) Dentre os direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa equivalente ao texto constitucional:',
    options: [
      'É reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados a plenitude de defesa, o sigilo das votações, a soberania dos veredictos e a competência para o julgamento dos crimes dolosos contra a vida.',
      'A lei penal retroagirá, salvo para beneficiar o réu.',
      'Ninguém será privado da liberdade ou de seus bens sem o devido processo legal, exceto por medida cautelar determinada pela autoridade policial.',
      'São inadmissíveis, no processo, as provas obtidas por meios ilícitos, salvo as que forem indiretamente obtidas de boa-fé.',
      'A lei penal nunca retroagirá sob nenhuma circunstância.'
    ],
    correctIndex: 1,
    explanation: 'O Art. 5º, inciso XL da CF/88 estabelece fielmente: "a lei penal não retroagirá, SALVO PARA BENEFICIAR O RÉU". A alternativa B traz o princípio da retroatividade benéfica. Na A, o enunciado pedia locomoção/garantias equivalentes e o gabarito oficial da banca pontuou a formulação da lei penal mais benéfica.',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XL.',
    hint: 'Lei penal mais benigna (novatio legis in mellius) sempre retroage em benefício do réu.',
    difficulty: 'easy'
  },
  {
    id: 's4-con-07',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Artigo 5º da CF/88 - Irretroatividade da Lei Penal (Assertiva Incorreta)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(Instituto AOCP - 2023 - MPE MS) De acordo com o artigo 5º da Constituição Federal de 1988, é INCORRETO afirmar que:',
    options: [
      'é livre a locomoção no território nacional em tempo de paz, podendo qualquer pessoa entrar, permanecer ou dele sair com seus bens.',
      'todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, exigido apenas prévio aviso à autoridade competente.',
      'a lei penal não retroagirá, ainda que para beneficiar o réu.',
      'é plena a liberdade de associação para fins lícitos, vedada a de caráter paramilitar.',
      'o Estado prestará assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos.'
    ],
    correctIndex: 2,
    explanation: 'A assertiva C está flagrantemente incorreta, pois a Constituição determina expressamente no art. 5º, XL que a lei penal RETROAGIRÁ SIM quando for para beneficiar o réu ("salvo para beneficiar o réu").',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XL.',
    hint: 'A lei penal retroage SIM se for benéfica ao réu!',
    difficulty: 'easy'
  },
  {
    id: 's4-con-08',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Crimes Inafiançáveis e Insuscetíveis de Graça ou Anistia (TTH)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(Instituto AOCP - 2013 - IBC) Preencha as lacunas:\n"De acordo com a Constituição do Brasil, a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da ______, o ______, o ______ e os definidos como crimes hediondos..."',
    options: [
      'improbidade administrativa / tráfico ilícito de entorpecentes / terrorismo.',
      'tortura / racismo / terrorismo.',
      'tortura / tráfico ilícito de entorpecentes e drogas afins / terrorismo.',
      'tortura / tráfico ilícito de entorpecentes e drogas afins / racismo.',
      'improbidade administrativa / tráfico ilícito de entorpecentes / racismo.'
    ],
    correctIndex: 2,
    explanation: 'Conforme o Art. 5º, XLIII da CF/88: são inafiançáveis e insuscetíveis de graça ou anistia o TTH: Tortura, Tráfico ilícito de entorpecentes e drogas afins, e Terrorismo (mais os hediondos). O Racismo (XLII) e a Ação de Grupos Armados (XLIV) são imprescritíveis, mas não integram o grupo do TTH da graça/anistia.',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XLIII.',
    hint: 'Mnemônico TTH: Tortura, Tráfico e Terrorismo (inafiançáveis + sem graça/anistia).',
    difficulty: 'medium'
  },
  {
    id: 's4-con-09',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Sucessão de Bens de Estrangeiros (CF/88 Art. 5º, XXXI)',
    banca: 'AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(AOCP - 2018 - TRT 1) De acordo com o que dispõe a Constituição Federal acerca dos direitos e deveres individuais e coletivos, assinale a alternativa correta.',
    options: [
      'Ninguém será privado de direitos por motivo de crença religiosa em qualquer hipótese.',
      'A sucessão de bens de estrangeiros situados no País será regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do "de cujus".',
      'É assegurado a todos o acesso à informação e vedado o sigilo da fonte, ainda que necessário ao exercício profissional.',
      'As associações só poderão ter as suas atividades compulsoriamente suspensas por decisão judicial transitada em julgado.',
      'Nenhuma pena passará da pessoa do condenado, não podendo a obrigação de reparar o dano ser estendida aos sucessores.'
    ],
    correctIndex: 1,
    explanation: 'A alternativa B transcreve com exatidão o Art. 5º, XXXI da CF/88: "a sucessão de bens de estrangeiros situados no País será regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do de cujus".',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XXXI.',
    hint: 'Sucessão de estrangeiros: aplica-se a lei brasileira a menos que a lei pessoal do falecido seja mais benéfica.',
    difficulty: 'medium'
  },
  {
    id: 's4-con-10',
    categoryId: 'constitucional',
    bloco: 'bloco_3',
    materiaNome: 'Direito Constitucional',
    topicoEdital: 'Direito de Herança (CF/88 Art. 5º, XXX)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(Instituto AOCP - 2018 - ITEP RN) O artigo 5º da Constituição Federal enumera direitos individuais e coletivos fundamentais. Assinale a alternativa que apresenta um direito constitucionalmente assegurado no referido artigo:',
    options: [
      'É garantido o direito de herança.',
      'Todos têm direito a receber dos órgãos públicos inclusive informações de caráter sigiloso imprescindíveis à segurança do Estado.',
      'A lei excluirá da apreciação do Poder Judiciário a lesão ou ameaça a direito quando não houver fundamento prévio.',
      'É assegurado aos presos apenas o respeito à integridade física, desconsiderando a integridade moral.',
      'São plenamente admissíveis no processo as provas obtidas por meios ilícitos.'
    ],
    correctIndex: 0,
    explanation: 'O Art. 5º, inciso XXX da CF/88 declara categoricamente: "é garantido o direito de herança". As informações sigilosas imprescindíveis à segurança do Estado são exceção ao acesso (XXXIII); a lei não excluirá lesão da apreciação judicial (XXXV); e preserva-se a integridade física e moral dos presos (XLIX).',
    fundamentacaoLegal: 'CF/88, Art. 5º, inciso XXX.',
    hint: 'Art. 5º, XXX: "é garantido o direito de herança". Curto, direto e constitucional.',
    difficulty: 'easy'
  },

  // ==========================================
  // LÍNGUA PORTUGUESA (BLOCO I)
  // ==========================================
  {
    id: 's4-por-11',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Colocação Pronominal - Próclise Obrigatória',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Assinale a alternativa em que a ÚNICA colocação pronominal permitida pela norma-padrão é a anteposição ao verbo (próclise):',
    options: [
      '"Exercitar a mente ativa é o caminho para mantê-la saudável".',
      '"[...] pode nos ajudar a manter a mente saudável.".',
      '"[...] a televisão se tornou objeto de discussões [...]"',
      '"Fazer uso dos recursos que a conectividade com o conhecimento nos traz [...]".',
      '"Com o computador deu-se o mesmo [...]".'
    ],
    correctIndex: 3,
    explanation: 'Na frase "Fazer uso dos recursos que a conectividade com o conhecimento nos traz", o pronome relativo "que" é palavra atrativa obrigatória, exercendo atração sobre o pronome oblíquo "nos" para antes do verbo "traz" (próclise obrigatória). Nas demais frases temos próclise ou ênclise facultativas, ou ênclise obrigatória em início de período.',
    fundamentacaoLegal: 'Sintaxe de Colocação Pronominal: Pronomes relativos são fatores atrativos de próclise.',
    hint: 'Pronome relativo "que" atrai obrigatoriamente o pronome oblíquo para a frente do verbo.',
    difficulty: 'medium'
  },
  {
    id: 's4-por-12',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Coesão Textual - Referenciação Pronominal',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'No texto sobre dialetos das aves: "Galinhas brasileiras e chinesas provavelmente não pertencem à mesma linhagem. E pequenas variações anatômicas significam que elas vão cacarejar diferente." O pronome "elas" faz referência à expressão:',
    options: [
      '"pequenas variações anatômicas".',
      '"variações".',
      '"Galinhas brasileiras".',
      '"chinesas".',
      '"Galinhas brasileiras e chinesas".'
    ],
    correctIndex: 4,
    explanation: 'O pronome "elas" retoma anaforicamente o sujeito composto da frase anterior: "Galinhas brasileiras e chinesas", que são os seres vivos cujas vocalizações e variações anatômicas foram mencionadas.',
    fundamentacaoLegal: 'Coesão Referencial Anafórica: Retomada do núcleo referencial composto.',
    hint: 'Quem cacareja diferente? Tanto as brasileiras quanto as chinesas (ambas juntas).',
    difficulty: 'easy'
  },
  {
    id: 's4-por-13',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Colocação Pronominal - Possibilidade de Ênclise',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Assinale a alternativa em que o pronome átono pode ser legitimamente movido para a posição enclítica ao verbo:',
    options: [
      '"[...] quando se fala do trabalho [...]".',
      '"Essa tese se desdobra em quatro domínios [...]".',
      '"[...] diversas contradições que se observam [...]".',
      '"[...] quando se considera o processo de produção do conhecimento [...]".',
      '"[...] o que se chama de centralidade epistemológica do trabalho."'
    ],
    correctIndex: 1,
    explanation: 'Em "Essa tese se desdobra", a frase se inicia com o sujeito explícito ("Essa tese") sem qualquer palavra atrativa (conjunção subordinativa, advérbio ou pronome relativo). Portanto, a colocação é FACULTATIVA: pode ser "se desdobra" (próclise) ou "desdobra-se" (ênclise). Nas alternativas A, C, D e E há fatores atrativos ("quando", "que") que exigem próclise absoluta.',
    fundamentacaoLegal: 'Gramática Normativa: Havendo sujeito explícito sem fator de atração, o uso da próclise ou da ênclise é facultativo.',
    hint: 'Sem palavra atrativa antes do verbo, "se desdobra" pode virar "desdobra-se".',
    difficulty: 'medium'
  },
  {
    id: 's4-por-14',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Morfossintaxe - O "QUE" como Pronome Relativo',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Em qual alternativa o vocábulo "que" é classificado morfologicamente como pronome relativo?',
    options: [
      '"[...] podemos tirar conclusões que nos ajudem a aterrissar na realidade [...]".',
      '"[...] sabemos que nunca vamos dedicar muita energia [...]".',
      '"[...] mesmo que seja um personagem de ficção.".',
      '"O que pode extrair daquilo?".',
      '"[...] lembramos que gostávamos de aventuras [...]".'
    ],
    correctIndex: 0,
    explanation: 'Em "conclusões que nos ajudem", o termo "que" pode ser substituído por "as quais" ("conclusões as quais nos ajudem"), retomando o substantivo antecedente "conclusões", exercendo função de pronome relativo. Em B e E é conjunção integrante; em C faz parte de locução conjuntiva concessiva ("mesmo que").',
    fundamentacaoLegal: 'Morfologia: O "que" é pronome relativo quando retoma um termo antecedente e equivale a "o qual / a qual / os quais / as quais".',
    hint: 'Substitua por "as quais": conclusões as quais nos ajudem.',
    difficulty: 'easy'
  },
  {
    id: 's4-por-15',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Semântica das Locuções - Sentido de "A FIM DE"',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Em: "A única diferença é que na última, a pessoa consegue dominar suas próprias emoções a fim de ter relações melhores com as outras pessoas", assinale a afirmativa correta:',
    options: [
      'O "a" em "a fim" deveria estar junto da palavra "fim" (afim), tratando-se de desvio de grafia.',
      'Em "a fim", o "a" antecede uma palavra masculina, logo é unicamente preposição.',
      'Em "a situações", o "a" deveria estar acentuado com crase obrigatória.',
      '"a situações" complementa a ideia do verbo, sendo o "a" artigo definido feminino.',
      '"A fim de" poderia ser perfeitamente substituída pela preposição "para", pois indica ideia de finalidade.'
    ],
    correctIndex: 4,
    explanation: 'A locução conjuntiva "a fim de" possui valor final (indica objetivo, finalidade) e equivale perfeitamente à preposição "para" ("para ter relações melhores"). Já "afim" junto significa afinidade ou semelhança.',
    fundamentacaoLegal: 'Semântica: "A fim de" (locução que indica finalidade = para); "Afim" (adjetivo que indica afinidade).',
    hint: '"A fim de" separado = objetivo, finalidade (para).',
    difficulty: 'easy'
  },

  // ==========================================
  // RACIOCÍNIO LÓGICO (BLOCO II)
  // ==========================================
  {
    id: 's4-rlm-16',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Negação de Proposições Compostas - Conjunção (Lei de De Morgan)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Assinale a alternativa que apresenta a negação correta da proposição composta: "Mateus comprou um carro de cor vermelha e alugou uma moto de 500 cilindradas".',
    options: [
      'Mateus comprou um carro de cor vermelha ou não alugou uma moto de 500 cilindradas.',
      'Mateus não comprou um carro de cor vermelha ou não alugou uma moto de 500 cilindradas.',
      'Se Mateus comprou um carro de cor vermelha, então não alugou uma moto de 500 cilindradas.',
      'Mateus não comprou um carro de cor vermelha e não alugou uma moto de 500 cilindradas.',
      'Mateus não comprou um carro de cor vermelha ou alugou uma moto de 500 cilindradas.'
    ],
    correctIndex: 1,
    explanation: 'Pela Lei de De Morgan, para negar a conjunção "P e Q", nega-se a primeira (~P), nega-se a segunda (~Q) e troca-se o "e" pelo "ou": ~(P ∧ Q) ≡ ~P ∨ ~Q.\nResultado: "Mateus não comprou um carro de cor vermelha OU não alugou uma moto de 500 cilindradas".',
    fundamentacaoLegal: 'Leis de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.',
    hint: 'Nega a 1ª, troca E por OU, e nega a 2ª.',
    difficulty: 'easy'
  },
  {
    id: 's4-rlm-17',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Negação da Condicional - Regra do MANÉ',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Considere a afirmação: "Se Jonas é um soldado então é forte". A negação dessa afirmação é:',
    options: [
      'Jonas é um soldado e não é forte.',
      'Se Jonas não é um soldado então é forte.',
      'Se Jonas é um soldado então não é forte.',
      'Se Jonas não é um soldado então não é forte.',
      'Se Jonas não é forte então não é um soldado.'
    ],
    correctIndex: 0,
    explanation: 'A negação da condicional (P → Q) é dada pela regra do MANÉ: Mantém a primeira (P) E Nega a segunda (~Q): ~(P → Q) ≡ P ∧ ~Q.\nLogo: "Jonas é um soldado E não é forte".',
    fundamentacaoLegal: 'Lógica Proposicional: ~(P → Q) ≡ P ∧ ~Q.',
    hint: 'Mnemônico MANÉ: MAntém a primeira E NEga a segunda.',
    difficulty: 'easy'
  },
  {
    id: 's4-rlm-18',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Negação de Conjunção (De Morgan)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'A negação da seguinte proposição composta: "O dinheiro é perigoso e ser econômico é importante", é:',
    options: [
      'O dinheiro não é perigoso e ser econômico não é importante.',
      'O dinheiro não é perigoso ou ser econômico não é importante.',
      'O dinheiro é importante e ser econômico é perigoso.',
      'O dinheiro não é importante e ser econômico não é perigoso.',
      'Ser econômico não é perigoso se, e somente se, o dinheiro não é perigoso.'
    ],
    correctIndex: 1,
    explanation: 'Negação de (P ∧ Q): nega a primeira, troca o conectivo "e" pelo "ou", e nega a segunda: ~(P ∧ Q) ≡ ~P ∨ ~Q.\n"O dinheiro não é perigoso OU ser econômico não é importante".',
    fundamentacaoLegal: 'Primeira Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.',
    hint: 'Negação do E vira OU com os dois lados negados.',
    difficulty: 'easy'
  },
  {
    id: 's4-rlm-19',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Negação de Disjunção Inclusiva (De Morgan)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'A negação da proposição composta: "Sistema financeiro move o mundo ou a balança comercial está em alta", é:',
    options: [
      'Sistema financeiro não move o mundo ou a balança comercial não está em alta.',
      'Sistema financeiro está em alta ou a balança comercial move o mundo.',
      'Sistema financeiro não está em alta e a balança comercial não move o mundo.',
      'Sistema financeiro não move o mundo e a balança comercial não está em alta.',
      'A balança comercial não move o mundo em alta e o sistema financeiro não está em alta.'
    ],
    correctIndex: 3,
    explanation: 'Pela Segunda Lei de De Morgan, para negar a disjunção "P ou Q", nega-se a primeira (~P), nega-se a segunda (~Q) e troca-se o "ou" pelo "e": ~(P ∨ Q) ≡ ~P ∧ ~Q.\n"Sistema financeiro não move o mundo E a balança comercial não está em alta".',
    fundamentacaoLegal: 'Segunda Lei de De Morgan: ~(P ∨ Q) ≡ ~P ∧ ~Q.',
    hint: 'Negação do OU vira E com ambos negados.',
    difficulty: 'easy'
  },
  {
    id: 's4-rlm-20',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Equivalência de Disjunção para Condicional',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Assinale a alternativa que representa uma sentença logicamente equivalente a "Joaquim não é otimista ou Ana é rude":',
    options: [
      'Se Ana é rude, então Joaquim é otimista.',
      'Se Joaquim é otimista, então Ana é rude.',
      'Se Joaquim é otimista, então Ana não é rude.',
      'Se Joaquim não é otimista, então Ana não é rude.',
      'Se Ana não é rude, então Joaquim é otimista.'
    ],
    correctIndex: 1,
    explanation: 'Temos uma disjunção (~P ∨ Q). A equivalência em forma condicional é (P → Q), pois negar o antecedente (~P) resulta em P.\nLogo, "Joaquim não é otimista OU Ana é rude" equivale a: "Se Joaquim é otimista, então Ana é rude".',
    fundamentacaoLegal: 'Lógica Proposicional: (~P ∨ Q) ≡ (P → Q).',
    hint: 'Tira a negação do primeiro termo e transforma em condicional "Se... então...".',
    difficulty: 'medium'
  },

  // ==========================================
  // LEGISLAÇÃO EXTRAVAGANTE - ABUSO DE AUTORIDADE (BLOCO III)
  // ==========================================
  {
    id: 's4-leg-21',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Abuso de Autoridade (Lei 13.869/2019) - Penas Restritivas',
    banca: 'CESPE / CEBRASPE',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(CESPE - PGM - SP) Em relação aos crimes de abuso de autoridade (Lei 13.869/2019), assinale a opção correta.',
    options: [
      'A divergência na interpretação de lei ou na avaliação da prova configura abuso de autoridade.',
      'São penas restritivas de direitos a prestação de serviços à comunidade ou a entidades públicas e a suspensão temporária e sem vencimentos do cargo, função ou mandato, as quais podem ser aplicadas de forma autônoma ou cumulativa.',
      'Apenas membros de Poderes podem ser sujeitos ativos de tais infrações penais, excluída a possibilidade da prática por procuradores municipais.',
      'A ação penal nos crimes de abuso de autoridade é pública condicionada à representação.',
      'A perda do cargo público e a inabilitação temporária para o exercício de função pública são efeitos automáticos da condenação.'
    ],
    correctIndex: 1,
    explanation: 'O Art. 5º da Lei 13.869/2019 estabelece que as penas restritivas de direitos substitutivas das privativas de liberdade são: I - prestação de serviços à comunidade; II - suspensão do exercício do cargo, função ou mandato pelo prazo de 1 a 6 meses, sem vencimentos; podendo ser aplicadas de forma autônoma ou cumulativa. A divergência hermenêutica não é crime (art. 1º, § 2º); a ação penal é pública incondicionada (art. 3º); e os efeitos da condenação não são automáticos (art. 4º, parágrafo único).',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Art. 5º, incisos I e II.',
    hint: 'Penas restritivas de direitos do abuso de autoridade: serviços à comunidade e suspensão sem vencimentos.',
    difficulty: 'medium'
  },
  {
    id: 's4-leg-22',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Abuso de Autoridade - Condutas Vedadas',
    banca: 'IBFC',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(IBFC - Agente de Segurança) A Lei nº 13.869/2019 pune condutas abusivas praticadas por agentes públicos. Assinale a alternativa INCORRETA quanto às condutas típicas da lei:',
    options: [
      'Configurará abuso de autoridade constranger detento a submeter-se a situação vexatória ou a constrangimento não autorizado em lei.',
      'Configurará abuso de autoridade constranger a depor, sob ameaça de prisão, pessoa com dever de resguardar sigilo profissional.',
      'Configurará abuso de autoridade constranger depoente, prosseguindo com seu interrogatório, quando este tenha decidido exercer o direito ao silêncio.',
      'Configurará abuso de autoridade o ato de constranger depoente a prosseguir seu depoimento, ainda que na presença de seu defensor, sempre que o mesmo optar pela presença de advogado.',
      'Configurará crime de abuso de autoridade decretar medida de privação da liberdade em manifesta desconformidade com as hipóteses legais.'
    ],
    correctIndex: 3,
    explanation: 'A alternativa D está incorreta e mal formulada: o crime do Art. 15, parágrafo único, II é prosseguir com o interrogatório de quem TENHA OPTADO por ser assistido por advogado SEM a presença do defensor! Se o defensor ESTIVER PRESENTE, não há tipicidade do crime de constrangimento por falta de patrono.',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Art. 15, Parágrafo único, inciso II.',
    hint: 'O crime ocorre se a autoridade continuar ouvindo a pessoa SEM a presença de advogado quando ela exigiu assistência.',
    difficulty: 'hard'
  },
  {
    id: 's4-leg-23',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Abuso de Autoridade - Cumulação de Penas Restritivas',
    banca: 'FUNDATEC',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(FUNDATEC - 2023) Acerca das disposições legais sobre os crimes de abuso de autoridade (Lei 13.869/2019), assinale a alternativa INCORRETA.',
    options: [
      'As penas restritivas de direito previstas na lei de abuso de autoridade não podem ser aplicadas cumuladamente.',
      'É sujeito ativo do crime de abuso de autoridade qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional.',
      'Para que a condenação por crime de abuso de autoridade acarrete a perda do cargo público, faz-se necessária a ocorrência de reincidência específica no crime de abuso de autoridade.',
      'Caracteriza o crime de violência institucional submeter a vítima de infração penal a procedimentos desnecessários, repetitivos ou invasivos que a levem a reviver sem estrita necessidade a situação violenta.',
      'Admite-se ação penal privada subsidiária da pública se esta não for oferecida no prazo legal.'
    ],
    correctIndex: 0,
    explanation: 'A alternativa A é incorreta porque o Art. 5º, parágrafo único da Lei 13.869/2019 afirma taxativamente: "As penas restritivas de direitos podem ser aplicadas de forma autônoma ou CUMULATIVAMENTE". Todas as outras alternativas (B, C, D e E) são cópias fiéis dos artigos 2º, 4º, 15-A e 3º da lei.',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Art. 5º, Parágrafo único.',
    hint: 'As penas restritivas de direitos PODEM ser aplicadas cumulativamente sim.',
    difficulty: 'medium'
  },
  {
    id: 's4-leg-24',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Abuso de Autoridade - Assertivas sobre Efeitos e Ação Penal',
    banca: 'FUNDEPES',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: 'Dadas as afirmativas sobre a Lei de Abuso de Autoridade (Lei nº 13.869/2019):\nI. Considera-se sujeito ativo qualquer agente público apenas se exercer mandato ou cargo mediante remuneração.\nII. Em nenhuma hipótese se admite ação penal privada caso a pública não tenha sido intentada.\nIII. A perda do cargo é condicionada à reincidência em crime de abuso de autoridade e não é automática, devendo ser motivada.\nIV. Faz coisa julgada no cível e administrativo a sentença penal que reconhecer excludente de ilicitude (legítima defesa, estrito cumprimento do dever etc.).\nEstão corretas:',
    options: [
      'III, apenas.',
      'I e II, apenas.',
      'III e IV, apenas.',
      'I, II e IV, apenas.',
      'I, II, III e IV.'
    ],
    correctIndex: 2,
    explanation: 'I. Falso: abrange quem exerce com ou SEM remuneração (art. 2º).\nII. Falso: admite ação penal privada subsidiária da pública se o MP não agir no prazo (art. 3º, § 1º).\nIII. Verdadeiro: perda do cargo exige reincidência específica e motivação expressa na sentença (art. 4º, parágrafo único).\nIV. Verdadeiro: excludentes de ilicitude reconhecidas no juízo penal fazem coisa julgada nas esferas cível e administrativa (art. 8º).\nEstão corretas: III e IV.',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Arts. 2º, 3º, 4º e 8º.',
    hint: 'Perda do cargo exige reincidência específica e decisão motivada; excludentes de ilicitude fazem coisa julgada no cível e administrativo.',
    difficulty: 'hard'
  },
  {
    id: 's4-leg-25',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Lei de Abuso de Autoridade - Sanções Civis e Administrativas',
    banca: 'Instituto Access',
    simuladoOrigem: 'Simulado 4ª Semana',
    question: '(Instituto Access - 2023) Com base na Lei 13.869/19, analise as afirmativas no tocante às sanções civis ou administrativas:\nI. As notícias de crimes que descreverem falta funcional serão informadas à autoridade competente com vistas à apuração.\nII. As responsabilidades civil e administrativa são totalmente dependentes da criminal em todos os casos.\nIII. Faz coisa julgada em âmbito cível, assim como no administrativo-disciplinar, a sentença penal que reconhecer ter sido o ato praticado em estado de necessidade, legítima defesa, estrito cumprimento de dever legal ou exercício regular de direito.\nAssinale a opção correta:',
    options: [
      'se apenas as afirmativas I e II estiverem corretas.',
      'se apenas as afirmativas I e III estiverem corretas.',
      'se apenas as afirmativas II e III estiverem corretas.',
      'se nenhuma afirmativa estiver correta.',
      'se todas as afirmativas estiverem corretas.'
    ],
    correctIndex: 1,
    explanation: 'O Art. 6º prevê a remessa das informações sobre falta funcional (I verdadeira). O Art. 7º estipula que as responsabilidades são INDEPENDENTES da criminal em regra (II falsa). E o Art. 8º determina expressamente a eficácia de coisa julgada das excludentes de ilicitude (III verdadeira). Logo, apenas I e III estão corretas.',
    fundamentacaoLegal: 'Lei nº 13.869/2019, Arts. 6º, 7º e 8º.',
    hint: 'Regra geral: esferas cível, administrativa e penal são INDEPENDENTES, salvo quando o juiz criminal reconhece excludente de ilicitude.',
    difficulty: 'medium'
  }
];
