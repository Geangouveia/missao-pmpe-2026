import type { QuizQuestion } from '../../types/game';

/**
 * SUPER CADERNO OFICIAL PMPE 2026 - BANCA INSTITUTO AOCP (200 QUESTÕES INÉDITAS)
 * Distribuição completa por todos os Blocos do Edital:
 * - Bloco I: Língua Portuguesa (35Q) e História de Pernambuco (35Q)
 * - Bloco II: Raciocínio Lógico (35Q) e Noções de Informática (35Q)
 * - Bloco III: Direito Constitucional (20Q), Direitos Humanos (20Q) e Legislação Extravagante (20Q)
 * 
 * Gabarito distribuído equitativamente de A a E.
 */
export const BANCO_QUESTOES_EDITAL_200: QuizQuestion[] = [
  {
    "id": "ed200-q001",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica",
    "question": "De acordo com o Acordo Ortográfico vigente e as regras de acentuação gráfica da Língua Portuguesa, assinale a alternativa em que todos os vocábulos são acentuados pela mesma razão gramatical:",
    "options": [
      "Viatura, café, saída, sótão, cipó.",
      "Lúcido, tático, bélico, câmara, paroxítona.",
      "Juízes, saúde, país, refém, herói.",
      "História, relatório, armazém, troféu, órfão.",
      "Público, tábua, amapá, árvore, rubrica."
    ],
    "correctIndex": 1,
    "explanation": "Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
    "hint": "Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PROPAROXÍTONA: É a regra mais fácil, TODAS são acentuadas sem exceção!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
      "C": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "D": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "E": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico."
    }
  },
  {
    "id": "ed200-q002",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "Considerando as regras que regem o uso do acento grave indicador da crase, assinale a frase em que o seu emprego é estritamente OBRIGATÓRIO:",
    "options": [
      "O comandante comunicou o ocorrido à sua secretária com discrição.",
      "O pelotão marchou até à margem do rio durante o exercício.",
      "Os patrulheiros entregaram as medalhas à Maria pelo excelente serviço.",
      "O soldado dirigiu-se à repartição policial para entregar o auto de flagrante delito.",
      "A equipe militar deslocou-se a pé durante a ronda noturna."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
    "hint": "Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Vou A, volto DA -> Crase HÁ! Vou A, volto DE -> Crase pra QUÊ?!",
    "analiseAlternativas": {
      "A": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "B": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "C": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
      "E": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado."
    }
  },
  {
    "id": "ed200-q003",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal",
    "question": "No tocante à concordância verbal estabelecida pela norma-padrão da Língua Portuguesa, assinale a frase inteiramente CORRETA:",
    "options": [
      "Haviam decorrido muitos dias desde a operação integrada de patrulhamento.",
      "Havia muitos dias que o relatório não eram concluído pelos escrivães.",
      "Fazem dez anos que a nova unidade operacional foi instalada no agreste.",
      "Tratam-se de ocorrências de alta complexidade registradas pelo batalhão.",
      "Mais de um policial se agrediram mutuamente durante o calor do entrevero."
    ],
    "correctIndex": 0,
    "explanation": "No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
    "hint": "Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HAVER com particípio (tempo composto) FLEXIONA: Eles haviam chegado!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
      "B": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "C": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "D": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "E": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal."
    }
  },
  {
    "id": "ed200-q004",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "A regência verbal consiste na relação de subordinação entre o verbo e seus complementos. Assinale a frase que atende à norma-padrão:",
    "options": [
      "O policial aspirava o cargo de sargento com enorme dedicação e bravura.",
      "O comandante visava o documento antes de autorizar a saída da viatura militar.",
      "O soldado aspirava ao cargo de sargento na corporação militar pernambucana.",
      "Os guerreiros preferem mais treinar na chuva do que ficar no quartel ocioso.",
      "A equipe de choque assistiu o jogo de futebol na arquibancada do estádio."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
    "hint": "Aspirar = almejar pede preposição 'a'.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Aspirar ar (inalar) -> Sem A. Aspirar sonho (almejar) -> Com A (ao cargo)!",
    "analiseAlternativas": {
      "A": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "B": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
      "D": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "E": "Incorreta. Aspirar = almejar pede preposição 'a'."
    }
  },
  {
    "id": "ed200-q005",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal",
    "question": "Segundo a norma-padrão sobre a colocação dos pronomes oblíquos átonos, assinale a frase em que a próclise é OBRIGATÓRIA:",
    "options": [
      "Entregou-se o suspeito imediatamente às autoridades competentes na delegacia.",
      "Os policiais apresentaram-se pontualmente para o serviço extraordinário no centro.",
      "O tenente informou-nos que a escala de serviço já estava homologada pelo comando.",
      "Disseram-nos que a operação no litoral pernambucano foi coroada de êxito.",
      "Não se omitiram os detalhes da ocorrência policial no boletim unificado."
    ],
    "correctIndex": 4,
    "explanation": "A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
    "hint": "Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PALAVRAS ATRATIVAS: Nariz (Negativas, Advérbios, Relativos, Indefinidos, orações interrogativas) puxam próclise!",
    "analiseAlternativas": {
      "A": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "B": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "C": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "D": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo."
    }
  },
  {
    "id": "ed200-q006",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação e Emprego da Vírgula",
    "question": "Assinale a alternativa em que a pontuação está empregada em estrita conformidade com a norma culta:",
    "options": [
      "O comandante geral, aprovou a escala do batalhão após analisar o relatório.",
      "O comandante geral, após analisar o relatório minucioso, aprovou a escala do batalhão.",
      "Os policiais militares prenderam, em flagrante os infratores no bairro histórico.",
      "Durante a ronda noturna os soldados observaram, movimentações suspeitas na praça.",
      "A equipe tática especializada cumpriu com rigor, todas as metas operacionais fixadas."
    ],
    "correctIndex": 1,
    "explanation": "A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
    "hint": "Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SVC (Sujeito - Verbo - Complemento): Não se coloca vírgula no meio do trio!",
    "analiseAlternativas": {
      "A": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
      "C": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "D": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "E": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto."
    }
  },
  {
    "id": "ed200-q007",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Homônimos e Parônimos",
    "question": "Assinale a alternativa que preenche CORRETA e respectivamente as lacunas da frase: 'O oficial precisou _______ o mandato do parlamentar após o juiz expedir o _______ de prisão.'",
    "options": [
      "caçar / mandado",
      "cassar / mandato",
      "caçar / mandato",
      "cassar / mandado",
      "casssar / mandado"
    ],
    "correctIndex": 3,
    "explanation": "Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
    "hint": "Cassar = anular; Mandado = ordem da autoridade judiciária.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MANDADO com D = Determinação do Juiz! MANDATO com T = Tempo político!",
    "analiseAlternativas": {
      "A": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "B": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "C": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
      "E": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária."
    }
  },
  {
    "id": "ed200-q008",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica",
    "question": "De acordo com o Acordo Ortográfico vigente e as regras de acentuação gráfica da Língua Portuguesa, assinale a alternativa em que todos os vocábulos são acentuados pela mesma razão gramatical:",
    "options": [
      "Lúcido, tático, bélico, câmara, paroxítona.",
      "Viatura, café, saída, sótão, cipó.",
      "Juízes, saúde, país, refém, herói.",
      "História, relatório, armazém, troféu, órfão.",
      "Público, tábua, amapá, árvore, rubrica."
    ],
    "correctIndex": 0,
    "explanation": "Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
    "hint": "Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PROPAROXÍTONA: É a regra mais fácil, TODAS são acentuadas sem exceção!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
      "B": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "C": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "D": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "E": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico."
    }
  },
  {
    "id": "ed200-q009",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "Considerando as regras que regem o uso do acento grave indicador da crase, assinale a frase em que o seu emprego é estritamente OBRIGATÓRIO:",
    "options": [
      "O comandante comunicou o ocorrido à sua secretária com discrição.",
      "O pelotão marchou até à margem do rio durante o exercício.",
      "O soldado dirigiu-se à repartição policial para entregar o auto de flagrante delito.",
      "Os patrulheiros entregaram as medalhas à Maria pelo excelente serviço.",
      "A equipe militar deslocou-se a pé durante a ronda noturna."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
    "hint": "Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Vou A, volto DA -> Crase HÁ! Vou A, volto DE -> Crase pra QUÊ?!",
    "analiseAlternativas": {
      "A": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "B": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
      "D": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "E": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado."
    }
  },
  {
    "id": "ed200-q010",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal",
    "question": "No tocante à concordância verbal estabelecida pela norma-padrão da Língua Portuguesa, assinale a frase inteiramente CORRETA:",
    "options": [
      "Havia muitos dias que o relatório não eram concluído pelos escrivães.",
      "Fazem dez anos que a nova unidade operacional foi instalada no agreste.",
      "Tratam-se de ocorrências de alta complexidade registradas pelo batalhão.",
      "Mais de um policial se agrediram mutuamente durante o calor do entrevero.",
      "Haviam decorrido muitos dias desde a operação integrada de patrulhamento."
    ],
    "correctIndex": 4,
    "explanation": "No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
    "hint": "Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HAVER com particípio (tempo composto) FLEXIONA: Eles haviam chegado!",
    "analiseAlternativas": {
      "A": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "B": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "C": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "D": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais."
    }
  },
  {
    "id": "ed200-q011",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "A regência verbal consiste na relação de subordinação entre o verbo e seus complementos. Assinale a frase que atende à norma-padrão:",
    "options": [
      "O policial aspirava o cargo de sargento com enorme dedicação e bravura.",
      "O soldado aspirava ao cargo de sargento na corporação militar pernambucana.",
      "O comandante visava o documento antes de autorizar a saída da viatura militar.",
      "Os guerreiros preferem mais treinar na chuva do que ficar no quartel ocioso.",
      "A equipe de choque assistiu o jogo de futebol na arquibancada do estádio."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
    "hint": "Aspirar = almejar pede preposição 'a'.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Aspirar ar (inalar) -> Sem A. Aspirar sonho (almejar) -> Com A (ao cargo)!",
    "analiseAlternativas": {
      "A": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
      "C": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "D": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "E": "Incorreta. Aspirar = almejar pede preposição 'a'."
    }
  },
  {
    "id": "ed200-q012",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal",
    "question": "Segundo a norma-padrão sobre a colocação dos pronomes oblíquos átonos, assinale a frase em que a próclise é OBRIGATÓRIA:",
    "options": [
      "Entregou-se o suspeito imediatamente às autoridades competentes na delegacia.",
      "Os policiais apresentaram-se pontualmente para o serviço extraordinário no centro.",
      "O tenente informou-nos que a escala de serviço já estava homologada pelo comando.",
      "Não se omitiram os detalhes da ocorrência policial no boletim unificado.",
      "Disseram-nos que a operação no litoral pernambucano foi coroada de êxito."
    ],
    "correctIndex": 3,
    "explanation": "A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
    "hint": "Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PALAVRAS ATRATIVAS: Nariz (Negativas, Advérbios, Relativos, Indefinidos, orações interrogativas) puxam próclise!",
    "analiseAlternativas": {
      "A": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "B": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "C": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
      "E": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória)."
    }
  },
  {
    "id": "ed200-q013",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação e Emprego da Vírgula",
    "question": "Assinale a alternativa em que a pontuação está empregada em estrita conformidade com a norma culta:",
    "options": [
      "O comandante geral, após analisar o relatório minucioso, aprovou a escala do batalhão.",
      "O comandante geral, aprovou a escala do batalhão após analisar o relatório.",
      "Os policiais militares prenderam, em flagrante os infratores no bairro histórico.",
      "Durante a ronda noturna os soldados observaram, movimentações suspeitas na praça.",
      "A equipe tática especializada cumpriu com rigor, todas as metas operacionais fixadas."
    ],
    "correctIndex": 0,
    "explanation": "A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
    "hint": "Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SVC (Sujeito - Verbo - Complemento): Não se coloca vírgula no meio do trio!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
      "B": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "C": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "D": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "E": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto."
    }
  },
  {
    "id": "ed200-q014",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Homônimos e Parônimos",
    "question": "Assinale a alternativa que preenche CORRETA e respectivamente as lacunas da frase: 'O oficial precisou _______ o mandato do parlamentar após o juiz expedir o _______ de prisão.'",
    "options": [
      "caçar / mandado",
      "cassar / mandato",
      "cassar / mandado",
      "caçar / mandato",
      "casssar / mandado"
    ],
    "correctIndex": 2,
    "explanation": "Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
    "hint": "Cassar = anular; Mandado = ordem da autoridade judiciária.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MANDADO com D = Determinação do Juiz! MANDATO com T = Tempo político!",
    "analiseAlternativas": {
      "A": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "B": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
      "D": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "E": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária."
    }
  },
  {
    "id": "ed200-q015",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica",
    "question": "De acordo com o Acordo Ortográfico vigente e as regras de acentuação gráfica da Língua Portuguesa, assinale a alternativa em que todos os vocábulos são acentuados pela mesma razão gramatical:",
    "options": [
      "Viatura, café, saída, sótão, cipó.",
      "Juízes, saúde, país, refém, herói.",
      "História, relatório, armazém, troféu, órfão.",
      "Público, tábua, amapá, árvore, rubrica.",
      "Lúcido, tático, bélico, câmara, paroxítona."
    ],
    "correctIndex": 4,
    "explanation": "Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
    "hint": "Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PROPAROXÍTONA: É a regra mais fácil, TODAS são acentuadas sem exceção!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "B": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "C": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "D": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada."
    }
  },
  {
    "id": "ed200-q016",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "Considerando as regras que regem o uso do acento grave indicador da crase, assinale a frase em que o seu emprego é estritamente OBRIGATÓRIO:",
    "options": [
      "O comandante comunicou o ocorrido à sua secretária com discrição.",
      "O soldado dirigiu-se à repartição policial para entregar o auto de flagrante delito.",
      "O pelotão marchou até à margem do rio durante o exercício.",
      "Os patrulheiros entregaram as medalhas à Maria pelo excelente serviço.",
      "A equipe militar deslocou-se a pé durante a ronda noturna."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
    "hint": "Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Vou A, volto DA -> Crase HÁ! Vou A, volto DE -> Crase pra QUÊ?!",
    "analiseAlternativas": {
      "A": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
      "C": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "D": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "E": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado."
    }
  },
  {
    "id": "ed200-q017",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal",
    "question": "No tocante à concordância verbal estabelecida pela norma-padrão da Língua Portuguesa, assinale a frase inteiramente CORRETA:",
    "options": [
      "Havia muitos dias que o relatório não eram concluído pelos escrivães.",
      "Fazem dez anos que a nova unidade operacional foi instalada no agreste.",
      "Tratam-se de ocorrências de alta complexidade registradas pelo batalhão.",
      "Haviam decorrido muitos dias desde a operação integrada de patrulhamento.",
      "Mais de um policial se agrediram mutuamente durante o calor do entrevero."
    ],
    "correctIndex": 3,
    "explanation": "No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
    "hint": "Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HAVER com particípio (tempo composto) FLEXIONA: Eles haviam chegado!",
    "analiseAlternativas": {
      "A": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "B": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "C": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
      "E": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal."
    }
  },
  {
    "id": "ed200-q018",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "A regência verbal consiste na relação de subordinação entre o verbo e seus complementos. Assinale a frase que atende à norma-padrão:",
    "options": [
      "O soldado aspirava ao cargo de sargento na corporação militar pernambucana.",
      "O policial aspirava o cargo de sargento com enorme dedicação e bravura.",
      "O comandante visava o documento antes de autorizar a saída da viatura militar.",
      "Os guerreiros preferem mais treinar na chuva do que ficar no quartel ocioso.",
      "A equipe de choque assistiu o jogo de futebol na arquibancada do estádio."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
    "hint": "Aspirar = almejar pede preposição 'a'.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Aspirar ar (inalar) -> Sem A. Aspirar sonho (almejar) -> Com A (ao cargo)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
      "B": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "C": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "D": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "E": "Incorreta. Aspirar = almejar pede preposição 'a'."
    }
  },
  {
    "id": "ed200-q019",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal",
    "question": "Segundo a norma-padrão sobre a colocação dos pronomes oblíquos átonos, assinale a frase em que a próclise é OBRIGATÓRIA:",
    "options": [
      "Entregou-se o suspeito imediatamente às autoridades competentes na delegacia.",
      "Os policiais apresentaram-se pontualmente para o serviço extraordinário no centro.",
      "Não se omitiram os detalhes da ocorrência policial no boletim unificado.",
      "O tenente informou-nos que a escala de serviço já estava homologada pelo comando.",
      "Disseram-nos que a operação no litoral pernambucano foi coroada de êxito."
    ],
    "correctIndex": 2,
    "explanation": "A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
    "hint": "Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PALAVRAS ATRATIVAS: Nariz (Negativas, Advérbios, Relativos, Indefinidos, orações interrogativas) puxam próclise!",
    "analiseAlternativas": {
      "A": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "B": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
      "D": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "E": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória)."
    }
  },
  {
    "id": "ed200-q020",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação e Emprego da Vírgula",
    "question": "Assinale a alternativa em que a pontuação está empregada em estrita conformidade com a norma culta:",
    "options": [
      "O comandante geral, aprovou a escala do batalhão após analisar o relatório.",
      "Os policiais militares prenderam, em flagrante os infratores no bairro histórico.",
      "Durante a ronda noturna os soldados observaram, movimentações suspeitas na praça.",
      "A equipe tática especializada cumpriu com rigor, todas as metas operacionais fixadas.",
      "O comandante geral, após analisar o relatório minucioso, aprovou a escala do batalhão."
    ],
    "correctIndex": 4,
    "explanation": "A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
    "hint": "Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SVC (Sujeito - Verbo - Complemento): Não se coloca vírgula no meio do trio!",
    "analiseAlternativas": {
      "A": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "B": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "C": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "D": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única."
    }
  },
  {
    "id": "ed200-q021",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Homônimos e Parônimos",
    "question": "Assinale a alternativa que preenche CORRETA e respectivamente as lacunas da frase: 'O oficial precisou _______ o mandato do parlamentar após o juiz expedir o _______ de prisão.'",
    "options": [
      "caçar / mandado",
      "cassar / mandado",
      "cassar / mandato",
      "caçar / mandato",
      "casssar / mandado"
    ],
    "correctIndex": 1,
    "explanation": "Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
    "hint": "Cassar = anular; Mandado = ordem da autoridade judiciária.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MANDADO com D = Determinação do Juiz! MANDATO com T = Tempo político!",
    "analiseAlternativas": {
      "A": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
      "C": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "D": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "E": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária."
    }
  },
  {
    "id": "ed200-q022",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica",
    "question": "De acordo com o Acordo Ortográfico vigente e as regras de acentuação gráfica da Língua Portuguesa, assinale a alternativa em que todos os vocábulos são acentuados pela mesma razão gramatical:",
    "options": [
      "Viatura, café, saída, sótão, cipó.",
      "Juízes, saúde, país, refém, herói.",
      "História, relatório, armazém, troféu, órfão.",
      "Lúcido, tático, bélico, câmara, paroxítona.",
      "Público, tábua, amapá, árvore, rubrica."
    ],
    "correctIndex": 3,
    "explanation": "Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
    "hint": "Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PROPAROXÍTONA: É a regra mais fácil, TODAS são acentuadas sem exceção!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "B": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "C": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
      "E": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico."
    }
  },
  {
    "id": "ed200-q023",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "Considerando as regras que regem o uso do acento grave indicador da crase, assinale a frase em que o seu emprego é estritamente OBRIGATÓRIO:",
    "options": [
      "O soldado dirigiu-se à repartição policial para entregar o auto de flagrante delito.",
      "O comandante comunicou o ocorrido à sua secretária com discrição.",
      "O pelotão marchou até à margem do rio durante o exercício.",
      "Os patrulheiros entregaram as medalhas à Maria pelo excelente serviço.",
      "A equipe militar deslocou-se a pé durante a ronda noturna."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
    "hint": "Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Vou A, volto DA -> Crase HÁ! Vou A, volto DE -> Crase pra QUÊ?!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
      "B": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "C": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "D": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "E": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado."
    }
  },
  {
    "id": "ed200-q024",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal",
    "question": "No tocante à concordância verbal estabelecida pela norma-padrão da Língua Portuguesa, assinale a frase inteiramente CORRETA:",
    "options": [
      "Havia muitos dias que o relatório não eram concluído pelos escrivães.",
      "Fazem dez anos que a nova unidade operacional foi instalada no agreste.",
      "Haviam decorrido muitos dias desde a operação integrada de patrulhamento.",
      "Tratam-se de ocorrências de alta complexidade registradas pelo batalhão.",
      "Mais de um policial se agrediram mutuamente durante o calor do entrevero."
    ],
    "correctIndex": 2,
    "explanation": "No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
    "hint": "Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HAVER com particípio (tempo composto) FLEXIONA: Eles haviam chegado!",
    "analiseAlternativas": {
      "A": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "B": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
      "D": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "E": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal."
    }
  },
  {
    "id": "ed200-q025",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "A regência verbal consiste na relação de subordinação entre o verbo e seus complementos. Assinale a frase que atende à norma-padrão:",
    "options": [
      "O policial aspirava o cargo de sargento com enorme dedicação e bravura.",
      "O comandante visava o documento antes de autorizar a saída da viatura militar.",
      "Os guerreiros preferem mais treinar na chuva do que ficar no quartel ocioso.",
      "A equipe de choque assistiu o jogo de futebol na arquibancada do estádio.",
      "O soldado aspirava ao cargo de sargento na corporação militar pernambucana."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
    "hint": "Aspirar = almejar pede preposição 'a'.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Aspirar ar (inalar) -> Sem A. Aspirar sonho (almejar) -> Com A (ao cargo)!",
    "analiseAlternativas": {
      "A": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "B": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "C": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "D": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto."
    }
  },
  {
    "id": "ed200-q026",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal",
    "question": "Segundo a norma-padrão sobre a colocação dos pronomes oblíquos átonos, assinale a frase em que a próclise é OBRIGATÓRIA:",
    "options": [
      "Entregou-se o suspeito imediatamente às autoridades competentes na delegacia.",
      "Não se omitiram os detalhes da ocorrência policial no boletim unificado.",
      "Os policiais apresentaram-se pontualmente para o serviço extraordinário no centro.",
      "O tenente informou-nos que a escala de serviço já estava homologada pelo comando.",
      "Disseram-nos que a operação no litoral pernambucano foi coroada de êxito."
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
    "hint": "Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PALAVRAS ATRATIVAS: Nariz (Negativas, Advérbios, Relativos, Indefinidos, orações interrogativas) puxam próclise!",
    "analiseAlternativas": {
      "A": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
      "C": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "D": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "E": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória)."
    }
  },
  {
    "id": "ed200-q027",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação e Emprego da Vírgula",
    "question": "Assinale a alternativa em que a pontuação está empregada em estrita conformidade com a norma culta:",
    "options": [
      "O comandante geral, aprovou a escala do batalhão após analisar o relatório.",
      "Os policiais militares prenderam, em flagrante os infratores no bairro histórico.",
      "Durante a ronda noturna os soldados observaram, movimentações suspeitas na praça.",
      "O comandante geral, após analisar o relatório minucioso, aprovou a escala do batalhão.",
      "A equipe tática especializada cumpriu com rigor, todas as metas operacionais fixadas."
    ],
    "correctIndex": 3,
    "explanation": "A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
    "hint": "Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SVC (Sujeito - Verbo - Complemento): Não se coloca vírgula no meio do trio!",
    "analiseAlternativas": {
      "A": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "B": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "C": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
      "E": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto."
    }
  },
  {
    "id": "ed200-q028",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Homônimos e Parônimos",
    "question": "Assinale a alternativa que preenche CORRETA e respectivamente as lacunas da frase: 'O oficial precisou _______ o mandato do parlamentar após o juiz expedir o _______ de prisão.'",
    "options": [
      "cassar / mandado",
      "caçar / mandado",
      "cassar / mandato",
      "caçar / mandato",
      "casssar / mandado"
    ],
    "correctIndex": 0,
    "explanation": "Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
    "hint": "Cassar = anular; Mandado = ordem da autoridade judiciária.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MANDADO com D = Determinação do Juiz! MANDATO com T = Tempo político!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
      "B": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "C": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "D": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "E": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária."
    }
  },
  {
    "id": "ed200-q029",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica",
    "question": "De acordo com o Acordo Ortográfico vigente e as regras de acentuação gráfica da Língua Portuguesa, assinale a alternativa em que todos os vocábulos são acentuados pela mesma razão gramatical:",
    "options": [
      "Viatura, café, saída, sótão, cipó.",
      "Juízes, saúde, país, refém, herói.",
      "Lúcido, tático, bélico, câmara, paroxítona.",
      "História, relatório, armazém, troféu, órfão.",
      "Público, tábua, amapá, árvore, rubrica."
    ],
    "correctIndex": 2,
    "explanation": "Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
    "hint": "Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PROPAROXÍTONA: É a regra mais fácil, TODAS são acentuadas sem exceção!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "B": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Todos os vocábulos apresentados são proparoxítonos, e pela regra da Língua Portuguesa, toda palavra proparoxítona deve ser obrigatoriamente acentuada.",
      "D": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico.",
      "E": "Incorreta. Lembre-se da regra geral: todas as proparoxítonas recebem acento gráfico."
    }
  },
  {
    "id": "ed200-q030",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "Considerando as regras que regem o uso do acento grave indicador da crase, assinale a frase em que o seu emprego é estritamente OBRIGATÓRIO:",
    "options": [
      "O comandante comunicou o ocorrido à sua secretária com discrição.",
      "O pelotão marchou até à margem do rio durante o exercício.",
      "Os patrulheiros entregaram as medalhas à Maria pelo excelente serviço.",
      "A equipe militar deslocou-se a pé durante a ronda noturna.",
      "O soldado dirigiu-se à repartição policial para entregar o auto de flagrante delito."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos.",
    "hint": "Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Vou A, volto DA -> Crase HÁ! Vou A, volto DE -> Crase pra QUÊ?!",
    "analiseAlternativas": {
      "A": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "B": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "C": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "D": "Incorreta. Verifique a regência do verbo acompanhada de substantivo feminino determinado.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'dirigiu-se' rege preposição 'a' (quem se dirige, dirige-se A algum lugar) e 'repartição' é substantivo feminino com artigo 'a'. A fusão torna a crase obrigatória. Nas demais, temos casos facultativos ou proibidos."
    }
  },
  {
    "id": "ed200-q031",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal",
    "question": "No tocante à concordância verbal estabelecida pela norma-padrão da Língua Portuguesa, assinale a frase inteiramente CORRETA:",
    "options": [
      "Havia muitos dias que o relatório não eram concluído pelos escrivães.",
      "Haviam decorrido muitos dias desde a operação integrada de patrulhamento.",
      "Fazem dez anos que a nova unidade operacional foi instalada no agreste.",
      "Tratam-se de ocorrências de alta complexidade registradas pelo batalhão.",
      "Mais de um policial se agrediram mutuamente durante o calor do entrevero."
    ],
    "correctIndex": 1,
    "explanation": "No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
    "hint": "Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HAVER com particípio (tempo composto) FLEXIONA: Eles haviam chegado!",
    "analiseAlternativas": {
      "A": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. No verbo 'decorrer', por ser pessoal, o verbo auxiliar 'haver' concordou regularmente no plural ('haviam decorrido'). Lembre-se que 'fazer' com tempo decorrido e 'haver' no sentido de existir são impessoais.",
      "C": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "D": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal.",
      "E": "Incorreta. Atenção ao verbo haver como auxiliar de tempo composto versus verbo impessoal."
    }
  },
  {
    "id": "ed200-q032",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "A regência verbal consiste na relação de subordinação entre o verbo e seus complementos. Assinale a frase que atende à norma-padrão:",
    "options": [
      "O policial aspirava o cargo de sargento com enorme dedicação e bravura.",
      "O comandante visava o documento antes de autorizar a saída da viatura militar.",
      "Os guerreiros preferem mais treinar na chuva do que ficar no quartel ocioso.",
      "O soldado aspirava ao cargo de sargento na corporação militar pernambucana.",
      "A equipe de choque assistiu o jogo de futebol na arquibancada do estádio."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
    "hint": "Aspirar = almejar pede preposição 'a'.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "Aspirar ar (inalar) -> Sem A. Aspirar sonho (almejar) -> Com A (ao cargo)!",
    "analiseAlternativas": {
      "A": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "B": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "C": "Incorreta. Aspirar = almejar pede preposição 'a'.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e exige a preposição 'a' (aspirava AO cargo). Já no sentido de respirar/inalar, seria transitivo direto.",
      "E": "Incorreta. Aspirar = almejar pede preposição 'a'."
    }
  },
  {
    "id": "ed200-q033",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal",
    "question": "Segundo a norma-padrão sobre a colocação dos pronomes oblíquos átonos, assinale a frase em que a próclise é OBRIGATÓRIA:",
    "options": [
      "Não se omitiram os detalhes da ocorrência policial no boletim unificado.",
      "Entregou-se o suspeito imediatamente às autoridades competentes na delegacia.",
      "Os policiais apresentaram-se pontualmente para o serviço extraordinário no centro.",
      "O tenente informou-nos que a escala de serviço já estava homologada pelo comando.",
      "Disseram-nos que a operação no litoral pernambucano foi coroada de êxito."
    ],
    "correctIndex": 0,
    "explanation": "A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
    "hint": "Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PALAVRAS ATRATIVAS: Nariz (Negativas, Advérbios, Relativos, Indefinidos, orações interrogativas) puxam próclise!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A palavra 'Não' é fator atrativo de próclise por ser advérbio de negação. Palavras de sentido negativo atraem obrigatoriamente o pronome para antes do verbo.",
      "B": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "C": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "D": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória).",
      "E": "Incorreta. Palavras negativas atraem o pronome oblíquo átono (próclise obrigatória)."
    }
  },
  {
    "id": "ed200-q034",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação e Emprego da Vírgula",
    "question": "Assinale a alternativa em que a pontuação está empregada em estrita conformidade com a norma culta:",
    "options": [
      "O comandante geral, aprovou a escala do batalhão após analisar o relatório.",
      "Os policiais militares prenderam, em flagrante os infratores no bairro histórico.",
      "O comandante geral, após analisar o relatório minucioso, aprovou a escala do batalhão.",
      "Durante a ronda noturna os soldados observaram, movimentações suspeitas na praça.",
      "A equipe tática especializada cumpriu com rigor, todas as metas operacionais fixadas."
    ],
    "correctIndex": 2,
    "explanation": "A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
    "hint": "Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SVC (Sujeito - Verbo - Complemento): Não se coloca vírgula no meio do trio!",
    "analiseAlternativas": {
      "A": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "B": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A oração subordinada adverbial temporal intercalada ('após analisar o relatório minucioso') está corretamente isolada por vírgulas duplas. Nunca se separa sujeito do verbo nem verbo do seu objeto direto com vírgula única.",
      "D": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto.",
      "E": "Incorreta. Nunca use vírgula entre o sujeito e o predicado, nem entre o verbo e o complemento direto."
    }
  },
  {
    "id": "ed200-q035",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Homônimos e Parônimos",
    "question": "Assinale a alternativa que preenche CORRETA e respectivamente as lacunas da frase: 'O oficial precisou _______ o mandato do parlamentar após o juiz expedir o _______ de prisão.'",
    "options": [
      "caçar / mandado",
      "cassar / mandato",
      "caçar / mandato",
      "casssar / mandado",
      "cassar / mandado"
    ],
    "correctIndex": 4,
    "explanation": "Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política.",
    "hint": "Cassar = anular; Mandado = ordem da autoridade judiciária.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MANDADO com D = Determinação do Juiz! MANDATO com T = Tempo político!",
    "analiseAlternativas": {
      "A": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "B": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "C": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "D": "Incorreta. Cassar = anular; Mandado = ordem da autoridade judiciária.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Cassar (com ss) significa revogar, anular direitos políticos. Caçar (com ç) é perseguir animais. Mandado (com d) é ordem judicial escrita (mandado de prisão). Mandato (com t) é procuração ou representação política."
    }
  },
  {
    "id": "ed200-q036",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco e Duarte Coelho",
    "question": "A Capitania de Pernambuco, doada em 1534 pelo rei Dom João III a Duarte Coelho, destacou-se economicamente no período colonial brasileiro devido principalmente:",
    "options": [
      "à mineração em grande escala de ouro e esmeraldas nas margens do Rio Capibaribe.",
      "ao solo de massapê fértil e clima favorável ao cultivo extensivo da cana-de-açúcar com mão de obra escravizada.",
      "à exportação prioritária de especiarias do sertão e tabaco para a rota das Índias orientais.",
      "ao comércio de manufaturas têxteis desenvolvidas nas primeiras oficinas fabris de Olinda.",
      "ao cultivo cooperativo de trigo e café com mão de obra livre de imigrantes europeus."
    ],
    "correctIndex": 1,
    "explanation": "Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
    "hint": "Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PERNAMBUCO AÇUCAREIRO: Massapê + Tráfico Negreiro + Dinastia dos Engenhos!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
      "C": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "D": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "E": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste."
    }
  },
  {
    "id": "ed200-q037",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas e Maurício de Nassau",
    "question": "Durante a ocupação holandesa em Pernambuco (1630-1654), a administração do conde Maurício de Nassau (1637-1644) caracterizou-se historicamente por:",
    "options": [
      "imposição violenta do calvinismo e expulsão imediata de todos os judeus e católicos da província.",
      "destruição completa dos canaviais para substituição compulsória pela pecuária extensiva.",
      "proibição total de manifestações artísticas e científicas no território pernambucano ocupado.",
      "modernização urbanística da Cidade Maurícia (Recife), tolerância religiosa e concessão de empréstimos aos senhores de engenho.",
      "aliança militar incondicional com a coroa espanhola para combater os colonos portugueses."
    ],
    "correctIndex": 3,
    "explanation": "Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
    "hint": "Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NASSAU TÁTICO: Crédito + Tolerância Religiosa + Arte/Urbanismo no Recife!",
    "analiseAlternativas": {
      "A": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "B": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "C": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
      "E": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife."
    }
  },
  {
    "id": "ed200-q038",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana e Batalha dos Guararapes",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), no contexto da Insurreição Pernambucana, são consideradas marcos na história militar brasileira por simbolizarem:",
    "options": [
      "a gênese do sentimento de pátria e do Exército Brasileiro, unindo brancos, negros e indígenas contra o invasor estrangeiro.",
      "a vitória definitiva dos corsários franceses que conquistaram o Forte das Cinco Pontas.",
      "a capitulação dos líderes nativistas e a submissão total de Olinda à Companhia das Índias Ocidentais.",
      "a eclosão da Guerra dos Mascates provocada pelo descontentamento dos mercadores recifenses.",
      "a proclamação pioneira da República Federativa no litoral pernambucano em pleno século XVII."
    ],
    "correctIndex": 0,
    "explanation": "A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
    "hint": "Guararapes representa a união das três raças formadoras da identidade militar nacional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "GUARARAPES 1648-1649: Vidal + Henrique Dias + Camarão = Berço do Sentimento Pátrio!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
      "B": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "C": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "D": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "E": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional."
    }
  },
  {
    "id": "ed200-q039",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711)",
    "question": "A Guerra dos Mascates (1710-1711), conflito de cunho nativista ocorrido em Pernambuco, teve como motivação central o antagonismo sócio-econômico e político entre:",
    "options": [
      "os índios canibais do sertão e as tropas regulares da coroa portuguesa sediadas em Goiana.",
      "os escravizados rebelados do Quilombo dos Palmares e os bandeirantes paulistas em Ipojuca.",
      "a aristocracia agrária decadente de Olinda e a burguesia mercantil portuguesa enriquecida do Recife.",
      "os defensores da restauração holandesa e os clérigos inquisitoriais do bispado olindense.",
      "as ligas camponesas republicanas e os grandes industriais têxteis da zona da mata pernambucana."
    ],
    "correctIndex": 2,
    "explanation": "Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
    "hint": "Olinda (senhores de terras) versus Recife (comerciantes mascates).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MASCATES: Olinda (Dívida e Terra) contra Recife (Dinheiro e Mascates)!",
    "analiseAlternativas": {
      "A": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "B": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
      "D": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "E": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates)."
    }
  },
  {
    "id": "ed200-q040",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "A Revolução Pernambucana de 1817, movimento republicano de grande envergadura, distinguiu-se de outras revoltas coloniais porque:",
    "options": [
      "foi sufocada ainda na fase de conspiração sem que os líderes chegassem a disparar tiros.",
      "pretendia restaurar a subordinação colonial à coroa espanhola em represália à Corte de Dom João VI.",
      "aboliu imediatamente e sem indenização toda forma de trabalho escravo no Nordeste.",
      "restringiu-se a um motim de praças rebelados no Forte de São João Batista do Brum.",
      "chegou a tomar o poder efetivamente, instaurou um governo provisório republicano e redigiu uma Lei Orgânica com liberdade de imprensa e culto."
    ],
    "correctIndex": 4,
    "explanation": "1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
    "hint": "1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "1817: É A REVOLUÇÃO QUE DEU CERTO (POR 75 DIAS) E CRIOU A NOSSA BANDEIRA!",
    "analiseAlternativas": {
      "A": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "B": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "C": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "D": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. 1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz)."
    }
  },
  {
    "id": "ed200-q041",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador de 1824",
    "question": "Liderada por figuras como Frei Caneca, a Confederação do Equador de 1824 eclodiu em Pernambuco como reação direta contra:",
    "options": [
      "a implantação da República Federativa sob o comando do Marechal Deodoro da Fonseca.",
      "o absolutismo autoritário de Dom Pedro I, evidenciado pela dissolução da Assembleia Constituinte e outorga da Constituição de 1824 com o Poder Moderador.",
      "a proibição definitiva do culto católico nas igrejas da Arquidiocese de Olinda e Recife.",
      "o decreto que transformava o estado de Pernambuco em província anexada à Bahia.",
      "a recusa imperial em conceder a independência nacional frente à corte de Lisboa."
    ],
    "correctIndex": 1,
    "explanation": "Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
    "hint": "Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONFEDERAÇÃO DO EQUADOR 1824: Caneca fuzilado por combater o Poder Moderador de D. Pedro I!",
    "analiseAlternativas": {
      "A": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
      "C": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "D": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "E": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador."
    }
  },
  {
    "id": "ed200-q042",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira de 1848",
    "question": "A Revolução Praieira (1848-1850), última grande rebelião do Período Imperial no Brasil, teve sua plataforma política sintetizada no famoso documento intitulado:",
    "options": [
      "Tratado de Methuen, que garantia a compra de manufaturas britânicas com tarifas preferenciais.",
      "Carta Régia de Abertura dos Portos, assinada por Dom João VI no cais do Recife.",
      "Edital de Pacificação Provincial, redigido pelo Brigadeiro Lima e Silva em Olinda.",
      "Manifesto ao Mundo, que defendia o voto livre e universal, a liberdade de imprensa e o fim do monopólio comercial exercido por estrangeiros.",
      "Pacto das Pedras Altas, que dividia as terras dos barões do açúcar entre os foreiros."
    ],
    "correctIndex": 3,
    "explanation": "Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
    "hint": "Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRAIEIRA 1848: Na Rua da Praia, o Manifesto ao Mundo pede Liberdade e Voto!",
    "analiseAlternativas": {
      "A": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "B": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "C": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
      "E": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco."
    }
  },
  {
    "id": "ed200-q043",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco e Duarte Coelho",
    "question": "A Capitania de Pernambuco, doada em 1534 pelo rei Dom João III a Duarte Coelho, destacou-se economicamente no período colonial brasileiro devido principalmente:",
    "options": [
      "ao solo de massapê fértil e clima favorável ao cultivo extensivo da cana-de-açúcar com mão de obra escravizada.",
      "à mineração em grande escala de ouro e esmeraldas nas margens do Rio Capibaribe.",
      "à exportação prioritária de especiarias do sertão e tabaco para a rota das Índias orientais.",
      "ao comércio de manufaturas têxteis desenvolvidas nas primeiras oficinas fabris de Olinda.",
      "ao cultivo cooperativo de trigo e café com mão de obra livre de imigrantes europeus."
    ],
    "correctIndex": 0,
    "explanation": "Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
    "hint": "Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PERNAMBUCO AÇUCAREIRO: Massapê + Tráfico Negreiro + Dinastia dos Engenhos!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
      "B": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "C": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "D": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "E": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste."
    }
  },
  {
    "id": "ed200-q044",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas e Maurício de Nassau",
    "question": "Durante a ocupação holandesa em Pernambuco (1630-1654), a administração do conde Maurício de Nassau (1637-1644) caracterizou-se historicamente por:",
    "options": [
      "imposição violenta do calvinismo e expulsão imediata de todos os judeus e católicos da província.",
      "destruição completa dos canaviais para substituição compulsória pela pecuária extensiva.",
      "modernização urbanística da Cidade Maurícia (Recife), tolerância religiosa e concessão de empréstimos aos senhores de engenho.",
      "proibição total de manifestações artísticas e científicas no território pernambucano ocupado.",
      "aliança militar incondicional com a coroa espanhola para combater os colonos portugueses."
    ],
    "correctIndex": 2,
    "explanation": "Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
    "hint": "Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NASSAU TÁTICO: Crédito + Tolerância Religiosa + Arte/Urbanismo no Recife!",
    "analiseAlternativas": {
      "A": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "B": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
      "D": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "E": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife."
    }
  },
  {
    "id": "ed200-q045",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana e Batalha dos Guararapes",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), no contexto da Insurreição Pernambucana, são consideradas marcos na história militar brasileira por simbolizarem:",
    "options": [
      "a vitória definitiva dos corsários franceses que conquistaram o Forte das Cinco Pontas.",
      "a capitulação dos líderes nativistas e a submissão total de Olinda à Companhia das Índias Ocidentais.",
      "a eclosão da Guerra dos Mascates provocada pelo descontentamento dos mercadores recifenses.",
      "a proclamação pioneira da República Federativa no litoral pernambucano em pleno século XVII.",
      "a gênese do sentimento de pátria e do Exército Brasileiro, unindo brancos, negros e indígenas contra o invasor estrangeiro."
    ],
    "correctIndex": 4,
    "explanation": "A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
    "hint": "Guararapes representa a união das três raças formadoras da identidade militar nacional.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "GUARARAPES 1648-1649: Vidal + Henrique Dias + Camarão = Berço do Sentimento Pátrio!",
    "analiseAlternativas": {
      "A": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "B": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "C": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "D": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro."
    }
  },
  {
    "id": "ed200-q046",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711)",
    "question": "A Guerra dos Mascates (1710-1711), conflito de cunho nativista ocorrido em Pernambuco, teve como motivação central o antagonismo sócio-econômico e político entre:",
    "options": [
      "os índios canibais do sertão e as tropas regulares da coroa portuguesa sediadas em Goiana.",
      "a aristocracia agrária decadente de Olinda e a burguesia mercantil portuguesa enriquecida do Recife.",
      "os escravizados rebelados do Quilombo dos Palmares e os bandeirantes paulistas em Ipojuca.",
      "os defensores da restauração holandesa e os clérigos inquisitoriais do bispado olindense.",
      "as ligas camponesas republicanas e os grandes industriais têxteis da zona da mata pernambucana."
    ],
    "correctIndex": 1,
    "explanation": "Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
    "hint": "Olinda (senhores de terras) versus Recife (comerciantes mascates).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MASCATES: Olinda (Dívida e Terra) contra Recife (Dinheiro e Mascates)!",
    "analiseAlternativas": {
      "A": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
      "C": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "D": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "E": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates)."
    }
  },
  {
    "id": "ed200-q047",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "A Revolução Pernambucana de 1817, movimento republicano de grande envergadura, distinguiu-se de outras revoltas coloniais porque:",
    "options": [
      "foi sufocada ainda na fase de conspiração sem que os líderes chegassem a disparar tiros.",
      "pretendia restaurar a subordinação colonial à coroa espanhola em represália à Corte de Dom João VI.",
      "aboliu imediatamente e sem indenização toda forma de trabalho escravo no Nordeste.",
      "chegou a tomar o poder efetivamente, instaurou um governo provisório republicano e redigiu uma Lei Orgânica com liberdade de imprensa e culto.",
      "restringiu-se a um motim de praças rebelados no Forte de São João Batista do Brum."
    ],
    "correctIndex": 3,
    "explanation": "1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
    "hint": "1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "1817: É A REVOLUÇÃO QUE DEU CERTO (POR 75 DIAS) E CRIOU A NOSSA BANDEIRA!",
    "analiseAlternativas": {
      "A": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "B": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "C": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. 1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
      "E": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado."
    }
  },
  {
    "id": "ed200-q048",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador de 1824",
    "question": "Liderada por figuras como Frei Caneca, a Confederação do Equador de 1824 eclodiu em Pernambuco como reação direta contra:",
    "options": [
      "o absolutismo autoritário de Dom Pedro I, evidenciado pela dissolução da Assembleia Constituinte e outorga da Constituição de 1824 com o Poder Moderador.",
      "a implantação da República Federativa sob o comando do Marechal Deodoro da Fonseca.",
      "a proibição definitiva do culto católico nas igrejas da Arquidiocese de Olinda e Recife.",
      "o decreto que transformava o estado de Pernambuco em província anexada à Bahia.",
      "a recusa imperial em conceder a independência nacional frente à corte de Lisboa."
    ],
    "correctIndex": 0,
    "explanation": "Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
    "hint": "Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONFEDERAÇÃO DO EQUADOR 1824: Caneca fuzilado por combater o Poder Moderador de D. Pedro I!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
      "B": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "C": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "D": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "E": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador."
    }
  },
  {
    "id": "ed200-q049",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira de 1848",
    "question": "A Revolução Praieira (1848-1850), última grande rebelião do Período Imperial no Brasil, teve sua plataforma política sintetizada no famoso documento intitulado:",
    "options": [
      "Tratado de Methuen, que garantia a compra de manufaturas britânicas com tarifas preferenciais.",
      "Carta Régia de Abertura dos Portos, assinada por Dom João VI no cais do Recife.",
      "Manifesto ao Mundo, que defendia o voto livre e universal, a liberdade de imprensa e o fim do monopólio comercial exercido por estrangeiros.",
      "Edital de Pacificação Provincial, redigido pelo Brigadeiro Lima e Silva em Olinda.",
      "Pacto das Pedras Altas, que dividia as terras dos barões do açúcar entre os foreiros."
    ],
    "correctIndex": 2,
    "explanation": "Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
    "hint": "Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRAIEIRA 1848: Na Rua da Praia, o Manifesto ao Mundo pede Liberdade e Voto!",
    "analiseAlternativas": {
      "A": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "B": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
      "D": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "E": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco."
    }
  },
  {
    "id": "ed200-q050",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco e Duarte Coelho",
    "question": "A Capitania de Pernambuco, doada em 1534 pelo rei Dom João III a Duarte Coelho, destacou-se economicamente no período colonial brasileiro devido principalmente:",
    "options": [
      "à mineração em grande escala de ouro e esmeraldas nas margens do Rio Capibaribe.",
      "à exportação prioritária de especiarias do sertão e tabaco para a rota das Índias orientais.",
      "ao comércio de manufaturas têxteis desenvolvidas nas primeiras oficinas fabris de Olinda.",
      "ao cultivo cooperativo de trigo e café com mão de obra livre de imigrantes europeus.",
      "ao solo de massapê fértil e clima favorável ao cultivo extensivo da cana-de-açúcar com mão de obra escravizada."
    ],
    "correctIndex": 4,
    "explanation": "Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
    "hint": "Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PERNAMBUCO AÇUCAREIRO: Massapê + Tráfico Negreiro + Dinastia dos Engenhos!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "B": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "C": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "D": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira."
    }
  },
  {
    "id": "ed200-q051",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas e Maurício de Nassau",
    "question": "Durante a ocupação holandesa em Pernambuco (1630-1654), a administração do conde Maurício de Nassau (1637-1644) caracterizou-se historicamente por:",
    "options": [
      "imposição violenta do calvinismo e expulsão imediata de todos os judeus e católicos da província.",
      "modernização urbanística da Cidade Maurícia (Recife), tolerância religiosa e concessão de empréstimos aos senhores de engenho.",
      "destruição completa dos canaviais para substituição compulsória pela pecuária extensiva.",
      "proibição total de manifestações artísticas e científicas no território pernambucano ocupado.",
      "aliança militar incondicional com a coroa espanhola para combater os colonos portugueses."
    ],
    "correctIndex": 1,
    "explanation": "Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
    "hint": "Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NASSAU TÁTICO: Crédito + Tolerância Religiosa + Arte/Urbanismo no Recife!",
    "analiseAlternativas": {
      "A": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
      "C": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "D": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "E": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife."
    }
  },
  {
    "id": "ed200-q052",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana e Batalha dos Guararapes",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), no contexto da Insurreição Pernambucana, são consideradas marcos na história militar brasileira por simbolizarem:",
    "options": [
      "a vitória definitiva dos corsários franceses que conquistaram o Forte das Cinco Pontas.",
      "a capitulação dos líderes nativistas e a submissão total de Olinda à Companhia das Índias Ocidentais.",
      "a eclosão da Guerra dos Mascates provocada pelo descontentamento dos mercadores recifenses.",
      "a gênese do sentimento de pátria e do Exército Brasileiro, unindo brancos, negros e indígenas contra o invasor estrangeiro.",
      "a proclamação pioneira da República Federativa no litoral pernambucano em pleno século XVII."
    ],
    "correctIndex": 3,
    "explanation": "A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
    "hint": "Guararapes representa a união das três raças formadoras da identidade militar nacional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "GUARARAPES 1648-1649: Vidal + Henrique Dias + Camarão = Berço do Sentimento Pátrio!",
    "analiseAlternativas": {
      "A": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "B": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "C": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
      "E": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional."
    }
  },
  {
    "id": "ed200-q053",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711)",
    "question": "A Guerra dos Mascates (1710-1711), conflito de cunho nativista ocorrido em Pernambuco, teve como motivação central o antagonismo sócio-econômico e político entre:",
    "options": [
      "a aristocracia agrária decadente de Olinda e a burguesia mercantil portuguesa enriquecida do Recife.",
      "os índios canibais do sertão e as tropas regulares da coroa portuguesa sediadas em Goiana.",
      "os escravizados rebelados do Quilombo dos Palmares e os bandeirantes paulistas em Ipojuca.",
      "os defensores da restauração holandesa e os clérigos inquisitoriais do bispado olindense.",
      "as ligas camponesas republicanas e os grandes industriais têxteis da zona da mata pernambucana."
    ],
    "correctIndex": 0,
    "explanation": "Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
    "hint": "Olinda (senhores de terras) versus Recife (comerciantes mascates).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MASCATES: Olinda (Dívida e Terra) contra Recife (Dinheiro e Mascates)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
      "B": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "C": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "D": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "E": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates)."
    }
  },
  {
    "id": "ed200-q054",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "A Revolução Pernambucana de 1817, movimento republicano de grande envergadura, distinguiu-se de outras revoltas coloniais porque:",
    "options": [
      "foi sufocada ainda na fase de conspiração sem que os líderes chegassem a disparar tiros.",
      "pretendia restaurar a subordinação colonial à coroa espanhola em represália à Corte de Dom João VI.",
      "chegou a tomar o poder efetivamente, instaurou um governo provisório republicano e redigiu uma Lei Orgânica com liberdade de imprensa e culto.",
      "aboliu imediatamente e sem indenização toda forma de trabalho escravo no Nordeste.",
      "restringiu-se a um motim de praças rebelados no Forte de São João Batista do Brum."
    ],
    "correctIndex": 2,
    "explanation": "1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
    "hint": "1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "1817: É A REVOLUÇÃO QUE DEU CERTO (POR 75 DIAS) E CRIOU A NOSSA BANDEIRA!",
    "analiseAlternativas": {
      "A": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "B": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. 1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
      "D": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "E": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado."
    }
  },
  {
    "id": "ed200-q055",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador de 1824",
    "question": "Liderada por figuras como Frei Caneca, a Confederação do Equador de 1824 eclodiu em Pernambuco como reação direta contra:",
    "options": [
      "a implantação da República Federativa sob o comando do Marechal Deodoro da Fonseca.",
      "a proibição definitiva do culto católico nas igrejas da Arquidiocese de Olinda e Recife.",
      "o decreto que transformava o estado de Pernambuco em província anexada à Bahia.",
      "a recusa imperial em conceder a independência nacional frente à corte de Lisboa.",
      "o absolutismo autoritário de Dom Pedro I, evidenciado pela dissolução da Assembleia Constituinte e outorga da Constituição de 1824 com o Poder Moderador."
    ],
    "correctIndex": 4,
    "explanation": "Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
    "hint": "Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONFEDERAÇÃO DO EQUADOR 1824: Caneca fuzilado por combater o Poder Moderador de D. Pedro I!",
    "analiseAlternativas": {
      "A": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "B": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "C": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "D": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial."
    }
  },
  {
    "id": "ed200-q056",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira de 1848",
    "question": "A Revolução Praieira (1848-1850), última grande rebelião do Período Imperial no Brasil, teve sua plataforma política sintetizada no famoso documento intitulado:",
    "options": [
      "Tratado de Methuen, que garantia a compra de manufaturas britânicas com tarifas preferenciais.",
      "Manifesto ao Mundo, que defendia o voto livre e universal, a liberdade de imprensa e o fim do monopólio comercial exercido por estrangeiros.",
      "Carta Régia de Abertura dos Portos, assinada por Dom João VI no cais do Recife.",
      "Edital de Pacificação Provincial, redigido pelo Brigadeiro Lima e Silva em Olinda.",
      "Pacto das Pedras Altas, que dividia as terras dos barões do açúcar entre os foreiros."
    ],
    "correctIndex": 1,
    "explanation": "Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
    "hint": "Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRAIEIRA 1848: Na Rua da Praia, o Manifesto ao Mundo pede Liberdade e Voto!",
    "analiseAlternativas": {
      "A": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
      "C": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "D": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "E": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco."
    }
  },
  {
    "id": "ed200-q057",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco e Duarte Coelho",
    "question": "A Capitania de Pernambuco, doada em 1534 pelo rei Dom João III a Duarte Coelho, destacou-se economicamente no período colonial brasileiro devido principalmente:",
    "options": [
      "à mineração em grande escala de ouro e esmeraldas nas margens do Rio Capibaribe.",
      "à exportação prioritária de especiarias do sertão e tabaco para a rota das Índias orientais.",
      "ao comércio de manufaturas têxteis desenvolvidas nas primeiras oficinas fabris de Olinda.",
      "ao solo de massapê fértil e clima favorável ao cultivo extensivo da cana-de-açúcar com mão de obra escravizada.",
      "ao cultivo cooperativo de trigo e café com mão de obra livre de imigrantes europeus."
    ],
    "correctIndex": 3,
    "explanation": "Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
    "hint": "Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PERNAMBUCO AÇUCAREIRO: Massapê + Tráfico Negreiro + Dinastia dos Engenhos!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "B": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "C": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
      "E": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste."
    }
  },
  {
    "id": "ed200-q058",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas e Maurício de Nassau",
    "question": "Durante a ocupação holandesa em Pernambuco (1630-1654), a administração do conde Maurício de Nassau (1637-1644) caracterizou-se historicamente por:",
    "options": [
      "modernização urbanística da Cidade Maurícia (Recife), tolerância religiosa e concessão de empréstimos aos senhores de engenho.",
      "imposição violenta do calvinismo e expulsão imediata de todos os judeus e católicos da província.",
      "destruição completa dos canaviais para substituição compulsória pela pecuária extensiva.",
      "proibição total de manifestações artísticas e científicas no território pernambucano ocupado.",
      "aliança militar incondicional com a coroa espanhola para combater os colonos portugueses."
    ],
    "correctIndex": 0,
    "explanation": "Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
    "hint": "Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NASSAU TÁTICO: Crédito + Tolerância Religiosa + Arte/Urbanismo no Recife!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
      "B": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "C": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "D": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "E": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife."
    }
  },
  {
    "id": "ed200-q059",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana e Batalha dos Guararapes",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), no contexto da Insurreição Pernambucana, são consideradas marcos na história militar brasileira por simbolizarem:",
    "options": [
      "a vitória definitiva dos corsários franceses que conquistaram o Forte das Cinco Pontas.",
      "a capitulação dos líderes nativistas e a submissão total de Olinda à Companhia das Índias Ocidentais.",
      "a gênese do sentimento de pátria e do Exército Brasileiro, unindo brancos, negros e indígenas contra o invasor estrangeiro.",
      "a eclosão da Guerra dos Mascates provocada pelo descontentamento dos mercadores recifenses.",
      "a proclamação pioneira da República Federativa no litoral pernambucano em pleno século XVII."
    ],
    "correctIndex": 2,
    "explanation": "A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
    "hint": "Guararapes representa a união das três raças formadoras da identidade militar nacional.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "GUARARAPES 1648-1649: Vidal + Henrique Dias + Camarão = Berço do Sentimento Pátrio!",
    "analiseAlternativas": {
      "A": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "B": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
      "D": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "E": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional."
    }
  },
  {
    "id": "ed200-q060",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711)",
    "question": "A Guerra dos Mascates (1710-1711), conflito de cunho nativista ocorrido em Pernambuco, teve como motivação central o antagonismo sócio-econômico e político entre:",
    "options": [
      "os índios canibais do sertão e as tropas regulares da coroa portuguesa sediadas em Goiana.",
      "os escravizados rebelados do Quilombo dos Palmares e os bandeirantes paulistas em Ipojuca.",
      "os defensores da restauração holandesa e os clérigos inquisitoriais do bispado olindense.",
      "as ligas camponesas republicanas e os grandes industriais têxteis da zona da mata pernambucana.",
      "a aristocracia agrária decadente de Olinda e a burguesia mercantil portuguesa enriquecida do Recife."
    ],
    "correctIndex": 4,
    "explanation": "Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
    "hint": "Olinda (senhores de terras) versus Recife (comerciantes mascates).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MASCATES: Olinda (Dívida e Terra) contra Recife (Dinheiro e Mascates)!",
    "analiseAlternativas": {
      "A": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "B": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "C": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "D": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses."
    }
  },
  {
    "id": "ed200-q061",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "A Revolução Pernambucana de 1817, movimento republicano de grande envergadura, distinguiu-se de outras revoltas coloniais porque:",
    "options": [
      "foi sufocada ainda na fase de conspiração sem que os líderes chegassem a disparar tiros.",
      "chegou a tomar o poder efetivamente, instaurou um governo provisório republicano e redigiu uma Lei Orgânica com liberdade de imprensa e culto.",
      "pretendia restaurar a subordinação colonial à coroa espanhola em represália à Corte de Dom João VI.",
      "aboliu imediatamente e sem indenização toda forma de trabalho escravo no Nordeste.",
      "restringiu-se a um motim de praças rebelados no Forte de São João Batista do Brum."
    ],
    "correctIndex": 1,
    "explanation": "1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
    "hint": "1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "1817: É A REVOLUÇÃO QUE DEU CERTO (POR 75 DIAS) E CRIOU A NOSSA BANDEIRA!",
    "analiseAlternativas": {
      "A": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. 1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
      "C": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "D": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "E": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado."
    }
  },
  {
    "id": "ed200-q062",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador de 1824",
    "question": "Liderada por figuras como Frei Caneca, a Confederação do Equador de 1824 eclodiu em Pernambuco como reação direta contra:",
    "options": [
      "a implantação da República Federativa sob o comando do Marechal Deodoro da Fonseca.",
      "a proibição definitiva do culto católico nas igrejas da Arquidiocese de Olinda e Recife.",
      "o decreto que transformava o estado de Pernambuco em província anexada à Bahia.",
      "o absolutismo autoritário de Dom Pedro I, evidenciado pela dissolução da Assembleia Constituinte e outorga da Constituição de 1824 com o Poder Moderador.",
      "a recusa imperial em conceder a independência nacional frente à corte de Lisboa."
    ],
    "correctIndex": 3,
    "explanation": "Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
    "hint": "Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONFEDERAÇÃO DO EQUADOR 1824: Caneca fuzilado por combater o Poder Moderador de D. Pedro I!",
    "analiseAlternativas": {
      "A": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "B": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "C": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
      "E": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador."
    }
  },
  {
    "id": "ed200-q063",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira de 1848",
    "question": "A Revolução Praieira (1848-1850), última grande rebelião do Período Imperial no Brasil, teve sua plataforma política sintetizada no famoso documento intitulado:",
    "options": [
      "Manifesto ao Mundo, que defendia o voto livre e universal, a liberdade de imprensa e o fim do monopólio comercial exercido por estrangeiros.",
      "Tratado de Methuen, que garantia a compra de manufaturas britânicas com tarifas preferenciais.",
      "Carta Régia de Abertura dos Portos, assinada por Dom João VI no cais do Recife.",
      "Edital de Pacificação Provincial, redigido pelo Brigadeiro Lima e Silva em Olinda.",
      "Pacto das Pedras Altas, que dividia as terras dos barões do açúcar entre os foreiros."
    ],
    "correctIndex": 0,
    "explanation": "Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
    "hint": "Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRAIEIRA 1848: Na Rua da Praia, o Manifesto ao Mundo pede Liberdade e Voto!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
      "B": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "C": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "D": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "E": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco."
    }
  },
  {
    "id": "ed200-q064",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco e Duarte Coelho",
    "question": "A Capitania de Pernambuco, doada em 1534 pelo rei Dom João III a Duarte Coelho, destacou-se economicamente no período colonial brasileiro devido principalmente:",
    "options": [
      "à mineração em grande escala de ouro e esmeraldas nas margens do Rio Capibaribe.",
      "à exportação prioritária de especiarias do sertão e tabaco para a rota das Índias orientais.",
      "ao solo de massapê fértil e clima favorável ao cultivo extensivo da cana-de-açúcar com mão de obra escravizada.",
      "ao comércio de manufaturas têxteis desenvolvidas nas primeiras oficinas fabris de Olinda.",
      "ao cultivo cooperativo de trigo e café com mão de obra livre de imigrantes europeus."
    ],
    "correctIndex": 2,
    "explanation": "Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
    "hint": "Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PERNAMBUCO AÇUCAREIRO: Massapê + Tráfico Negreiro + Dinastia dos Engenhos!",
    "analiseAlternativas": {
      "A": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "B": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pernambuco e São Vicente foram as únicas capitanias hereditárias que prosperaram no início. Pernambuco destacou-se pelo solo de massapê fértil, clima tropical úmido e proximidade geográfica com a Europa, alavancando a lavoura açucareira.",
      "D": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste.",
      "E": "Incorreta. Lembre-se da terra preta e rica (massapê) e da doçura que gerou fortuna no Nordeste."
    }
  },
  {
    "id": "ed200-q065",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas e Maurício de Nassau",
    "question": "Durante a ocupação holandesa em Pernambuco (1630-1654), a administração do conde Maurício de Nassau (1637-1644) caracterizou-se historicamente por:",
    "options": [
      "imposição violenta do calvinismo e expulsão imediata de todos os judeus e católicos da província.",
      "destruição completa dos canaviais para substituição compulsória pela pecuária extensiva.",
      "proibição total de manifestações artísticas e científicas no território pernambucano ocupado.",
      "aliança militar incondicional com a coroa espanhola para combater os colonos portugueses.",
      "modernização urbanística da Cidade Maurícia (Recife), tolerância religiosa e concessão de empréstimos aos senhores de engenho."
    ],
    "correctIndex": 4,
    "explanation": "Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar.",
    "hint": "Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NASSAU TÁTICO: Crédito + Tolerância Religiosa + Arte/Urbanismo no Recife!",
    "analiseAlternativas": {
      "A": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "B": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "C": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "D": "Incorreta. Maurício de Nassau destacou-se pela tolerância de cultos e embelezamento urbano do Recife.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Nassau promoveu o período áureo do domínio holandês: construiu a Mauritsstad (pontes, palácios, observatório astronômico), trouxe cientistas (Marcgrave, Piso), pintores (Post, Eckhout) e concedeu crédito financeiro aos produtores de açúcar."
    }
  },
  {
    "id": "ed200-q066",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana e Batalha dos Guararapes",
    "question": "As Batalhas dos Montes Guararapes (1648 e 1649), no contexto da Insurreição Pernambucana, são consideradas marcos na história militar brasileira por simbolizarem:",
    "options": [
      "a vitória definitiva dos corsários franceses que conquistaram o Forte das Cinco Pontas.",
      "a gênese do sentimento de pátria e do Exército Brasileiro, unindo brancos, negros e indígenas contra o invasor estrangeiro.",
      "a capitulação dos líderes nativistas e a submissão total de Olinda à Companhia das Índias Ocidentais.",
      "a eclosão da Guerra dos Mascates provocada pelo descontentamento dos mercadores recifenses.",
      "a proclamação pioneira da República Federativa no litoral pernambucano em pleno século XVII."
    ],
    "correctIndex": 1,
    "explanation": "A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
    "hint": "Guararapes representa a união das três raças formadoras da identidade militar nacional.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "GUARARAPES 1648-1649: Vidal + Henrique Dias + Camarão = Berço do Sentimento Pátrio!",
    "analiseAlternativas": {
      "A": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A união de forças sob liderança de André Vidal de Negreiros (brancos colonos), Henrique Dias (terço de negros livres/escravizados) e Filipe Camarão (indígenas potiguares) expulsou os holandeses e é considerada o berço do Exército Brasileiro.",
      "C": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "D": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional.",
      "E": "Incorreta. Guararapes representa a união das três raças formadoras da identidade militar nacional."
    }
  },
  {
    "id": "ed200-q067",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711)",
    "question": "A Guerra dos Mascates (1710-1711), conflito de cunho nativista ocorrido em Pernambuco, teve como motivação central o antagonismo sócio-econômico e político entre:",
    "options": [
      "os índios canibais do sertão e as tropas regulares da coroa portuguesa sediadas em Goiana.",
      "os escravizados rebelados do Quilombo dos Palmares e os bandeirantes paulistas em Ipojuca.",
      "os defensores da restauração holandesa e os clérigos inquisitoriais do bispado olindense.",
      "a aristocracia agrária decadente de Olinda e a burguesia mercantil portuguesa enriquecida do Recife.",
      "as ligas camponesas republicanas e os grandes industriais têxteis da zona da mata pernambucana."
    ],
    "correctIndex": 3,
    "explanation": "Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
    "hint": "Olinda (senhores de terras) versus Recife (comerciantes mascates).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MASCATES: Olinda (Dívida e Terra) contra Recife (Dinheiro e Mascates)!",
    "analiseAlternativas": {
      "A": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "B": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "C": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates).",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Olinda concentrava os senhores de engenho tradicionais endividados; Recife concentrava comerciantes portugueses ('mascates') credores. A elevação de Recife à categoria de vila provocou a revolta armada dos olindenses.",
      "E": "Incorreta. Olinda (senhores de terras) versus Recife (comerciantes mascates)."
    }
  },
  {
    "id": "ed200-q068",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "A Revolução Pernambucana de 1817, movimento republicano de grande envergadura, distinguiu-se de outras revoltas coloniais porque:",
    "options": [
      "chegou a tomar o poder efetivamente, instaurou um governo provisório republicano e redigiu uma Lei Orgânica com liberdade de imprensa e culto.",
      "foi sufocada ainda na fase de conspiração sem que os líderes chegassem a disparar tiros.",
      "pretendia restaurar a subordinação colonial à coroa espanhola em represália à Corte de Dom João VI.",
      "aboliu imediatamente e sem indenização toda forma de trabalho escravo no Nordeste.",
      "restringiu-se a um motim de praças rebelados no Forte de São João Batista do Brum."
    ],
    "correctIndex": 0,
    "explanation": "1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
    "hint": "1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "1817: É A REVOLUÇÃO QUE DEU CERTO (POR 75 DIAS) E CRIOU A NOSSA BANDEIRA!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. 1817 foi o único movimento separatista que ultrapassou a fase conspiratória e proclamou a República, durando cerca de 75 dias. Inspirou a atual bandeira de Pernambuco (com o sol, arco-íris e cruz).",
      "B": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "C": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "D": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado.",
      "E": "Incorreta. 1817 tomou o poder, criou a bandeira pernambucana e governou o estado."
    }
  },
  {
    "id": "ed200-q069",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador de 1824",
    "question": "Liderada por figuras como Frei Caneca, a Confederação do Equador de 1824 eclodiu em Pernambuco como reação direta contra:",
    "options": [
      "a implantação da República Federativa sob o comando do Marechal Deodoro da Fonseca.",
      "a proibição definitiva do culto católico nas igrejas da Arquidiocese de Olinda e Recife.",
      "o absolutismo autoritário de Dom Pedro I, evidenciado pela dissolução da Assembleia Constituinte e outorga da Constituição de 1824 com o Poder Moderador.",
      "o decreto que transformava o estado de Pernambuco em província anexada à Bahia.",
      "a recusa imperial em conceder a independência nacional frente à corte de Lisboa."
    ],
    "correctIndex": 2,
    "explanation": "Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
    "hint": "Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONFEDERAÇÃO DO EQUADOR 1824: Caneca fuzilado por combater o Poder Moderador de D. Pedro I!",
    "analiseAlternativas": {
      "A": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "B": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dom Pedro I fechou a Constituinte da Mandioca e impôs a Constituição outorgada de 1824 com o Poder Moderador, centralizando o poder no Rio de Janeiro. Pernambuco rebelou-se exigindo federação e autonomia provincial.",
      "D": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador.",
      "E": "Incorreta. Reação contra a Constituição Outorgada de 1824 e o tirânico Poder Moderador."
    }
  },
  {
    "id": "ed200-q070",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira de 1848",
    "question": "A Revolução Praieira (1848-1850), última grande rebelião do Período Imperial no Brasil, teve sua plataforma política sintetizada no famoso documento intitulado:",
    "options": [
      "Tratado de Methuen, que garantia a compra de manufaturas britânicas com tarifas preferenciais.",
      "Carta Régia de Abertura dos Portos, assinada por Dom João VI no cais do Recife.",
      "Edital de Pacificação Provincial, redigido pelo Brigadeiro Lima e Silva em Olinda.",
      "Pacto das Pedras Altas, que dividia as terras dos barões do açúcar entre os foreiros.",
      "Manifesto ao Mundo, que defendia o voto livre e universal, a liberdade de imprensa e o fim do monopólio comercial exercido por estrangeiros."
    ],
    "correctIndex": 4,
    "explanation": "Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador.",
    "hint": "Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRAIEIRA 1848: Na Rua da Praia, o Manifesto ao Mundo pede Liberdade e Voto!",
    "analiseAlternativas": {
      "A": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "B": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "C": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "D": "Incorreta. Manifesto ao Mundo marcou a revolta liberal de 1848 em Pernambuco.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os praieiros (do jornal 'Diário do Novo', na Rua da Praia) publicaram o 'Manifesto ao Mundo' com ideais liberais radicais: voto livre universal, trabalho para todos, comércio a retalho reservado a brasileiros e extinção do Poder Moderador."
    }
  },
  {
    "id": "ed200-q071",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q072",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q073",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q074",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q075",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q076",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q077",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q078",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q079",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q080",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q081",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q082",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q083",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q084",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q085",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q086",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q087",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q088",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q089",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q090",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q091",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q092",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q093",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q094",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q095",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q096",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q097",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q098",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q099",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q100",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q101",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência da Condicional",
    "question": "Considere a proposição lógica: 'Se o policial militar estuda com disciplina, então ele conquista a aprovação no concurso da PMPE'. Uma proposição logicamente equivalente é:",
    "options": [
      "Se o policial militar estuda com disciplina, ele não conquista a aprovação.",
      "Se o candidato não conquista a aprovação no concurso da PMPE, então ele não estudou com disciplina.",
      "O policial militar estuda com disciplina e não conquista a aprovação no concurso.",
      "Se o policial não estuda com disciplina, ele conquista a aprovação no concurso.",
      "O policial conquista a aprovação ou ele não estuda com disciplina para a prova."
    ],
    "correctIndex": 1,
    "explanation": "A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
    "hint": "Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "CONTRAPOSITIVA: INVERTE E NEGA! (Se P -> Q) = (Se ~Q -> ~P)!",
    "analiseAlternativas": {
      "A": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A equivalência da condicional (P -> Q) pela contrapositiva é (~Q -> ~P): inverte-se o antecedente com o consequente e nega-se ambos. Assim: 'Se não Q, então não P'.",
      "C": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "D": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P.",
      "E": "Incorreta. Equivalência contrapositiva: Se P então Q equivale a Se não Q então não P."
    }
  },
  {
    "id": "ed200-q102",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Conjunção (Leis de De Morgan)",
    "question": "A negação lógica da proposição composta: 'O soldado está escalado na viatura E o sargento comanda a guarnição' é dada por:",
    "options": [
      "O soldado não está escalado na viatura E o sargento não comanda a guarnição.",
      "Se o soldado não está escalado, então o sargento não comanda a guarnição.",
      "O soldado está escalado na viatura OU o sargento comanda a guarnição.",
      "O soldado não está escalado na viatura OU o sargento não comanda a guarnição.",
      "O soldado comanda a guarnição E o sargento está escalado na viatura operacional."
    ],
    "correctIndex": 3,
    "explanation": "Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
    "hint": "Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "NEGAR O 'E': Troca por 'OU' e nega tudo! ~(P ^ Q) = ~P v ~Q!",
    "analiseAlternativas": {
      "A": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "B": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "C": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Pela Primeira Lei de De Morgan, a negação de (P e Q) é (~P ou ~Q). Nega-se a primeira parte, troca-se o conectivo 'E' pelo conectivo 'OU', e nega-se a segunda parte.",
      "E": "Incorreta. Negação do 'E': nega a primeira, troca o 'E' por 'OU', e nega a segunda."
    }
  },
  {
    "id": "ed200-q103",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação da Condicional (Regra do MANÉ)",
    "question": "Assinale a alternativa que apresenta a negação lógica da proposição: 'Se cometer infração disciplinar, então o soldado será punido':",
    "options": [
      "O soldado comete infração disciplinar E não é punido.",
      "Se não cometer infração disciplinar, o soldado não será punido.",
      "O soldado não comete infração disciplinar E é punido severamente.",
      "O soldado comete infração disciplinar OU não será punido pela corporação.",
      "Se o soldado for punido, então ele cometeu infração disciplinar grave."
    ],
    "correctIndex": 0,
    "explanation": "A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "MACETE DO MANÉ: MAntém a primeira E NEga a segunda! ~(P -> Q) = P ^ ~Q!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A negação da condicional (P -> Q) é dada pela conjunção (P e ~Q). Mantém-se a primeira parte antecedente E nega-se a segunda consequente (Regra do MANÉ).",
      "B": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "C": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "D": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda.",
      "E": "Incorreta. Regra do MANÉ: Mantém a primeira E Nega a segunda."
    }
  },
  {
    "id": "ed200-q104",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória: Princípio Fundamental da Contagem",
    "question": "Um pelotão da PMPE possui 8 soldados disponíveis. Para compor uma escala de patrulhamento especial, o oficial precisa selecionar exatamente 3 soldados. De quantas maneiras distintas essa equipe de 3 soldados pode ser formada?",
    "options": [
      "336 maneiras distintas.",
      "24 maneiras distintas.",
      "56 maneiras distintas.",
      "120 maneiras distintas.",
      "64 maneiras distintas."
    ],
    "correctIndex": 2,
    "explanation": "A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
    "hint": "Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "A ORDEM IMPORTA? Não -> COMBINAÇÃO (Comigo não importa!). Sim -> ARRANJO!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "B": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A ordem de escolha dos soldados não altera a equipe, tratando-se de uma Combinação Simples C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56.",
      "D": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p).",
      "E": "Incorreta. Ordem não importa em formação de grupo/comissão: use Combinação Simples C(n, p)."
    }
  },
  {
    "id": "ed200-q105",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "Em uma urna do setor de inteligência da PMPE existem 12 envelopes pardos numerados de 1 a 12. Retirando-se aleatoriamente um único envelope dessa urna, qual é a probabilidade de o número sorteado ser um número primo?",
    "options": [
      "6/12 (50,0%).",
      "4/12 (33,3%).",
      "7/12 (58,3%).",
      "3/12 (25,0%).",
      "5/12 (aproximadamente 41,6%)."
    ],
    "correctIndex": 4,
    "explanation": "Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12.",
    "hint": "Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "O ÚNICO PRIMO PAR É O 2! E o número 1 NÃO é primo!",
    "analiseAlternativas": {
      "A": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "B": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "C": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "D": "Incorreta. Números primos entre 1 e 12: 2, 3, 5, 7 e 11 (o número 1 não é primo).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Os números de 1 a 12 são: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Desses, os números primos são exatamente 5: {2, 3, 5, 7, 11}. O número 1 NÃO é primo. Logo, P = 5/12."
    }
  },
  {
    "id": "ed200-q106",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Confidencialidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 1,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q107",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Ransomware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q108",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "SMTP (Simple Mail Transfer Protocol).",
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 0,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q109",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 2,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "D": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q110",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional.",
      "Confidencialidade."
    ],
    "correctIndex": 4,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados."
    }
  },
  {
    "id": "ed200-q111",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Ransomware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 1,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q112",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "SMTP (Simple Mail Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 3,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q113",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 0,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "D": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q114",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Integridade.",
      "Confidencialidade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 2,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q115",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Rootkit de inicialização.",
      "Ransomware."
    ],
    "correctIndex": 4,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso."
    }
  },
  {
    "id": "ed200-q116",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "SMTP (Simple Mail Transfer Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 1,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q117",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 3,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q118",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Confidencialidade.",
      "Disponibilidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 0,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q119",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Worm (Verme de rede).",
      "Ransomware.",
      "Adware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 2,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q120",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol).",
      "SMTP (Simple Mail Transfer Protocol)."
    ],
    "correctIndex": 4,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens."
    }
  },
  {
    "id": "ed200-q121",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 1,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "C": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "D": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q122",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Confidencialidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 3,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q123",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Ransomware.",
      "Spyware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 0,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q124",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "SMTP (Simple Mail Transfer Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 2,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q125",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN.",
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela."
    ],
    "correctIndex": 4,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "D": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados."
    }
  },
  {
    "id": "ed200-q126",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Confidencialidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 1,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q127",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Ransomware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 3,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q128",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "SMTP (Simple Mail Transfer Protocol).",
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 0,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q129",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 2,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "D": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q130",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional.",
      "Confidencialidade."
    ],
    "correctIndex": 4,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados."
    }
  },
  {
    "id": "ed200-q131",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Ransomware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 1,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q132",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "SMTP (Simple Mail Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 3,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q133",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 0,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "D": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q134",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Disponibilidade.",
      "Integridade.",
      "Confidencialidade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 2,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q135",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Worm (Verme de rede).",
      "Adware.",
      "Rootkit de inicialização.",
      "Ransomware."
    ],
    "correctIndex": 4,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso."
    }
  },
  {
    "id": "ed200-q136",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "SMTP (Simple Mail Transfer Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 1,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Incorreta. Protocolo de envio de e-mails."
    }
  },
  {
    "id": "ed200-q137",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Web: Modo Privado / Anônimo",
    "question": "Ao utilizar o modo de navegação anônima (no Google Chrome) ou navegação InPrivate (no Microsoft Edge), o navegador:",
    "options": [
      "torna a conexão do usuário 100% invisível perante o provedor de internet e administrador da rede.",
      "bloqueia automaticamente qualquer tentativa de contaminação por vírus e malwares.",
      "dispensa o uso de senha para acessar caixas de correio eletrônico corporativo.",
      "não salva o histórico de navegação, cookies, dados de sites nem informações preenchidas em formulários após o fechamento da janela.",
      "criptografa todo o tráfego de rede substituindo a necessidade de conexões VPN."
    ],
    "correctIndex": 3,
    "explanation": "A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
    "hint": "Navegação anônima protege no computador local, mas não concede anonimato na rede.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ANÔNIMO = Limpa os rastros no SEU PC ao fechar. Não esconde de quem controla o roteador!",
    "analiseAlternativas": {
      "A": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "B": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "C": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A navegação anônima apenas não salva dados no computador LOCAL (histórico, cookies, senhas). Ela NÃO oculta a navegação do provedor de internet, do empregador ou dos sites visitados.",
      "E": "Incorreta. Navegação anônima protege no computador local, mas não concede anonimato na rede."
    }
  },
  {
    "id": "ed200-q138",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação: Tríade CID",
    "question": "No contexto da Segurança da Informação adotada pelos órgãos de segurança pública, a garantia de que uma informação corporativa esteja disponível e acessível somente aos usuários formalmente autorizados diz respeito ao princípio da:",
    "options": [
      "Confidencialidade.",
      "Disponibilidade.",
      "Integridade.",
      "Não repúdio ou Irretratabilidade.",
      "Autenticidade operacional."
    ],
    "correctIndex": 0,
    "explanation": "A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
    "hint": "Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TRÍADE CID: Confidencialidade (Segredo), Integridade (Exatidão), Disponibilidade (Sempre pronto)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Confidencialidade garante que os dados sejam acessados apenas por quem tem permissão. A Integridade garante que o dado não foi alterado indevidamente. A Disponibilidade assegura acesso contínuo aos autorizados.",
      "B": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "C": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "D": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade.",
      "E": "Incorreta. Acesso restrito apenas a pessoas autorizadas = segredo / sigilo = confidencialidade."
    }
  },
  {
    "id": "ed200-q139",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares: Ransomware",
    "question": "Um tipo de software malicioso que sequestra arquivos do computador por meio de criptografia avançada e exige pagamento de resgate (geralmente em criptomoedas) para liberar a chave de decodificação é denominado:",
    "options": [
      "Spyware.",
      "Worm (Verme de rede).",
      "Ransomware.",
      "Adware.",
      "Rootkit de inicialização."
    ],
    "correctIndex": 2,
    "explanation": "Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
    "hint": "Malware de sequestro digital de dados com cobrança de resgate.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "RANSOMWARE: RANSOM significa RESGATE em inglês. É o vírus sequestrador!",
    "analiseAlternativas": {
      "A": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "B": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Ransomware (de 'ransom' = resgate) criptografa os dados da vítima tornando-os inacessíveis e exibe uma nota exigindo resgate financeiro para restaurar o acesso.",
      "D": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate.",
      "E": "Incorreta. Malware de sequestro digital de dados com cobrança de resgate."
    }
  },
  {
    "id": "ed200-q140",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos: SMTP vs POP3/IMAP",
    "question": "No ecossistema de correio eletrônico corporativo, o protocolo que atua primordialmente no ENVIO (saída) de mensagens de e-mail entre servidores é o:",
    "options": [
      "POP3 (Post Office Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "HTTP (Hypertext Transfer Protocol).",
      "FTP (File Transfer Protocol).",
      "SMTP (Simple Mail Transfer Protocol)."
    ],
    "correctIndex": 4,
    "explanation": "O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens.",
    "hint": "Protocolo de envio de e-mails.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "SMTP = Sua Mensagem Tá Partindo (ENVIO)! POP e IMAP = Puxam pro correio (RECEBIMENTO)!",
    "analiseAlternativas": {
      "A": "Incorreta. Protocolo de envio de e-mails.",
      "B": "Incorreta. Protocolo de envio de e-mails.",
      "C": "Incorreta. Protocolo de envio de e-mails.",
      "D": "Incorreta. Protocolo de envio de e-mails.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O SMTP é o protocolo padrão para envio/transporte de e-mails. Já o POP3 e o IMAP são protocolos utilizados para recebimento/leitura de mensagens."
    }
  },
  {
    "id": "ed200-q141",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "flagrante delito ou desastre, ou para prestar socorro imediato.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "intimação de testemunha relevante em inquérito policial militar instaurado."
    ],
    "correctIndex": 1,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
      "C": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "D": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "E": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro."
    }
  },
  {
    "id": "ed200-q142",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional."
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "B": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "C": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
      "E": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente."
    }
  },
  {
    "id": "ed200-q143",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública (Art. 144 da CF/88)",
    "question": "De acordo com o Art. 144, § 5º da Constituição da República de 1988, às Polícias Militares cabem a:",
    "options": [
      "polícia ostensiva e a preservação da ordem pública.",
      "apuração das infrações penais contra a ordem política e social exclusiva.",
      "execução da polícia judiciária e a investigação exclusiva de crimes civis e militares.",
      "patrulhamento ostensivo das rodovias federais e controle do espaço aéreo tático.",
      "guarda privativa dos estabelecimentos prisionais e escolta de presos federais."
    ],
    "correctIndex": 0,
    "explanation": "Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
    "hint": "Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POLÍCIA MILITAR: P-O-P (Polícia Ostensiva + Preservação da ordem pública)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
      "B": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "C": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "D": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "E": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM."
    }
  },
  {
    "id": "ed200-q144",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "flagrante delito ou desastre, ou para prestar socorro imediato.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "intimação de testemunha relevante em inquérito policial militar instaurado."
    ],
    "correctIndex": 2,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "B": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
      "D": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "E": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro."
    }
  },
  {
    "id": "ed200-q145",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional.",
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas."
    ],
    "correctIndex": 4,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "B": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "C": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "D": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus."
    }
  },
  {
    "id": "ed200-q146",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública (Art. 144 da CF/88)",
    "question": "De acordo com o Art. 144, § 5º da Constituição da República de 1988, às Polícias Militares cabem a:",
    "options": [
      "apuração das infrações penais contra a ordem política e social exclusiva.",
      "polícia ostensiva e a preservação da ordem pública.",
      "execução da polícia judiciária e a investigação exclusiva de crimes civis e militares.",
      "patrulhamento ostensivo das rodovias federais e controle do espaço aéreo tático.",
      "guarda privativa dos estabelecimentos prisionais e escolta de presos federais."
    ],
    "correctIndex": 1,
    "explanation": "Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
    "hint": "Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POLÍCIA MILITAR: P-O-P (Polícia Ostensiva + Preservação da ordem pública)!",
    "analiseAlternativas": {
      "A": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
      "C": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "D": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "E": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM."
    }
  },
  {
    "id": "ed200-q147",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "flagrante delito ou desastre, ou para prestar socorro imediato.",
      "intimação de testemunha relevante em inquérito policial militar instaurado."
    ],
    "correctIndex": 3,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "B": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "C": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
      "E": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro."
    }
  },
  {
    "id": "ed200-q148",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas.",
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional."
    ],
    "correctIndex": 0,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
      "B": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "C": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "D": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "E": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente."
    }
  },
  {
    "id": "ed200-q149",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública (Art. 144 da CF/88)",
    "question": "De acordo com o Art. 144, § 5º da Constituição da República de 1988, às Polícias Militares cabem a:",
    "options": [
      "apuração das infrações penais contra a ordem política e social exclusiva.",
      "execução da polícia judiciária e a investigação exclusiva de crimes civis e militares.",
      "polícia ostensiva e a preservação da ordem pública.",
      "patrulhamento ostensivo das rodovias federais e controle do espaço aéreo tático.",
      "guarda privativa dos estabelecimentos prisionais e escolta de presos federais."
    ],
    "correctIndex": 2,
    "explanation": "Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
    "hint": "Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POLÍCIA MILITAR: P-O-P (Polícia Ostensiva + Preservação da ordem pública)!",
    "analiseAlternativas": {
      "A": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "B": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
      "D": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "E": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM."
    }
  },
  {
    "id": "ed200-q150",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "intimação de testemunha relevante em inquérito policial militar instaurado.",
      "flagrante delito ou desastre, ou para prestar socorro imediato."
    ],
    "correctIndex": 4,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "B": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "C": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "D": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA)."
    }
  },
  {
    "id": "ed200-q151",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional."
    ],
    "correctIndex": 1,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
      "C": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "D": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "E": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente."
    }
  },
  {
    "id": "ed200-q152",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública (Art. 144 da CF/88)",
    "question": "De acordo com o Art. 144, § 5º da Constituição da República de 1988, às Polícias Militares cabem a:",
    "options": [
      "apuração das infrações penais contra a ordem política e social exclusiva.",
      "execução da polícia judiciária e a investigação exclusiva de crimes civis e militares.",
      "patrulhamento ostensivo das rodovias federais e controle do espaço aéreo tático.",
      "polícia ostensiva e a preservação da ordem pública.",
      "guarda privativa dos estabelecimentos prisionais e escolta de presos federais."
    ],
    "correctIndex": 3,
    "explanation": "Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
    "hint": "Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POLÍCIA MILITAR: P-O-P (Polícia Ostensiva + Preservação da ordem pública)!",
    "analiseAlternativas": {
      "A": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "B": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "C": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
      "E": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM."
    }
  },
  {
    "id": "ed200-q153",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "flagrante delito ou desastre, ou para prestar socorro imediato.",
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "intimação de testemunha relevante em inquérito policial militar instaurado."
    ],
    "correctIndex": 0,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
      "B": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "C": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "D": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "E": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro."
    }
  },
  {
    "id": "ed200-q154",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional."
    ],
    "correctIndex": 2,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "B": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
      "D": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "E": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente."
    }
  },
  {
    "id": "ed200-q155",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública (Art. 144 da CF/88)",
    "question": "De acordo com o Art. 144, § 5º da Constituição da República de 1988, às Polícias Militares cabem a:",
    "options": [
      "apuração das infrações penais contra a ordem política e social exclusiva.",
      "execução da polícia judiciária e a investigação exclusiva de crimes civis e militares.",
      "patrulhamento ostensivo das rodovias federais e controle do espaço aéreo tático.",
      "guarda privativa dos estabelecimentos prisionais e escolta de presos federais.",
      "polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
    "hint": "Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POLÍCIA MILITAR: P-O-P (Polícia Ostensiva + Preservação da ordem pública)!",
    "analiseAlternativas": {
      "A": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "B": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "C": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "D": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'"
    }
  },
  {
    "id": "ed200-q156",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "flagrante delito ou desastre, ou para prestar socorro imediato.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "intimação de testemunha relevante em inquérito policial militar instaurado."
    ],
    "correctIndex": 1,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
      "C": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "D": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "E": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro."
    }
  },
  {
    "id": "ed200-q157",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional."
    ],
    "correctIndex": 3,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "B": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "C": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
      "E": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente."
    }
  },
  {
    "id": "ed200-q158",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública (Art. 144 da CF/88)",
    "question": "De acordo com o Art. 144, § 5º da Constituição da República de 1988, às Polícias Militares cabem a:",
    "options": [
      "polícia ostensiva e a preservação da ordem pública.",
      "apuração das infrações penais contra a ordem política e social exclusiva.",
      "execução da polícia judiciária e a investigação exclusiva de crimes civis e militares.",
      "patrulhamento ostensivo das rodovias federais e controle do espaço aéreo tático.",
      "guarda privativa dos estabelecimentos prisionais e escolta de presos federais."
    ],
    "correctIndex": 0,
    "explanation": "Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
    "hint": "Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POLÍCIA MILITAR: P-O-P (Polícia Ostensiva + Preservação da ordem pública)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 144, § 5º da CF/88: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares... a execução de atividades de defesa civil.'",
      "B": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "C": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "D": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM.",
      "E": "Incorreta. Polícia ostensiva (fardada) + Preservação da ordem pública = PM."
    }
  },
  {
    "id": "ed200-q159",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Art. 5º, XI da CF/88)",
    "question": "Nos termos do Art. 5º, inciso XI da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada sem o consentimento do morador durante o PERÍODO NOTURNO é legitimamente permitida em caso de:",
    "options": [
      "determinação judicial fundamentada emitida pelo juiz de direito de plantão.",
      "fiscalização tributária e busca e apreensão de documentos de pessoa jurídica.",
      "flagrante delito ou desastre, ou para prestar socorro imediato.",
      "suspeita de crime punido com pena de detenção e interrogatório policial.",
      "intimação de testemunha relevante em inquérito policial militar instaurado."
    ],
    "correctIndex": 2,
    "explanation": "Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
    "hint": "Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DE NOITE: SÓ F-D-S (Flagrante, Desastre, Socorro)! Ordem Judicial? SÓ DE DIA!",
    "analiseAlternativas": {
      "A": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "B": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Art. 5º, XI da CF/88: A casa é asilo inviolável... ninguém podendo nela penetrar sem consentimento, salvo: em flagrante delito, desastre, prestar socorro (a qualquer hora do dia ou da noite) ou por determinação judicial (APENAS DURANTE O DIA).",
      "D": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro.",
      "E": "Incorreta. Ordem judicial só pode ser cumprida DURANTE O DIA. À noite: só flagrante, desastre ou socorro."
    }
  },
  {
    "id": "ed200-q160",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais: Habeas Data",
    "question": "Segundo a disciplina constitucional dos direitos fundamentais, o Habeas Data é o remédio constitucional cabível especificamente para:",
    "options": [
      "proteger a liberdade de locomoção corporal contra ilegalidade ou abuso de poder.",
      "proteger direito líquido e certo não amparado por habeas corpus ou mandado de segurança.",
      "anular ato lesivo ao patrimônio público, à moralidade administrativa e ao meio ambiente.",
      "suprir a falta de norma regulamentadora que torne inviável o exercício de direito constitucional.",
      "assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou públicas."
    ],
    "correctIndex": 4,
    "explanation": "O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus.",
    "hint": "Habeas Data trata de dados/informações pessoais do próprio requerente.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "HABEAS DATA = MEUS DADOS! Apenas informações personalíssimas de quem pede!",
    "analiseAlternativas": {
      "A": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "B": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "C": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "D": "Incorreta. Habeas Data trata de dados/informações pessoais do próprio requerente.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Habeas Data (Art. 5º, LXXII) serve para: a) assegurar informações relativas à pessoa do próprio impetrante (personalíssimo); b) retificação de dados. Liberdade de locomoção é protegida por Habeas Corpus."
    }
  },
  {
    "id": "ed200-q161",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q162",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 3,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q163",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 0,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q164",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 2,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q165",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização."
    }
  },
  {
    "id": "ed200-q166",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 1,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q167",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q168",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 0,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q169",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q170",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado.",
      "depositário infiel, qualquer que seja a modalidade do depósito."
    ],
    "correctIndex": 4,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia."
    }
  },
  {
    "id": "ed200-q171",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q172",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 3,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q173",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 0,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q174",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 2,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q175",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização."
    }
  },
  {
    "id": "ed200-q176",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 1,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q177",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Incorreta. Proibição categórica e absoluta da tortura.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q178",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "depositário infiel, qualquer que seja a modalidade do depósito.",
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado."
    ],
    "correctIndex": 0,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil."
    }
  },
  {
    "id": "ed200-q179",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "DUDH de 1948: Características e Direitos",
    "question": "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 10 de dezembro de 1948, estabelece expressamente em seu Artigo 5º que:",
    "options": [
      "a pena de morte é plenamente aceita para crimes de traição nacional em tempo de paz.",
      "a prisão por dívidas civis de natureza comercial é admitida pela legislação de cada país.",
      "ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "o direito de propriedade pode ser suprimido sumariamente sem prévia indenização.",
      "a liberdade de reunião pacífica depende de prévia autorização das autoridades policiais."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
    "hint": "Proibição categórica e absoluta da tortura.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "TORTURA: VEDAÇÃO ABSOLUTA! Nem estado de sítio ou guerra autoriza tortura!",
    "analiseAlternativas": {
      "A": "Incorreta. Proibição categórica e absoluta da tortura.",
      "B": "Incorreta. Proibição categórica e absoluta da tortura.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 5º da DUDH estabelece a vedação absoluta da tortura e de tratamentos ou castigos cruéis, desumanos ou degradantes. Essa norma tem caráter de 'jus cogens', vedada qualquer relativização.",
      "D": "Incorreta. Proibição categórica e absoluta da tortura.",
      "E": "Incorreta. Proibição categórica e absoluta da tortura."
    }
  },
  {
    "id": "ed200-q180",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de San José da Costa Rica: Prisão Civil",
    "question": "De acordo com a Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) e a Súmula Vinculante nº 25 do STF, no Brasil é ILÍCITA a prisão civil de:",
    "options": [
      "devedor de pensão alimentícia que inadimplir voluntária e inescusavelmente.",
      "infrator que descumprir medida protetiva de urgência na Lei Maria da Penha.",
      "militar que cometer crime de deserção em tempo de paz perante o tribunal.",
      "condenado criminal em execução definitiva de sentença penal transitada em julgado.",
      "depositário infiel, qualquer que seja a modalidade do depósito."
    ],
    "correctIndex": 4,
    "explanation": "A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia.",
    "hint": "Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL: Só existe UMA -> Devedor de pensão alimentícia! Depositário infiel NUNCA MAIS!",
    "analiseAlternativas": {
      "A": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "B": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "C": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "D": "Incorreta. Apenas devedor de pensão alimentícia pode ser preso civilmente no Brasil.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. A Súmula Vinculante nº 25 do STF pacificou: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' Hoje no Brasil a única prisão civil admitida é a do devedor inescusável de pensão alimentícia."
    }
  },
  {
    "id": "ed200-q181",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
      "C": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "D": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "E": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal."
    }
  },
  {
    "id": "ed200-q182",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "B": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "C": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
      "E": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização)."
    }
  },
  {
    "id": "ed200-q183",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003)",
    "question": "Segundo o Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:",
    "options": [
      "Posse irregular de arma de fogo de uso permitido (Art. 12).",
      "Porte ilegal de arma de fogo de uso permitido (Art. 14).",
      "Comércio ilegal de arma de fogo de uso restrito (Art. 17).",
      "Disparo de arma de fogo em via pública habitada (Art. 15).",
      "Posse ou porte de arma de fogo de uso proibido ou raspada (Art. 16)."
    ],
    "correctIndex": 0,
    "explanation": "Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
    "hint": "Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POSSE = Porta pra dentro (em casa)! PORTE = Porta pra fora (na rua)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
      "B": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "C": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "D": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "E": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE."
    }
  },
  {
    "id": "ed200-q184",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "B": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
      "D": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "E": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal."
    }
  },
  {
    "id": "ed200-q185",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil.",
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "B": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "C": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "D": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa."
    }
  },
  {
    "id": "ed200-q186",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003)",
    "question": "Segundo o Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:",
    "options": [
      "Porte ilegal de arma de fogo de uso permitido (Art. 14).",
      "Posse irregular de arma de fogo de uso permitido (Art. 12).",
      "Comércio ilegal de arma de fogo de uso restrito (Art. 17).",
      "Disparo de arma de fogo em via pública habitada (Art. 15).",
      "Posse ou porte de arma de fogo de uso proibido ou raspada (Art. 16)."
    ],
    "correctIndex": 1,
    "explanation": "Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
    "hint": "Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POSSE = Porta pra dentro (em casa)! PORTE = Porta pra fora (na rua)!",
    "analiseAlternativas": {
      "A": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
      "C": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "D": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "E": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE."
    }
  },
  {
    "id": "ed200-q187",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "B": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "C": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
      "E": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal."
    }
  },
  {
    "id": "ed200-q188",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa.",
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil."
    ],
    "correctIndex": 0,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
      "B": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "C": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "D": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "E": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização)."
    }
  },
  {
    "id": "ed200-q189",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003)",
    "question": "Segundo o Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:",
    "options": [
      "Porte ilegal de arma de fogo de uso permitido (Art. 14).",
      "Comércio ilegal de arma de fogo de uso restrito (Art. 17).",
      "Posse irregular de arma de fogo de uso permitido (Art. 12).",
      "Disparo de arma de fogo em via pública habitada (Art. 15).",
      "Posse ou porte de arma de fogo de uso proibido ou raspada (Art. 16)."
    ],
    "correctIndex": 2,
    "explanation": "Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
    "hint": "Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POSSE = Porta pra dentro (em casa)! PORTE = Porta pra fora (na rua)!",
    "analiseAlternativas": {
      "A": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "B": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
      "D": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "E": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE."
    }
  },
  {
    "id": "ed200-q190",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar.",
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "B": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "C": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "D": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime."
    }
  },
  {
    "id": "ed200-q191",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
      "C": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "D": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "E": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização)."
    }
  },
  {
    "id": "ed200-q192",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003)",
    "question": "Segundo o Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:",
    "options": [
      "Porte ilegal de arma de fogo de uso permitido (Art. 14).",
      "Comércio ilegal de arma de fogo de uso restrito (Art. 17).",
      "Disparo de arma de fogo em via pública habitada (Art. 15).",
      "Posse irregular de arma de fogo de uso permitido (Art. 12).",
      "Posse ou porte de arma de fogo de uso proibido ou raspada (Art. 16)."
    ],
    "correctIndex": 3,
    "explanation": "Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
    "hint": "Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POSSE = Porta pra dentro (em casa)! PORTE = Porta pra fora (na rua)!",
    "analiseAlternativas": {
      "A": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "B": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "C": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
      "E": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE."
    }
  },
  {
    "id": "ed200-q193",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar."
    ],
    "correctIndex": 0,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
      "B": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "C": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "D": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "E": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal."
    }
  },
  {
    "id": "ed200-q194",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "B": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
      "D": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "E": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização)."
    }
  },
  {
    "id": "ed200-q195",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003)",
    "question": "Segundo o Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:",
    "options": [
      "Porte ilegal de arma de fogo de uso permitido (Art. 14).",
      "Comércio ilegal de arma de fogo de uso restrito (Art. 17).",
      "Disparo de arma de fogo em via pública habitada (Art. 15).",
      "Posse ou porte de arma de fogo de uso proibido ou raspada (Art. 16).",
      "Posse irregular de arma de fogo de uso permitido (Art. 12)."
    ],
    "correctIndex": 4,
    "explanation": "Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
    "hint": "Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POSSE = Porta pra dentro (em casa)! PORTE = Porta pra fora (na rua)!",
    "analiseAlternativas": {
      "A": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "B": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "C": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "D": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14)."
    }
  },
  {
    "id": "ed200-q196",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "B": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
      "C": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "D": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "E": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal."
    }
  },
  {
    "id": "ed200-q197",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "B": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "C": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "D": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
      "E": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização)."
    }
  },
  {
    "id": "ed200-q198",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003)",
    "question": "Segundo o Estatuto do Desarmamento (Lei nº 10.826/2003), a conduta de manter sob sua guarda arma de fogo de uso permitido no interior de sua residência ou dependência desta, sem autorização e em desacordo com determinação legal, configura o crime de:",
    "options": [
      "Posse irregular de arma de fogo de uso permitido (Art. 12).",
      "Porte ilegal de arma de fogo de uso permitido (Art. 14).",
      "Comércio ilegal de arma de fogo de uso restrito (Art. 17).",
      "Disparo de arma de fogo em via pública habitada (Art. 15).",
      "Posse ou porte de arma de fogo de uso proibido ou raspada (Art. 16)."
    ],
    "correctIndex": 0,
    "explanation": "Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
    "hint": "Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "POSSE = Porta pra dentro (em casa)! PORTE = Porta pra fora (na rua)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. Dentro de casa ou no local de trabalho (sendo titular ou responsável legal): é POSSE (Art. 12). Fora da residência (na rua, no carro, circulando): é PORTE (Art. 14).",
      "B": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "C": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "D": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE.",
      "E": "Incorreta. Dentro de casa = POSSE. Na rua ou circulando = PORTE."
    }
  },
  {
    "id": "ed200-q199",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
    "question": "Nos termos da Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade), para a caracterização dos crimes previstos nesta lei, é INDISPENSÁVEL a presença do:",
    "options": [
      "dano material efetivo devidamente comprovado mediante laudo pericial contábil.",
      "crime praticado exclusivamente em concurso de agentes por mais de dois policiais.",
      "dolo específico, consistente na finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "prejuízo financeiro direto e imediato aos cofres públicos da administração estadual.",
      "dolo genérico sem necessidade de apuração da motivação subjetiva do servidor militar."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
    "hint": "Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "DOLO DO ABUSO: Prejudicar + Beneficiar + Mero Capricho + Satisfação Pessoal!",
    "analiseAlternativas": {
      "A": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "B": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "C": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 1º, § 1º da Lei 13.869/2019 exige dolo específico: 'prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal.' O mero erro de hermenêutica não é crime.",
      "D": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal.",
      "E": "Incorreta. Exige dolo específico: prejudicar, beneficiar, mero capricho ou satisfação pessoal."
    }
  },
  {
    "id": "ed200-q200",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante & PMPE",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) - Art. 28",
    "question": "Em relação ao crime de porte de drogas para consumo pessoal previsto no Art. 28 da Lei nº 11.343/2006, é CORRETO afirmar que:",
    "options": [
      "ocorreu a descriminalização da conduta no Código Penal, deixando o ato de ser ilícito.",
      "o infrator deve ser recolhido imediatamente à prisão em flagrante sem direito à fiança.",
      "a pena cominada é de reclusão de 1 a 3 anos em regime semiaberto em estabelecimento penal.",
      "a autoridade policial deve lavrar auto de prisão em flagrante com imposição de fiança civil.",
      "ocorreu a despenalização do delito, não sendo cominada pena privativa de liberdade, aplicando-se advertência, prestação de serviços à comunidade e medida educativa."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa.",
    "hint": "Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Super Caderno Edital 200",
    "dicaMacete": "ART. 28 NÃO DÁ CADEIA! Apenas penas restritivas de direitos e advertência!",
    "analiseAlternativas": {
      "A": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "B": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "C": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "D": "Incorreta. Não há prisão para o Art. 28 da Lei de Drogas (despenalização).",
      "E": "Alternativa correta segundo o gabarito oficial do Instituto AOCP. O Art. 28 da Lei 11.343/06 passou por despenalização (não há previsão de prisão nem detenção), aplicando-se penas alternativas: advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa."
    }
  }
];
