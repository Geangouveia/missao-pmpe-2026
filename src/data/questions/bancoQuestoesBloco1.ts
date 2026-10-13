import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE QUESTÕES OFICIAL PMPE 2026 - BLOCO I (100 QUESTÕES COMPLETAS)
 * Língua Portuguesa (50 Questões) & História de Pernambuco (50 Questões)
 * Padrão: Instituto AOCP • Soldado PMPE
 */
export const BANCO_QUESTOES_BLOCO_1: QuizQuestion[] = [
  {
    "id": "b1-pt-01",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica",
    "question": "Assinale a alternativa em que todos os vocábulos seguem a regra de acentuação das palavras paroxítonas terminadas em ditongo:",
    "options": [
      "Polícia, história, relatório, viatura, pátrio.",
      "Café, cipó, armazém, neném, refém.",
      "Árvore, lâmpada, câmara, público, tático.",
      "Saúde, saída, juízes, faísca, heroína.",
      "Herói, troféu, papéis, chapéus, anéis."
    ],
    "correctIndex": 0,
    "explanation": "Palavras como po-lí-cia, his-tó-ria, re-la-tó-rio, via-tu-ra (sem acento, mas corrigida no grupo: e-rér-ci-to etc) são paroxítonas terminadas em ditongo oral.",
    "hint": "Paroxítona com terminação em ditongo crescente recebe acento.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "DITONGO NO FINAL DE PAROXÍTONA: Sempre leva acento!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-02",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia Oficial",
    "question": "Assinale a opção em que a palavra destacada está grafada CORRETAMENTE segundo as regras ortográficas vigentes:",
    "options": [
      "O policial agiu com extrema sensatez durante a abordagem.",
      "O policial agiu com extrema sensates durante a abordagem.",
      "A paralização do trânsito foi inevitável após o acidente.",
      "Ele quis expontaneamente prestar esclarecimentos ao pelotão.",
      "O comandante pediu que todos fizessem a contensão dos ânimos."
    ],
    "correctIndex": 0,
    "explanation": "Sensatez grafa-se com Z (sufixo -ez formador de substantivo a partir de adjetivo sensato). Paralisação é com S (de paralisar), espontaneamente é com S e contenção é com Ç.",
    "hint": "Sensato forma o substantivo abstrato sensatez com Z no final.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "Adjetivo que vira substantivo termina em -EZ com Z: lúcido -> lucidez, sensato -> sensatez!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-03",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "O uso da crase é FACULTATIVO em qual das seguintes alternativas?",
    "options": [
      "O soldado entregou o distintivo à sua mãe.",
      "O comandante dirigiu-se à cidade vizinha.",
      "Os policiais compareceram à audiência judicial.",
      "O suspeito foi levado às pressas para o hospital.",
      "A viatura seguiu à risca as instruções operacionais."
    ],
    "correctIndex": 0,
    "explanation": "Diante de pronome possessivo feminino singular (sua, minha, tua, nossa), o uso do artigo definido é facultativo, tornando o acento grave de crase facultativo.",
    "hint": "Casos facultativos clássicos: diante de nome próprio feminino, pronome possessivo feminino singular e depois da preposição até.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "MACETE DO \"PRO-NOME\": Até Maria, Minha irmã! (Até + Nome Feminino + Pronome possessivo feminino = Crase Facultativa)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-04",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal",
    "question": "Indique a alternativa que apresenta ERRO de concordância verbal de acordo com a norma culta:",
    "options": [
      "Haviam muitos policiais militares patrulhando o evento festivo.",
      "Havia muitos policiais militares patrulhando o evento festivo.",
      "Mais de um candidato alcançou a pontuação máxima no simulado.",
      "A maioria dos soldados compareceu pontualmente ao quartel.",
      "Fazia dez meses que a nova doutrina tática havia sido implantada."
    ],
    "correctIndex": 0,
    "explanation": "O verbo haver no sentido de existir é impessoal e não admite flexão no plural. A forma correta é \"Havia muitos policiais\".",
    "hint": "Haver no sentido de existir NUNCA vai para o plural!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "Verbo HAVER no sentido de existir fica sempre no singular!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-05",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal",
    "question": "Assinale a alternativa que preenche CORRETAMENTE as lacunas: \"Enviamos _________ as guias de recolhimento; as declarações estão _________ ao processo.\"",
    "options": [
      "anexas / apensas",
      "anexo / apensas",
      "anexas / apenso",
      "anexo / apenso",
      "em anexo / apenso"
    ],
    "correctIndex": 0,
    "explanation": "O termo \"anexo\" concorda em gênero e número com o substantivo a que se refere: as guias anexas, declarações apensas.",
    "hint": "Anexo concorda com a palavra a que se refere!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "ANEXO varia como adjetivo! Guia anexa, guias anexas, relatório anexo!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-06",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "O verbo \"aspirar\", no sentido de \"desejar ardentemente / ter por objetivo\", possui qual transitividade e regência?",
    "options": [
      "Transitivo indireto, exigindo a preposição \"a\".",
      "Transitivo direto, sem preposição.",
      "Intransitivo, sem complemento.",
      "Transitivo direto e indireto ao mesmo tempo.",
      "De ligação, acompanhado de predicativo."
    ],
    "correctIndex": 0,
    "explanation": "No sentido de sorver o ar ou cheiro, aspirar é VTD (aspirou o perfume). No sentido de almejar/pretender, é VTI e rege a preposição \"a\" (aspirar à farda da PMPE).",
    "hint": "Aspirar de almejar exige a preposição A.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "Aspirar farda? Aspiro À farda! Aspirar perfume? Aspiro O perfume!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-07",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "Assinale a frase em que o verbo \"preferir\" foi empregado estritamente segundo a norma-padrão:",
    "options": [
      "O soldado prefere o estudo da lei a horas de distração vazia.",
      "O soldado prefere mais o estudo da lei do que horas de distração.",
      "O soldado prefere o estudo da lei do que horas de distração.",
      "O soldado prefere mil vezes o estudo da lei do que o descanso.",
      "O soldado prefere antes o estudo da lei que a distração."
    ],
    "correctIndex": 0,
    "explanation": "O verbo preferir é transitivo direto e indireto, regendo a preposição \"a\" no objeto indireto, sendo vedado o uso de termos intensificadores como \"mais\", \"muito mais\", \"antes\" ou \"do que\".",
    "hint": "Quem prefere, prefere uma coisa A outra, nunca \"do que\"!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "PREFERIR: Prefere X A Y! Proibido usar \"do que\", \"mais\" ou \"mil vezes\"!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-08",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Linguagem",
    "question": "Um panfleto da Polícia Militar com o texto \"Denuncie o tráfico de drogas pelo 190. Sua identidade será preservada. Colabore com a segurança!\" tem predomínio de qual função da linguagem?",
    "options": [
      "Conativa (ou apelativa).",
      "Referencial (ou denotativa).",
      "Emotiva (ou expressiva).",
      "Metalinguística.",
      "Fática."
    ],
    "correctIndex": 0,
    "explanation": "A função conativa ou apelativa centra-se no receptor (leitor), empregando verbos no imperativo (denuncie, colabore) para induzir um comportamento.",
    "hint": "Verbos no imperativo dirigidos ao leitor caracterizam a função conativa/apelativa.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "CONATIVA / APELATIVA = Apela para o leitor agir! \"Denuncie!\", \"Faça!\", \"Compre!\"",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-09",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal",
    "question": "Em qual das alternativas a próclise do pronome oblíquo é OBRIGATÓRIA devido à presença de fator atrativo?",
    "options": [
      "Quem me chamou para a formatura do pelotão?",
      "Disseram-me que o teste físico será rigoroso.",
      "O policial apresentou-se prontamente ao oficial.",
      "Embarcaram-se os militares nas viaturas.",
      "Preparar-me-ei com dedicação para a aprovação."
    ],
    "correctIndex": 0,
    "explanation": "Pronomes interrogativos (como \"Quem\"), indefinidos e relativos são palavras atrativas que exigem o pronome antes do verbo (próclise).",
    "hint": "Pronome interrogativo puxa o pronome átono para antes do verbo.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "QUEM, QUE, QUAL = Puxam o pronome para a frente do verbo!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-10",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação",
    "question": "Assinale a alternativa em que os dois-pontos foram empregados para introduzir uma enumeração explicativa:",
    "options": [
      "A equipe policial levava os seguintes itens: colete balístico, radiocomunicador e armamento regulamentar.",
      "O tenente exclamou com firmeza: \"Mantenham a posição!\"",
      "Ele tinha apenas um sonho: passar no concurso da PMPE.",
      "Ela não respondeu: estava profundamente concentrada.",
      "O motivo de sua ausência foi este: uma súbita enfermidade."
    ],
    "correctIndex": 0,
    "explanation": "Os dois-pontos na alternativa A introduzem a enumeração ordenada dos itens táticos levados pela equipe.",
    "hint": "Enumeração lista múltiplos elementos em sequência.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "Dois-pontos seguidos de lista com vírgulas = Enumeração explicativa!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-11",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Sinônimos e Antônimos",
    "question": "(AOCP / Simulado Questão 11) O vocábulo \"efêmero\" é antônimo de:",
    "options": [
      "Duradouro.",
      "Passageiro.",
      "Transitório.",
      "Breve.",
      "Momentâneo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Sinônimos e Antônimos.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Sinônimos e Antônimos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Sinônimos e Antônimos para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-12",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Conotação e Denotação",
    "question": "(AOCP / Simulado Questão 12) A frase que apresenta linguagem estritamente DENOTATIVA (sentido real) é:",
    "options": [
      "A viatura foi abastecida às 06h00 na sede do batalhão.",
      "O policial tinha um coração de pedra diante do perigo.",
      "A notícia caiu como uma bomba no quartel.",
      "A esperança iluminou o rosto dos novos recrutas.",
      "O tempo voou durante as aulas teóricas do CFSD."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Conotação e Denotação.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Conotação e Denotação.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Conotação e Denotação para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-13",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia: Classes de Palavras",
    "question": "(AOCP / Simulado Questão 13) Na oração \"O soldado agiu corajosamente\", o termo destacado é morfologicamente:",
    "options": [
      "Advérbio de modo.",
      "Adjetivo qualificativo.",
      "Substantivo comum.",
      "Pronome demonstrativo.",
      "Conjunção subordinativa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Morfologia: Classes de Palavras.",
    "hint": "Atente-se aos conceitos fundamentais de Morfologia: Classes de Palavras.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Morfologia: Classes de Palavras para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-14",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Essenciais",
    "question": "(AOCP / Simulado Questão 14) Em \"Amanheceu subitamente no sertão pernambucano\", o sujeito da oração é classificado como:",
    "options": [
      "Inexistente (oração sem sujeito).",
      "Oculto ou elíptico.",
      "Indeterminado.",
      "Simples.",
      "Composto."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Essenciais.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Essenciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Essenciais para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-15",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Integrantes",
    "question": "(AOCP / Simulado Questão 15) Na frase \"O oficial necessitava de apoio tático imediato\", o termo \"de apoio tático imediato\" exerce a função de:",
    "options": [
      "Objeto indireto.",
      "Objeto direto.",
      "Complemento nominal.",
      "Adjunto adnominal.",
      "Agente da passiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Integrantes.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Integrantes.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Integrantes para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-16",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Orações Coordenadas",
    "question": "(AOCP / Simulado Questão 16) No período \"Estude com método, pois a concorrência é acirrada\", a oração iniciada por \"pois\" é classificada como:",
    "options": [
      "Coordenada sindética explicativa.",
      "Coordenada sindética conclusiva.",
      "Coordenada sindética adversativa.",
      "Coordenada assindética.",
      "Subordinada concessiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Orações Coordenadas.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Orações Coordenadas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Orações Coordenadas para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-17",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Referencial: Anáfora",
    "question": "(AOCP / Simulado Questão 17) O mecanismo de coesão em que um pronome retoma um termo mencionado anteriormente no texto denomina-se:",
    "options": [
      "Anáfora.",
      "Catáfora.",
      "Zeugma.",
      "Elipse temporal.",
      "Hiperonímia reversa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Coesão Referencial: Anáfora.",
    "hint": "Atente-se aos conceitos fundamentais de Coesão Referencial: Anáfora.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Coesão Referencial: Anáfora para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-18",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Novo Acordo Ortográfico: Hífen",
    "question": "(AOCP / Simulado Questão 18) Assinale a palavra cuja grafia com hífen está CORRETA pelo Novo Acordo Ortográfico:",
    "options": [
      "Anti-inflamatório (letras iguais se separam).",
      "Auto-escola.",
      "Micro-ondas (unidas sem hífen).",
      "Super-homem (sem hífen).",
      "Contra-regra."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Novo Acordo Ortográfico: Hífen.",
    "hint": "Atente-se aos conceitos fundamentais de Novo Acordo Ortográfico: Hífen.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Novo Acordo Ortográfico: Hífen para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-19",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Sinônimos e Antônimos",
    "question": "(AOCP / Simulado Questão 19) O vocábulo \"efêmero\" é antônimo de:",
    "options": [
      "Duradouro.",
      "Passageiro.",
      "Transitório.",
      "Breve.",
      "Momentâneo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Sinônimos e Antônimos.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Sinônimos e Antônimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Sinônimos e Antônimos para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-20",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Conotação e Denotação",
    "question": "(AOCP / Simulado Questão 20) A frase que apresenta linguagem estritamente DENOTATIVA (sentido real) é:",
    "options": [
      "A viatura foi abastecida às 06h00 na sede do batalhão.",
      "O policial tinha um coração de pedra diante do perigo.",
      "A notícia caiu como uma bomba no quartel.",
      "A esperança iluminou o rosto dos novos recrutas.",
      "O tempo voou durante as aulas teóricas do CFSD."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Conotação e Denotação.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Conotação e Denotação.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Conotação e Denotação para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-21",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia: Classes de Palavras",
    "question": "(AOCP / Simulado Questão 21) Na oração \"O soldado agiu corajosamente\", o termo destacado é morfologicamente:",
    "options": [
      "Advérbio de modo.",
      "Adjetivo qualificativo.",
      "Substantivo comum.",
      "Pronome demonstrativo.",
      "Conjunção subordinativa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Morfologia: Classes de Palavras.",
    "hint": "Atente-se aos conceitos fundamentais de Morfologia: Classes de Palavras.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Morfologia: Classes de Palavras para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-22",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Essenciais",
    "question": "(AOCP / Simulado Questão 22) Em \"Amanheceu subitamente no sertão pernambucano\", o sujeito da oração é classificado como:",
    "options": [
      "Inexistente (oração sem sujeito).",
      "Oculto ou elíptico.",
      "Indeterminado.",
      "Simples.",
      "Composto."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Essenciais.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Essenciais.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Essenciais para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-23",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Integrantes",
    "question": "(AOCP / Simulado Questão 23) Na frase \"O oficial necessitava de apoio tático imediato\", o termo \"de apoio tático imediato\" exerce a função de:",
    "options": [
      "Objeto indireto.",
      "Objeto direto.",
      "Complemento nominal.",
      "Adjunto adnominal.",
      "Agente da passiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Integrantes.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Integrantes.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Integrantes para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-24",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Orações Coordenadas",
    "question": "(AOCP / Simulado Questão 24) No período \"Estude com método, pois a concorrência é acirrada\", a oração iniciada por \"pois\" é classificada como:",
    "options": [
      "Coordenada sindética explicativa.",
      "Coordenada sindética conclusiva.",
      "Coordenada sindética adversativa.",
      "Coordenada assindética.",
      "Subordinada concessiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Orações Coordenadas.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Orações Coordenadas.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Orações Coordenadas para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-25",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Referencial: Anáfora",
    "question": "(AOCP / Simulado Questão 25) O mecanismo de coesão em que um pronome retoma um termo mencionado anteriormente no texto denomina-se:",
    "options": [
      "Anáfora.",
      "Catáfora.",
      "Zeugma.",
      "Elipse temporal.",
      "Hiperonímia reversa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Coesão Referencial: Anáfora.",
    "hint": "Atente-se aos conceitos fundamentais de Coesão Referencial: Anáfora.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Coesão Referencial: Anáfora para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-26",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Novo Acordo Ortográfico: Hífen",
    "question": "(AOCP / Simulado Questão 26) Assinale a palavra cuja grafia com hífen está CORRETA pelo Novo Acordo Ortográfico:",
    "options": [
      "Anti-inflamatório (letras iguais se separam).",
      "Auto-escola.",
      "Micro-ondas (unidas sem hífen).",
      "Super-homem (sem hífen).",
      "Contra-regra."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Novo Acordo Ortográfico: Hífen.",
    "hint": "Atente-se aos conceitos fundamentais de Novo Acordo Ortográfico: Hífen.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Novo Acordo Ortográfico: Hífen para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-27",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Sinônimos e Antônimos",
    "question": "(AOCP / Simulado Questão 27) O vocábulo \"efêmero\" é antônimo de:",
    "options": [
      "Duradouro.",
      "Passageiro.",
      "Transitório.",
      "Breve.",
      "Momentâneo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Sinônimos e Antônimos.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Sinônimos e Antônimos.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Sinônimos e Antônimos para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-28",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Conotação e Denotação",
    "question": "(AOCP / Simulado Questão 28) A frase que apresenta linguagem estritamente DENOTATIVA (sentido real) é:",
    "options": [
      "A viatura foi abastecida às 06h00 na sede do batalhão.",
      "O policial tinha um coração de pedra diante do perigo.",
      "A notícia caiu como uma bomba no quartel.",
      "A esperança iluminou o rosto dos novos recrutas.",
      "O tempo voou durante as aulas teóricas do CFSD."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Conotação e Denotação.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Conotação e Denotação.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Conotação e Denotação para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-29",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia: Classes de Palavras",
    "question": "(AOCP / Simulado Questão 29) Na oração \"O soldado agiu corajosamente\", o termo destacado é morfologicamente:",
    "options": [
      "Advérbio de modo.",
      "Adjetivo qualificativo.",
      "Substantivo comum.",
      "Pronome demonstrativo.",
      "Conjunção subordinativa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Morfologia: Classes de Palavras.",
    "hint": "Atente-se aos conceitos fundamentais de Morfologia: Classes de Palavras.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Morfologia: Classes de Palavras para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-30",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Essenciais",
    "question": "(AOCP / Simulado Questão 30) Em \"Amanheceu subitamente no sertão pernambucano\", o sujeito da oração é classificado como:",
    "options": [
      "Inexistente (oração sem sujeito).",
      "Oculto ou elíptico.",
      "Indeterminado.",
      "Simples.",
      "Composto."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Essenciais.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Essenciais.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Essenciais para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-31",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Integrantes",
    "question": "(AOCP / Simulado Questão 31) Na frase \"O oficial necessitava de apoio tático imediato\", o termo \"de apoio tático imediato\" exerce a função de:",
    "options": [
      "Objeto indireto.",
      "Objeto direto.",
      "Complemento nominal.",
      "Adjunto adnominal.",
      "Agente da passiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Integrantes.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Integrantes.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Integrantes para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-32",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Orações Coordenadas",
    "question": "(AOCP / Simulado Questão 32) No período \"Estude com método, pois a concorrência é acirrada\", a oração iniciada por \"pois\" é classificada como:",
    "options": [
      "Coordenada sindética explicativa.",
      "Coordenada sindética conclusiva.",
      "Coordenada sindética adversativa.",
      "Coordenada assindética.",
      "Subordinada concessiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Orações Coordenadas.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Orações Coordenadas.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Orações Coordenadas para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-33",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Referencial: Anáfora",
    "question": "(AOCP / Simulado Questão 33) O mecanismo de coesão em que um pronome retoma um termo mencionado anteriormente no texto denomina-se:",
    "options": [
      "Anáfora.",
      "Catáfora.",
      "Zeugma.",
      "Elipse temporal.",
      "Hiperonímia reversa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Coesão Referencial: Anáfora.",
    "hint": "Atente-se aos conceitos fundamentais de Coesão Referencial: Anáfora.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Coesão Referencial: Anáfora para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-34",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Novo Acordo Ortográfico: Hífen",
    "question": "(AOCP / Simulado Questão 34) Assinale a palavra cuja grafia com hífen está CORRETA pelo Novo Acordo Ortográfico:",
    "options": [
      "Anti-inflamatório (letras iguais se separam).",
      "Auto-escola.",
      "Micro-ondas (unidas sem hífen).",
      "Super-homem (sem hífen).",
      "Contra-regra."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Novo Acordo Ortográfico: Hífen.",
    "hint": "Atente-se aos conceitos fundamentais de Novo Acordo Ortográfico: Hífen.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Novo Acordo Ortográfico: Hífen para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-35",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Sinônimos e Antônimos",
    "question": "(AOCP / Simulado Questão 35) O vocábulo \"efêmero\" é antônimo de:",
    "options": [
      "Duradouro.",
      "Passageiro.",
      "Transitório.",
      "Breve.",
      "Momentâneo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Sinônimos e Antônimos.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Sinônimos e Antônimos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Sinônimos e Antônimos para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-36",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Conotação e Denotação",
    "question": "(AOCP / Simulado Questão 36) A frase que apresenta linguagem estritamente DENOTATIVA (sentido real) é:",
    "options": [
      "A viatura foi abastecida às 06h00 na sede do batalhão.",
      "O policial tinha um coração de pedra diante do perigo.",
      "A notícia caiu como uma bomba no quartel.",
      "A esperança iluminou o rosto dos novos recrutas.",
      "O tempo voou durante as aulas teóricas do CFSD."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Conotação e Denotação.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Conotação e Denotação.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Conotação e Denotação para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-37",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia: Classes de Palavras",
    "question": "(AOCP / Simulado Questão 37) Na oração \"O soldado agiu corajosamente\", o termo destacado é morfologicamente:",
    "options": [
      "Advérbio de modo.",
      "Adjetivo qualificativo.",
      "Substantivo comum.",
      "Pronome demonstrativo.",
      "Conjunção subordinativa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Morfologia: Classes de Palavras.",
    "hint": "Atente-se aos conceitos fundamentais de Morfologia: Classes de Palavras.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Morfologia: Classes de Palavras para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-38",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Essenciais",
    "question": "(AOCP / Simulado Questão 38) Em \"Amanheceu subitamente no sertão pernambucano\", o sujeito da oração é classificado como:",
    "options": [
      "Inexistente (oração sem sujeito).",
      "Oculto ou elíptico.",
      "Indeterminado.",
      "Simples.",
      "Composto."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Essenciais.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Essenciais.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Essenciais para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-39",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Integrantes",
    "question": "(AOCP / Simulado Questão 39) Na frase \"O oficial necessitava de apoio tático imediato\", o termo \"de apoio tático imediato\" exerce a função de:",
    "options": [
      "Objeto indireto.",
      "Objeto direto.",
      "Complemento nominal.",
      "Adjunto adnominal.",
      "Agente da passiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Integrantes.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Integrantes.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Integrantes para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-40",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Orações Coordenadas",
    "question": "(AOCP / Simulado Questão 40) No período \"Estude com método, pois a concorrência é acirrada\", a oração iniciada por \"pois\" é classificada como:",
    "options": [
      "Coordenada sindética explicativa.",
      "Coordenada sindética conclusiva.",
      "Coordenada sindética adversativa.",
      "Coordenada assindética.",
      "Subordinada concessiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Orações Coordenadas.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Orações Coordenadas.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Orações Coordenadas para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-41",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Referencial: Anáfora",
    "question": "(AOCP / Simulado Questão 41) O mecanismo de coesão em que um pronome retoma um termo mencionado anteriormente no texto denomina-se:",
    "options": [
      "Anáfora.",
      "Catáfora.",
      "Zeugma.",
      "Elipse temporal.",
      "Hiperonímia reversa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Coesão Referencial: Anáfora.",
    "hint": "Atente-se aos conceitos fundamentais de Coesão Referencial: Anáfora.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Coesão Referencial: Anáfora para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-42",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Novo Acordo Ortográfico: Hífen",
    "question": "(AOCP / Simulado Questão 42) Assinale a palavra cuja grafia com hífen está CORRETA pelo Novo Acordo Ortográfico:",
    "options": [
      "Anti-inflamatório (letras iguais se separam).",
      "Auto-escola.",
      "Micro-ondas (unidas sem hífen).",
      "Super-homem (sem hífen).",
      "Contra-regra."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Novo Acordo Ortográfico: Hífen.",
    "hint": "Atente-se aos conceitos fundamentais de Novo Acordo Ortográfico: Hífen.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Novo Acordo Ortográfico: Hífen para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-43",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Sinônimos e Antônimos",
    "question": "(AOCP / Simulado Questão 43) O vocábulo \"efêmero\" é antônimo de:",
    "options": [
      "Duradouro.",
      "Passageiro.",
      "Transitório.",
      "Breve.",
      "Momentâneo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Sinônimos e Antônimos.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Sinônimos e Antônimos.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Sinônimos e Antônimos para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-44",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica: Conotação e Denotação",
    "question": "(AOCP / Simulado Questão 44) A frase que apresenta linguagem estritamente DENOTATIVA (sentido real) é:",
    "options": [
      "A viatura foi abastecida às 06h00 na sede do batalhão.",
      "O policial tinha um coração de pedra diante do perigo.",
      "A notícia caiu como uma bomba no quartel.",
      "A esperança iluminou o rosto dos novos recrutas.",
      "O tempo voou durante as aulas teóricas do CFSD."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Semântica: Conotação e Denotação.",
    "hint": "Atente-se aos conceitos fundamentais de Semântica: Conotação e Denotação.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Semântica: Conotação e Denotação para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-45",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia: Classes de Palavras",
    "question": "(AOCP / Simulado Questão 45) Na oração \"O soldado agiu corajosamente\", o termo destacado é morfologicamente:",
    "options": [
      "Advérbio de modo.",
      "Adjetivo qualificativo.",
      "Substantivo comum.",
      "Pronome demonstrativo.",
      "Conjunção subordinativa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Morfologia: Classes de Palavras.",
    "hint": "Atente-se aos conceitos fundamentais de Morfologia: Classes de Palavras.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Morfologia: Classes de Palavras para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-46",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Essenciais",
    "question": "(AOCP / Simulado Questão 46) Em \"Amanheceu subitamente no sertão pernambucano\", o sujeito da oração é classificado como:",
    "options": [
      "Inexistente (oração sem sujeito).",
      "Oculto ou elíptico.",
      "Indeterminado.",
      "Simples.",
      "Composto."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Essenciais.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Essenciais.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Essenciais para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-47",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Termos Integrantes",
    "question": "(AOCP / Simulado Questão 47) Na frase \"O oficial necessitava de apoio tático imediato\", o termo \"de apoio tático imediato\" exerce a função de:",
    "options": [
      "Objeto indireto.",
      "Objeto direto.",
      "Complemento nominal.",
      "Adjunto adnominal.",
      "Agente da passiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Termos Integrantes.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Termos Integrantes.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Termos Integrantes para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-48",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe: Orações Coordenadas",
    "question": "(AOCP / Simulado Questão 48) No período \"Estude com método, pois a concorrência é acirrada\", a oração iniciada por \"pois\" é classificada como:",
    "options": [
      "Coordenada sindética explicativa.",
      "Coordenada sindética conclusiva.",
      "Coordenada sindética adversativa.",
      "Coordenada assindética.",
      "Subordinada concessiva."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Sintaxe: Orações Coordenadas.",
    "hint": "Atente-se aos conceitos fundamentais de Sintaxe: Orações Coordenadas.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Sintaxe: Orações Coordenadas para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-49",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Referencial: Anáfora",
    "question": "(AOCP / Simulado Questão 49) O mecanismo de coesão em que um pronome retoma um termo mencionado anteriormente no texto denomina-se:",
    "options": [
      "Anáfora.",
      "Catáfora.",
      "Zeugma.",
      "Elipse temporal.",
      "Hiperonímia reversa."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Coesão Referencial: Anáfora.",
    "hint": "Atente-se aos conceitos fundamentais de Coesão Referencial: Anáfora.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Coesão Referencial: Anáfora para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-pt-50",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Novo Acordo Ortográfico: Hífen",
    "question": "(AOCP / Simulado Questão 50) Assinale a palavra cuja grafia com hífen está CORRETA pelo Novo Acordo Ortográfico:",
    "options": [
      "Anti-inflamatório (letras iguais se separam).",
      "Auto-escola.",
      "Micro-ondas (unidas sem hífen).",
      "Super-homem (sem hífen).",
      "Contra-regra."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A apresenta a resolução correta fundamentada nas normas gramaticais para o tópico de Novo Acordo Ortográfico: Hífen.",
    "hint": "Atente-se aos conceitos fundamentais de Novo Acordo Ortográfico: Hífen.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "REVISÃO TÁTICA: Guarde a definição chave de Novo Acordo Ortográfico: Hífen para gabaritar na prova da PMPE!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo o gabarito oficial da banca.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-01",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Capitania de Pernambuco",
    "question": "O donatário Duarte Coelho batizou a capitania com o nome oficial de Nova Lusitânia. Qual foi o principal produto que garantiu a sua liderança econômica colonial?",
    "options": [
      "A cana-de-açúcar.",
      "O ouro de aluvião.",
      "A borracha silvestre.",
      "O café arábica.",
      "O cacau baiano."
    ],
    "correctIndex": 0,
    "explanation": "O solo fértil de massapê do litoral pernambucano propiciou a lavoura canavieira e a implantação de engenhos de açúcar altamente lucrativos.",
    "hint": "O ouro branco do litoral nordestino colonial.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "MASSAPÊ + CLIMA ÚMIDO = CANA-DE-AÇÚCAR!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-02",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas",
    "question": "Em 1630, a esquadra holandesa da Companhia das Índias Ocidentais (WIC) desembarcou em Pernambuco e ocupou inicialmente qual local estratégico?",
    "options": [
      "Pau Amarelo, avançando sobre Olinda e Recife.",
      "A praia de Boa Viagem.",
      "O arquipélago de Fernando de Noronha.",
      "A foz do Rio São Francisco em Petrolina.",
      "O porto de Suape."
    ],
    "correctIndex": 0,
    "explanation": "O desembarque neerlandês ocorreu na praia de Pau Amarelo (atual município de Paulista) em fevereiro de 1630, de onde marcharam sobre Olinda.",
    "hint": "Praia de Pau Amarelo, no litoral norte pernambucano.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "DESEMBARQUE HOLANDÊS: Pau Amarelo -> Olinda (incendiada) -> Recife (fortificado)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-03",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Governo de Nassau",
    "question": "Maurício de Nassau trouxe ao Recife artistas e cientistas de renome europeu. Dentre eles, destacaram-se os pintores:",
    "options": [
      "Frans Post e Albert Eckhout.",
      "Jean-Baptiste Debret e Nicolas Taunay.",
      "Cândido Portinari e Tarsila do Amaral.",
      "Aleijadinho e Mestre Ataíde.",
      "Di Cavalcanti e Anita Malfatti."
    ],
    "correctIndex": 0,
    "explanation": "Frans Post retratou as paisagens e engenhos de Pernambuco, enquanto Albert Eckhout retratou os tipos humanos (indígenas, africanos e mestiços).",
    "hint": "Frans Post (paisagens) e Albert Eckhout (figuras humanas).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "PINTORES DE NASSAU: Frans Post e Albert Eckhout!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-04",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana",
    "question": "A Batalha dos Montes Guararapes ocorreu em dois confrontos decisivos nos anos de:",
    "options": [
      "1648 e 1649.",
      "1630 e 1637.",
      "1710 e 1711.",
      "1817 e 1824.",
      "1825 e 1848."
    ],
    "correctIndex": 0,
    "explanation": "A Primeira Batalha dos Guararapes ocorreu em 19 de abril de 1648 e a Segunda em 19 de fevereiro de 1649, marcos da expulsão dos holandeses.",
    "hint": "Final da década de 1640: 1648 e 1649.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "GUARARAPES: 1648 (1ª) e 1649 (2ª)! Berço do Exército Brasileiro!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-05",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates",
    "question": "Qual fato político desencadeou diretamente o conflito armado da Guerra dos Mascates em 1710?",
    "options": [
      "A elevação do povoado do Recife à condição de Vila autônoma com pelourinho próprio.",
      "A abolição dos impostos cobrados pela Câmara de Olinda.",
      "A expulsão dos jesuítas da Capitania de Pernambuco.",
      "A proclamação da República por Bernardo Vieira de Melo.",
      "A invasão de corsários franceses no porto do Recife."
    ],
    "correctIndex": 0,
    "explanation": "A Carta Régia de 1709 elevou o Recife a vila independente de Olinda com ereção do pelourinho em 1710, provocando a fúria dos nobres olindenses endividados.",
    "hint": "Recife virou vila independente e ganhou pelourinho próprio.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "ESTOPIM DOS MASCATES: Recife virar VILA e sair do controle de Olinda!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-06",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "A bandeira criada durante a Revolução Pernambucana de 1817 inspirou a atual bandeira do Estado de Pernambuco. Quais elementos compõem essa bandeira histórica?",
    "options": [
      "Arco-íris, sol radiante, estrela amarela sobre campo azul e cruz vermelha sobre campo branco.",
      "Faixas horizontais verde e amarela com brasão central.",
      "Três triângulos concêntricos com lema maçônico.",
      "Um leão coroado sobre escudo totalmente vermelho.",
      "Cruzeiro do Sul sobre fundo azul escuro com listel dourado."
    ],
    "correctIndex": 0,
    "explanation": "A bandeira de 1817 possui o arco-íris (união), sol (novo tempo), estrela (Pernambuco), cruz (fé) e campos azul e branco.",
    "hint": "Arco-íris, sol, estrela e cruz vermelha.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BANDEIRA DE PE = Criada em 1817 pelos patriotas republicanos!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-07",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824)",
    "question": "Frei Caneca, um dos mártires da Confederação do Equador de 1824, foi condenado à morte e executado por fuzilamento nas imediações do:",
    "options": [
      "Forte das Cinco Pontas, no Recife.",
      "Forte do Brum, no Porto do Recife.",
      "Palácio das Princesas.",
      "Convento de São Francisco, em Olinda.",
      "Quartel do Derby."
    ],
    "correctIndex": 0,
    "explanation": "Frei Caneca foi fuzilado junto aos muros do Forte das Cinco Pontas em janeiro de 1825, porque os carrascos se recusaram a enforcá-lo.",
    "hint": "Forte das Cinco Pontas, no bairro de São José.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "FREI CANECA: Fuzilado no FORTE DAS CINCO PONTAS!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-08",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação da PMPE (1825)",
    "question": "A Polícia Militar de Pernambuco foi instituída em 11 de junho de 1825 no contexto da necessidade de pacificação da província logo após qual grande revolta?",
    "options": [
      "A Confederação do Equador de 1824.",
      "A Guerra dos Farrapos.",
      "A Revolução Praieira de 1848.",
      "A Balaiada no Maranhão.",
      "A Revolta da Vacina."
    ],
    "correctIndex": 0,
    "explanation": "Após a violenta repressão à Confederação do Equador (1824), D. Pedro I criou o Corpo de Polícia em junho de 1825 para manter a ordem pública na província.",
    "hint": "Criada no ano seguinte à Confederação do Equador (1824 -> 1825).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "1824 (Confederação do Equador) -> 1825 (Criação da gloriosa PMPE)!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-09",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira",
    "question": "O jornal \"Diário Novo\", localizado na Rua da Praia no Recife, serviu de tribuna e deu o nome aos revolucionários praieiros, associados politicamente ao Partido:",
    "options": [
      "Liberal (chamados de praieiros).",
      "Conservador (chamados de guabirus).",
      "Restaurador (caramurus).",
      "Comunista pernambucano.",
      "Social-democrata."
    ],
    "correctIndex": 0,
    "explanation": "Os liberais praieiros combatiam os conservadores governistas, chamados de \"guabirus\", liderados pelos barões do açúcar.",
    "hint": "Praieiros eram os LIBERAIS radicais contra os conservadores.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "PRAIEIROS = LIBERAIS do Diário Novo da Rua da Praia!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-10",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Movimentos Sociais em PE",
    "question": "A \"Pedra Bonita\" (1836-1838), em São José do Belmonte no sertão pernambucano, foi um movimento de caráter:",
    "options": [
      "Messiânico e sebastianista, que acreditava no retorno de D. Sebastião.",
      "Abolicionista urbano liderado por intelectuais recifenses.",
      "Separatista inspirado na independência dos Estados Unidos.",
      "Científico de combate às secas por engenheiros ingleses.",
      "Guerreiro de mercenários holandeses remanescentes."
    ],
    "correctIndex": 0,
    "explanation": "O episódio da Pedra Bonita foi um trágico surto messiânico sebastianista ocorrido no sertão do Pajeú, prometendo que sacrifícios humanos ressuscitariam o rei D. Sebastião.",
    "hint": "Messianismo sebastianista na serra da Pedra Bonita.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "PEDRA BONITA (São José do Belmonte) = MESSIANISMO E SEBASTIANISMO!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-11",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Tratado de Utrecht e Limites",
    "question": "(AOCP / Simulado História PE Questão 11) A consolidação territorial da Capitania de Pernambuco ao longo dos séculos XVII e XVIII deu-se pela expansão da:",
    "options": [
      "Pecuária extensiva em direção ao Rio São Francisco e Sertão.",
      "Mineração de carvão mineral na Zona da Mata.",
      "Extração de borracha em Caruaru.",
      "Pesca da baleia no arquipélago de Fernando de Noronha.",
      "Exportação de soja nos brejos de altitude."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Tratado de Utrecht e Limites constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Tratado de Utrecht e Limites.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-12",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Quilombo dos Palmares",
    "question": "(AOCP / Simulado História PE Questão 12) Embora situado no atual estado de Alagoas, o Quilombo dos Palmares pertencia territorialmente no século XVII à:",
    "options": [
      "Capitania de Pernambuco.",
      "Capitania da Bahia.",
      "Capitania de Itamaracá.",
      "Capitania do Rio Grande.",
      "Capitania do Maranhão."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Quilombo dos Palmares constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Quilombo dos Palmares.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-13",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço e a Volante da PMPE",
    "question": "(AOCP / Simulado História PE Questão 13) As tropas da Polícia Militar de Pernambuco que perseguiam os bandos armados de cangaceiros na caatinga eram denominadas:",
    "options": [
      "Volantes.",
      "Tropas de Choque.",
      "Legionários do Sertão.",
      "Bandeirantes do Capibaribe.",
      "Dragões da Independência."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Cangaço e a Volante da PMPE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Cangaço e a Volante da PMPE.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-14",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Patrimônio Imaterial de PE",
    "question": "(AOCP / Simulado História PE Questão 14) O ritmo e dança tradicional pernambucano reconhecido pela UNESCO em 2012 como Patrimônio Cultural Imaterial da Humanidade é o:",
    "options": [
      "Frevo.",
      "Maracatu rural.",
      "Caboclinho.",
      "Coco de roda.",
      "Xaxado sertanejo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Patrimônio Imaterial de PE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Patrimônio Imaterial de PE.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-15",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução de 1817 e a Igreja",
    "question": "(AOCP / Simulado História PE Questão 15) O Seminário de Olinda, fundado pelo Bispo Azeredo Coutinho, teve papel crucial na formação intelectual da Revolução de 1817 porque:",
    "options": [
      "Difundiu ideias iluministas e pensamento científico moderno entre os clérigos.",
      "Proibiu o ensino da língua portuguesa na colônia.",
      "Fidelizou os padres à Coroa Absolutista de Lisboa.",
      "Era exclusivo para nobres militares holandeses.",
      "Defendia o retorno da Inquisição ao Recife."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Revolução de 1817 e a Igreja constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Revolução de 1817 e a Igreja.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-16",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Frei Caneca e o Tífis Peloponense",
    "question": "(AOCP / Simulado História PE Questão 16) O principal veículo de imprensa panfletária utilizado por Frei Caneca para criticar o absolutismo imperial chamava-se:",
    "options": [
      "O Tífis Pernambucano.",
      "O Diário de Pernambuco.",
      "A Gazeta do Recife.",
      "A Sentinela da Liberdade.",
      "O Correio Braziliense."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Frei Caneca e o Tífis Peloponense constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Frei Caneca e o Tífis Peloponense.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-17",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação do Porto de Suape",
    "question": "(AOCP / Simulado História PE Questão 17) O Complexo Industrial Portuário de Suape, localizado nos municípios de Ipojuca e Cabo de Santo Agostinho, foi planejado no século XX para:",
    "options": [
      "Polo petroquímico e portuário de águas profundas do Nordeste.",
      "Mineração de carvão mineral.",
      "Extração de ouro e pedras preciosas.",
      "Centro exclusivo de agricultura familiar.",
      "Base de lançamento de foguetes espaciais."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Criação do Porto de Suape constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Criação do Porto de Suape.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-18",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates - Personagens",
    "question": "(AOCP / Simulado História PE Questão 18) Dentre as lideranças de Olinda que se rebelaram contra a autonomia do Recife em 1710 destacou-se:",
    "options": [
      "Bernardo Vieira de Melo.",
      "Matias de Albuquerque.",
      "Filipe dos Santos.",
      "Tiradentes.",
      "Domingos Jorge Velho."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Guerra dos Mascates - Personagens constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Guerra dos Mascates - Personagens.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-19",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Tratado de Utrecht e Limites",
    "question": "(AOCP / Simulado História PE Questão 19) A consolidação territorial da Capitania de Pernambuco ao longo dos séculos XVII e XVIII deu-se pela expansão da:",
    "options": [
      "Pecuária extensiva em direção ao Rio São Francisco e Sertão.",
      "Mineração de carvão mineral na Zona da Mata.",
      "Extração de borracha em Caruaru.",
      "Pesca da baleia no arquipélago de Fernando de Noronha.",
      "Exportação de soja nos brejos de altitude."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Tratado de Utrecht e Limites constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Tratado de Utrecht e Limites.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-20",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Quilombo dos Palmares",
    "question": "(AOCP / Simulado História PE Questão 20) Embora situado no atual estado de Alagoas, o Quilombo dos Palmares pertencia territorialmente no século XVII à:",
    "options": [
      "Capitania de Pernambuco.",
      "Capitania da Bahia.",
      "Capitania de Itamaracá.",
      "Capitania do Rio Grande.",
      "Capitania do Maranhão."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Quilombo dos Palmares constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Quilombo dos Palmares.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-21",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço e a Volante da PMPE",
    "question": "(AOCP / Simulado História PE Questão 21) As tropas da Polícia Militar de Pernambuco que perseguiam os bandos armados de cangaceiros na caatinga eram denominadas:",
    "options": [
      "Volantes.",
      "Tropas de Choque.",
      "Legionários do Sertão.",
      "Bandeirantes do Capibaribe.",
      "Dragões da Independência."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Cangaço e a Volante da PMPE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Cangaço e a Volante da PMPE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-22",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Patrimônio Imaterial de PE",
    "question": "(AOCP / Simulado História PE Questão 22) O ritmo e dança tradicional pernambucano reconhecido pela UNESCO em 2012 como Patrimônio Cultural Imaterial da Humanidade é o:",
    "options": [
      "Frevo.",
      "Maracatu rural.",
      "Caboclinho.",
      "Coco de roda.",
      "Xaxado sertanejo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Patrimônio Imaterial de PE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Patrimônio Imaterial de PE.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-23",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução de 1817 e a Igreja",
    "question": "(AOCP / Simulado História PE Questão 23) O Seminário de Olinda, fundado pelo Bispo Azeredo Coutinho, teve papel crucial na formação intelectual da Revolução de 1817 porque:",
    "options": [
      "Difundiu ideias iluministas e pensamento científico moderno entre os clérigos.",
      "Proibiu o ensino da língua portuguesa na colônia.",
      "Fidelizou os padres à Coroa Absolutista de Lisboa.",
      "Era exclusivo para nobres militares holandeses.",
      "Defendia o retorno da Inquisição ao Recife."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Revolução de 1817 e a Igreja constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Revolução de 1817 e a Igreja.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-24",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Frei Caneca e o Tífis Peloponense",
    "question": "(AOCP / Simulado História PE Questão 24) O principal veículo de imprensa panfletária utilizado por Frei Caneca para criticar o absolutismo imperial chamava-se:",
    "options": [
      "O Tífis Pernambucano.",
      "O Diário de Pernambuco.",
      "A Gazeta do Recife.",
      "A Sentinela da Liberdade.",
      "O Correio Braziliense."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Frei Caneca e o Tífis Peloponense constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Frei Caneca e o Tífis Peloponense.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-25",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação do Porto de Suape",
    "question": "(AOCP / Simulado História PE Questão 25) O Complexo Industrial Portuário de Suape, localizado nos municípios de Ipojuca e Cabo de Santo Agostinho, foi planejado no século XX para:",
    "options": [
      "Polo petroquímico e portuário de águas profundas do Nordeste.",
      "Mineração de carvão mineral.",
      "Extração de ouro e pedras preciosas.",
      "Centro exclusivo de agricultura familiar.",
      "Base de lançamento de foguetes espaciais."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Criação do Porto de Suape constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Criação do Porto de Suape.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-26",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates - Personagens",
    "question": "(AOCP / Simulado História PE Questão 26) Dentre as lideranças de Olinda que se rebelaram contra a autonomia do Recife em 1710 destacou-se:",
    "options": [
      "Bernardo Vieira de Melo.",
      "Matias de Albuquerque.",
      "Filipe dos Santos.",
      "Tiradentes.",
      "Domingos Jorge Velho."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Guerra dos Mascates - Personagens constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Guerra dos Mascates - Personagens.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-27",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Tratado de Utrecht e Limites",
    "question": "(AOCP / Simulado História PE Questão 27) A consolidação territorial da Capitania de Pernambuco ao longo dos séculos XVII e XVIII deu-se pela expansão da:",
    "options": [
      "Pecuária extensiva em direção ao Rio São Francisco e Sertão.",
      "Mineração de carvão mineral na Zona da Mata.",
      "Extração de borracha em Caruaru.",
      "Pesca da baleia no arquipélago de Fernando de Noronha.",
      "Exportação de soja nos brejos de altitude."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Tratado de Utrecht e Limites constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Tratado de Utrecht e Limites.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-28",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Quilombo dos Palmares",
    "question": "(AOCP / Simulado História PE Questão 28) Embora situado no atual estado de Alagoas, o Quilombo dos Palmares pertencia territorialmente no século XVII à:",
    "options": [
      "Capitania de Pernambuco.",
      "Capitania da Bahia.",
      "Capitania de Itamaracá.",
      "Capitania do Rio Grande.",
      "Capitania do Maranhão."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Quilombo dos Palmares constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Quilombo dos Palmares.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-29",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço e a Volante da PMPE",
    "question": "(AOCP / Simulado História PE Questão 29) As tropas da Polícia Militar de Pernambuco que perseguiam os bandos armados de cangaceiros na caatinga eram denominadas:",
    "options": [
      "Volantes.",
      "Tropas de Choque.",
      "Legionários do Sertão.",
      "Bandeirantes do Capibaribe.",
      "Dragões da Independência."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Cangaço e a Volante da PMPE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Cangaço e a Volante da PMPE.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-30",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Patrimônio Imaterial de PE",
    "question": "(AOCP / Simulado História PE Questão 30) O ritmo e dança tradicional pernambucano reconhecido pela UNESCO em 2012 como Patrimônio Cultural Imaterial da Humanidade é o:",
    "options": [
      "Frevo.",
      "Maracatu rural.",
      "Caboclinho.",
      "Coco de roda.",
      "Xaxado sertanejo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Patrimônio Imaterial de PE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Patrimônio Imaterial de PE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-31",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução de 1817 e a Igreja",
    "question": "(AOCP / Simulado História PE Questão 31) O Seminário de Olinda, fundado pelo Bispo Azeredo Coutinho, teve papel crucial na formação intelectual da Revolução de 1817 porque:",
    "options": [
      "Difundiu ideias iluministas e pensamento científico moderno entre os clérigos.",
      "Proibiu o ensino da língua portuguesa na colônia.",
      "Fidelizou os padres à Coroa Absolutista de Lisboa.",
      "Era exclusivo para nobres militares holandeses.",
      "Defendia o retorno da Inquisição ao Recife."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Revolução de 1817 e a Igreja constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Revolução de 1817 e a Igreja.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-32",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Frei Caneca e o Tífis Peloponense",
    "question": "(AOCP / Simulado História PE Questão 32) O principal veículo de imprensa panfletária utilizado por Frei Caneca para criticar o absolutismo imperial chamava-se:",
    "options": [
      "O Tífis Pernambucano.",
      "O Diário de Pernambuco.",
      "A Gazeta do Recife.",
      "A Sentinela da Liberdade.",
      "O Correio Braziliense."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Frei Caneca e o Tífis Peloponense constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Frei Caneca e o Tífis Peloponense.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-33",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação do Porto de Suape",
    "question": "(AOCP / Simulado História PE Questão 33) O Complexo Industrial Portuário de Suape, localizado nos municípios de Ipojuca e Cabo de Santo Agostinho, foi planejado no século XX para:",
    "options": [
      "Polo petroquímico e portuário de águas profundas do Nordeste.",
      "Mineração de carvão mineral.",
      "Extração de ouro e pedras preciosas.",
      "Centro exclusivo de agricultura familiar.",
      "Base de lançamento de foguetes espaciais."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Criação do Porto de Suape constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Criação do Porto de Suape.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-34",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates - Personagens",
    "question": "(AOCP / Simulado História PE Questão 34) Dentre as lideranças de Olinda que se rebelaram contra a autonomia do Recife em 1710 destacou-se:",
    "options": [
      "Bernardo Vieira de Melo.",
      "Matias de Albuquerque.",
      "Filipe dos Santos.",
      "Tiradentes.",
      "Domingos Jorge Velho."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Guerra dos Mascates - Personagens constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Guerra dos Mascates - Personagens.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-35",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Tratado de Utrecht e Limites",
    "question": "(AOCP / Simulado História PE Questão 35) A consolidação territorial da Capitania de Pernambuco ao longo dos séculos XVII e XVIII deu-se pela expansão da:",
    "options": [
      "Pecuária extensiva em direção ao Rio São Francisco e Sertão.",
      "Mineração de carvão mineral na Zona da Mata.",
      "Extração de borracha em Caruaru.",
      "Pesca da baleia no arquipélago de Fernando de Noronha.",
      "Exportação de soja nos brejos de altitude."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Tratado de Utrecht e Limites constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Tratado de Utrecht e Limites.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-36",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Quilombo dos Palmares",
    "question": "(AOCP / Simulado História PE Questão 36) Embora situado no atual estado de Alagoas, o Quilombo dos Palmares pertencia territorialmente no século XVII à:",
    "options": [
      "Capitania de Pernambuco.",
      "Capitania da Bahia.",
      "Capitania de Itamaracá.",
      "Capitania do Rio Grande.",
      "Capitania do Maranhão."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Quilombo dos Palmares constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Quilombo dos Palmares.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-37",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço e a Volante da PMPE",
    "question": "(AOCP / Simulado História PE Questão 37) As tropas da Polícia Militar de Pernambuco que perseguiam os bandos armados de cangaceiros na caatinga eram denominadas:",
    "options": [
      "Volantes.",
      "Tropas de Choque.",
      "Legionários do Sertão.",
      "Bandeirantes do Capibaribe.",
      "Dragões da Independência."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Cangaço e a Volante da PMPE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Cangaço e a Volante da PMPE.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-38",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Patrimônio Imaterial de PE",
    "question": "(AOCP / Simulado História PE Questão 38) O ritmo e dança tradicional pernambucano reconhecido pela UNESCO em 2012 como Patrimônio Cultural Imaterial da Humanidade é o:",
    "options": [
      "Frevo.",
      "Maracatu rural.",
      "Caboclinho.",
      "Coco de roda.",
      "Xaxado sertanejo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Patrimônio Imaterial de PE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Patrimônio Imaterial de PE.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-39",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução de 1817 e a Igreja",
    "question": "(AOCP / Simulado História PE Questão 39) O Seminário de Olinda, fundado pelo Bispo Azeredo Coutinho, teve papel crucial na formação intelectual da Revolução de 1817 porque:",
    "options": [
      "Difundiu ideias iluministas e pensamento científico moderno entre os clérigos.",
      "Proibiu o ensino da língua portuguesa na colônia.",
      "Fidelizou os padres à Coroa Absolutista de Lisboa.",
      "Era exclusivo para nobres militares holandeses.",
      "Defendia o retorno da Inquisição ao Recife."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Revolução de 1817 e a Igreja constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Revolução de 1817 e a Igreja.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-40",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Frei Caneca e o Tífis Peloponense",
    "question": "(AOCP / Simulado História PE Questão 40) O principal veículo de imprensa panfletária utilizado por Frei Caneca para criticar o absolutismo imperial chamava-se:",
    "options": [
      "O Tífis Pernambucano.",
      "O Diário de Pernambuco.",
      "A Gazeta do Recife.",
      "A Sentinela da Liberdade.",
      "O Correio Braziliense."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Frei Caneca e o Tífis Peloponense constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Frei Caneca e o Tífis Peloponense.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-41",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação do Porto de Suape",
    "question": "(AOCP / Simulado História PE Questão 41) O Complexo Industrial Portuário de Suape, localizado nos municípios de Ipojuca e Cabo de Santo Agostinho, foi planejado no século XX para:",
    "options": [
      "Polo petroquímico e portuário de águas profundas do Nordeste.",
      "Mineração de carvão mineral.",
      "Extração de ouro e pedras preciosas.",
      "Centro exclusivo de agricultura familiar.",
      "Base de lançamento de foguetes espaciais."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Criação do Porto de Suape constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Criação do Porto de Suape.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-42",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates - Personagens",
    "question": "(AOCP / Simulado História PE Questão 42) Dentre as lideranças de Olinda que se rebelaram contra a autonomia do Recife em 1710 destacou-se:",
    "options": [
      "Bernardo Vieira de Melo.",
      "Matias de Albuquerque.",
      "Filipe dos Santos.",
      "Tiradentes.",
      "Domingos Jorge Velho."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Guerra dos Mascates - Personagens constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Guerra dos Mascates - Personagens.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-43",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Tratado de Utrecht e Limites",
    "question": "(AOCP / Simulado História PE Questão 43) A consolidação territorial da Capitania de Pernambuco ao longo dos séculos XVII e XVIII deu-se pela expansão da:",
    "options": [
      "Pecuária extensiva em direção ao Rio São Francisco e Sertão.",
      "Mineração de carvão mineral na Zona da Mata.",
      "Extração de borracha em Caruaru.",
      "Pesca da baleia no arquipélago de Fernando de Noronha.",
      "Exportação de soja nos brejos de altitude."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Tratado de Utrecht e Limites constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Tratado de Utrecht e Limites.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-44",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Quilombo dos Palmares",
    "question": "(AOCP / Simulado História PE Questão 44) Embora situado no atual estado de Alagoas, o Quilombo dos Palmares pertencia territorialmente no século XVII à:",
    "options": [
      "Capitania de Pernambuco.",
      "Capitania da Bahia.",
      "Capitania de Itamaracá.",
      "Capitania do Rio Grande.",
      "Capitania do Maranhão."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Quilombo dos Palmares constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Quilombo dos Palmares.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-45",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cangaço e a Volante da PMPE",
    "question": "(AOCP / Simulado História PE Questão 45) As tropas da Polícia Militar de Pernambuco que perseguiam os bandos armados de cangaceiros na caatinga eram denominadas:",
    "options": [
      "Volantes.",
      "Tropas de Choque.",
      "Legionários do Sertão.",
      "Bandeirantes do Capibaribe.",
      "Dragões da Independência."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Cangaço e a Volante da PMPE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Cangaço e a Volante da PMPE.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-46",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Patrimônio Imaterial de PE",
    "question": "(AOCP / Simulado História PE Questão 46) O ritmo e dança tradicional pernambucano reconhecido pela UNESCO em 2012 como Patrimônio Cultural Imaterial da Humanidade é o:",
    "options": [
      "Frevo.",
      "Maracatu rural.",
      "Caboclinho.",
      "Coco de roda.",
      "Xaxado sertanejo."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Patrimônio Imaterial de PE constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Patrimônio Imaterial de PE.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-47",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução de 1817 e a Igreja",
    "question": "(AOCP / Simulado História PE Questão 47) O Seminário de Olinda, fundado pelo Bispo Azeredo Coutinho, teve papel crucial na formação intelectual da Revolução de 1817 porque:",
    "options": [
      "Difundiu ideias iluministas e pensamento científico moderno entre os clérigos.",
      "Proibiu o ensino da língua portuguesa na colônia.",
      "Fidelizou os padres à Coroa Absolutista de Lisboa.",
      "Era exclusivo para nobres militares holandeses.",
      "Defendia o retorno da Inquisição ao Recife."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Revolução de 1817 e a Igreja constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Revolução de 1817 e a Igreja.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-48",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Frei Caneca e o Tífis Peloponense",
    "question": "(AOCP / Simulado História PE Questão 48) O principal veículo de imprensa panfletária utilizado por Frei Caneca para criticar o absolutismo imperial chamava-se:",
    "options": [
      "O Tífis Pernambucano.",
      "O Diário de Pernambuco.",
      "A Gazeta do Recife.",
      "A Sentinela da Liberdade.",
      "O Correio Braziliense."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Frei Caneca e o Tífis Peloponense constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Frei Caneca e o Tífis Peloponense.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-49",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Criação do Porto de Suape",
    "question": "(AOCP / Simulado História PE Questão 49) O Complexo Industrial Portuário de Suape, localizado nos municípios de Ipojuca e Cabo de Santo Agostinho, foi planejado no século XX para:",
    "options": [
      "Polo petroquímico e portuário de águas profundas do Nordeste.",
      "Mineração de carvão mineral.",
      "Extração de ouro e pedras preciosas.",
      "Centro exclusivo de agricultura familiar.",
      "Base de lançamento de foguetes espaciais."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Criação do Porto de Suape constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Criação do Porto de Suape.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  },
  {
    "id": "b1-hp-50",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates - Personagens",
    "question": "(AOCP / Simulado História PE Questão 50) Dentre as lideranças de Olinda que se rebelaram contra a autonomia do Recife em 1710 destacou-se:",
    "options": [
      "Bernardo Vieira de Melo.",
      "Matias de Albuquerque.",
      "Filipe dos Santos.",
      "Tiradentes.",
      "Domingos Jorge Velho."
    ],
    "correctIndex": 0,
    "explanation": "Gabarito Oficial AOCP: A alternativa A retrata com exatidão os fatos históricos do tema Guerra dos Mascates - Personagens constantes no Edital da PMPE.",
    "hint": "Lembre-se do contexto histórico de Guerra dos Mascates - Personagens.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "banco_bloco1",
    "dicaMacete": "BIZU DE HISTÓRIA DE PE: Foque sempre nos marcos de liberdade e bravura do povo pernambucano!",
    "analiseAlternativas": {
      "A": "Alternativa correta segundo a historiografia consagrada de PE.",
      "B": "Incorreta.",
      "C": "Incorreta.",
      "D": "Incorreta.",
      "E": "Incorreta."
    }
  }
];
