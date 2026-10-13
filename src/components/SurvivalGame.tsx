import React, { useState, useEffect, useRef } from 'react';
import type { QuizQuestion } from '../types/game';
import { 
  Heart, 
  Flame, 
  Clock, 
  Sparkles, 
  Zap, 
  Award, 
  RotateCcw, 
  Home, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  HelpCircle, 
  Crosshair, 
  ChevronRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface SurvivalGameProps {
  questions: QuizQuestion[];
  onFinish: (result: {
    score: number;
    xpEarned: number;
    maxCombo: number;
    correctCount: number;
    totalCount: number;
  }) => void;
  onExit: () => void;
  onAwardXp: (xp: number) => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

// Patentes Militares com Base em Questões Sobrevividas
const MILITARY_RANKS = [
  { min: 0, title: 'Soldado Recruta', icon: '🔰', color: '#94a3b8' },
  { min: 3, title: 'Soldado 1ª Classe', icon: '🎖️', color: '#38bdf8' },
  { min: 6, title: 'Cabo PMPE', icon: '⚔️', color: '#34d399' },
  { min: 10, title: '3º Sargento', icon: '🛡️', color: '#a855f7' },
  { min: 15, title: 'Subtenente', icon: '⭐', color: '#f59e0b' },
  { min: 20, title: 'Aspirante a Oficial', icon: '🌟', color: '#f97316' },
  { min: 30, title: 'Capitão da PM', icon: '🦅', color: '#ef4444' },
  { min: 40, title: 'Coronel Comandante-Geral', icon: '👑', color: '#eab308' },
];

export const SurvivalGame: React.FC<SurvivalGameProps> = ({
  questions,
  onFinish,
  onExit,
  onAwardXp,
  onQuestionAnswered,
}) => {
  // Embaralhar as questões para uma missão tática imprevisível
  const [shuffledQuestions] = useState<QuizQuestion[]>(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  // Tempo por questão (35 segundos padrão)
  const QUESTION_TIME = 35;
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  // Habilidades Táticas de Apoio (Power-ups)
  const [powerupFiftyFiftyCharges, setPowerupFiftyFiftyCharges] = useState(2);
  const [powerupTimeCharges, setPowerupTimeCharges] = useState(2);
  const [powerupHintCharges, setPowerupHintCharges] = useState(2);

  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [showHintActive, setShowHintActive] = useState(false);

  const timerRef = useRef<any>(null);

  const currentQ = shuffledQuestions[currentIndex] || questions[0];

  // Cálculo da Patente Atual
  const currentRank = [...MILITARY_RANKS].reverse().find(r => totalCorrect >= r.min) || MILITARY_RANKS[0];

  // Cronômetro Tático
  useEffect(() => {
    if (isAnswered || isGameOver) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Tempo Esgotado!
          clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAnswered, isGameOver]);

  // Tempo Esgotado
  const handleTimeOut = () => {
    sound.playError();
    setIsAnswered(true);
    setSelectedOption(-1);
    setStreak(0);
    const newLives = lives - 1;
    setLives(newLives);

    if (onQuestionAnswered) {
      onQuestionAnswered(false, 0);
    }

    if (newLives <= 0) {
      setTimeout(() => triggerGameOver(score, totalCorrect), 1200);
    }
  };

  // Responder Questão
  const handleSelectOption = (idx: number) => {
    if (isAnswered || isGameOver || disabledOptions.includes(idx)) return;

    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      sound.playSuccess();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Multiplicador de Combo
      const multiplier = Math.min(5, Math.floor(newStreak / 2) + 1);
      const speedBonus = timeLeft * 10;
      const pointsGained = (150 * multiplier) + speedBonus;
      const xpGained = 20 * multiplier;

      setScore((prev) => prev + pointsGained);
      setTotalCorrect((prev) => prev + 1);
      onAwardXp(xpGained);

      // Comemoração a cada marco de acertos
      if ((totalCorrect + 1) % 5 === 0) {
        sound.playLevelUp();
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      }

      if (onQuestionAnswered) {
        onQuestionAnswered(true, xpGained);
      }
    } else {
      sound.playError();
      setStreak(0);
      const newLives = lives - 1;
      setLives(newLives);

      if (onQuestionAnswered) {
        onQuestionAnswered(false, 0);
      }

      if (newLives <= 0) {
        setTimeout(() => triggerGameOver(score, totalCorrect), 1600);
      }
    }
  };

  // Avançar para a Próxima Pergunta
  const handleNextQuestion = () => {
    if (lives <= 0) {
      triggerGameOver(score, totalCorrect);
      return;
    }

    sound.playClick();
    if (currentIndex + 1 < shuffledQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setTimeLeft(QUESTION_TIME);
      setIsAnswered(false);
      setSelectedOption(null);
      setDisabledOptions([]);
      setShowHintActive(false);
    } else {
      // Zerou o banco de questões na missão!
      triggerGameOver(score, totalCorrect);
    }
  };

  // Acionar Fim de Jogo
  const triggerGameOver = (_finalScore: number, _finalCorrect: number) => {
    setIsGameOver(true);
    sound.playLevelUp();
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.5 } });
  };

  // Habilidade 1: Tiro Certeiro (50/50)
  const useFiftyFifty = () => {
    if (powerupFiftyFiftyCharges <= 0 || isAnswered || disabledOptions.length > 0) return;
    sound.playClick();
    setPowerupFiftyFiftyCharges((prev) => prev - 1);

    // Selecionar 2 opções incorretas aleatórias para eliminar
    const incorrectIndices = currentQ.options
      .map((_, i) => i)
      .filter((i) => i !== currentQ.correctIndex);

    const shuffledIncorrect = incorrectIndices.sort(() => Math.random() - 0.5);
    const toDisable = shuffledIncorrect.slice(0, 2);
    setDisabledOptions(toDisable);
  };

  // Habilidade 2: Reforço de Tempo (+15s)
  const useTimeReinforcement = () => {
    if (powerupTimeCharges <= 0 || isAnswered) return;
    sound.playClick();
    setPowerupTimeCharges((prev) => prev - 1);
    setTimeLeft((prev) => prev + 15);
  };

  // Habilidade 3: Doutrina AOCP (Dica & Macete)
  const useHint = () => {
    if (powerupHintCharges <= 0 || isAnswered || showHintActive) return;
    sound.playClick();
    setPowerupHintCharges((prev) => prev - 1);
    setShowHintActive(true);
  };

  // Reiniciar Missão
  const handleRestart = () => {
    sound.playClick();
    setLives(3);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTotalCorrect(0);
    setCurrentIndex(0);
    setTimeLeft(QUESTION_TIME);
    setIsAnswered(false);
    setSelectedOption(null);
    setIsGameOver(false);
    setDisabledOptions([]);
    setShowHintActive(false);
    setPowerupFiftyFiftyCharges(2);
    setPowerupTimeCharges(2);
    setPowerupHintCharges(2);
  };

  // Concluir e Voltar
  const handleFinishMission = () => {
    sound.playClick();
    onFinish({
      score,
      xpEarned: Math.round(score / 5),
      maxCombo: maxStreak,
      correctCount: totalCorrect,
      totalCount: currentIndex + 1,
    });
  };

  // Percentual do Tempo para Barra Circular
  const timeProgress = (timeLeft / QUESTION_TIME) * 100;
  const timerColor = timeLeft > 15 ? '#38bdf8' : timeLeft > 7 ? '#fbbf24' : '#ef4444';

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* TELA DE GAME OVER / VITÓRIA DE SOBREVIVÊNCIA */}
      {isGameOver ? (
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
          border: '2px solid rgba(245, 158, 11, 0.6)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(245, 158, 11, 0.3)',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '0.5rem' }}>
            {currentRank.icon}
          </div>

          <span style={{
            fontSize: '0.85rem',
            fontWeight: 900,
            padding: '0.3rem 1rem',
            borderRadius: '20px',
            background: 'rgba(245, 158, 11, 0.2)',
            color: '#fbbf24',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            Missão Sobrevivência Finalizada
          </span>

          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', margin: '0.75rem 0 0.35rem' }}>
            {currentRank.title}
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '0 auto 2rem', maxWidth: '480px' }}>
            Excelente patrulha operacional! Você combateu bravamente as questões da banca AOCP.
          </p>

          {/* Cards de Métricas */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>PONTUAÇÃO</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fbbf24', marginTop: '0.2rem' }}>{score}</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>ACERTOS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#34d399', marginTop: '0.2rem' }}>{totalCorrect}</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>MAIOR COMBO</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f97316', marginTop: '0.2rem' }}>{maxStreak}x 🔥</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 800 }}>XP GANHO</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a855f7', marginTop: '0.2rem' }}>+{Math.round(score / 5)} XP</div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleRestart}
              className="btn-primary"
              style={{ padding: '0.8rem 1.8rem', fontSize: '0.95rem', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <RotateCcw size={18} />
              <span>Jogar Novamente</span>
            </button>

            <button
              onClick={handleFinishMission}
              className="btn-secondary"
              style={{ padding: '0.8rem 1.8rem', fontSize: '0.95rem', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Home size={18} />
              <span>Voltar ao QG</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* HEADER TÁTICO DA SOBREVIVÊNCIA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '20px',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
          }}>
            {/* Vidas Restantes */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase' }}>
                Vidas:
              </span>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {[1, 2, 3].map((heartIndex) => (
                  <Heart
                    key={heartIndex}
                    size={22}
                    fill={heartIndex <= lives ? '#ef4444' : 'none'}
                    color={heartIndex <= lives ? '#ef4444' : '#475569'}
                    style={{
                      filter: heartIndex <= lives ? 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))' : 'none',
                      transition: 'transform 0.2s ease',
                      transform: heartIndex <= lives ? 'scale(1)' : 'scale(0.85)'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cronômetro Circular Central */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                position: 'relative',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <circle
                    cx="22"
                    cy="22"
                    r="18"
                    fill="none"
                    stroke={timerColor}
                    strokeWidth="4"
                    strokeDasharray={113}
                    strokeDashoffset={113 - (113 * timeProgress) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease' }}
                  />
                </svg>
                <span style={{
                  position: 'absolute',
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  color: timerColor
                }}>
                  {timeLeft}
                </span>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 800 }}>TEMPO</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: timerColor }}>{timeLeft}s</div>
              </div>
            </div>

            {/* Patente & Combo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {streak > 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '12px',
                  background: 'rgba(249, 115, 22, 0.2)',
                  border: '1px solid rgba(249, 115, 22, 0.5)',
                  color: '#fb923c',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  animation: 'pulse 1s infinite'
                }}>
                  <Flame size={15} color="#f97316" />
                  <span>COMBO {streak}x</span>
                </div>
              )}

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 800 }}>PATENTE</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 900, color: currentRank.color }}>
                  {currentRank.icon} {currentRank.title}
                </div>
              </div>
            </div>

            {/* Botão Sair */}
            <button
              onClick={() => {
                sound.playClick();
                onExit();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#94a3b8',
                borderRadius: '10px',
                padding: '0.4rem 0.75rem',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              Abandonar
            </button>
          </div>

          {/* BARRA DE HABILIDADES TÁTICAS (POWER-UPS) */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={useFiftyFifty}
              disabled={powerupFiftyFiftyCharges <= 0 || isAnswered || disabledOptions.length > 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '12px',
                background: powerupFiftyFiftyCharges > 0 && !isAnswered && disabledOptions.length === 0
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(2, 132, 199, 0.25))'
                  : 'rgba(255, 255, 255, 0.05)',
                border: powerupFiftyFiftyCharges > 0 && !isAnswered && disabledOptions.length === 0
                  ? '1px solid #06b6d4'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: powerupFiftyFiftyCharges > 0 && !isAnswered && disabledOptions.length === 0 ? '#38bdf8' : '#64748b',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: powerupFiftyFiftyCharges > 0 && !isAnswered && disabledOptions.length === 0 ? 'pointer' : 'not-allowed'
              }}
              title="Elimina 2 alternativas erradas da questão"
            >
              <Crosshair size={15} />
              <span>Tiro Certeiro (50/50) [{powerupFiftyFiftyCharges}]</span>
            </button>

            <button
              onClick={useTimeReinforcement}
              disabled={powerupTimeCharges <= 0 || isAnswered}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '12px',
                background: powerupTimeCharges > 0 && !isAnswered
                  ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(126, 34, 206, 0.25))'
                  : 'rgba(255, 255, 255, 0.05)',
                border: powerupTimeCharges > 0 && !isAnswered
                  ? '1px solid #a855f7'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: powerupTimeCharges > 0 && !isAnswered ? '#c084fc' : '#64748b',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: powerupTimeCharges > 0 && !isAnswered ? 'pointer' : 'not-allowed'
              }}
              title="Ganha +15 segundos no cronômetro"
            >
              <Zap size={15} />
              <span>Reforço (+15s) [{powerupTimeCharges}]</span>
            </button>

            <button
              onClick={useHint}
              disabled={powerupHintCharges <= 0 || isAnswered || showHintActive}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '12px',
                background: powerupHintCharges > 0 && !isAnswered && !showHintActive
                  ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(217, 119, 6, 0.25))'
                  : 'rgba(255, 255, 255, 0.05)',
                border: powerupHintCharges > 0 && !isAnswered && !showHintActive
                  ? '1px solid #f59e0b'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: powerupHintCharges > 0 && !isAnswered && !showHintActive ? '#fbbf24' : '#64748b',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: powerupHintCharges > 0 && !isAnswered && !showHintActive ? 'pointer' : 'not-allowed'
              }}
              title="Exibe a dica tática ou mnemônico da AOCP"
            >
              <HelpCircle size={15} />
              <span>Doutrina AOCP [{powerupHintCharges}]</span>
            </button>
          </div>

          {/* CARD DA QUESTÃO TÁTICA */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.92)',
            border: '1.5px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '22px',
            padding: '1.75rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
            position: 'relative'
          }}>
            {/* Meta tags da questão */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  textTransform: 'uppercase'
                }}>
                  {currentQ.materiaNome}
                </span>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '8px',
                  background: 'rgba(234, 179, 8, 0.15)',
                  color: '#fbbf24',
                  border: '1px solid rgba(234, 179, 8, 0.35)'
                }}>
                  {currentQ.banca || 'Instituto AOCP'}
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800 }}>
                Questão {currentIndex + 1} de {shuffledQuestions.length}
              </div>
            </div>

            {/* Enunciado */}
            <h3 style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#f8fafc',
              lineHeight: 1.55,
              margin: '0 0 1.5rem'
            }}>
              {currentQ.question}
            </h3>

            {/* Dica da Doutrina se ativada */}
            {showHintActive && (
              <div style={{
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                color: '#fde68a',
                fontSize: '0.85rem',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                animation: 'fadeIn 0.2s ease-out'
              }}>
                <Sparkles size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Doutrina Tática:</strong> {currentQ.hint || currentQ.dicaMacete || 'Atenção aos termos literais da legislação e ao posicionamento padrão da banca AOCP.'}
                </div>
              </div>
            )}

            {/* Alternativas (A a E) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentQ.options.map((opt, idx) => {
                const letters = ['A', 'B', 'C', 'D', 'E'];
                const letter = letters[idx];
                const isDisabled = disabledOptions.includes(idx);
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnBg = 'rgba(30, 41, 59, 0.6)';
                let btnBorder = 'rgba(71, 85, 105, 0.4)';
                let textColor = '#e2e8f0';

                if (isAnswered) {
                  if (isCorrect) {
                    btnBg = 'rgba(16, 185, 129, 0.25)';
                    btnBorder = '#10b981';
                    textColor = '#a7f3d0';
                  } else if (isSelected) {
                    btnBg = 'rgba(239, 68, 68, 0.25)';
                    btnBorder = '#ef4444';
                    textColor = '#fecaca';
                  }
                } else if (isDisabled) {
                  btnBg = 'rgba(15, 23, 42, 0.3)';
                  btnBorder = 'rgba(255, 255, 255, 0.05)';
                  textColor = '#475569';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered || isDisabled}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '14px',
                      background: btnBg,
                      border: `1.5px solid ${btnBorder}`,
                      color: textColor,
                      textAlign: 'left',
                      fontSize: '0.92rem',
                      fontWeight: isSelected || (isAnswered && isCorrect) ? 700 : 500,
                      cursor: isAnswered || isDisabled ? 'default' : 'pointer',
                      transition: 'all 0.18s ease',
                      position: 'relative',
                      opacity: isDisabled ? 0.35 : 1,
                      textDecoration: isDisabled ? 'line-through' : 'none'
                    }}
                  >
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: isAnswered && isCorrect
                        ? '#10b981'
                        : isAnswered && isSelected
                          ? '#ef4444'
                          : 'rgba(255, 255, 255, 0.08)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>
                      {letter}
                    </span>

                    <span style={{ flex: 1, lineHeight: 1.4 }}>{opt}</span>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0 }} />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle size={20} color="#ef4444" style={{ flexShrink: 0 }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* FUNDAMENTAÇÃO LEGAL & BOTÃO PRÓXIMA */}
            {isAnswered && (
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                animation: 'fadeIn 0.25s ease-out'
              }}>
                <div style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  background: selectedOption === currentQ.correctIndex ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                  border: `1px solid ${selectedOption === currentQ.correctIndex ? 'rgba(16, 185, 129, 0.35)' : 'rgba(239, 68, 68, 0.35)'}`
                }}>
                  <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    color: selectedOption === currentQ.correctIndex ? '#34d399' : '#f87171',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    {selectedOption === currentQ.correctIndex ? '🎯 TIRO CERTEIRO! ACERTO TÁTICO' : '⚠️ IMPACTO SOFRIDO! MENOS 1 VIDA'}
                  </div>

                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.45 }}>
                    {currentQ.explanation}
                  </p>

                  {currentQ.fundamentacaoLegal && (
                    <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700 }}>
                      ⚖️ Base Legal: {currentQ.fundamentacaoLegal}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={handleNextQuestion}
                    style={{
                      padding: '0.75rem 1.6rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                      border: '1px solid #38bdf8',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 15px rgba(2, 132, 199, 0.4)'
                    }}
                  >
                    <span>{lives <= 0 ? 'Ver Resultado Final' : 'Próxima Questão'}</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
