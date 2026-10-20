import React, { useState, useEffect } from 'react';
import {
  Flame,
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  BookOpen,
  Award,
  X
} from 'lucide-react';
import { sound } from '../utils/sound';

interface RetaFinalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSurvival: (catId: string) => void;
  onOpenSimulado: () => void;
  onOpenRedacao: () => void;
  onOpenMistakes: () => void;
  userName?: string;
}

interface DayMission {
  day: number;
  title: string;
  focus: string;
  category: string;
  taskText: string;
  actionType: 'category' | 'simulado' | 'redacao' | 'erros';
  actionLabel: string;
}

const RETA_FINAL_DAYS: DayMission[] = [
  { day: 15, title: 'Dia 15 • Português Estratégico', focus: 'Crase & Concordância Verbal AOCP', category: 'portugues', taskText: 'Resolver 30 questões de Crase e identificar o mnemônico "Até a Maria sua".', actionType: 'category', actionLabel: 'Resolver 30Q Português' },
  { day: 14, title: 'Dia 14 • RLM Cirúrgico', focus: 'Regra do MANÉ & Leis de De Morgan', category: 'raciocinio', taskText: 'Fixar negação da condicional e equivalência contrapositiva.', actionType: 'category', actionLabel: 'Treinar RLM' },
  { day: 13, title: 'Dia 13 • História Pernambucana', focus: '1817, 1824 & Batalha dos Guararapes', category: 'historia_pe', taskText: 'Memorizar Frei Caneca, Domingos Martins e o berço do Exército em 1648.', actionType: 'category', actionLabel: 'Treinar História PE' },
  { day: 12, title: 'Dia 12 • Direito Constitucional', focus: 'Artigo 5º & Artigo 144 CF', category: 'constitucional', taskText: 'Dominar inviolabilidade do domicílio, 3T+H e atribuições da PMPE.', actionType: 'category', actionLabel: 'Treinar Constitucional' },
  { day: 11, title: 'Dia 11 • Direitos Humanos', focus: 'Pacto de San José da Costa Rica & DUDH', category: 'humanos_leis', taskText: 'Súmula Vinculante 25 (prisão civil) e garantias judiciais fundamentais.', actionType: 'category', actionLabel: 'Treinar Direitos Humanos' },
  { day: 10, title: 'Dia 10 • Leis Extravagantes', focus: 'Maria da Penha, Abuso & ECA', category: 'legislacao_extravagante', taskText: 'Prazos do ECA (3 anos/21 anos) e dolo específico no Abuso de Autoridade.', actionType: 'category', actionLabel: 'Treinar Leis Extravagantes' },
  { day: 9, title: 'Dia 9 • Estatuto PMPE', focus: 'Lei Estadual nº 6.783/1974', category: 'legislacao_pmpe', taskText: 'Prazos de luto (8d), núpcias (8d), instalação (10d) e hierarquia militar.', actionType: 'category', actionLabel: 'Treinar Estatuto' },
  { day: 8, title: 'Dia 8 • Informática Policial', focus: 'Segurança da Informação & Redes', category: 'informatica', taskText: 'Diferença entre Ransomware, Phishing e Spyware no padrão AOCP.', actionType: 'category', actionLabel: 'Treinar Informática' },
  { day: 7, title: 'Dia 7 • Simulado Geral 60Q / 4h', focus: 'Espelho Oficial com Gabarito Oculto', category: 'all', taskText: 'Sentar com caneta preta e resolver as 60 questões cronometradas.', actionType: 'simulado', actionLabel: 'Abrir Simulado Oficial' },
  { day: 6, title: 'Dia 6 • Prontuário de Erros', focus: 'Revisão Espaçada SM-2', category: 'all', taskText: 'Zerar todas as questões erradas salvas no Caderno de Erros.', actionType: 'erros', actionLabel: 'Abrir Caderno de Erros' },
  { day: 5, title: 'Dia 5 • Redação de Elite', focus: 'Folha Pautada 20 a 30 Linhas', category: 'all', taskText: 'Escrever redação completa em 50 minutos usando esqueleto coringa.', actionType: 'redacao', actionLabel: 'Abrir QG Redação' },
  { day: 4, title: 'Dia 4 • Blindagem de Pegadinhas', focus: 'Armadilhas Clássicas da AOCP', category: 'all', taskText: 'Passar pelas 10 maiores pegadinhas e revisar termos capciosos da banca.', actionType: 'category', actionLabel: 'Revisar Pegadinhas' },
  { day: 3, title: 'Dia 3 • Bateria Flash de Memória', focus: 'Mnemônicos e Prazos Fatais', category: 'all', taskText: 'Girar 30 flashcards para consolidar a memória de curto prazo.', actionType: 'category', actionLabel: 'Abrir Flashcards' },
  { day: 2, title: 'Dia 2 • Logística & Caneta Preta', focus: 'Organização do Dia D', category: 'all', taskText: 'Conferir local de prova, separar 3 canetas pretas transparentes e documento oficial.', actionType: 'category', actionLabel: 'Conferir Checklist' },
  { day: 1, title: 'Dia 1 • Véspera & Blindagem Mental', focus: 'Descanso e Calma de Soldado', category: 'all', taskText: 'Hidratação reforçada, alimentação leve e sono de 8 horas. A vaga é sua!', actionType: 'category', actionLabel: 'Mensagem de Vitória' }
];

