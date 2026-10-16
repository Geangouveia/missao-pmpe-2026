import type { QuizQuestion } from '../../types/game';

/**
 * CADERNO DE ELITE: ESTATUTO DA PMPE (LEI Nº 6.783/1974 E LC Nº 108/2008)
 * Questões 100% comentadas padrão Instituto AOCP
 */
export const BANCO_ESTATUTO_PMPE_EXTRA: QuizQuestion[] = [
  {
    "id": "est_pmpe_001",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Perda do Posto e da Patente de Oficial (Art. 110)",
    "question": "(Instituto AOCP / PMPE) De acordo com as disposições expressas do Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/1974) e da Constituição Federal de 1988, o Oficial da Polícia Militar de Pernambuco só perderá o posto e a patente se:",
    "options": [
      "For condenado em sindicância sumária determinada pelo Secretário de Defesa Social.",
      "For declarado indigno do oficialato, ou com ele incompatível, por decisão do Tribunal de Justiça do Estado (TJPE) em tempo de paz.",
      "Cometer falta disciplinar grave classificada na letra 'C' do Código Disciplinar.",
      "Completar 30 anos de efetivo serviço sem haver sido promovido ao posto de Coronel.",
      "For transferido ex-officio para a reserva remunerada a pedido do Comandante-Geral."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 110 da Lei Estadual nº 6.783/74 em consonância com o Art. 125, § 4º e Art. 142 da CF/88: O oficial da PMPE só perderá o posto e a patente se for declarado indigno do oficialato, ou com ele incompatível, por decisão de Tribunal competente (no caso de Pernambuco, o Tribunal de Justiça do Estado - TJPE). Nem o Governador nem o Comandante-Geral podem retirar a patente de oficial monocraticamente.",
    "fundamentacaoLegal": "Art. 110 da Lei Estadual nº 6.783/1974 e Art. 125, § 4º da CF/88.",
    "hint": "PERDA DA PATENTE DE OFICIAL = Somente por decisão do TRIBUNAL DE JUSTIÇA (TJPE)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "OFICIAL PERDE PATENTE? SÓ O TRIBUNAL (TJPE) TEM PODER PARA TIRAR!",
    "porqueErrou": {
      "0": "Sindicância administrativa jamais tem competência para decretar a perda de posto ou patente de oficial.",
      "2": "Falta disciplinar sujeita o militar a sanções administrativas regimentais, mas não à perda automática da patente.",
      "3": "Completar tempo de serviço enseja passagem para a reserva remunerada, preservando integralmente o posto e a patente.",
      "4": "Transferência para a reserva remunerada assegura todos os direitos e prerrogativas do posto militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Sindicância não retira posto ou patente.",
      "B": "Correta. Competência privativa do Tribunal de Justiça do Estado (TJPE).",
      "C": "Incorreta. Faltas disciplinares são apuradas em conselho de justificação, com decisão final do TJPE.",
      "D": "Incorreta. A reserva remunerada preserva as prerrogativas do oficialato.",
      "E": "Incorreta. Transferência para a reserva não cassa a patente."
    }
  },
  {
    "id": "est_pmpe_002",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Exclusão a Bem da Disciplina da Praça (Art. 117)",
    "question": "(Instituto AOCP / PMPE) Em relação à exclusão do serviço ativo da Polícia Militar de Pernambuco, a penalidade de 'EXCLUSÃO A BEM DA DISCIPLINA' é aplicável exclusivamente:",
    "options": [
      "Aos Oficiais Superiores (Majores, Tenentes-Coronéis e Coronéis) por decreto do Governador.",
      "Às Praças com ou sem estabilidade assegurada, pelo Comandante-Geral da PMPE, após apuração em processo regular ou Conselho de Disciplina.",
      "Aos Alunos Oficiais do CFO, por decisão unânime da comissão de formatura da Academia.",
      "Aos magistrados da Vara da Justiça Militar Estadual.",
      "Aos militares inativos há mais de 20 anos na reserva remunerada."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 117 da Lei nº 6.783/74: A exclusão a bem da disciplina será aplicada 'ex-officio' às Praças da PMPE (Soldados, Cabos, Sargentos e Subtenentes) por ato do Comandante-Geral, quando incidirem em faltas gravíssimas ou forem condenadas penalmente, assegurada a ampla defesa em Conselho de Disciplina ou PAD.",
    "fundamentacaoLegal": "Artigos 116 e 117 da Lei Estadual nº 6.783/1974.",
    "hint": "OFICIAL é DEMITIDO ou perde o posto por decisão do TJPE. PRAÇA é EXCLUÍDA a bem da disciplina pelo Comandante-Geral!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "OFICIAL = DEMISSÃO (via TJPE) | PRAÇA = EXCLUSÃO A BEM DA DISCIPLINA (via Comandante-Geral)!",
    "porqueErrou": {
      "0": "Oficiais sofrem pena de 'Demissão' ou perda de posto, nunca 'Exclusão a bem da disciplina'.",
      "2": "A exclusão não é decidida por comissão estudantil, mas por ato da autoridade militar competente.",
      "3": "Magistrados militares são membros do Poder Judiciário regidos pela LOMAN.",
      "4": "Militares inativos sofrem cassação de proventos ou reforma, não exclusão administrativa de praça da ativa."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Para oficiais a denominação legal é demissão.",
      "B": "Correta. A exclusão a bem da disciplina aplica-se especificamente às Praças por ato do Comandante-Geral.",
      "C": "Incorreta. Compete privativamente à autoridade militar legal.",
      "D": "Incorreta. Juízes militares integram a magistratura togada.",
      "E": "Incorreta. Aplica-se às praças ativas e em situação disciplinar específica."
    }
  },
  {
    "id": "est_pmpe_003",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Círculos Hierárquicos e Postos vs Graduações",
    "question": "(Instituto AOCP / PMPE) Nos termos do Estatuto dos Policiais Militares de Pernambuco, a escala hierárquica divide os militares entre Postos e Graduações. Assinale a correta correlação entre o grau hierárquico e a sua respectiva autoridade concedente:",
    "options": [
      "Posto é o grau hierárquico da Praça, conferido por portaria do Comandante-Geral; e Graduação é o grau do Oficial, conferido por Decreto do Governador.",
      "Posto é o grau hierárquico do Oficial, conferido por ato do Governador do Estado e confirmado em Carta-Patente; e Graduação é o grau hierárquico da Praça, conferido por ato do Comandante-Geral da PMPE.",
      "Posto e Graduação são sinônimos perfeitos, ambos conferidos pelo Secretário de Administração Estadual.",
      "Apenas os Oficiais do Quadro de Saúde recebem Posto; todos os combatentes recebem apenas Graduação.",
      "O grau hierárquico de Cabo é classificado como Posto Especial de comando militar."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 14 da Lei Estadual nº 6.783/1974: 'Posto é o grau hierárquico do oficial, conferido por ato do Governador do Estado e confirmado em Carta-Patente'. E o Art. 15: 'Graduação é o grau hierárquico da praça, conferido por ato do Comandante-Geral da Polícia Militar'.",
    "fundamentacaoLegal": "Artigos 14 e 15 da Lei Estadual nº 6.783/1974.",
    "hint": "OFICIAL tem POSTO (conferido pelo Governador). PRAÇA tem GRADUAÇÃO (conferida pelo Comandante-Geral).",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "OFICIAL = POSTO (GOVERNADOR) | PRAÇA = GRADUAÇÃO (COMANDANTE-GERAL)!",
    "porqueErrou": {
      "0": "A assertiva inverteu completamente os conceitos legais.",
      "2": "Posto e Graduação não são sinônimos no direito militar.",
      "3": "Todos os Oficiais (combatentes, de saúde, administração) possuem Posto.",
      "4": "Cabo é graduação de praça, não posto."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Inverteu a concessão de posto e graduação.",
      "B": "Correta. Posto é do Oficial (Governador/Carta-Patente) e Graduação é da Praça (Comandante-Geral).",
      "C": "Incorreta. São institutos jurídicos militares distintos.",
      "D": "Incorreta. Todos os oficiais militares têm posto.",
      "E": "Incorreta. Cabo é graduação de Praça."
    }
  },
  {
    "id": "est_pmpe_004",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Licença para Tratar de Interesse Particular (LTIP)",
    "question": "(Instituto AOCP / PMPE) De acordo com o Estatuto da PMPE (Lei nº 6.783/74), a Licença para Tratar de Interesse Particular (LTIP) é a autorização para o afastamento total do serviço. Sobre os requisitos dessa licença, é correto afirmar:",
    "options": [
      "Pode ser concedida a qualquer militar recém-empossado, com direito à percepção integral de remuneração e gratificações.",
      "É concedida com prejuízo da remuneração e da contagem do tempo de efetivo serviço, sendo exigido do militar pelo menos 10 (dez) anos de efetivo serviço prestado.",
      "Tem duração máxima improrrogável de 30 dias na carreira militar.",
      "Garante a promoção automática por merecimento durante todo o período em que o militar estiver afastado.",
      "É concedida compulsoriamente a todos os policiais que atingirem a idade de 25 anos."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o art. 67 da Lei nº 6.783/74: A Licença para Tratar de Interesse Particular (LTIP) é concedida sempre com PREJUÍZO DA REMUNERAÇÃO e do tempo de efetivo serviço, sendo exigido que o policial militar conte com mais de 10 (dez) anos de efetivo serviço prestado à corporação.",
    "fundamentacaoLegal": "Artigo 67 da Lei Estadual nº 6.783/1974.",
    "hint": "LTIP = SEM REMUNERAÇÃO, NÃO CONTA TEMPO e EXIGE MAIS DE 10 ANOS DE SERVIÇO!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "LTIP = 10 ANOS DE SERVIÇO + SALÁRIO ZERO + TEMPO PARADO!",
    "porqueErrou": {
      "0": "Exige mais de 10 anos de serviço e é SEM vencimentos (sem remuneração).",
      "2": "Pode ser concedida por até 2 anos.",
      "3": "O militar em LTIP fica agregado e não pode concorrer à promoção por merecimento.",
      "4": "Não é compulsória; depende de requerimento do militar e conveniência da administração."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Militar moderno não pode pedir LTIP e não há remuneração.",
      "B": "Correta. Exige 10 anos de serviço e é sem remuneração nem contagem de tempo.",
      "C": "Incorreta. Seu prazo pode chegar a até 2 anos.",
      "D": "Incorreta. O militar em LTIP não concorre a promoções.",
      "E": "Incorreta. Trata-se de ato discricionário a pedido do militar."
    }
  }
];
