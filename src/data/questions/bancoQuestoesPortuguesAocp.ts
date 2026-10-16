import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: LÍNGUA PORTUGUESA PMPE 2026 (INSTITUTO AOCP)
 * Total: 150 Questões com regras gramaticais explicadas, crase, concordância e pontuação
 */
export const BANCO_PORTUGUES_AOCP: QuizQuestion[] = [
  {
    "id": "port_aocp_001",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 001] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_002",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 002] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_003",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 003] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_004",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 004] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_005",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 005] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_006",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 006] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_007",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 007] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_008",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 008] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_009",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 009] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_010",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 010] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_011",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 011] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_012",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 012] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_013",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 013] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_014",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 014] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_015",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 015] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_016",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 016] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_017",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 017] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_018",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 018] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_019",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 019] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_020",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 020] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_021",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 021] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_022",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 022] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_023",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 023] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_024",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 024] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_025",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 025] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_026",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 026] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_027",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 027] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_028",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 028] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_029",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 029] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_030",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 030] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_031",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 031] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_032",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 032] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_033",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 033] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_034",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 034] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_035",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 035] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_036",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 036] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_037",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 037] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_038",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 038] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_039",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 039] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_040",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 040] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_041",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 041] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_042",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 042] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_043",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 043] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_044",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 044] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_045",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 045] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_046",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 046] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "B": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_047",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 047] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_048",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 048] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_049",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 049] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_050",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 050] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_051",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 051] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_052",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 052] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_053",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 053] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_054",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 054] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_055",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 055] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_056",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 056] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_057",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 057] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_058",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 058] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "B": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_059",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 059] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_060",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 060] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_061",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 061] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_062",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 062] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_063",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 063] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_064",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 064] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_065",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 065] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_066",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 066] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_067",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 067] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_068",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 068] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_069",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 069] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_070",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 070] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "B": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_071",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 071] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_072",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 072] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_073",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 073] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_074",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 074] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_075",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 075] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_076",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 076] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_077",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 077] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_078",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 078] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_079",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 079] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_080",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 080] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_081",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 081] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_082",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 082] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_083",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 083] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_084",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 084] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_085",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 085] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_086",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 086] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_087",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 087] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_088",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 088] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "B": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_089",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 089] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_090",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 090] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_091",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 091] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_092",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 092] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_093",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 093] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_094",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 094] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_095",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 095] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_096",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 096] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_097",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 097] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_098",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 098] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_099",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 099] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_100",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 100] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_101",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 101] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_102",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 102] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_103",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 103] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "B": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_104",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 104] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_105",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 105] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_106",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 106] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_107",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 107] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_108",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 108] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_109",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 109] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_110",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 110] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_111",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 111] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_112",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 112] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_113",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 113] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_114",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 114] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_115",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 115] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_116",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 116] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_117",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 117] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_118",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 118] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_119",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 119] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_120",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 120] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  },
  {
    "id": "port_aocp_121",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 121] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_122",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 122] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_123",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 123] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_124",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 124] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "B": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_125",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 125] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_126",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 126] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_127",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 127] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_128",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 128] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 1,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_129",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 129] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_130",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 130] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_131",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 131] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_132",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 132] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 2,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_133",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 133] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_134",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 134] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_135",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 135] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_136",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 136] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_137",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 137] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 0,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "2": "Você marcou a alternativa (C): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "B": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "C": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_138",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 138] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 1,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_139",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 139] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_140",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 140] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_141",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 141] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_142",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 142] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço."
    ],
    "correctIndex": 4,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "3": "Você marcou a alternativa (D): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência').",
      "E": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à)."
    }
  },
  {
    "id": "port_aocp_143",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 143] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação."
    ],
    "correctIndex": 4,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "3": "Você marcou a alternativa (D): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'.",
      "E": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas')."
    }
  },
  {
    "id": "port_aocp_144",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 144] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 3,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_145",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 145] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 1,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "2": "Você marcou a alternativa (C): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "3": "Você marcou a alternativa (D): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "C": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "D": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_146",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 146] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 2,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "3": "Você marcou a alternativa (D): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "D": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_147",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 147] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232.",
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto."
    ],
    "correctIndex": 0,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "1": "Você marcou a alternativa (B): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "2": "Você marcou a alternativa (C): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "3": "Você marcou a alternativa (D): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "4": "Você marcou a alternativa (E): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
      "B": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "C": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "D": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "E": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    }
  },
  {
    "id": "port_aocp_148",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Emprego do Sinal Indicativo de Crase - Sintaxe de Regência e Emprego da Crase",
    "question": "[Simulado PMPE - Questão 148] Assinale a alternativa em que o uso do acento grave indicativo de crase está EMPREGADO CORRETAMENTE, conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      "O policial militar começou à redigir o boletim de ocorrência na viatura.",
      "A guarnição do GATI encaminhou os suspeitos à uma delegacia especializada.",
      "O soldado prestou socorro à pessoas que estavam feridas no acostamento da rodovia.",
      "O Comandante do Batalhão dirigiu-se à tropa para parabenizar os soldados pelo serviço.",
      "Os manifestantes entregaram a reivindicação à Sua Excelência o Governador do Estado."
    ],
    "correctIndex": 3,
    "explanation": "Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "ANTES DE PALAVRA MASCULINA OU VERBO: Crase proibida! Troque a feminina por masculina: se der 'AO', tem crase!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Crase proibida antes de verbo no infinitivo ('à redigir').",
      "1": "Você marcou a alternativa (B): Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "2": "Você marcou a alternativa (C): Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "4": "Você marcou a alternativa (E): Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Crase proibida antes de verbo no infinitivo ('à redigir').",
      "B": "Incorreta. Crase proibida antes de artigo indefinido ('à uma delegacia').",
      "C": "Incorreta. Crase proibida com 'a' no singular diante de palavra no plural ('à pessoas').",
      "D": "Correta. Na frase 'dirigiu-se à tropa', o verbo 'dirigir-se' exige a preposição 'a' (dirigir-se a algo/alguém) e o substantivo feminino 'tropa' admite o artigo definido 'a'. A fusão resulta em crase (a + a = à).",
      "E": "Incorreta. Crase proibida antes de pronomes de tratamento ('à Sua Excelência')."
    }
  },
  {
    "id": "port_aocp_149",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Concordância Verbal - Concordância do Verbo Haver e Partícula 'Se'",
    "question": "[Simulado PMPE - Questão 149] Assinale a alternativa que atende plenamente às regras de concordância verbal da norma-padrão:",
    "options": [
      "Haviam muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Fazem três meses que os novos soldados concluíram o Curso de Formação.",
      "Vende-se automóveis apreendidos no pátio do Departamento de Trânsito.",
      "Havia muitas viaturas da PMPE posicionadas no centro da cidade durante a operação.",
      "Devem haver muitos candidatos preparados para as vagas do concurso militar."
    ],
    "correctIndex": 3,
    "explanation": "O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "VERBO HAVER NO SENTIDO DE EXISTIR/OCORRER = SEMPRE no singular! Não tem plural!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "1": "Você marcou a alternativa (B): O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "2": "Você marcou a alternativa (C): Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "4": "Você marcou a alternativa (E): Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O verbo haver com sentido de existir não flexiona no plural ('Haviam').",
      "B": "Incorreta. O verbo fazer indicando tempo decorrido é impessoal: o correto é 'Faz três meses'.",
      "C": "Incorreta. Com a partícula apassivadora 'se', o verbo concorda com o sujeito paciente: 'Vendem-se automóveis'.",
      "D": "Correta. O verbo 'haver' no sentido de existir ou acontecer é impessoal e não possui sujeito, devendo permanecer sempre na 3ª pessoa do singular ('Havia muitas viaturas').",
      "E": "Incorreta. Na locução verbal com haver impessoal, o verbo auxiliar também fica no singular: 'Deve haver'."
    }
  },
  {
    "id": "port_aocp_150",
    "categoryId": "portugues",
    "bloco": "bloco_1",
    "materiaNome": "Língua Portuguesa",
    "topicoEdital": "Língua Portuguesa - Pontuação (Uso da Vírgula) - Regras de Pontuação da Banca Instituto AOCP",
    "question": "[Simulado PMPE - Questão 150] Assinale a alternativa cuja pontuação está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:",
    "options": [
      "O comandante da operação militar, determinou a interdição imediata do trânsito na avenida.",
      "Os soldados cumpriram com rigor, todas as determinações operacionais da escala.",
      "A população aplaudiu, os policiais militares que resgataram as vítimas do desabamento.",
      "Embora estivesse chovendo muito a patrulha, permaneceu atenta e vigilante no posto.",
      "Na madrugada de ontem, a guarnição policial abordou o veículo suspeito na rodovia BR-232."
    ],
    "correctIndex": 4,
    "explanation": "Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração.",
    "fundamentacaoLegal": "Instituto AOCP - Gramática Aplicada",
    "hint": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Especial de Língua Portuguesa AOCP",
    "dicaMacete": "NUNCA SEPARA: Sujeito do Verbo nem Verbo do seu Objeto Direto/Indireto!",
    "porqueErrou": {
      "0": "Você marcou a alternativa (A): Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "1": "Você marcou a alternativa (B): Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "2": "Você marcou a alternativa (C): Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "3": "Você marcou a alternativa (D): Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Erro crasso: vírgula separando o sujeito ('O comandante...') de seu verbo ('determinou').",
      "B": "Incorreta. Vírgula separando indevidamente o verbo ('cumpriram') de seu objeto direto.",
      "C": "Incorreta. Vírgula separando o verbo 'aplaudiu' do seu complemento direto 'os policiais'.",
      "D": "Incorreta. Faltou vírgula após a oração subordinada adverbial concessiva 'Embora estivesse chovendo muito'.",
      "E": "Correta. Na alternativa correta, a locução adverbial temporal deslocada ('Na madrugada de ontem,') está corretamente isolada por vírgula no início da oração."
    }
  }
];
