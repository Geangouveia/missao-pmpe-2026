import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Trophy,
  Medal,
  Flame,
  Award,
  Crown,
  Sparkles,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  AlertTriangle,
  RefreshCw,
  X,
  DollarSign,
  UserPlus,
  UserCheck,
  UserX,
  Target,
  ShieldCheck,
  Activity,
  Zap,
  Info
} from 'lucide-react';
import {
  fetchWeeklyLeaderboard,
  saveCompetitionConfig,
  toggleSoldierEnrollment,
  getMilitaryWeekInfo,
  type LeaderboardEntry,
  type CompetitionConfig,
  type MilitaryWeekInfo
} from '../utils/competitionManager';
import { fetchRegistryFromCloud, isMasterUser, type UserAccessRecord } from '../utils/authManager';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface PelotaoCompetitionModalProps {
  onClose: () => void;
  currentUser?: string;
}

export const PelotaoCompetitionModal: React.FC<PelotaoCompetitionModalProps> = ({
  onClose,
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

  // Aba ativa para o Comandante: 'ranking' ou 'gestao'
  const [activeTab, setActiveTab] = useState<'ranking' | 'gestao'>('ranking');

  // Estados de edição de premiação pelo Comandante
  const [prizeText, setPrizeText] = useState('R$ 20,00');
  const [prizeDesc, setPrizeDesc] = useState('PIX ao 1º colocado do ranking no fechamento de Sábado às 23:59!');
  const [isSavingPrize, setIsSavingPrize] = useState(false);

  // Busca inicial e periódica (tempo real)
  const loadData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    else setIsRefreshing(true);

    try {
      const [boardData, registry] = await Promise.all([
        fetchWeeklyLeaderboard(),
        fetchRegistryFromCloud()
      ]);

      setLeaderboard(boardData.entries);
      setConfig(boardData.config);
      setWeekInfo(boardData.weekInfo);
      setRegisteredUsers(registry);

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

    // Atualização em tempo real a cada 10 segundos enquanto a tela estiver aberta
    const timer = setInterval(() => {
      loadData(true);
    }, 10000);

    return () => clearInterval(timer);
  }, [loadData]);

  // Bloqueio de scroll no background
  useEffect(() => {
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = origOverflow;
    };
  }, []);

  const showToast = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 3500);
  };

  // Salvar nova premiação
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
        particleCount: 80,
        spread: 60,
        origin: { y: 0.4 },
        colors: ['#fbbf24', '#f59e0b', '#10b981', '#3b82f6']
      });
      showToast(`🏆 Premiação atualizada com sucesso para ${prizeText.trim()}!`);
      loadData(true);
    } else {
      showToast('❌ Erro ao salvar premiação na nuvem.');
    }
  };

  // Alternar inscrição do soldado na competição
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

  // Inscrever todos os soldados de uma só vez
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

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.92)',
        backdropFilter: 'blur(10px)',
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
          maxWidth: '1080px',
          maxHeight: '92vh',
          background: 'linear-gradient(180deg, #0a1120 0%, #060b17 100%)',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO DO MODAL */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(29, 78, 216, 0.25) 0%, rgba(10, 17, 32, 0.9) 100%)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
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
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(245, 158, 11, 0.5)',
                color: '#ffffff'
              }}
            >
              <Trophy size={26} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2
                  style={{
                    margin: 0,
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  COMPETIÇÃO SEMANAL DO PELOTÃO
                </h2>
                {isCommander && (
                  <span
                    style={{
                      background: 'rgba(245, 158, 11, 0.2)',
                      border: '1px solid #f59e0b',
                      color: '#fbbf24',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '8px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.05em'
                    }}
                  >
                    COMANDO EXCLUSIVO
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: '#93c5fd',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginTop: '0.2rem',
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
                  👥 {enrolledCount} {enrolledCount === 1 ? 'soldado inscrito' : 'soldados inscritos'}
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={() => loadData(true)}
              disabled={isRefreshing}
              style={{
                background: 'rgba(30, 58, 138, 0.35)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                color: '#93c5fd',
                padding: '0.5rem 0.85rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s'
              }}
              title="Atualizar dados em tempo real agora"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              <span>{isRefreshing ? 'Atualizando...' : 'Ao Vivo'}</span>
            </button>

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
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Fechar Painel de Competição"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* FEEDBACK TOAST NOTIFICATION */}
        {actionSuccessMsg && (
          <div
            style={{
              background: 'linear-gradient(90deg, #15803d, #16a34a)',
              color: '#ffffff',
              padding: '0.65rem 1.25rem',
              fontSize: '0.86rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              animation: 'slideDown 0.2s ease'
            }}
          >
            <CheckCircle2 size={18} />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* BANNER DE PREMIAÇÃO OFICIAL */}
        <div
          style={{
            margin: '1rem 1.5rem 0.5rem',
            padding: '1rem 1.4rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.08) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.45)',
            boxShadow: '0 0 25px rgba(245, 158, 11, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #d97706, #fbbf24)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
                color: '#060b17'
              }}
            >
              <Crown size={30} />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: '#fbbf24',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Premiação Oficial do Comandante Gean
              </div>
              <div
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 900,
                  color: '#fef08a',
                  textShadow: '0 0 15px rgba(250, 204, 21, 0.5)',
                  lineHeight: 1.15
                }}
              >
                {config?.prizeText || 'R$ 20,00'}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                {config?.prizeDescription || 'Prêmio em PIX para o 1º Colocado no Fechamento de Sábado!'}
              </div>
            </div>
          </div>

          {/* LÍDER ATUAL */}
          {currentLeader && currentLeader.weekScore > 0 && (
            <div
              style={{
                background: 'rgba(6, 11, 23, 0.75)',
                border: '1px solid rgba(251, 191, 36, 0.35)',
                padding: '0.65rem 1.1rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div style={{ fontSize: '1.8rem' }}>🥇</div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>LÍDER DA SEMANA</div>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: '#f8fafc' }}>
                  {currentLeader.displayName}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 800 }}>
                  {currentLeader.weekScore} acertos ({currentLeader.weekAccuracy}%)
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ALERTA DE DOMINGO (REGRA OPERACIONAL) */}
        {weekInfo.isSunday && (
          <div
            style={{
              margin: '0.4rem 1.5rem',
              padding: '0.75rem 1.1rem',
              borderRadius: '12px',
              background: 'rgba(234, 179, 8, 0.12)',
              border: '1px solid rgba(234, 179, 8, 0.4)',
              color: '#fef08a',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.82rem'
            }}
          >
            <AlertTriangle size={20} color="#fbbf24" style={{ flexShrink: 0 }} />
            <div>
              <strong>DOMINGO: DIA DE DESCANSO & REUNIÃO DO PELOTÃO</strong>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                Conforme determinação do Comandante Gean, as atividades no domingo não somam pontos no ranking semanal.
                As colocações foram consolidadas no sábado às 23:59. A nova disputa recomeça segunda-feira às 00:00!
              </div>
            </div>
          </div>
        )}

        {/* ABAS EXCLUSIVAS PARA O COMANDANTE */}
        {isCommander && (
          <div
            style={{
              padding: '0.5rem 1.5rem 0',
              display: 'flex',
              gap: '0.6rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <button
              onClick={() => setActiveTab('ranking')}
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.86rem',
                fontWeight: 800,
                color: activeTab === 'ranking' ? '#fbbf24' : '#94a3b8',
                background: activeTab === 'ranking' ? 'rgba(245, 158, 11, 0.12)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'ranking' ? '3px solid #f59e0b' : '3px solid transparent',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.2s'
              }}
            >
              <Trophy size={16} />
              <span>Ranking ao Vivo (Segunda a Sábado)</span>
            </button>

            <button
              onClick={() => setActiveTab('gestao')}
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.86rem',
                fontWeight: 800,
                color: activeTab === 'gestao' ? '#fbbf24' : '#94a3b8',
                background: activeTab === 'gestao' ? 'rgba(245, 158, 11, 0.12)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'gestao' ? '3px solid #f59e0b' : '3px solid transparent',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.2s'
              }}
            >
              <ShieldCheck size={16} />
              <span>Gestão de Participantes & Premiação</span>
            </button>
          </div>
        )}

        {/* CORPO DO MODAL */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* ================= ABA 1: RANKING AO VIVO ================= */}
          {activeTab === 'ranking' && (
            <>
              {isLoading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                  <RefreshCw size={32} className="animate-spin" style={{ margin: '0 auto 1rem', color: '#fbbf24' }} />
                  <div>Carregando telemetria em tempo real do pelotão...</div>
                </div>
              ) : leaderboard.length === 0 ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '3rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '16px',
                    border: '1px dashed rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <Users size={44} style={{ color: '#64748b', margin: '0 auto 1rem' }} />
                  <h3 style={{ color: '#ffffff', margin: 0 }}>Nenhum soldado pontuou nesta semana ainda</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.86rem', maxWidth: '500px', margin: '0.5rem auto 1rem' }}>
                    Assim que qualquer soldado cadastrado responder uma questão, os pontos e o status em tempo real
                    aparecerão aqui automaticamente.
                  </p>
                  {isCommander && (
                    <button
                      onClick={() => setActiveTab('gestao')}
                      style={{
                        background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.65rem 1.25rem',
                        borderRadius: '10px',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      Gerenciar Soldados Inscritos
                    </button>
                  )}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {leaderboard.map((soldier) => {
                    const is1st = soldier.rank === 1;
                    const is2nd = soldier.rank === 2;
                    const is3rd = soldier.rank === 3;

                    const borderStyle = is1st
                      ? '1px solid rgba(251, 191, 36, 0.65)'
                      : is2nd
                      ? '1px solid rgba(203, 213, 225, 0.45)'
                      : is3rd
                      ? '1px solid rgba(217, 119, 6, 0.45)'
                      : '1px solid rgba(255, 255, 255, 0.08)';

                    const bgStyle = is1st
                      ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(10, 17, 32, 0.95) 100%)'
                      : is2nd
                      ? 'linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, rgba(10, 17, 32, 0.95) 100%)'
                      : is3rd
                      ? 'linear-gradient(135deg, rgba(180, 83, 9, 0.1) 0%, rgba(10, 17, 32, 0.95) 100%)'
                      : 'rgba(10, 17, 32, 0.85)';

                    return (
                      <div
                        key={soldier.soldierKey}
                        style={{
                          background: bgStyle,
                          border: borderStyle,
                          borderRadius: '16px',
                          padding: '1rem 1.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem',
                          flexWrap: 'wrap',
                          boxShadow: is1st ? '0 0 25px rgba(245, 158, 11, 0.15)' : 'none',
                          transition: 'all 0.2s'
                        }}
                      >
                        {/* LADO ESQUERDO: POSIÇÃO & NOME */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '240px' }}>
                          <div
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '12px',
                              background: is1st
                                ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                                : is2nd
                                ? 'linear-gradient(135deg, #94a3b8, #64748b)'
                                : is3rd
                                ? 'linear-gradient(135deg, #d97706, #92400e)'
                                : 'rgba(255, 255, 255, 0.06)',
                              color: is1st || is2nd || is3rd ? '#ffffff' : '#94a3b8',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: is1st || is2nd || is3rd ? '1.25rem' : '1rem',
                              fontWeight: 900,
                              boxShadow: is1st ? '0 0 15px rgba(245, 158, 11, 0.4)' : 'none'
                            }}
                          >
                            {is1st ? '🥇' : is2nd ? '🥈' : is3rd ? '🥉' : `${soldier.rank}º`}
                          </div>

                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span
                                style={{
                                  fontSize: '1.05rem',
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
                                    padding: '0.1rem 0.45rem',
                                    borderRadius: '6px',
                                    fontSize: '0.68rem',
                                    fontWeight: 900
                                  }}
                                >
                                  LÍDER
                                </span>
                              )}
                            </div>

                            {/* STATUS DE ACESSO HOJE & DIAS ATIVOS */}
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: '0.25rem',
                                flexWrap: 'wrap'
                              }}
                            >
                              {soldier.hasAccessedToday ? (
                                <span
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    background: 'rgba(34, 197, 94, 0.2)',
                                    border: '1px solid rgba(34, 197, 94, 0.4)',
                                    color: '#4ade80',
                                    padding: '0.12rem 0.5rem',
                                    borderRadius: '6px',
                                    fontSize: '0.72rem',
                                    fontWeight: 800
                                  }}
                                >
                                  <span
                                    style={{
                                      width: '6px',
                                      height: '6px',
                                      borderRadius: '50%',
                                      background: '#22c55e',
                                      boxShadow: '0 0 6px #22c55e'
                                    }}
                                  />
                                  Acessou Hoje
                                </span>
                              ) : (
                                <span
                                  style={{
                                    background: 'rgba(148, 163, 184, 0.1)',
                                    color: '#94a3b8',
                                    padding: '0.12rem 0.5rem',
                                    borderRadius: '6px',
                                    fontSize: '0.72rem',
                                    fontWeight: 700
                                  }}
                                >
                                  Sem acesso hoje
                                </span>
                              )}

                              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>•</span>
                              <span style={{ fontSize: '0.72rem', color: '#93c5fd' }}>
                                📅 {soldier.daysActiveCount} {soldier.daysActiveCount === 1 ? 'dia' : 'dias'} na semana
                              </span>
                              {soldier.weekMinutesOnline > 0 && (
                                <>
                                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>•</span>
                                  <span style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
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
                            background: 'rgba(30, 58, 138, 0.25)',
                            border: '1px solid rgba(59, 130, 246, 0.35)',
                            padding: '0.5rem 1rem',
                            borderRadius: '12px',
                            textAlign: 'center',
                            minWidth: '135px'
                          }}
                        >
                          <div style={{ fontSize: '0.68rem', color: '#93c5fd', fontWeight: 800 }}>
                            RESPONDIDAS HOJE
                          </div>
                          <div
                            style={{
                              fontSize: '1.35rem',
                              fontWeight: 900,
                              color: soldier.questionsToday > 0 ? '#67e8f9' : '#94a3b8',
                              lineHeight: 1.15
                            }}
                          >
                            {soldier.questionsToday || 0}
                          </div>
                          <div style={{ fontSize: '0.66rem', color: '#64748b' }}>questões hoje</div>
                        </div>

                        {/* LADO DIREITO: PONTOS NA SEMANA (ACERTOS) & ACUMULADO */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.25rem',
                            textAlign: 'right'
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '0.68rem', color: '#fbbf24', fontWeight: 800 }}>
                              PONTOS DA SEMANA
                            </div>
                            <div
                              style={{
                                fontSize: '1.65rem',
                                fontWeight: 900,
                                color: is1st ? '#fef08a' : '#ffffff',
                                lineHeight: 1.1
                              }}
                            >
                              {soldier.weekScore}{' '}
                              <span style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 700 }}>pts</span>
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#4ade80', fontWeight: 800 }}>
                              {soldier.weekAccuracy}% de acerto
                            </div>
                          </div>

                          <div
                            style={{
                              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                              paddingLeft: '1rem',
                              fontSize: '0.74rem',
                              color: '#94a3b8',
                              lineHeight: 1.45
                            }}
                          >
                            <div>
                              Total semana: <strong style={{ color: '#f8fafc' }}>{soldier.weekTotalAnswered}</strong>
                            </div>
                            <div>
                              Acertos: <strong style={{ color: '#4ade80' }}>{soldier.weekScore}</strong> | Erros:{' '}
                              <strong style={{ color: '#f87171' }}>{soldier.weekWrongAnswers}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* ================= ABA 2: GESTÃO PELO COMANDANTE ================= */}
          {activeTab === 'gestao' && isCommander && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* CONFIGURADOR DE PREMIAÇÃO */}
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <DollarSign size={22} color="#fbbf24" />
                  <div>
                    <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.1rem', fontWeight: 800 }}>
                      Configurar Premiação da Semana
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                      Defina o valor e as regras do prêmio que o 1º colocado receberá no fechamento de sábado.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#fbbf24', fontWeight: 800, marginBottom: '0.35rem' }}>
                      VALOR DO PRÊMIO
                    </label>
                    <input
                      type="text"
                      value={prizeText}
                      onChange={(e) => setPrizeText(e.target.value)}
                      placeholder="Ex: R$ 20,00"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        background: 'rgba(6, 11, 23, 0.85)',
                        border: '1px solid rgba(245, 158, 11, 0.5)',
                        color: '#fef08a',
                        fontSize: '1.15rem',
                        fontWeight: 900
                      }}
                    />
                    {/* PRESETS RÁPIDOS */}
                    <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                      {['R$ 10,00', 'R$ 20,00', 'R$ 30,00', 'R$ 50,00', 'R$ 100,00'].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setPrizeText(val)}
                          style={{
                            background: prizeText === val ? '#d97706' : 'rgba(255, 255, 255, 0.08)',
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            cursor: 'pointer'
                          }}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#93c5fd', fontWeight: 800, marginBottom: '0.35rem' }}>
                      MENSAGEM / INSTRUÇÕES DE PAGAMENTO
                    </label>
                    <input
                      type="text"
                      value={prizeDesc}
                      onChange={(e) => setPrizeDesc(e.target.value)}
                      placeholder="Ex: Pagamento via PIX no Sábado às 23:59 para o 1º Lugar Geral!"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        background: 'rgba(6, 11, 23, 0.85)',
                        border: '1px solid rgba(59, 130, 246, 0.4)',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.65rem' }}>
                      <button
                        onClick={handleSavePrize}
                        disabled={isSavingPrize}
                        style={{
                          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                          color: '#060b17',
                          border: 'none',
                          padding: '0.65rem 1.4rem',
                          borderRadius: '10px',
                          fontWeight: 900,
                          fontSize: '0.86rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
                        }}
                      >
                        <Sparkles size={16} />
                        <span>{isSavingPrize ? 'Salvando na Nuvem...' : 'Salvar Premiação Oficial'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* GESTÃO DE SOLDADOS PARTICIPANTES */}
              <div
                style={{
                  background: 'rgba(10, 17, 32, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.25rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.1rem', fontWeight: 800 }}>
                      Soldados Participantes da Competição
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      Selecione quem entra na disputa semanal. Somente os soldados marcados pontuam e disputam o prêmio.
                    </div>
                  </div>

                  <button
                    onClick={handleEnrollAll}
                    style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      color: '#4ade80',
                      padding: '0.5rem 1rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <UserPlus size={15} />
                    <span>Inscrever Todos os Soldados</span>
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
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
                              ? '1px solid rgba(34, 197, 94, 0.35)'
                              : '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            padding: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.75rem'
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                              {user.name}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                              Status:{' '}
                              <span style={{ color: user.status === 'approved' ? '#4ade80' : '#f87171' }}>
                                {user.status === 'approved' ? 'Liberado' : 'Pendente'}
                              </span>
                              {user.questionsTodayCount ? ` • ${user.questionsTodayCount} hoje` : ''}
                            </div>
                          </div>

                          <button
                            onClick={() => handleToggleSoldier(user.name, isEnrolled)}
                            style={{
                              background: isEnrolled ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.2)',
                              border: isEnrolled
                                ? '1px solid rgba(239, 68, 68, 0.4)'
                                : '1px solid rgba(34, 197, 94, 0.4)',
                              color: isEnrolled ? '#f87171' : '#4ade80',
                              padding: '0.4rem 0.75rem',
                              borderRadius: '8px',
                              fontSize: '0.76rem',
                              fontWeight: 800,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}
                          >
                            {isEnrolled ? (
                              <>
                                <UserX size={14} />
                                <span>Remover</span>
                              </>
                            ) : (
                              <>
                                <UserCheck size={14} />
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
        </div>

        {/* RODAPÉ DO MODAL */}
        <div
          style={{
            padding: '0.85rem 1.5rem',
            background: 'rgba(6, 11, 23, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.76rem',
            color: '#94a3b8',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Info size={14} color="#38bdf8" />
            <span>
              Regra Oficial: 1 acerto = 1 ponto (Segunda a Sábado). Domingo descanso. Ranking fecha aos sábados às 23:59.
            </span>
          </div>

          <div style={{ color: '#fbbf24', fontWeight: 800 }}>
            MISSÃO PMPE 2026 • COMANDO CENTRAL
          </div>
        </div>
      </div>
    </div>
  );
};
