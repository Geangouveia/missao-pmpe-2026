import type { QuizQuestion } from '../../types/game';
import { SIMULADO_SEMANA_1 } from './simuladoSemana1';
import { SIMULADO_SEMANA_2 } from './simuladoSemana2';
import { SIMULADO_SEMANA_3 } from './simuladoSemana3';
import { SIMULADO_SEMANA_4 } from './simuladoSemana4';
import { SIMULADO_COMPLETO_PMPE } from './simuladoCompletoPmpe';
import { SIMULADO_AOCP_ESPECIAL } from './simuladoAocpEspecial';
import { SIMULADO_AOCP_ELITE } from './simuladoAocpElite';

export {
  SIMULADO_SEMANA_1,
  SIMULADO_SEMANA_2,
  SIMULADO_SEMANA_3,
  SIMULADO_SEMANA_4,
  SIMULADO_COMPLETO_PMPE,
  SIMULADO_AOCP_ESPECIAL,
  SIMULADO_AOCP_ELITE
};

export const SIMULADOS_LIST = [
  { id: 'all', name: 'Todos os Simulados (Banco Geral)', count: 205 },
  { id: 'aocp_elite', name: 'Caderno de Elite AOCP (Resoluções & Contas Tintim por Tintim)', count: 25, tag: '⭐ Elite Didática' },
  { id: 'aocp_especial', name: 'Super Simulado Banca AOCP (Edital Oficial)', count: 30, tag: 'Foco AOCP' },
  { id: 'nuce_completo', name: 'Simulado Completo Soldado PMPE (NUCE)', count: 60, tag: 'Simulado PMPE' },
  { id: 'semana_1', name: '1ª Semana (Aulas ao Vivo)', count: 15, tag: 'Semana 1' },
  { id: 'semana_2', name: '2ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 2' },
  { id: 'semana_3', name: '3ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 3' },
  { id: 'semana_4', name: '4ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 4' },
];

export const ALL_QUESTIONS: QuizQuestion[] = [
  ...SIMULADO_AOCP_ELITE,
  ...SIMULADO_AOCP_ESPECIAL,
  ...SIMULADO_COMPLETO_PMPE,
  ...SIMULADO_SEMANA_1,
  ...SIMULADO_SEMANA_2,
  ...SIMULADO_SEMANA_3,
  ...SIMULADO_SEMANA_4
];
