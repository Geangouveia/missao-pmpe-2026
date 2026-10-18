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
  AlertTriangle,
  ArrowLeft,
  Scale,
  BookOpen
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { prepareGameQuestions } from '../utils/questionRandomizer';
import { filterOutAnsweredToday, markQuestionAnsweredToday, clearAnsweredToday } from '../utils/dailyQuestionTracker';

interface SurvivalGameProps {
  questions: QuizQuestion[];
  userName?: string;
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

// Patentes Militares Oficiais PMPE com Escala Completa de Carreira
export const PMPE_MILITARY_RANKS = [
  { level: 0, title: 'Aluno Soldado (Recruta)', icon: '🔰', color: '#94a3b8' },
  { level: 1, title: 'Soldado Combatente', icon: '🎖️', color: '#38bdf8' },
  { level: 2, title: 'Soldado 1ª Classe', icon: '🎖️⭐', color: '#60a5fa' },
  { level: 3, title: 'Cabo PMPE', icon: '⚔️', color: '#34d399' },
  { level: 4, title: '3º Sargento', icon: '🛡️', color: '#a855f7' },
  { level: 5, title: '2º Sargento', icon: '🛡️', color: '#c084fc' },
  { level: 6, title: '1º Sargento', icon: '🛡️', color: '#e879f9' },
  { level: 7, title: 'Subtenente', icon: '⭐', color: '#f59e0b' },
  { level: 8, title: 'Aspirante a Oficial', icon: '🌟', color: '#fbbf24' },
  { level: 9, title: '2º Tenente', icon: '🔷', color: '#38bdf8' },
  { level: 10, title: '1º Tenente', icon: '🔷🔷', color: '#0284c7' },
  { level: 11, title: 'Capitão PMPE', icon: '🦅', color: '#f97316' },
  { level: 12, title: 'Major PMPE', icon: '⚜️', color: '#ea580c' },
  { level: 13, title: 'Tenente-Coronel', icon: '⭐👑', color: '#ef4444' },
  { level: 14, title: 'Coronel Comandante-Geral', icon: '👑🏆', color: '#eab308' },
];

export const SurvivalGame: React.FC<SurvivalGameProps> = ({
  questions,
  userName = '',
  onFinish,
  onExit,
  onAwardXp,
  onQuestionAnswered,
}) => {
  // Embaralhar as questões e filtrar não repetidas no mesmo dia (pedido pelo Comandante Gean: NUNCA REPETIR)
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(() => {
    const unrepeated = filterOutAnsweredToday(questions, userName);
    return prepareGameQuestions(unrepeated);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(4); // Comandante Gean: Aumentado para 4 vidas (+1 vida)!
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  // Tempo por questão (50 segundos - Comandante Gean)
  const QUESTION_TIME = 50;
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  // Habilidades Táticas de Apoio (Power-ups)
  const [powerupFiftyFiftyCharges, setPowerupFiftyFiftyCharges] = useState(2);
  const [powerupTimeCharges, setPowerupTimeCharges] = useState(2);
  const [powerupHintCharges, setPowerupHintCharges] = useState(2);
  // NOVO PODER: Disparo Triplo de Pistola (4 chances no jogo - Comandante Gean)
  const [powerupTripleShotCharges, setPowerupTripleShotCharges] = useState(4);
  const [isShootingPistol, setIsShootingPistol] = useState(false);

  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [showHintActive, setShowHintActive] = useState(false);

  const timerRef = useRef<any>(null);

  const currentQ = shuffledQuestions[currentIndex] || questions[0];

  // Progressão Tática de Patente (Comandante Gean: 4 acertos no total do nível para subir de patente)
  const [rankIndex, setRankIndex] = useState(0);
  const [rankCorrectInLevel, setRankCorrectInLevel] = useState(0);
  const [promotionAlert, setPromotionAlert] = useState<string | null>(null);

  // Cálculo da Patente Atual
  const currentRank = PMPE_MILITARY_RANKS[rankIndex] || PMPE_MILITARY_RANKS[0];

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
    // Comandante Gean: Mantém rankCorrectInLevel preservado mesmo perdendo vida
    const newLives = lives - 1;
    setLives(newLives);

    if (currentQ?.id) {
      markQuestionAnsweredToday(userName, currentQ.id, currentQ.question);
    }

    if (onQuestionAnswered) {
      onQuestionAnswered(false, 0);
    }

    // Comandante Gean pediu: se perdeu todas as vidas, NÃO fechar a tela automaticamente!
    // O aluno precisa ler a explicação com calma e ver onde errou.
  };

  // Responder Questão
  const handleSelectOption = (idx: number) => {
    if (isAnswered || isGameOver || disabledOptions.includes(idx)) return;

    if (timerRef.current) clearInterval(timerRef.current);
    setSelectedOption(idx);
    setIsAnswered(true);

    if (currentQ?.id) {
      markQuestionAnsweredToday(userName, currentQ.id, currentQ.question);
    }
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Efeitos Sonoros Militares Imersivos (Tiros AK, .38, Double Tap, etc.)
      if (newStreak === 2) {
        sound.playDoubleTap(); // Duplo disparo rápido .38
      } else if (newStreak === 4) {
        sound.playAk47Burst(); // Rajada de Fuzil AK-47
      } else if (newStreak >= 6 && newStreak % 2 === 0) {
        sound.playSniperShot(); // Tiro de Precisão Sniper
      } else if ((totalCorrect + 1) % 5 === 0) {
        sound.playMilitaryAchievement(); // Salva de honra militar
      } else {
        sound.playGunshot38(); // Tiro tático seco .38
      }

      // Multiplicador de Combo
      const multiplier = Math.min(5, Math.floor(newStreak / 2) + 1);
      const speedBonus = timeLeft * 10;
      const pointsGained = (150 * multiplier) + speedBonus;
      const xpGained = 20 * multiplier;

      setScore((prev) => prev + pointsGained);
      setTotalCorrect((prev) => prev + 1);
      onAwardXp(xpGained);

      // Comandante Gean: Lógica de Promoção Militar
      // 4 acertos no total do nível para subir de patente!
      // (O combatente pode errar e perder vida, mas quando somar 4 acertos no nível, SOBE DE PATENTE!)
      const nextRankCorrect = rankCorrectInLevel + 1;

      if (nextRankCorrect >= 4 && rankIndex < PMPE_MILITARY_RANKS.length - 1) {
        const nextRank = PMPE_MILITARY_RANKS[rankIndex + 1];
        setRankIndex((prev) => prev + 1);
        setRankCorrectInLevel(0);
        setPromotionAlert(nextRank.title);
        sound.playLevelUp();
        confetti({ particleCount: 110, spread: 85, origin: { y: 0.35 } });
      } else {
        setRankCorrectInLevel(nextRankCorrect);
      }

      // Comemoração visual a cada marco de 5 acertos
      if ((totalCorrect + 1) % 5 === 0) {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      }

      if (onQuestionAnswered) {
        onQuestionAnswered(true, xpGained);
      }
    } else {
      sound.playError();
      setStreak(0);
      // Comandante Gean: Errou? Perde vida, mas NÃO perde os acertos já acumulados na patente!
      const newLives = lives - 1;
      setLives(newLives);

      if (onQuestionAnswered) {
        onQuestionAnswered(false, 0);
      }

      // Comandante Gean: NÃO fechar a tela automaticamente se zerar as vidas!
      // O combatente terá todo o tempo que precisar para ler a explicação da última questão.
    }
  };

  // Avançar para a Próxima Pergunta
  const handleNextQuestion = () => {
    if (lives <= 0) {
      triggerGameOver(score, totalCorrect);
      return;
    }

    sound.playClick();
    setPromotionAlert(null);
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

  // NOVO PODER: Disparo Triplo de Pistola (-3 Opções Incorretas - 4 Cargas - Comandante Gean)
  const useTripleShot = () => {
    if (powerupTripleShotCharges <= 0 || isAnswered || disabledOptions.length >= 3) return;
    setPowerupTripleShotCharges((prev) => prev - 1);
    setIsShootingPistol(true);
    sound.playTriplePistolShot();

    // Eliminar exatamente 3 alternativas incorretas, restando apenas 1 certa e 1 errada (2 opções no total)
    const incorrectIndices = currentQ.options
      .map((_, i) => i)
      .filter((i) => i !== currentQ.correctIndex && !disabledOptions.includes(i));

    const shuffledIncorrect = incorrectIndices.sort(() => Math.random() - 0.5);
    const toDisable = shuffledIncorrect.slice(0, 3);

    setTimeout(() => {
      setDisabledOptions((prev) => Array.from(new Set([...prev, ...toDisable])));
      setIsShootingPistol(false);
    }, 450);
  };

  // Reiniciar Missão com perguntas e gabaritos totalmente novos
  const handleRestart = () => {
    sound.playClick();
    const unrepeated = filterOutAnsweredToday(questions, userName || '');
    setShuffledQuestions(prepareGameQuestions(unrepeated));
    setLives(4);
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
    setPowerupTripleShotCharges(4);
    setRankIndex(0);
    setRankCorrectInLevel(0);
    setPromotionAlert(null);
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

  // Se todas as questões do bloco selecionado já foram respondidas hoje
  if (shuffledQuestions.length === 0) {
    return (
      <div className="glass-panel" style={{ maxWidth: '640px', margin: '2rem auto', padding: '2.5rem', textAlign: 'center', borderRadius: '24px', border: '2px solid rgba(56, 189, 248, 0.4)' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', border: '2px solid #38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', fontSize: '2.5rem' }}>
          🎯
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#f8fafc', marginBottom: '0.6rem' }}>
          Missão do Dia Cumprida!
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
          Você já respondeu todas as questões deste caderno hoje. Conforme o padrão do Comandante, para garantir estudo real, <strong>questões respondidas nunca se repetem no mesmo dia</strong>.
        </p>
        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              sound.playClick();
              onExit();
            }}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.6rem', fontWeight: 800, background: 'linear-gradient(135deg, #0284c7, #0369a1)' }}
          >
            <span>Escolher Outra Matéria / Simulado</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              clearAnsweredToday(userName);
              const unrep = filterOutAnsweredToday(questions, userName);
              setShuffledQuestions(prepareGameQuestions(unrep.length > 0 ? unrep : questions));
              handleRestart();
            }}
            className="btn btn-secondary"
            style={{ padding: '0.85rem 1.2rem', fontSize: '0.84rem' }}
          >
            <RotateCcw size={16} />
            <span>🔄 Forçar Revisão (Resetar Hoje)</span>
          </button>
        </div>
      </div>
    );
  }

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
                {[1, 2, 3, 4].map((heartIndex) => (
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

            {/* Patente Militar & Barrinha Tática de Promoção (Comandante Gean) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              minWidth: '240px',
              padding: '0.45rem 0.85rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(20, 30, 24, 0.85), rgba(15, 23, 42, 0.9))',
              border: '1.5px solid rgba(34, 197, 94, 0.3)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.35)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{currentRank.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.64rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Patente Atual
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 900, color: currentRank.color }}>
                      {currentRank.title}
                    </div>
                  </div>
                </div>

                {streak > 1 && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '8px',
                    background: 'rgba(249, 115, 22, 0.25)',
                    border: '1px solid rgba(249, 115, 22, 0.5)',
                    color: '#fb923c',
                    fontWeight: 900,
                    fontSize: '0.74rem',
                    animation: 'pulse 1s infinite'
                  }}>
                    <Flame size={13} color="#f97316" />
                    <span>{streak}x</span>
                  </div>
                )}
              </div>

              {/* BARRINHA DE PROMOÇÃO: 4 ACERTOS NO NÍVEL (COMANDANTE GEAN) */}
              <div style={{ marginTop: '0.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.68rem', color: '#cbd5e1', fontWeight: 700 }}>
                    {rankIndex < PMPE_MILITARY_RANKS.length - 1 
                      ? `Rumo a: ${PMPE_MILITARY_RANKS[rankIndex + 1].title}` 
                      : 'Patente Máxima Alcançada! 🏆'}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#fbbf24', fontWeight: 800 }}>
                    {rankCorrectInLevel}/4 acertos no nível
                  </span>
                </div>

                {/* Os 4 bloquinhos da barrinha de progressão */}
                <div style={{ display: 'flex', gap: '5px' }}>
                  {[1, 2, 3, 4].map((step) => {
                    const isFilled = rankCorrectInLevel >= step;
                    return (
                      <div
                        key={step}
                        style={{
                          flex: 1,
                          height: '9px',
                          borderRadius: '5px',
                          background: isFilled
                            ? 'linear-gradient(90deg, #22c55e, #10b981)'
                            : 'rgba(255, 255, 255, 0.1)',
                          border: isFilled ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.12)',
                          boxShadow: isFilled ? '0 0 10px rgba(34, 197, 94, 0.7)' : 'none',
                          transition: 'all 0.25s ease'
                        }}
                        title={`Acerto ${step}/4 para subir de patente`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Botão Sair */}
            <button
              onClick={() => {
                sound.playClick();
                onExit();
              }}
              className="quiz-exit-btn"
              title="Sair da Missão Sobrevivência"
            >
              <ArrowLeft size={16} />
              <span>Sair da Missão</span>
            </button>
          </div>

          {/* BANNER DINÂMICO DE PROMOÇÃO MILITAR (COMANDANTE GEAN) */}
          {promotionAlert && (
            <div style={{
              padding: '0.85rem 1.25rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(21, 128, 61, 0.35))',
              border: '1.5px solid #22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              color: '#86efac',
              fontWeight: 800,
              fontSize: '0.95rem',
              animation: 'pulse 1.2s infinite',
              boxShadow: '0 8px 25px rgba(34, 197, 94, 0.3)'
            }}>
              <Award size={22} color="#fbbf24" />
              <span>🎖️ PROMOÇÃO MILITAR! Parabéns soldado, você subiu para {promotionAlert}!</span>
            </div>
          )}

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

            {/* NOVO PODER: DISPARO TRIPLO DE PISTOLA COM SOM (4 CHANCES - COMANDANTE GEAN) */}
            <button
              onClick={useTripleShot}
              disabled={powerupTripleShotCharges <= 0 || isAnswered || disabledOptions.length >= 3}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.95rem',
                borderRadius: '12px',
                background: powerupTripleShotCharges > 0 && !isAnswered && disabledOptions.length < 3
                  ? isShootingPistol
                    ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.5), rgba(220, 38, 38, 0.7))'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(185, 28, 28, 0.35))'
                  : 'rgba(255, 255, 255, 0.05)',
                border: powerupTripleShotCharges > 0 && !isAnswered && disabledOptions.length < 3
                  ? '1px solid #ef4444'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: powerupTripleShotCharges > 0 && !isAnswered && disabledOptions.length < 3 ? '#fca5a5' : '#64748b',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: powerupTripleShotCharges > 0 && !isAnswered && disabledOptions.length < 3 ? 'pointer' : 'not-allowed',
                transform: isShootingPistol ? 'scale(1.05)' : 'none',
                boxShadow: isShootingPistol ? '0 0 15px rgba(239, 68, 68, 0.8)' : 'none',
                transition: 'all 0.18s ease'
              }}
              title="Disparo Triplo de Pistola (POW! POW! POW!) - Elimina 3 alternativas erradas, restando apenas 2 opções!"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10h14l3-3v5l-3 1-1 7-4-1 1-6H3v-3z" />
                <path d="M7 13v3" />
                <circle cx="17" cy="8" r="1" fill="currentColor" />
              </svg>
              <span>Disparo Triplo (-3 Opções) [{powerupTripleShotCharges}]</span>
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

                    {isDisabled && !isAnswered && (
                      <span style={{
                        fontSize: '0.72rem',
                        color: '#f87171',
                        fontWeight: 800,
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        flexShrink: 0
                      }}>
                        💥 Abatida
                      </span>
                    )}

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

            {/* QUADRO DE EXPLICAÇÃO COMPLETO TINTIM POR TINTIM (COMANDANTE GEAN) */}
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
                {/* AVISO QUANDO ESGOTA AS 4 VIDAS - NÃO FECHA ATÉ O ALUNO CLICAR */}
                {lives <= 0 && (
                  <div style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(185, 28, 28, 0.35))',
                    border: '1.5px solid #ef4444',
                    color: '#fecaca',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)'
                  }}>
                    <AlertTriangle size={24} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.88rem', lineHeight: 1.5 }}>
                      <strong style={{ color: '#ffffff', display: 'block', fontSize: '1rem', marginBottom: '0.25rem' }}>
                        🚨 VOCÊ PERDEU SUA ÚLTIMA VIDA NESTA QUESTÃO!
                      </strong>
                      Tome todo o tempo necessário para estudar e analisar a explicação detalhada <strong>tintim por tintim</strong> logo abaixo.
                      Quando terminar sua análise com calma, clique no botão vermelho ao final para ver o relatório oficial da missão.
                    </div>
                  </div>
                )}

