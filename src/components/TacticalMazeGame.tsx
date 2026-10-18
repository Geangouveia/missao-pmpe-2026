import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import type { QuizQuestion, CategoryId } from '../types/game';
import { 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  AlertTriangle, 
  Crosshair, 
  Sparkles,
  Flame,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Footprints,
  Skull
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

interface MazeSectorConfig {
  sectorNum: number;
  name: string;
  code: string;
  theme: string;
  banditName: string;
  ambientColor: string;
  description: string;
}

const SECTORS: MazeSectorConfig[] = [
  {
    sectorNum: 1,
    name: 'Beco da Periferia',
    code: 'SETOR ALPHA-01',
    theme: 'Perímetro Externo',
    banditName: 'Sentinela Armado',
    ambientColor: '#22c55e',
    description: 'Incursão inicial no perímetro. Neutralize a sentinela armada para abrir o portão tático.'
  },
  {
    sectorNum: 2,
    name: 'Corredores do Galpão',
    code: 'SETOR BRAVO-02',
    theme: 'Complexo Logístico',
    banditName: 'Guarda do Depósito',
    ambientColor: '#38bdf8',
    description: 'Labirinto entre contêineres e máquinas industriais. Cuidado com disparos nos ângulos mortos.'
  },
  {
    sectorNum: 3,
    name: 'Túnel Subterrâneo',
    code: 'SETOR CHARLIE-03',
    theme: 'Subsolo Tático',
    banditName: 'Tirador de Elite do Tráfico',
    ambientColor: '#f59e0b',
    description: 'Visibilidade reduzida e eco de disparos. Avance com lanterna e escudo tático em prontidão.'
  },
  {
    sectorNum: 4,
    name: 'Bunker Central do Inimigo',
    code: 'SETOR FOXTROT-04',
    theme: 'QG Fortificado',
    banditName: 'Líder da Facção Criminosa',
    ambientColor: '#ef4444',
    description: 'A incursão final. Neutralize o comandante inimigo para retomar o controle do labirinto.'
  }
];

export const TacticalMazeGame: React.FC<TacticalMazeGameProps> = ({
  questions,
  selectedCategory,
  onBack,
  onFinishGame
}) => {
  const MAX_LIVES = 4;
  const GOAL_SHOTS_PER_SECTOR = 6;
  const BANDIT_MAX_HP = 600;

  // Estado do Jogo
  const [sectorIdx, setSectorIdx] = useState(0);
  const [copProgress, setCopProgress] = useState(0); // 0 a 6
  const [banditHp, setBanditHp] = useState(BANDIT_MAX_HP);
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);

  // Animações de Ação e Combate
  const [isCopFiring, setIsCopFiring] = useState(false);
  const [isCopWalking, setIsCopWalking] = useState(false);
  const [isBanditFiring, setIsBanditFiring] = useState(false);
  const [isBanditHit, setIsBanditHit] = useState(false);
  const [isScreenShaking, setIsScreenShaking] = useState(false);
  const [copBulletActive, setCopBulletActive] = useState(false);
  const [banditBulletActive, setBanditBulletActive] = useState(false);
  const [damagePopup, setDamagePopup] = useState<string | null>(null);

  // Estados de Perguntas
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSectorCleared, setIsSectorCleared] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);

  const currentSector = SECTORS[sectorIdx] || SECTORS[0];

  // Pool de Questões
  const availableQuestions = useMemo(() => {
    let pool = questions.filter(q => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'bloco_1') return q.bloco === 'bloco_1';
      if (selectedCategory === 'bloco_2') return q.bloco === 'bloco_2';
      if (selectedCategory === 'bloco_3') return q.bloco === 'bloco_3';
      return q.categoryId === selectedCategory;
    });
    return pool.length > 0 ? pool : questions;
  }, [questions, selectedCategory]);

  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);

  const pickNextQuestion = useCallback(() => {
    const unasked = availableQuestions.filter(q => !answeredIds.includes(q.id));
    const pool = unasked.length > 0 ? unasked : availableQuestions;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQuestion(random);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
    setDamagePopup(null);
  }, [availableQuestions, answeredIds]);

  useEffect(() => {
    pickNextQuestion();
  }, [sectorIdx]);

  // Executa o Disparo Policial (Acerto de Resposta)
  const executePoliceShot = () => {
    // 1. Policial ergue arma e engatilha
    setIsCopFiring(true);
    setCopBulletActive(true);
    sound.playGunshot38();

    // 2. Projétil atinge o bandido
    setTimeout(() => {
      setCopBulletActive(false);
      setIsBanditHit(true);
      setDamagePopup('-100 HP! CRÍTICO!');
      sound.playDoubleTap();

      // Atualiza HP do bandido
      setBanditHp(prev => Math.max(0, prev - 100));

      // 3. Policial avança pelo labirinto andando
      setTimeout(() => {
        setIsBanditHit(false);
        setIsCopWalking(true);

        setTimeout(() => {
          setIsCopWalking(false);
          setIsCopFiring(false);
        }, 600);
      }, 400);
    }, 220);
  };

  // Executa o Contra-ataque do Bandido (Erro de Resposta)
  const executeBanditShot = () => {
    setIsBanditFiring(true);
    setBanditBulletActive(true);
    sound.playGunshot38();

    setTimeout(() => {
      setBanditBulletActive(false);
      setIsScreenShaking(true);
      setDamagePopup('⚠️ COLETE ROMPIDO!');
      sound.playBossHit();

      setTimeout(() => {
        setIsBanditFiring(false);
        setIsScreenShaking(false);
      }, 450);
    }, 220);
  };

  // Processa Seleção da Resposta
  const handleAnswer = (optionIdx: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(optionIdx);
    setIsAnswered(true);
    setAnsweredIds(prev => [...prev, currentQuestion.id]);

    const isCorrect = optionIdx === currentQuestion.correctIndex;

    if (isCorrect) {
      sound.playSuccess();
      executePoliceShot();

      const newScore = score + 120 + (streak * 20);
      const newXp = xp + 60;
      setScore(newScore);
      setXp(newXp);
      setStreak(prev => prev + 1);

      const nextProgress = copProgress + 1;
      setCopProgress(nextProgress);

      // Verificação de vitória no Setor (6 Tiros = 600 HP)
      if (nextProgress >= GOAL_SHOTS_PER_SECTOR) {
        setTimeout(() => {
          sound.playLevelUp();
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
          setIsSectorCleared(true);
        }, 1100);
      }
    } else {
      sound.playError();
      executeBanditShot();
      setStreak(0);

      const nextLives = lives - 1;
      setLives(nextLives);

      if (nextLives <= 0) {
        setTimeout(() => {
          setIsGameOver(true);
          sound.playError();
        }, 900);
      }
    }
  };

  // Próxima fase do Labirinto
  const handleNextSector = () => {
    if (sectorIdx + 1 < SECTORS.length) {
      setSectorIdx(prev => prev + 1);
      setCopProgress(0);
      setBanditHp(BANDIT_MAX_HP);
      setIsSectorCleared(false);
      setLives(MAX_LIVES);
    } else {
      setIsGameCompleted(true);
      sound.playMilitaryAchievement();
      confetti({ particleCount: 160, spread: 100, origin: { y: 0.5 } });
    }
  };

  // Reiniciar Labirinto
  const handleRestart = () => {
    setCopProgress(0);
    setBanditHp(BANDIT_MAX_HP);
    setLives(MAX_LIVES);
    setIsGameOver(false);
    setIsSectorCleared(false);
    setIsGameCompleted(false);
    setStreak(0);
    pickNextQuestion();
  };

  return (
    <div 
      className={isScreenShaking ? 'tactical-screen-shake' : ''}
      style={{
        maxWidth: '1020px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        paddingBottom: '3rem',
        transition: 'transform 0.1s ease'
      }}
    >
      {/* HUD MILITAR SUPERIOR */}
      <div className="glass-panel" style={{
        padding: '1.1rem 1.4rem',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(14, 25, 18, 0.98), rgba(8, 16, 11, 0.98))',
        border: '1.5px solid rgba(34, 197, 94, 0.35)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(34, 197, 94, 0.08)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span style={{
                background: 'rgba(34, 197, 94, 0.2)',
                color: '#4ade80',
                fontSize: '0.72rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                letterSpacing: '0.05em'
              }}>
                {currentSector.code}
              </span>
              <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>• {currentSector.name}</span>
            </div>
            <h1 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#f8fafc', margin: 0, letterSpacing: '-0.02em' }}>
              🎯 Labirinto Tático: Incursão Policial
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', flexWrap: 'wrap' }}>
            {/* 4 Coletes Táticos de Vida */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.45)',
              padding: '0.45rem 0.85rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                Coletes Táticos
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {Array.from({ length: MAX_LIVES }).map((_, i) => {
                  const active = i < lives;
                  return (
                    <div 
                      key={i} 
                      style={{ 
                        color: active ? '#22c55e' : '#ef4444',
                        filter: active ? 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))' : 'none',
                        opacity: active ? 1 : 0.25,
                        transition: 'all 0.3s ease'
                      }}
                      title={active ? `Colete ${i + 1} Intacto` : `Colete Rompido`}
                    >
                      {active ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pontos & XP */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              padding: '0.45rem 0.95rem',
              borderRadius: '10px'
            }}>
              <div>
                <div style={{ fontSize: '0.62rem', color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase' }}>Pontuação</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fbbf24' }}>{score}</div>
              </div>
              <div style={{ width: '1px', height: '24px', background: 'rgba(245, 158, 11, 0.25)' }} />
              <div>
                <div style={{ fontSize: '0.62rem', color: '#22c55e', fontWeight: 800, textTransform: 'uppercase' }}>XP Ganho</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#4ade80' }}>+{xp}</div>
              </div>
            </div>

            <button
              onClick={onBack}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#e2e8f0',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 800
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>

      {/* ARENA VISUAL 2D DE COMBATE ANIMADO (CORREDOR DO LABIRINTO) */}
      <div className="glass-panel" style={{
        borderRadius: '18px',
        border: '2px solid rgba(34, 197, 94, 0.3)',
        background: 'linear-gradient(180deg, #0b140e 0%, #060a08 60%, #030504 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(0, 0, 0, 0.8)',
        minHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Parede Tática de Fundo do Labirinto com Luz de Radar & Vigas de Concreto */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }} />

        {/* Holofote Tático Superior */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '30%',
          right: '30%',
          height: '140px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Linha de Chão Militar com Faixa Amarela Tática */}
        <div style={{
          position: 'absolute',
          bottom: '22px',
          left: 0,
          right: 0,
          height: '4px',
          background: 'repeating-linear-gradient(90deg, #f59e0b 0, #f59e0b 16px, #1e293b 16px, #1e293b 32px)',
          opacity: 0.75,
          zIndex: 1
        }} />

        {/* CABEÇALHO DA ARENA: STATUS DE HP E DISTÂNCIA */}
        <div style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.85rem 1.25rem',
          background: 'rgba(0, 0, 0, 0.55)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Lado Policial Militar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '1.25rem' }}>👮‍♂️</span>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#4ade80', textTransform: 'uppercase' }}>
                Policial Militar PMPE
              </div>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                Posição no Corredor: {copProgress} / {GOAL_SHOTS_PER_SECTOR} passos
              </div>
            </div>
          </div>

          {/* Medidor Central de Incursão Tática */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem'
          }}>
            <span style={{ fontSize: '0.68rem', color: '#f59e0b', fontWeight: 900, letterSpacing: '0.08em' }}>
              DISTÂNCIA DE ENGAGEMENT: {(GOAL_SHOTS_PER_SECTOR - copProgress) * 6}M
            </span>
            {damagePopup && (
              <span className="damage-float-badge" style={{
                position: 'absolute',
                top: '55px',
                fontWeight: 900,
                fontSize: '1rem',
                color: damagePopup.includes('HP') ? '#4ade80' : '#ef4444',
                background: 'rgba(0, 0, 0, 0.85)',
                padding: '0.3rem 0.85rem',
                borderRadius: '8px',
                border: damagePopup.includes('HP') ? '1.5px solid #22c55e' : '1.5px solid #ef4444',
                boxShadow: damagePopup.includes('HP') ? '0 0 15px rgba(34, 197, 94, 0.8)' : '0 0 15px rgba(239, 68, 68, 0.8)',
                zIndex: 25
              }}>
                {damagePopup}
              </span>
            )}
          </div>

          {/* Lado Bandido Armado */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textAlign: 'right' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#f87171', textTransform: 'uppercase' }}>
                {currentSector.banditName}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#fca5a5', fontWeight: 700 }}>
                HP: {banditHp} / {BANDIT_MAX_HP}
              </div>
            </div>
            <span style={{ fontSize: '1.25rem' }}>🥷</span>
          </div>
        </div>

        {/* CENÁRIO DE COMBATE: POLICIAL, PROJÉTEIS E BANDIDO */}
        <div style={{
          position: 'relative',
          flex: 1,
          minHeight: '170px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem',
          zIndex: 4
        }}>
          {/* BONECO DO POLICIAL MILITAR PMPE (LADO ESQUERDO) */}
          <div 
            className={`${isCopWalking ? 'cop-walking' : ''} ${isCopFiring ? 'cop-fire-recoil' : ''}`}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: `translateX(${copProgress * 14}px)`,
              transition: 'transform 0.4s ease'
            }}
          >
            {/* SVG DETALHADO DO POLICIAL MILITAR PMPE */}
            <svg width="78" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sombra no chão */}
              <ellipse cx="40" cy="116" rx="26" ry="4" fill="rgba(0,0,0,0.6)" />

              {/* Pernas do Policial (Calça Militar Operacional Cinza) */}
              <rect x="26" y="74" width="10" height="38" rx="4" fill="#334155" />
              <rect x="44" y="74" width="10" height="38" rx="4" fill="#334155" />
              {/* Coturnos Pretos */}
              <rect x="24" y="106" width="13" height="8" rx="3" fill="#0f172a" />
              <rect x="43" y="106" width="13" height="8" rx="3" fill="#0f172a" />

              {/* Tronco / Colete Tático PMPE */}
              <rect x="22" y="34" width="36" height="42" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              <rect x="26" y="38" width="28" height="20" rx="3" fill="#0f172a" />
              {/* Distintivo / Letreiro PMPE */}
              <rect x="29" y="44" width="22" height="7" rx="2" fill="#22c55e" />
              <text x="40" y="50" fill="#ffffff" fontSize="5.5" fontWeight="900" textAnchor="middle">PMPE</text>

              {/* Braço Esquerdo de Apoio */}
              <rect x="15" y="38" width="8" height="24" rx="4" fill="#334155" />

              {/* Cabeça e Boina Militar */}
              <circle cx="40" cy="24" r="10" fill="#fbcfe8" /> {/* Rosto */}
              {/* Boina Militar Preta / Verde Escura com Brasão Dourado */}
              <path d="M26 21 C26 12, 54 12, 55 21 Z" fill="#0f172a" />
              <circle cx="34" cy="18" r="2.5" fill="#f59e0b" /> {/* Brasão da Boina */}
              {/* Óculos Escuros Táticos */}
              <rect x="34" y="22" width="14" height="4" rx="1.5" fill="#0f172a" />

              {/* Braço Direito em Riste Segurando a Pistola */}
              <g transform={isCopFiring ? 'rotate(-6 48 42)' : 'none'}>
                {/* Braço */}
                <rect x="42" y="38" width="20" height="8" rx="3" fill="#334155" />
                {/* Mão */}
                <circle cx="62" cy="42" r="3.5" fill="#fbcfe8" />
                {/* Pistola Tática Preta */}
                <rect x="62" y="37" width="14" height="6" rx="1" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
                <rect x="63" y="41" width="5" height="6" rx="1" fill="#1e293b" />
              </g>

              {/* Muzzle Flash do Disparo do Policial */}
              {copBulletActive && (
                <g className="muzzle-flash-active" transform="translate(77, 36)">
                  <polygon points="0,4 12,0 8,4 18,3 9,6 14,9 0,5" fill="#f59e0b" />
                  <polygon points="0,4 8,2 5,4 12,3 6,5 9,7 0,5" fill="#fef08a" />
                </g>
              )}
            </svg>

            {/* Crachá do Policial */}
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 900,
              color: '#86efac',
              background: 'rgba(20, 83, 45, 0.85)',
              padding: '0.15rem 0.5rem',
              borderRadius: '6px',
              border: '1px solid #22c55e',
              marginTop: '0.2rem'
            }}>
              SOLDADO PMPE
            </span>
          </div>

          {/* PROJÉTEIS TRAÇANTES EM MOVIMENTO */}
          {copBulletActive && <div className="bullet-cop-flying" />}
          {banditBulletActive && <div className="bullet-bandit-flying" />}

          {/* BONECO DO BANDIDO ARMADO (LADO DIREITO) */}
          <div 
            className={`${isBanditHit ? 'bandit-recoil' : ''}`}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: `translateX(-${(GOAL_SHOTS_PER_SECTOR - copProgress) * 4}px)`,
              transition: 'transform 0.4s ease'
            }}
          >
            {/* SVG DETALHADO DO BANDIDO ARMADO */}
            <svg width="78" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sombra no chão */}
              <ellipse cx="40" cy="116" rx="26" ry="4" fill="rgba(0,0,0,0.6)" />

              {/* Pernas do Bandido (Calça Preta / Jeans Escuro) */}
              <rect x="26" y="74" width="10" height="38" rx="4" fill="#0f172a" />
              <rect x="44" y="74" width="10" height="38" rx="4" fill="#0f172a" />
              {/* Tênis Vermelho/Preto */}
              <rect x="23" y="106" width="13" height="8" rx="3" fill="#b91c1c" />
              <rect x="43" y="106" width="13" height="8" rx="3" fill="#b91c1c" />

              {/* Jaqueta Escura / Camiseta */}
              <rect x="22" y="34" width="36" height="42" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
              <path d="M30 36 L40 50 L50 36" stroke="#ef4444" strokeWidth="2" fill="none" />

              {/* Braço Direito */}
              <rect x="57" y="38" width="8" height="24" rx="4" fill="#18181b" />

              {/* Cabeça com Balaclava / Máscara Preta */}
              <circle cx="40" cy="24" r="10" fill="#09090b" />
              {/* Abertura dos Olhos na Balaclava */}
              <rect x="32" y="21" width="16" height="5" rx="2" fill="#fed7aa" />
              <circle cx="36" cy="23.5" r="1.5" fill="#ef4444" /> {/* Olho ameaçador */}
              <circle cx="44" cy="23.5" r="1.5" fill="#ef4444" />

              {/* Braço Esquerdo Apontando a Arma em Direção ao Policial */}
              <g transform={isBanditFiring ? 'rotate(5 32 42)' : 'none'}>
                {/* Braço virado para a esquerda */}
                <rect x="18" y="38" width="20" height="8" rx="3" fill="#18181b" />
                {/* Mão */}
                <circle cx="17" cy="42" r="3.5" fill="#fed7aa" />
                {/* Pistola do Bandido Virada para o Policial */}
                <rect x="4" y="37" width="14" height="6" rx="1" fill="#27272a" stroke="#71717a" strokeWidth="0.8" />
                <rect x="12" y="41" width="5" height="6" rx="1" fill="#3f3f46" />
              </g>

              {/* Muzzle Flash do Disparo do Bandido */}
              {banditBulletActive && (
                <g className="muzzle-flash-active" transform="translate(0, 36) scale(-1, 1)">
                  <polygon points="0,4 12,0 8,4 18,3 9,6 14,9 0,5" fill="#ef4444" />
                  <polygon points="0,4 8,2 5,4 12,3 6,5 9,7 0,5" fill="#fca5a5" />
                </g>
              )}

              {/* Efeito de Impacto quando Atingido */}
              {isBanditHit && (
                <g transform="translate(30, 40)">
                  <circle cx="10" cy="10" r="14" fill="rgba(239, 68, 68, 0.6)" />
                  <polygon points="10,0 13,7 20,5 15,12 18,19 11,15 5,19 8,12 2,6 9,7" fill="#facc15" />
                </g>
              )}
            </svg>

            {/* Barra de Vida do Bandido */}
            <div style={{
              width: '80px',
              height: '8px',
              background: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '4px',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              overflow: 'hidden',
              marginTop: '0.2rem'
            }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #ef4444, #dc2626)',
                width: `${(banditHp / BANDIT_MAX_HP) * 100}%`,
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        </div>

        {/* MINIMAPA DOS 4 SETORES DO LABIRINTO */}
        <div style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 1.25rem',
          background: 'rgba(5, 10, 7, 0.9)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {SECTORS.map((sec, idx) => {
              const isCurrent = sectorIdx === idx;
              const isCleared = sectorIdx > idx;

              return (
                <div
                  key={sec.code}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '8px',
                    background: isCurrent 
                      ? 'rgba(34, 197, 94, 0.25)' 
                      : isCleared 
                      ? 'rgba(21, 128, 61, 0.2)' 
                      : 'rgba(255, 255, 255, 0.04)',
                    border: isCurrent 
                      ? '1.5px solid #22c55e' 
                      : isCleared 
                      ? '1px solid #16a34a' 
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: isCurrent ? '#4ade80' : isCleared ? '#86efac' : '#94a3b8'
                  }}
                >
                  <span>{isCleared ? '✅' : isCurrent ? '🔫' : '🔒'}</span>
                  <span>{sec.name}</span>
                </div>
              );
            })}
          </div>

          <div style={{ fontSize: '0.74rem', color: '#fbbf24', fontWeight: 800 }}>
            🔥 Combo: {streak}x Tiros Certeiros
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL: PERGUNTA TÁTICA DA BANCA AOCP */}
      {currentQuestion && !isSectorCleared && !isGameOver && !isGameCompleted && (
        <div className="glass-panel" style={{
          padding: '1.5rem',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(16, 26, 20, 0.98), rgba(10, 18, 13, 0.98))',
          border: '1.5px solid rgba(34, 197, 94, 0.35)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Header da Pergunta */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                background: 'rgba(245, 158, 11, 0.2)',
                color: '#fbbf24',
                fontSize: '0.72rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                border: '1px solid rgba(245, 158, 11, 0.35)'
              }}>
                BANCA INSTITUTO AOCP
              </span>
              <span style={{
                background: 'rgba(34, 197, 94, 0.15)',
                color: '#4ade80',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '6px'
              }}>
                {currentQuestion.topicoEdital || currentQuestion.materiaNome || 'Conhecimentos do Edital PMPE'}
              </span>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>
              Alvo: Tiro {copProgress + 1} de {GOAL_SHOTS_PER_SECTOR}
            </div>
          </div>

          {/* Enunciado */}
          <h2 style={{
            fontSize: '1.08rem',
            lineHeight: 1.6,
            color: '#f8fafc',
            fontWeight: 800,
            margin: '0 0 1.25rem'
          }}>
            {currentQuestion.question}
          </h2>

          {/* Alternativas de Resposta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {currentQuestion.options.map((opt, idx) => {
              const letter = ['A', 'B', 'C', 'D', 'E'][idx] || `${idx + 1}`;
              const isChosen = selectedOption === idx;
              const isCorrect = isAnswered && idx === currentQuestion.correctIndex;
              const isWrong = isAnswered && isChosen && !isCorrect;

              let btnBg = 'rgba(255, 255, 255, 0.04)';
              let border = '1px solid rgba(255, 255, 255, 0.12)';
              let textColor = '#e2e8f0';

              if (isCorrect) {
                btnBg = 'rgba(34, 197, 94, 0.25)';
                border = '2px solid #22c55e';
                textColor = '#86efac';
              } else if (isWrong) {
                btnBg = 'rgba(239, 68, 68, 0.25)';
                border = '2px solid #ef4444';
                textColor = '#fca5a5';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleAnswer(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.9rem 1.15rem',
                    borderRadius: '12px',
                    background: btnBg,
                    border: border,
                    color: textColor,
                    cursor: isAnswered ? 'default' : 'pointer',
                    textAlign: 'left',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    boxShadow: isCorrect ? '0 0 15px rgba(34, 197, 94, 0.35)' : 'none'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isCorrect 
                      ? '#22c55e' 
                      : isWrong 
                      ? '#ef4444' 
                      : 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    flexShrink: 0
                  }}>
                    {letter}
                  </div>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {isCorrect && <CheckCircle2 size={20} color="#22c55e" />}
                  {isWrong && <XCircle size={20} color="#ef4444" />}
                </button>
              );
            })}
          </div>

          {/* JUSTIFICATIVA PEDAGÓGICA & BOTÃO DE AVANÇO */}
          {isAnswered && (
            <div style={{
              marginTop: '1.25rem',
              padding: '1.15rem 1.35rem',
              borderRadius: '12px',
              background: selectedOption === currentQuestion.correctIndex 
                ? 'rgba(34, 197, 94, 0.12)' 
                : 'rgba(239, 68, 68, 0.12)',
              border: selectedOption === currentQuestion.correctIndex 
                ? '1.5px solid rgba(34, 197, 94, 0.4)' 
                : '1.5px solid rgba(239, 68, 68, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Crosshair size={18} color={selectedOption === currentQuestion.correctIndex ? '#4ade80' : '#f87171'} />
                <span style={{
                  fontWeight: 900,
                  fontSize: '0.88rem',
                  color: selectedOption === currentQuestion.correctIndex ? '#4ade80' : '#f87171'
                }}>
                  {selectedOption === currentQuestion.correctIndex 
                    ? '🎯 TIRO CERTO! INIMIGO ATINGIDO!' 
                    : '🚨 ALERTA: FOGO INIMIGO ABSORVIDO PELO COLETE!'}
                </span>
              </div>

              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                {currentQuestion.explanation || 'Mantenha a atenção à pegadinha literal da banca Instituto AOCP.'}
              </p>

              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={pickNextQuestion}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 1.4rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.88rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 15px rgba(34, 197, 94, 0.35)'
                  }}
                >
                  <span>Avançar no Corredor</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TELA DE SETOR LIBERADO (VITÓRIA NO SETOR) */}
      {isSectorCleared && (
        <div className="glass-panel" style={{
          textAlign: 'center',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.95), rgba(10, 40, 22, 0.98))',
          border: '2px solid #22c55e',
          boxShadow: '0 0 35px rgba(34, 197, 94, 0.4)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚪🔓</div>
          <span style={{
            background: 'rgba(34, 197, 94, 0.25)',
            color: '#4ade80',
            fontWeight: 900,
            fontSize: '0.78rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            border: '1px solid #22c55e',
            textTransform: 'uppercase'
          }}>
            SETOR NEUTRALIZADO COM SUCESSO!
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', margin: '0.8rem 0 0.35rem' }}>
            Portão Aberto: {currentSector.name} Limpo!
          </h2>
          <p style={{ color: '#86efac', fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Excelente disparo, recruta! O bandido deste perímetro foi contido e o caminho está seguro para invadir a próxima ala do labirinto.
          </p>

          <button
            type="button"
            onClick={handleNextSector}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.95rem 2rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#0f172a',
              fontWeight: 900,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
            }}
          >
            <span>Invadir Próximo Setor</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* TELA DE GAME OVER (4 COLETES ROMPIDOS) */}
      {isGameOver && (
        <div className="glass-panel" style={{
          textAlign: 'center',
          padding: '2.5rem 1.5rem',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(80, 15, 15, 0.95), rgba(40, 8, 8, 0.98))',
          border: '2px solid #ef4444',
          boxShadow: '0 0 35px rgba(239, 68, 68, 0.4)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🚨🛡️</div>
          <span style={{
            background: 'rgba(239, 68, 68, 0.25)',
            color: '#f87171',
            fontWeight: 900,
            fontSize: '0.78rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            border: '1px solid #ef4444',
            textTransform: 'uppercase'
          }}>
            EMBOSCADA NO LABIRINTO!
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', margin: '0.8rem 0 0.35rem' }}>
            Todos os 4 Coletes Foram Rompidos
          </h2>
          <p style={{ color: '#fca5a5', fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            O fogo inimigo superou suas defesas táticas. Reorganize seus conhecimentos das disciplinas do edital e tente a incursão novamente!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem' }}>
            <button
              type="button"
              onClick={handleRestart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.6rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '0.92rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={16} />
              <span>Tentar Incursão Novamente</span>
            </button>
            <button
              type="button"
              onClick={onBack}
              style={{
                padding: '0.85rem 1.4rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.92rem',
                cursor: 'pointer'
              }}
            >
              Voltar ao Quartel
            </button>
          </div>
        </div>
      )}

      {/* TELA DE LABIRINTO COMPLETO (VITÓRIA TOTAL) */}
      {isGameCompleted && (
        <div className="glass-panel" style={{
          textAlign: 'center',
          padding: '2.8rem 1.5rem',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.98), rgba(10, 40, 22, 0.98))',
          border: '2px solid #f59e0b',
          boxShadow: '0 0 45px rgba(245, 158, 11, 0.5)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🏆👮‍♂️</div>
          <span style={{
            background: 'rgba(245, 158, 11, 0.25)',
            color: '#fbbf24',
            fontWeight: 900,
            fontSize: '0.82rem',
            padding: '0.25rem 0.85rem',
            borderRadius: '20px',
            border: '1px solid #f59e0b',
            textTransform: 'uppercase'
          }}>
            MISSÃO CUMPRIDA • LABIRINTO DOMINADO!
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', margin: '0.8rem 0 0.35rem' }}>
            Todas as Fases Foram Conquistadas!
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto 1.5rem' }}>
            Você cruzou todos os 4 setores do labirinto tático, neutralizou os alvos armados e demonstrou pontaria afiada no conteúdo da banca AOCP!
          </p>

          <button
            type="button"
            onClick={() => {
              onFinishGame({
                title: 'Labirinto Tático Policial',
                score,
                xpEarned: xp,
                statsDetail: [
                  { label: 'Setores Conquistados', value: '4 / 4 Setores' },
                  { label: 'Pontuação Tática', value: score },
                  { label: 'XP Conquistado', value: `+${xp} XP` },
                  { label: 'Coletes Restantes', value: `${lives} / ${MAX_LIVES}` }
                ]
              });
            }}
            style={{
              padding: '0.95rem 2.2rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#0f172a',
              fontWeight: 900,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
            }}
          >
            Registrar Conquista e Voltar ao Quartel
          </button>
        </div>
      )}
    </div>
  );
};
