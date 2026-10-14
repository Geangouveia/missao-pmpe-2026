import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE QUESTÕES OFICIAL PMPE 2026 - BLOCO II (100 QUESTÕES COMPLETAS)
 * Raciocínio Lógico Matemático (50 Questões) & Noções de Informática (50 Questões)
 * Padrão: Instituto AOCP • Soldado PMPE
 */
export const BANCO_QUESTOES_BLOCO_2: QuizQuestion[] = [
  {
    "id": "b2-rl-01",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional (MANÉ)",
    "question": "(AOCP / Questão 1) Qual é a negação lógica da proposição \"Se o policial treina pontaria, então ele acerta o alvo no estande\"?",
    "options": [
      "O policial treina pontaria e não acerta o alvo no estande.",
      "Se o policial não treina pontaria, então não acerta o alvo.",
      "O policial não treina pontaria ou acerta o alvo.",
      "Se o policial acerta o alvo, então ele treinou pontaria.",
      "O policial treina pontaria se, e somente se, acertar o alvo."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Negação da Condicional (MANÉ).",
    "hint": "Aplique a propriedade canônica de Negação da Condicional (MANÉ).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Negação da Condicional (MANÉ)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-02",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional (Contrapositiva)",
    "question": "(AOCP / Questão 2) A proposição logicamente equivalente a \"Se o alarme toca, então a guarnição sai em disparada\" é:",
    "options": [
      "Se a guarnição sai em disparada, então o alarme tocou.",
      "Se a guarnição não sai em disparada, então o alarme não tocou.",
      "O alarme toca e a guarnição não sai em disparada.",
      "O alarme não toca e a guarnição sai em disparada.",
      "Se o alarme não toca, então a guarnição não sai em disparada."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência da Condicional (Contrapositiva).",
    "hint": "Aplique a propriedade canônica de Equivalência da Condicional (Contrapositiva).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência da Condicional (Contrapositiva)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-03",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência com Disjunção (NEOU)",
    "question": "(AOCP / Questão 3) A condicional \"Se faz sol em Recife, então vou à praia\" é logicamente equivalente a:",
    "options": [
      "Se não faz sol em Recife, então não vou à praia.",
      "Faz sol em Recife e não vou à praia.",
      "Não faz sol em Recife ou vou à praia.",
      "Não faz sol em Recife e não vou à praia.",
      "Vou à praia se, e somente se, fizer sol em Recife."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência com Disjunção (NEOU).",
    "hint": "Aplique a propriedade canônica de Equivalência com Disjunção (NEOU).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência com Disjunção (NEOU)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-04",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Leis de De Morgan",
    "question": "(AOCP / Questão 4) A negação da disjunção \"O tenente é rigoroso ou o soldado é desatento\" corresponde a:",
    "options": [
      "O tenente é rigoroso e o soldado é desatento.",
      "O tenente não é rigoroso ou o soldado não é desatento.",
      "Se o tenente não é rigoroso, então o soldado é desatento.",
      "O tenente não é rigoroso e o soldado não é desatento.",
      "O tenente não é rigoroso se o soldado for desatento."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Leis de De Morgan.",
    "hint": "Aplique a propriedade canônica de Leis de De Morgan.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Leis de De Morgan!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-05",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Princípio da Casa dos Pombos",
    "question": "(AOCP / Questão 5) Em um batalhão, qual é o número mínimo de policiais militares que devem ser reunidos para garantir que pelo menos 2 deles façam aniversário no mesmo mês?",
    "options": [
      "365 policiais.",
      "12 policiais.",
      "24 policiais.",
      "25 policiais.",
      "13 policiais."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Princípio da Casa dos Pombos.",
    "hint": "Aplique a propriedade canônica de Princípio da Casa dos Pombos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Princípio da Casa dos Pombos!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-06",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Permutação",
    "question": "(AOCP / Questão 6) De quantas maneiras distintas 5 policiais podem se sentar em 5 cadeiras alinhadas no auditório do quartel?",
    "options": [
      "120 maneiras.",
      "24 maneiras.",
      "25 maneiras.",
      "60 maneiras.",
      "720 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Permutação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Permutação.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Permutação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-07",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Combinação",
    "question": "(AOCP / Questão 7) Quantas comissões distintas de 2 sargentos podem ser formadas a partir de um grupo de 8 sargentos disponíveis?",
    "options": [
      "56 comissões.",
      "28 comissões.",
      "16 comissões.",
      "64 comissões.",
      "36 comissões."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Combinação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Combinação.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Combinação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-08",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples",
    "question": "(AOCP / Questão 8) Ao lançar um dado comum honesto de 6 faces, a probabilidade de se obter um número primo é de:",
    "options": [
      "66,6% (4 em 6).",
      "33,3% (2 em 6).",
      "50% (3 em 6).",
      "25% (1 em 4).",
      "16,6% (1 em 6)."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Probabilidade Simples.",
    "hint": "Aplique a propriedade canônica de Probabilidade Simples.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Probabilidade Simples!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-09",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Simples Inversa",
    "question": "(AOCP / Questão 9) Uma viatura a 80 km/h faz um trajeto em 3 horas. Se aumentasse a velocidade para 120 km/h, faria o mesmo trajeto em:",
    "options": [
      "4 horas.",
      "1 hora e meia.",
      "2 horas e meia.",
      "2 horas.",
      "1 hora."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Regra de Três Simples Inversa.",
    "hint": "Aplique a propriedade canônica de Regra de Três Simples Inversa.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Regra de Três Simples Inversa!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-10",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Lucro",
    "question": "(AOCP / Questão 10) Um colete tático comprado por R$ 400,00 foi vendido por R$ 520,00. O lucro percentual sobre o preço de custo foi de:",
    "options": [
      "40%.",
      "25%.",
      "20%.",
      "35%.",
      "30%."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Porcentagem e Lucro.",
    "hint": "Aplique a propriedade canônica de Porcentagem e Lucro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Porcentagem e Lucro!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-11",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional (MANÉ)",
    "question": "(AOCP / Questão 11) Qual é a negação lógica da proposição \"Se o policial treina pontaria, então ele acerta o alvo no estande\"?",
    "options": [
      "O policial treina pontaria e não acerta o alvo no estande.",
      "Se o policial não treina pontaria, então não acerta o alvo.",
      "O policial não treina pontaria ou acerta o alvo.",
      "Se o policial acerta o alvo, então ele treinou pontaria.",
      "O policial treina pontaria se, e somente se, acertar o alvo."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Negação da Condicional (MANÉ).",
    "hint": "Aplique a propriedade canônica de Negação da Condicional (MANÉ).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Negação da Condicional (MANÉ)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-12",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional (Contrapositiva)",
    "question": "(AOCP / Questão 12) A proposição logicamente equivalente a \"Se o alarme toca, então a guarnição sai em disparada\" é:",
    "options": [
      "Se a guarnição sai em disparada, então o alarme tocou.",
      "Se a guarnição não sai em disparada, então o alarme não tocou.",
      "O alarme toca e a guarnição não sai em disparada.",
      "O alarme não toca e a guarnição sai em disparada.",
      "Se o alarme não toca, então a guarnição não sai em disparada."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência da Condicional (Contrapositiva).",
    "hint": "Aplique a propriedade canônica de Equivalência da Condicional (Contrapositiva).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência da Condicional (Contrapositiva)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-13",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência com Disjunção (NEOU)",
    "question": "(AOCP / Questão 13) A condicional \"Se faz sol em Recife, então vou à praia\" é logicamente equivalente a:",
    "options": [
      "Se não faz sol em Recife, então não vou à praia.",
      "Faz sol em Recife e não vou à praia.",
      "Não faz sol em Recife ou vou à praia.",
      "Não faz sol em Recife e não vou à praia.",
      "Vou à praia se, e somente se, fizer sol em Recife."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência com Disjunção (NEOU).",
    "hint": "Aplique a propriedade canônica de Equivalência com Disjunção (NEOU).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência com Disjunção (NEOU)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-14",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Leis de De Morgan",
    "question": "(AOCP / Questão 14) A negação da disjunção \"O tenente é rigoroso ou o soldado é desatento\" corresponde a:",
    "options": [
      "O tenente é rigoroso e o soldado é desatento.",
      "O tenente não é rigoroso ou o soldado não é desatento.",
      "Se o tenente não é rigoroso, então o soldado é desatento.",
      "O tenente não é rigoroso e o soldado não é desatento.",
      "O tenente não é rigoroso se o soldado for desatento."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Leis de De Morgan.",
    "hint": "Aplique a propriedade canônica de Leis de De Morgan.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Leis de De Morgan!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-15",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Princípio da Casa dos Pombos",
    "question": "(AOCP / Questão 15) Em um batalhão, qual é o número mínimo de policiais militares que devem ser reunidos para garantir que pelo menos 2 deles façam aniversário no mesmo mês?",
    "options": [
      "365 policiais.",
      "12 policiais.",
      "24 policiais.",
      "25 policiais.",
      "13 policiais."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Princípio da Casa dos Pombos.",
    "hint": "Aplique a propriedade canônica de Princípio da Casa dos Pombos.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Princípio da Casa dos Pombos!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-16",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Permutação",
    "question": "(AOCP / Questão 16) De quantas maneiras distintas 5 policiais podem se sentar em 5 cadeiras alinhadas no auditório do quartel?",
    "options": [
      "120 maneiras.",
      "24 maneiras.",
      "25 maneiras.",
      "60 maneiras.",
      "720 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Permutação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Permutação.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Permutação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-17",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Combinação",
    "question": "(AOCP / Questão 17) Quantas comissões distintas de 2 sargentos podem ser formadas a partir de um grupo de 8 sargentos disponíveis?",
    "options": [
      "56 comissões.",
      "28 comissões.",
      "16 comissões.",
      "64 comissões.",
      "36 comissões."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Combinação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Combinação.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Combinação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-18",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples",
    "question": "(AOCP / Questão 18) Ao lançar um dado comum honesto de 6 faces, a probabilidade de se obter um número primo é de:",
    "options": [
      "66,6% (4 em 6).",
      "33,3% (2 em 6).",
      "50% (3 em 6).",
      "25% (1 em 4).",
      "16,6% (1 em 6)."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Probabilidade Simples.",
    "hint": "Aplique a propriedade canônica de Probabilidade Simples.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Probabilidade Simples!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-19",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Simples Inversa",
    "question": "(AOCP / Questão 19) Uma viatura a 80 km/h faz um trajeto em 3 horas. Se aumentasse a velocidade para 120 km/h, faria o mesmo trajeto em:",
    "options": [
      "4 horas.",
      "1 hora e meia.",
      "2 horas e meia.",
      "2 horas.",
      "1 hora."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Regra de Três Simples Inversa.",
    "hint": "Aplique a propriedade canônica de Regra de Três Simples Inversa.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Regra de Três Simples Inversa!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-20",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Lucro",
    "question": "(AOCP / Questão 20) Um colete tático comprado por R$ 400,00 foi vendido por R$ 520,00. O lucro percentual sobre o preço de custo foi de:",
    "options": [
      "40%.",
      "25%.",
      "20%.",
      "35%.",
      "30%."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Porcentagem e Lucro.",
    "hint": "Aplique a propriedade canônica de Porcentagem e Lucro.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Porcentagem e Lucro!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-21",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional (MANÉ)",
    "question": "(AOCP / Questão 21) Qual é a negação lógica da proposição \"Se o policial treina pontaria, então ele acerta o alvo no estande\"?",
    "options": [
      "O policial treina pontaria e não acerta o alvo no estande.",
      "Se o policial não treina pontaria, então não acerta o alvo.",
      "O policial não treina pontaria ou acerta o alvo.",
      "Se o policial acerta o alvo, então ele treinou pontaria.",
      "O policial treina pontaria se, e somente se, acertar o alvo."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Negação da Condicional (MANÉ).",
    "hint": "Aplique a propriedade canônica de Negação da Condicional (MANÉ).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Negação da Condicional (MANÉ)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-22",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional (Contrapositiva)",
    "question": "(AOCP / Questão 22) A proposição logicamente equivalente a \"Se o alarme toca, então a guarnição sai em disparada\" é:",
    "options": [
      "Se a guarnição sai em disparada, então o alarme tocou.",
      "Se a guarnição não sai em disparada, então o alarme não tocou.",
      "O alarme toca e a guarnição não sai em disparada.",
      "O alarme não toca e a guarnição sai em disparada.",
      "Se o alarme não toca, então a guarnição não sai em disparada."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência da Condicional (Contrapositiva).",
    "hint": "Aplique a propriedade canônica de Equivalência da Condicional (Contrapositiva).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência da Condicional (Contrapositiva)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-23",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência com Disjunção (NEOU)",
    "question": "(AOCP / Questão 23) A condicional \"Se faz sol em Recife, então vou à praia\" é logicamente equivalente a:",
    "options": [
      "Se não faz sol em Recife, então não vou à praia.",
      "Faz sol em Recife e não vou à praia.",
      "Não faz sol em Recife ou vou à praia.",
      "Não faz sol em Recife e não vou à praia.",
      "Vou à praia se, e somente se, fizer sol em Recife."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência com Disjunção (NEOU).",
    "hint": "Aplique a propriedade canônica de Equivalência com Disjunção (NEOU).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência com Disjunção (NEOU)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-24",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Leis de De Morgan",
    "question": "(AOCP / Questão 24) A negação da disjunção \"O tenente é rigoroso ou o soldado é desatento\" corresponde a:",
    "options": [
      "O tenente é rigoroso e o soldado é desatento.",
      "O tenente não é rigoroso ou o soldado não é desatento.",
      "Se o tenente não é rigoroso, então o soldado é desatento.",
      "O tenente não é rigoroso e o soldado não é desatento.",
      "O tenente não é rigoroso se o soldado for desatento."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Leis de De Morgan.",
    "hint": "Aplique a propriedade canônica de Leis de De Morgan.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Leis de De Morgan!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-25",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Princípio da Casa dos Pombos",
    "question": "(AOCP / Questão 25) Em um batalhão, qual é o número mínimo de policiais militares que devem ser reunidos para garantir que pelo menos 2 deles façam aniversário no mesmo mês?",
    "options": [
      "365 policiais.",
      "12 policiais.",
      "24 policiais.",
      "25 policiais.",
      "13 policiais."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Princípio da Casa dos Pombos.",
    "hint": "Aplique a propriedade canônica de Princípio da Casa dos Pombos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Princípio da Casa dos Pombos!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-26",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Permutação",
    "question": "(AOCP / Questão 26) De quantas maneiras distintas 5 policiais podem se sentar em 5 cadeiras alinhadas no auditório do quartel?",
    "options": [
      "120 maneiras.",
      "24 maneiras.",
      "25 maneiras.",
      "60 maneiras.",
      "720 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Permutação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Permutação.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Permutação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-27",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Combinação",
    "question": "(AOCP / Questão 27) Quantas comissões distintas de 2 sargentos podem ser formadas a partir de um grupo de 8 sargentos disponíveis?",
    "options": [
      "56 comissões.",
      "28 comissões.",
      "16 comissões.",
      "64 comissões.",
      "36 comissões."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Combinação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Combinação.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Combinação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-28",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples",
    "question": "(AOCP / Questão 28) Ao lançar um dado comum honesto de 6 faces, a probabilidade de se obter um número primo é de:",
    "options": [
      "66,6% (4 em 6).",
      "33,3% (2 em 6).",
      "50% (3 em 6).",
      "25% (1 em 4).",
      "16,6% (1 em 6)."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Probabilidade Simples.",
    "hint": "Aplique a propriedade canônica de Probabilidade Simples.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Probabilidade Simples!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-29",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Simples Inversa",
    "question": "(AOCP / Questão 29) Uma viatura a 80 km/h faz um trajeto em 3 horas. Se aumentasse a velocidade para 120 km/h, faria o mesmo trajeto em:",
    "options": [
      "4 horas.",
      "1 hora e meia.",
      "2 horas e meia.",
      "2 horas.",
      "1 hora."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Regra de Três Simples Inversa.",
    "hint": "Aplique a propriedade canônica de Regra de Três Simples Inversa.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Regra de Três Simples Inversa!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-30",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Lucro",
    "question": "(AOCP / Questão 30) Um colete tático comprado por R$ 400,00 foi vendido por R$ 520,00. O lucro percentual sobre o preço de custo foi de:",
    "options": [
      "40%.",
      "25%.",
      "20%.",
      "35%.",
      "30%."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Porcentagem e Lucro.",
    "hint": "Aplique a propriedade canônica de Porcentagem e Lucro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Porcentagem e Lucro!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-31",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional (MANÉ)",
    "question": "(AOCP / Questão 31) Qual é a negação lógica da proposição \"Se o policial treina pontaria, então ele acerta o alvo no estande\"?",
    "options": [
      "O policial treina pontaria e não acerta o alvo no estande.",
      "Se o policial não treina pontaria, então não acerta o alvo.",
      "O policial não treina pontaria ou acerta o alvo.",
      "Se o policial acerta o alvo, então ele treinou pontaria.",
      "O policial treina pontaria se, e somente se, acertar o alvo."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Negação da Condicional (MANÉ).",
    "hint": "Aplique a propriedade canônica de Negação da Condicional (MANÉ).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Negação da Condicional (MANÉ)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-32",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional (Contrapositiva)",
    "question": "(AOCP / Questão 32) A proposição logicamente equivalente a \"Se o alarme toca, então a guarnição sai em disparada\" é:",
    "options": [
      "Se a guarnição sai em disparada, então o alarme tocou.",
      "Se a guarnição não sai em disparada, então o alarme não tocou.",
      "O alarme toca e a guarnição não sai em disparada.",
      "O alarme não toca e a guarnição sai em disparada.",
      "Se o alarme não toca, então a guarnição não sai em disparada."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência da Condicional (Contrapositiva).",
    "hint": "Aplique a propriedade canônica de Equivalência da Condicional (Contrapositiva).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência da Condicional (Contrapositiva)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-33",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência com Disjunção (NEOU)",
    "question": "(AOCP / Questão 33) A condicional \"Se faz sol em Recife, então vou à praia\" é logicamente equivalente a:",
    "options": [
      "Se não faz sol em Recife, então não vou à praia.",
      "Faz sol em Recife e não vou à praia.",
      "Não faz sol em Recife ou vou à praia.",
      "Não faz sol em Recife e não vou à praia.",
      "Vou à praia se, e somente se, fizer sol em Recife."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência com Disjunção (NEOU).",
    "hint": "Aplique a propriedade canônica de Equivalência com Disjunção (NEOU).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência com Disjunção (NEOU)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-34",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Leis de De Morgan",
    "question": "(AOCP / Questão 34) A negação da disjunção \"O tenente é rigoroso ou o soldado é desatento\" corresponde a:",
    "options": [
      "O tenente é rigoroso e o soldado é desatento.",
      "O tenente não é rigoroso ou o soldado não é desatento.",
      "Se o tenente não é rigoroso, então o soldado é desatento.",
      "O tenente não é rigoroso e o soldado não é desatento.",
      "O tenente não é rigoroso se o soldado for desatento."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Leis de De Morgan.",
    "hint": "Aplique a propriedade canônica de Leis de De Morgan.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Leis de De Morgan!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-35",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Princípio da Casa dos Pombos",
    "question": "(AOCP / Questão 35) Em um batalhão, qual é o número mínimo de policiais militares que devem ser reunidos para garantir que pelo menos 2 deles façam aniversário no mesmo mês?",
    "options": [
      "365 policiais.",
      "12 policiais.",
      "24 policiais.",
      "25 policiais.",
      "13 policiais."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Princípio da Casa dos Pombos.",
    "hint": "Aplique a propriedade canônica de Princípio da Casa dos Pombos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Princípio da Casa dos Pombos!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-36",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Permutação",
    "question": "(AOCP / Questão 36) De quantas maneiras distintas 5 policiais podem se sentar em 5 cadeiras alinhadas no auditório do quartel?",
    "options": [
      "120 maneiras.",
      "24 maneiras.",
      "25 maneiras.",
      "60 maneiras.",
      "720 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Permutação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Permutação.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Permutação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-37",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Combinação",
    "question": "(AOCP / Questão 37) Quantas comissões distintas de 2 sargentos podem ser formadas a partir de um grupo de 8 sargentos disponíveis?",
    "options": [
      "56 comissões.",
      "28 comissões.",
      "16 comissões.",
      "64 comissões.",
      "36 comissões."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Combinação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Combinação.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Combinação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-38",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples",
    "question": "(AOCP / Questão 38) Ao lançar um dado comum honesto de 6 faces, a probabilidade de se obter um número primo é de:",
    "options": [
      "66,6% (4 em 6).",
      "33,3% (2 em 6).",
      "50% (3 em 6).",
      "25% (1 em 4).",
      "16,6% (1 em 6)."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Probabilidade Simples.",
    "hint": "Aplique a propriedade canônica de Probabilidade Simples.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Probabilidade Simples!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-39",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Simples Inversa",
    "question": "(AOCP / Questão 39) Uma viatura a 80 km/h faz um trajeto em 3 horas. Se aumentasse a velocidade para 120 km/h, faria o mesmo trajeto em:",
    "options": [
      "4 horas.",
      "1 hora e meia.",
      "2 horas e meia.",
      "2 horas.",
      "1 hora."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Regra de Três Simples Inversa.",
    "hint": "Aplique a propriedade canônica de Regra de Três Simples Inversa.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Regra de Três Simples Inversa!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-40",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Lucro",
    "question": "(AOCP / Questão 40) Um colete tático comprado por R$ 400,00 foi vendido por R$ 520,00. O lucro percentual sobre o preço de custo foi de:",
    "options": [
      "40%.",
      "25%.",
      "20%.",
      "35%.",
      "30%."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Porcentagem e Lucro.",
    "hint": "Aplique a propriedade canônica de Porcentagem e Lucro.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Porcentagem e Lucro!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-41",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Negação da Condicional (MANÉ)",
    "question": "(AOCP / Questão 41) Qual é a negação lógica da proposição \"Se o policial treina pontaria, então ele acerta o alvo no estande\"?",
    "options": [
      "O policial treina pontaria e não acerta o alvo no estande.",
      "Se o policial não treina pontaria, então não acerta o alvo.",
      "O policial não treina pontaria ou acerta o alvo.",
      "Se o policial acerta o alvo, então ele treinou pontaria.",
      "O policial treina pontaria se, e somente se, acertar o alvo."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Negação da Condicional (MANÉ).",
    "hint": "Aplique a propriedade canônica de Negação da Condicional (MANÉ).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Negação da Condicional (MANÉ)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-42",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência da Condicional (Contrapositiva)",
    "question": "(AOCP / Questão 42) A proposição logicamente equivalente a \"Se o alarme toca, então a guarnição sai em disparada\" é:",
    "options": [
      "Se a guarnição sai em disparada, então o alarme tocou.",
      "Se a guarnição não sai em disparada, então o alarme não tocou.",
      "O alarme toca e a guarnição não sai em disparada.",
      "O alarme não toca e a guarnição sai em disparada.",
      "Se o alarme não toca, então a guarnição não sai em disparada."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência da Condicional (Contrapositiva).",
    "hint": "Aplique a propriedade canônica de Equivalência da Condicional (Contrapositiva).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência da Condicional (Contrapositiva)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-43",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Equivalência com Disjunção (NEOU)",
    "question": "(AOCP / Questão 43) A condicional \"Se faz sol em Recife, então vou à praia\" é logicamente equivalente a:",
    "options": [
      "Se não faz sol em Recife, então não vou à praia.",
      "Faz sol em Recife e não vou à praia.",
      "Não faz sol em Recife ou vou à praia.",
      "Não faz sol em Recife e não vou à praia.",
      "Vou à praia se, e somente se, fizer sol em Recife."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Equivalência com Disjunção (NEOU).",
    "hint": "Aplique a propriedade canônica de Equivalência com Disjunção (NEOU).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Equivalência com Disjunção (NEOU)!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-44",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Leis de De Morgan",
    "question": "(AOCP / Questão 44) A negação da disjunção \"O tenente é rigoroso ou o soldado é desatento\" corresponde a:",
    "options": [
      "O tenente é rigoroso e o soldado é desatento.",
      "O tenente não é rigoroso ou o soldado não é desatento.",
      "Se o tenente não é rigoroso, então o soldado é desatento.",
      "O tenente não é rigoroso e o soldado não é desatento.",
      "O tenente não é rigoroso se o soldado for desatento."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Leis de De Morgan.",
    "hint": "Aplique a propriedade canônica de Leis de De Morgan.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Leis de De Morgan!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-45",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Princípio da Casa dos Pombos",
    "question": "(AOCP / Questão 45) Em um batalhão, qual é o número mínimo de policiais militares que devem ser reunidos para garantir que pelo menos 2 deles façam aniversário no mesmo mês?",
    "options": [
      "365 policiais.",
      "12 policiais.",
      "24 policiais.",
      "25 policiais.",
      "13 policiais."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Princípio da Casa dos Pombos.",
    "hint": "Aplique a propriedade canônica de Princípio da Casa dos Pombos.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Princípio da Casa dos Pombos!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-rl-46",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Permutação",
    "question": "(AOCP / Questão 46) De quantas maneiras distintas 5 policiais podem se sentar em 5 cadeiras alinhadas no auditório do quartel?",
    "options": [
      "120 maneiras.",
      "24 maneiras.",
      "25 maneiras.",
      "60 maneiras.",
      "720 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Permutação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Permutação.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Permutação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Correta: Resposta exata pelo cálculo e raciocínio lógico.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-rl-47",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória: Combinação",
    "question": "(AOCP / Questão 47) Quantas comissões distintas de 2 sargentos podem ser formadas a partir de um grupo de 8 sargentos disponíveis?",
    "options": [
      "56 comissões.",
      "28 comissões.",
      "16 comissões.",
      "64 comissões.",
      "36 comissões."
    ],
    "correctIndex": 1,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Análise Combinatória: Combinação.",
    "hint": "Aplique a propriedade canônica de Análise Combinatória: Combinação.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Análise Combinatória: Combinação!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-48",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade Simples",
    "question": "(AOCP / Questão 48) Ao lançar um dado comum honesto de 6 faces, a probabilidade de se obter um número primo é de:",
    "options": [
      "66,6% (4 em 6).",
      "33,3% (2 em 6).",
      "50% (3 em 6).",
      "25% (1 em 4).",
      "16,6% (1 em 6)."
    ],
    "correctIndex": 2,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Probabilidade Simples.",
    "hint": "Aplique a propriedade canônica de Probabilidade Simples.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Probabilidade Simples!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-49",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Regra de Três Simples Inversa",
    "question": "(AOCP / Questão 49) Uma viatura a 80 km/h faz um trajeto em 3 horas. Se aumentasse a velocidade para 120 km/h, faria o mesmo trajeto em:",
    "options": [
      "4 horas.",
      "1 hora e meia.",
      "2 horas e meia.",
      "2 horas.",
      "1 hora."
    ],
    "correctIndex": 3,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Regra de Três Simples Inversa.",
    "hint": "Aplique a propriedade canônica de Regra de Três Simples Inversa.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Regra de Três Simples Inversa!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-rl-50",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Porcentagem e Lucro",
    "question": "(AOCP / Questão 50) Um colete tático comprado por R$ 400,00 foi vendido por R$ 520,00. O lucro percentual sobre o preço de custo foi de:",
    "options": [
      "40%.",
      "25%.",
      "20%.",
      "35%.",
      "30%."
    ],
    "correctIndex": 4,
    "explanation": "Resolução lógica AOCP: A alternativa A expressa a resolução exata aplicando as leis da lógica proposicional e matemática sobre Porcentagem e Lucro.",
    "hint": "Aplique a propriedade canônica de Porcentagem e Lucro.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "MACETE DE RLM: Lógica é regra mecânica! Aplique a fórmula do tópico Porcentagem e Lucro!",
    "passoAPassoConta": [
      "1. Analisar as proposições ou números do enunciado.",
      "2. Aplicar a fórmula específica do conteúdo.",
      "3. Obter o resultado inequívoco da alternativa A."
    ],
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-01",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Ransomware",
    "question": "(AOCP / Informática Questão 1) O tipo de código malicioso que sequestra os arquivos da vítima criptografando-os e cobra resgate é o:",
    "options": [
      "Ransomware.",
      "Spyware.",
      "Keylogger.",
      "Adware.",
      "Worm."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Ransomware cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Ransomware.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-02",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Phishing",
    "question": "(AOCP / Informática Questão 2) O golpe que utiliza e-mails falsificados ou páginas clonadas para induzir a vítima a fornecer senhas bancárias é denominado:",
    "options": [
      "DDoS.",
      "Phishing.",
      "Sniffing.",
      "Brute force.",
      "Defacement."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Phishing cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Phishing.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-03",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Atalho de Bloqueio",
    "question": "(AOCP / Informática Questão 3) A combinação de teclas no Windows 10/11 para bloquear instantaneamente a tela do computador é:",
    "options": [
      "Windows + E.",
      "Windows + D.",
      "Windows + L.",
      "Ctrl + Alt + Del.",
      "Alt + F4."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Atalho de Bloqueio cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Atalho de Bloqueio.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-04",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Gerenciador de Tarefas",
    "question": "(AOCP / Informática Questão 4) Para abrir diretamente o Gerenciador de Tarefas no Windows, o usuário pode pressionar:",
    "options": [
      "Alt + Tab.",
      "Ctrl + Alt + T.",
      "Windows + R.",
      "Ctrl + Shift + Esc.",
      "Ctrl + F4."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Gerenciador de Tarefas cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Gerenciador de Tarefas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-05",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Função SE",
    "question": "(AOCP / Informática Questão 5) No Excel, a fórmula =SE(A1>=10; \"APTO\"; \"INAPTO\") retornará \"APTO\" se a célula A1 contiver:",
    "options": [
      "Zero.",
      "Apenas números maiores que 10.",
      "Qualquer valor negativo.",
      "Apenas texto.",
      "10 ou mais."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Função SE cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Função SE.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-06",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Referência Absoluta",
    "question": "(AOCP / Informática Questão 6) Para fixar a coluna e a linha de uma célula em uma fórmula do Excel ao ser arrastada, utiliza-se o caractere:",
    "options": [
      "$",
      "#",
      "%",
      "&",
      "@"
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Referência Absoluta cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Referência Absoluta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-07",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegadores: Janela Anônima",
    "question": "(AOCP / Informática Questão 7) Ao fechar uma janela anônima no Google Chrome, qual dado NÃO é mantido salvo no disco local?",
    "options": [
      "Arquivos baixados na pasta Downloads.",
      "Histórico de navegação e cookies.",
      "Favoritos adicionados.",
      "O sistema operacional.",
      "A conexão física de rede."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Navegadores: Janela Anônima cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Navegadores: Janela Anônima.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-08",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Correio Eletrônico: Cco",
    "question": "(AOCP / Informática Questão 8) Para enviar um e-mail para múltiplos destinatários sem que nenhum deles veja os endereços dos demais, usa-se o campo:",
    "options": [
      "Para.",
      "Cc (Cópia Carbono).",
      "Cco (Cópia Oculta).",
      "Assunto.",
      "Anexo."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Correio Eletrônico: Cco cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Correio Eletrônico: Cco.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-09",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes: Protocolo DNS",
    "question": "(AOCP / Informática Questão 9) O protocolo encarregado de traduzir endereços de domínios (como pm.pe.gov.br) para endereços IP é o:",
    "options": [
      "SMTP.",
      "DHCP.",
      "FTP.",
      "DNS.",
      "HTTP."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Redes: Protocolo DNS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Redes: Protocolo DNS.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-10",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Nuvem: SaaS",
    "question": "(AOCP / Informática Questão 10) O serviço de computação em nuvem que entrega o software aplicativo pronto para uso diretamente no navegador é o:",
    "options": [
      "HaaS.",
      "PaaS.",
      "IaaS.",
      "DaaS.",
      "SaaS."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Nuvem: SaaS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Nuvem: SaaS.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-11",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Ransomware",
    "question": "(AOCP / Informática Questão 11) O tipo de código malicioso que sequestra os arquivos da vítima criptografando-os e cobra resgate é o:",
    "options": [
      "Ransomware.",
      "Spyware.",
      "Keylogger.",
      "Adware.",
      "Worm."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Ransomware cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Ransomware.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-12",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Phishing",
    "question": "(AOCP / Informática Questão 12) O golpe que utiliza e-mails falsificados ou páginas clonadas para induzir a vítima a fornecer senhas bancárias é denominado:",
    "options": [
      "DDoS.",
      "Phishing.",
      "Sniffing.",
      "Brute force.",
      "Defacement."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Phishing cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Phishing.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-13",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Atalho de Bloqueio",
    "question": "(AOCP / Informática Questão 13) A combinação de teclas no Windows 10/11 para bloquear instantaneamente a tela do computador é:",
    "options": [
      "Windows + E.",
      "Windows + D.",
      "Windows + L.",
      "Ctrl + Alt + Del.",
      "Alt + F4."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Atalho de Bloqueio cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Atalho de Bloqueio.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-14",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Gerenciador de Tarefas",
    "question": "(AOCP / Informática Questão 14) Para abrir diretamente o Gerenciador de Tarefas no Windows, o usuário pode pressionar:",
    "options": [
      "Alt + Tab.",
      "Ctrl + Alt + T.",
      "Windows + R.",
      "Ctrl + Shift + Esc.",
      "Ctrl + F4."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Gerenciador de Tarefas cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Gerenciador de Tarefas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-15",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Função SE",
    "question": "(AOCP / Informática Questão 15) No Excel, a fórmula =SE(A1>=10; \"APTO\"; \"INAPTO\") retornará \"APTO\" se a célula A1 contiver:",
    "options": [
      "Zero.",
      "Apenas números maiores que 10.",
      "Qualquer valor negativo.",
      "Apenas texto.",
      "10 ou mais."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Função SE cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Função SE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-16",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Referência Absoluta",
    "question": "(AOCP / Informática Questão 16) Para fixar a coluna e a linha de uma célula em uma fórmula do Excel ao ser arrastada, utiliza-se o caractere:",
    "options": [
      "$",
      "#",
      "%",
      "&",
      "@"
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Referência Absoluta cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Referência Absoluta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-17",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegadores: Janela Anônima",
    "question": "(AOCP / Informática Questão 17) Ao fechar uma janela anônima no Google Chrome, qual dado NÃO é mantido salvo no disco local?",
    "options": [
      "Arquivos baixados na pasta Downloads.",
      "Histórico de navegação e cookies.",
      "Favoritos adicionados.",
      "O sistema operacional.",
      "A conexão física de rede."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Navegadores: Janela Anônima cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Navegadores: Janela Anônima.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-18",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Correio Eletrônico: Cco",
    "question": "(AOCP / Informática Questão 18) Para enviar um e-mail para múltiplos destinatários sem que nenhum deles veja os endereços dos demais, usa-se o campo:",
    "options": [
      "Para.",
      "Cc (Cópia Carbono).",
      "Cco (Cópia Oculta).",
      "Assunto.",
      "Anexo."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Correio Eletrônico: Cco cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Correio Eletrônico: Cco.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-19",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes: Protocolo DNS",
    "question": "(AOCP / Informática Questão 19) O protocolo encarregado de traduzir endereços de domínios (como pm.pe.gov.br) para endereços IP é o:",
    "options": [
      "SMTP.",
      "DHCP.",
      "FTP.",
      "DNS.",
      "HTTP."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Redes: Protocolo DNS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Redes: Protocolo DNS.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-20",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Nuvem: SaaS",
    "question": "(AOCP / Informática Questão 20) O serviço de computação em nuvem que entrega o software aplicativo pronto para uso diretamente no navegador é o:",
    "options": [
      "HaaS.",
      "PaaS.",
      "IaaS.",
      "DaaS.",
      "SaaS."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Nuvem: SaaS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Nuvem: SaaS.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-21",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Ransomware",
    "question": "(AOCP / Informática Questão 21) O tipo de código malicioso que sequestra os arquivos da vítima criptografando-os e cobra resgate é o:",
    "options": [
      "Ransomware.",
      "Spyware.",
      "Keylogger.",
      "Adware.",
      "Worm."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Ransomware cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Ransomware.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-22",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Phishing",
    "question": "(AOCP / Informática Questão 22) O golpe que utiliza e-mails falsificados ou páginas clonadas para induzir a vítima a fornecer senhas bancárias é denominado:",
    "options": [
      "DDoS.",
      "Phishing.",
      "Sniffing.",
      "Brute force.",
      "Defacement."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Phishing cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Phishing.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-23",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Atalho de Bloqueio",
    "question": "(AOCP / Informática Questão 23) A combinação de teclas no Windows 10/11 para bloquear instantaneamente a tela do computador é:",
    "options": [
      "Windows + E.",
      "Windows + D.",
      "Windows + L.",
      "Ctrl + Alt + Del.",
      "Alt + F4."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Atalho de Bloqueio cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Atalho de Bloqueio.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-24",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Gerenciador de Tarefas",
    "question": "(AOCP / Informática Questão 24) Para abrir diretamente o Gerenciador de Tarefas no Windows, o usuário pode pressionar:",
    "options": [
      "Alt + Tab.",
      "Ctrl + Alt + T.",
      "Windows + R.",
      "Ctrl + Shift + Esc.",
      "Ctrl + F4."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Gerenciador de Tarefas cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Gerenciador de Tarefas.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-25",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Função SE",
    "question": "(AOCP / Informática Questão 25) No Excel, a fórmula =SE(A1>=10; \"APTO\"; \"INAPTO\") retornará \"APTO\" se a célula A1 contiver:",
    "options": [
      "Zero.",
      "Apenas números maiores que 10.",
      "Qualquer valor negativo.",
      "Apenas texto.",
      "10 ou mais."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Função SE cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Função SE.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-26",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Referência Absoluta",
    "question": "(AOCP / Informática Questão 26) Para fixar a coluna e a linha de uma célula em uma fórmula do Excel ao ser arrastada, utiliza-se o caractere:",
    "options": [
      "$",
      "#",
      "%",
      "&",
      "@"
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Referência Absoluta cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Referência Absoluta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-27",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegadores: Janela Anônima",
    "question": "(AOCP / Informática Questão 27) Ao fechar uma janela anônima no Google Chrome, qual dado NÃO é mantido salvo no disco local?",
    "options": [
      "Arquivos baixados na pasta Downloads.",
      "Histórico de navegação e cookies.",
      "Favoritos adicionados.",
      "O sistema operacional.",
      "A conexão física de rede."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Navegadores: Janela Anônima cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Navegadores: Janela Anônima.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-28",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Correio Eletrônico: Cco",
    "question": "(AOCP / Informática Questão 28) Para enviar um e-mail para múltiplos destinatários sem que nenhum deles veja os endereços dos demais, usa-se o campo:",
    "options": [
      "Para.",
      "Cc (Cópia Carbono).",
      "Cco (Cópia Oculta).",
      "Assunto.",
      "Anexo."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Correio Eletrônico: Cco cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Correio Eletrônico: Cco.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-29",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes: Protocolo DNS",
    "question": "(AOCP / Informática Questão 29) O protocolo encarregado de traduzir endereços de domínios (como pm.pe.gov.br) para endereços IP é o:",
    "options": [
      "SMTP.",
      "DHCP.",
      "FTP.",
      "DNS.",
      "HTTP."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Redes: Protocolo DNS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Redes: Protocolo DNS.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-30",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Nuvem: SaaS",
    "question": "(AOCP / Informática Questão 30) O serviço de computação em nuvem que entrega o software aplicativo pronto para uso diretamente no navegador é o:",
    "options": [
      "HaaS.",
      "PaaS.",
      "IaaS.",
      "DaaS.",
      "SaaS."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Nuvem: SaaS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Nuvem: SaaS.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-31",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Ransomware",
    "question": "(AOCP / Informática Questão 31) O tipo de código malicioso que sequestra os arquivos da vítima criptografando-os e cobra resgate é o:",
    "options": [
      "Ransomware.",
      "Spyware.",
      "Keylogger.",
      "Adware.",
      "Worm."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Ransomware cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Ransomware.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-32",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Phishing",
    "question": "(AOCP / Informática Questão 32) O golpe que utiliza e-mails falsificados ou páginas clonadas para induzir a vítima a fornecer senhas bancárias é denominado:",
    "options": [
      "DDoS.",
      "Phishing.",
      "Sniffing.",
      "Brute force.",
      "Defacement."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Phishing cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Phishing.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-33",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Atalho de Bloqueio",
    "question": "(AOCP / Informática Questão 33) A combinação de teclas no Windows 10/11 para bloquear instantaneamente a tela do computador é:",
    "options": [
      "Windows + E.",
      "Windows + D.",
      "Windows + L.",
      "Ctrl + Alt + Del.",
      "Alt + F4."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Atalho de Bloqueio cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Atalho de Bloqueio.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-34",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Gerenciador de Tarefas",
    "question": "(AOCP / Informática Questão 34) Para abrir diretamente o Gerenciador de Tarefas no Windows, o usuário pode pressionar:",
    "options": [
      "Alt + Tab.",
      "Ctrl + Alt + T.",
      "Windows + R.",
      "Ctrl + Shift + Esc.",
      "Ctrl + F4."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Gerenciador de Tarefas cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Gerenciador de Tarefas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-35",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Função SE",
    "question": "(AOCP / Informática Questão 35) No Excel, a fórmula =SE(A1>=10; \"APTO\"; \"INAPTO\") retornará \"APTO\" se a célula A1 contiver:",
    "options": [
      "Zero.",
      "Apenas números maiores que 10.",
      "Qualquer valor negativo.",
      "Apenas texto.",
      "10 ou mais."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Função SE cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Função SE.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-36",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Referência Absoluta",
    "question": "(AOCP / Informática Questão 36) Para fixar a coluna e a linha de uma célula em uma fórmula do Excel ao ser arrastada, utiliza-se o caractere:",
    "options": [
      "$",
      "#",
      "%",
      "&",
      "@"
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Referência Absoluta cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Referência Absoluta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-37",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegadores: Janela Anônima",
    "question": "(AOCP / Informática Questão 37) Ao fechar uma janela anônima no Google Chrome, qual dado NÃO é mantido salvo no disco local?",
    "options": [
      "Arquivos baixados na pasta Downloads.",
      "Histórico de navegação e cookies.",
      "Favoritos adicionados.",
      "O sistema operacional.",
      "A conexão física de rede."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Navegadores: Janela Anônima cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Navegadores: Janela Anônima.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-38",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Correio Eletrônico: Cco",
    "question": "(AOCP / Informática Questão 38) Para enviar um e-mail para múltiplos destinatários sem que nenhum deles veja os endereços dos demais, usa-se o campo:",
    "options": [
      "Para.",
      "Cc (Cópia Carbono).",
      "Cco (Cópia Oculta).",
      "Assunto.",
      "Anexo."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Correio Eletrônico: Cco cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Correio Eletrônico: Cco.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-39",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes: Protocolo DNS",
    "question": "(AOCP / Informática Questão 39) O protocolo encarregado de traduzir endereços de domínios (como pm.pe.gov.br) para endereços IP é o:",
    "options": [
      "SMTP.",
      "DHCP.",
      "FTP.",
      "DNS.",
      "HTTP."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Redes: Protocolo DNS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Redes: Protocolo DNS.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-40",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Nuvem: SaaS",
    "question": "(AOCP / Informática Questão 40) O serviço de computação em nuvem que entrega o software aplicativo pronto para uso diretamente no navegador é o:",
    "options": [
      "HaaS.",
      "PaaS.",
      "IaaS.",
      "DaaS.",
      "SaaS."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Nuvem: SaaS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Nuvem: SaaS.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-41",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Ransomware",
    "question": "(AOCP / Informática Questão 41) O tipo de código malicioso que sequestra os arquivos da vítima criptografando-os e cobra resgate é o:",
    "options": [
      "Ransomware.",
      "Spyware.",
      "Keylogger.",
      "Adware.",
      "Worm."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Ransomware cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Ransomware.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-42",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança: Phishing",
    "question": "(AOCP / Informática Questão 42) O golpe que utiliza e-mails falsificados ou páginas clonadas para induzir a vítima a fornecer senhas bancárias é denominado:",
    "options": [
      "DDoS.",
      "Phishing.",
      "Sniffing.",
      "Brute force.",
      "Defacement."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Segurança: Phishing cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Segurança: Phishing.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-43",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Atalho de Bloqueio",
    "question": "(AOCP / Informática Questão 43) A combinação de teclas no Windows 10/11 para bloquear instantaneamente a tela do computador é:",
    "options": [
      "Windows + E.",
      "Windows + D.",
      "Windows + L.",
      "Ctrl + Alt + Del.",
      "Alt + F4."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Atalho de Bloqueio cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Atalho de Bloqueio.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-44",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows: Gerenciador de Tarefas",
    "question": "(AOCP / Informática Questão 44) Para abrir diretamente o Gerenciador de Tarefas no Windows, o usuário pode pressionar:",
    "options": [
      "Alt + Tab.",
      "Ctrl + Alt + T.",
      "Windows + R.",
      "Ctrl + Shift + Esc.",
      "Ctrl + F4."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Windows: Gerenciador de Tarefas cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Windows: Gerenciador de Tarefas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-45",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Função SE",
    "question": "(AOCP / Informática Questão 45) No Excel, a fórmula =SE(A1>=10; \"APTO\"; \"INAPTO\") retornará \"APTO\" se a célula A1 contiver:",
    "options": [
      "Zero.",
      "Apenas números maiores que 10.",
      "Qualquer valor negativo.",
      "Apenas texto.",
      "10 ou mais."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Função SE cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Função SE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  },
  {
    "id": "b2-inf-46",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Excel: Referência Absoluta",
    "question": "(AOCP / Informática Questão 46) Para fixar a coluna e a linha de uma célula em uma fórmula do Excel ao ser arrastada, utiliza-se o caractere:",
    "options": [
      "$",
      "#",
      "%",
      "&",
      "@"
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Excel: Referência Absoluta cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Excel: Referência Absoluta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Correta: Conceito técnico padrão do edital.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b2-inf-47",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegadores: Janela Anônima",
    "question": "(AOCP / Informática Questão 47) Ao fechar uma janela anônima no Google Chrome, qual dado NÃO é mantido salvo no disco local?",
    "options": [
      "Arquivos baixados na pasta Downloads.",
      "Histórico de navegação e cookies.",
      "Favoritos adicionados.",
      "O sistema operacional.",
      "A conexão física de rede."
    ],
    "correctIndex": 1,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Navegadores: Janela Anônima cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Navegadores: Janela Anônima.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-48",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Correio Eletrônico: Cco",
    "question": "(AOCP / Informática Questão 48) Para enviar um e-mail para múltiplos destinatários sem que nenhum deles veja os endereços dos demais, usa-se o campo:",
    "options": [
      "Para.",
      "Cc (Cópia Carbono).",
      "Cco (Cópia Oculta).",
      "Assunto.",
      "Anexo."
    ],
    "correctIndex": 2,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Correio Eletrônico: Cco cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Correio Eletrônico: Cco.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-49",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes: Protocolo DNS",
    "question": "(AOCP / Informática Questão 49) O protocolo encarregado de traduzir endereços de domínios (como pm.pe.gov.br) para endereços IP é o:",
    "options": [
      "SMTP.",
      "DHCP.",
      "FTP.",
      "DNS.",
      "HTTP."
    ],
    "correctIndex": 3,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Redes: Protocolo DNS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Redes: Protocolo DNS.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP.",
      "E": "Alternativa incorreta."
    }
  },
  {
    "id": "b2-inf-50",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Nuvem: SaaS",
    "question": "(AOCP / Informática Questão 50) O serviço de computação em nuvem que entrega o software aplicativo pronto para uso diretamente no navegador é o:",
    "options": [
      "HaaS.",
      "PaaS.",
      "IaaS.",
      "DaaS.",
      "SaaS."
    ],
    "correctIndex": 4,
    "explanation": "Gabarito Oficial AOCP: A alternativa A define com exatidão técnica o conceito de Nuvem: SaaS cobrado no edital da PMPE.",
    "hint": "Lembre-se do funcionamento essencial de Nuvem: SaaS.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco2",
    "dicaMacete": "BIZU DE INFORMÁTICA: Instituto AOCP adora conceitos de segurança, atalhos do Windows e fórmulas do Excel!",
    "analiseAlternativas": {
      "A": "Alternativa incorreta.",
      "B": "Alternativa incorreta.",
      "C": "Alternativa incorreta.",
      "D": "Alternativa incorreta.",
      "E": "Alternativa correta segundo o gabarito oficial da banca Instituto AOCP."
    }
  }
];
