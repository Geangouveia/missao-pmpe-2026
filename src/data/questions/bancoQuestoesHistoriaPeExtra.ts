import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: HISTÓRIA DE PERNAMBUCO PMPE 2026 (INSTITUTO AOCP)
 * Foco rigoroso no edital: Duarte Coelho, Holandeses, Guararapes, Mascates, 1817, 1824, Praieira, Era Vargas, Dom Hélder e Manguebeat
 */
export const BANCO_HISTORIA_PE_EXTRA: QuizQuestion[] = [
  {
    "id": "hist_pe_001",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Invasões Holandesas • Período Nassoviano (1637-1644)",
    "question": "(Instituto AOCP / PMPE) Durante a ocupação holandesa em Pernambuco no século XVII, o governo do Conde João Maurício de Nassau-Siegen (1637-1644) destacou-se por uma série de medidas administrativas, urbanísticas e culturais na capitania. Sobre a administração de Nassau, assinale a alternativa correta:",
    "options": [
      "Instituiu a expulsão imediata de todos os católicos e judeus, impondo o calvinismo como religião obrigatória sob pena de morte.",
      "Promoveu uma política de tolerância religiosa que permitiu o culto judaico e a fundação da Sinagoga Kahal Zur Israel, além de conceder créditos aos senhores de engenho luso-brasileiros e realizar melhorias urbanas na Cidade Maurícia.",
      "Destruiu totalmente os canaviais pernambucanos para transformar Recife em entreposto exclusivamente extrator de ouro e diamantes.",
      "Aliou-se aos líderes quilombolas de Palmares contra os colonos portugueses na Primeira Batalha dos Guararapes.",
      "Renunciou voluntariamente ao governo para transferir o domínio de Pernambuco à Coroa espanhola em troca de títulos nobiliárquicos."
    ],
    "correctIndex": 1,
    "explanation": "Maurício de Nassau adotou uma administração moderna e tolerante: concedeu empréstimos da WIC aos senhores de engenho, promoveu a tolerância religiosa (autorizando o funcionamento da Sinagoga Kahal Zur Israel, a primeira das Américas), trouxe cientistas e artistas (Frans Post, Albert Eckhout) e modernizou a 'Cidade Maurícia' (Recife).",
    "fundamentacaoLegal": "Historiografia de Pernambuco (Evaldo Cabral de Mello e José Antônio Gonsalves de Mello).",
    "hint": "Nassau = Tolerância religiosa + Empréstimos aos senhores de engenho + Obras urbanas no Recife.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "NASSAU EM RECIFE: Tolerância religiosa (Kahal Zur Israel), crédito aos engenhos e arte com Frans Post!",
    "porqueErrou": {
      "0": "Nassau se notabilizou justamente pelo oposto: garantiu ampla liberdade de culto a católicos e judeus.",
      "2": "A cana-de-açúcar continuou sendo o motor econômico principal de Pernambuco holandês.",
      "3": "A Batalha dos Guararapes ocorreu em 1648/1649, anos após a saída de Nassau (1644).",
      "4": "Nassau retornou à Europa após desentendimentos com a diretoria da WIC (Companhia das Índias Ocidentais)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Nassau implementou tolerância religiosa, não perseguição.",
      "B": "Correta. Nassau assegurou tolerância religiosa, urbanizou Mauritsstad e financiou engenhos.",
      "C": "Incorreta. Incentivou intensamente a produção açucareira.",
      "D": "Incorreta. Guararapes ocorreu em 1648/1649 após Nassau.",
      "E": "Incorreta. Conflito financeiro com a WIC motivou seu retorno à Holanda."
    }
  },
  {
    "id": "hist_pe_002",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Insurreição Pernambucana • Batalhas dos Guararapes (1648 e 1649)",
    "question": "(Instituto AOCP / PMPE) As Batalhas dos Montes Guararapes (travadas em 1648 e 1649) representam um marco definitivo na história militar de Pernambuco e do Brasil. Esse episódio histórico é celebrado como o berço da nacionalidade e do Exército Brasileiro principalmente porque:",
    "options": [
      "Consagrou a vitória esmagadora das tropas britânicas sobre os piratas franceses na Baía de Suape.",
      "Consolidou a união das três matrizes formadoras do povo brasileiro (brancos luso-brasileiros, negros e indígenas) combatendo juntos sob as lideranças de Fernandes Vieira, Vidal de Negreiros, Henrique Dias e Felipe Camarão para expulsar os invasores holandeses.",
      "Foi o primeiro confronto militar armado em solo pernambucano com uso exclusivo de armamento nuclear e blindados.",
      "Resultou na imediata proclamação da República de Pernambuco independente de Portugal e da Espanha.",
      "Determinou a extinção antecipada da escravidão em todas as províncias do Norte e Nordeste colonial."
    ],
    "correctIndex": 1,
    "explanation": "As Batalhas dos Montes Guararapes simbolizam a 'união das três raças' em defesa da terra pernambucana: Fernandes Vieira e Vidal de Negreiros (luso-brasileiros), Henrique Dias (comandante do Terço de homens negros libertos) e Antônio Felipe Camarão (líder indígena potiguara). Por esse motivo, Guararapes é reconhecido oficialmente como o berço histórico do Exército Brasileiro.",
    "fundamentacaoLegal": "Decreto Federal que instituiu o Dia do Exército (19 de abril de 1648).",
    "hint": "Guararapes = União das três raças (Fernandes Vieira, Henrique Dias e Felipe Camarão) contra os holandeses.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "GUARARAPES = BERÇO DO EXÉRCITO: Branco (Fernandes Vieira) + Negro (Henrique Dias) + Índio (Felipe Camarão)!",
    "porqueErrou": {
      "0": "A batalha foi travada contra os holandeses da WIC, não contra tropas britânicas.",
      "2": "Trata-se de batalha campal do século XVII com armas de fogo de pólvora negra e espadas.",
      "3": "A Insurreição lutava pela restauração da Coroa portuguesa e da fé católica, e não pela república.",
      "4": "A abolição só ocorreu séculos depois, em 1888 com a Lei Áurea."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O adversário foi o exército holandês da WIC.",
      "B": "Correta. Simboliza a união cívico-militar de luso-brasileiros, negros e indígenas pela terra natal.",
      "C": "Incorreta. Conflito colonial seiscentista.",
      "D": "Incorreta. A intenção era restituir Pernambuco ao domínio português.",
      "E": "Incorreta. A estrutura escravista permaneceu inalterada no período colonial."
    }
  },
  {
    "id": "hist_pe_003",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Guerra dos Mascates (1710-1711) • Conflito Olinda vs Recife",
    "question": "(Instituto AOCP / PMPE) A Guerra dos Mascates (1710-1711) eclodiu na Capitania de Pernambuco motivada pelo choque de interesses políticos e econômicos entre dois grupos sociais distintos. Os grupos antagônicos em confronto eram:",
    "options": [
      "A aristocracia açucareira endividada de Olinda versus os comerciantes portugueses prósperos do Recife (chamados pejorativamente de 'mascates').",
      "Os escravizados do Quilombo dos Palmares versus os capitães do mato financiados pela Coroa holandesa.",
      "Os membros do Partido Liberal Praieiro versus os juízes de paz da Confederação do Equador.",
      "Os padres jesuítas catequizadores versus as tropas expedicionárias de Maurício de Nassau.",
      "Os coronéis do sertão do Pajeú versus os marinheiros rebelados da Revolta da Chibata."
    ],
    "correctIndex": 0,
    "explanation": "A Guerra dos Mascates opôs os senhores de engenho de Olinda (aristocracia rural tradicional, mas profundamente endividada) aos ricos comerciantes portugueses de Recife ('mascates'). Quando Recife conseguiu da Coroa a elevação à categoria de vila (independente de Olinda) com a criação do Pelourinho em 1710, a aristocracia olindense invadiu Recife, iniciando o conflito.",
    "fundamentacaoLegal": "Mello, Evaldo Cabral de. 'A Fronda dos Mascates'. Editora 34.",
    "hint": "Mascates = Olinda (senhores de engenho falidos) vs Recife (comerciantes portugueses ricos).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "GUERRA DOS MASCATES: OLINDA (Terras e Dívidas) X RECIFE (Comércio e Dinheiro)!",
    "porqueErrou": {
      "1": "Palmares situava-se em Alagoas (então comarca de PE) e foi destruído em 1695 por Domingos Jorge Velho.",
      "2": "Praieiros e Confederação do Equador pertencem ao século XIX (1848 e 1824).",
      "3": "Jesuítas foram expulsos no séc. XVIII por Pombal, não participando dessa revolta mercantil.",
      "4": "Coronéis do sertão e Revolta da Chibata (1910) são temas da República Velha."
    },
    "analiseAlternativas": {
      "A": "Correta. Conflito entre senhores de engenho olindenses e comerciantes portugueses recifenses.",
      "B": "Incorreta. Conflito entre elites brancas locais, sem relação direta com Palmares.",
      "C": "Incorreta. Mistura movimentos do século XIX.",
      "D": "Incorreta. Guerra civil entre colonos e comerciantes no início do século XVIII.",
      "E": "Incorreta. Cronologia totalmente deslocada."
    }
  },
  {
    "id": "hist_pe_004",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Pernambucana de 1817 • Movimento Republicano",
    "question": "(Instituto AOCP / PMPE) A Revolução Pernambucana de 1817 é considerada um dos mais importantes movimentos de emancipação política do período colonial brasileiro. Dentre suas características e desdobramentos marcantes, destaca-se:",
    "options": [
      "O apoio incondicional à família real portuguesa e a doação de recursos públicos para sustentar os luxos da corte no Rio de Janeiro.",
      "A implantação de um governo provisório republicano em Pernambuco durante cerca de 75 dias, com liberdade de consciência e de imprensa, além da criação da bandeira que inspirou a atual bandeira do Estado.",
      "A adesão imediata de todas as províncias do Sul do Brasil sob a liderança de Bento Gonçalves.",
      "A restauração do domínio monárquico espanhol sobre o Porto de Suape e o arquipélago de Fernando de Noronha.",
      "A nomeação de Dom Pedro I como presidente vitalício da República de Olinda."
    ],
    "correctIndex": 1,
    "explanation": "A Revolução de 1817 instituiu uma REPÚBLICA em Pernambuco por 75 dias. O Governo Provisório proclamou liberdade de imprensa, tolerância religiosa e elaborou uma lei orgânica com separação de poderes. Criou a bandeira tricolor com sol, cruz e arco-íris (adotada oficialmente como bandeira de Pernambuco em 1917).",
    "fundamentacaoLegal": "Historiografia da Revolução de 1817 (Denis Bernardes e Evaldo Cabral de Mello).",
    "hint": "1817 = REPÚBLICA POR 75 DIAS + Origem da Bandeira de Pernambuco (Sol, Cruz e Arco-íris).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "1817: PERNAMBUCO FOI PAÍS INDEPENDENTE E REPUBLICANO POR 75 DIAS!",
    "porqueErrou": {
      "0": "A revolução foi deflagrada exatamente contra a opressão fiscal da corte de D. João VI instalada no Rio de Janeiro.",
      "2": "Bento Gonçalves liderou a Guerra dos Farrapos no Rio Grande do Sul (1835-1845).",
      "3": "A revolução tinha caráter nacional e republicano, sem qualquer ingerência espanhola.",
      "4": "D. Pedro I combateu os revoltosos e era símbolo da monarquia absolutista bragantina."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O movimento foi antimonárquico e hostil aos gastos da Corte joanina.",
      "B": "Correta. Estabeleceu governo republicano por 75 dias e deu origem à bandeira do Estado.",
      "C": "Incorreta. Províncias do Sul não aderiram; a Farroupilha ocorreu décadas depois.",
      "D": "Incorreta. O movimento visava à emancipação republicana brasileira.",
      "E": "Incorreta. D. Pedro I representava o poder centralizador monárquico."
    }
  },
  {
    "id": "hist_pe_005",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Confederação do Equador (1824) • Frei Caneca e o Poder Moderador",
    "question": "(Instituto AOCP / PMPE) Em 1824, Pernambuco liderou a CONFEDERAÇÃO DO EQUADOR, revolta de caráter republicano e federalista contra o governo central do Império do Brasil. O principal estopim político que provocou a eclosão dessa insurreição foi:",
    "options": [
      "A imposição (outorga) autoritária da Constituição de 1824 por Dom Pedro I, com a criação do PODER MODERADOR, e a nomeação arbitrária de Francisco de Paiva Baracho para governar Pernambuco à revelia dos líderes locais.",
      "A invasão das tropas francesas comandadas por Napoleão Bonaparte no litoral pernambucano.",
      "A decisão do governo imperial de proibir em definitivo a exportação de açúcar e algodão pelo porto do Recife.",
      "A cobrança de dízimo obrigatório pelo Vaticano sobre todas as ordens carmelitas do Nordeste.",
      "A decretação do estado de sítio permanente durante o governo de Agamenon Magalhães."
    ],
    "correctIndex": 0,
    "explanation": "A Confederação do Equador eclodiu após D. Pedro I dissolver a Constituinte de 1823 e outorgar a Constituição de 1824 com o hipertrofiado PODER MODERADOR. Além disso, o Imperador destituiu o presidente eleito pelos pernambucanos (Manoel de Carvalho Paes de Andrade) e impôs Francisco de Paiva Baracho, gerando a revolta liderada por Frei Caneca.",
    "fundamentacaoLegal": "Mello, Evaldo Cabral de. 'A Outra Independência: O Federalismo Pernambucano de 1817 a 1824'.",
    "hint": "1824 = Confederação do Equador = Contra a Constituição Outorgada e o PODER MODERADOR de D. Pedro I!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "CONFEDERAÇÃO DO EQUADOR (1824): FREI CANECA COMBATE O PODER MODERADOR DE D. PEDRO I!",
    "porqueErrou": {
      "1": "Napoleão foi derrotado em Waterloo em 1815 e faleceu em 1821.",
      "2": "Açúcar e algodão continuaram sendo produtos vitais da pauta de exportação do Império.",
      "3": "A questão religiosa carmelita não foi o móvel deflagrador do movimento.",
      "4": "Agamenon Magalhães governou Pernambuco no século XX (Era Vargas), mais de um século depois."
    },
    "analiseAlternativas": {
      "A": "Correta. A outorga da Constituição autoritária com o Poder Moderador e a nomeação imperial de Baracho deflagraram o levante.",
      "B": "Incorreta. Cronologia napoleônica incompatível.",
      "C": "Incorreta. Não houve proibição de exportações agrícolas.",
      "D": "Incorreta. A motivação foi de federalismo e combate ao absolutismo monárquico.",
      "E": "Incorreta. Agamenon Magalhães é figura política da Era Vargas (século XX)."
    }
  },
  {
    "id": "hist_pe_006",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Revolução Praieira (1848) • Manifesto ao Mundo",
    "question": "(Instituto AOCP / PMPE) A Revolução Praieira (1848), última grande insurreição armada de cunho liberal do Império do Brasil, teve no 'Manifesto ao Mundo' (redigido por Borges da Fonseca) sua mais célebre proclamação programática. Entre as reivindicações expressas desse manifesto, constava:",
    "options": [
      "A implantação de uma monarquia absolutista subordinada ao Reino Unido da Grã-Bretanha.",
      "O voto livre e universal do povo brasileiro, a plena liberdade de imprensa e a extinção do Poder Moderador.",
      "A cobrança de pedágio naval exclusivo sobre as jangadas pesqueiras do litoral nordestino.",
      "A anexação definitiva da província de Pernambuco ao território dos Estados Unidos da América.",
      "A entrega das terras de Olinda aos oficiais do Exército holandês desmobilizado."
    ],
    "correctIndex": 1,
    "explanation": "O 'Manifesto ao Mundo' dos praieiros (1848) reivindicava: 1) Voto livre e universal do povo brasileiro; 2) Plena e absoluta liberdade de imprensa; 3) Trabalho como garantia de vida para os cidadãos; 4) Extinção do Poder Moderador e do Senado vitalício; 5) Nacionalização do comércio a retalho.",
    "fundamentacaoLegal": "Nabuco, Joaquim. 'Um Estadista do Império' e Historiografia da Revolução Praieira.",
    "hint": "Manifesto ao Mundo (1848) = Voto Universal + Liberdade de Imprensa + Fim do Poder Moderador!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "PRAIEIRA (1848) = MANIFESTO AO MUNDO: Voto do povo, imprensa livre e morte ao Poder Moderador!",
    "porqueErrou": {
      "0": "Os praieiros eram republicanos e socialistas utópicos, combatendo as monarquias absolutistas.",
      "2": "Pescadores e população pobre apoiavam os praieiros; jamais se exigiu taxação punitiva de jangadas.",
      "3": "Os praieiros defendiam a soberania brasileira e o federalismo democrático.",
      "4": "Os holandeses foram derrotados dois séculos antes, em 1654."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O manifesto era de feição liberal-republicana e radical.",
      "B": "Correta. O Manifesto ao Mundo exigia sufrágio universal, liberdade de expressão e fim do Poder Moderador.",
      "C": "Incorreta. Não trata de encargos sobre pescadores artesanais.",
      "D": "Incorreta. Defendia a nacionalidade brasileira e o controle do comércio pelos nacionais.",
      "E": "Incorreta. Erro cronológico de dois séculos."
    }
  },
  {
    "id": "hist_pe_007",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Pernambuco na República • Dom Hélder Câmara e os Direitos Humanos",
    "question": "(Instituto AOCP / PMPE) Durante o Regime Militar brasileiro (1964-1985), Dom Hélder Câmara, que exerceu o arcebispado de Olinda e Recife entre 1964 e 1985, destacou-se no cenário nacional e internacional por sua atuação histórica como:",
    "options": [
      "Ministro da Justiça do governo militar, responsável pela elaboração do Ato Institucional nº 5 (AI-5).",
      "Defensor incansável dos direitos humanos, dos camponeses e dos perseguidos políticos, pregando a não-violência e a justiça social ('Bispo Vermelho' / 'Patrono Brasileiro dos Direitos Humanos').",
      "Comandante militar da Operação Mandacaru no interior de Pernambuco.",
      "Fundador do Movimento dos Sem-Terra em parceria com o Partido Conservador de Olinda.",
      "Embaixador do Brasil perante a Santa Sé durante a Guerra do Paraguai."
    ],
    "correctIndex": 1,
    "explanation": "Dom Hélder Câmara foi um dos maiores líderes mundiais da defesa dos Direitos Humanos. Criou a Comissão Justiça e Paz em Pernambuco, protegeu presos políticos e camponeses, denunciou a tortura no exterior e foi indicado quatro vezes ao Prêmio Nobel da Paz. Foi declarado oficialmente pela Lei Federal nº 13.581/2017 como o 'Patrono Brasileiro dos Direitos Humanos'.",
    "fundamentacaoLegal": "Lei Federal nº 13.581/2017 e História Política Contemporânea de Pernambuco.",
    "hint": "Dom Hélder Câmara = Arcebispo de Olinda e Recife, defensor dos pobres e Patrono dos Direitos Humanos do Brasil.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "DOM HÉLDER CÂMARA: 'Quando dou comida aos pobres me chamam de santo; quando pergunto por que passam fome me chamam de comunista'!",
    "porqueErrou": {
      "0": "Dom Hélder foi severamente censurado e perseguido pelo regime do AI-5, tendo seu nome vetado na imprensa.",
      "2": "Dom Hélder era religioso e pacifista, nunca exerceu cargo militar de repressão.",
      "3": "Dom Hélder fundou a CNBB e pastorais sociais, não atuando como líder partidário partidário.",
      "4": "A Guerra do Paraguai ocorreu no século XIX (1864-1870), quase um século antes de seu arcebispado."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Dom Hélder foi vítima da censura do AI-5, não seu redator.",
      "B": "Correta. Reconhecido internacionalmente pela corajosa defesa dos direitos humanos e justiça social.",
      "C": "Incorreta. Era líder espiritual e pregador da não-violência ativa.",
      "D": "Incorreta. Não tinha vínculo partidário conservador.",
      "E": "Incorreta. Viveu e atuou no século XX."
    }
  },
  {
    "id": "hist_pe_008",
    "categoryId": "historia_pe",
    "bloco": "bloco_1",
    "materiaNome": "História de Pernambuco",
    "topicoEdital": "Cultura e Identidade de Pernambuco • O Movimento Manguebeat (Década de 1990)",
    "question": "(Instituto AOCP / PMPE) Na década de 1990, o Recife foi palco do surgimento do 'MANGUEBEAT', movimento cultural e estético de repercussão global liderado por Chico Science e Fred Zero Quatro. Tendo como símbolo a antena parabólica cravada na lama do mangue e o manifesto 'Caranguejos com Cérebro', a proposta central desse movimento foi:",
    "options": [
      "A proibição total de instrumentos elétricos para preservar exclusivamente as cantigas medievais portuguesas.",
      "Conectar os ritmos tradicionais pernambucanos (maracatu de baque virado, coco e ciranda) com as correntes modernas da música mundial (rock, hip-hop, funk e música eletrônica), denunciando o abandono social e ecológico do Recife.",
      "Promover a venda de terras de manguezal para a especulação imobiliária de resorts internacionais.",
      "Substituir o frevo carnavalesco pela música clássica vienense nos desfiles do Galo da Madrugada.",
      "Criar uma milícia armada para controlar os portos de pesca do litoral sul de Pernambuco."
    ],
    "correctIndex": 1,
    "explanation": "O Manguebeat revolucionou a cultura pernambucana nos anos 1990 com Chico Science & Nação Zumbi e Mundo Livre S/A. A ideia central ('antena na lama') era fundir as raízes ancestrais (maracatu, ciranda) aos ritmos globais (rock, funk, eletrônico), alertando para a biodiversidade dos mangues e a pobreza urbana do Recife.",
    "fundamentacaoLegal": "Manifesto 'Caranguejos com Cérebro' (Fred Zero Quatro, 1992) e Acervo Cultural do Estado de PE.",
    "hint": "Manguebeat = Chico Science + Nação Zumbi + Maracatu misturado com Rock e Hip-hop + Antena na lama!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_historia_pe",
    "dicaMacete": "MANGUEBEAT: Tradição (Maracatu) + Modernidade (Rock/Eletrônico) + Crítica Social!",
    "porqueErrou": {
      "0": "O movimento utilizava guitarras distorcidas, pedais de efeito e samplers eletrônicos.",
      "2": "O movimento denunciava o caos ecológico e a degradação dos manguezais, valorizando o ecossistema estuarino.",
      "3": "O Galo da Madrugada e o frevo são patrimônios que convivem harmonicamente com a efervescência cultural pernambucana.",
      "4": "O Manguebeat foi um movimento pacífico e artístico estritamente cultural e musical."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Celebrou guitarras elétricas associadas aos tambores de alfaias.",
      "B": "Correta. A fusão do maracatu com o rock e hip-hop e a denúncia social definem o Manguebeat.",
      "C": "Incorreta. Defendia a ecologia e o respeito aos ecossistemas de mangue.",
      "D": "Incorreta. Valorizou a riqueza popular do Recife sem renegar suas raízes carnavalescas.",
      "E": "Incorreta. Movimento artístico e literário de vanguarda."
    }
  }
];
