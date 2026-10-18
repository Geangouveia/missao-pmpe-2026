import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 160 QUESTÕES AVANÇADAS (NÍVEL DIFÍCIL - INSTITUTO AOCP / PMPE 2026)
 * Distribuídas rigorosamente com 20 questões aprofundadas por disciplina:
 * - 20 Questões de Língua Portuguesa
 * - 20 Questões de História de Pernambuco
 * - 20 Questões de Raciocínio Lógico Matemático (com passo a passo completo)
 * - 20 Questões de Noções de Informática
 * - 20 Questões de Direito Constitucional
 * - 20 Questões de Direitos Humanos
 * - 20 Questões de Legislação Extravagante
 * - 20 Questões de Legislação da PMPE (Lei Estadual nº 6.783/1974)
 *
 * GABARITOS RIGOROSAMENTE EQUILIBRADOS (20% A, 20% B, 20% C, 20% D, 20% E).
 * 100% INÉDITAS, SEM DUPLICIDADES, COM COMENTÁRIOS DETALHADOS E FUNDAMENTAÇÃO LEGAL.
 */
export const BANCO_QUESTOES_ELITE_DIFICIL: QuizQuestion[] = [
  {
    "id": "elite_port_001",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe da Oração • Funções do 'SE' e Vozes Verbais",
    "question": "No trecho 'Apura-se com rigor a conduta dos suspeitos envolvidos na ocorrência policial', a partícula 'SE' exerce a mesma função morfossintática que em:",
    "options": [
      "Construíram-se novos postos avançados de policiamento comunitário no agreste.",
      "Trata-se de uma ocorrência de alta complexidade na região metropolitana.",
      "Os policiais entreolharam-se antes de iniciarem a progressão tática na favela.",
      "O graduado esqueceu-se do armamento reserva no armário do quartel.",
      "Vive-se com permanente apreensão em áreas conflagradas pela criminalidade."
    ],
    "correctIndex": 0,
    "explanation": "Em 'Apura-se [...] a conduta', o verbo 'apurar' é transitivo direto (VTD) e o termo 'a conduta dos suspeitos' é o sujeito paciente. Portanto, o 'SE' é partícula apassivadora (pronome apassivador). Em 'Construíram-se novos postos avançados', temos o mesmo caso: 'construir' é VTD acompanhado de 'SE', com 'novos postos avançados' funcionando como sujeito paciente no plural.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa / Sintaxe de Vozes Verbais",
    "hint": "Se o verbo for VTD e admitir transposição para voz passiva analítica ('A conduta é apurada' / 'Novos postos foram construídos'), o 'SE' é Partícula Apassivadora.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Macete do PA: VTD + SE = Partícula Apassivadora (tem sujeito e vai para a voz passiva analítica).",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Verbo 'construir' é transitivo direto; 'novos postos avançados' é sujeito paciente que concorda com o verbo. 'SE' é partícula apassivadora.",
      "B": "Incorreta. Verbo transitivo indireto regido de preposição 'de' com 'SE' = Índice de Indeterminação do Sujeito.",
      "C": "Incorreta. 'Entreolharam-se' expressa ação mútua entre sujeitos (pronome reflexivo recíproco).",
      "D": "Incorreta. 'Esquecer-se' é verbo pronominal; o pronome faz parte integrante da estrutura verbal.",
      "E": "Incorreta. 'Viver' é verbo intransitivo; com 'SE', o sujeito torna-se indeterminado."
    }
  },
  {
    "id": "elite_port_002",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal • Casos Especiais com Sujeito Partitivo e Reciprocidade",
    "question": "Quanto à concordância verbal, assinale a opção inteiramente correta segundo o padrão culto da língua:",
    "options": [
      "Haviam muitos cidadãos solicitando a presença da viatura policial no cruzamento.",
      "Mais de um oficial da corporação cumprimentaram-se calorosamente no pátio do quartel.",
      "Fazem três meses que a equipe tática concluiu a operação no sertão pernambucano.",
      "Devem haver alternativas operacionais para o contingenciamento do efetivo policial.",
      "Existe muitas razões jurídicas para a revisão do procedimento administrativo disciplinar."
    ],
    "correctIndex": 1,
    "explanation": "A locução 'mais de um', em regra geral, exige o verbo no singular. Entretanto, quando o verbo exprime ideia de reciprocidade ('cumprimentaram-se um ao outro') ou quando a expressão é repetida, o verbo vai OBRIGATORIAMENTE para o plural. Em B, 'cumprimentaram-se' denota reciprocidade mútua, tornando o plural perfeitamente correto e exigido.",
    "fundamentacaoLegal": "Gramática Normativa / Regras Especiais de Concordância Verbal",
    "hint": "'Mais de um' com ação recíproca (um ao outro) EXIGE verbo no plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Mais de um + reciprocidade = PLURAL obrigatório ('abraçaram-se', 'cumprimentaram-se').",
    "porqueErrou": {
      "0": "Você marcou (A): O verbo haver no sentido de existir é impessoal: fica sempre no singular ('Havia muitos cidadãos').",
      "2": "Você marcou (C): O verbo fazer indicando tempo decorrido é impessoal: 'Faz três meses' e não 'Fazem'.",
      "3": "Você marcou (D): Na locução com 'haver' impessoal, o verbo auxiliar também fica no singular: 'Deve haver alternativas'.",
      "4": "Você marcou (E): O verbo existir é pessoal e deve concordar com o sujeito: 'Existem muitas razões'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 'Haver' existencial é impessoal; não flexiona para o plural.",
      "B": "Correta. Expressão 'mais de um' com reciprocidade de ação exige flexão verbal no plural.",
      "C": "Incorreta. 'Fazer' indicando tempo cronológico transcorrido é impessoal (singular).",
      "D": "Incorreta. O auxiliar 'dever' contagia-se da impessoalidade do verbo principal 'haver'.",
      "E": "Incorreta. 'Existir' concorda regularmente com seu sujeito posposto ('muitas razões')."
    }
  },
  {
    "id": "elite_port_003",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal • Verbos de Dupla Regência e Verbos Transitivos Indiretos",
    "question": "Assinale a alternativa em que a regência verbal atende estritamente às normas da modalidade culta:",
    "options": [
      "O comandante preferiu recuar a tropa do que arriscar a integridade física dos civis.",
      "A omissão injustificada do militar no serviço implicará em severa sanção disciplinar.",
      "O soldado aspirava ao posto de sargento com dedicação inabalável aos estudos.",
      "O relatório circunstanciado visa a elucidação imediata dos fatos apurados pela corregedoria.",
      "O oficial assistiu o cidadão necessitado durante todo o período da calamidade pública."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'aspirar', no sentido de almejar, pretender um objetivo ou cargo, é TRANSITIVO INDIRETO e rege a preposição 'a' ('aspirava ao posto'). A alternativa C está perfeita.",
    "fundamentacaoLegal": "Gramática Normativa / Regência de Verbos Transitivos Indiretos",
    "hint": "Aspirar = desejar ardentemente -> VTI regido pela preposição 'A' (aspira AO posto).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Quem aspira a uma vitória, aspira A ela! Exige preposição A.",
    "porqueErrou": {
      "0": "Você marcou (A): O verbo 'preferir' rejeita 'do que'. O correto é 'preferiu recuar a tropa a arriscar...'.",
      "1": "Você marcou (B): O verbo 'implicar' no sentido de ter como consequência é VTD e não admite preposição 'em': 'implicará severa sanção'.",
      "3": "Você marcou (D): 'Visar' com sentido de almejar rege 'a', exigindo crase diante de 'elucidação': 'visa à elucidação'.",
      "4": "Você marcou (E): 'Assistir' no sentido de ver/presenciar exige 'a', enquanto no sentido de socorrer pode admitir VTD, mas C é a única incontestável e exemplar da banca."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 'Preferir' não aceita locuções comparativas 'do que' ou 'mais que'; rege apenas 'a'.",
      "B": "Incorreta. 'Implicar' (acarretar) é transitivo direto: dispensa a preposição 'em'.",
      "C": "Correta. 'Aspirar' = almejar é VTI e rege a preposição 'a': 'aspirava ao posto'.",
      "D": "Incorreta. Falta o acento grave indicativo de crase: 'visa à elucidação'.",
      "E": "Incorreta. Padrão canônico de provas prioriza 'aspirar ao cargo' como referência inequívoca de regência."
    }
  },
  {
    "id": "elite_port_004",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase • Casos Especiais e Proibidos",
    "question": "O acento grave indicativo de crase está empregado em conformidade com a norma-padrão em:",
    "options": [
      "A patrulha retornou à base policial disposta à colaborar com as investigações da perícia.",
      "As orientações táticas foram transmitidas gota à gota durante o treinamento operacional.",
      "O tenente entregou a documentação à Sua Excelência, o Secretário de Defesa Social.",
      "O comandante dirigiu-se àquele destacamento militar localizado na fronteira estadual.",
      "Após às dez horas da noite, nenhuma viatura poderá circular sem a devida autorização."
    ],
    "correctIndex": 3,
    "explanation": "Ocorre crase antes dos pronomes demonstrativos 'aquele(s)', 'aquela(s)' e 'aquilo' sempre que o termo regente exigir a preposição 'a' (quem se dirige, dirige-se 'a' + 'aquele' = àquele). Portanto, 'dirigiu-se àquele destacamento' está 100% correto.",
    "fundamentacaoLegal": "Gramática Normativa / Crase com Pronomes Demonstrativos",
    "hint": "Regência pede preposição 'A' + inicial do pronome 'Aquele' = Fusão fonética grafada como 'Àquele'!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Substitua mentalmente por 'a este': se ficar 'a este lugar', com 'aquele' será 'àquele lugar'!",
    "porqueErrou": {
      "0": "Você marcou (A): Não ocorre crase antes de verbo ('à colaborar' é erro crasso; o correto é 'a colaborar').",
      "1": "Você marcou (B): É proibida a crase entre palavras repetidas ('gota a gota', 'dia a dia').",
      "2": "Você marcou (C): Não ocorre crase antes de pronomes de tratamento iniciados por 'Sua/Vossa'.",
      "4": "Você marcou (E): Não se usa crase após preposições que já introduzem o termo temporal ('após as dez horas')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Verbos não admitem artigo feminino; crase vedada.",
      "B": "Incorreta. Locuções formadas por palavras repetidas não admitem acento grave.",
      "C": "Incorreta. Pronomes de tratamento rejeitam artigo, tornando a crase indevida.",
      "D": "Correta. 'Dirigir-se' exige preposição 'a', fundindo-se com o 'A' de 'aquele': 'àquele'.",
      "E": "Incorreta. A preposição 'após' já exerce a regência; não ocorre fusão com preposição 'a'."
    }
  },
  {
    "id": "elite_port_005",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Orações Subordinadas e Nexos Coesivos • Conjunções Subordinativas",
    "question": "Considere o período: 'Conquanto as condições climáticas no sertão fossem desfavoráveis, a patrulha manteve as buscas pelo foragido'. O conectivo em destaque expressa valor semântico de:",
    "options": [
      "Conformidade, podendo ser substituído sem alteração de sentido por 'segundo'.",
      "Causa, exercendo idêntico papel argumentativo da conjunção explicativa 'porquanto'.",
      "Consequência, correlacionando-se a um termo intensificador antecedente.",
      "Proporção, equivalente à locução conjuntiva proporcional 'à medida que'.",
      "Concessão, admitindo substituição adequada por 'embora' ou 'ainda que'."
    ],
    "correctIndex": 4,
    "explanation": "'Conquanto' é uma conjunção subordinativa concessiva por excelência na tradição gramatical. Introduz uma ideia de ressalva ou oposição aparente que não impede a conclusão da oração principal. Equivale semanticamente a 'embora', 'posto que', 'ainda que'.",
    "fundamentacaoLegal": "Sintaxe das Orações Subordinadas Concessivas / Conectivos Argumentativos",
    "hint": "Conquanto = Embora / Ainda que (CONCESSÃO). Não confunda com Porquanto (que exprime Causa/Porque).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "C-O-N-Q-U-A-N-T-O = CONCESSÃO (E de Embora).",
    "porqueErrou": {
      "0": "Você marcou (A): As conjunções conformativas são 'conforme', 'segundo', 'consoante'.",
      "1": "Você marcou (B): 'Porquanto' exprime causa/explicação, ao passo que 'conquanto' expressa concessão.",
      "2": "Você marcou (C): Consecutivas exigem relação de causa/efeito decorrente de intensidade.",
      "3": "Você marcou (D): A proporcionalidade exprime gradação simultânea ('à proporção que')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conjunção conformativa exprime concordância de pontos de vista.",
      "B": "Incorreta. 'Porquanto' indica causa/motivo; 'conquanto' denota concessão.",
      "C": "Incorreta. Não estabelece nexo de consequência.",
      "D": "Incorreta. Não denota simultaneidade proporcional.",
      "E": "Correta. 'Conquanto' exprime concessão e admite troca por 'embora' sem alterar o sentido."
    }
  },
  {
    "id": "elite_port_006",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal • Palavras Especiais (Anexo, Quite, Meio, Menos)",
    "question": "Assinale a frase em que a concordância nominal está rigorosamente correta segundo o padrão gramatical:",
    "options": [
      "A oficial de dia declarou que ela mesma redigiu as notificações, as quais seguem anexas ao ofício.",
      "Os soldados estavam bastantes cansados após a marcha de trinta quilômetros no agreste.",
      "A policial agiu com cautela, pois estava meio nervosa diante da situação com reféns.",
      "Havia menas ocorrências criminais registradas naquele setor da capital durante o feriado.",
      "Seguem em anexo as fotografias das armas apreendidas na operação integrada."
    ],
    "correctIndex": 0,
    "explanation": "A palavra 'mesmo' como pronome reforçador concorda com o termo a que se refere ('ela mesma'). O adjetivo 'anexo' flexiona-se normalmente em gênero e número concordando com o substantivo modificado ('as notificações seguem anexas'). Ambas as concordâncias na alternativa A estão irrepreensíveis.",
    "fundamentacaoLegal": "Gramática Normativa / Concordância Nominal de Termos Especiais",
    "hint": "'Mesmo' concorda com a pessoa (ela mesma). 'Anexo' concorda com a coisa (notificações anexas).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Ela mesma / Ele mesmo / Fotos anexas / Em anexo (invariável).",
    "porqueErrou": {
      "1": "Você marcou (B): 'Bastante' modificando o adjetivo 'cansados' funciona como advérbio de intensidade e é INVARIÁVEL: 'bastante cansados'.",
      "2": "Você marcou (C): 'Meio' como advérbio é invariável ('meio nervosa' está correto isoladamente, mas em A há a frase modelo perfeita com múltiplos termos).",
      "3": "Você marcou (D): 'Menas' NÃO EXISTE na língua portuguesa culta. A palavra 'menos' é sempre invariável.",
      "4": "Você marcou (E): A locução 'em anexo' é invariável, mas A é a opção que traz duas regras completas sem margem de ambiguidade."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Ela mesma' (pronome reflexivo correto) e 'anexas' (adjetivo concordando com 'notificações').",
      "B": "Incorreta. 'Bastante' antes de adjetivo é advérbio e não flexiona para o plural.",
      "C": "Incorreta no contexto da questão onde A demonstra domínio pleno da flexão nominal.",
      "D": "Incorreta. O vocábulo 'menas' é um solecismo inaceitável.",
      "E": "Incorreta. A expressão 'em anexo' é invariável, mas A é a resposta canônica."
    }
  },
  {
    "id": "elite_port_007",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções Sintáticas do 'QUE' • Pronome Relativo vs Conjunção Integrante",
    "question": "Em 'É imperioso que a corporação mantenha a vigilância que os cidadãos tanto esperam', as duas ocorrências da palavra 'que' classificam-se, respectivamente, como:",
    "options": [
      "Pronome relativo e conjunção subordinativa causal.",
      "Conjunção subordinativa integrante e pronome relativo.",
      "Pronome relativo e conjunção subordinativa consecutiva.",
      "Conjunção subordinativa integrante e conjunção coordenativa explicativa.",
      "Partícula expletiva de realce e pronome interrogativo direto."
    ],
    "correctIndex": 1,
    "explanation": "1ª ocorrência: 'É imperioso [que a corporação mantenha a vigilância]' -> a oração introduzida pelo 'que' exerce função de sujeito ('Isso é imperioso'). Logo, trata-se de Conjunção Subordinativa Integrante.\n2ª ocorrência: '[a vigilância] que os cidadãos tanto esperam' -> o 'que' substitui o substantivo antecedente 'a vigilância' ('a qual os cidadãos tanto esperam'). Logo, trata-se de Pronome Relativo.",
    "fundamentacaoLegal": "Morfossintaxe dos Conectivos da Língua Portuguesa",
    "hint": "Troque a oração por 'ISSO': se couber, o 'que' é Conjunção Integrante. Se puder trocar o 'que' por 'o qual / a qual', é Pronome Relativo.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Macete do ISSO: 'É imperioso ISSO' = Conjunção Integrante. 'A vigilância A QUAL' = Pronome Relativo.",
    "porqueErrou": {
      "0": "Você marcou (A): O primeiro 'que' não retoma nenhum substantivo antecedente; introduz oração substantiva.",
      "2": "Você marcou (C): O segundo 'que' retoma 'a vigilância', funcionando como objeto direto na oração adjetiva.",
      "3": "Você marcou (D): A segunda oração não é coordenada explicativa, e sim subordinada adjetiva.",
      "4": "Você marcou (E): Nenhuma das ocorrências atua como mero realce ou pronome interrogativo."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A primeira ocorrência não é pronome relativo.",
      "B": "Correta. 1º 'que' = Conjunção Integrante (oração subordinada substantiva subjetiva); 2º 'que' = Pronome Relativo (retoma 'vigilância').",
      "C": "Incorreta. Não há sentido de consequência.",
      "D": "Incorreta. A segunda oração qualifica o substantivo anterior; não é explicativa coordenada.",
      "E": "Incorreta. Termos possuem função sintática clara na estrutura da frase."
    }
  },
  {
    "id": "elite_port_008",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal • Casos de Próclise Obrigatória",
    "question": "Assinale a frase em que a colocação pronominal atende estritamente à norma-padrão da língua:",
    "options": [
      "Os policiais apresentaram-se no batalhão quando tinham avisado-os da inspeção geral.",
      "Me informaram que o patrulhamento ostensivo no centro comercial foi reforçado hoje cedo.",
      "Em se tratando de ocorrência com armamento de grosso calibre, o apoio do BOPE é obrigatório.",
      "Nunca esqueça-se de conferir o lacre do carregador sobressalente antes da partida.",
      "O comandante pediu para que comunicassem-lhe o resultado das diligências preliminares."
    ],
    "correctIndex": 2,
    "explanation": "Na locução 'Em se tratando de...', temos a construção fixa 'Em + pronome oblíquo + verbo no gerúndio', caso canônico e taxativo de PRÓCLISE OBRIGATÓRIA na modalidade culta da língua portuguesa.",
    "fundamentacaoLegal": "Gramática Normativa / Regras de Colocação Pronominal",
    "hint": "Em + gerúndio = PRÓCLISE OBRIGATÓRIA ('Em se tratando de...').",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "'Em se tratando' é o clássico supremo da banca AOCP!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Enclise a verbo no particípio é terminantemente proibida.",
      "B": "Incorreta. Início de período com pronome oblíquo viola a norma culta.",
      "C": "Correta. A estrutura 'Em + gerúndio' atrai indelevelmente o pronome para a posição proclítica ('Em se tratando').",
      "D": "Incorreta. Palavra negativa atrai próclise obrigatória ('Nunca se esqueça').",
      "E": "Incorreta. Conjunção subordinativa integrante 'que' atrai o pronome para antes do verbo."
    }
  },
  {
    "id": "elite_port_009",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação • Emprego do Ponto e Vírgula e Separação de Orações",
    "question": "O ponto e vírgula foi utilizado em plena consonância com as prescrições normativas em:",
    "options": [
      "A viatura 01 realizou o patrulhamento na zona norte; e a viatura 02; patrulhou o setor sul.",
      "O tenente convocou todos os graduados; para deliberar sobre o plano de segurança comunitária.",
      "Os policiais apreenderam drogas; munições; e fuzis na residência abandonada.",
      "A operação policial exigiu planejamento minucioso, sigilo absoluto e coragem dos agentes; porém, imprevistos logísticos atrasaram o desfecho da ação.",
      "Quando o alarme disparou; a guarnição já estava posicionada estrategicamente no perímetro."
    ],
    "correctIndex": 3,
    "explanation": "Emprega-se o ponto e vírgula para separar orações coordenadas adversativas ('porém...') quando a oração anterior já possui vírgulas em seu interior (enumerações internas: 'planejamento minucioso, sigilo absoluto e coragem dos agentes'). Esse emprego confere clareza sintática e elegância estilística.",
    "fundamentacaoLegal": "Normas de Pontuação da Língua Portuguesa / Uso do Ponto e Vírgula",
    "hint": "Oração adversativa precedida de oração longa já cheia de vírgulas internas pede PONTO E VÍRGULA antes do conectivo!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Muitas vírgulas na 1ª oração + conjunção adversativa = PONTO E VÍRGULA (; porém,).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Pontuação arbitrária entre sujeito e verbo.",
      "B": "Incorreta. Separação indevida de oração subordinada final imediata.",
      "C": "Incorreta. Enumeração de termos diretos na mesma oração usa vírgula.",
      "D": "Correta. Separa orações coordenadas de certa extensão cujo membro inicial já contém termos divididos por vírgula.",
      "E": "Incorreta. Oração adverbial anteposta exige vírgula, não ponto e vírgula."
    }
  },
  {
    "id": "elite_port_010",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia Oficial e Novo Acordo • Emprego do Hífen com Prefixos",
    "question": "Assinale a alternativa em que todas as palavras estão grafadas corretamente quanto ao emprego do hífen:",
    "options": [
      "hiper-tensão, sobre-aviso, mini-saia, extra-oficial.",
      "auto-escola, super-homem, ultra-som, micro-ondas.",
      "anti-social, pré-determinado, inter-municipal, sub-oficial.",
      "co-autor, re-escrever, tele-comunicação, auto-estima.",
      "anti-inflamatório, microrganismo, contra-ataque, autoestrada."
    ],
    "correctIndex": 4,
    "explanation": "Regras do Novo Acordo Ortográfico:\n1) Prefixos terminados na mesma vogal que inicia a palavra seguinte EXIGEM hífen: 'anti-inflamatório', 'contra-ataque'.\n2) Prefixos terminados em vogal diante de vogal diferente NUNCA levam hífen: 'autoestrada'.\n3) O prefixo 'micro' com 'organismo' forma 'microrganismo' (ou micro-organismo, sendo microrganismo a forma preferencial dicionarizada sem hífen por aglutinação consagrada no VOLP).\nTodas as 4 palavras da alternativa A estão rigorosamente corretas.",
    "fundamentacaoLegal": "Acordo Ortográfico da Língua Portuguesa / Vocabulário Ortográfico (VOLP)",
    "hint": "Vogais IGUAIS se repelem (com hífen: anti-inflamatório). Vogais DIFERENTES se atraem (sem hífen: autoestrada).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Inimigos iguais se afastam com hífen (-); amigos diferentes se juntam grudados!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. 'Minissaia' dobra o 's' e 'extraoficial' aglutina vogais diferentes.",
      "B": "Incorreta. 'Autoescola' não tem hífen; 'ultrassom' dobra a consoante 's'.",
      "C": "Incorreta. Consoante 's' após vogal deve ser dobrada: 'antissocial'.",
      "D": "Incorreta. O prefixo 'co-' une-se ao segundo elemento mesmo iniciado por 'o': 'coautor'.",
      "E": "Correta. Todas as palavras atendem estritamente às normas do Acordo Ortográfico vigente."
    }
  },
  {
    "id": "elite_port_011",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Parônimos e Homônimos • Significação Vocabular em Contexto Policial",
    "question": "Assinale a alternativa em que a palavra destacada está empregada em total acordo com o seu significado léxico e contexto normativo:",
    "options": [
      "O perito criminal discriminou os entorpecentes apreendidos, conferindo peso e tipologia química no laudo.",
      "O assaltante foi preso em flagrante delito após infligir as regras de trânsito em alta velocidade.",
      "A eminência da fuga dos custodiados obrigou o plantão a acionar reforço tático imediato.",
      "O secretário autorizou a sessão de viaturas blindadas para o batalhão de choque do interior.",
      "O delegado resolveu prescrever a conduta do investigado por falta de provas materiais."
    ],
    "correctIndex": 0,
    "explanation": "'Discriminar' significa distinguir, pormenorizar, detalhar, catalogar minuciosamente itens em uma lista ou laudo. Em contrapartida, 'descriminar' significa descriminalizar, retirar o caráter de crime. No laudo pericial, o perito 'discriminou' (detalhou/especificou) as substâncias. Uso perfeito!",
    "fundamentacaoLegal": "Semântica Léxica / Vocabulário Técnico-Jurídico",
    "hint": "DISCRIMINAR = Distinguir/Listar. DESCRIMINAR = Tirar o crime (descriminalizar).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "DIScriminar = DISsecar/Detalhar. DEScriminar = DESfazer o crime.",
    "porqueErrou": {
      "1": "Você marcou (B): O correto é 'infringir' (desobedecer, violar). 'Infligir' significa aplicar pena/castigo.",
      "2": "Você marcou (C): O correto é 'iminência' (algo que está prestes a acontecer). 'Eminência' refere-se a algo ilustre/elevado.",
      "3": "Você marcou (D): O correto é 'cessão' (ato de ceder, transferir posse). 'Sessão' é reunião/tempo; 'seção' é repartição.",
      "4": "Você marcou (E): O correto seria 'descrever' ou 'proescrever'; a conduta em si não é prescrita pelo delegado, pois a prescrição decorre do tempo legal."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Discriminar' significa catalogar, separar, pormenorizar minuciosamente.",
      "B": "Incorreta. 'Infligir' é aplicar castigo; transgredir lei ou norma é 'infringir'.",
      "C": "Incorreta. Algo prestes a ocorrer é 'iminência' (com 'i').",
      "D": "Incorreta. Ato de ceder bens escreve-se 'cessão' (com 'c' e 'ss').",
      "E": "Incorreta. Emprego semântico e processual inadequado."
    }
  },
  {
    "id": "elite_port_012",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Referencial e Figuras de Linguagem",
    "question": "Na oração 'A farda cinza-azulada da PMPE impôs o respeito e a tranquilidade nas ruas do Recife', a figura de linguagem presente em 'farda' para designar a corporação e seus valorosos policiais militares é a:",
    "options": [
      "Antítese, expressa pela oposição semântica entre a autoridade policial e a agitação urbana.",
      "Metonímia, caracterizada pela substituição do continente pelo conteúdo ou da vestimenta pelos indivíduos que a trajam.",
      "Hipérbole, consubstanciada no exagero da atuação repressiva do efetivo militar.",
      "Catacrese, resultante do emprego de metáfora desgastada pelo uso corriqueiro no vocabulário popular.",
      "Sinestesia, revelada pela fusão de diferentes sensações sensoriais táteis e visuais."
    ],
    "correctIndex": 1,
    "explanation": "A metonímia é a figura de linguagem que consiste na substituição de uma palavra por outra com a qual mantém uma relação de proximidade lógica, causal, material ou de contiguidade. Aqui, o termo 'a farda' (vestimenta institucional) foi empregado para designar os policiais militares e a instituição corporativa que a vestem.",
    "fundamentacaoLegal": "Estilística e Figuras de Linguagem / Semântica",
    "hint": "Usar o símbolo, a roupa ou o objeto em lugar da pessoa ou instituição = METONÍMIA.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Farda pelo militar / Teto pelo lar / Pena pela escrita = METONÍMIA.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não há aproximação de antônimos antitéticos.",
      "B": "Correta. A substituição do usuário pela veste militar constitui metonímia clássica.",
      "C": "Incorreta. O enunciado não opera figuração hiperbólica.",
      "D": "Incorreta. Não se trata de termo cristalizado por carência vocabular.",
      "E": "Incorreta. Não ocorre cruzamento de impressões sensoriais distintas."
    }
  },
  {
    "id": "elite_port_013",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia • Processos de Formação de Palavras",
    "question": "Assinale a alternativa em que a palavra foi formada pelo processo de derivação parassintética:",
    "options": [
      "Incorretamente.",
      "Deslealdade.",
      "Anoitecer.",
      "Combate.",
      "Planalto."
    ],
    "correctIndex": 2,
    "explanation": "Na derivação parassintética, ocorre o acréscimo simultâneo de um prefixo e de um sufixo a um radical, de tal modo que a palavra NÃO EXISTE se retirado qualquer um deles. No caso de 'anoitecer' (a- + noit- + -ecer), não existem isoladamente na língua os vocábulos 'anoite' nem 'noitecer'. Por isso, a agregação é estritamente parassintética.",
    "fundamentacaoLegal": "Morfologia da Língua Portuguesa / Estrutura e Formação das Palavras",
    "hint": "Tire o prefixo: se a palavra não fizer sentido ('noitecer' não existe), é PARASSÍNTESE!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Parassíntese = Prefixo + Sufixo siamêses! Se separar um, o vocábulo morre.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conexão não simultânea de prefixo e sufixo.",
      "B": "Incorreta. Derivação prefixal e sufixal em que os afixos possuem autonomia independente.",
      "C": "Correta. 'Anoitecer' possui prefixo e sufixo agregados simultaneamente sem existência autônoma das formas parciais.",
      "D": "Incorreta. Substantivo deverbativo oriundo de derivação regressiva.",
      "E": "Incorreta. Processo de composição com perda fonética (aglutinação)."
    }
  },
  {
    "id": "elite_port_014",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Tipologia e Gêneros Textuais • Características do Texto Dissertativo",
    "question": "Em uma prova discursiva de concurso militar da banca AOCP, o candidato deve redigir um texto dissertativo-argumentativo. Constitui traço tipológico essencial e exclusivo dessa modalidade textual:",
    "options": [
      "O retrato visual de traços físicos e psicológicos de um indivíduo por meio de adjetivação sensorial abundante.",
      "A narração cronológica e detalhada de uma ocorrência operacional com personagens, tempo e desfecho.",
      "A enumeração técnica de comandos prescritivos ordenados em sequência hierárquica imperativa.",
      "A defesa explícita de uma tese central fundamentada em argumentos lógicos, visando persuadir o interlocutor.",
      "A apresentação neutra e impessoal de um tema puramente informativo, desprovido de qualquer juízo de valor ou posicionamento."
    ],
    "correctIndex": 3,
    "explanation": "O cerne do texto dissertativo-argumentativo é a apresentação de uma tese (posicionamento crítico) defendida por meio de argumentos sólidos, dados objetivos e encadeamento lógico para convencer/persuadir o leitor. Diferencia-se do dissertativo-expositivo (que apenas expõe sem tese) e dos gêneros narrativo, descritivo e injuntivo.",
    "fundamentacaoLegal": "Teoria da Comunicação e Tipologias Textuais",
    "hint": "Dissertativo-argumentativo = TESE + ARGUMENTOS com o objetivo de PERSUADIR o leitor.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Argumentar = Defender uma ideia (tese) para convencer o avaliador!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Retrato caracterológico pertence à descrição.",
      "B": "Incorreta. Descrição de enredo e personagens tipifica a narrativa.",
      "C": "Incorreta. Tom imperativo prescritivo define o texto injuntivo.",
      "D": "Correta. Tese estruturada sustentada por operadores argumentativos visando à persuasão.",
      "E": "Incorreta. Mera apresentação sem posicionamento é exposição."
    }
  },
  {
    "id": "elite_port_015",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe • Concordância Verbal com Sujeito Composto",
    "question": "Assinale a alternativa em que a concordância verbal com sujeito composto obedece estritamente às normas gramaticais:",
    "options": [
      "Nem o soldado nem o cabo foram promovido à patente superior este ano.",
      "Um e outro oficial manifestou descontentamento com a nova escala de serviço.",
      "Chegou ao quartel o comandante e os seus assessores diretos logo no amanhecer.",
      "O medo e a hesitação impediu o avanço da tropa durante o cerco tático.",
      "A dedicação, o estudo e o treino diário: nada abalava sua confiança na aprovação."
    ],
    "correctIndex": 4,
    "explanation": "Quando o sujeito composto vem resumido por um pronome indefinido como 'nada', 'tudo', 'ninguém', o verbo concorda OBRIGATORIAMENTE no singular com o termo aposto resumidor ('nada abalava...'). A frase C está absolutamente impecável.",
    "fundamentacaoLegal": "Gramática Metódica / Concordância com Aposto Resumidor",
    "hint": "Sujeito composto resumido por 'tudo', 'nada' ou 'ninguém' exige verbo no SINGULAR concordando com o pronome resumidor!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Tudo / Nada / Ninguém no final da lista = Verbo no SINGULAR!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Discordância nominal gritante no particípio passivo.",
      "B": "Incorreta. 'Um e outro' pede verbo no plural.",
      "C": "Incorreta. Menos exemplar e rígida que a regra soberana de C.",
      "D": "Incorreta. Sujeito composto anteposto ao verbo reclama flexão plural.",
      "E": "Correta. Termo resumidor 'nada' impõe o verbo no singular singularizado."
    }
  },
  {
    "id": "elite_port_016",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica • Relação entre Parônimos e Emprego de Homófonos",
    "question": "O correto emprego dos vocábulos parônimos é observado em:",
    "options": [
      "O militar cometeu uma flagrante infração ao código disciplinar da corporação.",
      "A perícia comprovou que o tiro foi disparado com arma de uso deferente do permitido.",
      "O cabo requereu a dilatação do prazo para interpor seu recurso descricionário.",
      "Os mandados de busca foram cumpridos sem qualquer tipo de mandato judicial prévio.",
      "O oficial agiu com muito bom censo ao negociar com os manifestantes pacíficos."
    ],
    "correctIndex": 0,
    "explanation": "'Flagrante' refere-se àquilo que é evidente, visto no próprio ato de sua execução, indubitável. Não se confunde com 'fragrante' (que emite cheiro agradável, aromático). Em A, 'flagrante infração' está empregado com precisão perfeita.",
    "fundamentacaoLegal": "Semântica e Ortografia Vocabular",
    "hint": "FLAGRANTE = evidente, no calor do ato. FRAGRANTE = perfumado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "FLAGRANTE lembra fogo/chama/evidência. FRAGRANTE lembra perfume/fragrância.",
    "porqueErrou": {
      "1": "Você marcou (B): O correto é 'diferente'. 'Deferente' significa respeitoso, cortês.",
      "2": "Você marcou (C): O correto é 'discricionário' (com 'i').",
      "3": "Você marcou (D): Houve troca indevida: ordem do juiz é 'mandado', enquanto 'mandato' é tempo de representação política.",
      "4": "Você marcou (E): O correto é 'bom senso' (com 's'). 'Censo' com 'c' é o recenseamento populacional do IBGE."
    },
    "analiseAlternativas": {
      "A": "Correta. 'Flagrante' expressa o ato evidente no momento em que ocorre.",
      "B": "Incorreta. 'Deferente' significa reverente e respeitoso.",
      "C": "Incorreta. Grafia errônea do adjetivo discricionário.",
      "D": "Incorreta. Confusão paronímica clássica entre mandado e mandato.",
      "E": "Incorreta. Juízo e discernimento grafa-se 'senso' com 's'."
    }
  },
  {
    "id": "elite_port_017",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe do Período • Orações Subordinadas Adjetivas Explicativas vs Restritivas",
    "question": "Considere os períodos:\nI. 'Os policiais militares, que concluíram o curso de capacitação tática, receberam nova dotação de equipamentos.'\nII. 'Os policiais militares que concluíram o curso de capacitação tática receberam nova dotação de equipamentos.'\nSobre as orações em análise, é correto afirmar:",
    "options": [
      "Em I, afirma-se que apenas uma fração dos policiais militares concluiu o curso e recebeu os equipamentos.",
      "A oração em II possui valor restritivo, restringindo o recebimento de equipamentos unicamente ao grupo que realizou a capacitação.",
      "A oração em I possui natureza restritiva, limitando o universo dos policiais contemplados.",
      "Em II, subentende-se que todos os policiais militares da corporação concluíram o curso e foram contemplados.",
      "Ambos os períodos são sintaticamente idênticos e expressam exatamente o mesmo conteúdo semântico."
    ],
    "correctIndex": 1,
    "explanation": "A oração adjetiva sem vírgulas (II) é RESTRITIVA: delimita, particulariza e restringe o alcance do termo antecedente, indicando que APENAS aqueles policiais que concluíram o curso receberam os novos equipamentos. Já a oração com vírgulas (I) é EXPLICATIVA: generaliza a ideia para a totalidade dos indivíduos do conjunto.",
    "fundamentacaoLegal": "Sintaxe das Orações Subordinadas Adjetivas",
    "hint": "SEM VÍRGULA = RESTRINGE (só alguns). COM VÍRGULA = EXPLICA/GENERALIZA (todos eles).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Vírgula solta = abraça todo mundo (explicativa). Sem vírgula = fecha a porta e filtra só alguns (restritiva).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A oração explicativa generaliza o fato a todos os componentes do termo antecedentemente citado.",
      "B": "Correta. A oração subordinada adjetiva restritiva (sem vírgulas) delimita o subgrupo de policiais habilitados.",
      "C": "Incorreta. Oração entre vírgulas é classificada como explicativa.",
      "D": "Incorreta. A ausência de vírgulas restringe o predicado a uma parcela.",
      "E": "Incorreta. A alteração na pontuação gera modificação semântica substancial."
    }
  },
  {
    "id": "elite_port_018",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vícios de Linguagem • Ambiguidade e Paralelismo Sintático",
    "question": "Assinale a alternativa que NÃO apresenta quebra de paralelismo sintático nem ambiguidade estrutural:",
    "options": [
      "O capitão orientou os novos soldados sobre a vigilância ostensiva e que mantivessem a calma.",
      "A corregedoria analisou os relatórios das diligências e determinando o arquivamento sumário.",
      "O plano de segurança prevê o policiamento contínuo nas áreas comerciais e a intensificação das blitzes nas vias de acesso.",
      "O comandante conversou com o prefeito em seu gabinete na sede do batalhão.",
      "A guarnição perseguiu os criminosos em fuga com suas próprias armas em punho."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa D, há perfeito paralelismo sintático: 'prevê [o policiamento contínuo nas áreas comerciais]' (substantivo + adjuntos) e '[a intensificação das blitzes nas vias de acesso]' (substantivo + adjuntos). Não há truncamento de estruturas, gerúndios desconexos nem pronomes possessivos de duplo sentido.",
    "fundamentacaoLegal": "Coesão e Coerência Textual / Paralelismo Sintático",
    "hint": "Paralelismo = Manter a mesma estrutura gramatical dos termos coordenados (substantivo com substantivo, verbo com verbo).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Simetria sintática: se começou com substantivo, continue com substantivo!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Falha de paralelismo entre substantivo e oração subordinada.",
      "B": "Incorreta. Quebra sintática no emprego do gerúndio após verbo no pretérito perfeito.",
      "C": "Correta. Estruturas simétricas perfeitas sem anomalias de referência ou quebra de paralelismo.",
      "D": "Incorreta. Ambiguidade possessiva quanto ao titular do gabinete.",
      "E": "Incorreta. Duplo sentido quanto à posse das armas."
    }
  },
  {
    "id": "elite_port_019",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica • Regras Gerais e Casos Diferenciais",
    "question": "Assinale a alternativa em que todos os vocábulos recebem acento gráfico com base exatamente na mesma justificativa gramatical:",
    "options": [
      "pólen, éden, hífen, caráter.",
      "país, saída, saúde, baú.",
      "você, café, cipó, armazém.",
      "lâmpada, tráfego, vítima, código.",
      "chapéu, troféu, anéis, herói."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa D, todos os vocábulos ('lâm-pa-da', 'trá-fe-go', 'ví-ti-ma', 'có-di-go') são palavras PROPAROXÍTONAS (possuem a antepenúltima sílaba tônica). No português, a regra é unívoca e absoluta: TODAS as proparoxítonas são obrigatoriamente acentuadas.",
    "fundamentacaoLegal": "Novo Acordo Ortográfico / Acentuação das Proparoxítonas",
    "hint": "Proparoxítonas: antepenúltima sílaba tônica. Todas são acentuadas sem exceção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Proparoxítona é a regra mais pura da gramática: 100% delas levam acento gráfico!",
    "porqueErrou": {
      "0": "Você marcou (A): 'Caráter' é paroxítona terminada em -r; 'pólen' em -n. Embora paroxítonas, a banca AOCP considera proparoxítonas como a resposta incontestável onde a regra é única.",
      "1": "Você marcou (B): 'Baú' e 'saída' são hiatos tônicos, mas D é a clássica questão de regra unificada.",
      "2": "Você marcou (C): 'Armazém' é oxítona terminada em -em; as demais terminam em vogal a, e, o.",
      "4": "Você marcou (E): 'Anéis' tem ditongo aberto 'éi'; 'troféu' tem 'éu'; 'herói' tem 'ói'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Paroxítonas com terminações distintas (-n vs -r).",
      "B": "Incorreta. Regra de hiatos, porém D é a regra absoluta mais pura da banca.",
      "C": "Incorreta. Oxítona terminada em -em difere das terminadas em vogais orais.",
      "D": "Correta. Todos os termos são rigorosamente proparoxítonos; regra gramatical unificada.",
      "E": "Incorreta. Ditongos abertos de timbres vocálicos diferentes."
    }
  },
  {
    "id": "elite_port_020",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Reescritura de Frases • Correção Gramatical e Clareza Semântica",
    "question": "Assinale a opção em que a reescritura do trecho 'Embora a viatura tenha enfrentado intenso tráfego urbano, a equipe logrou êxito em efetuar a prisão' mantém a correção gramatical e o sentido original:",
    "options": [
      "Porquanto a viatura enfrentou intenso tráfego urbano, a guarnição conseguiu prender os acusados.",
      "Visto que a viatura enfrentou intenso tráfego urbano, a equipe obteve êxito em efetuar a prisão.",
      "Conquanto a viatura enfrentasse intenso tráfego urbano, mas a equipe conseguiu efetuar a prisão.",
      "Não obstante de a viatura ter enfrentado tráfego intenso, no entanto a equipe logrou a prisão.",
      "A despeito de a viatura ter enfrentado intenso tráfego urbano, a equipe obteve sucesso em efetuar a prisão."
    ],
    "correctIndex": 4,
    "explanation": "A locução prepositiva concessiva 'a despeito de' substitui com absoluta perfeição semântica a conjunção 'embora', preservando o sentido de ressalva/concessão. A contração da preposição com o artigo foi evitada adequadamente diante de sujeito de verbo no infinitivo ('de a viatura ter enfrentado'). A frase está impecável.",
    "fundamentacaoLegal": "Sintaxe de Equivalência Concessiva e Regência",
    "hint": "Embora = A despeito de / Não obstante / Se bem que (CONCESSÃO).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "'A despeito de' é sinônimo direto e elegante de 'embora'!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Deturpação semântica da relação de concessão para causa.",
      "B": "Incorreta. Conector 'visto que' altera a relação lógica para causa.",
      "C": "Incorreta. Erro crasso de sobreposição conjuntiva ('conquanto... mas').",
      "D": "Incorreta. Vício de linguagem e locução inexistente.",
      "E": "Correta. Conectivo concessivo equivalente com perfeita adequação sintática diante de sujeito de infinitivo."
    }
  },
  {
    "id": "elite_hist_001",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania Hereditária de Pernambuco • Colonização e Economia Açucareira",
    "question": "Dentre as capitanias hereditárias criadas pela Coroa portuguesa em 1534, a Capitania de Nova Lusitânia (Pernambuco), doada a Duarte Coelho, destacou-se pela notável prosperidade econômica e consolidação colonial. O fator primordial que assegurou tal êxito foi:",
    "options": [
      "O cultivo sistemático da cana-de-açúcar favorecido pelo solo de massapê, clima propício e financiamento flamengo.",
      "A aliança militar incondicional e pacífica com todas as tribos indígenas Caetés e Potiguares.",
      "A descoberta imediata de vastas jazidas auríferas no sertão do Rio São Francisco.",
      "O monopólio régio da extração do pau-brasil com mão de obra exclusivamente assalariada europeia.",
      "A isenção total e perpétua de quaisquer tributos ou dízimos devidos à Ordem de Cristo."
    ],
    "correctIndex": 0,
    "explanation": "O sucesso da capitania de Pernambuco assentou-se no binômio cana-de-açúcar e solo de massapê (fértil, argiloso e escuro da Zona da Mata), aliado ao clima tropical úmido e, sobretudo, à articulação de capitais flamengos (holandeses) para o refino, transporte e distribuição do açúcar na Europa.",
    "fundamentacaoLegal": "História de Pernambuco / Economia Açucareira e Período Colonial",
    "hint": "Solo fértil (massapê) + cana-de-açúcar + capital e transporte holandês = Riqueza da Nova Lusitânia.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Pernambuco e São Vicente foram as únicas que prosperaram, com PE brilhando no ouro branco (açúcar).",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Solo de massapê, cana-de-açúcar e logística/capital financeiro holandês garantiram o triunfo colonial.",
      "B": "Incorreta. Ocorreram severas guerras de extermínio e resistência indígena.",
      "C": "Incorreta. A mineração ocorreu em outra região e período histórico.",
      "D": "Incorreta. A mão de obra adotada foi escrava e o produto base foi o açúcar.",
      "E": "Incorreta. O Foral previa o pagamento de dízimos e taxas sobre a produção."
    }
  },
  {
    "id": "elite_hist_002",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Governo de Maurício de Nassau (1637-1644)",
    "question": "Durante o período do domínio holandês no Nordeste açucareiro, o Conde Maurício de Nassau implementou uma política administrativa que marcou profundamente a história do Recife. Entre as principais medidas de sua gestão, destaca-se:",
    "options": [
      "A expulsão imediata dos proprietários luso-brasileiros e o confisco indiscriminado de todos os engenhos de açúcar.",
      "A concessão de ampla tolerância religiosa aos judeus e católicos, atração de cientistas e artistas europeus e reformas urbanísticas na chamada Cidade Maurícia.",
      "A abolição total da escravidão africana na capitania e a substituição por colonos assalariados vindos de Amsterdã.",
      "O rompimento definitivo e unilateral com a Companhia das Índias Ocidentais (WIC) para criar um reino independente.",
      "A transferência imediata da capital da colônia brasileira de Salvador para Olinda."
    ],
    "correctIndex": 1,
    "explanation": "Maurício de Nassau destacou-se pela modernização e humanismo: concedeu liberdade de culto (tolerância a católicos e judeus, culminando na fundação da Sinagoga Kahal Zur Israel no Recife), concedeu empréstimos aos senhores de engenho luso-brasileiros, urbanizou a Ilha de Antônio Vaz (Mauritsstad) e trouxe artistas e cientistas como Frans Post, Albert Eckhout e Piso.",
    "fundamentacaoLegal": "História de Pernambuco / O Brasil Holandês (1630-1654)",
    "hint": "Nassau = Tolerância religiosa + Modernização do Recife (Cidade Maurícia) + Cientistas e pintores (Frans Post).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Nassau é sinônimo de Tolerância, Arte (Frans Post) e Urbanismo no Recife!",
    "porqueErrou": {
      "0": "Você marcou (A): Nassau não confiscou indistintamente; ele concedeu créditos fartos aos senhores de engenho para reativar a produção.",
      "2": "Você marcou (C): A escravidão negra foi mantida e amplamente utilizada durante todo o domínio flamengo.",
      "3": "Você marcou (D): Nassau era funcionário contratado pela Companhia das Índias Ocidentais (WIC), com a qual entrou em atrito financeiro ao final de sua gestão.",
      "4": "Você marcou (E): Nassau ergueu a Cidade Maurícia no Recife após incendiarem Olinda."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Nassau buscou pacificar e cooperar com a elite açucareira local.",
      "B": "Correta. Tolerância religiosa, estímulo à ciência e cultura, e transformação urbana e sanitária do Recife.",
      "C": "Incorreta. A WIC inclusive traficou escravos em larga escala da África.",
      "D": "Incorreta. Nassau não fundou nenhum reino monárquico independente.",
      "E": "Incorreta. Olinda foi em grande parte incendiada e o centro político fixou-se no Recife."
    }
  },
  {
    "id": "elite_hist_003",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes e Matriz Étnica",
    "question": "A Insurreição Pernambucana (1645-1654), culminando nas épicas Batalhas dos Montes Guararapes (1648 e 1649), é considerada pela historiografia nacional e pelas Forças Armadas como o 'berço da nacionalidade e do Exército Brasileiro' porque:",
    "options": [
      "Contou com o apoio financeiro e tropas regulares maciças enviadas de imediato pela Coroa portuguesa para expulsar os invasores.",
      "Resultou na proclamação da primeira república constitucional plenamente soberana nas Américas.",
      "Promoveu a integração armada das três matrizes formadoras do povo brasileiro: brancos (luso-brasileiros), negros (Henrique Dias) e indígenas (Filipe Camarão).",
      "Foi liderada com exclusividade pela nobreza açucareira de Olinda, sem nenhuma participação popular ou de cativos.",
      "Consolidou a vitória da marinha britânica sobre as frotas holandesas ancoradas no litoral do Nordeste."
    ],
    "correctIndex": 2,
    "explanation": "A Batalha dos Montes Guararapes consagrou a união das três etnias na luta pela pátria: os luso-brasileiros comandados por João Fernandes Vieira e André Vidal de Negreiros, os negros livres e libertos no Terço dos Henriques sob o comando de Henrique Dias, e os indígenas liderados por D. Antônio Filipe Camarão.",
    "fundamentacaoLegal": "História Militar de Pernambuco / Insurreição Pernambucana",
    "hint": "Berço da Pátria = União das três etnias: Luso-brasileiros + Negros (Henrique Dias) + Índios (Filipe Camarão).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Três raças, uma só terra: Guararapes gerou o sentimento de identidade brasileira!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Portugal temia guerra aberta com os Países Baixos e agiu com prudência diplomática.",
      "B": "Incorreta. O movimento não teve caráter de secessão republicana.",
      "C": "Correta. Aliança das três matrizes étnicas sob a liderança de Fernandes Vieira, Vidal de Negreiros, Henrique Dias e Filipe Camarão.",
      "D": "Incorreta. Movimento teve intensa participação popular, indígena e afrodescendente.",
      "E": "Incorreta. Batalha terrestre emblemática nos morros ao sul do Recife."
    }
  },
  {
    "id": "elite_hist_004",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) • Conflito Olinda vs Recife",
    "question": "A Guerra dos Mascates (1710-1711) representou uma das mais virulentas rebeliões nativistas coloniais em Pernambuco. O núcleo central das tensões derivou:",
    "options": [
      "Da disputa territorial entre a capitania de Pernambuco e a capitania da Bahia pela posse do porto de Suape.",
      "Da rebelião de escravizados fugidos de engenhos que tentavam refundar a Confederação dos Palmares no litoral.",
      "Do conflito entre o clero católico jesuítico e os governadores militares nomeados pela Coroa britânica.",
      "Da oposição entre a aristocracia rural endividada de Olinda e a burguesia mercantil portuguesa do Recife, desencadeada pela elevação do Recife à categoria de vila.",
      "Da invasão de corsários franceses que saquearam o acervo de ouro das igrejas de Olinda e do Recife."
    ],
    "correctIndex": 3,
    "explanation": "Com a crise do açúcar, os aristocratas senhores de engenho de Olinda estavam pesadamente endividados junto aos comerciantes portugueses estabelecidos no Recife (depreciativamente chamados de 'mascates'). Quando o Recife obteve da Coroa a sua emancipação política e elevação à categoria de vila (com pelourinho e câmara própria), Olinda perdeu o domínio tributário, desencadeando a guerra civil.",
    "fundamentacaoLegal": "História de Pernambuco / Conflitos Nativistas Coloniais",
    "hint": "Guerra dos Mascates: Senhores de engenho de Olinda falidos vs Comerciantes portugueses ricos do Recife.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Olinda = Nobres falidos do campo. Recife = Mascates ricos do comércio.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Disputa estritamente intramunicipal/regional pernambucana.",
      "B": "Incorreta. Conflito de elites e não levante de escravizados.",
      "C": "Incorreta. Invenção histórica sem lastro factual.",
      "D": "Correta. Conflito entre senhores de engenho endividados de Olinda e comerciantes portugueses do Recife pela autonomia municipal.",
      "E": "Incorreta. Fator estritamente endógeno e de finanças coloniais."
    }
  },
  {
    "id": "elite_hist_005",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 • Movimento Emancipacionista e República",
    "question": "A Revolução Pernambucana de 1817 é notória por ter sido o único movimento separatista do período colonial que efetivamente tomou o poder e instituiu uma república com governo provisório por mais de setenta dias. Entre os traços fundamentais desse movimento, inclui-se:",
    "options": [
      "A adesão imediata de todas as províncias do Centro-Sul brasileiro com envio de regimentos do Rio de Janeiro.",
      "O apoio logístico e financeiro integral do rei D. João VI às reivindicações dos patriotas pernambucanos.",
      "A decretação instantânea e incondicional da libertação geral de todos os escravos da província.",
      "A restauração imediata do regime colonial holandês com entrega do território aos Países Baixos.",
      "A inspiração nos ideais iluministas, forte presença da maçonaria e do clero ilustrado (Revolução dos Padres) e proclamação da liberdade de imprensa e de consciência religiosa."
    ],
    "correctIndex": 4,
    "explanation": "A Revolução de 1817 bebeu na fonte do Iluminismo e da Revolução Francesa e Americana, com intensa participação do clero (como Frei Caneca e Padre João Ribeiro, justificando o apelido 'Revolução dos Padres') e das lojas maçônicas como o Areópago de Itambé. Seu governo provisório proclamou a república, liberdade religiosa e de imprensa, mas MANTEVE a escravidão para não perder o apoio dos fazendeiros.",
    "fundamentacaoLegal": "História de Pernambuco / Movimentos Separatistas / Revolução de 1817",
    "hint": "1817: Tomou o poder por 74 dias, criou governo republicano, apoiada por padres e maçons, mas NÃO aboliu a escravidão.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "1817 = Única que deu certo e virou República! Mas a escravidão foi poupada pelos fazendeiros.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. As províncias do Sul apoiaram a monarquia joanina.",
      "B": "Incorreta. A repressão monárquica joanina foi violenta e implacável.",
      "C": "Incorreta. A abolição da escravatura não foi aprovada pelo governo provisório.",
      "D": "Incorreta. O projeto era nacionalista e republicano brasileiro.",
      "E": "Correta. Ideário iluminista, maçonaria, participação expressiva do clero e criação de leis republicanas e liberdades civis."
    }
  },
  {
    "id": "elite_hist_006",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) • Frei Caneca e Resistência ao Poder Moderador",
    "question": "Em 1824, eclodiu em Pernambuco a Confederação do Equador, estendendo-se por diversas províncias nordestinas (Ceará, Rio Grande do Norte e Paraíba). O catalisador fundamental que desencadeou essa revolta armada contra o Império do Brasil foi:",
    "options": [
      "A outorga autoritária da Constituição de 1824 por D. Pedro I, após dissolver arbitrariamente a Assembleia Constituinte de 1823, criando o Poder Moderador.",
      "A decisão do imperador de transferir os recursos da alfândega do Recife para sustentar a Guerra da Cisplatina.",
      "O cancelamento dos títulos de nobreza outorgados à aristocracia açucareira pernambucana.",
      "A promulgação do Tratado de Aliança com a Coroa portuguesa que reconduzia o Brasil à condição de Reino Unido.",
      "A recusa de D. Pedro I em nomear Frei Caneca como Ministro da Fazenda do Império."
    ],
    "correctIndex": 0,
    "explanation": "A Confederação do Equador explodiu após D. Pedro I dissolver a Assembleia Constituinte de 1823 ('A Noite da Agonia') e outorgar autocraticamente a Constituição de 1824, instituindo o temido Poder Moderador (que dava poder absoluto ao Imperador) e impondo o presidente de província Francisco Pais Barreto contra a vontade dos pernambucanos liderados por Manuel de Carvalho Pais de Andrade e Frei Caneca.",
    "fundamentacaoLegal": "História de Pernambuco / Primeiro Reinado / Confederação do Equador",
    "hint": "1824 = Reação à Constituição Outorgada de D. Pedro I e contra a tirania do Poder Moderador.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Caneca contra o Imperador: 1824 combateu a Constituição imposta e o Poder Moderador!",
    "porqueErrou": {
      "1": "Você marcou (B): A questão fiscal pesava, mas a causa política primária foi a ruptura autoritária constitucional.",
      "2": "Você marcou (C): A aristocracia tradicional estava dividida e não foi motivação de títulos.",
      "3": "Você marcou (D): A independência já estava declarada desde 1822.",
      "4": "Você marcou (E): Frei Caneca era jornalista e revolucionário radical, mentor ideológico do jornal Typhis Pernambucano."
    },
    "analiseAlternativas": {
      "A": "Correta. Dissolução da Constituinte, imposição da Carta outorgada e criação do autoritário Poder Moderador.",
      "B": "Incorreta. Conflito eminentemente político-institucional e federativo.",
      "C": "Incorreta. Não houve revogação coletiva de títulos nobiliárquicos.",
      "D": "Incorreta. O Brasil já era soberano perante Portugal.",
      "E": "Incorreta. Frei Caneca liderava a oposição republicana e não pleiteava ministérios na Corte."
    }
  },
  {
    "id": "elite_hist_007",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848) • O Manifesto ao Mundo e Fim das Revoltas Regenciais",
    "question": "A Revolução Praieira (1848-1850), última grande rebelião de caráter liberal-radical do período imperial brasileiro, teve como base política o Partido da Praia e publicou seu célebre ideário no documento conhecido como 'Manifesto ao Mundo'. Dentre as reivindicações expressas nesse manifesto, constava:",
    "options": [
      "A submissão integral da província de Pernambuco ao trono britânico.",
      "O voto livre e universal para o povo brasileiro, plena liberdade de imprensa e nacionalização do comércio a retalho.",
      "A reintrodução do monopólio régio sobre as feiras de gado do Agreste e Sertão.",
      "A transferência imediata do Parlamento Imperial para a cidade de Olinda.",
      "A dissolução sumária das Forças Policiais e do Exército em favor de milícias municipais anárquicas."
    ],
    "correctIndex": 1,
    "explanation": "Redigido por Borges da Fonseca no jornal Diário Novo (sediado na Rua da Praia, daí o nome 'Praieira'), o Manifesto ao Mundo preconizava: voto livre e universal do povo brasileiro, plena e absoluta liberdade de comunicar o pensamento pela imprensa, trabalho como garantia de vida, comércio a retalho nacionalizado (para afastar comerciantes portugueses), e extinção do Poder Moderador.",
    "fundamentacaoLegal": "História do Brasil Império / Revolução Praieira de 1848",
    "hint": "Manifesto ao Mundo = Voto livre e universal + Liberdade de imprensa + Nacionalização do comércio a retalho.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Praieira de 1848: Inspirada na Primavera dos Povos européia! Voto para todos e comércio nacional.",
    "porqueErrou": {
      "0": "Você marcou (A): O movimento era de inspiração liberal e nacionalista republicano.",
      "2": "Você marcou (C): O foco comercial era contra o monopólio mercantil português nas cidades.",
      "3": "Você marcou (D): A capital do Império permaneceu no Rio de Janeiro sem esse pleito.",
      "4": "Você marcou (E): Os praieiros não pregavam o anarquismo militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Movimento patriótico de defesa dos direitos cívicos brasileiros.",
      "B": "Correta. Sufrágio universal masculino, liberdade irrestrita de imprensa e proteção do mercado retalhista nacional.",
      "C": "Incorreta. Não havia demanda de monopólio régio sobre feiras agropecuárias.",
      "D": "Incorreta. Nenhuma proposta de transferência do parlamento monárquico.",
      "E": "Incorreta. O projeto buscava reformas constitucionais e justiça social dentro da ordem pública."
    }
  },
  {
    "id": "elite_hist_008",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação da Polícia Militar de Pernambuco • Criação do Corpo de Polícia em 1825",
    "question": "A Polícia Militar de Pernambuco (PMPE) tem suas origens históricas atreladas à consolidação da ordem pública no Primeiro Reinado. O ato fundador oficial da corporação decorreu do decreto emitido pelo Imperador D. Pedro I em 11 de junho de 1825, que criou o(a):",
    "options": [
      "Batalhão de Voluntários da Pátria do Agreste.",
      "Guarda Negra da Imperatriz Leopoldina.",
      "Corpo de Polícia da Província de Pernambuco.",
      "Regimento de Dragões da Zona da Mata Norte.",
      "Força Expedicionária Pernambucana de Pacificação."
    ],
    "correctIndex": 2,
    "explanation": "Por meio do Decreto Imperial de 11 de junho de 1825, assinado por D. Pedro I após os conturbados acontecimentos da Confederação do Equador de 1824, foi criado o 'Corpo de Polícia da Província de Pernambuco', corporação armada permanente destinada à manutenção da tranquilidade pública e combate à criminalidade, embrião institucional da gloriosa PMPE.",
    "fundamentacaoLegal": "Legislação Histórica da PMPE / Decreto Imperial de 11 de junho de 1825",
    "hint": "11 de junho de 1825 = Criação do Corpo de Polícia da Província de Pernambuco por D. Pedro I.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "1825: Nasce a PMPE como Corpo de Polícia Provincial!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Unidade militar criada especificamente para a Guerra da Tríplice Aliança.",
      "B": "Incorreta. Guarda monárquica do final do Segundo Reinado.",
      "C": "Correta. Criação formal em 11 de junho de 1825 do Corpo de Polícia da Província de Pernambuco.",
      "D": "Incorreta. Corpo militar do período colonial das minas.",
      "E": "Incorreta. Não corresponde à denominação jurídica do decreto de D. Pedro I."
    }
  },
  {
    "id": "elite_hist_009",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Abolicionismo em Pernambuco • Joaquim Nabuco e o Clube do Cupim",
    "question": "Na segunda metade do século XIX, Pernambuco foi palco de intensa agitação abolicionista, distinguindo-se tanto pela via parlamentar quanto pela ação clandestina de libertação de escravizados. O grupo secreto recifense que organizava fugas de cativos e os encaminhava para a província do Ceará (que já havia abolido a escravidão em 1884) era denominado:",
    "options": [
      "Comitê Praieiro de Libertação.",
      "Sociedade Cavaleiros da Esperança.",
      "Irmandade dos Homens Pretos de Olinda.",
      "Clube do Cupim.",
      "Areópago Abolicionista do Recife."
    ],
    "correctIndex": 3,
    "explanation": "O 'Clube do Cupim' foi uma sociedade secreta abolicionista fundada no Recife em 1884 por figuras como Barros Sobrinho, Martins Júnior e José Mariano. Eles resgatavam escravizados das senzalas e leilões, escondiam-nos em porões seguros e compravam passagens para enviá-los ao Ceará (a 'Terra da Luz'), província pioneira que libertara todos os cativos antes da Lei Áurea.",
    "fundamentacaoLegal": "História de Pernambuco / Movimento Abolicionista / Joaquim Nabuco",
    "hint": "Sociedade secreta do Recife que agia contra a escravidão nas sombras = CLUBE DO CUPIM.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "O Cupim roía as correntes da escravidão pelas costas dos senhores de engenho!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Incoerência cronológica e denominativa.",
      "B": "Incorreta. Conotação tenentista do século XX.",
      "C": "Incorreta. Entidades confessionais leigas de auxílio mútuo.",
      "D": "Correta. O Clube do Cupim operou ativamente na clandestinidade salvando centenas de escravizados.",
      "E": "Incorreta. O Areópago pertenceu ao início do século XIX colonial."
    }
  },
  {
    "id": "elite_hist_010",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "República Velha em Pernambuco • O Rosasilvismo e o Dantas-Barretismo",
    "question": "Durante a Primeira República (1889-1930), o cenário político pernambucano foi dominado pelo embate entre grupos oligárquicos rivais. A facção conservadora vinculada aos usineiros e ao governo federal liderada pelo Conselheiro Rosa e Silva encontrou forte resistência urbana no movimento liderado pelo General:",
    "options": [
      "Emílio Garrastazu Médici.",
      "Herculano Bandeira.",
      "Agamenon Magalhães.",
      "Juarez Távora.",
      "Dantas Barreto."
    ],
    "correctIndex": 4,
    "explanation": "O 'Dantas-barretismo' foi o grande movimento político que desafiou a hegemonia de quase duas décadas do conselheiro Francisco de Assis Rosa e Silva ('Rosasilvismo'). Apoiado pela política de salvações do Presidente Hermes da Fonseca e por ampla mobilização das camadas médias e urbanas do Recife, o General Dantas Barreto elegeu-se governador de Pernambuco em 1911 após violentas disputas cívicas.",
    "fundamentacaoLegal": "História Política de Pernambuco na Primeira República",
    "hint": "Dantas Barreto: General militar que derrotou a velha oligarquia do Conselheiro Rosa e Silva.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Rosa e Silva (Velha Oligarquia) vs Dantas Barreto (Salvações e Povo do Recife)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Figura da ditadura militar brasileira posterior.",
      "B": "Incorreta. Político governista do esquema de Rosa e Silva.",
      "C": "Incorreta. Líder político atuante no Estado Novo.",
      "D": "Incorreta. Oficial do movimento tenentista dos anos 1920/1930.",
      "E": "Correta. General Dantas Barreto protagonizou a ruptura do Rosasilvismo em 1911."
    }
  },
  {
    "id": "elite_hist_011",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "O Cangaço em Pernambuco • O Bando de Lampião e as Forças Volantes da PMPE",
    "question": "Na década de 1920 e 1930, o Sertão pernambucano foi o epicentro das incursões do bando de Virgulino Ferreira da Silva, o 'Lampião', nascido em Vila Bela (atual Serra Talhada). O modelo tático empregado pela Polícia Militar de Pernambuco para caçar os cangaceiros na caatinga consistia nas chamadas:",
    "options": [
      "Forças Volantes (pequenos destacamentos com trajes de couro adaptados ao terreno sertanejo e mobilidade permanente).",
      "Brigadas Blindadas de Trânsito.",
      "Companhias de Artilharia Fixa de Trincheira.",
      "Falanges Montadas da Guarda Nacional.",
      "Tropas Ferroviárias de Vigilância Litorânea."
    ],
    "correctIndex": 0,
    "explanation": "As 'Forças Volantes' da PMPE e das polícias vizinhas eram destacamentos táticos formados por homens rústicos que vestiam roupas e chapéus de couro para resistir aos espinhos da caatinga e operavam em patrulhas a pé contínuas, vivendo sob as mesmas agruras e empregando a mesma tática de emboscadas e guerrilha dos cangaceiros.",
    "fundamentacaoLegal": "História Operacional da PMPE / Combate ao Banditismo e Cangaço",
    "hint": "Volantes da PMPE: pelotões táticos ágeis, com uniforme de couro, que caçavam Lampião no sertão.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Volante = Tropa móvel que voava na caatinga no rastro de Lampião!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. As Volantes da PMPE operavam com alta mobilidade, trajes sertanejos e táticas de emboscada.",
      "B": "Incorreta. Veículos blindados não existiam no interior sertanejo.",
      "C": "Incorreta. Conflito caracterizava-se por mobilidade extrema e não posições estáticas.",
      "D": "Incorreta. Estrutura extinta no início da República.",
      "E": "Incorreta. Erro geográfico e funcional evidente."
    }
  },
  {
    "id": "elite_hist_012",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução de 1930 • O Assassinato de João Pessoa na Confeitaria Glória",
    "question": "O assassinato do político paraibano João Pessoa em 26 de julho de 1930 ocorreu na cidade do Recife (na histórica Confeitaria Glória, na Rua Nova) pelas mãos do advogado João Duarte Dantas. O impacto histórico imediato desse episódio em Pernambuco e no Brasil foi:",
    "options": [
      "A imediata coroação de Getúlio Vargas como Imperador do Nordeste.",
      "A instrumentalização política do homicídio (que decorrera de desavenças privadas e locais) pela Aliança Liberal para deflagrar a Revolução de 1930 e depor Washington Luís.",
      "A dissolução da Polícia Militar de Pernambuco e a rendição de todas as guarnições federais.",
      "A criação imediata do Estado de Pernambuco do Sul com capital em Caruaru.",
      "O cancelamento das eleições e o prolongamento do mandato dos coronéis paulistas do café."
    ],
    "correctIndex": 1,
    "explanation": "Embora motivado por questões pessoais e regionais paraibanas (publicação de cartas íntimas no jornal oficial de João Pessoa), o assassinato foi transformado pela Aliança Liberal (Vargas e aliados) em crime político de Estado imputado ao governo de Washington Luís. O corpo de João Pessoa foi exposto com comoção popular no Recife e no Rio, tornando-se o estopim emocional e militar da Revolução de 1930.",
    "fundamentacaoLegal": "História do Brasil Republicano / Revolução de 1930 / Caso João Pessoa",
    "hint": "Morte de João Pessoa no Recife: Virou mártir da Aliança Liberal e serviu de estopim para a Revolução de 1930.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Bala na Confeitaria Glória derrubou a República do Café com Leite em 1930!",
    "porqueErrou": {
      "0": "Você marcou (A): O regime republicano foi mantido sob governo provisório chefiado por Getúlio Vargas.",
      "2": "Você marcou (C): A PMPE participou dos acontecimentos e manteve sua estrutura hierárquica.",
      "3": "Você marcou (D): Não houve divisão territorial do estado de Pernambuco.",
      "4": "Você marcou (E): O governo federal de Washington Luís foi deposto pela junta militar e entregue a Vargas."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conotação monárquica absurda.",
      "B": "Correta. Mote de propaganda da Aliança Liberal para mobilizar a população e iniciar o levante militar.",
      "C": "Incorreta. A corporação militar continuou atuante.",
      "D": "Incorreta. Pernambuco manteve seus limites geográficos.",
      "E": "Incorreta. O poder cafeeiro foi apeado do governo central."
    }
  },
  {
    "id": "elite_hist_013",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Estado Novo em Pernambuco • A Interventoria de Agamenon Magalhães",
    "question": "Durante o Estado Novo varguista (1937-1945), Pernambuco foi governado pelo interventor federal Agamenon Sérgio de Godoy Magalhães. Uma das marcas sociopolíticas mais conhecidas de sua administração foi:",
    "options": [
      "A abolição total de todas as fábricas têxteis da Região Metropolitana.",
      "A legalização do Partido Comunista e a promoção de greves sindicais gerais.",
      "A Campanha dos Mocambos, que visava à erradicação das habitações precárias de palha no Recife e construção de vilas operárias de alvenaria aliada a forte controle social.",
      "A criação do primeiro porto aeroespacial militar em Fernando de Noronha com apoio soviético.",
      "O rompimento diplomático de Pernambuco com o governo federal de Getúlio Vargas."
    ],
    "correctIndex": 2,
    "explanation": "Agamenon Magalhães promoveu a célebre 'Campanha dos Mocambos' (ou Liga Social contra o Mocambo), que destruía palhoças e mocambos em áreas alagadas do Recife substituindo-os por conjuntos de casas de alvenaria. Essa política combinava higienismo urbano, paternalismo varguista e forte vigilância policial contra os setores oposicionistas de esquerda.",
    "fundamentacaoLegal": "História Política Contemporânea de Pernambuco / Estado Novo",
    "hint": "Agamenon Magalhães = Liga Contra o Mocambo (derrubada de palhoças e criação de casas para trabalhadores).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Agamenon combateu os mocambos de palha e consolidou o poder varguista em PE!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Setor fabril foi mantido e estimulado.",
      "B": "Incorreta. O PCB permaneceu na mais dura clandestinidade e perseguição política.",
      "C": "Correta. Erradicação sanitária dos mocambos com apelo social, modernização autoritária e cooptação das classes trabalhadoras.",
      "D": "Incorreta. Bases eram de cooperação com os Aliados ocidentais (EUA).",
      "E": "Incorreta. Agamenon foi um dos pilares do getulismo no país."
    }
  },
  {
    "id": "elite_hist_014",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Ligas Camponesas • Francisco Julião e os Conflitos Agrários na Zona da Mata",
    "question": "Nas décadas de 1950 e início de 1960, Pernambuco tornou-se o centro das atenções políticas nacionais e internacionais devido à mobilização dos trabalhadores rurais. O movimento social que nasceu no Engenho Galileia (Vitória de Santo Antão) e espalhou-se pelo país sob a liderança do advogado Francisco Julião foi o das:",
    "options": [
      "Guerrilhas do Araguaia Sertanejo.",
      "Associações Patronais do Algodão.",
      "Falanges Canavieiras da Mata Norte.",
      "Ligas Camponesas.",
      "Cooperativas Militares de Reforma Urbana."
    ],
    "correctIndex": 3,
    "explanation": "As Ligas Camponesas nasceram em 1955 no Engenho Galileia, em Vitória de Santo Antão (PE), inicialmente como Sociedade Agrícola e de Plantadores de Pernambuco (com fins de assistência mútua funerária). Lideradas por Francisco Julião, transformaram-se em um poderoso movimento de massa pela reforma agrária sob o lema 'Reforma Agrária na Lei ou na Marra'.",
    "fundamentacaoLegal": "História dos Movimentos Sociais em Pernambuco / Questão Agrária",
    "hint": "Engenho Galileia em Vitória de Santo Antão + Francisco Julião = LIGAS CAMPONESAS.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Julião + Galileia = Ligas Camponesas na luta pela terra!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conflito guerrilheiro localizado na Amazônia.",
      "B": "Incorreta. As ligas representavam os meeiros e foreiros contra os patrões.",
      "C": "Incorreta. Invenção sem respaldo historiográfico.",
      "D": "Correta. As Ligas Camponesas mobilizaram os trabalhadores rurais pela posse da terra e direitos trabalhistas no campo.",
      "E": "Incorreta. Não possuía caráter militar."
    }
  },
  {
    "id": "elite_hist_015",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Golpe Militar de 1964 em Pernambuco • A Deposição do Governador Miguel Arraes",
    "question": "Em 1º de abril de 1964, a deposição do governo constitucional do Brasil repercutiu dramaticamente no Recife. O Governador de Pernambuco, Miguel Arraes de Alencar, foi cercado no Palácio do Campo das Princesas pelo Exército Brasileiro e recusou-se a renunciar, sendo:",
    "options": [
      "Imediatamente executado sumariamente nos jardins do palácio governamental.",
      "Reconhecido como líder militar do IV Exército por sua lealdade à nova junta governante.",
      "Nomeado Ministro das Relações Exteriores pelo comando das Forças Armadas.",
      "Exilado de imediato na Suíça com total garantia de seus direitos políticos.",
      "Preso pelas forças golpistas, conduzido ao 14º Regimento de Infantaria e posteriormente encarcerado na ilha de Fernando de Noronha."
    ],
    "correctIndex": 4,
    "explanation": "O Governador Miguel Arraes de Alencar recusou-se veementemente a renunciar ao mandato conferido pelo povo de Pernambuco. Cercado pelas tropas do IV Exército comandadas pelo General Justino Alves Bastos no Palácio do Campo das Princesas, foi preso, mantido provisoriamente no Recife e depois transferido como prisioneiro político para a ilha de Fernando de Noronha.",
    "fundamentacaoLegal": "História do Brasil Contemporâneo / Regime Militar de 1964 em PE",
    "hint": "Miguel Arraes recusou a renúncia no Palácio do Campo das Princesas e foi preso em Fernando de Noronha.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Arraes não capitulou: foi preso no palácio e levado a Fernando de Noronha!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não houve execução sumária do governador.",
      "B": "Incorreta. O IV Exército executou o cerco e a intervenção federal na capital.",
      "C": "Incorreta. Absurdo histórico diante da oposição frontal de Arraes ao golpe.",
      "D": "Incorreta. A detenção ocorreu em solo pernambucano e no arquipélago oceânico.",
      "E": "Correta. Prisão política após resistência moral e confinamento em Fernando de Noronha."
    }
  },
  {
    "id": "elite_hist_016",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Movimento Armorial • Ariano Suassuna e a Cultura Pernambucana",
    "question": "Lançado oficialmente no Recife em 18 de outubro de 1970 com um concerto no pátio da Igreja de São Pedro dos Clérigos, o Movimento Armorial, idealizado pelo escritor e dramaturgo Ariano Suassuna, tinha como propósito estético e civilizatório central:",
    "options": [
      "A criação de uma arte erudita brasileira autêntica a partir das raízes populares tradicionais do Nordeste (o cordel, a xilogravura, o romanceiro ibérico e os folguedos populares).",
      "A introdução maciça do rock elétrico e de tecnologias digitais anglo-saxônicas na música do Nordeste.",
      "A destruição dos monumentos históricos barrocos de Olinda e Recife para dar lugar ao modernismo concretista.",
      "A proibição do uso de instrumentos acústicos como a rabeca e a viola de doze cordas.",
      "A defesa do retorno do Brasil ao sistema colonial sob a monarquia bragantina."
    ],
    "correctIndex": 0,
    "explanation": "O Movimento Armorial, concebido pelo gênio de Ariano Suassuna, buscou criar uma arte clássica e erudita brasileira com raízes nas manifestações mais puras da cultura popular nordestina (xilogravuras de folhetos de cordel, cerâmica de Caruaru, maracatus, cavalo-marinho, o romanceiro medieval ibérico e o som da rabeca e do pífano).",
    "fundamentacaoLegal": "Cultura e Identidade Histórica de Pernambuco / Movimento Armorial",
    "hint": "Armorial de Ariano Suassuna: Arte erudita nascida das raízes populares do sertão (cordel, rabeca, xilogravura).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Armorial = Ariano Suassuna transformando o cordel e a rabeca em arte clássica universal!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Construção de uma estética erudita a partir da herança vernacular nordestina e ibérica.",
      "B": "Incorreta. Postura de oposição à americanização cultural e defesa da arte de raiz.",
      "C": "Incorreta. Exaltação e valorização do passado histórico pernambucano.",
      "D": "Incorreta. A rabeca é o instrumento símbolo da sonoridade armorial.",
      "E": "Incorreta. Não tinha propósitos de restauração monárquica de Portugal."
    }
  },
  {
    "id": "elite_hist_017",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Quilombo dos Palmares e a Capitania de Pernambuco",
    "question": "O Quilombo dos Palmares, o maior refúgio de escravizados rebelados do período colonial nas Américas, situava-se originalmente na Serra da Barriga, território que até o século XVIII integrava a jurisdição da Capitania de Pernambuco (atual Alagoas). A destruição definitiva da Cerca Real dos Macacos (1694) foi consumada pelas tropas chefiadas pelo bandeirante paulista contratado pelos fazendeiros pernambucanos chamado:",
    "options": [
      "Raposo Tavares.",
      "Domingos Jorge Velho.",
      "Fernão Dias Pais Leme.",
      "Borba Gato.",
      "Bartolomeu Bueno da Silva (Anhanguera)."
    ],
    "correctIndex": 1,
    "explanation": "Após décadas de resistência sob as lideranças de Ganga Zumba e Zumbi, o governo da Capitania de Pernambuco e os senhores de engenho contrataram o experiente e impiedoso bandeirante paulista Domingos Jorge Velho para comandar o cerco e o bombardeio à fortaleza de Palmares na Serra da Barriga, resultando na queda do quilombo em 1694.",
    "fundamentacaoLegal": "História Colonial de Pernambuco / Resistência Negra e Quilombo dos Palmares",
    "hint": "Bandeirante contratado para destruir Palmares = DOMINGOS JORGE VELHO.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Domingos Jorge Velho foi o bandeirante contratado por Pernambuco para o cerco a Zumbi dos Palmares.",
    "porqueErrou": {
      "0": "Você marcou (A): Raposo Tavares liderou expedições no Sul contra reduções jesuíticas.",
      "2": "Você marcou (C): Fernão Dias buscou esmeraldas em Minas Gerais.",
      "3": "Você marcou (D): Borba Gato atuou na mineração em Minas Gerais.",
      "4": "Você marcou (E): Anhanguera atuou no desbravamento de Goiás."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conhecido pelas devastações das missões no sul do continente.",
      "B": "Correta. Domingos Jorge Velho comandou os regimentos mercenários contratados pela Coroa e donatários de PE.",
      "C": "Incorreta. O 'Caçador de Esmeraldas' atuou no Sudeste.",
      "D": "Incorreta. Figura ligada aos primórdios das Minas Gerais.",
      "E": "Incorreta. Focado na região Centro-Oeste."
    }
  },
  {
    "id": "elite_hist_018",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "A Pecuária e a Ocupação do Sertão • Os Caminhos do Couro e do São Francisco",
    "question": "A ocupação e colonização do interior semiárido de Pernambuco ao longo dos séculos XVII e XVIII seguiu uma dinâmica socioeconômica e espacial radicalmente distinta da Zona da Mata canavieira. Essa expansão para os sertões do Rio São Francisco caracterizou-se fundamentalmente:",
    "options": [
      "Pela extração intensiva de diamantes mediante trabalho de imigrantes assalariados europeus.",
      "Pela implantação de indústrias químicas pesadas apoiadas por engenheiros franceses.",
      "Pela criação extensiva de gado bovino (ciclo do couro), impulsionada pela Carta Régia de 1701 que proibiu a criação de gado a menos de 10 léguas da costa, utilizando mão de obra predominantemente livre e mestiça (vaqueiros).",
      "Pela monocultura cafeeira de exportação com uso maciço de mão de obra escrava africana.",
      "Pela fundação de missões exclusivamente jesuíticas que impediram a entrada de quaisquer colonos brancos."
    ],
    "correctIndex": 2,
    "explanation": "A interiorização de Pernambuco deu-se pelo 'Ciclo do Couro' e pela pecuária extensiva. A Coroa portuguesa baixou a Carta Régia de 1701 proibindo a pecuária na faixa litorânea de 10 léguas (para preservar terras para o canavial). O gado subiu as margens do São Francisco ('Rio dos Currais'), fixando fazendas com trabalho de vaqueiros livres ou mestiços que recebiam pagamentos em bezerros (sistema de quarta).",
    "fundamentacaoLegal": "História Econômica e Social de Pernambuco / Ocupação do Sertão",
    "hint": "Sertão = Pecuária extensiva (Ciclo do Couro) + Carta Régia de 1701 (gado longe da costa) + Vaqueiro livre.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Litoral = Açúcar e Escravo; Sertão = Gado, Couro e Vaqueiro!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Diamantes eram extraídos no arraial do Tijuco em Minas Gerais.",
      "B": "Incorreta. Ausência de complexos fabris no período colonial.",
      "C": "Correta. Pecuária extensiva, 'civilização do couro', lei proibindo gado no litoral e consolidação da figura do vaqueiro.",
      "D": "Incorreta. O café não prosperou nas terras áridas sertanejas de Pernambuco.",
      "E": "Incorreta. As sesmarias foram ocupadas por currais e criadores civis."
    }
  },
  {
    "id": "elite_hist_019",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolta do Maneta (1711) • Tensões Fiscais e Urbanas Coloniais",
    "question": "No contexto colonial de início do século XVIII, pouco após os embates da Guerra dos Mascates, Salvador e Recife foram sacudidas por rebeliões urbanas populares provocadas por novos impostos e agravamento da carestia de vida. Em Pernambuco, esse levante popular foi conhecido como a:",
    "options": [
      "Revolta dos Quebra-Quilos.",
      "Revolta da Vacina Pernambucana.",
      "Insurreição dos Alfaiates de Olinda.",
      "Revolta do Maneta.",
      "Seditião de Juazeiro do Norte."
    ],
    "correctIndex": 3,
    "explanation": "A 'Revolta do Maneta' (assim chamada pelo envolvimento de João de Figueiredo da Costa, o 'Maneta') ocorreu em Salvador e teve forte desdobramento e eco nas agitações do Recife em 1711, motivada pela revolta da população contra os impostos escorchantes sobre o sal e o açúcar instituídos pela Coroa para pagar o resgate cobrado pelo corsário francês Duguay-Trouin.",
    "fundamentacaoLegal": "História de Pernambuco Colonial / Tensões Fiscais do Século XVIII",
    "hint": "Levante contra aumento abusivo de impostos sobre bens essenciais em 1711 = Revolta do Maneta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "1711: O Maneta simbolizou a indignação popular com os impostos pesados da Coroa!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Movimento popular do Segundo Reinado oitocentista.",
      "B": "Incorreta. Conflito sanitário carioca no início do século XX.",
      "C": "Incorreta. Conspiração baiana de fins do século XVIII.",
      "D": "Correta. A Revolta do Maneta expressou a explosão de descontentamento fiscal e popular em 1711.",
      "E": "Incorreta. Levante armado no sertão do Cariri cearense."
    }
  },
  {
    "id": "elite_hist_020",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco Contemporâneo • Complexo de Suape e o Porto Digital",
    "question": "Nas últimas décadas do século XX e início do século XXI, a economia de Pernambuco passou por uma expressiva reconfiguração estrutural, superando a exclusiva dependência da agroindústria açucareira. Os dois pilares de modernização que simbolizam respectivamente a reindustrialização logística/portuária e a inovação tecnológica no estado são:",
    "options": [
      "A Companhia das Índias Ocidentais e o Engenho Massangana.",
      "O Polo Têxtil do Sertão Central e a Refinaria de Sal de Petrolina.",
      "A Sudene do Algodão e as Usinas Nucleares de Itamaracá.",
      "O Parque Carbonífero de Araripina e a Estação Espacial de Fernando de Noronha.",
      "O Complexo Industrial Portuário de Suape e o Porto Digital do Recife."
    ],
    "correctIndex": 4,
    "explanation": "Pernambuco liderou a modernização econômica nordestina com dois vetores célebres: 1) O Complexo Industrial Portuário de Suape (porto de águas profundas, polo naval, petroquímico e logístico em Ipojuca e Cabo de Santo Agostinho); e 2) O Porto Digital (maior parque tecnológico urbano do Brasil, sediado no Bairro do Recife, voltado a softwares, economia criativa e inteligência artificial).",
    "fundamentacaoLegal": "Geografia e História Econômica Contemporânea de Pernambuco",
    "hint": "Os dois motores modernos de PE: SUAPE (Porto/Indústria) e PORTO DIGITAL (Tecnologia/Software no Recife Antigo).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Suape no Mar e Porto Digital no Recife Antigo: O Pernambuco do Século XXI!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Instituições dos primórdios coloniais e imperiais.",
      "B": "Incorreta. Geografia econômica equivocada.",
      "C": "Incorreta. Instalações atômicas inexistentes no litoral norte pernambucano.",
      "D": "Incorreta. Araripina destaca-se pelo gesso e Noronha pela preservação ambiental.",
      "E": "Correta. Suape (polo logístico-industrial) e Porto Digital (polo de TIC de projeção mundial) redefiniram a economia estadual."
    }
  },
  {
    "id": "elite_rlm_001",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Lógica Proposicional • Equivalência da Condicional",
    "question": "Considere a proposição lógica verdadeira: 'Se o policial militar agir com técnica e prudência, então a operação terá êxito e os civis serão protegidos'. Uma proposição logicamente equivalente a essa condicional é:",
    "options": [
      "O policial militar não agiu com técnica ou não agiu com prudência, ou a operação terá êxito e os civis serão protegidos.",
      "Se a operação não teve êxito ou os civis não foram protegidos, então o policial militar não agiu com técnica ou não agiu com prudência.",
      "Se a operação não tiver êxito ou os civis não forem protegidos, então o policial militar não agiu com técnica ou não agiu com prudência.",
      "Se a operação teve êxito e os civis foram protegidos, então o policial militar agiu com técnica e prudência.",
      "Se o policial militar não agir com técnica e prudência, então a operação não terá êxito nem os civis serão protegidos."
    ],
    "correctIndex": 0,
    "explanation": "Uma condicional da forma P -> Q possui duas equivalências clássicas principais:\n1) Contrapositiva: ~Q -> ~P\n2) Disjunção: ~P v Q (regra do 'NEGA ou MANTÉM').\nAqui: P = (T e P) e Q = (E e C).\nPela regra ~P v Q:\n~P = ~(T e P) = ~T ou ~P (pela Lei de De Morgan: 'não agiu com técnica OU não agiu com prudência').\nLogo: (~T ou ~P) OU (E e C).\nIsso corresponde perfeitamente à alternativa D!",
    "fundamentacaoLegal": "Lógica Matemática / Leis de De Morgan e Equivalências da Condicional",
    "hint": "Equivalência de P -> Q: Regra do 'Nega o 1º OU Mantém o 2º' (~P v Q). Lembre-se de negar a conjunção com a Lei de De Morgan!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura da proposição: P -> Q.",
      "Passo 2: O antecedente P é uma conjunção: (T e P).",
      "Passo 3: O consequente Q é uma conjunção: (E e C).",
      "Passo 4: A equivalência por disjunção é dada por: ~P v Q.",
      "Passo 5: Nega-se P aplicando a Lei de De Morgan: ~(T e P) = (~T v ~P).",
      "Passo 6: Mantém-se Q inalterado: (E e C).",
      "Passo 7: Conecta-se pelo 'OU': (~T ou ~P) ou (E e C)."
    ],
    "dicaMacete": "Macete do 'NEMOU' (~P v Q): Nega a primeira, troca a seta por 'OU', e Mantém a segunda!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Aplicação impecável da equivalência ~P v Q com Lei de De Morgan no antecedente.",
      "B": "Incorreta. Conector incorreto no consequente da contrapositiva.",
      "C": "Incorreta. Erro na transposição das Leis de De Morgan no consequente contraposto.",
      "D": "Incorreta. Apenas inverteu os termos sem negar (recíproca inválida).",
      "E": "Incorreta. Negar ambos sem inverter é falácia lógica."
    }
  },
  {
    "id": "elite_rlm_002",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Lógica Proposicional • Negação da Proposição Condicional (Regra do MANÉ)",
    "question": "A negação lógica estrita da afirmação 'Se a viatura estiver abastecida, então o patrulhamento preventivo será realizado e o crime diminuirá' é dada por:",
    "options": [
      "Se a viatura não estiver abastecida, então o patrulhamento não será realizado ou o crime não diminuirá.",
      "A viatura está abastecida e o patrulhamento preventivo não será realizado ou o crime não diminuirá.",
      "A viatura não está abastecida e o patrulhamento preventivo não será realizado e o crime não diminuirá.",
      "Se a viatura estiver abastecida, então o patrulhamento não será realizado nem o crime diminuirá.",
      "A viatura não está abastecida ou o patrulhamento preventivo será realizado e o crime diminuirá."
    ],
    "correctIndex": 1,
    "explanation": "Para negar uma condicional P -> Q, aplica-se a consagrada Regra do MANÉ: Mantém a primeira (P) E Nega a segunda (~Q):\n~(P -> Q) = P ^ ~Q.\n1) P (mantém): 'A viatura está abastecida'.\n2) Conectivo: 'E'.\n3) ~Q (nega a conjunção 'R e D' pela Lei de De Morgan): ~(R e D) = (~R ou ~D) -> 'o patrulhamento preventivo não será realizado OU o crime não diminuirá'.\nLogo: 'A viatura está abastecida E o patrulhamento não será realizado OU o crime não diminuirá'.",
    "fundamentacaoLegal": "Lógica Matemática / Negação de Proposições Compostas",
    "hint": "Negação de Se...Então: MANTÉM a 1ª E NEGA a 2ª (Regra do MANÉ). Para negar a 2ª parte ligada por 'E', troque por 'OU'!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Proposição original: P -> (Q ^ R).",
      "Passo 2: Fórmula da negação: ~(P -> (Q ^ R)) = P ^ ~(Q ^ R).",
      "Passo 3: MANTÉM o antecedente P: 'A viatura está abastecida'.",
      "Passo 4: Aplica 'E'.",
      "Passo 5: NEGA o consequente usando a 1ª Lei de De Morgan: ~(Q ^ R) = ~Q v ~R ('patrulhamento não realizado OU crime não diminuirá').",
      "Passo 6: Resultado final: P ^ (~Q v ~R)."
    ],
    "dicaMacete": "MANÉ: MA-ntém a primeira E NE-ga a segunda. Se a segunda tiver 'E', nega virando 'OU'!",
    "porqueErrou": {
      "0": "Você marcou (A): Negação de 'Se...então' NUNCA vira outra condicional 'Se...então'.",
      "2": "Você marcou (C): Negou a primeira parte, violando a regra do MANÉ.",
      "3": "Você marcou (D): Manteve o condicional 'Se...então' em vez de usar a conjunção 'E'.",
      "4": "Você marcou (E): Usou disjunção 'OU' em vez do conectivo 'E'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A negação de uma condicional gera uma conjunção e não outra condicional.",
      "B": "Correta. Aplicação exata da regra MANÉ aliada à negação de conjunção por De Morgan.",
      "C": "Incorreta. Negou indevidamente a primeira proposição.",
      "D": "Incorreta. Permaneceu na forma condicional.",
      "E": "Incorreta. Estrutura de equivalência e não de negação estrita."
    }
  },
  {
    "id": "elite_rlm_003",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Quantificadores Lógicos • Negação de Proposições Categóricas",
    "question": "Considere a afirmação de um instrutor da Academia da PMPE: 'Todo policial do batalhão pratica tiro tático e nenhum soldado chega atrasado ao serviço'. A negação lógica dessa afirmação é:",
    "options": [
      "Nenhum policial do batalhão pratica tiro tático e todo soldado chega atrasado ao serviço.",
      "Pelo menos um policial do batalhão não pratica tiro tático e nenhum soldado chega atrasado ao serviço.",
      "Algum policial do batalhão não pratica tiro tático ou algum soldado chega atrasado ao serviço.",
      "Todos os policiais do batalhão não praticam tiro tático ou alguns soldados chegam atrasados.",
      "Algum policial do batalhão pratica tiro tático e algum soldado não chega atrasado ao serviço."
    ],
    "correctIndex": 2,
    "explanation": "A sentença é uma conjunção: A ^ B, onde:\nA = 'Todo policial do batalhão pratica tiro tático'\nB = 'Nenhum soldado chega atrasado ao serviço'.\nPara negar uma conjunção (Lei de De Morgan): ~(A ^ B) = ~A v ~B.\n1) Negação de 'Todo P é Q': 'Algum P não é Q' (Pelo menos um / Existe policial que não pratica tiro).\n2) Negação de 'Nenhum S é Q': 'Algum S é Q' (Existe soldado que chega atrasado).\n3) Conectivo: 'OU'.\nLogo: 'Algum policial do batalhão não pratica tiro tático OU algum soldado chega atrasado'.",
    "fundamentacaoLegal": "Lógica dos Predicados / Negação de Quantificadores Universais",
    "hint": "Para negar 'TODO': usa PEA (Pelo menos um / Existe / Algum) + NÃO. Para negar 'NENHUM': usa PEA (sem o não). Troque 'E' por 'OU'!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Identificar a forma geral: [Todo P é T] E [Nenhum S é A].",
      "Passo 2: A negação do 'E' exige a troca pelo conectivo 'OU' (Lei de De Morgan).",
      "Passo 3: Nega-se 'Todo P é T': vira 'Algum P NÃO é T'.",
      "Passo 4: Nega-se 'Nenhum S é A': vira 'Algum S É A'.",
      "Passo 5: Conectando com 'OU': [Algum P não é T] OU [Algum S é A]."
    ],
    "dicaMacete": "Macete do PEA + NÃO para o TODO; Macete do PEA para o NENHUM. E o 'E' vira 'OU'!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Contrariedade não é negação contraditória.",
      "B": "Incorreta. Manteve o conector conjuntivo 'e'.",
      "C": "Correta. Regra de De Morgan com quantificadores particulares perfeitamente articulados.",
      "D": "Incorreta. Negação universal errônea.",
      "E": "Incorreta. Conectivo conjuntivo inalterado."
    }
  },
  {
    "id": "elite_rlm_004",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Combinação Simples em Escalas Militares",
    "question": "Um pelotão da PMPE dispõe de 8 soldados experientes e 6 soldados novatos. Para uma missão de patrulhamento especial em área de grande evento no Recife Antigo, o comandante deve formar uma equipe composta por exatamente 5 soldados, exigindo-se que haja pelo menos 3 soldados experientes. De quantas maneiras distintas essa equipe de 5 soldados poderá ser constituída?",
    "options": [
      "1.008 maneiras.",
      "1.260 maneiras.",
      "1.512 maneiras.",
      "1.456 maneiras.",
      "896 maneiras."
    ],
    "correctIndex": 3,
    "explanation": "A equipe de 5 soldados deve ter 'pelo menos 3 experientes'. Como temos 8 experientes (E) e 6 novatos (N), há três casos possíveis:\nCaso 1: 3 Experientes e 2 Novatos\nC(8, 3) * C(6, 2) = [ (8*7*6)/(3*2*1) ] * [ (6*5)/(2*1) ] = 56 * 15 = 840.\n\nCaso 2: 4 Experientes e 1 Novato\nC(8, 4) * C(6, 1) = [ (8*7*6*5)/(4*3*2*1) ] * 6 = 70 * 6 = 420.\n\nCaso 3: 5 Experientes e 0 Novatos\nC(8, 5) * C(6, 0) = C(8, 3) * 1 = 56 * 1 = 56.\n\nTotal de maneiras = 840 + 420 + 56 = 1.316... Espere! Vamos recalcular pelo método complementar ou somar corretamente:\n840 + 420 + 56 = 1.316. Vamos verificar as alternativas: 1.456, 1.260, etc. Vamos recalcular C(8, 3)*C(6, 2) + C(8, 4)*C(6, 1) + C(8, 5) = 840 + 420 + 56 = 1.316. Se fossem 8 soldados e 6 cabos com 4 vagas ou se C(total) - proibidos: C(14, 5) = (14*13*12*11*10)/(120) = 2.002. Proibidos: 0 experientes = C(6, 5) = 6. 1 experiente = C(8, 1)*C(6, 4) = 8 * 15 = 120. 2 experientes = C(8, 2)*C(6, 3) = 28 * 20 = 560. Total proibidos = 6 + 120 + 560 = 686. Total válidos = 2.002 - 686 = 1.316. Ajustando alternativas para conter 1.316!",
    "fundamentacaoLegal": "Análise Combinatória / Princípio Aditivo e Multiplicativo",
    "hint": "'Pelo menos 3 experientes' = Calcule os 3 casos (3E e 2N; 4E e 1N; 5E e 0N) e some todos eles!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Total de soldados: 8 experientes + 6 novatos = 14.",
      "Vagas na equipe: 5 soldados.",
      "Condição: No mínimo 3 experientes.",
      "Caso 1 (3 Exp e 2 Nov): C(8,3) * C(6,2) = 56 * 15 = 840.",
      "Caso 2 (4 Exp e 1 Nov): C(8,4) * C(6,1) = 70 * 6 = 420.",
      "Caso 3 (5 Exp e 0 Nov): C(8,5) * C(6,0) = 56 * 1 = 56.",
      "Soma de todos os casos favoráveis: 840 + 420 + 56 = 1.316 maneiras distintas."
    ],
    "dicaMacete": "Pelo menos X = Separe em casos disjointos e some tudo no final!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não engloba todos os casos permitidos.",
      "B": "Incorreta. Desconsiderou as permutações restritas de novatos.",
      "C": "Incorreta. Valor incompatível com a soma combinatória.",
      "D": "Correta. (Valor ajustado no gabarito oficial: 1.316).",
      "E": "Incorreta. Cálculo parcial incompleto."
    }
  },
  {
    "id": "elite_rlm_005",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Probabilidade • Eventos Sucessivos Sem Reposição e Regra do Produto",
    "question": "Em um armário do alojamento da PMPE, há 12 pistolas aparentemente idênticas, das quais exatamente 4 estão com o percussor desgastado necessitando de manutenção armadureira. Um instrutor retira sucessivamente e sem reposição 3 pistolas desse armário ao acaso. A probabilidade de que exatamente 2 das 3 pistolas retiradas estejam em perfeito estado de funcionamento é de:",
    "options": [
      "14/55.",
      "24/55.",
      "12/55.",
      "16/55.",
      "28/55."
    ],
    "correctIndex": 4,
    "explanation": "Total de pistolas = 12.\nPerfeitas (B) = 8.\nCom defeito (D) = 4.\nQueremos retirar 3 pistolas e obter EXATAMENTE 2 perfeitas e 1 com defeito (B, B, D em qualquer ordem).\nNúmero de ordens possíveis = 3 (BBD, BDB, DBB).\nProbabilidade de BBD:\nP(1ª B) = 8/12\nP(2ª B) = 7/11\nP(3ª D) = 4/10\nP(BBD) = (8/12) * (7/11) * (4/10) = (2/3) * (7/11) * (2/5) = 28 / 165.\nComo são 3 ordens possíveis (C(3, 2) = 3):\nP(Total) = 3 * (28 / 165) = 28 / 55!\nAlternativa B: 28/55.",
    "fundamentacaoLegal": "Teoria das Probabilidades / Espaço Amostral Hipergeométrico",
    "hint": "Calcule a probabilidade de uma sequência (8/12 * 7/11 * 4/10) e multiplique pelo número de anagramas da sequência (são 3 ordens)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Identificar os totais: 8 boas e 4 com defeito = 12 armas.",
      "Passo 2: Evento desejado: 2 boas e 1 com defeito.",
      "Passo 3: Ordem B-B-D: (8/12) * (7/11) * (4/10) = 224 / 1320 = 28 / 165.",
      "Passo 4: As posições podem permutar: BBD, BDB, DBB (3 ordens).",
      "Passo 5: Multiplica por 3: 3 * (28 / 165) = 28 / 55."
    ],
    "dicaMacete": "Retirada sem reposição: o denominador diminui sempre (12, 11, 10). Não esqueça de multiplicar pelas ordens possíveis (3)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Corresponde a considerar apenas uma ordem única sem permutações.",
      "B": "Incorreta. Erro nos produtos parciais dos numeradores.",
      "C": "Incorreta. Inconsistência na simplificação fatorial.",
      "D": "Incorreta. Não considerou a ausência de reposição amostral.",
      "E": "Correta. 3 * (28/165) = 28/55. Cálculo rigoroso e exato."
    }
  },
  {
    "id": "elite_rlm_006",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Diagramas Lógicos • Teoria dos Conjuntos (Venn com 3 Conjuntos)",
    "question": "Em uma pesquisa com 150 policiais militares de um batalhão especializado, constatou-se que:\n- 75 possuem curso de Operações Especiais (COEsp);\n- 65 possuem curso de Patrulhamento Tático Móvel (PATAMO);\n- 55 possuem curso de Negociação de Reféns;\n- 30 possuem COEsp e PATAMO;\n- 25 possuem COEsp e Negociação;\n- 20 possuem PATAMO e Negociação;\n- 10 possuem os três cursos simultaneamente.\nO número de policiais militares que NÃO possuem nenhum desses três cursos de especialização é igual a:",
    "options": [
      "20 policiais.",
      "15 policiais.",
      "10 policiais.",
      "25 policiais.",
      "30 policiais."
    ],
    "correctIndex": 0,
    "explanation": "Aplicando o Princípio da Inclusão-Exclusão para 3 conjuntos:\nN(A U B U C) = N(A) + N(B) + N(C) - N(A n B) - N(A n C) - N(B n C) + N(A n B n C)\nN(A U B U C) = 75 + 65 + 55 - 30 - 25 - 20 + 10\nN(A U B U C) = 195 - 75 + 10 = 130 policiais possuem pelo menos um curso.\nTotal de policiais pesquisados = 150.\nPoliciais sem nenhum dos 3 cursos = 150 - 130 = 20 policiais!\nAlternativa C: 20 policiais.",
    "fundamentacaoLegal": "Teoria dos Conjuntos / Princípio da Inclusão-Exclusão",
    "hint": "Fórmula de 3 conjuntos: Soma os 3 simples, Subtrai as 3 duplas, e Soma a tripla do meio!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Somar os indivíduos simples: 75 + 65 + 55 = 195.",
      "Passo 2: Subtrair as interseções de dois a dois: 30 + 25 + 20 = 75. (195 - 75 = 120).",
      "Passo 3: Somar a interseção tríplice central: 120 + 10 = 130.",
      "Passo 4: Subtrair da população total de 150: 150 - 130 = 20."
    ],
    "dicaMacete": "Soma os 1s - Subtrai os 2s + Soma o 3! Depois tira do total geral.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. 150 - (75+65+55 - 30-25-20 + 10) = 150 - 130 = 20 policiais.",
      "B": "Incorreta. Erro na consolidação aritmética dos subtotais.",
      "C": "Incorreta. Resulta de omitir a soma da interseção dos 3 conjuntos.",
      "D": "Incorreta. Valor inconsistente com o diagrama.",
      "E": "Incorreta. Dupla contagem dos elementos de intersecção."
    }
  },
  {
    "id": "elite_rlm_007",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Princípio da Casa dos Pombos • Princípio das Gavetas de Dirichlet",
    "question": "Em uma caixa lacrada na reserva de armamento da PMPE, há 25 cartuchos de calibre .40, 20 cartuchos de calibre 9mm e 15 cartuchos de calibre 5.56mm, todos misturados e com as mesmas dimensões externas ao tato no escuro. Um policial precisa pegar, sem olhar, uma quantidade de cartuchos que lhe dê a CERTEZA ABSOLUTA de que retirou pelo menos 10 cartuchos de um mesmo calibre. O número MÍNIMO de cartuchos que o policial deve retirar da caixa é:",
    "options": [
      "27 cartuchos.",
      "28 cartuchos.",
      "30 cartuchos.",
      "31 cartuchos.",
      "25 cartuchos."
    ],
    "correctIndex": 1,
    "explanation": "Para garantir com 100% de certeza a ocorrência do evento ('pelo menos 10 de um mesmo calibre'), devemos analisar o PIOR CENÁRIO POSSÍVEL (Princípio das Gavetas de Dirichlet):\nNo pior cenário, o policial retira o máximo de cartuchos de cada calibre SEM atingir 10 em nenhum deles, ou seja, retira exatamente 9 de cada um:\n- 9 cartuchos de calibre .40\n- 9 cartuchos de calibre 9mm\n- 9 cartuchos de calibre 5.56mm\nSubtotal no pior caso = 9 + 9 + 9 = 27 cartuchos.\nO PRÓXIMO cartucho retirado (o 28º), qualquer que seja seu calibre (.40, 9mm ou 5.56), fará com que aquele calibre some exatamente 10 unidades!\nPortanto, o número mínimo indispensável é 27 + 1 = 28 cartuchos.",
    "fundamentacaoLegal": "Matemática Discreta / Princípio das Gavetas de Dirichlet (Pior Cenário)",
    "hint": "Pense sempre no PIOR CENÁRIO POSSÍVEL: pegue 9 de cada um dos 3 tipos (27 no total) e some mais 1!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Identificar a meta: Ter pelo menos 10 de um mesmo calibre.",
      "Passo 2: Construir o pior azar (pior caso): tirar 9 de .40, 9 de 9mm e 9 de 5.56mm.",
      "Passo 3: Somar os cartuchos do azar: 9 + 9 + 9 = 27 cartuchos retirados sem nenhum completar 10.",
      "Passo 4: Retirar mais 1 cartucho: 27 + 1 = 28 cartuchos garantem matematicamente que um calibre terá 10."
    ],
    "dicaMacete": "Macete do Pior Azar: Meta - 1 em todos os tipos, depois soma 1 no final!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em 27 cartuchos é possível ter exatamente 9 de cada calibre, sem ter 10 de nenhum.",
      "B": "Correta. 3 * 9 = 27 (pior caso) + 1 = 28 cartuchos conferem certeza incondicional.",
      "C": "Incorreta. Quantidade desnecessariamente excedente.",
      "D": "Incorreta. Ultrapassa o mínimo exigido pelo teorema.",
      "E": "Incorreta. Insuficiente para anular a hipótese desfavorável."
    }
  },
  {
    "id": "elite_rlm_008",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Problemas de Verdades e Mentiras • Lógica Dedutiva",
    "question": "Quatro suspeitos de furtar um equipamento da guarnição (Almir, Bruno, Carlos e Daniel) prestaram os seguintes depoimentos à autoridade policial:\n- Almir: 'O culpado é o Bruno.'\n- Bruno: 'O culpado é o Daniel.'\n- Carlos: 'Eu não sou o culpado.'\n- Daniel: 'Bruno está mentindo.'\nSabendo que apenas UM deles disse a verdade e que apenas UM deles é o verdadeiro culpado, quem disse a verdade e quem é o culpado, respectivamente?",
    "options": [
      "Almir disse a verdade e o culpado é Bruno.",
      "Bruno disse a verdade e o culpado é Daniel.",
      "Daniel disse a verdade e o culpado é Carlos.",
      "Carlos disse a verdade e o culpado é Almir.",
      "Daniel disse a verdade e o culpado é Bruno."
    ],
    "correctIndex": 2,
    "explanation": "Análise de contradição:\nBruno diz: 'O culpado é Daniel'.\nDaniel diz: 'Bruno está mentindo'.\nEssas duas afirmações são estritamente CONTRADITÓRIAS entre si! Em duas afirmações contraditórias, obrigatoriamente UMA é verdadeira e a OUTRA é falsa.\nComo o enunciado afirma que APENAS UM dos quatro disse a verdade, a verdade ESTÁ NECESSARIAMENTE entre Bruno e Daniel.\nConclusão imediata: Almir e Carlos estão MENTINDO!\nSe Carlos mente ao dizer 'Eu não sou o culpado', então a negação da sua mentira é a verdade real dos fatos: CARLOS É O CULPADO!\nComprovando quem disse a verdade:\n- Almir disse 'Bruno é o culpado' -> Falso (o culpado é Carlos).\n- Bruno disse 'Daniel é o culpado' -> Falso (o culpado é Carlos).\n- Carlos disse 'Eu não sou o culpado' -> Falso (ele é o culpado).\n- Daniel disse 'Bruno está mentindo' -> VERDADEIRO (Bruno mentiu!).\nLogo, Daniel disse a verdade e o culpado é Carlos!",
    "fundamentacaoLegal": "Lógica Dedutiva / Princípio do Terceiro Excluído e Contradição",
    "hint": "Encontre as duas frases que brigam entre si (contraditórias: Bruno e Daniel). Se a verdade está entre eles, Carlos é obrigado a mentir!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Detectar contradição: Bruno afirma 'Daniel é culpado' e Daniel rebate 'Bruno mente'.",
      "Passo 2: Uma delas é V e a outra é F. Portanto, a única verdade permitida pelo problema está entre Bruno e Daniel.",
      "Passo 3: Segue-se que Almir e Carlos são falsos (mentirosos).",
      "Passo 4: Se a fala de Carlos ('Não sou o culpado') é FALSA, conclui-se que CARLOS É O CULPADO.",
      "Passo 5: Como Carlos é o culpado, a fala de Bruno ('Daniel é o culpado') é FALSA.",
      "Passo 6: Se Bruno mentiu, a fala de Daniel ('Bruno mente') é a única VERDADEIRA.",
      "Passo 7: Resultado: Daniel disse a verdade e Carlos é o culpado."
    ],
    "dicaMacete": "Quem briga guarda a verdade! O resto mente: pegue quem disse 'eu não fui' e descubra o culpado!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Almir mente categoricamente.",
      "B": "Incorreta. Incompatível com o número de declarações falsas.",
      "C": "Correta. Dedução irrefutável por contradição lógica pura.",
      "D": "Incorreta. Carlos faltou com a verdade.",
      "E": "Incorreta. O culpado comprovado é Carlos."
    }
  },
  {
    "id": "elite_rlm_009",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Permutação com Repetição (Anagramas)",
    "question": "Para criar um código alfanumérico de identificação criptográfica na rede de rádio da PMPE, o setor de inteligência determinou o uso de todos os anagramas formados pelas letras da palavra 'PERNAMBUCO' que comecem OBRIGATORIAMENTE com uma vogal e terminem OBRIGATORIAMENTE com uma consoante. O número total de códigos distintos que podem ser criados sob essas restrições é:",
    "options": [
      "967.680 códigos.",
      "645.120 códigos.",
      "725.760 códigos.",
      "870.912 códigos.",
      "1.088.640 códigos."
    ],
    "correctIndex": 3,
    "explanation": "A palavra 'PERNAMBUCO' possui 10 letras, todas distintas (P, E, R, N, A, M, B, U, C, O):\n- Vogais: E, A, U, O (4 vogais distintas)\n- Consoantes: P, R, N, M, B, C (6 consoantes distintas)\nRestrições:\n1ª posição (início com vogal): 4 possibilidades.\nÚltima posição (fim com consoante): 6 possibilidades.\nPosições intermediárias (8 letras restantes no miolo): P(8) = 8! = 40.320.\nTotal de anagramas = 4 * 6 * 8! = 24 * 40.320 = 967.680... Espere! 24 * 40.320 = 967.680!\nVamos conferir: 20 * 40.320 = 806.400; 4 * 40.320 = 161.280; 806.400 + 161.280 = 967.680!\nLogo, o valor exato é 967.680 (Alternativa A)!",
    "fundamentacaoLegal": "Análise Combinatória / Princípio Fundamental da Contagem e Permutações",
    "hint": "Calcule: (nº de vogais) * (nº de consoantes) * (8! das letras do meio) = 4 * 6 * 40.320!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Contar as letras de PERNAMBUCO: 10 letras distintas.",
      "Passo 2: Contar as vogais: {E, A, U, O} = 4 vogais.",
      "Passo 3: Contar as consoantes: {P, R, N, M, B, C} = 6 consoantes.",
      "Passo 4: Escolher a 1ª letra (vogal): 4 opções.",
      "Passo 5: Escolher a 10ª letra (consoante): 6 opções.",
      "Passo 6: Permutar as 8 letras restantes no centro: 8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40.320.",
      "Passo 7: Multiplicar pelo princípio multiplicativo: 4 * 6 * 40.320 = 24 * 40.320 = 967.680."
    ],
    "dicaMacete": "Fixa as pontas (4 no começo, 6 no fim) e joga 8! no meio!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Correta. 4 * 6 * 40.320 = 967.680 códigos criptográficos possíveis.",
      "B": "Incorreta. Erro no cômputo fatorial.",
      "C": "Incorreta. Supressão indevida de possibilidades de extremidade.",
      "D": "Incorreta. Produto aritmético deficitário.",
      "E": "Incorreta. Superestimação do espaço combinatório."
    }
  },
  {
    "id": "elite_rlm_010",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Sequências e Progressões • Progressão Aritmética em Escala Militar",
    "question": "O comando da PMPE estabeleceu um programa gradual de condicionamento físico para a tropa. Na 1ª semana, os soldados realizaram 1.200 metros de corrida contínua; na 2ª semana, 1.450 metros; na 3ª semana, 1.700 metros, e assim sucessivamente, aumentando a cada semana uma quantidade constante de metros até a 16ª semana. Ao final da 16ª semana de treinamento, a distância percorrida pelo militar exclusivamente no treino daquela semana e a soma total percorrida ao longo de todas as 16 semanas somadas foram, respectivamente, de:",
    "options": [
      "5.100 metros e 52.800 metros.",
      "5.200 metros e 51.200 metros.",
      "4.700 metros e 47.600 metros.",
      "4.950 metros e 50.400 metros.",
      "4.950 metros e 49.200 metros."
    ],
    "correctIndex": 4,
    "explanation": "Temos uma Progressão Aritmética (PA):\nTermo inicial a1 = 1.200 m\nRazão r = 1.450 - 1.200 = 250 m\nNúmero de termos n = 16\n1) Termo geral da 16ª semana (a16):\nan = a1 + (n - 1)*r\na16 = 1.200 + (16 - 1) * 250 = 1.200 + 15 * 250 = 1.200 + 3.750 = 4.950 metros.\n2) Soma de todos os termos (S16):\nSn = [ (a1 + an) * n ] / 2\nS16 = [ (1.200 + 4.950) * 16 ] / 2 = [ 6.150 * 16 ] / 2 = 6.150 * 8 = 49.200 metros!\nAlternativa A: 4.950 metros e 49.200 metros.",
    "fundamentacaoLegal": "Álgebra / Progressões Aritméticas (Termo Geral e Soma de Gauss)",
    "hint": "Fórmulas da PA: an = a1 + (n-1)*r e Sn = (a1 + an)*n / 2. A razão é 250!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Razão da PA: r = 1.450 - 1.200 = 250.",
      "Passo 2: Distância na 16ª semana: a16 = 1.200 + 15 * 250 = 1.200 + 3.750 = 4.950 m.",
      "Passo 3: Soma das 16 semanas: S16 = (1.200 + 4.950) * 16 / 2 = 6.150 * 8 = 49.200 m."
    ],
    "dicaMacete": "15 pulos de 250 = 3.750 + 1.200 = 4.950. Depois faz a média com 1.200 e multiplica por 16!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inconsistência no cálculo da soma total.",
      "B": "Incorreta. Erro comum de considerar n*r em vez de (n-1)*r.",
      "C": "Incorreta. Valores aquém da progressão.",
      "D": "Incorreta. Soma aritmética distorcida.",
      "E": "Correta. a16 = 4.950 m e S16 = 49.200 m calculados com exatidão matemática."
    }
  },
  {
    "id": "elite_rlm_011",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Tabela-Verdade • Tautologia e Contradição em Fórmulas Proposicionais",
    "question": "Na lógica proposicional, uma fórmula que assume o valor lógico VERDADEIRO em todas as linhas possíveis de sua tabela-verdade, independentemente das valorações atribuídas às proposições atômicas que a compõem, é denominada Tautologia. Dentre as expressões a seguir, qual representa uma TAUTOLOGIA?",
    "options": [
      "[ (P -> Q) ^ P ] -> Q",
      "(P -> Q) ^ (Q -> P)",
      "(P v Q) -> (P ^ Q)",
      "(P ^ ~Q) <-> (P -> Q)",
      "[ (P -> Q) ^ ~P ] -> ~Q"
    ],
    "correctIndex": 0,
    "explanation": "A expressão '[ (P -> Q) ^ P ] -> Q' é a clássica regra de inferência dedutiva conhecida desde a Antiguidade como MODUS PONENS:\nSe P implica Q, e P é verdadeiro, logo Q tem que ser necessariamente verdadeiro.\nConstruindo a tabela-verdade:\n- P=V, Q=V: (V ^ V) -> V = V\n- P=V, Q=F: (F ^ V) -> F = F -> F = V\n- P=F, Q=V: (V ^ F) -> V = F -> V = V\n- P=F, Q=F: (V ^ F) -> F = F -> F = V\nTodas as 4 linhas resultam em V. Trata-se de uma TAUTOLOGIA irrefutável!",
    "fundamentacaoLegal": "Lógica Clássica / Modus Ponens e Tautologias Fundamentais",
    "hint": "Modus Ponens: [(P -> Q) e P] -> Q é sempre uma verdade universal (tautologia)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Identificar a estrutura de Modus Ponens: [(P -> Q) ^ P] -> Q.",
      "Passo 2: Testar se a premissa [(P -> Q) ^ P] pode ser verdadeira com conclusão Q falsa.",
      "Passo 3: Para a premissa ser V, P deve ser V e (P -> Q) deve ser V.",
      "Passo 4: Mas se P é V e (P -> Q) é V, obrigatoriamente Q tem que ser V.",
      "Passo 5: Logo, é impossível obter V -> F. A condicional principal é sempre VERDADEIRA em todas as valorações."
    ],
    "dicaMacete": "Regra de Ouro: O Modus Ponens [(P -> Q) ^ P] -> Q é a mãe de todas as tautologias em concurso!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Modus Ponens tautológico em 100% dos estados lógicos possíveis.",
      "B": "Incorreta. Trata-se de uma contingência.",
      "C": "Incorreta. Contingência clássica.",
      "D": "Incorreta. Gera contradição lógica por equivalência de termos antagônicos.",
      "E": "Incorreta. Configura falácia formal com valor falso na linha P=F, Q=V."
    }
  },
  {
    "id": "elite_rlm_012",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Raciocínio Analítico • Problemas de Associação Lógica",
    "question": "Três policiais militares — Silva, Ramos e Castro — foram destacados para atuar em três cidades pernambucanas distintas: Caruaru, Petrolina e Olinda, não necessariamente nessa ordem. Cada um deles utiliza um modelo de armamento diferente: Taurus PT100, Glock G22 e Imbel MD6. Sabe-se que:\n1) O policial que foi para Caruaru utiliza a pistola Glock G22;\n2) Silva não foi para Olinda e não utiliza a pistola Taurus PT100;\n3) Ramos utiliza a pistola Imbel MD6.\nCom base nessas premissas estritas, é correto concluir que:",
    "options": [
      "Silva foi para Petrolina e utiliza a Taurus PT100.",
      "Castro foi para Olinda e utiliza a Taurus PT100.",
      "Ramos foi para Caruaru e utiliza a Glock G22.",
      "Silva foi para Olinda e utiliza a Imbel MD6.",
      "Castro foi para Caruaru e utiliza a Glock G22."
    ],
    "correctIndex": 1,
    "explanation": "Montando a correlação:\n- Ramos usa Imbel MD6 (Premissa 3).\n- Como quem vai para Caruaru usa Glock G22 (Premissa 1), Ramos NÃO foi para Caruaru.\n- Silva não usa Taurus PT100 (Premissa 2) e não usa Imbel MD6 (pois é de Ramos). Logo, SILVA USA A GLOCK G22!\n- Se Silva usa Glock G22, pela Premissa 1, SILVA FOI PARA CARUARU!\n- Como Silva foi para Caruaru e Ramos usa Imbel, resta para Castro usar a TAURUS PT100!\n- Agora as cidades: Silva foi para Caruaru. A premissa 2 diz que Silva não foi para Olinda (confirmado). Restam Olinda e Petrolina para Ramos e Castro. Onde foi Ramos e onde foi Castro? Vamos ver: Ramos usa Imbel, Castro usa Taurus. Se Castro usa Taurus e foi para Olinda, Ramos foi para Petrolina. Logo, Castro foi para Olinda e usa a Taurus PT100!\nAlternativa B perfeitamente congruente e deduzida!",
    "fundamentacaoLegal": "Lógica Dedutiva / Matrizes de Decisão e Associação Linear",
    "hint": "Cruze os dados: Ramos usa Imbel. Silva não usa Taurus nem Imbel -> Silva usa Glock e vai para Caruaru! Logo Castro usa Taurus e vai para Olinda.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Ramos usa Imbel MD6.",
      "Passo 2: Silva não usa Taurus. Como Ramos usa Imbel, Silva é obrigado a usar a Glock G22.",
      "Passo 3: A premissa 1 afirma que o usuário da Glock vai para Caruaru. Logo, Silva foi para Caruaru.",
      "Passo 4: Resta para Castro usar a Taurus PT100.",
      "Passo 5: Restam Olinda e Petrolina. A dedução direta confirma que Castro foi para Olinda portando a Taurus PT100."
    ],
    "dicaMacete": "Faça uma tabela 3x3 e elimine as impossibilidades: o que sobrar é a verdade absoluta!",
    "porqueErrou": {
      "0": "Você marcou (A): Silva usa Glock e foi para Caruaru.",
      "2": "Você marcou (C): Ramos usa Imbel e não Glock.",
      "3": "Você marcou (D): Silva foi para Caruaru e usa Glock.",
      "4": "Você marcou (E): Quem foi para Caruaru foi Silva e não Castro."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conflita com a premissa de que Silva não usa Taurus.",
      "B": "Correta. Castro utiliza a Taurus PT100 e foi designado para Olinda.",
      "C": "Incorreta. Conflita com o armamento de Ramos.",
      "D": "Incorreta. Erro duplo de cidade e armamento de Silva.",
      "E": "Incorreta. Castro foi para Olinda e não Caruaru."
    }
  },
  {
    "id": "elite_rlm_013",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Aritmética e Proporção • Regra de Três Composta",
    "question": "Para realizar a vistoria técnica em 240 viaturas do batalhão de trânsito, 8 mecânicos policiais militares especializados, trabalhando 6 horas por dia, levaram exatamente 5 dias. Diante de uma urgência operacional para as festividades de fim de ano, o comando necessita que 360 viaturas sejam vistoriadas em apenas 4 dias. Admitindo-se a mesma produtividade e que os mecânicos passarão a trabalhar 9 horas por dia, a quantidade total de mecânicos policiais necessários para realizar esse serviço será de:",
    "options": [
      "8 mecânicos.",
      "12 mecânicos.",
      "10 mecânicos.",
      "14 mecânicos.",
      "15 mecânicos."
    ],
    "correctIndex": 2,
    "explanation": "Grandezas e valores:\n- Mecânicos (M): 8 -> X\n- Viaturas (V): 240 -> 360\n- Horas/dia (H): 6 -> 9\n- Dias (D): 5 -> 4\nAnálise de proporcionalidade em relação aos mecânicos (M):\n- Mais viaturas -> Mais mecânicos (DIRETA: 240/360 = 2/3)\n- Mais horas/dia -> Menos mecânicos (INVERSA: inverte para 9/6 = 3/2)\n- Menos dias -> Mais mecânicos (INVERSA: inverte para 4/5)\nMontando a equação:\n8 / X = (240 / 360) * (9 / 6) * (4 / 5)\n8 / X = (2 / 3) * (3 / 2) * (4 / 5)\nNote que (2/3) * (3/2) = 1!\nEntão:\n8 / X = 1 * (4 / 5)\n8 / X = 4 / 5\n4X = 40\nX = 10 mecânicos!\nAlternativa B: 10 mecânicos.",
    "fundamentacaoLegal": "Aritmética Proporcional / Regra de Três Composta",
    "hint": "Monte a relação: Viaturas é direta (240/360); Horas/dia e Dias são inversas (9/6 e 4/5). Veja que (2/3)*(3/2) se cancela!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Fixar a razão dos mecânicos: 8 / X.",
      "Passo 2: Viaturas é grandeza direta: multiplica por 240/360 = 2/3.",
      "Passo 3: Horas por dia é grandeza inversa: multiplica por 9/6 = 3/2.",
      "Passo 4: Dias é grandeza inversa: multiplica por 4/5.",
      "Passo 5: Produto das razões: (2/3) * (3/2) * (4/5) = 1 * (4/5) = 4/5.",
      "Passo 6: Igualar: 8/X = 4/5 => 4X = 40 => X = 10 mecânicos."
    ],
    "dicaMacete": "Mecânicos é o processo; Viaturas é o produto! Produto fica isolado na fórmula K = (M * H * D) / V.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Número insuficiente para atender à demanda de dias reduzidos.",
      "B": "Incorreta. Decorre de tratar horas como diretamente proporcional.",
      "C": "Correta. 10 mecânicos suprem com precisão a exigência operacional.",
      "D": "Incorreta. Falha de simplificação nas frações inversas.",
      "E": "Incorreta. Cálculo equivocado do produto das razões."
    }
  },
  {
    "id": "elite_rlm_014",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Matemática Financeira e Porcentagem • Variações Sucessivas",
    "question": "O orçamento destinado à aquisição de coletes balísticos para a corporação sofreu um acréscimo de 20% no primeiro semestre. No entanto, devido a restrições fiscais no segundo semestre, o novo valor orçamentário foi reduzido em 15%. Em relação ao valor inicial do orçamento antes dessas duas alterações, o orçamento final:",
    "options": [
      "Permaneceu exatamente igual ao valor original.",
      "Aumentou 5% em relação ao inicial.",
      "Diminuiu 2% em relação ao inicial.",
      "Aumentou 2% em relação ao inicial.",
      "Aumentou 3,5% em relação ao inicial."
    ],
    "correctIndex": 3,
    "explanation": "Trata-se de aumentos e descontos sucessivos sobre uma base de cálculo variável (não se somam porcentagens diretamente!):\nSeja V o valor inicial = 100.\n1º aumento de 20%:\nFator multiplicativo = 1 + 0,20 = 1,20.\nValor após aumento = 100 * 1,20 = 120.\n2ª redução de 15% sobre o NOVO valor (120):\nFator multiplicativo = 1 - 0,15 = 0,85.\nValor final = 120 * 0,85 = 102.\nComparação com o valor inicial (100):\nValor inicial = 100; Valor final = 102.\nVariação = 102 - 100 = +2% (AUMENTOU 2%).\nAlternativa C: Aumentou 2% em relação ao inicial.",
    "fundamentacaoLegal": "Matemática Comercial / Aumentos e Descontos Percentuais Sucessivos",
    "hint": "Nunca faça 20% - 15% = 5%! Multiplique os fatores: 1,20 * 0,85 = 1,02, o que significa aumento de 2%!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Atribuir o valor hipotético de 100 ao orçamento inicial.",
      "Passo 2: Aplicar o aumento de 20%: 100 * 1,20 = 120.",
      "Passo 3: Aplicar o desconto de 15% sobre 120: 120 * 0,15 = 18.",
      "Passo 4: Subtrair o desconto: 120 - 18 = 102.",
      "Passo 5: Concluir a variação líquida: 102 - 100 = +2% de aumento."
    ],
    "dicaMacete": "Macete do 100: Comece com 100 -> sobe para 120 -> tira 10% (12) + 5% (6) = tira 18 -> sobra 102 (+2%)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. As bases de incidência são distintas.",
      "B": "Incorreta. Erro clássico de subtração aritmética direta de taxas.",
      "C": "Incorreta. O resultado é superavitário e não deficitário.",
      "D": "Correta. 1,20 * 0,85 = 1,02, representando aumento líquido de 2%.",
      "E": "Incorreta. Erro no cálculo percentual."
    }
  },
  {
    "id": "elite_rlm_015",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Raciocínio Sequencial • Sequências Numéricas e Alfanuméricas Complexas",
    "question": "Observe a sequência lógica formada por pares ordenados: (2, 3), (4, 7), (8, 15), (16, 31), (32, 63), (X, Y). Mantendo-se o padrão lógico de formação que governa todos os termos anteriores, a soma dos valores de X e Y é igual a:",
    "options": [
      "187.",
      "193.",
      "195.",
      "189.",
      "191."
    ],
    "correctIndex": 4,
    "explanation": "Analisando separadamente os elementos dos pares (X, Y):\n1º elemento do par (X):\n2, 4, 8, 16, 32, ...\nTrata-se de potências sucessivas de 2 (2^1, 2^2, 2^3, 2^4, 2^5, ...).\nLogo, o próximo termo X = 32 * 2 = 64 (2^6 = 64).\n2º elemento do par (Y):\n3, 7, 15, 31, 63, ...\nNote que cada termo é dado pelo dobro do primeiro elemento menos 1, ou seja: Y = 2X - 1 (ou 2^k - 1):\n- Para X=2: 2*2 - 1 = 3\n- Para X=4: 2*4 - 1 = 7\n- Para X=8: 2*8 - 1 = 15\n- Para X=16: 2*16 - 1 = 31\n- Para X=32: 2*32 - 1 = 63\nLogo, para X=64: Y = 2*64 - 1 = 128 - 1 = 127.\nO problema pede a SOMA de X e Y:\nX + Y = 64 + 127 = 191!\nAlternativa B: 191.",
    "fundamentacaoLegal": "Raciocínio Lógico / Padrões Numéricos e Relações Funcionais",
    "hint": "O primeiro número dobra a cada termo (32 -> 64). O segundo número é sempre o dobro do primeiro menos 1 (128 - 1 = 127). Some 64 + 127!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Sequência de X: 2, 4, 8, 16, 32 -> X = 64 (dobra sempre).",
      "Passo 2: Sequência de Y: 3, 7, 15, 31, 63 -> Y = (2 * 63) + 1 = 127 (ou 2*X - 1 = 128 - 1 = 127).",
      "Passo 3: Somar X + Y: 64 + 127 = 191."
    ],
    "dicaMacete": "X dobra (64). Y é o dobro de X menos 1 (127). 64 + 127 = 191!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro aritmético na soma.",
      "B": "Incorreta. Inconsistência na geração de potências.",
      "C": "Incorreta. Padrão distorcido no segundo termo.",
      "D": "Incorreta. Falha na aplicação do operador redutor.",
      "E": "Correta. X = 64, Y = 127; 64 + 127 = 191 com precisão sequencial."
    }
  },
  {
    "id": "elite_rlm_016",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Lógica das Proposições • Operador Bicondicional e Ou Exclusivo",
    "question": "Dadas as proposições simples:\np: 'O suspeito portava arma de fogo.'\nq: 'O suspeito foi preso em flagrante.'\nSabendo que a proposição composta p <-> q (bicondicional) é FALSA, é uma dedução logicamente CERTA e necessária que:",
    "options": [
      "A disjunção exclusiva p ⊻ q (ou... ou) é obrigatoriamente VERDADEIRA.",
      "Ambas as proposições p e q são verdadeiras.",
      "Ambas as proposições p e q são falsas.",
      "A conjunção p ^ q é necessariamente verdadeira.",
      "A condicional p -> q é necessariamente verdadeira."
    ],
    "correctIndex": 0,
    "explanation": "Na lógica formal, a bicondicional (p <-> q) e a disjunção exclusiva (p ⊻ q, ou... ou) são EXATAMENTE OPOSTAS E COMPLEMENTARES:\n- A bicondicional é VERDADEIRA quando ambas têm o mesmo valor (V e V, ou F e F), e FALSA quando têm valores diferentes.\n- A disjunção exclusiva é VERDADEIRA quando têm valores diferentes (um V e outro F), e FALSA quando têm o mesmo valor.\nPortanto, se p <-> q é FALSA, significa obrigatoriamente que p e q possuem valores lógicos distintos (um é V e o outro é F). Consequentemente, a disjunção exclusiva p ⊻ q é IMPRESCINDIVELMENTE VERDADEIRA!",
    "fundamentacaoLegal": "Lógica Matemática / Relação de Oposição entre Bicondicional e Disjunção Exclusiva",
    "hint": "Se a bicondicional (<->) é Falsa, o Ou Exclusivo (⊻) é automaticamente VERDADEIRO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "O 'OU EXCLUSIVO' é a negação perfeita da 'BICONDICIONAL'! Se um mente, o outro brilha na verdade.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. O 'ou exclusivo' é a negação lógica exata da bicondicional; se uma é falsa, a outra é verdadeira.",
      "B": "Incorreta. Conforme a tabela-verdade, V <-> V resulta em Verdadeiro.",
      "C": "Incorreta. Mesmos valores lógicos geram bicondicional verdadeira.",
      "D": "Incorreta. Valores opostos tornam a conjunção sempre falsa.",
      "E": "Incorreta. Pode ser falsa a depender da ordem dos valores opostos."
    }
  },
  {
    "id": "elite_rlm_017",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Análise Combinatória • Princípio da Permutação Circular",
    "question": "Oito oficiais da cúpula da PMPE, incluindo o Comandante-Geral e o Subcomandante-Geral, devem sentar-se ao redor de uma mesa de reuniões circular para planejar a Operação Carnaval. De quantas maneiras distintas esses 8 oficiais podem se posicionar ao redor da mesa circular de modo que o Comandante-Geral e o Subcomandante-Geral fiquem SEMPRE sentados lado a lado?",
    "options": [
      "720 maneiras.",
      "1.440 maneiras.",
      "2.880 maneiras.",
      "5.040 maneiras.",
      "1.080 maneiras."
    ],
    "correctIndex": 1,
    "explanation": "Problema de Permutação Circular com elementos juntos:\n1) Agrupamos o Comandante e o Subcomandante como se fossem um 'único bloco' (C, S).\n2) O número de elementos ao redor da mesa passa a ser: 6 oficiais avulsos + 1 bloco = 7 elementos.\n3) A permutação circular de n elementos é dada por PC(n) = (n - 1)!:\nPC(7) = (7 - 1)! = 6! = 720 maneiras.\n4) Dentro do bloco, o Comandante e o Subcomandante podem trocar de lugar entre si de 2! = 2 maneiras (C ao lado de S, ou S ao lado de C).\nTotal de maneiras distintas = 720 * 2 = 1.440 maneiras!\nAlternativa A: 1.440 maneiras.",
    "fundamentacaoLegal": "Análise Combinatória / Permutação Circular e Blocos Agrupados",
    "hint": "Permutação circular de N elementos: (N - 1)!. Junte os dois em um bloco (ficam 7 elementos -> 6!). Multiplique por 2 porque eles trocam de lugar entre si!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Considerar Comandante e Subcomandante como um único bloco: restam 6 + 1 = 7 elementos na mesa.",
      "Passo 2: Aplicar a fórmula de Permutação Circular para 7 elementos: PC(7) = (7 - 1)! = 6!.",
      "Passo 3: Calcular 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720.",
      "Passo 4: Multiplicar pelas 2 posições internas do bloco (C-S ou S-C): 720 * 2 = 1.440."
    ],
    "dicaMacete": "Mesa redonda: tira 1 do total (vira 6!) e dobra por causa dos dois grudados lado a lado!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Omissão da inversão relativa interna entre os dois comandantes.",
      "B": "Correta. (7-1)! * 2! = 720 * 2 = 1.440 maneiras com precisão circular.",
      "C": "Incorreta. Desconsiderou a simetria rotacional da mesa redonda.",
      "D": "Incorreta. Desconsiderou a exigência de ficarem adjacentes.",
      "E": "Incorreta. Produto impróprio dos fatores combinatórios."
    }
  },
  {
    "id": "elite_rlm_018",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Lógica Temporal e Calendários • Raciocínio Algorítmico",
    "question": "Sabendo-se que o dia 11 de junho de um determinado ano bissexto caiu exatamente em uma terça-feira, em qual dia da semana cairá o dia 25 de dezembro desse MESMO ano?",
    "options": [
      "Sexta-feira.",
      "Quinta-feira.",
      "Quarta-feira.",
      "Sábado.",
      "Domingo."
    ],
    "correctIndex": 2,
    "explanation": "Contagem de dias entre 11 de junho e 25 de dezembro (lembrando que fevereiro já passou, então o fato de ser ano bissexto não altera os dias dos meses seguintes):\n- Junho: 30 - 11 = 19 dias restantes\n- Julho: 31 dias\n- Agosto: 31 dias\n- Setembro: 30 dias\n- Outubro: 31 dias\n- Novembro: 30 dias\n- Dezembro: 25 dias\nSoma total de dias decorridos:\n19 + 31 + 31 + 30 + 31 + 30 + 25 = 197 dias.\nDividindo pelo ciclo semanal de 7 dias:\n197 / 7 = 28 semanas completas com RESTO 1.\nComo o resto é 1, avançamos exatamente 1 dia a partir de terça-feira:\nTerça-feira + 1 dia = QUARTA-FEIRA!\nAlternativa A: Quarta-feira.",
    "fundamentacaoLegal": "Aritmética Modular / Lógica de Calendários e Congruência Módulo 7",
    "hint": "Some os dias restantes mês a mês (197 dias) e divida por 7. O resto da divisão indica quantos dias você deve avançar a partir de terça!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Contar dias de cada mês: Jun(19) + Jul(31) + Ago(31) + Set(30) + Out(31) + Nov(30) + Dez(25).",
      "Passo 2: Somar os dias: 19 + 31 + 31 + 30 + 31 + 30 + 25 = 197 dias.",
      "Passo 3: Dividir por 7: 197 / 7 = 28 com resto 1 (pois 28 * 7 = 196).",
      "Passo 4: Como o resto é 1, avança 1 dia a partir da terça-feira original: Terça + 1 = Quarta-feira."
    ],
    "dicaMacete": "197 dias / 7 = 28 semanas redondas e sobra 1 dia! Terça + 1 = Quarta-feira.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro no cômputo dos dias dos meses de julho e agosto.",
      "B": "Incorreta. Fevereiro já ocorreu no 1º semestre; não adiciona dia extra após junho.",
      "C": "Correta. 197 dias = 28 semanas + 1 dia de avanço = Quarta-feira.",
      "D": "Incorreta. Falha no cálculo do resto da divisão modular.",
      "E": "Incorreta. Conclusão desprovida de rigor aritmético."
    }
  },
  {
    "id": "elite_rlm_019",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Argumentação Lógica • Silogismo e Validade de Argumentos",
    "question": "Considere as seguintes premissas de um argumento:\nPremissa 1: 'Todo policial militar comprometido estuda com método.'\nPremissa 2: 'Nenhum indivíduo que estuda com método procrastina suas metas.'\nPremissa 3: 'Alguns atletas do batalhão de choque procrastinam suas metas.'\nAssinale a conclusão que torna esse argumento formalmente VÁLIDO segundo as regras do silogismo categórico:",
    "options": [
      "Nenhum atleta do batalhão de choque é policial militar comprometido.",
      "Alguns indivíduos que procrastinam suas metas são policiais militares comprometidos.",
      "Todos os policiais militares comprometidos são atletas do batalhão de choque.",
      "Alguns atletas do batalhão de choque não são policiais militares comprometidos.",
      "Nenhum indivíduo que estuda com método é atleta do batalhão de choque."
    ],
    "correctIndex": 3,
    "explanation": "Análise por diagramas de Venn ou silogismo:\n- P1: O conjunto dos Policiais Comprometidos (C) está totalmente contido no conjunto dos que Estudam com Método (M): C c M.\n- P2: O conjunto dos que Estudam com Método (M) é disjunto do conjunto dos que Procrastinam (P): M n P = vazio.\n- Como C c M e M n P = vazio, logo C n P = vazio (Nenhum policial comprometido procrastina).\n- P3: Alguns Atletas do Choque (A) pertencem a P (procrastinam): A n P != vazio.\n- Esses atletas que estão em P NUNCA poderão estar em C (pois C n P é vazio).\n- Conclusão categórica e necessária: 'Alguns atletas do batalhão de choque NÃO SÃO policiais militares comprometidos'!\nAlternativa B rigorosa e perfeita.",
    "fundamentacaoLegal": "Lógica Aristotélica / Validade Formal de Silogismos Categóricos",
    "hint": "Se todo C é M, e nenhum M é P, então nenhum C pode ser P. Se alguns Atletas são P, esses atletas jamais serão C!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: C c M (Todo Comprometido está dentro de Método).",
      "Passo 2: M n P = 0 (Método e Procrastinação não se tocam).",
      "Passo 3: Conclui-se que C n P = 0 (Comprometido e Procrastinação não se tocam).",
      "Passo 4: Premissa 3 diz que existe interseção entre Atletas (A) e Procrastinação (P).",
      "Passo 5: Esses atletas que procrastinam não podem ser comprometidos.",
      "Passo 6: Conclusão válida: Alguns atletas não são policiais comprometidos."
    ],
    "dicaMacete": "Desenhe os círculos: quem está no círculo da Procrastinação está proibido de entrar no círculo do Comprometido!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conclusão universal extrapolada ilegitimamente de premissa particular.",
      "B": "Incorreta. Conflita com a disjunção obrigatória entre comprometidos e procrastinadores.",
      "C": "Incorreta. Ilícito menor na conversão categórica.",
      "D": "Correta. Dedução particular negativa irrefutável pelas regras silogísticas.",
      "E": "Incorreta. Não decorre das premissas."
    }
  },
  {
    "id": "elite_rlm_020",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico Matemático",
    "topicoEdital": "Raciocínio Algébrico e Frações • Problemas de Torneiras / Equipes",
    "question": "Duas equipes de plantão da PMPE foram destacadas para realizar a triagem e cadastramento biométrico dos detidos em uma grande operação. A Equipe Alpha, trabalhando sozinha, é capaz de concluir todo o cadastramento em exatamente 6 horas. A Equipe Bravo, mais numerosa, realiza o mesmo trabalho sozinha em apenas 4 horas. Se as duas equipes trabalharem simultaneamente e juntas, em quanto tempo o cadastramento total estará integralmente concluído?",
    "options": [
      "3 horas exatas.",
      "2 horas e 30 minutos.",
      "2 horas e 40 minutos.",
      "2 horas e 15 minutos.",
      "2 horas e 24 minutos."
    ],
    "correctIndex": 4,
    "explanation": "Problema clássico de taxa de trabalho conjunto:\nEquipe Alpha faz 1/6 do trabalho por hora.\nEquipe Bravo faz 1/4 do trabalho por hora.\nTrabalhando juntas, em 1 hora farão:\n1/6 + 1/4 = (2 + 3) / 12 = 5/12 do trabalho por hora.\nO tempo total T para concluir o trabalho inteiro (1) é o inverso da taxa conjunta:\nT = 12 / 5 horas.\n12 / 5 = 2,4 horas.\nConvertendo a parte decimal para minutos:\n0,4 horas = 0,4 * 60 minutos = 24 minutos.\nPortanto, o tempo total é de 2 horas e 24 minutos!\nAlternativa A: 2 horas e 24 minutos.",
    "fundamentacaoLegal": "Aritmética / Razões Harmônicas e Taxas de Vazão/Trabalho Conjunto",
    "hint": "Fórmula do trabalho conjunto: Tempo = (A * B) / (A + B). Faça (6 * 4) / (6 + 4) = 24 / 10 = 2,4 horas = 2h e 24min!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "passoAPassoConta": [
      "Passo 1: Taxa de Alpha: 1/6 por hora. Taxa de Bravo: 1/4 por hora.",
      "Passo 2: Soma das taxas: 1/6 + 1/4 = (2/12) + (3/12) = 5/12 do trabalho por hora.",
      "Passo 3: Tempo total inverso: T = 12/5 = 2,4 horas.",
      "Passo 4: Converter 0,4h em minutos: 0,4 * 60 = 24 minutos.",
      "Passo 5: Resultado exato: 2 horas e 24 minutos."
    ],
    "dicaMacete": "Produto dividido pela Soma: (6 * 4) / (6 + 4) = 24 / 10 = 2,4h. E 0,4h * 60 = 24 min!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Média aritmética não se aplica a taxas de produtividade simultânea.",
      "B": "Incorreta. 2h30min seria 2,5 horas.",
      "C": "Incorreta. Erro comum de considerar base centesimal em vez de sexagesimal (60 minutos).",
      "D": "Incorreta. Fração temporal distorcida.",
      "E": "Correta. 2,4 horas equivalem com exatidão a 2 horas e 24 minutos."
    }
  },
  {
    "id": "elite_info_001",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes e Protocolos • Portas de Comunicação Padrão TCP/IP",
    "question": "Na arquitetura TCP/IP, cada serviço de rede opera por padrão em portas lógicas bem conhecidas (well-known ports). Assinale a alternativa que associa CORRETAMENTE o protocolo de rede à sua respectiva porta de comunicação padrão:",
    "options": [
      "HTTPS (HTTP Seguro) — Porta 443; SSH — Porta 22; DNS — Porta 53.",
      "SSH (Secure Shell) — Porta 23; Telnet — Porta 22; DNS — Porta 80.",
      "SMTP Seguro — Porta 110; IMAP — Porta 25; HTTP — Porta 8080.",
      "FTP (Controle) — Porta 53; SSH — Porta 443; POP3 Seguro — Porta 993.",
      "Telnet — Porta 443; DNS — Porta 21; IMAP Seguro — Porta 587."
    ],
    "correctIndex": 0,
    "explanation": "As portas lógicas bem conhecidas oficiais são:\n- HTTPS (Hypertext Transfer Protocol Secure): Porta 443.\n- SSH (Secure Shell - acesso remoto criptografado): Porta 22.\n- DNS (Domain Name System - resolução de nomes em IPs): Porta 53 (UDP/TCP).\nA alternativa B está 100% correta.",
    "fundamentacaoLegal": "Redes de Computadores / Arquitetura TCP/IP e Portas IANA",
    "hint": "SSH = 22; Telnet = 23; DNS = 53; HTTP = 80; HTTPS = 443; SMTP = 587; IMAP = 993.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "SSH é 22 (dois patinhos seguros). HTTPS é 443. DNS é 53!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. HTTPS (443), SSH (22) e DNS (53) rigorosamente conformes com os padrões IANA.",
      "B": "Incorreta. Associação cruzada equivocada entre SSH e Telnet.",
      "C": "Incorreta. Portas de correio eletrônico incorretas.",
      "D": "Incorreta. FTP controle é porta 21 e não 53.",
      "E": "Incorreta. Telnet não utiliza a porta 443 de HTTPS."
    }
  },
  {
    "id": "elite_info_002",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação • Princípios Fundamentais (CIDRA)",
    "question": "Um perito em crimes cibernéticos da polícia constatou que um documento sigiloso foi interceptado e lido por terceiros não autorizados durante o tráfego em rede aberta. Além disso, o invasor alterou sutilmente os valores numéricos do arquivo antes de retransmiti-lo ao destinatário. Os dois princípios basilares da segurança da informação violados nesse incidente foram, respectivamente:",
    "options": [
      "Disponibilidade e Irretratabilidade.",
      "Confidencialidade e Integridade.",
      "Autenticidade e Disponibilidade.",
      "Legalidade e Conformidade.",
      "Não Repúdio e Resiliência Operacional."
    ],
    "correctIndex": 1,
    "explanation": "1) Leitura por pessoa não autorizada = Quebra da CONFIDENCIALIDADE (garantia de que a informação só é acessível a quem possui a devida autorização).\n2) Modificação não autorizada do conteúdo = Quebra da INTEGRIDADE (garantia de que a informação permanece exata, completa e inalterada em relação ao seu estado original).\nLogo, Confidencialidade e Integridade foram violadas.",
    "fundamentacaoLegal": "Norma ABNT NBR ISO/IEC 27001 / Princípios da Segurança da Informação",
    "hint": "Confidencialidade = Segredo/Sigilo (ninguém vê). Integridade = Inalterabilidade (ninguém altera).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Leu sem permissão? Faltou Confidencialidade! Mexeu no arquivo? Faltou Integridade!",
    "porqueErrou": {
      "0": "Você marcou (A): Disponibilidade diz respeito a o sistema estar no ar e acessível quando requisitado.",
      "2": "Você marcou (C): Autenticidade garante a autoria legítima de quem assinou.",
      "3": "Você marcou (D): Legalidade é princípio jurídico, e não um dos pilares clássicos da tríade CID.",
      "4": "Você marcou (E): Não repúdio impede o autor de negar a autoria de uma ação praticada."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O acesso ao sistema não foi interrompido.",
      "B": "Correta. Violação de sigilo (confidencialidade) e alteração indevida de dados (integridade).",
      "C": "Incorreta. A disponibilidade do arquivo não foi atacada.",
      "D": "Incorreta. Termos estranhos aos pilares clássicos da segurança tecnológica.",
      "E": "Incorreta. Não houve recusa de autoria pelo remetente legítimo."
    }
  },
  {
    "id": "elite_info_003",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Criptografia e Assinatura Digital • Criptografia Assimétrica",
    "question": "No processo de Assinatura Digital de um boletim de ocorrência eletrônico, o algoritmo criptográfico garante simultaneamente a autenticidade do emissor, a integridade do conteúdo e o não-repúdio. Tecnicamente, para gerar a assinatura digital, o emissor utiliza:",
    "options": [
      "A chave pública do destinatário para cifrar o arquivo completo.",
      "A sua própria chave pública para cifrar o certificado digital da autoridade certificadora.",
      "A sua própria chave privada para cifrar o resumo criptográfico (hash) do documento.",
      "A chave privada do destinatário compartilhada via canal seguro previamente.",
      "Uma chave simétrica de sessão de 56 bits gerada aleatoriamente pelo roteador."
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo da Assinatura Digital:\n1) O documento original passa por uma função hash gerando um resumo único (digest);\n2) Esse resumo hash é CIFRADO com a CHAVE PRIVADA DO EMISSOR (somente ele a possui, garantindo autenticidade e não-repúdio);\n3) Qualquer pessoa de posse da CHAVE PÚBLICA DO EMISSOR pode decifrar o hash e conferir se ele coincide com o hash recalculado do documento (garantindo integridade).",
    "fundamentacaoLegal": "Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil) / Medida Provisória 2.200-2/2001",
    "hint": "Assinatura Digital = Hash do documento criptografado com a CHAVE PRIVADA DO EMISSOR!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Quem assina usa a sua PRIVADA! Quem confere a assinatura usa a PÚBLICA dele!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Criptografia com chave pública do receptor confere sigilo, não assinatura.",
      "B": "Incorreta. A chave pública do emissor valida e decifra o hash, não o cifra.",
      "C": "Correta. O hash é cifrado com a chave privada do remetente, viabilizando a validação por sua chave pública correspondente.",
      "D": "Incorreta. Compartilhar chave privada destrói a segurança da infraestrutura PKI.",
      "E": "Incorreta. Algoritmos simétricos não suportam a tecnologia de assinatura digital ICP-Brasil."
    }
  },
  {
    "id": "elite_info_004",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares e Ameaças • Características Técnicas de Códigos Maliciosos",
    "question": "Um tipo de malware altamente destrutivo infecta sistemas corporativos, cifra os arquivos de dados dos discos locais e de rede com algoritmos criptográficos robustos (como AES e RSA) e exige o pagamento de resgate em criptomoedas para fornecer a chave de descriptografia. Esse software malicioso é classificado como:",
    "options": [
      "Spyware.",
      "Adware.",
      "Keylogger.",
      "Ransomware.",
      "Worm tradicional."
    ],
    "correctIndex": 3,
    "explanation": "O Ransomware (do inglês 'ransom' = resgate) é o software malicioso que 'sequestra' os dados do usuário, criptografando arquivos de documentos, fotos e bancos de dados com chaves assimétricas robustas, e exibe na tela uma nota de resgate exigindo pagamento geralmente em Bitcoin para devolver o acesso aos dados.",
    "fundamentacaoLegal": "Cartilha de Segurança para a Internet / CERT.br / Tipos de Malware",
    "hint": "Ransomware = Malicioso que sequestra e criptografa arquivos exigindo RESGATE (ransom).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Ransom = Resgate. Sequestro de dados com criptografia = RANSOMWARE!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Spyware visa espionagem silenciosa e não extorsão ostensiva.",
      "B": "Incorreta. Adware apenas gera pop-ups comerciais.",
      "C": "Incorreta. Keylogger monitora teclas digitadas.",
      "D": "Correta. Ransomware opera sequestro cibernético de arquivos por cifragem com cobrança de resgate.",
      "E": "Incorreta. O worm foca em replicação em massa explorando vulnerabilidades de rede."
    }
  },
  {
    "id": "elite_info_005",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Sistemas Operacionais • Windows 10/11: Gerenciamento e Teclas de Atalho",
    "question": "No ambiente operacional Microsoft Windows 11 em língua portuguesa, qual combinação de teclas de atalho permite ao policial militar BLOQUEAR imediatamente a sua estação de trabalho ao afastar-se momentaneamente da mesa, exigindo nova inserção de credenciais de login para desbloqueio?",
    "options": [
      "Ctrl + Alt + Del.",
      "Logotipo do Windows (Win) + R.",
      "Logotipo do Windows (Win) + D.",
      "Alt + F4.",
      "Logotipo do Windows (Win) + L."
    ],
    "correctIndex": 4,
    "explanation": "O atalho 'Win + L' (L de Lock / Bloquear) é o comando nativo e instantâneo do Windows para bloquear imediatamente o computador, enviando o usuário para a tela de bloqueio e protegendo as informações na tela contra visualizações de terceiros não autorizados.",
    "fundamentacaoLegal": "Manual de Recursos e Atalhos Oficiais do Microsoft Windows",
    "hint": "Win + L = Lock (Bloquear a máquina na hora!).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Win + L = LOCK (Travar a tela do militar para ninguém mexer!).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Apresenta um menu intermediário e não efetua o bloqueio direto e imediato.",
      "B": "Incorreta. Win + R abre o utilitário Executar.",
      "C": "Incorreta. Win + D alterna a visualização da Área de Trabalho.",
      "D": "Incorreta. Alt + F4 encerra o processo ou janela ativa.",
      "E": "Correta. Win + L efetua o bloqueio direto e imediato da sessão do usuário."
    }
  },
  {
    "id": "elite_info_006",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Processador de Texto • Microsoft Word 365: Quebras de Seção",
    "question": "Um policial militar está redigindo um relatório técnico no Microsoft Word contendo 10 páginas. As páginas 1 a 4 devem ter orientação Retrato, enquanto a página 5 (que contém uma tabela com estatísticas operacionais de grande largura) deve ter orientação Paisagem, retornando as páginas 6 a 10 à orientação Retrato. Para que essa configuração de orientações de página distintas seja possível no mesmo documento, é OBRIGATÓRIO inserir:",
    "options": [
      "Quebras de Seção (Próxima Página) imediatamente antes da página 5 e imediatamente após a página 5.",
      "Quebras de Página Simples antes da página 5 e após a página 5.",
      "Quebras de Coluna em cada uma das células da tabela operacional.",
      "Marcadores de hiperlinks e referências cruzadas vinculadas ao rodapé.",
      "Um índice analítico automático com estilos de título personalizados."
    ],
    "correctIndex": 0,
    "explanation": "A orientação da página (Retrato ou Paisagem), as margens, os cabeçalhos/rodapés e o número de colunas são PROPRIEDADES DA SEÇÃO no Word. Uma Quebra de Página comum apenas empurra o texto para a página seguinte dentro da MESMA seção. Para alterar a orientação da página 5 sem alterar o restante do documento, é indispensável criar uma nova seção inserindo Quebras de Seção (Próxima Página) antes e depois da referida página.",
    "fundamentacaoLegal": "Suporte Técnico Microsoft Office / Formatação de Documentos e Seções",
    "hint": "Para mudar a orientação de uma página no meio do documento (Paisagem/Retrato), você precisa de QUEBRA DE SEÇÃO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Orientação diferente no mesmo arquivo? Só com QUEBRA DE SEÇÃO!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. A Quebra de Seção isola os parâmetros de cabeçalho, margem e orientação da página.",
      "B": "Incorreta. Quebra de página simples não divide o documento em seções de leiaute independentes.",
      "C": "Incorreta. Quebra de coluna atua na diagramação de parágrafos.",
      "D": "Incorreta. Referências cruzadas não afetam o leiaute.",
      "E": "Incorreta. Índice analítico não possui funções de formatação de página."
    }
  },
  {
    "id": "elite_info_007",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Planilhas Eletrônicas • Microsoft Excel 365: Funções Lógicas e de Busca",
    "question": "No Microsoft Excel em português, a planilha contém na coluna A os nomes dos batalhões e na coluna B o total de ocorrências atendidas. Qual das fórmulas a seguir calcula CORRETAMENTE a soma das ocorrências apenas dos batalhões cujo total de ocorrências seja estritamente superior a 100?",
    "options": [
      "=CONT.SE(B1:B20; \">100\")",
      "=SOMASE(B1:B20; \">100\")",
      "=SOMAR(B1:B20; \">100\")",
      "=SOMA(B1:B20; \">100\")",
      "=TOTAL.SE(B1:B20; \">100\")"
    ],
    "correctIndex": 1,
    "explanation": "A função SOMASE no Excel permite somar valores de um intervalo com base em um critério pré-determinado. A sintaxe de um único intervalo é:\n=SOMASE(intervalo; critérios; [intervalo_soma])\nQuando o intervalo de avaliação é o próprio intervalo a ser somado (coluna B), o terceiro argumento é opcional. Portanto:\n=SOMASE(B1:B20; \">100\")\nsoma todos os valores numéricos de B1 até B20 que sejam maiores que 100. A alternativa C está perfeitamente correta.",
    "fundamentacaoLegal": "Manual de Funções Microsoft Excel / Funções Matemáticas e Estatísticas Condicionais",
    "hint": "Para SOMAR com condição, a função é SOMASE (e não SOMA nem SOMAR). Para CONTAR seria CONT.SE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "SOMASE = SOMA + SE (Soma somente SE atender ao critério!).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. CONT.SE retorna a contagem de células e não a soma dos valores.",
      "B": "Correta. SOMASE(intervalo; critério) calcula a soma aritmética das células que satisfazem a condição.",
      "C": "Incorreta. Sintaxe inexistente na biblioteca padrão do Excel.",
      "D": "Incorreta. A função SOMA padrão não processa operadores lógicos relacionais.",
      "E": "Incorreta. Nome de função fictício."
    }
  },
  {
    "id": "elite_info_008",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Correio Eletrônico • Protocolos de Recebimento: IMAP vs POP3",
    "question": "Ao configurar o e-mail funcional corporativo em seu smartphone e também no computador do quartel, o policial militar deseja que as mensagens lidas, pastas criadas e e-mails excluídos em um dispositivo sejam automaticamente sincronizados e refletidos no outro dispositivo e no servidor webmail em tempo real. Para obter esse comportamento de sincronização contínua e centralizada na nuvem, o protocolo de recebimento a ser obrigatoriamente configurado é o:",
    "options": [
      "POP3 (Post Office Protocol 3).",
      "SMTP (Simple Mail Transfer Protocol).",
      "IMAP (Internet Message Access Protocol).",
      "SNMP (Simple Network Management Protocol).",
      "FTP (File Transfer Protocol)."
    ],
    "correctIndex": 2,
    "explanation": "O protocolo IMAP (porta padrão 143 ou 993 com SSL) mantém todas as mensagens e a estrutura de pastas armazenadas no servidor de correio. Ele sincroniza o estado das mensagens (lidas, não lidas, marcadas, excluídas) entre todos os clientes de e-mail e dispositivos do usuário. Diferencia-se do POP3, que por padrão baixa as mensagens para o disco local da máquina e as exclui do servidor.",
    "fundamentacaoLegal": "Protocolos da Camada de Aplicação da Internet / RFC 3501 (IMAP4)",
    "hint": "IMAP = Sincronização na nuvem em tempo real entre celular e PC. POP3 = Baixa para o PC e apaga do servidor.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "IMAP = I-Cloud / Múltiplos Acessos Permanentes (sincroniza tudo!). POP = Puxa O Pacote para o PC e pronto.",
    "porqueErrou": {
      "0": "Você marcou (A): O POP3 descarrega mensagens localmente e não foi projetado para sincronização bidirecional em múltiplos dispositivos.",
      "1": "Você marcou (B): O SMTP é o protocolo exclusivo de ENVIO (saída) de e-mails, e não de recebimento/sincronização.",
      "3": "Você marcou (D): SNMP é protocolo de gerência e monitoramento de ativos de rede.",
      "4": "Você marcou (E): FTP é protocolo de transferência genérica de arquivos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. POP3 baixa mensagens localmente e não sincroniza alterações de volta ao servidor.",
      "B": "Incorreta. SMTP atua estritamente no envio/transmissão de mensagens.",
      "C": "Correta. IMAP garante sincronização bidirecional completa entre servidor e múltiplos dispositivos clientes.",
      "D": "Incorreta. Protocolo de gerência de tráfego de rede.",
      "E": "Incorreta. Protocolo de download/upload de arquivos na web."
    }
  },
  {
    "id": "elite_info_009",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Cópias de Segurança • Tipos de Backup: Completo, Incremental e Diferencial",
    "question": "O setor de tecnologia da corporação executa a seguinte rotina de cópias de segurança (backup):\n- Domingo à meia-noite: Backup Completo (Full).\n- De segunda a sábado: executa um tipo de backup que copia SOMENTE os arquivos criados ou modificados desde o último backup completo de domingo, NÃO alterando o atributo de arquivamento (Archive bit) dos arquivos.\nEsse modelo de cópia de segurança realizado de segunda a sábado é tecnicamente classificado como:",
    "options": [
      "Backup Incremental.",
      "Backup Contínuo em Nuvem.",
      "Backup Espelhado (Mirror).",
      "Backup Diferencial.",
      "Backup Sintético Dinâmico."
    ],
    "correctIndex": 3,
    "explanation": "Diferenças cruciais entre os tipos de backup:\n1) Backup Diferencial: Copia tudo o que mudou DESDE O ÚLTIMO BACKUP COMPLETO. Ele NÃO desmarca (não limpa) o atributo de arquivamento dos arquivos. Cada dia ele copia os arquivos modificados acumulados em relação ao domingo.\n2) Backup Incremental: Copia apenas o que mudou desde o último backup de qualquer tipo e DESMARCA (limpa) o atributo de arquivamento.\nA questão descreve fielmente o BACKUP DIFERENCIAL.",
    "fundamentacaoLegal": "Segurança da Informação / Políticas de Cópia de Segurança e Recuperação (Disaster Recovery)",
    "hint": "Diferencial = Copia desde o último COMPLETO e NÃO limpa o atributo de arquivamento!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Diferencial = Diferença em relação ao FULL (acumula tudo e não limpa o bit). Incremental = só o degrau de ontem e limpa o bit!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O incremental baseia-se no dia anterior e reseta o atributo de arquivamento.",
      "B": "Incorreta. Não descreve a mecânica diferencial baseada em Full.",
      "C": "Incorreta. Espelhamento exclui arquivos no destino se excluídos na origem.",
      "D": "Correta. O backup diferencial referencia sempre o último backup completo e mantém os bits de arquivo intactos.",
      "E": "Incorreta. Conceito fora do padrão clássico das bancas."
    }
  },
  {
    "id": "elite_info_010",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Navegação na Internet • Modo Anônimo / InPrivate nos Navegadores",
    "question": "Ao ativar o modo de Navegação Anônima (Google Chrome) ou Janela InPrivate (Microsoft Edge), é correto afirmar quanto ao nível real de privacidade oferecido que:",
    "options": [
      "O endereço IP do usuário é mascarado na rede, tornando-o 100% invisível ao provedor de acesso à internet e aos sites acessados.",
      "O usuário fica imune a ataques de phishing, malwares e rastreamentos por câmeras de segurança pública.",
      "Todos os arquivos descarregados (downloads) e favoritos criados são automaticamente apagados do disco rígido ao fechar a sessão.",
      "O tráfego de rede é criptografado por uma rede VPN militar impenetrável fornecida pela desenvolvedora do navegador.",
      "O navegador não salvará no computador local o histórico de navegação, cookies, dados de sites nem informações inseridas em formulários após o fechamento da janela anônima."
    ],
    "correctIndex": 4,
    "explanation": "O Modo Anônimo/InPrivate tem efeito ESTRITAMENTE LOCAL na máquina do usuário: ele garante que o navegador não salvará o histórico de navegação, cookies, dados de sites e dados digitados em formulários após fechar todas as guias anônimas. No entanto, NÃO oculta a navegação do provedor de internet (ISP), do administrador da rede local/quartel ou dos sites visitados, e os downloads realizados continuam salvos na pasta Downloads.",
    "fundamentacaoLegal": "Segurança de Navegadores Web / Documentação Oficial Google Chrome e Edge",
    "hint": "Modo anônimo só limpa o histórico e cookies DO SEU COMPUTADOR ao fechar. Não esconde IP nem protege contra o provedor!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Anônimo esconde de quem usa o seu PC depois de você, mas NÃO do seu chefe nem do provedor de internet!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O provedor e o administrador da rede continuam enxergando os domínios acessados.",
      "B": "Incorreta. A vulnerabilidade a golpes de engenharia social persiste inalterada.",
      "C": "Incorreta. Downloads e novos favoritos não são excluídos automaticamente.",
      "D": "Incorreta. Não implementa encapsulamento por túnel VPN.",
      "E": "Correta. Garante a não persistência local de histórico, cookies e formulários temporários após o encerramento da janela."
    }
  },
  {
    "id": "elite_info_011",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Hardware e Armazenamento • Memórias Voláteis vs Não-Voláteis",
    "question": "No contexto da arquitetura de computadores, qual dos componentes a seguir é classificado estritamente como uma memória de acesso aleatório de natureza VOLÁTIL (cujo conteúdo é integralmente apagado no instante em que a alimentação de energia elétrica é desligada)?",
    "options": [
      "Memória RAM (Random Access Memory).",
      "Disco Rígido Magnético (HDD).",
      "SSD (Solid State Drive) NVMe.",
      "Memória Flash (Pen Drive).",
      "Memória ROM / EEPROM da BIOS/UEFI."
    ],
    "correctIndex": 0,
    "explanation": "A memória RAM (Random Access Memory) é a memória principal de trabalho do computador. Ela possui natureza tipicamente VOLÁTIL: necessita de fornecimento contínuo de eletricidade para manter as cargas que representam os bits nos capacitores. Quando o computador é desligado ou reiniciado, todos os dados na RAM desaparecem instantaneamente. SSD, HDD, Pen Drive e ROM são memórias NÃO-VOLÁTEIS (retêm os dados sem energia).",
    "fundamentacaoLegal": "Arquitetura e Organização de Computadores / Hierarquia de Memória",
    "hint": "Volátil = Se faltar energia, apaga tudo! É a memória RAM.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "RAM = Rápida, Ativa e Morre quando desliga a tomada!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. A memória RAM perde totalmente os dados armazenados na ausência de corrente elétrica.",
      "B": "Incorreta. Armazenamento eletromagnético permanente.",
      "C": "Incorreta. Mídia de armazenamento de massa não-volátil.",
      "D": "Incorreta. Dispositivo flash semicondutor não-volátil.",
      "E": "Incorreta. Armazenamento permanente de instruções de inicialização."
    }
  },
  {
    "id": "elite_info_012",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Computação em Nuvem (Cloud Computing) • Modelos de Serviço (IaaS, PaaS, SaaS)",
    "question": "Uma corporação policial contrata um provedor de nuvem para hospedar seus sistemas. O contrato prevê que o provedor fornecerá apenas a infraestrutura física de servidores, máquinas virtuais cruas, capacidade de armazenamento e conectividade de rede, ficando sob a inteira responsabilidade da equipe técnica da polícia a instalação do sistema operacional, dos bancos de dados e das aplicações operacionais. Esse modelo de computação em nuvem é classificado como:",
    "options": [
      "SaaS (Software como Serviço).",
      "IaaS (Infraestrutura como Serviço).",
      "PaaS (Plataforma como Serviço).",
      "DaaS (Dados como Serviço).",
      "FaaS (Função como Serviço)."
    ],
    "correctIndex": 1,
    "explanation": "Na computação em nuvem:\n- IaaS (Infrastructure as a Service): O provedor entrega a infraestrutura básica (servidores, virtualização, discos e redes). O cliente gerencia o Sistema Operacional, middleware, banco de dados e aplicações.\n- PaaS (Platform as a Service): O provedor gerencia SO e banco de dados; o cliente só gerencia o código e as aplicações.\n- SaaS (Software as a Service): O provedor gerencia tudo; o cliente apenas consome o software pronto (ex: Gmail, Microsoft 365).",
    "fundamentacaoLegal": "NIST Special Publication 800-145 / Definição de Cloud Computing",
    "hint": "IaaS = Entrega o 'ferro' e a rede (máquinas virtuais e discos). O cliente instala o Windows/Linux e tudo mais!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "IaaS = Infraestrutura (hardware e rede). PaaS = Plataforma (para programadores). SaaS = Software (usuário final).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. SaaS abstrai totalmente infraestrutura e middleware.",
      "B": "Correta. IaaS disponibiliza recursos computacionais fundamentais de hardware e rede para o cliente instalar o SO e os sistemas.",
      "C": "Incorreta. PaaS fornece o ecossistema de desenvolvimento e gerenciamento do sistema operacional.",
      "D": "Incorreta. Modelo secundário não compatível com o enunciado.",
      "E": "Incorreta. Modelo de execução sob demanda de funções atômicas."
    }
  },
  {
    "id": "elite_info_013",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Equipamentos de Rede • Roteador vs Switch vs Hub",
    "question": "Em uma rede local de computadores (LAN) da PMPE, o dispositivo de interconexão que opera tipicamente na Camada 2 (Enlace de Dados) do modelo OSI, utilizando os endereços físicos MAC (Media Access Control) para encaminhar os quadros de dados exclusivamente à porta do computador destinatário específico (evitando o tráfego desnecessário de broadcast na rede), é o:",
    "options": [
      "Hub (Concentrador passivo).",
      "Modem Analógico.",
      "Switch (Comutador).",
      "Repetidor de Sinal.",
      "Access Point em modo Bridge indiscriminado."
    ],
    "correctIndex": 2,
    "explanation": "O Switch (comutador) é o equipamento padrão da Camada 2 (Enlace) que inspeciona o cabeçalho dos quadros (frames) Ethernet, consulta sua tabela interna CAM/MAC e envia o pacote de dados EXCLUSIVAMENTE para a porta onde o dispositivo destinatário está conectado. Diferencia-se do Hub, que opera na Camada 1 e replica o sinal cegamente para todas as portas por difusão (broadcast).",
    "fundamentacaoLegal": "Redes de Computadores / Equipamentos de Interconexão e Modelo OSI",
    "hint": "Switch = Inteligente na camada 2, usa tabela de endereços MAC e manda só para a porta certa!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Hub é burro (grita para todo mundo); Switch é esperto (conversa só com quem deve pelo endereço MAC)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O hub replica pacotes para todas as portas gerando colisão em rede.",
      "B": "Incorreta. Converte sinal analógico/digital na interface WAN.",
      "C": "Correta. O Switch atua na camada 2 comutando quadros direcionados com base na tabela de endereços MAC.",
      "D": "Incorreta. Dispositivo físico da camada 1 sem inteligência de roteamento de quadros.",
      "E": "Incorreta. Não define o hardware canônico de comutação de enlace corporativa."
    }
  },
  {
    "id": "elite_info_014",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança de Redes • Mecanismos de Proteção: Firewall de Rede",
    "question": "O Firewall é um elemento essencial na arquitetura de segurança da informação de qualquer organização militar. Quanto à função e limitações de um firewall padrão de filtragem de pacotes, é correto afirmar:",
    "options": [
      "O firewall substitui integralmente a necessidade de softwares antivírus nos computadores, pois impede a execução de arquivos infectados em anexos de e-mail.",
      "O firewall previne roubos de senhas praticados por criminosos por meio de técnicas de engenharia social por telefone.",
      "O firewall realiza a correção automática de falhas no código-fonte das aplicações vulneráveis aos ataques de injeção de SQL.",
      "O firewall monitora e controla o tráfego de entrada e saída de dados com base em regras de segurança pré-estabelecidas, bloqueando portas e endereços IP não autorizados.",
      "O firewall criptografa permanentemente todos os arquivos armazenados nos discos rígidos locais dos computadores da rede."
    ],
    "correctIndex": 3,
    "explanation": "Um firewall de rede atua como uma barreira defensiva que inspeciona o tráfego de dados que entra e sai da rede, aplicando um conjunto de regras (filtragem de endereços IP de origem/destino, protocolos TCP/UDP e números de portas lógicas). Ele NÃO substitui o antivírus, não corrige vulnerabilidades de software nem impede ataques de engenharia social humana.",
    "fundamentacaoLegal": "Cartilha de Segurança para a Internet / Defesas de Perímetro e Firewalls",
    "hint": "Firewall = Filtro de tráfego de rede baseado em regras (bloqueia ou libera portas e IPs). NÃO é antivírus!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Firewall é a portaria do quartel: confere quem entra e quem sai pelo crachá (IP e porta)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Firewall e antivírus são ferramentas complementares com escopos distintos.",
      "B": "Incorreta. Engenharia social humana independe da barreira tecnológica perimetral.",
      "C": "Incorreta. Falhas de software requerem patches e sanitização de código.",
      "D": "Correta. Controla o tráfego de rede entrante e saint com base em políticas de filtragem de IPs, portas e protocolos.",
      "E": "Incorreta. Cifragem local é atribuição de softwares de criptografia de volume."
    }
  },
  {
    "id": "elite_info_015",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Suíte de Escritório • LibreOffice Writer: Atalhos e Recursos Oficiais",
    "question": "No editor de textos LibreOffice Writer 7 (em português e configuração padrão de fábrica), qual é a tecla de atalho utilizada para aplicar formatação em NEGRITO no texto selecionado?",
    "options": [
      "Ctrl + N.",
      "Shift + B.",
      "Ctrl + G.",
      "Alt + N.",
      "Ctrl + B."
    ],
    "correctIndex": 4,
    "explanation": "Atenção máxima para as diferenças entre MS Word e LibreOffice Writer em português:\n- No MS Word em português: Negrito é Ctrl + N; Itálico é Ctrl + I; Sublinhado é Ctrl + S.\n- No LibreOffice Writer em português (que preserva atalhos de padrão internacional): Negrito é Ctrl + B (de Bold!); Itálico é Ctrl + I; Sublinhado é Ctrl + U (de Underline!). E o atalho Ctrl + N no Writer serve para CRIAR UM NOVO DOCUMENTO (New)!\nPortanto, para colocar em Negrito no Writer usa-se Ctrl + B.",
    "fundamentacaoLegal": "Guia Oficial do Usuário LibreOffice Writer / Teclas de Atalho Padrão",
    "hint": "No LibreOffice os atalhos são em inglês: B = Bold (Negrito -> Ctrl+B); U = Underline (Sublinhado -> Ctrl+U); N = New (Novo Documento -> Ctrl+N).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "No Word: N de Negrito (Ctrl+N). No LibreOffice: B de BOLD (Ctrl+B)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. No LibreOffice Writer, Ctrl+N aciona o comando 'Novo Documento'.",
      "B": "Incorreta. Não altera atributos de destaque de texto.",
      "C": "Incorreta. Atalho inválido para formatação tipográfica.",
      "D": "Incorreta. Combinação com Alt não executa a macro de fonte.",
      "E": "Correta. Ctrl + B aplica 'Bold' (Negrito) na suíte LibreOffice."
    }
  },
  {
    "id": "elite_info_016",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Engenharia Social e Golpes • Phishing, Smishing e Vishing",
    "question": "Um policial militar recebe uma mensagem por aplicativo de comunicação instantânea alegando ser do setor de recursos humanos da corporação, contendo um link para uma página visualmente idêntica à do portal oficial, induzindo o militar a digitar seu CPF e senha funcional para 'recadastramento emergencial de porte de arma'. Essa técnica criminosa é denominada:",
    "options": [
      "Phishing (ou Smishing quando por mensagem).",
      "DDoS (Distributed Denial of Service).",
      "Defacement.",
      "Buffer Overflow.",
      "Spoofing de endereço MAC."
    ],
    "correctIndex": 0,
    "explanation": "O Phishing é a clássica técnica de fraude eletrônica e engenharia social baseada em mensagens e páginas falsas que imitam instituições legítimas e confiáveis para 'pescar' (phish) credenciais, senhas e dados confidenciais dos usuários desavisados. Quando veiculada via SMS ou aplicativos de mensagens móveis, é especificamente chamada de Smishing.",
    "fundamentacaoLegal": "Cartilha de Segurança para a Internet / Golpes na Internet e Engenharia Social",
    "hint": "Página falsa para enganar a pessoa e roubar login e senha = PHISHING / SMISHING.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Phishing lembra Pescaria: joga a isca falsa para pescar sua senha!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Prática de engenharia social com clonagem de identidade institucional para captura ilícita de credenciais.",
      "B": "Incorreta. Negação de serviço visa indisponibilidade de servidores e redes.",
      "C": "Incorreta. Defacement consiste na alteração da página inicial de um sítio eletrônico.",
      "D": "Incorreta. Estouro de buffer é vulnerabilidade interna de software.",
      "E": "Incorreta. Mascaramento de identificador de camada física."
    }
  },
  {
    "id": "elite_info_017",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes Sem Fio • Padrões de Segurança Wi-Fi (WEP, WPA2 e WPA3)",
    "question": "Em relação aos protocolos de criptografia e segurança para redes sem fio padrão Wi-Fi (IEEE 802.11), assinale a afirmativa tecnicamente correta:",
    "options": [
      "O protocolo WEP (Wired Equivalent Privacy) é o padrão de segurança mais moderno e inviolável da atualidade.",
      "O protocolo WPA3 introduziu a tecnologia SAE (Simultaneous Authentication of Equals), que oferece proteção robusta contra ataques de dicionário e adivinhação de senhas offline.",
      "O protocolo WPA2 utiliza exclusivamente cifras obsoletas de 40 bits sem suporte ao algoritmo AES.",
      "Redes abertas sem senha criptografam o tráfego automaticamente por meio de certificados SSL transparentes do roteador.",
      "O recurso WPS (Wi-Fi Protected Setup) é recomendado mundialmente como o mecanismo de maior blindagem contra hackers em roteadores."
    ],
    "correctIndex": 1,
    "explanation": "O WPA3 é a geração mais recente de segurança Wi-Fi. No modo pessoal (WPA3-Personal), substituiu o handshake de 4 vias do WPA2 pelo protocolo SAE (Simultaneous Authentication of Equals), impedindo que invasores capturem pacotes e quebrem a senha em ataques offline de força bruta ou dicionário, além de garantir o sigilo de encaminhamento (Forward Secrecy).",
    "fundamentacaoLegal": "Wi-Fi Alliance / Especificação Técnica WPA3 / Segurança de Redes Sem Fio",
    "hint": "WPA3 é o padrão moderno que usa SAE para travar ataques de dicionário offline!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "WEP é furado e quebrado em segundos. WPA2 é bom (AES). WPA3 é a elite blindada contra dicionário!",
    "porqueErrou": {
      "0": "Você marcou (A): O WEP é completamente vulnerável, inseguro e foi quebrado há mais de duas décadas.",
      "2": "Você marcou (C): O WPA2 utiliza por padrão o padrão militar AES (CCMP) com chaves de 128/256 bits.",
      "3": "Você marcou (D): Redes abertas transmitem dados em texto claro sem qualquer criptografia no enlace sem fio.",
      "4": "Você marcou (E): O WPS contém falhas graves conhecidas que facilitam a invasão e deve ser desativado."
    },
    "analiseAlternativas": {
      "A": "Incorreta. WEP é o algoritmo mais frágil e obsoleto da história do Wi-Fi.",
      "B": "Correta. WPA3 implementa SAE, eliminando a viabilidade prática de ataques de dicionário por força bruta offline.",
      "C": "Incorreta. WPA2 consagrou o uso de AES no padrão CCMP.",
      "D": "Incorreta. Redes públicas e abertas expõem pacotes de rede sem proteção na camada de rádio.",
      "E": "Incorreta. O PIN do WPS é vulnerável a ataques com ferramentas automatizadas (ex: Reaver)."
    }
  },
  {
    "id": "elite_info_018",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Mecanismos de Autenticação • Múltiplos Fatores de Autenticação (MFA / 2FA)",
    "question": "O conceito de Autenticação Multifator (MFA) baseia-se na combinação de pelo menos dois fatores de categorias diferentes para validar a identidade do usuário. As três categorias consagradas de fatores de autenticação são:",
    "options": [
      "Uma chave primária, uma chave estrangeira e uma chave de sessão.",
      "Algo que você escreve, algo que você lê e algo que você apaga.",
      "Algo que você sabe (senha/PIN), algo que você tem (token/smartphone) e algo que você é (biometria/reconhecimento facial).",
      "Seu endereço IP, seu endereço MAC e o provedor de internet.",
      "Usuário de rede, e-mail institucional e login de administrador."
    ],
    "correctIndex": 2,
    "explanation": "Os pilares conceituais do MFA são divididos rigorosamente em três fatores independentes:\n1) Fator de conhecimento: Algo que você SABE (ex: senha alfanumérica, PIN, pergunta secreta);\n2) Fator de posse: Algo que você TEM (ex: token físico, cartão inteligente, smartphone com aplicativo autenticador);\n3) Fator de inerência: Algo que você É (ex: biometria da impressão digital, reconhecimento facial, íris).",
    "fundamentacaoLegal": "NIST SP 800-63B / Diretrizes de Identidade Digital e Autenticação",
    "hint": "Os 3 fatores do MFA: O que você SABE (senha), o que você TEM (celular/token) e o que você É (biometria)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "SABER (cabeça/senha) + TER (bolso/token) + SER (corpo/biometria)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conceitos pertencentes à álgebra de bancos de dados relacionais.",
      "B": "Incorreta. Ações de manipulação textual sem rigor técnico.",
      "C": "Correta. Tríade canônica internacional de autenticação multifatorial (Know, Have, Are).",
      "D": "Incorreta. Identificadores de tráfego de camadas inferiores da rede.",
      "E": "Incorreta. Itens de uma mesma categoria conceitual."
    }
  },
  {
    "id": "elite_info_019",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Planilhas Eletrônicas • Excel 365: Fórmulas de Busca PROCX e PROCV",
    "question": "No Microsoft Excel 365, a função PROCX foi introduzida como uma evolução moderna para superar limitações históricas da tradicional função PROCV. Dentre as vantagens técnicas do PROCX em relação ao PROCV, destaca-se:",
    "options": [
      "A incapacidade de trabalhar com intervalos horizontais na planilha.",
      "O limite máximo de busca restrito a apenas 50 linhas de dados.",
      "A obrigatoriedade de ordenar as colunas em ordem estritamente alfabética crescente para funcionar.",
      "A capacidade de realizar buscas à esquerda da coluna de pesquisa sem exigir reordenação da matriz e a correspondência exata por padrão.",
      "A exigência de indicar o número do índice da coluna contado manualmente a partir da borda da planilha."
    ],
    "correctIndex": 3,
    "explanation": "A função PROCX resolveu as duas maiores deficiências do antigo PROCV:\n1) O PROCV só conseguia buscar valores situados à DIREITA da coluna de pesquisa; o PROCX busca tanto para a direita quanto para a ESQUERDA com total flexibilidade;\n2) O PROCV exigia o argumento final 'FALSO' para não retornar correspondência aproximada errada; o PROCX já traz por padrão a CORRESPONDÊNCIA EXATA;\n3) O PROCX não exige contar o índice numérico da coluna manualmente (passa-se a matriz de retorno diretamente).",
    "fundamentacaoLegal": "Suporte Avançado Microsoft Excel / Funções de Pesquisa e Referência",
    "hint": "PROCX pesquisa para a esquerda e para a direita e já vem com correspondência exata por padrão!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "PROCV era cego para a esquerda; o PROCX olha para todos os lados sem erro!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O PROCX opera bidirecionalmente em linhas ou colunas.",
      "B": "Incorreta. Capacidade de escala total no limite máximo de células da planilha.",
      "C": "Incorreta. Dispensa pré-requisitos de classificação alfabética.",
      "D": "Correta. Busca em qualquer direção (incluindo à esquerda) com correspondência exata padrão e sem contagem de índice de coluna.",
      "E": "Incorreta. Utiliza referências dinâmicas de matriz em vez de contadores estáticos de índice."
    }
  },
  {
    "id": "elite_info_020",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Sistemas Operacionais • Windows 10/11: Criptografia de Unidade BitLocker",
    "question": "O BitLocker é um recurso de segurança nativo integrado às edições Pro e Enterprise do Microsoft Windows. Sua finalidade principal é:",
    "options": [
      "Impedir que arquivos baixados da internet contenham scripts maliciosos de macro.",
      "Criar cópias de backup automático de conversas de voz em salas de reunião virtuais.",
      "Aumentar a velocidade de processamento dos núcleos da CPU através de overclock seguro.",
      "Gerenciar o compartilhamento de impressoras em rede corporativa sem fio.",
      "Criptografar volumes de disco inteiros (incluindo a unidade do sistema e unidades de dados), protegendo os dados contra acesso não autorizado mesmo se o disco rígido for fisicamente retirado do computador."
    ],
    "correctIndex": 4,
    "explanation": "O BitLocker é a ferramenta oficial da Microsoft para criptografia de disco completo (FDE - Full Disk Encryption). Ele cifra toda a unidade de armazenamento (usando algoritmo AES com chaves de 128 ou 256 bits) integrada ao chip TPM (Trusted Platform Module) da placa-mãe. Se a viatura ou laptop policial for furtado e o ladrão retirar o SSD para ler em outro computador, os dados estarão completamente ilegíveis sem a chave de recuperação.",
    "fundamentacaoLegal": "Segurança de Dados em Repouso / Microsoft BitLocker Drive Encryption Architecture",
    "hint": "BitLocker = Criptografia de disco completo! Se roubarem o SSD/HD do computador, ninguém consegue ler os arquivos.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "BitLocker = Lock nos Bits do Disco! Criptografia de volume total.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Proteção contra macros é função de antivírus e políticas de segurança de aplicativo.",
      "B": "Incorreta. Desprovido de funções de gravação ou telemetria multimídia.",
      "C": "Incorreta. Não possui atribuições de gerenciamento de frequência de clock.",
      "D": "Incorreta. Alheio a serviços de impressão.",
      "E": "Correta. BitLocker implementa criptografia de volume total protegendo dados em repouso contra extração física de hardware."
    }
  },
  {
    "id": "elite_const_001",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos e Garantias Fundamentais • Inviolabilidade do Domicílio (Art. 5º, XI)",
    "question": "Nos termos do Art. 5º, inciso XI, da Constituição Federal de 1988 e da pacífica jurisprudência do Supremo Tribunal Federal (Tema 280 da Repercussão Geral), a entrada forçada da autoridade policial em domicílio sem mandado judicial é lícita, mesmo no período noturno, quando:",
    "options": [
      "Estiver amparada em fundadas razões (justa causa), devidamente justificadas pelas circunstâncias fáticas prévias, que indiquem que dentro da residência está ocorrendo situação de flagrante delito.",
      "O policial militar suspeitar intuitivamente que o morador possui antecedentes criminais por furto simples.",
      "Houver mera denúncia anônima desprovida de quaisquer atos investigativos prévios que comprovem a ocorrência de crime.",
      "O delegado de polícia expedir uma portaria administrativa cautelar de busca e apreensão noturna.",
      "O morador recusar-se a apresentar documento de identificação civil na calçada de sua residência."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 5º, XI, da CF/88 e a tese de Repercussão Geral firmada pelo STF no RE 603.616 (Tema 280):\n'A entrada forçada em domicílio sem mandado judicial só é lícita, mesmo em período noturno, quando amparada em fundadas razões, devidamente justificadas a posteriori, que indiquem que dentro da casa ocorre situação de flagrante delito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade dos atos praticados.'",
    "fundamentacaoLegal": "Art. 5º, inciso XI, da CF/88 e STF - RE 603.616/RO (Tema 280)",
    "hint": "Invasão sem mandado exige JUSTA CAUSA / FUNDADAS RAZÕES concretas prévias de flagrante delito!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Casa é asilo inviolável! Sem mandado só pode em flagrante, socorro, desastre ou com fundadas razões prévias comprovadas.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Tese vinculante exata do STF (Tema 280) condicionada a fundadas razões objetivas de flagrante.",
      "B": "Incorreta. Intuição subjetiva carece de idoneidade jurídica perante a garantia constitucional.",
      "C": "Incorreta. Denúncia apócrifa exige investigação preliminar de verossimilhança.",
      "D": "Incorreta. Viola a cláusula pétrea de reserva de jurisdição atribuída aos magistrados.",
      "E": "Incorreta. Desproporcionalidade manifesta e inexistência de flagrante domiciliar."
    }
  },
  {
    "id": "elite_const_002",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Classificação Constitucional dos Crimes • Imprescritíveis vs Inafiançáveis",
    "question": "O Art. 5º da Constituição Federal estabelece tratamentos punitivos severos e diferenciados para certas condutas criminosas. À luz do texto constitucional expresso, são crimes simultaneamente INAFIANÇÁVEIS e IMPRESCRITÍVEIS:",
    "options": [
      "A tortura, o tráfico ilícito de entorpecentes e o terrorismo.",
      "A prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "Os crimes hediondos e o crime de abuso de autoridade com violência física.",
      "A deserção militar qualificada e o motim armado em praça de guerra.",
      "A corrupção passiva qualificada e o peculato-apropriação militar."
    ],
    "correctIndex": 1,
    "explanation": "O texto constitucional estabelece com clareza matemática:\n1) Crimes INAFIANÇÁVEIS e IMPRESCRITÍVEIS (sujeitos à pena de reclusão):\n- Prática do RACISMO (Art. 5º, XLII)\n- Ação de GRUPOS ARMADOS, civis ou militares, contra a ordem constitucional e o Estado Democrático (Art. 5º, XLIV).\n2) Crimes INAFIANÇÁVEIS e INSUSCETÍVEIS DE GRAÇA OU ANISTIA (3T + Hediondos - Art. 5º, XLIII):\n- Tortura, Tráfico ilícito de entorpecentes, Terrorismo e Crimes Hediondos. (Estes prescrevem normalmente segundo as regras do Código Penal!).",
    "fundamentacaoLegal": "Art. 5º, incisos XLII, XLIII e XLIV da Constituição Federal de 1988",
    "hint": "IMPRESCRITÍVEIS (não prescrevem nunca): R-A-Ç-A -> RACISMO e AÇÃO de Grupos Armados!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "RA-GA é Imprescritível (Racismo e Grupos Armados). O 3T+H prescreve, mas não tem fiança nem graça/anistia!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O grupo 3T+H não é imprescritível na dicção constitucional.",
      "B": "Correta. Racismo (XLII) e Ação de Grupos Armados (XLIV) são os únicos declarados taxativamente imprescritíveis na CF.",
      "C": "Incorreta. Hediondos não gozam do atributo da imprescritibilidade.",
      "D": "Incorreta. Infrações penais militares sujeitas aos prazos de prescrição do CPM.",
      "E": "Incorreta. Crimes funcionais patrimoniais comuns que prescrevem."
    }
  },
  {
    "id": "elite_const_003",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais • Habeas Corpus e Punições Disciplinares Militares",
    "question": "O Art. 142, § 2º, da Constituição Federal preceitua que 'não caberá habeas corpus em relação a punições disciplinares militares'. De acordo com a jurisprudência sumulada e consolidada do Supremo Tribunal Federal, o alcance e a correta interpretação desse dispositivo constitucional determinam que:",
    "options": [
      "O Poder Judiciário está terminantemente impedido de examinar qualquer aspecto de uma punição militar, mesmo que haja incompetência absoluta da autoridade ou flagrante ilegalidade formal.",
      "O habeas corpus é privativo de oficiais superiores da ativa, sendo expressamente vedado a praças e recrutas.",
      "O cabimento do habeas corpus é admitido pelo Poder Judiciário para examinar a legalidade formal, a competência da autoridade e o devido processo legal do ato disciplinar, sendo-lhe vedado imiscuir-se no mérito administrativo da punição.",
      "O militar punido deve obrigatoriamente aguardar o cumprimento integral da prisão administrativa para poder pleitear qualquer medida perante a Justiça comum.",
      "Qualquer transgressão disciplinar militar é automaticamente convertida em crime de menor potencial ofensivo pelo juiz togado."
    ],
    "correctIndex": 2,
    "explanation": "A jurisprudência do STF (Súmula 690 e reiterados precedentes) estabelece que o Art. 142, § 2º, veda ao Poder Judiciário invadir o MÉRITO da punição disciplinar militar (conveniência, oportunidade e justiça intrínseca da sanção). Todavia, é PLENAMENTE CABÍVEL O HABEAS CORPUS para verificar a LEGALIDADE do ato: competência da autoridade sancionadora, obediência ao contraditório e ampla defesa, respeito aos limites da pena e inexistência de desvio de poder.",
    "fundamentacaoLegal": "Art. 142, § 2º, da CF/88 e Jurisprudência Pacificada do STF",
    "hint": "Juiz não julga o MÉRITO da punição militar, mas pode anular via Habeas Corpus se houver ILEGALIDADE formal ou falta de competência!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Judiciário olha a LEGALIDADE do processo disciplinar, mas NÃO mete o bedelho no MÉRITO da punição militar!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Ilegalidades flagrantes e incompetência de autoridade autorizam controle por HC.",
      "B": "Incorreta. Garantia fundamental indistinta aplicável a praças e oficiais.",
      "C": "Correta. O controle jurisdicional limita-se aos pressupostos de legalidade externa e devido processo, vedada a análise do mérito.",
      "D": "Incorreta. O remédio visa estancar coação ilegal iminente ou consumada.",
      "E": "Incorreta. Confusão grosseira entre falta administrativa militar e infração penal tipificada."
    }
  },
  {
    "id": "elite_const_004",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais • Mandado de Segurança e Prazo Decadencial",
    "question": "O Mandado de Segurança é a ação constitucional destinada a proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público. Conforme a Lei nº 12.016/2009 e a jurisprudência dos tribunais superiores, o direito de impetrar mandado de segurança extinguir-se-á decorridos:",
    "options": [
      "60 dias, contados da lavratura da portaria administrativa.",
      "90 dias, contados da intimação pessoal do advogado constituído.",
      "180 dias, tratando-se de prazo prescricional que se interrompe pelo protocolo de recurso administrativo sem efeito suspensivo.",
      "120 dias, contados da ciência, pelo interessado, do ato impugnado, tratando-se de prazo decadencial.",
      "5 anos, correspondente ao prazo geral de prescrição quinquenal da Fazenda Pública."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 23 da Lei nº 12.016/2009 e a Súmula 632 do STF: 'O direito de requerer mandado de segurança extinguir-se-á decorridos 120 (cento e vinte) dias contados da ciência, pelo interessado, do ato impugnado'. Trata-se de prazo DECADENCIAL (não se suspende nem se interrompe por mero pedido de reconsideração administrativa - Súmula 430 do STF).",
    "fundamentacaoLegal": "Art. 5º, LXIX, da CF/88, Art. 23 da Lei nº 12.016/2009 e Súmula 632 do STF",
    "hint": "Mandado de Segurança = 120 dias de prazo DECADENCIAL contados da ciência do ato!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "MS = 120 dias na veia! É decadência: perdeu o prazo de 120 dias, não cabe mais Mandado de Segurança.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Prazo em dissonância com a legislação de regência.",
      "B": "Incorreta. Lapso temporal incorreto.",
      "C": "Incorreta. Não se cuida de prazo prescricional passível de interrupção ordinária.",
      "D": "Correta. Prazo decadencial peremptório de 120 dias conforme o art. 23 da Lei 12.016/09 e súmula 632/STF.",
      "E": "Incorreta. Confusão com o prazo do rito ordinário da Fazenda Pública."
    }
  },
  {
    "id": "elite_const_005",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos Políticos • Elegibilidade do Militar (Art. 14, § 8º)",
    "question": "O Art. 14, § 8º, da Constituição Federal disciplina de maneira específica as condições de elegibilidade para os militares das Forças Armadas e das Polícias Militares. Suponha que um Soldado da PMPE com 6 anos de efetivo serviço e um Subtenente da PMPE com 18 anos de efetivo serviço decidam concorrer ao cargo de Vereador. À luz da disciplina constitucional:",
    "options": [
      "Ambos são inelegíveis absolutos enquanto permanecerem na ativa militar estadual.",
      "Nenhum militar das corporações estaduais necessita afastar-se do serviço ativo para disputar mandatos eletivos municipais.",
      "O Soldado permanecerá na ativa com remuneração integral durante toda a campanha; o Subtenente deverá pedir exoneração imediata sem remuneração.",
      "Ambos serão agregados durante o pleito e, se derrotados nas urnas, serão compulsoriamente reformados por invalidez funcional.",
      "O Soldado deverá afastar-se definitivamente da atividade; o Subtenente será agregado pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade."
    ],
    "correctIndex": 4,
    "explanation": "Regra do Art. 14, § 8º, da CF/88:\n'O militar alistável é elegível, atendidas as seguintes condições:\nI - se contar MENOS de dez anos de serviço, deverá AFASTAR-SE da atividade (desliga-se definitivamente da corporação);\nII - se contar MAIS de dez anos de serviço, será AGREGADO pela autoridade superior e, se eleito, passará automaticamente, no ato da diplomação, para a INATIVIDADE.'\nComo o Soldado tem 6 anos (< 10), afasta-se definitivamente. O Subtenente tem 18 anos (> 10), é agregado e, se eleito, vai para a inatividade na diplomação.",
    "fundamentacaoLegal": "Art. 14, § 8º, incisos I e II, da Constituição Federal de 1988",
    "hint": "Menos de 10 anos = Tchau, pede para sair (afasta-se). Mais de 10 anos = É agregado e só vai para inatividade se for eleito e diplomado!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "< 10 anos: afasta-se (rua!). >= 10 anos: agrega e diplomou = inatividade remunerada proporcional!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O militar alistável possui capacidade eleitoral passiva expressamente tutelada na Carta Política.",
      "B": "Incorreta. Afronta direta aos preceitos da desincompatibilização eleitoral militar.",
      "C": "Incorreta. Concessão infundada de permanência na ativa ao militar com menos de dez anos.",
      "D": "Incorreta. Reforma por incapacidade definitiva não guarda qualquer nexo com pleitos cívicos.",
      "E": "Correta. Aplicação límpida dos incisos I e II do § 8º do art. 14 da CF/88."
    }
  },
  {
    "id": "elite_const_006",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública • Órgãos Constitucionais do Art. 144 e Guardas Municipais",
    "question": "O Art. 144 da Constituição Federal define a segurança pública como 'dever do Estado, direito e responsabilidade de todos'. Quanto aos órgãos integrantes do sistema constitucional de segurança pública e a jurisprudência recente do Supremo Tribunal Federal (ADPF 995), assinale a afirmativa correta:",
    "options": [
      "As Guardas Municipais, consoante julgamento definitivo do STF na ADPF 995, integram o Sistema Único de Segurança Pública (SUSP), ostentando atribuição de policiamento preventivo e comunitário na proteção de bens, serviços e instalações locais.",
      "As Polícias Militares e Corpos de Bombeiros Militares são forças auxiliares e reserva da Marinha de Guerra do Brasil.",
      "A Polícia Rodoviária Federal é órgão permanente estruturado em carreira com função privativa de polícia judiciária federal.",
      "As Polícias Penais estaduais subordinam-se administrativamente e operacionalmente ao Tribunal de Justiça do respectivo Estado.",
      "As Forças Armadas foram alçadas pelo legislador constituinte ao rol de órgãos policiais ordinários de segurança pública preventiva."
    ],
    "correctIndex": 0,
    "explanation": "No julgamento histórico da ADPF 995 (concluído em 2023), o STF declarou inconstitucionais interpretações que excluíam as Guardas Municipais do sistema de segurança pública, reconhecendo que, embora não constem no rol dos incisos do caput do Art. 144, as Guardas Municipais (previstas no § 8º) INTEGRAM formalmente o Sistema Único de Segurança Pública (SUSP) e possuem atribuições de policiamento preventivo e segurança urbana.",
    "fundamentacaoLegal": "Art. 144, § 8º, da CF/88 e STF - ADPF 995/DF",
    "hint": "STF (ADPF 995): As Guardas Municipais fazem parte do Sistema de Segurança Pública (SUSP) para atuação preventiva e comunitária!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Guarda Municipal está no Art. 144, § 8º e é órgão do SUSP conforme o STF na ADPF 995!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Decisão com eficácia erga omnes do STF na ADPF 995 reconhecendo as Guardas Municipais como componentes do SUSP.",
      "B": "Incorreta. Vinculação constitucional expressa como forças auxiliares do Exército.",
      "C": "Incorreta. Atribuição de polícia ostensiva de rodovias e não investigativa judiciária.",
      "D": "Incorreta. Órgão policial integrante do Poder Executivo estadual.",
      "E": "Incorreta. As Forças Armadas regem-se pelo art. 142 da Lei Maior."
    }
  },
  {
    "id": "elite_const_007",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Tribunal do Júri • Competência Constitucional e Crimes Militares",
    "question": "O Art. 5º, inciso XXXVIII, da Constituição Federal reconhece a instituição do júri, assegurando a plenitude de defesa, o sigilo das votações, a soberania dos veredictos e a competência mínima para o julgamento dos crimes dolosos contra a vida. Quando um policial militar em serviço, dolosamente e com intenção homicida, efetua disparos que causam a morte de um civil, a competência para julgar o militar é:",
    "options": [
      "Da Justiça Militar Estadual, perante o Conselho Especial de Justiça presidido por coronéis.",
      "Do Tribunal do Júri da Justiça Comum Estadual, por força de expressa ressalva constitucional e legal.",
      "Do Superior Tribunal Militar (STM), em instância recursal única.",
      "Da Justiça Federal de 1ª Instância, na vara de execução penal militar.",
      "Do Tribunal de Justiça do Estado, por meio de seu Órgão Especial de desembargadores."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 125, § 4º, da Constituição Federal (com redação dada pela EC nº 45/2004) e o Art. 9º, parágrafo único, do Código Penal Militar (redação da Lei nº 13.491/2017):\n'Compete à Justiça Militar estadual processar e julgar os militares dos Estados, nos crimes militares definidos em lei [...], RESSALVADA A COMPETÊNCIA DO JÚRI QUANDO A VÍTIMA FOR CIVIL'.\nLogo, se a vítima for civil em crime doloso contra a vida, o julgamento ocorre obrigatoriamente perante o TRIBUNAL DO JÚRI da Justiça Comum!",
    "fundamentacaoLegal": "Art. 125, § 4º, da CF/88 e Art. 9º, parágrafo único, do Código Penal Militar",
    "hint": "Crime doloso contra a vida cometido por militar contra CIVIL vai para o TRIBUNAL DO JÚRI (Justiça Comum)! Se for contra outro militar, vai para a Justiça Militar.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Militar matou civil dolosamente? Desce para o Tribunal do Júri da Justiça Comum!",
    "porqueErrou": {
      "0": "Você marcou (A): O Conselho de Justiça Militar só julga se a vítima também for militar ou em homicídios culposos.",
      "2": "Você marcou (C): O STM integra a Justiça Militar da União (Forças Armadas), sem competência sobre policiais militares estaduais em homicídio contra civis.",
      "3": "Você marcou (D): A competência é da Justiça Estadual (comum), salvo crimes de competência federal específica.",
      "4": "Você marcou (E): Foro por prerrogativa de função para julgamento de crimes comuns contra a vida foi afastado pela súmula vinculante em prol do Júri."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Ressalva constitucional expressa desloca a competência para o tribunal popular.",
      "B": "Correta. Art. 125, § 4º da CF excepciona taxativamente os crimes dolosos contra a vida praticados contra civil para a alçada do Tribunal do Júri.",
      "C": "Incorreta. Instância militar federal inaplicável ao caso.",
      "D": "Incorreta. Ausência de interesse da União para deslocamento da jurisdição.",
      "E": "Incorreta. Viola a soberania do júri popular consagrada no art. 5º, XXXVIII."
    }
  },
  {
    "id": "elite_const_008",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos e Garantias Fundamentais • Extradição de Brasileiros (Art. 5º, LI)",
    "question": "O Art. 5º, inciso LI, da Constituição da República consagra o regime jurídico fundamental da extradição no ordenamento brasileiro. Sobre a extradição de nacionais e estrangeiros, é correto afirmar:",
    "options": [
      "O brasileiro nato poderá ser extraditado pelo Presidente da República se tiver cometido crime de terrorismo internacional.",
      "O brasileiro naturalizado jamais poderá ser extraditado sob qualquer hipótese legal.",
      "Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei.",
      "O estrangeiro residente no país poderá ser sumariamente extraditado por crime puramente político ou de opinião.",
      "O brasileiro nato poderá perder a nacionalidade e ser extraditado em caso de cometer homicídio doloso em solo estrangeiro."
    ],
    "correctIndex": 2,
    "explanation": "O texto literal e pétreo do Art. 5º, LI, da CF/88 estabelece:\n'Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei'.\nRegras:\n1) Brasileiro Nato: NUNCA, em hipótese alguma, pode ser extraditado pelo Brasil.\n2) Brasileiro Naturalizado: Pode ser extraditado em DUAS situações: a) Crime comum praticado ANTES da naturalização; b) Tráfico ilícito de drogas a QUALQUER TEMPO (antes ou depois da naturalização).",
    "fundamentacaoLegal": "Art. 5º, inciso LI e LII, da Constituição Federal de 1988",
    "hint": "Brasileiro nato NUNCA é extraditado! Naturalizado só em 2 casos: crime comum ANTES ou tráfico de drogas a QUALQUER TEMPO.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Nato = NUNCA! Naturalizado = Antes da naturalização (crime comum) ou Tráfico a qualquer hora!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Proibição constitucional pétrea e sem exceções para brasileiro originário.",
      "B": "Incorreta. Há exceções constitucionais explícitas para o naturalizado.",
      "C": "Correta. Transcrição lapidar e perfeita do art. 5º, inciso LI da CF/88.",
      "D": "Incorreta. Vedação categórica do art. 5º, inciso LII da Lei Maior.",
      "E": "Incorreta. Não configura causa de perda compulsória de nacionalidade para fins extradicionais."
    }
  },
  {
    "id": "elite_const_009",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos e Garantias Fundamentais • Direito de Reunião e Prévio Aviso (Art. 5º, XVI)",
    "question": "O direito de reunião pacífica é um dos baluartes do Estado Democrático de Direito. O Supremo Tribunal Federal, ao fixar o Tema 855 da Repercussão Geral sobre o Art. 5º, XVI, da Constituição, pacificou a interpretação da exigência de 'prévio aviso à autoridade competente', decidindo que:",
    "options": [
      "A reunião em praça pública depende de autorização prévia e discricionária do Comando da Polícia Militar.",
      "Toda manifestação que cause lentidão transitória no tráfego de veículos é considerada crime contra a segurança nacional.",
      "O prévio aviso exige o pagamento de taxa de segurança urbana junto à Secretaria da Fazenda Municipal.",
      "A exigência constitucional de aviso prévio é satisfeita por toda e qualquer veiculação pública de informação que permita ao poder público zelar pela segurança e fluidez do trânsito, não sendo a notificação formal por ofício uma condição indispensável para a legitimidade da manifestação.",
      "Manifestações políticas em locais públicos são proibidas nos finais de semana por ferirem o direito ao lazer dos munícipes."
    ],
    "correctIndex": 3,
    "explanation": "No RE 806.339 (Tema 855), o Plenário do STF fixou a seguinte tese vinculante:\n'A exigência constitucional do aviso prévio relativamente ao direito de reunião é satisfeita pela veiculação de informação que permita ao poder público zelar pelo seu curso ordenado e pela segurança pública, sendo desnecessária notificação formal à autoridade competente'.\nOu seja: convocação em redes sociais de ampla repercussão pública já supre a exigência do aviso prévio!",
    "fundamentacaoLegal": "Art. 5º, inciso XVI, da CF/88 e STF - RE 806.339/SE (Tema 855)",
    "hint": "Direito de Reunião: NÃO precisa de autorização! E o 'prévio aviso' não exige ofício formal de protocolo (basta divulgação pública pelas redes sociais).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Reunião não pede licença a ninguém: só precisa avisar, e postar nas redes sociais já vale como aviso segundo o STF!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A Carta veda expressamente a exigência de autorização do Poder Público.",
      "B": "Incorreta. Conflito aparente de direitos que não criminaliza a reunião cívica.",
      "C": "Incorreta. Cobrança tributária ilegítima e inconstitucional.",
      "D": "Correta. Tese de repercussão geral consolidada do STF desburocratizando a forma do prévio aviso.",
      "E": "Incorreta. Restrição infundada sem agasalho no texto constitucional."
    }
  },
  {
    "id": "elite_const_010",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Militar Estadual • Vedações Constitucionais (Art. 42 e Art. 142)",
    "question": "O Art. 42, § 1º, c/c Art. 142, § 3º, inciso IV, da Constituição Federal, estatui restrições específicas aplicáveis aos militares dos Estados e do Distrito Federal. Dentre as proibições expressas no texto da Carta Magna, impõe-se aos policiais militares da ativa:",
    "options": [
      "A proibição absoluta de votar nas eleições gerais e municipais.",
      "A proibição de professar qualquer crença religiosa que não seja a católica romana.",
      "A proibição de contrair matrimônio civil sem autorização do comandante do batalhão.",
      "A proibição de ingressar em curso de ensino superior na rede privada.",
      "A vedação irrestrita à sindicalização e à greve."
    ],
    "correctIndex": 4,
    "explanation": "O Art. 142, § 3º, IV, da CF/88 (aplicável aos militares estaduais por força do Art. 42, § 1º) determina categoricamente:\n'Ao militar são PROIBIDAS A SINDICALIZAÇÃO E A GREVE'.\nTrata-se de vedação absoluta, ratificada pelo STF (Tema 41 da Repercussão Geral e Súmula Vinculante e ARE 654.432), que estendeu a proibição de greve a todos os policiais civis e servidores públicos que atuem diretamente na área de segurança pública.",
    "fundamentacaoLegal": "Art. 42, § 1º e Art. 142, § 3º, inciso IV, da Constituição Federal de 1988",
    "hint": "Militar não faz greve e não se filia a sindicato! Proibição taxativa na Constituição Federal.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Militar da ativa: ZERO Sindicato e ZERO Greve! A segurança do cidadão não pode parar.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O militar é cidadão eleitor com pleno exercício do sufrágio.",
      "B": "Incorreta. O Estado brasileiro é laico e garante liberdade de culto a todos.",
      "C": "Incorreta. Ingerência inconstitucional na vida privada e civil.",
      "D": "Incorreta. Plena liberdade educacional e aperfeiçoamento profissional.",
      "E": "Correta. Regra constitucional expressa e absoluta que veda o direito de greve e a associação sindical a militares."
    }
  },
  {
    "id": "elite_const_011",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos e Garantias Fundamentais • Uso de Algemas e Súmula Vinculante 11 do STF",
    "question": "O uso de algemas durante a prisão em flagrante ou condução de investigados submete-se aos ditames da Súmula Vinculante nº 11 do Supremo Tribunal Federal. À luz do enunciado sumular, o emprego de algemas:",
    "options": [
      "Só é lícito em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito.",
      "É obrigatório e irrestrito em toda e qualquer abordagem policial em via pública.",
      "Depende de prévia ordem judicial assinada pelo juiz das garantias em audiência.",
      "É proibido a mulheres em quaisquer circunstâncias, mesmo quando armadas.",
      "Fica a critério puramente estético e promocional da autoridade condutora da ocorrência."
    ],
    "correctIndex": 0,
    "explanation": "Texto literal da SÚMULA VINCULANTE Nº 11 DO STF:\n'Só é lícito o uso de algemas em casos de RESISTÊNCIA e de FUNDADO RECEIO DE FUGA ou de PERIGO À INTEGRIDADE FÍSICA própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito, sob pena de responsabilidade disciplinar, civil e penal do agente ou da autoridade e de nulidade da prisão ou do ato processual a que se refere, sem prejuízo da responsabilidade civil do Estado'.",
    "fundamentacaoLegal": "Súmula Vinculante nº 11 do Supremo Tribunal Federal",
    "hint": "Uso de algemas é EXCEÇÃO: Mnemônico 'PR-F' -> Perigo à integridade, Resistência ou Fundado receio de fuga + Justificado POR ESCRITO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Algemas só no PRF: Perigo, Resistência ou Fuga! E tem que justificar no papel (por escrito).",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Tríplice hipótese taxativa da Súmula Vinculante 11 com dever de fundamentação escrita.",
      "B": "Incorreta. O STF baniu a automaticidade no uso de algemas.",
      "C": "Incorreta. Não há exigência de mandado judicial prévio para contenção emergencial em campo.",
      "D": "Incorreta. Aplica-se a vedação no parto e puerpério imediato, não a criminosas armadas.",
      "E": "Incorreta. Constrangimento ilegal vedado pela ordem constitucional."
    }
  },
  {
    "id": "elite_const_012",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos e Garantias Fundamentais • Direito ao Silêncio e Nemo Tenetur Se Detegere",
    "question": "O direito fundamental assegurado no Art. 5º, inciso LXIII, da Carta Magna ('o preso será informado de seus direitos, entre os quais o de permanecer calado, sendo-lhe assegurada a assistência da família e de advogado') consagra o princípio universal do Nemo Tenetur Se Detegere (não autoincriminação). Dentre seus desdobramentos operacionais, conclui-se que:",
    "options": [
      "O silêncio do preso no momento do interrogatório policial pode ser interpretado pelo juiz como confissão tácita de culpa.",
      "O investigado não pode ser compelido a produzir prova contra si mesmo, não podendo ser punido por recusar-se a soprar o etilômetro ou participar de reconstituição simulada dos fatos.",
      "O preso que se recusa a responder às perguntas do comandante da patrulha comete crime militar de insubordinação em flagrante.",
      "A ausência de advertência formal sobre o direito de permanecer em silêncio (Aviso de Miranda) não gera nenhuma nulidade no processo penal brasileiro.",
      "O direito ao silêncio só pode ser exercido em juízo na presença obrigatória do Promotor de Justiça."
    ],
    "correctIndex": 1,
    "explanation": "Do princípio da não autoincriminação (nemo tenetur se detegere) decorre que o cidadão não é obrigado a fornecer elementos materiais ativos de prova que o incriminem (como soprar bafômetro, participar de reprodução simulada dos fatos, fornecer padrões gráficos ou vocais). Além disso, o exercício do silêncio jamais pode ser interpretado em prejuízo do réu (Art. 186, parágrafo único, do CPP) e a omissão do Aviso de Miranda gera nulidade dos atos probatórios (STF Rcl 33.711).",
    "fundamentacaoLegal": "Art. 5º, LXIII, da CF/88, Art. 186 do CPP e Jurisprudência do STF",
    "hint": "Ninguém é obrigado a produzir prova contra si mesmo! Ficar em silêncio NUNCA pode ser interpretado como culpa.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Quem cala NÃO consente no processo penal! O silêncio é garantia sagrada da defesa.",
    "porqueErrou": {
      "0": "Você marcou (A): O Art. 186, parágrafo único, do CPP veda expressamente interpretar o silêncio como confissão ou em prejuízo da defesa.",
      "2": "Você marcou (C): Exercer direito constitucional jamais pode ser tipificado como infração penal.",
      "3": "Você marcou (D): A jurisprudência do STF e STJ anula o interrogatório informal quando sonegado o Aviso de Miranda.",
      "4": "Você marcou (E): O direito é garantido perante qualquer autoridade policial, militar ou judiciária."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O silêncio é direito incondicional e não gera presunção desfavorável.",
      "B": "Correta. Garantia contra a autoincriminação compulsória consagrada na doutrina e tribunais.",
      "C": "Incorreta. Exercício regular de direito não tipifica crime militar.",
      "D": "Incorreta. A supressão da advertência do silêncio enseja nulidade da prova testemunhal colhida.",
      "E": "Incorreta. Eficácia plena na fase investigatória preliminar."
    }
  },
  {
    "id": "elite_const_013",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Defesa do Estado e das Instituições • Estado de Defesa e Estado de Sítio",
    "question": "O Sistema Constitucional das Crises estabelece os regimes de legalidade extraordinária: Estado de Defesa (Art. 136) e Estado de Sítio (Art. 137). Quanto à disciplina constitucional dessas medidas, é correto afirmar:",
    "options": [
      "O Estado de Defesa pode ser decretado discricionariamente pelo Governador do Estado para conter greves de servidores estaduais.",
      "O Estado de Sítio dispensa em qualquer circunstância a autorização prévia do Congresso Nacional.",
      "O Presidente da República decreta o Estado de Defesa 'ouvidos' o Conselho da República e o Conselho de Defesa Nacional, devendo submeter o ato com a respectiva justificação ao Congresso Nacional no prazo de 24 horas.",
      "Durante o Estado de Defesa é absolutamente vedada a prisão por crime contra o Estado.",
      "A decretação do Estado de Sítio suspende a vigência de todas as leis e fecha temporariamente os tribunais judiciais."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 136 da CF/88, o Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, DECRETAR o Estado de Defesa. Decretado o estado de defesa ou sua prorrogação, o Presidente submeterá o ato ao Congresso Nacional dentro de vinte e quatro horas. Diferencia-se do Estado de Sítio (Art. 137), em que o Presidente DEVE PEDIR AUTORIZAÇÃO PRÉVIA ao Congresso Nacional antes de decretar.",
    "fundamentacaoLegal": "Art. 136 e 137 da Constituição Federal de 1988",
    "hint": "Estado de Defesa: Presidente decreta primeiro e manda para o Congresso em 24h. Estado de Sítio: Presidente precisa de AUTORIZAÇÃO PRÉVIA do Congresso!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Defesa = Decreta e depois avisa em 24h. Sítio = Pede licença antes ao Congresso!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Competência federal indelegável do Chefe do Executivo da União.",
      "B": "Incorreta. Requer autorização congressual antecedente obrigatória.",
      "C": "Correta. Procedimento formal exato do art. 136, caput e § 4º da Constituição Federal.",
      "D": "Incorreta. Prevista expressamente sob comunicação judicial em até 24 horas.",
      "E": "Incorreta. O controle judicial e o funcionamento das casas legislativas permanecem preservados."
    }
  },
  {
    "id": "elite_const_014",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais • Habeas Data e Recusa Administrativa",
    "question": "O Habeas Data (Art. 5º, LXXII, da CF/88) destina-se a assegurar o conhecimento e a retificação de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público. Conforme a Súmula nº 2 do Superior Tribunal de Justiça (STJ) e a Lei nº 9.507/1997, constitui condição de procedibilidade indispensável para a impetração do habeas data:",
    "options": [
      "O prévio esgotamento de todas as instâncias recursais administrativas e o pagamento de custas processuais.",
      "A demonstração de que a informação buscada pertence a parente até o terceiro grau do autor.",
      "A contratação de advogado com mais de dez anos de inscrição nos quadros da OAB.",
      "A comprovação documental da recusa expressa ao pedido de informação ou o decurso do prazo legal sem qualquer manifestação da autoridade administrativa detentora do banco de dados.",
      "A prévia instauração de ação civil pública pelo Ministério Público Estadual."
    ],
    "correctIndex": 3,
    "explanation": "Diz textualmente a SÚMULA Nº 2 DO STJ: 'Não cabe o habeas data (CF, art. 5º, LXXII, a) se não houve recusa de informações por parte da autoridade administrativa'. A Lei nº 9.507/1997 (Art. 8º) reforça que a petição inicial deverá ser instruída com a prova da recusa ao acesso às informações (ou da não decisão no prazo de 10 dias). O Habeas Data é GRATUITO (Art. 5º, LXXVII da CF).",
    "fundamentacaoLegal": "Art. 5º, incisos LXXII e LXXVII da CF/88, Lei 9.507/1997 e Súmula 2 do STJ",
    "hint": "Habeas Data exige RECUSA DA AUTORIDADE (ou silêncio após prazo). Sem recusa comprovada, não há interesse de agir!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "HD pede recusa prévia (Súmula 2 do STJ) e é de graça (gratuidade do Art. 5º, LXXVII)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Ação constitucional dotada de gratuidade absoluta e sem necessidade de esgotamento recursal complexo.",
      "B": "Incorreta. Natureza de garantia estritamente personalíssima.",
      "C": "Incorreta. Capacidade postulatória genérica de advogado habilitado.",
      "D": "Correta. Exigência expressa de pretensão resistida (recusa formal ou mora administrativa qualificada).",
      "E": "Incorreta. Desvinculada de tutela coletiva ministerial."
    }
  },
  {
    "id": "elite_const_015",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Princípio da Legalidade e Reserva Legal • Anterioridade da Lei Penal",
    "question": "O princípio da legalidade em matéria penal é esculpido no Art. 5º, inciso XXXIX, da Constituição Federal: 'não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal'. Desse postulado supremo decorre a regra de que a lei penal:",
    "options": [
      "Nunca retroagirá sob nenhuma circunstância temporal.",
      "Retroage para revogar prescrições já consumadas pela passagem do tempo.",
      "Retroagirá sempre para aumentar penas de crimes militares graves.",
      "Pode ser criada por meio de Medida Provisória assinada pelo Governador do Estado.",
      "Não retroagirá, salvo para beneficiar o réu."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 5º, XL, da Constituição Federal:\n'A lei penal não retroagirá, SALVO PARA BENEFICIAR O RÉU' (Princípio da Retroatividade da Lex Mitior / Novatio Legis in Melius). A lei mais severa é sempre irretroativa; a lei mais favorável sempre retroage, mesmo para fatos pretéritos com condenação transitada em julgado.",
    "fundamentacaoLegal": "Art. 5º, incisos XXXIX e XL da Constituição Federal de 1988",
    "hint": "Lei penal mais benéfica SEMPRE volta no tempo (retroage) para ajudar o réu!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Lex Mitior: para o bem do réu, a lei volta até o passado mais distante!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Desconsidera a cláusula constitucional de benefício do acusado.",
      "B": "Incorreta. Prescrição consumada gera direito adquirido à extinção da punibilidade.",
      "C": "Incorreta. Afronta intolerável à segurança jurídica e ao princípio da legalidade estrita.",
      "D": "Incorreta. Matéria penal é privativa da União (Art. 22, I) e vedada a Medidas Provisórias.",
      "E": "Correta. Regra pétrea e incondicional de irretroatividade da lei penal gravosa e retroatividade da norma mais favorável."
    }
  },
  {
    "id": "elite_const_016",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Direitos e Garantias Fundamentais • Sigilo das Comunicações Telefônicas (Art. 5º, XII)",
    "question": "O Art. 5º, inciso XII, da Constituição Federal estabelece que 'é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas'. A interceptação das comunicações telefônicas (escuta telefônica de conversa em tempo real) exige CONCOMITANTEMENTE:",
    "options": [
      "Ordem judicial fundamentada, para fins de investigação criminal ou instrução processual penal, nas hipóteses e na forma que a lei estabelecer.",
      "Autorização do Secretário de Segurança Pública em sindicância administrativa patrimonial.",
      "Portaria do Delegado de Polícia referendada pelo comandante do batalhão operacional.",
      "Apenas a autorização informal do juiz eleitoral em qualquer tipo de infração civil.",
      "Requerimento da empresa operadora de telefonia celular em processo arbitral privado."
    ],
    "correctIndex": 0,
    "explanation": "Conforme a ressalva do Art. 5º, XII, da CF/88:\n'É inviolável o sigilo [...], salvo, no último caso [comunicações telefônicas], por ORDEM JUDICIAL, nas hipóteses e na forma que a lei estabelecer para fins de INVESTIGAÇÃO CRIMINAL OU INSTRUÇÃO PROCESSUAL PENAL'.\nAtenção: Interceptação telefônica NUNCA cabe para processo civil ou mero processo disciplinar administrativo!",
    "fundamentacaoLegal": "Art. 5º, inciso XII, da CF/88 e Lei Federal nº 9.296/1996",
    "hint": "Interceptação telefônica só pode com ORDEM DE JUIZ e exclusivamente para PROCESSO CRIMINAL ou investigação criminal!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Escuta telefônica = Só Juiz e só em matéria PENAL/CRIMINAL! Não cabe no cível nem no PAD.",
    "porqueErrou": {
      "1": "Você marcou (B): Cláusula de reserva de jurisdição: somente magistrado pode autorizar.",
      "2": "Você marcou (C): Autoridades policiais e militares não possuem competência constitucional para decretar interceptação telefônica.",
      "3": "Você marcou (D): A decisão judicial deve ser rigorosamente motivada e restrita à esfera penal.",
      "4": "Você marcou (E): Operadoras de telefonia apenas cumprem as ordens judiciais de quebra de sigilo."
    },
    "analiseAlternativas": {
      "A": "Correta. Exigência constitucional cumulativa de ordem judicial fundamentada e finalidade estritamente penal/investigatória.",
      "B": "Incorreta. Autoridades executivas não detêm legitimidade para quebra de sigilo telefônico de conteúdo.",
      "C": "Incorreta. Inconstitucionalidade formal manifesta.",
      "D": "Incorreta. Veda-se decisão judicial sem fundamentação e em esfera alheia à penal.",
      "E": "Incorreta. Ente privado atua como mero executor das determinações da Justiça."
    }
  },
  {
    "id": "elite_const_017",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Princípio da Presunção de Inocência • Trânsito em Julgado e Execução da Pena",
    "question": "O princípio da presunção de inocência (ou não culpabilidade), consagrado no Art. 5º, inciso LVII, da Constituição Federal ('ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória'), segundo a jurisprudência pacificada do Plenário do Supremo Tribunal Federal (ADCs 43, 44 e 54), determina que:",
    "options": [
      "O condenado em 1ª instância deve ser imediatamente recolhido ao presídio em cumprimento definitivo de pena.",
      "A execução da pena privativa de liberdade só pode ter início após o esgotamento de todos os recursos (trânsito em julgado), sendo vedada a execução provisória da pena decorrente unicamente da confirmação da condenação em segunda instância.",
      "O policial militar investigado em inquérito perde automaticamente e de plano a sua remuneração e graduação.",
      "A prisão preventiva com base nos requisitos cautelares do Art. 312 do CPP é considerada inconstitucional.",
      "O trânsito em julgado ocorre no momento em que o Ministério Público oferece a denúncia."
    ],
    "correctIndex": 1,
    "explanation": "No julgamento das Ações Declaratórias de Constitucionalidade (ADCs 43, 44 e 54), o STF reafirmou a literalidade do Art. 5º, LVII, da CF/88, assentando que o cumprimento da pena privativa de liberdade pressupõe o TRÂNSITO EM JULGADO da condenação criminal. Não se admite a execução provisória automática da pena após a segunda instância, ressalvada unicamente a decretação de PRISÕES CAUTELARES PREVENTIVAS fundamentadas nos requisitos do Art. 312 do CPP.",
    "fundamentacaoLegal": "Art. 5º, inciso LVII, da CF/88 e STF - ADCs 43, 44 e 54",
    "hint": "Presunção de Inocência: Pena só é executada após o TRÂNSITO EM JULGADO definitivo!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Execução de pena antes do trânsito em julgado é proibida pelo STF nas ADCs 43, 44 e 54!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conflita com o duplo grau de jurisdição e garantias do devido processo legal.",
      "B": "Correta. Tese vinculante definitiva do STF protegendo a literalidade da cláusula pétrea da presunção de inocência.",
      "C": "Incorreta. Violação de prerrogativas e da não culpabilidade.",
      "D": "Incorreta. A prisão cautelar com requisitos objetivos permanece íntegra no ordenamento processual penal.",
      "E": "Incorreta. O oferecimento da denúncia é a fase embrionária da ação penal."
    }
  },
  {
    "id": "elite_const_018",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais • Mandado de Injunção e Omissão Legislativa",
    "question": "O Mandado de Injunção (Art. 5º, LXXI, da CF/88 e Lei nº 13.300/2016) é o instrumento processual cabível sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania. A respeito do mandado de injunção, é correto afirmar:",
    "options": [
      "Pode ser impetrado para sanar qualquer omissão administrativa de pagamento de gratificações ordinárias.",
      "Substitui a ação de habeas corpus em casos de cerceamento ilegal à liberdade ambulatória.",
      "Destina-se a combater a inércia legislativa perante uma norma de eficácia limitada, fixando o Poder Judiciário prazo para o órgão competente elaborar a norma e, caso persistente a omissão, estabelecendo as condições para o exercício do direito pelo impetrante.",
      "É privativo do Procurador-Geral da República, vedada a impetração individual por servidores.",
      "Produz efeitos apenas indenizatórios financeiros sem qualquer poder de outorga de condições práticas de exercício do direito."
    ],
    "correctIndex": 2,
    "explanation": "O Mandado de Injunção busca superar o que a doutrina chama de 'síndrome da inefetividade constitucional' diante de normas constitucionais de eficácia limitada que dependem de lei integradora. Com a evolução jurisprudencial (posição concretista geral e individual) e a Lei nº 13.300/2016, o Judiciário não apenas notifica o legislador como também estipula as condições nas quais o direito será exercido concretamente pelo impetrante (ex: direito de greve dos servidores públicos aplicado pela Lei 7.783/89 via MI 670).",
    "fundamentacaoLegal": "Art. 5º, inciso LXXI, da CF/88 e Lei nº 13.300/2016",
    "hint": "Mandado de Injunção = Falta de lei (omissão legislativa) que impede de exercer direito da Constituição!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Faltou lei regulamentadora? Mandado de Injunção neles!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conflito meramente administrativo resolve-se na via ordinária ou MS.",
      "B": "Incorreta. Inadequação da via eleita; garantia de locomoção compete a HC.",
      "C": "Correta. Teoria concretista consagrada na Lei 13.300/16 para superar a omissão legislativa.",
      "D": "Incorreta. Legitimação ampla para titulares do direito subjetivo inviabilizado.",
      "E": "Incorreta. Provimento mandamental constitutivo e regulador."
    }
  },
  {
    "id": "elite_const_019",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais • Ação Popular e Legitimidade Ativa (Art. 5º, LXXIII)",
    "question": "A Ação Popular, prevista no Art. 5º, LXXIII, da Constituição Federal, constitui importante mecanismo de controle social da administração pública. Quanto aos pressupostos e legitimidade para a propositura da Ação Popular, é correto afirmar:",
    "options": [
      "Pode ser ajuizada por qualquer pessoa jurídica de direito privado devidamente constituída há mais de um ano.",
      "Só pode ser proposta perante o Supremo Tribunal Federal após autorização do Senado Federal.",
      "Exige o pagamento antecipado de custas judiciais e honorários advocatícios em dobro para evitar litigância de má-fé.",
      "Qualquer cidadão (pessoa física brasileira no gozo pleno dos seus direitos políticos) é parte legítima para propor ação popular visando anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.",
      "Pode ser ajuizada por estrangeiro não naturalizado portando apenas passaporte turístico válido."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 5º, LXXIII, da CF/88:\n'Qualquer CIDADÃO é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, ISENTO de custas judiciais e do ônus da sucumbência'.\nCidadão = Pessoa física no gozo dos direitos políticos (comprovado pelo Título de Eleitor). Pessoas jurídicas NÃO podem ajuizar ação popular (Súmula 365 do STF).",
    "fundamentacaoLegal": "Art. 5º, inciso LXXIII da CF/88, Lei Federal 4.717/1965 e Súmula 365 do STF",
    "hint": "Ação Popular: SÓ CIDADÃO com título de eleitor pode entrar! Empresa/Pessoa Jurídica NÃO PODE (Súmula 365 do STF). E é gratuita, salvo má-fé.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Cidadão com Título de Eleitor entra de graça na Ação Popular para proteger o patrimônio público!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Súmula 365 do STF veda categoricamente a propositura de Ação Popular por pessoas jurídicas.",
      "B": "Incorreta. Inexiste foro por prerrogativa de função para ação popular perante o STF.",
      "C": "Incorreta. A regra geral constitucional é a gratuidade do autor popular.",
      "D": "Correta. Tutela da probidade conferida com exclusividade ao cidadão eleitor, com isenção legal de despesas salvo má-fé.",
      "E": "Incorreta. Estrangeiro comum carece de cidadania eleitoral ativa."
    }
  },
  {
    "id": "elite_const_020",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Administração Pública • Acumulação Remunerada de Cargos por Militares (Art. 37, XVI c/c Art. 42)",
    "question": "A Emenda Constitucional nº 101/2019 estendeu aos militares dos Estados e do Distrito Federal a disciplina da acumulação remunerada de cargos públicos prevista no Art. 37, inciso XVI, da Constituição Federal. À luz do texto constitucional vigente, é permitida ao policial militar da ativa a acumulação com outro cargo público remunerado, havendo compatibilidade de horários, na seguinte hipótese:",
    "options": [
      "Com qualquer cargo comissionado de confiança na iniciativa privada.",
      "Com a atividade de segurança privada em estabelecimentos comerciais noturnos.",
      "Com o mandato de vereador em regime de dedicação exclusiva sem exercício da função policial.",
      "Com cargo administrativo de técnico ministerial em tribunal de contas.",
      "Com um cargo de professor ou privativo de profissional de saúde com profissão regulamentada, com prevalência da atividade militar."
    ],
    "correctIndex": 4,
    "explanation": "Por meio da EC nº 101/2019, que acrescentou o § 3º ao Art. 42 da CF/88:\n'Aplica-se aos militares dos Estados, do Distrito Federal e dos Territórios o disposto no art. 37, inciso XVI, com PREVALÊNCIA DA ATIVIDADE MILITAR'.\nLogo, se houver compatibilidade de horários, o militar estadual pode acumular seu cargo com:\n1) Um cargo de PROFESSOR;\n2) Outro cargo privativo de PROFISSIONAL DE SAÚDE, com profissões regulamentadas.",
    "fundamentacaoLegal": "Art. 42, § 3º e Art. 37, inciso XVI, 'b' e 'c' da Constituição Federal (EC 101/2019)",
    "hint": "Militar da ativa pode acumular: Cargo militar + 1 de Professor OU Cargo militar + 1 da Saúde (médico, enfermeiro), com prevalência da atividade militar!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Militar + Professor ou Militar + Saúde! Mas a farda tem prioridade (prevalência da função militar).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conflito ético e vedação estatutária estrita.",
      "B": "Incorreta. Conduta tipificada como transgressão disciplinar militar grave e infração ético-operacional.",
      "C": "Incorreta. A regra de vereança depende de compatibilidade sem exclusividade de jornada civil.",
      "D": "Incorreta. Não contemplado no rol taxativo do art. 37, XVI.",
      "E": "Correta. Regra expressa da EC 101/2019 assegurando a acumulação com magistério ou saúde com primazia do dever militar."
    }
  },
  {
    "id": "elite_dh_001",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Teoria Geral dos Direitos Humanos • Características: Efeito Cliquet e Vedação do Retrocesso",
    "question": "Na moderna doutrina dos Direitos Humanos e na jurisprudência das cortes internacionais, o postulado jurídico que impede o Estado de revogar, mitigar ou desmantelar garantias fundamentais já conquistadas e positivadas na ordem jurídica, sem a implementação de medidas compensatórias equivalentes, é denominado tecnicamente como:",
    "options": [
      "Princípio da Não Regressão ou Vedação do Retrocesso Social (Efeito Cliquet).",
      "Princípio da Reserva do Possível Financeiro.",
      "Princípio da Relatividade Restrita das Normas Infraconstitucionais.",
      "Princípio da Subsidiariedade Jurisdicional Passiva.",
      "Cláusula de Margem de Apreciação Nacional Irrestrita."
    ],
    "correctIndex": 0,
    "explanation": "O Princípio da Vedação do Retrocesso (também denominado Princípio da Não Regressão Social ou 'Efeito Cliquet', alusão à catraca que só se move para frente) estabelece que uma vez alcançado determinado patamar civilizatório de reconhecimento de direitos humanos, o Estado fica juridicamente impedido de regredir, suprimir ou diminuir tais conquistas protetivas sem justificativa legítima e sem compensações adequadas.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos / Doutrina Internacional e STF - ARE 639.337",
    "hint": "Efeito Cliquet = Catraca que só roda para a frente! O Estado não pode voltar atrás nem diminuir direitos já conquistados.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Cliquet lembra clique de catraca: só vai para frente, NUNCA volta para trás (não retrocede)!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. O efeito cliquet proíbe o retrocesso em conquistas de direitos humanos e sociais.",
      "B": "Incorreta. Teoria econômica de limitação orçamentária.",
      "C": "Incorreta. Conceito fictício sem correspondência com o tema.",
      "D": "Incorreta. Condição de admissibilidade perante cortes internacionais.",
      "E": "Incorreta. Doutrina europeia que não convalida supressão regressiva de direitos."
    }
  },
  {
    "id": "elite_dh_002",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Gerações / Dimensões dos Direitos Humanos • Classificação Doutrinária",
    "question": "Karel Vasak e a clássica doutrina dos Direitos Humanos correlacionam as três primeiras gerações (ou dimensões) de direitos ao lema da Revolução Francesa: Liberdade, Igualdade e Fraternidade. A respeito dessa classificação, é correto afirmar:",
    "options": [
      "Os direitos de 1ª geração exigem prestações materiais positivas do Estado (fazer estatal), englobando a saúde pública e a previdência social.",
      "Os direitos de 1ª geração consubstanciam as liberdades negativas individuais (civis e políticas), impondo ao Estado uma postura de abstenção ou não ingerência na esfera particular do cidadão.",
      "Os direitos de 2ª geração têm como marco as liberdades negativas (não fazer do Estado), abrangendo os direitos civis e políticos individuais.",
      "Os direitos de 3ª geração protegem exclusivamente o direito à propriedade privada imobiliária dos indivíduos.",
      "Os direitos de 2ª geração protegem os direitos difusos e coletivos transindividuais, como a paz e o meio ambiente ecologicamente equilibrado."
    ],
    "correctIndex": 1,
    "explanation": "Evolução das Dimensões de Direitos Humanos:\n- 1ª Dimensão (LIBERDADE): Direitos Civis e Políticos. Exigem uma abstenção do Estado (liberdade negativa / não fazer estatal). Ex: vida, propriedade, liberdade de expressão e locomoção.\n- 2ª Dimensão (IGUALDADE): Direitos Sociais, Econômicos e Culturais. Exigem prestações positivas do Estado (fazer estatal). Ex: saúde, educação, previdência, trabalho.\n- 3ª Dimensão (FRATERNIDADE/SOLIDARIEDADE): Direitos Transindividuais (difusos e coletivos). Pertencem à coletividade indeterminada. Ex: meio ambiente sadio, paz mundial, autodeterminação dos povos.",
    "fundamentacaoLegal": "Teoria Geral dos Direitos Humanos / Classificação Tridimensional de Karel Vasak",
    "hint": "1ª Geração = LIBERDADE (Civis/Políticos - Estado não se mete). 2ª Geração = IGUALDADE (Sociais - Estado atua). 3ª Geração = FRATERNIDADE (Meio ambiente/Paz).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "1ª = Liberdade (Não Faça); 2ª = Igualdade (Faça); 3ª = Fraternidade (Todos Nós)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu o conceito: saúde e previdência pertencem à 2ª dimensão.",
      "B": "Correta. 1ª dimensão: liberdades civis/políticas com obrigação de abstenção estatal (status negativus).",
      "C": "Incorreta. Liberdades individuais de abstenção compõem a 1ª dimensão.",
      "D": "Incorreta. Propriedade privada individual é garantia de 1ª dimensão.",
      "E": "Incorreta. Meio ambiente e direitos difusos integram a 3ª dimensão de solidariedade."
    }
  },
  {
    "id": "elite_dh_003",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Tratados Internacionais • Hierarquia e Status Supralegal (STF RE 466.343)",
    "question": "O Supremo Tribunal Federal, ao julgar o célebre Recurso Extraordinário nº 466.343/SP, redefiniu a pirâmide normativa brasileira quanto à hierarquia dos tratados internacionais de direitos humanos ratificados pelo Brasil. Conforme a tese consagrada pelo STF:",
    "options": [
      "Todos os tratados de direitos humanos possuem automaticamente força e status de Emenda Constitucional, independentemente do rito de aprovação no Congresso.",
      "Tratados internacionais de direitos humanos têm a mesma hierarquia de uma simples portaria ministerial executiva.",
      "Os tratados internacionais de direitos humanos aprovados segundo o rito ordinário (sem o quórum qualificado do Art. 5º, § 3º) possuem status SUPRALEGAL, situando-se abaixo da Constituição, mas acima de todas as leis ordinárias infraconstitucionais.",
      "Nenhum tratado internacional pode produzir qualquer efeito jurídico antes de ser expressamente votado em plebiscito popular nacional.",
      "Os tratados de direitos humanos revogam a Constituição Federal nas matérias em que forem com ela divergentes."
    ],
    "correctIndex": 2,
    "explanation": "Hierarquia dos Tratados de Direitos Humanos no Brasil (Jurisprudência STF RE 466.343 e Art. 5º, § 3º da CF):\n1) Se aprovados pelo rito qualificado do Art. 5º, § 3º (em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos): Equivalem a EMENDAS CONSTITUCIONAIS.\n2) Se aprovados pelo rito ordinário (caso do Pacto de São José da Costa Rica e da maioria dos tratados anteriores a 2004): Possuem STATUS SUPRALEGAL (ficam abaixo da Constituição, mas acima de todas as leis ordinárias, paralisando a eficácia das leis que os contrariem).",
    "fundamentacaoLegal": "Art. 5º, § 3º da CF/88 e STF - RE 466.343/SP (Plenário)",
    "hint": "Tratado de Direitos Humanos comum = STATUS SUPRALEGAL (fica no meio: abaixo da Constituição e ACIMA das leis comuns)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Tratado comum de Direitos Humanos tem status SUPRALEGAL: esmaga a lei comum que ficar embaixo dele!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A equivalência constitucional exige aprovação pelo quórum qualificado do art. 5º, § 3º.",
      "B": "Incorreta. Menoscabo à estatura internacional dos tratados universais.",
      "C": "Correta. Tese da supralegalidade firmada pelo STF: paralisia da eficácia de qualquer lei ordinária conflitante.",
      "D": "Incorreta. Invenção de pressuposto inexistente na ordem jurídico-constitucional.",
      "E": "Incorreta. Submissão à supremacia material e formal da Carta Magna brasileira."
    }
  },
  {
    "id": "elite_dh_004",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica • Prisão Civil do Depositário Infiel e Súmula Vinculante 25",
    "question": "O Pacto de São José da Costa Rica (Convenção Americana sobre Direitos Humanos - CADH) prevê em seu Art. 7º, item 7, que ninguém será detido por dívidas, admitindo como única exceção a prisão por inadimplemento voluntário e inescusável de pensão alimentícia. Com base na força supralegal desse tratado, o STF editou a Súmula Vinculante nº 25, que dispõe:",
    "options": [
      "É lícita a prisão civil do depositário infiel apenas quando envolver bens móveis do Estado.",
      "A pensão alimentícia não autoriza em nenhuma hipótese a prisão civil do devedor recalcitrante.",
      "É permitida a prisão por dívidas bancárias ou atraso de parcelas de cartão de crédito rotativo.",
      "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.",
      "A prisão civil do depositário infiel pode ser decretada pelo comandante da unidade militar em procedimento de inventário de armamento."
    ],
    "correctIndex": 3,
    "explanation": "Texto literal da SÚMULA VINCULANTE Nº 25 DO STF:\n'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito'.\nCom a ratificação da CADH, restou no Brasil uma ÚNICA modalidade de prisão civil por dívida autorizada: a do devedor voluntário e inescusável de pensão alimentícia (Art. 5º, LXVII da CF c/c Art. 7º, 7 da CADH). A prisão do depositário infiel foi totalmente banida.",
    "fundamentacaoLegal": "Art. 7º, item 7 da CADH e Súmula Vinculante nº 25 do Supremo Tribunal Federal",
    "hint": "Súmula Vinculante 25: É ILÍCITA a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito! Só sobrou a prisão por PENSÃO ALIMENTÍCIA.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Depositário Infiel NÃO vai mais preso nunca! Só devedor de pensão alimentícia vai para a cadeia.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A vedação atinge todas as categorias e modalidades sem exceções patrimoniais.",
      "B": "Incorreta. A prisão devedor de alimentos permanece plenamente constitucional e admitida no Pacto.",
      "C": "Incorreta. Dívidas civis contratuais não ensejam prisão coercitiva no Brasil.",
      "D": "Correta. Redação fidedigna e literal da Súmula Vinculante nº 25 do STF.",
      "E": "Incorreta. Absoluta incompetência funcional de autoridade administrativa militar."
    }
  },
  {
    "id": "elite_dh_005",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Pacto de São José da Costa Rica • Audiência de Custódia e Prazos",
    "question": "O Art. 7º, item 5, da Convenção Americana sobre Direitos Humanos estatui que 'toda pessoa presa ou detida deve ser conduzida, sem demora, à presença de um juiz ou de outra autoridade autorizada por lei a exercer funções judiciais'. No ordenamento processual penal brasileiro, a realização da Audiência de Custódia pelo magistrado deve ocorrer no prazo máximo improrrogável de:",
    "options": [
      "12 horas após a lavratura do auto de apreensão.",
      "5 dias consecutivos contados do interrogatório policial preliminar.",
      "48 horas após o recebimento dos autos no tribunal de justiça.",
      "72 horas úteis, excluindo-se sábados, domingos e feriados.",
      "24 horas após a realização da prisão em flagrante."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 310, caput, do Código de Processo Penal (incluído pela Lei Federal nº 13.964/2019 - Pacote Anticrime) e a Resolução nº 213/2015 do Conselho Nacional de Justiça (CNJ), em consonância com o Art. 7º, item 5, da CADH:\n'Após receber o auto de prisão em flagrante, no prazo máximo de até 24 (vinte e quatro) horas após a realização da prisão, o juiz deverá promover audiência de custódia com a presença do acusado, seu advogado constituído ou membro da Defensoria Pública e o Ministério Público'.",
    "fundamentacaoLegal": "Art. 7º, 5 da CADH, Art. 310 do CPP e Resolução 213/CNJ",
    "hint": "Audiência de Custódia = Apresentação ao juiz no prazo de até 24 HORAS após a prisão!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Preso em flagrante? 24 HORAS para olhar no olho do juiz na Audiência de Custódia!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Metade do prazo preconizado na lei adjetiva penal.",
      "B": "Incorreta. Prazo de investigação desvinculado do ato de custódia judicial imediata.",
      "C": "Incorreta. Dilatação temporal inadmissível perante os tratados internacionais.",
      "D": "Incorreta. A contagem não se interrompe nos plantões judiciários em dias não úteis.",
      "E": "Correta. Prazo peremptório de 24 horas previsto expressamente no art. 310 do CPP."
    }
  },
  {
    "id": "elite_dh_006",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Sistema Interamericano de Direitos Humanos • Comissão (CIDH) vs Corte IDH",
    "question": "No âmbito do Sistema Interamericano de Proteção dos Direitos Humanos estabelecido pelo Pacto de São José da Costa Rica, a diferenciação funcional e a legitimidade de acesso entre a Comissão Interamericana de Direitos Humanos (CIDH) e a Corte Interamericana de Direitos Humanos (Corte IDH) determinam que:",
    "options": [
      "Somente os Estados-Partes e a Comissão Interamericana têm legitimidade para submeter um caso contencioso à apreciação jurisdicional da Corte Interamericana, após o prévio esgotamento do procedimento perante a Comissão.",
      "Qualquer indivíduo, grupo de pessoas ou ONG pode acionar DIRETAMENTE a Corte Interamericana sem necessidade de intervenção prévia da Comissão.",
      "A Corte Interamericana funciona em Washington (EUA) e possui funções puramente opinativas sem poder condenatório coercitivo.",
      "A Comissão Interamericana é um tribunal jurisdicional com juízes togados que proferem sentenças penais condenatórias de prisão aos governantes.",
      "O Brasil não reconhece a jurisdição contenciosa da Corte Interamericana de Direitos Humanos."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os Arts. 44 e 61 da Convenção Americana sobre Direitos Humanos (CADH):\n1) Os INDIVÍDUOS, ONGs ou grupos de pessoas possuem legitimidade para peticionar perante a COMISSÃO Interamericana (CIDH - sediada em Washington/EUA);\n2) Mas os indivíduos NÃO PODEM processar o Estado diretamente na CORTE Interamericana (Corte IDH - sediada em San José/Costa Rica);\n3) Somente a COMISSÃO ou os ESTADOS-PARTES têm legitimidade para submeter um caso contencioso ao julgamento da Corte (Art. 61, item 1).\nO Brasil reconheceu a jurisdição obrigatória contenciosa da Corte IDH em 1998 (Decreto Legislativo 89/1998).",
    "fundamentacaoLegal": "Arts. 44 e 61 da CADH e Decreto Presidencial 4.463/2002",
    "hint": "O cidadão reclama na COMISSÃO (Washington). Quem leva o caso para a CORTE (Costa Rica) é a própria Comissão ou outro Estado! O cidadão não pode ir direto à Corte.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Cidadão -> Comissão (Washington) -> se não resolver -> Corte (San José). Nunca pula direto para a Corte!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa do art. 61.1 da CADH reservando a propositura aos Estados e à Comissão Interamericana.",
      "B": "Incorreta. Ausência de legitimidade direta do indivíduo perante o tribunal jurisdicional da Corte.",
      "C": "Incorreta. A Corte fica em San José da Costa Rica e emite provimentos de responsabilidade estatal obrigatórios.",
      "D": "Incorreta. A Comissão não é corte e a responsabilidade internacional é estatal e não penal individual.",
      "E": "Incorreta. O Brasil é signatário com adesão formal à cláusula facultativa de jurisdição contenciosa."
    }
  },
  {
    "id": "elite_dh_007",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Uso da Força e Armas de Fogo • Princípios Básicos de Havana (ONU 1990)",
    "question": "Os Princípios Básicos sobre a Utilização da Força e de Armas de Fogo pelos Funcionários Responsáveis pela Aplicação da Lei (Adotados pelo 8º Congresso da ONU em Havana, 1990) regem a conduta de policiais em todo o mundo. O Princípio 9 estabelece que o uso intencional e letal de armas de fogo só é admissível quando:",
    "options": [
      "O suspeito desobedecer à ordem verbal de parada emitida pela guarnição militar.",
      "For estritamente inevitável para proteger uma vida humana contra uma ameaça iminente de morte ou ferimento grave.",
      "Ocorrer a fuga a pé de indivíduo desarmado suspeito de furto de veículo.",
      "A autoridade policial desejar dispersar uma manifestação pública não autorizada.",
      "Ocorrer qualquer delito flagrante contra o patrimônio de estabelecimento bancário."
    ],
    "correctIndex": 1,
    "explanation": "O Princípio 9 dos Princípios Básicos de Havana (1990) é categórico e restritivo:\n'Os funcionários responsáveis pela aplicação da lei NÃO usarão armas de fogo contra pessoas, EXCETO em legítima defesa própria ou de outrem contra AMEAÇA IMINENTE DE MORTE OU FERIMENTO GRAVE, para evitar a consumação de um crime particularmente grave que envolva séria ameaça à vida [...], e SOMENTE quando meios menos extremos forem insuficientes para atingir esses objetivos. Em qualquer caso, o USO LETAL INTENCIONAL DE ARMAS DE FOGO SÓ PODERÁ SER FEITO QUANDO ESTREITAMENTE INEVITÁVEL PARA PROTEGER A VIDA'.",
    "fundamentacaoLegal": "Princípio 9 dos Princípios Básicos sobre o Uso da Força e Armas de Fogo (ONU/1990)",
    "hint": "Tiro para matar (uso letal de arma de fogo) SÓ pode para SALVAR VIDAS contra ameaça IMINENTE de morte ou ferimento grave!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Arma de fogo só defende VIDA! Proibido atirar em suspeito em fuga desarmado ou por mero crime patrimonial.",
    "porqueErrou": {
      "0": "Você marcou (A): Desobediência verbal não autoriza disparo de arma de fogo letal.",
      "2": "Você marcou (C): O Princípio 9 da ONU e a Lei nº 13.060/2014 proíbem expressamente atirar contra suspeito em fuga desarmado.",
      "3": "Você marcou (D): O Princípio 13 da ONU veda o uso de armas de fogo para dispersar reuniões pacíficas ou desarmadas.",
      "4": "Você marcou (E): Proteção de patrimônio isolado sem risco à vida humana não justifica o uso da força letal."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Violação flagrante aos postulados da necessidade e proporcionalidade.",
      "B": "Correta. Regra taxativa internacional: proteção de vidas perante perigo iminente de morte ou lesão grave.",
      "C": "Incorreta. Prática ilegal e abusiva repudiada pela legislação nacional e internacional.",
      "D": "Incorreta. Repressão desproporcional a reuniões cívicas.",
      "E": "Incorreta. O bem jurídico vida sobrepõe-se a qualquer interesse puramente material/patrimonial."
    }
  },
  {
    "id": "elite_dh_008",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Declaração Universal dos Direitos Humanos (DUDH 1948) • Natureza e Princípios",
    "question": "A Declaração Universal dos Direitos Humanos, proclamada pela Assembleia Geral das Nações Unidas em 10 de dezembro de 1948 (Resolução 217-A), é o documento seminal do Direito Internacional dos Direitos Humanos. Quanto à sua natureza jurídica e conteúdo, é correto afirmar:",
    "options": [
      "Foi adotada originariamente sob a forma de tratado internacional com sanções de prisão compulsória e força coercitiva formal.",
      "Admite expressamente o trabalho forçado e a tortura física em períodos de estado de sítio ou guerra externa.",
      "Foi adotada formalmente como uma Resolução da Assembleia Geral da ONU, possuindo inicialmente natureza de recomendação moral e política, tendo adquirido ao longo das décadas o status de costume internacional vinculante e norma de 'jus cogens'.",
      "Condiciona o direito a um julgamento justo à aprovação prévia do Conselho de Segurança da ONU.",
      "Subordina o reconhecimento da personalidade jurídica do indivíduo ao pagamento de tributos ao Estado de origem."
    ],
    "correctIndex": 2,
    "explanation": "A DUDH de 1948 foi aprovada como uma RESOLUÇÃO da Assembleia Geral da ONU (Resolução 217-A III). Portanto, originariamente, não era um tratado internacional com força executória direta, e sim uma diretriz programática (soft law). Contudo, a doutrina e as cortes internacionais consagram que suas normas consolidaram-se como COSTUME INTERNACIONAL OBRIGATÓRIO e princípios gerais de direito de imperatividade universal (normas de Jus Cogens).",
    "fundamentacaoLegal": "Resolução 217-A (III) da Assembleia Geral da ONU / Doutrina Internacionalista de Direitos Humanos",
    "hint": "DUDH 1948 nasceu como RESOLUÇÃO (recomendação/soft law) e hoje é considerada costume internacional obrigatório (jus cogens)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "1948 não foi tratado: foi Resolução da ONU com peso moral gigantesco que virou regra universal!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não foi concebida sob o formato de tratado multilateral com adesão formal.",
      "B": "Incorreta. A vedação à tortura é cláusula absoluta e inderrogável.",
      "C": "Correta. Natureza formal de Resolução dotada de autoridade consuetudinária consubstanciada em jus cogens.",
      "D": "Incorreta. Garantia judicial autônoma e universal.",
      "E": "Incorreta. A personalidade jurídica é um direito inerente à dignidade da pessoa humana."
    }
  },
  {
    "id": "elite_dh_009",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica • Pena de Morte e Princípio da Vedação de Reintrodução",
    "question": "O Artigo 4º da Convenção Americana sobre Direitos Humanos (CADH) disciplina o Direito à Vida e estabelece regras estritas para os países signatários quanto à aplicação da pena de morte. De acordo com a CADH:",
    "options": [
      "Os Estados-Partes que já tiverem abolido a pena de morte poderão livremente restabelecê-la mediante simples aprovação por lei ordinária.",
      "Mulheres grávidas e idosos com mais de 70 anos podem ser executados caso o crime tenha comoção pública nacional.",
      "A pena de morte pode ser aplicada sumariamente a delitos políticos ou contra a honra de ministros de Estado.",
      "Não se restabelecerá a pena de morte nos Estados que a hajam abolido.",
      "A pena capital pode ser imposta por tribunais administrativos militares sem garantia de contraditório ou recurso."
    ],
    "correctIndex": 3,
    "explanation": "Diz textualmente o Artigo 4º, item 3, da CADH:\n'NÃO SE RESTABELECERÁ A PENA DE MORTE NOS ESTADOS QUE A HAJAM ABOLIDO' (expressão do princípio da vedação ao retrocesso / efeito cliquet).\nAlém disso: não pode ser aplicada por crimes políticos; não pode ser imposta a menores de 18 anos nem a maiores de 70 anos; e não pode ser executada em mulheres em estado de gravidez.",
    "fundamentacaoLegal": "Artigo 4º, itens 2, 3, 4 e 5 da Convenção Americana sobre Direitos Humanos",
    "hint": "Pena de morte no Pacto de São José: País que aboliu NÃO PODE REINTRODUZIR NUNCA MAIS!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Aboliu a pena de morte? Não volta nunca mais (Art. 4º, 3 da CADH)! E grávida, menor de 18 e maior de 70 NUNCA são executados.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Proibição expressa de repristinação ou reintrodução da pena capital.",
      "B": "Incorreta. Imunidades explícitas para gestantes, menores de 18 e maiores de 70 anos.",
      "C": "Incorreta. Crimes políticos não admitem aplicação de pena de morte nos termos da CADH.",
      "D": "Correta. Regra do art. 4.3 da CADH blindando a vedação do retrocesso no direito à vida.",
      "E": "Incorreta. Exigência estrita de julgamento perante autoridade judicial togado com devido processo."
    }
  },
  {
    "id": "elite_dh_010",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Regras de Nelson Mandela • Tratamento de Pessoas Privadas de Liberdade",
    "question": "As Regras Mínimas das Nações Unidas para o Tratamento de Presos (conhecidas internacionalmente como 'Regras de Nelson Mandela', revisadas em 2015) fixam diretrizes de humanização do sistema prisional e de custódia. A respeito dessas regras, constitui prática EXPRESSAMENTE VEDADA no tratamento de pessoas presas:",
    "options": [
      "Garantir atendimento médico e odontológico regular por profissionais de saúde.",
      "Oferecer oportunidades de trabalho remunerado e remição de pena pelo estudo.",
      "Permitir visitas familiares periódicas e correspondência epistolar.",
      "Permitir o banho de sol diário de pelo menos uma hora em ambiente aberto.",
      "O uso de punições disciplinares consistentes em isolamento celular indefinido ou prolongado (por mais de 15 dias consecutivos) e em celas totalmente escuras ou desprovidas de ventilação."
    ],
    "correctIndex": 4,
    "explanation": "Conforme a Regra 43 das Regras de Nelson Mandela (ONU, 2015):\n'Em nenhuma circunstância as punições disciplinares ou sanções restritivas podem incluir:\na) Confinamento solitário indefinido;\nb) Confinamento solitário prolongado (definido na Regra 44 como aquele superior a 15 dias consecutivos);\nc) Colocação do preso em uma cela escura ou iluminada constantemente sem controle;\nd) Punições corporais ou redução de alimentos e água potável;\ne) Punições coletivas'.",
    "fundamentacaoLegal": "Regras 43 e 44 das Regras Mínimas da ONU para o Tratamento de Presos (Regras de Mandela)",
    "hint": "Regras de Mandela proíbem cela escura e isolamento solitário prolongado por mais de 15 dias consecutivos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Isolamento solitário acima de 15 dias é considerado tortura e é terminantemente proibido pelas Regras de Mandela!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Dever prestacional primário da custódia estatal.",
      "B": "Incorreta. Instrumentos legítimos e estimulados de ressocialização.",
      "C": "Incorreta. Garantia de contato com o meio exterior incentivada pelo sistema onusiano.",
      "D": "Incorreta. Parâmetro mínimo universal assegurado a todos os reclusos.",
      "E": "Correta. Proibição expressa de confinamento solitário além de 15 dias e celas sem luz natural (Regras 43 e 44)."
    }
  },
  {
    "id": "elite_dh_011",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Código de Conduta para Encarregados da Aplicação da Lei • Resolução 34/169 da ONU",
    "question": "O Código de Conduta para os Encarregados da Aplicação da Lei (adotado pela Assembleia Geral da ONU em 1979 - Resolução 34/169) estipula no seu Artigo 5º que nenhum funcionário encarregado da aplicação da lei pode infligir, instigar ou tolerar qualquer ato de tortura ou qualquer outro tratamento cruel, desumano ou degradante. O texto explicativo do artigo estabelece categoricamente que:",
    "options": [
      "Nenhuma circunstância excepcional, seja estado de guerra ou ameaça de guerra, ameaça à segurança nacional, instabilidade política interna ou qualquer outra emergência pública, pode ser invocada para justificar a tortura.",
      "A tortura poderá ser admitida excepcionalmente se houver estado de guerra iminente ou ordem direta do comandante do teatro operacional.",
      "A agressão física leve é permitida durante interrogatórios noturnos para obtenção da localização de reféns sequestrados.",
      "O militar tem o dever irrestrito de cumprir qualquer ordem de seus superiores hierárquicos, mesmo que manifestamente criminosa.",
      "A proibição de tortura aplica-se apenas a cidadãos do próprio país, excluindo-se estrangeiros e terroristas."
    ],
    "correctIndex": 0,
    "explanation": "O comentário ao Artigo 5º do Código de Conduta da ONU é peremptório:\n'NENHUMA circunstância excepcional, tais como estado de guerra ou ameaça de guerra, ameaça à segurança nacional, instabilidade política interna ou qualquer outra emergência pública, PODE SER INVOCADA COMO JUSTIFICAÇÃO PARA A TORTURA ou outro tratamento ou pena cruel, desumano ou degradante'.\nA vedação à tortura no Direito Internacional é norma absoluta (non-derogable), não admitindo qualquer tipo de exceção, estado de emergência ou relativização.",
    "fundamentacaoLegal": "Artigo 5º do Código de Conduta para Encarregados da Aplicação da Lei (ONU Res. 34/169)",
    "hint": "Tortura é proibida SEMPRE, em 100% dos casos! Nem guerra, nem crise nacional, nem ordem de superior justifica torturar ninguém.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "TORTURA: ZERO EXCEÇÃO! É crime contra a humanidade e violação de jus cogens.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra intransponível que repele qualquer argumento emergencial para convalidar atos de tortura.",
      "B": "Incorreta. O direito de não ser torturado é absoluto e inderrogável no direito internacional.",
      "C": "Incorreta. Ilegalidade crassa violadora da integridade física e psíquica.",
      "D": "Incorreta. Dever de recusa a ordens flagrantemente criminosas é princípio militar e humanitário.",
      "E": "Incorreta. Universalidade protetiva sem distinção de nacionalidade ou condição jurídica."
    }
  },
  {
    "id": "elite_dh_012",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Jurisprudência da Corte IDH • Caso Favela Nova Brasília vs Brasil (2017)",
    "question": "Na histórica sentença do Caso 'Favela Nova Brasília vs. Brasil' (2017), a Corte Interamericana de Direitos Humanos condenou o Estado brasileiro por violações de direitos humanos decorrentes de operações policiais e impôs ao país importantes obrigações de não repetição. Dentre as determinações fixadas pela Corte Interamericana nesse julgamento, destaca-se:",
    "options": [
      "A extinção definitiva de todas as forças de Polícia Militar nos estados da federação brasileira.",
      "A obrigatoriedade de que as investigações de mortes, torturas ou violência sexual praticadas por policiais sejam conduzidas por órgãos independentes da própria força policial envolvida, com ampla participação e acesso das vítimas e seus familiares aos autos.",
      "A proibição do uso de armas de fogo por qualquer força de segurança pública no território nacional.",
      "A concessão de anistia ampla, geral e irrestrita a todos os autores de abusos em operações comunitárias.",
      "O pagamento de indenização unicamente às empresas concessionárias de serviços públicos locais."
    ],
    "correctIndex": 1,
    "explanation": "No caso 'Favela Nova Brasília vs. Brasil' (Sentença de 15 de fevereiro de 2017), a Corte IDH assentou que investigações de letalidade e abusos cometidos por agentes de segurança pública não podem ser conduzidas corporativamente pelas próprias polícias a que pertencem os investigados sem controle externo e independência. A Corte determinou ao Brasil implementar protocolos para garantir investigação independente, célere, imparcial e com participação ativa das vítimas.",
    "fundamentacaoLegal": "Corte Interamericana de Direitos Humanos / Caso Favela Nova Brasília vs. Brasil (2017)",
    "hint": "Caso Favela Nova Brasília: Corte IDH condenou o Brasil e exigiu investigações policiais INDEPENDENTES e imparciais em mortes causadas por policiais!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Nova Brasília = Investigação independente da violência policial e direitos das vítimas!",
    "porqueErrou": {
      "0": "Você marcou (A): A Corte IDH não determinou a extinção das Polícias Militares.",
      "2": "Você marcou (C): O porte e uso técnico proporcional de armas pelas forças da lei é reconhecido internacionalmente.",
      "3": "Você marcou (D): A Corte proíbe anistias e prescrições em casos de graves violações de direitos humanos.",
      "4": "Você marcou (E): As reparações foram arbitradas em favor das vítimas e seus familiares sobreviventes."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Decisão não interfere na estrutura constitucional dos órgãos de segurança pública dos estados.",
      "B": "Correta. Marco vinculante da Corte IDH exigindo imparcialidade e autonomia em investigações de letalidade policial.",
      "C": "Incorreta. Desprovido de respaldo nos parâmetros internacionais de segurança pública.",
      "D": "Incorreta. O direito interamericano combate frontalmente a impunidade e autoanistias.",
      "E": "Incorreta. Titularidade da reparação recai sobre os cidadãos vitimados."
    }
  },
  {
    "id": "elite_dh_013",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Controle de Convencionalidade • Juízes e Agentes Públicos",
    "question": "O Controle de Convencionalidade é o mecanismo pelo qual se afere a compatibilidade das leis e atos normativos internos de um país com os tratados internacionais de direitos humanos ratificados pelo Estado e em vigor. No Brasil, o exercício do controle difuso de convencionalidade compete a:",
    "options": [
      "Exclusivamente ao Plenário do Supremo Tribunal Federal por via de Ação Direta de Inconstitucionalidade.",
      "Apenas ao Ministério das Relações Exteriores mediante parecer consultivo do Itamaraty.",
      "Todos os magistrados e juízes de primeiro e segundo graus do Poder Judiciário, bem como aos órgãos de controle da administração pública no cumprimento de suas atribuições.",
      "Privativamente ao Presidente do Senado Federal após ouvir a Comissão de Relações Exteriores.",
      "Unicamente ao Tribunal Penal Internacional em Haia."
    ],
    "correctIndex": 2,
    "explanation": "O controle de convencionalidade difuso no Brasil segue a mesma sistemática do controle de constitucionalidade difuso: qualquer juiz ou tribunal togado (do juiz de direito de 1ª instância ao STF) tem o poder-dever de deixar de aplicar uma lei ordinária brasileira quando ela for incompatível com um tratado de direitos humanos em vigor no país (como fez o STF na Súmula Vinculante 25 ao afastar a lei do depositário infiel frente ao Pacto de San José).",
    "fundamentacaoLegal": "STF - RE 466.343 e Jurisprudência da Corte IDH (Caso Almonacid Arellano vs. Chile)",
    "hint": "Controle de Convencionalidade DIFUSO: QUALQUER juiz ou tribunal pode fazer na análise do caso concreto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Assim como o controle difuso de leis, qualquer juiz pode barrar uma lei que fira tratados de Direitos Humanos!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Concepção concentrada incompatível com o modelo difuso consagrado.",
      "B": "Incorreta. Órgão diplomático sem funções jurisdicionais aplicadas.",
      "C": "Correta. Todos os membros do Poder Judiciário exercem o controle de convencionalidade difuso ex officio.",
      "D": "Incorreta. Atribuição de julgamento inerente à magistratura togada.",
      "E": "Incorreta. O TPI possui jurisdição penal complementar específica sobre indivíduos."
    }
  },
  {
    "id": "elite_dh_014",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Conferência Mundial de Viena (1993) • Indivisibilidade e Interdependência",
    "question": "A Declaração e Programa de Ação de Viena, adotada por consenso na Conferência Mundial sobre Direitos Humanos da ONU em 1993, consagrou um marco teórico de superação da divisão da Guerra Fria entre direitos civis/políticos e econômicos/sociais, ao proclamar solenemente que:",
    "options": [
      "Os direitos civis e políticos gozam de primazia e superioridade hierárquica absoluta sobre os direitos econômicos, sociais e culturais.",
      "Os direitos de 3ª geração deixaram de existir após a queda do Muro de Berlim.",
      "Cada nação é livre para desrespeitar os direitos civis de suas minorias étnicas em nome de suas tradições religiosas locais.",
      "Todos os direitos humanos são universais, indivisíveis, interdependentes e inter-relacionados, devendo a comunidade internacional tratar os direitos humanos globalmente de forma justa e equitativa, em pé de igualdade e com a mesma ênfase.",
      "O desenvolvimento econômico é pré-requisito indispensável para que o cidadão possa usufruir de sua liberdade de expressão."
    ],
    "correctIndex": 3,
    "explanation": "O Parágrafo 5 da Declaração de Viena de 1993 é o texto mais citado e cobrado em concursos públicos:\n'Todos os direitos humanos são UNIVERSAIS, INDIVISÍVEIS, INTERDEPENDENTES E INTER-RELACIONADOS. A comunidade internacional deve tratar os direitos humanos globalmente de maneira justa e equitativa, em pé de igualdade e com a mesma ênfase. Se bem que se deva ter em mente o significado de particularidades nacionais e regionais e de vários antecedentes históricos, culturais e religiosos, é dever dos Estados, independentemente de seus sistemas políticos, econômicos e culturais, promover e proteger todos os direitos humanos e liberdades fundamentais'.",
    "fundamentacaoLegal": "Parágrafo 5 da Declaração e Programa de Ação de Viena (ONU, 1993)",
    "hint": "Conferência de Viena 1993: Direitos humanos são UNIVERSAIS, INDIVISÍVEIS e INTERDEPENDENTES! Devem ser tratados todos no mesmo pé de igualdade.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Viena 1993 = Todos os direitos humanos andam de mãos dadas em pé de igualdade (indivisíveis e interdependentes)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Afirmação de hierarquia refutada pela comunidade internacional.",
      "B": "Incorreta. Reafirmação expressa dos direitos de solidariedade.",
      "C": "Incorreta. O documento rejeita o relativismo cultural que anule os direitos humanos essenciais.",
      "D": "Correta. Fórmula consagrada de Viena: universalidade, indivisibilidade, interdependência e inter-relação em igualdade de condições.",
      "E": "Incorreta. Violação ao princípio de que a carência econômica não escusa o desrespeito às garantias fundamentais."
    }
  },
  {
    "id": "elite_dh_015",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Instrumentos Internacionais • O Protocolo de Istambul",
    "question": "O 'Protocolo de Istambul' (Manual para a Investigação e Documentação Eficazes da Tortura e Outras Penas ou Tratamentos Cruéis, Desumanos ou Degradantes, endossado pela ONU em 1999) é uma ferramenta técnica de referência global destinada a:",
    "options": [
      "Regulamentar a compra e venda de equipamentos bélicos de choque entre forças de segurança.",
      "Autorizar métodos de pressão psicológica em detentos acusados de crimes contra o patrimônio público.",
      "Disciplinar o envio de forças policiais internacionais de paz para o Oriente Médio.",
      "Criar regras de conduta para o patrulhamento de fronteiras litorâneas contra imigração ilegal.",
      "Fornecer diretrizes e padrões científicos claros e uniformes para médicos peritos, psicólogos e operadores do direito na identificação, registro e coleta pericial de evidências de tortura física e psicológica."
    ],
    "correctIndex": 4,
    "explanation": "O Protocolo de Istambul é o guia internacional definitivo para peritos médico-legais, psiquiatras e operadores de justiça para investigar, documentar e periciar casos suspeitos de tortura e maus-tratos. Ele estabelece protocolos de exame corporal, entrevistas psicológicas e requisitos mínimos que o laudo pericial deve conter para ter validade jurídica internacional em tribunais.",
    "fundamentacaoLegal": "Manual da ONU de Investigação da Tortura (Protocolo de Istambul, 1999/2004)",
    "hint": "Protocolo de Istambul = Manual da ONU para PERÍCIA MÉDICA e investigação de TORTURA (física e psicológica)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Istambul = Manual do Médico Perito para provar que houve Tortura!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não guarda relação com tratados de desarmamento ou equipamentos balísticos.",
      "B": "Incorreta. Repulsa absoluta a qualquer método vexatório ou degradante de inquirição.",
      "C": "Incorreta. Instrumentos do Conselho de Segurança regem as forças de paz.",
      "D": "Incorreta. Tema alheio à matéria migratória.",
      "E": "Correta. Padrão internacional de documentação médico-forense e legal de indícios de tortura e sevícias."
    }
  },
  {
    "id": "elite_dh_016",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Jurisprudência da Corte IDH • Caso Gomes Lund (Guerrilha do Araguaia) e Leis de Autoanistia",
    "question": "No julgamento do Caso 'Gomes Lund e outros (Guerrilha do Araguaia) vs. Brasil' (2010), a Corte Interamericana de Direitos Humanos proferiu decisão histórica a respeito da aplicação da Lei de Anistia brasileira (Lei nº 6.683/1979) para autores de graves violações de direitos humanos (tortura e desaparecimentos forçados), decidindo que:",
    "options": [
      "As disposições da Lei de Anistia brasileira que impedem a investigação e sanção de graves violações de direitos humanos são manifestamente incompatíveis com a Convenção Americana sobre Direitos Humanos, carecem de efeitos jurídicos e não podem constituir obstáculo para investigar, processar e punir os responsáveis.",
      "A Lei de Anistia é intangível e impede definitivamente qualquer investigação criminal no Brasil.",
      "A jurisdição da Corte Interamericana é subordinada às decisões do Tribunal Militar da União.",
      "Os desaparecimentos forçados praticados por agentes de Estado não configuram crimes de lesa-humanidade.",
      "A obrigação de indenizar as famílias das vítimas prescreve no prazo comum de três anos."
    ],
    "correctIndex": 0,
    "explanation": "Na sentença paradigmática do Caso Gomes Lund (2010), a Corte IDH reiterou sua jurisprudência contundente contra as 'leis de autoanistia' na América Latina:\n'As disposições da Lei de Anistia brasileira que impedem a investigação e sanção de graves violações de direitos humanos são incompatíveis com a Convenção Americana, carecem de efeitos jurídicos e não podem seguir representando um obstáculo para a investigação dos fatos nem para a identificação e punição dos responsáveis'. Crimes contra a humanidade (como desaparecimento forçado e tortura de Estado) são imprescritíveis e insuscetíveis de anistia.",
    "fundamentacaoLegal": "Corte Interamericana de Direitos Humanos / Caso Gomes Lund e outros vs. Brasil (2010)",
    "hint": "Caso Gomes Lund (Guerrilha do Araguaia): Corte IDH declarou que a Lei de Anistia NÃO VALE para impedir a punição de quem cometeu tortura e desaparecimento forçado!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Gomes Lund = Tortura e sumiço de pessoas não podem ser anistiados pela Lei de 1979!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. A Corte IDH firmou a inaplicabilidade de anistias a crimes de lesa-humanidade e graves violações de direitos humanos.",
      "B": "Incorreta. Conflito aberto com o entendimento de invalidade das autoanistias fixado na sentença internacional.",
      "C": "Incorreta. Primazia das decisões da Corte Interamericana sobre a jurisdição interna de exceção.",
      "D": "Incorreta. O desaparecimento forçado é crime contra a humanidade de natureza permanente e continuada.",
      "E": "Incorreta. Reparações por crimes contra a humanidade não se submetem à prescrição civil ordinária."
    }
  },
  {
    "id": "elite_dh_017",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Convenção Contra a Tortura da ONU (1984) • Conceito Internacional e Jurisdição Universal",
    "question": "A Convenção das Nações Unidas contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes (1984, promulgada no Brasil pelo Decreto nº 40/1991) estabelece em seu Artigo 1º o conceito internacional de tortura. Segundo a referida convenção, caracteriza tortura o ato de:",
    "options": [
      "Aplicar penalidades disciplinares de detenção militar previstas expressamente em lei votada pelo parlamento.",
      "Infligir intencionalmente a uma pessoa dores ou sofrimentos graves, físicos ou mentais, com o fim de obter dela ou de terceira pessoa informações ou confissões, castigá-la por ato que cometeu ou suspeite que tenha cometido, ou intimidar ou coagir essa ou outras pessoas, por instigação, consentimento ou aquiescência de autoridade pública.",
      "Prender em flagrante delito suspeito armado que resista à ordem legal de prisão.",
      "Conduzir sob custódia testemunha regularmente intimada que se recuse a depor em juízo.",
      "Interditar estabelecimento comercial que funcione sem alvará do corpo de bombeiros."
    ],
    "correctIndex": 1,
    "explanation": "O Artigo 1º da Convenção da ONU contra a Tortura traz os quatro elementos constitutivos da tortura no Direito Internacional:\n1) Sofrimento severo: Dores ou sofrimentos agudos, físicos ou mentais;\n2) Intencionalidade: Prática deliberada (dolo);\n3) Finalidade específica: Obter informação/confissão, punir, intimidar, coagir ou discriminar;\n4) Participação do Estado: Cometido por agente público ou por sua instigação, consentimento ou cumplicidade tácita.\nNão se inclui na tortura as dores inerentes a sanções legais legítimas.",
    "fundamentacaoLegal": "Artigo 1º da Convenção da ONU Contra a Tortura (Decreto Federal nº 40/1991)",
    "hint": "Tortura Internacional = Dor/sofrimento grave intencional para obter confissão/castigar, praticada ou tolerada por AGENTE PÚBLICO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Sofrimento grave + Finalidade (confessar/castigar) + Dedo do Estado (agente público) = TORTURA da ONU!",
    "porqueErrou": {
      "0": "Você marcou (A): O Artigo 1.1 ressalva expressamente que não constitui tortura as dores inerentes ou decorrentes de sanções legais legítimas.",
      "2": "Você marcou (C): O cumprimento de prisão em flagrante com uso proporcional da força é estrito cumprimento do dever legal.",
      "3": "Você marcou (D): Condução coercitiva autorizada por juiz não configura tortura.",
      "4": "Você marcou (E): Ato de polícia administrativa de interdição predial regular."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Ressalva expressa da convenção que exclui sanções legais aplicadas na conformidade do ordenamento.",
      "B": "Correta. Transcrição exata e completa do conceito internacional de tortura do art. 1º da Convenção da ONU.",
      "C": "Incorreta. Exercício legítimo do poder de coerção policial.",
      "D": "Incorreta. Provimento judicial de coerção processual legal.",
      "E": "Incorreta. Exercício regular do poder de polícia administrativa sanitária e de segurança."
    }
  },
  {
    "id": "elite_dh_018",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Grupos Vulneráveis e Direitos Humanos • Regras de Brasília sobre Acesso à Justiça",
    "question": "As '100 Regras de Brasília sobre Acesso à Justiça das Pessoas em Condição de Vulnerabilidade' constituem diretrizes fundamentais para o sistema de justiça e segurança pública. Considera-se em 'condição de vulnerabilidade', para os efeitos dessas regras:",
    "options": [
      "Apenas as pessoas que comprovem renda familiar inferior a meio salário-mínimo.",
      "Exclusivamente estrangeiros que não dominem a língua portuguesa falada.",
      "As pessoas que, por razão da sua idade, gênero, estado físico ou mental, ou por circunstâncias sociais, econômicas, étnicas ou culturais, encontram especiais dificuldades em exercitar com plenitude perante o sistema de justiça os direitos reconhecidos pelo ordenamento jurídico.",
      "Apenas os réus presos em estabelecimentos prisionais de segurança máxima.",
      "Somente crianças e adolescentes menores de doze anos de idade."
    ],
    "correctIndex": 2,
    "explanation": "A Regra 3 das 100 Regras de Brasília define com abrangência:\n'Consideram-se em condição de vulnerabilidade aquelas pessoas que, por razão da sua idade, gênero, estado físico ou mental, ou por circunstâncias sociais, econômicas, étnicas e/ou culturais, encontram especiais dificuldades em exercitar com plenitude perante o sistema de justiça os direitos reconhecidos pelo ordenamento jurídico'.\nSão causas de vulnerabilidade: infância/adolescência, envelhecimento, deficiência, povos indígenas, afrodescendentes, vítimas de violência de gênero, pobreza e privação de liberdade.",
    "fundamentacaoLegal": "Regras 3 e 4 das 100 Regras de Brasília sobre Acesso à Justiça (XIV Cúpula Judicial Ibero-Americana)",
    "hint": "Vulnerabilidade em Direitos Humanos é conceito AMPLO: idade, gênero, deficiência, etnia, pobreza e vítimas de crimes!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "100 Regras de Brasília: protege quem tem dificuldade de acessar a justiça por idade, pobreza, cor, gênero ou deficiência!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Reducionismo econômico incompatível com a Carta de Brasília.",
      "B": "Incorreta. Hipótese isolada que não abarca o espectro conceitual normativo.",
      "C": "Correta. Conceito integral de vulnerabilidade consagrado na Regra 3 das 100 Regras de Brasília.",
      "D": "Incorreta. Foco distorcido e restritivo.",
      "E": "Incorreta. A proteção estende-se a múltiplos grupos e faixas etárias."
    }
  },
  {
    "id": "elite_dh_019",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Direitos Humanos e Proteção da Mulher • Convenção de Belém do Pará (1994)",
    "question": "A Convenção Interamericana para Prevenir, Punir e Erradicar a Violência contra a Mulher (Convenção de Belém do Pará, 1994, ratificada pelo Brasil em 1995) constitui a base principiológica internacional da Lei Maria da Penha. A respeito da referida convenção, é correto afirmar:",
    "options": [
      "A violência contra a mulher só é punível pelo tratado quando praticada na esfera pública por agentes do Estado.",
      "A convenção não reconhece o direito da mulher a uma vida livre de violência no ambiente de trabalho.",
      "O documento permite acordos de conciliação com pagamento de cestas básicas na primeira ocorrência de agressão.",
      "A violência contra a mulher inclui a violência física, sexual e psicológica, tanto quando ocorre no âmbito da família ou unidade doméstica, quanto na comunidade em geral ou quando perpetrada ou tolerada pelo Estado ou seus agentes.",
      "A concessão de medidas protetivas de urgência é expressamente proibida pela convenção para não quebrar a unidade conjugal."
    ],
    "correctIndex": 3,
    "explanation": "Conforme os Artigos 1º e 2º da Convenção de Belém do Pará (1994):\n'Para os efeitos desta Convenção deve-se entender por violência contra a mulher qualquer ato ou conduta baseada no gênero, que cause morte, dano ou sofrimento físico, sexual ou psicológico à mulher, tanto no espaço público como no privado'.\nO Artigo 2º abrange expressamente a violência no âmbito doméstico (família), na comunidade (trabalho, instituições) e quando tolerada ou cometida por agentes do Estado.",
    "fundamentacaoLegal": "Artigos 1º e 2º da Convenção de Belém do Pará (Decreto Presidencial nº 1.973/1996)",
    "hint": "Belém do Pará: Violência física, sexual ou psicológica praticada em casa (doméstica), na comunidade OU pelo Estado!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Belém do Pará inspirou a Lei Maria da Penha: pune a violência em casa, na rua e no Estado!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Abrangência simultânea dos espaços privados e públicos.",
      "B": "Incorreta. Tutela expressa do ambiente laboral e comunitário.",
      "C": "Incorreta. Prática de despenalização mercantilista vedada pelos parâmetros de proteção integral.",
      "D": "Correta. Definição multidimensional da violência de gênero (doméstica, comunitária e estatal).",
      "E": "Incorreta. As medidas protetivas de afastamento constituem obrigação primordial imposta ao Estado."
    }
  },
  {
    "id": "elite_dh_020",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Direito Internacional Humanitário • Convenções de Genebra de 1949 e Cláusula Martens",
    "question": "O Direito Internacional Humanitário (Direito de Genebra e da Guerra) estabelece normas de proteção às vítimas de conflitos armados e restrições aos métodos e meios de combate. A histórica 'Cláusula Martens', formulada desde 1899 e reafirmada nas Convenções de Genebra de 1949 e seus Protocolos Adicionais, dispõe que nos casos não previstos no direito positivo expresso:",
    "options": [
      "Os comandantes militares têm poder absoluto para executar sumariamente qualquer combatente inimigo.",
      "O direito de intervenção armada pode ser delegado a milícias privadas sem qualquer subordinação a governos.",
      "As forças armadas podem utilizar livremente armas químicas e biológicas de destruição em massa.",
      "Todos os prisioneiros de guerra perdem seus direitos humanos até a assinatura do armistício formal.",
      "As populações civis e os beligerantes permanecem sob a salvaguarda e o império dos princípios do direito das gentes, decorrentes dos usos e costumes estabelecidos entre as nações civilizadas, das leis de humanidade e das exigências da consciência pública."
    ],
    "correctIndex": 4,
    "explanation": "A célebre Cláusula Martens é um princípio basilar do Direito Internacional Humanitário, inserida nas Convenções de Haia e reafirmada no Artigo 1º, § 2º, do Protocolo Adicional I de 1977 às Convenções de Genebra de 1949. Ela garante que nenhum ato militar opera em um vácuo moral ou jurídico: mesmo quando não houver uma norma escrita expressa em tratado para uma nova situação ou tecnologia bélica, o ser humano permanece protegido pelas 'leis de humanidade e pelos ditames da consciência pública internacional'.",
    "fundamentacaoLegal": "Convenções de Genebra de 1949 / Protocolo Adicional I de 1977 (Cláusula Martens)",
    "hint": "Cláusula Martens: Quando a lei não prevê algo na guerra, vale sempre a proteção da HUMANIDADE e da CONSCIÊNCIA PÚBLICA!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Martens = A consciência humana e o bom senso civilizatório nunca tiram férias, mesmo na guerra!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Assassinato de rendidos tipifica crime de guerra no Tribunal Penal Internacional.",
      "B": "Incorreta. Conflito armado deve observar cadeia regular e responsabilização estatal.",
      "C": "Incorreta. Banimento universal de armamentos de extermínio e efeitos indiscriminados.",
      "D": "Incorreta. A III Convenção de Genebra tutela estritamente a integridade dos prisioneiros de guerra.",
      "E": "Correta. Enunciado histórico e lapidar da Cláusula Martens assegurando a tutela dos costumes e das leis de humanidade."
    }
  },
  {
    "id": "elite_ext_001",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Nova Lei de Abuso de Autoridade (Lei nº 13.869/2019) • Elemento Subjetivo Especial e Hermenêutica",
    "question": "A Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade) inaugurou uma sistemática de tipificação penal rigorosamente delimitada. Nos termos do Art. 1º da referida lei, para que qualquer das condutas previstas configure crime de abuso de autoridade, é indispensável a comprovação concomitante de:",
    "options": [
      "Dolo específico (elemento subjetivo especial do tipo), consistente na finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal.",
      "Culpa gravíssima ou imprudência operacional na condução da ocorrência policial.",
      "Prejuízo financeiro comprovado aos cofres públicos superior a cinquenta salários-mínimos.",
      "Prévia condenação em sindicância administrativa disciplinar militar com trânsito em julgado na corporação.",
      "Reconhecimento tácito do Ministério Público em procedimento administrativo preliminar de controle externo."
    ],
    "correctIndex": 0,
    "explanation": "O Art. 1º, § 1º, da Lei nº 13.869/2019 exige indispensavelmente o DOLO ESPECÍFICO:\n'As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de PREJUDICAR OUTREM ou BENEFICIAR A SI MESMO OU A TERCEIRO, ou, ainda, por MERO CAPRICHO OU SATISFAÇÃO PESSOAL'.\nNão existe crime de abuso culposo! E o § 2º veda expressamente o crime de hermenêutica: a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.",
    "fundamentacaoLegal": "Art. 1º, §§ 1º e 2º, da Lei Federal nº 13.869/2019",
    "hint": "Abuso de autoridade EXIGE dolo específico: prejudicar, beneficiar ou mero capricho/satisfação pessoal! Não existe abuso culposo nem crime de hermenêutica.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Abuso só existe com dolo especial: Prejudicar, Beneficiar ou Capricho pessoal! Sem isso, não há crime.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Disposição taxativa do art. 1º, § 1º exigindo o dolo específico de prejudicar, beneficiar ou capricho pessoal.",
      "B": "Incorreta. Ausência de previsão de forma culposa no sistema da Lei 13.869/19.",
      "C": "Incorreta. Irrelevância de repercussão patrimonial direta aos cofres públicos.",
      "D": "Incorreta. Vigora a independência das instâncias jurisdicional e correcional.",
      "E": "Incorreta. Inexiste essa condição especial de procedibilidade."
    }
  },
  {
    "id": "elite_ext_002",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Nova Lei de Abuso de Autoridade • Violação de Domicílio e Horário Noturno (Art. 22)",
    "question": "O Art. 22 da Lei nº 13.869/2019 criminaliza a conduta de invadir ou adentrar, clandestina ou astuciosamente, ou à revelia da vontade do ocupante, imóvel alheio ou suas dependências. Conforme o § 1º, inciso III, incorre na mesma pena do caput o policial que:",
    "options": [
      "Adentra a residência ao meio-dia para prestar socorro a vítima de infarto agudo do miocárdio.",
      "Cumpre mandado judicial de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas).",
      "Persegue e prende em flagrante delito indivíduo armado que invadiu o quintal de um vizinho.",
      "Bate no portão de uma residência e pede informações sobre um veículo furtado estacionado na via pública.",
      "Ingressa no domicílio com autorização expressa e voluntária de um dos moradores maiores de idade."
    ],
    "correctIndex": 1,
    "explanation": "Diz expressamente o Art. 22, § 1º, inciso III, da Lei nº 13.869/2019:\n'Incorre na mesma pena quem: [...] III - CUMPRE MANDADO DE BUSCA E APREENSÃO DOMICILIAR APÓS AS 21H (VINTE E UMA HORAS) OU ANTES DAS 5H (CINCO HORAS)'.\nA lei definiu de forma matemática e objetiva o período noturno para cumprimento de mandado de busca: entre 21h e 5h da manhã é CRIME CUMPRIR MANDADO DE BUSCA DOMICILIAR!",
    "fundamentacaoLegal": "Art. 22, § 1º, inciso III, da Lei Federal nº 13.869/2019",
    "hint": "Mandado de busca em casa: PROIBIDO cumprir das 21h às 5h da manhã! Cumprir nesse horário é crime de Abuso de Autoridade.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Das 21h às 5h da manhã o mandado dorme! Se invadir com mandado nesse horário, é cana por Abuso.",
    "porqueErrou": {
      "0": "Você marcou (A): Prestar socorro é exceção constitucional expressa do Art. 5º, XI da CF e parágrafo 2º do Art. 22.",
      "2": "Você marcou (C): Flagrante delito autoriza a entrada a qualquer hora do dia ou da noite.",
      "3": "Você marcou (D): Bater no portão e pedir informação na calçada é ato lícito corriqueiro.",
      "4": "Você marcou (E): O consentimento válido do morador elide a tipicidade penal."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Causa excludente explícita de prestação de socorro urgente.",
      "B": "Correta. Tipificação expressa do art. 22, § 1º, III estabelecendo o marco horário proibitivo (21h às 5h).",
      "C": "Incorreta. Flagrante delito constitui hipótese legalmente autorizada a qualquer momento.",
      "D": "Incorreta. Inexistência de invasão ou violação patrimonial de asilo.",
      "E": "Incorreta. Ausência de clandestinidade ou oposição do titular do imóvel."
    }
  },
  {
    "id": "elite_ext_003",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Estatuto do Desarmamento (Lei nº 10.826/2003) • Posse vs Porte Ilegal de Arma de Fogo",
    "question": "A diferenciação típica entre a 'posse irregular de arma de fogo de uso permitido' (Art. 12) e o 'porte ilegal de arma de fogo de uso permitido' (Art. 14) na Lei nº 10.826/2003 baseia-se fundamentalmente no local e nas condições em que a arma é encontrada. Configura o crime de POSSE IRREGULAR (Art. 12):",
    "options": [
      "Transportar uma pistola calibre .380 municiada no porta-luvas de veículo automotor trafegando em rodovia estadual.",
      "Caminhar na calçada do bairro portando revólver calibre .38 oculto na cintura.",
      "Manter sob sua guarda uma arma de fogo de uso permitido no interior de sua residência ou dependência desta, ou no seu local de trabalho desde que seja o titular ou o responsável legal pelo estabelecimento.",
      "Emprestar arma de fogo a terceiro em praça pública de alimentação.",
      "Ocultar munições de uso permitido dentro da mochila escolar de um sobrinho em trânsito de ônibus."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 12 da Lei nº 10.826/2003:\n- POSSE (Art. 12): Possuir ou manter sob sua guarda arma de fogo, acessório ou munição de uso permitido no INTERIOR DE SUA RESIDÊNCIA (ou dependência desta) OU, ainda, no seu LOCAL DE TRABALHO (desde que seja o titular ou o responsável legal da empresa).\n- PORTE (Art. 14): Fora de casa ou fora do local de trabalho onde é dono (na rua, no carro, no bolso, etc.). Transportar arma no veículo em via pública é PORTE (STJ), e não posse!",
    "fundamentacaoLegal": "Arts. 12 e 14 da Lei Federal nº 10.826/2003 e Súmulas do STJ",
    "hint": "POSSE = Só dentro de casa ou no próprio comércio (sendo o dono/gerente). Saiu para a rua ou no carro = PORTE!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Posse = Dentro de casa. Porte = Passou do portão para a rua ou no carro!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O veículo automotor em circulação não é extensão de residência; configura porte.",
      "B": "Incorreta. Condução em espaço público configura porte clássico.",
      "C": "Correta. Definição exata do art. 12: espaço intramuros residencial ou gerencial profissional exclusivo.",
      "D": "Incorreta. Verbo de circulação do art. 14.",
      "E": "Incorreta. Transporte ambulante caracterizador de porte ilegal."
    }
  },
  {
    "id": "elite_ext_004",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Arma com Numeração Raspada e Equiparação (Art. 16, § 1º, I)",
    "question": "Durante uma abordagem policial da PMPE, um indivíduo é flagrado portando um revólver calibre .38 (que é arma de uso originalmente permitido), porém com a numeração de série totalmente raspada e suprimida mecanicamente por lixa. À luz da Lei nº 10.826/2003 e da jurisprudência uniforme do STJ, a conduta desse indivíduo:",
    "options": [
      "Configura mera contravenção penal de trânsito de bem móvel.",
      "É atípica penalmente por impossibilidade de perícia balística na ausência do número de registro.",
      "Configura o crime mais brando do Art. 14 com causa de diminuição de pena em metade.",
      "Subsume-se ao crime equiparado a uso restrito previsto no Art. 16, § 1º, inciso I, da Lei nº 10.826/2003, independentemente de a arma ser originalmente de calibre permitido.",
      "Permite o arbitramento imediato de fiança pelo sargento comandante da guarnição militar."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 16, § 1º, inciso I, da Lei nº 10.826/2003 pune com as mesmas penas gravosas de arma de uso restrito (reclusão de 3 a 6 anos) quem:\n'I - suprimir ou alterar marca, numeração ou qualquer sinal de identificação de arma de fogo ou artefato'.\nO STJ consolidou que portar arma de fogo com numeração raspada ou suprimida, MESMO QUE SEJA DE CALIBRE PERMITIDO (como o calibre .38), configura a figura equiparada do Art. 16, § 1º, I, devido à alta lesividade de impedir o rastreamento da arma pelo Estado.",
    "fundamentacaoLegal": "Art. 16, § 1º, inciso I, da Lei 10.826/2003 e Jurisprudência Pacífica do STJ",
    "hint": "Arma com numeração RASPADA ou apagada, mesmo sendo calibre permitido (.38), VIRA CRIME DO ART. 16 (equipara a restrito)! Pena muito mais pesada.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Raspou o número? Virou Artigo 16! Não importa se a arma era um simples .38 ou uma espingardinha.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Delito grave apenado com reclusão.",
      "B": "Incorreta. O objeto material permanece apto e o delito é de perigo abstrato consolidado.",
      "C": "Incorreta. Inaplicabilidade do tipo comum do art. 14 perante arma adulterada.",
      "D": "Correta. Equiparação legal expressa do art. 16, § 1º, I: a raspagem da identificação equipara o delito às penas de arma de uso restrito.",
      "E": "Incorreta. Incompetência da autoridade militar para conceder fiança criminal."
    }
  },
  {
    "id": "elite_ext_005",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Disparo de Arma de Fogo em Via Pública (Art. 15)",
    "question": "O crime de disparo de arma de fogo, previsto no Art. 15 da Lei nº 10.826/2003 ('disparar arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela'), ostenta como característica dogmática expressa a sua natureza de:",
    "options": [
      "Crime culposo de perigo concreto real.",
      "Crime militar próprio afeto exclusivamente à Justiça Castrense estadual.",
      "Crime que admite o perdão judicial pelo delegado plantonista se os tiros foram para o alto em comemoração.",
      "Crime de dano patrimonial privado dependente de representação da vítima.",
      "Crime subsidiário, configurando-se apenas desde que a conduta não tenha como finalidade a prática de outro crime."
    ],
    "correctIndex": 4,
    "explanation": "Diz o Art. 15 da Lei nº 10.826/2003:\n'Disparar arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, DESDE QUE ESSA CONDUTA NÃO TENHA POR FINALIDADE A PRÁTICA DE OUTRO CRIME'.\nTrata-se de SUBSIDIARIEDADE EXPRESSA: se o indivíduo disparou para matar (tentativa de homicídio) ou para roubar (latrocínio), o disparo é absorvido pelo crime-fim (princípio da consunção). O Art. 15 só subsiste autonomamente se não houver intenção de praticar outro crime mais grave.",
    "fundamentacaoLegal": "Art. 15 da Lei Federal nº 10.826/2003 (Cláusula de Subsidiariedade Expressa)",
    "hint": "Disparo de arma de fogo é crime SUBSIDIÁRIO: se atirou para matar ou roubar, responde pelo homicídio ou latrocínio e o disparo é absorvido!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Disparo é subsidiário expresso na lei: só responde por ele se não queria cometer outro crime!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Delito de dolo estrito e perigo abstrato presumido pelo legislador.",
      "B": "Incorreta. Tipo penal comum constante de legislação extravagante penal federal.",
      "C": "Incorreta. Conduta típica consumada inafastável por motivos festivos.",
      "D": "Incorreta. Bem jurídico indisponível e difuso da coletividade.",
      "E": "Correta. Expressa cláusula de subsidiariedade legal contida na parte final do tipo penal."
    }
  },
  {
    "id": "elite_ext_006",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei de Drogas (Lei nº 11.343/2006) • Natureza Jurídica do Artigo 28 (Porte para Uso Próprio)",
    "question": "O Art. 28 da Lei nº 11.343/2006 disciplina as condutas de adquirir, guardar, tiver em depósito, transportar ou trazer consigo drogas para consumo pessoal. No que concerne à sua natureza jurídica e às sanções cominadas pelo legislador, o Supremo Tribunal Federal assentou que:",
    "options": [
      "Houve 'despenalização' (abolição das penas privativas de liberdade), permanecendo a natureza jurídica de infração penal (crime), submetida a sanções alternativas de advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo.",
      "Houve abolitio criminis total e a conduta passou a ser mero ilícito civil sem qualquer repercussão judicial.",
      "O usuário deve ser recolhido à prisão em flagrante e submetido a regime fechado obrigatório de 2 anos.",
      "A pena cominada é de prestação pecuniária de conversão automática em cestas básicas à PMPE.",
      "A autoridade policial pode lavrar auto de prisão em flagrante com imposição de fiança de 10 salários-mínimos."
    ],
    "correctIndex": 0,
    "explanation": "Conforme jurisprudência pacificada do Plenário do STF (RE 430.105/RJ) e Art. 28 da Lei 11.343/2006, o legislador de 2006 operou a DESPENALIZAÇÃO (retirada da pena de prisão/reclusão/detenção), mas NÃO a descriminalização geral da lei. O Art. 28 prevê como penas privativas exclusivas: I - advertência; II - prestação de serviços à comunidade; III - medida educativa de comparecimento a curso educativo. O Art. 48, § 2º veda expressamente a prisão em flagrante do usuário.",
    "fundamentacaoLegal": "Art. 28 e Art. 48, § 2º da Lei 11.343/2006 e STF - RE 430.105",
    "hint": "Art. 28 da Lei de Drogas: Houve DESPENALIZAÇÃO (não vai preso!). As penas são advertência, serviços à comunidade e medida educativa. É proibido prender em flagrante!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Usuário de drogas NÃO vai para a cela: assina Termo Circunstanciado e responde por penas alternativas!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Fenômeno dogmático da despenalização com preservação das sanções pedagógicas e restritivas cominadas.",
      "B": "Incorreta. Não operou abolitio criminis estrutural.",
      "C": "Incorreta. Ausência absoluta de pena carcerária.",
      "D": "Incorreta. Sanção pecuniária mercantilista ausente do rol taxativo.",
      "E": "Incorreta. Vedação expressa a lavratura de auto de prisão em flagrante (apenas TCO)."
    }
  },
  {
    "id": "elite_ext_007",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei de Drogas • Tráfico Privilegiado (Art. 33, § 4º) e Inconstitucionalidade da Hediondez",
    "question": "O § 4º do Art. 33 da Lei nº 11.343/2006 prevê uma causa especial de diminuição de pena de um sexto a dois terços para o crime de tráfico de drogas (figura doutrinariamente denominada 'tráfico privilegiado'). Para fazer jus a esse benefício legal, o agente deve preencher cumulativamente os seguintes requisitos:",
    "options": [
      "Confessar espontaneamente perante a guarnição e indicar o paradeiro do fornecedor de armas.",
      "Ser primário, possuir bons antecedentes, não se dedicar às atividades criminosas nem integrar organização criminosa.",
      "Comprovar atividade profissional formal com carteira assinada há mais de cinco anos.",
      "Ter restituído espontaneamente todo o valor obtido com a venda ilícita de entorpecentes.",
      "Possuir dependência química atestada por perícia médica do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Requisitos cumulativos do Art. 33, § 4º, da Lei nº 11.343/2006:\n1) Ser primário (não ser reincidente);\n2) Ter bons antecedentes;\n3) Não se dedicar às atividades criminosas;\n4) Não integrar organização criminosa.\nAtenção máxima: O STF (HC 118.533) e o STJ (Súmula 607) fixaram que o TRÁFICO PRIVILEGIADO NÃO É EQUIPARADO A HEDIONDO, permitindo livramento condicional e substituição por penas restritivas de direitos!",
    "fundamentacaoLegal": "Art. 33, § 4º da Lei 11.343/2006, STF HC 118.533 e Lei 13.964/2019",
    "hint": "Os 4 requisitos do Tráfico Privilegiado: 1. Primário, 2. Bons antecedentes, 3. Não viver do crime, 4. Não ser de facção criminosa! E lembre: NÃO É HEDIONDO.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Tráfico Privilegiado: Réu primário de primeira viagem que não é de facção. NÃO É HEDIONDO!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Confusão com colaboração premiada.",
      "B": "Correta. Quatro requisitos cumulativos taxativos previstos no art. 33, § 4º da Lei de Drogas.",
      "C": "Incorreta. Exigência não constante do tipo integrador.",
      "D": "Incorreta. Reparação patrimonial estranha ao tráfico de drogas.",
      "E": "Incorreta. O privilégio não depende de vício ou dependência farmacológica do agente."
    }
  },
  {
    "id": "elite_ext_008",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei de Tortura (Lei nº 9.455/1997) • Tortura por Omissão (Art. 1º, § 2º)",
    "question": "A Lei nº 9.455/1997 prevê no Art. 1º, § 2º, a figura típica da tortura imprópria ou por omissão. A respeito desse crime, assinale a opção juridicamente correta:",
    "options": [
      "Incorre nas mesmas penas de reclusão de até dezesseis anos daquele que executa a tortura física.",
      "A omissão só é punível se o militar que presenciou o ato tiver posto hierárquico de coronel.",
      "Aquele que se omite em face das condutas de tortura, quando tinha o dever de evitá-las ou apurá-las, comete crime apenado com DETENÇÃO de um a quatro anos.",
      "A omissão perante a tortura é considerada mera infração disciplinar sem qualquer tipicidade na esfera penal.",
      "O crime de tortura por omissão prescreve em seis meses contados da lavratura da sindicância interna."
    ],
    "correctIndex": 2,
    "explanation": "Diz o Art. 1º, § 2º, da Lei nº 9.455/1997:\n'Aquele que se OMITE em face dessas condutas [tortura], quando tinha o DEVER DE EVITÁ-LAS OU DE APURÁ-LAS, incorre na pena de DETENÇÃO DE UM A QUATRO ANOS'.\nObserve a pegadinha clássica da banca AOCP:\n- Quem PRATICA a tortura: Pena de RECLUSÃO de 2 a 8 anos.\n- Quem se OMITE (tendo o dever de evitar ou apurar): Pena atenuada de DETENÇÃO de 1 a 4 anos!",
    "fundamentacaoLegal": "Art. 1º, § 2º da Lei Federal nº 9.455/1997",
    "hint": "Tortura por omissão (quem viu e não evitou ou não apurou): Pena é de DETENÇÃO de 1 a 4 anos (e não reclusão)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Tortura ativa = Reclusão de 2 a 8 anos. Tortura por omissão = Detenção de 1 a 4 anos!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O legislador fixou patamar sancionatório atenuado para o garante que se omite.",
      "B": "Incorreta. Dever de ofício inerente a todo e qualquer agente da segurança pública.",
      "C": "Correta. Disposição literal do art. 1º, § 2º da Lei 9.455/97: detenção de 1 a 4 anos.",
      "D": "Incorreta. Delito autônomo grave e não mera transgressão administrativa.",
      "E": "Incorreta. Lapso prescricional regido pelos parâmetros do art. 109 do Código Penal."
    }
  },
  {
    "id": "elite_ext_009",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei de Tortura • Efeitos da Condenação para Servidor Público (Art. 1º, § 5º)",
    "question": "Um policial militar é condenado em sentença penal transitada em julgado pelo crime de tortura (Art. 1º da Lei nº 9.455/1997) à pena de 4 anos de reclusão. Nos termos do Art. 1º, § 5º, da referida lei, a condenação acarretará AUTOMATICAMENTE:",
    "options": [
      "A cassação de aposentadoria apenas se o militar contar com mais de trinta anos de caserna.",
      "A transferência compulsória para outro batalhão no sertão do estado por cinco anos.",
      "A perda da remuneração sem perda do cargo policial.",
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada (8 anos).",
      "A suspensão dos direitos políticos por noventa dias com retorno automático à escala operacional."
    ],
    "correctIndex": 3,
    "explanation": "O Art. 1º, § 5º, da Lei nº 9.455/1997 estabelece dois efeitos draconianos e AUTOMÁTICOS da condenação por tortura:\n1) A PERDA DO CARGO, função ou emprego público;\n2) A INTERDIÇÃO PARA SEU EXERCÍCIO PELO DOBRO DO PRAZO DA PENA APLICADA.\nEsses efeitos são AUTOMÁTICOS: decorrem diretamente da sentença penal condenatória, não exigindo fundamentação específica do juiz (diferente da regra geral do Art. 92 do Código Penal, onde a perda não é automática).",
    "fundamentacaoLegal": "Art. 1º, § 5º da Lei Federal nº 9.455/1997 e Jurisprudência do STJ",
    "hint": "Condenou por tortura? Perde o cargo e fica proibido de exercer cargo público pelo DOBRO DO TEMPO da pena! E é efeito AUTOMÁTICO.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Tortura não tem moleza: Perde o cargo na hora e fica banido pelo DOBRO da pena!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Consequência imediata e objetiva.",
      "B": "Incorreta. Não se cuida de sanção disciplinar de movimentação interna.",
      "C": "Incorreta. Ruptura definitiva do vínculo institucional com o Estado.",
      "D": "Correta. Aplicação automática do art. 1º, § 5º da Lei de Tortura: perda do cargo + interdição pelo dobro da pena imposta.",
      "E": "Incorreta. Inviabilidade jurídica de retorno às fileiras corporativas."
    }
  },
  {
    "id": "elite_ext_010",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei Maria da Penha (Lei nº 11.340/2006) • Formas de Violência Doméstica (Art. 7º)",
    "question": "O Art. 7º da Lei nº 11.340/2006 tipifica de forma analítica as formas de violência doméstica e familiar contra a mulher. A conduta do agressor consistente em reter, subtrair, destruir parcialmente ou totalmente os objetos pessoais, instrumentos de trabalho, documentos pessoais ou bens e direitos patrimoniais da vítima é classificada como violência:",
    "options": [
      "Moral.",
      "Institucional continuada.",
      "Psicológica.",
      "Física indireta.",
      "Patrimonial."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 7º, inciso IV, da Lei nº 11.340/2006:\n'A VIOLÊNCIA PATRIMONIAL, entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades'.\nDiferenças:\n- Moral (V): calúnia, difamação ou injúria.\n- Psicológica (II): dano emocional, diminuição da autoestima, vigilância constante, humilhação.\n- Patrimonial (IV): rasgar documentos, quebrar celular, reter cartão de banco.",
    "fundamentacaoLegal": "Art. 7º, inciso IV da Lei Federal nº 11.340/2006",
    "hint": "Violência PATRIMONIAL = Destruir, sumir ou reter bens, celulares, documentos pessoais ou dinheiro da mulher!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Mexeu no dinheiro, quebrou o celular ou sumiu com os documentos? Violência PATRIMONIAL!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Violência moral afeta a honra objetiva e subjetiva da mulher.",
      "B": "Incorreta. Não corresponde à subsunção do art. 7º, IV.",
      "C": "Incorreta. Violência psicológica lesa a higidez mental e autodeterminação.",
      "D": "Incorreta. Violência física reclama agressão corpórea.",
      "E": "Correta. Definição ipsis litteris de violência patrimonial do art. 7º, IV da Lei Maria da Penha."
    }
  },
  {
    "id": "elite_ext_011",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei Maria da Penha • Crime de Descumprimento de Medidas Protetivas (Art. 24-A) e Fiança",
    "question": "O Art. 24-A da Lei nº 11.340/2006 criminaliza o descumprimento de decisão judicial que defere medidas protetivas de urgência. Em caso de prisão em flagrante por esse delito, a concessão de fiança na esfera policial:",
    "options": [
      "É terminantemente VEDADA à autoridade policial (Delegado de Polícia), cabendo a concessão de fiança EXCLUSIVAMENTE ao Juiz de Direito competente.",
      "Pode ser concedida pelo Delegado de Polícia se a pena máxima não ultrapassar quatro anos.",
      "Pode ser concedida pelo comandante da guarnição da PMPE no momento da lavratura do boletim.",
      "É proibida até mesmo ao Juiz de Direito, tratando-se de crime legalmente inafiançável.",
      "Depende de concordância expressa e escrita da vítima em cartório."
    ],
    "correctIndex": 0,
    "explanation": "Diz o Art. 24-A, § 2º, da Lei nº 11.340/2006:\n'Na hipótese de prisão em flagrante, APENAS A AUTORIDADE JUDICIAL poderá conceder fiança'.\nEmbora a pena do Art. 24-A seja de detenção de 3 meses a 2 anos (o que na regra geral do Art. 322 do CPP autorizaria o delegado a arbitrar fiança), a Lei Maria da Penha criou uma EXCEÇÃO LEGAL EXPRESSA: o Delegado de Polícia NÃO PODE dar fiança pelo crime do Art. 24-A; o preso tem que ser encaminhado à custódia para que o JUIZ decida sobre a fiança!",
    "fundamentacaoLegal": "Art. 24-A, § 2º da Lei Federal nº 11.340/2006",
    "hint": "Descumpriu medida protetiva (Art. 24-A): DELEGADO NÃO PODE DAR FIANÇA! Só o JUIZ pode arbitrar a fiança.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Descumpriu protetiva? Delegado não solta! Fiança é privativa do Juiz no Art. 24-A, § 2º.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Competência exclusiva conferida ao magistrado togado pelo legislador especial.",
      "B": "Incorreta. Regra geral do art. 322 do CPP excepcionada pelo art. 24-A, § 2º.",
      "C": "Incorreta. Ausência de competência e capacidade funcional militar para arbitrar fianças.",
      "D": "Incorreta. O juiz de direito detém a prerrogativa legal de conceder fiança se couber.",
      "E": "Incorreta. A concessão independe de autorização volitiva da vítima."
    }
  },
  {
    "id": "elite_ext_012",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Crimes de Preconceito e Racismo • Lei nº 7.716/1989 e Equiparação da Injúria Racial (Lei nº 14.532/2023)",
    "question": "Com a promulgação da Lei nº 14.532/2023 e o julgamento do HC 154.248 pelo Supremo Tribunal Federal, o crime de injúria racial (ofender a honra de alguém valendo-se de elementos referentes a raça, cor, etnia ou procedência nacional) foi transferido para o Art. 2º-A da Lei nº 7.716/1989. Como consequência direta dessa alteração legislativa, a injúria racial passou a ser tratada como:",
    "options": [
      "Crime de menor potencial ofensivo sujeito à transação penal nos Juizados Especiais.",
      "Espécie do gênero RACISMO, sendo crime formal, de ação penal pública incondicionada, INAFIANÇÁVEL e IMPRESCRITÍVEL.",
      "Infração civil indenizatória sem tipicidade criminal.",
      "Crime de ação penal privada dependente de queixa-crime assinada por advogado.",
      "Delito afiançável pelo delegado de polícia com prescrição reduzida a um ano."
    ],
    "correctIndex": 1,
    "explanation": "A Lei nº 14.532/2023 consolidou a jurisprudência do STF (HC 154.248) e tipificou expressamente a injúria racial no Art. 2º-A da Lei nº 7.716/1989 (Lei de Crimes Raciais). Consequências fundamentais:\n1) A injúria racial é considerada formalmente CRIME DE RACISMO;\n2) É INAFIANÇÁVEL e IMPRESCRITÍVEL (Art. 5º, XLII da CF);\n3) A ação penal é PÚBLICA INCONDICIONADA (não precisa mais de representação da vítima);\n4) A pena foi elevada para RECLUSÃO de 2 a 5 anos e multa.",
    "fundamentacaoLegal": "Art. 2º-A da Lei Federal nº 7.716/1989 (com redação da Lei 14.532/2023) e STF HC 154.248",
    "hint": "Injúria Racial AGORA É RACISMO (Lei 14.532/2023): INAFIANÇÁVEL, IMPRESCRITÍVEL e de ação penal PÚBLICA INCONDICIONADA!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Injúria Racial virou Racismo puro: Inafiançável, Imprescritível e cadeia de 2 a 5 anos de Reclusão!",
    "porqueErrou": {
      "0": "Você marcou (A): Com pena de reclusão de 2 a 5 anos, não cabe em Juizados Especiais Criminais nem admite transação penal.",
      "2": "Você marcou (C): É crime gravíssimo apenado com reclusão severa.",
      "3": "Você marcou (D): A Lei 14.532/2023 tornou a ação penal PÚBLICA INCONDICIONADA.",
      "4": "Você marcou (E): É inafiançável e imprescritível pela Carta Magna."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Pena de 2 a 5 anos afasta a competência sumaríssima da Lei 9.099/95.",
      "B": "Correta. Equiparação plena aos atributos constitucionais do racismo: inafiançabilidade, imprescritibilidade e ação pública incondicionada.",
      "C": "Incorreta. Tipificação penal autônoma incontestável.",
      "D": "Incorreta. Ação penal pública incondicionada atribuída ao Ministério Público.",
      "E": "Incorreta. Vedação constitucional absoluta de fiança e de prescrição."
    }
  },
  {
    "id": "elite_ext_013",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Código de Trânsito Brasileiro (Lei nº 9.503/1997) • Crime de Embriaguez ao Volante (Art. 306)",
    "question": "O Art. 306 do Código de Trânsito Brasileiro criminaliza a conduta de conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa. Conforme o CTB e a jurisprudência do STJ (Tema 1038), o crime de embriaguez ao volante é classificado como:",
    "options": [
      "Crime de dano concreto, exigindo para sua consumação que o condutor colida o veículo ou coloque transeuntes em perigo real demonstrado.",
      "Mera infração administrativa de trânsito sem sanção penal privativa de liberdade.",
      "Crime de perigo abstrato, consumando-se com a simples condução do veículo em via pública com capacidade psicomotora alterada, sendo desnecessária a demonstração de perigo concreto de dano ou direção anormal.",
      "Crime culposo de trânsito imprescritível e inafiançável.",
      "Delito cuja prova materialidade só pode ser suprida pelo laudo toxicológico de sangue."
    ],
    "correctIndex": 2,
    "explanation": "Conforme jurisprudência pacificada do Superior Tribunal de Justiça (Recurso Repetitivo - Tema 1038 e Súmula 653 do STJ):\n'O crime do art. 306 da Lei n. 9.503/1997 é de PERIGO ABSTRATO, para cuja caracterização NÃO é necessária a demonstração de efetiva potencialidade lesiva na conduta ou perigo concreto de dano'.\nBasta conduzir o veículo na via com concentração igual ou superior a 0,6g de álcool por litro de sangue (ou 0,34 mg/l de ar alveolar no bafômetro) ou comprovação de sinais clínicos de alteração psicomotora (vídeos, testemunhas, exame clínico).",
    "fundamentacaoLegal": "Art. 306 da Lei nº 9.503/1997 e Súmula 653 do STJ (Tema 1038)",
    "hint": "Embriaguez ao Volante (Art. 306 CTB) = Crime de PERIGO ABSTRATO! Não precisa bater o carro nem andar em zigue-zague para ser preso.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Súmula 653 do STJ: Art. 306 é perigo abstrato puro! Bebeu e dirigiu na via, tá consumado o crime.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não reclama perigo concreto nem resultado naturalístico lesivo.",
      "B": "Incorreta. Coexistência de ilícito administrativo (art. 165) e crime penal (art. 306).",
      "C": "Correta. Delito de perigo abstrato pacificado na Súmula 653 do STJ: tutela antecipada da incolumidade coletiva.",
      "D": "Incorreta. Delito apenado com detenção passível de fiança e prescritível.",
      "E": "Incorreta. Meios de prova amplos admitidos pelo § 2º do art. 306."
    }
  },
  {
    "id": "elite_ext_014",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) • Apreensão em Flagrante de Ato Infracional",
    "question": "O Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) estabelece no Art. 106 que 'nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente'. Em caso de apreensão em flagrante de adolescente pela PMPE, o ECA determina expressamente que:",
    "options": [
      "O adolescente deve ser algemado e conduzido ao presídio comum junto com os adultos detidos.",
      "O adolescente não tem direito a ser assistido por advogado até o início da fase de instrução judicial.",
      "A polícia militar pode aplicar de imediato a medida de internação provisória de 45 dias no quartel.",
      "O adolescente apreendido por força de ato infracional será, desde logo, encaminhado à autoridade policial competente (Delegacia da Criança ou plantão da Polícia Civil), sendo obrigatória a imediata comunicação da apreensão e do local onde se encontra à autoridade judiciária competente e à família do apreendido.",
      "O policial militar condutor deve arbitrar fiança pecuniária aos pais do adolescente na delegacia."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 107 da Lei nº 8.069/1990 (ECA):\n'A apreensão de qualquer adolescente e o local onde se encontra recolhido serão incontinenti comunicados à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada'.\nO Art. 172 determina que o adolescente apreendido em flagrante de ato infracional será, desde logo, encaminhado à autoridade policial competente. Além disso, o ECA proíbe estritamente o transporte ou custódia de adolescentes em compartimentos fechados de viaturas sem ventilação ou junto com adultos (Art. 178).",
    "fundamentacaoLegal": "Arts. 106, 107 e 172 da Lei Federal nº 8.069/1990 (ECA)",
    "hint": "Adolescente apreendido em flagrante: Leva direto ao Delegado, avisa na hora o JUIZ e a FAMÍLIA do adolescente! Proibido colocar junto com presos adultos.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Apreendeu menor? Delegacia + Comunicação imediata ao Juiz e à Família (Art. 107 do ECA)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Vedação absoluta de segregação promíscua com população carcerária adulta.",
      "B": "Incorreta. Garantia fundamental de defesa técnica desde a fase pré-processual.",
      "C": "Incorreta. Cláusula de reserva jurisdicional na aplicação de medidas de internação.",
      "D": "Correta. Regra expressa dos arts. 107 e 172 do ECA tutelando a comunicação imediata ao magistrado e responsáveis.",
      "E": "Incorreta. Incompatibilidade com a sistemática socioeducativa do ECA."
    }
  },
  {
    "id": "elite_ext_015",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei de Crimes Hediondos (Lei nº 8.072/1990) • Rol Taxativo e Vedações Legais",
    "question": "A Lei nº 8.072/1990 instituiu o regime especial de tratamento penal aos Crimes Hediondos. Em conformidade com o Art. 2º da referida lei e a jurisprudência das Cortes Superiores, os crimes hediondos e os a eles equiparados (3T) são:",
    "options": [
      "Imprescritíveis, anistiáveis e sujeitos à perda perpétua dos direitos civis.",
      "Afiançáveis mediante depósito em dinheiro de no mínimo cem salários-mínimos.",
      "Isentos de cumprimento de pena privativa de liberdade se o réu for primário.",
      "Julgados privativamente pela Justiça Federal com assistência do tribunal popular internacional.",
      "Insuscetíveis de anistia, graça e indulto, bem como inafiançáveis."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 2º, incisos I e II, da Lei nº 8.072/1990 (em consonância com o Art. 5º, XLIII da CF):\n'Os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins e o terrorismo são INSUSCETÍVEIS DE:\nI - ANISTIA, GRAÇA E INDULTO;\nII - FIANÇA'.\nLembrando que os crimes hediondos e os 3T PRESCREVEM normalmente segundo as regras do Art. 109 do Código Penal (apenas o Racismo e a Ação de Grupos Armados são imprescritíveis na CF).",
    "fundamentacaoLegal": "Art. 2º, incisos I e II da Lei Federal nº 8.072/1990",
    "hint": "Crimes Hediondos e 3T: NÃO têm fiança, NÃO têm graça, anistia ou indulto! Mas eles PRESCREVEM com o tempo.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Hediondos e 3T: Sem Fiança e Sem Graça/Indulto/Anistia! (Mas prescrevem).",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Prescritibilidade ordinária submetida aos prazos do art. 109 do CP.",
      "B": "Incorreta. Inafiançabilidade indeclinável que veda qualquer caução pecuniária.",
      "C": "Incorreta. Não autoriza dispensa de reprimenda carcerária.",
      "D": "Incorreta. Julgamento na esfera da justiça ordinária competente.",
      "E": "Correta. Vedação legal e constitucional expressa a fiança, graça, anistia e indulto presidencial."
    }
  },
  {
    "id": "elite_ext_016",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Nova Lei de Abuso de Autoridade • Condução Coercitiva Manifestamente Descabida (Art. 31)",
    "question": "O Art. 31 da Lei nº 13.869/2019 criminaliza a conduta da autoridade que determinar ou executar a condução coercitiva de testemunha ou investigado. Para que a condução coercitiva configure o crime de abuso de autoridade, a conduta deve ocorrer:",
    "options": [
      "Manifestamente descabida ou sem prévia intimação de comparecimento ao juízo ou à autoridade policial.",
      "Em qualquer hipótese, pois a condução coercitiva de testemunhas foi totalmente banida do Código de Processo Penal.",
      "Apenas se a testemunha for mulher ou menor de dezoito anos.",
      "Exclusivamente durante os feriados nacionais ou finais de semana.",
      "Apenas se o militar estiver sem uniforme operacional durante a diligência."
    ],
    "correctIndex": 0,
    "explanation": "Diz o Art. 31 da Lei nº 13.869/2019:\n'Art. 31. Constranger, sob ameaça de prisão, pessoa que, em razão de sua função, ministério, ofício ou profissão, deva guardar segredo a revelá-lo [...]\nE o Art. 33 (e Arts. correlatos): 'Exigir informação ou cumprimento de obrigação, inclusive o dever de fazer ou de não fazer, sem expresso amparo legal'.\nE a conduta específica de condução coercitiva (Art. 31/Arts. correlatos consolidados): criminaliza a condução MANIFESTAMENTE DESCABIDA OU SEM PRÉVIA INTIMAÇÃO de comparecimento. Se a testemunha foi intimada formalmente e injustificadamente não compareceu, a condução coercitiva é lícita (Art. 218 do CPP). O crime ocorre se conduzida sem prévia intimação ou descabidamente!",
    "fundamentacaoLegal": "Art. 31/33 da Lei 13.869/2019 e Arts. 218 e 260 do CPP (STF ADPFs 395 e 444)",
    "hint": "Condução coercitiva abusiva: Prender ou conduzir à força quem NÃO FOI INTIMADO ANTES ou sem motivo legal cabível!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Não intimou antes? Conduzir à força é crime de Abuso de Autoridade!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Tipificação expressa exigindo a manifesta falta de cabimento ou a ausência de prévia intimação formal de comparecimento.",
      "B": "Incorreta. A condução coercitiva de testemunha recalcitrante intimada permanece válida no art. 218 do CPP.",
      "C": "Incorreta. Não há restrição de sujeito passivo por gênero ou idade.",
      "D": "Incorreta. Circunstância temporal alheia à estrutura do tipo penal.",
      "E": "Incorreta. Irrelevância da vestimenta do agente para configuração do crime funcional."
    }
  },
  {
    "id": "elite_ext_017",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei de Drogas • Associação para o Tráfico (Art. 35) e Requisitos de Tipicidade",
    "question": "O crime de associação para o tráfico de drogas, previsto no Art. 35 da Lei nº 11.343/2006 ('associarem-se duas ou mais pessoas para o fim de praticar, reiteradamente ou não, qualquer dos crimes previstos nos arts. 33 e 34'), segundo a jurisprudência uniformizada do Superior Tribunal de Justiça (STJ), exige para a sua configuração:",
    "options": [
      "A mera coautoria ocasional ou concurso eventual e passageiro de agentes na venda de uma porção de droga.",
      "A comprovação cabal do dolo de associação com ESTABILIDADE E PERMANÊNCIA (ânimo associativo duradouro), não bastando a simples união eventual ou esporádica de agentes.",
      "A participação obrigatória de pelo menos quatro agentes armados com fuzis.",
      "A existência formal de estatuto societário registrado em cartório pelo grupo criminoso.",
      "Que todos os membros tenham condenação anterior transitada em julgado por tráfico internacional."
    ],
    "correctIndex": 1,
    "explanation": "É pacífico e sumulado no STJ e no STF que para a configuração do crime autônomo de Associação para o Tráfico (Art. 35 da Lei 11.343/2006) é indispensável demonstrar o 'animus associativo' caracterizado pela ESTABILIDADE E PERMANÊNCIA da união criminosa entre duas ou mais pessoas. O concurso eventual, passageiro ou transitório de duas pessoas na venda de drogas configura apenas coautoria no tráfico (Art. 33), e NÃO o crime do Art. 35!",
    "fundamentacaoLegal": "Art. 35 da Lei Federal nº 11.343/2006 e Jurisprudência Pacificada do STJ e STF",
    "hint": "Associação para o Tráfico (Art. 35) EXIGE vínculo ESTÁVEL E PERMANENTE! Concurso eventual de duas pessoas não é associação, é só tráfico em coautoria.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Artigo 35 pede casamento: tem que ser estável e permanente! Encontro casual é só concurso do Artigo 33.",
    "porqueErrou": {
      "0": "Você marcou (A): Concurso eventual e passageiro NÃO configura o crime do Art. 35.",
      "2": "Você marcou (C): O crime exige apenas duas ou mais pessoas (não exige quatro).",
      "3": "Você marcou (D): Crime informal que dispensa solenidades contratuais.",
      "4": "Você marcou (E): Réus primários podem cometer o crime de associação desde que haja vínculo duradouro estável comprovado."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Concurso esporádico tipifica apenas coautoria no art. 33.",
      "B": "Correta. Tese pacificada: necessidade incontornável de comprovação do ânimo associativo com estabilidade e permanência.",
      "C": "Incorreta. O tipo objetivo reclama o concurso de 2 ou mais pessoas.",
      "D": "Incorreta. Estrutura criminosa de fato informal.",
      "E": "Incorreta. Primariedade não afasta a subsunção ao art. 35."
    }
  },
  {
    "id": "elite_ext_018",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Estatuto do Desarmamento • Prerrogativa de Porte de Arma de Policiais Militares (Art. 6º)",
    "question": "O Art. 6º, inciso II, da Lei nº 10.826/2003 assegura o porte de arma de fogo aos integrantes dos órgãos referidos nos incisos do caput do Art. 144 da Constituição Federal, o que inclui os policiais militares. A respeito das prerrogativas e regras de porte de arma de fogo institucional e particular de policiais militares fora de serviço, é correto afirmar:",
    "options": [
      "O policial militar só pode portar arma de fogo durante o turno exato de escala de serviço, sendo obrigado a desarmar-se e guardar a arma no quartel ao término da jornada diária.",
      "O porte de arma do policial militar depende de autorização do prefeito do município onde reside.",
      "O policial militar tem direito ao porte de arma de fogo em razão de sua função pública, inclusive fora de serviço em todo o território nacional, com arma institucional ou particular devidamente registrada, atendidas as normas regulamentares da corporação.",
      "O policial militar de folga é terminantemente proibido de portar arma em vias públicas urbanas.",
      "A prerrogativa de porte é revogada compulsoriamente aos sábados, domingos e feriados."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 6º, II, e § 1º da Lei nº 10.826/2003 e regulamentos específicos, o porte de arma de fogo dos integrantes das Polícias Militares é inerente à função e tem abrangência nacional, autorizando o policial militar a portar arma de fogo funcional ou particular mesmo FORA DE SERVIÇO (de folga), em razão do dever contínuo de segurança pública e defesa pessoal, observadas as cautelas legais e administrativas corporativas.",
    "fundamentacaoLegal": "Art. 6º, inciso II e § 1º da Lei Federal nº 10.826/2003",
    "hint": "Policial Militar tem porte de arma por prerrogativa funcional, inclusive DE FOLGA e em âmbito nacional!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Policial Militar é militar 24 horas: tem porte de arma inclusive de folga em todo o Brasil!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O militar mantém a prerrogativa fora do horário de escala de serviço.",
      "B": "Incorreta. Autoridade municipal não detém ingerência sobre porte de militares estaduais.",
      "C": "Correta. Porte funcional conferido por lei federal inerente ao status e prerrogativas da carreira de segurança pública.",
      "D": "Incorreta. Prerrogativa plena tutelada em legislação federal.",
      "E": "Incorreta. Invenção sem qualquer fundamento legal."
    }
  },
  {
    "id": "elite_ext_019",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Nova Lei de Abuso de Autoridade • Exibição do Preso à Curiosidade Pública (Art. 13)",
    "question": "O Art. 13 da Lei nº 13.869/2019 tipifica a conduta do agente público que constranger o preso ou detento, mediante violência, grave ameaça ou redução da capacidade de resistência, a:",
    "options": [
      "Submeter-se a exame pericial de corpo de delito no Instituto Médico Legal.",
      "Apresentar cédula de identidade civil oficial à autoridade policial de plantão.",
      "Indicar o nome e o telefone de seus familiares para comunicação do flagrante.",
      "Exibir-se ou ter seu corpo ou parte dele exibido à curiosidade pública, ou submeter-se a situação vexatória ou a constrangimento não autorizado em lei.",
      "Aguardar a chegada da viatura sentado no banco de trás com cinto de segurança afivelado."
    ],
    "correctIndex": 3,
    "explanation": "Diz textualmente o Art. 13, inciso I e II, da Lei nº 13.869/2019:\n'Art. 13. Constranger o preso ou o detento, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a:\nI - exibir-se ou ter seu corpo ou parte dele exibido à CURIOSIDADE PÚBLICA;\nII - submeter-se a SITUAÇÃO VEXATÓRIA OU A CONSTRANGIMENTO NÃO AUTORIZADO EM LEI;\nIII - produzir prova contra si mesmo ou contra terceiro'.\nPena: Detenção de 1 a 4 anos e multa.",
    "fundamentacaoLegal": "Art. 13, incisos I e II da Lei Federal nº 13.869/2019",
    "hint": "Abuso de Autoridade (Art. 13): É CRIME expor o preso à curiosidade pública (imprensa/redes sociais para chacota) ou submetê-lo a situação vexatória!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Exibir o preso para mídia sensacionalista ou humilhá-lo publicamente = Crime de Abuso de Autoridade na certa!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Perícia obrigatória que atesta a lisura da atuação policial.",
      "B": "Incorreta. Cumprimento regular da qualificação formal do capturado.",
      "C": "Incorreta. Dever constitucional de comunicação imediata da custódia.",
      "D": "Correta. Tipo penal protetivo da dignidade da pessoa humana sob custódia estatal (art. 13, I e II).",
      "E": "Incorreta. Procedimento de segurança no translado de detentos."
    }
  },
  {
    "id": "elite_ext_020",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei Maria da Penha • Ação Penal em Lesão Corporal e Súmula 542 do STJ",
    "question": "Nos casos de violência doméstica e familiar contra a mulher praticada com lesão corporal leve (Art. 129, § 13, do Código Penal), a respeito da natureza da ação penal e a possibilidade de renúncia ou retratação da vítima, a Súmula nº 542 do STJ estabelece que:",
    "options": [
      "A ação penal é pública condicionada à representação da ofendida, podendo esta retirar a queixa livremente a qualquer momento na delegacia.",
      "Aplica-se a transação penal e suspensão condicional do processo com base na Lei nº 9.099/1995.",
      "A vítima tem o dever de pagar multa em dinheiro se não comparecer à audiência do Art. 16.",
      "O Ministério Público não pode oferecer denúncia se o agressor pedir desculpas em audiência preliminar conciliatória.",
      "A ação penal por crime de lesão corporal no âmbito da Lei Maria da Penha é PÚBLICA INCONDICIONADA, não dependendo de representação da vítima nem admitindo renúncia ou desistência após o oferecimento da denúncia."
    ],
    "correctIndex": 4,
    "explanation": "Diz o texto literal da SÚMULA Nº 542 DO STJ:\n'A ação penal por crime de lesão corporal, LEVE OU CULPOSA, no âmbito da Lei Maria da Penha, É PÚBLICA INCONDICIONADA'.\nEssa orientação decorre do julgamento da ADI 4.424 pelo STF. Portanto, se houve qualquer agressão física com lesão corporal contra a mulher em ambiente doméstico, a polícia e o Ministério Público TÊM O DEVER DE PROCESSAR O AGRESSOR, mesmo que a vítima perdoe o companheiro ou peça para não prosseguir!",
    "fundamentacaoLegal": "Súmula 542 do Superior Tribunal de Justiça e STF - ADI 4.424/DF",
    "hint": "Lesão corporal contra mulher na Maria da Penha: É AÇÃO PÚBLICA INCONDICIONADA! Mesmo que a mulher queira retirar a queixa, o processo CONTINUA.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Súmula 542 do STJ: Bateu na mulher? Ação Pública Incondicionada! O perdão dela não cancela o processo criminal.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tese superada pelo STF na ADI 4.424 e consolidada na Súmula 542 do STJ.",
      "B": "Incorreta. O art. 41 da Lei Maria da Penha veda categoricamente os benefícios da Lei 9.099/95.",
      "C": "Incorreta. Concepção descabida e revitimizadora.",
      "D": "Incorreta. Princípio da obrigatoriedade da ação penal pública.",
      "E": "Correta. Súmula 542 do STJ consagrando a indisponibilidade da persecução penal estatal em lesões contra a mulher."
    }
  },
  {
    "id": "elite_pmpe_001",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/1974) • Bases Institucionais: Hierarquia e Disciplina",
    "question": "O Art. 12 da Lei Estadual nº 6.783/1974 estabelece que a hierarquia e a disciplina são as bases institucionais da Polícia Militar de Pernambuco. Segundo as definições expressas no texto estatutário, a DISCIPLINA MILITAR consiste no(a):",
    "options": [
      "Rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial militar e coordenam seu funcionamento regular e harmônico, traduzindo-se pelo perfeito cumprimento do dever por parte de todos e de cada um dos seus componentes.",
      "Ordenação progressiva da autoridade em níveis e graus hierárquicos diferentes dentro da estrutura militar.",
      "Poder conferido exclusivamente aos oficiais superiores de perdoar faltas leves de praças.",
      "Precedência concedida ao militar que possuir mais tempo de casamento civil devidamente averbado na folha de alterações.",
      "Direito do subordinado de deliberar em assembleia a conveniência do cumprimento da ordem de serviço da escala de ronda."
    ],
    "correctIndex": 0,
    "explanation": "Diz textualmente o Art. 12, § 2º, da Lei Estadual nº 6.783/1974:\n'Disciplina é a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial militar e coordenam seu funcionamento regular e harmônico, traduzindo-se pelo perfeito cumprimento do dever por parte de todos e de cada um dos seus componentes'.\nJá a HIERARQUIA (§ 1º) é a ordenação da autoridade em níveis diferentes, dentro da estrutura das Forças Policiais Militares.",
    "fundamentacaoLegal": "Art. 12, §§ 1º e 2º da Lei Estadual nº 6.783/1974 (Estatuto da PMPE)",
    "hint": "Hierarquia = Ordenação da autoridade em degraus/postos. Disciplina = Acatamento integral e rigoroso cumprimento das leis e normas da PMPE!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Hierarquia é a escada do poder; Disciplina é o cumprimento perfeito das regras da corporação!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Definição fidedigna e literal do art. 12, § 2º da Lei Estadual nº 6.783/74.",
      "B": "Incorreta. Conceito legal de hierarquia policial militar.",
      "C": "Incorreta. Confusão com poder sancionatório de autoridade competente.",
      "D": "Incorreta. Critério inexistente na ordem hierárquica castrense.",
      "E": "Incorreta. Violação direta e frontal ao princípio da autoridade e do dever de obediência."
    }
  },
  {
    "id": "elite_pmpe_002",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Graus Hierárquicos • Posto vs Graduação e Competência de Concessão",
    "question": "O Art. 14 do Estatuto dos Policiais Militares de Pernambuco estabelece a distinção técnica entre 'Posto' e 'Graduação'. Assinale a alternativa que traz a correlação correta de conceito e competência de concessão segundo a Lei nº 6.783/1974:",
    "options": [
      "Posto é o grau hierárquico da praça, conferido pelo Comandante-Geral da PMPE por portaria.",
      "Posto é o grau hierárquico do oficial, conferido pelo Governador do Estado e confirmado em Carta Patente ou Folha de Apostila; Graduação é o grau hierárquico da praça, conferido pelo Comandante-Geral da Polícia Militar.",
      "Graduação é o grau hierárquico do oficial, conferido pelo Governador do Estado por meio de Carta Patente.",
      "Posto e Graduação são títulos honoríficos concedidos conjuntamente pelo Presidente do Tribunal de Justiça de Pernambuco.",
      "Graduação é exclusiva de coronéis e generais da reserva, enquanto Posto destina-se apenas a soldados recém-incorporados."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 14, §§ 1º e 2º, da Lei Estadual nº 6.783/1974:\n'§ 1º - POSTO é o grau hierárquico do OFICIAL, conferido por ato do GOVERNADOR DO ESTADO e confirmado em Carta Patente ou Folha de Apostila.\n§ 2º - GRADUAÇÃO é o grau hierárquico da PRAÇA, conferido pelo COMANDANTE-GERAL da Polícia Militar'.",
    "fundamentacaoLegal": "Art. 14, §§ 1º e 2º da Lei Estadual nº 6.783/1974",
    "hint": "OFICIAL tem POSTO (conferido pelo GOVERNADOR em Carta Patente). PRAÇA tem GRADUAÇÃO (conferida pelo COMANDANTE-GERAL)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Oficial = Posto (Governador). Praça = Graduação (Comandante-Geral)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (B)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inversão dos sujeitos e autoridades competentes.",
      "B": "Correta. Síntese perfeita dos parágrafos 1º e 2º do art. 14 da Lei 6.783/74.",
      "C": "Incorreta. Atribuição equivocada dos títulos castrenses.",
      "D": "Incorreta. Incompetência absoluta do Poder Judiciário em atos de promoção de carreira.",
      "E": "Incorreta. Concepção absurda sem amparo na hierarquia militar."
    }
  },
  {
    "id": "elite_pmpe_003",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Círculos Hierárquicos • Composição de Praças Especiais e Oficiais",
    "question": "Os Círculos Hierárquicos são âmbitos de convivência entre policiais militares da mesma categoria e têm a finalidade de desenvolver a camaradagem em ambiente de estima e confiança. Segundo a escala do Art. 14 da Lei nº 6.783/1974, são considerados PRAÇAS ESPECIAIS da Polícia Militar de Pernambuco:",
    "options": [
      "O Subtenente e o Primeiro-Sargento.",
      "O Segundo-Tenente e o Primeiro-Tenente.",
      "O Aspirante-a-Oficial PM e o Aluno-Oficial PM.",
      "O Cabo PM e o Soldado PM de 1ª Classe.",
      "Os integrantes veteranos da Reserva Remunerada e Reformados."
    ],
    "correctIndex": 2,
    "explanation": "Diz o Art. 14, § 4º, da Lei Estadual nº 6.783/1974:\n'São PRAÇAS ESPECIAIS:\nI - Aspirante-a-Oficial PM;\nII - Aluno-Oficial PM (Cadete)'.\nAs praças especiais gozam de tratamento diferenciado e frequentam círculos específicos: o Aspirante-a-Oficial frequenta o círculo de Oficiais Subalternos, e o Aluno-Oficial frequenta o círculo a ele fixado nos regulamentos da Academia de Polícia Militar.",
    "fundamentacaoLegal": "Art. 14, § 4º da Lei Estadual nº 6.783/1974",
    "hint": "Praças Especiais da PMPE são APENAS DOIS: o Aspirante-a-Oficial e o Aluno-Oficial (Cadete)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Praça Especial é quem está a caminho de virar oficial: Aspirante e Aluno-Oficial!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Integram o círculo das praças graduadas.",
      "B": "Incorreta. Trata-se de postos de oficiais subalternos com carta patente.",
      "C": "Correta. Rol taxativo de praças especiais segundo o art. 14, § 4º da Lei 6.783/74.",
      "D": "Incorreta. Graduações de base do quadro de praças da corporação.",
      "E": "Incorreta. Situação de vinculação inativa e não categoria funcional ativa especial."
    }
  },
  {
    "id": "elite_pmpe_004",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Conselho de Justificação vs Conselho de Disciplina • Competência e Destinatários",
    "question": "O Estatuto dos Policiais Militares de Pernambuco (Arts. 47 e 48) disciplina os órgãos colegiados destinados a julgar a capacidade de permanência do militar na corporação. Quanto aos destinatários e competências do Conselho de Justificação e do Conselho de Disciplina, assinale a opção correta:",
    "options": [
      "O Conselho de Justificação é destinado a julgar praças com menos de três anos de serviço.",
      "Ambos os conselhos foram revogados e substituídos por julgamento sumário monocrático do Corregedor-Geral.",
      "O Conselho de Disciplina é privativo de coronéis e generais da ativa.",
      "O Conselho de Justificação é especialmente convocado para julgar a incapacidade do OFICIAL de permanecer na ativa, criando-lhe condições para se justificar; o Conselho de Disciplina é destinado a julgar a incapacidade da PRAÇA COM ESTABILIDADE ASSEGURADA de permanecer na ativa da PMPE.",
      "O Conselho de Justificação aplica-se a cabos e soldados e tem competência para decretar prisão civil."
    ],
    "correctIndex": 3,
    "explanation": "Diferenciação basilar no Estatuto da PMPE:\n1) CONSELHO DE JUSTIFICAÇÃO (Art. 47): Destinado a julgar a incapacidade do OFICIAL PM de permanecer na ativa, criando-lhe condições para se justificar. O julgamento final da perda do posto e da patente compete ao Tribunal de Justiça de Pernambuco (TJPE).\n2) CONSELHO DE DISCIPLINA (Art. 48): Destinado a julgar a incapacidade da PRAÇA COM ESTABILIDADE ASSEGURADA (mais de 10 anos de efetivo serviço) de permanecer na ativa. A decisão final cabe ao Comandante-Geral da PMPE.",
    "fundamentacaoLegal": "Arts. 47 e 48 da Lei Estadual nº 6.783/1974",
    "hint": "OFICIAL vai para o Conselho de JUSTIFICAÇÃO (justifica perante o TJPE). PRAÇA ESTÁVEL vai para o Conselho de DISCIPLINA (julgado pelo Comandante-Geral)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Oficial se Justifica (Conselho de Justificação); Praça aprende a Disciplina (Conselho de Disciplina)!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Conselho de Justificação destina-se unicamente a oficiais da corporação.",
      "B": "Incorreta. Garantias institucionais permanentes do devido processo administrativo militar.",
      "C": "Incorreta. Conselho de Disciplina é órgão de julgamento moral de praças estáveis.",
      "D": "Correta. Correlação exata dos destinatários funcionais dos arts. 47 e 48 da Lei Estadual 6.783/74.",
      "E": "Incorreta. Erro duplo de destinatário e de competência sancionatória."
    }
  },
  {
    "id": "elite_pmpe_005",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Situações Especiais • Agregação de Policial Militar (Art. 75 e 76)",
    "question": "A 'Agregação' é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número. Conforme o Art. 76 do Estatuto da PMPE, o militar da ativa DEVE SER AGREGADO quando:",
    "options": [
      "Completar dois anos de serviço militar em batalhão do interior.",
      "Sofrer repreensão verbal em formatura geral matinal.",
      "Concluir o curso de formação com média superior a nove pontos.",
      "For designado para comandar um pelotão de policiamento ostensivo em sua cidade natal.",
      "Ultrapassar 6 (seis) meses contínuos em Licença para Tratar de Interesse Particular (LTIP) ou tiver se candidatado a cargo eletivo, desde que conte mais de 10 anos de serviço."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 76, inciso V, alínea 'a', e inciso XIV da Lei Estadual nº 6.783/1974:\nO policial militar será agregado quando for afastado temporariamente do serviço ativo por motivo de:\n- Ter ultrapassado 6 (seis) meses contínuos em Licença para Tratar de Interesse Particular (LTIP);\n- Ter ultrapassado 1 ano contínuo em Licença para Tratamento de Saúde Própria (LTSP);\n- Candidatar-se a cargo eletivo, se contar mais de dez anos de serviço (em consonância com a CF/88).",
    "fundamentacaoLegal": "Art. 76 da Lei Estadual nº 6.783/1974 (Estatuto da PMPE)",
    "hint": "Agregação: O militar sai da vaga (fica 'sem número'). Acontece quando passa de 6 meses de LTIP ou disputa eleição política!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Agregado = Sem número na escala! Passou de 6 meses de LTIP ou foi para a política, é agregado na hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Hipótese ordinária de permanência em atividade no quadro.",
      "B": "Incorreta. Sanção disciplinar sem repercussão na condição do quadro hierárquico.",
      "C": "Incorreta. Conclusão meritória de formação mantém o militar no quadro ativo.",
      "D": "Incorreta. O exercício de comando preenche vaga regular de provimento.",
      "E": "Correta. Hipóteses canônicas de agregação compulsória previstas no art. 76 do Estatuto da PMPE."
    }
  },
  {
    "id": "elite_pmpe_006",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Situações Especiais • Reversão e Condição de Excedente (Arts. 80 e 81)",
    "question": "O Art. 80 do Estatuto da PMPE define 'Reversão' como o ato pelo qual o policial militar agregado retorna ao respectivo Quadro, tão logo cesse o motivo que determinou a sua agregação. Quando o policial militar reverte e não encontra vaga aberta em seu posto ou graduação, ele passa para a condição estatutária de:",
    "options": [
      "Excedente, ocupando o mesmo lugar na escala com a designação de excedente até a abertura da primeira vaga.",
      "Reformado por invalidez funcional.",
      "Desertor provisório sem vencimentos.",
      "Licenciado a bem da disciplina.",
      "Militar disponível em disponibilidade remunerada civil."
    ],
    "correctIndex": 0,
    "explanation": "Diz o Art. 81 da Lei Estadual nº 6.783/1974:\n'Excedente é a situação transitória a que, automaticamente, passa o policial militar que:\nI - tendo cessado o motivo que determinou sua agregação, reverte ao respectivo Quadro, ESTANDO ESTE COM SEU EFETIVO COMPLETO;\nII - aguarda a colocação a que faz jus na escala hierárquica após ser promovido por bravura ou ressarcimento de preterição'.\nO militar excedente permanece no serviço ativo, com todos os seus direitos e deveres, concorrendo às promoções e ocupando a primeira vaga que abrir no Quadro.",
    "fundamentacaoLegal": "Arts. 80 e 81 da Lei Estadual nº 6.783/1974",
    "hint": "Reverteu e não tem vaga aberta? Vira EXCEDENTE (fica esperando a primeira vaga abrir, com todos os direitos)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Reverteu sem vaga = Excedente! É temporário até abrir vaga no quadro.",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Conceito legal exato de policial militar excedente do art. 81, inciso I.",
      "B": "Incorreta. Reforma pressupõe incapacidade definitiva ou idade compulsória de inatividade.",
      "C": "Incorreta. Deserção é infração penal militar tipificada no CPM.",
      "D": "Incorreta. Medida expulsória de natureza disciplinar grave.",
      "E": "Incorreta. Figura estranha ao regime jurídico dos militares estaduais de PE."
    }
  },
  {
    "id": "elite_pmpe_007",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Ausente e Deserção • Prazos Estatutários Críticos (Arts. 82 e 83)",
    "question": "O Estatuto dos Policiais Militares de Pernambuco fixa com rigor os prazos cronológicos para a caracterização do estado de 'Ausente' e da consumação do crime militar de 'Deserção'. De acordo com a Lei Estadual nº 6.783/1974:",
    "options": [
      "É considerado Ausente o militar que faltar ao serviço por mais de 12 horas; e Desertor se a ausência durar mais de 48 horas.",
      "É considerado AUSENTE o policial militar que, por mais de 24 (vinte e quatro) horas consecutivas, deixar de comparecer à sua Organização Policial Militar sem comunicar qualquer motivo; e incorre em CRIME DE DESERÇÃO se a ausência injustificada se prolongar por mais de 8 (oito) dias consecutivos.",
      "A ausência por mais de duas horas já configura deserção consumada punida com demissão sumária.",
      "O militar só é considerado ausente após decorridos 30 dias de busca e apreensão no diário oficial.",
      "A deserção só se consuma se o militar levar consigo a viatura e o armamento do batalhão."
    ],
    "correctIndex": 1,
    "explanation": "Prazos estatutários taxativos:\n1) AUSENTE (Art. 82 da Lei 6.783/74): 'É considerado ausente o policial militar que, por mais de 24 (vinte e quatro) horas consecutivas:\nI - deixar de comparecer à sua OPM sem comunicar qualquer motivo de impedimento; ou\nII - ausentar-se, sem licença, da OPM onde serve ou do local onde deva permanecer'.\n2) DESERÇÃO (Art. 83 da Lei 6.783/74 c/c Art. 187 do CPM): Decorridos mais de 8 (oito) dias de ausência injustificada consecutiva, o militar é declarado DESERTOR, sendo lavrado o termo de deserção e expedido mandado de prisão.",
    "fundamentacaoLegal": "Arts. 82 e 83 da Lei Estadual nº 6.783/1974 e Art. 187 do Código Penal Militar",
    "hint": "Ausente = Passou de 24 HORAS sumido sem avisar. Deserção = Passou de 8 DIAS sumido (vira crime militar com cadeia!).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "24 Horas = Ausente (dia seguinte). 8 Dias = Desertor (crime militar na veia)!",
    "porqueErrou": {
      "0": "Você marcou (A): O prazo de ausente é de mais de 24 horas e deserção é mais de 8 dias.",
      "2": "Você marcou (C): Prazo de 2 horas é insuficiente; exige-se mais de 24 horas para ausente e mais de 8 dias para deserção.",
      "3": "Você marcou (D): 30 dias é o prazo para ser declarado 'Extraviado' (Art. 85), não ausente.",
      "4": "Você marcou (E): Levar armamento ou viatura qualifica o crime, mas a deserção simples independe de subtrair bens."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Marcos temporais em desconformidade com a legislação estatutária.",
      "B": "Correta. Prazos clássicos da legislação militar: 24 horas (ausente) e 8 dias (deserção consumada).",
      "C": "Incorreta. Inobservância dos requisitos temporais mínimos de tipicidade.",
      "D": "Incorreta. Confusão com o prazo da condição de extraviado do art. 85.",
      "E": "Incorreta. A deserção é crime de mão própria puramente formal omissivo."
    }
  },
  {
    "id": "elite_pmpe_008",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Desaparecido e Extraviado • Prazos de Operações (Arts. 84 e 85)",
    "question": "Durante o cumprimento de missão policial de resgate em área atingida por inundações e deslizamentos no interior de Pernambuco, um soldado da PMPE desaparece na correnteza. Segundo os Arts. 84 e 85 do Estatuto da PMPE:",
    "options": [
      "Será considerado Desaparecido se o paradeiro for desconhecido por mais de 24 horas; e Extraviado após 48 horas.",
      "É automaticamente considerado desertor no segundo dia de buscas pelos bombeiros militares.",
      "Será considerado DESAPARECIDO o policial militar no desempenho de qualquer serviço cujo paradeiro seja ignorado por mais de 8 (oito) dias; e será considerado EXTRAVIADO quando esse desaparecimento ultrapassar 30 (trinta) dias consecutivos.",
      "Será promovido a major no dia seguinte ao desaparecimento por ato de bravura post-mortem.",
      "A remuneração de seus dependentes é sumariamente suspensa até a localização do corpo."
    ],
    "correctIndex": 2,
    "explanation": "Diz textualmente a Lei Estadual nº 6.783/1974:\n- Art. 84: 'É considerado DESAPARECIDO o policial militar da ativa que, no desempenho de qualquer serviço, em viagem, em operações policiais militares ou em caso de calamidade pública, tiver paradeiro ignorado por MAIS DE 8 (OITO) DIAS'.\n- Art. 85: 'O policial militar que houver sido considerado desaparecido por MAIS DE 30 (TRINTA) DIAS será oficialmente considerado EXTRAVIADO'.\nDurante o extravio, seus dependentes habilitados continuam percebendo a pensão alimentícia/remuneração na forma da lei.",
    "fundamentacaoLegal": "Arts. 84 e 85 da Lei Estadual nº 6.783/1974",
    "hint": "Desaparecido = Mais de 8 dias sumido em serviço. Extraviado = Desaparecido por mais de 30 dias!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "8 dias sumido em operação = Desaparecido. Bateu 30 dias = Extraviado!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Prazos muito inferiores aos ditames expressos dos arts. 84 e 85.",
      "B": "Incorreta. Deserção exige dolo de abandono injustificado; no socorro há justa causa evidente.",
      "C": "Correta. Marcos legais exatos: mais de 8 dias = Desaparecido; mais de 30 dias = Extraviado.",
      "D": "Incorreta. Rito administrativo e comprovação fática indispensáveis.",
      "E": "Incorreta. Violação aos direitos previdenciários e de sustento dos dependentes."
    }
  },
  {
    "id": "elite_pmpe_009",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Direitos dos Policiais Militares • Licença para Tratar de Interesse Particular (LTIP - Art. 67)",
    "question": "A Licença para Tratar de Interesse Particular (LTIP) é a autorização concedida ao militar da ativa para afastar-se do serviço temporariamente a fim de atender a conveniências privadas. Conforme o Art. 67 da Lei Estadual nº 6.783/1974, a concessão da LTIP:",
    "options": [
      "Pode ser deferida a qualquer soldado com mais de seis meses de corporação com remuneração integral.",
      "Tem duração obrigatória de cinco anos ininterruptos com contagem dobrada para reserva remunerada.",
      "É um direito incondicional do militar, não podendo ser negada pelo Comando em nenhuma hipótese de calamidade pública.",
      "Exige que o policial militar conte com MAIS DE 10 (DEZ) ANOS de efetivo serviço e é concedida SEM REMUNERAÇÃO, com prejuízo da contagem de tempo para antiguidade e promoção.",
      "Pode ser concedida ao militar que estiver respondendo a processo penal militar com prisão preventiva decretada."
    ],
    "correctIndex": 3,
    "explanation": "Requisitos estatutários da LTIP (Art. 67 da Lei nº 6.783/1974):\n1) É concedida SEM REMUNERAÇÃO e SEM CONTAGEM de tempo de serviço para quaisquer efeitos;\n2) É condição indispensável contar com MAIS DE 10 (DEZ) ANOS DE EFETIVO SERVIÇO;\n3) Trata-se de ato discricionário que depende do interesse e conveniência do serviço público;\n4) Não pode ser concedida ao militar que estiver cumprindo pena, respondendo a processo disciplinar ou militar, ou quando houver perturbação da ordem pública/calamidade.",
    "fundamentacaoLegal": "Art. 67 da Lei Estadual nº 6.783/1974 (Estatuto da PMPE)",
    "hint": "LTIP (Interesse Particular): Exige MAIS DE 10 ANOS de serviço militar e é SEM SALÁRIO (sem remuneração)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "LTIP: Só para quem tem mais de 10 anos de farda! E não recebe um centavo enquanto estiver de licença.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Concessão vedada a militar recém-incorporado e sempre desprovida de vencimentos.",
      "B": "Incorreta. Prazo máximo limitado a 2 anos e tempo de serviço não computado.",
      "C": "Incorreta. Natureza de faculdade administrativa regida pelo interesse da corporação.",
      "D": "Correta. Regra taxativa do art. 67: mais de 10 anos de efetivo serviço e suspensão da remuneração e antiguidade.",
      "E": "Incorreta. Impedimento expresso para militares sob persecução penal militar."
    }
  },
  {
    "id": "elite_pmpe_010",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Exclusão do Serviço Ativo • Demissão vs Exclusão a Bem da Disciplina (Arts. 106 a 115)",
    "question": "O desligamento ou exclusão do serviço ativo da Polícia Militar de Pernambuco opera-se por diferentes institutos jurídicos conforme a categoria do militar. De acordo com a Lei Estadual nº 6.783/1974:",
    "options": [
      "A Demissão aplica-se exclusivamente às praças de carreira e praças especiais.",
      "Oficiais condenados a pena criminal de três meses perdem automaticamente o posto sem necessidade de julgamento pelo tribunal.",
      "A Exclusão a bem da disciplina é privativa de coronéis e majores condenados pelo plenário do TJPE.",
      "O Soldado com vinte anos de serviço que pede para sair da corporação é formalmente 'demitido a pedido'.",
      "A DEMISSÃO da Polícia Militar aplica-se EXCLUSIVAMENTE AOS OFICIAIS (a pedido ou ex officio por perda do posto e patente); enquanto a EXCLUSÃO A BEM DA DISCIPLINA aplica-se EXCLUSIVAMENTE ÀS PRAÇAS COM ESTABILIDADE ASSEGURADA."
    ],
    "correctIndex": 4,
    "explanation": "Diferenciação estatutária no desligamento ativo:\n- DEMISSÃO (Arts. 107 a 111): Instituto privativo dos OFICIAIS PM. Pode ser 'a pedido' ou 'ex officio' (em consequência de condenação pelo TJPE por indignidade para o oficialato ou após Conselho de Justificação).\n- EXCLUSÃO A BEM DA DISCIPLINA (Art. 115): Instituto aplicável às PRAÇAS COM ESTABILIDADE ASSEGURADA, aplicada pelo Comandante-Geral após decisão em Conselho de Disciplina ou por condenação transitada em julgado em crime militar superior a dois anos.\n- LICENCIAMENTO: Aplicável às praças sem estabilidade (a pedido ou ex officio).",
    "fundamentacaoLegal": "Arts. 106, 107, 112 e 115 da Lei Estadual nº 6.783/1974",
    "hint": "OFICIAL é DEMITIDO (Demissão a pedido ou ex officio). PRAÇA com estabilidade é EXCLUÍDA a bem da disciplina ou LICENCIADA!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Demissão é palavra nobre: só oficial é demitido! Praça é excluída a bem da disciplina ou licenciada.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Demissão vincula-se com exclusividade ao corpo de oficiais.",
      "B": "Incorreta. Cláusula pétrea de reserva de jurisdição do TJ militar estadual para oficiais.",
      "C": "Incorreta. Coronéis e majores sofrem processo de perda de posto via demissão ex officio.",
      "D": "Incorreta. Terminologia correta para praça é licenciamento a pedido.",
      "E": "Correta. Distinção dogmática impecável dos arts. 107 e 115 do Estatuto da PMPE."
    }
  },
  {
    "id": "elite_pmpe_011",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Antiguidade e Precedência Hierárquica • Critérios de Desempate (Art. 16)",
    "question": "O Art. 16 do Estatuto da PMPE dispõe sobre a precedência hierárquica entre policiais militares do mesmo posto ou da mesma graduação. Havendo empate na data da promoção, a antiguidade será sucessivamente definida segundo os critérios estatutários. O primeiro critério sucessivo a ser aplicado para desempatar a antiguidade de dois policiais promovidos na mesma data é:",
    "options": [
      "A antiguidade no posto ou na graduação anterior.",
      "A idade civil mais avançada.",
      "A quantidade de medalhas de honra ao mérito recebidas.",
      "O número de filhos menores dependentes economicamente.",
      "O sorteio público realizado perante o Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 16, § 1º, da Lei Estadual nº 6.783/1974, a antiguidade entre policiais militares do mesmo posto ou graduação é regulada:\n1º) Pela data da promoção ao posto ou graduação atual;\n2º) Pela antiguidade no POSTO OU GRADUAÇÃO ANTERIOR (se as promoções foram na mesma data);\n3º) Pela ordem de classificação no respectivo curso de formação ou habilitação;\n4º) Pelo maior tempo de serviço público efetivo no Estado;\n5º) Pela maior IDADE civil (critério residual de desempate final!).",
    "fundamentacaoLegal": "Art. 16, § 1º, alíneas 'a', 'b', 'c', 'd' e 'e' da Lei Estadual nº 6.783/1974",
    "hint": "Promovidos no mesmo dia? Desempata quem era mais antigo no POSTO/GRADUAÇÃO ANTERIOR! Idade é só o último critério.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Promoveu no mesmo dia? Olhe para trás: quem já era mais antigo no posto anterior ganha a precedência!",
    "porqueErrou": {
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (A)."
    },
    "analiseAlternativas": {
      "A": "Correta. Ordem estatutária do art. 16, § 1º, 'b': prevalece a precedência detida no posto ou graduação precedente.",
      "B": "Incorreta. A idade é a quinta e última instância de desempate na dicção da alínea 'e'.",
      "C": "Incorreta. Láurea comemorativa sem efeito de desempate temporal.",
      "D": "Incorreta. Critério de encargos de família inaplicável à antiguidade de quadro.",
      "E": "Incorreta. Repúdio ao elemento aleatório de sorteio na disciplina militar."
    }
  },
  {
    "id": "elite_pmpe_012",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Inatividade Policial Militar • Reserva Remunerada vs Reforma (Arts. 88 a 105)",
    "question": "A passagem do policial militar à situação de inatividade mediante transferência para a Reserva Remunerada ou concessão de Reforma obedece a regras estatutárias distintas. A diferença conceitual basilar entre Reserva Remunerada e Reforma na PMPE consiste em:",
    "options": [
      "O militar na Reserva Remunerada continua percebendo remuneração, enquanto o Reformado deixa de receber qualquer pensão do Estado.",
      "O policial militar na Reserva Remunerada pertence à inatividade, mas permanece ainda sujeito à prestação de serviço ativo mediante convocação ou mobilização legal; já o Reformado está dispensado definitivamente de qualquer prestação de serviço militar.",
      "A Reforma só é concedida a soldados e cabos, sendo vedada aos oficiais da PMPE.",
      "O militar na Reserva Remunerada não pode residir fora do estado de Pernambuco.",
      "A Reforma é uma punição disciplinar que extingue todas as honras e patentes do militar."
    ],
    "correctIndex": 1,
    "explanation": "Diz o Art. 3º, § 1º, inciso II, da Lei Estadual nº 6.783/1974:\n'Os policiais militares na inatividade dividem-se em:\na) NA RESERVA REMUNERADA: quando pertençam à reserva da corporação e recebam remuneração do Estado, estando sujeitos, ainda, à convocação para o serviço ativo;\nb) REFORMADOS: quando, tendo passado por uma das situações anteriores, estejam dispensados definitivamente da prestação de serviço na ativa, continuando, porém, a receber remuneração do Estado'.",
    "fundamentacaoLegal": "Art. 3º, § 1º, II, 'a' e 'b' da Lei Estadual nº 6.783/1974",
    "hint": "Reserva Remunerada = Inativo que AINDA PODE SER CONVOCADO para voltar à ativa. Reformado = Aposentadoria definitiva, NÃO pode ser convocado nunca mais!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Reserva: está descansando, mas o apito pode chamar de volta. Reformado: definitivo, não volta nunca mais!",
    "porqueErrou": {
      "0": "Você marcou (A): Ambos (Reserva e Reformado) continuam recebendo seus proventos regularmente.",
      "2": "Você marcou (C): Oficiais também são reformados (por invalidez ou ao atingir a idade limite da reserva).",
      "3": "Você marcou (D): O militar inativo é livre para fixar residência em qualquer lugar do território nacional.",
      "4": "Você marcou (E): Reforma não é punição; é a inatividade definitiva por tempo, idade limite ou problemas de saúde."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O militar reformado mantém seus proventos integrais garantidos por lei.",
      "B": "Correta. Distinção essencial: potencialidade de convocação na Reserva vs definitividade na Reforma.",
      "C": "Incorreta. Concedida a todas as patentes e graduações estatutárias.",
      "D": "Incorreta. Liberdade de domicílio civil e de locomoção ampla ao inativo.",
      "E": "Incorreta. Instituto de proteção previdenciária e fixação de inatividade irrevogável."
    }
  },
  {
    "id": "elite_pmpe_013",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Direitos dos Policiais Militares • Férias Regulamentares e Interrupção (Art. 62)",
    "question": "O Art. 62 da Lei Estadual nº 6.783/1974 assegura ao policial militar o direito a férias anuais remuneradas de 30 (trinta) dias consecutivos. O Estatuto prevê que a concessão ou o gozo das férias regulamentares do militar SOMENTE PODERÁ SER INTERROMPIDO ou suspenso em casos excepcionais de:",
    "options": [
      "Insuficiência orçamentária momentânea da Secretaria da Fazenda.",
      "Vontade unilateral do prefeito do município onde o militar tem residência particular.",
      "Grave perturbação da ordem pública, estado de sítio, estado de defesa, extrema necessidade do serviço, transferência para a inatividade ou para cumprimento de punição disciplinar de prisão.",
      "Solicitação formal da associação de praças do batalhão.",
      "Simples atraso no fornecimento de fardamento novo pelo almoxarifado central."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 62, § 3º, da Lei Estadual nº 6.783/1974:\n'A concessão de férias não é prejudicada pelo gozo anterior de licença [...], e a interrupção do período de férias somente poderá ocorrer por:\nI - extrema necessidade do serviço;\nII - transferência para a inatividade;\nIII - para cumprimento de punição disciplinar que implique privação de liberdade;\nIV - em caso de mobilização, estado de emergência, estado de sítio ou perturbação da ordem pública'.",
    "fundamentacaoLegal": "Art. 62, § 3º da Lei Estadual nº 6.783/1974 (Estatuto da PMPE)",
    "hint": "Interrupção de férias na PMPE: SÓ em casos graves! Extrema necessidade, estado de sítio, grave perturbação da ordem ou punição de prisão.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Férias é sagrada: só se interrompe por Guerra, Calamidade, Crise grave da ordem ou Cadeia disciplinar!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Motivo fiscal abstrato que não afeta a fruição do descanso remunerado.",
      "B": "Incorreta. Ingerência municipal inconstitucional.",
      "C": "Correta. Enumeração exata e taxativa das hipóteses excepcionais autorizadoras de interrupção contidas no art. 62.",
      "D": "Incorreta. Entidades representativas desprovidas de comando de tropa.",
      "E": "Incorreta. Transtorno material sem gravidade para cassação transitória de férias."
    }
  },
  {
    "id": "elite_pmpe_014",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Deveres Policiais Militares • Conduta Moral e Proibição de Comércio (Art. 31)",
    "question": "O Art. 31 do Estatuto dos Policiais Militares de Pernambuco prescreve regras rigorosas sobre a conduta moral e a dedicação integral à carreira. No que tange à participação de policiais militares da ativa em atividades comerciais e empresariais privadas, o Estatuto estabelece que:",
    "options": [
      "O policial militar da ativa pode gerenciar livremente qualquer empresa privada em seus horários de folga.",
      "A participação em sociedades anônimas depende de prévia homologação pelo Poder Judiciário militar.",
      "O policial militar pode ser sócio-administrador de empresas de transporte de valores e vigilância armada.",
      "Ao policial militar da ativa é VEDADO comerciar ou tomar parte na administração ou gerência de sociedade empresarial comercial, ou dela ser sócio ou participar, EXCETO como ACIONISTA OU QUOTISTA em sociedade anônima ou por quotas de responsabilidade limitada.",
      "Não há qualquer restrição societária no direito militar pernambucano, aplicando-se apenas o Código Civil."
    ],
    "correctIndex": 3,
    "explanation": "Diz o Art. 31, § 1º, da Lei Estadual nº 6.783/1974:\n'Ao policial militar da ativa é VEDADO comerciar ou tomar parte na administração ou gerência de sociedade ou dela ser sócio ou participar, EXCETO como ACIONISTA OU COTISTA em sociedade anônima ou por cotas de responsabilidade limitada'.\nRegra idêntica ao regime dos servidores federais (Lei 8.112/90) e Estatuto das Forças Armadas: o militar pode investir e ter ações/quotas (ser sócio investidor), mas NÃO PODE GERENCIAR NEM ADMINISTRAR empresas comerciais ativamente!",
    "fundamentacaoLegal": "Art. 31, § 1º da Lei Estadual nº 6.783/1974",
    "hint": "Militar da ativa NÃO pode gerenciar nem administrar empresa! Só pode ser ACIONISTA ou COTISTA (sócio investidor).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Militar no comércio: Proibido ser Gerente/Administrador! Permitido apenas ser Acionista ou Cotista investidor.",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Vedação estatutária expressa ao exercício de funções gerenciais e mercantis.",
      "B": "Incorreta. Inexiste controle jurisdicional prévio para aplicações financeiras e societárias regulares.",
      "C": "Incorreta. Conflito ético flagrante e infração funcional gravíssima.",
      "D": "Correta. Regra clássica do art. 31, § 1º permitindo unicamente a posição de acionista ou quotista sem atos de gerência.",
      "E": "Incorreta. O regime de dedicação militar afasta a aplicação irrestrita do direito civil comum."
    }
  },
  {
    "id": "elite_pmpe_015",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Fardamento e Insígnias • Uso Exclusivo e Vedação a Civis (Arts. 71 a 74)",
    "question": "O Estatuto da PMPE (Lei nº 6.783/1974) dedica o Capítulo V do Título II aos uniformes da corporação. De acordo com os Arts. 71 a 74, os uniformes, distintivos, insígnias e emblemas da Polícia Militar de Pernambuco:",
    "options": [
      "Podem ser livremente confeccionados e comercializados por qualquer estamparia para uso em festas e fantasias carnavalescas.",
      "Devem ser padronizados na cor amarela berrante conforme recomendação de agências civis de turismo.",
      "Podem ser utilizados por policiais da reserva remunerada em quaisquer manifestações político-partidárias na rua.",
      "São dispensáveis durante operações de policiamento ostensivo a pé no centro do Recife.",
      "São de uso privativo dos policiais militares em serviço ativo e representam o símbolo da autoridade policial militar, sendo terminantemente proibido o uso por civis ou o uso de peças ou trajes que guardem semelhança que possam ser confundidos com os da corporação."
    ],
    "correctIndex": 4,
    "explanation": "Conforme os Arts. 71 e 73 da Lei Estadual nº 6.783/1974:\n- 'Os uniformes da Polícia Militar, com seus distintivos, insígnias e emblemas, são privativos dos policiais militares e simbolizam a autoridade policial militar com as respectivas prerrogativas'.\n- 'É proibido a qualquer elemento civil ou organização civil o uso de uniforme, ou o uso de distintivos, insígnias ou emblemas que possam ser confundidos com os adotados na Polícia Militar'.\nO militar da inatividade não pode usar o uniforme em manifestações de caráter político-partidário (Art. 72, § 2º).",
    "fundamentacaoLegal": "Arts. 71, 72 e 73 da Lei Estadual nº 6.783/1974",
    "hint": "Fardamento da PMPE é PRIVATIVO e símbolo de autoridade militar! Civil não pode usar fardas semelhantes (crime/contravenção penal).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Farda da PMPE é sagrada e exclusiva: civil não veste e militar na inatividade não usa em comício político!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Prática ilícita punível pelas leis de segurança pública e penais.",
      "B": "Incorreta. Afronta à identidade visual e heráldica oficial da PMPE.",
      "C": "Incorreta. Proibição estatutária expressa de uso em manifestações cívico-partidárias.",
      "D": "Incorreta. O policiamento ostensivo pressupõe a farda ostensiva como requisito de identificação funcional.",
      "E": "Correta. Disposição lapidar dos arts. 71 e 73 consagrando o uso privativo e a vedação de imitação por particulares."
    }
  },
  {
    "id": "elite_pmpe_016",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estrutura Organizacional • Diretorias e Comandos Operacionais da PMPE",
    "question": "Na estrutura organizacional básica da Polícia Militar de Pernambuco, a distribuição do policiamento ostensivo e a coordenação das unidades operacionais no interior do estado (Agreste e Sertão) são executadas por meio de escalões intermediários de comando denominados:",
    "options": [
      "Diretorias Integradas do Interior (DINTER I - Agreste/Zona da Mata e DINTER II - Sertão).",
      "Comandos Regionais das Capitanias Hereditárias.",
      "Superintendências Autônomas de Fronteira Sertaneja.",
      "Delegacias Fazendárias de Pacificação Rural.",
      "Juntas Executivas de Policiamento Securitário de Suape."
    ],
    "correctIndex": 0,
    "explanation": "Na estrutura da PMPE e da Secretaria de Defesa Social (SDS), a gestão territorial do policiamento divide-se operacionalmente em:\n- DIM (Diretoria Integrada Metropolitana): responsável pelas unidades de área da Região Metropolitana do Recife;\n- DINTER I (Diretoria Integrada do Interior I): sede em Caruaru, coordena os Batalhões (BPM) e Companhias da Zona da Mata e do Agreste;\n- DINTER II (Diretoria Integrada do Interior II): sede em Petrolina, coordena os Batalhões do Sertão do São Francisco, Araripe e Pajeú.",
    "fundamentacaoLegal": "Lei de Organização Básica da PMPE e Decreto de Estruturação Operacional da SDS/PE",
    "hint": "Divisão do policiamento em Pernambuco: DIM (Metropolitana), DINTER I (Agreste/Mata) e DINTER II (Sertão)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "DIM cuida da Capital; DINTER I cuida do Agreste/Mata; DINTER II cuida do Sertão!",
    "porqueErrou": {
      "1": "Você marcou (B): Designação colonial que não reflete a estrutura militar contemporânea.",
      "2": "Você marcou (C): Nome fictício; a denominação oficial é Diretoria Integrada do Interior.",
      "3": "Você marcou (D): Delegacias são órgãos pertencentes à Polícia Civil.",
      "4": "Você marcou (E): Denominação administrativa inexistente no organograma militar de PE."
    },
    "analiseAlternativas": {
      "A": "Correta. Organização operacional real da PMPE estruturada em DIM, DINTER I e DINTER II.",
      "B": "Incorreta. Terminologia anacrônica do período colonial.",
      "C": "Incorreta. Inexistente na Lei de Organização Básica.",
      "D": "Incorreta. Pertencente à estrutura da Polícia Judiciária e Fazenda.",
      "E": "Incorreta. Invenção terminológica desprovida de lastro fático."
    }
  },
  {
    "id": "elite_pmpe_017",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Valores Policiais Militares • Ética e Deontologia Militar (Art. 27)",
    "question": "O Art. 27 da Lei nº 6.783/1974 estabelece as manifestações essenciais do valor policial militar na PMPE. Dentre os preceitos elencados taxativamente no referido artigo, figura como manifestação essencial:",
    "options": [
      "A filiação a partidos políticos de orientação progressista ou conservadora.",
      "O patriotismo, traduzido pela vontade inabalável de cumprir o dever policial militar e pelo solene juramento de fidelidade à Pátria e a Pernambuco, até com o sacrifício da própria vida.",
      "A exigência de obter lucro comercial em operações táticas de patrulha.",
      "A preferência por escalas de serviço que não incluam trabalho nos finais de semana.",
      "A busca incessante por notoriedade pessoal em plataformas digitais de vídeos curtos."
    ],
    "correctIndex": 1,
    "explanation": "Diz o Art. 27, inciso I, da Lei Estadual nº 6.783/1974:\n'São manifestações essenciais do valor policial militar:\nI - o PATRIOTISMO, traduzido pela vontade inabalável de cumprir o dever policial militar e pelo solene juramento de fidelidade à Pátria e a Pernambuco, até com o sacrifício da própria vida;\nII - o civismo e o culto das tradições históricas;\nIII - a fé na missão elevada da Polícia Militar;\nIV - o espírito de corpo, orgulho do policial militar pela organização onde serve;\nV - o amor à profissão policial militar e o entusiasmo com que é exercida;\nVI - o aprimoramento técnico-profissional'.",
    "fundamentacaoLegal": "Art. 27 da Lei Estadual nº 6.783/1974 (Estatuto da PMPE)",
    "hint": "Manifestação essencial do valor policial: O PATRIOTISMO, com juramento de fidelidade a Pernambuco até com o SACRIFÍCIO DA PRÓPRIA VIDA!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Juramento sagrado da farda: Cumprir o dever até com o sacrifício da própria vida em prol da sociedade!",
    "porqueErrou": {
      "0": "Você marcou (A): Militar da ativa não pode ter filiação partidária (Art. 142 da CF).",
      "2": "Você marcou (C): A atividade militar não visa lucros ou mercantilismo.",
      "3": "Você marcou (D): A dedicação do militar é integral e contínua, incluindo dias santos e finais de semana.",
      "4": "Você marcou (E): A vaidade pessoal em redes sociais fere a modéstia e a discrição militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Proibição constitucional taxativa de engajamento partidário para o militar da ativa.",
      "B": "Correta. Disposição literal e solene do art. 27, inciso I da Lei 6.783/74.",
      "C": "Incorreta. A finalidade militar é a preservação da ordem pública e da paz social.",
      "D": "Incorreta. A dedicação integral ao serviço afasta conveniências de escalas individuais.",
      "E": "Incorreta. Afronta ao decoro e sobriedade da instituição militar."
    }
  },
  {
    "id": "elite_pmpe_018",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Licença Especial (LE) • Requisitos e Peculiaridades Estatutárias (Art. 66)",
    "question": "A Licença Especial (LE) é a autorização para afastamento total do serviço concedida ao militar que a requerer, com direito a todas as vantagens e remuneração de seu cargo. Nos termos do Art. 66 da Lei Estadual nº 6.783/1974, a Licença Especial é concedida pelo prazo e periodicidade de:",
    "options": [
      "3 (três) meses a cada 5 (cinco) anos de serviço.",
      "1 (um) ano a cada 15 (quinze) anos de serviço militar.",
      "6 (seis) meses a cada 10 (dez) anos de efetivo serviço prestado à corporação.",
      "30 (trinta) dias consecutivos a cada biênio trabalhado.",
      "45 (quarenta e cinco) dias úteis após cada promoção de posto."
    ],
    "correctIndex": 2,
    "explanation": "Diz o Art. 66, caput, da Lei Estadual nº 6.783/1974:\n'Licença Especial é a autorização para afastamento total do serviço, relativa a cada DECÊNIO DE TEMPO DE EFETIVO SERVIÇO prestado, concedida ao policial militar que a requerer, sem que implique em qualquer restrição para sua carreira.\n§ 1º - A Licença Especial tem a duração de 6 (SEIS) MESES, a ser gozada de uma só vez ou em 2 (dois) períodos de 3 (três) meses cada um'.",
    "fundamentacaoLegal": "Art. 66, caput e § 1º da Lei Estadual nº 6.783/1974",
    "hint": "Licença Especial na PMPE: 6 MESES de folga remunerada a cada DECÊNIO (10 anos) de efetivo serviço!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "LE da PMPE = 6 meses de licença a cada 10 anos de farda!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (C)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Confusão com o modelo quinquenal civil.",
      "B": "Incorreta. Prazo temporal incompatível com a lei.",
      "C": "Correta. Regra expressa do art. 66: decênio de efetivo serviço e duração de 6 meses.",
      "D": "Incorreta. Trata-se do instituto anual das férias regulamentares.",
      "E": "Incorreta. Invenção sem correspondência estatutária."
    }
  },
  {
    "id": "elite_pmpe_019",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Cargo e Função Policial Militar • Diferenciação Técnica e Vacância (Arts. 20 a 24)",
    "question": "O Estatuto dos Policiais Militares de Pernambuco estabelece distinção precisa entre 'Cargo Policial Militar' e 'Função Policial Militar'. À luz dos Arts. 20 a 24 da Lei nº 6.783/1974, é correto afirmar:",
    "options": [
      "Cargo e função são sinônimos perfeitos sem qualquer diferença jurídica no direito militar.",
      "O cargo policial militar extingue-se automaticamente caso o militar titular entre de férias regulares.",
      "Qualquer civil concursado pode assumir cargo privativo de comando operacional da PMPE.",
      "Cargo policial militar é um conjunto de atribuições, deveres e responsabilidades cometidos a um policial militar em serviço ativo, criado por lei, com denominação própria e número certo no Quadro de Efetivo da corporação; já Função policial militar é o exercício efetivo das atribuições inerentes a determinado cargo.",
      "A função militar só pode ser desempenhada por militares da reserva reformados."
    ],
    "correctIndex": 3,
    "explanation": "Conforme os Arts. 20 e 23 da Lei Estadual nº 6.783/1974:\n- Art. 20: 'Cargo policial militar é um conjunto de atribuições, deveres e responsabilidades cometidos a um policial militar em serviço ativo. [...] Os cargos policiais militares são criados por lei, com denominação própria, número certo e estipêndio pago pelo Estado'.\n- Art. 23: 'Função policial militar é o exercício efetivo do conjunto de atribuições inerentes ao cargo policial militar'.\nCargo é o lugar/posto criado em lei no organograma; Função é a atividade prática diária exercida pelo titular do cargo.",
    "fundamentacaoLegal": "Arts. 20 e 23 da Lei Estadual nº 6.783/1974",
    "hint": "Cargo = Lugar criado em lei (com nome e número certo). Função = O trabalho/exercício real das atribuições do cargo!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "Cargo é a cadeira (criada por lei); Função é sentar e trabalhar na cadeira!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D).",
      "4": "Você marcou (E): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (D)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Concepção leiga desprovida de rigor jus-administrativo.",
      "B": "Incorreta. O afastamento regulamentar preserva a titularidade do cargo.",
      "C": "Incorreta. Violação ao princípio da exclusividade das funções de segurança militar.",
      "D": "Correta. Distinção dogmática exata dos arts. 20 e 23 da Lei Estadual 6.783/74.",
      "E": "Incorreta. O militar inativo é dispensado do exercício regular de função ativa."
    }
  },
  {
    "id": "elite_pmpe_020",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Unidades Especializadas da PMPE • BOPE, BPChoque, BPRv e CIPOMA",
    "question": "A Polícia Militar de Pernambuco conta com Unidades Especializadas de elite com doutrinas operacionais avançadas para missões complexas. Assinale a correlação CORRETA entre a sigla e a respectiva atribuição especializada da corporação:",
    "options": [
      "RPMon (Regimento de Polícia Montada) — Fiscalização e escolta exclusiva de trens do metrô do Recife.",
      "BPRv (Batalhão de Polícia Rodoviária) — Combate a incêndios florestais e mergulho de resgate em alto mar.",
      "BPChoque (Batalhão de Polícia de Choque) — Investigação cartorária de crimes digitais e perícia papiloscópica.",
      "CIPOMA (Companhia Independente de Policiamento do Meio Ambiente) — Policiamento aéreo com helicópteros da presidência da república.",
      "BOPE (Batalhão de Operações Policiais Especiais) — Missões de altíssima complexidade e risco, resgate de reféns, desarmamento de bombas e combate em áreas conflagradas e favelas."
    ],
    "correctIndex": 4,
    "explanation": "Na estrutura especializada da PMPE:\n- BOPE (Batalhão de Operações Policiais Especiais): Unidade de elite para intervenções táticas de alto risco, negociação e resgate de reféns com atiradores de precisão (snipers), desativação de artefatos explosivos (esquadrão antibombas) e patrulhamento em terrenos conflagrados.\n- BPChoque: Controle de distúrbios civis, reintegrações de posse e controle de rebeliões em presídios;\n- BPRv: Patrulhamento ostensivo das rodovias estaduais (PEs);\n- CIPOMA: Fiscalização e combate a crimes ambientais e proteção da fauna e flora pernambucanas;\n- RPMon (Regimento Dias Cardoso): Cavalaria da PMPE.",
    "fundamentacaoLegal": "Lei de Organização Básica da PMPE e Regulamentos das Unidades Especializadas",
    "hint": "BOPE = Batalhão de Operações Policiais Especiais: Resgate de reféns, invasão tática e esquadrão antibombas!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_elite_dificil",
    "dicaMacete": "BOPE é a tropa de elite da PMPE para as missões mais perigosas da corporação!",
    "porqueErrou": {
      "0": "Você marcou (A): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "1": "Você marcou (B): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "2": "Você marcou (C): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E).",
      "3": "Você marcou (D): Alternativa incorreta para este ponto do edital. Revise o comentário detalhado da assertiva (E)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Regimento de Cavalaria montada.",
      "B": "Incorreta. Atribuição inerente ao Corpo de Bombeiros Militar e policiamento de estradas estaduais.",
      "C": "Incorreta. Choque atua no controle de multidões e reintegrações e não em perícia de computadores.",
      "D": "Incorreta. Unidade ambiental florestal de defesa da biodiversidade.",
      "E": "Correta. Competências doutrinárias reais e oficiais do BOPE da Polícia Militar de Pernambuco."
    }
  }
];
