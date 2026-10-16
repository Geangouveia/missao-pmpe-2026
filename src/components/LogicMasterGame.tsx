import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft,
  RotateCcw, 
  Award, 
  Flame, 
  Zap,
  TrendingUp,
  Percent,
  Shuffle,
  BookOpen,
  Filter
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

export interface RlmQuestion {
  id: string;
  topicId: 'dados' | 'urnas' | 'proporcao' | 'porcentagem' | 'combinatoria' | 'conjuntos' | 'logica';
  topicLabel: string;
  enunciado: string;
  options: string[];
  correctIndex: number;
  explicacao: string;
  passoAPassoCalculo: string[];
  formulaOuMacete: string;
}

export const RLM_TOPICS = [
  { id: 'todos', label: 'Todas as Questões', icon: '🎯' },
  { id: 'dados', label: 'Dados & Lançamentos', icon: '🎲' },
  { id: 'urnas', label: 'Urnas & Bolas', icon: '🎱' },
  { id: 'proporcao', label: 'Proporção & Regra 3', icon: '⚖️' },
  { id: 'porcentagem', label: 'Porcentagem', icon: '📈' },
  { id: 'combinatoria', label: 'Análise Combinatória', icon: '🔀' },
  { id: 'conjuntos', label: 'Conjuntos & Venn', icon: '👥' },
  { id: 'logica', label: 'Lógica Proposicional', icon: '🧩' },
] as const;

