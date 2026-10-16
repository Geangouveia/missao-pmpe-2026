import React, { useState, useEffect, useMemo } from 'react';
import { 
  Brain, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  BookOpen, 
  Calculator, 
  Flame, 
  Zap,
  GraduationCap
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

export interface LogicQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  passoAPasso: string[];
  regraOuro: string;
  pegadinhaBanca?: string;
}

export interface LogicLevel {
  id: number;
  rankTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  teoriaDoutrina: {
    conceitoChave: string;
    formulaOuRegra: string;
    maceteMnemônico: string;
    exemploPratico: string;
  };
  questions: LogicQuestion[];
}

// 8 FASES PROGRESSIVAS DE RACIOCÍNIO LÓGICO E PROBABILIDADE (DO ZERO AO GABARITO AOCP)
export const LOGIC_LEVELS: LogicLevel[] = [
  {
    id: 1,
    rankTitle: 'Nível 1 • Recruta da Lógica',
    badge: 'Fundamentos',
    title: 'Sentenças & Proposições Lógicas',
    subtitle: 'O que é e o que não é julgado pela banca',
    description: 'Aprenda a identificar proposições válidas e eliminar pegadinhas clássicas de perguntas, ordens e sentenças abertas.',
    teoriaDoutrina: {
      conceitoChave: 'Proposição é toda sentença declarativa (afirmativa ou negativa) que expressa um pensamento completo e pode ser valorada exclusivamente como VERDADEIRA (V) ou FALSA (F).',
      formulaOuRegra: 'NÃO SÃO PROPOSIÇÕES: Frases Interrogativas (?), Exclamativas (!), Imperativas (ordens: "Faça isso!"), Sentenças Abertas (com variáveis indefinidas como "x + 2 = 5" ou "Ele foi promovido") e Paradoxos.',
      maceteMnemônico: 'Mnemônico NÃO-PROPO: Não tem como julgar em V ou F? É pergunta, ordem ou emoção? Fora do RLM!',
      exemploPratico: '"O Soldado Silva prendeu o suspeito." -> Proposição (pode ser V ou F). "Quem prendeu o suspeito?" -> Pergunta (NÃO é proposição).'
    },
    questions: [
      {
        id: 'rl-1-1',
        question: 'Dadas as sentenças abaixo, assinale a única que constitui uma proposição lógica segundo os princípios do raciocínio lógico formal:',
        options: [
          'A) Quantos policiais estão escalados para o plantão de hoje no 1º BPM?',
          'B) Que excelente atuação da Polícia Militar de Pernambuco nas ruas!',
          'C) Faça a ronda preventiva no bairro de Boa Viagem imediatamente.',
          'D) A Polícia Militar de Pernambuco foi fundada no ano de 1825.',
          'E) x + 7 = 15, sendo x um número desconhecido.'
        ],
        correctIndex: 3,
        explanation: 'A alternativa D é uma oração declarativa com sujeito, verbo e sentido completo, podendo ser objetivamente classificada em verdadeira ou falsa. As demais são: interrogativa (A), exclamativa (B), imperativa (C) e sentença aberta sem valor determinado para x (E).',
        passoAPasso: [
          'Passo 1: Analisar cada alternativa quanto à capacidade de julgamento em V ou F.',
          'Passo 2: Descartar a opção A porque interrogações não possuem valor de verdade.',
          'Passo 3: Descartar as opções B e C por expressarem exclamação e ordem militar.',
          'Passo 4: Descartar a opção E por conter variável livre "x" sem conjunto universo definido (sentença aberta).',
          'Passo 5: A alternativa D é uma proposição histórica afirmativa e fechada.'
        ],
        regraOuro: 'Interrogações, exclamações, ordens e equações abertas jamais são proposições lógicas!',
        pegadinhaBanca: 'Cuidado com equações com incógnitas ("x + 7 = 15") sem o valor de x: a banca tenta fazê-lo resolver a equação, mas trata-se de sentença aberta!'
      },
      {
        id: 'rl-1-2',
        question: 'Considere os princípios fundamentais da lógica clássica aristotélica. O princípio que determina que "uma proposição não pode ser verdadeira e falsa ao mesmo tempo sob o mesmo aspecto" é denominado:',
        options: [
          'A) Princípio do Terceiro Excluído.',
          'B) Princípio da Não-Contradição.',
          'C) Princípio da Identidade.',
          'D) Princípio da Dupla Negação.',
          'E) Princípio da Modus Ponens.'
        ],
        correctIndex: 1,
        explanation: 'O Princípio da Não-Contradição estabelece que uma proposição não pode ser simultaneamente verdadeira e falsa sob as mesmas condições (~(p ∧ ~p)). O Terceiro Excluído diz que só há dois valores (V ou F, sem 3ª via). A Identidade diz que toda proposição é idêntica a si mesma (p = p).',
        passoAPasso: [
          'Passo 1: Relembrar os 3 pilares aristotélicos: Identidade, Não-Contradição e Terceiro Excluído.',
          'Passo 2: "p é p" -> Princípio da Identidade.',
          'Passo 3: "p não pode ser V e F ao mesmo tempo" -> Princípio da Não-Contradição.',
          'Passo 4: "ou p é V ou p é F, não existe outro estado intermediário" -> Terceiro Excluído.',
          'Passo 5: O enunciado descreve exatamente a impossibilidade de coexistência de V e F.'
        ],
        regraOuro: 'Não-Contradição = Não pode ser V e F ao mesmo tempo!',
        pegadinhaBanca: 'Confundir Não-Contradição com Terceiro Excluído é a armadilha preferida da AOCP.'
      },
      {
        id: 'rl-1-3',
        question: 'Qual das seguintes sentenças representa uma "Sentença Aberta"?',
        options: [
          'A) Recife é a capital do Estado de Pernambuco.',
          'B) Ele é um oficial exemplar da Polícia Militar.',
          'C) O número 13 é um número primo.',
          'D) 5 x 4 = 20.',
          'E) Nenhum triângulo possui 4 lados.'
        ],
        correctIndex: 1,
        explanation: 'A frase "Ele é um oficial exemplar da Polícia Militar" possui o pronome "Ele" indefinido. Como não se sabe quem é o sujeito referenciado, não é possível atribuir valor lógico V ou F.',
        passoAPasso: [
          'Passo 1: Identificar a presença de pronomes indefinidos ou variáveis sem contexto.',
          'Passo 2: O pronome "Ele" atua como uma variável "x", impossibilitando saber a quem se refere.',
          'Passo 3: As outras quatro sentenças são fechadas com valor de verdade bem definido.'
        ],
        regraOuro: 'Pronomes demonstrativos/pessoais sem antecedente explícito ("Ele", "Aquele suspeito") tornam a sentença aberta!',
        pegadinhaBanca: 'Não confunda opinião ou adjetivo com sentença aberta: o problema formal aqui é a falta de identificação do sujeito ("Ele").'
      },
      {
        id: 'rl-1-4',
        question: 'Sabendo que p é uma proposição verdadeira (V) e q é uma proposição falsa (F), o valor lógico da negação de p (~p) e da negação de q (~q) são, respectivamente:',
        options: [
          'A) V e V',
          'B) V e F',
          'C) F e V',
          'D) F e F',
          'E) Indeterminado e F'
        ],
        correctIndex: 2,
        explanation: 'A negação (~) inverte o valor lógico. Se p é V, ~p é Falso. Se q é F, ~q é Verdadeiro. Portanto: F e V.',
        passoAPasso: [
          'Passo 1: p = V -> ~p = F',
          'Passo 2: q = F -> ~q = V',
          'Passo 3: Respectivamente: F e V (Alternativa C).'
        ],
        regraOuro: 'Negação (~ ou ¬) é uma chave inversora binária: V vira F, F vira V!',
        pegadinhaBanca: 'Atenção à palavra "respectivamente" para não inverter a ordem das respostas.'
      }
    ]
  },
  {
    id: 2,
    rankTitle: 'Nível 2 • Soldado Operador',
    badge: 'Conectivos',
    title: 'Conectivos & Tabela-Verdade Essencial',
    subtitle: 'Conjunção (E), Disjunção (OU) e Disjunção Exclusiva (OU...OU)',
    description: 'Domine as condições de verdade dos operadores fundamentais e não perca tempo desenhando tabelas completas na prova.',
    teoriaDoutrina: {
      conceitoChave: 'Os conectivos conectam proposições simples para formar proposições compostas com regras de verdade estritas.',
      formulaOuRegra: 'E (∧): Exigente! Só é V se TODAS forem V. | OU (∨): Bondoso! Só é F se TODAS forem F. | OU...OU (⊻): Exclusivo! Só é V quando os valores forem DIFERENTES.',
      maceteMnemônico: 'Conjunção (E) = Casal exigente (os dois têm que concordar). Disjunção (OU) = Pelo menos um resolve o problema!',
      exemploPratico: 'Se o policial diz "Vou prender o suspeito E apreender a arma", ele só cumpriu a promessa se fizer AMBOS.'
    },
    questions: [
      {
        id: 'rl-2-1',
        question: 'Dadas as proposições p: "Recife é uma cidade litorânea" (V) e q: "O rio Capibaribe nasce no mar" (F). Qual é o valor lógico da conjunção (p ∧ q)?',
        options: [
          'A) Verdadeiro, pois p é verdadeiro.',
          'B) Verdadeiro, pois a conjunção admite um valor verdadeiro.',
          'C) Falso, pois a conjunção exige que todas as partes sejam verdadeiras.',
          'D) Indeterminado, pois depende da maré.',
          'E) Falso apenas se ambas fossem falsas.'
        ],
        correctIndex: 2,
        explanation: 'Na conjunção (E / ∧), a proposição composta só é Verdadeira se AMBAS as proposições simples forem Verdadeiras. Como q é Falsa, V ∧ F resulta em FALSO.',
        passoAPasso: [
          'Passo 1: Identificar o operador: símbolo ∧ representa a conjunção "E".',
          'Passo 2: Valor de p = V. Valor de q = F.',
          'Passo 3: Aplicar a tabela do "E": V ∧ F = F.',
          'Passo 4: Conclusão: a proposição composta é FALSA.'
        ],
        regraOuro: 'No conectivo "E", basta uma falsidade para contaminar e derrubar toda a sentença!',
        pegadinhaBanca: 'A banca tenta justificar com raciocínio de "OU": lembre-se que para o E ser verdade, não basta uma parte ser verdadeira.'
      },
      {
        id: 'rl-2-2',
        question: 'A disjunção inclusiva "p ∨ q" entre duas proposições lógicas assume valor lógico FALSO exclusivamente quando:',
        options: [
          'A) Ambas as proposições p e q são falsas.',
          'B) Ambas as proposições p e q são verdadeiras.',
          'C) A proposição p é verdadeira e q é falsa.',
          'D) A proposição p é falsa e q é verdadeira.',
          'E) As proposições possuem valores lógicos distintos.'
        ],
        correctIndex: 0,
        explanation: 'O conectivo "OU" (∨) é bondoso e flexível: basta que uma proposição seja Verdadeira para que todo o conjunto seja Verdadeiro. Portanto, o único caso em que ele é Falso é quando AMBAS são Falsas (F ∨ F = F).',
        passoAPasso: [
          'Passo 1: Tabela-verdade do "OU" (∨):',
          'Passo 2: V ∨ V = V | V ∨ F = V | F ∨ V = V | F ∨ F = F.',
          'Passo 3: O único resultado Falso ocorre na linha em que p = F e q = F.'
        ],
        regraOuro: 'O "OU" só perde e se torna Falso quando todo mundo for Falso!',
        pegadinhaBanca: 'Cuidado para não confundir disjunção inclusiva (OU) com disjunção exclusiva (OU...OU).'
      },
      {
        id: 'rl-2-3',
        question: 'Em uma operação, o Comandante declara: "Ou o Cabo Silva vai na viatura 01, ou o Soldado Souza vai na viatura 01". Sabe-se que essa declaração é uma disjunção exclusiva (p ⊻ q) e foi considerada VERDADEIRA. Isso significa necessariamente que:',
        options: [
          'A) Ambos os militares foram juntos na viatura 01.',
          'B) Nenhum dos dois militares foi na viatura 01.',
          'C) Exatamente um dos dois militares foi na viatura 01.',
          'D) O Cabo Silva obrigatoriamente não foi na viatura 01.',
          'E) Se o Soldado Souza foi, o Cabo Silva também foi.'
        ],
        correctIndex: 2,
        explanation: 'A disjunção exclusiva (OU... OU) só é Verdadeira quando exatamente UMA das proposições for verdadeira e a outra for falsa (valores lógicos diferentes). Não podem ocorrer ambos nem nenhum.',
        passoAPasso: [
          'Passo 1: O conectivo "Ou... ou" (⊻) exclui a possibilidade de simultaneidade.',
          'Passo 2: V ⊻ V = F (não podem os dois ao mesmo tempo).',
          'Passo 3: F ⊻ F = F (não pode nenhum dos dois).',
          'Passo 4: V ⊻ F = V e F ⊻ V = V -> Logo, apenas um deles foi na viatura.'
        ],
        regraOuro: 'Ou... Ou = Um ou outro, mas NUNCA os dois e NUNCA nenhum!',
        pegadinhaBanca: 'Em português do dia a dia usamos "ou" solto querendo dizer exclusividade. No RLM, "OU... OU" explícito exige valores lógicos opostos.'
      },
      {
        id: 'rl-2-4',
        question: 'Quantas linhas possui a tabela-verdade de uma proposição composta formada por 4 proposições simples distintas (p, q, r, s)?',
        options: [
          'A) 8 linhas',
          'B) 12 linhas',
          'C) 16 linhas',
          'D) 20 linhas',
          'E) 64 linhas'
        ],
        correctIndex: 2,
        explanation: 'O número de linhas de uma tabela-verdade é dado pela fórmula 2^n, onde n é a quantidade de proposições simples distintas. Com 4 proposições: 2^4 = 2 x 2 x 2 x 2 = 16 linhas.',
        passoAPasso: [
          'Passo 1: Identificar a fórmula do número de linhas: Linhas = 2^n.',
          'Passo 2: n = 4 proposições simples (p, q, r, s).',
          'Passo 3: Calcular 2^4 = 16 linhas.',
          'Passo 4: Marcar a alternativa C.'
        ],
        regraOuro: 'Número de linhas da tabela-verdade = 2^n (sempre base 2 elevada ao número de proposições)!',
        pegadinhaBanca: 'A banca adora colocar alternativas como 4x2=8 ou 4x4=16 (que coincide, mas se fossem 3 seria 8 e não 6).'
      }
    ]
  },
  {
    id: 3,
    rankTitle: 'Nível 3 • Cabo Estrategista',
    badge: 'Condicional',
    title: 'O Terror da AOCP: "Se... Então"',
    subtitle: 'Condicional, Vera Fischer e a Bicondicional',
    description: 'Mais de 40% das questões de RLM da banca AOCP cobram a condicional. Domine o caso da falsidade e a interpretação de condição suficiente e necessária.',
    teoriaDoutrina: {
      conceitoChave: 'A condicional "Se p, então q" (p -> q) expressa uma relação de causa/efeito ou condição lógica. "p" é antecedente (condição suficiente) e "q" é consequente (condição necessária).',
      formulaOuRegra: 'VERA FISCHER É FALSA! A condicional só é FALSA se a primeira for VERDADEIRA e a segunda for FALSA (V -> F = F). Em todos os outros 3 casos (V->V, F->V, F->F), o resultado é VERDADEIRO!',
      maceteMnemônico: 'Mnemônico VERA FISCHER: V -> F = Falsa! Se o antecedente for Falso, a condicional é AUTOMATICAMENTE VERDADEIRA!',
      exemploPratico: '"Se chover, levarei guarda-chuva." Se NÃO choveu e mesmo assim levei guarda-chuva, eu NÃO menti (F -> V = V).'
    },
    questions: [
      {
        id: 'rl-3-1',
        question: 'Considere a proposição condicional: "Se o soldado concluir o curso do CFSD, então ele será promovido". A única situação fática em que essa promessa é logicamente FALSA ocorre quando o soldado:',
        options: [
          'A) Não concluiu o curso e foi promovido.',
          'B) Concluiu o curso e foi promovido.',
          'C) Concluiu o curso e NÃO foi promovido.',
          'D) Não concluiu o curso e não foi promovido.',
          'E) Desistiu do curso antes de iniciar.'
        ],
        correctIndex: 2,
        explanation: 'A condicional "p -> q" só é Falsa na ocorrência de V -> F (Regra Vera Fischer: antecedente Verdadeiro e consequente Falso). Concluiu o curso (V), mas NÃO foi promovido (F).',
        passoAPasso: [
          'Passo 1: Identificar a estrutura condicional p -> q.',
          'Passo 2: p: "concluir o curso"; q: "será promovido".',
          'Passo 3: A condicional só é falsa quando a primeira acontece (V) e a segunda não se concretiza (F).',
          'Passo 4: Logo, o soldado concluiu o curso (V), mas NÃO foi promovido (F).'
        ],
        regraOuro: 'Vera Fischer é Falsa: V -> F = F. Qualquer outra combinação na condicional é VERDADEIRA!',
        pegadinhaBanca: 'Se o soldado NÃO concluiu o curso (p é F), a condicional é sempre verdadeira, independentemente do que aconteça depois!'
      },
      {
        id: 'rl-3-2',
        question: 'Dadas as proposições p: "2 + 2 = 5" e q: "O Recife é a capital de Pernambuco". Qual é o valor lógico da condicional (p -> q)?',
        options: [
          'A) Falso, porque a primeira premissa é absurda e falsa.',
          'B) Verdadeiro, porque uma premissa falsa sempre implica uma condicional verdadeira.',
          'C) Falso, porque matemática e geografia não se misturam no RLM.',
          'D) Indeterminado, necessitando de uma 3ª premissa.',
          'E) Verdadeiro apenas se Recife estivesse na Europa.'
        ],
        correctIndex: 1,
        explanation: 'Na condicional (p -> q), p: "2 + 2 = 5" é FALSA (F). q: "Recife é capital de PE" é VERDADEIRA (V). A linha da tabela-verdade F -> V resulta em VERDADEIRO!',
        passoAPasso: [
          'Passo 1: Avaliar p: 2 + 2 = 5 é FALSO (F).',
          'Passo 2: Avaliar q: Recife é a capital de PE é VERDADEIRO (V).',
          'Passo 3: Aplicar a tabela condicional: F -> V = VERDADEIRO.',
          'Passo 4: Lembre-se: a condicional só seria falsa se tivéssemos V -> F.'
        ],
        regraOuro: 'Se a primeira for FALSA, a condicional "Se... Então" já é automaticamente VERDADEIRA, sem nem precisar olhar a segunda!',
        pegadinhaBanca: 'O senso comum do aluno acha que se começou com mentira ("2+2=5"), a frase toda é falsa. No RLM ela é VERDADEIRA!'
      },
      {
        id: 'rl-3-3',
        question: 'Na proposição condicional "Se P, então Q", a proposição P é considerada em relação a Q como:',
        options: [
          'A) Condição necessária, enquanto Q é condição suficiente.',
          'B) Condição suficiente, enquanto Q é condição necessária.',
          'C) Condição irrelevante, enquanto Q é suficiente.',
          'D) Condição suficiente e necessária simultaneamente.',
          'E) Causa exclusiva sem qualquer efeito.'
        ],
        correctIndex: 1,
        explanation: 'Na condicional "Se P, então Q": o que vem antes da seta (P) é Condição SUFICIENTE. O que vem depois da seta (Q) é Condição NECESSÁRIA. Mnemônico: Se fumaça -> fogo (fumaça é suficiente para saber que há fogo; fogo é necessário para existir fumaça).',
        passoAPasso: [
          'Passo 1: Lembrar do mnemônico da seta: P -> Q.',
          'Passo 2: Quem está na ponta de trás (P) é SUFICIENTE.',
          'Passo 3: Quem recebe a flecha (Q) é NECESSÁRIO.',
          'Passo 4: Logo, P é condição suficiente e Q é condição necessária.'
        ],
        regraOuro: 'P -> Q: Quem sai é SUFICIENTE, quem recebe é NECESSÁRIO!',
        pegadinhaBanca: 'Inverter suficiente com necessária é a questão predileta da AOCP para derrubar quem estuda sem técnica.'
      },
      {
        id: 'rl-3-4',
        question: 'A bicondicional "p <-> q" ("p se e somente se q") possui valor lógico VERDADEIRO quando:',
        options: [
          'A) Ambas as proposições possuem o mesmo valor lógico (ambas V ou ambas F).',
          'B) Pelo menos uma das proposições é verdadeira.',
          'C) A primeira proposição for verdadeira e a segunda falsa.',
          'D) A primeira for falsa e a segunda verdadeira.',
          'E) Exatamente uma proposição for verdadeira.'
        ],
        correctIndex: 0,
        explanation: 'A bicondicional (<->) é a via de mão dupla da equivalência de valores: ela é VERDADEIRA quando os valores lógicos forem IGUAIS (V <-> V = V e F <-> F = V). Quando forem diferentes, ela é FALSA.',
        passoAPasso: [
          'Passo 1: Bicondicional = "Se e somente se" (<->).',
          'Passo 2: V <-> V resulta em V.',
          'Passo 3: F <-> F resulta em V.',
          'Passo 4: V <-> F ou F <-> V resulta em F.',
          'Passo 5: Conclusão: é verdadeira quando ambos os valores forem idênticos.'
        ],
        regraOuro: 'Bicondicional (<->) = Valores IGUAIS dão V, valores DIFERENTES dão F!',
        pegadinhaBanca: 'Muitos esquecem que F <-> F é VERDADEIRO na bicondicional.'
      }
    ]
  },
  {
    id: 4,
    rankTitle: 'Nível 4 • 3º Sargento',
    badge: 'Negação & MANÉ',
    title: 'Leis de De Morgan & Regra do MANÉ',
    subtitle: 'Negações lógicas dos conectivos E, OU e Se... Então',
    description: 'Aprenda a aplicar a famosa Regra do MANÉ para o "Se... Então" e as Leis de Morgan para os conectivos "E" e "OU".',
    teoriaDoutrina: {
      conceitoChave: 'Negar uma proposição não é simplesmente colocar a palavra "não" no início, mas construir uma sentença que seja logicamente contraditória à original.',
      formulaOuRegra: '1) Negação de p -> q: Regra do MANÉ! MANTÉM a 1ª (p) E (∧) NEGA a 2ª (~q). Atenção: o Se...Então SOME e vira "E"! | 2) Leis de Morgan: ~(p ∧ q) = ~p ∨ ~q (Nega as duas e troca E por OU). | ~(p ∨ q) = ~p ∧ ~q (Nega as duas e troca OU por E).',
      maceteMnemônico: 'Mnemônico do MANÉ: MA-ntém a primeira E NE-ga a segunda! Para o E e OU: nega tudo e inverte o conectivo!',
      exemploPratico: 'Negação de "Se eu estudar, então serei PM": Eu estudei E NÃO fui PM. (Manteve estudar e negou ser PM).'
    },
    questions: [
      {
        id: 'rl-4-1',
        question: 'Qual é a correta negação lógica da proposição: "Se o alarme tocar, então os policiais cercarão o perímetro"?',
        options: [
          'A) Se o alarme não tocar, então os policiais não cercarão o perímetro.',
          'B) O alarme não tocou ou os policiais cercaram o perímetro.',
          'C) O alarme tocou e os policiais não cercaram o perímetro.',
          'D) Se os policiais cercarem o perímetro, então o alarme tocará.',
          'E) O alarme não tocou e os policiais não cercaram o perímetro.'
        ],
        correctIndex: 2,
        explanation: 'Para negar uma condicional (p -> q), aplica-se a Regra do MANÉ: Mantém a primeira (o alarme tocou) E nega a segunda (os policiais não cercaram o perímetro). O conectivo "Se... Então" se transforma em "E".',
        passoAPasso: [
          'Passo 1: Identificar a estrutura: p -> q.',
          'Passo 2: Fórmula da negação: ~(p -> q) ≡ p ∧ ~q.',
          'Passo 3: Mnemônico MANÉ: MANTÉM p ("O alarme tocou"), CONECTIVO "E", NEGA q ("os policiais não cercaram o perímetro").',
          'Passo 4: Resultado: "O alarme tocou e os policiais não cercaram o perímetro".'
        ],
        regraOuro: 'NUNCA negue um "Se... Então" mantendo outro "Se... Então"! O Se... Então morre e vira "E"!',
        pegadinhaBanca: 'A banca coloca a letra A com "Se não..., então não..." exatamente para fisgar quem tenta negar no instinto sem conhecer o MANÉ.'
      },
      {
        id: 'rl-4-2',
        question: 'Segundo as Leis de De Morgan, a negação lógica da conjunção "O suspeito estava armado E tentou fugir" é expressa por:',
        options: [
          'A) O suspeito não estava armado e não tentou fugir.',
          'B) O suspeito não estava armado ou não tentou fugir.',
          'C) O suspeito estava armado ou tentou fugir.',
          'D) Se o suspeito estava armado, então não tentou fugir.',
          'E) O suspeito estava desarmado e foi capturado.'
        ],
        correctIndex: 1,
        explanation: 'Lei de De Morgan: para negar a conjunção "p ∧ q", nega-se a primeira (~p), troca-se o "E" por "OU", e nega-se a segunda (~q). Logo: "O suspeito não estava armado OU não tentou fugir".',
        passoAPasso: [
          'Passo 1: Expressão original: p ∧ q.',
          'Passo 2: Lei de Morgan: ~(p ∧ q) ≡ ~p ∨ ~q.',
          'Passo 3: Negar "estava armado" -> "não estava armado".',
          'Passo 4: Trocar "E" pelo conectivo "OU".',
          'Passo 5: Negar "tentou fugir" -> "não tentou fugir".',
          'Passo 6: "O suspeito não estava armado OU não tentou fugir" (Alternativa B).'
        ],
        regraOuro: 'Negação do E vira OU! Nega as duas pontas e vira o conectivo de cabeça para baixo!',
        pegadinhaBanca: 'A alternativa A apenas negou as pontas mas manteve o "E": erro fatal!'
      },
      {
        id: 'rl-4-3',
        question: 'Qual é a negação lógica de: "O soldado Silva é motorista da viatura OU o cabo Ramos é o comandante da guarnição"?',
        options: [
          'A) O soldado Silva não é motorista da viatura e o cabo Ramos não é o comandante da guarnição.',
          'B) O soldado Silva não é motorista da viatura ou o cabo Ramos não é o comandante da guarnição.',
          'C) Se o soldado Silva não é motorista, então o cabo Ramos é comandante.',
          'D) O soldado Silva é motorista e o cabo Ramos é comandante.',
          'E) Ou o soldado Silva é motorista ou o cabo Ramos é comandante.'
        ],
        correctIndex: 0,
        explanation: 'Lei de De Morgan para a disjunção: ~(p ∨ q) ≡ ~p ∧ ~q. Nega-se ambas as proposições e troca-se o conectivo "OU" por "E".',
        passoAPasso: [
          'Passo 1: Expressão dada: p ∨ q ("OU").',
          'Passo 2: Regra de Morgan: ~(p ∨ q) = ~p ∧ ~q.',
          'Passo 3: Negação de p: "O soldado Silva não é motorista".',
          'Passo 4: Trocar "OU" por "E".',
          'Passo 5: Negação de q: "O cabo Ramos não é comandante".',
          'Passo 6: Resultado: "O soldado Silva não é motorista E o cabo Ramos não é comandante".'
        ],
        regraOuro: 'Negação do OU vira E com as duas proposições negadas!',
        pegadinhaBanca: 'Cuidado para não manter o "OU" com negações.'
      },
      {
        id: 'rl-4-4',
        question: 'Considere a proposição composta: "Se o trânsito estiver lento, então eu chego atrasado". Qual das seguintes situações fáticas PROVA que essa afirmação foi falsa?',
        options: [
          'A) O trânsito não estava lento e eu cheguei no horário.',
          'B) O trânsito estava lento e eu cheguei atrasado.',
          'C) O trânsito estava lento e eu cheguei no horário (não cheguei atrasado).',
          'D) O trânsito não estava lento e eu cheguei atrasado.',
          'E) O dia foi feriado e não houve trânsito.'
        ],
        correctIndex: 2,
        explanation: 'Provar que uma condicional é falsa é encontrar o caso do MANÉ: antecedente ocorreu (trânsito lento), mas a consequência foi negada (não cheguei atrasado, isto é, cheguei no horário).',
        passoAPasso: [
          'Passo 1: A falsidade de p -> q ocorre exclusivamente quando p = V e q = F.',
          'Passo 2: p = "trânsito estava lento" (aconteceu).',
          'Passo 3: q = "chego atrasado" -> falsificar q significa NÃO chegar atrasado (chegar no horário).',
          'Passo 4: A situação descrita na alternativa C é exatamente a negação da condicional.'
        ],
        regraOuro: 'Falsificar uma condicional = Executar a regra do MANÉ no mundo real!',
        pegadinhaBanca: 'A banca pergunta "qual situação prova que foi falsa": é só buscar a alternativa do MANÉ.'
      }
    ]
  },
  {
    id: 5,
    rankTitle: 'Nível 5 • 2º Sargento',
    badge: 'Equivalências',
    title: 'Equivalências Lógicas & Contrapositiva',
    subtitle: 'Contrapositiva (Inverte Negando) e a Regra do NE-OU',
    description: 'Equivalência lógica significa dizer a mesmíssima coisa com palavras e estruturas diferentes. A AOCP cobra exaustivamente a Contrapositiva e o NE-OU.',
    teoriaDoutrina: {
      conceitoChave: 'Duas proposições são logicamente equivalentes quando possuem exatamente a mesma tabela-verdade em todas as suas linhas (são intercambiáveis).',
      formulaOuRegra: 'As 2 GRANDES EQUIVALÊNCIAS DA CONDICIONAL (p -> q): 1) CONTRAPOSITIVA: p -> q ≡ ~q -> ~p (Inverte a ordem das proposições e nega ambas! O conectivo "Se... Então" continua existindo!). | 2) REGRA DO NE-OU: p -> q ≡ ~p ∨ q (Nega a primeira OU Mantém a segunda).',
      maceteMnemônico: 'Contrapositiva: VOLTA NEGANDO! (Se A então B = Se não B então não A). Regra NE-OU: NÉ...OU! (Nega a primeira OU copia a segunda).',
      exemploPratico: '"Se é pernambucano, então é brasileiro" ≡ "Se NÃO é brasileiro, então NÃO é pernambucano".'
    },
    questions: [
      {
        id: 'rl-5-1',
        question: 'Dizer que "Se o indivíduo cometeu crime inafiançável, então não terá direito a fiança" é logicamente EQUIVALENTE a dizer que:',
        options: [
          'A) Se o indivíduo não cometeu crime inafiançável, então terá direito a fiança.',
          'B) Se o indivíduo tem direito a fiança, então não cometeu crime inafiançável.',
          'C) O indivíduo cometeu crime inafiançável e tem direito a fiança.',
          'D) Se o indivíduo não tem direito a fiança, então cometeu crime inafiançável.',
          'E) O indivíduo não cometeu crime ou não terá direito a fiança.'
        ],
        correctIndex: 1,
        explanation: 'Pela regra da Contrapositiva (p -> q ≡ ~q -> ~p): inverte-se a ordem e nega-se ambas as proposições. p: "cometeu crime inafiançável", q: "não terá fiança". Negar q vira "tem direito a fiança". Negar p vira "não cometeu crime inafiançável". Logo: "Se tem direito a fiança, então não cometeu crime inafiançável".',
        passoAPasso: [
          'Passo 1: Identificar a proposição condicional: p -> q.',
          'Passo 2: Fórmula da Contrapositiva: p -> q ≡ ~q -> ~p.',
          'Passo 3: Antecedente p: "cometeu crime inafiançável".',
          'Passo 4: Consequente q: "não terá direito a fiança".',
          'Passo 5: Negação de q: "tem direito a fiança" (passa para a frente).',
          'Passo 6: Negação de p: "não cometeu crime inafiançável" (vai para trás).',
          'Passo 7: Montar: "Se tem direito a fiança, então não cometeu crime inafiançável".'
        ],
        regraOuro: 'Contrapositiva: Pega a de trás, nega e joga pra frente; pega a da frente, nega e joga pra trás!',
        pegadinhaBanca: 'A alternativa A apenas negou sem inverter a ordem (~p -> ~q), o que é uma falácia lógica gravíssima chamada inversão indevida.'
      },
      {
        id: 'rl-5-2',
        question: 'A proposição condicional "Se a testemunha disser a verdade, então o réu será absolvido" pode ser logicamente reescrita através do conectivo "OU" como:',
        options: [
          'A) A testemunha diz a verdade ou o réu não será absolvido.',
          'B) A testemunha não diz a verdade ou o réu será absolvido.',
          'C) A testemunha não diz a verdade ou o réu não será absolvido.',
          'D) A testemunha diz a verdade e o réu será absolvido.',
          'E) Ou a testemunha diz a verdade ou o réu será absolvido.'
        ],
        correctIndex: 1,
        explanation: 'Pela regra do NE-OU: p -> q ≡ ~p ∨ q. Nega-se a primeira (~p: "a testemunha não diz a verdade"), coloca-se o "OU", e mantém-se a segunda (q: "o réu será absolvido").',
        passoAPasso: [
          'Passo 1: Identificar a transformação pedida: de "Se... Então" para "OU".',
          'Passo 2: Regra do NE-OU: p -> q ≡ ~p ∨ q.',
          'Passo 3: Nega a 1ª: "A testemunha não diz a verdade".',
          'Passo 4: Insere o conectivo "OU".',
          'Passo 5: Mantém a 2ª: "o réu será absolvido".',
          'Passo 6: Resultado: "A testemunha não diz a verdade ou o réu será absolvido".'
        ],
        regraOuro: 'Regra NE-OU: Nega a 1ª OU Mantém a 2ª!',
        pegadinhaBanca: 'Não confunda a equivalência com a negação MANÉ! No MANÉ você mantém a 1ª e usa E. No NE-OU você nega a 1ª e usa OU!'
      },
      {
        id: 'rl-5-3',
        question: 'Considere a disjunção: "Não sou policial militar OU protejo a sociedade". Uma proposição condicional equivalente a ela é:',
        options: [
          'A) Se sou policial militar, então protejo a sociedade.',
          'B) Se não sou policial militar, então não protejo a sociedade.',
          'C) Se protejo a sociedade, então sou policial militar.',
          'D) Sou policial militar e não protejo a sociedade.',
          'E) Não sou policial militar se e somente se protejo a sociedade.'
        ],
        correctIndex: 0,
        explanation: 'O caminho inverso do NE-OU: ~p ∨ q é equivalente a p -> q. Como temos "Não sou PM" (~p) OU "protejo a sociedade" (q), voltando para a condicional negamos a primeira (vira "Sou PM") e mantemos a segunda ("protejo a sociedade"): "Se sou policial militar, então protejo a sociedade".',
        passoAPasso: [
          'Passo 1: Expressão dada: ~A ∨ B.',
          'Passo 2: Pela equivalência: ~A ∨ B ≡ A -> B.',
          'Passo 3: A = "Sou policial militar". B = "Protejo a sociedade".',
          'Passo 4: Montando com "Se... então": "Se sou policial militar, então protejo a sociedade".'
        ],
        regraOuro: 'A seta e o "OU" são como duas faces da mesma moeda no NE-OU: você pode ir e voltar!',
        pegadinhaBanca: 'Preste atenção no sinal de negação que já estava na frase original ("Não sou PM"). Negar o "não" vira afirmativo ("Sou PM").'
      },
      {
        id: 'rl-5-4',
        question: 'A dupla negação de uma proposição (~(~p)) equivale logicamente a:',
        options: [
          'A) Uma falsidade necessária.',
          'B) A uma contradição lógica.',
          'C) À própria proposição p afirmativa.',
          'D) A uma tautologia universal.',
          'E) A uma sentença aberta indeterminada.'
        ],
        correctIndex: 2,
        explanation: 'O princípio da Dupla Negação estabelece que negar uma negação resulta na afirmação original: ~(~p) ≡ p. Exemplo: "Não é verdade que não fui aprovado" = "Fui aprovado".',
        passoAPasso: [
          'Passo 1: Seja p = V -> ~p = F -> ~(~p) = V = p.',
          'Passo 2: Seja p = F -> ~p = V -> ~(~p) = F = p.',
          'Passo 3: Em todas as linhas, ~(~p) tem exatamente o mesmo valor de p.'
        ],
        regraOuro: 'Menos com menos dá mais no RLM: negar duas vezes equivale a afirmar!',
        pegadinhaBanca: 'Em português popular "não fiz nada" pode soar negativo, mas na lógica formal duas negações se anulam rigorosamente.'
      }
    ]
  },
  {
    id: 6,
    rankTitle: 'Nível 6 • 1º Sargento',
    badge: 'Quantificadores',
    title: 'Diagramas Lógicos & Quantificadores',
    subtitle: 'Todo, Algum e Nenhum — Regra do PEA + NÃO',
    description: 'Negações e deduções com quantificadores lógicos universais e existenciais. O maior erro em concurso é negar "Todo" com "Nenhum".',
    teoriaDoutrina: {
      conceitoChave: 'Quantificadores definem a abrangência de uma propriedade em um grupo. Universais: TODO (universal afirmativo), NENHUM (universal negativo). Existenciais: ALGUM, EXISTE, PELO MENOS UM.',
      formulaOuRegra: 'NEGAÇÃO DO "TODO": Regra do PEA + NÃO! (Pelo menos um NÃO... / Existe algum que NÃO... / Algum NÃO...). | NEGAÇÃO DO "NENHUM": PEA sem o não (Existe pelo menos um que É... / Algum É...). | NUNCA, JAMAIS NEGUE "TODO" COM "NENHUM"!',
      maceteMnemônico: 'Mnemônico PEA + NÃO: Furar o "Todo" só exige UMA exceção! Se alguém diz "Todo policial mora em Recife", basta achar UM que NÃO more para desmentir.',
      exemploPratico: 'Negação de "Todo soldado é recifense": "Pelo menos um soldado NÃO é recifense".'
    },
    questions: [
      {
        id: 'rl-6-1',
        question: 'Qual é a negação lógica da proposição: "Todo policial do batalhão é faixa preta de jiu-jitsu"?',
        options: [
          'A) Nenhum policial do batalhão é faixa preta de jiu-jitsu.',
          'B) Todos os policiais do batalhão são faixas brancas.',
          'C) Pelo menos um policial do batalhão não é faixa preta de jiu-jitsu.',
          'D) Se o indivíduo é policial do batalhão, então não é faixa preta.',
          'E) Alguns policiais do batalhão são faixas pretas de jiu-jitsu.'
        ],
        correctIndex: 2,
        explanation: 'Para que a frase "Todo A é B" seja falsa, não é necessário que nenhum seja. Basta que exista pelo menos um A que NÃO seja B (Regra PEA + NÃO: Pelo menos um / Existe um / Algum NÃO é).',
        passoAPasso: [
          'Passo 1: Identificar o quantificador universal afirmativo: "Todo".',
          'Passo 2: Regra de ouro da lógica: a negação de "Todo" é um existencial negado (PEA + NÃO).',
          'Passo 3: P = Pelo menos um; E = Existe; A = Algum.',
          'Passo 4: Aplicar o NÃO: "Pelo menos um policial do batalhão NÃO é faixa preta".',
          'Passo 5: Descartar sumariamente a letra A ("Nenhum").'
        ],
        regraOuro: 'NUNCA negue "Todo" com "Nenhum"! O oposto de generalizar não é o extremo oposto, é apenas furar a regra uma única vez!',
        pegadinhaBanca: 'A alternativa A ("Nenhum") é o clássico distrator psicológico que derruba mais de 60% dos candidatos desavisados.'
      },
      {
        id: 'rl-6-2',
        question: 'Assinale a alternativa que apresenta a negação lógica de: "Nenhum suspeito colaborou com as investigações":',
        options: [
          'A) Todos os suspeitos colaboraram com as investigações.',
          'B) Pelo menos um suspeito colaborou com as investigações.',
          'C) Nenhum suspeito prestou depoimento aos policiais.',
          'D) Apenas o chefe da quadrilha colaborou com a investigação.',
          'E) Todos os suspeitos permaneceram em silêncio.'
        ],
        correctIndex: 1,
        explanation: 'A negação de "Nenhum A é B" é "Algum A é B" ou "Pelo menos um A é B" (quantificador existencial afirmativo). Basta um suspeito ter colaborado para que a frase "Nenhum colaborou" se torne uma mentira.',
        passoAPasso: [
          'Passo 1: Sentença original: "Nenhum A é B" (negação universal total).',
          'Passo 2: Para torná-la falsa, basta a existência de um único caso positivo.',
          'Passo 3: Negação: "Existe pelo menos um A que é B" ou "Algum suspeito colaborou".',
          'Passo 4: Descartar "Todos colaboraram" (letra A), pois não precisa de todos.'
        ],
        regraOuro: 'Negação do NENHUM = Pelo menos um SIM (PEA Afirmativo)!',
        pegadinhaBanca: 'Não confunda a negação de "Nenhum" com "Todos". Basta que um único tenha colaborado.'
      },
      {
        id: 'rl-6-3',
        question: 'Considere como verdadeiras as duas seguintes premissas: 1) "Todo recruta frequenta o estande de tiro"; 2) "Alguns recrutas são paraquedistas". A partir dessas premissas, é NECESSARIAMENTE correto concluir que:',
        options: [
          'A) Todos os paraquedistas frequentam o estande de tiro.',
          'B) Alguns paraquedistas frequentam o estande de tiro.',
          'C) Nenhum paraquedista é recruta.',
          'D) Quem frequenta o estande de tiro é obrigatoriamente paraquedista.',
          'E) Todos os recrutas são paraquedistas.'
        ],
        correctIndex: 1,
        explanation: 'Por diagramas de Venn: o conjunto dos Recrutas está totalmente contido no conjunto Estande de Tiro. O conjunto Paraquedistas tem intersecção com Recrutas. Como essa parte de recrutas que são paraquedistas está dentro do estande, conclui-se com certeza absoluta que "Alguns paraquedistas frequentam o estande de tiro".',
        passoAPasso: [
          'Passo 1: Desenhar o conjunto R (Recrutas) totalmente dentro do conjunto E (Estande).',
          'Passo 2: Desenhar o conjunto P (Paraquedistas) interceptando o conjunto R.',
          'Passo 3: A região de intersecção entre P e R está inevitavelmente contida dentro de E.',
          'Passo 4: Logo, esses indivíduos são simultaneamente Paraquedistas e frequentam o Estande.',
          'Passo 5: Conclusão lógica irrefutável: Alguns paraquedistas frequentam o estande de tiro.'
        ],
        regraOuro: 'Sempre desenhe os círculos de Venn em questões de silogismo para enxergar as intersecções seguras!',
        pegadinhaBanca: 'A alternativa A extrapola ("Todos os paraquedistas"): não sabemos nada sobre os paraquedistas que NÃO são recrutas!'
      },
      {
        id: 'rl-6-4',
        question: 'Se a proposição "Algum militar é médico" é considerada FALSA, então a proposição necessariamente VERDADEIRA é:',
        options: [
          'A) Todo militar é médico.',
          'B) Nenhum militar é médico.',
          'C) Todo médico é militar.',
          'D) Nenhum médico trabalha em hospital.',
          'E) Alguns militares não são médicos.'
        ],
        correctIndex: 1,
        explanation: 'Se a afirmação existencial "Algum militar é médico" é falsa, significa que não existe sequer um militar que exerça a medicina. A negação lógica de "Algum A é B" é o universal negativo: "Nenhum A é B".',
        passoAPasso: [
          'Passo 1: Dizer que "Algum militar é médico" é FALSO significa que sua negação é VERDADEIRA.',
          'Passo 2: Negação de "Algum A é B" ≡ "Nenhum A é B".',
          'Passo 3: Portanto, é verdadeira a sentença: "Nenhum militar é médico".'
        ],
        regraOuro: 'Se "Algum" é mentira, a verdade absoluta é "Nenhum"!',
        pegadinhaBanca: 'Preste atenção quando o enunciado diz que uma frase é FALSA: ele está pedindo a sua negação lógica verdadeira.'
      }
    ]
  },
  {
    id: 7,
    rankTitle: 'Nível 7 • Subtenente',
    badge: 'Combinatória',
    title: 'Análise Combinatória Tática',
    subtitle: 'PFC, Arranjo e Combinação Simples',
    description: 'Aprenda de uma vez por todas a diferença crucial: "A ordem importa?" Se importa é Arranjo/Fila, se não importa é Combinação!',
    teoriaDoutrina: {
      conceitoChave: 'A Análise Combinatória estuda técnicas de contagem sem a necessidade de enumerar todos os elementos individualmente.',
      formulaOuRegra: '1) PFC (Princípio Multiplicativo): Se uma decisão tem "a" modos e outra tem "b" modos, o total é a x b. | 2) PERGUNTA DE OURO: "A ordem dos elementos faz diferença?" Se SIM (senhas, pódios, cargos diferentes) -> ARRANJO / MULTIPLICAÇÃO. Se NÃO (equipes, grupos, comissões, guarnições) -> COMBINAÇÃO: C(n,p) = n! / (p!(n-p)!).',
      maceteMnemônico: 'Mnemônico da ORDEM: Comissões, Duplas e Viaturas SEM cargo específico = COMBINAÇÃO (divide pelo fatorial dos escolhidos para matar as repetições)!',
      exemploPratico: 'Escolher Comandante e Subcomandante entre 5: 5 x 4 = 20 (ordem importa). Escolher uma dupla de patrulha entre 5: (5 x 4) / 2! = 10 (ordem não importa).'
    },
    questions: [
      {
        id: 'rl-7-1',
        question: 'Um oficial do 16º BPM precisa escalar uma guarnição composta por 3 soldados escolhidos entre um grupo de 8 soldados disponíveis. Como todos desempenharão a mesma função na patrulha a pé, de quantas maneiras distintas essa guarnição pode ser formada?',
        options: [
          'A) 24 maneiras',
          'B) 56 maneiras',
          'C) 120 maneiras',
          'D) 336 maneiras',
          'E) 512 maneiras'
        ],
        correctIndex: 1,
        explanation: 'Como os soldados desempenham a mesma função, a ordem de escolha NÃO importa. Trata-se de uma Combinação Simples de 8 elementos tomados 3 a 3: C(8,3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56 maneiras.',
        passoAPasso: [
          'Passo 1: Fazer a pergunta de ouro: "A ordem importa?" Escolher {Silva, Souza, Santos} é a mesma patrulha que {Santos, Silva, Souza}. A ordem NÃO importa -> COMBINAÇÃO!',
          'Passo 2: Fórmula da Combinação: C(8, 3) = 8! / (3! x 5!).',
          'Passo 3: Método tático rápido: No numerador, faça o 8 descer 3 casas: 8 x 7 x 6 = 336.',
          'Passo 4: No denominador, faça o 3 descer até 1: 3 x 2 x 1 = 6.',
          'Passo 5: Divisão: 336 / 6 = 56 maneiras distintas.'
        ],
        regraOuro: 'Patrulha, equipe e comissão sem distinção de cargo = COMBINAÇÃO (sempre divide pelo fatorial)!',
        pegadinhaBanca: '336 (alternativa D) é o cálculo do Arranjo (8 x 7 x 6 sem dividir por 6). A banca AOCP coloca essa alternativa para pegar quem esqueceu de dividir!'
      },
      {
        id: 'rl-7-2',
        question: 'Para acessar o sistema de despacho de viaturas da PMPE, um policial deve criar uma senha de 4 dígitos distintos escolhidos entre os algarismos de 1 a 9 (sem repetir algarismos). Quantas senhas possíveis podem ser cadastradas?',
        options: [
          'A) 126 senhas',
          'B) 504 senhas',
          'C) 3.024 senhas',
          'D) 6.561 senhas',
          'E) 9.000 senhas'
        ],
        correctIndex: 2,
        explanation: 'Em senhas e códigos, a ordem dos números FAZ TOTAL DIFERENÇA (1234 é diferente de 4321). Pelo Princípio Fundamental da Contagem (PFC): 1º dígito tem 9 opções; 2º tem 8; 3º tem 7; 4º tem 6. Total = 9 x 8 x 7 x 6 = 3.024 senhas.',
        passoAPasso: [
          'Passo 1: A ordem dos dígitos importa em senhas? SIM! Senha é ordem estrita.',
          'Passo 2: Algarismos disponíveis de 1 a 9 = 9 algarismos no total.',
          'Passo 3: Dígitos DISTINTOS (sem repetição):',
          '  - 1º dígito: 9 possibilidades',
          '  - 2º dígito: 8 possibilidades',
          '  - 3º dígito: 7 possibilidades',
          '  - 4º dígito: 6 possibilidades',
          'Passo 4: Multiplicação (PFC): 9 x 8 x 7 x 6 = 72 x 42 = 3.024 senhas.'
        ],
        regraOuro: 'Senha, placa e telefone = A ORDEM IMPORTA SEMPRE (PFC / Arranjo)!',
        pegadinhaBanca: 'Se o enunciado permitisse repetição seria 9 x 9 x 9 x 9 = 6.561 (alternativa D). Mas ele exigiu dígitos distintos!'
      },
      {
        id: 'rl-7-3',
        question: 'Quantos anagramas possui a palavra "POLICIA" (desconsiderando acentuação gráfica)?',
        options: [
          'A) 720 anagramas',
          'B) 1.260 anagramas',
          'C) 2.520 anagramas',
          'D) 5.040 anagramas',
          'E) 420 anagramas'
        ],
        correctIndex: 2,
        explanation: 'A palavra POLICIA tem 7 letras no total, porém as letras O, L, C, A aparecem 1 vez e a letra I repete 2 vezes. Trata-se de permutação com repetição: P_7^(2) = 7! / 2! = 5.040 / 2 = 2.520 anagramas.',
        passoAPasso: [
          'Passo 1: Contar o total de letras de P-O-L-I-C-I-A = 7 letras.',
          'Passo 2: Identificar letras repetidas: a letra "I" aparece 2 vezes.',
          'Passo 3: Fórmula da permutação com repetição: P_n^(k) = n! / k!.',
          'Passo 4: 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5.040.',
          'Passo 5: 2! = 2 x 1 = 2.',
          'Passo 6: Divisão: 5.040 / 2 = 2.520 anagramas.'
        ],
        regraOuro: 'Anagrama com letra repetida divide pelo fatorial de cada repetição!',
        pegadinhaBanca: '5.040 (alternativa D) é 7! sem dividir pela repetição da letra I. Não caia nessa!'
      },
      {
        id: 'rl-7-4',
        question: 'Entre 6 tenentes e 4 capitães, deseja-se formar uma comissão de julgamento disciplinar com 3 oficiais, sendo EXATAMENTE 2 tenentes e 1 capitão. De quantas formas distintas essa comissão pode ser estruturada?',
        options: [
          'A) 24 formas',
          'B) 60 formas',
          'C) 90 formas',
          'D) 120 formas',
          'E) 15 formas'
        ],
        correctIndex: 1,
        explanation: 'Etapa 1: Escolher 2 tenentes entre 6: C(6,2) = (6 x 5) / (2 x 1) = 15. Etapa 2: Escolher 1 capitão entre 4: C(4,1) = 4. Pelo PFC, multiplica-se as duas etapas independentes: 15 x 4 = 60 formas distintas.',
        passoAPasso: [
          'Passo 1: A comissão exige 2 tenentes E 1 capitão (conectivo E = multiplicação).',
          'Passo 2: Escolha dos tenentes: Combinação C(6, 2) = (6 x 5) / 2 = 15.',
          'Passo 3: Escolha dos capitães: Combinação C(4, 1) = 4.',
          'Passo 4: Princípio Fundamental da Contagem: 15 x 4 = 60 formas.',
          'Passo 5: Resposta final: 60 comissões possíveis.'
        ],
        regraOuro: 'Grupos mistos: calcula a combinação de cada categoria separadamente e MULTIPLICA os resultados!',
        pegadinhaBanca: 'Somar 15 + 4 = 19 em vez de multiplicar é o erro de quem confunde a regra do "E" com a do "OU".'
      }
    ]
  },
  {
    id: 8,
    rankTitle: 'Nível 8 • Comandante Geral RLM',
    badge: 'Probabilidade',
    title: 'Probabilidade Tática & Eventos Sucessivos',
    subtitle: 'Regra de Laplace, Eventos sem Reposição e Condicional',
    description: 'O topo da exigência militar: cálculos de probabilidade simples, sucessiva sem reposição e união de eventos com passo a passo cirúrgico.',
    teoriaDoutrina: {
      conceitoChave: 'Probabilidade mede a chance de ocorrência de um evento específico dentro de um espaço amostral equiprovável.',
      formulaOuRegra: '1) Regra de Laplace: P(E) = Casos Favoráveis / Casos Possíveis (Total). | 2) Regra do "E" (Multiplicação): P(A e B) = P(A) x P(B|A). ATENÇÃO AOS EVENTOS SEM REPOSIÇÃO: o numerador e o denominador DIMINUEM na 2ª retirada! | 3) Evento Complementar: P(Não A) = 1 - P(A).',
      maceteMnemônico: 'Laplace Militar: O que eu QUERO em cima, TUDO o que existe embaixo! Na retirada sucessiva sem reposição, o total SEMPRE cai de 1 em 1!',
      exemploPratico: 'Em uma urna com 4 bolas azuis e 6 vermelhas (total 10): Tirar duas azuis sem reposição = (4/10) x (3/9) = 12/90 = 2/15.'
    },
    questions: [
      {
        id: 'rl-8-1',
        question: 'Em um pelotão da PMPE com 25 policiais militares, 15 são do sexo masculino e 10 são do sexo feminino. Se 2 policiais forem sorteados sucessivamente e SEM REPOSIÇÃO para compor uma escala especial de plantão de réveillon, qual é a probabilidade exata de que AMBOS os sorteados sejam do sexo feminino?',
        options: [
          'A) 16% (ou 4/25)',
          'B) 15% (ou 3/20)',
          'C) 20% (ou 1/5)',
          'D) 8% (ou 2/25)',
          'E) 12% (ou 3/25)'
        ],
        correctIndex: 1,
        explanation: 'Probabilidade de eventos sucessivos sem reposição: 1º sorteio feminino = 10/25. 2º sorteio feminino (restam 9 mulheres e 24 policiais no total) = 9/24. P = (10/25) x (9/24) = (2/5) x (3/8) = 6/40 = 3/20 = 0,15 = 15%.',
        passoAPasso: [
          'Passo 1: Espaço amostral total inicial = 25 policiais (15 homens + 10 mulheres).',
          'Passo 2: Evento 1 (Primeira mulher): P(1ª Mulher) = 10/25 (simplificando por 5 = 2/5).',
          'Passo 3: Condição de contorno: O sorteio é SEM REPOSIÇÃO!',
          'Passo 4: Evento 2 (Segunda mulher): Agora restam 9 mulheres favoráveis e 24 policiais no total. P(2ª Mulher) = 9/24 (simplificando por 3 = 3/8).',
          'Passo 5: Conectivo "E" -> Multiplicar as probabilidades: P = (2/5) x (3/8) = 6/40.',
          'Passo 6: Simplificando por 2: 3/20.',
          'Passo 7: Em porcentagem: (3 / 20) x 100 = 15%.'
        ],
        regraOuro: 'Sem reposição: SEMPRE subtraia 1 do numerador e 1 do denominador no próximo sorteio!',
        pegadinhaBanca: 'Se o candidato calcular com reposição faria (10/25) x (10/25) = 100/625 = 16% (alternativa A). A AOCP sempre coloca a opção "com reposição" para enganar!'
      },
      {
        id: 'rl-8-2',
        question: 'Um dado comum não viciado de 6 faces (numeradas de 1 a 6) é lançado sobre a mesa. Qual é a probabilidade de se obter um número PRIMO OU um número PAR?',
        options: [
          'A) 1/2 (50%)',
          'B) 2/3 (66,6%)',
          'C) 5/6 (83,3%)',
          'D) 1 (100%)',
          'E) 1/3 (33,3%)'
        ],
        correctIndex: 2,
        explanation: 'Espaço amostral: {1, 2, 3, 4, 5, 6} (6 elementos). Primos no dado: {2, 3, 5} (3 elementos). Pares no dado: {2, 4, 6} (3 elementos). Intersecção (primo e par): {2} (1 elemento). P(A ou B) = P(A) + P(B) - P(A ∩ B) = 3/6 + 3/6 - 1/6 = 5/6.',
        passoAPasso: [
          'Passo 1: Identificar o total de faces possíveis = 6.',
          'Passo 2: Conjunto dos Primos: {2, 3, 5} -> 3 elementos. (Atenção: 1 NÃO é primo!).',
          'Passo 3: Conjunto dos Pares: {2, 4, 6} -> 3 elementos.',
          'Passo 4: Identificar a intersecção (elementos comuns): o número 2 é par e primo ao mesmo tempo -> 1 elemento.',
          'Passo 5: União de eventos: P = (3 + 3 - 1) / 6 = 5/6.',
          'Passo 6: Os casos favoráveis na união são {2, 3, 4, 5, 6} -> 5 faces favoráveis em 6 possíveis = 5/6.'
        ],
        regraOuro: 'Regra da União de Eventos: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Não conte o mesmo elemento duas vezes!',
        pegadinhaBanca: 'Somar 3/6 + 3/6 = 6/6 = 100% (alternativa D) é o erro de quem esquece de subtrair o elemento que está nos dois conjuntos (o número 2).'
      },
      {
        id: 'rl-8-3',
        question: 'Em uma caixa de munições da reserva de armas há 40 cartuchos calibre 9mm, sendo 8 com defeito de espoleta e 32 em perfeitas condições. Retirando-se um cartucho ao acaso, qual é a probabilidade de ele estar em PERFEITAS CONDIÇÕES?',
        options: [
          'A) 20%',
          'B) 25%',
          'C) 75%',
          'D) 80%',
          'E) 85%'
        ],
        correctIndex: 3,
        explanation: 'Probabilidade direta de Laplace: P = Casos Favoráveis / Total = 32 / 40. Simplificando por 8: 4 / 5 = 0,80 = 80%.',
        passoAPasso: [
          'Passo 1: Total de cartuchos (espaço amostral) = 40.',
          'Passo 2: Cartuchos perfeitos (casos favoráveis) = 32.',
          'Passo 3: Fração: 32 / 40.',
          'Passo 4: Simplificar dividindo numerador e denominador por 8: (32/8) / (40/8) = 4/5.',
          'Passo 5: Converter em porcentagem: (4 / 5) x 100% = 80%.'
        ],
        regraOuro: 'P = Favoráveis / Total. Lembre-se que 4/5 é sempre 80%!',
        pegadinhaBanca: '20% (alternativa A) é a probabilidade dos cartuchos com DEFEITO (8/40). Leia com atenção o que o enunciado pede.'
      },
      {
        id: 'rl-8-4',
        question: 'A probabilidade de um atirador de elite da PMPE acertar o alvo a 100 metros de distância é de 80% (ou 0,8). Se ele efetuar 3 disparos sucessivos e independentes, qual é a probabilidade de ele ERRAR TODOS OS 3 DISPAROS?',
        options: [
          'A) 0,8% (ou 0,008)',
          'B) 2,4% (ou 0,024)',
          'C) 6,4% (ou 0,064)',
          'D) 20% (ou 0,2)',
          'E) 51,2% (ou 0,512)'
        ],
        correctIndex: 0,
        explanation: 'Se a chance de acertar é 80% (0,8), a chance de errar um disparo é o complementar: 1 - 0,8 = 20% (0,2). Como os 3 tiros são independentes, a probabilidade de errar o 1º E errar o 2º E errar o 3º é: 0,2 x 0,2 x 0,2 = 0,008 = 0,8%.',
        passoAPasso: [
          'Passo 1: Chance de acertar P(A) = 0,8.',
          'Passo 2: Chance de errar P(E) = 1 - 0,8 = 0,2 (ou 20%).',
          'Passo 3: Os 3 disparos são eventos independentes com regra do "E".',
          'Passo 4: P(Errar 1º E Errar 2º E Errar 3º) = P(E) x P(E) x P(E).',
          'Passo 5: Multiplicação: 0,2 x 0,2 x 0,2 = 0,008.',
          'Passo 6: Converter 0,008 para porcentagem: 0,008 x 100% = 0,8%.'
        ],
        regraOuro: 'Eventos independentes: multiplica a probabilidade individual de cada etapa!',
        pegadinhaBanca: '0,512 (51,2%) é a probabilidade de ele ACERTAR todos os 3 (0,8 x 0,8 x 0,8). O candidato afobado calcula o acerto em vez do erro.'
      }
    ]
  }
];

