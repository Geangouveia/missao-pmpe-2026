import React, { useState, useEffect, useCallback } from 'react';
import type { QuizQuestion } from '../types/game';
import { 
  Timer, 
  Zap, 
  Lightbulb, 
  Snowflake, 
  Scissors, 
  ArrowRight, 
  ArrowLeft,
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Shield, 
  Scale, 
  AlertTriangle, 
  Calculator, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { prepareGameQuestions } from '../utils/questionRandomizer';

interface QuizGameProps {
  questions: QuizQuestion[];
  onFinish: (result: {
    score: number;
    xpEarned: number;
    maxCombo: number;
    correctCount: number;
    totalCount: number;
    subjectBreakdown?: Record<string, { total: number; correct: number }>;
    timeSpentSeconds?: number;
    averageTimePerQuestion?: number;
  }) => void;
  onExit: () => void;
  onAwardXp?: (amount: number) => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ 
  questions, 
  onFinish, 
  onExit,
  onAwardXp,
  onQuestionAnswered 
}) => {
  // Inicializa o lote de questões com Fisher-Yates de ordem e alternativas A-E fixas para esta sessão
  const [activeQuestions] = useState<QuizQuestion[]>(() => prepareGameQuestions(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [justEarnedXp, setJustEarnedXp] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [subjectBreakdown, setSubjectBreakdown] = useState<Record<string, { total: number; correct: number }>>({});
  const [timeSpentTotal, setTimeSpentTotal] = useState(0);

  // Power-ups state
  const [powerUps, setPowerUps] = useState({
    hint: 2,
    freeze: 2,
    fiftyFifty: 2,
  });
  const [showHint, setShowHint] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);

  const currentQ = activeQuestions[currentIndex] || activeQuestions[0];

  // Timer Effect (30 segundos por questão para simular ritmo ágil de prova)
  useEffect(() => {
    if (isAnswered || isTimerPaused) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isTimerPaused]);

  const handleTimeOut = useCallback(() => {
    setIsAnswered(true);
    sound.playError();
    setCombo(0);
    setTimeSpentTotal((prev) => prev + 30);
    onQuestionAnswered?.(false, 0);
    const subj = currentQ?.materiaNome || currentQ?.categoryId || 'Geral';
    setSubjectBreakdown((prev) => {
      const current = prev[subj] || { total: 0, correct: 0 };
      return {
        ...prev,
        [subj]: { total: current.total + 1, correct: current.correct }
      };
    });
  }, [currentQ, onQuestionAnswered]);

  // Selecionar Opção
  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const timeSpent = Math.max(1, 30 - timeLeft);
    setTimeSpentTotal((prev) => prev + timeSpent);

    const isCorrect = index === currentQ.correctIndex;
    const subj = currentQ?.materiaNome || currentQ?.categoryId || 'Geral';

    setSubjectBreakdown((prev) => {
      const current = prev[subj] || { total: 0, correct: 0 };
      return {
        ...prev,
        [subj]: { total: current.total + 1, correct: current.correct + (isCorrect ? 1 : 0) }
      };
    });

    if (isCorrect) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setMaxCombo((prev) => Math.max(prev, nextCombo));
      setCorrectCount((prev) => prev + 1);

      // Multiplicador de pontos baseado em tempo e combo
      const timeBonus = Math.floor(timeLeft * 10);
      const comboMultiplier = 1 + nextCombo * 0.25;
      const points = Math.floor((100 + timeBonus) * comboMultiplier);
      setScore((prev) => prev + points);

      // XP imediato por acerto para elevar o nível em tempo real
      const gainedXp = 25 + Math.min(25, nextCombo * 5);
      setJustEarnedXp(gainedXp);
      setTimeout(() => setJustEarnedXp(null), 2500);

      onAwardXp?.(gainedXp);
      onQuestionAnswered?.(true, gainedXp);

      if (nextCombo >= 3) {
        sound.playCombo(nextCombo);
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#06b6d4', '#f59e0b', '#10b981']
        });
      } else {
        sound.playSuccess();
      }
    } else {
      sound.playError();
      setCombo(0);
      onQuestionAnswered?.(false, 0);
    }
  };

  // Power-up: 50/50 (elimina 2 alternativas incorretas)
  const handleFiftyFifty = () => {
    if (powerUps.fiftyFifty <= 0 || isAnswered) return;
    sound.playClick();

    const wrongIndexes = currentQ.options
      .map((_, idx) => idx)
      .filter((idx) => idx !== currentQ.correctIndex);

    // Seleciona 2 erradas para eliminar
    const toEliminate = wrongIndexes.sort(() => 0.5 - Math.random()).slice(0, 2);
    setEliminatedOptions(toEliminate);
    setPowerUps((prev) => ({ ...prev, fiftyFifty: prev.fiftyFifty - 1 }));
  };

  // Power-up: Congelar
  const handleFreeze = () => {
    if (powerUps.freeze <= 0 || isAnswered || isTimerPaused) return;
    sound.playClick();
    setIsTimerPaused(true);
    setPowerUps((prev) => ({ ...prev, freeze: prev.freeze - 1 }));
    setTimeout(() => {
      setIsTimerPaused(false);
    }, 10000);
  };

  // Power-up: Dica
  const handleUseHint = () => {
    if (powerUps.hint <= 0) return;
    sound.playClick();
    setShowHint(true);
    setPowerUps((prev) => ({ ...prev, hint: prev.hint - 1 }));
  };

  // Próxima Pergunta
  const handleNext = () => {
    sound.playClick();
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(30);
      setShowHint(false);
      setEliminatedOptions([]);
    } else {
      // Fim do Simulado: Bônus de finalização
      const completionBonusXp = 50 + Math.floor(score / 15);
      const avgTime = Math.round((timeSpentTotal / Math.max(1, activeQuestions.length)) * 10) / 10;
      onFinish({
        score,
        xpEarned: completionBonusXp,
        maxCombo,
        correctCount,
        totalCount: activeQuestions.length,
        subjectBreakdown,
        timeSpentSeconds: timeSpentTotal,
        averageTimePerQuestion: avgTime,
      });
    }
  };

  // Suporte a 5 alternativas clássicas da AOCP (A, B, C, D, E)
  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '920px', margin: '0 auto' }}>
      {/* Top Bar com Timer e Combos */}
      <div className="quiz-top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              onExit();
            }}
            className="quiz-exit-btn"
            title="Voltar ao Menu Principal"
          >
            <ArrowLeft size={16} />
            <span>Sair da Prova</span>
          </button>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Questão <span style={{ color: 'white', fontWeight: 800 }}>{currentIndex + 1}</span> de {activeQuestions.length}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {justEarnedXp && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.25) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.6)',
              color: '#34d399',
              padding: '0.3rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 900,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)',
              animation: 'pulse 1s ease-in-out infinite'
            }}>
              <Sparkles size={14} color="#34d399" />
              <span>+{justEarnedXp} XP (Nível Subindo!)</span>
            </div>
          )}

          {combo > 1 && (
            <div className="combo-pill">
              <Zap size={16} fill="white" />
              <span>STREAK {combo}x</span>
            </div>
          )}

          <div className="timer-ring-container">
            <div
              className="timer-badge"
              style={{
                borderColor: isTimerPaused ? 'var(--neon-cyan)' : timeLeft < 10 ? '#ef4444' : 'rgba(255,255,255,0.15)',
                color: isTimerPaused ? 'var(--neon-cyan)' : timeLeft < 10 ? '#f87171' : 'white',
              }}
            >
              <Timer size={18} />
              <span>{isTimerPaused ? 'PAUSADO' : `${timeLeft}s`}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo da Questão */}
      <div className="quiz-question-card">
        <div>
          {/* Tags da Matéria e Tópico do Edital */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                padding: '0.25rem 0.65rem',
                borderRadius: '8px',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#93c5fd',
                border: '1px solid rgba(59, 130, 246, 0.4)'
              }}
            >
              {currentQ.materiaNome}
            </span>

            {currentQ.topicoEdital && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {currentQ.topicoEdital}
              </span>
            )}

            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '8px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#fbbf24',
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}
            >
              {currentQ.banca || 'Instituto AOCP'}
            </span>

            {currentQ.simuladoOrigem && (
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '8px',
                  background: 'rgba(168, 85, 247, 0.18)',
                  color: '#e9d5ff',
                  border: '1px solid rgba(168, 85, 247, 0.35)'
                }}
              >
                📋 {currentQ.simuladoOrigem}
              </span>
            )}

            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginLeft: 'auto' }}>
              Pontos: <strong style={{ color: 'var(--neon-cyan)' }}>{score} pts</strong>
            </span>
          </div>

          <h3 className="question-text">{currentQ.question}</h3>
        </div>

        {/* Dica revelada */}
        {showHint && (
          <div
            style={{
              padding: '0.85rem 1.15rem',
              borderRadius: '12px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#fef3c7',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <Lightbulb size={18} color="#f59e0b" />
            <span><strong>Dica da Banca:</strong> {currentQ.hint}</span>
          </div>
        )}

        {/* Lista de Alternativas (A a E) */}
        <div className="quiz-options-list">
          {currentQ.options.map((opt, idx) => {
            const isEliminated = eliminatedOptions.includes(idx);
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQ.correctIndex;

            let optionClass = 'quiz-option-btn';
            if (isAnswered) {
              if (isCorrect) {
                optionClass += ' selected-correct';
              } else if (isSelected) {
                optionClass += ' selected-wrong';
              }
            }

            return (
              <button
                key={idx}
                className={optionClass}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered || isEliminated}
                style={{
                  opacity: isEliminated ? 0.2 : 1,
                  pointerEvents: isEliminated ? 'none' : 'auto',
                }}
              >
                <div className="option-prefix">
                  {optionLetters[idx] || (idx + 1)}
                </div>
                <div style={{ flex: 1, fontSize: '0.98rem', lineHeight: 1.45 }}>{opt}</div>

                {isAnswered && isCorrect && <CheckCircle2 size={22} color="var(--neon-emerald)" />}
                {isAnswered && isSelected && !isCorrect && <XCircle size={22} color="var(--neon-red)" />}
              </button>
            );
          })}
        </div>

        {/* Barra de Recursos Táticos (Power-ups) */}
        {!isAnswered && (
          <div className="quiz-powerups-bar">
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700, letterSpacing: '0.04em' }}>
              RECURSOS TÁTICOS:
            </span>

            <button
              className="powerup-btn"
              onClick={handleFiftyFifty}
              disabled={powerUps.fiftyFifty <= 0 || eliminatedOptions.length > 0}
              title="Elimina 2 alternativas incorretas da questão"
            >
              <Scissors size={15} />
              <span>Eliminar 2 Alternativas ({powerUps.fiftyFifty})</span>
            </button>

            <button
              className="powerup-btn"
              onClick={handleFreeze}
              disabled={powerUps.freeze <= 0 || isTimerPaused}
              title="Pausa o cronômetro por 10 segundos"
            >
              <Snowflake size={15} />
              <span>Pausar Tempo ({powerUps.freeze})</span>
            </button>

            <button
              className="powerup-btn"
              onClick={handleUseHint}
              disabled={powerUps.hint <= 0 || showHint}
              title="Exibe uma dica sobre o artigo ou regra cobrada"
            >
              <Lightbulb size={15} />
              <span>Dica da Lei ({powerUps.hint})</span>
            </button>
          </div>
        )}

        {/* Resolução Didática Tintim por Tintim & Fundamentação Legal */}
        {isAnswered && (() => {
          const isUserCorrect = selectedOption === currentQ.correctIndex;
          const correctLetter = optionLetters[currentQ.correctIndex] || 'A';

          return (
            <div
              className="explanation-box"
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.96) 0%, rgba(10, 16, 30, 0.98) 100%)',
                border: isUserCorrect ? '1px solid rgba(16, 185, 129, 0.45)' : '1px solid rgba(239, 68, 68, 0.45)',
                boxShadow: isUserCorrect ? '0 0 25px rgba(16, 185, 129, 0.15)' : '0 0 25px rgba(239, 68, 68, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {/* 1. Header de Status: Acertou ou Errou */}
              {isUserCorrect ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  color: '#34d399',
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}>
                  <CheckCircle2 size={22} color="#10b981" />
                  <span>TIRO CERTEIRO! Você acertou o gabarito oficial da banca: Alternativa {correctLetter}</span>
                </div>
              ) : (
                <div style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontWeight: 800, fontSize: '0.95rem' }}>
                    <XCircle size={22} color="#ef4444" />
                    <span>
                      {selectedOption !== null
                        ? `ATENÇÃO, GUERREIRO(A): Você marcou a Alternativa ${optionLetters[selectedOption]} (Incorreta).`
                        : 'TEMPO ESGOTADO: Você não assinalou a questão a tempo.'}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#fca5a5', paddingLeft: '1.85rem' }}>
                    <strong>Gabarito Oficial da AOCP:</strong> Alternativa{' '}
                    <span style={{ color: '#ffffff', fontWeight: 900, textDecoration: 'underline' }}>{correctLetter}</span>
                  </div>
                </div>
              )}

              {/* 2. Por que você errou (Análise cirúrgica da alternativa marcada) */}
              {!isUserCorrect && selectedOption !== null && (
                <div style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.08)',
                  borderLeft: '4px solid #f59e0b',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24', fontWeight: 800, fontSize: '0.88rem' }}>
                    <AlertTriangle size={16} />
                    <span>POR QUE A ALTERNATIVA {optionLetters[selectedOption]} ESTÁ ERRADA:</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde68a', lineHeight: 1.55 }}>
                    {currentQ.porqueErrou?.[selectedOption] || (
                      `A alternativa ${optionLetters[selectedOption]} é um distrator clássico da banca examinadora. Não preenche o comando da questão ou erra no detalhe da regra aplicável.`
                    )}
                  </p>
                </div>
              )}

              {/* 3. Explicação Geral do Gabarito */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, color: '#38bdf8', fontSize: '0.92rem', marginBottom: '0.4rem' }}>
                  <Scale size={18} />
                  <span>Explicação Didática do Gabarito:</span>
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {currentQ.explanation}
                </p>
              </div>

              {/* 4. Resolução Matemática Passo a Passo (RLM tintim por tintim) */}
              {currentQ.passoAPassoConta && currentQ.passoAPassoConta.length > 0 && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22d3ee', fontWeight: 800, fontSize: '0.92rem' }}>
                    <Calculator size={18} />
                    <span>RESOLUÇÃO PASSO A PASSO DA CONTA (TINTIM POR TINTIM):</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentQ.passoAPassoConta.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          padding: '0.6rem 0.8rem',
                          borderRadius: '10px',
                          background: 'rgba(0, 0, 0, 0.35)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          fontFamily: 'monospace',
                          fontSize: '0.88rem',
                          color: '#cbd5e1',
                          lineHeight: 1.5
                        }}
                      >
                        <strong style={{ color: '#38bdf8' }}>Passo {sIdx + 1}:</strong> {step}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Raio-X de Cada Alternativa (A, B, C, D, E) */}
              {currentQ.analiseAlternativas && Object.keys(currentQ.analiseAlternativas).length > 0 && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a78bfa', fontWeight: 800, fontSize: '0.9rem' }}>
                    <BookOpen size={17} />
                    <span>Raio-X de Todas as Alternativas:</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {Object.entries(currentQ.analiseAlternativas).map(([altKey, altText]) => {
                      const isThisCorrect = altKey.toUpperCase() === correctLetter;
                      return (
                        <div
                          key={altKey}
                          style={{
                            padding: '0.5rem 0.75rem',
                            borderRadius: '8px',
                            background: isThisCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0, 0, 0, 0.2)',
                            borderLeft: isThisCorrect ? '3px solid #10b981' : '3px solid #64748b',
                            fontSize: '0.86rem',
                            lineHeight: 1.45
                          }}
                        >
                          <strong style={{ color: isThisCorrect ? '#34d399' : '#cbd5e1' }}>
                            Alternativa {altKey.toUpperCase()} {isThisCorrect ? '(CORRETA):' : '(INCORRETA):'}
                          </strong>{' '}
                          <span style={{ color: '#94a3b8' }}>{altText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 6. Bizu Tático da Banca AOCP */}
              {currentQ.dicaMacete && (
                <div style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(234, 179, 8, 0.15))',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}>
                  <Sparkles size={20} color="#fbbf24" />
                  <div style={{ fontSize: '0.88rem' }}>
                    <strong style={{ color: '#fbbf24' }}>BIZU TÁTICO PMPE:</strong>{' '}
                    <span style={{ color: '#f3e8ff' }}>{currentQ.dicaMacete}</span>
                  </div>
                </div>
              )}

              {/* 7. Fundamentação Legal */}
              {currentQ.fundamentacaoLegal && (
                <div style={{
                  fontSize: '0.85rem',
                  color: '#fbbf24',
                  background: 'rgba(245, 158, 11, 0.08)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '10px',
                  borderLeft: '3px solid #f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Scale size={16} />
                  <span><strong>Fundamentação Legal:</strong> {currentQ.fundamentacaoLegal}</span>
                </div>
              )}

              {/* Botão de Avançar */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button className="btn-primary" onClick={handleNext} style={{ padding: '0.75rem 1.4rem' }}>
                  <span>{currentIndex + 1 < activeQuestions.length ? 'Avançar Próxima Questão' : 'Concluir Simulado & Ver Resultado'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
