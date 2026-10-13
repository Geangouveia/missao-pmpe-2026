import type { QuizQuestion } from '../../types/game';
import { SIMULADO_SEMANA_1 } from './simuladoSemana1';
import { SIMULADO_SEMANA_2 } from './simuladoSemana2';
import { SIMULADO_SEMANA_3 } from './simuladoSemana3';
import { SIMULADO_SEMANA_4 } from './simuladoSemana4';
import { SIMULADO_COMPLETO_PMPE } from './simuladoCompletoPmpe';
import { SIMULADO_AOCP_ESPECIAL } from './simuladoAocpEspecial';

export {
  SIMULADO_SEMANA_1,
  SIMULADO_SEMANA_2,
  SIMULADO_SEMANA_3,
  SIMULADO_SEMANA_4,
  SIMULADO_COMPLETO_PMPE,
  SIMULADO_AOCP_ESPECIAL
};

export const SIMULADOS_LIST = [
  { id: 'all', name: 'Todos os Simulados (Banco Geral)', count: 180 },
  { id: 'semana_1', name: '1ª Semana (Aulas ao Vivo)', count: 15, tag: 'Semana 1' },
  { id: 'semana_2', name: '2ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 2' },
  { id: 'semana_3', name: '3ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 3' },
  { id: 'semana_4', name: '4ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 4' },
  { id: 'nuce_completo', name: 'Simulado Completo Soldado PMPE (NUCE)', count: 60, tag: 'Simulado PMPE' },
  { id: 'aocp_especial', name: 'Super Simulado Banca AOCP (Edital)', count: 30, tag: 'Foco AOCP' },
];

export const ALL_QUESTIONS: QuizQuestion[] = [
  ...SIMULADO_SEMANA_1,
  ...SIMULADO_SEMANA_2,
  ...SIMULADO_SEMANA_3,
  ...SIMULADO_SEMANA_4,
  ...SIMULADO_COMPLETO_PMPE,
  ...SIMULADO_AOCP_ESPECIAL
];
