import React, { useState, useEffect, useMemo } from 'react';
import {
  Swords,
  X,
  Trophy,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Award,
  Flame,
  Zap,
  RefreshCw
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { 
  createDuel, 
  completeDuelOpponent, 
  fetchUserDuels, 
  type PlatoonDuel 
} from '../utils/duelManager';
import { fetchRegistryFromCloud, isMasterUser, type UserAccessRecord } from '../utils/authManager';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface PlatoonDuelModalProps {
  userName: string;
  allQuestions: QuizQuestion[];
  onClose: () => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

export const PlatoonDuelModal: React.FC<PlatoonDuelModalProps> = ({
  userName,
  allQuestions,
  onClose,
  onQuestionAnswered
}) => {
  const [activeTab, setActiveTab] = useState<'duelos' | 'novo'>('duelos');
  const [duels, setDuels] = useState<PlatoonDuel[]>([]);
  const [registeredUsers, setRegisteredUsers] = useState<Record<string, UserAccessRecord>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Estado da Batalha em Andamento (5 Questões)
  const [activeDuelToPlay, setActiveDuelToPlay] = useState<{
    duel?: PlatoonDuel;
    isChallenger: boolean;
    opponentName: string;
    questions: QuizQuestion[];
  } | null>(null);

  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [combatStartTime, setCombatStartTime] = useState(0);
  const [combatFinishedResult, setCombatFinishedResult] = useState<{
    score: number;
    timeSeconds: number;
    winnerName?: string;
  } | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [userDuels, reg] = await Promise.all([
        fetchUserDuels(userName),
        fetchRegistryFromCloud()
      ]);
      setDuels(userDuels);
      setRegisteredUsers(reg);
    } catch {} finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [userName]);

  // Iniciar criação de novo duelo
  const handleStartNewDuel = (opponentName: string) => {
    sound.playGunshot38();
    // Seleciona 5 questões aleatórias do banco
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setActiveDuelToPlay({
      isChallenger: true,
      opponentName,
      questions: shuffled
    });
    setCurrentQIdx(0);
    setAnswers({});
    setCombatStartTime(Date.now());
    setCombatFinishedResult(null);
  };

  // Aceitar e jogar duelo existente
  const handleAcceptDuel = (duel: PlatoonDuel) => {
    sound.playGunshot38();
    // Mapeia as mesmas questões pelo ID
    const qMap = new Map<string, QuizQuestion>();
    allQuestions.forEach(q => qMap.set(q.id, q));
    const duelQuestions = duel.questionIds.map(id => qMap.get(id)).filter((q): q is QuizQuestion => Boolean(q));

    setActiveDuelToPlay({
      duel,
      isChallenger: false,
      opponentName: duel.challengerName,
      questions: duelQuestions.length === 5 ? duelQuestions : allQuestions.slice(0, 5)
    });
    setCurrentQIdx(0);
    setAnswers({});
    setCombatStartTime(Date.now());
    setCombatFinishedResult(null);
  };

  const handleSelectAnswer = async (optIdx: number) => {
    if (!activeDuelToPlay) return;
    sound.playClick();
    const updatedAnswers = { ...answers, [currentQIdx]: optIdx };
    setAnswers(updatedAnswers);

    const isLast = currentQIdx === activeDuelToPlay.questions.length - 1;

    if (!isLast) {
      setCurrentQIdx(prev => prev + 1);
    } else {
      // Fim das 5 questões do duelo
      const elapsedSeconds = Math.round((Date.now() - combatStartTime) / 1000);
      let score = 0;
      activeDuelToPlay.questions.forEach((q, idx) => {
        const chosen = updatedAnswers[idx];
        const isCorrect = chosen === q.correctIndex;
        if (isCorrect) score++;
        onQuestionAnswered?.(isCorrect, isCorrect ? 25 : 0);
      });

      if (activeDuelToPlay.isChallenger) {
        // Salva desafio criado
        const qIds = activeDuelToPlay.questions.map(q => q.id);
        await createDuel(userName, activeDuelToPlay.opponentName, qIds, score, elapsedSeconds);
        sound.playMilitaryAchievement();
        setCombatFinishedResult({ score, timeSeconds: elapsedSeconds });
        loadData();
      } else if (activeDuelToPlay.duel) {
        // Conclui resposta do adversário
        const finished = await completeDuelOpponent(activeDuelToPlay.duel.id, score, elapsedSeconds);
        if (finished?.winnerName === userName) {
          sound.playLevelUp();
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.4 },
            colors: ['#22c55e', '#fbbf24', '#3b82f6']
          });
        } else {
          sound.playMilitaryAchievement();
        }
        setCombatFinishedResult({
          score,
          timeSeconds: elapsedSeconds,
          winnerName: finished?.winnerName || undefined
        });
        loadData();
      }
    }
  };

  const candidateOpponents = useMemo(() => {
    return Object.entries(registeredUsers)
      .filter(([key, u]) => u.name.toLowerCase() !== userName.toLowerCase())
      .map(([_, u]) => u.name);
  }, [registeredUsers, userName]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.95)',
        backdropFilter: 'blur(14px)',
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
          maxHeight: '92vh',
          background: 'linear-gradient(180deg, #0e172a 0%, #060b17 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(180, 83, 9, 0.3) 0%, rgba(10, 17, 32, 0.98) 100%)',
            borderBottom: '1px solid rgba(245, 158, 11, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(245, 158, 11, 0.5)',
                color: '#ffffff'
              }}
            >
              <Swords size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  DUELO 1 VS 1 DO PELOTÃO
                </h2>
                <span
                  style={{
                    background: 'rgba(245, 158, 11, 0.25)',
                    border: '1px solid #f59e0b',
                    color: '#fbbf24',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  DISPUTA TÁTICA
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                Desafie outros soldados para um combate rápido de 5 questões com critério de acertos e velocidade.
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* CORPO DO DUELO */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {activeDuelToPlay ? (
            /* ================= FASE DE COMBATE (JOGANDO AS 5 QUESTÕES) ================= */
            combatFinishedResult ? (
              <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                  {combatFinishedResult.winnerName === userName ? '🏆' : '⚔️'}
                </div>

                <h2 style={{ color: '#ffffff', margin: 0, fontSize: '1.8rem', fontWeight: 900 }}>
                  {activeDuelToPlay.isChallenger
                    ? 'Desafio Enviado com Sucesso!'
                    : combatFinishedResult.winnerName === userName
                    ? 'VITÓRIA TÁTICA NO COMBATE!'
                    : combatFinishedResult.winnerName === 'Empate Tático'
                    ? 'EMPATE TÁTICO NO DUELO!'
                    : `Vitória do Soldado ${combatFinishedResult.winnerName}!`}
                </h2>

                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: '0.75rem auto 1.5rem' }}>
                  {activeDuelToPlay.isChallenger ? (
                    <>
                      Você acertou <strong>{combatFinishedResult.score}/5 questões</strong> em{' '}
                      <strong>{combatFinishedResult.timeSeconds}s</strong>. O desafio foi enviado para{' '}
                      <strong>{activeDuelToPlay.opponentName}</strong> responder!
                    </>
                  ) : (
                    <>
                      Seu resultado: <strong>{combatFinishedResult.score}/5 acertos</strong> em{' '}
                      <strong>{combatFinishedResult.timeSeconds}s</strong>.
                    </>
                  )}
                </p>

                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveDuelToPlay(null);
                    setCombatFinishedResult(null);
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#060b17',
                    border: 'none',
                    padding: '0.75rem 1.6rem',
                    borderRadius: '12px',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  Voltar ao Mural de Duelos
                </button>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '12px',
                    marginBottom: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <span style={{ color: '#fbbf24', fontWeight: 900 }}>
                    Combate vs {activeDuelToPlay.opponentName} • Questão {currentQIdx + 1} de 5
                  </span>
                  <span style={{ color: '#93c5fd', fontSize: '0.82rem' }}>
                    Responda com precisão e velocidade
                  </span>
                </div>

                {activeDuelToPlay.questions[currentQIdx] && (
                  <>
                    <div
                      style={{
                        background: 'rgba(10, 17, 32, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '16px',
                        padding: '1.25rem',
                        fontSize: '1.02rem',
                        lineHeight: 1.6,
                        color: '#ffffff',
                        marginBottom: '1rem'
                      }}
                    >
                      {activeDuelToPlay.questions[currentQIdx].question}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {activeDuelToPlay.questions[currentQIdx].options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(optIdx)}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '0.9rem 1.15rem',
                            color: '#ffffff',
                            textAlign: 'left',
                            fontSize: '0.94rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.85rem',
                            cursor: 'pointer'
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.08)',
                              color: '#fbbf24',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 900
                            }}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span>{opt}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )
          ) : (
            /* ================= MURAL DE DUELOS & DESAFIAR ================= */
            <>
              {/* ABAS */}
              <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
                <button
                  onClick={() => setActiveTab('duelos')}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px 10px 0 0',
                    background: activeTab === 'duelos' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'duelos' ? '3px solid #f59e0b' : '3px solid transparent',
                    color: activeTab === 'duelos' ? '#fbbf24' : '#94a3b8',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  Meus Duelos & Desafios ({duels.length})
                </button>

                <button
                  onClick={() => setActiveTab('novo')}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px 10px 0 0',
                    background: activeTab === 'novo' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'novo' ? '3px solid #f59e0b' : '3px solid transparent',
                    color: activeTab === 'novo' ? '#fbbf24' : '#94a3b8',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  + Lançar Novo Desafio
                </button>
              </div>

              {activeTab === 'duelos' ? (
                duels.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                    <Swords size={40} style={{ margin: '0 auto 1rem', color: '#64748b' }} />
                    <h3 style={{ color: '#ffffff', margin: 0 }}>Nenhum duelo ativo</h3>
                    <p style={{ fontSize: '0.86rem', maxWidth: '420px', margin: '0.5rem auto 1rem' }}>
                      Desafie outro soldado do pelotão para testar quem é mais rápido e preciso nas questões da AOCP.
                    </p>
                    <button
                      onClick={() => setActiveTab('novo')}
                      style={{
                        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                        color: '#060b17',
                        border: 'none',
                        padding: '0.65rem 1.4rem',
                        borderRadius: '10px',
                        fontWeight: 900,
                        cursor: 'pointer'
                      }}
                    >
                      Desafiar um Soldado
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {duels.map(d => {
                      const isIncoming = d.opponentName.toLowerCase() === userName.toLowerCase() && d.status === 'waiting_opponent';
                      const isWaiting = d.challengerName.toLowerCase() === userName.toLowerCase() && d.status === 'waiting_opponent';
                      const isFinished = d.status === 'finished';
                      const isWinner = d.winnerName?.toLowerCase() === userName.toLowerCase();

                      return (
                        <div
                          key={d.id}
                          style={{
                            background: isIncoming ? 'rgba(245, 158, 11, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                            border: isIncoming ? '1.5px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '14px',
                            padding: '1rem 1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem'
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ fontSize: '1rem', fontWeight: 900, color: '#ffffff' }}>
                                {d.challengerName} vs {d.opponentName}
                              </span>
                              {isFinished && (
                                <span
                                  style={{
                                    background: isWinner ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                    color: isWinner ? '#4ade80' : '#f87171',
                                    border: isWinner ? '1px solid #22c55e' : '1px solid #ef4444',
                                    padding: '0.1rem 0.5rem',
                                    borderRadius: '6px',
                                    fontSize: '0.72rem',
                                    fontWeight: 900
                                  }}
                                >
                                  {d.winnerName === 'Empate Tático' ? 'EMPATE' : isWinner ? 'VOCÊ VENCEU' : 'DERROTA'}
                                </span>
                              )}
                            </div>

                            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                              {isIncoming ? (
                                <span style={{ color: '#fbbf24', fontWeight: 800 }}>⚡ Desafio recebido! Aceite para combater.</span>
                              ) : isWaiting ? (
                                <span style={{ color: '#67e8f9' }}>⏳ Aguardando {d.opponentName} responder...</span>
                              ) : (
                                <span>
                                  Placar: {d.challengerName} ({d.challengerScore}/5 em {d.challengerTimeSeconds}s) vs {d.opponentName} ({d.opponentScore}/5 em {d.opponentTimeSeconds}s)
                                </span>
                              )}
                            </div>
                          </div>

                          {isIncoming && (
                            <button
                              onClick={() => handleAcceptDuel(d)}
                              style={{
                                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                                color: '#ffffff',
                                border: 'none',
                                padding: '0.65rem 1.35rem',
                                borderRadius: '10px',
                                fontWeight: 900,
                                fontSize: '0.86rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)'
                              }}
                            >
                              <Swords size={16} />
                              <span>Aceitar Combate</span>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )
              ) : (
                /* ABA NOVO DUELO */
                <div>
                  <h3 style={{ color: '#ffffff', margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 900 }}>
                    Selecione o Soldado que você deseja desafiar:
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.75rem' }}>
                    {candidateOpponents.map(name => (
                      <div
                        key={name}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ fontWeight: 800, color: '#ffffff' }}>{name}</div>
                        <button
                          onClick={() => handleStartNewDuel(name)}
                          style={{
                            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                            color: '#060b17',
                            border: 'none',
                            padding: '0.45rem 0.95rem',
                            borderRadius: '8px',
                            fontWeight: 900,
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          Desafiar ⚔️
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
