import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Award,
  ArrowRight,
  ArrowLeft,
  X,
  Share2,
  Copy,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface SundaySimuladoModalProps {
  allQuestions: QuizQuestion[];
  userName: string;
  onClose: () => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

export const SundaySimuladoModal: React.FC<SundaySimuladoModalProps> = ({
  allQuestions,
  userName,
  onClose,
  onQuestionAnswered
}) => {
  // Monta o Simulado Oficial de Domingo com exatamente 60 questões balanceadas por matéria (estilo AOCP)
  const examQuestions = useMemo(() => {
    const pick = (catId: string, count: number) => {
      const filtered = allQuestions.filter(q => q.categoryId === catId);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const port = pick('portugues', 10);
    const hist = pick('historia_pe', 10);
    const rlm = pick('raciocinio', 10);
    const info = pick('informatica', 10);
    const consti = pick('constitucional', 10);
    const dh = pick('humanos_leis', 10);

    const full = [...port, ...hist, ...rlm, ...info, ...consti, ...dh];
    // Se faltou questão por filtro de matéria, completa com outras questões do edital
    if (full.length < 60) {
      const others = allQuestions.filter(q => !full.some(f => f.id === q.id));
      const needed = 60 - full.length;
      full.push(...others.slice(0, needed));
    }
    return full.slice(0, 60);
  }, [allQuestions]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(4 * 60 * 60); // 4 horas oficiais
  const [isCopied, setIsCopied] = useState(false);

  // Timer regressivo oficial de 4 horas
  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const currentQ = examQuestions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isFinished) return;
    sound.playClick();
    setAnswers(prev => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleFinishExam = () => {
    sound.playMilitaryAchievement();
    setIsFinished(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.4 },
      colors: ['#fbbf24', '#22c55e', '#3b82f6', '#f59e0b']
    });

    // Registra respostas para telemetria
    examQuestions.forEach((q, idx) => {
      const chosen = answers[idx];
      const isCorrect = chosen === q.correctIndex;
      onQuestionAnswered?.(isCorrect, isCorrect ? 30 : 0);
    });
  };

  // Cálculo do Resultado Oficial
  const results = useMemo(() => {
    let correctCount = 0;
    const subjectStats: Record<string, { total: number; correct: number }> = {};

    examQuestions.forEach((q, idx) => {
      const chosen = answers[idx];
      const isCorrect = chosen === q.correctIndex;
      if (isCorrect) correctCount++;

      const subj = q.materiaNome || 'Geral';
      if (!subjectStats[subj]) subjectStats[subj] = { total: 0, correct: 0 };
      subjectStats[subj].total++;
      if (isCorrect) subjectStats[subj].correct++;
    });

    const totalAnswered = Object.keys(answers).length;
    const scorePercentage = Math.round((correctCount / Math.max(1, examQuestions.length)) * 100);
    // Ponto de corte PMPE: mínimo 30 pontos de 60 e nenhuma matéria zerada
    const hasZeroedAny = Object.values(subjectStats).some(s => s.total > 0 && s.correct === 0);
    const isApproved = correctCount >= 30 && !hasZeroedAny;

    return {
      correctCount,
      totalQuestions: examQuestions.length,
      totalAnswered,
      scorePercentage,
      subjectStats,
      isApproved,
      hasZeroedAny
    };
  }, [examQuestions, answers]);

  const formatTimer = (totalSec: number) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  const generateReportText = () => {
    const dateStr = new Date().toLocaleDateString('pt-BR');
    let text = `📋 *[BOLETIM OFICIAL DO SIMULADO DE DOMINGO - PMPE 2026]*\n`;
    text += `👤 *Aluno:* ${userName}\n`;
    text += `📅 *Data:* ${dateStr}\n`;
    text += `🎯 *Pontuação Final:* ${results.correctCount}/${results.totalQuestions} acertos (${results.scorePercentage}%)\n`;
    text += `🛡️ *Status de Corte:* ${results.isApproved ? '✅ APROVADO NO PONTO DE CORTE' : '❌ REPROVADO (Abaixo de 30 ou matéria zerada)'}\n\n`;
    text += `📊 *Desempenho por Matéria:*\n`;

    for (const [subj, data] of Object.entries(results.subjectStats)) {
      text += `• ${subj}: ${data.correct}/${data.total} acertos\n`;
    }

    text += `\n*Apresentação ao Comandante Gean para a Reunião Dominical do Pelotão.*`;
    return text;
  };

  const handleCopyReport = () => {
    sound.playClick();
    navigator.clipboard.writeText(generateReportText());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.96)',
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
          maxWidth: '1080px',
          maxHeight: '94vh',
          background: 'linear-gradient(180deg, #0b1528 0%, #060b17 100%)',
          border: '2px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* BARRA SUPERIOR */}
        <div
          style={{
            padding: '1.15rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.35) 0%, rgba(10, 17, 32, 0.98) 100%)',
            borderBottom: '1px solid rgba(245, 158, 11, 0.35)',
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
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(245, 158, 11, 0.5)',
                color: '#ffffff'
              }}
            >
              <FileText size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  SIMULADO GERAL OFICIAL DE DOMINGO
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
                  60 QUESTÕES AOCP
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Espelho Fiel da Prova da PMPE • Laudo pronto para a Reunião Dominical com o Comandante Gean
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* TIMER REGRESSIVO */}
            {!isFinished && (
              <div
                style={{
                  background: secondsRemaining < 600 ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 58, 138, 0.35)',
                  border: secondsRemaining < 600 ? '1px solid #ef4444' : '1px solid rgba(59, 130, 246, 0.5)',
                  color: secondsRemaining < 600 ? '#fca5a5' : '#67e8f9',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <Clock size={16} />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            )}

            {!isFinished && (
              <button
                onClick={handleFinishExam}
                style={{
                  background: 'linear-gradient(135deg, #16a34a, #15803d)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '10px',
                  fontWeight: 900,
                  fontSize: '0.84rem',
                  cursor: 'pointer'
                }}
              >
                Entregar Simulado
              </button>
            )}

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
        </div>

        {/* CORPO DO SIMULADO */}
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
          {isFinished ? (
            /* ================= TELA DE RESULTADO & BOLETIM MILITAR ================= */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '20px',
                  background: results.isApproved
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.18) 0%, rgba(10, 17, 32, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.18) 0%, rgba(10, 17, 32, 0.95) 100%)',
                  border: results.isApproved ? '2px solid rgba(34, 197, 94, 0.6)' : '2px solid rgba(239, 68, 68, 0.6)',
                  boxShadow: results.isApproved ? '0 0 35px rgba(34, 197, 94, 0.25)' : '0 0 35px rgba(239, 68, 68, 0.25)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                  {results.isApproved ? '🎖️' : '⚠️'}
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    background: results.isApproved ? '#15803d' : '#991b1b',
                    color: '#ffffff',
                    padding: '0.25rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem'
                  }}
                >
                  {results.isApproved ? 'CLASSIFICADO NO PONTO DE CORTE' : 'ELIMINADO / ABAIXO DO PONTO DE CORTE'}
                </div>

                <h1 style={{ margin: 0, fontSize: '2.4rem', fontWeight: 900, color: '#ffffff' }}>
                  {results.correctCount}{' '}
                  <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>/ {results.totalQuestions} acertos</span>
                </h1>

                <div style={{ fontSize: '1rem', color: '#cbd5e1', marginTop: '0.35rem' }}>
                  Aproveitamento Global: <strong style={{ color: '#fbbf24' }}>{results.scorePercentage}%</strong>
                </div>

                {results.hasZeroedAny && (
                  <div style={{ color: '#fca5a5', fontSize: '0.84rem', marginTop: '0.5rem', fontWeight: 800 }}>
                    ⚠️ Você zerou uma das disciplinas. Conforme edital AOCP PMPE, o candidato não pode zerar nenhuma matéria.
                  </div>
                )}
              </div>

              {/* DETALHAMENTO POR MATÉRIA */}
              <div
                style={{
                  background: 'rgba(10, 17, 32, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.25rem'
                }}
              >
                <h3 style={{ margin: '0 0 1rem', fontSize: '1.1rem', color: '#ffffff', fontWeight: 900 }}>
                  Boletim por Disciplina do Edital
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                  {Object.entries(results.subjectStats).map(([subj, data]) => {
                    const pct = Math.round((data.correct / Math.max(1, data.total)) * 100);
                    const isZero = data.correct === 0;

                    return (
                      <div
                        key={subj}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: isZero ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '12px',
                          padding: '0.85rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>{subj}</div>
                          <div style={{ fontSize: '0.75rem', color: isZero ? '#f87171' : '#94a3b8' }}>
                            {data.correct} de {data.total} acertos ({pct}%)
                          </div>
                        </div>

                        <div
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: 900,
                            color: pct >= 70 ? '#4ade80' : pct >= 50 ? '#fbbf24' : '#f87171'
                          }}
                        >
                          {data.correct}/{data.total}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTÕES DE COMPARTILHAMENTO DO BOLETIM */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  onClick={handleCopyReport}
                  style={{
                    padding: '0.85rem 1.6rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Copy size={18} />
                  <span>{isCopied ? 'Boletim Copiado!' : 'Copiar Boletim Completo'}</span>
                </button>

                <button
                  onClick={onClose}
                  style={{
                    padding: '0.85rem 1.6rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#060b17',
                    fontWeight: 900,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Concluir e Voltar
                </button>
              </div>
            </div>
          ) : (
            /* ================= TELA DE RESOLUÇÃO DO SIMULADO ================= */
            <>
              {/* GRADE DE QUESTÕES 1 A 60 */}
              <div
                style={{
                  background: 'rgba(6, 11, 23, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '0.85rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  maxHeight: '120px',
                  overflowY: 'auto'
                }}
              >
                {examQuestions.map((_, idx) => {
                  const isCurrent = currentIdx === idx;
                  const isAnswered = typeof answers[idx] === 'number';

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playClick();
                        setCurrentIdx(idx);
                      }}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        background: isCurrent
                          ? '#f59e0b'
                          : isAnswered
                          ? 'rgba(34, 197, 94, 0.3)'
                          : 'rgba(255, 255, 255, 0.06)',
                        border: isCurrent
                          ? '2px solid #ffffff'
                          : isAnswered
                          ? '1px solid #22c55e'
                          : '1px solid rgba(255, 255, 255, 0.12)',
                        color: isCurrent ? '#060b17' : isAnswered ? '#86efac' : '#cbd5e1',
                        fontWeight: 900,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* CARD DA QUESTÃO ATUAL */}
              {currentQ && (
                <>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.65rem 1.15rem',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      color: '#93c5fd'
                    }}
                  >
                    <span>
                      Questão {currentIdx + 1} de 60 • <strong>{currentQ.materiaNome}</strong>
                    </span>
                    <span>
                      Respondidas: {Object.keys(answers).length}/60
                    </span>
                  </div>

                  <div
                    style={{
                      background: 'rgba(10, 17, 32, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '1.25rem',
                      fontSize: '1.02rem',
                      lineHeight: 1.6,
                      color: '#ffffff',
                      fontWeight: 600
                    }}
                  >
                    {currentQ.question}
                  </div>

                  {/* OPÇÕES */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {currentQ.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isChosen = answers[currentIdx] === optIdx;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          style={{
                            background: isChosen ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                            border: isChosen ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                            color: isChosen ? '#fef08a' : '#e2e8f0',
                            borderRadius: '12px',
                            padding: '0.9rem 1.15rem',
                            textAlign: 'left',
                            fontSize: '0.94rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.85rem',
                            cursor: 'pointer',
                            transition: 'all 0.15s'
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '8px',
                              background: isChosen ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)',
                              color: isChosen ? '#060b17' : '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 900,
                              flexShrink: 0
                            }}
                          >
                            {letter}
                          </div>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* NAVEGAÇÃO ANTERIOR / PRÓXIMO */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    <button
                      disabled={currentIdx === 0}
                      onClick={() => {
                        sound.playClick();
                        setCurrentIdx(prev => Math.max(0, prev - 1));
                      }}
                      style={{
                        padding: '0.65rem 1.25rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontWeight: 800,
                        cursor: currentIdx === 0 ? 'not-allowed' : 'pointer',
                        opacity: currentIdx === 0 ? 0.4 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <ArrowLeft size={16} />
                      <span>Anterior</span>
                    </button>

                    <button
                      disabled={currentIdx === examQuestions.length - 1}
                      onClick={() => {
                        sound.playClick();
                        setCurrentIdx(prev => Math.min(examQuestions.length - 1, prev + 1));
                      }}
                      style={{
                        padding: '0.65rem 1.25rem',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                        border: 'none',
                        color: '#ffffff',
                        fontWeight: 800,
                        cursor: currentIdx === examQuestions.length - 1 ? 'not-allowed' : 'pointer',
                        opacity: currentIdx === examQuestions.length - 1 ? 0.4 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <span>Próxima</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
