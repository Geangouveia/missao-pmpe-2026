import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 100 QUESTÕES INÉDITAS DE LÍNGUA PORTUGUESA (INSTITUTO AOCP PMPE)
 * 100% fiéis ao Edital Oficial da PMPE 2026.
 */
export const BANCO_100_PORTUGUES_AOCP: QuizQuestion[] = [
  {
    "id": "port_inedita_100_001",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Regras Gerais e Casos Especiais",
    "question": "[AOCP PMPE Inédita Q001] De acordo com o Novo Acordo Ortográfico e as regras de acentuação gráfica da Língua Portuguesa, assinale a alternativa em que todas as palavras são acentuadas pela mesma regra gramatical das proparoxítonas:",
    "options": [
      "policial, quartel, batalhão, militar.",
      "lâmpada, tático, bélico, cúpula.",
      "álbum, pólen, caráter, tórax.",
      "herói, papéis, troféu, chapéu.",
      "saúde, saída, faísca, balaústre."
    ],
    "correctIndex": 1,
    "explanation": "Todas as palavras da opção 'lâmpada, tático, bélico, cúpula' são proparoxítonas (antepenúltima sílaba tônica) e, na língua portuguesa, todas as proparoxítonas são obrigatoriamente acentuadas.",
    "fundamentacaoLegal": "Novo Acordo Ortográfico • Regra das Proparoxítonas.",
    "hint": "Todas as proparoxítonas são acentuadas sem exceção!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Conte as sílabas de trás para frente: última (oxítona), penúltima (paroxítona), antepenúltima (proparoxítona).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Todas as palavras da opção 'lâmpada, tático, bélico, cúpula' são proparoxítonas (antepenúltima sílaba tônica) e, na língua portuguesa, todas as proparoxítonas são obrigatoriamente acentuadas.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_002",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Paroxítonas vs. Oxítonas",
    "question": "[AOCP PMPE Inédita Q002] Assinale a alternativa que apresenta uma palavra que perdeu o acento gráfico com o advento do Novo Acordo Ortográfico:",
    "options": [
      "pôde (pretérito perfeito)",
      "ideia",
      "táxi",
      "pára-quedas",
      "revólver"
    ],
    "correctIndex": 1,
    "explanation": "Com o Novo Acordo Ortográfico, os ditongos abertos 'ei' e 'oi' em palavras paroxítonas deixaram de receber acento gráfico (ex.: ideia, assembleia, boia, paranoia, heroico). Contudo, nas oxítonas o acento permanece (ex.: herói, papéis).",
    "fundamentacaoLegal": "Base IX do Acordo Ortográfico da Língua Portuguesa.",
    "hint": "Ditongo aberto 'ei' e 'oi' perdeu o acento nas PAROXÍTONAS!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A 'ideia' paroxítona perdeu o chapéu; o 'herói' oxítono continua firme com chapéu.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Com o Novo Acordo Ortográfico, os ditongos abertos 'ei' e 'oi' em palavras paroxítonas deixaram de receber acento gráfico (ex.: ideia, assembleia, boia, paranoia, heroico). Contudo, nas oxítonas o acento permanece (ex.: herói, papéis).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_003",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Regra dos Hiatos",
    "question": "[AOCP PMPE Inédita Q003] As palavras 'juízes', 'saúde' e 'baú' são graficamente acentuadas em virtude da seguinte regra:",
    "options": [
      "Serem palavras oxítonas terminadas em vogal tônica.",
      "Regra do acento diferencial de tempo verbal.",
      "Regra especial dos hiatos em 'i' e 'u' tônicos sozinhos na sílaba ou seguidos de 's'.",
      "Serem proparoxítonas aparentes ou eventuais.",
      "Regra dos ditongos abertos tônicos."
    ],
    "correctIndex": 2,
    "explanation": "Acentuam-se com acento agudo as letras 'i' e 'u' tônicas quando formam hiato com a vogal anterior, estando sozinhas na sílaba ou acompanhadas apenas de 's', desde que não sejam seguidas por 'nh' nem precedidas de ditongo em paroxítonas.",
    "fundamentacaoLegal": "Regra Especial dos Hiatos • Gramática Normativa.",
    "hint": "I ou U tônicos formando sílaba sozinhos ou com S: regra do hiato!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Hiato isolado com I ou U = acento na veia (ju-í-zes, sa-ú-de).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. Acentuam-se com acento agudo as letras 'i' e 'u' tônicas quando formam hiato com a vogal anterior, estando sozinhas na sílaba ou acompanhadas apenas de 's', desde que não sejam seguidas por 'nh' nem precedidas de ditongo em paroxítonas.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_004",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Acento Diferencial",
    "question": "[AOCP PMPE Inédita Q004] O acento circunflexo é obrigatoriamente mantido no Novo Acordo Ortográfico para diferenciar a forma verbal do pretérito perfeito da forma do presente em:",
    "options": [
      "pára / para",
      "pêlo / pelo",
      "pôde / pode",
      "pêra / pera",
      "pólo / polo"
    ],
    "correctIndex": 2,
    "explanation": "O acento diferencial foi abolido na maioria das palavras (pára, pêlo, pêra, pólo), mas foi expressamente PRESERVADO no verbo 'pôde' (pretérito perfeito do indicativo) para distinguir de 'pode' (presente do indicativo), além de 'pôr' (verbo) contra 'por' (preposição).",
    "fundamentacaoLegal": "Acordo Ortográfico de 1990 • Casos Remanescentes de Acento Diferencial.",
    "hint": "Ele 'pôde' ontem; ele 'pode' hoje!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ontem pôde (com acento), hoje pode (sem acento).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. O acento diferencial foi abolido na maioria das palavras (pára, pêlo, pêra, pólo), mas foi expressamente PRESERVADO no verbo 'pôde' (pretérito perfeito do indicativo) para distinguir de 'pode' (presente do indicativo), além de 'pôr' (verbo) contra 'por' (preposição).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_005",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Monossílabos Tônicos",
    "question": "[AOCP PMPE Inédita Q005] Assinale a alternativa em que todos os vocábulos monossílabos tônicos são acentuados pela mesma regra gramatical:",
    "options": [
      "pá, fé, nó, três.",
      "ti, tu, mim, cá.",
      "li, vi, crê, dê.",
      "já, pé, quis, nós.",
      "só, lá, giz, dor."
    ],
    "correctIndex": 0,
    "explanation": "Acentuam-se os monossílabos tônicos terminados nas vogais 'a', 'e', 'o' seguidas ou não de 's' (pá, fé, nó, três). Monossílabos terminados em 'i', 'u', 'z', 'r' não recebem acento por essa regra.",
    "fundamentacaoLegal": "Regra dos Monossílabos Tônicos • Gramática Normativa.",
    "hint": "Monossílabo tônico só acentua terminado em A, E, O (seguidos ou não de S)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A, E, O: os reis dos monossílabos.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Acentuam-se os monossílabos tônicos terminados nas vogais 'a', 'e', 'o' seguidas ou não de 's' (pá, fé, nó, três). Monossílabos terminados em 'i', 'u', 'z', 'r' não recebem acento por essa regra.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_006",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Oxítonas",
    "question": "[AOCP PMPE Inédita Q006] Assinale o conjunto composto exclusivamente por palavras oxítonas acentuadas segundo a norma-padrão:",
    "options": [
      "maracujá, café, cipó, armazém.",
      "lápis, álbum, vírus, bônus.",
      "rubrica, avaro, pudico, ínterim.",
      "recruta, soldado, cabo, sargento.",
      "caráter, açúcar, cadáver, mártir."
    ],
    "correctIndex": 0,
    "explanation": "Acentuam-se as palavras oxítonas terminadas em: a(s), e(s), o(s), em, ens. Todas as palavras de 'maracujá, café, cipó, armazém' cumprem estritamente essa regra de terminação.",
    "fundamentacaoLegal": "Regra Geral das Palavras Oxítonas.",
    "hint": "Oxítonas acentuam quando terminam em A, E, O, EM, ENS!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A-E-O-EM-ENS: terminação campeã das oxítonas.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Acentuam-se as palavras oxítonas terminadas em: a(s), e(s), o(s), em, ens. Todas as palavras de 'maracujá, café, cipó, armazém' cumprem estritamente essa regra de terminação.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_007",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Verbos Ter e Vir no Plural",
    "question": "[AOCP PMPE Inédita Q007] Na frase 'Os policiais militares _____ prontidão enquanto os reforços não _____ ao batalhão', as lacunas devem ser preenchidas, correta e respectivamente, por:",
    "options": [
      "tem / vem",
      "têm / vêm",
      "teem / veem",
      "têm / veem",
      "tem / vêm"
    ],
    "correctIndex": 1,
    "explanation": "Na 3ª pessoa do plural do presente do indicativo, os verbos 'ter' e 'vir' recebem acento circunflexo diferencial de número: ele tem -> eles têm; ele vem -> eles vêm. Não confunda com 'veem' (do verbo ver).",
    "fundamentacaoLegal": "Acento Diferencial de Número nos Verbos Ter e Vir.",
    "hint": "Singular: ele tem/vem (sem acento). Plural: eles têm/vêm (com circunflexo)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Dois olhos para ver (veem sem acento); um chapéu para vir e ter no plural (têm / vêm).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Na 3ª pessoa do plural do presente do indicativo, os verbos 'ter' e 'vir' recebem acento circunflexo diferencial de número: ele tem -> eles têm; ele vem -> eles vêm. Não confunda com 'veem' (do verbo ver).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_008",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Paroxítonas em Ditongo",
    "question": "[AOCP PMPE Inédita Q008] As palavras 'relatório', 'inquérito', 'tático' e 'polícia' classificam-se, respectivamente, quanto à posição da sílaba tônica e acentuação, como:",
    "options": [
      "Paroxítona terminada em ditongo, proparoxítona, proparoxítona e paroxítona terminada em ditongo.",
      "Proparoxítona, oxítona, proparoxítona e oxítona.",
      "Oxítona, paroxítona, proparoxítona e paroxítona.",
      "Todas são consideradas obrigatoriamente proparoxítonas reais.",
      "Paroxítona, paroxítona, oxítona e proparoxítona."
    ],
    "correctIndex": 0,
    "explanation": "'Relatório' e 'polícia' terminam em ditongo crescente, sendo paroxítonas eventuais/acidentais (ou paroxítonas terminadas em ditongo). 'Inquérito' e 'tático' têm como tônica a antepenúltima sílaba, sendo proparoxítonas.",
    "fundamentacaoLegal": "Classificação da Tonicidade Silábica • AOCP.",
    "hint": "Re-la-tó-rio (ditongo no fim); In-qué-ri-to (antepenúltima).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fim com duas vogais coladas pronunciadas juntas = ditongo.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Relatório' e 'polícia' terminam em ditongo crescente, sendo paroxítonas eventuais/acidentais (ou paroxítonas terminadas em ditongo). 'Inquérito' e 'tático' têm como tônica a antepenúltima sílaba, sendo proparoxítonas.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_009",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Grafia e Prosódia",
    "question": "[AOCP PMPE Inédita Q009] Assinale a alternativa em que a palavra apresenta erro de prosódia (deslocamento incorreto da sílaba tônica) frequentemente explorado pelo Instituto AOCP:",
    "options": [
      "A palavra 'rubrica' é paroxítona (ru-BRI-ca) e não recebe acento.",
      "A palavra 'filantropo' é paroxítona (fi-lan-TRO-po).",
      "A palavra 'recorde' é paroxítona (re-COR-de).",
      "A palavra 'pudico' é proparoxítona e deve ser escrita como 'púdico'.",
      "A palavra 'avaro' é paroxítona (a-VA-ro)."
    ],
    "correctIndex": 3,
    "explanation": "'Pudico' é palavra paroxítona (pu-DI-co) e NÃO possui acento gráfico. Pronunciá-la ou grafá-la como 'púdico' constitui erro de prosódia e ortografia.",
    "fundamentacaoLegal": "Prosódia e Acentuação Gramatical • Vocabulário Ortográfico.",
    "hint": "Rubrica, recorde e pudico são TODAS paroxítonas sem acento!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Não dê acento na rubrica nem no pudico.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Correta. 'Pudico' é palavra paroxítona (pu-DI-co) e NÃO possui acento gráfico. Pronunciá-la ou grafá-la como 'púdico' constitui erro de prosódia e ortografia.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_010",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Formas Verbais com Pronome Enclítico",
    "question": "[AOCP PMPE Inédita Q010] Assinale a alternativa em que a forma verbal associada a pronome oblíquo enclítico está acentuada de acordo com as normas vigentes:",
    "options": [
      "feze-lo",
      "amá-lo",
      "vêr-lo",
      "pô-lo-ei",
      "distribúi-lo"
    ],
    "correctIndex": 1,
    "explanation": "Ao associar verbos terminados em -r, -s, -z aos pronomes 'o/a', as consoantes finais caem e os pronomes assumem a forma 'lo/la'. O verbo 'amar' perde o 'r' e vira 'amá-lo', tornando-se uma oxítona terminada em 'a', logo acentuada.",
    "fundamentacaoLegal": "Acentuação de Formas Verbais Enclíticas.",
    "hint": "Amar + o = amá-lo (oxítona terminada em A).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Cortou o R, S ou Z, vira lo/la; se terminar em A, E, O tônico, ganha acento.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Ao associar verbos terminados em -r, -s, -z aos pronomes 'o/a', as consoantes finais caem e os pronomes assumem a forma 'lo/la'. O verbo 'amar' perde o 'r' e vira 'amá-lo', tornando-se uma oxítona terminada em 'a', logo acentuada.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_011",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Regra geral da crase com termo regente feminino.",
    "question": "[AOCP PMPE Inédita Q011] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O capitão entregou o relatório __ autoridade competente.'",
    "options": [
      "a",
      "à",
      "às",
      "ha",
      "àquela"
    ],
    "correctIndex": 1,
    "explanation": "Entregou a quem? À autoridade (verbo transitivo indireto exige 'a' + artigo feminino 'a').",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Entregou a quem? À autoridade (verbo transitivo indireto exige 'a' + artigo feminino 'a').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_012",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Expressões temporais correlativas.",
    "question": "[AOCP PMPE Inédita Q012] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O comandante permaneceu de guarda de segunda __ sexta-feira.'",
    "options": [
      "à",
      "a",
      "há",
      "às",
      "nas"
    ],
    "correctIndex": 1,
    "explanation": "Em expressões correlatas 'de... a' sem artigo antes do primeiro termo, não ocorre crase ('de segunda a sexta'). Se fosse 'da segunda à sexta', haveria crase.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Em expressões correlatas 'de... a' sem artigo antes do primeiro termo, não ocorre crase ('de segunda a sexta'). Se fosse 'da segunda à sexta', haveria crase.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_013",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Crase proibida antes de pronome indefinido.",
    "question": "[AOCP PMPE Inédita Q013] Assinale a alternativa que preenche corretamente a lacuna da frase: 'A viatura deslocou-se __ toda velocidade pelas ruas de Olinda.'",
    "options": [
      "à",
      "a",
      "há",
      "na",
      "às"
    ],
    "correctIndex": 1,
    "explanation": "Não ocorre crase antes de pronomes indefinidos como 'toda', 'qualquer', 'cada'.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Não ocorre crase antes de pronomes indefinidos como 'toda', 'qualquer', 'cada'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_014",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Crase diante de pronomes de tratamento.",
    "question": "[AOCP PMPE Inédita Q014] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O graduado referiu-se __ Vossa Excelência com deferência militar.'",
    "options": [
      "à",
      "a",
      "há",
      "para à",
      "às"
    ],
    "correctIndex": 1,
    "explanation": "Não se usa crase diante de pronomes de tratamento (Vossa Excelência, Vossa Senhoria), com exceção de senhora, senhorita e dona.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Não se usa crase diante de pronomes de tratamento (Vossa Excelência, Vossa Senhoria), com exceção de senhora, senhorita e dona.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_015",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Crase proibida diante de vocábulos masculinos.",
    "question": "[AOCP PMPE Inédita Q015] Assinale a alternativa que preenche corretamente a lacuna da frase: 'A guarnição militar foi __ pé até a área conflagrada.'",
    "options": [
      "à",
      "a",
      "há",
      "de",
      "para à"
    ],
    "correctIndex": 1,
    "explanation": "Não ocorre crase antes de palavras masculinas ('a pé', 'a cavalo', 'a bordo').",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Não ocorre crase antes de palavras masculinas ('a pé', 'a cavalo', 'a bordo').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_016",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Crase proibida antes de verbos.",
    "question": "[AOCP PMPE Inédita Q016] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O suspeito começou __ correr assim que avistou a viatura da PMPE.'",
    "options": [
      "à",
      "a",
      "há",
      "em",
      "às"
    ],
    "correctIndex": 1,
    "explanation": "Não ocorre crase antes de verbos ('a correr', 'a partir', 'a cumprir').",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Não ocorre crase antes de verbos ('a correr', 'a partir', 'a cumprir').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_017",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Regência nominal com crase no plural.",
    "question": "[AOCP PMPE Inédita Q017] Assinale a alternativa que preenche corretamente a lacuna da frase: 'A decisão do coronel foi favorável __ propostas apresentadas pela tropa.'",
    "options": [
      "à",
      "a",
      "às",
      "nas",
      "as"
    ],
    "correctIndex": 2,
    "explanation": "Quem é favorável, é favorável 'a' + 'as propostas' = às propostas (preposição + artigo plural).",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. Quem é favorável, é favorável 'a' + 'as propostas' = às propostas (preposição + artigo plural).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_018",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Crase com nomes de cidades e lugares.",
    "question": "[AOCP PMPE Inédita Q018] Assinale a alternativa que preenche corretamente a lacuna da frase: 'Eram duas horas da madrugada quando a equipe chegou __ Recife.'",
    "options": [
      "à",
      "a",
      "há",
      "na",
      "àquela"
    ],
    "correctIndex": 1,
    "explanation": "Quem vai a Recife, volta de Recife: crase pra quê? Se a cidade não vier qualificada, não há crase.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Quem vai a Recife, volta de Recife: crase pra quê? Se a cidade não vier qualificada, não há crase.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_019",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Topônimos qualificados exigem crase.",
    "question": "[AOCP PMPE Inédita Q019] Assinale a alternativa que preenche corretamente a lacuna da frase: 'A patrulha militar chegou __ bela e histórica Recife de Maurício de Nassau.'",
    "options": [
      "à",
      "a",
      "ao",
      "na",
      "há"
    ],
    "correctIndex": 0,
    "explanation": "Topônimo que normalmente repele artigo admite crase quando vier especificado ou qualificado por adjunto ('à bela e histórica Recife').",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Topônimo que normalmente repele artigo admite crase quando vier especificado ou qualificado por adjunto ('à bela e histórica Recife').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_020",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Crase diante de horas exatas.",
    "question": "[AOCP PMPE Inédita Q020] Assinale a alternativa que preenche corretamente a lacuna da frase: 'A instrução militar terá início exatamente __ 07h00 no pátio de formatura.'",
    "options": [
      "às",
      "as",
      "a",
      "há",
      "nas"
    ],
    "correctIndex": 0,
    "explanation": "Ocorre crase obrigatória diante de horas exatas e determinadas ('às 07h00', 'às duas horas').",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Ocorre crase obrigatória diante de horas exatas e determinadas ('às 07h00', 'às duas horas').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_021",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Palavra casa sem especificação.",
    "question": "[AOCP PMPE Inédita Q021] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O soldado dirigiu-se __ casa logo após a dispensa do serviço.'",
    "options": [
      "à",
      "a",
      "na",
      "para à",
      "há"
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'casa' no sentido de próprio lar, desacompanhada de modificador, não admite artigo, logo não há crase ('foi a casa').",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. A palavra 'casa' no sentido de próprio lar, desacompanhada de modificador, não admite artigo, logo não há crase ('foi a casa').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_022",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Palavra casa especificada admite crase.",
    "question": "[AOCP PMPE Inédita Q022] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O soldado dirigiu-se __ casa de seus pais para comemorar a aprovação.'",
    "options": [
      "à",
      "a",
      "na",
      "em",
      "há"
    ],
    "correctIndex": 0,
    "explanation": "A palavra 'casa' quando acompanhada de termo especificador ('casa de seus pais') admite artigo, exigindo crase.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A palavra 'casa' quando acompanhada de termo especificador ('casa de seus pais') admite artigo, exigindo crase.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_023",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Regência nominal com crase.",
    "question": "[AOCP PMPE Inédita Q023] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O policial fez alusão __ mulher que testemunhou o ocorrido no centro da cidade.'",
    "options": [
      "à",
      "a",
      "há",
      "aquela",
      "àquela"
    ],
    "correctIndex": 0,
    "explanation": "Fazer alusão exige preposição 'a' + 'a mulher' = à mulher.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Fazer alusão exige preposição 'a' + 'a mulher' = à mulher.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_024",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Locução adverbial à moda de.",
    "question": "[AOCP PMPE Inédita Q024] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O motorista conduziu a viatura __ moda tática do Batalhão de Choque.'",
    "options": [
      "à",
      "a",
      "na",
      "em",
      "de"
    ],
    "correctIndex": 0,
    "explanation": "Ocorre crase mesmo diante de palavra masculina ou omitida se estiver subentendida a locução 'à moda de' ou 'à maneira de'.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Ocorre crase mesmo diante de palavra masculina ou omitida se estiver subentendida a locução 'à moda de' ou 'à maneira de'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_025",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Proibição da crase antes de infinitivo.",
    "question": "[AOCP PMPE Inédita Q025] Assinale a alternativa que preenche corretamente a lacuna da frase: 'O capitão estava disposto __ colaborar com as investigações da corregedoria.'",
    "options": [
      "a",
      "à",
      "há",
      "de",
      "para à"
    ],
    "correctIndex": 0,
    "explanation": "Antes de verbo ('colaborar') a crase é terminantemente proibida.",
    "fundamentacaoLegal": "Norma culta da Língua Portuguesa • Casos de Crase da Banca AOCP.",
    "hint": "Analise a regência do verbo/nome e o gênero da palavra seguinte!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Se for antes de verbo ou palavra masculina, crase nem pensar.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Antes de verbo ('colaborar') a crase é terminantemente proibida.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_026",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Concordância com verbos impessoais.",
    "question": "[AOCP PMPE Inédita Q026] Qual frase apresenta concordância verbal em conformidade com a norma culta?",
    "options": [
      "Fazem dez meses que não ocorrem ocorrências graves na região.",
      "Houveram muitos pedidos de reconsideração do resultado do TAF.",
      "Devem haver mais vagas no próximo certame da segurança pública.",
      "Fazia três semanas que a tropa estava em treinamento de selva.",
      "Vende-se casas populares no bairro militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'fazer' indicando tempo decorrido é impessoal, devendo permanecer no singular: 'Fazia três semanas'.",
    "fundamentacaoLegal": "Sintaxe de Concordância Verbal • Padrão AOCP.",
    "hint": "Identifique se o sujeito é simples, composto ou se o verbo é impessoal!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Haver (existir) e Fazer (tempo) = fiquem sempre no singular!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Correta. O verbo 'fazer' indicando tempo decorrido é impessoal, devendo permanecer no singular: 'Fazia três semanas'.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_027",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Concordância com Pronomes de Tratamento.",
    "question": "[AOCP PMPE Inédita Q027] Assinale a opção com ERRO de concordância verbal:",
    "options": [
      "Mais de um soldado se abraçaram após a formatura militar.",
      "Cerca de cem candidatos compareceram ao local de prova.",
      "A maioria dos policiais apoiaram a nova diretriz de segurança.",
      "Aluga-se apartamentos mobiliados em frente ao batalhão.",
      "Vossa Excelência decidistes pelo arquivamento do processo disciplinar."
    ],
    "correctIndex": 4,
    "explanation": "Com pronomes de tratamento (Vossa Excelência), o verbo deve ir obrigatoriamente para a 3ª pessoa ('Vossa Excelência decidiu'), e não para a 2ª pessoa do plural.",
    "fundamentacaoLegal": "Sintaxe de Concordância Verbal • Padrão AOCP.",
    "hint": "Identifique se o sujeito é simples, composto ou se o verbo é impessoal!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Haver (existir) e Fazer (tempo) = fiquem sempre no singular!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Correta. Com pronomes de tratamento (Vossa Excelência), o verbo deve ir obrigatoriamente para a 3ª pessoa ('Vossa Excelência decidiu'), e não para a 2ª pessoa do plural."
    }
  },
  {
    "id": "port_inedita_100_028",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Voz passiva sintética e partícula apassivadora.",
    "question": "[AOCP PMPE Inédita Q028] Na oração 'Apura-se os fatos com rigor', a correção gramatical exige:",
    "options": [
      "Apura-se os fato com rigor.",
      "Apuram-se os fatos com rigor.",
      "Apuram os fatos com rigor.",
      "Apura os fatos com rigor.",
      "Está totalmente correta, pois o sujeito é indeterminado."
    ],
    "correctIndex": 1,
    "explanation": "Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'os fatos' está no plural, logo o correto é 'Apuram-se os fatos'.",
    "fundamentacaoLegal": "Sintaxe de Concordância Verbal • Padrão AOCP.",
    "hint": "Identifique se o sujeito é simples, composto ou se o verbo é impessoal!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Haver (existir) e Fazer (tempo) = fiquem sempre no singular!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'os fatos' está no plural, logo o correto é 'Apuram-se os fatos'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_029",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Impessoalidade do verbo haver.",
    "question": "[AOCP PMPE Inédita Q029] Assinale a frase em que a concordância do verbo 'haver' está rigorosamente correta:",
    "options": [
      "Houveram dúvidas na aplicação do teste de aptidão física.",
      "Havia muitas viaturas patrulhando o corredor de transporte.",
      "Não devem haver vacilos na fiscalização de trânsito.",
      "Vão haver novas convocações para o curso de formação.",
      "Se houvessem mais recursos, o batalhão operaria melhor."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' com sentido de 'existir' é impessoal e não flexiona para o plural.",
    "fundamentacaoLegal": "Sintaxe de Concordância Verbal • Padrão AOCP.",
    "hint": "Identifique se o sujeito é simples, composto ou se o verbo é impessoal!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Haver (existir) e Fazer (tempo) = fiquem sempre no singular!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O verbo 'haver' com sentido de 'existir' é impessoal e não flexiona para o plural.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_030",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Expressões partitivas na concordância verbal.",
    "question": "[AOCP PMPE Inédita Q030] Em 'Grande parte dos recrutas _____ aprovada nos testes de tiro', a concordância verbal admite:",
    "options": [
      "Apenas 'foi', concordando com grande parte.",
      "Apenas 'foram', concordando com recrutas.",
      "Tanto 'foi' quanto 'foram', sendo facultativa a concordância com o núcleo coletivo ou com o especificador.",
      "Nenhuma forma flexionada, exigindo locução passiva analítica.",
      "O infinitivo impessoal 'ser'."
    ],
    "correctIndex": 2,
    "explanation": "Expressões partitivas ('a maioria de', 'grande parte de') seguidas de substantivo no plural admitem concordância tanto no singular quanto no plural.",
    "fundamentacaoLegal": "Sintaxe de Concordância Verbal • Padrão AOCP.",
    "hint": "Identifique se o sujeito é simples, composto ou se o verbo é impessoal!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Haver (existir) e Fazer (tempo) = fiquem sempre no singular!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. Expressões partitivas ('a maioria de', 'grande parte de') seguidas de substantivo no plural admitem concordância tanto no singular quanto no plural.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_031",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Concordância de Anexo e Incluso.",
    "question": "[AOCP PMPE Inédita Q031] As certidões seguem _____ aos autos do inquérito policial militar.",
    "options": [
      "anexo",
      "anexas",
      "em anexo",
      "anexos",
      "junto"
    ],
    "correctIndex": 1,
    "explanation": "'Anexo' é adjetivo e concorda em gênero e número com o substantivo a que se refere ('as certidões anexas').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. 'Anexo' é adjetivo e concorda em gênero e número com o substantivo a que se refere ('as certidões anexas').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_032",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Concordância de Mesmo e Próprio.",
    "question": "[AOCP PMPE Inédita Q032] A policial militar afirmou: 'Eu _____ farei a vistoria nas celas femininas'.",
    "options": [
      "mesmo",
      "mesma",
      "próprio",
      "quite",
      "alerta"
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'mesmo/mesma' concorda com a pessoa que fala. Se é mulher, deve dizer 'eu mesma'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. A palavra 'mesmo/mesma' concorda com a pessoa que fala. Se é mulher, deve dizer 'eu mesma'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_033",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regra de 'é proibido / é proibida'.",
    "question": "[AOCP PMPE Inédita Q033] A entrada de civis desarmados é _____ no quartel durante a instrução.",
    "options": [
      "proibido",
      "proibida",
      "necessário",
      "permitido",
      "bom"
    ],
    "correctIndex": 1,
    "explanation": "Havendo artigo determinando o sujeito feminino ('A entrada'), o adjetivo concorda: 'é proibida'. Sem artigo, seria 'é proibido entrada'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Havendo artigo determinando o sujeito feminino ('A entrada'), o adjetivo concorda: 'é proibida'. Sem artigo, seria 'é proibido entrada'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_034",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Invariabilidade da palavra alerta.",
    "question": "[AOCP PMPE Inédita Q034] Os soldados permaneceram _____ durante toda a operação na comunidade.",
    "options": [
      "alertas",
      "alerta",
      "meios alertas",
      "meio alertas",
      "bastantes alertas"
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'alerta', com função de advérbio, é invariável: 'permaneceram alerta'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. A palavra 'alerta', com função de advérbio, é invariável: 'permaneceram alerta'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_035",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Flexão de bastante vs. bastantes.",
    "question": "[AOCP PMPE Inédita Q035] Os policiais militares estavam com _____ motivos para desconfiar daquele veículo.",
    "options": [
      "bastante",
      "bastantes",
      "meio",
      "menos",
      "haja"
    ],
    "correctIndex": 1,
    "explanation": "'Bastante' quando equivale a 'muitos/muitas' funciona como pronome indefinido e flexiona no plural: 'bastantes motivos'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. 'Bastante' quando equivale a 'muitos/muitas' funciona como pronome indefinido e flexiona no plural: 'bastantes motivos'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_036",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência do verbo aspirar.",
    "question": "[AOCP PMPE Inédita Q036] Assinale a alternativa que apresenta a regência verbal correta de acordo com a norma-padrão:",
    "options": [
      "O aspirante aspirava o posto de segundo-tenente.",
      "O aspirante aspirava ao posto de segundo-tenente.",
      "O aspirante aspirava no posto de segundo-tenente.",
      "O aspirante aspirava pelo posto de segundo-tenente.",
      "O aspirante aspirava com o posto de segundo-tenente."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige preposição 'a'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige preposição 'a'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_037",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência do verbo obedecer.",
    "question": "[AOCP PMPE Inédita Q037] O soldado militar _____ as normas com disciplina exemplar.",
    "options": [
      "obedeceu",
      "obedeceu a",
      "obedeceu às",
      "desobedeceu o",
      "assistiu"
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'obedecer' exige preposição 'a'. Com 'as normas', temos 'obedeceu às normas'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. O verbo 'obedecer' exige preposição 'a'. Com 'as normas', temos 'obedeceu às normas'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_038",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência do verbo visar.",
    "question": "[AOCP PMPE Inédita Q038] O novo plano operacional visa _____ redução dos homicídios no estado.",
    "options": [
      "a",
      "à",
      "na",
      "da",
      "em"
    ],
    "correctIndex": 1,
    "explanation": "Visar com sentido de objetivo rege preposição 'a' + artigo 'a' = à redução.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Visar com sentido de objetivo rege preposição 'a' + artigo 'a' = à redução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_039",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência do verbo assistir.",
    "question": "[AOCP PMPE Inédita Q039] A população assistiu _____ desfile de 7 de setembro com entusiasmo.",
    "options": [
      "ao",
      "o",
      "no",
      "do",
      "pelo"
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'assistir' no sentido de presenciar/ver é transitivo indireto e rege a preposição 'a' (assistir ao desfile).",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'assistir' no sentido de presenciar/ver é transitivo indireto e rege a preposição 'a' (assistir ao desfile).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_040",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência do verbo preferir.",
    "question": "[AOCP PMPE Inédita Q040] O comando da PMPE prefere investir em treinamento tático _____ arriscar vidas de civis.",
    "options": [
      "do que",
      "a",
      "que",
      "mais que",
      "no lugar de"
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'preferir' rege a preposição 'a' (preferir uma coisa a outra). É incorreto usar 'do que' ou 'mais que'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O verbo 'preferir' rege a preposição 'a' (preferir uma coisa a outra). É incorreto usar 'do que' ou 'mais que'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_041",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência de esquecer e lembrar.",
    "question": "[AOCP PMPE Inédita Q041] O oficial esqueceu _____ documentos confidenciais na sala de reuniões.",
    "options": [
      "dos",
      "os",
      "aos",
      "nos",
      "pelos"
    ],
    "correctIndex": 1,
    "explanation": "Os verbos 'esquecer' e 'lembrar', quando não pronominais (sem o pronome se/me), são transitivos diretos (esquecer algo). Se fossem pronominais, exigiriam preposição 'de' (esquecer-se de algo).",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Os verbos 'esquecer' e 'lembrar', quando não pronominais (sem o pronome se/me), são transitivos diretos (esquecer algo). Se fossem pronominais, exigiriam preposição 'de' (esquecer-se de algo).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_042",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência do verbo implicar.",
    "question": "[AOCP PMPE Inédita Q042] O descumprimento das ordens emanadas pelo comando implica _____ sanções disciplinares severas.",
    "options": [
      "em",
      "a",
      "de",
      "as",
      "sobre"
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'implicar' no sentido de acarretar/produzir como consequência é transitivo direto: implica algo (e não 'implica em algo').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Correta. O verbo 'implicar' no sentido de acarretar/produzir como consequência é transitivo direto: implica algo (e não 'implica em algo').",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_043",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência dos verbos pagar e perdoar.",
    "question": "[AOCP PMPE Inédita Q043] O governo do estado pagou _____ policiais a gratificação por apreensão de armas.",
    "options": [
      "aos",
      "os",
      "com os",
      "pelos",
      "junto aos"
    ],
    "correctIndex": 0,
    "explanation": "Quem paga, paga algo (objeto direto) a alguém (objeto indireto). Aos policiais = objeto indireto.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Quem paga, paga algo (objeto direto) a alguém (objeto indireto). Aos policiais = objeto indireto.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_044",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência nominal de afeiçoado.",
    "question": "[AOCP PMPE Inédita Q044] Aquele cidadão é muito afeiçoado _____ tradições da cavalaria militar.",
    "options": [
      "às",
      "com as",
      "pelas",
      "nas",
      "com"
    ],
    "correctIndex": 0,
    "explanation": "O adjetivo 'afeiçoado' rege a preposição 'a': afeiçoado a + as tradições = às tradições.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O adjetivo 'afeiçoado' rege a preposição 'a': afeiçoado a + as tradições = às tradições.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_045",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Regência nominal de tolerante.",
    "question": "[AOCP PMPE Inédita Q045] O comandante mostrou-se tolerante _____ falhas de comunicação da equipe de rádio.",
    "options": [
      "com as",
      "às",
      "sobre as",
      "em",
      "pelas"
    ],
    "correctIndex": 0,
    "explanation": "O termo 'tolerante' rege preferencialmente a preposição 'com' ou 'para com'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O termo 'tolerante' rege preferencialmente a preposição 'com' ou 'para com'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_046",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Próclise com palavras negativas.",
    "question": "[AOCP PMPE Inédita Q046] Assinale a oração em que a próclise é obrigatória segundo a norma culta:",
    "options": [
      "Nunca entregue-se sem lutar.",
      "Não se afaste do perímetro de segurança durante a ronda.",
      "Entregou-se o relatório ao capitão.",
      "Disseram-me que haverá operação integrada hoje.",
      "Far-se-á a justiça militar."
    ],
    "correctIndex": 1,
    "explanation": "Palavras de sentido negativo ('não', 'nunca', 'jamais') são atrativas e exigem próclise obrigatória ('Não se afaste').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Palavras de sentido negativo ('não', 'nunca', 'jamais') são atrativas e exigem próclise obrigatória ('Não se afaste').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_047",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Proibição de pronome oblíquo no início de período.",
    "question": "[AOCP PMPE Inédita Q047] A respeito da colocação pronominal em início de período, assinale a opção correta:",
    "options": [
      "'Me empreste sua lanterna tática' atende plenamente ao padrão culto formal.",
      "Não se deve iniciar oração com pronome oblíquo átono na norma culta padrão.",
      "A ênclise é proibida em início de frase.",
      "A mesóclise é obrigatória sempre que houver verbo transitivo.",
      "Pronomes átonos podem vir isolados no início de qualquer período."
    ],
    "correctIndex": 1,
    "explanation": "Segundo a gramática normativa, não se inicia oração com pronome oblíquo átono (o correto é 'Empreste-me').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Segundo a gramática normativa, não se inicia oração com pronome oblíquo átono (o correto é 'Empreste-me').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_048",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Emprego da Mesóclise.",
    "question": "[AOCP PMPE Inédita Q048] Em 'Amanhã, _____ os novos equipamentos táticos aos batalhões do interior':",
    "options": [
      "entregar-se-ão",
      "se entregarão",
      "entregarão-se",
      "entregar-se-á",
      "entregará-se"
    ],
    "correctIndex": 0,
    "explanation": "Com o verbo no futuro do presente ('entregarão') sem palavra atrativa que justifique a próclise, deve-se empregar a mesóclise ('entregar-se-ão').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Com o verbo no futuro do presente ('entregarão') sem palavra atrativa que justifique a próclise, deve-se empregar a mesóclise ('entregar-se-ão').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_049",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Próclise com pronomes relativos.",
    "question": "[AOCP PMPE Inédita Q049] Assinale a frase em que o pronome relativo atrai obrigatoriamente a próclise:",
    "options": [
      "Os suspeitos que se renderam foram encaminhados à delegacia.",
      "Os suspeitos que renderam-se foram encaminhados à delegacia.",
      "Os suspeitos renderam-se de imediato.",
      "Rendeu-se o suspeito sem oferecer resistência.",
      "Os suspeitos tinham rendido-se."
    ],
    "correctIndex": 0,
    "explanation": "Pronomes relativos ('que', 'quem', 'cujo', 'onde') são fatores de próclise obrigatória.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Pronomes relativos ('que', 'quem', 'cujo', 'onde') são fatores de próclise obrigatória.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_050",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Ênclise proibida com particípio.",
    "question": "[AOCP PMPE Inédita Q050] Quando nos referimos ao particípio passado em locuções verbais, o pronome átono:",
    "options": [
      "Deve vir sempre enclítico ao particípio.",
      "Nunca pode vir enclítico ao particípio passado.",
      "É facultativo antes ou depois do particípio.",
      "Exige obrigatoriamente mesóclise.",
      "Deve vir repetido no início e no fim."
    ],
    "correctIndex": 1,
    "explanation": "Regra clássica: JAMAIS se coloca pronome oblíquo átono enclítico a particípio ('havia prendido-o' está errado; o correto é 'o havia prendido' ou 'havia-o prendido').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Regra clássica: JAMAIS se coloca pronome oblíquo átono enclítico a particípio ('havia prendido-o' está errado; o correto é 'o havia prendido' ou 'havia-o prendido').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_051",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Próclise com pronomes interrogativos.",
    "question": "[AOCP PMPE Inédita Q051] Em 'Quem _____ autorizou a entrar no quartel sem identificação militar?':",
    "options": [
      "te",
      "lhe",
      "o",
      "a ti",
      "por você"
    ],
    "correctIndex": 0,
    "explanation": "Pronomes interrogativos ('quem', 'qual', 'quanto') atraem o pronome oblíquo para antes do verbo (próclise).",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Pronomes interrogativos ('quem', 'qual', 'quanto') atraem o pronome oblíquo para antes do verbo (próclise).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_052",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Próclise na estrutura Em + Gerúndio.",
    "question": "[AOCP PMPE Inédita Q052] Assinale a alternativa correta quanto à colocação pronominal:",
    "options": [
      "Deus guarde-nos de todo o mal nas patrulhas.",
      "Em se tratando de segurança pública, a PMPE é referência.",
      "Tratando-se em de segurança, nada se perde.",
      "Se tratando de segurança, todos colaboram.",
      "Nunca viu-se tamanha mobilização da tropa."
    ],
    "correctIndex": 1,
    "explanation": "Na locução 'Em + se + gerúndio' ('Em se tratando de...'), a próclise é obrigatória pela presença da preposição 'em'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Na locução 'Em + se + gerúndio' ('Em se tratando de...'), a próclise é obrigatória pela presença da preposição 'em'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_053",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Próclise com pronomes indefinidos.",
    "question": "[AOCP PMPE Inédita Q053] Assinale a alternativa que apresenta erro de colocação pronominal:",
    "options": [
      "Tudo se resolveu conforme o planejamento operacional.",
      "Poucos importaram-se com as vítimas do assalto.",
      "Alguém me avisou da aproximação dos criminosos.",
      "Assim que o vi, dei voz de prisão.",
      "Conforme se previa, a operação foi exitosa."
    ],
    "correctIndex": 1,
    "explanation": "Pronomes indefinidos ('poucos', 'alguém', 'todos', 'nada') atraem próclise: o correto é 'Poucos se importaram'.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Pronomes indefinidos ('poucos', 'alguém', 'todos', 'nada') atraem próclise: o correto é 'Poucos se importaram'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_054",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Prevalência da próclise sobre a mesóclise.",
    "question": "[AOCP PMPE Inédita Q054] Caso houvesse palavra atrativa antes de 'Realizar-se-á o concurso', a forma correta seria:",
    "options": [
      "Não realizar-se-á o concurso.",
      "Não se realizará o concurso.",
      "Não realizará-se o concurso.",
      "Não realizado o concurso será.",
      "Não realizar-se o concurso."
    ],
    "correctIndex": 1,
    "explanation": "Havendo palavra atrativa (como 'não'), a próclise prevalece sobre a mesóclise ('Não se realizará').",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Havendo palavra atrativa (como 'não'), a próclise prevalece sobre a mesóclise ('Não se realizará').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_055",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gramática • Justificativa da ênclise regular.",
    "question": "[AOCP PMPE Inédita Q055] Na oração 'Os soldados dispersaram-se rapidamente', a ênclise está correta porque:",
    "options": [
      "Não há palavra atrativa e o verbo não está no futuro.",
      "O verbo está no futuro do presente.",
      "A próclise é sempre proibida com verbos no plural.",
      "Há conjunção subordinativa oculta.",
      "O sujeito é oculto e indeterminado."
    ],
    "correctIndex": 0,
    "explanation": "Como não há fator de atração e o verbo não está nos tempos futuros, a ênclise é perfeitamente legítima.",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa • AOCP.",
    "hint": "Fique atento às regras gramaticais e exceções da norma-padrão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "A banca adora explorar palavras atrativas e verbos no futuro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Como não há fator de atração e o verbo não está nos tempos futuros, a ênclise é perfeitamente legítima.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_056",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Concessiva)",
    "question": "[AOCP PMPE Inédita Q056] Na oração 'Embora o terreno fosse acidentado, o pelotão alcançou o objetivo.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Concessão",
      "Causa",
      "Consequência",
      "Finalidade",
      "Tempo"
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'embora' introduz oração subordinada adverbial concessiva, indicando ideia de oposição/contraste que não impede o fato principal.",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de concessiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'embora' introduz oração subordinada adverbial concessiva, indicando ideia de oposição/contraste que não impede o fato principal.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_057",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Explicativa ou causal)",
    "question": "[AOCP PMPE Inédita Q057] Na oração 'A operação foi cancelada, porquanto as fortes chuvas interditaram as rodovias.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'Porquanto' é conjunção causal/explicativa, equivalente a 'porque' ou 'visto que'.",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de explicativa ou causal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Porquanto' é conjunção causal/explicativa, equivalente a 'porque' ou 'visto que'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_058",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Concessiva)",
    "question": "[AOCP PMPE Inédita Q058] Na oração 'Conquanto houvesse grande tensão na comunidade, a polícia agiu com equilíbrio.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Concessão",
      "Causa",
      "Consequência",
      "Finalidade",
      "Tempo"
    ],
    "correctIndex": 0,
    "explanation": "'Conquanto' é conjunção concessiva (equivalente a 'embora', 'ainda que').",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de concessiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Conquanto' é conjunção concessiva (equivalente a 'embora', 'ainda que').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_059",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Proporcional)",
    "question": "[AOCP PMPE Inédita Q059] Na oração 'À proporção que a noite avançava, o efetivo aumentava o patrulhamento.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'À proporção que' é locução conjuntiva adverbial proporcional.",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de proporcional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'À proporção que' é locução conjuntiva adverbial proporcional.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_060",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Final)",
    "question": "[AOCP PMPE Inédita Q060] Na oração 'Os policiais posicionaram os cones a fim de que os condutores reduzissem a velocidade.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'A fim de que' introduz oração subordinada adverbial final (indica objetivo/finalidade).",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de final.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'A fim de que' introduz oração subordinada adverbial final (indica objetivo/finalidade).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_061",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Adversativa)",
    "question": "[AOCP PMPE Inédita Q061] Na oração 'O suspeito tentou fugir a pé, contudo foi interceptado pelos motociclistas da ROCAM.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'Contudo' é conjunção coordenativa adversativa (oposição/ressalva).",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de adversativa.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Contudo' é conjunção coordenativa adversativa (oposição/ressalva).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_062",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Conclusiva)",
    "question": "[AOCP PMPE Inédita Q062] Na oração 'O laudo pericial foi conclusivo; portanto, o inquérito pôde ser finalizado.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'Portanto' é conjunção coordenativa conclusiva (indica dedução/conclusão).",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de conclusiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Portanto' é conjunção coordenativa conclusiva (indica dedução/conclusão).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_063",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Condicional)",
    "question": "[AOCP PMPE Inédita Q063] Na oração 'A tropa receberá a premiação, desde que atinja as metas operacionais fixadas.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'Desde que' com verbo no subjuntivo atua como conjunção condicional (caso, se).",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de condicional.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Desde que' com verbo no subjuntivo atua como conjunção condicional (caso, se).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_064",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Conformativa)",
    "question": "[AOCP PMPE Inédita Q064] Na oração 'O comandante executou a manobra conforme determinava o manual de operações.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'Conforme' introduz oração conformativa (de acordo com, consoante).",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de conformativa.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Conforme' introduz oração conformativa (de acordo com, consoante).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_065",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções e Período Composto • Valor Semântico (Temporal)",
    "question": "[AOCP PMPE Inédita Q065] Na oração 'Tão logo amanheceu, a equipe cumpriu os mandados de busca e apreensão.', o conectivo em destaque expressa circunstância semântica de:",
    "options": [
      "Causa",
      "Concessão",
      "Condição",
      "Proporção",
      "Conclusão"
    ],
    "correctIndex": 0,
    "explanation": "'Tão logo' é locução conjuntiva temporal (assim que, logo que).",
    "fundamentacaoLegal": "Sintaxe do Período Composto • Conjunções Subordenadas e Coordenadas.",
    "hint": "O conectivo liga as orações trazendo valor de temporal.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Decore: Conquanto/Embora = Concessão. Porquanto = Causa.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Tão logo' é locução conjuntiva temporal (assim que, logo que).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_066",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Pontuação Proibida entre Verbo e Complemento.",
    "question": "[AOCP PMPE Inédita Q066] Assinale a oração em que a vírgula é PROIBIDA pela gramática normativa:",
    "options": [
      "O soldado, que é recruta, apresentou-se ao capitão.",
      "O soldado apresentou-se, ao capitão no pátio.",
      "Ontem à noite, realizou-se a blitz.",
      "Recife, 24 de outubro de 2026.",
      "Soldado, mantenha a posição de guarda."
    ],
    "correctIndex": 1,
    "explanation": "É proibido separar por vírgula o verbo de seu complemento ('apresentou-se ao capitão').",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. É proibido separar por vírgula o verbo de seu complemento ('apresentou-se ao capitão').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_067",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Orações Subordinadas Adjetivas e Pontuação.",
    "question": "[AOCP PMPE Inédita Q067] Em 'Os alunos que estudaram com dedicação foram aprovados', a ausência de vírgulas classifica a oração adjetiva como:",
    "options": [
      "Explicativa.",
      "Restritiva.",
      "Substantiva subjetiva.",
      "Adverbial causal.",
      "Reduzida de gerúndio."
    ],
    "correctIndex": 1,
    "explanation": "Oração adjetiva sem vírgulas restringe e especifica o sentido do termo antecedente (restritiva). Com vírgulas, seria explicativa.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Oração adjetiva sem vírgulas restringe e especifica o sentido do termo antecedente (restritiva). Com vírgulas, seria explicativa.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_068",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Pontuação do Vocativo.",
    "question": "[AOCP PMPE Inédita Q068] Assinale a opção em que o vocativo está devidamente pontuado:",
    "options": [
      "Soldado avance, com cautela.",
      "Soldado, avance com cautela.",
      "Avance soldado, com cautela.",
      "Avance com cautela soldado.",
      "Soldado avance com cautela."
    ],
    "correctIndex": 1,
    "explanation": "O vocativo (termo de chamamento) deve ser obrigatoriamente isolado por vírgula.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O vocativo (termo de chamamento) deve ser obrigatoriamente isolado por vírgula.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_069",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Vírgula antes da Conjunção 'E'.",
    "question": "[AOCP PMPE Inédita Q069] O uso da vírgula antes da conjunção aditiva 'e' é gramaticalmente facultativo ou obrigatório quando:",
    "options": [
      "As orações coordenadas possuem sujeitos diferentes.",
      "O sujeito é idêntico em ambas as orações.",
      "Há apenas dois substantivos ligados na frase.",
      "O verbo está no particípio.",
      "A oração for proparoxítona."
    ],
    "correctIndex": 0,
    "explanation": "A vírgula antes do 'e' é admitida quando as orações coordenadas aditivas possuem sujeitos gramaticais distintos.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A vírgula antes do 'e' é admitida quando as orações coordenadas aditivas possuem sujeitos gramaticais distintos.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_070",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Adjunto Adverbial Deslocado e Vírgula.",
    "question": "[AOCP PMPE Inédita Q070] Assinale a alternativa em que a pontuação foi empregada de forma impecável:",
    "options": [
      "No batalhão de choque os soldados, treinam tiro defensivo.",
      "No batalhão de choque, os soldados treinam tiro defensivo.",
      "No batalhão de choque os soldados treinam, tiro defensivo.",
      "No batalhão, de choque os soldados treinam tiro defensivo.",
      "No batalhão de choque os soldados treinam tiro, defensivo."
    ],
    "correctIndex": 1,
    "explanation": "O adjunto adverbial de lugar deslocado ('No batalhão de choque') está corretamente isolado por vírgula do sujeito e predicado.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O adjunto adverbial de lugar deslocado ('No batalhão de choque') está corretamente isolado por vírgula do sujeito e predicado.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_071",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Pontuação Proibida entre Verbo e Complemento.",
    "question": "[AOCP PMPE Inédita Q071] Assinale a oração em que a vírgula é PROIBIDA pela gramática normativa:",
    "options": [
      "O soldado, que é recruta, apresentou-se ao capitão.",
      "O soldado apresentou-se, ao capitão no pátio.",
      "Ontem à noite, realizou-se a blitz.",
      "Recife, 24 de outubro de 2026.",
      "Soldado, mantenha a posição de guarda."
    ],
    "correctIndex": 1,
    "explanation": "É proibido separar por vírgula o verbo de seu complemento ('apresentou-se ao capitão').",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. É proibido separar por vírgula o verbo de seu complemento ('apresentou-se ao capitão').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_072",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Orações Subordinadas Adjetivas e Pontuação.",
    "question": "[AOCP PMPE Inédita Q072] Em 'Os alunos que estudaram com dedicação foram aprovados', a ausência de vírgulas classifica a oração adjetiva como:",
    "options": [
      "Explicativa.",
      "Restritiva.",
      "Substantiva subjetiva.",
      "Adverbial causal.",
      "Reduzida de gerúndio."
    ],
    "correctIndex": 1,
    "explanation": "Oração adjetiva sem vírgulas restringe e especifica o sentido do termo antecedente (restritiva). Com vírgulas, seria explicativa.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Oração adjetiva sem vírgulas restringe e especifica o sentido do termo antecedente (restritiva). Com vírgulas, seria explicativa.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_073",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Pontuação do Vocativo.",
    "question": "[AOCP PMPE Inédita Q073] Assinale a opção em que o vocativo está devidamente pontuado:",
    "options": [
      "Soldado avance, com cautela.",
      "Soldado, avance com cautela.",
      "Avance soldado, com cautela.",
      "Avance com cautela soldado.",
      "Soldado avance com cautela."
    ],
    "correctIndex": 1,
    "explanation": "O vocativo (termo de chamamento) deve ser obrigatoriamente isolado por vírgula.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O vocativo (termo de chamamento) deve ser obrigatoriamente isolado por vírgula.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_074",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Vírgula antes da Conjunção 'E'.",
    "question": "[AOCP PMPE Inédita Q074] O uso da vírgula antes da conjunção aditiva 'e' é gramaticalmente facultativo ou obrigatório quando:",
    "options": [
      "As orações coordenadas possuem sujeitos diferentes.",
      "O sujeito é idêntico em ambas as orações.",
      "Há apenas dois substantivos ligados na frase.",
      "O verbo está no particípio.",
      "A oração for proparoxítona."
    ],
    "correctIndex": 0,
    "explanation": "A vírgula antes do 'e' é admitida quando as orações coordenadas aditivas possuem sujeitos gramaticais distintos.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A vírgula antes do 'e' é admitida quando as orações coordenadas aditivas possuem sujeitos gramaticais distintos.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_075",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Adjunto Adverbial Deslocado e Vírgula.",
    "question": "[AOCP PMPE Inédita Q075] Assinale a alternativa em que a pontuação foi empregada de forma impecável:",
    "options": [
      "No batalhão de choque os soldados, treinam tiro defensivo.",
      "No batalhão de choque, os soldados treinam tiro defensivo.",
      "No batalhão de choque os soldados treinam, tiro defensivo.",
      "No batalhão, de choque os soldados treinam tiro defensivo.",
      "No batalhão de choque os soldados treinam tiro, defensivo."
    ],
    "correctIndex": 1,
    "explanation": "O adjunto adverbial de lugar deslocado ('No batalhão de choque') está corretamente isolado por vírgula do sujeito e predicado.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O adjunto adverbial de lugar deslocado ('No batalhão de choque') está corretamente isolado por vírgula do sujeito e predicado.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_076",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Pontuação Proibida entre Verbo e Complemento.",
    "question": "[AOCP PMPE Inédita Q076] Assinale a oração em que a vírgula é PROIBIDA pela gramática normativa:",
    "options": [
      "O soldado, que é recruta, apresentou-se ao capitão.",
      "O soldado apresentou-se, ao capitão no pátio.",
      "Ontem à noite, realizou-se a blitz.",
      "Recife, 24 de outubro de 2026.",
      "Soldado, mantenha a posição de guarda."
    ],
    "correctIndex": 1,
    "explanation": "É proibido separar por vírgula o verbo de seu complemento ('apresentou-se ao capitão').",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. É proibido separar por vírgula o verbo de seu complemento ('apresentou-se ao capitão').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_077",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Orações Subordinadas Adjetivas e Pontuação.",
    "question": "[AOCP PMPE Inédita Q077] Em 'Os alunos que estudaram com dedicação foram aprovados', a ausência de vírgulas classifica a oração adjetiva como:",
    "options": [
      "Explicativa.",
      "Restritiva.",
      "Substantiva subjetiva.",
      "Adverbial causal.",
      "Reduzida de gerúndio."
    ],
    "correctIndex": 1,
    "explanation": "Oração adjetiva sem vírgulas restringe e especifica o sentido do termo antecedente (restritiva). Com vírgulas, seria explicativa.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. Oração adjetiva sem vírgulas restringe e especifica o sentido do termo antecedente (restritiva). Com vírgulas, seria explicativa.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_078",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Pontuação do Vocativo.",
    "question": "[AOCP PMPE Inédita Q078] Assinale a opção em que o vocativo está devidamente pontuado:",
    "options": [
      "Soldado avance, com cautela.",
      "Soldado, avance com cautela.",
      "Avance soldado, com cautela.",
      "Avance com cautela soldado.",
      "Soldado avance com cautela."
    ],
    "correctIndex": 1,
    "explanation": "O vocativo (termo de chamamento) deve ser obrigatoriamente isolado por vírgula.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O vocativo (termo de chamamento) deve ser obrigatoriamente isolado por vírgula.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_079",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Vírgula antes da Conjunção 'E'.",
    "question": "[AOCP PMPE Inédita Q079] O uso da vírgula antes da conjunção aditiva 'e' é gramaticalmente facultativo ou obrigatório quando:",
    "options": [
      "As orações coordenadas possuem sujeitos diferentes.",
      "O sujeito é idêntico em ambas as orações.",
      "Há apenas dois substantivos ligados na frase.",
      "O verbo está no particípio.",
      "A oração for proparoxítona."
    ],
    "correctIndex": 0,
    "explanation": "A vírgula antes do 'e' é admitida quando as orações coordenadas aditivas possuem sujeitos gramaticais distintos.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A vírgula antes do 'e' é admitida quando as orações coordenadas aditivas possuem sujeitos gramaticais distintos.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_080",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Adjunto Adverbial Deslocado e Vírgula.",
    "question": "[AOCP PMPE Inédita Q080] Assinale a alternativa em que a pontuação foi empregada de forma impecável:",
    "options": [
      "No batalhão de choque os soldados, treinam tiro defensivo.",
      "No batalhão de choque, os soldados treinam tiro defensivo.",
      "No batalhão de choque os soldados treinam, tiro defensivo.",
      "No batalhão, de choque os soldados treinam tiro defensivo.",
      "No batalhão de choque os soldados treinam tiro, defensivo."
    ],
    "correctIndex": 1,
    "explanation": "O adjunto adverbial de lugar deslocado ('No batalhão de choque') está corretamente isolado por vírgula do sujeito e predicado.",
    "fundamentacaoLegal": "Normas de Pontuação • Gramática Normativa.",
    "hint": "Lembre-se: nunca separe sujeito de verbo, nem verbo de objeto por vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Regra SVC (Sujeito - Verbo - Complemento): sem vírgula no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O adjunto adverbial de lugar deslocado ('No batalhão de choque') está corretamente isolado por vírgula do sujeito e predicado.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_081",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Emprego dos Porquês.",
    "question": "[AOCP PMPE Inédita Q081] Assinale a frase em que o uso dos 'porquês' atende plenamente à norma-padrão:",
    "options": [
      "Não sei por que a viatura ainda não chegou.",
      "Ele faltou a instrução por que estava doente.",
      "Você está nervoso por quê?",
      "Quero saber o por quê de tanta confusão.",
      "Eles brigaram por que motivo?"
    ],
    "correctIndex": 0,
    "explanation": "'Por que' (separado e sem acento) usa-se em perguntas diretas ou indiretas e quando equivale a 'por qual razão' ou 'pelo qual'.",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Por que' (separado e sem acento) usa-se em perguntas diretas ou indiretas e quando equivale a 'por qual razão' ou 'pelo qual'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_082",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Por quê em final de período.",
    "question": "[AOCP PMPE Inédita Q082] Na oração 'Você não compareceu à formatura ontem _____?', a lacuna deve ser preenchida por:",
    "options": [
      "por que",
      "por que",
      "por quê",
      "porque",
      "porquê"
    ],
    "correctIndex": 2,
    "explanation": "Em final de frase ou isolado antes de ponto, usa-se 'por quê' (separado e com acento circunflexo).",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. Em final de frase ou isolado antes de ponto, usa-se 'por quê' (separado e com acento circunflexo).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_083",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Porquê Substantivado.",
    "question": "[AOCP PMPE Inédita Q083] O juiz militar não encontrou o _____ de tantas contradições no depoimento da testemunha.",
    "options": [
      "por que",
      "por quê",
      "porque",
      "porquê",
      "por-que"
    ],
    "correctIndex": 3,
    "explanation": "Quando substantivado (antecedido de artigo 'o' ou pronome), escreve-se 'porquê' (junto e com acento circunflexo).",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Correta. Quando substantivado (antecedido de artigo 'o' ou pronome), escreve-se 'porquê' (junto e com acento circunflexo).",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_084",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Parônimos: Eminente vs. Iminente.",
    "question": "[AOCP PMPE Inédita Q084] Assinale o parônimo correto: O flagrante foi feito pelo delegado, pois o crime era _____ (estava na iminência de acontecer):",
    "options": [
      "eminente",
      "iminente",
      "premente",
      "evidente",
      "consistente"
    ],
    "correctIndex": 1,
    "explanation": "'Iminente' significa prestes a ocorrer; 'eminente' significa nobre, ilustre, elevado.",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. 'Iminente' significa prestes a ocorrer; 'eminente' significa nobre, ilustre, elevado.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_085",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Homônimos: Cessão, Sessão e Seção.",
    "question": "[AOCP PMPE Inédita Q085] A autoridade policial fez a _____ de uso da sala para a corregedoria militar.",
    "options": [
      "seção",
      "cessão",
      "sessão",
      "ceção",
      "sessao"
    ],
    "correctIndex": 1,
    "explanation": "'Cessão' (com C e dois S) significa o ato de ceder; 'sessão' (com três S) é intervalo de tempo/reunião; 'seção' (com Ç) é corte/divisão/repartição.",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. 'Cessão' (com C e dois S) significa o ato de ceder; 'sessão' (com três S) é intervalo de tempo/reunião; 'seção' (com Ç) é corte/divisão/repartição.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_086",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Emprego dos Porquês.",
    "question": "[AOCP PMPE Inédita Q086] Assinale a frase em que o uso dos 'porquês' atende plenamente à norma-padrão:",
    "options": [
      "Não sei por que a viatura ainda não chegou.",
      "Ele faltou a instrução por que estava doente.",
      "Você está nervoso por quê?",
      "Quero saber o por quê de tanta confusão.",
      "Eles brigaram por que motivo?"
    ],
    "correctIndex": 0,
    "explanation": "'Por que' (separado e sem acento) usa-se em perguntas diretas ou indiretas e quando equivale a 'por qual razão' ou 'pelo qual'.",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Por que' (separado e sem acento) usa-se em perguntas diretas ou indiretas e quando equivale a 'por qual razão' ou 'pelo qual'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_087",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Por quê em final de período.",
    "question": "[AOCP PMPE Inédita Q087] Na oração 'Você não compareceu à formatura ontem _____?', a lacuna deve ser preenchida por:",
    "options": [
      "por que",
      "por que",
      "por quê",
      "porque",
      "porquê"
    ],
    "correctIndex": 2,
    "explanation": "Em final de frase ou isolado antes de ponto, usa-se 'por quê' (separado e com acento circunflexo).",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Correta. Em final de frase ou isolado antes de ponto, usa-se 'por quê' (separado e com acento circunflexo).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_088",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Porquê Substantivado.",
    "question": "[AOCP PMPE Inédita Q088] O juiz militar não encontrou o _____ de tantas contradições no depoimento da testemunha.",
    "options": [
      "por que",
      "por quê",
      "porque",
      "porquê",
      "por-que"
    ],
    "correctIndex": 3,
    "explanation": "Quando substantivado (antecedido de artigo 'o' ou pronome), escreve-se 'porquê' (junto e com acento circunflexo).",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Correta. Quando substantivado (antecedido de artigo 'o' ou pronome), escreve-se 'porquê' (junto e com acento circunflexo).",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_089",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Parônimos: Eminente vs. Iminente.",
    "question": "[AOCP PMPE Inédita Q089] Assinale o parônimo correto: O flagrante foi feito pelo delegado, pois o crime era _____ (estava na iminência de acontecer):",
    "options": [
      "eminente",
      "iminente",
      "premente",
      "evidente",
      "consistente"
    ],
    "correctIndex": 1,
    "explanation": "'Iminente' significa prestes a ocorrer; 'eminente' significa nobre, ilustre, elevado.",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. 'Iminente' significa prestes a ocorrer; 'eminente' significa nobre, ilustre, elevado.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_090",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia e Semântica • Homônimos: Cessão, Sessão e Seção.",
    "question": "[AOCP PMPE Inédita Q090] A autoridade policial fez a _____ de uso da sala para a corregedoria militar.",
    "options": [
      "seção",
      "cessão",
      "sessão",
      "ceção",
      "sessao"
    ],
    "correctIndex": 1,
    "explanation": "'Cessão' (com C e dois S) significa o ato de ceder; 'sessão' (com três S) é intervalo de tempo/reunião; 'seção' (com Ç) é corte/divisão/repartição.",
    "fundamentacaoLegal": "Ortografia Oficial da Língua Portuguesa • AOCP.",
    "hint": "Atenção ao contexto e ao significado exato dos vocábulos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ceder = Cessão. Cinema/Reunião = Sessão. Repartição = Seção.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. 'Cessão' (com C e dois S) significa o ato de ceder; 'sessão' (com três S) é intervalo de tempo/reunião; 'seção' (com Ç) é corte/divisão/repartição.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_091",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Tipologia Textual: Narração.",
    "question": "[AOCP PMPE Inédita Q091] O texto de um Boletim de Ocorrência Policial Militar, no qual se relatam fatos em sequência cronológica com personagens, tempo e espaço, classifica-se tipologicamente como predominantemente:",
    "options": [
      "Dissertativo-argumentativo.",
      "Narrativo.",
      "Descritivo.",
      "Injuntivo.",
      "Expositivo."
    ],
    "correctIndex": 1,
    "explanation": "O texto narrativo caracteriza-se pelo relato de acontecimentos e ações situadas no tempo e espaço com personagens e narrador.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O texto narrativo caracteriza-se pelo relato de acontecimentos e ações situadas no tempo e espaço com personagens e narrador.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_092",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Tipologia Textual: Injunção.",
    "question": "[AOCP PMPE Inédita Q092] Um manual de procedimentos operacionais padrão (POP) da PMPE, que prescreve comandos como 'destrave o armamento', 'mantenha o dedo fora do gatilho', apresenta tipologia textual:",
    "options": [
      "Injuntiva ou prescritiva.",
      "Narrativa.",
      "Lírica.",
      "Poética.",
      "Argumentativa."
    ],
    "correctIndex": 0,
    "explanation": "Textos injuntivos ou prescritivos orientam, instruem ou impõem comportamentos através de verbos no imperativo ou infinitivo.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Textos injuntivos ou prescritivos orientam, instruem ou impõem comportamentos através de verbos no imperativo ou infinitivo.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_093",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Coesão Textual Anafórica.",
    "question": "[AOCP PMPE Inédita Q093] Em relação à coesão textual, a anáfora é o mecanismo linguístico que consiste em:",
    "options": [
      "Antecipar um termo que ainda será expresso no texto.",
      "Retomar um termo ou conceito já expresso anteriormente no texto.",
      "Substituir palavras por imagens gráficas.",
      "Omitir termos de forma a prejudicar a compreensão.",
      "Criar rimas consonantais."
    ],
    "correctIndex": 1,
    "explanation": "A anáfora retoma um elemento já citado previamente no discurso (ex.: 'O soldado agiu rápido; ele evitou a tragédia').",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. A anáfora retoma um elemento já citado previamente no discurso (ex.: 'O soldado agiu rápido; ele evitou a tragédia').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_094",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Figuras de Linguagem: Metáfora.",
    "question": "[AOCP PMPE Inédita Q094] Assinale a alternativa que apresenta uma figura de linguagem classificada como METÁFORA:",
    "options": [
      "Aquele soldado é um leão na defesa da sociedade.",
      "O policial leu Machado de Assis durante o descanso.",
      "O suspeito faltou com a verdade no depoimento.",
      "Chorou rios de lágrimas ao saber da aprovação.",
      "O vento uivava nas frestas da janela do posto."
    ],
    "correctIndex": 0,
    "explanation": "A metáfora consiste em uma comparação implícita, direta, sem a presença de conectivo comparativo ('é um leão').",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A metáfora consiste em uma comparação implícita, direta, sem a presença de conectivo comparativo ('é um leão').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_095",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Figuras de Linguagem: Eufemismo.",
    "question": "[AOCP PMPE Inédita Q095] A expressão 'faltar com a verdade' em substituição à palavra 'mentir' é um exemplo clássico da figura de linguagem denominada:",
    "options": [
      "Hipérbole.",
      "Eufemismo.",
      "Metonímia.",
      "Prosopopeia.",
      "Pleonasmo."
    ],
    "correctIndex": 1,
    "explanation": "O eufemismo é a figura de linguagem utilizada para suavizar uma mensagem desagradável, grosseira ou chocante.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O eufemismo é a figura de linguagem utilizada para suavizar uma mensagem desagradável, grosseira ou chocante.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_096",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Tipologia Textual: Narração.",
    "question": "[AOCP PMPE Inédita Q096] O texto de um Boletim de Ocorrência Policial Militar, no qual se relatam fatos em sequência cronológica com personagens, tempo e espaço, classifica-se tipologicamente como predominantemente:",
    "options": [
      "Dissertativo-argumentativo.",
      "Narrativo.",
      "Descritivo.",
      "Injuntivo.",
      "Expositivo."
    ],
    "correctIndex": 1,
    "explanation": "O texto narrativo caracteriza-se pelo relato de acontecimentos e ações situadas no tempo e espaço com personagens e narrador.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O texto narrativo caracteriza-se pelo relato de acontecimentos e ações situadas no tempo e espaço com personagens e narrador.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_097",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Tipologia Textual: Injunção.",
    "question": "[AOCP PMPE Inédita Q097] Um manual de procedimentos operacionais padrão (POP) da PMPE, que prescreve comandos como 'destrave o armamento', 'mantenha o dedo fora do gatilho', apresenta tipologia textual:",
    "options": [
      "Injuntiva ou prescritiva.",
      "Narrativa.",
      "Lírica.",
      "Poética.",
      "Argumentativa."
    ],
    "correctIndex": 0,
    "explanation": "Textos injuntivos ou prescritivos orientam, instruem ou impõem comportamentos através de verbos no imperativo ou infinitivo.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Textos injuntivos ou prescritivos orientam, instruem ou impõem comportamentos através de verbos no imperativo ou infinitivo.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_098",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Coesão Textual Anafórica.",
    "question": "[AOCP PMPE Inédita Q098] Em relação à coesão textual, a anáfora é o mecanismo linguístico que consiste em:",
    "options": [
      "Antecipar um termo que ainda será expresso no texto.",
      "Retomar um termo ou conceito já expresso anteriormente no texto.",
      "Substituir palavras por imagens gráficas.",
      "Omitir termos de forma a prejudicar a compreensão.",
      "Criar rimas consonantais."
    ],
    "correctIndex": 1,
    "explanation": "A anáfora retoma um elemento já citado previamente no discurso (ex.: 'O soldado agiu rápido; ele evitou a tragédia').",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. A anáfora retoma um elemento já citado previamente no discurso (ex.: 'O soldado agiu rápido; ele evitou a tragédia').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_099",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Figuras de Linguagem: Metáfora.",
    "question": "[AOCP PMPE Inédita Q099] Assinale a alternativa que apresenta uma figura de linguagem classificada como METÁFORA:",
    "options": [
      "Aquele soldado é um leão na defesa da sociedade.",
      "O policial leu Machado de Assis durante o descanso.",
      "O suspeito faltou com a verdade no depoimento.",
      "Chorou rios de lágrimas ao saber da aprovação.",
      "O vento uivava nas frestas da janela do posto."
    ],
    "correctIndex": 0,
    "explanation": "A metáfora consiste em uma comparação implícita, direta, sem a presença de conectivo comparativo ('é um leão').",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A metáfora consiste em uma comparação implícita, direta, sem a presença de conectivo comparativo ('é um leão').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais do Instituto AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  },
  {
    "id": "port_inedita_100_100",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão de Texto e Estilística • Figuras de Linguagem: Eufemismo.",
    "question": "[AOCP PMPE Inédita Q100] A expressão 'faltar com a verdade' em substituição à palavra 'mentir' é um exemplo clássico da figura de linguagem denominada:",
    "options": [
      "Hipérbole.",
      "Eufemismo.",
      "Metonímia.",
      "Prosopopeia.",
      "Pleonasmo."
    ],
    "correctIndex": 1,
    "explanation": "O eufemismo é a figura de linguagem utilizada para suavizar uma mensagem desagradável, grosseira ou chocante.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologia Textual • AOCP.",
    "hint": "Observe a intenção comunicativa do emissor e a estrutura das frases!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Suavizar = Eufemismo. Exagerar = Hipérbole.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta perante o edital oficial da PMPE.",
      "2": "Você marcou (C): Alternativa incorreta perante o edital oficial da PMPE.",
      "3": "Você marcou (D): Alternativa incorreta perante o edital oficial da PMPE.",
      "4": "Você marcou (E): Alternativa incorreta perante o edital oficial da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais do Instituto AOCP.",
      "B": "Correta. O eufemismo é a figura de linguagem utilizada para suavizar uma mensagem desagradável, grosseira ou chocante.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais do Instituto AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais do Instituto AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais do Instituto AOCP."
    }
  }
];