                {/* PAINEL PEDAGÓGICO TINTIM POR TINTIM */}
                <div style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: selectedOption === currentQ.correctIndex 
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 95, 70, 0.2))' 
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(127, 29, 29, 0.2))',
                  border: `1.5px solid ${selectedOption === currentQ.correctIndex ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}>
                  {/* Status do Disparo */}
                  <div style={{
                    fontSize: '0.86rem',
                    fontWeight: 900,
                    color: selectedOption === currentQ.correctIndex ? '#34d399' : '#f87171',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}>
                    {selectedOption === currentQ.correctIndex 
                      ? '🎯 TIRO CERTEIRO! ACERTO TÁTICO CONFIRMADO' 
                      : '⚠️ TIRO DESVIADO! IMPACTO SOFRIDO (-1 VIDA)'}
                  </div>

                  {/* Comparativo de Respostas */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '0.75rem',
                    padding: '0.85rem',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {selectedOption !== null && selectedOption !== -1 && (
                      <div style={{ fontSize: '0.84rem' }}>
                        <span style={{ color: '#94a3b8', fontWeight: 700 }}>Sua Resposta: </span>
                        <strong style={{ color: selectedOption === currentQ.correctIndex ? '#34d399' : '#f87171' }}>
                          Alternativa {['A', 'B', 'C', 'D', 'E'][selectedOption]}
                        </strong>
                        <div style={{ color: '#cbd5e1', fontSize: '0.8rem', marginTop: '0.2rem', fontStyle: 'italic' }}>
                          "{currentQ.options[selectedOption]}"
                        </div>
                      </div>
                    )}
                    <div style={{ fontSize: '0.84rem' }}>
                      <span style={{ color: '#94a3b8', fontWeight: 700 }}>Gabarito Oficial AOCP: </span>
                      <strong style={{ color: '#34d399' }}>
                        Alternativa {['A', 'B', 'C', 'D', 'E'][currentQ.correctIndex]}
                      </strong>
                      <div style={{ color: '#86efac', fontSize: '0.8rem', marginTop: '0.2rem', fontWeight: 600 }}>
                        "{currentQ.options[currentQ.correctIndex]}"
                      </div>
                    </div>
                  </div>

                  {/* Raio-X do Erro Específico (Por que o aluno errou) */}
                  {selectedOption !== currentQ.correctIndex && selectedOption !== null && selectedOption !== -1 && (
                    <div style={{
                      padding: '0.9rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px dashed rgba(239, 68, 68, 0.45)',
                      fontSize: '0.86rem',
                      color: '#fca5a5',
                      lineHeight: 1.5
                    }}>
                      <strong style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.3rem' }}>
                        🔍 Raio-X do seu Erro na Alternativa {['A', 'B', 'C', 'D', 'E'][selectedOption]}:
                      </strong>
                      {currentQ.porqueErrou?.[selectedOption] ||
                       currentQ.analiseAlternativas?.[['A', 'B', 'C', 'D', 'E'][selectedOption]] ||
                       `A alternativa ${['A', 'B', 'C', 'D', 'E'][selectedOption]} está incorreta porque diverge da literalidade legal e do posicionamento consolidado exigido pela banca AOCP para a PMPE.`}
                    </div>
                  )}

                  {/* Explicação Tintim por Tintim (Passo a Passo e Fundamentação) */}
                  <div style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    fontSize: '0.88rem',
                    color: '#e2e8f0',
                    lineHeight: 1.6
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 800,
                      color: '#38bdf8',
                      fontSize: '0.82rem',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem'
                    }}>
                      <BookOpen size={16} />
                      <span>Explicação Tintim por Tintim da Questão:</span>
                    </div>

                    <p style={{ margin: 0, color: '#f1f5f9' }}>
                      {currentQ.explanation}
                    </p>

                    {/* Resolução Matemática Passo a Passo (RLM) */}
                    {currentQ.passoAPassoConta && currentQ.passoAPassoConta.length > 0 && (
                      <div style={{ marginTop: '0.9rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.8rem', marginBottom: '0.45rem' }}>
                          📐 Resolução Matemática / Lógica Passo a Passo:
                        </div>
                        {currentQ.passoAPassoConta.map((step, sIdx) => (
                          <div key={sIdx} style={{ fontSize: '0.83rem', color: '#cbd5e1', marginBottom: '0.3rem', paddingLeft: '0.6rem', borderLeft: '2px solid #fbbf24' }}>
                            {step}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Raio-X de Todas as Alternativas se disponível */}
                    {currentQ.analiseAlternativas && Object.keys(currentQ.analiseAlternativas).length > 0 && (
                      <div style={{ marginTop: '0.9rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontWeight: 800, color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.45rem' }}>
                          📋 Análise Tática das Alternativas:
                        </div>
                        {Object.entries(currentQ.analiseAlternativas).map(([altLetter, analise]) => (
                          <div key={altLetter} style={{ 
                            fontSize: '0.82rem', 
                            color: altLetter === ['A', 'B', 'C', 'D', 'E'][currentQ.correctIndex] ? '#86efac' : '#cbd5e1', 
                            marginBottom: '0.35rem' 
                          }}>
                            <strong>Alternativa {altLetter}:</strong> {analise}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Fundamentação Legal / Legislação Oficial */}
                  {currentQ.fundamentacaoLegal && (
                    <div style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#7dd3fc',
                      fontSize: '0.83rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Scale size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                      <div>
                        <strong>⚖️ Base Legal / Dispositivo Normativo:</strong> {currentQ.fundamentacaoLegal}
                      </div>
                    </div>
                  )}

                  {/* Mnemônico / Dica Tática da PMPE */}
                  {(currentQ.dicaMacete || currentQ.hint) && (
                    <div style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      color: '#fde68a',
                      fontSize: '0.83rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Sparkles size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                      <div>
                        <strong>💡 Macete Tático da PMPE / AOCP:</strong> {currentQ.dicaMacete || currentQ.hint}
                      </div>
                    </div>
                  )}
                </div>

                {/* BOTÃO DE AVANÇO OU RELATÓRIO DE MISSÃO */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  <button
                    onClick={handleNextQuestion}
                    style={{
                      padding: '0.85rem 1.8rem',
                      borderRadius: '14px',
                      background: lives <= 0 
                        ? 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' 
                        : 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      border: lives <= 0 ? '1.5px solid #ef4444' : '1px solid #38bdf8',
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      boxShadow: lives <= 0 ? '0 6px 20px rgba(220, 38, 38, 0.5)' : '0 4px 15px rgba(2, 132, 199, 0.4)',
                      transition: 'transform 0.15s ease'
                    }}
                  >
                    <span>{lives <= 0 ? '🚨 MISSÃO ENCERRADA • VER RELATÓRIO DO COMBATENTE' : 'Próxima Questão'}</span>
                    <ChevronRight size={20} />
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
