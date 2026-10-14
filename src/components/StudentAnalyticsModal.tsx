import React, { useState, useEffect } from 'react';
import { 
  X, 
  Users, 
  CheckCircle, 
  XCircle, 
  Award, 
  Clock, 
  RefreshCw, 
  Wifi, 
  Calendar, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Swords, 
  Flame, 
  Sparkles, 
  Trash2, 
  AlertTriangle, 
  Crosshair, 
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { 
  getAllStudents, 
  fetchCloudPelotao, 
  purgeAllStudentsExceptCommander,
  type StudentProfile 
} from '../utils/studentAnalytics';
import { purgeAllUsersExceptCommander, isMasterUser } from '../utils/authManager';
import { sound } from '../utils/sound';

interface StudentAnalyticsModalProps {
  currentUserName: string;
  onClose: () => void;
}

const MILITARY_MOTIVATIONAL_QUOTES = [
  { text: "A dor da disciplina é temporária, mas a honra de envergar a farda da PMPE é para sempre!", author: "Doutrina PMPE" },
  { text: "O suor derramado no estudo hoje é o sangue poupado amanhã nas operações policiais de Pernambuco!", author: "Lema Operacional" },
  { text: "Aqui não se cultiva o cansaço! Cada questão resolvida é um passo a mais na Academia do Paissandu!", author: "Comando da Tropa" },
  { text: "O ferro afia o ferro: a disputa amigável de pelotão forja os combatentes mais preparados da PMPE!", author: "Batalhão de Choque" },
  { text: "Pernambuco imortal, guerreiro incansável! A vaga é conquistada questão por questão, tiro a tiro!", author: "Estatuto PMPE" },
  { text: "Quem estuda na tempestade e na madrugada comemora no Diário Oficial com a farda cáqui!", author: "Tradição Militar" },
  { text: "A disciplina vence o talento quando o talento não treina. Mantenha a mira firme no alvo!", author: "Instrução Tática" },
  { text: "No embate contra a banca AOCP, a melhor arma é a precisão e a constância diária!", author: "Estratégia Militar" },
];

function getMilitaryRank(questionsAnswered: number, accuracy: number, isCommander: boolean): { title: string; badge: string; color: string } {
  if (isCommander) {
    return { title: 'Comandante Titular', badge: '🎖️ OFICIAL', color: '#fbbf24' };
  }
  if (questionsAnswered >= 300 && accuracy >= 70) {
    return { title: '1º Sargento Tático', badge: '⭐⭐⭐ SGT', color: '#38bdf8' };
  }
  if (questionsAnswered >= 150 && accuracy >= 60) {
    return { title: 'Cabo Operacional', badge: '⭐⭐ CB', color: '#34d399' };
  }
  if (questionsAnswered >= 50) {
    return { title: 'Soldado 1ª Classe', badge: '⭐ SD', color: '#a3e635' };
  }
  if (questionsAnswered > 0) {
    return { title: 'Aluno CFSd PMPE', badge: '🔰 ALUNO', color: '#94a3b8' };
  }
  return { title: 'Cadete Recruta', badge: '⚪ RECRUTA', color: '#64748b' };
}

export const StudentAnalyticsModal: React.FC<StudentAnalyticsModalProps> = ({
  currentUserName,
  onClose,
}) => {
  const [studentsMap, setStudentsMap] = useState<Record<string, StudentProfile>>(() => getAllStudents());
  const [isLoadingCloud, setIsLoadingCloud] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Agora');
  const [cloudSynced, setCloudSynced] = useState(true);
  const [activeTab, setActiveTab] = useState<'duel' | 'squad' | 'stats'>('duel');
  const [selectedDuelOpponent, setSelectedDuelOpponent] = useState<string>('');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [resetSuccessNotice, setResetSuccessNotice] = useState(false);

  const isUserCommander = isMasterUser(currentUserName);

  // Sincroniza com a nuvem compartilhada ao abrir o modal
  const handleSyncCloud = async () => {
    setIsLoadingCloud(true);
    sound.playClick();
    try {
      const updated = await fetchCloudPelotao();
      setStudentsMap(updated);
      setLastSyncTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setCloudSynced(true);
      sound.playSuccess();
    } catch {
      setCloudSynced(false);
      sound.playError();
    } finally {
      setIsLoadingCloud(false);
    }
  };

  useEffect(() => {
    handleSyncCloud();
  }, []);

  const studentsList: StudentProfile[] = Object.values(studentsMap);

  // Perfil do usuário atual logado
  const currentStudent = studentsMap[currentUserName] || {
    name: currentUserName,
    firstLogin: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    totalSessions: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    overallAccuracy: 0,
    totalScore: 0,
    totalXp: 0,
    totalTimeSpentSeconds: 0,
    averageTimePerQuestion: 0,
    sessions: [],
    subjectStats: {}
  };

  // Garante que o Comandante Gean sempre exista na listagem
  const allKnownStudents: StudentProfile[] = studentsList.some(s => s.name.toLowerCase() === currentUserName.toLowerCase())
    ? studentsList
    : [currentStudent, ...studentsList];

  // Ordenação: Usuário logado primeiro, depois quem mais respondeu
  const sortedStudents = [...allKnownStudents].sort((a, b) => {
    if (a.name.toLowerCase() === currentUserName.toLowerCase()) return -1;
    if (b.name.toLowerCase() === currentUserName.toLowerCase()) return 1;
    return b.totalAnswered - a.totalAnswered;
  });

  // Pelotão limitado a 6 vagas conforme solicitado pelo usuário
  const squadSlots: (StudentProfile | null)[] = [
    sortedStudents[0] || null,
    sortedStudents[1] || null,
    sortedStudents[2] || null,
    sortedStudents[3] || null,
    sortedStudents[4] || null,
    sortedStudents[5] || null,
  ];

  // Seleciona oponente padrão para o duelo
  useEffect(() => {
    if (!selectedDuelOpponent) {
      const other = sortedStudents.find(s => s.name.toLowerCase() !== currentUserName.toLowerCase());
      if (other) {
        setSelectedDuelOpponent(other.name);
      }
    }
  }, [sortedStudents, currentUserName, selectedDuelOpponent]);

  const opponentProfile = sortedStudents.find(s => s.name.toLowerCase() === selectedDuelOpponent.toLowerCase()) || null;

  // Estatísticas agregadas do pelotão
  const totalPelotaoQuestions = sortedStudents.reduce((acc, s) => acc + s.totalAnswered, 0);
  const totalPelotaoCorrect = sortedStudents.reduce((acc, s) => acc + s.totalCorrect, 0);
  const averageCohortAccuracy = totalPelotaoQuestions > 0 ? Math.round((totalPelotaoCorrect / totalPelotaoQuestions) * 100) : 0;

  // Ação de zerar banco de dados mantendo apenas Gean
  const handlePurgeAllStudents = async () => {
    setIsResetting(true);
    sound.playClick();
    try {
      await purgeAllStudentsExceptCommander();
      await purgeAllUsersExceptCommander();
      sound.playGunshot38();
      setIsResetConfirmOpen(false);
      setResetSuccessNotice(true);
      await handleSyncCloud();
      setTimeout(() => setResetSuccessNotice(false), 5000);
    } catch (err) {
      console.error(err);
      sound.playError();
    } finally {
      setIsResetting(false);
    }
  };

  const handleNextQuote = () => {
    sound.playGunshot38();
    setQuoteIndex((prev) => (prev + 1) % MILITARY_MOTIVATIONAL_QUOTES.length);
  };

  const currentQuote = MILITARY_MOTIVATIONAL_QUOTES[quoteIndex];

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        style={{
          maxWidth: '1060px',
          width: '96%',
          maxHeight: '94vh',
          overflowY: 'auto',
          padding: '1.75rem',
          background: 'radial-gradient(ellipse at top, #142416 0%, #0a110b 50%, #060907 100%)',
          border: '2px solid rgba(245, 158, 11, 0.45)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(34, 197, 94, 0.18)',
          borderRadius: '24px',
          color: '#ffffff'
        }}
      >
        {/* CABEÇALHO TÁTICO MILITAR */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid rgba(245, 158, 11, 0.25)',
          paddingBottom: '1.25rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '0.45rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.85rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(202, 138, 4, 0.2) 100%)',
                border: '1px solid #f59e0b',
                color: '#fbbf24',
                fontSize: '0.78rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                <Crosshair size={15} />
                <span>CENTRO DE OPERAÇÕES MILITARES • PELOTÃO PMPE 2026</span>
              </span>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                background: cloudSynced ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                border: `1px solid ${cloudSynced ? '#22c55e' : '#ef4444'}`,
                color: cloudSynced ? '#4ade80' : '#f87171',
                fontSize: '0.74rem',
                fontWeight: 800
              }}>
                <Wifi size={13} />
                <span>{cloudSynced ? 'NUVEM OPERACIONAL (AO VIVO)' : 'OFFLINE'}</span>
              </span>

              <span style={{
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                color: '#cbd5e1',
                fontSize: '0.74rem',
                fontWeight: 700
              }}>
                Capacidade: 6 Combatentes
              </span>
            </div>

            <h2 style={{
              fontSize: '1.85rem',
              fontWeight: 900,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              textShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
            }}>
              Quadro de Guerra & Disputa Amigável de Pelotão
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '0.35rem 0 0' }}>
              Comparação direta de aproveitamento e precisão no gatilho entre você e os colegas para evolução mútua até a aprovação.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={handleSyncCloud}
              disabled={isLoadingCloud}
              className="btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 0.95rem',
                fontSize: '0.84rem',
                borderRadius: '10px',
                background: 'rgba(34, 197, 94, 0.15)',
                borderColor: '#22c55e',
                color: '#86efac',
                fontWeight: 800
              }}
              title="Atualizar dados do pelotão na nuvem agora"
            >
              <RefreshCw size={15} className={isLoadingCloud ? 'animate-spin' : ''} />
              <span>{isLoadingCloud ? 'Carregando...' : 'Atualizar Pelotão'}</span>
            </button>

            {isUserCommander && (
              <button
                onClick={() => {
                  sound.playClick();
                  setIsResetConfirmOpen(true);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 0.95rem',
                  fontSize: '0.82rem',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid #ef4444',
                  color: '#fca5a5',
                  fontWeight: 900,
                  cursor: 'pointer'
                }}
                title="Apagar todos os outros alunos cadastrados mantendo exclusivamente a conta de Gean"
              >
                <Trash2 size={15} color="#ef4444" />
                <span>Zerar Pelotão</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="modal-close-btn"
              title="Fechar Central Militar"
              style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '0.5rem' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* ALERTA DE SUCESSO DO RESET */}
        {resetSuccessNotice && (
          <div style={{
            padding: '0.85rem 1.25rem',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.25) 0%, rgba(22, 101, 52, 0.3) 100%)',
            border: '1px solid #22c55e',
            color: '#86efac',
            marginBottom: '1.25rem',
            fontWeight: 800,
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <CheckCircle size={18} color="#4ade80" />
            <span>ORDEM CUMPRIDA, COMANDANTE GEAN! Todos os cadastros foram purgados na nuvem e no dispositivo. Banco pronto e zerado para os 6 novos guerreiros!</span>
          </div>
        )}

        {/* MODAL DE CONFIRMAÇÃO DO RESET GERAL */}
        {isResetConfirmOpen && (
          <div style={{
            padding: '1.25rem',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.95) 0%, rgba(69, 10, 10, 0.98) 100%)',
            border: '2px solid #ef4444',
            marginBottom: '1.25rem',
            boxShadow: '0 0 30px rgba(239, 68, 68, 0.4)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <AlertTriangle size={24} color="#fca5a5" />
              <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.2rem', fontWeight: 900 }}>
                ATENÇÃO, COMANDANTE GEAN: ZERAR CADASTRO DE ALUNOS?
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#fecaca', margin: '0 0 1rem', lineHeight: 1.5 }}>
              Esta ação militar apagará permanentemente todos os alunos cadastrados tanto da nuvem KVdb quanto deste dispositivo, <strong>mantendo única e exclusivamente a sua conta titular (Gean)</strong>. Use quando os novos 6 alunos forem começar a rotina de simulados.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                disabled={isResetting}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handlePurgeAllStudents}
                disabled={isResetting}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '10px',
                  background: '#dc2626',
                  border: '1px solid #ef4444',
                  color: '#ffffff',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(220, 38, 38, 0.7)'
                }}
              >
                {isResetting ? 'Purgando Dados...' : 'CONFIRMAR E ZERAR TUDO (MANTER SÓ GEAN)'}
              </button>
            </div>
          </div>
        )}

        {/* FAIXA MOTIVACIONAL MILITAR DA TROPA */}
        <div style={{
          padding: '0.9rem 1.25rem',
          borderRadius: '14px',
          background: 'linear-gradient(90deg, rgba(20, 36, 22, 0.9) 0%, rgba(14, 25, 16, 0.95) 100%)',
          border: '1px solid rgba(34, 197, 94, 0.35)',
          marginBottom: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: 'inset 0 0 20px rgba(34, 197, 94, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #15803d, #22c55e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)',
              flexShrink: 0
            }}>
              <Flame size={20} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#fbbf24', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ORDEM DO DIA • {currentQuote.author}
              </div>
              <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#f0fdf4', fontStyle: 'italic', marginTop: '0.15rem' }}>
                "{currentQuote.text}"
              </div>
            </div>
          </div>

          <button
            onClick={handleNextQuote}
            className="btn-secondary"
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.78rem',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.15)',
              borderColor: '#f59e0b',
              color: '#fbbf24',
              fontWeight: 800,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
            title="Sortear nova frase de motivação militar"
          >
            <Sparkles size={14} />
            <span>Sortear Moral</span>
          </button>
        </div>

        {/* NAVEGAÇÃO ENTRE ABAS TÁTICAS */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '0.75rem'
        }}>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('duel');
            }}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '10px',
              background: activeTab === 'duel' ? 'linear-gradient(135deg, #b45309, #d97706)' : 'rgba(255, 255, 255, 0.05)',
              border: activeTab === 'duel' ? '1px solid #f59e0b' : '1px solid transparent',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              boxShadow: activeTab === 'duel' ? '0 0 15px rgba(245, 158, 11, 0.4)' : 'none'
            }}
          >
            <Swords size={18} />
            <span>⚔️ Duelo & Disputa Amigável (1 vs 1)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('squad');
            }}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '10px',
              background: activeTab === 'squad' ? 'linear-gradient(135deg, #15803d, #16a34a)' : 'rgba(255, 255, 255, 0.05)',
              border: activeTab === 'squad' ? '1px solid #22c55e' : '1px solid transparent',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              boxShadow: activeTab === 'squad' ? '0 0 15px rgba(34, 197, 94, 0.4)' : 'none'
            }}
          >
            <Users size={18} />
            <span>🎖️ Quadro de Presença dos 6 Combatentes</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('stats');
            }}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '10px',
              background: activeTab === 'stats' ? 'linear-gradient(135deg, #0369a1, #0284c7)' : 'rgba(255, 255, 255, 0.05)',
              border: activeTab === 'stats' ? '1px solid #38bdf8' : '1px solid transparent',
              color: '#ffffff',
              fontSize: '0.88rem',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              boxShadow: activeTab === 'stats' ? '0 0 15px rgba(56, 189, 248, 0.4)' : 'none'
            }}
          >
            <BarChart3 size={18} />
            <span>📊 Visão Geral de Pelotão</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* ABA 1: DUELO AMIGÁVEL & CONFRONTO LADO A LADO (EXATAMENTE COMO NO ÁUDIO) */}
        {/* ========================================================================= */}
        {activeTab === 'duel' && (
          <div>
            {/* SELETOR DE OPONENTE PARA O DUELO */}
            <div style={{
              padding: '1rem',
              borderRadius: '14px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Crosshair size={18} color="#f59e0b" />
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fde68a' }}>
                  ESCOLHA O COMBATENTE PARA O CONFRONTO DIRETO:
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {sortedStudents
                  .filter(s => s.name.toLowerCase() !== currentUserName.toLowerCase())
                  .map((st) => (
                    <button
                      key={st.name}
                      onClick={() => {
                        sound.playGunshot38();
                        setSelectedDuelOpponent(st.name);
                      }}
                      style={{
                        padding: '0.45rem 0.95rem',
                        borderRadius: '8px',
                        background: selectedDuelOpponent.toLowerCase() === st.name.toLowerCase()
                          ? 'linear-gradient(135deg, #dc2626, #b91c1c)'
                          : 'rgba(255, 255, 255, 0.06)',
                        border: selectedDuelOpponent.toLowerCase() === st.name.toLowerCase()
                          ? '1px solid #ef4444'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        boxShadow: selectedDuelOpponent.toLowerCase() === st.name.toLowerCase()
                          ? '0 0 12px rgba(220, 38, 38, 0.5)'
                          : 'none'
                      }}
                    >
                      <ShieldCheck size={14} />
                      <span>{st.name}</span>
                    </button>
                  ))}

                {sortedStudents.filter(s => s.name.toLowerCase() !== currentUserName.toLowerCase()).length === 0 && (
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>
                    Nenhum outro guerreiro alistado ainda. Peça para seus colegas acessarem e se cadastrarem!
                  </span>
                )}
              </div>
            </div>

            {/* GRÁFICO COMPARATIVO LADO A LADO DO DUELO */}
            {opponentProfile ? (
              <div style={{
                padding: '1.75rem',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, rgba(20, 32, 22, 0.95) 0%, rgba(10, 18, 12, 0.98) 100%)',
                border: '2px solid rgba(34, 197, 94, 0.4)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.7)',
                marginBottom: '2rem'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 1rem',
                    borderRadius: '20px',
                    background: 'rgba(245, 158, 11, 0.2)',
                    border: '1px solid #f59e0b',
                    color: '#fbbf24',
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    letterSpacing: '0.05em'
                  }}>
                    <Swords size={16} />
                    <span>CONFRONTO DIRETO DE PONTARIA & RENDIMENTO</span>
                  </span>
                  <h3 style={{ margin: '0.65rem 0 0.25rem', fontSize: '1.5rem', fontWeight: 900 }}>
                    {currentStudent.name} (Você) <span style={{ color: '#ef4444' }}>VS</span> {opponentProfile.name}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: '#86efac', fontWeight: 700 }}>
                    {currentStudent.overallAccuracy > opponentProfile.overallAccuracy
                      ? `🏆 Você lidera com +${currentStudent.overallAccuracy - opponentProfile.overallAccuracy}% de vantagem tática!`
                      : currentStudent.overallAccuracy < opponentProfile.overallAccuracy
                      ? `🎯 ${opponentProfile.name} está na frente por +${opponentProfile.overallAccuracy - currentStudent.overallAccuracy}%. Hora de acelerar o ritmo nos simulados!`
                      : '⚖️ Empate técnico operacional! Precisão idêntica no gatilho!'}
                  </div>
                </div>

                {/* COMPARAÇÃO LADO A LADO (CARDS) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.75rem'
                }}>
                  {/* CARD GUERREIRO 1 (VOCÊ / GEAN) */}
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '2px solid #22c55e',
                    boxShadow: '0 0 25px rgba(34, 197, 94, 0.2)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#4ade80' }}>
                          {currentStudent.name} (Você)
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 800 }}>
                          {getMilitaryRank(currentStudent.totalAnswered, currentStudent.overallAccuracy, isUserCommander).title}
                        </div>
                      </div>
                      <div style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '10px',
                        background: 'rgba(34, 197, 94, 0.25)',
                        border: '1px solid #22c55e',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '0.65rem', color: '#86efac', fontWeight: 800 }}>APROVEITAMENTO</div>
                        <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff' }}>
                          {currentStudent.overallAccuracy}%
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center', marginBottom: '0.85rem' }}>
                      <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)' }}>
                        <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Respondidas</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#38bdf8' }}>{currentStudent.totalAnswered}</div>
                      </div>
                      <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.15)' }}>
                        <div style={{ fontSize: '0.68rem', color: '#86efac' }}>Acertos</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#4ade80' }}>{currentStudent.totalCorrect}</div>
                      </div>
                      <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.15)' }}>
                        <div style={{ fontSize: '0.68rem', color: '#fca5a5' }}>Erros</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#f87171' }}>{currentStudent.totalWrong}</div>
                      </div>
                    </div>

                    {/* Barra de aproveitamento animada */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                        <span>Precisão de Tiro</span>
                        <strong style={{ color: '#4ade80' }}>{currentStudent.overallAccuracy}%</strong>
                      </div>
                      <div style={{ height: '14px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          width: `${currentStudent.overallAccuracy}%`,
                          background: 'linear-gradient(90deg, #15803d, #22c55e, #fbbf24)',
                          boxShadow: '0 0 10px rgba(34, 197, 94, 0.7)',
                          transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} />
                      </div>
                    </div>
                  </div>

                  {/* CARD GUERREIRO 2 (OPONENTE SELECIONADO) */}
                  <div style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(56, 189, 248, 0.08)',
                    border: '2px solid rgba(56, 189, 248, 0.45)',
                    boxShadow: '0 0 25px rgba(56, 189, 248, 0.15)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#38bdf8' }}>
                          {opponentProfile.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#93c5fd', fontWeight: 800 }}>
                          {getMilitaryRank(opponentProfile.totalAnswered, opponentProfile.overallAccuracy, isMasterUser(opponentProfile.name)).title}
                        </div>
                      </div>
                      <div style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.2)',
                        border: '1px solid #38bdf8',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '0.65rem', color: '#bae6fd', fontWeight: 800 }}>APROVEITAMENTO</div>
                        <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff' }}>
                          {opponentProfile.overallAccuracy}%
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center', marginBottom: '0.85rem' }}>
                      <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)' }}>
                        <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Respondidas</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#38bdf8' }}>{opponentProfile.totalAnswered}</div>
                      </div>
                      <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.15)' }}>
                        <div style={{ fontSize: '0.68rem', color: '#86efac' }}>Acertos</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#4ade80' }}>{opponentProfile.totalCorrect}</div>
                      </div>
                      <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.15)' }}>
                        <div style={{ fontSize: '0.68rem', color: '#fca5a5' }}>Erros</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#f87171' }}>{opponentProfile.totalWrong}</div>
                      </div>
                    </div>

                    {/* Barra de aproveitamento animada do oponente */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                        <span>Precisão de Tiro</span>
                        <strong style={{ color: '#38bdf8' }}>{opponentProfile.overallAccuracy}%</strong>
                      </div>
                      <div style={{ height: '14px', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          width: `${opponentProfile.overallAccuracy}%`,
                          background: 'linear-gradient(90deg, #0369a1, #0284c7, #38bdf8)',
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.6)',
                          transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                        }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* GRÁFICO COMPARATIVO DIRETO DE BARRAS DE COMBATE */}
                <div style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 800, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BarChart3 size={16} />
                    <span>BALANÇO VISUAL DE DISPAROS & PONTARIA:</span>
                  </div>

                  {/* Barra 1: Você */}
                  <div style={{ marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '0.25rem' }}>
                      <span style={{ color: '#4ade80', fontWeight: 800 }}>{currentStudent.name} (Você): {currentStudent.totalCorrect} acertos / {currentStudent.totalAnswered} questões</span>
                      <strong style={{ color: '#ffffff' }}>{currentStudent.overallAccuracy}%</strong>
                    </div>
                    <div style={{ height: '22px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', display: 'flex', overflow: 'hidden', border: '1px solid rgba(34, 197, 94, 0.4)' }}>
                      <div style={{ width: `${currentStudent.overallAccuracy}%`, background: 'linear-gradient(90deg, #16a34a, #22c55e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900 }}>
                        {currentStudent.totalCorrect > 0 ? `${currentStudent.totalCorrect} ACERTOS` : ''}
                      </div>
                      <div style={{ width: `${100 - currentStudent.overallAccuracy}%`, background: 'rgba(239, 68, 68, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800 }}>
                        {currentStudent.totalWrong > 0 ? `${currentStudent.totalWrong} ERROS` : ''}
                      </div>
                    </div>
                  </div>

                  {/* Barra 2: Oponente */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '0.25rem' }}>
                      <span style={{ color: '#38bdf8', fontWeight: 800 }}>{opponentProfile.name}: {opponentProfile.totalCorrect} acertos / {opponentProfile.totalAnswered} questões</span>
                      <strong style={{ color: '#ffffff' }}>{opponentProfile.overallAccuracy}%</strong>
                    </div>
                    <div style={{ height: '22px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', display: 'flex', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
                      <div style={{ width: `${opponentProfile.overallAccuracy}%`, background: 'linear-gradient(90deg, #0284c7, #38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900 }}>
                        {opponentProfile.totalCorrect > 0 ? `${opponentProfile.totalCorrect} ACERTOS` : ''}
                      </div>
                      <div style={{ width: `${100 - opponentProfile.overallAccuracy}%`, background: 'rgba(239, 68, 68, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800 }}>
                        {opponentProfile.totalWrong > 0 ? `${opponentProfile.totalWrong} ERROS` : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                padding: '2.5rem',
                borderRadius: '16px',
                border: '2px dashed rgba(245, 158, 11, 0.35)',
                background: 'rgba(0, 0, 0, 0.25)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🪖</div>
                <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>
                  Aguardando Novos Cadastros de Alunos
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '0.5rem auto 1rem', maxWidth: '450px' }}>
                  O banco foi limpo e está aguardando os novos colegas se cadastrarem. Assim que o próximo guerreiro responder as primeiras questões, o duelo lado a lado será ativado automaticamente aqui!
                </p>
                <div style={{ fontSize: '0.82rem', color: '#fbbf24', fontWeight: 700 }}>
                  Compartilhe o link do aplicativo com os outros 5 membros do pelotão!
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* ABA 2: QUADRO GERAL DOS 6 COMBATENTES (PRESENÇA, HORÁRIOS & SLOTS)       */}
        {/* ========================================================================= */}
        {activeTab === 'squad' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  ESCALA DO PELOTÃO: 6 POSTOS OPERACIONAIS
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Acompanhamento de alistamento, data/horário de entrada e prontidão individual.
                </span>
              </div>
            </div>

            {/* GRID DOS 6 SLOTS MILITARES */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {squadSlots.map((student, idx) => {
                const slotNumber = idx + 1;

                if (!student) {
                  return (
                    <div
                      key={`empty-slot-${slotNumber}`}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '16px',
                        border: '2px dashed rgba(255, 255, 255, 0.15)',
                        background: 'rgba(0, 0, 0, 0.25)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '0.5rem',
                        minHeight: '190px'
                      }}
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#64748b',
                        fontWeight: 900,
                        fontSize: '0.85rem'
                      }}>
                        0{slotNumber}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#94a3b8' }}>
                        Posto 0{slotNumber}: Vago
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                        Aguardando novo combatente se cadastrar no sistema
                      </div>
                    </div>
                  );
                }

                const isSelf = student.name.toLowerCase() === currentUserName.toLowerCase();
                const isCommanderSlot = isMasterUser(student.name);
                const rank = getMilitaryRank(student.totalAnswered, student.overallAccuracy, isCommanderSlot);

                return (
                  <div
                    key={student.name}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '16px',
                      background: isCommanderSlot 
                        ? 'linear-gradient(135deg, rgba(30, 41, 26, 0.95) 0%, rgba(15, 24, 14, 0.98) 100%)'
                        : isSelf
                        ? 'linear-gradient(135deg, rgba(20, 36, 26, 0.95) 0%, rgba(10, 20, 14, 0.98) 100%)'
                        : 'rgba(20, 26, 34, 0.75)',
                      border: isCommanderSlot
                        ? '2px solid #f59e0b'
                        : isSelf
                        ? '2px solid #22c55e'
                        : '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: isCommanderSlot
                        ? '0 0 25px rgba(245, 158, 11, 0.25)'
                        : isSelf
                        ? '0 0 20px rgba(34, 197, 94, 0.2)'
                        : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem'
                    }}
                  >
                    {/* CABEÇALHO DO SLOT */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isCommanderSlot ? 'linear-gradient(135deg, #d97706, #b45309)' : 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          fontWeight: 900,
                          fontSize: '0.85rem'
                        }}>
                          0{slotNumber}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                              {student.name}
                            </span>
                            {isCommanderSlot && (
                              <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: '#b45309', color: '#fef3c7', fontWeight: 900 }}>
                                COMANDANTE
                              </span>
                            )}
                            {isSelf && !isCommanderSlot && (
                              <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: '#15803d', color: '#dcfce7', fontWeight: 900 }}>
                                VOCÊ
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: rank.color, fontWeight: 800 }}>
                            {rank.badge} • {rank.title}
                          </div>
                        </div>
                      </div>

                      <div style={{
                        textAlign: 'right',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '8px',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}>
                        <div style={{ fontSize: '0.62rem', color: '#94a3b8' }}>PRECISÃO</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: student.overallAccuracy >= 70 ? '#4ade80' : '#fbbf24' }}>
                          {student.overallAccuracy}%
                        </div>
                      </div>
                    </div>

                    {/* HORÁRIOS: QUE HORAS ENTROU / ÚLTIMO ACESSO (EXIGIDO NO ÁUDIO) */}
                    <div style={{
                      padding: '0.65rem',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.35)',
                      fontSize: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8' }}>
                        <Clock size={13} color="#f59e0b" />
                        <span>
                          <strong>Último acesso:</strong> {new Date(student.lastLogin).toLocaleDateString('pt-BR')} às {new Date(student.lastLogin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b' }}>
                        <Calendar size={13} />
                        <span>
                          Alistado em: {new Date(student.firstLogin).toLocaleDateString('pt-BR')} às {new Date(student.firstLogin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>

                    {/* MÉTRICAS DE COMBATE */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.4rem', textAlign: 'center' }}>
                      <div style={{ padding: '0.4rem', borderRadius: '6px', background: 'rgba(255,255,255,0.03)' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Respondidas</div>
                        <div style={{ fontSize: '1rem', fontWeight: 900, color: '#38bdf8' }}>{student.totalAnswered}</div>
                      </div>
                      <div style={{ padding: '0.4rem', borderRadius: '6px', background: 'rgba(34,197,94,0.1)' }}>
                        <div style={{ fontSize: '0.65rem', color: '#86efac' }}>Acertos</div>
                        <div style={{ fontSize: '1rem', fontWeight: 900, color: '#4ade80' }}>{student.totalCorrect}</div>
                      </div>
                      <div style={{ padding: '0.4rem', borderRadius: '6px', background: 'rgba(239,68,68,0.1)' }}>
                        <div style={{ fontSize: '0.65rem', color: '#fca5a5' }}>Erros</div>
                        <div style={{ fontSize: '1rem', fontWeight: 900, color: '#f87171' }}>{student.totalWrong}</div>
                      </div>
                    </div>

                    {/* BOTÃO PARA DESAFIAR / COMPARAR EM 1 VS 1 */}
                    {!isSelf && (
                      <button
                        onClick={() => {
                          sound.playGunshot38();
                          setSelectedDuelOpponent(student.name);
                          setActiveTab('duel');
                        }}
                        style={{
                          padding: '0.5rem',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #b45309, #d97706)',
                          border: '1px solid #f59e0b',
                          color: '#ffffff',
                          fontSize: '0.78rem',
                          fontWeight: 900,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        <Swords size={14} />
                        <span>Abrir Duelo Direto com {student.name}</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* ABA 3: VISÃO GERAL DE PELOTÃO (RESUMO, MÉTRICAS & HISTÓRICO)              */}
        {/* ========================================================================= */}
        {activeTab === 'stats' && (
          <div>
            {/* CARDS RESUMO DO PELOTÃO */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.75rem',
              padding: '1rem',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              marginBottom: '1.5rem'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>MEMBROS DO PELOTÃO</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fbbf24', marginTop: '0.2rem' }}>
                  {sortedStudents.length} / 6 Alistados
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Atualizado às {lastSyncTime}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>DISPAROS / QUESTÕES</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', marginTop: '0.2rem' }}>
                  {totalPelotaoQuestions} questões
                </div>
                <div style={{ fontSize: '0.7rem', color: '#34d399' }}>{totalPelotaoCorrect} acertos combinados</div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>APROVEITAMENTO MÉDIO</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: averageCohortAccuracy >= 70 ? '#34d399' : '#f59e0b', marginTop: '0.2rem' }}>
                  {averageCohortAccuracy}%
                </div>
                <div style={{ fontSize: '0.7rem', color: averageCohortAccuracy >= 30 ? '#34d399' : '#f87171' }}>
                  {averageCohortAccuracy >= 30 ? '✅ Acima do corte PMPE' : '⚠️ Reforçar simulados'}
                </div>
              </div>
            </div>

            {/* LISTA GERAL DE DESEMPENHO */}
            <div style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <h4 style={{ margin: '0 0 1rem', fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                RANKING DE PONTARIA DO PELOTÃO:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {sortedStudents.map((st, i) => (
                  <div
                    key={st.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        background: i === 0 ? '#b45309' : 'rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        fontWeight: 900,
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {i + 1}
                      </span>
                      <strong style={{ color: '#ffffff' }}>{st.name}</strong>
                    </div>

                    <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem', fontWeight: 700 }}>
                      <span style={{ color: '#94a3b8' }}>{st.totalAnswered} resolvidas</span>
                      <span style={{ color: '#4ade80' }}>{st.totalCorrect} acertos</span>
                      <strong style={{ color: '#fbbf24' }}>{st.overallAccuracy}%</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
