import React, { useState, useEffect, useCallback } from 'react';
import {
  Trophy,
  Crown,
  Sparkles,
  Users,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  DollarSign,
  UserPlus,
  UserCheck,
  UserX,
  Target,
  ShieldCheck,
  Activity,
  Info,
  Clock,
  Award,
  Flame,
  Moon
} from 'lucide-react';
import {
  fetchWeeklyLeaderboard,
  saveCompetitionConfig,
  toggleSoldierEnrollment,
  getMilitaryWeekInfo,
  fetchHallOfFame,
  archivePastChampion,
  type LeaderboardEntry,
  type CompetitionConfig,
  type MilitaryWeekInfo,
  type PastWeekChampion
} from '../utils/competitionManager';
import { fetchRegistryFromCloud, isMasterUser, type UserAccessRecord } from '../utils/authManager';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface PelotaoCompetitionViewProps {
  onBackToApp: () => void;
  currentUser?: string;
}

export const PelotaoCompetitionView: React.FC<PelotaoCompetitionViewProps> = ({
  onBackToApp,
  currentUser = ''
}) => {
  const isCommander = isMasterUser(currentUser);

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [config, setConfig] = useState<CompetitionConfig | null>(null);
  const [weekInfo, setWeekInfo] = useState<MilitaryWeekInfo>(() => getMilitaryWeekInfo());
  const [registeredUsers, setRegisteredUsers] = useState<Record<string, UserAccessRecord>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  // Aba ativa: 'ranking' | 'gestao' | 'halldafama'
  const [activeTab, setActiveTab] = useState<'ranking' | 'gestao' | 'halldafama'>('ranking');
  const [hallOfFame, setHallOfFame] = useState<PastWeekChampion[]>([]);

  // Estados de edição de premiação pelo Comandante
  const [prizeText, setPrizeText] = useState('R$ 20,00');
  const [prizeDesc, setPrizeDesc] = useState('PIX ao 1º colocado do ranking no fechamento de Sábado às 23:59!');
  const [isSavingPrize, setIsSavingPrize] = useState(false);

  // Carregamento de dados (tempo real)
  const loadData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    else setIsRefreshing(true);

    try {
      const [boardData, registry, hall] = await Promise.all([
        fetchWeeklyLeaderboard(),
        fetchRegistryFromCloud(),
        fetchHallOfFame()
      ]);

      setLeaderboard(boardData.entries);
      setConfig(boardData.config);
      setWeekInfo(boardData.weekInfo);
      setRegisteredUsers(registry);
      setHallOfFame(hall);

      if (boardData.config) {
        setPrizeText(boardData.config.prizeText || 'R$ 20,00');
        setPrizeDesc(boardData.config.prizeDescription || '');
      }
    } catch (err) {
      console.warn('Erro ao carregar dados da competição:', err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Atualização em tempo real a cada 10 segundos
    const timer = setInterval(() => {
      loadData(true);
    }, 10000);

    return () => clearInterval(timer);
  }, [loadData]);

  const showToast = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 3800);
  };

  // Salvar premiação
  const handleSavePrize = async () => {
    if (!isCommander) return;
    setIsSavingPrize(true);
    sound.playLevelUp();

    const success = await saveCompetitionConfig(
      {
        prizeText: prizeText.trim(),
        prizeDescription: prizeDesc.trim()
      },
      currentUser
    );

    setIsSavingPrize(false);
    if (success) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.35 },
        colors: ['#fbbf24', '#f59e0b', '#10b981', '#3b82f6']
      });
      showToast(`🏆 Premiação atualizada com sucesso para ${prizeText.trim()}!`);
      loadData(true);
    } else {
      showToast('❌ Erro ao salvar premiação na nuvem.');
    }
  };

  // Alternar inscrição do soldado
  const handleToggleSoldier = async (soldierName: string, currentlyEnrolled: boolean) => {
    if (!isCommander) return;
    sound.playClick();

    const updated = await toggleSoldierEnrollment(soldierName, !currentlyEnrolled, currentUser);
    if (updated) {
      showToast(
        !currentlyEnrolled
          ? `✅ Soldado "${soldierName}" INSCRITO na competição semanal!`
          : `⚠️ Soldado "${soldierName}" REMOVIDO da competição.`
      );
      loadData(true);
    }
  };

  // Inscrever todos os soldados
  const handleEnrollAll = async () => {
    if (!isCommander) return;
    sound.playMilitaryAchievement();

    const allKeys = Object.keys(registeredUsers).filter(
      (k) => !isMasterUser(k) && registeredUsers[k].status === 'approved'
    );

    const updated = await saveCompetitionConfig(
      {
        enrolledSoldiers: allKeys
      },
      currentUser
    );

    if (updated) {
      showToast(`🎖️ Todos os ${allKeys.length} soldados foram inscritos na competição!`);
      loadData(true);
    }
  };

  const enrolledCount = config?.enrolledSoldiers?.length || 0;
  const currentLeader = leaderboard.length > 0 ? leaderboard[0] : null;

  // Imortalizar Campeão no Hall da Fama (Ação do Comandante)
  const handleArchiveChampion = async () => {
    if (!isCommander || !currentLeader) return;
    sound.playMilitaryAchievement();
    const ok = await archivePastChampion(
      currentLeader.displayName,
      weekInfo.weekId,
      `${weekInfo.startDateFormatted} - ${weekInfo.endDateFormatted}`,
      currentLeader.weekScore,
      currentLeader.weekAccuracy,
      config?.prizeText || 'R$ 20,00',
      'PIX transferido pelo Comandante Gean com honras militares'
    );
    if (ok) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.3 } });
      showToast(`🏛️ Campeão ${currentLeader.displayName} imortalizado no Hall da Fama!`);
      loadData(true);
    } else {
      showToast('❌ Erro ao arquivar campeão.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, #0d1b2a 0%, #060b17 60%, #030712 100%)',
        color: '#f8fafc',
        paddingBottom: '5rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      {/* ================= BARRA SUPERIOR DE COMANDO FIXA ================= */}
      <header
        style={{
          background: 'linear-gradient(180deg, rgba(10, 17, 32, 0.98) 0%, rgba(6, 11, 23, 0.98) 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.4)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.7)'
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '1rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Lado Esquerdo: Botão Voltar & Identificação Militar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                sound.playClick();
                onBackToApp();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              title="Voltar ao Treinamento / Menu Principal"
            >
              <ArrowLeft size={18} />
              <span>Voltar ao Treinamento</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(245, 158, 11, 0.45)',
                  color: '#ffffff'
                }}
              >
                <Trophy size={24} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      letterSpacing: '0.03em'
                    }}
                  >
                    COMPETIÇÃO SEMANAL DO PELOTÃO
                  </h1>
                  {isCommander && (
                    <span
                      style={{
                        background: 'rgba(245, 158, 11, 0.2)',
                        border: '1px solid #f59e0b',
                        color: '#fbbf24',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 900,
                        letterSpacing: '0.05em'
                      }}
                    >
                      COMANDO EXCLUSIVO GEAN
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#93c5fd',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginTop: '0.15rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <span>📅 {weekInfo.startDateFormatted} até {weekInfo.endDateFormatted}</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
                  <span
                    style={{
                      color: weekInfo.isSunday ? '#fbbf24' : '#4ade80',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Activity size={13} />
                    {weekInfo.statusLabel}
                  </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
                  <span style={{ color: '#cbd5e1' }}>
                    👥 {enrolledCount} {enrolledCount === 1 ? 'soldado participante' : 'soldados participantes'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Sincronização ao Vivo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={() => {
                sound.playClick();
                loadData(true);
              }}
              disabled={isRefreshing}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.15rem',
                borderRadius: '12px',
                background: 'rgba(30, 58, 138, 0.35)',
                border: '1px solid rgba(59, 130, 246, 0.45)',
                color: '#93c5fd',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Atualizar dados em tempo real agora"
            >
              <RefreshCw size={15} className={isRefreshing ? 'animate-spin' : ''} />
              <span>{isRefreshing ? 'Sincronizando...' : 'Ao Vivo (10s)'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= CONTEÚDO PRINCIPAL (TELA COMPLETA) ================= */}
      <main
        style={{
          maxWidth: '1240px',
          margin: '1.5rem auto 0',
          padding: '0 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}
      >
        {/* FEEDBACK TOAST FLUTUANTE */}
        {actionSuccessMsg && (
          <div
            style={{
              background: 'linear-gradient(90deg, #15803d, #16a34a)',
              color: '#ffffff',
              padding: '0.85rem 1.4rem',
              borderRadius: '14px',
              fontSize: '0.92rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 6px 20px rgba(34, 197, 94, 0.35)',
              animation: 'slideDown 0.2s ease'
            }}
          >
            <CheckCircle2 size={20} />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* ================= CARD IMPONENTE DE PREMIAÇÃO OFICIAL ================= */}
        <div
          style={{
            padding: '1.25rem 1.6rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(30, 58, 138, 0.25) 50%, rgba(10, 17, 32, 0.95) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.55)',
            boxShadow: '0 0 35px rgba(245, 158, 11, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          {/* Lado Esquerdo: Valor da Premiação */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '62px',
                height: '62px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #d97706, #fbbf24)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(251, 191, 36, 0.6)',
                color: '#060b17',
                flexShrink: 0
              }}
            >
              <Crown size={34} />
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  color: '#fbbf24',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Premiação Oficial do Comandante Gean
              </div>
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#fef08a',
                  textShadow: '0 0 18px rgba(250, 204, 21, 0.55)',
                  lineHeight: 1.15
                }}
              >
                {config?.prizeText || 'R$ 20,00'}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                {config?.prizeDescription || 'PIX ao 1º colocado do ranking no fechamento de Sábado às 23:59!'}
              </div>
            </div>
          </div>

          {/* Lado Direito: Líder da Semana & Ação Rápida */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {currentLeader && currentLeader.weekScore > 0 ? (
              <div
                style={{
                  background: 'rgba(6, 11, 23, 0.85)',
                  border: '1px solid rgba(251, 191, 36, 0.45)',
                  padding: '0.85rem 1.35rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)'
                }}
              >
                <div style={{ fontSize: '2.2rem' }}>🥇</div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 800, letterSpacing: '0.05em' }}>
                    ATUAL 1º LUGAR
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#f8fafc' }}>
                    {currentLeader.displayName}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#4ade80', fontWeight: 800 }}>
                    {currentLeader.weekScore} acertos ({currentLeader.weekAccuracy}%)
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  background: 'rgba(6, 11, 23, 0.7)',
                  border: '1px dashed rgba(255, 255, 255, 0.2)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '14px',
                  fontSize: '0.84rem',
                  color: '#94a3b8'
                }}
              >
                Disputa aberta! O 1º acerto assume a liderança.
              </div>
            )}

            {isCommander && (
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab(activeTab === 'gestao' ? 'ranking' : 'gestao');
                }}
                style={{
                  background: activeTab === 'gestao' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid #f59e0b',
                  color: '#fbbf24',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '14px',
                  fontSize: '0.84rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 0.2s'
                }}
              >
                <DollarSign size={16} />
                <span>{activeTab === 'gestao' ? 'Ver Ranking' : 'Editar Prêmio / Soldados'}</span>
              </button>
            )}
          </div>
        </div>

        {/* ================= ALERTA DE DOMINGO (REGRA OPERACIONAL) ================= */}
        {weekInfo.isSunday && (
          <div
            style={{
              padding: '1rem 1.4rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.16) 0%, rgba(180, 83, 9, 0.12) 100%)',
              border: '1px solid rgba(234, 179, 8, 0.5)',
              color: '#fef08a',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.88rem',
              boxShadow: '0 0 20px rgba(234, 179, 8, 0.15)'
            }}
          >
            <AlertTriangle size={26} color="#fbbf24" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '0.98rem' }}>🏖️ DOMINGO: DIA DE DESCANSO & REUNIÃO DO PELOTÃO</strong>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.25rem', lineHeight: 1.45 }}>
                Conforme determinação do Comandante Gean, as atividades no domingo não somam pontos no ranking semanal.
                As colocações foram consolidadas no sábado às 23:59. A nova disputa recomeça segunda-feira às 00:00!
              </div>
            </div>
          </div>
        )}

        {/* ================= BANNER OPERACIONAL: RONDA NOTURNA (2X PONTOS) ================= */}
        <div
          style={{
            padding: '1rem 1.4rem',
            borderRadius: '16px',
            background: weekInfo.isRondaNoturna
              ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.28) 0%, rgba(147, 51, 234, 0.28) 50%, rgba(15, 23, 42, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(15, 23, 42, 0.75) 100%)',
            border: weekInfo.isRondaNoturna
              ? '2px solid #ef4444'
              : '1px solid rgba(147, 197, 253, 0.2)',
            boxShadow: weekInfo.isRondaNoturna ? '0 0 30px rgba(239, 68, 68, 0.35)' : 'none',
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
                background: weekInfo.isRondaNoturna
                  ? 'linear-gradient(135deg, #dc2626, #9333ea)'
                  : 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                flexShrink: 0
              }}
            >
              {weekInfo.isRondaNoturna ? '🚨' : '🌙'}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontWeight: 900,
                    color: weekInfo.isRondaNoturna ? '#f87171' : '#93c5fd',
                    fontSize: '0.92rem',
                    letterSpacing: '0.04em'
                  }}
                >
                  {weekInfo.isRondaNoturna ? '🚨 RONDA NOTURNA EM ANDAMENTO' : '🌙 RONDA NOTURNA OPERACIONAL'}
                </span>
                <span
                  style={{
                    background: weekInfo.isRondaNoturna ? '#dc2626' : 'rgba(59, 130, 246, 0.25)',
                    border: weekInfo.isRondaNoturna ? '1px solid #f87171' : '1px solid rgba(59, 130, 246, 0.4)',
                    color: '#ffffff',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  2X PONTOS
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                {weekInfo.isRondaNoturna
                  ? 'Todas as questões corretas agora valem o DOBRO de pontos (2 pts) na competição semanal! Encerra às 23:59.'
                  : 'De Segunda a Sábado, das 21:00 às 23:59, todas as questões acertadas contam pontos EM DOBRO (2x) no ranking!'}
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: '0.8rem',
              color: weekInfo.isRondaNoturna ? '#fca5a5' : '#94a3b8',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Clock size={15} />
            <span>Janela tática: 21:00 às 23:59</span>
          </div>
        </div>

        {/* ================= ABAS UNIVERSAIS DE NAVEGAÇÃO ================= */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '0.5rem',
            overflowX: 'auto'
          }}
        >
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('ranking');
            }}
            style={{
              padding: '0.75rem 1.4rem',
              fontSize: '0.92rem',
              fontWeight: 900,
              color: activeTab === 'ranking' ? '#fbbf24' : '#94a3b8',
              background: activeTab === 'ranking' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'ranking' ? '3px solid #f59e0b' : '3px solid transparent',
              borderRadius: '10px 10px 0 0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            <Trophy size={18} />
            <span>Ranking ao Vivo (Segunda a Sábado)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('halldafama');
            }}
            style={{
              padding: '0.75rem 1.4rem',
              fontSize: '0.92rem',
              fontWeight: 900,
              color: activeTab === 'halldafama' ? '#fbbf24' : '#94a3b8',
              background: activeTab === 'halldafama' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'halldafama' ? '3px solid #f59e0b' : '3px solid transparent',
              borderRadius: '10px 10px 0 0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            <Award size={18} />
            <span>Hall da Fama ({hallOfFame.length})</span>
          </button>

          {isCommander && (
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('gestao');
              }}
              style={{
                padding: '0.75rem 1.4rem',
                fontSize: '0.92rem',
                fontWeight: 900,
                color: activeTab === 'gestao' ? '#fbbf24' : '#94a3b8',
                background: activeTab === 'gestao' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'gestao' ? '3px solid #f59e0b' : '3px solid transparent',
                borderRadius: '10px 10px 0 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              <ShieldCheck size={18} />
              <span>Gestão de Participantes & Premiação</span>
            </button>
          )}
        </div>

        {/* ================= ABA 1: RANKING AO VIVO (TELA ESPAÇOSA) ================= */}
        {activeTab === 'ranking' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
                <RefreshCw size={36} className="animate-spin" style={{ margin: '0 auto 1.25rem', color: '#fbbf24' }} />
                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>Sincronizando telemetria em tempo real do pelotão...</div>
              </div>
            ) : leaderboard.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '4rem 2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '20px',
                  border: '1px dashed rgba(255, 255, 255, 0.15)'
                }}
              >
                <Users size={52} style={{ color: '#64748b', margin: '0 auto 1.25rem' }} />
                <h3 style={{ color: '#ffffff', margin: 0, fontSize: '1.35rem' }}>Nenhum soldado pontuou nesta semana ainda</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', maxWidth: '540px', margin: '0.75rem auto 1.5rem', lineHeight: 1.5 }}>
                  Assim que os soldados responderem questões em qualquer modo do aplicativo, suas pontuações e o status
                  ao vivo aparecerão aqui automaticamente.
                </p>
                {isCommander && (
                  <button
                    onClick={() => setActiveTab('gestao')}
                    style={{
                      background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.6rem',
                      borderRadius: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Gerenciar Soldados Inscritos na Competição
                  </button>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {leaderboard.map((soldier) => {
                  const is1st = soldier.rank === 1;
                  const is2nd = soldier.rank === 2;
                  const is3rd = soldier.rank === 3;

                  const borderStyle = is1st
                    ? '2px solid rgba(251, 191, 36, 0.75)'
                    : is2nd
                    ? '1.5px solid rgba(203, 213, 225, 0.5)'
                    : is3rd
                    ? '1.5px solid rgba(217, 119, 6, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.1)';

                  const bgStyle = is1st
                    ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(10, 17, 32, 0.98) 100%)'
                    : is2nd
                    ? 'linear-gradient(135deg, rgba(148, 163, 184, 0.12) 0%, rgba(10, 17, 32, 0.98) 100%)'
                    : is3rd
                    ? 'linear-gradient(135deg, rgba(180, 83, 9, 0.12) 0%, rgba(10, 17, 32, 0.98) 100%)'
                    : 'rgba(10, 17, 32, 0.9)';

                  return (
                    <div
                      key={soldier.soldierKey}
                      style={{
                        background: bgStyle,
                        border: borderStyle,
                        borderRadius: '20px',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        boxShadow: is1st ? '0 0 30px rgba(245, 158, 11, 0.2)' : '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'all 0.2s'
                      }}
                    >
                      {/* LADO ESQUERDO: POSIÇÃO & IDENTIFICAÇÃO DO SOLDADO */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: '280px', flex: '1 1 auto' }}>
                        <div
                          style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '16px',
                            background: is1st
                              ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                              : is2nd
                              ? 'linear-gradient(135deg, #94a3b8, #64748b)'
                              : is3rd
                              ? 'linear-gradient(135deg, #d97706, #92400e)'
                              : 'rgba(255, 255, 255, 0.08)',
                            color: is1st || is2nd || is3rd ? '#ffffff' : '#94a3b8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: is1st || is2nd || is3rd ? '1.5rem' : '1.15rem',
                            fontWeight: 900,
                            boxShadow: is1st ? '0 0 20px rgba(245, 158, 11, 0.5)' : 'none',
                            flexShrink: 0
                          }}
                        >
                          {is1st ? '🥇' : is2nd ? '🥈' : is3rd ? '🥉' : `${soldier.rank}º`}
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                            <span
                              style={{
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                color: is1st ? '#fef08a' : '#ffffff'
                              }}
                            >
                              {soldier.displayName}
                            </span>
                            {is1st && (
                              <span
                                style={{
                                  background: 'rgba(245, 158, 11, 0.25)',
                                  color: '#fbbf24',
                                  border: '1px solid #f59e0b',
                                  padding: '0.15rem 0.55rem',
                                  borderRadius: '6px',
                                  fontSize: '0.72rem',
                                  fontWeight: 900
                                }}
                              >
                                LÍDER DA SEMANA
                              </span>
                            )}
                          </div>

                          {/* STATUS DE ACESSO HOJE & DIAS ATIVOS */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                              marginTop: '0.35rem',
                              flexWrap: 'wrap'
                            }}
                          >
                            {soldier.hasAccessedToday ? (
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  background: 'rgba(34, 197, 94, 0.25)',
                                  border: '1px solid rgba(34, 197, 94, 0.55)',
                                  color: '#4ade80',
                                  padding: '0.18rem 0.65rem',
                                  borderRadius: '8px',
                                  fontSize: '0.76rem',
                                  fontWeight: 900,
                                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)'
                                }}
                              >
                                <span
                                  style={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '50%',
                                    background: '#22c55e',
                                    boxShadow: '0 0 8px #22c55e'
                                  }}
                                />
                                ACESSOU HOJE!
                              </span>
                            ) : (
                              <span
                                style={{
                                  background: 'rgba(148, 163, 184, 0.12)',
                                  color: '#94a3b8',
                                  padding: '0.18rem 0.65rem',
                                  borderRadius: '8px',
                                  fontSize: '0.76rem',
                                  fontWeight: 700
                                }}
                              >
                                Sem acesso hoje
                              </span>
                            )}

                            <span style={{ fontSize: '0.76rem', color: '#64748b' }}>•</span>
                            <span style={{ fontSize: '0.78rem', color: '#93c5fd', fontWeight: 700 }}>
                              📅 {soldier.daysActiveCount} {soldier.daysActiveCount === 1 ? 'dia ativo' : 'dias ativos'} na semana
                            </span>
                            {soldier.weekMinutesOnline > 0 && (
                              <>
                                <span style={{ fontSize: '0.76rem', color: '#64748b' }}>•</span>
                                <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                                  ⏱️ {Math.floor(soldier.weekMinutesOnline / 60)}h {Math.round(soldier.weekMinutesOnline % 60)}min
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* MEIO: QUESTÕES FEITAS HOJE (DESTAQUE PEDIDO PELO COMANDANTE) */}
                      <div
                        style={{
                          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(30, 58, 138, 0.3) 100%)',
                          border: '1.5px solid rgba(6, 182, 212, 0.55)',
                          padding: '0.65rem 1.4rem',
                          borderRadius: '16px',
                          textAlign: 'center',
                          minWidth: '160px',
                          boxShadow: '0 0 15px rgba(6, 182, 212, 0.15)'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', color: '#67e8f9', fontWeight: 900, letterSpacing: '0.04em' }}>
                          RESPONDIDAS HOJE
                        </div>
                        <div
                          style={{
                            fontSize: '1.75rem',
                            fontWeight: 900,
                            color: soldier.questionsToday > 0 ? '#67e8f9' : '#94a3b8',
                            lineHeight: 1.15
                          }}
                        >
                          {soldier.questionsToday || 0}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>questões resolvidas</div>
                      </div>

                      {/* LADO DIREITO: PONTOS DA SEMANA & ACUMULADO */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.5rem',
                          textAlign: 'right'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.74rem', color: '#fbbf24', fontWeight: 900, letterSpacing: '0.04em' }}>
                            PONTOS DA SEMANA
                          </div>
                          <div
                            style={{
                              fontSize: '2.1rem',
                              fontWeight: 900,
                              color: is1st ? '#fef08a' : '#ffffff',
                              lineHeight: 1.1
                            }}
                          >
                            {soldier.weekScore}{' '}
                            <span style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 800 }}>pts</span>
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#4ade80', fontWeight: 900 }}>
                            {soldier.weekAccuracy}% de acerto
                          </div>
                        </div>

                        <div
                          style={{
                            borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
                            paddingLeft: '1.25rem',
                            fontSize: '0.78rem',
                            color: '#94a3b8',
                            lineHeight: 1.6
                          }}
                        >
                          <div>
                            Total semana: <strong style={{ color: '#f8fafc' }}>{soldier.weekTotalAnswered}</strong>
                          </div>
                          <div>
                            Acertos: <strong style={{ color: '#4ade80' }}>{soldier.weekScore}</strong>
                          </div>
                          <div>
                            Erros: <strong style={{ color: '#f87171' }}>{soldier.weekWrongAnswers}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ================= ABA 2: GESTÃO PELO COMANDANTE (PREMIAÇÃO & PARTICIPANTES) ================= */}
        {activeTab === 'gestao' && isCommander && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* CONFIGURADOR DE PREMIAÇÃO */}
            <div
              style={{
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1.5px solid rgba(245, 158, 11, 0.45)',
                borderRadius: '20px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: '0 0 25px rgba(245, 158, 11, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <DollarSign size={26} color="#fbbf24" />
                <div>
                  <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.2rem', fontWeight: 900 }}>
                    Configurar Premiação da Semana
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                    Defina o valor e as regras do prêmio que o 1º colocado receberá no fechamento de sábado.
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#fbbf24', fontWeight: 900, marginBottom: '0.45rem' }}>
                    VALOR DO PRÊMIO (EXIBIDO EM DESTAQUE)
                  </label>
                  <input
                    type="text"
                    value={prizeText}
                    onChange={(e) => setPrizeText(e.target.value)}
                    placeholder="Ex: R$ 20,00"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(6, 11, 23, 0.95)',
                      border: '1.5px solid rgba(245, 158, 11, 0.6)',
                      color: '#fef08a',
                      fontSize: '1.25rem',
                      fontWeight: 900
                    }}
                  />
                  {/* PRESETS RÁPIDOS */}
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.65rem', flexWrap: 'wrap' }}>
                    {['R$ 10,00', 'R$ 20,00', 'R$ 30,00', 'R$ 50,00', 'R$ 100,00'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setPrizeText(val)}
                        style={{
                          background: prizeText === val ? '#d97706' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#93c5fd', fontWeight: 900, marginBottom: '0.45rem' }}>
                    INSTRUÇÕES / FORMA DE PAGAMENTO
                  </label>
                  <input
                    type="text"
                    value={prizeDesc}
                    onChange={(e) => setPrizeDesc(e.target.value)}
                    placeholder="Ex: Pagamento via PIX no Sábado às 23:59 para o 1º Lugar Geral!"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(6, 11, 23, 0.95)',
                      border: '1.5px solid rgba(59, 130, 246, 0.5)',
                      color: '#ffffff',
                      fontSize: '0.95rem'
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.85rem' }}>
                    <button
                      onClick={handleSavePrize}
                      disabled={isSavingPrize}
                      style={{
                        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                        color: '#060b17',
                        border: 'none',
                        padding: '0.75rem 1.6rem',
                        borderRadius: '12px',
                        fontWeight: 900,
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 20px rgba(245, 158, 11, 0.45)'
                      }}
                    >
                      <Sparkles size={18} />
                      <span>{isSavingPrize ? 'Salvando na Nuvem...' : 'Salvar Premiação Oficial'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GESTÃO DE SOLDADOS PARTICIPANTES */}
            <div
              style={{
                background: 'rgba(10, 17, 32, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '1.5rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.2rem', fontWeight: 900 }}>
                    Soldados Participantes da Competição
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                    Selecione quem entra na disputa semanal. Somente os soldados marcados pontuam e disputam o prêmio.
                  </div>
                </div>

                <button
                  onClick={handleEnrollAll}
                  style={{
                    background: 'rgba(34, 197, 94, 0.18)',
                    border: '1px solid rgba(34, 197, 94, 0.5)',
                    color: '#4ade80',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '12px',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <UserPlus size={16} />
                  <span>Inscrever Todos os Soldados</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                {Object.entries(registeredUsers)
                  .filter(([key]) => !isMasterUser(key))
                  .map(([key, user]) => {
                    const isEnrolled = (config?.enrolledSoldiers || []).includes(key);

                    return (
                      <div
                        key={key}
                        style={{
                          background: isEnrolled ? 'rgba(34, 197, 94, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                          border: isEnrolled
                            ? '1.5px solid rgba(34, 197, 94, 0.45)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          padding: '1.1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                            {user.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                            Status:{' '}
                            <span style={{ color: user.status === 'approved' ? '#4ade80' : '#f87171', fontWeight: 800 }}>
                              {user.status === 'approved' ? 'Liberado' : 'Pendente'}
                            </span>
                            {user.questionsTodayCount ? ` • 🎯 ${user.questionsTodayCount} hoje` : ''}
                          </div>
                        </div>

                        <button
                          onClick={() => handleToggleSoldier(user.name, isEnrolled)}
                          style={{
                            background: isEnrolled ? 'rgba(239, 68, 68, 0.18)' : 'rgba(34, 197, 94, 0.22)',
                            border: isEnrolled
                              ? '1px solid rgba(239, 68, 68, 0.5)'
                              : '1px solid rgba(34, 197, 94, 0.5)',
                            color: isEnrolled ? '#f87171' : '#4ade80',
                            padding: '0.55rem 1rem',
                            borderRadius: '10px',
                            fontSize: '0.82rem',
                            fontWeight: 900,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.2s'
                          }}
                        >
                          {isEnrolled ? (
                            <>
                              <UserX size={15} />
                              <span>Remover</span>
                            </>
                          ) : (
                            <>
                              <UserCheck size={15} />
                              <span>Inscrever</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* ================= ABA 3: HALL DA FAMA & GALERIA DOS CAMPEÕES ================= */}
        {activeTab === 'halldafama' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Banner de Honra */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(30, 58, 138, 0.25) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #d97706, #fbbf24)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#060b17',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
                  flexShrink: 0
                }}
              >
                <Crown size={32} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#fef08a' }}>
                  GALERIA DE HONRA & CAMPEÕES SEMANAIS
                </h2>
                <p style={{ margin: '0.35rem 0 0', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  O mural permanente dos soldados de elite que alcançaram o topo do pelotão, receberam o prêmio oficial
                  do Comandante Gean e gravaram seus nomes na história militar da Missão PMPE 2026.
                </p>
              </div>
            </div>

            {/* Painel de Arquivamento pelo Comandante */}
            {isCommander && currentLeader && currentLeader.weekScore > 0 && (
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  background: 'rgba(30, 58, 138, 0.25)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#93c5fd', textTransform: 'uppercase' }}>
                    Comando Central • Ação de Condecoração
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                    Líder Atual:{' '}
                    <strong style={{ color: '#fbbf24' }}>{currentLeader.displayName}</strong> ({currentLeader.weekScore} pts • {currentLeader.weekAccuracy}%)
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                    Premiação configurada: {config?.prizeText || 'R$ 20,00'}
                  </div>
                </div>

                <button
                  onClick={handleArchiveChampion}
                  style={{
                    background: 'linear-gradient(135deg, #d97706, #f59e0b)',
                    color: '#060b17',
                    border: 'none',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '12px',
                    fontWeight: 900,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                    transition: 'all 0.2s'
                  }}
                >
                  <Award size={18} />
                  <span>Imortalizar no Hall da Fama</span>
                </button>
              </div>
            )}

            {/* Lista dos Campeões */}
            {hallOfFame.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '4rem 2rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '20px',
                  border: '1px dashed rgba(255, 255, 255, 0.15)'
                }}
              >
                <Award size={48} style={{ color: '#f59e0b', margin: '0 auto 1.25rem', opacity: 0.8 }} />
                <h3 style={{ color: '#ffffff', margin: 0, fontSize: '1.25rem' }}>
                  A Galeria de Honra aguarda o primeiro campeão
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '520px', margin: '0.75rem auto 0', lineHeight: 1.5 }}>
                  Ao final de cada ciclo semanal no Sábado às 23:59, o soldado em 1º lugar no ranking receberá o prêmio oficial
                  e será registrado aqui permanentemente com honras militares!
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {hallOfFame.map((champ, index) => (
                  <div
                    key={champ.id || `${champ.weekId}-${index}`}
                    style={{
                      padding: '1.4rem',
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-15px',
                        right: '-15px',
                        width: '70px',
                        height: '70px',
                        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
                        pointerEvents: 'none'
                      }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 900,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          background: 'rgba(245, 158, 11, 0.2)',
                          color: '#fbbf24',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          letterSpacing: '0.04em'
                        }}
                      >
                        🏆 CAMPEÃO SEMANAL
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        📅 {champ.weekLabel || champ.weekId}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          color: '#060b17',
                          fontWeight: 900
                        }}
                      >
                        🥇
                      </div>
                      <div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#f8fafc' }}>
                          {champ.winnerName}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#4ade80', fontWeight: 800 }}>
                          🎯 {champ.score} pontos ({champ.accuracy}%)
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '0.75rem',
                        borderRadius: '12px',
                        background: 'rgba(6, 11, 23, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        fontSize: '0.82rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#94a3b8' }}>Premiação Concedida:</span>
                        <strong style={{ color: '#fef08a' }}>{champ.prizeText}</strong>
                      </div>
                      <div style={{ color: '#cbd5e1', fontSize: '0.78rem', fontStyle: 'italic' }}>
                        "PIX transferido pelo Comandante Gean com honras militares"
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= RODAPÉ DA TELA ================= */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1.25rem',
            background: 'rgba(6, 11, 23, 0.75)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
            color: '#94a3b8',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={16} color="#38bdf8" />
            <span>
              Regra Oficial: 1 acerto = 1 ponto (Segunda a Sábado). Domingo descanso. Ranking fecha aos sábados às 23:59.
            </span>
          </div>

          <div style={{ color: '#fbbf24', fontWeight: 900 }}>
            MISSÃO PMPE 2026 • COMANDO CENTRAL
          </div>
        </div>
      </main>
    </div>
  );
};
