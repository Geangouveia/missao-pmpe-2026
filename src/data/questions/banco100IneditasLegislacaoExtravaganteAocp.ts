import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 100 QUESTÕES INÉDITAS DE LEGISLAÇÃO EXTRAVAGANTE (INSTITUTO AOCP PMPE)
 * 100% fiéis ao Edital Oficial da PMPE 2026.
 * Abrange:
 * - Lei nº 13.869/2019 (Abuso de Autoridade)
 * - Lei nº 11.343/2006 (Lei de Drogas)
 * - Lei nº 10.826/2003 (Estatuto do Desarmamento)
 * - Lei nº 8.072/1990 (Crimes Hediondos)
 * - Lei nº 9.455/1997 (Lei de Tortura)
 * - Lei nº 11.340/2006 (Lei Maria da Penha)
 * - Lei nº 9.503/1997 (Crimes de Trânsito - CTB)
 * - Lei nº 8.069/1990 (ECA - Estatuto da Criança e do Adolescente)
 * - Leis nº 7.716/1989 & 14.532/2023 (Racismo e Injúria Racial)
 * - Lei nº 12.850/2013 (Organizações Criminosas)
 */
export const BANCO_100_LEGISLAO_EXTRAVAGANTE_AOCP: QuizQuestion[] = [
  {
    "id": "leg_ext_inedita_100_001",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Dolo Específico e Elemento Subjetivo (Art. 1º, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q001] De acordo com o art. 1º, § 1º da Lei nº 13.869/2019 (Lei de Abuso de Autoridade), as condutas tipificadas somente configuram crime de abuso de autoridade quando praticadas com a finalidade específica de:",
    "options": [
      "Causar prejuízo patrimonial direto ao erário público superior a 50 salários mínimos.",
      "Contrariar súmula vinculante do Supremo Tribunal Federal de forma reiterada.",
      "Descumprir ordem administrativa de superior hierárquico durante serviço ostensivo.",
      "Prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.",
      "Exercer o policiamento ostensivo sem a identificação funcional visível no uniforme militar."
    ],
    "correctIndex": 3,
    "explanation": "O art. 1º, § 1º da Lei nº 13.869/2019 exige expressamente o elemento subjetivo especial do tipo (animus específico): finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal. A lei não admite modalidade culposa nem dolo genérico.",
    "fundamentacaoLegal": "Art. 1º, § 1º da Lei nº 13.869/2019.",
    "hint": "Exige finalidade específica: prejudicar, beneficiar a si/terceiro, ou mero capricho/satisfação pessoal!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Abuso exige 'Dolo Especial': Prejudicar, Beneficiar, Capricho ou Satisfação Pessoal.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 1º, § 1º da Lei nº 13.869/2019 exige expressamente o elemento subjetivo especial do tipo (animus específico): finalidade de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho ou satisfação pessoal. A lei não admite modalidade culposa nem dolo genérico.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_002",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Crime de Hermenêutica (Art. 1º, § 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q002] O art. 1º, § 2º da Lei nº 13.869/2019 veda expressamente o chamado 'crime de hermenêutica' ao prever expressamente que:",
    "options": [
      "Os magistrados e membros do Ministério Público são imunes à incidência da Lei de Abuso de Autoridade.",
      "A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.",
      "A interpretação restritiva de direitos fundamentais é presumida como ato ilícito culposo.",
      "Apenas a autoridade com foro por prerrogativa de função pode ter sua interpretação jurídica questionada.",
      "A decisão jurídica que contrariar jurisprudência dominante enseja prisão preventiva do prolator."
    ],
    "correctIndex": 1,
    "explanation": "O art. 1º, § 2º da Lei nº 13.869/2019 estabelece que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade, blindando a atividade judicante e investigativa fundamentada.",
    "fundamentacaoLegal": "Art. 1º, § 2º da Lei nº 13.869/2019.",
    "hint": "Divergência na interpretação de lei ou na avaliação de fatos e provas NÃO é abuso!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Interpretação jurídica fundamentada nunca é crime de abuso de autoridade.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 1º, § 2º da Lei nº 13.869/2019 estabelece que a divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade, blindando a atividade judicante e investigativa fundamentada.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_003",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Sujeitos Ativos do Crime (Art. 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q003] No que tange aos sujeitos ativos dos crimes de abuso de autoridade previstos na Lei nº 13.869/2019, assinale a afirmativa correta:",
    "options": [
      "Apenas policiais militares e civis da ativa podem figurar como sujeitos ativos dos crimes da referida lei.",
      "Os membros do Poder Legislativo e do Poder Judiciário não podem ser autores de abuso de autoridade.",
      "É sujeito ativo qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes, inclusive militares.",
      "Exige-se que o agente público perceba remuneração dos cofres públicos para ser considerado sujeito ativo.",
      "Agentes honoríficos e mesários eleitorais estão expressamente excluídos do conceito legal de agente público."
    ],
    "correctIndex": 2,
    "explanation": "Nos termos do art. 2º da Lei nº 13.869/2019, é sujeito ativo qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios, incluindo servidores civis, militares, comissionados ou sem remuneração (transitórios).",
    "fundamentacaoLegal": "Art. 2º da Lei nº 13.869/2019.",
    "hint": "Conceito amplíssimo: servidor ou não, remunerado ou não, civil ou militar!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Qualquer agente público investido de função pública responde por abuso.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. Nos termos do art. 2º da Lei nº 13.869/2019, é sujeito ativo qualquer agente público, servidor ou não, da administração direta, indireta ou fundacional de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios, incluindo servidores civis, militares, comissionados ou sem remuneração (transitórios).",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_004",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Ação Penal (Art. 3º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q004] A respeito da ação penal nos crimes tipificados na Lei de Abuso de Autoridade (Lei nº 13.869/2019), é correto afirmar que:",
    "options": [
      "Todos os crimes de abuso de autoridade processam-se exclusivamente mediante ação penal pública condicionada à representação do ofendido.",
      "A ação penal privada subsidiária da pública deverá ser proposta perante o Tribunal de Justiça no prazo decadencial de 30 dias.",
      "Trata-se de crimes de ação penal privada originária cuja legitimidade ativa é privativa da vítima.",
      "O Ministério Público não pode aditar a queixa-crime subsidiária nem intervir em todos os termos do processo.",
      "Os crimes previstos nesta Lei são de ação penal pública incondicionada, admitindo-se a ação penal privada subsidiária da pública se a denúncia não for intentada no prazo legal."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o art. 3º da Lei nº 13.869/2019: 'Os crimes previstos nesta Lei são de ação penal pública incondicionada. § 1º Será admitida ação privada subsidiária da pública se a ação penal não for intentada no prazo legal, cabendo ao MP aditar a queixa, intervir em todos os termos...', no prazo decadencial de 6 meses (art. 3º, § 2º).",
    "fundamentacaoLegal": "Art. 3º, caput e §§ 1º e 2º da Lei nº 13.869/2019.",
    "hint": "Regra: Pública incondicionada. Se o MP ficar inerte no prazo legal: cabe ação privada subsidiária!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Pública incondicionada com válvula de escape para ação privada subsidiária.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. Conforme o art. 3º da Lei nº 13.869/2019: 'Os crimes previstos nesta Lei são de ação penal pública incondicionada. § 1º Será admitida ação privada subsidiária da pública se a ação penal não for intentada no prazo legal, cabendo ao MP aditar a queixa, intervir em todos os termos...', no prazo decadencial de 6 meses (art. 3º, § 2º)."
    }
  },
  {
    "id": "leg_ext_inedita_100_005",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Efeitos da Condenação (Art. 4º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q005] Quanto aos efeitos da condenação previstos no art. 4º da Lei nº 13.869/2019, assinale a alternativa correta:",
    "options": [
      "A perda do cargo e da patente militar é efeito automático e decorre imediatamente da publicação da sentença penal condenatória.",
      "A inabilitação para o exercício de qualquer função pública tem prazo fixo e perpétuo de 10 anos.",
      "A perda do cargo e a inabilitação para o exercício de cargo público de 1 a 5 anos são efeitos não automáticos e condicionados à reincidência em crime de abuso de autoridade.",
      "O dever de indenizar o dano causado à vítima independe de requerimento expresso na denúncia ou queixa.",
      "O magistrado sentenciante não precisa declarar motivadamente na sentença a perda da função pública."
    ],
    "correctIndex": 2,
    "explanation": "Pelo art. 4º, parágrafo único da Lei nº 13.869/2019, a perda do cargo, mandato ou função pública e a inabilitação para o exercício de função pública por 1 a 5 anos NÃO são efeitos automáticos, devendo ser declarados motivadamente na sentença e são condicionados à ocorrência de reincidência em crime de abuso de autoridade.",
    "fundamentacaoLegal": "Art. 4º, parágrafo único da Lei nº 13.869/2019.",
    "hint": "Perda do cargo e inabilitação NÃO são automáticos: exigem reincidência em abuso e motivação na sentença!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Efeitos graves (perda e inabilitação) = Não automáticos + Exigem reincidência específica em abuso.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. Pelo art. 4º, parágrafo único da Lei nº 13.869/2019, a perda do cargo, mandato ou função pública e a inabilitação para o exercício de função pública por 1 a 5 anos NÃO são efeitos automáticos, devendo ser declarados motivadamente na sentença e são condicionados à ocorrência de reincidência em crime de abuso de autoridade.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_006",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Penas Restritivas de Direitos (Art. 5º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q006] As penas restritivas de direitos substitutivas das privativas de liberdade estabelecidas no art. 5º da Lei nº 13.869/2019 compreendem:",
    "options": [
      "Perda imediata do porte de arma funcional pelo período mínimo de 5 anos ininterruptos.",
      "Interdição temporária de frequentar repartições policiais civis e militares aos fins de semana.",
      "Prestação de serviços à comunidade ou a entidades públicas e suspensão do exercício do cargo, função ou mandato pelo prazo de 1 a 6 meses, com perda dos vencimentos e vantagens.",
      "Pagamento compulsório de pensão alimentícia mensal fixada em salários mínimos à vítima.",
      "Suspensão definitiva do direito de votar e ser votado em eleições sindicais e militares estaduais."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º da Lei nº 13.869/2019 prevê como penas restritivas de direitos: I - prestação de serviços à comunidade; II - suspensão do exercício do cargo, função ou mandato, pelo prazo de 1 a 6 meses, com a perda dos vencimentos e das vantagens. Podem ser aplicadas autônoma ou cumulativamente.",
    "fundamentacaoLegal": "Art. 5º, incisos I e II da Lei nº 13.869/2019.",
    "hint": "Suspensão de 1 a 6 meses COM perda dos vencimentos e vantagens!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Suspensão do cargo: 1 a 6 meses com prejuízo salarial total.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 5º da Lei nº 13.869/2019 prevê como penas restritivas de direitos: I - prestação de serviços à comunidade; II - suspensão do exercício do cargo, função ou mandato, pelo prazo de 1 a 6 meses, com a perda dos vencimentos e das vantagens. Podem ser aplicadas autônoma ou cumulativamente.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_007",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Constrangimento Ilegal de Preso (Art. 13)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q007] Nos termos do art. 13 da Lei nº 13.869/2019, constranger o preso ou detento, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a exibir-se ou ter seu corpo exibido à curiosidade pública, ou submeter-se a situação vexatória ou a constrangimento não autorizado em lei, sujeita o agente público à pena de:",
    "options": [
      "Reclusão, de 4 (quatro) a 8 (oito) anos, em regime obrigatoriamente fechado.",
      "Advertência disciplinar escrita e cassação imediata da condecoração militar.",
      "Detenção, de 1 (um) a 4 (quatro) anos, e multa, sem prejuízo da pena cominada à violência.",
      "Prestação de serviços comunitários aos finais de semana por até 30 dias.",
      "Multa administrativa cumulada com remoção compulsória de batalhão policial."
    ],
    "correctIndex": 2,
    "explanation": "O art. 13 da Lei nº 13.869/2019 comina expressamente a pena de detenção de 1 a 4 anos e multa, sem prejuízo da pena cominada à violência. É conduta proibida expor o preso à imprensa ou à curiosidade popular vexatória.",
    "fundamentacaoLegal": "Art. 13 da Lei nº 13.869/2019.",
    "hint": "Pena de detenção de 1 a 4 anos e multa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Exibir preso a vexame ou curiosidade pública = Detenção 1 a 4 anos + multa.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 13 da Lei nº 13.869/2019 comina expressamente a pena de detenção de 1 a 4 anos e multa, sem prejuízo da pena cominada à violência. É conduta proibida expor o preso à imprensa ou à curiosidade popular vexatória.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_008",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Violação de Domicílio (Art. 22)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q008] Conforme o art. 22, § 1º, inciso III da Lei nº 13.869/2019, incorre na mesma pena do crime de violação de domicílio quem cumpre mandado de busca e apreensão domiciliar após as:",
    "options": [
      "18h (dezoito horas) ou antes das 6h (seis horas).",
      "21h (vinte e uma horas) ou antes das 5h (cinco horas).",
      "20h (vinte horas) ou antes das 7h (sete horas).",
      "22h (vinte e duas horas) ou antes das 6h (seis horas).",
      "19h (dezenove horas) ou antes das 8h (oito horas)."
    ],
    "correctIndex": 1,
    "explanation": "O art. 22, § 1º, III da Lei nº 13.869/2019 pune expressamente quem 'cumpre mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas)'. Nesse intervalo é crime cumprir mandado judicial domiciliar.",
    "fundamentacaoLegal": "Art. 22, § 1º, III da Lei nº 13.869/2019.",
    "hint": "Horário noturno estrito da Lei de Abuso: das 21h às 05h da manhã!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Mandado judicial em domicílio: proibido das 21h às 5h.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 22, § 1º, III da Lei nº 13.869/2019 pune expressamente quem 'cumpre mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas)'. Nesse intervalo é crime cumprir mandado judicial domiciliar.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_009",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Divulgação de Gravação ou Intimidade (Art. 33)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q009] O policial que divulga gravação ou trecho de gravação sem relação com a prova que se pretenda produzir, expondo a intimidade ou a vida privada ou ferindo a honra ou a imagem do investigado ou acusado, comete crime punido com:",
    "options": [
      "Pena de reclusão de 6 (seis) a 12 (doze) anos e demissão imediata.",
      "Mera falta disciplinar leve sem repercussão na esfera penal militar ou comum.",
      "Pena privativa de liberdade restrita à prisão administrativa de 10 dias.",
      "Pena de detenção, de 1 (um) a 4 (quatro) anos, e multa.",
      "Censura verbal em boletim interno e retenção salarial por 15 dias."
    ],
    "correctIndex": 3,
    "explanation": "O art. 33 da Lei nº 13.869/2019 tipifica a divulgação de gravação ou trecho que exponha a intimidade ou a vida privada sem relação com a prova, com pena de detenção de 1 a 4 anos e multa.",
    "fundamentacaoLegal": "Art. 33 da Lei nº 13.869/2019.",
    "hint": "Expor intimidade com vazamento de vídeos ou áudios = Detenção de 1 a 4 anos e multa!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Vazar áudio/vídeo íntimo sem relevância probatória é crime com detenção de 1 a 4 anos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 33 da Lei nº 13.869/2019 tipifica a divulgação de gravação ou trecho que exponha a intimidade ou a vida privada sem relação com a prova, com pena de detenção de 1 a 4 anos e multa.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_010",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 13.869/2019 • Indução à Confissão por Violência (Art. 13)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q010] Em relação à independência das instâncias no âmbito da Lei de Abuso de Autoridade (art. 7º e 8º da Lei nº 13.869/2019), a sentença penal condenatória ou absolutória que reconhecer categoricamente a inexistência material do fato ou a negativa de autoria:",
    "options": [
      "Não produz nenhum efeito na esfera civil nem na disciplina militar da corporação.",
      "Gera apenas a redução das custas processuais na esfera indenizatória estadual.",
      "Condiciona o Governador a anular todas as penalidades sem necessidade de decisão judicial.",
      "Faz coisa julgada na esfera cível e na esfera administrativa-disciplinar, impedindo a punição nessas instâncias.",
      "Impede a promoção do militar até que transite em julgado na esfera eleitoral."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o art. 8º da Lei nº 13.869/2019: 'Faz coisa julgada em âmbito cível e administrativo-disciplinar a sentença penal que reconhecer ter sido o ato praticado em estado de necessidade, em legítima defesa, em estrito cumprimento de dever legal ou no exercício regular de direito', assim como quando restar provada a inexistência do fato ou que o réu não foi seu autor.",
    "fundamentacaoLegal": "Art. 8º da Lei nº 13.869/2019 e Art. 935 do Código Civil.",
    "hint": "Inexistência material do fato ou negativa de autoria na esfera penal vincula cível e administrativa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Fato não existiu ou réu não é autor: fecha a porta de todas as instâncias (penal, civil e adm).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. Conforme o art. 8º da Lei nº 13.869/2019: 'Faz coisa julgada em âmbito cível e administrativo-disciplinar a sentença penal que reconhecer ter sido o ato praticado em estado de necessidade, em legítima defesa, em estrito cumprimento de dever legal ou no exercício regular de direito', assim como quando restar provada a inexistência do fato ou que o réu não foi seu autor.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_011",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Porte de Droga para Consumo Pessoal (Art. 28)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q011] A respeito da conduta prevista no art. 28 da Lei nº 11.343/2006 (adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar), é correto afirmar que:",
    "options": [
      "Comina pena de detenção de 6 meses a 2 anos, admitindo a prisão em flagrante e o arbitramento de fiança policial.",
      "Deixou de ser conduta ilícita, tratando-se de infração meramente de trânsito regulamentada pelo CONTRAN.",
      "Permite a decretação de prisão preventiva se o autor for reincidente específico em crimes dolosos.",
      "Não comina pena privativa de liberdade, sujeitando o autor às penas de advertência sobre os efeitos das drogas, prestação de serviços à comunidade e medida educativa de comparecimento a programa ou curso educativo.",
      "Extingue a punibilidade se o agente comprovar que é dependente químico de substância vegetal lícita."
    ],
    "correctIndex": 3,
    "explanation": "O art. 28 da Lei nº 11.343/2006 operou a despenalização (STF, RE 430.105), mantendo o caráter de crime, mas abolindo penas privativas de liberdade. As sanções são: I - advertência sobre os efeitos das drogas; II - prestação de serviços à comunidade; III - medida educativa de comparecimento a programa ou curso educativo.",
    "fundamentacaoLegal": "Art. 28, incisos I, II e III da Lei nº 11.343/2006.",
    "hint": "Sem prisão para o usuário no Art. 28: apenas penas educativas e comunitárias!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Art. 28 tem 3 penas: Advertência, Prestação de serviços e Medida educativa.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 28 da Lei nº 11.343/2006 operou a despenalização (STF, RE 430.105), mantendo o caráter de crime, mas abolindo penas privativas de liberdade. As sanções são: I - advertência sobre os efeitos das drogas; II - prestação de serviços à comunidade; III - medida educativa de comparecimento a programa ou curso educativo.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_012",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Critérios de Diferenciação Consumo vs. Tráfico (Art. 28, § 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q012] Para determinar se a droga destinava-se a consumo pessoal ou a tráfico, o juiz atenderá, nos exatos termos do art. 28, § 2º da Lei nº 11.343/2006, aos seguintes critérios objetivos:",
    "options": [
      "À natureza e à quantidade da substância apreendida, ao local e às condições em que se desenvolveu a ação, às circunstâncias sociais e pessoais, bem como à conduta e aos antecedentes do agente.",
      "Exclusivamente ao peso líquido da substância, desconsiderando a condição socioeconômica do indivíduo.",
      "À confissão espontânea do agente perante os policiais militares que efetuaram a abordagem.",
      "À existência de dinheiro em espécie na posse do abordado, independentemente do valor apreendido.",
      "À posse de balança de precisão, sendo este o único critério que autoriza a tipificação do crime de tráfico."
    ],
    "correctIndex": 0,
    "explanation": "O art. 28, § 2º da Lei de Drogas estabelece que o juiz atenderá: à natureza e à quantidade da substância apreendida, ao local e às condições em que se desenvolveu a ação, às circunstâncias sociais e pessoais, bem como à conduta e aos antecedentes do agente.",
    "fundamentacaoLegal": "Art. 28, § 2º da Lei nº 11.343/2006.",
    "hint": "Critérios: natureza, quantidade, local/condições da ação, circunstâncias sociais/pessoais, conduta e antecedentes!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Não é só quantidade: analisa local, circunstâncias, conduta e antecedentes.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 28, § 2º da Lei de Drogas estabelece que o juiz atenderá: à natureza e à quantidade da substância apreendida, ao local e às condições em que se desenvolveu a ação, às circunstâncias sociais e pessoais, bem como à conduta e aos antecedentes do agente.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_013",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Prescrição no Art. 28 (Art. 30)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q013] Nos termos do art. 30 da Lei nº 11.343/2006, prescrevem em qual prazo tanto a imposição quanto a execução das penas cominadas no art. 28 (porte de droga para consumo próprio)?",
    "options": [
      "Em 3 (três) anos.",
      "Em 4 (quatro) anos.",
      "Em 2 (dois) anos.",
      "Em 1 (um) ano.",
      "Em 5 (cinco) anos."
    ],
    "correctIndex": 2,
    "explanation": "O art. 30 da Lei nº 11.343/2006 fixa expressamente o prazo prescricional específico: 'Prescrevem em 2 (dois) anos a imposição e a execução das penas, observados, no tocante à interrupção da prescrição, os arts. 107 e seguintes do Código Penal'.",
    "fundamentacaoLegal": "Art. 30 da Lei nº 11.343/2006.",
    "hint": "Prazo prescricional especial do art. 28: 2 anos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Art. 28 da Lei de Drogas prescreve em 2 anos (dois e vinte e oito).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 30 da Lei nº 11.343/2006 fixa expressamente o prazo prescricional específico: 'Prescrevem em 2 (dois) anos a imposição e a execução das penas, observados, no tocante à interrupção da prescrição, os arts. 107 e seguintes do Código Penal'.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_014",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Tipo Penal do Tráfico de Drogas (Art. 33)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q014] O crime de tráfico ilícito de entorpecentes, previsto no caput do art. 33 da Lei nº 11.343/2006, é classificado pela doutrina e jurisprudência pacíficas como:",
    "options": [
      "Crime de conteúdo variado ou de ação múltipla (tipo misto alternativo), formal e de perigo abstrato, consumando-se com a prática de qualquer das 18 condutas nucleares.",
      "Crime material que exige obrigatoriamente a comprovação do lucro financeiro ou a efetiva entrega ao consumidor.",
      "Crime que admite exclusivamente a modalidade culposa quando o agente transportar encomenda lacrada.",
      "Crime próprio que só pode ser praticado por quem já ostente antecedentes criminais específicos.",
      "Infração penal condicionada à representação expressa da autoridade de vigilância sanitária."
    ],
    "correctIndex": 0,
    "explanation": "O art. 33 traz 18 verbos nucleares (importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer). Trata-se de crime de ação múltipla, de perigo abstrato e formal, consumando-se com a realização de qualquer verbo, prescindindo de lucro.",
    "fundamentacaoLegal": "Art. 33, caput da Lei nº 11.343/2006 e Jurisprudência do STJ.",
    "hint": "Tipo misto alternativo com 18 condutas; não exige mercancia nem lucro!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Transportar, guardar ou trazer consigo já é tráfico consumado mesmo sem vender.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 33 traz 18 verbos nucleares (importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer). Trata-se de crime de ação múltipla, de perigo abstrato e formal, consumando-se com a realização de qualquer verbo, prescindindo de lucro.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_015",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Uso Compartilhado (Art. 33, § 3º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q015] Oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem, nos termos do art. 33, § 3º da Lei nº 11.343/2006:",
    "options": [
      "Equipara-se integralmente ao tráfico hediondo com pena de reclusão de 5 a 15 anos.",
      "Configura delito autônomo de menor potencial ofensivo, apenado com detenção de 6 meses a 1 ano e pagamento de 700 a 1.500 dias-multa, sem prejuízo das penas do art. 28.",
      "Trata-se de fato inteiramente atípico pela incidência do princípio da insignificância penal.",
      "Sujeita o agente à pena de reclusão de 2 a 5 anos e perda imediata de bens apreendidos.",
      "Exige representação prévia do ofendido perante a Vara da Infância e da Juventude."
    ],
    "correctIndex": 1,
    "explanation": "O art. 33, § 3º da Lei nº 11.343/2006 tipifica o uso compartilhado (oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem), punido com detenção de 6 meses a 1 ano e pagamento de 700 a 1.500 dias-multa.",
    "fundamentacaoLegal": "Art. 33, § 3º da Lei nº 11.343/2006.",
    "hint": "Uso compartilhado: eventual, sem lucro, com pessoa de relacionamento, para juntos consumirem. Detenção de 6 meses a 1 ano!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Fumar junto sem cobrar = Uso compartilhado (infração de menor potencial ofensivo).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 33, § 3º da Lei nº 11.343/2006 tipifica o uso compartilhado (oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para juntos a consumirem), punido com detenção de 6 meses a 1 ano e pagamento de 700 a 1.500 dias-multa.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_016",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Tráfico Privilegiado (Art. 33, § 4º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q016] O benefício do chamado 'tráfico privilegiado', previsto no art. 33, § 4º da Lei nº 11.343/2006, permite a redução da pena de um sexto a dois terços, desde que o agente preencha cumulativamente os seguintes requisitos:",
    "options": [
      "Tenha menos de 21 anos na data do fato, confesse espontaneamente e resida no distrito da culpa.",
      "Entregue voluntariamente todos os seus comparsas e devolva os valores obtidos com o tráfico.",
      "Seja primário, tenha bons antecedentes, não se dedique às atividades criminosas nem integre organização criminosa.",
      "Comprove trabalho lícito formal e seja arrimo exclusivo de família numerosa.",
      "A quantidade de droga seja inferior a 10 gramas de substância derivada da cannabis."
    ],
    "correctIndex": 2,
    "explanation": "O art. 33, § 4º da Lei de Drogas exige requisitos cumulativos: 1) primariedade; 2) bons antecedentes; 3) não se dedicar a atividades criminosas; 4) não integrar organização criminosa. Preenchidos, a pena é reduzida de 1/6 a 2/3 e afasta-se a natureza hedionda (STF e Lei 13.964/19).",
    "fundamentacaoLegal": "Art. 33, § 4º da Lei nº 11.343/2006.",
    "hint": "4 requisitos cumulativos: Primário + Bons antecedentes + Não se dedicar a crimes + Não integrar organização criminosa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Tráfico Privilegiado não é hediondo e exige réu 'ficha limpa' sem ligação com facções.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 33, § 4º da Lei de Drogas exige requisitos cumulativos: 1) primariedade; 2) bons antecedentes; 3) não se dedicar a atividades criminosas; 4) não integrar organização criminosa. Preenchidos, a pena é reduzida de 1/6 a 2/3 e afasta-se a natureza hedionda (STF e Lei 13.964/19).",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_017",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Associação para o Tráfico (Art. 35)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q017] Para a configuração do crime de associação para o tráfico, tipificado no art. 35 da Lei nº 11.343/2006, a jurisprudência sumulada e pacífica dos Tribunais Superiores exige obrigatoriamente:",
    "options": [
      "O número mínimo de quatro integrantes estruturados com divisão hierárquica e poder de mando.",
      "A apreensão física de substâncias entorpecentes em poder de todos os associados simultaneamente.",
      "A reunião de duas ou mais pessoas com ânimo associativo prévio, estável e permanente para o fim de reiteradamente ou não cometer crimes de drogas.",
      "A comprovação de conexão internacional com cartéis estrangeiros produtores de cocaína.",
      "A prévia existência de conta bancária conjunta para lavagem de capitais do grupo."
    ],
    "correctIndex": 2,
    "explanation": "O art. 35 da Lei de Drogas exige o concurso de 2 ou mais pessoas e a presença incontestável do dolo de associação com estabilidade e permanência (animus associativo duradouro). A mera coparticipação eventual e isolada configura concurso de pessoas, não associação.",
    "fundamentacaoLegal": "Art. 35 da Lei nº 11.343/2006 e Jurisprudência uníssona do STJ.",
    "hint": "Exige 2 ou mais pessoas + Vínculo ESTÁVEL e PERMANENTE!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Associação para o tráfico = 2 ou mais pessoas com estabilidade (não basta concurso eventual).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 35 da Lei de Drogas exige o concurso de 2 ou mais pessoas e a presença incontestável do dolo de associação com estabilidade e permanência (animus associativo duradouro). A mera coparticipação eventual e isolada configura concurso de pessoas, não associação.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_018",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Causas de Aumento de Pena (Art. 40)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q018] De acordo com o art. 40 da Lei nº 11.343/2006, as penas dos crimes de tráfico e associação aumentam-se de um sexto a dois terços se:",
    "options": [
      "O agente for primário e confessar a conduta espontaneamente em juízo.",
      "A droga for transportada exclusivamente por via marítima em embarcações de pesca artesanal.",
      "O crime for cometido aos domingos ou em feriados nacionais oficiais.",
      "O autor do delito tiver parentesco em linha reta de primeiro grau com o comprador da droga.",
      "A infração tiver sido cometida nas dependências ou imediações de estabelecimentos prisionais, de ensino ou hospitalares, sedes de entidades estudantis, sociais, culturais, recreativas ou esportivas."
    ],
    "correctIndex": 4,
    "explanation": "O art. 40, inciso III da Lei nº 11.343/2006 estabelece causa de aumento de 1/6 a 2/3 se a infração for cometida nas dependências ou imediações de presídios, escolas, hospitais, locais de trabalho coletivo, sedes de entidades culturais ou esportivas, ou em transporte público.",
    "fundamentacaoLegal": "Art. 40, inciso III da Lei nº 11.343/2006.",
    "hint": "Tráfico perto de escola, presídio ou hospital aumenta a pena de 1/6 a 2/3!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Imediações de locais sensíveis (escolas, hospitais, cadeias) geram majorante obrigatória.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 40, inciso III da Lei nº 11.343/2006 estabelece causa de aumento de 1/6 a 2/3 se a infração for cometida nas dependências ou imediações de presídios, escolas, hospitais, locais de trabalho coletivo, sedes de entidades culturais ou esportivas, ou em transporte público."
    }
  },
  {
    "id": "leg_ext_inedita_100_019",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Incineração de Drogas (Art. 50 e 50-A)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q019] Nos termos da Lei nº 11.343/2006, havendo apreensão de drogas em flagrante delito, a destruição das substâncias entorpecentes apreendidas dar-se-á por incineração, no prazo de:",
    "options": [
      "24 (vinte e quatro) horas, imediatamente após a lavratura do auto de prisão em flagrante.",
      "30 (trinta) dias, prorrogáveis indefinidamente até o trânsito em julgado da ação penal.",
      "60 (sessenta) dias, mediante autorização do Conselho Estadual de Trânsito.",
      "6 (seis) meses, após decisão terminativa do Tribunal de Justiça competente.",
      "15 (quinze) dias, na presença do Ministério Público e da autoridade sanitária, guardando-se amostra para laudo definitivo."
    ],
    "correctIndex": 4,
    "explanation": "O art. 50, § 3º da Lei nº 11.343/2006 dispõe que, havendo prisão em flagrante, a incineração ocorrerá no prazo máximo de 15 dias, na presença do MP e da autoridade sanitária competente, guardando-se amostra suficiente para a confecção do laudo pericial definitivo (se não houver prisão em flagrante, o prazo do art. 50-A é de 30 dias).",
    "fundamentacaoLegal": "Art. 50, § 3º e Art. 50-A da Lei nº 11.343/2006.",
    "hint": "Com flagrante = 15 dias. Sem flagrante (art. 50-A) = 30 dias!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Incineração com preso em flagrante: 15 dias com presença do MP e vigilância sanitária.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 50, § 3º da Lei nº 11.343/2006 dispõe que, havendo prisão em flagrante, a incineração ocorrerá no prazo máximo de 15 dias, na presença do MP e da autoridade sanitária competente, guardando-se amostra suficiente para a confecção do laudo pericial definitivo (se não houver prisão em flagrante, o prazo do art. 50-A é de 30 dias)."
    }
  },
  {
    "id": "leg_ext_inedita_100_020",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.343/2006 • Laudo de Constatação Preliminar (Art. 50, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q020] Para a lavratura do auto de prisão em flagrante e o estabelecimento da materialidade do delito na Lei de Drogas, é suficiente:",
    "options": [
      "O depoimento exclusivo e isolado de um único policial militar que participou da diligência.",
      "O laudo de constatação da natureza e quantidade da droga, firmado por perito oficial ou, na falta deste, por pessoa idônea.",
      "A declaração escrita do usuário indicando o ponto de venda e a quantia paga.",
      "O comprovante bancário da transferência pix realizada entre as partes investigadas.",
      "A simples fotografia da substância apreendida juntada no boletim de ocorrência."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 50, § 1º da Lei nº 11.343/2006: 'Para efeito da lavratura do auto de prisão em flagrante e estabelecimento da materialidade do delito, é suficiente o laudo de constatação da natureza e quantidade da droga, firmado por perito oficial ou, na falta deste, por pessoa idônea'.",
    "fundamentacaoLegal": "Art. 50, § 1º da Lei nº 11.343/2006.",
    "hint": "Laudo de constatação preliminar por perito oficial ou pessoa idônea basta para o flagrante!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Para prender em flagrante basta o laudo preliminar; o laudo definitivo vem no processo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. Conforme o art. 50, § 1º da Lei nº 11.343/2006: 'Para efeito da lavratura do auto de prisão em flagrante e estabelecimento da materialidade do delito, é suficiente o laudo de constatação da natureza e quantidade da droga, firmado por perito oficial ou, na falta deste, por pessoa idônea'.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_021",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Posse Irregular de Arma de Uso Permitido (Art. 12)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q021] A conduta de possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho:",
    "options": [
      "Constitui crime de porte ilegal de arma de fogo com pena de reclusão de 2 a 4 anos e inafiançabilidade.",
      "Trata-se de infração meramente administrativa fiscalizada pelo Comando do Exército Brasileiro.",
      "É conduta atípica caso a arma esteja desmuniciada ou desmontada no guarda-roupa.",
      "Configura crime de posse irregular de arma de fogo de uso permitido (art. 12), punido com detenção de 1 a 3 anos e multa, desde que, no caso de local de trabalho, seja o titular ou o responsável legal pelo estabelecimento.",
      "Gera a perda do direito de propriedade sem a instauração de inquérito policial ou processo."
    ],
    "correctIndex": 3,
    "explanation": "O art. 12 tipifica a posse irregular no interior da residência ou dependência desta, ou no local de trabalho (neste caso, exigindo que o agente seja o titular ou o responsável legal). A pena é de detenção de 1 a 3 anos e multa.",
    "fundamentacaoLegal": "Art. 12 da Lei nº 10.826/2003.",
    "hint": "Posse = dentro de casa ou no local de trabalho (sendo o dono/responsável). Pena: Detenção de 1 a 3 anos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Dentro de casa é POSSE (Art. 12 - detenção); da porta para fora é PORTE (Art. 14 - reclusão).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 12 tipifica a posse irregular no interior da residência ou dependência desta, ou no local de trabalho (neste caso, exigindo que o agente seja o titular ou o responsável legal). A pena é de detenção de 1 a 3 anos e multa.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_022",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Porte Ilegal de Arma de Uso Permitido (Art. 14)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q022] Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar, fora de sua residência:",
    "options": [
      "Configura contravenção penal de porte de arma com detenção de 15 a 30 dias.",
      "Configura o crime do art. 14 da Lei nº 10.826/2003, punido com reclusão de 2 (dois) a 4 (quatro) anos, e multa.",
      "Trata-se de crime hediondo inafiançável e insuscetível de liberdade provisória.",
      "É conduta afiançável exclusivamente pela autoridade judiciária de segunda instância.",
      "Não admite prisão em flagrante se a arma for devidamente registrada no SINARM."
    ],
    "correctIndex": 1,
    "explanation": "O art. 14 da Lei nº 10.826/2003 tipifica o porte ilegal de arma de uso permitido, com pena de reclusão de 2 a 4 anos e multa. Cabe fiança pelo delegado de polícia (pena máxima não ultrapassa 4 anos, art. 322 do CPP).",
    "fundamentacaoLegal": "Art. 14 da Lei nº 10.826/2003 e Art. 322 do CPP.",
    "hint": "Porte de uso permitido: Reclusão de 2 a 4 anos e multa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Porte de permitido tem pena de 2 a 4 anos de reclusão (delegado pode arbitrar fiança).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 14 da Lei nº 10.826/2003 tipifica o porte ilegal de arma de uso permitido, com pena de reclusão de 2 a 4 anos e multa. Cabe fiança pelo delegado de polícia (pena máxima não ultrapassa 4 anos, art. 322 do CPP).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_023",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Omissão de Cautela (Art. 13)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q023] Deixar de observar as cautelas necessárias para impedir que menor de 18 (dezoito) anos ou pessoa com deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade:",
    "options": [
      "Configura o crime de omissão de cautela (art. 13), punido com detenção de 1 (um) a 2 (dois) anos, e multa.",
      "Configura participação em homicídio na modalidade tentada com reclusão de 6 a 20 anos.",
      "Não caracteriza crime se o menor for filho emancipado do proprietário do armamento.",
      "Trata-se de crime militar impróprio processado pela Vara da Infância e Juventude.",
      "Sujeita o agente à pena restritiva de direitos consistente em perda da posse de veículos."
    ],
    "correctIndex": 0,
    "explanation": "O art. 13 da Lei nº 10.826/2003 prevê o crime culposo de omissão de cautela: 'Deixar de observar as cautelas necessárias para impedir que menor de 18 (dezoito) anos ou pessoa portadora de deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade: Pena - detenção, de 1 (um) a 2 (dois) anos, e multa'.",
    "fundamentacaoLegal": "Art. 13 da Lei nº 10.826/2003.",
    "hint": "Deixar arma ao alcance de menor de 18 anos ou deficiente mental = Omissão de cautela (detenção 1 a 2 anos)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Arma fácil para menor = crime de omissão de cautela do proprietário.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 13 da Lei nº 10.826/2003 prevê o crime culposo de omissão de cautela: 'Deixar de observar as cautelas necessárias para impedir que menor de 18 (dezoito) anos ou pessoa portadora de deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade: Pena - detenção, de 1 (um) a 2 (dois) anos, e multa'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_024",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Disparo de Arma de Fogo (Art. 15)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q024] O crime de disparo de arma de fogo em lugar habitado ou em suas adjacências, em via pública ou em direção a ela (art. 15 da Lei nº 10.826/2003):",
    "options": [
      "Consome qualquer outro delito que venha a ser praticado, em virtude da especialidade da lei de armas.",
      "Tem pena de detenção de 6 meses a 1 ano e admite transação penal em qualquer circunstância.",
      "Exige lesão corporal em terceiros para que reste consumada a infração penal.",
      "Só se caracteriza se o disparo for efetuado em período noturno após as 22 horas.",
      "É subsidiário, aplicando-se apenas desde que essa conduta não tenha como finalidade a prática de outro crime."
    ],
    "correctIndex": 4,
    "explanation": "O art. 15 da Lei nº 10.826/2003 estabelece a cláusula expressa de subsidiariedade: 'Pena - reclusão, de 2 a 4 anos, e multa. Parágrafo único: O crime previsto neste artigo é inafiançável. O disparo só subsiste 'desde que essa conduta não tenha como finalidade a prática de outro crime' (ex.: se disparou para matar, responde por homicídio; se para ameaçar, por ameaça/tentativa).",
    "fundamentacaoLegal": "Art. 15 da Lei nº 10.826/2003.",
    "hint": "Disparo é expressamente SUBSIDIÁRIO: só responde por ele se não tiver visado outro crime mais grave!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Disparo a esmo em via pública = Art. 15 (reclusão 2 a 4 anos). Se mirou em alguém, vira crime mais grave.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 15 da Lei nº 10.826/2003 estabelece a cláusula expressa de subsidiariedade: 'Pena - reclusão, de 2 a 4 anos, e multa. Parágrafo único: O crime previsto neste artigo é inafiançável. O disparo só subsiste 'desde que essa conduta não tenha como finalidade a prática de outro crime' (ex.: se disparou para matar, responde por homicídio; se para ameaçar, por ameaça/tentativa)."
    }
  },
  {
    "id": "leg_ext_inedita_100_025",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Arma com Numeração Raspada (Art. 16, § 1º, I)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q025] Portar, possuir ou transportar arma de fogo de uso permitido com numeração, marca ou qualquer outro sinal de identificação raspado, suprimido ou adulterado:",
    "options": [
      "Permanece tipificado como porte simples do art. 14 por se tratar de calibre permitido.",
      "Constitui mera infração administrativa de trânsito se encontrada em porta-luvas de automóvel.",
      "Impede a prisão em flagrante caso o portador afirme que comprou de boa-fé.",
      "Permite o arbitramento de fiança policial imediata pelo delegado de polícia de plantão.",
      "Equipara-se ao crime do art. 16 da Lei nº 10.826/2003, punido com reclusão de 3 a 6 anos e multa, independentemente de ser a arma originalmente de uso permitido."
    ],
    "correctIndex": 4,
    "explanation": "O art. 16, § 1º, I equipara a conduta às penas de posse ou porte de arma de uso restrito (reclusão de 3 a 6 anos e multa). A adulteração do sinal identificador afasta a capitulação do art. 12 ou 14, elevando para o art. 16, § 1º, I, qualquer que seja o calibre originário.",
    "fundamentacaoLegal": "Art. 16, § 1º, inciso I da Lei nº 10.826/2003.",
    "hint": "Numeração raspada = art. 16 equiparado (reclusão de 3 a 6 anos)! Não importa se era 38 ou 380.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Raspou, suprimiu ou adulterou a numeração = caiu direto no art. 16 gravoso.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 16, § 1º, I equipara a conduta às penas de posse ou porte de arma de uso restrito (reclusão de 3 a 6 anos e multa). A adulteração do sinal identificador afasta a capitulação do art. 12 ou 14, elevando para o art. 16, § 1º, I, qualquer que seja o calibre originário."
    }
  },
  {
    "id": "leg_ext_inedita_100_026",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Arma de Uso Proibido (Art. 16, § 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q026] Com as alterações legislativas promovidas no Estatuto do Desarmamento, se as condutas de porte ou posse envolverem arma de fogo de uso PROIBIDO (art. 16, § 2º):",
    "options": [
      "A pena é de detenção de 1 a 3 anos por ausência de previsão de qualificadora.",
      "O agente responderá por crime contra a segurança nacional processado perante a Justiça Militar Estadual.",
      "O processo tramitará perante o Juizado Especial Criminal com suspensão condicional da pena.",
      "É facultada ao Comandante-Geral da PMPE a anistia administrativa prévia.",
      "A pena é de reclusão de 4 (quatro) a 12 (doze) anos e a conduta é classificada como crime hediondo pela Lei nº 8.072/1990."
    ],
    "correctIndex": 4,
    "explanation": "O art. 16, § 2º comina pena de reclusão de 4 a 12 anos para porte/posse de arma de uso PROIBIDO. Além disso, pelo art. 1º, parágrafo único, II da Lei 8.072/90 (Crimes Hediondos), o porte/posse de arma de uso proibido é expressamente HEDIONDO.",
    "fundamentacaoLegal": "Art. 16, § 2º da Lei nº 10.826/2003 e Art. 1º, parágrafo único, II da Lei nº 8.072/1990.",
    "hint": "Uso PROIBIDO: Reclusão de 4 a 12 anos + Crime HEDIONDO!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Arma de uso proibido = 4 a 12 anos de reclusão e é crime hediondo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 16, § 2º comina pena de reclusão de 4 a 12 anos para porte/posse de arma de uso PROIBIDO. Além disso, pelo art. 1º, parágrafo único, II da Lei 8.072/90 (Crimes Hediondos), o porte/posse de arma de uso proibido é expressamente HEDIONDO."
    }
  },
  {
    "id": "leg_ext_inedita_100_027",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Comércio Ilegal e Tráfico Internacional (Arts. 17 e 18)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q027] Os crimes de comércio ilegal de arma de fogo (art. 17) e tráfico internacional de arma de fogo (art. 18) da Lei nº 10.826/2003:",
    "options": [
      "São crimes de menor potencial ofensivo que admitem fiança arbitrada pela autoridade policial.",
      "Exigem a participação confirmada de servidor público alfandegário para sua consumação.",
      "Não abrangem a comercialização clandestina de munições ou acessórios bélicos.",
      "Prescrevem no prazo improrrogável de 2 anos a contar da apreensão.",
      "São classificados expressamente como crimes hediondos pelo rol da Lei nº 8.072/1990."
    ],
    "correctIndex": 4,
    "explanation": "Pela Lei nº 8.072/1990 (alterada pelo Pacote Anticrime), o comércio ilegal de arma de fogo (art. 17) e o tráfico internacional de arma de fogo, acessório ou munição (art. 18) são crimes hediondos em todas as suas modalidades.",
    "fundamentacaoLegal": "Art. 1º, parágrafo único, incisos IV e V da Lei nº 8.072/1990 e Arts. 17 e 18 da Lei nº 10.826/2003.",
    "hint": "Comércio ilegal (art. 17) e Tráfico internacional (art. 18) SÃO CRIMES HEDIONDOS!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Vender arma clandestina ou trazer do exterior = crime hediondo sem perdão.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. Pela Lei nº 8.072/1990 (alterada pelo Pacote Anticrime), o comércio ilegal de arma de fogo (art. 17) e o tráfico internacional de arma de fogo, acessório ou munição (art. 18) são crimes hediondos em todas as suas modalidades."
    }
  },
  {
    "id": "leg_ext_inedita_100_028",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Porte de Arma por Policiais Militares (Art. 6º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q028] Em relação ao porte de arma de fogo pelos integrantes da Polícia Militar de Pernambuco, com base no art. 6º da Lei nº 10.826/2003 e regulamentos aplicáveis, é correto afirmar:",
    "options": [
      "Os integrantes das Polícias Militares têm direito a porte de arma de fogo de calibre permitido ou restrito em todo o território nacional, em serviço ou fora dele.",
      "O porte de arma é restrito unicamente ao horário de escala de serviço no respectivo município do batalhão.",
      "O militar estadual é proibido de portar arma particular devidamente registrada em seu nome.",
      "O porte de arma fora do Estado de Pernambuco depende de autorização escrita do Ministro da Defesa.",
      "As praças temporárias ou recrutas não podem manusear armamento institucional sob nenhuma hipótese."
    ],
    "correctIndex": 0,
    "explanation": "O art. 6º, II da Lei nº 10.826/2003 assegura aos policiais militares o porte de arma de fogo em razão da função institucional, válido em todo o território nacional, mesmo fora de serviço, respeitadas as normas corporativas e o registro regular da arma.",
    "fundamentacaoLegal": "Art. 6º, inciso II da Lei nº 10.826/2003.",
    "hint": "Policial Militar tem porte de arma em todo o território nacional, dentro e fora de serviço!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Porte de arma do PM é nacional e permanente (serviço e folga).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 6º, II da Lei nº 10.826/2003 assegura aos policiais militares o porte de arma de fogo em razão da função institucional, válido em todo o território nacional, mesmo fora de serviço, respeitadas as normas corporativas e o registro regular da arma.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_029",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • SINARM vs. SIGMA",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q029] No âmbito do Estatuto do Desarmamento, compete ao Sistema Nacional de Armas (SINARM), instituído no Ministério da Justiça no âmbito da Polícia Federal:",
    "options": [
      "Identificar as características e a propriedade de armas de fogo, cadastrar as autorizações de porte e transferências de armas de civis e de órgãos de segurança pública.",
      "Registrar e autorizar com exclusividade absoluta as armas de fogo das Forças Armadas no exterior.",
      "Fabricar e distribuir munições para os clubes de tiro e caçadores cadastrados no Exército.",
      "Conceder porte de trânsito internacional para navios de guerra de potências estrangeiras.",
      "Fiscalizar o uso de blindagem de veículos militares operacionais em missões de paz."
    ],
    "correctIndex": 0,
    "explanation": "O art. 1º e 2º da Lei nº 10.826/2003 estabelece as competências do SINARM (Polícia Federal): cadastro de armas de civis, polícias civis, guardas municipais, empresas de segurança privada. O SIGMA (Exército) é responsável pelas armas das Forças Armadas, Policiais Militares e CACs.",
    "fundamentacaoLegal": "Arts. 1º e 2º da Lei nº 10.826/2003.",
    "hint": "SINARM é da Polícia Federal; SIGMA é do Exército Brasileiro!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "SINARM = PF (civis, guardas, agentes). SIGMA = Exército (militares, Forças Armadas, CACs).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 1º e 2º da Lei nº 10.826/2003 estabelece as competências do SINARM (Polícia Federal): cadastro de armas de civis, polícias civis, guardas municipais, empresas de segurança privada. O SIGMA (Exército) é responsável pelas armas das Forças Armadas, Policiais Militares e CACs.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_030",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 10.826/2003 • Arma Desmuniciada",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q030] O Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF) firmaram entendimento pacífico de que o porte ou posse de arma de fogo desmuniciada ou desmontada:",
    "options": [
      "É fato penalmente atípico em razão da ausência imediata de lesividade ao bem jurídico tutelado.",
      "Constitui crime de dano dependente de exame pericial de confronto balístico no local.",
      "Configura crime, pois se trata de delito de perigo abstrato e mera conduta, que visa à proteção da incolumidade pública coletiva.",
      "Apenas se torna crime se o agente estiver portando munição no mesmo bolso de suas roupas.",
      "Gera absolvição sumária automática com devolução compulsória do armamento apreendido."
    ],
    "correctIndex": 2,
    "explanation": "A jurisprudência sumulada e vinculante dos Tribunais Superiores estabelece que o porte de arma desmuniciada ou desmontada é crime de perigo abstrato (crime de mera conduta). O bem tutelado é a segurança coletiva e o controle estatal de armas, consumando-se o crime independentemente de munições imediatas.",
    "fundamentacaoLegal": "Jurisprudência pacífica do STF (RHC 110.392) e STJ (Súmulas e Temas Repetitivos).",
    "hint": "Arma desmuniciada CONTINUA SENDO CRIME! Delito de perigo abstrato.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Mesmo sem munição no tambor, portar arma sem registro é crime de perigo abstrato.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. A jurisprudência sumulada e vinculante dos Tribunais Superiores estabelece que o porte de arma desmuniciada ou desmontada é crime de perigo abstrato (crime de mera conduta). O bem tutelado é a segurança coletiva e o controle estatal de armas, consumando-se o crime independentemente de munições imediatas.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_031",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Rol Taxativo dos Crimes Hediondos (Art. 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q031] No ordenamento jurídico brasileiro, o rol de crimes hediondos previsto na Lei nº 8.072/1990 adota o sistema:",
    "options": [
      "Judicial discricionário, cabendo ao juiz definir livremente no caso concreto se a conduta foi hedionda.",
      "Legal (taxativo), de modo que somente são hediondos os crimes expressamente enumerados em lei pelo legislador ordinário, tentados ou consumados.",
      "Misto ou complexo, podendo o Delegado de Polícia criar hipóteses de hediondez em portaria.",
      "Constitucional exclusivo, sendo vedado ao Congresso Nacional acrescentar novos tipos penais.",
      "Extensivo analógico, aplicando-se a qualquer crime com pena superior a 8 anos de reclusão."
    ],
    "correctIndex": 1,
    "explanation": "O Brasil adotou o sistema legal/taxativo (numerus clausus) para os crimes hediondos: apenas os delitos expressamente listados na Lei nº 8.072/1990 são considerados hediondos (tentados ou consumados), sendo vedada a analogia in malam partem pelo julgador.",
    "fundamentacaoLegal": "Art. 1º da Lei nº 8.072/1990 e Jurisprudência do STF.",
    "hint": "Sistema legal taxativo: só é hediondo o que a lei expressamente diz!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Hediondez não se presume nem se inventa: precisa estar na lista da Lei 8.072/90.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O Brasil adotou o sistema legal/taxativo (numerus clausus) para os crimes hediondos: apenas os delitos expressamente listados na Lei nº 8.072/1990 são considerados hediondos (tentados ou consumados), sendo vedada a analogia in malam partem pelo julgador.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_032",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Furto com Emprego de Explosivo (Art. 1º, IX)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q032] Com as alterações trazidas pelo Pacote Anticrime (Lei nº 13.964/2019), passou a integrar expressamente o rol de crimes hediondos:",
    "options": [
      "O furto simples cometido em período noturno mediante escalada.",
      "A apropriação indébita previdenciária de valores inferiores a 10 salários mínimos.",
      "O estelionato eletrônico praticado por meio de redes sociais digitais.",
      "O furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A do CP).",
      "A receptação culposa de peças de veículos automotores em oficinas mecânicas."
    ],
    "correctIndex": 3,
    "explanation": "O Pacote Anticrime incluiu no rol do art. 1º, inciso IX da Lei nº 8.072/1990 o furto qualificado pelo emprego de explosivo ou artefato análogo que cause perigo comum (art. 155, § 4º-A do CP). Note que o furto de explosivo (art. 155, § 7º) NÃO é hediondo; hediondo é o furto COM emprego de explosivo.",
    "fundamentacaoLegal": "Art. 1º, inciso IX da Lei nº 8.072/1990.",
    "hint": "Explodir caixa eletrônico para furtar é furto COM emprego de explosivo = HEDIONDO!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Furto COM explosivo é hediondo; furto DE explosivo não é hediondo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O Pacote Anticrime incluiu no rol do art. 1º, inciso IX da Lei nº 8.072/1990 o furto qualificado pelo emprego de explosivo ou artefato análogo que cause perigo comum (art. 155, § 4º-A do CP). Note que o furto de explosivo (art. 155, § 7º) NÃO é hediondo; hediondo é o furto COM emprego de explosivo.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_033",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Roubo e Hediondez (Art. 1º, II)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q033] De acordo com o art. 1º, II da Lei nº 8.072/1990, são considerados crimes hediondos as seguintes hipóteses de roubo:",
    "options": [
      "Qualquer roubo simples em que o agente utilize força física para subtrair aparelho celular.",
      "Roubo praticado exclusivamente em concurso de duas ou mais pessoas desarmadas.",
      "Roubo circunstanciado pela restrição da liberdade da vítima, pelo emprego de arma de fogo ou pelo emprego de arma de fogo de uso proibido ou restrito, e roubo qualificado pelo resultado lesão corporal grave ou morte (latrocínio).",
      "Roubo de coisa de pequeno valor quando praticado por agente primário.",
      "Roubo tentado em que a vítima recupere todos os pertences imediatamente após o fato."
    ],
    "correctIndex": 2,
    "explanation": "São hediondos no roubo: a) restrição da liberdade da vítima; b) emprego de arma de fogo (permitido, restrito ou proibido); c) resultado lesão corporal grave; d) resultado morte (latrocínio). O roubo simples ou apenas com arma branca não é hediondo.",
    "fundamentacaoLegal": "Art. 1º, inciso II, alíneas 'a', 'b', 'c' e 'd' da Lei nº 8.072/1990.",
    "hint": "Arma de fogo, restrição de liberdade, lesão corporal grave e latrocínio tornam o roubo hediondo!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Roubo com arma de fogo ou latrocínio = hediondo na certa.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. São hediondos no roubo: a) restrição da liberdade da vítima; b) emprego de arma de fogo (permitido, restrito ou proibido); c) resultado lesão corporal grave; d) resultado morte (latrocínio). O roubo simples ou apenas com arma branca não é hediondo.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_034",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Vedações Constitucionais e Legais (Art. 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q034] Os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e o terrorismo são insuscetíveis de:",
    "options": [
      "Liberdade provisória sem fiança em qualquer hipótese.",
      "Anistia, graça e indulto, bem como de fiança.",
      "Progressão de regime prisional durante o cumprimento da pena.",
      "Aplicação de atenuantes genéricas previstas na Parte Geral do Código Penal.",
      "Interposição de recursos aos Tribunais Superiores em Brasília."
    ],
    "correctIndex": 1,
    "explanation": "Nos termos do art. 5º, XLIII da CF/88 e art. 2º, incisos I e II da Lei nº 8.072/1990, esses crimes são inafiançáveis e insuscetíveis de anistia, graça e indulto. A vedação absoluta à liberdade provisória foi declarada inconstitucional pelo STF (cabe liberdade provisória sem fiança se ausentes os requisitos da preventiva).",
    "fundamentacaoLegal": "Art. 2º, incisos I e II da Lei nº 8.072/1990 e Art. 5º, XLIII da CF/88.",
    "hint": "Sem fiança, sem graça, sem anistia e sem indulto (o famoso '3T e Hediondos')!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Hediondos e 3T: Fiança não; Graça não; Anistia não; Indulto não.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. Nos termos do art. 5º, XLIII da CF/88 e art. 2º, incisos I e II da Lei nº 8.072/1990, esses crimes são inafiançáveis e insuscetíveis de anistia, graça e indulto. A vedação absoluta à liberdade provisória foi declarada inconstitucional pelo STF (cabe liberdade provisória sem fiança se ausentes os requisitos da preventiva).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_035",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Prisão Temporária em Crimes Hediondos (Art. 2º, § 4º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q035] O prazo de duração da prisão temporária, quando se tratar de crime hediondo ou equiparado, nos termos do art. 2º, § 4º da Lei nº 8.072/1990, será de:",
    "options": [
      "Até 5 (cinco) dias, prorrogável uma única vez por mais 5 (cinco) dias.",
      "Até 10 (dez) dias, improrrogáveis por decisão fundamentada.",
      "Até 60 (sessenta) dias improrrogáveis para garantir a ordem pública.",
      "Até 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.",
      "Até 90 (noventa) dias, convertendo-se compulsoriamente em preventiva."
    ],
    "correctIndex": 3,
    "explanation": "O art. 2º, § 4º da Lei nº 8.072/1990 dispõe expressamente que: 'A prisão temporária, sobre a qual dispõe a Lei nº 7.960, de 21 de dezembro de 1989, nos crimes previstos neste artigo, terá o prazo de 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade'. Nos crimes comuns o prazo é de 5 dias prorrogável por mais 5.",
    "fundamentacaoLegal": "Art. 2º, § 4º da Lei nº 8.072/1990.",
    "hint": "Crimes comuns = 5 + 5 dias. Crimes hediondos = 30 + 30 dias!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Temporária de Hediondo dura um mês (30 dias), prorrogável por mais 30.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 2º, § 4º da Lei nº 8.072/1990 dispõe expressamente que: 'A prisão temporária, sobre a qual dispõe a Lei nº 7.960, de 21 de dezembro de 1989, nos crimes previstos neste artigo, terá o prazo de 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade'. Nos crimes comuns o prazo é de 5 dias prorrogável por mais 5.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_036",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Tráfico Privilegiado e Hediondez (Art. 112 LEP)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q036] O crime de tráfico de drogas na modalidade privilegiada (art. 33, § 4º da Lei nº 11.343/2006), segundo a jurisprudência sumulada do STF e a Lei Anticrime:",
    "options": [
      "Mantém a natureza de crime hediondo gravíssimo em razão da periculosidade social.",
      "Admite anistia individual concedida pelo Governador de Estado.",
      "Não é considerado crime hediondo nem a ele equiparado, permitindo livramento condicional e progressão sob regras comuns.",
      "Equipara-se ao latrocínio para fins de fixação de fiança criminal.",
      "Exige cumprimento de 70% da pena para concessão de qualquer benefício carcerário."
    ],
    "correctIndex": 2,
    "explanation": "O STF firmou tese no Tema 737 e no art. 112, § 5º da LEP (incluído pelo Pacote Anticrime): o tráfico privilegiado (art. 33, § 4º) NÃO é considerado hediondo nem equiparado a hediondo. Afasta-se a hediondez por expressa previsão legal.",
    "fundamentacaoLegal": "Art. 112, § 5º da LEP (Lei 7.210/84) e Súmula Vinculante 59 do STF.",
    "hint": "Tráfico privilegiado NÃO É HEDIONDO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Privilegiado perdeu o carimbo de hediondo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O STF firmou tese no Tema 737 e no art. 112, § 5º da LEP (incluído pelo Pacote Anticrime): o tráfico privilegiado (art. 33, § 4º) NÃO é considerado hediondo nem equiparado a hediondo. Afasta-se a hediondez por expressa previsão legal.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_037",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Progressão de Regime (Art. 112 LEP)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q037] Com o Pacote Anticrime, a progressão de regime para o condenado por crime hediondo ou equiparado, que seja réu primário e com resultado MORTE, exige o cumprimento de:",
    "options": [
      "40% (quarenta por cento) da pena, permitindo livramento após 2/3.",
      "60% (sessenta por cento) da pena com trabalho prisional externo.",
      "70% (setenta por cento) da pena independentemente de reincidência.",
      "50% (cinquenta por cento) da pena, sendo vedado o livramento condicional.",
      "80% (oitenta por cento) da pena em regime disciplinar diferenciado."
    ],
    "correctIndex": 3,
    "explanation": "Pelo art. 112, VI, 'a' da LEP: 50% da pena se o apenado for condenado pela prática de crime hediondo ou equiparado, COM RESULTADO MORTE, se for PRIMÁRIO, vedado o livramento condicional. Se for reincidente com resultado morte, a fração sobe para 70% (art. 112, VIII).",
    "fundamentacaoLegal": "Art. 112, inciso VI, alínea 'a' da Lei de Execução Penal.",
    "hint": "Hediondo com morte primário: 50% da pena e SEM livramento condicional!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Primário + Hediondo com morte = 50% da pena e adeus livramento.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. Pelo art. 112, VI, 'a' da LEP: 50% da pena se o apenado for condenado pela prática de crime hediondo ou equiparado, COM RESULTADO MORTE, se for PRIMÁRIO, vedado o livramento condicional. Se for reincidente com resultado morte, a fração sobe para 70% (art. 112, VIII).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_038",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Genocídio e Hediondez",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q038] É classificado expressamente como crime hediondo pelo art. 1º, parágrafo único, inciso I da Lei nº 8.072/1990 o crime de:",
    "options": [
      "Sedição militar e motim previstos no Código Penal Militar.",
      "Injúria simples proferida contra autoridade judiciária durante audiência.",
      "Genocídio previsto nos arts. 1º, 2º e 3º da Lei nº 2.889/1956, tentado ou consumado.",
      "Falso testemunho prestado em inquérito policial comum.",
      "Desacato a militar estadual em via pública durante patrulhamento."
    ],
    "correctIndex": 2,
    "explanation": "O art. 1º, parágrafo único, I da Lei nº 8.072/1990 elenca o crime de genocídio (arts. 1º, 2º e 3º da Lei nº 2.889/1956), tentado ou consumado, como crime hediondo autônomo.",
    "fundamentacaoLegal": "Art. 1º, parágrafo único, I da Lei nº 8.072/1990.",
    "hint": "Genocídio é crime hediondo previsto expressamente no parágrafo único do art. 1º!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Destruir grupo humano (genocídio) é sempre hediondo na íntegra.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 1º, parágrafo único, I da Lei nº 8.072/1990 elenca o crime de genocídio (arts. 1º, 2º e 3º da Lei nº 2.889/1956), tentado ou consumado, como crime hediondo autônomo.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_039",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Livramento Condicional em Hediondos",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q039] Nos termos do art. 83, inciso V do Código Penal, o livramento condicional para condenados por crimes hediondos ou equiparados exige:",
    "options": [
      "Cumprimento de metade da pena se o apenado comprovar bom comportamento militar.",
      "Cumprimento integral de 100% da pena em regime fechado ininterrupto.",
      "Autorização expressa concedida pelo Conselho de Sentença do Tribunal do Júri.",
      "Reparação de 100% do dano civil antes da publicação da sentença de pronúncia.",
      "Cumprimento de mais de dois terços da pena, desde que o condenado não seja reincidente específico em crimes dessa mesma natureza."
    ],
    "correctIndex": 4,
    "explanation": "O art. 83, V do CP exige cumprimento de MAIS DE DOIS TERÇOS (2/3) da pena para condenados por crime hediondo, prática da tortura, tráfico ou terrorismo, se o condenado NÃO for reincidente específico em crimes dessa natureza (se for reincidente específico em hediondos, não cabe livramento condicional).",
    "fundamentacaoLegal": "Art. 83, inciso V do Código Penal.",
    "hint": "Hediondo exige mais de 2/3 da pena e NÃO PODE ser reincidente específico!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Livramento de hediondo: mais de 2/3 da pena + réu não pode ter reincidência específica em hediondo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 83, V do CP exige cumprimento de MAIS DE DOIS TERÇOS (2/3) da pena para condenados por crime hediondo, prática da tortura, tráfico ou terrorismo, se o condenado NÃO for reincidente específico em crimes dessa natureza (se for reincidente específico em hediondos, não cabe livramento condicional)."
    }
  },
  {
    "id": "leg_ext_inedita_100_040",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.072/1990 • Regime Inicial Fechado e STF",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q040] O Supremo Tribunal Federal, ao julgar o HC 111.840, declarou a inconstitucionalidade do art. 2º, § 1º da Lei nº 8.072/1990, assentando que:",
    "options": [
      "Nenhum condenado por crime hediondo pode cumprir pena em presídio comum de segurança máxima.",
      "O juiz deve aplicar a pena de morte caso o réu seja reincidente em latrocínio.",
      "A fixação do regime inicial obrigatoriamente fechado para crimes hediondos ofende o princípio constitucional da individualização da pena (art. 5º, XLVI, CF/88).",
      "A individualização da pena não se aplica aos crimes cometidos contra policiais militares.",
      "Os crimes hediondos devem ter a punibilidade extinta se a denúncia não for oferecida em 48 horas."
    ],
    "correctIndex": 2,
    "explanation": "O STF declarou inconstitucional a obrigatoriedade do regime inicial fechado para os crimes hediondos, por violação ao princípio da individualização da pena (art. 5º, XLVI da CF/88). O juiz deve analisar o art. 33 e 59 do CP para fixar o regime adequado ao caso concreto.",
    "fundamentacaoLegal": "STF - Plenário, HC 111.840/ES e Súmula Vinculante 26.",
    "hint": "Regime inicial obrigatoriamente fechado é INCONSTITUCIONAL segundo o STF: fere a individualização da pena!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "O juiz é livre para analisar as circunstâncias e fixar o regime adequado (STF derrubou o fechado obrigatório).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O STF declarou inconstitucional a obrigatoriedade do regime inicial fechado para os crimes hediondos, por violação ao princípio da individualização da pena (art. 5º, XLVI da CF/88). O juiz deve analisar o art. 33 e 59 do CP para fixar o regime adequado ao caso concreto.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_041",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Tortura-Prova (Art. 1º, I, a)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q041] Constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com o fim de obter informação, declaração ou confissão da vítima ou de terceira pessoa:",
    "options": [
      "Constitui abuso de autoridade punido apenas com pena restritiva de direitos de advertência.",
      "Configura o crime de tortura-prova (art. 1º, I, a da Lei nº 9.455/1997), punido com reclusão de 2 a 8 anos.",
      "Configura lesão corporal leve consumada que depende de representação privada da vítima.",
      "Trata-se de infração disciplinar regulada exclusivamente pelo Estatuto dos Militares Estaduais.",
      "É conduta atípica se o suspeito de fato confessar a autoria de crime de homicídio."
    ],
    "correctIndex": 1,
    "explanation": "O art. 1º, I, 'a' da Lei nº 9.455/1997 tipifica a tortura-prova ou tortura persecutória/confissória, com pena de reclusão de 2 a 8 anos. Trata-se de crime formal, que se consuma com a violência ou grave ameaça causadora de sofrimento físico/mental, independente da obtenção efetiva da confissão.",
    "fundamentacaoLegal": "Art. 1º, inciso I, alínea 'a' da Lei nº 9.455/1997.",
    "hint": "Torturar para conseguir confissão = Tortura-prova (reclusão de 2 a 8 anos)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Bater para confessar é tortura-prova. Crime formal: consuma na agressão.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 1º, I, 'a' da Lei nº 9.455/1997 tipifica a tortura-prova ou tortura persecutória/confissória, com pena de reclusão de 2 a 8 anos. Trata-se de crime formal, que se consuma com a violência ou grave ameaça causadora de sofrimento físico/mental, independente da obtenção efetiva da confissão.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_042",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Tortura-Crime (Art. 1º, I, b)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q042] A conduta de constranger alguém, mediante violência ou grave ameaça, causando sofrimento físico ou mental, para provocar ação ou omissão de natureza criminosa, tipifica:",
    "options": [
      "O crime de coação no curso do processo do art. 344 do Código Penal.",
      "O crime de extorsão qualificada pela restrição da liberdade com resultado morte.",
      "Mera participação moral impunível por ausência de resultado material conexo.",
      "Contravenção penal contra a paz pública processada perante o JECRIM.",
      "O crime de tortura-crime (art. 1º, I, alínea 'b' da Lei nº 9.455/1997)."
    ],
    "correctIndex": 4,
    "explanation": "O art. 1º, I, 'b' tipifica a tortura-crime: a violência ou grave ameaça causadora de sofrimento visa obrigar a vítima a praticar uma ação ou omissão de natureza criminosa (ex.: torturar um bancário para que ele desative o alarme para os assaltantes).",
    "fundamentacaoLegal": "Art. 1º, inciso I, alínea 'b' da Lei nº 9.455/1997.",
    "hint": "Torturar para fazer a pessoa cometer um crime = Tortura-crime!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Violência para obrigar a cometer crime = Tortura-crime.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 1º, I, 'b' tipifica a tortura-crime: a violência ou grave ameaça causadora de sofrimento visa obrigar a vítima a praticar uma ação ou omissão de natureza criminosa (ex.: torturar um bancário para que ele desative o alarme para os assaltantes)."
    }
  },
  {
    "id": "leg_ext_inedita_100_043",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Tortura Discriminatória (Art. 1º, I, c)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q043] O art. 1º, I, 'c' da Lei nº 9.455/1997 pune o constrangimento mediante violência ou grave ameaça causador de sofrimento físico ou mental em razão de:",
    "options": [
      "Divergência clubística ou rivalidade desportiva amadora.",
      "Inadimplemento de dívida civil contratual entre particulares.",
      "Discriminação racial ou religiosa.",
      "Desobediência a horário de funcionamento de estabelecimento comercial.",
      "Opinião emitida em programa de entretenimento radiofônico."
    ],
    "correctIndex": 2,
    "explanation": "A tortura discriminatória (art. 1º, I, 'c') protege a igualdade e a dignidade, punindo quem inflige sofrimento físico ou mental motivado exclusivamente por discriminação racial ou religiosa.",
    "fundamentacaoLegal": "Art. 1º, inciso I, alínea 'c' da Lei nº 9.455/1997.",
    "hint": "Tortura discriminatória é restrita em lei a: RACIAL ou RELIGIOSA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Tortura discriminatória = Raça e Religião (RR).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. A tortura discriminatória (art. 1º, I, 'c') protege a igualdade e a dignidade, punindo quem inflige sofrimento físico ou mental motivado exclusivamente por discriminação racial ou religiosa.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_044",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Tortura-Castigo (Art. 1º, II)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q044] Submeter alguém, sob sua guarda, poder ou autoridade, com emprego de violência ou grave ameaça, a INTENSO sofrimento físico ou mental, como forma de aplicar castigo pessoal ou medida de caráter preventivo:",
    "options": [
      "Configura o crime de tortura-castigo (art. 1º, II da Lei nº 9.455/1997), punido com reclusão de 2 a 8 anos.",
      "Configura crime de maus-tratos do art. 136 do Código Penal, sem natureza hedionda.",
      "Trata-se de direito de correção inerente ao poder familiar ou hierárquico militar.",
      "Constitui lesão corporal culposa com direito a transação penal e fiança imediata.",
      "Gera a extinção da punibilidade caso a vítima perdoe o agente agressor formalmente."
    ],
    "correctIndex": 0,
    "explanation": "A tortura-castigo (art. 1º, II da Lei 9.455/97) exige três elementos especiais: 1) relação de guarda, poder ou autoridade; 2) emprego de violência ou grave ameaça; 3) INTENSO sofrimento físico ou mental, com fim de aplicar castigo pessoal ou medida preventiva. Difere dos maus-tratos exatamente pela intensidade do sofrimento e pelo ânimo de punir/castigar cruelmente.",
    "fundamentacaoLegal": "Art. 1º, inciso II da Lei nº 9.455/1997.",
    "hint": "Pessoa sob guarda/poder/autoridade submetida a INTENSO sofrimento como castigo = Tortura-castigo!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Intenso sofrimento sob autoridade = Tortura-castigo (reclusão 2 a 8 anos).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. A tortura-castigo (art. 1º, II da Lei 9.455/97) exige três elementos especiais: 1) relação de guarda, poder ou autoridade; 2) emprego de violência ou grave ameaça; 3) INTENSO sofrimento físico ou mental, com fim de aplicar castigo pessoal ou medida preventiva. Difere dos maus-tratos exatamente pela intensidade do sofrimento e pelo ânimo de punir/castigar cruelmente.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_045",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Tortura por Omissão (Art. 1º, § 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q045] Aquele que se omite em face das condutas tipificadas na Lei de Tortura, quando tinha o dever de evitá-las ou de apurá-las:",
    "options": [
      "Incorre na pena de detenção de 1 (um) a 4 (quatro) anos (tortura imprópria ou por omissão).",
      "Responde com a mesma pena de reclusão do torturador executor de 2 a 8 anos.",
      "Pratica crime culposo afiançável com perdão judicial obrigatório.",
      "Responde apenas perante a Corregedoria Geral da Secretaria de Defesa Social.",
      "Tem sua conduta considerada atípica por ausência de causalidade material."
    ],
    "correctIndex": 0,
    "explanation": "O art. 1º, § 2º da Lei nº 9.455/1997 prevê a tortura por omissão: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou de apurá-las, incorre na pena de detenção de 1 (um) a 4 (quatro) anos'. Note a diferença: a pena é de DETENÇÃO (1 a 4 anos), enquanto a tortura ativa é de RECLUSÃO (2 a 8 anos).",
    "fundamentacaoLegal": "Art. 1º, § 2º da Lei nº 9.455/1997.",
    "hint": "Omissão na tortura: pena mais branda de DETENÇÃO de 1 a 4 anos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Omissão é DETENÇÃO de 1 a 4 anos (quem devia evitar ou apurar e se omitiu).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 1º, § 2º da Lei nº 9.455/1997 prevê a tortura por omissão: 'Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou de apurá-las, incorre na pena de detenção de 1 (um) a 4 (quatro) anos'. Note a diferença: a pena é de DETENÇÃO (1 a 4 anos), enquanto a tortura ativa é de RECLUSÃO (2 a 8 anos).",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_046",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Causas de Aumento de Pena (Art. 1º, § 4º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q046] De acordo com o art. 1º, § 4º da Lei nº 9.455/1997, aumenta-se a pena do crime de tortura de um sexto até um terço se o crime:",
    "options": [
      "For praticado em local público na presença de mais de cinco testemunhas presenciais.",
      "Causar repercussão na imprensa ou veiculação em redes sociais digitais.",
      "For cometido por agente público, contra criança, gestante, pessoa com deficiência, adolescente ou pessoa maior de 60 anos, ou for cometido mediante sequestro.",
      "For praticado durante os primeiros trinta dias de vigência do estado de defesa.",
      "Tiver como autor militar estadual com menos de 2 anos de efetivo serviço militar."
    ],
    "correctIndex": 2,
    "explanation": "O art. 1º, § 4º prevê aumento de 1/6 até 1/3 se o crime: I - for cometido por agente público; II - for cometido contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos; III - for cometido mediante sequestro.",
    "fundamentacaoLegal": "Art. 1º, § 4º da Lei nº 9.455/1997.",
    "hint": "Causas de aumento (1/6 a 1/3): Agente público; Criança/Adolescente/Gestante/Idoso/Deficiente; ou Mediante sequestro!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Agente público que tortura tem pena aumentada de 1/6 a 1/3.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 1º, § 4º prevê aumento de 1/6 até 1/3 se o crime: I - for cometido por agente público; II - for cometido contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos; III - for cometido mediante sequestro.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_047",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Efeito Automático da Condenação (Art. 1º, § 5º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q047] A condenação transitada em julgado pelo crime de tortura acarretará para o agente público, nos termos do art. 1º, § 5º da Lei nº 9.455/1997:",
    "options": [
      "A suspensão do cargo por 6 meses com redução salarial de 30% declarada pelo Comandante.",
      "A perda do cargo apenas se houver reincidência específica declarada pelo Tribunal de Justiça Militar.",
      "A cassação da CNH e proibição de conduzir viaturas policiais por até 1 ano.",
      "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo DOBRO do prazo da pena aplicada, como efeito automático da sentença condenatória.",
      "A remoção obrigatória para batalhão do interior do Estado de Pernambuco."
    ],
    "correctIndex": 3,
    "explanation": "O art. 1º, § 5º da Lei nº 9.455/1997 estabelece: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada'. Trata-se de efeito AUTOMÁTICO da condenação, que não precisa de fundamentação expressa na sentença (STJ e STF).",
    "fundamentacaoLegal": "Art. 1º, § 5º da Lei nº 9.455/1997 e Jurisprudência do STJ.",
    "hint": "Na Lei de Tortura a perda do cargo é AUTOMÁTICA e a interdição é pelo DOBRO do prazo da pena!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Tortura derruba o cargo automaticamente e interdita pelo DOBRO da pena.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 1º, § 5º da Lei nº 9.455/1997 estabelece: 'A condenação acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada'. Trata-se de efeito AUTOMÁTICO da condenação, que não precisa de fundamentação expressa na sentença (STJ e STF).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_048",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Qualificadoras pelo Resultado (Art. 1º, § 3º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q048] Se do crime de tortura resulta lesão corporal de natureza grave ou gravíssima, ou se resulta morte, as penas cominadas no art. 1º, § 3º da Lei nº 9.455/1997 são, respectivamente, de:",
    "options": [
      "Detenção de 2 a 4 anos e reclusão perpétua.",
      "Reclusão de 6 a 12 anos e reclusão de 20 a 30 anos em regime de prisão comum.",
      "Reclusão de 4 a 10 anos (se lesão grave/gravíssima) e reclusão de 8 a 16 anos (se resulta morte).",
      "Detenção de 1 a 3 anos e suspensão dos direitos políticos por 5 anos.",
      "Reclusão de 1 a 5 anos e demissão administrativa a bem da disciplina."
    ],
    "correctIndex": 2,
    "explanation": "O art. 1º, § 3º traz as formas preterdolosas qualificadas pelo resultado: 'Se resulta lesão corporal de natureza grave ou gravíssima, a pena é de reclusão de 4 a 10 anos; se resulta morte, a pena é de reclusão de 8 a 16 anos'.",
    "fundamentacaoLegal": "Art. 1º, § 3º da Lei nº 9.455/1997.",
    "hint": "Tortura qualificada: lesão grave/gravíssima = 4 a 10 anos; morte = 8 a 16 anos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Grave/gravíssima = 4 a 10. Morte = 8 a 16.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 1º, § 3º traz as formas preterdolosas qualificadas pelo resultado: 'Se resulta lesão corporal de natureza grave ou gravíssima, a pena é de reclusão de 4 a 10 anos; se resulta morte, a pena é de reclusão de 8 a 16 anos'.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_049",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Extraterritorialidade (Art. 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q049] Conforme o art. 2º da Lei nº 9.455/1997, o crime de tortura aplica-se ainda quando não cometido em território nacional, desde que a vítima seja brasileira ou:",
    "options": [
      "O agente cometa o crime a bordo de aeronave militar estrangeira.",
      "A ordem de tortura tenha partido de autoridade consular honorária.",
      "O patrimônio lesado pertença a empresa pública mista binacional.",
      "Encontrando-se o agente em local sob jurisdição brasileira.",
      "Haja tratado bilateral que autorize a extradição de nacionais natos."
    ],
    "correctIndex": 3,
    "explanation": "O art. 2º da Lei de Tortura prevê hipótese de extraterritorialidade incondicionada: 'O disposto nesta Lei aplica-se ainda quando o crime não tenha sido cometido em território nacional, sendo a vítima brasileira ou encontrando-se o agente em local sob jurisdição brasileira'.",
    "fundamentacaoLegal": "Art. 2º da Lei nº 9.455/1997.",
    "hint": "Aplica-se no exterior se: a vítima for brasileira OU o agente estiver sob jurisdição brasileira!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Tortura fora do Brasil: pega se a vítima for brasileira ou se o torturador pisar em solo brasileiro.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 2º da Lei de Tortura prevê hipótese de extraterritorialidade incondicionada: 'O disposto nesta Lei aplica-se ainda quando o crime não tenha sido cometido em território nacional, sendo a vítima brasileira ou encontrando-se o agente em local sob jurisdição brasileira'.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_050",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.455/1997 • Sujeito Ativo",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q050] Quanto ao sujeito ativo, o crime de tortura do art. 1º, inciso I (tortura-prova, tortura-crime e tortura discriminatória) classifica-se como:",
    "options": [
      "Crime próprio exclusivo de autoridades policiais civis e militares de carreira.",
      "Crime de mão própria que só pode ser executado por quem exerce poder de custódia judicial.",
      "Crime funcional restrito aos servidores do sistema prisional estadual.",
      "Crime unissubjetivo que exige obrigatoriamente conluio com superior hierárquico.",
      "Crime comum, podendo ser praticado por qualquer pessoa, não sendo privativo de agente público."
    ],
    "correctIndex": 4,
    "explanation": "A tortura do inciso I do art. 1º é CRIME COMUM: qualquer cidadão pode cometer (ex.: traficante torturando morador, pai torturando mãe). Apenas a tortura-castigo (inciso II) e a omissão (art. 1º, § 2º) são crimes próprios, exigindo guarda/poder/autoridade ou dever legal de evitar/apurar. Se for agente público, incide a majorante do § 4º, I.",
    "fundamentacaoLegal": "Art. 1º, inciso I e § 4º, I da Lei nº 9.455/1997.",
    "hint": "Tortura do inciso I é CRIME COMUM! Qualquer um pode praticar (agente público é causa de aumento).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Qualquer um pode torturar: particular também comete crime de tortura.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. A tortura do inciso I do art. 1º é CRIME COMUM: qualquer cidadão pode cometer (ex.: traficante torturando morador, pai torturando mãe). Apenas a tortura-castigo (inciso II) e a omissão (art. 1º, § 2º) são crimes próprios, exigindo guarda/poder/autoridade ou dever legal de evitar/apurar. Se for agente público, incide a majorante do § 4º, I."
    }
  },
  {
    "id": "leg_ext_inedita_100_051",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Violência Patrimonial (Art. 7º, IV)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q051] A conduta configurada como retenção, subtração, destruição parcial ou total de objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos da mulher, constitui:",
    "options": [
      "Violência patrimonial, nos termos do art. 7º, inciso IV da Lei nº 11.340/2006.",
      "Mero ilícito civil de esbulho possessório com direito a reintegração liminar.",
      "Violência psicológica simples punida com prestação pecuniária de alimentos.",
      "Fato atípico se os bens pertencerem ao casal sob comunhão parcial.",
      "Crime contra o patrimônio sujeito às escusas absolutórias do art. 181 do Código Penal."
    ],
    "correctIndex": 0,
    "explanation": "O art. 7º, IV da Lei Maria da Penha define a violência patrimonial: qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.",
    "fundamentacaoLegal": "Art. 7º, inciso IV da Lei nº 11.340/2006.",
    "hint": "Rasgar documentos, quebrar celular, reter instrumentos de trabalho = Violência Patrimonial!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Mexeu nos bens, documentos ou dinheiro da mulher = violência patrimonial.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 7º, IV da Lei Maria da Penha define a violência patrimonial: qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_052",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Violência Psicológica (Art. 7º, II)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q052] Conforme o art. 7º, II da Lei nº 11.340/2006, a violência psicológica contra a mulher é entendida como qualquer conduta que:",
    "options": [
      "Ofenda diretamente sua integridade física ou cause hematomas corporais comprovados por exame de corpo de delito.",
      "Consista em calúnia ou difamação proferida no ambiente de trabalho perante terceiros.",
      "Restrinja sua participação política em eleições municipais ou estaduais.",
      "Exija a realização de horas extras remuneradas sem concordância prévia.",
      "Lhe cause dano emocional e diminuição da autoestima ou que lhe prejudique e perturbe o pleno desenvolvimento ou que vise degradar ou controlar suas ações, comportamentos, crenças e decisões."
    ],
    "correctIndex": 4,
    "explanation": "O art. 7º, II da Lei Maria da Penha conceitua a violência psicológica como qualquer conduta que lhe cause dano emocional e diminuição da autoestima ou que lhe prejudique e perturbe o pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões (além do tipo autônomo do art. 147-B do CP).",
    "fundamentacaoLegal": "Art. 7º, inciso II da Lei nº 11.340/2006.",
    "hint": "Dano emocional, controle de comportamento, vigilância, humilhação = Violência Psicológica!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Abalar a mente e controlar a vida da mulher = violência psicológica.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 7º, II da Lei Maria da Penha conceitua a violência psicológica como qualquer conduta que lhe cause dano emocional e diminuição da autoestima ou que lhe prejudique e perturbe o pleno desenvolvimento ou que vise a degradar ou a controlar suas ações, comportamentos, crenças e decisões (além do tipo autônomo do art. 147-B do CP)."
    }
  },
  {
    "id": "leg_ext_inedita_100_053",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Descumprimento de Medidas Protetivas (Art. 24-A)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q053] O crime de descumprir decisão judicial que defere medidas protetivas de urgência previstas na Lei Maria da Penha (art. 24-A da Lei nº 11.340/2006) comina pena de:",
    "options": [
      "Reclusão de 4 a 8 anos, cabendo fiança imediata pelo Delegado de Polícia no plantão.",
      "Detenção, de 3 (três) meses a 2 (dois) anos, sendo a fiança privativa da autoridade judiciária.",
      "Multa de 5 a 20 salários mínimos destinada ao fundo estadual da mulher.",
      "Detenção de 1 a 6 meses, admitindo transação penal e suspensão condicional do processo.",
      "Advertência judicial verbal e comparecimento a sessões de aconselhamento familiar."
    ],
    "correctIndex": 1,
    "explanation": "O art. 24-A comina pena de detenção de 3 meses a 2 anos. Pelo § 2º do mesmo artigo: 'Na hipótese de prisão em flagrante, apenas a autoridade judicial poderá conceder fiança'. O Delegado de Polícia NÃO pode arbitrar fiança nesse crime.",
    "fundamentacaoLegal": "Art. 24-A, caput e § 2º da Lei nº 11.340/2006.",
    "hint": "Descumprimento de protetiva: Detenção de 3 meses a 2 anos e FIANÇA SÓ PELO JUIZ!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Descumpriu protetiva: vai em cana e o delegado NÃO pode dar fiança (só o juiz).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 24-A comina pena de detenção de 3 meses a 2 anos. Pelo § 2º do mesmo artigo: 'Na hipótese de prisão em flagrante, apenas a autoridade judicial poderá conceder fiança'. O Delegado de Polícia NÃO pode arbitrar fiança nesse crime.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_054",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Medidas Protetivas pela Autoridade Policial (Art. 12-C)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q054] Verificada a existência de risco atual ou iminente à vida ou à integridade física ou psicológica da mulher em situação de violência doméstica e familiar, o agressor será imediatamente afastado do lar, domicílio ou local de convivência com a ofendida:",
    "options": [
      "Exclusivamente por decisão colegiada do Tribunal de Justiça após ouvir o Ministério Público.",
      "Apenas por determinação do Comandante-Geral da Polícia Militar após parecer da corregedoria.",
      "Pelo síndico do condomínio residencial mediante notificação em livro de ocorrências.",
      "Pelo oficial de justiça acompanhado obrigatoriamente de dois defensores públicos.",
      "Pela autoridade judicial; pelo delegado de polícia (quando o Município não for sede de comarca); ou pelo policial (quando o Município não for sede de comarca e não houver delegado disponível no momento)."
    ],
    "correctIndex": 4,
    "explanation": "O art. 12-C da Lei Maria da Penha autoriza o afastamento imediato do agressor: I - pela autoridade judicial; II - pelo delegado de polícia, quando o Município não for sede de comarca; III - pelo policial, quando o Município não for sede de comarca e não houver delegado disponível no momento do atendimento. Nas hipóteses II e III, o juiz será comunicado em 24h para homologar.",
    "fundamentacaoLegal": "Art. 12-C da Lei nº 11.340/2006.",
    "hint": "Policial militar pode afastar o agressor se o município não for sede de comarca e não houver delegado no momento!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Escadinha do art. 12-C: Juiz -> Delegado (sem comarca) -> Policial (sem delegado no momento).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 12-C da Lei Maria da Penha autoriza o afastamento imediato do agressor: I - pela autoridade judicial; II - pelo delegado de polícia, quando o Município não for sede de comarca; III - pelo policial, quando o Município não for sede de comarca e não houver delegado disponível no momento do atendimento. Nas hipóteses II e III, o juiz será comunicado em 24h para homologar."
    }
  },
  {
    "id": "leg_ext_inedita_100_055",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Inaplicabilidade da Lei dos Juizados Especiais (Art. 41)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q055] O art. 41 da Lei nº 11.340/2006 estabelece que aos crimes praticados com violência doméstica e familiar contra a mulher, independentemente da pena prevista:",
    "options": [
      "Aplica-se compulsoriamente o benefício da transação penal no primeiro atendimento.",
      "Admite-se a substituição da pena privativa de liberdade por cesta básica ou prestação pecuniária.",
      "Permite-se a composição civil dos danos com eficácia de renúncia ao direito de queixa.",
      "Não se aplica a Lei nº 9.099/1995 (Lei dos Juizados Especiais Cíveis e Criminais).",
      "Aplica-se a suspensão condicional do processo desde que a vítima concorde oralmente."
    ],
    "correctIndex": 3,
    "explanation": "O art. 41 da Lei nº 11.340/2006 veda expressamente a aplicação da Lei nº 9.099/95 a qualquer crime praticado no contexto de violência doméstica e familiar contra a mulher. Não cabe transação penal, nem suspensão condicional do processo, nem cesta básica (Súmula 536 e 588 do STJ).",
    "fundamentacaoLegal": "Art. 41 da Lei nº 11.340/2006 e Súmulas 536 e 588 do STJ.",
    "hint": "LEI 9.099/95 NÃO SE APLICA NA MARIA DA PENHA! Vedada transação penal e cesta básica.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Bateu em mulher: zero benefícios da Lei 9.099/95 e zero cesta básica.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 41 da Lei nº 11.340/2006 veda expressamente a aplicação da Lei nº 9.099/95 a qualquer crime praticado no contexto de violência doméstica e familiar contra a mulher. Não cabe transação penal, nem suspensão condicional do processo, nem cesta básica (Súmula 536 e 588 do STJ).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_056",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Relação Íntima e Coabitação (Súmula 600 STJ)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q056] Conforme expressamente sumulado pelo Superior Tribunal de Justiça (Súmula nº 600), para a configuração da violência doméstica e familiar contra a mulher nos moldes da Lei Maria da Penha:",
    "options": [
      "É indispensável que o casal resida sob o mesmo teto por pelo menos 1 ano.",
      "Não se exige a coabitação entre autor e vítima.",
      "Exige-se a existência de filhos comuns devidamente registrados em cartório.",
      "É obrigatória a formalização prévia de união estável perante tabelião de notas.",
      "Aplica-se apenas quando o autor do delito for do sexo masculino com vínculo de casamento civil."
    ],
    "correctIndex": 1,
    "explanation": "A Súmula 600 do STJ enuncia: 'Para a configuração da violência doméstica e familiar prevista no artigo 5º da Lei nº 11.340/2006 (Lei Maria da Penha), não se exige a coabitação entre autor e vítima'. Aplica-se a ex-namorados, noivos e parentes mesmo que nunca tenham morado juntos.",
    "fundamentacaoLegal": "Súmula 600 do Superior Tribunal de Justiça.",
    "hint": "Súmula 600 STJ: NÃO EXIGE MORAR JUNTO (coabitação é desnecessária)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Ex-namorado agressor cai na Maria da Penha mesmo sem morar junto (Súmula 600 STJ).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. A Súmula 600 do STJ enuncia: 'Para a configuração da violência doméstica e familiar prevista no artigo 5º da Lei nº 11.340/2006 (Lei Maria da Penha), não se exige a coabitação entre autor e vítima'. Aplica-se a ex-namorados, noivos e parentes mesmo que nunca tenham morado juntos.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_057",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Ação Penal na Lesão Corporal",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q057] A ação penal no crime de lesão corporal de qualquer gravidade (leve, grave, gravíssima ou seguida de morte), praticado contra a mulher no âmbito doméstico e familiar:",
    "options": [
      "É pública condicionada à representação que deve ser renovada a cada 6 meses.",
      "É privada e depende de propositura de queixa-crime por advogado habilitado.",
      "Extingue-se compulsoriamente se a mulher reatar o relacionamento com o parceiro.",
      "Condiciona-se à prévia autorização da autoridade ministerial estadual.",
      "É pública incondicionada (Súmula 542 do STJ e decisão do STF na ADI 4.424)."
    ],
    "correctIndex": 4,
    "explanation": "A Súmula 542 do STJ e o STF (ADI 4.424) pacificaram que a ação penal por lesão corporal praticada contra a mulher no âmbito doméstico e familiar é PÚBLICA INCONDICIONADA. A vítima não pode 'retirar a queixa' nem condicionar o processo, que segue obrigatoriamente.",
    "fundamentacaoLegal": "Súmula 542 do STJ e STF ADI 4.424.",
    "hint": "Lesão corporal na Maria da Penha é PÚBLICA INCONDICIONADA! Não dá para retirar queixa.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Bateu na mulher = Pública Incondicionada (Súmula 542 do STJ). O Estado processa sem depender da vítima.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. A Súmula 542 do STJ e o STF (ADI 4.424) pacificaram que a ação penal por lesão corporal praticada contra a mulher no âmbito doméstico e familiar é PÚBLICA INCONDICIONADA. A vítima não pode 'retirar a queixa' nem condicionar o processo, que segue obrigatoriamente."
    }
  },
  {
    "id": "leg_ext_inedita_100_058",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Renúncia à Representação em Crimes Condicionados (Art. 16)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q058] Nas ações penais públicas CONDICIONADAS à representação da ofendida de que trata a Lei nº 11.340/2006 (como no crime de ameaça), só será admitida a renúncia à representação:",
    "options": [
      "Diretamente no balcão da delegacia de polícia, na presença do escrivão de polícia de plantão.",
      "Perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público.",
      "Por declaração de próprio punho com firma reconhecida em cartório de notas a qualquer tempo.",
      "Após o trânsito em julgado da sentença condenatória, mediante pedido de indulto individual.",
      "Em reunião informal de mediação comunitária realizada no batalhão da Polícia Militar."
    ],
    "correctIndex": 1,
    "explanation": "O art. 16 da Lei nº 11.340/2006 determina que a renúncia à representação só será admitida perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público. Não vale renúncia na delegacia.",
    "fundamentacaoLegal": "Art. 16 da Lei nº 11.340/2006.",
    "hint": "Audiência do art. 16: perante o JUIZ, ouvido o MP e ANTES do recebimento da denúncia!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Desistir de processar por ameaça só perante o juiz em audiência especial antes de a denúncia ser recebida.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 16 da Lei nº 11.340/2006 determina que a renúncia à representação só será admitida perante o juiz, em audiência especialmente designada com tal finalidade, antes do recebimento da denúncia e ouvido o Ministério Público. Não vale renúncia na delegacia.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_059",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Medidas de Proteção que Obrigam o Agressor (Art. 22)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q059] Dentre as medidas protetivas de urgência que obrigam o agressor, previstas no art. 22 da Lei nº 11.340/2006, inclui-se expressamente:",
    "options": [
      "A transferência compulsória de todos os imóveis do agressor para o nome da vítima em cartório.",
      "A internação compulsória do agressor em manicômio judiciário por tempo indeterminado.",
      "A perda definitiva dos direitos políticos e do direito de votar em eleições federais.",
      "A submissão do agressor a trabalhos forçados em obras públicas municipais.",
      "A suspensão da posse ou restrição do porte de armas, com comunicação ao órgão competente do Ministério da Justiça ou das Forças Armadas."
    ],
    "correctIndex": 4,
    "explanation": "O art. 22, inciso I prevê expressamente a suspensão da posse ou restrição do porte de armas, com imediata comunicação ao órgão competente. Também prevê o afastamento do lar, proibição de aproximação e contato com a vítima e fixação de alimentos provisionais.",
    "fundamentacaoLegal": "Art. 22, inciso I da Lei nº 11.340/2006.",
    "hint": "Medida protetiva: suspender posse ou restringir o porte de armas do agressor!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Se o agressor tem arma, o juiz recolhe/suspende o porte imediatamente.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 22, inciso I prevê expressamente a suspensão da posse ou restrição do porte de armas, com imediata comunicação ao órgão competente. Também prevê o afastamento do lar, proibição de aproximação e contato com a vítima e fixação de alimentos provisionais."
    }
  },
  {
    "id": "leg_ext_inedita_100_060",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 11.340/2006 • Atendimento Policial Especializado (Art. 10-A)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q060] No atendimento à mulher em situação de violência doméstica e familiar, a autoridade policial deverá observar, conforme o art. 10-A da Lei nº 11.340/2006:",
    "options": [
      "A inquirição da mulher em recinto especialmente projetado para esse fim, a não revitimização e a preferência pelo atendimento por servidores do sexo feminino.",
      "A realização de acareação imediata e obrigatória entre a vítima agredida e o suposto autor.",
      "A intimação dos vizinhos do prédio para prestar depoimento sobre a moral pregressa da vítima.",
      "O encaminhamento da vítima a cartório civil para formalização de divórcio no prazo de 24 horas.",
      "A publicação dos dados pessoais e endereço da vítima no diário oficial da segurança pública."
    ],
    "correctIndex": 0,
    "explanation": "O art. 10-A, incluído pela Lei 13.505/2017, garante: atendimento em recinto próprio, garantia de não revitimização, vedação de contato com o agressor e familiares deste, e atendimento preferencialmente por servidoras do sexo feminino.",
    "fundamentacaoLegal": "Art. 10-A da Lei nº 11.340/2006.",
    "hint": "Atendimento especializado: evitar revitimização, recinto adequado e preferencialmente por policiais femininas!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Evitar revitimizar a mulher agredida: atendimento humanizado e preferencialmente policial feminina.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 10-A, incluído pela Lei 13.505/2017, garante: atendimento em recinto próprio, garantia de não revitimização, vedação de contato com o agressor e familiares deste, e atendimento preferencialmente por servidoras do sexo feminino.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_061",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Embriaguez ao Volante (Art. 306)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q061] O crime de embriaguez ao volante (conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa que determine dependência), previsto no art. 306 do CTB:",
    "options": [
      "Exige comprovação de perigo concreto de dano, como quase atropelar um pedestre ou colidir em poste.",
      "Deixou de ser crime após a Lei Seca, consistindo em mera infração administrativa de trânsito.",
      "Só admite constatação mediante laudo de exame de sangue coletado compulsoriamente pelo policial.",
      "É crime de perigo abstrato, consumando-se pela constatação de concentração igual ou superior a 6 decigramas de álcool por litro de sangue ou 0,3 miligrama por litro de ar alveolar, ou sinais notórios de alteração, prescindindo de perigo concreto à segurança viária.",
      "Permite a imediata devolução do veículo ao condutor embriagado caso ele pague fiança no local."
    ],
    "correctIndex": 3,
    "explanation": "O art. 306 do CTB é crime de perigo abstrato (STJ, Tema 484): basta a condução de veículo automotor com a capacidade psicomotora alterada (índices: >= 6 dg/L de sangue ou >= 0,3 mg/L no etilômetro, ou sinais clínicos/vídeos). Não se exige direção anormal ou perigo concreto para terceiros.",
    "fundamentacaoLegal": "Art. 306 do CTB e STJ Tema Repetitivo 484.",
    "hint": "Crime de PERIGO ABSTRATO! Não precisa bater o carro nem ziguezaguear para cometer o crime.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Assoprou no bafômetro >= 0,30 mg/L = crime consumado na hora (perigo abstrato).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 306 do CTB é crime de perigo abstrato (STJ, Tema 484): basta a condução de veículo automotor com a capacidade psicomotora alterada (índices: >= 6 dg/L de sangue ou >= 0,3 mg/L no etilômetro, ou sinais clínicos/vídeos). Não se exige direção anormal ou perigo concreto para terceiros.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_062",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Homicídio Culposo Qualificado por Álcool (Art. 302, § 3º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q062] Se o agente comete homicídio culposo na direção de veículo automotor sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência (art. 302, § 3º do CTB):",
    "options": [
      "A pena é de detenção de 2 a 4 anos e admite fiança imediata pelo delegado de polícia de plantão.",
      "O condutor responderá por homicídio doloso com qualificadora de motivo fútil pelo Tribunal do Júri.",
      "Aplica-se compulsoriamente a transação penal perante o Juizado Especial Criminal.",
      "Fica extinta a punibilidade se o condutor pagar indenização pecuniária à família da vítima.",
      "A pena é de reclusão de 5 (cinco) a 8 (oito) anos, além da suspensão ou proibição do direito de se obter a permissão ou a habilitação para dirigir, sendo vedado o arbitramento de fiança pela autoridade policial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 302, § 3º prevê reclusão de 5 a 8 anos para homicídio culposo sob influência de álcool/entorpecentes. Como a pena máxima cominada supera 4 anos, o Delegado de Polícia NÃO pode arbitrar fiança (art. 322 do CPP); a fiança só pode ser concedida pelo juiz.",
    "fundamentacaoLegal": "Art. 302, § 3º do CTB e Art. 322 do CPP.",
    "hint": "Homicídio culposo com álcool no CTB: RECLUSÃO de 5 a 8 anos e DELEGADO NÃO PODE DAR FIANÇA!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Bebeu e matou no trânsito culposamente: reclusão 5 a 8 anos, sem fiança no plantão da delegacia.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 302, § 3º prevê reclusão de 5 a 8 anos para homicídio culposo sob influência de álcool/entorpecentes. Como a pena máxima cominada supera 4 anos, o Delegado de Polícia NÃO pode arbitrar fiança (art. 322 do CPP); a fiança só pode ser concedida pelo juiz."
    }
  },
  {
    "id": "leg_ext_inedita_100_063",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Lesão Corporal Culposa Qualificada (Art. 303, § 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q063] Conforme o art. 303, § 2º do Código de Trânsito Brasileiro, a lesão corporal culposa na direção de veículo automotor praticada sob influência de álcool ou substância psicoativa:",
    "options": [
      "É qualificada com pena de reclusão de 2 a 5 anos se do crime resultar lesão corporal de natureza grave ou gravíssima.",
      "É punida sempre com detenção de 6 meses a 2 anos, independentemente da gravidade da lesão.",
      "Depende obrigatoriamente de representação da vítima para a deflagração da ação penal.",
      "Admite a concessão de perdão judicial pelo Comandante da Unidade de Trânsito Rodoviário.",
      "Constitui infração de competência exclusiva do Tribunal do Júri da Comarca."
    ],
    "correctIndex": 0,
    "explanation": "O art. 303, § 2º estabelece que a lesão culposa no trânsito, cometida com capacidade alterada por álcool/drogas, comina pena de RECLUSÃO de 2 a 5 anos SE resultar lesão corporal grave ou gravíssima. Além disso, pelo art. 291, § 1º, I, afasta-se a necessidade de representação da vítima.",
    "fundamentacaoLegal": "Art. 303, § 2º e Art. 291, § 1º, I do CTB.",
    "hint": "Lesão culposa com álcool + lesão grave/gravíssima = Reclusão de 2 a 5 anos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Álcool + lesão grave/gravíssima = 2 a 5 anos de reclusão (ação pública incondicionada).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 303, § 2º estabelece que a lesão culposa no trânsito, cometida com capacidade alterada por álcool/drogas, comina pena de RECLUSÃO de 2 a 5 anos SE resultar lesão corporal grave ou gravíssima. Além disso, pelo art. 291, § 1º, I, afasta-se a necessidade de representação da vítima.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_064",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Fuga do Local do Acidente (Art. 305)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q064] O crime do art. 305 do CTB (afastar-se o condutor do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída):",
    "options": [
      "Foi sumariamente revogado pelo Código de Processo Penal por ofensa ao direito ao silêncio.",
      "Foi declarado constitucional pelo STF (Tema 1.097 da Repercussão Geral), não violando o direito de não autoincriminação (nemo tenetur se detegere).",
      "Aplica-se apenas quando o acidente tiver gerado danos exclusivamente patrimoniais à União.",
      "Exige que o condutor deixe de prestar socorro à vítima ferida para que reste configurado.",
      "É punido com pena de reclusão de 4 a 10 anos em regime inicialmente fechado."
    ],
    "correctIndex": 1,
    "explanation": "O STF fixou a tese do Tema 1.097 da Repercussão Geral: 'A regra que prevê a tipificação do crime de fuga do local do acidente (art. 305 do CTB) é CONSTITUCIONAL, pois não impõe a autoincriminação, mas a identificação do condutor e a permanência para socorro e elucidação dos fatos'.",
    "fundamentacaoLegal": "Art. 305 do CTB e STF RE 971.606 (Tema 1.097).",
    "hint": "Fugir do local do acidente para não responder civil/penalmente É CRIME CONSTITUCIONAL (STF)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Fugir do acidente para não ser pego = crime do art. 305 (STF confirmou que é constitucional).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O STF fixou a tese do Tema 1.097 da Repercussão Geral: 'A regra que prevê a tipificação do crime de fuga do local do acidente (art. 305 do CTB) é CONSTITUCIONAL, pois não impõe a autoincriminação, mas a identificação do condutor e a permanência para socorro e elucidação dos fatos'.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_065",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Racha ou Disputa Automobilística (Art. 308)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q065] Participar, na direção de veículo automotor, em via pública, de corrida, disputa ou competição automobilística ou ainda de exibição ou demonstração de perícia em manobra de veículo automotor, não autorizada pela autoridade competente, gerando situação de risco à incolumidade pública:",
    "options": [
      "Constitui mera infração de trânsito sujeita unicamente a recolhimento do veículo ao depósito.",
      "É considerado crime militar próprio caso ocorra nas proximidades de um batalhão da PMPE.",
      "Exige o envolvimento de pelo menos dez veículos automotores para tipificar a competição.",
      "Configura o crime do art. 308 do CTB (racha), com pena de detenção de 6 meses a 3 anos, qualificado com reclusão de 3 a 6 anos se houver lesão grave, ou reclusão de 5 a 10 anos se resultar morte.",
      "Impede a instauração de ação penal pública caso nenhum pedestre tenha sido ferido."
    ],
    "correctIndex": 3,
    "explanation": "O art. 308 tipifica o racha. Caput: detenção de 6 meses a 3 anos, multa e suspensão/proibição do direito de dirigir. Se resultar lesão corporal grave/gravíssima: reclusão de 3 a 6 anos (§ 1º); se resultar MORTE: reclusão de 5 a 10 anos (§ 2º).",
    "fundamentacaoLegal": "Art. 308, caput e §§ 1º e 2º do CTB.",
    "hint": "Racha no CTB: Caput = 6m a 3 anos; Lesão grave = 3 a 6 anos; Morte = 5 a 10 anos de reclusão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Racha com morte: 5 a 10 anos de reclusão (crime preterdoloso com qualificadora gravíssima).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 308 tipifica o racha. Caput: detenção de 6 meses a 3 anos, multa e suspensão/proibição do direito de dirigir. Se resultar lesão corporal grave/gravíssima: reclusão de 3 a 6 anos (§ 1º); se resultar MORTE: reclusão de 5 a 10 anos (§ 2º).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_066",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Direção sem Habilitação (Art. 309)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q066] Dirigir veículo automotor, em via pública, sem a devida Permissão para Dirigir ou Habilitação ou, ainda, se cassado o direito de dirigir (art. 309 do CTB):",
    "options": [
      "É crime de perigo puramente abstrato, consumando-se pelo mero ato de guiar sem a CNH na carteira.",
      "Equipara-se à infração do art. 306 e exige comprovação de alteração psicomotora por álcool.",
      "É fato punido com reclusão de 2 a 4 anos e apreensão definitiva do veículo em favor do DETRAN.",
      "Exclui a responsabilidade administrativa do proprietário do veículo automotor.",
      "Exige a geração de perigo concreto de dano para que a conduta se torne penalmente típica."
    ],
    "correctIndex": 4,
    "explanation": "O art. 309 do CTB exige expressamente: '...gerando perigo concreto de dano'. Se a pessoa dirigir sem CNH de forma calma, regular e sem gerar perigo concreto a ninguém, comete apenas a infração administrativa gravíssima do art. 162, I do CTB, mas NÃO comete o crime do art. 309.",
    "fundamentacaoLegal": "Art. 309 do CTB e Súmula do STJ.",
    "hint": "Art. 309 exige PERIGO CONCRETO DE DANO! Sem perigo concreto, é só infração de trânsito.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Dirigir sem CNH: só é crime se der 'fechada', subir na calçada ou gerar perigo concreto.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 309 do CTB exige expressamente: '...gerando perigo concreto de dano'. Se a pessoa dirigir sem CNH de forma calma, regular e sem gerar perigo concreto a ninguém, comete apenas a infração administrativa gravíssima do art. 162, I do CTB, mas NÃO comete o crime do art. 309."
    }
  },
  {
    "id": "leg_ext_inedita_100_067",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Entregar Veículo a Inabilitado (Art. 310)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q067] Permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, ou, ainda, a quem, por seu estado de saúde, física ou mental, ou por embriaguez, não esteja em condições de conduzi-lo com segurança (art. 310 do CTB):",
    "options": [
      "É crime de perigo concreto que depende da ocorrência de colisão ou lesão corporal na via.",
      "É crime de perigo abstrato, sendo desnecessária a demonstração de perigo concreto de dano (Súmula 575 do STJ).",
      "Constitui infração de competência exclusiva do Tribunal Marítimo e Fluvial.",
      "Apenas é punido se a pessoa que recebeu o veículo provocar acidente fatal com vítimas.",
      "Fica descaracterizado caso o proprietário estivesse dormindo no banco do passageiro."
    ],
    "correctIndex": 1,
    "explanation": "A Súmula 575 do STJ consolidou que: 'Constitui crime de perigo abstrato a conduta de permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, ou a quem, por seu estado de saúde ou embriaguez, não esteja em condições de conduzi-lo com segurança'. O crime é consumado no momento da entrega das chaves.",
    "fundamentacaoLegal": "Art. 310 do CTB e Súmula 575 do STJ.",
    "hint": "Súmula 575 STJ: Entregar chave para quem não tem CNH é crime de PERIGO ABSTRATO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Entregou a chave para inabilitado = crime consumado na hora (Súmula 575 STJ).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. A Súmula 575 do STJ consolidou que: 'Constitui crime de perigo abstrato a conduta de permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou com o direito de dirigir suspenso, ou a quem, por seu estado de saúde ou embriaguez, não esteja em condições de conduzi-lo com segurança'. O crime é consumado no momento da entrega das chaves.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_068",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Omissão de Socorro no Trânsito (Art. 304)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q068] Deixar o condutor do veículo, na ocasião do sinistro, de prestar imediato socorro à vítima, ou, não podendo fazê-lo diretamente por justa causa, deixar de solicitar auxílio da autoridade pública (art. 304 do CTB):",
    "options": [
      "Deixa de ser punível se qualquer transeunte ou ambulância socorrer a vítima primeiro.",
      "Aplica-se apenas ao condutor que tenha agido com dolo de matar ao colidir seu veículo.",
      "Fica isento de pena caso o condutor comprove que estava atrasado para compromisso de trabalho.",
      "Configura crime de detenção de 6 meses a 1 ano ou multa, incidindo as penas ainda que a vítima tenha morte instantânea ou que o socorro seja prestado por terceiros.",
      "É infração processada perante a Justiça Militar Estadual se a vítima for servidor público estadual."
    ],
    "correctIndex": 3,
    "explanation": "O parágrafo único do art. 304 do CTB é explícito: 'Incide nas penas previstas neste artigo o condutor do veículo, ainda que a sua omissão seja suprida por terceiros ou que se trate de vítima com morte instantânea ou com ferimentos leves'. Trata-se de dever de solidariedade imposto ao condutor.",
    "fundamentacaoLegal": "Art. 304, parágrafo único do CTB.",
    "hint": "Omissão de socorro pune MESMO QUE outro socorra ou que a vítima tenha morrido na hora!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Fugiu sem socorrer: responde pelo art. 304 mesmo se a SAMU chegou ou se a vítima morreu no ato.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O parágrafo único do art. 304 do CTB é explícito: 'Incide nas penas previstas neste artigo o condutor do veículo, ainda que a sua omissão seja suprida por terceiros ou que se trate de vítima com morte instantânea ou com ferimentos leves'. Trata-se de dever de solidariedade imposto ao condutor.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_069",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Agravantes Específicas do Trânsito (Art. 298)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q069] São circunstâncias que sempre agravam as penalidades dos crimes de trânsito, nos termos do art. 298 do CTB, ter o condutor cometido a infração:",
    "options": [
      "Com dano potencial para duas ou mais pessoas ou com grande risco de grave dano patrimonial a terceiros; utilizando veículo sem placas ou com placas adulteradas; e sobre faixa de pedestres.",
      "Em dia ensolarado com visibilidade perfeita em pista dupla municipal.",
      "Portando aparelho celular desligado no interior do porta-malas do veículo.",
      "Conduzindo veículo com seguro obrigatório DPVAT quitado com antecedência.",
      "Com velocidade inferior ao limite máximo estabelecido para a via urbana."
    ],
    "correctIndex": 0,
    "explanation": "O art. 298 do CTB prevê como agravantes específicas: dano potencial para duas ou mais pessoas; veículo sem placas/placas falsas; sem habilitação; sobre faixa de pedestres; com profissão/atividade que exija cuidados especiais com trânsito (motorista profissional); transportando passageiros.",
    "fundamentacaoLegal": "Art. 298 do CTB.",
    "hint": "Agravantes do art. 298: placa adulterada, faixa de pedestres, perigo para várias pessoas!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Cometeu crime de trânsito em cima da faixa de pedestre ou sem placa = pena agravada.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 298 do CTB prevê como agravantes específicas: dano potencial para duas ou mais pessoas; veículo sem placas/placas falsas; sem habilitação; sobre faixa de pedestres; com profissão/atividade que exija cuidados especiais com trânsito (motorista profissional); transportando passageiros.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_070",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 9.503/1997 (CTB) • Vedações aos Institutos Despenalizadores (Art. 291)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q070] No crime de lesão corporal culposa na direção de veículo automotor (art. 303 do CTB), NÃO se aplicam os institutos da Lei nº 9.099/1995 (transação penal, representação e composição civil) quando o agente estiver:",
    "options": [
      "Conduzindo motocicleta de baixa cilindrada sem luvas de proteção individuais.",
      "Trafegando com faróis apagados durante período diurno em rodovia federal.",
      "Com o extintor de incêndio veicular fora do prazo de validade recomendado.",
      "Com débitos de IPVA pendentes de pagamento na Secretaria da Fazenda Estadual.",
      "Sob a influência de álcool ou qualquer outra substância psicoativa; participando de racha em via pública; ou transitando em velocidade superior à máxima permitida em 50 km/h."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o art. 291, § 1º do CTB, afasta-se a Lei 9.099/95 (tornando a ação penal pública incondicionada e vedando transação) se o condutor: I - estiver sob a influência de álcool ou substância psicoativa; II - estiver participando de racha (art. 308); III - estiver transitando em velocidade superior à máxima em 50 km/h.",
    "fundamentacaoLegal": "Art. 291, § 1º, incisos I, II e III do CTB.",
    "hint": "3 hipóteses que bloqueiam a Lei 9.099/95: Álcool/drogas, Racha, ou Velocidade 50 km/h acima do limite!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Álcool, Racha ou +50 km/h: perde os benefícios dos Juizados Especiais.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. Conforme o art. 291, § 1º do CTB, afasta-se a Lei 9.099/95 (tornando a ação penal pública incondicionada e vedando transação) se o condutor: I - estiver sob a influência de álcool ou substância psicoativa; II - estiver participando de racha (art. 308); III - estiver transitando em velocidade superior à máxima em 50 km/h."
    }
  },
  {
    "id": "leg_ext_inedita_100_071",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Conceito de Criança e Adolescente (Art. 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q071] Considera-se criança e adolescente, para os efeitos legais do Estatuto da Criança e do Adolescente (art. 2º da Lei nº 8.069/1990):",
    "options": [
      "Criança a pessoa até 10 anos completos, e adolescente aquela entre 11 e 16 anos incompletos.",
      "Criança até 14 anos incompletos, e adolescente entre 14 e 21 anos em qualquer circunstância.",
      "Criança a pessoa até 12 (doze) anos de idade incompletos, e adolescente aquela entre 12 (doze) e 18 (dezoito) anos de idade.",
      "Criança a pessoa não alfabetizada e adolescente aquela que já concluiu o ensino fundamental.",
      "Criança a pessoa dependente dos pais e adolescente qualquer jovem matriculado no ensino médio."
    ],
    "correctIndex": 2,
    "explanation": "O art. 2º da Lei nº 8.069/1990 é categórico: 'Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade'.",
    "fundamentacaoLegal": "Art. 2º da Lei nº 8.069/1990.",
    "hint": "Criança: até 12 anos incompletos. Adolescente: de 12 a 18 anos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Fez 12 anos: virou adolescente até completar 18 anos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 2º da Lei nº 8.069/1990 é categórico: 'Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade'.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_072",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Medidas Socioeducativas vs. Proteção (Arts. 101 e 112)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q072] Verificada a prática de ato infracional por CRIANÇA (menor de 12 anos de idade incompletos), a autoridade competente poderá aplicar-lhe:",
    "options": [
      "Exclusivamente as medidas de proteção previstas no art. 101 do ECA, sendo terminantemente vedada a aplicação de medidas socioeducativas a crianças.",
      "A medida socioeducativa de internação em unidade fechada pelo prazo de até 3 anos.",
      "A medida socioeducativa de semiliberdade cumulada com prestação de serviços à comunidade.",
      "Pena privativa de liberdade em regime aberto no Centro de Atendimento Socioeducativo.",
      "Multa pecuniária executada diretamente sobre os bens dos avós maternos."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 105 da Lei nº 8.069/1990: 'Ao ato infracional praticado por criança corresponderão as medidas previstas no art. 101 (medidas específicas de proteção)'. Medidas socioeducativas (art. 112, ex.: internação, semiliberdade, liberdade assistida, serviços à comunidade) aplicam-se EXCLUSIVAMENTE a ADOLESCENTES.",
    "fundamentacaoLegal": "Arts. 101, 105 e 112 da Lei nº 8.069/1990.",
    "hint": "CRIANÇA só recebe MEDIDA DE PROTEÇÃO! Adolescente recebe MEDIDA SOCIOEDUCATIVA.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Criança não sofre medida socioeducativa: para criança é só medida de proteção.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. Conforme o art. 105 da Lei nº 8.069/1990: 'Ao ato infracional praticado por criança corresponderão as medidas previstas no art. 101 (medidas específicas de proteção)'. Medidas socioeducativas (art. 112, ex.: internação, semiliberdade, liberdade assistida, serviços à comunidade) aplicam-se EXCLUSIVAMENTE a ADOLESCENTES.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_073",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Hipóteses de Internação do Adolescente (Art. 122)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q073] A medida socioeducativa de internação só poderá ser aplicada quando se tratar de ato infracional praticado por adolescente nas seguintes hipóteses taxativas do art. 122 do ECA:",
    "options": [
      "Equiparado a furto simples de bicicleta em período noturno na via pública.",
      "Cometido mediante grave ameaça ou violência a pessoa; por reiteração no cometimento de outras infrações graves; ou por descumprimento reiterado e injustificável da medida anteriormente imposta.",
      "Equiparado a porte de droga para consumo pessoal ou pichação de monumento tombado.",
      "Equiparado a desacato verbal simples contra agente público de trânsito municipal.",
      "Praticado por adolescente que tenha evadido de escola pública por mais de 30 dias."
    ],
    "correctIndex": 1,
    "explanation": "O art. 122 do ECA traz rol taxativo: I - ato infracional cometido mediante grave ameaça ou violência a pessoa; II - reiteração no cometimento de outras infrações graves; III - descumprimento reiterado e injustificável de medida anteriormente imposta (neste caso III, internação-sanção com prazo máximo de 3 meses). O tráfico de drogas por si só, sem violência/grave ameaça, não autoriza internação (Súmula 492 do STJ).",
    "fundamentacaoLegal": "Art. 122 da Lei nº 8.069/1990 e Súmula 492 do STJ.",
    "hint": "Internação só cabe em: 1) Violência ou grave ameaça; 2) Reiteração de infrações graves; 3) Descumprimento reiterado de medida!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Internar adolescente é exceção da exceção: precisa de violência, reiteração grave ou desobediência reiterada.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 122 do ECA traz rol taxativo: I - ato infracional cometido mediante grave ameaça ou violência a pessoa; II - reiteração no cometimento de outras infrações graves; III - descumprimento reiterado e injustificável de medida anteriormente imposta (neste caso III, internação-sanção com prazo máximo de 3 meses). O tráfico de drogas por si só, sem violência/grave ameaça, não autoriza internação (Súmula 492 do STJ).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_074",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Limite de Duração da Internação (Art. 121)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q074] A medida socioeducativa de internação constitui medida privativa da liberdade e é regida pelos princípios da brevidade e excepcionalidade. Conforme o art. 121 do ECA:",
    "options": [
      "O prazo máximo é de 5 anos para infrações hediondas, com liberação compulsória aos 25 anos.",
      "A internação pode ter prazo indeterminado e perpétuo até a ressocialização atestada por psiquiatra.",
      "A manutenção da internação é reavaliada pelo juiz a cada 2 anos ininterruptos.",
      "O período máximo de internação não excederá a 3 (três) anos, sendo a liberação compulsória aos 21 (vinte e um) anos de idade.",
      "O adolescente internado não tem direito a visitas familiares nem a correspondência escrita."
    ],
    "correctIndex": 3,
    "explanation": "O art. 121, §§ 2º e 5º estabelece que a internação não pode ultrapassar o limite máximo de 3 anos, devendo a sua manutenção ser reavaliada no máximo a cada 6 meses (§ 2º), sendo a liberação COMPULSÓRIA aos 21 anos de idade (§ 5º).",
    "fundamentacaoLegal": "Art. 121, §§ 2º, 3º e 5º da Lei nº 8.069/1990.",
    "hint": "Prazo máximo de internação: 3 ANOS! Reavaliação a cada 6 MESES. Saída compulsória aos 21 ANOS!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Internação: Máximo 3 anos, reavalia a cada 6 meses, bateu 21 anos está na rua.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 121, §§ 2º e 5º estabelece que a internação não pode ultrapassar o limite máximo de 3 anos, devendo a sua manutenção ser reavaliada no máximo a cada 6 meses (§ 2º), sendo a liberação COMPULSÓRIA aos 21 anos de idade (§ 5º).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_075",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Corrupção de Menores (Art. 244-B e Súmula 500 STJ)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q075] O crime de corrupção de menores (art. 244-B da Lei nº 8.069/1990), que pune com reclusão de 1 a 4 anos quem corrompe ou facilita a corrupção de menor de 18 anos, com ele praticando infração penal ou induzindo-o a praticá-la:",
    "options": [
      "É crime material que exige laudo psicossocial comprovando que a moral do menor foi degradada.",
      "É crime formal, sendo desnecessária a prova da efetiva corrupção do menor, nos termos da Súmula nº 500 do STJ.",
      "Apenas se configura se o adolescente for primário e nunca tiver praticado ato infracional anterior.",
      "Exige que o maior de idade seja o mentor intelectual ou o líder da empreitada criminosa.",
      "Não se aplica quando a infração praticada em conjunto for um delito contra o patrimônio."
    ],
    "correctIndex": 1,
    "explanation": "A Súmula 500 do STJ consagrou: 'A configuração do crime do art. 244-B do ECA independe da prova da efetiva corrupção do menor, por se tratar de delito formal'. Mesmo que o menor já fosse infrator contumaz, o maior responde pelo crime ao praticar delito na companhia dele.",
    "fundamentacaoLegal": "Art. 244-B do ECA e Súmula 500 do STJ.",
    "hint": "Súmula 500 STJ: Corrupção de menores é CRIME FORMAL! Não precisa provar que o menor se corrompeu.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Cometeu crime com 'menor': responde pelo crime + corrupção de menores (Súmula 500 STJ).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. A Súmula 500 do STJ consagrou: 'A configuração do crime do art. 244-B do ECA independe da prova da efetiva corrupção do menor, por se tratar de delito formal'. Mesmo que o menor já fosse infrator contumaz, o maior responde pelo crime ao praticar delito na companhia dele.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_076",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Fornecimento de Bebida Alcoólica a Criança/Adolescente (Art. 243)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q076] Vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, de qualquer forma, a criança ou a adolescente, bebida alcoólica ou, sem justa causa, outros produtos cujos componentes possam causar dependência física ou psíquica:",
    "options": [
      "Constitui contravenção penal simples afiançável com advertência verbal do Conselho Tutelar.",
      "Configura crime previsto no art. 243 do ECA, com pena de detenção de 2 a 4 anos, e multa, além de interdição do estabelecimento comercial.",
      "É infração que depende de representação formal do Ministério Público do Trabalho.",
      "Não configura crime se a bebida for entregue com o consentimento expresso dos pais no local.",
      "Trata-se de infração administrativa punida unicamente com cancelamento do alvará municipal."
    ],
    "correctIndex": 1,
    "explanation": "A Lei 13.106/2015 alterou o art. 243 do ECA para punir criminalmente quem vende, fornece ou serve bebida alcoólica a criança ou adolescente com pena de detenção de 2 a 4 anos e multa. Trata-se de crime formal de perigo abstrato.",
    "fundamentacaoLegal": "Art. 243 da Lei nº 8.069/1990.",
    "hint": "Vender ou servir bebida alcoólica a menor de 18 anos É CRIME DO ART. 243 DO ECA (detenção 2 a 4 anos)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Dar cerveja para menor é crime com detenção de 2 a 4 anos e fecha o bar.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. A Lei 13.106/2015 alterou o art. 243 do ECA para punir criminalmente quem vende, fornece ou serve bebida alcoólica a criança ou adolescente com pena de detenção de 2 a 4 anos e multa. Trata-se de crime formal de perigo abstrato.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_077",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Apreensão em Flagrante de Adolescente (Art. 106 e 107)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q077] Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente. Sendo apreendido o adolescente:",
    "options": [
      "Ele poderá ser recolhido em cela comum com presos adultos por até 48 horas para triagem policial.",
      "O policial militar deverá conduzi-lo primeiramente à residência dos vizinhos para identificação.",
      "A autoridade policial deverá comunicar imediatamente o fato à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada.",
      "É obrigatória a colheita de depoimento sem a presença de responsável legal ou advogado.",
      "A apreensão prescinde de qualquer documentação escrita caso o ato seja de menor potencial ofensivo."
    ],
    "correctIndex": 2,
    "explanation": "O art. 107 do ECA estabelece: 'A apreensão de qualquer adolescente e o local onde se encontra recolhido serão incontinenti comunicados à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada'. O art. 185 veda expressamente o transporte ou custódia de adolescentes em compartimento fechado de viatura ou com presos adultos.",
    "fundamentacaoLegal": "Arts. 106 e 107 da Lei nº 8.069/1990.",
    "hint": "Comunicação INCONTINENTI (imediata) ao juiz e à família/pessoa indicada!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Apreendeu adolescente: comunicação imediata ao juiz e à família.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 107 do ECA estabelece: 'A apreensão de qualquer adolescente e o local onde se encontra recolhido serão incontinenti comunicados à autoridade judiciária competente e à família do apreendido ou à pessoa por ele indicada'. O art. 185 veda expressamente o transporte ou custódia de adolescentes em compartimento fechado de viatura ou com presos adultos.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_078",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Princípio da Especialidade e Teoria da Atividade (Art. 104)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q078] Para os efeitos de apuração de ato infracional praticado por menor de 18 anos, nos termos do art. 104, parágrafo único da Lei nº 8.069/1990, considera-se a idade do adolescente:",
    "options": [
      "À data do resultado morte ou dano patrimonial (teoria do resultado).",
      "À data da audiência de apresentação perante a Vara da Infância e Juventude.",
      "À data do fato (teoria da atividade).",
      "À data da sentença homologatória do plano individual de atendimento.",
      "À data da conclusão do inquérito policial ou relatório circunstanciado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 104, parágrafo único do ECA adota expressamente a teoria da atividade: 'Para os efeitos desta Lei, deve ser considerada a idade do adolescente à data do fato'. Se ele cometeu o ato aos 17 anos e 364 dias, responde por ato infracional segundo as normas do ECA, mesmo que a vítima faleça quando ele já tiver 18 anos.",
    "fundamentacaoLegal": "Art. 104, parágrafo único da Lei nº 8.069/1990.",
    "hint": "Teoria da Atividade: o que vale é a idade EXATA no momento da conduta (à data do fato)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Idade na data do fato define se é ECA ou Código Penal (teoria da atividade).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 104, parágrafo único do ECA adota expressamente a teoria da atividade: 'Para os efeitos desta Lei, deve ser considerada a idade do adolescente à data do fato'. Se ele cometeu o ato aos 17 anos e 364 dias, responde por ato infracional segundo as normas do ECA, mesmo que a vítima faleça quando ele já tiver 18 anos.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_079",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Guarda e Conselho Tutelar",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q079] Em relação às atribuições do Conselho Tutelar previstas no art. 136 da Lei nº 8.069/1990, assinale a afirmativa correta:",
    "options": [
      "O Conselho Tutelar possui poder jurisdicional para decretar a perda definitiva do poder familiar.",
      "Compete ao Conselho Tutelar atender crianças e adolescentes nas hipóteses de ameaça ou violação de direitos, requisitar serviços públicos nas áreas de saúde e educação e encaminhar ao MP notícia de infração penal contra criança.",
      "Cabe ao conselheiro tutelar julgar e aplicar medidas socioeducativas de internação a infratores.",
      "O Conselho Tutelar é órgão jurisdicional subordinado hierarquicamente ao Comandante da PMPE.",
      "Os membros do Conselho Tutelar possuem prerrogativa de foro criminal perante os Tribunais Regionais Federais."
    ],
    "correctIndex": 1,
    "explanation": "O Conselho Tutelar é órgão permanente e autônomo, não jurisdicional (art. 131). Suas atribuições (art. 136) incluem aplicar medidas de proteção (art. 101, I a VII), requisitar serviços de saúde, educação, etc., e noticiar crimes ao MP. NÃO tem poder jurisdicional (não tira poder familiar nem aplica medida socioeducativa privativa de liberdade).",
    "fundamentacaoLegal": "Arts. 131 e 136 da Lei nº 8.069/1990.",
    "hint": "Conselho Tutelar é órgão administrativo autônomo, NÃO é juiz nem aplica internação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Conselho Tutelar zela por direitos e requisita serviços; quem julga e interna é o juiz.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O Conselho Tutelar é órgão permanente e autônomo, não jurisdicional (art. 131). Suas atribuições (art. 136) incluem aplicar medidas de proteção (art. 101, I a VII), requisitar serviços de saúde, educação, etc., e noticiar crimes ao MP. NÃO tem poder jurisdicional (não tira poder familiar nem aplica medida socioeducativa privativa de liberdade).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_080",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 8.069/1990 (ECA) • Pornografia Infantil (Art. 241-A)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q080] Oferecer, trocar, disponibilizar, transmitir, distribuir, publicar ou divulgar por qualquer meio, inclusive por meio de sistema de informática ou telemático, fotografia, vídeo ou outro registro que contenha cena de sexo explícito ou pornográfica envolvendo criança ou adolescente (art. 241-A do ECA):",
    "options": [
      "É contravenção penal de importunação ofensiva ao pudor com pena de multa simples.",
      "Trata-se de infração de menor potencial ofensivo que admite transação penal.",
      "Exige a demonstração de lucro financeiro direto com a veiculação do arquivo.",
      "Tem sua tipicidade afastada se o arquivo for compartilhado em grupo privado de mensagens.",
      "É crime punido com reclusão de 3 (três) a 8 (oito) anos, e multa."
    ],
    "correctIndex": 4,
    "explanation": "O art. 241-A pune o compartilhamento/divulgação de pornografia infantil com reclusão de 3 a 8 anos e multa. Trata-se de crime formal que não exige lucro financeiro e se consuma com a transmissão/disponibilização em qualquer plataforma digital ou grupo de mensagens.",
    "fundamentacaoLegal": "Art. 241-A da Lei nº 8.069/1990.",
    "hint": "Compartilhar pornografia envolvendo menor: RECLUSÃO de 3 a 8 anos e multa!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Divulgar ou transmitir material de sexo infantil = reclusão 3 a 8 anos (crime gravíssimo).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 241-A pune o compartilhamento/divulgação de pornografia infantil com reclusão de 3 a 8 anos e multa. Trata-se de crime formal que não exige lucro financeiro e se consuma com a transmissão/disponibilização em qualquer plataforma digital ou grupo de mensagens."
    }
  },
  {
    "id": "leg_ext_inedita_100_081",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 & Lei nº 14.532/2023 • Equiparação da Injúria Racial ao Racismo",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q081] Com a promulgação da Lei nº 14.532/2023, o crime de injúria racial (injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional):",
    "options": [
      "Foi expressamente transferido para a Lei de Crimes de Racismo (art. 2º-A da Lei nº 7.716/1989), com pena de reclusão de 2 a 5 anos e multa, tornando-se crime inafiançável e imprescritível.",
      "Permaneceu no Código Penal como crime afiançável de menor potencial ofensivo perante o JECRIM.",
      "Passou a depender de prévia autorização da Secretaria de Direitos Humanos da Presidência.",
      "Deixou de admitir prisão em flagrante por exigência de perícia linguística prévia.",
      "Prescreve no prazo improrrogável de 3 anos a contar do conhecimento da autoria."
    ],
    "correctIndex": 0,
    "explanation": "A Lei 14.532/2023 incluiu o art. 2º-A na Lei nº 7.716/1989: 'Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional: Pena: reclusão, de 2 a 5 anos, e multa'. Passou a ser equiparada a racismo e, por força do art. 5º, XLII da CF/88, é INAFIANÇÁVEL e IMPRESCRITÍVEL.",
    "fundamentacaoLegal": "Art. 2º-A da Lei nº 7.716/1989 (Lei 14.532/2023) e Art. 5º, XLII da CF/88.",
    "hint": "Injúria racial agora está no Art. 2º-A da Lei de Racismo: INAFIANÇÁVEL E IMPRESCRITÍVEL!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Ofender honra por raça/cor virou crime de racismo puro: inafiançável e não prescreve.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. A Lei 14.532/2023 incluiu o art. 2º-A na Lei nº 7.716/1989: 'Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional: Pena: reclusão, de 2 a 5 anos, e multa'. Passou a ser equiparada a racismo e, por força do art. 5º, XLII da CF/88, é INAFIANÇÁVEL e IMPRESCRITÍVEL.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_082",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 & Lei nº 14.532/2023 • Ação Penal na Injúria Racial",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q082] A respeito da ação penal no crime de injúria racial tipificado no art. 2º-A da Lei nº 7.716/1989, após as inovações da Lei nº 14.532/2023, é correto afirmar que:",
    "options": [
      "Trata-se de ação penal pública condicionada à representação irretratável no prazo de 30 dias.",
      "É ação penal exclusivamente privada proposta por procurador com poderes especiais.",
      "Exige a anuência expressa da Defensoria Pública da União antes da deflagração.",
      "A ação penal é pública incondicionada, promovida pelo Ministério Público sem dependência de representação da vítima.",
      "Fica extinta compulsoriamente se o autor pedir desculpas públicas em audiência de mediação."
    ],
    "correctIndex": 3,
    "explanation": "Com a inserção da injúria racial na Lei nº 7.716/1989, incide a regra geral de que os crimes de racismo são de AÇÃO PENAL PÚBLICA INCONDICIONADA. O Ministério Público titulariza a ação penal independentemente de representação da vítima.",
    "fundamentacaoLegal": "Art. 2º-A da Lei nº 7.716/1989 e Jurisprudência do STF.",
    "hint": "Ação penal é PÚBLICA INCONDICIONADA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Crime de racismo e injúria racial não dependem de autorização da vítima: o MP processa direto.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. Com a inserção da injúria racial na Lei nº 7.716/1989, incide a regra geral de que os crimes de racismo são de AÇÃO PENAL PÚBLICA INCONDICIONADA. O Ministério Público titulariza a ação penal independentemente de representação da vítima.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_083",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Recusa de Atendimento em Comércio (Art. 5º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q083] Recusar ou impedir o acesso a estabelecimento comercial, negando-se a servir, atender ou receber cliente ou comprador por motivo de preconceito de raça, cor, etnia, religião ou procedência nacional (art. 5º da Lei nº 7.716/1989):",
    "options": [
      "Configura crime punido com reclusão de 1 (um) a 3 (três) anos.",
      "Constitui mera infração às relações de consumo tutelada exclusivamente pelo PROCON.",
      "Trata-se de conduta atípica caso o gerente alegue direito de admissão reservado.",
      "Sujeita o proprietário apenas ao pagamento de multa de 1 salário mínimo à prefeitura.",
      "É infração disciplinar que acarreta a perda do registro de pessoa jurídica na junta comercial."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º da Lei nº 7.716/1989 tipifica: 'Recusar ou impedir o acesso a estabelecimento comercial, negando-se a servir, atender ou receber cliente ou comprador: Pena: reclusão de 1 a 3 anos'.",
    "fundamentacaoLegal": "Art. 5º da Lei nº 7.716/1989.",
    "hint": "Negar atendimento em comércio por raça/cor/religião = Reclusão de 1 a 3 anos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Negar atendimento por preconceito dá cadeia de 1 a 3 anos.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º da Lei nº 7.716/1989 tipifica: 'Recusar ou impedir o acesso a estabelecimento comercial, negando-se a servir, atender ou receber cliente ou comprador: Pena: reclusão de 1 a 3 anos'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_084",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Recusa de Matrícula Escolar (Art. 6º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q084] Recusar, negar ou impedir a inscrição ou ingresso de aluno em estabelecimento de ensino público ou privado de qualquer grau, por motivo de raça, cor, etnia ou religião (art. 6º da Lei nº 7.716/1989):",
    "options": [
      "É crime punido com reclusão de 3 (três) a 5 (cinco) anos, e se o crime for praticado contra menor de 18 anos, a pena é agravada em 1/3.",
      "É conduta afiançável mediante depósito de fiança pelo diretor da instituição de ensino.",
      "Trata-se de infração que prescreve no prazo improrrogável de 1 ano.",
      "Só se caracteriza se o estabelecimento escolar receber verbas orçamentárias federais.",
      "Gera a perda do alvará escolar sem que haja instauração de persecução criminal."
    ],
    "correctIndex": 0,
    "explanation": "O art. 6º pune com reclusão de 3 a 5 anos a recusa de inscrição escolar. O parágrafo único estabelece: 'Se o crime for praticado contra menor de dezoito anos a pena é agravada de 1/3 (um terço)'. Por ser racismo, é inafiançável e imprescritível.",
    "fundamentacaoLegal": "Art. 6º, caput e parágrafo único da Lei nº 7.716/1989.",
    "hint": "Negar matrícula escolar por preconceito: reclusão de 3 a 5 anos (e agrava em 1/3 se for menor de 18 anos)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Barrar aluno por racismo tem pena pesada de 3 a 5 anos e aumento se for criança/adolescente.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 6º pune com reclusão de 3 a 5 anos a recusa de inscrição escolar. O parágrafo único estabelece: 'Se o crime for praticado contra menor de dezoito anos a pena é agravada de 1/3 (um terço)'. Por ser racismo, é inafiançável e imprescritível.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_085",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Cruz Suástica e Apologia ao Nazismo (Art. 20, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q085] Fabricar, comercializar, distribuir ou veicular símbolos, emblemas, ornamentos, distintivos ou propaganda que utilizem a cruz suástica ou gamada, para fins de divulgação do nazismo (art. 20, § 1º da Lei nº 7.716/1989):",
    "options": [
      "Constitui livre manifestação do pensamento tutelada de forma absoluta pela CF/88.",
      "É crime punido com reclusão de 2 (dois) a 5 (cinco) anos e multa.",
      "Configura contravenção penal processada perante a Justiça Militar da União.",
      "Admite fiança no valor de até 100 salários mínimos arbitrada pela autoridade policial.",
      "Prescreve no prazo decadencial de 6 meses contados da publicação na rede mundial."
    ],
    "correctIndex": 1,
    "explanation": "O art. 20, § 1º tipifica expressamente a conduta de fabricar, comercializar, distribuir ou veicular símbolos/emblemas com cruz suástica ou gamada para divulgação do nazismo, com pena de reclusão de 2 a 5 anos e multa. Trata-se de crime imprescritível e inafiançável.",
    "fundamentacaoLegal": "Art. 20, § 1º da Lei nº 7.716/1989.",
    "hint": "Propaganda nazista com cruz suástica: RECLUSÃO de 2 a 5 anos e multa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Divulgar nazismo ou usar cruz suástica dá reclusão de 2 a 5 anos e não prescreve.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 20, § 1º tipifica expressamente a conduta de fabricar, comercializar, distribuir ou veicular símbolos/emblemas com cruz suástica ou gamada para divulgação do nazismo, com pena de reclusão de 2 a 5 anos e multa. Trata-se de crime imprescritível e inafiançável.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_086",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Causas de Aumento na Injúria Racial (Art. 2º-A, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q086] Se o crime de injúria racial (art. 2º-A da Lei nº 7.716/1989) for cometido no contexto de atividades esportivas, religiosas, artísticas ou culturais destinadas ao público, ou por meio de rede social ou publicação de qualquer natureza:",
    "options": [
      "A pena será aumentada de metade (1/2), e o juiz poderá interditar o agressor de comparecer a tais locais por 3 anos.",
      "A pena será diminuída de um sexto pela repercussão espontânea entre torcedores.",
      "A infração será julgada obrigatoriamente pelo Tribunal de Justiça Desportiva sem sanção penal.",
      "O agente será submetido a trabalho comunitário em associações de caridade locais.",
      "Haverá a extinção automática da punibilidade mediante retratação em veículo de imprensa."
    ],
    "correctIndex": 0,
    "explanation": "A Lei 14.532/2023 inseriu o art. 20-B e causas de aumento expressas: crimes cometidos em contexto de eventos esportivos, culturais, religiosos ou pela internet/redes sociais têm aumento de pena de metade (1/2) e proibição de frequência a esses locais por 3 anos.",
    "fundamentacaoLegal": "Art. 20-A e 20-B da Lei nº 7.716/1989.",
    "hint": "Racismo em estádio de futebol ou redes sociais: AUMENTA DE METADE!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Racismo na internet ou no estádio toma aumento de 50% na pena.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. A Lei 14.532/2023 inseriu o art. 20-B e causas de aumento expressas: crimes cometidos em contexto de eventos esportivos, culturais, religiosos ou pela internet/redes sociais têm aumento de pena de metade (1/2) e proibição de frequência a esses locais por 3 anos.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_087",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Injúria por Funcionário Público (Art. 16)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q087] Nos termos do art. 16 da Lei nº 7.716/1989, constitui efeito da condenação pelo crime de racismo, se o autor for servidor público:",
    "options": [
      "A transferência compulsória para outro município sem prejuízo da remuneração básica.",
      "A suspensão dos direitos políticos restrita exclusivamente ao direito de voto facultativo.",
      "A perda do cargo ou função pública, para o servidor público, e a suspensão do funcionamento do estabelecimento particular por prazo não superior a 3 meses.",
      "A cassação da CNH e proibição de prestar concursos públicos pelo prazo de 20 anos.",
      "O desconto compulsório de 50% dos proventos de aposentadoria por ato do Governador."
    ],
    "correctIndex": 2,
    "explanation": "O art. 16 da Lei nº 7.716/1989 prevê como efeitos da condenação: I - a perda do cargo ou função pública, para o servidor público; II - a suspensão do funcionamento do estabelecimento particular por prazo não superior a 3 (três) meses.",
    "fundamentacaoLegal": "Art. 16 da Lei nº 7.716/1989.",
    "hint": "Efeitos da condenação no racismo: PERDA DO CARGO PÚBLICO para o servidor e suspensão de até 3 meses do estabelecimento!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Servidor que pratica racismo perde o cargo público; empresa é suspensa por até 3 meses.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 16 da Lei nº 7.716/1989 prevê como efeitos da condenação: I - a perda do cargo ou função pública, para o servidor público; II - a suspensão do funcionamento do estabelecimento particular por prazo não superior a 3 (três) meses.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_088",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Povos Indígenas e Comunidades Tradicionais",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q088] As disposições da Lei nº 7.716/1989 aplicam-se expressamente aos atos de discriminação ou preconceito cometidos contra povos indígenas e quilombolas, tendo em vista que a lei protege:",
    "options": [
      "A raça, a cor, a etnia, a religião e a procedência nacional de qualquer grupo humano.",
      "Apenas cidadãos brasileiros com ascendência comprovada em censos oficiais do IBGE.",
      "Exclusivamente as comunidades situadas em terras demarcadas pela União.",
      "Pessoas vinculadas a partidos políticos de representação parlamentar federal.",
      "Indivíduos que professem cultos de matriz exclusivamente oriental ou europeia."
    ],
    "correctIndex": 0,
    "explanation": "O art. 1º e as recentes alterações promovidas pela Lei 14.532/2023 deixam claro que a lei protege contra preconceito de raça, cor, etnia, religião ou procedência nacional, tutelando plenamente povos indígenas, comunidades quilombolas e ciganos.",
    "fundamentacaoLegal": "Art. 1º da Lei nº 7.716/1989.",
    "hint": "Protege: Raça, Cor, Etnia, Religião e Procedência Nacional!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Índio e quilombola estão 100% protegidos sob os conceitos de etnia e procedência nacional.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 1º e as recentes alterações promovidas pela Lei 14.532/2023 deixam claro que a lei protege contra preconceito de raça, cor, etnia, religião ou procedência nacional, tutelando plenamente povos indígenas, comunidades quilombolas e ciganos.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_089",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • STF e Homotransfobia (ADO 26 e MI 4.733)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q089] Ao julgar a ADO nº 26 e o Mandado de Injunção nº 4.733, o Supremo Tribunal Federal assentou que as condutas homofóbicas e transfóbicas:",
    "options": [
      "Constituem infrações despenalizadas que só podem ser objeto de indenização na esfera cível.",
      "Devem ser tratadas como crimes militares próprios se ocorridas dentro de viatura militar.",
      "São penalmente atípicas pela impossibilidade de aplicação analógica no direito penal brasileiro.",
      "Enquadram-se na Lei nº 7.716/1989 (Lei de Racismo), na dimensão de racismo social, sendo inafiançáveis e imprescritíveis até que o Congresso Nacional edite legislação autônoma.",
      "Ficam condicionadas à autorização prévia da Procuradoria-Geral da República."
    ],
    "correctIndex": 3,
    "explanation": "O STF fixou a tese de que os atos de homofobia e transfobia constituem tipo de racismo social compreendido no conceito estatuído na Lei nº 7.716/1989, aplicando-se as mesmas regras de inafiançabilidade e imprescritibilidade do art. 5º, XLII da CF/88.",
    "fundamentacaoLegal": "STF - Plenário, ADO 26/DF e MI 4.733/DF.",
    "hint": "Homotransfobia = RACISMO SOCIAL perante a Lei 7.716/89 (inafiançável e imprescritível) segundo o STF!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Ofender ou discriminar por orientação sexual enquadra-se na Lei de Racismo (STF, ADO 26).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O STF fixou a tese de que os atos de homofobia e transfobia constituem tipo de racismo social compreendido no conceito estatuído na Lei nº 7.716/1989, aplicando-se as mesmas regras de inafiançabilidade e imprescritibilidade do art. 5º, XLII da CF/88.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_090",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 7.716/1989 • Não Configuração de Discriminação Religiosa",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q090] De acordo com a jurisprudência consolidada do STF, a manifestação e pregação pacífica de dogmas religiosos e a crítica teológica a outras correntes doutrinárias:",
    "options": [
      "Configuram sempre crime hediondo de preconceito religioso do art. 20 da Lei nº 7.716/1989.",
      "Dependem de registro e censura prévia perante a Polícia Civil do Estado.",
      "São terminantemente proibidas fora dos templos de qualquer confissão religiosa.",
      "Estão amparadas pela liberdade religiosa e de expressão, não configurando crime de racismo, desde que não incitem ao ódio, violência ou segregação de indivíduos.",
      "Acarretam a imediata prisão temporária do sacerdote ou pregador religioso."
    ],
    "correctIndex": 3,
    "explanation": "O STF consolidou que a liberdade religiosa abrange o proselitismo, a defesa dos próprios dogmas e a discordância pacífica de outras doutrinas. O crime de racismo religioso só se consuma quando houver discurso de ódio (hate speech), incitação à violência, hostilidade ou subjugação de adeptos de outra religião.",
    "fundamentacaoLegal": "Jurisprudência do STF (RHC 134.682 e ADO 26).",
    "hint": "Defender sua fé sem incitar ódio ou violência é LIBERDADE RELIGIOSA protegida!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Debater dogmas é liberdade de culto; incitar violência ou ódio é crime de racismo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O STF consolidou que a liberdade religiosa abrange o proselitismo, a defesa dos próprios dogmas e a discordância pacífica de outras doutrinas. O crime de racismo religioso só se consuma quando houver discurso de ódio (hate speech), incitação à violência, hostilidade ou subjugação de adeptos de outra religião.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_091",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Conceito de Organização Criminosa (Art. 1º, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q091] Considera-se organização criminosa, nos termos expressos do art. 1º, § 1º da Lei nº 12.850/2013, a associação de:",
    "options": [
      "3 (três) ou mais pessoas armadas que pratiquem crimes dolosos contra a vida de autoridades públicas.",
      "4 (quatro) ou mais pessoas estruturalmente ordenada e caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza, mediante a prática de infrações penais cujas penas máximas sejam superiores a 4 (quatro) anos, ou que sejam de caráter transnacional.",
      "2 (duas) ou mais pessoas para a prática reiterada do crime de tráfico ilícito de entorpecentes.",
      "5 (cinco) ou mais servidores públicos militares em conluio para cometer fraudes a licitações.",
      "10 (dez) ou mais indivíduos com hierarquia rígida e estatuto societário registrado em cartório."
    ],
    "correctIndex": 1,
    "explanation": "O conceito do art. 1º, § 1º exige: 1) 4 ou mais pessoas; 2) estrutura ordenada; 3) divisão de tarefas (mesmo informal); 4) objetivo de obter vantagem de qualquer natureza; 5) infrações com penas máximas SUPERIORES a 4 anos ou de caráter transnacional.",
    "fundamentacaoLegal": "Art. 1º, § 1º da Lei nº 12.850/2013.",
    "hint": "Requisitos da Orcrim: 4 ou mais pessoas + Pena máxima SUPERIOR a 4 anos (ou transnacional) + divisão de tarefas!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Organização Criminosa: 4 pessoas + crimes com pena máxima > 4 anos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O conceito do art. 1º, § 1º exige: 1) 4 ou mais pessoas; 2) estrutura ordenada; 3) divisão de tarefas (mesmo informal); 4) objetivo de obter vantagem de qualquer natureza; 5) infrações com penas máximas SUPERIORES a 4 anos ou de caráter transnacional.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_092",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Tipo Penal de Promover/Integrar (Art. 2º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q092] O crime de promover, constituir, financiar ou integrar, pessoalmente ou por interposta pessoa, organização criminosa (art. 2º da Lei nº 12.850/2013) comina pena de:",
    "options": [
      "Detenção, de 1 a 3 anos, e suspensão dos direitos civis e eleitorais por 10 anos.",
      "Reclusão perpétua em presídio federal de segurança máxima isolado.",
      "Prisão militar simples com perda imediata das patentes por ato do governador.",
      "Multa de até 500 salários mínimos e prestação de serviços à comunidade.",
      "Reclusão, de 3 (três) a 8 (oito) anos, e multa, sem prejuízo das penas correspondentes às demais infrações penais praticadas."
    ],
    "correctIndex": 4,
    "explanation": "O art. 2º comina pena de reclusão de 3 a 8 anos e multa, 'sem prejuízo das penas correspondentes às demais infrações penais praticadas' (concurso material obrigatório entre o crime de integrar orcrim e os crimes-fim praticados pelo grupo).",
    "fundamentacaoLegal": "Art. 2º da Lei nº 12.850/2013.",
    "hint": "Pena do art. 2º: Reclusão de 3 a 8 anos + multa!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Promover ou integrar organização criminosa = reclusão de 3 a 8 anos + soma das penas dos crimes cometidos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 2º comina pena de reclusão de 3 a 8 anos e multa, 'sem prejuízo das penas correspondentes às demais infrações penais praticadas' (concurso material obrigatório entre o crime de integrar orcrim e os crimes-fim praticados pelo grupo)."
    }
  },
  {
    "id": "leg_ext_inedita_100_093",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Obstrução de Investigação de Orcrim (Art. 2º, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q093] Incorre nas mesmas penas do crime de integrar organização criminosa (art. 2º, § 1º da Lei nº 12.850/2013) quem:",
    "options": [
      "Presta auxílio material estritamente humanitário de socorro médico a parente consanguíneo ferido.",
      "Impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa.",
      "Exerce a advocacia na defesa técnica do investigado nos termos do Estatuto da OAB.",
      "Informa à imprensa dados que já constem em autos judiciais de tramitação pública.",
      "Recusa-se a assinar termo de depoimento como testemunha por falta de documento de identidade."
    ],
    "correctIndex": 1,
    "explanation": "O art. 2º, § 1º pune expressamente quem 'impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa' com as mesmas penas (reclusão de 3 a 8 anos e multa).",
    "fundamentacaoLegal": "Art. 2º, § 1º da Lei nº 12.850/2013.",
    "hint": "Embaraçar ou atrapalhar investigação de Orcrim responde com a mesma pena de integrar Orcrim!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Atrapalhou investigação de organização criminosa = mesma pena do criminoso integrante (3 a 8 anos).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Correta. O art. 2º, § 1º pune expressamente quem 'impede ou, de qualquer forma, embaraça a investigação de infração penal que envolva organização criminosa' com as mesmas penas (reclusão de 3 a 8 anos e multa).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_094",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Causas de Aumento de Pena (Art. 2º, §§ 2º e 4º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q094] As penas do crime de organização criminosa aumentam-se até a metade (1/2) se:",
    "options": [
      "O crime for cometido em feriado bancário nacional ou aos finais de semana.",
      "A organização tiver filiais em menos de três municípios do mesmo estado.",
      "O agente for primário e ostentar bons antecedentes na vida militar pregressa.",
      "Houver emprego de arma de fogo na atuação da organização criminosa.",
      "A vantagem pretendida for de valor inferior a 10 salários mínimos."
    ],
    "correctIndex": 3,
    "explanation": "O art. 2º, § 2º dispõe que as penas aumentam-se até a metade se na atuação da organização criminosa houver emprego de arma de fogo. Pelo § 4º, a pena aumenta-se de 1/6 a 2/3 se houver participação de criança/adolescente, concurso de funcionário público, transnacionalidade ou conexão com outras facções.",
    "fundamentacaoLegal": "Art. 2º, § 2º e § 4º da Lei nº 12.850/2013.",
    "hint": "Emprego de arma de fogo aumenta até a metade (1/2)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Arma de fogo na Orcrim: majorante pesada de até a metade.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 2º, § 2º dispõe que as penas aumentam-se até a metade se na atuação da organização criminosa houver emprego de arma de fogo. Pelo § 4º, a pena aumenta-se de 1/6 a 2/3 se houver participação de criança/adolescente, concurso de funcionário público, transnacionalidade ou conexão com outras facções.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_095",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Concurso de Funcionário Público (Art. 2º, § 6º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q095] A condenação transitada em julgado de funcionário público por integrar organização criminosa acarreta, nos termos do art. 2º, § 6º da Lei nº 12.850/2013:",
    "options": [
      "A demissão simples sem impedimento para novo concurso público estadual imediato.",
      "A transferência para a reserva militar não remunerada sem perda de benefícios previdenciários.",
      "A suspensão salarial por 12 meses declarada pelo Comandante da Unidade Operacional.",
      "A perda do cargo, função, emprego ou mandato eletivo e a interdição para o exercício de qualquer função ou cargo público pelo prazo de 8 (oito) anos subsequentes ao cumprimento da pena.",
      "A advertência em ficha de assentamento individual sem repercussão em progressão de carreira."
    ],
    "correctIndex": 3,
    "explanation": "O art. 2º, § 6º é taxativo: 'A condenação com trânsito em julgado acarretará ao funcionário público a perda do cargo, função, emprego ou mandato eletivo e a interdição para o exercício de qualquer função ou cargo público pelo prazo de 8 (oito) anos subsequentes ao cumprimento da pena'.",
    "fundamentacaoLegal": "Art. 2º, § 6º da Lei nº 12.850/2013.",
    "hint": "Funcionário público em Orcrim: PERDE O CARGO + INTERDIÇÃO POR 8 ANOS após cumprir a pena!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Policial envolvido com facção: perde a farda e fica proibido de cargo público por 8 anos depois de sair da prisão.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Correta. O art. 2º, § 6º é taxativo: 'A condenação com trânsito em julgado acarretará ao funcionário público a perda do cargo, função, emprego ou mandato eletivo e a interdição para o exercício de qualquer função ou cargo público pelo prazo de 8 (oito) anos subsequentes ao cumprimento da pena'.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_096",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Meios de Obtenção de Prova (Art. 3º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q096] São meios de obtenção da prova expressamente previstos no art. 3º da Lei nº 12.850/2013 em qualquer fase da persecução penal:",
    "options": [
      "Tortura-castigo aplicada a suspeitos sob custódia prisional com autorização judicial.",
      "Uso de detector de mentiras (polígrafo) compulsório em interrogatório policial.",
      "Colaboração premiada; captação ambiental de sinais; ação controlada; acesso a registros de ligações e dados cadastrais; interceptação telefônica; e infiltração de agentes de polícia.",
      "Apreensão de bens de parentes colaterais de até 4º grau sem ordem judicial prévia.",
      "Interceptação de correspondência de advogados de defesa sem conexão criminosa."
    ],
    "correctIndex": 2,
    "explanation": "O art. 3º da Lei nº 12.850/2013 prevê os meios especiais de obtenção de prova: colaboração premiada, captação ambiental, ação controlada, acesso a registros/dados cadastrais, interceptação telefônica e telemática, e infiltração de policiais em tarefas de investigação.",
    "fundamentacaoLegal": "Art. 3º da Lei nº 12.850/2013.",
    "hint": "Meios de prova legais: colaboração premiada, ação controlada, infiltração policial, captação ambiental!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Lei 12.850 dá as ferramentas modernas contra o crime organizado (colaboração, infiltração e ação controlada).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Correta. O art. 3º da Lei nº 12.850/2013 prevê os meios especiais de obtenção de prova: colaboração premiada, captação ambiental, ação controlada, acesso a registros/dados cadastrais, interceptação telefônica e telemática, e infiltração de policiais em tarefas de investigação.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_097",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Papel do Juiz na Colaboração Premiada (Art. 4º, § 6º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q097] No instituto da colaboração premiada, nos termos do art. 4º, § 6º da Lei nº 12.850/2013 e em observância ao princípio acusatório:",
    "options": [
      "O juiz não participará das negociações realizadas entre as partes para a formalização do acordo de colaboração, que ocorrerá entre o delegado de polícia, o investigado e o defensor, com a manifestação do MP, ou entre o MP e o investigado e seu defensor.",
      "O juiz deve conduzir as reuniões de negociação e ditar as cláusulas de benefícios aos advogados.",
      "O acordo só pode ser assinado se o juiz concordar em reduzir a pena em 100% antecipadamente.",
      "A colaboração premiada não precisa de homologação judicial para produzir eficácia jurídica.",
      "O juiz pode aplicar a colaboração de ofício mesmo sem consentimento do acusado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 4º, § 6º estabelece que o juiz NÃO participará das negociações. Ele atua como garantidor da legalidade e da voluntariedade, limitando-se a homologar o acordo após audiência com o colaborador na presença de seu defensor.",
    "fundamentacaoLegal": "Art. 4º, § 6º da Lei nº 12.850/2013.",
    "hint": "O JUIZ NÃO PARTICIPA DAS NEGOCIAÇÕES DA DELAÇÃO! Ele só homologa.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Juiz não negocia colaboração: ele é o árbitro imparcial que só homologa.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 4º, § 6º estabelece que o juiz NÃO participará das negociações. Ele atua como garantidor da legalidade e da voluntariedade, limitando-se a homologar o acordo após audiência com o colaborador na presença de seu defensor.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_098",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Ação Controlada (Art. 8º)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q098] Consiste a ação controlada (art. 8º da Lei nº 12.850/2013) em retardar a intervenção policial ou administrativa relativa à ação praticada por organização criminosa, com a finalidade de:",
    "options": [
      "Permitir que os infratores fujam do país para evitar custos prisionais aos cofres do Estado.",
      "Aguardar a prescrição da pretensão punitiva para evitar a repercussão negativa na imprensa.",
      "Garantir aos policiais o direito de recolher parte das mercadorias como bonificação funcional.",
      "Transferir a responsabilidade da investigação para os órgãos de segurança privada.",
      "A concretização da medida se dê no momento mais eficaz à formação de provas e obtenção de informações, exigindo comunicação prévia ao juiz competente."
    ],
    "correctIndex": 4,
    "explanation": "O art. 8º da Lei nº 12.850/2013 define a ação controlada (flagrante retardado/prorrogado): retardar a intervenção policial para que a prisão ocorra no momento mais eficaz para a colheita de provas e captura do maior número de integrantes. Exige prévia comunicação ao juiz competente.",
    "fundamentacaoLegal": "Art. 8º da Lei nº 12.850/2013.",
    "hint": "Ação controlada: 'segurar' o flagrante para dar o bote no momento mais eficaz! Exige prévia comunicação ao juiz.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Flagrante postergado: espera a hora certa para pegar a quadrilha toda.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Correta. O art. 8º da Lei nº 12.850/2013 define a ação controlada (flagrante retardado/prorrogado): retardar a intervenção policial para que a prisão ocorra no momento mais eficaz para a colheita de provas e captura do maior número de integrantes. Exige prévia comunicação ao juiz competente."
    }
  },
  {
    "id": "leg_ext_inedita_100_099",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Infiltração Policial (Art. 10)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q099] A infiltração de policiais em atividade de investigação de organização criminosa (art. 10 da Lei nº 12.850/2013):",
    "options": [
      "Depende de representação do Delegado de Polícia ou requerimento do Ministério Público e de expressa autorização judicial motivada, sendo admitida pelo prazo de até 6 meses, renovável se comprovada sua necessidade.",
      "Pode ser determinada unilateralmente pelo Comandante do Batalhão Militar sem ciência ao juiz.",
      "Tem prazo improrrogável de até 30 dias sob pena de nulidade absoluta das provas obtidas.",
      "Pode ser executada por qualquer cidadão civil recrutado como informante remunerado.",
      "Impede a instauração de ação penal contra os investigados nos primeiros 12 meses."
    ],
    "correctIndex": 0,
    "explanation": "O art. 10 da Lei nº 12.850/2013 exige representação do Delegado ou requerimento do MP, prévia autorização judicial motivada e prazo de até 6 (seis) meses, sem prejuízo de renovações sucessivas desde que comprovada sua necessidade.",
    "fundamentacaoLegal": "Art. 10 da Lei nº 12.850/2013.",
    "hint": "Infiltração policial: EXIGE AUTORIZAÇÃO JUDICIAL e prazo de até 6 MESES renovável!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Policial infiltrado precisa de ordem do juiz e o prazo é de 6 meses renováveis.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 10 da Lei nº 12.850/2013 exige representação do Delegado ou requerimento do MP, prévia autorização judicial motivada e prazo de até 6 (seis) meses, sem prejuízo de renovações sucessivas desde que comprovada sua necessidade.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  },
  {
    "id": "leg_ext_inedita_100_100",
    "categoryId": "legislacao_extravagante",
    "bloco": "bloco_3",
    "materiaNome": "Legislação Extravagante",
    "topicoEdital": "Lei nº 12.850/2013 • Não Punibilidade do Agente Infiltrado (Art. 13)",
    "question": "[AOCP PMPE Inédita - Legislação Extravagante Q100] O agente policial infiltrado que, no curso da operação de investigação, praticar infração penal com inexigibilidade de conduta diversa para preservar sua integridade ou o êxito da missão:",
    "options": [
      "Não será punido no âmbito da sua atuação investigativa, desde que guardada a devida proporcionalidade com os fins da investigação.",
      "Responderá como autor principal de todos os delitos com pena dobrada pela condição de policial.",
      "Será compulsoriamente demitido a bem da disciplina militar sem direito a ampla defesa.",
      "Deverá indenizar a organização criminosa pelos prejuízos operacionais causados.",
      "Ficará sujeito à perda de direitos políticos por ato discricionário do Ministério Público."
    ],
    "correctIndex": 0,
    "explanation": "O art. 13, parágrafo único da Lei nº 12.850/2013 consagra a causa de exclusão da culpabilidade/punibilidade do policial infiltrado: 'Não é punível, no âmbito da infiltração, a prática de crime pelo agente infiltrado no estrito cumprimento do dever legal ou quando inexigível conduta diversa, desde que guardada a devida proporcionalidade com os fins da investigação'.",
    "fundamentacaoLegal": "Art. 13, parágrafo único da Lei nº 12.850/2013.",
    "hint": "Agente infiltrado NÃO É PUNIDO se cometer crime na missão de forma proporcional e com inexigibilidade de conduta diversa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_leg_extravagante_aocp",
    "dicaMacete": "Para não morrer e manter o disfarce, o policial infiltrado tem proteção legal proporcional.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "2": "Você marcou (C): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "3": "Você marcou (D): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP.",
      "4": "Você marcou (E): Incorreta segundo a letra da lei e a jurisprudência sumulada da banca AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 13, parágrafo único da Lei nº 12.850/2013 consagra a causa de exclusão da culpabilidade/punibilidade do policial infiltrado: 'Não é punível, no âmbito da infiltração, a prática de crime pelo agente infiltrado no estrito cumprimento do dever legal ou quando inexigível conduta diversa, desde que guardada a devida proporcionalidade com os fins da investigação'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com a legislação especial e com o edital do Instituto AOCP para a PMPE."
    }
  }
];
