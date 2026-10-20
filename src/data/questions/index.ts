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
import { BANCO_NOVAS_QUESTOES_BLOCO_1 } from './banco50PortuguesHistoria';
import { BANCO_NOVAS_QUESTOES_BLOCO_2 } from './banco50RaciocinioInformatica';
import { BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_1 } from './banco50ConstitucionalHumanos';
import { BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_2 } from './banco50LegislacaoExtravagantePmpe';
import { BANCO_QUESTOES_ELITE_DIFICIL } from './bancoQuestoesEliteDificil';

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
  BANCO_EDITAL_AOCP_300,
  BANCO_NOVAS_QUESTOES_BLOCO_1,
  BANCO_NOVAS_QUESTOES_BLOCO_2,
  BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_1,
  BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_2,
  BANCO_QUESTOES_ELITE_DIFICIL
};

export const SIMULADOS_LIST = [
  { id: 'all', name: '⭐ Acervo Geral Soldado PMPE (Questões 100% Inéditas e Sem Repetição)', count: 2052, tag: '⭐ Acervo Geral (2.052 Q)' },
  { id: 'caderno_elite_dificil', name: '🔥 Desafio de Elite: 160 Questões Avançadas (Nível Difícil • Edital AOCP)', count: 160, tag: '🔥 160 Elite (Nível Difícil)' },
  { id: 'caderno_400_novas_edital', name: '🔥 Super Acervo Especial: 400 Questões Inéditas do Edital (50 de Cada Matéria)', count: 400, tag: '🔥 400 Inéditas (50/Matéria)' },
  { id: 'caderno_edital_aocp_300', name: '🎯 Caderno de Elite: Questões Cirúrgicas do Edital AOCP 2026', count: 70, tag: '🎯 Edital AOCP (70 Q)' },
  { id: 'caderno_direitos_humanos', name: '🕊️ Bloco Especial: Direitos Humanos & Pacto de São José da Costa Rica (250 Questões)', count: 250, tag: '🕊️ Direitos Humanos (250 Q)' },
  { id: 'caderno_leg_extravagante', name: '🚨 Bloco Especial: Legislação Extravagante (100 Questões Inéditas)', count: 100, tag: '🚨 Leis Extravagantes (100 Q)' },
  { id: 'caderno_rlm_probabilidade', name: '🧠 Bloco Especial: RLM & Probabilidade com Passo a Passo (200 Inéditas)', count: 200, tag: '🧠 RLM & Probabilidade (200 Inéditas)' },
  { id: 'caderno_const_pmpe', name: '⚖️ Bloco Especial: Direito Constitucional & Art. 144 (210 Questões)', count: 210, tag: '⚖️ Constitucional (210 Q)' },
  { id: 'caderno_portugues_aocp', name: '📖 Bloco Especial: Língua Portuguesa AOCP (200 Inéditas)', count: 200, tag: '📖 Português AOCP (200 Inéditas)' },
  { id: 'caderno_pmpe_estatuto', name: '🛡️ Caderno Oficial: Legislação PMPE & Estatuto (Lei 6.783/74) (164 Questões)', count: 164, tag: '🛡️ Estatuto PMPE (164 Q)' },
  { id: 'caderno_informatica', name: '💻 Bloco Especial: Noções de Informática PMPE AOCP (350 Questões)', count: 350, tag: '💻 Informática PMPE (350 Q)' },
  { id: 'caderno_historia_pe', name: '🦁 Bloco Especial: História de Pernambuco AOCP (200 Inéditas • Zero Geografia)', count: 200, tag: '🦁 História de PE (200 Inéditas)' },
  { id: 'aocp_elite', name: 'Caderno de Elite AOCP (Resoluções & Contas Tintim por Tintim)', count: 25, tag: 'Elite Didática' },
  { id: 'aocp_especial', name: 'Super Simulado Banca AOCP (Edital Oficial)', count: 30, tag: 'Foco AOCP' },
  { id: 'nuce_completo', name: 'Simulado Completo Soldado PMPE (NUCE)', count: 60, tag: 'Simulado PMPE' },
  { id: 'semana_1', name: '1ª Semana (Aulas ao Vivo)', count: 15, tag: 'Semana 1' },
  { id: 'semana_2', name: '2ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 2' },
  { id: 'semana_3', name: '3ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 3' },
  { id: 'semana_4', name: '4ª Semana (Aulas ao Vivo)', count: 25, tag: 'Semana 4' },
];

// Filtro rigoroso de singularidade: NENHUMA questão repetida ou duplicada é servida ao aluno
export const ALL_QUESTIONS: QuizQuestion[] = (() => {
  const rawList: QuizQuestion[] = [
    ...BANCO_QUESTOES_ELITE_DIFICIL,
    ...BANCO_NOVAS_QUESTOES_BLOCO_1,
    ...BANCO_NOVAS_QUESTOES_BLOCO_2,
    ...BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_1,
    ...BANCO_NOVAS_QUESTOES_BLOCO_3_PARTE_2,
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

  const seen = new Set<string>();
  const uniqueQuestions: QuizQuestion[] = [];

  for (const q of rawList) {
    if (!q || !q.question) continue;
    // Normaliza removendo prefixos de simulado para comparar a essência da pergunta
    const normalized = q.question
      .replace(/^\[[^\]]+\]\s*/i, '')
      .replace(/^\([^)]+\)\s*/i, '')
      .trim()
      .toLowerCase();

    if (!seen.has(normalized)) {
      seen.add(normalized);
      uniqueQuestions.push(q);
    }
  }

  return uniqueQuestions;
})();