export const RetaFinalModal: React.FC<RetaFinalModalProps> = ({
  isOpen,
  onClose,
  onStartSurvival,
  onOpenSimulado,
  onOpenRedacao,
  onOpenMistakes,
  userName = 'Soldado'
}) => {
  if (!isOpen) return null;

  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`pmpe_reta_final_${userName}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  const toggleDay = (day: number) => {
    sound.playClick();
    setCompletedDays((prev) => {
      const updated = { ...prev, [day]: !prev[day] };
      localStorage.setItem(`pmpe_reta_final_${userName}`, JSON.stringify(updated));
      return updated;
    });
  };

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPct = Math.round((completedCount / RETA_FINAL_DAYS.length) * 100);

  const handleAction = (item: DayMission) => {
    sound.playClick();
    onClose();
    if (item.actionType === 'simulado') onOpenSimulado();
    else if (item.actionType === 'redacao') onOpenRedacao();
    else if (item.actionType === 'erros') onOpenMistakes();
    else onStartSurvival(item.category);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.96)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1050px',
          maxHeight: '94vh',
          background: 'linear-gradient(180deg, #090e1a 0%, #05070c 100%)',
          border: '2px solid rgba(245, 158, 11, 0.55)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(220, 38, 38, 0.35) 0%, rgba(10, 17, 32, 0.98) 100%)',
            borderBottom: '1px solid rgba(245, 158, 11, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(239, 68, 68, 0.5)',
                color: '#ffffff'
              }}
            >
              <Flame size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  OPERAÇÃO RETA FINAL (ÚLTIMOS 15 DIAS PMPE)
                </h2>
                <span
                  style={{
                    background: 'rgba(239, 68, 68, 0.25)',
                    border: '1px solid #ef4444',
                    color: '#fca5a5',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  PROTOCOLO DE CHOQUE
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Cronograma dia a dia para revisão cirúrgica dos conteúdos de maior probabilidade histórica.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.84rem', color: '#fbbf24', fontWeight: 800 }}>
              Progresso: {completedCount}/15 Dias ({progressPct}%)
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* BARRA DE PROGRESSO */}
        <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)' }}>
          <div
            style={{
              height: '100%',
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, #ef4444 0%, #f59e0b 60%, #22c55e 100%)',
              transition: 'width 0.3s ease'
            }}
          />
        </div>

        {/* LISTA DOS 15 DIAS */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {RETA_FINAL_DAYS.map((item) => {
            const isDone = !!completedDays[item.day];

            return (
              <div
                key={item.day}
                style={{
                  background: isDone ? 'rgba(34, 197, 94, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isDone ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', flex: 1, minWidth: '260px' }}>
                  <button
                    onClick={() => toggleDay(item.day)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      marginTop: '2px',
                      color: isDone ? '#4ade80' : 'rgba(255, 255, 255, 0.3)'
                    }}
                    title={isDone ? 'Marcar como pendente' : 'Marcar como concluído'}
                  >
                    <CheckCircle2 size={24} />
                  </button>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.94rem', fontWeight: 900, color: isDone ? '#86efac' : '#ffffff' }}>
                        {item.title}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          padding: '0.1rem 0.45rem',
                          borderRadius: '4px',
                          background: 'rgba(245, 158, 11, 0.2)',
                          color: '#fbbf24'
                        }}
                      >
                        {item.focus}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                      {item.taskText}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleAction(item)}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#060b17',
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span>{item.actionLabel}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
