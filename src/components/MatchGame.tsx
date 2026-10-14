import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { MatchPair } from '../types/game';
import { Timer, Check, ArrowRight, ArrowLeft, Zap, Shield, AlertTriangle, Crosshair, Award, Volume2, Sparkles, RefreshCw } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

export interface MatchLevelConfig {
  level: number;
  key: 'facilimo' | 'facil' | 'medio' | 'dificil' | 'dificilimo';
  title: string;
  rank: string;
  badge: string;
  pairCount: number;
  xpReward: number;
  color: string;
  description: string;
}

export const MATCH_LEVELS: MatchLevelConfig[] = [
  {
    level: 1,
    key: 'facilimo',
    title: 'Facílimo',
    rank: 'Recruta PMPE',
    badge: '🔰',
    pairCount: 4,
    xpReward: 80,
    color: '#10b981',
    description: 'Fundamentos e fatos basilares de PE e Direito'
  },
  {
    level: 2,
    key: 'facil',
    title: 'Fácil',
    rank: 'Soldado de Infantaria',
    badge: '🎖️',
    pairCount: 5,
    xpReward: 120,
    color: '#06b6d4',
    description: 'Noções essenciais do edital e leis fundamentais'
  },
  {
    level: 3,
    key: 'medio',
    title: 'Médio',
    rank: 'Cabo Tático',
    badge: '⚔️',
    pairCount: 5,
    xpReward: 180,
    color: '#eab308',
    description: 'Prazos legais, regras de RLM e exceções constitucionais'
  },
  {
    level: 4,
    key: 'dificil',
    title: 'Difícil',
    rank: '3º Sargento',
    badge: '🛡️',
    pairCount: 6,
    xpReward: 250,
    color: '#f97316',
    description: 'Doutrina aprofundada, jurisprudência e normas específicas'
  },
  {
    level: 5,
    key: 'dificilimo',
    title: 'Dificílimo',
    rank: 'Oficial Caveira (Elite)',
    badge: '💀',
    pairCount: 6,
    xpReward: 350,
    color: '#ef4444',
    description: 'O nível máximo de rigor da banca examinadora AOCP'
  }
];

interface MatchGameProps {
  pairs: MatchPair[];
  onFinish: (result: {
    score: number;
    xpEarned: number;
    timeTaken: number;
    mistakes: number;
  }) => void;
  onExit: () => void;
  onAwardXp?: (amount: number) => void;
}

