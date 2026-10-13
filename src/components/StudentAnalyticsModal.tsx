import React, { useState, useEffect } from 'react';
import { 
  X, 
  TrendingUp, 
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
  Share2, 
  Zap, 
  UserPlus,
  BookOpen
} from 'lucide-react';
import { 
  getAllStudents, 
  fetchCloudPelotao, 
  type StudentProfile 
} from '../utils/studentAnalytics';
import { sound } from '../utils/sound';

interface StudentAnalyticsModalProps {
  currentUserName: string;
  onClose: () => void;
}

export const StudentAnalyticsModal: React.FC<StudentAnalyticsModalProps> = ({
  currentUserName,
  onClose,
}) => {
  const [studentsMap, setStudentsMap] = useState<Record<string, StudentProfile>>(() => getAllStudents());
  const [isLoadingCloud, setIsLoadingCloud] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Agora');
  const [selectedStudentName, setSelectedStudentName] = useState<string>('all');
  const [cloudSynced, setCloudSynced] = useState(true);

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

  // Garante que o usuário logado está presente
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

  // Lista consolidada de membros (trazendo o usuário atual se não estiver na lista)
  const allKnownStudents: StudentProfile[] = studentsList.some(s => s.name.toLowerCase() === currentUserName.toLowerCase())
    ? studentsList
    : [currentStudent, ...studentsList];

  // Ordena com o usuário atual em primeiro, depois por mais questões respondidas
  const activeStudents = [...allKnownStudents].sort((a, b) => {
    if (a.name.toLowerCase() === currentUserName.toLowerCase()) return -1;
    if (b.name.toLowerCase() === currentUserName.toLowerCase()) return 1;
    return b.totalAnswered - a.totalAnswered;
  });

  // Estatísticas agregadas do trio/pelotão
  const totalPelotaoQuestions = activeStudents.reduce((acc, s) => acc + s.totalAnswered, 0);
  const totalPelotaoCorrect = activeStudents.reduce((acc, s) => acc + s.totalCorrect, 0);
  const averageCohortAccuracy = totalPelotaoQuestions > 0 ? Math.round((totalPelotaoCorrect / totalPelotaoQuestions) * 100) : 0;
  const topStudent = [...activeStudents].sort((a, b) => b.overallAccuracy - a.overallAccuracy)[0];

  const formatSecondsToMinutes = (seconds: number) => {
    if (!seconds || seconds <= 0) return '0 min';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        style={{
          maxWidth: '1000px',
          width: '95%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2rem',
          background: 'linear-gradient(180deg, #091124 0%, #040814 100%)',
          border: '1px solid rgba(6, 182, 212, 0.4)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(6, 182, 212, 0.2)',
          borderRadius: '24px'
        }}
      >
        {/* Header do Painel */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: '#38bdf8',
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                <Users size={14} />
                <span>Pelotão PMPE 2026 • Vinculação em Nuvem</span>
              </span>

              {/* Status da Nuvem em Tempo Real */}
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '20px',
                background: cloudSynced ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: `1px solid ${cloudSynced ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                color: cloudSynced ? '#34d399' : '#f87171',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                <Wifi size={12} />
                <span>{cloudSynced ? 'Nuvem Conectada (Ao Vivo)' : 'Nuvem Offline'}</span>
              </span>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Quadro de Evolução do Pelotão (Você & Colegas)
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '0.3rem 0 0' }}>
              Acompanhamento integrado de respostas, acertos, erros e tempos em tempo real — sem necessidade de senha dos colegas.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handleSyncCloud}
              disabled={isLoadingCloud}
              className="btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 0.9rem',
                fontSize: '0.82rem',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.12)',
                borderColor: 'rgba(6, 182, 212, 0.4)',
                color: '#38bdf8'
              }}
              title="Recarregar dados dos colegas da nuvem"
            >
              <RefreshCw size={14} className={isLoadingCloud ? 'animate-spin' : ''} />
              <span>{isLoadingCloud ? 'Sincronizando...' : 'Sincronizar Nuvem'}</span>
            </button>

            <button
              onClick={onClose}
              className="modal-close-btn"
              title="Fechar Relatório"
              style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '0.5rem' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resumo Rápido do Pelotão */}
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
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>MEMBROS VINCULADOS</div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#38bdf8', marginTop: '0.2rem' }}>
              {activeStudents.length} Guerreiro(s)
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Atualizado às {lastSyncTime}</div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>TOTAL RESOLVIDAS</div>
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

          {topStudent && (
            <div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>DESTAQUE DO PELOTÃO</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fbbf24', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Award size={16} color="#fbbf24" />
                <span>{topStudent.name}</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#fde047' }}>{topStudent.overallAccuracy}% de precisão</div>
            </div>
          )}
        </div>

        {/* Barra de Filtro de Visão (Geral ou por Aluno) */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          padding: '0.5rem',
          borderRadius: '14px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '1.5rem'
        }}>
          <button
            onClick={() => {
              sound.playClick();
              setSelectedStudentName('all');
            }}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '10px',
              border: selectedStudentName === 'all' ? '1px solid #06b6d4' : '1px solid transparent',
              background: selectedStudentName === 'all' ? 'linear-gradient(135deg, #0284c7, #06b6d4)' : 'transparent',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Users size={16} />
            <span>Comparativo Completo (Todos)</span>
          </button>

          {activeStudents.map((st) => {
            const isSelf = st.name.toLowerCase() === currentUserName.toLowerCase();
            return (
              <button
                key={st.name}
                onClick={() => {
                  sound.playClick();
                  setSelectedStudentName(st.name);
                }}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '10px',
                  border: selectedStudentName === st.name ? '1px solid #3b82f6' : '1px solid transparent',
                  background: selectedStudentName === st.name ? 'linear-gradient(135deg, #1d4ed8, #2563eb)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedStudentName === st.name ? '#ffffff' : '#cbd5e1',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <ShieldCheck size={16} color={selectedStudentName === st.name ? '#93c5fd' : '#64748b'} />
                <span>{st.name} {isSelf ? '(Você)' : ''}</span>
              </button>
            );
          })}
        </div>

        {/* SEÇÃO 1: CARDS DOS MEMBROS DO TRIO / PELOTÃO */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {activeStudents
            .filter((s) => selectedStudentName === 'all' || s.name === selectedStudentName)
            .map((student) => {
              const isCurrentUser = student.name.toLowerCase() === currentUserName.toLowerCase();
              return (
                <div
                  key={student.name}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '18px',
                    background: isCurrentUser ? 'rgba(6, 182, 212, 0.08)' : 'rgba(30, 41, 59, 0.55)',
                    border: isCurrentUser ? '1px solid rgba(6, 182, 212, 0.45)' : '1px solid rgba(71, 85, 105, 0.35)',
                    boxShadow: isCurrentUser ? '0 0 25px rgba(6, 182, 212, 0.18)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  {/* Cabeçalho do Card */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                          {student.name}
                        </span>
                        {isCurrentUser && (
                          <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.25)', color: '#38bdf8', fontWeight: 800 }}>
                            VOCÊ
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                        <Calendar size={12} />
                        <span>Última sessão: {new Date(student.lastLogin).toLocaleDateString('pt-BR')} às {new Date(student.lastLogin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>

                    <div style={{
                      textAlign: 'right',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '10px',
                      background: student.overallAccuracy >= 70 ? 'rgba(16, 185, 129, 0.2)' : student.overallAccuracy >= 30 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                      border: student.overallAccuracy >= 70 ? '1px solid #10b981' : student.overallAccuracy >= 30 ? '1px solid #f59e0b' : '1px solid #ef4444'
                    }}>
                      <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 800, color: student.overallAccuracy >= 70 ? '#34d399' : student.overallAccuracy >= 30 ? '#fde047' : '#f87171' }}>
                        Aproveitamento
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>
                        {student.overallAccuracy}%
                      </div>
                    </div>
                  </div>

                  {/* Estatísticas Numéricas: Respondidas, Acertos, Erros */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center' }}>
                    <div style={{ padding: '0.6rem 0.4rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>Respondidas</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.15rem' }}>
                        {student.totalAnswered}
                      </div>
                    </div>

                    <div style={{ padding: '0.6rem 0.4rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                        <CheckCircle size={12} />
                        <span>Acertos</span>
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399', marginTop: '0.15rem' }}>
                        {student.totalCorrect}
                      </div>
                    </div>

                    <div style={{ padding: '0.6rem 0.4rem', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#f87171', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                        <XCircle size={12} />
                        <span>Erros</span>
                      </div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f87171', marginTop: '0.15rem' }}>
                        {student.totalWrong}
                      </div>
                    </div>
                  </div>

                  {/* Informações de Tempo e Ritmo */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem',
                    padding: '0.6rem 0.75rem',
                    borderRadius: '12px',
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    fontSize: '0.78rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={14} color="#f59e0b" />
                      <div>
                        <div style={{ color: '#94a3b8' }}>Velocidade média:</div>
                        <strong style={{ color: '#fed7aa' }}>
                          {student.averageTimePerQuestion > 0 ? `${student.averageTimePerQuestion}s / questão` : 'Em análise'}
                        </strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Zap size={14} color="#06b6d4" />
                      <div>
                        <div style={{ color: '#94a3b8' }}>Tempo total:</div>
                        <strong style={{ color: '#a5f3fc' }}>
                          {formatSecondsToMinutes(student.totalTimeSpentSeconds || 0)}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Barra Visual de Proporção Acertos vs Erros */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                      <span>Proporção de Acertos</span>
                      <span>{student.totalCorrect} acertos / {student.totalWrong} erros</span>
                    </div>
                    <div style={{ height: '8px', borderRadius: '6px', background: 'rgba(239, 68, 68, 0.6)', overflow: 'hidden', display: 'flex' }}>
                      <div style={{
                        width: `${student.totalAnswered > 0 ? (student.totalCorrect / student.totalAnswered) * 100 : 0}%`,
                        background: 'linear-gradient(90deg, #10b981, #06b6d4)',
                        height: '100%',
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                </div>
              );
            })}

          {/* Dica para convidar os colegas caso o trio ainda não esteja completo */}
          {activeStudents.length < 3 && (
            <div style={{
              padding: '1.25rem',
              borderRadius: '18px',
              border: '2px dashed rgba(6, 182, 212, 0.35)',
              background: 'rgba(6, 182, 212, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: '0.75rem'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserPlus size={24} color="#38bdf8" />
              </div>
              <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1rem', fontWeight: 800 }}>
                Conectar Colegas ao Pelotão
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, maxWidth: '280px' }}>
                Basta seus colegas acessarem o mesmo link, digitarem o nome deles e a chave militar. As respostas deles aparecerão aqui automaticamente!
              </p>
              <div style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 700 }}>
                Sem precisar da senha deles • Sincronização 100% em Nuvem
              </div>
            </div>
          )}
        </div>

        {/* SEÇÃO 2: GRÁFICOS COMPARATIVOS VISUAIS DE BARRAS ENTRE OS COLEGAS */}
        <div style={{
          padding: '1.5rem',
          borderRadius: '20px',
          background: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BarChart3 size={20} color="#06b6d4" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Gráfico Comparativo de Questões & Acertos
              </h3>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              🟢 Verde: Acertos &nbsp;|&nbsp; 🔴 Vermelho: Erros
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {activeStudents.map((st) => {
              const isCurrentUser = st.name.toLowerCase() === currentUserName.toLowerCase();
              const answeredMax = Math.max(...activeStudents.map(s => s.totalAnswered), 10);
              const barWidth = Math.max(12, Math.min(100, (st.totalAnswered / answeredMax) * 100));

              return (
                <div key={st.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <strong style={{ color: isCurrentUser ? '#38bdf8' : '#ffffff' }}>
                        {st.name} {isCurrentUser ? '(Você)' : ''}
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        • {st.totalAnswered} questões resolvidas
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontWeight: 700 }}>
                      <span style={{ color: '#34d399' }}>✓ {st.totalCorrect} acertos ({st.overallAccuracy}%)</span>
                      <span style={{ color: '#f87171' }}>✗ {st.totalWrong} erros</span>
                      {st.averageTimePerQuestion > 0 && (
                        <span style={{ color: '#fbbf24' }}>⏱️ {st.averageTimePerQuestion}s/q</span>
                      )}
                    </div>
                  </div>

                  {/* Barra Dupla: Acertos (Verde) e Erros (Vermelho) */}
                  <div style={{
                    width: `${barWidth}%`,
                    height: '26px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.5s ease'
                  }}>
                    {st.totalAnswered > 0 ? (
                      <>
                        <div
                          style={{
                            width: `${(st.totalCorrect / st.totalAnswered) * 100}%`,
                            background: 'linear-gradient(90deg, #059669, #10b981)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            color: '#ffffff'
                          }}
                          title={`${st.totalCorrect} acertos`}
                        >
                          {st.totalCorrect > 0 ? `${st.totalCorrect} acertos` : ''}
                        </div>
                        <div
                          style={{
                            width: `${(st.totalWrong / st.totalAnswered) * 100}%`,
                            background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            color: '#ffffff'
                          }}
                          title={`${st.totalWrong} erros`}
                        >
                          {st.totalWrong > 0 ? `${st.totalWrong} erros` : ''}
                        </div>
                      </>
                    ) : (
                      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#64748b' }}>
                        Aguardando resolução do 1º simulado
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEÇÃO 3: HISTÓRICO DAS ÚLTIMAS SESSÕES */}
        <div style={{
          padding: '1.5rem',
          borderRadius: '20px',
          background: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} color="#38bdf8" />
            <span>Últimos Simulados Concluídos no Pelotão</span>
          </h3>

          {(() => {
            const allSessions = activeStudents
              .filter((s) => selectedStudentName === 'all' || s.name === selectedStudentName)
              .flatMap((s) => s.sessions.map((sess) => ({ ...sess, studentName: s.name })))
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            if (allSessions.length === 0) {
              return (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
                  🛡️ Nenhum simulado registrado nesta visualização ainda. Complete um simulado no modo Quiz para registrar o primeiro relatório!
                </div>
              );
            }

            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {allSessions.slice(0, 15).map((sess) => (
                  <div
                    key={sess.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.85rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ fontWeight: 800, color: sess.studentName.toLowerCase() === currentUserName.toLowerCase() ? '#38bdf8' : '#a5f3fc' }}>
                        {sess.studentName}
                      </span>
                      <span style={{ color: '#94a3b8' }}>• {sess.simuladoName}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({sess.formattedDate})</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      {sess.timeSpentSeconds > 0 && (
                        <span style={{ color: '#fbbf24', fontSize: '0.8rem' }}>
                          ⏱️ {formatSecondsToMinutes(sess.timeSpentSeconds)} ({sess.averageTimePerQuestion || 0}s/q)
                        </span>
                      )}

                      <span style={{ color: '#34d399', fontWeight: 700 }}>
                        {sess.correctAnswers} / {sess.totalAnswered} acertos
                      </span>

                      <span style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '8px',
                        background: sess.accuracy >= 70 ? 'rgba(16, 185, 129, 0.2)' : sess.accuracy >= 30 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: sess.accuracy >= 70 ? '#34d399' : sess.accuracy >= 30 ? '#fde047' : '#f87171',
                        fontWeight: 800,
                        fontSize: '0.75rem'
                      }}>
                        {sess.accuracy}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
