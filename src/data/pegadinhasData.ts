export interface PegadinhaItem {
  id: string;
  materia: string;
  titulo: string;
  enunciadoFalsoOuCapcioso: string;
  trechoArmadilha: string; // Trecho exato da pegadinha
  ondeABancaTentouDerrubar: string;
  antidotoTatico: string;
  artigoOuRegra: string;
  bancaFoco: string;
}

export const PEGADINHAS_AOCP_DATABASE: PegadinhaItem[] = [
  {
    id: 'peg-1',
    materia: 'Direito Constitucional',
    titulo: 'A Pegadinha da Inviolabilidade Domiciliar Noturna',
    enunciadoFalsoOuCapcioso: 'A autoridade policial pode, mediante determinação judicial fundamentada, adentrar a casa de qualquer indivíduo durante a noite, sem seu consentimento, para apreender drogas e armas.',
    trechoArmadilha: 'mediante determinação judicial fundamentada (...) durante a noite',
    ondeABancaTentouDerrubar: 'A banca coloca "determinação judicial fundamentada" para dar aparência de legalidade, induzindo o aluno a esquecer que mandado judicial NUNCA pode ser cumprido durante a noite.',
    antidotoTatico: 'Grave a regra: À NOITE, só entra em 3 hipóteses: 1. Flagrante delito; 2. Desastre; 3. Prestar socorro. Determinação judicial é EXCLUSIVAMENTE DURANTE O DIA!',
    artigoOuRegra: 'Art. 5º, XI da Constituição Federal de 1988',
    bancaFoco: 'Instituto AOCP (Cobrado em múltiplos concursos PM e PC)'
  },
  {
    id: 'peg-2',
    materia: 'Raciocínio Lógico (RLM)',
    titulo: 'A Falsa Negação da Proposição "Se P, então Q"',
    enunciadoFalsoOuCapcioso: 'A negação lógica da proposição "Se o policial militar está de serviço, então ele porta arma de fogo" é dada por: "Se o policial militar não está de serviço, então ele não porta arma de fogo".',
    trechoArmadilha: 'Se o policial militar não está de serviço, então...',
    ondeABancaTentouDerrubar: 'O cérebro humano tenta negar uma condicional transformando-a em outra condicional negativa. A banca AOCP adora essa alternativa.',
    antidotoTatico: 'NEGAÇÃO de "Se P, então Q" NUNCA COMEÇA COM "SE"! Aplica-se o MANÉ: Mantém a primeira (P) E nega a segunda (~Q). Negação correta: "O policial está de serviço E não porta arma".',
    artigoOuRegra: 'Lógica Proposicional • Regra do MANÉ [P ^ ~Q]',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-3',
    materia: 'Língua Portuguesa',
    titulo: 'A Pegadinha da Crase Antes de Palavra Feminina no Plural',
    enunciadoFalsoOuCapcioso: 'Está correto o emprego do sinal indicativo de crase na frase: "O comando da PMPE prestou homenagens à todas as praças que se destacaram no combate".',
    trechoArmadilha: 'à todas as praças',
    ondeABancaTentouDerrubar: 'A palavra "praças" é feminina, o que leva o candidato desatento a achar que há crase. Porém, "todas" é pronome indefinido e não aceita artigo feminino singular "a" antes dele.',
    antidotoTatico: 'Mnemônico Tático da AOCP: "A no singular diante de palavra no plural, crase nem a pau!". Além disso, "todas" é pronome indefinido (crase proibida).',
    artigoOuRegra: 'Regência Verbal & Emprego do Acento Grave',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-4',
    materia: 'História de Pernambuco',
    titulo: 'Confusão Mortal: Revolução de 1817 vs Confederação de 1824',
    enunciadoFalsoOuCapcioso: 'Frei Caneca foi o principal líder e mártir da Revolução Pernambucana de 1817, tendo sido fuzilado logo após a proclamação da República de 1817.',
    trechoArmadilha: 'Frei Caneca (...) mártir da Revolução de 1817 (...) fuzilado logo após',
    ondeABancaTentouDerrubar: 'Frei Caneca participou de 1817 (foi preso na Bahia), mas ele foi o GRANDE LÍDER E MÁRTIR FUZILADO na CONFEDERAÇÃO DO EQUADOR DE 1824! O mártir enforcado de 1817 foi Domingos José Martins e Padre João Ribeiro se suicidou.',
    antidotoTatico: '1817 = Contra D. João VI (Revolução Republicana / Criação da Bandeira). 1824 = Contra D. Pedro I (Confederação do Equador / Frei Caneca fuzilado no Forte das 5 Pontas).',
    artigoOuRegra: 'Historiografia Pernambucana • Edital PMPE',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-5',
    materia: 'Legislação Extravagante',
    titulo: 'Abuso de Autoridade e a Divergência de Interpretação',
    enunciadoFalsoOuCapcioso: 'Configura crime de abuso de autoridade a conduta do policial militar que discorda da interpretação jurídica adotada pelo delegado de polícia na lavratura do flagrante.',
    trechoArmadilha: 'Configura crime de abuso de autoridade a conduta (...) que discorda da interpretação',
    ondeABancaTentouDerrubar: 'O candidato leigo confunde rigor policial com abuso. A Lei 13.869/19 veda expressamente o chamado "crime de hermenêutica".',
    antidotoTatico: 'Art. 1º, § 2º da Lei 13.869/19: "A divergência na interpretação de lei ou na avaliação de fatos e provas NÃO configura abuso de autoridade". Além disso, abuso SEMPRE exige DOLO ESPECÍFICO.',
    artigoOuRegra: 'Lei Federal 13.869/2019 (Nova Lei de Abuso)',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-6',
    materia: 'Direito Constitucional',
    titulo: 'Prisão Civil por Dívida e o Falso Depositário Infiel',
    enunciadoFalsoOuCapcioso: 'No Brasil, é admitida a prisão civil por dívida tanto do devedor voluntário e inescusável de pensão alimentícia quanto do depositário infiel de bens públicos.',
    trechoArmadilha: 'quanto do depositário infiel de bens públicos',
    ondeABancaTentouDerrubar: 'O texto literal do Art. 5º, LXVII da CF ainda menciona o depositário infiel, mas o STF editou a Súmula Vinculante 25 com base no Pacto de San José da Costa Rica.',
    antidotoTatico: 'Súmula Vinculante 25: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito". Hoje no Brasil, a ÚNICA prisão civil válida é a do devedor inescusável de alimentos!',
    artigoOuRegra: 'Súmula Vinculante 25 STF & CADH',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-7',
    materia: 'Legislação PMPE',
    titulo: 'Afastamento Total por Luto vs Núpcias no Estatuto',
    enunciadoFalsoOuCapcioso: 'Segundo a Lei Estadual 6.783/74 (Estatuto dos Policiais Militares de PE), o policial tem direito a 10 dias de afastamento total do serviço por motivo de núpcias ou de luto.',
    trechoArmadilha: '10 dias de afastamento total do serviço por motivo de núpcias ou de luto',
    ondeABancaTentouDerrubar: 'A banca troca o prazo de 8 dias (luto e núpcias) pelo prazo de 10 dias (instalação) para confundir o candidato nos detalhes numéricos da lei seca.',
    antidotoTatico: 'Grave a tabela do Estatuto PMPE: Núpcias = 8 dias | Luto = 8 dias | Instalação = até 10 dias | Trânsito = até 30 dias.',
    artigoOuRegra: 'Lei Estadual nº 6.783/1974 (Art. 64)',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-8',
    materia: 'Informática',
    titulo: 'Ransomware vs Phishing na Segurança Policial',
    enunciadoFalsoOuCapcioso: 'Ransomware é um tipo de ataque cibernético baseado em engenharia social que envia mensagens fraudulentas simulando ser de bancos para roubar senhas e dados confidenciais do usuário.',
    trechoArmadilha: 'Ransomware é um tipo de ataque (...) que envia mensagens fraudulentas para roubar senhas',
    ondeABancaTentouDerrubar: 'A banca deu a definição exata de PHISHING (pescaria de dados) e colocou o rótulo de RANSOMWARE (sequestro por criptografia com resgate).',
    antidotoTatico: 'Ransom = Resgate (Criptografa e pede dinheiro). Phishing = Pescaria de dados/senhas falsas. Spyware = Espionagem em silêncio.',
    artigoOuRegra: 'Segurança da Informação • Malwares AOCP',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-9',
    materia: 'Direitos Humanos',
    titulo: 'Natureza Jurídica da Declaração Universal (DUDH 1948)',
    enunciadoFalsoOuCapcioso: 'A Declaração Universal dos Direitos Humanos de 1948 é um tratado internacional com força cogente imediata, tendo sido ratificada como Emenda Constitucional no Brasil.',
    trechoArmadilha: 'é um tratado internacional com força cogente imediata, tendo sido ratificada como Emenda',
    ondeABancaTentouDerrubar: 'A DUDH é uma Resolução da Assembleia Geral da ONU (Resolução 217-A), não um tratado formal, e possui força moral e principiológica universal ("Soft Law"), não tendo sido aprovada pelo rito do Art. 5º, § 3º da CF.',
    antidotoTatico: 'DUDH de 1948 = Resolução da ONU (Soft Law / Recomendação principiológica). Tratados internacionais de Direitos Humanos aprovados em 2 turnos por 3/5 são equivalentes a Emendas Constitucionais.',
    artigoOuRegra: 'DUDH 1948 & Art. 5º, § 3º da CF/88',
    bancaFoco: 'Instituto AOCP'
  },
  {
    id: 'peg-10',
    materia: 'Direito Constitucional',
    titulo: 'Competência da PM no Art. 144: Ostensiva vs Judiciária',
    enunciadoFalsoOuCapcioso: 'Às Polícias Militares cabem as funções de polícia judiciária e a apuração de infrações penais comuns, excetuadas as militares.',
    trechoArmadilha: 'Às Polícias Militares cabem as funções de polícia judiciária e apuração de infrações penais comuns',
    ondeABancaTentouDerrubar: 'A banca inverte a competência da Polícia Civil (judiciária e investigativa comum) com a da Polícia Militar (polícia ostensiva e preservação da ordem pública).',
    antidotoTatico: 'Art. 144, § 5º da CF: À PM cabe a POLÍCIA OSTENSIVA e a PRESERVAÇÃO DA ORDEM PÚBLICA. Polícia judiciária estadual é da POLÍCIA CIVIL!',
    artigoOuRegra: 'Art. 144, § 4º e § 5º da CF/88',
    bancaFoco: 'Instituto AOCP'
  }
];
