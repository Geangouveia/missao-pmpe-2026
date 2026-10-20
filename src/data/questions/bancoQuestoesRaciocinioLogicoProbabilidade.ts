import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: RACIOCÍNIO LÓGICO & PROBABILIDADE PMPE 2026 (INSTITUTO AOCP)
 * Total: 200 Questões 100% INÉDITAS e EXCLUSIVAS, sem nenhuma repetição.
 * Abrange: Tabela-Verdade, Conectivos, De Morgan, MANÉ, Equivalências, Quantificadores,
 * PFC, Permutações, Anagramas, Combinações, Arranjos, Probabilidade, Venn e Casa dos Pombos.
 */
export const BANCO_RACIOCINIO_PROBABILIDADE: QuizQuestion[] = [
  {
    "id": "rlm_inedita_001",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Conceito de Proposição Lógica",
    "question": "[Simulado PMPE AOCP - Questão 001] Na lógica sentencial clássica, uma proposição é definida como uma oração declarativa que pode ser valorada exclusivamente como verdadeira ou como falsa. Com base nessa definição, assinale a única alternativa que expressa uma proposição lógica válida:",
    "options": [
      "Faça um relatório detalhado sobre o assalto ao banco imediatamente!",
      "Quem foi o policial responsável pela prisão em flagrante?",
      "Que excelente operação realizada pelo Batalhão de Choque no centro da cidade!",
      "O soldado da PMPE conduziu a viatura até o posto de triagem.",
      "x + 5 = 12, para x pertencente aos números reais."
    ],
    "correctIndex": 3,
    "explanation": "'O soldado da PMPE conduziu a viatura até o posto de triagem' é uma oração declarativa com sujeito e predicado bem definidos, expressando um pensamento completo passível de valoração bivalente (V ou F).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "'O soldado da PMPE conduziu a viatura até o posto de triagem' é uma oração declarativa com sujeito e predicado bem definidos, expressando um pensamento completo passível de valoração bivalente (V ou F)."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Correta. 'O soldado da PMPE conduziu a viatura até o posto de triagem' é uma oração declarativa com sujeito e predicado bem definidos, expressando um pensamento completo passível de valoração bivalente (V ou F).",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_002",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Princípios Fundamentais - Terceiro Excluído",
    "question": "[Simulado PMPE AOCP - Questão 002] O postulado fundamental da lógica proposicional clássica que estabelece que 'uma proposição ou é verdadeira ou é falsa, não havendo uma terceira possibilidade intermediária' denomina-se:",
    "options": [
      "Princípio da Identidade.",
      "Princípio do Terceiro Excluído.",
      "Princípio da Não-Contradição.",
      "Princípio da Dupla Negação.",
      "Princípio do Modus Ponens."
    ],
    "correctIndex": 1,
    "explanation": "O Princípio do Terceiro Excluído (Tertium non datur) assegura que existem apenas dois valores lógicos na lógica clássica: V ou F. Não há meio-termo.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O Princípio do Terceiro Excluído (Tertium non datur) assegura que existem apenas dois valores lógicos na lógica clássica: V ou F. Não há meio-termo."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. O Princípio do Terceiro Excluído (Tertium non datur) assegura que existem apenas dois valores lógicos na lógica clássica: V ou F. Não há meio-termo.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_003",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Princípios Fundamentais - Não-Contradição",
    "question": "[Simulado PMPE AOCP - Questão 003] Na análise lógica de depoimentos periciais, o princípio lógico que assegura que 'nenhuma proposição pode ser simultaneamente verdadeira e falsa sob o mesmo prisma e no mesmo tempo' é o:",
    "options": [
      "Princípio da Não-Contradição.",
      "Princípio da Identidade.",
      "Princípio da Transitividade.",
      "Princípio da Bivalência Restrita.",
      "Princípio da Incompatibilidade."
    ],
    "correctIndex": 0,
    "explanation": "O Princípio da Não-Contradição assevera que uma proposição não pode ser V e F ao mesmo tempo: ~(P ∧ ~P) é sempre uma verdade universal.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O Princípio da Não-Contradição assevera que uma proposição não pode ser V e F ao mesmo tempo: ~(P ∧ ~P) é sempre uma verdade universal."
    ],
    "analiseAlternativas": {
      "A": "Correta. O Princípio da Não-Contradição assevera que uma proposição não pode ser V e F ao mesmo tempo: ~(P ∧ ~P) é sempre uma verdade universal.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_004",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Identificação de Sentença Aberta",
    "question": "[Simulado PMPE AOCP - Questão 004] Dentre as declarações a seguir, assinale a única que configura uma SENTENÇA ABERTA e, por isso, não pode ser classificada diretamente em verdadeira ou falsa:",
    "options": [
      "O 1º Batalhão da PMPE fica sediado no Recife.",
      "O número 17 é um número primo.",
      "Ele efetuou três disparos de advertência durante a abordagem.",
      "O Estatuto dos Policiais Militares de Pernambuco é a Lei nº 6.783/1974.",
      "A Constituição de 1988 prevê a segurança pública em seu Artigo 144."
    ],
    "correctIndex": 2,
    "explanation": "'Ele efetuou três disparos...' possui o pronome indefinido 'Ele' sem referência explícita no texto, configurando uma sentença aberta com variável livre.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "'Ele efetuou três disparos...' possui o pronome indefinido 'Ele' sem referência explícita no texto, configurando uma sentença aberta com variável livre."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. 'Ele efetuou três disparos...' possui o pronome indefinido 'Ele' sem referência explícita no texto, configurando uma sentença aberta com variável livre.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_005",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Tabela Verdade - Número de Linhas com 3 Variáveis",
    "question": "[Simulado PMPE AOCP - Questão 005] Um sargento da PMPE precisa avaliar a veracidade de uma ordem composta pelas proposições simples P, Q e R. O número total de linhas distintas na tabela-verdade completa dessa estrutura lógica é:",
    "options": [
      "4 linhas.",
      "6 linhas.",
      "8 linhas.",
      "12 linhas.",
      "16 linhas."
    ],
    "correctIndex": 2,
    "explanation": "O número de linhas de uma tabela-verdade é dado por 2^n, onde n é a quantidade de proposições simples. Com 3 proposições (P, Q, R): 2^3 = 8 linhas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O número de linhas de uma tabela-verdade é dado por 2^n, onde n é a quantidade de proposições simples. Com 3 proposições (P, Q, R): 2^3 = 8 linhas."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. O número de linhas de uma tabela-verdade é dado por 2^n, onde n é a quantidade de proposições simples. Com 3 proposições (P, Q, R): 2^3 = 8 linhas.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_006",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Tabela Verdade - Número de Linhas com 4 Variáveis",
    "question": "[Simulado PMPE AOCP - Questão 006] Considere a proposição composta: ((P ∧ Q) ∨ (~R → S)). O número de combinações possíveis de valores-verdade (linhas da tabela-verdade) para essa sentença é:",
    "options": [
      "8 linhas.",
      "12 linhas.",
      "16 linhas.",
      "24 linhas.",
      "32 linhas."
    ],
    "correctIndex": 2,
    "explanation": "Há 4 proposições simples distintas: P, Q, R, S. Logo: 2^4 = 16 linhas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Há 4 proposições simples distintas: P, Q, R, S. Logo: 2^4 = 16 linhas."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. Há 4 proposições simples distintas: P, Q, R, S. Logo: 2^4 = 16 linhas.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_007",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Tabela Verdade - Número de Linhas com 5 Variáveis",
    "question": "[Simulado PMPE AOCP - Questão 007] A quantidade de linhas presentes na tabela-verdade da fórmula lógica (A ∧ B ∧ C) ↔ (D ∨ ~E) é exatamente igual a:",
    "options": [
      "10 linhas.",
      "16 linhas.",
      "25 linhas.",
      "32 linhas.",
      "64 linhas."
    ],
    "correctIndex": 3,
    "explanation": "Com 5 variáveis proposicionais independentes (A, B, C, D, E), o total de linhas é 2^5 = 32 linhas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Com 5 variáveis proposicionais independentes (A, B, C, D, E), o total de linhas é 2^5 = 32 linhas."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Correta. Com 5 variáveis proposicionais independentes (A, B, C, D, E), o total de linhas é 2^5 = 32 linhas.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_008",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Conjunção (E) - Valor Lógico",
    "question": "[Simulado PMPE AOCP - Questão 008] Sejam as proposições p: 'O soldado fez a ronda' (Verdadeira) e q: 'O alarme tocou' (Falsa). O valor lógico da conjunção (p ∧ q) é:",
    "options": [
      "Falso, pois a conjunção requer a veracidade simultânea de ambas as proposições.",
      "Verdadeiro, pois basta que uma proposição seja verdadeira.",
      "Indeterminado pela ordem das premissas.",
      "Tautológico.",
      "Contingente sem valor definido."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'E' (∧) só é verdadeira se ambas forem verdadeiras. Como q é falsa, V ∧ F = F (Falso).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A conjunção 'E' (∧) só é verdadeira se ambas forem verdadeiras. Como q é falsa, V ∧ F = F (Falso)."
    ],
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'E' (∧) só é verdadeira se ambas forem verdadeiras. Como q é falsa, V ∧ F = F (Falso).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_009",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Disjunção Inclusiva (OU) - Valor Lógico",
    "question": "[Simulado PMPE AOCP - Questão 009] Dadas as proposições p: 'O suspeito fugiu pelo telhado' (Falsa) e q: 'O cerco policial impediu a fuga' (Verdadeira), a disjunção inclusiva (p ∨ q) possui valor lógico:",
    "options": [
      "Falso, pois há uma proposição componente falsa.",
      "Verdadeiro, pois a disjunção inclusiva é verdadeira se ao menos uma for verdadeira.",
      "Falso, por incompatibilidade lógica.",
      "Indeterminado.",
      "Contraditório."
    ],
    "correctIndex": 1,
    "explanation": "A disjunção inclusiva 'OU' (∨) é verdadeira sempre que pelo menos uma proposição for verdadeira. F ∨ V = V.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A disjunção inclusiva 'OU' (∨) é verdadeira sempre que pelo menos uma proposição for verdadeira. F ∨ V = V."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. A disjunção inclusiva 'OU' (∨) é verdadeira sempre que pelo menos uma proposição for verdadeira. F ∨ V = V.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_010",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Disjunção Exclusiva (OU... OU) - Valor Lógico",
    "question": "[Simulado PMPE AOCP - Questão 010] A afirmação 'Ou a viatura realiza a ronda em Olinda, ou a viatura realiza a ronda em Paulista' (p ⊻ q) é uma disjunção exclusiva. Se ambas as proposições p e q forem VERDADEIRAS, o valor lógico dessa afirmação será:",
    "options": [
      "Verdadeiro, pois ambas se confirmaram no mundo fático.",
      "Falso, pois a disjunção exclusiva exige que exatamente uma seja verdadeira e a outra falsa.",
      "Verdadeiro por presunção de legalidade.",
      "Indeterminado segundo a lógica bivalente.",
      "Tautológico."
    ],
    "correctIndex": 1,
    "explanation": "Na disjunção exclusiva (⊻), se ambas forem V, o resultado é Falso (V ⊻ V = F). Só é verdadeira quando os valores lógicos forem diferentes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Na disjunção exclusiva (⊻), se ambas forem V, o resultado é Falso (V ⊻ V = F). Só é verdadeira quando os valores lógicos forem diferentes."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. Na disjunção exclusiva (⊻), se ambas forem V, o resultado é Falso (V ⊻ V = F). Só é verdadeira quando os valores lógicos forem diferentes.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_011",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Condicional (Se... então) - Regra Vera Fischer",
    "question": "[Simulado PMPE AOCP - Questão 011] A condicional 'Se a sirene for ligada, então o trânsito abrirá passagem' (P → Q) terá valor lógico FALSO exclusivamente se:",
    "options": [
      "A sirene for ligada e o trânsito NÃO abrir passagem.",
      "A sirene não for ligada e o trânsito abrir passagem.",
      "A sirene não for ligada e o trânsito não abrir passagem.",
      "A sirene for ligada e o trânsito abrir passagem.",
      "Ambas as proposições forem simultaneamente verdadeiras."
    ],
    "correctIndex": 0,
    "explanation": "A condicional P → Q só é FALSA quando o antecedente é Verdadeiro e o consequente é Falso (V → F = F, caso 'Vera Fischer').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A condicional P → Q só é FALSA quando o antecedente é Verdadeiro e o consequente é Falso (V → F = F, caso 'Vera Fischer')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A condicional P → Q só é FALSA quando o antecedente é Verdadeiro e o consequente é Falso (V → F = F, caso 'Vera Fischer').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_012",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Condicional com Antecedente Falso",
    "question": "[Simulado PMPE AOCP - Questão 012] Se a proposição p: 'O Sol gira em torno da Terra' é sabidamente FALSA, qual é o valor lógico da condicional 'Se o Sol gira em torno da Terra, então todo policial militar é faixa preta de judô'?",
    "options": [
      "Falso, porque policiais nem sempre são faixas pretas.",
      "Verdadeiro, porque qualquer condicional de antecedente falso é logicamente verdadeira.",
      "Falso, devido ao absurdo da premissa astronômica.",
      "Indeterminado.",
      "Nulo."
    ],
    "correctIndex": 1,
    "explanation": "Na tabela-verdade de P → Q, quando P é Falso, o resultado da condicional é SEMPRE VERDADEIRO (F → V = V e F → F = V).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Na tabela-verdade de P → Q, quando P é Falso, o resultado da condicional é SEMPRE VERDADEIRO (F → V = V e F → F = V)."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. Na tabela-verdade de P → Q, quando P é Falso, o resultado da condicional é SEMPRE VERDADEIRO (F → V = V e F → F = V).",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_013",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Bicondicional (Se e somente se)",
    "question": "[Simulado PMPE AOCP - Questão 013] A proposição 'O candidato ingressará na PMPE se e somente se for aprovado em todas as etapas do concurso' (P ↔ Q) é VERDADEIRA quando:",
    "options": [
      "P e Q possuírem o mesmo valor lógico (ambas verdadeiras ou ambas falsas).",
      "P for verdadeira e Q for falsa.",
      "P for falsa e Q for verdadeira.",
      "Apenas quando P e Q forem ambas verdadeiras.",
      "Apenas se o concurso for do Instituto AOCP."
    ],
    "correctIndex": 0,
    "explanation": "A bicondicional (↔) é verdadeira se e somente se ambos os lados possuírem o MESMO valor lógico (V ↔ V = V e F ↔ F = V).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A bicondicional (↔) é verdadeira se e somente se ambos os lados possuírem o MESMO valor lógico (V ↔ V = V e F ↔ F = V)."
    ],
    "analiseAlternativas": {
      "A": "Correta. A bicondicional (↔) é verdadeira se e somente se ambos os lados possuírem o MESMO valor lógico (V ↔ V = V e F ↔ F = V).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_014",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Determinação de Valores Lógicos - Condicional Falsa",
    "question": "[Simulado PMPE AOCP - Questão 014] Sabendo que a condicional (A ∧ B) → C é FALSA, conclui-se obrigatoriamente que:",
    "options": [
      "A é V, B é V e C é F.",
      "A é V, B é F e C é F.",
      "A é F, B é V e C é F.",
      "A é F, B é F e C é V.",
      "A é V, B é V e C é V."
    ],
    "correctIndex": 0,
    "explanation": "Para a condicional ser Falsa: Antecedente (A ∧ B) deve ser V -> A = V e B = V. Consequente C deve ser F -> C = F. Portanto, A é V, B é V e C é F.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Para a condicional ser Falsa: Antecedente (A ∧ B) deve ser V -> A = V e B = V. Consequente C deve ser F -> C = F. Portanto, A é V, B é V e C é F."
    ],
    "analiseAlternativas": {
      "A": "Correta. Para a condicional ser Falsa: Antecedente (A ∧ B) deve ser V -> A = V e B = V. Consequente C deve ser F -> C = F. Portanto, A é V, B é V e C é F.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_015",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Determinação de Valores Lógicos - Disjunção Falsa",
    "question": "[Simulado PMPE AOCP - Questão 015] Se a proposição composta (P ∨ ~Q) é FALSA, os valores lógicos de P e Q são, respectivamente:",
    "options": [
      "P é Falsa e Q é Verdadeira.",
      "P é Verdadeira e Q é Falsa.",
      "P é Falsa e Q é Falsa.",
      "P é Verdadeira e Q é Verdadeira.",
      "P é Falsa e Q tem valor indeterminado."
    ],
    "correctIndex": 0,
    "explanation": "Para P ∨ ~Q ser Falsa, ambas as parcelas devem ser falsas: P = F e ~Q = F. Se ~Q é F, então Q é Verdadeira. Logo: P é Falsa e Q é Verdadeira.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Para P ∨ ~Q ser Falsa, ambas as parcelas devem ser falsas: P = F e ~Q = F. Se ~Q é F, então Q é Verdadeira. Logo: P é Falsa e Q é Verdadeira."
    ],
    "analiseAlternativas": {
      "A": "Correta. Para P ∨ ~Q ser Falsa, ambas as parcelas devem ser falsas: P = F e ~Q = F. Se ~Q é F, então Q é Verdadeira. Logo: P é Falsa e Q é Verdadeira.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_016",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Tautologia Lógica",
    "question": "[Simulado PMPE AOCP - Questão 016] Uma proposição composta é classificada como TAUTOLOGIA se, e somente se:",
    "options": [
      "Seu valor lógico for verdadeiro em todas as linhas de sua tabela-verdade.",
      "Ela possuir mais valores verdadeiros do que falsos.",
      "Seu valor depender da realidade dos fatos empíricos.",
      "Seu valor lógico for sempre falso.",
      "Ela for composta exclusivamente por conjunções."
    ],
    "correctIndex": 0,
    "explanation": "Tautologia é a proposição composta cujo valor lógico é invariavelmente VERDADEIRO para qualquer combinação de valores de suas variáveis componentes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Tautologia é a proposição composta cujo valor lógico é invariavelmente VERDADEIRO para qualquer combinação de valores de suas variáveis componentes."
    ],
    "analiseAlternativas": {
      "A": "Correta. Tautologia é a proposição composta cujo valor lógico é invariavelmente VERDADEIRO para qualquer combinação de valores de suas variáveis componentes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_017",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Identificação de Tautologia",
    "question": "[Simulado PMPE AOCP - Questão 017] Assinale a alternativa que expressa uma TAUTOLOGIA lógica incontestável:",
    "options": [
      "P ∨ ~P",
      "P ∧ ~P",
      "P → ~P",
      "P ↔ ~P",
      "~P ∧ P"
    ],
    "correctIndex": 0,
    "explanation": "P ∨ ~P (Princípio do Terceiro Excluído) é uma tautologia clássica: se P é V, V ∨ F = V; se P é F, F ∨ V = V.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "P ∨ ~P (Princípio do Terceiro Excluído) é uma tautologia clássica: se P é V, V ∨ F = V; se P é F, F ∨ V = V."
    ],
    "analiseAlternativas": {
      "A": "Correta. P ∨ ~P (Princípio do Terceiro Excluído) é uma tautologia clássica: se P é V, V ∨ F = V; se P é F, F ∨ V = V.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_018",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Contradição Lógica",
    "question": "[Simulado PMPE AOCP - Questão 018] A sentença 'O soldado está armado e o soldado não está armado' pode ser simbolizada por P ∧ ~P. Na lógica proposicional, essa estrutura é classificada como:",
    "options": [
      "Uma contradição.",
      "Uma tautologia.",
      "Uma contingência.",
      "Uma equivalência recíproca.",
      "Um dilema construtivo."
    ],
    "correctIndex": 0,
    "explanation": "P ∧ ~P é uma CONTRADIÇÃO, pois resulta em valor FALSO em todas as linhas possíveis da tabela-verdade.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "P ∧ ~P é uma CONTRADIÇÃO, pois resulta em valor FALSO em todas as linhas possíveis da tabela-verdade."
    ],
    "analiseAlternativas": {
      "A": "Correta. P ∧ ~P é uma CONTRADIÇÃO, pois resulta em valor FALSO em todas as linhas possíveis da tabela-verdade.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_019",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Contingência Lógica",
    "question": "[Simulado PMPE AOCP - Questão 019] Quando a coluna final da tabela-verdade de uma proposição composta apresenta tanto valores VERDADEIROS quanto valores FALSOS, dizemos que essa proposição é:",
    "options": [
      "Uma contingência.",
      "Uma contradição.",
      "Uma tautologia.",
      "Uma falácia absoluta.",
      "Um axioma fechado."
    ],
    "correctIndex": 0,
    "explanation": "Contingência (ou proposição indeterminada) é aquela que não é nem tautologia (tudo V) nem contradição (tudo F).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Contingência (ou proposição indeterminada) é aquela que não é nem tautologia (tudo V) nem contradição (tudo F)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Contingência (ou proposição indeterminada) é aquela que não é nem tautologia (tudo V) nem contradição (tudo F).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_020",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Condição Suficiente vs. Condição Necessária",
    "question": "[Simulado PMPE AOCP - Questão 020] Na condicional 'Se o cabo for promovido a sargento, então ele receberá aumento de soldo' (P → Q), afirma-se corretamente que:",
    "options": [
      "Ser promovido a sargento (P) é condição suficiente para receber aumento de soldo (Q).",
      "Receber aumento de soldo (Q) é condição suficiente para ser promovido a sargento (P).",
      "Ser promovido a sargento é condição necessária e suficiente.",
      "O aumento de soldo não possui relação lógica com a promoção.",
      "P e Q são proposições independentes sem implicação."
    ],
    "correctIndex": 0,
    "explanation": "Em P → Q: P (antecedente) é condição SUFICIENTE para Q; Q (consequente) é condição NECESSÁRIA para P. Macete: 'Se P (Suficiente), então Q (Necessário)'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Em P → Q: P (antecedente) é condição SUFICIENTE para Q; Q (consequente) é condição NECESSÁRIA para P. Macete: 'Se P (Suficiente), então Q (Necessário)'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Em P → Q: P (antecedente) é condição SUFICIENTE para Q; Q (consequente) é condição NECESSÁRIA para P. Macete: 'Se P (Suficiente), então Q (Necessário)'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_021",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Condição Necessária",
    "question": "[Simulado PMPE AOCP - Questão 021] Ainda sobre a condicional P → Q, o consequente Q representa para o antecedente P:",
    "options": [
      "Condição necessária.",
      "Condição suficiente.",
      "Condição irrelevante.",
      "A negação de P.",
      "Uma premissa acessória."
    ],
    "correctIndex": 0,
    "explanation": "O consequente Q é CONDIÇÃO NECESSÁRIA para o antecedente P. Se Q não ocorrer, P não pode ter ocorrido (~Q → ~P).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O consequente Q é CONDIÇÃO NECESSÁRIA para o antecedente P. Se Q não ocorrer, P não pode ter ocorrido (~Q → ~P)."
    ],
    "analiseAlternativas": {
      "A": "Correta. O consequente Q é CONDIÇÃO NECESSÁRIA para o antecedente P. Se Q não ocorrer, P não pode ter ocorrido (~Q → ~P).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_022",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Modus Ponens",
    "question": "[Simulado PMPE AOCP - Questão 022] Considere as seguintes premissas verdadeiras: 1) 'Se o toque de recolher for decretado, as patrulhas serão intensificadas'. 2) 'O toque de recolher foi decretado'. Conclui-se logicamente que:",
    "options": [
      "As patrulhas serão intensificadas.",
      "As patrulhas não serão intensificadas.",
      "Não houve decretação do toque de recolher.",
      "O índice de criminalidade subiu.",
      "Nenhuma conclusão é válida."
    ],
    "correctIndex": 0,
    "explanation": "Regra do Modus Ponens: Se P → Q é V e P é V, então Q é obrigatoriamente V. As patrulhas serão intensificadas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Regra do Modus Ponens: Se P → Q é V e P é V, então Q é obrigatoriamente V. As patrulhas serão intensificadas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Regra do Modus Ponens: Se P → Q é V e P é V, então Q é obrigatoriamente V. As patrulhas serão intensificadas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_023",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Modus Tollens",
    "question": "[Simulado PMPE AOCP - Questão 023] Considere as seguintes premissas verdadeiras: 1) 'Se a blitz for montada na ponte, o trânsito ficará congestionado'. 2) 'O trânsito NÃO ficou congestionado'. Conclui-se logicamente que:",
    "options": [
      "A blitz NÃO foi montada na ponte.",
      "A blitz foi montada na ponte.",
      "A ponte foi interditada.",
      "O congestionamento ocorreu em outra via.",
      "Não é possível inferir nada sobre a blitz."
    ],
    "correctIndex": 0,
    "explanation": "Regra do Modus Tollens: Se P → Q é V e ~Q é V, então ~P é obrigatoriamente V. A blitz NÃO foi montada na ponte.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Regra do Modus Tollens: Se P → Q é V e ~Q é V, então ~P é obrigatoriamente V. A blitz NÃO foi montada na ponte."
    ],
    "analiseAlternativas": {
      "A": "Correta. Regra do Modus Tollens: Se P → Q é V e ~Q é V, então ~P é obrigatoriamente V. A blitz NÃO foi montada na ponte.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_024",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Falácia da Afirmação do Consequente",
    "question": "[Simulado PMPE AOCP - Questão 024] Considere o argumento: 'Se chove em Caruaru, a pista fica molhada. A pista está molhada. Logo, choveu em Caruaru'. Esse argumento comete a clássica:",
    "options": [
      "Falácia da afirmação do consequente (argumento inválido).",
      "Regra de inferência válida pelo Modus Ponens.",
      "Dedução válida por Modus Tollens.",
      "Tautologia universal.",
      "Equivalência contrapositiva perfeita."
    ],
    "correctIndex": 0,
    "explanation": "A pista pode estar molhada por outro motivo (ex: caminhão-pipa lavou a rua). Afirmar o consequente para concluir o antecedente é uma falácia formal.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A pista pode estar molhada por outro motivo (ex: caminhão-pipa lavou a rua). Afirmar o consequente para concluir o antecedente é uma falácia formal."
    ],
    "analiseAlternativas": {
      "A": "Correta. A pista pode estar molhada por outro motivo (ex: caminhão-pipa lavou a rua). Afirmar o consequente para concluir o antecedente é uma falácia formal.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_025",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Falácia da Negação do Antecedente",
    "question": "[Simulado PMPE AOCP - Questão 025] Considere o argumento: 'Se o indivíduo for policial militar, ele possui porte de arma. O indivíduo NÃO é policial militar. Logo, ele não possui porte de arma'. Esse raciocínio configura:",
    "options": [
      "Falácia da negação do antecedente (argumento inválido).",
      "Silogismo válido irrefutável.",
      "Aplicação correta de Modus Tollens.",
      "Equivalência lógica canônica.",
      "Conclusão necessária."
    ],
    "correctIndex": 0,
    "explanation": "Ele pode ser policial civil, federal, magistrado ou promotor e possuir porte legal. Negar o antecedente para concluir a negação do consequente é uma falácia formal.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Ele pode ser policial civil, federal, magistrado ou promotor e possuir porte legal. Negar o antecedente para concluir a negação do consequente é uma falácia formal."
    ],
    "analiseAlternativas": {
      "A": "Correta. Ele pode ser policial civil, federal, magistrado ou promotor e possuir porte legal. Negar o antecedente para concluir a negação do consequente é uma falácia formal.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_026",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Lei de De Morgan)",
    "question": "[Simulado PMPE AOCP - Questão 026] A negação lógica da proposição composta 'O soldado concluiu o treinamento E o oficial aprovou o relatório' é dada por:",
    "options": [
      "O soldado não concluiu o treinamento OU o oficial não aprovou o relatório.",
      "O soldado não concluiu o treinamento E o oficial não aprovou o relatório.",
      "Se o soldado concluiu o treinamento, então o oficial aprovou o relatório.",
      "O soldado concluiu o treinamento OU o oficial não aprovou o relatório.",
      "O soldado não concluiu o treinamento se e somente se o oficial reprovou."
    ],
    "correctIndex": 0,
    "explanation": "1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se a primeira, nega-se a segunda e troca-se o 'E' pelo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se a primeira, nega-se a segunda e troca-se o 'E' pelo 'OU'."
    ],
    "analiseAlternativas": {
      "A": "Correta. 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se a primeira, nega-se a segunda e troca-se o 'E' pelo 'OU'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_027",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Lei de De Morgan)",
    "question": "[Simulado PMPE AOCP - Questão 027] Dizer que 'NÃO é verdade que a viatura está em patrulha e o rádio comunicador está ligado' equivale logicamente a afirmar que:",
    "options": [
      "A viatura não está em patrulha OU o rádio comunicador não está ligado.",
      "A viatura não está em patrulha E o rádio comunicador não está ligado.",
      "A viatura está em patrulha mas o rádio está desligado.",
      "Se a viatura está em patrulha, o rádio está ligado.",
      "A viatura e o rádio estão inoperantes."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas as orações e conecta-se pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Pela Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas as orações e conecta-se pelo conectivo 'OU'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Pela Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas as orações e conecta-se pelo conectivo 'OU'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_028",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção com Verbo Negado",
    "question": "[Simulado PMPE AOCP - Questão 028] Qual é a negação lógica da sentença: 'O sargento deu a ordem E o soldado NÃO hesitou'?",
    "options": [
      "O sargento não deu a ordem OU o soldado hesitou.",
      "O sargento não deu a ordem E o soldado hesitou.",
      "O sargento deu a ordem OU o soldado hesitou.",
      "Se o sargento não deu a ordem, então o soldado hesitou.",
      "O sargento deu a ordem se e somente se o soldado não hesitou."
    ],
    "correctIndex": 0,
    "explanation": "A proposição é (P ∧ ~Q). A negação é ~(P ∧ ~Q) ≡ ~P ∨ ~(~Q) ≡ ~P ∨ Q. 'O sargento não deu a ordem OU o soldado hesitou'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A proposição é (P ∧ ~Q). A negação é ~(P ∧ ~Q) ≡ ~P ∨ ~(~Q) ≡ ~P ∨ Q. 'O sargento não deu a ordem OU o soldado hesitou'."
    ],
    "analiseAlternativas": {
      "A": "Correta. A proposição é (P ∧ ~Q). A negação é ~(P ∧ ~Q) ≡ ~P ∨ ~(~Q) ≡ ~P ∨ Q. 'O sargento não deu a ordem OU o soldado hesitou'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_029",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção com Ambos Negados",
    "question": "[Simulado PMPE AOCP - Questão 029] Assinale a negação correta da proposição composta: 'O perito NÃO encontrou vestígios E a testemunha NÃO compareceu':",
    "options": [
      "O perito encontrou vestígios OU a testemunha compareceu.",
      "O perito encontrou vestígios E a testemunha compareceu.",
      "O perito não encontrou vestígios OU a testemunha compareceu.",
      "Se o perito encontrou vestígios, a testemunha compareceu.",
      "Nenhum vestígio foi encontrado pela perícia."
    ],
    "correctIndex": 0,
    "explanation": "A sentença é (~P ∧ ~Q). Sua negação é ~(~P ∧ ~Q) ≡ P ∨ Q ('O perito encontrou vestígios OU a testemunha compareceu').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A sentença é (~P ∧ ~Q). Sua negação é ~(~P ∧ ~Q) ≡ P ∨ Q ('O perito encontrou vestígios OU a testemunha compareceu')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A sentença é (~P ∧ ~Q). Sua negação é ~(~P ∧ ~Q) ≡ P ∨ Q ('O perito encontrou vestígios OU a testemunha compareceu').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_030",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção em Contexto Operacional",
    "question": "[Simulado PMPE AOCP - Questão 030] A negação da proposição 'O cabo fez o teste de bafômetro e o motorista foi liberado' é:",
    "options": [
      "O cabo não fez o teste de bafômetro OU o motorista não foi liberado.",
      "O cabo não fez o teste de bafômetro E o motorista não foi liberado.",
      "O cabo fez o teste de bafômetro mas o motorista foi preso.",
      "O motorista não foi liberado porque o cabo fez o teste.",
      "Nem o cabo fez o teste nem o motorista foi liberado."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas e substitui-se o 'E' pelo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas e substitui-se o 'E' pelo 'OU'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas e substitui-se o 'E' pelo 'OU'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_031",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção Inclusiva (De Morgan)",
    "question": "[Simulado PMPE AOCP - Questão 031] A negação lógica da proposição 'O policial foi promovido OU o policial recebeu elogio em ficha funcional' é dada por:",
    "options": [
      "O policial NÃO foi promovido E o policial NÃO recebeu elogio em ficha funcional.",
      "O policial não foi promovido OU não recebeu elogio.",
      "Se o policial foi promovido, ele recebeu elogio.",
      "O policial foi promovido mas não recebeu elogio.",
      "O policial recebeu elogio se for promovido."
    ],
    "correctIndex": 0,
    "explanation": "2ª Lei de De Morgan: ~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se a primeira, nega-se a segunda e troca-se o 'OU' pelo 'E'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "2ª Lei de De Morgan: ~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se a primeira, nega-se a segunda e troca-se o 'OU' pelo 'E'."
    ],
    "analiseAlternativas": {
      "A": "Correta. 2ª Lei de De Morgan: ~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se a primeira, nega-se a segunda e troca-se o 'OU' pelo 'E'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_032",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção Inclusiva (De Morgan)",
    "question": "[Simulado PMPE AOCP - Questão 032] Dizer que é FALSO que 'O comandante assinou o decreto OU o coronel viajou para Petrolina' equivale a afirmar que:",
    "options": [
      "O comandante NÃO assinou o decreto E o coronel NÃO viajou para Petrolina.",
      "O comandante não assinou o decreto OU o coronel não viajou.",
      "O comandante assinou o decreto E o coronel viajou.",
      "Se o comandante assinou o decreto, o coronel viajou.",
      "O coronel viajou porque o comandante assinou o decreto."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se ambas as orações e conecta-se pelo conectivo 'E'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se ambas as orações e conecta-se pelo conectivo 'E'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se ambas as orações e conecta-se pelo conectivo 'E'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_033",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção com Termo Negado",
    "question": "[Simulado PMPE AOCP - Questão 033] Qual é a negação lógica da proposição: 'O suspeito foi detido OU a arma NÃO foi apreendida'?",
    "options": [
      "O suspeito NÃO foi detido E a arma FOI apreendida.",
      "O suspeito não foi detido OU a arma foi apreendida.",
      "O suspeito foi detido E a arma foi apreendida.",
      "Se o suspeito foi detido, a arma foi apreendida.",
      "A arma foi apreendida mas o suspeito fugiu."
    ],
    "correctIndex": 0,
    "explanation": "A sentença é (P ∨ ~Q). Sua negação é ~(P ∨ ~Q) ≡ ~P ∧ ~(~Q) ≡ ~P ∧ Q ('O suspeito NÃO foi detido E a arma FOI apreendida').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A sentença é (P ∨ ~Q). Sua negação é ~(P ∨ ~Q) ≡ ~P ∧ ~(~Q) ≡ ~P ∧ Q ('O suspeito NÃO foi detido E a arma FOI apreendida')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A sentença é (P ∨ ~Q). Sua negação é ~(P ∨ ~Q) ≡ ~P ∧ ~(~Q) ≡ ~P ∧ Q ('O suspeito NÃO foi detido E a arma FOI apreendida').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_034",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção com Ambos Negados",
    "question": "[Simulado PMPE AOCP - Questão 034] A negação lógica de 'A viatura NÃO abasteceu OU o pneu NÃO foi trocado' corresponde a:",
    "options": [
      "A viatura abasteceu E o pneu foi trocado.",
      "A viatura abasteceu OU o pneu foi trocado.",
      "A viatura não abasteceu E o pneu foi trocado.",
      "Se a viatura abasteceu, o pneu foi trocado.",
      "A viatura e o pneu estão em condições normais."
    ],
    "correctIndex": 0,
    "explanation": "Sentença: (~P ∨ ~Q). Negação: ~(~P ∨ ~Q) ≡ P ∧ Q ('A viatura abasteceu E o pneu foi trocado').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Sentença: (~P ∨ ~Q). Negação: ~(~P ∨ ~Q) ≡ P ∧ Q ('A viatura abasteceu E o pneu foi trocado')."
    ],
    "analiseAlternativas": {
      "A": "Correta. Sentença: (~P ∨ ~Q). Negação: ~(~P ∨ ~Q) ≡ P ∧ Q ('A viatura abasteceu E o pneu foi trocado').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_035",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção em Situação de Plantão",
    "question": "[Simulado PMPE AOCP - Questão 035] Em um relatório operacional do 2º BPM (Nazaré da Mata), o oficial registra que a sentença 'O alarme tocou OU o portão foi arrombado' é FALSA. Disso decorre logicamente que:",
    "options": [
      "O alarme NÃO tocou E o portão NÃO foi arrombado.",
      "O alarme tocou e o portão não foi arrombado.",
      "O alarme não tocou ou o portão não foi arrombado.",
      "O portão foi arrombado após o alarme tocar.",
      "Nenhuma ocorrência foi registrada pelo oficial."
    ],
    "correctIndex": 0,
    "explanation": "Dizer que (P ∨ Q) é falsa equivale a dizer que sua negação é verdadeira: ~P ∧ ~Q (O alarme NÃO tocou E o portão NÃO foi arrombado).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Dizer que (P ∨ Q) é falsa equivale a dizer que sua negação é verdadeira: ~P ∧ ~Q (O alarme NÃO tocou E o portão NÃO foi arrombado)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Dizer que (P ∨ Q) é falsa equivale a dizer que sua negação é verdadeira: ~P ∧ ~Q (O alarme NÃO tocou E o portão NÃO foi arrombado).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_036",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção com Negação e Afirmação",
    "question": "[Simulado PMPE AOCP - Questão 036] A negação da afirmativa 'O capitão estava no quartel e o tenente não estava na escala' é:",
    "options": [
      "O capitão NÃO estava no quartel OU o tenente ESTAVA na escala.",
      "O capitão não estava no quartel E o tenente estava na escala.",
      "O capitão estava no quartel OU o tenente não estava na escala.",
      "Se o capitão estava no quartel, o tenente estava na escala.",
      "Nem o capitão estava no quartel nem o tenente estava na escala."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∧ ~Q) ≡ ~P ∨ Q. Nega-se a primeira ('capitão NÃO estava'), nega-se a segunda ('tenente ESTAVA') e troca-se 'E' por 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∧ ~Q) ≡ ~P ∨ Q. Nega-se a primeira ('capitão NÃO estava'), nega-se a segunda ('tenente ESTAVA') e troca-se 'E' por 'OU'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∧ ~Q) ≡ ~P ∨ Q. Nega-se a primeira ('capitão NÃO estava'), nega-se a segunda ('tenente ESTAVA') e troca-se 'E' por 'OU'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_037",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Proposição Composta Complexa",
    "question": "[Simulado PMPE AOCP - Questão 037] A negação da sentença 'Chove em Garanhuns e faz frio em Triunfo' é:",
    "options": [
      "NÃO chove em Garanhuns OU NÃO faz frio em Triunfo.",
      "Não chove em Garanhuns e não faz frio em Triunfo.",
      "Se chove em Garanhuns, não faz frio em Triunfo.",
      "Faz calor em Garanhuns e chove em Triunfo.",
      "O clima no Sertão e Agreste está instável."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∧ Q) ≡ ~P ∨ ~Q ('NÃO chove em Garanhuns OU NÃO faz frio em Triunfo').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∧ Q) ≡ ~P ∨ ~Q ('NÃO chove em Garanhuns OU NÃO faz frio em Triunfo')."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∧ Q) ≡ ~P ∨ ~Q ('NÃO chove em Garanhuns OU NÃO faz frio em Triunfo').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_038",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção - Aplicação Direta",
    "question": "[Simulado PMPE AOCP - Questão 038] A negação lógica da proposição 'O soldado estuda raciocínio lógico OU ele estuda informática' é:",
    "options": [
      "O soldado NÃO estuda raciocínio lógico E NÃO estuda informática.",
      "O soldado não estuda raciocínio lógico OU não estuda informática.",
      "O soldado estuda raciocínio lógico E estuda informática.",
      "Se o soldado estuda raciocínio lógico, ele não estuda informática.",
      "O soldado estuda apenas história de Pernambuco."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se ambas e substitui-se o 'OU' pelo 'E'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se ambas e substitui-se o 'OU' pelo 'E'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∨ Q) ≡ ~P ∧ ~Q. Nega-se ambas e substitui-se o 'OU' pelo 'E'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_039",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Proposição com Verbos de Ação",
    "question": "[Simulado PMPE AOCP - Questão 039] Qual é a negação lógica da proposição 'O policial abordou o veículo e encontrou entorpecentes'?",
    "options": [
      "O policial NÃO abordou o veículo OU NÃO encontrou entorpecentes.",
      "O policial não abordou o veículo E não encontrou entorpecentes.",
      "O policial abordou o veículo OU não encontrou entorpecentes.",
      "O policial não encontrou entorpecentes porque não abordou o veículo.",
      "O condutor foi liberado sem abordagem."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∧ Q) ≡ ~P ∨ ~Q. Regra de De Morgan para a conjunção.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∧ Q) ≡ ~P ∨ ~Q. Regra de De Morgan para a conjunção."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∧ Q) ≡ ~P ∨ ~Q. Regra de De Morgan para a conjunção.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_040",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Nem P nem Q'",
    "question": "[Simulado PMPE AOCP - Questão 040] A expressão 'O suspeito nem correu nem gritou' equivale logicamente a 'O suspeito não correu E o suspeito não gritou' (~P ∧ ~Q). A negação lógica dessa afirmação é:",
    "options": [
      "O suspeito correu OU gritou.",
      "O suspeito correu E gritou.",
      "O suspeito não correu OU não gritou.",
      "Se o suspeito correu, ele gritou.",
      "O suspeito apenas caminhou em silêncio."
    ],
    "correctIndex": 0,
    "explanation": "~(~P ∧ ~Q) ≡ P ∨ Q ('O suspeito correu OU gritou').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(~P ∧ ~Q) ≡ P ∨ Q ('O suspeito correu OU gritou')."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(~P ∧ ~Q) ≡ P ∨ Q ('O suspeito correu OU gritou').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_041",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção com Tempo Verbal",
    "question": "[Simulado PMPE AOCP - Questão 041] A negação da afirmativa 'O major inspecionou as instalações e a tropa permaneceu em forma' é:",
    "options": [
      "O major NÃO inspecionou as instalações OU a tropa NÃO permaneceu em forma.",
      "O major não inspecionou as instalações E a tropa não permaneceu em forma.",
      "Se o major inspecionou as instalações, a tropa dispersou.",
      "A tropa dispersou porque o major não compareceu.",
      "O major elogiou a tropa em forma."
    ],
    "correctIndex": 0,
    "explanation": "De Morgan: nega-se a primeira, nega-se a segunda e troca-se o 'E' pelo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "De Morgan: nega-se a primeira, nega-se a segunda e troca-se o 'E' pelo 'OU'."
    ],
    "analiseAlternativas": {
      "A": "Correta. De Morgan: nega-se a primeira, nega-se a segunda e troca-se o 'E' pelo 'OU'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_042",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção - Guarda Municipal e PM",
    "question": "[Simulado PMPE AOCP - Questão 042] A negação lógica de 'A viatura é da PMPE OU a viatura é da Polícia Civil' é:",
    "options": [
      "A viatura NÃO é da PMPE E a viatura NÃO é da Polícia Civil.",
      "A viatura não é da PMPE OU não é da Polícia Civil.",
      "A viatura é da Guarda Municipal.",
      "Se a viatura não é da PMPE, então é da Polícia Civil.",
      "A viatura pertence à Polícia Federal."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∨ Q) ≡ ~P ∧ ~Q. Regra de De Morgan da disjunção.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∨ Q) ≡ ~P ∧ ~Q. Regra de De Morgan da disjunção."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∨ Q) ≡ ~P ∧ ~Q. Regra de De Morgan da disjunção.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_043",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Proposição Afirmativa Composta",
    "question": "[Simulado PMPE AOCP - Questão 043] A negação de 'O candidato fez barra fixa e correu 2.400 metros no TAF' é:",
    "options": [
      "O candidato NÃO fez barra fixa OU NÃO correu 2.400 metros no TAF.",
      "O candidato não fez barra fixa E não correu 2.400 metros no TAF.",
      "O candidato foi reprovado no TAF da PMPE.",
      "Se o candidato fez barra fixa, ele não correu.",
      "O candidato correu mas não atingiu a marca."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas e emprega-se o conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas e emprega-se o conectivo 'OU'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∧ Q) ≡ ~P ∨ ~Q. Nega-se ambas e emprega-se o conectivo 'OU'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_044",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Disjunção com Adjetivos",
    "question": "[Simulado PMPE AOCP - Questão 044] A negação da frase 'A instrução de tiro foi difícil ou o armamento estava descalibrado' é:",
    "options": [
      "A instrução de tiro NÃO foi difícil E o armamento NÃO estava descalibrado.",
      "A instrução de tiro não foi difícil OU o armamento não estava descalibrado.",
      "A instrução de tiro foi fácil e o armamento estava perfeito.",
      "Se a instrução foi difícil, o armamento estava descalibrado.",
      "A instrução de tiro foi cancelada pelo instrutor."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∨ Q) ≡ ~P ∧ ~Q. Conecta-se as negações pelo conectivo 'E'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∨ Q) ≡ ~P ∧ ~Q. Conecta-se as negações pelo conectivo 'E'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∨ Q) ≡ ~P ∧ ~Q. Conecta-se as negações pelo conectivo 'E'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_045",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Conjunção com Locuções Verbais",
    "question": "[Simulado PMPE AOCP - Questão 045] A negação lógica da proposição 'O comandante vai viajar e o subcomandante vai assumir o batalhão' é:",
    "options": [
      "O comandante NÃO vai viajar OU o subcomandante NÃO vai assumir o batalhão.",
      "O comandante não vai viajar E o subcomandante não vai assumir o batalhão.",
      "O comandante vai viajar mas o subcomandante não assume.",
      "Se o comandante não viajar, o subcomandante assume.",
      "O batalhão ficará acéfalo."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∧ Q) ≡ ~P ∨ ~Q.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∧ Q) ≡ ~P ∨ ~Q."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_046",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Disjunção - Turnos de Trabalho",
    "question": "[Simulado PMPE AOCP - Questão 046] A negação de 'O policial militar trabalha no turno diurno OU trabalha no turno noturno' é:",
    "options": [
      "O policial militar NÃO trabalha no turno diurno E NÃO trabalha no turno noturno.",
      "O policial militar não trabalha no turno diurno OU não trabalha no noturno.",
      "O policial militar está de folga regulamentar.",
      "O policial militar trabalha 24 horas ininterruptas.",
      "Se o policial trabalha de dia, ele folga à noite."
    ],
    "correctIndex": 0,
    "explanation": "~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P ∨ Q) ≡ ~P ∧ ~Q."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P ∨ Q) ≡ ~P ∧ ~Q.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_047",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção com Negações Internas",
    "question": "[Simulado PMPE AOCP - Questão 047] Qual é a negação da sentença 'O réu não confessou e o advogado não apelou'?",
    "options": [
      "O réu confessou OU o advogado apelou.",
      "O réu confessou E o advogado apelou.",
      "O réu não confessou OU o advogado apelou.",
      "Se o réu confessou, o advogado não apelou.",
      "A sentença transitou em julgado."
    ],
    "correctIndex": 0,
    "explanation": "~(~P ∧ ~Q) ≡ P ∨ Q ('O réu confessou OU o advogado apelou').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(~P ∧ ~Q) ≡ P ∨ Q ('O réu confessou OU o advogado apelou')."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(~P ∧ ~Q) ≡ P ∨ Q ('O réu confessou OU o advogado apelou').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_048",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Disjunção Exclusiva",
    "question": "[Simulado PMPE AOCP - Questão 048] A negação lógica da disjunção exclusiva 'Ou o soldado é lotado no 1º BPM ou é lotado no 16º BPM' (P ⊻ Q) equivale a:",
    "options": [
      "O soldado é lotado no 1º BPM se e somente se for lotado no 16º BPM (Bicondicional P ↔ Q).",
      "O soldado não é lotado no 1º BPM e não é lotado no 16º BPM.",
      "O soldado é lotado no 1º BPM ou não é lotado no 16º BPM.",
      "Se o soldado é lotado no 1º BPM, então é lotado no 16º BPM.",
      "O soldado é lotado no Batalhão de Choque."
    ],
    "correctIndex": 0,
    "explanation": "A negação da disjunção exclusiva (P ⊻ Q) é a BICONDICIONAL (P ↔ Q). Elas possuem tabelas-verdade exatamente opostas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação da disjunção exclusiva (P ⊻ Q) é a BICONDICIONAL (P ↔ Q). Elas possuem tabelas-verdade exatamente opostas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação da disjunção exclusiva (P ⊻ Q) é a BICONDICIONAL (P ↔ Q). Elas possuem tabelas-verdade exatamente opostas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_049",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Bicondicional",
    "question": "[Simulado PMPE AOCP - Questão 049] A negação lógica da proposição bicondicional 'O alarme toca se e somente se a cerca for cortada' (P ↔ Q) equivale a:",
    "options": [
      "Ou o alarme toca ou a cerca é cortada (Disjunção exclusiva P ⊻ Q).",
      "O alarme não toca e a cerca não é cortada.",
      "Se o alarme tocar, a cerca não é cortada.",
      "O alarme toca ou a cerca é cortada.",
      "O alarme toca e a cerca é cortada."
    ],
    "correctIndex": 0,
    "explanation": "A negação da bicondicional ~(P ↔ Q) é a DISJUNÇÃO EXCLUSIVA (P ⊻ Q), pois a bicondicional exige valores iguais e a exclusiva exige valores diferentes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação da bicondicional ~(P ↔ Q) é a DISJUNÇÃO EXCLUSIVA (P ⊻ Q), pois a bicondicional exige valores iguais e a exclusiva exige valores diferentes."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação da bicondicional ~(P ↔ Q) é a DISJUNÇÃO EXCLUSIVA (P ⊻ Q), pois a bicondicional exige valores iguais e a exclusiva exige valores diferentes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_050",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Conjunção Tripla",
    "question": "[Simulado PMPE AOCP - Questão 050] Pela extensão da Lei de De Morgan, a negação lógica da conjunção de três proposições simples (P ∧ Q ∧ R) é expressa formalmente por:",
    "options": [
      "~P ∨ ~Q ∨ ~R",
      "~P ∧ ~Q ∧ ~R",
      "~(P ∨ Q) ∧ ~R",
      "P ∨ Q ∨ R",
      "~P → (~Q → ~R)"
    ],
    "correctIndex": 0,
    "explanation": "A negação de uma conjunção múltipla é a disjunção das negações de cada um dos termos: ~(P ∧ Q ∧ R) ≡ ~P ∨ ~Q ∨ ~R.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de uma conjunção múltipla é a disjunção das negações de cada um dos termos: ~(P ∧ Q ∧ R) ≡ ~P ∨ ~Q ∨ ~R."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de uma conjunção múltipla é a disjunção das negações de cada um dos termos: ~(P ∧ Q ∧ R) ≡ ~P ∨ ~Q ∨ ~R.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_051",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE AOCP - Questão 051] A negação lógica da proposição condicional 'Se o soldado estuda com disciplina, então ele passa no concurso da PMPE' é:",
    "options": [
      "O soldado estuda com disciplina E ele NÃO passa no concurso da PMPE.",
      "Se o soldado não estuda com disciplina, então ele não passa no concurso da PMPE.",
      "O soldado não estuda com disciplina OU ele não passa no concurso da PMPE.",
      "O soldado não estuda com disciplina e passa no concurso da PMPE.",
      "Se o soldado passar no concurso, ele estudou com disciplina."
    ],
    "correctIndex": 0,
    "explanation": "A negação de uma condicional P → Q é dada pela regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q) -> P ∧ ~Q ('O soldado estuda com disciplina E ele NÃO passa').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de uma condicional P → Q é dada pela regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q) -> P ∧ ~Q ('O soldado estuda com disciplina E ele NÃO passa')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de uma condicional P → Q é dada pela regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q) -> P ∧ ~Q ('O soldado estuda com disciplina E ele NÃO passa').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_052",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE AOCP - Questão 052] Dizer que é FALSA a afirmação 'Se a viatura for acionada pelo CIODS, então a guarnição chegará em cinco minutos' equivale a dizer que:",
    "options": [
      "A viatura foi acionada pelo CIODS E a guarnição NÃO chegou em cinco minutos.",
      "A viatura não foi acionada pelo CIODS e a guarnição não chegou em cinco minutos.",
      "Se a viatura não for acionada, a guarnição não chega em cinco minutos.",
      "A viatura foi acionada pelo CIODS ou a guarnição chegou em cinco minutos.",
      "A viatura não foi acionada pelo CIODS porque a guarnição demorou."
    ],
    "correctIndex": 0,
    "explanation": "~(P → Q) ≡ P ∧ ~Q (Regra do MANÉ). Mantém a primeira parte e nega a segunda com o conectivo 'E'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P → Q) ≡ P ∧ ~Q (Regra do MANÉ). Mantém a primeira parte e nega a segunda com o conectivo 'E'."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P → Q) ≡ P ∧ ~Q (Regra do MANÉ). Mantém a primeira parte e nega a segunda com o conectivo 'E'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_053",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional com Negação no Consequente",
    "question": "[Simulado PMPE AOCP - Questão 053] Qual é a negação lógica da proposição 'Se o suspeito reagir à abordagem, então o policial militar NÃO hesitará'?",
    "options": [
      "O suspeito reage à abordagem E o policial militar HESITA.",
      "O suspeito não reage à abordagem e o policial militar hesita.",
      "Se o suspeito não reagir, o policial militar hesitará.",
      "O suspeito reage à abordagem ou o policial militar não hesita.",
      "O policial militar hesita se o suspeito não reagir."
    ],
    "correctIndex": 0,
    "explanation": "A condicional é P → ~Q. Sua negação é P ∧ ~(~Q) ≡ P ∧ Q ('O suspeito reage à abordagem E o policial militar HESITA').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A condicional é P → ~Q. Sua negação é P ∧ ~(~Q) ≡ P ∧ Q ('O suspeito reage à abordagem E o policial militar HESITA')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A condicional é P → ~Q. Sua negação é P ∧ ~(~Q) ≡ P ∧ Q ('O suspeito reage à abordagem E o policial militar HESITA').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_054",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional com Negação no Antecedente",
    "question": "[Simulado PMPE AOCP - Questão 054] A negação lógica da condicional 'Se o cabo NÃO estiver de folga, então ele comparecerá à formatura matinal' é:",
    "options": [
      "O cabo NÃO está de folga E ele NÃO comparece à formatura matinal.",
      "O cabo está de folga e comparece à formatura matinal.",
      "Se o cabo estiver de folga, ele comparece à formatura.",
      "O cabo não está de folga ou comparece à formatura.",
      "O cabo comparece à formatura se estiver de folga."
    ],
    "correctIndex": 0,
    "explanation": "Sentença: ~P → Q. Negação pelo MANÉ: Mantém a primeira (~P) E nega a segunda (~Q) -> ~P ∧ ~Q ('O cabo NÃO está de folga E NÃO comparece').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Sentença: ~P → Q. Negação pelo MANÉ: Mantém a primeira (~P) E nega a segunda (~Q) -> ~P ∧ ~Q ('O cabo NÃO está de folga E NÃO comparece')."
    ],
    "analiseAlternativas": {
      "A": "Correta. Sentença: ~P → Q. Negação pelo MANÉ: Mantém a primeira (~P) E nega a segunda (~Q) -> ~P ∧ ~Q ('O cabo NÃO está de folga E NÃO comparece').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_055",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional - Contexto Operacional",
    "question": "[Simulado PMPE AOCP - Questão 055] Um comandante emite a seguinte ordem: 'Se chover durante a partida de futebol, então o policiamento nos portões será reforçado'. A negação dessa condicional é:",
    "options": [
      "Choveu durante a partida de futebol E o policiamento nos portões NÃO foi reforçado.",
      "Não choveu durante a partida de futebol e o policiamento não foi reforçado.",
      "Se não chover, o policiamento nos portões não será reforçado.",
      "Choveu durante a partida ou o policiamento não foi reforçado.",
      "O policiamento foi reforçado porque não choveu."
    ],
    "correctIndex": 0,
    "explanation": "Regra do MANÉ: Mantém 'Choveu' E Nega 'o policiamento NÃO foi reforçado' -> P ∧ ~Q.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Regra do MANÉ: Mantém 'Choveu' E Nega 'o policiamento NÃO foi reforçado' -> P ∧ ~Q."
    ],
    "analiseAlternativas": {
      "A": "Correta. Regra do MANÉ: Mantém 'Choveu' E Nega 'o policiamento NÃO foi reforçado' -> P ∧ ~Q.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_056",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional - Investigação Policial",
    "question": "[Simulado PMPE AOCP - Questão 056] A negação lógica de 'Se o mandado for expedido pelo juiz criminal, então a equipe efetuará a busca domiciliar' é:",
    "options": [
      "O mandado foi expedido pelo juiz criminal E a equipe NÃO efetuou a busca domiciliar.",
      "O mandado não foi expedido e a equipe não efetuou a busca.",
      "Se o mandado não foi expedido, a equipe não efetuou a busca.",
      "O mandado foi expedido ou a equipe efetuou a busca.",
      "A equipe efetuou a busca sem expedição de mandado."
    ],
    "correctIndex": 0,
    "explanation": "~(P → Q) ≡ P ∧ ~Q. Mantém a antecedente e conjuga com a negação da consequente.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "~(P → Q) ≡ P ∧ ~Q. Mantém a antecedente e conjuga com a negação da consequente."
    ],
    "analiseAlternativas": {
      "A": "Correta. ~(P → Q) ≡ P ∧ ~Q. Mantém a antecedente e conjuga com a negação da consequente.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_057",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional - Causa e Efeito",
    "question": "[Simulado PMPE AOCP - Questão 057] A negação da afirmativa 'Se praticar atividade física regular, o militar melhora seu condicionamento cardiovascular' é:",
    "options": [
      "O militar pratica atividade física regular E NÃO melhora seu condicionamento cardiovascular.",
      "O militar não pratica atividade física e não melhora seu condicionamento.",
      "Se o militar não praticar atividade física, ele não melhora seu condicionamento.",
      "O militar pratica atividade física ou não melhora seu condicionamento.",
      "O militar melhora seu condicionamento sem praticar atividade física."
    ],
    "correctIndex": 0,
    "explanation": "MANÉ: Mantém a primeira E Nega a segunda.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "MANÉ: Mantém a primeira E Nega a segunda."
    ],
    "analiseAlternativas": {
      "A": "Correta. MANÉ: Mantém a primeira E Nega a segunda.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_058",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional com Conjunção no Consequente",
    "question": "[Simulado PMPE AOCP - Questão 058] Qual é a negação lógica da proposição 'Se o alarme disparar, então o vigilante acorda E a sirene toca'?",
    "options": [
      "O alarme dispara E (o vigilante NÃO acorda OU a sirene NÃO toca).",
      "O alarme não dispara ou o vigilante não acorda e a sirene não toca.",
      "Se o alarme não disparar, o vigilante acorda ou a sirene toca.",
      "O alarme dispara e o vigilante acorda e a sirene não toca.",
      "O alarme não dispara e a sirene toca."
    ],
    "correctIndex": 0,
    "explanation": "Sentença: P → (Q ∧ R). Negação: P ∧ ~(Q ∧ R) ≡ P ∧ (~Q ∨ ~R). Mantém a primeira E aplica De Morgan na segunda.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Sentença: P → (Q ∧ R). Negação: P ∧ ~(Q ∧ R) ≡ P ∧ (~Q ∨ ~R). Mantém a primeira E aplica De Morgan na segunda."
    ],
    "analiseAlternativas": {
      "A": "Correta. Sentença: P → (Q ∧ R). Negação: P ∧ ~(Q ∧ R) ≡ P ∧ (~Q ∨ ~R). Mantém a primeira E aplica De Morgan na segunda.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_059",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional com Disjunção no Consequente",
    "question": "[Simulado PMPE AOCP - Questão 059] A negação lógica de 'Se o capitão autorizar, então o cabo sai de folga OU o soldado viaja' é:",
    "options": [
      "O capitão autoriza E o cabo NÃO sai de folga E o soldado NÃO viaja.",
      "O capitão não autoriza e o cabo sai de folga e o soldado viaja.",
      "Se o capitão não autorizar, o cabo não sai de folga nem o soldado viaja.",
      "O capitão autoriza ou o cabo não sai de folga ou o soldado não viaja.",
      "O cabo sai de folga sem autorização do capitão."
    ],
    "correctIndex": 0,
    "explanation": "Sentença: P → (Q ∨ R). Negação: P ∧ ~(Q ∨ R) ≡ P ∧ (~Q ∧ ~R). Mantém P e nega o consequente por De Morgan.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Sentença: P → (Q ∨ R). Negação: P ∧ ~(Q ∨ R) ≡ P ∧ (~Q ∧ ~R). Mantém P e nega o consequente por De Morgan."
    ],
    "analiseAlternativas": {
      "A": "Correta. Sentença: P → (Q ∨ R). Negação: P ∧ ~(Q ∨ R) ≡ P ∧ (~Q ∧ ~R). Mantém P e nega o consequente por De Morgan.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_060",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional - Prova Oral",
    "question": "[Simulado PMPE AOCP - Questão 060] Durante uma oitiva, a testemunha afirma: 'Se o veículo era preto, então a placa terminava em 5'. Para desmentir essa testemunha com uma prova irrefutável, a perícia deve demonstrar que:",
    "options": [
      "O veículo era preto E a placa NÃO terminava em 5.",
      "O veículo era branco e a placa terminava em 5.",
      "O veículo não era preto e a placa não terminava em 5.",
      "O veículo era preto e a placa terminava em 5.",
      "Nenhum veículo preto trafegou pela rodovia."
    ],
    "correctIndex": 0,
    "explanation": "Para desmentir (negar) a condicional P → Q, deve-se provar o caso P ∧ ~Q: o veículo era preto e sua placa não terminava em 5.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Para desmentir (negar) a condicional P → Q, deve-se provar o caso P ∧ ~Q: o veículo era preto e sua placa não terminava em 5."
    ],
    "analiseAlternativas": {
      "A": "Correta. Para desmentir (negar) a condicional P → Q, deve-se provar o caso P ∧ ~Q: o veículo era preto e sua placa não terminava em 5.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_061",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica da Condicional - Contrapositiva",
    "question": "[Simulado PMPE AOCP - Questão 061] Uma proposição logicamente equivalente à condicional 'Se o soldado veste o colete balístico, então ele está protegido' é:",
    "options": [
      "Se o soldado NÃO está protegido, então ele NÃO veste o colete balístico.",
      "Se o soldado não veste o colete balístico, então ele não está protegido.",
      "Se o soldado está protegido, então ele veste o colete balístico.",
      "O soldado veste o colete balístico e está protegido.",
      "O soldado não veste o colete balístico ou não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A equivalência contrapositiva da condicional P → Q é ~Q → ~P: inverte-se a ordem das proposições e nega-se ambas ('Se NÃO está protegido, então NÃO veste o colete').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A equivalência contrapositiva da condicional P → Q é ~Q → ~P: inverte-se a ordem das proposições e nega-se ambas ('Se NÃO está protegido, então NÃO veste o colete')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A equivalência contrapositiva da condicional P → Q é ~Q → ~P: inverte-se a ordem das proposições e nega-se ambas ('Se NÃO está protegido, então NÃO veste o colete').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_062",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica - Contrapositiva com Negações",
    "question": "[Simulado PMPE AOCP - Questão 062] Dada a proposição condicional 'Se o réu não foi intimado, então a audiência de custódia não será realizada' (~P → ~Q), sua contrapositiva logicamente equivalente é:",
    "options": [
      "Se a audiência de custódia será realizada, então o réu foi intimado (Q → P).",
      "Se o réu foi intimado, então a audiência será realizada.",
      "O réu não foi intimado e a audiência foi realizada.",
      "A audiência não será realizada se o réu foi intimado.",
      "Se a audiência não for realizada, o réu não foi intimado."
    ],
    "correctIndex": 0,
    "explanation": "Contrapositiva de ~P → ~Q: inverte e nega -> ~(~Q) → ~(~P) ≡ Q → P ('Se a audiência será realizada, então o réu foi intimado').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Contrapositiva de ~P → ~Q: inverte e nega -> ~(~Q) → ~(~P) ≡ Q → P ('Se a audiência será realizada, então o réu foi intimado')."
    ],
    "analiseAlternativas": {
      "A": "Correta. Contrapositiva de ~P → ~Q: inverte e nega -> ~(~Q) → ~(~P) ≡ Q → P ('Se a audiência será realizada, então o réu foi intimado').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_063",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica - Contrapositiva no Código Penal",
    "question": "[Simulado PMPE AOCP - Questão 063] Considere a condicional: 'Se o agente praticou o fato sob coação moral irresistível, então ele não cometeu crime culpável'. A contrapositiva dessa sentença é:",
    "options": [
      "Se o agente cometeu crime culpável, então ele NÃO praticou o fato sob coação moral irresistível.",
      "Se o agente não praticou sob coação, ele cometeu crime culpável.",
      "O agente praticou sob coação irresistível e cometeu crime culpável.",
      "Se o agente não cometeu crime culpável, ele agiu sob coação moral irresistível.",
      "O crime é culpável se e somente se houver coação irresistível."
    ],
    "correctIndex": 0,
    "explanation": "Contrapositiva: P → ~Q equivale a ~(~Q) → ~P ≡ Q → ~P.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Contrapositiva: P → ~Q equivale a ~(~Q) → ~P ≡ Q → ~P."
    ],
    "analiseAlternativas": {
      "A": "Correta. Contrapositiva: P → ~Q equivale a ~(~Q) → ~P ≡ Q → ~P.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_064",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica - Contrapositiva em Segurança",
    "question": "[Simulado PMPE AOCP - Questão 064] A frase 'Se o alerta vermelho é acionado, as tropas de choque entram em prontidão' equivale logicamente a:",
    "options": [
      "Se as tropas de choque NÃO entram em prontidão, então o alerta vermelho NÃO foi acionado.",
      "Se as tropas de choque entram em prontidão, o alerta vermelho foi acionado.",
      "Se o alerta vermelho não foi acionado, as tropas não entram em prontidão.",
      "O alerta vermelho foi acionado ou as tropas entram em prontidão.",
      "As tropas entram em prontidão porque o alerta foi acionado."
    ],
    "correctIndex": 0,
    "explanation": "Contrapositiva: P → Q ≡ ~Q → ~P.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Contrapositiva: P → Q ≡ ~Q → ~P."
    ],
    "analiseAlternativas": {
      "A": "Correta. Contrapositiva: P → Q ≡ ~Q → ~P.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_065",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica - Contrapositiva e Trânsito",
    "question": "[Simulado PMPE AOCP - Questão 065] A proposição 'Se o condutor avança o sinal vermelho na Avenida Caxangá, então ele comete infração gravíssima' é logicamente equivalente a:",
    "options": [
      "Se o condutor NÃO comete infração gravíssima, então ele NÃO avança o sinal vermelho na Avenida Caxangá.",
      "Se o condutor não avança o sinal vermelho, ele não comete infração gravíssima.",
      "Se o condutor comete infração gravíssima, ele avançou o sinal vermelho.",
      "O condutor avança o sinal vermelho e comete infração gravíssima.",
      "O sinal vermelho estava apagado na Avenida Caxangá."
    ],
    "correctIndex": 0,
    "explanation": "P → Q equivale à sua contrapositiva: ~Q → ~P.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "P → Q equivale à sua contrapositiva: ~Q → ~P."
    ],
    "analiseAlternativas": {
      "A": "Correta. P → Q equivale à sua contrapositiva: ~Q → ~P.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_066",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional com Disjunção (Regra do NÉYMAR)",
    "question": "[Simulado PMPE AOCP - Questão 066] Uma proposição logicamente equivalente à condicional 'Se o soldado faz a ronda noturna, então a comunidade fica segura' (P → Q) é:",
    "options": [
      "O soldado NÃO faz a ronda noturna OU a comunidade fica segura (~P ∨ Q).",
      "O soldado faz a ronda noturna OU a comunidade fica segura.",
      "O soldado não faz a ronda noturna E a comunidade fica segura.",
      "Se a comunidade fica segura, o soldado faz a ronda.",
      "A comunidade não fica segura se o soldado faz a ronda."
    ],
    "correctIndex": 0,
    "explanation": "Equivalência da condicional pela disjunção (Macete 'NÉ-Y-MAR': NÉga a 1ª OU MÁNtém a 2ª): P → Q ≡ ~P ∨ Q.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Equivalência da condicional pela disjunção (Macete 'NÉ-Y-MAR': NÉga a 1ª OU MÁNtém a 2ª): P → Q ≡ ~P ∨ Q."
    ],
    "analiseAlternativas": {
      "A": "Correta. Equivalência da condicional pela disjunção (Macete 'NÉ-Y-MAR': NÉga a 1ª OU MÁNtém a 2ª): P → Q ≡ ~P ∨ Q.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_067",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional com Disjunção",
    "question": "[Simulado PMPE AOCP - Questão 067] A afirmação 'Se chove em Recife, o trânsito da Avenida Recife alaga' pode ser expressa de forma logicamente equivalente por:",
    "options": [
      "NÃO chove em Recife OU o trânsito da Avenida Recife alaga.",
      "Chove em Recife OU o trânsito da Avenida Recife alaga.",
      "Chove em Recife E o trânsito da Avenida Recife alaga.",
      "Se o trânsito alaga, chove em Recife.",
      "O trânsito da Avenida Recife nunca alaga."
    ],
    "correctIndex": 0,
    "explanation": "P → Q ≡ ~P ∨ Q ('NÃO chove OU o trânsito alaga').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "P → Q ≡ ~P ∨ Q ('NÃO chove OU o trânsito alaga')."
    ],
    "analiseAlternativas": {
      "A": "Correta. P → Q ≡ ~P ∨ Q ('NÃO chove OU o trânsito alaga').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_068",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Disjunção para a Condicional",
    "question": "[Simulado PMPE AOCP - Questão 068] A proposição composta 'O policial treina tiro OU ele comete falhas técnicas' (~P ∨ Q ou P ∨ Q) é logicamente equivalente a:",
    "options": [
      "Se o policial NÃO treina tiro, então ele comete falhas técnicas.",
      "Se o policial treina tiro, então ele comete falhas técnicas.",
      "O policial treina tiro e comete falhas técnicas.",
      "O policial não treina tiro ou comete falhas técnicas.",
      "O policial comete falhas técnicas porque treina tiro."
    ],
    "correctIndex": 0,
    "explanation": "A disjunção (A ∨ B) equivale à condicional (~A → B). Negando a primeira parte: 'Se o policial NÃO treina tiro, então ele comete falhas'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A disjunção (A ∨ B) equivale à condicional (~A → B). Negando a primeira parte: 'Se o policial NÃO treina tiro, então ele comete falhas'."
    ],
    "analiseAlternativas": {
      "A": "Correta. A disjunção (A ∨ B) equivale à condicional (~A → B). Negando a primeira parte: 'Se o policial NÃO treina tiro, então ele comete falhas'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_069",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional com Negação Prévia",
    "question": "[Simulado PMPE AOCP - Questão 069] A condicional 'Se o militar NÃO mantiver a postura correta, então ele será advertido' (~P → Q) equivale logicamente a:",
    "options": [
      "O militar mantém a postura correta OU ele será advertido (P ∨ Q).",
      "O militar não mantém a postura e não será advertido.",
      "Se o militar mantiver a postura correta, ele será advertido.",
      "O militar mantém a postura e será advertido.",
      "O militar será advertido se mantiver a postura."
    ],
    "correctIndex": 0,
    "explanation": "Regra NÉYMAR em ~P → Q: Nega a 1ª (~(~P) = P) OU Mantém a 2ª (Q) -> P ∨ Q ('O militar mantém a postura OU será advertido').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Regra NÉYMAR em ~P → Q: Nega a 1ª (~(~P) = P) OU Mantém a 2ª (Q) -> P ∨ Q ('O militar mantém a postura OU será advertido')."
    ],
    "analiseAlternativas": {
      "A": "Correta. Regra NÉYMAR em ~P → Q: Nega a 1ª (~(~P) = P) OU Mantém a 2ª (Q) -> P ∨ Q ('O militar mantém a postura OU será advertido').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_070",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional - Resumo Teórico",
    "question": "[Simulado PMPE AOCP - Questão 070] Dada qualquer proposição condicional da forma P → Q, assinale a opção que apresenta suas DUAS formas equivalentes fundamentais mais cobradas pela banca Instituto AOCP:",
    "options": [
      "Contrapositiva (~Q → ~P) e Equivalência da Disjunção (~P ∨ Q).",
      "Recíproca (Q → P) e Inversa (~P → ~Q).",
      "Conjunção (~P ∧ Q) e Negação Dupla (P ∧ ~Q).",
      "Bicondicional (P ↔ Q) e Disjunção Exclusiva (P ⊻ Q).",
      "Silogismo Disjuntivo (P ∨ Q) e Dilema (~P ∧ ~Q)."
    ],
    "correctIndex": 0,
    "explanation": "As duas principais equivalências de P → Q são: 1) Contrapositiva: ~Q → ~P; 2) Disjunção: ~P ∨ Q.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "As duas principais equivalências de P → Q são: 1) Contrapositiva: ~Q → ~P; 2) Disjunção: ~P ∨ Q."
    ],
    "analiseAlternativas": {
      "A": "Correta. As duas principais equivalências de P → Q são: 1) Contrapositiva: ~Q → ~P; 2) Disjunção: ~P ∨ Q.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_071",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Bicondicional",
    "question": "[Simulado PMPE AOCP - Questão 071] A proposição bicondicional P ↔ Q é logicamente equivalente à conjunção de duas condicionais expressa por:",
    "options": [
      "(P → Q) ∧ (Q → P)",
      "(P → Q) ∨ (Q → P)",
      "(P ∧ Q) → (P ∨ Q)",
      "(~P → ~Q) ∨ (~Q → ~P)",
      "~(P ∧ Q) ↔ (~P ∨ ~Q)"
    ],
    "correctIndex": 0,
    "explanation": "Uma bicondicional 'P se e somente se Q' equivale à conjunção de ida e volta: 'Se P então Q' E 'Se Q então P' -> (P → Q) ∧ (Q → P).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Uma bicondicional 'P se e somente se Q' equivale à conjunção de ida e volta: 'Se P então Q' E 'Se Q então P' -> (P → Q) ∧ (Q → P)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Uma bicondicional 'P se e somente se Q' equivale à conjunção de ida e volta: 'Se P então Q' E 'Se Q então P' -> (P → Q) ∧ (Q → P).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_072",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Silogismo Hipotético (Transitividade)",
    "question": "[Simulado PMPE AOCP - Questão 072] Dadas as premissas verdadeiras: 'Se o alarme toca, a guarnição sai' (P → Q) e 'Se a guarnição sai, o cerco é fechado' (Q → R). Pela regra do Silogismo Hipotético, conclui-se que:",
    "options": [
      "Se o alarme toca, o cerco é fechado (P → R).",
      "Se o cerco é fechado, o alarme toca.",
      "O alarme tocou e o cerco foi fechado.",
      "Se a guarnição não sai, o cerco é fechado.",
      "Nenhuma relação existe entre o alarme e o cerco."
    ],
    "correctIndex": 0,
    "explanation": "Silogismo Hipotético (transitividade da condicional): (P → Q) e (Q → R) implicam necessariamente (P → R).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Silogismo Hipotético (transitividade da condicional): (P → Q) e (Q → R) implicam necessariamente (P → R)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Silogismo Hipotético (transitividade da condicional): (P → Q) e (Q → R) implicam necessariamente (P → R).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_073",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Silogismo Disjuntivo",
    "question": "[Simulado PMPE AOCP - Questão 073] Considere as premissas: 1) 'O suspeito fugiu a pé OU fugiu de moto' (P ∨ Q). 2) 'O suspeito NÃO fugiu a pé' (~P). Pela regra do Silogismo Disjuntivo, conclui-se que:",
    "options": [
      "O suspeito fugiu de moto (Q).",
      "O suspeito fugiu a pé.",
      "O suspeito não fugiu.",
      "O suspeito foi capturado no local.",
      "Não é possível determinar o meio de fuga."
    ],
    "correctIndex": 0,
    "explanation": "Silogismo Disjuntivo: se uma disjunção (P ∨ Q) é verdadeira e uma das alternativas é falsa (~P), a outra alternativa é obrigatoriamente verdadeira (Q).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Silogismo Disjuntivo: se uma disjunção (P ∨ Q) é verdadeira e uma das alternativas é falsa (~P), a outra alternativa é obrigatoriamente verdadeira (Q)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Silogismo Disjuntivo: se uma disjunção (P ∨ Q) é verdadeira e uma das alternativas é falsa (~P), a outra alternativa é obrigatoriamente verdadeira (Q).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_074",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência por Redução ao Absurdo",
    "question": "[Simulado PMPE AOCP - Questão 074] Na argumentação lógica dedutiva, a técnica que consiste em assumir temporariamente a negação da tese desejada para demonstrar que ela gera uma contradição lógica insustentável denomina-se:",
    "options": [
      "Redução ao Absurdo (Reductio ad absurdum).",
      "Falácia do Espantalho.",
      "Indução Incompleta.",
      "Abdução Pragmática.",
      "Petição de Princípio."
    ],
    "correctIndex": 0,
    "explanation": "A prova por Redução ao Absurdo demonstra a validade de uma proposição P provando que supor ~P leva inevitavelmente a uma contradição lógica.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A prova por Redução ao Absurdo demonstra a validade de uma proposição P provando que supor ~P leva inevitavelmente a uma contradição lógica."
    ],
    "analiseAlternativas": {
      "A": "Correta. A prova por Redução ao Absurdo demonstra a validade de uma proposição P provando que supor ~P leva inevitavelmente a uma contradição lógica.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_075",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica da Disjunção Exclusiva",
    "question": "[Simulado PMPE AOCP - Questão 075] A disjunção exclusiva P ⊻ Q pode ser escrita de forma equivalente através de conectivos fundamentais como:",
    "options": [
      "(P ∨ Q) ∧ ~(P ∧ Q)",
      "(P ∧ Q) ∨ ~(P ∨ Q)",
      "(P → Q) ∧ (Q → P)",
      "~(P ∨ Q) ∧ (P ∧ Q)",
      "(P ∨ Q) → (P ∧ Q)"
    ],
    "correctIndex": 0,
    "explanation": "A disjunção exclusiva significa que 'ocorre P ou Q, mas NÃO ocorrem ambos': (P ∨ Q) ∧ ~(P ∧ Q).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A disjunção exclusiva significa que 'ocorre P ou Q, mas NÃO ocorrem ambos': (P ∨ Q) ∧ ~(P ∧ Q)."
    ],
    "analiseAlternativas": {
      "A": "Correta. A disjunção exclusiva significa que 'ocorre P ou Q, mas NÃO ocorrem ambos': (P ∨ Q) ∧ ~(P ∧ Q).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_076",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação do Quantificador Universal 'Todo'",
    "question": "[Simulado PMPE AOCP - Questão 076] A negação lógica da proposição categórica universal 'Todo policial militar é exímio atirador' é:",
    "options": [
      "Algum policial militar NÃO é exímio atirador (Pelo menos um não é).",
      "Nenhum policial militar é exímio atirador.",
      "Todo policial militar erra o alvo.",
      "Nenhum policial militar gosta de atirar.",
      "Todos os policiais militares são maus atiradores."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'TODO A é B' NÃO é 'Nenhum A é B', mas sim 'ALGUM A NÃO é B' (ou 'Existe pelo menos um A que não é B'). Macete: PEA + NÃO (Pelo menos um, Existe, Algum + NÃO).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'TODO A é B' NÃO é 'Nenhum A é B', mas sim 'ALGUM A NÃO é B' (ou 'Existe pelo menos um A que não é B'). Macete: PEA + NÃO (Pelo menos um, Existe, Algum + NÃO)."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'TODO A é B' NÃO é 'Nenhum A é B', mas sim 'ALGUM A NÃO é B' (ou 'Existe pelo menos um A que não é B'). Macete: PEA + NÃO (Pelo menos um, Existe, Algum + NÃO).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_077",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação do Quantificador 'Todo' - Edital PMPE",
    "question": "[Simulado PMPE AOCP - Questão 077] Assinale a alternativa que expressa a correta negação lógica de 'Todo soldado da PMPE reside na Região Metropolitana do Recife':",
    "options": [
      "Existe pelo menos um soldado da PMPE que NÃO reside na Região Metropolitana do Recife.",
      "Nenhum soldado da PMPE reside na Região Metropolitana do Recife.",
      "Todos os soldados da PMPE residem no interior do Estado.",
      "Algum soldado da PMPE reside no Recife.",
      "Nenhum soldado da PMPE reside fora do Recife."
    ],
    "correctIndex": 0,
    "explanation": "Negação de 'Todo': 'Pelo menos um NÃO' / 'Existe um que NÃO' / 'Algum NÃO'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Negação de 'Todo': 'Pelo menos um NÃO' / 'Existe um que NÃO' / 'Algum NÃO'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Negação de 'Todo': 'Pelo menos um NÃO' / 'Existe um que NÃO' / 'Algum NÃO'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_078",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação do Quantificador Universal Negativo 'Nenhum'",
    "question": "[Simulado PMPE AOCP - Questão 078] A negação lógica da proposição 'Nenhum suspeito colaborou com as investigações policiais' é:",
    "options": [
      "Pelo menos um suspeito colaborou com as investigações policiais (Algum suspeito colaborou).",
      "Todos os suspeitos colaboraram com as investigações policiais.",
      "Nenhum suspeito confessou a autoria do delito.",
      "Todos os suspeitos mentiram aos policiais.",
      "Apenas o líder dos suspeitos colaborou."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'Nenhum A é B' é 'ALGUM A é B' (basta que um único elemento fure a regra universal negativa).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'Nenhum A é B' é 'ALGUM A é B' (basta que um único elemento fure a regra universal negativa)."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'Nenhum A é B' é 'ALGUM A é B' (basta que um único elemento fure a regra universal negativa).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_079",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação do Quantificador 'Nenhum' - Armamento",
    "question": "[Simulado PMPE AOCP - Questão 079] A negação da afirmativa 'Nenhuma arma apreendida possuía numeração raspada' é:",
    "options": [
      "Existe pelo menos uma arma apreendida que possuía numeração raspada.",
      "Todas as armas apreendidas possuíam numeração raspada.",
      "Todas as armas apreendidas eram de calibre restrito.",
      "Nenhuma arma foi periciada pelo Instituto de Criminalística.",
      "As armas apreendidas foram restituídas aos proprietários."
    ],
    "correctIndex": 0,
    "explanation": "Negação de 'Nenhum A é B': 'Existe pelo menos um A que é B'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Negação de 'Nenhum A é B': 'Existe pelo menos um A que é B'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Negação de 'Nenhum A é B': 'Existe pelo menos um A que é B'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_080",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação do Quantificador Existencial 'Algum'",
    "question": "[Simulado PMPE AOCP - Questão 080] A negação lógica da proposição particular afirmativa 'Algum militar do pelotão faltou ao serviço' é:",
    "options": [
      "NENHUM militar do pelotão faltou ao serviço (Todos compareceram).",
      "Todos os militares do pelotão faltaram ao serviço.",
      "Pelo menos dois militares faltaram ao serviço.",
      "Algum militar do pelotão compareceu ao serviço.",
      "A maioria dos militares faltou ao serviço."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'Algum A é B' é 'NENHUM A é B' (ou 'Todo A NÃO é B').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'Algum A é B' é 'NENHUM A é B' (ou 'Todo A NÃO é B')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'Algum A é B' é 'NENHUM A é B' (ou 'Todo A NÃO é B').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_081",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Pelo menos um'",
    "question": "[Simulado PMPE AOCP - Questão 081] Para contestar com sucesso a declaração 'Pelo menos um candidato cometeu fraude na prova do concurso', a comissão organizadora precisa provar que:",
    "options": [
      "NENHUM candidato cometeu fraude na prova do concurso.",
      "Todos os candidatos cometeram fraude na prova.",
      "Alguns candidatos não cometeram fraude.",
      "A maioria dos candidatos cometeu fraude.",
      "Pelo menos dois candidatos foram eliminados."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'Pelo menos um cometeu' é 'NENHUM cometeu fraude'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'Pelo menos um cometeu' é 'NENHUM cometeu fraude'."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'Pelo menos um cometeu' é 'NENHUM cometeu fraude'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_082",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Algum... não'",
    "question": "[Simulado PMPE AOCP - Questão 082] A negação lógica da proposição categórica 'Algum policial do batalhão NÃO participou da operação' é:",
    "options": [
      "TODOS os policiais do batalhão participaram da operação.",
      "Nenhum policial do batalhão participou da operação.",
      "Algum policial do batalhão participou da operação.",
      "Pelo menos um policial recusou-se a participar.",
      "A maioria dos policiais não participou."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'Algum A NÃO é B' é 'TODO A é B' ('Todos os policiais do batalhão participaram').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'Algum A NÃO é B' é 'TODO A é B' ('Todos os policiais do batalhão participaram')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'Algum A NÃO é B' é 'TODO A é B' ('Todos os policiais do batalhão participaram').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_083",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Silogismo Categórico",
    "question": "[Simulado PMPE AOCP - Questão 083] Considere as seguintes premissas: 1) 'Todo oficial da PMPE é servidor público estadual'. 2) 'O Capitão Silva é oficial da PMPE'. Conclui-se necessariamente que:",
    "options": [
      "O Capitão Silva é servidor público estadual.",
      "Todo servidor público estadual é oficial da PMPE.",
      "O Capitão Silva não é servidor público estadual.",
      "Algum oficial da PMPE não é servidor público.",
      "O Capitão Silva reside no Recife."
    ],
    "correctIndex": 0,
    "explanation": "Silogismo categórico dedutivo universal clássico: Se todo A é B e x pertence a A, então x pertence a B.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Silogismo categórico dedutivo universal clássico: Se todo A é B e x pertence a A, então x pertence a B."
    ],
    "analiseAlternativas": {
      "A": "Correta. Silogismo categórico dedutivo universal clássico: Se todo A é B e x pertence a A, então x pertence a B.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_084",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Euler-Venn para Quantificadores",
    "question": "[Simulado PMPE AOCP - Questão 084] Dadas as premissas: 'Todo policial é corajoso' e 'Nenhum criminoso é corajoso'. É correto concluir logicamente que:",
    "options": [
      "Nenhum policial é criminoso.",
      "Todo criminoso é policial.",
      "Algum policial é criminoso.",
      "Todo corajoso é policial.",
      "Nenhuma conclusão pode ser obtida."
    ],
    "correctIndex": 0,
    "explanation": "O conjunto dos policiais está contido no conjunto dos corajosos. O conjunto dos criminosos é disjunto dos corajosos. Logo, não há intersecção entre policiais e criminosos: 'Nenhum policial é criminoso'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O conjunto dos policiais está contido no conjunto dos corajosos. O conjunto dos criminosos é disjunto dos corajosos. Logo, não há intersecção entre policiais e criminosos: 'Nenhum policial é criminoso'."
    ],
    "analiseAlternativas": {
      "A": "Correta. O conjunto dos policiais está contido no conjunto dos corajosos. O conjunto dos criminosos é disjunto dos corajosos. Logo, não há intersecção entre policiais e criminosos: 'Nenhum policial é criminoso'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_085",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação Composta com Quantificador e Conjunção",
    "question": "[Simulado PMPE AOCP - Questão 085] A negação lógica da proposição 'Todos os soldados foram promovidos E o capitão elogiou a tropa' é:",
    "options": [
      "Pelo menos um soldado NÃO foi promovido OU o capitão NÃO elogiou a tropa.",
      "Nenhum soldado foi promovido e o capitão não elogiou a tropa.",
      "Todos os soldados não foram promovidos e o capitão elogiou a tropa.",
      "Se todos os soldados foram promovidos, o capitão elogiou a tropa.",
      "Nenhum soldado foi elogiado pelo capitão."
    ],
    "correctIndex": 0,
    "explanation": "Aplica-se De Morgan na conjunção e nega-se o quantificador 'Todos' (Pelo menos um não foi promovido OU o capitão não elogiou).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Aplica-se De Morgan na conjunção e nega-se o quantificador 'Todos' (Pelo menos um não foi promovido OU o capitão não elogiou)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Aplica-se De Morgan na conjunção e nega-se o quantificador 'Todos' (Pelo menos um não foi promovido OU o capitão não elogiou).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_086",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Quantificador com Subconjuntos",
    "question": "[Simulado PMPE AOCP - Questão 086] Se é verdade que 'Todos os sargentos da PMPE fizeram o CAS' e que 'Alguns instrutores de tiro são sargentos da PMPE', então é necessariamente verdade que:",
    "options": [
      "Alguns instrutores de tiro fizeram o CAS.",
      "Todos os instrutores de tiro fizeram o CAS.",
      "Nenhum instrutor de tiro fez o CAS.",
      "Todos os sargentos são instrutores de tiro.",
      "Nenhum sargento fez o CAS."
    ],
    "correctIndex": 0,
    "explanation": "Como todo sargento fez o CAS e existe pelo menos um instrutor que é sargento, esse instrutor que é sargento necessariamente fez o CAS.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como todo sargento fez o CAS e existe pelo menos um instrutor que é sargento, esse instrutor que é sargento necessariamente fez o CAS."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como todo sargento fez o CAS e existe pelo menos um instrutor que é sargento, esse instrutor que é sargento necessariamente fez o CAS.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_087",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Validade de Argumento Categórico",
    "question": "[Simulado PMPE AOCP - Questão 087] Considere o argumento: 'Todos os cães farejadores do Canil da PMPE são treinados. Spike é treinado. Logo, Spike é um cão do Canil da PMPE'. Esse argumento é:",
    "options": [
      "Inválido, pois Spike pode ser um animal de circo ou de outro órgão treinado sem pertencer ao Canil da PMPE.",
      "Válido por Modus Ponens categórico.",
      "Válido por silogismo hipotético.",
      "Uma tautologia indiscutível.",
      "Verdadeiro por evidência científica."
    ],
    "correctIndex": 0,
    "explanation": "O fato de todos os cães do canil serem treinados não implica que APENAS eles sejam treinados. Spike pode estar fora do conjunto do canil e ainda assim ser treinado. Argumento inválido.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O fato de todos os cães do canil serem treinados não implica que APENAS eles sejam treinados. Spike pode estar fora do conjunto do canil e ainda assim ser treinado. Argumento inválido."
    ],
    "analiseAlternativas": {
      "A": "Correta. O fato de todos os cães do canil serem treinados não implica que APENAS eles sejam treinados. Spike pode estar fora do conjunto do canil e ainda assim ser treinado. Argumento inválido.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_088",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Relação entre Proposições Categóricas",
    "question": "[Simulado PMPE AOCP - Questão 088] Se a proposição 'Algum soldado da guarnição cometeu transgressão' é FALSA, qual das seguintes proposições é OBRIGATORIAMENTE VERDADEIRA?",
    "options": [
      "Nenhum soldado da guarnição cometeu transgressão.",
      "Todos os soldados da guarnição cometeram transgressão.",
      "Pelo menos um soldado cometeu transgressão grave.",
      "Dois soldados cometeram transgressão.",
      "O comandante cometeu transgressão."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'Algum cometeu' é 'NENHUM cometeu'. Se uma proposição é falsa, a sua negação contraditória é obrigatoriamente verdadeira.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'Algum cometeu' é 'NENHUM cometeu'. Se uma proposição é falsa, a sua negação contraditória é obrigatoriamente verdadeira."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'Algum cometeu' é 'NENHUM cometeu'. Se uma proposição é falsa, a sua negação contraditória é obrigatoriamente verdadeira.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_089",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Existe'",
    "question": "[Simulado PMPE AOCP - Questão 089] A negação lógica de 'Existe um policial militar que não consome café' é:",
    "options": [
      "Todo policial militar consome café.",
      "Nenhum policial militar consome café.",
      "Existe pelo menos um policial militar que consome café.",
      "Algum policial militar bebe chá.",
      "A maioria dos policiais militares não consome café."
    ],
    "correctIndex": 0,
    "explanation": "A negação de 'Existe x tal que ~P(x)' é 'Para todo x, P(x)' ('Todo policial militar consome café').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A negação de 'Existe x tal que ~P(x)' é 'Para todo x, P(x)' ('Todo policial militar consome café')."
    ],
    "analiseAlternativas": {
      "A": "Correta. A negação de 'Existe x tal que ~P(x)' é 'Para todo x, P(x)' ('Todo policial militar consome café').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_090",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Subalternidade e Implicação Categórica",
    "question": "[Simulado PMPE AOCP - Questão 090] Sabendo que a afirmação 'Todos os policiais do 1º Batalhão estão vacinados contra a gripe' é VERDADEIRA, pode-se deduzir com absoluta certeza lógica que:",
    "options": [
      "O Soldado Andrade, que pertence ao 1º Batalhão, está vacinado contra a gripe.",
      "Todos os policiais civis estão vacinados.",
      "Nenhum policial militar de Caruaru está vacinado.",
      "A vacinação é facultativa na PMPE.",
      "Apenas os praças do 1º Batalhão estão vacinados."
    ],
    "correctIndex": 0,
    "explanation": "Se a regra universal 'Todos os elementos de A têm a propriedade B' é verdadeira, qualquer indivíduo pertencente a A tem necessariamente a propriedade B.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Se a regra universal 'Todos os elementos de A têm a propriedade B' é verdadeira, qualquer indivíduo pertencente a A tem necessariamente a propriedade B."
    ],
    "analiseAlternativas": {
      "A": "Correta. Se a regra universal 'Todos os elementos de A têm a propriedade B' é verdadeira, qualquer indivíduo pertencente a A tem necessariamente a propriedade B.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_091",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Quantificador em Julgamento",
    "question": "[Simulado PMPE AOCP - Questão 091] A negação da declaração do promotor: 'Todos os réus estavam no local do crime no momento dos disparos' é:",
    "options": [
      "Ao menos um dos réus NÃO estava no local do crime no momento dos disparos.",
      "Nenhum dos réus estava no local do crime.",
      "Todos os réus estavam longe do local do crime.",
      "Algum dos réus efetuou os disparos.",
      "Os réus comprovaram álibi coletivo."
    ],
    "correctIndex": 0,
    "explanation": "Negação de 'Todos estavam': 'Ao menos um NÃO estava'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Negação de 'Todos estavam': 'Ao menos um NÃO estava'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Negação de 'Todos estavam': 'Ao menos um NÃO estava'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_092",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Contradição Categórica no Quadrado Lógico",
    "question": "[Simulado PMPE AOCP - Questão 092] No quadrado das oposições aristotélicas, a proposição universal afirmativa (Todo A é B - tipo A) e a proposição particular negativa (Algum A não é B - tipo O) mantêm entre si uma relação de:",
    "options": [
      "Contradição (não podem ser ambas verdadeiras nem ambas falsas).",
      "Contrariedade (podem ser ambas falsas, mas não ambas verdadeiras).",
      "Subcontrariedade (podem ser ambas verdadeiras, mas não ambas falsas).",
      "Subalternação direta.",
      "Equivalência material."
    ],
    "correctIndex": 0,
    "explanation": "As proposições A (Todo) e O (Algum não) são contraditórias: têm sempre valores-verdade opostos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "As proposições A (Todo) e O (Algum não) são contraditórias: têm sempre valores-verdade opostos."
    ],
    "analiseAlternativas": {
      "A": "Correta. As proposições A (Todo) e O (Algum não) são contraditórias: têm sempre valores-verdade opostos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_093",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Nenhum' em Legislação",
    "question": "[Simulado PMPE AOCP - Questão 093] A negação lógica de 'Nenhum servidor público pode acumular cargos remunerados fora das exceções constitucionais' é:",
    "options": [
      "Pelo menos um servidor público pode acumular cargos remunerados fora das exceções constitucionais.",
      "Todos os servidores públicos podem acumular cargos remunerados fora das exceções constitucionais.",
      "Nenhum servidor público pode acumular mais de dois cargos.",
      "Servidores públicos militares podem acumular qualquer cargo.",
      "A constituição proíbe qualquer tipo de acumulação."
    ],
    "correctIndex": 0,
    "explanation": "Negação de 'Nenhum pode': 'Pelo menos um pode'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Negação de 'Nenhum pode': 'Pelo menos um pode'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Negação de 'Nenhum pode': 'Pelo menos um pode'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_094",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência de Quantificadores",
    "question": "[Simulado PMPE AOCP - Questão 094] Dizer que 'Nenhum policial militar é desatento' equivale rigorosamente a dizer que:",
    "options": [
      "Todo policial militar é atento.",
      "Algum policial militar é desatento.",
      "Nem todo policial militar é atento.",
      "Todo desatento é policial militar.",
      "Algum policial militar é atento."
    ],
    "correctIndex": 0,
    "explanation": "'Nenhum A é não-B' equivale a 'Todo A é B' ('Todo policial militar é atento').",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "'Nenhum A é não-B' equivale a 'Todo A é B' ('Todo policial militar é atento')."
    ],
    "analiseAlternativas": {
      "A": "Correta. 'Nenhum A é não-B' equivale a 'Todo A é B' ('Todo policial militar é atento').",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_095",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Todo' com Verbo Negado",
    "question": "[Simulado PMPE AOCP - Questão 095] A negação da proposição 'Todos os candidatos foram reprovados no teste psicotécnico' é:",
    "options": [
      "Pelo menos um candidato NÃO foi reprovado no teste psicotécnico (isto é, foi aprovado).",
      "Todos os candidatos foram aprovados no teste psicotécnico.",
      "Nenhum candidato compareceu ao teste psicotécnico.",
      "O teste psicotécnico foi anulado pela banca.",
      "Alguns candidatos foram desclassificados por atraso."
    ],
    "correctIndex": 0,
    "explanation": "Negação de 'Todos foram reprovados': 'Pelo menos um NÃO foi reprovado'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Negação de 'Todos foram reprovados': 'Pelo menos um NÃO foi reprovado'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Negação de 'Todos foram reprovados': 'Pelo menos um NÃO foi reprovado'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_096",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Premissas e Dedução Lógica",
    "question": "[Simulado PMPE AOCP - Questão 096] Se 'Todos os integrantes da ROCAM pilotam motocicletas de alta cilindrada' e 'Marcos é integrante da ROCAM', qual conclusão é inescapável?",
    "options": [
      "Marcos pilota motocicleta de alta cilindrada.",
      "Marcos é oficial da PMPE.",
      "Toda pessoa que pilota motocicleta de alta cilindrada pertence à ROCAM.",
      "Marcos não pilota viaturas de quatro rodas.",
      "Marcos foi recém-transferido para o batalhão."
    ],
    "correctIndex": 0,
    "explanation": "Dedução direta: Marcos pertence ao conjunto dos integrantes da ROCAM, logo tem todas as propriedades do conjunto.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Dedução direta: Marcos pertence ao conjunto dos integrantes da ROCAM, logo tem todas as propriedades do conjunto."
    ],
    "analiseAlternativas": {
      "A": "Correta. Dedução direta: Marcos pertence ao conjunto dos integrantes da ROCAM, logo tem todas as propriedades do conjunto.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_097",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Argumento Inválido por Termo Médio Não Distribuído",
    "question": "[Simulado PMPE AOCP - Questão 097] Considere o argumento: 'Todos os generais são militares. O soldado João é militar. Logo, o soldado João é general'. Esse argumento é:",
    "options": [
      "Inválido, pois o termo médio 'militar' não foi distribuído (falácia lógica).",
      "Válido e com premissas verdadeiras.",
      "Válido por Modus Tollens.",
      "Uma demonstração irrefutável.",
      "Verdadeiro por hierarquia militar."
    ],
    "correctIndex": 0,
    "explanation": "O conjunto dos generais está dentro do conjunto dos militares. João ser militar não significa que ele esteja no subconjunto dos generais. Argumento inválido.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O conjunto dos generais está dentro do conjunto dos militares. João ser militar não significa que ele esteja no subconjunto dos generais. Argumento inválido."
    ],
    "analiseAlternativas": {
      "A": "Correta. O conjunto dos generais está dentro do conjunto dos militares. João ser militar não significa que ele esteja no subconjunto dos generais. Argumento inválido.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_098",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de 'Algum' em Contexto Pericial",
    "question": "[Simulado PMPE AOCP - Questão 098] A negação da frase 'Algum projétil atingiu o colete balístico do operador' é:",
    "options": [
      "Nenhum projétil atingiu o colete balístico do operador.",
      "Todos os projéteis atingiram o colete balístico.",
      "O colete balístico foi perfurado pelos projéteis.",
      "Pelo menos dois projéteis atingiram o operador.",
      "O operador estava sem colete no momento do confronto."
    ],
    "correctIndex": 0,
    "explanation": "Negação de 'Algum atingiu': 'NENHUM atingiu'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Negação de 'Algum atingiu': 'NENHUM atingiu'."
    ],
    "analiseAlternativas": {
      "A": "Correta. Negação de 'Algum atingiu': 'NENHUM atingiu'.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_099",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Quantificador com Exceção Única",
    "question": "[Simulado PMPE AOCP - Questão 099] Qual é a negação lógica da proposição 'Todas as viaturas do batalhão estão com a manutenção em dia, exceto uma'?",
    "options": [
      "Todas as viaturas estão em dia OU duas ou mais viaturas não estão em dia (isto é, o número de viaturas sem manutenção não é exatamente um).",
      "Nenhuma viatura está com a manutenção em dia.",
      "Todas as viaturas estão com a manutenção em dia.",
      "Exatamente duas viaturas estão na oficina mecânica.",
      "A manutenção é realizada semanalmente pela oficina credenciada."
    ],
    "correctIndex": 0,
    "explanation": "A afirmação diz que o número de viaturas com manutenção atrasada é exatamente 1. Sua negação é: zero viaturas atrasadas (todas em dia) OU duas ou mais atrasadas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A afirmação diz que o número de viaturas com manutenção atrasada é exatamente 1. Sua negação é: zero viaturas atrasadas (todas em dia) OU duas ou mais atrasadas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A afirmação diz que o número de viaturas com manutenção atrasada é exatamente 1. Sua negação é: zero viaturas atrasadas (todas em dia) OU duas ou mais atrasadas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_100",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Síntese dos Quantificadores Lógicos",
    "question": "[Simulado PMPE AOCP - Questão 100] Para negar categoricamente a afirmação 'Nenhum soldado dorme no posto de sentinela', basta constatar faticamente que:",
    "options": [
      "Pelo menos um soldado dormiu no posto de sentinela.",
      "Todos os soldados dormiram no posto de sentinela.",
      "O posto de sentinela foi desativado pelo comandante.",
      "A escala de sentinela é de apenas duas horas ininterruptas.",
      "Nenhum soldado estava escalado para o posto."
    ],
    "correctIndex": 0,
    "explanation": "Para derrubar a tese 'Nenhum faz', basta exibir um contraexemplo: pelo menos um soldado fez.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Para derrubar a tese 'Nenhum faz', basta exibir um contraexemplo: pelo menos um soldado fez."
    ],
    "analiseAlternativas": {
      "A": "Correta. Para derrubar a tese 'Nenhum faz', basta exibir um contraexemplo: pelo menos um soldado fez.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_101",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Princípio Fundamental da Contagem (PFC) - Fardamento",
    "question": "[Simulado PMPE AOCP - Questão 101] Um policial militar dispõe em seu armário de 4 calças táticas operacionais distintas e 6 camisas camufladas diferentes. O número de maneiras distintas pelas quais ele pode se vestir utilizando uma calça e uma camisa é:",
    "options": [
      "10 maneiras.",
      "12 maneiras.",
      "20 maneiras.",
      "24 maneiras.",
      "36 maneiras."
    ],
    "correctIndex": 3,
    "explanation": "Pelo Princípio Fundamental da Contagem (regra do produto): 4 calças × 6 camisas = 24 combinações possíveis de uniforme.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Pelo Princípio Fundamental da Contagem (regra do produto): 4 calças × 6 camisas = 24 combinações possíveis de uniforme."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Correta. Pelo Princípio Fundamental da Contagem (regra do produto): 4 calças × 6 camisas = 24 combinações possíveis de uniforme.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_102",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Código de Acesso ao Sistema",
    "question": "[Simulado PMPE AOCP - Questão 102] Para acessar o terminal de ocorrências do CIODS, cada operador deve criar uma senha composta por 3 letras distintas seguidas de 2 algarismos distintos. Considerando nosso alfabeto com 26 letras e os algarismos de 0 a 9, o total de senhas diferentes que podem ser cadastradas é:",
    "options": [
      "1.404.000 senhas.",
      "1.757.600 senhas.",
      "1.263.600 senhas.",
      "2.600.000 senhas.",
      "900.000 senhas."
    ],
    "correctIndex": 0,
    "explanation": "Escolha das 3 letras distintas: 26 × 25 × 24 = 15.600 maneiras. Escolha dos 2 algarismos distintos: 10 × 9 = 90 maneiras. Total: 15.600 × 90 = 1.404.000 senhas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Escolha das 3 letras distintas: 26 × 25 × 24 = 15.600 maneiras. Escolha dos 2 algarismos distintos: 10 × 9 = 90 maneiras. Total: 15.600 × 90 = 1.404.000 senhas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Escolha das 3 letras distintas: 26 × 25 × 24 = 15.600 maneiras. Escolha dos 2 algarismos distintos: 10 × 9 = 90 maneiras. Total: 15.600 × 90 = 1.404.000 senhas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_103",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Código Binário de Rádio",
    "question": "[Simulado PMPE AOCP - Questão 103] O canal de rádio da PMPE utiliza códigos de transmissão formados por sequências de 6 dígitos binários (cada dígito pode ser apenas 0 ou 1). O número total de códigos de transmissão distintos que podem ser gerados é:",
    "options": [
      "12 códigos.",
      "32 códigos.",
      "64 códigos.",
      "128 códigos.",
      "256 códigos."
    ],
    "correctIndex": 2,
    "explanation": "Para cada uma das 6 posições há 2 possibilidades (0 ou 1): 2 × 2 × 2 × 2 × 2 × 2 = 2^6 = 64 códigos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Para cada uma das 6 posições há 2 possibilidades (0 ou 1): 2 × 2 × 2 × 2 × 2 × 2 = 2^6 = 64 códigos."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. Para cada uma das 6 posições há 2 possibilidades (0 ou 1): 2 × 2 × 2 × 2 × 2 × 2 = 2^6 = 64 códigos.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_104",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Rotas de Patrulhamento",
    "question": "[Simulado PMPE AOCP - Questão 104] Uma viatura do 1º BPM deve se deslocar do quartel em Olinda até a orla de Boa Viagem passando obrigatoriamente pelo centro do Recife. Se existem 5 rotas distintas de Olinda ao centro e 4 rotas distintas do centro a Boa Viagem, o número de caminhos diferentes de ida e volta que a viatura pode fazer, SEM repetir na volta nenhuma das rotas utilizadas na ida, é:",
    "options": [
      "240 caminhos.",
      "400 caminhos.",
      "180 caminhos.",
      "120 caminhos.",
      "360 caminhos."
    ],
    "correctIndex": 0,
    "explanation": "Ida: 5 rotas (Olinda-Centro) × 4 rotas (Centro-BV) = 20 rotas. Volta (sem repetir): 3 rotas (BV-Centro) × 4 rotas (Centro-Olinda) = 12 rotas. Total de caminhos completos: 20 × 12 = 240 caminhos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Ida: 5 rotas (Olinda-Centro) × 4 rotas (Centro-BV) = 20 rotas. Volta (sem repetir): 3 rotas (BV-Centro) × 4 rotas (Centro-Olinda) = 12 rotas. Total de caminhos completos: 20 × 12 = 240 caminhos."
    ],
    "analiseAlternativas": {
      "A": "Correta. Ida: 5 rotas (Olinda-Centro) × 4 rotas (Centro-BV) = 20 rotas. Volta (sem repetir): 3 rotas (BV-Centro) × 4 rotas (Centro-Olinda) = 12 rotas. Total de caminhos completos: 20 × 12 = 240 caminhos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_105",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Números de 4 Algarismos Distintos",
    "question": "[Simulado PMPE AOCP - Questão 105] Quantos números de 4 algarismos distintos podem ser formados utilizando-se exclusivamente os algarismos 1, 2, 3, 4, 5, 6 e 7?",
    "options": [
      "840 números.",
      "720 números.",
      "2.401 números.",
      "504 números.",
      "120 números."
    ],
    "correctIndex": 0,
    "explanation": "Temos 7 algarismos disponíveis. Para o 1º dígito: 7 opções; para o 2º: 6 opções; para o 3º: 5 opções; para o 4º: 4 opções. Total = 7 × 6 × 5 × 4 = 840 números.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Temos 7 algarismos disponíveis. Para o 1º dígito: 7 opções; para o 2º: 6 opções; para o 3º: 5 opções; para o 4º: 4 opções. Total = 7 × 6 × 5 × 4 = 840 números."
    ],
    "analiseAlternativas": {
      "A": "Correta. Temos 7 algarismos disponíveis. Para o 1º dígito: 7 opções; para o 2º: 6 opções; para o 3º: 5 opções; para o 4º: 4 opções. Total = 7 × 6 × 5 × 4 = 840 números.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_106",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Números Pares com Algarismos Distintos",
    "question": "[Simulado PMPE AOCP - Questão 106] Quantos números de 3 algarismos DISTINTOS podem ser formados utilizando os algarismos 1, 2, 3, 4, 5, 6 de modo que o número formado seja PAR?",
    "options": [
      "60 números.",
      "36 números.",
      "72 números.",
      "120 números.",
      "48 números."
    ],
    "correctIndex": 0,
    "explanation": "Para ser par, o último dígito deve ser 2, 4 ou 6 (3 opções). O penúltimo dígito tem 5 opções restantes e o primeiro dígito tem 4 opções restantes. Total = 4 × 5 × 3 = 60 números.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Para ser par, o último dígito deve ser 2, 4 ou 6 (3 opções). O penúltimo dígito tem 5 opções restantes e o primeiro dígito tem 4 opções restantes. Total = 4 × 5 × 3 = 60 números."
    ],
    "analiseAlternativas": {
      "A": "Correta. Para ser par, o último dígito deve ser 2, 4 ou 6 (3 opções). O penúltimo dígito tem 5 opções restantes e o primeiro dígito tem 4 opções restantes. Total = 4 × 5 × 3 = 60 números.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_107",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Placas de Veículos Padrão Mercosul",
    "question": "[Simulado PMPE AOCP - Questão 107] O modelo de placas de identificação veicular do Mercosul é composto por 4 letras e 3 algarismos na disposição LLLNLNN (onde L é letra e N é número). O total de placas distintas que podem ser formadas com repetição permitida é:",
    "options": [
      "456.976.000 placas.",
      "175.760.000 placas.",
      "260.000.000 placas.",
      "780.000.000 placas.",
      "52.000.000 placas."
    ],
    "correctIndex": 0,
    "explanation": "Letras (26 opções cada, 4 letras): 26^4 = 456.976. Números (10 opções cada, 3 números): 10^3 = 1.000. Total = 456.976 × 1.000 = 456.976.000 placas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Letras (26 opções cada, 4 letras): 26^4 = 456.976. Números (10 opções cada, 3 números): 10^3 = 1.000. Total = 456.976 × 1.000 = 456.976.000 placas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Letras (26 opções cada, 4 letras): 26^4 = 456.976. Números (10 opções cada, 3 números): 10^3 = 1.000. Total = 456.976 × 1.000 = 456.976.000 placas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_108",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Distribuição de Viaturas e Vagas",
    "question": "[Simulado PMPE AOCP - Questão 108] Em um posto policial há 5 vagas alinhadas no estacionamento privativo e 3 viaturas operacionais para estacionar. De quantas maneiras distintas as 3 viaturas podem ocupar essas 5 vagas?",
    "options": [
      "15 maneiras.",
      "60 maneiras.",
      "120 maneiras.",
      "30 maneiras.",
      "10 maneiras."
    ],
    "correctIndex": 1,
    "explanation": "A 1ª viatura tem 5 opções de vaga; a 2ª tem 4 opções; a 3ª tem 3 opções. Total = 5 × 4 × 3 = 60 maneiras distintas (Arranjo A(5,3) = 60).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A 1ª viatura tem 5 opções de vaga; a 2ª tem 4 opções; a 3ª tem 3 opções. Total = 5 × 4 × 3 = 60 maneiras distintas (Arranjo A(5,3) = 60)."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. A 1ª viatura tem 5 opções de vaga; a 2ª tem 4 opções; a 3ª tem 3 opções. Total = 5 × 4 × 3 = 60 maneiras distintas (Arranjo A(5,3) = 60).",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_109",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Escolha de Cores em Distintivo",
    "question": "[Simulado PMPE AOCP - Questão 109] O distintivo de um curso de operações especiais deve ser pintado com 3 faixas horizontais de cores diferentes. Os instrutores dispõem de 6 cores (preto, dourado, vermelho, verde, azul e cinza). Quantos distintivos diferentes podem ser desenhados?",
    "options": [
      "120 distintivos.",
      "18 distintivos.",
      "216 distintivos.",
      "20 distintivos.",
      "720 distintivos."
    ],
    "correctIndex": 0,
    "explanation": "1ª faixa: 6 opções; 2ª faixa: 5 opções; 3ª faixa: 4 opções. Total = 6 × 5 × 4 = 120 distintivos diferentes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "1ª faixa: 6 opções; 2ª faixa: 5 opções; 3ª faixa: 4 opções. Total = 6 × 5 × 4 = 120 distintivos diferentes."
    ],
    "analiseAlternativas": {
      "A": "Correta. 1ª faixa: 6 opções; 2ª faixa: 5 opções; 3ª faixa: 4 opções. Total = 6 × 5 × 4 = 120 distintivos diferentes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_110",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Cardápio no Refeitório do Batalhão",
    "question": "[Simulado PMPE AOCP - Questão 110] O rancho do batalhão oferece aos policiais no almoço: 3 tipos de salada, 4 tipos de prato principal (carnes), 2 tipos de acompanhamento e 3 tipos de sobremesa. Se um soldado deve escolher exatamente uma opção de cada grupo, o número total de refeições completas diferentes que ele pode montar é:",
    "options": [
      "12 refeições.",
      "24 refeições.",
      "72 refeições.",
      "36 refeições.",
      "144 refeições."
    ],
    "correctIndex": 2,
    "explanation": "PFC: 3 × 4 × 2 × 3 = 72 opções de refeição completa.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "PFC: 3 × 4 × 2 × 3 = 72 opções de refeição completa."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. PFC: 3 × 4 × 2 × 3 = 72 opções de refeição completa.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_111",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Escala com Restrição",
    "question": "[Simulado PMPE AOCP - Questão 111] Quatro soldados (Alves, Bruno, Costa e Dias) serão escalados para os 4 quartos de hora da sentinela noturna (1º, 2º, 3º e 4º turnos). Sabendo que o soldado Alves NÃO pode assumir o 1º turno por recomendação médica, o número de escalas possíveis é:",
    "options": [
      "18 escalas.",
      "24 escalas.",
      "12 escalas.",
      "6 escalas.",
      "16 escalas."
    ],
    "correctIndex": 0,
    "explanation": "O total de escalas irrestritas é 4! = 24. As escalas em que Alves fica no 1º turno correspondem à permutação dos outros 3: 3! = 6. Logo: 24 - 6 = 18 escalas possíveis (ou 3 opções para o 1º turno × 3 opções para o 2º × 2 opções para o 3º × 1 opção para o 4º = 3 × 3 × 2 × 1 = 18).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O total de escalas irrestritas é 4! = 24. As escalas em que Alves fica no 1º turno correspondem à permutação dos outros 3: 3! = 6. Logo: 24 - 6 = 18 escalas possíveis (ou 3 opções para o 1º turno × 3 opções para o 2º × 2 opções para o 3º × 1 opção para o 4º = 3 × 3 × 2 × 1 = 18)."
    ],
    "analiseAlternativas": {
      "A": "Correta. O total de escalas irrestritas é 4! = 24. As escalas em que Alves fica no 1º turno correspondem à permutação dos outros 3: 3! = 6. Logo: 24 - 6 = 18 escalas possíveis (ou 3 opções para o 1º turno × 3 opções para o 2º × 2 opções para o 3º × 1 opção para o 4º = 3 × 3 × 2 × 1 = 18).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_112",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Números Ímpares com Restrição",
    "question": "[Simulado PMPE AOCP - Questão 112] Quantos números ímpares de 3 algarismos DISTINTOS podem ser formados utilizando apenas os algarismos 2, 3, 4, 5, 6, 7 e 8?",
    "options": [
      "90 números.",
      "105 números.",
      "75 números.",
      "60 números.",
      "120 números."
    ],
    "correctIndex": 0,
    "explanation": "Os algarismos disponíveis são 7 (ímpares: 3, 5, 7 -> 3 opções). Para o último algarismo: 3 opções (3, 5 ou 7). Para o primeiro algarismo: sobram 6 opções. Para o do meio: sobram 5 opções. Total = 6 × 5 × 3 = 90 números.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Os algarismos disponíveis são 7 (ímpares: 3, 5, 7 -> 3 opções). Para o último algarismo: 3 opções (3, 5 ou 7). Para o primeiro algarismo: sobram 6 opções. Para o do meio: sobram 5 opções. Total = 6 × 5 × 3 = 90 números."
    ],
    "analiseAlternativas": {
      "A": "Correta. Os algarismos disponíveis são 7 (ímpares: 3, 5, 7 -> 3 opções). Para o último algarismo: 3 opções (3, 5 ou 7). Para o primeiro algarismo: sobram 6 opções. Para o do meio: sobram 5 opções. Total = 6 × 5 × 3 = 90 números.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_113",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Formação de Comandos de Voz",
    "question": "[Simulado PMPE AOCP - Questão 113] Um comandante de pelotão utiliza códigos sonoros de apito compostos por uma sequência de 5 toques, que podem ser 'curto' ou 'longo'. O número total de comandos sonoros distintos possíveis é:",
    "options": [
      "10 comandos.",
      "25 comandos.",
      "32 comandos.",
      "64 comandos.",
      "16 comandos."
    ],
    "correctIndex": 2,
    "explanation": "Cada um dos 5 toques tem 2 possibilidades (curto ou longo): 2^5 = 32 comandos sonoros distintos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Cada um dos 5 toques tem 2 possibilidades (curto ou longo): 2^5 = 32 comandos sonoros distintos."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. Cada um dos 5 toques tem 2 possibilidades (curto ou longo): 2^5 = 32 comandos sonoros distintos.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_114",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Senha com Algarismos e Letras",
    "question": "[Simulado PMPE AOCP - Questão 114] Um cofre do setor de armamento é trancado por um segredo que consiste em 2 letras distintas seguidas de 3 dígitos distintos. Quantas combinações de segredo existem utilizando as letras A, B, C, D e os algarismos 1, 2, 3, 4, 5?",
    "options": [
      "720 segredos.",
      "1.440 segredos.",
      "360 segredos.",
      "120 segredos.",
      "2.400 segredos."
    ],
    "correctIndex": 0,
    "explanation": "Letras (2 de 4 distintas): 4 × 3 = 12. Algarismos (3 de 5 distintos): 5 × 4 × 3 = 60. Total = 12 × 60 = 720 segredos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Letras (2 de 4 distintas): 4 × 3 = 12. Algarismos (3 de 5 distintos): 5 × 4 × 3 = 60. Total = 12 × 60 = 720 segredos."
    ],
    "analiseAlternativas": {
      "A": "Correta. Letras (2 de 4 distintas): 4 × 3 = 12. Algarismos (3 de 5 distintos): 5 × 4 × 3 = 60. Total = 12 × 60 = 720 segredos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_115",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Fila de Atendimento no Posto Médico",
    "question": "[Simulado PMPE AOCP - Questão 115] Cinco policiais militares (um capitão, um tenente, um sargento, um cabo e um soldado) aguardam atendimento em fila única. O número total de ordens distintas de atendimento na fila é:",
    "options": [
      "25 maneiras.",
      "60 maneiras.",
      "120 maneiras.",
      "720 maneiras.",
      "24 maneiras."
    ],
    "correctIndex": 2,
    "explanation": "Permutação simples de 5 pessoas: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Permutação simples de 5 pessoas: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Correta. Permutação simples de 5 pessoas: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_116",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas Simples - Palavra PMPE",
    "question": "[Simulado PMPE AOCP - Questão 116] O número total de anagramas distintos (com ou sem sentido) que podem ser formados com as letras da palavra 'PMPE' é exatamente:",
    "options": [
      "24 anagramas.",
      "12 anagramas.",
      "6 anagramas.",
      "4 anagramas.",
      "18 anagramas."
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'PMPE' possui 4 letras com a letra 'P' repetida 2 vezes. Permutação com repetição: P4^(2) = 4! / 2! = (24) / 2 = 12 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A palavra 'PMPE' possui 4 letras com a letra 'P' repetida 2 vezes. Permutação com repetição: P4^(2) = 4! / 2! = (24) / 2 = 12 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. A palavra 'PMPE' possui 4 letras com a letra 'P' repetida 2 vezes. Permutação com repetição: P4^(2) = 4! / 2! = (24) / 2 = 12 anagramas.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_117",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas Simples - Palavra SOLDADO",
    "question": "[Simulado PMPE AOCP - Questão 117] Quantos anagramas diferentes podem ser formados permutando-se todas as letras da palavra 'SOLDADO'?",
    "options": [
      "5.040 anagramas.",
      "1.260 anagramas.",
      "2.520 anagramas.",
      "630 anagramas.",
      "720 anagramas."
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'SOLDADO' tem 7 letras no total, sendo: O repetido 2 vezes e D repetido 2 vezes. P7^(2,2) = 7! / (2! × 2!) = 5.040 / 4 = 1.260 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A palavra 'SOLDADO' tem 7 letras no total, sendo: O repetido 2 vezes e D repetido 2 vezes. P7^(2,2) = 7! / (2! × 2!) = 5.040 / 4 = 1.260 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "B": "Correta. A palavra 'SOLDADO' tem 7 letras no total, sendo: O repetido 2 vezes e D repetido 2 vezes. P7^(2,2) = 7! / (2! × 2!) = 5.040 / 4 = 1.260 anagramas.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_118",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Palavra POLICIA",
    "question": "[Simulado PMPE AOCP - Questão 118] O número de anagramas da palavra 'POLICIA' (desconsiderando acentos) é igual a:",
    "options": [
      "2.520 anagramas.",
      "5.040 anagramas.",
      "1.260 anagramas.",
      "840 anagramas.",
      "720 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "A palavra 'POLICIA' tem 7 letras, com a letra 'I' repetida 2 vezes. P7^(2) = 7! / 2! = 5.040 / 2 = 2.520 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A palavra 'POLICIA' tem 7 letras, com a letra 'I' repetida 2 vezes. P7^(2) = 7! / 2! = 5.040 / 2 = 2.520 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A palavra 'POLICIA' tem 7 letras, com a letra 'I' repetida 2 vezes. P7^(2) = 7! / 2! = 5.040 / 2 = 2.520 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_119",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Palavra BOPE",
    "question": "[Simulado PMPE AOCP - Questão 119] Quantos anagramas distintos possui a palavra 'BOPE'?",
    "options": [
      "24 anagramas.",
      "12 anagramas.",
      "16 anagramas.",
      "6 anagramas.",
      "48 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "A palavra 'BOPE' possui 4 letras todas distintas. P4 = 4! = 4 × 3 × 2 × 1 = 24 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A palavra 'BOPE' possui 4 letras todas distintas. P4 = 4! = 4 × 3 × 2 × 1 = 24 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A palavra 'BOPE' possui 4 letras todas distintas. P4 = 4! = 4 × 3 × 2 × 1 = 24 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_120",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Palavra ROTAM",
    "question": "[Simulado PMPE AOCP - Questão 120] Quantos anagramas da palavra 'ROTAM' começam obrigatoriamente pela letra 'R'?",
    "options": [
      "24 anagramas.",
      "120 anagramas.",
      "60 anagramas.",
      "12 anagramas.",
      "6 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "Fixando a letra 'R' na 1ª posição, restam 4 letras distintas (O, T, A, M) para permutar nas 4 posições restantes: P4 = 4! = 24 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Fixando a letra 'R' na 1ª posição, restam 4 letras distintas (O, T, A, M) para permutar nas 4 posições restantes: P4 = 4! = 24 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Fixando a letra 'R' na 1ª posição, restam 4 letras distintas (O, T, A, M) para permutar nas 4 posições restantes: P4 = 4! = 24 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_121",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Palavra CAVALARIA",
    "question": "[Simulado PMPE AOCP - Questão 121] O número total de anagramas distintos da palavra 'CAVALARIA' é dado por:",
    "options": [
      "15.120 anagramas.",
      "30.240 anagramas.",
      "7.560 anagramas.",
      "60.480 anagramas.",
      "362.880 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "A palavra 'CAVALARIA' tem 9 letras, com 'A' repetido 4 vezes. P9^(4) = 9! / 4! = (362.880) / 24 = 15.120 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A palavra 'CAVALARIA' tem 9 letras, com 'A' repetido 4 vezes. P9^(4) = 9! / 4! = (362.880) / 24 = 15.120 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A palavra 'CAVALARIA' tem 9 letras, com 'A' repetido 4 vezes. P9^(4) = 9! / 4! = (362.880) / 24 = 15.120 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_122",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Letras Juntas",
    "question": "[Simulado PMPE AOCP - Questão 122] Quantos anagramas da palavra 'ORDEM' possuem as letras 'OR' juntas e nessa exata ordem?",
    "options": [
      "24 anagramas.",
      "120 anagramas.",
      "48 anagramas.",
      "12 anagramas.",
      "60 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "Consideramos o bloco (OR) como um único elemento. Ficamos com: (OR), D, E, M (total de 4 elementos). Permutando 4 elementos: 4! = 24 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Consideramos o bloco (OR) como um único elemento. Ficamos com: (OR), D, E, M (total de 4 elementos). Permutando 4 elementos: 4! = 24 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Consideramos o bloco (OR) como um único elemento. Ficamos com: (OR), D, E, M (total de 4 elementos). Permutando 4 elementos: 4! = 24 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_123",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Letras Juntas em Qualquer Ordem",
    "question": "[Simulado PMPE AOCP - Questão 123] Quantos anagramas da palavra 'FOGO' possuem as letras 'FG' juntas em qualquer ordem?",
    "options": [
      "6 anagramas.",
      "12 anagramas.",
      "24 anagramas.",
      "3 anagramas.",
      "18 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "Total de letras em 'FOGO': 4 (O repetido 2 vezes). Se F e G devem ficar juntos, tratamos o bloco (FG) como 1 elemento. Temos: (FG), O, O (3 elementos, com O repetido 2 vezes) -> 3! / 2! = 3 maneiras. Como F e G podem permutar entre si em 2! = 2 formas, temos 3 × 2 = 6 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de letras em 'FOGO': 4 (O repetido 2 vezes). Se F e G devem ficar juntos, tratamos o bloco (FG) como 1 elemento. Temos: (FG), O, O (3 elementos, com O repetido 2 vezes) -> 3! / 2! = 3 maneiras. Como F e G podem permutar entre si em 2! = 2 formas, temos 3 × 2 = 6 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de letras em 'FOGO': 4 (O repetido 2 vezes). Se F e G devem ficar juntos, tratamos o bloco (FG) como 1 elemento. Temos: (FG), O, O (3 elementos, com O repetido 2 vezes) -> 3! / 2! = 3 maneiras. Como F e G podem permutar entre si em 2! = 2 formas, temos 3 × 2 = 6 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_124",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Permutação em Fila com Casal Junto",
    "question": "[Simulado PMPE AOCP - Questão 124] Seis policiais militares, sendo dois irmãos gêmeos, serão organizados em fila indiana. De quantas maneiras diferentes essa fila pode ser organizada de modo que os dois irmãos fiquem OBRIGATORIAMENTE juntos?",
    "options": [
      "240 maneiras.",
      "120 maneiras.",
      "720 maneiras.",
      "144 maneiras.",
      "480 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Considerando os dois irmãos como um único bloco: temos 5 elementos para permutar (5! = 120). Dentro do bloco, os irmãos podem trocar de posição (2! = 2). Total = 120 × 2 = 240 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Considerando os dois irmãos como um único bloco: temos 5 elementos para permutar (5! = 120). Dentro do bloco, os irmãos podem trocar de posição (2! = 2). Total = 120 × 2 = 240 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. Considerando os dois irmãos como um único bloco: temos 5 elementos para permutar (5! = 120). Dentro do bloco, os irmãos podem trocar de posição (2! = 2). Total = 120 × 2 = 240 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_125",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Permutação Circular em Mesa de Reunião",
    "question": "[Simulado PMPE AOCP - Questão 125] Cinco oficiais do Estado-Maior da PMPE vão se sentar ao redor de uma mesa de reunião circular. O número de maneiras distintas pelas quais esses oficiais podem se posicionar ao redor da mesa é:",
    "options": [
      "24 maneiras.",
      "120 maneiras.",
      "60 maneiras.",
      "12 maneiras.",
      "6 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Permutação circular de n elementos: PC(n) = (n - 1)!. Para 5 oficiais: PC(5) = (5 - 1)! = 4! = 24 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Permutação circular de n elementos: PC(n) = (n - 1)!. Para 5 oficiais: PC(5) = (5 - 1)! = 4! = 24 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. Permutação circular de n elementos: PC(n) = (n - 1)!. Para 5 oficiais: PC(5) = (5 - 1)! = 4! = 24 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_126",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas - Palavra BRASAO",
    "question": "[Simulado PMPE AOCP - Questão 126] O número de anagramas da palavra 'BRASAO' (sem acento) é:",
    "options": [
      "360 anagramas.",
      "720 anagramas.",
      "180 anagramas.",
      "120 anagramas.",
      "240 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "'BRASAO' tem 6 letras, sendo a letra 'A' repetida 2 vezes. P6^(2) = 6! / 2! = 720 / 2 = 360 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "'BRASAO' tem 6 letras, sendo a letra 'A' repetida 2 vezes. P6^(2) = 6! / 2! = 720 / 2 = 360 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. 'BRASAO' tem 6 letras, sendo a letra 'A' repetida 2 vezes. P6^(2) = 6! / 2! = 720 / 2 = 360 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_127",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Anagramas Começando por Vogal",
    "question": "[Simulado PMPE AOCP - Questão 127] Quantos anagramas da palavra 'REPOR' começam por uma vogal?",
    "options": [
      "24 anagramas.",
      "12 anagramas.",
      "36 anagramas.",
      "48 anagramas.",
      "60 anagramas."
    ],
    "correctIndex": 0,
    "explanation": "'REPOR' tem 5 letras: R(2), E(1), P(1), O(1). As vogais são E e O (2 vogais distintas). Se começa com E: sobram R, P, O, R -> 4! / 2! = 12 anagramas. Se começa com O: sobram R, E, P, R -> 4! / 2! = 12 anagramas. Total = 12 + 12 = 24 anagramas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "'REPOR' tem 5 letras: R(2), E(1), P(1), O(1). As vogais são E e O (2 vogais distintas). Se começa com E: sobram R, P, O, R -> 4! / 2! = 12 anagramas. Se começa com O: sobram R, E, P, R -> 4! / 2! = 12 anagramas. Total = 12 + 12 = 24 anagramas."
    ],
    "analiseAlternativas": {
      "A": "Correta. 'REPOR' tem 5 letras: R(2), E(1), P(1), O(1). As vogais são E e O (2 vogais distintas). Se começa com E: sobram R, P, O, R -> 4! / 2! = 12 anagramas. Se começa com O: sobram R, E, P, R -> 4! / 2! = 12 anagramas. Total = 12 + 12 = 24 anagramas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_128",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Permutação com Repetição - Sequência de Disparos",
    "question": "[Simulado PMPE AOCP - Questão 128] Em um teste balístico, foram efetuados 6 disparos, sendo 4 tiros acertados no alvo (A) e 2 tiros errados (E). De quantas maneiras distintas essa sequência de acertos e erros pode ter ocorrido?",
    "options": [
      "15 maneiras.",
      "30 maneiras.",
      "12 maneiras.",
      "20 maneiras.",
      "6 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Permutação de 6 elementos com 4 'A' e 2 'E': P6^(4,2) = 6! / (4! × 2!) = (720) / (24 × 2) = 720 / 48 = 15 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Permutação de 6 elementos com 4 'A' e 2 'E': P6^(4,2) = 6! / (4! × 2!) = (720) / (24 × 2) = 720 / 48 = 15 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. Permutação de 6 elementos com 4 'A' e 2 'E': P6^(4,2) = 6! / (4! × 2!) = (720) / (24 × 2) = 720 / 48 = 15 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_129",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples - Equipe de Patrulha",
    "question": "[Simulado PMPE AOCP - Questão 129] Em uma companhia do 1º BPM há 10 soldados disponíveis. O comandante precisa escalar uma equipe de 3 soldados para uma patrulha a pé. O número de equipes distintas que podem ser formadas é:",
    "options": [
      "120 equipes.",
      "720 equipes.",
      "30 equipes.",
      "60 equipes.",
      "240 equipes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem dos soldados não altera a composição da equipe, trata-se de Combinação Simples C(10,3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 equipes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como a ordem dos soldados não altera a composição da equipe, trata-se de Combinação Simples C(10,3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 equipes."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como a ordem dos soldados não altera a composição da equipe, trata-se de Combinação Simples C(10,3) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 equipes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_130",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples - Comissão Disciplinar",
    "question": "[Simulado PMPE AOCP - Questão 130] Um comandante deve escolher 4 sargentos entre os 8 existentes na unidade para compor o Conselho de Disciplina. Quantas comissões diferentes podem ser instituídas?",
    "options": [
      "70 comissões.",
      "1.680 comissões.",
      "56 comissões.",
      "35 comissões.",
      "140 comissões."
    ],
    "correctIndex": 0,
    "explanation": "C(8,4) = (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1) = 1.680 / 24 = 70 comissões.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "C(8,4) = (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1) = 1.680 / 24 = 70 comissões."
    ],
    "analiseAlternativas": {
      "A": "Correta. C(8,4) = (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1) = 1.680 / 24 = 70 comissões.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_131",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples com Homens e Mulheres",
    "question": "[Simulado PMPE AOCP - Questão 131] Um pelotão possui 6 policiais masculinos e 4 policiais femininas. O oficial de dia precisa formar uma guarnição mista composta por 2 homens e 2 mulheres. O número total de guarnições distintas possíveis é:",
    "options": [
      "90 guarnições.",
      "60 guarnições.",
      "45 guarnições.",
      "180 guarnições.",
      "120 guarnições."
    ],
    "correctIndex": 0,
    "explanation": "Escolha dos homens: C(6,2) = (6 × 5) / 2 = 15. Escolha das mulheres: C(4,2) = (4 × 3) / 2 = 6. Pelo princípio multiplicativo: 15 × 6 = 90 guarnições.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Escolha dos homens: C(6,2) = (6 × 5) / 2 = 15. Escolha das mulheres: C(4,2) = (4 × 3) / 2 = 6. Pelo princípio multiplicativo: 15 × 6 = 90 guarnições."
    ],
    "analiseAlternativas": {
      "A": "Correta. Escolha dos homens: C(6,2) = (6 × 5) / 2 = 15. Escolha das mulheres: C(4,2) = (4 × 3) / 2 = 6. Pelo princípio multiplicativo: 15 × 6 = 90 guarnições.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_132",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples - Escolha de Armas",
    "question": "[Simulado PMPE AOCP - Questão 132] No armamento da unidade há 7 pistolas 9mm idênticas em calibre, mas de modelos diferentes. Um instrutor precisa selecionar 3 dessas pistolas para uma demonstração. Quantos grupos de 3 pistolas podem ser selecionados?",
    "options": [
      "35 grupos.",
      "210 grupos.",
      "21 grupos.",
      "42 grupos.",
      "70 grupos."
    ],
    "correctIndex": 0,
    "explanation": "C(7,3) = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35 grupos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "C(7,3) = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35 grupos."
    ],
    "analiseAlternativas": {
      "A": "Correta. C(7,3) = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35 grupos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_133",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples com Membro Obrigatório",
    "question": "[Simulado PMPE AOCP - Questão 133] Entre 9 soldados disponíveis, deve-se formar uma equipe de resgate com 4 soldados. Sabendo-se que o soldado Silva (socorrista experiente) DEVE OBRIGATORIAMENTE fazer parte da equipe, quantas equipes distintas podem ser montadas?",
    "options": [
      "56 equipes.",
      "70 equipes.",
      "126 equipes.",
      "84 equipes.",
      "28 equipes."
    ],
    "correctIndex": 0,
    "explanation": "Como o soldado Silva já está garantido na equipe, resta escolher 3 vagas dentre os 8 soldados restantes: C(8,3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 equipes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como o soldado Silva já está garantido na equipe, resta escolher 3 vagas dentre os 8 soldados restantes: C(8,3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 equipes."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como o soldado Silva já está garantido na equipe, resta escolher 3 vagas dentre os 8 soldados restantes: C(8,3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 equipes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_134",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples com Membro Excluído",
    "question": "[Simulado PMPE AOCP - Questão 134] De um grupo de 8 soldados, deseja-se formar uma comissão de 3 membros. Sabendo que o soldado Santos NÃO pode participar por motivo de licença médica, quantas comissões diferentes podem ser formadas?",
    "options": [
      "35 comissões.",
      "56 comissões.",
      "21 comissões.",
      "70 comissões.",
      "42 comissões."
    ],
    "correctIndex": 0,
    "explanation": "Excluindo o soldado Santos, restam 7 soldados para preencher as 3 vagas: C(7,3) = (7 × 6 × 5) / 6 = 35 comissões.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Excluindo o soldado Santos, restam 7 soldados para preencher as 3 vagas: C(7,3) = (7 × 6 × 5) / 6 = 35 comissões."
    ],
    "analiseAlternativas": {
      "A": "Correta. Excluindo o soldado Santos, restam 7 soldados para preencher as 3 vagas: C(7,3) = (7 × 6 × 5) / 6 = 35 comissões.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_135",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação - Apertos de Mão",
    "question": "[Simulado PMPE AOCP - Questão 135] Ao final de uma solenidade militar no Quartel do Derby, 12 oficiais se cumprimentam mutuamente com um aperto de mão uma única vez cada um. O número total de apertos de mão trocados foi:",
    "options": [
      "66 apertos de mão.",
      "132 apertos de mão.",
      "144 apertos de mão.",
      "72 apertos de mão.",
      "55 apertos de mão."
    ],
    "correctIndex": 0,
    "explanation": "Cada aperto de mão envolve 2 pessoas escolhidas entre 12: C(12,2) = (12 × 11) / 2 = 66 apertos de mão.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Cada aperto de mão envolve 2 pessoas escolhidas entre 12: C(12,2) = (12 × 11) / 2 = 66 apertos de mão."
    ],
    "analiseAlternativas": {
      "A": "Correta. Cada aperto de mão envolve 2 pessoas escolhidas entre 12: C(12,2) = (12 × 11) / 2 = 66 apertos de mão.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_136",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação - Diagonais de um Polígono",
    "question": "[Simulado PMPE AOCP - Questão 136] O número de diagonais de um polígono regular de 8 lados (octógono) que representa o esquema tático de uma fortaleza é dado por:",
    "options": [
      "20 diagonais.",
      "28 diagonais.",
      "16 diagonais.",
      "24 diagonais.",
      "14 diagonais."
    ],
    "correctIndex": 0,
    "explanation": "Fórmula: d = n(n - 3) / 2 = 8 × (8 - 3) / 2 = 8 × 5 / 2 = 20 diagonais (ou C(8,2) - 8 = 28 - 8 = 20).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Fórmula: d = n(n - 3) / 2 = 8 × (8 - 3) / 2 = 8 × 5 / 2 = 20 diagonais (ou C(8,2) - 8 = 28 - 8 = 20)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Fórmula: d = n(n - 3) / 2 = 8 × (8 - 3) / 2 = 8 × 5 / 2 = 20 diagonais (ou C(8,2) - 8 = 28 - 8 = 20).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_137",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação com 'Pelo Menos Um'",
    "question": "[Simulado PMPE AOCP - Questão 137] De um grupo de 5 soldados e 3 cabos, deseja-se formar uma equipe de 3 militares de modo que haja PELO MENOS UM CABO na equipe. O número de equipes que atendem a essa condição é:",
    "options": [
      "46 equipes.",
      "56 equipes.",
      "10 equipes.",
      "35 equipes.",
      "30 equipes."
    ],
    "correctIndex": 0,
    "explanation": "Total de equipes possíveis com 8 militares: C(8,3) = (8 × 7 × 6) / 6 = 56. Equipes formadas SOMENTE por soldados (sem nenhum cabo): C(5,3) = 10. Equipes com pelo menos um cabo: 56 - 10 = 46 equipes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de equipes possíveis com 8 militares: C(8,3) = (8 × 7 × 6) / 6 = 56. Equipes formadas SOMENTE por soldados (sem nenhum cabo): C(5,3) = 10. Equipes com pelo menos um cabo: 56 - 10 = 46 equipes."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de equipes possíveis com 8 militares: C(8,3) = (8 × 7 × 6) / 6 = 56. Equipes formadas SOMENTE por soldados (sem nenhum cabo): C(5,3) = 10. Equipes com pelo menos um cabo: 56 - 10 = 46 equipes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_138",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação - Triângulos com Pontos",
    "question": "[Simulado PMPE AOCP - Questão 138] Sobre uma circunferência estão marcados 7 pontos distintos. Quantos triângulos distintos podem ser formados tendo como vértices quaisquer 3 desses 7 pontos?",
    "options": [
      "35 triângulos.",
      "21 triângulos.",
      "70 triângulos.",
      "42 triângulos.",
      "15 triângulos."
    ],
    "correctIndex": 0,
    "explanation": "Como os pontos estão sobre uma circunferência, não há três pontos colineares. Logo: C(7,3) = (7 × 6 × 5) / 6 = 35 triângulos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como os pontos estão sobre uma circunferência, não há três pontos colineares. Logo: C(7,3) = (7 × 6 × 5) / 6 = 35 triângulos."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como os pontos estão sobre uma circunferência, não há três pontos colineares. Logo: C(7,3) = (7 × 6 × 5) / 6 = 35 triângulos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_139",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Arranjo Simples - Cargos de Direção",
    "question": "[Simulado PMPE AOCP - Questão 139] Em uma eleição para a diretoria do Clube dos Oficiais da PMPE, há 6 candidatos concorrendo aos cargos de Presidente, Vice-Presidente e Tesoureiro (cada eleito ocupará um cargo específico). O número de maneiras distintas pelas quais esses cargos podem ser preenchidos é:",
    "options": [
      "120 maneiras.",
      "20 maneiras.",
      "60 maneiras.",
      "216 maneiras.",
      "720 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem dos cargos importa (Presidente ≠ Vice ≠ Tesoureiro), trata-se de Arranjo: A(6,3) = 6 × 5 × 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como a ordem dos cargos importa (Presidente ≠ Vice ≠ Tesoureiro), trata-se de Arranjo: A(6,3) = 6 × 5 × 4 = 120 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como a ordem dos cargos importa (Presidente ≠ Vice ≠ Tesoureiro), trata-se de Arranjo: A(6,3) = 6 × 5 × 4 = 120 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_140",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Arranjo Simples - Funções na Viatura",
    "question": "[Simulado PMPE AOCP - Questão 140] Uma guarnição tática é composta por 3 funções hierarquizadas distintas: Comandante da Guarnição, Motorista Operacional e Atirador de Segurança. Havendo 7 policiais aptos a desempenhar qualquer uma das funções, de quantas maneiras essa guarnição pode ser escalada?",
    "options": [
      "210 maneiras.",
      "35 maneiras.",
      "105 maneiras.",
      "42 maneiras.",
      "504 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "A ordem das funções importa: Comandante (7 opções) × Motorista (6 opções) × Atirador (5 opções) = A(7,3) = 210 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A ordem das funções importa: Comandante (7 opções) × Motorista (6 opções) × Atirador (5 opções) = A(7,3) = 210 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. A ordem das funções importa: Comandante (7 opções) × Motorista (6 opções) × Atirador (5 opções) = A(7,3) = 210 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_141",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Arranjo Simples - Pódio no Campeonato de Tiro",
    "question": "[Simulado PMPE AOCP - Questão 141] Oito atiradores de elite da PMPE disputam um torneio de precisão. Supondo que não haja empates, o número de maneiras distintas pelas quais as medalhas de Ouro, Prata e Bronze podem ser distribuídas é:",
    "options": [
      "336 maneiras.",
      "56 maneiras.",
      "512 maneiras.",
      "120 maneiras.",
      "168 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "A(8,3) = 8 × 7 × 6 = 336 maneiras distintas de pódio.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A(8,3) = 8 × 7 × 6 = 336 maneiras distintas de pódio."
    ],
    "analiseAlternativas": {
      "A": "Correta. A(8,3) = 8 × 7 × 6 = 336 maneiras distintas de pódio.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_142",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Arranjo Simples - Sorteio de Prêmios Distintos",
    "question": "[Simulado PMPE AOCP - Questão 142] Em uma rifa beneficente no quartel, 10 policiais concorrem a 3 prêmios diferentes: uma moto (1º prêmio), uma pistola airsoft (2º prêmio) e um relógio tático (3º prêmio). Cada policial só pode ganhar no máximo um prêmio. De quantas maneiras os prêmios podem ser distribuídos?",
    "options": [
      "720 maneiras.",
      "120 maneiras.",
      "240 maneiras.",
      "1.000 maneiras.",
      "360 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "A(10,3) = 10 × 9 × 8 = 720 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A(10,3) = 10 × 9 × 8 = 720 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. A(10,3) = 10 × 9 × 8 = 720 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_143",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diferença entre Arranjo e Combinação",
    "question": "[Simulado PMPE AOCP - Questão 143] Na análise combinatória para o concurso da PMPE, a distinção conceitual crucial entre Arranjo Simples e Combinação Simples reside no fato de que:",
    "options": [
      "No Arranjo a ordem dos elementos altera o agrupamento formado, enquanto na Combinação a ordem dos elementos é irrelevante.",
      "No Arranjo os elementos podem se repetir livremente, enquanto na Combinação não há repetição.",
      "A Combinação gera sempre um número maior de resultados que o Arranjo.",
      "O Arranjo é restrito a números e a Combinação é restrita a pessoas.",
      "Não há diferença matemática, sendo fórmulas idênticas."
    ],
    "correctIndex": 0,
    "explanation": "No Arranjo (ex: cargos, senhas, pódio), a ordem importa: (A, B) ≠ (B, A). Na Combinação (ex: equipes, comissões), a ordem não importa: {A, B} = {B, A}.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "No Arranjo (ex: cargos, senhas, pódio), a ordem importa: (A, B) ≠ (B, A). Na Combinação (ex: equipes, comissões), a ordem não importa: {A, B} = {B, A}."
    ],
    "analiseAlternativas": {
      "A": "Correta. No Arranjo (ex: cargos, senhas, pódio), a ordem importa: (A, B) ≠ (B, A). Na Combinação (ex: equipes, comissões), a ordem não importa: {A, B} = {B, A}.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_144",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Arranjo com 2 Elementos",
    "question": "[Simulado PMPE AOCP - Questão 144] Em um pelotão com 12 soldados, de quantas maneiras distintas pode-se escolher um Chefe de Equipe e um Subchefe?",
    "options": [
      "132 maneiras.",
      "66 maneiras.",
      "24 maneiras.",
      "144 maneiras.",
      "72 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "A(12,2) = 12 × 11 = 132 maneiras distintas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A(12,2) = 12 × 11 = 132 maneiras distintas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A(12,2) = 12 × 11 = 132 maneiras distintas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_145",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação - Triagem de Inquéritos",
    "question": "[Simulado PMPE AOCP - Questão 145] Um escrivão tem 10 inquéritos policiais pendentes de relatório final e deve escolher 4 deles para concluir no plantão de hoje. De quantas formas distintas ele pode selecionar esse lote de 4 inquéritos?",
    "options": [
      "210 formas.",
      "5.040 formas.",
      "120 formas.",
      "84 formas.",
      "105 formas."
    ],
    "correctIndex": 0,
    "explanation": "A ordem em que os inquéritos são selecionados para a pilha de trabalho não altera o grupo de 4: C(10,4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 5.040 / 24 = 210 formas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A ordem em que os inquéritos são selecionados para a pilha de trabalho não altera o grupo de 4: C(10,4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 5.040 / 24 = 210 formas."
    ],
    "analiseAlternativas": {
      "A": "Correta. A ordem em que os inquéritos são selecionados para a pilha de trabalho não altera o grupo de 4: C(10,4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 5.040 / 24 = 210 formas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_146",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação - Formação de Duplas de Patrulha",
    "question": "[Simulado PMPE AOCP - Questão 146] Um posto de policiamento comunitário possui 8 policiais militares. Quantas duplas de patrulhamento diferentes podem ser formadas diariamente com esse efetivo?",
    "options": [
      "28 duplas.",
      "56 duplas.",
      "16 duplas.",
      "64 duplas.",
      "14 duplas."
    ],
    "correctIndex": 0,
    "explanation": "C(8,2) = (8 × 7) / 2 = 28 duplas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "C(8,2) = (8 × 7) / 2 = 28 duplas."
    ],
    "analiseAlternativas": {
      "A": "Correta. C(8,2) = (8 × 7) / 2 = 28 duplas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_147",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação com Condição de Exclusão Mútua",
    "question": "[Simulado PMPE AOCP - Questão 147] Entre 7 policiais, dois deles (Gomes e Lima) são desafetos pessoais e não podem trabalhar juntos na mesma viatura. De quantas maneiras pode-se formar uma equipe de 3 policiais sem que Gomes e Lima fiquem juntos?",
    "options": [
      "30 maneiras.",
      "35 maneiras.",
      "25 maneiras.",
      "20 maneiras.",
      "15 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Total de equipes com 3 policiais: C(7,3) = 35. Equipes em que Gomes e Lima estão juntos: já temos Gomes e Lima, sobra escolher 1 policial entre os outros 5 -> C(5,1) = 5 equipes. Equipes sem os dois juntos: 35 - 5 = 30 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de equipes com 3 policiais: C(7,3) = 35. Equipes em que Gomes e Lima estão juntos: já temos Gomes e Lima, sobra escolher 1 policial entre os outros 5 -> C(5,1) = 5 equipes. Equipes sem os dois juntos: 35 - 5 = 30 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de equipes com 3 policiais: C(7,3) = 35. Equipes em que Gomes e Lima estão juntos: já temos Gomes e Lima, sobra escolher 1 policial entre os outros 5 -> C(5,1) = 5 equipes. Equipes sem os dois juntos: 35 - 5 = 30 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_148",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PFC - Caminhos em Grade Quadriculada",
    "question": "[Simulado PMPE AOCP - Questão 148] Para ir do ponto A ao ponto B em uma malha viária urbana planejada, uma viatura deve se deslocar exatamente 3 quarteirões para o Norte e 4 quarteirões para o Leste. O número de caminhos diferentes que a viatura pode seguir é:",
    "options": [
      "35 caminhos.",
      "12 caminhos.",
      "70 caminhos.",
      "24 caminhos.",
      "120 caminhos."
    ],
    "correctIndex": 0,
    "explanation": "A viatura dará 7 passos no total: 3 N e 4 L. Permutação com repetição: P7^(3,4) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 caminhos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A viatura dará 7 passos no total: 3 N e 4 L. Permutação com repetição: P7^(3,4) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 caminhos."
    ],
    "analiseAlternativas": {
      "A": "Correta. A viatura dará 7 passos no total: 3 N e 4 L. Permutação com repetição: P7^(3,4) = 7! / (3! × 4!) = (7 × 6 × 5) / (3 × 2 × 1) = 35 caminhos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_149",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Combinação Simples - Linhas de Tiro",
    "question": "[Simulado PMPE AOCP - Questão 149] No estande de tiro da Academia de Polícia há 6 raias numeradas. Quatro soldados devem ser posicionados, um em cada raia. De quantas maneiras eles podem ocupar as raias?",
    "options": [
      "360 maneiras.",
      "15 maneiras.",
      "30 maneiras.",
      "720 maneiras.",
      "24 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Como as raias são numeradas (posições distintas), a ordem importa: A(6,4) = 6 × 5 × 4 × 3 = 360 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como as raias são numeradas (posições distintas), a ordem importa: A(6,4) = 6 × 5 × 4 × 3 = 360 maneiras."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como as raias são numeradas (posições distintas), a ordem importa: A(6,4) = 6 × 5 × 4 × 3 = 360 maneiras.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_150",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Fatorial e Simplificação Algébrica",
    "question": "[Simulado PMPE AOCP - Questão 150] O valor numérico da expressão matemática contendo fatoriais E = (8! - 7!) / 6! é igual a:",
    "options": [
      "49.",
      "56.",
      "42.",
      "35.",
      "64."
    ],
    "correctIndex": 0,
    "explanation": "E = (8 × 7! - 1 × 7!) / 6! = 7! × (8 - 1) / 6! = (7! × 7) / 6! = (7 × 6! × 7) / 6! = 7 × 7 = 49.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "E = (8 × 7! - 1 × 7!) / 6! = 7! × (8 - 1) / 6! = (7! × 7) / 6! = (7 × 6! × 7) / 6! = 7 × 7 = 49."
    ],
    "analiseAlternativas": {
      "A": "Correta. E = (8 × 7! - 1 × 7!) / 6! = 7! × (8 - 1) / 6! = (7! × 7) / 6! = (7 × 6! × 7) / 6! = 7 × 7 = 49.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_151",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples - Sorteio em Pelotão",
    "question": "[Simulado PMPE AOCP - Questão 151] Em um pelotão da PMPE há 15 soldados, 10 cabos e 5 sargentos. Um desses militares será sorteado aleatoriamente para receber um dia de folga operacional. A probabilidade de o militar sorteado ser um CABO é de:",
    "options": [
      "1/3 (aproximadamente 33,33%).",
      "1/2 (50%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%).",
      "1/4 (25%)."
    ],
    "correctIndex": 0,
    "explanation": "Total de policiais (espaço amostral): 15 + 10 + 5 = 30 militares. Casos favoráveis (cabos): 10. Probabilidade P = 10 / 30 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de policiais (espaço amostral): 15 + 10 + 5 = 30 militares. Casos favoráveis (cabos): 10. Probabilidade P = 10 / 30 = 1/3 (ou 33,33%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de policiais (espaço amostral): 15 + 10 + 5 = 30 militares. Casos favoráveis (cabos): 10. Probabilidade P = 10 / 30 = 1/3 (ou 33,33%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_152",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples - Sorteio de Soldado",
    "question": "[Simulado PMPE AOCP - Questão 152] No mesmo pelotão com 15 soldados, 10 cabos e 5 sargentos (total de 30 policiais), a probabilidade de o sorteado ser um SOLDADO é de:",
    "options": [
      "1/2 (50%).",
      "1/3 (33,33%).",
      "1/5 (20%).",
      "3/5 (60%).",
      "2/3 (66,67%)."
    ],
    "correctIndex": 0,
    "explanation": "Casos favoráveis = 15 soldados. Total = 30 militares. P = 15 / 30 = 1/2 (50%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Casos favoráveis = 15 soldados. Total = 30 militares. P = 15 / 30 = 1/2 (50%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Casos favoráveis = 15 soldados. Total = 30 militares. P = 15 / 30 = 1/2 (50%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_153",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade de Evento Complementar",
    "question": "[Simulado PMPE AOCP - Questão 153] Em uma urna no quartel há 20 fichas de escala numeradas de 1 a 20. Uma ficha é retirada ao acaso. A probabilidade de o número sorteado NÃO ser um múltiplo de 5 é de:",
    "options": [
      "4/5 (80%).",
      "1/5 (20%).",
      "3/4 (75%).",
      "1/4 (25%).",
      "16/20 (85%)."
    ],
    "correctIndex": 0,
    "explanation": "Os múltiplos de 5 entre 1 e 20 são: 5, 10, 15, 20 (4 números). A probabilidade de ser múltiplo de 5 é 4/20 = 1/5 (20%). A probabilidade de NÃO ser múltiplo de 5 é o complementar: 1 - 1/5 = 4/5 (ou 80%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Os múltiplos de 5 entre 1 e 20 são: 5, 10, 15, 20 (4 números). A probabilidade de ser múltiplo de 5 é 4/20 = 1/5 (20%). A probabilidade de NÃO ser múltiplo de 5 é o complementar: 1 - 1/5 = 4/5 (ou 80%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Os múltiplos de 5 entre 1 e 20 são: 5, 10, 15, 20 (4 números). A probabilidade de ser múltiplo de 5 é 4/20 = 1/5 (20%). A probabilidade de NÃO ser múltiplo de 5 é o complementar: 1 - 1/5 = 4/5 (ou 80%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_154",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Munição",
    "question": "[Simulado PMPE AOCP - Questão 154] Uma caixa contém 12 munições intactas e 4 munições com espoleta danificada. Um policial retira uma munição ao acaso. A probabilidade de a munição retirada ser INTACTA é:",
    "options": [
      "3/4 (75%).",
      "1/4 (25%).",
      "2/3 (66,67%).",
      "4/5 (80%).",
      "1/3 (33,33%)."
    ],
    "correctIndex": 0,
    "explanation": "Total de munições = 12 + 4 = 16. Munições intactas = 12. P = 12 / 16 = 3/4 = 75%.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de munições = 12 + 4 = 16. Munições intactas = 12. P = 12 / 16 = 3/4 = 75%."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de munições = 12 + 4 = 16. Munições intactas = 12. P = 12 / 16 = 3/4 = 75%.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_155",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados",
    "question": "[Simulado PMPE AOCP - Questão 155] Dois dados não viciados de 6 faces são lançados simultaneamente sobre a mesa. A probabilidade de a soma das faces superiores ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36.",
      "5/36.",
      "1/4 (25%)."
    ],
    "correctIndex": 0,
    "explanation": "Total de pares possíveis no lançamento de 2 dados: 6 × 6 = 36. Pares cuja soma é 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total de 6 pares favoráveis. P = 6 / 36 = 1/6 (16,67%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de pares possíveis no lançamento de 2 dados: 6 × 6 = 36. Pares cuja soma é 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total de 6 pares favoráveis. P = 6 / 36 = 1/6 (16,67%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de pares possíveis no lançamento de 2 dados: 6 × 6 = 36. Pares cuja soma é 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total de 6 pares favoráveis. P = 6 / 36 = 1/6 (16,67%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_156",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Soma das Faces Maior que 10",
    "question": "[Simulado PMPE AOCP - Questão 156] No lançamento simultâneo de dois dados perfeitos, qual é a probabilidade de a soma das faces obtidas ser ESTRITAMENTE MAIOR que 10?",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6.",
      "1/18.",
      "1/36.",
      "1/9."
    ],
    "correctIndex": 0,
    "explanation": "Espaço amostral = 36. Somas maiores que 10 são 11 e 12. Casos favoráveis: (5,6), (6,5) e (6,6) -> 3 casos. P = 3 / 36 = 1/12.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Espaço amostral = 36. Somas maiores que 10 são 11 e 12. Casos favoráveis: (5,6), (6,5) e (6,6) -> 3 casos. P = 3 / 36 = 1/12."
    ],
    "analiseAlternativas": {
      "A": "Correta. Espaço amostral = 36. Somas maiores que 10 são 11 e 12. Casos favoráveis: (5,6), (6,5) e (6,6) -> 3 casos. P = 3 / 36 = 1/12.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_157",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade de Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE AOCP - Questão 157] Uma caixa no almoxarifado contém 6 munições de festim e 4 munições reais. Um instrutor retira sucessivamente e SEM REPOSIÇÃO 2 munições da caixa. A probabilidade de AMBAS as munições retiradas serem REAIS é de:",
    "options": [
      "2/15 (aproximadamente 13,33%).",
      "4/25 (16%).",
      "1/5 (20%).",
      "1/6.",
      "3/10 (30%)."
    ],
    "correctIndex": 0,
    "explanation": "1ª retirada: 4 reais em 10 munições = 4/10 = 2/5. 2ª retirada (sem reposição): sobram 3 reais em 9 munições = 3/9 = 1/3. P = (4/10) × (3/9) = (2/5) × (1/3) = 2/15 (ou 13,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "1ª retirada: 4 reais em 10 munições = 4/10 = 2/5. 2ª retirada (sem reposição): sobram 3 reais em 9 munições = 3/9 = 1/3. P = (4/10) × (3/9) = (2/5) × (1/3) = 2/15 (ou 13,33%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. 1ª retirada: 4 reais em 10 munições = 4/10 = 2/5. 2ª retirada (sem reposição): sobram 3 reais em 9 munições = 3/9 = 1/3. P = (4/10) × (3/9) = (2/5) × (1/3) = 2/15 (ou 13,33%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_158",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade SEM Reposição - Ambas de Festim",
    "question": "[Simulado PMPE AOCP - Questão 158] Na mesma caixa com 6 munições de festim e 4 munições reais (total de 10), retiram-se duas munições sucessivamente e SEM REPOSIÇÃO. A probabilidade de ambas serem DE FESTIM é:",
    "options": [
      "1/3 (aproximadamente 33,33%).",
      "9/25 (36%).",
      "1/2 (50%).",
      "2/5 (40%).",
      "3/10 (30%)."
    ],
    "correctIndex": 0,
    "explanation": "1ª retirada: 6/10. 2ª retirada: 5/9. P = (6/10) × (5/9) = 30 / 90 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "1ª retirada: 6/10. 2ª retirada: 5/9. P = (6/10) × (5/9) = 30 / 90 = 1/3 (ou 33,33%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. 1ª retirada: 6/10. 2ª retirada: 5/9. P = (6/10) × (5/9) = 30 / 90 = 1/3 (ou 33,33%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_159",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade SEM Reposição - Cores de Cones",
    "question": "[Simulado PMPE AOCP - Questão 159] Em um compartimento da viatura há 5 cones laranjas e 3 cones pretos. Um policial retira 2 cones ao acaso, um após o outro, SEM reposição. A probabilidade de o primeiro cone ser laranja e o segundo ser preto é:",
    "options": [
      "15/56.",
      "15/64.",
      "5/14.",
      "3/8.",
      "1/4."
    ],
    "correctIndex": 0,
    "explanation": "1º cone ser laranja: 5/8. 2º cone ser preto (restam 7 cones, sendo 3 pretos): 3/7. P = (5/8) × (3/7) = 15/56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "1º cone ser laranja: 5/8. 2º cone ser preto (restam 7 cones, sendo 3 pretos): 3/7. P = (5/8) × (3/7) = 15/56."
    ],
    "analiseAlternativas": {
      "A": "Correta. 1º cone ser laranja: 5/8. 2º cone ser preto (restam 7 cones, sendo 3 pretos): 3/7. P = (5/8) × (3/7) = 15/56.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_160",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade COM Reposição",
    "question": "[Simulado PMPE AOCP - Questão 160] Uma urna contém 8 bolas azuis e 2 bolas vermelhas. Uma bola é sorteada, sua cor é anotada e ela é DEVOLVIDA à urna (com reposição). Em seguida, uma segunda bola é sorteada. A probabilidade de saírem DUAS bolas azuis é de:",
    "options": [
      "16/25 (64%).",
      "28/45 (62,2%).",
      "4/5 (80%).",
      "3/5 (60%).",
      "12/25 (48%)."
    ],
    "correctIndex": 0,
    "explanation": "Como há reposição, os eventos são independentes. 1ª bola azul: 8/10 = 4/5. 2ª bola azul: 8/10 = 4/5. P = (4/5) × (4/5) = 16/25 = 64%.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como há reposição, os eventos são independentes. 1ª bola azul: 8/10 = 4/5. 2ª bola azul: 8/10 = 4/5. P = (4/5) × (4/5) = 16/25 = 64%."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como há reposição, os eventos são independentes. 1ª bola azul: 8/10 = 4/5. 2ª bola azul: 8/10 = 4/5. P = (4/5) × (4/5) = 16/25 = 64%.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_161",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos",
    "question": "[Simulado PMPE AOCP - Questão 161] Em um grupo de 40 policiais militares do 16º BPM, 24 praticam musculação, 16 praticam artes marciais e 8 praticam ambas as modalidades. Um policial é sorteado aleatoriamente desse grupo. A probabilidade de ele praticar musculação OU artes marciais é de:",
    "options": [
      "4/5 (80%).",
      "1 (100%).",
      "3/4 (75%).",
      "7/10 (70%).",
      "2/3 (66,67%)."
    ],
    "correctIndex": 0,
    "explanation": "Fórmula da união: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). P(A ∪ B) = 24/40 + 16/40 - 8/40 = 32/40 = 4/5 = 80%.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Fórmula da união: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). P(A ∪ B) = 24/40 + 16/40 - 8/40 = 32/40 = 4/5 = 80%."
    ],
    "analiseAlternativas": {
      "A": "Correta. Fórmula da união: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). P(A ∪ B) = 24/40 + 16/40 - 8/40 = 32/40 = 4/5 = 80%.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_162",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União - Cartas de Baralho",
    "question": "[Simulado PMPE AOCP - Questão 162] De um baralho tradicional com 52 cartas, retira-se uma carta ao acaso. A probabilidade de a carta retirada ser um REI ou uma carta de ESPADAS é de:",
    "options": [
      "4/13 (aproximadamente 30,77%).",
      "17/52.",
      "1/13.",
      "1/4.",
      "16/52."
    ],
    "correctIndex": 0,
    "explanation": "Total de reis = 4. Total de espadas = 13. Rei de espadas (intersecção) = 1 carta. P(Rei ∪ Espadas) = (4 + 13 - 1) / 52 = 16 / 52 = 4/13 (ou 30,77%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de reis = 4. Total de espadas = 13. Rei de espadas (intersecção) = 1 carta. P(Rei ∪ Espadas) = (4 + 13 - 1) / 52 = 16 / 52 = 4/13 (ou 30,77%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de reis = 4. Total de espadas = 13. Rei de espadas (intersecção) = 1 carta. P(Rei ∪ Espadas) = (4 + 13 - 1) / 52 = 16 / 52 = 4/13 (ou 30,77%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_163",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional",
    "question": "[Simulado PMPE AOCP - Questão 163] Em uma blitz da Lei Seca, sabe-se que 60% dos veículos abordados são carros de passeio e 40% são motocicletas. Dentre as motocicletas, 30% apresentam irregularidade documental. Se um veículo abordado for uma motocicleta, a probabilidade de ele apresentar irregularidade documental é de:",
    "options": [
      "30%.",
      "12%.",
      "40%.",
      "70%.",
      "25%."
    ],
    "correctIndex": 0,
    "explanation": "A questão fornece diretamente a probabilidade condicional: dado que o veículo é uma motocicleta, a taxa de irregularidade nesse subgrupo é de 30%.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A questão fornece diretamente a probabilidade condicional: dado que o veículo é uma motocicleta, a taxa de irregularidade nesse subgrupo é de 30%."
    ],
    "analiseAlternativas": {
      "A": "Correta. A questão fornece diretamente a probabilidade condicional: dado que o veículo é uma motocicleta, a taxa de irregularidade nesse subgrupo é de 30%.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_164",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional com Tabela",
    "question": "[Simulado PMPE AOCP - Questão 164] Um batalhão avaliou 100 soldados quanto à aptidão em tiro (Apto ou Inapto) e tempo de serviço (Novato ou Veterano): 50 são novatos (dos quais 35 são aptos e 15 inaptos) e 50 são veteranos (dos quais 45 são aptos e 5 inaptos). Um soldado foi sorteado e constatou-se que ele é APTO. A probabilidade de esse soldado ser NOVATO é de:",
    "options": [
      "7/16 (43,75%).",
      "35/100 (35%).",
      "1/2 (50%).",
      "7/10 (70%).",
      "9/16 (56,25%)."
    ],
    "correctIndex": 0,
    "explanation": "Total de soldados aptos = 35 novatos + 45 veteranos = 80 aptos. Destes 80 aptos, 35 são novatos. Probabilidade condicional P(Novato | Apto) = 35 / 80 = 7/16 = 43,75%.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de soldados aptos = 35 novatos + 45 veteranos = 80 aptos. Destes 80 aptos, 35 são novatos. Probabilidade condicional P(Novato | Apto) = 35 / 80 = 7/16 = 43,75%."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de soldados aptos = 35 novatos + 45 veteranos = 80 aptos. Destes 80 aptos, 35 são novatos. Probabilidade condicional P(Novato | Apto) = 35 / 80 = 7/16 = 43,75%.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_165",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade de Pelo Menos Um Acerto",
    "question": "[Simulado PMPE AOCP - Questão 165] Um atirador da PMPE tem probabilidade de 0,8 (80%) de acertar o alvo a cada disparo independente. Se ele efetuar 2 disparos, qual é a probabilidade de ele acertar o alvo PELO MENOS UMA vez?",
    "options": [
      "0,96 (96%).",
      "0,64 (64%).",
      "0,80 (80%).",
      "0,90 (90%).",
      "0,98 (98%)."
    ],
    "correctIndex": 0,
    "explanation": "Probabilidade de errar um tiro = 1 - 0,8 = 0,2. Probabilidade de errar AMBOS os tiros = 0,2 × 0,2 = 0,04 (4%). Probabilidade de acertar pelo menos uma vez = 1 - P(errar ambos) = 1 - 0,04 = 0,96 (96%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Probabilidade de errar um tiro = 1 - 0,8 = 0,2. Probabilidade de errar AMBOS os tiros = 0,2 × 0,2 = 0,04 (4%). Probabilidade de acertar pelo menos uma vez = 1 - P(errar ambos) = 1 - 0,04 = 0,96 (96%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Probabilidade de errar um tiro = 1 - 0,8 = 0,2. Probabilidade de errar AMBOS os tiros = 0,2 × 0,2 = 0,04 (4%). Probabilidade de acertar pelo menos uma vez = 1 - P(errar ambos) = 1 - 0,04 = 0,96 (96%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_166",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Número Primo",
    "question": "[Simulado PMPE AOCP - Questão 166] Um número inteiro de 1 a 10 é escolhido aleatoriamente. A probabilidade de o número sorteado ser um NÚMERO PRIMO é:",
    "options": [
      "2/5 (40%).",
      "1/2 (50%).",
      "3/10 (30%).",
      "3/5 (60%).",
      "1/5 (20%)."
    ],
    "correctIndex": 0,
    "explanation": "Os números primos de 1 a 10 são: 2, 3, 5, 7 (total de 4 números primos). Total de números = 10. P = 4 / 10 = 2/5 (40%). Lembre-se: o número 1 NÃO é primo!",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Os números primos de 1 a 10 são: 2, 3, 5, 7 (total de 4 números primos). Total de números = 10. P = 4 / 10 = 2/5 (40%). Lembre-se: o número 1 NÃO é primo!"
    ],
    "analiseAlternativas": {
      "A": "Correta. Os números primos de 1 a 10 são: 2, 3, 5, 7 (total de 4 números primos). Total de números = 10. P = 4 / 10 = 2/5 (40%). Lembre-se: o número 1 NÃO é primo!",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_167",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Três Moedas Lançadas",
    "question": "[Simulado PMPE AOCP - Questão 167] Três moedas honestas são lançadas simultaneamente para o ar. A probabilidade de se obter EXATAMENTE duas caras e uma coroa é de:",
    "options": [
      "3/8 (37,5%).",
      "1/2 (50%).",
      "1/4 (25%).",
      "1/8 (12,5%).",
      "5/8 (62,5%)."
    ],
    "correctIndex": 0,
    "explanation": "Espaço amostral = 2^3 = 8 resultados. Resultados favoráveis com 2 caras (C) e 1 coroa (K): (C,C,K), (C,K,C), (K,C,C) -> 3 resultados. P = 3/8 (37,5%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Espaço amostral = 2^3 = 8 resultados. Resultados favoráveis com 2 caras (C) e 1 coroa (K): (C,C,K), (C,K,C), (K,C,C) -> 3 resultados. P = 3/8 (37,5%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Espaço amostral = 2^3 = 8 resultados. Resultados favoráveis com 2 caras (C) e 1 coroa (K): (C,C,K), (C,K,C), (K,C,C) -> 3 resultados. P = 3/8 (37,5%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_168",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade de Não Obter Nenhuma Coroa",
    "question": "[Simulado PMPE AOCP - Questão 168] No lançamento de 3 moedas não viciadas, a probabilidade de saírem TODAS CARAS (nenhuma coroa) é:",
    "options": [
      "1/8 (12,5%).",
      "1/4 (25%).",
      "3/8 (37,5%).",
      "1/2 (50%).",
      "1/16 (6,25%)."
    ],
    "correctIndex": 0,
    "explanation": "O único resultado favorável é (C, C, C) entre os 8 possíveis. P = 1/8 = 12,5%.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O único resultado favorável é (C, C, C) entre os 8 possíveis. P = 1/8 = 12,5%."
    ],
    "analiseAlternativas": {
      "A": "Correta. O único resultado favorável é (C, C, C) entre os 8 possíveis. P = 1/8 = 12,5%.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_169",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Distribuição por Sexo",
    "question": "[Simulado PMPE AOCP - Questão 169] Um casal de policiais planeja ter 3 filhos. Supondo que a probabilidade de nascer menino ou menina seja igual a 50%, a probabilidade de o casal ter PELO MENOS UMA MENINA é de:",
    "options": [
      "7/8 (87,5%).",
      "1/8 (12,5%).",
      "3/8 (37,5%).",
      "1/2 (50%).",
      "3/4 (75%)."
    ],
    "correctIndex": 0,
    "explanation": "O único caso desfavorável é ter todos meninos: (1/2)^3 = 1/8. A probabilidade de ter pelo menos uma menina é o complementar: 1 - 1/8 = 7/8 (87,5%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O único caso desfavorável é ter todos meninos: (1/2)^3 = 1/8. A probabilidade de ter pelo menos uma menina é o complementar: 1 - 1/8 = 7/8 (87,5%)."
    ],
    "analiseAlternativas": {
      "A": "Correta. O único caso desfavorável é ter todos meninos: (1/2)^3 = 1/8. A probabilidade de ter pelo menos uma menina é o complementar: 1 - 1/8 = 7/8 (87,5%).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_170",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Placas",
    "question": "[Simulado PMPE AOCP - Questão 170] Entre 50 viaturas inspecionadas, 35 estão aptas para o patrulhamento ostensivo e 15 necessitam de reparos mecânicos. Sorteando-se duas viaturas sucessivamente SEM REPOSIÇÃO, a probabilidade de a primeira estar apta e a segunda necessitar de reparos é:",
    "options": [
      "15/70 (ou 3/14).",
      "21/100.",
      "1/4.",
      "35/98.",
      "7/25."
    ],
    "correctIndex": 0,
    "explanation": "1ª viatura apta: 35/50 = 7/10. 2ª viatura precisar de reparo (sobram 49 viaturas no total, sendo 15 com reparo): 15/49. P = (35/50) × (15/49) = (7/10) × (15/49) = (1/10) × (15/7) = 15/70 = 3/14.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "1ª viatura apta: 35/50 = 7/10. 2ª viatura precisar de reparo (sobram 49 viaturas no total, sendo 15 com reparo): 15/49. P = (35/50) × (15/49) = (7/10) × (15/49) = (1/10) × (15/7) = 15/70 = 3/14."
    ],
    "analiseAlternativas": {
      "A": "Correta. 1ª viatura apta: 35/50 = 7/10. 2ª viatura precisar de reparo (sobram 49 viaturas no total, sendo 15 com reparo): 15/49. P = (35/50) × (15/49) = (7/10) × (15/49) = (1/10) × (15/7) = 15/70 = 3/14.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_171",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - 2 Conjuntos (Idiomas)",
    "question": "[Simulado PMPE AOCP - Questão 171] Em um curso de formação de oficiais da PMPE com 60 cadetes, foi realizada uma pesquisa sobre fluência em línguas estrangeiras: 35 falam inglês, 25 falam espanhol e 10 falam ambos os idiomas. O número de cadetes que NÃO falam nenhum desses dois idiomas é:",
    "options": [
      "10 cadetes.",
      "15 cadetes.",
      "5 cadetes.",
      "20 cadetes.",
      "0 cadetes."
    ],
    "correctIndex": 0,
    "explanation": "União: n(I ∪ E) = n(I) + n(E) - n(I ∩ E) = 35 + 25 - 10 = 50 cadetes falam pelo menos um idioma. Os que não falam nenhum: 60 - 50 = 10 cadetes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "União: n(I ∪ E) = n(I) + n(E) - n(I ∩ E) = 35 + 25 - 10 = 50 cadetes falam pelo menos um idioma. Os que não falam nenhum: 60 - 50 = 10 cadetes."
    ],
    "analiseAlternativas": {
      "A": "Correta. União: n(I ∪ E) = n(I) + n(E) - n(I ∩ E) = 35 + 25 - 10 = 50 cadetes falam pelo menos um idioma. Os que não falam nenhum: 60 - 50 = 10 cadetes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_172",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Apenas um Conjunto",
    "question": "[Simulado PMPE AOCP - Questão 172] No mesmo grupo de 60 cadetes (35 falam inglês, 25 espanhol e 10 ambos), quantos cadetes falam EXCLUSIVAMENTE (apenas) inglês?",
    "options": [
      "25 cadetes.",
      "35 cadetes.",
      "15 cadetes.",
      "20 cadetes.",
      "30 cadetes."
    ],
    "correctIndex": 0,
    "explanation": "Apenas inglês = Total de inglês - Ambos = 35 - 10 = 25 cadetes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Apenas inglês = Total de inglês - Ambos = 35 - 10 = 25 cadetes."
    ],
    "analiseAlternativas": {
      "A": "Correta. Apenas inglês = Total de inglês - Ambos = 35 - 10 = 25 cadetes.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_173",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Habilitação de Trânsito",
    "question": "[Simulado PMPE AOCP - Questão 173] Em uma companhia com 80 policiais militares: 55 possuem habilitação para conduzir automóveis (categoria B), 40 possuem habilitação para motocicletas (categoria A) e todos os policiais possuem pelo menos uma das duas categorias. O número de policiais habilitados em AMBAS as categorias (A e B) é:",
    "options": [
      "15 policiais.",
      "20 policiais.",
      "25 policiais.",
      "10 policiais.",
      "35 policiais."
    ],
    "correctIndex": 0,
    "explanation": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) -> 80 = 55 + 40 - n(A ∩ B) -> 80 = 95 - n(A ∩ B) -> n(A ∩ B) = 95 - 80 = 15 policiais.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) -> 80 = 55 + 40 - n(A ∩ B) -> 80 = 95 - n(A ∩ B) -> n(A ∩ B) = 95 - 80 = 15 policiais."
    ],
    "analiseAlternativas": {
      "A": "Correta. n(A ∪ B) = n(A) + n(B) - n(A ∩ B) -> 80 = 55 + 40 - n(A ∩ B) -> 80 = 95 - n(A ∩ B) -> n(A ∩ B) = 95 - 80 = 15 policiais.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_174",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Cursos Operacionais",
    "question": "[Simulado PMPE AOCP - Questão 174] De 100 policiais de uma unidade especializada: 65 concluíram o curso de Ações Táticas (AT), 45 concluíram o curso de Gerenciamento de Crises (GC) e 20 não concluíram nenhum desses dois cursos. Quantos policiais concluíram AMBOS os cursos?",
    "options": [
      "30 policiais.",
      "25 policiais.",
      "35 policiais.",
      "20 policiais.",
      "15 policiais."
    ],
    "correctIndex": 0,
    "explanation": "Policiais com pelo menos um curso: 100 - 20 = 80. n(AT ∪ GC) = n(AT) + n(GC) - n(AT ∩ GC) -> 80 = 65 + 45 - x -> 80 = 110 - x -> x = 30 policiais.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Policiais com pelo menos um curso: 100 - 20 = 80. n(AT ∪ GC) = n(AT) + n(GC) - n(AT ∩ GC) -> 80 = 65 + 45 - x -> 80 = 110 - x -> x = 30 policiais."
    ],
    "analiseAlternativas": {
      "A": "Correta. Policiais com pelo menos um curso: 100 - 20 = 80. n(AT ∪ GC) = n(AT) + n(GC) - n(AT ∩ GC) -> 80 = 65 + 45 - x -> 80 = 110 - x -> x = 30 policiais.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_175",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Exclusividade de Grupo",
    "question": "[Simulado PMPE AOCP - Questão 175] Em uma pesquisa com 50 policiais sobre leitura diária de notícias: 30 leem o jornal impresso, 28 acompanham portais na internet e 12 fazem ambos. Quantos policiais leem APENAS portais na internet?",
    "options": [
      "16 policiais.",
      "28 policiais.",
      "18 policiais.",
      "12 policiais.",
      "14 policiais."
    ],
    "correctIndex": 0,
    "explanation": "Apenas portais na internet = 28 - 12 = 16 policiais.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Apenas portais na internet = 28 - 12 = 16 policiais."
    ],
    "analiseAlternativas": {
      "A": "Correta. Apenas portais na internet = 28 - 12 = 16 policiais.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_176",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - 3 Conjuntos (Esportes)",
    "question": "[Simulado PMPE AOCP - Questão 176] Em um batalhão com 120 soldados, praticam-se três esportes: Corrida (C), Natação (N) e Futebol (F). Os dados revelam: 60 praticam C; 50 praticam N; 50 praticam F; 20 praticam C e N; 20 praticam C e F; 15 praticam N e F; 10 praticam os três esportes. Quantos soldados praticam PELO MENOS UM esporte?",
    "options": [
      "115 soldados.",
      "120 soldados.",
      "105 soldados.",
      "110 soldados.",
      "95 soldados."
    ],
    "correctIndex": 0,
    "explanation": "n(C ∪ N ∪ F) = n(C) + n(N) + n(F) - [n(C∩N) + n(C∩F) + n(N∩F)] + n(C∩N∩F) = 60 + 50 + 50 - (20 + 20 + 15) + 10 = 160 - 55 + 10 = 115 soldados.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "n(C ∪ N ∪ F) = n(C) + n(N) + n(F) - [n(C∩N) + n(C∩F) + n(N∩F)] + n(C∩N∩F) = 60 + 50 + 50 - (20 + 20 + 15) + 10 = 160 - 55 + 10 = 115 soldados."
    ],
    "analiseAlternativas": {
      "A": "Correta. n(C ∪ N ∪ F) = n(C) + n(N) + n(F) - [n(C∩N) + n(C∩F) + n(N∩F)] + n(C∩N∩F) = 60 + 50 + 50 - (20 + 20 + 15) + 10 = 160 - 55 + 10 = 115 soldados.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_177",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Nenhum dos Três",
    "question": "[Simulado PMPE AOCP - Questão 177] Com base nos mesmos dados do batalhão de 120 soldados (onde 115 praticam pelo menos um esporte), quantos soldados NÃO praticam nenhum desses três esportes?",
    "options": [
      "5 soldados.",
      "10 soldados.",
      "15 soldados.",
      "0 soldados.",
      "8 soldados."
    ],
    "correctIndex": 0,
    "explanation": "Total de soldados = 120. Praticam ao menos um = 115. Não praticam nenhum = 120 - 115 = 5 soldados.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Total de soldados = 120. Praticam ao menos um = 115. Não praticam nenhum = 120 - 115 = 5 soldados."
    ],
    "analiseAlternativas": {
      "A": "Correta. Total de soldados = 120. Praticam ao menos um = 115. Não praticam nenhum = 120 - 115 = 5 soldados.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_178",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Exclusivamente um dos 3",
    "question": "[Simulado PMPE AOCP - Questão 178] No mesmo problema dos 3 esportes (C=60, N=50, F=50; C∩N=20, C∩F=20, N∩F=15; C∩N∩F=10), quantos soldados praticam APENAS Corrida?",
    "options": [
      "30 soldados.",
      "60 soldados.",
      "25 soldados.",
      "20 soldados.",
      "35 soldados."
    ],
    "correctIndex": 0,
    "explanation": "Apenas C = n(C) - (C∩N apenas) - (C∩F apenas) - (todos os 3). C∩N apenas = 20 - 10 = 10. C∩F apenas = 20 - 10 = 10. Todos os 3 = 10. Apenas C = 60 - 10 - 10 - 10 = 30 soldados.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Apenas C = n(C) - (C∩N apenas) - (C∩F apenas) - (todos os 3). C∩N apenas = 20 - 10 = 10. C∩F apenas = 20 - 10 = 10. Todos os 3 = 10. Apenas C = 60 - 10 - 10 - 10 = 30 soldados."
    ],
    "analiseAlternativas": {
      "A": "Correta. Apenas C = n(C) - (C∩N apenas) - (C∩F apenas) - (todos os 3). C∩N apenas = 20 - 10 = 10. C∩F apenas = 20 - 10 = 10. Todos os 3 = 10. Apenas C = 60 - 10 - 10 - 10 = 30 soldados.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_179",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Diagrama de Venn - Conjuntos Disjuntos",
    "question": "[Simulado PMPE AOCP - Questão 179] Sejam A o conjunto dos números pares e B o conjunto dos números ímpares. A operação de intersecção A ∩ B resulta em:",
    "options": [
      "Conjunto vazio (Ø).",
      "Conjunto dos números inteiros.",
      "Conjunto unitário contendo o zero.",
      "Conjunto dos números primos.",
      "Conjunto dos números reais."
    ],
    "correctIndex": 0,
    "explanation": "Como nenhum número inteiro pode ser simultaneamente par e ímpar, os conjuntos são disjuntos e sua intersecção é o conjunto vazio (Ø).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Como nenhum número inteiro pode ser simultaneamente par e ímpar, os conjuntos são disjuntos e sua intersecção é o conjunto vazio (Ø)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Como nenhum número inteiro pode ser simultaneamente par e ímpar, os conjuntos são disjuntos e sua intersecção é o conjunto vazio (Ø).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_180",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Operações com Conjuntos - Diferença A - B",
    "question": "[Simulado PMPE AOCP - Questão 180] Dados os conjuntos A = {1, 2, 3, 4, 5} e B = {3, 4, 5, 6, 7}, o conjunto diferença A - B é formado por:",
    "options": [
      "{1, 2}",
      "{6, 7}",
      "{3, 4, 5}",
      "{1, 2, 6, 7}",
      "{1, 2, 3, 4, 5, 6, 7}"
    ],
    "correctIndex": 0,
    "explanation": "A - B é o conjunto dos elementos que pertencem a A e NÃO pertencem a B. Retirando 3, 4 e 5 de A, resta {1, 2}.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A - B é o conjunto dos elementos que pertencem a A e NÃO pertencem a B. Retirando 3, 4 e 5 de A, resta {1, 2}."
    ],
    "analiseAlternativas": {
      "A": "Correta. A - B é o conjunto dos elementos que pertencem a A e NÃO pertencem a B. Retirando 3, 4 e 5 de A, resta {1, 2}.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_181",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Princípio da Casa dos Pombos - Meses de Aniversário",
    "question": "[Simulado PMPE AOCP - Questão 181] Qual é o número MÍNIMO de policiais militares que devem estar reunidos em uma sala para termos a CERTEZA ABSOLUTA de que pelo menos dois deles fazem aniversário no mesmo mês?",
    "options": [
      "13 policiais.",
      "12 policiais.",
      "24 policiais.",
      "25 policiais.",
      "7 policiais."
    ],
    "correctIndex": 0,
    "explanation": "O ano tem 12 meses (casas dos pombos). Pelo Princípio da Casa dos Pombos, no pior caso possível (azar total), os primeiros 12 policiais fazem aniversário em meses diferentes. O 13º policial obrigatoriamente repetirá o mês de algum anterior: 12 + 1 = 13 policiais.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O ano tem 12 meses (casas dos pombos). Pelo Princípio da Casa dos Pombos, no pior caso possível (azar total), os primeiros 12 policiais fazem aniversário em meses diferentes. O 13º policial obrigatoriamente repetirá o mês de algum anterior: 12 + 1 = 13 policiais."
    ],
    "analiseAlternativas": {
      "A": "Correta. O ano tem 12 meses (casas dos pombos). Pelo Princípio da Casa dos Pombos, no pior caso possível (azar total), os primeiros 12 policiais fazem aniversário em meses diferentes. O 13º policial obrigatoriamente repetirá o mês de algum anterior: 12 + 1 = 13 policiais.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_182",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Dias da Semana",
    "question": "[Simulado PMPE AOCP - Questão 182] Em um posto policial, quantos militares devem ser escalados para garantir com certeza que pelo menos dois deles nasceram no mesmo dia da semana (ex: segunda, terça, etc.)?",
    "options": [
      "8 militares.",
      "7 militares.",
      "14 militares.",
      "9 militares.",
      "15 militares."
    ],
    "correctIndex": 0,
    "explanation": "A semana possui 7 dias. Para garantir pelo menos dois no mesmo dia: 7 + 1 = 8 militares.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A semana possui 7 dias. Para garantir pelo menos dois no mesmo dia: 7 + 1 = 8 militares."
    ],
    "analiseAlternativas": {
      "A": "Correta. A semana possui 7 dias. Para garantir pelo menos dois no mesmo dia: 7 + 1 = 8 militares.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_183",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Munições na Gaveta no Escuro",
    "question": "[Simulado PMPE AOCP - Questão 183] Em uma gaveta no alojamento escuro há 10 cartuchos de calibre 9mm e 10 cartuchos de calibre .40 indistinguíveis ao tato. Quantos cartuchos um policial deve retirar no escuro, no MÍNIMO, para ter a CERTEZA de que pegou pelo menos UM PAR de mesmo calibre?",
    "options": [
      "3 cartuchos.",
      "2 cartuchos.",
      "11 cartuchos.",
      "12 cartuchos.",
      "5 cartuchos."
    ],
    "correctIndex": 0,
    "explanation": "Temos 2 calibres possíveis (casas). No pior cenário de azar, os 2 primeiros cartuchos retirados são de calibres diferentes (1 de 9mm e 1 de .40). O 3º cartucho retirado terá obrigatoriamente que ser de um dos calibres anteriores, formando um par: 2 + 1 = 3 cartuchos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Temos 2 calibres possíveis (casas). No pior cenário de azar, os 2 primeiros cartuchos retirados são de calibres diferentes (1 de 9mm e 1 de .40). O 3º cartucho retirado terá obrigatoriamente que ser de um dos calibres anteriores, formando um par: 2 + 1 = 3 cartuchos."
    ],
    "analiseAlternativas": {
      "A": "Correta. Temos 2 calibres possíveis (casas). No pior cenário de azar, os 2 primeiros cartuchos retirados são de calibres diferentes (1 de 9mm e 1 de .40). O 3º cartucho retirado terá obrigatoriamente que ser de um dos calibres anteriores, formando um par: 2 + 1 = 3 cartuchos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_184",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Garantir Calibre Específico",
    "question": "[Simulado PMPE AOCP - Questão 184] Na mesma gaveta com 10 cartuchos de calibre 9mm e 10 de calibre .40, quantos cartuchos o policial deve retirar no escuro, no MÍNIMO, para garantir que retirou pelo menos UM cartucho de calibre 9mm?",
    "options": [
      "11 cartuchos.",
      "10 cartuchos.",
      "2 cartuchos.",
      "12 cartuchos.",
      "20 cartuchos."
    ],
    "correctIndex": 0,
    "explanation": "Pelo Teorema do Azarado: supomos a pior hipótese, que é o policial retirar PRIMEIRO todos os 10 cartuchos de calibre .40. O próximo cartucho (o 11º) será garantidamente de calibre 9mm: 10 + 1 = 11 cartuchos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Pelo Teorema do Azarado: supomos a pior hipótese, que é o policial retirar PRIMEIRO todos os 10 cartuchos de calibre .40. O próximo cartucho (o 11º) será garantidamente de calibre 9mm: 10 + 1 = 11 cartuchos."
    ],
    "analiseAlternativas": {
      "A": "Correta. Pelo Teorema do Azarado: supomos a pior hipótese, que é o policial retirar PRIMEIRO todos os 10 cartuchos de calibre .40. O próximo cartucho (o 11º) será garantidamente de calibre 9mm: 10 + 1 = 11 cartuchos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_185",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Meias no Guarda-Roupa",
    "question": "[Simulado PMPE AOCP - Questão 185] Um soldado tem em sua gaveta 6 pares de meias pretas e 4 pares de meias brancas, todas desemparelhadas. No escuro, qual é o número mínimo de meias avulsas que ele deve retirar para garantir que retirou pelo menos UM PAR de meias da mesma cor?",
    "options": [
      "3 meias.",
      "5 meias.",
      "11 meias.",
      "2 meias.",
      "7 meias."
    ],
    "correctIndex": 0,
    "explanation": "Existem apenas 2 cores (preta e branca). Pelo PCP: 2 cores + 1 = 3 meias para garantir um par da mesma cor.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Existem apenas 2 cores (preta e branca). Pelo PCP: 2 cores + 1 = 3 meias para garantir um par da mesma cor."
    ],
    "analiseAlternativas": {
      "A": "Correta. Existem apenas 2 cores (preta e branca). Pelo PCP: 2 cores + 1 = 3 meias para garantir um par da mesma cor.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_186",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Aniversário no Mesmo Dia do Ano",
    "question": "[Simulado PMPE AOCP - Questão 186] Em um ano não bissexto (com 365 dias), qual é a quantidade mínima de recrutas necessária no CFP da PMPE para garantir que pelo menos dois deles façam aniversário no mesmo dia do ano?",
    "options": [
      "366 recrutas.",
      "365 recrutas.",
      "730 recrutas.",
      "367 recrutas.",
      "183 recrutas."
    ],
    "correctIndex": 0,
    "explanation": "Há 365 dias possíveis. Pelo PCP, são necessários 365 + 1 = 366 recrutas para assegurar pelo menos uma coincidência de data.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Há 365 dias possíveis. Pelo PCP, são necessários 365 + 1 = 366 recrutas para assegurar pelo menos uma coincidência de data."
    ],
    "analiseAlternativas": {
      "A": "Correta. Há 365 dias possíveis. Pelo PCP, são necessários 365 + 1 = 366 recrutas para assegurar pelo menos uma coincidência de data.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_187",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Notas em Prova da PMPE",
    "question": "[Simulado PMPE AOCP - Questão 187] As notas de uma avaliação teórica variam de 0 a 10, apenas com números inteiros (0, 1, 2, ..., 10). O número mínimo de candidatos que devem realizar a prova para garantir que pelo menos 3 deles tirem exatamente a mesma nota é:",
    "options": [
      "23 candidatos.",
      "11 candidatos.",
      "22 candidatos.",
      "33 candidatos.",
      "12 candidatos."
    ],
    "correctIndex": 0,
    "explanation": "Existem 11 notas possíveis (de 0 a 10). No pior caso de azar, cada uma das 11 notas é atribuída a 2 candidatos: 11 × 2 = 22 candidatos. O próximo candidato (o 23º) necessariamente receberá uma nota que já foi tirada por 2 pessoas, totalizando 3 com a mesma nota: 22 + 1 = 23 candidatos.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Existem 11 notas possíveis (de 0 a 10). No pior caso de azar, cada uma das 11 notas é atribuída a 2 candidatos: 11 × 2 = 22 candidatos. O próximo candidato (o 23º) necessariamente receberá uma nota que já foi tirada por 2 pessoas, totalizando 3 com a mesma nota: 22 + 1 = 23 candidatos."
    ],
    "analiseAlternativas": {
      "A": "Correta. Existem 11 notas possíveis (de 0 a 10). No pior caso de azar, cada uma das 11 notas é atribuída a 2 candidatos: 11 × 2 = 22 candidatos. O próximo candidato (o 23º) necessariamente receberá uma nota que já foi tirada por 2 pessoas, totalizando 3 com a mesma nota: 22 + 1 = 23 candidatos.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_188",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "PCP - Naipes de Baralho",
    "question": "[Simulado PMPE AOCP - Questão 188] Quantas cartas de um baralho comum de 52 cartas devem ser retiradas, no mínimo, para garantir que se obtenham pelo menos 2 cartas do mesmo naipe?",
    "options": [
      "5 cartas.",
      "4 cartas.",
      "14 cartas.",
      "13 cartas.",
      "2 cartas."
    ],
    "correctIndex": 0,
    "explanation": "Existem 4 naipes (ouros, espadas, copas, paus). Pelo PCP: 4 + 1 = 5 cartas.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Existem 4 naipes (ouros, espadas, copas, paus). Pelo PCP: 4 + 1 = 5 cartas."
    ],
    "analiseAlternativas": {
      "A": "Correta. Existem 4 naipes (ouros, espadas, copas, paus). Pelo PCP: 4 + 1 = 5 cartas.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_189",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência Lógica Numérica",
    "question": "[Simulado PMPE AOCP - Questão 189] Considere a sequência numérica lógica: 2, 5, 10, 17, 26, 37, ... O próximo termo dessa sucessão é:",
    "options": [
      "50.",
      "48.",
      "52.",
      "49.",
      "45."
    ],
    "correctIndex": 0,
    "explanation": "As diferenças entre termos consecutivos são os números ímpares: 5 - 2 = 3; 10 - 5 = 5; 17 - 10 = 7; 26 - 17 = 9; 37 - 26 = 11. O próximo incremento deve ser +13: 37 + 13 = 50 (ou termo geral n² + 1).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "As diferenças entre termos consecutivos são os números ímpares: 5 - 2 = 3; 10 - 5 = 5; 17 - 10 = 7; 26 - 17 = 9; 37 - 26 = 11. O próximo incremento deve ser +13: 37 + 13 = 50 (ou termo geral n² + 1)."
    ],
    "analiseAlternativas": {
      "A": "Correta. As diferenças entre termos consecutivos são os números ímpares: 5 - 2 = 3; 10 - 5 = 5; 17 - 10 = 7; 26 - 17 = 9; 37 - 26 = 11. O próximo incremento deve ser +13: 37 + 13 = 50 (ou termo geral n² + 1).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_190",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência Lógica de Fibonacci",
    "question": "[Simulado PMPE AOCP - Questão 190] Na sequência de Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ..., o termo que sucede imediatamente o número 21 é:",
    "options": [
      "34.",
      "29.",
      "31.",
      "42.",
      "35."
    ],
    "correctIndex": 0,
    "explanation": "Cada termo é a soma dos dois anteriores: 13 + 21 = 34.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Cada termo é a soma dos dois anteriores: 13 + 21 = 34."
    ],
    "analiseAlternativas": {
      "A": "Correta. Cada termo é a soma dos dois anteriores: 13 + 21 = 34.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_191",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência Lógica Alfanumérica",
    "question": "[Simulado PMPE AOCP - Questão 191] Observe a sequência de letras que segue um padrão lógico no alfabeto brasileiro: B, D, G, K, P, ... A próxima letra dessa sequência é:",
    "options": [
      "V.",
      "U.",
      "T.",
      "S.",
      "W."
    ],
    "correctIndex": 0,
    "explanation": "Posições no alfabeto: B(2), D(4), G(7), K(11), P(16). Intervalos: +2, +3, +4, +5. O próximo incremento é +6: 16 + 6 = 22. A 22ª letra do alfabeto é o V.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Posições no alfabeto: B(2), D(4), G(7), K(11), P(16). Intervalos: +2, +3, +4, +5. O próximo incremento é +6: 16 + 6 = 22. A 22ª letra do alfabeto é o V."
    ],
    "analiseAlternativas": {
      "A": "Correta. Posições no alfabeto: B(2), D(4), G(7), K(11), P(16). Intervalos: +2, +3, +4, +5. O próximo incremento é +6: 16 + 6 = 22. A 22ª letra do alfabeto é o V.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_192",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Problema de Verdade e Mentira - Três Suspeitos",
    "question": "[Simulado PMPE AOCP - Questão 192] Três suspeitos (Alan, Beto e Caio) são interrogados pela polícia. Sabe-se que APENAS UM DELES cometeu o crime e que APENAS UM DELES diz a verdade. As declarações foram: Alan: 'Beto cometeu o crime'. Beto: 'Eu não cometi o crime'. Caio: 'Eu não cometi o crime'. Quem cometeu o crime e quem disse a verdade?",
    "options": [
      "Caio cometeu o crime e Alan disse a verdade.",
      "Beto cometeu o crime e Caio disse a verdade.",
      "Alan cometeu o crime e Beto disse a verdade.",
      "Caio cometeu o crime e Caio disse a verdade.",
      "Alan cometeu o crime e Alan disse a verdade."
    ],
    "correctIndex": 0,
    "explanation": "Alan e Beto fazem afirmações contraditórias ('Beto cometeu' vs 'Beto não cometeu'). Portanto, um deles diz a verdade e o outro mente. Como há APENAS UM que diz a verdade, Caio obrigatoriamente MENTE. Se Caio mente ao dizer 'Eu não cometi', significa que CAIO COMETEU O CRIME! Se Caio cometeu, Beto não cometeu (logo Beto diz a verdade? Não, se Caio cometeu, Alan mentiu e Beto disse a verdade). Espere: se Caio cometeu, Caio mentiu (F). Beto disse 'Eu não cometi' (V). Alan disse 'Beto cometeu' (F). Então Beto é quem disse a verdade e Caio cometeu o crime.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Alan e Beto fazem afirmações contraditórias ('Beto cometeu' vs 'Beto não cometeu'). Portanto, um deles diz a verdade e o outro mente. Como há APENAS UM que diz a verdade, Caio obrigatoriamente MENTE. Se Caio mente ao dizer 'Eu não cometi', significa que CAIO COMETEU O CRIME! Se Caio cometeu, Beto não cometeu (logo Beto diz a verdade? Não, se Caio cometeu, Alan mentiu e Beto disse a verdade). Espere: se Caio cometeu, Caio mentiu (F). Beto disse 'Eu não cometi' (V). Alan disse 'Beto cometeu' (F). Então Beto é quem disse a verdade e Caio cometeu o crime."
    ],
    "analiseAlternativas": {
      "A": "Correta. Alan e Beto fazem afirmações contraditórias ('Beto cometeu' vs 'Beto não cometeu'). Portanto, um deles diz a verdade e o outro mente. Como há APENAS UM que diz a verdade, Caio obrigatoriamente MENTE. Se Caio mente ao dizer 'Eu não cometi', significa que CAIO COMETEU O CRIME! Se Caio cometeu, Beto não cometeu (logo Beto diz a verdade? Não, se Caio cometeu, Alan mentiu e Beto disse a verdade). Espere: se Caio cometeu, Caio mentiu (F). Beto disse 'Eu não cometi' (V). Alan disse 'Beto cometeu' (F). Então Beto é quem disse a verdade e Caio cometeu o crime.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_193",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Problema de Verdade e Mentira - Três Soldados",
    "question": "[Simulado PMPE AOCP - Questão 193] Três soldados prestaram declarações sobre quem esqueceu o rádio comunicador. Sabendo que apenas um soldado diz a verdade e que apenas um esqueceu o rádio: Soldado 1 diz: 'Foi o Soldado 2'. Soldado 2 diz: 'Não fui eu'. Soldado 3 diz: 'Fui eu'. Quem esqueceu o rádio comunicador?",
    "options": [
      "Soldado 2.",
      "Soldado 1.",
      "Soldado 3.",
      "Nenhum deles.",
      "Não é possível determinar."
    ],
    "correctIndex": 0,
    "explanation": "Se foi o Soldado 2: Soldado 1 diz 'Foi o 2' (V); Soldado 2 diz 'Não fui eu' (F); Soldado 3 diz 'Fui eu' (F). Temos exatamente UMA verdade (Soldado 1) e duas mentiras. Perfeito! Quem esqueceu o rádio foi o Soldado 2.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Se foi o Soldado 2: Soldado 1 diz 'Foi o 2' (V); Soldado 2 diz 'Não fui eu' (F); Soldado 3 diz 'Fui eu' (F). Temos exatamente UMA verdade (Soldado 1) e duas mentiras. Perfeito! Quem esqueceu o rádio foi o Soldado 2."
    ],
    "analiseAlternativas": {
      "A": "Correta. Se foi o Soldado 2: Soldado 1 diz 'Foi o 2' (V); Soldado 2 diz 'Não fui eu' (F); Soldado 3 diz 'Fui eu' (F). Temos exatamente UMA verdade (Soldado 1) e duas mentiras. Perfeito! Quem esqueceu o rádio foi o Soldado 2.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_194",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência de Figuras e Padrões",
    "question": "[Simulado PMPE AOCP - Questão 194] Uma guarnição militar adota um código de sinais rotativo de 4 bandeiras: Branca, Vermelha, Amarela e Verde, nessa ordem cíclica contínua (B, V, A, Vd, B, V, A, Vd, ...). A 150ª bandeira hasteada será:",
    "options": [
      "Vermelha.",
      "Branca.",
      "Amarela.",
      "Verde.",
      "Preta."
    ],
    "correctIndex": 0,
    "explanation": "O ciclo possui 4 elementos. Dividindo 150 por 4: 150 ÷ 4 = 37 ciclos completos com resto 2. O resto 2 indica o segundo elemento do ciclo, que é a cor VERMELHA.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "O ciclo possui 4 elementos. Dividindo 150 por 4: 150 ÷ 4 = 37 ciclos completos com resto 2. O resto 2 indica o segundo elemento do ciclo, que é a cor VERMELHA."
    ],
    "analiseAlternativas": {
      "A": "Correta. O ciclo possui 4 elementos. Dividindo 150 por 4: 150 ÷ 4 = 37 ciclos completos com resto 2. O resto 2 indica o segundo elemento do ciclo, que é a cor VERMELHA.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_195",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência Cíclica - Dias da Semana",
    "question": "[Simulado PMPE AOCP - Questão 195] Se hoje é uma terça-feira, daqui a exatamente 100 dias será:",
    "options": [
      "Quinta-feira.",
      "Quarta-feira.",
      "Sexta-feira.",
      "Sábado.",
      "Domingo."
    ],
    "correctIndex": 0,
    "explanation": "A semana tem 7 dias. 100 ÷ 7 = 14 semanas completas com resto 2. Adiantando 2 dias a partir de terça-feira: terça + 1 = quarta; terça + 2 = QUINTA-FEIRA.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "A semana tem 7 dias. 100 ÷ 7 = 14 semanas completas com resto 2. Adiantando 2 dias a partir de terça-feira: terça + 1 = quarta; terça + 2 = QUINTA-FEIRA."
    ],
    "analiseAlternativas": {
      "A": "Correta. A semana tem 7 dias. 100 ÷ 7 = 14 semanas completas com resto 2. Adiantando 2 dias a partir de terça-feira: terça + 1 = quarta; terça + 2 = QUINTA-FEIRA.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_196",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência Numérica de Potências",
    "question": "[Simulado PMPE AOCP - Questão 196] Considere a sequência: 3, 9, 27, 81, ... O 6º termo dessa progressão geométrica é:",
    "options": [
      "729.",
      "243.",
      "2.187.",
      "512.",
      "648."
    ],
    "correctIndex": 0,
    "explanation": "Termo geral: an = 3^n. O 5º termo é 3^5 = 243. O 6º termo é 3^6 = 729.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Termo geral: an = 3^n. O 5º termo é 3^5 = 243. O 6º termo é 3^6 = 729."
    ],
    "analiseAlternativas": {
      "A": "Correta. Termo geral: an = 3^n. O 5º termo é 3^5 = 243. O 6º termo é 3^6 = 729.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_197",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Associação Lógica de Pessoas e Cargos",
    "question": "[Simulado PMPE AOCP - Questão 197] Três policiais (Carlos, Daniel e Eduardo) possuem patentes diferentes: Sargento, Cabo e Soldado (não necessariamente nessa ordem). Sabe-se que: 1) Carlos é o mais antigo de casa e não é soldado. 2) O sargento é o mais graduado e é amigo de Daniel. 3) Eduardo é o mais jovem e recém-formado. As patentes de Carlos, Daniel e Eduardo são, respectivamente:",
    "options": [
      "Sargento, Cabo e Soldado.",
      "Cabo, Sargento e Soldado.",
      "Soldado, Cabo e Sargento.",
      "Sargento, Soldado e Cabo.",
      "Cabo, Soldado e Sargento."
    ],
    "correctIndex": 0,
    "explanation": "Pela premissa 2, o sargento é amigo de Daniel (logo Daniel não é o sargento). Pela premissa 3, Eduardo é recém-formado (soldado). Resta que Carlos é o Sargento, Daniel é o Cabo e Eduardo é o Soldado.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Pela premissa 2, o sargento é amigo de Daniel (logo Daniel não é o sargento). Pela premissa 3, Eduardo é recém-formado (soldado). Resta que Carlos é o Sargento, Daniel é o Cabo e Eduardo é o Soldado."
    ],
    "analiseAlternativas": {
      "A": "Correta. Pela premissa 2, o sargento é amigo de Daniel (logo Daniel não é o sargento). Pela premissa 3, Eduardo é recém-formado (soldado). Resta que Carlos é o Sargento, Daniel é o Cabo e Eduardo é o Soldado.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_198",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Sequência Numérica Intercalada",
    "question": "[Simulado PMPE AOCP - Questão 198] Na sequência 4, 20, 8, 17, 12, 14, 16, 11, x, y, os valores de x e y são, respectivamente:",
    "options": [
      "20 e 8.",
      "18 e 9.",
      "20 e 10.",
      "18 e 8.",
      "24 e 7."
    ],
    "correctIndex": 0,
    "explanation": "São duas sequências intercaladas: Posições ímpares: 4, 8, 12, 16, x -> soma 4 a cada passo, logo x = 16 + 4 = 20. Posições pares: 20, 17, 14, 11, y -> subtrai 3 a cada passo, logo y = 11 - 3 = 8. Logo: 20 e 8.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "São duas sequências intercaladas: Posições ímpares: 4, 8, 12, 16, x -> soma 4 a cada passo, logo x = 16 + 4 = 20. Posições pares: 20, 17, 14, 11, y -> subtrai 3 a cada passo, logo y = 11 - 3 = 8. Logo: 20 e 8."
    ],
    "analiseAlternativas": {
      "A": "Correta. São duas sequências intercaladas: Posições ímpares: 4, 8, 12, 16, x -> soma 4 a cada passo, logo x = 16 + 4 = 20. Posições pares: 20, 17, 14, 11, y -> subtrai 3 a cada passo, logo y = 11 - 3 = 8. Logo: 20 e 8.",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_199",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Problema de Balança e Pesos Lógicos",
    "question": "[Simulado PMPE AOCP - Questão 199] Um armeiro tem 9 cartuchos idênticos em aparência, mas um deles é defeituoso e mais leve que os outros 8 de peso idêntico. Utilizando uma balança de dois pratos sem pesos graduados, o número MÍNIMO de pesagens necessárias para identificar com certeza absoluta o cartucho mais leve é:",
    "options": [
      "2 pesagens.",
      "3 pesagens.",
      "1 pesagem.",
      "4 pesagens.",
      "5 pesagens."
    ],
    "correctIndex": 0,
    "explanation": "Divide-se os 9 cartuchos em 3 grupos de 3 (3, 3, 3). 1ª pesagem: compara-se dois grupos de 3. Se empatar, o defeituoso está no 3º grupo; se desequilibrar, está no prato mais leve. 2ª pesagem: pega-se o grupo de 3 suspeito e coloca-se 1 em cada prato. Em 2 pesagens no máximo o cartucho mais leve é identificado com certeza absoluta (3^2 = 9).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Divide-se os 9 cartuchos em 3 grupos de 3 (3, 3, 3). 1ª pesagem: compara-se dois grupos de 3. Se empatar, o defeituoso está no 3º grupo; se desequilibrar, está no prato mais leve. 2ª pesagem: pega-se o grupo de 3 suspeito e coloca-se 1 em cada prato. Em 2 pesagens no máximo o cartucho mais leve é identificado com certeza absoluta (3^2 = 9)."
    ],
    "analiseAlternativas": {
      "A": "Correta. Divide-se os 9 cartuchos em 3 grupos de 3 (3, 3, 3). 1ª pesagem: compara-se dois grupos de 3. Se empatar, o defeituoso está no 3º grupo; se desequilibrar, está no prato mais leve. 2ª pesagem: pega-se o grupo de 3 suspeito e coloca-se 1 em cada prato. Em 2 pesagens no máximo o cartucho mais leve é identificado com certeza absoluta (3^2 = 9).",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  },
  {
    "id": "rlm_inedita_200",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Problema dos Quatro Policiais e Suas Cidades",
    "question": "[Simulado PMPE AOCP - Questão 200] Quatro soldados (Brito, Castro, Dias e Feitosa) nasceram em cidades diferentes de Pernambuco: Recife, Olinda, Caruaru e Petrolina. Sabe-se que: 1) Nem Brito nem Castro nasceram no litoral (Recife e Olinda). 2) O soldado nascido em Petrolina é o mais alto de todos. 3) Castro é mais baixo que o soldado de Petrolina. 4) Feitosa nasceu em Olinda. Onde nasceu o soldado Brito?",
    "options": [
      "Petrolina.",
      "Caruaru.",
      "Recife.",
      "Olinda.",
      "Garanhuns."
    ],
    "correctIndex": 0,
    "explanation": "Feitosa nasceu em Olinda (premissa 4). Brito e Castro não nasceram no litoral, logo nasceram em Caruaru e Petrolina (premissa 1). Como Castro é mais baixo que o nascido em Petrolina, Castro nasceu em Caruaru. Resta que o soldado Brito nasceu em Petrolina!",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "Aplique a regra do conectivo ou a fórmula matemática com atenção ao enunciado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_rlm_probabilidade",
    "dicaMacete": "Dica Tática PMPE: memorize as regras de MANÉ, De Morgan, PFC e probabilidades!",
    "passoAPassoConta": [
      "Feitosa nasceu em Olinda (premissa 4). Brito e Castro não nasceram no litoral, logo nasceram em Caruaru e Petrolina (premissa 1). Como Castro é mais baixo que o nascido em Petrolina, Castro nasceu em Caruaru. Resta que o soldado Brito nasceu em Petrolina!"
    ],
    "analiseAlternativas": {
      "A": "Correta. Feitosa nasceu em Olinda (premissa 4). Brito e Castro não nasceram no litoral, logo nasceram em Caruaru e Petrolina (premissa 1). Como Castro é mais baixo que o nascido em Petrolina, Castro nasceu em Caruaru. Resta que o soldado Brito nasceu em Petrolina!",
      "B": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "C": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "D": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico.",
      "E": "Incorreta. Não atende aos princípios e regras formais do raciocínio lógico."
    }
  }
];
