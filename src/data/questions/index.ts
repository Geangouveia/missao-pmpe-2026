import type { QuizQuestion } from '../../types/game';
import { SIMULADO_SEMANA_1 } from './simuladoSemana1';
import { SIMULADO_SEMANA_2 } from './simuladoSemana2';
import { SIMULADO_SEMANA_3 } from './simuladoSemana3';
import { SIMULADO_SEMANA_4 } from './simuladoSemana4';
import { SIMULADO_COMPLETO_PMPE } from './simuladoCompletoPmpe';
import { SIMULADO_AOCP_ESPECIAL } from './simuladoAocpEspecial';
import { SIMULADO_AOCP_ELITE } from './simuladoAocpElite';
import { BANCO_QUESTOES_BLOCO_1 } from './bancoQuestoesBloco1';
import { BANCO_QUESTOES_BLOCO_2 } from './bancoQuestoesBloco2';
import { BANCO_QUESTOES_BLOCO_3 } from './bancoQuestoesBloco3';
import { BANCO_QUESTOES_EDITAL_200 } from './bancoQuestoesEdital200';

import { BANCO_LEGISLACAO_EXTRAVAGANTE } from './bancoQuestoesLegislacaoExtravagante';
import { BANCO_RACIOCINIO_PROBABILIDADE } from './bancoQuestoesRaciocinioLogicoProbabilidade';
import { BANCO_CONSTITUCIONAL_PMPE } from './bancoQuestoesDireitoConstitucional';
import { BANCO_PORTUGUES_AOCP } from './bancoQuestoesPortuguesAocp';
import { LEGISLACAO_PMPE_50_QUESTIONS } from './legislacaoPmpe50';

export {
  SIMULADO_SEMANA_1,
  SIMULADO_SEMANA_2,
  SIMULADO_SEMANA_3,
  SIMULADO_SEMANA_4,
  SIMULADO_COMPLETO_PMPE,
  SIMULADO_AOCP_ESPECIAL,
  SIMULADO_AOCP_ELITE,
  BANCO_QUESTOES_BLOCO_1,
  BANCO_QUESTOES_BLOCO_2,
  BANCO_QUESTOES_BLOCO_3,
  BANCO_QUESTOES_EDITAL_200,
  BANCO_LEGISLACAO_EXTRAVAGANTE,
  BANCO_RACIOCINIO_PROBABILIDADE,
  BANCO_CONSTITUCIONAL_PMPE,
  BANCO_PORTUGUES_AOCP,
  LEGISLACAO_PMPE_50_QUESTIONS
};

export const SIMULADOS_LIST = [
  { id: 'all', name: '⭐ Acervo Completo Soldado PMPE (1.520 Questões Comentadas)', count: 1520, tag: '⭐ Acervo Geral (1.520 Q)' },
  { id: 'caderno_leg_extravagante', name: '🚨 Bloco Especial: Legislação Extravagante (250 Questões)', count: 250, tag: '🚨 Leis Extravagantes (250 Q)' },
  { id: 'caderno_rlm_probabilidade', name: '🧠 Bloco Especial: RLM & Probabilidade com Passo a Passo (250 Questões)', count: 250, tag: '🧠 RLM & Probabilidade (250 Q)' },
  { id: 'caderno_const_pmpe', name: '⚖️ Bloco Especial: Direito Constitucional & Art. 144 (160 Questões)', count: 160, tag: '⚖️ Constitucional (160 Q)' },
  { id: 'caderno_portugues_aocp', name: '📖 Bloco Especial: Língua Portuguesa AOCP (150 Questões)', count: 150, tag: '📖 Português AOCP (150 Q)' },
  { id: 'caderno_pmpe_estatuto', name: '🛡️ Caderno Oficial: Legislação PMPE & Estatuto (Leis 6.783/74, 108/08, 11.817/00)', count: 94, tag: 'Estatuto PMPE (94 Q)' },
  { id: 'edital_200', name: 'Caderno Oficial Edital AOCP (100 Questões)', count: 100, tag: '🔥 Edital 100Q' },
  { id: 'banco_bloco1', name: 'Super Caderno Bloco I (Português & História de PE)', count: 100, tag: 'Bloco I (100 Q)' },
  { id: 'banco_bloco2', name: 'Super Caderno Bloco II (Raciocínio Lógico & Informática)', count: 100, tag: 'Bloco II (100 Q)' },
  { id: 'banco_bloco3', name: 'Super Caderno Bloco III (Direito, DH & Legislação PMPE)', count: 160, tag: 'Bloco III (160 Q)' },
  { id: 'aocp_elite', name: 'Caderno de Elite AOCP (Resoluções & Contas Tintim por Tintim)', count: 25, tag: 'Elite Didática' },
  { id: 'aocp_especial', name: 'Super Simulado Banca AOCP (Edital Oficial)', count: 30, tag: 'Foco AOCP' },
  { id: 'nuce_completo', name: 'Simulado Completo Soldado PMPE (NUCE)', count: 60, tag: 'Simulado PMPE' },
  { id: 'semana_1', name: '1ª Semana (Aulas ao Vivo)', count: 15, tag: 'Semana 1' },
  { id: 'semana_2', name: '2ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 2' },
  { id: 'semana_3', name: '3ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 3' },
  { id: 'semana_4', name: '4ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 4' },
];

export const ALL_QUESTIONS: QuizQuestion[] = [
  ...BANCO_LEGISLACAO_EXTRAVAGANTE,
  ...BANCO_RACIOCINIO_PROBABILIDADE,
  ...BANCO_CONSTITUCIONAL_PMPE,
  ...BANCO_PORTUGUES_AOCP,
  ...LEGISLACAO_PMPE_50_QUESTIONS,
  ...BANCO_QUESTOES_BLOCO_1,
  ...BANCO_QUESTOES_BLOCO_2,
  ...BANCO_QUESTOES_BLOCO_3,
  ...BANCO_QUESTOES_EDITAL_200,
  ...SIMULADO_AOCP_ELITE,
  ...SIMULADO_AOCP_ESPECIAL,
  ...SIMULADO_COMPLETO_PMPE,
  ...SIMULADO_SEMANA_1,
  ...SIMULADO_SEMANA_2,
  ...SIMULADO_SEMANA_3,
  ...SIMULADO_SEMANA_4
];
