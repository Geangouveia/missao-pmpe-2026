import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 100 QUESTÕES INÉDITAS DE LEGISLAÇÃO DA PMPE / ESTATUTO (INSTITUTO AOCP PMPE)
 * 100% fiéis ao Edital Oficial da PMPE 2026.
 * Abrange:
 * - Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco)
 * - Hierarquia, Disciplina, Círculos Hierárquicos, Posto e Graduação
 * - Deveres, Obrigações, Ética, Conselho de Justificação e de Disciplina
 * - Direitos, Prerrogativas, Licenças, Férias e Remuneração
 * - Situações Especiais: Agregação, Reversão, Excedente, Ausente, Deserção e Extraviado
 * - Exclusão da Ativa: Reserva Remunerada, Reforma, Demissão e Licenciamento
 * - Lei Complementar Estadual nº 108/2008 (Estrutura e Organização Básica da PMPE)
 * - Unidades Especializadas: BOPE, Choque, BPRv, BPTran, CIPOMA, BEPI, BIESP
 * - Constituição do Estado de Pernambuco de 1989 (Arts. 100 a 103 - Da Segurança Pública)
 */
export const BANCO_100_LEGISLAO_PMPE_AOCP: QuizQuestion[] = [
  {
    "id": "leg_pmpe_inedita_100_001",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Conceito e Destinação da PMPE (Art. 1º e 2º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q001] De acordo com a Lei Estadual nº 6.783/1974 (Estatuto dos Policiais Militares de Pernambuco), a Polícia Militar de Pernambuco é uma instituição permanente, considerada:",
    "options": [
      "Corporação autônoma de segurança civil, desprovida de vínculo institucional com o Ministério da Defesa.",
      "Força armada estadual independente com subordinação direta e exclusiva ao Tribunal de Justiça Militar.",
      "Força auxiliar e reserva do Exército Brasileiro, organizada com base na hierarquia e na disciplina, subordinada ao Governador do Estado.",
      "Órgão de execução municipal com foco privativo no patrulhamento escolar dos municípios metropolitanos.",
      "Instituição judiciária de polícia repressiva voltada à instrução de inquéritos policiais de crimes comuns."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o art. 2º da Lei Estadual nº 6.783/1974 e o art. 144 da CF/88, a PMPE é instituição permanente, força auxiliar e reserva do Exército, organizada com base na hierarquia e na disciplina, subordinada diretamente ao Governador do Estado.",
    "fundamentacaoLegal": "Arts. 1º e 2º da Lei Estadual nº 6.783/1974.",
    "hint": "PMPE é FORÇA AUXILIAR E RESERVA DO EXÉRCITO, subordinada ao Governador do Estado!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Bases da PMPE: Força auxiliar do Exército + Hierarquia + Disciplina + Subordinada ao Governador.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. Conforme o art. 2º da Lei Estadual nº 6.783/1974 e o art. 144 da CF/88, a PMPE é instituição permanente, força auxiliar e reserva do Exército, organizada com base na hierarquia e na disciplina, subordinada diretamente ao Governador do Estado.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_002",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Militares da Ativa e da Inatividade (Art. 3º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q002] Conforme o art. 3º da Lei nº 6.783/1974, os policiais militares encontram-se em uma das seguintes situações:",
    "options": [
      "Apenas na ativa, não havendo previsão estatutária para militares na reserva no âmbito estadual.",
      "Em disponibilidade remunerada de natureza civil ou em licença perpétua sem remuneração.",
      "Em comissão parlamentar permanente com estabilidade automática desde o primeiro ano.",
      "Na inatividade transitória compulsória pelo período máximo de 10 dias úteis anuais.",
      "Na ativa (policiais de carreira, incluídos voluntariamente e alunos de órgãos de formação) ou na inatividade (na reserva remunerada ou reformados)."
    ],
    "correctIndex": 4,
    "explanation": "O art. 3º divide os policiais militares em: I - Na ativa (de carreira, incluídos voluntariamente e alunos de órgãos de formação de policiais militares); II - Na inatividade: a) na reserva remunerada (percebem remuneração e estão sujeitos à prestação de serviço ativo); b) reformados (dispensados definitivamente de qualquer serviço militar).",
    "fundamentacaoLegal": "Art. 3º da Lei Estadual nº 6.783/1974.",
    "hint": "Ativa vs. Inatividade (Reserva Remunerada ou Reformados)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Reserva pode ser convocada; Reformado está dispensado definitivamente.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 3º divide os policiais militares em: I - Na ativa (de carreira, incluídos voluntariamente e alunos de órgãos de formação de policiais militares); II - Na inatividade: a) na reserva remunerada (percebem remuneração e estão sujeitos à prestação de serviço ativo); b) reformados (dispensados definitivamente de qualquer serviço militar)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_003",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Carreira Policial-Militar (Art. 5º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q003] O art. 5º do Estatuto dos Policiais Militares de PE estabelece que a carreira policial-militar é caracterizada por atividade continuada e inteiramente devotada às finalidades da Corporação, sendo denominada:",
    "options": [
      "Atividade policial-militar, privativa do pessoal da ativa.",
      "Função comissionada transitória extensível aos servidores civis da administração pública.",
      "Emprego público de regime celetista sujeito à convenção coletiva de trabalho.",
      "Cargo técnico facultativo sem subordinação disciplinar a regulamentos de caserna.",
      "Exercício de poder de polícia meramente consultivo junto aos conselhos tutelares."
    ],
    "correctIndex": 0,
    "explanation": "O art. 5º da Lei nº 6.783/74 afirma que 'A carreira policial-militar é privativa do pessoal da ativa. Inicia-se com o ingresso na Polícia Militar e obedece à sequência de graus hierárquicos'.",
    "fundamentacaoLegal": "Art. 5º da Lei Estadual nº 6.783/1974.",
    "hint": "A carreira policial-militar é PRIVATIVA do pessoal da ativa!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Carreira é exclusiva da ativa: militar na inatividade não faz carreira nova.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 5º da Lei nº 6.783/74 afirma que 'A carreira policial-militar é privativa do pessoal da ativa. Inicia-se com o ingresso na Polícia Militar e obedece à sequência de graus hierárquicos'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_004",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Ingresso na PMPE (Art. 10 e 11)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q004] O ingresso na Polícia Militar de Pernambuco, segundo o Estatuto e normas de regência, é facultado a todos os brasileiros, sem distinção de raça ou de crença religiosa:",
    "options": [
      "Por indicação discricionária do Secretário de Defesa Social, dispensado o certame público.",
      "Exclusivamente para cidadãos que tenham concluído o serviço militar obrigatório nas Forças Armadas.",
      "Mediante contrato temporário de terceirização com renovação bienal automática.",
      "Mediante concurso público de provas ou de provas e títulos, atendidos os requisitos de idade, idoneidade moral, higidez física e mental previstos em edital.",
      "Por transferência voluntária de guardas civis municipais da Região Metropolitana do Recife."
    ],
    "correctIndex": 3,
    "explanation": "O art. 10 e 11 do Estatuto da PMPE, em perfeita harmonia com o art. 37, II da CF/88, estabelece que o ingresso nas fileiras da Corporação depende de aprovação em concurso público com avaliação de saúde, aptidão física, psicológica e investigação social.",
    "fundamentacaoLegal": "Arts. 10 e 11 da Lei Estadual nº 6.783/1974 e Art. 37, II da CF/88.",
    "hint": "Ingresso sempre mediante Concurso Público com requisitos legais objetivos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Para entrar na PMPE: concurso público com todas as etapas eliminatórias.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 10 e 11 do Estatuto da PMPE, em perfeita harmonia com o art. 37, II da CF/88, estabelece que o ingresso nas fileiras da Corporação depende de aprovação em concurso público com avaliação de saúde, aptidão física, psicológica e investigação social.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_005",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Posto e Graduação (Arts. 14 e 15)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q005] Nos exatos termos dos artigos 14 e 15 da Lei Estadual nº 6.783/1974, a correta distinção entre 'Posto' e 'Graduação' na PMPE reside no fato de que:",
    "options": [
      "Posto é o grau hierárquico do oficial, conferido por ato do Governador do Estado e confirmado em Carta Patente; Graduação é o grau hierárquico da praça, conferido pelo Comandante-Geral da Corporação.",
      "Posto é o grau da praça conferido pelo Secretário de Defesa Social; Graduação é o grau do oficial outorgado pelo Presidente da Assembleia Legislativa.",
      "Ambos são outorgados pelo Comandante do Batalhão de Choque mediante portaria interna simples.",
      "Posto é exclusivo dos cadetes da Academia; Graduação é privativa dos coronéis com mais de 30 anos.",
      "Não há distinção estatutária, sendo ambos sinônimos intercambiáveis no vocabulário militar estadual."
    ],
    "correctIndex": 0,
    "explanation": "Art. 14: 'Posto é o grau hierárquico do oficial, conferido por ato do Governador do Estado e confirmado em Carta Patente ou Folhinha de Assentamento'. Art. 15: 'Graduação é o grau hierárquico da praça, conferido pelo Comandante-Geral da Polícia Militar'.",
    "fundamentacaoLegal": "Arts. 14 e 15 da Lei Estadual nº 6.783/1974.",
    "hint": "POSTO = Oficial (Governador / Carta Patente). GRADUAÇÃO = Praça (Comandante-Geral)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Oficial tem POSTO dado pelo Governador. Praça tem GRADUAÇÃO dada pelo Comandante-Geral.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Art. 14: 'Posto é o grau hierárquico do oficial, conferido por ato do Governador do Estado e confirmado em Carta Patente ou Folhinha de Assentamento'. Art. 15: 'Graduação é o grau hierárquico da praça, conferido pelo Comandante-Geral da Polícia Militar'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_006",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Círculos Hierárquicos (Art. 16)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q006] Os círculos hierárquicos e a escala hierárquica na Polícia Militar de Pernambuco têm por finalidade desenvolver o espírito de camaradagem em ambiente de estima e confiança. O círculo de Oficiais Superiores da PMPE é composto por:",
    "options": [
      "Capitão, Primeiro-Tenente e Segundo-Tenente.",
      "Coronel, Tenente-Coronel e Major.",
      "Aspirante-a-Oficial, Aluno-Oficial e Subtenente.",
      "Primeiro-Sargento, Segundo-Sargento e Terceiro-Sargento.",
      "Cabo e Soldado de primeira e segunda classe."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o quadro do art. 16 da Lei nº 6.783/74: 1) Oficiais Superiores: Coronel, Tenente-Coronel e Major; 2) Oficiais Intermediários: Capitão; 3) Oficiais Subalternos: Primeiro-Tenente e Segundo-Tenente; 4) Praças Especiais: Aspirante-a-Oficial e Aluno-Oficial; 5) Praças: Subtenente, Sargentos, Cabo e Soldado.",
    "fundamentacaoLegal": "Art. 16 da Lei Estadual nº 6.783/1974.",
    "hint": "Oficiais Superiores: Coronel, Tenente-Coronel e Major!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Superiores = Major, Ten-Cel e Coronel. Intermediário = Capitão. Subalternos = Tenentes.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. Conforme o quadro do art. 16 da Lei nº 6.783/74: 1) Oficiais Superiores: Coronel, Tenente-Coronel e Major; 2) Oficiais Intermediários: Capitão; 3) Oficiais Subalternos: Primeiro-Tenente e Segundo-Tenente; 4) Praças Especiais: Aspirante-a-Oficial e Aluno-Oficial; 5) Praças: Subtenente, Sargentos, Cabo e Soldado.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_007",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Precedência Hierárquica (Art. 17)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q007] Em igualdade de posto ou de graduação, a precedência hierárquica entre policiais militares da ativa, da mesma corporação, é assegurada:",
    "options": [
      "Pela idade civil do militar mais jovem que possuir maior número de condecorações operacionais.",
      "Pela ordem alfabética dos nomes constantes do quadro de acesso de promoções extraordinárias.",
      "Pela nota obtida na prova de tiro defensivo no curso de formação básico.",
      "Pelo município de naturalidade do militar, tendo precedência os nascidos no Recife.",
      "Pela antiguidade no posto ou na graduação, salvo quando ocorrer precedência funcional estabelecida em lei ou regulamento."
    ],
    "correctIndex": 4,
    "explanation": "O art. 17 da Lei nº 6.783/74 dispõe: 'A precedência entre policiais-militares da ativa, do mesmo grau hierárquico, é assegurada pela antiguidade no posto ou na graduação, salvo nos casos de precedência funcional estabelecida em lei ou regulamento'.",
    "fundamentacaoLegal": "Art. 17 da Lei Estadual nº 6.783/1974.",
    "hint": "Mesmo grau hierárquico: quem tem maior antiguidade no posto/graduação tem a precedência!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Empate no posto: manda quem é mais antigo na data da promoção.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 17 da Lei nº 6.783/74 dispõe: 'A precedência entre policiais-militares da ativa, do mesmo grau hierárquico, é assegurada pela antiguidade no posto ou na graduação, salvo nos casos de precedência funcional estabelecida em lei ou regulamento'."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_008",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Precedência Ativa vs. Inatividade (Art. 18)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q008] Em igualdade de posto ou graduação, os policiais militares em serviço ativo:",
    "options": [
      "Têm subordinação direta aos policiais reformados com mais de 40 anos de praça.",
      "Devem ceder o comando operacional das viaturas aos veteranos da reserva convocados.",
      "Possuem equivalência funcional sem qualquer distinção de precedência em solenidades.",
      "Ficam impedidos de aplicar punições disciplinares a subordinados da ativa.",
      "Têm precedência sobre os da inatividade (reserva remunerada ou reformados)."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o art. 18 da Lei nº 6.783/74: 'Em igualdade de posto ou graduação, os policiais-militares em atividade têm precedência sobre os da inatividade'. A tropa da ativa sempre comanda e precede a da inatividade.",
    "fundamentacaoLegal": "Art. 18 da Lei Estadual nº 6.783/1974.",
    "hint": "O policial militar DA ATIVA sempre tem precedência sobre o militar da inatividade de mesmo posto/graduação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ativa vence a Inatividade em caso de mesmo posto ou graduação.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. Conforme o art. 18 da Lei nº 6.783/74: 'Em igualdade de posto ou graduação, os policiais-militares em atividade têm precedência sobre os da inatividade'. A tropa da ativa sempre comanda e precede a da inatividade."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_009",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Cargo Policial-Militar (Arts. 20 e 21)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q009] O cargo policial-militar, segundo os arts. 20 e 21 da Lei nº 6.783/1974, é caracterizado por:",
    "options": [
      "Ser qualquer tarefa de voluntariado cívico sem previsão na lei de fixação de efetivo da corporação.",
      "Ser um conjunto de atribuições, deveres e responsabilidades cometidos a um policial-militar em serviço ativo, criado por lei, com denominação própria e número certo no Quadro de Organização da Corporação.",
      "Uma delegação temporária de autoridade conferida privativamente por juiz de direito estadual.",
      "Um contrato bilateral de prestação de serviços de segurança privada patrimonial comissionada.",
      "Um encargo perpétuo e intransferível que não pode ser desocupado mesmo por aposentadoria."
    ],
    "correctIndex": 1,
    "explanation": "O art. 20 da Lei nº 6.783/74 conceitua o cargo policial-militar como 'um conjunto de atribuições, deveres e responsabilidades cometidos a um policial-militar em serviço ativo'. E o art. 21 reforça que são criados por lei, com denominação própria e número certo no Quadro de Organização (QO).",
    "fundamentacaoLegal": "Arts. 20 e 21 da Lei Estadual nº 6.783/1974.",
    "hint": "Cargo policial-militar é criado por lei, tem denominação própria e consta no Quadro de Organização!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Cargo militar é legal, estruturado e com número certo no Quadro da PMPE.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 20 da Lei nº 6.783/74 conceitua o cargo policial-militar como 'um conjunto de atribuições, deveres e responsabilidades cometidos a um policial-militar em serviço ativo'. E o art. 21 reforça que são criados por lei, com denominação própria e número certo no Quadro de Organização (QO).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_010",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Cargo Vago (Art. 22)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q010] Considera-se vago o cargo policial-militar, consoante o art. 22 da Lei Estadual nº 6.783/1974, desde a sua criação até que um policial-militar tome posse ou desde o momento em que o militar:",
    "options": [
      "Seja escalado para serviço extraordinário de policiamento em eventos carnavalescos.",
      "Usufrua do período regulamentar de 30 dias de férias anuais remuneradas.",
      "Dele seja exonerado, dispensado, ou fique agregado, extraviado ou venha a falecer.",
      "Seja promovido ao posto imediato permanecendo lotado na mesma seção administrativa.",
      "Apresente atestado médico de dispensa de esforço físico por prazo inferior a 5 dias."
    ],
    "correctIndex": 2,
    "explanation": "O art. 22 da Lei nº 6.783/74 estabelece: 'O cargo policial-militar é considerado vago: I - a partir de sua criação e até que um policial-militar tome posse; II - desde o momento em que o policial-militar for dele exonerado, dispensado, ou considerado agregado, extraviado ou falecido'. Férias e dispensas curtas não tornam o cargo vago.",
    "fundamentacaoLegal": "Art. 22 da Lei Estadual nº 6.783/1974.",
    "hint": "Cargo vago: exonerado, dispensado, agregado, extraviado ou falecido!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Férias não vaga cargo; agregação e exoneração tornam o cargo vago.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 22 da Lei nº 6.783/74 estabelece: 'O cargo policial-militar é considerado vago: I - a partir de sua criação e até que um policial-militar tome posse; II - desde o momento em que o policial-militar for dele exonerado, dispensado, ou considerado agregado, extraviado ou falecido'. Férias e dispensas curtas não tornam o cargo vago.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_011",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Função Policial-Militar (Art. 23)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q011] A função policial-militar, definida no art. 23 da Lei Estadual nº 6.783/1974, consiste no:",
    "options": [
      "Exercício das obrigações inerentes ao cargo policial-militar.",
      "Vínculo societário com empresas privadas prestadoras de consultoria de segurança.",
      "Recebimento de gratificações por produtividade pagas por sindicatos de classe.",
      "Mandato eletivo exercido perante a Câmara Municipal de Vereadores de Olinda.",
      "Desempenho de atividades exclusivamente periciais e de necropsia médico-legal."
    ],
    "correctIndex": 0,
    "explanation": "O art. 23 da Lei nº 6.783/74 define textualmente: 'Função policial-militar é o exercício das obrigações inerentes ao cargo policial-militar'. Cargo é o lugar no organograma; função é o exercício prático das obrigações dele.",
    "fundamentacaoLegal": "Art. 23 da Lei Estadual nº 6.783/1974.",
    "hint": "Função policial-militar = EXERCÍCIO das obrigações inerentes ao cargo!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Cargo é a vaga; Função é o exercício do trabalho militar.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 23 da Lei nº 6.783/74 define textualmente: 'Função policial-militar é o exercício das obrigações inerentes ao cargo policial-militar'. Cargo é o lugar no organograma; função é o exercício prático das obrigações dele.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_012",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Hierarquia e Disciplina (Art. 13)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q012] O art. 13 do Estatuto dos Policiais Militares de PE define os dois pilares estruturantes da PMPE: 'A hierarquia e a disciplina são as bases institucionais da Polícia Militar'. A disciplina policial-militar é definida como:",
    "options": [
      "A obediência cega a qualquer ordem verbal, mesmo que flagrantemente criminosa ou desumana.",
      "A faculdade discricionária de cumprir escalas de serviço conforme conveniência pessoal.",
      "A subordinação exclusiva das praças aos interesses dos sindicatos de segurança pública.",
      "O direito de greve e de filiação partidária irrestrita para cabos e soldados da ativa.",
      "A rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e coordenam seu funcionamento regular e harmônico."
    ],
    "correctIndex": 4,
    "explanation": "O art. 13, § 2º da Lei nº 6.783/74 conceitua a disciplina como 'a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e coordenam seu funcionamento regular e harmônico, traduzindo-se pelo perfeito cumprimento do dever por parte de todos e de cada um dos componentes desse organismo'. Ordem manifestamente ilegal NÃO deve ser cumprida.",
    "fundamentacaoLegal": "Art. 13, § 2º da Lei Estadual nº 6.783/1974.",
    "hint": "Disciplina = Rigorosa observância e acatamento INTEGRAL das leis e regulamentos!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Bases da PMPE: Hierarquia (graus de comando) e Disciplina (acatamento das leis).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 13, § 2º da Lei nº 6.783/74 conceitua a disciplina como 'a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e coordenam seu funcionamento regular e harmônico, traduzindo-se pelo perfeito cumprimento do dever por parte de todos e de cada um dos componentes desse organismo'. Ordem manifestamente ilegal NÃO deve ser cumprida."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_013",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Ordens Manifestamente Ilegais",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q013] No âmbito do ordenamento militar estadual e do Código Penal Militar, quando a ordem recebida de um superior hierárquico militar for manifestamente criminosa ou ilegal:",
    "options": [
      "O subordinado é obrigado a cumpri-la prontamente, cabendo toda e qualquer responsabilidade ao superior.",
      "O subordinado não deve cumpri-la, pois a obediência hierárquica não acoberta crimes manifestos, respondendo ambos penalmente se a ordem for executada.",
      "O subordinado deve executá-la mediante assinatura de termo de isenção de culpa em cartório.",
      "A ordem manifesta torna-se lícita automaticamente pela força da hierarquia militar estadual.",
      "O cumprimento da ordem ilícita enseja promoção imediata por bravura do executante."
    ],
    "correctIndex": 1,
    "explanation": "O art. 38, § 2º do Código Penal Militar e a doutrina militar pacífica assentam que a obediência hierárquica é excludente de culpabilidade apenas para ordens não manifestamente ilegais. Sendo a ordem MANIFESTAMENTE ilegal/criminosa, o subordinado tem o dever de recusá-la, respondendo como coautor se a cumprir.",
    "fundamentacaoLegal": "Art. 38, § 2º do CPM e Princípios do Estatuto da PMPE.",
    "hint": "Ordem MANIFESTAMENTE criminosa: NÃO PODE CUMPRIR! Se cumprir, ambos respondem.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ordem absurda/criminosa não se cumpre: militar não é robô de cometer crime.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 38, § 2º do Código Penal Militar e a doutrina militar pacífica assentam que a obediência hierárquica é excludente de culpabilidade apenas para ordens não manifestamente ilegais. Sendo a ordem MANIFESTAMENTE ilegal/criminosa, o subordinado tem o dever de recusá-la, respondendo como coautor se a cumprir.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_014",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Compromisso do Policial Militar (Art. 30)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q014] O cidadão que ingressa na Polícia Militar de Pernambuco presta solene compromisso de honra, no qual afirma:",
    "options": [
      "Sua subordinação política aos dirigentes partidários que integram a base do governo eleito.",
      "Seu direito irretratável de remuneração variável vinculada à apreensão de armamentos pesados.",
      "A prioridade da proteção de seus familiares sobre a integridade física de qualquer cidadão civil.",
      "O direito de recusa de serviço operacional em locais de risco conflagrado pelo tráfico.",
      "Sua consciente dedicação ao serviço policial-militar, à preservação da ordem pública e à segurança da comunidade, mesmo com o sacrifício da própria vida."
    ],
    "correctIndex": 4,
    "explanation": "O art. 30 da Lei Estadual nº 6.783/74 prescreve que todo cidadão, após ingressar na Polícia Militar, prestará compromisso de honra com caráter solene e afirmação de consciente dedicação ao serviço policial-militar e à segurança da coletividade, 'mesmo com o sacrifício da própria vida'.",
    "fundamentacaoLegal": "Art. 30 da Lei Estadual nº 6.783/1974.",
    "hint": "Compromisso solene: dedicação à segurança da comunidade, 'mesmo com o sacrifício da própria vida'!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "O juramento da farda: defender a sociedade mesmo com o sacrifício da própria vida.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 30 da Lei Estadual nº 6.783/74 prescreve que todo cidadão, após ingressar na Polícia Militar, prestará compromisso de honra com caráter solene e afirmação de consciente dedicação ao serviço policial-militar e à segurança da coletividade, 'mesmo com o sacrifício da própria vida'."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_015",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Manifestações Coletivas e Reivindicações (Art. 31 e Art. 42 da CF)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q015] Conforme o art. 31 do Estatuto dos Policiais Militares de PE e o art. 42, § 1º c/c art. 142, § 3º, IV da Constituição Federal, ao militar estadual são expressamente proibidos:",
    "options": [
      "O casamento com pessoas de outras corporações militares do Nordeste brasileiro.",
      "O voto facultativo ou obrigatório em eleições para Presidente da República e Governador.",
      "A sindicalização e a greve, bem como manifestações coletivas sobre atos de superiores ou de caráter reivindicatório.",
      "A aquisição de bens imóveis financiados por instituições bancárias públicas estaduais.",
      "A realização de cursos de graduação de nível superior em universidades públicas federais."
    ],
    "correctIndex": 2,
    "explanation": "O art. 142, § 3º, IV da CF/88 (aplicável aos militares estaduais pelo art. 42, § 1º) e o art. 31 do Estatuto vedam terminantemente a greve e a sindicalização aos policiais militares. São igualmente proibidas manifestações coletivas sobre atos de superiores ou com cunho político-reivindicatório de classe.",
    "fundamentacaoLegal": "Art. 31 da Lei Estadual nº 6.783/74 e Art. 142, § 3º, IV da CF/88.",
    "hint": "Militar estadual NÃO PODE FAZER GREVE NEM SE SINDICALIZAR!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Farda não faz greve e não tem sindicato (vedação constitucional absoluta).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 142, § 3º, IV da CF/88 (aplicável aos militares estaduais pelo art. 42, § 1º) e o art. 31 do Estatuto vedam terminantemente a greve e a sindicalização aos policiais militares. São igualmente proibidas manifestações coletivas sobre atos de superiores ou com cunho político-reivindicatório de classe.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_016",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Filiação Partidária do Militar da Ativa",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q016] No que concerne aos direitos políticos do policial militar em serviço ativo, nos termos do art. 142, § 3º, V da Constituição Federal c/c o Estatuto da PMPE:",
    "options": [
      "É livre a filiação partidária a qualquer partido político registrado no TSE desde a conclusão do curso de formação.",
      "O soldado da ativa pode exercer cargo de direção partidária executiva aos finais de semana.",
      "O militar em serviço ativo não pode estar filiado a partidos políticos enquanto permanecer na ativa.",
      "Apenas os Oficiais do círculo superior podem se filiar a agremiações político-partidárias.",
      "A filiação partidária é requisito para a concessão de licença especial com remuneração integral."
    ],
    "correctIndex": 2,
    "explanation": "O art. 142, § 3º, V da CF/88 determina expressamente: 'O militar, enquanto em serviço ativo, NÃO PODE ESTAR FILIADO A PARTIDOS POLÍTICOS'. A filiação partidária é incompatível com a neutralidade do militar em serviço ativo.",
    "fundamentacaoLegal": "Art. 142, § 3º, inciso V da CF/88 c/c Lei Estadual nº 6.783/74.",
    "hint": "Militar da ativa NÃO PODE ter filiação partidária!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Enquanto estiver fardado na ativa: zero filiação a partidos políticos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 142, § 3º, V da CF/88 determina expressamente: 'O militar, enquanto em serviço ativo, NÃO PODE ESTAR FILIADO A PARTIDOS POLÍTICOS'. A filiação partidária é incompatível com a neutralidade do militar em serviço ativo.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_017",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Militar Candidato a Cargo Eletivo",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q017] O policial militar da ativa que contar com MENOS DE 10 (dez) anos de serviço e registrar candidatura a cargo político eletivo:",
    "options": [
      "Será agregado pelo prazo de 4 anos e retornará à corporação com promoção por bravura.",
      "Continuará exercendo o policiamento ostensivo durante o horário da propaganda eleitoral gratuita.",
      "Passará automaticamente para a reserva remunerada com proventos integrais do soldo.",
      "Terá seu alistamento cancelado compulsoriamente pela Junta de Alistamento Militar Estadual.",
      "Deverá afastar-se definitivamente da atividade policial-militar, sendo demitido ou licenciado ex officio sem remuneração."
    ],
    "correctIndex": 4,
    "explanation": "Nos termos do art. 14, § 8º, I da CF/88 e do Estatuto da PMPE: se o militar tiver MENOS de 10 anos de serviço, deverá afastar-se da atividade (demissão/licenciamento). Se tiver MAIS de 10 anos de serviço: será agregado e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade (reserva remunerada proporcional).",
    "fundamentacaoLegal": "Art. 14, § 8º, incisos I e II da CF/88 e Lei Estadual nº 6.783/74.",
    "hint": "Menos de 10 anos: afasta-se definitivamente (rua). Mais de 10 anos: agrega e, se eleito, vai para a reserva!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Menos de 10 anos de farda quer ser político = pede pra sair da PMPE.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. Nos termos do art. 14, § 8º, I da CF/88 e do Estatuto da PMPE: se o militar tiver MENOS de 10 anos de serviço, deverá afastar-se da atividade (demissão/licenciamento). Se tiver MAIS de 10 anos de serviço: será agregado e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade (reserva remunerada proporcional)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_018",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Participação em Empresas Privadas (Art. 32)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q018] Conforme o art. 32 da Lei Estadual nº 6.783/1974, aos policiais militares da ativa é expressamente vedado comerciar ou tomar parte na administração ou gerência de sociedade ou dela ser sócio ou participar, EXCETO:",
    "options": [
      "Como proprietário individual de microempresa de revenda de produtos de segurança armada.",
      "Como diretor-presidente de cooperativa de transporte clandestino intermunicipal.",
      "Como acionista ou cotista em sociedade anônima ou por quotas de responsabilidade limitada, desde que não exerça função de gerência ou administração.",
      "Como administrador judicial em processo de falência de empresas estaduais parceiras.",
      "Como gerente financeiro de shopping center local durante as folgas de escala militar."
    ],
    "correctIndex": 2,
    "explanation": "O art. 32 da Lei nº 6.783/74 proíbe ao policial-militar da ativa o exercício do comércio ou gerência de sociedades. Permite-se apenas participar do capital como ACIONISTA ou COTISTA (sócio-investidor), sendo terminantemente proibido exercer funções de direção, administração ou gerência.",
    "fundamentacaoLegal": "Art. 32 da Lei Estadual nº 6.783/1974.",
    "hint": "Policial militar pode ser acionista/cotista (investidor), mas NUNCA administrador ou gerente!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Pode ter cotas e ações; não pode assinar pela empresa nem ser gerente.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 32 da Lei nº 6.783/74 proíbe ao policial-militar da ativa o exercício do comércio ou gerência de sociedades. Permite-se apenas participar do capital como ACIONISTA ou COTISTA (sócio-investidor), sendo terminantemente proibido exercer funções de direção, administração ou gerência.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_019",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Ética Policial-Militar (Art. 28)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q019] O sentimento do dever, o pundonor policial-militar e o decoro da classe impõem, a cada um dos integrantes da Polícia Militar de PE, conduta moral e profissional irrepreensíveis. São preceitos da ética policial-militar (art. 28):",
    "options": [
      "Amar a verdade e a responsabilidade como fundamento da dignidade pessoal; exercer com autoridade, eficiência e probidade as funções que lhe couberem; e respeitar a dignidade da pessoa humana.",
      "Privilegiar o atendimento a amigos pessoais em detrimento de chamadas de emergência pelo 190.",
      "Reter quantias apreendidas em operações para a manutenção física da sede do batalhão.",
      "Recusar assistência médica a pessoas presas em flagrante que tenham reagido à abordagem.",
      "Divulgar em redes sociais pessoais informações sigilosas de investigações em andamento."
    ],
    "correctIndex": 0,
    "explanation": "O art. 28 da Lei nº 6.783/74 elenca os deveres éticos: amar a verdade, exercer com probidade e eficiência as funções, respeitar a dignidade humana, zelar pelo preparo moral e profissional, cumprir e fazer cumprir as leis e agir com discrição e urbanidade.",
    "fundamentacaoLegal": "Art. 28 da Lei Estadual nº 6.783/1974.",
    "hint": "Preceitos éticos: verdade, responsabilidade, dignidade pessoal, eficiência, probidade e respeito aos direitos humanos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ética do PM: amar a verdade, agir com probidade e respeitar os direitos fundamentais.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 28 da Lei nº 6.783/74 elenca os deveres éticos: amar a verdade, exercer com probidade e eficiência as funções, respeitar a dignidade humana, zelar pelo preparo moral e profissional, cumprir e fazer cumprir as leis e agir com discrição e urbanidade.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_020",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Punições Disciplinares (Art. 43 e 44)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q020] As penas disciplinares de detenção ou prisão militar não podem ultrapassar, conforme os limites consagrados pelo Estatuto da PMPE (art. 44) e regulamentos disciplinares:",
    "options": [
      "O prazo máximo de 30 (trinta) dias consecutivos.",
      "O prazo improrrogável de 60 (sessenta) dias em regime fechado.",
      "O período de 90 dias com desconto salarial obrigatório.",
      "O prazo de 1 ano com suspensão temporária do soldo militar.",
      "O período correspondente a um ciclo de promoções extraordinárias."
    ],
    "correctIndex": 0,
    "explanation": "O art. 44 da Lei Estadual nº 6.783/74 dispõe que as penas disciplinares de detenção ou prisão não podem ultrapassar 30 (trinta) dias. Nota: com o advento da Lei Federal nº 13.967/2019, as prisões administrativas disciplinares foram vedadas para as polícias e bombeiros militares nos códigos disciplinares estaduais.",
    "fundamentacaoLegal": "Art. 44 da Lei Estadual nº 6.783/1974.",
    "hint": "Limite máximo histórico do Estatuto para punição disciplinar: 30 DIAS!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Limite máximo da prisão disciplinar no texto do estatuto: 30 dias.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 44 da Lei Estadual nº 6.783/74 dispõe que as penas disciplinares de detenção ou prisão não podem ultrapassar 30 (trinta) dias. Nota: com o advento da Lei Federal nº 13.967/2019, as prisões administrativas disciplinares foram vedadas para as polícias e bombeiros militares nos códigos disciplinares estaduais.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_021",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Conselho de Justificação (Art. 47)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q021] O Conselho de Justificação, previsto no art. 47 da Lei Estadual nº 6.783/1974, é destinado a julgar da incapacidade para permanecer na ativa de:",
    "options": [
      "Praças com menos de 3 anos de efetivo serviço no período de estágio probatório.",
      "Soldados e Cabos que tenham cometido faltas disciplinares de trânsito.",
      "Oficiais da Polícia Militar (Oficiais Superiores, Intermediários e Subalternos), assegurada a ampla defesa e o contraditório.",
      "Alunos do Curso de Formação de Soldados desligados por insuficiência técnica.",
      "Servidores civis terceirizados lotados na Diretoria de Apoio Logístico."
    ],
    "correctIndex": 2,
    "explanation": "O art. 47 da Lei nº 6.783/74 estabelece: 'O Oficial presumivelmente incapaz de permanecer como policial-militar da ativa será submetido a Conselho de Justificação'. O Conselho de Justificação julga OFICIAIS; a decisão final sobre a perda do posto e da patente cabe ao Tribunal de Justiça de PE (art. 125, § 4º da CF/88).",
    "fundamentacaoLegal": "Art. 47 da Lei Estadual nº 6.783/1974 e Art. 125, § 4º da CF/88.",
    "hint": "CONSELHO DE JUSTIFICAÇÃO = É para OFICIAL!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Oficial se 'Justifica' (Conselho de Justificação). Praça sofre 'Disciplina' (Conselho de Disciplina).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 47 da Lei nº 6.783/74 estabelece: 'O Oficial presumivelmente incapaz de permanecer como policial-militar da ativa será submetido a Conselho de Justificação'. O Conselho de Justificação julga OFICIAIS; a decisão final sobre a perda do posto e da patente cabe ao Tribunal de Justiça de PE (art. 125, § 4º da CF/88).",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_022",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Conselho de Disciplina (Art. 48)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q022] O Conselho de Disciplina, disciplinado no art. 48 da Lei Estadual nº 6.783/1974, é destinado a avaliar a incapacidade de permanecer no serviço ativo de:",
    "options": [
      "Oficiais de patente de Coronel que tenham completado o tempo limite de comando.",
      "Capitães da ativa com processos por dívidas cíveis no Juizado Especial.",
      "Aspirante-a-Oficial e Praças com estabilidade assegurada (que possuam dez ou mais anos de efetivo serviço).",
      "Magistrados integrantes da Auditoria de Justiça Militar de Pernambuco.",
      "Dependentes previdenciários de policiais militares da reserva remunerada."
    ],
    "correctIndex": 2,
    "explanation": "O art. 48 da Lei nº 6.783/74 prevê que o Conselho de Disciplina é destinado a julgar a capacidade de permanecer na ativa dos Aspirantes-a-Oficial e das Praças com estabilidade assegurada (10 ou mais anos de serviço). A decisão do Conselho de Disciplina cabe ao Comandante-Geral da PMPE.",
    "fundamentacaoLegal": "Art. 48 da Lei Estadual nº 6.783/1974.",
    "hint": "CONSELHO DE DISCIPLINA = Aspirante-a-Oficial e Praças com estabilidade (10 anos ou mais)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Praça estável e Aspirante vão para o Conselho de Disciplina; quem decide a expulsão é o Comandante-Geral.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 48 da Lei nº 6.783/74 prevê que o Conselho de Disciplina é destinado a julgar a capacidade de permanecer na ativa dos Aspirantes-a-Oficial e das Praças com estabilidade assegurada (10 ou mais anos de serviço). A decisão do Conselho de Disciplina cabe ao Comandante-Geral da PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_023",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Perda do Posto e da Patente do Oficial",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q023] Nos termos da Constituição Federal (art. 125, § 4º) e do Estatuto dos Policiais Militares de PE, o Oficial da Polícia Militar só perderá o posto e a patente se:",
    "options": [
      "For demitido sumariamente pelo Secretário de Defesa Social após abertura de sindicância interna.",
      "For julgado indigno do oficialato ou com ele incompatível, por decisão de Tribunal competente (Tribunal de Justiça de Pernambuco), em tempo de paz, ou de tribunal especial, em tempo de guerra.",
      "Receber duas punições disciplinares de repreensão escrita em seu assentamento.",
      "For reprovado no teste de aptidão física anual da Diretoria de Ensino da Corporação.",
      "Deixar de comparecer ao desfile de 7 de setembro por motivo de saúde familiar."
    ],
    "correctIndex": 1,
    "explanation": "O art. 125, § 4º da CF/88 e o art. 109 da Lei Estadual nº 6.783/74 consagram a garantia constitucional do oficial: o oficial só perde o posto e a patente por decisão do Tribunal competente (Tribunal de Justiça do Estado). Nem o Governador nem o Comandante-Geral podem, sozinhos, cassar o oficialato.",
    "fundamentacaoLegal": "Art. 125, § 4º da CF/88 e Lei Estadual nº 6.783/1974.",
    "hint": "Oficial só perde o posto e patente por DECISÃO DO TRIBUNAL DE JUSTIÇA (TJPE)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Oficial tem proteção de Carta Patente: só o Tribunal de Justiça pode tirar a patente dele.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 125, § 4º da CF/88 e o art. 109 da Lei Estadual nº 6.783/74 consagram a garantia constitucional do oficial: o oficial só perde o posto e a patente por decisão do Tribunal competente (Tribunal de Justiça do Estado). Nem o Governador nem o Comandante-Geral podem, sozinhos, cassar o oficialato.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_024",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Estabilidade da Praça (Art. 49, II, a)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q024] A praça da Polícia Militar de Pernambuco adquire estabilidade na carreira, conforme o art. 49, II, 'a' da Lei Estadual nº 6.783/1974, ao completar:",
    "options": [
      "3 (três) anos de estágio probatório ininterrupto no batalhão.",
      "10 (dez) anos de efetivo serviço prestado à Corporação.",
      "5 (cinco) anos de serviço sem nenhuma punição de detenção.",
      "2 (dois) anos contados da formatura do Curso de Formação de Soldados.",
      "15 (quinze) anos com averbação de tempo da iniciativa privada."
    ],
    "correctIndex": 1,
    "explanation": "O art. 49, inciso II, alínea 'a' da Lei nº 6.783/74 prevê a estabilidade quando a praça contar com 10 (dez) anos ou mais de tempo de efetivo serviço. Atingidos os 10 anos, a praça só pode ser excluída a bem da disciplina mediante regular Conselho de Disciplina.",
    "fundamentacaoLegal": "Art. 49, inciso II, alínea 'a' da Lei Estadual nº 6.783/1974.",
    "hint": "Estabilidade da praça militar no Estatuto: 10 ANOS DE EFETIVO SERVIÇO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Praça militar estadual atinge a estabilidade com 10 anos de caserna.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 49, inciso II, alínea 'a' da Lei nº 6.783/74 prevê a estabilidade quando a praça contar com 10 (dez) anos ou mais de tempo de efetivo serviço. Atingidos os 10 anos, a praça só pode ser excluída a bem da disciplina mediante regular Conselho de Disciplina.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_025",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Férias Regulamentares (Art. 62)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q025] Quanto ao direito às férias anuais remuneradas assegurado aos policiais militares de Pernambuco no art. 62 da Lei nº 6.783/1974, assinale a afirmativa correta:",
    "options": [
      "As férias são de concessão obrigatória anual, com duração de 30 (trinta) dias consecutivos, e somente podem ser interrompidas por motivo de calamidade pública, grave perturbação da ordem ou convocação para a mobilização.",
      "As férias têm duração de 45 dias para soldados e de 60 dias para oficiais superiores.",
      "O policial pode renunciar expressamente às férias para vendê-las integralmente à Corporação todos os anos.",
      "A suspensão das férias pode ser determinada por mera vontade discricionária do sargento de dia.",
      "O militar que estiver em cumprimento de prisão disciplinar adquire o direito a férias em dobro."
    ],
    "correctIndex": 0,
    "explanation": "O art. 62 da Lei nº 6.783/74 estabelece que as férias anuais têm duração de 30 dias consecutivos. O § 3º determina que a interrupção das férias somente poderá ocorrer por motivo de: calamidade pública, comoção interna, convocação para mobilização ou necessidade imperativa da segurança pública decretada pela autoridade competente.",
    "fundamentacaoLegal": "Art. 62, caput e § 3º da Lei Estadual nº 6.783/1974.",
    "hint": "Férias anuais: 30 dias consecutivos! Interrupção só por calamidade, mobilização ou grave necessidade da ordem pública.",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Férias do PM: 30 dias. Interrupção só em caso gravíssimo de segurança ou calamidade.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 62 da Lei nº 6.783/74 estabelece que as férias anuais têm duração de 30 dias consecutivos. O § 3º determina que a interrupção das férias somente poderá ocorrer por motivo de: calamidade pública, comoção interna, convocação para mobilização ou necessidade imperativa da segurança pública decretada pela autoridade competente.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_026",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Licença Especial (Art. 66)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q026] A Licença Especial (art. 66 da Lei Estadual nº 6.783/1974) é a autorização para o afastamento total do serviço concedida ao policial militar com a remuneração integral:",
    "options": [
      "Pelo período de 6 meses para cada biênio trabalhado no interior de Pernambuco.",
      "Pelo período de 1 ano concedida compulsoriamente a todos os cabos recém-promovidos.",
      "Apenas com perda de 50% do soldo militar básico e das vantagens pecuniárias.",
      "Pelo período de 3 (três) meses, para cada decênio (10 anos) de efetivo serviço prestado à Corporação, sem que haja desconto em suas promoções.",
      "Sem remuneração e com interrupção da contagem de tempo de serviço militar."
    ],
    "correctIndex": 3,
    "explanation": "O art. 66 da Lei nº 6.783/74 prevê a licença especial: 3 (três) meses de afastamento com remuneração integral para cada 10 (dez) anos de tempo de efetivo serviço, sem prejuízo de sua contagem para a inatividade e sem perda de remuneração.",
    "fundamentacaoLegal": "Art. 66 da Lei Estadual nº 6.783/1974.",
    "hint": "Licença Especial = 3 MESES a cada 10 ANOS de efetivo serviço!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Licença especial: 3 meses a cada 10 anos de farda (remuneração 100% integral).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 66 da Lei nº 6.783/74 prevê a licença especial: 3 (três) meses de afastamento com remuneração integral para cada 10 (dez) anos de tempo de efetivo serviço, sem prejuízo de sua contagem para a inatividade e sem perda de remuneração.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_027",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Licença para Tratar de Interesse Particular (Art. 67)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q027] A Licença para Tratar de Interesse Particular (LTIP), regulada no art. 67 da Lei Estadual nº 6.783/1974, é concedida com prejuízo da remuneração e da contagem de tempo de serviço, exigindo que o policial militar:",
    "options": [
      "Esteja no primeiro ano de serviço militar ativo após o curso de formação.",
      "Comprove abertura de empresa de segurança armada privada com sede em Pernambuco.",
      "Conte com mais de 10 (dez) anos de efetivo serviço prestado à Corporação.",
      "Seja Oficial Superior ocupando cargo de comandante de batalhão especializado.",
      "Apresente laudo médico atestando invalidez permanente para o serviço ativo."
    ],
    "correctIndex": 2,
    "explanation": "O art. 67 da Lei nº 6.783/74 estabelece: 'A licença para tratar de interesse particular é a autorização para afastamento total do serviço, concedida ao policial-militar com mais de 10 (dez) anos de efetivo serviço, que a requerer com aquela finalidade'. É concedida SEM remuneração e com prejuízo da antiguidade.",
    "fundamentacaoLegal": "Art. 67 da Lei Estadual nº 6.783/1974.",
    "hint": "LTIP exige: MAIS DE 10 ANOS de efetivo serviço e é SEM REMUNERAÇÃO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "LTIP: precisa ter 10 anos de casa e não recebe um centavo de soldo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 67 da Lei nº 6.783/74 estabelece: 'A licença para tratar de interesse particular é a autorização para afastamento total do serviço, concedida ao policial-militar com mais de 10 (dez) anos de efetivo serviço, que a requerer com aquela finalidade'. É concedida SEM remuneração e com prejuízo da antiguidade.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_028",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Licença para Tratamento de Saúde de Dependente (Art. 68)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q028] A licença para tratamento de saúde de pessoa da família (LTSPF), prevista no art. 68 do Estatuto da PMPE, será concedida com remuneração integral até o prazo de:",
    "options": [
      "Até 1 (um) ano, após o que o policial militar será agregado e poderá ter redução proporcional de remuneração conforme a lei.",
      "Até 30 dias improrrogáveis, após os quais o militar será sumariamente reformado.",
      "Até 5 anos consecutivos sem qualquer inspeção pela Junta Militar de Saúde.",
      "Apenas com desconto imediato de 70% da remuneração no primeiro mês de afastamento.",
      "Sem remuneração em qualquer hipótese por se tratar de encargo puramente familiar."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 68 e art. 75, I, 'c' da Lei nº 6.783/74: a licença para acompanhar pessoa da família doente é concedida com remuneração, sendo que, ultrapassado 1 (um) ano contínuo, o policial militar é obrigatoriamente AGREGADO ao respectivo quadro.",
    "fundamentacaoLegal": "Art. 68 e Art. 75, I, 'c' da Lei Estadual nº 6.783/1974.",
    "hint": "Passou de 1 ano contínuo em licença de saúde de dependente = AGREGADO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Cuidar da família: até 1 ano tranquilo; passou de 1 ano, entra em agregação.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Conforme o art. 68 e art. 75, I, 'c' da Lei nº 6.783/74: a licença para acompanhar pessoa da família doente é concedida com remuneração, sendo que, ultrapassado 1 (um) ano contínuo, o policial militar é obrigatoriamente AGREGADO ao respectivo quadro.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_029",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Uso de Uniformes e Distintivos (Arts. 71 a 73)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q029] Os uniformes da Polícia Militar de Pernambuco, com seus distintivos, insígnias e emblemas, são privativos dos policiais militares e simbolizam a autoridade militar. Segundo o art. 73 do Estatuto:",
    "options": [
      "Qualquer cidadão civil pode vestir a farda militar em festas populares carnavalescas.",
      "É terminantemente proibido o uso de uniformes por pessoas civis ou organizações civis que guardem semelhança com os da PMPE de modo a induzir a erro ou confusão.",
      "As empresas privadas de vigilância patrimonial podem utilizar uniformes idênticos aos da PMPE.",
      "O militar da ativa pode autorizar amigos e parentes a utilizarem suas túnicas de gala.",
      "O uso de uniforme militar fora de serviço é expressamente proibido mesmo para oficiais."
    ],
    "correctIndex": 1,
    "explanation": "O art. 73 da Lei Estadual nº 6.783/74 veda a qualquer organização ou pessoa civil o uso de uniformes, distintivos, insígnias ou emblemas semelhantes aos da Polícia Militar que possam ensejar confusão pública. O art. 72 reforça a privaticidade dos uniformes e as honras militares inerentes.",
    "fundamentacaoLegal": "Arts. 71 a 73 da Lei Estadual nº 6.783/1974.",
    "hint": "Uniformes são PRIVATIVOS dos militares; é proibida semelhança que cause confusão!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Farda da PMPE é privativa e protegida por lei: civil não pode usar nem imitar.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 73 da Lei Estadual nº 6.783/74 veda a qualquer organização ou pessoa civil o uso de uniformes, distintivos, insígnias ou emblemas semelhantes aos da Polícia Militar que possam ensejar confusão pública. O art. 72 reforça a privaticidade dos uniformes e as honras militares inerentes.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_030",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Prisão de Policial Militar (Art. 70)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q030] Nos termos do art. 70 da Lei Estadual nº 6.783/1974 e da legislação processual aplicável, o policial militar da ativa, da reserva remunerada ou reformado, preso provisoriamente antes da condenação definitiva:",
    "options": [
      "Deverá ser encaminhado imediatamente a presídio de segurança máxima comum com presos civis condenados.",
      "Somente poderá ser recolhido a quartel ou a estabelecimento prisional militar, ficando sob custódia e responsabilidade da autoridade policial militar.",
      "Poderá ser colocado em liberdade sem fiança pelo guarda civil que efetuou a abordagem.",
      "Perde automaticamente todos os seus vencimentos funcionais antes do trânsito em julgado.",
      "Deverá cumprir prisão preventiva em sua residência particular sem monitoramento eletrônico."
    ],
    "correctIndex": 1,
    "explanation": "O art. 70 estabelece a prerrogativa: o policial-militar preso provisoriamente só poderá ficar recolhido em quartel ou prisão militar, sob custódia de autoridade militar. Apenas após condenação penal irrecorrível poderá ser transferido a presídio comum se perder a condição militar.",
    "fundamentacaoLegal": "Art. 70 da Lei Estadual nº 6.783/1974.",
    "hint": "Prisão provisória de PM: SOMENTE EM QUARTEL OU PRISÃO MILITAR!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Policial preso sem condenação definitiva fica em quartel militar, separado de presos civis.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 70 estabelece a prerrogativa: o policial-militar preso provisoriamente só poderá ficar recolhido em quartel ou prisão militar, sob custódia de autoridade militar. Apenas após condenação penal irrecorrível poderá ser transferido a presídio comum se perder a condição militar.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_031",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Foro Especial Militar (Art. 70, § 1º e Art. 125, § 4º da CF)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q031] A competência da Justiça Militar Estadual para processar e julgar os policiais militares de Pernambuco (art. 125, § 4º da CF/88):",
    "options": [
      "Julga todos os crimes cometidos por civis contra as sedes dos quartéis de polícia militar.",
      "Abrange os crimes militares definidos em lei e as ações judiciais contra atos disciplinares militares, ressalvada a competência do júri quando a vítima for civil nos crimes dolosos contra a vida.",
      "Abrange os crimes dolosos contra a vida de civis, que nunca vão a julgamento pelo Tribunal do Júri.",
      "Restringe-se unicamente ao julgamento de ações de divórcio e partilha de bens de militares estaduais.",
      "É subordinada diretamente ao Superior Tribunal Militar com sede no Distrito Federal."
    ],
    "correctIndex": 1,
    "explanation": "O art. 125, § 4º da CF/88 prevê: compete à Justiça Militar Estadual julgar militares estaduais nos crimes militares definidos em lei e ações contra atos disciplinares militares, cabendo ao TRIBUNAL DO JÚRI o julgamento de crime doloso contra a vida praticado contra civil.",
    "fundamentacaoLegal": "Art. 125, § 4º da CF/88 e Art. 70 da Lei nº 6.783/74.",
    "hint": "Crime doloso contra a vida praticado por militar contra civil VAI A JÚRI POPULAR!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Homicídio doloso de civil praticado por PM = Tribunal do Júri (Justiça Comum).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 125, § 4º da CF/88 prevê: compete à Justiça Militar Estadual julgar militares estaduais nos crimes militares definidos em lei e ações contra atos disciplinares militares, cabendo ao TRIBUNAL DO JÚRI o julgamento de crime doloso contra a vida praticado contra civil.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_032",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Conceito de Agregação (Art. 74)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q032] A 'Agregação', definida no art. 74 da Lei Estadual nº 6.783/1974, é a situação na qual o policial militar da ativa:",
    "options": [
      "É transferido compulsoriamente para o quadro de reservistas não remunerados das Forças Armadas.",
      "Deixa de ocupar vaga na escala hierárquica de seu quadro, nela permanecendo sem número.",
      "Perde em caráter definitivo todas as suas prerrogativas de porte de arma e honras militares.",
      "Passa a responder a inquérito policial militar como réu confesso de deserção qualificada.",
      "Recebe promoção ao posto máximo da corporação sem exigência de tempo mínimo de serviço."
    ],
    "correctIndex": 1,
    "explanation": "O art. 74 da Lei nº 6.783/74 dispõe textualmente: 'A agregação é a situação na qual o policial-militar da ativa deixa de ocupar vaga na escala hierárquica de seu quadro, nela permanecendo sem número'. O militar continua na ativa, mas seu cargo fica vago.",
    "fundamentacaoLegal": "Art. 74 da Lei Estadual nº 6.783/1974.",
    "hint": "Agregação: DEIXA DE OCUPAR VAGA NA ESCALA HIERÁRQUICA, ficando 'sem número'!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Militar agregado continua na ativa, mas não ocupa vaga: fica 'sem número' no quadro.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 74 da Lei nº 6.783/74 dispõe textualmente: 'A agregação é a situação na qual o policial-militar da ativa deixa de ocupar vaga na escala hierárquica de seu quadro, nela permanecendo sem número'. O militar continua na ativa, mas seu cargo fica vago.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_033",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Hipóteses de Agregação (Art. 75)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q033] Dentre as hipóteses legais previstas no art. 75 da Lei Estadual nº 6.783/1974, o policial militar da ativa será obrigatoriamente AGREGADO quando:",
    "options": [
      "Entrar em gozo de 30 dias de férias anuais regulares autorizadas pelo comando.",
      "Concluir o curso de especialização do BOPE com aproveitamento técnico superior a 90%.",
      "Participar de desfile comemorativo da Batalha dos Guararapes como porta-bandeira.",
      "For punido com repreensão disciplinar em boletim interno por atraso de 15 minutos.",
      "Houver ultrapassado 6 (seis) meses contínuos em Licença para Tratar de Interesse Particular (LTIP) ou ultrapassado 1 (um) ano contínuo em Licença para Tratamento de Saúde de Pessoa da Família (LTSPF)."
    ],
    "correctIndex": 4,
    "explanation": "O art. 75, I, 'b' e 'c' da Lei nº 6.783/74 fixa que será agregado o militar que: ultrapassar 6 meses contínuos em LTIP; ultrapassar 1 ano contínuo em licença de saúde de dependente (LTSPF); ultrapassar 2 anos em licença para tratamento de saúde própria (LTSP); ou for candidato a cargo eletivo (se com mais de 10 anos de serviço).",
    "fundamentacaoLegal": "Art. 75, inciso I, alíneas 'a', 'b', 'c' da Lei Estadual nº 6.783/1974.",
    "hint": "LTIP: agrega ao passar de 6 MESES. LTSPF (família): agrega ao passar de 1 ANO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Prazos de agregação: LTIP > 6 meses; LTSPF (família) > 1 ano; LTSP (própria) > 2 anos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 75, I, 'b' e 'c' da Lei nº 6.783/74 fixa que será agregado o militar que: ultrapassar 6 meses contínuos em LTIP; ultrapassar 1 ano contínuo em licença de saúde de dependente (LTSPF); ultrapassar 2 anos em licença para tratamento de saúde própria (LTSP); ou for candidato a cargo eletivo (se com mais de 10 anos de serviço)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_034",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Reversão do Militar Agregado (Art. 80)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q034] A 'Reversão', disciplinada no art. 80 da Lei Estadual nº 6.783/1974, é o ato pelo qual o policial militar agregado:",
    "options": [
      "Retorna ao respectivo quadro, tão logo cessem os motivos que determinaram a sua agregação, voltando a ocupar a escala hierárquica.",
      "É compulsoriamente demitido da corporação por falta de aproveitamento moral.",
      "Passa para a reforma definitiva com soldo integral independentemente de idade.",
      "Perde o direito de promoção ao posto imediato até o encerramento do quinquênio.",
      "É transferido para a Polícia Civil de Pernambuco por decisão do Secretário."
    ],
    "correctIndex": 0,
    "explanation": "O art. 80 define: 'Reversão é o ato pelo qual o policial-militar agregado retorna ao respectivo quadro, tão logo cesse o motivo que determinou a sua agregação, voltando a ocupar o lugar que lhe competir na escala hierárquica'.",
    "fundamentacaoLegal": "Art. 80 da Lei Estadual nº 6.783/1974.",
    "hint": "Reversão é o RETORNO do militar agregado ao serviço ativo no respectivo quadro!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Agregação é a saída temporária da vaga; Reversão é a volta para o quadro.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 80 define: 'Reversão é o ato pelo qual o policial-militar agregado retorna ao respectivo quadro, tão logo cesse o motivo que determinou a sua agregação, voltando a ocupar o lugar que lhe competir na escala hierárquica'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_035",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Situação de Excedente (Art. 83)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q035] É considerado 'Excedente' na Polícia Militar de Pernambuco, conforme o art. 83 da Lei Estadual nº 6.783/1974, o policial militar que:",
    "options": [
      "Apresenta altura superior ao limite máximo exigido no edital de concurso público.",
      "Presta mais de 40 horas semanais de serviço voluntário durante o policiamento de trânsito.",
      "Tendo cessado o motivo de sua agregação, reverte ao respectivo quadro e não encontra vaga disponível em seu grau hierárquico, ou que tenha sido promovido indevidamente por erro de direito.",
      "Excede a média de tiros acertados no alvo durante a prova anual de armamento.",
      "Conta com mais de cinco condecorações honoríficas do Governador do Estado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 83 prevê a situação de excedente quando o militar reverte e não há vaga no seu posto/graduação, ou quando é promovido indevidamente por ressarcimento de preterição. O excedente ocupa a primeira vaga que se abrir em seu grau hierárquico.",
    "fundamentacaoLegal": "Art. 83 da Lei Estadual nº 6.783/1974.",
    "hint": "Excedente: voltou da agregação e NÃO ACHOU VAGA (ou foi promovido a mais indevidamente)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Excedente é o militar 'que sobrou' no posto até abrir uma nova vaga.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 83 prevê a situação de excedente quando o militar reverte e não há vaga no seu posto/graduação, ou quando é promovido indevidamente por ressarcimento de preterição. O excedente ocupa a primeira vaga que se abrir em seu grau hierárquico.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_036",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Ausente (Art. 85)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q036] É considerado 'Ausente' o policial militar que, por mais de 24 (vinte e quatro) horas consecutivas, conforme o art. 85 da Lei Estadual nº 6.783/1974:",
    "options": [
      "Deixar de comparecer à sua Organização Policial-Militar sem comunicar qualquer motivo de impedimento legal, ou ausentar-se sem licença da sede onde serve.",
      "Não responder às mensagens enviadas no aplicativo de telefonia funcional da escala.",
      "Deixar de pagar as mensalidades da associação de cabos e soldados do Estado.",
      "Chegar com 5 minutos de atraso à formatura matinal de hasteamento do pavilhão.",
      "For hospitalizado em unidade de terapia intensiva com atestado médico oficial."
    ],
    "correctIndex": 0,
    "explanation": "O art. 85 define: 'É considerado ausente o policial-militar que, por mais de 24 (vinte e quatro) horas consecutivas: I - deixar de comparecer à sua OPM sem comunicar qualquer motivo de impedimento; II - ausentar-se, sem licença, da sede de sua OPM ou do local onde deve permanecer'.",
    "fundamentacaoLegal": "Art. 85 da Lei Estadual nº 6.783/1974.",
    "hint": "AUSENTE: sumiu sem justificar por MAIS DE 24 HORAS CONSECUTIVAS!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Faltou sem avisar mais de 24 horas = Ausente.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 85 define: 'É considerado ausente o policial-militar que, por mais de 24 (vinte e quatro) horas consecutivas: I - deixar de comparecer à sua OPM sem comunicar qualquer motivo de impedimento; II - ausentar-se, sem licença, da sede de sua OPM ou do local onde deve permanecer'.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_037",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Deserção (Art. 86)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q037] A situação de 'Deserção' do policial militar, prevista no art. 86 da Lei Estadual nº 6.783/1974 e no art. 187 do Código Penal Militar, resta consumada quando o militar ausentar-se, sem licença, da unidade em que serve por mais de:",
    "options": [
      "24 (vinte e quatro) horas consecutivas.",
      "48 (quarenta e oito) horas ininterruptas.",
      "15 (quinze) dias intercalados.",
      "30 (trinta) dias após notificação por edital.",
      "8 (oito) dias consecutivos."
    ],
    "correctIndex": 4,
    "explanation": "O art. 86 da Lei Estadual nº 6.783/74 e o art. 187 do CPM estabelecem que a deserção ocorre quando o policial militar se ausenta, sem autorização, por MAIS DE OITO DIAS (8 dias e 1 minuto). Passou de 24h = ausente; passou de 8 dias = desertor (crime militar consumado).",
    "fundamentacaoLegal": "Art. 86 da Lei nº 6.783/74 e Art. 187 do Código Penal Militar.",
    "hint": "Ausente = mais de 24 horas. Desertor = mais de 8 DIAS CONSECUTIVOS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Passou de 8 dias sumido = Crime de Deserção na lata.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 86 da Lei Estadual nº 6.783/74 e o art. 187 do CPM estabelecem que a deserção ocorre quando o policial militar se ausenta, sem autorização, por MAIS DE OITO DIAS (8 dias e 1 minuto). Passou de 24h = ausente; passou de 8 dias = desertor (crime militar consumado)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_038",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Desaparecido e Extraviado (Arts. 87 e 88)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q038] É considerado 'Desaparecido' o militar em operações policiais ou em calamidade cujo paradeiro seja ignorado por mais de 8 dias. Se essa situação perdurar por mais de 30 (trinta) dias, o militar passa à situação de:",
    "options": [
      "Desertor qualificado com perda de remuneração da família.",
      "Reformado por invalidez presumida em definitivo.",
      "Demitido a bem da disciplina por abandono de função.",
      "Agregado perpétuo sem direito a pensão por morte aos dependentes.",
      "Extraviado (art. 88 da Lei Estadual nº 6.783/1974)."
    ],
    "correctIndex": 4,
    "explanation": "Pelo art. 87, o militar cujo paradeiro for ignorado por mais de 8 dias em viagem, operação ou calamidade é considerado 'Desaparecido'. Se a ausência persistir por MAIS DE 30 DIAS, ele é oficialmente considerado 'EXTRAVIADO' (art. 88), ensejando a habilitação dos beneficiários à pensão provisória.",
    "fundamentacaoLegal": "Arts. 87 e 88 da Lei Estadual nº 6.783/1974.",
    "hint": "Paradeiro ignorado em operação: +8 dias = Desaparecido; +30 dias = EXTRAVIADO!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Desapareceu na missão: 8 dias = Desaparecido; bateu 30 dias = Extraviado.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. Pelo art. 87, o militar cujo paradeiro for ignorado por mais de 8 dias em viagem, operação ou calamidade é considerado 'Desaparecido'. Se a ausência persistir por MAIS DE 30 DIAS, ele é oficialmente considerado 'EXTRAVIADO' (art. 88), ensejando a habilitação dos beneficiários à pensão provisória."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_039",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Hipóteses de Exclusão do Serviço Ativo (Art. 91)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q039] O art. 91 da Lei Estadual nº 6.783/1974 enumera taxativamente as causas de exclusão do serviço ativo da PMPE. Dentre elas, incluem-se:",
    "options": [
      "A licença especial decenal e as férias regulares de 30 dias.",
      "A promoção por antiguidade ao posto de Tenente-Coronel da ativa.",
      "A transferência para a reserva remunerada, a reforma, a demissão, a perda de posto e patente, o licenciamento, a exclusão a bem da disciplina, a deserção e o falecimento.",
      "O afastamento temporário de 5 dias por luto familiar de primeiro grau.",
      "A escala de serviço operacional em rondas motorizadas extraordinárias."
    ],
    "correctIndex": 2,
    "explanation": "O art. 91 estabelece as formas de exclusão do serviço ativo: I - transferência para a reserva remunerada; II - reforma; III - demissão; IV - perda de posto e patente; V - licenciamento; VI - exclusão a bem da disciplina; VII - deserção; VIII - falecimento; IX - extravio.",
    "fundamentacaoLegal": "Art. 91 da Lei Estadual nº 6.783/1974.",
    "hint": "Exclusão do serviço ativo tira o militar da ativa: Reserva, Reforma, Demissão, Licenciamento, Exclusão, Deserção, Morte e Extravio!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Formas de deixar a ativa da PMPE: reserva, reforma, demissão/licenciamento ou morte.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 91 estabelece as formas de exclusão do serviço ativo: I - transferência para a reserva remunerada; II - reforma; III - demissão; IV - perda de posto e patente; V - licenciamento; VI - exclusão a bem da disciplina; VII - deserção; VIII - falecimento; IX - extravio.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_040",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Reserva Remunerada a Pedido (Art. 92)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q040] A passagem do policial militar à situação de inatividade, mediante transferência para a reserva remunerada, a pedido:",
    "options": [
      "Será concedida mediante requerimento do militar que contar o tempo mínimo de serviço fixado pela legislação militar previdenciária e estatutária.",
      "Pode ser concedida a qualquer soldado com menos de 2 anos de serviço militar ativo.",
      "Exige autorização prévia por votação da Assembleia Legislativa do Estado.",
      "Pode ser deferida mesmo quando o militar estiver mobilizado em cumprimento de estado de sítio.",
      "Acarreta a perda definitiva de todos os direitos remuneratórios previdenciários."
    ],
    "correctIndex": 0,
    "explanation": "O art. 92 prevê que a transferência para a reserva remunerada a pedido é concedida ao militar que atingir o tempo mínimo de serviço com previsão legal. O art. 93 veda a transferência a pedido durante estado de sítio, emergência ou mobilização geral.",
    "fundamentacaoLegal": "Arts. 92 e 93 da Lei Estadual nº 6.783/1974.",
    "hint": "Reserva a pedido: preenchido o tempo legal de serviço!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Cumpriu o tempo de contribuição/serviço militar = pode pedir a reserva.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 92 prevê que a transferência para a reserva remunerada a pedido é concedida ao militar que atingir o tempo mínimo de serviço com previsão legal. O art. 93 veda a transferência a pedido durante estado de sítio, emergência ou mobilização geral.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_041",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Reserva Remunerada Ex Officio (Art. 95)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q041] A transferência 'ex officio' do policial militar para a reserva remunerada dar-se-á compulsoriamente quando o policial militar:",
    "options": [
      "Completar 10 anos de idade cronológica contados da data de nascimento.",
      "Atingir a idade-limite de permanência na ativa fixada para o seu posto ou graduação, ou ultrapassar os prazos legais de agregação previstos no Estatuto.",
      "For promovido por bravura em virtude de salvamento de vidas humanas.",
      "Recusar condecoração medalhística concedida pelo Comandante-Geral.",
      "Solicitar empréstimo consignado junto a instituições financeiras estaduais."
    ],
    "correctIndex": 1,
    "explanation": "O art. 95 da Lei nº 6.783/74 disciplina que a reserva 'ex officio' é obrigatória (compulsória) quando o militar atinge a idade-limite no posto/graduação, quando completa o tempo limite em cargos específicos, ou quando ultrapassa prazos legais de agregação.",
    "fundamentacaoLegal": "Art. 95 da Lei Estadual nº 6.783/1974.",
    "hint": "Reserva Ex Officio é OBRIGATÓRIA ao bater a idade-limite do posto/graduação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Bateu a idade-limite da ativa: o Estado manda para a reserva 'ex officio'.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 95 da Lei nº 6.783/74 disciplina que a reserva 'ex officio' é obrigatória (compulsória) quando o militar atinge a idade-limite no posto/graduação, quando completa o tempo limite em cargos específicos, ou quando ultrapassa prazos legais de agregação.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_042",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Conceito de Reforma (Art. 101)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q042] A 'Reforma' do policial militar, prevista no art. 101 da Lei Estadual nº 6.783/1974, é a situação de inatividade na qual o militar:",
    "options": [
      "Fica dispensado definitivamente da prestação de qualquer serviço na corporação militar, mesmo em caso de mobilização militar.",
      "Continua na ativa, mas obrigado a escalas de serviço exclusivamente noturnas.",
      "Pode ser convocado a qualquer momento para comandar batalhões do interior.",
      "Fica obrigado a realizar estágio de reciclagem de tiro a cada 3 meses.",
      "Perde o direito ao uso do título de seu grau hierárquico na vida social."
    ],
    "correctIndex": 0,
    "explanation": "O art. 101 estabelece: 'A reforma de que trata o artigo anterior dar-se-á a pedido ou ex officio'. Ao contrário da Reserva Remunerada (que está sujeita a convocação), o militar REFORMADO está dispensado em definitivo de qualquer serviço na Polícia Militar.",
    "fundamentacaoLegal": "Art. 101 da Lei Estadual nº 6.783/1974.",
    "hint": "Militar REFORMADO está dispensado DEFINITIVAMENTE da prestação de qualquer serviço militar!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Reserva pode ser chamada de volta; Reformado aposentou em definitivo.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 101 estabelece: 'A reforma de que trata o artigo anterior dar-se-á a pedido ou ex officio'. Ao contrário da Reserva Remunerada (que está sujeita a convocação), o militar REFORMADO está dispensado em definitivo de qualquer serviço na Polícia Militar.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_043",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Causas de Reforma (Art. 103)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q043] O policial militar será reformado 'ex officio', nos termos do art. 103 da Lei Estadual nº 6.783/1974, quando:",
    "options": [
      "Completar 5 anos consecutivos no cargo de subcomandante de companhia.",
      "Receber elogio formal em boletim geral ostensivo da Secretaria de Defesa Social.",
      "For aprovado em exame vestibular para curso superior de ciências jurídicas.",
      "Participar de seminário de policiamento comunitário no exterior por 10 dias.",
      "For julgado incapaz definitivamente para o serviço ativo da Polícia Militar por Junta Militar de Saúde, ou atingir a idade-limite de permanência na reserva remunerada."
    ],
    "correctIndex": 4,
    "explanation": "O art. 103 dispõe que a reforma ex officio será aplicada quando o militar: I - atingir a idade-limite da reforma; II - for julgado incapaz definitivamente para o serviço da PM por Junta de Saúde; III - estiver agregado por mais de 2 anos por incapacidade temporária; IV - for condenado à pena de reforma prevista no CPM.",
    "fundamentacaoLegal": "Art. 103 da Lei Estadual nº 6.783/1974.",
    "hint": "Reforma ex officio: incapacidade definitiva para o serviço militar ou idade-limite da reserva!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Incapaz definitivamente na Junta de Saúde = Reforma ex officio imediata.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 103 dispõe que a reforma ex officio será aplicada quando o militar: I - atingir a idade-limite da reforma; II - for julgado incapaz definitivamente para o serviço da PM por Junta de Saúde; III - estiver agregado por mais de 2 anos por incapacidade temporária; IV - for condenado à pena de reforma prevista no CPM."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_044",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Demissão do Oficial (Arts. 107 a 111)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q044] O instituto da 'Demissão' na Polícia Militar de Pernambuco, disciplinado nos arts. 107 a 111 do Estatuto:",
    "options": [
      "Aplica-se a soldados e cabos com menos de 3 anos de efetivo serviço policial militar.",
      "Consiste em sanção disciplinar automática aplicada pelo sargento mais antigo da guarda.",
      "Não pode ser concedida a pedido em tempo de paz sob nenhuma justificativa.",
      "Exige anuência do Ministério Público do Trabalho para ser homologada.",
      "Aplica-se exclusivamente aos OFICIAIS da Corporação (a pedido ou ex officio), acarretando a perda do posto e da patente se for decorrente de indignidade para o oficialato."
    ],
    "correctIndex": 4,
    "explanation": "No Estatuto da PMPE, a denominação 'DEMISSÃO' é exclusiva para OFICIAIS (art. 107). Para PRAÇAS, o afastamento correspondente chama-se 'LICENCIAMENTO' ou 'EXCLUSÃO A BEM DA DISCIPLINA'.",
    "fundamentacaoLegal": "Arts. 107 e 112 da Lei Estadual nº 6.783/1974.",
    "hint": "DEMISSÃO é termo exclusivo para OFICIAL! Para PRAÇA é LICENCIAMENTO ou EXCLUSÃO.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Oficial é Demitido; Praça é Licenciada ou Excluída.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. No Estatuto da PMPE, a denominação 'DEMISSÃO' é exclusiva para OFICIAIS (art. 107). Para PRAÇAS, o afastamento correspondente chama-se 'LICENCIAMENTO' ou 'EXCLUSÃO A BEM DA DISCIPLINA'."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_045",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Licenciamento da Praça (Art. 112)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q045] O 'Licenciamento' do serviço ativo, previsto no art. 112 da Lei Estadual nº 6.783/1974, é privativo das praças e dar-se-á:",
    "options": [
      "Apenas por sentença irrecorrível do Superior Tribunal de Justiça em Brasília.",
      "A pedido, ou ex officio (por conveniência do serviço ou a bem da disciplina), conforme as normas e regulamentos da Corporação.",
      "Automaticamente a cada 5 anos com recontratação mediante novo concurso público.",
      "Exclusivamente quando a praça completar 70 anos de idade cronológica.",
      "Mediante parecer favorável de sindicato de classe de segurança pública estadual."
    ],
    "correctIndex": 1,
    "explanation": "O art. 112 da Lei nº 6.783/74 afirma: 'O licenciamento do serviço ativo, privativo das praças, dar-se-á: I - a pedido; II - ex officio: a) por conveniência do serviço; b) a bem da disciplina'.",
    "fundamentacaoLegal": "Art. 112 da Lei Estadual nº 6.783/1974.",
    "hint": "Licenciamento da praça: A PEDIDO ou EX OFFICIO (conveniência do serviço ou a bem da disciplina)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Praça sai por Licenciamento: pode pedir para sair ou o Comandante licenciar ex officio.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 112 da Lei nº 6.783/74 afirma: 'O licenciamento do serviço ativo, privativo das praças, dar-se-á: I - a pedido; II - ex officio: a) por conveniência do serviço; b) a bem da disciplina'.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_046",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Exclusão a Bem da Disciplina (Art. 115)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q046] A 'Exclusão a bem da disciplina', conforme o art. 115 do Estatuto da PMPE, será aplicada ex officio à praça:",
    "options": [
      "Sem estabilidade, no primeiro dia em que chegar com 10 minutos de atraso à OPM.",
      "Que impetrar mandado de segurança individual para assegurar direito a férias.",
      "Com estabilidade assegurada, quando for julgada culpada em Conselho de Disciplina por conduta que afete a honra pessoal ou o decoro militar.",
      "Que completar o tempo regular exigido para a passagem para a reserva remunerada.",
      "Apenas após condenação criminal por crime contra a honra sem trânsito em julgado."
    ],
    "correctIndex": 2,
    "explanation": "O art. 115 prescreve que a exclusão a bem da disciplina será aplicada pelo Comandante-Geral da PMPE à praça que tenha praticado atos desonrosos ou incompatíveis com a vida militar, exigindo-se Conselho de Disciplina prévio se a praça tiver estabilidade assegurada.",
    "fundamentacaoLegal": "Art. 115 da Lei Estadual nº 6.783/1974.",
    "hint": "Exclusão a bem da disciplina: praça com estabilidade exige CONSELHO DE DISCIPLINA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Expulsão de praça estável só após o Conselho de Disciplina dar o parecer e o Comandante decidir.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 115 prescreve que a exclusão a bem da disciplina será aplicada pelo Comandante-Geral da PMPE à praça que tenha praticado atos desonrosos ou incompatíveis com a vida militar, exigindo-se Conselho de Disciplina prévio se a praça tiver estabilidade assegurada.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_047",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Reabilitação (Art. 121)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q047] A reabilitação do policial militar que tenha sofrido punição disciplinar, nos termos dos regulamentos disciplinares e estatutários:",
    "options": [
      "Gera a anulação de sentenças penais condenatórias do Tribunal de Justiça de Pernambuco.",
      "É o ato que cancela o registro das punições disciplinares na folha de assentamentos do militar, decorrido determinado lapso temporal com comportamento exemplar.",
      "Promove o soldado imediatamente ao posto de Capitão do Quadro Combatente.",
      "Confere indenização financeira retroativa por danos morais ao militar punido.",
      "Transfere o policial para o Corpo de Bombeiros Militar com anistia perpétua."
    ],
    "correctIndex": 1,
    "explanation": "A reabilitação disciplinar consiste na retirada formal das punições da ficha de assentamentos do policial, após cumprimento do prazo legal sem nova transgressão e com demonstração de conduta exemplar, restaurando sua classificação de bom comportamento.",
    "fundamentacaoLegal": "Art. 121 da Lei nº 6.783/74 e Regulamento Disciplinar da PMPE.",
    "hint": "Reabilitação apaga a mancha da punição na ficha do militar após prazo de bom comportamento!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ficou na linha por anos: ganha a reabilitação e limpa os registros disciplinares.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. A reabilitação disciplinar consiste na retirada formal das punições da ficha de assentamentos do policial, após cumprimento do prazo legal sem nova transgressão e com demonstração de conduta exemplar, restaurando sua classificação de bom comportamento.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_048",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Recompensas Policiais Militares (Art. 60)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q048] Constituem recompensas policiais-militares, concedidas como reconhecimento de bons serviços prestados (art. 60 da Lei Estadual nº 6.783/1974):",
    "options": [
      "O pagamento de soldo duplicado sem desconto de imposto de renda.",
      "A isenção permanente do cumprimento de escala de guarda de quartel.",
      "A imunidade penal irrestrita perante as varas criminais comuns.",
      "Os elogios, as condecorações por serviços prestados e as dispensas do serviço.",
      "O direito de escolher a viatura e o parceiro de patrulhamento diário."
    ],
    "correctIndex": 3,
    "explanation": "O art. 60 traz as recompensas: 'I - os elogios; II - as condecorações por serviços prestados; III - as dispensas do serviço'. São atos que reconhecem o mérito, bravura ou dedicação extraordinária do policial militar.",
    "fundamentacaoLegal": "Art. 60 da Lei Estadual nº 6.783/1974.",
    "hint": "Recompensas militares: ELOGIOS, CONDECORAÇÕES e DISPENSAS DE SERVIÇO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Fez bonito na PMPE: ganha elogio na ficha, medalha no peito e dispensa de folga.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 60 traz as recompensas: 'I - os elogios; II - as condecorações por serviços prestados; III - as dispensas do serviço'. São atos que reconhecem o mérito, bravura ou dedicação extraordinária do policial militar.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_049",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Promoção por Bravura",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q049] A promoção por bravura na Polícia Militar de Pernambuco é aquela que:",
    "options": [
      "Ocorre automaticamente quando o militar completa 25 anos de serviço sem punição.",
      "Resulta de ato ou atos não comuns de coragem e audácia que, ultrapassando os limites normais do cumprimento do dever, representem feitos de notório desprendimento e mérito na atividade operacional.",
      "É conferida apenas a oficiais com título acadêmico de doutorado em segurança.",
      "Depende exclusivamente de aprovação em concurso interno de provas escritas.",
      "Gera a transferência compulsória para a reserva com soldo do posto de Coronel."
    ],
    "correctIndex": 1,
    "explanation": "A promoção por bravura independe de vaga ou de tempo de interstício no posto/graduação. Decorre de ato heroico e extraordinário de coragem com risco consciente da própria vida na defesa da sociedade.",
    "fundamentacaoLegal": "Lei de Promoções de Militares de PE e Lei nº 6.783/1974.",
    "hint": "Promoção por Bravura: ato incomum de coragem e audácia acima do dever normal, independente de vaga!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Bravura é heroísmo na rua: ganha a promoção de grau imediato na hora.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. A promoção por bravura independe de vaga ou de tempo de interstício no posto/graduação. Decorre de ato heroico e extraordinário de coragem com risco consciente da própria vida na defesa da sociedade.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_050",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Promoção 'Post Mortem'",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q050] A promoção 'post mortem' na PMPE visa expressamente a:",
    "options": [
      "Expressar o reconhecimento do Estado ao policial militar que falecer em consequência de ferimentos recebidos em ação policial ostensiva ou na preservação da ordem pública.",
      "Substituir o pagamento da pensão por morte aos dependentes habilitados.",
      "Garantir aos herdeiros o direito de herdar o armamento oficial da corporação.",
      "Promover o parente mais próximo do falecido ao quadro de soldados sem concurso.",
      "Declarar anistia administrativa perpétua aos oficiais do estado-maior geral."
    ],
    "correctIndex": 0,
    "explanation": "A promoção 'post mortem' é a homenagem e o dever de justiça do Estado ao policial que tomba em serviço ou em razão dele. Os proventos de pensão por morte da família passam a ser calculados com base no novo posto/graduação alcançado.",
    "fundamentacaoLegal": "Legislação de Promoções da PMPE e Lei Estadual nº 6.783/1974.",
    "hint": "Promoção Post Mortem: reconhecimento de bravura/honra ao herói militar tombado em serviço!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Morreu em combate pelo cidadão: recebe a promoção post mortem e a família tem amparo no soldo superior.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. A promoção 'post mortem' é a homenagem e o dever de justiça do Estado ao policial que tomba em serviço ou em razão dele. Os proventos de pensão por morte da família passam a ser calculados com base no novo posto/graduação alcançado.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_051",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Tempo de Efetivo Serviço (Art. 125)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q051] Nos termos do art. 125 da Lei Estadual nº 6.783/1974, considera-se 'Tempo de Efetivo Serviço' do policial militar:",
    "options": [
      "Apenas os dias em que o militar realizou patrulhamento em viatura ostensiva de quatro rodas.",
      "O tempo em que o policial permaneceu em licença para tratar de interesse particular sem soldo.",
      "O período de ausência injustificada e deserção após o perdão da autoridade judiciária.",
      "O período em que esteve preso em cumprimento de pena por crime militar transitado em julgado.",
      "O espaço de tempo computado dia a dia entre a data de ingresso na PMPE e a data de desligamento ou exclusão do serviço ativo."
    ],
    "correctIndex": 4,
    "explanation": "O art. 125 define o tempo de efetivo serviço como o espaço de tempo computado dia a dia entre a data de inclusão/matrícula e a data de desligamento, excluindo-se as deduções legais (como deserção, cumprimento de pena privativa de liberdade e licença para interesse particular).",
    "fundamentacaoLegal": "Art. 125 da Lei Estadual nº 6.783/1974.",
    "hint": "Tempo de efetivo serviço é medido DIA A DIA, do ingresso ao desligamento da ativa!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Efetivo serviço = dia a dia trabalhado na corporação (não conta LTIP nem cadeia).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 125 define o tempo de efetivo serviço como o espaço de tempo computado dia a dia entre a data de inclusão/matrícula e a data de desligamento, excluindo-se as deduções legais (como deserção, cumprimento de pena privativa de liberdade e licença para interesse particular)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_052",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Não Cômputo de Tempo de Serviço (Art. 128)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q052] Conforme o art. 128 da Lei Estadual nº 6.783/1974, NÃO é computável para efeito de inatividade ou tempo de serviço militar o período:",
    "options": [
      "Usufruído regularmente em férias anuais regulamentares de 30 dias.",
      "Em que o militar esteve baixado a hospital militar por acidente ocorrido em serviço.",
      "De licença especial concedida a cada dez anos de efetivo serviço.",
      "Passado em Licença para Tratar de Interesse Particular (LTIP) ou em cumprimento de pena privativa de liberdade passada em julgado.",
      "De cumprimento de missão de paz com autorização expressa do Governador."
    ],
    "correctIndex": 3,
    "explanation": "O art. 128 elenca expressamente os períodos que NÃO contam como tempo de serviço: I - em licença para tratar de interesse particular; II - passado em deserção; III - decorrido em cumprimento de pena de suspensão de função ou privativa de liberdade por sentença condenatória transitada em julgado.",
    "fundamentacaoLegal": "Art. 128 da Lei Estadual nº 6.783/1974.",
    "hint": "LTIP, deserção e tempo de prisão com condenação definitiva NÃO CONTAM tempo de serviço!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ficou de LTIP ou na cadeia: tempo congelado, não conta para a aposentadoria militar.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 128 elenca expressamente os períodos que NÃO contam como tempo de serviço: I - em licença para tratar de interesse particular; II - passado em deserção; III - decorrido em cumprimento de pena de suspensão de função ou privativa de liberdade por sentença condenatória transitada em julgado.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_053",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Direito de Petição e Recursos (Art. 51)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q053] O policial militar que se julgar prejudicado ou ofendido por qualquer ato administrativo ou disciplinar tem o direito de recorrer ou pedir reconsideração de ato, nos termos do art. 51 do Estatuto, devendo:",
    "options": [
      "Encaminhar o pedido por intermédio da autoridade a que estiver imediatamente subordinado, obedecendo rigorosamente à escala hierárquica e aos prazos legais.",
      "Publicar denúncia em redes sociais com marcação direta do Comandante-Geral.",
      "Convocar assembleia geral com paralisação das viaturas do batalhão por 24 horas.",
      "Remeter requerimento anônimo à Corregedoria Geral da Secretaria de Defesa Social.",
      "Recusar o cumprimento de escalas de serviço até que haja julgamento do recurso."
    ],
    "correctIndex": 0,
    "explanation": "O art. 51 da Lei nº 6.783/74 consagra o direito de petição e recurso do policial militar, exigindo que o requerimento ou recurso seja formulado com urbanidade, de forma individual (vedado o abaixo-assinado), e encaminhado obrigatoriamente por via hierárquica à autoridade competente.",
    "fundamentacaoLegal": "Art. 51 da Lei Estadual nº 6.783/1974.",
    "hint": "Recurso administrativo: SEMPRE por via hierárquica e de forma individual!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Quer recorrer: faz o requerimento respeitoso e entrega ao superior imediato (escala hierárquica).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 51 da Lei nº 6.783/74 consagra o direito de petição e recurso do policial militar, exigindo que o requerimento ou recurso seja formulado com urbanidade, de forma individual (vedado o abaixo-assinado), e encaminhado obrigatoriamente por via hierárquica à autoridade competente.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_054",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Remuneração Policial Militar (Art. 50)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q054] A remuneração dos policiais militares de Pernambuco na ativa é devida pelo Estado e compreende, nos termos estatutários:",
    "options": [
      "Apenas diárias variáveis pagas por quilômetro percorrido com a viatura policial.",
      "Um salário mínimo regional acrescido de bonificação por apreensão de armas.",
      "O soldo (base) e as gratificações e indenizações previstas na legislação de remuneração específica.",
      "Uma quantia fixa estipulada pelo comandante do batalhão no início de cada mês.",
      "Valores decorrentes exclusivamente de arrecadação de multas de trânsito estaduais."
    ],
    "correctIndex": 2,
    "explanation": "O art. 50 da Lei nº 6.783/74 prevê que a remuneração dos policiais-militares é devida pelo Estado e compreende: soldo e gratificações e indenizações, devendo assegurar meios dignos de subsistência ao militar e à sua família.",
    "fundamentacaoLegal": "Art. 50 da Lei Estadual nº 6.783/1974.",
    "hint": "Remuneração = SOLDO + GRATIFICAÇÕES e INDENIZAÇÕES!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Soldo é a base do militar; gratificações e indenizações completam o holerite.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 50 da Lei nº 6.783/74 prevê que a remuneração dos policiais-militares é devida pelo Estado e compreende: soldo e gratificações e indenizações, devendo assegurar meios dignos de subsistência ao militar e à sua família.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_055",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Proventos da Inatividade (Art. 50, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q055] O policial militar na inatividade (na reserva remunerada ou reformado) percebe remuneração sob a denominação estatutária de:",
    "options": [
      "Proventos, constituídos pelo soldo ou quotas de soldo e gratificações e indenizações incorporáveis.",
      "Pensão especial alimentícia intransferível.",
      "Benefício de prestação continuada da previdência geral urbana.",
      "Pró-labore por serviços extraordinários de segurança escolar.",
      "Gratificação de representação militar transitória de gabinete."
    ],
    "correctIndex": 0,
    "explanation": "O art. 50, § 1º da Lei nº 6.783/74 esclarece: 'O policial-militar na inatividade, seja na reserva remunerada ou reformado, percebe remuneração sob a forma de proventos da inatividade'. Na ativa chama-se remuneração/soldo; na inatividade chama-se proventos.",
    "fundamentacaoLegal": "Art. 50, § 1º da Lei Estadual nº 6.783/1974.",
    "hint": "Inatividade recebe PROVENTOS!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ativa ganha soldo/vencimentos; Reserva e Reformado ganham PROVENTOS.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 50, § 1º da Lei nº 6.783/74 esclarece: 'O policial-militar na inatividade, seja na reserva remunerada ou reformado, percebe remuneração sob a forma de proventos da inatividade'. Na ativa chama-se remuneração/soldo; na inatividade chama-se proventos.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_056",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Irredutibilidade e Descontos Legais (Art. 53)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q056] Em relação ao soldo do policial militar de Pernambuco, é garantia fundamental de seu regime jurídico:",
    "options": [
      "A possibilidade de arresto imediato por dívidas bancárias comuns de cartão de crédito.",
      "A redução discricionária de até 50% pelo comandante de batalhão em caso de falta disciplinar.",
      "A substituição de 30% do seu valor em vales de compras de cooperativas militares.",
      "A vinculação automática ao salário mínimo nacional com reajustes trimestrais.",
      "A irredutibilidade, não estando sujeito a penhora, sequestro ou arresto, exceto nos casos de pensão alimentícia judicialmente determinada ou dívidas para com a Fazenda Pública."
    ],
    "correctIndex": 4,
    "explanation": "O soldo do policial-militar é irredutível e protegido contra penhora e sequestro, ressalvadas as hipóteses constitucionais e legais de pensão alimentícia fixada em juízo ou obrigações com o erário público decorrentes de reposição.",
    "fundamentacaoLegal": "Art. 53 da Lei nº 6.783/74 e Art. 37, XV da CF/88.",
    "hint": "Soldo é impenhorável! Só admite desconto para pensão alimentícia e dívidas com a Fazenda Pública.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Salário do militar não penhora por banco; só desconta pensão alimentícia e dívida com o Estado.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O soldo do policial-militar é irredutível e protegido contra penhora e sequestro, ressalvadas as hipóteses constitucionais e legais de pensão alimentícia fixada em juízo ou obrigações com o erário público decorrentes de reposição."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_057",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Deserção e Perda de Remuneração",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q057] O policial militar que consumar o crime militar de deserção (ausência injustificada por mais de 8 dias consecutivos):",
    "options": [
      "Continua recebendo o soldo integral enquanto estiver foragido em outro estado da federação.",
      "É promovido ao posto imediato por lapso temporal de afastamento operacional.",
      "Tem a sua remuneração suspensa a partir da consumação da deserção, sendo agregado para efeito de processo penal militar e só voltando a receber após captura ou apresentação voluntária.",
      "Tem suas dívidas bancárias quitadas compulsoriamente pelo fundo da corporação.",
      "Recebe aposentadoria especial imediata com proventos proporcionais da patente."
    ],
    "correctIndex": 2,
    "explanation": "Nos termos do Código de Processo Penal Militar (art. 451 e ss.) e do Estatuto da PMPE, o desertor tem a cessação imediata de seus vencimentos a partir da consumação do delito (após o 8º dia de ausência), sendo excluído do serviço ativo e agregado para fins de processo criminal.",
    "fundamentacaoLegal": "Art. 86 da Lei Estadual nº 6.783/74 e Art. 451 do CPPM.",
    "hint": "Desertor tem o soldo CORTADO a partir do momento em que consuma a deserção!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Fugiu e desertou: o soldo é cortado na hora e vira foragido da Justiça Militar.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. Nos termos do Código de Processo Penal Militar (art. 451 e ss.) e do Estatuto da PMPE, o desertor tem a cessação imediata de seus vencimentos a partir da consumação do delito (após o 8º dia de ausência), sendo excluído do serviço ativo e agregado para fins de processo criminal.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_058",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Assistência Médico-Hospitalar (Art. 50, IV)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q058] É direito assegurado ao policial militar de Pernambuco e a seus dependentes legais, nos termos do art. 50, IV do Estatuto:",
    "options": [
      "A cobertura médica exclusiva em clínicas estéticas particulares do exterior.",
      "A internação gratuita em hospitais filantrópicos apenas durante os feriados nacionais.",
      "O reembolso integral de tratamentos odontológicos não reconhecidos pelo Conselho Federal.",
      "A assistência médico-hospitalar para si e seus dependentes, através dos serviços de saúde da Corporação (Centro Médico Hospitalar da PMPE - CMH) e do Sistema de Saúde dos Militares Estaduais.",
      "A dispensação de medicamentos controlados sem apresentação de receita médica válida."
    ],
    "correctIndex": 3,
    "explanation": "O art. 50, IV do Estatuto da PMPE consagra o direito à assistência médico-hospitalar para o militar e seus dependentes por meio do Centro Médico Hospitalar da PMPE (Diretoria de Saúde) e da previdência/saúde dos militares do Estado (SISMEPE).",
    "fundamentacaoLegal": "Art. 50, inciso IV da Lei Estadual nº 6.783/1974 e Lei do SISMEPE.",
    "hint": "Direito à assistência médica: Centro Médico Hospitalar (CMH) e SISMEPE!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Policial militar e dependentes têm assistência médica pelo hospital da PMPE (CMH).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 50, IV do Estatuto da PMPE consagra o direito à assistência médico-hospitalar para o militar e seus dependentes por meio do Centro Médico Hospitalar da PMPE (Diretoria de Saúde) e da previdência/saúde dos militares do Estado (SISMEPE).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_059",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Dependentes do Policial Militar (Art. 50, § 2º e § 3º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q059] São considerados dependentes do policial militar para os efeitos de benefícios previdenciários e médico-assistenciais regulamentares:",
    "options": [
      "Vizinhos e amigos de infância que residam no mesmo bairro onde serve o militar.",
      "Sócios comerciais de empresas de investimento de que o militar seja apenas cotista.",
      "Irmãos maiores de 25 anos com renda própria e emprego fixo no setor privado.",
      "Qualquer cidadão civil que tenha sido socorrido por guarnição da polícia militar.",
      "O cônjuge ou companheiro(a) em união estável e os filhos menores de idade ou inválidos, além de outros que preencham os requisitos de dependência econômica sob guarda legal."
    ],
    "correctIndex": 4,
    "explanation": "O Estatuto e a legislação previdenciária militar (LC 108 e Lei de Pensões Militares) definem como dependentes primários o cônjuge/companheiro(a) e os filhos menores de 21 anos (ou estudantes até 24 anos) ou inválidos sob dependência econômica comprovada.",
    "fundamentacaoLegal": "Art. 50, §§ 2º e 3º da Lei nº 6.783/74 e Legislação Previdenciária de PE.",
    "hint": "Dependentes: cônjuge/companheiro(a) e filhos menores ou inválidos!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Família direta (esposa/marido e filhos) com dependência econômica comprovada.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O Estatuto e a legislação previdenciária militar (LC 108 e Lei de Pensões Militares) definem como dependentes primários o cônjuge/companheiro(a) e os filhos menores de 21 anos (ou estudantes até 24 anos) ou inválidos sob dependência econômica comprovada."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_060",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Transferência para a Reserva a Pedido com Menos Tempo de Serviço",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q060] Em relação ao militar que solicita transferência para a reserva remunerada a pedido:",
    "options": [
      "A concessão fica suspensa na vigência de estado de sítio, estado de defesa, calamidade pública ou grave perturbação da ordem interna.",
      "O militar pode afastar-se imediatamente da função antes mesmo da publicação do ato no Diário Oficial.",
      "É garantida a promoção compulsória de dois postos superiores na data do pedido.",
      "O pedido pode ser deferido por qualquer sargento lotado no setor de recursos humanos.",
      "O militar tem o dever de devolver todas as condecorações e medalhas recebidas em serviço."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o art. 93 do Estatuto: 'A transferência para a reserva remunerada, a pedido, será suspensa na vigência de estado de sítio, estado de emergência ou em caso de mobilização'. O militar deve aguardar a publicação do ato oficial em atividade.",
    "fundamentacaoLegal": "Art. 93 da Lei Estadual nº 6.783/1974.",
    "hint": "Reserva a pedido fica SUSPENSA em caso de estado de sítio, defesa, mobilização ou calamidade!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Em momento de guerra ou estado de sítio: ninguém vai para a reserva a pedido.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Conforme o art. 93 do Estatuto: 'A transferência para a reserva remunerada, a pedido, será suspensa na vigência de estado de sítio, estado de emergência ou em caso de mobilização'. O militar deve aguardar a publicação do ato oficial em atividade.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_061",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Convocação de Militares da Reserva (Art. 96)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q061] Os policiais militares que se encontram na reserva remunerada da PMPE poderão ser convocados para o serviço ativo:",
    "options": [
      "Por decisão irrevogável de associação de veteranos e aposentados estaduais.",
      "Para prestar serviço doméstico exclusivo na residência oficial de parlamentares estaduais.",
      "Sem direito à remuneração ou a qualquer acréscimo em seus proventos da inatividade.",
      "Em caráter transitório, por ato do Governador do Estado, em caso de necessidade de reforço do policiamento ostensivo, calamidade pública ou mobilização geral.",
      "Apenas se contarem com mais de 75 anos de idade na data da convocação."
    ],
    "correctIndex": 3,
    "explanation": "O art. 96 e legislação específica permitem a convocação do militar da reserva remunerada por ato do Governador do Estado, em caráter transitório, para aproveitamento de sua experiência profissional e suprimento de efetivo em condições excepcionais, recebendo acréscimo remuneratório indenizatório.",
    "fundamentacaoLegal": "Art. 96 da Lei Estadual nº 6.783/1974.",
    "hint": "Convocação da Reserva Remunerada: por ATO DO GOVERNADOR em caráter transitório!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Militar da reserva pode ser chamado de volta pelo Governador se o Estado precisar.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 96 e legislação específica permitem a convocação do militar da reserva remunerada por ato do Governador do Estado, em caráter transitório, para aproveitamento de sua experiência profissional e suprimento de efetivo em condições excepcionais, recebendo acréscimo remuneratório indenizatório.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_062",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Morte Presumida e Pensão Militar (Art. 89)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q062] Considerado oficialmente extraviado o policial militar há mais de 6 (seis) meses (art. 89 da Lei nº 6.783/1974):",
    "options": [
      "O militar será sumariamente rebaixado de graduação por ausência injustificada prolongada.",
      "A corporação cancelará todos os benefícios previdenciários de sua família imediatamente.",
      "Será publicado edital de convocação para que o militar preste depoimento presencial no prazo de 24h.",
      "Será aberta a sucessão definitiva e os seus dependentes habilitados passarão a perceber a pensão militar por morte na forma da lei.",
      "Os seus bens móveis serão transferidos compulsoriamente para o acervo bélico da PMPE."
    ],
    "correctIndex": 3,
    "explanation": "O art. 89 prevê que, decorridos 6 meses do extravio, haverá a declaração de morte presumida do policial-militar para todos os efeitos de direito, passando os herdeiros a receber a pensão definitiva militar por morte.",
    "fundamentacaoLegal": "Art. 89 da Lei Estadual nº 6.783/1974.",
    "hint": "Extraviado por mais de 6 meses = MORTE PRESUMIDA com pensão aos dependentes!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "6 meses extraviado: presume-se a morte e libera a pensão dos filhos e cônjuge.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 89 prevê que, decorridos 6 meses do extravio, haverá a declaração de morte presumida do policial-militar para todos os efeitos de direito, passando os herdeiros a receber a pensão definitiva militar por morte.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_063",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Responsabilidade Administrativa e Penal (Art. 42)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q063] A respeito da cumulação de responsabilidades do policial militar pelo mesmo fato (art. 42 da Lei nº 6.783/1974), é correto afirmar:",
    "options": [
      "A absolvição disciplinar impede compulsoriamente o Ministério Público de oferecer denúncia penal.",
      "O pagamento de indenização civil à vítima extingue automaticamente a punibilidade do crime militar.",
      "As responsabilidades civil, penal e disciplinar são independentes entre si e podem ser apuradas e aplicadas cumulativamente pela autoridade competente.",
      "O militar só pode ser punido na esfera disciplinar se já houver condenação criminal transitada em julgado.",
      "A apuração penal consome todas as sanções administrativas por força do princípio da subsidiariedade."
    ],
    "correctIndex": 2,
    "explanation": "O art. 42 estabelece o princípio da independência das instâncias: o policial responde nas esferas civil, penal e disciplinar/administrativa de forma autônoma e cumulativa. Apenas a absolvição criminal que categoricamente declare a inexistência do fato ou que o militar não foi seu autor vincula a esfera administrativa.",
    "fundamentacaoLegal": "Art. 42 da Lei Estadual nº 6.783/1974.",
    "hint": "Independência das esferas: civil, penal e administrativa podem agir juntas e cumuladas!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Militar pode responder a PAD, processo-crime e ação indenizatória ao mesmo tempo.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 42 estabelece o princípio da independência das instâncias: o policial responde nas esferas civil, penal e disciplinar/administrativa de forma autônoma e cumulativa. Apenas a absolvição criminal que categoricamente declare a inexistência do fato ou que o militar não foi seu autor vincula a esfera administrativa.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_064",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Incompatibilidade com o Oficialato (Art. 47)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q064] O Oficial da PMPE que tiver sua conduta submetida a Conselho de Justificação e for julgado pelo Tribunal de Justiça de Pernambuco como incompatível para com o oficialato:",
    "options": [
      "Será transferido para o quadro de cabos e soldados do batalhão mais próximo de sua residência.",
      "Receberá repreensão verbal confidencial sem registro em boletim interno ostensivo.",
      "Será demitido ex officio com perda do posto e da patente, deixando de pertencer à Corporação Militar.",
      "Passará automaticamente a exercer a magistratura militar de primeira instância.",
      "Será nomeado comandante geral de honra com soldo dobrado vitalício."
    ],
    "correctIndex": 2,
    "explanation": "O Oficial julgado indigno ou incompatível com o oficialato pelo Tribunal de Justiça de Pernambuco perderá o posto e a patente e será DEMITIDO ex officio das fileiras da Polícia Militar de Pernambuco, sem direito a remuneração da ativa.",
    "fundamentacaoLegal": "Art. 109 da Lei Estadual nº 6.783/1974 e Art. 125, § 4º da CF/88.",
    "hint": "Incompatível com o oficialato no TJPE: PERDE O POSTO E PATENTE E É DEMITIDO EX OFFICIO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Tribunal declarou indigno do oficialato: perde a patente e vai embora demitido.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O Oficial julgado indigno ou incompatível com o oficialato pelo Tribunal de Justiça de Pernambuco perderá o posto e a patente e será DEMITIDO ex officio das fileiras da Polícia Militar de Pernambuco, sem direito a remuneração da ativa.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_065",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Guarda de Quartel e Escala de Serviço",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q065] O serviço policial-militar exige dos seus integrantes dedicação integral à causa da segurança pública. Isso significa que:",
    "options": [
      "O policial militar tem jornada de trabalho rígida de 20 horas semanais em horário comercial exclusivamente.",
      "É proibida a escala de serviço noturno em finais de semana para soldados recém-formados.",
      "O militar pode recusar escalas operacionais que ocorram em dias de jogos de futebol no Recife.",
      "O militar está sujeito a escalas de serviço operacionais, de guarda e prontidão extraordinárias, diurnas ou noturnas, a qualquer dia da semana, inclusive aos sábados, domingos e feriados.",
      "A dedicação integral permite ao militar cobrar taxas de vigilância particular aos moradores do setor."
    ],
    "correctIndex": 3,
    "explanation": "A profissão militar caracteriza-se pelo regime de dedicação integral e dever de prontidão (art. 26 e ss.). As escalas de serviço, plantões, policiamento ostensivo e prontidões ocorrem 24 horas por dia, 7 dias por semana, inclusive em feriados e finais de semana.",
    "fundamentacaoLegal": "Arts. 26 e 27 da Lei Estadual nº 6.783/1974.",
    "hint": "Regime militar: dedicação integral à segurança pública em qualquer dia e horário!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Segurança pública não fecha: o policial cumpre escala de dia, de noite e em feriados.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. A profissão militar caracteriza-se pelo regime de dedicação integral e dever de prontidão (art. 26 e ss.). As escalas de serviço, plantões, policiamento ostensivo e prontidões ocorrem 24 horas por dia, 7 dias por semana, inclusive em feriados e finais de semana.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_066",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Obrigações Policiais-Militares e Acidentes em Serviço",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q066] Considera-se 'Acidente em Serviço' do policial militar de Pernambuco aquele que:",
    "options": [
      "Ocorre durante partida amadora de futebol de lazer realizada em clube privado nas férias do militar.",
      "Acontece em decorrência exclusiva de imperícia grosseira em atividade particular de reforma residencial.",
      "Ocorre durante o cumprimento de escala ou missão operacional, ou no deslocamento entre sua residência e o local de trabalho ou vice-versa (in itinere), comprovado por Inquérito Técnico ou Atestado de Origem.",
      "Apenas é reconhecido se a viatura policial tiver sofrido perda total por capotamento comprovado.",
      "Depende de homologação prévia da Superintendência Regional do Trabalho e Emprego."
    ],
    "correctIndex": 2,
    "explanation": "O acidente em serviço na PMPE é apurado por Atestado de Origem (AO) ou Inquérito Técnico. Abrange o acidente ocorrido no exercício da função ou no trajeto regular de ida ou volta do serviço (acidente de trajeto), assegurando a proteção integral do Estado.",
    "fundamentacaoLegal": "Normas Regulamentares da PMPE e Lei Estadual nº 6.783/1974.",
    "hint": "Acidente em serviço: no exercício da missão ou no trajeto casa-trabalho (apurado por Atestado de Origem)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Machucou em serviço ou no caminho do quartel = acidente em serviço com direitos integrais.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O acidente em serviço na PMPE é apurado por Atestado de Origem (AO) ou Inquérito Técnico. Abrange o acidente ocorrido no exercício da função ou no trajeto regular de ida ou volta do serviço (acidente de trajeto), assegurando a proteção integral do Estado.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_067",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Incapacidade Definitiva por Ato de Serviço (Art. 104)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q067] O policial militar da ativa que for julgado definitivamente incapaz para o serviço militar, em virtude de ferimento recebido em serviço ou enfermidade contraída em razão dele (art. 104 da Lei nº 6.783/74):",
    "options": [
      "Será exonerado sumariamente sem direito a qualquer assistência financeira previdenciária.",
      "Deverá indenizar a corporação pelos custos hospitalares dispensados no atendimento de urgência.",
      "Ficará obrigado a prestar serviços de recepção administrativa sem remuneração por 10 anos.",
      "Será reformado ex officio com remuneração calculada com base no soldo integral do posto ou graduação imediata ao que possuía na ativa, na forma da lei de remuneração.",
      "Será transferido para o quadro de funcionários civis da Secretaria de Educação Estadual."
    ],
    "correctIndex": 3,
    "explanation": "O art. 104 e legislação correlata estabelecem que o militar que se torna definitivamente inválido em consequência de ferimento em combate, em ato de serviço ou moléstia profissional é reformado com proventos integrais, muitas vezes com remuneração correspondente ao posto ou graduação superior imediata.",
    "fundamentacaoLegal": "Art. 104 da Lei Estadual nº 6.783/1974.",
    "hint": "Incapacidade definitiva em serviço: REFORMA COM PROVENTOS INTEGRAIS (muitas vezes com o soldo do posto superior)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Ficou inválido por defender a sociedade em serviço: reformado com dignidade e proventos integrais.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 104 e legislação correlata estabelecem que o militar que se torna definitivamente inválido em consequência de ferimento em combate, em ato de serviço ou moléstia profissional é reformado com proventos integrais, muitas vezes com remuneração correspondente ao posto ou graduação superior imediata.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_068",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Extravio de Documento de Identidade Militar (Art. 71)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q068] A carteira de identidade policial-militar, emitida privativamente pelo órgão competente da Corporação:",
    "options": [
      "Possui validade restrita ao município sede do quartel onde o militar estiver lotado.",
      "Deixa de ter validade caso o policial viaje para estados vizinhos durante suas férias regulares.",
      "É documento descartável que pode ser retido por seguranças privados em eventos comemorativos.",
      "Tem fé pública em todo o território nacional, atesta a condição de militar estadual e consigna expressamente o direito de porte de arma de fogo na forma da lei.",
      "Substitui o passaporte em viagens internacionais para países fora do continente americano."
    ],
    "correctIndex": 3,
    "explanation": "A identidade militar tem fé pública e validade em todo o território nacional (art. 71 da Lei 6.783/74). Comprova a condição de militar, o posto/graduação e a prerrogativa legal do porte de arma funcional.",
    "fundamentacaoLegal": "Art. 71 da Lei Estadual nº 6.783/1974.",
    "hint": "Identidade Militar tem FÉ PÚBLICA NACIONAL e assegura o porte de arma!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "A carteira funcional da PMPE vale no Brasil inteiro e garante o porte da sua arma.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. A identidade militar tem fé pública e validade em todo o território nacional (art. 71 da Lei 6.783/74). Comprova a condição de militar, o posto/graduação e a prerrogativa legal do porte de arma funcional.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_069",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Interrupção da Contagem de Tempo para Reforma",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q069] O policial militar da ativa que responder a processo criminal na Justiça Comum ou na Auditoria Militar por crime doloso contra a vida:",
    "options": [
      "Não poderá ser transferido para a reserva remunerada a pedido até que ocorra o trânsito em julgado da respectiva ação penal absolutória.",
      "Será compulsoriamente promovido ao posto imediato para assegurar ampla defesa processual.",
      "Deverá cumprir prisão preventiva mesmo que ausentes os requisitos do art. 312 do CPP.",
      "Tem sua contagem de tempo de serviço cancelada retroativamente desde a data de ingresso.",
      "Fica impedido de receber atendimento médico no Centro Médico Hospitalar da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "O Estatuto veda a transferência para a reserva a pedido do militar que esteja submetido a processo penal ou administrativo que possa acarretar sua demissão ou exclusão a bem da disciplina, garantindo que o militar responda pelos atos cometidos na ativa.",
    "fundamentacaoLegal": "Art. 93 da Lei Estadual nº 6.783/1974.",
    "hint": "Militar respondendo a processo que cause demissão/expulsão NÃO PODE pedir reserva remunerada!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Não adianta tentar fugir do processo pedindo reserva: o pedido fica travado.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O Estatuto veda a transferência para a reserva a pedido do militar que esteja submetido a processo penal ou administrativo que possa acarretar sua demissão ou exclusão a bem da disciplina, garantindo que o militar responda pelos atos cometidos na ativa.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_070",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Trânsito e Instalação (Art. 64)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q070] Conforme o art. 64 do Estatuto da PMPE, 'Trânsito' e 'Instalação' são períodos de afastamento total do serviço concedidos ao policial militar que:",
    "options": [
      "Concluir o curso de formação de oficiais para viajar a lazer no exterior por 60 dias.",
      "For eleito presidente de grêmio recreativo militar estadual sem mudança de domicílio.",
      "Apresentar recurso administrativo contra punição disciplinar aplicada pelo capitão.",
      "For movimentado de uma para outra Organização Policial-Militar (OPM) que implique mudança de sede ou município, a fim de realizar os preparativos de viagem e fixar nova residência.",
      "For designado para fiscalizar urnas eletrônicas municipais no mesmo bairro de sua lotação."
    ],
    "correctIndex": 3,
    "explanation": "O art. 64 prevê os direitos de trânsito (tempo para viagem entre municípios) e instalação (tempo para fixar residência com a família na nova localidade), concedidos ao policial movimentado por necessidade do serviço com mudança de sede.",
    "fundamentacaoLegal": "Art. 64 da Lei Estadual nº 6.783/1974.",
    "hint": "Trânsito e Instalação: concedidos quando o policial é transferido COM MUDANÇA DE CIDADE/MUNICÍPIO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Mudou de batalhão e de cidade: ganha dias de trânsito e instalação para arrumar a casa.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 64 prevê os direitos de trânsito (tempo para viagem entre municípios) e instalação (tempo para fixar residência com a família na nova localidade), concedidos ao policial movimentado por necessidade do serviço com mudança de sede.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_071",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Luto e Núpcias (Art. 63)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q071] Conforme a legislação estatutária da PMPE, as dispensas do serviço denominadas de 'núpcias' (casamento) e 'luto' (falecimento de cônjuge, pais ou filhos) são concedidas pelo prazo regular de:",
    "options": [
      "30 (trinta) dias consecutivos em qualquer circunstância.",
      "2 (dois) dias úteis com desconto correspondente no soldo básico.",
      "15 (quinze) dias intercalados de acordo com a escala do batalhão.",
      "8 (oito) dias consecutivos de afastamento do serviço, sem prejuízo da remuneração integral.",
      "24 horas improrrogáveis mediante certidão passada por escrivão."
    ],
    "correctIndex": 3,
    "explanation": "O art. 63 e normas regulamentares fixam a dispensa de 8 (oito) dias consecutivos para núpcias (casamento) e para luto (morte de cônjuge, pais, filhos e irmãos), sem qualquer prejuízo salarial ou na antiguidade da carreira.",
    "fundamentacaoLegal": "Art. 63 da Lei Estadual nº 6.783/1974.",
    "hint": "Núpcias (casou) e Luto (perda de familiar direto): 8 DIAS CONSECUTIVOS!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Casamento ou luto militar: 8 dias de dispensa integral com soldo na conta.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 63 e normas regulamentares fixam a dispensa de 8 (oito) dias consecutivos para núpcias (casamento) e para luto (morte de cônjuge, pais, filhos e irmãos), sem qualquer prejuízo salarial ou na antiguidade da carreira.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_072",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Vedação de Uso de Termos Militares por Civis",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q072] É vedado o uso das designações hierárquicas das Forças Armadas e da PMPE (Coronel, Major, Capitão, Tenente, Sargento, Cabo e Soldado) por:",
    "options": [
      "Militares da reserva remunerada em solenidades públicas cívicas.",
      "Policiais militares reformados ao assinar documentos e requerimentos pessoais.",
      "Associações, corporações civis, empresas privadas ou particulares, sendo privativas das instituições militares regulares.",
      "Oficiais que exerçam funções no Gabinete Militar do Governador do Estado.",
      "Instrutores do Centro de Ensino e Formação e Aperfeiçoamento de Praças."
    ],
    "correctIndex": 2,
    "explanation": "O art. 72 da Lei nº 6.783/74 proíbe expressamente a utilização das designações hierárquicas da Polícia Militar por entidades civis, agremiações ou empresas privadas, resguardando os títulos e postos como exclusividade dos militares do Estado e Forças Armadas.",
    "fundamentacaoLegal": "Art. 72 da Lei Estadual nº 6.783/1974.",
    "hint": "Designações hierárquicas são PRIVATIVAS dos militares: civil não pode usar posto militar!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Título de patente militar (Coronel, Capitão, Sargento) só pertence a quem é da farda.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O art. 72 da Lei nº 6.783/74 proíbe expressamente a utilização das designações hierárquicas da Polícia Militar por entidades civis, agremiações ou empresas privadas, resguardando os títulos e postos como exclusividade dos militares do Estado e Forças Armadas.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_073",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Cumprimento de Ordem e Responsabilidade do Comandante",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q073] No âmbito do Estatuto dos Policiais Militares de PE, a responsabilidade integral pelas ordens que der, pelas instruções que ministrar e pelas consequências de sua execução recai sobre:",
    "options": [
      "A autoridade militar que emitir a ordem ou instrução funcional.",
      "O militar subordinado mais moderno que estiver escalado como motorista da guarnição.",
      "O Ministério Público Militar em conjunto com a Procuradoria Geral do Estado.",
      "O Poder Legislativo Estadual por meio da Comissão de Defesa Social.",
      "A associação de praças e oficiais que representar a categoria em juízo."
    ],
    "correctIndex": 0,
    "explanation": "O Estatuto consagra o princípio fundamental de que o comandante/superior é integralmente responsável pelas ordens que emitir e pelas consequências decorrentes de sua fiel execução pelos subordinados, cabendo-lhe agir com prudência e legalidade.",
    "fundamentacaoLegal": "Arts. 38 a 40 da Lei Estadual nº 6.783/1974.",
    "hint": "Quem dá a ordem responde integralmente por suas consequências e legitimidade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "O superior responde pelo que manda o subordinado fazer: a responsabilidade é de quem comanda.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O Estatuto consagra o princípio fundamental de que o comandante/superior é integralmente responsável pelas ordens que emitir e pelas consequências decorrentes de sua fiel execução pelos subordinados, cabendo-lhe agir com prudência e legalidade.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_074",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Dever de Urbanidade e Discrição",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q074] Ao policial militar de Pernambuco é imposto o dever de proceder de maneira ilibada na vida pública e na vida particular. No relacionamento com a população civil nas ruas, o policial militar deve:",
    "options": [
      "Exigir tratamento de vossa excelência por todos os transeuntes sob pena de prisão por desacato.",
      "Recusar prestar informações de orientação urbana a turistas na capital e no interior.",
      "Utilizar linguagem intimidatória e agressiva em qualquer abordagem preventiva simples.",
      "Reter os aparelhos de telefonia celular dos abordados sem autorização legal ou flagrante.",
      "Proceder com urbanidade, firmeza, respeito aos direitos humanos e cortesia cívica, sem transigir no cumprimento rigoroso do dever legal."
    ],
    "correctIndex": 4,
    "explanation": "A conduta do policial militar no policiamento ostensivo combina firmeza técnica operacional e urbanidade no trato com os cidadãos (art. 28 do Estatuto), preservando a imagem da PMPE como instituição protetora dos direitos da sociedade pernambucana.",
    "fundamentacaoLegal": "Art. 28 da Lei Estadual nº 6.783/1974.",
    "hint": "Policiamento ostensivo: firmeza, respeito, cortesia e estrita legalidade!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Militar padrão: firme na lei, educado no trato e protetor do cidadão.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. A conduta do policial militar no policiamento ostensivo combina firmeza técnica operacional e urbanidade no trato com os cidadãos (art. 28 do Estatuto), preservando a imagem da PMPE como instituição protetora dos direitos da sociedade pernambucana."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_075",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Estatuto da PMPE (Lei nº 6.783/74) • Extinção da Punibilidade Disciplinar",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q075] A extinção da punibilidade disciplinar na Polícia Militar de Pernambuco ocorre, dentre outras causas, pela prescrição da transgressão disciplinar e pelo(a):",
    "options": [
      "Votação favorável da Câmara Municipal de Vereadores da cidade do fato.",
      "Apresentação de atestado de bons antecedentes escolares do ensino médio.",
      "Mudança voluntária de endereço residencial para outro bairro da comarca.",
      "Interposição de pedido de reconsideração sem efeito suspensivo.",
      "Falecimento do policial militar indigitado autor da infração."
    ],
    "correctIndex": 4,
    "explanation": "A morte do militar extingue a punibilidade na esfera disciplinar (assim como na esfera penal, art. 107, I do CP), pois a pena e a sanção administrativa não passam da pessoa do infrator (princípio da pessoalidade da pena, art. 5º, XLV da CF/88).",
    "fundamentacaoLegal": "Art. 5º, XLV da CF/88 e Princípios do Direito Administrativo Disciplinar Militar.",
    "hint": "Morte do militar: extingue a punibilidade disciplinar imediatamente!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Faleceu o militar: extingue o processo disciplinar e a punição.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. A morte do militar extingue a punibilidade na esfera disciplinar (assim como na esfera penal, art. 107, I do CP), pois a pena e a sanção administrativa não passam da pessoa do infrator (princípio da pessoalidade da pena, art. 5º, XLV da CF/88)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_076",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Organização Básica da PMPE (Art. 1º e 2º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q076] Conforme a Lei Complementar Estadual nº 108/2008, a estrutura da Polícia Militar de Pernambuco é organizada em níveis fundamentais de administração compreendendo:",
    "options": [
      "Diretoria Central de Comércio e Coordenadoria Geral de Sindicatos de Praças.",
      "Conselho Deliberativo Municipal e Comitê Gestor das Forças Armadas da União.",
      "Vara de Execuções Penais Militares e Juizados Especiais de Segurança Pública.",
      "Subprefeituras Regionais Integradas e Delegacias de Polícia Judiciária Marítima.",
      "Órgãos de Direção Geral, Órgãos de Direção Setorial, Órgãos de Apoio e Órgãos de Execução."
    ],
    "correctIndex": 4,
    "explanation": "A LC nº 108/2008 estrutura a PMPE em quatro grandes níveis organizacionais: 1) Órgãos de Direção Geral (Comando Geral e Estado-Maior Geral); 2) Órgãos de Direção Setorial; 3) Órgãos de Apoio (Saúde, Ensino, Logística); 4) Órgãos de Execução (Diretorias Integradas e Batalhões/Companhias Independentes).",
    "fundamentacaoLegal": "Arts. 1º e 2º da Lei Complementar Estadual nº 108/2008.",
    "hint": "4 níveis da LC 108/08: Direção Geral, Direção Setorial, Apoio e Execução!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Estrutura da PMPE: Direção Geral manda, Apoio sustenta, Execução vai pra rua combater.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. A LC nº 108/2008 estrutura a PMPE em quatro grandes níveis organizacionais: 1) Órgãos de Direção Geral (Comando Geral e Estado-Maior Geral); 2) Órgãos de Direção Setorial; 3) Órgãos de Apoio (Saúde, Ensino, Logística); 4) Órgãos de Execução (Diretorias Integradas e Batalhões/Companhias Independentes)."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_077",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Comando Geral da PMPE",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q077] O Comandante-Geral da Polícia Militar de Pernambuco, órgão máximo de Direção Geral:",
    "options": [
      "É eleito por sufrágio universal de todos os cabos e soldados com voto secreto a cada 2 anos.",
      "É indicado pelo Presidente do Tribunal de Justiça de Pernambuco dentre civis com bacharelado em direito.",
      "É nomeado pelo Governador do Estado e escolhido dentre os Oficiais da ativa do último posto do Quadro de Oficiais da Polícia Militar (Coronel PM).",
      "Pode ser qualquer cidadão brasileiro nato que tenha cumprido o serviço militar obrigatório aos 18 anos.",
      "É subordinado hierarquicamente ao Comandante da Guarda Municipal do Recife."
    ],
    "correctIndex": 2,
    "explanation": "O Comandante-Geral da PMPE é nomeado por ato do Governador do Estado e escolhido dentre os Coronéis da ativa do Quadro de Oficiais Policiais Militares (QOPM), exercendo o comando supremo da Corporação.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008 e Constituição Estadual.",
    "hint": "Comandante-Geral é NOMEADO PELO GOVERNADOR dentre os CORONÉIS DA ATIVA da PMPE!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Comandante-Geral tem que ser Coronel da ativa nomeado pelo Governador.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O Comandante-Geral da PMPE é nomeado por ato do Governador do Estado e escolhido dentre os Coronéis da ativa do Quadro de Oficiais Policiais Militares (QOPM), exercendo o comando supremo da Corporação.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_078",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Estado-Maior Geral (EMG)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q078] O Estado-Maior Geral (EMG) da PMPE, no âmbito dos Órgãos de Direção Geral da Corporação, tem por atribuição precípua:",
    "options": [
      "Realizar o policiamento de trânsito urbano nas rodovias estaduais privatizadas.",
      "Fiscalizar o cumprimento de penas de reclusão em penitenciárias federais.",
      "Assessorar o Comandante-Geral no planejamento estratégico, organização, coordenação, fiscalização e controle de todas as atividades da Polícia Militar.",
      "Julgar ações cíveis de usucapião sobre terras devolutas pertencentes ao Estado.",
      "Conceder porte de arma de fogo particular a cidadãos estrangeiros sem residência fixa."
    ],
    "correctIndex": 2,
    "explanation": "O Estado-Maior Geral (EMG) é o órgão de direção geral responsável perante o Comandante-Geral pelo planejamento estratégico da corporação, estudo doutrinário, diretrizes de emprego operacional, logística e gestão global da PMPE.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Estado-Maior Geral é o 'Cérebro' do planejamento estratégico e assessoria ao Comandante-Geral!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "EMG é quem planeja tudo que a tropa vai fazer na rua.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. O Estado-Maior Geral (EMG) é o órgão de direção geral responsável perante o Comandante-Geral pelo planejamento estratégico da corporação, estudo doutrinário, diretrizes de emprego operacional, logística e gestão global da PMPE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_079",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Diretorias Integradas (DINTER I e DINTER II)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q079] As Diretorias Integradas do Interior da PMPE (DINTER I e DINTER II), no nível de execução operacional descentralizada, têm suas sedes e áreas de responsabilidade distribuídas no território pernambucano, abrangendo:",
    "options": [
      "A DINTER I apenas a ilha de Fernando de Noronha; e a DINTER II as praias de Boa Viagem e Piedade.",
      "Ambas a Região Metropolitana do Recife com foco no transporte rodoviário de cargas.",
      "A DINTER I os municípios litorâneos do norte; e a DINTER II os bairros do centro histórico de Olinda.",
      "A DINTER I a Região do Agreste e da Zona da Mata (com sede em Caruaru); e a DINTER II a Região do Sertão de Pernambuco (com sede em Petrolina).",
      "Exclusivamente as rodovias federais operadas pela Polícia Rodoviária Federal."
    ],
    "correctIndex": 3,
    "explanation": "A estrutura operacional da PMPE divide o interior em duas grandes Diretorias: DINTER I (Agreste e Mata, com sede no município de Caruaru) e DINTER II (Sertão pernambucano, com sede no município de Petrolina), coordenando os diversos batalhões (BPM) e companhias independentes (CIPM) dessas regiões.",
    "fundamentacaoLegal": "Lei Complementar nº 108/2008 e Decretos Organizacionais da PMPE.",
    "hint": "DINTER I = Agreste/Mata (sede Caruaru). DINTER II = Sertão (sede Petrolina)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Interior dividido: DINTER I em Caruaru (Agreste); DINTER II em Petrolina (Sertão).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. A estrutura operacional da PMPE divide o interior em duas grandes Diretorias: DINTER I (Agreste e Mata, com sede no município de Caruaru) e DINTER II (Sertão pernambucano, com sede no município de Petrolina), coordenando os diversos batalhões (BPM) e companhias independentes (CIPM) dessas regiões.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_080",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • CPC e CPM",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q080] No âmbito da Região Metropolitana do Recife, a execução do policiamento ostensivo geral da PMPE é coordenada por duas grandes Diretorias Integradas:",
    "options": [
      "O Batalhão Florestal do Capibaribe e a Capitania dos Portos de Pernambuco.",
      "O Departamento de Estradas de Rodagem e a Companhia de Trânsito Municipal.",
      "A Guarda Portuária de Suape e o Batalhão Ferroviário Metropolitano de Jaboatão.",
      "O Comando de Policiamento da Capital (CPC), responsável pelo Recife; e o Comando de Policiamento Metropolitano (CPM), responsável pelos demais municípios da Região Metropolitana.",
      "A Diretoria de Patrimônio Histórico de Olinda e a Coordenadoria de Defesa Civil da Capital."
    ],
    "correctIndex": 3,
    "explanation": "O CPC (Comando de Policiamento da Capital) é encarregado da cidade do Recife (11º, 12º, 13º, 16º e 19º BPMs). O CPM (Comando de Policiamento Metropolitano) responde pelos municípios da RMR como Olinda, Jaboatão dos Guararapes, Paulista, Camaragibe, Cabo de Santo Agostinho, Igarassu (1º, 6º, 17º, 18º, 20º, 25º BPMs).",
    "fundamentacaoLegal": "Lei Complementar nº 108/2008.",
    "hint": "CPC = Capital (Recife). CPM = Municípios da Região Metropolitana (Olinda, Jaboatão, etc.)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "CPC é Recife puro; CPM são as cidades vizinhas da Grande Recife.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O CPC (Comando de Policiamento da Capital) é encarregado da cidade do Recife (11º, 12º, 13º, 16º e 19º BPMs). O CPM (Comando de Policiamento Metropolitano) responde pelos municípios da RMR como Olinda, Jaboatão dos Guararapes, Paulista, Camaragibe, Cabo de Santo Agostinho, Igarassu (1º, 6º, 17º, 18º, 20º, 25º BPMs).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_081",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Diretoria Integrada Especializada (DIRESP)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q081] A Diretoria Integrada Especializada (DIRESP) da Polícia Militar de Pernambuco é o órgão de execução responsável por coordenar:",
    "options": [
      "Exclusivamente as unidades médicas e odontológicas do Centro Médico Hospitalar da PMPE.",
      "O corpo de bombeiros voluntários civis credenciados pelo Ministério da Justiça.",
      "As escolas públicas de ensino fundamental que possuem gestão compartilhada militar.",
      "As unidades operacionais especializadas de missões especiais e táticas da Corporação, tais como BOPE, BPChoque, CIPOMA, BPTran, BPRv, RPMon e CIPCães.",
      "O arquivo histórico dos oficiais combatentes da Revolução Pernambucana de 1817."
    ],
    "correctIndex": 3,
    "explanation": "A DIRESP coordena as forças táticas e de pronto emprego operacional da PMPE: Batalhão de Operações Policiais Especiais (BOPE), Batalhão de Polícia de Choque (BPChoque), Batalhão de Polícia Rodoviária (BPRv), Batalhão de Polícia de Trânsito (BPTran), Companhia Independente de Policiamento do Meio Ambiente (CIPOMA), Regimento de Polícia Montada (RPMon - Dias Cardoso) e Companhia Independente de Cães (CIPCães).",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "DIRESP coordena as tropas de elite e especializadas: BOPE, Choque, Trânsito, Rodoviário, Cavalaria, Ambiental e Cães!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "DIRESP é a casa das tropas especiais (BOPE, Choque, Cavalaria e Cães).",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. A DIRESP coordena as forças táticas e de pronto emprego operacional da PMPE: Batalhão de Operações Policiais Especiais (BOPE), Batalhão de Polícia de Choque (BPChoque), Batalhão de Polícia Rodoviária (BPRv), Batalhão de Polícia de Trânsito (BPTran), Companhia Independente de Policiamento do Meio Ambiente (CIPOMA), Regimento de Polícia Montada (RPMon - Dias Cardoso) e Companhia Independente de Cães (CIPCães).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_082",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • BOPE (Batalhão de Operações Policiais Especiais)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q082] O Batalhão de Operações Policiais Especiais (BOPE) da PMPE tem como missão institucional primordial:",
    "options": [
      "A emissão de carteiras de habilitação e cobrança do imposto sobre propriedade de veículos.",
      "Atuar em ocorrências policiais de altíssima complexidade e criticidade, tais como resgate de reféns, ocorrências com explosivos, intervenções táticas em ambientes hostis e combate a ações criminosas ultraviolentas (novo cangaço).",
      "O policiamento ostensivo a pé exclusivo nas imediações de bibliotecas públicas estaduais.",
      "O atendimento médico ambulatorial de rotina a familiares de policiais militares da reserva.",
      "A fiscalização de pesos e medidas em feiras livres municipais de Caruaru e Garanhuns."
    ],
    "correctIndex": 1,
    "explanation": "O BOPE da PMPE é a unidade de elite de operações especiais para situações de crise extrema: gerenciamento de crises com reféns, ações antibombas, tiros de precisão (snipers) e combate a quadrilhas armadas de roubo a bancos e assaltos a cidades (novo cangaço).",
    "fundamentacaoLegal": "Decreto de Criação do BOPE/PMPE e LC nº 108/2008.",
    "hint": "BOPE: Crises de altíssima complexidade, resgate de reféns, bombas e antiterrorismo!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "BOPE entra em ação quando a ocorrência é de altíssimo risco e complexidade tática.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O BOPE da PMPE é a unidade de elite de operações especiais para situações de crise extrema: gerenciamento de crises com reféns, ações antibombas, tiros de precisão (snipers) e combate a quadrilhas armadas de roubo a bancos e assaltos a cidades (novo cangaço).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_083",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • CIPOMA (Policiamento Ambiental)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q083] A Companhia Independente de Policiamento do Meio Ambiente (CIPOMA) da Polícia Militar de Pernambuco atua especificamente na:",
    "options": [
      "Fiscalização de crimes tributários aduaneiros no Aeroporto Internacional dos Guararapes.",
      "Segurança ostensiva exclusiva no plenário da Assembleia Legislativa de Pernambuco.",
      "Guarda e custódia de presos provisórios recolhidos no Complexo Prisional do Curado.",
      "Investigação judiciária sigilosa de fraudes em concursos públicos estaduais.",
      "Proteção e fiscalização florestal, combate a crimes ambientais contra a fauna e a flora, preservação de unidades de conservação e apoio a órgãos de fiscalização ecológica como a CPRH e o IBAMA."
    ],
    "correctIndex": 4,
    "explanation": "A CIPOMA é a unidade especializada da PMPE dedicada à proteção ecológica, prevenção e repressão a crimes ambientais (Lei 9.605/98), caça e tráfico de animais silvestres, desmatamento ilegal e preservação dos biomas da Caatinga, Mata Atlântica e manguezais em Pernambuco.",
    "fundamentacaoLegal": "LC nº 108/2008 e Normas Organizacionais da PMPE.",
    "hint": "CIPOMA = Policiamento do MEIO AMBIENTE (fauna, flora, rios, florestas e unidades de conservação)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "CIPOMA cuida da natureza e combate os crimes ambientais em PE.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. A CIPOMA é a unidade especializada da PMPE dedicada à proteção ecológica, prevenção e repressão a crimes ambientais (Lei 9.605/98), caça e tráfico de animais silvestres, desmatamento ilegal e preservação dos biomas da Caatinga, Mata Atlântica e manguezais em Pernambuco."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_084",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • BPTran vs. BPRv",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q084] No âmbito da segurança viária estadual, a correta distinção funcional entre o BPTran e o BPRv na PMPE é:",
    "options": [
      "O BPTran fiscaliza apenas aeronaves civis; o BPRv cuida exclusivamente do metrô do Recife.",
      "Ambos atuam apenas em rodovias federais sob concessão privada de pedágio.",
      "O BPTran fiscaliza ciclovias; o BPRv atua privativamente no transporte marítimo de balsas.",
      "O BPTran (Batalhão de Polícia de Trânsito) atua nas vias urbanas dos municípios conveniados; enquanto o BPRv (Batalhão de Polícia Rodoviária) é encarregado do patrulhamento e fiscalização nas rodovias estaduais (PEs).",
      "Não há distinção, sendo unidades fundidas que só operam em período diurno."
    ],
    "correctIndex": 3,
    "explanation": "O BPTran é especializado no policiamento e fiscalização do trânsito urbano nas vias municipais e metropolitanas (em convênio com órgãos de trânsito locais). O BPRv é especializado no policiamento ostensivo e fiscalização das rodovias estaduais (rodovias PE).",
    "fundamentacaoLegal": "LC nº 108/2008 e Art. 23 do CTB.",
    "hint": "BPTran = Trânsito urbano (cidades). BPRv = Rodovias estaduais (PEs)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "BPTran na cidade; BPRv na pista da rodovia estadual.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O BPTran é especializado no policiamento e fiscalização do trânsito urbano nas vias municipais e metropolitanas (em convênio com órgãos de trânsito locais). O BPRv é especializado no policiamento ostensivo e fiscalização das rodovias estaduais (rodovias PE).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_085",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • BEPI / CIOE (Policiamento do Interior / Caatinga)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q085] O Batalhão Especializado de Policiamento do Interior (BEPI), outrora denominado Companhia Independente de Operações e Sobrevivência em Área de Caatinga (CIOSAC), é especializado em:",
    "options": [
      "Operações de mergulho autônomo nas praias da orla de Jaboatão e de Paulista.",
      "Operações de patrulhamento tático e combate em ambiente rural inóspito de Caatinga, combate ao cultivo de maconha no polígono da maconha e enfrentamento ao crime organizado no sertão e agreste.",
      "Segurança pessoal de embaixadores e diplomatas em visita protocolar ao Porto do Recife.",
      "Combate a incêndios urbanos e salvamento em altura em prédios comerciais da capital.",
      "Auditoria de contas contábeis da Diretoria de Apoio Logístico da Corporação."
    ],
    "correctIndex": 1,
    "explanation": "O BEPI (antiga CIOSAC) é a tropa de elite sertaneja da PMPE, especialista em operações táticas de Caatinga, rastreamento de quadrilhas de assalto a banco, erradicação de plantios ilícitos no Sertão do São Francisco e combate armado em ambiente de semiárido.",
    "fundamentacaoLegal": "LC nº 108/2008 e Decretos Organizacionais da PMPE.",
    "hint": "BEPI / CIOSAC: Tropa de elite de Caatinga no Sertão e Agreste pernambucano!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Guerreiros da Caatinga da PMPE: BEPI opera no calor e no mato espinhento do Sertão.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O BEPI (antiga CIOSAC) é a tropa de elite sertaneja da PMPE, especialista em operações táticas de Caatinga, rastreamento de quadrilhas de assalto a banco, erradicação de plantios ilícitos no Sertão do São Francisco e combate armado em ambiente de semiárido.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_086",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • BIESP (Batalhões Integrados Especializados)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q086] A criação dos Batalhões Integrados Especializados (1º BIESP em Caruaru e 2º BIESP em Petrolina) teve por objetivo estratégico:",
    "options": [
      "Descentralizar o policiamento especializado no interior do Estado, reunindo em uma única unidade modalidades de Choque, Trânsito, Ronda com Cães e Motopatrulhamento (ROCAM).",
      "Substituir todos os batalhões convencionais de área do Agreste e Sertão pernambucano.",
      "Criar uma nova polícia de fronteira subordinada ao Ministério da Integração Nacional.",
      "Garantir a aposentadoria compulsória de coronéis que residam no interior de Pernambuco.",
      "Privatizar os serviços de monitoramento de câmeras de segurança dos municípios sertanejos."
    ],
    "correctIndex": 0,
    "explanation": "Os BIESPs (1º BIESP em Caruaru e 2º BIESP em Petrolina) integraram várias especialidades da PMPE no interior (Choque, ROCAM, Trânsito e Canil), proporcionando pronta resposta a ocorrências táticas sem depender do envio de tropas do Recife.",
    "fundamentacaoLegal": "Decretos Estaduais de Criação do 1º e 2º BIESP e LC 108/2008.",
    "hint": "BIESP reúne Choque, ROCAM, Trânsito e Cães no interior (Caruaru e Petrolina)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "BIESP = 'Mini-DIRESP' no interior (Caruaru e Petrolina com Choque e ROCAM próprios).",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. Os BIESPs (1º BIESP em Caruaru e 2º BIESP em Petrolina) integraram várias especialidades da PMPE no interior (Choque, ROCAM, Trânsito e Canil), proporcionando pronta resposta a ocorrências táticas sem depender do envio de tropas do Recife.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_087",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Diretoria de Gestão de Pessoas (DGP)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q087] A Diretoria de Gestão de Pessoas (DGP) da Polícia Militar de Pernambuco, como órgão de apoio setorial, tem por incumbência:",
    "options": [
      "A compra e importação de armamentos bélicos pesados para as viaturas do batalhão de choque.",
      "O treinamento físico e tático dos cadetes da Academia de Polícia Militar do Paudalho.",
      "O planejamento, execução, controle e fiscalização das atividades de administração de pessoal, cadastro, movimentação, promoções, direitos, deveres e inatividade dos militares.",
      "O patrulhamento preventivo escolar nos colégios públicos da rede estadual de ensino.",
      "A auditoria médica pericial sobre concessão de auxílio-acidente pelo INSS."
    ],
    "correctIndex": 2,
    "explanation": "A DGP é responsável por toda a vida funcional do militar estadual da PMPE: admissões, assentamentos, contagem de tempo de serviço, promoções, licenças, escalas de férias e encaminhamento de processos de reserva e reforma.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "DGP cuida de toda a vida funcional e administrativa do policial militar!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Gestão de Pessoas: vida funcional do PM, da matrícula até a ida para a reserva.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Correta. A DGP é responsável por toda a vida funcional do militar estadual da PMPE: admissões, assentamentos, contagem de tempo de serviço, promoções, licenças, escalas de férias e encaminhamento de processos de reserva e reforma.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_088",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Diretoria de Ensino, Instrução e Pesquisa (DEIP)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q088] A formação, o aperfeiçoamento e a especialização dos policiais militares de Pernambuco são coordenados e supervisionados pela:",
    "options": [
      "Secretaria de Educação Básica do Município de Jaboatão dos Guararapes.",
      "Diretoria de Ensino, Instrução e Pesquisa (DEIP), por meio da Academia de Polícia Militar de Paudalho (APMP) e do Centro de Formação e Aperfeiçoamento de Praças (CFAP).",
      "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES).",
      "Fundação Joaquim Nabuco em parceria com a Universidade Federal de Pernambuco.",
      "Escola de Sargentos das Armas do Exército Brasileiro localizada em Três Corações."
    ],
    "correctIndex": 1,
    "explanation": "A DEIP é o órgão de apoio que planeja, coordena e fiscaliza o ensino na PMPE. Sob sua subordinação direta estão a APMP (Academia de Polícia Militar de Paudalho - formação de oficiais) e o CFAP (Centro de Formação e Aperfeiçoamento de Praças - formação de cabos e soldados).",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Ensino e instrução na PMPE: DEIP (com a APMP em Paudalho e o CFAP)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "DEIP cuida dos cursos e escolas da PMPE: oficiais na APMP e praças no CFAP.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. A DEIP é o órgão de apoio que planeja, coordena e fiscaliza o ensino na PMPE. Sob sua subordinação direta estão a APMP (Academia de Polícia Militar de Paudalho - formação de oficiais) e o CFAP (Centro de Formação e Aperfeiçoamento de Praças - formação de cabos e soldados).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_089",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Diretoria de Apoio Logístico (DAL)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q089] No organograma da Polícia Militar de Pernambuco, a responsabilidade pelo suprimento, manutenção de armamento, munição, viaturas, fardamento e equipamentos táticos cabe à:",
    "options": [
      "Diretoria de Inteligência e Contrainteligência Estratégica.",
      "Ouvidoria Geral da Secretaria de Planejamento e Gestão.",
      "Assessoria de Comunicação Social da Casa Militar.",
      "Comissão Permanente de Licitação do Tribunal de Contas do Estado.",
      "Diretoria de Apoio Logístico (DAL)."
    ],
    "correctIndex": 4,
    "explanation": "A DAL (Diretoria de Apoio Logístico) é o órgão responsável pelo suprimento e manutenção de todo o material bélico, viaturas, fardamentos, equipamentos de proteção individual e patrimônio móvel e imóvel da PMPE.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Armas, viaturas, munições e fardas: DIRETORIA DE APOIO LOGÍSTICO (DAL)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Logística (DAL) abastece a tropa com carro, arma, munição e colete.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. A DAL (Diretoria de Apoio Logístico) é o órgão responsável pelo suprimento e manutenção de todo o material bélico, viaturas, fardamentos, equipamentos de proteção individual e patrimônio móvel e imóvel da PMPE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_090",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Lei Complementar nº 108/2008 • Corregedoria Geral da SDS",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q090] A fiscalização das atividades funcionais, a correição disciplinar e a instauração de processos e procedimentos administrativos disciplinares contra integrantes da PMPE:",
    "options": [
      "Competem privativamente à Delegacia Especializada de Crimes Tributários de Pernambuco.",
      "São coordenadas pela Corregedoria Geral da Secretaria de Defesa Social (SDS), órgão correcional do sistema de segurança pública estadual, sem prejuízo das comissões disciplinares das OPMs.",
      "São atribuídas aos magistrados titulares das Varas de Família e Sucessões da Capital.",
      "São realizadas por auditoria externa contratada mediante pregão eletrônico internacional.",
      "Restringem-se unicamente às condutas praticadas durante o período de férias dos militares."
    ],
    "correctIndex": 1,
    "explanation": "A Corregedoria Geral da SDS de Pernambuco atua na fiscalização e disciplina integrada de todas as forças operacionais da SDS (PMPE, CBMPE, PCPE e Polícia Científica), apurando desvios de conduta e instaurando PADs e Conselhos de Disciplina/Justificação.",
    "fundamentacaoLegal": "Lei Complementar Estadual de criação da Corregedoria Geral da SDS.",
    "hint": "Órgão correicional disciplinar: CORREGEDORIA GERAL DA SDS!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Corregedoria da SDS fiscaliza e apura os desvios de conduta das forças de segurança de PE.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. A Corregedoria Geral da SDS de Pernambuco atua na fiscalização e disciplina integrada de todas as forças operacionais da SDS (PMPE, CBMPE, PCPE e Polícia Científica), apurando desvios de conduta e instaurando PADs e Conselhos de Disciplina/Justificação.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_091",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Segurança Pública (Art. 100)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q091] Conforme o art. 100 da Constituição do Estado de Pernambuco de 1989, a segurança pública, dever do Estado, direito e responsabilidade de todos:",
    "options": [
      "Constitui atividade facultativa exercida discricionariamente pelos municípios que possuam receita própria.",
      "É incumbência privativa e exclusiva dos guardas patrimoniais das empresas concessionárias.",
      "Deve ser descentralizada com entrega das funções de policiamento armado aos sindicatos.",
      "É exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, por meio dos órgãos estaduais competentes.",
      "Fica restrita ao combate de crimes de natureza exclusivamente eleitoral em anos de pleito."
    ],
    "correctIndex": 3,
    "explanation": "O art. 100 da Constituição Estadual reproduz a matriz do art. 144 da CF/88: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio'.",
    "fundamentacaoLegal": "Art. 100 da Constituição do Estado de Pernambuco de 1989.",
    "hint": "Segurança pública: dever do Estado, direito e responsabilidade de todos (incolumidade e ordem pública)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Texto sagrado da segurança: dever do Estado, direito e responsabilidade de todos.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 100 da Constituição Estadual reproduz a matriz do art. 144 da CF/88: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio'.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_092",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Órgãos de Segurança Pública (Art. 101)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q092] Nos termos do art. 101 da Constituição do Estado de Pernambuco, a segurança pública é exercida no âmbito estadual através dos seguintes órgãos regulares:",
    "options": [
      "Guarda Portuária, Receita Estadual e Tribunal de Contas de Pernambuco.",
      "Exército, Marinha, Aeronáutica e Polícia Rodoviária Federal.",
      "Polícia Judicial, Defensoria Pública e Ministério Público do Trabalho.",
      "Polícia Militar, Polícia Civil e Corpo de Bombeiros Militar.",
      "Conselho Estadual de Educação e Vigilância Sanitária Municipal."
    ],
    "correctIndex": 3,
    "explanation": "O art. 101 da Constituição Pernambucana elenca os órgãos estaduais de segurança pública: I - Polícia Civil; II - Polícia Militar; III - Corpo de Bombeiros Militar (além da Polícia Penal acrescentada pela EC 49/2020).",
    "fundamentacaoLegal": "Art. 101 da Constituição do Estado de Pernambuco de 1989.",
    "hint": "Órgãos estaduais de segurança da Constituição de PE: Polícia Militar, Polícia Civil, Corpo de Bombeiros Militar e Polícia Penal!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Forças de segurança de PE: PM, PC, Bombeiros e Polícia Penal.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O art. 101 da Constituição Pernambucana elenca os órgãos estaduais de segurança pública: I - Polícia Civil; II - Polícia Militar; III - Corpo de Bombeiros Militar (além da Polícia Penal acrescentada pela EC 49/2020).",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_093",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Subordinação da PMPE (Art. 101, § 1º)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q093] Conforme a Constituição de Pernambuco (art. 101, § 1º), a Polícia Militar e o Corpo de Bombeiros Militar, forças auxiliares e reserva do Exército:",
    "options": [
      "Subordinam-se ao Governador do Estado.",
      "Subordinam-se ao Presidente da Assembleia Legislativa do Estado.",
      "Subordinam-se diretamente ao Prefeito da Capital do Estado.",
      "São órgãos desvinculados do Poder Executivo com orçamento autônomo privativo.",
      "Subordinam-se exclusivamente ao Comando Militar do Nordeste em tempo de paz."
    ],
    "correctIndex": 0,
    "explanation": "O art. 101, § 1º da Constituição Estadual e o art. 144, § 6º da CF/88 determinam com clareza solar: a PMPE e o CBMPE subordinam-se ao GOVERNADOR DO ESTADO (Comandante Supremo das Forças Militares Estaduais).",
    "fundamentacaoLegal": "Art. 101, § 1º da Constituição de Pernambuco de 1989 e Art. 144, § 6º da CF/88.",
    "hint": "Subordinação direta da PMPE: AO GOVERNADOR DO ESTADO!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "O chefe maior da Polícia Militar em Pernambuco é o Governador do Estado.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O art. 101, § 1º da Constituição Estadual e o art. 144, § 6º da CF/88 determinam com clareza solar: a PMPE e o CBMPE subordinam-se ao GOVERNADOR DO ESTADO (Comandante Supremo das Forças Militares Estaduais).",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_094",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Competência da PMPE (Art. 102)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q094] À Polícia Militar de Pernambuco, instituição permanente, cabe, segundo o art. 102 da Constituição Estadual:",
    "options": [
      "As funções exclusivas de polícia judiciária e apuração de infrações penais comuns.",
      "A polícia ostensiva e a preservação da ordem pública.",
      "O patrulhamento das fronteiras e a fiscalização de passaportes de imigrantes.",
      "A emissão de pareceres jurídicos sobre licitações de concessão rodoviária.",
      "A execução de mandados de busca e apreensão exclusivamente na esfera trabalhista."
    ],
    "correctIndex": 1,
    "explanation": "O art. 102 da Constituição de PE estabelece: 'À Polícia Militar, força auxiliar e reserva do Exército, incumbe a polícia ostensiva e a preservação da ordem pública'. Polícia judiciária e investigação de crimes comuns cabe à Polícia Civil.",
    "fundamentacaoLegal": "Art. 102 da Constituição do Estado de Pernambuco de 1989.",
    "hint": "Competência da PMPE: POLÍCIA OSTENSIVA E PRESERVAÇÃO DA ORDEM PÚBLICA!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "PMPE faz o policiamento ostensivo e preserva a ordem pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 102 da Constituição de PE estabelece: 'À Polícia Militar, força auxiliar e reserva do Exército, incumbe a polícia ostensiva e a preservação da ordem pública'. Polícia judiciária e investigação de crimes comuns cabe à Polícia Civil.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_095",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Regime Estatutário dos Militares (Art. 103)",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q095] Nos termos do art. 103 da Constituição Estadual, os membros da Polícia Militar e do Corpo de Bombeiros Militar são militares do Estado, aos quais:",
    "options": [
      "Aplica-se o regime geral da CLT com pagamento obrigatório de FGTS e horas extras.",
      "Aplica-se regime estatutário próprio fixado em lei específica, vedada a sindicalização e a greve.",
      "É assegurado o direito irrestrito de filiação partidária e comícios na ativa.",
      "É facultada a prestação de serviços de segurança privada com viatura oficial nas folgas.",
      "Garante-se aposentadoria voluntária aos 10 anos de serviço independentemente de idade."
    ],
    "correctIndex": 1,
    "explanation": "O art. 103 estabelece o regime jurídico próprio dos militares estaduais, garantindo direitos constitucionais compatíveis com a caserna e reiterando a vedação expressa à greve e à sindicalização.",
    "fundamentacaoLegal": "Art. 103 da Constituição do Estado de Pernambuco de 1989.",
    "hint": "Militares do Estado têm regime estatutário próprio e NÃO PODEM fazer greve nem se sindicalizar!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Policial militar tem estatuto próprio: não é CLT e não pode fazer greve.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. O art. 103 estabelece o regime jurídico próprio dos militares estaduais, garantindo direitos constitucionais compatíveis com a caserna e reiterando a vedação expressa à greve e à sindicalização.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_096",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Auditoria Militar Estadual",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q096] Em conformidade com o art. 125, § 3º da Constituição Federal e a Constituição de Pernambuco, a Justiça Militar de Pernambuco é constituída em primeiro grau:",
    "options": [
      "Exclusivamente por oficiais coronéis da ativa sem a presença de juízes togados civis.",
      "Pelo Tribunal do Júri das comarcas onde estiverem sediados os batalhões operacionais.",
      "Por tribunais arbitrais de conciliação comunitária presididos pelo Comandante-Geral.",
      "Pelos juízes de direito do juízo militar e pelos Conselhos de Justiça (Conselho Especial e Conselho Permanente de Justiça).",
      "Pelo Juizado Especial Cível e Criminal das Relações Militares de Defesa Social."
    ],
    "correctIndex": 3,
    "explanation": "A Justiça Militar Estadual de 1º grau compõe-se pelo Juiz de Direito da Vara de Justiça Militar (Auditoria Militar) e pelos Conselhos de Justiça: Conselho Especial (julga oficiais) e Conselho Permanente (julga praças), presididos pelo juiz togado e compostos por quatro juízes militares oficiais.",
    "fundamentacaoLegal": "Art. 125, § 3º da CF/88 e Código de Organização Judiciária de Pernambuco.",
    "hint": "1º Grau Militar: Juiz de Direito togado + Conselhos de Justiça (Especial para oficiais, Permanente para praças)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Julgamento militar: Juiz togado + 4 oficiais no Conselho de Justiça.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. A Justiça Militar Estadual de 1º grau compõe-se pelo Juiz de Direito da Vara de Justiça Militar (Auditoria Militar) e pelos Conselhos de Justiça: Conselho Especial (julga oficiais) e Conselho Permanente (julga praças), presididos pelo juiz togado e compostos por quatro juízes militares oficiais.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_097",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Competência do Júri em Crimes Militares",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q097] O policial militar em serviço ostensivo que cometer crime doloso contra a vida de um civil será processado e julgado:",
    "options": [
      "Pelo Conselho Permanente da Justiça Militar Estadual em sessão secreta.",
      "Pela Justiça Comum, perante o Tribunal do Júri da respectiva Comarca, nos termos do art. 125, § 4º da Constituição Federal.",
      "Pelo Superior Tribunal Militar em grau originário de recurso de ofício.",
      "Pelo Governador do Estado com assistência jurídica da Procuradoria Geral.",
      "Pela Corte Interamericana de Direitos Humanos com sede na Costa Rica."
    ],
    "correctIndex": 1,
    "explanation": "A redação do art. 125, § 4º da CF/88 (introduzida pela EC 45/2004 e pela Lei 9.299/96) é peremptória: os crimes dolosos contra a vida praticados por militares estaduais contra civil são de competência do TRIBUNAL DO JÚRI (Justiça Comum).",
    "fundamentacaoLegal": "Art. 125, § 4º da CF/88 e Art. 9º, parágrafo único do CPM.",
    "hint": "PM cometeu homicídio doloso contra CIVIL: VAI PRO TRIBUNAL DO JÚRI!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Homicídio doloso de civil praticado por militar = Júri Popular na Justiça Comum.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Correta. A redação do art. 125, § 4º da CF/88 (introduzida pela EC 45/2004 e pela Lei 9.299/96) é peremptória: os crimes dolosos contra a vida praticados por militares estaduais contra civil são de competência do TRIBUNAL DO JÚRI (Justiça Comum).",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_098",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Perda de Graduação da Praça e Condenação Criminal",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q098] Ao julgar o Tema 1.200 do STF e analisar o art. 125, § 4º da CF/88 e o Estatuto da PMPE, o Supremo Tribunal Federal fixou a tese de que a perda da graduação da PRAÇA:",
    "options": [
      "Pode decorrer de processo administrativo disciplinar conduzido pela corporação militar, sem necessidade de decisão judicial condenatória ou de processo judicial específico.",
      "Exige sempre decisão irrecorrível do Supremo Tribunal Federal com quórum qualificado.",
      "É proibida em tempo de paz para qualquer praça que tenha mais de 5 anos de serviço militar.",
      "Depende de autorização expressa outorgada pela Assembleia Legislativa do Estado.",
      "Só pode ser aplicada se a praça tiver sido condenada à pena de reclusão superior a 10 anos."
    ],
    "correctIndex": 0,
    "explanation": "O STF fixou tese de repercussão geral (Tema 1.200): a perda da graduação da praça militar pode ser decretada em processo administrativo disciplinar próprio (Conselho de Disciplina), independentemente de decisão judicial penal transitada em julgado (a exigência de decisão judicial do tribunal competente é restrita à perda do posto e da patente de OFICIAIS).",
    "fundamentacaoLegal": "STF - Tema 1.200 de Repercussão Geral (RE 1.392.443).",
    "hint": "Praça pode perder a farda em Processo Administrativo Disciplinar (PAD/Conselho de Disciplina)! Não precisa de ordem do Tribunal.",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Oficial precisa de decisão do Tribunal de Justiça; Praça o Comandante-Geral pode expulsar no PAD.",
    "porqueErrou": {
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Correta. O STF fixou tese de repercussão geral (Tema 1.200): a perda da graduação da praça militar pode ser decretada em processo administrativo disciplinar próprio (Conselho de Disciplina), independentemente de decisão judicial penal transitada em julgado (a exigência de decisão judicial do tribunal competente é restrita à perda do posto e da patente de OFICIAIS).",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_099",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Inviolabilidade do Domicílio e Atuação Policial",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q099] A guarnição da Polícia Militar de Pernambuco pode ingressar legitimamente em domicílio alheio sem o consentimento do morador:",
    "options": [
      "A qualquer hora do dia ou da noite mediante simples suspeita subjetiva de fuga de suspeito.",
      "Exclusivamente durante o dia, mesmo quando houver pedido de socorro contra agressão doméstica.",
      "Apenas com autorização verbal concedida pelo síndico do edifício residencial.",
      "Em nenhum caso, pois a inviolabilidade do domicílio é direito absoluto sem exceções.",
      "Em caso de flagrante delito ou desastre, ou para prestar socorro, a qualquer hora do dia ou da noite; ou durante o dia, por determinação judicial."
    ],
    "correctIndex": 4,
    "explanation": "O art. 5º, XI da CF/88 estabelece as 4 exceções à inviolabilidade de domicílio: 1) flagrante delito (dia e noite); 2) desastre (dia e noite); 3) prestar socorro (dia e noite); 4) determinação judicial (APENAS DURANTE O DIA). O STF (Tema 280) exige fundadas razões prévias para o ingresso em flagrante.",
    "fundamentacaoLegal": "Art. 5º, XI da CF/88 e STF Tema 280.",
    "hint": "Sem consentimento: Flagrante, desastre e socorro (dia e noite). Mandado judicial: SÓ DURANTE O DIA!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Socorro, desastre e flagrante: pode entrar a qualquer hora; mandado do juiz: só de dia.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "3": "Você marcou (D): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Incorreta. A assertiva (D) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "E": "Correta. O art. 5º, XI da CF/88 estabelece as 4 exceções à inviolabilidade de domicílio: 1) flagrante delito (dia e noite); 2) desastre (dia e noite); 3) prestar socorro (dia e noite); 4) determinação judicial (APENAS DURANTE O DIA). O STF (Tema 280) exige fundadas razões prévias para o ingresso em flagrante."
    }
  },
  {
    "id": "leg_pmpe_inedita_100_100",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE (Estatuto)",
    "topicoEdital": "Constituição de Pernambuco • Uso Progressivo da Força e Direitos Humanos",
    "question": "[AOCP PMPE Inédita - Legislação da PMPE Q100] Na execução do policiamento ostensivo e na preservação da ordem pública, os integrantes da Polícia Militar de Pernambuco devem pautar o uso da força pelos princípios fundamentais da:",
    "options": [
      "Intimidação preliminar indiscriminada e presunção de culpa de qualquer suspeito abordado.",
      "Vingança pessoal e punição sumária no local da ocorrência para conter a criminalidade.",
      "Subordinação das garantias constitucionais às metas numéricas de apreensão bélica.",
      "Legalidade, necessidade, proporcionalidade, moderação e conveniência, priorizando métodos não letais e a preservação da vida.",
      "Impunidade absoluta dos operadores da segurança perante os órgãos de controle externo."
    ],
    "correctIndex": 3,
    "explanation": "O uso da força pela PMPE rege-se pelas normas da Portaria Interministerial nº 4.226/2010 e tratados internacionais de direitos humanos: Legalidade, Necessidade, Proporcionalidade, Moderação e Conveniência. A força letal é medida extrema e subsidiária de legítima defesa da vida humana.",
    "fundamentacaoLegal": "Princípios Básicos sobre o Uso da Força e Armas de Fogo (ONU) e Estatuto da PMPE.",
    "hint": "Princípios do uso da força: LEGALIDADE, NECESSIDADE, PROPORCIONALIDADE E MODERAÇÃO!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "caderno_100_legislacao_pmpe_aocp",
    "dicaMacete": "Uso da força policial: proporcional, necessário, legal e sempre preservando a vida.",
    "porqueErrou": {
      "0": "Você marcou (A): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "1": "Você marcou (B): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "2": "Você marcou (C): Incorreta de acordo com as normas estatutárias e institucionais da PMPE.",
      "4": "Você marcou (E): Incorreta de acordo com as normas estatutárias e institucionais da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "B": "Incorreta. A assertiva (B) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "C": "Incorreta. A assertiva (C) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE.",
      "D": "Correta. O uso da força pela PMPE rege-se pelas normas da Portaria Interministerial nº 4.226/2010 e tratados internacionais de direitos humanos: Legalidade, Necessidade, Proporcionalidade, Moderação e Conveniência. A força letal é medida extrema e subsidiária de legítima defesa da vida humana.",
      "E": "Incorreta. A assertiva (E) está em desconformidade com o Estatuto da PMPE (Lei Estadual nº 6.783/74), LC nº 108/2008 e Constituição Estadual de PE."
    }
  }
];
