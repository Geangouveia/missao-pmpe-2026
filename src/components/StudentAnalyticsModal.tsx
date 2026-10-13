import React, { useState } from 'react';
import { X, TrendingUp, Users, CheckCircle, XCircle, Award, Target, Calendar, BarChart3, ShieldCheck } from 'lucide-react';
import { getAllStudents, type StudentProfile } from '../utils/studentAnalytics';
import { sound } from '../utils/sound';

interface StudentAnalyticsModalProps {
  currentUserName: string;
  onClose: () => void;
}

export const StudentAnalyticsModal: React.FC<StudentAnalyticsModalProps> = ({
  currentUserName,
  onClose,
}) => {
  const studentsMap = getAllStudents();
  const studentsList: StudentProfile[] = Object.values(studentsMap);

  // Se a lista estiver vazia ou com apenas o usuário atual sem dados, preparamos uma visualização inicial sólida
  const [selectedStudentName, setSelectedStudentName] = useState<string>('all');

  const activeStudents = studentsList.length > 0 ? studentsList : [
    {
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
      sessions: [],
      subjectStats: {}
    }
  ];

  // Identifica o aluno com maior acurácia
  const topStudent = [...activeStudents].sort((a, b) => b.overallAccuracy - a.overallAccuracy)[0];

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        style={{
          maxWidth: '960px',
          width: '95%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          background: 'linear-gradient(180deg, #0b1329 0%, #060a17 100%)',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(6, 182, 212, 0.15)',
          borderRadius: '24px'
        }}
      >
        {/* Header do Modal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem'
            }}>
              <TrendingUp size={14} />
              <span>Painel do Pelotão • Desempenho & Evolução</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
              Quadro de Acompanhamento dos Alunos
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', margin: '0.25rem 0 0' }}>
              Compare questões respondidas, acertos, erros e aproveitamento por disciplina para alavancar a aprovação mútua.
            </p>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            title="Fechar Relatório"
            style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '0.5rem' }}
          >
            <X size={20} />
          </button>
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
          marginBottom: '1.75rem'
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
            <span>Comparativo Geral (Todos)</span>
          </button>

          {activeStudents.map((st) => (
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
              <span>{st.name}</span>
            </button>
          ))}
        </div>

        {/* SEÇÃO 1: CARDS DOS ALUNOS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                    background: isCurrentUser ? 'rgba(6, 182, 212, 0.08)' : 'rgba(30, 41, 59, 0.5)',
                    border: isCurrentUser ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(71, 85, 105, 0.3)',
                    boxShadow: isCurrentUser ? '0 0 20px rgba(6, 182, 212, 0.15)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  {/* Cabeçalho do Card do Aluno */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                          {student.name}
                        </span>
                        {isCurrentUser && (
                          <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontWeight: 700 }}>
                            VOCÊ
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                        <Calendar size={12} />
                        <span>Último acesso: {new Date(student.lastLogin).toLocaleDateString('pt-BR')}</span>
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
                      <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                        {student.overallAccuracy}%
                      </div>
                    </div>
                  </div>

                  {/* Estatísticas em Números */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center' }}>
                    <div style={{ padding: '0.6rem 0.4rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>Respondidas</div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.15rem' }}>
                        {student.totalAnswered}
                      </div>
                    </div>

                    <div style={{ padding: '0.6rem 0.4rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                        <CheckCircle size={12} />
                        <span>Acertos</span>
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#34d399', marginTop: '0.15rem' }}>
                        {student.totalCorrect}
                      </div>
                    </div>

                    <div style={{ padding: '0.6rem 0.4rem', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#f87171', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                        <XCircle size={12} />
                        <span>Erros</span>
                      </div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f87171', marginTop: '0.15rem' }}>
                        {student.totalWrong}
                      </div>
                    </div>
                  </div>

                  {/* Barra Visual de Acertos vs Erros */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.35rem' }}>
                      <span>Proporção Acerto/Erro</span>
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
        </div>

        {/* SEÇÃO 2: GRÁFICO COMPARATIVO VISUAL DE BARRAS ENTRE ALUNOS */}
        <div style={{
          padding: '1.5rem',
          borderRadius: '20px',
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <BarChart3 size={20} color="#06b6d4" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Gráfico Comparativo de Desempenho
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {activeStudents.map((st) => {
              const answeredMax = Math.max(...activeStudents.map(s => s.totalAnswered), 10);
              const barWidth = Math.max(10, Math.min(100, (st.totalAnswered / answeredMax) * 100));

              return (
                <div key={st.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <strong style={{ color: '#ffffff' }}>{st.name}</strong>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        ({st.totalAnswered} questões respondidas)
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontWeight: 700 }}>
                      <span style={{ color: '#34d399' }}>✓ {st.totalCorrect} acertos ({st.overallAccuracy}%)</span>
                      <span style={{ color: '#f87171' }}>✗ {st.totalWrong} erros</span>
                    </div>
                  </div>

                  {/* Barra Dupla: Acertos (Verde) e Erros (Vermelho) */}
                  <div style={{
                    width: `${barWidth}%`,
                    height: '24px',
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
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: '#ffffff'
                          }}
                          title={`${st.totalCorrect} acertos`}
                        >
                          {st.totalCorrect > 0 ? `${st.totalCorrect} V` : ''}
                        </div>
                        <div
                          style={{
                            width: `${(st.totalWrong / st.totalAnswered) * 100}%`,
                            background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            color: '#ffffff'
                          }}
                          title={`${st.totalWrong} erros`}
                        >
                          {st.totalWrong > 0 ? `${st.totalWrong} X` : ''}
                        </div>
                      </>
                    ) : (
                      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#64748b' }}>
                        Nenhum simulado finalizado ainda
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
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            Histórico de Simulados Concluídos
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
                {allSessions.slice(0, 10).map((sess) => (
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
                      <span style={{ fontWeight: 800, color: '#38bdf8' }}>{sess.studentName}</span>
                      <span style={{ color: '#94a3b8' }}>• {sess.simuladoName}</span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>({sess.formattedDate})</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
