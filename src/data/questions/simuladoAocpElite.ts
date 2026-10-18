import type { QuizQuestion } from '../../types/game';

export const SIMULADO_AOCP_ELITE: QuizQuestion[] = [
{
    "id": "aocp-elite-pt-01",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica (Novo Acordo Ortográfico)",
    "question": "(Instituto AOCP - PMPE) Assinale a alternativa em que TODAS as palavras são acentuadas graficamente pela mesma regra que justifica o acento na palavra \"POLÍCIA\":",
    "options": [
      "notícia, violência, estratégia.",
      "veículo, tática, militar.",
      "herói, troféu, papéis.",
      "país, saída, saúde.",
      "também, parabéns, armazém."
    ],
    "correctIndex": 0,
    "explanation": "A palavra \"po-lí-cia\" é uma PAROXÍTONA terminada em ditongo crescente (-ia). Pela regra da norma culta, todas as paroxítonas terminadas em ditongo oral são acentuadas graficamente. As palavras \"no-tí-cia\", \"vi-o-lên-cia\" e \"es-tra-té-gia\" seguem exatamente essa mesma regra.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Regra das Paroxítonas terminadas em Ditongo.",
    "hint": "Verifique a sílaba tônica: se for a penúltima sílaba e terminar com encontro de duas vogais na mesma sílaba (ditongo), é paroxítona terminada em ditongo.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque \"herói\", \"troféu\" e \"papéis\" são oxítonas terminadas em ditongos abertos (éi, éu, ói), e não paroxítonas.",
      "3": "Você errou porque \"país\", \"saída\" e \"saúde\" são acentuadas pela regra do HIATO (i e u tônicos sozinhos na sílaba), não paroxítonas em ditongo.",
      "4": "Você errou porque \"também\", \"parabéns\" e \"armazém\" são oxítonas terminadas em -em e -ens."
    },
    "analiseAlternativas": {
      "A": "Correta. A palavra \"po-lí-cia\" é uma PAROXÍTONA terminada em ditongo crescente (-ia). Pela regra da norma culta, todas as paroxítonas terminadas em ditongo oral são acentuadas graficamente. As palavras \"no-tí-cia\", \"vi-o-lên-cia\" e \"es-tra-té-gia\" seguem exatamente essa mesma regra.",
      "B": "ERRADA. \"Veículo\" e \"tática\" são proparoxítonas (antepenúltima tônica).",
      "C": "ERRADA. Regra dos ditongos abertos oxítonos (éi, éu, ói).",
      "D": "ERRADA. Regra do hiato (segunda vogal do hiato i ou u tônico).",
      "E": "ERRADA. Regra das oxítonas terminadas em -em e -ens."
    },
    "dicaMacete": "BIZU AOCP: Palavras terminadas em -ia, -io, -ie com penúltima sílaba forte (po-LÍ-cia, his-TÓ-ria) são paroxítonas terminadas em ditongo crescente!"
  },
  {
    "id": "aocp-elite-pt-02",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "(Instituto AOCP - PMPE) O uso do acento grave indicativo de crase está CORRETO em qual das sentenças abaixo?",
    "options": [
      "O comandante começou à redigir a ordem de operações.",
      "Os policiais prestaram continência à autoridade presente na solenidade.",
      "A viatura militar deslocou-se à uma velocidade controlada.",
      "A equipe de patrulhamento caminhava à pé pela comunidade.",
      "O suspeito permaneceu calado frente à qualquer pergunta feita."
    ],
    "correctIndex": 1,
    "explanation": "A frase \"prestaram continência à autoridade\" está perfeita: o substantivo \"continência\" exige a preposição \"a\" (quem presta continência, presta continência A alguém) e a palavra \"autoridade\" é um substantivo feminino que aceita o artigo definido \"a\". A junção da preposição + artigo (a + a = à) resulta em crase obrigatória.",
    "fundamentacaoLegal": "Gramática Normativa - Regência e Crase: fusão da preposição \"a\" com o artigo definido feminino \"a\".",
    "hint": "Substitua a palavra feminina por uma masculina correspondente (ex: autoridade -> comandante). Se virar \"ao\", ocorre crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque é expressamente PROIBIDO usar crase antes de verbos! \"Redigir\" é verbo no infinitivo.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque \"pé\" é palavra masculina (\"o pé\"). Nunca se usa crase antes de palavras masculinas!",
      "4": "Você errou porque \"qualquer\" é pronome indefinido, rejeita artigo feminino e proíbe a crase."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Crase proibida antes de verbo no infinitivo (\"redigir\").",
      "B": "Correta. A frase \"prestaram continência à autoridade\" está perfeita: o substantivo \"continência\" exige a preposição \"a\" (quem presta continência, presta continência A alguém) e a palavra \"autoridade\" é um substantivo feminino que aceita o artigo definido \"a\". A junção da preposição + artigo (a + a = à) resulta em crase obrigatória.",
      "C": "ERRADA. Crase proibida antes do artigo indefinido \"uma\".",
      "D": "ERRADA. \"Pé\" é masculino (à pé é erro gravíssimo em concurso).",
      "E": "ERRADA. \"Qualquer\" é pronome indefinido; rejeita crase."
    },
    "dicaMacete": "MACETE DO MACIÇO: Antes de verbo = CRASIO NÃO; Antes de palavra masculina = PASSE LONGE; Antes de feminino que vira \"AO\" no masculino = CRASE NO ÂNGULO!"
  },
  {
    "id": "aocp-elite-pt-03",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal e Nominal",
    "question": "(Instituto AOCP - PMPE) De acordo com a norma-padrão da Língua Portuguesa, assinale a frase com a concordância verbal CORRETA:",
    "options": [
      "Fazem dez anos que a nova sede do batalhão foi inaugurada.",
      "Haviam muitos candidatos inscritos no concurso para o cargo de soldado.",
      "Mais de um policial militar participou da perseguição tática.",
      "Tratam-se de questões prioritárias para a segurança pública estadual.",
      "Aluga-se apartamentos para os alunos oficiais do curso."
    ],
    "correctIndex": 2,
    "explanation": "A expressão \"mais de um\" leva o verbo para o singular (\"Mais de um policial participou\"). Já o verbo fazer no sentido de tempo decorrido e o verbo haver no sentido de existir são impessoais e devem permanecer estritamente no singular (Faz dez anos / Havia muitos candidatos).",
    "fundamentacaoLegal": "Norma Culta da Língua Portuguesa - Sintaxe de Concordância Verbal.",
    "hint": "Cuidado com os verbos impessoais \"FAZER\" (tempo) e \"HAVER\" (existir). Eles não têm plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque o verbo \"fazer\" indicando tempo decorrido é IMPESSOAL. O correto é \"Faz dez anos\" (no singular).",
      "1": "Você errou porque o verbo \"haver\" no sentido de \"existir\" é IMPESSOAL e não vai para o plural. O correto é \"Havia muitos candidatos\".",
      "3": "Você errou porque com a preposição \"de\", a partícula \"se\" é índice de indeterminação do sujeito, exigindo verbo no singular: \"Trata-se de questões\".",
      "4": "Você errou porque \"apartamentos\" é sujeito paciente no plural, exigindo a voz passiva sintética no plural: \"Alugam-se apartamentos\"."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Fazer (tempo) não vai para o plural: deve ser \"Faz dez anos\".",
      "B": "ERRADA. Haver (existir) não vai para o plural: deve ser \"Havia muitos candidatos\".",
      "C": "CORRETA. Expressão \"mais de um\" concorda no singular: \"Mais de um policial participou\".",
      "D": "ERRADA. \"Tratar-se de\" é índice de indeterminação do sujeito: singular obrigatório (\"Trata-se de\").",
      "E": "ERRADA. Partícula apassivadora \"se\": \"Alugam-se apartamentos\"."
    },
    "dicaMacete": "BIZU DA PMPE: Haver no sentido de existir e Fazer indicando tempo são EGOÍSTAS (ficam sempre sozinhos no singular: Havia / Faz)!"
  },
  {
    "id": "aocp-elite-pt-04",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal",
    "question": "(Instituto AOCP - PMPE) O verbo \"assistir\" possui diferentes regências conforme o seu significado. Assinale a alternativa que atende rigorosamente à norma culta no sentido de \"presenciar / ver\":",
    "options": [
      "Os recrutas assistiram o desfile militar de 7 de setembro.",
      "O comandante assistiu em Recife durante a instrução militar.",
      "O médico assistiu ao policial ferido com primeiros socorros.",
      "Os recrutas assistiram ao desfile militar de 7 de setembro.",
      "Este é um direito que assiste para todos os cidadãos."
    ],
    "correctIndex": 3,
    "explanation": "No sentido de \"ver / presenciar\", o verbo ASSISTIR é transitivo indireto e exige a preposição \"a\" (quem assiste, assiste A algo: assistiram AO desfile). No sentido de \"prestar socorro / ajudar\", ele é transitivo direto (assistiu o policial ferido).",
    "fundamentacaoLegal": "Dicionário de Regência Verbal - Celso Pedro Luft.",
    "hint": "Assistir de \"ver\" pede \"A\". Assistir de \"cuidar / socorrer\" dispensa preposição.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque no sentido de ver/presenciar, omitir a preposição \"a\" é coloquialismo. Na norma padrão da AOCP, é obrigatório \"assistiram AO desfile\".",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque no sentido de prestar assistência/socorrer, o verbo é transitivo direto: \"assistiu O policial\".",
      "4": "Você errou porque no sentido de pertencer/caber, a regência é \"assiste a todos os cidadãos\", sem \"para\"."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Falta a preposição \"a\" exigida pelo sentido de ver/presenciar.",
      "B": "ERRADA. Sentido de morar/residir, não de ver.",
      "C": "ERRADA. Sentido de socorrer dispensa a preposição \"a\" na norma padrão.",
      "D": "Correta. No sentido de \"ver / presenciar\", o verbo ASSISTIR é transitivo indireto e exige a preposição \"a\" (quem assiste, assiste A algo: assistiram AO desfile). No sentido de \"prestar socorro / ajudar\", ele é transitivo direto (assistiu o policial ferido).",
      "E": "ERRADA. Preposição errada (deve ser \"a todos\", não \"para todos\")."
    },
    "dicaMacete": "BIZU: Viu com os olhos? Tem que ter \"AO\"! Assistiu AO filme, assistiu AO jogo, assistiu AO desfile da PMPE!"
  },
  {
    "id": "aocp-elite-pt-05",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação (Emprego da Vírgula)",
    "question": "(Instituto AOCP - PMPE) Em relação às regras de pontuação da norma-padrão, assinale a opção que apresenta pontuação inteiramente CORRETA:",
    "options": [
      "O comandante geral da polícia, autorizou a realização da nova escala de serviço.",
      "Os novos soldados, concluíram o curso de formação com bravura e honra.",
      "Pernambuco é um estado rico, em tradições históricas e culturais.",
      "A viatura parou de repente, porque, faltou combustível no motor.",
      "Durante a madrugada fria de domingo, os policiais mantiveram o patrulhamento preventivo."
    ],
    "correctIndex": 4,
    "explanation": "A frase \"Durante a madrugada fria de domingo, os policiais mantiveram o patrulhamento preventivo\" está correta porque separa um adjunto adverbial de tempo deslocado de longa extensão (\"Durante a madrugada fria de domingo\") por vírgula obrigatória antes da oração principal.",
    "fundamentacaoLegal": "Gramática Normativa - Sintaxe de Pontuação (Adjunto Adverbial Deslocado).",
    "hint": "Regra de ouro da língua portuguesa: NUNCA se separa sujeito de predicado com vírgula!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque a vírgula separou o sujeito (\"O comandante geral da polícia\") de seu verbo (\"autorizou\"). Essa separação é PROIBIDA na língua portuguesa.",
      "1": "Você errou porque a vírgula separou o sujeito (\"Os novos soldados\") do verbo (\"concluíram\"). Erro clássico punido pela AOCP.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque colocou vírgula logo após a conjunção explicativa \"porque\", truncando a oração."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Vírgula proibida entre sujeito e verbo.",
      "B": "ERRADA. Vírgula proibida entre sujeito e verbo.",
      "C": "ERRADA. Vírgula separando o adjetivo de seu complemento.",
      "D": "ERRADA. Vírgula descabida após a conjunção \"porque\".",
      "E": "Correta. A frase \"Durante a madrugada fria de domingo, os policiais mantiveram o patrulhamento preventivo\" está correta porque separa um adjunto adverbial de tempo deslocado de longa extensão (\"Durante a madrugada fria de domingo\") por vírgula obrigatória antes da oração principal."
    },
    "dicaMacete": "REGRA INVIOLÁVEL: Sujeito e Verbo são casados e não se divorciam com vírgula! Quem autorizou? O comandante. Não meta vírgula aí!"
  },
  {
    "id": "aocp-elite-his-01",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana e Batalha dos Guararapes",
    "question": "(Instituto AOCP - PMPE) A Insurreição Pernambucana (1645-1654), que culminou na expulsão dos holandeses, é considerada um marco fundamental na formação da identidade militar brasileira porque:",
    "options": [
      "Promoveu a união das três etnias (brancos liderados por Fernandes Vieira, negros por Henrique Dias e indígenas por Filipe Camarão) na Batalha dos Guararapes.",
      "Foi financiada e conduzida exclusivamente por tropas enviadas diretamente pela Coroa Espanhola.",
      "Resultou na proclamação imediata da primeira república independente das Américas no Recife.",
      "Teve apoio incondicional dos judeus sefarditas recifenses contra as tropas luso-brasileiras.",
      "Garantiu a libertação formal e a cidadania plena a todos os escravizados do Nordeste colonial."
    ],
    "correctIndex": 0,
    "explanation": "A Batalha dos Guararapes (1648 e 1649) foi o clímax da Insurreição Pernambucana. Reuniu luso-brasileiros brancos (João Fernandes Vieira e André Vidal de Negreiros), o Terço de Homens Pretos (Henrique Dias) e os guerreiros indígenas potiguares (Filipe Camarão), simbolizando o mito de fundação do Exército Brasileiro e a bravura do povo pernambucano.",
    "fundamentacaoLegal": "História de Pernambuco - Batalhas dos Guararapes (1648-1649) e Insurreição Pernambucana.",
    "hint": "Lembre-se da união das \"três raças\" que expulsou os holandeses dos Montes Guararapes em Jaboatão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque a insurreição manteve Pernambuco leal à coroa portuguesa (União Ibérica já desfeita na Restauração de 1640), não proclamou república.",
      "3": "Você errou porque os judeus apoiavam o domínio holandês pela tolerância religiosa de Maurício de Nassau.",
      "4": "Você errou porque, apesar do heroísmo de Henrique Dias, a escravidão foi mantida no período colonial."
    },
    "analiseAlternativas": {
      "A": "Correta. A Batalha dos Guararapes (1648 e 1649) foi o clímax da Insurreição Pernambucana. Reuniu luso-brasileiros brancos (João Fernandes Vieira e André Vidal de Negreiros), o Terço de Homens Pretos (Henrique Dias) e os guerreiros indígenas potiguares (Filipe Camarão), simbolizando o mito de fundação do Exército Brasileiro e a bravura do povo pernambucano.",
      "B": "ERRADA. Movimento nativista luso-brasileiro, sem financiamento espanhol.",
      "C": "ERRADA. Proclamação de república ocorreria apenas em 1817.",
      "D": "ERRADA. A comunidade judaica prosperou sob Nassau e temia a inquisição lusa.",
      "E": "ERRADA. A abolição não ocorreu nessa época."
    },
    "dicaMacete": "BIZU DOS GUARARAPES: Três homens, três povos, uma vitória: Branco (Vieira), Negro (Dias) e Índio (Camarão) expulsaram Nassau e os batavos!"
  },
  {
    "id": "aocp-elite-his-02",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817",
    "question": "(Instituto AOCP - PMPE) A Revolução Pernambucana de 1817, também conhecida como \"Revolução dos Padres\", destacou-se no cenário nacional por qual dos seguintes motivos?",
    "options": [
      "Defendeu a restauração da monarquia absolutista e a união definitiva com a corte de Lisboa.",
      "Foi a única rebelião colonial a ultrapassar a fase conspiratória e proclamar um governo republicano independente de fato.",
      "Ocorreu sem conflito armado, mediante acordo diplomático pacífico com D. João VI.",
      "Foi liderada por cafeicultores do interior paulista radicados em Olinda.",
      "Teve curta duração de apenas 24 horas, sendo desarticulada antes da criação de leis próprias."
    ],
    "correctIndex": 1,
    "explanation": "A Revolução de 1817 foi a única revolta separatista do período colonial que de fato assumiu o poder, expulsou o governador Caetano Pinto de Miranda Montenegro, proclamou a República de Pernambuco, criou sua própria bandeira (base da atual bandeira de PE) e governou o território por mais de 70 dias.",
    "fundamentacaoLegal": "História de Pernambuco - Revolução Republicana de 1817 e Lei da Data Magna (6 de Março).",
    "hint": "Por que o dia 6 de março é feriado em Pernambuco (Data Magna)? Porque nessa data em 1817 os pernambucanos tomaram o poder!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você marcou (A): A alternativa (A) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque houve forte repressão armada, com tropas e esquadras enviadas da Bahia e do Rio de Janeiro.",
      "3": "Você errou porque cafeicultores paulistas nada tinham a ver com o movimento pernambucano.",
      "4": "Você errou porque durou mais de dois meses (mais de 70 dias), com leis e embaixadas enviadas aos EUA e Inglaterra."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Eram contrários ao absolutismo régio da corte no Rio de Janeiro.",
      "B": "Correta. A Revolução de 1817 foi a única revolta separatista do período colonial que de fato assumiu o poder, expulsou o governador Caetano Pinto de Miranda Montenegro, proclamou a República de Pernambuco, criou sua própria bandeira (base da atual bandeira de PE) e governou o território por mais de 70 dias.",
      "C": "ERRADA. Houve martírios e enforcamentos de líderes como Domingos José Martins e Padre João Ribeiro.",
      "D": "ERRADA. Liderada pela elite açucareira, comerciantes, clero católico e militares pernambucanos.",
      "E": "ERRADA. Durou mais de 70 dias de governo efetivo."
    },
    "dicaMacete": "DATA MAGNA (6 DE MARÇO): Pernambuco foi país independente por 75 dias com constituição provisória e liberdade de imprensa!"
  },
  {
    "id": "aocp-elite-his-03",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) e Frei Caneca",
    "question": "(Instituto AOCP - PMPE) O estopim para a deflagração da Confederação do Equador em Pernambuco (1824) foi diretamente provocado por:",
    "options": [
      "A invasão de tropas francesas lideradas por Napoleão Bonaparte no litoral de Olinda.",
      "A tentativa de restabelecimento do exclusivo comercial holandês no Porto de Suape.",
      "A dissolução arbitrária da Assembleia Constituinte por Dom Pedro I e a imposição autoritária do Poder Moderador na Carta de 1824.",
      "A decretação do fim da cultura da cana-de-açúcar na Zona da Mata pelo governo imperial.",
      "A execução sumária de Zumbi dos Palmares nas matas de Alagoas."
    ],
    "correctIndex": 2,
    "explanation": "A Confederação do Equador de 1824 foi uma revolta de caráter republicano e federalista deflagrada em Pernambuco. A causa imediata foi a imposição autoritária da Constituição outorgada de 1824 por D. Pedro I (após fechar a Assembleia Constituinte na Noite da Agonia de 1823) e a nomeação de um presidente de província que os pernambucanos rejeitavam (Francisco Paes Barreto). Frei Caneca e Manoel de Carvalho Paes de Andrade foram suas figuras centrais.",
    "fundamentacaoLegal": "História do Brasil Império e de Pernambuco - Confederação do Equador (1824).",
    "hint": "D. Pedro I impôs o Poder Moderador de cima para baixo. Os pernambucanos não aceitaram o autoritarismo!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque Napoleão já havia falecido em 1821 e nunca houve invasão francesa em Pernambuco em 1824.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque a cana de açúcar continuava sendo o motor econômico da província.",
      "4": "Você errou porque Zumbi dos Palmares morreu em 1695, mais de um século antes."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Anacronismo histórico grotesco.",
      "B": "ERRADA. Holandeses faziam parte do passado colonial.",
      "C": "Correta. A Confederação do Equador de 1824 foi uma revolta de caráter republicano e federalista deflagrada em Pernambuco. A causa imediata foi a imposição autoritária da Constituição outorgada de 1824 por D. Pedro I (após fechar a Assembleia Constituinte na Noite da Agonia de 1823) e a nomeação de um presidente de província que os pernambucanos rejeitavam (Francisco Paes Barreto). Frei Caneca e Manoel de Carvalho Paes de Andrade foram suas figuras centrais.",
      "D": "ERRADA. O Império dependia dos impostos do açúcar.",
      "E": "ERRADA. Palmares foi destruído no final do século XVII."
    },
    "dicaMacete": "BIZU FREI CANECA: 1824 = Caneca fuzilado no Forte das Cinco Pontas (os carrascos se recusaram a enforcá-lo por respeito ao padre)!"
  },
  {
    "id": "aocp-elite-rlm-01",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Proposição Condicional (Regra do MANÉ)",
    "question": "(Instituto AOCP - PMPE) Considere a proposição lógica: \"Se o soldado estuda com disciplina, então ele passa no concurso da PMPE\". A NEGAÇÃO lógica dessa afirmação é expressa por:",
    "options": [
      "Se o soldado não estuda com disciplina, então ele não passa no concurso da PMPE.",
      "Se o soldado passar no concurso da PMPE, então ele estudou com disciplina.",
      "O soldado não estuda com disciplina ou passa no concurso da PMPE.",
      "O soldado estuda com disciplina e não passa no concurso da PMPE.",
      "O soldado não estuda com disciplina e não passa no concurso da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "A negação da proposição condicional \"Se P, então Q\" (P -> Q) é dada pela equivalência ~(P -> Q) = P ^ ~Q. Aplica-se a famosa regra do MANÉ: MAntém a primeira parte (P: o soldado estuda com disciplina) E nega a segunda parte (~Q: e NÃO passa no concurso da PMPE).",
    "fundamentacaoLegal": "Lógica Proposicional - Negação de Condicionais (~(P -> Q) <==> P ^ ~Q).",
    "hint": "Regra do MANÉ: Mantém a primeira E Nega a segunda! O conectivo SE... ENTÃO vira conectivo E.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Identificar as proposições simples da condicional: P = \"o soldado estuda com disciplina\"; Q = \"ele passa no concurso\".",
      "Estrutura formal da proposição dada: P -> Q (Se P, então Q).",
      "Lembrar que a negação de uma condicional NUNCA é outra condicional!",
      "Aplicar a regra lógica do MANÉ: ~(P -> Q) = P e ~Q.",
      "Passo a passo textual: Mantém a primeira: \"O soldado estuda com disciplina\" + Conectivo \"E\" + Nega a segunda: \"NÃO passa no concurso\".",
      "Resultado final: \"O soldado estuda com disciplina E não passa no concurso da PMPE\" (Alternativa B)."
    ],
    "porqueErrou": {
      "0": "Você errou porque transformar uma condicional em outra condicional negativa é o erro mais comum induzido pela banca AOCP! A negação de \"Se P então Q\" vira conjunção \"E\".",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque \"não P ou Q\" é a EQUIVALÊNCIA da condicional (Regra do Neymar), não a sua negação.",
      "4": "Você errou porque negou a primeira parte, mas a regra do MANÉ manda MANTER a primeira."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Negação de condicional NUNCA começa com \"Se\".",
      "B": "ERRADA. É a recíproca simples.",
      "C": "ERRADA. Essa fórmula (~P v Q) é a equivalência, não a negação.",
      "D": "Correta. A negação da proposição condicional \"Se P, então Q\" (P -> Q) é dada pela equivalência ~(P -> Q) = P ^ ~Q. Aplica-se a famosa regra do MANÉ: MAntém a primeira parte (P: o soldado estuda com disciplina) E nega a segunda parte (~Q: e NÃO passa no concurso da PMPE).",
      "E": "ERRADA. Negou ambas as partes, violando a regra lógica."
    },
    "dicaMacete": "LEMBRE DO MANÉ: Quem nega condicional é MANÉ! MA-ntém a primeira E NE-ga a segunda!"
  },
  {
    "id": "aocp-elite-rlm-02",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Equivalência Lógica da Condicional (Contrapositiva)",
    "question": "(Instituto AOCP - PMPE) Uma afirmação equivalente à proposição \"Se chove em Caruaru, então a viatura da PMPE trafega com cautela\" é:",
    "options": [
      "Se a viatura da PMPE trafega com cautela, então chove em Caruaru.",
      "Se não chove em Caruaru, então a viatura da PMPE não trafega com cautela.",
      "Não chove em Caruaru e a viatura da PMPE trafega com cautela.",
      "Chove em Caruaru e a viatura da PMPE não trafega com cautela.",
      "Se a viatura da PMPE não trafega com cautela, então não chove em Caruaru."
    ],
    "correctIndex": 4,
    "explanation": "A principal equivalência lógica de uma condicional (P -> Q) é a CONTRAPOSITIVA (~Q -> ~P): inverte-se a posição das duas proposições e nega-se ambas, mantendo o conectivo \"Se... então\". Logo: Se a viatura da PMPE NÃO trafega com cautela, então NÃO chove em Caruaru.",
    "fundamentacaoLegal": "Lógica Sentencial - Teorema da Contrapositiva ((P -> Q) <==> (~Q -> ~P)).",
    "hint": "Regra do \"Volta Negando\": mantenha o \"Se... então\", traga a parte de trás para a frente negando, e leve a frente para trás negando!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Proposição P: \"chove em Caruaru\".",
      "Proposição Q: \"a viatura trafega com cautela\".",
      "Estrutura: P -> Q.",
      "Equivalência pela Contrapositiva: inverte e nega tudo (~Q -> ~P).",
      "Negação de Q: \"a viatura da PMPE NÃO trafega com cautela\".",
      "Negação de P: \"NÃO chove em Caruaru\".",
      "Juntando com Se... então: \"Se a viatura da PMPE NÃO trafega com cautela, então NÃO chove em Caruaru\" (Alternativa C)."
    ],
    "porqueErrou": {
      "0": "Você errou porque apenas inverteu sem negar (Q -> P), o que é a falácia da afirmação do consequente.",
      "1": "Você errou porque apenas negou sem inverter (~P -> ~Q), o que é a falácia da negação do antecedente.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque \"P e ~Q\" é a NEGAÇÃO da condicional, e o enunciado pediu a EQUIVALÊNCIA."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Inverteu sem negar.",
      "B": "ERRADA. Negou sem inverter.",
      "C": "ERRADA. Conjunção arbitrária sem validade lógica.",
      "D": "ERRADA. Essa é a negação (MANÉ), não a equivalência.",
      "E": "Correta. A principal equivalência lógica de uma condicional (P -> Q) é a CONTRAPOSITIVA (~Q -> ~P): inverte-se a posição das duas proposições e nega-se ambas, mantendo o conectivo \"Se... então\". Logo: Se a viatura da PMPE NÃO trafega com cautela, então NÃO chove em Caruaru."
    },
    "dicaMacete": "BIZU DA CONTRAPOSITIVA: Se quer equivalência de condicional mantendo o \"SE\", é só VOLTAR NEGANDO! (Trás pra frente negando tudo)."
  },
  {
    "id": "aocp-elite-rlm-03",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Análise Combinatória (Combinação Simples)",
    "question": "(Instituto AOCP - PMPE) Em um pelotão da PMPE, há 8 soldados disponíveis. O sargento precisa escalar uma equipe de patrulhamento tático composta por exatamente 3 soldados. De quantas maneiras distintas essa equipe pode ser formada?",
    "options": [
      "56 maneiras.",
      "24 maneiras.",
      "120 maneiras.",
      "336 maneiras.",
      "512 maneiras."
    ],
    "correctIndex": 0,
    "explanation": "Como a ordem dos soldados escolhidos na equipe não altera a equipe (a equipe com Silva, Souza e Santos é exatamente a mesma com Santos, Souza e Silva), trata-se de um problema de COMBINAÇÃO SIMPLES de 8 elementos tomados 3 a 3. C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56 maneiras.",
    "fundamentacaoLegal": "Análise Combinatória - Fórmula da Combinação Simples C(n, p) = n! / (p! * (n - p)!).",
    "hint": "A ordem dos soldados importa no grupo? Não! Grupo de soldados não tem cargo nem ordem, então COMBINA (Combinação)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Passo 1: Identificar se é Arranjo ou Combinação. A ordem dos soldados na equipe não importa (formam o mesmo grupo), logo é COMBINAÇÃO SIMPLES.",
      "Passo 2: Fórmula da Combinação: C(n, p) = n! / [p! * (n - p)!], com n = 8 e p = 3.",
      "Passo 3: Método do cálculo rápido: C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1).",
      "Passo 4: Multiplicar o numerador: 8 * 7 = 56; 56 * 6 = 336.",
      "Passo 5: Multiplicar o denominador: 3 * 2 * 1 = 6.",
      "Passo 6: Divisão final: 336 / 6 = 56.",
      "Conclusão: Existem exatamente 56 maneiras distintas de formar a equipe de 3 soldados (Alternativa B)."
    ],
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou no cálculo fracionário ou confundiu com C(10, 3).",
      "3": "Você errou porque calculou ARRANJO (8 * 7 * 6 = 336), esquecendo de dividir pelo fatorial de 3 (6). O arranjo considera a ordem relevante, o que não ocorre na equipe.",
      "4": "Você errou porque elevou 8 ao cubo (8³ = 512)."
    },
    "analiseAlternativas": {
      "A": "Correta. Como a ordem dos soldados escolhidos na equipe não altera a equipe (a equipe com Silva, Souza e Santos é exatamente a mesma com Santos, Souza e Silva), trata-se de um problema de COMBINAÇÃO SIMPLES de 8 elementos tomados 3 a 3. C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 336 / 6 = 56 maneiras.",
      "B": "ERRADA. Simples multiplicação 8 * 3.",
      "C": "ERRADA. Erro de cálculo.",
      "D": "ERRADA. Isso seria se a ordem importasse (Arranjo: 8 * 7 * 6 = 336).",
      "E": "ERRADA. Potenciação descabida."
    },
    "dicaMacete": "MACETE DO \"SE COMBINA\": Grupo, equipe, comissão ou patrulha? A ordem NÃO importa? COMBINAÇÃO! Desenrole 3 números em cima (8*7*6) e divida por 3 em baixo (3*2*1)!"
  },
  {
    "id": "aocp-elite-rlm-04",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Conjuntos e Diagramas de Venn",
    "question": "(Instituto AOCP - PMPE) Em um grupo de 100 candidatos ao concurso da PMPE, 60 estudam Língua Portuguesa, 50 estudam Raciocínio Lógico e 20 estudam ambas as disciplinas. Quantos candidatos desse grupo NÃO estudam nenhuma dessas duas disciplinas?",
    "options": [
      "15 candidatos.",
      "10 candidatos.",
      "20 candidatos.",
      "30 candidatos.",
      "40 candidatos."
    ],
    "correctIndex": 1,
    "explanation": "Pelo Princípio da Inclusão-Exclusão: Total que estuda ao menos uma disciplina = Português + RLM - Ambos = 60 + 50 - 20 = 90 candidatos. Como o total de candidatos é 100, os que não estudam nenhuma das duas disciplinas são: 100 - 90 = 10 candidatos.",
    "fundamentacaoLegal": "Teoria dos Conjuntos - União de Dois Conjuntos: n(A U B) = n(A) + n(B) - n(A ∩ B).",
    "hint": "Comece sempre pela interseção (quem estuda ambas: 20)! Depois subtraia dos conjuntos individuais.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Passo 1: Identificar a interseção (quem faz as duas coisas ao mesmo tempo): Ambos = 20.",
      "Passo 2: Calcular quem estuda APENAS Português: 60 - 20 = 40 candidatos.",
      "Passo 3: Calcular quem estuda APENAS Raciocínio Lógico: 50 - 20 = 30 candidatos.",
      "Passo 4: Somar todos os candidatos que estudam alguma matéria: Apenas Port (40) + Ambos (20) + Apenas RLM (30) = 90 candidatos.",
      "Passo 5: Subtrair do total geral de 100 candidatos: 100 - 90 = 10 candidatos.",
      "Conclusão: Exatamente 10 candidatos não estudam nenhuma das duas disciplinas (Alternativa A)."
    ],
    "porqueErrou": {
      "0": "Você marcou (A): A alternativa (A) está incorreta segundo o gabarito oficial.",
      "2": "Você errou confundindo o resultado com o número de candidatos da interseção (20).",
      "3": "Você errou porque calculou apenas quem estuda exclusivamente RLM (30).",
      "4": "Você errou porque calculou apenas quem estuda exclusivamente Português (40)."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Valor incorreto.",
      "B": "Correta. Pelo Princípio da Inclusão-Exclusão: Total que estuda ao menos uma disciplina = Português + RLM - Ambos = 60 + 50 - 20 = 90 candidatos. Como o total de candidatos é 100, os que não estudam nenhuma das duas disciplinas são: 100 - 90 = 10 candidatos.",
      "C": "ERRADA. 20 é a interseção (os que estudam ambas).",
      "D": "ERRADA. 30 é o grupo que estuda apenas RLM.",
      "E": "ERRADA. 40 é o grupo que estuda apenas Português."
    },
    "dicaMacete": "REGRA DO DIAGRAMA DE VENN: Sempre comece preenchendo o MEIO (interseção)! Tire o meio dos lados e some tudo!"
  },
  {
    "id": "aocp-elite-rlm-05",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Porcentagem e Variação Sucessiva",
    "question": "(Instituto AOCP - PMPE) O salário inicial de um Soldado da PMPE sofreu um reajuste de 10% no primeiro ano. No segundo ano, sofreu um novo aumento de 20% sobre o salário já reajustado. Em relação ao valor inicial, o aumento percentual total acumulado foi de:",
    "options": [
      "30%",
      "31%",
      "32%",
      "33%",
      "35%"
    ],
    "correctIndex": 2,
    "explanation": "Aumentos percentuais sucessivos não devem ser somados de forma simples. Usando o método do fator de multiplicação ou atribuindo o valor base de R$ 100: 100 + 10% = 110. Depois, 110 + 20% (20% de 110 = 22) = 132. O aumento total em relação a 100 foi de 32%.",
    "fundamentacaoLegal": "Matemática Financeira - Fatores de Correção e Aumentos Sucessivos.",
    "hint": "Atribua o valor de R$ 100,00! É a técnica mais infalível e rápida para acertar porcentagem na prova da AOCP.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Passo 1: Suponha um salário inicial fictício de R$ 100,00.",
      "Passo 2: Primeiro aumento de 10%: 10% de R$ 100,00 = R$ 10,00. Novo valor = 100 + 10 = R$ 110,00.",
      "Passo 3: Segundo aumento de 20% sobre R$ 110,00: 20% de 110 = (20 / 100) * 110 = 2 * 11 = R$ 22,00.",
      "Passo 4: Salário final = 110 + 22 = R$ 132,00.",
      "Passo 5: Comparando com os R$ 100,00 originais: 132 - 100 = 32.",
      "Conclusão: O aumento real acumulado é de 32% (Alternativa C)."
    ],
    "porqueErrou": {
      "0": "Você errou porque somou 10% + 20% = 30%. Porcentagem sucessiva NUNCA é soma simples, pois o segundo aumento incide sobre um valor já maior!",
      "1": "Você errou no cálculo dos 20% sobre 110.",
      "3": "Você errou na soma das parcelas.",
      "4": "Você errou chutando um valor exagerado."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Pegadinha clássica da soma simples 10 + 20 = 30%.",
      "B": "ERRADA. Erro de cálculo.",
      "C": "CORRETA. 1,10 * 1,20 = 1,32, ou seja, aumento acumulado de 32%.",
      "D": "ERRADA. Cálculo incorreto.",
      "E": "ERRADA. Muito acima do real."
    },
    "dicaMacete": "BIZU DO 100: Toda questão de aumento sucessivo na AOCP, crie R$ 100,00 no bolso! 100 -> 110 -> 132 = 32%!"
  },
  {
    "id": "aocp-elite-inf-01",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Informática",
    "topicoEdital": "Segurança da Informação e Tipos de Malware",
    "question": "(Instituto AOCP - PMPE) Um tipo de código malicioso que sequestra os dados do usuário, criptografando arquivos confidenciais do sistema operacional e exigindo pagamento de resgate (geralmente em criptomoedas) para fornecer a chave de descriptografia, denomina-se:",
    "options": [
      "Spyware.",
      "Worm.",
      "Keylogger.",
      "Ransomware.",
      "Adware."
    ],
    "correctIndex": 3,
    "explanation": "RANSOMWARE (do inglês \"ransom\", que significa resgate) é o software malicioso projetado especificamente para bloquear ou criptografar os arquivos de uma vítima e exigir resgate financeiro para devolver o acesso.",
    "fundamentacaoLegal": "Cartilha de Segurança para Internet (CERT.br) - Capítulo sobre Códigos Maliciosos (Malware).",
    "hint": "Palavra-chave: \"SEQUESTRO de arquivos\" e \"cobrança de RESGATE\" = RANSOM.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque Spyware é um software espião que coleta informações do usuário em silêncio, sem cobrar resgate.",
      "1": "Você errou porque Worm é um verme que se propaga automaticamente pelas redes consumindo largura de banda.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "4": "Você errou porque Adware exibe anúncios publicitários indesejados."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Spyware monitora e espiona hábitos do usuário.",
      "B": "ERRADA. Worm se replica automaticamente pelas redes.",
      "C": "ERRADA. Keylogger é um tipo de spyware que captura teclas.",
      "D": "Correta. RANSOMWARE (do inglês \"ransom\", que significa resgate) é o software malicioso projetado especificamente para bloquear ou criptografar os arquivos de uma vítima e exigir resgate financeiro para devolver o acesso.",
      "E": "ERRADA. Adware é voltado para exibição forçada de propagandas."
    },
    "dicaMacete": "BIZU EM INGLÊS: RANSOM = RESGATE. Malware que cobra resgate só pode ser RANSOMWARE!"
  },
  {
    "id": "aocp-elite-inf-02",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Informática",
    "topicoEdital": "Atalhos do Windows 10/11 e Produtividade",
    "question": "(Instituto AOCP - PMPE) No ambiente Windows 10/11, o policial militar que precisa se ausentar rapidamente da sua estação de trabalho e deseja BLOQUEAR imediatamente o computador para proteger os dados da corporação deve utilizar o atalho de teclado:",
    "options": [
      "Ctrl + Shift + Esc",
      "Ctrl + Alt + Del",
      "Logotipo do Windows (Win) + D",
      "Alt + F4",
      "Logotipo do Windows (Win) + L"
    ],
    "correctIndex": 4,
    "explanation": "O atalho tecla do Windows + L (Lock / Bloquear) bloqueia instantaneamente a tela de sessão do computador, exigindo a senha ou biometria para reabrir, preservando todos os programas abertos.",
    "fundamentacaoLegal": "Documentação Oficial Microsoft Windows - Atalhos de Teclado no Windows.",
    "hint": "L vem de LOCK (bloquear em inglês).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas do Windows.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque Win + D apenas minimiza todas as janelas e exibe a Área de Trabalho (Desktop), mas NÃO bloqueia a sessão.",
      "3": "Você errou porque Alt + F4 fecha a janela do programa ativo no momento."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Abre o Gerenciador de Tarefas.",
      "B": "ERRADA. Abre tela de opções azuis, não bloqueia direto.",
      "C": "ERRADA. Win + D = Desktop (mostrar área de trabalho).",
      "D": "ERRADA. Alt + F4 = Fechar janela.",
      "E": "Correta. O atalho tecla do Windows + L (Lock / Bloquear) bloqueia instantaneamente a tela de sessão do computador, exigindo a senha ou biometria para reabrir, preservando todos os programas abertos."
    },
    "dicaMacete": "BIZU: Saiu para tomar café no quartel? Aperta WIN + L (Lock = Tranca tudo)!"
  },
  {
    "id": "aocp-elite-dir-01",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Inviolabilidade de Domicílio (Artigo 5º, XI da CF/88)",
    "question": "(Instituto AOCP - PMPE) De acordo com o artigo 5º, inciso XI, da Constituição Federal de 1988, a casa é asilo inviolável do indivíduo. A entrada no domicílio SEM o consentimento do morador é expressamente permitida em qual hipótese?",
    "options": [
      "A qualquer hora (dia ou noite) em caso de flagrante delito, desastre, ou para prestar socorro.",
      "Somente durante a noite, em caso de flagrante delito ou desastre.",
      "A qualquer hora do dia ou da noite, mediante determinação judicial fundamentada.",
      "Apenas durante o dia, mediante simples suspeita policial fundada em denúncia anônima.",
      "A qualquer hora, mediante ordem verbal de autoridade policial competente."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 5º, XI da CF/88: \"a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial\". Portanto, flagrante, desastre e socorro autorizam a entrada a qualquer hora (dia ou noite). Já a ordem judicial é autorizada EXCLUSIVAMENTE DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, inciso XI da Constituição Federal de 1988.",
    "hint": "Lembre-se: determinação judicial é SÓ DE DIA! Flagrante, desastre e socorro é a qualquer hora!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "1": "Você errou porque não é \"somente durante a noite\", flagrante e socorro valem para dia e noite.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque denúncia anônima não afasta a inviolabilidade de domicílio e ordem judicial é exigida.",
      "4": "Você errou porque ordem verbal de autoridade policial não autoriza violação de domicílio."
    },
    "analiseAlternativas": {
      "A": "Correta. Conforme o Art. 5º, XI da CF/88: \"a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial\". Portanto, flagrante, desastre e socorro autorizam a entrada a qualquer hora (dia ou noite). Já a ordem judicial é autorizada EXCLUSIVAMENTE DURANTE O DIA.",
      "B": "ERRADA. Vale para qualquer horário, não somente à noite.",
      "C": "ERRADA. Mandado judicial é EXCLUSIVAMENTE durante o dia.",
      "D": "ERRADA. Denúncia anônima não permite invasão domiciliar (Tema 280 do STF).",
      "E": "ERRADA. Ordem de delegado/comandante não substitui mandado de juiz."
    },
    "dicaMacete": "BIZU DO DOMICÍLIO: DIA OU NOITE? Flagrante, Desastre e Socorro! SÓ DE DIA? Mandado do Juiz (ordem judicial)!"
  },
  {
    "id": "aocp-elite-dir-02",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Segurança Pública e Competência da PM (Artigo 144 da CF/88)",
    "question": "(Instituto AOCP - PMPE) Segundo o Artigo 144, § 5º, da Constituição Federal de 1988, à Polícia Militar cabe especificamente:",
    "options": [
      "A apuração de infrações penais contra a ordem política e social com exclusividade.",
      "A polícia ostensiva e a preservação da ordem pública.",
      "A execução exclusiva de perícias criminais e medicina legal no âmbito estadual.",
      "A guarda externa de presídios federais e segurança aeroportuária.",
      "A investigação de crimes comuns ocorridos no território municipal."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 144, § 5º da CF/88 estabelece textualmente: \"Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil.\"",
    "fundamentacaoLegal": "Art. 144, § 5º da Constituição Federal de 1988.",
    "hint": "Palavras sagradas da PM na Constituição: POLÍCIA OSTENSIVA e PRESERVAÇÃO DA ORDEM PÚBLICA.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque apuração de crimes contra a ordem política e social cabe à Polícia Federal (Art. 144, § 1º).",
      "2": "Você errou porque perícia e medicina legal cabem à Polícia Científica/Polícia Civil.",
      "3": "Você errou porque guarda de presídios federais é atribuição da Polícia Penal Federal.",
      "4": "Você errou porque investigação de crimes comuns cabe à Polícia Civil (polícia judiciária)."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Competência da Polícia Federal.",
      "B": "CORRETA. Texto literal do Art. 144, § 5º da CF/88: Polícia Ostensiva e Preservação da Ordem Pública.",
      "C": "ERRADA. Competência da Polícia Civil/Científica.",
      "D": "ERRADA. Competência da Polícia Penal Federal.",
      "E": "ERRADA. Investigação judiciária é atribuição da Polícia Civil."
    },
    "dicaMacete": "MISSÃO DA PMPE NA CF/88: Duas expressões que você vai carregar no peito para sempre: POLÍCIA OSTENSIVA e PRESERVAÇÃO DA ORDEM PÚBLICA!"
  },
  {
    "id": "aocp-elite-dh-01",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Declaração Universal dos Direitos Humanos (1948)",
    "question": "(Instituto AOCP - PMPE) De acordo com a Declaração Universal dos Direitos Humanos (DUDH/1948), assinale a afirmação CORRETA sobre o direito à integridade física e moral:",
    "options": [
      "A tortura é admitida apenas em casos excepcionais de terrorismo e guerra declarada.",
      "Castigos cruéis são facultados desde que autorizados expressamente por autoridade judiciária.",
      "Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
      "O direito de não sofrer tratamento degradante aplica-se apenas aos cidadãos nacionais.",
      "A pena de trabalhos forçados perpétuos é legitimada para crimes hediondos."
    ],
    "correctIndex": 2,
    "explanation": "O Artigo 5º da DUDH de 1948 estabelece de maneira absoluta: \"Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.\" A vedação à tortura é norma peremptória (jus cogens) de Direito Internacional, não admitindo qualquer exceção, nem mesmo em estado de sítio ou guerra.",
    "fundamentacaoLegal": "Artigo 5º da Declaração Universal dos Direitos Humanos (Resolução 217 A (III) da ONU, 1948).",
    "hint": "A proibição da tortura e do tratamento desumano é ABSOLUTA. Não tem exceção!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque NUNCA, em hipótese alguma, a tortura é permitida no Direito Internacional ou Brasileiro.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque os Direitos Humanos são UNIVERSAIS, aplicando-se a todos os seres humanos sem distinção de nacionalidade.",
      "4": "Você errou porque trabalhos forçados perpétuos violam frontalmente a DUDH."
    },
    "analiseAlternativas": {
      "A": "ERRADA. A proibição à tortura é indeerrogável e absoluta.",
      "B": "ERRADA. Juiz não pode autorizar crueldade.",
      "C": "Correta. O Artigo 5º da DUDH de 1948 estabelece de maneira absoluta: \"Ninguém será submetido a tortura, nem a tratamento ou castigo cruel, desumano ou degradante.\" A vedação à tortura é norma peremptória (jus cogens) de Direito Internacional, não admitindo qualquer exceção, nem mesmo em estado de sítio ou guerra.",
      "D": "ERRADA. Característica fundamental dos Direitos Humanos: Universalidade.",
      "E": "ERRADA. Penas cruéis e perpétuas são terminantemente vedadas."
    },
    "dicaMacete": "REGRA ABSOLUTA: Tortura é proibida SEMPRE, em todo lugar, para qualquer pessoa, sem asterisco nem exceção!"
  },
  {
    "id": "aocp-elite-dh-02",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação PMPE",
    "topicoEdital": "Estatuto dos Militares do Estado de PE (Lei nº 6.783/74)",
    "question": "(Instituto AOCP - PMPE) De acordo com o Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/1974), os pilares fundamentais da instituição militar são:",
    "options": [
      "A antiguidade e a remuneração escalonada.",
      "A soberania popular e o livre consentimento.",
      "A discricionariedade e a oportunidade administrativa.",
      "A hierarquia e a disciplina.",
      "O sigilo absoluto e a inviolabilidade hierárquica."
    ],
    "correctIndex": 3,
    "explanation": "O Estatuto dos Policiais Militares do Estado de Pernambuco (Lei nº 6.783/74, Art. 12) consagra que: \"A hierarquia e a disciplina são as bases institucionais da Polícia Militar. A autoridade e a responsabilidade crescem com o grau hierárquico.\"",
    "fundamentacaoLegal": "Art. 12 da Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco).",
    "hint": "Quais são as duas bases sagradas de toda corporação militar desde a Constituição até o Estatuto de PE?",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque antiguidade é critério de precedência, não a base institucional.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque discricionariedade é conceito de direito administrativo geral.",
      "4": "Você errou porque sigilo não é base institucional."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Antiguidade é apenas critério acessório.",
      "B": "ERRADA. Princípio de direito constitucional geral.",
      "C": "ERRADA. Não consta como base institucional militar.",
      "D": "Correta. O Estatuto dos Policiais Militares do Estado de Pernambuco (Lei nº 6.783/74, Art. 12) consagra que: \"A hierarquia e a disciplina são as bases institucionais da Polícia Militar. A autoridade e a responsabilidade crescem com o grau hierárquico.\"",
      "E": "ERRADA. Não é base militar estatutária."
    },
    "dicaMacete": "DECORA PRA VIDA DE SOLDADO: HIERARQUIA e DISCIPLINA! São os dois trilhos por onde anda o trem da PMPE!"
  },
  {
    "id": "aocp-elite-pt-06",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas e Sentido Textual",
    "question": "(Instituto AOCP - PMPE) Na frase \"Embora a chuva estivesse intensa no Agreste pernambucano, a tropa manteve a operação\", a conjunção destacada estabelece relação de:",
    "options": [
      "Causa.",
      "Finalidade.",
      "Consequência.",
      "Condição.",
      "Concessão."
    ],
    "correctIndex": 4,
    "explanation": "A conjunção \"embora\" é uma conjunção subordinativa CONCESSIVA. A concessão expressa uma ideia de oposição ou obstáculo que não é suficiente para impedir a realização da oração principal (chovia forte, mas a operação não parou). São sinônimas: conquanto, ainda que, mesmo que, posto que.",
    "fundamentacaoLegal": "Gramática Normativa - Conjunções Subordinativas Adverbiais Concessivas.",
    "hint": "Substitua por \"ainda que\" ou \"mesmo que\". Se o sentido mantiver a oposição que não anula o fato, é concessão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque causa seria introduzida por \"porque\", \"já que\", \"visto que\".",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque consequência seria introduzida por \"de modo que\", \"tanto que\".",
      "3": "Você errou porque condição seria introduzida por \"se\", \"caso\", \"desde que\"."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Causa explica o motivo determinante.",
      "B": "ERRADA. Finalidade expressa objetivo pretendido.",
      "C": "ERRADA. Consequência expressa o efeito produzido.",
      "D": "ERRADA. Condição expressa hipótese necessária.",
      "E": "Correta. A conjunção \"embora\" é uma conjunção subordinativa CONCESSIVA. A concessão expressa uma ideia de oposição ou obstáculo que não é suficiente para impedir a realização da oração principal (chovia forte, mas a operação não parou). São sinônimas: conquanto, ainda que, mesmo que, posto que."
    },
    "dicaMacete": "BIZU DA CONCESSÃO: Embora, Conquanto, Ainda que, Mesmo que = Quebram a oposição e fazem acontecer mesmo com dificuldade!"
  },
  {
    "id": "aocp-elite-his-04",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711)",
    "question": "(Instituto AOCP - PMPE) A Guerra dos Mascates (1710-1711), travada em território pernambucano, representou o confronto histórico entre:",
    "options": [
      "A nobreza agrária latifundiária de Olinda (endividada) e os comerciantes portugueses do Recife (mascates enriquecidos).",
      "Os escravizados do Quilombo dos Palmares e as tropas regulares portuguesas.",
      "Os jesuítas espanhóis e os colonos partidários da escravidão indígena.",
      "Os partidários da independência dos Países Baixos e as forças leais a Maurício de Nassau.",
      "Os confederados do Equador e as tropas imperiais de Dom Pedro I."
    ],
    "correctIndex": 0,
    "explanation": "A Guerra dos Mascates foi um conflito de caráter nativista e socioeconômico. De um lado estavam os aristocratas senhores de engenho de Olinda (que detinham o poder político, mas estavam endividados com a crise do açúcar) e, do outro, os mascates (comerciantes portugueses do Recife que acumulavam grande riqueza econômica e pleiteavam a emancipação política da vila do Recife). Com a vitória do Recife, este foi elevado à condição de vila autônoma.",
    "fundamentacaoLegal": "História de Pernambuco Colonial - Conflitos Nativistas (Guerra dos Mascates 1710-1711).",
    "hint": "Olinda = Senhores de engenho falidos x Recife = Comerciantes mascates ricos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque não havia jesuítas espanhóis governando o Recife nessa época.",
      "3": "Você errou porque ocorreu em 1710, mais de meio século após a expulsão dos holandeses.",
      "4": "Você errou porque a Confederação do Equador aconteceu mais de 100 anos depois, em 1824."
    },
    "analiseAlternativas": {
      "A": "Correta. A Guerra dos Mascates foi um conflito de caráter nativista e socioeconômico. De um lado estavam os aristocratas senhores de engenho de Olinda (que detinham o poder político, mas estavam endividados com a crise do açúcar) e, do outro, os mascates (comerciantes portugueses do Recife que acumulavam grande riqueza econômica e pleiteavam a emancipação política da vila do Recife). Com a vitória do Recife, este foi elevado à condição de vila autônoma.",
      "B": "ERRADA. Não envolveu quilombos como protagonistas.",
      "C": "ERRADA. Jesuítas espanhóis atuavam nas missões do Sul do país.",
      "D": "ERRADA. Holandeses já haviam capitulado em 1654.",
      "E": "ERRADA. Anacronismo histórico."
    },
    "dicaMacete": "BIZU DOS MASCATES: Olinda tinha o título mas não tinha o dinheiro; Recife tinha o dinheiro (mascates) e comprou o poder!"
  },
  {
    "id": "aocp-elite-his-05",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848) e o Manifesto ao Mundo",
    "question": "(Instituto AOCP - PMPE) A Revolução Praieira de 1848 em Pernambuco, última grande rebelião provincial do Brasil Império, notabilizou-se pela publicação de seu documento programático denominado \"Manifesto ao Mundo\". Entre as propostas desse manifesto, destacava-se:",
    "options": [
      "A monarquia absolutista e a restauração do tráfico transatlântico de escravos.",
      "O voto livre e universal do povo brasileiro, a liberdade irrestrita de imprensa e a extinção do Poder Moderador.",
      "A submissão militar incondicional de Pernambuco à Coroa Britânica.",
      "A proibição do comércio a retalho exercido por brasileiros natos.",
      "A transferência imediata da capital imperial do Rio de Janeiro para o Recife."
    ],
    "correctIndex": 1,
    "explanation": "A Revolução Praieira (1848-1850) teve influência direta da \"Primavera dos Povos\" europeia. Redigido por Borges da Fonseca, o \"Manifesto ao Mundo\" exigia: voto livre e universal para o povo brasileiro, plena liberdade de imprensa, trabalho para os cidadãos desocupados, nacionalização do comércio a retalho (nacionalização dos mascates) e a extinção do Poder Moderador e do Senado vitalício.",
    "fundamentacaoLegal": "História do Segundo Reinado - Revolução Praieira de 1848 e o Manifesto ao Mundo.",
    "hint": "Os rebeldes da Praia (rua do jornal Diário Novo) queriam voto universal, fim do poder moderador e liberdade de imprensa!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque o manifesto era de inspiração liberal-socialista utópica, avesso ao absolutismo.",
      "2": "Você errou porque os praieiros eram nacionalistas exaltados, contra influências estrangeiras.",
      "3": "Você errou porque eles exigiam exatamente o oposto: o comércio a retalho deveria ser EXCLUSIVO de brasileiros natos.",
      "4": "Você errou porque nunca propuseram mudança da capital imperial para o Recife."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Documento de cunho democrático e liberal radical.",
      "B": "CORRETA. Voto livre e universal, liberdade de imprensa, garantia de trabalho e extinção do Poder Moderador.",
      "C": "ERRADA. Nenhuma vinculação à Grã-Bretanha.",
      "D": "ERRADA. Queriam o comércio a retalho reservado a brasileiros, tirando dos portugueses.",
      "E": "ERRADA. Não pleiteavam transferência de capital."
    },
    "dicaMacete": "PRAIEIRA DE 1848: \"Quem não é Cavalcanti não é nada, quem é Cavalcanti é tudo!\" Os praieiros queriam quebrar a oligarquia e dar voto ao povo!"
  },
  {
    "id": "aocp-elite-rlm-06",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Negação de Proposições Categóricas (Todo / Algum)",
    "question": "(Instituto AOCP - PMPE) A negação lógica da afirmação \"Todo soldado da PMPE possui porte de arma\" é expressa por:",
    "options": [
      "Nenhum soldado da PMPE possui porte de arma.",
      "Todos os soldados da PMPE não possuem porte de arma.",
      "Pelo menos um soldado da PMPE não possui porte de arma.",
      "Nenhum policial possui porte de arma.",
      "A maioria dos soldados possui porte de arma."
    ],
    "correctIndex": 2,
    "explanation": "A negação de uma proposição universal afirmativa (\"TODO A é B\") NUNCA é \"Nenhum\"! Para desmentir a frase \"Todo soldado possui...\", basta encontrar UM ÚNICO contraexemplo. A regra é: PEA + NÃO (Pelo menos um / Existe / Algum soldado NÃO possui porte de arma).",
    "fundamentacaoLegal": "Lógica dos Predicados - Negação de Quantificadores Universais.",
    "hint": "Regra do \"PEA + NÃO\": Para negar o \"TODO\", use Pelo menos um, Existe algum ou Algum + NÃO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Passo 1: Identificar o quantificador da frase: \"TODO\" (universal afirmativo).",
      "Passo 2: Entender o erro mais comum: muitos candidatos acham que o oposto de \"Todo\" é \"Nenhum\". Isso é falso na lógica!",
      "Passo 3: Se alguém afirma \"Todos os cisnes são brancos\", o que você precisa fazer para provar que a pessoa mentiu? Basta mostrar 1 cisne negro!",
      "Passo 4: Aplicar o mnemônico PEA + NÃO: Pelo menos um NÃO / Existe algum que NÃO / Algum NÃO.",
      "Passo 5: Formular a negação: \"Pelo menos um soldado da PMPE NÃO possui porte de arma\" (ou \"Existe soldado que não possui\").",
      "Conclusão: A alternativa que traduz corretamente a negação é a Alternativa C."
    ],
    "porqueErrou": {
      "0": "Você errou porque \"Nenhum\" é o erro fatal induzido pelas bancas! O contrário de Todo não é Nenhum. Se 99 possuem e 1 não possui, o \"Todo\" já foi quebrado sem precisar que \"Nenhum\" possua.",
      "1": "Você errou porque \"todos não possuem\" equivale a \"nenhum possui\", cometendo o mesmo erro da A.",
      "3": "Você errou porque mudou o sujeito da frase e repetiu o erro do \"nenhum\".",
      "4": "Você errou porque \"a maioria\" não nega com precisão lógica."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Pegadinha clássica: \"Nenhum\" NÃO é a negação de \"Todo\".",
      "B": "ERRADA. Equivale a \"nenhum\".",
      "C": "CORRETA. PEA + NÃO: Pelo menos um soldado não possui.",
      "D": "ERRADA. Generalização descabida.",
      "E": "ERRADA. Falácia lógica."
    },
    "dicaMacete": "BIZU DO PEA: Quem quer quebrar o TODO, não precisa quebrar todo mundo: basta achar o PEA (Pelo menos um, Existe, Algum) que NÃO seja!"
  },
  {
    "id": "aocp-elite-rlm-07",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Probabilidade Simples",
    "question": "(Instituto AOCP - PMPE) Em uma urna do comando da PMPE, há 12 fichas de ocorrência da Zona Norte, 8 fichas da Zona Sul e 10 fichas do Centro do Recife. Retirando-se aleatoriamente uma única ficha dessa urna, qual é a probabilidade de ela NÃO ser da Zona Norte?",
    "options": [
      "30%",
      "40%",
      "50%",
      "60%",
      "70%"
    ],
    "correctIndex": 3,
    "explanation": "Total de fichas na urna = 12 (Norte) + 8 (Sul) + 10 (Centro) = 30 fichas. Fichas que NÃO são da Zona Norte = 8 (Sul) + 10 (Centro) = 18 fichas. A probabilidade é de 18 / 30 = 6 / 10 = 60%.",
    "fundamentacaoLegal": "Cálculo de Probabilidade Simples: P(A) = Casos Favoráveis / Casos Possíveis.",
    "hint": "Some todas as fichas no total (denominador). Pegue quem NÃO é da Zona Norte (numerador) e divida!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Passo 1: Calcular o espaço amostral total (total de casos possíveis): 12 + 8 + 10 = 30 fichas no total.",
      "Passo 2: Identificar os casos favoráveis ao evento (fichas que NÃO são da Zona Norte): Sul (8) + Centro (10) = 18 fichas.",
      "Passo 3: Montar a fração de probabilidade: P = Casos Favoráveis / Casos Possíveis = 18 / 30.",
      "Passo 4: Simplificar a fração dividindo numerador e denominador por 6: 18 ÷ 6 = 3; 30 ÷ 6 = 5. Logo, P = 3/5.",
      "Passo 5: Converter a fração 3/5 em porcentagem: (3 / 5) * 100% = 0,6 * 100% = 60%.",
      "Conclusão: A probabilidade de a ficha não ser da Zona Norte é de exatamente 60% (Alternativa D)."
    ],
    "porqueErrou": {
      "0": "Você errou porque 30% seria 9 fichas em 30.",
      "1": "Você errou porque 40% é a probabilidade de ela SER da Zona Norte (12 / 30 = 40%), e o enunciado pediu expressamente a probabilidade de NÃO ser!",
      "2": "Você errou achando que era metade (15 em 30).",
      "4": "Você errou somando 12 + 10 = 22."
    },
    "analiseAlternativas": {
      "A": "ERRADA. 30% não corresponde à proporção de 18/30.",
      "B": "ERRADA. 40% é a pegadinha da probabilidade de SER da Zona Norte (12/30).",
      "C": "ERRADA. Metade seria 15 fichas.",
      "D": "CORRETA. 18 / 30 = 0,60 = 60%.",
      "E": "ERRADA. 70% excederia a contagem real."
    },
    "dicaMacete": "CUIDADO COM A PALAVRA \"NÃO\": A banca sempre arma pegadinha com a probabilidade inversa (40% de ser x 60% de não ser). Leia com foco redobrado!"
  },
  {
    "id": "aocp-elite-rlm-08",
    "categoryId": "raciocinio",
    "bloco": "bloco_2",
    "materiaNome": "Raciocínio Lógico",
    "topicoEdital": "Regra de Três Composta Passo a Passo",
    "question": "(Instituto AOCP - PMPE) Se 6 policiais militares conseguem cadastrar 120 armas apreendidas trabalhando 4 horas por dia durante 2 dias, quantos policiais com a mesma eficiência seriam necessários para cadastrar 300 armas trabalhando 5 horas por dia durante 4 dias?",
    "options": [
      "4 policiais.",
      "12 policiais.",
      "8 policiais.",
      "10 policiais.",
      "6 policiais."
    ],
    "correctIndex": 4,
    "explanation": "Montando a relação: Processo (policiais, horas, dias) -> Produto (armas). Pelo método do produto: (Policiais * Horas * Dias) / Armas = constante. (6 * 4 * 2) / 120 = (X * 5 * 4) / 300. 48 / 120 = 20X / 300. Simplificando: 0,4 = 20X / 300 => 20X = 120 => X = 6 policiais.",
    "fundamentacaoLegal": "Aritmética e Proporcionalidade - Regra de Três Composta.",
    "hint": "Método do Produto: Tudo o que produz (homens, horas, dias) fica de um lado; o produto final (armas cadastradas) fica do outro!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "passoAPassoConta": [
      "Passo 1: Identificar as grandezas: Policiais (P), Armas (A), Horas/dia (H), Dias (D).",
      "Passo 2: Cenário 1: P1 = 6, A1 = 120, H1 = 4, D1 = 2.",
      "Passo 3: Cenário 2: P2 = X, A2 = 300, H2 = 5, D2 = 4.",
      "Passo 4: Método do Produto (Operários * Tempo / Obra): (P1 * H1 * D1) / A1 = (P2 * H2 * D2) / A2.",
      "Passo 5: Substituindo os números: (6 * 4 * 2) / 120 = (X * 5 * 4) / 300.",
      "Passo 6: Calculando o lado esquerdo: 6 * 4 = 24; 24 * 2 = 48. Logo: 48 / 120 = 0,4.",
      "Passo 7: Calculando o lado direito: X * 5 * 4 = 20X. Fica: 20X / 300.",
      "Passo 8: Igualando: 20X / 300 = 0,4 => 20X = 300 * 0,4 => 20X = 120.",
      "Passo 9: Isolando X: X = 120 / 20 = 6.",
      "Conclusão: Serão necessários exatamente 6 policiais militares (Alternativa B)."
    ],
    "porqueErrou": {
      "0": "Você errou invertendo a proporção de dias e horas.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou no cálculo cruzado de 20X = 120.",
      "3": "Você errou esquecendo de considerar que o número de dias dobrou."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Número insuficiente de policiais.",
      "B": "ERRADA. Sobrecarga desnecessária.",
      "C": "ERRADA. Erro de simplificação.",
      "D": "ERRADA. Cálculo sem ajuste de horas.",
      "E": "Correta. Montando a relação: Processo (policiais, horas, dias) -> Produto (armas). Pelo método do produto: (Policiais * Horas * Dias) / Armas = constante. (6 * 4 * 2) / 120 = (X * 5 * 4) / 300. 48 / 120 = 20X / 300. Simplificando: 0,4 = 20X / 300 => 20X = 120 => X = 6 policiais."
    },
    "dicaMacete": "MÉTODO INFALÍVEL DO PRODUTO: Em regra de três composta, descubra QUEM É O PRODUTO (o que foi feito: armas cadastradas). O produto cruza, todo o resto multiplica reto!"
  },
  {
    "id": "aocp-elite-inf-03",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Informática",
    "topicoEdital": "Planilhas Eletrônicas LibreOffice Calc (Fórmula SE)",
    "question": "(Instituto AOCP - PMPE) No LibreOffice Calc, a célula B2 contém a nota de corte 30. A fórmula inserida na célula C2 é: =SE(B2>=30; \"APROVADO\"; \"REPROVADO\"). Se o valor da célula B2 for alterado para 28, o resultado exibido na célula C2 será:",
    "options": [
      "REPROVADO",
      "APROVADO",
      "#VALOR!",
      "VERDADEIRO",
      "30"
    ],
    "correctIndex": 0,
    "explanation": "A função =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso) avalia a condição B2>=30. Como B2 vale 28, o teste 28 >= 30 resulta em FALSO. Dessa forma, o Calc retorna o segundo parâmetro: \"REPROVADO\".",
    "fundamentacaoLegal": "Guia do Usuário do LibreOffice Calc - Funções Lógicas.",
    "hint": "A função SE tem três partes separadas por ponto e vírgula: Teste; Se Verdadeiro; Se Falso.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você errou porque não há erro de sintaxe na fórmula.",
      "3": "Você errou porque o Calc retorna a string do parâmetro falso (\"REPROVADO\"), não o booleano bruto.",
      "4": "Você errou porque a fórmula não retorna o valor de referência 30."
    },
    "analiseAlternativas": {
      "A": "Correta. A função =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso) avalia a condição B2>=30. Como B2 vale 28, o teste 28 >= 30 resulta em FALSO. Dessa forma, o Calc retorna o segundo parâmetro: \"REPROVADO\".",
      "B": "ERRADA. Seria se B2 fosse maior ou igual a 30.",
      "C": "ERRADA. A fórmula é sintaticamente perfeita.",
      "D": "ERRADA. Retorna a frase indicada entre aspas.",
      "E": "ERRADA. Retorno textual, não numérico."
    },
    "dicaMacete": "BIZU DA FÓRMULA SE: =SE(pergunta; resposta_se_SIM; resposta_se_NÃO). 28 é maior ou igual a 30? NÃO! Então pegue a resposta do NÃO (\"REPROVADO\")!"
  },
  {
    "id": "aocp-elite-dir-03",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Remédios Constitucionais (Habeas Data vs Mandado de Segurança)",
    "question": "(Instituto AOCP - PMPE) O remédio constitucional expressamente destinado a assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, é o:",
    "options": [
      "Habeas Corpus.",
      "Habeas Data.",
      "Mandado de Segurança.",
      "Mandado de Injunção.",
      "Ação Popular."
    ],
    "correctIndex": 1,
    "explanation": "O Art. 5º, LXXII, da CF/88 consagra o HABEAS DATA para assegurar o conhecimento de registros ou dados pessoais (alínea \"a\") ou para a retificação de dados (alínea \"b\"). Para a liberdade de locomoção cabe Habeas Corpus; para falta de norma regulamentadora cabe Mandado de Injunção; para anular ato lesivo ao patrimônio cabe Ação Popular.",
    "fundamentacaoLegal": "Art. 5º, inciso LXXII da Constituição Federal de 1988.",
    "hint": "DATA vem de DADOS (informações pessoais cadastradas).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque Habeas Corpus protege exclusivamente a LIBERDADE DE LOCOMOÇÃO (ir e vir).",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque Mandado de Injunção é para suprir a falta de lei que inviabilize o exercício de direitos constitucionais.",
      "4": "Você errou porque Ação Popular visa anular ato lesivo ao patrimônio público, moralidade ou meio ambiente."
    },
    "analiseAlternativas": {
      "A": "ERRADA. HC = Liberdade física de locomoção.",
      "B": "Correta. O Art. 5º, LXXII, da CF/88 consagra o HABEAS DATA para assegurar o conhecimento de registros ou dados pessoais (alínea \"a\") ou para a retificação de dados (alínea \"b\"). Para a liberdade de locomoção cabe Habeas Corpus; para falta de norma regulamentadora cabe Mandado de Injunção; para anular ato lesivo ao patrimônio cabe Ação Popular.",
      "C": "ERRADA. MS = Direito líquido e certo residual.",
      "D": "ERRADA. MI = Omissão legislativa regulamentadora.",
      "E": "ERRADA. AP = Defesa do patrimônio público por qualquer cidadão."
    },
    "dicaMacete": "MAPA DOS REMÉDIOS: HC = Corpo (ir e vir); HD = Dados (informação pessoal); MS = Segurança do direito líquido e certo; MI = Inércia da lei; AP = Povo defendendo o patrimônio!"
  },
  {
    "id": "aocp-elite-dh-03",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Legislação PMPE",
    "topicoEdital": "Direitos e Prerrogativas dos Militares de PE (Lei nº 6.783/74)",
    "question": "(Instituto AOCP - PMPE) De acordo com o Artigo 71 do Estatuto dos Policiais Militares de Pernambuco (Lei nº 6.783/1974), o militar estadual preso por crime comum, antes de transitar em julgado a sentença condenatória, tem direito a:",
    "options": [
      "Cumprir a prisão preventiva em sua própria residência sem vigilância.",
      "Ser transferido imediatamente para estabelecimento penal civil de segurança máxima.",
      "Permanecer recolhido em dependência de organização policial militar, à disposição da autoridade competente.",
      "Ter a sua pena perdoada pelo comandante geral do batalhão.",
      "Receber liberdade provisória automática no prazo de 48 horas."
    ],
    "correctIndex": 2,
    "explanation": "O Art. 71 da Lei nº 6.783/1974 estabelece que o policial militar da ativa, da reserva remunerada ou reformado tem a prerrogativa de cumprir prisão provisória (antes do trânsito em julgado da sentença condenatória) em dependência de organização policial militar (Quartel/Batalhão PM), sob a guarda de outros militares, à disposição da autoridade judiciária competente.",
    "fundamentacaoLegal": "Art. 71 da Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco).",
    "hint": "Militar preso provisoriamente NÃO vai para o presídio comum com presos civis; ele fica no quartel da PM!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado de Elite AOCP 2026",
    "porqueErrou": {
      "0": "Você errou porque não se trata de prisão domiciliar desvigiada.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você errou porque comandante geral não possui poder de indulto penal.",
      "4": "Você errou porque a liberdade depende de decisão judicial, não é automática."
    },
    "analiseAlternativas": {
      "A": "ERRADA. Prerrogativa é em dependência da corporação, não em casa.",
      "B": "ERRADA. É expressamente vedado o recolhimento em presídio comum antes do trânsito em julgado.",
      "C": "Correta. O Art. 71 da Lei nº 6.783/1974 estabelece que o policial militar da ativa, da reserva remunerada ou reformado tem a prerrogativa de cumprir prisão provisória (antes do trânsito em julgado da sentença condenatória) em dependência de organização policial militar (Quartel/Batalhão PM), sob a guarda de outros militares, à disposição da autoridade judiciária competente.",
      "D": "ERRADA. Competência do Poder Judiciário.",
      "E": "ERRADA. Não existe liberdade automática."
    },
    "dicaMacete": "PRERROGATIVA MILITAR: Enquanto não houver sentença final transitada em julgado, policial militar fica preso no QUARTEL DA PM!"
  }
];

