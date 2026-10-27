export interface WordSearchPathCell {
  row: number;
  col: number;
}

export interface MnemonicItem {
  code: string;
  text: string;
}

export interface WordSearchItem {
  id: string;
  term: string;
  displayTerm: string;
  clue: string;
  explanation: string;
  mnemonicItems?: MnemonicItem[];
  bancaPegadinha?: string;
  category?: string;
  start: WordSearchPathCell;
  end: WordSearchPathCell;
  path: WordSearchPathCell[];
}

export interface WordSearchBoard {
  id: string;
  title: string;
  theme: string;
  badge: string;
  xpReward: number;
  difficulty: 'facil' | 'medio' | 'dificil' | 'dificilimo';
  size: number;
  grid: string[][];
  words: WordSearchItem[];
}

export const WORD_SEARCH_BOARDS: WordSearchBoard[] = [
  {
    "id": "ws_1_mnemonicos",
    "title": "Missão 1: Mnemônicos & Princípios Fundamentais",
    "theme": "CF/88 Art. 1º e 3º • Fundamentos vs Objetivos da República",
    "badge": "Mnemônicos 💡",
    "xpReward": 200,
    "difficulty": "facil",
    "size": 13,
    "grid": [
      [
        "Z",
        "N",
        "L",
        "B",
        "A",
        "A",
        "T",
        "N",
        "P",
        "O",
        "P",
        "D",
        "S"
      ],
      [
        "S",
        "O",
        "B",
        "E",
        "R",
        "A",
        "N",
        "I",
        "A",
        "L",
        "L",
        "E",
        "O"
      ],
      [
        "M",
        "D",
        "F",
        "H",
        "L",
        "S",
        "A",
        "C",
        "A",
        "V",
        "U",
        "Q",
        "L"
      ],
      [
        "O",
        "C",
        "L",
        "L",
        "D",
        "O",
        "E",
        "O",
        "V",
        "A",
        "R",
        "L",
        "I"
      ],
      [
        "F",
        "I",
        "N",
        "S",
        "I",
        "C",
        "C",
        "N",
        "V",
        "A",
        "A",
        "E",
        "D"
      ],
      [
        "M",
        "D",
        "V",
        "T",
        "G",
        "I",
        "E",
        "G",
        "O",
        "A",
        "L",
        "O",
        "A"
      ],
      [
        "S",
        "A",
        "I",
        "P",
        "N",
        "D",
        "D",
        "A",
        "C",
        "E",
        "I",
        "I",
        "R"
      ],
      [
        "V",
        "D",
        "I",
        "P",
        "I",
        "I",
        "E",
        "E",
        "E",
        "V",
        "S",
        "L",
        "I"
      ],
      [
        "D",
        "A",
        "P",
        "D",
        "D",
        "V",
        "Z",
        "R",
        "I",
        "N",
        "M",
        "E",
        "A"
      ],
      [
        "A",
        "N",
        "I",
        "Z",
        "A",
        "A",
        "C",
        "P",
        "V",
        "D",
        "O",
        "P",
        "M"
      ],
      [
        "U",
        "I",
        "I",
        "E",
        "D",
        "P",
        "L",
        "R",
        "C",
        "A",
        "S",
        "Z",
        "M"
      ],
      [
        "Z",
        "A",
        "E",
        "C",
        "E",
        "L",
        "P",
        "O",
        "M",
        "E",
        "E",
        "E",
        "A"
      ],
      [
        "N",
        "L",
        "C",
        "V",
        "Q",
        "U",
        "L",
        "L",
        "A",
        "O",
        "T",
        "D",
        "E"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "SOCIDIVAPLU",
        "displayTerm": "SOCIDIVAPLU",
        "clue": "Mnemônico de Ouro dos Fundamentos da República Federativa do Brasil (Art. 1º da CF/88).",
        "explanation": "O Art. 1º da CF/88 elenca os 5 Fundamentos do Estado Democrático de Direito através da sigla SO-CI-DI-VA-PLU.",
        "mnemonicItems": [
          {
            "code": "SO",
            "text": "Soberania (inciso I)"
          },
          {
            "code": "CI",
            "text": "Cidadania (inciso II)"
          },
          {
            "code": "DI",
            "text": "Dignidade da pessoa humana (inciso III)"
          },
          {
            "code": "VA",
            "text": "Valores sociais do trabalho e da livre iniciativa (inciso IV)"
          },
          {
            "code": "PLU",
            "text": "Pluralismo político (inciso V)"
          }
        ],
        "bancaPegadinha": "PEGADINHA DA AOCP / PMPE: A banca adora colocar um Objetivo do Art. 3º (ex: garantir o desenvolvimento nacional) dizendo que é Fundamento. Lembre-se: FUNDAMENTOS começam com substantivos (Soberania, Cidadania...), enquanto OBJETIVOS começam com verbos no infinitivo!",
        "category": "geral",
        "start": {
          "row": 2,
          "col": 5
        },
        "end": {
          "row": 12,
          "col": 5
        },
        "path": [
          {
            "row": 2,
            "col": 5
          },
          {
            "row": 3,
            "col": 5
          },
          {
            "row": 4,
            "col": 5
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 6,
            "col": 5
          },
          {
            "row": 7,
            "col": 5
          },
          {
            "row": 8,
            "col": 5
          },
          {
            "row": 9,
            "col": 5
          },
          {
            "row": 10,
            "col": 5
          },
          {
            "row": 11,
            "col": 5
          },
          {
            "row": 12,
            "col": 5
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "CONGAERPRO",
        "displayTerm": "CONGAERPRO",
        "clue": "Mnemônico dos Objetivos Fundamentais da República Federativa do Brasil (Art. 3º da CF/88).",
        "explanation": "O Art. 3º da CF/88 define onde o Brasil quer chegar (metas de futuro). Memorize: CON-GA-ER-PRO!",
        "mnemonicItems": [
          {
            "code": "CON",
            "text": "Construir uma sociedade livre, justa e solidária (inciso I)"
          },
          {
            "code": "GA",
            "text": "Garantir o desenvolvimento nacional (inciso II)"
          },
          {
            "code": "ER",
            "text": "Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais (inciso III)"
          },
          {
            "code": "PRO",
            "text": "Promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação (inciso IV)"
          }
        ],
        "bancaPegadinha": "DICA DE PROVA: Todos os Objetivos iniciam com VERBO NO INFINITIVO: CONstruir, GArantir, ERradicar e PROmover!",
        "category": "geral",
        "start": {
          "row": 2,
          "col": 7
        },
        "end": {
          "row": 11,
          "col": 7
        },
        "path": [
          {
            "row": 2,
            "col": 7
          },
          {
            "row": 3,
            "col": 7
          },
          {
            "row": 4,
            "col": 7
          },
          {
            "row": 5,
            "col": 7
          },
          {
            "row": 6,
            "col": 7
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 8,
            "col": 7
          },
          {
            "row": 9,
            "col": 7
          },
          {
            "row": 10,
            "col": 7
          },
          {
            "row": 11,
            "col": 7
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "PLURALISMO",
        "displayTerm": "PLURALISMO",
        "clue": "Quinto fundamento: liberdade de ideias, convicções, partidos e correntes de pensamento.",
        "explanation": "Art. 1º, V da CF/88 - Garante a diversidade política, partidária e filosófica.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 0,
          "col": 10
        },
        "end": {
          "row": 9,
          "col": 10
        },
        "path": [
          {
            "row": 0,
            "col": 10
          },
          {
            "row": 1,
            "col": 10
          },
          {
            "row": 2,
            "col": 10
          },
          {
            "row": 3,
            "col": 10
          },
          {
            "row": 4,
            "col": 10
          },
          {
            "row": 5,
            "col": 10
          },
          {
            "row": 6,
            "col": 10
          },
          {
            "row": 7,
            "col": 10
          },
          {
            "row": 8,
            "col": 10
          },
          {
            "row": 9,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "SOBERANIA",
        "displayTerm": "SOBERANIA",
        "clue": "Primeiro fundamento do Art. 1º: poder supremo e independente do Estado brasileiro.",
        "explanation": "Art. 1º, I da CF/88 - Independência nacional no plano externo e supremacia no plano interno.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 1,
          "col": 0
        },
        "end": {
          "row": 1,
          "col": 8
        },
        "path": [
          {
            "row": 1,
            "col": 0
          },
          {
            "row": 1,
            "col": 1
          },
          {
            "row": 1,
            "col": 2
          },
          {
            "row": 1,
            "col": 3
          },
          {
            "row": 1,
            "col": 4
          },
          {
            "row": 1,
            "col": 5
          },
          {
            "row": 1,
            "col": 6
          },
          {
            "row": 1,
            "col": 7
          },
          {
            "row": 1,
            "col": 8
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "CIDADANIA",
        "displayTerm": "CIDADANIA",
        "clue": "Segundo fundamento do Art. 1º: conjunto de direitos e deveres políticos e civis do povo.",
        "explanation": "Art. 1º, II da CF/88 - Participação ativa do indivíduo nos rumos do país.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 3,
          "col": 1
        },
        "end": {
          "row": 11,
          "col": 1
        },
        "path": [
          {
            "row": 3,
            "col": 1
          },
          {
            "row": 4,
            "col": 1
          },
          {
            "row": 5,
            "col": 1
          },
          {
            "row": 6,
            "col": 1
          },
          {
            "row": 7,
            "col": 1
          },
          {
            "row": 8,
            "col": 1
          },
          {
            "row": 9,
            "col": 1
          },
          {
            "row": 10,
            "col": 1
          },
          {
            "row": 11,
            "col": 1
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "DIGNIDADE",
        "displayTerm": "DIGNIDADE",
        "clue": "Terceiro fundamento: núcleo essencial de proteção à pessoa humana e aos direitos básicos.",
        "explanation": "Art. 1º, III da CF/88 - Vetor axiológico central de todo o ordenamento jurídico brasileiro.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 3,
          "col": 4
        },
        "end": {
          "row": 11,
          "col": 4
        },
        "path": [
          {
            "row": 3,
            "col": 4
          },
          {
            "row": 4,
            "col": 4
          },
          {
            "row": 5,
            "col": 4
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 7,
            "col": 4
          },
          {
            "row": 8,
            "col": 4
          },
          {
            "row": 9,
            "col": 4
          },
          {
            "row": 10,
            "col": 4
          },
          {
            "row": 11,
            "col": 4
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "SOLIDARIA",
        "displayTerm": "SOLIDARIA",
        "clue": "Art. 3º, I: Construir uma sociedade livre, justa e [...].",
        "explanation": "Art. 3º, I da CF/88 - Objetivo de construir uma sociedade livre, justa e solidária.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 0,
          "col": 12
        },
        "end": {
          "row": 8,
          "col": 12
        },
        "path": [
          {
            "row": 0,
            "col": 12
          },
          {
            "row": 1,
            "col": 12
          },
          {
            "row": 2,
            "col": 12
          },
          {
            "row": 3,
            "col": 12
          },
          {
            "row": 4,
            "col": 12
          },
          {
            "row": 5,
            "col": 12
          },
          {
            "row": 6,
            "col": 12
          },
          {
            "row": 7,
            "col": 12
          },
          {
            "row": 8,
            "col": 12
          }
        ]
      }
    ]
  },
  {
    "id": "ws_2_art5_cf88",
    "title": "Missão 2: Artigo 5º & Direitos Fundamentais",
    "theme": "Direito Constitucional • Direitos Individuais e Coletivos",
    "badge": "Art. 5º ⚖️",
    "xpReward": 180,
    "difficulty": "facil",
    "size": 13,
    "grid": [
      [
        "P",
        "D",
        "D",
        "V",
        "N",
        "O",
        "S",
        "G",
        "V",
        "I",
        "P",
        "L",
        "R"
      ],
      [
        "H",
        "L",
        "L",
        "E",
        "G",
        "A",
        "L",
        "I",
        "D",
        "A",
        "D",
        "E",
        "T"
      ],
      [
        "E",
        "D",
        "I",
        "E",
        "C",
        "P",
        "M",
        "R",
        "I",
        "T",
        "U",
        "H",
        "F"
      ],
      [
        "C",
        "A",
        "A",
        "B",
        "C",
        "E",
        "V",
        "V",
        "A",
        "D",
        "V",
        "M",
        "L"
      ],
      [
        "R",
        "N",
        "S",
        "L",
        "E",
        "S",
        "L",
        "R",
        "E",
        "S",
        "M",
        "E",
        "A"
      ],
      [
        "O",
        "D",
        "E",
        "E",
        "D",
        "R",
        "N",
        "D",
        "A",
        "T",
        "D",
        "E",
        "G"
      ],
      [
        "L",
        "D",
        "G",
        "M",
        "E",
        "C",
        "D",
        "A",
        "U",
        "A",
        "P",
        "V",
        "R"
      ],
      [
        "N",
        "O",
        "U",
        "G",
        "S",
        "B",
        "T",
        "A",
        "D",
        "E",
        "D",
        "I",
        "A"
      ],
      [
        "A",
        "C",
        "R",
        "D",
        "A",
        "I",
        "Q",
        "L",
        "D",
        "D",
        "H",
        "D",
        "N"
      ],
      [
        "V",
        "C",
        "A",
        "M",
        "D",
        "S",
        "A",
        "T",
        "D",
        "E",
        "T",
        "A",
        "T"
      ],
      [
        "D",
        "E",
        "N",
        "V",
        "A",
        "U",
        "I",
        "S",
        "D",
        "B",
        "L",
        "E",
        "E"
      ],
      [
        "A",
        "E",
        "C",
        "O",
        "G",
        "G",
        "V",
        "L",
        "E",
        "C",
        "E",
        "C",
        "V"
      ],
      [
        "R",
        "C",
        "A",
        "I",
        "C",
        "L",
        "U",
        "P",
        "O",
        "O",
        "C",
        "C",
        "V"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "LEGALIDADE",
        "displayTerm": "LEGALIDADE",
        "clue": "Princípio constitucional: ninguém será obrigado a fazer algo senão em virtude de lei (Art. 5º, II).",
        "explanation": "Art. 5º, II da CF/88 - Ninguém é obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 1,
          "col": 2
        },
        "end": {
          "row": 1,
          "col": 11
        },
        "path": [
          {
            "row": 1,
            "col": 2
          },
          {
            "row": 1,
            "col": 3
          },
          {
            "row": 1,
            "col": 4
          },
          {
            "row": 1,
            "col": 5
          },
          {
            "row": 1,
            "col": 6
          },
          {
            "row": 1,
            "col": 7
          },
          {
            "row": 1,
            "col": 8
          },
          {
            "row": 1,
            "col": 9
          },
          {
            "row": 1,
            "col": 10
          },
          {
            "row": 1,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "LIBERDADE",
        "displayTerm": "LIBERDADE",
        "clue": "Direito fundamental que assegura a livre locomoção e pensamento.",
        "explanation": "Art. 5º, XV da CF/88 garante a liberdade de locomoção em território nacional em tempo de paz.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 1,
          "col": 1
        },
        "end": {
          "row": 9,
          "col": 9
        },
        "path": [
          {
            "row": 1,
            "col": 1
          },
          {
            "row": 2,
            "col": 2
          },
          {
            "row": 3,
            "col": 3
          },
          {
            "row": 4,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 6,
            "col": 6
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 8,
            "col": 8
          },
          {
            "row": 9,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "IGUALDADE",
        "displayTerm": "IGUALDADE",
        "clue": "Princípio que veda discriminações arbitrárias: todos são iguais perante a lei.",
        "explanation": "Art. 5º, caput - Princípio da isonomia formal e material.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 12,
          "col": 3
        },
        "end": {
          "row": 4,
          "col": 11
        },
        "path": [
          {
            "row": 12,
            "col": 3
          },
          {
            "row": 11,
            "col": 4
          },
          {
            "row": 10,
            "col": 5
          },
          {
            "row": 9,
            "col": 6
          },
          {
            "row": 8,
            "col": 7
          },
          {
            "row": 7,
            "col": 8
          },
          {
            "row": 6,
            "col": 9
          },
          {
            "row": 5,
            "col": 10
          },
          {
            "row": 4,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "SEGURANCA",
        "displayTerm": "SEGURANCA",
        "clue": "Dever do Estado, direito e responsabilidade de todos (Art. 144 da CF/88).",
        "explanation": "A segurança pública é exercida para a preservação da ordem pública e incolumidade das pessoas.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 4,
          "col": 2
        },
        "end": {
          "row": 12,
          "col": 2
        },
        "path": [
          {
            "row": 4,
            "col": 2
          },
          {
            "row": 5,
            "col": 2
          },
          {
            "row": 6,
            "col": 2
          },
          {
            "row": 7,
            "col": 2
          },
          {
            "row": 8,
            "col": 2
          },
          {
            "row": 9,
            "col": 2
          },
          {
            "row": 10,
            "col": 2
          },
          {
            "row": 11,
            "col": 2
          },
          {
            "row": 12,
            "col": 2
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "FLAGRANTE",
        "displayTerm": "FLAGRANTE",
        "clue": "Situação de prisão permitida a qualquer do povo e obrigatória aos policiais militares.",
        "explanation": "Art. 5º, LXI da CF/88 e Art. 301 do CPP autorizam a prisão imediata no ato criminoso.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 2,
          "col": 12
        },
        "end": {
          "row": 10,
          "col": 12
        },
        "path": [
          {
            "row": 2,
            "col": 12
          },
          {
            "row": 3,
            "col": 12
          },
          {
            "row": 4,
            "col": 12
          },
          {
            "row": 5,
            "col": 12
          },
          {
            "row": 6,
            "col": 12
          },
          {
            "row": 7,
            "col": 12
          },
          {
            "row": 8,
            "col": 12
          },
          {
            "row": 9,
            "col": 12
          },
          {
            "row": 10,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "ASILO",
        "displayTerm": "ASILO",
        "clue": "A casa é o refúgio inviolável do indivíduo; ninguém pode nela penetrar sem permissão.",
        "explanation": "Art. 5º, XI da CF/88 - Inviolabilidade domiciliar (salvo flagrante, desastre ou ordem judicial de dia).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 8,
          "col": 4
        },
        "end": {
          "row": 12,
          "col": 8
        },
        "path": [
          {
            "row": 8,
            "col": 4
          },
          {
            "row": 9,
            "col": 5
          },
          {
            "row": 10,
            "col": 6
          },
          {
            "row": 11,
            "col": 7
          },
          {
            "row": 12,
            "col": 8
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "VIDA",
        "displayTerm": "VIDA",
        "clue": "Bem jurídico primário e inviolável assegurado no caput do artigo 5º.",
        "explanation": "O direito à vida é o pilar de todos os demais direitos e garantias fundamentais.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 6,
          "col": 11
        },
        "end": {
          "row": 9,
          "col": 11
        },
        "path": [
          {
            "row": 6,
            "col": 11
          },
          {
            "row": 7,
            "col": 11
          },
          {
            "row": 8,
            "col": 11
          },
          {
            "row": 9,
            "col": 11
          }
        ]
      }
    ]
  },
  {
    "id": "ws_3_penal",
    "title": "Missão 3: Código Penal & Teoria do Crime",
    "theme": "Direito Penal • Tipicidade, Ilicitude e Conduta",
    "badge": "Penal ⚔️",
    "xpReward": 220,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "R",
        "A",
        "A",
        "A",
        "D",
        "G",
        "N",
        "T",
        "R",
        "I",
        "O",
        "F",
        "I"
      ],
      [
        "E",
        "B",
        "C",
        "I",
        "Z",
        "E",
        "C",
        "M",
        "R",
        "O",
        "D",
        "Q",
        "L"
      ],
      [
        "E",
        "U",
        "V",
        "E",
        "S",
        "V",
        "L",
        "A",
        "E",
        "L",
        "T",
        "P",
        "R"
      ],
      [
        "C",
        "U",
        "L",
        "P",
        "A",
        "B",
        "I",
        "L",
        "I",
        "D",
        "A",
        "D",
        "E"
      ],
      [
        "L",
        "R",
        "E",
        "S",
        "T",
        "A",
        "D",
        "O",
        "S",
        "C",
        "S",
        "D",
        "E"
      ],
      [
        "T",
        "P",
        "M",
        "C",
        "D",
        "Z",
        "I",
        "N",
        "A",
        "D",
        "A",
        "R",
        "S"
      ],
      [
        "T",
        "E",
        "N",
        "T",
        "A",
        "T",
        "I",
        "V",
        "A",
        "G",
        "O",
        "I",
        "O"
      ],
      [
        "D",
        "S",
        "D",
        "E",
        "A",
        "P",
        "U",
        "R",
        "A",
        "R",
        "C",
        "L",
        "O"
      ],
      [
        "E",
        "T",
        "I",
        "P",
        "I",
        "C",
        "I",
        "D",
        "A",
        "D",
        "E",
        "S",
        "O"
      ],
      [
        "A",
        "V",
        "I",
        "L",
        "I",
        "C",
        "I",
        "T",
        "U",
        "D",
        "E",
        "I",
        "O"
      ],
      [
        "V",
        "A",
        "C",
        "U",
        "L",
        "P",
        "A",
        "C",
        "A",
        "R",
        "L",
        "L",
        "T"
      ],
      [
        "A",
        "N",
        "S",
        "D",
        "E",
        "T",
        "G",
        "Z",
        "T",
        "T",
        "V",
        "S",
        "V"
      ],
      [
        "T",
        "A",
        "C",
        "E",
        "O",
        "R",
        "C",
        "M",
        "D",
        "V",
        "A",
        "T",
        "I"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "CULPABILIDADE",
        "displayTerm": "CULPABILIDADE",
        "clue": "Juízo de censura e reprovação pessoal que recai sobre o autor do fato ilícito.",
        "explanation": "Composta por imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 3,
          "col": 0
        },
        "end": {
          "row": 3,
          "col": 12
        },
        "path": [
          {
            "row": 3,
            "col": 0
          },
          {
            "row": 3,
            "col": 1
          },
          {
            "row": 3,
            "col": 2
          },
          {
            "row": 3,
            "col": 3
          },
          {
            "row": 3,
            "col": 4
          },
          {
            "row": 3,
            "col": 5
          },
          {
            "row": 3,
            "col": 6
          },
          {
            "row": 3,
            "col": 7
          },
          {
            "row": 3,
            "col": 8
          },
          {
            "row": 3,
            "col": 9
          },
          {
            "row": 3,
            "col": 10
          },
          {
            "row": 3,
            "col": 11
          },
          {
            "row": 3,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "TIPICIDADE",
        "displayTerm": "TIPICIDADE",
        "clue": "Ajuste perfeito entre a conduta da pessoa e o que está descrito na lei penal.",
        "explanation": "Substrato do fato típico: conduta, resultado, nexo causal e tipicidade.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 8,
          "col": 1
        },
        "end": {
          "row": 8,
          "col": 10
        },
        "path": [
          {
            "row": 8,
            "col": 1
          },
          {
            "row": 8,
            "col": 2
          },
          {
            "row": 8,
            "col": 3
          },
          {
            "row": 8,
            "col": 4
          },
          {
            "row": 8,
            "col": 5
          },
          {
            "row": 8,
            "col": 6
          },
          {
            "row": 8,
            "col": 7
          },
          {
            "row": 8,
            "col": 8
          },
          {
            "row": 8,
            "col": 9
          },
          {
            "row": 8,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "ILICITUDE",
        "displayTerm": "ILICITUDE",
        "clue": "Caráter antijurídico da conduta; contrariedade à ordem legal.",
        "explanation": "Segundo substrato do conceito analítico de crime; excludentes no Art. 23 do CP.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 9,
          "col": 2
        },
        "end": {
          "row": 9,
          "col": 10
        },
        "path": [
          {
            "row": 9,
            "col": 2
          },
          {
            "row": 9,
            "col": 3
          },
          {
            "row": 9,
            "col": 4
          },
          {
            "row": 9,
            "col": 5
          },
          {
            "row": 9,
            "col": 6
          },
          {
            "row": 9,
            "col": 7
          },
          {
            "row": 9,
            "col": 8
          },
          {
            "row": 9,
            "col": 9
          },
          {
            "row": 9,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "TENTATIVA",
        "displayTerm": "TENTATIVA",
        "clue": "Ocorre quando a consumação não se produz por motivos alheios à vontade do agente.",
        "explanation": "Art. 14, II do CP - Crime tentado; diminui a pena de um a dois terços.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 6,
          "col": 0
        },
        "end": {
          "row": 6,
          "col": 8
        },
        "path": [
          {
            "row": 6,
            "col": 0
          },
          {
            "row": 6,
            "col": 1
          },
          {
            "row": 6,
            "col": 2
          },
          {
            "row": 6,
            "col": 3
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 6,
            "col": 5
          },
          {
            "row": 6,
            "col": 6
          },
          {
            "row": 6,
            "col": 7
          },
          {
            "row": 6,
            "col": 8
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "ESTADO",
        "displayTerm": "ESTADO",
        "clue": "Excludente de necessidade: sacrifica bem jurídico menor para salvar bem maior.",
        "explanation": "Art. 24 do CP - Estado de necessidade exclui a ilicitude perante perigo atual não provocado.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 4,
          "col": 2
        },
        "end": {
          "row": 4,
          "col": 7
        },
        "path": [
          {
            "row": 4,
            "col": 2
          },
          {
            "row": 4,
            "col": 3
          },
          {
            "row": 4,
            "col": 4
          },
          {
            "row": 4,
            "col": 5
          },
          {
            "row": 4,
            "col": 6
          },
          {
            "row": 4,
            "col": 7
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "CULPA",
        "displayTerm": "CULPA",
        "clue": "Violação do dever de cuidado por imprudência, negligência ou imperícia.",
        "explanation": "Art. 18, II do CP - Crime culposo, só punível quando expressamente previsto em lei.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 10,
          "col": 2
        },
        "end": {
          "row": 10,
          "col": 6
        },
        "path": [
          {
            "row": 10,
            "col": 2
          },
          {
            "row": 10,
            "col": 3
          },
          {
            "row": 10,
            "col": 4
          },
          {
            "row": 10,
            "col": 5
          },
          {
            "row": 10,
            "col": 6
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "DOLO",
        "displayTerm": "DOLO",
        "clue": "Vontade e consciência livre de praticar o crime ou assumir o risco de produzi-lo.",
        "explanation": "Art. 18, I do CP - Crime doloso quando o agente quis o resultado ou assumiu o risco.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 5,
          "col": 9
        },
        "end": {
          "row": 8,
          "col": 12
        },
        "path": [
          {
            "row": 5,
            "col": 9
          },
          {
            "row": 6,
            "col": 10
          },
          {
            "row": 7,
            "col": 11
          },
          {
            "row": 8,
            "col": 12
          }
        ]
      }
    ]
  },
  {
    "id": "ws_4_estatuto_pmpe",
    "title": "Missão 4: Estatuto dos Policiais da PMPE",
    "theme": "Legislação PMPE • Lei 6.783/1974 & Estrutura da Corporação",
    "badge": "PMPE 🛡️",
    "xpReward": 240,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "L",
        "D",
        "L",
        "H",
        "O",
        "M",
        "S",
        "H",
        "C",
        "N",
        "E",
        "G",
        "Q"
      ],
      [
        "V",
        "H",
        "S",
        "I",
        "D",
        "A",
        "O",
        "O",
        "R",
        "R",
        "E",
        "A",
        "L"
      ],
      [
        "D",
        "N",
        "Q",
        "E",
        "E",
        "O",
        "L",
        "A",
        "L",
        "F",
        "A",
        "H",
        "A"
      ],
      [
        "E",
        "V",
        "C",
        "R",
        "A",
        "A",
        "U",
        "E",
        "L",
        "D",
        "V",
        "V",
        "L"
      ],
      [
        "D",
        "T",
        "O",
        "A",
        "P",
        "H",
        "B",
        "R",
        "L",
        "A",
        "A",
        "L",
        "F"
      ],
      [
        "D",
        "A",
        "M",
        "R",
        "Z",
        "A",
        "V",
        "E",
        "P",
        "C",
        "E",
        "D",
        "M"
      ],
      [
        "N",
        "P",
        "A",
        "Q",
        "O",
        "D",
        "T",
        "F",
        "E",
        "D",
        "M",
        "S",
        "O"
      ],
      [
        "D",
        "E",
        "N",
        "U",
        "V",
        "S",
        "G",
        "E",
        "N",
        "C",
        "L",
        "V",
        "O"
      ],
      [
        "R",
        "C",
        "D",
        "I",
        "E",
        "E",
        "L",
        "N",
        "N",
        "N",
        "D",
        "O",
        "P"
      ],
      [
        "A",
        "C",
        "O",
        "A",
        "L",
        "G",
        "I",
        "I",
        "F",
        "T",
        "D",
        "A",
        "E"
      ],
      [
        "N",
        "M",
        "R",
        "H",
        "O",
        "N",
        "R",
        "A",
        "C",
        "Z",
        "E",
        "C",
        "R"
      ],
      [
        "E",
        "F",
        "N",
        "C",
        "O",
        "R",
        "O",
        "N",
        "E",
        "L",
        "O",
        "S",
        "O"
      ],
      [
        "O",
        "D",
        "I",
        "S",
        "C",
        "I",
        "P",
        "L",
        "I",
        "N",
        "A",
        "T",
        "O"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "HIERARQUIA",
        "displayTerm": "HIERARQUIA",
        "clue": "Ordenação da autoridade militar em níveis sucessivos dentro da força policial.",
        "explanation": "Base institucional da PMPE ao lado da disciplina (Art. 12 da Lei nº 6.783/74).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 0,
          "col": 3
        },
        "end": {
          "row": 9,
          "col": 3
        },
        "path": [
          {
            "row": 0,
            "col": 3
          },
          {
            "row": 1,
            "col": 3
          },
          {
            "row": 2,
            "col": 3
          },
          {
            "row": 3,
            "col": 3
          },
          {
            "row": 4,
            "col": 3
          },
          {
            "row": 5,
            "col": 3
          },
          {
            "row": 6,
            "col": 3
          },
          {
            "row": 7,
            "col": 3
          },
          {
            "row": 8,
            "col": 3
          },
          {
            "row": 9,
            "col": 3
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "DISCIPLINA",
        "displayTerm": "DISCIPLINA",
        "clue": "Rigorosa observância e acatamento integral das leis e normas da corporação.",
        "explanation": "Pilar militar de obediência e pontualidade na execução das ordens de serviço.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 12,
          "col": 1
        },
        "end": {
          "row": 12,
          "col": 10
        },
        "path": [
          {
            "row": 12,
            "col": 1
          },
          {
            "row": 12,
            "col": 2
          },
          {
            "row": 12,
            "col": 3
          },
          {
            "row": 12,
            "col": 4
          },
          {
            "row": 12,
            "col": 5
          },
          {
            "row": 12,
            "col": 6
          },
          {
            "row": 12,
            "col": 7
          },
          {
            "row": 12,
            "col": 8
          },
          {
            "row": 12,
            "col": 9
          },
          {
            "row": 12,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "SOLDADO",
        "displayTerm": "SOLDADO",
        "clue": "Primeira graduação da carreira de praças combatentes da PMPE.",
        "explanation": "Cargo de provimento efetivo disputado no concurso CFSD PMPE.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 0,
          "col": 6
        },
        "end": {
          "row": 6,
          "col": 12
        },
        "path": [
          {
            "row": 0,
            "col": 6
          },
          {
            "row": 1,
            "col": 7
          },
          {
            "row": 2,
            "col": 8
          },
          {
            "row": 3,
            "col": 9
          },
          {
            "row": 4,
            "col": 10
          },
          {
            "row": 5,
            "col": 11
          },
          {
            "row": 6,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "CORONEL",
        "displayTerm": "CORONEL",
        "clue": "Posto mais elevado no quadro de Oficiais combatentes da PMPE.",
        "explanation": "O Comandante-Geral e Chefes de Estado Maior são investidos no posto de Coronel.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 11,
          "col": 3
        },
        "end": {
          "row": 11,
          "col": 9
        },
        "path": [
          {
            "row": 11,
            "col": 3
          },
          {
            "row": 11,
            "col": 4
          },
          {
            "row": 11,
            "col": 5
          },
          {
            "row": 11,
            "col": 6
          },
          {
            "row": 11,
            "col": 7
          },
          {
            "row": 11,
            "col": 8
          },
          {
            "row": 11,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "COMANDO",
        "displayTerm": "COMANDO",
        "clue": "Autoridade e responsabilidade legalmente atribuídas ao militar para conduzir subordinados.",
        "explanation": "O comando é vinculado ao grau hierárquico e constitui uma prerrogativa impessoal.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 3,
          "col": 2
        },
        "end": {
          "row": 9,
          "col": 2
        },
        "path": [
          {
            "row": 3,
            "col": 2
          },
          {
            "row": 4,
            "col": 2
          },
          {
            "row": 5,
            "col": 2
          },
          {
            "row": 6,
            "col": 2
          },
          {
            "row": 7,
            "col": 2
          },
          {
            "row": 8,
            "col": 2
          },
          {
            "row": 9,
            "col": 2
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "PATENTE",
        "displayTerm": "PATENTE",
        "clue": "Título oficial conferido pelo Governador que assegura o posto e as prerrogativas.",
        "explanation": "Carta patente assegura garantias e direitos vitalícios aos oficiais da PMPE.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 4,
          "col": 4
        },
        "end": {
          "row": 10,
          "col": 10
        },
        "path": [
          {
            "row": 4,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 6,
            "col": 6
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 8,
            "col": 8
          },
          {
            "row": 9,
            "col": 9
          },
          {
            "row": 10,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "HONRA",
        "displayTerm": "HONRA",
        "clue": "Dignidade moral e respeito à farda militar exigidos de todo policial militar.",
        "explanation": "Preceito ético militar incondicional no exercício da função policial.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 10,
          "col": 3
        },
        "end": {
          "row": 10,
          "col": 7
        },
        "path": [
          {
            "row": 10,
            "col": 3
          },
          {
            "row": 10,
            "col": 4
          },
          {
            "row": 10,
            "col": 5
          },
          {
            "row": 10,
            "col": 6
          },
          {
            "row": 10,
            "col": 7
          }
        ]
      }
    ]
  },
  {
    "id": "ws_5_extravagante",
    "title": "Missão 5: Legislação Extravagante & Direitos Humanos",
    "theme": "Leis Especiais • ECA, Desarmamento, Drogas & Tortura",
    "badge": "Elite Caveira 💀",
    "xpReward": 280,
    "difficulty": "dificilimo",
    "size": 13,
    "grid": [
      [
        "C",
        "A",
        "V",
        "E",
        "O",
        "H",
        "C",
        "R",
        "I",
        "A",
        "N",
        "C",
        "A"
      ],
      [
        "T",
        "E",
        "U",
        "N",
        "A",
        "V",
        "O",
        "E",
        "P",
        "D",
        "C",
        "O",
        "T"
      ],
      [
        "F",
        "O",
        "C",
        "T",
        "P",
        "D",
        "R",
        "C",
        "A",
        "C",
        "T",
        "E",
        "F"
      ],
      [
        "R",
        "V",
        "R",
        "E",
        "O",
        "C",
        "D",
        "C",
        "V",
        "N",
        "A",
        "E",
        "U"
      ],
      [
        "M",
        "A",
        "O",
        "T",
        "A",
        "R",
        "S",
        "R",
        "E",
        "O",
        "D",
        "O",
        "D"
      ],
      [
        "V",
        "M",
        "A",
        "I",
        "U",
        "M",
        "I",
        "M",
        "O",
        "D",
        "N",
        "L",
        "T"
      ],
      [
        "E",
        "I",
        "U",
        "O",
        "C",
        "R",
        "A",
        "D",
        "L",
        "G",
        "S",
        "T",
        "L"
      ],
      [
        "C",
        "L",
        "U",
        "V",
        "L",
        "M",
        "A",
        "L",
        "A",
        "A",
        "A",
        "S",
        "V"
      ],
      [
        "E",
        "T",
        "M",
        "P",
        "R",
        "E",
        "O",
        "U",
        "M",
        "D",
        "S",
        "S",
        "Q"
      ],
      [
        "T",
        "M",
        "N",
        "A",
        "F",
        "Q",
        "E",
        "E",
        "A",
        "O",
        "E",
        "N",
        "M"
      ],
      [
        "R",
        "Q",
        "S",
        "S",
        "V",
        "L",
        "G",
        "L",
        "M",
        "V",
        "E",
        "D",
        "R"
      ],
      [
        "E",
        "E",
        "V",
        "P",
        "L",
        "L",
        "D",
        "E",
        "R",
        "E",
        "L",
        "F",
        "C"
      ],
      [
        "D",
        "C",
        "P",
        "Q",
        "A",
        "C",
        "C",
        "T",
        "D",
        "D",
        "M",
        "O",
        "R"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "DESARMAMENTO",
        "displayTerm": "DESARMAMENTO",
        "clue": "Estatuto federal da Lei nº 10.826/2003 sobre posse, porte e armas de fogo.",
        "explanation": "Tipifica posse ilegal, porte irregular e disparo de arma de fogo em via pública.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 12,
          "col": 0
        },
        "end": {
          "row": 1,
          "col": 11
        },
        "path": [
          {
            "row": 12,
            "col": 0
          },
          {
            "row": 11,
            "col": 1
          },
          {
            "row": 10,
            "col": 2
          },
          {
            "row": 9,
            "col": 3
          },
          {
            "row": 8,
            "col": 4
          },
          {
            "row": 7,
            "col": 5
          },
          {
            "row": 6,
            "col": 6
          },
          {
            "row": 5,
            "col": 7
          },
          {
            "row": 4,
            "col": 8
          },
          {
            "row": 3,
            "col": 9
          },
          {
            "row": 2,
            "col": 10
          },
          {
            "row": 1,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "AUTORIDADE",
        "displayTerm": "AUTORIDADE",
        "clue": "Abuso tipificado pela Lei nº 13.869/2019 praticado por servidor com dolo específico.",
        "explanation": "Pune excessos funcionais praticados para prejudicar outrem ou satisfazer mero capricho.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 0,
          "col": 1
        },
        "end": {
          "row": 9,
          "col": 10
        },
        "path": [
          {
            "row": 0,
            "col": 1
          },
          {
            "row": 1,
            "col": 2
          },
          {
            "row": 2,
            "col": 3
          },
          {
            "row": 3,
            "col": 4
          },
          {
            "row": 4,
            "col": 5
          },
          {
            "row": 5,
            "col": 6
          },
          {
            "row": 6,
            "col": 7
          },
          {
            "row": 7,
            "col": 8
          },
          {
            "row": 8,
            "col": 9
          },
          {
            "row": 9,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "TORTURA",
        "displayTerm": "TORTURA",
        "clue": "Crime inafiançável e insuscetível de anistia regulado pela Lei nº 9.455/1997.",
        "explanation": "Constrangimento com violência ou grave ameaça causando sofrimento físico ou mental.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 1,
          "col": 0
        },
        "end": {
          "row": 7,
          "col": 6
        },
        "path": [
          {
            "row": 1,
            "col": 0
          },
          {
            "row": 2,
            "col": 1
          },
          {
            "row": 3,
            "col": 2
          },
          {
            "row": 4,
            "col": 3
          },
          {
            "row": 5,
            "col": 4
          },
          {
            "row": 6,
            "col": 5
          },
          {
            "row": 7,
            "col": 6
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "ALGEMAS",
        "displayTerm": "ALGEMAS",
        "clue": "Súmula Vinculante 11 do STF que restringe o uso excepcional justificado por escrito.",
        "explanation": "Permitido apenas em caso de resistência, fundado receio de fuga ou perigo à integridade.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 12,
          "col": 4
        },
        "end": {
          "row": 6,
          "col": 10
        },
        "path": [
          {
            "row": 12,
            "col": 4
          },
          {
            "row": 11,
            "col": 5
          },
          {
            "row": 10,
            "col": 6
          },
          {
            "row": 9,
            "col": 7
          },
          {
            "row": 8,
            "col": 8
          },
          {
            "row": 7,
            "col": 9
          },
          {
            "row": 6,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "CRIANCA",
        "displayTerm": "CRIANCA",
        "clue": "Pessoa com até doze anos de idade incompletos segundo o Artigo 2º do ECA.",
        "explanation": "Sujeito de direitos prioritários absoluto sob a égide da Lei Federal nº 8.069/1990.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 0,
          "col": 6
        },
        "end": {
          "row": 0,
          "col": 12
        },
        "path": [
          {
            "row": 0,
            "col": 6
          },
          {
            "row": 0,
            "col": 7
          },
          {
            "row": 0,
            "col": 8
          },
          {
            "row": 0,
            "col": 9
          },
          {
            "row": 0,
            "col": 10
          },
          {
            "row": 0,
            "col": 11
          },
          {
            "row": 0,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "DROGAS",
        "displayTerm": "DROGAS",
        "clue": "Lei nº 11.343/2006 que disciplina o combate ao narcotráfico e prevenção.",
        "explanation": "Diferencia o consumo pessoal (Art. 28) do tráfico ilícito de entorpecentes (Art. 33).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "start": {
          "row": 3,
          "col": 6
        },
        "end": {
          "row": 8,
          "col": 11
        },
        "path": [
          {
            "row": 3,
            "col": 6
          },
          {
            "row": 4,
            "col": 7
          },
          {
            "row": 5,
            "col": 8
          },
          {
            "row": 6,
            "col": 9
          },
          {
            "row": 7,
            "col": 10
          },
          {
            "row": 8,
            "col": 11
          }
        ]
      }
    ]
  }
];
