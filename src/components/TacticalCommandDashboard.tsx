import React, { useMemo } from 'react';
import { 
  ShieldCheck, 
  Target, 
  Flame, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Clock, 
  BarChart3, 
  Sparkles, 
  Zap, 
  Compass, 
  TrendingUp,
  BrainCircuit,
  Activity
} from 'lucide-react';
import type { PlayerStats } from '../types/game';
import { getAllStudents, type StudentProfile } from '../utils/studentAnalytics';
import { sound } from '../utils/sound';
import { haptics } from '../utils/haptics';

interface TacticalCommandDashboardProps {
  userName: string;
  stats: PlayerStats;
  pendingMistakesCount: number;
  onOpenSimulado: () => void;
  onOpenMistakes: () => void;
  onOpenRadar: () => void;
  onOpenPdf: () => void;
  onOpenSchedule: () => void;
  onOpenTaf: () => void;
  onOpenPegadinhas: () => void;
  onOpenLawBooklet: () => void;
  onOpenRedacao: () => void;
}

export const TacticalCommandDashboard: React.FC<TacticalCommandDashboardProps> = ({
  userName,
  stats,
  pendingMistakesCount,
  onOpenSimulado,
  onOpenMistakes,
  onOpenRadar,
  onOpenPdf,
  onOpenSchedule,
  onOpenTaf,
  onOpenPegadinhas,
  onOpenLawBooklet,
  onOpenRedacao
}) => {
  // Dados analíticos consolidados do aluno
  const profile: StudentProfile | null = useMemo(() => {
    if (!userName) return null;
    const db = getAllStudents();
    return db[userName.trim()] || null;
  }, [userName, stats.totalAnswered]);

  // Patente Militar baseada no XP
  const militaryRank = useMemo(() => {
    const xp = stats.xp || 0;
    if (xp >= 20000) return { title: 'Subtenente PM', badge: 'Elite Máxima ⭐⭐⭐', color: '#fbbf24' };
    if (xp >= 12000) return { title: '1º Sargento PM', badge: 'Veterano Tático ⭐⭐', color: '#f59e0b' };
    if (xp >= 7000) return { title: '2º Sargento PM', badge: 'Líder de Esquadra ⭐', color: '#d4af37' };
    if (xp >= 3500) return { title: '3º Sargento PM', badge: 'Comando de Grupo', color: '#e5c158' };
    if (xp >= 1500) return { title: 'Cabo PM', badge: 'Operador de Prontidão', color: '#cbd5e1' };
    if (xp >= 500) return { title: 'Soldado 1ª Classe', badge: 'Combatente Formado', color: '#a1a1aa' };
    return { title: 'Soldado Aluno', badge: 'Recruta em Formação', color: '#94a3b8' };
  }, [stats.xp]);

  // Métricas dos 3 Blocos do Edital AOCP
  const blocosMetrics = useMemo(() => {
    const s = profile?.subjectStats || {};
    
    // Bloco I: Português + História de PE
    const b1Answered = (s['portugues']?.answered || 0) + (s['historia_pe']?.answered || 0);
    const b1Correct = (s['portugues']?.correct || 0) + (s['historia_pe']?.correct || 0);
    const b1Acc = b1Answered > 0 ? Math.round((b1Correct / b1Answered) * 100) : 0;

    // Bloco II: RLM + Informática
    const b2Answered = (s['raciocinio']?.answered || 0) + (s['informatica']?.answered || 0);
    const b2Correct = (s['raciocinio']?.correct || 0) + (s['informatica']?.correct || 0);
    const b2Acc = b2Answered > 0 ? Math.round((b2Correct / b2Answered) * 100) : 0;

    // Bloco III: Direito Constitucional + Humanos/Legislação
    const b3Answered = (s['constitucional']?.answered || 0) + (s['humanos_leis']?.answered || 0) + (s['legislacao_extravagante']?.answered || 0);
    const b3Correct = (s['constitucional']?.correct || 0) + (s['humanos_leis']?.correct || 0) + (s['legislacao_extravagante']?.correct || 0);
    const b3Acc = b3Answered > 0 ? Math.round((b3Correct / b3Answered) * 100) : 0;

    // Diagnóstico Geral do Concurso
    const totalQ = stats.totalAnswered || 0;
    const globalAcc = totalQ > 0 ? Math.round(((stats.correctAnswers || 0) / totalQ) * 100) : 0;

    let statusText = 'INSTRUÇÃO INICIAL • RESOLVA QUESTÕES PARA O DIAGNÓSTICO';
    let statusColor = '#94a3b8';
    let statusBg = 'rgba(255, 255, 255, 0.05)';
    let statusBorder = 'rgba(255, 255, 255, 0.15)';
    let hasAlert = false;

    if (totalQ >= 15) {
      if ((b1Answered >= 5 && b1Acc < 30) || (b2Answered >= 5 && b2Acc < 30) || (b3Answered >= 5 && b3Acc < 30)) {
        hasAlert = true;
        statusText = 'ALERTA TÁTICO: BLOCO ABAIXO DO CORTE MÍNIMO DE 30%';
        statusColor = '#ef4444';
        statusBg = 'rgba(220, 38, 38, 0.15)';
        statusBorder = 'rgba(220, 38, 38, 0.45)';
      } else if (globalAcc >= 70 && b1Acc >= 50 && b2Acc >= 50 && b3Acc >= 50) {
        statusText = 'DIAGNÓSTICO: APTO AO TAF • DENTRO DO PONTO DE CORTE';
        statusColor = '#d4af37';
        statusBg = 'rgba(212, 175, 55, 0.15)';
        statusBorder = 'rgba(212, 175, 55, 0.45)';
      } else {
        statusText = 'EM EVOLUÇÃO TÁTICA • INTENSIFIQUE O TIRO NOS BLOCOS';
        statusColor = '#e5c158';
        statusBg = 'rgba(229, 193, 88, 0.12)';
        statusBorder = 'rgba(229, 193, 88, 0.35)';
      }
    }

    return {
      b1: { answered: b1Answered, correct: b1Correct, acc: b1Acc },
      b2: { answered: b2Answered, correct: b2Correct, acc: b2Acc },
      b3: { answered: b3Answered, correct: b3Correct, acc: b3Acc },
      globalAcc,
      totalQ,
      statusText,
      statusColor,
      statusBg,
      statusBorder,
      hasAlert
    };
  }, [profile, stats.totalAnswered, stats.correctAnswers]);

  return (
    <div style={{
      width: '100%',
      background: 'linear-gradient(145deg, rgba(16, 18, 24, 0.98) 0%, rgba(10, 11, 15, 0.99) 100%)',
      border: '1.5px solid rgba(212, 175, 55, 0.35)',
      borderRadius: '20px',
      padding: '1.4rem 1.6rem',
      marginBottom: '1.5rem',
      boxShadow: '0 16px 45px rgba(0, 0, 0, 0.85), 0 0 30px rgba(212, 175, 55, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Luz ambiente dourada de fundo */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '260px',
        height: '260px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      {/* CABEÇALHO DO PAINEL DE CONTROLE */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(184, 134, 11, 0.12))',
            border: '1.5px solid #d4af37',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.25)',
            flexShrink: 0
          }}>
            <ShieldCheck size={26} color="#d4af37" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.01em' }}>
                {userName || 'Guerreiro da PMPE'}
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 900,
                padding: '0.15rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: militaryRank.color,
                border: `1px solid ${militaryRank.color}`,
                letterSpacing: '0.04em'
              }}>
                {militaryRank.title} • {militaryRank.badge}
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.15rem' }}>
              Painel de Prontidão Operacional • Focado no Edital Soldado PMPE (Instituto AOCP)
            </div>
          </div>
        </div>

        {/* STATUS OFICIAL DA REGRA DO EDITAL */}
        <div style={{
          padding: '0.45rem 0.95rem',
          borderRadius: '10px',
          background: blocosMetrics.statusBg,
          border: `1.5px solid ${blocosMetrics.statusBorder}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {blocosMetrics.hasAlert ? (
            <AlertTriangle size={16} color="#ef4444" />
          ) : (
            <CheckCircle2 size={16} color={blocosMetrics.statusColor} />
          )}
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 900,
            color: blocosMetrics.statusColor,
            letterSpacing: '0.04em'
          }}>
            {blocosMetrics.statusText}
          </span>
        </div>
      </div>

      {/* GRADE DOS 3 BLOCOS DO EDITAL AOCP (CÁLCULO EM TEMPO REAL) */}
      <div style={{
        marginTop: '1.15rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '0.85rem'
      }}>
        {/* Bloco I */}
        <div style={{
          padding: '0.9rem 1rem',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#cbd5e1' }}>
              BLOCO I • Port. & História PE
            </span>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 900,
              color: blocosMetrics.b1.answered > 0 && blocosMetrics.b1.acc < 30 ? '#ef4444' : '#d4af37'
            }}>
              {blocosMetrics.b1.answered > 0 ? `${blocosMetrics.b1.acc}%` : 'S/ DADOS'}
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, blocosMetrics.b1.acc)}%`,
              height: '100%',
              background: blocosMetrics.b1.acc < 30 ? '#ef4444' : 'linear-gradient(90deg, #b8860b, #d4af37)',
              transition: 'width 0.4s ease'
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#71717a', marginTop: '0.35rem' }}>
            <span>{blocosMetrics.b1.correct}/{blocosMetrics.b1.answered} acertos</span>
            <span>Corte Mínimo: 30%</span>
          </div>
        </div>

        {/* Bloco II */}
        <div style={{
          padding: '0.9rem 1rem',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.45)',
          border: blocosMetrics.b2.answered > 0 && blocosMetrics.b2.acc < 30 ? '1px solid rgba(220, 38, 38, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#cbd5e1' }}>
              BLOCO II • RLM & Informática
            </span>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 900,
              color: blocosMetrics.b2.answered > 0 && blocosMetrics.b2.acc < 30 ? '#ef4444' : '#d4af37'
            }}>
              {blocosMetrics.b2.answered > 0 ? `${blocosMetrics.b2.acc}%` : 'S/ DADOS'}
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, blocosMetrics.b2.acc)}%`,
              height: '100%',
              background: blocosMetrics.b2.acc < 30 ? '#ef4444' : 'linear-gradient(90deg, #b8860b, #d4af37)',
              transition: 'width 0.4s ease'
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#71717a', marginTop: '0.35rem' }}>
            <span>{blocosMetrics.b2.correct}/{blocosMetrics.b2.answered} acertos</span>
            <span>Corte Mínimo: 30%</span>
          </div>
        </div>

        {/* Bloco III */}
        <div style={{
          padding: '0.9rem 1rem',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#cbd5e1' }}>
              BLOCO III • Dir. Const. & Leis
            </span>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 900,
              color: blocosMetrics.b3.answered > 0 && blocosMetrics.b3.acc < 30 ? '#ef4444' : '#d4af37'
            }}>
              {blocosMetrics.b3.answered > 0 ? `${blocosMetrics.b3.acc}%` : 'S/ DADOS'}
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${Math.min(100, blocosMetrics.b3.acc)}%`,
              height: '100%',
              background: blocosMetrics.b3.acc < 30 ? '#ef4444' : 'linear-gradient(90deg, #b8860b, #d4af37)',
              transition: 'width 0.4s ease'
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#71717a', marginTop: '0.35rem' }}>
            <span>{blocosMetrics.b3.correct}/{blocosMetrics.b3.answered} acertos</span>
            <span>Corte Mínimo: 30%</span>
          </div>
        </div>
      </div>

      {/* 4 CARDS ESTRATÉGICOS DE AÇÃO RÁPIDA */}
      <div style={{
        marginTop: '1.15rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '0.85rem'
      }}>
        {/* Card 1: Simulado Real AOCP 60Q */}
        <div
          onClick={() => {
            sound.playClick();
            haptics.tap();
            onOpenSimulado();
          }}
          style={{
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(184, 134, 11, 0.05) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.4)',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#d4af37', fontWeight: 900, fontSize: '0.86rem' }}>
                <Clock size={16} />
                <span>Simulado Oficial AOCP</span>
              </div>
              <span style={{ fontSize: '0.65rem', background: '#d4af37', color: '#07080a', padding: '0.1rem 0.4rem', borderRadius: '4px', fontWeight: 900 }}>
                60Q • 4H
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: '#a1a1aa', lineHeight: 1.4 }}>
              Caderno idêntico à prova real com folha óptica de gabarito e tempo regressivo contínuo.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#d4af37', fontWeight: 800, fontSize: '0.78rem', marginTop: '0.65rem' }}>
            <span>Entrar na Prova</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* Card 2: Caderno de Erros (Zerar Falhas) */}
        <div
          onClick={() => {
            sound.playClick();
            haptics.tap();
            onOpenMistakes();
          }}
          style={{
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '14px',
            background: pendingMistakesCount > 0 
              ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(153, 27, 27, 0.05) 100%)'
              : 'rgba(255, 255, 255, 0.03)',
            border: pendingMistakesCount > 0 ? '1.5px solid rgba(220, 38, 38, 0.45)' : '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = pendingMistakesCount > 0 ? '0 8px 24px rgba(220, 38, 38, 0.25)' : 'none';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: pendingMistakesCount > 0 ? '#ef4444' : '#cbd5e1', fontWeight: 900, fontSize: '0.86rem' }}>
                <Target size={16} />
                <span>Caderno de Erros</span>
              </div>
              <span style={{
                fontSize: '0.65rem',
                background: pendingMistakesCount > 0 ? '#dc2626' : 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '0.1rem 0.45rem',
                borderRadius: '4px',
                fontWeight: 900
              }}>
                {pendingMistakesCount} FALHAS
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: '#a1a1aa', lineHeight: 1.4 }}>
              Treine taticamente apenas o que errou até alcançar 100% de domínio em todo o edital.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: pendingMistakesCount > 0 ? '#ef4444' : '#cbd5e1', fontWeight: 800, fontSize: '0.78rem', marginTop: '0.65rem' }}>
            <span>Zerar Falhas Pendentes</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* Card 3: Ofensiva Militar (Streak) */}
        <div style={{
          padding: '1rem',
          borderRadius: '14px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontWeight: 900, fontSize: '0.86rem' }}>
                <Flame size={16} />
                <span>Ofensiva Militar</span>
              </div>
              <span style={{ fontSize: '0.65rem', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', padding: '0.1rem 0.45rem', borderRadius: '4px', fontWeight: 900, border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                DISCIPLINA
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: '#a1a1aa', lineHeight: 1.4 }}>
              <strong>{stats.streakDays || 1} dias consecutivos</strong> de treinamento tático ininterrupto.
            </p>
          </div>
          <div style={{ fontSize: '0.74rem', color: '#fbbf24', fontWeight: 700, marginTop: '0.65rem' }}>
            ⚡ Não quebre a prontidão!
          </div>
        </div>

        {/* Card 4: Telemetria & Gráficos */}
        <div
          onClick={() => {
            sound.playClick();
            haptics.tap();
            onOpenRadar();
          }}
          style={{
            cursor: 'pointer',
            padding: '1rem',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e5c158', fontWeight: 900, fontSize: '0.86rem' }}>
                <BarChart3 size={16} />
                <span>Telemetria & Gráficos</span>
              </div>
              <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1', padding: '0.1rem 0.45rem', borderRadius: '4px', fontWeight: 800 }}>
                RADAR
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: '#a1a1aa', lineHeight: 1.4 }}>
              Visão aprofundada de acertos, tempo médio por questão e forças/fraquezas.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#e5c158', fontWeight: 800, fontSize: '0.78rem', marginTop: '0.65rem' }}>
            <span>Abrir Telemetria</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>

      {/* BARRA DE ATALHOS RÁPIDOS DE NÍVEL INSTITUCIONAL */}
      <div style={{
        marginTop: '1.15rem',
        paddingTop: '0.9rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.6rem'
      }}>
        <span style={{ fontSize: '0.72rem', color: '#71717a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Atalhos de Combate:
        </span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => { sound.playClick(); haptics.tap(); onOpenPdf(); }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#d4af37',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <FileText size={13} />
            <span>Baixar PDF p/ Imprimir</span>
          </button>

          <button
            type="button"
            onClick={() => { sound.playClick(); haptics.tap(); onOpenLawBooklet(); }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <BookOpen size={13} />
            <span>Vade Mecum Leis Secas</span>
          </button>

          <button
            type="button"
            onClick={() => { sound.playClick(); haptics.tap(); onOpenPegadinhas(); }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <AlertTriangle size={13} color="#f59e0b" />
            <span>Pegadinhas AOCP</span>
          </button>

          <button
            type="button"
            onClick={() => { sound.playClick(); haptics.tap(); onOpenTaf(); }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Activity size={13} color="#ef4444" />
            <span>Simulador do TAF</span>
          </button>

          <button
            type="button"
            onClick={() => { sound.playClick(); haptics.tap(); onOpenRedacao(); }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Award size={13} color="#e5c158" />
            <span>Redação PMPE (40 Pts)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
