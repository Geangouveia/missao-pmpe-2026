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
  BANCO_QUESTOES_EDITAL_200
};

export const SIMULADOS_LIST = [
  { id: 'all', name: 'Todos os Simulados (Banco Geral - 610 Questões)', count: 610, tag: '⭐ Acervo Completo' },
  { id: 'edital_200', name: 'Caderno Oficial Edital AOCP (100 Questões)', count: 100, tag: '🔥 Edital 100Q' },
  { id: 'banco_bloco1', name: 'Super Caderno Bloco I (Português & História de PE)', count: 100, tag: 'Bloco I (100 Q)' },
  { id: 'banco_bloco2', name: 'Super Caderno Bloco II (Raciocínio Lógico & Informática)', count: 100, tag: 'Bloco II (100 Q)' },
  { id: 'banco_bloco3', name: 'Super Caderno Bloco III (Direito, DH & Legislação PMPE)', count: 105, tag: 'Bloco III (105 Q)' },
  { id: 'aocp_elite', name: 'Caderno de Elite AOCP (Resoluções & Contas Tintim por Tintim)', count: 25, tag: 'Elite Didática' },
  { id: 'aocp_especial', name: 'Super Simulado Banca AOCP (Edital Oficial)', count: 30, tag: 'Foco AOCP' },
  { id: 'nuce_completo', name: 'Simulado Completo Soldado PMPE (NUCE)', count: 60, tag: 'Simulado PMPE' },
  { id: 'semana_1', name: '1ª Semana (Aulas ao Vivo)', count: 15, tag: 'Semana 1' },
  { id: 'semana_2', name: '2ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 2' },
  { id: 'semana_3', name: '3ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 3' },
  { id: 'semana_4', name: '4ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 4' },
];

export const ALL_QUESTIONS: QuizQuestion[] = [
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