export const RLM_QUESTION_BANK: RlmQuestion[] = [
  // ==================== TÓPICO: DADOS & LANÇAMENTOS ====================
  {
    id: 'rlm-dado-0',
    topicId: 'dados',
    topicLabel: 'Dados & Probabilidade Básica',
    enunciado: 'Fulano possui um dado comum não viciado de 6 faces, com as faces numeradas de 1 a 6. Ele lança esse dado uma única vez sobre a mesa. Qual é a probabilidade exata de que o número obtido na face superior seja um número PAR ou um número MAIOR QUE 4?',
    options: [
      'A) 1/3 (ou ~33,3%)',
      'B) 1/2 (ou 50%)',
      'C) 2/3 (ou ~66,7%)',
      'D) 5/6 (ou ~83,3%)',
      'E) 1/6 (ou ~16,6%)'
    ],
    correctIndex: 2,
    explicacao: 'Espaço amostral = {1, 2, 3, 4, 5, 6} (6 casos). Números pares: A = {2, 4, 6}. Números maiores que 4: B = {5, 6}. A união A ∪ B = {2, 4, 5, 6} -> 4 casos favoráveis. P = 4 / 6 = 2 / 3 (~66,67%).',
    passoAPassoCalculo: [
      'Passo 1: Espaço amostral do dado não viciado: {1, 2, 3, 4, 5, 6} -> 6 possibilidades.',
      'Passo 2: Evento A (número par): {2, 4, 6} (3 possibilidades).',
      'Passo 3: Evento B (número maior que 4): {5, 6} (2 possibilidades).',
      'Passo 4: Intersecção (par E maior que 4): {6} (1 possibilidade).',
      'Passo 5: União pela regra da probabilidade: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
      '  P = (3/6) + (2/6) - (1/6) = 4/6 = 2/3.',
      'Passo 6: Alternativa correta: C (2/3).'
    ],
    formulaOuMacete: 'Regra da União: P(A ou B) = P(A) + P(B) - P(A e B) = 3/6 + 2/6 - 1/6 = 4/6 = 2/3.'
  },
  {
    id: 'rlm-dado-1',
    topicId: 'dados',
    topicLabel: 'Contagem de Faces & PFC',
    enunciado: 'João possui 8 dados comuns não viciados de 6 faces cada (numeradas de 1 a 6). Se João lançar simultaneamente 2 desses dados sobre uma mesa, qual é o número TOTAL de pares de resultados possíveis (espaço amostral) que podem ser obtidos?',
    options: [
      'A) 12 resultados possíveis',
      'B) 16 resultados possíveis',
      'C) 36 resultados possíveis',
      'D) 48 resultados possíveis',
      'E) 64 resultados possíveis'
    ],
    correctIndex: 2,
    explicacao: 'Pelo Princípio Fundamental da Contagem (PFC), ao lançar 2 dados de 6 faces, o 1º dado possui 6 possibilidades e o 2º dado também possui 6 possibilidades. Total = 6 x 6 = 36 resultados possíveis.',
    passoAPassoCalculo: [
      'Passo 1: Identificar as opções do 1º dado = 6 faces (1, 2, 3, 4, 5, 6).',
      'Passo 2: Identificar as opções do 2º dado = 6 faces (1, 2, 3, 4, 5, 6).',
      'Passo 3: Multiplicar pelo PFC: 6 x 6 = 36 pares ordenados possíveis.',
      'Passo 4: Atenção da Banca AOCP: ter 8 dados na mão é apenas o contexto narrativo; apenas 2 foram lançados!'
    ],
    formulaOuMacete: 'Total de casos em n dados de 6 faces = 6^n. Para 2 dados = 6² = 36.'
  },
  {
    id: 'rlm-dado-2',
    topicId: 'dados',
    topicLabel: 'Soma de Dois Dados',
    enunciado: 'No lançamento simultâneo de dois dados comuns de 6 faces não viciados, qual é a probabilidade exata de que a SOMA das duas faces voltadas para cima seja igual a 7?',
    options: [
      'A) 1/12 (ou ~8,33%)',
      'B) 1/6 (ou ~16,67%)',
      'C) 7/36 (ou ~19,44%)',
      'D) 5/36 (ou ~13,88%)',
      'E) 1/4 (ou 25%)'
    ],
    correctIndex: 1,
    explicacao: 'O total de casos possíveis é 36 (6 x 6). Os pares cuja soma é 7 são: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 pares favoráveis. Probabilidade = 6 / 36 = 1 / 6.',
    passoAPassoCalculo: [
      'Passo 1: Espaço amostral total = 6 x 6 = 36 pares.',
      'Passo 2: Listar as combinações cuja soma dá 7:',
      '  1 + 6 = 7',
      '  2 + 5 = 7',
      '  3 + 4 = 7',
      '  4 + 3 = 7',
      '  5 + 2 = 7',
      '  6 + 1 = 7',
      'Passo 3: Total de casos favoráveis = 6 pares.',
      'Passo 4: Fração da probabilidade: P = 6 / 36.',
      'Passo 5: Simplificar dividindo por 6: P = 1 / 6.'
    ],
    formulaOuMacete: 'Macete da soma 7: O número 7 é a soma mais frequente em 2 dados (possui 6 pares em 36 = 1/6).'
  },
  {
    id: 'rlm-dado-3',
    topicId: 'dados',
    topicLabel: 'Números Primos no Dado',
    enunciado: 'Lançando-se um dado comum não viciado de 6 faces, qual é a probabilidade de se obter um número que seja PRIMO?',
    options: [
      'A) 1/6 (ou ~16,6%)',
      'B) 1/3 (ou ~33,3%)',
      'C) 1/2 (ou 50%)',
      'D) 2/3 (ou ~66,7%)',
      'E) 5/6 (ou ~83,3%)'
    ],
    correctIndex: 2,
    explicacao: 'As 6 faces são {1, 2, 3, 4, 5, 6}. Os números primos desse conjunto são 2, 3 e 5 (total de 3 números). O número 1 NÃO é primo. P = 3 / 6 = 1 / 2 = 50%.',
    passoAPassoCalculo: [
      'Passo 1: Espaço amostral = {1, 2, 3, 4, 5, 6} -> 6 números no total.',
      'Passo 2: Identificar os números primos (divisíveis apenas por 1 e por si mesmos, maiores que 1):',
      '  - 2 é primo (único par primo)',
      '  - 3 é primo',
      '  - 5 é primo',
      '  - 1 NÃO é primo por definição matemática!',
      'Passo 3: Casos favoráveis = 3 (números 2, 3 e 5).',
      'Passo 4: P = 3 / 6 = 1 / 2 = 50%.'
    ],
    formulaOuMacete: 'No dado de 6 faces: Primos são {2, 3, 5} -> exatamente a metade (50%)!'
  },
  {
    id: 'rlm-dado-4',
    topicId: 'dados',
    topicLabel: 'Lançamento de Três Dados',
    enunciado: 'Se forem lançados 3 dados comuns de 6 faces simultaneamente, qual é o número total de resultados possíveis dessa experiência?',
    options: [
      'A) 18',
      'B) 72',
      'C) 108',
      'D) 216',
      'E) 256'
    ],
    correctIndex: 3,
    explicacao: 'Pelo Princípio Fundamental da Contagem: 6 x 6 x 6 = 6³ = 216 resultados possíveis.',
    passoAPassoCalculo: [
      'Passo 1: 1º dado tem 6 faces.',
      'Passo 2: 2º dado tem 6 faces.',
      'Passo 3: 3º dado tem 6 faces.',
      'Passo 4: Cálculo: 6 x 6 x 6 = 36 x 6 = 216 resultados possíveis.'
    ],
    formulaOuMacete: '6 elevado ao número de dados: 6³ = 216.'
  },
  {
    id: 'rlm-dado-5',
    topicId: 'dados',
    topicLabel: 'Pelo Menos Um Seis no Dado',
    enunciado: 'Dois dados comuns de 6 faces não viciados são lançados simultaneamente. Qual é a probabilidade de que saia pelo menos um número 6?',
    options: [
      'A) 1/36',
      'B) 6/36 (1/6)',
      'C) 11/36',
      'D) 12/36 (1/3)',
      'E) 25/36'
    ],
    correctIndex: 2,
    explicacao: 'Pelo método do complementar: P(Pelo menos um 6) = 1 - P(Nenhum 6). A chance de não sair 6 em um dado é 5/6. Em dois dados: (5/6) x (5/6) = 25/36. Logo: 1 - 25/36 = 11/36.',
    passoAPassoCalculo: [
      'Passo 1: Espaço amostral total = 36.',
      'Passo 2: Casos em que NÃO sai 6 no 1º dado (5 opções: 1,2,3,4,5) E NÃO sai 6 no 2º dado (5 opções).',
      'Passo 3: Total de casos sem nenhum 6 = 5 x 5 = 25 casos.',
      'Passo 4: Casos com pelo menos um 6 = Total - Sem nenhum 6 = 36 - 25 = 11 casos.',
      'Passo 5: Probabilidade = 11 / 36.'
    ],
    formulaOuMacete: 'Macete do complementar: P(Pelo menos 1) = 1 - P(Nenhum) = 1 - (5/6)² = 1 - 25/36 = 11/36.'
  },

  // ==================== TÓPICO: URNAS & BOLAS ====================
  {
    id: 'rlm-urna-1',
    topicId: 'urnas',
    topicLabel: 'Urnas sem Reposição',
    enunciado: 'Em uma caixa de munições da reserva de armas há 10 cartuchos de fuzil 5.56mm e 15 cartuchos de pistola 9mm (total de 25 cartuchos). Retirando-se sucessivamente e SEM REPOSIÇÃO dois cartuchos da caixa, qual é a probabilidade exata de que AMBOS os cartuchos retirados sejam de fuzil 5.56mm?',
    options: [
      'A) 4/25 (16%)',
      'B) 3/20 (15%)',
      'C) 2/15 (ou ~13,33%)',
      'D) 1/10 (10%)',
      'E) 9/50 (18%)'
    ],
    correctIndex: 1,
    explicacao: '1ª retirada: 10/25. Como é SEM REPOSIÇÃO, restam 9 cartuchos de fuzil e 24 no total. 2ª retirada: 9/24. P = (10/25) x (9/24) = (2/5) x (3/8) = 6/40 = 3/20 = 15%.',
    passoAPassoCalculo: [
      'Passo 1: Total inicial = 10 (fuzil) + 15 (pistola) = 25 cartuchos.',
      'Passo 2: Probabilidade do 1º fuzil = 10 / 25 (simplifica por 5 -> 2/5).',
      'Passo 3: Como NÃO há reposição, agora restam 9 de fuzil e 24 no total.',
      'Passo 4: Probabilidade do 2º fuzil = 9 / 24 (simplifica por 3 -> 3/8).',
      'Passo 5: Multiplicar pelo conectivo "E": (2/5) x (3/8) = 6/40.',
      'Passo 6: Simplificar dividindo por 2: 3/20.',
      'Passo 7: Converter para porcentagem: (3 / 20) x 100 = 15%.'
    ],
    formulaOuMacete: 'Sem reposição SEMPRE desconta 1 do numerador e 1 do denominador: (10/25) x (9/24) = 3/20.'
  },
  {
    id: 'rlm-urna-2',
    topicId: 'urnas',
    topicLabel: 'Sorteio Simultâneo de Processos',
    enunciado: 'Uma urna da corregedoria contém 12 processos disciplinares, dos quais 8 são de natureza leve e 4 são de natureza grave. Sorteando-se ao acaso e simultaneamente 2 processos, qual é a probabilidade de que os DOIS sejam de natureza grave?',
    options: [
      'A) 1/11 (ou ~9,09%)',
      'B) 1/9 (ou ~11,11%)',
      'C) 1/6 (ou ~16,67%)',
      'D) 2/33 (ou ~6,06%)',
      'E) 1/3 (ou ~33,33%)'
    ],
    correctIndex: 0,
    explicacao: '1º processo grave = 4/12. 2º processo grave = 3/11. P = (4/12) x (3/11) = (1/3) x (3/11) = 3/33 = 1/11.',
    passoAPassoCalculo: [
      'Passo 1: Total de processos = 12 (8 leves + 4 graves).',
      'Passo 2: P(1º grave) = 4 / 12 = 1 / 3.',
      'Passo 3: P(2º grave) = 3 / 11.',
      'Passo 4: Multiplicação: (1 / 3) x (3 / 11) = 3 / 33.',
      'Passo 5: Simplificar dividindo por 3: 1 / 11.'
    ],
    formulaOuMacete: 'P = (4/12) x (3/11) = 1/11. O número 3 no numerador e denominador se cancelam!'
  },
  {
    id: 'rlm-urna-3',
    topicId: 'urnas',
    topicLabel: 'Composição de Grupos',
    enunciado: 'Em uma sala há 6 homens e 4 mulheres policiais. Escolhendo-se 2 policiais ao acaso, qual é a probabilidade de ser escolhido UM HOMEM E UMA MULHER (em qualquer ordem)?',
    options: [
      'A) 24/45 (ou 8/15, ~53,3%)',
      'B) 12/45 (ou 4/15, ~26,7%)',
      'C) 1/2 (50%)',
      'D) 2/5 (40%)',
      'E) 3/10 (30%)'
    ],
    correctIndex: 0,
    explicacao: 'Ordem Homem e depois Mulher: (6/10) x (4/9) = 24/90. Ordem Mulher e depois Homem: (4/10) x (6/9) = 24/90. Como a ordem não foi especificada, somam-se os dois casos: 24/90 + 24/90 = 48/90 = 8/15 (ou 24/45).',
    passoAPassoCalculo: [
      'Passo 1: Total de pessoas = 10 (6 homens + 4 mulheres).',
      'Passo 2: Caso 1 (Homem e Mulher): (6/10) x (4/9) = 24/90.',
      'Passo 3: Caso 2 (Mulher e Homem): (4/10) x (6/9) = 24/90.',
      'Passo 4: Soma dos dois casos: 24/90 + 24/90 = 48/90.',
      'Passo 5: Simplificar dividindo por 6: 48/6 = 8, 90/6 = 15 -> 8/15 (equivale a 24/45).'
    ],
    formulaOuMacete: 'Quando a ordem não é fixa, multiplica por 2: 2 x [(6/10) x (4/9)] = 48/90 = 8/15.'
  },
  {
    id: 'rlm-urna-4',
    topicId: 'urnas',
    topicLabel: 'Bolas Pretas e Brancas',
    enunciado: 'Uma urna contém 5 bolas pretas, 4 bolas brancas e 3 bolas vermelhas (total de 12 bolas). Retirando-se uma única bola ao acaso, qual é a probabilidade de que a bola retirada NÃO seja branca?',
    options: [
      'A) 1/3 (ou ~33,3%)',
      'B) 2/3 (ou ~66,7%)',
      'C) 5/12 (ou ~41,7%)',
      'D) 7/12 (ou ~58,3%)',
      'E) 3/4 (ou 75%)'
    ],
    correctIndex: 1,
    explicacao: 'Total = 12 bolas. Bolas não brancas = pretas (5) + vermelhas (3) = 8 bolas. P = 8 / 12 = 2 / 3.',
    passoAPassoCalculo: [
      'Passo 1: Total de bolas na urna: 5 + 4 + 3 = 12 bolas.',
      'Passo 2: Bolas que atendem à condição (NÃO ser branca): 5 (pretas) + 3 (vermelhas) = 8 bolas.',
      'Passo 3: Fração de probabilidade: P = 8 / 12.',
      'Passo 4: Simplificando por 4: P = 2 / 3.'
    ],
    formulaOuMacete: 'Evento complementar: 1 - P(Branca) = 1 - (4/12) = 1 - 1/3 = 2/3.'
  },

  // ==================== TÓPICO: RAZÃO, PROPORÇÃO & REGRA DE TRÊS ====================
  {
    id: 'rlm-prop-1',
    topicId: 'proporcao',
    topicLabel: 'Razão Operacional de Viaturas',
    enunciado: 'A razão entre o número de viaturas de 4 rodas e motocicletas táticas em um batalhão é de 3 para 5. Sabendo que o batalhão possui 24 viaturas de 4 rodas, quantas motocicletas táticas esse batalhão possui?',
    options: [
      'A) 30 motocicletas',
      'B) 35 motocicletas',
      'C) 40 motocicletas',
      'D) 45 motocicletas',
      'E) 50 motocicletas'
    ],
    correctIndex: 2,
    explicacao: 'Razão: V / M = 3 / 5. Como V = 24: 24 / M = 3 / 5 -> 3M = 24 x 5 -> 3M = 120 -> M = 120 / 3 = 40 motocicletas.',
    passoAPassoCalculo: [
      'Passo 1: Montar a proporção: 3 / 5 = 24 / M.',
      'Passo 2: Multiplicação cruzada: 3 x M = 5 x 24.',
      'Passo 3: 3M = 120.',
      'Passo 4: Dividir: M = 120 / 3 = 40 motocicletas.'
    ],
    formulaOuMacete: 'Constante de proporcionalidade: 24 / 3 = 8 (fator 8). Logo, motos = 5 x 8 = 40!'
  },
  {
    id: 'rlm-prop-2',
    topicId: 'proporcao',
    topicLabel: 'Regra de Três Composta Militar',
    enunciado: 'Se 6 policiais militares realizam a vistoria de 120 veículos suspeitos em 4 horas de blitz, quantos veículos serão vistoriados por 9 policiais militares com a mesma produtividade durante 6 horas de blitz?',
    options: [
      'A) 180 veículos',
      'B) 240 veículos',
      'C) 270 veículos',
      'D) 300 veículos',
      'E) 360 veículos'
    ],
    correctIndex: 2,
    explicacao: 'Regra de três composta: Policiais (6 -> 9), Horas (4 -> 6), Veículos (120 -> x). As grandezas policiais e horas são diretamente proporcionais aos veículos. 120 / x = (6/9) x (4/6) = 24 / 54. Multiplicando: 24x = 120 x 54 -> 24x = 6.480 -> x = 270 veículos.',
    passoAPassoCalculo: [
      'Passo 1: Montar as grandezas:',
      '  Policiais: 6  |  Horas: 4  |  Veículos: 120',
      '  Policiais: 9  |  Horas: 6  |  Veículos: x',
      'Passo 2: Mais policiais -> Mais veículos (direta). Mais horas -> Mais veículos (direta).',
      'Passo 3: 120 / x = (6 / 9) x (4 / 6) = 4 / 9.',
      'Passo 4: Multiplicação cruzada: 4x = 120 x 9 = 1.080.',
      'Passo 5: Divisão: x = 1.080 / 4 = 270 veículos.'
    ],
    formulaOuMacete: 'Método Processo x Produto: (6 x 4) / 120 = (9 x 6) / x -> 24/120 = 54/x -> x = 270.'
  },
  {
    id: 'rlm-prop-3',
    topicId: 'proporcao',
    topicLabel: 'Divisão Proporcional de Verba',
    enunciado: 'Uma verba de recompensa de R$ 7.200,00 deve ser dividida entre 2 soldados de forma DIRETAMENTE PROPORCIONAL ao número de apreensões de armas de fogo realizadas no mês. O Soldado A realizou 5 apreensões e o Soldado B realizou 7 apreensões. Quanto recebeu o Soldado B?',
    options: [
      'A) R$ 3.000,00',
      'B) R$ 3.600,00',
      'C) R$ 4.200,00',
      'D) R$ 4.500,00',
      'E) R$ 4.800,00'
    ],
    correctIndex: 2,
    explicacao: 'Total de partes proporcionais = 5 + 7 = 12 partes. Valor de cada parte: 7.200 / 12 = R$ 600,00. O Soldado B tem 7 partes: 7 x 600 = R$ 4.200,00.',
    passoAPassoCalculo: [
      'Passo 1: Somar as partes proporcionais: 5 + 7 = 12 partes.',
      'Passo 2: Calcular o valor de cada parte: 7.200 / 12 = R$ 600,00.',
      'Passo 3: Calcular a quota do Soldado B (7 partes): 7 x 600 = R$ 4.200,00.',
      'Passo 4: (Soldado A recebeu 5 x 600 = R$ 3.000,00).'
    ],
    formulaOuMacete: 'Valor = (Total / Soma das partes) x Partes do indivíduo: (7.200 / 12) x 7 = 4.200.'
  },
  {
    id: 'rlm-prop-4',
    topicId: 'proporcao',
    topicLabel: 'Consumo de Combustível da Viatura',
    enunciado: 'Uma viatura patrulha consome 15 litros de combustível para percorrer 120 km. Mantendo essa mesma média de consumo, quantos litros serão necessários para percorrer 280 km?',
    options: [
      'A) 30 litros',
      'B) 32 litros',
      'C) 35 litros',
      'D) 38 litros',
      'E) 40 litros'
    ],
    correctIndex: 2,
    explicacao: 'Consumo por km: 120 / 15 = 8 km por litro. Para 280 km: 280 / 8 = 35 litros.',
    passoAPassoCalculo: [
      'Passo 1: Regra de três simples: 15 L ---> 120 km | x L ---> 280 km.',
      'Passo 2: 120x = 15 x 280 = 4.200.',
      'Passo 3: x = 4.200 / 120 = 35 litros.'
    ],
    formulaOuMacete: 'Rendimento = 120 / 15 = 8 km/L. 280 / 8 = 35 litros.'
  },
  {
    id: 'rlm-prop-5',
    topicId: 'proporcao',
    topicLabel: 'Proporção Inversa de Tempo e Efetivo',
    enunciado: 'Um grupo de 4 peritos criminais leva 6 dias para analisar todas as evidências de um caso complexo. Se o efetivo for aumentado para 8 peritos com a mesma capacidade técnica, em quantos dias o trabalho será concluído?',
    options: [
      'A) 2 dias',
      'B) 3 dias',
      'C) 4 dias',
      'D) 5 dias',
      'E) 12 dias'
    ],
    correctIndex: 1,
    explicacao: 'Grandeza inversamente proporcional: se o número de peritos dobra (de 4 para 8), o tempo necessário cai pela metade (de 6 para 3 dias). 4 x 6 = 8 x D -> 24 = 8D -> D = 3 dias.',
    passoAPassoCalculo: [
      'Passo 1: Identificar se é direta ou inversa: Mais peritos trabalham -> Menos dias de trabalho (INVERSA!).',
      'Passo 2: Em proporções inversas, o produto é constante: Peritos x Dias = Constante.',
      'Passo 3: 4 peritos x 6 dias = 24 peritos-dia.',
      'Passo 4: Com 8 peritos: 8 x D = 24 -> D = 24 / 8 = 3 dias.'
    ],
    formulaOuMacete: 'Inversamente proporcional: D2 = (P1 x D1) / P2 = (4 x 6) / 8 = 24 / 8 = 3 dias.'
  },

  // ==================== TÓPICO: PORCENTAGEM ====================
  {
    id: 'rlm-porc-1',
    topicId: 'porcentagem',
    topicLabel: 'Porcentagem de Efetivo',
    enunciado: 'Em um batalhão da PMPE com 450 policiais, 40% foram destacados para a Operação Carnaval em Olinda. Desses destacados, 20% são do grupamento de motociclistas (ROCAM). Quantos motociclistas desse batalhão foram destacados para Olinda?',
    options: [
      'A) 18 policiais',
      'B) 36 policiais',
      'C) 54 policiais',
      'D) 72 policiais',
      'E) 90 policiais'
    ],
    correctIndex: 1,
    explicacao: 'Total no batalhão = 450. Destacados = 40% de 450 = 0,40 x 450 = 180 policiais. Motociclistas = 20% de 180 = 0,20 x 180 = 36 policiais.',
    passoAPassoCalculo: [
      'Passo 1: Calcular 40% de 450:',
      '  450 x 0,40 = 180 policiais destacados.',
      'Passo 2: Calcular 20% de 180 (motociclistas):',
      '  180 x 0,20 = 36 policiais.',
      'Passo 3: Alternativa correta: 36 policiais.'
    ],
    formulaOuMacete: 'Porcentagem de porcentagem: 40% x 20% = 0,4 x 0,2 = 0,08 (8%). 8% de 450 = 450 x 0,08 = 36!'
  },
  {
    id: 'rlm-porc-2',
    topicId: 'porcentagem',
    topicLabel: 'Aumento e Desconto Sucessivo',
    enunciado: 'O preço de uma lanterna tática militar de alta potência era de R$ 200,00. Na primeira semana do mês sofreu um aumento de 20%, e na semana seguinte teve um desconto de 10% sobre o novo valor. Qual é o preço final da lanterna?',
    options: [
      'A) R$ 210,00',
      'B) R$ 216,00',
      'C) R$ 220,00',
      'D) R$ 224,00',
      'E) R$ 230,00'
    ],
    correctIndex: 1,
    explicacao: 'Valor inicial = R$ 200,00. Aumento de 20%: 200 x 1,20 = R$ 240,00. Desconto de 10% sobre R$ 240: 240 x 0,90 = R$ 216,00.',
    passoAPassoCalculo: [
      'Passo 1: Valor inicial = R$ 200,00.',
      'Passo 2: Aumento de 20% = R$ 200 x 0,20 = R$ 40,00 -> Novo valor = R$ 240,00.',
      'Passo 3: Desconto de 10% SOBRE R$ 240,00:',
      '  R$ 240,00 x 0,10 = R$ 24,00.',
      'Passo 4: Valor final = R$ 240,00 - R$ 24,00 = R$ 216,00.'
    ],
    formulaOuMacete: 'Aumentos e descontos sucessivos se multiplicam pelos fatores: 200 x 1,20 x 0,90 = R$ 216,00!'
  },
  {
    id: 'rlm-porc-3',
    topicId: 'porcentagem',
    topicLabel: 'Aprovação em Concurso Público',
    enunciado: 'Em um concurso público da PMPE com 60.000 inscritos, 15% faltaram no dia da prova. Dos candidatos presentes, 8% foram aprovados para o TAF (Teste de Aptidão Física). Quantos candidatos foram aprovados para o TAF?',
    options: [
      'A) 3.680 candidatos',
      'B) 4.080 candidatos',
      'C) 4.500 candidatos',
      'D) 5.100 candidatos',
      'E) 6.000 candidatos'
    ],
    correctIndex: 1,
    explicacao: 'Inscritos = 60.000. Faltosos = 15% -> Presentes = 85% de 60.000 = 60.000 x 0,85 = 51.000 candidatos. Aprovados para o TAF = 8% de 51.000 = 51.000 x 0,08 = 4.080 candidatos.',
    passoAPassoCalculo: [
      'Passo 1: Total de inscritos = 60.000.',
      'Passo 2: Se 15% faltaram, compareceram 100% - 15% = 85%.',
      'Passo 3: Candidatos presentes: 60.000 x 0,85 = 51.000.',
      'Passo 4: 8% dos presentes foram aprovados: 51.000 x 0,08 = 4.080 candidatos.'
    ],
    formulaOuMacete: 'Sempre calcule a porcentagem dos que realmente COMPARECERAM: 60.000 x 0,85 x 0,08 = 4.080.'
  },
  {
    id: 'rlm-porc-4',
    topicId: 'porcentagem',
    topicLabel: 'Reajuste Remuneratório',
    enunciado: 'Um soldado que recebia R$ 3.500,00 foi promovido a Cabo com um reajuste de 14%. Qual passou a ser a nova remuneração do militar?',
    options: [
      'A) R$ 3.850,00',
      'B) R$ 3.920,00',
      'C) R$ 3.990,00',
      'D) R$ 4.050,00',
      'E) R$ 4.200,00'
    ],
    correctIndex: 2,
    explicacao: 'Aumento = 14% de 3.500 = 3.500 x 0,14 = R$ 490,00. Novo salário = 3.500 + 490 = R$ 3.990,00.',
    passoAPassoCalculo: [
      'Passo 1: Calcular 14% de R$ 3.500,00: 3.500 x 0,14 = 490,00.',
      'Passo 2: Somar ao salário base: 3.500 + 490 = R$ 3.990,00.'
    ],
    formulaOuMacete: 'Multiplicação direta por 1,14: 3.500 x 1,14 = R$ 3.990,00.'
  },

  // ==================== TÓPICO: ANÁLISE COMBINATÓRIA & PFC ====================
  {
    id: 'rlm-comb-1',
    topicId: 'combinatoria',
    topicLabel: 'Combinações de Equipes Policiais',
    enunciado: 'Um capitão da PMPE precisa escolher 3 soldados entre um grupo de 7 soldados disponíveis para formar uma patrulha a pé. De quantas maneiras diferentes essa patrulha pode ser escolhida?',
    options: [
      'A) 21 maneiras',
      'B) 35 maneiras',
      'C) 42 maneiras',
      'D) 70 maneiras',
      'E) 210 maneiras'
    ],
    correctIndex: 1,
    explicacao: 'Na patrulha a pé a ordem de escolha NÃO importa. Trata-se de combinação simples: C(7,3) = (7 x 6 x 5) / (3 x 2 x 1) = 210 / 6 = 35 maneiras.',
    passoAPassoCalculo: [
      'Passo 1: A ordem importa? Não, a equipe {A, B, C} é a mesma que {C, B, A} -> COMBINAÇÃO!',
      'Passo 2: Numerador: 7 x 6 x 5 = 210.',
      'Passo 3: Denominador: 3! = 3 x 2 x 1 = 6.',
      'Passo 4: Divisão: 210 / 6 = 35 maneiras distintas.'
    ],
    formulaOuMacete: 'C(7,3) = (7 x 6 x 5) / 6 = 35.'
  },
  {
    id: 'rlm-comb-2',
    topicId: 'combinatoria',
    topicLabel: 'Comissão Mista de Oficiais e Praças',
    enunciado: 'Entre 5 sargentos e 4 cabos, deseja-se formar uma comissão de sindicância composta por 2 sargentos e 2 cabos. De quantas formas distintas essa comissão pode ser montada?',
    options: [
      'A) 20 formas',
      'B) 30 formas',
      'C) 60 formas',
      'D) 90 formas',
      'E) 120 formas'
    ],
    correctIndex: 2,
    explicacao: 'Escolha dos sargentos: C(5,2) = (5 x 4) / 2 = 10. Escolha dos cabos: C(4,2) = (4 x 3) / 2 = 6. Pelo PFC: 10 x 6 = 60 formas distintas.',
    passoAPassoCalculo: [
      'Passo 1: Escolher 2 sargentos entre 5: C(5,2) = (5 x 4) / (2 x 1) = 20 / 2 = 10.',
      'Passo 2: Escolher 2 cabos entre 4: C(4,2) = (4 x 3) / (2 x 1) = 12 / 2 = 6.',
      'Passo 3: Multiplicar as duas etapas independentes: 10 x 6 = 60 comissões.'
    ],
    formulaOuMacete: 'C(5,2) x C(4,2) = 10 x 6 = 60.'
  },
  {
    id: 'rlm-comb-3',
    topicId: 'combinatoria',
    topicLabel: 'Senhas de Acesso sem Repetição',
    enunciado: 'Para acessar o cofre de armamentos da PMPE, um oficial deve digitar uma senha composta por 4 algarismos distintos escolhidos entre os algarismos 1, 2, 3, 4, 5, 6, 7 e 8. Quantas senhas diferentes podem ser criadas?',
    options: [
      'A) 70 senhas',
      'B) 840 senhas',
      'C) 1.680 senhas',
      'D) 3.360 senhas',
      'E) 4.096 senhas'
    ],
    correctIndex: 2,
    explicacao: 'Temos 8 algarismos disponíveis e a senha tem 4 dígitos distintos (sem repetição). A ordem dos dígitos importa. 1º dígito = 8 opções, 2º = 7, 3º = 6, 4º = 5. Total = 8 x 7 x 6 x 5 = 1.680 senhas.',
    passoAPassoCalculo: [
      'Passo 1: Algarismos disponíveis: {1, 2, 3, 4, 5, 6, 7, 8} -> total 8 algarismos.',
      'Passo 2: 4 dígitos DISTINTOS:',
      '  1º dígito: 8 possibilidades',
      '  2º dígito: 7 possibilidades',
      '  3º dígito: 6 possibilidades',
      '  4º dígito: 5 possibilidades',
      'Passo 3: Multiplicação: 8 x 7 x 6 x 5 = 56 x 30 = 1.680 senhas.'
    ],
    formulaOuMacete: 'Arranjo A(8,4) = 8 x 7 x 6 x 5 = 1.680.'
  },
  {
    id: 'rlm-comb-4',
    topicId: 'combinatoria',
    topicLabel: 'Números Pares com Dígitos Distintos',
    enunciado: 'Quantos números PARES de 3 algarismos DISTINTOS podem ser formados utilizando apenas os algarismos 1, 2, 3, 4, 5, 6 e 7?',
    options: [
      'A) 60 números',
      'B) 72 números',
      'C) 90 números',
      'D) 105 números',
      'E) 210 números'
    ],
    correctIndex: 2,
    explicacao: 'Para ser par, o último algarismo deve ser par: opções {2, 4, 6} (3 opções). Como os algarismos são distintos: 1º algarismo = 6 opções restantes. 2º algarismo = 5 opções restantes. Total = 6 x 5 x 3 = 90 números pares.',
    passoAPassoCalculo: [
      'Passo 1: Começar SEMPRE pela restrição (algarismo das unidades deve ser par):',
      '  Pares disponíveis: 2, 4, 6 -> 3 opções.',
      'Passo 2: 1º algarismo (centenas): restam 7 - 1 = 6 opções.',
      'Passo 3: 2º algarismo (dezenas): restam 6 - 1 = 5 opções.',
      'Passo 4: Multiplicar pelo PFC: 6 x 5 x 3 = 90 números.'
    ],
    formulaOuMacete: 'Sempre preencha a RESTRIÇÃO primeiro! Unidades (3) x Centenas (6) x Dezenas (5) = 90.'
  },

  // ==================== TÓPICO: CONJUNTOS & VENN ====================
  {
    id: 'rlm-venn-1',
    topicId: 'conjuntos',
    topicLabel: 'Diagrama de Venn Militar',
    enunciado: 'Em um pelotão com 60 policiais militares, 35 concluíram o curso de Ações Táticas (CAT), 28 concluíram o curso de Pilotagem Defensiva (CPD) e 15 concluíram AMBOS os cursos. Quantos policiais desse pelotão NÃO concluíram nenhum desses dois cursos?',
    options: [
      'A) 8 policiais',
      'B) 10 policiais',
      'C) 12 policiais',
      'D) 15 policiais',
      'E) 18 policiais'
    ],
    correctIndex: 2,
    explicacao: 'União de dois conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 35 + 28 - 15 = 48 policiais fizeram pelo menos um curso. Policiais que não fizeram nenhum = Total - União = 60 - 48 = 12 policiais.',
    passoAPassoCalculo: [
      'Passo 1: Começar SEMPRE pela intersecção dos dois cursos = 15 policiais.',
      'Passo 2: Policiais que fizeram APENAS o CAT = 35 - 15 = 20 policiais.',
      'Passo 3: Policiais que fizeram APENAS o CPD = 28 - 15 = 13 policiais.',
      'Passo 4: Total de policiais que fizeram algum curso = 20 + 15 + 13 = 48 policiais.',
      'Passo 5: Policiais que não fizeram nenhum: 60 - 48 = 12 policiais.'
    ],
    formulaOuMacete: 'Nenhum = Total - (A + B - Ambos) = 60 - (35 + 28 - 15) = 60 - 48 = 12.'
  },
  {
    id: 'rlm-venn-2',
    topicId: 'conjuntos',
    topicLabel: 'Elementos Exclusivos em Pesquisa',
    enunciado: 'Em uma pesquisa com 100 policiais militares sobre a leitura de dois manuais técnicos A e B, verificou-se que 60 lêem o manual A, 50 lêem o manual B e 20 lêem ambos os manuais. Escolhendo-se um policial ao acaso, qual é a probabilidade de ele ler APENAS o manual A?',
    options: [
      'A) 20%',
      'B) 40%',
      'C) 50%',
      'D) 60%',
      'E) 70%'
    ],
    correctIndex: 1,
    explicacao: 'Lêem o manual A = 60. Lêem ambos = 20. Lêem APENAS o manual A = 60 - 20 = 40 policiais. Probabilidade = 40 / 100 = 40%.',
    passoAPassoCalculo: [
      'Passo 1: Total de policiais = 100.',
      'Passo 2: Total de leitores de A = 60 (inclui os que lêem ambos).',
      'Passo 3: Leitores de ambos = 20.',
      'Passo 4: Leitores EXCLUSIVOS de A: 60 - 20 = 40 policiais.',
      'Passo 5: P = 40 / 100 = 40%.'
    ],
    formulaOuMacete: 'Apenas A = A - (A ∩ B) = 60 - 20 = 40.'
  },
  {
    id: 'rlm-venn-3',
    topicId: 'conjuntos',
    topicLabel: 'Intersecção de Conjuntos com Nulos',
    enunciado: 'Em um grupo de 50 recrutas, sabe-se que 30 sabem nadar, 25 sabem lutar jiu-jitsu e 10 não sabem nenhuma das duas modalidades. Quantos recrutas sabem nadar E lutar jiu-jitsu simultaneamente?',
    options: [
      'A) 5 recrutas',
      'B) 10 recrutas',
      'C) 15 recrutas',
      'D) 20 recrutas',
      'E) 25 recrutas'
    ],
    correctIndex: 2,
    explicacao: 'Total que sabe pelo menos uma modalidade = 50 - 10 = 40 recrutas. Pela fórmula da união: 40 = 30 + 25 - Intersecção -> 40 = 55 - Intersecção -> Intersecção = 55 - 40 = 15 recrutas.',
    passoAPassoCalculo: [
      'Passo 1: Recrutas com alguma habilidade: 50 - 10 = 40 recrutas.',
      'Passo 2: Soma das habilidades: 30 (nadar) + 25 (luta) = 55.',
      'Passo 3: A diferença em relação ao total de 40 é o excesso da intersecção: 55 - 40 = 15 recrutas sabem ambas.'
    ],
    formulaOuMacete: 'Ambos = (Soma dos conjuntos) - (Total com habilidade) = 55 - 40 = 15.'
  },

  // ==================== TÓPICO: LÓGICA PROPOSICIONAL ====================
  {
    id: 'rlm-log-1',
    topicId: 'logica',
    topicLabel: 'Negação do Condicional "Se... Então"',
    enunciado: 'Considere a seguinte proposição da banca AOCP: "Se o policial militar estiver de serviço, então a viatura estará patrulhando a área". A NEGAÇÃO LÓGICA dessa proposição condicional é expressa corretamente por:',
    options: [
      'A) Se o policial militar não estiver de serviço, então a viatura não estará patrulhando a área.',
      'B) O policial militar não está de serviço ou a viatura não estará patrulhando a área.',
      'C) O policial militar está de serviço E a viatura não está patrulhando a área.',
      'D) Se a viatura estiver patrulhando a área, então o policial militar estará de serviço.',
      'E) O policial militar não está de serviço E a viatura está patrulhando a área.'
    ],
    correctIndex: 2,
    explicacao: 'A negação de p -> q é p ^ ~q (Regra do MANÉ: Mantém a primeira E Nega a segunda). "O policial está de serviço E a viatura NÃO está patrulhando".',
    passoAPassoCalculo: [
      'Passo 1: Identificar a estrutura condicional: Se P, então Q.',
      '  P: "O policial está de serviço"',
      '  Q: "A viatura está patrulhando"',
      'Passo 2: Regra da Negação do Se...Então: ~(P -> Q) = P ^ ~Q.',
      'Passo 3: Aplicar o Macete do MANÉ: MAntém a primeira ("O policial está de serviço") E NEga a segunda ("A viatura NÃO está patrulhando").',
      'Passo 4: Conectar com o conectivo "E".'
    ],
    formulaOuMacete: 'Macete do MANÉ: Mantém a primeira E Nega a segunda: ~(P -> Q) = P ^ ~Q.'
  },
  {
    id: 'rlm-log-2',
    topicId: 'logica',
    topicLabel: 'Equivalência Contrapositiva AOCP',
    enunciado: 'Dada a afirmação: "Se o alarme do quartel soa, então a guarda entra em prontidão", qual das alternativas a seguir apresenta uma proposição LOGICAMENTE EQUIVALENTE segundo as regras da lógica formal?',
    options: [
      'A) Se a guarda entra em prontidão, então o alarme do quartel soa.',
      'B) Se a guarda NÃO entra em prontidão, então o alarme do quartel NÃO soou.',
      'C) O alarme do quartel soa e a guarda não entra em prontidão.',
      'D) Se o alarme do quartel não soa, então a guarda não entra em prontidão.',
      'E) A guarda entra em prontidão se, e somente se, o alarme do quartel soa.'
    ],
    correctIndex: 1,
    explicacao: 'Equivalência contrapositiva: (P -> Q) é logicamente equivalente a (~Q -> ~P). "Se a guarda não entra em prontidão, então o alarme do quartel não soou". Inverte as duas proposições e nega ambas!',
    passoAPassoCalculo: [
      'Passo 1: Proposição original: P -> Q.',
      '  P: alarme soa',
      '  Q: guarda entra em prontidão',
      'Passo 2: A principal equivalência da condicional é a CONTRAPOSITIVA: inverte e nega.',
      'Passo 3: Inverter e negar: ~Q -> ~P ("Se a guarda NÃO entra em prontidão, então o alarme NÃO soa").',
      'Passo 4: Alternativa correta: B.'
    ],
    formulaOuMacete: 'Contrapositiva (Inverte e Nega): (P -> Q) ≡ (~Q -> ~P).'
  },
  {
    id: 'rlm-log-3',
    topicId: 'logica',
    topicLabel: 'Negação do Quantificador "Todo"',
    enunciado: 'A negação lógica da proposição categórica "Todo policial militar é disciplinado" é expressa por:',
    options: [
      'A) Nenhum policial militar é disciplinado.',
      'B) Todo policial militar é indisciplinado.',
      'C) Pelo menos um policial militar NÃO é disciplinado.',
      'D) Nenhum policial militar é indisciplinado.',
      'E) Apenas um policial militar é indisciplinado.'
    ],
    correctIndex: 2,
    explicacao: 'A negação do quantificador universal "Todo" se faz com o quantificador existencial PEA + NÃO (Pelo menos um NÃO, Existe algum que NÃO, Algum NÃO). Logo: "Pelo menos um policial militar NÃO é disciplinado".',
    passoAPassoCalculo: [
      'Passo 1: Pegadinha clássica da AOCP: A negação de "TODO" NUNCA é "NENHUM"!',
      'Passo 2: Para quebrar a verdade de "Todo A é B", basta achar UM ÚNICO contraexemplo.',
      'Passo 3: Macete do PEA + NÃO:',
      '  - P: Pelo menos um NÃO é',
      '  - E: Existe algum que NÃO é',
      '  - A: Algum NÃO é',
      'Passo 4: Alternativa correta: C.'
    ],
    formulaOuMacete: 'Macete PEA + NÃO: Negação de "Todo A é B" = "Existe algum / Pelo menos um A que NÃO é B".'
  }
];

