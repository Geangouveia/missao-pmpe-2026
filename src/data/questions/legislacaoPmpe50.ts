import type { QuizQuestion } from '../../types/game';

/**
 * 50 QUESTÕES OFICIAIS E INÉDITAS DE LEGISLAÇÃO DA PMPE
 * Elaboradas rigorosamente de acordo com o Edital Soldado PMPE 2026 e o padrão Instituto AOCP:
 * - Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco)
 * - Lei Complementar Estadual nº 108/2008 (Plano de Promoções e Carreira Militar)
 * - Lei Estadual nº 11.817/2000 (Código Disciplinar dos Militares de Pernambuco)
 * - Constituição do Estado de Pernambuco (Artigos 100 a 103)
 */
export const LEGISLACAO_PMPE_50_QUESTIONS: QuizQuestion[] = [
  {
    "id": "leg_pmpe_001",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Agregação (Lei nº 6.783/74)",
    "question": "De acordo com a Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco), a situação na qual o policial-militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número, denomina-se:",
    "options": [
      "Reversão.",
      "Agregação.",
      "Excedente.",
      "Disponibilidade provisória.",
      "Licenciamento temporário."
    ],
    "correctIndex": 1,
    "explanation": "A agregação é a situação na qual o policial-militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, permanecendo sem número (art. 76 da Lei nº 6.783/1974). O militar continua no serviço ativo, mas abre vaga para promoção dos companheiros.",
    "fundamentacaoLegal": "Art. 76 da Lei Estadual nº 6.783/1974.",
    "hint": "Agregado = fica sem número e abre vaga na escala hierárquica.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Mnemônico: Agregado = 'Sem vaga, sem número, mas ainda na ativa!'",
    "porqueErrou": {
      "0": "Você marcou Reversão, que é o ato de retorno do militar agregado ao quadro ativo.",
      "2": "Você marcou Excedente, que é a situação do militar que supera o efetivo fixado.",
      "3": "Disponibilidade provisória não é termo técnico militar do Estatuto da PMPE.",
      "4": "Licenciamento é uma das formas de exclusão definitiva ou temporária do serviço ativo."
    },
    "analiseAlternativas": {
      "A": "Reversão é o ato pelo qual o militar agregado retorna ao respectivo quadro.",
      "B": "Correta. Definição literal do art. 76 do Estatuto da PMPE.",
      "C": "Excedente é o militar que ultrapassa o efetivo fixado por lei.",
      "D": "Disponibilidade provisória não é termo técnico previsto no Estatuto.",
      "E": "Licenciamento é uma das formas de exclusão do serviço ativo."
    }
  },
  {
    "id": "leg_pmpe_002",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Reversão (Lei nº 6.783/74)",
    "question": "Conforme o Estatuto dos Policiais Militares do Estado de Pernambuco, o ato pelo qual o policial-militar agregado retorna ao respectivo Quadro tão logo cesse o motivo que determinou a sua agregação, voltando a ocupar o lugar que lhe competir na respectiva escala numérica, é chamado de:",
    "options": [
      "Readaptação.",
      "Recondução.",
      "Reversão.",
      "Reintegração.",
      "Aproveitamento."
    ],
    "correctIndex": 2,
    "explanation": "O art. 82 do Estatuto prevê expressamente que a reversão é o ato pelo qual o policial-militar agregado retorna ao respectivo Quadro tão logo cesse o motivo que determinou a sua agregação, voltando a ocupar o lugar que lhe competir na respectiva escala numérica.",
    "fundamentacaoLegal": "Art. 82 da Lei Estadual nº 6.783/1974.",
    "hint": "Cessou o motivo da agregação? O militar sofre Reversão.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Reverter = Retornar do estado de agregado.",
    "porqueErrou": {
      "0": "Readaptação é instituto civil para servidor que sofreu limitação de capacidade.",
      "1": "Recondução é instituto civil de retorno ao cargo de origem.",
      "3": "Reintegração decorre de anulação judicial de demissão ilegal.",
      "4": "Aproveitamento ocorre para servidor em disponibilidade."
    },
    "analiseAlternativas": {
      "A": "Readaptação é instituto estatutário civil, não aplicável ao retorno militar.",
      "B": "Recondução é retorno do servidor estável ao cargo anterior no direito administrativo geral.",
      "C": "Correta. Art. 82 da Lei 6.783/74 define reversão expressamente.",
      "D": "Reintegração decorre de anulação judicial de demissão ilegal.",
      "E": "Aproveitamento ocorre quando servidor em disponibilidade é aproveitado em cargo compatível."
    }
  },
  {
    "id": "leg_pmpe_003",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Hierarquia e Disciplina (Lei nº 6.783/74)",
    "question": "A hierarquia e a disciplina são as bases institucionais da PMPE. Nos termos da Lei Estadual nº 6.783/1974, a ordenação da autoridade em níveis diferentes, dentro da estrutura da Polícia Militar, crescendo a autoridade com a elevação do grau hierárquico, conceitua:",
    "options": [
      "A disciplina militar.",
      "A hierarquia policial-militar.",
      "O comando tático.",
      "A subordinação funcional.",
      "A antiguidade corporativa."
    ],
    "correctIndex": 1,
    "explanation": "A hierarquia policial-militar é a ordenação da autoridade em níveis diferentes, dentro da estrutura da Polícia Militar, crescendo a autoridade com a elevação do grau hierárquico (art. 14, § 1º). Já a disciplina é a rigorosa observância e o acatamento integral das leis, regulamentos e ordens.",
    "fundamentacaoLegal": "Art. 14, § 1º da Lei Estadual nº 6.783/1974.",
    "hint": "Níveis de autoridade diferentes = Hierarquia.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Hierarquia = Níveis / Postos e Graduações. Disciplina = Acatamento das ordens e leis.",
    "porqueErrou": {
      "0": "Disciplina é o acatamento das ordens e normas, não a ordenação em níveis.",
      "2": "Comando é a soma de autoridade e responsabilidade investida em um comandante.",
      "3": "Subordinação funcional decorre da hierarquia, mas não é a definição da ordenação de autoridade.",
      "4": "Antiguidade é critério temporal entre militares de mesmo grau."
    },
    "analiseAlternativas": {
      "A": "Disciplina é o acatamento integral e rigoroso das leis, ordens e regulamentos.",
      "B": "Correta. Conceito formal de hierarquia no Estatuto da PMPE.",
      "C": "Comando é a investidura formal de autoridade para conduzir uma fração de tropa.",
      "D": "Subordinação é o reflexo do dever do subordinado em relação ao superior.",
      "E": "Antiguidade regula a precedência entre militares do mesmo grau."
    }
  },
  {
    "id": "leg_pmpe_004",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Graus Hierárquicos (Lei nº 6.783/74)",
    "question": "Sobre os graus hierárquicos e a autoridade competente para outorgá-los na Polícia Militar de Pernambuco, assinale a afirmativa correta segundo o Estatuto:",
    "options": [
      "Posto é o grau hierárquico do Oficial, conferido por ato do Governador do Estado; Graduação é o grau da Praça, conferido pelo Comandante-Geral.",
      "Posto é o grau conferido às Praças pelo Governador; Graduação é o grau dos Oficiais conferido pelo Secretário de Defesa Social.",
      "Tanto Posto quanto Graduação são conferidos exclusivamente pelo Governador do Estado mediante decreto individual.",
      "O Posto é concedido por concurso público, enquanto a Graduação decorre de eleição entre os pares da corporação.",
      "A Graduação aplica-se a Oficiais e Praças, sendo o Posto reservado exclusivamente aos Coronéis da ativa."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 14, §§ 2º e 3º da Lei nº 6.783/1974: Posto é o grau hierárquico do Oficial, conferido por ato do Governador do Estado e confirmado em Carta Patente; Graduação é o grau hierárquico da Praça, conferido pelo Comandante-Geral da PMPE.",
    "fundamentacaoLegal": "Art. 14, §§ 2º e 3º da Lei Estadual nº 6.783/1974.",
    "hint": "Oficial = Posto (Governador). Praça = Graduação (Comandante-Geral).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "P-O-G (Posto - Oficial - Governador) e G-P-C (Graduação - Praça - Comandante).",
    "porqueErrou": {
      "1": "Inverteu: Posto é de Oficial (Governador) e Graduação é de Praça (Comandante-Geral).",
      "2": "Comandante-Geral confere a graduação das praças, não o Governador.",
      "3": "Militares não são promovidos por eleição.",
      "4": "Oficiais possuem postos (Tenente até Coronel), não graduação."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra fundamental da hierarquia militar estadual.",
      "B": "Incorreta por inversão dos sujeitos e autoridades.",
      "C": "Incorreta, pois graduação de praça é ato do Comandante-Geral.",
      "D": "Incorreta por citar eleição corporativa inexistente.",
      "E": "Incorreta, posto abrange todos os oficiais da PMPE."
    }
  },
  {
    "id": "leg_pmpe_005",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Praças Especiais (Lei nº 6.783/74)",
    "question": "No âmbito da hierarquia da Polícia Militar de Pernambuco, a Lei nº 6.783/1974 estabelece categorias de militares. São classificados especificamente como 'Praças Especiais':",
    "options": [
      "Os Subtenentes e Primeiros-Sargentos.",
      "Os Aspirantes a Oficial PM e os Alunos-Oficiais PM.",
      "Os Cabos condecorados por bravura e os Soldados de Classe Especial.",
      "Os militares que integram o Batalhão de Operações Policiais Especiais (BOPE).",
      "Os Oficiais do Quadro de Saúde e Capelães Militares."
    ],
    "correctIndex": 1,
    "explanation": "O parágrafo único do art. 16 do Estatuto define expressamente: 'São Praças Especiais o Aspirante a Oficial PM e os Alunos-Oficiais PM'. Eles possuem precedência sobre as demais praças e círculos de convivência próprios.",
    "fundamentacaoLegal": "Art. 16, parágrafo único da Lei Estadual nº 6.783/1974.",
    "hint": "Praças Especiais são aqueles em formação ou estágio para se tornarem oficiais.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Praças Especiais = Aspirante a Oficial e Cadete (Aluno-Oficial).",
    "porqueErrou": {
      "0": "Subtenentes e Sargentos são praças regulares graduadas.",
      "2": "Soldados e Cabos são praças regulares, mesmo com condecoração.",
      "3": "Membros do BOPE são militares regulares com qualificação tática especial.",
      "4": "Oficiais de Saúde são oficiais, não praças."
    },
    "analiseAlternativas": {
      "A": "Subtenentes e Sargentos integram o círculo de Subtenentes e Sargentos.",
      "B": "Correta. Literalidade do art. 16, parágrafo único.",
      "C": "Cabos e Soldados integram o círculo de Cabos e Soldados.",
      "D": "Lotação especializada não altera a classificação estatutária do militar.",
      "E": "Quadro de Saúde é composto por Oficiais Médicos e Especialistas."
    }
  },
  {
    "id": "leg_pmpe_006",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Precedência Hierárquica (Lei nº 6.783/74)",
    "question": "Em caso de igualdade de posto ou de graduação entre policiais-militares da ativa e policiais-militares da reserva remunerada ou reformados da PMPE, a precedência hierárquica será:",
    "options": [
      "Dos policiais-militares da ativa sobre os da inatividade.",
      "Dos policiais-militares da inatividade sobre os da ativa, em razão do tempo histórico de serviço.",
      "Do militar de maior idade biológica, independentemente de estar na ativa ou inatividade.",
      "Determinada por sorteio público realizado na Diretoria de Gestão de Pessoas.",
      "Inexistente, havendo absoluta equiparação e equivalência sem qualquer prevalência funcional."
    ],
    "correctIndex": 0,
    "explanation": "Conforme preceitua o art. 17, § 1º do Estatuto da PMPE, em igualdade de posto ou de graduação, os policiais-militares da ativa têm precedência sobre os da inatividade (reserva remunerada e reformados).",
    "fundamentacaoLegal": "Art. 17, § 1º da Lei Estadual nº 6.783/1974.",
    "hint": "Militar da Ativa sempre tem precedência sobre o militar da inatividade no mesmo grau.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Ativa > Inativa (no mesmo posto ou graduação).",
    "porqueErrou": {
      "1": "Tempo histórico na inatividade não dá precedência sobre a ativa.",
      "2": "Idade só é critério de desempate residual entre militares da mesma condição.",
      "3": "Sorteio não é previsto na hierarquia militar.",
      "4": "Existe sim precedência expressa determinada pela lei."
    },
    "analiseAlternativas": {
      "A": "Correta. Texto expresso do art. 17, § 1º da Lei nº 6.783/1974.",
      "B": "Incorreta, pois a ativa sempre prevalece.",
      "C": "Critério de idade não sobrepõe a condição de militar da ativa.",
      "D": "Inexistente sorteio para fixação de precedência.",
      "E": "A hierarquia militar exige ordem clara de precedência."
    }
  },
  {
    "id": "leg_pmpe_007",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Antiguidade e Desempate (Lei nº 6.783/74)",
    "question": "A antiguidade em cada posto ou graduação é regulada pela data da promoção correspondente. Havendo empate na data da promoção, a legislação da PMPE estabelece que a antiguidade será determinada, em PRIMEIRO lugar:",
    "options": [
      "Pela antiguidade no posto ou graduação anterior.",
      "Pela maior idade do policial-militar.",
      "Pela classificação final no concurso de admissão.",
      "Pelo maior número de condecorações militares por mérito.",
      "Pela quantidade de elogios individuais constantes do assentamento."
    ],
    "correctIndex": 0,
    "explanation": "De acordo com o art. 17, § 2º, havendo empate na data da promoção, a antiguidade é determinada sucessivamente: 1º) pela antiguidade no posto ou graduação anterior; 2º) pela antiguidade nos graus hierárquicos anteriores; 3º) pela data de nascimento (mais idoso).",
    "fundamentacaoLegal": "Art. 17, § 2º da Lei Estadual nº 6.783/1974.",
    "hint": "Quem foi promovido no mesmo dia desempata pelo grau que ocupava antes!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Desempate: 1º Grau anterior -> 2º Graus sucessivos -> 3º Maior idade.",
    "porqueErrou": {
      "1": "Maior idade é o último critério de desempate, e não o primeiro.",
      "2": "Classificação no concurso só vale para praças recém-formadas no primeiro grau.",
      "3": "Condecorações não decidem antiguidade no desempate de promoção.",
      "4": "Elogios contam pontos para merecimento, não desempate direto de antiguidade."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa do art. 17, § 2º, 'a'.",
      "B": "Incorreta, maior idade é o critério final.",
      "C": "Incorreta para promoções ao longo da carreira.",
      "D": "Incorreta, critério inexistente para antiguidade.",
      "E": "Incorreta, elogio não define antiguidade."
    }
  },
  {
    "id": "leg_pmpe_008",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Ética e Deveres (Lei nº 6.783/74)",
    "question": "No tocante aos deveres e vedações aos policiais-militares da ativa, a Lei Estadual nº 6.783/1974 veda expressamente tomar parte na administração ou gerência de sociedade comercial ou dela ser sócio ou acionista, EXCETO:",
    "options": [
      "Se a sociedade comercial tiver sede fora do Estado de Pernambuco.",
      "Na qualidade de acionista ou quotista em sociedade anônima ou por quotas de responsabilidade limitada.",
      "Se a empresa atuar no ramo de segurança privada devidamente autorizada pela Polícia Federal.",
      "Quando a atividade empresarial for exercida nos períodos regulares de folga e férias.",
      "Caso a administração seja delegada informalmente a parente de primeiro grau."
    ],
    "correctIndex": 1,
    "explanation": "O art. 29 do Estatuto veda ao militar da ativa tomar parte na administração ou gerência de sociedade ou exercer comércio, 'exceto como acionista ou quotista em sociedade anônima ou por quotas de responsabilidade limitada', situações em que não exerce atos de gestão direta.",
    "fundamentacaoLegal": "Art. 29 da Lei Estadual nº 6.783/1974.",
    "hint": "Militar da ativa pode ser acionista ou cotista (investidor), mas nunca gerente/administrador.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Investir SIM (acionista/quotista) | Administrar e Comerciar na ativa NUNCA!",
    "porqueErrou": {
      "0": "A localização da sede da empresa não retira a proibição estatutária.",
      "2": "Militar da ativa é expressamente impedido de exercer segurança privada.",
      "3": "A vedação vigora de forma ininterrupta, inclusive em folgas e férias.",
      "4": "Delegação informal não afasta a proibição legal do militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta, o local da sede é irrelevante.",
      "B": "Correta. Exceção literal prevista no art. 29 da Lei nº 6.783/1974.",
      "C": "Incorreta, segurança privada é vedada a militares estaduais da ativa.",
      "D": "Incorreta, a vedação é permanente durante a permanência no serviço ativo.",
      "E": "Incorreta, expediente fraudulento não elide a falta funcional."
    }
  },
  {
    "id": "leg_pmpe_009",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Direitos das Praças (Lei nº 6.783/74)",
    "question": "A estabilidade é um direito assegurado às Praças da Polícia Militar de Pernambuco. Segundo o art. 50 da Lei Estadual nº 6.783/1974, a estabilidade das praças é adquirida após:",
    "options": [
      "3 (três) anos de tempo de efetivo serviço.",
      "5 (cinco) anos de tempo de efetivo serviço.",
      "10 (dez) ou mais anos de tempo de efetivo serviço.",
      "15 (quinze) anos ininterruptos na corporação.",
      "A conclusão do estágio probatório de 24 meses."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o art. 50, inciso IV, alínea 'a' da Lei nº 6.783/1974, as praças da PMPE adquirem estabilidade quando contam com 10 (dez) ou mais anos de tempo de efetivo serviço. ATENÇÃO: a estabilidade civil de 3 anos (art. 41, CF) não se confunde com o Estatuto dos Militares Estaduais!",
    "fundamentacaoLegal": "Art. 50, IV, 'a' da Lei Estadual nº 6.783/1974.",
    "hint": "Cuidado com a pegadinha da AOCP! Praça Militar no Estatuto = 10 ANOS!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Civil = 3 anos | Praça PMPE no Estatuto = 10 ANOS de efetivo serviço!",
    "porqueErrou": {
      "0": "3 anos é para servidores públicos civis (art. 41 da CF). No Estatuto Militar da PMPE são 10 anos!",
      "1": "5 anos é prazo incorreto sem previsão estatutária.",
      "3": "15 anos extrapola a exigência legal de 10 anos.",
      "4": "Estágio probatório civil não concede estabilidade de praça no Estatuto."
    },
    "analiseAlternativas": {
      "A": "Incorreta, confusão com a regra geral dos servidores civis.",
      "B": "Incorreta, prazo sem previsão legal no Estatuto.",
      "C": "Correta. Literalidade do art. 50, IV, 'a' da Lei 6.783/74.",
      "D": "Incorreta, prazo excessivo.",
      "E": "Incorreta, não existe estágio probatório com essa denominação no estatuto militar."
    }
  },
  {
    "id": "leg_pmpe_010",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Conselhos de Julgamento Moral (Lei nº 6.783/74)",
    "question": "Sobre o julgamento da capacidade moral e disciplinar de policiais-militares de Pernambuco, assinale a correlação CORRETA entre o colegiado competente e os militares a ele submetidos:",
    "options": [
      "O Conselho de Justificação aplica-se privativamente aos Oficiais; o Conselho de Disciplina aos Aspirantes a Oficial e às Praças com estabilidade assegurada.",
      "O Conselho de Justificação destina-se às Praças não estáveis; o Conselho de Disciplina é exclusivo dos Coronéis.",
      "O Conselho de Disciplina aplica-se aos Oficiais Superiores; o Conselho de Justificação aos Alunos do Curso de Formação.",
      "Ambos os conselhos destinam-se indistintamente a qualquer militar, sendo convocados por sorteio.",
      "O Conselho de Justificação é exclusivo dos policiais-militares já reformados por invalidez definitiva."
    ],
    "correctIndex": 0,
    "explanation": "Conforme arts. 47 e 48 do Estatuto da PMPE: o Conselho de Justificação é destinado a julgar da incapacidade do Oficial para permanecer no serviço ativo; o Conselho de Disciplina é destinado a julgar da incapacidade do Aspirante a Oficial e das Praças com estabilidade assegurada.",
    "fundamentacaoLegal": "Arts. 47 e 48 da Lei Estadual nº 6.783/1974.",
    "hint": "Justificação = Oficial | Disciplina = Aspirante e Praça Estável.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "J-O: Justificação = Oficial. D-P: Disciplina = Praça Estável e Aspirante.",
    "porqueErrou": {
      "1": "Inverteu: Justificação é de Oficiais e Disciplina é de Praças estáveis e Aspirantes.",
      "2": "Oficiais superiores são julgados por Conselho de Justificação.",
      "3": "Os conselhos têm público-alvo estritamente delimitado por lei.",
      "4": "Justificação não é exclusivo de reformados, aplica-se prioritariamente à ativa."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa dos arts. 47 e 48 do Estatuto da PMPE.",
      "B": "Incorreta, inverteu competências.",
      "C": "Incorreta, oficiais respondem a Conselho de Justificação.",
      "D": "Incorreta, a competência é legal e funcional, não por sorteio.",
      "E": "Incorreta, oficiais da ativa são os principais destinatários da Justificação."
    }
  },
  {
    "id": "leg_pmpe_011",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Prerrogativas e Prisão Especial (Lei nº 6.783/74)",
    "question": "De acordo com o Estatuto da PMPE, o policial-militar preso provisoriamente, antes de decisão judicial condenatória com trânsito em julgado, tem o direito de ser recolhido:",
    "options": [
      "Em estabelecimento prisional comum do sistema penitenciário civil estadual.",
      "Em quartel da Polícia Militar ou em estabelecimento prisional militar próprio.",
      "Em delegacia de polícia civil da área metropolitana de Recife.",
      "Em prisão domiciliar independentemente de decisão judicial específica.",
      "Em batalhão das Forças Armadas federais localizado fora do Estado."
    ],
    "correctIndex": 1,
    "explanation": "O art. 73 da Lei Estadual nº 6.783/1974 assegura que o policial-militar tem direito a ser recolhido a quartel ou a estabelecimento prisional militar, à disposição da autoridade competente, quando preso antes de decisão transitada em julgado.",
    "fundamentacaoLegal": "Art. 73 da Lei Estadual nº 6.783/1974.",
    "hint": "Militar sem trânsito em julgado = Quartel ou Presídio Militar (CREED).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Prisão especial do militar = Quartel da PMPE ou presídio militar!",
    "porqueErrou": {
      "0": "Militar sem condenação irrecorrível não pode ser recolhido em presídio comum com presos comuns.",
      "2": "Delegacia comum é provisória para lavratura de flagrante, devendo ser recolhido a quartel.",
      "3": "Prisão domiciliar depende de decisão judicial fundamentada, não sendo regra geral estatutária.",
      "4": "Não é transferido para fora do Estado, salvo autorização especial."
    },
    "analiseAlternativas": {
      "A": "Incorreta, viola prerrogativa expressa do art. 73.",
      "B": "Correta. Prerrogativa literal do militar estadual.",
      "C": "Incorreta, a custódia deve ocorrer em unidade militar.",
      "D": "Incorreta, prisão domiciliar é instituto processual penal estrito.",
      "E": "Incorreta, a custódia ocorre na própria corporação militar de PE."
    }
  },
  {
    "id": "leg_pmpe_012",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Uniformes e Distintivos (Lei nº 6.783/74)",
    "question": "Os uniformes da Polícia Militar de Pernambuco, com seus distintivos, insígnias e emblemas, são privativos dos policiais-militares e simbolizam a autoridade militar. Segundo o Estatuto, é expressamente proibido o uso dos uniformes:",
    "options": [
      "Por policiais-militares da reserva remunerada em solenidades cívico-militares previamente autorizadas.",
      "Por qualquer pessoa civil ou por organizações civis de qualquer natureza, sendo nula qualquer concessão em contrário.",
      "Por policiais-militares da ativa durante operações especiais noturnas.",
      "Por Aspirantes a Oficial durante o estágio probatório do oficialato.",
      "Por militares do Quadro de Saúde devidamente fardados em serviço ambulatorial."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 74 do Estatuto, os uniformes da PMPE são privativos dos policiais-militares. É expressamente proibido a qualquer elemento civil ou organização civil o uso de uniformes, distintivos ou emblemas que se assemelhem aos da PMPE, sob pena de responsabilidade criminal.",
    "fundamentacaoLegal": "Art. 74 da Lei Estadual nº 6.783/1974.",
    "hint": "Civil e organização civil JAMAIS podem usar farda ou uniforme igual/parecido com a PMPE.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Farda da PMPE é exclusividade da corporação; civil usando comete ilícito penal!",
    "porqueErrou": {
      "0": "Militares da reserva podem usar uniforme em solenidades com prévia autorização.",
      "2": "Militares em operações noturnas usam uniformes táticos adequados.",
      "3": "Aspirantes usam uniformes regulamentares privativos do seu círculo.",
      "4": "Oficiais de Saúde usam uniformes regulamentares."
    },
    "analiseAlternativas": {
      "A": "Incorreta, a reserva pode usar uniforme em solenidades autorizadas.",
      "B": "Correta. Proibição expressa e absoluta a civis e empresas civis.",
      "C": "Incorreta, em operações é obrigatório o uso do uniforme tático operacional.",
      "D": "Incorreta, o Aspirante usa farda militar obrigatoriamente.",
      "E": "Incorreta, Oficiais de Saúde trabalham fardados nos órgãos de saúde da PMPE."
    }
  },
  {
    "id": "leg_pmpe_013",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Porte de Arma (Lei nº 6.783/74)",
    "question": "Sobre o porte de arma de fogo conferido aos policiais-militares da PMPE, o Estatuto Estadual (Lei nº 6.783/1974) estabelece que:",
    "options": [
      "É direito do policial-militar o porte de arma, com as restrições impostas por lei e pela regulamentação própria da Corporação.",
      "O porte de arma é exclusivo dos Oficiais Superiores, sendo proibido a Soldados e Cabos em folga.",
      "O porte de arma só é concedido após 15 anos de efetivo serviço prestado na PMPE.",
      "O policial-militar perde o porte de arma automaticamente sempre que tirar férias regulamentares.",
      "O porte de arma civil tem prevalência sobre a autorização institucional militar da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "De acordo com o art. 73, alínea 'b' do Estatuto, constitui prerrogativa e direito do policial-militar o porte de arma de fogo, observadas as restrições legais e os regulamentos disciplinares da corporação.",
    "fundamentacaoLegal": "Art. 73, 'b' da Lei Estadual nº 6.783/1974.",
    "hint": "Porte de arma é prerrogativa do policial-militar, respeitadas as normas regulamentares.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Porte de arma = Prerrogativa funcional com observância aos regulamentos da PMPE.",
    "porqueErrou": {
      "1": "Praças também têm porte de arma de fogo legalmente assegurado.",
      "2": "Não existe exigência de 15 anos de serviço para porte de arma.",
      "3": "Férias não cancelam o porte de arma do militar.",
      "4": "A prerrogativa funcional decorre da investidura no cargo de policial-militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra e prerrogativa expressa no Estatuto da PMPE.",
      "B": "Incorreta, praças possuem porte de arma.",
      "C": "Incorreta, prazo inexistente.",
      "D": "Incorreta, férias não suspendem prerrogativa de porte regular.",
      "E": "Incorreta, a autorização militar é autônoma e superior ao registro comum."
    }
  },
  {
    "id": "leg_pmpe_014",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Férias e Afastamentos (Lei nº 6.783/74)",
    "question": "As férias anuais dos policiais-militares da PMPE são períodos regulares de descanso concedidos anualmente. Conforme o Estatuto, as férias:",
    "options": [
      "Podem ser acumuladas por até 5 anos consecutivos sem qualquer justificativa.",
      "Têm a duração de 30 (trinta) dias e a sua concessão é obrigatória após cada ano de serviço prestado.",
      "Podem ser substituídas integralmente por indenização pecuniária a critério discricionário do militar.",
      "Podem ser interrompidas por qualquer motivo de conveniência pessoal de superior imediato.",
      "São concedidas exclusivamente aos policiais-militares que não tenham sofrido punição disciplinar no ano."
    ],
    "correctIndex": 1,
    "explanation": "Nos termos do art. 61 da Lei nº 6.783/1974, as férias são descansos obrigatórios anuais concedidos pelo prazo de 30 dias. A interrupção só é admitida em hipóteses gravíssimas previstas na lei (estado de sítio, grave perturbação da ordem ou extrema necessidade do serviço).",
    "fundamentacaoLegal": "Art. 61 da Lei Estadual nº 6.783/1974.",
    "hint": "Férias = 30 dias anuais e obrigatórias.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Férias militares = 30 dias obrigatórios por ano; interrupção é exceção excepcionalíssima!",
    "porqueErrou": {
      "0": "Não se admite acumulação desmedida sem prévia justificativa e limite legal.",
      "2": "Férias militares não são vendidas livremente no regime estatutário.",
      "3": "Interrupção depende de motivo legal grave (estado de sítio, grave comoção etc.).",
      "4": "Punição disciplinar não anula o direito constitucional e estatutário a férias."
    },
    "analiseAlternativas": {
      "A": "Incorreta, acumulação não é livre.",
      "B": "Correta. Regra expressa do art. 61 da Lei 6.783/74.",
      "C": "Incorreta, descanso é prioritariamente gozado.",
      "D": "Incorreta, interrupção exige estrita necessidade pública e legal.",
      "E": "Incorreta, punição não retira o direito às férias anuais."
    }
  },
  {
    "id": "leg_pmpe_015",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Licença Especial (Lei nº 6.783/74)",
    "question": "A Licença Especial (férias-prêmio) é a autorização para o afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado. De acordo com o Estatuto da PMPE, a duração da Licença Especial é de:",
    "options": [
      "3 (três) meses.",
      "6 (seis) meses.",
      "12 (doze) meses.",
      "45 (quarenta e cinco) dias.",
      "1 (um) mês."
    ],
    "correctIndex": 1,
    "explanation": "O art. 65 da Lei Estadual nº 6.783/1974 define que a Licença Especial é a autorização para afastamento total do serviço, relativa a cada decênio de tempo de efetivo serviço prestado, concedida ao policial-militar com a duração de 6 (seis) meses, sem perda da remuneração.",
    "fundamentacaoLegal": "Art. 65 da Lei Estadual nº 6.783/1974.",
    "hint": "Decênio (10 anos) de serviço dá direito a 6 meses de Licença Especial.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "10 anos de serviço (Decênio) = 6 meses de Licença Especial!",
    "porqueErrou": {
      "0": "3 meses é a licença-prêmio por quinquênio comum a alguns servidores civis, mas na PMPE decênio dá 6 meses.",
      "2": "12 meses é prazo excessivo sem previsão.",
      "3": "45 dias não corresponde ao decênio estatutário.",
      "4": "1 mês é duração de férias regulares, não da licença especial decenal."
    },
    "analiseAlternativas": {
      "A": "Incorreta, confusão com estatutos de outras carreiras civis.",
      "B": "Correta. Art. 65 da Lei 6.783/74 fixa 6 meses por decênio.",
      "C": "Incorreta, prazo não previsto em lei.",
      "D": "Incorreta, prazo arbitrário.",
      "E": "Incorreta, não corresponde à licença decenal."
    }
  },
  {
    "id": "leg_pmpe_016",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - LTIP (Lei nº 6.783/74)",
    "question": "A Licença para Tratar de Interesse Particular (LTIP) é concedida com prejuízo da remuneração e da contagem de tempo de serviço. Para que uma Praça da PMPE possa solicitar a LTIP, a Lei nº 6.783/1974 exige que ela possua, no mínimo:",
    "options": [
      "2 (dois) anos de efetivo serviço.",
      "5 (cinco) anos de efetivo serviço.",
      "10 (dez) anos de tempo de efetivo serviço (estabilidade assegurada).",
      "15 (quinze) anos ininterruptos de corporação.",
      "Não há exigência de tempo mínimo para praças, bastando requerimento fundamentado."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o art. 67, § 1º do Estatuto da PMPE, a licença para tratar de interesse particular (LTIP) só poderá ser concedida a policiais-militares (praças) que contem mais de 10 (dez) anos de tempo de efetivo serviço, ou seja, praças com estabilidade assegurada.",
    "fundamentacaoLegal": "Art. 67, § 1º da Lei Estadual nº 6.783/1974.",
    "hint": "LTIP para Praça exige estabilidade (mínimo de 10 anos de serviço).",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Praça sem estabilidade NÃO pode tirar LTIP! Mínimo de 10 anos!",
    "porqueErrou": {
      "0": "2 anos não autoriza a concessão de LTIP a praças.",
      "1": "5 anos é insuficiente para praça no Estatuto da PMPE.",
      "3": "15 anos extrapola a exigência de 10 anos do art. 67.",
      "4": "Existe sim expressa limitação temporal de 10 anos de efetivo serviço."
    },
    "analiseAlternativas": {
      "A": "Incorreta, prazo muito aquém do exigido.",
      "B": "Incorreta, falta requisito temporal.",
      "C": "Correta. Exigência legal de 10 anos de efetivo serviço para praças.",
      "D": "Incorreta, prazo excessivo.",
      "E": "Incorreta, a estabilidade de 10 anos é condição prévia."
    }
  },
  {
    "id": "leg_pmpe_017",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Cargos e Funções (Lei nº 6.783/74)",
    "question": "Segundo o art. 21 da Lei Estadual nº 6.783/1974, cargo policial-militar é um conjunto de atribuições, deveres e responsabilidades cometidos a um policial-militar em serviço ativo. O cargo policial-militar é considerado 'vago':",
    "options": [
      "A partir de sua criação até que um policial-militar nele tome posse, ou desde o momento em que o policial-militar for dele exonerado, demitido ou falecer.",
      "Exclusivamente quando o policial-militar titular for promovido por antiguidade.",
      "Sempre que o militar titular usufruir de licença médica de até 15 dias.",
      "Apenas se o Governador do Estado publicar decreto de extinção do respectivo Quadro.",
      "Quando o policial-militar for convocado para compor comissão temporária de sindicância."
    ],
    "correctIndex": 0,
    "explanation": "Nos termos do art. 22 do Estatuto da PMPE, o cargo policial-militar torna-se vago: a) a partir de sua criação por lei até que um policial-militar dele tome posse; b) desde o momento em que o militar titular for dele exonerado, dispensado, ou for dele afastado por agregação, demissão, licenciamento ou falecimento.",
    "fundamentacaoLegal": "Art. 22 da Lei Estadual nº 6.783/1974.",
    "hint": "Cargo vago = desde que foi criado até posse, ou quando o titular sai ou morre.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Vacância: Criação sem posse OU saída/morte do titular.",
    "porqueErrou": {
      "1": "Promoção por merecimento ou bravura também pode gerar vacância, não apenas antiguidade.",
      "2": "Licença médica curta de 15 dias não gera vacância do cargo titular.",
      "3": "Extinção extingue o cargo, enquanto vacância mantém o cargo existente desocupado.",
      "4": "Comissão de sindicância é encargo temporário que não desocupa o cargo titular."
    },
    "analiseAlternativas": {
      "A": "Correta. Texto literal do art. 22 do Estatuto.",
      "B": "Incorreta, vacância ocorre por múltiplas causas legais.",
      "C": "Incorreta, licença temporária curta não abre vacância.",
      "D": "Incorreta, extinção não se confunde com cargo vago.",
      "E": "Incorreta, comissões não desprovêm o cargo efetivo."
    }
  },
  {
    "id": "leg_pmpe_018",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Ausência e Deserção (Lei nº 6.783/74)",
    "question": "De acordo com o art. 87 da Lei Estadual nº 6.783/1974, é considerado 'AUSENTE' o policial-militar que por mais de determinado período consecutivo deixar de comparecer à sua Organização Policial-Militar sem comunicar motivo de impedimento ou sem licença. Esse período é de mais de:",
    "options": [
      "12 (doze) horas consecutivas.",
      "24 (vinte e quatro) horas consecutivas.",
      "48 (quarenta e oito) horas consecutivas.",
      "8 (oito) dias consecutivos.",
      "30 (trinta) dias ininterruptos."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 87 da Lei nº 6.783/1974: 'É considerado ausente o policial-militar que por mais de 24 (vinte e quatro) horas consecutivas: 1 - deixar de comparecer à sua OPM sem comunicar qualquer motivo de impedimento; 2 - ausentar-se sem licença da OPM onde serve ou local onde deve permanecer'.",
    "fundamentacaoLegal": "Art. 87 da Lei Estadual nº 6.783/1974.",
    "hint": "Passou de 24 horas sem justificativa? Já é considerado AUSENTE!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Mais de 24 horas = AUSÊNCIA | Mais de 8 dias = DESERÇÃO (crime militar).",
    "porqueErrou": {
      "0": "12 horas ainda não configura formalmente o estado de ausente estatutário.",
      "2": "48 horas é prazo incorreto.",
      "3": "8 dias consecutivos configura Deserção (crime militar, art. 88), não simples ausência.",
      "4": "30 dias refere-se ao extraviado (art. 90)."
    },
    "analiseAlternativas": {
      "A": "Incorreta, prazo inferior ao legal.",
      "B": "Correta. Literalidade do art. 87: mais de 24 horas consecutivas.",
      "C": "Incorreta, o prazo estatutário é de 24 horas.",
      "D": "Incorreta, mais de 8 dias é deserção.",
      "E": "Incorreta, mais de 30 dias é extravio."
    }
  },
  {
    "id": "leg_pmpe_019",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Deserção (Lei nº 6.783/74)",
    "question": "A deserção é infração penal militar de natureza permanente. Conforme o Estatuto dos Policiais Militares de Pernambuco, a deserção resta consumada quando a ausência injustificada do militar perdurar por mais de:",
    "options": [
      "24 (vinte e quatro) horas consecutivas.",
      "48 (quarenta e oito) horas ininterruptas.",
      "8 (oito) dias consecutivos.",
      "15 (quinze) dias consecutivos.",
      "30 (trinta) dias ininterruptos."
    ],
    "correctIndex": 2,
    "explanation": "Nos termos do art. 88 da Lei nº 6.783/1974 e do Código Penal Militar, o policial-militar comete o crime militar de deserção se ausentar-se, sem licença, da sua unidade militar por mais de 8 (oito) dias consecutivos.",
    "fundamentacaoLegal": "Art. 88 da Lei Estadual nº 6.783/1974 c/c Art. 187 do CPM.",
    "hint": "Ausência por mais de 8 dias consecutivos = Deserção.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Passou de 8 dias sem aparecer = DESERÇÃO!",
    "porqueErrou": {
      "0": "24 horas configura Ausência, não deserção.",
      "1": "48 horas não é marco tipificador.",
      "3": "15 dias já é tempo superior ao da consumação, que ocorre após o 8º dia.",
      "4": "30 dias é o prazo para ser declarado extraviado."
    },
    "analiseAlternativas": {
      "A": "Incorreta, 24 horas é ausente.",
      "B": "Incorreta, prazo sem correspondência típica.",
      "C": "Correta. Mais de 8 dias consecutivos consuma a deserção militar.",
      "D": "Incorreta, o crime se consuma no nono dia.",
      "E": "Incorreta, 30 dias é marco do extravio."
    }
  },
  {
    "id": "leg_pmpe_020",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Desaparecimento e Extravio (Lei nº 6.783/74)",
    "question": "Segundo a Lei Estadual nº 6.783/1974, é considerado DESAPARECIDO o policial-militar que, no desempenho de qualquer serviço ou em calamidade, tiver paradeiro ignorado por mais de 8 dias. Se esse desaparecimento perdurar por mais de determinado prazo, o militar é oficialmente considerado EXTRAVIADO. Esse prazo é de mais de:",
    "options": [
      "15 (quinze) dias.",
      "30 (trinta) dias.",
      "60 (sessenta) dias.",
      "90 (noventa) dias.",
      "180 (cento e oitenta) dias."
    ],
    "correctIndex": 1,
    "explanation": "Conforme os arts. 89 e 90 da Lei Estadual nº 6.783/1974: o militar com paradeiro ignorado por mais de 8 dias em serviço ou calamidade é considerado Desaparecido. Se permanecer desaparecido por mais de 30 (trinta) dias, será oficialmente considerado Extraviado.",
    "fundamentacaoLegal": "Art. 90 da Lei Estadual nº 6.783/1974.",
    "hint": "Desaparecido: mais de 8 dias | Extraviado: mais de 30 dias.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "D-8 (Desaparecido: > 8 dias) -> E-30 (Extraviado: > 30 dias).",
    "porqueErrou": {
      "0": "15 dias não gera declaração formal de extravio.",
      "2": "60 dias é o dobro do prazo de 30 dias fixado no Estatuto.",
      "3": "90 dias é prazo incorreto.",
      "4": "180 dias não encontra respaldo no art. 90."
    },
    "analiseAlternativas": {
      "A": "Incorreta, prazo intermediário inexistente.",
      "B": "Correta. Art. 90 do Estatuto: mais de 30 dias de desaparecimento = Extraviado.",
      "C": "Incorreta, prazo superior ao legal.",
      "D": "Incorreta, não corresponde à lei.",
      "E": "Incorreta, prazo excessivo."
    }
  },
  {
    "id": "leg_pmpe_021",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Excedente (Lei nº 6.783/74)",
    "question": "A situação de 'EXCEDENTE' na Polícia Militar de Pernambuco é expressamente disciplinada no art. 85 do Estatuto. Ocorre a situação de excedente, dentre outras hipóteses, quando o policial-militar:",
    "options": [
      "Completa 35 anos de efetivo serviço e requer a reserva remunerada voluntária.",
      "Cessado o motivo de sua agregação, reverte ao respectivo Quadro e não encontra vaga disponível no seu grau hierárquico.",
      "É promovido por merecimento após aprovação unânime da comissão de promoções.",
      "É punido com prisão disciplinar superior a 30 dias pela autoridade competente.",
      "É nomeado para o cargo de Comandante-Geral da Polícia Militar."
    ],
    "correctIndex": 1,
    "explanation": "O art. 85 da Lei Estadual nº 6.783/1974 prevê que o policial-militar é considerado excedente quando, cessado o motivo da sua agregação, reverte ao respectivo Quadro e não há vaga aberta, permanecendo no seu posto ou graduação aguardando a abertura da primeira vaga.",
    "fundamentacaoLegal": "Art. 85 da Lei Estadual nº 6.783/1974.",
    "hint": "Voltou da agregação mas não tem vaga? Fica de Excedente até abrir uma vaga!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Reverteu sem vaga aberta no quadro = EXCEDENTE!",
    "porqueErrou": {
      "0": "Completar tempo e pedir reserva não gera excedente.",
      "2": "Promoção por merecimento exige vaga regular prévia no quadro.",
      "3": "Punição disciplinar não coloca o militar como excedente.",
      "4": "Comandante-Geral ocupa cargo em comissão privativo, sem vinculação ao instituto de excedente."
    },
    "analiseAlternativas": {
      "A": "Incorreta, trata-se de passagem regular à inatividade.",
      "B": "Correta. Hipótese clássica e literal do art. 85 do Estatuto da PMPE.",
      "C": "Incorreta, promoção regular exige vaga em aberto.",
      "D": "Incorreta, sanção disciplinar não altera a escala numérica dessa forma.",
      "E": "Incorreta, comando-geral é cargo de provimento em comissão."
    }
  },
  {
    "id": "leg_pmpe_022",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Reserva Remunerada (Lei nº 6.783/74)",
    "question": "A passagem do policial-militar da PMPE para a situação de inatividade mediante 'Reserva Remunerada' pode ocorrer de duas formas distintas segundo o Estatuto:",
    "options": [
      "A pedido ou 'ex-officio' (compulsoriamente por ato da autoridade).",
      "Por sorteio semestral ou por deliberação do sindicato de praças.",
      "Apenas por sentença transitada em julgado da Justiça Militar.",
      "Exclusivamente por iniciativa do policial militar, sendo vedada a transferência compulsória.",
      "Mediante eleição direta realizada pelo efetivo de cada Batalhão."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 94 da Lei nº 6.783/1974, a passagem do policial-militar à situação de inatividade, mediante transferência para a reserva remunerada, efetua-se: I - a pedido; II - ex-officio (quando atinge as idades-limite ou condições legais compulsórias).",
    "fundamentacaoLegal": "Art. 94 da Lei Estadual nº 6.783/1974.",
    "hint": "Reserva Remunerada: ou o militar pede (a pedido) ou a lei manda (ex-officio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Reserva Remunerada: A PEDIDO (voluntária) ou EX-OFFICIO (compulsória).",
    "porqueErrou": {
      "1": "Militares estaduais não têm sindicato nem transferência por sorteio.",
      "2": "Sentença militar trata de crimes e penas, não da passagem regular para a reserva.",
      "3": "Existe sim a reserva compulsória 'ex-officio' por limite de idade.",
      "4": "Inexistente eleição para ida à reserva militar."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa do art. 94 do Estatuto da PMPE.",
      "B": "Incorreta, vedação constitucional a sindicatos militares.",
      "C": "Incorreta, reserva remunerada é ato administrativo.",
      "D": "Incorreta, existe a modalidade compulsória ex-officio.",
      "E": "Incorreta, não há eleição."
    }
  },
  {
    "id": "leg_pmpe_023",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Reforma (Lei nº 6.783/74)",
    "question": "A 'REFORMA' é a situação de inatividade definitiva do policial-militar. De acordo com a Lei Estadual nº 6.783/1974, a passagem do militar à situação de reformado ocorre:",
    "options": [
      "Exclusivamente a pedido do militar interessado, desde que goze de plena saúde física.",
      "'Ex-officio', por determinação legal, quando o militar atinge idade-limite ou é julgado incapaz definitivamente para o serviço militar.",
      "Por concurso de provas e títulos realizado no âmbito do Comando-Geral.",
      "Após cumprir suspensão disciplinar ininterrupta de 60 dias.",
      "Apenas se o militar for condenado a pena privativa de liberdade em regime aberto."
    ],
    "correctIndex": 1,
    "explanation": "Nos termos do art. 104 da Lei nº 6.783/1974, a reforma efetua-se 'ex-officio'. Não existe reforma a pedido na legislação estatutária militar; ela decorre de incapacidade definitiva, invalidez ou limite etário de permanência na inatividade.",
    "fundamentacaoLegal": "Art. 104 da Lei Estadual nº 6.783/1974.",
    "hint": "Reforma militar é SEMPRE 'ex-officio' (compulsória), nunca a pedido!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Reforma = SEMPRE EX-OFFICIO! Não existe reforma 'a pedido'.",
    "porqueErrou": {
      "0": "Não existe reforma a pedido. O que é a pedido é a reserva remunerada.",
      "2": "Concurso não transfere militar para inatividade.",
      "3": "Suspensão disciplinar não reforma militar.",
      "4": "Condenação criminal gera perda de cargo/graduação, não reforma regular."
    },
    "analiseAlternativas": {
      "A": "Incorreta, reforma a pedido não existe no Estatuto.",
      "B": "Correta. Art. 104: A reforma efetua-se ex-officio.",
      "C": "Incorreta, não existe concurso para reforma.",
      "D": "Incorreta, suspensão é punição disciplinar.",
      "E": "Incorreta, condenação penal não gera reforma."
    }
  },
  {
    "id": "leg_pmpe_024",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Demissão de Oficiais (Lei nº 6.783/74)",
    "question": "A exclusão do serviço ativo da PMPE por 'DEMISSÃO' é um instituto estatutário que, segundo a Lei Estadual nº 6.783/1974:",
    "options": [
      "Aplica-se exclusivamente aos Oficiais da Polícia Militar.",
      "Aplica-se exclusivamente aos Soldados e Cabos durante o período probatório.",
      "Aplica-se a qualquer policial-militar com menos de 3 anos de serviço.",
      "Ocorre automaticamente quando o militar ingressa com ação judicial contra o Estado.",
      "É privativa das Praças que cometem crime de deserção."
    ],
    "correctIndex": 0,
    "explanation": "No Estatuto da PMPE (art. 109), a DEMISSÃO aplica-se exclusivamente aos OFICIAIS (a pedido ou 'ex-officio' a bem do serviço público). As Praças são 'licenciadas' ou 'excluídas a bem da disciplina', nunca 'demitidas' sob a ótica estatutária militar.",
    "fundamentacaoLegal": "Art. 109 da Lei Estadual nº 6.783/1974.",
    "hint": "Oficial é Demitido | Praça é Licenciada ou Excluída a bem da disciplina.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Demissão no Estatuto = EXCLUSIVA DE OFICIAIS! Praça tem Licenciamento/Exclusão.",
    "porqueErrou": {
      "1": "Praças sofrem licenciamento ou exclusão, e não demissão estatutária.",
      "2": "Demissão é privativa de Oficiais, independentemente do tempo de serviço.",
      "3": "Ação judicial é garantia constitucional e não gera demissão.",
      "4": "Praça desertora sofre exclusão/licenciamento, não demissão."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 109: 'A demissão da Polícia Militar, aplicada exclusivamente aos Oficiais...'.",
      "B": "Incorreta, praça sofre licenciamento.",
      "C": "Incorreta, termo reservado a oficiais.",
      "D": "Incorreta, o direito de petição é garantido na CF.",
      "E": "Incorreta, deserção de praça tem procedimento próprio."
    }
  },
  {
    "id": "leg_pmpe_025",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Perda de Posto e Patente (Lei nº 6.783/74)",
    "question": "Conforme a Constituição e a Lei Estadual nº 6.783/1974, o Oficial da PMPE só perderá o posto e a patente se for declarado indigno do oficialato ou com ele incompatível, por decisão:",
    "options": [
      "Do Comandante-Geral da PMPE em sindicância sumária.",
      "Do Tribunal de Justiça do Estado de Pernambuco ou tribunal competente, em tempo de paz.",
      "Do Secretário de Defesa Social homologada pelo Secretário de Administração.",
      "Da Comissão Permanente de Disciplina da corporação.",
      "Do delegado titular da Delegacia de Polícia Judiciária Militar."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 110 do Estatuto e o art. 125, § 4º da CF/88, o oficial só perde o posto e a patente se for julgado indigno do oficialato ou com ele incompatível por decisão de tribunal competente (em Pernambuco, o Tribunal de Justiça do Estado - TJPE).",
    "fundamentacaoLegal": "Art. 110 da Lei Estadual nº 6.783/1974 c/c Art. 125, § 4º da CF/88.",
    "hint": "Oficial só perde posto/patente por decisão do Tribunal de Justiça!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Posto e Patente = Só Tribunal (TJPE) pode cassar!",
    "porqueErrou": {
      "0": "Comandante-Geral não tem poder constitucional para cassar patente de oficial.",
      "2": "Secretário de Defesa Social não tem competência jurisdicional para perda de patente.",
      "3": "Comissões administrativas apenas opinam, não cassam patente.",
      "4": "Delegado não decide sobre perda de posto e patente de oficiais."
    },
    "analiseAlternativas": {
      "A": "Incorreta, viola garantia constitucional do oficialato.",
      "B": "Correta. Regra constitucional e estatutária expressa.",
      "C": "Incorreta, autoridade executiva não pode cassar patente.",
      "D": "Incorreta, comissão disciplinar não tem essa competência.",
      "E": "Incorreta, delegado judiciário militar apenas investiga."
    }
  },
  {
    "id": "leg_pmpe_026",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Licenciamento de Praças (Lei nº 6.783/74)",
    "question": "O licenciamento do serviço ativo na Polícia Militar de Pernambuco, aplicado às praças, efetua-se:",
    "options": [
      "A pedido ou 'ex-officio' (a bem da disciplina ou por conveniência do serviço).",
      "Exclusivamente por deliberação do Ministério Público Militar.",
      "Apenas após o cumprimento integral de 30 anos de serviço.",
      "Por determinação do Poder Legislativo Estadual mediante lei de anistia.",
      "Sempre de forma compulsória sem qualquer possibilidade de requerimento da praça."
    ],
    "correctIndex": 0,
    "explanation": "Segundo o art. 119 da Lei nº 6.783/1974, o licenciamento do serviço ativo, aplicado às praças, efetua-se: I - a pedido (voluntário); II - ex-officio: a) por conveniência do serviço; b) a bem da disciplina.",
    "fundamentacaoLegal": "Art. 119 da Lei Estadual nº 6.783/1974.",
    "hint": "Licenciamento de praça: ou ela pede (a pedido) ou a corporação licencia (ex-officio).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Licenciamento da Praça: A PEDIDO ou EX-OFFICIO (conveniência ou a bem da disciplina).",
    "porqueErrou": {
      "1": "Ministério Público é órgão fiscalizador e acusador, não licencia militares.",
      "2": "Com 30 anos de serviço o militar vai para a reserva remunerada, não para licenciamento comum.",
      "3": "Assembleia Legislativa não licencia praças individualmente.",
      "4": "A praça pode sim requerer voluntariamente seu licenciamento 'a pedido'."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa do art. 119 do Estatuto da PMPE.",
      "B": "Incorreta, incompetência do MP.",
      "C": "Incorreta, com tempo integral aplica-se reserva.",
      "D": "Incorreta, licenciamento é ato administrativo do Executivo/Comando.",
      "E": "Incorreta, modalidade 'a pedido' é garantida em lei."
    }
  },
  {
    "id": "leg_pmpe_027",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Exclusão a Bem da Disciplina (Lei nº 6.783/74)",
    "question": "A exclusão a bem da disciplina é ato privativo do Comandante-Geral e será aplicada à Praça da PMPE:",
    "options": [
      "Que completar 10 anos de serviço sem receber elogio individual.",
      "Com estabilidade assegurada, quando for julgada culpada em Conselho de Disciplina ou condenada judicialmente por sentença transitada em julgado a pena privativa de liberdade superior a 2 anos.",
      "Que faltar ao serviço por mais de 12 horas em regime de prontidão geral.",
      "Exclusivamente durante o período de férias coletivas do Batalhão.",
      "Que for reprovada no exame toxicológico periódico sem abertura de contraditório."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 123 da Lei nº 6.783/1974, a exclusão a bem da disciplina será aplicada 'ex-officio' à praça com estabilidade assegurada sobre a qual houver pronunciamento de Conselho de Disciplina ou condenação por crime militar ou comum com pena restritiva de liberdade superior a dois anos.",
    "fundamentacaoLegal": "Art. 123 da Lei Estadual nº 6.783/1974.",
    "hint": "Exclusão a bem da disciplina exige Conselho de Disciplina para praça estável!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Praça estável só é excluída a bem da disciplina após CONSELHO DE DISCIPLINA ou sentença transitada!",
    "porqueErrou": {
      "0": "Falta de elogios não gera exclusão a bem da disciplina.",
      "2": "Falta de 12 horas é transgressão disciplinar simples, jamais exclusão direta.",
      "3": "Férias não têm relação com as hipóteses gravosas de exclusão.",
      "4": "Contraditório e ampla defesa são obrigatórios em qualquer penalidade expulsória."
    },
    "analiseAlternativas": {
      "A": "Incorreta, elogio não é requisito de manutenção no cargo.",
      "B": "Correta. Regra fundamental do art. 123 do Estatuto da PMPE.",
      "C": "Incorreta, desproporcional e sem suporte legal.",
      "D": "Incorreta, época do ano é irrelevante.",
      "E": "Incorreta, ampla defesa é dogma constitucional inafastável."
    }
  },
  {
    "id": "leg_pmpe_028",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Recompensas Militares (Lei nº 6.783/74)",
    "question": "As recompensas constituem reconhecimento dos bons serviços prestados pelo policial-militar. Segundo o Estatuto da PMPE, são consideradas recompensas militares:",
    "options": [
      "Os elogios, as condecorações e as dispensas do serviço.",
      "A promoção automática em caso de matrimônio civil.",
      "O pagamento de gratificação em dinheiro sem amparo legal.",
      "A isenção permanente de escalas de serviço operacional.",
      "A transferência a pedido para Batalhão de preferência sem existência de vaga."
    ],
    "correctIndex": 0,
    "explanation": "Nos termos do art. 69 da Lei nº 6.783/1974, são consideradas recompensas militares policiais: I - os prêmios de honra ao mérito; II - as condecorações por serviços prestados; III - os elogios, louvores e referências elogiosas; IV - as dispensas do serviço.",
    "fundamentacaoLegal": "Art. 69 da Lei Estadual nº 6.783/1974.",
    "hint": "Recompensas: Elogios, Condecorações e Dispensas de serviço.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Recompensas = Elogios, Condecorações e Dispensas!",
    "porqueErrou": {
      "1": "Casamento dá direito a núpcias (afastamento), nunca promoção automática.",
      "2": "Remuneração rege-se estritamente pela legalidade orçamentária.",
      "3": "Nenhum militar ativo tem isenção permanente de serviço operacional.",
      "4": "Transferência depende de oportunidade, conveniência e vaga aberta."
    },
    "analiseAlternativas": {
      "A": "Correta. Rol expresso do art. 69 da Lei Estadual 6.783/1974.",
      "B": "Incorreta, promoção decorre de critérios da Lei 108/2008.",
      "C": "Incorreta, viola o princípio da legalidade administrativa.",
      "D": "Incorreta, escala é obrigação funcional permanente.",
      "E": "Incorreta, lotação é discricionariedade do Comando-Geral."
    }
  },
  {
    "id": "leg_pmpe_029",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Afastamentos Regulamentares (Lei nº 6.783/74)",
    "question": "Os afastamentos temporários do serviço motivados por núpcias (casamento) e luto (falecimento de cônjuge, pais ou filhos) são direitos do policial-militar da PMPE. De acordo com o Estatuto, o prazo concedido para núpcias e para luto é de até:",
    "options": [
      "3 (três) dias consecutivos.",
      "5 (cinco) dias consecutivos.",
      "8 (oito) dias consecutivos.",
      "10 (dez) dias consecutivos.",
      "15 (quinze) dias consecutivos."
    ],
    "correctIndex": 2,
    "explanation": "O art. 64 do Estatuto da PMPE preceitua que as dispensas do serviço são concedidas aos policiais-militares por motivo de núpcias ou de luto até o prazo de 8 (oito) dias consecutivos, sem prejuízo da remuneração.",
    "fundamentacaoLegal": "Art. 64 da Lei Estadual nº 6.783/1974.",
    "hint": "Núpcias e Luto no Estatuto da PMPE = até 8 DIAS!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Casou (Núpcias) ou Perdeu ente querido (Luto) = 8 DIAS de afastamento!",
    "porqueErrou": {
      "0": "3 dias é prazo incorreto para núpcias/luto no Estatuto militar.",
      "1": "5 dias é prazo comum na CLT (licença paternidade), mas não no Estatuto PMPE.",
      "3": "10 dias extrapola o limite legal de 8 dias.",
      "4": "15 dias é prazo excessivo sem suporte na lei."
    },
    "analiseAlternativas": {
      "A": "Incorreta, prazo inferior ao assegurado.",
      "B": "Incorreta, confusão com legislação trabalhista civil.",
      "C": "Correta. Regra literal do art. 64: até 8 dias consecutivos.",
      "D": "Incorreta, prazo não fixado em lei.",
      "E": "Incorreta, prazo excessivo."
    }
  },
  {
    "id": "leg_pmpe_030",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Comando e Subordinação (Lei nº 6.783/74)",
    "question": "A respeito do 'COMANDO' na Polícia Militar de Pernambuco, a Lei Estadual nº 6.783/1974 estabelece que:",
    "options": [
      "O comando é a soma de autoridade, deveres e responsabilidade de que o policial-militar é investido legalmente quando conduz homens ou dirige uma organização policial-militar.",
      "O comando é uma faculdade renunciável a qualquer tempo pelo oficial investido.",
      "A subordinação funcional afeta e diminui a dignidade pessoal do policial-militar subordinado.",
      "O comandante não responde pelos atos praticados por seus subordinados durante o cumprimento de suas ordens.",
      "O comando de frações de tropa é exclusivo do Governador do Estado."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 33 da Lei nº 6.783/1974: 'Comando é a soma de autoridade, deveres e responsabilidade de que o policial-militar é investido legalmente quando conduz homens ou dirige uma organização policial-militar. O comando é vinculado ao grau hierárquico e constitui prerrogativa do militar.'",
    "fundamentacaoLegal": "Art. 33 da Lei Estadual nº 6.783/1974.",
    "hint": "Comando = Autoridade + Deveres + Responsabilidade ao conduzir homens/OPM.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Comando = Autoridade, dever e responsabilidade legal!",
    "porqueErrou": {
      "1": "O comando é indelegável e irrenunciável discricionariamente.",
      "2": "O art. 35 diz expressamente que a subordinação NÃO afeta a dignidade pessoal do militar.",
      "3": "O comandante responde diretamente pelo cumprimento das missões e ordens dadas.",
      "4": "Governador exerce comando supremo, mas comandos operacionais de tropa são de oficiais."
    },
    "analiseAlternativas": {
      "A": "Correta. Conceito legal exato do art. 33 do Estatuto.",
      "B": "Incorreta, dever funcional imperativo.",
      "C": "Incorreta, art. 35 protege expressamente a dignidade do subordinado.",
      "D": "Incorreta, o comandante responde pelas ordens e instruções emitidas.",
      "E": "Incorreta, os oficiais exercem o comando das tropas militares."
    }
  },
  {
    "id": "leg_pmpe_031",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Complementar nº 108/2008 - Critérios de Promoção",
    "question": "A Lei Complementar Estadual nº 108/2008 reestrutura o sistema de promoções dos militares do Estado de Pernambuco. Assinale a alternativa que indica corretamente os critérios adotados para as promoções de oficiais e praças da PMPE:",
    "options": [
      "Antiguidade, merecimento, bravura, post-mortem e ressarcimento de preterição.",
      "Sorteio, indicação política, bravura e tempo de casamento.",
      "Desempenho acadêmico exclusivo, idade cronológica e eleição pelos pares.",
      "Concurso público interno semestral com prova de títulos.",
      "Exclusivamente por antiguidade, sendo vedado o merecimento em forças militares."
    ],
    "correctIndex": 0,
    "explanation": "Nos termos da Lei Complementar Estadual nº 108/2008, as promoções na Polícia Militar de Pernambuco obedecem aos seguintes critérios fundamentais: Antiguidade, Merecimento, Bravura, 'Post-Mortem' e Ressarcimento de Preterição.",
    "fundamentacaoLegal": "Art. 4º da Lei Complementar Estadual nº 108/2008.",
    "hint": "Critérios de promoção: Antiguidade, Merecimento, Bravura, Post-Mortem e Preterição.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Mnemônico: A-M-B-P-P (Antiguidade, Merecimento, Bravura, Post-mortem, Preterição).",
    "porqueErrou": {
      "1": "Indicação política e sorteio são vedados no plano de carreiras militar.",
      "2": "Não existe eleição corporativa de promoção na hierarquia militar.",
      "3": "Promoção na carreira não é novo concurso público.",
      "4": "Merecimento é um dos principais critérios da Lei 108/2008."
    },
    "analiseAlternativas": {
      "A": "Correta. Rol taxativo e completo dos critérios de promoção da LC 108/2008.",
      "B": "Incorreta, conceitos alheios à disciplina legal militar.",
      "C": "Incorreta, eleição viola a essência da hierarquia.",
      "D": "Incorreta, promoção decorre de quadro de acesso, não novo concurso.",
      "E": "Incorreta, o merecimento é plenamente adotado."
    }
  },
  {
    "id": "leg_pmpe_032",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Complementar nº 108/2008 - Promoção por Bravura",
    "question": "A promoção por bravura é aquela que resulta de atos extraordinários de coragem e desprendimento no cumprimento do dever. Segundo a Lei Complementar nº 108/2008, a promoção por bravura:",
    "options": [
      "Exige o cumprimento rigoroso do interstício mínimo e a existência de vaga aberta no Quadro.",
      "Independe da existência de vaga e de interstício no posto ou graduação, retroagindo os seus efeitos à data do fato heroico.",
      "Só pode ser concedida se o policial militar tiver mais de 20 anos de efetivo serviço.",
      "Depende de aprovação em concurso vestibular de oficiais.",
      "Não pode ser concedida a Praças, sendo privativa do oficialato superior."
    ],
    "correctIndex": 1,
    "explanation": "Conforme a LC nº 108/2008, a promoção por bravura independe da existência de vaga e do cumprimento de interstício legal, retroagindo os seus efeitos à data em que foi praticado o ato de bravura, devidamente apurado em investigação sumária e homologado.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Bravura NÃO precisa de vaga nem de interstício! Vale para Praça e Oficial!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "BRAVURA: Sem vaga, sem interstício e com efeito retroativo!",
    "porqueErrou": {
      "0": "Bravura é a única promoção que dispensa vaga aberta e interstício de tempo.",
      "2": "Pode ser concedida a qualquer militar recém-formado que pratique ato heróico.",
      "3": "Ato de coragem no serviço não exige prova de concurso.",
      "4": "Aplica-se com frequência a soldados, cabos e sargentos."
    },
    "analiseAlternativas": {
      "A": "Incorreta, bravura dispensa vaga e interstício expressamente.",
      "B": "Correta. Regra fundamental da promoção por bravura na LC 108/2008.",
      "C": "Incorreta, qualquer militar pode ser promovido por bravura.",
      "D": "Incorreta, apura-se em comissão de investigação de bravura.",
      "E": "Incorreta, praças são os principais agraciados em combate."
    }
  },
  {
    "id": "leg_pmpe_033",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Complementar nº 108/2008 - Promoção Post-Mortem",
    "question": "A promoção 'post-mortem' é aquela concedida ao policial-militar falecido. Conforme a legislação da PMPE, a promoção post-mortem será devida quando o militar falecer:",
    "options": [
      "Em decorrência de causas naturais após a passagem para a reforma definitiva.",
      "Em consequência de ferimentos recebidos em combate ou na garantia da ordem pública, ou de acidente em serviço ou moléstia profissional dele decorrente.",
      "Por qualquer motivo, inclusive suicídio ou acidente pessoal de trânsito em período de férias.",
      "Exclusivamente durante a vigência de estado de sítio decretado pelo Presidente da República.",
      "Desde que a família renuncie à pensão militar do Estado de Pernambuco."
    ],
    "correctIndex": 1,
    "explanation": "A promoção post-mortem destina-se a homenagear o militar que tomba no cumprimento da missão constitucional: em combate, na preservação da ordem pública, em virtude de agressão sofrida em razão do serviço, ou por ferimento/moléstia decorrente de ato de serviço.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Militar faleceu em serviço ou em combate contra o crime = Promoção Post-Mortem.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Post-Mortem: Morte em razão do serviço, em combate ou acidente de serviço!",
    "porqueErrou": {
      "0": "Morte natural de reformado não enseja promoção post-mortem de serviço.",
      "2": "Fatos estranhos ao serviço e sem nexo causal não geram promoção post-mortem.",
      "3": "Não depende de estado de sítio; aplica-se ao policiamento ostensivo cotidiano.",
      "4": "A pensão é assegurada e calculada com base no novo posto/graduação promovido."
    },
    "analiseAlternativas": {
      "A": "Incorreta, exige nexo de causalidade com o serviço policial.",
      "B": "Correta. Hipótese legal exata da promoção post-mortem.",
      "C": "Incorreta, ausência de nexo com o dever militar.",
      "D": "Incorreta, aplica-se no policiamento ordinário.",
      "E": "Incorreta, a pensão da família é direito irrenunciável."
    }
  },
  {
    "id": "leg_pmpe_034",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Complementar nº 108/2008 - Ressarcimento de Preterição",
    "question": "Ocorre a promoção por 'RESSARCIMENTO DE PRETERIÇÃO' quando o policial-militar da PMPE:",
    "options": [
      "Deixa de ser promovido na época devida por motivo que não lhe seja imputável, vindo posteriormente a ter seu direito reconhecido administrativa ou judicialmente.",
      "É aprovado em primeiro lugar no Curso de Formação de Oficiais.",
      "Abandona voluntariamente a escala de serviço para prestar concurso em outro Estado.",
      "Recebe elogio formal do Governador do Estado em desfile cívico.",
      "Completa a idade-limite de permanência no serviço ativo sem ter sido punido."
    ],
    "correctIndex": 0,
    "explanation": "A promoção por ressarcimento de preterição é aquela feita após ser reconhecido ao militar preterido o direito que lhe cabia na época oportuna (por exemplo, após ser absolvido em processo judicial ou corrigido erro de pontuação da comissão). O militar recebe todos os direitos e antiguidade retroativos.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Militar não foi promovido na data certa por injustiça e depois ganhou? Ressarcimento de Preterição!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Preterido = Esquecido/Prejudicado sem culpa. Ressarcimento = Ganha o posto com data retroativa!",
    "porqueErrou": {
      "1": "Primeiro lugar em curso obtém promoção regular por conclusão ou merecimento.",
      "2": "Abandono é transgressão disciplinar ou crime de deserção.",
      "3": "Elogio pontua para merecimento, não gera preterição.",
      "4": "Idade-limite gera reserva 'ex-officio', não promoção por preterição."
    },
    "analiseAlternativas": {
      "A": "Correta. Definição precisa do ressarcimento de preterição.",
      "B": "Incorreta, trata-se de classificação de curso.",
      "C": "Incorreta, é falta gravíssima.",
      "D": "Incorreta, elogio conta pontos para merecimento.",
      "E": "Incorreta, gera transferência compulsória para a reserva."
    }
  },
  {
    "id": "leg_pmpe_035",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Complementar nº 108/2008 - Interstício de Promoção",
    "question": "No âmbito das promoções militares da PMPE regidas pela LC nº 108/2008, denomina-se 'INTERSTÍCIO':",
    "options": [
      "O tempo mínimo de permanência em determinado posto ou graduação indispensável para que o militar concorra à promoção.",
      "O período de suspensão disciplinar sofrido pelo policial-militar.",
      "O intervalo de tempo de folga entre dois plantões operacionais de 24 horas.",
      "A licença concedida para realização de campanha eleitoral.",
      "O prazo concedido para recurso de anulação de processo administrativo."
    ],
    "correctIndex": 0,
    "explanation": "Interstício é o tempo mínimo de efetivo serviço que o policial-militar deve cumprir no posto ou graduação para ter acesso ao posto ou graduação imediatamente superior (art. 5º da LC 108/2008).",
    "fundamentacaoLegal": "Art. 5º da Lei Complementar Estadual nº 108/2008.",
    "hint": "Interstício = Tempo mínimo obrigatório no posto/graduação para poder subir de grau.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Interstício = Tempo mínimo no posto atual para poder ser promovido!",
    "porqueErrou": {
      "1": "Suspensão não é interstício; ao contrário, desconta tempo de serviço.",
      "2": "Folga entre escalas chama-se descanso regulamentar.",
      "3": "Licença para campanha eleitoral rege-se pelas normas eleitorais com agregação.",
      "4": "Prazo recursal é preclusão processual, não interstício."
    },
    "analiseAlternativas": {
      "A": "Correta. Conceito legal exato de interstício militar.",
      "B": "Incorreta, confusão com penalidade disciplinar.",
      "C": "Incorreta, descanso de escala não é interstício de promoção.",
      "D": "Incorreta, licença política tem natureza distinta.",
      "E": "Incorreta, prazo processual recursal não é interstício."
    }
  },
  {
    "id": "leg_pmpe_036",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Complementar nº 108/2008 - Quadro de Acesso e Impedimentos",
    "question": "O Quadro de Acesso (QA) é a relação nominal dos policiais-militares que satisfazem os requisitos para concorrer à promoção. Segundo a legislação da PMPE, NÃO poderá ingressar no Quadro de Acesso o militar que:",
    "options": [
      "Possuir condecoração de honra ao mérito expedida pelo Governador.",
      "Estiver submetido a cumprimento de sentença condenatória com pena privativa de liberdade transitada em julgado.",
      "Tiver completado com aproveitamento o curso de aperfeiçoamento da corporação.",
      "Estiver no exercício regular de escala operacional na Região Metropolitana do Recife.",
      "Contar com mais de 5 elogios individuais em sua ficha funcional."
    ],
    "correctIndex": 1,
    "explanation": "Conforme a LC nº 108/2008, o militar cumprindo pena privativa de liberdade por sentença transitada em julgado, o militar desertor ou em gozo de LTIP fica expressamente impedido de figurar em Quadro de Acesso de Promoções.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Preso cumprindo pena definitiva jamais entra no Quadro de Acesso!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Preso condenado, desertor ou de LTIP = FORA do Quadro de Acesso!",
    "porqueErrou": {
      "0": "Condecoração pontua positivamente no Quadro de Acesso.",
      "2": "Curso de aperfeiçoamento é requisito obrigatório favorável à promoção.",
      "3": "Estar na escala operacional é o exercício normal da função militar.",
      "4": "Elogios aumentam os pontos de merecimento do militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta, condecoração é fator positivo de mérito.",
      "B": "Correta. Impedimento legal absoluto para promoção militar.",
      "C": "Incorreta, o curso habilita para o grau seguinte.",
      "D": "Incorreta, serviço ativo operacional é o padrão.",
      "E": "Incorreta, elogio melhora o conceito do militar."
    }
  },
  {
    "id": "leg_pmpe_037",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Classificação das Transgressões Disciplinares",
    "question": "A Lei Estadual nº 11.817/2000 (Código Disciplinar dos Militares de Pernambuco) classifica as transgressões disciplinares segundo a sua gravidade em:",
    "options": [
      "Leves, médias e graves.",
      "Simples, qualificadas e hediondas.",
      "Infracionais, contravencionais e criminosas.",
      "Menores, medianas e extremas.",
      "Primárias e reincidentes."
    ],
    "correctIndex": 0,
    "explanation": "Nos termos do Código Disciplinar dos Militares do Estado de Pernambuco (Lei nº 11.817/2000, art. 13), as transgressões disciplinares são classificadas em: LEVES, MÉDIAS e GRAVES, de acordo com a intensidade do dano e as circunstâncias do fato.",
    "fundamentacaoLegal": "Art. 13 da Lei Estadual nº 11.817/2000 (Código Disciplinar da PMPE).",
    "hint": "Transgressão disciplinar militar em Pernambuco: Leve, Média e Grave.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Transgressão militar na PMPE: L-M-G (Leve, Média, Grave).",
    "porqueErrou": {
      "1": "Hediondas é termo do direito penal (crimes hediondos), não da disciplina militar.",
      "2": "Crimes e contravenções são espécies penais, não transgressões disciplinares.",
      "3": "Termos leigos sem respaldo na Lei 11.817/2000.",
      "4": "Primariedade e reincidência são circunstâncias atenuantes/agravantes, não espécies de transgressão."
    },
    "analiseAlternativas": {
      "A": "Correta. Classificação expressa do art. 13 da Lei 11.817/2000.",
      "B": "Incorreta, termos inexistentes no código disciplinar militar.",
      "C": "Incorreta, crimes são julgados pela justiça penal.",
      "D": "Incorreta, linguagem inadequada.",
      "E": "Incorreta, são circunstâncias modificadoras da sanção."
    }
  },
  {
    "id": "leg_pmpe_038",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Penas Disciplinares",
    "question": "De acordo com o Código Disciplinar dos Militares de Pernambuco (Lei Estadual nº 11.817/2000), são sanções disciplinares aplicáveis aos policiais-militares:",
    "options": [
      "Advertência, repreensão, detenção, prisão disciplinar e licenciamento ou exclusão a bem da disciplina.",
      "Multa diária descontada em folha, trabalhos forçados e perda dos direitos políticos.",
      "Banimento do Estado, confisco de patrimônio e rebaixamento de grau.",
      "Suspensão de visitas íntimas, isolamento celular solitário e censura pública.",
      "Apenas advertência verbal, sendo vedada qualquer privação de liberdade interna."
    ],
    "correctIndex": 0,
    "explanation": "Conforme a Lei Estadual nº 11.817/2000, as sanções disciplinares compreendem: 1) Advertência; 2) Repreensão; 3) Detenção disciplinar; 4) Prisão disciplinar; 5) Licenciamento e exclusão a bem da disciplina.",
    "fundamentacaoLegal": "Art. 18 da Lei Estadual nº 11.817/2000.",
    "hint": "Sanções: Advertência -> Repreensão -> Detenção -> Prisão -> Licenciamento/Exclusão.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Escala de punições: Advertência, Repreensão, Detenção, Prisão, Licenciamento/Exclusão.",
    "porqueErrou": {
      "1": "Trabalhos forçados e perda de direitos políticos são vedados pela Constituição.",
      "2": "Banimento e confisco são inconstitucionais.",
      "3": "Pena cruel e isolamento desumano são expressamente proibidos pela CF/88.",
      "4": "A lei prevê repreensão, detenção e prisão disciplinar expressamente."
    },
    "analiseAlternativas": {
      "A": "Correta. Rol oficial e taxativo das sanções da Lei 11.817/2000.",
      "B": "Incorreta, viola garantias fundamentais da CF/88.",
      "C": "Incorreta, penas vedadas pelo ordenamento jurídico.",
      "D": "Incorreta, termos prisionais civis não previstos.",
      "E": "Incorreta, existem sanções de maior gradação."
    }
  },
  {
    "id": "leg_pmpe_039",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Comportamento Militar Excepcional",
    "question": "O comportamento policial-militar das praças espelha a conduta sob o ponto de vista disciplinar. Nos termos da Lei Estadual nº 11.817/2000, a praça é classificada no comportamento 'EXCEPCIONAL' quando, no período de 9 (nove) anos de efetivo serviço:",
    "options": [
      "Não tenha sofrido qualquer punição disciplinar.",
      "Tenha sofrido no máximo 1 (uma) advertência escrita.",
      "Tenha averbado 2 (duas) detenções justificadas em serviço.",
      "Tenha recebido condecoração por tempo de serviço.",
      "Não tenha faltado a nenhuma formatura matinal de segunda-feira."
    ],
    "correctIndex": 0,
    "explanation": "No Código Disciplinar da PMPE (art. 51 da Lei 11.817/2000), o comportamento da praça é classificado como EXCEPCIONAL quando, no período de 9 (nove) anos consecutivos de efetivo serviço, NÃO TENHA SOFRIDO QUALQUER PUNIÇÃO DISCIPLINAR.",
    "fundamentacaoLegal": "Art. 51, I da Lei Estadual nº 11.817/2000.",
    "hint": "Excepcional = 9 anos SEM NENHUMA punição!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Excepcional = ZERO punições em 9 anos ininterruptos!",
    "porqueErrou": {
      "1": "Se tiver 1 advertência, não atinge o comportamento excepcional.",
      "2": "Detenção desqualifica o comportamento excepcional.",
      "3": "Condecoração não apaga punições para fins de classificação estatutária.",
      "4": "Formatura não define por si só a métrica temporal do comportamento."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa do art. 51 da Lei 11.817/2000: 9 anos sem qualquer punição.",
      "B": "Incorreta, não admite qualquer punição.",
      "C": "Incorreta, detenção rebaixa o comportamento.",
      "D": "Incorreta, mérito positivo não supre punições.",
      "E": "Incorreta, critério anedótico sem previsão legal."
    }
  },
  {
    "id": "leg_pmpe_040",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Comportamento Militar Ótimo",
    "question": "Conforme o Código Disciplinar dos Militares de Pernambuco, a praça terá o seu comportamento classificado como 'ÓTIMO' quando, no período de 5 (cinco) anos consecutivos de serviço:",
    "options": [
      "Não tenha sofrido punição ou tenha sofrido até 2 (duas) repreensões.",
      "Tenha sofrido no máximo 1 (uma) prisão disciplinar de 10 dias.",
      "Tenha sofrido 4 (quatro) detenções disciplinares operacionais.",
      "Tenha sido promovida por bravura e acumulado 15 elogios.",
      "Tenha passado pelo menos 3 anos sem utilizar licença médica."
    ],
    "correctIndex": 0,
    "explanation": "De acordo com o art. 51 da Lei nº 11.817/2000, classifica-se no comportamento ÓTIMO a praça que, no período de 5 (cinco) anos, tenha sido punida com até duas repreensões, ou não tenha sofrido qualquer punição nesse lapso temporal.",
    "fundamentacaoLegal": "Art. 51, II da Lei Estadual nº 11.817/2000.",
    "hint": "Ótimo = 5 anos com no máximo 2 repreensões.",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Ótimo = 5 anos e no máximo 2 repreensões!",
    "porqueErrou": {
      "1": "Prisão disciplinar rebaixa o militar para o comportamento insuficiente ou mau.",
      "2": "Quatro detenções impedem o comportamento ótimo.",
      "3": "Promoção por bravura não anula critérios de sanções.",
      "4": "Licença médica não afeta a conduta disciplinar."
    },
    "analiseAlternativas": {
      "A": "Correta. Literalidade do art. 51, II do Código Disciplinar Militar de PE.",
      "B": "Incorreta, prisão impede o comportamento ótimo.",
      "C": "Incorreta, excede amplamente a tolerância legal.",
      "D": "Incorreta, mérito de bravura não compensa número de punições.",
      "E": "Incorreta, licença saúde é direito do servidor."
    }
  },
  {
    "id": "leg_pmpe_041",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Comportamento Militar Bom",
    "question": "No ingresso na Polícia Militar de Pernambuco, a praça é classificada automaticamente em determinado comportamento disciplinar. Além disso, o comportamento 'BOM' é mantido pela praça quando, no período de 2 (dois) anos de efetivo serviço:",
    "options": [
      "Tenha sido punida com até 2 (duas) prisões disciplinares.",
      "Tenha sido punida com até 10 prisões de rigor.",
      "Tenha permanecido afastada por licença particular por mais de 12 meses.",
      "Tenha sido transferida de unidade mais de 5 vezes.",
      "Tenha participado de greve reivindicatória salarial."
    ],
    "correctIndex": 0,
    "explanation": "No Código Disciplinar (art. 51, III), classifica-se no comportamento BOM a praça que, no período de 2 (dois) anos, tenha sido punida com até duas prisões disciplinares ou o equivalente em outras sanções mais brandas. Todo militar ingressa na corporação classificado no comportamento 'BOM'.",
    "fundamentacaoLegal": "Art. 51, III da Lei Estadual nº 11.817/2000.",
    "hint": "Recruta entra no comportamento BOM! Prazo de apuração: 2 anos.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Ingresso na PMPE = Comportamento BOM (2 anos / até 2 prisões).",
    "porqueErrou": {
      "1": "10 prisões rebaixam a praça para o comportamento Mau.",
      "2": "Licença particular não é critério punitivo de comportamento.",
      "3": "Transferência de unidade não influencia comportamento disciplinar.",
      "4": "Greve é vedada e acarreta sanção expulsória grave."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra do art. 51, III da Lei 11.817/2000.",
      "B": "Incorreta, punições excessivas rebaixam para MAU.",
      "C": "Incorreta, LTIP não é falta disciplinar.",
      "D": "Incorreta, lotação é ato ordinário do serviço.",
      "E": "Incorreta, greve gera processo demissório/expulsório."
    }
  },
  {
    "id": "leg_pmpe_042",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Comportamento Insuficiente e Mau",
    "question": "A praça da PMPE classificada no comportamento 'MAU' estará sujeita a consequências severas na carreira. De acordo com a Lei Estadual nº 11.817/2000, a praça que permanecer no comportamento 'MAU' e cometer nova falta grave:",
    "options": [
      "Será submetida a Processo Administrativo Disciplinar ou Conselho de Disciplina visando à sua exclusão ou licenciamento a bem da disciplina.",
      "Receberá automaticamente uma promoção indenizatória para a inatividade remunerada.",
      "Terá direito a 1 ano de férias suplementares para recuperação psicológica.",
      "Será compulsoriamente transferida para a reserva remunerada proporcional.",
      "Ficará isenta de prestar continência aos seus superiores hierárquicos."
    ],
    "correctIndex": 0,
    "explanation": "A praça que atinge o comportamento MAU demonstra inadaptação à disciplina militar. A reincidência em falta grave no comportamento MAU enseja a instauração de Processo de Licenciamento a Bem da Disciplina ou Conselho de Disciplina (se estável), visando à sua exclusão definitiva dos quadros da PMPE.",
    "fundamentacaoLegal": "Lei Estadual nº 11.817/2000.",
    "hint": "Comportamento Mau + Nova Falta Grave = Processo de Exclusão da PMPE!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Comportamento MAU é o último degrau antes da expulsão!",
    "porqueErrou": {
      "1": "Infrator disciplinar reincidente não recebe promoção indenizatória.",
      "2": "Férias suplementares não existem para faltas disciplinares.",
      "3": "Praça não estável ou transgressora contumaz é excluída sem remuneração proporcional.",
      "4": "Continência é sinal de respeito obrigatório inafastável."
    },
    "analiseAlternativas": {
      "A": "Correta. Consequência disciplinar direta da inaptidão militar reiterada.",
      "B": "Incorreta, aberração jurídica.",
      "C": "Incorreta, descabida.",
      "D": "Incorreta, militar é excluído a bem da disciplina.",
      "E": "Incorreta, viola o dever hierárquico fundamental."
    }
  },
  {
    "id": "leg_pmpe_043",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Recursos Disciplinares",
    "question": "O policial-militar que se julgar prejudicado por ato ou punição disciplinar tem o direito de recorrer. Segundo a Lei Estadual nº 11.817/2000, o recurso dirigido à própria autoridade que proferiu a decisão punitiva, solicitando que a reexamine, denomina-se:",
    "options": [
      "Pedido de Reconsideração de Ato.",
      "Recurso Hierárquico Superior.",
      "Apelação Correicional.",
      "Embargos Infringentes Militares.",
      "Mandado de Segurança Administrativo."
    ],
    "correctIndex": 0,
    "explanation": "O Pedido de Reconsideração de Ato é o recurso interposto pelo militar diretamente à autoridade que praticou a decisão ou aplicou a punição, para que esta a reconsidere, anule ou abrande (art. 62 da Lei nº 11.817/2000).",
    "fundamentacaoLegal": "Art. 62 da Lei Estadual nº 11.817/2000.",
    "hint": "Recurso para a MESMA autoridade que puniu = Reconsideração de Ato.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Mesma autoridade = Reconsideração | Autoridade imediatamente superior = Recurso Hierárquico.",
    "porqueErrou": {
      "1": "Recurso hierárquico é encaminhado à autoridade imediatamente superior à que puniu.",
      "2": "Apelação correicional não é recurso administrativo disciplinar militar em PE.",
      "3": "Embargos infringentes é recurso do processo judicial penal.",
      "4": "Mandado de segurança é ação judicial constitucional, não recurso administrativo interno."
    },
    "analiseAlternativas": {
      "A": "Correta. Definição precisa do art. 62 do Código Disciplinar.",
      "B": "Incorreta, dirige-se à instância imediatamente superior.",
      "C": "Incorreta, termo do processo judicial correicional.",
      "D": "Incorreta, recurso de processo penal civil/militar.",
      "E": "Incorreta, remédio judicial constitucional."
    }
  },
  {
    "id": "leg_pmpe_044",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Lei Estadual nº 11.817/2000 - Recurso Hierárquico",
    "question": "Negada a reconsideração de ato pela autoridade punidora, ou quando a autoridade competente não proferir decisão no prazo legal, o militar da PMPE poderá interpor:",
    "options": [
      "Recurso Hierárquico à autoridade imediatamente superior.",
      "Queixa-crime militar na Justiça Militar de 1º grau.",
      "Notícia-crime na Corregedoria Geral da União.",
      "Agravo de instrumento contra o Comandante do Batalhão.",
      "Ação popular disciplinar administrativa."
    ],
    "correctIndex": 0,
    "explanation": "Conforme preceitua a Lei nº 11.817/2000, indeferida a reconsideração de ato ou esgotado o prazo para decisão, cabe ao militar interpor Recurso Hierárquico à autoridade imediatamente superior na cadeia de comando militar.",
    "fundamentacaoLegal": "Art. 64 da Lei Estadual nº 11.817/2000.",
    "hint": "Indeferiu a reconsideração? Sobe para a autoridade superior = Recurso Hierárquico.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "1º Reconsideração -> 2º Recurso Hierárquico para o escalão superior!",
    "porqueErrou": {
      "1": "Queixa-crime é ação penal privada no Judiciário.",
      "2": "Corregedoria da União atua em órgãos federais, não na PMPE.",
      "3": "Agravo de instrumento é recurso processual civil/penal judicial.",
      "4": "Ação popular destina-se a tutelar patrimônio público, não sanção disciplinar pessoal."
    },
    "analiseAlternativas": {
      "A": "Correta. Trâmite recursal disciplinar regular da Lei 11.817/2000.",
      "B": "Incorreta, via judicial penal inapropriada.",
      "C": "Incorreta, incompetência federal.",
      "D": "Incorreta, recurso processual de tribunal judicial.",
      "E": "Incorreta, ação popular não cabe para sanção disciplinar militar individual."
    }
  },
  {
    "id": "leg_pmpe_045",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Constituição Estadual de Pernambuco - Vedações Constitucionais Militares",
    "question": "A Constituição do Estado de Pernambuco, em harmonia com a Constituição Federal de 1988, estabelece vedações expressas aos policiais-militares estaduais da ativa. Dentre elas, ao militar em serviço ativo é expressamente PROIBIDO:",
    "options": [
      "A sindicalização e a greve, bem como a filiação a partidos políticos.",
      "O casamento com pessoas de outras nacionalidades.",
      "A aquisição de casa própria por financiamento bancário público.",
      "A prática de esportes náuticos no litoral pernambucano.",
      "A realização de concursos públicos após a conclusão do curso de formação."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 101 da Constituição do Estado de Pernambuco e o art. 142, § 3º, IV e V da CF/88, ao militar estadual são expressamente proibidas a sindicalização e a greve, e o militar em serviço ativo não pode estar filiado a partidos políticos.",
    "fundamentacaoLegal": "Art. 101 da Constituição de Pernambuco c/c Art. 142, § 3º, IV e V da CF/88.",
    "hint": "Militar não faz greve, não se sindicaliza e não tem partido político na ativa!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Militar em serviço ativo: ZERO GREVE, ZERO SINDICATO, ZERO PARTIDO POLÍTICO!",
    "porqueErrou": {
      "1": "Militar pode casar com quem desejar, sem restrição de nacionalidade.",
      "2": "Financiamento habitacional é direito comum a todos os servidores.",
      "3": "Prática esportiva lícita é garantida a todo cidadão.",
      "4": "Militar pode prestar outros concursos públicos respeitadas as normas legais."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra pétrea constitucional de preservação da ordem militar.",
      "B": "Incorreta, liberdade matrimonial assegurada.",
      "C": "Incorreta, direito civil e patrimonial pleno.",
      "D": "Incorreta, absurda.",
      "E": "Incorreta, o militar pode se submeter a novos certames."
    }
  },
  {
    "id": "leg_pmpe_046",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Constituição Estadual de Pernambuco - Da Segurança Pública",
    "question": "Nos termos do art. 102 da Constituição do Estado de Pernambuco e do art. 144 da Constituição Federal, à Polícia Militar de Pernambuco cabe a competência originária de:",
    "options": [
      "Polícia judiciária e a apuração de infrações penais comuns praticadas por civis.",
      "Polícia ostensiva e a preservação da ordem pública.",
      "Guarda de presídios federais e segurança exclusiva de autoridades diplomáticas.",
      "Patrulhamento rodoviário federal de rodovias e ferrovias da União.",
      "Controle de fronteiras marítimas e emissão de passaportes para cidadãos estrangeiros."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 144, § 5º da CF/88 e art. 102 da Constituição Estadual de Pernambuco: 'Às polícias militares cabem a polícia ostensiva e a preservação da ordem pública'. A polícia judiciária e investigação de crimes civis cabe à Polícia Civil.",
    "fundamentacaoLegal": "Art. 102 da Constituição de Pernambuco c/c Art. 144, § 5º da CF/88.",
    "hint": "Missão da PMPE: Polícia Ostensiva e Preservação da Ordem Pública.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "PMPE = Polícia Ostensiva + Preservação da Ordem Pública!",
    "porqueErrou": {
      "0": "Polícia judiciária comum é atribuição privativa da Polícia Civil.",
      "2": "Guarda prisional é atribuição da Polícia Penal Estadual/Federal.",
      "3": "Patrulhamento rodoviário federal é competência da PRF.",
      "4": "Fronteiras marítimas e passaportes cabem à Polícia Federal."
    },
    "analiseAlternativas": {
      "A": "Incorreta, competência constitucional da Polícia Civil de Pernambuco.",
      "B": "Correta. Competência constitucional expressa da PMPE.",
      "C": "Incorreta, atribuição da Polícia Penal.",
      "D": "Incorreta, competência privativa da PRF.",
      "E": "Incorreta, atribuição constitucional da PF."
    }
  },
  {
    "id": "leg_pmpe_047",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Constituição Estadual de PE - Subordinação Institucional",
    "question": "A Polícia Militar e o Corpo de Bombeiros Militar de Pernambuco são instituições permanentes e regulares, forças auxiliares e reserva do Exército. De acordo com o art. 144, § 6º da CF/88 e a Constituição Estadual, a PMPE é subordinada administrativamente e operacionalmente:",
    "options": [
      "Ao Governador do Estado de Pernambuco.",
      "Ao Presidente do Tribunal de Justiça Militar da União.",
      "Ao Ministério da Justiça e Segurança Pública de forma direta.",
      "Ao Presidente da Assembleia Legislativa do Estado de Pernambuco.",
      "Ao Procurador-Geral de Justiça do Ministério Público de Pernambuco."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 144, § 6º da Constituição da República e a Carta Estadual: 'A Polícia Militar e o Corpo de Bombeiros Militar subordinam-se ao Governador do Estado'. O Governador é o Comandante Supremo das forças policiais estaduais.",
    "fundamentacaoLegal": "Art. 144, § 6º da CF/88 e Art. 100 da Constituição de Pernambuco.",
    "hint": "Comandante Supremo das Forças Estaduais = Governador do Estado.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "A PMPE subordina-se ao Governador do Estado de Pernambuco!",
    "porqueErrou": {
      "1": "Tribunal Militar tem função jurisdicional de julgamento de crimes militares.",
      "2": "Ministério da Justiça é órgão federal e não exerce subordinação direta sobre a PMPE.",
      "3": "Assembleia Legislativa tem função legislativa e de controle externo, sem comando sobre a tropa.",
      "4": "Ministério Público exerce controle externo da atividade policial, sem subordinação hierárquica."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra constitucional expressa do pacto federativo.",
      "B": "Incorreta, o Judiciário não comanda tropas militares.",
      "C": "Incorreta, a PMPE é corporação estadual autônoma.",
      "D": "Incorreta, o Legislativo não possui poder de comando executivo.",
      "E": "Incorreta, o MP é órgão fiscalizador autônomo."
    }
  },
  {
    "id": "leg_pmpe_048",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Compromisso de Honra (Lei nº 6.783/74)",
    "question": "O compromisso de honra policial-militar, prestado solenemente perante a Bandeira Nacional ao ingressar na PMPE, tem caráter solene e irrevogável. Nele, o policial militar jura:",
    "options": [
      "Dedicar-se inteiramente ao serviço policial-militar, à manutenção da ordem pública e à segurança da comunidade, mesmo com o sacrifício da própria vida.",
      "Obedecer unicamente a ordens escritas do Governador, recusando missões noturnas perigosas.",
      "Priorizar a preservação do seu patrimônio pessoal em detrimento da segurança dos cidadãos.",
      "Defender exclusivamente os cidadãos nascidos no Estado de Pernambuco.",
      "Renunciar a todos os direitos trabalhistas e previdenciários assegurados aos servidores."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 31 da Lei Estadual nº 6.783/1974, todo cidadão que ingressar na Polícia Militar prestará compromisso de honra, no qual afirma solenemente a sua dedicação ao serviço policial-militar, à manutenção da ordem pública e à segurança da comunidade, mesmo com o risco ou sacrifício da própria vida.",
    "fundamentacaoLegal": "Art. 31 da Lei Estadual nº 6.783/1974.",
    "hint": "Compromisso de honra: dedicação ao serviço, ordem pública e segurança da comunidade, mesmo com o sacrifício da própria vida!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Compromisso militar solene: '...mesmo com o sacrifício da própria vida!'",
    "porqueErrou": {
      "1": "Militar jura cumprimento das missões operacionais a qualquer hora do dia ou da noite.",
      "2": "O juramento coloca a vida e a segurança coletiva acima de interesses patrimoniais.",
      "3": "A proteção militar é universal a qualquer pessoa em solo pernambucano.",
      "4": "O militar não renuncia aos direitos estatutários e previdenciários legais."
    },
    "analiseAlternativas": {
      "A": "Correta. Texto solene literal do compromisso de honra da PMPE (art. 31).",
      "B": "Incorreta, distorção grosseira do dever militar.",
      "C": "Incorreta, o sacrifício pelo público é essência da profissão.",
      "D": "Incorreta, dever de proteção é universal.",
      "E": "Incorreta, direitos previdenciários e assistenciais são garantidos em lei."
    }
  },
  {
    "id": "leg_pmpe_049",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Pundonor e Decoro da Classe (Lei nº 6.783/74)",
    "question": "No Estatuto dos Policiais Militares de Pernambuco, o sentimento de honra, a dignidade pessoal e a conduta irrepreensível que devem nortear o militar tanto em serviço quanto na vida civil privada traduzem o conceito de:",
    "options": [
      "Pundonor militar e decoro da classe.",
      "Antiguidade corporativa relativa.",
      "Subordinação meramente burocrática.",
      "Preclusão administrativa hierárquica.",
      "Disponibilidade remunerada facultativa."
    ],
    "correctIndex": 0,
    "explanation": "O art. 27 da Lei nº 6.783/1974 estabelece que o sentimento do dever, o pundonor policial-militar e o decoro da classe impõem, a cada um dos integrantes da Polícia Militar, conduta moral irrepreensível, tanto na vida profissional quanto na vida privada e social.",
    "fundamentacaoLegal": "Art. 27 da Lei Estadual nº 6.783/1974.",
    "hint": "Conduta moral irrepreensível em serviço e na vida civil = Pundonor militar e decoro da classe.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Pundonor Militar = Honra pessoal. Decoro da Classe = Dignidade e respeito perante a sociedade.",
    "porqueErrou": {
      "1": "Antiguidade é critério de tempo no posto/graduação.",
      "2": "Subordinação burocrática não traduz honra e pundonor.",
      "3": "Preclusão é perda de faculdade processual pelo tempo.",
      "4": "Disponibilidade é afastamento estatutário, não conduta moral."
    },
    "analiseAlternativas": {
      "A": "Correta. Termos fundamentais da ética militar no Estatuto da PMPE.",
      "B": "Incorreta, refere-se a precedência temporal.",
      "C": "Incorreta, dever formal desprovido de conotação moral.",
      "D": "Incorreta, instituto de direito processual.",
      "E": "Incorreta, situação administrativa funcional."
    }
  },
  {
    "id": "leg_pmpe_050",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE - Anulação de Inclusão e Desincorporação (Lei nº 6.783/74)",
    "question": "A anulação de inclusão e a desincorporação são modalidades de exclusão do serviço ativo da Polícia Militar de Pernambuco. Segundo o Estatuto (Lei nº 6.783/1974), a ANULAÇÃO DE INCLUSÃO ocorre:",
    "options": [
      "Quando se verificar que o policial-militar foi incluído indevidamente na corporação por erro de fato, fraude ou inaptidão física/mental comprovada existente à data do ingresso.",
      "Sempre que o militar completar 30 anos de serviço público sem responder a conselho de disciplina.",
      "Exclusivamente aos militares promovidos por bravura que requeiram a exoneração.",
      "Por decisão irrecorrível de qualquer autoridade municipal do Estado de Pernambuco.",
      "Caso o militar passe mais de 48 horas ausente do quartel sem justificativa legal."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 126 da Lei nº 6.783/1974, a anulação da inclusão opera-se quando se constatar, a qualquer tempo, que a inclusão do policial-militar na corporação decorreu de erro de fato, falsificação de documentos, fraude ou falta de preenchimento dos requisitos legais essenciais para ingresso.",
    "fundamentacaoLegal": "Art. 126 da Lei Estadual nº 6.783/1974.",
    "hint": "Entrou com documento falso ou sem cumprir os requisitos? Anulação da Inclusão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Simulado Oficial Legislação PMPE",
    "dicaMacete": "Anulação de inclusão = Vício ou fraude no ingresso torna nulo o ato de alistamento!",
    "porqueErrou": {
      "1": "Com 30 anos regulares o militar adquire direito à reserva remunerada.",
      "2": "Promoção por bravura é ato de honra e mérito, nada tendo a ver com vício no ingresso.",
      "3": "Autoridades municipais não têm poder sobre a investidura de militares estaduais da PMPE.",
      "4": "Ausência por 48 horas gera sanção disciplinar, não anulação originária de inclusão."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa do art. 126 da Lei nº 6.783/1974.",
      "B": "Incorreta, é hipótese de reserva remunerada.",
      "C": "Incorreta, bravura é condecoração e promoção operacional.",
      "D": "Incorreta, incompetência absoluta municipal.",
      "E": "Incorreta, ausência de 48h é falta funcional disciplinar."
    }
  }
];
