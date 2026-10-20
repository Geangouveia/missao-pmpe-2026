import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: LÍNGUA PORTUGUESA PMPE 2026 (INSTITUTO AOCP)
 * Total: 200 Questões 100% INÉDITAS e EXCLUSIVAS, sem repetição.
 * Abrange: Crase, Concordância Verbal e Nominal, Regência Verbal e Nominal,
 * Pontuação, Conjunções, Colocação Pronominal, Funções do QUE e SE, Tipologia,
 * Semântica, Figuras de Linguagem, Acentuação Gráfica, Morfologia e Vozes Verbais.
 */
export const BANCO_PORTUGUES_AOCP: QuizQuestion[] = [
  {
    "id": "port_inedita_001",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Emprego do Sinal Indicativo de Crase",
    "question": "[Simulado PMPE AOCP - Questão 001] Assinale a alternativa em que o uso do acento grave indicativo de crase está plenamente correto conforme a norma-padrão:",
    "options": [
      "O comandante entregou a condecoração à soldado que se destacou no policiamento ostensivo.",
      "O motorista da viatura começou à acelerar ao avistar a fuga dos criminosos.",
      "A equipe de resgate prestou socorro à vítimas de colisão automobilística na BR-232.",
      "A guarnição do Bope dirigiu-se à uma residência abandonada indicada na denúncia.",
      "O oficial dirigiu-se à pé até o posto de triagem para conferir o efetivo."
    ],
    "correctIndex": 0,
    "explanation": "Em 'entregou a condecoração à soldado' (substantivo comum de dois gêneros antecedido de artigo feminino 'a'), ocorre a fusão da preposição 'a' (exigida por 'entregou a') com o artigo feminino 'a'. Nas demais: proíbe-se crase antes de verbo ('à acelerar'), antes de palavra no plural com 'a' no singular ('à vítimas'), antes de artigo indefinido ('à uma') e antes de palavra masculina ('à pé').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'entregou a condecoração à soldado' (substantivo comum de dois gêneros antecedido de artigo feminino 'a'), ocorre a fusão da preposição 'a' (exigida por 'entregou a') com o artigo feminino 'a'. Nas demais: proíbe-se crase antes de verbo ('à acelerar'), antes de palavra no plural com 'a' no singular ('à vítimas'), antes de artigo indefinido ('à uma') e antes de palavra masculina ('à pé').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_002",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante de Pronomes de Tratamento",
    "question": "[Simulado PMPE AOCP - Questão 002] Quanto ao uso da crase diante de formas de tratamento, assinale a única alternativa que atende à norma-padrão:",
    "options": [
      "O relatório operacional foi remetido à Sua Excelência o Comandante-Geral.",
      "O requerimento administrativo foi encaminhado à Vossa Senhoria com máxima urgência.",
      "Os soldados prestaram continência e entregaram a intimação à senhora presente no balcão.",
      "O cabo solicitou esclarecimentos à Vossa Magnificência durante a solenidade acadêmica.",
      "A petição de recurso foi dirigida à Sua Alteza Real pelo embaixador."
    ],
    "correctIndex": 2,
    "explanation": "Como regra geral, não ocorre crase diante de pronomes de tratamento (pois rejeitam artigo definido). As únicas exceções consagradas pela gramática normativa são: 'senhora', 'senhorita' e 'dona' (quando admitem artigo).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Como regra geral, não ocorre crase diante de pronomes de tratamento (pois rejeitam artigo definido). As únicas exceções consagradas pela gramática normativa são: 'senhora', 'senhorita' e 'dona' (quando admitem artigo).",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_003",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Facultativa",
    "question": "[Simulado PMPE AOCP - Questão 003] O acento indicativo de crase é de uso facultativo em:",
    "options": [
      "Os policiais retornaram às duas horas da madrugada após o término da ronda.",
      "O aspirante solicitou autorização à sua superiora imediata para inspecionar os armamentos.",
      "A denúncia foi encaminhada diretamente à Corregedoria Geral da Secretaria de Defesa Social.",
      "O comboio avançou à medida que as barricadas na rodovia eram desobstruídas.",
      "O tenente dirigiu-se à Assembleia Legislativa para a cerimônia de posse."
    ],
    "correctIndex": 1,
    "explanation": "O uso da crase é FACULTATIVO em três casos clássicos (mnemônico 'Até a Maria sua'): 1) Diante de pronomes possessivos femininos singulares ('à/a sua superiora'); 2) Diante de nomes próprios femininos sem determinação; 3) Após a preposição 'até'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. O uso da crase é FACULTATIVO em três casos clássicos (mnemônico 'Até a Maria sua'): 1) Diante de pronomes possessivos femininos singulares ('à/a sua superiora'); 2) Diante de nomes próprios femininos sem determinação; 3) Após a preposição 'até'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_004",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase em Locuções Adverbiais e Prepositivas",
    "question": "[Simulado PMPE AOCP - Questão 004] Assinale a frase em que o emprego da crase é obrigatório por compor locução adverbial feminina:",
    "options": [
      "O suspeito fugiu à cavalo cruzando a divisa interestadual pela vegetação de caatinga.",
      "A tropa de choque avançou à luz do dia para desocupar a via pública bloqueada.",
      "O capitão agiu à mando do governador sem aguardar ordem judicial formal.",
      "A viatura permaneceu estacionada à espera de reforços que tardavam a chegar.",
      "O sentinela permaneceu em prontidão à todo momento durante o turno noturno."
    ],
    "correctIndex": 3,
    "explanation": "'À espera de' é locução prepositiva feminina que exige obrigatoriamente acento grave. 'À luz do dia' também admite crase como locução prepositiva/adverbial, mas em 'à cavalo' e 'à mando' a palavra seguinte é masculina (proibida), e em 'à todo momento' o pronome indefinido masculino 'todo' repele crase.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Correta. 'À espera de' é locução prepositiva feminina que exige obrigatoriamente acento grave. 'À luz do dia' também admite crase como locução prepositiva/adverbial, mas em 'à cavalo' e 'à mando' a palavra seguinte é masculina (proibida), e em 'à todo momento' o pronome indefinido masculino 'todo' repele crase.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_005",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante de Palavras Repetidas",
    "question": "[Simulado PMPE AOCP - Questão 005] No que tange ao emprego da crase em expressões com palavras repetidas, assinale a opção correta:",
    "options": [
      "O duelo entre as facções ocorreu frente à frente em plena praça pública.",
      "Os policiais revistaram os indivíduos um a um no perímetro de segurança.",
      "A tropa avançou passo à passo pelas ruelas estreitas da comunidade.",
      "O confronto corpo à corpo resultou na imobilização imediata do agressor.",
      "A operação policial estendeu-se de ponta à ponta do território municipal."
    ],
    "correctIndex": 1,
    "explanation": "Em expressões de palavras repetidas (face a face, frente a frente, gota a gota, corpo a corpo, um a um), NÃO se emprega o acento indicativo de crase, pois não há artigo feminino diante do segundo termo.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em expressões de palavras repetidas (face a face, frente a frente, gota a gota, corpo a corpo, um a um), NÃO se emprega o acento indicativo de crase, pois não há artigo feminino diante do segundo termo.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_006",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante de Nomes de Cidades e Estados",
    "question": "[Simulado PMPE AOCP - Questão 006] Considere a regra prática de regência e crase com nomes de lugares ('Se vou a e volto da, crase há; se vou a e volto de, crase para quê?'). Assinale a frase redigida em estrita conformidade com a norma-padrão:",
    "options": [
      "O batalhão especial viajará à Roma histórica para intercâmbio de policiamento tático.",
      "O efetivo policial retornou à Brasília após escoltar a comitiva presidencial.",
      "A comitiva do governador dirigiu-se à Paris dos museus e das artes.",
      "No próximo recesso, os soldados viajarão à Pernambuco para reencontrar as famílias.",
      "A delegação esportiva da PMPE irá à Recife para disputar os jogos operacionais."
    ],
    "correctIndex": 2,
    "explanation": "Nomes de lugares que não admitem artigo repelem a crase (vai a Paris, volta de Paris; vai a Roma, volta de Roma; vai a Brasília, volta de Brasília). Contudo, quando o nome geográfico vem ESPECIFICADO ou QUALIFICADO por adjunto adnominal ('à Paris dos museus e das artes', 'à Roma histórica'), a crase torna-se OBRIGATÓRIA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Nomes de lugares que não admitem artigo repelem a crase (vai a Paris, volta de Paris; vai a Roma, volta de Roma; vai a Brasília, volta de Brasília). Contudo, quando o nome geográfico vem ESPECIFICADO ou QUALIFICADO por adjunto adnominal ('à Paris dos museus e das artes', 'à Roma histórica'), a crase torna-se OBRIGATÓRIA.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_007",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Subentendendo 'À Moda De'",
    "question": "[Simulado PMPE AOCP - Questão 007] Assinale a frase em que o uso do acento grave é correto por haver elipse da expressão 'à moda de' ou 'à maneira de':",
    "options": [
      "O suspeito trajava camisa à Luís XV e calça camuflada.",
      "O policial militar preferiu deslocar-se à pé durante o patrulhamento.",
      "O atirador de elite disparou um tiro à queima-roupa no alvo móvel.",
      "O oficial dirigiu-se à esmo pela avenida principal à procura do destacamento.",
      "O condutor trafegava à galope na contramão da rodovia estadual."
    ],
    "correctIndex": 0,
    "explanation": "Ocorre crase mesmo diante de substantivo masculino quando estiver subentendida a expressão 'à moda de' ou 'à maneira de' (ex.: camisa à [moda de] Luís XV, bife à [moda de] cavalo).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Ocorre crase mesmo diante de substantivo masculino quando estiver subentendida a expressão 'à moda de' ou 'à maneira de' (ex.: camisa à [moda de] Luís XV, bife à [moda de] cavalo).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_008",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante de Pronomes Relativos",
    "question": "[Simulado PMPE AOCP - Questão 008] Assinale a alternativa em que a crase diante do pronome relativo 'que' ou 'qual' está empregada corretamente:",
    "options": [
      "Esta é a diretriz operacional à que todos os policiais militares devem obedecer.",
      "A ocorrência à qual a equipe de radiopatrulha atendeu envolvia roubo qualificado.",
      "O armamento à que nos referimos já foi tombado e catalogado pelo quartel.",
      "As orientações táticas às que os soldados tiveram acesso foram sigilosas.",
      "A solenidade militar à que assistimos realizou-se no Quartel do Derby."
    ],
    "correctIndex": 1,
    "explanation": "Com o pronome relativo 'a qual / as quais', ocorre crase se o termo regente exigir preposição 'a' e o antecedente for feminino ('atender a + a qual = à qual'). Com o pronome relativo simples 'que', NÃO se admite crase antes dele, pois 'que' não aceita artigo.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Com o pronome relativo 'a qual / as quais', ocorre crase se o termo regente exigir preposição 'a' e o antecedente for feminino ('atender a + a qual = à qual'). Com o pronome relativo simples 'que', NÃO se admite crase antes dele, pois 'que' não aceita artigo.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_009",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase com Pronomes Demonstrativos Aquele/Aquela/Aquilo",
    "question": "[Simulado PMPE AOCP - Questão 009] Nos pronomes demonstrativos 'aquele(s)', 'aquela(s)' e 'aquilo', a crase ocorre quando o termo regente exige a preposição 'a'. Assinale a frase em que esse emprego está INCORRETO:",
    "options": [
      "O comandante referiu-se àquele episódio heroico ocorrido nas margens do Rio Capibaribe.",
      "Os policiais prestaram auxílio àquela família ilhada pelas águas da enchente.",
      "A promotoria não deu crédito àquilo que os criminosos alegaram no depoimento.",
      "O delegado aspirava àquele cargo de direção na Secretaria de Defesa Social.",
      "O capitão elogiou àquele pelotão pela disciplina demonstrada na parada militar."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'elogiar' é transitivo DIRETO (quem elogia, elogia alguém/algo), portanto NÃO exige preposição 'a'. Sem preposição, é vedado o acento grave no pronome demonstrativo: o correto é 'elogiou aquele pelotão'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Correta. O verbo 'elogiar' é transitivo DIRETO (quem elogia, elogia alguém/algo), portanto NÃO exige preposição 'a'. Sem preposição, é vedado o acento grave no pronome demonstrativo: o correto é 'elogiou aquele pelotão'."
    }
  },
  {
    "id": "port_inedita_010",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante da Palavra 'Casa'",
    "question": "[Simulado PMPE AOCP - Questão 010] A palavra 'casa' (no sentido de lar, moradia própria) repele crase, a menos que venha especificada. Assinale a frase correta quanto a essa regra:",
    "options": [
      "Após vinte e quatro horas de plantão ininterrupto, o soldado retornou à casa exausto.",
      "A guarnição do GATI deslocou-se à casa do suspeito para cumprir o mandado de busca.",
      "Ao término do expediente militar, todos os cabos foram à casa descansar com seus familiares.",
      "O tenente chegou à casa cedo para comemorar seu aniversário com a família.",
      "Os alunos do Curso de Formação voltaram à casa após a marcha noturna de vinte quilômetros."
    ],
    "correctIndex": 1,
    "explanation": "A palavra 'casa' repele crase quando significa o próprio lar do enunciador sem determinação ('chegou a casa', 'voltou a casa'). Contudo, se estiver determinada ('à casa do suspeito', 'à casa materna'), o uso da crase torna-se obrigatório.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. A palavra 'casa' repele crase quando significa o próprio lar do enunciador sem determinação ('chegou a casa', 'voltou a casa'). Contudo, se estiver determinada ('à casa do suspeito', 'à casa materna'), o uso da crase torna-se obrigatório.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_011",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante da Palavra 'Terra'",
    "question": "[Simulado PMPE AOCP - Questão 011] A palavra 'terra' só admite crase quando significa terra natal ou quando vier qualificada/determinada. Assinale a frase com o emprego correto:",
    "options": [
      "Os fuzileiros navais desceram do navio e desceram à terra firme após semanas no mar.",
      "Os marinheiros desembarcaram e foram à terra para comprar mantimentos e remédios.",
      "Depois de muitos anos servindo na capital, o sargento retornou à terra de seus ancestrais no Sertão.",
      "A tripulação da corveta aportou e desceu à terra para vistoriar os diques do porto.",
      "Os pescadores resgatados pelo helicóptero da polícia retornaram à terra sãos e salvos."
    ],
    "correctIndex": 2,
    "explanation": "A palavra 'terra' em oposição a mar ou a bordo NÃO admite artigo e, portanto, repele a crase ('descer a terra', 'ir a terra'). Todavia, quando se refere à terra natal ou vem acompanhada de modificador ('à terra de seus ancestrais', 'à terra dos altos coqueiros'), a crase é obrigatória.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. A palavra 'terra' em oposição a mar ou a bordo NÃO admite artigo e, portanto, repele a crase ('descer a terra', 'ir a terra'). Todavia, quando se refere à terra natal ou vem acompanhada de modificador ('à terra de seus ancestrais', 'à terra dos altos coqueiros'), a crase é obrigatória.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_012",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante de Pronomes Indefinidos",
    "question": "[Simulado PMPE AOCP - Questão 012] Assinale a alternativa em que a presença ou ausência da crase está em total desacordo com as regras gramaticais:",
    "options": [
      "Não revele esse plano de ação tática a nenhuma pessoa estranha ao batalhão.",
      "O tenente dirigiu-se à qualquer autoridade que pudesse autorizar o transporte aéreo.",
      "O socorro médico chegou a tempo de salvar a vida do policial ferido em combate.",
      "O oficial comunicou a decisão a todas as companhias operacionais do interior.",
      "Não atribua a culpa pelo fracasso da blitz a alguém que cumpriu rigorosamente as ordens."
    ],
    "correctIndex": 1,
    "explanation": "Pronomes indefinidos (como 'qualquer', 'nenhuma', 'todas', 'alguém') não admitem artigo feminino. Por conseguinte, é erro crasso empregar crase antes de 'qualquer' ('à qualquer autoridade'). O correto é 'a qualquer autoridade'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Pronomes indefinidos (como 'qualquer', 'nenhuma', 'todas', 'alguém') não admitem artigo feminino. Por conseguinte, é erro crasso empregar crase antes de 'qualquer' ('à qualquer autoridade'). O correto é 'a qualquer autoridade'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_013",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase Diante de Horas Determinadas",
    "question": "[Simulado PMPE AOCP - Questão 013] Emprega-se a crase antes de numerais que indicam horas exatas. Assinale a alternativa que desrespeita essa regra:",
    "options": [
      "A formatura dos novos soldados da PMPE terá início exatamente às 08h00 no Quartel do Derby.",
      "A ronda ostensiva começará às 22h e se estenderá até às 06h da manhã seguinte.",
      "A audiência de custódia foi agendada para às 14h na vara criminal da comarca.",
      "O toque de recolher foi decretado às vinte e uma horas pelo comando militar.",
      "As tropas deixaram o centro de treinamento às primeiras horas da alvorada."
    ],
    "correctIndex": 2,
    "explanation": "Quando a indicação de hora exata vem antecedida da preposição 'para' (ou 'desde', 'após'), NÃO se usa crase, pois já existe a preposição ('para as 14h', 'desde as 8h', 'após as 18h'). A forma 'para às 14h' é incorreta por duplicar preposições.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Quando a indicação de hora exata vem antecedida da preposição 'para' (ou 'desde', 'após'), NÃO se usa crase, pois já existe a preposição ('para as 14h', 'desde as 8h', 'após as 18h'). A forma 'para às 14h' é incorreta por duplicar preposições.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_014",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase e Paralelismo Sintático",
    "question": "[Simulado PMPE AOCP - Questão 014] Observe o paralelismo sintático na correlação prepositiva 'de... a...'. Assinale a alternativa gramaticalmente correta:",
    "options": [
      "A blitz da Lei Seca funcionará de segunda à sexta-feira sem interrupção.",
      "A fiscalização de trânsito ocorrerá da segunda à sexta-feira em todas as rodovias estaduais.",
      "O plantão médico atenderá de 19h às 07h no hospital da Polícia Militar.",
      "A investigação cobriu o período de janeiro à dezembro do ano letivo.",
      "O treinamento tático ocorreu de oito às doze horas no campo de instrução."
    ],
    "correctIndex": 1,
    "explanation": "Pelo princípio do paralelismo sintático: se a primeira parte tiver apenas preposição ('de'), a segunda terá apenas preposição ('de segunda a sexta', 'de 19h a 7h'). Se a primeira parte tiver preposição + artigo ('da'), a segunda exigirá preposição + artigo com crase ('da segunda à sexta-feira', 'das 19h às 07h').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Pelo princípio do paralelismo sintático: se a primeira parte tiver apenas preposição ('de'), a segunda terá apenas preposição ('de segunda a sexta', 'de 19h a 7h'). Se a primeira parte tiver preposição + artigo ('da'), a segunda exigirá preposição + artigo com crase ('da segunda à sexta-feira', 'das 19h às 07h').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_015",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Crase em Locuções Conjuntivas Femininas",
    "question": "[Simulado PMPE AOCP - Questão 015] Assinale a opção em que a locução conjuntiva proporcional feminina exige acento indicativo de crase:",
    "options": [
      "A medida que o comboio avançava, os manifestantes recuavam pacificamente.",
      "À medida que os reforços chegavam, a segurança no perímetro era restabelecida com êxito.",
      "A proporção que o efetivo aumentava, os índices de criminalidade caíam expressivamente.",
      "Os policiais intervieram tão logo a tumulto começou na arquibancada do estádio.",
      "A menos que haja ordem expressa do juiz de direito, a prisão não será efetuada."
    ],
    "correctIndex": 1,
    "explanation": "As locuções conjuntivas proporcionais femininas 'à medida que' e 'à proporção que' exigem obrigatoriamente o acento grave indicativo de crase. A alternativa B apresenta a grafia rigorosamente correta ('À medida que').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. As locuções conjuntivas proporcionais femininas 'à medida que' e 'à proporção que' exigem obrigatoriamente o acento grave indicativo de crase. A alternativa B apresenta a grafia rigorosamente correta ('À medida que').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_016",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Verbo Haver Impessoal",
    "question": "[Simulado PMPE AOCP - Questão 016] Assinale a alternativa que atende rigorosamente às regras de concordância verbal com o verbo 'haver':",
    "options": [
      "Haviam muitos candidatos disputando as vagas do concurso da PMPE na capital e no interior.",
      "Houveram várias ocorrências de porte ilegal de arma de fogo durante o final de semana festivo.",
      "Na reunião do conselho de disciplina, constatou-se que não haviam motivos para a punição do cabo.",
      "Deve haver muitos cidadãos dispostos a colaborar com as forças policiais por meio do Disque-Denúncia.",
      "Vão haver eleições sindicais na corporação militar no próximo bimestre."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver', no sentido de existir, ocorrer ou acontecer, é impessoal (não tem sujeito) e permanece na 3ª pessoa do singular. Em locuções verbais, ele transmite sua impessoalidade ao verbo auxiliar ('Deve haver muitos cidadãos', e não 'Devem haver').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Correta. O verbo 'haver', no sentido de existir, ocorrer ou acontecer, é impessoal (não tem sujeito) e permanece na 3ª pessoa do singular. Em locuções verbais, ele transmite sua impessoalidade ao verbo auxiliar ('Deve haver muitos cidadãos', e não 'Devem haver').",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_017",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Verbo Fazer Indicando Tempo Decorrido",
    "question": "[Simulado PMPE AOCP - Questão 017] Quanto à impessoalidade do verbo 'fazer' indicando tempo transcorrido ou fenômeno meteorológico, assinale a opção correta:",
    "options": [
      "Fazem cinco anos que a nova sede do Batalhão de Choque foi inaugurada no Recife.",
      "Vai fazer dez meses que os novos soldados concluíram com louvor o Curso de Formação.",
      "Vão fazer três semanas que a força-tarefa apreendeu o arsenal bélico no Agreste.",
      "Fizeram noites muito frias durante a instrução militar realizada no inverno de Garanhuns.",
      "Fazem dois dias que a viatura policial foi recolhida para manutenção preventiva."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'fazer', indicando tempo transcorrido ou clima, é impessoal e não se flexiona no plural. Nas locuções verbais, o verbo auxiliar também fica no singular: 'Vai fazer dez meses', 'Faz cinco anos', 'Fez noites muito frias'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. O verbo 'fazer', indicando tempo transcorrido ou clima, é impessoal e não se flexiona no plural. Nas locuções verbais, o verbo auxiliar também fica no singular: 'Vai fazer dez meses', 'Faz cinco anos', 'Fez noites muito frias'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_018",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Partícula Apassivadora 'SE'",
    "question": "[Simulado PMPE AOCP - Questão 018] Quando a partícula 'se' atua como pronome apassivador (com verbo transitivo direto), o verbo concorda obrigatoriamente com o sujeito paciente. Assinale a frase que respeita essa concordância:",
    "options": [
      "Apreendeu-se vários fuzis e pistolas de grosso calibre na operação deflagrada pela PMPE.",
      "Divulgou-se os nomes dos policiais homenageados com a Medalha Pernambucana do Mérito Policial.",
      "Identificaram-se as digitais do suspeito na arma apreendida no local do crime.",
      "Registrou-se muitas reclamações sobre o trânsito tumultuado na entrada de Caruaru.",
      "Comentou-se os incidentes ocorridos durante o patrulhamento preventivo no centro."
    ],
    "correctIndex": 2,
    "explanation": "Em 'Identificaram-se as digitais do suspeito', 'as digitais do suspeito' é o sujeito paciente no plural ('as digitais foram identificadas'), exigindo o verbo no plural ('identificaram-se'). Nas demais, os sujeitos pacientes estão no plural e os verbos ficaram incorretamente no singular.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Em 'Identificaram-se as digitais do suspeito', 'as digitais do suspeito' é o sujeito paciente no plural ('as digitais foram identificadas'), exigindo o verbo no plural ('identificaram-se'). Nas demais, os sujeitos pacientes estão no plural e os verbos ficaram incorretamente no singular.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_019",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Índice de Indeterminação do Sujeito",
    "question": "[Simulado PMPE AOCP - Questão 019] Quando a partícula 'se' acompanha verbo transitivo indireto ou intransitivo, ela funciona como índice de indeterminação do sujeito e o verbo permanece no singular. Assinale a frase correta:",
    "options": [
      "Precisam-se de novos policiais militares para suprir a demanda nos postos do interior.",
      "Tratam-se de denúncias anônimas gravíssimas sobre tráfico de drogas na comunidade.",
      "Confia-se nos relatórios minuciosos elaborados pelo setor de inteligência da corporação.",
      "Acreditam-se em medidas educativas e preventivas para a redução dos homicídios.",
      "Apelam-se para os órgãos judiciais a fim de acelerar a expedição dos mandados."
    ],
    "correctIndex": 2,
    "explanation": "Com verbos transitivos indiretos (restringidos por preposição, como 'confiar em', 'precisar de', 'tratar-se de'), a partícula 'se' é índice de indeterminação do sujeito e o verbo deve ficar OBRIGATORIAMENTE no singular: 'Precisa-se de', 'Trata-se de', 'Confia-se nos relatórios'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Com verbos transitivos indiretos (restringidos por preposição, como 'confiar em', 'precisar de', 'tratar-se de'), a partícula 'se' é índice de indeterminação do sujeito e o verbo deve ficar OBRIGATORIAMENTE no singular: 'Precisa-se de', 'Trata-se de', 'Confia-se nos relatórios'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_020",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Sujeito Composto Posposto",
    "question": "[Simulado PMPE AOCP - Questão 020] Quando o sujeito composto vem posposto (depois) ao verbo, a norma gramatical permite:",
    "options": [
      "Apenas a concordância no singular com o primeiro núcleo do sujeito.",
      "Apenas a concordância no plural com a totalidade dos núcleos.",
      "A concordância no plural (concordância gramatical) ou no singular concordando com o núcleo mais próximo (concordância atrativa).",
      "O verbo fica sempre invariável na terceira pessoa do singular, independentemente dos núcleos.",
      "A concordância no plural obrigatoriamente se os núcleos forem sinônimos."
    ],
    "correctIndex": 2,
    "explanation": "Quando o sujeito composto vem posposto ao verbo, são admitidas duas construções legítimas: concordância gramatical no plural ('Chegaram o comandante e o sargento') ou concordância atrativa com o núcleo mais próximo ('Chegou o comandante e o sargento').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Quando o sujeito composto vem posposto ao verbo, são admitidas duas construções legítimas: concordância gramatical no plural ('Chegaram o comandante e o sargento') ou concordância atrativa com o núcleo mais próximo ('Chegou o comandante e o sargento').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_021",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Expressões Partitivas",
    "question": "[Simulado PMPE AOCP - Questão 021] Em construções com expressões partitivas ('a maioria de', 'grande parte de', 'a metade de') seguidas de substantivo no plural, a concordância verbal padrão:",
    "options": [
      "Exige que o verbo fique obrigatoriamente no singular, concordando com o núcleo partitivo.",
      "Exige que o verbo fique obrigatoriamente no plural, concordando com o termo especificador.",
      "Permite tanto a concordância no singular (com o núcleo partitivo) quanto no plural (com o especificador).",
      "Obriga a flexão no particípio passado invariável.",
      "Exige a presença de pronome reflexivo para validar a flexão verbal."
    ],
    "correctIndex": 2,
    "explanation": "Com expressões partitivas seguidas de adjunto no plural, a concordância é facultativa: pode-se concordar com o núcleo singular ('A maioria dos policiais compareceu') ou com o adjunto plural ('A maioria dos policiais compareceram').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Com expressões partitivas seguidas de adjunto no plural, a concordância é facultativa: pode-se concordar com o núcleo singular ('A maioria dos policiais compareceu') ou com o adjunto plural ('A maioria dos policiais compareceram').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_022",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Expressões Numéricas e Porcentagens",
    "question": "[Simulado PMPE AOCP - Questão 022] Assinale a alternativa correta quanto à concordância verbal com numerais de porcentagem:",
    "options": [
      "Cerca de 1% dos aprovados no concurso desistiu da vaga antes da posse.",
      "Mais de 70% da população pernambucana apoia as ações de segurança no Carnaval.",
      "Apenas 2% do efetivo policial compareceram ao seminário de direitos humanos.",
      "1,5% da frota de radiopatrulha foram reformadas no último semestre letivo.",
      "Mais de 30% dos eleitores votou nulo na última eleição suplementar."
    ],
    "correctIndex": 1,
    "explanation": "Com porcentagem seguida de especificador no singular ('70% da população'), o verbo pode concordar com o especificador no singular ('apoia'). Quando a porcentagem não tem especificador, concorda com o número: '1% desistiu', '2% compareceram'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Com porcentagem seguida de especificador no singular ('70% da população'), o verbo pode concordar com o especificador no singular ('apoia'). Quando a porcentagem não tem especificador, concorda com o número: '1% desistiu', '2% compareceram'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_023",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Pronome Relativo 'QUE' e 'QUEM'",
    "question": "[Simulado PMPE AOCP - Questão 023] Assinale a frase em que a concordância do verbo com os pronomes relativos 'que' e 'quem' está em conformidade com a norma-padrão:",
    "options": [
      "Fui eu que prendeu os assaltantes em flagrante delito no centro comercial.",
      "Fomos nós que elaborou a escala especial de serviço para o réveillon em Boa Viagem.",
      "Foste vós que realizastes a vistoria preventiva nos veículos suspeitos.",
      "Fui eu quem prendi o líder da organização criminosa na Operação Força Total.",
      "Fomos nós quem organizamos a formatura dos novos cabos e sargentos."
    ],
    "correctIndex": 2,
    "explanation": "Com o pronome 'que', o verbo concorda rigorosamente com o antecedente ('Fui eu QUE prendi', 'Fomos nós QUE elaboramos', 'Foste vós QUE realizastes'). Com o pronome 'quem', o verbo concorda com o antecedente ou fica na 3ª pessoa do singular ('Fui eu quem prendeu / prendi'). A alternativa C flexiona perfeitamente 'vós... realizastes'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Com o pronome 'que', o verbo concorda rigorosamente com o antecedente ('Fui eu QUE prendi', 'Fomos nós QUE elaboramos', 'Foste vós QUE realizastes'). Com o pronome 'quem', o verbo concorda com o antecedente ou fica na 3ª pessoa do singular ('Fui eu quem prendeu / prendi'). A alternativa C flexiona perfeitamente 'vós... realizastes'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_024",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Verbos Bater, Dar e Soar",
    "question": "[Simulado PMPE AOCP - Questão 024] Na indicação de horas com os verbos 'dar', 'bater' e 'soar', a concordância verbal correta ocorre em:",
    "options": [
      "Bateu duas horas no relógio da torre matriz quando a ronda iniciou o patrulhamento.",
      "Deu cinco horas no relógio da igreja matriz quando a tropa iniciou a revista matinal.",
      "Soaram dez horas no sino da capela militar ao término da solenidade cívica.",
      "Já bateu três horas no relógio de pulso do oficial de dia.",
      "Deram uma hora da tarde quando o comboio penitenciário alcançou a penitenciária."
    ],
    "correctIndex": 2,
    "explanation": "Os verbos 'dar', 'bater' e 'soar' concordam em número com as horas apontadas, a menos que a palavra 'relógio', 'sino' ou 'torre' funcione explicitamente como sujeito ('O relógio deu três horas'). Sem isso, as horas são o sujeito: 'Soaram dez horas', 'Bateram duas horas', 'Deu uma hora'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Os verbos 'dar', 'bater' e 'soar' concordam em número com as horas apontadas, a menos que a palavra 'relógio', 'sino' ou 'torre' funcione explicitamente como sujeito ('O relógio deu três horas'). Sem isso, as horas são o sujeito: 'Soaram dez horas', 'Bateram duas horas', 'Deu uma hora'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_025",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Expressão 'Um dos que'",
    "question": "[Simulado PMPE AOCP - Questão 025] De acordo com o padrão culto adotado pelo Instituto AOCP, na estrutura com a expressão 'um dos que' / 'uma das que', a concordância do verbo:",
    "options": [
      "Deve ocorrer preferencialmente no plural, admitindo-se também o singular pela gramática contemporânea.",
      "É obrigatória exclusivamente na terceira pessoa do singular.",
      "Fica restrita ao infinitivo impessoal não flexionado.",
      "Exige que o predicativo seja colocado entre vírgulas obrigatórias.",
      "Anula a relação de subordinação sintática entre as orações."
    ],
    "correctIndex": 0,
    "explanation": "Com a locução 'um dos que', a tradição gramatical e a banca AOCP consideram preferencial a concordância no plural ('O coronel foi um dos oficiais que mais lutaram pelo reaparelhamento'), embora admitam também o singular quando se deseja individualizar a ação.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Com a locução 'um dos que', a tradição gramatical e a banca AOCP consideram preferencial a concordância no plural ('O coronel foi um dos oficiais que mais lutaram pelo reaparelhamento'), embora admitam também o singular quando se deseja individualizar a ação.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_026",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Sujeito Resumido por Pronome Indefinido",
    "question": "[Simulado PMPE AOCP - Questão 026] Quando os vários núcleos do sujeito composto vêm resumidos por um aposto recapitulativo ('tudo', 'nada', 'ninguém'), o verbo:",
    "options": [
      "Concorda obrigatoriamente no plural com a soma dos núcleos antecedentes.",
      "Concorda no singular com o pronome resumidor indefinido.",
      "Pode concordar tanto no singular quanto no plural facultativamente.",
      "Assume a forma particípio antecedida de verbo auxiliar.",
      "Deve ser omitido mediante emprego de zeugma."
    ],
    "correctIndex": 1,
    "explanation": "Quando os núcleos do sujeito composto são resumidos por pronomes indefinidos como 'tudo', 'nada', 'ninguém', o verbo concorda no singular com o termo resumidor: 'Armas, drogas, dinheiro ilícito, NADA escapou à fiscalização do Bope'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Quando os núcleos do sujeito composto são resumidos por pronomes indefinidos como 'tudo', 'nada', 'ninguém', o verbo concorda no singular com o termo resumidor: 'Armas, drogas, dinheiro ilícito, NADA escapou à fiscalização do Bope'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_027",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Verbo Parecer Seguido de Infinitivo",
    "question": "[Simulado PMPE AOCP - Questão 027] Na locução formada pelo verbo 'parecer' seguido de infinitivo, assinale a opção que apresenta uma flexão INCORRETA:",
    "options": [
      "Os suspeitos pareciam temer a aproximação dos cães farejadores do Canil.",
      "Os suspeitos parecia temerem a aproximação dos cães farejadores do Canil.",
      "As testemunhas pareciam estarem assustadas com o tiroteio na avenida principal.",
      "As viaturas pareciam voar na perseguição aos assaltantes pela rodovia.",
      "Os soldados pareciam demonstrar total preparo técnico no treinamento militar."
    ],
    "correctIndex": 2,
    "explanation": "Em 'parecer + infinitivo', flexiona-se apenas UM dos verbos, NUNCA os dois simultaneamente. Pode-se flexionar o primeiro ('pareciam temer') ou flexionar o segundo ('parecia temerem'). Flexionar ambos ('pareciam estarem') é erro gramatical reprovado em concurso.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Em 'parecer + infinitivo', flexiona-se apenas UM dos verbos, NUNCA os dois simultaneamente. Pode-se flexionar o primeiro ('pareciam temer') ou flexionar o segundo ('parecia temerem'). Flexionar ambos ('pareciam estarem') é erro gramatical reprovado em concurso.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_028",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Sujeitos Ligados pela Conjunção 'OU'",
    "question": "[Simulado PMPE AOCP - Questão 028] Quando os núcleos do sujeito composto são ligados pela conjunção 'ou', o verbo vai para o singular se a ideia for de exclusão mútua. Assinale a frase correta:",
    "options": [
      "Carlos ou Fernando serão eleito o presidente da comissão disciplinar militar.",
      "Carlos ou Fernando será eleito o presidente da comissão disciplinar militar.",
      "A chuva ou o vento destruíram a cobertura da guarita no litoral sul.",
      "O cabo ou o soldado receberão a promoção que contempla apenas uma única vaga.",
      "Pernambuco ou Bahia liderará a rota de exportação açucareira mundial."
    ],
    "correctIndex": 1,
    "explanation": "Quando a conjunção 'ou' indica exclusão mútua (apenas um dos elementos pode realizar a ação ou ocupar o cargo), o verbo fica no singular: 'Carlos ou Fernando será eleito o presidente' (apenas um pode ser presidente).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Quando a conjunção 'ou' indica exclusão mútua (apenas um dos elementos pode realizar a ação ou ocupar o cargo), o verbo fica no singular: 'Carlos ou Fernando será eleito o presidente' (apenas um pode ser presidente).",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_029",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Sujeitos Ligados por 'NÃO SÓ... MAS TAMBÉM'",
    "question": "[Simulado PMPE AOCP - Questão 029] Assinale a alternativa que apresenta a correta concordância verbal com a correlação aditiva 'não só... mas também':",
    "options": [
      "Não só a dedicação, mas também a coragem orientou a conduta dos heróis da PMPE.",
      "Não só a viatura, mas também o armamento foram avariados durante a colisão na blitz.",
      "Não só o cabo, como também o soldado foi condecorados pelo governador.",
      "Tanto o oficial quanto o praça compareceu à audiência com o promotor de justiça.",
      "Não apenas o tenente, mas todos os sargentos foi elogiados pelo comando."
    ],
    "correctIndex": 1,
    "explanation": "Em construções aditivas correlativas ('não só... mas também', 'tanto... quanto'), os núcleos somam-se para formar sujeito composto, exigindo o verbo no plural: 'Não só a viatura, mas também o armamento foram avariados'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em construções aditivas correlativas ('não só... mas também', 'tanto... quanto'), os núcleos somam-se para formar sujeito composto, exigindo o verbo no plural: 'Não só a viatura, mas também o armamento foram avariados'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_030",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Verbal - Expressão 'Mais de um'",
    "question": "[Simulado PMPE AOCP - Questão 030] Com a expressão 'mais de um', a concordância verbal canônica dá-se no singular, exceto quando houver ideia de reciprocidade ou repetição da expressão. Assinale a alternativa correta:",
    "options": [
      "Mais de um policial militar foram baleados no confronto armado na favela.",
      "Mais de um cidadão presenciaram o assalto e acionaram o número de emergência 190.",
      "Mais de um soldado abraçaram-se fraternalmente ao receberem a tão sonhada boina preta.",
      "Mais de uma autoridade compareceram à cerimônia solene do aniversário da PMPE.",
      "Mais de um veículo foram apreendidos na barreira de fiscalização do trânsito."
    ],
    "correctIndex": 2,
    "explanation": "A regra geral manda o verbo concordar com o numeral 'um' (no singular: 'Mais de um policial foi baleado'). Exceção: quando indica reciprocidade ('abraçaram-se', 'agrediram-se') ou quando a expressão é repetida ('Mais de um policial, mais de um civil compareceram'), o verbo vai obrigatoriamente para o plural.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. A regra geral manda o verbo concordar com o numeral 'um' (no singular: 'Mais de um policial foi baleado'). Exceção: quando indica reciprocidade ('abraçaram-se', 'agrediram-se') ou quando a expressão é repetida ('Mais de um policial, mais de um civil compareceram'), o verbo vai obrigatoriamente para o plural.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_031",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Anexo, Incluso e Obrigado",
    "question": "[Simulado PMPE AOCP - Questão 031] Assinale a frase em que a concordância nominal dos termos 'anexo', 'incluso' e 'obrigado' está em plena conformidade com a norma-padrão:",
    "options": [
      "Seguem anexos as fotografias das armas apreendidas na operação integrada.",
      "A cabo feminino disse com firmeza ao comandante: 'Muito obrigado pela oportunidade.'",
      "As certidões negativas de antecedentes criminais seguem inclusas no processo administrativo.",
      "Em anexo às pastas, foram enviadas as cópias das escalas de serviço dos soldados.",
      "A sargento agradeceu a homenagem dizendo: 'Fico muito obrigado a todos os presentes.'"
    ],
    "correctIndex": 2,
    "explanation": "'Incluso' e 'anexo' concordam em gênero e número com o substantivo a que se referem ('as certidões seguem inclusas', 'as fotos seguem anexas'). A locução adverbial 'em anexo' é invariável. Mulheres devem dizer 'obrigada' ('Fico muito obrigada').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Incluso' e 'anexo' concordam em gênero e número com o substantivo a que se referem ('as certidões seguem inclusas', 'as fotos seguem anexas'). A locução adverbial 'em anexo' é invariável. Mulheres devem dizer 'obrigada' ('Fico muito obrigada').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_032",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - É Proibido / É Necessário / É Bom",
    "question": "[Simulado PMPE AOCP - Questão 032] As expressões 'é proibido', 'é necessário' e 'é bom' permanecem invariáveis no masculino singular se o sujeito não estiver determinado por artigo ou pronome. Assinale a frase correta:",
    "options": [
      "É proibida entrada de pessoas estranhas nas dependências da reserva de armamento.",
      "É proibido a entrada de pessoas estranhas nas dependências da reserva de armamento.",
      "É necessária paciência e prudência durante a abordagem tática a suspeitos em fuga.",
      "É proibida a entrada de pessoas não autorizadas na sala de controle operacional do Copom.",
      "Água mineral gelada é boa para manter a hidratação dos policiais sob o sol escaldante."
    ],
    "correctIndex": 3,
    "explanation": "Se o substantivo estiver precedido de determinante (artigo ou pronome demonstrativo/possessivo), a concordância é obrigatória no feminino: 'É PROIBIDA A entrada'. Sem artigo, fica no masculino neutro invariável: 'É PROIBIDO entrada'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Correta. Se o substantivo estiver precedido de determinante (artigo ou pronome demonstrativo/possessivo), a concordância é obrigatória no feminino: 'É PROIBIDA A entrada'. Sem artigo, fica no masculino neutro invariável: 'É PROIBIDO entrada'.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_033",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Meio e Meia",
    "question": "[Simulado PMPE AOCP - Questão 033] A palavra 'meio' varia em gênero quando atua como numeral fracionário (metade), mas é invariável quando atua como advérbio (um pouco). Assinale a alternativa gramaticalmente correta:",
    "options": [
      "A sargento do Bope estava meia apreensiva com o desfecho da negociação de reféns.",
      "As portas da viatura de patrulhamento tático estavam meias abertas após o acidente.",
      "A policial militar sentia-se meio cansada após vinte e quatro horas de plantão ininterrupto.",
      "A sentinela da guarita bebeu meia copo de café para afastar o sono da madrugada.",
      "As candidatas ao concurso da polícia chegaram meias atrasadas ao local da prova."
    ],
    "correctIndex": 2,
    "explanation": "Como advérbio de intensidade (equivalente a 'um pouco'), 'meio' é rigorosamente INVARIÁVEL: 'sentia-se meio cansada', 'estava meio apreensiva', 'chegaram meio atrasadas'. Apenas flexiona-se como numeral adjetivo: 'meia garrafa', 'meia-noite e meia (hora)'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Como advérbio de intensidade (equivalente a 'um pouco'), 'meio' é rigorosamente INVARIÁVEL: 'sentia-se meio cansada', 'estava meio apreensiva', 'chegaram meio atrasadas'. Apenas flexiona-se como numeral adjetivo: 'meia garrafa', 'meia-noite e meia (hora)'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_034",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Bastante e Bastantes",
    "question": "[Simulado PMPE AOCP - Questão 034] A palavra 'bastante' admite plural ('bastantes') quando funciona como pronome indefinido adjetivo (equivalente a 'muitos/muitas'). Assinale a frase com o emprego correto:",
    "options": [
      "Havia bastante policiais patrulhando a orla da Praia de Boa Viagem no réveillon.",
      "Os soldados estavam bastantes confiantes na aprovação no Teste de Aptidão Física.",
      "Foram reunidas bastantes provas periciais para comprovar a autoria do crime de homicídio.",
      "Os agentes de trânsito trabalharam bastantes para desobstruir o viaduto da Agamenon Magalhães.",
      "As testemunhas prestaram depoimentos bastantes convincentes durante a audiência criminal."
    ],
    "correctIndex": 2,
    "explanation": "'Bastante' varia no plural quando acompanha substantivo no sentido de 'muitos/muitas' ('bastantes provas' = muitas provas). Quando modifica adjetivo ou verbo, é advérbio e fica invariável ('trabalharam bastante', 'estavam bastante confiantes').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Bastante' varia no plural quando acompanha substantivo no sentido de 'muitos/muitas' ('bastantes provas' = muitas provas). Quando modifica adjetivo ou verbo, é advérbio e fica invariável ('trabalharam bastante', 'estavam bastante confiantes').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_035",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Menos e Alerta",
    "question": "[Simulado PMPE AOCP - Questão 035] Quanto à invariabilidade de determinadas palavras na Língua Portuguesa, assinale a opção correta:",
    "options": [
      "Havia menas viaturas disponíveis para a realização da blitz noturna na zona rural.",
      "Os soldados permaneceram alertos diante do perigo iminente de emboscada armada.",
      "Os policiais militares do destacamento de elite estavam alertas na linha de frente.",
      "Há menas chances de fuga quando a equipe do cerco tático fecha todas as saídas.",
      "As praças do pelotão de trânsito estavam menas cansadas do que a guarnição de radiopatrulha."
    ],
    "correctIndex": 2,
    "explanation": "'Menos' é palavra estritamente invariável ('menas' inexiste na língua culta). A palavra 'alerta' funciona tradicionalmente como advérbio invariável ('estavam alerta'), embora a gramática moderna e a banca AOCP reconheçam 'alertas' como adjetivo flexionado no plural ('estavam alertas').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Menos' é palavra estritamente invariável ('menas' inexiste na língua culta). A palavra 'alerta' funciona tradicionalmente como advérbio invariável ('estavam alerta'), embora a gramática moderna e a banca AOCP reconheçam 'alertas' como adjetivo flexionado no plural ('estavam alertas').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_036",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Mesmo e Próprio",
    "question": "[Simulado PMPE AOCP - Questão 036] Os pronomes demonstrativos reforçativos 'mesmo' e 'próprio' concordam em gênero e número com a pessoa a que se referem. Assinale a frase correta:",
    "options": [
      "As soldados femininas disseram que elas mesmo prenderam o estelionatário em flagrante.",
      "A capitã da companhia afirmou que ela mesma redigiu o plano tático da operação.",
      "Os próprios peritos papiloscopistas admitiram que eles mesma cometeram o equívoco.",
      "As testemunhas afirmaram que elas próprio ouviram os disparos de revólver calibre 38.",
      "A própria coronel comunicou aos subordinados que ela mesmo assumiria o comando."
    ],
    "correctIndex": 1,
    "explanation": "'Mesmo' e 'próprio' concordam com o substantivo ou pronome a que se referem: 'ela mesma redigiu', 'elas mesmas prenderam', 'eles próprios admitiram'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'Mesmo' e 'próprio' concordam com o substantivo ou pronome a que se referem: 'ela mesma redigiu', 'elas mesmas prenderam', 'eles próprios admitiram'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_037",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Quite e Quites",
    "question": "[Simulado PMPE AOCP - Questão 037] O adjetivo 'quite' flexiona-se regularmente em número para concordar com o substantivo ou pronome. Assinale a opção correta:",
    "options": [
      "O aspirante a oficial e o tenente estão quite com as obrigações da justiça militar.",
      "Os soldados recém-formados estão quites com a documentação exigida pela diretoria de pessoal.",
      "A candidata declarou que já estava quites com as taxas de inscrição do concurso público.",
      "Todos os membros do pelotão declararam-se quite perante a reserva de armamento.",
      "Nós já estamos quite com as horas de escala complementar cumpridas no último mês."
    ],
    "correctIndex": 1,
    "explanation": "'Quite' é adjetivo e deve concordar em número com o sujeito: singular 'quite' ('eu estou quite', 'ela está quite') e plural 'quites' ('os soldados estão quites', 'estamos quites').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'Quite' é adjetivo e deve concordar em número com o sujeito: singular 'quite' ('eu estou quite', 'ela está quite') e plural 'quites' ('os soldados estão quites', 'estamos quites').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_038",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Adjetivo Posposto a Substantivos de Gêneros Diferentes",
    "question": "[Simulado PMPE AOCP - Questão 038] Quando um adjetivo qualifica dois ou mais substantivos de gêneros diferentes e vem posposto a eles, a concordância se faz:",
    "options": [
      "Obrigatoriamente no feminino plural.",
      "Obrigatoriamente no singular com o primeiro substantivo da lista.",
      "No masculino plural (concordância geral) ou no gênero e número do substantivo mais próximo (concordância atrativa).",
      "Apenas por meio de apassivação pronominal com a partícula 'se'.",
      "No neutro com o emprego de prefixo aumentativo."
    ],
    "correctIndex": 2,
    "explanation": "Com substantivos de gêneros diferentes pospostos, a concordância do adjetivo admite duas formas cultas: no masculino plural ('Apreendeu revólver e espingarda enferrujados') ou com o mais próximo ('Apreendeu revólver e espingarda enferrujada').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Com substantivos de gêneros diferentes pospostos, a concordância do adjetivo admite duas formas cultas: no masculino plural ('Apreendeu revólver e espingarda enferrujados') ou com o mais próximo ('Apreendeu revólver e espingarda enferrujada').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_039",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - Expressão 'Haja Vista'",
    "question": "[Simulado PMPE AOCP - Questão 039] A expressão 'haja vista' (com sentido de 'tendo em vista' ou 'veja-se') é empregada pela norma culta preferencialmente:",
    "options": [
      "Como invariável na forma 'haja vista', admitindo-se também 'hajam vista' se o substantivo seguinte for plural e não vier precedido de preposição.",
      "Sempre flexionada no feminino plural como 'hajas vistas'.",
      "Obrigatoriamente na forma de gerúndio 'havendo vistas'.",
      "Apenas antes de verbos conjugados no pretérito imperfeito.",
      "Como forma substantivada acompanhada do artigo masculino singular."
    ],
    "correctIndex": 0,
    "explanation": "A locução 'haja vista' é invariável na tradição gramatical ('haja vista os relatórios', 'haja vista aos relatórios'), sendo admitida também a concordância 'hajam vista os relatórios' quando o termo seguinte é plural sem preposição.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A locução 'haja vista' é invariável na tradição gramatical ('haja vista os relatórios', 'haja vista aos relatórios'), sendo admitida também a concordância 'hajam vista os relatórios' quando o termo seguinte é plural sem preposição.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_040",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Concordância Nominal - 'Salvo', 'Exceto' e 'Menos'",
    "question": "[Simulado PMPE AOCP - Questão 040] As palavras 'salvo', 'exceto' e 'menos', quando exercem papel de preposição com valor de exclusão, são invariáveis. Assinale a frase correta:",
    "options": [
      "Todos os policiais foram convocados para a escala extraordinária, salvos os enfermos.",
      "Todas as armas foram periciadas no Instituto de Criminalística, salvas as que estavam lacradas.",
      "Todos os membros da guarnição compareceram ao treinamento de tiro, salvo as soldados destacadas.",
      "Todos os cabos foram liberados do serviço noturno, excetos os da reserva tática.",
      "Menas viaturas foram mobilizadas para a patrulha, salvo as equipadas com rádio digital."
    ],
    "correctIndex": 2,
    "explanation": "Com valor prepositivo (equivalente a 'com exceção de'), 'salvo', 'exceto' e 'menos' permanecem estritamente INVARIÁVEIS: 'salvo as soldados', 'exceto os da reserva'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Com valor prepositivo (equivalente a 'com exceção de'), 'salvo', 'exceto' e 'menos' permanecem estritamente INVARIÁVEIS: 'salvo as soldados', 'exceto os da reserva'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_041",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbo 'Assistir'",
    "question": "[Simulado PMPE AOCP - Questão 041] O verbo 'assistir', no sentido de presenciar, ver ou testemunhar um acontecimento, rege a preposição 'a' (transitivo indireto). Assinale a alternativa gramaticalmente correta:",
    "options": [
      "A população do bairro assistiu o desfile militar de 7 de setembro com entusiasmo e orgulho.",
      "O delegado assistiu a solenidade de formatura dos novos oficiais da PMPE no camarote.",
      "Os moradores assistiram ao resgate dramático das vítimas de afogamento pelos bombeiros militares.",
      "O advogado assistiu o depoimento de seu cliente na Delegacia de Repressão ao Narcotráfico.",
      "Muitos estudantes assistiram o debate cívico sobre segurança pública no auditório."
    ],
    "correctIndex": 2,
    "explanation": "No sentido de presenciar/ver, 'assistir' é transitivo indireto e exige a preposição 'a': 'assistiram AO resgate', 'assistir ao filme', 'assistir à cerimônia'. No sentido de prestar socorro/ajudar, é transitivo direto ('O médico assistiu o ferido').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. No sentido de presenciar/ver, 'assistir' é transitivo indireto e exige a preposição 'a': 'assistiram AO resgate', 'assistir ao filme', 'assistir à cerimônia'. No sentido de prestar socorro/ajudar, é transitivo direto ('O médico assistiu o ferido').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_042",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbo 'Aspirar'",
    "question": "[Simulado PMPE AOCP - Questão 042] O verbo 'aspirar', com o significado de almejar, desejar ardentemente ou pretender, exige complemento com a preposição 'a'. Assinale a frase redigida de acordo com essa regra:",
    "options": [
      "O soldado recém-ingressado na corporação aspira o posto de comandante de companhia.",
      "Todos os concursados aspiram a uma carreira militar honrosa e de estabilidade no Estado.",
      "O paciente aspirou à fumaça tóxica desprendida pelo incêndio florestal no Agreste.",
      "Os jovens recrutas aspiravam os cargos de chefia sem possuir o tempo mínimo de serviço.",
      "O perito criminal aspirava o ar puro da serra antes de iniciar os exames cadavéricos."
    ],
    "correctIndex": 1,
    "explanation": "'Aspirar' no sentido de sorver/inalar ar é VTD ('aspirou a fumaça'). No sentido de almejar/pretender um objetivo, é VTI e rege a preposição 'a' ('aspiram A uma carreira militar honrosa').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'Aspirar' no sentido de sorver/inalar ar é VTD ('aspirou a fumaça'). No sentido de almejar/pretender um objetivo, é VTI e rege a preposição 'a' ('aspiram A uma carreira militar honrosa').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_043",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbo 'Visar'",
    "question": "[Simulado PMPE AOCP - Questão 043] O verbo 'visar', quando significa 'ter por objetivo' ou 'pretender', rege preposição 'a'. Assinale a alternativa correta:",
    "options": [
      "A nova diretriz da Secretaria de Defesa Social visa reduzir a criminalidade violenta no Estado.",
      "A nova operação do Batalhão de Trânsito visa a fiscalização rigorosa de motoristas embriagados.",
      "O atirador de precisão do Bope visou o alvo a quinhentos metros e efetuou o disparo com sucesso.",
      "O comandante visou todos os cheques e documentos financeiros da unidade militar.",
      "O plano de segurança pública visa promover a paz social nas comunidades conflagradas."
    ],
    "correctIndex": 1,
    "explanation": "No sentido de ter como meta/objetivo, 'visar' é VTI e rege preposição 'a' diante de substantivos ('visa À fiscalização', 'visa A objetivos nobres'). Antes de verbos no infinitivo, a preposição 'a' costuma ser omitida pelo uso consagrado ('visa reduzir', 'visa promover'). No sentido de mirar ou pôr visto, é VTD ('visou o alvo', 'visou os cheques').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. No sentido de ter como meta/objetivo, 'visar' é VTI e rege preposição 'a' diante de substantivos ('visa À fiscalização', 'visa A objetivos nobres'). Antes de verbos no infinitivo, a preposição 'a' costuma ser omitida pelo uso consagrado ('visa reduzir', 'visa promover'). No sentido de mirar ou pôr visto, é VTD ('visou o alvo', 'visou os cheques').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_044",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbo 'Implicar'",
    "question": "[Simulado PMPE AOCP - Questão 044] Na acepção de 'acarretar', 'ter como consequência' ou 'provocar', o verbo 'implicar' é transitivo direto e dispensa preposição 'em'. Assinale a alternativa correta:",
    "options": [
      "A desobediência a uma ordem militar legal implica em sanções disciplinares severas e até prisão.",
      "A prática de transgressão grave implicará na instauração de Conselho de Disciplina Militar.",
      "A recusa injustificada ao teste do etilômetro implica multa gravíssima e suspensão do direito de dirigir.",
      "A aprovação na prova objetiva implica na convocação imediata para os exames médicos.",
      "A falta de manutenção das viaturas implicou em riscos intoleráveis para a segurança da tropa."
    ],
    "correctIndex": 2,
    "explanation": "No sentido de acarretar/produzir efeito, o verbo 'implicar' é TRANSITIVO DIRETO (rege objeto direto SEM preposição 'em'): 'implica multa gravíssima' (e não 'implica em multa').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. No sentido de acarretar/produzir efeito, o verbo 'implicar' é TRANSITIVO DIRETO (rege objeto direto SEM preposição 'em'): 'implica multa gravíssima' (e não 'implica em multa').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_045",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbo 'Preferir'",
    "question": "[Simulado PMPE AOCP - Questão 045] O verbo 'preferir' rege a preposição 'a' para introduzir o segundo termo da comparação, sendo vedado o uso de expressões como 'do que' ou 'mais que'. Assinale a alternativa correta:",
    "options": [
      "O capitão preferia mais agir com cautela do que arriscar a integridade física de sua equipe.",
      "Muitos jovens preferem mil vezes o concurso da PMPE do que trabalhar na iniciativa privada.",
      "O comandante afirmou que prefere o diálogo negociado à repressão violenta no controle de multidões.",
      "Os policiais preferem muito mais o patrulhamento motorizado do que o policiamento a pé.",
      "O tenente preferiu antes recuar as viaturas do que permitir o confronto direto com a turba."
    ],
    "correctIndex": 2,
    "explanation": "Quem prefere, prefere algo A outro (rege a preposição 'a'). É erro formal utilizar advérbios de intensidade ('mais', 'muito mais', 'mil vezes') ou a locução comparativa 'do que' junto a 'preferir': o correto é 'prefere o diálogo negociado À repressão'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Quem prefere, prefere algo A outro (rege a preposição 'a'). É erro formal utilizar advérbios de intensidade ('mais', 'muito mais', 'mil vezes') ou a locução comparativa 'do que' junto a 'preferir': o correto é 'prefere o diálogo negociado À repressão'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_046",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbos 'Lembrar' e 'Esquecer'",
    "question": "[Simulado PMPE AOCP - Questão 046] Os verbos 'lembrar' e 'esquecer', quando usados na forma pronominal ('lembrar-se', 'esquecer-se'), regem a preposição 'de'. Sem pronome, são transitivos diretos. Assinale a frase correta:",
    "options": [
      "O policial veterano lembrou do dia exato em que ingressou no Batalhão de Choque da PMPE.",
      "O cabo esqueceu de apresentar a certidão negativa de débitos ao setor financeiro.",
      "O sargento lembrou-se do número da placa do automóvel utilizado na fuga dos criminosos.",
      "Os soldados esqueceram-se o código de acionamento do rádio comunicador da viatura.",
      "A guarnição lembrou dos ensinamentos táticos transmitidos pelo instrutor de armamento."
    ],
    "correctIndex": 2,
    "explanation": "A regra de ouro: 'COM PRONOME, COM PREPOSIÇÃO' ('lembrar-SE DE', 'esquecer-SE DE') e 'SEM PRONOME, SEM PREPOSIÇÃO' ('lembrar O número', 'esquecer O documento'). A frase 'lembrou-se do número' atende perfeitamente à norma.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. A regra de ouro: 'COM PRONOME, COM PREPOSIÇÃO' ('lembrar-SE DE', 'esquecer-SE DE') e 'SEM PRONOME, SEM PREPOSIÇÃO' ('lembrar O número', 'esquecer O documento'). A frase 'lembrou-se do número' atende perfeitamente à norma.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_047",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbos 'Obedecer' e 'Desobedecer'",
    "question": "[Simulado PMPE AOCP - Questão 047] Os verbos 'obedecer' e 'desobedecer' são transitivos indiretos e regem obrigatoriamente a preposição 'a'. Assinale a frase que atende a essa regra:",
    "options": [
      "O condutor desobedeceu o sinal sonoro de parada emitido pelos policiais militares do trânsito.",
      "O soldado exemplar sempre obedeceu os regulamentos internos e as ordens de seus superiores.",
      "A tropa de choque deve obedecer às determinações técnicas do manual de controle de distúrbios civis.",
      "O motorista embriagado desobedeceu a ordem de descer do veículo durante a abordagem de rotina.",
      "Nenhum subordinado pode desobedecer o regulamento disciplinar sem sofrer punição administrativa."
    ],
    "correctIndex": 2,
    "explanation": "'Obedecer' e 'desobedecer' regem a preposição 'a': 'obedecer ÀS determinações', 'obedecer AO superior', 'desobedecer À ordem'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Obedecer' e 'desobedecer' regem a preposição 'a': 'obedecer ÀS determinações', 'obedecer AO superior', 'desobedecer À ordem'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_048",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbos de Movimento (Chegar e Ir)",
    "question": "[Simulado PMPE AOCP - Questão 048] Verbos que indicam movimento, como 'ir', 'chegar' e 'voltar', regem a preposição 'a' para indicar o destino, sendo incorreto o uso da preposição 'em'. Assinale a frase correta:",
    "options": [
      "A viatura de radiopatrulha chegou no local da ocorrência cinco minutos após o chamado do Copom.",
      "A guarnição do GATI chegou ao local do crime e realizou o isolamento perimetral imediato.",
      "O coronel foi no Quartel do Derby para participar da solenidade de troca de comando.",
      "Os soldados recém-formados chegaram no batalhão com entusiasmo para iniciar o serviço.",
      "O aspirante vai na sede da Corregedoria prestar esclarecimentos sobre a ação policial."
    ],
    "correctIndex": 1,
    "explanation": "Na norma culta, verbos de movimento (chegar, ir) exigem a preposição 'a' ('chegou AO local do crime', 'foi AO Quartel', 'chegaram AO batalhão'). O uso da preposição 'em' ('chegou no local') é coloquial e vedado na prova da AOCP.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Na norma culta, verbos de movimento (chegar, ir) exigem a preposição 'a' ('chegou AO local do crime', 'foi AO Quartel', 'chegaram AO batalhão'). O uso da preposição 'em' ('chegou no local') é coloquial e vedado na prova da AOCP.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_049",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Verbal - Verbos 'Pagar' e 'Perdoar'",
    "question": "[Simulado PMPE AOCP - Questão 049] Os verbos 'pagar' e 'perdoar' são transitivos diretos quando o complemento é coisa, e transitivos indiretos (regendo 'a') quando o complemento é pessoa. Assinale a alternativa correta:",
    "options": [
      "O Estado pagou os policiais militares com acréscimo de gratificação de risco de vida.",
      "A corporação militar perdoou o soldado faltoso após este apresentar justificativa fundamentada.",
      "O comandante pagou ao fornecedor de fardamentos o valor estipulado no contrato administrativo.",
      "A administração pública pagou a dívida ao banco sem exigir a quitação dos juros moratórios.",
      "O comandante perdoou aos erros cometidos pelos novos alunos do Curso de Formação."
    ],
    "correctIndex": 2,
    "explanation": "'Pagar' e 'perdoar' têm regência mista: pagou O valor (coisa = VTD) AO fornecedor (pessoa = VTI regido por 'a'). A frase C ilustra com precisão essa dupla regência transitiva direta e indireta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Pagar' e 'perdoar' têm regência mista: pagou O valor (coisa = VTD) AO fornecedor (pessoa = VTI regido por 'a'). A frase C ilustra com precisão essa dupla regência transitiva direta e indireta.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_050",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Regência Nominal",
    "question": "[Simulado PMPE AOCP - Questão 050] Assinale a alternativa que apresenta a correta correlação de regência nominal com a preposição exigida pelo nome:",
    "options": [
      "O policial militar demonstrou grande capacidade de liderança e devoção de sua corporação.",
      "A atuação heroica da tropa foi benéfica à segurança de toda a comunidade pernambucana.",
      "O laudo pericial era incompatível de as declarações prestadas pelas testemunhas do roubo.",
      "O sargento era extremamente afeiçoado de técnicas de tiro tático defensivo e combate urbano.",
      "A decisão judicial foi contrária de os interesses dos manifestantes que ocupavam a rodovia."
    ],
    "correctIndex": 1,
    "explanation": "O adjetivo 'benéfico' rege a preposição 'a' ('benéfica à segurança'). Os outros nomes regem preposições diferentes: 'devoção A/POR', 'incompatível COM', 'afeiçoado A/POR', 'contrária A'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. O adjetivo 'benéfico' rege a preposição 'a' ('benéfica à segurança'). Os outros nomes regem preposições diferentes: 'devoção A/POR', 'incompatível COM', 'afeiçoado A/POR', 'contrária A'.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_051",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Proibição de Vírgula entre Sujeito e Predicado",
    "question": "[Simulado PMPE AOCP - Questão 051] Na pontuação da oração, é regra basilar que NUNCA se deve separar por vírgula o sujeito do predicado. Assinale a frase que transgride essa regra proibitiva:",
    "options": [
      "Os policiais militares do Batalhão de Choque, chegaram rapidamente ao local do distúrbio civil.",
      "Durante a madrugada chuvosa, a equipe de patrulhamento realizou diversas abordagens na rodovia.",
      "O comandante da corporação, homem de reconhecida bravura, discursou perante os novos cadetes.",
      "Ao amanhecer, os delegados e os peritos criminais examinaram os vestígios encontrados na cena.",
      "No Sertão de Pernambuco, as patrulhas rurais intensificaram o combate aos assaltos a bancos."
    ],
    "correctIndex": 0,
    "explanation": "É expressamente proibido separar por vírgula simples o sujeito de seu predicado. Em 'Os policiais militares do Batalhão de Choque, chegaram...', a vírgula após 'Choque' fragmenta indevidamente o núcleo do sujeito e o verbo 'chegaram'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. É expressamente proibido separar por vírgula simples o sujeito de seu predicado. Em 'Os policiais militares do Batalhão de Choque, chegaram...', a vírgula após 'Choque' fragmenta indevidamente o núcleo do sujeito e o verbo 'chegaram'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_052",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Adjunto Adverbial Deslocado",
    "question": "[Simulado PMPE AOCP - Questão 052] Quanto ao isolamento por vírgulas de adjuntos adverbiais deslocados, assinale a opção correta conforme o padrão gramatical:",
    "options": [
      "Quando o adjunto adverbial de grande extensão estiver no início da oração, a vírgula é obrigatória.",
      "Adjuntos adverbiais de curta extensão (uma ou duas palavras) no início da frase exigem vírgula obrigatória em qualquer contexto.",
      "A vírgula é proibida após qualquer adjunto adverbial de tempo ou lugar, mesmo que anteposto.",
      "O adjunto adverbial em sua ordem canônica natural no final da frase deve vir sempre separado por dois-pontos.",
      "A pontuação de termos adverbiais independe de sua posição ou extensão sintática."
    ],
    "correctIndex": 0,
    "explanation": "Adjuntos adverbiais de longa extensão (três ou mais palavras) quando antepostos ou intercalados exigem vírgula OBRIGATÓRIA ('Durante a tempestade que assolou a capital pernambucana, as viaturas resgataram famílias'). Se de curta extensão (uma ou duas palavras), a vírgula é FACULTATIVA ('Ontem, a equipe...' ou 'Ontem a equipe...').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Adjuntos adverbiais de longa extensão (três ou mais palavras) quando antepostos ou intercalados exigem vírgula OBRIGATÓRIA ('Durante a tempestade que assolou a capital pernambucana, as viaturas resgataram famílias'). Se de curta extensão (uma ou duas palavras), a vírgula é FACULTATIVA ('Ontem, a equipe...' ou 'Ontem a equipe...').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_053",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Aposto Explicativo e Vocativo",
    "question": "[Simulado PMPE AOCP - Questão 053] Assinale a alternativa em que a pontuação do vocativo e do aposto está perfeitamente empregada:",
    "options": [
      "Atenção soldados, o comboio tático iniciará o deslocamento imediatamente pela via costeira.",
      "Atenção, soldados, o comboio tático iniciará o deslocamento imediatamente pela via costeira.",
      "Recife a capital pernambucana, recebeu investimentos expressivos em videomonitoramento urbano.",
      "O tenente, homem íntegro e dedicado foi condecorado pelo governador em cerimônia solene.",
      "Soldados cumpram o seu dever cívico com honra disciplina e coragem inabaláveis."
    ],
    "correctIndex": 1,
    "explanation": "O vocativo (chamamento) deve vir OBRIGATORIAMENTE isolado por vírgulas em qualquer posição da frase: 'Atenção, soldados, o comboio...'. O aposto explicativo também deve vir entre vírgulas duplas (como em 'Recife, a capital pernambucana, recebeu...').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. O vocativo (chamamento) deve vir OBRIGATORIAMENTE isolado por vírgulas em qualquer posição da frase: 'Atenção, soldados, o comboio...'. O aposto explicativo também deve vir entre vírgulas duplas (como em 'Recife, a capital pernambucana, recebeu...').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_054",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Oração Adjetiva Explicativa vs Restritiva",
    "question": "[Simulado PMPE AOCP - Questão 054] A presença ou ausência de vírgulas nas orações subordinadas adjetivas altera substancialmente o sentido do enunciado. Assinale a frase que expressa que APENAS PARTE dos policiais militares participou do treinamento:",
    "options": [
      "Os policiais militares de Pernambuco, que participaram do curso de tiro tático, receberam certificado de honra ao mérito.",
      "Os policiais militares de Pernambuco que participaram do curso de tiro tático receberam certificado de honra ao mérito.",
      "Os policiais militares de Pernambuco, os quais foram condecorados com bravura, receberam elogio em boletim interno.",
      "Os policiais da corporação, que realizaram a guarda do quartel, foram dispensados na manhã seguinte.",
      "Todos os soldados do destacamento, que concluíram a marcha operacional, almoçaram no refeitório."
    ],
    "correctIndex": 1,
    "explanation": "A oração adjetiva RESTRITIVA (SEM vírgulas) restringe/delimita o universo a apenas alguns elementos daquele conjunto: 'Os policiais militares de Pernambuco que participaram...' indica que nem todos participaram, apenas uma parcela. A explicativa (COM vírgulas) generaliza para a totalidade.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. A oração adjetiva RESTRITIVA (SEM vírgulas) restringe/delimita o universo a apenas alguns elementos daquele conjunto: 'Os policiais militares de Pernambuco que participaram...' indica que nem todos participaram, apenas uma parcela. A explicativa (COM vírgulas) generaliza para a totalidade.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_055",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Emprego da Vírgula Diante da Conjunção 'E'",
    "question": "[Simulado PMPE AOCP - Questão 055] Emprega-se a vírgula antes da conjunção aditiva 'e' quando:",
    "options": [
      "As orações coordenadas possuem sujeitos sintáticos diferentes.",
      "Os termos coordenados são complementos verbais de mesma regência.",
      "A frase tem apenas um único predicado nominal simples.",
      "Os sujeitos forem rigorosamente idênticos e o verbo for de ligação.",
      "A conjunção 'e' for substituída pelo pronome demonstrativo neutro."
    ],
    "correctIndex": 0,
    "explanation": "Usa-se vírgula antes de 'e' prioritariamente em três casos: 1) Quando as orações coordenadas aditivas possuem SUJEITOS DIFERENTES ('O capitão traçou o plano de invasão, e a tropa executou a manobra com perfeição'); 2) Quando o 'e' tem valor adversativo (= mas); 3) No polissíndeto (repetição enfática do conectivo).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Usa-se vírgula antes de 'e' prioritariamente em três casos: 1) Quando as orações coordenadas aditivas possuem SUJEITOS DIFERENTES ('O capitão traçou o plano de invasão, e a tropa executou a manobra com perfeição'); 2) Quando o 'e' tem valor adversativo (= mas); 3) No polissíndeto (repetição enfática do conectivo).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_056",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Uso dos Dois-Pontos",
    "question": "[Simulado PMPE AOCP - Questão 056] Assinale a frase em que o emprego dos dois-pontos está plenamente correto para introduzir uma enumeração explicativa:",
    "options": [
      "O policial militar apreendeu no porta-malas do veículo: três pistolas, munições e carregadores sobressalentes.",
      "O oficial comandante exigiu da tropa três qualidades essenciais: lealdade, disciplina e coragem inabalável.",
      "Os suspeitos foram conduzidos: à delegacia de plantão para lavratura do auto de prisão em flagrante.",
      "O relatório técnico de inteligência apontou que: o grupo criminoso planejava assaltar a agência bancária.",
      "As viaturas de área foram posicionadas: nos cruzamentos mais movimentados da cidade."
    ],
    "correctIndex": 1,
    "explanation": "Os dois-pontos introduzem legitimamente uma enumeração, síntese ou esclarecimento que se segue a uma oração completa ('exigiu três qualidades: lealdade, disciplina...'). É proibido colocar dois-pontos separando verbo de seu objeto direto ('apreendeu: armas') ou preposição ('conduzidos: à delegacia').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Os dois-pontos introduzem legitimamente uma enumeração, síntese ou esclarecimento que se segue a uma oração completa ('exigiu três qualidades: lealdade, disciplina...'). É proibido colocar dois-pontos separando verbo de seu objeto direto ('apreendeu: armas') ou preposição ('conduzidos: à delegacia').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_057",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Emprego do Ponto-e-Vírgula",
    "question": "[Simulado PMPE AOCP - Questão 057] O ponto-e-vírgula é adequadamente empregado para separar orações coordenadas já extensas ou que já contenham vírgulas internas. Assinale a frase que atende a esse critério:",
    "options": [
      "A equipe da ROCAM patrulhou as vias periféricas da comunidade; a equipe do GATI, as vias centrais e o comércio.",
      "Os policiais militares; estavam prontos para iniciar o cerco na favela.",
      "O suspeito fugiu; mas foi capturado logo em seguida pelos soldados.",
      "Antes de sair para a ronda noturna; todos os armamentos foram rigorosamente testados.",
      "O soldado disse; que honrará a farda da Polícia Militar de Pernambuco até o fim da vida."
    ],
    "correctIndex": 0,
    "explanation": "O ponto-e-vírgula separa orações coordenadas de certa extensão e com vírgula interna (como a vírgula que marca a elipse do verbo 'patrulhou' na segunda oração: 'a equipe do GATI, as vias centrais...').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O ponto-e-vírgula separa orações coordenadas de certa extensão e com vírgula interna (como a vírgula que marca a elipse do verbo 'patrulhou' na segunda oração: 'a equipe do GATI, as vias centrais...').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_058",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Conjunções Adversativas Deslocadas",
    "question": "[Simulado PMPE AOCP - Questão 058] Quando as conjunções adversativas ('porém', 'contudo', 'todavia', 'entretanto') vêm deslocadas para o meio da oração, a pontuação exigida é:",
    "options": [
      "Isolamento obrigatório por vírgulas duplas.",
      "Nenhuma pontuação, dispensando-se qualquer vírgula.",
      "Um travessão no início e ponto final no término da oração.",
      "Colocação entre parênteses precedidos de ponto de exclamação.",
      "Substituição por aspas duplas de realce estilístico."
    ],
    "correctIndex": 0,
    "explanation": "Quando conjunções adversativas ou conclusivas vêm pospostas ao verbo ou no meio da oração, devem vir OBRIGATORIAMENTE entre vírgulas ('A guarnição realizou o cerco; os suspeitos, CONTUDO, conseguiram pular o muro dos fundos').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Quando conjunções adversativas ou conclusivas vêm pospostas ao verbo ou no meio da oração, devem vir OBRIGATORIAMENTE entre vírgulas ('A guarnição realizou o cerco; os suspeitos, CONTUDO, conseguiram pular o muro dos fundos').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_059",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Expressões Explicativas e Corretivas",
    "question": "[Simulado PMPE AOCP - Questão 059] Expressões explicativas e corretivas, tais como 'isto é', 'por exemplo', 'ou melhor' e 'aliás', devem vir na frase:",
    "options": [
      "Sempre isoladas por vírgulas.",
      "Seguidas de ponto de interrogação retórico.",
      "Precedidas obrigatoriamente de hífen duplo.",
      "Grafadas em itálico sem qualquer sinal de pontuação.",
      "Antepostas ao predicativo do objeto sem vírgula."
    ],
    "correctIndex": 0,
    "explanation": "Expressões retificadoras ou explicativas ('isto é', 'ou seja', 'a saber', 'por exemplo', 'aliás', 'digo') devem ser rigorosamente isoladas por vírgulas: 'O policial atuou em legítima defesa, OU SEJA, agiu no estrito cumprimento da lei'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Expressões retificadoras ou explicativas ('isto é', 'ou seja', 'a saber', 'por exemplo', 'aliás', 'digo') devem ser rigorosamente isoladas por vírgulas: 'O policial atuou em legítima defesa, OU SEJA, agiu no estrito cumprimento da lei'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_060",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Vírgula Proibida entre Verbo e Objeto",
    "question": "[Simulado PMPE AOCP - Questão 060] Assinale a alternativa em que a norma de pontuação foi violada pela separação indevida entre o verbo transitivo e seu complemento:",
    "options": [
      "O perito criminal recolheu no local do homicídio, três cápsulas deflagradas de munição ponto quarenta.",
      "O perito criminal recolheu, no local do homicídio, três cápsulas deflagradas de munição ponto quarenta.",
      "No local do homicídio, o perito criminal recolheu três cápsulas deflagradas de munição ponto quarenta.",
      "Três cápsulas de munição ponto quarenta foram recolhidas, no local do homicídio, pelo perito criminal.",
      "O perito criminal, com técnica apurada, recolheu três cápsulas deflagradas de munição no local."
    ],
    "correctIndex": 0,
    "explanation": "Em A, há apenas uma vírgula separando o adjunto adverbial intercalado, deixando o verbo 'recolheu' separado de seu objeto direto ('três cápsulas') por uma única vírgula, o que é proibido. O adjunto adverbial intercalado deve vir com DUAS vírgulas (como na alternativa B: 'recolheu, no local do homicídio, três cápsulas').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em A, há apenas uma vírgula separando o adjunto adverbial intercalado, deixando o verbo 'recolheu' separado de seu objeto direto ('três cápsulas') por uma única vírgula, o que é proibido. O adjunto adverbial intercalado deve vir com DUAS vírgulas (como na alternativa B: 'recolheu, no local do homicídio, três cápsulas').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_061",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Adversativas vs Concessivas",
    "question": "[Simulado PMPE AOCP - Questão 061] Considere a frase: 'Embora o tempo estivesse adverso e chuvoso, o helicóptero da SDS decolou para resgatar os náufragos.' A oração subordinada iniciada por 'Embora' exprime relação semântica de:",
    "options": [
      "Causa do salvamento dos náufragos.",
      "Concessão, indicando uma ideia de oposição que não impede a realização do fato principal.",
      "Consequência imediata das condições atmosféricas desfavoráveis.",
      "Finalidade precípua do plano de resgate aéreo montado pela corporação.",
      "Proporção direta entre a intensidade da chuva e a altitude do voo."
    ],
    "correctIndex": 1,
    "explanation": "A conjunção 'embora' é subordinativa CONCESSIVA: introduz um obstáculo ou objeção que, todavia, NÃO é suficiente para anular ou impedir a realização do fato expresso na oração principal.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. A conjunção 'embora' é subordinativa CONCESSIVA: introduz um obstáculo ou objeção que, todavia, NÃO é suficiente para anular ou impedir a realização do fato expresso na oração principal.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_062",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Conclusivas",
    "question": "[Simulado PMPE AOCP - Questão 062] Assinale a alternativa que apresenta uma conjunção ou locução conjuntiva coordenativa CONCLUSIVA:",
    "options": [
      "O policial militar agiu em estrito cumprimento do dever legal; portanto, sua conduta é atípica penalmente.",
      "O policial militar agiu com bravura porque desejava proteger a integridade dos reféns.",
      "Caso o alarme do banco soe durante a noite, a central de operações acionará o batalhão tático.",
      "Conforme determinou a ordem de serviço do comando, o efetivo apresentou-se no pátio do Derby.",
      "Ainda que a viatura apresentasse falhas elétricas, a guarnição concluiu o patrulhamento."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'portanto' (assim como 'logo', 'por conseguinte', 'por isso', 'dessarte') introduz conclusão lógica do fato anteriormente exposto, classificando-se como coordenativa conclusiva.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'portanto' (assim como 'logo', 'por conseguinte', 'por isso', 'dessarte') introduz conclusão lógica do fato anteriormente exposto, classificando-se como coordenativa conclusiva.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_063",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Causais vs Explicativas",
    "question": "[Simulado PMPE AOCP - Questão 063] Diferenciam-se as orações causais das explicativas pelo fato de que a causa antecede o efeito no tempo. Assinale a frase que contém oração subordinada adverbial CAUSAL:",
    "options": [
      "Não corra pela calçada molhada, porque você pode escorregar e sofrer lesões graves.",
      "O motorista do caminhão foi preso em flagrante delito porque conduzia o veículo sob efeito de substância entorpecente.",
      "Apressa-te, soldado, que o toque de alvorada já foi executado pela corneta militar.",
      "Feche os portões do quartel militar, pois a ronda externa está prestes a retornar.",
      "Acalmem-se, cidadãos, que a tropa da PMPE já assumiu o controle absoluto da situação."
    ],
    "correctIndex": 1,
    "explanation": "Na frase B, conduzir embriagado é o FATO ANTERIOR que provocou (causou) a prisão do condutor, tratando-se de oração subordinada adverbial CAUSAL. Nas outras opções, há verbos no imperativo ('não corra', 'apressa-te', 'feche', 'acalmem-se'), o que configura orações coordenadas EXPLICATIVAS.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Na frase B, conduzir embriagado é o FATO ANTERIOR que provocou (causou) a prisão do condutor, tratando-se de oração subordinada adverbial CAUSAL. Nas outras opções, há verbos no imperativo ('não corra', 'apressa-te', 'feche', 'acalmem-se'), o que configura orações coordenadas EXPLICATIVAS.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_064",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Conformativas",
    "question": "[Simulado PMPE AOCP - Questão 064] Assinale a alternativa que contém conectivo conformativo introduzindo oração subordinada:",
    "options": [
      "Conforme determina a Lei Estadual nº 6.783/1974, o policial militar deve pautar sua conduta pela honra.",
      "Como a chuva torrencial alagou as principais avenidas, as viaturas desviaram o itinerário rotineiro.",
      "O capitão era tão exigente com o aprumo da tropa como seu antecessor no comando da companhia.",
      "Desde que haja autorização expressa do comandante, o praça poderá participar da capacitação.",
      "À medida que a operação avançava pelo morro, os esconderijos de drogas eram desmantelados."
    ],
    "correctIndex": 0,
    "explanation": "'Conforme' (assim como 'segundo', 'consoante', 'como' no sentido de conforme) introduz oração subordinada adverbial CONFORMATIVA, indicando conformidade ou acordo com uma norma, fato ou declaração.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Conforme' (assim como 'segundo', 'consoante', 'como' no sentido de conforme) introduz oração subordinada adverbial CONFORMATIVA, indicando conformidade ou acordo com uma norma, fato ou declaração.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_065",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Finais",
    "question": "[Simulado PMPE AOCP - Questão 065] Na frase 'O batalhão intensificou as rondas noturnas a fim de que os roubos a transeuntes diminuíssem no centro histórico', a locução conjuntiva em destaque expressa:",
    "options": [
      "Causa da atuação policial preventiva.",
      "Consequência indesejada das operações ostensivas.",
      "Finalidade ou objetivo pretendido pela autoridade militar.",
      "Proporcionalidade entre o policiamento e os crimes.",
      "Condição imposta pela promotoria para a liberação de recursos."
    ],
    "correctIndex": 2,
    "explanation": "'A fim de que' e 'para que' são locuções conjuntivas subordinativas FINAIS, exprimindo a intenção, o propósito ou a meta a ser alcançada pelo agente da oração principal.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'A fim de que' e 'para que' são locuções conjuntivas subordinativas FINAIS, exprimindo a intenção, o propósito ou a meta a ser alcançada pelo agente da oração principal.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_066",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Consecutivas",
    "question": "[Simulado PMPE AOCP - Questão 066] Assinale a alternativa que apresenta oração subordinada adverbial CONSECUTIVA (que exprime efeito, resultado ou consequência):",
    "options": [
      "O temporal foi tão intenso na capital que várias pontes do Recife ficaram submersas pelas águas.",
      "Caso as fortes chuvas continuem na Região Metropolitana, a Defesa Civil emitirá alerta vermelho.",
      "Mesmo que as pontes fiquem intransitáveis, o efetivo de salvamento alcançará os desabrigados.",
      "Visto que as pontes foram inundadas, os motoristas buscaram rotas alternativas no trânsito.",
      "Para que a água escoasse mais rapidamente, as comportas da represa foram abertas pelos técnicos."
    ],
    "correctIndex": 0,
    "explanation": "A estrutura correlativa de intensidade ('tão... que', 'tanto... que', 'tamanho... que') introduz oração subordinada adverbial CONSECUTIVA, indicando a consequência real decorrente da intensidade do fato principal.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A estrutura correlativa de intensidade ('tão... que', 'tanto... que', 'tamanho... que') introduz oração subordinada adverbial CONSECUTIVA, indicando a consequência real decorrente da intensidade do fato principal.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_067",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Condicionais",
    "question": "[Simulado PMPE AOCP - Questão 067] Assinale a frase em que o conectivo exprime relação semântica de CONDIÇÃO:",
    "options": [
      "Contanto que mantenha a conduta ilibada e a pontualidade, o recruta obterá elogio na folha de serviço.",
      "Porquanto a documentação estava em dia, o condutor foi liberado imediatamente pelos policiais do trânsito.",
      "Já que o suspeito cooperou integralmente com a revista, o procedimento transcorreu de forma rápida.",
      "Mal o relógio soou meia-noite, a guarda do quartel efetuou a rendição com a costumeira marcialidade.",
      "Enquanto a patrulha cobria a retaguarda, o líder da equipe adentrou a edificação conflagrada."
    ],
    "correctIndex": 0,
    "explanation": "'Contanto que' (assim como 'se', 'caso', 'desde que' com verbo no subjuntivo, 'a não ser que') é locução conjuntiva subordinativa CONDICIONAL, impondo uma exigência para que a oração principal se concretize.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Contanto que' (assim como 'se', 'caso', 'desde que' com verbo no subjuntivo, 'a não ser que') é locução conjuntiva subordinativa CONDICIONAL, impondo uma exigência para que a oração principal se concretize.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_068",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Proporcionais",
    "question": "[Simulado PMPE AOCP - Questão 068] Assinale a alternativa que contém locução conjuntiva subordinativa PROPORCIONAL:",
    "options": [
      "À proporção que o dia clareava no Sertão, a visibilidade dos atiradores de elite aumentava.",
      "Visto como as vias estavam congestionadas, o transporte de órgãos utilizou a aeronave do Grupamento Tático.",
      "A menos que os manifestantes desocupem o canteiro central, o trânsito continuará bloqueado.",
      "Depois que a perícia encerrou os exames na cena do crime, o corpo foi liberado ao Instituto de Medicina Legal.",
      "Como havia grande aglomeração popular, a banda de música da PMPE executou dobrados militares com fervor."
    ],
    "correctIndex": 0,
    "explanation": "'À proporção que' e 'à medida que' exprimem PROPORCIONALIDADE entre dois fatos concomitantes que variam em intensidade mútua.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'À proporção que' e 'à medida que' exprimem PROPORCIONALIDADE entre dois fatos concomitantes que variam em intensidade mútua.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_069",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Temporais",
    "question": "[Simulado PMPE AOCP - Questão 069] Na oração 'Assim que recebeu o alerta de assalto no rádio, o pelotão de motociclistas deslocou-se em alta velocidade', o conectivo destacado exprime ideia de:",
    "options": [
      "Concessão extraordinária concedida aos operadores de trânsito.",
      "Temporalidade de ocorrência imediata (imediatismo temporal).",
      "Causalidade primária do deslocamento das motocicletas.",
      "Conformidade com o código de trânsito estadual.",
      "Comparação entre a velocidade das viaturas e a dos bandidos."
    ],
    "correctIndex": 1,
    "explanation": "'Assim que', 'logo que', 'mal' e 'apenas' são locuções e conjunções subordinativas TEMPORAIS que indicam imediatismo (ação que ocorre imediatamente após a outra no tempo).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'Assim que', 'logo que', 'mal' e 'apenas' são locuções e conjunções subordinativas TEMPORAIS que indicam imediatismo (ação que ocorre imediatamente após a outra no tempo).",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_070",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Explicativas",
    "question": "[Simulado PMPE AOCP - Questão 070] Em 'Recolham-se ao alojamento, pois a marcha começará antes do amanhecer', a oração sublinhada classifica-se como:",
    "options": [
      "Coordenada sindética explicativa.",
      "Subordinada adverbial consecutiva.",
      "Subordinada adjetiva restritiva.",
      "Subordinada substantiva objetiva direta.",
      "Coordenada assindética aditiva."
    ],
    "correctIndex": 0,
    "explanation": "Após oração em modo imperativo ('Recolham-se...'), a conjunção 'pois' (anteposta ao verbo) introduz justificativa do comando ou ordem, classificando-se sintaticamente como COORDENADA SINDÉTICA EXPLICATIVA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Após oração em modo imperativo ('Recolham-se...'), a conjunção 'pois' (anteposta ao verbo) introduz justificativa do comando ou ordem, classificando-se sintaticamente como COORDENADA SINDÉTICA EXPLICATIVA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_071",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise com Palavras Negativas",
    "question": "[Simulado PMPE AOCP - Questão 071] Palavras de sentido negativo ('não', 'nunca', 'jamais', 'nada', 'ninguém') atraem obrigatoriamente o pronome oblíquo átono para antes do verbo (próclise). Assinale a frase que respeita essa regra:",
    "options": [
      "Não rendeu-se o policial militar diante das ameaças covardes proferidas pelos faccionados.",
      "Nunca enganou-se o sargento experiente a respeito do modus operandi dos assaltantes de banco.",
      "Nada nos impedirá de cumprir a nobre missão de proteger a sociedade com destemor.",
      "Ninguém manifestou-se contra a proposta de modernização da frota operacional apresentada.",
      "Jamais submeter-me-ei a chantagens que violem o meu compromisso com a justiça militar."
    ],
    "correctIndex": 2,
    "explanation": "'Nada' é pronome indefinido negativo e atrai o pronome átono: 'Nada NOS impedirá'. As outras desrespeitaram a próclise com palavras negativas ('Não se rendeu', 'Nunca se enganou', 'Ninguém se manifestou', 'Jamais me submeterei').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Nada' é pronome indefinido negativo e atrai o pronome átono: 'Nada NOS impedirá'. As outras desrespeitaram a próclise com palavras negativas ('Não se rendeu', 'Nunca se enganou', 'Ninguém se manifestou', 'Jamais me submeterei').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_072",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Proibição de Iniciar Frase com Pronome Átono",
    "question": "[Simulado PMPE AOCP - Questão 072] De acordo com a norma culta consagrada pela banca AOCP, é terminantemente proibido iniciar período com pronome oblíquo átono. Assinale a opção que transgride essa regra:",
    "options": [
      "Me apresentei ao comandante do batalhão às primeiras horas da manhã.",
      "Apresentei-me ao comandante do batalhão às primeiras horas da manhã.",
      "Informou-se à autoridade judicial sobre o término da operação tática.",
      "Entregaram-se os fugitivos após horas de negociação pacífica com o BOPE.",
      "Dirigiu-se a comitiva ministerial ao Quartel do Comando Geral no Derby."
    ],
    "correctIndex": 0,
    "explanation": "É erro clássico no padrão culto iniciar frase com pronome oblíquo átono ('Me apresentei...'). A forma correta e formal exige a ênclise: 'Apresentei-me ao comandante...'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. É erro clássico no padrão culto iniciar frase com pronome oblíquo átono ('Me apresentei...'). A forma correta e formal exige a ênclise: 'Apresentei-me ao comandante...'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_073",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise com Pronomes Relativos",
    "question": "[Simulado PMPE AOCP - Questão 073] O pronome relativo é fator obrigatório de atração pronominal (próclise). Assinale a frase correta:",
    "options": [
      "Este é o policial que dedicou-se incansavelmente ao patrulhamento escolar na zona sul.",
      "A ocorrência que relatou-se no livro de registros continha divergências formais.",
      "A corporação militar a que me refiro com tanto orgulho completou dois séculos de história.",
      "O armamento novo que distribuiu-se aos soldados possui tecnologia de ponta mundial.",
      "As instruções táticas que passaram-se na instrução foram assimiladas por todos os cadetes."
    ],
    "correctIndex": 2,
    "explanation": "Pronomes relativos ('que', 'quem', 'cujo', 'onde', 'o qual') são fatores atrativos de próclise: 'a que ME refiro', 'que SE dedicou', 'que SE relatou', 'que SE distribuiu'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Pronomes relativos ('que', 'quem', 'cujo', 'onde', 'o qual') são fatores atrativos de próclise: 'a que ME refiro', 'que SE dedicou', 'que SE relatou', 'que SE distribuiu'.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_074",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise com Advérbios",
    "question": "[Simulado PMPE AOCP - Questão 074] Advérbios (quando não seguidos de vírgula) exercem atração obrigatória sobre o pronome oblíquo átono. Assinale a alternativa correta:",
    "options": [
      "Sempre comportou-se o recruta com extrema disciplina perante seus superiores hierárquicos.",
      "Aqui cometeu-se um erro gravíssimo de avaliação técnica durante a revista veicular.",
      "Agora se percebe a importância vital do treinamento de combate em ambiente confinado.",
      "Lá encontravam-se os fugitivos armados aguardando a chegada de reforços do bando.",
      "Hoje apresentou-se o novo delegado titular da Delegacia de Homicídios de Caruaru."
    ],
    "correctIndex": 2,
    "explanation": "'Agora' é advérbio temporal e, não havendo vírgula após ele, atrai o pronome para a próclise: 'Agora SE percebe'. Nas outras frases, advérbios como 'sempre', 'aqui', 'lá' e 'hoje' deveriam atrair a próclise ('Sempre se comportou', 'Aqui se cometeu', etc.).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Agora' é advérbio temporal e, não havendo vírgula após ele, atrai o pronome para a próclise: 'Agora SE percebe'. Nas outras frases, advérbios como 'sempre', 'aqui', 'lá' e 'hoje' deveriam atrair a próclise ('Sempre se comportou', 'Aqui se cometeu', etc.).",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_075",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise com Conjunções Subordinativas",
    "question": "[Simulado PMPE AOCP - Questão 075] As conjunções subordinativas são palavras atrativas que exigem o emprego da próclise. Assinale a alternativa em que a norma foi plenamente respeitada:",
    "options": [
      "Embora o suspeito declarasse-se inocente perante a imprensa, as provas indicavam sua culpa.",
      "Quando os policiais aproximaram-se da guarita, os criminosos abriram fogo indiscriminado.",
      "Logo que se confirmou a fuga dos detentos, o batalhão cercou toda a área perimetral.",
      "Como informaram-lhe que haveria revista de armamento, o cabo inspecionou sua pistola.",
      "Se apresentarem-se voluntariamente à corregedoria, os faltosos evitarão a prisão disciplinar."
    ],
    "correctIndex": 2,
    "explanation": "'Logo que' é locução conjuntiva subordinativa e atrai obrigatoriamente a próclise: 'Logo que SE confirmou'. As outras orações subordinadas desrespeitaram a atração ('Embora... se declarasse', 'Quando... se aproximaram', 'Como lhe informaram', 'Se se apresentarem').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Logo que' é locução conjuntiva subordinativa e atrai obrigatoriamente a próclise: 'Logo que SE confirmou'. As outras orações subordinadas desrespeitaram a atração ('Embora... se declarasse', 'Quando... se aproximaram', 'Como lhe informaram', 'Se se apresentarem').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_076",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Mesóclise com Futuro do Presente",
    "question": "[Simulado PMPE AOCP - Questão 076] A mesóclise é empregada obrigatoriamente quando o verbo está conjugado no futuro do presente ou no futuro do pretérito, desde que NÃO haja palavra atrativa que imponha a próclise. Assinale a opção que exemplifica a mesóclise correta:",
    "options": [
      "Apresentar-se-á o relatório circunstanciado ao Ministério Público ao término das investigações.",
      "Não apresentar-se-á o relatório aos órgãos de imprensa sem prévia autorização judicial.",
      "Apresentará-se o soldado ao novo comandante assim que desembarcar no batalhão.",
      "Dar-se-ia o caso de fuga se a guarda do presídio estivesse desatenta ao monitoramento.",
      "Dir-se-á que as falhas técnicas foram justificadas pela precariedade das instalações."
    ],
    "correctIndex": 0,
    "explanation": "Com o verbo no futuro do presente ('apresentará') iniciando período ou sem palavra atrativa, emprega-se a mesóclise: 'Apresentar-se-á'. Com palavra negativa ('não'), a próclise prevalece ('Não se apresentará'). Em C ('Apresentará-se'), a ênclise com futuro é proibida na língua culta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Com o verbo no futuro do presente ('apresentará') iniciando período ou sem palavra atrativa, emprega-se a mesóclise: 'Apresentar-se-á'. Com palavra negativa ('não'), a próclise prevalece ('Não se apresentará'). Em C ('Apresentará-se'), a ênclise com futuro é proibida na língua culta.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_077",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Mesóclise com Futuro do Pretérito",
    "question": "[Simulado PMPE AOCP - Questão 077] Assinale a alternativa em que a mesóclise com verbo no futuro do pretérito foi empregada em conformidade com as regras clássicas:",
    "options": [
      "Convidar-me-iam para integrar o corpo de instrutores da Academia de Polícia se houvesse vaga.",
      "Nunca realizar-se-ia tal operação sem o planejamento minucioso do setor de inteligência.",
      "Realizaria-se a perícia balística amanhã no laboratório do Instituto de Criminalística.",
      "Diria-se que a tropa agiu com destemor se a imprensa tivesse presenciado a ação heroica.",
      "Comprometer-se-ia a segurança da operação se os dados confidenciais fossem vazados."
    ],
    "correctIndex": 4,
    "explanation": "No início de frase ou sem termo atrativo anterior, o verbo no futuro do pretérito exige mesóclise: 'Comprometer-se-ia'. A ênclise no futuro ('realizaria-se', 'diria-se') é proibida, e a palavra negativa atrai próclise ('Nunca se realizaria').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Correta. No início de frase ou sem termo atrativo anterior, o verbo no futuro do pretérito exige mesóclise: 'Comprometer-se-ia'. A ênclise no futuro ('realizaria-se', 'diria-se') é proibida, e a palavra negativa atrai próclise ('Nunca se realizaria')."
    }
  },
  {
    "id": "port_inedita_078",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Pronome em Locuções Verbais com Particípio",
    "question": "[Simulado PMPE AOCP - Questão 078] Nas locuções verbais cujo verbo principal está no PARTICÍPIO, a colocação pronominal segue regra rigorosa. Assinale a frase em que essa colocação está INCORRETA:",
    "options": [
      "Os policiais tinham-se comprometido a defender a ordem constitucional com a própria vida.",
      "Os policiais se tinham comprometido a defender a ordem constitucional com a própria vida.",
      "Os policiais tinham comprometido-se a defender a ordem constitucional com a própria vida.",
      "Os policiais não se tinham comprometido com os termos apresentados pela associação.",
      "Muitos soldados haviam-se apresentado voluntariamente para a missão de paz no exterior."
    ],
    "correctIndex": 2,
    "explanation": "É regra categórica e inegociável na gramática portuguesa: NUNCA se coloca pronome oblíquo enclítico a particípio ('tinham comprometido-se' é erro gravíssimo). O pronome deve ficar próclise ao auxiliar ('se tinham comprometido') ou ênclise ao auxiliar ('tinham-se comprometido').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. É regra categórica e inegociável na gramática portuguesa: NUNCA se coloca pronome oblíquo enclítico a particípio ('tinham comprometido-se' é erro gravíssimo). O pronome deve ficar próclise ao auxiliar ('se tinham comprometido') ou ênclise ao auxiliar ('tinham-se comprometido').",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_079",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Pronome em Locuções Verbais com Infinitivo",
    "question": "[Simulado PMPE AOCP - Questão 079] Nas locuções verbais formadas por verbo auxiliar acompanhado de INFINITIVO, quando não há palavra atrativa, o pronome pode ser colocado:",
    "options": [
      "Enclítico ao verbo auxiliar ou enclítico ao verbo principal no infinitivo.",
      "Exclusivamente próclise ao verbo principal, mesmo sem conectivo.",
      "Apenas no particípio absoluto antecedido por vírgula.",
      "Obrigatoriamente no meio do infinitivo como mesóclise interna.",
      "Somente em próclise ao verbo auxiliar com hífen duplo."
    ],
    "correctIndex": 0,
    "explanation": "Em locuções com infinitivo sem atração ('quero ver', 'devo informar'), o pronome pode ligar-se por ênclise ao auxiliar ('devo-lhe informar') ou por ênclise ao infinitivo ('devo informar-lhe'). Ambas as opções são plenamente válidas.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em locuções com infinitivo sem atração ('quero ver', 'devo informar'), o pronome pode ligar-se por ênclise ao auxiliar ('devo-lhe informar') ou por ênclise ao infinitivo ('devo informar-lhe'). Ambas as opções são plenamente válidas.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_080",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise em Orações Exclamativas e Optativas",
    "question": "[Simulado PMPE AOCP - Questão 080] Orações exclamativas, interrogativas diretas e orações optativas (que exprimem desejo) atraem a próclise do pronome átono. Assinale a alternativa que exemplifica essa regra:",
    "options": [
      "Deus proteja-nos durante o patrulhamento nesta noite de tempestade!",
      "Que Deus nos guarde e guie nossos passos na proteção da sociedade pernambucana!",
      "Quem avisou-o sobre a mudança repentina de horário da ronda ostensiva?",
      "Como comportou-se o suspeito durante a abordagem policial no posto rodoviário?",
      "Deus ajude-me a honrar este uniforme militar com altivez e espírito cívico!"
    ],
    "correctIndex": 1,
    "explanation": "Em orações optativas (que exprimem votos ou desejos) iniciadas por 'que' ou com sujeito anteposto, o pronome deve vir em PRÓCLISE: 'Que Deus NOS guarde', 'Deus te abençoe'. Em orações interrogativas, a palavra interrogativa também atrai próclise ('Quem o avisou?', 'Como se comportou?').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em orações optativas (que exprimem votos ou desejos) iniciadas por 'que' ou com sujeito anteposto, o pronome deve vir em PRÓCLISE: 'Que Deus NOS guarde', 'Deus te abençoe'. Em orações interrogativas, a palavra interrogativa também atrai próclise ('Quem o avisou?', 'Como se comportou?').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_081",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Adversativas 'Mas', 'Porém', 'Todavia'",
    "question": "[Simulado PMPE AOCP - Questão 081] A respeito da conjunção adversativa 'mas', assinale a afirmação correta quanto ao seu posicionamento sintático:",
    "options": [
      "Ao contrário de 'porém' e 'contudo', a conjunção 'mas' não pode ser deslocada para o meio ou final da oração, devendo figurar obrigatoriamente no início da oração coordenada.",
      "Pode ser livremente deslocada para o final do período e vir antecedida de ponto e vírgula.",
      "Exige que o verbo da oração seguinte seja conjugado no modo imperativo afirmativo.",
      "Funciona como pronome adjetivo possessivo quando antecede substantivos próprios.",
      "Exige a presença de vírgula após a sua ocorrência, dispensando a vírgula anterior."
    ],
    "correctIndex": 0,
    "explanation": "A conjunção 'mas' possui posição FIXA no início da oração coordenada adversativa ('Estudou, mas não passou'). Diferentemente de 'porém', 'contudo' e 'todavia', 'mas' NÃO pode ser deslocado para o interior da oração.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A conjunção 'mas' possui posição FIXA no início da oração coordenada adversativa ('Estudou, mas não passou'). Diferentemente de 'porém', 'contudo' e 'todavia', 'mas' NÃO pode ser deslocado para o interior da oração.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_082",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Alternativas 'Ou... ou', 'Quer... quer'",
    "question": "[Simulado PMPE AOCP - Questão 082] Assinale a alternativa que contém oração coordenada sindética ALTERNATIVA:",
    "options": [
      "Ou a tropa mantém a vigilância permanente no posto, ou os invasores romperão o cerco perimetral.",
      "A tropa manteve a vigilância permanente, logo os invasores não conseguiram romper o cerco.",
      "Embora a tropa mantivesse a vigilância, os invasores tentaram romper as barricadas de concreto.",
      "A tropa não só manteve a vigilância no posto, mas também capturou os líderes da invasão.",
      "Visto que a tropa manteve a vigilância, os moradores da localidade sentiram-se protegidos."
    ],
    "correctIndex": 0,
    "explanation": "As conjunções pares 'ou... ou', 'ora... ora', 'quer... quer' estabelecem alternância de opções ou disjunção lógica, caracterizando orações coordenadas sindéticas ALTERNATIVAS.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. As conjunções pares 'ou... ou', 'ora... ora', 'quer... quer' estabelecem alternância de opções ou disjunção lógica, caracterizando orações coordenadas sindéticas ALTERNATIVAS.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_083",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Comparativas",
    "question": "[Simulado PMPE AOCP - Questão 083] Na frase 'O novo soldado disparava no estande com precisão cirúrgica, como um veterano de guerra no fronte', a conjunção 'como' expressa valor semântico de:",
    "options": [
      "Causa do excelente desempenho no estande de tiro.",
      "Conformidade estrita com o manual militar de armamento.",
      "Comparação metafórica entre a precisão do soldado e a do veterano.",
      "Condição para que o atirador seja aprovado no módulo de instrução.",
      "Consequência direta do estresse sofrido em combate simulado."
    ],
    "correctIndex": 2,
    "explanation": "A conjunção 'como' vincula dois termos comparando a forma ou qualidade de suas ações ('disparava... como um veterano dispararia'), configurando oração subordinada adverbial COMPARATIVA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. A conjunção 'como' vincula dois termos comparando a forma ou qualidade de suas ações ('disparava... como um veterano dispararia'), configurando oração subordinada adverbial COMPARATIVA.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_084",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Causalidade Prévia",
    "question": "[Simulado PMPE AOCP - Questão 084] Assinale a frase em que o conectivo 'já que' introduz uma oração subordinada adverbial causal:",
    "options": [
      "Já que o efetivo da guarda foi reforçado pelo comando, a segurança no quartel foi plenamente restabelecida.",
      "Os policiais retornaram ao quartel já que a hora do almoço havia terminado pontualmente.",
      "O suspeito permaneceu calado durante o interrogatório, já que nada sabia a respeito do paradeiro da carga roubada.",
      "Todas as alternativas anteriores apresentam o conectivo 'já que' com valor estritamente causal.",
      "Nenhuma das orações acima possui valor semântico de causa factual."
    ],
    "correctIndex": 3,
    "explanation": "A locução conjuntiva 'já que' (assim como 'visto que', 'uma vez que', 'dado que') possui valor semântico exclusivamente CAUSAL, expressando o fato motivador da oração principal em todas as frases apresentadas.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Correta. A locução conjuntiva 'já que' (assim como 'visto que', 'uma vez que', 'dado que') possui valor semântico exclusivamente CAUSAL, expressando o fato motivador da oração principal em todas as frases apresentadas.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_085",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - Concessão com 'Conquanto'",
    "question": "[Simulado PMPE AOCP - Questão 085] A conjunção erudita 'conquanto', recorrente nas provas elaboradas pelo Instituto AOCP, é equivalente em valor semântico e sintático a:",
    "options": [
      "Portanto e logo (valor conclusivo).",
      "Embora e ainda que (valor concessivo).",
      "Porque e porquanto (valor causal).",
      "Conforme e consoante (valor conformativo).",
      "À medida que e à proporção que (valor proporcional)."
    ],
    "correctIndex": 1,
    "explanation": "'Conquanto' é conjunção subordinativa CONCESSIVA erudita (sinônimo perfeito de 'embora', 'ainda que', 'se bem que', 'posto que') e exige verbo conjugado no modo subjuntivo ('Conquanto estivesse ferido, o soldado combateu com destemor').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'Conquanto' é conjunção subordinativa CONCESSIVA erudita (sinônimo perfeito de 'embora', 'ainda que', 'se bem que', 'posto que') e exige verbo conjugado no modo subjuntivo ('Conquanto estivesse ferido, o soldado combateu com destemor').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_086",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Pronome em Início de Período após Vírgula",
    "question": "[Simulado PMPE AOCP - Questão 086] Considere o período: 'Ao término do patrulhamento diário, _______ ao alojamento para entrega do relatório.' Assinale a opção que preenche a lacuna em estrita obediência à norma-padrão:",
    "options": [
      "se dirigiram os policiais militares",
      "dirigiram-se os policiais militares",
      "os policiais militares dirigiram-se",
      "se os policiais militares dirigiram",
      "dirigir-se-ão os policiais militares"
    ],
    "correctIndex": 1,
    "explanation": "Após pausa assinalada por vírgula (que encerra oração ou adjunto adverbial anteposto), inicia-se um novo segmento sintático sem palavra atrativa, sendo obrigatória a ÊNCLISE ('dirigiram-se os policiais'). A próclise 'se dirigiram' após vírgula é reprovada pela norma culta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Após pausa assinalada por vírgula (que encerra oração ou adjunto adverbial anteposto), inicia-se um novo segmento sintático sem palavra atrativa, sendo obrigatória a ÊNCLISE ('dirigiram-se os policiais'). A próclise 'se dirigiram' após vírgula é reprovada pela norma culta.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_087",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise com Pronome Interrogativo",
    "question": "[Simulado PMPE AOCP - Questão 087] Assinale a frase em que o pronome oblíquo está colocado de forma INCORRETA:",
    "options": [
      "Quem te informou sobre o cancelamento da instrução de tiro prático?",
      "Qual dos cabos se voluntariou para a ronda noturna na rodovia estadual?",
      "Quantos policiais se destacaram na apreensão do carregamento de cocaína?",
      "Quem informou-te sobre o cancelamento da instrução de tiro prático?",
      "Por que nos chamaram com tanta urgência ao gabinete do subcomandante?"
    ],
    "correctIndex": 3,
    "explanation": "Pronomes interrogativos ('quem', 'qual', 'quanto', 'por que') atraem obrigatoriamente a próclise: 'Quem TE informou' (e NUNCA 'Quem informou-te'). A alternativa D viola essa atração.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Correta. Pronomes interrogativos ('quem', 'qual', 'quanto', 'por que') atraem obrigatoriamente a próclise: 'Quem TE informou' (e NUNCA 'Quem informou-te'). A alternativa D viola essa atração.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_088",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Próclise com Pronome Demonstrativo Neutro",
    "question": "[Simulado PMPE AOCP - Questão 088] Pronomes demonstrativos neutros ('isto', 'isso', 'aquilo') exercem atração pronominal de próclise. Assinale a frase que segue essa regra:",
    "options": [
      "Isso surpreendeu-nos profundamente durante o desenrolar das investigações.",
      "Aquilo incomodou-o de tal maneira que solicitou transferência imediata de unidade.",
      "Isto nos parece a solução mais equilibrada para sanar o impasse com os moradores.",
      "Isso revelou-se um estratagema ardiloso montado pela quadrilha de roubo de cargas.",
      "Aquilo desanimou-nos momentaneamente após o cancelamento das viaturas de reforço."
    ],
    "correctIndex": 2,
    "explanation": "Pronomes demonstrativos (isto, isso, aquilo) exercem atração e justificam a PRÓCLISE: 'Isto NOS parece'. As opções com ênclise após o pronome demonstrativo sem vírgula transgridem a atração.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Pronomes demonstrativos (isto, isso, aquilo) exercem atração e justificam a PRÓCLISE: 'Isto NOS parece'. As opções com ênclise após o pronome demonstrativo sem vírgula transgridem a atração.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_089",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Pronome Átono com Infinitivo Precedido de Preposição",
    "question": "[Simulado PMPE AOCP - Questão 089] Quando o infinitivo vem precedido de preposição (como 'para', 'a', 'de'), a colocação do pronome átono:",
    "options": [
      "É facultativa (admite tanto a próclise quanto a ênclise ao infinitivo).",
      "É estritamente proibida em ênclise pela gramática brasileira.",
      "Deve ocorrer exclusivamente em mesóclise interna no radical.",
      "Exige que o verbo auxiliar seja eliminado do predicado.",
      "Depende de aprovação em convenção ortográfica da Academia Brasileira de Letras."
    ],
    "correctIndex": 0,
    "explanation": "Diante de infinitivo precedido de preposição ('para não te prejudicar' / 'para te apoiar' ou 'para apoiar-te'), a colocação pronominal é FACULTATIVA pela tradição gramatical e pelas bancas (admite-se tanto 'para o prender' quanto 'para prendê-lo').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Diante de infinitivo precedido de preposição ('para não te prejudicar' / 'para te apoiar' ou 'para apoiar-te'), a colocação pronominal é FACULTATIVA pela tradição gramatical e pelas bancas (admite-se tanto 'para o prender' quanto 'para prendê-lo').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_090",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - 'Em se tratando de'",
    "question": "[Simulado PMPE AOCP - Questão 090] Na consagrada estrutura 'Em + se + gerúndio' (exemplo: 'Em se tratando de segurança pública...'), a colocação do pronome é:",
    "options": [
      "Próclise obrigatória em relação ao gerúndio devido à presença da preposição 'em'.",
      "Ênclise facultativa ao gerúndio ('Em tratando-se').",
      "Mesóclise no gerúndio ('Em tratandose-ia').",
      "Considerada arcaísmo e proibida nos concursos militares.",
      "Sintaticamente equivalente a uma oração adjetiva explicativa."
    ],
    "correctIndex": 0,
    "explanation": "A construção 'Em + se + gerúndio' é um clássico caso de PRÓCLISE OBRIGATÓRIA consagrado na gramática normativa: 'Em SE tratando de operações de alto risco, a cautela do Bope é indispensável'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A construção 'Em + se + gerúndio' é um clássico caso de PRÓCLISE OBRIGATÓRIA consagrado na gramática normativa: 'Em SE tratando de operações de alto risco, a cautela do Bope é indispensável'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_091",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Uso da Vírgula com Orações Coordenadas Assindéticas",
    "question": "[Simulado PMPE AOCP - Questão 091] Orações coordenadas assindéticas (sem conectivo) que se sucedem para narrar ações rápidas devem ser separadas por:",
    "options": [
      "Vírgulas simples.",
      "Dois-pontos consecutivos.",
      "Ponto de exclamação no término de cada oração.",
      "Aspas duplas de citação textual.",
      "Travessão duplo de intercalação."
    ],
    "correctIndex": 0,
    "explanation": "Orações coordenadas assindéticas (que não possuem conectivo ligando-as) são separadas por VÍRGULAS: 'O policial saltou da viatura, empunhou o armamento, ordenou a rendição dos suspeitos, conteve a multidão'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Orações coordenadas assindéticas (que não possuem conectivo ligando-as) são separadas por VÍRGULAS: 'O policial saltou da viatura, empunhou o armamento, ordenou a rendição dos suspeitos, conteve a multidão'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_092",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Supressão do Verbo (Zeugma)",
    "question": "[Simulado PMPE AOCP - Questão 092] A vírgula pode ser utilizada esteticamente para marcar a omissão de um verbo já citado no período anterior (figura sintática de zeugma). Assinale a frase que exemplifica essa aplicação:",
    "options": [
      "O oficial comandante ocupava o assento dianteiro da viatura; o motorista, o volante.",
      "O oficial comandante ocupava o assento dianteiro, e o motorista conduzia o veículo com prudência.",
      "O oficial comandante e o motorista ocupavam os assentos dianteiros da radiopatrulha.",
      "Quando o oficial comandante ocupava o assento, o motorista ligava as sirenes do veículo.",
      "O comandante ocupava o assento para que o motorista pudesse monitorar a via lateral."
    ],
    "correctIndex": 0,
    "explanation": "Em 'o motorista, o volante', a vírgula assinala a elipse (zeugma) do verbo anteriormente expresso ('ocupava'). Essa vírgula do zeugma é muito cobrada pelo Instituto AOCP.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'o motorista, o volante', a vírgula assinala a elipse (zeugma) do verbo anteriormente expresso ('ocupava'). Essa vírgula do zeugma é muito cobrada pelo Instituto AOCP.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_093",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Travessão Único vs Duplo",
    "question": "[Simulado PMPE AOCP - Questão 093] O travessão duplo pode substituir as vírgulas duplas ou os parênteses para:",
    "options": [
      "Isolar termos intercalados, apostos explicativos ou comentários acessórios com ênfase visual.",
      "Indicar o término definitivo de um período paratático.",
      "Substituir o sinal gráfico indicativo de crase em locuções femininas.",
      "Transformar orações subordinadas em predicativos subjetivos.",
      "Sinalizar a conjugação reflexiva de verbos anômalos."
    ],
    "correctIndex": 0,
    "explanation": "Os travessões duplos funcionam como elementos delimitadores estilísticos equivalentes às vírgulas duplas ou parênteses para destacar termos intercalados, comentários do narrador ou apostos explicativos.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Os travessões duplos funcionam como elementos delimitadores estilísticos equivalentes às vírgulas duplas ou parênteses para destacar termos intercalados, comentários do narrador ou apostos explicativos.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_094",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Conectivo 'Senão'",
    "question": "[Simulado PMPE AOCP - Questão 094] A palavra 'senão' atua como conjunção alternativa/adversativa com sentido de 'caso contrário' ou 'de outro modo'. Assinale a frase com o emprego correto de 'senão':",
    "options": [
      "Apresente a carteira de habilitação e os documentos do veículo, senão a viatura será guinchada.",
      "Não faça movimentos bruscos durante a abordagem policial, se não você colocará todos em risco.",
      "A corporação militar não almeja outra coisa se não a preservação rigorosa da ordem pública.",
      "Todos os suspeitos foram liberados da custódia, se não aqueles indiciados por tráfico de armas.",
      "O soldado não fez se não cumprir o regulamento disciplinar em vigor na unidade."
    ],
    "correctIndex": 0,
    "explanation": "'Senão' (em uma só palavra) significa 'caso contrário', 'a não ser', 'exceto', 'mas sim'. A forma separada 'se não' é a junção da conjunção condicional 'se' com o advérbio de negação 'não' (usada em orações condicionais: 'se não chover'). A frase A aplica com perfeição 'senão' = caso contrário.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Senão' (em uma só palavra) significa 'caso contrário', 'a não ser', 'exceto', 'mas sim'. A forma separada 'se não' é a junção da conjunção condicional 'se' com o advérbio de negação 'não' (usada em orações condicionais: 'se não chover'). A frase A aplica com perfeição 'senão' = caso contrário.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_095",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Subordinativas - 'Porquanto' vs 'Portanto'",
    "question": "[Simulado PMPE AOCP - Questão 095] Não confunda os conectivos 'porquanto' e 'portanto'. Assinale a alternativa que define corretamente a função sintática de cada um:",
    "options": [
      "'Porquanto' possui valor causal/explicativo (= porque, visto que), enquanto 'portanto' possui valor conclusivo (= logo, por conseguinte).",
      "'Porquanto' possui valor conclusivo, enquanto 'portanto' possui valor estritamente concessivo.",
      "Ambos são conectivos subordinativos comparativos sinônimos na língua padrão.",
      "'Porquanto' é pronome relativo adverbial e 'portanto' é interjeição militar de parada.",
      "'Porquanto' exprime condição e 'portanto' exprime proporcionalidade cronológica."
    ],
    "correctIndex": 0,
    "explanation": "Distinção de ouro para a AOCP: 'PORQUANTO' = causal/explicativo (sinônimo de 'já que', 'porque', 'visto que'). 'PORTANTO' = conclusivo (sinônimo de 'logo', 'por conseguinte', 'assim').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Distinção de ouro para a AOCP: 'PORQUANTO' = causal/explicativo (sinônimo de 'já que', 'porque', 'visto que'). 'PORTANTO' = conclusivo (sinônimo de 'logo', 'por conseguinte', 'assim').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_096",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Verbo no Gerúndio sem Preposição 'Em'",
    "question": "[Simulado PMPE AOCP - Questão 096] Quando o verbo está no gerúndio e NÃO é precedido da preposição 'em', a colocação padrão do pronome átono é:",
    "options": [
      "Ênclise ao gerúndio (ex.: 'afastando-se da barricada').",
      "Mesóclise no meio do gerúndio.",
      "Próclise com hífen obrigatório.",
      "Substituição do pronome oblíquo pelo pronome do caso reto correspondente.",
      "Apassivação pelo acréscimo da preposição 'a'."
    ],
    "correctIndex": 0,
    "explanation": "Com gerúndio sem preposição 'em' (e sem termo atrativo anterior), o pronome fica enclítico ao verbo: 'O suspeito correu em direção ao beco, afastando-se do alcance visual dos policiais'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Com gerúndio sem preposição 'em' (e sem termo atrativo anterior), o pronome fica enclítico ao verbo: 'O suspeito correu em direção ao beco, afastando-se do alcance visual dos policiais'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_097",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Colocação Pronominal - Pronome Átono após Verbo no Particípio",
    "question": "[Simulado PMPE AOCP - Questão 097] Assinale a alternativa que ilustra a correção absoluta segundo o padrão culto da língua:",
    "options": [
      "O oficial havia preparado-se para prestar depoimento perante o Conselho de Justificação Militar.",
      "O oficial havia se preparado para prestar depoimento perante o Conselho de Justificação Militar.",
      "Tinha apresentado-se o soldado ao novo posto de serviço no destacamento de Goiana.",
      "Haviam enganado-se os criminosos que tentaram romper o cerco tático montado pela PMPE.",
      "Tinham dispersado-se os manifestantes que ocupavam a rodovia antes da chegada do Choque."
    ],
    "correctIndex": 1,
    "explanation": "Como visto, é proibido colocar pronome enclítico a particípio ('havia preparado-se' é incorreto). O pronome deve vir próclise ao particípio (ou seja, entre os verbos: 'havia se preparado') ou ênclise ao auxiliar.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Como visto, é proibido colocar pronome enclítico a particípio ('havia preparado-se' é incorreto). O pronome deve vir próclise ao particípio (ou seja, entre os verbos: 'havia se preparado') ou ênclise ao auxiliar.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_098",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Isolamento de Circunstâncias de Tempo no Início",
    "question": "[Simulado PMPE AOCP - Questão 098] Assinale a frase em que o emprego das vírgulas é estritamente obrigatório de acordo com o padrão normativo:",
    "options": [
      "Na manhã chuvosa de terça-feira no centro do Recife, a tropa do 16º BPM realizou uma vasta operação de saturação policial.",
      "Hoje a patrulha esteve no mercado público.",
      "Amanhã os novos soldados assumirão o plantão.",
      "Aqui o policiamento comunitário atua com eficiência.",
      "Ontem o trânsito fluiu sem nenhuma intercorrência na ponte Duarte Coelho."
    ],
    "correctIndex": 0,
    "explanation": "Em A, temos um adjunto adverbial composto de longa extensão ('Na manhã chuvosa de terça-feira no centro do Recife'), composto por 9 palavras, o que torna a vírgula OBRIGATÓRIA. Nas outras opções, os advérbios são curtos ('hoje', 'amanhã', 'aqui', 'ontem'), sendo a vírgula meramente facultativa.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em A, temos um adjunto adverbial composto de longa extensão ('Na manhã chuvosa de terça-feira no centro do Recife'), composto por 9 palavras, o que torna a vírgula OBRIGATÓRIA. Nas outras opções, os advérbios são curtos ('hoje', 'amanhã', 'aqui', 'ontem'), sendo a vírgula meramente facultativa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_099",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Conjunções Coordenativas - Valor Adversativo do Conectivo 'E'",
    "question": "[Simulado PMPE AOCP - Questão 099] A conjunção 'e' pode assumir valor semântico adversativo (equivalente a 'mas', 'porém') a depender do contexto. Assinale a frase que ilustra esse fenômeno:",
    "options": [
      "O suspeito jurou inocência perante o delegado, e as câmeras de segurança comprovaram sua participação no roubo.",
      "O policial militar concluiu a ronda matinal e retornou ao quartel para registrar o boletim.",
      "O cabo efetuou a abordagem do motorista e solicitou os documentos de porte obrigatório.",
      "A tropa marchou sob o sol inclemente e cantou o hino da corporação militar com orgulho.",
      "O soldado ingressou na viatura e partiu imediatamente para atender ao chamado de socorro."
    ],
    "correctIndex": 0,
    "explanation": "Em A, há nítida ideia de oposição entre as duas orações: ele jurou inocência, MAS as câmeras provaram sua culpa. O conectivo 'e' assume aqui autêntico valor semântico ADVERSATIVO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em A, há nítida ideia de oposição entre as duas orações: ele jurou inocência, MAS as câmeras provaram sua culpa. O conectivo 'e' assume aqui autêntico valor semântico ADVERSATIVO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_100",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Pontuação - Emprego de Aspas",
    "question": "[Simulado PMPE AOCP - Questão 100] As aspas são empregadas na norma culta para assinalar:",
    "options": [
      "Citação textual direta de outro autor, palavras estrangeiras, neologismos, gírias ou termos com sentido irônico.",
      "A separação obrigatória entre o verbo e o seu complemento direto.",
      "A concordância no particípio passado em locuções adjetivas.",
      "A elipse do verbo auxiliar em orações coordenadas sindéticas.",
      "O término definitivo de períodos oracionais interrogativos."
    ],
    "correctIndex": 0,
    "explanation": "As aspas têm finalidade gráfica bem delimitada: destacar citações diretas, palavras estrangeiras, gírias, neologismos, expressões populares ou termos empregados com conotação irônica/metafórica.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. As aspas têm finalidade gráfica bem delimitada: destacar citações diretas, palavras estrangeiras, gírias, neologismos, expressões populares ou termos empregados com conotação irônica/metafórica.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_101",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'QUE' - Pronome Relativo vs Conjunção Integrante",
    "question": "[Simulado PMPE AOCP - Questão 101] A palavra 'que' atua como pronome relativo quando retoma um substantivo ou pronome antecedente, podendo ser substituída por 'o qual / a qual'. Assinale a alternativa em que o 'que' funciona como pronome relativo:",
    "options": [
      "O oficial comandante afirmou que a tropa militar estava preparada para a operação especial.",
      "A viatura blindada que foi adquirida pelo governo do Estado possui proteção contra fuzil.",
      "É imperioso que todos os concursados mantenham a rotina de treinos físicos diários.",
      "A perícia concluiu que não houve falha mecânica no sistema de freios da ambulância.",
      "Desejamos que a solenidade de formatura dos novos soldados transcorra em clima de júbilo."
    ],
    "correctIndex": 1,
    "explanation": "Em 'A viatura blindada QUE foi adquirida...', o 'que' retoma o substantivo antecedente 'viatura' ('a qual foi adquirida'), exercendo a função sintática de pronome relativo (e sujeito da oração adjetiva). Nas outras opções, o 'que' introduz oração subordinada substantiva e funciona como CONJUNÇÃO INTEGRANTE ('afirmou ISSO', 'é imperioso ISSO', etc.).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em 'A viatura blindada QUE foi adquirida...', o 'que' retoma o substantivo antecedente 'viatura' ('a qual foi adquirida'), exercendo a função sintática de pronome relativo (e sujeito da oração adjetiva). Nas outras opções, o 'que' introduz oração subordinada substantiva e funciona como CONJUNÇÃO INTEGRANTE ('afirmou ISSO', 'é imperioso ISSO', etc.).",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_102",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'QUE' - Conjunção Integrante",
    "question": "[Simulado PMPE AOCP - Questão 102] O 'que' é classificado como conjunção integrante quando introduz oração subordinada substantiva (que pode ser substituída mentalmente por 'ISSO'). Assinale a frase em que o 'que' é conjunção integrante:",
    "options": [
      "O relatório técnico que o sargento elaborou foi enviado à corregedoria militar.",
      "As orientações que os instrutores repassaram no estande foram fundamentais para a pontaria.",
      "O comando geral determinou que o policiamento na orla fosse reforçado nos fins de semana.",
      "Os soldados que concluíram o curso receberam o distintivo do Batalhão de Operações Especiais.",
      "A viatura de ronda escolar que atende à comunidade do Ibura realizou palestras sobre prevenção."
    ],
    "correctIndex": 2,
    "explanation": "Em 'O comando geral determinou QUE o policiamento... fosse reforçado', podemos substituir toda a oração subordinada por 'ISSO' ('O comando geral determinou ISSO'). Portanto, o 'que' é CONJUNÇÃO INTEGRANTE que introduz uma oração subordinada substantiva objetiva direta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. Em 'O comando geral determinou QUE o policiamento... fosse reforçado', podemos substituir toda a oração subordinada por 'ISSO' ('O comando geral determinou ISSO'). Portanto, o 'que' é CONJUNÇÃO INTEGRANTE que introduz uma oração subordinada substantiva objetiva direta.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_103",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'QUE' - Conjunção Explicativa",
    "question": "[Simulado PMPE AOCP - Questão 103] Assinale a alternativa em que a partícula 'que' introduz uma oração coordenada sindética explicativa:",
    "options": [
      "Não corra em direção ao tiroteio, que a área ainda não foi totalmente desobstruída pela tropa.",
      "O suspeito afirmou categoricamente que desconhecia a origem das cédulas falsificadas.",
      "As testemunhas oculares que prestaram depoimento foram incluídas no programa de proteção.",
      "Foi tanta a emoção do recruta que as lágrimas escorreram durante o juramento à bandeira.",
      "Temos certeza de que a ordem pública prevalecerá em todo o Estado de Pernambuco."
    ],
    "correctIndex": 0,
    "explanation": "Após verbo no imperativo ('Não corra...'), o 'que' equivale a 'pois' / 'porque' e introduz a justificativa do comando, funcionando como CONJUNÇÃO COORDENATIVA EXPLICATIVA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Após verbo no imperativo ('Não corra...'), o 'que' equivale a 'pois' / 'porque' e introduz a justificativa do comando, funcionando como CONJUNÇÃO COORDENATIVA EXPLICATIVA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_104",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'QUE' - Conjunção Consecutiva",
    "question": "[Simulado PMPE AOCP - Questão 104] Na frase 'A tempestade alagou a rodovia de tal modo que o tráfego de carretas precisou ser interrompido', a partícula 'que' classifica-se como:",
    "options": [
      "Pronome relativo com função de adjunto adnominal.",
      "Conjunção subordinativa consecutiva integrante de locução correlativa.",
      "Conjunção coordenativa adversativa equivalente a porém.",
      "Preposição acidental com regência indireta.",
      "Partícula expletiva ou de realce estilístico."
    ],
    "correctIndex": 1,
    "explanation": "Na correlação 'de tal modo... que', 'tão... que', 'tanto... que', a conjunção 'que' introduz a CONSEQUÊNCIA do fato anterior, classificando-se como CONJUNÇÃO SUBORDINATIVA CONSECUTIVA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Na correlação 'de tal modo... que', 'tão... que', 'tanto... que', a conjunção 'que' introduz a CONSEQUÊNCIA do fato anterior, classificando-se como CONJUNÇÃO SUBORDINATIVA CONSECUTIVA.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_105",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'QUE' - Partícula de Realce (Expletiva)",
    "question": "[Simulado PMPE AOCP - Questão 105] A partícula 'que' (ou a locução 'é que') é dita expletiva ou de realce quando pode ser eliminada da oração sem qualquer prejuízo sintático ou semântico estrutural. Assinale a frase que contém 'que' expletivo:",
    "options": [
      "Nós é que realizamos o patrulhamento preventivo nas ruas históricas de Olinda.",
      "Os policiais que realizavam o patrulhamento prenderam dois assaltantes armados.",
      "O comandante exigiu que todos os soldados comparecessem pontualmente à alvorada militar.",
      "A verdade é que os criminosos tentaram escapar pelo telhado do armazém abandonado.",
      "Comentou-se no quartel que haverá abertura de novas vagas para a cavalaria montada."
    ],
    "correctIndex": 0,
    "explanation": "Em 'Nós é que realizamos o patrulhamento...', se retirarmos a locução 'é que', a frase mantém-se perfeita: 'Nós realizamos o patrulhamento...'. Trata-se de partícula ou locução EXPLETIVA / DE REALCE.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'Nós é que realizamos o patrulhamento...', se retirarmos a locução 'é que', a frase mantém-se perfeita: 'Nós realizamos o patrulhamento...'. Trata-se de partícula ou locução EXPLETIVA / DE REALCE.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_106",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Partícula Apassivadora",
    "question": "[Simulado PMPE AOCP - Questão 106] A partícula 'se' classifica-se como pronome apassivador (ou partícula apassivadora) quando se junta a verbo transitivo direto e o sujeito é paciente. Assinale a frase com partícula apassivadora:",
    "options": [
      "Venderam-se todos os ingressos para o evento esportivo monitorado pelo Choque.",
      "Precisa-se de novos instrutores especializados em gerenciamento de crises militares.",
      "O soldado feriu-se acidentalmente com a faca tática durante a instrução na selva.",
      "Os manifestantes queixaram-se das condições precárias do transporte público metropolitano.",
      "Tratava-se de um plano criminoso articulado por uma quadrilha interestadual."
    ],
    "correctIndex": 0,
    "explanation": "Em 'Venderam-se todos os ingressos', o verbo 'vender' é VTD e 'todos os ingressos' é o sujeito paciente ('todos os ingressos foram vendidos'). A partícula 'se' é PRONOME APASSIVADOR.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'Venderam-se todos os ingressos', o verbo 'vender' é VTD e 'todos os ingressos' é o sujeito paciente ('todos os ingressos foram vendidos'). A partícula 'se' é PRONOME APASSIVADOR.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_107",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Índice de Indeterminação do Sujeito",
    "question": "[Simulado PMPE AOCP - Questão 107] A partícula 'se' funciona como índice de indeterminação do sujeito quando acompanha verbos transitivos indiretos, intransitivos ou de ligação, sem sujeito determinado. Assinale a frase correta:",
    "options": [
      "Alugam-se salas comerciais no centro da cidade para escritórios de advocacia.",
      "Acredita-se no compromisso inegociável da polícia com a defesa dos direitos fundamentais.",
      "O jovem militar olhou-se no espelho do alojamento e ajeitou a boina preta com orgulho.",
      "Os cabos suicidaram-se no local do confronto após a emboscada do bando armado.",
      "Consertam-se viaturas e equipamentos de radiocomunicação no pátio da oficina militar."
    ],
    "correctIndex": 1,
    "explanation": "Em 'Acredita-se no compromisso...', o verbo 'acreditar' é VTI (rege preposição 'em') e não possui sujeito expresso. A partícula 'se' é ÍNDICE DE INDETERMINAÇÃO DO SUJEITO (o verbo permanece obrigatoriamente no singular).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em 'Acredita-se no compromisso...', o verbo 'acreditar' é VTI (rege preposição 'em') e não possui sujeito expresso. A partícula 'se' é ÍNDICE DE INDETERMINAÇÃO DO SUJEITO (o verbo permanece obrigatoriamente no singular).",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_108",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Pronome Reflexivo",
    "question": "[Simulado PMPE AOCP - Questão 108] O 'se' é pronome reflexivo quando o sujeito pratica e recebe simultaneamente a ação verbal. Assinale a frase que exemplifica essa função:",
    "options": [
      "O cabo cortou-se com o arame farpado enquanto escalava a cerca perimetral do presídio.",
      "Divulgou-se a tabela de promoções por merecimento no Diário Oficial do Estado.",
      "Necessita-se de apoio médico urgente para o socorro dos feridos no acidente rodoviário.",
      "Não se sabe se haverá prorrogação do prazo de validade do concurso público militar.",
      "Trabalha-se com afinco e dedicação dia e noite na central de operações do Copom."
    ],
    "correctIndex": 0,
    "explanation": "Em 'O cabo cortou-se...', o cabo praticou a ação de cortar e ele próprio sofreu o corte (cortou a si mesmo). O 'se' é PRONOME REFLEXIVO (com função sintática de objeto direto).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'O cabo cortou-se...', o cabo praticou a ação de cortar e ele próprio sofreu o corte (cortou a si mesmo). O 'se' é PRONOME REFLEXIVO (com função sintática de objeto direto).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_109",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Pronome Reflexivo Recíproco",
    "question": "[Simulado PMPE AOCP - Questão 109] Quando a ação é mútua entre dois ou mais agentes ('um ao outro'), o pronome 'se' é classificado como recíproco. Assinale a alternativa que ilustra a reciprocidade:",
    "options": [
      "Os dois policiais veteranos cumprimentaram-se cordialmente com continência militar na formatura.",
      "O suspeito escondeu-se atrás da mureta de concreto ao ouvir o ruído dos motores das viaturas.",
      "Constatou-se que a fechadura da residência havia sido violada com o uso de pé de cabra.",
      "Aspira-se a dias melhores e de convivência pacífica em todas as comunidades pernambucanas.",
      "O capitão arrependeu-se da decisão de suspender o treinamento de tiro naquele dia chuvoso."
    ],
    "correctIndex": 0,
    "explanation": "Em 'Os dois policiais veteranos cumprimentaram-se...', a ação é praticada reciprocamente por ambos (um cumprimentou o outro), funcionando o 'se' como PRONOME REFLEXIVO RECÍPROCO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'Os dois policiais veteranos cumprimentaram-se...', a ação é praticada reciprocamente por ambos (um cumprimentou o outro), funcionando o 'se' como PRONOME REFLEXIVO RECÍPROCO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_110",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Parte Integrante do Verbo (P.I.V.)",
    "question": "[Simulado PMPE AOCP - Questão 110] Determinados verbos pronominais essenciais (como 'queixar-se', 'arrepender-se', 'suicidar-se', 'vangloriar-se') trazem o pronome 'se' como parte integrante de sua conjugação. Assinale a alternativa com essa ocorrência:",
    "options": [
      "O soldado arrependeu-se imediatamente de ter respondido de forma impensada ao seu sargento.",
      "Construíram-se novos alojamentos no centro de treinamento militar da corporação.",
      "Apela-se para a colaboração cidadã na identificação de foragidos da justiça criminal.",
      "O guarda armou-se com colete balístico nível III-A antes de iniciar o turno de serviço.",
      "Informou-se aos familiares sobre a rápida liberação dos reféns resgatados pelo Bope."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'arrepender-se' é essencialmente pronominal (não existe 'arrepender' sem pronome na língua padrão). O 'se' é PARTE INTEGRANTE DO VERBO (P.I.V.), não exercendo função de objeto nem apassivando.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O verbo 'arrepender-se' é essencialmente pronominal (não existe 'arrepender' sem pronome na língua padrão). O 'se' é PARTE INTEGRANTE DO VERBO (P.I.V.), não exercendo função de objeto nem apassivando.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_111",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Conjunção Subordinativa Integrante",
    "question": "[Simulado PMPE AOCP - Questão 111] O 'se' atua como conjunção integrante quando introduz oração subordinada substantiva com valor de dúvida, indagação ou incerteza. Assinale a frase com 'se' integrante:",
    "options": [
      "O oficial de dia perguntou aos sentinelas se havia ocorrido qualquer anormalidade no perímetro.",
      "Se as condições meteorológicas permitirem, o treinamento aeromóvel terá início às 09h00.",
      "Caso o alarme soe, os militares devem dirigir-se ao ponto de encontro pré-determinado.",
      "Lavou-se o fardamento tático após a marcha de sobrevivência na vegetação de caatinga.",
      "Vive-se com honra e retidão quando se cumpre com fidelidade a missão policial delegada."
    ],
    "correctIndex": 0,
    "explanation": "Em 'perguntou aos sentinelas SE havia ocorrido...', a oração introduzida por 'se' equivale a 'ISSO' ('perguntou ISSO'), funcionando o 'se' como CONJUNÇÃO SUBORDINATIVA INTEGRANTE.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'perguntou aos sentinelas SE havia ocorrido...', a oração introduzida por 'se' equivale a 'ISSO' ('perguntou ISSO'), funcionando o 'se' como CONJUNÇÃO SUBORDINATIVA INTEGRANTE.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_112",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Funções da Partícula 'SE' - Conjunção Subordinativa Condicional",
    "question": "[Simulado PMPE AOCP - Questão 112] Assinale a opção em que a partícula 'se' funciona como conjunção subordinativa condicional:",
    "options": [
      "Se a ordem judicial for expedida pelo juiz competente, a equipe efetuará a busca domiciliar.",
      "Não sabemos se o comboio de transporte de presos já ultrapassou a divisa de Pernambuco.",
      "Organizou-se uma conferência estadual sobre segurança cidadã e valorização policial militar.",
      "O capitão vangloriou-se dos resultados expressivos alcançados pela sua companhia de Choque.",
      "Comeu-se todo o rancho servido aos cadetes no refeitório após o término dos exercícios físicos."
    ],
    "correctIndex": 0,
    "explanation": "Em 'SE a ordem judicial for expedida...', o 'se' impõe uma hipótese ou condição indispensável para a realização da busca domiciliar, atuando como CONJUNÇÃO SUBORDINATIVA CONDICIONAL.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'SE a ordem judicial for expedida...', o 'se' impõe uma hipótese ou condição indispensável para a realização da busca domiciliar, atuando como CONJUNÇÃO SUBORDINATIVA CONDICIONAL.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_113",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe do Período - Função Sintática do Pronome Relativo 'QUE' (Sujeito)",
    "question": "[Simulado PMPE AOCP - Questão 113] No período 'O policial militar que agiu com bravura no resgate das crianças foi condecorado pelo governador', o pronome relativo 'que' desempenha a função sintática de:",
    "options": [
      "Sujeito da oração subordinada adjetiva.",
      "Objeto direto do verbo agir.",
      "Adjunto adnominal do substantivo governador.",
      "Complemento nominal do termo bravura.",
      "Predicativo do objeto direto."
    ],
    "correctIndex": 0,
    "explanation": "Para descobrir a função do pronome relativo, substitui-se o 'que' pelo antecedente: 'O policial militar agiu com bravura'. Na oração subordinada, 'o policial militar' é o SUJEITO do verbo 'agir'. Portanto, o pronome relativo exerce função de SUJEITO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Para descobrir a função do pronome relativo, substitui-se o 'que' pelo antecedente: 'O policial militar agiu com bravura'. Na oração subordinada, 'o policial militar' é o SUJEITO do verbo 'agir'. Portanto, o pronome relativo exerce função de SUJEITO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_114",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe do Período - Função Sintática do Pronome Relativo 'QUE' (Objeto Direto)",
    "question": "[Simulado PMPE AOCP - Questão 114] Assinale a frase em que o pronome relativo 'que' exerce a função sintática de OBJETO DIRETO:",
    "options": [
      "A pistola calibre 9mm que a corporação adquiriu possui sistema moderno de percussão.",
      "O militar que comandou a guarnição foi promovido por ato de bravura comprovada.",
      "A ocorrência que mobilizou tantas viaturas terminou com a rendição pacífica dos infratores.",
      "Os cidadãos que presenciaram os fatos foram convocados para prestar esclarecimentos.",
      "A viatura que tombou na curva da rodovia foi encaminhada à oficina para reparos estruturais."
    ],
    "correctIndex": 0,
    "explanation": "Substituindo o antecedente na oração subordinada: 'A corporação adquiriu a pistola calibre 9mm'. 'A corporação' é o sujeito, e 'a pistola' é o OBJETO DIRETO de 'adquiriu'. Logo, o pronome relativo 'que' exerce a função de OBJETO DIRETO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Substituindo o antecedente na oração subordinada: 'A corporação adquiriu a pistola calibre 9mm'. 'A corporação' é o sujeito, e 'a pistola' é o OBJETO DIRETO de 'adquiriu'. Logo, o pronome relativo 'que' exerce a função de OBJETO DIRETO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_115",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe do Período - Pronome Relativo 'CUJO' e suas Regras",
    "question": "[Simulado PMPE AOCP - Questão 115] Quanto ao uso do pronome relativo 'cujo' (e suas flexões 'cuja', 'cujos', 'cujas'), assinale a afirmativa gramaticalmente correta:",
    "options": [
      "Deve vir sempre seguido de artigo definido (ex.: 'cujo o policial', 'cuja a arma').",
      "Indica relação de posse entre dois substantivos e JAMAIS admite artigo imediatamente após si.",
      "Pode ser livremente substituído pela conjunção integrante 'que' sem alteração de sentido.",
      "Exige que o substantivo antecedente seja colocado entre vírgulas explicativas obrigatórias.",
      "É empregado exclusivamente para substituir pronomes demonstrativos neutros de terceira pessoa."
    ],
    "correctIndex": 1,
    "explanation": "'Cujo' estabelece relação de POSSE entre dois substantivos (possuidor e possuído), concorda em gênero e número com a coisa possuída e é ESTRITAMENTE PROIBIDO usar artigo após ele ('cujo o', 'cuja a' são erros crassos na língua culta).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'Cujo' estabelece relação de POSSE entre dois substantivos (possuidor e possuído), concorda em gênero e número com a coisa possuída e é ESTRITAMENTE PROIBIDO usar artigo após ele ('cujo o', 'cuja a' são erros crassos na língua culta).",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_116",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Tipologia Textual - Texto Narrativo",
    "question": "[Simulado PMPE AOCP - Questão 116] Um texto classifica-se predominantemente como NARRATIVO quando sua estrutura fundamental apresenta:",
    "options": [
      "Sucessão cronológica de acontecimentos reais ou ficcionais, com personagens, narrador, tempo, espaço e enredo transformador de estado.",
      "Defesa intransigente de uma tese por meio de argumentos lógicos fundamentados com citações de autoridades.",
      "Instruções passo a passo com comandos imperativos que ensinam o leitor a montar um dispositivo operacional.",
      "Caracterização pormenorizada de características estáticas de um ambiente ou objeto com abundância de adjetivos.",
      "Exposição neutra de dados estatísticos sem qualquer elemento de progressão temporal ou causal."
    ],
    "correctIndex": 0,
    "explanation": "A tipologia NARRATIVA caracteriza-se pela progressão temporal e causal de fatos/ações protagonizados por personagens em determinado tempo e espaço, com presença de conflito e clímax.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A tipologia NARRATIVA caracteriza-se pela progressão temporal e causal de fatos/ações protagonizados por personagens em determinado tempo e espaço, com presença de conflito e clímax.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_117",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Tipologia Textual - Texto Dissertativo-Argumentativo",
    "question": "[Simulado PMPE AOCP - Questão 117] O texto dissertativo-argumentativo, modelo clássico cobrado nas redações de concursos de segurança pública, tem por objetivo precípuo:",
    "options": [
      "Relatar as façanhas cotidianas dos bravos policiais militares no policiamento comunitário.",
      "Defender um ponto de vista (tese) a respeito de um problema social, convencendo e persuadindo o interlocutor com argumentos sólidos.",
      "Descrever minuciosamente o uniforme, os equipamentos e as viaturas utilizados na parada cívica.",
      "Fornecer um manual prático de montagem e desmontagem em primeiro escalão de armamento leve.",
      "Transcrever ipsis litteris a ordem do dia assinada pelo Comandante-Geral da Polícia Militar."
    ],
    "correctIndex": 1,
    "explanation": "O texto DISSERTATIVO-ARGUMENTATIVO visa à persuasão: defende uma tese central sustentada por argumentos consistentes, dados, fatos e raciocínio lógico, objetivando convencer o leitor.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. O texto DISSERTATIVO-ARGUMENTATIVO visa à persuasão: defende uma tese central sustentada por argumentos consistentes, dados, fatos e raciocínio lógico, objetivando convencer o leitor.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_118",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Tipologia Textual - Texto Injuntivo / Instrucional",
    "question": "[Simulado PMPE AOCP - Questão 118] São exemplos característicos da tipologia textual INJUNTIVA (ou prescritiva/instrucional):",
    "options": [
      "Manuais de procedimento operacional padrão (POP), regulamentos de continência e receitas médicas que utilizam verbos no imperativo ou infinitivo com valor de ordem.",
      "Crônicas líricas sobre a paisagem urbana das pontes do Recife ao entardecer.",
      "Artigos científicos de criminologia que debatem teorias da associação diferencial.",
      "Contos folclóricos sobre lendas sertanejas e figuras históricas do cangaço pernambucano.",
      "Verbetes de enciclopédia que conceituam a história da fundação da capitania de Duarte Coelho."
    ],
    "correctIndex": 0,
    "explanation": "A tipologia INJUNTIVA/INSTRUCIONAL tem como traço distintivo orientar, instruir ou ordenar um procedimento passo a passo ao leitor, empregando verbos no imperativo ou infinitivo (manuais, bulas, receitas, POP).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A tipologia INJUNTIVA/INSTRUCIONAL tem como traço distintivo orientar, instruir ou ordenar um procedimento passo a passo ao leitor, empregando verbos no imperativo ou infinitivo (manuais, bulas, receitas, POP).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_119",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Tipologia Textual - Texto Descritivo",
    "question": "[Simulado PMPE AOCP - Questão 119] Em uma passagem descritiva pura em um laudo pericial criminalístico, predomina:",
    "options": [
      "A estaticidade temporal, a enumeração de atributos visuais/físicos dos elementos e a presença abundante de substantivos e adjetivos qualificadores.",
      "A sucessão vertiginosa de ações dinâmicas com transcurso célere do tempo da narrativa.",
      "A argumentação dialética contraposta a teses de juristas contrários à perícia oficial.",
      "O emprego de versos rimados com métrica decassilábica em louvor aos heróis da pátria.",
      "A prescrição de penalidades disciplinares pelo regulamento do código de trânsito."
    ],
    "correctIndex": 0,
    "explanation": "O texto DESCRITIVO retrata uma cena de forma estática (como uma fotografia verbal), abundando adjetivos e termos caracterizadores, sem progressão temporal necessária.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O texto DESCRITIVO retrata uma cena de forma estática (como uma fotografia verbal), abundando adjetivos e termos caracterizadores, sem progressão temporal necessária.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_120",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Gêneros Textuais - Boletim de Ocorrência Policial (BO)",
    "question": "[Simulado PMPE AOCP - Questão 120] O Boletim de Ocorrência Policial (BOPM/BOPE) constitui gênero textual oficial da administração pública que mescla fundamentalmente as tipologias:",
    "options": [
      "Narrativa (relato fático dos fatos e ações) e Descritiva (qualificação de partes, objetos, armas e local da ocorrência).",
      "Lírica e Dramática voltadas à encenação teatral em audiência pública.",
      "Injuntiva e Publicitária com foco na captação de clientes para escritórios particulares.",
      "Dissertativa e Poética em louvor à bravura inabalável dos membros da guarnição.",
      "Expositiva e Teatral baseada em monólogos e apartes sem valor probatório."
    ],
    "correctIndex": 0,
    "explanation": "O Boletim de Ocorrência é um documento oficial essencialmente NARRATIVO (relata cronologicamente as ações ocorridas) e DESCRITIVO (descreve as partes envolvidas, lesões, estado de coisas e bens apreendidos).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O Boletim de Ocorrência é um documento oficial essencialmente NARRATIVO (relata cronologicamente as ações ocorridas) e DESCRITIVO (descreve as partes envolvidas, lesões, estado de coisas e bens apreendidos).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_121",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Metáfora",
    "question": "[Simulado PMPE AOCP - Questão 121] A metáfora consiste em uma comparação implícita, sem a presença de conectivo comparativo formal. Assinale a frase que contém metáfora:",
    "options": [
      "Aquele policial militar é um leão quando se trata de defender a ordem e a segurança dos cidadãos.",
      "Aquele policial militar lutou bravamente como um leão durante o confronto na favela.",
      "O policial militar rugiu tão intensamente quanto ruge um leão nas savanas africanas.",
      "O batalhão avançou da mesma forma que os blindados avançavam no teatro de guerra.",
      "O soldado agiu com destemor idêntico ao de um guerreiro mitológico espartano."
    ],
    "correctIndex": 0,
    "explanation": "Em 'Aquele policial militar é um leão', atribui-se diretamente o atributo de leão ao policial sem usar termo comparativo ('como', 'tal qual'). Se houvesse o conectivo ('como um leão'), seria COMPARAÇÃO/SÍMILE.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'Aquele policial militar é um leão', atribui-se diretamente o atributo de leão ao policial sem usar termo comparativo ('como', 'tal qual'). Se houvesse o conectivo ('como um leão'), seria COMPARAÇÃO/SÍMILE.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_122",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Metonímia",
    "question": "[Simulado PMPE AOCP - Questão 122] A metonímia é a substituição de uma palavra por outra com base em uma relação de contiguidade ou proximidade real (o efeito pela causa, o autor pela obra, o instrumento pelo usuário). Assinale o exemplo clássico de metonímia:",
    "options": [
      "A tropa de choque de Pernambuco precisou conter dezenas de cabeças rebeladas na manifestação.",
      "O soldado é alto como uma torre de observação militar no topo da colina.",
      "A lua prateada sorria para os sentinelas que guardavam a entrada principal da fortaleza.",
      "O silêncio ensurdecedor da madrugada no quartel foi quebrado pelo disparo acidental.",
      "O recruta chorou rios de lágrimas de felicidade ao abraçar os pais no pátio do Derby."
    ],
    "correctIndex": 0,
    "explanation": "'Cabeças' em vez de 'pessoas' ilustra a metonímia da parte pelo todo (sinédoque). Outros exemplos: ler Machado de Assis (o autor pela obra), ter bom braço (a causa pelo efeito).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Cabeças' em vez de 'pessoas' ilustra a metonímia da parte pelo todo (sinédoque). Outros exemplos: ler Machado de Assis (o autor pela obra), ter bom braço (a causa pelo efeito).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_123",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Antítese vs Paradoxo",
    "question": "[Simulado PMPE AOCP - Questão 123] Diferencia-se a antítese do paradoxo (ou oxímoro) porque a antítese aproxima ideias opostas sem absurdo lógico, ao passo que o paradoxo funde conceitos antagônicos gerando uma contradição lógica aparente. Assinale a frase que contém PARADOXO:",
    "options": [
      "O serviço policial exige conviver cotidianamente com o amor e o ódio presentes na sociedade.",
      "A morte heroica do soldado em combate representou a vida e a segurança para dezenas de reféns inocentes.",
      "O silêncio ensurdecedor daquela noite escura na floresta denunciava o perigo invisível aos nossos olhos.",
      "Entre a ordem e o caos, o policial militar posiciona-se como uma barreira inexpugnável de retidão.",
      "Os soldados enfrentam o calor escaldante do meio-dia e o frio cortante da alta madrugada no Sertão."
    ],
    "correctIndex": 2,
    "explanation": "'Silêncio ensurdecedor' é a união de duas ideias inconciliáveis e mutuamente excludentes (o silêncio, por definição, não emite som e não pode ensurdecer), configurando autêntico PARADOXO (ou oxímoro). As outras frases aproximam contrários sem anular a lógica (antítese).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'Silêncio ensurdecedor' é a união de duas ideias inconciliáveis e mutuamente excludentes (o silêncio, por definição, não emite som e não pode ensurdecer), configurando autêntico PARADOXO (ou oxímoro). As outras frases aproximam contrários sem anular a lógica (antítese).",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_124",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Eufemismo",
    "question": "[Simulado PMPE AOCP - Questão 124] O eufemismo é a figura de pensamento que visa suavizar uma expressão rude, desagradável, violenta ou chocante. Assinale a frase com eufemismo:",
    "options": [
      "O bravo sargento da PMPE partiu para o descanso eterno após décadas dedicadas com honra à segurança pública.",
      "O suspeito mentiu descaradamente durante o interrogatório perante a comissão processante.",
      "O assaltante disparou dez tiros à queima-roupa contra a vitrine da joalheria no centro comercial.",
      "A viatura colidiu com violência extrema contra o muro de arrimo da avenida de contorno viário.",
      "O efetivo trabalhou incansavelmente por setenta e duas horas ininterruptas na enchente."
    ],
    "correctIndex": 0,
    "explanation": "'Partiu para o descanso eterno' é uma suavização respeitosa e atenuadora para o fato doloroso da morte do policial, constituindo um EUFEMISMO clássico.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Partiu para o descanso eterno' é uma suavização respeitosa e atenuadora para o fato doloroso da morte do policial, constituindo um EUFEMISMO clássico.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_125",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Hipérbole",
    "question": "[Simulado PMPE AOCP - Questão 125] A hipérbole consiste no exagero intencional e enfático da realidade para ampliar o impacto expressivo do discurso. Assinale a frase que expressa hipérbole:",
    "options": [
      "O soldado já alertou o motorista da viatura mais de um milhão de vezes sobre aquele cruzamento perigoso.",
      "O capitão solicitou pontualidade britânica no início da escala de serviço operacional.",
      "Os novos cadetes marcharam sob uma chuva fina que caía mansamente sobre o campo de parada.",
      "O perito criminal examinou detalhadamente cada centímetro da cena onde o corpo foi localizado.",
      "Apenas duas viaturas foram mobilizadas para atender ao chamado de perturbação de sossego."
    ],
    "correctIndex": 0,
    "explanation": "'Mais de um milhão de vezes' é um exagero deliberado e desmedido da expressão para enfatizar a reiteração do aviso, configurando HIPÉRBOLE.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Mais de um milhão de vezes' é um exagero deliberado e desmedido da expressão para enfatizar a reiteração do aviso, configurando HIPÉRBOLE.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_126",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Ironia",
    "question": "[Simulado PMPE AOCP - Questão 126] A ironia consiste em afirmar o oposto daquilo que realmente se pensa, normalmente com intenção crítica, zombeteira ou sarcástica. Assinale a alternativa que exemplifica a ironia:",
    "options": [
      "O motorista embriagado que furou a blitz e capotou o carro demonstrou um exemplo notável de prudência e respeito às leis de trânsito.",
      "O policial militar atuou com técnica exemplar e neutralizou o agressor sem disparar um único tiro.",
      "A dedicação e o destemor dos homens do Bope merecem todas as condecorações militares do Estado.",
      "O laudo pericial apontou que o armamento estava em perfeitas condições de funcionamento mecânico.",
      "O comandante parabenizou a tropa pelo cumprimento rigoroso dos horários de patrulha."
    ],
    "correctIndex": 0,
    "explanation": "Chamar o motorista embriagado e infrator de 'exemplo notável de prudência' é dizer o exato oposto da realidade com tom de censura e sarcasmo, caracterizando a IRONIA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Chamar o motorista embriagado e infrator de 'exemplo notável de prudência' é dizer o exato oposto da realidade com tom de censura e sarcasmo, caracterizando a IRONIA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_127",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Prosopopeia (Personificação)",
    "question": "[Simulado PMPE AOCP - Questão 127] A prosopopeia ou personificação atribui sentimentos, características ou ações humanas a seres inanimados ou animais irracionais. Assinale o exemplo de personificação:",
    "options": [
      "O asfalto da rodovia ardia e gemia de cansaço sob o peso incessante dos veículos pesados e da viatura.",
      "Os soldados caminhavam exaustos após vinte horas de patrulhamento a pé na comunidade.",
      "O cachorro farejador latiu com vigor ao identificar o compartimento oculto com entorpecentes.",
      "O sol de meio-dia brilhava intensamente no céu sem nuvens de Petrolina no Vale do São Francisco.",
      "A sirene da radiopatrulha soava em tom agudo durante a perseguição policial pelas ruas."
    ],
    "correctIndex": 0,
    "explanation": "Atribuir ao 'asfalto' a capacidade de 'arder de cansaço' e 'gemer' é transferir comportamentos e sensações humanas a um ser inanimado, configurando PROSOPOPEIA ou PERSONIFICAÇÃO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Atribuir ao 'asfalto' a capacidade de 'arder de cansaço' e 'gemer' é transferir comportamentos e sensações humanas a um ser inanimado, configurando PROSOPOPEIA ou PERSONIFICAÇÃO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_128",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Homônimos e Parônimos (Mandado vs Mandato)",
    "question": "[Simulado PMPE AOCP - Questão 128] Assinale a alternativa que preenche correta e respectivamente as lacunas da frase: 'O oficial da PMPE cumpriu o _______ de prisão expedido pela juíza criminal durante o último mês do seu _______ na comissão.'",
    "options": [
      "mandado / mandato",
      "mandato / mandado",
      "mandado / mandado",
      "mandato / mandato",
      "mandado / mandato judicial"
    ],
    "correctIndex": 0,
    "explanation": "'MANDADO' (com D) = ordem judicial escrita (mandado de prisão, mandado de busca). 'MANDATO' (com T) = período ou procuração para exercer representação política ou institucional (mandato de vereador, mandato na comissão). São parônimos clássicos.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'MANDADO' (com D) = ordem judicial escrita (mandado de prisão, mandado de busca). 'MANDATO' (com T) = período ou procuração para exercer representação política ou institucional (mandato de vereador, mandato na comissão). São parônimos clássicos.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_129",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Flagrante vs Fragrante)",
    "question": "[Simulado PMPE AOCP - Questão 129] Quanto à distinção semântica entre os termos parônimos 'flagrante' e 'fragrante', assinale a frase correta:",
    "options": [
      "O criminoso foi capturado em fragrante delito no exato instante em que arrombava o cofre da agência.",
      "O policial militar efetuou a prisão em flagrante delito e sentiu o fragrante perfume da dama-da-noite no jardim.",
      "A perícia técnica constatou o estado de fragrante do homicídio após a perícia no local.",
      "Os manifestantes cometeram crime fragrante contra a ordem pública e a segurança estadual.",
      "O perfume dos buquês de flores apresentava um flagrante aroma cítrico bastante suave."
    ],
    "correctIndex": 1,
    "explanation": "'FLAGRANTE' (com L) = evidente, que arde, que ocorre no ato (prisão em flagrante). 'FRAGRANTE' (com R) = perfumado, aromático (fragrante aroma). A frase B utiliza ambos com exatidão vocabular.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'FLAGRANTE' (com L) = evidente, que arde, que ocorre no ato (prisão em flagrante). 'FRAGRANTE' (com R) = perfumado, aromático (fragrante aroma). A frase B utiliza ambos com exatidão vocabular.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_130",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Tráfego vs Tráfico)",
    "question": "[Simulado PMPE AOCP - Questão 130] Assinale a frase em que o emprego dos termos 'tráfego' e 'tráfico' atende à norma-padrão da Língua Portuguesa:",
    "options": [
      "O batalhão especializado em rodovias intensificou a fiscalização sobre o tráfego de carretas na BR-101.",
      "A equipe de inteligência da PMPE desarticulou uma perigosa quadrilha dedicada ao tráfego de entorpecentes.",
      "O tráfego de animais silvestres e armas pesadas foi duramente reprimido pela Polícia Militar.",
      "O trânsito estava caótico porque o tráfico de veículos era intenso no horário de pico na ponte.",
      "As viaturas de área controlavam o tráfico de pedestres e automóveis nas imediações do estádio."
    ],
    "correctIndex": 0,
    "explanation": "'TRÁFEGO' = movimentação de veículos, trânsito, fluxo de circulação. 'TRÁFICO' = comércio ilegal ou clandestino (tráfico de drogas, tráfico de armas). A alternativa A emprega 'tráfego de carretas' com rigor.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'TRÁFEGO' = movimentação de veículos, trânsito, fluxo de circulação. 'TRÁFICO' = comércio ilegal ou clandestino (tráfico de drogas, tráfico de armas). A alternativa A emprega 'tráfego de carretas' com rigor.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_131",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Homônimos (Cessão, Seção e Sessão)",
    "question": "[Simulado PMPE AOCP - Questão 131] Assinale a alternativa que preenche correta e respectivamente as lacunas: 'Após a longa _______ da assembleia militar, o comandante assinou o termo de _______ daquele prédio antigo para abrigar a nova _______ de inteligência do batalhão.'",
    "options": [
      "sessão / cessão / seção",
      "seção / sessão / cessão",
      "cessão / seção / sessão",
      "sessão / seção / cessão",
      "seção / cessão / sessão"
    ],
    "correctIndex": 0,
    "explanation": "'SESSÃO' (com S inicial e SS) = tempo de uma reunião, assembleia, consulta ou espetáculo. 'CESSÃO' (com C inicial e SS) = ato de ceder, doação ou transferência de posse. 'SEÇÃO' ou 'SECÇÃO' (com S inicial e Ç) = divisão, corte, departamento ou subdivisão. Logo: sessão / cessão / seção.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'SESSÃO' (com S inicial e SS) = tempo de uma reunião, assembleia, consulta ou espetáculo. 'CESSÃO' (com C inicial e SS) = ato de ceder, doação ou transferência de posse. 'SEÇÃO' ou 'SECÇÃO' (com S inicial e Ç) = divisão, corte, departamento ou subdivisão. Logo: sessão / cessão / seção.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_132",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Homônimos (Comprimento vs Cumprimento)",
    "question": "[Simulado PMPE AOCP - Questão 132] Quanto ao par de vocábulos parônimos 'comprimento' e 'cumprimento', assinale a frase grafada corretamente:",
    "options": [
      "O comandante avaliou o comprimento da pista de treinamento e exigiu o comprimento rigoroso dos prazos.",
      "O comprimento das ordens superiores é dever de todos os soldados com base no cumprimento da cerca.",
      "O soldado prestou um marcial cumprimento ao coronel e mediu o comprimento exato da corda de rapel.",
      "O cumprimento do túnel clandestino cavado pelos detentos media cerca de trinta metros lineares.",
      "A guarda militar não retribuiu ao comprimento do visitante devido a falha protocolar."
    ],
    "correctIndex": 2,
    "explanation": "'CUMPRIMENTO' (com U) = ato de cumprir (executar uma ordem) ou saudação (saudação militar). 'COMPRIMENTO' (com O) = extensão física, tamanho de algo. A frase C aplica ambos com exatidão.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'CUMPRIMENTO' (com U) = ato de cumprir (executar uma ordem) ou saudação (saudação militar). 'COMPRIMENTO' (com O) = extensão física, tamanho de algo. A frase C aplica ambos com exatidão.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_133",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Ratificar vs Retificar)",
    "question": "[Simulado PMPE AOCP - Questão 133] O verbo 'ratificar' significa confirmar ou validar; 'retificar' significa corrigir ou emendar. Assinale a frase que respeita essa acepção:",
    "options": [
      "O sargento ratificou o relatório porque continha vários erros de grafia nos nomes dos indiciados.",
      "O oficial comandante retificou perante a imprensa as informações anteriores, confirmando integralmente a versão da guarnição.",
      "Ao notar o equívoco na escala de serviço, o subtenente prontamente retificou o documento, corrigindo o nome dos plantonistas.",
      "A perícia retificou a tese de suicídio, confirmando que o disparo havia sido acidental.",
      "A autoridade judicial retificou o mandado de prisão para reafirmar a legalidade da medida cautelar."
    ],
    "correctIndex": 2,
    "explanation": "'RETIFICAR' = corrigir, consertar, emendar. 'RATIFICAR' = confirmar, comprovar, reafirmar. Ao corrigir o equívoco na escala, o subtenente RETIFICOU o documento.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'RETIFICAR' = corrigir, consertar, emendar. 'RATIFICAR' = confirmar, comprovar, reafirmar. Ao corrigir o equívoco na escala, o subtenente RETIFICOU o documento.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_134",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Eminente vs Iminente)",
    "question": "[Simulado PMPE AOCP - Questão 134] Assinale a alternativa correta quanto ao emprego de 'eminente' e 'iminente':",
    "options": [
      "A tropa do Bope agiu rapidamente porque os reféns estavam sob perigo eminente de execução sumária.",
      "O eminente jurista foi convidado para ministrar a aula inaugural de direito constitucional na Academia da PMPE.",
      "A tempestade no Agreste causava risco eminente de deslizamento de terra nas encostas desprotegidas.",
      "O iminente general recebeu a mais alta honraria concedida pelas Forças Armadas brasileiras.",
      "Diante da ameaça eminente de desabamento da ponte, o Corpo de Bombeiros isolou o tráfego."
    ],
    "correctIndex": 1,
    "explanation": "'EMINENTE' (com E) = ilustre, notável, elevado, de alta categoria (eminente jurista). 'IMINENTE' (com I) = prestes a acontecer no tempo imediato (risco iminente, perigo iminente).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'EMINENTE' (com E) = ilustre, notável, elevado, de alta categoria (eminente jurista). 'IMINENTE' (com I) = prestes a acontecer no tempo imediato (risco iminente, perigo iminente).",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_135",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Deferir vs Diferir)",
    "question": "[Simulado PMPE AOCP - Questão 135] O termo 'deferir' significa atender, conceder ou despachar favoravelmente; 'diferir' significa adiar, divergir ou ser diferente. Assinale a frase que atende à norma:",
    "options": [
      "O comandante-geral deferiu o pedido de licença-prêmio apresentado pelo subtenente com base no tempo de serviço.",
      "O juiz militar diferiu o habeas corpus e determinou a soltura imediata do cabo preso disciplinarmente.",
      "Os pareceres técnicos deferiam profundamente quanto à causa da pane elétrica no motor da embarcação.",
      "A diretoria de pessoal diferiu todas as solicitações de promoção por merecimento requeridas no prazo.",
      "A capitã diferiu do coronel quanto ao local de instalação do posto de comando da operação."
    ],
    "correctIndex": 0,
    "explanation": "'DEFERIR' = conceder, aprovar favoravelmente ('deferiu o pedido de licença'). 'DIFERIR' = adiar ou discordar/divergir. A frase A expressa o deferimento de uma solicitação.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'DEFERIR' = conceder, aprovar favoravelmente ('deferiu o pedido de licença'). 'DIFERIR' = adiar ou discordar/divergir. A frase A expressa o deferimento de uma solicitação.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_136",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Polissemia e Ambiguidade",
    "question": "[Simulado PMPE AOCP - Questão 136] A ambiguidade ocorre quando um enunciado gera duplo sentido indesejado na interpretação gramatical. Assinale a frase que contém ambiguidade estrutural:",
    "options": [
      "O policial militar prendeu o suspeito em sua casa no centro histórico de Olinda.",
      "O policial militar prendeu o suspeito na residência deste último no centro histórico de Olinda.",
      "Na residência do suspeito em Olinda, o policial militar efetuou a prisão em flagrante.",
      "O policial militar dirigiu-se à casa do suspeito em Olinda e deu-lhe voz de prisão.",
      "Após obter o mandado judicial, o policial militar prendeu o foragido na moradia do próprio investigado."
    ],
    "correctIndex": 0,
    "explanation": "Em 'prendeu o suspeito em SUA casa', o pronome possessivo de terceira pessoa 'sua' cria ambiguidade sintática: a casa era do policial militar ou a casa era do suspeito? As outras frases desfizeram a ambiguidade com clareza.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'prendeu o suspeito em SUA casa', o pronome possessivo de terceira pessoa 'sua' cria ambiguidade sintática: a casa era do policial militar ou a casa era do suspeito? As outras frases desfizeram a ambiguidade com clareza.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_137",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Denotação vs Conotação",
    "question": "[Simulado PMPE AOCP - Questão 137] A linguagem denotativa é aquela empregada em sentido literal, exato e dicionarizado, comum em textos legais e notícias jornalísticas. Assinale a frase com sentido estritamente DENOTATIVO:",
    "options": [
      "O soldado é uma rocha inabalável diante das adversidades impostas pelo serviço militar.",
      "A guarnição do 1º BPM apreendeu duas pistolas calibre 9mm durante a revista veicular.",
      "O tempo voava célere enquanto os cadetes cumpriam a prova escrita de língua portuguesa.",
      "A corrupção é uma praga venenosa que corrói os alicerces morais da sociedade contemporânea.",
      "O coração do jovem policial batia com o fogo sagrado do idealismo cívico e da coragem."
    ],
    "correctIndex": 1,
    "explanation": "A alternativa B expressa um fato objetivo em linguagem estritamente literal e dicionarizada (DENOTAÇÃO), sem qualquer figura de linguagem metafórica. As demais contêm sentidos conotativos figurados ('é uma rocha', 'tempo voava', 'praga venenosa', 'fogo sagrado').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. A alternativa B expressa um fato objetivo em linguagem estritamente literal e dicionarizada (DENOTAÇÃO), sem qualquer figura de linguagem metafórica. As demais contêm sentidos conotativos figurados ('é uma rocha', 'tempo voava', 'praga venenosa', 'fogo sagrado').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_138",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Sinonímia e Antonímia",
    "question": "[Simulado PMPE AOCP - Questão 138] No vocabulário da segurança pública, o vocábulo 'OSTENSIVO' (como em 'policiamento ostensivo') tem como antônimo direto e próprio a palavra:",
    "options": [
      "Sigiloso / Velado / Encoberto.",
      "Público e manifesto.",
      "Agressivo e contundente.",
      "Armado e motorizado.",
      "Intermitente e veloz."
    ],
    "correctIndex": 0,
    "explanation": "O policiamento ostensivo é aquele visível, fardado, manifesto e facilmente identificado pela população. O seu oposto/antônimo direto é o policiamento velado, disfarçado, sigiloso ou encoberto (feito à paisana ou pelo setor de inteligência).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O policiamento ostensivo é aquele visível, fardado, manifesto e facilmente identificado pela população. O seu oposto/antônimo direto é o policiamento velado, disfarçado, sigiloso ou encoberto (feito à paisana ou pelo setor de inteligência).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_139",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Hiperonímia e Hiponímia",
    "question": "[Simulado PMPE AOCP - Questão 139] Na relação de sentido entre hiperônimos (termos de sentido geral/abrangente) e hipônimos (termos de sentido específico/restrito), assinale a correlação em que o primeiro termo é HIPERÔNIMO do segundo:",
    "options": [
      "Arma de fogo / Fuzil calibre 7,62mm.",
      "Revólver calibre 38 / Armamento bélico.",
      "Pistola semiautomática / Material bélico de infantaria.",
      "Viatura de radiopatrulha / Veículo automotor de tração mecânica.",
      "Colete balístico / Equipamento de proteção individual."
    ],
    "correctIndex": 0,
    "explanation": "Hiperônimo é a palavra genérica e inclusiva (gênero); hipônimo é a palavra específica pertencente a essa classe (espécie). 'Arma de fogo' é hiperônimo em relação a 'fuzil' (hipônimo). Em B, C, D e E, a ordem está invertida.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Hiperônimo é a palavra genérica e inclusiva (gênero); hipônimo é a palavra específica pertencente a essa classe (espécie). 'Arma de fogo' é hiperônimo em relação a 'fuzil' (hipônimo). Em B, C, D e E, a ordem está invertida.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_140",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Descriminar vs Discriminar)",
    "question": "[Simulado PMPE AOCP - Questão 140] O termo 'descriminar' significa absolver de crime ou descriminalizar; 'discriminar' significa distinguir, separar ou praticar preconceito. Assinale a frase redigida corretamente:",
    "options": [
      "O Código de Trânsito Brasileiro busca discriminar os condutores embriagados de sanções severas.",
      "A lei complementar descriminou expressamente os deveres dos oficiais e das praças do Estado.",
      "O projeto legislativo pretende descriminar determinadas condutas antes punidas como contravenção penal.",
      "É dever de todo policial militar descriminar os cidadãos abordados com base na sua etnia ou credo.",
      "O laudo do perito descriminou item por item todas as peças recolhidas no local do sinistro."
    ],
    "correctIndex": 2,
    "explanation": "'DESCRIMINAR' (com E) = tirar o crime, absolver de crime, descriminalizar. 'DISCRIMINAR' (com I) = distinguir, separar, diferenciar ou segregar. A frase C expressa com perfeição 'descriminar condutas' (retirar o caráter criminoso).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'DESCRIMINAR' (com E) = tirar o crime, absolver de crime, descriminalizar. 'DISCRIMINAR' (com I) = distinguir, separar, diferenciar ou segregar. A frase C expressa com perfeição 'descriminar condutas' (retirar o caráter criminoso).",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_141",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Incipiente vs Insipiente)",
    "question": "[Simulado PMPE AOCP - Questão 141] Quanto ao par parônimo 'incipiente' e 'insipiente', assinale a frase com o emprego correto:",
    "options": [
      "O plano de segurança urbana ainda está em fase incipiente, dando seus primeiros passos operacionais.",
      "O experiente coronel chamou o sargento de incipiente para elogiar sua profunda sabedoria jurídica.",
      "A corporação não aceitará a gestão de líderes incipientes que já governaram por décadas o batalhão.",
      "O treinamento militar de defesa pessoal é insipiente quando abrange técnicas de vanguarda mundial.",
      "Trata-se de uma tese insipiente criada por renomados mestres da universidade estadual."
    ],
    "correctIndex": 0,
    "explanation": "'INCIPIENTE' (com C) = principiante, inicial, que está no começo (fase incipiente). 'INSIPIENTE' (com S) = ignorante, insensato, tolo, que não tem sapiência. A frase A ilustra perfeitamente 'em fase incipiente'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'INCIPIENTE' (com C) = principiante, inicial, que está no começo (fase incipiente). 'INSIPIENTE' (com S) = ignorante, insensato, tolo, que não tem sapiência. A frase A ilustra perfeitamente 'em fase incipiente'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_142",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Homônimos (Cosido vs Cozido)",
    "question": "[Simulado PMPE AOCP - Questão 142] A palavra 'cosido' significa costurado; 'cozido' significa preparado pelo cozimento com calor. Assinale a opção correta:",
    "options": [
      "O uniforme de gala rasgado na marcha foi cosido com perfeição pela costureira do quartel.",
      "O fardamento militar molhado na chuva foi cozido pela equipe da lavanderia para enxugar.",
      "O rancho dos soldados ofereceu feijão cosido em panela de pressão com carnes nobres.",
      "As divisas de sargento foram cozidas na manga da jaqueta camuflada pelo recruta.",
      "O coldre de couro tático foi cozido com linha reforçada de poliamida industrial."
    ],
    "correctIndex": 0,
    "explanation": "'COSIDO' (com S) = costurado (linha e agulha). 'COZIDO' (com Z) = cozinhado pelo fogo/calor. O fardamento foi 'cosido' (costurado) com perfeição.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'COSIDO' (com S) = costurado (linha e agulha). 'COZIDO' (com Z) = cozinhado pelo fogo/calor. O fardamento foi 'cosido' (costurado) com perfeição.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_143",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Infringir vs Infligir)",
    "question": "[Simulado PMPE AOCP - Questão 143] O verbo 'infringir' significa desobedecer, transgredir ou violar uma norma; 'infligir' significa aplicar pena, castigo ou sofrimento. Assinale a frase correta:",
    "options": [
      "O condutor que infligir as normas do Código de Trânsito Brasileiro comete infração punível com multa.",
      "O juiz da vara militar infringiu pena privativa de liberdade de cinco anos ao réu condenado.",
      "O militar que infringir o regulamento disciplinar da corporação estará sujeito a sanções administrativas.",
      "As agressões físicas infringidas aos presos configuram o crime hediondo de tortura qualificada.",
      "O comandante infligiu as regras do edital e dispensou os candidatos de apresentarem certidões."
    ],
    "correctIndex": 2,
    "explanation": "'INFRINGIR' = transgredir, desrespeitar, quebrar uma regra ('infringir o regulamento'). 'INFLIGIR' = aplicar uma penalidade, castigo ou dano ('infligir pena', 'infligir sofrimento'). A frase C está impecável.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'INFRINGIR' = transgredir, desrespeitar, quebrar uma regra ('infringir o regulamento'). 'INFLIGIR' = aplicar uma penalidade, castigo ou dano ('infligir pena', 'infligir sofrimento'). A frase C está impecável.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_144",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Pleito vs Preito)",
    "question": "[Simulado PMPE AOCP - Questão 144] No vocabulário formal, o termo 'pleito' refere-se a eleição, disputa judicial ou contenda; 'preito' refere-se a homenagem, reverência ou respeito. Assinale a alternativa correta:",
    "options": [
      "A tropa militar rendeu seu preito de saudade e admiração aos heróis tombados no estrito dever cívico.",
      "A PMPE garantiu a segurança de todos os cidadãos durante o preito eleitoral realizado em outubro.",
      "O candidato impugnou o preito municipal alegando compra indevida de votos pela oposição.",
      "O governador fez um pleito silencioso em reverência ao monumento histórico de Duarte Coelho.",
      "Os advogados apresentaram o preito perante a corte militar para anular a condenação do cabo."
    ],
    "correctIndex": 0,
    "explanation": "'PREITO' = homenagem, tributo, reverência ('rendeu seu preito de saudade'). 'PLEITO' = eleição, votação, disputa judicial ('pleito eleitoral'). A frase A utiliza 'preito' com rigor semântico.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'PREITO' = homenagem, tributo, reverência ('rendeu seu preito de saudade'). 'PLEITO' = eleição, votação, disputa judicial ('pleito eleitoral'). A frase A utiliza 'preito' com rigor semântico.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_145",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Homônimos (Tachar vs Taxar)",
    "question": "[Simulado PMPE AOCP - Questão 145] O verbo 'tachar' significa rotular, acoimar ou censurar (com defeito); 'taxar' significa tributar ou fixar taxa/preço. Assinale a frase grafada corretamente:",
    "options": [
      "A oposição tentou taxar o plano de segurança estadual de autoritário e ineficaz.",
      "O governo estadual decidiu tachar em alíquota especial as armas e munições esportivas.",
      "Ninguém pode tachar a conduta daquele nobre sargento veterano de negligente ou omissa.",
      "A alfândega do porto de Suape taxou o oficial como sendo excessivamente rigoroso nas vistorias.",
      "O delegado foi taxado de incompetente pelo promotor após a conclusão minuciosa do inquérito."
    ],
    "correctIndex": 2,
    "explanation": "'TACHAR' (com CH) = qualificar negativamente, pôr mancha/defeito ('tachar de negligente'). 'TAXAR' (com X) = cobrar imposto, lançar taxa ou tributo ('taxar as mercadorias'). A frase C é a única correta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Correta. 'TACHAR' (com CH) = qualificar negativamente, pôr mancha/defeito ('tachar de negligente'). 'TAXAR' (com X) = cobrar imposto, lançar taxa ou tributo ('taxar as mercadorias'). A frase C é a única correta.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_146",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Anáfora (Figura Sintática/Estilística)",
    "question": "[Simulado PMPE AOCP - Questão 146] A anáfora, como recurso estilístico literário, consiste na repetição proposital da mesma palavra ou expressão no início de versos ou frases sucessivas. Assinale o exemplo de anáfora:",
    "options": [
      "Honra aos que patrulham dia e noite. Honra aos que arriscam a vida pelos cidadãos. Honra aos eternos combatentes da PMPE.",
      "O vento sussurrava segredos nos ouvidos atentos dos soldados na guarita.",
      "As águas límpidas do rio Capibaribe refletiam a imagem dos arcos centenários das pontes.",
      "O relógio da catedral bateu doze badaladas tristes que ecoaram pela praça deserta.",
      "A ordem pública foi preservada porque o efetivo policial manteve a calma diante das ofensas verbais."
    ],
    "correctIndex": 0,
    "explanation": "A repetição enfática da palavra 'Honra' no início de três períodos consecutivos ('Honra aos... Honra aos... Honra aos...') constitui um exemplo evidente de ANÁFORA estilística.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A repetição enfática da palavra 'Honra' no início de três períodos consecutivos ('Honra aos... Honra aos... Honra aos...') constitui um exemplo evidente de ANÁFORA estilística.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_147",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Pleonasmo Literário vs Pleonasmo Vicioso",
    "question": "[Simulado PMPE AOCP - Questão 147] Diferencia-se o pleonasmo literário (figura de estilo para dar expressividade) do pleonasmo vicioso (vício de linguagem redundante que deve ser evitado na norma culta). Assinale a opção que contém um PLEONASMO VICIOSO:",
    "options": [
      "A viatura precisou recuar para trás para evitar a colisão com o caminhão desgovernado na ladeira.",
      "Aos heróis de Tejucupapo, devemos a eles a perpétua reverência de nossa gente.",
      "Vi com meus próprios olhos a bravura daquele jovem tenente durante o incêndio na favela.",
      "Chorou um choro silencioso e amargo ao receber a notícia do falecimento do colega de farda.",
      "Sonhei um sonho sublime em que a paz imperava soberana em todas as cidades pernambucanas."
    ],
    "correctIndex": 0,
    "explanation": "'Recuar para trás' é pleonasmo vicioso redundante (quem recua, só pode ir para trás). Outros pleonasmos viciosos: subir para cima, descer para baixo, entrar para dentro, elo de ligação, certeza absoluta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Recuar para trás' é pleonasmo vicioso redundante (quem recua, só pode ir para trás). Outros pleonasmos viciosos: subir para cima, descer para baixo, entrar para dentro, elo de ligação, certeza absoluta.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_148",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Sobrescritar vs Subscrever)",
    "question": "[Simulado PMPE AOCP - Questão 148] Assinale a opção correta quanto ao significado dos vocábulos 'sobrescritar' e 'subscrever':",
    "options": [
      "'Sobrescritar' significa endereçar um envelope; 'subscrever' significa assinar embaixo, aprovar ou concordar com um documento.",
      "'Sobrescritar' significa anular um mandado judicial; 'subscrever' significa rasgar um termo de posse.",
      "Ambos são termos sinônimos que indicam a destruição legal de armas apreendidas em flagrante.",
      "'Sobrescritar' significa assinar um decreto e 'subscrever' significa entregá-lo aos carteiros.",
      "'Sobrescritar' é preposição arcaica e 'subscrever' é advérbio militar de continência."
    ],
    "correctIndex": 0,
    "explanation": "'SOBRESCRITAR' = pôr sobrescrito (endereço/destinatário) na parte externa de uma carta ou processo. 'SUBSCREVER' = escrever ou assinar embaixo, concordar com o teor de um documento ('subscrito pelo Comandante').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'SOBRESCRITAR' = pôr sobrescrito (endereço/destinatário) na parte externa de uma carta ou processo. 'SUBSCREVER' = escrever ou assinar embaixo, concordar com o teor de um documento ('subscrito pelo Comandante').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_149",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Parônimos (Desapercebido vs Despercebido)",
    "question": "[Simulado PMPE AOCP - Questão 149] A palavra 'desapercebido' significa desprovido, desprevenido, desprovido de recursos; 'despercebido' significa que não foi notado ou que passou sem atenção. Assinale a frase correta:",
    "options": [
      "A presença do homem armado passou totalmente despercebida pelos seguranças da agência bancária.",
      "A equipe tática foi surpreendida pela emboscada porque estava totalmente despercebida de munições.",
      "O suspeito tentou atravessar a barreira policial sem ser desapercebido pelos agentes de plantão.",
      "O cabo não percebeu a aproximação do veículo porque seus olhos estavam desapercebidos.",
      "A falta de coletes balísticos deixou o pelotão de Choque despercebido para o confronto na favela."
    ],
    "correctIndex": 0,
    "explanation": "'DESPERCEBIDO' = que não se viu, não notado ('passou despercebida'). 'DESAPERCEBIDO' = desprovido, desacautelado, sem preparo ou sem mantimentos/recursos. A frase A é a única correta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'DESPERCEBIDO' = que não se viu, não notado ('passou despercebida'). 'DESAPERCEBIDO' = desprovido, desacautelado, sem preparo ou sem mantimentos/recursos. A frase A é a única correta.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_150",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Figuras de Linguagem - Sinestesia",
    "question": "[Simulado PMPE AOCP - Questão 150] A sinestesia é a figura de linguagem que combina, em uma única expressão poética ou sensorial, impressões de sentidos corporais distintos (visão, audição, tato, paladar, olfato). Assinale a frase com sinestesia:",
    "options": [
      "A sentinela ouviu um grito áspero e cortante que rasgou a escuridão silenciosa do pátio.",
      "O barulho do disparo da pistola foi muito alto e assustou os transeuntes na avenida.",
      "A luz do farol da viatura iluminou os rostos apreensivos dos suspeitos na abordagem.",
      "O sabor amargo do café mantinha os policiais despertos durante a vigilância da madrugada.",
      "O vento frio soprava gelado nas montanhas de Triunfo durante a marcha de instrução."
    ],
    "correctIndex": 0,
    "explanation": "Em 'grito áspero e cortante', fundem-se a audição ('grito') e o tato ('áspero', 'cortante'), caracterizando a SINESTESIA (cruzamento sensorial de canais perceptivos distintos).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'grito áspero e cortante', fundem-se a audição ('grito') e o tato ('áspero', 'cortante'), caracterizando a SINESTESIA (cruzamento sensorial de canais perceptivos distintos).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_151",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Proparoxítonas",
    "question": "[Simulado PMPE AOCP - Questão 151] De acordo com a norma ortográfica vigente, a regra que determina a acentuação gráfica de todas as palavras proparoxítonas é absoluta. Assinale a alternativa em que TODAS as palavras são acentuadas por serem proparoxítonas:",
    "options": [
      "Bélico, tático, esquadrão, código.",
      "Estratégico, hierárquico, perímetro, cívico.",
      "Pernambuco, herói, caráter, cipó.",
      "Exército, capitão, armamento, viatura.",
      "Pistola, revólver, helicóptero, fuzil."
    ],
    "correctIndex": 1,
    "explanation": "Em 'Es-tra-té-gi-co', 'Hie-rár-qui-co', 'Pe-rí-me-tro' e 'Cí-vi-co', todas têm a antepenúltima sílaba tônica, enquadrando-se na regra inflexível: TODAS as proparoxítonas são acentuadas graficamente.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em 'Es-tra-té-gi-co', 'Hie-rár-qui-co', 'Pe-rí-me-tro' e 'Cí-vi-co', todas têm a antepenúltima sílaba tônica, enquadrando-se na regra inflexível: TODAS as proparoxítonas são acentuadas graficamente.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_152",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Oxítonas",
    "question": "[Simulado PMPE AOCP - Questão 152] Acentuam-se as palavras oxítonas terminadas em -a(s), -e(s), -o(s), -em e -ens. Assinale o grupo de vocábulos que recebem acento gráfico com base nessa exata regra:",
    "options": [
      "Crachá, pajé, cipó, armazém, parabéns.",
      "Saúde, juíza, baú, saída, carnaúba.",
      "Lápis, tórax, bíceps, júri, cadáver.",
      "Árvore, lâmpada, pássaro, médico, tático.",
      "Ideia, jiboia, heroico, plateia, paranoia."
    ],
    "correctIndex": 0,
    "explanation": "'Cra-chá' (-a), 'pa-jé' (-e), 'ci-pó' (-o), 'ar-ma-zém' (-em) e 'pa-ra-béns' (-ens) são todas palavras oxítonas acentuadas pelas terminações clássicas do padrão ortográfico.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Cra-chá' (-a), 'pa-jé' (-e), 'ci-pó' (-o), 'ar-ma-zém' (-em) e 'pa-ra-béns' (-ens) são todas palavras oxítonas acentuadas pelas terminações clássicas do padrão ortográfico.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_153",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Paroxítonas Terminadas em Ditongo",
    "question": "[Simulado PMPE AOCP - Questão 153] Acentuam-se as palavras paroxítonas terminadas em ditongo oral crescente ou decrescente, seguido ou não de 's'. Assinale o grupo de palavras que atende a essa regra:",
    "options": [
      "Polícia, glória, pátria, relatório, estratégia.",
      "Caráter, revólver, açúcar, mártir, éter.",
      "Café, maracujá, rapé, sofás, jacaré.",
      "Bons, trens, parabéns, desdéns, vinténs.",
      "Ananás, rapazes, cortês, rapaz, capaz."
    ],
    "correctIndex": 0,
    "explanation": "'Po-lí-cia', 'gló-ria', 'pá-tria', 're-la-tó-rio' e 'es-tra-té-gia' são palavras paroxítonas terminadas em ditongo crescente, regra extremamente explorada pelo Instituto AOCP em provas policiais.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Po-lí-cia', 'gló-ria', 'pá-tria', 're-la-tó-rio' e 'es-tra-té-gia' são palavras paroxítonas terminadas em ditongo crescente, regra extremamente explorada pelo Instituto AOCP em provas policiais.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_154",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Regra dos Hiatos 'I' e 'U'",
    "question": "[Simulado PMPE AOCP - Questão 154] Acentuam-se as letras 'i' e 'u' tônicas quando formam hiato com a vogal anterior, sozinhas na sílaba ou com 's', desde que não seguidas de 'nh'. Assinale a alternativa cujas palavras seguem essa regra:",
    "options": [
      "Saúde, juízes, baú, cafeína, egoísmo.",
      "Rainha, tainha, campainha, moinho, ladainha.",
      "Herói, troféu, chapéu, pastéis, anzóis.",
      "Item, polens, hifens, jovens, nuvens.",
      "Fácil, útil, amável, fóssil, dócil."
    ],
    "correctIndex": 0,
    "explanation": "'Sa-ú-de', 'ju-í-zes', 'ba-ú', 'ca-fe-í-na' e 'e-go-ís-mo' trazem 'i' ou 'u' tônicos formando hiato com a vogal precedente, sem 'nh' seguinte, justificando o acento gráfico.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Sa-ú-de', 'ju-í-zes', 'ba-ú', 'ca-fe-í-na' e 'e-go-ís-mo' trazem 'i' ou 'u' tônicos formando hiato com a vogal precedente, sem 'nh' seguinte, justificando o acento gráfico.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_155",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Novo Acordo: Ditongos Abertos 'ÉI' e 'ÓI' em Paroxítonas",
    "question": "[Simulado PMPE AOCP - Questão 155] Com a vigência do Acordo Ortográfico de 1990, os ditongos abertos 'éi' e 'ói' perderam o acento gráfico nas palavras PAROXÍTONAS, mantendo-se nas oxítonas e monossílabos. Assinale a opção que reflete corretamente essa mudança:",
    "options": [
      "Ideia, assembleia, heroico e jiboia não recebem mais acento gráfico.",
      "Idéia, assembléia, heróico e jibóia continuam acentuadas na norma culta.",
      "Herói, troféu e constrói perderam o acento por serem palavras de uso popular.",
      "A palavra céu perdeu o acento gráfico por ser monossílabo átono.",
      "Paranoia e plateia continuam acentuadas devido ao ditongo decrescente fechado."
    ],
    "correctIndex": 0,
    "explanation": "O Acordo Ortográfico aboliu expressamente o acento dos ditongos abertos 'éi' e 'ói' nas palavras PAROXÍTONAS: 'ideia', 'assembleia', 'heroico', 'jiboia', 'plateia', 'paranoia'. Nas oxítonas e monossílabos tônicos, o acento PERMANECE: 'herói', 'troféu', 'pastéis', 'céu'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O Acordo Ortográfico aboliu expressamente o acento dos ditongos abertos 'éi' e 'ói' nas palavras PAROXÍTONAS: 'ideia', 'assembleia', 'heroico', 'jiboia', 'plateia', 'paranoia'. Nas oxítonas e monossílabos tônicos, o acento PERMANECE: 'herói', 'troféu', 'pastéis', 'céu'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_156",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Novo Acordo: Hiato com Ditongo Precedente em Paroxítonas",
    "question": "[Simulado PMPE AOCP - Questão 156] Pelo Novo Acordo Ortográfico, as palavras paroxítonas que possuem 'i' ou 'u' tônicos precedidos de ditongo decrescente perderam o acento. Assinale o exemplo que ilustra essa supressão:",
    "options": [
      "Feiura e baiuca (sem acento gráfico).",
      "Feiúra e baiúca (com acento circunflexo).",
      "Piauí e teiú (perderam o acento por serem oxítonas).",
      "Saída e faísca (perderam o acento por virem após ditongo).",
      "Guaíra e tuiuiú (perderam o acento nas vogais duplicadas)."
    ],
    "correctIndex": 0,
    "explanation": "Nas palavras paroxítonas com 'i' ou 'u' tônico precedido de ditongo (como em 'fei-u-ra' e 'bai-u-ca'), o acento agudo foi SUPRIMIDO. Atenção: se a palavra for OXÍTONA, o acento permanece (ex.: 'Piauí', 'teiú').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Nas palavras paroxítonas com 'i' ou 'u' tônico precedido de ditongo (como em 'fei-u-ra' e 'bai-u-ca'), o acento agudo foi SUPRIMIDO. Atenção: se a palavra for OXÍTONA, o acento permanece (ex.: 'Piauí', 'teiú').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_157",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Acento Diferencial em PÔDE e PÔR",
    "question": "[Simulado PMPE AOCP - Questão 157] O Novo Acordo manteve o acento circunflexo diferencial em 'pôde' (pretérito perfeito do indicativo) para distinguir de 'pode' (presente do indicativo) e em 'pôr' (verbo) para distinguir de 'por' (preposição). Assinale a frase redigida corretamente:",
    "options": [
      "Ontem o policial não pôde comparecer à instrução de tiro, mas hoje ele pode apresentar a justificativa médica.",
      "Ontem o policial não pode comparecer à instrução de tiro, mas hoje ele pôde apresentar a justificativa médica.",
      "O soldado vai por o fardamento tático para pôr ordem no trânsito engarrafado.",
      "Ninguém pôde prever o que o futuro pode nos trazer durante o plantão.",
      "Ele não pode agir no passado com bravura porque o comandante não o autorizou."
    ],
    "correctIndex": 0,
    "explanation": "'PÔDE' (com acento) é pretérito perfeito (ontem não pôde). 'PODE' (sem acento) é presente do indicativo (hoje ele pode). A frase A aplica a distinção cronológica e gráfica com perfeição.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'PÔDE' (com acento) é pretérito perfeito (ontem não pôde). 'PODE' (sem acento) é presente do indicativo (hoje ele pode). A frase A aplica a distinção cronológica e gráfica com perfeição.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_158",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Acento Diferencial em TÊM e VÊM (Plural)",
    "question": "[Simulado PMPE AOCP - Questão 158] Os verbos 'ter' e 'vir' recebem acento circunflexo na 3ª pessoa do plural do presente do indicativo ('eles têm', 'eles vêm'). Seus derivados recebem acento agudo no singular e circunflexo no plural. Assinale a frase correta:",
    "options": [
      "Os policiais militares tem demonstrado extrema lealdade aos deveres constitucionais.",
      "O batalhão militar mantém a ordem pública, enquanto os destacamentos mantêm a vigilância nas fronteiras.",
      "Todos os cidadãos vem à praça acompanhar o desfile cívico militar de 7 de setembro.",
      "Aquele oficial detêm o comando das tropas especiais no litoral e no sertão.",
      "Os novos recrutas provem de diversas cidades do interior de Pernambuco."
    ],
    "correctIndex": 1,
    "explanation": "Regra dos derivados de ter/vir: singular com agudo ('ele mantém', 'ele intervém') e plural com circunflexo ('eles mantêm', 'eles intervêm'). Em 'O batalhão mantém... os destacamentos mantêm', a correlação de singular e plural está perfeita.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Regra dos derivados de ter/vir: singular com agudo ('ele mantém', 'ele intervém') e plural com circunflexo ('eles mantêm', 'eles intervêm'). Em 'O batalhão mantém... os destacamentos mantêm', a correlação de singular e plural está perfeita.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_159",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Fim do Acento no Duplo 'O' e Duplo 'E'",
    "question": "[Simulado PMPE AOCP - Questão 159] O Acordo Ortográfico aboliu definitivamente o acento circunflexo nas formas verbais com 'êe' (crer, dar, ler, ver) e palavras com 'ôo'. Assinale a alternativa grafada em perfeita harmonia com o texto legal:",
    "options": [
      "Eles leem as diretrizes táticas, creem na missão, veem os perigos do voo noturno e deem todo o apoio à equipe.",
      "Eles lêem as diretrizes táticas, crêem na missão, vêem os perigos do vôo noturno e dêem todo o apoio à equipe.",
      "Eles leem os relatórios mas crêem que os vôos militares foram cancelados pela chuva.",
      "O vôo da aeronave do grupamento tático foi autorizado após os mecânicos darem o laudo.",
      "Os soldados lêem com atenção a ordem do dia assinada pelo comandante do quartel."
    ],
    "correctIndex": 0,
    "explanation": "Caíram os acentos nos hiatos 'oo' (voo, enjoo, perdoo, abençoo) e 'ee' (leem, deem, veem, creem). A alternativa A não possui nenhum acento indevido nessas estruturas duplicadas.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Caíram os acentos nos hiatos 'oo' (voo, enjoo, perdoo, abençoo) e 'ee' (leem, deem, veem, creem). A alternativa A não possui nenhum acento indevido nessas estruturas duplicadas.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_160",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Monossílabos Tônicos",
    "question": "[Simulado PMPE AOCP - Questão 160] Acentuam-se os monossílabos tônicos terminados em -a(s), -e(s) e -o(s). Assinale o grupo que contém apenas monossílabos tônicos acentuados por essa regra:",
    "options": [
      "Pá, pés, pó, lá, crê.",
      "Ruim, itens, rubrica, avaro, pudico.",
      "Aqui, ali, caju, tatu, urubu.",
      "Balança, revólver, fuzil, bala, munição.",
      "Vez, sol, mar, luz, trem."
    ],
    "correctIndex": 0,
    "explanation": "'Pá', 'pés', 'pó', 'lá' e 'crê' são todos monossílabos tônicos terminados nas vogais 'a', 'e', 'o' seguidas ou não de 's', acentuados pela regra própria dos monossílabos tônicos.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Pá', 'pés', 'pó', 'lá' e 'crê' são todos monossílabos tônicos terminados nas vogais 'a', 'e', 'o' seguidas ou não de 's', acentuados pela regra própria dos monossílabos tônicos.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_161",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Processos de Formação: Derivação Parassintética",
    "question": "[Simulado PMPE AOCP - Questão 161] A derivação parassintética ocorre quando se adicionam simultaneamente um prefixo e um sufixo ao radical, de modo que a palavra não existe sem um dos dois afixos. Assinale a palavra formada por derivação parassintética:",
    "options": [
      "Envelhecer (em + velh + ecer).",
      "Deslealdade (des + leal + dade).",
      "Infelizmente (in + feliz + mente).",
      "Reaproximação (re + aproximação).",
      "Desvalorização (des + valorização)."
    ],
    "correctIndex": 0,
    "explanation": "Em 'envelhecer' (en- + velh- + -ecer), o prefixo e o sufixo foram anexados SIMULTANEAMENTE: não existe 'envelho' nem 'velhecer'. Em 'deslealdade' e 'infelizmente', a palavra existe com apenas um dos afixos ('lealdade', 'desleal', 'felizmente', 'infeliz'), sendo derivação prefixal e sufixal.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'envelhecer' (en- + velh- + -ecer), o prefixo e o sufixo foram anexados SIMULTANEAMENTE: não existe 'envelho' nem 'velhecer'. Em 'deslealdade' e 'infelizmente', a palavra existe com apenas um dos afixos ('lealdade', 'desleal', 'felizmente', 'infeliz'), sendo derivação prefixal e sufixal.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_162",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Processos de Formação: Derivação Regressiva",
    "question": "[Simulado PMPE AOCP - Questão 162] A derivação regressiva (ou deverbal) forma substantivos abstratos a partir de verbos pela redução da terminação verbal e acréscimo das vogais temáticas -a, -o, -e. Assinale a palavra formada por derivação regressiva:",
    "options": [
      "O resgate (do verbo resgatar).",
      "O combatente (do verbo combater).",
      "O armamento (do substantivo arma).",
      "A viatura (do termo via).",
      "A valentia (do adjetivo valente)."
    ],
    "correctIndex": 0,
    "explanation": "'O resgate' é substantivo abstrato formado a partir do verbo 'resgatar' mediante redução da terminação verbal e fixação da vogal 'e' (derivação regressiva ou deverbal). Outros exemplos: o ataque (atacar), a busca (buscar), a caça (caçar).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'O resgate' é substantivo abstrato formado a partir do verbo 'resgatar' mediante redução da terminação verbal e fixação da vogal 'e' (derivação regressiva ou deverbal). Outros exemplos: o ataque (atacar), a busca (buscar), a caça (caçar).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_163",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Processos de Formação: Derivação Imprópria",
    "question": "[Simulado PMPE AOCP - Questão 163] A derivação imprópria (ou conversão) ocorre quando uma palavra muda de classe gramatical sem sofrer qualquer alteração na sua forma gráfica ou fonética. Assinale a frase que exemplifica a derivação imprópria:",
    "options": [
      "O não dito com firmeza e autoridade pelo oficial evitou que o motim se alastrasse.",
      "O policial militar agiu com muita firmeza e rapidez na abordagem veicular.",
      "A tropa especial marchou sob aplausos calorosos de populares no centro.",
      "Os armamentos apreendidos foram encaminhados ao Instituto de Criminalística.",
      "A nova diretriz ministerial entrou em vigor no primeiro dia útil do mês."
    ],
    "correctIndex": 0,
    "explanation": "Na frase A, a palavra 'não' (que originariamente é um advérbio de negação) foi antecedida do artigo definido masculino 'O', transformando-se em SUBSTANTIVO ('O não dito...'). Essa mudança de classe sem alteração mórfica é DERIVAÇÃO IMPRÓPRIA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Na frase A, a palavra 'não' (que originariamente é um advérbio de negação) foi antecedida do artigo definido masculino 'O', transformando-se em SUBSTANTIVO ('O não dito...'). Essa mudança de classe sem alteração mórfica é DERIVAÇÃO IMPRÓPRIA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_164",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Composição: Justaposição vs Aglutinação",
    "question": "[Simulado PMPE AOCP - Questão 164] Diferencia-se a composição por justaposição (em que os elementos componentes mantêm sua integridade fonética) da aglutinação (em que há perda ou alteração de fonemas). Assinale o par de palavras formadas por AGLUTINAÇÃO:",
    "options": [
      "Planalto (plano + alto) e Fidalgo (filho + de + algo).",
      "Passatempo (passa + tempo) e Guarda-chuva (guarda + chuva).",
      "Pé-de-meia (pé + de + meia) e Girassol (gira + sol).",
      "Segunda-feira (segunda + feira) e Beija-flor (beija + flor).",
      "Couve-flor (couve + flor) e Para-raios (para + raios)."
    ],
    "correctIndex": 0,
    "explanation": "'Planalto' (plano + alto) e 'Fidalgo' (filho + de + algo) sofreram supressão de letras e fonemas na fusão dos radicais, constituindo clássicos exemplos de COMPOSIÇÃO POR AGLUTINAÇÃO. Os outros pares são compostos por justaposição.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Planalto' (plano + alto) e 'Fidalgo' (filho + de + algo) sofreram supressão de letras e fonemas na fusão dos radicais, constituindo clássicos exemplos de COMPOSIÇÃO POR AGLUTINAÇÃO. Os outros pares são compostos por justaposição.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_165",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Classes Gramaticais: O Advérbio",
    "question": "[Simulado PMPE AOCP - Questão 165] O advérbio é palavra invariável que modifica o sentido de um verbo, de um adjetivo ou de outro advérbio. Assinale a frase em que a palavra 'rápido' atua como advérbio:",
    "options": [
      "Os policiais militares responderam rápido ao chamado de emergência irradiado pelo Copom.",
      "Os policiais militares utilizaram um veículo rápido para perseguir os fugitivos na BR.",
      "Aquele fuzil calibre 5,56mm possui um disparo rápido e de alta precisão letal.",
      "Um raciocínio rápido salvou a vida do sentinela durante o ataque armado ao posto.",
      "O soldado mais rápido do pelotão venceu a prova de cem metros rasos na competição."
    ],
    "correctIndex": 0,
    "explanation": "Em 'responderam rápido' (= responderam rapidamente), a palavra 'rápido' modifica o verbo 'responderam', indicando o modo da ação, funcionando como ADVÉRBIO (invariável). Nas outras opções, 'rápido' qualifica substantivos ('veículo rápido', 'disparo rápido', 'raciocínio rápido'), sendo ADJETIVO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'responderam rápido' (= responderam rapidamente), a palavra 'rápido' modifica o verbo 'responderam', indicando o modo da ação, funcionando como ADVÉRBIO (invariável). Nas outras opções, 'rápido' qualifica substantivos ('veículo rápido', 'disparo rápido', 'raciocínio rápido'), sendo ADJETIVO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_166",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais - Conversão de Voz Ativa em Passiva Analítica",
    "question": "[Simulado PMPE AOCP - Questão 166] Considere a oração na voz ativa: 'O Batalhão de Operações Policiais Especiais apreendeu todo o arsenal bélico da quadrilha.' Na transposição para a VOZ PASSIVA ANALÍTICA, a forma verbal correta será:",
    "options": [
      "Foi apreendido.",
      "Havia apreendido.",
      "Será apreendido.",
      "Tinha sido apreendido.",
      "Apreendeu-se."
    ],
    "correctIndex": 0,
    "explanation": "Na transposição para a passiva analítica: o verbo ativo 'apreendeu' está no pretérito perfeito do indicativo. O verbo auxiliar 'ser' deve ser conjugado no mesmo tempo e modo ('foi') + particípio ('apreendido'): 'Todo o arsenal bélico da quadrilha FOI APREENDIDO pelo Batalhão...'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Na transposição para a passiva analítica: o verbo ativo 'apreendeu' está no pretérito perfeito do indicativo. O verbo auxiliar 'ser' deve ser conjugado no mesmo tempo e modo ('foi') + particípio ('apreendido'): 'Todo o arsenal bélico da quadrilha FOI APREENDIDO pelo Batalhão...'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_167",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais - Agente da Passiva",
    "question": "[Simulado PMPE AOCP - Questão 167] Na oração 'A barricada de concreto na rodovia estadual foi desfeita pelos policiais militares do Choque com o apoio de retroescavadeiras', o termo 'pelos policiais militares do Choque' desempenha a função sintática de:",
    "options": [
      "Agente da passiva.",
      "Objeto indireto do verbo desfazer.",
      "Adjunto adnominal do substantivo barricada.",
      "Complemento nominal de concreto.",
      "Sujeito paciente da oração principal."
    ],
    "correctIndex": 0,
    "explanation": "Na voz passiva analítica ('foi desfeita'), o termo preposicionado que pratica a ação expressa pelo verbo na passiva ('pelos policiais militares do Choque') classifica-se sintaticamente como AGENTE DA PASSIVA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Na voz passiva analítica ('foi desfeita'), o termo preposicionado que pratica a ação expressa pelo verbo na passiva ('pelos policiais militares do Choque') classifica-se sintaticamente como AGENTE DA PASSIVA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_168",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais - Passiva Sintética (ou Pronominal)",
    "question": "[Simulado PMPE AOCP - Questão 168] Assinale a alternativa que apresenta oração na VOZ PASSIVA SINTÉTICA (ou pronominal):",
    "options": [
      "Destruíram-se os acampamentos clandestinos montados pelos traficantes no manguezal.",
      "Os acampamentos clandestinos foram destruídos pelas tropas especiais da SDS.",
      "O tenente feriu-se superficialmente durante a progressão tática no terreno irregular.",
      "A tropa assistiu ao treinamento prático de salvamento em alturas no Derby.",
      "Os soldados queixaram-se do calor sufocante durante o desfile militar de 7 de setembro."
    ],
    "correctIndex": 0,
    "explanation": "A voz passiva sintética constrói-se com verbo transitivo direto na terceira pessoa + pronome apassivador 'se' + sujeito paciente: 'Destruíram-se os acampamentos' (= Os acampamentos foram destruídos).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A voz passiva sintética constrói-se com verbo transitivo direto na terceira pessoa + pronome apassivador 'se' + sujeito paciente: 'Destruíram-se os acampamentos' (= Os acampamentos foram destruídos).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_169",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais - Condição para Existência de Voz Passiva",
    "question": "[Simulado PMPE AOCP - Questão 169] De acordo com a sintaxe normativa, só admitem conversão da voz ativa para a voz passiva as orações que possuem verbos:",
    "options": [
      "Transitivas diretas ou transitivas diretas e indiretas (que possuem objeto direto).",
      "Intransitivas que exprimem fenômenos meteorológicos ou da natureza.",
      "Transitivas indiretas regidas por preposição 'de' ou 'para'.",
      "De ligação que articulam sujeito e predicativo subjetivo.",
      "Pronominais essenciais acompanhados de reflexivo recíproco."
    ],
    "correctIndex": 0,
    "explanation": "Apenas verbos TRANSITIVOS DIRETOS (VTD) e TRANSITIVOS DIRETOS E INDIRETOS (VTDI) admitem conversão para a voz passiva, pois o seu OBJETO DIRETO na voz ativa converte-se no SUJEITO PACIENTE da voz passiva.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Apenas verbos TRANSITIVOS DIRETOS (VTD) e TRANSITIVOS DIRETOS E INDIRETOS (VTDI) admitem conversão para a voz passiva, pois o seu OBJETO DIRETO na voz ativa converte-se no SUJEITO PACIENTE da voz passiva.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_170",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Vozes Verbais - Voz Reflexiva Recíproca",
    "question": "[Simulado PMPE AOCP - Questão 170] Assinale a alternativa que contém verbo na VOZ REFLEXIVA RECÍPROCA:",
    "options": [
      "Os combatentes cumprimentaram-se calorosamente com abraços e continências no pátio.",
      "O soldado feriu-se com a lâmina ao abrir a caixa de munições da viatura.",
      "O suspeito entregou-se pacificamente à equipe tática da PMPE após horas de cerco.",
      "Divulgou-se a ordem do dia em boletim interno ostensivo de circulação geral.",
      "Vive-se com tranquilidade e paz social quando a justiça e a ordem imperam soberanas."
    ],
    "correctIndex": 0,
    "explanation": "Na frase A, a ação verbal é mútua e compartilhada (um cumprimentou o outro simultaneamente), caracterizando a VOZ REFLEXIVA RECÍPROCA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Na frase A, a ação verbal é mútua e compartilhada (um cumprimentou o outro simultaneamente), caracterizando a VOZ REFLEXIVA RECÍPROCA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_171",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Pronomes Demonstrativos e Espaço Físico",
    "question": "[Simulado PMPE AOCP - Questão 171] Quanto ao uso dos pronomes demonstrativos em relação ao espaço físico em que se encontram os interlocutores, assinale a opção correta:",
    "options": [
      "Usa-se 'este/esta/isto' para indicar o que está próximo de quem fala (1ª pessoa).",
      "Usa-se 'aquele/aquela/aquilo' para indicar o que está próximo da pessoa com quem se fala (2ª pessoa).",
      "Usa-se 'esse/essa/isso' para indicar o que está distante de ambos os interlocutores (3ª pessoa).",
      "Usa-se 'este' exclusivamente para objetos que serão destruídos em processo cautelar.",
      "A escolha do demonstrativo de espaço independe da posição física do locutor e interlocutor."
    ],
    "correctIndex": 0,
    "explanation": "Gramática espacial dos demonstrativos: 'ESTE/ESTA/ISTO' = próximo do falante (1ª pessoa); 'ESSE/ESSA/ISSO' = próximo do ouvinte (2ª pessoa); 'AQUELE/AQUELA/AQUILO' = distante de ambos (3ª pessoa).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Gramática espacial dos demonstrativos: 'ESTE/ESTA/ISTO' = próximo do falante (1ª pessoa); 'ESSE/ESSA/ISSO' = próximo do ouvinte (2ª pessoa); 'AQUELE/AQUELA/AQUILO' = distante de ambos (3ª pessoa).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_172",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Textual - Referenciação Anafórica vs Catafórica",
    "question": "[Simulado PMPE AOCP - Questão 172] A coesão referencial anafórica é aquela que retoma um termo anteriormente citado no texto; a catafórica antecipa um termo que ainda será enunciado. Assinale a frase que contém pronome demonstrativo com função CATAFÓRICA:",
    "options": [
      "A diretriz fundamental da corporação é esta: proteger a sociedade com honra e lealdade.",
      "A lealdade e a disciplina militar foram exaltadas pelo comandante; essas virtudes guiam os soldados.",
      "O policial militar prendeu o assaltante e apreendeu a arma; este objeto foi encaminhado à perícia.",
      "A segurança cidadã é indispensável; sobre isso debateram os especialistas no seminário estadual.",
      "O coronel elogiou a tropa e destacou seu heroísmo; tal atitude inspirou os recrutas da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "Em 'A diretriz fundamental da corporação é ESTA: proteger a sociedade...', o demonstrativo 'esta' aponta para a frente no texto, antecipando uma informação que ainda será revelada, exercendo função CATAFÓRICA.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'A diretriz fundamental da corporação é ESTA: proteger a sociedade...', o demonstrativo 'esta' aponta para a frente no texto, antecipando uma informação que ainda será revelada, exercendo função CATAFÓRICA.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_173",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Textual - Uso de 'Este' e 'Aquele' para Retomar Termos Citados",
    "question": "[Simulado PMPE AOCP - Questão 173] Quando se faz referência a dois termos já citados anteriormente no texto, usa-se 'este' (e flexões) para o mais próximo (o último citado) e 'aquele' (e flexões) para o mais distante (o primeiro citado). Assinale a aplicação correta:",
    "options": [
      "O Batalhão de Choque e a Cavalaria atuaram no estádio; este dispersou os tumultos a pé, aquela patrulhou o perímetro a cavalo.",
      "O Batalhão de Choque e a Cavalaria atuaram no estádio; esta patrulhou o perímetro a cavalo, aquele dispersou os tumultos a pé.",
      "O Choque e a Cavalaria atuaram no evento; aquele a cavalo e este a pé respectivamente.",
      "O capitão e o tenente foram condecorados; aquele era mais jovem que este comandante.",
      "Armas e munições foram apreendidas; aquelas na viatura e estas no compartimento sobressalente."
    ],
    "correctIndex": 1,
    "explanation": "Em B: 'Cavalaria' (termo mais próximo/último) é retomada por 'esta' ('esta patrulhou a cavalo'); 'Batalhão de Choque' (termo mais distante/primeiro) é retomado por 'aquele' ('aquele dispersou os tumultos a pé').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. Em B: 'Cavalaria' (termo mais próximo/último) é retomada por 'esta' ('esta patrulhou a cavalo'); 'Batalhão de Choque' (termo mais distante/primeiro) é retomado por 'aquele' ('aquele dispersou os tumultos a pé').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_174",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Flexão de Plural dos Substantivos Compostos",
    "question": "[Simulado PMPE AOCP - Questão 174] Na flexão de plural dos substantivos compostos formados por 'verbo + substantivo', flexiona-se apenas o segundo elemento (o substantivo). Assinale o grupo de vocábulos que segue essa regra:",
    "options": [
      "Guarda-roupas, quebra-mares, para-choques, lança-chamas, bate-bocas.",
      "Guardas-civis, guardas-noturnos, tenentes-coronéis, capitães-tenentes.",
      "Pés-de-moleque, mulas-sem-cabeça, pores-do-sol, quedas-d'água.",
      "Pequeno-burgueses, alto-falantes, abaixo-assinados, vice-presidentes.",
      "Tico-ticos, reco-recos, pingue-pongues, corre-corres, pisca-piscas."
    ],
    "correctIndex": 0,
    "explanation": "Compostos por VERBO + SUBSTANTIVO: o verbo é invariável e apenas o substantivo vai ao plural: guarda-roupas (guardar + roupa), quebra-mares (quebrar + mar), para-choques (parar + choque), lança-chamas (lançar + chama).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Compostos por VERBO + SUBSTANTIVO: o verbo é invariável e apenas o substantivo vai ao plural: guarda-roupas (guardar + roupa), quebra-mares (quebrar + mar), para-choques (parar + choque), lança-chamas (lançar + chama).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_175",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Plural de Substantivos Compostos com Palavra Invariável",
    "question": "[Simulado PMPE AOCP - Questão 175] Em substantivos compostos formados por 'palavra invariável (advérbio ou prefixo) + substantivo ou adjetivo', apenas o segundo elemento varia. Assinale a alternativa correta:",
    "options": [
      "Os abaixo-assinados e os alto-falantes da manifestação foram inspecionados pelos policiais.",
      "Os abaixos-assinados e os altos-falantes foram apreendidos pela guarda municipal de trânsito.",
      "Os vices-comandantes reuniram-se com os ex-alunos da Academia Militar do Derby.",
      "Os sempre-vivas e os louva-a-deuses foram preservados na reserva biológica estadual.",
      "Os guardas-marinhas receberam os cumprimentos de todos os vices-diretores da polícia."
    ],
    "correctIndex": 0,
    "explanation": "'Abaixo' e 'alto' (quando advérbio) são invariáveis, flexionando-se apenas o segundo termo: 'os abaixo-assinados', 'os alto-falantes'. Em prefixos como 'vice', ele também é invariável: 'os vice-comandantes' (e não 'vices').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Abaixo' e 'alto' (quando advérbio) são invariáveis, flexionando-se apenas o segundo termo: 'os abaixo-assinados', 'os alto-falantes'. Em prefixos como 'vice', ele também é invariável: 'os vice-comandantes' (e não 'vices').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_176",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Textual - Elipse e Coesão Lexical",
    "question": "[Simulado PMPE AOCP - Questão 176] A elipse consiste na omissão de um termo sintático que é facilmente subentendido pelo contexto textual, evitando repetições desnecessárias. Assinale a frase que contém elipse do sujeito na segunda oração:",
    "options": [
      "O policial militar chegou ao quartel antes do amanhecer e [ele] assumiu prontamente o posto na sentinela.",
      "O coronel determinou que os oficiais chegassem no horário rigorosamente previsto.",
      "A viatura de ronda escolar atendeu à comunidade com cordialidade e profissionalismo exemplar.",
      "Os armamentos foram todos inspecionados no depósito central do quartel do Derby.",
      "A formatura dos novos cabos e sargentos ocorrerá amanhã pela manhã no pátio principal."
    ],
    "correctIndex": 0,
    "explanation": "Na oração coordenada 'e assumiu prontamente o posto', o sujeito ('o policial militar') foi omitido (elipse) para evitar repetição viciosa, caracterizando recurso clássico de coesão por elipse.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Na oração coordenada 'e assumiu prontamente o posto', o sujeito ('o policial militar') foi omitido (elipse) para evitar repetição viciosa, caracterizando recurso clássico de coesão por elipse.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_177",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Sentido das Expressões 'Ao Encontro De' vs 'De Encontro A'",
    "question": "[Simulado PMPE AOCP - Questão 177] A locução 'ao encontro de' indica acordo, conformidade ou aproximação harmoniosa; 'de encontro a' indica choque, oposição, colisão ou divergência. Assinale a frase correta:",
    "options": [
      "A decisão judicial foi de encontro aos anseios da corporação, confirmando integralmente os pleitos dos policiais militares.",
      "O plano operacional do comandante foi ao encontro do que esperavam os moradores, estabelecendo a paz comunitária.",
      "A viatura desgovernada foi ao encontro do poste de iluminação pública na curva perigosa da avenida.",
      "Os manifestantes radicais foram ao encontro das tropas de choque e provocaram confrontos violentos.",
      "As diretrizes da secretaria foram de encontro às necessidades dos batalhões para modernizar as frotas."
    ],
    "correctIndex": 1,
    "explanation": "'AO ENCONTRO DE' = ser favorável, concordar com, ir em direção harmoniosa ('foi ao encontro do que esperavam os moradores'). 'DE ENCONTRO A' = colidir com, divergir de, chocar-se contra ('a viatura foi de encontro ao poste').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "B": "Correta. 'AO ENCONTRO DE' = ser favorável, concordar com, ir em direção harmoniosa ('foi ao encontro do que esperavam os moradores'). 'DE ENCONTRO A' = colidir com, divergir de, chocar-se contra ('a viatura foi de encontro ao poste').",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_178",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Expressões 'Ao Invés De' vs 'Em Vez De'",
    "question": "[Simulado PMPE AOCP - Questão 178] A expressão 'ao invés de' só deve ser empregada quando há ideia de oposição estrita ou contrariedade absoluta; 'em vez de' pode ser usada em qualquer situação de simples substituição ou troca. Assinale a frase correta:",
    "options": [
      "Em vez de café com leite, o sentinela da madrugada preferiu tomar água mineral gelada.",
      "Ao invés de café com leite, o sentinela da madrugada preferiu tomar água mineral gelada.",
      "Ao invés de ir para a praia no domingo ensolarado, o soldado estudou direito constitucional.",
      "Ao invés de redigir o boletim no computador, o sargento escreveu a termo na máquina antiga.",
      "Ao invés de comprar uma moto esportiva, o cabo adquiriu um automóvel utilitário usado."
    ],
    "correctIndex": 0,
    "explanation": "'Café' e 'água' não são termos opostos (antônimos), mas meras alternativas alimentares, exigindo o uso exclusivo de 'EM VEZ DE' (= em lugar de). 'Ao invés de' exige antônimos reais (ex.: 'ao invés de subir, desceu'; 'ao invés de sorrir, chorou').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Café' e 'água' não são termos opostos (antônimos), mas meras alternativas alimentares, exigindo o uso exclusivo de 'EM VEZ DE' (= em lugar de). 'Ao invés de' exige antônimos reais (ex.: 'ao invés de subir, desceu'; 'ao invés de sorrir, chorou').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_179",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Pronomes de Tratamento e Concordância Gramatical",
    "question": "[Simulado PMPE AOCP - Questão 179] Na redação oficial e no padrão culto, ao se dirigir a uma autoridade por meio de pronome de tratamento (como 'Vossa Excelência'), a concordância verbal e pronominal deve ser feita:",
    "options": [
      "Exclusivamente na terceira pessoa (ele/ela), embora o pronome faça referência à segunda pessoa do discurso.",
      "Na segunda pessoa do plural (vós), por se tratar de forma cerimoniosa e reverente.",
      "Na primeira pessoa do plural (nós), em sinal de comunhão cívica e respeito hierárquico.",
      "Livremente entre a segunda e terceira pessoa sem nenhuma restrição gramatical.",
      "No modo infinitivo flexionado acompanhado de partícula expletiva de realce."
    ],
    "correctIndex": 0,
    "explanation": "Todos os pronomes de tratamento (Vossa Excelência, Vossa Senhoria, etc.) dirigem-se à 2ª pessoa (com quem se fala), mas exigem concordância gramatical OBRIGATÓRIA na 3ª PESSOA do singular ou plural: 'Vossa Excelência autorizou o plano?' (e nunca 'autorizastes').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Todos os pronomes de tratamento (Vossa Excelência, Vossa Senhoria, etc.) dirigem-se à 2ª pessoa (com quem se fala), mas exigem concordância gramatical OBRIGATÓRIA na 3ª PESSOA do singular ou plural: 'Vossa Excelência autorizou o plano?' (e nunca 'autorizastes').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_180",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Textual - Operadores Argumentativos",
    "question": "[Simulado PMPE AOCP - Questão 180] Os operadores argumentativos são elementos linguísticos que introduzem orientações discursivas na argumentação de um texto. O operador 'aliás' introduz:",
    "options": [
      "Uma retificação ou um argumento suplementar de reforço a favor da mesma conclusão.",
      "Uma oposição insuperável que anula totalmente a tese anteriormente defendida.",
      "A conclusão dedutiva baseada em premissas silogísticas universais.",
      "Uma ordem cronológica que determina o encerramento do parágrafo de introdução.",
      "A apassivação do predicativo verbal em construções sintáticas complexas."
    ],
    "correctIndex": 0,
    "explanation": "O operador discursivo 'aliás' (assim como 'além do mais', 'inclusive') introduz um argumento a mais ou uma informação complementar de REFORÇO que corrobora a tese em defesa.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O operador discursivo 'aliás' (assim como 'além do mais', 'inclusive') introduz um argumento a mais ou uma informação complementar de REFORÇO que corrobora a tese em defesa.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_181",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Paroxítonas Terminadas em 'R', 'X', 'N', 'L'",
    "question": "[Simulado PMPE AOCP - Questão 181] Acentuam-se as palavras paroxítonas terminadas em R, X, N e L (mnemônico 'ROXINOL'). Assinale a alternativa que traz apenas palavras enquadradas nessa regra:",
    "options": [
      "Mártir, tórax, hífen, fóssil.",
      "Café, baú, cipó, armazém.",
      "Juiz, raiz, ruim, caju.",
      "Homens, jovens, nuvens, polens.",
      "Lâmpada, tático, médico, exército."
    ],
    "correctIndex": 0,
    "explanation": "'Már-tir' (termina em R), 'tó-rax' (termina em X), 'hí-fen' (termina em N) e 'fós-sil' (termina em L) são todas paroxítonas acentuadas pela terminação consonantal do mnemônico R-X-N-L.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Már-tir' (termina em R), 'tó-rax' (termina em X), 'hí-fen' (termina em N) e 'fós-sil' (termina em L) são todas paroxítonas acentuadas pela terminação consonantal do mnemônico R-X-N-L.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_182",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Acentuação Gráfica - Hífen e Hifens, Pólen e Polens",
    "question": "[Simulado PMPE AOCP - Questão 182] No que concerne à acentuação das palavras paroxítonas 'hífen' e 'pólen' e seus respectivos plurais, a regra ortográfica determina que:",
    "options": [
      "'Hífen' e 'pólen' são acentuados no singular, mas seus plurais ('hifens' e 'polens') NÃO recebem acento gráfico.",
      "'Hífen' e 'pólen' não têm acento no singular, mas recebem acento agudo nos plurais ('hífens' e 'pólens').",
      "Tanto os singulares quanto os plurais mantêm o acento agudo por serem paroxítonas terminadas em -ens.",
      "Nenhuma dessas palavras ou seus plurais pode receber acento após o Acordo de 1990.",
      "O acento passa a ser circunflexo no plural pela regra das proparoxítonas aparentes."
    ],
    "correctIndex": 0,
    "explanation": "'Hífen' e 'pólen' são acentuadas no singular por terminarem em 'n'. No plural, terminam em '-ens' ('hifens', 'polens'), e paroxítonas terminadas em -ens NÃO são acentuadas (apenas as oxítonas em -ens levam acento, como 'parabéns').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Hífen' e 'pólen' são acentuadas no singular por terminarem em 'n'. No plural, terminam em '-ens' ('hifens', 'polens'), e paroxítonas terminadas em -ens NÃO são acentuadas (apenas as oxítonas em -ens levam acento, como 'parabéns').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_183",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Semântica - Homônimos (Sessão de Tiro vs Seção de Armamento)",
    "question": "[Simulado PMPE AOCP - Questão 183] Assinale a frase em que o emprego de 'sessão', 'seção' e 'cessão' está impecável:",
    "options": [
      "Os soldados compareceram à sessão de treino de tiro e retiraram a munição na seção de armamento.",
      "Os soldados compareceram à seção de treino de tiro e retiraram a munição na cessão de armamento.",
      "Os soldados compareceram à cessão de treino de tiro e retiraram a munição na sessão de armamento.",
      "A seção extraordinária da Assembleia discutiu a sessão de terrenos para a sede do Batalhão.",
      "O oficial da cessão de trânsito participou de uma seção solene de entrega de medalhas militares."
    ],
    "correctIndex": 0,
    "explanation": "'Sessão de treino' = período de realização da atividade / reunião. 'Seção de armamento' = departamento, repartição ou setor do quartel. Frase A absolutamente correta.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Sessão de treino' = período de realização da atividade / reunião. 'Seção de armamento' = departamento, repartição ou setor do quartel. Frase A absolutamente correta.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_184",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - Pronomes Pessoais Oblíquos Tônicos",
    "question": "[Simulado PMPE AOCP - Questão 184] Os pronomes oblíquos tônicos ('mim', 'ti', 'ele', 'nós', 'vós', 'si') vêm sempre precedidos de preposição. Assinale a frase que respeita a norma culta:",
    "options": [
      "Entre mim e ti não há nenhuma divergência sobre a conduta tática na operação integrada.",
      "Entre eu e tu não há nenhuma divergência sobre a conduta tática na operação integrada.",
      "Entre mim e tu não pode haver desconfiança durante a patrulha na favela conflagrada.",
      "Não parta para a missão sem eu autorizar formalmente o deslocamento do destacamento.",
      "O comandante entregou as divisas de promoção para mim colocar no uniforme camuflado."
    ],
    "correctIndex": 0,
    "explanation": "Após preposição ('entre'), usam-se as formas oblíquas tônicas: 'Entre MIM e TI' (e jamais 'entre eu e tu'). Atenção: diante de verbo no infinitivo com valor de sujeito, usa-se 'eu' ('para eu autorizar', 'para eu colocar'). Frase A impecável.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Após preposição ('entre'), usam-se as formas oblíquas tônicas: 'Entre MIM e TI' (e jamais 'entre eu e tu'). Atenção: diante de verbo no infinitivo com valor de sujeito, usa-se 'eu' ('para eu autorizar', 'para eu colocar'). Frase A impecável.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_185",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Morfologia - 'Para mim fazer' vs 'Para eu fazer'",
    "question": "[Simulado PMPE AOCP - Questão 185] De acordo com a tradição gramatical de que 'mim não conjuga verbo', assinale a frase correta:",
    "options": [
      "O comandante entregou o relatório para eu analisar e emitir parecer técnico circunstanciado.",
      "O comandante entregou o relatório para mim analisar e emitir parecer técnico circunstanciado.",
      "Trouxeram a escala de serviço para mim assinar antes do início do expediente militar.",
      "É difícil para eu aceitar a transferência de unidade no meio do ano letivo de meus filhos.",
      "Não há segredos entre eu e meu capitão durante a execução dos planos de cerco armado."
    ],
    "correctIndex": 0,
    "explanation": "Quem analisa o relatório é o sujeito, e pronome na função de sujeito de verbo no infinitivo deve ser do CASO RETO: 'para EU analisar'. A frase B com 'para mim analisar' é erro clássico combatido em provas.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Quem analisa o relatório é o sujeito, e pronome na função de sujeito de verbo no infinitivo deve ser do CASO RETO: 'para EU analisar'. A frase B com 'para mim analisar' é erro clássico combatido em provas.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_186",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe - Aposto Especificativo",
    "question": "[Simulado PMPE AOCP - Questão 186] O aposto especificativo (ou individualizador) junta-se a um substantivo comum para individualizá-lo e NÃO vem separado por vírgulas. Assinale a frase que traz aposto especificativo:",
    "options": [
      "O Rio Capibaribe atravessa o coração da cidade do Recife sob as pontes centenárias.",
      "O Rio Capibaribe, curso d'água histórico de Pernambuco, inspirou poetas e escritores célebres.",
      "O comandante da corporação, homem disciplinado e honrado, presidiu a formatura militar.",
      "Soldados da PMPE, cumpram a nobre missão de proteger os cidadãos com destemor e brio.",
      "Recife, a Veneza Brasileira, atrai turistas de todas as partes do mundo no verão."
    ],
    "correctIndex": 0,
    "explanation": "Em 'O Rio Capibaribe', a palavra própria 'Capibaribe' individualiza o substantivo comum 'Rio' sem vírgulas, constituindo APOSTO ESPECIFICATIVO. Em B e C, os termos entre vírgulas são apostos explicativos.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'O Rio Capibaribe', a palavra própria 'Capibaribe' individualiza o substantivo comum 'Rio' sem vírgulas, constituindo APOSTO ESPECIFICATIVO. Em B e C, os termos entre vírgulas são apostos explicativos.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_187",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe - Predicativo do Objeto",
    "question": "[Simulado PMPE AOCP - Questão 187] Assinale a alternativa em que o termo destacado desempenha a função sintática de PREDICATIVO DO OBJETO:",
    "options": [
      "O juiz considerou o policial militar INOCENTE de todas as acusações disciplinares.",
      "O policial militar INOCENTE apresentou-se ao comandante para reiniciar as rondas diárias.",
      "Os soldados estavam CANSADOS após a marcha operacional de vinte e cinco quilômetros.",
      "A viatura permaneceu ESTACIONADA em frente ao posto de atendimento ao cidadão.",
      "O comandante era um homem JUSTO em todas as suas deliberações administrativas."
    ],
    "correctIndex": 0,
    "explanation": "Em 'considerou o policial militar [objeto direto] INOCENTE [predicativo do objeto]', a palavra 'inocente' qualifica o objeto direto por intermédio da ação verbal transitiva, funcionando como PREDICATIVO DO OBJETO.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'considerou o policial militar [objeto direto] INOCENTE [predicativo do objeto]', a palavra 'inocente' qualifica o objeto direto por intermédio da ação verbal transitiva, funcionando como PREDICATIVO DO OBJETO.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_188",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe - Adjunto Adnominal vs Complemento Nominal",
    "question": "[Simulado PMPE AOCP - Questão 188] Diferenciam-se o adjunto adnominal e o complemento nominal porque o complemento nominal completa substantivo abstrato, adjetivo ou advérbio com valor PACIENTE (passivo). Assinale a frase com COMPLEMENTO NOMINAL:",
    "options": [
      "O amor À PÁTRIA norteia o juramento solene prestado por todo soldado da Polícia Militar.",
      "A espada DO CORONEL reluzia sob a luz do sol durante a cerimônia de passagem de comando.",
      "A decisão DO COMANDANTE foi comunicada aos oficiais durante a reunião no auditório.",
      "O motorista DA VIATURA conduziu a equipe com perícia e segurança na rodovia molhada.",
      "O toque DA CORNETA ecoou pelo pátio do Derby anunciando a rendição da guarda militar."
    ],
    "correctIndex": 0,
    "explanation": "Em 'amor à pátria', 'à pátria' completa o sentido do substantivo abstrato 'amor' com valor PACIENTE (a pátria é amada), constituindo COMPLEMENTO NOMINAL. Nas outras frases, os termos preposicionados indicam posse ou agente ('do coronel', 'do comandante', 'da viatura'), sendo ADJUNTOS ADNOMINAIS.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'amor à pátria', 'à pátria' completa o sentido do substantivo abstrato 'amor' com valor PACIENTE (a pátria é amada), constituindo COMPLEMENTO NOMINAL. Nas outras frases, os termos preposicionados indicam posse ou agente ('do coronel', 'do comandante', 'da viatura'), sendo ADJUNTOS ADNOMINAIS.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_189",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe - Oração Subordinada Substantiva Subjetiva",
    "question": "[Simulado PMPE AOCP - Questão 189] A oração subordinada substantiva subjetiva funciona como SUJEITO da oração principal. Assinale a alternativa que traz essa oração:",
    "options": [
      "É indispensável que os policiais mantenham o equilíbrio emocional nas situações de alto estresse.",
      "O comandante exigiu que todos os soldados comparecessem uniformizados à parada matinal.",
      "Temos esperança de que a segurança nas comunidades pacificadas se consolide com rapidez.",
      "O meu único desejo é que a tropa retorne ilesa e vitoriosa de todas as incursões táticas.",
      "O sargento tinha certeza de que a rota de fuga dos suspeitos passava pela ponte velha."
    ],
    "correctIndex": 0,
    "explanation": "Em 'É indispensável QUE OS POLICIAIS MANTENHAM...', a oração principal possui verbo de ligação + predicativo ('É indispensável') e carece de sujeito. A oração subordinada funciona como o SUJEITO da oração principal: 'Que os policiais mantenham... É INDISPENSÁVEL'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'É indispensável QUE OS POLICIAIS MANTENHAM...', a oração principal possui verbo de ligação + predicativo ('É indispensável') e carece de sujeito. A oração subordinada funciona como o SUJEITO da oração principal: 'Que os policiais mantenham... É INDISPENSÁVEL'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_190",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Sintaxe - Oração Subordinada Substantiva Completiva Nominal",
    "question": "[Simulado PMPE AOCP - Questão 190] Assinale a alternativa que contém oração subordinada substantiva COMPLETIVA NOMINAL (que completa o sentido de um nome):",
    "options": [
      "Os membros da corporação militar tinham plena convicção de que a justiça seria restabelecida.",
      "O capitão necessitava de que novos reforços fossem enviados urgentemente ao destacamento.",
      "Ninguém duvidava de que os assaltantes estavam fortemente armados com fuzis importados.",
      "Os policiais obedeceram a que constava no plano de operações assinado pelo comandante.",
      "Acreditamos firmemente em que a verdade prevalecerá no término do inquérito policial."
    ],
    "correctIndex": 0,
    "explanation": "Em 'tinham plena convicção [substantivo abstrato] DE QUE A JUSTIÇA SERIA RESTABELECIDA', a oração subordinada preposicionada completa o sentido do substantivo 'convicção', classificando-se como SUBORDINADA SUBSTANTIVA COMPLETIVA NOMINAL.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Em 'tinham plena convicção [substantivo abstrato] DE QUE A JUSTIÇA SERIA RESTABELECIDA', a oração subordinada preposicionada completa o sentido do substantivo 'convicção', classificando-se como SUBORDINADA SUBSTANTIVA COMPLETIVA NOMINAL.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_191",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia - Uso dos 'Porquês'",
    "question": "[Simulado PMPE AOCP - Questão 191] Assinale a alternativa em que o uso do 'por que' (separado e sem acento) está correto por se tratar de pronome interrogativo em pergunta indireta:",
    "options": [
      "O delegado perguntou aos investigadores por que a cena do crime não foi isolada de imediato.",
      "O delegado perguntou aos investigadores porque a cena do crime não foi isolada de imediato.",
      "O delegado perguntou aos investigadores por quê a cena do crime não foi isolada de imediato.",
      "O delegado perguntou aos investigadores porquê a cena do crime não foi isolada de imediato.",
      "O delegado não entendeu o por que de tanta demora na preservação dos vestígios balísticos."
    ],
    "correctIndex": 0,
    "explanation": "'POR QUE' (separado e sem acento) usa-se em perguntas diretas ou indiretas no início/meio de frase ('perguntou por que...'), bem como quando equivale a 'pelo qual / pelos quais' ou 'por qual razão'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'POR QUE' (separado e sem acento) usa-se em perguntas diretas ou indiretas no início/meio de frase ('perguntou por que...'), bem como quando equivale a 'pelo qual / pelos quais' ou 'por qual razão'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_192",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia - Uso do 'Por Quê' no Final de Frase",
    "question": "[Simulado PMPE AOCP - Questão 192] Emprega-se 'por quê' (separado e com acento circunflexo) quando o termo se posiciona imediatamente antes de ponto final, de interrogação ou exclamação. Assinale a frase que atende a essa regra:",
    "options": [
      "Os manifestantes recusaram-se a desocupar a rodovia estadual, e ninguém compreendeu por quê.",
      "Os manifestantes recusaram-se a desocupar a rodovia estadual, e ninguém compreendeu porque.",
      "Os manifestantes recusaram-se a desocupar a rodovia estadual, e ninguém compreendeu por que.",
      "Por quê a tropa de choque foi acionada para intervir na avenida Agamenon Magalhães?",
      "Não nos foi revelado o por quê da transferência do sargento para o batalhão de Afogados."
    ],
    "correctIndex": 0,
    "explanation": "Antes de pontuação final (ponto, interrogação, exclamação), o 'por quê' torna-se tônico e deve ser grafado separado e COM ACENTO CIRCUNFLEXO: 'ninguém compreendeu por quê.'.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Antes de pontuação final (ponto, interrogação, exclamação), o 'por quê' torna-se tônico e deve ser grafado separado e COM ACENTO CIRCUNFLEXO: 'ninguém compreendeu por quê.'.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_193",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia - Uso do 'Porquê' Substantivado",
    "question": "[Simulado PMPE AOCP - Questão 193] A palavra 'porquê' (junto e com acento circunflexo) é um substantivo masculino equivalente a 'motivo', 'razão' ou 'causa', e vem sempre precedida de artigo, pronome ou numeral. Assinale a frase correta:",
    "options": [
      "O comandante-geral da corporação exigiu saber o porquê de tantas faltas injustificadas na guarda.",
      "O comandante-geral da corporação exigiu saber o por que de tantas faltas injustificadas na guarda.",
      "O comandante-geral da corporação exigiu saber o por quê de tantas faltas injustificadas na guarda.",
      "O comandante-geral da corporação exigiu saber o porque de tantas faltas injustificadas na guarda.",
      "Existem vários por ques que justificam o cancelamento da instrução matinal de tiro prático."
    ],
    "correctIndex": 0,
    "explanation": "Quando antecedido de artigo ('o'), o termo se substantiva e deve ser escrito JUNTO e COM ACENTO: 'o PORQUÊ de tantas faltas' (= o motivo).",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Quando antecedido de artigo ('o'), o termo se substantiva e deve ser escrito JUNTO e COM ACENTO: 'o PORQUÊ de tantas faltas' (= o motivo).",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_194",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia - Letras 'G' e 'J'",
    "question": "[Simulado PMPE AOCP - Questão 194] Assinale a alternativa em que todas as palavras estão grafadas corretamente com 'g' ou 'j':",
    "options": [
      "Tigela, vertigem, coragem, viagem (substantivo), laje.",
      "Tijela, vertijem, corajem, viajem (substantivo), lage.",
      "Tigela, vertijem, coragem, viagem (substantivo), lage.",
      "Tijela, vertigem, corajem, viajem (verbo), laje.",
      "Tigela, vertigem, coragem, viagem (verbo), lage."
    ],
    "correctIndex": 0,
    "explanation": "'Tigela' (com g), 'vertigem' e 'coragem' (substantivos em -agem com g), 'viagem' (substantivo com g; 'viajem' com j é forma verbal do presente do subjuntivo) e 'laje' (com j). Todas perfeitas na opção A.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Tigela' (com g), 'vertigem' e 'coragem' (substantivos em -agem com g), 'viagem' (substantivo com g; 'viajem' com j é forma verbal do presente do subjuntivo) e 'laje' (com j). Todas perfeitas na opção A.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_195",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Ortografia - Letras 'S' e 'Z'",
    "question": "[Simulado PMPE AOCP - Questão 195] Assinale a alternativa em que os vocábulos estão grafados em conformidade com as normas ortográficas vigentes:",
    "options": [
      "Paralisia, analisar, pesquisa, civilizar, realizar.",
      "Paralizia, analizar, pesquiza, civilisar, realisar.",
      "Paralisia, analizar, pesquisa, civilizar, realisar.",
      "Paralizia, analisar, pesquiza, civilisar, realizar.",
      "Paralisia, analisar, pesquiza, civilizar, realizar."
    ],
    "correctIndex": 0,
    "explanation": "'Paralisia' (com s) gera 'paralisar' (com s). 'Análise' (com s) gera 'analisar' (com s). 'Pesquisa' (com s) gera 'pesquisar' (com s). Substantivos sem 's' no radical recebem o sufixo formador de verbos '-izar' com z: 'civil' -> 'civilizar', 'real' -> 'realizar'. Opção A impecável.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. 'Paralisia' (com s) gera 'paralisar' (com s). 'Análise' (com s) gera 'analisar' (com s). 'Pesquisa' (com s) gera 'pesquisar' (com s). Substantivos sem 's' no radical recebem o sufixo formador de verbos '-izar' com z: 'civil' -> 'civilizar', 'real' -> 'realizar'. Opção A impecável.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_196",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão Textual - Inferência e Pressuposto",
    "question": "[Simulado PMPE AOCP - Questão 196] Considere o enunciado: 'O efetivo do Batalhão de Radiopatrulha CONTINUA atuando com firmeza no combate ao crime violento na Região Metropolitana.' O verbo de aspecto continuativo 'continua' gera o seguinte pressuposto textual:",
    "options": [
      "O batalhão já atuava com firmeza no passado, mantendo no presente essa mesma conduta inalterada.",
      "O batalhão começou a combater o crime violento pela primeira vez nesta semana.",
      "O batalhão havia suspendido totalmente suas atividades operacionais no semestre anterior.",
      "A criminalidade na capital pernambucana foi completamente extinta pela atuação da polícia.",
      "Os policiais passarão a receber treinamento tático especializado a partir do próximo mês."
    ],
    "correctIndex": 0,
    "explanation": "Marcadores pressuposicionais como 'continua', 'permanece', 'ainda', 'deixou de' introduzem pressupostos lógicos incontestáveis: se o batalhão 'continua atuando', pressupõe-se necessariamente que ele já atuava assim no período anterior.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Marcadores pressuposicionais como 'continua', 'permanece', 'ainda', 'deixou de' introduzem pressupostos lógicos incontestáveis: se o batalhão 'continua atuando', pressupõe-se necessariamente que ele já atuava assim no período anterior.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_197",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Textual - Marcadores de Tempo e Progressão Narrativa",
    "question": "[Simulado PMPE AOCP - Questão 197] Em um texto narrativo policial, expressões como 'naquela mesma noite', 'minutos antes do confronto', 'em seguida' e 'finalmente' atuam como:",
    "options": [
      "Operadores de coesão sequencial temporal que asseguram a linearidade e o encadeamento dos fatos narrados.",
      "Figuras de sintaxe voltadas a ocultar a identidade dos personagens secundários.",
      "Mecanismos de ambiguidade intencional para confundir a interpretação dos leitores do laudo.",
      "Conectivos subordinativos finais que indicam a intenção do agente criminoso.",
      "Acentos diferenciais em palavras homófonas heterográficas."
    ],
    "correctIndex": 0,
    "explanation": "Essas locuções adverbiais temporais funcionam como operadores de COESÃO SEQUENCIAL TEMPORAL, organizando a ordem cronológica e a progressão dos acontecimentos no enredo.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Essas locuções adverbiais temporais funcionam como operadores de COESÃO SEQUENCIAL TEMPORAL, organizando a ordem cronológica e a progressão dos acontecimentos no enredo.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_198",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Compreensão Textual - Tema vs Tese",
    "question": "[Simulado PMPE AOCP - Questão 198] Em textos dissertativos de provas de concurso público, diferencia-se o TEMA da TESE porque:",
    "options": [
      "O tema é o assunto geral delimitado pela banca examinadora, enquanto a tese é o posicionamento crítico e opinativo que o autor assume e defende sobre esse assunto.",
      "O tema é a introdução do texto e a tese é a proposta de intervenção no parágrafo final.",
      "O tema é a narração das ocorrências e a tese é a descrição minuciosa do fardamento militar.",
      "O tema e a tese são termos rigorosamente sinônimos e intercambiáveis na teoria da redação.",
      "A tese é sempre formulada por uma citação poética e o tema por um artigo de lei federal."
    ],
    "correctIndex": 0,
    "explanation": "Diferença conceitual essencial: TEMA = o assunto amplo proposto para discussão (ex.: 'A segurança pública no Brasil contemporâneo'). TESE = a ideia central defendida pelo autor, seu ponto de vista sustentado por argumentos.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. Diferença conceitual essencial: TEMA = o assunto amplo proposto para discussão (ex.: 'A segurança pública no Brasil contemporâneo'). TESE = a ideia central defendida pelo autor, seu ponto de vista sustentado por argumentos.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_199",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Coesão Textual - Papel do Pronome Relativo 'ONDE'",
    "question": "[Simulado PMPE AOCP - Questão 199] Segundo o padrão culto exigido pelo Instituto AOCP, o pronome relativo 'onde' deve ser empregado EXCLUSIVAMENTE para indicar:",
    "options": [
      "Lugar físico, espacial e geograficamente determinado.",
      "Qualquer circunstância temporal ou momento histórico pretérito.",
      "Situações abstratas, debates teóricos ou sentimentos humanos complexos.",
      "Pessoas de alta linhagem social ou patentes militares superiores.",
      "Relações de causalidade entre fenômenos climáticos e segurança viária."
    ],
    "correctIndex": 0,
    "explanation": "O pronome relativo 'onde' é restrito estritamente a LUGARES FÍSICOS/CONCRETOS ('a sala ONDE ocorreu a reunião', 'o quartel ONDE sirvo'). Para situações abstratas, usa-se 'em que', 'no qual', 'na qual' (ex.: 'na reunião EM QUE foi decidido', e NUNCA 'na reunião onde foi decidido').",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. O pronome relativo 'onde' é restrito estritamente a LUGARES FÍSICOS/CONCRETOS ('a sala ONDE ocorreu a reunião', 'o quartel ONDE sirvo'). Para situações abstratas, usa-se 'em que', 'no qual', 'na qual' (ex.: 'na reunião EM QUE foi decidido', e NUNCA 'na reunião onde foi decidido').",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  },
  {
    "id": "port_inedita_200",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Síntese Geral da Língua Portuguesa para a PMPE (Instituto AOCP)",
    "question": "[Simulado PMPE AOCP - Questão 200] Considere o conjunto de regras fundamentais da norma-padrão exigidas no edital do concurso para Soldado da Polícia Militar de Pernambuco. Assinale a única afirmativa que apresenta um princípio gramatical rigorosamente VERDADEIRO:",
    "options": [
      "A crase é estritamente proibida antes de palavras masculinas, verbos e pronomes indefinidos que não admitem artigo feminino; a concordância verbal com o verbo haver no sentido de existir é sempre impessoal na 3ª pessoa do singular; e a próclise é obrigatória diante de palavras com carga semântica negativa.",
      "A crase é obrigatória diante de todos os nomes próprios masculinos e antes de pronomes do caso reto.",
      "O verbo haver no sentido de existir concorda obrigatoriamente no plural com o substantivo seguinte.",
      "É permitido e recomendável iniciar qualquer oração na norma culta com pronomes oblíquos átonos como me, te e se.",
      "A concordância nominal de 'anexo' e 'incluso' permanece invariável no masculino neutro em todas as orações."
    ],
    "correctIndex": 0,
    "explanation": "A afirmativa A sintetiza com precisão cirúrgica três dos maiores pilares da gramática cobrados pelo Instituto AOCP: 1) Proibições da crase (antes de masculino, verbo e indefinidos sem artigo); 2) Impessoalidade mandatória do verbo haver (= existir/acontecer); 3) Próclise obrigatória atraída por palavras de sentido negativo.",
    "fundamentacaoLegal": "Gramática Normativa da Língua Portuguesa - Padrão Instituto AOCP (Edital PMPE 2026)",
    "hint": "Atente-se às regras de concordância, regência, crase e sintaxe da norma culta.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_portugues_aocp",
    "dicaMacete": "Dica Tática PMPE: memorize as regras essenciais de crase, concordância e conectivos!",
    "analiseAlternativas": {
      "A": "Correta. A afirmativa A sintetiza com precisão cirúrgica três dos maiores pilares da gramática cobrados pelo Instituto AOCP: 1) Proibições da crase (antes de masculino, verbo e indefinidos sem artigo); 2) Impessoalidade mandatória do verbo haver (= existir/acontecer); 3) Próclise obrigatória atraída por palavras de sentido negativo.",
      "B": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "C": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "D": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa.",
      "E": "Incorreta. Viola os preceitos gramaticais e normativos da Língua Portuguesa."
    }
  }
];
