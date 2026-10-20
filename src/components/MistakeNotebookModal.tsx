import React, { useState, useMemo, useEffect } from 'react';
import { 
  Target, 
  X, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  BookOpen,
  Award,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Volume2,
  VolumeX,
  TrendingUp,
  BrainCircuit,
  Check
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { 
  getPendingMistakeIds, 
  getDueTodayMistakeIds,
  processSrsAnswer,
  getSrsStatistics,
  clearResolvedMistakes, 
  getAllMistakes,
  type SrsRating
} from '../utils/errorNotebookManager';
import { speakQuestion, stopSpeech, isSpeechActive } from '../utils/speechNarrator';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface MistakeNotebookModalProps {
  userName: string;
  allQuestions: QuizQuestion[];
  onClose: () => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  userName,
  allQuestions,
  onClose,
  onQuestionAnswered
}) => {
  const [activeTab, setActiveTab] = useState<'due_today' | 'all_mistakes' | 'srs_stats'>('due_today');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [srsSuccessMessage, setSrsSuccessMessage] = useState<string | null>(null);

  // Para o áudio quando fechar modal
  useEffect(() => {
    return () => stopSpeech();
  }, []);

  const mistakeRecords = useMemo(() => getAllMistakes(userName), [userName]);
  const srsStats = useMemo(() => getSrsStatistics(userName), [userName, isAnswered]);

  const questionsMap = useMemo(() => {
    const map = new Map<string, QuizQuestion>();
    allQuestions.forEach(q => map.set(q.id, q));
    return map;
  }, [allQuestions]);

  const dueTodayQuestions = useMemo(() => {
    const dueIds = getDueTodayMistakeIds(userName);
    return dueIds.map(id => questionsMap.get(id)).filter((q): q is QuizQuestion => Boolean(q));
  }, [userName, questionsMap, isAnswered]);

  const allPendingQuestions = useMemo(() => {
    const pIds = getPendingMistakeIds(userName);
    return pIds.map(id => questionsMap.get(id)).filter((q): q is QuizQuestion => Boolean(q));
  }, [userName, questionsMap, isAnswered]);

  const currentQuestionsList = activeTab === 'due_today' 
    ? (dueTodayQuestions.length > 0 ? dueTodayQuestions : allPendingQuestions) 
    : allPendingQuestions;

  const currentQ = currentQuestionsList[selectedIdx] || currentQuestionsList[0];
  const mistakeInfo = currentQ ? mistakeRecords[currentQ.id] : null;

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      sound.playSuccess();
      onQuestionAnswered?.(true, 40);

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#22c55e', '#10b981', '#3b82f6', '#fbbf24']
      });
    } else {
      sound.playError();
      onQuestionAnswered?.(false, 0);
    }
  };

  const handleGradeSrs = (rating: SrsRating) => {
    if (!currentQ) return;
    sound.playClick();
    const updated = processSrsAnswer(userName, currentQ.id, rating);
    
    if (updated) {
      const labels: Record<SrsRating, string> = {
        again: '🔄 Reagendado para revisão amanhã (1 dia)',
        hard: '⏳ Intervalo curto: próxima revisão em 3 dias',
        good: '🎯 Bom progresso: próxima revisão em 7 dias!',
        easy: '🏆 Excelente! Dominado e agendado para 15-30 dias!'
      };
      setSrsSuccessMessage(labels[rating]);
      setTimeout(() => {
        setSrsSuccessMessage(null);
        handleNext();
      }, 1200);
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    stopSpeech();
    setIsAudioPlaying(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setSrsSuccessMessage(null);

    if (selectedIdx + 1 < currentQuestionsList.length) {
      setSelectedIdx(prev => prev + 1);
    } else {
      setSelectedIdx(0);
    }
  };

  const handleToggleAudio = () => {
    if (!currentQ) return;
    if (isAudioPlaying || isSpeechActive()) {
      stopSpeech();
      setIsAudioPlaying(false);
    } else {
      setIsAudioPlaying(true);
      speakQuestion(
        currentQ.question, 
        currentQ.options, 
        () => setIsAudioPlaying(true), 
        () => setIsAudioPlaying(false)
      );
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.94)',
        backdropFilter: 'blur(12px)',
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
          maxWidth: '960px',
          maxHeight: '94vh',
          background: 'linear-gradient(180deg, #0d1017 0%, #07080a 100%)',
          border: '1.5px solid rgba(220, 38, 38, 0.5)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(220, 38, 38, 0.25), inset 0 0 20px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO BOPE TÁTICO */}
        <div
          style={{
            padding: '1.15rem 1.4rem',
            background: 'linear-gradient(90deg, rgba(220, 38, 38, 0.25) 0%, rgba(13, 15, 20, 0.98) 100%)',
            borderBottom: '1px solid rgba(220, 38, 38, 0.35)',
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
                background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(220, 38, 38, 0.6)',
                color: '#ffffff'
              }}
            >
              <Target size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.18rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.04em' }}>
                  CADERNO DE ERROS & REPETIÇÃO ESPAÇADA
                </h2>
                <span
                  style={{
                    background: 'rgba(245, 158, 11, 0.2)',
                    border: '1px solid #f59e0b',
                    color: '#fbbf24',
                    padding: '0.12rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 900
                  }}
                >
                  ALGORITMO SM-2 / ANKI
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                Revisão programada em 1d, 3d, 7d e 15d para nunca mais errar na prova oficial da PMPE.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ABAS DE NAVEGAÇÃO SRS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', background: 'rgba(8, 10, 15, 0.95)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', flexWrap: 'wrap' }}>
          <button
            onClick={() => { sound.playClick(); setActiveTab('due_today'); setSelectedIdx(0); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'due_today' ? '#dc2626' : 'rgba(255, 255, 255, 0.06)',
              color: '#ffffff',
              boxShadow: activeTab === 'due_today' ? '0 0 12px rgba(220, 38, 38, 0.4)' : 'none'
            }}
          >
            <Calendar size={14} />
            <span>📌 Vencidas Hoje ({srsStats.dueToday})</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveTab('all_mistakes'); setSelectedIdx(0); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'all_mistakes' ? '#f59e0b' : 'rgba(255, 255, 255, 0.06)',
              color: activeTab === 'all_mistakes' ? '#000000' : '#ffffff',
              boxShadow: activeTab === 'all_mistakes' ? '0 0 12px rgba(245, 158, 11, 0.4)' : 'none'
            }}
          >
            <Target size={14} />
            <span>🎯 Todas as Falhas ({srsStats.learning + srsStats.reviewing})</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveTab('srs_stats'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'srs_stats' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.06)',
              color: '#93c5fd',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: activeTab === 'srs_stats' ? '#3b82f6' : 'transparent'
            }}
          >
            <BrainCircuit size={14} />
            <span>📊 Ciclos SM-2 ({srsStats.mastered} Dominadas)</span>
          </button>
        </div>

        {/* CORPO PRINCIPAL */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {activeTab === 'srs_stats' ? (
            /* PAINEL DE ESTATÍSTICAS SM-2 */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)', borderRadius: '14px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#fca5a5', fontWeight: 800 }}>VENCIDAS PARA HOJE</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ef4444', marginTop: '0.25rem' }}>{srsStats.dueToday}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>Aguardando retreinamento imediato</div>
                </div>

                <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '14px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#fef08a', fontWeight: 800 }}>EM APRENDIZADO (1-3 DIAS)</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fbbf24', marginTop: '0.25rem' }}>{srsStats.learning}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>Ciclo inicial de retenção rápida</div>
                </div>

                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '14px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#bfdbfe', fontWeight: 800 }}>EM CONSOLIDAÇÃO (7-15 DIAS)</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#60a5fa', marginTop: '0.25rem' }}>{srsStats.reviewing}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>Memória de médio prazo</div>
                </div>

                <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '14px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#86efac', fontWeight: 800 }}>DOMINADAS / GABARITADAS</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#22c55e', marginTop: '0.25rem' }}>{srsStats.mastered}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>Memória de longo prazo consolidada</div>
                </div>
              </div>

              <div style={{ background: 'rgba(15, 20, 28, 0.8)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '14px', padding: '1.25rem', color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.6 }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#fbbf24', fontSize: '0.98rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <BrainCircuit size={18} color="#fbbf24" />
                  Como Funciona o Algoritmo SM-2 no seu Concurso:
                </h4>
                Quando você erra uma questão, nosso sistema salva o ponto cego e agenda revisões em intervalos matemáticos:
                <strong> 1 dia → 3 dias → 7 dias → 15 dias → 30 dias</strong>. Cada vez que você responde e avalia a facilidade, o sistema recalcula o fator de facilidade para que você gaste tempo apenas nas questões que seu cérebro está prestes a esquecer.
              </div>
            </div>
          ) : currentQuestionsList.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '2px solid #22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  color: '#4ade80'
                }}
              >
                <CheckCircle2 size={40} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', margin: 0, fontWeight: 900 }}>
                {activeTab === 'due_today' ? 'Nenhuma questão vencida para hoje!' : 'Prontuário Limpo! Nenhuma falha registrada.'}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', maxWidth: '460px', margin: '0.65rem auto 1.5rem', lineHeight: 1.5 }}>
                {activeTab === 'due_today' 
                  ? 'Você já concluiu todas as revisões agendadas para o dia de hoje no algoritmo SM-2. Parabéns pela disciplina!' 
                  : 'Excelente trabalho, soldado! Continue treinando nos simulados.'}
              </p>
            </div>
          ) : currentQ ? (
            <>
              {/* STATUS DA QUESTÃO NO SRS */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', background: 'rgba(15, 20, 28, 0.9)', padding: '0.65rem 1rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#fbbf24' }}>
                    Questão {selectedIdx + 1} de {currentQuestionsList.length}
                  </span>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(220, 38, 38, 0.25)', color: '#fca5a5', padding: '0.1rem 0.45rem', borderRadius: '4px', fontWeight: 800 }}>
                    Erros anteriores: {mistakeInfo?.failedCount || 1}
                  </span>
                  {mistakeInfo && (
                    <span style={{ fontSize: '0.72rem', background: 'rgba(59, 130, 246, 0.25)', color: '#93c5fd', padding: '0.1rem 0.45rem', borderRadius: '4px', fontWeight: 800 }}>
                      Intervalo atual: {mistakeInfo.intervalDays}d
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {/* BOTÃO NARRADOR TEXT-TO-SPEECH */}
                  <button
                    onClick={handleToggleAudio}
                    title={isAudioPlaying ? 'Pausar leitura de áudio' : 'Ouvir questão em voz alta'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: isAudioPlaying ? '#dc2626' : 'rgba(245, 158, 11, 0.15)',
                      border: isAudioPlaying ? '1px solid #ef4444' : '1px solid rgba(245, 158, 11, 0.4)',
                      color: isAudioPlaying ? '#ffffff' : '#fbbf24',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    {isAudioPlaying ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    <span>{isAudioPlaying ? 'Parar Áudio' : 'Ouvir Questão'}</span>
                  </button>
                </div>
              </div>

              {/* ENUNCIADO */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  fontSize: '1rem',
                  color: '#ffffff',
                  lineHeight: 1.6
                }}
              >
                {currentQ.question}
              </div>

              {/* ALTERNATIVAS A-E */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {currentQ.options.map((option, idx) => {
                  const letter = ['A', 'B', 'C', 'D', 'E'][idx];
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswered && idx === currentQ.correctIndex;
                  const isWrong = isAnswered && isSelected && !isCorrect;

                  let bg = 'rgba(255, 255, 255, 0.04)';
                  let border = '1px solid rgba(255, 255, 255, 0.1)';
                  let color = '#e2e8f0';

                  if (isCorrect) {
                    bg = 'rgba(34, 197, 94, 0.2)';
                    border = '2px solid #22c55e';
                    color = '#86efac';
                  } else if (isWrong) {
                    bg = 'rgba(239, 68, 68, 0.2)';
                    border = '2px solid #ef4444';
                    color = '#fca5a5';
                  } else if (isSelected) {
                    bg = 'rgba(59, 130, 246, 0.2)';
                    border = '2px solid #3b82f6';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      style={{
                        background: bg,
                        border,
                        color,
                        borderRadius: '12px',
                        padding: '0.9rem 1.15rem',
                        textAlign: 'left',
                        fontSize: '0.92rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        cursor: isAnswered ? 'default' : 'pointer',
                        transition: 'all 0.15s'
                      }}
                    >
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '8px',
                          background: isCorrect ? '#22c55e' : isWrong ? '#ef4444' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 900,
                          flexShrink: 0
                        }}
                      >
                        {letter}
                      </div>
                      <span style={{ flex: 1 }}>{option}</span>
                      {isCorrect && <CheckCircle2 size={20} color="#22c55e" />}
                      {isWrong && <XCircle size={20} color="#ef4444" />}
                    </button>
                  );
                })}
              </div>

              {/* FEEDBACK & BOTÕES DE AVALIAÇÃO SM-2 */}
              {isAnswered && (
                <div
                  style={{
                    background: selectedOption === currentQ.correctIndex ? 'rgba(34, 197, 94, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                    border: selectedOption === currentQ.correctIndex ? '1.5px solid rgba(34, 197, 94, 0.4)' : '1.5px solid rgba(220, 38, 38, 0.4)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, color: selectedOption === currentQ.correctIndex ? '#4ade80' : '#f87171' }}>
                    <Lightbulb size={20} />
                    <span>{currentQ.explanation}</span>
                  </div>

                  {currentQ.dicaMacete && (
                    <div style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '10px', padding: '0.6rem 0.9rem', color: '#fef08a', fontSize: '0.82rem', fontWeight: 700 }}>
                      💡 <strong>Dica Tática PMPE:</strong> {currentQ.dicaMacete}
                    </div>
                  )}

                  {srsSuccessMessage ? (
                    <div style={{ background: 'rgba(34, 197, 94, 0.25)', border: '1px solid #22c55e', borderRadius: '10px', padding: '0.75rem', color: '#86efac', fontWeight: 900, textAlign: 'center' }}>
                      {srsSuccessMessage}
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.45rem', letterSpacing: '0.04em' }}>
                        Como foi sua retenção nesta questão? (Agendamento Inteligente SM-2):
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleGradeSrs('again')}
                          style={{
                            background: 'rgba(220, 38, 38, 0.25)',
                            border: '1px solid #ef4444',
                            color: '#fca5a5',
                            padding: '0.65rem 0.5rem',
                            borderRadius: '10px',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            textAlign: 'center'
                          }}
                        >
                          <div>Errei</div>
                          <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>1 dia</div>
                        </button>

                        <button
                          onClick={() => handleGradeSrs('hard')}
                          style={{
                            background: 'rgba(245, 158, 11, 0.2)',
                            border: '1px solid #f59e0b',
                            color: '#fde047',
                            padding: '0.65rem 0.5rem',
                            borderRadius: '10px',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            textAlign: 'center'
                          }}
                        >
                          <div>Difícil</div>
                          <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>3 dias</div>
                        </button>

                        <button
                          onClick={() => handleGradeSrs('good')}
                          style={{
                            background: 'rgba(59, 130, 246, 0.25)',
                            border: '1px solid #3b82f6',
                            color: '#93c5fd',
                            padding: '0.65rem 0.5rem',
                            borderRadius: '10px',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            textAlign: 'center'
                          }}
                        >
                          <div>Bom / Lembrei</div>
                          <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>7 dias</div>
                        </button>

                        <button
                          onClick={() => handleGradeSrs('easy')}
                          style={{
                            background: 'rgba(34, 197, 94, 0.25)',
                            border: '1px solid #22c55e',
                            color: '#86efac',
                            padding: '0.65rem 0.5rem',
                            borderRadius: '10px',
                            fontWeight: 900,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            textAlign: 'center'
                          }}
                        >
                          <div>Fácil / Dominado</div>
                          <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>15-30 dias</div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
