import type { QuizQuestion } from '../../types/game';

export const SIMULADO_SEMANA_1: QuizQuestion[] = [
  // ==========================================
  // LÍNGUA PORTUGUESA (BLOCO I)
  // ==========================================
  {
    id: 's1-por-01',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Acentuação Gráfica - Acento Diferencial',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Em "[...] especialistas que têm uma habilidade especial [...]", por que o verbo em destaque está acentuado?',
    options: [
      'Porque se trata de uma palavra que possui apenas uma sílaba.',
      'Porque é uma palavra tônica, diferente de "tem" em "ele tem estudado muito", por exemplo.',
      'Porque a autora cometeu um erro de acentuação gráfica.',
      'Porque ele é pronunciado com o "e" fechado, diferente de "até", por exemplo, que é pronunciado com o "e" aberto.',
      'Porque o termo "especialistas" está no plural.'
    ],
    correctIndex: 4,
    explanation: 'O verbo "ter" (assim como "vir") recebe acento circunflexo na 3ª pessoa do plural do presente do indicativo ("eles têm") para se diferenciar da 3ª pessoa do singular ("ele tem"). Como o sujeito "especialistas" está no plural, o acento é obrigatório.',
    fundamentacaoLegal: 'Gramática Normativa: Regra do acento diferencial de número dos verbos TER e VIR (ele tem / eles têm; ele vem / eles vêm).',
    hint: 'Lembre-se: singular sem acento (ele tem), plural com circunflexo (eles têm).',
    difficulty: 'easy'
  },
  {
    id: 's1-por-02',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Acentuação Gráfica - Proparoxítonas',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Assinale a alternativa em que os termos destacados foram acentuados de acordo com a mesma norma gramatical.',
    options: [
      '"impôs" e "políticas"',
      '"políticas" e "públicas"',
      '"princípio" e "países"',
      '"está" e "saúde"',
      '"até" e "recíproca"'
    ],
    correctIndex: 1,
    explanation: 'As palavras "políticas" (po-lí-ti-cas) e "públicas" (pú-bli-cas) são ambas proparoxítonas (antepenúltima sílaba tônica). No português, TODAS as palavras proparoxítonas são obrigatoriamente acentuadas.',
    fundamentacaoLegal: 'Acordo Ortográfico: Todas as palavras proparoxítonas recebem acento gráfico (ex: médico, público, política).',
    hint: 'Proparoxítonas têm a antepenúltima sílaba mais forte e todas são acentuadas.',
    difficulty: 'easy'
  },
  {
    id: 's1-por-03',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Concordância Verbal com Pronome Relativo QUE',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'A respeito do item em destaque em "Zygmunt Bauman é um dos pensadores contemporâneos que mais têm produzido obras [...]", assinale a alternativa correta.',
    options: [
      'Ele estabelece concordância com o antecedente no plural "pensadores contemporâneos".',
      'Ele está conjugado no modo subjuntivo, indicando a incerteza do autor quanto ao número de obras.',
      'Ele integra uma oração sem sujeito, como em "Tem um cachorro muito bravo no quintal do vizinho".',
      'Ele está sendo utilizado com o mesmo sentido que em "João tem muitos livros em sua casa".',
      'Ele faz parte de uma oração subordinada adjetiva explicativa iniciada por pronome oblíquo.'
    ],
    correctIndex: 0,
    explanation: 'Na estrutura "um dos... que", o pronome relativo "que" refere-se ao substantivo no plural ("pensadores contemporâneos"), fazendo com que o verbo "ter" concorde no plural ("têm" com acento circunflexo).',
    fundamentacaoLegal: 'Sintaxe de Concordância Verbal: Em estruturas "um dos que", a concordância preferencial e legítima se dá no plural com o antecedente.',
    hint: 'O pronome "que" retoma "pensadores contemporâneos" (plural).',
    difficulty: 'medium'
  },
  {
    id: 's1-por-04',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Regras de Acentuação - Proparoxítonas',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Considerando as regras de acentuação dos vocábulos em Língua Portuguesa, assinale a alternativa cujo termo receba acento pelo mesmo motivo que "antropológica" (A família, sob uma perspectiva antropológica...):',
    options: [
      '"família"',
      '"resiliência"',
      '"também"',
      '"empática"',
      '"saudável"'
    ],
    correctIndex: 3,
    explanation: '"Antropológica" é proparoxítona (an-tro-po-ló-gi-ca). "Empática" também é proparoxítona (em-pá-ti-ca). Já "família" e "resiliência" são paroxítonas terminadas em ditongo, "também" é oxítona e "saudável" é paroxítona terminada em -l.',
    fundamentacaoLegal: 'Regra Geral das Proparoxítonas: "an-tro-po-ló-gi-ca" e "em-pá-ti-ca" recaem na mesma regra absoluta.',
    hint: 'Conte as sílabas de trás para frente: última, penúltima, antepenúltima (3ª).',
    difficulty: 'easy'
  },
  {
    id: 's1-por-05',
    categoryId: 'portugues',
    bloco: 'bloco_1',
    materiaNome: 'Língua Portuguesa',
    topicoEdital: 'Regras de Acentuação - Hiatos Tônicos',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Assinale a alternativa correta quanto à acentuação das palavras.',
    options: [
      'A palavra "amazônica" recebe acento circunflexo por ser uma paroxítona terminada em "a".',
      'A palavra "invisíveis" é acentuada por ser uma proparoxítona terminada em ditongo nasal.',
      'A palavra "também" recebe acento por ser uma monossílaba tônica terminada em "m".',
      'O verbo "têm" recebe acento por se tratar de uma palavra paroxítona terminada em "m".',
      'A palavra "saúde" recebe acento por haver um "u" tônico em hiato com a vogal anterior, formando sílaba sozinho.'
    ],
    correctIndex: 4,
    explanation: 'A palavra "saúde" (sa-ú-de) é acentuada pela regra dos hiatos: a vogal "u" é tônica, forma hiato com a vogal anterior e fica sozinha na sílaba (não seguida de nh).',
    fundamentacaoLegal: 'Regra dos Hiatos: Acentuam-se o "i" e o "u" tônicos quando formam hiato com a vogal anterior e estão sozinhos na sílaba ou seguidos de "s".',
    hint: 'Sa-ú-de: o "u" está isolado na sílaba e é a vogal mais forte.',
    difficulty: 'easy'
  },

  // ==========================================
  // LEGISLAÇÃO EXTRAVAGANTE - LEI 8.072/1990 (BLOCO III)
  // ==========================================
  {
    id: 's1-leg-06',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Crimes Hediondos (Lei 8.072/1990) - Rol Taxativo',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: '(INSTITUTO AOCP - 2023 - MPE-RR) Assinale a alternativa que apresenta a hipótese em que todos os crimes são rotulados de hediondos ou equiparados.',
    options: [
      'Homicídio privilegiado, latrocínio, estupro de vulnerável e tortura.',
      'Extorsão qualificada pela restrição da liberdade da vítima, favorecimento da prostituição ou de outra forma de exploração sexual de criança ou adolescente ou de vulnerável, e furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum.',
      'Homicídio qualificado, latrocínio, terrorismo e redução à condição análoga de escravo.',
      'Posse ou porte ilegal de arma de fogo de uso proibido, comércio ilegal de armas de fogo, tráfico internacional de arma de fogo, acessório ou munição e extorsão em todas as suas modalidades.',
      'Peculato mediante fraude, concussão e corrupção passiva qualificada.'
    ],
    correctIndex: 1,
    explanation: 'Na alternativa B, todos os crimes constam taxativamente no art. 1º da Lei 8.072/1990: extorsão com restrição de liberdade (inciso III), exploração sexual de vulnerável (inciso VIII) e furto com emprego de explosivo (inciso IX, inserido pelo Pacote Anticrime). Homicídio privilegiado não é hediondo; escravidão não é hediondo; extorsão simples não é hedionda.',
    fundamentacaoLegal: 'Lei nº 8.072/1990, Art. 1º, incisos III, VIII e IX.',
    hint: 'Atenção às alterações do Pacote Anticrime (Lei 13.964/2019): furto com explosivo agora é hediondo!',
    difficulty: 'hard'
  },
  {
    id: 's1-leg-07',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Crimes Hediondos (Lei 8.072/1990) - Organização Criminosa',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: '(INSTITUTO AOCP - 2022 - PC-GO) Considera-se crime hediondo, tentado ou consumado:',
    options: [
      'organização criminosa, quando direcionada à prática de crime hediondo ou equiparado.',
      'homicídio simples, quando praticado por organização criminosa.',
      'posse ou porte ilegal de arma de fogo de uso permitido.',
      'tráfico de entorpecentes privilegiado.',
      'lesão corporal culposa praticada na direção de veículo automotor.'
    ],
    correctIndex: 0,
    explanation: 'O parágrafo único, inciso V do art. 1º da Lei 8.072/1990 considera hediondo o crime de organização criminosa quando direcionada à prática de crime hediondo ou equiparado. O tráfico privilegiado (art. 33, § 4º da Lei de Drogas) expressamente NÃO é hediondo (art. 112, § 5º da LEP).',
    fundamentacaoLegal: 'Lei 8.072/1990, Art. 1º, Parágrafo único, inciso V.',
    hint: 'Organização criminosa para cometer crimes hediondos também é hedionda.',
    difficulty: 'medium'
  },
  {
    id: 's1-leg-08',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Crimes Hediondos (Lei 8.072/1990) - Roubo Circunstanciado',
    banca: 'Quadrix',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'À luz da Lei n.º 8.072/1990, que dispõe sobre os crimes hediondos, assinale a alternativa correta.',
    options: [
      'Como os crimes de peculato e corrupção passiva são hediondos, não é possível o arbitramento de fiança.',
      'É possível a concessão de graça e indulto àqueles que tenham praticado crimes hediondos.',
      'A pena por crime hediondo será cumprida em regime fechado, vedada a progressão.',
      'É considerado hediondo o crime de roubo circunstanciado pelo emprego de arma de fogo, consumado ou tentado.',
      'A prisão temporária em crime hediondo tem prazo improrrogável de cinco dias.'
    ],
    correctIndex: 3,
    explanation: 'O Pacote Anticrime (Lei 13.964/19) incluiu no art. 1º, II, "b" o roubo circunstanciado pelo emprego de arma de fogo (ou fuzil/arma de uso restrito/proibido) como crime hediondo, consumado ou tentado.',
    fundamentacaoLegal: 'Lei nº 8.072/1990, Art. 1º, inciso II, alínea "b".',
    hint: 'Roubo com arma de fogo agora é expressamente hediondo.',
    difficulty: 'medium'
  },
  {
    id: 's1-leg-09',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Crimes Hediondos (Lei 8.072/1990) - Critério Legal e Exemplos',
    banca: 'FUMARC',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'A Lei 8.072/90 adota o critério legal (numerus clausus). Diante disso, é CORRETO afirmar:',
    options: [
      'Em razão da Lei 13.964/19, os condenados por crimes hediondos passaram a cumprir a pena em regime integralmente fechado.',
      'Os crimes hediondos, assim definidos pela Lei 8.072/90, são insuscetíveis de liberdade provisória.',
      'São exemplos de crimes hediondos o homicídio qualificado, a extorsão mediante sequestro, o estupro e o estupro de vulnerável.',
      'Tráfico de entorpecentes, Terrorismo e Tortura são crimes hediondos em espécie.',
      'A graça e o indulto são admitidos se o condenado for réu primário de bons antecedentes.'
    ],
    correctIndex: 2,
    explanation: 'A alternativa C lista autênticos crimes hediondos previstos no art. 1º da Lei 8.072/90. O regime integralmente fechado é inconstitucional (STF HC 82.959). Tráfico, Terrorismo e Tortura (TTT) são equiparados a hediondos pela CF/88, mas não constam no rol do art. 1º como hediondos próprios.',
    fundamentacaoLegal: 'Lei 8.072/1990, Art. 1º, incisos I, IV, V e VI c/c CF/88 art. 5º, XLIII.',
    hint: 'Homicídio qualificado, extorsão mediante sequestro e estupro são o coração da lei.',
    difficulty: 'medium'
  },
  {
    id: 's1-leg-10',
    categoryId: 'humanos_leis',
    bloco: 'bloco_3',
    materiaNome: 'Legislação & Direitos Humanos',
    topicoEdital: 'Crimes Hediondos - Porte de Arma de Uso Proibido',
    banca: 'FGV',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'José efetuou em 2022 um roubo no meio da rua utilizando uma faca de cozinha. Na mesma ocasião, portava ilegalmente arma de fogo de uso proibido fechada na mochila, não exibida à vítima. Nos termos da Lei nº 8.072/1990, é correto afirmar que:',
    options: [
      'José não praticou nenhum crime hediondo, já que a Lei nº 8.072/1990 abarca somente crimes contra a vida.',
      'José praticou um crime não hediondo e um crime hediondo, já que o crime de roubo mediante ameaça com faca é enumerado na Lei nº 8.072/1990.',
      'José praticou duas modalidades de crimes hediondos, insuscetíveis de graça ou anistia, mas que admitem a fiança.',
      'José praticou duas modalidades de crimes hediondos, insuscetíveis de graça, anistia ou fiança.',
      'José praticou um crime não hediondo e um crime hediondo, já que o crime de porte ilegal de arma de fogo de uso proibido é enumerado na Lei nº 8.072/1990 como uma das espécies de crimes hediondos.'
    ],
    correctIndex: 4,
    explanation: 'O roubo com arma branca (faca) NÃO é crime hediondo (apenas com arma de fogo). Porém, o porte de arma de fogo de uso proibido (art. 16 da Lei 10.826/03) é expressamente crime hediondo conforme o parágrafo único, II do art. 1º da Lei 8.072/90.',
    fundamentacaoLegal: 'Lei nº 8.072/1990, Art. 1º, Parágrafo único, inciso II c/c Art. 1º, inciso II.',
    hint: 'Roubo com faca: crime comum (com causa de aumento). Porte de arma de uso PROIBIDO: hediondo!',
    difficulty: 'hard'
  },

  // ==========================================
  // RACIOCÍNIO LÓGICO - COMBINATÓRIA (BLOCO II)
  // ==========================================
  {
    id: 's1-rlm-11',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Análise Combinatória - Princípio Fundamental e Combinações',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Quer-se formar um grupo de danças com 6 bailarinas, de modo que três delas tenham menos de 18 anos, que uma delas tenha exatamente 18 anos, e que as demais tenham idade superior a 18 anos. Apresentaram-se 12 candidatas com idades de 11 a 22 anos (uma de cada idade). O número de diferentes grupos de dança que podem ser selecionados é igual a:',
    options: [
      '85',
      '220',
      '210',
      '120',
      '150'
    ],
    correctIndex: 2,
    explanation: 'Idades: 11 a 22 (12 candidatas).\n1) Menos de 18 anos: idades {11, 12, 13, 14, 15, 16, 17} = 7 candidatas. Escolhem-se 3: C(7, 3) = (7×6×5)/(3×2×1) = 35.\n2) Exatamente 18 anos: {18} = 1 candidata. Escolhe-se 1: C(1, 1) = 1.\n3) Superior a 18 anos: idades {19, 20, 21, 22} = 4 candidatas. Como o grupo tem 6 e já temos 3+1=4, faltam 2: C(4, 2) = (4×3)/(2×1) = 6.\nTotal pelo Princípio Multiplicativo: 35 × 1 × 6 = 210 grupos.',
    fundamentacaoLegal: 'Cálculo Combinatório: C(n, p) = n! / (p!(n - p)!). Multiplicação dos subgrupos independentes.',
    hint: 'Separe as candidatas nas 3 faixas etárias e multiplique as combinações de cada faixa.',
    difficulty: 'medium'
  },
  {
    id: 's1-rlm-12',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Análise Combinatória - Permutação Simples',
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
    explanation: 'Como o operador já conhece os 5 símbolos específicos e todos são distintos, o problema se resume a ordenar esses 5 símbolos em fila. Isso é uma Permutação Simples de 5 elementos: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 tentativas.',
    fundamentacaoLegal: 'Análise Combinatória: Pn = n! Permutação de n elementos distintos.',
    hint: '5 símbolos distintos sendo ordenados = 5! = 120.',
    difficulty: 'easy'
  },
  {
    id: 's1-rlm-13',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Análise Combinatória - Combinação Completa (com Repetição)',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'De quantos modos podemos comprar três sorvetes em uma sorveteria que os oferece em seis sabores distintos?',
    options: [
      '19',
      '215',
      '120',
      '45',
      '56'
    ],
    correctIndex: 4,
    explanation: 'Podemos escolher sorvetes de sabores repetidos (ex: 3 de chocolate) ou sabores diferentes, e a ordem de compra não importa. Trata-se de Combinação com Repetição (ou Combinação Completa) de n=6 elementos tomados p=3 a 3:\nCR(n, p) = C(n + p - 1, p) = C(6 + 3 - 1, 3) = C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 modos.',
    fundamentacaoLegal: 'Combinatória: Combinação com Repetição CR(n, p) = C(n + p - 1, p).',
    hint: 'Podem ser do mesmo sabor. Aplique a fórmula das barras e estrelas: C(6 + 3 - 1, 3) = C(8, 3).',
    difficulty: 'hard'
  },
  {
    id: 's1-rlm-14',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Geometria Combinatória - Formação de Triângulos',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Em um plano são marcados 25 pontos, dos quais 10 e somente 10 desses pontos são marcados em linha reta. O número de diferentes triângulos que podem ser formados com vértices em quaisquer dos 25 pontos é igual a:',
    options: [
      '2180',
      '1180',
      '2350',
      '2250',
      '3280'
    ],
    correctIndex: 0,
    explanation: 'Para formar um triângulo precisamos de 3 pontos não colineares.\nTotal de maneiras de escolher 3 pontos quaisquer entre os 25: C(25, 3) = (25 × 24 × 23) / (3 × 2 × 1) = 2300.\nPorém, os 10 pontos alinhados na mesma reta não formam triângulos se escolhermos 3 deles: C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1) = 120.\nSubtraindo os casos impossíveis: 2300 - 120 = 2180 triângulos.',
    fundamentacaoLegal: 'Análise Combinatória: Número de triângulos = C(Total, 3) - C(Colineares, 3).',
    hint: 'Calcule o total de triângulos com 25 pontos e subtraia os 3 pontos que caem na reta dos 10 colineares.',
    difficulty: 'medium'
  },
  {
    id: 's1-rlm-15',
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: 'Análise Combinatória - Restrição de Elementos',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'Simulado 1ª Semana',
    question: 'Num posto policial trabalham 5 policiais do sexo feminino e 10 policiais do sexo masculino devendo ficar de plantão sempre 1 policial do sexo feminino e 3 policiais do sexo masculino. Quantos grupos de trabalho podem ser formados, sabendo-se que o policial Emerson e a policial Karla não podem trabalhar juntos?',
    options: [
      '240',
      '564',
      '480',
      '1200',
      '1260'
    ],
    correctIndex: 1,
    explanation: 'Total de plantões possíveis sem restrição:\nFeminino: 1 entre 5 = C(5, 1) = 5.\nMasculino: 3 entre 10 = C(10, 3) = (10 × 9 × 8) / 6 = 120.\nTotal geral = 5 × 120 = 600 grupos.\n\nGrupos onde Karla e Emerson trabalham JUNTOS:\nKarla é a mulher escalada (1 opção).\nEmerson é um dos homens escalados, restando escolher mais 2 homens entre os outros 9: C(9, 2) = (9 × 8) / 2 = 36.\nTotal com ambos juntos = 1 × 36 = 36 grupos.\n\nGrupos válidos (sem os dois juntos) = 600 - 36 = 564 grupos.',
    fundamentacaoLegal: 'Princípio da Exclusão: Total de Casos - Casos Proibidos = Casos Permitidos.',
    hint: 'Total menos o caso em que Karla e Emerson estão juntos: 600 - 36 = 564.',
    difficulty: 'medium'
  }
];