interface LogicMasterGameProps {
  userName: string;
  onExit: () => void;
  onAwardXp: (amount: number) => void;
}

export const LogicMasterGame: React.FC<LogicMasterGameProps> = ({ userName, onExit, onAwardXp }) => {
  // Estado de progresso de níveis salvo no localStorage por usuário
  const storageKey = `pmpe_rlm_levels_${userName || 'guest'}`;

  const [levelProgress, setLevelProgress] = useState<Record<number, { stars: number; bestScore: number; completed: boolean }>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Nível 1 desbloqueado por padrão
    return {
      1: { stars: 0, bestScore: 0, completed: false }
    };
  });

  const [activeLevelId, setActiveLevelId] = useState<number | null>(null);
  const [showTheoryModal, setShowTheoryModal] = useState<boolean>(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [showStepByStep, setShowStepByStep] = useState<boolean>(false);
  const [levelCompleted, setLevelCompleted] = useState<boolean>(false);

  const activeLevel = useMemo(() => {
    if (!activeLevelId) return null;
    return LOGIC_LEVELS.find((l) => l.id === activeLevelId) || null;
  }, [activeLevelId]);

  const currentQ = useMemo(() => {
    if (!activeLevel) return null;
    return activeLevel.questions[currentQuestionIndex] || null;
  }, [activeLevel, currentQuestionIndex]);

  // Salva progresso no localStorage
  const saveProgress = (newProg: Record<number, { stars: number; bestScore: number; completed: boolean }>) => {
    setLevelProgress(newProg);
    try {
      localStorage.setItem(storageKey, JSON.stringify(newProg));
    } catch {
      // fallback
    }
  };

  // Iniciar uma fase
  const handleStartLevel = (levelId: number) => {
    sound.playClick();
    setActiveLevelId(levelId);
    setShowTheoryModal(true);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setCorrectCount(0);
    setShowStepByStep(false);
    setLevelCompleted(false);
  };

  // Selecionar uma alternativa
  const handleSelectOption = (idx: number) => {
    if (hasAnswered || !currentQ) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      sound.playSuccess();
      setCorrectCount((prev) => prev + 1);
      onAwardXp(35); // +35 XP por acerto
    } else {
      sound.playError();
      setShowStepByStep(true); // Exibe o passo a passo automaticamente se errar!
    }
  };

  // Avançar para a próxima questão ou concluir a fase
  const handleNextQuestion = () => {
    if (!activeLevel) return;
    sound.playClick();

    if (currentQuestionIndex + 1 < activeLevel.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setShowStepByStep(false);
    } else {
      // Finalizou a bateria da fase!
      finishLevel();
    }
  };

  // Concluir e pontuar o nível
  const finishLevel = () => {
    if (!activeLevel) return;
    setLevelCompleted(true);

    const total = activeLevel.questions.length;
    const finalCorrect = correctCount + (selectedOption === currentQ?.correctIndex ? 1 : 0);
    const pct = (finalCorrect / total) * 100;

    let starsEarned = 0;
    if (pct === 100) starsEarned = 3;
    else if (pct >= 75) starsEarned = 2;
    else if (pct >= 50) starsEarned = 1;

    const isPassed = pct >= 50;

    if (isPassed) {
      sound.playLevelUp();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onAwardXp(120); // Bônus de aprovação de fase
    }

    const currentBest = levelProgress[activeLevel.id]?.bestScore || 0;
    const currentStars = levelProgress[activeLevel.id]?.stars || 0;

    const updated = {
      ...levelProgress,
      [activeLevel.id]: {
        stars: Math.max(currentStars, starsEarned),
        bestScore: Math.max(currentBest, finalCorrect),
        completed: isPassed || (levelProgress[activeLevel.id]?.completed ?? false)
      }
    };

    // Desbloqueia o próximo nível se passou
    if (isPassed && activeLevel.id < LOGIC_LEVELS.length) {
      const nextId = activeLevel.id + 1;
      if (!updated[nextId]) {
        updated[nextId] = { stars: 0, bestScore: 0, completed: false };
      }
    }

    saveProgress(updated);
  };

  // Total de estrelas acumuladas
  const totalStars = useMemo(() => {
    return Object.values(levelProgress).reduce((acc, curr) => acc + (curr.stars || 0), 0);
  }, [levelProgress]);

  // Se nenhum nível está ativo, mostra o Mapa da Trilha de Fases
  if (!activeLevel) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        {/* Top Header do Modo */}
        <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
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
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Trilha do Conhecimento RLM: Desafio em Níveis
                </span>
                <span className="badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                  Metodologia AOCP
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', margin: 0 }}>
                Evolua de Recruta a Comandante Geral em 8 patentes progressivas. Domine teoria, mnemônicos e passo a passo de cada cálculo.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', background: 'rgba(0,0,0,0.3)', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fbbf24' }}>
              <Sparkles size={18} />
              <span style={{ fontWeight: 800, fontSize: '1rem' }}>{totalStars} / 24 ⭐</span>
            </div>
            <div style={{ height: '20px', width: '1px', background: 'var(--border-subtle)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8' }}>
              <GraduationCap size={18} />
              <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>
                {Object.values(levelProgress).filter((l) => l.completed).length} de {LOGIC_LEVELS.length} Fases
              </span>
            </div>
          </div>
        </div>

        {/* Grid dos Níveis (Patentes RLM) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {LOGIC_LEVELS.map((lvl) => {
            const prog = levelProgress[lvl.id];
            const isUnlocked = !!prog;
            const isCompleted = prog?.completed;
            const stars = prog?.stars || 0;

            return (
              <div
                key={lvl.id}
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  position: 'relative',
                  opacity: isUnlocked ? 1 : 0.6,
                  border: isCompleted ? '1px solid rgba(34, 197, 94, 0.4)' : isUnlocked ? '1px solid rgba(168, 85, 247, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isUnlocked ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' : 'none',
                  background: isCompleted ? 'rgba(20, 83, 45, 0.25)' : isUnlocked ? 'rgba(25, 20, 35, 0.6)' : 'rgba(15, 15, 15, 0.4)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isUnlocked ? '#c084fc' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lvl.rankTitle}
                    </span>
                    <div style={{ display: 'flex', gap: '0.15rem' }}>
                      {[1, 2, 3].map((starIdx) => (
                        <span key={starIdx} style={{ fontSize: '1rem', color: starIdx <= stars ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)' }}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                    {lvl.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {lvl.subtitle}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {lvl.description}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    {lvl.questions.length} Questões Táticas
                  </span>
                  {isUnlocked ? (
                    <button
                      onClick={() => handleStartLevel(lvl.id)}
                      className="btn btn-primary"
                      style={{
                        padding: '0.45rem 1rem',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: isCompleted ? 'linear-gradient(135deg, #16a34a, #15803d)' : 'linear-gradient(135deg, #9333ea, #7e22ce)'
                      }}
                    >
                      <span>{isCompleted ? 'Repetir Treino' : 'Iniciar Fase'}</span>
                      <ChevronRight size={15} />
                    </button>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                      🔒 Bloqueado (Passe a Fase {lvl.id - 1})
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Se a fase foi concluída, exibe tela de relatório da fase
  if (levelCompleted) {
    const finalCorrect = correctCount;
    const total = activeLevel.questions.length;
    const pct = Math.round((finalCorrect / total) * 100);
    const passed = pct >= 50;

    return (
      <div className="glass-panel" style={{ maxWidth: '650px', margin: '2rem auto', padding: '2rem', textAlign: 'center', borderRadius: '16px', border: passed ? '1px solid rgba(34, 197, 94, 0.5)' : '1px solid rgba(239, 68, 68, 0.5)' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: passed ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', color: passed ? '#22c55e' : '#ef4444' }}>
            {passed ? <Award size={38} /> : <AlertTriangle size={38} />}
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase' }}>
            {activeLevel.rankTitle}
          </span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.2rem' }}>
            {passed ? 'Missão Cumprida com Sucesso!' : 'Necessário Revisar a Doutrina!'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '480px', margin: '0.5rem auto 0 auto' }}>
            {passed 
              ? `Você dominou os fundamentos de ${activeLevel.title} e avançou na sua preparação para soldado da PMPE.`
              : 'O ponto de corte exige ao menos 50% de aproveitamento nesta fase. Revise o manual tático e tente novamente!'}
          </p>
        </div>

        {/* Placares e Estrelas */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '2rem', color: '#fbbf24' }}>
          <span>{pct >= 50 ? '★' : '☆'}</span>
          <span>{pct >= 75 ? '★' : '☆'}</span>
          <span>{pct === 100 ? '★' : '☆'}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: 'rgba(0, 0, 0, 0.35)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Acertos</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#22c55e' }}>{finalCorrect} / {total}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Aproveitamento</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: passed ? '#38bdf8' : '#ef4444' }}>{pct}%</div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>XP Ganho</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fbbf24' }}>+{finalCorrect * 35 + (passed ? 120 : 0)} XP</div>
          </div>
        </div>

        {/* Ações */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleStartLevel(activeLevel.id)}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.2rem' }}
          >
            <RotateCcw size={16} />
            <span>Treinar Novamente</span>
          </button>
          
          {passed && activeLevel.id < LOGIC_LEVELS.length && (
            <button
              onClick={() => handleStartLevel(activeLevel.id + 1)}
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.2rem', background: 'linear-gradient(135deg, #16a34a, #15803d)' }}
            >
              <span>Avançar para Nível {activeLevel.id + 1}</span>
              <ChevronRight size={16} />
            </button>
          )}

          <button
            onClick={() => setActiveLevelId(null)}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.2rem' }}
          >
            <ArrowLeft size={16} />
            <span>Voltar à Trilha</span>
          </button>
        </div>
      </div>
    );
  }

  // Modal Teórico de Doutrina da Fase (pode ser aberto antes ou durante o treino)
  if (showTheoryModal) {
    const t = activeLevel.teoriaDoutrina;
    return (
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '1rem auto', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Manual Tático PMPE • {activeLevel.rankTitle}
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0.2rem 0' }}>
              {activeLevel.title}
            </h2>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>
              {activeLevel.subtitle}
            </div>
          </div>
          <button
            onClick={() => setActiveLevelId(null)}
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            Sair
          </button>
        </div>

        {/* Blocos de Doutrina Teórica */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
          {/* Conceito Chave */}
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #38bdf8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
              <BookOpen size={16} />
              <span>Conceito Fundamental</span>
            </div>
            <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
              {t.conceitoChave}
            </p>
          </div>

          {/* Fórmula / Regra de Ouro */}
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
              <Calculator size={16} />
              <span>Regra de Cálculo & Tabela-Verdade</span>
            </div>
            <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5', fontFamily: 'var(--font-mono)' }}>
              {t.formulaOuRegra}
            </p>
          </div>

          {/* Mnemônico da Banca */}
          <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#c084fc', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
              <Flame size={16} />
              <span>Macete Mnemônico Tático</span>
            </div>
            <p style={{ color: '#e9d5ff', fontSize: '0.88rem', margin: 0, lineHeight: '1.5', fontWeight: 600 }}>
              {t.maceteMnemônico}
            </p>
          </div>

          {/* Exemplo Prático */}
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #22c55e' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#22c55e', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
              <CheckCircle2 size={16} />
              <span>Aplicação em Questão Policial</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', margin: 0, lineHeight: '1.5', fontStyle: 'italic' }}>
              {t.exemploPratico}
            </p>
          </div>
        </div>

        {/* Botão de Início */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              setShowTheoryModal(false);
            }}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', fontSize: '0.95rem', background: 'linear-gradient(135deg, #9333ea, #7e22ce)' }}
          >
            <span>Iniciar Bateria Prática ({activeLevel.questions.length} Questões)</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // Tela de Questão em Andamento
  if (!currentQ) return null;

  const isCurrentCorrect = selectedOption === currentQ.correctIndex;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
      {/* Top Bar da Fase */}
      <div className="glass-panel" style={{ padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              setActiveLevelId(null);
            }}
            className="btn btn-secondary"
            style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
          >
            <ArrowLeft size={14} />
          </button>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase' }}>
              {activeLevel.rankTitle}
            </span>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Questão {currentQuestionIndex + 1} de {activeLevel.questions.length}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setShowTheoryModal(true)}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.35rem 0.75rem', fontSize: '0.8rem', color: '#38bdf8' }}
          >
            <BookOpen size={14} />
            <span>Ver Manual Tático</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(0,0,0,0.4)', padding: '0.35rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.85rem', color: '#22c55e', fontWeight: 700 }}>
            <span>Acertos: {correctCount}</span>
          </div>
        </div>
      </div>

      {/* Card da Questão */}
      <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)', fontWeight: 700 }}>
            Raciocínio Lógico & Metodologia AOCP
          </span>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.75rem', lineHeight: '1.6' }}>
            {currentQ.question}
          </h3>
        </div>

        {/* Alternativas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
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
                  borderRadius: '10px',
                  background: itemBg,
                  border: `1px solid ${itemBorder}`,
                  color: itemColor,
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  fontSize: '0.92rem',
                  transition: 'all 0.15s ease',
                  cursor: hasAnswered ? 'default' : 'pointer'
                }}
              >
                <span>{opt}</span>
                {hasAnswered && idx === currentQ.correctIndex && <CheckCircle2 size={18} color="#22c55e" />}
                {hasAnswered && idx === selectedOption && idx !== currentQ.correctIndex && <XCircle size={18} color="#ef4444" />}
              </button>
            );
          })}
        </div>

        {/* Feedback pós-resposta */}
        {hasAnswered && (
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: isCurrentCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.12)',
                border: isCurrentCorrect ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontWeight: 700, color: isCurrentCorrect ? '#22c55e' : '#ef4444' }}>
                {isCurrentCorrect ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                <span>{isCurrentCorrect ? 'Resposta Correta! (+35 XP)' : 'Resposta Incorreta — Não desanime, aprenda com o erro!'}</span>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', margin: 0, lineHeight: '1.5' }}>
                {currentQ.explanation}
              </p>
            </div>

            {/* Passo a Passo Detalhado da Resolução */}
            {(showStepByStep || !isCurrentCorrect) && (
              <div style={{ background: 'rgba(0, 0, 0, 0.45)', padding: '1.15rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                  <Calculator size={16} />
                  <span>Passo a Passo Cirúrgico da Resolução (Cálculo & Lógica):</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {currentQ.passoAPasso.map((step, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.84rem', color: '#e2e8f0', display: 'flex', gap: '0.5rem', lineHeight: '1.4' }}>
                      <span style={{ color: '#38bdf8', fontWeight: 700 }}>{sIdx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                {/* Regra de Ouro */}
                <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontSize: '0.82rem', fontWeight: 600 }}>
                  <Zap size={14} />
                  <span>Regra de Ouro: {currentQ.regraOuro}</span>
                </div>

                {/* Pegadinha da Banca */}
                {currentQ.pegadinhaBanca && (
                  <div style={{ marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f87171', fontSize: '0.82rem' }}>
                    <AlertTriangle size={14} />
                    <span>Pegadinha AOCP: {currentQ.pegadinhaBanca}</span>
                  </div>
                )}
              </div>
            )}

            {/* Botão de Avanço */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button
                onClick={handleNextQuestion}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.9rem',
                  background: 'linear-gradient(135deg, #16a34a, #15803d)'
                }}
              >
                <span>{currentQuestionIndex + 1 < activeLevel.questions.length ? 'Próxima Questão' : 'Ver Resultado da Fase'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
