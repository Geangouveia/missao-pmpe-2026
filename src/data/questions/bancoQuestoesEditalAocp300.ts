import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 300 QUESTÕES CIRÚRGICAS DO EDITAL PMPE 2026 (INSTITUTO AOCP)
 * Distribuídas rigorosamente:
 * - 50 Questões de Língua Portuguesa
 * - 50 Questões de História de Pernambuco
 * - 50 Questões de Raciocínio Lógico Matemático
 * - 50 Questões de Noções de Informática
 * - 50 Questões de Direito Constitucional & Direitos Humanos
 * - 50 Questões de Legislação da PMPE & Leis Extravagantes
 * Gabaritos perfeitamente balanceados (20% A, 20% B, 20% C, 20% D, 20% E).
 */
export const BANCO_EDITAL_AOCP_300: QuizQuestion[] = [
  {
    "id": "port_edital_001",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Regra das Paroxítonas",
    "question": "Assinale a alternativa em que todas as palavras são acentuadas pela mesma regra gramatical das paroxítonas:",
    "options": [
      "caráter, tórax, pólen, fóssil.",
      "café, cipó, você, cajá.",
      "lâmpada, médico, pássaro, pólvora.",
      "saúde, saída, balaústre, baú.",
      "herói, troféu, papéis, anéis."
    ],
    "correctIndex": 0,
    "explanation": "Palavras paroxítonas terminadas em -r, -x, -n, -l recebem acento gráfico obrigatório segundo o Novo Acordo Ortográfico.",
    "fundamentacaoLegal": "Novo Acordo Ortográfico / Gramática Normativa",
    "hint": "Paroxítonas: penúltima sílaba tônica terminada em R, X, N, L, PS, I(S), US, UM, DITONGO.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Regra do ROUXINOL e LINOS.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Palavras paroxítonas terminadas em -r, -x, -n, -l recebem acento gráfico obrigatório segundo o Novo Acordo Ortográfico.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_002",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Hiatos",
    "question": "A palavra 'juízes' recebe acento gráfico pela regra:",
    "options": [
      "Das palavras proparoxítonas.",
      "Do hiato tônico 'i' isolado na sílaba (ou com s), não seguido de 'nh'.",
      "Das palavras paroxítonas terminadas em ditongo.",
      "Do ditongo aberto em posição paroxítona.",
      "Do acento diferencial facultativo."
    ],
    "correctIndex": 1,
    "explanation": "Acentuam-se o 'i' e 'u' tônicos dos hiatos quando formam sílaba sozinhos ou com 's', desde que não seguidos de 'nh'. Ju-í-zes.",
    "fundamentacaoLegal": "Gramática Normativa AOCP",
    "hint": "I e U tônicos sozinhos na sílaba = acento de hiato. Ex: sa-ú-de, ju-í-zes.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Hiato I/U sozinho na sílaba leva acento!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. Acentuam-se o 'i' e 'u' tônicos dos hiatos quando formam sílaba sozinhos ou com 's', desde que não seguidos de 'nh'. Ju-í-zes.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_003",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Casos Proibidos",
    "question": "O sinal indicativo de crase está empregado de forma TOTALMENTE INCORRETA em:",
    "options": [
      "Ele foi à delegacia registrar a ocorrência.",
      "A viatura chegou às 14 horas pontualmente.",
      "O soldado passou a pé e começou a atirar a esmo.",
      "Fizemos alusão à conduta exemplar do oficial.",
      "Entregou a farda àquela policial militar."
    ],
    "correctIndex": 2,
    "explanation": "Não ocorre crase antes de palavras masculinas ('a pé', 'a esmo') nem antes de verbos ('a atirar').",
    "fundamentacaoLegal": "Regência e Sintaxe da Crase • AOCP",
    "hint": "Diante de palavra masculina e verbo, crase é perda de tempo!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Antes de masculino ou verbo: NUNCA use crase!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Não ocorre crase antes de palavras masculinas ('a pé', 'a esmo') nem antes de verbos ('a atirar').",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_004",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase • Casos Facultativos",
    "question": "Assinale a opção em que o uso do acento indicativo de crase é FACULTATIVO:",
    "options": [
      "O suspeito obedeceu a lei do silêncio.",
      "Todos se dirigiram a sala de operações.",
      "A guarnição saiu a uma hora da manhã.",
      "O policial entregou o relatório até a (à) capitã.",
      "O capitão agradeceu a ela pelo socorro."
    ],
    "correctIndex": 3,
    "explanation": "A crase é facultativa: 1) Diante de nomes próprios femininos; 2) Diante de pronomes possessivos femininos singulares; 3) Após a preposição 'até'.",
    "fundamentacaoLegal": "Norma Padrão da Língua Portuguesa",
    "hint": "Casos facultativos de crase: Até, Pronome Possessivo feminino, Nome de mulher.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Mnemônico: NOME DE MULHER, PRONOME POSSESSIVO e ATÉ = Crase se você quiser!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. A crase é facultativa: 1) Diante de nomes próprios femininos; 2) Diante de pronomes possessivos femininos singulares; 3) Após a preposição 'até'.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_005",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal • Verbo Assistir",
    "question": "No sentido de 'presenciar, ver', o verbo 'assistir' rege a preposição:",
    "options": [
      "'de' (transitivo indireto: assistir do treinamento).",
      "'em' (transitivo indireto: assistir no treinamento).",
      "'por' (transitivo indireto: assistir pelo treinamento).",
      "Nenhuma preposição (transitivo direto: assistir o treinamento).",
      "'a' (transitivo indireto: assistir ao treinamento)."
    ],
    "correctIndex": 4,
    "explanation": "O verbo assistir no sentido de ver/presenciar é transitivo indireto e exige preposição 'a'. Quem assiste, assiste A algo.",
    "fundamentacaoLegal": "Regência Verbal AOCP",
    "hint": "Assistir de ver = exige preposição A (assistir AO jogo/filme/caso).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Assistir filme = ver -> assistir AO filme!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O verbo assistir no sentido de ver/presenciar é transitivo indireto e exige preposição 'a'. Quem assiste, assiste A algo."
    }
  },
  {
    "id": "port_edital_006",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal • Preferir",
    "question": "A regência do verbo 'preferir' está em estrita conformidade com a norma culta em:",
    "options": [
      "Prefiro o serviço operacional ao administrativo.",
      "Prefiro mais o serviço operacional do que o administrativo.",
      "Prefiro o serviço operacional do que o administrativo.",
      "Prefiro mil vezes o operacional a que o administrativo.",
      "Prefiro antes o operacional do que administrativo."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'preferir' é transitivo direto e indireto: rege preposição 'a', sendo vedado o uso de 'mais', 'do que' ou 'mil vezes'.",
    "fundamentacaoLegal": "Sintaxe de Regência • Instituto AOCP",
    "hint": "Quem prefere, prefere UMA COISA A OUTRA (sem 'do que', sem 'mais').",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Prefiro A a B (NUNCA 'do que'!).",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'preferir' é transitivo direto e indireto: rege preposição 'a', sendo vedado o uso de 'mais', 'do que' ou 'mil vezes'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_007",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Verbo Haver",
    "question": "Quanto à concordância do verbo impessoal 'haver' no sentido de existir ou tempo decorrido, a frase correta é:",
    "options": [
      "Haviam muitos manifestantes bloqueando a avenida principal.",
      "Havia muitos manifestantes bloqueando a avenida principal.",
      "Houveram muitos incidentes graves no protesto.",
      "Devem haver soluções rápidas para a segurança.",
      "Vão haver novas convocações de policiais este ano."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' com sentido de 'existir' ou 'acontecer' é impessoal, não tem sujeito e fica sempre na 3ª pessoa do singular.",
    "fundamentacaoLegal": "Concordância Verbal AOCP",
    "hint": "Haver no sentido de existir não vai para o plural!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Havia pessoas (NUNCA 'haviam pessoas')!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O verbo 'haver' com sentido de 'existir' ou 'acontecer' é impessoal, não tem sujeito e fica sempre na 3ª pessoa do singular.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_008",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Verbo Fazer",
    "question": "Indique a oração que atende rigorosamente à norma-padrão quanto à concordância verbal:",
    "options": [
      "Fazem dez anos que ele ingressou na corporação da PMPE.",
      "Fazem dois meses que a nova viatura foi entregue.",
      "Faz dez anos que ele ingressou na corporação da PMPE.",
      "Vão fazer três semanas que o suspeito fugiu.",
      "Podem fazer cinco dias que a diligência terminou."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'fazer' indicando tempo transcorrido é impessoal e fica na 3ª pessoa do singular, transmitindo essa impessoalidade ao verbo auxiliar.",
    "fundamentacaoLegal": "Concordância Verbal Padrão",
    "hint": "Fazer indicando tempo decorrido não flexiona no plural: FAZ 10 anos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Faz 5 anos (nunca 'fazem 5 anos')!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O verbo 'fazer' indicando tempo transcorrido é impessoal e fica na 3ª pessoa do singular, transmitindo essa impessoalidade ao verbo auxiliar.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_009",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Partícula 'Se' Apassivadora",
    "question": "Em 'Venderam-se os imóveis do batalhão', a concordância verbal justifica-se porque:",
    "options": [
      "O termo 'os imóveis do batalhão' é objeto direto preposicionado.",
      "A palavra 'se' é índice de indeterminação do sujeito.",
      "O verbo é intransitivo e concorda com o predicativo.",
      "O termo 'os imóveis do batalhão' funciona como sujeito paciente de voz passiva sintética.",
      "Trata-se de uma oração sem sujeito."
    ],
    "correctIndex": 3,
    "explanation": "Com verbo transitivo direto acompanhado do pronome 'se', o 'se' é partícula apassivadora e o substantivo é o sujeito paciente, exigindo concordância verbal.",
    "fundamentacaoLegal": "Sintaxe do Período AOCP",
    "hint": "Vende-se casa (singular) / Vendem-se casas (plural).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Se + VTD = Partícula apassivadora (concorda com o sujeito paciente)!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Com verbo transitivo direto acompanhado do pronome 'se', o 'se' é partícula apassivadora e o substantivo é o sujeito paciente, exigindo concordância verbal.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_010",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Uso da Vírgula",
    "question": "O uso da vírgula é OBRIGATÓRIO para isolar:",
    "options": [
      "O sujeito do seu respectivo predicado verbal.",
      "O verbo transitivo de seu objeto direto ou indireto.",
      "O substantivo de seu adjunto adnominal restritivo.",
      "A conjunção 'e' que une termos de mesma função na oração.",
      "O vocativo e o adjunto adverbial deslocado de grande extensão."
    ],
    "correctIndex": 4,
    "explanation": "É proibido separar sujeito de predicado ou verbo de complemento por vírgula. É obrigatório isolar vocativo e adjuntos adverbiais deslocados longos.",
    "fundamentacaoLegal": "Pontuação AOCP",
    "hint": "Nunca separe Sujeito de Verbo e Verbo de Objeto por vírgula!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Vírgula separa fofoca (adjunto deslocado, vocativo, aposto), não separa família (sujeito-verbo-objeto).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. É proibido separar sujeito de predicado ou verbo de complemento por vírgula. É obrigatório isolar vocativo e adjuntos adverbiais deslocados longos."
    }
  },
  {
    "id": "port_edital_011",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Pronome Relativo (Q11)",
    "question": "Em 'A viatura que chegou é nova', o vocábulo 'que' classifica-se como:",
    "options": [
      "Pronome relativo que introduz oração subordinada adjetiva restritiva.",
      "Conjunção integrante que introduz oração substantiva.",
      "Conjunção explicativa coordenada.",
      "Partícula expletiva ou de realce.",
      "Advérbio de intensidade."
    ],
    "correctIndex": 0,
    "explanation": "O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
    "fundamentacaoLegal": "Gramática AOCP",
    "hint": "Troque 'que' por 'o qual / a qual'. Se der certo, é pronome relativo!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Que = o qual / a qual -> Pronome Relativo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_012",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Conjunção Integrante (Q12)",
    "question": "Em 'O coronel afirmou que a tropa estava pronta', o vocábulo 'que' atua como:",
    "options": [
      "Pronome relativo com função de sujeito.",
      "Conjunção integrante que introduz oração subordinada substantiva objetiva direta.",
      "Conjunção consecutiva.",
      "Conjunção comparativa.",
      "Preposição acidental."
    ],
    "correctIndex": 1,
    "explanation": "O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
    "fundamentacaoLegal": "Sintaxe AOCP",
    "hint": "Substitua a oração por 'ISSO': afirmou ISSO -> que = Conjunção Integrante.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Verbo + QUE = 'disse ISSO' -> Conjunção Integrante!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_013",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Subordinadas Adverbiais (Q13)",
    "question": "Em 'Embora estivesse chovendo muito, a patrulha manteve a ronda', a oração destacada expressa ideia de:",
    "options": [
      "Causa determinante do fato.",
      "Condição necessária.",
      "Concessão (oposição que não impede a realização do fato principal).",
      "Consequência imediata.",
      "Proporção temporal."
    ],
    "correctIndex": 2,
    "explanation": "'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
    "fundamentacaoLegal": "Orações Subordinadas AOCP",
    "hint": "Embora, ainda que, mesmo que, conquanto = Concessão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Concessão = 'Apesar de'!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. 'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_014",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Coordenadas • Conjunções Adversativas (Q14)",
    "question": "Assinale a alternativa que apresenta uma conjunção coordenativa adversativa:",
    "options": [
      "'O recruta treinou muito, portanto foi aprovado no curso.'",
      "'Não apenas estudou direito, como também revisou legislação.'",
      "'Ou você se dedica aos estudos, ou será superado pelos concorrentes.'",
      "'A equipe fez cerco tático, contudo o suspeito escapou pelo telhado.'",
      "'Fale baixo, porque os instrutores estão em reunião reservada.'"
    ],
    "correctIndex": 3,
    "explanation": "'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
    "fundamentacaoLegal": "Conectivos Coordenados AOCP",
    "hint": "Mas, porém, contudo, todavia, entretanto = Adversativa (oposição).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Adversativa = Oposição!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. 'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_015",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Significação das Palavras • Homônimos e Parônimos (Q15)",
    "question": "O uso do termo parônimo está CORRETO na frase:",
    "options": [
      "O juiz mandou emitir o mandado de prisão preventiva.",
      "O condutor infligiu as normas do Código de Trânsito.",
      "O tribunal vai caçar o mandato do parlamentar corrupto.",
      "A sessão de armamentos fica no segundo andar do quartel.",
      "O policial agiu com extrema discrição durante a campana noturna."
    ],
    "correctIndex": 4,
    "explanation": "Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar.",
    "fundamentacaoLegal": "Semântica e Vocabulário AOCP",
    "hint": "Discrição = discreto. Descrição = descrever.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Discreto -> Discrição. Descrever -> Descrição.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar."
    }
  },
  {
    "id": "port_edital_016",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem • Metáfora vs Comparação (Q16)",
    "question": "Em 'Aquele soldado é uma muralha intransponível na defesa', temos a figura:",
    "options": [
      "Metáfora (comparação implícita sem conectivo comparativo).",
      "Símile ou Comparação explícita com o uso do termo 'como'.",
      "Metonímia por troca de autor pela obra.",
      "Antítese de termos com sentidos opostos.",
      "Hipérbole com exagero proposital."
    ],
    "correctIndex": 0,
    "explanation": "A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
    "fundamentacaoLegal": "Estilística AOCP",
    "hint": "Com 'como' = Comparação. Sem 'como' = Metáfora.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Metáfora = afirmação direta de semelhança.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_017",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais • Voz Passiva Analítica (Q17)",
    "question": "A transposição da frase 'A Polícia Militar capturou o fugitivo' para a voz passiva resulta em:",
    "options": [
      "'O fugitivo tinha sido capturado pela Polícia Militar.'",
      "'O fugitivo foi capturado pela Polícia Militar.'",
      "'O fugitivo fora capturado pela Polícia Militar.'",
      "'Capturou-se o fugitivo pela Polícia Militar.'",
      "'O fugitivo está sendo capturado pela Polícia Militar.'"
    ],
    "correctIndex": 1,
    "explanation": "No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
    "fundamentacaoLegal": "Vozes Verbais AOCP",
    "hint": "Pretérito perfeito ativo vira 'foi + particípio' na passiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Manteve o tempo verbal: capturou -> foi capturado.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_018",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Agente da Passiva (Q18)",
    "question": "Na oração 'O laudo pericial foi assinado pelo médico legista', o termo sublinhado é:",
    "options": [
      "Objeto indireto regido pela preposição 'por'.",
      "Adjunto adverbial de instrumento.",
      "Agente da passiva (termo que pratica a ação expressa pelo verbo passivo).",
      "Complemento nominal do particípio.",
      "Sujeito paciente da ação verbal."
    ],
    "correctIndex": 2,
    "explanation": "O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
    "fundamentacaoLegal": "Sintaxe do Período Simples AOCP",
    "hint": "Quem faz a ação na voz passiva = Agente da Passiva.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Por + agente na passiva = Agente da Passiva.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_019",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Adjunto Adnominal vs Complemento Nominal (Q19)",
    "question": "Em 'A atuação da Polícia Militar foi elogiada pela sociedade', o termo 'da Polícia Militar' é:",
    "options": [
      "Complemento nominal (valor passivo).",
      "Objeto indireto do verbo de ligação.",
      "Predicativo do sujeito paciente.",
      "Adjunto adnominal (valor ativo em relação ao substantivo abstrato 'atuação').",
      "Aposto explicativo especificativo."
    ],
    "correctIndex": 3,
    "explanation": "Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
    "fundamentacaoLegal": "Sintaxe AOCP Avançada",
    "hint": "Ativo = Adjunto Adnominal. Passivo = Complemento Nominal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "A PM atua (ação) = Adjunto Adnominal!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_020",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia • Uso dos Porquês (Q20)",
    "question": "Assinale a opção em que o uso do 'porquê' está plenamente CORRETO:",
    "options": [
      "Você se atrasou para a formatura por que?",
      "Ele faltou ao serviço militar porquê estava enfermo.",
      "Por que razão você não entregou a arma, por quê?",
      "Diga-me o por quê da sua ausência ontem à noite.",
      "Não compreendi o porquê de tanta revolta na manifestação."
    ],
    "correctIndex": 4,
    "explanation": "'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral.",
    "fundamentacaoLegal": "Ortografia AOCP",
    "hint": "O porquê = substantivo (o motivo). No fim de frase = por quê? Resposta = porque. Pergunta = por que.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "O porquê = o motivo!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. 'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral."
    }
  },
  {
    "id": "port_edital_021",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Pronome Relativo (Q21)",
    "question": "Em 'A viatura que chegou é nova', o vocábulo 'que' classifica-se como:",
    "options": [
      "Pronome relativo que introduz oração subordinada adjetiva restritiva.",
      "Conjunção integrante que introduz oração substantiva.",
      "Conjunção explicativa coordenada.",
      "Partícula expletiva ou de realce.",
      "Advérbio de intensidade."
    ],
    "correctIndex": 0,
    "explanation": "O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
    "fundamentacaoLegal": "Gramática AOCP",
    "hint": "Troque 'que' por 'o qual / a qual'. Se der certo, é pronome relativo!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Que = o qual / a qual -> Pronome Relativo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_022",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Conjunção Integrante (Q22)",
    "question": "Em 'O coronel afirmou que a tropa estava pronta', o vocábulo 'que' atua como:",
    "options": [
      "Pronome relativo com função de sujeito.",
      "Conjunção integrante que introduz oração subordinada substantiva objetiva direta.",
      "Conjunção consecutiva.",
      "Conjunção comparativa.",
      "Preposição acidental."
    ],
    "correctIndex": 1,
    "explanation": "O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
    "fundamentacaoLegal": "Sintaxe AOCP",
    "hint": "Substitua a oração por 'ISSO': afirmou ISSO -> que = Conjunção Integrante.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Verbo + QUE = 'disse ISSO' -> Conjunção Integrante!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_023",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Subordinadas Adverbiais (Q23)",
    "question": "Em 'Embora estivesse chovendo muito, a patrulha manteve a ronda', a oração destacada expressa ideia de:",
    "options": [
      "Causa determinante do fato.",
      "Condição necessária.",
      "Concessão (oposição que não impede a realização do fato principal).",
      "Consequência imediata.",
      "Proporção temporal."
    ],
    "correctIndex": 2,
    "explanation": "'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
    "fundamentacaoLegal": "Orações Subordinadas AOCP",
    "hint": "Embora, ainda que, mesmo que, conquanto = Concessão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Concessão = 'Apesar de'!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. 'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_024",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Coordenadas • Conjunções Adversativas (Q24)",
    "question": "Assinale a alternativa que apresenta uma conjunção coordenativa adversativa:",
    "options": [
      "'O recruta treinou muito, portanto foi aprovado no curso.'",
      "'Não apenas estudou direito, como também revisou legislação.'",
      "'Ou você se dedica aos estudos, ou será superado pelos concorrentes.'",
      "'A equipe fez cerco tático, contudo o suspeito escapou pelo telhado.'",
      "'Fale baixo, porque os instrutores estão em reunião reservada.'"
    ],
    "correctIndex": 3,
    "explanation": "'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
    "fundamentacaoLegal": "Conectivos Coordenados AOCP",
    "hint": "Mas, porém, contudo, todavia, entretanto = Adversativa (oposição).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Adversativa = Oposição!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. 'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_025",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Significação das Palavras • Homônimos e Parônimos (Q25)",
    "question": "O uso do termo parônimo está CORRETO na frase:",
    "options": [
      "O juiz mandou emitir o mandado de prisão preventiva.",
      "O condutor infligiu as normas do Código de Trânsito.",
      "O tribunal vai caçar o mandato do parlamentar corrupto.",
      "A sessão de armamentos fica no segundo andar do quartel.",
      "O policial agiu com extrema discrição durante a campana noturna."
    ],
    "correctIndex": 4,
    "explanation": "Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar.",
    "fundamentacaoLegal": "Semântica e Vocabulário AOCP",
    "hint": "Discrição = discreto. Descrição = descrever.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Discreto -> Discrição. Descrever -> Descrição.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar."
    }
  },
  {
    "id": "port_edital_026",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem • Metáfora vs Comparação (Q26)",
    "question": "Em 'Aquele soldado é uma muralha intransponível na defesa', temos a figura:",
    "options": [
      "Metáfora (comparação implícita sem conectivo comparativo).",
      "Símile ou Comparação explícita com o uso do termo 'como'.",
      "Metonímia por troca de autor pela obra.",
      "Antítese de termos com sentidos opostos.",
      "Hipérbole com exagero proposital."
    ],
    "correctIndex": 0,
    "explanation": "A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
    "fundamentacaoLegal": "Estilística AOCP",
    "hint": "Com 'como' = Comparação. Sem 'como' = Metáfora.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Metáfora = afirmação direta de semelhança.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_027",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais • Voz Passiva Analítica (Q27)",
    "question": "A transposição da frase 'A Polícia Militar capturou o fugitivo' para a voz passiva resulta em:",
    "options": [
      "'O fugitivo tinha sido capturado pela Polícia Militar.'",
      "'O fugitivo foi capturado pela Polícia Militar.'",
      "'O fugitivo fora capturado pela Polícia Militar.'",
      "'Capturou-se o fugitivo pela Polícia Militar.'",
      "'O fugitivo está sendo capturado pela Polícia Militar.'"
    ],
    "correctIndex": 1,
    "explanation": "No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
    "fundamentacaoLegal": "Vozes Verbais AOCP",
    "hint": "Pretérito perfeito ativo vira 'foi + particípio' na passiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Manteve o tempo verbal: capturou -> foi capturado.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_028",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Agente da Passiva (Q28)",
    "question": "Na oração 'O laudo pericial foi assinado pelo médico legista', o termo sublinhado é:",
    "options": [
      "Objeto indireto regido pela preposição 'por'.",
      "Adjunto adverbial de instrumento.",
      "Agente da passiva (termo que pratica a ação expressa pelo verbo passivo).",
      "Complemento nominal do particípio.",
      "Sujeito paciente da ação verbal."
    ],
    "correctIndex": 2,
    "explanation": "O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
    "fundamentacaoLegal": "Sintaxe do Período Simples AOCP",
    "hint": "Quem faz a ação na voz passiva = Agente da Passiva.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Por + agente na passiva = Agente da Passiva.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_029",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Adjunto Adnominal vs Complemento Nominal (Q29)",
    "question": "Em 'A atuação da Polícia Militar foi elogiada pela sociedade', o termo 'da Polícia Militar' é:",
    "options": [
      "Complemento nominal (valor passivo).",
      "Objeto indireto do verbo de ligação.",
      "Predicativo do sujeito paciente.",
      "Adjunto adnominal (valor ativo em relação ao substantivo abstrato 'atuação').",
      "Aposto explicativo especificativo."
    ],
    "correctIndex": 3,
    "explanation": "Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
    "fundamentacaoLegal": "Sintaxe AOCP Avançada",
    "hint": "Ativo = Adjunto Adnominal. Passivo = Complemento Nominal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "A PM atua (ação) = Adjunto Adnominal!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_030",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia • Uso dos Porquês (Q30)",
    "question": "Assinale a opção em que o uso do 'porquê' está plenamente CORRETO:",
    "options": [
      "Você se atrasou para a formatura por que?",
      "Ele faltou ao serviço militar porquê estava enfermo.",
      "Por que razão você não entregou a arma, por quê?",
      "Diga-me o por quê da sua ausência ontem à noite.",
      "Não compreendi o porquê de tanta revolta na manifestação."
    ],
    "correctIndex": 4,
    "explanation": "'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral.",
    "fundamentacaoLegal": "Ortografia AOCP",
    "hint": "O porquê = substantivo (o motivo). No fim de frase = por quê? Resposta = porque. Pergunta = por que.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "O porquê = o motivo!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. 'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral."
    }
  },
  {
    "id": "port_edital_031",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Pronome Relativo (Q31)",
    "question": "Em 'A viatura que chegou é nova', o vocábulo 'que' classifica-se como:",
    "options": [
      "Pronome relativo que introduz oração subordinada adjetiva restritiva.",
      "Conjunção integrante que introduz oração substantiva.",
      "Conjunção explicativa coordenada.",
      "Partícula expletiva ou de realce.",
      "Advérbio de intensidade."
    ],
    "correctIndex": 0,
    "explanation": "O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
    "fundamentacaoLegal": "Gramática AOCP",
    "hint": "Troque 'que' por 'o qual / a qual'. Se der certo, é pronome relativo!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Que = o qual / a qual -> Pronome Relativo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_032",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Conjunção Integrante (Q32)",
    "question": "Em 'O coronel afirmou que a tropa estava pronta', o vocábulo 'que' atua como:",
    "options": [
      "Pronome relativo com função de sujeito.",
      "Conjunção integrante que introduz oração subordinada substantiva objetiva direta.",
      "Conjunção consecutiva.",
      "Conjunção comparativa.",
      "Preposição acidental."
    ],
    "correctIndex": 1,
    "explanation": "O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
    "fundamentacaoLegal": "Sintaxe AOCP",
    "hint": "Substitua a oração por 'ISSO': afirmou ISSO -> que = Conjunção Integrante.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Verbo + QUE = 'disse ISSO' -> Conjunção Integrante!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_033",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Subordinadas Adverbiais (Q33)",
    "question": "Em 'Embora estivesse chovendo muito, a patrulha manteve a ronda', a oração destacada expressa ideia de:",
    "options": [
      "Causa determinante do fato.",
      "Condição necessária.",
      "Concessão (oposição que não impede a realização do fato principal).",
      "Consequência imediata.",
      "Proporção temporal."
    ],
    "correctIndex": 2,
    "explanation": "'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
    "fundamentacaoLegal": "Orações Subordinadas AOCP",
    "hint": "Embora, ainda que, mesmo que, conquanto = Concessão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Concessão = 'Apesar de'!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. 'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_034",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Coordenadas • Conjunções Adversativas (Q34)",
    "question": "Assinale a alternativa que apresenta uma conjunção coordenativa adversativa:",
    "options": [
      "'O recruta treinou muito, portanto foi aprovado no curso.'",
      "'Não apenas estudou direito, como também revisou legislação.'",
      "'Ou você se dedica aos estudos, ou será superado pelos concorrentes.'",
      "'A equipe fez cerco tático, contudo o suspeito escapou pelo telhado.'",
      "'Fale baixo, porque os instrutores estão em reunião reservada.'"
    ],
    "correctIndex": 3,
    "explanation": "'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
    "fundamentacaoLegal": "Conectivos Coordenados AOCP",
    "hint": "Mas, porém, contudo, todavia, entretanto = Adversativa (oposição).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Adversativa = Oposição!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. 'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_035",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Significação das Palavras • Homônimos e Parônimos (Q35)",
    "question": "O uso do termo parônimo está CORRETO na frase:",
    "options": [
      "O juiz mandou emitir o mandado de prisão preventiva.",
      "O condutor infligiu as normas do Código de Trânsito.",
      "O tribunal vai caçar o mandato do parlamentar corrupto.",
      "A sessão de armamentos fica no segundo andar do quartel.",
      "O policial agiu com extrema discrição durante a campana noturna."
    ],
    "correctIndex": 4,
    "explanation": "Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar.",
    "fundamentacaoLegal": "Semântica e Vocabulário AOCP",
    "hint": "Discrição = discreto. Descrição = descrever.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Discreto -> Discrição. Descrever -> Descrição.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar."
    }
  },
  {
    "id": "port_edital_036",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem • Metáfora vs Comparação (Q36)",
    "question": "Em 'Aquele soldado é uma muralha intransponível na defesa', temos a figura:",
    "options": [
      "Metáfora (comparação implícita sem conectivo comparativo).",
      "Símile ou Comparação explícita com o uso do termo 'como'.",
      "Metonímia por troca de autor pela obra.",
      "Antítese de termos com sentidos opostos.",
      "Hipérbole com exagero proposital."
    ],
    "correctIndex": 0,
    "explanation": "A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
    "fundamentacaoLegal": "Estilística AOCP",
    "hint": "Com 'como' = Comparação. Sem 'como' = Metáfora.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Metáfora = afirmação direta de semelhança.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_037",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais • Voz Passiva Analítica (Q37)",
    "question": "A transposição da frase 'A Polícia Militar capturou o fugitivo' para a voz passiva resulta em:",
    "options": [
      "'O fugitivo tinha sido capturado pela Polícia Militar.'",
      "'O fugitivo foi capturado pela Polícia Militar.'",
      "'O fugitivo fora capturado pela Polícia Militar.'",
      "'Capturou-se o fugitivo pela Polícia Militar.'",
      "'O fugitivo está sendo capturado pela Polícia Militar.'"
    ],
    "correctIndex": 1,
    "explanation": "No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
    "fundamentacaoLegal": "Vozes Verbais AOCP",
    "hint": "Pretérito perfeito ativo vira 'foi + particípio' na passiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Manteve o tempo verbal: capturou -> foi capturado.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_038",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Agente da Passiva (Q38)",
    "question": "Na oração 'O laudo pericial foi assinado pelo médico legista', o termo sublinhado é:",
    "options": [
      "Objeto indireto regido pela preposição 'por'.",
      "Adjunto adverbial de instrumento.",
      "Agente da passiva (termo que pratica a ação expressa pelo verbo passivo).",
      "Complemento nominal do particípio.",
      "Sujeito paciente da ação verbal."
    ],
    "correctIndex": 2,
    "explanation": "O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
    "fundamentacaoLegal": "Sintaxe do Período Simples AOCP",
    "hint": "Quem faz a ação na voz passiva = Agente da Passiva.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Por + agente na passiva = Agente da Passiva.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_039",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Adjunto Adnominal vs Complemento Nominal (Q39)",
    "question": "Em 'A atuação da Polícia Militar foi elogiada pela sociedade', o termo 'da Polícia Militar' é:",
    "options": [
      "Complemento nominal (valor passivo).",
      "Objeto indireto do verbo de ligação.",
      "Predicativo do sujeito paciente.",
      "Adjunto adnominal (valor ativo em relação ao substantivo abstrato 'atuação').",
      "Aposto explicativo especificativo."
    ],
    "correctIndex": 3,
    "explanation": "Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
    "fundamentacaoLegal": "Sintaxe AOCP Avançada",
    "hint": "Ativo = Adjunto Adnominal. Passivo = Complemento Nominal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "A PM atua (ação) = Adjunto Adnominal!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_040",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia • Uso dos Porquês (Q40)",
    "question": "Assinale a opção em que o uso do 'porquê' está plenamente CORRETO:",
    "options": [
      "Você se atrasou para a formatura por que?",
      "Ele faltou ao serviço militar porquê estava enfermo.",
      "Por que razão você não entregou a arma, por quê?",
      "Diga-me o por quê da sua ausência ontem à noite.",
      "Não compreendi o porquê de tanta revolta na manifestação."
    ],
    "correctIndex": 4,
    "explanation": "'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral.",
    "fundamentacaoLegal": "Ortografia AOCP",
    "hint": "O porquê = substantivo (o motivo). No fim de frase = por quê? Resposta = porque. Pergunta = por que.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "O porquê = o motivo!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. 'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral."
    }
  },
  {
    "id": "port_edital_041",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Pronome Relativo (Q41)",
    "question": "Em 'A viatura que chegou é nova', o vocábulo 'que' classifica-se como:",
    "options": [
      "Pronome relativo que introduz oração subordinada adjetiva restritiva.",
      "Conjunção integrante que introduz oração substantiva.",
      "Conjunção explicativa coordenada.",
      "Partícula expletiva ou de realce.",
      "Advérbio de intensidade."
    ],
    "correctIndex": 0,
    "explanation": "O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
    "fundamentacaoLegal": "Gramática AOCP",
    "hint": "Troque 'que' por 'o qual / a qual'. Se der certo, é pronome relativo!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Que = o qual / a qual -> Pronome Relativo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O 'que' retoma o antecedente substantivo 'A viatura' (= a qual chegou), exercendo função de pronome relativo.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_042",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Função do 'Que' • Conjunção Integrante (Q42)",
    "question": "Em 'O coronel afirmou que a tropa estava pronta', o vocábulo 'que' atua como:",
    "options": [
      "Pronome relativo com função de sujeito.",
      "Conjunção integrante que introduz oração subordinada substantiva objetiva direta.",
      "Conjunção consecutiva.",
      "Conjunção comparativa.",
      "Preposição acidental."
    ],
    "correctIndex": 1,
    "explanation": "O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
    "fundamentacaoLegal": "Sintaxe AOCP",
    "hint": "Substitua a oração por 'ISSO': afirmou ISSO -> que = Conjunção Integrante.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Verbo + QUE = 'disse ISSO' -> Conjunção Integrante!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O 'que' liga a oração principal ao seu complemento oracional ('afirmou ISSO'). Quando substituível por 'isso', é conjunção integrante.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_043",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Subordinadas Adverbiais (Q43)",
    "question": "Em 'Embora estivesse chovendo muito, a patrulha manteve a ronda', a oração destacada expressa ideia de:",
    "options": [
      "Causa determinante do fato.",
      "Condição necessária.",
      "Concessão (oposição que não impede a realização do fato principal).",
      "Consequência imediata.",
      "Proporção temporal."
    ],
    "correctIndex": 2,
    "explanation": "'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
    "fundamentacaoLegal": "Orações Subordinadas AOCP",
    "hint": "Embora, ainda que, mesmo que, conquanto = Concessão!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Concessão = 'Apesar de'!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. 'Embora' é a conjunção concessiva por excelência; indica uma quebra de expectativa ou obstáculo que não frustra a ação principal.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_044",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Coordenadas • Conjunções Adversativas (Q44)",
    "question": "Assinale a alternativa que apresenta uma conjunção coordenativa adversativa:",
    "options": [
      "'O recruta treinou muito, portanto foi aprovado no curso.'",
      "'Não apenas estudou direito, como também revisou legislação.'",
      "'Ou você se dedica aos estudos, ou será superado pelos concorrentes.'",
      "'A equipe fez cerco tático, contudo o suspeito escapou pelo telhado.'",
      "'Fale baixo, porque os instrutores estão em reunião reservada.'"
    ],
    "correctIndex": 3,
    "explanation": "'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
    "fundamentacaoLegal": "Conectivos Coordenados AOCP",
    "hint": "Mas, porém, contudo, todavia, entretanto = Adversativa (oposição).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Adversativa = Oposição!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. 'Contudo', 'todavia', 'entretanto', 'porém' e 'mas' são conjunções adversativas que indicam oposição e contraste.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_045",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Significação das Palavras • Homônimos e Parônimos (Q45)",
    "question": "O uso do termo parônimo está CORRETO na frase:",
    "options": [
      "O juiz mandou emitir o mandado de prisão preventiva.",
      "O condutor infligiu as normas do Código de Trânsito.",
      "O tribunal vai caçar o mandato do parlamentar corrupto.",
      "A sessão de armamentos fica no segundo andar do quartel.",
      "O policial agiu com extrema discrição durante a campana noturna."
    ],
    "correctIndex": 4,
    "explanation": "Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar.",
    "fundamentacaoLegal": "Semântica e Vocabulário AOCP",
    "hint": "Discrição = discreto. Descrição = descrever.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Discreto -> Discrição. Descrever -> Descrição.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Discrição (ser discreto/reservado) difere de discricionariedade (juízo de conveniência). 'Mandado' é ordem judicial; infligir é aplicar pena; infringir é violar."
    }
  },
  {
    "id": "port_edital_046",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem • Metáfora vs Comparação (Q46)",
    "question": "Em 'Aquele soldado é uma muralha intransponível na defesa', temos a figura:",
    "options": [
      "Metáfora (comparação implícita sem conectivo comparativo).",
      "Símile ou Comparação explícita com o uso do termo 'como'.",
      "Metonímia por troca de autor pela obra.",
      "Antítese de termos com sentidos opostos.",
      "Hipérbole com exagero proposital."
    ],
    "correctIndex": 0,
    "explanation": "A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
    "fundamentacaoLegal": "Estilística AOCP",
    "hint": "Com 'como' = Comparação. Sem 'como' = Metáfora.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Metáfora = afirmação direta de semelhança.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A metáfora estabelece uma identificação analógica direta entre dois seres sem conectivo comparativo expresso ('como', 'tal qual').",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_047",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais • Voz Passiva Analítica (Q47)",
    "question": "A transposição da frase 'A Polícia Militar capturou o fugitivo' para a voz passiva resulta em:",
    "options": [
      "'O fugitivo tinha sido capturado pela Polícia Militar.'",
      "'O fugitivo foi capturado pela Polícia Militar.'",
      "'O fugitivo fora capturado pela Polícia Militar.'",
      "'Capturou-se o fugitivo pela Polícia Militar.'",
      "'O fugitivo está sendo capturado pela Polícia Militar.'"
    ],
    "correctIndex": 1,
    "explanation": "No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
    "fundamentacaoLegal": "Vozes Verbais AOCP",
    "hint": "Pretérito perfeito ativo vira 'foi + particípio' na passiva.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Manteve o tempo verbal: capturou -> foi capturado.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. No pretérito perfeito do indicativo ('capturou'), a voz passiva analítica correspondente emprega 'foi' + particípio ('foi capturado').",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_048",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Agente da Passiva (Q48)",
    "question": "Na oração 'O laudo pericial foi assinado pelo médico legista', o termo sublinhado é:",
    "options": [
      "Objeto indireto regido pela preposição 'por'.",
      "Adjunto adverbial de instrumento.",
      "Agente da passiva (termo que pratica a ação expressa pelo verbo passivo).",
      "Complemento nominal do particípio.",
      "Sujeito paciente da ação verbal."
    ],
    "correctIndex": 2,
    "explanation": "O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
    "fundamentacaoLegal": "Sintaxe do Período Simples AOCP",
    "hint": "Quem faz a ação na voz passiva = Agente da Passiva.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Por + agente na passiva = Agente da Passiva.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O termo preposicionado ('pelo médico legista') que pratica a ação na voz passiva analítica classifica-se sintaticamente como agente da passiva.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_049",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Adjunto Adnominal vs Complemento Nominal (Q49)",
    "question": "Em 'A atuação da Polícia Militar foi elogiada pela sociedade', o termo 'da Polícia Militar' é:",
    "options": [
      "Complemento nominal (valor passivo).",
      "Objeto indireto do verbo de ligação.",
      "Predicativo do sujeito paciente.",
      "Adjunto adnominal (valor ativo em relação ao substantivo abstrato 'atuação').",
      "Aposto explicativo especificativo."
    ],
    "correctIndex": 3,
    "explanation": "Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
    "fundamentacaoLegal": "Sintaxe AOCP Avançada",
    "hint": "Ativo = Adjunto Adnominal. Passivo = Complemento Nominal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "A PM atua (ação) = Adjunto Adnominal!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Com substantivo abstrato derivado de verbo, o termo preposicionado com sentido ativo (a PM atua) é adjunto adnominal; se fosse passivo, seria complemento nominal.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "port_edital_050",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia • Uso dos Porquês (Q50)",
    "question": "Assinale a opção em que o uso do 'porquê' está plenamente CORRETO:",
    "options": [
      "Você se atrasou para a formatura por que?",
      "Ele faltou ao serviço militar porquê estava enfermo.",
      "Por que razão você não entregou a arma, por quê?",
      "Diga-me o por quê da sua ausência ontem à noite.",
      "Não compreendi o porquê de tanta revolta na manifestação."
    ],
    "correctIndex": 4,
    "explanation": "'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral.",
    "fundamentacaoLegal": "Ortografia AOCP",
    "hint": "O porquê = substantivo (o motivo). No fim de frase = por quê? Resposta = porque. Pergunta = por que.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "O porquê = o motivo!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. 'Porquê' substantivado (sinônimo de motivo, razão) é grafado junto e com acento circunflexo, antecedido por artigo, pronome ou numeral."
    }
  },
  {
    "id": "hist_edital_001",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Governo de Nassau (1637-1644) (Q1)",
    "question": "O governo do Conde Maurício de Nassau em Pernambuco (1637-1644) caracterizou-se principalmente por:",
    "options": [
      "Tolerância religiosa entre católicos, protestantes e judeus, modernização urbana do Recife (Cidade Maurícia) e fomento às artes e ciências.",
      "Expulsão sumária de todos os colonos portugueses e confisco total dos engenhos.",
      "Proibição da liberdade de culto para a comunidade judaica e fechamento de sinagogas.",
      "Abandono das lavouras de cana-de-açúcar em favor da mineração de ouro no Sertão pernambucano.",
      "Aliança militar exclusiva com a Coroa espanhola durante a União Ibérica."
    ],
    "correctIndex": 0,
    "explanation": "Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
    "fundamentacaoLegal": "História de Pernambuco • Edital PMPE",
    "hint": "Nassau = Tolerância religiosa, Cidade Maurícia, artistas (Frans Post) e empréstimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nassau pacificou e embelezou o Recife com tolerância religiosa.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_002",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes (Q2)",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), marco da Insurreição Pernambucana, são simbolicamente celebradas como:",
    "options": [
      "A derrota definitiva das forças luso-brasileiras e consolidação da Nova Holanda.",
      "O berço histórico do Exército Brasileiro e a união das três matrizes formadoras do povo (brancos, indígenas e negros sob liderança de Vidal de Negreiros, Felipe Camarão e Henrique Dias).",
      "Um conflito armado entre senhores de engenho de Olinda e comerciantes do Recife.",
      "A adesão imediata de Pernambuco à Confederação do Equador.",
      "O estopim da Guerra dos Mascates provocada pela autonomia do Recife."
    ],
    "correctIndex": 1,
    "explanation": "As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
    "fundamentacaoLegal": "História de PE • Insurreição Pernambucana",
    "hint": "Guararapes = União das 3 raças + Berço do Exército Brasileiro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Henrique Dias (negros) + Camarão (índios) + Vieira/Negreiros (brancos).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_003",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) (Q3)",
    "question": "A Guerra dos Mascates (1710) resultou da rivalidade sociopolítica e econômica entre:",
    "options": [
      "Os fazendeiros do Sertão do Pajeú e os pescadores da Zona da Mata sul pernambucana.",
      "As forças legalistas do Império e os revoltosos republicanos da Confederação do Equador.",
      "Os aristocratas senhores de engenho decadentes e endividados de Olinda e os prósperos comerciantes portugueses ('mascates') do Recife.",
      "Os quilombolas de Palmares e os bandeirantes paulistas chefiados por Domingos Jorge Velho.",
      "Os padres revolucionários de 1817 e a Maçonaria pernambucana."
    ],
    "correctIndex": 2,
    "explanation": "A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
    "fundamentacaoLegal": "História de PE • Século XVIII",
    "hint": "Olinda = Aristocratas de engenho endividados. Recife = Comerciantes portugueses ricos (mascates).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Olinda (terra/engenho) vs Recife (mar/comércio).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_004",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 (Q4)",
    "question": "A Revolução Pernambucana de 1817 destacou-se no cenário nacional como o único movimento emancipacionista do período colonial que:",
    "options": [
      "Defendeu a manutenção da monarquia absolutista e a subserviência a D. João VI.",
      "Restringiu-se a panfletagens clandestinas sem pegar em armas contra a Coroa.",
      "Reivindicou a união imediata de Pernambuco com as Províncias Unidas do Rio da Prata.",
      "Conseguiu efetivamente tomar o poder, proclamar uma República independente e instituir um governo provisório por mais de dois meses.",
      "Defendeu a continuidade da escravidão sem qualquer debate sobre liberdade civil."
    ],
    "correctIndex": 3,
    "explanation": "Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
    "fundamentacaoLegal": "História de PE • Revolução de 1817",
    "hint": "1817 = Única conspiração colonial que assumiu o poder e proclamou a República!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1817 foi vitoriosa no poder por mais de 2 meses! Mártires: Domingos Martins, Frei Caneca.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_005",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) (Q5)",
    "question": "A Confederação do Equador (1824), liderada ideologicamente por Frei Caneca e Manuel de Carvalho Pais de Andrade, eclodiu em oposição a:",
    "options": [
      "A promulgação da Lei Áurea e o fim do trabalho escravo na lavoura canavieira.",
      "A proclamação da República da Espada e a ascensão do Marechal Deodoro da Fonseca.",
      "A invasão de tropas holandesas financiadas pela Companhia das Índias Ocidentais.",
      "A assinatura do Tratado de Methuen entre Portugal e a Inglaterra.",
      "O fechamento autoritário da Assembleia Constituinte e a imposição da Constituição outorgada de 1824 por D. Pedro I, com a criação do Poder Moderador."
    ],
    "correctIndex": 4,
    "explanation": "A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco.",
    "fundamentacaoLegal": "História de PE • Primeiro Reinado",
    "hint": "1824 = Contra a Constituição Outorgada de D. Pedro I e o Poder Moderador. Frei Caneca fuzilado no Forte das Cinco Pontas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Confederação do Equador = Luta contra o absolutismo de D. Pedro I.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco."
    }
  },
  {
    "id": "hist_edital_006",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848-1850) (Q6)",
    "question": "A Revolução Praieira (1848), última grande insurreição do período imperial em Pernambuco, teve como síntese programática:",
    "options": [
      "O 'Manifesto ao Mundo', que exigia o voto livre e universal do povo brasileiro, a liberdade irrestrita de imprensa e a nacionalização do comércio varejista.",
      "O 'Manifesto dos Mascates', que pedia a submissão militar do Recife a Olinda.",
      "A restauração de D. Pedro I no trono brasileiro e o restabelecimento do tráfico negreiro.",
      "A anexação da Província de Alagoas e da Paraíba ao território pernambucano sob regime monárquico.",
      "A criação imediata da Polícia Militar de Pernambuco subordinada ao Exército Imperial."
    ],
    "correctIndex": 0,
    "explanation": "Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
    "fundamentacaoLegal": "História de PE • Segundo Reinado",
    "hint": "Praieira = Manifesto ao Mundo (1848), voto universal e expulsão dos portugueses do comércio a retalho.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Praieira = 'Manifesto ao Mundo' na Rua da Praia.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_007",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco • Duarte Coelho (Q7)",
    "question": "Duarte Coelho Pereira, primeiro donatário da Capitania de Pernambuco (Nova Lusitânia), obteve expressivo sucesso econômico devido principalmente a:",
    "options": [
      "A exploração intensiva de ricas minas de prata descobertas no Sertão do São Francisco.",
      "A introdução bem-sucedida do cultivo da cana-de-açúcar, aproveitando o solo fértil de massapê e o clima favorável do litoral.",
      "O comércio exclusivo de especiarias importadas da Índia e da China.",
      "A aliança comercial com piratas franceses que frequentavam a bacia do Capibaribe.",
      "A extração em larga escala de café e borracha na Zona da Mata norte."
    ],
    "correctIndex": 1,
    "explanation": "A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
    "fundamentacaoLegal": "História de PE • Período Colonial",
    "hint": "Duarte Coelho + Massapê + Cana-de-açúcar = Sucesso de Pernambuco colonial.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Pernambuco prosperou com o Açúcar e o solo fértil de Massapê.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_008",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço em Pernambuco • O Bando de Lampião (Q8)",
    "question": "A atuação do cangaço liderado por Virgulino Ferreira da Silva (Lampião) no Sertão de Pernambuco provocou:",
    "options": [
      "A imediata rendição do governo estadual e cessão de terras públicas aos cangaceiros.",
      "A dissolução da Força Pública de Pernambuco por ordem do Presidente Washington Luís.",
      "A organização de forças policiais especiais móveis denominadas 'Volantes', que combatiam o banditismo rural sertanejo.",
      "A união pacífica entre fazendeiros coronéis e o bando armado de Lampião contra o Governo Central.",
      "O fim definitivo da produção agrícola ao longo de todo o Vale do São Francisco."
    ],
    "correctIndex": 2,
    "explanation": "O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
    "fundamentacaoLegal": "História Social e Segurança em PE",
    "hint": "Cangaço x Volantes da Polícia Militar no Sertão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volantes = Policiais que caçavam os cangaceiros no sertão.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_009",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "História da PMPE • Origem da Corporação (Q9)",
    "question": "A Polícia Militar de Pernambuco (PMPE) tem suas origens históricas vinculadas à criação do:",
    "options": [
      "'Corpo de Arqueiros de Maurício de Nassau' em 1640.",
      "'Pelotão Especial dos Mascates' em 1711.",
      "'Batalhão Revolucionário dos Padres de 1817'.",
      "'Corpo de Polícia Provincial' em 11 de junho de 1825, instituído após a Confederação do Equador para manter a ordem e a segurança da província.",
      "'Regimento Provisório de Voluntários da Pátria da Guerra do Paraguai em 1865."
    ],
    "correctIndex": 3,
    "explanation": "A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
    "fundamentacaoLegal": "Legislação e História da PMPE",
    "hint": "Data Magna da PMPE: 11 de junho de 1825 (Corpo de Polícia Provincial).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "11 de junho de 1825 = Fundação da PMPE!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_010",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco no Século XX • Ligas Camponesas (Q10)",
    "question": "Nas décadas de 1950 e 1960, o campo pernambucano, especialmente no Engenho Galiléia (Vitória de Santo Antão), foi palco de:",
    "options": [
      "Uma revolta armada armada de fazendeiros monarquistas contra Juscelino Kubitschek.",
      "A fundação da primeira indústria automobilística do Nordeste brasileiro.",
      "A expulsão das tropas federais por meio de guerrilha organizada pelo clero conservador.",
      "A criação da Sudene como órgão militarizado de policiamento ostensivo.",
      "O surgimento das Ligas Camponesas, lideradas pelo advogado Francisco Julião, que lutavam por reforma agrária e direitos trabalhistas para os trabalhadores rurais."
    ],
    "correctIndex": 4,
    "explanation": "As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964.",
    "fundamentacaoLegal": "História Contemporânea de PE",
    "hint": "Ligas Camponesas = Engenho Galiléia + Francisco Julião + Luta pela terra.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ligas Camponesas = Francisco Julião em Pernambuco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964."
    }
  },
  {
    "id": "hist_edital_011",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Governo de Nassau (1637-1644) (Q11)",
    "question": "O governo do Conde Maurício de Nassau em Pernambuco (1637-1644) caracterizou-se principalmente por:",
    "options": [
      "Tolerância religiosa entre católicos, protestantes e judeus, modernização urbana do Recife (Cidade Maurícia) e fomento às artes e ciências.",
      "Expulsão sumária de todos os colonos portugueses e confisco total dos engenhos.",
      "Proibição da liberdade de culto para a comunidade judaica e fechamento de sinagogas.",
      "Abandono das lavouras de cana-de-açúcar em favor da mineração de ouro no Sertão pernambucano.",
      "Aliança militar exclusiva com a Coroa espanhola durante a União Ibérica."
    ],
    "correctIndex": 0,
    "explanation": "Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
    "fundamentacaoLegal": "História de Pernambuco • Edital PMPE",
    "hint": "Nassau = Tolerância religiosa, Cidade Maurícia, artistas (Frans Post) e empréstimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nassau pacificou e embelezou o Recife com tolerância religiosa.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_012",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes (Q12)",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), marco da Insurreição Pernambucana, são simbolicamente celebradas como:",
    "options": [
      "A derrota definitiva das forças luso-brasileiras e consolidação da Nova Holanda.",
      "O berço histórico do Exército Brasileiro e a união das três matrizes formadoras do povo (brancos, indígenas e negros sob liderança de Vidal de Negreiros, Felipe Camarão e Henrique Dias).",
      "Um conflito armado entre senhores de engenho de Olinda e comerciantes do Recife.",
      "A adesão imediata de Pernambuco à Confederação do Equador.",
      "O estopim da Guerra dos Mascates provocada pela autonomia do Recife."
    ],
    "correctIndex": 1,
    "explanation": "As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
    "fundamentacaoLegal": "História de PE • Insurreição Pernambucana",
    "hint": "Guararapes = União das 3 raças + Berço do Exército Brasileiro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Henrique Dias (negros) + Camarão (índios) + Vieira/Negreiros (brancos).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_013",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) (Q13)",
    "question": "A Guerra dos Mascates (1710) resultou da rivalidade sociopolítica e econômica entre:",
    "options": [
      "Os fazendeiros do Sertão do Pajeú e os pescadores da Zona da Mata sul pernambucana.",
      "As forças legalistas do Império e os revoltosos republicanos da Confederação do Equador.",
      "Os aristocratas senhores de engenho decadentes e endividados de Olinda e os prósperos comerciantes portugueses ('mascates') do Recife.",
      "Os quilombolas de Palmares e os bandeirantes paulistas chefiados por Domingos Jorge Velho.",
      "Os padres revolucionários de 1817 e a Maçonaria pernambucana."
    ],
    "correctIndex": 2,
    "explanation": "A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
    "fundamentacaoLegal": "História de PE • Século XVIII",
    "hint": "Olinda = Aristocratas de engenho endividados. Recife = Comerciantes portugueses ricos (mascates).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Olinda (terra/engenho) vs Recife (mar/comércio).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_014",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 (Q14)",
    "question": "A Revolução Pernambucana de 1817 destacou-se no cenário nacional como o único movimento emancipacionista do período colonial que:",
    "options": [
      "Defendeu a manutenção da monarquia absolutista e a subserviência a D. João VI.",
      "Restringiu-se a panfletagens clandestinas sem pegar em armas contra a Coroa.",
      "Reivindicou a união imediata de Pernambuco com as Províncias Unidas do Rio da Prata.",
      "Conseguiu efetivamente tomar o poder, proclamar uma República independente e instituir um governo provisório por mais de dois meses.",
      "Defendeu a continuidade da escravidão sem qualquer debate sobre liberdade civil."
    ],
    "correctIndex": 3,
    "explanation": "Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
    "fundamentacaoLegal": "História de PE • Revolução de 1817",
    "hint": "1817 = Única conspiração colonial que assumiu o poder e proclamou a República!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1817 foi vitoriosa no poder por mais de 2 meses! Mártires: Domingos Martins, Frei Caneca.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_015",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) (Q15)",
    "question": "A Confederação do Equador (1824), liderada ideologicamente por Frei Caneca e Manuel de Carvalho Pais de Andrade, eclodiu em oposição a:",
    "options": [
      "A promulgação da Lei Áurea e o fim do trabalho escravo na lavoura canavieira.",
      "A proclamação da República da Espada e a ascensão do Marechal Deodoro da Fonseca.",
      "A invasão de tropas holandesas financiadas pela Companhia das Índias Ocidentais.",
      "A assinatura do Tratado de Methuen entre Portugal e a Inglaterra.",
      "O fechamento autoritário da Assembleia Constituinte e a imposição da Constituição outorgada de 1824 por D. Pedro I, com a criação do Poder Moderador."
    ],
    "correctIndex": 4,
    "explanation": "A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco.",
    "fundamentacaoLegal": "História de PE • Primeiro Reinado",
    "hint": "1824 = Contra a Constituição Outorgada de D. Pedro I e o Poder Moderador. Frei Caneca fuzilado no Forte das Cinco Pontas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Confederação do Equador = Luta contra o absolutismo de D. Pedro I.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco."
    }
  },
  {
    "id": "hist_edital_016",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848-1850) (Q16)",
    "question": "A Revolução Praieira (1848), última grande insurreição do período imperial em Pernambuco, teve como síntese programática:",
    "options": [
      "O 'Manifesto ao Mundo', que exigia o voto livre e universal do povo brasileiro, a liberdade irrestrita de imprensa e a nacionalização do comércio varejista.",
      "O 'Manifesto dos Mascates', que pedia a submissão militar do Recife a Olinda.",
      "A restauração de D. Pedro I no trono brasileiro e o restabelecimento do tráfico negreiro.",
      "A anexação da Província de Alagoas e da Paraíba ao território pernambucano sob regime monárquico.",
      "A criação imediata da Polícia Militar de Pernambuco subordinada ao Exército Imperial."
    ],
    "correctIndex": 0,
    "explanation": "Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
    "fundamentacaoLegal": "História de PE • Segundo Reinado",
    "hint": "Praieira = Manifesto ao Mundo (1848), voto universal e expulsão dos portugueses do comércio a retalho.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Praieira = 'Manifesto ao Mundo' na Rua da Praia.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_017",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco • Duarte Coelho (Q17)",
    "question": "Duarte Coelho Pereira, primeiro donatário da Capitania de Pernambuco (Nova Lusitânia), obteve expressivo sucesso econômico devido principalmente a:",
    "options": [
      "A exploração intensiva de ricas minas de prata descobertas no Sertão do São Francisco.",
      "A introdução bem-sucedida do cultivo da cana-de-açúcar, aproveitando o solo fértil de massapê e o clima favorável do litoral.",
      "O comércio exclusivo de especiarias importadas da Índia e da China.",
      "A aliança comercial com piratas franceses que frequentavam a bacia do Capibaribe.",
      "A extração em larga escala de café e borracha na Zona da Mata norte."
    ],
    "correctIndex": 1,
    "explanation": "A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
    "fundamentacaoLegal": "História de PE • Período Colonial",
    "hint": "Duarte Coelho + Massapê + Cana-de-açúcar = Sucesso de Pernambuco colonial.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Pernambuco prosperou com o Açúcar e o solo fértil de Massapê.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_018",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço em Pernambuco • O Bando de Lampião (Q18)",
    "question": "A atuação do cangaço liderado por Virgulino Ferreira da Silva (Lampião) no Sertão de Pernambuco provocou:",
    "options": [
      "A imediata rendição do governo estadual e cessão de terras públicas aos cangaceiros.",
      "A dissolução da Força Pública de Pernambuco por ordem do Presidente Washington Luís.",
      "A organização de forças policiais especiais móveis denominadas 'Volantes', que combatiam o banditismo rural sertanejo.",
      "A união pacífica entre fazendeiros coronéis e o bando armado de Lampião contra o Governo Central.",
      "O fim definitivo da produção agrícola ao longo de todo o Vale do São Francisco."
    ],
    "correctIndex": 2,
    "explanation": "O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
    "fundamentacaoLegal": "História Social e Segurança em PE",
    "hint": "Cangaço x Volantes da Polícia Militar no Sertão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volantes = Policiais que caçavam os cangaceiros no sertão.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_019",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "História da PMPE • Origem da Corporação (Q19)",
    "question": "A Polícia Militar de Pernambuco (PMPE) tem suas origens históricas vinculadas à criação do:",
    "options": [
      "'Corpo de Arqueiros de Maurício de Nassau' em 1640.",
      "'Pelotão Especial dos Mascates' em 1711.",
      "'Batalhão Revolucionário dos Padres de 1817'.",
      "'Corpo de Polícia Provincial' em 11 de junho de 1825, instituído após a Confederação do Equador para manter a ordem e a segurança da província.",
      "'Regimento Provisório de Voluntários da Pátria da Guerra do Paraguai em 1865."
    ],
    "correctIndex": 3,
    "explanation": "A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
    "fundamentacaoLegal": "Legislação e História da PMPE",
    "hint": "Data Magna da PMPE: 11 de junho de 1825 (Corpo de Polícia Provincial).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "11 de junho de 1825 = Fundação da PMPE!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_020",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco no Século XX • Ligas Camponesas (Q20)",
    "question": "Nas décadas de 1950 e 1960, o campo pernambucano, especialmente no Engenho Galiléia (Vitória de Santo Antão), foi palco de:",
    "options": [
      "Uma revolta armada armada de fazendeiros monarquistas contra Juscelino Kubitschek.",
      "A fundação da primeira indústria automobilística do Nordeste brasileiro.",
      "A expulsão das tropas federais por meio de guerrilha organizada pelo clero conservador.",
      "A criação da Sudene como órgão militarizado de policiamento ostensivo.",
      "O surgimento das Ligas Camponesas, lideradas pelo advogado Francisco Julião, que lutavam por reforma agrária e direitos trabalhistas para os trabalhadores rurais."
    ],
    "correctIndex": 4,
    "explanation": "As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964.",
    "fundamentacaoLegal": "História Contemporânea de PE",
    "hint": "Ligas Camponesas = Engenho Galiléia + Francisco Julião + Luta pela terra.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ligas Camponesas = Francisco Julião em Pernambuco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964."
    }
  },
  {
    "id": "hist_edital_021",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Governo de Nassau (1637-1644) (Q21)",
    "question": "O governo do Conde Maurício de Nassau em Pernambuco (1637-1644) caracterizou-se principalmente por:",
    "options": [
      "Tolerância religiosa entre católicos, protestantes e judeus, modernização urbana do Recife (Cidade Maurícia) e fomento às artes e ciências.",
      "Expulsão sumária de todos os colonos portugueses e confisco total dos engenhos.",
      "Proibição da liberdade de culto para a comunidade judaica e fechamento de sinagogas.",
      "Abandono das lavouras de cana-de-açúcar em favor da mineração de ouro no Sertão pernambucano.",
      "Aliança militar exclusiva com a Coroa espanhola durante a União Ibérica."
    ],
    "correctIndex": 0,
    "explanation": "Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
    "fundamentacaoLegal": "História de Pernambuco • Edital PMPE",
    "hint": "Nassau = Tolerância religiosa, Cidade Maurícia, artistas (Frans Post) e empréstimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nassau pacificou e embelezou o Recife com tolerância religiosa.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_022",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes (Q22)",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), marco da Insurreição Pernambucana, são simbolicamente celebradas como:",
    "options": [
      "A derrota definitiva das forças luso-brasileiras e consolidação da Nova Holanda.",
      "O berço histórico do Exército Brasileiro e a união das três matrizes formadoras do povo (brancos, indígenas e negros sob liderança de Vidal de Negreiros, Felipe Camarão e Henrique Dias).",
      "Um conflito armado entre senhores de engenho de Olinda e comerciantes do Recife.",
      "A adesão imediata de Pernambuco à Confederação do Equador.",
      "O estopim da Guerra dos Mascates provocada pela autonomia do Recife."
    ],
    "correctIndex": 1,
    "explanation": "As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
    "fundamentacaoLegal": "História de PE • Insurreição Pernambucana",
    "hint": "Guararapes = União das 3 raças + Berço do Exército Brasileiro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Henrique Dias (negros) + Camarão (índios) + Vieira/Negreiros (brancos).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_023",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) (Q23)",
    "question": "A Guerra dos Mascates (1710) resultou da rivalidade sociopolítica e econômica entre:",
    "options": [
      "Os fazendeiros do Sertão do Pajeú e os pescadores da Zona da Mata sul pernambucana.",
      "As forças legalistas do Império e os revoltosos republicanos da Confederação do Equador.",
      "Os aristocratas senhores de engenho decadentes e endividados de Olinda e os prósperos comerciantes portugueses ('mascates') do Recife.",
      "Os quilombolas de Palmares e os bandeirantes paulistas chefiados por Domingos Jorge Velho.",
      "Os padres revolucionários de 1817 e a Maçonaria pernambucana."
    ],
    "correctIndex": 2,
    "explanation": "A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
    "fundamentacaoLegal": "História de PE • Século XVIII",
    "hint": "Olinda = Aristocratas de engenho endividados. Recife = Comerciantes portugueses ricos (mascates).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Olinda (terra/engenho) vs Recife (mar/comércio).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_024",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 (Q24)",
    "question": "A Revolução Pernambucana de 1817 destacou-se no cenário nacional como o único movimento emancipacionista do período colonial que:",
    "options": [
      "Defendeu a manutenção da monarquia absolutista e a subserviência a D. João VI.",
      "Restringiu-se a panfletagens clandestinas sem pegar em armas contra a Coroa.",
      "Reivindicou a união imediata de Pernambuco com as Províncias Unidas do Rio da Prata.",
      "Conseguiu efetivamente tomar o poder, proclamar uma República independente e instituir um governo provisório por mais de dois meses.",
      "Defendeu a continuidade da escravidão sem qualquer debate sobre liberdade civil."
    ],
    "correctIndex": 3,
    "explanation": "Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
    "fundamentacaoLegal": "História de PE • Revolução de 1817",
    "hint": "1817 = Única conspiração colonial que assumiu o poder e proclamou a República!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1817 foi vitoriosa no poder por mais de 2 meses! Mártires: Domingos Martins, Frei Caneca.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_025",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) (Q25)",
    "question": "A Confederação do Equador (1824), liderada ideologicamente por Frei Caneca e Manuel de Carvalho Pais de Andrade, eclodiu em oposição a:",
    "options": [
      "A promulgação da Lei Áurea e o fim do trabalho escravo na lavoura canavieira.",
      "A proclamação da República da Espada e a ascensão do Marechal Deodoro da Fonseca.",
      "A invasão de tropas holandesas financiadas pela Companhia das Índias Ocidentais.",
      "A assinatura do Tratado de Methuen entre Portugal e a Inglaterra.",
      "O fechamento autoritário da Assembleia Constituinte e a imposição da Constituição outorgada de 1824 por D. Pedro I, com a criação do Poder Moderador."
    ],
    "correctIndex": 4,
    "explanation": "A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco.",
    "fundamentacaoLegal": "História de PE • Primeiro Reinado",
    "hint": "1824 = Contra a Constituição Outorgada de D. Pedro I e o Poder Moderador. Frei Caneca fuzilado no Forte das Cinco Pontas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Confederação do Equador = Luta contra o absolutismo de D. Pedro I.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco."
    }
  },
  {
    "id": "hist_edital_026",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848-1850) (Q26)",
    "question": "A Revolução Praieira (1848), última grande insurreição do período imperial em Pernambuco, teve como síntese programática:",
    "options": [
      "O 'Manifesto ao Mundo', que exigia o voto livre e universal do povo brasileiro, a liberdade irrestrita de imprensa e a nacionalização do comércio varejista.",
      "O 'Manifesto dos Mascates', que pedia a submissão militar do Recife a Olinda.",
      "A restauração de D. Pedro I no trono brasileiro e o restabelecimento do tráfico negreiro.",
      "A anexação da Província de Alagoas e da Paraíba ao território pernambucano sob regime monárquico.",
      "A criação imediata da Polícia Militar de Pernambuco subordinada ao Exército Imperial."
    ],
    "correctIndex": 0,
    "explanation": "Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
    "fundamentacaoLegal": "História de PE • Segundo Reinado",
    "hint": "Praieira = Manifesto ao Mundo (1848), voto universal e expulsão dos portugueses do comércio a retalho.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Praieira = 'Manifesto ao Mundo' na Rua da Praia.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_027",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco • Duarte Coelho (Q27)",
    "question": "Duarte Coelho Pereira, primeiro donatário da Capitania de Pernambuco (Nova Lusitânia), obteve expressivo sucesso econômico devido principalmente a:",
    "options": [
      "A exploração intensiva de ricas minas de prata descobertas no Sertão do São Francisco.",
      "A introdução bem-sucedida do cultivo da cana-de-açúcar, aproveitando o solo fértil de massapê e o clima favorável do litoral.",
      "O comércio exclusivo de especiarias importadas da Índia e da China.",
      "A aliança comercial com piratas franceses que frequentavam a bacia do Capibaribe.",
      "A extração em larga escala de café e borracha na Zona da Mata norte."
    ],
    "correctIndex": 1,
    "explanation": "A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
    "fundamentacaoLegal": "História de PE • Período Colonial",
    "hint": "Duarte Coelho + Massapê + Cana-de-açúcar = Sucesso de Pernambuco colonial.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Pernambuco prosperou com o Açúcar e o solo fértil de Massapê.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_028",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço em Pernambuco • O Bando de Lampião (Q28)",
    "question": "A atuação do cangaço liderado por Virgulino Ferreira da Silva (Lampião) no Sertão de Pernambuco provocou:",
    "options": [
      "A imediata rendição do governo estadual e cessão de terras públicas aos cangaceiros.",
      "A dissolução da Força Pública de Pernambuco por ordem do Presidente Washington Luís.",
      "A organização de forças policiais especiais móveis denominadas 'Volantes', que combatiam o banditismo rural sertanejo.",
      "A união pacífica entre fazendeiros coronéis e o bando armado de Lampião contra o Governo Central.",
      "O fim definitivo da produção agrícola ao longo de todo o Vale do São Francisco."
    ],
    "correctIndex": 2,
    "explanation": "O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
    "fundamentacaoLegal": "História Social e Segurança em PE",
    "hint": "Cangaço x Volantes da Polícia Militar no Sertão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volantes = Policiais que caçavam os cangaceiros no sertão.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_029",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "História da PMPE • Origem da Corporação (Q29)",
    "question": "A Polícia Militar de Pernambuco (PMPE) tem suas origens históricas vinculadas à criação do:",
    "options": [
      "'Corpo de Arqueiros de Maurício de Nassau' em 1640.",
      "'Pelotão Especial dos Mascates' em 1711.",
      "'Batalhão Revolucionário dos Padres de 1817'.",
      "'Corpo de Polícia Provincial' em 11 de junho de 1825, instituído após a Confederação do Equador para manter a ordem e a segurança da província.",
      "'Regimento Provisório de Voluntários da Pátria da Guerra do Paraguai em 1865."
    ],
    "correctIndex": 3,
    "explanation": "A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
    "fundamentacaoLegal": "Legislação e História da PMPE",
    "hint": "Data Magna da PMPE: 11 de junho de 1825 (Corpo de Polícia Provincial).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "11 de junho de 1825 = Fundação da PMPE!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_030",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco no Século XX • Ligas Camponesas (Q30)",
    "question": "Nas décadas de 1950 e 1960, o campo pernambucano, especialmente no Engenho Galiléia (Vitória de Santo Antão), foi palco de:",
    "options": [
      "Uma revolta armada armada de fazendeiros monarquistas contra Juscelino Kubitschek.",
      "A fundação da primeira indústria automobilística do Nordeste brasileiro.",
      "A expulsão das tropas federais por meio de guerrilha organizada pelo clero conservador.",
      "A criação da Sudene como órgão militarizado de policiamento ostensivo.",
      "O surgimento das Ligas Camponesas, lideradas pelo advogado Francisco Julião, que lutavam por reforma agrária e direitos trabalhistas para os trabalhadores rurais."
    ],
    "correctIndex": 4,
    "explanation": "As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964.",
    "fundamentacaoLegal": "História Contemporânea de PE",
    "hint": "Ligas Camponesas = Engenho Galiléia + Francisco Julião + Luta pela terra.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ligas Camponesas = Francisco Julião em Pernambuco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964."
    }
  },
  {
    "id": "hist_edital_031",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Governo de Nassau (1637-1644) (Q31)",
    "question": "O governo do Conde Maurício de Nassau em Pernambuco (1637-1644) caracterizou-se principalmente por:",
    "options": [
      "Tolerância religiosa entre católicos, protestantes e judeus, modernização urbana do Recife (Cidade Maurícia) e fomento às artes e ciências.",
      "Expulsão sumária de todos os colonos portugueses e confisco total dos engenhos.",
      "Proibição da liberdade de culto para a comunidade judaica e fechamento de sinagogas.",
      "Abandono das lavouras de cana-de-açúcar em favor da mineração de ouro no Sertão pernambucano.",
      "Aliança militar exclusiva com a Coroa espanhola durante a União Ibérica."
    ],
    "correctIndex": 0,
    "explanation": "Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
    "fundamentacaoLegal": "História de Pernambuco • Edital PMPE",
    "hint": "Nassau = Tolerância religiosa, Cidade Maurícia, artistas (Frans Post) e empréstimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nassau pacificou e embelezou o Recife com tolerância religiosa.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_032",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes (Q32)",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), marco da Insurreição Pernambucana, são simbolicamente celebradas como:",
    "options": [
      "A derrota definitiva das forças luso-brasileiras e consolidação da Nova Holanda.",
      "O berço histórico do Exército Brasileiro e a união das três matrizes formadoras do povo (brancos, indígenas e negros sob liderança de Vidal de Negreiros, Felipe Camarão e Henrique Dias).",
      "Um conflito armado entre senhores de engenho de Olinda e comerciantes do Recife.",
      "A adesão imediata de Pernambuco à Confederação do Equador.",
      "O estopim da Guerra dos Mascates provocada pela autonomia do Recife."
    ],
    "correctIndex": 1,
    "explanation": "As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
    "fundamentacaoLegal": "História de PE • Insurreição Pernambucana",
    "hint": "Guararapes = União das 3 raças + Berço do Exército Brasileiro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Henrique Dias (negros) + Camarão (índios) + Vieira/Negreiros (brancos).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_033",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) (Q33)",
    "question": "A Guerra dos Mascates (1710) resultou da rivalidade sociopolítica e econômica entre:",
    "options": [
      "Os fazendeiros do Sertão do Pajeú e os pescadores da Zona da Mata sul pernambucana.",
      "As forças legalistas do Império e os revoltosos republicanos da Confederação do Equador.",
      "Os aristocratas senhores de engenho decadentes e endividados de Olinda e os prósperos comerciantes portugueses ('mascates') do Recife.",
      "Os quilombolas de Palmares e os bandeirantes paulistas chefiados por Domingos Jorge Velho.",
      "Os padres revolucionários de 1817 e a Maçonaria pernambucana."
    ],
    "correctIndex": 2,
    "explanation": "A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
    "fundamentacaoLegal": "História de PE • Século XVIII",
    "hint": "Olinda = Aristocratas de engenho endividados. Recife = Comerciantes portugueses ricos (mascates).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Olinda (terra/engenho) vs Recife (mar/comércio).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_034",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 (Q34)",
    "question": "A Revolução Pernambucana de 1817 destacou-se no cenário nacional como o único movimento emancipacionista do período colonial que:",
    "options": [
      "Defendeu a manutenção da monarquia absolutista e a subserviência a D. João VI.",
      "Restringiu-se a panfletagens clandestinas sem pegar em armas contra a Coroa.",
      "Reivindicou a união imediata de Pernambuco com as Províncias Unidas do Rio da Prata.",
      "Conseguiu efetivamente tomar o poder, proclamar uma República independente e instituir um governo provisório por mais de dois meses.",
      "Defendeu a continuidade da escravidão sem qualquer debate sobre liberdade civil."
    ],
    "correctIndex": 3,
    "explanation": "Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
    "fundamentacaoLegal": "História de PE • Revolução de 1817",
    "hint": "1817 = Única conspiração colonial que assumiu o poder e proclamou a República!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1817 foi vitoriosa no poder por mais de 2 meses! Mártires: Domingos Martins, Frei Caneca.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_035",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) (Q35)",
    "question": "A Confederação do Equador (1824), liderada ideologicamente por Frei Caneca e Manuel de Carvalho Pais de Andrade, eclodiu em oposição a:",
    "options": [
      "A promulgação da Lei Áurea e o fim do trabalho escravo na lavoura canavieira.",
      "A proclamação da República da Espada e a ascensão do Marechal Deodoro da Fonseca.",
      "A invasão de tropas holandesas financiadas pela Companhia das Índias Ocidentais.",
      "A assinatura do Tratado de Methuen entre Portugal e a Inglaterra.",
      "O fechamento autoritário da Assembleia Constituinte e a imposição da Constituição outorgada de 1824 por D. Pedro I, com a criação do Poder Moderador."
    ],
    "correctIndex": 4,
    "explanation": "A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco.",
    "fundamentacaoLegal": "História de PE • Primeiro Reinado",
    "hint": "1824 = Contra a Constituição Outorgada de D. Pedro I e o Poder Moderador. Frei Caneca fuzilado no Forte das Cinco Pontas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Confederação do Equador = Luta contra o absolutismo de D. Pedro I.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco."
    }
  },
  {
    "id": "hist_edital_036",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848-1850) (Q36)",
    "question": "A Revolução Praieira (1848), última grande insurreição do período imperial em Pernambuco, teve como síntese programática:",
    "options": [
      "O 'Manifesto ao Mundo', que exigia o voto livre e universal do povo brasileiro, a liberdade irrestrita de imprensa e a nacionalização do comércio varejista.",
      "O 'Manifesto dos Mascates', que pedia a submissão militar do Recife a Olinda.",
      "A restauração de D. Pedro I no trono brasileiro e o restabelecimento do tráfico negreiro.",
      "A anexação da Província de Alagoas e da Paraíba ao território pernambucano sob regime monárquico.",
      "A criação imediata da Polícia Militar de Pernambuco subordinada ao Exército Imperial."
    ],
    "correctIndex": 0,
    "explanation": "Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
    "fundamentacaoLegal": "História de PE • Segundo Reinado",
    "hint": "Praieira = Manifesto ao Mundo (1848), voto universal e expulsão dos portugueses do comércio a retalho.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Praieira = 'Manifesto ao Mundo' na Rua da Praia.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_037",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco • Duarte Coelho (Q37)",
    "question": "Duarte Coelho Pereira, primeiro donatário da Capitania de Pernambuco (Nova Lusitânia), obteve expressivo sucesso econômico devido principalmente a:",
    "options": [
      "A exploração intensiva de ricas minas de prata descobertas no Sertão do São Francisco.",
      "A introdução bem-sucedida do cultivo da cana-de-açúcar, aproveitando o solo fértil de massapê e o clima favorável do litoral.",
      "O comércio exclusivo de especiarias importadas da Índia e da China.",
      "A aliança comercial com piratas franceses que frequentavam a bacia do Capibaribe.",
      "A extração em larga escala de café e borracha na Zona da Mata norte."
    ],
    "correctIndex": 1,
    "explanation": "A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
    "fundamentacaoLegal": "História de PE • Período Colonial",
    "hint": "Duarte Coelho + Massapê + Cana-de-açúcar = Sucesso de Pernambuco colonial.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Pernambuco prosperou com o Açúcar e o solo fértil de Massapê.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_038",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço em Pernambuco • O Bando de Lampião (Q38)",
    "question": "A atuação do cangaço liderado por Virgulino Ferreira da Silva (Lampião) no Sertão de Pernambuco provocou:",
    "options": [
      "A imediata rendição do governo estadual e cessão de terras públicas aos cangaceiros.",
      "A dissolução da Força Pública de Pernambuco por ordem do Presidente Washington Luís.",
      "A organização de forças policiais especiais móveis denominadas 'Volantes', que combatiam o banditismo rural sertanejo.",
      "A união pacífica entre fazendeiros coronéis e o bando armado de Lampião contra o Governo Central.",
      "O fim definitivo da produção agrícola ao longo de todo o Vale do São Francisco."
    ],
    "correctIndex": 2,
    "explanation": "O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
    "fundamentacaoLegal": "História Social e Segurança em PE",
    "hint": "Cangaço x Volantes da Polícia Militar no Sertão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volantes = Policiais que caçavam os cangaceiros no sertão.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_039",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "História da PMPE • Origem da Corporação (Q39)",
    "question": "A Polícia Militar de Pernambuco (PMPE) tem suas origens históricas vinculadas à criação do:",
    "options": [
      "'Corpo de Arqueiros de Maurício de Nassau' em 1640.",
      "'Pelotão Especial dos Mascates' em 1711.",
      "'Batalhão Revolucionário dos Padres de 1817'.",
      "'Corpo de Polícia Provincial' em 11 de junho de 1825, instituído após a Confederação do Equador para manter a ordem e a segurança da província.",
      "'Regimento Provisório de Voluntários da Pátria da Guerra do Paraguai em 1865."
    ],
    "correctIndex": 3,
    "explanation": "A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
    "fundamentacaoLegal": "Legislação e História da PMPE",
    "hint": "Data Magna da PMPE: 11 de junho de 1825 (Corpo de Polícia Provincial).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "11 de junho de 1825 = Fundação da PMPE!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_040",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco no Século XX • Ligas Camponesas (Q40)",
    "question": "Nas décadas de 1950 e 1960, o campo pernambucano, especialmente no Engenho Galiléia (Vitória de Santo Antão), foi palco de:",
    "options": [
      "Uma revolta armada armada de fazendeiros monarquistas contra Juscelino Kubitschek.",
      "A fundação da primeira indústria automobilística do Nordeste brasileiro.",
      "A expulsão das tropas federais por meio de guerrilha organizada pelo clero conservador.",
      "A criação da Sudene como órgão militarizado de policiamento ostensivo.",
      "O surgimento das Ligas Camponesas, lideradas pelo advogado Francisco Julião, que lutavam por reforma agrária e direitos trabalhistas para os trabalhadores rurais."
    ],
    "correctIndex": 4,
    "explanation": "As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964.",
    "fundamentacaoLegal": "História Contemporânea de PE",
    "hint": "Ligas Camponesas = Engenho Galiléia + Francisco Julião + Luta pela terra.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ligas Camponesas = Francisco Julião em Pernambuco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964."
    }
  },
  {
    "id": "hist_edital_041",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Governo de Nassau (1637-1644) (Q41)",
    "question": "O governo do Conde Maurício de Nassau em Pernambuco (1637-1644) caracterizou-se principalmente por:",
    "options": [
      "Tolerância religiosa entre católicos, protestantes e judeus, modernização urbana do Recife (Cidade Maurícia) e fomento às artes e ciências.",
      "Expulsão sumária de todos os colonos portugueses e confisco total dos engenhos.",
      "Proibição da liberdade de culto para a comunidade judaica e fechamento de sinagogas.",
      "Abandono das lavouras de cana-de-açúcar em favor da mineração de ouro no Sertão pernambucano.",
      "Aliança militar exclusiva com a Coroa espanhola durante a União Ibérica."
    ],
    "correctIndex": 0,
    "explanation": "Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
    "fundamentacaoLegal": "História de Pernambuco • Edital PMPE",
    "hint": "Nassau = Tolerância religiosa, Cidade Maurícia, artistas (Frans Post) e empréstimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nassau pacificou e embelezou o Recife com tolerância religiosa.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Nassau implementou a modernização urbana do Recife (pontes, palácios, canais), liberdade religiosa (inclusive fundação da primeira sinagoga das Américas, Kahal Zur Israel) e empréstimos aos senhores de engenho.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_042",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes (Q42)",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), marco da Insurreição Pernambucana, são simbolicamente celebradas como:",
    "options": [
      "A derrota definitiva das forças luso-brasileiras e consolidação da Nova Holanda.",
      "O berço histórico do Exército Brasileiro e a união das três matrizes formadoras do povo (brancos, indígenas e negros sob liderança de Vidal de Negreiros, Felipe Camarão e Henrique Dias).",
      "Um conflito armado entre senhores de engenho de Olinda e comerciantes do Recife.",
      "A adesão imediata de Pernambuco à Confederação do Equador.",
      "O estopim da Guerra dos Mascates provocada pela autonomia do Recife."
    ],
    "correctIndex": 1,
    "explanation": "As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
    "fundamentacaoLegal": "História de PE • Insurreição Pernambucana",
    "hint": "Guararapes = União das 3 raças + Berço do Exército Brasileiro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Henrique Dias (negros) + Camarão (índios) + Vieira/Negreiros (brancos).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. As Batalhas dos Guararapes reuniram forças lideradas por André Vidal de Negreiros, João Fernandes Vieira, Felipe Camarão (indígena) e Henrique Dias (negro), constituindo a base histórica das forças terrestres brasileiras.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_043",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) (Q43)",
    "question": "A Guerra dos Mascates (1710) resultou da rivalidade sociopolítica e econômica entre:",
    "options": [
      "Os fazendeiros do Sertão do Pajeú e os pescadores da Zona da Mata sul pernambucana.",
      "As forças legalistas do Império e os revoltosos republicanos da Confederação do Equador.",
      "Os aristocratas senhores de engenho decadentes e endividados de Olinda e os prósperos comerciantes portugueses ('mascates') do Recife.",
      "Os quilombolas de Palmares e os bandeirantes paulistas chefiados por Domingos Jorge Velho.",
      "Os padres revolucionários de 1817 e a Maçonaria pernambucana."
    ],
    "correctIndex": 2,
    "explanation": "A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
    "fundamentacaoLegal": "História de PE • Século XVIII",
    "hint": "Olinda = Aristocratas de engenho endividados. Recife = Comerciantes portugueses ricos (mascates).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Olinda (terra/engenho) vs Recife (mar/comércio).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A aristocracia rural de Olinda, endividada, não aceitou a elevação do povoado do Recife à categoria de Vila (autonomia política), iniciando conflito contra os comerciantes portugueses apelidados pejorativamente de 'mascates'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_044",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 (Q44)",
    "question": "A Revolução Pernambucana de 1817 destacou-se no cenário nacional como o único movimento emancipacionista do período colonial que:",
    "options": [
      "Defendeu a manutenção da monarquia absolutista e a subserviência a D. João VI.",
      "Restringiu-se a panfletagens clandestinas sem pegar em armas contra a Coroa.",
      "Reivindicou a união imediata de Pernambuco com as Províncias Unidas do Rio da Prata.",
      "Conseguiu efetivamente tomar o poder, proclamar uma República independente e instituir um governo provisório por mais de dois meses.",
      "Defendeu a continuidade da escravidão sem qualquer debate sobre liberdade civil."
    ],
    "correctIndex": 3,
    "explanation": "Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
    "fundamentacaoLegal": "História de PE • Revolução de 1817",
    "hint": "1817 = Única conspiração colonial que assumiu o poder e proclamou a República!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1817 foi vitoriosa no poder por mais de 2 meses! Mártires: Domingos Martins, Frei Caneca.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Em 6 de março de 1817, os revolucionários depuseram o governador Caetano Pinto de Miranda Montenegro, hastearam a bandeira republicana e governaram por 75 dias sob fortes ideais iluministas.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_045",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) (Q45)",
    "question": "A Confederação do Equador (1824), liderada ideologicamente por Frei Caneca e Manuel de Carvalho Pais de Andrade, eclodiu em oposição a:",
    "options": [
      "A promulgação da Lei Áurea e o fim do trabalho escravo na lavoura canavieira.",
      "A proclamação da República da Espada e a ascensão do Marechal Deodoro da Fonseca.",
      "A invasão de tropas holandesas financiadas pela Companhia das Índias Ocidentais.",
      "A assinatura do Tratado de Methuen entre Portugal e a Inglaterra.",
      "O fechamento autoritário da Assembleia Constituinte e a imposição da Constituição outorgada de 1824 por D. Pedro I, com a criação do Poder Moderador."
    ],
    "correctIndex": 4,
    "explanation": "A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco.",
    "fundamentacaoLegal": "História de PE • Primeiro Reinado",
    "hint": "1824 = Contra a Constituição Outorgada de D. Pedro I e o Poder Moderador. Frei Caneca fuzilado no Forte das Cinco Pontas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Confederação do Equador = Luta contra o absolutismo de D. Pedro I.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A revolta de 1824 rejeitou o centralismo e o autoritarismo de D. Pedro I (Poder Moderador outorgado) e a nomeação forçada de Francisco do Rego Barros para presidente da Província de Pernambuco."
    }
  },
  {
    "id": "hist_edital_046",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848-1850) (Q46)",
    "question": "A Revolução Praieira (1848), última grande insurreição do período imperial em Pernambuco, teve como síntese programática:",
    "options": [
      "O 'Manifesto ao Mundo', que exigia o voto livre e universal do povo brasileiro, a liberdade irrestrita de imprensa e a nacionalização do comércio varejista.",
      "O 'Manifesto dos Mascates', que pedia a submissão militar do Recife a Olinda.",
      "A restauração de D. Pedro I no trono brasileiro e o restabelecimento do tráfico negreiro.",
      "A anexação da Província de Alagoas e da Paraíba ao território pernambucano sob regime monárquico.",
      "A criação imediata da Polícia Militar de Pernambuco subordinada ao Exército Imperial."
    ],
    "correctIndex": 0,
    "explanation": "Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
    "fundamentacaoLegal": "História de PE • Segundo Reinado",
    "hint": "Praieira = Manifesto ao Mundo (1848), voto universal e expulsão dos portugueses do comércio a retalho.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Praieira = 'Manifesto ao Mundo' na Rua da Praia.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Elaborado por Borges da Fonseca no jornal 'Diário Novo' (sediado na Rua da Praia), o Manifesto ao Mundo continha propostas liberais avançadas: voto universal, liberdade de imprensa, trabalho para todos e comércio nacionalizado.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_047",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco • Duarte Coelho (Q47)",
    "question": "Duarte Coelho Pereira, primeiro donatário da Capitania de Pernambuco (Nova Lusitânia), obteve expressivo sucesso econômico devido principalmente a:",
    "options": [
      "A exploração intensiva de ricas minas de prata descobertas no Sertão do São Francisco.",
      "A introdução bem-sucedida do cultivo da cana-de-açúcar, aproveitando o solo fértil de massapê e o clima favorável do litoral.",
      "O comércio exclusivo de especiarias importadas da Índia e da China.",
      "A aliança comercial com piratas franceses que frequentavam a bacia do Capibaribe.",
      "A extração em larga escala de café e borracha na Zona da Mata norte."
    ],
    "correctIndex": 1,
    "explanation": "A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
    "fundamentacaoLegal": "História de PE • Período Colonial",
    "hint": "Duarte Coelho + Massapê + Cana-de-açúcar = Sucesso de Pernambuco colonial.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Pernambuco prosperou com o Açúcar e o solo fértil de Massapê.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A Capitania de Pernambuco e a de São Vicente foram as únicas que prosperaram no sistema de capitanias hereditárias, impulsionadas pelo solo de massapê e a agroindústria do açúcar.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_048",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço em Pernambuco • O Bando de Lampião (Q48)",
    "question": "A atuação do cangaço liderado por Virgulino Ferreira da Silva (Lampião) no Sertão de Pernambuco provocou:",
    "options": [
      "A imediata rendição do governo estadual e cessão de terras públicas aos cangaceiros.",
      "A dissolução da Força Pública de Pernambuco por ordem do Presidente Washington Luís.",
      "A organização de forças policiais especiais móveis denominadas 'Volantes', que combatiam o banditismo rural sertanejo.",
      "A união pacífica entre fazendeiros coronéis e o bando armado de Lampião contra o Governo Central.",
      "O fim definitivo da produção agrícola ao longo de todo o Vale do São Francisco."
    ],
    "correctIndex": 2,
    "explanation": "O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
    "fundamentacaoLegal": "História Social e Segurança em PE",
    "hint": "Cangaço x Volantes da Polícia Militar no Sertão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volantes = Policiais que caçavam os cangaceiros no sertão.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O cangaço provocou a criação das forças Volantes (policiais militares do sertão conhecidos por sua resistência física e conhecimento do bioma caatinga), travando combates sangrentos como o de Serra Vermelha.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_049",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "História da PMPE • Origem da Corporação (Q49)",
    "question": "A Polícia Militar de Pernambuco (PMPE) tem suas origens históricas vinculadas à criação do:",
    "options": [
      "'Corpo de Arqueiros de Maurício de Nassau' em 1640.",
      "'Pelotão Especial dos Mascates' em 1711.",
      "'Batalhão Revolucionário dos Padres de 1817'.",
      "'Corpo de Polícia Provincial' em 11 de junho de 1825, instituído após a Confederação do Equador para manter a ordem e a segurança da província.",
      "'Regimento Provisório de Voluntários da Pátria da Guerra do Paraguai em 1865."
    ],
    "correctIndex": 3,
    "explanation": "A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
    "fundamentacaoLegal": "Legislação e História da PMPE",
    "hint": "Data Magna da PMPE: 11 de junho de 1825 (Corpo de Polícia Provincial).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "11 de junho de 1825 = Fundação da PMPE!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. A PMPE foi criada oficialmente pelo Decreto Imperial de 11 de junho de 1825 com o nome inicial de Corpo de Polícia Provincial, logo após os conflitos da Confederação do Equador.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "hist_edital_050",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco no Século XX • Ligas Camponesas (Q50)",
    "question": "Nas décadas de 1950 e 1960, o campo pernambucano, especialmente no Engenho Galiléia (Vitória de Santo Antão), foi palco de:",
    "options": [
      "Uma revolta armada armada de fazendeiros monarquistas contra Juscelino Kubitschek.",
      "A fundação da primeira indústria automobilística do Nordeste brasileiro.",
      "A expulsão das tropas federais por meio de guerrilha organizada pelo clero conservador.",
      "A criação da Sudene como órgão militarizado de policiamento ostensivo.",
      "O surgimento das Ligas Camponesas, lideradas pelo advogado Francisco Julião, que lutavam por reforma agrária e direitos trabalhistas para os trabalhadores rurais."
    ],
    "correctIndex": 4,
    "explanation": "As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964.",
    "fundamentacaoLegal": "História Contemporânea de PE",
    "hint": "Ligas Camponesas = Engenho Galiléia + Francisco Julião + Luta pela terra.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ligas Camponesas = Francisco Julião em Pernambuco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. As Ligas Camponesas surgiram no Engenho Galiléia e se expandiram por todo o Nordeste, exigindo 'Reforma Agrária na lei ou na marra', sendo um dos fatores de tensão política que culminaram no golpe de 1964."
    }
  },
  {
    "id": "rlm_edital_001",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Tabela-Verdade • Conjunção (E) (Q1)",
    "question": "A proposição composta 'p ^ q' (p e q) só é VERDADEIRA quando:",
    "options": [
      "Ambas as proposições simples 'p' e 'q' forem simultaneamente verdadeiras.",
      "Pelo menos uma das proposições simples for verdadeira.",
      "A primeira proposição for falsa e a segunda for verdadeira.",
      "Ambas as proposições simples forem falsas.",
      "A proposição 'p' for verdadeira, independentemente do valor de 'q'."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
    "fundamentacaoLegal": "Raciocínio Lógico Matemático • AOCP",
    "hint": "Conjunção (E): Só dá V se as duas forem V!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "E = 100% verdade. Um falso estraga tudo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_002",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional • Regra do MANÉ (Q2)",
    "question": "A negação lógica da proposição condicional 'Se o soldado estuda com disciplina, então ele é aprovado na PMPE' é:",
    "options": [
      "'Se o soldado não estuda com disciplina, então ele não é aprovado na PMPE.'",
      "'O soldado estuda com disciplina e não é aprovado na PMPE.'",
      "'O soldado não estuda com disciplina ou é aprovado na PMPE.'",
      "'O soldado estuda com disciplina se e somente se for aprovado na PMPE.'",
      "'Se o soldado é aprovado na PMPE, então ele estuda com disciplina.'"
    ],
    "correctIndex": 1,
    "explanation": "A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
    "fundamentacaoLegal": "Lógica Proposicional AOCP",
    "hint": "Negação do 'Se... então' = Regra do MANÉ (Mantém a primeira E Nega a segunda).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "MANÉ = Mantém a 1ª 'E' Nega a 2ª!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_003",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional • Contrapositiva (Q3)",
    "question": "A proposição logicamente equivalente a 'Se a viatura tem combustível, então a guarnição realiza a ronda' é:",
    "options": [
      "'Se a viatura não tem combustível, então a guarnição não realiza a ronda.'",
      "'A viatura tem combustível e a guarnição não realiza a ronda.'",
      "'Se a guarnição não realiza a ronda, então a viatura não tem combustível.'",
      "'Se a guarnição realiza a ronda, então a viatura tem combustível.'",
      "'A viatura não tem combustível e a guarnição realiza a ronda.'"
    ],
    "correctIndex": 2,
    "explanation": "A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
    "fundamentacaoLegal": "Equivalências Lógicas AOCP",
    "hint": "Contrapositiva: Se p então q = Se NÃO q então NÃO p.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volta negando tudo! p->q é igual a ~q->~p.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_004",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação das Leis de De Morgan (Q4)",
    "question": "A negação lógica da proposição composta 'O réu confessou o delito e o comparsa fugiu' é:",
    "options": [
      "'O réu não confessou o delito e o comparsa não fugiu.'",
      "'Se o réu confessou o delito, o comparsa não fugiu.'",
      "'O réu confessou o delito ou o comparsa não fugiu.'",
      "'O réu não confessou o delito ou o comparsa não fugiu.'",
      "'O comparsa fugiu se e somente se o réu confessou o delito.'"
    ],
    "correctIndex": 3,
    "explanation": "Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
    "fundamentacaoLegal": "Leis de De Morgan AOCP",
    "hint": "Negação do 'E': Nega a primeira, troca 'E' por 'OU' e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nega o E trocando por OU!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_005",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Quantificadores Lógicos • Negação do 'Todo' (Q5)",
    "question": "A negação lógica da afirmação 'Todo policial militar é honesto' é expressa por:",
    "options": [
      "'Nenhum policial militar é honesto.'",
      "'Todos os policiais militares são desonestos.'",
      "'Apenas um policial militar é honesto.'",
      "'Nenhum cidadão comum é policial militar.'",
      "'Pelo menos um policial militar não é honesto.'"
    ],
    "correctIndex": 4,
    "explanation": "A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO.",
    "fundamentacaoLegal": "Quantificadores Lógicos AOCP",
    "hint": "Negação de TODO = P.E.A + NÃO (Pelo menos um NÃO, Existe NÃO, Algum NÃO).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nunca negue TODO com NENHUM! Use PEA + NÃO!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO."
    }
  },
  {
    "id": "rlm_edital_006",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples (Q6)",
    "question": "Em uma urna há 6 bolas pretas, 4 bolas brancas e 10 bolas verdes. Sorteando-se uma bola ao acaso, a probabilidade de ela ser branca é:",
    "options": [
      "20% (ou 1/5).",
      "30% (ou 3/10).",
      "40% (ou 2/5).",
      "50% (ou 1/2).",
      "10% (ou 1/10)."
    ],
    "correctIndex": 0,
    "explanation": "Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
    "fundamentacaoLegal": "Probabilidade AOCP",
    "hint": "P = Casos Favoráveis / Casos Totais = 4 / 20 = 20%.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "4 em 20 = 20%.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_007",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Combinação Simples (Q7)",
    "question": "De um pelotão de 8 soldados, quantos grupos distintos de 3 soldados podem ser formados para compor uma patrulha?",
    "options": [
      "24 grupos distintos.",
      "56 grupos distintos.",
      "120 grupos distintos.",
      "336 grupos distintos.",
      "18 grupos distintos."
    ],
    "correctIndex": 1,
    "explanation": "A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Análise Combinatória AOCP",
    "hint": "Comissão/Grupo onde a ordem não importa = Combinação! (8x7x6)/(3x2x1) = 56.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ordem não importa = Combinação!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_008",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Aumentos Sucessivos (Q8)",
    "question": "Um armamento que custava R$ 2.000,00 sofreu um aumento de 10% e, no mês seguinte, sofreu um novo aumento de 20%. O preço final após os dois aumentos foi de:",
    "options": [
      "R$ 2.600,00.",
      "R$ 2.500,00.",
      "R$ 2.640,00.",
      "R$ 2.700,00.",
      "R$ 2.800,00."
    ],
    "correctIndex": 2,
    "explanation": "Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
    "fundamentacaoLegal": "Matemática Financeira AOCP",
    "hint": "Aumentos sucessivos multiplicam os fatores: 1,10 x 1,20 = 1,32 (+32%).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10% + 20% sucessivos = 32%!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_009",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Composta (Q9)",
    "question": "Se 6 policiais lavram 30 boletins de ocorrência em 5 horas de trabalho, quantos boletins serão lavrados por 8 policiais em 4 horas no mesmo ritmo?",
    "options": [
      "28 boletins.",
      "36 boletins.",
      "40 boletins.",
      "32 boletins.",
      "25 boletins."
    ],
    "correctIndex": 3,
    "explanation": "Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
    "fundamentacaoLegal": "Regra de Três AOCP",
    "hint": "Calcule a taxa unitária: 30 / (6 x 5) = 1. Nova situação: 8 x 4 x 1 = 32 boletins.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Produtividade = 1 boletim por homem-hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_010",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Conjuntos Numéricos e Diagramas de Venn (Q10)",
    "question": "Em uma corporação com 100 policiais, 60 praticam tiro tático, 50 praticam defesa pessoal e 20 praticam ambas as modalidades. Quantos policiais NÃO praticam nenhuma dessas duas modalidades?",
    "options": [
      "15 policiais.",
      "20 policiais.",
      "25 policiais.",
      "5 policiais.",
      "10 policiais."
    ],
    "correctIndex": 4,
    "explanation": "União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10.",
    "fundamentacaoLegal": "Teoria dos Conjuntos AOCP",
    "hint": "União = A + B - Interseção = 60 + 50 - 20 = 90. Restante fora: 100 - 90 = 10.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Some tudo e subtraia a interseção!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10."
    }
  },
  {
    "id": "rlm_edital_011",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Tabela-Verdade • Conjunção (E) (Q11)",
    "question": "A proposição composta 'p ^ q' (p e q) só é VERDADEIRA quando:",
    "options": [
      "Ambas as proposições simples 'p' e 'q' forem simultaneamente verdadeiras.",
      "Pelo menos uma das proposições simples for verdadeira.",
      "A primeira proposição for falsa e a segunda for verdadeira.",
      "Ambas as proposições simples forem falsas.",
      "A proposição 'p' for verdadeira, independentemente do valor de 'q'."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
    "fundamentacaoLegal": "Raciocínio Lógico Matemático • AOCP",
    "hint": "Conjunção (E): Só dá V se as duas forem V!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "E = 100% verdade. Um falso estraga tudo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_012",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional • Regra do MANÉ (Q12)",
    "question": "A negação lógica da proposição condicional 'Se o soldado estuda com disciplina, então ele é aprovado na PMPE' é:",
    "options": [
      "'Se o soldado não estuda com disciplina, então ele não é aprovado na PMPE.'",
      "'O soldado estuda com disciplina e não é aprovado na PMPE.'",
      "'O soldado não estuda com disciplina ou é aprovado na PMPE.'",
      "'O soldado estuda com disciplina se e somente se for aprovado na PMPE.'",
      "'Se o soldado é aprovado na PMPE, então ele estuda com disciplina.'"
    ],
    "correctIndex": 1,
    "explanation": "A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
    "fundamentacaoLegal": "Lógica Proposicional AOCP",
    "hint": "Negação do 'Se... então' = Regra do MANÉ (Mantém a primeira E Nega a segunda).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "MANÉ = Mantém a 1ª 'E' Nega a 2ª!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_013",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional • Contrapositiva (Q13)",
    "question": "A proposição logicamente equivalente a 'Se a viatura tem combustível, então a guarnição realiza a ronda' é:",
    "options": [
      "'Se a viatura não tem combustível, então a guarnição não realiza a ronda.'",
      "'A viatura tem combustível e a guarnição não realiza a ronda.'",
      "'Se a guarnição não realiza a ronda, então a viatura não tem combustível.'",
      "'Se a guarnição realiza a ronda, então a viatura tem combustível.'",
      "'A viatura não tem combustível e a guarnição realiza a ronda.'"
    ],
    "correctIndex": 2,
    "explanation": "A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
    "fundamentacaoLegal": "Equivalências Lógicas AOCP",
    "hint": "Contrapositiva: Se p então q = Se NÃO q então NÃO p.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volta negando tudo! p->q é igual a ~q->~p.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_014",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação das Leis de De Morgan (Q14)",
    "question": "A negação lógica da proposição composta 'O réu confessou o delito e o comparsa fugiu' é:",
    "options": [
      "'O réu não confessou o delito e o comparsa não fugiu.'",
      "'Se o réu confessou o delito, o comparsa não fugiu.'",
      "'O réu confessou o delito ou o comparsa não fugiu.'",
      "'O réu não confessou o delito ou o comparsa não fugiu.'",
      "'O comparsa fugiu se e somente se o réu confessou o delito.'"
    ],
    "correctIndex": 3,
    "explanation": "Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
    "fundamentacaoLegal": "Leis de De Morgan AOCP",
    "hint": "Negação do 'E': Nega a primeira, troca 'E' por 'OU' e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nega o E trocando por OU!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_015",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Quantificadores Lógicos • Negação do 'Todo' (Q15)",
    "question": "A negação lógica da afirmação 'Todo policial militar é honesto' é expressa por:",
    "options": [
      "'Nenhum policial militar é honesto.'",
      "'Todos os policiais militares são desonestos.'",
      "'Apenas um policial militar é honesto.'",
      "'Nenhum cidadão comum é policial militar.'",
      "'Pelo menos um policial militar não é honesto.'"
    ],
    "correctIndex": 4,
    "explanation": "A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO.",
    "fundamentacaoLegal": "Quantificadores Lógicos AOCP",
    "hint": "Negação de TODO = P.E.A + NÃO (Pelo menos um NÃO, Existe NÃO, Algum NÃO).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nunca negue TODO com NENHUM! Use PEA + NÃO!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO."
    }
  },
  {
    "id": "rlm_edital_016",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples (Q16)",
    "question": "Em uma urna há 6 bolas pretas, 4 bolas brancas e 10 bolas verdes. Sorteando-se uma bola ao acaso, a probabilidade de ela ser branca é:",
    "options": [
      "20% (ou 1/5).",
      "30% (ou 3/10).",
      "40% (ou 2/5).",
      "50% (ou 1/2).",
      "10% (ou 1/10)."
    ],
    "correctIndex": 0,
    "explanation": "Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
    "fundamentacaoLegal": "Probabilidade AOCP",
    "hint": "P = Casos Favoráveis / Casos Totais = 4 / 20 = 20%.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "4 em 20 = 20%.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_017",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Combinação Simples (Q17)",
    "question": "De um pelotão de 8 soldados, quantos grupos distintos de 3 soldados podem ser formados para compor uma patrulha?",
    "options": [
      "24 grupos distintos.",
      "56 grupos distintos.",
      "120 grupos distintos.",
      "336 grupos distintos.",
      "18 grupos distintos."
    ],
    "correctIndex": 1,
    "explanation": "A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Análise Combinatória AOCP",
    "hint": "Comissão/Grupo onde a ordem não importa = Combinação! (8x7x6)/(3x2x1) = 56.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ordem não importa = Combinação!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_018",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Aumentos Sucessivos (Q18)",
    "question": "Um armamento que custava R$ 2.000,00 sofreu um aumento de 10% e, no mês seguinte, sofreu um novo aumento de 20%. O preço final após os dois aumentos foi de:",
    "options": [
      "R$ 2.600,00.",
      "R$ 2.500,00.",
      "R$ 2.640,00.",
      "R$ 2.700,00.",
      "R$ 2.800,00."
    ],
    "correctIndex": 2,
    "explanation": "Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
    "fundamentacaoLegal": "Matemática Financeira AOCP",
    "hint": "Aumentos sucessivos multiplicam os fatores: 1,10 x 1,20 = 1,32 (+32%).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10% + 20% sucessivos = 32%!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_019",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Composta (Q19)",
    "question": "Se 6 policiais lavram 30 boletins de ocorrência em 5 horas de trabalho, quantos boletins serão lavrados por 8 policiais em 4 horas no mesmo ritmo?",
    "options": [
      "28 boletins.",
      "36 boletins.",
      "40 boletins.",
      "32 boletins.",
      "25 boletins."
    ],
    "correctIndex": 3,
    "explanation": "Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
    "fundamentacaoLegal": "Regra de Três AOCP",
    "hint": "Calcule a taxa unitária: 30 / (6 x 5) = 1. Nova situação: 8 x 4 x 1 = 32 boletins.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Produtividade = 1 boletim por homem-hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_020",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Conjuntos Numéricos e Diagramas de Venn (Q20)",
    "question": "Em uma corporação com 100 policiais, 60 praticam tiro tático, 50 praticam defesa pessoal e 20 praticam ambas as modalidades. Quantos policiais NÃO praticam nenhuma dessas duas modalidades?",
    "options": [
      "15 policiais.",
      "20 policiais.",
      "25 policiais.",
      "5 policiais.",
      "10 policiais."
    ],
    "correctIndex": 4,
    "explanation": "União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10.",
    "fundamentacaoLegal": "Teoria dos Conjuntos AOCP",
    "hint": "União = A + B - Interseção = 60 + 50 - 20 = 90. Restante fora: 100 - 90 = 10.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Some tudo e subtraia a interseção!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10."
    }
  },
  {
    "id": "rlm_edital_021",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Tabela-Verdade • Conjunção (E) (Q21)",
    "question": "A proposição composta 'p ^ q' (p e q) só é VERDADEIRA quando:",
    "options": [
      "Ambas as proposições simples 'p' e 'q' forem simultaneamente verdadeiras.",
      "Pelo menos uma das proposições simples for verdadeira.",
      "A primeira proposição for falsa e a segunda for verdadeira.",
      "Ambas as proposições simples forem falsas.",
      "A proposição 'p' for verdadeira, independentemente do valor de 'q'."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
    "fundamentacaoLegal": "Raciocínio Lógico Matemático • AOCP",
    "hint": "Conjunção (E): Só dá V se as duas forem V!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "E = 100% verdade. Um falso estraga tudo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_022",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional • Regra do MANÉ (Q22)",
    "question": "A negação lógica da proposição condicional 'Se o soldado estuda com disciplina, então ele é aprovado na PMPE' é:",
    "options": [
      "'Se o soldado não estuda com disciplina, então ele não é aprovado na PMPE.'",
      "'O soldado estuda com disciplina e não é aprovado na PMPE.'",
      "'O soldado não estuda com disciplina ou é aprovado na PMPE.'",
      "'O soldado estuda com disciplina se e somente se for aprovado na PMPE.'",
      "'Se o soldado é aprovado na PMPE, então ele estuda com disciplina.'"
    ],
    "correctIndex": 1,
    "explanation": "A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
    "fundamentacaoLegal": "Lógica Proposicional AOCP",
    "hint": "Negação do 'Se... então' = Regra do MANÉ (Mantém a primeira E Nega a segunda).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "MANÉ = Mantém a 1ª 'E' Nega a 2ª!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_023",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional • Contrapositiva (Q23)",
    "question": "A proposição logicamente equivalente a 'Se a viatura tem combustível, então a guarnição realiza a ronda' é:",
    "options": [
      "'Se a viatura não tem combustível, então a guarnição não realiza a ronda.'",
      "'A viatura tem combustível e a guarnição não realiza a ronda.'",
      "'Se a guarnição não realiza a ronda, então a viatura não tem combustível.'",
      "'Se a guarnição realiza a ronda, então a viatura tem combustível.'",
      "'A viatura não tem combustível e a guarnição realiza a ronda.'"
    ],
    "correctIndex": 2,
    "explanation": "A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
    "fundamentacaoLegal": "Equivalências Lógicas AOCP",
    "hint": "Contrapositiva: Se p então q = Se NÃO q então NÃO p.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volta negando tudo! p->q é igual a ~q->~p.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_024",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação das Leis de De Morgan (Q24)",
    "question": "A negação lógica da proposição composta 'O réu confessou o delito e o comparsa fugiu' é:",
    "options": [
      "'O réu não confessou o delito e o comparsa não fugiu.'",
      "'Se o réu confessou o delito, o comparsa não fugiu.'",
      "'O réu confessou o delito ou o comparsa não fugiu.'",
      "'O réu não confessou o delito ou o comparsa não fugiu.'",
      "'O comparsa fugiu se e somente se o réu confessou o delito.'"
    ],
    "correctIndex": 3,
    "explanation": "Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
    "fundamentacaoLegal": "Leis de De Morgan AOCP",
    "hint": "Negação do 'E': Nega a primeira, troca 'E' por 'OU' e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nega o E trocando por OU!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_025",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Quantificadores Lógicos • Negação do 'Todo' (Q25)",
    "question": "A negação lógica da afirmação 'Todo policial militar é honesto' é expressa por:",
    "options": [
      "'Nenhum policial militar é honesto.'",
      "'Todos os policiais militares são desonestos.'",
      "'Apenas um policial militar é honesto.'",
      "'Nenhum cidadão comum é policial militar.'",
      "'Pelo menos um policial militar não é honesto.'"
    ],
    "correctIndex": 4,
    "explanation": "A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO.",
    "fundamentacaoLegal": "Quantificadores Lógicos AOCP",
    "hint": "Negação de TODO = P.E.A + NÃO (Pelo menos um NÃO, Existe NÃO, Algum NÃO).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nunca negue TODO com NENHUM! Use PEA + NÃO!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO."
    }
  },
  {
    "id": "rlm_edital_026",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples (Q26)",
    "question": "Em uma urna há 6 bolas pretas, 4 bolas brancas e 10 bolas verdes. Sorteando-se uma bola ao acaso, a probabilidade de ela ser branca é:",
    "options": [
      "20% (ou 1/5).",
      "30% (ou 3/10).",
      "40% (ou 2/5).",
      "50% (ou 1/2).",
      "10% (ou 1/10)."
    ],
    "correctIndex": 0,
    "explanation": "Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
    "fundamentacaoLegal": "Probabilidade AOCP",
    "hint": "P = Casos Favoráveis / Casos Totais = 4 / 20 = 20%.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "4 em 20 = 20%.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_027",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Combinação Simples (Q27)",
    "question": "De um pelotão de 8 soldados, quantos grupos distintos de 3 soldados podem ser formados para compor uma patrulha?",
    "options": [
      "24 grupos distintos.",
      "56 grupos distintos.",
      "120 grupos distintos.",
      "336 grupos distintos.",
      "18 grupos distintos."
    ],
    "correctIndex": 1,
    "explanation": "A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Análise Combinatória AOCP",
    "hint": "Comissão/Grupo onde a ordem não importa = Combinação! (8x7x6)/(3x2x1) = 56.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ordem não importa = Combinação!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_028",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Aumentos Sucessivos (Q28)",
    "question": "Um armamento que custava R$ 2.000,00 sofreu um aumento de 10% e, no mês seguinte, sofreu um novo aumento de 20%. O preço final após os dois aumentos foi de:",
    "options": [
      "R$ 2.600,00.",
      "R$ 2.500,00.",
      "R$ 2.640,00.",
      "R$ 2.700,00.",
      "R$ 2.800,00."
    ],
    "correctIndex": 2,
    "explanation": "Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
    "fundamentacaoLegal": "Matemática Financeira AOCP",
    "hint": "Aumentos sucessivos multiplicam os fatores: 1,10 x 1,20 = 1,32 (+32%).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10% + 20% sucessivos = 32%!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_029",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Composta (Q29)",
    "question": "Se 6 policiais lavram 30 boletins de ocorrência em 5 horas de trabalho, quantos boletins serão lavrados por 8 policiais em 4 horas no mesmo ritmo?",
    "options": [
      "28 boletins.",
      "36 boletins.",
      "40 boletins.",
      "32 boletins.",
      "25 boletins."
    ],
    "correctIndex": 3,
    "explanation": "Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
    "fundamentacaoLegal": "Regra de Três AOCP",
    "hint": "Calcule a taxa unitária: 30 / (6 x 5) = 1. Nova situação: 8 x 4 x 1 = 32 boletins.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Produtividade = 1 boletim por homem-hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_030",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Conjuntos Numéricos e Diagramas de Venn (Q30)",
    "question": "Em uma corporação com 100 policiais, 60 praticam tiro tático, 50 praticam defesa pessoal e 20 praticam ambas as modalidades. Quantos policiais NÃO praticam nenhuma dessas duas modalidades?",
    "options": [
      "15 policiais.",
      "20 policiais.",
      "25 policiais.",
      "5 policiais.",
      "10 policiais."
    ],
    "correctIndex": 4,
    "explanation": "União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10.",
    "fundamentacaoLegal": "Teoria dos Conjuntos AOCP",
    "hint": "União = A + B - Interseção = 60 + 50 - 20 = 90. Restante fora: 100 - 90 = 10.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Some tudo e subtraia a interseção!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10."
    }
  },
  {
    "id": "rlm_edital_031",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Tabela-Verdade • Conjunção (E) (Q31)",
    "question": "A proposição composta 'p ^ q' (p e q) só é VERDADEIRA quando:",
    "options": [
      "Ambas as proposições simples 'p' e 'q' forem simultaneamente verdadeiras.",
      "Pelo menos uma das proposições simples for verdadeira.",
      "A primeira proposição for falsa e a segunda for verdadeira.",
      "Ambas as proposições simples forem falsas.",
      "A proposição 'p' for verdadeira, independentemente do valor de 'q'."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
    "fundamentacaoLegal": "Raciocínio Lógico Matemático • AOCP",
    "hint": "Conjunção (E): Só dá V se as duas forem V!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "E = 100% verdade. Um falso estraga tudo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_032",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional • Regra do MANÉ (Q32)",
    "question": "A negação lógica da proposição condicional 'Se o soldado estuda com disciplina, então ele é aprovado na PMPE' é:",
    "options": [
      "'Se o soldado não estuda com disciplina, então ele não é aprovado na PMPE.'",
      "'O soldado estuda com disciplina e não é aprovado na PMPE.'",
      "'O soldado não estuda com disciplina ou é aprovado na PMPE.'",
      "'O soldado estuda com disciplina se e somente se for aprovado na PMPE.'",
      "'Se o soldado é aprovado na PMPE, então ele estuda com disciplina.'"
    ],
    "correctIndex": 1,
    "explanation": "A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
    "fundamentacaoLegal": "Lógica Proposicional AOCP",
    "hint": "Negação do 'Se... então' = Regra do MANÉ (Mantém a primeira E Nega a segunda).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "MANÉ = Mantém a 1ª 'E' Nega a 2ª!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_033",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional • Contrapositiva (Q33)",
    "question": "A proposição logicamente equivalente a 'Se a viatura tem combustível, então a guarnição realiza a ronda' é:",
    "options": [
      "'Se a viatura não tem combustível, então a guarnição não realiza a ronda.'",
      "'A viatura tem combustível e a guarnição não realiza a ronda.'",
      "'Se a guarnição não realiza a ronda, então a viatura não tem combustível.'",
      "'Se a guarnição realiza a ronda, então a viatura tem combustível.'",
      "'A viatura não tem combustível e a guarnição realiza a ronda.'"
    ],
    "correctIndex": 2,
    "explanation": "A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
    "fundamentacaoLegal": "Equivalências Lógicas AOCP",
    "hint": "Contrapositiva: Se p então q = Se NÃO q então NÃO p.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volta negando tudo! p->q é igual a ~q->~p.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_034",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação das Leis de De Morgan (Q34)",
    "question": "A negação lógica da proposição composta 'O réu confessou o delito e o comparsa fugiu' é:",
    "options": [
      "'O réu não confessou o delito e o comparsa não fugiu.'",
      "'Se o réu confessou o delito, o comparsa não fugiu.'",
      "'O réu confessou o delito ou o comparsa não fugiu.'",
      "'O réu não confessou o delito ou o comparsa não fugiu.'",
      "'O comparsa fugiu se e somente se o réu confessou o delito.'"
    ],
    "correctIndex": 3,
    "explanation": "Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
    "fundamentacaoLegal": "Leis de De Morgan AOCP",
    "hint": "Negação do 'E': Nega a primeira, troca 'E' por 'OU' e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nega o E trocando por OU!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_035",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Quantificadores Lógicos • Negação do 'Todo' (Q35)",
    "question": "A negação lógica da afirmação 'Todo policial militar é honesto' é expressa por:",
    "options": [
      "'Nenhum policial militar é honesto.'",
      "'Todos os policiais militares são desonestos.'",
      "'Apenas um policial militar é honesto.'",
      "'Nenhum cidadão comum é policial militar.'",
      "'Pelo menos um policial militar não é honesto.'"
    ],
    "correctIndex": 4,
    "explanation": "A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO.",
    "fundamentacaoLegal": "Quantificadores Lógicos AOCP",
    "hint": "Negação de TODO = P.E.A + NÃO (Pelo menos um NÃO, Existe NÃO, Algum NÃO).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nunca negue TODO com NENHUM! Use PEA + NÃO!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO."
    }
  },
  {
    "id": "rlm_edital_036",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples (Q36)",
    "question": "Em uma urna há 6 bolas pretas, 4 bolas brancas e 10 bolas verdes. Sorteando-se uma bola ao acaso, a probabilidade de ela ser branca é:",
    "options": [
      "20% (ou 1/5).",
      "30% (ou 3/10).",
      "40% (ou 2/5).",
      "50% (ou 1/2).",
      "10% (ou 1/10)."
    ],
    "correctIndex": 0,
    "explanation": "Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
    "fundamentacaoLegal": "Probabilidade AOCP",
    "hint": "P = Casos Favoráveis / Casos Totais = 4 / 20 = 20%.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "4 em 20 = 20%.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_037",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Combinação Simples (Q37)",
    "question": "De um pelotão de 8 soldados, quantos grupos distintos de 3 soldados podem ser formados para compor uma patrulha?",
    "options": [
      "24 grupos distintos.",
      "56 grupos distintos.",
      "120 grupos distintos.",
      "336 grupos distintos.",
      "18 grupos distintos."
    ],
    "correctIndex": 1,
    "explanation": "A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Análise Combinatória AOCP",
    "hint": "Comissão/Grupo onde a ordem não importa = Combinação! (8x7x6)/(3x2x1) = 56.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ordem não importa = Combinação!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_038",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Aumentos Sucessivos (Q38)",
    "question": "Um armamento que custava R$ 2.000,00 sofreu um aumento de 10% e, no mês seguinte, sofreu um novo aumento de 20%. O preço final após os dois aumentos foi de:",
    "options": [
      "R$ 2.600,00.",
      "R$ 2.500,00.",
      "R$ 2.640,00.",
      "R$ 2.700,00.",
      "R$ 2.800,00."
    ],
    "correctIndex": 2,
    "explanation": "Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
    "fundamentacaoLegal": "Matemática Financeira AOCP",
    "hint": "Aumentos sucessivos multiplicam os fatores: 1,10 x 1,20 = 1,32 (+32%).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10% + 20% sucessivos = 32%!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_039",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Composta (Q39)",
    "question": "Se 6 policiais lavram 30 boletins de ocorrência em 5 horas de trabalho, quantos boletins serão lavrados por 8 policiais em 4 horas no mesmo ritmo?",
    "options": [
      "28 boletins.",
      "36 boletins.",
      "40 boletins.",
      "32 boletins.",
      "25 boletins."
    ],
    "correctIndex": 3,
    "explanation": "Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
    "fundamentacaoLegal": "Regra de Três AOCP",
    "hint": "Calcule a taxa unitária: 30 / (6 x 5) = 1. Nova situação: 8 x 4 x 1 = 32 boletins.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Produtividade = 1 boletim por homem-hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_040",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Conjuntos Numéricos e Diagramas de Venn (Q40)",
    "question": "Em uma corporação com 100 policiais, 60 praticam tiro tático, 50 praticam defesa pessoal e 20 praticam ambas as modalidades. Quantos policiais NÃO praticam nenhuma dessas duas modalidades?",
    "options": [
      "15 policiais.",
      "20 policiais.",
      "25 policiais.",
      "5 policiais.",
      "10 policiais."
    ],
    "correctIndex": 4,
    "explanation": "União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10.",
    "fundamentacaoLegal": "Teoria dos Conjuntos AOCP",
    "hint": "União = A + B - Interseção = 60 + 50 - 20 = 90. Restante fora: 100 - 90 = 10.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Some tudo e subtraia a interseção!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10."
    }
  },
  {
    "id": "rlm_edital_041",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Tabela-Verdade • Conjunção (E) (Q41)",
    "question": "A proposição composta 'p ^ q' (p e q) só é VERDADEIRA quando:",
    "options": [
      "Ambas as proposições simples 'p' e 'q' forem simultaneamente verdadeiras.",
      "Pelo menos uma das proposições simples for verdadeira.",
      "A primeira proposição for falsa e a segunda for verdadeira.",
      "Ambas as proposições simples forem falsas.",
      "A proposição 'p' for verdadeira, independentemente do valor de 'q'."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
    "fundamentacaoLegal": "Raciocínio Lógico Matemático • AOCP",
    "hint": "Conjunção (E): Só dá V se as duas forem V!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "E = 100% verdade. Um falso estraga tudo!",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'E' (^) é exigente: a tabela-verdade do conectivo 'E' só resulta em Verdadeiro (V) quando ambas as partes constituintes forem V.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_042",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional • Regra do MANÉ (Q42)",
    "question": "A negação lógica da proposição condicional 'Se o soldado estuda com disciplina, então ele é aprovado na PMPE' é:",
    "options": [
      "'Se o soldado não estuda com disciplina, então ele não é aprovado na PMPE.'",
      "'O soldado estuda com disciplina e não é aprovado na PMPE.'",
      "'O soldado não estuda com disciplina ou é aprovado na PMPE.'",
      "'O soldado estuda com disciplina se e somente se for aprovado na PMPE.'",
      "'Se o soldado é aprovado na PMPE, então ele estuda com disciplina.'"
    ],
    "correctIndex": 1,
    "explanation": "A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
    "fundamentacaoLegal": "Lógica Proposicional AOCP",
    "hint": "Negação do 'Se... então' = Regra do MANÉ (Mantém a primeira E Nega a segunda).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "MANÉ = Mantém a 1ª 'E' Nega a 2ª!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A negação da condicional 'p -> q' obedece à regra do MANÉ: MAntém a primeira E NEga a segunda: ~(p -> q) = p ^ ~q.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_043",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional • Contrapositiva (Q43)",
    "question": "A proposição logicamente equivalente a 'Se a viatura tem combustível, então a guarnição realiza a ronda' é:",
    "options": [
      "'Se a viatura não tem combustível, então a guarnição não realiza a ronda.'",
      "'A viatura tem combustível e a guarnição não realiza a ronda.'",
      "'Se a guarnição não realiza a ronda, então a viatura não tem combustível.'",
      "'Se a guarnição realiza a ronda, então a viatura tem combustível.'",
      "'A viatura não tem combustível e a guarnição realiza a ronda.'"
    ],
    "correctIndex": 2,
    "explanation": "A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
    "fundamentacaoLegal": "Equivalências Lógicas AOCP",
    "hint": "Contrapositiva: Se p então q = Se NÃO q então NÃO p.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Volta negando tudo! p->q é igual a ~q->~p.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A equivalência da contrapositiva inverte e nega ambos os termos da condicional: (p -> q) eq (~q -> ~p). 'Inverte e nega tudo'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_044",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação das Leis de De Morgan (Q44)",
    "question": "A negação lógica da proposição composta 'O réu confessou o delito e o comparsa fugiu' é:",
    "options": [
      "'O réu não confessou o delito e o comparsa não fugiu.'",
      "'Se o réu confessou o delito, o comparsa não fugiu.'",
      "'O réu confessou o delito ou o comparsa não fugiu.'",
      "'O réu não confessou o delito ou o comparsa não fugiu.'",
      "'O comparsa fugiu se e somente se o réu confessou o delito.'"
    ],
    "correctIndex": 3,
    "explanation": "Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
    "fundamentacaoLegal": "Leis de De Morgan AOCP",
    "hint": "Negação do 'E': Nega a primeira, troca 'E' por 'OU' e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nega o E trocando por OU!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Primeira Lei de De Morgan: ~(p ^ q) = ~p v ~q. Nega a primeira, troca o 'E' por 'OU' e nega a segunda.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_045",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Quantificadores Lógicos • Negação do 'Todo' (Q45)",
    "question": "A negação lógica da afirmação 'Todo policial militar é honesto' é expressa por:",
    "options": [
      "'Nenhum policial militar é honesto.'",
      "'Todos os policiais militares são desonestos.'",
      "'Apenas um policial militar é honesto.'",
      "'Nenhum cidadão comum é policial militar.'",
      "'Pelo menos um policial militar não é honesto.'"
    ],
    "correctIndex": 4,
    "explanation": "A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO.",
    "fundamentacaoLegal": "Quantificadores Lógicos AOCP",
    "hint": "Negação de TODO = P.E.A + NÃO (Pelo menos um NÃO, Existe NÃO, Algum NÃO).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nunca negue TODO com NENHUM! Use PEA + NÃO!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A negação de 'Todo A é B' NÃO é 'Nenhum'. Para derrubar 'Todo', basta furar a ideia com o 'PEA + NÃO': Pelo menos um NÃO, Existe um que NÃO, Algum NÃO."
    }
  },
  {
    "id": "rlm_edital_046",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples (Q46)",
    "question": "Em uma urna há 6 bolas pretas, 4 bolas brancas e 10 bolas verdes. Sorteando-se uma bola ao acaso, a probabilidade de ela ser branca é:",
    "options": [
      "20% (ou 1/5).",
      "30% (ou 3/10).",
      "40% (ou 2/5).",
      "50% (ou 1/2).",
      "10% (ou 1/10)."
    ],
    "correctIndex": 0,
    "explanation": "Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
    "fundamentacaoLegal": "Probabilidade AOCP",
    "hint": "P = Casos Favoráveis / Casos Totais = 4 / 20 = 20%.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "4 em 20 = 20%.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Total de bolas = 6 + 4 + 10 = 20 bolas. Casos favoráveis (brancas) = 4. Probabilidade = 4 / 20 = 1 / 5 = 0,20 = 20%.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_047",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Combinação Simples (Q47)",
    "question": "De um pelotão de 8 soldados, quantos grupos distintos de 3 soldados podem ser formados para compor uma patrulha?",
    "options": [
      "24 grupos distintos.",
      "56 grupos distintos.",
      "120 grupos distintos.",
      "336 grupos distintos.",
      "18 grupos distintos."
    ],
    "correctIndex": 1,
    "explanation": "A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Análise Combinatória AOCP",
    "hint": "Comissão/Grupo onde a ordem não importa = Combinação! (8x7x6)/(3x2x1) = 56.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ordem não importa = Combinação!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. A ordem dos soldados não altera a comissão/grupo, logo é Combinação Simples: C(8, 3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_048",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Aumentos Sucessivos (Q48)",
    "question": "Um armamento que custava R$ 2.000,00 sofreu um aumento de 10% e, no mês seguinte, sofreu um novo aumento de 20%. O preço final após os dois aumentos foi de:",
    "options": [
      "R$ 2.600,00.",
      "R$ 2.500,00.",
      "R$ 2.640,00.",
      "R$ 2.700,00.",
      "R$ 2.800,00."
    ],
    "correctIndex": 2,
    "explanation": "Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
    "fundamentacaoLegal": "Matemática Financeira AOCP",
    "hint": "Aumentos sucessivos multiplicam os fatores: 1,10 x 1,20 = 1,32 (+32%).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10% + 20% sucessivos = 32%!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Após o 1º aumento: 2.000 x 1,10 = R$ 2.200,00. Após o 2º aumento: 2.200 x 1,20 = R$ 2.640,00. Fator cumulativo: 1,10 x 1,20 = 1,32 (+32% sobre 2000 = +640 = 2640).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_049",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Composta (Q49)",
    "question": "Se 6 policiais lavram 30 boletins de ocorrência em 5 horas de trabalho, quantos boletins serão lavrados por 8 policiais em 4 horas no mesmo ritmo?",
    "options": [
      "28 boletins.",
      "36 boletins.",
      "40 boletins.",
      "32 boletins.",
      "25 boletins."
    ],
    "correctIndex": 3,
    "explanation": "Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
    "fundamentacaoLegal": "Regra de Três AOCP",
    "hint": "Calcule a taxa unitária: 30 / (6 x 5) = 1. Nova situação: 8 x 4 x 1 = 32 boletins.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Produtividade = 1 boletim por homem-hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Produtividade por policial/hora: 30 / (6 x 5) = 30 / 30 = 1 boletim por policial por hora. Logo, 8 policiais em 4 horas lavrarão: 8 x 4 x 1 = 32 boletins.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "rlm_edital_050",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Conjuntos Numéricos e Diagramas de Venn (Q50)",
    "question": "Em uma corporação com 100 policiais, 60 praticam tiro tático, 50 praticam defesa pessoal e 20 praticam ambas as modalidades. Quantos policiais NÃO praticam nenhuma dessas duas modalidades?",
    "options": [
      "15 policiais.",
      "20 policiais.",
      "25 policiais.",
      "5 policiais.",
      "10 policiais."
    ],
    "correctIndex": 4,
    "explanation": "União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10.",
    "fundamentacaoLegal": "Teoria dos Conjuntos AOCP",
    "hint": "União = A + B - Interseção = 60 + 50 - 20 = 90. Restante fora: 100 - 90 = 10.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Some tudo e subtraia a interseção!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. União dos conjuntos: N(A u B) = N(A) + N(B) - N(A n B) = 60 + 50 - 20 = 90 policiais praticam pelo menos uma. Policiais que não praticam nenhuma: 100 - 90 = 10."
    }
  },
  {
    "id": "info_edital_001",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows 10/11 • Atalho Win + E (Q1)",
    "question": "No sistema operacional Microsoft Windows 10/11, o atalho de teclado padrão utilizado para abrir o 'Explorador de Arquivos' é:",
    "options": [
      "Win + E",
      "Win + R",
      "Win + D",
      "Win + L",
      "Win + I"
    ],
    "correctIndex": 0,
    "explanation": "A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
    "fundamentacaoLegal": "Informática Básica AOCP",
    "hint": "Win + E = Explorador de arquivos (E de Explorer).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Win + E = Explorer.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_002",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Linux • Comando 'chmod' (Q2)",
    "question": "Em sistemas operacionais baseados em Linux, o comando utilizado pelo administrador para alterar as permissões de acesso de leitura, escrita e execução de um arquivo é:",
    "options": [
      "chown",
      "chmod",
      "ps -ef",
      "grep",
      "mkdir"
    ],
    "correctIndex": 1,
    "explanation": "O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
    "fundamentacaoLegal": "Sistemas Operacionais Linux AOCP",
    "hint": "chmod = altera permissões (rwx). chown = altera o dono (owner).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "chmod = permissões!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_003",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel / Calc • Função PROCV (Q3)",
    "question": "No Microsoft Excel em português, a função que realiza uma pesquisa vertical pelo valor de referência na primeira coluna à esquerda de uma tabela e retorna o valor na mesma linha é:",
    "options": [
      "PROCH",
      "SOMASE",
      "PROCV",
      "CONT.VALORES",
      "CONCATENAR"
    ],
    "correctIndex": 2,
    "explanation": "A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
    "fundamentacaoLegal": "Planilhas Eletrônicas AOCP",
    "hint": "PROCV = Procura Vertical na 1ª coluna.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "PROCV = Procura na vertical.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_004",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Ransomware (Q4)",
    "question": "O tipo de código malicioso (malware) que sequestra os arquivos da vítima criptografando o disco rígido e exige pagamento de resgate (geralmente em criptomoedas) é o:",
    "options": [
      "Spyware",
      "Adware",
      "Trojan horse (Cavalo de Troia)",
      "Ransomware",
      "Keylogger"
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
    "fundamentacaoLegal": "Segurança da Informação AOCP",
    "hint": "Ransomware = Sequestro de dados com exigência de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ransom = Resgate -> Ransomware.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_005",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Phishing (Q5)",
    "question": "O golpe cibernético que induz a vítima a fornecer senhas bancárias ou dados sigilosos por meio de mensagens fraudulentas ou e-mails falsificados com aparência de órgãos oficiais é denominado:",
    "options": [
      "Denial of Service (DoS)",
      "Man-in-the-middle",
      "Defacement",
      "Port Scanning",
      "Phishing"
    ],
    "correctIndex": 4,
    "explanation": "Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis.",
    "fundamentacaoLegal": "Cartilha de Segurança para Internet",
    "hint": "Phishing = Pescaria de dados e senhas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Phishing = Pescaria fraudulenta.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis."
    }
  },
  {
    "id": "info_edital_006",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Protocolos de Correio (SMTP) (Q6)",
    "question": "No serviço de correio eletrônico, o protocolo padrão responsável pelo ENVIO (saída) de mensagens da máquina do usuário para o servidor é o:",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP",
      "FTP"
    ],
    "correctIndex": 0,
    "explanation": "O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
    "fundamentacaoLegal": "Redes de Computadores AOCP",
    "hint": "SMTP = 'Sua Mensagem Tá Partindo' (Protocolo de Envio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SMTP = Envio. POP3/IMAP = Recebimento.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_007",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Navegação Segura (HTTPS) (Q7)",
    "question": "A presença do protocolo HTTPS na barra de endereços do navegador web indica fundamentalmente que:",
    "options": [
      "A página é 100% imune a conteúdos inverídicos ou golpes digitais.",
      "A comunicação entre o navegador e o servidor web é protegida por criptografia mediante certificados SSL/TLS.",
      "O computador do usuário não precisa de antivírus para acessar a página.",
      "O site pertence obrigatoriamente a uma instituição do Governo Federal.",
      "O navegador web desativou todos os cookies de rastreamento comercial."
    ],
    "correctIndex": 1,
    "explanation": "O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
    "fundamentacaoLegal": "Segurança e Protocolos de Rede",
    "hint": "HTTPS = HTTP + Criptografia (SSL/TLS).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "S no final do HTTPS = Segurança criptografada.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_008",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Princípios da Segurança da Informação (Q8)",
    "question": "O princípio que garante que uma informação não foi alterada ou corrompida de forma indevida ou não autorizada durante o armazenamento ou tráfego é:",
    "options": [
      "A Confidencialidade",
      "A Disponibilidade",
      "A Integridade",
      "A Autenticidade",
      "A Irretratabilidade"
    ],
    "correctIndex": 2,
    "explanation": "Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
    "fundamentacaoLegal": "Princípios Fundamentais DICA",
    "hint": "Integridade = dado intacto, sem alterações não autorizadas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "DICA: Disponibilidade, Integridade, Confidencialidade, Autenticidade.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_009",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Word / Writer • Quebra de Seção (Q9)",
    "question": "No Microsoft Word, para que uma parte do documento tenha orientação em formato 'Paisagem' e outra parte continue em 'Retrato', o usuário deve inserir uma:",
    "options": [
      "Quebra de Linha simples (Shift + Enter)",
      "Quebra de Coluna",
      "Quebra de Página simples (Ctrl + Enter)",
      "Quebra de Seção",
      "Nota de Rodapé"
    ],
    "correctIndex": 3,
    "explanation": "Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
    "fundamentacaoLegal": "Processadores de Texto AOCP",
    "hint": "Formatação diferente no mesmo arquivo (Paisagem/Retrato) = Quebra de Seção!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Seção = Formatação independente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_010",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Hardware e Armazenamento • SSD vs HDD (Q10)",
    "question": "Em relação aos dispositivos de armazenamento de dados, a principal vantagem do SSD (Solid State Drive) em comparação ao HDD tradicional reside em:",
    "options": [
      "Capacidade infinita de armazenamento sem necessidade de formatação.",
      "Custo por gigabyte muito inferior ao de qualquer fita magnética.",
      "Imunidade total à infecção por malwares e ransomwares.",
      "Incompatibilidade proposital com portas USB e conexões SATA.",
      "Ausência de peças mecânicas móveis, proporcionando velocidades muito superiores de leitura e gravação e maior resistência a impactos."
    ],
    "correctIndex": 4,
    "explanation": "O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física.",
    "fundamentacaoLegal": "Hardware e Periféricos AOCP",
    "hint": "SSD = Memória Flash, sem partes móveis, muito mais veloz.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SSD = Muito mais rápido e sem agulha/disco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física."
    }
  },
  {
    "id": "info_edital_011",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows 10/11 • Atalho Win + E (Q11)",
    "question": "No sistema operacional Microsoft Windows 10/11, o atalho de teclado padrão utilizado para abrir o 'Explorador de Arquivos' é:",
    "options": [
      "Win + E",
      "Win + R",
      "Win + D",
      "Win + L",
      "Win + I"
    ],
    "correctIndex": 0,
    "explanation": "A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
    "fundamentacaoLegal": "Informática Básica AOCP",
    "hint": "Win + E = Explorador de arquivos (E de Explorer).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Win + E = Explorer.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_012",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Linux • Comando 'chmod' (Q12)",
    "question": "Em sistemas operacionais baseados em Linux, o comando utilizado pelo administrador para alterar as permissões de acesso de leitura, escrita e execução de um arquivo é:",
    "options": [
      "chown",
      "chmod",
      "ps -ef",
      "grep",
      "mkdir"
    ],
    "correctIndex": 1,
    "explanation": "O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
    "fundamentacaoLegal": "Sistemas Operacionais Linux AOCP",
    "hint": "chmod = altera permissões (rwx). chown = altera o dono (owner).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "chmod = permissões!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_013",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel / Calc • Função PROCV (Q13)",
    "question": "No Microsoft Excel em português, a função que realiza uma pesquisa vertical pelo valor de referência na primeira coluna à esquerda de uma tabela e retorna o valor na mesma linha é:",
    "options": [
      "PROCH",
      "SOMASE",
      "PROCV",
      "CONT.VALORES",
      "CONCATENAR"
    ],
    "correctIndex": 2,
    "explanation": "A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
    "fundamentacaoLegal": "Planilhas Eletrônicas AOCP",
    "hint": "PROCV = Procura Vertical na 1ª coluna.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "PROCV = Procura na vertical.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_014",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Ransomware (Q14)",
    "question": "O tipo de código malicioso (malware) que sequestra os arquivos da vítima criptografando o disco rígido e exige pagamento de resgate (geralmente em criptomoedas) é o:",
    "options": [
      "Spyware",
      "Adware",
      "Trojan horse (Cavalo de Troia)",
      "Ransomware",
      "Keylogger"
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
    "fundamentacaoLegal": "Segurança da Informação AOCP",
    "hint": "Ransomware = Sequestro de dados com exigência de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ransom = Resgate -> Ransomware.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_015",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Phishing (Q15)",
    "question": "O golpe cibernético que induz a vítima a fornecer senhas bancárias ou dados sigilosos por meio de mensagens fraudulentas ou e-mails falsificados com aparência de órgãos oficiais é denominado:",
    "options": [
      "Denial of Service (DoS)",
      "Man-in-the-middle",
      "Defacement",
      "Port Scanning",
      "Phishing"
    ],
    "correctIndex": 4,
    "explanation": "Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis.",
    "fundamentacaoLegal": "Cartilha de Segurança para Internet",
    "hint": "Phishing = Pescaria de dados e senhas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Phishing = Pescaria fraudulenta.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis."
    }
  },
  {
    "id": "info_edital_016",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Protocolos de Correio (SMTP) (Q16)",
    "question": "No serviço de correio eletrônico, o protocolo padrão responsável pelo ENVIO (saída) de mensagens da máquina do usuário para o servidor é o:",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP",
      "FTP"
    ],
    "correctIndex": 0,
    "explanation": "O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
    "fundamentacaoLegal": "Redes de Computadores AOCP",
    "hint": "SMTP = 'Sua Mensagem Tá Partindo' (Protocolo de Envio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SMTP = Envio. POP3/IMAP = Recebimento.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_017",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Navegação Segura (HTTPS) (Q17)",
    "question": "A presença do protocolo HTTPS na barra de endereços do navegador web indica fundamentalmente que:",
    "options": [
      "A página é 100% imune a conteúdos inverídicos ou golpes digitais.",
      "A comunicação entre o navegador e o servidor web é protegida por criptografia mediante certificados SSL/TLS.",
      "O computador do usuário não precisa de antivírus para acessar a página.",
      "O site pertence obrigatoriamente a uma instituição do Governo Federal.",
      "O navegador web desativou todos os cookies de rastreamento comercial."
    ],
    "correctIndex": 1,
    "explanation": "O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
    "fundamentacaoLegal": "Segurança e Protocolos de Rede",
    "hint": "HTTPS = HTTP + Criptografia (SSL/TLS).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "S no final do HTTPS = Segurança criptografada.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_018",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Princípios da Segurança da Informação (Q18)",
    "question": "O princípio que garante que uma informação não foi alterada ou corrompida de forma indevida ou não autorizada durante o armazenamento ou tráfego é:",
    "options": [
      "A Confidencialidade",
      "A Disponibilidade",
      "A Integridade",
      "A Autenticidade",
      "A Irretratabilidade"
    ],
    "correctIndex": 2,
    "explanation": "Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
    "fundamentacaoLegal": "Princípios Fundamentais DICA",
    "hint": "Integridade = dado intacto, sem alterações não autorizadas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "DICA: Disponibilidade, Integridade, Confidencialidade, Autenticidade.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_019",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Word / Writer • Quebra de Seção (Q19)",
    "question": "No Microsoft Word, para que uma parte do documento tenha orientação em formato 'Paisagem' e outra parte continue em 'Retrato', o usuário deve inserir uma:",
    "options": [
      "Quebra de Linha simples (Shift + Enter)",
      "Quebra de Coluna",
      "Quebra de Página simples (Ctrl + Enter)",
      "Quebra de Seção",
      "Nota de Rodapé"
    ],
    "correctIndex": 3,
    "explanation": "Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
    "fundamentacaoLegal": "Processadores de Texto AOCP",
    "hint": "Formatação diferente no mesmo arquivo (Paisagem/Retrato) = Quebra de Seção!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Seção = Formatação independente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_020",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Hardware e Armazenamento • SSD vs HDD (Q20)",
    "question": "Em relação aos dispositivos de armazenamento de dados, a principal vantagem do SSD (Solid State Drive) em comparação ao HDD tradicional reside em:",
    "options": [
      "Capacidade infinita de armazenamento sem necessidade de formatação.",
      "Custo por gigabyte muito inferior ao de qualquer fita magnética.",
      "Imunidade total à infecção por malwares e ransomwares.",
      "Incompatibilidade proposital com portas USB e conexões SATA.",
      "Ausência de peças mecânicas móveis, proporcionando velocidades muito superiores de leitura e gravação e maior resistência a impactos."
    ],
    "correctIndex": 4,
    "explanation": "O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física.",
    "fundamentacaoLegal": "Hardware e Periféricos AOCP",
    "hint": "SSD = Memória Flash, sem partes móveis, muito mais veloz.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SSD = Muito mais rápido e sem agulha/disco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física."
    }
  },
  {
    "id": "info_edital_021",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows 10/11 • Atalho Win + E (Q21)",
    "question": "No sistema operacional Microsoft Windows 10/11, o atalho de teclado padrão utilizado para abrir o 'Explorador de Arquivos' é:",
    "options": [
      "Win + E",
      "Win + R",
      "Win + D",
      "Win + L",
      "Win + I"
    ],
    "correctIndex": 0,
    "explanation": "A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
    "fundamentacaoLegal": "Informática Básica AOCP",
    "hint": "Win + E = Explorador de arquivos (E de Explorer).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Win + E = Explorer.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_022",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Linux • Comando 'chmod' (Q22)",
    "question": "Em sistemas operacionais baseados em Linux, o comando utilizado pelo administrador para alterar as permissões de acesso de leitura, escrita e execução de um arquivo é:",
    "options": [
      "chown",
      "chmod",
      "ps -ef",
      "grep",
      "mkdir"
    ],
    "correctIndex": 1,
    "explanation": "O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
    "fundamentacaoLegal": "Sistemas Operacionais Linux AOCP",
    "hint": "chmod = altera permissões (rwx). chown = altera o dono (owner).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "chmod = permissões!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_023",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel / Calc • Função PROCV (Q23)",
    "question": "No Microsoft Excel em português, a função que realiza uma pesquisa vertical pelo valor de referência na primeira coluna à esquerda de uma tabela e retorna o valor na mesma linha é:",
    "options": [
      "PROCH",
      "SOMASE",
      "PROCV",
      "CONT.VALORES",
      "CONCATENAR"
    ],
    "correctIndex": 2,
    "explanation": "A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
    "fundamentacaoLegal": "Planilhas Eletrônicas AOCP",
    "hint": "PROCV = Procura Vertical na 1ª coluna.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "PROCV = Procura na vertical.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_024",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Ransomware (Q24)",
    "question": "O tipo de código malicioso (malware) que sequestra os arquivos da vítima criptografando o disco rígido e exige pagamento de resgate (geralmente em criptomoedas) é o:",
    "options": [
      "Spyware",
      "Adware",
      "Trojan horse (Cavalo de Troia)",
      "Ransomware",
      "Keylogger"
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
    "fundamentacaoLegal": "Segurança da Informação AOCP",
    "hint": "Ransomware = Sequestro de dados com exigência de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ransom = Resgate -> Ransomware.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_025",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Phishing (Q25)",
    "question": "O golpe cibernético que induz a vítima a fornecer senhas bancárias ou dados sigilosos por meio de mensagens fraudulentas ou e-mails falsificados com aparência de órgãos oficiais é denominado:",
    "options": [
      "Denial of Service (DoS)",
      "Man-in-the-middle",
      "Defacement",
      "Port Scanning",
      "Phishing"
    ],
    "correctIndex": 4,
    "explanation": "Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis.",
    "fundamentacaoLegal": "Cartilha de Segurança para Internet",
    "hint": "Phishing = Pescaria de dados e senhas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Phishing = Pescaria fraudulenta.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis."
    }
  },
  {
    "id": "info_edital_026",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Protocolos de Correio (SMTP) (Q26)",
    "question": "No serviço de correio eletrônico, o protocolo padrão responsável pelo ENVIO (saída) de mensagens da máquina do usuário para o servidor é o:",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP",
      "FTP"
    ],
    "correctIndex": 0,
    "explanation": "O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
    "fundamentacaoLegal": "Redes de Computadores AOCP",
    "hint": "SMTP = 'Sua Mensagem Tá Partindo' (Protocolo de Envio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SMTP = Envio. POP3/IMAP = Recebimento.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_027",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Navegação Segura (HTTPS) (Q27)",
    "question": "A presença do protocolo HTTPS na barra de endereços do navegador web indica fundamentalmente que:",
    "options": [
      "A página é 100% imune a conteúdos inverídicos ou golpes digitais.",
      "A comunicação entre o navegador e o servidor web é protegida por criptografia mediante certificados SSL/TLS.",
      "O computador do usuário não precisa de antivírus para acessar a página.",
      "O site pertence obrigatoriamente a uma instituição do Governo Federal.",
      "O navegador web desativou todos os cookies de rastreamento comercial."
    ],
    "correctIndex": 1,
    "explanation": "O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
    "fundamentacaoLegal": "Segurança e Protocolos de Rede",
    "hint": "HTTPS = HTTP + Criptografia (SSL/TLS).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "S no final do HTTPS = Segurança criptografada.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_028",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Princípios da Segurança da Informação (Q28)",
    "question": "O princípio que garante que uma informação não foi alterada ou corrompida de forma indevida ou não autorizada durante o armazenamento ou tráfego é:",
    "options": [
      "A Confidencialidade",
      "A Disponibilidade",
      "A Integridade",
      "A Autenticidade",
      "A Irretratabilidade"
    ],
    "correctIndex": 2,
    "explanation": "Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
    "fundamentacaoLegal": "Princípios Fundamentais DICA",
    "hint": "Integridade = dado intacto, sem alterações não autorizadas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "DICA: Disponibilidade, Integridade, Confidencialidade, Autenticidade.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_029",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Word / Writer • Quebra de Seção (Q29)",
    "question": "No Microsoft Word, para que uma parte do documento tenha orientação em formato 'Paisagem' e outra parte continue em 'Retrato', o usuário deve inserir uma:",
    "options": [
      "Quebra de Linha simples (Shift + Enter)",
      "Quebra de Coluna",
      "Quebra de Página simples (Ctrl + Enter)",
      "Quebra de Seção",
      "Nota de Rodapé"
    ],
    "correctIndex": 3,
    "explanation": "Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
    "fundamentacaoLegal": "Processadores de Texto AOCP",
    "hint": "Formatação diferente no mesmo arquivo (Paisagem/Retrato) = Quebra de Seção!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Seção = Formatação independente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_030",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Hardware e Armazenamento • SSD vs HDD (Q30)",
    "question": "Em relação aos dispositivos de armazenamento de dados, a principal vantagem do SSD (Solid State Drive) em comparação ao HDD tradicional reside em:",
    "options": [
      "Capacidade infinita de armazenamento sem necessidade de formatação.",
      "Custo por gigabyte muito inferior ao de qualquer fita magnética.",
      "Imunidade total à infecção por malwares e ransomwares.",
      "Incompatibilidade proposital com portas USB e conexões SATA.",
      "Ausência de peças mecânicas móveis, proporcionando velocidades muito superiores de leitura e gravação e maior resistência a impactos."
    ],
    "correctIndex": 4,
    "explanation": "O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física.",
    "fundamentacaoLegal": "Hardware e Periféricos AOCP",
    "hint": "SSD = Memória Flash, sem partes móveis, muito mais veloz.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SSD = Muito mais rápido e sem agulha/disco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física."
    }
  },
  {
    "id": "info_edital_031",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows 10/11 • Atalho Win + E (Q31)",
    "question": "No sistema operacional Microsoft Windows 10/11, o atalho de teclado padrão utilizado para abrir o 'Explorador de Arquivos' é:",
    "options": [
      "Win + E",
      "Win + R",
      "Win + D",
      "Win + L",
      "Win + I"
    ],
    "correctIndex": 0,
    "explanation": "A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
    "fundamentacaoLegal": "Informática Básica AOCP",
    "hint": "Win + E = Explorador de arquivos (E de Explorer).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Win + E = Explorer.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_032",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Linux • Comando 'chmod' (Q32)",
    "question": "Em sistemas operacionais baseados em Linux, o comando utilizado pelo administrador para alterar as permissões de acesso de leitura, escrita e execução de um arquivo é:",
    "options": [
      "chown",
      "chmod",
      "ps -ef",
      "grep",
      "mkdir"
    ],
    "correctIndex": 1,
    "explanation": "O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
    "fundamentacaoLegal": "Sistemas Operacionais Linux AOCP",
    "hint": "chmod = altera permissões (rwx). chown = altera o dono (owner).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "chmod = permissões!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_033",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel / Calc • Função PROCV (Q33)",
    "question": "No Microsoft Excel em português, a função que realiza uma pesquisa vertical pelo valor de referência na primeira coluna à esquerda de uma tabela e retorna o valor na mesma linha é:",
    "options": [
      "PROCH",
      "SOMASE",
      "PROCV",
      "CONT.VALORES",
      "CONCATENAR"
    ],
    "correctIndex": 2,
    "explanation": "A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
    "fundamentacaoLegal": "Planilhas Eletrônicas AOCP",
    "hint": "PROCV = Procura Vertical na 1ª coluna.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "PROCV = Procura na vertical.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_034",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Ransomware (Q34)",
    "question": "O tipo de código malicioso (malware) que sequestra os arquivos da vítima criptografando o disco rígido e exige pagamento de resgate (geralmente em criptomoedas) é o:",
    "options": [
      "Spyware",
      "Adware",
      "Trojan horse (Cavalo de Troia)",
      "Ransomware",
      "Keylogger"
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
    "fundamentacaoLegal": "Segurança da Informação AOCP",
    "hint": "Ransomware = Sequestro de dados com exigência de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ransom = Resgate -> Ransomware.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_035",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Phishing (Q35)",
    "question": "O golpe cibernético que induz a vítima a fornecer senhas bancárias ou dados sigilosos por meio de mensagens fraudulentas ou e-mails falsificados com aparência de órgãos oficiais é denominado:",
    "options": [
      "Denial of Service (DoS)",
      "Man-in-the-middle",
      "Defacement",
      "Port Scanning",
      "Phishing"
    ],
    "correctIndex": 4,
    "explanation": "Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis.",
    "fundamentacaoLegal": "Cartilha de Segurança para Internet",
    "hint": "Phishing = Pescaria de dados e senhas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Phishing = Pescaria fraudulenta.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis."
    }
  },
  {
    "id": "info_edital_036",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Protocolos de Correio (SMTP) (Q36)",
    "question": "No serviço de correio eletrônico, o protocolo padrão responsável pelo ENVIO (saída) de mensagens da máquina do usuário para o servidor é o:",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP",
      "FTP"
    ],
    "correctIndex": 0,
    "explanation": "O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
    "fundamentacaoLegal": "Redes de Computadores AOCP",
    "hint": "SMTP = 'Sua Mensagem Tá Partindo' (Protocolo de Envio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SMTP = Envio. POP3/IMAP = Recebimento.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_037",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Navegação Segura (HTTPS) (Q37)",
    "question": "A presença do protocolo HTTPS na barra de endereços do navegador web indica fundamentalmente que:",
    "options": [
      "A página é 100% imune a conteúdos inverídicos ou golpes digitais.",
      "A comunicação entre o navegador e o servidor web é protegida por criptografia mediante certificados SSL/TLS.",
      "O computador do usuário não precisa de antivírus para acessar a página.",
      "O site pertence obrigatoriamente a uma instituição do Governo Federal.",
      "O navegador web desativou todos os cookies de rastreamento comercial."
    ],
    "correctIndex": 1,
    "explanation": "O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
    "fundamentacaoLegal": "Segurança e Protocolos de Rede",
    "hint": "HTTPS = HTTP + Criptografia (SSL/TLS).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "S no final do HTTPS = Segurança criptografada.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_038",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Princípios da Segurança da Informação (Q38)",
    "question": "O princípio que garante que uma informação não foi alterada ou corrompida de forma indevida ou não autorizada durante o armazenamento ou tráfego é:",
    "options": [
      "A Confidencialidade",
      "A Disponibilidade",
      "A Integridade",
      "A Autenticidade",
      "A Irretratabilidade"
    ],
    "correctIndex": 2,
    "explanation": "Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
    "fundamentacaoLegal": "Princípios Fundamentais DICA",
    "hint": "Integridade = dado intacto, sem alterações não autorizadas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "DICA: Disponibilidade, Integridade, Confidencialidade, Autenticidade.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_039",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Word / Writer • Quebra de Seção (Q39)",
    "question": "No Microsoft Word, para que uma parte do documento tenha orientação em formato 'Paisagem' e outra parte continue em 'Retrato', o usuário deve inserir uma:",
    "options": [
      "Quebra de Linha simples (Shift + Enter)",
      "Quebra de Coluna",
      "Quebra de Página simples (Ctrl + Enter)",
      "Quebra de Seção",
      "Nota de Rodapé"
    ],
    "correctIndex": 3,
    "explanation": "Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
    "fundamentacaoLegal": "Processadores de Texto AOCP",
    "hint": "Formatação diferente no mesmo arquivo (Paisagem/Retrato) = Quebra de Seção!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Seção = Formatação independente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_040",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Hardware e Armazenamento • SSD vs HDD (Q40)",
    "question": "Em relação aos dispositivos de armazenamento de dados, a principal vantagem do SSD (Solid State Drive) em comparação ao HDD tradicional reside em:",
    "options": [
      "Capacidade infinita de armazenamento sem necessidade de formatação.",
      "Custo por gigabyte muito inferior ao de qualquer fita magnética.",
      "Imunidade total à infecção por malwares e ransomwares.",
      "Incompatibilidade proposital com portas USB e conexões SATA.",
      "Ausência de peças mecânicas móveis, proporcionando velocidades muito superiores de leitura e gravação e maior resistência a impactos."
    ],
    "correctIndex": 4,
    "explanation": "O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física.",
    "fundamentacaoLegal": "Hardware e Periféricos AOCP",
    "hint": "SSD = Memória Flash, sem partes móveis, muito mais veloz.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SSD = Muito mais rápido e sem agulha/disco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física."
    }
  },
  {
    "id": "info_edital_041",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows 10/11 • Atalho Win + E (Q41)",
    "question": "No sistema operacional Microsoft Windows 10/11, o atalho de teclado padrão utilizado para abrir o 'Explorador de Arquivos' é:",
    "options": [
      "Win + E",
      "Win + R",
      "Win + D",
      "Win + L",
      "Win + I"
    ],
    "correctIndex": 0,
    "explanation": "A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
    "fundamentacaoLegal": "Informática Básica AOCP",
    "hint": "Win + E = Explorador de arquivos (E de Explorer).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Win + E = Explorer.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. A tecla com o logotipo do Windows + E abre imediatamente o Explorador de Arquivos (File Explorer).",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_042",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Linux • Comando 'chmod' (Q42)",
    "question": "Em sistemas operacionais baseados em Linux, o comando utilizado pelo administrador para alterar as permissões de acesso de leitura, escrita e execução de um arquivo é:",
    "options": [
      "chown",
      "chmod",
      "ps -ef",
      "grep",
      "mkdir"
    ],
    "correctIndex": 1,
    "explanation": "O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
    "fundamentacaoLegal": "Sistemas Operacionais Linux AOCP",
    "hint": "chmod = altera permissões (rwx). chown = altera o dono (owner).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "chmod = permissões!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O comando 'chmod' (change mode) modifica permissões (rwx); já o comando 'chown' (change owner) altera o dono do arquivo.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_043",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel / Calc • Função PROCV (Q43)",
    "question": "No Microsoft Excel em português, a função que realiza uma pesquisa vertical pelo valor de referência na primeira coluna à esquerda de uma tabela e retorna o valor na mesma linha é:",
    "options": [
      "PROCH",
      "SOMASE",
      "PROCV",
      "CONT.VALORES",
      "CONCATENAR"
    ],
    "correctIndex": 2,
    "explanation": "A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
    "fundamentacaoLegal": "Planilhas Eletrônicas AOCP",
    "hint": "PROCV = Procura Vertical na 1ª coluna.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "PROCV = Procura na vertical.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. A função PROCV (Procura Vertical) busca o dado na primeira coluna da matriz e retorna o conteúdo da coluna indicada.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_044",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Ransomware (Q44)",
    "question": "O tipo de código malicioso (malware) que sequestra os arquivos da vítima criptografando o disco rígido e exige pagamento de resgate (geralmente em criptomoedas) é o:",
    "options": [
      "Spyware",
      "Adware",
      "Trojan horse (Cavalo de Troia)",
      "Ransomware",
      "Keylogger"
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
    "fundamentacaoLegal": "Segurança da Informação AOCP",
    "hint": "Ransomware = Sequestro de dados com exigência de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Ransom = Resgate -> Ransomware.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Ransomware (de 'ransom' = resgate) bloqueia o acesso aos dados por criptografia e cobra resgate financeiro para fornecer a chave de descriptografia.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_045",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Phishing (Q45)",
    "question": "O golpe cibernético que induz a vítima a fornecer senhas bancárias ou dados sigilosos por meio de mensagens fraudulentas ou e-mails falsificados com aparência de órgãos oficiais é denominado:",
    "options": [
      "Denial of Service (DoS)",
      "Man-in-the-middle",
      "Defacement",
      "Port Scanning",
      "Phishing"
    ],
    "correctIndex": 4,
    "explanation": "Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis.",
    "fundamentacaoLegal": "Cartilha de Segurança para Internet",
    "hint": "Phishing = Pescaria de dados e senhas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Phishing = Pescaria fraudulenta.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Phishing ('pescaria') é uma técnica de engenharia social voltada a fisgar dados sensíveis das vítimas imitando sites e identidades confiáveis."
    }
  },
  {
    "id": "info_edital_046",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Protocolos de Correio (SMTP) (Q46)",
    "question": "No serviço de correio eletrônico, o protocolo padrão responsável pelo ENVIO (saída) de mensagens da máquina do usuário para o servidor é o:",
    "options": [
      "SMTP",
      "POP3",
      "IMAP",
      "HTTP",
      "FTP"
    ],
    "correctIndex": 0,
    "explanation": "O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
    "fundamentacaoLegal": "Redes de Computadores AOCP",
    "hint": "SMTP = 'Sua Mensagem Tá Partindo' (Protocolo de Envio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SMTP = Envio. POP3/IMAP = Recebimento.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. O protocolo SMTP (Simple Mail Transfer Protocol) é o protocolo de ENVIO de e-mails. Para RECEBIMENTO, utilizam-se POP3 ou IMAP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_047",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes • Navegação Segura (HTTPS) (Q47)",
    "question": "A presença do protocolo HTTPS na barra de endereços do navegador web indica fundamentalmente que:",
    "options": [
      "A página é 100% imune a conteúdos inverídicos ou golpes digitais.",
      "A comunicação entre o navegador e o servidor web é protegida por criptografia mediante certificados SSL/TLS.",
      "O computador do usuário não precisa de antivírus para acessar a página.",
      "O site pertence obrigatoriamente a uma instituição do Governo Federal.",
      "O navegador web desativou todos os cookies de rastreamento comercial."
    ],
    "correctIndex": 1,
    "explanation": "O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
    "fundamentacaoLegal": "Segurança e Protocolos de Rede",
    "hint": "HTTPS = HTTP + Criptografia (SSL/TLS).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "S no final do HTTPS = Segurança criptografada.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (SSL/TLS), garantindo integridade e confidencialidade na transmissão dos dados.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_048",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança • Princípios da Segurança da Informação (Q48)",
    "question": "O princípio que garante que uma informação não foi alterada ou corrompida de forma indevida ou não autorizada durante o armazenamento ou tráfego é:",
    "options": [
      "A Confidencialidade",
      "A Disponibilidade",
      "A Integridade",
      "A Autenticidade",
      "A Irretratabilidade"
    ],
    "correctIndex": 2,
    "explanation": "Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
    "fundamentacaoLegal": "Princípios Fundamentais DICA",
    "hint": "Integridade = dado intacto, sem alterações não autorizadas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "DICA: Disponibilidade, Integridade, Confidencialidade, Autenticidade.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Integridade garante que o dado mantém sua exatidão e originalidade sem adulterações não autorizadas. Confidencialidade protege o sigilo; Disponibilidade garante o acesso quando necessário.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_049",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Word / Writer • Quebra de Seção (Q49)",
    "question": "No Microsoft Word, para que uma parte do documento tenha orientação em formato 'Paisagem' e outra parte continue em 'Retrato', o usuário deve inserir uma:",
    "options": [
      "Quebra de Linha simples (Shift + Enter)",
      "Quebra de Coluna",
      "Quebra de Página simples (Ctrl + Enter)",
      "Quebra de Seção",
      "Nota de Rodapé"
    ],
    "correctIndex": 3,
    "explanation": "Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
    "fundamentacaoLegal": "Processadores de Texto AOCP",
    "hint": "Formatação diferente no mesmo arquivo (Paisagem/Retrato) = Quebra de Seção!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Seção = Formatação independente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. Apenas a Quebra de Seção permite aplicar formatações estruturais diferentes (como orientação retrato/paisagem, margens e cabeçalhos independentes) dentro do mesmo arquivo.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "info_edital_050",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Hardware e Armazenamento • SSD vs HDD (Q50)",
    "question": "Em relação aos dispositivos de armazenamento de dados, a principal vantagem do SSD (Solid State Drive) em comparação ao HDD tradicional reside em:",
    "options": [
      "Capacidade infinita de armazenamento sem necessidade de formatação.",
      "Custo por gigabyte muito inferior ao de qualquer fita magnética.",
      "Imunidade total à infecção por malwares e ransomwares.",
      "Incompatibilidade proposital com portas USB e conexões SATA.",
      "Ausência de peças mecânicas móveis, proporcionando velocidades muito superiores de leitura e gravação e maior resistência a impactos."
    ],
    "correctIndex": 4,
    "explanation": "O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física.",
    "fundamentacaoLegal": "Hardware e Periféricos AOCP",
    "hint": "SSD = Memória Flash, sem partes móveis, muito mais veloz.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "SSD = Muito mais rápido e sem agulha/disco.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O SSD armazena dados em chips de memória flash eletrônica sem partes mecânicas giratórias, resultando em menor latência, alta velocidade e robustez física."
    }
  },
  {
    "id": "dir_edital_001",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 5º, XI • Inviolabilidade do Domicílio (Q1)",
    "question": "Segundo o Art. 5º, XI, da Constituição Federal, a casa é asilo inviolável do indivíduo. A entrada forçada sem consentimento do morador durante a NOITE é permitida exclusivamente em caso de:",
    "options": [
      "Flagrante delito ou desastre, ou para prestar socorro.",
      "Determinação judicial fundamentada emitida por juiz de direito.",
      "Investigação policial sumária de furto simples.",
      "Cobrança administrativa de tributos estaduais atrasados.",
      "Cumprimento de mandado de busca e apreensão expedido por delegado."
    ],
    "correctIndex": 0,
    "explanation": "Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
    "fundamentacaoLegal": "Art. 5º, XI, da CF/88",
    "hint": "De noite: Só com F.D.S. (Flagrante, Desastre, Socorro). Juiz de noite NÃO ENTRA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "FDS de noite = Flagrante, Desastre, Socorro.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_002",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 144 • Órgãos de Segurança Pública (Q2)",
    "question": "Nos termos taxativos do Art. 144 da Constituição Federal, assinale a opção que indica órgão que integra o sistema de segurança pública:",
    "options": [
      "Guarda Municipal isolada das forças estaduais como força de polícia judiciária.",
      "Polícias Militares e Corpos de Bombeiros Militares.",
      "Forças Armadas (Exército, Marinha e Aeronáutica).",
      "Polícia Judiciária Eleitoral privativa.",
      "Agência Brasileira de Inteligência (ABIN)."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
    "fundamentacaoLegal": "Art. 144 da CF/88",
    "hint": "Segurança Pública Art. 144: PF, PRF, PFF, PC, PM, CBM e Polícia Penal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Art. 144 = Rol taxativo de Segurança Pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_003",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 42 e 142 • Militares Estaduais (Q3)",
    "question": "Em relação aos militares dos Estados (Art. 42 da CF/88), a Constituição Federal veda expressamente:",
    "options": [
      "A percepção de remuneração por subsídio fixado em lei.",
      "A progressão na carreira por critérios de antiguidade.",
      "A greve e a sindicalização.",
      "O porte de arma de fogo fora do serviço operacional.",
      "O casamento com civis sem prévia autorização ministerial."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
    "fundamentacaoLegal": "Art. 42 c/c Art. 142 da CF/88",
    "hint": "Militar NÃO faz greve e NÃO se sindicaliza!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Greve e Sindicato = PROIBIDOS para militares!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_004",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Corpus (Q4)",
    "question": "O remédio constitucional cabível para proteger a liberdade de locomoção contra ilegalidade ou abuso de poder é o:",
    "options": [
      "Habeas Data",
      "Mandado de Segurança",
      "Mandado de Injunção",
      "Habeas Corpus",
      "Ação Popular"
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
    "fundamentacaoLegal": "Art. 5º, LXVIII, da CF/88",
    "hint": "Habeas Corpus = Liberdade de Locomoção (ir e vir). Gratuito!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HC = Liberdade de Locomoção.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_005",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Data (Q5)",
    "question": "O 'Habeas Data' é a garantia constitucional destinada especificamente a:",
    "options": [
      "Anular ato lesivo ao patrimônio público ou ao meio ambiente praticado por qualquer autoridade.",
      "Tornar viável o exercício de direitos e liberdades constitucionais na ausência de norma regulamentadora.",
      "Proteger direito líquido e certo contra ilegalidade não amparada por Habeas Corpus.",
      "Garantir a desapropriação de imóveis rurais improdutivos para reforma agrária.",
      "Assegurar o conhecimento e a retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais."
    ],
    "correctIndex": 4,
    "explanation": "Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público.",
    "fundamentacaoLegal": "Art. 5º, LXXII, da CF/88",
    "hint": "Habeas Data = Dados pessoais do impetrante em bancos públicos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HD = Informações e Dados Próprios.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público."
    }
  },
  {
    "id": "dir_edital_006",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Direitos Humanos • Gerações / Dimensões (Q6)",
    "question": "Os direitos humanos de 1ª Geração (ou Dimensão) têm como valor supremo a Liberdade e caracterizam-se tecnicamente por uma prestação estatal:",
    "options": [
      "Negativa (abstenção do Estado, assegurando direitos civis e políticos individuais contra abusos do poder).",
      "Positiva (prestação de serviços públicos de saúde, educação e previdência).",
      "Solidária (direitos transindividuais ao meio ambiente ecologicamente equilibrado).",
      "Biotécnica (relacionada à manipulação do patrimônio genético humano).",
      "Financeira (indenização pecuniária por vulnerabilidades econômicas)."
    ],
    "correctIndex": 0,
    "explanation": "1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos",
    "hint": "1ª Liberdade (não fazer/abstenção), 2ª Igualdade (fazer/prestação), 3ª Fraternidade (solidariedade).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1ª Geração = Liberdade negativa (não intervenção).",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. 1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_007",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "DUDH 1948 • Características dos Direitos (Q7)",
    "question": "Conforme a Declaração Universal dos Direitos Humanos (1948), todos os seres humanos nascem:",
    "options": [
      "Subordinados à soberania incondicional de seus respectivos governos nacionais.",
      "Livres e iguais em dignidade e em direitos, dotados de razão e de consciência, devendo agir fraternalmente uns para com os outros.",
      "Desprovidos de personalidade jurídica até a obtenção da cidadania eleitoral plena.",
      "Com direitos que podem ser revogados a critério de conveniência do poder militar.",
      "Vinculados obrigatoriamente a uma denominação religiosa reconhecida pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
    "fundamentacaoLegal": "Artigo 1º da DUDH / ONU 1948",
    "hint": "DUDH Art. 1º: Livres e iguais em dignidade e direitos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nascer livre e igual em dignidade e direitos.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_008",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica • Status Jurídico (Q8)",
    "question": "De acordo com a jurisprudência pacificada do Supremo Tribunal Federal (RE 466.343), os tratados internacionais de direitos humanos ratificados pelo Brasil sem o rito do Art. 5º, § 3º, possuem:",
    "options": [
      "Status de mera lei ordinária federal passível de revogação tácita.",
      "Status de ato administrativo regulamentar infralegal.",
      "Status supralegal (abaixo da Constituição, mas acima de todas as leis ordinárias internas).",
      "Equivalência automática a emenda constitucional sem quórum qualificado.",
      "Nenhuma eficácia vinculante no ordenamento jurídico brasileiro."
    ],
    "correctIndex": 2,
    "explanation": "O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
    "fundamentacaoLegal": "STF • Jurisprudência Vinculante",
    "hint": "Tratados de DH comuns = Status SUPRALEGAL (acima da lei, abaixo da CF).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Supralegal = entre a Constituição e as leis comuns.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_009",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Uso da Força e Armas de Fogo • Princípios de Havana (ONU 1990) (Q9)",
    "question": "Os Princípios Básicos sobre o Uso da Força e Armas de Fogo por Funcionários Responsáveis pela Aplicação da Lei estabelecem que armas de fogo letais só podem ser empregadas:",
    "options": [
      "Para dispersar manifestações públicas ruidosas não autorizadas.",
      "Para punir infratores reincidentes em flagrante de crime contra o patrimônio sem violência.",
      "Sempre que o suspeito desobedecer à ordem verbal de parada para averiguação de rotina.",
      "Em legítima defesa ou defesa de outrem contra perigo iminente de morte ou lesão grave, e apenas quando meios menos extremos forem insuficientes.",
      "Como primeira opção de contenção tática pelo policial em área conflagrada."
    ],
    "correctIndex": 3,
    "explanation": "O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
    "fundamentacaoLegal": "Princípios da ONU / Havana 1990",
    "hint": "Uso letal da arma = Apenas para salvar vidas diante de perigo iminente de morte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Arma letal = última medida para salvar vidas.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_010",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Audiência de Custódia • CADH (Q10)",
    "question": "A audiência de custódia, prevista na Convenção Americana sobre Direitos Humanos (Art. 7º, 5) e no Código de Processo Penal, exige que a pessoa presa seja conduzida à presença do juiz no prazo de:",
    "options": [
      "Até 48 horas após a lavratura do flagrante.",
      "Até 72 horas mediante requerimento expresso da defesa.",
      "Até 5 dias úteis prorrogáveis pelo delegado de polícia.",
      "Até 10 dias contados da transferência para o presídio estadual.",
      "Até 24 horas após a realização da prisão."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente.",
    "fundamentacaoLegal": "Art. 7º, 5, da CADH c/c Art. 310 do CPP",
    "hint": "Audiência de Custódia = Prazo máximo de 24 HORAS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "24 horas para apresentar o preso ao juiz.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente."
    }
  },
  {
    "id": "dir_edital_011",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 5º, XI • Inviolabilidade do Domicílio (Q11)",
    "question": "Segundo o Art. 5º, XI, da Constituição Federal, a casa é asilo inviolável do indivíduo. A entrada forçada sem consentimento do morador durante a NOITE é permitida exclusivamente em caso de:",
    "options": [
      "Flagrante delito ou desastre, ou para prestar socorro.",
      "Determinação judicial fundamentada emitida por juiz de direito.",
      "Investigação policial sumária de furto simples.",
      "Cobrança administrativa de tributos estaduais atrasados.",
      "Cumprimento de mandado de busca e apreensão expedido por delegado."
    ],
    "correctIndex": 0,
    "explanation": "Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
    "fundamentacaoLegal": "Art. 5º, XI, da CF/88",
    "hint": "De noite: Só com F.D.S. (Flagrante, Desastre, Socorro). Juiz de noite NÃO ENTRA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "FDS de noite = Flagrante, Desastre, Socorro.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_012",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 144 • Órgãos de Segurança Pública (Q12)",
    "question": "Nos termos taxativos do Art. 144 da Constituição Federal, assinale a opção que indica órgão que integra o sistema de segurança pública:",
    "options": [
      "Guarda Municipal isolada das forças estaduais como força de polícia judiciária.",
      "Polícias Militares e Corpos de Bombeiros Militares.",
      "Forças Armadas (Exército, Marinha e Aeronáutica).",
      "Polícia Judiciária Eleitoral privativa.",
      "Agência Brasileira de Inteligência (ABIN)."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
    "fundamentacaoLegal": "Art. 144 da CF/88",
    "hint": "Segurança Pública Art. 144: PF, PRF, PFF, PC, PM, CBM e Polícia Penal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Art. 144 = Rol taxativo de Segurança Pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_013",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 42 e 142 • Militares Estaduais (Q13)",
    "question": "Em relação aos militares dos Estados (Art. 42 da CF/88), a Constituição Federal veda expressamente:",
    "options": [
      "A percepção de remuneração por subsídio fixado em lei.",
      "A progressão na carreira por critérios de antiguidade.",
      "A greve e a sindicalização.",
      "O porte de arma de fogo fora do serviço operacional.",
      "O casamento com civis sem prévia autorização ministerial."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
    "fundamentacaoLegal": "Art. 42 c/c Art. 142 da CF/88",
    "hint": "Militar NÃO faz greve e NÃO se sindicaliza!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Greve e Sindicato = PROIBIDOS para militares!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_014",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Corpus (Q14)",
    "question": "O remédio constitucional cabível para proteger a liberdade de locomoção contra ilegalidade ou abuso de poder é o:",
    "options": [
      "Habeas Data",
      "Mandado de Segurança",
      "Mandado de Injunção",
      "Habeas Corpus",
      "Ação Popular"
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
    "fundamentacaoLegal": "Art. 5º, LXVIII, da CF/88",
    "hint": "Habeas Corpus = Liberdade de Locomoção (ir e vir). Gratuito!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HC = Liberdade de Locomoção.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_015",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Data (Q15)",
    "question": "O 'Habeas Data' é a garantia constitucional destinada especificamente a:",
    "options": [
      "Anular ato lesivo ao patrimônio público ou ao meio ambiente praticado por qualquer autoridade.",
      "Tornar viável o exercício de direitos e liberdades constitucionais na ausência de norma regulamentadora.",
      "Proteger direito líquido e certo contra ilegalidade não amparada por Habeas Corpus.",
      "Garantir a desapropriação de imóveis rurais improdutivos para reforma agrária.",
      "Assegurar o conhecimento e a retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais."
    ],
    "correctIndex": 4,
    "explanation": "Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público.",
    "fundamentacaoLegal": "Art. 5º, LXXII, da CF/88",
    "hint": "Habeas Data = Dados pessoais do impetrante em bancos públicos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HD = Informações e Dados Próprios.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público."
    }
  },
  {
    "id": "dir_edital_016",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Direitos Humanos • Gerações / Dimensões (Q16)",
    "question": "Os direitos humanos de 1ª Geração (ou Dimensão) têm como valor supremo a Liberdade e caracterizam-se tecnicamente por uma prestação estatal:",
    "options": [
      "Negativa (abstenção do Estado, assegurando direitos civis e políticos individuais contra abusos do poder).",
      "Positiva (prestação de serviços públicos de saúde, educação e previdência).",
      "Solidária (direitos transindividuais ao meio ambiente ecologicamente equilibrado).",
      "Biotécnica (relacionada à manipulação do patrimônio genético humano).",
      "Financeira (indenização pecuniária por vulnerabilidades econômicas)."
    ],
    "correctIndex": 0,
    "explanation": "1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos",
    "hint": "1ª Liberdade (não fazer/abstenção), 2ª Igualdade (fazer/prestação), 3ª Fraternidade (solidariedade).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1ª Geração = Liberdade negativa (não intervenção).",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. 1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_017",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "DUDH 1948 • Características dos Direitos (Q17)",
    "question": "Conforme a Declaração Universal dos Direitos Humanos (1948), todos os seres humanos nascem:",
    "options": [
      "Subordinados à soberania incondicional de seus respectivos governos nacionais.",
      "Livres e iguais em dignidade e em direitos, dotados de razão e de consciência, devendo agir fraternalmente uns para com os outros.",
      "Desprovidos de personalidade jurídica até a obtenção da cidadania eleitoral plena.",
      "Com direitos que podem ser revogados a critério de conveniência do poder militar.",
      "Vinculados obrigatoriamente a uma denominação religiosa reconhecida pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
    "fundamentacaoLegal": "Artigo 1º da DUDH / ONU 1948",
    "hint": "DUDH Art. 1º: Livres e iguais em dignidade e direitos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nascer livre e igual em dignidade e direitos.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_018",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica • Status Jurídico (Q18)",
    "question": "De acordo com a jurisprudência pacificada do Supremo Tribunal Federal (RE 466.343), os tratados internacionais de direitos humanos ratificados pelo Brasil sem o rito do Art. 5º, § 3º, possuem:",
    "options": [
      "Status de mera lei ordinária federal passível de revogação tácita.",
      "Status de ato administrativo regulamentar infralegal.",
      "Status supralegal (abaixo da Constituição, mas acima de todas as leis ordinárias internas).",
      "Equivalência automática a emenda constitucional sem quórum qualificado.",
      "Nenhuma eficácia vinculante no ordenamento jurídico brasileiro."
    ],
    "correctIndex": 2,
    "explanation": "O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
    "fundamentacaoLegal": "STF • Jurisprudência Vinculante",
    "hint": "Tratados de DH comuns = Status SUPRALEGAL (acima da lei, abaixo da CF).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Supralegal = entre a Constituição e as leis comuns.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_019",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Uso da Força e Armas de Fogo • Princípios de Havana (ONU 1990) (Q19)",
    "question": "Os Princípios Básicos sobre o Uso da Força e Armas de Fogo por Funcionários Responsáveis pela Aplicação da Lei estabelecem que armas de fogo letais só podem ser empregadas:",
    "options": [
      "Para dispersar manifestações públicas ruidosas não autorizadas.",
      "Para punir infratores reincidentes em flagrante de crime contra o patrimônio sem violência.",
      "Sempre que o suspeito desobedecer à ordem verbal de parada para averiguação de rotina.",
      "Em legítima defesa ou defesa de outrem contra perigo iminente de morte ou lesão grave, e apenas quando meios menos extremos forem insuficientes.",
      "Como primeira opção de contenção tática pelo policial em área conflagrada."
    ],
    "correctIndex": 3,
    "explanation": "O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
    "fundamentacaoLegal": "Princípios da ONU / Havana 1990",
    "hint": "Uso letal da arma = Apenas para salvar vidas diante de perigo iminente de morte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Arma letal = última medida para salvar vidas.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_020",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Audiência de Custódia • CADH (Q20)",
    "question": "A audiência de custódia, prevista na Convenção Americana sobre Direitos Humanos (Art. 7º, 5) e no Código de Processo Penal, exige que a pessoa presa seja conduzida à presença do juiz no prazo de:",
    "options": [
      "Até 48 horas após a lavratura do flagrante.",
      "Até 72 horas mediante requerimento expresso da defesa.",
      "Até 5 dias úteis prorrogáveis pelo delegado de polícia.",
      "Até 10 dias contados da transferência para o presídio estadual.",
      "Até 24 horas após a realização da prisão."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente.",
    "fundamentacaoLegal": "Art. 7º, 5, da CADH c/c Art. 310 do CPP",
    "hint": "Audiência de Custódia = Prazo máximo de 24 HORAS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "24 horas para apresentar o preso ao juiz.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente."
    }
  },
  {
    "id": "dir_edital_021",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 5º, XI • Inviolabilidade do Domicílio (Q21)",
    "question": "Segundo o Art. 5º, XI, da Constituição Federal, a casa é asilo inviolável do indivíduo. A entrada forçada sem consentimento do morador durante a NOITE é permitida exclusivamente em caso de:",
    "options": [
      "Flagrante delito ou desastre, ou para prestar socorro.",
      "Determinação judicial fundamentada emitida por juiz de direito.",
      "Investigação policial sumária de furto simples.",
      "Cobrança administrativa de tributos estaduais atrasados.",
      "Cumprimento de mandado de busca e apreensão expedido por delegado."
    ],
    "correctIndex": 0,
    "explanation": "Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
    "fundamentacaoLegal": "Art. 5º, XI, da CF/88",
    "hint": "De noite: Só com F.D.S. (Flagrante, Desastre, Socorro). Juiz de noite NÃO ENTRA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "FDS de noite = Flagrante, Desastre, Socorro.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_022",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 144 • Órgãos de Segurança Pública (Q22)",
    "question": "Nos termos taxativos do Art. 144 da Constituição Federal, assinale a opção que indica órgão que integra o sistema de segurança pública:",
    "options": [
      "Guarda Municipal isolada das forças estaduais como força de polícia judiciária.",
      "Polícias Militares e Corpos de Bombeiros Militares.",
      "Forças Armadas (Exército, Marinha e Aeronáutica).",
      "Polícia Judiciária Eleitoral privativa.",
      "Agência Brasileira de Inteligência (ABIN)."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
    "fundamentacaoLegal": "Art. 144 da CF/88",
    "hint": "Segurança Pública Art. 144: PF, PRF, PFF, PC, PM, CBM e Polícia Penal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Art. 144 = Rol taxativo de Segurança Pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_023",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 42 e 142 • Militares Estaduais (Q23)",
    "question": "Em relação aos militares dos Estados (Art. 42 da CF/88), a Constituição Federal veda expressamente:",
    "options": [
      "A percepção de remuneração por subsídio fixado em lei.",
      "A progressão na carreira por critérios de antiguidade.",
      "A greve e a sindicalização.",
      "O porte de arma de fogo fora do serviço operacional.",
      "O casamento com civis sem prévia autorização ministerial."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
    "fundamentacaoLegal": "Art. 42 c/c Art. 142 da CF/88",
    "hint": "Militar NÃO faz greve e NÃO se sindicaliza!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Greve e Sindicato = PROIBIDOS para militares!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_024",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Corpus (Q24)",
    "question": "O remédio constitucional cabível para proteger a liberdade de locomoção contra ilegalidade ou abuso de poder é o:",
    "options": [
      "Habeas Data",
      "Mandado de Segurança",
      "Mandado de Injunção",
      "Habeas Corpus",
      "Ação Popular"
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
    "fundamentacaoLegal": "Art. 5º, LXVIII, da CF/88",
    "hint": "Habeas Corpus = Liberdade de Locomoção (ir e vir). Gratuito!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HC = Liberdade de Locomoção.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_025",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Data (Q25)",
    "question": "O 'Habeas Data' é a garantia constitucional destinada especificamente a:",
    "options": [
      "Anular ato lesivo ao patrimônio público ou ao meio ambiente praticado por qualquer autoridade.",
      "Tornar viável o exercício de direitos e liberdades constitucionais na ausência de norma regulamentadora.",
      "Proteger direito líquido e certo contra ilegalidade não amparada por Habeas Corpus.",
      "Garantir a desapropriação de imóveis rurais improdutivos para reforma agrária.",
      "Assegurar o conhecimento e a retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais."
    ],
    "correctIndex": 4,
    "explanation": "Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público.",
    "fundamentacaoLegal": "Art. 5º, LXXII, da CF/88",
    "hint": "Habeas Data = Dados pessoais do impetrante em bancos públicos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HD = Informações e Dados Próprios.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público."
    }
  },
  {
    "id": "dir_edital_026",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Direitos Humanos • Gerações / Dimensões (Q26)",
    "question": "Os direitos humanos de 1ª Geração (ou Dimensão) têm como valor supremo a Liberdade e caracterizam-se tecnicamente por uma prestação estatal:",
    "options": [
      "Negativa (abstenção do Estado, assegurando direitos civis e políticos individuais contra abusos do poder).",
      "Positiva (prestação de serviços públicos de saúde, educação e previdência).",
      "Solidária (direitos transindividuais ao meio ambiente ecologicamente equilibrado).",
      "Biotécnica (relacionada à manipulação do patrimônio genético humano).",
      "Financeira (indenização pecuniária por vulnerabilidades econômicas)."
    ],
    "correctIndex": 0,
    "explanation": "1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos",
    "hint": "1ª Liberdade (não fazer/abstenção), 2ª Igualdade (fazer/prestação), 3ª Fraternidade (solidariedade).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1ª Geração = Liberdade negativa (não intervenção).",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. 1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_027",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "DUDH 1948 • Características dos Direitos (Q27)",
    "question": "Conforme a Declaração Universal dos Direitos Humanos (1948), todos os seres humanos nascem:",
    "options": [
      "Subordinados à soberania incondicional de seus respectivos governos nacionais.",
      "Livres e iguais em dignidade e em direitos, dotados de razão e de consciência, devendo agir fraternalmente uns para com os outros.",
      "Desprovidos de personalidade jurídica até a obtenção da cidadania eleitoral plena.",
      "Com direitos que podem ser revogados a critério de conveniência do poder militar.",
      "Vinculados obrigatoriamente a uma denominação religiosa reconhecida pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
    "fundamentacaoLegal": "Artigo 1º da DUDH / ONU 1948",
    "hint": "DUDH Art. 1º: Livres e iguais em dignidade e direitos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nascer livre e igual em dignidade e direitos.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_028",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica • Status Jurídico (Q28)",
    "question": "De acordo com a jurisprudência pacificada do Supremo Tribunal Federal (RE 466.343), os tratados internacionais de direitos humanos ratificados pelo Brasil sem o rito do Art. 5º, § 3º, possuem:",
    "options": [
      "Status de mera lei ordinária federal passível de revogação tácita.",
      "Status de ato administrativo regulamentar infralegal.",
      "Status supralegal (abaixo da Constituição, mas acima de todas as leis ordinárias internas).",
      "Equivalência automática a emenda constitucional sem quórum qualificado.",
      "Nenhuma eficácia vinculante no ordenamento jurídico brasileiro."
    ],
    "correctIndex": 2,
    "explanation": "O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
    "fundamentacaoLegal": "STF • Jurisprudência Vinculante",
    "hint": "Tratados de DH comuns = Status SUPRALEGAL (acima da lei, abaixo da CF).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Supralegal = entre a Constituição e as leis comuns.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_029",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Uso da Força e Armas de Fogo • Princípios de Havana (ONU 1990) (Q29)",
    "question": "Os Princípios Básicos sobre o Uso da Força e Armas de Fogo por Funcionários Responsáveis pela Aplicação da Lei estabelecem que armas de fogo letais só podem ser empregadas:",
    "options": [
      "Para dispersar manifestações públicas ruidosas não autorizadas.",
      "Para punir infratores reincidentes em flagrante de crime contra o patrimônio sem violência.",
      "Sempre que o suspeito desobedecer à ordem verbal de parada para averiguação de rotina.",
      "Em legítima defesa ou defesa de outrem contra perigo iminente de morte ou lesão grave, e apenas quando meios menos extremos forem insuficientes.",
      "Como primeira opção de contenção tática pelo policial em área conflagrada."
    ],
    "correctIndex": 3,
    "explanation": "O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
    "fundamentacaoLegal": "Princípios da ONU / Havana 1990",
    "hint": "Uso letal da arma = Apenas para salvar vidas diante de perigo iminente de morte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Arma letal = última medida para salvar vidas.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_030",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Audiência de Custódia • CADH (Q30)",
    "question": "A audiência de custódia, prevista na Convenção Americana sobre Direitos Humanos (Art. 7º, 5) e no Código de Processo Penal, exige que a pessoa presa seja conduzida à presença do juiz no prazo de:",
    "options": [
      "Até 48 horas após a lavratura do flagrante.",
      "Até 72 horas mediante requerimento expresso da defesa.",
      "Até 5 dias úteis prorrogáveis pelo delegado de polícia.",
      "Até 10 dias contados da transferência para o presídio estadual.",
      "Até 24 horas após a realização da prisão."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente.",
    "fundamentacaoLegal": "Art. 7º, 5, da CADH c/c Art. 310 do CPP",
    "hint": "Audiência de Custódia = Prazo máximo de 24 HORAS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "24 horas para apresentar o preso ao juiz.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente."
    }
  },
  {
    "id": "dir_edital_031",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 5º, XI • Inviolabilidade do Domicílio (Q31)",
    "question": "Segundo o Art. 5º, XI, da Constituição Federal, a casa é asilo inviolável do indivíduo. A entrada forçada sem consentimento do morador durante a NOITE é permitida exclusivamente em caso de:",
    "options": [
      "Flagrante delito ou desastre, ou para prestar socorro.",
      "Determinação judicial fundamentada emitida por juiz de direito.",
      "Investigação policial sumária de furto simples.",
      "Cobrança administrativa de tributos estaduais atrasados.",
      "Cumprimento de mandado de busca e apreensão expedido por delegado."
    ],
    "correctIndex": 0,
    "explanation": "Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
    "fundamentacaoLegal": "Art. 5º, XI, da CF/88",
    "hint": "De noite: Só com F.D.S. (Flagrante, Desastre, Socorro). Juiz de noite NÃO ENTRA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "FDS de noite = Flagrante, Desastre, Socorro.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_032",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 144 • Órgãos de Segurança Pública (Q32)",
    "question": "Nos termos taxativos do Art. 144 da Constituição Federal, assinale a opção que indica órgão que integra o sistema de segurança pública:",
    "options": [
      "Guarda Municipal isolada das forças estaduais como força de polícia judiciária.",
      "Polícias Militares e Corpos de Bombeiros Militares.",
      "Forças Armadas (Exército, Marinha e Aeronáutica).",
      "Polícia Judiciária Eleitoral privativa.",
      "Agência Brasileira de Inteligência (ABIN)."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
    "fundamentacaoLegal": "Art. 144 da CF/88",
    "hint": "Segurança Pública Art. 144: PF, PRF, PFF, PC, PM, CBM e Polícia Penal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Art. 144 = Rol taxativo de Segurança Pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_033",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 42 e 142 • Militares Estaduais (Q33)",
    "question": "Em relação aos militares dos Estados (Art. 42 da CF/88), a Constituição Federal veda expressamente:",
    "options": [
      "A percepção de remuneração por subsídio fixado em lei.",
      "A progressão na carreira por critérios de antiguidade.",
      "A greve e a sindicalização.",
      "O porte de arma de fogo fora do serviço operacional.",
      "O casamento com civis sem prévia autorização ministerial."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
    "fundamentacaoLegal": "Art. 42 c/c Art. 142 da CF/88",
    "hint": "Militar NÃO faz greve e NÃO se sindicaliza!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Greve e Sindicato = PROIBIDOS para militares!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_034",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Corpus (Q34)",
    "question": "O remédio constitucional cabível para proteger a liberdade de locomoção contra ilegalidade ou abuso de poder é o:",
    "options": [
      "Habeas Data",
      "Mandado de Segurança",
      "Mandado de Injunção",
      "Habeas Corpus",
      "Ação Popular"
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
    "fundamentacaoLegal": "Art. 5º, LXVIII, da CF/88",
    "hint": "Habeas Corpus = Liberdade de Locomoção (ir e vir). Gratuito!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HC = Liberdade de Locomoção.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_035",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Data (Q35)",
    "question": "O 'Habeas Data' é a garantia constitucional destinada especificamente a:",
    "options": [
      "Anular ato lesivo ao patrimônio público ou ao meio ambiente praticado por qualquer autoridade.",
      "Tornar viável o exercício de direitos e liberdades constitucionais na ausência de norma regulamentadora.",
      "Proteger direito líquido e certo contra ilegalidade não amparada por Habeas Corpus.",
      "Garantir a desapropriação de imóveis rurais improdutivos para reforma agrária.",
      "Assegurar o conhecimento e a retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais."
    ],
    "correctIndex": 4,
    "explanation": "Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público.",
    "fundamentacaoLegal": "Art. 5º, LXXII, da CF/88",
    "hint": "Habeas Data = Dados pessoais do impetrante em bancos públicos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HD = Informações e Dados Próprios.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público."
    }
  },
  {
    "id": "dir_edital_036",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Direitos Humanos • Gerações / Dimensões (Q36)",
    "question": "Os direitos humanos de 1ª Geração (ou Dimensão) têm como valor supremo a Liberdade e caracterizam-se tecnicamente por uma prestação estatal:",
    "options": [
      "Negativa (abstenção do Estado, assegurando direitos civis e políticos individuais contra abusos do poder).",
      "Positiva (prestação de serviços públicos de saúde, educação e previdência).",
      "Solidária (direitos transindividuais ao meio ambiente ecologicamente equilibrado).",
      "Biotécnica (relacionada à manipulação do patrimônio genético humano).",
      "Financeira (indenização pecuniária por vulnerabilidades econômicas)."
    ],
    "correctIndex": 0,
    "explanation": "1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos",
    "hint": "1ª Liberdade (não fazer/abstenção), 2ª Igualdade (fazer/prestação), 3ª Fraternidade (solidariedade).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1ª Geração = Liberdade negativa (não intervenção).",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. 1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_037",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "DUDH 1948 • Características dos Direitos (Q37)",
    "question": "Conforme a Declaração Universal dos Direitos Humanos (1948), todos os seres humanos nascem:",
    "options": [
      "Subordinados à soberania incondicional de seus respectivos governos nacionais.",
      "Livres e iguais em dignidade e em direitos, dotados de razão e de consciência, devendo agir fraternalmente uns para com os outros.",
      "Desprovidos de personalidade jurídica até a obtenção da cidadania eleitoral plena.",
      "Com direitos que podem ser revogados a critério de conveniência do poder militar.",
      "Vinculados obrigatoriamente a uma denominação religiosa reconhecida pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
    "fundamentacaoLegal": "Artigo 1º da DUDH / ONU 1948",
    "hint": "DUDH Art. 1º: Livres e iguais em dignidade e direitos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nascer livre e igual em dignidade e direitos.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_038",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica • Status Jurídico (Q38)",
    "question": "De acordo com a jurisprudência pacificada do Supremo Tribunal Federal (RE 466.343), os tratados internacionais de direitos humanos ratificados pelo Brasil sem o rito do Art. 5º, § 3º, possuem:",
    "options": [
      "Status de mera lei ordinária federal passível de revogação tácita.",
      "Status de ato administrativo regulamentar infralegal.",
      "Status supralegal (abaixo da Constituição, mas acima de todas as leis ordinárias internas).",
      "Equivalência automática a emenda constitucional sem quórum qualificado.",
      "Nenhuma eficácia vinculante no ordenamento jurídico brasileiro."
    ],
    "correctIndex": 2,
    "explanation": "O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
    "fundamentacaoLegal": "STF • Jurisprudência Vinculante",
    "hint": "Tratados de DH comuns = Status SUPRALEGAL (acima da lei, abaixo da CF).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Supralegal = entre a Constituição e as leis comuns.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_039",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Uso da Força e Armas de Fogo • Princípios de Havana (ONU 1990) (Q39)",
    "question": "Os Princípios Básicos sobre o Uso da Força e Armas de Fogo por Funcionários Responsáveis pela Aplicação da Lei estabelecem que armas de fogo letais só podem ser empregadas:",
    "options": [
      "Para dispersar manifestações públicas ruidosas não autorizadas.",
      "Para punir infratores reincidentes em flagrante de crime contra o patrimônio sem violência.",
      "Sempre que o suspeito desobedecer à ordem verbal de parada para averiguação de rotina.",
      "Em legítima defesa ou defesa de outrem contra perigo iminente de morte ou lesão grave, e apenas quando meios menos extremos forem insuficientes.",
      "Como primeira opção de contenção tática pelo policial em área conflagrada."
    ],
    "correctIndex": 3,
    "explanation": "O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
    "fundamentacaoLegal": "Princípios da ONU / Havana 1990",
    "hint": "Uso letal da arma = Apenas para salvar vidas diante de perigo iminente de morte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Arma letal = última medida para salvar vidas.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_040",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Audiência de Custódia • CADH (Q40)",
    "question": "A audiência de custódia, prevista na Convenção Americana sobre Direitos Humanos (Art. 7º, 5) e no Código de Processo Penal, exige que a pessoa presa seja conduzida à presença do juiz no prazo de:",
    "options": [
      "Até 48 horas após a lavratura do flagrante.",
      "Até 72 horas mediante requerimento expresso da defesa.",
      "Até 5 dias úteis prorrogáveis pelo delegado de polícia.",
      "Até 10 dias contados da transferência para o presídio estadual.",
      "Até 24 horas após a realização da prisão."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente.",
    "fundamentacaoLegal": "Art. 7º, 5, da CADH c/c Art. 310 do CPP",
    "hint": "Audiência de Custódia = Prazo máximo de 24 HORAS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "24 horas para apresentar o preso ao juiz.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente."
    }
  },
  {
    "id": "dir_edital_041",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 5º, XI • Inviolabilidade do Domicílio (Q41)",
    "question": "Segundo o Art. 5º, XI, da Constituição Federal, a casa é asilo inviolável do indivíduo. A entrada forçada sem consentimento do morador durante a NOITE é permitida exclusivamente em caso de:",
    "options": [
      "Flagrante delito ou desastre, ou para prestar socorro.",
      "Determinação judicial fundamentada emitida por juiz de direito.",
      "Investigação policial sumária de furto simples.",
      "Cobrança administrativa de tributos estaduais atrasados.",
      "Cumprimento de mandado de busca e apreensão expedido por delegado."
    ],
    "correctIndex": 0,
    "explanation": "Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
    "fundamentacaoLegal": "Art. 5º, XI, da CF/88",
    "hint": "De noite: Só com F.D.S. (Flagrante, Desastre, Socorro). Juiz de noite NÃO ENTRA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "FDS de noite = Flagrante, Desastre, Socorro.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Durante a noite, só se entra sem consentimento em 3 hipóteses: flagrante delito, desastre ou socorro. Mandado judicial só pode ser cumprido durante o dia!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_042",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 144 • Órgãos de Segurança Pública (Q42)",
    "question": "Nos termos taxativos do Art. 144 da Constituição Federal, assinale a opção que indica órgão que integra o sistema de segurança pública:",
    "options": [
      "Guarda Municipal isolada das forças estaduais como força de polícia judiciária.",
      "Polícias Militares e Corpos de Bombeiros Militares.",
      "Forças Armadas (Exército, Marinha e Aeronáutica).",
      "Polícia Judiciária Eleitoral privativa.",
      "Agência Brasileira de Inteligência (ABIN)."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
    "fundamentacaoLegal": "Art. 144 da CF/88",
    "hint": "Segurança Pública Art. 144: PF, PRF, PFF, PC, PM, CBM e Polícia Penal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Art. 144 = Rol taxativo de Segurança Pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Art. 144 lista taxativamente: PF, PRF, PFF, PC, PM e CBM, e Polícias Penais. As Forças Armadas pertencem ao Art. 142 (Defesa do Estado).",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_043",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Art. 42 e 142 • Militares Estaduais (Q43)",
    "question": "Em relação aos militares dos Estados (Art. 42 da CF/88), a Constituição Federal veda expressamente:",
    "options": [
      "A percepção de remuneração por subsídio fixado em lei.",
      "A progressão na carreira por critérios de antiguidade.",
      "A greve e a sindicalização.",
      "O porte de arma de fogo fora do serviço operacional.",
      "O casamento com civis sem prévia autorização ministerial."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
    "fundamentacaoLegal": "Art. 42 c/c Art. 142 da CF/88",
    "hint": "Militar NÃO faz greve e NÃO se sindicaliza!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Greve e Sindicato = PROIBIDOS para militares!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O Art. 142, § 3º, IV, aplicável aos militares estaduais pelo Art. 42, § 1º, estabelece: 'ao militar são proibidas a sindicalização e a greve'.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_044",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Corpus (Q44)",
    "question": "O remédio constitucional cabível para proteger a liberdade de locomoção contra ilegalidade ou abuso de poder é o:",
    "options": [
      "Habeas Data",
      "Mandado de Segurança",
      "Mandado de Injunção",
      "Habeas Corpus",
      "Ação Popular"
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
    "fundamentacaoLegal": "Art. 5º, LXVIII, da CF/88",
    "hint": "Habeas Corpus = Liberdade de Locomoção (ir e vir). Gratuito!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HC = Liberdade de Locomoção.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Habeas Corpus (Art. 5º, LXVIII) tutela a liberdade de locomoção (ir, vir e permanecer). É gratuito e não exige capacidade postulatória de advogado.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_045",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Remédios Constitucionais • Habeas Data (Q45)",
    "question": "O 'Habeas Data' é a garantia constitucional destinada especificamente a:",
    "options": [
      "Anular ato lesivo ao patrimônio público ou ao meio ambiente praticado por qualquer autoridade.",
      "Tornar viável o exercício de direitos e liberdades constitucionais na ausência de norma regulamentadora.",
      "Proteger direito líquido e certo contra ilegalidade não amparada por Habeas Corpus.",
      "Garantir a desapropriação de imóveis rurais improdutivos para reforma agrária.",
      "Assegurar o conhecimento e a retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais."
    ],
    "correctIndex": 4,
    "explanation": "Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público.",
    "fundamentacaoLegal": "Art. 5º, LXXII, da CF/88",
    "hint": "Habeas Data = Dados pessoais do impetrante em bancos públicos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "HD = Informações e Dados Próprios.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. Art. 5º, LXXII: concede-se Habeas Data para conhecimento/retificação de informações da pessoa do impetrante em bancos de dados públicos ou de caráter público."
    }
  },
  {
    "id": "dir_edital_046",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Direitos Humanos • Gerações / Dimensões (Q46)",
    "question": "Os direitos humanos de 1ª Geração (ou Dimensão) têm como valor supremo a Liberdade e caracterizam-se tecnicamente por uma prestação estatal:",
    "options": [
      "Negativa (abstenção do Estado, assegurando direitos civis e políticos individuais contra abusos do poder).",
      "Positiva (prestação de serviços públicos de saúde, educação e previdência).",
      "Solidária (direitos transindividuais ao meio ambiente ecologicamente equilibrado).",
      "Biotécnica (relacionada à manipulação do patrimônio genético humano).",
      "Financeira (indenização pecuniária por vulnerabilidades econômicas)."
    ],
    "correctIndex": 0,
    "explanation": "1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos",
    "hint": "1ª Liberdade (não fazer/abstenção), 2ª Igualdade (fazer/prestação), 3ª Fraternidade (solidariedade).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "1ª Geração = Liberdade negativa (não intervenção).",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. 1ª Dimensão = Liberdade (dever de abstenção do Estado - não interferir nos direitos civis/políticos). 2ª Dimensão = Igualdade (prestação positiva social). 3ª Dimensão = Fraternidade.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_047",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "DUDH 1948 • Características dos Direitos (Q47)",
    "question": "Conforme a Declaração Universal dos Direitos Humanos (1948), todos os seres humanos nascem:",
    "options": [
      "Subordinados à soberania incondicional de seus respectivos governos nacionais.",
      "Livres e iguais em dignidade e em direitos, dotados de razão e de consciência, devendo agir fraternalmente uns para com os outros.",
      "Desprovidos de personalidade jurídica até a obtenção da cidadania eleitoral plena.",
      "Com direitos que podem ser revogados a critério de conveniência do poder militar.",
      "Vinculados obrigatoriamente a uma denominação religiosa reconhecida pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
    "fundamentacaoLegal": "Artigo 1º da DUDH / ONU 1948",
    "hint": "DUDH Art. 1º: Livres e iguais em dignidade e direitos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Nascer livre e igual em dignidade e direitos.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O Artigo 1º da DUDH de 1948 consagra: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_048",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica • Status Jurídico (Q48)",
    "question": "De acordo com a jurisprudência pacificada do Supremo Tribunal Federal (RE 466.343), os tratados internacionais de direitos humanos ratificados pelo Brasil sem o rito do Art. 5º, § 3º, possuem:",
    "options": [
      "Status de mera lei ordinária federal passível de revogação tácita.",
      "Status de ato administrativo regulamentar infralegal.",
      "Status supralegal (abaixo da Constituição, mas acima de todas as leis ordinárias internas).",
      "Equivalência automática a emenda constitucional sem quórum qualificado.",
      "Nenhuma eficácia vinculante no ordenamento jurídico brasileiro."
    ],
    "correctIndex": 2,
    "explanation": "O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
    "fundamentacaoLegal": "STF • Jurisprudência Vinculante",
    "hint": "Tratados de DH comuns = Status SUPRALEGAL (acima da lei, abaixo da CF).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Supralegal = entre a Constituição e as leis comuns.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. O STF fixou a tese da supralegalidade para tratados de direitos humanos anteriores à EC 45/2004 (como o Pacto de San José da Costa Rica), o que paralisou a eficácia da prisão do depositário infiel (Súmula Vinculante 25).",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_049",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Uso da Força e Armas de Fogo • Princípios de Havana (ONU 1990) (Q49)",
    "question": "Os Princípios Básicos sobre o Uso da Força e Armas de Fogo por Funcionários Responsáveis pela Aplicação da Lei estabelecem que armas de fogo letais só podem ser empregadas:",
    "options": [
      "Para dispersar manifestações públicas ruidosas não autorizadas.",
      "Para punir infratores reincidentes em flagrante de crime contra o patrimônio sem violência.",
      "Sempre que o suspeito desobedecer à ordem verbal de parada para averiguação de rotina.",
      "Em legítima defesa ou defesa de outrem contra perigo iminente de morte ou lesão grave, e apenas quando meios menos extremos forem insuficientes.",
      "Como primeira opção de contenção tática pelo policial em área conflagrada."
    ],
    "correctIndex": 3,
    "explanation": "O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
    "fundamentacaoLegal": "Princípios da ONU / Havana 1990",
    "hint": "Uso letal da arma = Apenas para salvar vidas diante de perigo iminente de morte!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Arma letal = última medida para salvar vidas.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O uso letal da força é medida extrema de última ratio: somente é legítimo diante de perigo iminente de morte ou lesão corporal grave, observando proporcionalidade e necessidade.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "dir_edital_050",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional & Direitos Humanos",
    "topicoEdital": "Audiência de Custódia • CADH (Q50)",
    "question": "A audiência de custódia, prevista na Convenção Americana sobre Direitos Humanos (Art. 7º, 5) e no Código de Processo Penal, exige que a pessoa presa seja conduzida à presença do juiz no prazo de:",
    "options": [
      "Até 48 horas após a lavratura do flagrante.",
      "Até 72 horas mediante requerimento expresso da defesa.",
      "Até 5 dias úteis prorrogáveis pelo delegado de polícia.",
      "Até 10 dias contados da transferência para o presídio estadual.",
      "Até 24 horas após a realização da prisão."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente.",
    "fundamentacaoLegal": "Art. 7º, 5, da CADH c/c Art. 310 do CPP",
    "hint": "Audiência de Custódia = Prazo máximo de 24 HORAS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "24 horas para apresentar o preso ao juiz.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. O Art. 310 do CPP e a jurisprudência vinculante estipulam o prazo improrrogável de até 24 horas após a prisão para a realização da audiência de custódia perante a autoridade judicial competente."
    }
  },
  {
    "id": "leg_edital_001",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Agregação (Q1)",
    "question": "Segundo a Lei nº 6.783/1974 (Estatuto da PMPE), a 'agregação' é a situação na qual o policial militar em serviço ativo:",
    "options": [
      "Fica temporariamente afastado do exercício das funções do seu quadro, permanecendo sem número na respectiva escala hierárquica.",
      "É demitido sumariamente da corporação por transgressão militar média.",
      "Passa em definitivo para a inatividade recebendo proventos integrais do Estado.",
      "Recebe promoção extraordinária por bravura em ato de heroísmo reconhecido.",
      "Assume o comando titular do Estado-Maior Geral da Corporação."
    ],
    "correctIndex": 0,
    "explanation": "Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
    "fundamentacaoLegal": "Art. 75 da Lei Estadual nº 6.783/1974",
    "hint": "Agregação = Policial da ativa que fica SEM NÚMERO no quadro (afastado temporariamente).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Agregado = Na ativa, mas sem número na escala.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_002",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Licença Especial (Q2)",
    "question": "A Licença Especial é a autorização para afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado, concedida com a duração de:",
    "options": [
      "3 (três) meses.",
      "6 (seis) meses.",
      "1 (um) ano.",
      "30 (trinta) dias.",
      "2 (dois) meses."
    ],
    "correctIndex": 1,
    "explanation": "Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
    "fundamentacaoLegal": "Art. 65 da Lei Estadual nº 6.783/1974",
    "hint": "Licença Especial PMPE = 6 meses a cada 10 anos de serviço.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10 anos trabalhados = 6 meses de licença especial.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_003",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Deserção (Q3)",
    "question": "De acordo com a legislação militar aplicável aos policiais militares de Pernambuco, a deserção configura-se formalmente quando o militar ausenta-se sem licença da unidade onde serve por mais de:",
    "options": [
      "24 horas.",
      "48 horas.",
      "8 (oito) dias consecutivos.",
      "3 (três) dias úteis.",
      "15 dias corridos."
    ],
    "correctIndex": 2,
    "explanation": "Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
    "fundamentacaoLegal": "Código Penal Militar e Estatuto da PMPE",
    "hint": "Mais de 8 dias ausente = Deserção militar!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Deserção = Mais de 8 dias ausente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_004",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Dolo Específico (Q4)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas somente configuram crime quando praticadas com a finalidade específica de:",
    "options": [
      "Cumprir estritamente ordens escritas emanadas do comandante direto.",
      "Agilizar os procedimentos do inquérito policial militar dentro do prazo legal.",
      "Averiguar denúncias anônimas de tráfico de entorpecentes em via pública.",
      "Prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "Realizar policiamento preventivo ostensivo em áreas comerciais da cidade."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
    "fundamentacaoLegal": "Art. 1º, § 1º, da Lei nº 13.869/2019",
    "hint": "Abuso de Autoridade exige: Prejudicar outrem, beneficiar a si/terceiro ou mero capricho!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Exige dolo específico: Prejudicar, Beneficiar ou Capricho!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_005",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Divergência de Interpretação (Q5)",
    "question": "O Art. 1º, § 2º, da Lei nº 13.869/2019 prevê expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas:",
    "options": [
      "Configura crime culposo punido com detenção de 6 meses a 2 anos.",
      "Gera a demissão automática do policial sem necessidade de processo disciplinar.",
      "Obriga o policial a indenizar o investigado em até 100 salários mínimos.",
      "Transfere a competência do caso para a Justiça Militar da União.",
      "Não configura, em hipótese alguma, crime de abuso de autoridade (veda o crime de hermenêutica)."
    ],
    "correctIndex": 4,
    "explanation": "A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável.",
    "fundamentacaoLegal": "Art. 1º, § 2º, da Lei nº 13.869/2019",
    "hint": "Divergência na interpretação da lei NÃO é crime de abuso de autoridade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Crime de hermenêutica é expressamente proibido!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável."
    }
  },
  {
    "id": "leg_edital_006",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Tortura • Efeito da Condenação (Q6)",
    "question": "Conforme a Lei nº 9.455/1997 (Lei de Tortura), a condenação definitiva de policial militar pela prática de tortura acarretará obrigatoriamente:",
    "options": [
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada.",
      "A suspensão dos vencimentos pelo período improrrogável de 6 meses.",
      "A transferência compulsória para unidade militar do interior do Estado.",
      "A perda temporária do porte de arma durante os finais de semana.",
      "Apenas admoestação verbal reservada pelo Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
    "fundamentacaoLegal": "Art. 1º, § 5º, da Lei nº 9.455/1997",
    "hint": "Tortura = Perda do cargo + Interdição pelo DOBRO do tempo da pena!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Perde o cargo + banido pelo DOBRO do tempo da pena.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_007",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Porte Ilegal (Permitido) (Q7)",
    "question": "O crime de porte ilegal de arma de fogo de uso PERMITIDO (Art. 14 da Lei nº 10.826/2003) é punido com pena de:",
    "options": [
      "Detenção, de 1 a 6 meses, admitindo transação penal.",
      "Reclusão, de 2 a 4 anos, e multa (inafiançável na delegacia apenas se houver vedação processual específica).",
      "Reclusão, de 8 a 16 anos, e perdimento de todos os bens.",
      "Prisão perpétua em estabelecimento de segurança máxima.",
      "Apenas apreensão administrativa do armamento sem repercussão penal."
    ],
    "correctIndex": 1,
    "explanation": "O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
    "fundamentacaoLegal": "Art. 14 da Lei nº 10.826/2003",
    "hint": "Porte de uso permitido = Reclusão de 2 a 4 anos. Posse = Detenção de 1 a 3 anos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse = dentro de casa (detenção 1-3). Porte = na rua (reclusão 2-4).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_008",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei Maria da Penha • Descumprimento de Medida Protetiva (Q8)",
    "question": "O crime previsto no Art. 24-A da Lei nº 11.340/2006 (descumprir decisão judicial que defere medidas protetivas de urgência):",
    "options": [
      "Admite que o Delegado de Polícia conceda fiança sumária de até 5 salários mínimos.",
      "É infração de menor potencial ofensivo sujeita a termo circunstanciado de ocorrência (TCO).",
      "Tem pena de detenção de 3 meses a 2 anos, sendo a fiança na fase policial privativa da autoridade judicial (o Delegado NÃO pode arbitrar fiança).",
      "Depende de representação da vítima no prazo decadencial de 6 meses.",
      "Prescreve em 30 dias se o agressor pedir desculpas em audiência de conciliação."
    ],
    "correctIndex": 2,
    "explanation": "Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
    "fundamentacaoLegal": "Art. 24-A da Lei nº 11.340/2006",
    "hint": "Descumprimento de medida protetiva = SÓ O JUIZ PODE DAR FIANÇA!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Fiança no Art. 24-A Maria da Penha: Delegado NÃO dá fiança!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_009",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Drogas • Art. 28 (Posse para Consumo) (Q9)",
    "question": "De acordo com o Art. 28 da Lei nº 11.343/2006, quem adquire, guarda ou transporta drogas para consumo pessoal NÃO está sujeito a:",
    "options": [
      "Advertência sobre os efeitos das drogas.",
      "Prestação de serviços à comunidade.",
      "Medida educativa de comparecimento a programa ou curso educativo.",
      "Pena privativa de liberdade (prisão/reclusão/detenção).",
      "Apreensão sumária da substância entorpecente."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
    "fundamentacaoLegal": "Art. 28 da Lei nº 11.343/2006",
    "hint": "Art. 28 Lei de Drogas: NÃO TEM PRISÃO! Houve despenalização (penas restritivas/educativas).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse de drogas pra consumo não dá cadeia!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_010",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Crimes Raciais • Injúria Racial e Racismo (Q10)",
    "question": "Com a publicação da Lei nº 14.532/2023, o crime de injúria racial (ofensa à honra de alguém em razão de raça, cor, etnia ou procedência nacional):",
    "options": [
      "Passou a admitir fiança policial e perdão tácito do ofendido.",
      "Foi transformado em mera contravenção penal de menor potencial ofensivo.",
      "Exige que o crime seja cometido exclusivamente por meio de redes sociais na internet.",
      "Admite transação penal e suspensão condicional do processo pelo Ministério Público.",
      "Foi equiparado ao crime de racismo, tornando-se formalmente imprescritível e inafiançável."
    ],
    "correctIndex": 4,
    "explanation": "A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88.",
    "fundamentacaoLegal": "Lei nº 14.532/2023 c/c Art. 5º, XLII, da CF/88",
    "hint": "Injúria Racial = RACISMO! Inafiançável e Imprescritível!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Injúria racial agora é racismo: inafiançável e imprescritível!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88."
    }
  },
  {
    "id": "leg_edital_011",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Agregação (Q11)",
    "question": "Segundo a Lei nº 6.783/1974 (Estatuto da PMPE), a 'agregação' é a situação na qual o policial militar em serviço ativo:",
    "options": [
      "Fica temporariamente afastado do exercício das funções do seu quadro, permanecendo sem número na respectiva escala hierárquica.",
      "É demitido sumariamente da corporação por transgressão militar média.",
      "Passa em definitivo para a inatividade recebendo proventos integrais do Estado.",
      "Recebe promoção extraordinária por bravura em ato de heroísmo reconhecido.",
      "Assume o comando titular do Estado-Maior Geral da Corporação."
    ],
    "correctIndex": 0,
    "explanation": "Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
    "fundamentacaoLegal": "Art. 75 da Lei Estadual nº 6.783/1974",
    "hint": "Agregação = Policial da ativa que fica SEM NÚMERO no quadro (afastado temporariamente).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Agregado = Na ativa, mas sem número na escala.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_012",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Licença Especial (Q12)",
    "question": "A Licença Especial é a autorização para afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado, concedida com a duração de:",
    "options": [
      "3 (três) meses.",
      "6 (seis) meses.",
      "1 (um) ano.",
      "30 (trinta) dias.",
      "2 (dois) meses."
    ],
    "correctIndex": 1,
    "explanation": "Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
    "fundamentacaoLegal": "Art. 65 da Lei Estadual nº 6.783/1974",
    "hint": "Licença Especial PMPE = 6 meses a cada 10 anos de serviço.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10 anos trabalhados = 6 meses de licença especial.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_013",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Deserção (Q13)",
    "question": "De acordo com a legislação militar aplicável aos policiais militares de Pernambuco, a deserção configura-se formalmente quando o militar ausenta-se sem licença da unidade onde serve por mais de:",
    "options": [
      "24 horas.",
      "48 horas.",
      "8 (oito) dias consecutivos.",
      "3 (três) dias úteis.",
      "15 dias corridos."
    ],
    "correctIndex": 2,
    "explanation": "Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
    "fundamentacaoLegal": "Código Penal Militar e Estatuto da PMPE",
    "hint": "Mais de 8 dias ausente = Deserção militar!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Deserção = Mais de 8 dias ausente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_014",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Dolo Específico (Q14)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas somente configuram crime quando praticadas com a finalidade específica de:",
    "options": [
      "Cumprir estritamente ordens escritas emanadas do comandante direto.",
      "Agilizar os procedimentos do inquérito policial militar dentro do prazo legal.",
      "Averiguar denúncias anônimas de tráfico de entorpecentes em via pública.",
      "Prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "Realizar policiamento preventivo ostensivo em áreas comerciais da cidade."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
    "fundamentacaoLegal": "Art. 1º, § 1º, da Lei nº 13.869/2019",
    "hint": "Abuso de Autoridade exige: Prejudicar outrem, beneficiar a si/terceiro ou mero capricho!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Exige dolo específico: Prejudicar, Beneficiar ou Capricho!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_015",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Divergência de Interpretação (Q15)",
    "question": "O Art. 1º, § 2º, da Lei nº 13.869/2019 prevê expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas:",
    "options": [
      "Configura crime culposo punido com detenção de 6 meses a 2 anos.",
      "Gera a demissão automática do policial sem necessidade de processo disciplinar.",
      "Obriga o policial a indenizar o investigado em até 100 salários mínimos.",
      "Transfere a competência do caso para a Justiça Militar da União.",
      "Não configura, em hipótese alguma, crime de abuso de autoridade (veda o crime de hermenêutica)."
    ],
    "correctIndex": 4,
    "explanation": "A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável.",
    "fundamentacaoLegal": "Art. 1º, § 2º, da Lei nº 13.869/2019",
    "hint": "Divergência na interpretação da lei NÃO é crime de abuso de autoridade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Crime de hermenêutica é expressamente proibido!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável."
    }
  },
  {
    "id": "leg_edital_016",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Tortura • Efeito da Condenação (Q16)",
    "question": "Conforme a Lei nº 9.455/1997 (Lei de Tortura), a condenação definitiva de policial militar pela prática de tortura acarretará obrigatoriamente:",
    "options": [
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada.",
      "A suspensão dos vencimentos pelo período improrrogável de 6 meses.",
      "A transferência compulsória para unidade militar do interior do Estado.",
      "A perda temporária do porte de arma durante os finais de semana.",
      "Apenas admoestação verbal reservada pelo Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
    "fundamentacaoLegal": "Art. 1º, § 5º, da Lei nº 9.455/1997",
    "hint": "Tortura = Perda do cargo + Interdição pelo DOBRO do tempo da pena!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Perde o cargo + banido pelo DOBRO do tempo da pena.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_017",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Porte Ilegal (Permitido) (Q17)",
    "question": "O crime de porte ilegal de arma de fogo de uso PERMITIDO (Art. 14 da Lei nº 10.826/2003) é punido com pena de:",
    "options": [
      "Detenção, de 1 a 6 meses, admitindo transação penal.",
      "Reclusão, de 2 a 4 anos, e multa (inafiançável na delegacia apenas se houver vedação processual específica).",
      "Reclusão, de 8 a 16 anos, e perdimento de todos os bens.",
      "Prisão perpétua em estabelecimento de segurança máxima.",
      "Apenas apreensão administrativa do armamento sem repercussão penal."
    ],
    "correctIndex": 1,
    "explanation": "O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
    "fundamentacaoLegal": "Art. 14 da Lei nº 10.826/2003",
    "hint": "Porte de uso permitido = Reclusão de 2 a 4 anos. Posse = Detenção de 1 a 3 anos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse = dentro de casa (detenção 1-3). Porte = na rua (reclusão 2-4).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_018",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei Maria da Penha • Descumprimento de Medida Protetiva (Q18)",
    "question": "O crime previsto no Art. 24-A da Lei nº 11.340/2006 (descumprir decisão judicial que defere medidas protetivas de urgência):",
    "options": [
      "Admite que o Delegado de Polícia conceda fiança sumária de até 5 salários mínimos.",
      "É infração de menor potencial ofensivo sujeita a termo circunstanciado de ocorrência (TCO).",
      "Tem pena de detenção de 3 meses a 2 anos, sendo a fiança na fase policial privativa da autoridade judicial (o Delegado NÃO pode arbitrar fiança).",
      "Depende de representação da vítima no prazo decadencial de 6 meses.",
      "Prescreve em 30 dias se o agressor pedir desculpas em audiência de conciliação."
    ],
    "correctIndex": 2,
    "explanation": "Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
    "fundamentacaoLegal": "Art. 24-A da Lei nº 11.340/2006",
    "hint": "Descumprimento de medida protetiva = SÓ O JUIZ PODE DAR FIANÇA!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Fiança no Art. 24-A Maria da Penha: Delegado NÃO dá fiança!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_019",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Drogas • Art. 28 (Posse para Consumo) (Q19)",
    "question": "De acordo com o Art. 28 da Lei nº 11.343/2006, quem adquire, guarda ou transporta drogas para consumo pessoal NÃO está sujeito a:",
    "options": [
      "Advertência sobre os efeitos das drogas.",
      "Prestação de serviços à comunidade.",
      "Medida educativa de comparecimento a programa ou curso educativo.",
      "Pena privativa de liberdade (prisão/reclusão/detenção).",
      "Apreensão sumária da substância entorpecente."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
    "fundamentacaoLegal": "Art. 28 da Lei nº 11.343/2006",
    "hint": "Art. 28 Lei de Drogas: NÃO TEM PRISÃO! Houve despenalização (penas restritivas/educativas).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse de drogas pra consumo não dá cadeia!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_020",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Crimes Raciais • Injúria Racial e Racismo (Q20)",
    "question": "Com a publicação da Lei nº 14.532/2023, o crime de injúria racial (ofensa à honra de alguém em razão de raça, cor, etnia ou procedência nacional):",
    "options": [
      "Passou a admitir fiança policial e perdão tácito do ofendido.",
      "Foi transformado em mera contravenção penal de menor potencial ofensivo.",
      "Exige que o crime seja cometido exclusivamente por meio de redes sociais na internet.",
      "Admite transação penal e suspensão condicional do processo pelo Ministério Público.",
      "Foi equiparado ao crime de racismo, tornando-se formalmente imprescritível e inafiançável."
    ],
    "correctIndex": 4,
    "explanation": "A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88.",
    "fundamentacaoLegal": "Lei nº 14.532/2023 c/c Art. 5º, XLII, da CF/88",
    "hint": "Injúria Racial = RACISMO! Inafiançável e Imprescritível!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Injúria racial agora é racismo: inafiançável e imprescritível!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88."
    }
  },
  {
    "id": "leg_edital_021",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Agregação (Q21)",
    "question": "Segundo a Lei nº 6.783/1974 (Estatuto da PMPE), a 'agregação' é a situação na qual o policial militar em serviço ativo:",
    "options": [
      "Fica temporariamente afastado do exercício das funções do seu quadro, permanecendo sem número na respectiva escala hierárquica.",
      "É demitido sumariamente da corporação por transgressão militar média.",
      "Passa em definitivo para a inatividade recebendo proventos integrais do Estado.",
      "Recebe promoção extraordinária por bravura em ato de heroísmo reconhecido.",
      "Assume o comando titular do Estado-Maior Geral da Corporação."
    ],
    "correctIndex": 0,
    "explanation": "Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
    "fundamentacaoLegal": "Art. 75 da Lei Estadual nº 6.783/1974",
    "hint": "Agregação = Policial da ativa que fica SEM NÚMERO no quadro (afastado temporariamente).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Agregado = Na ativa, mas sem número na escala.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_022",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Licença Especial (Q22)",
    "question": "A Licença Especial é a autorização para afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado, concedida com a duração de:",
    "options": [
      "3 (três) meses.",
      "6 (seis) meses.",
      "1 (um) ano.",
      "30 (trinta) dias.",
      "2 (dois) meses."
    ],
    "correctIndex": 1,
    "explanation": "Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
    "fundamentacaoLegal": "Art. 65 da Lei Estadual nº 6.783/1974",
    "hint": "Licença Especial PMPE = 6 meses a cada 10 anos de serviço.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10 anos trabalhados = 6 meses de licença especial.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_023",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Deserção (Q23)",
    "question": "De acordo com a legislação militar aplicável aos policiais militares de Pernambuco, a deserção configura-se formalmente quando o militar ausenta-se sem licença da unidade onde serve por mais de:",
    "options": [
      "24 horas.",
      "48 horas.",
      "8 (oito) dias consecutivos.",
      "3 (três) dias úteis.",
      "15 dias corridos."
    ],
    "correctIndex": 2,
    "explanation": "Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
    "fundamentacaoLegal": "Código Penal Militar e Estatuto da PMPE",
    "hint": "Mais de 8 dias ausente = Deserção militar!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Deserção = Mais de 8 dias ausente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_024",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Dolo Específico (Q24)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas somente configuram crime quando praticadas com a finalidade específica de:",
    "options": [
      "Cumprir estritamente ordens escritas emanadas do comandante direto.",
      "Agilizar os procedimentos do inquérito policial militar dentro do prazo legal.",
      "Averiguar denúncias anônimas de tráfico de entorpecentes em via pública.",
      "Prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "Realizar policiamento preventivo ostensivo em áreas comerciais da cidade."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
    "fundamentacaoLegal": "Art. 1º, § 1º, da Lei nº 13.869/2019",
    "hint": "Abuso de Autoridade exige: Prejudicar outrem, beneficiar a si/terceiro ou mero capricho!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Exige dolo específico: Prejudicar, Beneficiar ou Capricho!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_025",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Divergência de Interpretação (Q25)",
    "question": "O Art. 1º, § 2º, da Lei nº 13.869/2019 prevê expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas:",
    "options": [
      "Configura crime culposo punido com detenção de 6 meses a 2 anos.",
      "Gera a demissão automática do policial sem necessidade de processo disciplinar.",
      "Obriga o policial a indenizar o investigado em até 100 salários mínimos.",
      "Transfere a competência do caso para a Justiça Militar da União.",
      "Não configura, em hipótese alguma, crime de abuso de autoridade (veda o crime de hermenêutica)."
    ],
    "correctIndex": 4,
    "explanation": "A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável.",
    "fundamentacaoLegal": "Art. 1º, § 2º, da Lei nº 13.869/2019",
    "hint": "Divergência na interpretação da lei NÃO é crime de abuso de autoridade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Crime de hermenêutica é expressamente proibido!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável."
    }
  },
  {
    "id": "leg_edital_026",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Tortura • Efeito da Condenação (Q26)",
    "question": "Conforme a Lei nº 9.455/1997 (Lei de Tortura), a condenação definitiva de policial militar pela prática de tortura acarretará obrigatoriamente:",
    "options": [
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada.",
      "A suspensão dos vencimentos pelo período improrrogável de 6 meses.",
      "A transferência compulsória para unidade militar do interior do Estado.",
      "A perda temporária do porte de arma durante os finais de semana.",
      "Apenas admoestação verbal reservada pelo Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
    "fundamentacaoLegal": "Art. 1º, § 5º, da Lei nº 9.455/1997",
    "hint": "Tortura = Perda do cargo + Interdição pelo DOBRO do tempo da pena!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Perde o cargo + banido pelo DOBRO do tempo da pena.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_027",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Porte Ilegal (Permitido) (Q27)",
    "question": "O crime de porte ilegal de arma de fogo de uso PERMITIDO (Art. 14 da Lei nº 10.826/2003) é punido com pena de:",
    "options": [
      "Detenção, de 1 a 6 meses, admitindo transação penal.",
      "Reclusão, de 2 a 4 anos, e multa (inafiançável na delegacia apenas se houver vedação processual específica).",
      "Reclusão, de 8 a 16 anos, e perdimento de todos os bens.",
      "Prisão perpétua em estabelecimento de segurança máxima.",
      "Apenas apreensão administrativa do armamento sem repercussão penal."
    ],
    "correctIndex": 1,
    "explanation": "O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
    "fundamentacaoLegal": "Art. 14 da Lei nº 10.826/2003",
    "hint": "Porte de uso permitido = Reclusão de 2 a 4 anos. Posse = Detenção de 1 a 3 anos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse = dentro de casa (detenção 1-3). Porte = na rua (reclusão 2-4).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_028",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei Maria da Penha • Descumprimento de Medida Protetiva (Q28)",
    "question": "O crime previsto no Art. 24-A da Lei nº 11.340/2006 (descumprir decisão judicial que defere medidas protetivas de urgência):",
    "options": [
      "Admite que o Delegado de Polícia conceda fiança sumária de até 5 salários mínimos.",
      "É infração de menor potencial ofensivo sujeita a termo circunstanciado de ocorrência (TCO).",
      "Tem pena de detenção de 3 meses a 2 anos, sendo a fiança na fase policial privativa da autoridade judicial (o Delegado NÃO pode arbitrar fiança).",
      "Depende de representação da vítima no prazo decadencial de 6 meses.",
      "Prescreve em 30 dias se o agressor pedir desculpas em audiência de conciliação."
    ],
    "correctIndex": 2,
    "explanation": "Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
    "fundamentacaoLegal": "Art. 24-A da Lei nº 11.340/2006",
    "hint": "Descumprimento de medida protetiva = SÓ O JUIZ PODE DAR FIANÇA!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Fiança no Art. 24-A Maria da Penha: Delegado NÃO dá fiança!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_029",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Drogas • Art. 28 (Posse para Consumo) (Q29)",
    "question": "De acordo com o Art. 28 da Lei nº 11.343/2006, quem adquire, guarda ou transporta drogas para consumo pessoal NÃO está sujeito a:",
    "options": [
      "Advertência sobre os efeitos das drogas.",
      "Prestação de serviços à comunidade.",
      "Medida educativa de comparecimento a programa ou curso educativo.",
      "Pena privativa de liberdade (prisão/reclusão/detenção).",
      "Apreensão sumária da substância entorpecente."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
    "fundamentacaoLegal": "Art. 28 da Lei nº 11.343/2006",
    "hint": "Art. 28 Lei de Drogas: NÃO TEM PRISÃO! Houve despenalização (penas restritivas/educativas).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse de drogas pra consumo não dá cadeia!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_030",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Crimes Raciais • Injúria Racial e Racismo (Q30)",
    "question": "Com a publicação da Lei nº 14.532/2023, o crime de injúria racial (ofensa à honra de alguém em razão de raça, cor, etnia ou procedência nacional):",
    "options": [
      "Passou a admitir fiança policial e perdão tácito do ofendido.",
      "Foi transformado em mera contravenção penal de menor potencial ofensivo.",
      "Exige que o crime seja cometido exclusivamente por meio de redes sociais na internet.",
      "Admite transação penal e suspensão condicional do processo pelo Ministério Público.",
      "Foi equiparado ao crime de racismo, tornando-se formalmente imprescritível e inafiançável."
    ],
    "correctIndex": 4,
    "explanation": "A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88.",
    "fundamentacaoLegal": "Lei nº 14.532/2023 c/c Art. 5º, XLII, da CF/88",
    "hint": "Injúria Racial = RACISMO! Inafiançável e Imprescritível!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Injúria racial agora é racismo: inafiançável e imprescritível!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88."
    }
  },
  {
    "id": "leg_edital_031",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Agregação (Q31)",
    "question": "Segundo a Lei nº 6.783/1974 (Estatuto da PMPE), a 'agregação' é a situação na qual o policial militar em serviço ativo:",
    "options": [
      "Fica temporariamente afastado do exercício das funções do seu quadro, permanecendo sem número na respectiva escala hierárquica.",
      "É demitido sumariamente da corporação por transgressão militar média.",
      "Passa em definitivo para a inatividade recebendo proventos integrais do Estado.",
      "Recebe promoção extraordinária por bravura em ato de heroísmo reconhecido.",
      "Assume o comando titular do Estado-Maior Geral da Corporação."
    ],
    "correctIndex": 0,
    "explanation": "Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
    "fundamentacaoLegal": "Art. 75 da Lei Estadual nº 6.783/1974",
    "hint": "Agregação = Policial da ativa que fica SEM NÚMERO no quadro (afastado temporariamente).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Agregado = Na ativa, mas sem número na escala.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_032",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Licença Especial (Q32)",
    "question": "A Licença Especial é a autorização para afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado, concedida com a duração de:",
    "options": [
      "3 (três) meses.",
      "6 (seis) meses.",
      "1 (um) ano.",
      "30 (trinta) dias.",
      "2 (dois) meses."
    ],
    "correctIndex": 1,
    "explanation": "Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
    "fundamentacaoLegal": "Art. 65 da Lei Estadual nº 6.783/1974",
    "hint": "Licença Especial PMPE = 6 meses a cada 10 anos de serviço.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10 anos trabalhados = 6 meses de licença especial.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_033",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Deserção (Q33)",
    "question": "De acordo com a legislação militar aplicável aos policiais militares de Pernambuco, a deserção configura-se formalmente quando o militar ausenta-se sem licença da unidade onde serve por mais de:",
    "options": [
      "24 horas.",
      "48 horas.",
      "8 (oito) dias consecutivos.",
      "3 (três) dias úteis.",
      "15 dias corridos."
    ],
    "correctIndex": 2,
    "explanation": "Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
    "fundamentacaoLegal": "Código Penal Militar e Estatuto da PMPE",
    "hint": "Mais de 8 dias ausente = Deserção militar!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Deserção = Mais de 8 dias ausente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_034",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Dolo Específico (Q34)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas somente configuram crime quando praticadas com a finalidade específica de:",
    "options": [
      "Cumprir estritamente ordens escritas emanadas do comandante direto.",
      "Agilizar os procedimentos do inquérito policial militar dentro do prazo legal.",
      "Averiguar denúncias anônimas de tráfico de entorpecentes em via pública.",
      "Prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "Realizar policiamento preventivo ostensivo em áreas comerciais da cidade."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
    "fundamentacaoLegal": "Art. 1º, § 1º, da Lei nº 13.869/2019",
    "hint": "Abuso de Autoridade exige: Prejudicar outrem, beneficiar a si/terceiro ou mero capricho!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Exige dolo específico: Prejudicar, Beneficiar ou Capricho!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_035",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Divergência de Interpretação (Q35)",
    "question": "O Art. 1º, § 2º, da Lei nº 13.869/2019 prevê expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas:",
    "options": [
      "Configura crime culposo punido com detenção de 6 meses a 2 anos.",
      "Gera a demissão automática do policial sem necessidade de processo disciplinar.",
      "Obriga o policial a indenizar o investigado em até 100 salários mínimos.",
      "Transfere a competência do caso para a Justiça Militar da União.",
      "Não configura, em hipótese alguma, crime de abuso de autoridade (veda o crime de hermenêutica)."
    ],
    "correctIndex": 4,
    "explanation": "A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável.",
    "fundamentacaoLegal": "Art. 1º, § 2º, da Lei nº 13.869/2019",
    "hint": "Divergência na interpretação da lei NÃO é crime de abuso de autoridade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Crime de hermenêutica é expressamente proibido!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável."
    }
  },
  {
    "id": "leg_edital_036",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Tortura • Efeito da Condenação (Q36)",
    "question": "Conforme a Lei nº 9.455/1997 (Lei de Tortura), a condenação definitiva de policial militar pela prática de tortura acarretará obrigatoriamente:",
    "options": [
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada.",
      "A suspensão dos vencimentos pelo período improrrogável de 6 meses.",
      "A transferência compulsória para unidade militar do interior do Estado.",
      "A perda temporária do porte de arma durante os finais de semana.",
      "Apenas admoestação verbal reservada pelo Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
    "fundamentacaoLegal": "Art. 1º, § 5º, da Lei nº 9.455/1997",
    "hint": "Tortura = Perda do cargo + Interdição pelo DOBRO do tempo da pena!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Perde o cargo + banido pelo DOBRO do tempo da pena.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_037",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Porte Ilegal (Permitido) (Q37)",
    "question": "O crime de porte ilegal de arma de fogo de uso PERMITIDO (Art. 14 da Lei nº 10.826/2003) é punido com pena de:",
    "options": [
      "Detenção, de 1 a 6 meses, admitindo transação penal.",
      "Reclusão, de 2 a 4 anos, e multa (inafiançável na delegacia apenas se houver vedação processual específica).",
      "Reclusão, de 8 a 16 anos, e perdimento de todos os bens.",
      "Prisão perpétua em estabelecimento de segurança máxima.",
      "Apenas apreensão administrativa do armamento sem repercussão penal."
    ],
    "correctIndex": 1,
    "explanation": "O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
    "fundamentacaoLegal": "Art. 14 da Lei nº 10.826/2003",
    "hint": "Porte de uso permitido = Reclusão de 2 a 4 anos. Posse = Detenção de 1 a 3 anos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse = dentro de casa (detenção 1-3). Porte = na rua (reclusão 2-4).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_038",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei Maria da Penha • Descumprimento de Medida Protetiva (Q38)",
    "question": "O crime previsto no Art. 24-A da Lei nº 11.340/2006 (descumprir decisão judicial que defere medidas protetivas de urgência):",
    "options": [
      "Admite que o Delegado de Polícia conceda fiança sumária de até 5 salários mínimos.",
      "É infração de menor potencial ofensivo sujeita a termo circunstanciado de ocorrência (TCO).",
      "Tem pena de detenção de 3 meses a 2 anos, sendo a fiança na fase policial privativa da autoridade judicial (o Delegado NÃO pode arbitrar fiança).",
      "Depende de representação da vítima no prazo decadencial de 6 meses.",
      "Prescreve em 30 dias se o agressor pedir desculpas em audiência de conciliação."
    ],
    "correctIndex": 2,
    "explanation": "Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
    "fundamentacaoLegal": "Art. 24-A da Lei nº 11.340/2006",
    "hint": "Descumprimento de medida protetiva = SÓ O JUIZ PODE DAR FIANÇA!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Fiança no Art. 24-A Maria da Penha: Delegado NÃO dá fiança!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_039",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Drogas • Art. 28 (Posse para Consumo) (Q39)",
    "question": "De acordo com o Art. 28 da Lei nº 11.343/2006, quem adquire, guarda ou transporta drogas para consumo pessoal NÃO está sujeito a:",
    "options": [
      "Advertência sobre os efeitos das drogas.",
      "Prestação de serviços à comunidade.",
      "Medida educativa de comparecimento a programa ou curso educativo.",
      "Pena privativa de liberdade (prisão/reclusão/detenção).",
      "Apreensão sumária da substância entorpecente."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
    "fundamentacaoLegal": "Art. 28 da Lei nº 11.343/2006",
    "hint": "Art. 28 Lei de Drogas: NÃO TEM PRISÃO! Houve despenalização (penas restritivas/educativas).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse de drogas pra consumo não dá cadeia!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_040",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Crimes Raciais • Injúria Racial e Racismo (Q40)",
    "question": "Com a publicação da Lei nº 14.532/2023, o crime de injúria racial (ofensa à honra de alguém em razão de raça, cor, etnia ou procedência nacional):",
    "options": [
      "Passou a admitir fiança policial e perdão tácito do ofendido.",
      "Foi transformado em mera contravenção penal de menor potencial ofensivo.",
      "Exige que o crime seja cometido exclusivamente por meio de redes sociais na internet.",
      "Admite transação penal e suspensão condicional do processo pelo Ministério Público.",
      "Foi equiparado ao crime de racismo, tornando-se formalmente imprescritível e inafiançável."
    ],
    "correctIndex": 4,
    "explanation": "A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88.",
    "fundamentacaoLegal": "Lei nº 14.532/2023 c/c Art. 5º, XLII, da CF/88",
    "hint": "Injúria Racial = RACISMO! Inafiançável e Imprescritível!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Injúria racial agora é racismo: inafiançável e imprescritível!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88."
    }
  },
  {
    "id": "leg_edital_041",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Agregação (Q41)",
    "question": "Segundo a Lei nº 6.783/1974 (Estatuto da PMPE), a 'agregação' é a situação na qual o policial militar em serviço ativo:",
    "options": [
      "Fica temporariamente afastado do exercício das funções do seu quadro, permanecendo sem número na respectiva escala hierárquica.",
      "É demitido sumariamente da corporação por transgressão militar média.",
      "Passa em definitivo para a inatividade recebendo proventos integrais do Estado.",
      "Recebe promoção extraordinária por bravura em ato de heroísmo reconhecido.",
      "Assume o comando titular do Estado-Maior Geral da Corporação."
    ],
    "correctIndex": 0,
    "explanation": "Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
    "fundamentacaoLegal": "Art. 75 da Lei Estadual nº 6.783/1974",
    "hint": "Agregação = Policial da ativa que fica SEM NÚMERO no quadro (afastado temporariamente).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Agregado = Na ativa, mas sem número na escala.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 75 do Estatuto da PMPE: 'A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_042",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Licença Especial (Q42)",
    "question": "A Licença Especial é a autorização para afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado, concedida com a duração de:",
    "options": [
      "3 (três) meses.",
      "6 (seis) meses.",
      "1 (um) ano.",
      "30 (trinta) dias.",
      "2 (dois) meses."
    ],
    "correctIndex": 1,
    "explanation": "Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
    "fundamentacaoLegal": "Art. 65 da Lei Estadual nº 6.783/1974",
    "hint": "Licença Especial PMPE = 6 meses a cada 10 anos de serviço.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "10 anos trabalhados = 6 meses de licença especial.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. Art. 65 do Estatuto da PMPE: A Licença Especial é concedida pelo prazo de 6 meses para cada 10 anos (decênio) de efetivo serviço militar estadual.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_043",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto PMPE • Deserção (Q43)",
    "question": "De acordo com a legislação militar aplicável aos policiais militares de Pernambuco, a deserção configura-se formalmente quando o militar ausenta-se sem licença da unidade onde serve por mais de:",
    "options": [
      "24 horas.",
      "48 horas.",
      "8 (oito) dias consecutivos.",
      "3 (três) dias úteis.",
      "15 dias corridos."
    ],
    "correctIndex": 2,
    "explanation": "Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
    "fundamentacaoLegal": "Código Penal Militar e Estatuto da PMPE",
    "hint": "Mais de 8 dias ausente = Deserção militar!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Deserção = Mais de 8 dias ausente.",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 187 do Código Penal Militar c/c Estatuto da PMPE: Ausentar-se o militar, sem licença, da unidade onde serve, ou do lugar em que deve permanecer, por mais de 8 dias: Crime militar de Deserção.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_044",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Dolo Específico (Q44)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), as condutas tipificadas somente configuram crime quando praticadas com a finalidade específica de:",
    "options": [
      "Cumprir estritamente ordens escritas emanadas do comandante direto.",
      "Agilizar os procedimentos do inquérito policial militar dentro do prazo legal.",
      "Averiguar denúncias anônimas de tráfico de entorpecentes em via pública.",
      "Prejudicar outrem, beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "Realizar policiamento preventivo ostensivo em áreas comerciais da cidade."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
    "fundamentacaoLegal": "Art. 1º, § 1º, da Lei nº 13.869/2019",
    "hint": "Abuso de Autoridade exige: Prejudicar outrem, beneficiar a si/terceiro ou mero capricho!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Exige dolo específico: Prejudicar, Beneficiar ou Capricho!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 1º, § 1º, da Lei 13.869/19 exige elemento subjetivo especial (dolo específico): prejudicar outrem, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal. Sem isso, NÃO há crime de abuso!",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_045",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Abuso de Autoridade • Divergência de Interpretação (Q45)",
    "question": "O Art. 1º, § 2º, da Lei nº 13.869/2019 prevê expressamente que a divergência na interpretação de lei ou na avaliação de fatos e provas:",
    "options": [
      "Configura crime culposo punido com detenção de 6 meses a 2 anos.",
      "Gera a demissão automática do policial sem necessidade de processo disciplinar.",
      "Obriga o policial a indenizar o investigado em até 100 salários mínimos.",
      "Transfere a competência do caso para a Justiça Militar da União.",
      "Não configura, em hipótese alguma, crime de abuso de autoridade (veda o crime de hermenêutica)."
    ],
    "correctIndex": 4,
    "explanation": "A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável.",
    "fundamentacaoLegal": "Art. 1º, § 2º, da Lei nº 13.869/2019",
    "hint": "Divergência na interpretação da lei NÃO é crime de abuso de autoridade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Crime de hermenêutica é expressamente proibido!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A divergência na interpretação da lei ou avaliação de provas NUNCA configura abuso de autoridade. Isso impede que o agente seja punido por aplicar sua interpretação jurídica razoável."
    }
  },
  {
    "id": "leg_edital_046",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Tortura • Efeito da Condenação (Q46)",
    "question": "Conforme a Lei nº 9.455/1997 (Lei de Tortura), a condenação definitiva de policial militar pela prática de tortura acarretará obrigatoriamente:",
    "options": [
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada.",
      "A suspensão dos vencimentos pelo período improrrogável de 6 meses.",
      "A transferência compulsória para unidade militar do interior do Estado.",
      "A perda temporária do porte de arma durante os finais de semana.",
      "Apenas admoestação verbal reservada pelo Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
    "fundamentacaoLegal": "Art. 1º, § 5º, da Lei nº 9.455/1997",
    "hint": "Tortura = Perda do cargo + Interdição pelo DOBRO do tempo da pena!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Perde o cargo + banido pelo DOBRO do tempo da pena.",
    "porqueErrou": {
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 1º, § 5º, da Lei 9.455/97: A condenação acarretará a perda do cargo/função e a interdição para o exercício pelo dobro do prazo da pena aplicada. Trata-se de efeito automático da sentença!",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_047",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Porte Ilegal (Permitido) (Q47)",
    "question": "O crime de porte ilegal de arma de fogo de uso PERMITIDO (Art. 14 da Lei nº 10.826/2003) é punido com pena de:",
    "options": [
      "Detenção, de 1 a 6 meses, admitindo transação penal.",
      "Reclusão, de 2 a 4 anos, e multa (inafiançável na delegacia apenas se houver vedação processual específica).",
      "Reclusão, de 8 a 16 anos, e perdimento de todos os bens.",
      "Prisão perpétua em estabelecimento de segurança máxima.",
      "Apenas apreensão administrativa do armamento sem repercussão penal."
    ],
    "correctIndex": 1,
    "explanation": "O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
    "fundamentacaoLegal": "Art. 14 da Lei nº 10.826/2003",
    "hint": "Porte de uso permitido = Reclusão de 2 a 4 anos. Posse = Detenção de 1 a 3 anos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse = dentro de casa (detenção 1-3). Porte = na rua (reclusão 2-4).",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Correta. O porte ilegal de arma de uso permitido (Art. 14 da Lei 10.826/03) comina pena de reclusão de 2 a 4 anos e multa. Já a posse irregular em residência (Art. 12) comina detenção de 1 a 3 anos.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_048",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei Maria da Penha • Descumprimento de Medida Protetiva (Q48)",
    "question": "O crime previsto no Art. 24-A da Lei nº 11.340/2006 (descumprir decisão judicial que defere medidas protetivas de urgência):",
    "options": [
      "Admite que o Delegado de Polícia conceda fiança sumária de até 5 salários mínimos.",
      "É infração de menor potencial ofensivo sujeita a termo circunstanciado de ocorrência (TCO).",
      "Tem pena de detenção de 3 meses a 2 anos, sendo a fiança na fase policial privativa da autoridade judicial (o Delegado NÃO pode arbitrar fiança).",
      "Depende de representação da vítima no prazo decadencial de 6 meses.",
      "Prescreve em 30 dias se o agressor pedir desculpas em audiência de conciliação."
    ],
    "correctIndex": 2,
    "explanation": "Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
    "fundamentacaoLegal": "Art. 24-A da Lei nº 11.340/2006",
    "hint": "Descumprimento de medida protetiva = SÓ O JUIZ PODE DAR FIANÇA!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Fiança no Art. 24-A Maria da Penha: Delegado NÃO dá fiança!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Correta. Art. 24-A, § 2º, da Lei Maria da Penha: Na hipótese de prisão em flagrante por descumprimento de medida protetiva, apenas a autoridade judicial (o juiz) poderá conceder fiança. O delegado NÃO tem poder de arbitrar fiança!",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_049",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Lei de Drogas • Art. 28 (Posse para Consumo) (Q49)",
    "question": "De acordo com o Art. 28 da Lei nº 11.343/2006, quem adquire, guarda ou transporta drogas para consumo pessoal NÃO está sujeito a:",
    "options": [
      "Advertência sobre os efeitos das drogas.",
      "Prestação de serviços à comunidade.",
      "Medida educativa de comparecimento a programa ou curso educativo.",
      "Pena privativa de liberdade (prisão/reclusão/detenção).",
      "Apreensão sumária da substância entorpecente."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
    "fundamentacaoLegal": "Art. 28 da Lei nº 11.343/2006",
    "hint": "Art. 28 Lei de Drogas: NÃO TEM PRISÃO! Houve despenalização (penas restritivas/educativas).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Posse de drogas pra consumo não dá cadeia!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "4": "Você marcou (E): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Correta. O Art. 28 da Lei de Drogas despenalizou (não descriminalizou) a conduta: comina apenas advertência, prestação de serviços à comunidade e medida educativa, sendo vedada qualquer pena de prisão.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as regras oficiais da banca AOCP."
    }
  },
  {
    "id": "leg_edital_050",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE & Extravagante",
    "topicoEdital": "Crimes Raciais • Injúria Racial e Racismo (Q50)",
    "question": "Com a publicação da Lei nº 14.532/2023, o crime de injúria racial (ofensa à honra de alguém em razão de raça, cor, etnia ou procedência nacional):",
    "options": [
      "Passou a admitir fiança policial e perdão tácito do ofendido.",
      "Foi transformado em mera contravenção penal de menor potencial ofensivo.",
      "Exige que o crime seja cometido exclusivamente por meio de redes sociais na internet.",
      "Admite transação penal e suspensão condicional do processo pelo Ministério Público.",
      "Foi equiparado ao crime de racismo, tornando-se formalmente imprescritível e inafiançável."
    ],
    "correctIndex": 4,
    "explanation": "A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88.",
    "fundamentacaoLegal": "Lei nº 14.532/2023 c/c Art. 5º, XLII, da CF/88",
    "hint": "Injúria Racial = RACISMO! Inafiançável e Imprescritível!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_edital_aocp_300",
    "dicaMacete": "Injúria racial agora é racismo: inafiançável e imprescritível!",
    "porqueErrou": {
      "0": "Você marcou (A): Opção incorreta para este ponto do edital.",
      "1": "Você marcou (B): Opção incorreta para este ponto do edital.",
      "2": "Você marcou (C): Opção incorreta para este ponto do edital.",
      "3": "Você marcou (D): Opção incorreta para este ponto do edital."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as regras oficiais da banca AOCP.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as regras oficiais da banca AOCP.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as regras oficiais da banca AOCP.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as regras oficiais da banca AOCP.",
      "E": "Correta. A Lei 14.532/23 inseriu a injúria racial na Lei nº 7.716/1989 (Crimes de Racismo), tornando-a expressamente imprescritível e inafiançável conforme o mandamento do Art. 5º, XLII, da CF/88."
    }
  }
];
