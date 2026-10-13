import React, { useState, useEffect, useCallback } from 'react';
import type { QuizQuestion } from '../types/game';
import { Timer, Zap, Lightbulb, Snowflake, Scissors, ArrowRight, HelpCircle, CheckCircle2, XCircle, Shield, Scale } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface QuizGameProps {
  questions: QuizQuestion[];
  onFinish: (result: {
    score: number;
    xpEarned: number;
    maxCombo: number;
    correctCount: number;
    totalCount: number;
    subjectBreakdown?: Record<string, { total: number; correct: number }>;
  }) => void;
  onExit: () => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({ questions, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [subjectBreakdown, setSubjectBreakdown] = useState<Record<string, { total: number; correct: number }>>({});

  // Power-ups state
  const [powerUps, setPowerUps] = useState({
    hint: 2,
    freeze: 2,
    fiftyFifty: 2,
  });
  const [showHint, setShowHint] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);

  const currentQ = questions[currentIndex] || questions[0];

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
    const subj = currentQ?.materiaNome || currentQ?.categoryId || 'Geral';
    setSubjectBreakdown((prev) => {
      const current = prev[subj] || { total: 0, correct: 0 };
      return {
        ...prev,
        [subj]: { total: current.total + 1, correct: current.correct }
      };
    });
  }, [currentQ]);

  // Selecionar Opção
  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

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
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(30);
      setShowHint(false);
      setEliminatedOptions([]);
    } else {
      // Fim do Simulado
      const calculatedXp = Math.floor(score / 5) + correctCount * 25;
      onFinish({
        score,
        xpEarned: calculatedXp,
        maxCombo,
        correctCount,
        totalCount: questions.length,
        subjectBreakdown,
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
            className="btn-secondary"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '10px' }}
          >
            ← Sair da Prova
          </button>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Questão <span style={{ color: 'white', fontWeight: 800 }}>{currentIndex + 1}</span> de {questions.length}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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

        {/* Resolução Didática & Fundamentação Legal */}
        {isAnswered && (
          <div className="explanation-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--neon-cyan)' }}>
              <Scale size={18} />
              <span>Gabarito Comentado (Padrão AOCP):</span>
            </div>

            {currentQ.fundamentacaoLegal && (
              <div style={{ fontSize: '0.85rem', color: '#fbbf24', background: 'rgba(245, 158, 11, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
                ⚖️ <strong>Fundamentação:</strong> {currentQ.fundamentacaoLegal}
              </div>
            )}

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.55 }}>
              {currentQ.explanation}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
              <button className="btn-primary" onClick={handleNext}>
                <span>{currentIndex + 1 < questions.length ? 'Próxima Questão' : 'Ver Resultado do Simulado'}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