interface LogicMasterGameProps {
  userName: string;
  onExit: () => void;
  onAwardXp: (amount: number) => void;
}

export const LogicMasterGame: React.FC<LogicMasterGameProps> = ({ userName, onExit, onAwardXp }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('todos');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, { isCorrect: boolean; selected: number }>>({});

  // Filtra as questões de acordo com a aba selecionada
  const activeQuestions = useMemo(() => {
    if (selectedTopic === 'todos') return RLM_QUESTION_BANK;
    return RLM_QUESTION_BANK.filter((q) => q.topicId === selectedTopic);
  }, [selectedTopic]);

  // Garante que o índice não estoure ao trocar de tópico
  const currentQ = useMemo(() => {
    if (activeQuestions.length === 0) return RLM_QUESTION_BANK[0];
    const safeIndex = Math.min(currentQuestionIndex, activeQuestions.length - 1);
    return activeQuestions[safeIndex] || activeQuestions[0];
  }, [activeQuestions, currentQuestionIndex]);

  // Estatísticas globais do caderno
  const stats = useMemo(() => {
    const totalAnswered = Object.keys(userAnswers).length;
    const correctCount = Object.values(userAnswers).filter((a) => a.isCorrect).length;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    return {
      totalAnswered,
      correctCount,
      accuracy,
      totalAvailable: RLM_QUESTION_BANK.length
    };
  }, [userAnswers]);

  // Ao trocar de questão, restaura estado se já tiver sido respondida
  useEffect(() => {
    if (!currentQ) return;
    const previousAnswer = userAnswers[currentQ.id];
    if (previousAnswer) {
      setSelectedOption(previousAnswer.selected);
      setHasAnswered(true);
    } else {
      setSelectedOption(null);
      setHasAnswered(false);
    }
  }, [currentQ, userAnswers]);

  const handleSelectOption = (idx: number) => {
    if (hasAnswered || !currentQ) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: { isCorrect, selected: idx }
    }));

    if (isCorrect) {
      sound.playSuccess();
      onAwardXp(40);
      confetti({ particleCount: 45, spread: 60, origin: { y: 0.6 } });
    } else {
      sound.playError();
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Loop para o começo
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrevious = () => {
    sound.playClick();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setCurrentQuestionIndex(activeQuestions.length - 1);
    }
  };

  const handleRandom = () => {
    sound.playClick();
    if (activeQuestions.length <= 1) return;
    let nextIdx: number;
    do {
      nextIdx = Math.floor(Math.random() * activeQuestions.length);
    } while (nextIdx === currentQuestionIndex && activeQuestions.length > 1);
    setCurrentQuestionIndex(nextIdx);
  };

  const handleTopicChange = (topicId: string) => {
    sound.playClick();
    setSelectedTopic(topicId);
    setCurrentQuestionIndex(0);
  };

  const isCurrentCorrect = selectedOption === currentQ?.correctIndex;

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
      {/* Top Header com Estatísticas em Tempo Real */}
      <div className="glass-panel" style={{ padding: '1rem 1.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              onExit();
            }}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
          >
            <ArrowLeft size={16} />
            <span>Voltar ao Menu</span>
          </button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Caderno de Questões: RLM & Matemática
              </span>
              <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                Banca AOCP PMPE
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}>
              Resolução direta de questões com cálculo detalhado passo a passo e macetes de prova.
            </p>
          </div>
        </div>

        {/* Indicadores de Rendimento */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(0,0,0,0.35)', padding: '0.45rem 0.85rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#22c55e', fontWeight: 800 }}>
            <span>Acertos: {stats.correctCount} / {stats.totalAnswered}</span>
          </div>
          <div style={{ height: '16px', width: '1px', background: 'var(--border-subtle)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#38bdf8', fontWeight: 700 }}>
            <Percent size={14} />
            <span>{stats.accuracy}%</span>
          </div>
          <div style={{ height: '16px', width: '1px', background: 'var(--border-subtle)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24', fontWeight: 700 }}>
            <Zap size={14} />
            <span>+{stats.correctCount * 40} XP</span>
          </div>
        </div>
      </div>

      {/* Barra de Filtro Rápido por Assunto (Conforme pedido pelo Comandante!) */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.4rem', scrollbarWidth: 'thin' }}>
        {RLM_TOPICS.map((t) => {
          const isSelected = selectedTopic === t.id;
          return (
            <button
              key={t.id}
              onClick={() => handleTopicChange(t.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: isSelected ? 800 : 600,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: isSelected ? 'linear-gradient(135deg, #0284c7, #0369a1)' : 'rgba(255, 255, 255, 0.05)',
                color: isSelected ? '#ffffff' : 'var(--text-muted)',
                border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Cartão Central da Questão */}
      <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '18px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Topo do Card da Questão */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', fontWeight: 800 }}>
              {currentQ.topicLabel}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              Questão {currentQuestionIndex + 1} de {activeQuestions.length}
            </span>
          </div>

          {/* Navegação Entre Questões */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={handlePrevious}
              className="btn btn-secondary"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              title="Questão Anterior"
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleRandom}
              className="btn btn-secondary"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              title="Sortear Questão Aleatória"
            >
              <Shuffle size={14} />
              <span>Aleatória</span>
            </button>

            <button
              onClick={handleNext}
              className="btn btn-secondary"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
              title="Próxima Questão"
            >
              <span>Próxima</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Enunciado da Questão */}
        <div style={{ borderLeft: '3px solid #38bdf8', paddingLeft: '1rem', marginTop: '0.25rem' }}>
          <h3 style={{ fontSize: '1.18rem', fontWeight: 600, color: 'var(--text-main)', margin: 0, lineHeight: '1.65' }}>
            {currentQ.enunciado}
          </h3>
        </div>

        {/* Lista de Alternativas (A, B, C, D, E) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
          {currentQ.options.map((opt, idx) => {
            let itemBg = 'rgba(255, 255, 255, 0.04)';
            let itemBorder = 'rgba(255, 255, 255, 0.08)';
            let itemColor = 'var(--text-main)';

            if (hasAnswered) {
              if (idx === currentQ.correctIndex) {
                itemBg = 'rgba(34, 197, 94, 0.2)';
                itemBorder = '#22c55e';
                itemColor = '#86efac';
              } else if (idx === selectedOption) {
                itemBg = 'rgba(239, 68, 68, 0.2)';
                itemBorder = '#ef4444';
                itemColor = '#fca5a5';
              } else {
                itemBg = 'rgba(0, 0, 0, 0.2)';
                itemBorder = 'transparent';
                itemColor = 'var(--text-dim)';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelectOption(idx)}
                style={{
                  padding: '0.9rem 1.15rem',
                  borderRadius: '12px',
                  background: itemBg,
                  border: `1px solid ${itemBorder}`,
                  color: itemColor,
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  fontSize: '0.94rem',
                  transition: 'all 0.15s ease',
                  cursor: hasAnswered ? 'default' : 'pointer'
                }}
              >
                <span style={{ fontWeight: 600 }}>{opt}</span>
                {hasAnswered && idx === currentQ.correctIndex && <CheckCircle2 size={20} color="#22c55e" />}
                {hasAnswered && idx === selectedOption && idx !== currentQ.correctIndex && <XCircle size={20} color="#ef4444" />}
              </button>
            );
          })}
        </div>

        {/* Resposta & Dedução Matemática Tintim por Tintim */}
        {hasAnswered && (
          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Banner de Resultado */}
            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: isCurrentCorrect ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                border: isCurrentCorrect ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', fontWeight: 800, color: isCurrentCorrect ? '#22c55e' : '#ef4444' }}>
                {isCurrentCorrect ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                <span>{isCurrentCorrect ? 'Cálculo Exato! Resposta Correta (+40 XP)' : 'Cálculo Incorreto — Veja a conta passo a passo abaixo:'}</span>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                {currentQ.explicacao}
              </p>
            </div>

            {/* Painel de Cálculo Tintim por Tintim */}
            <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1.15rem', borderRadius: '14px', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#38bdf8', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.65rem' }}>
                <Calculator size={17} />
                <span>Passo a Passo da Conta (Dedução Matemática Tintim por Tintim):</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {currentQ.passoAPassoCalculo.map((step, sIdx) => (
                  <div key={sIdx} style={{ fontSize: '0.86rem', color: '#e2e8f0', display: 'flex', gap: '0.5rem', lineHeight: '1.45' }}>
                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>{sIdx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              {/* Fórmula Tática / Macete */}
              <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700 }}>
                <Zap size={15} />
                <span>Fórmula Tática da Banca: {currentQ.formulaOuMacete}</span>
              </div>
            </div>

            {/* Botão de Avanço Rápido */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
              <button
                onClick={() => {
                  sound.playClick();
                  setHasAnswered(false);
                  setSelectedOption(null);
                }}
                className="btn btn-secondary"
                style={{ fontSize: '0.82rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <RotateCcw size={14} />
                <span>Refazer Questão</span>
              </button>

              <button
                onClick={handleNext}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.92rem',
                  background: 'linear-gradient(135deg, #16a34a, #15803d)'
                }}
              >
                <span>Próxima Questão</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
