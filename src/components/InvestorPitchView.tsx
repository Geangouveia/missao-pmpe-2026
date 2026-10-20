import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Target,
  Award,
  Zap,
  CheckCircle2,
  Calculator,
  Flame,
  BookOpen,
  Scale,
  BrainCircuit,
  Gamepad2,
  Heart,
  Landmark,
  Calendar,
  Layers,
  MessageSquare,
  Play
} from 'lucide-react';
import { sound } from '../utils/sound';

interface InvestorPitchViewProps {
  onBackToApp?: () => void;
  onClose?: () => void;
  onStartDemo?: () => void;
}

export const InvestorPitchView: React.FC<InvestorPitchViewProps> = ({ 
  onBackToApp,
  onClose,
  onStartDemo 
}) => {
  const handleExit = () => {
    if (onClose) onClose();
    else if (onBackToApp) onBackToApp();
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Estados do Simulador Interativo de Projeção Financeira
  const [candidateSubscribers, setCandidateSubscribers] = useState(1500);
  const [monthlyFee, setMonthlyFee] = useState(29.90);

  // Cálculos dinâmicos
  const monthlyRevenue = candidateSubscribers * monthlyFee;
  const annualRevenue = monthlyRevenue * 12;

  const totalSlides = 7;

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    sound.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      sound.playClick();
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      sound.playClick();
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Suporte a teclas de seta para passar slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top, #0f172a 0%, #030712 100%)',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Barra Superior Executiva */}
      <header style={{
        padding: '0.75rem 1.5rem',
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '2px solid rgba(234, 179, 8, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        backdropFilter: 'blur(10px)',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              handleExit();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0.9rem',
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '8px',
              color: '#38bdf8',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} /> Voltar ao App
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{
                background: '#facc15',
                color: '#000',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.65rem',
                fontWeight: 900
              }}>
                PITCH DECK
              </span>
              <h1 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                Apresentação Executiva & Tour Guiado
              </h1>
            </div>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Missão PMPE 2026 &bull; Slide {currentSlide + 1} de {totalSlides}
            </span>
          </div>
        </div>

        {/* Controles de Apresentação */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{
              padding: '0.45rem 0.75rem',
              background: currentSlide === 0 ? 'rgba(30, 41, 59, 0.3)' : 'rgba(30, 41, 59, 0.9)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '6px',
              color: currentSlide === 0 ? '#475569' : '#fff',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.82rem',
              fontWeight: 'bold'
            }}
          >
            <ChevronLeft size={16} /> Anterior
          </button>

          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#facc15', padding: '0 0.5rem' }}>
            {currentSlide + 1} / {totalSlides}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            style={{
              padding: '0.45rem 0.75rem',
              background: currentSlide === totalSlides - 1 ? 'rgba(30, 41, 59, 0.3)' : 'linear-gradient(135deg, #eab308, #ca8a04)',
              border: 'none',
              borderRadius: '6px',
              color: currentSlide === totalSlides - 1 ? '#475569' : '#000',
              cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.82rem',
              fontWeight: 900
            }}
          >
            Próximo <ChevronRight size={16} />
          </button>

          <button
            onClick={toggleFullscreen}
            style={{
              padding: '0.45rem 0.75rem',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid #38bdf8',
              borderRadius: '6px',
              color: '#7dd3fc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.82rem',
              fontWeight: 'bold'
            }}
            title="Tela Cheia para Apresentação"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span>{isFullscreen ? 'Janela' : 'Tela Cheia'}</span>
          </button>
        </div>
      </header>

      {/* Miniaturas de Navegação Rápida entre Slides */}
      <nav style={{
        padding: '0.5rem 1rem',
        background: 'rgba(15, 23, 42, 0.7)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        overflowX: 'auto'
      }}>
        {[
          { num: 1, title: 'Capa & Tese' },
          { num: 2, title: 'A Dor do Aluno' },
          { num: 3, title: 'A Solução 360º' },
          { num: 4, title: 'Tour dos Módulos' },
          { num: 5, title: 'Study-to-Play' },
          { num: 6, title: 'Simulador Financeiro' },
          { num: 7, title: 'Roteiro do Fundador' }
        ].map((item, idx) => (
          <button
            key={item.num}
            onClick={() => {
              sound.playClick();
              setCurrentSlide(idx);
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: currentSlide === idx ? 900 : 600,
              background: currentSlide === idx ? '#eab308' : 'rgba(30, 41, 59, 0.6)',
              color: currentSlide === idx ? '#000' : '#94a3b8',
              border: currentSlide === idx ? '1px solid #facc15' : '1px solid rgba(148, 163, 184, 0.2)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s'
            }}
          >
            {item.num}. {item.title}
          </button>
        ))}
      </nav>

      {/* ÁREA CENTRAL DO SLIDE ATUAL */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* ============================================================== */}
        {/* SLIDE 1: CAPA EXECUTIVA */}
        {/* ============================================================== */}
        {currentSlide === 0 && (
          <div style={{
            textAlign: 'center',
            maxWidth: '850px',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              background: 'rgba(234, 179, 8, 0.15)',
              border: '1px solid #facc15',
              borderRadius: '999px',
              color: '#fef08a',
              fontSize: '0.85rem',
              fontWeight: 800,
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={16} /> TESE DE INVESTIMENTO EM EDTECH POLICIAL
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: '0 0 1rem',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              MISSÃO PMPE <span style={{ color: '#facc15', WebkitTextFillColor: '#facc15' }}>2026</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#93c5fd',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6
            }}>
              O primeiro ecossistema gamificado de <strong>alta retenção</strong> que transforma a preparação para o concurso da Polícia Militar de Pernambuco em uma jornada viciante de aprovação.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              textAlign: 'left',
              marginBottom: '2.5rem'
            }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>PRODUTO</span>
                <strong style={{ color: '#38bdf8', fontSize: '1rem' }}>Plataforma Web & Mobile 100% Operacional</strong>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>DIFERENCIAL</span>
                <strong style={{ color: '#facc15', fontSize: '1rem' }}>Mecânica "Study-to-Play" & TAF Integrado</strong>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>TECNOLOGIA</span>
                <strong style={{ color: '#4ade80', fontSize: '1rem' }}>100% Código Próprio & Escalável</strong>
              </div>
            </div>

            <button
              onClick={nextSlide}
              style={{
                padding: '0.85rem 2.2rem',
                background: 'linear-gradient(135deg, #eab308, #ca8a04)',
                color: '#000',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(234, 179, 8, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Iniciar Apresentação <Play size={18} fill="#000" />
            </button>
          </div>
        )}

        {/* ============================================================== */}
        {/* SLIDE 2: A DOR DO CONCURSEIRO & O PROBLEMA */}
        {/* ============================================================== */}
        {currentSlide === 1 && (
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ color: '#ef4444', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}>O PROBLEMA DO MERCADO</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '0.35rem 0', color: '#ffffff' }}>
                Por que os Cursinhos Tradicionais Falham em Reter o Aluno?
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                O mercado de concursos tem demanda gigantesca, mas sofre com a maior taxa de desistência do setor educacional.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📚</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fca5a5', margin: '0 0 0.5rem' }}>Fadiga Cognitiva & PDFs Extensos</h3>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Apostilas de 800 páginas e videoaulas monótonas de 50 minutos cansam o cérebro rapidamente. O aluno estuda 3 dias e desiste.
                </p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📉</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fca5a5', margin: '0 0 0.5rem' }}>Falta de Hábito Diário (Churn Alto)</h3>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Sem mecânicas de incentivo diário (*streak*, recompensas tangíveis), o candidato perde a consistência e cancela sua assinatura.
                </p>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🏃</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fca5a5', margin: '0 0 0.5rem' }}>Abandono da Preparação Física</h3>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Até <strong>35% dos aprovados na prova escrita são reprovados no TAF</strong> (barra fixa, corrida). Nenhuma plataforma nacional integra mente e corpo.
                </p>
              </div>
            </div>

            <div style={{
              marginTop: '1.75rem',
              padding: '1rem 1.5rem',
              background: 'rgba(15, 23, 42, 0.9)',
              borderRadius: '10px',
              borderLeft: '4px solid #facc15',
              fontSize: '0.9rem',
              color: '#e2e8f0'
            }}>
              <strong>Insight Chave para o Investidor:</strong> O aluno não quer mais comprar um pacote estático de aulas; ele quer uma plataforma diária que mantenha ele focado, disciplinado e competitivo até o dia do exame.
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SLIDE 3: A SOLUÇÃO 360º */}
        {/* ============================================================== */}
        {currentSlide === 2 && (
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ color: '#22c55e', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}>A NOSSA SOLUÇÃO</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '0.35rem 0', color: '#ffffff' }}>
                O Único Ecossistema 360º com Descompressão Integrada
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                Unimos preparação tática de alta densidade com mecânicas de jogos reais que prendem o aluno no app.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <BrainCircuit size={22} color="#38bdf8" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#38bdf8', margin: 0 }}>Estudo Ativo & RLM</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Questões focadas 100% na banca <strong>Instituto AOCP</strong>, simuladores com cronômetro real, estatísticas de acerto e manual de lógica passo a passo.
                </p>
              </div>

              <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Scale size={22} color="#facc15" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#facc15', margin: 0 }}>Vade Mecum 2026</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  11 legislações completas e atualizadas (CPM, CP, RDPMPE, Lei de Racismo 14.532/23 e Nova Lei Orgânica Nacional das PMs 14.751/23).
                </p>
              </div>

              <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Gamepad2 size={22} color="#c084fc" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#c084fc', margin: 0 }}>Descompressão Tática</h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Jogo Arcade Retrô 16-Bit com controles virtuais para celular e 0 questões para o cérebro descansar, liberado apenas quando o aluno cumpre metas!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SLIDE 4: TOUR DOS MÓDULOS PASSO A PASSO */}
        {/* ============================================================== */}
        {currentSlide === 3 && (
          <div style={{ width: '100%', maxWidth: '950px' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: '#38bdf8', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}>TOUR DO PRODUTO</span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, margin: '0.25rem 0', color: '#ffffff' }}>
                Como Funciona Cada Módulo no Aplicativo (Passo a Passo)
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                Tudo o que o aluno precisa em um único login, acessível do celular ou computador.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.85rem',
              maxHeight: '440px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <Award size={16} /> 1. Centro de Comando
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Mostra a probabilidade de aprovação do aluno, cálculo de nota de corte (mín. 30%), histórico de acertos e streak diário.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#facc15', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <BookOpen size={16} /> 2. Banco de Questões AOCP
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Milhares de questões categorizadas por bloco, com gabarito fundamentado, macetes e explicações detalhadas por que cada alternativa está errada.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <Scale size={16} /> 3. Vade Mecum Militar 2026
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Legislação seca completa (Constituição, CPM, CP, Estatuto PMPE, RDPMPE, Crimes Hediondos e Leis Penais Especiais) com busca instantânea.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#c084fc', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <BrainCircuit size={16} /> 4. Manual de Raciocínio Lógico
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Tabela verdade explicada passo a passo (conjunção, disjunção, condicional, bicondicional) e regras de equivalência e negação (MANÉ e De Morgan).
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <Landmark size={16} /> 5. Especial: História de Pernambuco
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Foco rigoroso nas matérias do edital da PMPE (Revolução de 1817, Confederação do Equador, Holandeses e Guararapes) sem disciplinas alheias.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <Heart size={16} /> 6. TAF Militar Tracker
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Rastreamento do teste físico: barra fixa, corrida de 2.400m, salto e natação com cronômetro e metas para garantir a aprovação na etapa física.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#fb923c', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <Calendar size={16} /> 7. Operação Domingo
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Simulado geral oficial aos domingos no horário exato da prova, com ranking em tempo real de todo o pelotão para gerar competitividade.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.9rem', borderRadius: '10px', border: '1px solid #334155' }}>
                <strong style={{ color: '#a855f7', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.92rem' }}>
                  <Gamepad2 size={16} /> 8. Arcade Retrô 16-Bit
                </strong>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Gabinete estilo Metal Slug / The Shadow com controles touch para smartphone, rolamento tático, arsenal e descompressão após bater metas.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SLIDE 5: A MECÂNICA "STUDY-TO-PLAY" */}
        {/* ============================================================== */}
        {currentSlide === 4 && (
          <div style={{ width: '100%', maxWidth: '850px', textAlign: 'center' }}>
            <span style={{ color: '#c084fc', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}>O SEGREDO DA RETENÇÃO</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, margin: '0.35rem 0 1rem', color: '#ffffff' }}>
              Mecânica "Study-to-Play" (Estudar para Jogar)
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '650px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              Em vez de proibir o concurseiro de jogar, transformamos o jogo no maior motivador de estudo e retenção da plataforma.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '2px solid #38bdf8',
                borderRadius: '16px',
                padding: '1.5rem',
                width: '230px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📝</div>
                <strong style={{ color: '#38bdf8', display: 'block', fontSize: '1.05rem', marginBottom: '0.3rem' }}>1. Bater Metas</strong>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Resolver 20 questões ou ler 1 tópico de Lei Seca</span>
              </div>

              <div style={{ fontSize: '2rem', color: '#facc15' }}>➔</div>

              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '2px solid #facc15',
                borderRadius: '16px',
                padding: '1.5rem',
                width: '230px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🪙</div>
                <strong style={{ color: '#facc15', display: 'block', fontSize: '1.05rem', marginBottom: '0.3rem' }}>2. Ganhar Fichas</strong>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Recebe Fichas Táticas e sobe de patente militar</span>
              </div>

              <div style={{ fontSize: '2rem', color: '#facc15' }}>➔</div>

              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '2px solid #a855f7',
                borderRadius: '16px',
                padding: '1.5rem',
                width: '230px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎮</div>
                <strong style={{ color: '#c084fc', display: 'block', fontSize: '1.05rem', marginBottom: '0.3rem' }}>3. Descompressão</strong>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Joga o Arcade sem culpa e volta revigorado</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(234, 179, 8, 0.12)',
              border: '1px solid #facc15',
              borderRadius: '12px',
              padding: '1rem',
              color: '#fef08a',
              fontSize: '0.9rem'
            }}>
              <strong>Resultado Comprovado:</strong> O aluno não troca de aplicativo e não desinstala a plataforma, gerando um LTV (Lifetime Value) até 3x superior ao de cursinhos tradicionais!
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SLIDE 6: SIMULADOR INTERATIVO DE PROJEÇÃO SAAS */}
        {/* ============================================================== */}
        {currentSlide === 5 && (
          <div style={{ width: '100%', maxWidth: '880px' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span style={{ color: '#facc15', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}>SIMULADOR INTERATIVO DE PROJEÇÃO</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '0.25rem 0', color: '#ffffff' }}>
                Simulação de Faturamento Recorrente (SaaS)
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Ajuste os parâmetros abaixo para simular o potencial de receita com base no volume de candidatos.
              </p>
            </div>

            {/* Caixa dos Sliders Interativos */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.95)',
              border: '2px solid rgba(234, 179, 8, 0.4)',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 10px 35px rgba(0, 0, 0, 0.8)',
              marginBottom: '1.5rem'
            }}>
              {/* Slider 1: Número de Assinantes */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0' }}>Número de Alunos / Assinantes:</span>
                  <strong style={{ fontSize: '1.3rem', color: '#38bdf8', fontWeight: 900 }}>{candidateSubscribers.toLocaleString('pt-BR')} alunos</strong>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={candidateSubscribers}
                  onChange={(e) => setCandidateSubscribers(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '0.25rem' }}>
                  <span>200 (Início)</span>
                  <span>1.500 (Cenário Base)</span>
                  <span>5.000 (Expansão)</span>
                  <span>10.000 (Massa PE)</span>
                </div>
              </div>

              {/* Slider 2: Valor da Assinatura Mensal */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0' }}>Ticket Médio Mensal por Aluno:</span>
                  <strong style={{ fontSize: '1.3rem', color: '#4ade80', fontWeight: 900 }}>
                    R$ {monthlyFee.toFixed(2).replace('.', ',')} / mês
                  </strong>
                </div>
                <input
                  type="range"
                  min="19.90"
                  max="59.90"
                  step="5.00"
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#4ade80', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '0.25rem' }}>
                  <span>R$ 19,90 (Acessível)</span>
                  <span>R$ 29,90 (Padrão de Mercado)</span>
                  <span>R$ 59,90 (VIP / Mentoria)</span>
                </div>
              </div>
            </div>

            {/* Painel de Resultados Calculados */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              textAlign: 'center'
            }}>
              <div style={{ background: 'rgba(30, 41, 59, 0.85)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', fontWeight: 600 }}>RECEITA MENSAL RECORRENTE (MRR)</span>
                <strong style={{ fontSize: '1.75rem', color: '#38bdf8', fontWeight: 900 }}>
                  R$ {monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginTop: '0.3rem' }}>por mês</span>
              </div>

              <div style={{ background: 'rgba(30, 41, 59, 0.85)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(234, 179, 8, 0.4)' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', fontWeight: 600 }}>PROJEÇÃO ANUALIZADA (ARR)</span>
                <strong style={{ fontSize: '1.75rem', color: '#facc15', fontWeight: 900 }}>
                  R$ {annualRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </strong>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginTop: '0.3rem' }}>por ano</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.82rem', color: '#94a3b8' }}>
              💡 <em>Exemplo de Cenário Base: 1.500 alunos pagando R$ 29,90/mês geram <strong>R$ 44.850,00 mensais</strong> (mais de meio milhão de reais por ano).</em>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* SLIDE 7: ROTEIRO PRÁTICO DO FUNDADOR */}
        {/* ============================================================== */}
        {currentSlide === 6 && (
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ color: '#facc15', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '1px' }}>GUIA DO FUNDADOR</span>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 900, margin: '0.25rem 0', color: '#ffffff' }}>
                Roteiro Prático de Apresentação (Pitch de 5 Minutos)
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                O que você deve falar e mostrar ao investidor em cada minuto da reunião.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxHeight: '440px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid #38bdf8' }}>
                <strong style={{ color: '#38bdf8', fontSize: '0.95rem' }}>1º Minuto • O Gancho & A Dor:</strong>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                  <em>"Hoje o mercado de concursos é disputado com apostilas cansativas de centenas de páginas, e a maioria dos alunos desiste antes da prova. Nós criamos a Missão PMPE 2026 para resolver a retenção diária através de estudo ativo e gamificação real."</em>
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid #facc15' }}>
                <strong style={{ color: '#facc15', fontSize: '0.95rem' }}>2º Minuto • Demonstração dos Módulos Principais:</strong>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                  Abra o <strong>Centro de Comando</strong> e a <strong>Aba de Leis Secas</strong>. Mostre que a legislação está completa (11 leis atualizadas com CPM e Lei Orgânica das PMs), com busca instantânea e macetes AOCP. Mostre o <strong>Manual de Raciocínio Lógico</strong>.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid #c084fc' }}>
                <strong style={{ color: '#c084fc', fontSize: '0.95rem' }}>3º Minuto • O Fator 'UAU' (Arcade & TAF Tracker):</strong>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                  Abra o <strong>Arcade Retrô no celular</strong>. Mostre os controles ergonômicos e explique a mecânica <strong>Study-to-Play</strong>: <em>"Nenhum concorrente do país tem isso. O aluno ganha fichas ao estudar, joga sem culpa e a retenção dele dispara."</em> Mencione também o TAF Tracker.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid #4ade80' }}>
                <strong style={{ color: '#4ade80', fontSize: '0.95rem' }}>4º Minuto • A Projeção Financeira (Simulador):</strong>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                  Abra o <strong>Slide do Simulador</strong>. Mexa no slider: <em>"Com apenas 1.500 alunos pagando R$ 29,90 por mês, alcançamos mais de R$ 44.000 mensais de faturamento recorrente."</em>
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1rem', borderRadius: '10px', borderLeft: '4px solid #eab308' }}>
                <strong style={{ color: '#fef08a', fontSize: '0.95rem' }}>5º Minuto • O Pedido / Proposta de Parceria:</strong>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                  <em>"O produto está pronto, no ar, funcionando no celular e no computador. O aporte servirá para tráfego pago escalado, expansão do banco de questões e aceleração das vendas."</em>
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Barra Inferior com Controles e Indicador de Progresso */}
      <footer style={{
        padding: '0.75rem 1.5rem',
        background: 'rgba(15, 23, 42, 0.95)',
        borderTop: '1px solid rgba(148, 163, 184, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
          💡 <em>Dica: Pressione as setas <strong>Esquerda / Direita</strong> do teclado para mudar de slide.</em>
        </div>

        {/* Bolinhas de Progresso dos Slides */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                setCurrentSlide(idx);
              }}
              style={{
                width: currentSlide === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: currentSlide === idx ? '#facc15' : '#475569',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
              title={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};
