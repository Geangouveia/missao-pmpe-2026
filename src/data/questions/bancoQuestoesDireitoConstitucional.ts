import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: DIREITO CONSTITUCIONAL PMPE 2026 (INSTITUTO AOCP)
 * Total: 160 Questões com fundamentação nos artigos 1º a 5º e 144 da CF/88
 */
export const BANCO_CONSTITUCIONAL_PMPE: QuizQuestion[] = [
  {
    "id": "const_pmpe_001",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 001] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_002",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 002] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_003",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 003] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_004",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 004] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_005",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 005] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_006",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 006] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_007",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 007] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_008",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 008] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_009",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 009] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_010",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 010] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_011",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 011] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_012",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 012] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_013",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 013] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_014",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 014] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_015",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 015] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_016",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 016] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_017",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 017] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_018",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 018] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_019",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 019] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_020",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 020] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_021",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 021] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_022",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 022] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_023",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 023] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_024",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 024] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_025",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 025] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_026",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 026] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_027",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 027] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_028",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 028] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 2,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_029",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 029] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_030",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 030] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_031",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 031] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_032",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 032] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_033",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 033] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_034",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 034] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_035",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 035] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_036",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 036] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_037",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 037] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_038",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 038] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_039",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 039] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_040",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 040] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_041",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 041] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_042",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 042] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_043",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 043] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_044",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 044] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_045",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 045] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_046",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 046] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_047",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 047] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_048",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 048] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_049",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 049] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_050",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 050] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_051",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 051] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_052",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 052] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_053",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 053] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_054",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 054] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_055",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 055] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_056",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 056] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_057",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 057] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_058",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 058] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_059",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 059] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_060",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 060] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_061",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 061] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_062",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 062] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_063",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 063] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_064",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 064] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_065",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 065] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_066",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 066] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_067",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 067] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_068",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 068] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_069",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 069] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_070",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 070] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_071",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 071] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_072",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 072] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_073",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 073] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_074",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 074] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_075",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 075] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_076",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 076] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 2,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_077",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 077] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a polícia ostensiva e a preservação da ordem pública.",
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 0,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "B": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_078",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 078] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_079",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 079] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_080",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 080] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_081",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 081] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_082",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 082] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_083",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 083] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_084",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 084] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_085",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 085] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_086",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 086] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_087",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 087] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_088",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 088] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_089",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 089] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_090",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 090] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_091",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 091] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_092",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 092] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_093",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 093] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_094",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 094] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_095",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 095] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_096",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 096] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_097",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 097] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_098",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 098] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_099",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 099] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_100",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 100] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_101",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 101] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_102",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 102] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_103",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 103] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_104",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 104] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_105",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 105] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_106",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 106] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_107",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 107] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_108",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 108] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_109",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 109] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_110",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 110] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_111",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 111] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_112",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 112] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_113",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 113] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a polícia ostensiva e a preservação da ordem pública.",
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 0,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "B": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_114",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 114] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_115",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 115] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_116",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 116] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_117",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 117] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_118",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 118] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_119",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 119] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_120",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 120] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_121",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 121] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_122",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 122] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_123",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 123] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_124",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 124] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_125",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 125] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_126",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 126] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_127",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 127] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_128",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 128] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_129",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 129] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_130",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 130] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_131",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 131] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_132",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 132] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_133",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 133] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 3,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_134",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 134] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_135",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 135] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_136",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 136] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_137",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 137] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 1,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_138",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 138] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_139",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 139] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 3,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_140",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 140] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_141",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 141] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a polícia ostensiva e a preservação da ordem pública.",
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 0,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "B": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_142",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 142] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_143",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 143] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "2": "Você marcou a alternativa (C): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "3": "Você marcou a alternativa (D): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "D": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória.",
      "E": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem."
    }
  },
  {
    "id": "const_pmpe_144",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 144] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 3,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_145",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 145] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_146",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 146] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_147",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 147] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_148",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 148] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 2,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_149",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 149] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas.",
      "a polícia ostensiva e a preservação da ordem pública."
    ],
    "correctIndex": 4,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "2": "Você marcou a alternativa (C): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "3": "Você marcou a alternativa (D): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "D": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica.",
      "E": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'."
    }
  },
  {
    "id": "const_pmpe_150",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 150] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "B": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_151",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 151] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_152",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 152] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático."
    ],
    "correctIndex": 4,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "1": "Você marcou a alternativa (B): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "2": "Você marcou a alternativa (C): Crimes contra a administração pública são prescritíveis.",
      "3": "Você marcou a alternativa (D): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "C": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "D": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar.",
      "E": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV)."
    }
  },
  {
    "id": "const_pmpe_153",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 153] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a polícia ostensiva e a preservação da ordem pública.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 2,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "1": "Você marcou a alternativa (B): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "B": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "C": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_154",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 154] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "1": "Você marcou a alternativa (B): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "2": "Você marcou a alternativa (C): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "3": "Você marcou a alternativa (D): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "C": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "D": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar.",
      "E": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA."
    }
  },
  {
    "id": "const_pmpe_155",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 155] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "2": "Você marcou a alternativa (C): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "B": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "C": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_156",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 156] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 1,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "B": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  },
  {
    "id": "const_pmpe_157",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 144 da CF/88 - Segurança Pública e Polícia Militar - Art. 144, § 5º da CF/88",
    "question": "[Simulado PMPE - Questão 157] De acordo com o art. 144, § 5º da Constituição da República de 1988, à polícia militar cabem:",
    "options": [
      "a polícia ostensiva e a preservação da ordem pública.",
      "a apuração de infrações penais comuns e a polícia judiciária estadual.",
      "exclusivamente a guarda armada dos presídios e penitenciárias federais.",
      "a fiscalização aduaneira e o patrulhamento marítimo e aeroportuário.",
      "a execução privativa de perícias criminais médico-legais e papiloscópicas."
    ],
    "correctIndex": 0,
    "explanation": "O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
    "fundamentacaoLegal": "Art. 144, § 5º da CF/88",
    "hint": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "PM = Polícia Ostensiva e Preservação da Ordem Pública! Bombeiros = Defesa Civil.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "2": "Você marcou a alternativa (C): A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "3": "Você marcou a alternativa (D): Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "4": "Você marcou a alternativa (E): Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 144, § 5º da CF/88 estabelece textualmente: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'.",
      "B": "Incorreta. A polícia judiciária e a apuração de infrações penais comuns cabem à Polícia Civil (art. 144, § 4º).",
      "C": "Incorreta. A guarda e escolta de presos cabem às Polícias Penais (art. 144, § 5º-A).",
      "D": "Incorreta. Fiscalização aduaneira e patrulhamento marítimo cabem à Polícia Federal (art. 144, § 1º).",
      "E": "Incorreta. Perícias oficiais cabem aos órgãos de Polícia Científica/Técnica."
    }
  },
  {
    "id": "const_pmpe_158",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Inviolabilidade do Domicílio - Art. 5º, XI da CF/88",
    "question": "[Simulado PMPE - Questão 158] A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    "options": [
      "por determinação judicial em qualquer horário do dia ou da noite, com autorização do Ministério Público.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "em caso de suspeita genérica de crime ou por ordem de autoridade policial no período noturno.",
      "mediante notificação administrativa prévia do proprietário do imóvel expedida em até 24 horas.",
      "em qualquer horário para averiguação de rotina de antecedentes criminais dos residentes."
    ],
    "correctIndex": 1,
    "explanation": "O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88",
    "hint": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "DURANTE O DIA: Flagrante, Desastre, Socorro e Mandado Judicial! DURANTE A NOITE: Apenas Flagrante, Desastre e Socorro (SEM mandado!).",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "2": "Você marcou a alternativa (C): Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "3": "Você marcou a alternativa (D): A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "4": "Você marcou a alternativa (E): Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Determinação judicial só pode ser executada DURANTE O DIA (e respeitando a Lei de Abuso 21h-05h).",
      "B": "Correta. O art. 5º, XI da CF determina que durante a noite a entrada só é permitida em caso de flagrante delito, desastre ou socorro. A determinação judicial (mandado) só autoriza a entrada DURANTE O DIA.",
      "C": "Incorreta. Mera suspeita genérica não autoriza ingresso sem mandado diurno ou flagrante real.",
      "D": "Incorreta. A regra constitucional não prevê notificação administrativa para invasão domiciliar.",
      "E": "Incorreta. Averiguações de rotina não constituem exceção constitucional à inviolabilidade domiciliar."
    }
  },
  {
    "id": "const_pmpe_159",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Remédios Constitucionais (Habeas Corpus) - Art. 5º, LXVIII da CF/88",
    "question": "[Simulado PMPE - Questão 159] Conceder-se-á Habeas Corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Sobre o Habeas Corpus:",
    "options": [
      "exige recolhimento prévio de custas processuais judiciais no Tribunal de Justiça do Estado.",
      "só pode ser impetrado por advogado regularmente inscrito nos quadros da OAB.",
      "é uma ação constitucional gratuita a todos os cidadãos e independe da capacidade postulatória de advogado.",
      "pode ser utilizado para anular sanção disciplinar militar de transferência de quartel sem prisão.",
      "é cabível para pleitear indenização pecuniária por danos morais causados pelo Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
    "fundamentacaoLegal": "Art. 5º, LXVIII da CF/88",
    "hint": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "HABEAS CORPUS = Liberdade de Locomoção (Ir, Vir e Ficar)! Gratuito e independe de advogado.",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "1": "Você marcou a alternativa (B): Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "3": "Você marcou a alternativa (D): O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "4": "Você marcou a alternativa (E): Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    },
    "analiseAlternativas": {
      "A": "Incorreta. São gratuitas as ações de habeas corpus e habeas data (art. 5º, LXXVII).",
      "B": "Incorreta. Qualquer pessoa física, nacional ou estrangeira, pode impetrar HC sem advogado.",
      "C": "Correta. O art. 5º, LXXVII da CF garante a gratuidade do Habeas Corpus e do Habeas Data. Qualquer pessoa pode impetrar HC sem necessidade de advogado, em favor de si ou de outrem.",
      "D": "Incorreta. O HC destina-se estritamente à liberdade de locomoção corporal, não a questões puramente funcionais.",
      "E": "Incorreta. Indenizações pecuniárias devem ser requeridas por meio de ação ordinária indenizatória."
    }
  },
  {
    "id": "const_pmpe_160",
    "categoryId": "constitucional",
    "bloco": "bloco_3",
    "materiaNome": "Direito Constitucional",
    "topicoEdital": "Art. 5º da CF/88 - Crimes Inafiançáveis e Imprescritíveis - Art. 5º, XLII e XLIV da CF/88",
    "question": "[Simulado PMPE - Questão 160] Nos termos expressos da Constituição Federal de 1988, são crimes inafiançáveis e IMPRESCRITÍVEIS:",
    "options": [
      "a prática do racismo e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.",
      "o tráfico ilícito de entorpecentes e o crime de tortura contra vulneráveis.",
      "o homicídio qualificado, o latrocínio e o crime hediondo de estupro.",
      "o peculato, a concussão e a corrupção passiva praticados por militar.",
      "o descumprimento de ordem judicial e a deserção militar em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
    "fundamentacaoLegal": "Art. 5º, XLII e XLIV da CF/88",
    "hint": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Direito Constitucional PMPE",
    "dicaMacete": "IMPRESCRITÍVEIS NA CF: RAÇÃO! RA = Racismo (e Injúria Racial) | ÇÃO = Ação de grupos armados civis ou militares contra a ordem constitucional.",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "2": "Você marcou a alternativa (C): Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "3": "Você marcou a alternativa (D): Crimes contra a administração pública são prescritíveis.",
      "4": "Você marcou a alternativa (E): Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Na CF/88, apenas dois crimes são ao mesmo tempo inafiançáveis e imprescritíveis: 1) A prática do racismo (art. 5º, XLII); 2) A ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático (art. 5º, XLIV).",
      "B": "Incorreta. Tráfico e tortura são inafiançáveis e insuscetíveis de graça/anistia, mas são PRESCRITÍVEIS.",
      "C": "Incorreta. Crimes hediondos prescrevem conforme a regra geral do art. 109 do Código Penal.",
      "D": "Incorreta. Crimes contra a administração pública são prescritíveis.",
      "E": "Incorreta. Crimes militares em tempo de paz sujeitam-se à prescrição penal militar."
    }
  }
];
