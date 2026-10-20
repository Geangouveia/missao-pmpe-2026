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
  RefreshCw,
  Copy,
  Share2
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { 
  createDuel, 
  completeDuelOpponent, 
  fetchUserDuels, 
  createRoomDuel,
  fetchDuelByRoomCode,
  completeRoomDuel,
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
  const [activeTab, setActiveTab] = useState<'duelos' | 'novo' | 'sala'>('duelos');
  const [duels, setDuels] = useState<PlatoonDuel[]>([]);
  const [registeredUsers, setRegisteredUsers] = useState<Record<string, UserAccessRecord>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Estados de Sala com Código
  const [roomCodeInput, setRoomCodeInput] = useState('');
  const [isRoomSearching, setIsRoomSearching] = useState(false);
  const [roomSearchError, setRoomSearchError] = useState<string | null>(null);
  const [createdRoomCode, setCreatedRoomCode] = useState<string | null>(null);
  const [copiedCodeSuccess, setCopiedCodeSuccess] = useState(false);

  // Estado da Batalha em Andamento (5 Questões)
  const [activeDuelToPlay, setActiveDuelToPlay] = useState<{
    duel?: PlatoonDuel;
    isChallenger: boolean;
    isRoomCreation?: boolean;
    isRoomOpponent?: boolean;
    roomCode?: string;
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

  // Iniciar criação de sala com código tático
  const handleStartRoomCreation = () => {
    sound.playGunshot38();
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    setActiveDuelToPlay({
      isChallenger: true,
      isRoomCreation: true,
      opponentName: 'Desafiante da Sala',
      questions: shuffled
    });
    setCurrentQIdx(0);
    setAnswers({});
    setCombatStartTime(Date.now());
    setCombatFinishedResult(null);
  };

  // Buscar e entrar em sala existente por código
  const handleJoinRoomDuel = async () => {
    if (!roomCodeInput.trim()) return;
    setIsRoomSearching(true);
    setRoomSearchError(null);
    sound.playClick();

    try {
      const duel = await fetchDuelByRoomCode(roomCodeInput);
      if (!duel) {
        setRoomSearchError('Sala não encontrada ou código expirado. Verifique o código digitado.');
        return;
      }
      if (duel.status === 'finished') {
        setRoomSearchError(`Este combate já foi encerrado! Vencedor: ${duel.winnerName}`);
        return;
      }
      if (duel.challengerName.toLowerCase() === userName.toLowerCase()) {
        setRoomSearchError('Você é o criador desta sala. Aguarde outro soldado entrar pelo código!');
        return;
      }

      // Mapeia questões do duelo
      const qMap = new Map<string, QuizQuestion>();
      allQuestions.forEach(q => qMap.set(q.id, q));
      const duelQuestions = duel.questionIds.map(id => qMap.get(id)).filter((q): q is QuizQuestion => Boolean(q));

      sound.playGunshot38();
      setActiveDuelToPlay({
        duel,
        isChallenger: false,
        isRoomOpponent: true,
        roomCode: duel.roomCode,
        opponentName: duel.challengerName,
        questions: duelQuestions.length === 5 ? duelQuestions : allQuestions.slice(0, 5)
      });
      setCurrentQIdx(0);
      setAnswers({});
      setCombatStartTime(Date.now());
      setCombatFinishedResult(null);
    } catch {
      setRoomSearchError('Erro de conexão ao acessar a sala.');
    } finally {
      setIsRoomSearching(false);
    }
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

      if (activeDuelToPlay.isRoomCreation) {
        // Cria sala com código
        const qIds = activeDuelToPlay.questions.map(q => q.id);
        const res = await createRoomDuel(userName, qIds, score, elapsedSeconds);
        sound.playMilitaryAchievement();
        setCreatedRoomCode(res.roomCode);
        setCombatFinishedResult({ score, timeSeconds: elapsedSeconds });
        loadData();
      } else if (activeDuelToPlay.isRoomOpponent && activeDuelToPlay.roomCode) {
        // Conclui duelo da sala
        const finished = await completeRoomDuel(activeDuelToPlay.roomCode, userName, score, elapsedSeconds);
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
      } else if (activeDuelToPlay.isChallenger) {
        // Salva desafio direto criado
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
                  {activeDuelToPlay.isRoomCreation
                    ? 'SALA DE COMBATE CRIADA COM SUCESSO!'
                    : activeDuelToPlay.isChallenger
                    ? 'Desafio Enviado com Sucesso!'
                    : combatFinishedResult.winnerName === userName
                    ? 'VITÓRIA TÁTICA NO COMBATE!'
                    : combatFinishedResult.winnerName === 'Empate Tático'
                    ? 'EMPATE TÁTICO NO DUELO!'
                    : `Vitória do Soldado ${combatFinishedResult.winnerName}!`}
                </h2>

                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: '0.75rem auto 1.5rem', maxWidth: '580px' }}>
                  {activeDuelToPlay.isRoomCreation ? (
                    <>
                      Você acertou <strong>{combatFinishedResult.score}/5 questões</strong> em{' '}
                      <strong>{combatFinishedResult.timeSeconds}s</strong>. Envie o código abaixo para qualquer concurseiro ou no grupo de estudos!
                    </>
                  ) : activeDuelToPlay.isChallenger ? (
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

                {/* CARD DE DESTAQUE DO CÓDIGO DA SALA GERADA */}
                {createdRoomCode && (
                  <div
                    style={{
                      maxWidth: '460px',
                      margin: '0 auto 1.5rem',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%)',
                      border: '2px dashed #f59e0b',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      textAlign: 'center',
                      boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      CÓDIGO EXCLUSIVO DA SUA SALA
                    </div>
                    <div
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: '#ffffff',
                        letterSpacing: '0.12em',
                        fontFamily: 'monospace',
                        margin: '0.4rem 0'
                      }}
                    >
                      {createdRoomCode}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '1rem' }}>
                      Quem inserir este código jogará as mesmas 5 questões para tentar bater seu tempo e acertos!
                    </div>

                    <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => {
                          sound.playClick();
                          navigator.clipboard.writeText(createdRoomCode);
                          setCopiedCodeSuccess(true);
                          setTimeout(() => setCopiedCodeSuccess(false), 2500);
                        }}
                        style={{
                          background: copiedCodeSuccess ? 'rgba(34, 197, 94, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                          border: copiedCodeSuccess ? '1.5px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.25)',
                          color: copiedCodeSuccess ? '#86efac' : '#ffffff',
                          padding: '0.55rem 1rem',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem'
                        }}
                      >
                        {copiedCodeSuccess ? <CheckCircle2 size={16} color="#22c55e" /> : <Copy size={16} />}
                        <span>{copiedCodeSuccess ? 'Código Copiado!' : 'Copiar Código'}</span>
                      </button>

                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          `🔥 [DESAFIO PMPE 2026] Te desafio para um combate tático 1v1 no simulador Missão PMPE! 🎯 Minha pontuação foi ${combatFinishedResult.score}/5 em ${combatFinishedResult.timeSeconds}s. Entre no app e digite o código de sala: *${createdRoomCode}* para tentar me vencer!`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => sound.playClick()}
                        style={{
                          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.55rem 1.1rem',
                          borderRadius: '10px',
                          fontSize: '0.8rem',
                          fontWeight: 900,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          textDecoration: 'none',
                          boxShadow: '0 0 15px rgba(37, 211, 102, 0.35)'
                        }}
                      >
                        <Share2 size={16} />
                        <span>Desafiar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveDuelToPlay(null);
                    setCombatFinishedResult(null);
                    setCreatedRoomCode(null);
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
              <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
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
                  onClick={() => setActiveTab('sala')}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px 10px 0 0',
                    background: activeTab === 'sala' ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'sala' ? '3px solid #22c55e' : '3px solid transparent',
                    color: activeTab === 'sala' ? '#86efac' : '#94a3b8',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <Sparkles size={15} color={activeTab === 'sala' ? '#22c55e' : '#94a3b8'} />
                  <span>🎯 Sala com Código 1v1</span>
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
                  + Desafiar da Lista
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
              ) : activeTab === 'sala' ? (
                /* ABA SALA DE COMBATE COM CÓDIGO (MULTIPLAYER KVDB) */
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  {/* CARD 1: CRIAR SALA */}
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                      border: '1.5px solid rgba(245, 158, 11, 0.4)',
                      borderRadius: '16px',
                      padding: '1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div style={{ background: '#f59e0b', color: '#000', borderRadius: '8px', padding: '0.35rem', display: 'flex' }}>
                          <Sparkles size={18} />
                        </div>
                        <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.15rem', fontWeight: 900 }}>
                          Criar Sala Tática
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.45, margin: 0 }}>
                        Inicie uma rodada rápida de 5 questões da AOCP. Ao concluir, o sistema gera um código de 4 dígitos (Ex: <strong>PE-9421</strong>) para você desafiar amigos no WhatsApp!
                      </p>
                    </div>

                    <button
                      onClick={handleStartRoomCreation}
                      style={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: '#060b17',
                        border: 'none',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '12px',
                        fontWeight: 900,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 20px rgba(245, 158, 11, 0.35)'
                      }}
                    >
                      <Zap size={18} />
                      <span>Gerar Sala & Jogar 5 Questões</span>
                    </button>
                  </div>

                  {/* CARD 2: ENTRAR EM SALA COM CÓDIGO */}
                  <div
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
                      border: '1.5px solid rgba(34, 197, 94, 0.4)',
                      borderRadius: '16px',
                      padding: '1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div style={{ background: '#22c55e', color: '#000', borderRadius: '8px', padding: '0.35rem', display: 'flex' }}>
                          <Swords size={18} />
                        </div>
                        <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.15rem', fontWeight: 900 }}>
                          Entrar com Código
                        </h3>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.45, margin: '0 0 0.85rem 0' }}>
                        Recebeu o código de outro recruta pelo WhatsApp? Insira o código da sala para combater contra a pontuação e tempo dele!
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#86efac', textTransform: 'uppercase' }}>
                          CÓDIGO DA SALA (EX: PE-4821)
                        </label>
                        <input
                          type="text"
                          placeholder="PE-XXXX"
                          value={roomCodeInput}
                          maxLength={7}
                          onChange={(e) => setRoomCodeInput(e.target.value.toUpperCase())}
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1.5px solid rgba(34, 197, 94, 0.4)',
                            borderRadius: '10px',
                            padding: '0.65rem 0.85rem',
                            color: '#ffffff',
                            fontFamily: 'monospace',
                            fontSize: '1.15rem',
                            fontWeight: 900,
                            letterSpacing: '0.1em',
                            textAlign: 'center',
                            outline: 'none'
                          }}
                        />
                        {roomSearchError && (
                          <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700, marginTop: '0.2rem' }}>
                            ⚠️ {roomSearchError}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleJoinRoomDuel}
                      disabled={!roomCodeInput.trim() || isRoomSearching}
                      style={{
                        background: roomCodeInput.trim() && !isRoomSearching
                          ? 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
                          : 'rgba(255, 255, 255, 0.1)',
                        color: roomCodeInput.trim() && !isRoomSearching ? '#ffffff' : '#94a3b8',
                        border: 'none',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '12px',
                        fontWeight: 900,
                        fontSize: '0.88rem',
                        cursor: roomCodeInput.trim() && !isRoomSearching ? 'pointer' : 'not-allowed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: roomCodeInput.trim() ? '0 0 20px rgba(34, 197, 94, 0.35)' : 'none'
                      }}
                    >
                      {isRoomSearching ? <RefreshCw size={18} /> : <Swords size={18} />}
                      <span>{isRoomSearching ? 'Conectando...' : 'Entrar no Combate ⚔️'}</span>
                    </button>
                  </div>
                </div>
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
