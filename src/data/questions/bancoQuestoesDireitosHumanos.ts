import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: DIREITOS HUMANOS PMPE 2026 (INSTITUTO AOCP)
 * Foco total nas Dimensões/Gerações (1ª, 2ª, 3ª, 4ª e 5ª) e no Pacto de São José da Costa Rica (CADH)
 * Elaborado rigorosamente conforme a doutrina (Paulo Bonavides, Norberto Bobbio) e jurisprudência do STF / Corte IDH
 */
export const BANCO_DIREITOS_HUMANOS_PLANALTO: QuizQuestion[] = [
  // ==========================================
  // BLOCO 1: DIMENSÕES / GERAÇÕES DOS DIREITOS HUMANOS
  // ==========================================
  {
    "id": "dh_dim_001",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Teoria Geral dos Direitos Humanos • 1ª Dimensão (Liberdades Civis e Políticas)",
    "question": "A doutrina constitucionalista consagrada (Norberto Bobbio e Paulo Bonavides) classifica a evolução histórica dos Direitos Humanos em gerações ou dimensões. Sobre os direitos humanos de PRIMEIRA DIMENSÃO, assinale a alternativa correta:",
    "options": [
      "Têm como valor basilar a igualdade material, impondo ao Estado prestações positivas nas áreas de saúde, previdência social e trabalho.",
      "Consagram as liberdades clássicas (direitos civis e políticos), impondo ao Estado um dever de abstenção (prestações negativas) para garantir a esfera de autonomia individual.",
      "Surgiram no contexto pós-Segunda Guerra Mundial, tendo como marco os direitos difusos, coletivos e a proteção ambiental.",
      "Têm como foco a bioética, a engenharia genética e o direito à democracia direta e pluralista no cenário da globalização.",
      "Definem o direito à paz como valor supremo da humanidade, segundo a teoria inovadora de Paulo Bonavides."
    ],
    "correctIndex": 1,
    "explanation": "Os direitos de 1ª dimensão têm como lema a LIBERDADE (Revoluções Francesa e Americana, séc. XVIII). São direitos de defesa (status negativus de Jellinek), exigindo abstenção estatal em favor da liberdade individual, vida, propriedade e direitos políticos.",
    "fundamentacaoLegal": "Doutrina de Norberto Bobbio ('A Era dos Direitos') e Paulo Bonavides.",
    "hint": "1ª Dimensão = LIBERDADE = Não intervenção estatal (dever de abstenção / prestações negativas).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "1ª DIMENSÃO = LIBERDADE = ABSTENÇÃO (O Estado não mete a mão na minha liberdade!)",
    "porqueErrou": {
      "0": "Você marcou direitos sociais e econômicos (saúde, previdência), que pertencem à 2ª dimensão (igualdade).",
      "2": "Você marcou direitos difusos e ambientais do pós-guerra, que pertencem à 3ª dimensão (solidariedade).",
      "3": "Você marcou bioética e engenharia genética, que caracterizam a 4ª dimensão.",
      "4": "Você marcou o direito supremo à paz de Paulo Bonavides, que pertence à 5ª dimensão."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Igualdade material e prestações sociais positivas definem a 2ª dimensão.",
      "B": "Correta. A 1ª dimensão consagra as liberdades individuais e políticas e exige conduta omissiva/abstenção do Estado.",
      "C": "Incorreta. Direitos difusos, coletivos e meio ambiente são de 3ª dimensão.",
      "D": "Incorreta. Bioética e engenharia genética compõem a 4ª dimensão.",
      "E": "Incorreta. O direito à paz universal de Paulo Bonavides situa-se na 5ª dimensão."
    }
  },
  {
    "id": "dh_dim_002",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Teoria Geral dos Direitos Humanos • 2ª Dimensão (Direitos Sociais, Econômicos e Culturais)",
    "question": "Os direitos humanos de SEGUNDA DIMENSÃO emergiram historicamente impulsionados pelas lutas operárias da Revolução Industrial e pelo constitucionalismo social do início do século XX. O traço distintivo fundamental dessa dimensão é:",
    "options": [
      "A consagração das liberdades negativas e a proibição da intervenção do Estado na ordem econômica liberal.",
      "A titularidade indeterminada ou transindividual de direitos, não pertencentes a nenhum indivíduo isoladamente.",
      "A exigência de prestações positivas (obrigações de fazer) do Estado para assegurar a igualdade material, como educação, saúde e assistência aos desamparados.",
      "A regulação da biotecnologia e a preservação do genoma humano contra manipulações clonais.",
      "A primazia exclusiva dos direitos civis de locomoção e do habeas corpus."
    ],
    "correctIndex": 2,
    "explanation": "A 2ª dimensão tem como valor a IGUALDADE substantiva (Constituição Mexicana de 1917 e de Weimar de 1919). Exige do Estado ações afirmativas e prestações materiais positivas (saúde, educação, moradia, previdência, direitos trabalhistas).",
    "fundamentacaoLegal": "Constituição do México (1917), Weimar (1919), PIDESC de 1966 e Protocolo de San Salvador.",
    "hint": "2ª Dimensão = IGUALDADE MATERIAL = O Estado tem que agir e prestar serviços essenciais.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "2ª DIMENSÃO = IGUALDADE = FAZER SOCIAL (Educação, Saúde, Trabalho, Previdência)",
    "porqueErrou": {
      "0": "Liberdades negativas e não intervenção econômica são marcas da 1ª dimensão liberal.",
      "1": "Titularidade transindividual e indeterminada é a marca da 3ª dimensão (difusos e coletivos).",
      "3": "Biotecnologia e genoma humano são o núcleo da 4ª dimensão.",
      "4": "Habeas corpus e locomoção são direitos civis individuais típicos da 1ª dimensão."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Liberdades negativas pertencem à 1ª dimensão.",
      "B": "Incorreta. Direitos transindividuais caracterizam a 3ª dimensão.",
      "C": "Correta. A 2ª dimensão impõe prestações positivas estatais para concretizar a igualdade material.",
      "D": "Incorreta. Biotecnologia pertence à 4ª dimensão.",
      "E": "Incorreta. Liberdade de locomoção e habeas corpus são de 1ª dimensão."
    }
  },
  {
    "id": "dh_dim_003",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Teoria Geral dos Direitos Humanos • 3ª Dimensão (Solidariedade e Fraternidade)",
    "question": "Assinale a alternativa que exemplifica tipicamente um direito fundamental de TERCEIRA DIMENSÃO (ou geração):",
    "options": [
      "O direito do réu à ampla defesa, ao contraditório e a não autoincriminação perante a autoridade judiciária.",
      "O direito à percepção de salário mínimo nacionalmente unificado com reajustes periódicos.",
      "O direito ao meio ambiente ecologicamente equilibrado como bem de uso comum do povo e essencial à sadia qualidade de vida.",
      "O direito à integridade física e à proibição de penas cruéis e de tortura.",
      "O direito de sufrágio universal e de participação em plebiscitos e referendos."
    ],
    "correctIndex": 2,
    "explanation": "A 3ª dimensão fundamenta-se na FRATERNIDADE / SOLIDARIEDADE. São direitos transindividuais (difusos e coletivos), como o meio ambiente ecologicamente equilibrado (Art. 225 da CF), direito ao desenvolvimento, autodeterminação dos povos e patrimônio comum da humanidade.",
    "fundamentacaoLegal": "Art. 225 da CF/88; Declaração de Estocolmo (1972) e Rio-92.",
    "hint": "3ª Dimensão = SOLIDARIEDADE / FRATERNIDADE = Meio Ambiente, Consumidor, Desenvolvimento e Paz.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "1ª Liberté (Liberdade), 2ª Égalité (Igualdade), 3ª Fraternité (Solidariedade/Meio Ambiente)!",
    "porqueErrou": {
      "0": "Ampla defesa e não autoincriminação são garantias processuais individuais da 1ª dimensão.",
      "1": "Salário mínimo e direitos dos trabalhadores são direitos sociais da 2ª dimensão.",
      "3": "Integridade física e vedação à tortura são liberdades individuais da 1ª dimensão.",
      "4": "Sufrágio e direitos políticos são direitos da 1ª dimensão."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Ampla defesa e devido processo pertencem à 1ª dimensão.",
      "B": "Incorreta. Salário mínimo é direito social de 2ª dimensão.",
      "C": "Correta. Meio ambiente equilibrado é o protótipo do direito difuso de 3ª dimensão.",
      "D": "Incorreta. Integridade física e vedação à tortura são de 1ª dimensão.",
      "E": "Incorreta. Sufrágio universal é direito político de 1ª dimensão."
    }
  },
  {
    "id": "dh_dim_004",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Teoria Geral dos Direitos Humanos • 4ª e 5ª Dimensões na Doutrina de Paulo Bonavides",
    "question": "Conforme a célebre formulação doutrinária do jurista brasileiro Paulo Bonavides, os direitos humanos de QUARTA e QUINTA DIMENSÕES tratam, respectivamente, de:",
    "options": [
      "Direitos dos povos indígenas (4ª dimensão) e direitos dos refugiados de guerra (5ª dimensão).",
      "Globalização dos direitos políticos, bioética/engenharia genética e democracia direta (4ª dimensão); e direito supremo à paz mundial (5ª dimensão).",
      "Direitos econômicos de livre mercado (4ª dimensão) e proteção da soberania nacional aduaneira (5ª dimensão).",
      "Direito ao acesso à justiça gratuita (4ª dimensão) e direito à segurança pública armada (5ª dimensão).",
      "Direito à água potável (4ª dimensão) e direito ao saneamento básico urbano (5ª dimensão)."
    ],
    "correctIndex": 1,
    "explanation": "Para Paulo Bonavides, a 4ª dimensão decorre da globalização política, engenharia genética/bioética e democracia direta e pluralista. Já a 5ª dimensão eleva o direito à PAZ universal e suprema à condição de direito indispensável à continuidade da civilização humana.",
    "fundamentacaoLegal": "Bonavides, Paulo. 'Curso de Direito Constitucional'. Malheiros Editores.",
    "hint": "Bonavides: 4ª = Engenharia Genética / Bioética / Democracia Plural; 5ª = PAZ UNIVERSAL.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "BONAVIDES: 4ª = GENÉTICA & GLOBALIZAÇÃO; 5ª = PAZ MUNDIAL!",
    "porqueErrou": {
      "0": "Indígenas e minorias integram a tutela de direitos coletivos da 3ª dimensão.",
      "2": "Livre mercado não é 4ª dimensão; liga-se ao liberalismo econômico do séc. XVIII.",
      "3": "Acesso à justiça gratuita é garantia da 1ª e 2ª dimensões.",
      "4": "Água e saneamento ligam-se aos direitos sociais e ambientais da 2ª e 3ª dimensões."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Proteção de grupos vulneráveis insere-se na 3ª dimensão.",
      "B": "Correta. Bonavides consolidou a 4ª dimensão (bioética, engenharia genética, democracia) e 5ª dimensão (direito supremo à paz).",
      "C": "Incorreta. Não existe essa acepção em Bonavides.",
      "D": "Incorreta. Assistência judiciária gratuita compõe as garantias processuais e sociais.",
      "E": "Incorreta. Saneamento e água vinculam-se à 2ª e 3ª dimensões."
    }
  },
  {
    "id": "dh_dim_005",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Teoria Geral dos Direitos Humanos • Princípio da Proibição do Retrocesso (Efeito Cliquet)",
    "question": "No Direito Internacional dos Direitos Humanos, o princípio que impede a supressão, revogação injustificada ou redução do nível de proteção já alcançado na esfera dos direitos fundamentais e sociais é denominado doutrinariamente de:",
    "options": [
      "Princípio da Relatividade Mitigada.",
      "Efeito Cliquet ou Princípio da Proibição do Retrocesso Social.",
      "Cláusula de Derrogação Temporária.",
      "Reserva do Possível Exclusiva.",
      "Princípio da Territorialidade Estrita."
    ],
    "correctIndex": 1,
    "explanation": "O Efeito Cliquet (termo oriundo do alpinismo) consagra o Princípio da Vedação/Proibição do Retrocesso: os direitos humanos conquistados não podem ser diminuídos ou aniquilados sem a instituição de mecanismos de compensação correspondentes.",
    "fundamentacaoLegal": "Jurisprudência pacífica do STF (ARE 639.337/SP) e Corte Interamericana de Direitos Humanos.",
    "hint": "Efeito Cliquet = Catraca que só gira para a frente, nunca para trás!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "CLIQUET = CATRACA DE ALPINISMO: Só sobe na proteção, é proibido retroceder!",
    "porqueErrou": {
      "0": "Relatividade diz respeito ao fato de que nenhum direito fundamental é absoluto, mas não trata de vedação de retrocesso.",
      "2": "Derrogação temporária ocorre excepcionalmente em estado de emergência (art. 27 CADH).",
      "3": "Reserva do possível é argumento estatal sobre limites orçamentários, não a proteção contra retrocesso.",
      "4": "Territorialidade trata de limites espaciais de aplicação da norma penal."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A relatividade impede o uso abusivo de direitos, mas não se confunde com o efeito cliquet.",
      "B": "Correta. O efeito cliquet proíbe o retrocesso nos direitos já consagrados.",
      "C": "Incorreta. A derrogação é suspensão excepcional sob circunstâncias extraordinárias.",
      "D": "Incorreta. Reserva do possível é limite orçamentário invocado pelo Estado.",
      "E": "Incorreta. Territorialidade é critério de jurisdição geográfica."
    }
  },

  // ==========================================
  // BLOCO 2: PACTO DE SÃO JOSÉ DA COSTA RICA (CADH)
  // ==========================================
  {
    "id": "dh_psj_001",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Natureza e Dimensão de Direitos",
    "question": "A Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), adotada em 1969 e ratificada pelo Brasil em 1992, tutela precipuamente direitos humanos pertencentes a qual dimensão/geração?",
    "options": [
      "Terceira dimensão (direitos difusos, coletivos e ambientais).",
      "Segunda dimensão exclusivamente (direitos trabalhistas e previdenciários).",
      "Primeira dimensão (direitos civis e políticos, como vida, liberdade e garantias judiciais).",
      "Quarta dimensão (direitos bioéticos e genéticos).",
      "Quinta dimensão exclusivamente (direitos do ciberespaço)."
    ],
    "correctIndex": 2,
    "explanation": "O Pacto de São José da Costa Rica (CADH) é o grande tratado regional interamericano consagrador de Direitos Civis e Políticos (1ª DIMENSÃO). Os direitos sociais e econômicos (2ª dimensão) foram tutelados posteriormente pelo Protocolo de San Salvador (1988).",
    "fundamentacaoLegal": "Convenção Americana sobre Direitos Humanos (Decreto nº 678/1992).",
    "hint": "Pacto de San José = CADH = 1ª Dimensão (Direitos Civis e Políticos).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "PACTO DE SAN JOSÉ = 1ª DIMENSÃO (Vida, Liberdade, Integridade, Devido Processo e Voto)!",
    "porqueErrou": {
      "0": "A CADH tutela direitos civis e políticos individuais, e não direitos ecológicos ou difusos de 3ª dimensão.",
      "1": "Direitos sociais e trabalhistas na OEA são regulados pelo Protocolo Adicional de San Salvador (1988).",
      "3": "Bioética não existia como matéria tutelada na redação de 1969 da CADH.",
      "4": "Ciberespaço não é objeto do Pacto de São José de 1969."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A CADH não é tratado de 3ª dimensão.",
      "B": "Incorreta. Direitos sociais na OEA estão no Protocolo de San Salvador.",
      "C": "Correta. A CADH consagra formalmente os direitos civis e políticos de 1ª dimensão.",
      "D": "Incorreta. Bioética insere-se na 4ª dimensão.",
      "E": "Incorreta. Ciberespaço é afeto à 5ª dimensão em certas correntes."
    }
  },
  {
    "id": "dh_psj_002",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Status Supralegal no Ordenamento Jurídico Brasileiro",
    "question": "No julgamento histórico do RE 466.343/SP e do HC 87.585, o Supremo Tribunal Federal (STF) fixou o entendimento definitivo sobre o status hierárquico do Pacto de São José da Costa Rica e dos demais tratados internacionais de direitos humanos ratificados pelo Brasil sem o rito especial da EC 45/2004. Segundo o STF, tais tratados possuem status:",
    "options": [
      "Infralegal, estando subordinados a qualquer portaria ministerial ou decreto do Poder Executivo.",
      "Meramente doutrinário, sem eficácia normativa direta no território nacional.",
      "Supralegal, situando-se abaixo da Constituição Federal, porém acima de toda a legislação ordinária infraconstitucional.",
      "Idêntico ao das leis ordinárias federais, aplicando-se o critério da lei posterior que revoga a anterior.",
      "Supraconstitucional, prevalecendo inclusive sobre o texto originário da Constituição de 1988."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o STF (tese do Ministro Gilmar Mendes no RE 466.343), tratados de Direitos Humanos ratificados antes da EC 45/04 ou aprovados pelo rito ordinário têm status SUPRALEGAL: estão abaixo da Constituição, mas acima de todas as leis ordinárias, paralisando a eficácia das leis que os contrariem.",
    "fundamentacaoLegal": "STF - RE 466.343/SP e Súmula Vinculante 25.",
    "hint": "Tratado de Direitos Humanos sem rito de emenda = SUPRALEGAL (Entre a CF e as Leis Ordinárias).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "PIRÂMIDE DE KELSEN NO BRASIL: CF/88 no topo -> Tratados Supralegais no meio -> Leis Ordinárias embaixo!",
    "porqueErrou": {
      "0": "Infralegal é a posição de atos executivos e portarias, não de tratados de direitos humanos.",
      "1": "Tratados de direitos humanos ratificados geram obrigações jurídicas vinculantes com eficácia direta.",
      "3": "A tese da mera legalidade ordinária vigorou até 2008, tendo sido expressamente superada pelo STF.",
      "4": "O Brasil não adota a tese da supraconstitucionalidade de tratados em face do texto constitucional."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Status infralegal rebaixa indevidamente o tratado.",
      "B": "Incorreta. Os tratados possuem plena força jurídica vinculante.",
      "C": "Correta. Possuem status supralegal (abaixo da CF e acima da legislação ordinária).",
      "D": "Incorreta. A tese da paridade com lei ordinária foi superada em 2008.",
      "E": "Incorreta. A Constituição de 1988 continua sendo o ápice da pirâmide hierárquica."
    }
  },
  {
    "id": "dh_psj_003",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Prisão Civil por Dívida e Súmula Vinculante 25",
    "question": "O Artigo 7º, item 7, do Pacto de São José da Costa Rica dispõe expressamente que 'ninguém deve ser detido por dívidas'. Em razão da aplicação desse dispositivo pelo STF, qual é a ÚNICA hipótese de prisão civil por dívida admitida atualmente no ordenamento jurídico brasileiro?",
    "options": [
      "Prisão civil do devedor de honorários advocatícios sucumbenciais.",
      "Prisão civil do depositário judicial ou contratual infiel.",
      "Prisão civil do devedor inescusável de obrigação alimentar (pensão alimentícia).",
      "Prisão civil do devedor de tributos e multas estaduais de trânsito.",
      "Prisão civil do fiador em contrato de locação de imóvel residencial."
    ],
    "correctIndex": 2,
    "explanation": "Embora o art. 5º, LXVII da CF/88 previsse a prisão do depositário infiel e do devedor de alimentos, o Pacto de San José só admite a prisão alimentar. Pelo status supralegal do Pacto, o STF editou a Súmula Vinculante 25: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito'.",
    "fundamentacaoLegal": "Art. 7º, item 7 da CADH e Súmula Vinculante nº 25 do STF.",
    "hint": "ÚNICA prisão civil válida no Brasil hoje: PENSÃO ALIMENTÍCIA! Depositário infiel NÃO PODE MAIS SER PRESO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "PRISÃO CIVIL NO BRASIL HOJE: Só quem não paga pensão de comida para os filhos!",
    "porqueErrou": {
      "0": "Honorários advocatícios possuem natureza alimentar trabalhista, mas inadimplemento não enseja prisão civil.",
      "1": "A prisão do depositário infiel é expressamente PROIBIDA pela Súmula Vinculante nº 25 do STF.",
      "3": "Dívidas fiscais e tributárias são cobradas via execução fiscal, sendo vedada a coerção corporal.",
      "4": "Fiador responde patrimonialmente, nunca com privação de liberdade."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não cabe prisão civil por honorários advocatícios.",
      "B": "Incorreta. Depositário infiel não pode mais ser preso (Súmula Vinculante 25).",
      "C": "Correta. Apenas a prisão do devedor de pensão alimentícia é admitida no Brasil.",
      "D": "Incorreta. Não existe prisão civil por dívidas tributárias.",
      "E": "Incorreta. O fiador responde com seus bens, jamais com a liberdade."
    }
  },
  {
    "id": "dh_psj_004",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Direito à Vida e Pena de Morte (Art. 4º)",
    "question": "Sobre o Direito à Vida disciplinado no Artigo 4º da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica), assinale a afirmativa CORRETA:",
    "options": [
      "O direito à vida é protegido por lei e, em geral, desde o momento da concepção.",
      "Os países que já aboliram a pena de morte podem restabelecê-la a qualquer tempo mediante lei ordinária de iniciativa do chefe do Executivo.",
      "A pena de morte é plenamente admitida para a punição de delitos políticos e crimes comuns conexos.",
      "A aplicação de pena de morte é expressamente permitida para pessoas que tinham menos de 18 anos à data do delito, desde que maiores de 16 anos.",
      "A pena de morte pode ser aplicada a mulheres em estado de gravidez se o crime praticado tiver resultado na morte de duas ou mais vítimas."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 4º, item 1 da CADH: 'Toda pessoa tem o direito de que se respeite sua vida. Esse direito deve ser protegido pela lei e, em geral, desde o momento da concepção'. A CADH proíbe o restabelecimento da pena de morte para quem a aboliu e veda sua aplicação a menores de 18 anos, maiores de 70 anos e grávidas.",
    "fundamentacaoLegal": "Artigo 4º da Convenção Americana sobre Direitos Humanos.",
    "hint": "Vida: protegida por lei e 'em geral, desde o momento da concepção'. Jamais pena de morte para grávidas e menores de 18!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "REGRA DE OURO CADH: Vedada pena de morte para <18 anos, >70 anos, gestantes e crimes políticos!",
    "porqueErrou": {
      "1": "Art. 4º, item 3: Não se pode restabelecer a pena de morte nos Estados que a hajam abolido (princípio da vedação do retrocesso).",
      "2": "Art. 4º, item 4: Em nenhum caso pode a pena de morte ser aplicada por delitos políticos.",
      "3": "Art. 4º, item 5: Não se deve impor a pena de morte a pessoas que, no momento da perpetração do delito, eram menores de dezoito anos.",
      "4": "Art. 4º, item 5: Tampouco se deve aplicar a pena de morte a mulheres em estado de gravidez."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 4º, item 1 protege a vida pela lei e, em geral, desde o momento da concepção.",
      "B": "Incorreta. É proibido restabelecer a pena de morte uma vez abolida.",
      "C": "Incorreta. É expressamente vedada a pena de morte por delitos políticos.",
      "D": "Incorreta. Menores de 18 anos jamais podem sofrer pena de morte sob a CADH.",
      "E": "Incorreta. É vedada a pena de morte para mulheres grávidas em qualquer hipótese."
    }
  },
  {
    "id": "dh_psj_005",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Audiência de Custódia e Liberdade Pessoal (Art. 7º)",
    "question": "Nos termos do Artigo 7º, item 5, do Pacto de São José da Costa Rica, 'toda pessoa detida ou retida deve ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada pela lei a exercer funções judiciais'. Esse mandamento do Pacto deu origem, no processo penal brasileiro, ao instituto da:",
    "options": [
      "Delação premiada com suspensão condicional da pena.",
      "Audiência de custódia, realizada no prazo legal de 24 horas após a lavratura da prisão em flagrante.",
      "Revogação definitiva do inquérito policial e transferência para juizado de conciliação sumária.",
      "Conversão automática de todo flagrante em prisão preventiva de natureza perpétua.",
      "Perícia papiloscópica prévia antes de qualquer oitiva perante o Ministério Público."
    ],
    "correctIndex": 1,
    "explanation": "O art. 7º, item 5 da CADH fundamentou a implementação obrigatória da AUDIÊNCIA DE CUSTÓDIA no Brasil (Resolução 213/CNJ, decisão do STF na ADPF 347 e posterior incorporação ao art. 310 do CPP pelo Pacote Anticrime). O preso em flagrante deve ser apresentado ao juiz em até 24 horas.",
    "fundamentacaoLegal": "Art. 7º, item 5 da CADH; STF ADPF 347 e Art. 310 do CPP.",
    "hint": "Sem demora à presença do juiz = AUDIÊNCIA DE CUSTÓDIA (24 horas após a prisão).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "PRESO EM FLAGRANTE -> 24H -> JUIZ NA AUDIÊNCIA DE CUSTÓDIA (Evita tortura e avalia a prisão)!",
    "porqueErrou": {
      "0": "Colaboração premiada é meio de obtenção de prova previsto na Lei 12.850/13.",
      "2": "A audiência de custódia não extingue o inquérito policial.",
      "3": "No Brasil vigora o princípio da presunção de inocência; prisão preventiva nunca é automática nem perpétua.",
      "4": "Perícia papiloscópica é ato pericial de identificação criminal, não o ato judicial do art. 7.5."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Delação premiada é instituto de cooperação probatória.",
      "B": "Correta. A audiência de custódia concretiza a garantia do art. 7º, 5 da CADH no prazo de 24h.",
      "C": "Incorreta. Não há extinção de inquérito policial na audiência de custódia.",
      "D": "Incorreta. A conversão em preventiva depende de requisitos cautelares fundamentados.",
      "E": "Incorreta. O direito fundamental tutelado é o contato imediato do custodiado com o juiz."
    }
  },
  {
    "id": "dh_psj_006",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Garantias Judiciais (Art. 8º) e Duplo Grau",
    "question": "O Artigo 8º da Convenção Americana sobre Direitos Humanos elenca o rol de garantias judiciais mínimas que devem ser asseguradas a qualquer pessoa acusada de delito penal. Entre tais garantias expressas no texto da Convenção, NÃO se inclui:",
    "options": [
      "O direito de recorrer da sentença para juiz ou tribunal superior (duplo grau de jurisdição).",
      "O direito de não ser obrigado a depor contra si mesma, nem a confessar-se culpada (nemo tenetur se detegere).",
      "A possibilidade de utilização de confissão obtida mediante coação física ou psicológica quando o crime envolver organização criminosa.",
      "O direito do acusado de ser assistido gratuitamente por um tradutor ou intérprete, se não compreender ou não falar a língua do tribunal.",
      "A comunicação prévia e pormenorizada ao acusado da imputação formulada contra ele."
    ],
    "correctIndex": 2,
    "explanation": "O art. 8º, item 3 da CADH determina de forma categórica: 'A confissão do acusado só é válida se feita sem coação de qualquer natureza'. Tortura ou coação anulam inteiramente a confissão, não havendo exceção para crimes graves ou organizações criminosas.",
    "fundamentacaoLegal": "Artigo 8º, item 3 da Convenção Americana sobre Direitos Humanos.",
    "hint": "Confissão sob coação é SEMPRE INVÁLIDA e NULA, para qualquer tipo de crime!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "COAÇÃO NUNCA É VÁLIDA: Prova ilícita contamina o processo (Frutos da Árvore Envenenada)!",
    "porqueErrou": {
      "0": "O duplo grau de jurisdição está expressamente previsto no art. 8º, item 2, alínea 'h' da CADH.",
      "1": "A não autoincriminação está expressa no art. 8º, item 2, alínea 'g' da CADH.",
      "3": "O direito a tradutor/intérprete está expresso no art. 8º, item 2, alínea 'a' da CADH.",
      "4": "A comunicação prévia da acusação está expressa no art. 8º, item 2, alínea 'b' da CADH."
    },
    "analiseAlternativas": {
      "A": "Incorreta para o enunciado. O recurso para tribunal superior é garantia judicial expressa.",
      "B": "Incorreta para o enunciado. A vedação à autoincriminação é garantia judicial expressa.",
      "C": "Correta (gabarito). O Pacto veda terminantemente confissões coagidas sob qualquer pretexto.",
      "D": "Incorreta para o enunciado. O intérprete gratuito é garantia judicial expressa.",
      "E": "Incorreta para o enunciado. A comunicação prévia da imputação é garantia judicial expressa."
    }
  },
  {
    "id": "dh_psj_007",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Cláusula de Suspensão de Garantias (Art. 27)",
    "question": "O Artigo 27 da Convenção Americana sobre Direitos Humanos autoriza que os Estados Partes suspendam temporariamente certas garantias em caso de guerra, de perigo público ou de outra emergência que ameace a sua independência ou segurança. Contudo, o § 2º desse artigo estabelece um rol de DIREITOS INDERROGÁVEIS que JAMAIS podem ser suspensos, mesmo nessas situações extraordinárias. NÃO pode ser suspenso sob hipótese alguma:",
    "options": [
      "A inviolabilidade do domicílio.",
      "A liberdade de locomoção interestadual de bens e mercadorias.",
      "O direito à integridade pessoal e a proibição da tortura e de tratamentos cruéis ou degradantes.",
      "O direito de reunião pacífica sem armas em praça pública.",
      "O direito de sigilo das correspondências e comunicações telegráficas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 27, item 2 da CADH proíbe a suspensão de: direito à vida (art. 4º), integridade pessoal e vedação à tortura (art. 5º), proibição da escravidão (art. 6º), princípio da legalidade e retroatividade (art. 9º), liberdade de consciência/religião (art. 12), proteção da família (art. 17), direito ao nome (art. 18), direitos da criança (art. 19), nacionalidade (art. 20) e direitos políticos (art. 23).",
    "fundamentacaoLegal": "Artigo 27, item 2 da Convenção Americana sobre Direitos Humanos.",
    "hint": "Direitos Inderrogáveis: Vida, Não Tortura, Não Escravidão, Legalidade, Nome, Criança, Nacionalidade.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "INDERROGÁVEIS DA CADH: Vida, Não Torturar, Não Escravizar, Legalidade Penal e Nome!",
    "porqueErrou": {
      "0": "Inviolabilidade de domicílio pode ser excepcionada em estado de defesa ou sítio.",
      "1": "Liberdade de locomoção e circulação pode ser restringida em situações de calamidade ou toque de recolher.",
      "3": "Direito de reunião pode ser suspenso temporariamente durante estado de defesa e sítio.",
      "4": "Sigilo das comunicações pode sofrer restrições em estado de sítio ou defesa."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Domicílio pode sofrer restrição em estado de exceção constitucional.",
      "B": "Incorreta. Locomoção pode sofrer restrições temporárias em estado de sítio.",
      "C": "Correta. A integridade física e a proibição de tortura são direitos inderrogáveis universais.",
      "D": "Incorreta. Direito de reunião pode ser suspenso em estado de emergência pública.",
      "E": "Incorreta. Sigilo de correspondência pode sofrer restrição justificada em estado de sítio."
    }
  },
  {
    "id": "dh_psj_008",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Sistema Interamericano • Competência da Comissão (CIDH) vs Corte (Corte IDH)",
    "question": "O Sistema Interamericano de Proteção dos Direitos Humanos possui dois órgãos fundamentais com competências distintas: a Comissão Interamericana (CIDH, sediada em Washington) e a Corte Interamericana (Corte IDH, sediada em San José da Costa Rica). A respeito do ACESSO À CORTE INTERAMERICANA, assinale a regra correta fixada no Artigo 61 da Convenção:",
    "options": [
      "Qualquer cidadão brasileiro que tenha seus direitos violados pode peticionar e ajuizar ação diretamente perante a Corte Interamericana de Direitos Humanos.",
      "Somente os Estados Partes e a Comissão Interamericana têm o direito de submeter um caso à decisão da Corte Interamericana.",
      "Apenas o Ministério Público da União do país demandado possui legitimidade ativa exclusiva para provocar a Corte IDH.",
      "A Corte Interamericana julga exclusivamente controvérsias de natureza comercial e aduaneira entre os países membros do Mercosul.",
      "As decisões da Corte Interamericana têm caráter meramente consultivo, não vinculando os tribunais judiciais dos Estados membros."
    ],
    "correctIndex": 1,
    "explanation": "Regra de ouro da CADH (Art. 61, item 1): SOMENTE OS ESTADOS PARTES E A COMISSÃO têm o direito de submeter um caso à decisão da Corte IDH. O indivíduo ou ONG faz a petição/denúncia perante a Comissão (CIDH em Washington); se não houver acordo, a Comissão é quem leva o caso a julgamento na Corte IDH.",
    "fundamentacaoLegal": "Artigo 61, item 1 da Convenção Americana sobre Direitos Humanos.",
    "hint": "Indivíduo NÃO processa direto na Corte! O cidadão vai à Comissão (Washington) e esta leva à Corte (San José).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "INDIVÍDUO -> COMISSÃO (CIDH). QUEM VAI À CORTE -> SÓ ESTADOS E A COMISSÃO!",
    "porqueErrou": {
      "0": "Indivíduos e ONGs não têm jus postulandi direto perante a Corte IDH (apenas perante a Comissão).",
      "2": "O Ministério Público nacional não é legitimado exclusivo perante os órgãos da OEA.",
      "3": "A Corte IDH é tribunal de Direitos Humanos, não tribunal de controvérsias comerciais do Mercosul.",
      "4": "As decisões contenciosas da Corte IDH são definitivas, inapeláveis e têm força executiva obrigatória nos Estados partes."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O indivíduo peticiona perante a Comissão (CIDH), e não diretamente perante a Corte.",
      "B": "Correta. O art. 61.1 expressamente prevê que somente Estados Partes e a Comissão podem submeter casos à Corte IDH.",
      "C": "Incorreta. O MP não detém legitimidade exclusiva no sistema interamericano.",
      "D": "Incorreta. A Corte IDH julga direitos fundamentais da pessoa humana, não temas aduaneiros.",
      "E": "Incorreta. As sentenças contenciosas da Corte IDH são juridicamente vinculantes para o Estado."
    }
  },
  {
    "id": "dh_psj_009",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Princípio da Legalidade e da Retroatividade Penal Benéfica (Art. 9º)",
    "question": "Sobre o Princípio da Legalidade e da Retroatividade Penal expresso no Artigo 9º do Pacto de São José da Costa Rica, assinale a alternativa que reproduz fielmente a norma internacional:",
    "options": [
      "A lei penal nova mais gravosa retroagirá sempre que o crime envolver atentado contra a ordem constitucional militar.",
      "Ninguém pode ser condenado por ações ou omissões que, no momento em que forem cometidas, não sejam delituosas, segundo o direito aplicável. Se, depois da perpetração do delito, a lei estipular a imposição de pena mais leve, o delinquente deverá dela beneficiar-se.",
      "O juiz poderá criar tipos penais incriminadores por analogia judicial se o fato for considerado socialmente reprovável pela comunidade.",
      "A pena cominada na sentença condenatória irrecorrível não sofrerá qualquer alteração, ainda que sobrevenha lei abolitiva do crime.",
      "O princípio da insignificância penal é expressamente vedado nas ações que envolvam agentes públicos de segurança militar."
    ],
    "correctIndex": 1,
    "explanation": "O art. 9º da CADH consagra o princípio da reserva legal (nullum crimen, nulla poena sine lege praevia) e a retroatividade da lei penal mais benigna (novatio legis in mellius e abolitio criminis), assegurando que o réu se beneficie da lei posterior mais branda.",
    "fundamentacaoLegal": "Artigo 9º da Convenção Americana sobre Direitos Humanos e Art. 5º, XL da CF/88.",
    "hint": "Art. 9º da CADH = Legalidade estrita + A lei penal benéfica SEMPRE RETROAGE para beneficiar o réu!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "LEI PENAL MAIS LEVE: Sempre alcança o réu, ontem, hoje e amanhã!",
    "porqueErrou": {
      "0": "A lei penal prejudicial (in pejus) NUNCA retroage, em nenhuma modalidade de crime.",
      "2": "É vedada a criação de crimes por analogia (reserva legal estrita).",
      "3": "A lei abolitiva (abolitio criminis) cessa todos os efeitos penais, mesmo após o trânsito em julgado.",
      "4": "O princípio da insignificância é construção dogmática compatível com o direito penal de intervenção mínima."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Lei mais severa não retroage sob nenhuma circunstância.",
      "B": "Correta. Reproduz fielmente a redação do Artigo 9º da Convenção Americana.",
      "C": "Incorreta. Analogia in malam partem é proibida pelo princípio da legalidade.",
      "D": "Incorreta. A lei benéfica retroage mesmo com trânsito em julgado.",
      "E": "Incorreta. Não existe vedação ao princípio da insignificância no texto da CADH."
    }
  },
  {
    "id": "dh_psj_010",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Liberdade de Expressão e Direito de Resposta (Arts. 13 e 14)",
    "question": "No tocante à Liberdade de Pensamento e de Expressão e ao Direito de Resposta nos Artigos 13 e 14 da Convenção Americana sobre Direitos Humanos, é CORRETO afirmar que:",
    "options": [
      "O exercício da liberdade de pensamento e de expressão está sujeito à censura prévia por órgão governamental de segurança pública.",
      "O direito de resposta aplica-se apenas no caso de ofensas veiculadas em livros acadêmicos impressos, excluindo rádio, televisão e jornais.",
      "O exercício da liberdade de expressão não pode estar sujeito a censura prévia, mas a responsabilidades ulteriores expressamente fixadas pela lei para assegurar o respeito aos direitos de outrem.",
      "A propaganda em favor da guerra e a apologia ao ódio nacional ou religioso são manifestações protegidas pela liberdade de expressão irrestrita.",
      "O direito de manifestação pode ser restringido por monopólios estatais sobre frequências de radiodifusão como forma de controle ideológico."
    ],
    "correctIndex": 2,
    "explanation": "O art. 13, item 2 da CADH veda terminantemente a censura prévia. Permite apenas responsabilidades posteriores (indenização, direito de resposta e persecução penal por calúnia/difamação). Ademais, o art. 13.5 proíbe qualquer propaganda de guerra e apologia ao ódio.",
    "fundamentacaoLegal": "Artigos 13 e 14 da Convenção Americana sobre Direitos Humanos.",
    "hint": "CADH: CENSURA PRÉVIA NUNCA! Apenas responsabilidade posterior fixada em lei.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "SEM CENSURA PRÉVIA: Fale livremente, mas responda civil e criminalmente pelos excessos!",
    "porqueErrou": {
      "0": "A censura prévia é terminantemente proibida pela CADH.",
      "1": "O direito de resposta aplica-se a qualquer veículo de difusão legalmente regulamentado.",
      "3": "Apologia ao ódio e propaganda de guerra são expressamente proibidas por lei pelo art. 13, item 5.",
      "4": "O art. 13, item 3 veda o controle abusivo de frequências radiofônicas para calar a imprensa."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Censura prévia é manifestamente proibida.",
      "B": "Incorreta. O direito de resposta abrange todos os meios de comunicação social.",
      "C": "Correta. Veda censura prévia e autoriza apenas responsabilidades ulteriores legalmente delimitadas.",
      "D": "Incorreta. Discursos de ódio e propaganda bélica são considerados ilícitos internacionais.",
      "E": "Incorreta. Monopólios de telecomunicações para limitar a expressão são proibidos pelo art. 13.3."
    }
  },
  {
    "id": "dh_psj_011",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Indenização por Erro Judiciário (Art. 10)",
    "question": "Segundo o Artigo 10 da Convenção Americana sobre Direitos Humanos, toda pessoa tem direito a ser indenizada pelo Estado conforme a lei no caso de:",
    "options": [
      "Ter sido absolvida por falta de provas testemunhais no tribunal do júri.",
      "Haver sido condenada em sentença transitada em julgado por erro judiciário.",
      "Ter seu processo penal concluído em prazo superior a 6 meses.",
      "Sofrer abordagem policial fundamentada em fundada suspeita na via pública.",
      "Não ter sido contemplada por anistia ou indulto presidencial concedido pelo Executivo."
    ],
    "correctIndex": 1,
    "explanation": "O art. 10 da CADH estabelece expressamente: 'Toda pessoa tem direito de ser indenizada conforme a lei, no caso de haver sido condenada em sentença transitada em julgado por erro judiciário'. Dispositivo em plena simetria com o Art. 5º, LXXV da CF/88.",
    "fundamentacaoLegal": "Artigo 10 da CADH e Art. 5º, LXXV da CF/88.",
    "hint": "Indenização por Erro Judiciário: Condenação injusta com trânsito em julgado gera dever estatal de indenizar.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "ERRO JUDICIÁRIO + CONDENAÇÃO DEFINITIVA = DIREITO À INDENIZAÇÃO DO ESTADO!",
    "porqueErrou": {
      "0": "Absolvição por falta de provas (in dubio pro reo) não gera indenização automática, salvo prisão manifestamente ilegal comprovada.",
      "2": "A duração razoável do processo pode gerar reparação por danos morais, mas o art. 10 trata especificamente do erro judiciário em condenação.",
      "3": "Busca pessoal com fundada suspeita é ato administrativo legítimo de polícia ostensiva (art. 244 do CPP).",
      "4": "Anistia e indulto são atos discricionários de política criminal, não gerando direito subjetivo à indenização."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Absolvição por insuficiência probatória em regra não enseja reparação civil automática.",
      "B": "Correta. Texto literal do art. 10: condenada em sentença transitada em julgado por erro judiciário.",
      "C": "Incorreta. O art. 10 vincula a indenização expressamente à condenação por erro judiciário.",
      "D": "Incorreta. A abordagem legal de trânsito ou segurança não gera dever de indenizar.",
      "E": "Incorreta. Indulto não se confunde com erro judiciário."
    }
  },
  {
    "id": "dh_psj_012",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Condições de Detenção e Separação de Presos (Art. 5º)",
    "question": "No que tange ao Direito à Integridade Pessoal e ao tratamento de detentos (Artigo 5º do Pacto de São José da Costa Rica), qual diretriz é expressamente imposta aos órgãos prisionais e de segurança dos Estados Partes?",
    "options": [
      "Os presos civis e militares condenados devem cumprir pena no mesmo estabelecimento para evitar privilégios.",
      "Os acusados devem ser separados dos condenados, salvo em circunstâncias excepcionais, e devem ser submetidos a tratamento adequado à sua condição de pessoas não condenadas.",
      "Os menores de idade infratores devem cumprir medidas em celas comuns com os maiores de idade para favorecer a ressocialização precoce.",
      "A pena privativa de liberdade pode passar da pessoa do condenado e atingir o patrimônio e os direitos políticos dos seus descendentes diretos.",
      "A incomunicabilidade do preso em regime disciplinar pode ser prorrogada indefinidamente sem prévio controle judicial."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, item 4 da CADH determina que os réus presos provisórios (acusados) devem ficar separados dos condenados com sentença definitiva. O item 5 determina que menores devem ser separados de adultos, e o item 3 consagra o princípio da intranscendência da pena (não passa da pessoa do infrator).",
    "fundamentacaoLegal": "Artigo 5º, itens 3, 4 e 5 da Convenção Americana sobre Direitos Humanos.",
    "hint": "Separação obrigatória: Acusados separados de condenados; Menores separados de adultos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "SEPARAÇÃO PRISIONAL CADH: Preso provisório não se mistura com condenado; menor não se mistura com adulto!",
    "porqueErrou": {
      "0": "Militares e civis possuem regimes e estabelecimentos próprios com respeito à hierarquia e disciplina.",
      "2": "O art. 5º, item 5 exige expressamente que os menores sejam separados dos adultos.",
      "3": "A pena é personalíssima (princípio da intranscendência da pena); jamais passa da pessoa do condenado.",
      "4": "Incomunicabilidade perpétua ou indefinida viola a vedação de penas cruéis e degradantes."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Militares têm estabelecimentos prisionais próprios (presídio militar).",
      "B": "Correta. O art. 5º, 4 exige a separação entre acusados não julgados e presos condenados.",
      "C": "Incorreta. Menores devem ficar em instalações separadas (art. 5º, 5).",
      "D": "Incorreta. Princípio da pessoalidade/intranscendência da pena proíbe que atinja terceiros.",
      "E": "Incorreta. Viola frontalmente a vedação de penas desumanas."
    }
  },
  {
    "id": "dh_psj_013",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Comissão Interamericana de Direitos Humanos (CIDH)",
    "question": "Sobre a composição e o funcionamento da Comissão Interamericana de Direitos Humanos (CIDH), órgão integrante do Sistema Interamericano sediado em Washington, assinale a opção correta:",
    "options": [
      "É composta por 15 membros de carreira militar das forças armadas da OEA, eleitos vitaliciamente.",
      "É composta por 7 membros, que devem ser pessoas de alta autoridade moral e reconhecido saber em matéria de direitos humanos, eleitos a título pessoal pela Assembleia Geral da OEA para mandato de 4 anos, permitida uma recondução.",
      "Tem competência exclusiva para julgar litígios comerciais e fixar indenizações aduaneiras de natureza tributária internacional.",
      "Suas recomendações têm força imediata de sentença penal condenatória para determinar a prisão de chefes de Estado.",
      "Rejeita liminarmente qualquer petição apresentada por cidadãos individuais ou organizações não governamentais."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os arts. 34 a 37 da CADH: A Comissão Interamericana compõe-se de 7 membros, eleitos a título pessoal (representam a OEA e não seus países) para mandato de 4 anos pela Assembleia Geral da OEA, sendo permitida UMA única recondução. Qualquer pessoa ou ONG pode peticionar perante a CIDH.",
    "fundamentacaoLegal": "Artigos 34, 36 e 37 da Convenção Americana sobre Direitos Humanos.",
    "hint": "CIDH: 7 membros, mandato de 4 anos, permitida UMA recondução. Cidadãos e ONGs podem peticionar!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "COMISSÃO (CIDH): 7 MEMBROS | 4 ANOS | SEDE EM WASHINGTON | RECEBE PETIÇÃO DE QUALQUER CIDADÃO!",
    "porqueErrou": {
      "0": "Os membros são 7 civis especialistas eleitos a título pessoal, sem vitaliciedade.",
      "2": "A matéria é de direitos humanos, não aduaneira ou comercial.",
      "3": "A Comissão emite relatórios, medidas cautelares e recomendações; apenas a Corte IDH profere sentenças jurisdicionais.",
      "4": "O art. 44 consagra o direito de petição de qualquer pessoa ou ONG legalmente reconhecida."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São 7 membros com mandato transitório de 4 anos.",
      "B": "Correta. Reproduz os artigos 34 e 37 da CADH (7 membros, 4 anos, uma reeleição).",
      "C": "Incorreta. Trata exclusivamente de direitos humanos.",
      "D": "Incorreta. A Comissão não aplica penas privativas de liberdade.",
      "E": "Incorreta. A legitimidade para peticionar na Comissão pertence a qualquer pessoa ou ONG."
    }
  },
  {
    "id": "dh_psj_014",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Corte Interamericana de Direitos Humanos (Corte IDH)",
    "question": "A respeito da Corte Interamericana de Direitos Humanos (Corte IDH), órgão jurisdicional autônomo do Sistema Interamericano sediado em San José da Costa Rica, é correto afirmar:",
    "options": [
      "Compõe-se de 7 juízes, nacionais dos Estados membros da OEA, eleitos pela Assembleia Geral para mandato de 6 anos, permitida uma reeleição.",
      "Seus juízes são nomeados livremente pelo Presidente do Brasil para exercerem a presidência do tribunal em caráter hereditário.",
      "As sentenças da Corte IDH admitem recurso de apelação perante o Conselho de Segurança da ONU.",
      "A Corte IDH só pode apreciar denúncias de crimes de trânsito e infrações administrativas ambientais leves.",
      "O Brasil não reconhece a jurisdição contenciosa da Corte IDH, tendo feito reserva total à sua competência."
    ],
    "correctIndex": 0,
    "explanation": "Conforme os arts. 52 a 54 da CADH: A Corte IDH é composta por 7 juízes de alta qualificação moral e jurídica, eleitos para mandatos de 6 ANOS pela Assembleia Geral da OEA, permitida uma reeleição. O Brasil reconheceu expressamente a competência da Corte IDH em 1998 (Decreto 4.463/2002). Suas sentenças são definitivas e inapeláveis.",
    "fundamentacaoLegal": "Artigos 52, 53, 54 e 67 da CADH; Decreto nº 4.463/2002.",
    "hint": "Corte IDH (San José): 7 juízes, mandato de 6 anos, 1 reeleição. Sentenças definitivas e vinculantes!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "DIFERENÇA ESSENCIAL: COMISSÃO = 4 ANOS (7 membros) | CORTE IDH = 6 ANOS (7 juízes)!",
    "porqueErrou": {
      "1": "Os juízes são eleitos pelos Estados membros na Assembleia Geral da OEA por escrutínio secreto.",
      "2": "Art. 67 da CADH: 'A sentença da Corte é definitiva e inapelável'.",
      "3": "A Corte julga violações graves cometidas por Estados contra a Convenção Americana.",
      "4": "O Brasil reconheceu solenemente a competência obrigatória da Corte IDH pelo Decreto nº 4.463/2002."
    },
    "analiseAlternativas": {
      "A": "Correta. A Corte possui 7 juízes com mandato de 6 anos, permitida uma reeleição.",
      "B": "Incorreta. Eleição democrática multilateral na OEA por escrutínio secreto.",
      "C": "Incorreta. As decisões da Corte IDH são definitivas e inapeláveis.",
      "D": "Incorreta. Julga graves violações a direitos humanos.",
      "E": "Incorreta. O Brasil está plenamente sujeito à jurisdição da Corte IDH desde 1998."
    }
  },
  {
    "id": "dh_psj_015",
    "categoryId": "humanos_leis",
    "bloco": "bloco_3",
    "materiaNome": "Direitos Humanos",
    "topicoEdital": "Pacto de São José da Costa Rica (CADH) • Esgotamento Prévio dos Recursos Internos",
    "question": "Para que uma petição ou comunicação sobre suposta violação de direitos humanos seja admitida pela Comissão Interamericana (CIDH), o Artigo 46 da CADH exige em regra:",
    "options": [
      "O prévio pagamento de taxa em dólares estipulada pela Secretaria Geral da OEA.",
      "Que hajam sido interpostos e esgotados os recursos da jurisdição interna do Estado, de acordo com os princípios de Direito Internacional geralmente reconhecidos.",
      "A expressa autorização do Procurador-Geral da República do país contra o qual se formula a queixa.",
      "Que o fato tenha ocorrido há mais de 10 anos da data de formulação da denúncia.",
      "Que a vítima renuncie de antemão a qualquer indenização pecuniária perante o juízo nacional."
    ],
    "correctIndex": 1,
    "explanation": "Regra basilar do Sistema Interamericano (Princípio da Subsidiariedade): antes de levar o Estado perante a CIDH, a vítima deve ESGOTAR OS RECURSOS INTERNOS da jurisdição nacional (art. 46, item 1, 'a'), ressalvadas as hipóteses de ausência de devido processo ou denegação de justiça no país.",
    "fundamentacaoLegal": "Artigo 46, item 1, alínea 'a' da CADH.",
    "hint": "Subsidiariedade: Primeiro tenta na justiça do seu país; esgotou tudo sem solução, vai para a CIDH!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_direitos_humanos",
    "dicaMacete": "REGRA DE OURO: Esgotar a justiça interna primeiro, antes de recorrer à OEA!",
    "porqueErrou": {
      "0": "O acesso aos órgãos do sistema interamericano é inteiramente gratuito para os cidadãos.",
      "2": "A vítima não precisa de autorização do governo contra o qual está denunciando.",
      "3": "Pelo art. 46, 1, 'b', a petição deve ser apresentada dentro do prazo de 6 meses da decisão interna definitiva.",
      "4": "O sistema internacional visa exatamente garantir a integral reparação e indenização da vítima."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O sistema de proteção é acessível e gratuito para os hipossuficientes.",
      "B": "Correta. É pressuposto de admissibilidade o esgotamento dos recursos da jurisdição interna.",
      "C": "Incorreta. A denúncia independe de concordância governamental.",
      "D": "Incorreta. O prazo após a decisão final interna é de 6 meses.",
      "E": "Incorreta. O direito à reparação civil indenizatória é plenamente resguardado."
    }
  }
];
