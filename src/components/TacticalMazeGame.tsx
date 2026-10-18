import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { QuizQuestion, CategoryId } from '../types/game';
import { 
  Shield, 
  ShieldAlert, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  Flag, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  AlertTriangle, 
  Skull, 
  Crosshair, 
  HelpCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface TacticalMazeGameProps {
  questions: QuizQuestion[];
  selectedCategory: CategoryId | 'all' | 'bloco_1' | 'bloco_2' | 'bloco_3';
  onBack: () => void;
  onFinishGame: (summary: {
    title: string;
    score: number;
    xpEarned: number;
    statsDetail: { label: string; value: string | number }[];
  }) => void;
}

interface MazeStageConfig {
  stageNum: number;
  title: string;
  codename: string;
  location: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  themeColor: string;
}

const STAGES: MazeStageConfig[] = [
  {
    stageNum: 1,
    title: 'Fase 1: Beco da Periferia',
    codename: 'OPERAÇÃO SENTINELA',
    location: 'Comunidade Segura • Nível Inicial',
    difficulty: 'easy',
    description: 'Navegue pelo primeiro perímetro tático. 6 acertos para alcançar o Ponto de Encontro Bravo.',
    themeColor: '#22c55e'
  },
  {
    stageNum: 2,
    title: 'Fase 2: Galpões do Porto',
    codename: 'OPERAÇÃO AÇO FRIO',
    location: 'Complexo Logístico do Recife • Nível Intermediário',
    difficulty: 'medium',
    description: 'Corredores estreitos entre contêineres. O bandido conhece os atalhos. Mantenha a vigilância!',
    themeColor: '#38bdf8'
  },
  {
    stageNum: 3,
    title: 'Fase 3: Labirinto da Colina',
    codename: 'OPERAÇÃO ESCUDO DE FERRO',
    location: 'Beco dos Militares • Nível Avançado',
    difficulty: 'hard',
    description: 'Terreno acidentado e visibilidade reduzida. Apenas conhecimentos cirúrgicos garantirão a rota segura.',
    themeColor: '#f59e0b'
  },
  {
    stageNum: 4,
    title: 'Fase 4: QG Fortificado do Inimigo',
    codename: 'OPERAÇÃO CAVEIRA PMPE',
    location: 'Bunker Central • Nível de Elite da Banca',
    difficulty: 'hard',
    description: 'A incursão final. Infiltre-se no coração do labirinto e neutralize a liderança criminosa.',
    themeColor: '#ef4444'
  }
];

export const TacticalMazeGame: React.FC<TacticalMazeGameProps> = ({
  questions,
  selectedCategory,
  onBack,
  onFinishGame
}) => {
  // Configurações de Gameplay (conforme ordem do Comandante Gean)
  const MAX_LIVES = 4;
  const GOAL_STEPS = 6; // 6 acertos por fase

  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [copPosition, setCopPosition] = useState(0); // 0 a 6
  const [banditDistance, setBanditDistance] = useState(4); // 4 passos de distância inicial
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isStageCleared, setIsStageCleared] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);

  const currentStage = STAGES[currentStageIdx] || STAGES[0];

  // Filtra perguntas conforme a categoria selecionada e nível da fase
  const availableQuestions = useMemo(() => {
    let pool = questions.filter(q => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'bloco_1') return q.bloco === 'bloco_1';
      if (selectedCategory === 'bloco_2') return q.bloco === 'bloco_2';
      if (selectedCategory === 'bloco_3') return q.bloco === 'bloco_3';
      return q.categoryId === selectedCategory;
    });

    if (pool.length === 0) pool = questions;

    // Prioriza dificuldade da fase se houver perguntas suficientes
    const diffPool = pool.filter(q => q.difficulty === currentStage.difficulty);
    return diffPool.length >= 10 ? diffPool : pool;
  }, [questions, selectedCategory, currentStage]);

  // Pergunta atual
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);

  // Sorteia nova pergunta não repetida
  const pickNextQuestion = useCallback(() => {
    const unasked = availableQuestions.filter(q => !answeredQuestionIds.includes(q.id));
    const pool = unasked.length > 0 ? unasked : availableQuestions;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQuestion(random);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  }, [availableQuestions, answeredQuestionIds]);

  // Inicializa primeira pergunta
  useEffect(() => {
    pickNextQuestion();
  }, [currentStageIdx]);

  // Processa resposta do recruta
  const handleAnswer = (optionIdx: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(optionIdx);
    setIsAnswered(true);

    const isCorrect = optionIdx === currentQuestion.correctIndex;
    setAnsweredQuestionIds(prev => [...prev, currentQuestion.id]);

    if (isCorrect) {
      sound.playSuccess();
      sound.playGunshot38();
      const newScore = score + 100;
      const newXp = xp + 50;
      setScore(newScore);
      setXp(newXp);

      const nextCopPos = copPosition + 1;
      setCopPosition(nextCopPos);

      // Verificação de conclusão de fase (6 acertos!)
      if (nextCopPos >= GOAL_STEPS) {
        sound.playLevelUp();
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        setIsStageCleared(true);
      }
    } else {
      sound.playError();
      sound.playBossHit();

      const nextLives = lives - 1;
      const nextBanditDist = banditDistance - 1;
      setLives(nextLives);
      setBanditDistance(nextBanditDist);

      // 4 Erros = Emboscada fatal pelo bandido!
      if (nextLives <= 0 || nextBanditDist <= 0) {
        setIsGameOver(true);
      }
    }
  };

  // Avançar para próxima pergunta dentro da mesma fase
  const handleNextStep = () => {
    pickNextQuestion();
  };

  // Avançar para próxima fase
  const handleNextStage = () => {
    if (currentStageIdx + 1 < STAGES.length) {
      setCurrentStageIdx(prev => prev + 1);
      setCopPosition(0);
      setBanditDistance(4);
      setIsStageCleared(false);
      setLives(MAX_LIVES);
    } else {
      // Zerou todas as fases do Labirinto!
      setIsGameCompleted(true);
      sound.playMilitaryAchievement();
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
    }
  };

  // Reiniciar fase atual ou o jogo
  const handleRestart = () => {
    setCopPosition(0);
    setBanditDistance(4);
    setLives(MAX_LIVES);
    setIsGameOver(false);
    setIsStageCleared(false);
    setIsGameCompleted(false);
    pickNextQuestion();
  };

  // Finalizar e reportar ao Quartel
  const handleCompleteAndReport = () => {
    onFinishGame({
      title: 'Labirinto Tático Policial',
      score,
      xpEarned: xp,
      statsDetail: [
        { label: 'Fase Alcançada', value: `${currentStage.title}` },
        { label: 'Acertos no Labirinto', value: `${copPosition} / ${GOAL_STEPS}` },
        { label: 'Vidas Restantes', value: `${lives} / ${MAX_LIVES}` },
        { label: 'Distância do Inimigo', value: `${banditDistance * 10} metros` }
      ]
    });
  };

  // Mensagem tática de radar conforme a distância do bandido
  const getRadarWarning = () => {
    if (banditDistance >= 4) {
      return { text: 'Radar: Inimigo a 40 metros. Rota aberta para o policial.', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.12)' };
    }
    if (banditDistance === 3) {
      return { text: 'Alerta: Bandido detectado a 30 metros! O inimigo está se aproximando.', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' };
    }
    if (banditDistance === 2) {
      return { text: 'CUIDADO: Ameaça a 20 metros! O bandido está nos seus calcanhares!', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.16)' };
    }
    return { text: '🚨 PERIGO CRÍTICO: Bandido a 10 metros! Próximo erro causará emboscada fatal!', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.22)' };
  };

  const radar = getRadarWarning();

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      paddingBottom: '3rem'
    }}>
      {/* CABEÇALHO TÁTICO MILITAR DO MODO LABIRINTO */}
      <div className="glass-panel" style={{
        padding: '1.25rem 1.5rem',
        borderRadius: '12px',
        border: '1px solid rgba(34, 197, 94, 0.35)',
        background: 'linear-gradient(135deg, rgba(14, 25, 18, 0.95), rgba(7, 14, 10, 0.98))',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(34, 197, 94, 0.08)',
        position: 'relative'
      }}>
        {/* Marcadores de cantos táticos (estilo HUD militar) */}
        <div style={{ position: 'absolute', top: 6, left: 6, fontSize: '0.65rem', color: '#22c55e', fontFamily: 'monospace' }}>┌ PMPE-HUD ┐</div>
        <div style={{ position: 'absolute', top: 6, right: 6, fontSize: '0.65rem', color: '#f59e0b', fontFamily: 'monospace' }}>┌ RADAR-ON ┐</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{
                background: 'rgba(34, 197, 94, 0.2)',
                color: '#22c55e',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                letterSpacing: '0.05em'
              }}>
                {currentStage.codename}
              </span>
              <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>• {currentStage.location}</span>
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f3f4f6', letterSpacing: '-0.02em' }}>
              🧭 Labirinto Tático: {currentStage.title}
            </h1>
          </div>

          {/* Vidas Táticas & Pontuação */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Vidas (4 Vidas) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.4)',
              padding: '0.4rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <span style={{ fontSize: '0.68rem', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 700 }}>
                Coletes Táticos
              </span>
              <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.25rem' }}>
                {Array.from({ length: MAX_LIVES }).map((_, i) => {
                  const active = i < lives;
                  return (
                    <div
                      key={i}
                      title={active ? `Vida ${i + 1} Ativa` : `Colete Rompido`}
                      style={{
                        color: active ? '#22c55e' : '#ef4444',
                        filter: active ? 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))' : 'none',
                        opacity: active ? 1 : 0.35,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {active ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* XP e Pontos */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '0.4rem 0.85rem',
              borderRadius: '8px'
            }}>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#f59e0b', textTransform: 'uppercase', fontWeight: 800 }}>Pontos</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fbbf24' }}>{score}</div>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'rgba(245, 158, 11, 0.25)' }} />
              <div>
                <div style={{ fontSize: '0.65rem', color: '#22c55e', textTransform: 'uppercase', fontWeight: 800 }}>XP Ganho</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#4ade80' }}>+{xp}</div>
              </div>
            </div>

            <button
              onClick={onBack}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#e5e7eb',
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 700
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>

      {/* O LABIRINTO TÁTICO: MAPA VISUAL COM O POLICIAL, O DESTINO E O BANDIDO */}
      <div className="glass-panel" style={{
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid rgba(34, 197, 94, 0.25)',
        background: 'radial-gradient(ellipse at 50% 20%, #152219 0%, #0c140f 60%, #060a08 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Grid Militar de Fundo (Malha Tática) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none'
        }} />

        {/* Barra de Status do Radar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: radar.bg,
          border: `1px solid ${radar.color}40`,
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          marginBottom: '1.25rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: radar.color,
              boxShadow: `0 0 10px ${radar.color}`,
              animation: 'pulse 1.5s infinite'
            }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: radar.color }}>
              {radar.text}
            </span>
          </div>

          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', fontFamily: 'monospace' }}>
            PROGRESSO: {copPosition} / {GOAL_STEPS} ACERTOS
          </span>
        </div>

        {/* TRILHA EM CORREDOR DO LABIRINTO (7 NÓS: 0 a 6) */}
        <div style={{ position: 'relative', zIndex: 1, margin: '1.5rem 0 1rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            {/* Linha de Conexão Tática dos Corredores */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '4%',
              right: '4%',
              height: '6px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '3px',
              transform: 'translateY(-50%)',
              zIndex: 0
            }}>
              {/* Progresso do policial na linha */}
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #15803d, #22c55e)',
                width: `${(copPosition / GOAL_STEPS) * 100}%`,
                borderRadius: '3px',
                transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.8)'
              }} />
            </div>

            {/* Os 7 Pontos do Labirinto */}
            {Array.from({ length: GOAL_STEPS + 1 }).map((_, idx) => {
              const isCopHere = copPosition === idx;
              const isPassed = copPosition > idx;
              const isDestination = idx === GOAL_STEPS;
              const isStart = idx === 0;

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {/* Bonequinho / Ícone do Policial se estiver nesta posição */}
                  {isCopHere && (
                    <div style={{
                      position: 'absolute',
                      top: '-46px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      animation: 'bounce 1s infinite alternate'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #16a34a, #14532d)',
                        color: '#fff',
                        padding: '0.35rem 0.6rem',
                        borderRadius: '20px',
                        border: '2px solid #4ade80',
                        boxShadow: '0 0 18px rgba(34, 197, 94, 0.85)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.78rem',
                        fontWeight: 900
                      }}>
                        <span>👮‍♂️</span>
                        <span>POLICIAL</span>
                      </div>
                      <div style={{
                        width: '0',
                        height: '0',
                        borderLeft: '5px solid transparent',
                        borderRight: '5px solid transparent',
                        borderTop: '6px solid #4ade80',
                        marginTop: '-1px'
                      }} />
                    </div>
                  )}

                  {/* Nó do Labirinto */}
                  <div style={{
                    width: isDestination ? '50px' : '40px',
                    height: isDestination ? '50px' : '40px',
                    borderRadius: '50%',
                    background: isDestination
                      ? 'linear-gradient(135deg, #d97706, #b45309)'
                      : isPassed
                      ? 'linear-gradient(135deg, #15803d, #14532d)'
                      : isCopHere
                      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                      : 'rgba(20, 30, 24, 0.9)',
                    border: isDestination
                      ? '2px solid #fbbf24'
                      : isCopHere
                      ? '3px solid #86efac'
                      : isPassed
                      ? '2px solid #22c55e'
                      : '2px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: isDestination ? '1.2rem' : '0.85rem',
                    boxShadow: isCopHere
                      ? '0 0 20px rgba(34, 197, 94, 0.8)'
                      : isDestination
                      ? '0 0 20px rgba(245, 158, 11, 0.6)'
                      : 'none',
                    transition: 'all 0.4s ease'
                  }}>
                    {isDestination ? '🏁' : isStart ? '🚩' : idx}
                  </div>

                  {/* Legenda do Ponto */}
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: isCopHere ? '#4ade80' : isDestination ? '#f59e0b' : '#9ca3af',
                    marginTop: '0.4rem',
                    fontFamily: 'monospace'
                  }}>
                    {isDestination ? 'DESTINO' : isStart ? 'ENTRADA' : `POSTO ${idx}`}
                  </span>
                </div>
              );
            })}
          </div>

          {/* INDICADOR VISUAL DO BANDIDO QUE ESTÁ PERSEGUINDO */}
          <div style={{
            marginTop: '2rem',
            padding: '0.75rem 1.25rem',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.15), rgba(15, 20, 16, 0.8))',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{
                background: 'rgba(239, 68, 68, 0.25)',
                border: '1px solid #ef4444',
                color: '#ef4444',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🥷
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fca5a5' }}>
                  Ameaça em Perseguição: Bandido do Beco
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                  Distância de perigo: <strong style={{ color: banditDistance <= 1 ? '#ef4444' : '#fbbf24' }}>{banditDistance * 10} metros</strong> ({banditDistance} erros permitidos antes da emboscada)
                </div>
              </div>
            </div>

            {/* Medidor de Proximidade (Barrinhas de Perigo) */}
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {Array.from({ length: 4 }).map((_, i) => {
                const dangerLevel = i < (4 - banditDistance);
                return (
                  <div
                    key={i}
                    style={{
                      width: '16px',
                      height: '24px',
                      borderRadius: '3px',
                      background: dangerLevel ? '#ef4444' : 'rgba(255, 255, 255, 0.1)',
                      border: dangerLevel ? '1px solid #f87171' : '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: dangerLevel ? '0 0 8px rgba(239, 68, 68, 0.6)' : 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CASO: EMBOSCADA FATAL (GAME OVER) */}
      {isGameOver ? (
        <div className="glass-panel" style={{
          padding: '2.5rem 1.5rem',
          borderRadius: '12px',
          border: '2px solid #ef4444',
          background: 'radial-gradient(circle at 50% 20%, rgba(239, 68, 68, 0.2) 0%, rgba(10, 15, 12, 0.98) 75%)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(239, 68, 68, 0.25)',
            border: '2px solid #ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ef4444'
          }}>
            <Skull size={40} />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fca5a5', textTransform: 'uppercase' }}>
            ☠️ Emboscada Fatal! Policial Neutralizado
          </h2>

          <p style={{ maxWidth: '540px', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Você acumulou <strong>4 erros</strong> no labirinto e o bandido alcançou o policial antes do destino final. 
            No concurso da PMPE, a precisão e a doutrina salvam vidas!
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button
              onClick={handleRestart}
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                color: '#fff',
                padding: '0.85rem 1.75rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)'
              }}
            >
              <RotateCcw size={18} />
              Reiniciar Incursão
            </button>
            <button
              onClick={handleCompleteAndReport}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#e5e7eb',
                padding: '0.85rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Voltar ao Quartel
            </button>
          </div>
        </div>
      ) : isStageCleared ? (
        /* CASO: FASE CONCLUÍDA (POLICIAL CHEGOU AO DESTINO COM 6 ACERTOS!) */
        <div className="glass-panel" style={{
          padding: '2.5rem 1.5rem',
          borderRadius: '12px',
          border: '2px solid #22c55e',
          background: 'radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.2) 0%, rgba(10, 15, 12, 0.98) 75%)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.25)',
            border: '2px solid #22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#22c55e'
          }}>
            <Award size={40} />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#86efac', textTransform: 'uppercase' }}>
            🎉 Destino Alcançado! {currentStage.title} Concluída!
          </h2>

          <p style={{ maxWidth: '540px', color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Excelente atuação tática! O policial avançou pelos 6 postos do labirinto sem ser capturado pelo inimigo.
            Você garantiu <strong>+250 XP de Bônus Tático</strong> para seu histórico militar.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {currentStageIdx + 1 < STAGES.length ? (
              <button
                onClick={handleNextStage}
                style={{
                  background: 'linear-gradient(135deg, #16a34a, #15803d)',
                  color: '#fff',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)'
                }}
              >
                Avançar para a {STAGES[currentStageIdx + 1].title}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleCompleteAndReport}
                style={{
                  background: 'linear-gradient(135deg, #d97706, #b45309)',
                  color: '#fff',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Missão Cumprida: Relatório Final
              </button>
            )}
          </div>
        </div>
      ) : (
        /* PAINEL DA QUESTÃO MILITAR ATIVA NO LABIRINTO */
        currentQuestion && (
          <div className="glass-panel" style={{
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            background: 'linear-gradient(180deg, rgba(16, 24, 19, 0.95) 0%, rgba(9, 14, 11, 0.98) 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            {/* Topo da Questão */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#9ca3af',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  {currentQuestion.materiaNome}
                </span>
                {currentQuestion.topicoEdital && (
                  <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>
                    • {currentQuestion.topicoEdital}
                  </span>
                )}
              </div>

              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#f59e0b',
                background: 'rgba(245, 158, 11, 0.1)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(245, 158, 11, 0.25)'
              }}>
                Posto Atual: Passo {copPosition + 1} de {GOAL_STEPS}
              </span>
            </div>

            {/* Enunciado */}
            <div style={{
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#f3f4f6',
              lineHeight: '1.65',
              padding: '0.75rem',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '8px',
              borderLeft: '4px solid #22c55e'
            }}>
              {currentQuestion.question}
            </div>

            {/* Alternativas A, B, C, D, E */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {currentQuestion.options.map((opt, idx) => {
                const letters = ['A', 'B', 'C', 'D', 'E'];
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;

                let btnBg = 'rgba(255, 255, 255, 0.04)';
                let btnBorder = 'rgba(255, 255, 255, 0.1)';
                let btnColor = '#e5e7eb';

                if (isAnswered) {
                  if (isCorrect) {
                    btnBg = 'rgba(34, 197, 94, 0.22)';
                    btnBorder = '#22c55e';
                    btnColor = '#86efac';
                  } else if (isSelected) {
                    btnBg = 'rgba(239, 68, 68, 0.25)';
                    btnBorder = '#ef4444';
                    btnColor = '#fca5a5';
                  } else {
                    btnBg = 'rgba(0, 0, 0, 0.2)';
                    btnColor = '#6b7280';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleAnswer(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '8px',
                      background: btnBg,
                      border: `1px solid ${btnBorder}`,
                      color: btnColor,
                      fontSize: '0.92rem',
                      textAlign: 'left',
                      cursor: isAnswered ? 'default' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: isAnswered && isCorrect
                        ? '#22c55e'
                        : isAnswered && isSelected
                        ? '#ef4444'
                        : 'rgba(255, 255, 255, 0.08)',
                      color: isAnswered && (isCorrect || isSelected) ? '#fff' : '#9ca3af',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      flexShrink: 0
                    }}>
                      {letters[idx]}
                    </span>
                    <span style={{ flex: 1, lineHeight: '1.45' }}>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* FEEDBACK PEDAGÓGICO & COMENTÁRIO TÁTICO APÓS RESPOSTA */}
            {isAnswered && (
              <div style={{
                marginTop: '0.5rem',
                padding: '1.25rem',
                borderRadius: '8px',
                background: selectedOption === currentQuestion.correctIndex
                  ? 'rgba(34, 197, 94, 0.12)'
                  : 'rgba(239, 68, 68, 0.12)',
                border: `1px solid ${selectedOption === currentQuestion.correctIndex ? '#22c55e' : '#ef4444'}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: selectedOption === currentQuestion.correctIndex ? '#86efac' : '#fca5a5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {selectedOption === currentQuestion.correctIndex
                      ? '🎯 TIRO CERTEIRO! O Policial avançou 1 passo em direção ao destino!'
                      : '❌ DISPARO FALHO! O bandido se aproximou 1 passo pelo labirinto!'}
                  </div>

                  <button
                    onClick={handleNextStep}
                    style={{
                      background: selectedOption === currentQuestion.correctIndex
                        ? 'linear-gradient(135deg, #16a34a, #15803d)'
                        : 'linear-gradient(135deg, #dc2626, #b91c1c)',
                      color: '#fff',
                      padding: '0.55rem 1.25rem',
                      borderRadius: '6px',
                      border: 'none',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    Próxima Questão
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div style={{ color: '#e5e7eb', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <strong>Fundamentação da Banca AOCP:</strong> {currentQuestion.explanation}
                </div>

                {currentQuestion.fundamentacaoLegal && (
                  <div style={{ color: '#9ca3af', fontSize: '0.8rem', fontStyle: 'italic' }}>
                    ⚖️ {currentQuestion.fundamentacaoLegal}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
