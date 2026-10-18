import type { QuizQuestion } from '../../types/game';
import { SIMULADO_SEMANA_1 } from './simuladoSemana1';
import { SIMULADO_SEMANA_2 } from './simuladoSemana2';
import { SIMULADO_SEMANA_3 } from './simuladoSemana3';
import { SIMULADO_SEMANA_4 } from './simuladoSemana4';
import { SIMULADO_COMPLETO_PMPE } from './simuladoCompletoPmpe';
import { SIMULADO_AOCP_ESPECIAL } from './simuladoAocpEspecial';
import { SIMULADO_AOCP_ELITE } from './simuladoAocpElite';

import { BANCO_LEGISLACAO_EXTRAVAGANTE } from './bancoQuestoesLegislacaoExtravagante';
import { BANCO_RACIOCINIO_PROBABILIDADE } from './bancoQuestoesRaciocinioLogicoProbabilidade';
import { BANCO_CONSTITUCIONAL_PMPE } from './bancoQuestoesDireitoConstitucional';
import { BANCO_PORTUGUES_AOCP } from './bancoQuestoesPortuguesAocp';
import { LEGISLACAO_PMPE_50_QUESTIONS } from './legislacaoPmpe50';
import { BANCO_DIREITOS_HUMANOS_PLANALTO } from './bancoQuestoesDireitosHumanos';
import { BANCO_INFORMATICA_PMPE_AOCP } from './bancoQuestoesInformaticaAocp';
import { BANCO_ESTATUTO_PMPE_EXTRA } from './bancoQuestoesEstatutoPmpeExtra';
import { BANCO_HISTORIA_PE_EXTRA } from './bancoQuestoesHistoriaPeExtra';
import { BANCO_PORTUGUES_EXTRA } from './bancoQuestoesPortuguesExtra';
import { BANCO_LEGISLACAO_PMPE_60 } from './bancoQuestoesLegislaoPmpe60';
import { BANCO_EDITAL_AOCP_300 } from './bancoQuestoesEditalAocp300';

export {
  SIMULADO_SEMANA_1,
  SIMULADO_SEMANA_2,
  SIMULADO_SEMANA_3,
  SIMULADO_SEMANA_4,
  SIMULADO_COMPLETO_PMPE,
  SIMULADO_AOCP_ESPECIAL,
  SIMULADO_AOCP_ELITE,
  BANCO_LEGISLACAO_EXTRAVAGANTE,
  BANCO_RACIOCINIO_PROBABILIDADE,
  BANCO_CONSTITUCIONAL_PMPE,
  BANCO_PORTUGUES_AOCP,
  BANCO_PORTUGUES_EXTRA,
  LEGISLACAO_PMPE_50_QUESTIONS,
  BANCO_DIREITOS_HUMANOS_PLANALTO,
  BANCO_INFORMATICA_PMPE_AOCP,
  BANCO_ESTATUTO_PMPE_EXTRA,
  BANCO_LEGISLACAO_PMPE_60,
  BANCO_HISTORIA_PE_EXTRA,
  BANCO_EDITAL_AOCP_300
};

export const SIMULADOS_LIST = [
  { id: 'all', name: '⭐ Acervo Geral Soldado PMPE (Questões 100% Comentadas Tintim por Tintim)', count: 2157, tag: '⭐ Acervo Geral (2.157 Q)' },
  { id: 'caderno_edital_aocp_300', name: '🎯 Caderno de Elite: 300 Questões Cirúrgicas do Edital AOCP 2026', count: 300, tag: '🎯 Edital AOCP (300 Q)' },
  { id: 'caderno_direitos_humanos', name: '🕊️ Bloco Especial: Direitos Humanos & Pacto de São José da Costa Rica (200 Questões)', count: 200, tag: '🕊️ Direitos Humanos (200 Q)' },
  { id: 'caderno_leg_extravagante', name: '🚨 Bloco Especial: Legislação Extravagante (250 Questões)', count: 250, tag: '🚨 Leis Extravagantes (250 Q)' },
  { id: 'caderno_rlm_probabilidade', name: '🧠 Bloco Especial: RLM & Probabilidade com Passo a Passo (250 Questões)', count: 250, tag: '🧠 RLM & Probabilidade (250 Q)' },
  { id: 'caderno_const_pmpe', name: '⚖️ Bloco Especial: Direito Constitucional & Art. 144 (160 Questões)', count: 160, tag: '⚖️ Constitucional (160 Q)' },
  { id: 'caderno_portugues_aocp', name: '📖 Bloco Especial: Língua Portuguesa AOCP (250 Questões)', count: 250, tag: '📖 Português AOCP (250 Q)' },
  { id: 'caderno_pmpe_estatuto', name: '🛡️ Caderno Oficial: Legislação PMPE & Estatuto (Lei 6.783/74) (114 Questões)', count: 114, tag: '🛡️ Estatuto PMPE (114 Q)' },
  { id: 'caderno_informatica', name: '💻 Bloco Especial: Noções de Informática PMPE AOCP (300 Questões)', count: 300, tag: '💻 Informática PMPE (300 Q)' },
  { id: 'caderno_historia_pe', name: '🦁 Bloco Especial: História de Pernambuco AOCP (58 Questões)', count: 58, tag: '🦁 História de PE (58 Q)' },
  { id: 'aocp_elite', name: 'Caderno de Elite AOCP (Resoluções & Contas Tintim por Tintim)', count: 25, tag: 'Elite Didática' },
  { id: 'aocp_especial', name: 'Super Simulado Banca AOCP (Edital Oficial)', count: 30, tag: 'Foco AOCP' },
  { id: 'nuce_completo', name: 'Simulado Completo Soldado PMPE (NUCE)', count: 60, tag: 'Simulado PMPE' },
  { id: 'semana_1', name: '1ª Semana (Aulas ao Vivo)', count: 15, tag: 'Semana 1' },
  { id: 'semana_2', name: '2ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 2' },
  { id: 'semana_3', name: '3ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 3' },
  { id: 'semana_4', name: '4ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 4' },
];

export const ALL_QUESTIONS: QuizQuestion[] = [
  ...BANCO_EDITAL_AOCP_300,
  ...BANCO_DIREITOS_HUMANOS_PLANALTO,
  ...BANCO_LEGISLACAO_EXTRAVAGANTE,
  ...BANCO_RACIOCINIO_PROBABILIDADE,
  ...BANCO_CONSTITUCIONAL_PMPE,
  ...BANCO_PORTUGUES_AOCP,
  ...BANCO_PORTUGUES_EXTRA,
  ...BANCO_INFORMATICA_PMPE_AOCP,
  ...BANCO_ESTATUTO_PMPE_EXTRA,
  ...BANCO_LEGISLACAO_PMPE_60,
  ...BANCO_HISTORIA_PE_EXTRA,
  ...LEGISLACAO_PMPE_50_QUESTIONS,
  ...SIMULADO_AOCP_ELITE,
  ...SIMULADO_AOCP_ESPECIAL,
  ...SIMULADO_COMPLETO_PMPE,
  ...SIMULADO_SEMANA_1,
  ...SIMULADO_SEMANA_2,
  ...SIMULADO_SEMANA_3,
  ...SIMULADO_SEMANA_4
];