export const MatchGame: React.FC<MatchGameProps> = ({ pairs, onFinish, onExit, onAwardXp }) => {
  // Estado do Nível Atual (1 a 5)
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [totalXpWon, setTotalXpWon] = useState<number>(0);
  const [totalMistakes, setTotalMistakes] = useState<number>(0);
  const [levelCompletedModal, setLevelCompletedModal] = useState<boolean>(false);

  // Configuração do Nível Atual
  const currentConfig = useMemo(() => {
    return MATCH_LEVELS.find((l) => l.level === currentLevel) || MATCH_LEVELS[0];
  }, [currentLevel]);

  // Seleciona os pares adequados para o nível atual
  const activePairs = useMemo(() => {
    if (!pairs || pairs.length === 0) return [];

    // Filtra pares do nível específico
    const levelPairs = pairs.filter((p) => p.difficulty === currentConfig.key);

    // Se o banco filtrado tiver o suficiente
    if (levelPairs.length >= currentConfig.pairCount) {
      return [...levelPairs].sort(() => 0.5 - Math.random()).slice(0, currentConfig.pairCount);
    }

    // Se tiver menos pares específicos da categoria, complementa com outros pares disponíveis
    const fallbackPairs = pairs.filter((p) => !levelPairs.includes(p));
    const combined = [...levelPairs, ...fallbackPairs.sort(() => 0.5 - Math.random())];
    return combined.slice(0, Math.min(currentConfig.pairCount, combined.length));
  }, [pairs, currentConfig]);

  // Lados embaralhados
  const [shuffledTerms, setShuffledTerms] = useState<{ id: string; text: string }[]>([]);
  const [shuffledDefs, setShuffledDefs] = useState<{ id: string; text: string }[]>([]);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [selectedDefId, setSelectedDefId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState<{ termId: string; defId: string } | null>(null);

  // Painel de Explicação de Erro Didático
  const [errorExplanation, setErrorExplanation] = useState<{
    termText: string;
    defText: string;
    explanation: string;
  } | null>(null);

  // Estatísticas da rodada
  const [seconds, setSeconds] = useState(0);
  const [mistakesThisLevel, setMistakesThisLevel] = useState(0);

  // Carrega rodada ao mudar de nível ou de pares ativos
  const startLevelRound = useCallback(() => {
    if (activePairs.length === 0) return;

    const terms = activePairs.map((p) => ({ id: p.id, text: p.term }));
    const defs = activePairs.map((p) => ({ id: p.id, text: p.definition }));

    setShuffledTerms([...terms].sort(() => 0.5 - Math.random()));
    setShuffledDefs([...defs].sort(() => 0.5 - Math.random()));
    setMatchedIds([]);
    setSelectedTermId(null);
    setSelectedDefId(null);
    setWrongMatch(null);
    setErrorExplanation(null);
    setLevelCompletedModal(false);
    setMistakesThisLevel(0);
  }, [activePairs]);

  useEffect(() => {
    startLevelRound();
  }, [startLevelRound]);

  // Cronômetro progressivo geral
  useEffect(() => {
    if (levelCompletedModal) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [levelCompletedModal]);

  // Conexão entre Termo e Definição
  useEffect(() => {
    if (selectedTermId && selectedDefId) {
      if (selectedTermId === selectedDefId) {
        // === ACERTO ===
        sound.playSuccess();
        const newMatched = [...matchedIds, selectedTermId];
        setMatchedIds(newMatched);
        setSelectedTermId(null);
        setSelectedDefId(null);
        setErrorExplanation(null);

        // Se completou todos os pares do nível
        if (newMatched.length === activePairs.length && activePairs.length > 0) {
          // RAJADA DE TIROS COMEMORATIVA solicitada pelo Comandante!
          sound.playAk47Burst();

          // Confetes táticos militares
          confetti({
            particleCount: 75,
            spread: 85,
            origin: { y: 0.6 }
          });

          // Concede XP na hora
          const xpGained = currentConfig.xpReward;
          setTotalXpWon((prev) => prev + xpGained);
          if (onAwardXp) {
            onAwardXp(xpGained);
          }

          setCompletedLevels((prev) => (prev.includes(currentLevel) ? prev : [...prev, currentLevel]));

          // Se for o nível 5 (Dificílimo / Caveira), toca salva cerimonial de honra
          if (currentLevel === 5) {
            setTimeout(() => {
              sound.playMilitaryAchievement();
            }, 500);
          }

          // Abre modal comemorativo de transição militar
          setTimeout(() => {
            setLevelCompletedModal(true);
          }, 600);
        }
      } else {
        // === ERRO ===
        sound.playError();
        setMistakesThisLevel((prev) => prev + 1);
        setTotalMistakes((prev) => prev + 1);
        setWrongMatch({ termId: selectedTermId, defId: selectedDefId });

        // Identifica o termo e a definição incorreta para montar a explicação didática
        const termItem = activePairs.find((p) => p.id === selectedTermId);
        const defItem = activePairs.find((p) => p.id === selectedDefId);

        const explanationText =
          termItem?.explanation ||
          `O termo "${termItem?.term || 'selecionado'}" corresponde à definição correta: "${termItem?.definition || ''}". Revise a correlação!`;

        setErrorExplanation({
          termText: termItem?.term || 'Conceito',
          defText: defItem?.definition || 'Definição incorreta',
          explanation: explanationText
        });

        // Limpa a seleção visual de erro após 600ms, mas mantém o card explicativo visível
        setTimeout(() => {
          setWrongMatch(null);
          setSelectedTermId(null);
          setSelectedDefId(null);
        }, 600);
      }
    }
  }, [
    selectedTermId,
    selectedDefId,
    activePairs,
    matchedIds,
    currentLevel,
    currentConfig,
    onAwardXp
  ]);

  const handleSelectTerm = (id: string) => {
    if (matchedIds.includes(id) || wrongMatch) return;
    sound.playTacticalClick();
    setSelectedTermId(selectedTermId === id ? null : id);
  };

  const handleSelectDef = (id: string) => {
    if (matchedIds.includes(id) || wrongMatch) return;
    sound.playTacticalClick();
    setSelectedDefId(selectedDefId === id ? null : id);
  };

  // Avança para o próximo nível
  const handleNextLevel = () => {
    sound.playClick();
    if (currentLevel < 5) {
      setCurrentLevel((prev) => prev + 1);
    } else {
      // Zerou todos os níveis
      handleFinishGame();
    }
  };

  // Finaliza a sessão e envia resultado
  const handleFinishGame = () => {
    const baseScore = 600;
    const timePenalty = Math.min(250, Math.floor(seconds * 1.5));
    const mistakePenalty = totalMistakes * 25;
    const finalScore = Math.max(150, baseScore - timePenalty - mistakePenalty + totalXpWon);

    onFinish({
      score: finalScore,
      xpEarned: totalXpWon,
      timeTaken: seconds,
      mistakes: totalMistakes
    });
  };

  return (
    <div
      className="glass-panel"
      style={{
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto',
        padding: '1.75rem',
        border: '1px solid rgba(6, 182, 212, 0.25)',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.45)'
      }}
    >
      {/* Top Header Tático */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.25rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '1rem'
        }}
      >
        <button
          onClick={() => {
            sound.playClick();
            if (completedLevels.length > 0) {
              handleFinishGame();
            } else {
              onExit();
            }
          }}
          className="quiz-exit-btn"
          title="Encerrar Missão e Salvar"
        >
          <ArrowLeft size={16} />
          <span>{completedLevels.length > 0 ? 'Concluir Missão' : 'Voltar'}</span>
        </button>

        {/* Nível Atual e Patente */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{ fontSize: '1.5rem' }}>{currentConfig.badge}</span>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
              Nível {currentConfig.level} • {currentConfig.title}
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: currentConfig.color }}>
              {currentConfig.rank}
            </div>
          </div>
        </div>

        {/* Indicadores Táticos: Tempo & XP */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem' }}>
            <Timer size={17} />
            <span>{seconds}s</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(234, 179, 8, 0.15)',
              border: '1px solid rgba(234, 179, 8, 0.35)',
              padding: '0.3rem 0.75rem',
              borderRadius: '999px',
              color: '#facc15',
              fontWeight: 800,
              fontSize: '0.85rem'
            }}
          >
            <Zap size={14} />
            <span>+{totalXpWon} XP</span>
          </div>

          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Pares:{' '}
            <strong style={{ color: 'var(--neon-emerald)' }}>
              {matchedIds.length} / {activePairs.length}
            </strong>
          </div>
        </div>
      </div>

      {/* Barra de Seleção de Níveis Militares (Progressão Estruturada) */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}
        >
          <span>Progressão de Dificuldade Operacional:</span>
          <span>
            {completedLevels.length} / 5 Níveis Batidos
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.5rem'
          }}
        >
          {MATCH_LEVELS.map((lvl) => {
            const isCurrent = lvl.level === currentLevel;
            const isCompleted = completedLevels.includes(lvl.level);

            return (
              <button
                key={lvl.level}
                onClick={() => {
                  sound.playClick();
                  setCurrentLevel(lvl.level);
                }}
                style={{
                  padding: '0.55rem 0.4rem',
                  borderRadius: '10px',
                  background: isCurrent
                    ? 'rgba(6, 182, 212, 0.2)'
                    : isCompleted
                    ? 'rgba(16, 185, 129, 0.12)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: isCurrent
                    ? `2px solid ${lvl.color}`
                    : isCompleted
                    ? '1px solid rgba(16, 185, 129, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                title={`${lvl.title} (${lvl.rank}) - Recompensa: +${lvl.xpReward} XP`}
              >
                <div style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{lvl.badge}</div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: isCurrent ? lvl.color : isCompleted ? '#34d399' : '#94a3b8',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {lvl.title}
                </div>
                <div style={{ fontSize: '0.65rem', color: '#64748b' }}>+{lvl.xpReward} XP</div>
                {isCompleted && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '3px',
                      color: '#10b981'
                    }}
                  >
                    <Check size={11} strokeWidth={3} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtítulo Descritivo */}
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>
          Conecte os Pares Táticos • Nível {currentConfig.level}: {currentConfig.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
          {currentConfig.description}. Selecione o termo à esquerda e conecte à sua definição correta à direita.
        </p>
      </div>

      {/* Painel Didático de Explicação de Erro ("Se errar, explique por que errou") */}
      {errorExplanation && (
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.95))',
            border: '2px solid rgba(239, 68, 68, 0.55)',
            borderRadius: '16px',
            padding: '1.1rem 1.4rem',
            marginBottom: '1.5rem',
            animation: 'fadeIn 0.3s ease',
            boxShadow: '0 0 25px rgba(239, 68, 68, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.25)',
                color: '#f87171',
                padding: '0.5rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <AlertTriangle size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.4rem'
                }}
              >
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    color: '#f87171'
                  }}
                >
                  ⚠️ CONEXÃO INCORRETA DETECTADA! APRENDA COM O ERRO:
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Edital PMPE</span>
              </div>

              <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                Você tentou associar <strong style={{ color: '#38bdf8' }}>"{errorExplanation.termText}"</strong> com uma definição diferente.
              </div>

              {/* Fundamentação didática detalhada */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  borderLeft: '4px solid #38bdf8',
                  padding: '0.75rem 1rem',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  color: '#f1f5f9',
                  marginBottom: '0.85rem'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  📖 Fundamentação Correta / Lei / Fato Histórico:
                </div>
                {errorExplanation.explanation}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    sound.playClick();
                    setErrorExplanation(null);
                  }}
                  style={{
                    background: 'rgba(239, 68, 68, 0.2)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#fecaca',
                    padding: '0.4rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.35)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)')}
                >
                  <span>🫡 Compreendido, Continuar Missão!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grade de 2 Colunas */}
      <div className="match-grid">
        {/* Coluna 1: Termos */}
        <div className="match-column">
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              color: 'var(--neon-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Crosshair size={14} />
            <span>CONCEITO / TERMO DO EDITAL</span>
          </div>

          {shuffledTerms.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedTermId === item.id;
            const isWrong = wrongMatch?.termId === item.id;

            return (
              <button
                key={`term-${item.id}`}
                className={`match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${isWrong ? 'wrong-match' : ''}`}
                onClick={() => handleSelectTerm(item.id)}
                disabled={isMatched}
                style={{
                  transition: 'all 0.2s ease',
                  borderLeft: isSelected ? '4px solid #38bdf8' : isMatched ? '4px solid #10b981' : undefined
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.94rem' }}>{item.text}</span>
                {isMatched && <Check size={18} color="var(--neon-emerald)" strokeWidth={3} />}
              </button>
            );
          })}
        </div>

        {/* Coluna 2: Definições */}
        <div className="match-column">
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              color: 'var(--neon-purple)',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Shield size={14} />
            <span>DEFINIÇÃO CORRESPONDENTE</span>
          </div>

          {shuffledDefs.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedDefId === item.id;
            const isWrong = wrongMatch?.defId === item.id;

            return (
              <button
                key={`def-${item.id}`}
                className={`match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${isWrong ? 'wrong-match' : ''}`}
                onClick={() => handleSelectDef(item.id)}
                disabled={isMatched}
                style={{
                  transition: 'all 0.2s ease',
                  borderLeft: isSelected ? '4px solid #c084fc' : isMatched ? '4px solid #10b981' : undefined
                }}
              >
                <span style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{item.text}</span>
                {isMatched && <Check size={18} color="var(--neon-emerald)" strokeWidth={3} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal / Card Celebratório de Passagem de Nível (Com Rajada de Tiro!) */}
      {levelCompletedModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 15, 29, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(6, 78, 59, 0.9))',
              border: '2px solid rgba(16, 185, 129, 0.6)',
              borderRadius: '24px',
              maxWidth: '520px',
              width: '100%',
              padding: '2.25rem',
              textAlign: 'center',
              boxShadow: '0 0 50px rgba(16, 185, 129, 0.35)',
              position: 'relative'
            }}
          >
            {/* Ícone de Sucesso */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '2px solid rgba(16, 185, 129, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                fontSize: '2.2rem'
              }}
            >
              {currentConfig.badge}
            </div>

            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#34d399',
                letterSpacing: '0.1em',
                marginBottom: '0.35rem'
              }}
            >
              💥 RAJADA DE VITÓRIA • NÍVEL {currentConfig.level} SUPERADO!
            </div>

            <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#f8fafc', marginBottom: '0.5rem' }}>
              {currentConfig.title}: {currentConfig.rank}
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              {currentLevel < 5
                ? 'Conexões táticas consolidadas com precisão cirúrgica militar! Prepare-se para elevar o grau de dificuldade.'
                : '🎖️ CONSAGRAÇÃO MÁXIMA: Você completou o nível DIFICÍLIMO e dominou os conceitos mais espinhosos da AOCP!'}
            </p>

            {/* Bônus de XP Ganho */}
            <div
              style={{
                background: 'rgba(234, 179, 8, 0.15)',
                border: '1px solid rgba(234, 179, 8, 0.4)',
                borderRadius: '14px',
                padding: '0.85rem 1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.75rem'
              }}
            >
              <Zap size={22} color="#facc15" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#fde047', fontWeight: 700 }}>
                  Recompensa Tática de Nível
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                  +{currentConfig.xpReward} XP Adicionados!
                </div>
              </div>
            </div>

            {/* Ações */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentLevel < 5 ? (
                <button
                  onClick={handleNextLevel}
                  style={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.95rem 1.5rem',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <span>
                    Avançar para o Nível {currentLevel + 1}: {MATCH_LEVELS[currentLevel]?.title} ({MATCH_LEVELS[currentLevel]?.rank})
                  </span>
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleFinishGame}
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.95rem 1.5rem',
                    borderRadius: '14px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <Award size={20} />
                  <span>Concluir Operação com Honras Militares</span>
                </button>
              )}

              <button
                onClick={() => {
                  sound.playClick();
                  startLevelRound();
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#94a3b8',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <RefreshCw size={14} />
                <span>Repetir este nível para treinar mais</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
