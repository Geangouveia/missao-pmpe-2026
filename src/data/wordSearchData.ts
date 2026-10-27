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
  bloco?: string;
  start: WordSearchPathCell;
  end: WordSearchPathCell;
  path: WordSearchPathCell[];
}

export interface WordSearchBoard {
  id: string;
  title: string;
  theme: string;
  badge: string;
  bloco: string;
  blocoNome: string;
  xpReward: number;
  difficulty: 'facil' | 'medio' | 'dificil' | 'dificilimo';
  size: number;
  grid: string[][];
  words: WordSearchItem[];
}

export const WORD_SEARCH_BOARDS: WordSearchBoard[] = [
  {
    "id": "ws_1_portugues",
    "title": "Missão 1: Português & Gramática Tática",
    "theme": "Língua Portuguesa • Crase, Regência, Concordância & Coesão",
    "badge": "Português ✍️",
    "bloco": "bloco_1",
    "blocoNome": "Bloco 1: Português & História",
    "xpReward": 180,
    "difficulty": "facil",
    "size": 13,
    "grid": [
      [
        "D",
        "E",
        "G",
        "A",
        "V",
        "C",
        "U",
        "P",
        "E",
        "V",
        "L",
        "N",
        "M"
      ],
      [
        "E",
        "M",
        "C",
        "O",
        "N",
        "J",
        "U",
        "N",
        "C",
        "A",
        "O",
        "U",
        "I"
      ],
      [
        "H",
        "U",
        "E",
        "L",
        "V",
        "N",
        "P",
        "M",
        "V",
        "C",
        "O",
        "C",
        "T"
      ],
      [
        "P",
        "R",
        "C",
        "F",
        "P",
        "M",
        "V",
        "M",
        "F",
        "U",
        "T",
        "N",
        "P"
      ],
      [
        "I",
        "R",
        "B",
        "O",
        "A",
        "A",
        "E",
        "P",
        "U",
        "L",
        "N",
        "F",
        "O"
      ],
      [
        "C",
        "O",
        "N",
        "C",
        "O",
        "R",
        "D",
        "A",
        "N",
        "C",
        "I",
        "A",
        "L"
      ],
      [
        "C",
        "M",
        "S",
        "I",
        "O",
        "V",
        "M",
        "N",
        "M",
        "D",
        "G",
        "M",
        "I"
      ],
      [
        "P",
        "A",
        "R",
        "O",
        "N",
        "I",
        "M",
        "O",
        "S",
        "F",
        "N",
        "C",
        "S"
      ],
      [
        "P",
        "A",
        "B",
        "R",
        "C",
        "O",
        "E",
        "S",
        "A",
        "O",
        "R",
        "N",
        "S"
      ],
      [
        "F",
        "E",
        "N",
        "C",
        "R",
        "A",
        "S",
        "E",
        "V",
        "V",
        "D",
        "M",
        "E"
      ],
      [
        "O",
        "N",
        "E",
        "N",
        "B",
        "V",
        "M",
        "A",
        "P",
        "O",
        "Z",
        "M",
        "M"
      ],
      [
        "S",
        "E",
        "R",
        "E",
        "G",
        "E",
        "N",
        "C",
        "I",
        "A",
        "I",
        "D",
        "I"
      ],
      [
        "H",
        "T",
        "E",
        "N",
        "A",
        "A",
        "A",
        "N",
        "L",
        "C",
        "B",
        "A",
        "A"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "CONCORDANCIA",
        "displayTerm": "CONCORDANCIA",
        "clue": "Harmonia entre o verbo e o sujeito (verbal) ou entre o substantivo e adjetivos (nominal).",
        "explanation": "Regra fundamental: o verbo concorda com o núcleo do sujeito em número e pessoa.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 5,
          "col": 0
        },
        "end": {
          "row": 5,
          "col": 11
        },
        "path": [
          {
            "row": 5,
            "col": 0
          },
          {
            "row": 5,
            "col": 1
          },
          {
            "row": 5,
            "col": 2
          },
          {
            "row": 5,
            "col": 3
          },
          {
            "row": 5,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 5,
            "col": 6
          },
          {
            "row": 5,
            "col": 7
          },
          {
            "row": 5,
            "col": 8
          },
          {
            "row": 5,
            "col": 9
          },
          {
            "row": 5,
            "col": 10
          },
          {
            "row": 5,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "POLISSEMIA",
        "displayTerm": "POLISSEMIA",
        "clue": "Capacidade de uma mesma palavra assumir múltiplos sentidos dependendo do contexto.",
        "explanation": "Muito cobrado em questões de interpretação e análise textual na prova da PMPE.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 12
        },
        "end": {
          "row": 12,
          "col": 12
        },
        "path": [
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
          },
          {
            "row": 11,
            "col": 12
          },
          {
            "row": 12,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "CONJUNCAO",
        "displayTerm": "CONJUNCAO",
        "clue": "Classe gramatical invariável que liga orações ou termos de mesma função sintática.",
        "explanation": "A AOCP foca muito no valor semântico: Concessivas (embora, conquanto) vs Adversativas (mas, porém, contudo).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 2
        },
        "end": {
          "row": 1,
          "col": 10
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
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "PARONIMOS",
        "displayTerm": "PARONIMOS",
        "clue": "Palavras com grafia e pronúncia parecidas, mas significados diferentes (ex: Mandado x Mandato).",
        "explanation": "Mandado = ordem judicial (ex: de prisão); Mandato = procuração ou período de representação política.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 7,
          "col": 0
        },
        "end": {
          "row": 7,
          "col": 8
        },
        "path": [
          {
            "row": 7,
            "col": 0
          },
          {
            "row": 7,
            "col": 1
          },
          {
            "row": 7,
            "col": 2
          },
          {
            "row": 7,
            "col": 3
          },
          {
            "row": 7,
            "col": 4
          },
          {
            "row": 7,
            "col": 5
          },
          {
            "row": 7,
            "col": 6
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 7,
            "col": 8
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "REGENCIA",
        "displayTerm": "REGENCIA",
        "clue": "Relação de dependência entre termos: verbos/nomes e seus complementos com ou sem preposição.",
        "explanation": "Ex: Aspirar (almejar) pede preposição 'a' (aspirar ao cargo de Soldado PMPE); Aspirar (respirar) é transitivo direto.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 11,
          "col": 2
        },
        "end": {
          "row": 11,
          "col": 9
        },
        "path": [
          {
            "row": 11,
            "col": 2
          },
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
        "id": "ws_6",
        "term": "COESAO",
        "displayTerm": "COESAO",
        "clue": "Mecanismo de ligação textual por anáfora, catáfora e conectivos lógicos.",
        "explanation": "Garante a amarração lógica e a fluidez entre os parágrafos e frases da redação militar.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 8,
          "col": 4
        },
        "end": {
          "row": 8,
          "col": 9
        },
        "path": [
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
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "CRASE",
        "displayTerm": "CRASE",
        "clue": "Fusão da preposição 'a' com o artigo feminino 'a' ou pronome demonstrativo.",
        "explanation": "Regra de ouro: nunca ocorre antes de palavra masculina, verbo ou pronomes de tratamento (salvo senhora/senhorita).",
        "mnemonicItems": [
          {
            "code": "VOLTO DE",
            "text": "Crase pra quê? (Vou a Paris, volto de Paris)"
          },
          {
            "code": "VOLTO DA",
            "text": "Crase há! (Vou à Bahia, volto da Bahia)"
          }
        ],
        "bancaPegadinha": "PEGADINHA AOCP: A banca adora colocar crase antes de verbos ou palavras masculinas ('a pé', 'a prazo'). Lembre-se: antes de masculino, crase é tiro no pé!",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 9,
          "col": 3
        },
        "end": {
          "row": 9,
          "col": 7
        },
        "path": [
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
          }
        ]
      }
    ]
  },
  {
    "id": "ws_2_historia_pe",
    "title": "Missão 2: História Militar & Revoluções de PE",
    "theme": "História de PE • Guararapes, 1817, 1824 e Praieira",
    "badge": "História 🏛️",
    "bloco": "bloco_1",
    "blocoNome": "Bloco 1: Português & História",
    "xpReward": 200,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "E",
        "D",
        "T",
        "M",
        "U",
        "A",
        "A",
        "B",
        "S",
        "P",
        "S",
        "D",
        "A"
      ],
      [
        "A",
        "U",
        "M",
        "M",
        "A",
        "R",
        "P",
        "R",
        "N",
        "R",
        "E",
        "M",
        "B"
      ],
      [
        "N",
        "A",
        "C",
        "L",
        "F",
        "S",
        "E",
        "E",
        "L",
        "C",
        "I",
        "N",
        "A"
      ],
      [
        "E",
        "R",
        "L",
        "S",
        "N",
        "L",
        "C",
        "I",
        "P",
        "V",
        "A",
        "C",
        "N"
      ],
      [
        "Q",
        "T",
        "T",
        "P",
        "R",
        "A",
        "I",
        "A",
        "P",
        "E",
        "A",
        "P",
        "D"
      ],
      [
        "U",
        "E",
        "C",
        "R",
        "B",
        "E",
        "A",
        "N",
        "V",
        "Q",
        "D",
        "P",
        "E"
      ],
      [
        "A",
        "C",
        "I",
        "A",
        "M",
        "V",
        "V",
        "P",
        "U",
        "O",
        "A",
        "E",
        "I"
      ],
      [
        "D",
        "O",
        "P",
        "I",
        "C",
        "I",
        "D",
        "O",
        "U",
        "C",
        "S",
        "Z",
        "R"
      ],
      [
        "O",
        "E",
        "E",
        "E",
        "E",
        "P",
        "H",
        "E",
        "L",
        "T",
        "O",
        "N",
        "A"
      ],
      [
        "R",
        "L",
        "C",
        "I",
        "T",
        "Q",
        "A",
        "T",
        "R",
        "U",
        "E",
        "S",
        "E"
      ],
      [
        "O",
        "H",
        "N",
        "R",
        "M",
        "D",
        "G",
        "T",
        "R",
        "N",
        "C",
        "E",
        "R"
      ],
      [
        "C",
        "O",
        "M",
        "A",
        "N",
        "E",
        "C",
        "D",
        "C",
        "D",
        "O",
        "A",
        "G"
      ],
      [
        "E",
        "H",
        "G",
        "U",
        "A",
        "R",
        "A",
        "R",
        "A",
        "P",
        "E",
        "S",
        "O"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "DUARTECOELHO",
        "displayTerm": "DUARTECOELHO",
        "clue": "Primeiro donatário da capitania de Pernambuco (Nova Lusitânia), fundada em 1534.",
        "explanation": "Pioneiro da colonização bem-sucedida baseada na cana-de-açúcar e na fundação de Olinda.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 1
        },
        "end": {
          "row": 11,
          "col": 1
        },
        "path": [
          {
            "row": 0,
            "col": 1
          },
          {
            "row": 1,
            "col": 1
          },
          {
            "row": 2,
            "col": 1
          },
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
        "id": "ws_2",
        "term": "GUARARAPES",
        "displayTerm": "GUARARAPES",
        "clue": "Montes em Jaboatão onde se travaram as históricas batalhas de 1648 e 1649 contra os invasores holandeses.",
        "explanation": "Berço histórico do Exército Brasileiro: união de luso-brasileiros, negros (Henrique Dias) e indígenas (Filipe Camarão).",
        "mnemonicItems": [],
        "bancaPegadinha": "PEGADINHA AOCP: A banca tenta dizer que os holandeses foram expulsos em 1648. Errado! A vitória de Guararapes abriu caminho, mas a capitulação final só ocorreu em 1654 na Campina do Taborda.",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 2
        },
        "end": {
          "row": 12,
          "col": 11
        },
        "path": [
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
          },
          {
            "row": 12,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "REVOLUCAO",
        "displayTerm": "REVOLUCAO",
        "clue": "Movimento de 1817 que proclamou a República de Pernambuco independente por 75 dias.",
        "explanation": "Insurreição republicana que aboliu impostos reais, decretou liberdade de imprensa e criou a bandeira de Pernambuco.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 4,
          "col": 4
        },
        "end": {
          "row": 12,
          "col": 12
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
          },
          {
            "row": 11,
            "col": 11
          },
          {
            "row": 12,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "PRAIEIRA",
        "displayTerm": "PRAIEIRA",
        "clue": "Revolução de 1848 em PE com o 'Manifesto ao Mundo': voto livre e nacionalização do comércio.",
        "explanation": "Última grande revolta liberal do Império Brasileiro, centrada no Diário Novo da Rua da Praia.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 4,
          "col": 3
        },
        "end": {
          "row": 11,
          "col": 3
        },
        "path": [
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
          },
          {
            "row": 10,
            "col": 3
          },
          {
            "row": 11,
            "col": 3
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "MASCAVOS",
        "displayTerm": "MASCAVOS",
        "clue": "Guerra entre os senhores de engenho de Olinda e os comerciantes (mascates) do Recife (1710-1711).",
        "explanation": "Conflito gerado pela emancipação política do Recife em relação a Olinda.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 3
        },
        "end": {
          "row": 7,
          "col": 10
        },
        "path": [
          {
            "row": 0,
            "col": 3
          },
          {
            "row": 1,
            "col": 4
          },
          {
            "row": 2,
            "col": 5
          },
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
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "BANDEIRA",
        "displayTerm": "BANDEIRA",
        "clue": "Símbolo oficial do Estado de Pernambuco com sol, arco-íris e cruz, nascido na insurreição de 1817.",
        "explanation": "O sol representa a força e o futuro; o arco-íris a união e a paz; a cruz a fé na justiça.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 12
        },
        "end": {
          "row": 8,
          "col": 12
        },
        "path": [
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
      },
      {
        "id": "ws_7",
        "term": "EQUADOR",
        "displayTerm": "EQUADOR",
        "clue": "Confederação do [...] (1824): revolta republicana liderada por Frei Caneca contra o absolutismo imperial.",
        "explanation": "Reação ao fechamento da Constituinte e à imposição da Constituição de 1824 por D. Pedro I.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 0
        },
        "end": {
          "row": 9,
          "col": 0
        },
        "path": [
          {
            "row": 3,
            "col": 0
          },
          {
            "row": 4,
            "col": 0
          },
          {
            "row": 5,
            "col": 0
          },
          {
            "row": 6,
            "col": 0
          },
          {
            "row": 7,
            "col": 0
          },
          {
            "row": 8,
            "col": 0
          },
          {
            "row": 9,
            "col": 0
          }
        ]
      }
    ]
  },
  {
    "id": "ws_3_rlm",
    "title": "Missão 3: Raciocínio Lógico & Proposições",
    "theme": "RLM • Tabela Verdade, Equivalências, De Morgan & Silogismos",
    "badge": "Lógica 🧠",
    "bloco": "bloco_2",
    "blocoNome": "Bloco 2: RLM & Informática",
    "xpReward": 220,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "E",
        "R",
        "L",
        "Z",
        "A",
        "C",
        "S",
        "I",
        "C",
        "A",
        "V",
        "E",
        "E"
      ],
      [
        "Q",
        "L",
        "E",
        "E",
        "A",
        "E",
        "C",
        "S",
        "L",
        "P",
        "P",
        "R",
        "A"
      ],
      [
        "U",
        "N",
        "L",
        "E",
        "S",
        "T",
        "T",
        "T",
        "O",
        "D",
        "T",
        "P",
        "I"
      ],
      [
        "I",
        "D",
        "E",
        "E",
        "C",
        "A",
        "P",
        "V",
        "C",
        "P",
        "C",
        "T",
        "U"
      ],
      [
        "V",
        "O",
        "D",
        "P",
        "R",
        "E",
        "M",
        "I",
        "S",
        "S",
        "A",
        "E",
        "I"
      ],
      [
        "A",
        "T",
        "A",
        "U",
        "T",
        "O",
        "L",
        "O",
        "G",
        "I",
        "A",
        "A",
        "A"
      ],
      [
        "L",
        "D",
        "E",
        "M",
        "O",
        "R",
        "G",
        "A",
        "N",
        "O",
        "C",
        "M",
        "T"
      ],
      [
        "E",
        "O",
        "C",
        "O",
        "N",
        "D",
        "I",
        "C",
        "I",
        "O",
        "N",
        "A",
        "L"
      ],
      [
        "N",
        "R",
        "C",
        "O",
        "N",
        "J",
        "U",
        "N",
        "T",
        "O",
        "E",
        "L",
        "L"
      ],
      [
        "C",
        "A",
        "B",
        "E",
        "C",
        "A",
        "P",
        "Q",
        "G",
        "M",
        "G",
        "O",
        "S"
      ],
      [
        "I",
        "L",
        "C",
        "D",
        "D",
        "R",
        "A",
        "P",
        "B",
        "A",
        "L",
        "O",
        "M"
      ],
      [
        "A",
        "A",
        "I",
        "P",
        "M",
        "Q",
        "E",
        "D",
        "Z",
        "Q",
        "T",
        "V",
        "S"
      ],
      [
        "D",
        "I",
        "S",
        "I",
        "L",
        "O",
        "G",
        "I",
        "S",
        "M",
        "O",
        "C",
        "B"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "EQUIVALENCIA",
        "displayTerm": "EQUIVALENCIA",
        "clue": "Duas proposições compostas que possuem exatamente a mesma tabela-verdade.",
        "explanation": "Equivalência do 'Se p então q': Contrapositiva (~q -> ~p) e Silogismo disjuntivo (~p v q - regra do NEYMAR).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 0
        },
        "end": {
          "row": 11,
          "col": 0
        },
        "path": [
          {
            "row": 0,
            "col": 0
          },
          {
            "row": 1,
            "col": 0
          },
          {
            "row": 2,
            "col": 0
          },
          {
            "row": 3,
            "col": 0
          },
          {
            "row": 4,
            "col": 0
          },
          {
            "row": 5,
            "col": 0
          },
          {
            "row": 6,
            "col": 0
          },
          {
            "row": 7,
            "col": 0
          },
          {
            "row": 8,
            "col": 0
          },
          {
            "row": 9,
            "col": 0
          },
          {
            "row": 10,
            "col": 0
          },
          {
            "row": 11,
            "col": 0
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "CONDICIONAL",
        "displayTerm": "CONDICIONAL",
        "clue": "Proposição 'Se... então' (p -> q), falsa apenas quando a primeira é V e a segunda é F.",
        "explanation": "Mnemônico clássico da Vera Fischer: V -> F = Falsa!",
        "mnemonicItems": [
          {
            "code": "V -> F",
            "text": "Vera Fischer é Falsa! (Único caso falso da condicional)"
          }
        ],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 7,
          "col": 2
        },
        "end": {
          "row": 7,
          "col": 12
        },
        "path": [
          {
            "row": 7,
            "col": 2
          },
          {
            "row": 7,
            "col": 3
          },
          {
            "row": 7,
            "col": 4
          },
          {
            "row": 7,
            "col": 5
          },
          {
            "row": 7,
            "col": 6
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 7,
            "col": 8
          },
          {
            "row": 7,
            "col": 9
          },
          {
            "row": 7,
            "col": 10
          },
          {
            "row": 7,
            "col": 11
          },
          {
            "row": 7,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "TAUTOLOGIA",
        "displayTerm": "TAUTOLOGIA",
        "clue": "Proposição composta que resulta sempre em VERDADEIRO, independentemente dos valores lógicos.",
        "explanation": "Oposto de Contradição (sempre falso) e de Contingência (pode ser V ou F).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 5,
          "col": 1
        },
        "end": {
          "row": 5,
          "col": 10
        },
        "path": [
          {
            "row": 5,
            "col": 1
          },
          {
            "row": 5,
            "col": 2
          },
          {
            "row": 5,
            "col": 3
          },
          {
            "row": 5,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 5,
            "col": 6
          },
          {
            "row": 5,
            "col": 7
          },
          {
            "row": 5,
            "col": 8
          },
          {
            "row": 5,
            "col": 9
          },
          {
            "row": 5,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "SILOGISMO",
        "displayTerm": "SILOGISMO",
        "clue": "Argumento lógico formado por duas premissas e uma conclusão dedutiva.",
        "explanation": "Ex: Todo policial é militar; Carlos é policial; Logo, Carlos é militar.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 2
        },
        "end": {
          "row": 12,
          "col": 10
        },
        "path": [
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
        "id": "ws_5",
        "term": "DEMORGAN",
        "displayTerm": "DEMORGAN",
        "clue": "Leis de negação lógica das proposições compostas 'E' e 'OU'.",
        "explanation": "Negação do 'E' vira 'OU': ~(p ^ q) = ~p v ~q. Negação do 'OU' vira 'E': ~(p v q) = ~p ^ ~q.",
        "mnemonicItems": [
          {
            "code": "~(p ^ q)",
            "text": "Nega a 1ª, nega a 2ª e troca o 'E' por 'OU'"
          },
          {
            "code": "~(p v q)",
            "text": "Nega a 1ª, nega a 2ª e troca o 'OU' por 'E'"
          }
        ],
        "bancaPegadinha": "PEGADINHA AOCP: Dizer que a negação de 'Pedro é policial e Maria é civil' é 'Pedro NÃO é policial e Maria NÃO é civil'. Errado! Deve-se trocar o 'E' pelo 'OU'!",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 6,
          "col": 1
        },
        "end": {
          "row": 6,
          "col": 8
        },
        "path": [
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
        "id": "ws_6",
        "term": "CONJUNTO",
        "displayTerm": "CONJUNTO",
        "clue": "Agrupamento de elementos; operações de união, interseção e diferença com diagrama de Venn.",
        "explanation": "Muito cobrado na AOCP com questões de cardinalidade: n(A U B) = n(A) + n(B) - n(A ∩ B).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 8,
          "col": 2
        },
        "end": {
          "row": 8,
          "col": 9
        },
        "path": [
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
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "PREMISSA",
        "displayTerm": "PREMISSA",
        "clue": "Ponto de partida ou proposição que serve de base para sustentar a conclusão de um argumento.",
        "explanation": "A validade do argumento depende da relação lógica entre premissas e conclusão, não de sua verdade factual.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 4,
          "col": 3
        },
        "end": {
          "row": 4,
          "col": 10
        },
        "path": [
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
          },
          {
            "row": 4,
            "col": 8
          },
          {
            "row": 4,
            "col": 9
          },
          {
            "row": 4,
            "col": 10
          }
        ]
      }
    ]
  },
  {
    "id": "ws_4_informatica",
    "title": "Missão 4: Noções de Informática & Segurança",
    "theme": "Informática • Cibersegurança, Malware, Redes & Nuvem",
    "badge": "Informática 💻",
    "bloco": "bloco_2",
    "blocoNome": "Bloco 2: RLM & Informática",
    "xpReward": 220,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "F",
        "P",
        "P",
        "B",
        "A",
        "C",
        "K",
        "U",
        "P",
        "E",
        "M",
        "E",
        "A"
      ],
      [
        "E",
        "V",
        "T",
        "S",
        "C",
        "O",
        "R",
        "A",
        "D",
        "E",
        "L",
        "P",
        "D"
      ],
      [
        "I",
        "R",
        "E",
        "P",
        "Z",
        "R",
        "R",
        "C",
        "R",
        "R",
        "S",
        "E",
        "T"
      ],
      [
        "I",
        "D",
        "A",
        "L",
        "H",
        "A",
        "H",
        "A",
        "L",
        "P",
        "M",
        "N",
        "S"
      ],
      [
        "F",
        "D",
        "Z",
        "N",
        "D",
        "I",
        "W",
        "U",
        "C",
        "E",
        "L",
        "V",
        "C"
      ],
      [
        "A",
        "E",
        "R",
        "C",
        "S",
        "L",
        "S",
        "E",
        "E",
        "L",
        "A",
        "U",
        "E"
      ],
      [
        "M",
        "P",
        "U",
        "V",
        "A",
        "O",
        "E",
        "H",
        "A",
        "P",
        "D",
        "A",
        "B"
      ],
      [
        "S",
        "A",
        "S",
        "M",
        "R",
        "R",
        "M",
        "W",
        "I",
        "I",
        "C",
        "E",
        "L"
      ],
      [
        "L",
        "O",
        "E",
        "E",
        "A",
        "R",
        "E",
        "W",
        "M",
        "N",
        "E",
        "Q",
        "X"
      ],
      [
        "B",
        "V",
        "A",
        "W",
        "T",
        "R",
        "O",
        "L",
        "A",
        "R",
        "G",
        "U",
        "P"
      ],
      [
        "E",
        "S",
        "Y",
        "M",
        "I",
        "M",
        "E",
        "C",
        "C",
        "R",
        "N",
        "O",
        "B"
      ],
      [
        "S",
        "P",
        "P",
        "F",
        "G",
        "N",
        "L",
        "S",
        "A",
        "I",
        "E",
        "A",
        "D"
      ],
      [
        "S",
        "A",
        "F",
        "M",
        "D",
        "R",
        "O",
        "D",
        "L",
        "P",
        "I",
        "E",
        "R"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "RANSOMWARE",
        "displayTerm": "RANSOMWARE",
        "clue": "Malware que criptografa os arquivos da vítima e cobra resgate financeiro para a chave.",
        "explanation": "Praga virtual que bloqueia o acesso aos dados da corporação mediante chantagem em criptomoedas.",
        "mnemonicItems": [],
        "bancaPegadinha": "PEGADINHA AOCP: Confundir Ransomware com Spyware. Spyware apenas espiona e rouba senhas; Ransomware SEQUESTRA e exige RESGATE!",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 2,
          "col": 1
        },
        "end": {
          "row": 11,
          "col": 10
        },
        "path": [
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
          },
          {
            "row": 8,
            "col": 7
          },
          {
            "row": 9,
            "col": 8
          },
          {
            "row": 10,
            "col": 9
          },
          {
            "row": 11,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "PHISHING",
        "displayTerm": "PHISHING",
        "clue": "Técnica de engenharia social (isca falsa por e-mail/site) para capturar dados e senhas sigilosas.",
        "explanation": "Golpe que simula páginas de bancos ou instituições policiais para enganar o usuário incauto.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 2,
          "col": 3
        },
        "end": {
          "row": 9,
          "col": 10
        },
        "path": [
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
        "term": "FIREWALL",
        "displayTerm": "FIREWALL",
        "clue": "Dispositivo de segurança que monitora e filtra o tráfego de entrada e saída da rede militar.",
        "explanation": "Funciona como barreira de proteção de portas, mas NÃO remove vírus que já estejam gravados no disco!",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 11,
          "col": 3
        },
        "end": {
          "row": 4,
          "col": 10
        },
        "path": [
          {
            "row": 11,
            "col": 3
          },
          {
            "row": 10,
            "col": 4
          },
          {
            "row": 9,
            "col": 5
          },
          {
            "row": 8,
            "col": 6
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 6,
            "col": 8
          },
          {
            "row": 5,
            "col": 9
          },
          {
            "row": 4,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "MALWARE",
        "displayTerm": "MALWARE",
        "clue": "Termo genérico para qualquer tipo de software malicioso (vírus, vermes, cavalos de troia).",
        "explanation": "Programas criados intencionalmente para causar danos, invasões ou perda de dados em computadores.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 7,
          "col": 3
        },
        "end": {
          "row": 1,
          "col": 9
        },
        "path": [
          {
            "row": 7,
            "col": 3
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 4,
            "col": 6
          },
          {
            "row": 3,
            "col": 7
          },
          {
            "row": 2,
            "col": 8
          },
          {
            "row": 1,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "SPYWARE",
        "displayTerm": "SPYWARE",
        "clue": "Software espião instalado sorrateiramente para registrar as atividades do usuário (keylogger).",
        "explanation": "Captura toques no teclado (keylogger) ou cliques da tela (screenlogger) e envia ao invasor.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 0
        },
        "end": {
          "row": 6,
          "col": 6
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
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "BACKUP",
        "displayTerm": "BACKUP",
        "clue": "Cópia de segurança de dados em mídia externa ou nuvem para contingência contra perdas.",
        "explanation": "Regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 cópia fora da empresa (nuvem).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 3
        },
        "end": {
          "row": 0,
          "col": 8
        },
        "path": [
          {
            "row": 0,
            "col": 3
          },
          {
            "row": 0,
            "col": 4
          },
          {
            "row": 0,
            "col": 5
          },
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
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "LINUX",
        "displayTerm": "LINUX",
        "clue": "Sistema operacional livre e de código aberto com arquitetura segura baseado no kernel UNIX.",
        "explanation": "Muito cobrado em servidores e terminais de segurança pública pelo custo zero e robustez.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 8
        },
        "end": {
          "row": 8,
          "col": 12
        },
        "path": [
          {
            "row": 12,
            "col": 8
          },
          {
            "row": 11,
            "col": 9
          },
          {
            "row": 10,
            "col": 10
          },
          {
            "row": 9,
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
    "id": "ws_5_mnemonicos_cf88",
    "title": "Missão 5: CF/88 - Mnemônicos & Princípios Fundamentais",
    "theme": "CF/88 Art. 1º e 3º • Fundamentos vs Objetivos da República",
    "badge": "Mnemônicos 💡",
    "bloco": "bloco_3",
    "blocoNome": "Bloco 3: Direito & Legislação",
    "xpReward": 240,
    "difficulty": "facil",
    "size": 13,
    "grid": [
      [
        "S",
        "I",
        "N",
        "D",
        "I",
        "L",
        "P",
        "E",
        "V",
        "R",
        "A",
        "C",
        "T"
      ],
      [
        "V",
        "S",
        "O",
        "L",
        "I",
        "D",
        "A",
        "R",
        "I",
        "A",
        "C",
        "P",
        "L"
      ],
      [
        "C",
        "E",
        "E",
        "C",
        "A",
        "G",
        "O",
        "T",
        "I",
        "A",
        "O",
        "E",
        "U"
      ],
      [
        "C",
        "V",
        "M",
        "I",
        "O",
        "M",
        "N",
        "N",
        "P",
        "M",
        "P",
        "L",
        "S"
      ],
      [
        "S",
        "S",
        "R",
        "L",
        "M",
        "N",
        "A",
        "I",
        "S",
        "O",
        "P",
        "M",
        "A"
      ],
      [
        "U",
        "R",
        "B",
        "O",
        "A",
        "R",
        "G",
        "I",
        "D",
        "A",
        "P",
        "I",
        "M"
      ],
      [
        "E",
        "A",
        "M",
        "F",
        "E",
        "S",
        "L",
        "A",
        "V",
        "A",
        "N",
        "O",
        "B"
      ],
      [
        "D",
        "N",
        "I",
        "B",
        "S",
        "A",
        "O",
        "I",
        "E",
        "A",
        "D",
        "M",
        "B"
      ],
      [
        "V",
        "T",
        "O",
        "R",
        "R",
        "I",
        "D",
        "L",
        "D",
        "R",
        "A",
        "E",
        "G"
      ],
      [
        "T",
        "S",
        "Q",
        "U",
        "A",
        "I",
        "V",
        "A",
        "V",
        "P",
        "P",
        "P",
        "M"
      ],
      [
        "P",
        "C",
        "L",
        "D",
        "C",
        "H",
        "D",
        "R",
        "M",
        "L",
        "A",
        "R",
        "H"
      ],
      [
        "M",
        "P",
        "C",
        "O",
        "L",
        "I",
        "R",
        "M",
        "R",
        "P",
        "S",
        "S",
        "O"
      ],
      [
        "E",
        "A",
        "S",
        "C",
        "C",
        "Q",
        "F",
        "E",
        "D",
        "O",
        "Q",
        "C",
        "C"
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
        "bancaPegadinha": "PEGADINHA DA AOCP / PMPE: A banca adora colocar um Objetivo do Art. 3º dizendo que é Fundamento. Lembre-se: FUNDAMENTOS começam com substantivos (Soberania, Cidadania...), enquanto OBJETIVOS começam com verbos no infinitivo!",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 2
        },
        "end": {
          "row": 2,
          "col": 12
        },
        "path": [
          {
            "row": 12,
            "col": 2
          },
          {
            "row": 11,
            "col": 3
          },
          {
            "row": 10,
            "col": 4
          },
          {
            "row": 9,
            "col": 5
          },
          {
            "row": 8,
            "col": 6
          },
          {
            "row": 7,
            "col": 7
          },
          {
            "row": 6,
            "col": 8
          },
          {
            "row": 5,
            "col": 9
          },
          {
            "row": 4,
            "col": 10
          },
          {
            "row": 3,
            "col": 11
          },
          {
            "row": 2,
            "col": 12
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
        "bloco": "bloco_1",
        "start": {
          "row": 2,
          "col": 3
        },
        "end": {
          "row": 11,
          "col": 12
        },
        "path": [
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
          },
          {
            "row": 10,
            "col": 11
          },
          {
            "row": 11,
            "col": 12
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
        "bloco": "bloco_1",
        "start": {
          "row": 11,
          "col": 1
        },
        "end": {
          "row": 2,
          "col": 10
        },
        "path": [
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
        "bloco": "bloco_1",
        "start": {
          "row": 9,
          "col": 1
        },
        "end": {
          "row": 1,
          "col": 9
        },
        "path": [
          {
            "row": 9,
            "col": 1
          },
          {
            "row": 8,
            "col": 2
          },
          {
            "row": 7,
            "col": 3
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 4,
            "col": 6
          },
          {
            "row": 3,
            "col": 7
          },
          {
            "row": 2,
            "col": 8
          },
          {
            "row": 1,
            "col": 9
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
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 4
        },
        "end": {
          "row": 4,
          "col": 12
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
          },
          {
            "row": 5,
            "col": 11
          },
          {
            "row": 4,
            "col": 12
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
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 3
        },
        "end": {
          "row": 8,
          "col": 11
        },
        "path": [
          {
            "row": 0,
            "col": 3
          },
          {
            "row": 1,
            "col": 4
          },
          {
            "row": 2,
            "col": 5
          },
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
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 1
        },
        "end": {
          "row": 1,
          "col": 9
        },
        "path": [
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
          },
          {
            "row": 1,
            "col": 9
          }
        ]
      }
    ]
  },
  {
    "id": "ws_6_art5_seguranca",
    "title": "Missão 6: CF/88 - Artigo 5º & Segurança Pública (Art. 144)",
    "theme": "CF/88 • Direitos Individuais e Coletivos & Policiamento Ostensivo",
    "badge": "Art. 5º ⚖️",
    "bloco": "bloco_3",
    "blocoNome": "Bloco 3: Direito & Legislação",
    "xpReward": 240,
    "difficulty": "facil",
    "size": 13,
    "grid": [
      [
        "Z",
        "R",
        "E",
        "V",
        "M",
        "A",
        "M",
        "A",
        "A",
        "E",
        "E",
        "S",
        "L"
      ],
      [
        "H",
        "V",
        "V",
        "G",
        "G",
        "O",
        "S",
        "D",
        "A",
        "D",
        "E",
        "F",
        "M"
      ],
      [
        "I",
        "Q",
        "G",
        "A",
        "N",
        "P",
        "N",
        "I",
        "A",
        "B",
        "B",
        "L",
        "E"
      ],
      [
        "O",
        "I",
        "I",
        "P",
        "M",
        "I",
        "S",
        "D",
        "L",
        "E",
        "O",
        "A",
        "C"
      ],
      [
        "Q",
        "N",
        "G",
        "V",
        "N",
        "N",
        "I",
        "H",
        "I",
        "S",
        "S",
        "G",
        "V"
      ],
      [
        "I",
        "R",
        "L",
        "U",
        "D",
        "L",
        "N",
        "C",
        "B",
        "L",
        "T",
        "R",
        "M"
      ],
      [
        "A",
        "U",
        "Z",
        "I",
        "A",
        "D",
        "O",
        "I",
        "E",
        "E",
        "E",
        "A",
        "D"
      ],
      [
        "A",
        "S",
        "V",
        "G",
        "P",
        "L",
        "L",
        "V",
        "R",
        "E",
        "N",
        "N",
        "E"
      ],
      [
        "E",
        "I",
        "E",
        "P",
        "I",
        "N",
        "D",
        "I",
        "D",
        "Z",
        "S",
        "T",
        "N"
      ],
      [
        "A",
        "L",
        "C",
        "S",
        "E",
        "P",
        "Z",
        "A",
        "A",
        "L",
        "I",
        "E",
        "D"
      ],
      [
        "O",
        "R",
        "A",
        "D",
        "S",
        "T",
        "A",
        "M",
        "D",
        "C",
        "V",
        "N",
        "U"
      ],
      [
        "O",
        "B",
        "S",
        "M",
        "E",
        "E",
        "D",
        "E",
        "E",
        "E",
        "O",
        "C",
        "I"
      ],
      [
        "S",
        "E",
        "G",
        "U",
        "R",
        "A",
        "N",
        "C",
        "A",
        "S",
        "N",
        "T",
        "L"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "LEGALIDADE",
        "displayTerm": "LEGALIDADE",
        "clue": "Princípio constitucional basilar: ninguém é obrigado a fazer algo senão em virtude de lei (Art. 5º, II).",
        "explanation": "Art. 5º, II da CF/88 - Diferença: o particular faz tudo que a lei não proíbe; a administração só faz o que a lei expressamente autoriza.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 9,
          "col": 1
        },
        "end": {
          "row": 0,
          "col": 10
        },
        "path": [
          {
            "row": 9,
            "col": 1
          },
          {
            "row": 8,
            "col": 2
          },
          {
            "row": 7,
            "col": 3
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 5,
            "col": 5
          },
          {
            "row": 4,
            "col": 6
          },
          {
            "row": 3,
            "col": 7
          },
          {
            "row": 2,
            "col": 8
          },
          {
            "row": 1,
            "col": 9
          },
          {
            "row": 0,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "LIBERDADE",
        "displayTerm": "LIBERDADE",
        "clue": "Direito fundamental que assegura a livre locomoção e pensamento em tempo de paz.",
        "explanation": "Art. 5º, XV da CF/88 garante livre locomoção em território nacional em tempo de paz.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 8
        },
        "end": {
          "row": 11,
          "col": 8
        },
        "path": [
          {
            "row": 3,
            "col": 8
          },
          {
            "row": 4,
            "col": 8
          },
          {
            "row": 5,
            "col": 8
          },
          {
            "row": 6,
            "col": 8
          },
          {
            "row": 7,
            "col": 8
          },
          {
            "row": 8,
            "col": 8
          },
          {
            "row": 9,
            "col": 8
          },
          {
            "row": 10,
            "col": 8
          },
          {
            "row": 11,
            "col": 8
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "IGUALDADE",
        "displayTerm": "IGUALDADE",
        "clue": "Princípio do caput do Art. 5º: todos são iguais perante a lei, sem distinção de qualquer natureza.",
        "explanation": "Princípio da isonomia material: tratar igualmente os iguais e desigualmente os desiguais na medida de suas desigualdades.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 1
        },
        "end": {
          "row": 11,
          "col": 9
        },
        "path": [
          {
            "row": 3,
            "col": 1
          },
          {
            "row": 4,
            "col": 2
          },
          {
            "row": 5,
            "col": 3
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 7,
            "col": 5
          },
          {
            "row": 8,
            "col": 6
          },
          {
            "row": 9,
            "col": 7
          },
          {
            "row": 10,
            "col": 8
          },
          {
            "row": 11,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "SEGURANCA",
        "displayTerm": "SEGURANCA",
        "clue": "Dever do Estado, direito e responsabilidade de todos (Art. 144 da CF/88).",
        "explanation": "A segurança pública é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 0
        },
        "end": {
          "row": 12,
          "col": 8
        },
        "path": [
          {
            "row": 12,
            "col": 0
          },
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
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "FLAGRANTE",
        "displayTerm": "FLAGRANTE",
        "clue": "Situação processual que autoriza a prisão imediata do autor do fato sem mandado judicial.",
        "explanation": "Art. 5º, LXI da CF/88 e Art. 301 do CPP: qualquer do povo poderá e os policiais militares deverão prender quem esteja em flagrante.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 11
        },
        "end": {
          "row": 9,
          "col": 11
        },
        "path": [
          {
            "row": 1,
            "col": 11
          },
          {
            "row": 2,
            "col": 11
          },
          {
            "row": 3,
            "col": 11
          },
          {
            "row": 4,
            "col": 11
          },
          {
            "row": 5,
            "col": 11
          },
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
      },
      {
        "id": "ws_6",
        "term": "OSTENSIVO",
        "displayTerm": "OSTENSIVO",
        "clue": "Policiamento fardado preventivo exercido com exclusividade pelas Polícias Militares (Art. 144, § 5º).",
        "explanation": "Art. 144, § 5º da CF/88: às polícias militares cabem a polícia ostensiva e a preservação da ordem pública.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 10
        },
        "end": {
          "row": 11,
          "col": 10
        },
        "path": [
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
          },
          {
            "row": 10,
            "col": 10
          },
          {
            "row": 11,
            "col": 10
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "ASILO",
        "displayTerm": "ASILO",
        "clue": "A casa é o refúgio inviolável do indivíduo; ninguém pode nela penetrar sem permissão.",
        "explanation": "Art. 5º, XI da CF/88 - Exceções: flagrante delito, desastre, prestar socorro ou, durante o dia, por determinação judicial.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 10,
          "col": 2
        },
        "end": {
          "row": 6,
          "col": 6
        },
        "path": [
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
          }
        ]
      }
    ]
  },
  {
    "id": "ws_7_direitos_humanos",
    "title": "Missão 7: Direitos Humanos & Tratados Internacionais",
    "theme": "Direitos Humanos • DUDH 1948, San José da Costa Rica & Regras de Mandela",
    "badge": "D. Humanos 🌍",
    "bloco": "bloco_3",
    "blocoNome": "Bloco 3: Direito & Legislação",
    "xpReward": 250,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "L",
        "M",
        "T",
        "D",
        "M",
        "C",
        "A",
        "M",
        "I",
        "T",
        "V",
        "A",
        "C"
      ],
      [
        "N",
        "I",
        "D",
        "E",
        "I",
        "S",
        "O",
        "N",
        "O",
        "M",
        "I",
        "A",
        "R"
      ],
      [
        "O",
        "N",
        "Q",
        "C",
        "R",
        "G",
        "O",
        "D",
        "N",
        "Q",
        "D",
        "L",
        "A"
      ],
      [
        "S",
        "O",
        "L",
        "M",
        "Q",
        "C",
        "N",
        "E",
        "C",
        "E",
        "C",
        "S",
        "F"
      ],
      [
        "I",
        "R",
        "L",
        "A",
        "A",
        "C",
        "E",
        "I",
        "N",
        "T",
        "F",
        "E",
        "F"
      ],
      [
        "E",
        "I",
        "F",
        "N",
        "T",
        "T",
        "A",
        "O",
        "D",
        "I",
        "A",
        "O",
        "D"
      ],
      [
        "F",
        "A",
        "E",
        "D",
        "C",
        "O",
        "S",
        "A",
        "O",
        "A",
        "E",
        "A",
        "I"
      ],
      [
        "V",
        "S",
        "B",
        "E",
        "L",
        "F",
        "V",
        "C",
        "E",
        "Z",
        "D",
        "N",
        "C"
      ],
      [
        "P",
        "A",
        "S",
        "L",
        "U",
        "V",
        "N",
        "B",
        "M",
        "L",
        "A",
        "E",
        "Z"
      ],
      [
        "H",
        "I",
        "P",
        "A",
        "P",
        "M",
        "A",
        "D",
        "U",
        "D",
        "H",
        "R",
        "A"
      ],
      [
        "E",
        "P",
        "A",
        "O",
        "I",
        "A",
        "R",
        "L",
        "P",
        "A",
        "M",
        "O",
        "A"
      ],
      [
        "U",
        "V",
        "R",
        "E",
        "F",
        "U",
        "G",
        "I",
        "A",
        "D",
        "O",
        "S",
        "V"
      ],
      [
        "C",
        "E",
        "C",
        "L",
        "S",
        "A",
        "N",
        "J",
        "O",
        "S",
        "E",
        "C",
        "L"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "REFUGIADOS",
        "displayTerm": "REFUGIADOS",
        "clue": "Pessoas com fundado temor de perseguição protegidas pelo princípio do não rechaço (non-refoulement).",
        "explanation": "Convenção de Genebra de 1951 proíbe a devolução de refugiado para país onde sua vida corra perigo.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 11,
          "col": 2
        },
        "end": {
          "row": 11,
          "col": 11
        },
        "path": [
          {
            "row": 11,
            "col": 2
          },
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
          },
          {
            "row": 11,
            "col": 10
          },
          {
            "row": 11,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "DIGNIDADE",
        "displayTerm": "DIGNIDADE",
        "clue": "Fundamento irrenunciável que confere valor intrínseco e inalienável a todo ser humano.",
        "explanation": "Núcleo de vedação a tratamentos cruéis, degradantes ou desumanos em ações policiais.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 3
        },
        "end": {
          "row": 8,
          "col": 11
        },
        "path": [
          {
            "row": 0,
            "col": 3
          },
          {
            "row": 1,
            "col": 4
          },
          {
            "row": 2,
            "col": 5
          },
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
      },
      {
        "id": "ws_3",
        "term": "ISONOMIA",
        "displayTerm": "ISONOMIA",
        "clue": "Princípio da igualdade de tratamento sem distinção de raça, cor, gênero ou classe social.",
        "explanation": "Base de todos os tratados de direitos humanos do sistema global e interamericano.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 4
        },
        "end": {
          "row": 1,
          "col": 11
        },
        "path": [
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
        "id": "ws_4",
        "term": "MINORIAS",
        "displayTerm": "MINORIAS",
        "clue": "Grupos vulneráveis com proteção especial nos tratados contra discriminações históricas.",
        "explanation": "Proteção a povos originários, comunidades quilombolas, crianças, mulheres e pessoas com deficiência.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 1
        },
        "end": {
          "row": 7,
          "col": 1
        },
        "path": [
          {
            "row": 0,
            "col": 1
          },
          {
            "row": 1,
            "col": 1
          },
          {
            "row": 2,
            "col": 1
          },
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
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "SANJOSE",
        "displayTerm": "SANJOSE",
        "clue": "Pacto de San José da Costa Rica (Convenção Americana sobre Direitos Humanos de 1969).",
        "explanation": "Ratificado pelo Brasil em 1992; status supralegal (abaixo da CF, mas acima das leis ordinárias - Súmula Vinculante 25).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 4
        },
        "end": {
          "row": 12,
          "col": 10
        },
        "path": [
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
        "id": "ws_6",
        "term": "MANDELA",
        "displayTerm": "MANDELA",
        "clue": "Regras de [...] da ONU: Regras Mínimas para o Tratamento de Presos e Custodiados.",
        "explanation": "Normas que vedam a tortura, proíbem celas escuras e garantem alimentação, saúde e dignidade aos apenados.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 3
        },
        "end": {
          "row": 9,
          "col": 3
        },
        "path": [
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
        "id": "ws_7",
        "term": "DUDH",
        "displayTerm": "DUDH",
        "clue": "Declaração Universal dos Direitos Humanos adotada pela ONU em 10 de dezembro de 1948.",
        "explanation": "Marco histórico que consagrou a dignidade humana universal após as atrocidades da 2ª Guerra Mundial.",
        "mnemonicItems": [],
        "bancaPegadinha": "PEGADINHA AOCP: A banca diz que a DUDH é um Tratado internacional com força de lei. Errado! A DUDH nasceu como uma Resolução da Assembleia Geral da ONU (soft law), de força moral e costumeira.",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 9,
          "col": 7
        },
        "end": {
          "row": 9,
          "col": 10
        },
        "path": [
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
      }
    ]
  },
  {
    "id": "ws_8_estatuto_pmpe",
    "title": "Missão 8: Estatuto dos Policiais da PMPE (Lei 6.783/74)",
    "theme": "Legislação PMPE • Direitos, Deveres, Hierarquia, Prazos e Carreira",
    "badge": "Estatuto PMPE 🛡️",
    "bloco": "bloco_3",
    "blocoNome": "Bloco 3: Direito & Legislação",
    "xpReward": 260,
    "difficulty": "medio",
    "size": 13,
    "grid": [
      [
        "D",
        "E",
        "S",
        "O",
        "L",
        "D",
        "A",
        "D",
        "O",
        "O",
        "V",
        "N",
        "L"
      ],
      [
        "E",
        "O",
        "P",
        "D",
        "M",
        "D",
        "E",
        "L",
        "A",
        "M",
        "P",
        "M",
        "E"
      ],
      [
        "A",
        "E",
        "A",
        "L",
        "I",
        "C",
        "R",
        "C",
        "E",
        "T",
        "O",
        "P",
        "A"
      ],
      [
        "H",
        "N",
        "L",
        "R",
        "E",
        "S",
        "A",
        "T",
        "L",
        "L",
        "A",
        "A",
        "N"
      ],
      [
        "I",
        "L",
        "E",
        "E",
        "E",
        "G",
        "C",
        "I",
        "B",
        "R",
        "N",
        "T",
        "F"
      ],
      [
        "E",
        "A",
        "H",
        "X",
        "E",
        "T",
        "O",
        "I",
        "N",
        "D",
        "O",
        "E",
        "N"
      ],
      [
        "R",
        "V",
        "B",
        "R",
        "C",
        "R",
        "O",
        "N",
        "P",
        "A",
        "D",
        "N",
        "L"
      ],
      [
        "A",
        "T",
        "G",
        "M",
        "R",
        "L",
        "Q",
        "R",
        "S",
        "L",
        "G",
        "T",
        "E"
      ],
      [
        "R",
        "A",
        "E",
        "L",
        "C",
        "A",
        "U",
        "R",
        "I",
        "I",
        "I",
        "E",
        "V"
      ],
      [
        "Q",
        "R",
        "V",
        "D",
        "T",
        "I",
        "E",
        "S",
        "Q",
        "V",
        "P",
        "N",
        "R"
      ],
      [
        "U",
        "E",
        "F",
        "E",
        "I",
        "V",
        "T",
        "E",
        "A",
        "L",
        "S",
        "P",
        "A"
      ],
      [
        "I",
        "C",
        "T",
        "I",
        "E",
        "L",
        "C",
        "R",
        "C",
        "O",
        "C",
        "T",
        "V"
      ],
      [
        "A",
        "O",
        "S",
        "R",
        "Q",
        "N",
        "O",
        "E",
        "M",
        "R",
        "A",
        "D",
        "L"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "HIERARQUIA",
        "displayTerm": "HIERARQUIA",
        "clue": "Ordenação da autoridade militar em diferentes níveis sucessivos dentro da corporação.",
        "explanation": "Art. 12 da Lei nº 6.783/74 - Junto com a disciplina forma a base institucional da Polícia Militar.",
        "mnemonicItems": [],
        "bancaPegadinha": "PEGADINHA AOCP: Dizer que os círculos hierárquicos têm a finalidade de promover desigualdade. Errado! Os círculos hierárquicos destinam-se a desenvolver a convivência camaradagem em ambiente de estima.",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 0
        },
        "end": {
          "row": 12,
          "col": 0
        },
        "path": [
          {
            "row": 3,
            "col": 0
          },
          {
            "row": 4,
            "col": 0
          },
          {
            "row": 5,
            "col": 0
          },
          {
            "row": 6,
            "col": 0
          },
          {
            "row": 7,
            "col": 0
          },
          {
            "row": 8,
            "col": 0
          },
          {
            "row": 9,
            "col": 0
          },
          {
            "row": 10,
            "col": 0
          },
          {
            "row": 11,
            "col": 0
          },
          {
            "row": 12,
            "col": 0
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "DISCIPLINA",
        "displayTerm": "DISCIPLINA",
        "clue": "Rigorosa observância e acatamento integral das leis, regulamentos e ordens superiores.",
        "explanation": "Manifesta-se pela obediência pronta às ordens legais e correção de atitudes.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 3
        },
        "end": {
          "row": 10,
          "col": 12
        },
        "path": [
          {
            "row": 1,
            "col": 3
          },
          {
            "row": 2,
            "col": 4
          },
          {
            "row": 3,
            "col": 5
          },
          {
            "row": 4,
            "col": 6
          },
          {
            "row": 5,
            "col": 7
          },
          {
            "row": 6,
            "col": 8
          },
          {
            "row": 7,
            "col": 9
          },
          {
            "row": 8,
            "col": 10
          },
          {
            "row": 9,
            "col": 11
          },
          {
            "row": 10,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "AGREGACAO",
        "displayTerm": "AGREGACAO",
        "clue": "Situação na qual o militar da ativa deixa temporariamente de ocupar vaga na escala hierárquica.",
        "explanation": "Art. 75 da Lei nº 6.783/74 - Fica agregado quando aguarda transferência para a reserva, exerce cargo civil temporário ou está à disposição.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 8,
          "col": 1
        },
        "end": {
          "row": 0,
          "col": 9
        },
        "path": [
          {
            "row": 8,
            "col": 1
          },
          {
            "row": 7,
            "col": 2
          },
          {
            "row": 6,
            "col": 3
          },
          {
            "row": 5,
            "col": 4
          },
          {
            "row": 4,
            "col": 5
          },
          {
            "row": 3,
            "col": 6
          },
          {
            "row": 2,
            "col": 7
          },
          {
            "row": 1,
            "col": 8
          },
          {
            "row": 0,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "REVERSAO",
        "displayTerm": "REVERSAO",
        "clue": "Ato pelo qual o policial militar agregado retorna ao respectivo quadro logo que cessa o motivo da agregação.",
        "explanation": "Art. 82 da Lei nº 6.783/74 - Reversão é a volta do agregado ao seu lugar ativo na escala.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 3
        },
        "end": {
          "row": 5,
          "col": 10
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
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "EXCLUSAO",
        "displayTerm": "EXCLUSAO",
        "clue": "Desligamento da PMPE a bem da disciplina ou por deserção com perda do vínculo militar.",
        "explanation": "Aplica-se às praças mediante processo administrativo disciplinar militar.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 4,
          "col": 2
        },
        "end": {
          "row": 11,
          "col": 9
        },
        "path": [
          {
            "row": 4,
            "col": 2
          },
          {
            "row": 5,
            "col": 3
          },
          {
            "row": 6,
            "col": 4
          },
          {
            "row": 7,
            "col": 5
          },
          {
            "row": 8,
            "col": 6
          },
          {
            "row": 9,
            "col": 7
          },
          {
            "row": 10,
            "col": 8
          },
          {
            "row": 11,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "PATENTE",
        "displayTerm": "PATENTE",
        "clue": "Carta conferida pelo Governador do Estado que assegura o posto e as prerrogativas aos Oficiais.",
        "explanation": "A patente confere direitos e honras privativas ao Oficial da PMPE.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 2,
          "col": 11
        },
        "end": {
          "row": 8,
          "col": 11
        },
        "path": [
          {
            "row": 2,
            "col": 11
          },
          {
            "row": 3,
            "col": 11
          },
          {
            "row": 4,
            "col": 11
          },
          {
            "row": 5,
            "col": 11
          },
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
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "SOLDADO",
        "displayTerm": "SOLDADO",
        "clue": "Graduação inicial da carreira de praças combatentes da Polícia Militar de Pernambuco.",
        "explanation": "Cargo de provimento efetivo objeto do concurso CFSD PMPE.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 2
        },
        "end": {
          "row": 0,
          "col": 8
        },
        "path": [
          {
            "row": 0,
            "col": 2
          },
          {
            "row": 0,
            "col": 3
          },
          {
            "row": 0,
            "col": 4
          },
          {
            "row": 0,
            "col": 5
          },
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
          }
        ]
      }
    ]
  },
  {
    "id": "ws_9_leg_extravagante",
    "title": "Missão 9: Legislação Extravagante & Leis Penais Especiais",
    "theme": "Leis Especiais • Desarmamento, Drogas, Tortura, Abuso de Autoridade & ECA",
    "badge": "Leis Caveira 💀",
    "bloco": "bloco_3",
    "blocoNome": "Bloco 3: Direito & Legislação",
    "xpReward": 280,
    "difficulty": "dificil",
    "size": 13,
    "grid": [
      [
        "N",
        "H",
        "E",
        "C",
        "D",
        "N",
        "D",
        "E",
        "A",
        "A",
        "P",
        "N",
        "N"
      ],
      [
        "H",
        "E",
        "D",
        "I",
        "O",
        "N",
        "D",
        "O",
        "M",
        "U",
        "A",
        "N",
        "M"
      ],
      [
        "A",
        "A",
        "E",
        "N",
        "M",
        "S",
        "D",
        "D",
        "A",
        "E",
        "A",
        "T",
        "E"
      ],
      [
        "U",
        "T",
        "S",
        "N",
        "L",
        "A",
        "O",
        "R",
        "R",
        "V",
        "C",
        "C",
        "O"
      ],
      [
        "T",
        "O",
        "A",
        "N",
        "E",
        "S",
        "E",
        "O",
        "I",
        "A",
        "H",
        "E",
        "L"
      ],
      [
        "O",
        "R",
        "R",
        "L",
        "D",
        "R",
        "O",
        "G",
        "A",
        "D",
        "F",
        "N",
        "D"
      ],
      [
        "R",
        "T",
        "M",
        "E",
        "V",
        "I",
        "S",
        "A",
        "D",
        "D",
        "A",
        "T",
        "A"
      ],
      [
        "I",
        "U",
        "A",
        "U",
        "L",
        "A",
        "C",
        "S",
        "A",
        "D",
        "L",
        "O",
        "L"
      ],
      [
        "D",
        "R",
        "M",
        "R",
        "N",
        "H",
        "L",
        "Q",
        "P",
        "L",
        "R",
        "I",
        "G"
      ],
      [
        "A",
        "A",
        "E",
        "D",
        "G",
        "L",
        "C",
        "E",
        "E",
        "C",
        "T",
        "O",
        "E"
      ],
      [
        "D",
        "A",
        "N",
        "C",
        "L",
        "O",
        "C",
        "N",
        "N",
        "R",
        "T",
        "D",
        "M"
      ],
      [
        "E",
        "H",
        "T",
        "Q",
        "O",
        "I",
        "V",
        "D",
        "H",
        "V",
        "L",
        "N",
        "A"
      ],
      [
        "E",
        "S",
        "O",
        "G",
        "C",
        "R",
        "O",
        "R",
        "A",
        "E",
        "Q",
        "L",
        "S"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "DESARMAMENTO",
        "displayTerm": "DESARMAMENTO",
        "clue": "Estatuto instituído pela Lei nº 10.826/2003 que regulamenta posse, porte e disparo de armas.",
        "explanation": "Diferença vital: Posse irregular (Art. 12 - no interior da residência ou trabalho); Porte ilegal (Art. 14 - fora de casa/via pública).",
        "mnemonicItems": [],
        "bancaPegadinha": "PEGADINHA AOCP: Arma de uso restrito ou proibido agora é Art. 16. O disparo de arma de fogo (Art. 15) só é crime se não tiver a intenção de praticar outro crime mais grave!",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 2
        },
        "end": {
          "row": 12,
          "col": 2
        },
        "path": [
          {
            "row": 1,
            "col": 2
          },
          {
            "row": 2,
            "col": 2
          },
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
        "id": "ws_2",
        "term": "MARIADAPENHA",
        "displayTerm": "MARIADAPENHA",
        "clue": "Lei nº 11.340/2006 de proteção à mulher contra violência doméstica e familiar.",
        "explanation": "Formas de violência: física, psicológica, sexual, patrimonial e moral.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 8
        },
        "end": {
          "row": 12,
          "col": 8
        },
        "path": [
          {
            "row": 1,
            "col": 8
          },
          {
            "row": 2,
            "col": 8
          },
          {
            "row": 3,
            "col": 8
          },
          {
            "row": 4,
            "col": 8
          },
          {
            "row": 5,
            "col": 8
          },
          {
            "row": 6,
            "col": 8
          },
          {
            "row": 7,
            "col": 8
          },
          {
            "row": 8,
            "col": 8
          },
          {
            "row": 9,
            "col": 8
          },
          {
            "row": 10,
            "col": 8
          },
          {
            "row": 11,
            "col": 8
          },
          {
            "row": 12,
            "col": 8
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "AUTORIDADE",
        "displayTerm": "AUTORIDADE",
        "clue": "Lei nº 13.869/2019: pune abusos cometidos por servidor público com finalidade específica.",
        "explanation": "Exige dolo específico de prejudicar outrem, beneficiar a si mesmo ou por mero capricho/satisfação pessoal.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 2,
          "col": 0
        },
        "end": {
          "row": 11,
          "col": 0
        },
        "path": [
          {
            "row": 2,
            "col": 0
          },
          {
            "row": 3,
            "col": 0
          },
          {
            "row": 4,
            "col": 0
          },
          {
            "row": 5,
            "col": 0
          },
          {
            "row": 6,
            "col": 0
          },
          {
            "row": 7,
            "col": 0
          },
          {
            "row": 8,
            "col": 0
          },
          {
            "row": 9,
            "col": 0
          },
          {
            "row": 10,
            "col": 0
          },
          {
            "row": 11,
            "col": 0
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "HEDIONDO",
        "displayTerm": "HEDIONDO",
        "clue": "Lei nº 8.072/1990: crimes inafiançáveis e insuscetíveis de anistia, graça ou fiança.",
        "explanation": "Mnemônico 3T+H: Tortura, Tráfico, Terrorismo e Hediondos.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 0
        },
        "end": {
          "row": 1,
          "col": 7
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
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "TORTURA",
        "displayTerm": "TORTURA",
        "clue": "Crime inafiançável e insuscetível de graça ou anistia regulado pela Lei Federal nº 9.455/1997.",
        "explanation": "A condenação acarreta a perda automática do cargo público e interdição pelo DOBRO do prazo da pena aplicada.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 3,
          "col": 1
        },
        "end": {
          "row": 9,
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
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "ALGEMAS",
        "displayTerm": "ALGEMAS",
        "clue": "Súmula Vinculante 11 do STF: restringe o uso a casos de resistência, perigo ou fuga justificados.",
        "explanation": "O uso abusivo gera responsabilidade disciplinar, civil e penal, além da nulidade do ato.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 6,
          "col": 12
        },
        "end": {
          "row": 12,
          "col": 12
        },
        "path": [
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
          },
          {
            "row": 11,
            "col": 12
          },
          {
            "row": 12,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "DROGAS",
        "displayTerm": "DROGAS",
        "clue": "Lei nº 11.343/2006: Art. 28 (usuário - não tem prisão) vs Art. 33 (tráfico ilícito).",
        "explanation": "Para o usuário do Art. 28 NÃO há pena de prisão (apenas advertência, prestação de serviços e medida educativa).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 2,
          "col": 7
        },
        "end": {
          "row": 7,
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
          }
        ]
      }
    ]
  },
  {
    "id": "ws_10_direito_penal",
    "title": "Missão 10: Direito Penal - Teoria do Crime & Excludentes",
    "theme": "Direito Penal • Fato Típico, Ilicitude, Culpabilidade & Crimes contra a Vida",
    "badge": "Penal Elite ⚔️",
    "bloco": "bloco_3",
    "blocoNome": "Bloco 3: Direito & Legislação",
    "xpReward": 300,
    "difficulty": "dificilimo",
    "size": 13,
    "grid": [
      [
        "G",
        "M",
        "N",
        "C",
        "L",
        "L",
        "E",
        "D",
        "A",
        "O",
        "R",
        "E",
        "A"
      ],
      [
        "I",
        "D",
        "D",
        "U",
        "E",
        "D",
        "E",
        "N",
        "D",
        "I",
        "D",
        "V",
        "O"
      ],
      [
        "L",
        "D",
        "N",
        "L",
        "C",
        "L",
        "E",
        "A",
        "I",
        "A",
        "I",
        "R",
        "E"
      ],
      [
        "I",
        "D",
        "F",
        "P",
        "V",
        "R",
        "T",
        "A",
        "D",
        "T",
        "U",
        "E",
        "I"
      ],
      [
        "C",
        "N",
        "T",
        "A",
        "A",
        "S",
        "S",
        "I",
        "A",
        "T",
        "A",
        "H",
        "A"
      ],
      [
        "I",
        "S",
        "C",
        "B",
        "E",
        "P",
        "C",
        "T",
        "A",
        "O",
        "C",
        "I",
        "A"
      ],
      [
        "T",
        "I",
        "S",
        "I",
        "O",
        "I",
        "N",
        "A",
        "R",
        "C",
        "C",
        "P",
        "E"
      ],
      [
        "U",
        "G",
        "C",
        "L",
        "P",
        "E",
        "A",
        "V",
        "I",
        "N",
        "L",
        "C",
        "S"
      ],
      [
        "D",
        "D",
        "D",
        "I",
        "T",
        "Q",
        "E",
        "E",
        "E",
        "U",
        "I",
        "C",
        "O"
      ],
      [
        "E",
        "P",
        "T",
        "D",
        "E",
        "T",
        "O",
        "L",
        "C",
        "O",
        "P",
        "M",
        "S"
      ],
      [
        "I",
        "I",
        "D",
        "A",
        "E",
        "S",
        "M",
        "A",
        "L",
        "L",
        "L",
        "E",
        "L"
      ],
      [
        "R",
        "F",
        "F",
        "D",
        "C",
        "A",
        "C",
        "O",
        "S",
        "H",
        "I",
        "V",
        "O"
      ],
      [
        "M",
        "L",
        "A",
        "E",
        "R",
        "E",
        "D",
        "O",
        "N",
        "T",
        "U",
        "D",
        "V"
      ]
    ],
    "words": [
      {
        "id": "ws_1",
        "term": "CULPABILIDADE",
        "displayTerm": "CULPABILIDADE",
        "clue": "Juízo de reprovação social pessoal que recai sobre o autor do fato típico e ilícito.",
        "explanation": "Elementos: Imputabilidade penal + Potencial consciência da ilicitude + Exigibilidade de conduta diversa.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 0,
          "col": 3
        },
        "end": {
          "row": 12,
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
          },
          {
            "row": 10,
            "col": 3
          },
          {
            "row": 11,
            "col": 3
          },
          {
            "row": 12,
            "col": 3
          }
        ]
      },
      {
        "id": "ws_2",
        "term": "TIPICIDADE",
        "displayTerm": "TIPICIDADE",
        "clue": "Primeiro elemento do fato típico: correspondência entre a conduta do agente e a lei penal.",
        "explanation": "Fato típico = Conduta (dolosa/culposa) + Resultado + Nexo Causal + Tipicidade (formal e material).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 9,
          "col": 2
        },
        "end": {
          "row": 0,
          "col": 11
        },
        "path": [
          {
            "row": 9,
            "col": 2
          },
          {
            "row": 8,
            "col": 3
          },
          {
            "row": 7,
            "col": 4
          },
          {
            "row": 6,
            "col": 5
          },
          {
            "row": 5,
            "col": 6
          },
          {
            "row": 4,
            "col": 7
          },
          {
            "row": 3,
            "col": 8
          },
          {
            "row": 2,
            "col": 9
          },
          {
            "row": 1,
            "col": 10
          },
          {
            "row": 0,
            "col": 11
          }
        ]
      },
      {
        "id": "ws_3",
        "term": "ILICITUDE",
        "displayTerm": "ILICITUDE",
        "clue": "Segundo substrato do crime analítico: contrariedade entre a conduta típica e o direito.",
        "explanation": "Excludentes do Art. 23 do CP: Estado de necessidade, Legítima defesa, Estrito cumprimento de dever legal e Exercício regular de direito.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 1,
          "col": 0
        },
        "end": {
          "row": 9,
          "col": 0
        },
        "path": [
          {
            "row": 1,
            "col": 0
          },
          {
            "row": 2,
            "col": 0
          },
          {
            "row": 3,
            "col": 0
          },
          {
            "row": 4,
            "col": 0
          },
          {
            "row": 5,
            "col": 0
          },
          {
            "row": 6,
            "col": 0
          },
          {
            "row": 7,
            "col": 0
          },
          {
            "row": 8,
            "col": 0
          },
          {
            "row": 9,
            "col": 0
          }
        ]
      },
      {
        "id": "ws_4",
        "term": "TENTATIVA",
        "displayTerm": "TENTATIVA",
        "clue": "Iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente.",
        "explanation": "Art. 14, II do CP: Crime tentado. Pune-se com a pena do crime consumado diminuída de um a dois terços.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 8,
          "col": 4
        },
        "end": {
          "row": 0,
          "col": 12
        },
        "path": [
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
          },
          {
            "row": 0,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_5",
        "term": "ESTADO",
        "displayTerm": "ESTADO",
        "clue": "Excludente do Art. 24 do CP: [...] de necessidade, perigo atual a direito próprio ou alheio.",
        "explanation": "Sacrifica-se um bem jurídico menor para salvar um bem maior que não tinha o dever legal de enfrentar o perigo.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 5,
          "col": 4
        },
        "end": {
          "row": 0,
          "col": 9
        },
        "path": [
          {
            "row": 5,
            "col": 4
          },
          {
            "row": 4,
            "col": 5
          },
          {
            "row": 3,
            "col": 6
          },
          {
            "row": 2,
            "col": 7
          },
          {
            "row": 1,
            "col": 8
          },
          {
            "row": 0,
            "col": 9
          }
        ]
      },
      {
        "id": "ws_6",
        "term": "CULPA",
        "displayTerm": "CULPA",
        "clue": "Inobservância do dever objetivo de cuidado por imprudência, negligência ou imperícia.",
        "explanation": "Art. 18, II do CP: No direito penal, a conduta culposa só é punida quando há expressa previsão legal.",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 9,
          "col": 8
        },
        "end": {
          "row": 5,
          "col": 12
        },
        "path": [
          {
            "row": 9,
            "col": 8
          },
          {
            "row": 8,
            "col": 9
          },
          {
            "row": 7,
            "col": 10
          },
          {
            "row": 6,
            "col": 11
          },
          {
            "row": 5,
            "col": 12
          }
        ]
      },
      {
        "id": "ws_7",
        "term": "DOLO",
        "displayTerm": "DOLO",
        "clue": "Vontade livre e consciente do agente de praticar a conduta e produzir o resultado proibido.",
        "explanation": "Art. 18, I do CP: Dolo direto (quis o resultado) e Dolo eventual (assumiu o risco de produzi-lo).",
        "mnemonicItems": [],
        "bancaPegadinha": "",
        "category": "geral",
        "bloco": "bloco_1",
        "start": {
          "row": 12,
          "col": 6
        },
        "end": {
          "row": 9,
          "col": 9
        },
        "path": [
          {
            "row": 12,
            "col": 6
          },
          {
            "row": 11,
            "col": 7
          },
          {
            "row": 10,
            "col": 8
          },
          {
            "row": 9,
            "col": 9
          }
        ]
      }
    ]
  }
];
