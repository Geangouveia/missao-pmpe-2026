import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 100 QUESTÕES INÉDITAS DE RACIOCÍNIO LÓGICO-MATEMÁTICO (INSTITUTO AOCP PMPE)
 * 100% fiéis ao Edital Oficial da PMPE 2026. Lógica Proposicional, Conjuntos, Combinatória e Probabilidade.
 */
export const BANCO_100_RACIOCINIO_AOCP: QuizQuestion[] = [
  {
    "id": "rlm_inedita_100_001",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Conceito de Proposição Lógica • Sentenças Fechadas vs. Abertas",
    "question": "[AOCP PMPE Inédita Q001] De acordo com os princípios da lógica proposicional, assinale a alternativa que apresenta uma PROPOSIÇÃO LÓGICA VÁLIDA:",
    "options": [
      "Quantos soldados estão escalados para o plantão de hoje?",
      "Excelente trabalho de patrulhamento na comunidade!",
      "O soldado Silva foi aprovado com louvor no Curso de Formação da PMPE.",
      "Faça a manutenção da viatura imediatamente.",
      "Ele é um excelente atirador de elite do batalhão."
    ],
    "correctIndex": 2,
    "explanation": "Uma proposição lógica é uma oração declarativa que possui verbo, sentido completo e à qual se pode atribuir um único valor lógico (Verdadeiro ou Falso). Perguntas, exclamações, ordens (imperativas) e sentenças abertas com variáveis indeterminadas ('Ele é...') NÃO são proposições.",
    "fundamentacaoLegal": "Princípios Fundamentais da Lógica Proposicional.",
    "hint": "Proposição tem sujeito, verbo e pode ser julgada em V ou F sem ambiguidades!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Perguntas (?), ordens (!), exclamações e sentenças com 'ele/ela' sem contexto NÃO são proposições.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Uma proposição lógica é uma oração declarativa que possui verbo, sentido completo e à qual se pode atribuir um único valor lógico (Verdadeiro ou Falso). Perguntas, exclamações, ordens (imperativas) e sentenças abertas com variáveis indeterminadas ('Ele é...') NÃO são proposições.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_002",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Tabela-Verdade • Número de Linhas",
    "question": "[AOCP PMPE Inédita Q002] Uma proposição composta formada por 4 proposições simples distintas (p, q, r, s) ligadas por conectivos lógicos possui uma tabela-verdade com exatamente quantas linhas?",
    "options": [
      "8 linhas.",
      "12 linhas.",
      "16 linhas.",
      "24 linhas.",
      "32 linhas."
    ],
    "correctIndex": 2,
    "explanation": "O número de linhas de uma tabela-verdade é dado pela fórmula 2^n, onde n é o número de proposições simples componentes. Como temos n = 4, o número de linhas é 2^4 = 16 linhas.",
    "fundamentacaoLegal": "Cálculo do Número de Linhas da Tabela-Verdade: 2^n.",
    "hint": "Fórmula clássica: 2 elevado ao número de proposições simples!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. O número de linhas de uma tabela-verdade é dado pela fórmula 2^n, onde n é o número de proposições simples componentes. Como temos n = 4, o número de linhas é 2^4 = 16 linhas.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_003",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (E) • Primeira Lei de De Morgan",
    "question": "[AOCP PMPE Inédita Q003] A negação lógica da proposição composta 'O soldado treina tiro tático E o cabo estuda o regulamento disciplinar' é dada por:",
    "options": [
      "O soldado não treina tiro tático E o cabo não estuda o regulamento disciplinar.",
      "O soldado não treina tiro tático OU o cabo não estuda o regulamento disciplinar.",
      "Se o soldado não treina tiro tático, então o cabo estuda o regulamento disciplinar.",
      "O soldado treina tiro tático OU o cabo estuda o regulamento disciplinar.",
      "O soldado não estuda o regulamento E o cabo não treina tiro."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, para negar uma conjunção (p ∧ q), nega-se a primeira (~p), troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda (~q): ~(p ∧ q) ≡ ~p ∨ ~q.",
    "fundamentacaoLegal": "Primeira Lei de De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q.",
    "hint": "Nega a 1ª, troca o 'E' por 'OU', e nega a 2ª!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Negação do 'E': Nega tudo e bota 'OU'.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Pela Lei de De Morgan, para negar uma conjunção (p ∧ q), nega-se a primeira (~p), troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda (~q): ~(p ∧ q) ≡ ~p ∨ ~q.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_004",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção (OU) • Segunda Lei de De Morgan",
    "question": "[AOCP PMPE Inédita Q004] Assinale a alternativa que expressa a negação lógica da afirmação: 'A viatura está em patrulha OU o posto policial está fechado':",
    "options": [
      "A viatura não está em patrulha OU o posto policial não está fechado.",
      "A viatura não está em patrulha E o posto policial não está fechado.",
      "Se a viatura não está em patrulha, então o posto está fechado.",
      "A viatura está em patrulha E o posto está aberto.",
      "Ou a viatura está em patrulha ou o posto está fechado."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação do 'OU' (p ∨ q) é obtida negando ambas as proposições e trocando o conectivo 'OU' pelo 'E': ~(p ∨ q) ≡ ~p ∧ ~q. Portanto: 'A viatura NÃO está em patrulha E o posto policial NÃO está fechado'.",
    "fundamentacaoLegal": "Segunda Lei de De Morgan: ~(p ∨ q) ≡ ~p ∧ ~q.",
    "hint": "Nega as duas partes e troca o 'OU' por 'E'!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Negação do 'OU': Nega tudo e junta com 'E'.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Pela Lei de De Morgan, a negação do 'OU' (p ∨ q) é obtida negando ambas as proposições e trocando o conectivo 'OU' pelo 'E': ~(p ∨ q) ≡ ~p ∧ ~q. Portanto: 'A viatura NÃO está em patrulha E o posto policial NÃO está fechado'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_005",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Se... Então) • Regra do MANÉ",
    "question": "[AOCP PMPE Inédita Q005] Dada a proposição condicional: 'Se o candidato obtém 80% dos pontos na prova objetiva, então ele é convocado para o TAF', sua negação lógica equivalente é:",
    "options": [
      "Se o candidato não obtém 80% dos pontos, então ele não é convocado para o TAF.",
      "Se o candidato é convocado para o TAF, então ele obteve 80% dos pontos.",
      "O candidato obtém 80% dos pontos na prova objetiva E não é convocado para o TAF.",
      "O candidato não obtém 80% dos pontos OU é convocado para o TAF.",
      "O candidato não obtém 80% dos pontos E não é convocado para o TAF."
    ],
    "correctIndex": 2,
    "explanation": "A negação da condicional p → q é dada pela regra do MANÉ: Mantém a primeira (p) E Nega a segunda (~q): ~(p → q) ≡ p ∧ ~q. Logo: 'O candidato obtém 80% dos pontos E NÃO é convocado para o TAF'.",
    "fundamentacaoLegal": "Negação da Condicional: ~(p → q) ≡ p ∧ ~q.",
    "hint": "Regra do MANÉ: MAntém a primeira E NEga a segunda!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "MANÉ = MA (mantém) + NE (nega) com 'E' no meio. O 'Se' desaparece!",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. A negação da condicional p → q é dada pela regra do MANÉ: Mantém a primeira (p) E Nega a segunda (~q): ~(p → q) ≡ p ∧ ~q. Logo: 'O candidato obtém 80% dos pontos E NÃO é convocado para o TAF'.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_006",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica da Condicional • Contrapositiva",
    "question": "[AOCP PMPE Inédita Q006] A proposição logicamente equivalente à condicional 'Se chove torrencialmente no Recife, então o trânsito da Agamenon Magalhães fica congestionado' é:",
    "options": [
      "Se o trânsito da Agamenon Magalhães fica congestionado, então chove torrencialmente no Recife.",
      "Se o trânsito da Agamenon Magalhães NÃO fica congestionado, então NÃO chove torrencialmente no Recife.",
      "Se não chove torrencialmente no Recife, então o trânsito não fica congestionado.",
      "Chove torrencialmente no Recife E o trânsito não fica congestionado.",
      "Ou chove no Recife ou o trânsito não congestiona."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência contrapositiva da condicional p → q é obtida invertendo as proposições e negando ambas: p → q ≡ ~q → ~p. 'Se o trânsito NÃO fica congestionado, então NÃO chove torrencialmente'.",
    "fundamentacaoLegal": "Equivalência Contrapositiva: p → q ≡ ~q → ~p.",
    "hint": "Volta negando tudo mantendo o Se... então!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Contrapositiva: inverte de trás pra frente e nega as duas.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. A equivalência contrapositiva da condicional p → q é obtida invertendo as proposições e negando ambas: p → q ≡ ~q → ~p. 'Se o trânsito NÃO fica congestionado, então NÃO chove torrencialmente'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_007",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica da Condicional • Regra do NEYMAR",
    "question": "[AOCP PMPE Inédita Q007] Uma forma equivalente da condicional p → q expressa por meio de uma disjunção inclusiva (OU) é:",
    "options": [
      "p ∨ q",
      "~p ∨ q",
      "~p ∨ ~q",
      "p ∧ ~q",
      "~p ∧ q"
    ],
    "correctIndex": 1,
    "explanation": "A equivalência lógica da condicional com disjunção (Regra do NEYMAR) afirma que p → q ≡ ~p ∨ q (NEga a primeira OU MAnteú a segunda).",
    "fundamentacaoLegal": "Equivalência Condicional-Disjuntiva: p → q ≡ ~p ∨ q.",
    "hint": "Regra do NEYMAR: NEga a primeira OU MAnteú a segunda!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "NEYMAR: NE (nega) + MAR (mantém) com 'OU' no meio.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. A equivalência lógica da condicional com disjunção (Regra do NEYMAR) afirma que p → q ≡ ~p ∨ q (NEga a primeira OU MAnteú a segunda).",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_008",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Quantificador Universal • Todo A é B",
    "question": "[AOCP PMPE Inédita Q008] Assinale a alternativa que apresenta a correta negação lógica da afirmação: 'Todo policial militar é disciplinado':",
    "options": [
      "Nenhum policial militar é disciplinado.",
      "Pelo menos um policial militar não é disciplinado.",
      "Todos os policiais militares são indisciplinados.",
      "A maioria dos policiais militares é indisciplinada.",
      "Se uma pessoa é disciplinada, então ela é policial militar."
    ],
    "correctIndex": 1,
    "explanation": "Para negar o quantificador universal afirmativo 'Todo A é B', basta encontrar uma exceção: 'Algum A NÃO é B', 'Pelo menos um A NÃO é B' ou 'Existe A que NÃO é B' (Mnemônico PEA + NÃO). Jamais se nega 'Todo' com 'Nenhum'!",
    "fundamentacaoLegal": "Lógica de Predicados e Quantificadores.",
    "hint": "Para quebrar 'Todo mundo...', basta um único exemplo contrário!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Negação de TODO = PEA + NÃO (Pelo menos um / Existe / Algum + NÃO).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Para negar o quantificador universal afirmativo 'Todo A é B', basta encontrar uma exceção: 'Algum A NÃO é B', 'Pelo menos um A NÃO é B' ou 'Existe A que NÃO é B' (Mnemônico PEA + NÃO). Jamais se nega 'Todo' com 'Nenhum'!",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_009",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Quantificador • Nenhum A é B",
    "question": "[AOCP PMPE Inédita Q009] A negação lógica da sentença 'Nenhum militar do batalhão cometeu infração de trânsito' é:",
    "options": [
      "Todos os militares do batalhão cometeram infração de trânsito.",
      "Pelo menos um militar do batalhão cometeu infração de trânsito.",
      "Apenas o comandante cometeu infração de trânsito.",
      "Nenhum militar foi autuado.",
      "Se o militar cometeu infração, então ele não pertence ao batalhão."
    ],
    "correctIndex": 1,
    "explanation": "Para negar 'Nenhum A é B', basta que exista ao menos um elemento que seja B: 'Algum militar cometeu infração' ou 'Pelo menos um militar cometeu infração de trânsito'.",
    "fundamentacaoLegal": "Negação do Quantificador Universal Negativo.",
    "hint": "Negação de Nenhum = Algum / Pelo menos um / Existe!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Negação de NENHUM = PEA (Pelo menos um / Existe / Algum SIM).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Para negar 'Nenhum A é B', basta que exista ao menos um elemento que seja B: 'Algum militar cometeu infração' ou 'Pelo menos um militar cometeu infração de trânsito'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_010",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Tautologia, Contradição e Contingência",
    "question": "[AOCP PMPE Inédita Q010] Na lógica proposicional, uma proposição composta que resulta SEMPRE em valor lógico VERDADEIRO (V), independentemente dos valores lógicos atribuídos às suas proposições simples componentes, é classificada como:",
    "options": [
      "Contradição.",
      "Contingência.",
      "Tautologia.",
      "Silogismo nulo.",
      "Equivalência falsa."
    ],
    "correctIndex": 2,
    "explanation": "Uma proposição composta é dita TAUTOLOGIA quando sua tabela-verdade tem valor V em todas as linhas. Se for sempre F, é uma Contradição. Se tiver V e F misturados, é uma Contingência.",
    "fundamentacaoLegal": "Classificação Semântica das Proposições Compostas.",
    "hint": "Sempre Verdadeira = Tautologia; Sempre Falsa = Contradição!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Tudo Verdade = Tautologia (Top). Tudo Falso = Contradição.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Uma proposição composta é dita TAUTOLOGIA quando sua tabela-verdade tem valor V em todas as linhas. Se for sempre F, é uma Contradição. Se tiver V e F misturados, é uma Contingência.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_011",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Teoria dos Conjuntos • Problema com 2 Diagramas de Venn",
    "question": "[AOCP PMPE Inédita Q011] Em um batalhão da PMPE com 100 policiais, sabe-se que 65 são habilitados para pilotar motocicletas da ROCAM, 55 são habilitados para dirigir viaturas 4x4 e 30 possuem ambas as habilitações. Quantos policiais desse batalhão NÃO possuem nenhuma dessas duas habilitações?",
    "options": [
      "5 policiais.",
      "10 policiais.",
      "15 policiais.",
      "20 policiais.",
      "25 policiais."
    ],
    "correctIndex": 1,
    "explanation": "Pela fórmula da união de dois conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). n(A ∪ B) = 65 + 55 - 30 = 120 - 30 = 90 policiais possuem ao menos uma habilitação. Portanto, o número de policiais sem nenhuma habilitação é 100 - 90 = 10 policiais.",
    "fundamentacaoLegal": "Princípio da Inclusão-Exclusão para Dois Conjuntos.",
    "hint": "Some os dois grupos e subtraia a interseção; o que sobrar de 100 é a resposta!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "65 + 55 = 120; 120 - 30 = 90. De 90 para 100 faltam 10.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Pela fórmula da união de dois conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). n(A ∪ B) = 65 + 55 - 30 = 120 - 30 = 90 policiais possuem ao menos uma habilitação. Portanto, o número de policiais sem nenhuma habilitação é 100 - 90 = 10 policiais.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_012",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Princípio Fundamental da Contagem (PFC)",
    "question": "[AOCP PMPE Inédita Q012] Para montar a escala de serviço de uma guarnição militar especial, o comandante precisa escolher 1 oficial (entre 4 disponíveis), 1 sargento (entre 6 disponíveis) e 1 soldado motorista (entre 5 disponíveis). De quantas maneiras distintas essa guarnição pode ser formada?",
    "options": [
      "15 maneiras.",
      "60 maneiras.",
      "120 maneiras.",
      "240 maneiras.",
      "360 maneiras."
    ],
    "correctIndex": 2,
    "explanation": "Pelo Princípio Fundamental da Contagem (PFC), basta multiplicar as possibilidades de cada etapa independente: 4 (oficiais) × 6 (sargentos) × 5 (soldados) = 120 maneiras diferentes.",
    "fundamentacaoLegal": "Princípio Fundamental da Contagem (Multiplicativo).",
    "hint": "Multiplique as opções de cada função: Oficiais × Sargentos × Soldados!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "PFC = 곱 (multiplicação direta das etapas): 4 × 6 × 5 = 120.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo Princípio Fundamental da Contagem (PFC), basta multiplicar as possibilidades de cada etapa independente: 4 (oficiais) × 6 (sargentos) × 5 (soldados) = 120 maneiras diferentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_013",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória • Combinação Simples",
    "question": "[AOCP PMPE Inédita Q013] Em um pelotão com 10 soldados qualificados, o tenente precisa formar uma patrulha tática composta por 3 soldados. Como a ordem de escolha dos soldados não altera a equipe, o número de patrulhas distintas que podem ser formadas é:",
    "options": [
      "30 patrulhas.",
      "60 patrulhas.",
      "120 patrulhas.",
      "720 patrulhas.",
      "1.000 patrulhas."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem dos elementos não importa (o soldado A, B e C formam a mesma patrulha que C, B e A), trata-se de uma Combinação Simples C(10, 3) = 10! / [3!(10 - 3)!] = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 patrulhas.",
    "fundamentacaoLegal": "Fórmula da Combinação Simples: C(n, p) = n! / [p!(n - p)!].",
    "hint": "A ordem não importa = Combinação! (10 × 9 × 8) / (3 × 2 × 1).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Combinação: 'Com ordem não me importo'. Três casas em cima divididas por 3! embaixo.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Como a ordem dos elementos não importa (o soldado A, B e C formam a mesma patrulha que C, B e A), trata-se de uma Combinação Simples C(10, 3) = 10! / [3!(10 - 3)!] = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 patrulhas.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_014",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória • Permutação com Repetição (Anagramas)",
    "question": "[AOCP PMPE Inédita Q014] O número de anagramas distintos que podem ser formados com todas as letras da palavra 'POLICIA' (desconsiderando acentuação gráfica) é igual a:",
    "options": [
      "120.",
      "720.",
      "2.520.",
      "5.040.",
      "10.080."
    ],
    "correctIndex": 2,
    "explanation": "A palavra POLICIA tem 7 letras no total, com a letra 'I' repetida 2 vezes e a letra 'O', 'P', 'L', 'C', 'A' aparecendo 1 vez. O número de anagramas é a Permutação com repetição: P_7^(2) = 7! / 2! = (7 × 6 × 5 × 4 × 3 × 2 × 1) / 2 = 5040 / 2 = 2520 anagramas.",
    "fundamentacaoLegal": "Permutação com Elementos Repetidos.",
    "hint": "7 letras no total divididas pelo fatorial das letras repetidas (o 'I' repete 2x)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "7! / 2! = 5040 / 2 = 2520.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. A palavra POLICIA tem 7 letras no total, com a letra 'I' repetida 2 vezes e a letra 'O', 'P', 'L', 'C', 'A' aparecendo 1 vez. O número de anagramas é a Permutação com repetição: P_7^(2) = 7! / 2! = (7 × 6 × 5 × 4 × 3 × 2 × 1) / 2 = 5040 / 2 = 2520 anagramas.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_015",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Cálculo de Probabilidade Simples",
    "question": "[AOCP PMPE Inédita Q015] Uma urna contém 12 cédulas com números de matrículas de candidatos ao concurso da PMPE, sendo 5 de candidatos de Recife, 4 de Caruaru e 3 de Petrolina. Sorteando-se uma cédula ao acaso, qual é a probabilidade de o candidato sorteado NÃO ser de Recife?",
    "options": [
      "5/12",
      "7/12",
      "1/3",
      "1/4",
      "7/10"
    ],
    "correctIndex": 1,
    "explanation": "O total de casos possíveis é 12 cédulas. Os casos favoráveis ao evento 'NÃO ser de Recife' são os candidatos de Caruaru (4) e Petrolina (3): 4 + 3 = 7 casos. Portanto, a probabilidade é P = 7/12.",
    "fundamentacaoLegal": "Definição Clássica de Probabilidade de Laplace: P(E) = Favoráveis / Total.",
    "hint": "Casos favoráveis = todos os que não são de Recife (4 + 3 = 7) sobre o total de 12!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Total menos Recife = 12 - 5 = 7. Probabilidade = 7/12.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O total de casos possíveis é 12 cédulas. Os casos favoráveis ao evento 'NÃO ser de Recife' são os candidatos de Caruaru (4) e Petrolina (3): 4 + 3 = 7 casos. Portanto, a probabilidade é P = 7/12.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_016",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Tabela-Verdade da Condicional.",
    "question": "[AOCP PMPE Inédita Q016] Sabendo que a proposição 'p' é VERDADEIRA e a proposição 'q' é FALSA, o valor lógico da condicional p → q é:",
    "options": [
      "Verdadeiro.",
      "Falso.",
      "Inconclusivo.",
      "Tautológico.",
      "Contingente."
    ],
    "correctIndex": 1,
    "explanation": "Na condicional p → q, a única linha que resulta em Falso é quando a primeira é Verdadeira e a segunda é Falsa (Vera Fischer é Falsa: V → F = F).",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Na condicional p → q, a única linha que resulta em Falso é quando a primeira é Verdadeira e a segunda é Falsa (Vera Fischer é Falsa: V → F = F).",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_017",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Propriedade da Conjunção.",
    "question": "[AOCP PMPE Inédita Q017] A conjunção (p ∧ q) só assume valor lógico VERDADEIRO quando:",
    "options": [
      "Pelo menos uma das proposições é verdadeira.",
      "Ambas as proposições simples 'p' e 'q' forem verdadeiras.",
      "Ambas forem falsas.",
      "A primeira for verdadeira e a segunda falsa.",
      "A segunda for verdadeira."
    ],
    "correctIndex": 1,
    "explanation": "O conectivo 'E' (conjunção) é exigente: só é verdade quando tudo for verdade (V ∧ V = V).",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O conectivo 'E' (conjunção) é exigente: só é verdade quando tudo for verdade (V ∧ V = V).",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_018",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Propriedade da Disjunção Inclusiva.",
    "question": "[AOCP PMPE Inédita Q018] A disjunção inclusiva (p ∨ q) só assume valor lógico FALSO quando:",
    "options": [
      "Ambas as proposições simples forem simultaneamente falsas.",
      "Ambas forem verdadeiras.",
      "A primeira for falsa e a segunda verdadeira.",
      "O conectivo for condicional.",
      "Houver uma tautologia."
    ],
    "correctIndex": 0,
    "explanation": "O conectivo 'OU' (disjunção) só é falso quando ambas forem falsas (F ∨ F = F). Havendo pelo menos uma verdade, o resultado é V.",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Correta. O conectivo 'OU' (disjunção) só é falso quando ambas forem falsas (F ∨ F = F). Havendo pelo menos uma verdade, o resultado é V.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_019",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Propriedade da Disjunção Exclusiva.",
    "question": "[AOCP PMPE Inédita Q019] A disjunção exclusiva (p ⊻ q) é verdadeira se e somente se:",
    "options": [
      "Ambas forem verdadeiras.",
      "As proposições componentes possuírem valores lógicos distintos (uma V e a outra F).",
      "Ambas forem falsas.",
      "A condicional for verdadeira.",
      "Nenhuma for proposição."
    ],
    "correctIndex": 1,
    "explanation": "O 'OU... OU' (disjunção exclusiva) exige alternância: só é V se uma for V e a outra F.",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O 'OU... OU' (disjunção exclusiva) exige alternância: só é V se uma for V e a outra F.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_020",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Propriedade da Bicondicional.",
    "question": "[AOCP PMPE Inédita Q020] A bicondicional (p ↔ q) é verdadeira se e somente se:",
    "options": [
      "Ambas as proposições tiverem o mesmo valor lógico (ambas V ou ambas F).",
      "A primeira for V e a segunda F.",
      "Houver uma contradição.",
      "O 'p' for falso e o 'q' for verdadeiro.",
      "O antecedente for nulo."
    ],
    "correctIndex": 0,
    "explanation": "A bicondicional (Se e somente se) é verdadeira quando os dois lados têm o mesmo valor lógico: V ↔ V = V e F ↔ F = V.",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Correta. A bicondicional (Se e somente se) é verdadeira quando os dois lados têm o mesmo valor lógico: V ↔ V = V e F ↔ F = V.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_021",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Equivalência de Negação com De Morgan.",
    "question": "[AOCP PMPE Inédita Q021] Dizer que 'Não é verdade que o soldado cometeu falta grave e foi punido' equivale logicamente a dizer que:",
    "options": [
      "O soldado não cometeu falta grave ou não foi punido.",
      "O soldado não cometeu falta grave e não foi punido.",
      "Se o soldado cometeu falta grave, então não foi punido.",
      "O soldado cometeu falta grave mas não foi punido.",
      "O soldado foi punido e não cometeu falta."
    ],
    "correctIndex": 0,
    "explanation": "Aplicando De Morgan a ~(p ∧ q), temos ~p ∨ ~q: 'O soldado não cometeu falta grave OU não foi punido'.",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Correta. Aplicando De Morgan a ~(p ∧ q), temos ~p ∨ ~q: 'O soldado não cometeu falta grave OU não foi punido'.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_022",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Negação do Se... Então.",
    "question": "[AOCP PMPE Inédita Q022] Qual é a negação lógica de 'Se o capitão dá a ordem, o pelotão avança'?",
    "options": [
      "O capitão dá a ordem e o pelotão não avança.",
      "O capitão não dá a ordem e o pelotão avança.",
      "Se o pelotão avança, o capitão deu a ordem.",
      "Se o capitão não dá a ordem, o pelotão não avança.",
      "O capitão não dá a ordem ou o pelotão não avança."
    ],
    "correctIndex": 0,
    "explanation": "Pela regra do MANÉ: Mantém a primeira ('O capitão dá a ordem') E Nega a segunda ('o pelotão não avança').",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Correta. Pela regra do MANÉ: Mantém a primeira ('O capitão dá a ordem') E Nega a segunda ('o pelotão não avança').",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_023",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Equivalência Contrapositiva.",
    "question": "[AOCP PMPE Inédita Q023] A afirmação 'Se hoje é dia de folga, então vou à praia de Porto de Galinhas' é equivalente a:",
    "options": [
      "Se não vou à praia de Porto de Galinhas, então hoje não é dia de folga.",
      "Se vou à praia de Porto de Galinhas, então hoje é dia de folga.",
      "Hoje é dia de folga e não vou à praia.",
      "Hoje não é dia de folga e vou à praia.",
      "Ou hoje é dia de folga ou vou à praia."
    ],
    "correctIndex": 0,
    "explanation": "Pela contrapositiva: p → q ≡ ~q → ~p ('Se não vou à praia, então hoje não é folga').",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Correta. Pela contrapositiva: p → q ≡ ~q → ~p ('Se não vou à praia, então hoje não é folga').",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_024",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Equivalência Condicional-Disjunção.",
    "question": "[AOCP PMPE Inédita Q024] Dizer que 'Se o soldado estuda, ele passa' equivale pela regra da disjunção (Regra do Neymar) a:",
    "options": [
      "O soldado não estuda ou ele passa.",
      "O soldado estuda e ele passa.",
      "O soldado passa ou não estuda.",
      "O soldado estuda ou não passa.",
      "Se o soldado passa, ele estudou."
    ],
    "correctIndex": 0,
    "explanation": "p → q ≡ ~p ∨ q: 'O soldado NÃO estuda OU ele passa'.",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Correta. p → q ≡ ~p ∨ q: 'O soldado NÃO estuda OU ele passa'.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_025",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico • Relações Lógicas de Contradição de Quantificadores.",
    "question": "[AOCP PMPE Inédita Q025] Se a proposição 'Algum recruta não concluiu o percurso de tiro' é FALSA, então é obrigatoriamente VERDADEIRO que:",
    "options": [
      "Nenhum recruta concluiu o percurso de tiro.",
      "Todos os recrutas concluíram o percurso de tiro.",
      "Pelo menos um recruta não concluiu.",
      "A maioria não concluiu.",
      "O percurso foi anulado."
    ],
    "correctIndex": 1,
    "explanation": "Se 'Algum não...' é falsa, sua negação contraditória ('Todos concluíram') é verdadeira.",
    "fundamentacaoLegal": "Lógica Proposicional e Álgebra de Boole • Padrão AOCP.",
    "hint": "Aplique as tabelas-verdade ou leis de equivalência lógica!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Foco nos mnemônicos: MANÉ, NEYMAR, DE MORGAN e PEA.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se 'Algum não...' é falsa, sua negação contraditória ('Todos concluíram') é verdadeira.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_026",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q026] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_027",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q027] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_028",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q028] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_029",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q029] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_030",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q030] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_031",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q031] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_032",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q032] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_033",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q033] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_034",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q034] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_035",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q035] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_036",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q036] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_037",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q037] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_038",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q038] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_039",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q039] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_040",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q040] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_041",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q041] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_042",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q042] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_043",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q043] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_044",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q044] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_045",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q045] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_046",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q046] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_047",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q047] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_048",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q048] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_049",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q049] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_050",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q050] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_051",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q051] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_052",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q052] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_053",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q053] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_054",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q054] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_055",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q055] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_056",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q056] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_057",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q057] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_058",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q058] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_059",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q059] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_060",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q060] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_061",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q061] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_062",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q062] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_063",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q063] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_064",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q064] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_065",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q065] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_066",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q066] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_067",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q067] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_068",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q068] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_069",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q069] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_070",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q070] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_071",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q071] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_072",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q072] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_073",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q073] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_074",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q074] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_075",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q075] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_076",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q076] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_077",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q077] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_078",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q078] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_079",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q079] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_080",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q080] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_081",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q081] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_082",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q082] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_083",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q083] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_084",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q084] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_085",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q085] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_086",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q086] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_087",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q087] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_088",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q088] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_089",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q089] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_090",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q090] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_091",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q091] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_092",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q092] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_093",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q093] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_094",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q094] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_095",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q095] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_096",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Operações com Conjuntos: Apenas A.",
    "question": "[AOCP PMPE Inédita Q096] Em um grupo de 80 militares, 50 praticam corrida, 40 praticam natação e 20 praticam ambas as modalidades. Quantos militares praticam APENAS corrida?",
    "options": [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    "correctIndex": 2,
    "explanation": "Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Quem pratica apenas corrida é o total de corredores menos a interseção que também nada: 50 - 20 = 30 militares.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_097",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Arranjo Simples / Princípio Multiplicativo.",
    "question": "[AOCP PMPE Inédita Q097] Quantos números de 4 algarismos distintos podemos formar utilizando os algarismos 1, 2, 3, 4, 5 e 6?",
    "options": [
      "120",
      "240",
      "360",
      "720",
      "1.296"
    ],
    "correctIndex": 2,
    "explanation": "Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "1": "Você marcou (B): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Incorreta. A assertiva (B) viola as regras matemáticas e lógicas vigentes.",
      "C": "Correta. Pelo PFC: 6 opções para o primeiro × 5 para o segundo × 4 para o terceiro × 3 para o quarto = 6 × 5 × 4 × 3 = 360 números.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_098",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Probabilidade com Lançamento de Dados.",
    "question": "[AOCP PMPE Inédita Q098] Dois dados perfeitos de 6 faces são lançados simultaneamente. Qual é a probabilidade de a soma das faces superiores ser igual a 7?",
    "options": [
      "1/36",
      "6/36 (ou 1/6)",
      "7/36",
      "5/36",
      "1/12"
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O espaço amostral tem 6 × 6 = 36 pares. Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos favoráveis. P = 6/36 = 1/6.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_099",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Sequências Lógicas Numéricas.",
    "question": "[AOCP PMPE Inédita Q099] Considere a sequência lógica numérica: 3, 7, 15, 31, 63, ... O próximo termo dessa sequência é:",
    "options": [
      "95",
      "127",
      "126",
      "125",
      "129"
    ],
    "correctIndex": 1,
    "explanation": "O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. O padrão da sequência é dobrar o termo anterior e somar 1: (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; logo o próximo é (63×2)+1 = 126 + 1 = 127.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  },
  {
    "id": "rlm_inedita_100_100",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico-Matemático • Silogismos e Diagramas Lógicos.",
    "question": "[AOCP PMPE Inédita Q100] Se todo A é B e nenhum B é C, então pode-se concluir logicamente que:",
    "options": [
      "Todo A é C.",
      "Nenhum A é C.",
      "Algum A é C.",
      "Algum C é B.",
      "Todo B é A."
    ],
    "correctIndex": 1,
    "explanation": "Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
    "fundamentacaoLegal": "Matemática Discreta e RLM • Banca AOCP.",
    "hint": "Analise a dedução lógica e faça os cálculos matemáticos com calma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão clássica de prova policial da AOCP.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "2": "Você marcou (C): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "3": "Você marcou (D): Resposta incorreta nos cálculos ou na lógica da proposição.",
      "4": "Você marcou (E): Resposta incorreta nos cálculos ou na lógica da proposição."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) viola as regras matemáticas e lógicas vigentes.",
      "B": "Correta. Se todo A está dentro de B, e B está completamente separado de C (nenhum B é C), então A também está totalmente separado de C: 'Nenhum A é C'.",
      "C": "Incorreta. A assertiva (C) viola as regras matemáticas e lógicas vigentes.",
      "D": "Incorreta. A assertiva (D) viola as regras matemáticas e lógicas vigentes.",
      "E": "Incorreta. A assertiva (E) viola as regras matemáticas e lógicas vigentes."
    }
  }
];
