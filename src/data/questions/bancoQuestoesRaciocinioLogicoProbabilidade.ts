import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: RACIOCÍNIO LÓGICO & PROBABILIDADE PMPE 2026 (INSTITUTO AOCP)
 * Total: 250 Questões com passo a passo de cálculo, fórmulas de probabilidade e macetes MANÉ
 */
export const BANCO_RACIOCINIO_PROBABILIDADE: QuizQuestion[] = [
  {
    "id": "rlm_prob_001",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 001] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%).",
      "1/3 (aproximadamente 33,33%)."
    ],
    "correctIndex": 4,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "3": "Você marcou a alternativa (D): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais.",
      "E": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%)."
    }
  },
  {
    "id": "rlm_prob_002",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 002] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "2/15 (aproximadamente 13,33%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 2,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_003",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 003] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "90% (9/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 2,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_004",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 004] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_005",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 005] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_006",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 006] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_007",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 007] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "120 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_008",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 008] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 4,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "3": "Você marcou a alternativa (D): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ.",
      "E": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'."
    }
  },
  {
    "id": "rlm_prob_009",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 009] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_010",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 010] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_011",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 011] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "1/3 (aproximadamente 33,33%).",
      "2/5 (40%)."
    ],
    "correctIndex": 3,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_012",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 012] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_013",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 013] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "90% (9/10).",
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 0,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "B": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_014",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 014] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_015",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 015] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "2/3 (aproximadamente 66,67%).",
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 0,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "B": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_016",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 016] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_017",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 017] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_018",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 018] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 1,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_019",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 019] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_020",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 020] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_021",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 021] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 2,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_022",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 022] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_023",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 023] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "90% (9/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_024",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 024] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_025",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 025] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "2/3 (aproximadamente 66,67%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 1,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_026",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 026] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas.",
      "56 maneiras distintas."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "3": "Você marcou a alternativa (D): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Incorreta. 48 é 8 * 6, sem base combinatória.",
      "E": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56."
    }
  },
  {
    "id": "rlm_prob_027",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 027] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes.",
      "120 maneiras diferentes."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "3": "Você marcou a alternativa (D): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720).",
      "E": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras."
    }
  },
  {
    "id": "rlm_prob_028",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 028] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_029",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 029] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 1,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_030",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 030] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_031",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 031] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%).",
      "1/3 (aproximadamente 33,33%)."
    ],
    "correctIndex": 4,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "3": "Você marcou a alternativa (D): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais.",
      "E": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%)."
    }
  },
  {
    "id": "rlm_prob_032",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 032] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "2/15 (aproximadamente 13,33%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 1,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_033",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 033] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "90% (9/10).",
      "60% (3/5)."
    ],
    "correctIndex": 3,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_034",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 034] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_035",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 035] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "2/3 (aproximadamente 66,67%).",
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 0,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "B": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_036",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 036] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "56 maneiras distintas.",
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "B": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_037",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 037] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_038",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 038] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_039",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 039] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 2,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_040",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 040] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_041",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 041] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "1/3 (aproximadamente 33,33%).",
      "2/5 (40%)."
    ],
    "correctIndex": 3,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_042",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 042] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "2/15 (aproximadamente 13,33%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 2,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_043",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 043] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "90% (9/10).",
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 0,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "B": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_044",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 044] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_045",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 045] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "2/3 (aproximadamente 66,67%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 2,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_046",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 046] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_047",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 047] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_048",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 048] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_049",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 049] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 2,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_050",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 050] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_051",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 051] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "1/3 (aproximadamente 33,33%).",
      "2/5 (40%)."
    ],
    "correctIndex": 3,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_052",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 052] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "2/15 (aproximadamente 13,33%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 1,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_053",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 053] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "90% (9/10).",
      "60% (3/5)."
    ],
    "correctIndex": 3,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_054",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 054] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_055",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 055] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "2/3 (aproximadamente 66,67%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 1,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_056",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 056] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_057",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 057] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "120 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_058",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 058] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_059",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 059] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_060",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 060] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_061",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 061] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%).",
      "1/3 (aproximadamente 33,33%)."
    ],
    "correctIndex": 4,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "3": "Você marcou a alternativa (D): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais.",
      "E": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%)."
    }
  },
  {
    "id": "rlm_prob_062",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 062] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "2/15 (aproximadamente 13,33%).",
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 0,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "B": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_063",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 063] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5).",
      "90% (9/10)."
    ],
    "correctIndex": 4,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "3": "Você marcou a alternativa (D): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Incorreta. 60% considera apenas quem estuda Direito Constitucional.",
      "E": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes."
    }
  },
  {
    "id": "rlm_prob_064",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 064] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 0,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "B": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_065",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 065] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%).",
      "2/3 (aproximadamente 66,67%)."
    ],
    "correctIndex": 4,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "3": "Você marcou a alternativa (D): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares.",
      "E": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3."
    }
  },
  {
    "id": "rlm_prob_066",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 066] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_067",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 067] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "120 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_068",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 068] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_069",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 069] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 1,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_070",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 070] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_071",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 071] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_072",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 072] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "2/15 (aproximadamente 13,33%).",
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 0,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "B": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_073",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 073] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "90% (9/10).",
      "60% (3/5)."
    ],
    "correctIndex": 3,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_074",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 074] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_075",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 075] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_076",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 076] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_077",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 077] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "120 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_078",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 078] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_079",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 079] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 1,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_080",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 080] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "B": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_081",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 081] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_082",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 082] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "2/15 (aproximadamente 13,33%).",
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 0,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "B": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_083",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 083] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "90% (9/10).",
      "60% (3/5)."
    ],
    "correctIndex": 3,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_084",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 084] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_085",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 085] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_086",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 086] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_087",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 087] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "120 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_088",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 088] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 4,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "3": "Você marcou a alternativa (D): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ.",
      "E": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'."
    }
  },
  {
    "id": "rlm_prob_089",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 089] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 3,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_090",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 090] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_091",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 091] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_092",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 092] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_093",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 093] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "90% (9/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_094",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 094] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/6 (aproximadamente 16,67%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 2,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_095",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 095] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "2/3 (aproximadamente 66,67%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 1,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_096",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 096] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_097",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 097] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes.",
      "120 maneiras diferentes."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "3": "Você marcou a alternativa (D): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720).",
      "E": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras."
    }
  },
  {
    "id": "rlm_prob_098",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 098] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_099",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 099] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 2,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_100",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 100] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_101",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 101] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 2,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_102",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 102] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "2/15 (aproximadamente 13,33%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 1,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_103",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 103] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "90% (9/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 2,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_104",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 104] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_105",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 105] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_106",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 106] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "56 maneiras distintas.",
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "B": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_107",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 107] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "120 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_108",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 108] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_109",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 109] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_110",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 110] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_111",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 111] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%).",
      "1/3 (aproximadamente 33,33%)."
    ],
    "correctIndex": 4,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "3": "Você marcou a alternativa (D): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais.",
      "E": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%)."
    }
  },
  {
    "id": "rlm_prob_112",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 112] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "2/15 (aproximadamente 13,33%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 1,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_113",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 113] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5).",
      "90% (9/10)."
    ],
    "correctIndex": 4,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "3": "Você marcou a alternativa (D): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Incorreta. 60% considera apenas quem estuda Direito Constitucional.",
      "E": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes."
    }
  },
  {
    "id": "rlm_prob_114",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 114] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/6 (aproximadamente 16,67%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 2,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_115",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 115] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_116",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 116] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_117",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 117] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "120 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_118",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 118] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 4,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "3": "Você marcou a alternativa (D): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ.",
      "E": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'."
    }
  },
  {
    "id": "rlm_prob_119",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 119] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_120",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 120] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_121",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 121] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/3 (aproximadamente 33,33%).",
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 0,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "B": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_122",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 122] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%).",
      "2/15 (aproximadamente 13,33%)."
    ],
    "correctIndex": 4,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "3": "Você marcou a alternativa (D): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Incorreta. 3/20 corresponderia a outro produto de probabilidades.",
      "E": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15."
    }
  },
  {
    "id": "rlm_prob_123",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 123] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "90% (9/10).",
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 0,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "B": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_124",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 124] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_125",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 125] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%).",
      "2/3 (aproximadamente 66,67%)."
    ],
    "correctIndex": 4,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "3": "Você marcou a alternativa (D): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares.",
      "E": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3."
    }
  },
  {
    "id": "rlm_prob_126",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 126] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_127",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 127] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "120 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_128",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 128] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 1,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_129",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 129] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_130",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 130] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_131",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 131] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 2,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_132",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 132] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%).",
      "2/15 (aproximadamente 13,33%)."
    ],
    "correctIndex": 4,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "3": "Você marcou a alternativa (D): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Incorreta. 3/20 corresponderia a outro produto de probabilidades.",
      "E": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15."
    }
  },
  {
    "id": "rlm_prob_133",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 133] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5).",
      "90% (9/10)."
    ],
    "correctIndex": 4,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "3": "Você marcou a alternativa (D): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Incorreta. 60% considera apenas quem estuda Direito Constitucional.",
      "E": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes."
    }
  },
  {
    "id": "rlm_prob_134",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 134] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_135",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 135] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_136",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 136] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_137",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 137] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "120 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_138",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 138] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_139",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 139] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 2,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_140",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 140] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_141",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 141] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_142",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 142] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "2/15 (aproximadamente 13,33%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 1,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_143",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 143] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "90% (9/10).",
      "60% (3/5)."
    ],
    "correctIndex": 3,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_144",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 144] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_145",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 145] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%).",
      "2/3 (aproximadamente 66,67%)."
    ],
    "correctIndex": 4,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "3": "Você marcou a alternativa (D): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares.",
      "E": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3."
    }
  },
  {
    "id": "rlm_prob_146",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 146] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_147",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 147] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "120 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_148",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 148] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_149",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 149] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_150",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 150] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 0,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "B": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_151",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 151] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/3 (aproximadamente 33,33%).",
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 0,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "B": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_152",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 152] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%).",
      "2/15 (aproximadamente 13,33%)."
    ],
    "correctIndex": 4,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "3": "Você marcou a alternativa (D): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Incorreta. 3/20 corresponderia a outro produto de probabilidades.",
      "E": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15."
    }
  },
  {
    "id": "rlm_prob_153",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 153] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "90% (9/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_154",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 154] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_155",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 155] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "2/3 (aproximadamente 66,67%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 1,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_156",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 156] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_157",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 157] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_158",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 158] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 4,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "3": "Você marcou a alternativa (D): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ.",
      "E": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'."
    }
  },
  {
    "id": "rlm_prob_159",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 159] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_160",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 160] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_161",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 161] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "1/3 (aproximadamente 33,33%).",
      "2/5 (40%)."
    ],
    "correctIndex": 3,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_162",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 162] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_163",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 163] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "90% (9/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_164",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 164] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%).",
      "1/6 (aproximadamente 16,67%)."
    ],
    "correctIndex": 4,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "3": "Você marcou a alternativa (D): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos.",
      "E": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6."
    }
  },
  {
    "id": "rlm_prob_165",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 165] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "2/3 (aproximadamente 66,67%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 1,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_166",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 166] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas.",
      "56 maneiras distintas."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "3": "Você marcou a alternativa (D): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Incorreta. 48 é 8 * 6, sem base combinatória.",
      "E": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56."
    }
  },
  {
    "id": "rlm_prob_167",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 167] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_168",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 168] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_169",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 169] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_170",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 170] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_171",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 171] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "1/3 (aproximadamente 33,33%).",
      "2/5 (40%)."
    ],
    "correctIndex": 3,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_172",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 172] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_173",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 173] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "90% (9/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_174",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 174] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 0,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "B": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_175",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 175] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "2/3 (aproximadamente 66,67%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 2,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_176",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 176] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_177",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 177] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_178",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 178] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "B": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_179",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 179] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 3,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_180",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 180] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_181",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 181] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_182",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 182] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "2/15 (aproximadamente 13,33%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 2,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_183",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 183] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "90% (9/10).",
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 0,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "B": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_184",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 184] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 0,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "B": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_185",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 185] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "2/3 (aproximadamente 66,67%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 2,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_186",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 186] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_187",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 187] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes.",
      "120 maneiras diferentes."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "3": "Você marcou a alternativa (D): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720).",
      "E": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras."
    }
  },
  {
    "id": "rlm_prob_188",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 188] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 1,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_189",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 189] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_190",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 190] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_191",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 191] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_192",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 192] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_193",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 193] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "90% (9/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 2,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_194",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 194] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_195",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 195] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%).",
      "2/3 (aproximadamente 66,67%)."
    ],
    "correctIndex": 4,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "3": "Você marcou a alternativa (D): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares.",
      "E": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3."
    }
  },
  {
    "id": "rlm_prob_196",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 196] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "56 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_197",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 197] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "120 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_198",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 198] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 1,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_199",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 199] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_200",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 200] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 1,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "2": "Você marcou a alternativa (C): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "C": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_201",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 201] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 1,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_202",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 202] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%).",
      "2/15 (aproximadamente 13,33%)."
    ],
    "correctIndex": 4,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "3": "Você marcou a alternativa (D): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Incorreta. 3/20 corresponderia a outro produto de probabilidades.",
      "E": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15."
    }
  },
  {
    "id": "rlm_prob_203",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 203] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "90% (9/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 2,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_204",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 204] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "1/6 (aproximadamente 16,67%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 1,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_205",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 205] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%).",
      "2/3 (aproximadamente 66,67%)."
    ],
    "correctIndex": 4,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "3": "Você marcou a alternativa (D): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares.",
      "E": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3."
    }
  },
  {
    "id": "rlm_prob_206",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 206] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas.",
      "56 maneiras distintas."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "3": "Você marcou a alternativa (D): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Incorreta. 48 é 8 * 6, sem base combinatória.",
      "E": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56."
    }
  },
  {
    "id": "rlm_prob_207",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 207] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes.",
      "120 maneiras diferentes."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "3": "Você marcou a alternativa (D): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720).",
      "E": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras."
    }
  },
  {
    "id": "rlm_prob_208",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 208] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_209",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 209] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_210",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 210] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_211",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 211] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/3 (aproximadamente 33,33%).",
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 0,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "B": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_212",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 212] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_213",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 213] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "90% (9/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 2,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_214",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 214] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 0,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "B": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_215",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 215] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "2/3 (aproximadamente 66,67%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 2,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_216",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 216] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "56 maneiras distintas.",
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "2": "Você marcou a alternativa (C): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "B": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "C": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_217",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 217] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "120 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 1,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_218",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 218] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_219",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 219] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 0,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "B": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_220",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 220] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_221",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 221] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/3 (aproximadamente 33,33%).",
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%)."
    ],
    "correctIndex": 0,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "2": "Você marcou a alternativa (C): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "3": "Você marcou a alternativa (D): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "B": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "C": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "D": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_222",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 222] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "2/15 (aproximadamente 13,33%).",
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%)."
    ],
    "correctIndex": 0,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "2": "Você marcou a alternativa (C): 1/5 = 3/15, que superestima o cálculo exato.",
      "3": "Você marcou a alternativa (D): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "B": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "C": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "D": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_223",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 223] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "90% (9/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 1,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "2": "Você marcou a alternativa (C): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "C": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_224",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 224] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 3,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "1": "Você marcou a alternativa (B): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "2": "Você marcou a alternativa (C): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "B": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "C": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "D": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_225",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 225] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "2/3 (aproximadamente 66,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 3,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "2": "Você marcou a alternativa (C): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "D": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_226",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 226] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas.",
      "56 maneiras distintas."
    ],
    "correctIndex": 4,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "3": "Você marcou a alternativa (D): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Incorreta. 48 é 8 * 6, sem base combinatória.",
      "E": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56."
    }
  },
  {
    "id": "rlm_prob_227",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 227] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "120 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "1": "Você marcou a alternativa (B): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "2": "Você marcou a alternativa (C): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "B": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "C": "Incorreta. 60 desconsidera a terceira posição.",
      "D": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_228",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 228] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 4,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "3": "Você marcou a alternativa (D): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ.",
      "E": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'."
    }
  },
  {
    "id": "rlm_prob_229",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 229] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico."
    ],
    "correctIndex": 4,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "2": "Você marcou a alternativa (C): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "3": "Você marcou a alternativa (D): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "D": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q.",
      "E": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'."
    }
  },
  {
    "id": "rlm_prob_230",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 230] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso.",
      "O soldado não é corajoso ou o sargento não é disciplinado."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "3": "Você marcou a alternativa (D): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Incorreta. Inverteu os predicados sem aplicar negação lógica.",
      "E": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'."
    }
  },
  {
    "id": "rlm_prob_231",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 231] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "2/5 (40%).",
      "1/3 (aproximadamente 33,33%)."
    ],
    "correctIndex": 4,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "3": "Você marcou a alternativa (D): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais.",
      "E": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%)."
    }
  },
  {
    "id": "rlm_prob_232",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 232] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "2/15 (aproximadamente 13,33%).",
      "3/20 (15%)."
    ],
    "correctIndex": 3,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "4": "Você marcou a alternativa (E): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
      "E": "Incorreta. 3/20 corresponderia a outro produto de probabilidades."
    }
  },
  {
    "id": "rlm_prob_233",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 233] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "80% (4/5).",
      "60% (3/5).",
      "90% (9/10)."
    ],
    "correctIndex": 4,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "2": "Você marcou a alternativa (C): 80% desconta 30 alunos ao invés de 20.",
      "3": "Você marcou a alternativa (D): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "D": "Incorreta. 60% considera apenas quem estuda Direito Constitucional.",
      "E": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes."
    }
  },
  {
    "id": "rlm_prob_234",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 234] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 0,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "B": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_235",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 235] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "2/3 (aproximadamente 66,67%).",
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 0,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "2": "Você marcou a alternativa (C): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "B": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "C": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_236",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 236] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "120 maneiras distintas.",
      "56 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 3,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "2": "Você marcou a alternativa (C): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "D": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_237",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 237] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_238",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 238] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 1,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "2": "Você marcou a alternativa (C): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "3": "Você marcou a alternativa (D): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "C": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "D": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_239",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 239] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 2,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "1": "Você marcou a alternativa (B): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "C": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_240",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 240] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 3,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "2": "Você marcou a alternativa (C): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "D": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  },
  {
    "id": "rlm_prob_241",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Sorteio de Policiais Militares (Urna/Escala)",
    "question": "[Simulado PMPE - Questão 241] Em um pelotão do 1º Batalhão da PMPE (Recife) há 12 soldados, 8 cabos e 4 sargentos. Um policial militar será sorteado aleatoriamente para compor a equipe de patrulhamento tático especial. A probabilidade de o policial sorteado ser um CABO é de exatamente:",
    "options": [
      "1/2 (50%).",
      "1/4 (25%).",
      "1/6 (aproximadamente 16,67%).",
      "1/3 (aproximadamente 33,33%).",
      "2/5 (40%)."
    ],
    "correctIndex": 3,
    "explanation": "A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA: P = (Casos Favoráveis) / (Total de Casos Possíveis). Simplifique a fração dividindo numerador e denominador!",
    "passoAPassoConta": [
      "Passo 1: Identificar o número total de casos possíveis (espaço amostral S). Total = 12 soldados + 8 cabos + 4 sargentos = 24 policiais.",
      "Passo 2: Identificar os casos favoráveis (evento E). Queremos sortear um CABO -> n(E) = 8 cabos.",
      "Passo 3: Aplicar a fórmula clássica de Laplace: P = n(E) / n(S) = 8 / 24.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 8: (8 ÷ 8) / (24 ÷ 8) = 1/3 (ou 33,33%)."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "1": "Você marcou a alternativa (B): 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "2": "Você marcou a alternativa (C): 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "4": "Você marcou a alternativa (E): 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 50% corresponderia a 12 policiais em 24 (seria o caso se o sorteado fosse um soldado).",
      "B": "Incorreta. 25% corresponderia a 6 policiais em 24, enquanto há 8 cabos.",
      "C": "Incorreta. 1/6 corresponderia a 4 policiais em 24 (probabilidade de ser um sargento).",
      "D": "Correta. A probabilidade é a razão entre casos favoráveis e o total: P = 8 / 24 = 1/3 (ou 33,33%).",
      "E": "Incorreta. 2/5 é uma fração com denominador 5, incompatível com o total de 24 policiais."
    }
  },
  {
    "id": "rlm_prob_242",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Eventos Sucessivos SEM Reposição",
    "question": "[Simulado PMPE - Questão 242] Uma caixa no almoxarifado do Batalhão contém 6 munições de festim e 4 munições reais de calibre 9mm. Um militar retira sucessivamente e sem reposição 2 munições da caixa. A probabilidade de ambas as munições retiradas serem REAIS é de:",
    "options": [
      "4/25 (16%).",
      "1/5 (20%).",
      "1/10 (10%).",
      "3/20 (15%).",
      "2/15 (aproximadamente 13,33%)."
    ],
    "correctIndex": 4,
    "explanation": "Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "SEM REPOSIÇÃO: O total do denominador DIMINUI em 1 a cada retirada! Multiplique as probabilidades parciais.",
    "passoAPassoConta": [
      "Passo 1: Identificar o total inicial de munições: 6 festim + 4 reais = 10 munições.",
      "Passo 2: Probabilidade da 1ª ser real: P(1ª real) = 4 / 10.",
      "Passo 3: Como NÃO HOUVE REPOSIÇÃO, restaram 9 munições na caixa, sendo agora apenas 3 reais. Logo: P(2ª real | 1ª real) = 3 / 9.",
      "Passo 4: Multiplicar as probabilidades sucessivas: P(ambas reais) = (4/10) × (3/9) = 12 / 90.",
      "Passo 5: Simplificar dividindo por 6: (12 ÷ 6) / (90 ÷ 6) = 2/15."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "1": "Você marcou a alternativa (B): 1/5 = 3/15, que superestima o cálculo exato.",
      "2": "Você marcou a alternativa (C): 1/10 = 9/90, cálculo incorreto do numerador.",
      "3": "Você marcou a alternativa (D): 3/20 corresponderia a outro produto de probabilidades."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 4/25 seria o resultado se houvesse reposição: (4/10) * (4/10) = 16/100 = 4/25.",
      "B": "Incorreta. 1/5 = 3/15, que superestima o cálculo exato.",
      "C": "Incorreta. 1/10 = 9/90, cálculo incorreto do numerador.",
      "D": "Incorreta. 3/20 corresponderia a outro produto de probabilidades.",
      "E": "Correta. Na 1ª retirada temos 4/10; na 2ª retirada sem reposição restam 3 reais em 9 totais (3/9). Multiplicando: (4/10) * (3/9) = 12/90 = 2/15."
    }
  },
  {
    "id": "rlm_prob_243",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade da União de Eventos (P(A U B))",
    "question": "[Simulado PMPE - Questão 243] Em uma turma preparatória para a PMPE com 100 alunos, 60 estudam Direito Constitucional, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Sorteando-se um aluno ao acaso, a probabilidade de ele estudar Direito Constitucional OU Raciocínio Lógico é de:",
    "options": [
      "110% (11/10).",
      "70% (7/10).",
      "90% (9/10).",
      "80% (4/5).",
      "60% (3/5)."
    ],
    "correctIndex": 2,
    "explanation": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "FÓRMULA DA UNIÃO: P(A U B) = P(A) + P(B) - P(A ∩ B). Não esqueça de subtrair a intersecção!",
    "passoAPassoConta": [
      "Passo 1: Identificar os dados do problema: Total = 100 alunos. n(Const) = 60, n(RLM) = 50, n(Const ∩ RLM) = 20.",
      "Passo 2: Aplicar o Princípio da Inclusão-Exclusão para a união: n(Const ∪ RLM) = n(Const) + n(RLM) - n(Const ∩ RLM).",
      "Passo 3: Substituir os valores: n(Const ∪ RLM) = 60 + 50 - 20 = 90 alunos.",
      "Passo 4: Calcular a probabilidade: P = 90 / 100 = 9/10 = 90%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "1": "Você marcou a alternativa (B): 70% desconta a intersecção duas vezes incorretamente.",
      "3": "Você marcou a alternativa (D): 80% desconta 30 alunos ao invés de 20.",
      "4": "Você marcou a alternativa (E): 60% considera apenas quem estuda Direito Constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 110% é impossível, pois uma probabilidade máxima é sempre 100% (erro ao somar 60+50 sem subtrair a intersecção).",
      "B": "Incorreta. 70% desconta a intersecção duas vezes incorretamente.",
      "C": "Correta. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 60/100 + 50/100 - 20/100 = 90/100 = 90%. Se apenas somássemos sem subtrair os 20 da intersecção, estaríamos contando os mesmos alunos duas vezes.",
      "D": "Incorreta. 80% desconta 30 alunos ao invés de 20.",
      "E": "Incorreta. 60% considera apenas quem estuda Direito Constitucional."
    }
  },
  {
    "id": "rlm_prob_244",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade - Lançamento de Dois Dados Honestos",
    "question": "[Simulado PMPE - Questão 244] Dois dados comuns de seis faces, honestos e numerados de 1 a 6, são lançados simultaneamente sobre uma mesa. A probabilidade de a SOMA das faces voltadas para cima ser igual a 7 é de:",
    "options": [
      "1/6 (aproximadamente 16,67%).",
      "1/12 (aproximadamente 8,33%).",
      "7/36 (aproximadamente 19,44%).",
      "1/4 (25%).",
      "5/36 (aproximadamente 13,89%)."
    ],
    "correctIndex": 0,
    "explanation": "O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "DOIS DADOS: Espaço amostral total = 6 × 6 = 36 pares possíveis!",
    "passoAPassoConta": [
      "Passo 1: O espaço amostral do lançamento de dois dados é 6 × 6 = 36 pares ordenados possíveis.",
      "Passo 2: Listar todos os pares cuja soma é igual a 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
      "Passo 3: Contar os casos favoráveis: há exatamente 6 pares que somam 7.",
      "Passo 4: Calcular a probabilidade: P = 6 / 36 = 1/6 (ou 16,67%)."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 1/12 = 3/36, consideraria apenas metade das combinações.",
      "2": "Você marcou a alternativa (C): 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "3": "Você marcou a alternativa (D): 1/4 = 9/36, valor incorreto para a soma 7.",
      "4": "Você marcou a alternativa (E): 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    },
    "analiseAlternativas": {
      "A": "Correta. O espaço amostral total é 36. Os pares com soma 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> total 6 casos. Logo: P = 6/36 = 1/6.",
      "B": "Incorreta. 1/12 = 3/36, consideraria apenas metade das combinações.",
      "C": "Incorreta. 7/36 confunde o valor da soma (7) com o número de casos favoráveis (que é 6).",
      "D": "Incorreta. 1/4 = 9/36, valor incorreto para a soma 7.",
      "E": "Incorreta. 5/36 é a probabilidade da soma ser 6 ou 8, mas para a soma 7 são 6 casos."
    }
  },
  {
    "id": "rlm_prob_245",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Condicional (P(A|B))",
    "question": "[Simulado PMPE - Questão 245] Um dado comum de 6 faces é lançado. Sabendo-se previamente que o número sorteado foi PAR (evento B), qual é a probabilidade de que esse número seja MAIOR QUE 3 (evento A)?",
    "options": [
      "1/2 (50%).",
      "1/3 (aproximadamente 33,33%).",
      "2/3 (aproximadamente 66,67%).",
      "1/6 (aproximadamente 16,67%).",
      "3/4 (75%)."
    ],
    "correctIndex": 2,
    "explanation": "Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "PROBABILIDADE CONDICIONAL: P(A|B) = P(A ∩ B) / P(B). O espaço amostral é REDUZIDO ao evento B que já ocorreu!",
    "passoAPassoConta": [
      "Passo 1: Identificar a condição dada: sabemos que o resultado foi PAR. Espaço amostral reduzido B = {2, 4, 6} -> n(B) = 3.",
      "Passo 2: Dentre os elementos de B, quais são maiores que 3? Os números {4, 6} -> n(A ∩ B) = 2 casos.",
      "Passo 3: Aplicar a definição de probabilidade condicional: P(A|B) = n(A ∩ B) / n(B) = 2 / 3.",
      "Passo 4: Em porcentagem: 2/3 = 0,6667 = 66,67%."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "1": "Você marcou a alternativa (B): 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "3": "Você marcou a alternativa (D): 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "4": "Você marcou a alternativa (E): 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 1/2 seria a probabilidade de ser par em relação ao dado inteiro (3/6), desconsiderando a condição.",
      "B": "Incorreta. 1/3 seria 1 caso em 3, mas há 2 números pares maiores que 3 (4 e 6).",
      "C": "Correta. Como já sabemos que o número é par, os únicos resultados possíveis são {2, 4, 6} (3 possibilidades). Desses, os que são maiores que 3 são {4, 6} (2 possibilidades). Logo, P = 2/3.",
      "D": "Incorreta. 1/6 é a probabilidade de uma face isolada qualquer sem redução amostral.",
      "E": "Incorreta. 3/4 pressupõe 4 casos possíveis no denominador, mas há apenas 3 números pares."
    }
  },
  {
    "id": "rlm_prob_246",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Combinação Simples (A ordem NÃO importa)",
    "question": "[Simulado PMPE - Questão 246] O Comandante de uma Companhia da PMPE dispõe de 8 policiais militares aptos e deseja formar uma equipe de patrulha composta por 3 policiais. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "48 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "COMBINAÇÃO: Quando a ordem dos elementos NÃO altera a equipe/comissão! Fórmula: C(n,p) = n! / [p! * (n-p)!].",
    "passoAPassoConta": [
      "Passo 1: A ordem dos policiais na equipe NÃO importa (policiais A, B e C formam a mesma patrulha que C, B e A). Portanto, usamos COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula: C(8, 3) = 8! / (3! × (8 - 3)!) = 8! / (3! × 5!).",
      "Passo 3: Desenvolver o numerador até 5! para simplificar: (8 × 7 × 6 × 5!) / (3 × 2 × 1 × 5!).",
      "Passo 4: Cancelar o 5! e dividir: (8 × 7 × 6) / 6 = 8 × 7 = 56 equipes distintas."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "1": "Você marcou a alternativa (B): 24 = 8 * 3, multiplicação direta incorreta.",
      "3": "Você marcou a alternativa (D): 120 é C(10,3), valor incorreto para 8 elementos.",
      "4": "Você marcou a alternativa (E): 48 é 8 * 6, sem base combinatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 336 seria o resultado se a ordem importasse (Arranjo: 8 * 7 * 6 = 336), como para os cargos de Comandante, Subcomandante e Motorista.",
      "B": "Incorreta. 24 = 8 * 3, multiplicação direta incorreta.",
      "C": "Correta. Como a ordem dos membros na equipe não altera o grupo, trata-se de combinação: C(8,3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. 120 é C(10,3), valor incorreto para 8 elementos.",
      "E": "Incorreta. 48 é 8 * 6, sem base combinatória."
    }
  },
  {
    "id": "rlm_prob_247",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória - Arranjo Simples (A ordem IMPORTA)",
    "question": "[Simulado PMPE - Questão 247] Dentre 6 policiais militares do Batalhão de Trânsito, devem ser escolhidos 3 para exercerem funções específicas em uma operação: um será o Comandante da Viatura, outro o Motorista e o terceiro o Operador de Rádio. De quantas maneiras diferentes essas funções podem ser preenchidas?",
    "options": [
      "120 maneiras diferentes.",
      "20 maneiras diferentes.",
      "18 maneiras diferentes.",
      "60 maneiras diferentes.",
      "720 maneiras diferentes."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "ARRANJO: Quando a ordem IMPORTA (cargos específicos: Líder, Atirador e Motorista)! Fórmula: A(n,p) = n! / (n-p)!.",
    "passoAPassoConta": [
      "Passo 1: Como cada policial ocupará uma FUNÇÃO ESPECÍFICA (cargos distintos), a ordem dos elementos IMPORTA. Logo, usamos ARRANJO SIMPLES (ou PFC).",
      "Passo 2: Para a função de Comandante da viatura temos 6 opções.",
      "Passo 3: Para a função de Motorista restam 5 opções.",
      "Passo 4: Para a função de Operador de rádio restam 4 opções.",
      "Passo 5: Multiplicar pelo PFC: 6 × 5 × 4 = 120 maneiras diferentes."
    ],
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "2": "Você marcou a alternativa (C): 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "3": "Você marcou a alternativa (D): 60 desconsidera a terceira posição.",
      "4": "Você marcou a alternativa (E): 720 é a permutação completa de 6 elementos (6! = 720)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem importa (cargos distintos): A(6,3) = 6 * 5 * 4 = 120 maneiras.",
      "B": "Incorreta. 20 seria o resultado de Combinação C(6,3) = 120 / 6 = 20, aplicável caso os 3 exercessem a mesma função idêntica.",
      "C": "Incorreta. 18 = 6 * 3, multiplicação direta sem lógica combinatória.",
      "D": "Incorreta. 60 desconsidera a terceira posição.",
      "E": "Incorreta. 720 é a permutação completa de 6 elementos (6! = 720)."
    }
  },
  {
    "id": "rlm_prob_248",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação da Condicional (Regra do MANÉ)",
    "question": "[Simulado PMPE - Questão 248] Considere a proposição condicional: 'Se o candidato estuda com constância, então ele é aprovado no concurso da PMPE'. A NEGAÇÃO LÓGICA correta dessa afirmação, segundo a banca Instituto AOCP, é:",
    "options": [
      "Se o candidato não estuda com constância, então ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância ou ele é aprovado no concurso da PMPE.",
      "Se o candidato é aprovado no concurso da PMPE, então ele estudou com constância.",
      "O candidato estuda com constância e ele não é aprovado no concurso da PMPE.",
      "O candidato não estuda com constância e ele não é aprovado no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "REGRA DO MANÉ: Para negar 'Se P, então Q', você MANTÉM a primeira E NEGA a segunda: ~(P -> Q) ≡ P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a proposição condicional P -> Q. P = 'o candidato estuda', Q = 'ele é aprovado'.",
      "Passo 2: Lembrar da regra de ouro da banca AOCP para negar o 'Se... então': REGRA DO MANÉ (MAntém a 1ª E NEga a 2ª).",
      "Passo 3: Manteve a primeira (P): 'O candidato estuda com constância'.",
      "Passo 4: Troca o 'Se... então' pelo conectivo 'E' (conjunção ∧).",
      "Passo 5: Nega a segunda (~Q): 'ele NÃO é aprovado no concurso da PMPE'.",
      "Passo 6: Resultado: 'O candidato estuda com constância E ele NÃO é aprovado no concurso da PMPE'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "1": "Você marcou a alternativa (B): Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "2": "Você marcou a alternativa (C): Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "4": "Você marcou a alternativa (E): Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de um 'Se... então' NUNCA é outra condicional iniciada por 'Se'.",
      "B": "Incorreta. Esta é uma equivalência lógica (~P ∨ Q), e não a negação.",
      "C": "Incorreta. Esta é a recíproca (Q -> P), que não tem valor de negação.",
      "D": "Correta. A negação de P -> Q é P ∧ ~Q (regra do MANÉ: Mantém a primeira 'P' e Nega a segunda '~Q'). A negação de uma condicional NUNCA começa com 'Se'.",
      "E": "Incorreta. Negou ambas com conectivo E (~P ∧ ~Q), violando a regra do MANÉ."
    }
  },
  {
    "id": "rlm_prob_249",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "[Simulado PMPE - Questão 249] Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE a: 'Se o policial militar usa colete balístico, então ele está protegido'.",
    "options": [
      "Se o policial militar está protegido, então ele usa colete balístico.",
      "Se o policial militar não está protegido, então ele não usa colete balístico.",
      "Se o policial militar não usa colete balístico, então ele não está protegido.",
      "O policial militar usa colete balístico e ele não está protegido.",
      "O policial militar não usa colete balístico ou ele não está protegido."
    ],
    "correctIndex": 1,
    "explanation": "A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "CONTRAPOSITIVA: Inverte as proposições de lugar e NEGA ambas mantendo o 'Se... então': P -> Q ≡ ~Q -> ~P.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura condicional: P -> Q ('P' = usa colete; 'Q' = está protegido).",
      "Passo 2: Lembrar das duas equivalências clássicas da condicional mais cobradas pelo Instituto AOCP:",
      "  - Equivalência 1 (Contrapositiva): P -> Q ≡ ~Q -> ~P (Inverte e nega tudo).",
      "  - Equivalência 2 (Disjunção / Regra do Neymar): P -> Q ≡ ~P ∨ Q (Nega a primeira OU mantém a segunda).",
      "Passo 3: Aplicando a Contrapositiva: Inverte 'está protegido' para a frente negando ('Se não está protegido') e leva 'usa colete' para trás negando ('então não usa colete').",
      "Passo 4: Resultado: 'Se o policial militar não está protegido, então ele não usa colete balístico'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Inverteu sem negar (Q -> P, recíproca inválida).",
      "2": "Você marcou a alternativa (C): Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "3": "Você marcou a alternativa (D): Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "4": "Você marcou a alternativa (E): Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu sem negar (Q -> P, recíproca inválida).",
      "B": "Correta. A contrapositiva de P -> Q é ~Q -> ~P: 'Se o policial não está protegido, então ele não usa colete balístico'.",
      "C": "Incorreta. Negou ambas sem inverter (~P -> ~Q, inversa inválida).",
      "D": "Incorreta. Esta é a negação da condicional (P ∧ ~Q), não equivalência.",
      "E": "Incorreta. Negou a segunda na disjunção (~P ∨ ~Q), quando a regra correta é ~P ∨ Q."
    }
  },
  {
    "id": "rlm_prob_250",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Raciocínio Lógico - Negação de Proposição Composta (Leis de De Morgan)",
    "question": "[Simulado PMPE - Questão 250] Dada a proposição composta: 'O soldado é corajoso e o sargento é disciplinado'. A NEGAÇÃO LÓGICA dessa afirmação, de acordo com as Leis de De Morgan, é:",
    "options": [
      "O soldado não é corajoso e o sargento não é disciplinado.",
      "Se o soldado não é corajoso, então o sargento não é disciplinado.",
      "O soldado não é corajoso ou o sargento não é disciplinado.",
      "O soldado é corajoso ou o sargento é disciplinado.",
      "O soldado é disciplinado e o sargento é corajoso."
    ],
    "correctIndex": 2,
    "explanation": "Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
    "fundamentacaoLegal": "Instituto AOCP - Raciocínio Lógico-Matemático",
    "hint": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial de Raciocínio Lógico & Probabilidade PMPE",
    "dicaMacete": "LEIS DE DE MORGAN: Para negar o conectivo 'E', vira 'OU' e nega tudo: ~(P ∧ Q) ≡ ~P ∨ ~Q. Para negar o 'OU', vira 'E' e nega tudo: ~(P ∨ Q) ≡ ~P ∧ ~Q.",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura: Conjunção P ∧ Q ('P' = soldado corajoso; 'Q' = sargento disciplinado).",
      "Passo 2: Aplicar a 1ª Lei de De Morgan: ~(P ∧ Q) ≡ ~P ∨ ~Q.",
      "Passo 3: Nega a primeira: 'O soldado NÃO é corajoso'.",
      "Passo 4: Troca o conectivo 'E' pelo conectivo 'OU'.",
      "Passo 5: Nega a segunda: 'o sargento NÃO é disciplinado'.",
      "Passo 6: Conclusão: 'O soldado não é corajoso OU o sargento não é disciplinado'."
    ],
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "1": "Você marcou a alternativa (B): Transformou em condicional sem fundamento lógico.",
      "3": "Você marcou a alternativa (D): Apenas trocou o conectivo sem negar as proposições.",
      "4": "Você marcou a alternativa (E): Inverteu os predicados sem aplicar negação lógica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Manteve o conectivo 'E' (~P ∧ ~Q), o que é o erro mais comum em provas de concurso.",
      "B": "Incorreta. Transformou em condicional sem fundamento lógico.",
      "C": "Correta. Pela Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se ambas e troca-se o conectivo 'E' pelo conectivo 'OU'.",
      "D": "Incorreta. Apenas trocou o conectivo sem negar as proposições.",
      "E": "Incorreta. Inverteu os predicados sem aplicar negação lógica."
    }
  }
];
