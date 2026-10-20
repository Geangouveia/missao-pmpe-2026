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
  Send,
  Volume2,
  VolumeX,
  Printer,
  Eye,
  CheckSquare,
  HelpCircle,
  TrendingUp,
  LayoutGrid,
  BookOpen
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { sound } from '../utils/sound';
import { speakQuestion, stopSpeaking } from '../utils/speechNarrator';
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
  // Monta o Simulado Oficial com exatamente 60 questões balanceadas nas proporções exatas do Edital AOCP
  const examQuestions = useMemo(() => {
    const pick = (catId: string, count: number) => {
      const filtered = allQuestions.filter((q) => q.categoryId === catId);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    // 10 por matéria conforme edital AOCP Soldado PMPE
    const port = pick('portugues', 10);
    const rlm = pick('raciocinio', 10);
    const hist = pick('historia_pe', 10);
    const info = pick('informatica', 10);
    const consti = pick('constitucional', 10);
    const dh = pick('humanos_leis', 10);

    const full = [...port, ...rlm, ...hist, ...info, ...consti, ...dh];
    // Se faltou questão por filtro de matéria, completa com outras questões do edital
    if (full.length < 60) {
      const others = allQuestions.filter((q) => !full.some((f) => f.id === q.id));
      const needed = 60 - full.length;
      full.push(...others.slice(0, needed));
    }
    return full.slice(0, 60);
  }, [allQuestions]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(4 * 60 * 60); // 4 horas cravadas (14.400 segundos)
  const [isCopied, setIsCopied] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const [activeTab, setActiveTab] = useState<'caderno' | 'cartao'>('caderno');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');

  // Timer regressivo cravado em 4 horas (sem pausar, conforme regras reais de concurso)
  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
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

  // Cancela áudio ao desmontar ou trocar de questão
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    if (isNarrating) {
      stopSpeaking();
      setIsNarrating(false);
    }
  }, [currentIdx]);

  const currentQ = examQuestions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    if (isFinished) return;
    sound.playClick();
    setAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleToggleAudio = () => {
    if (!currentQ) return;
    if (isNarrating) {
      stopSpeaking();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      speakQuestion(currentQ.question, currentQ.options, {
        onStart: () => setIsNarrating(true),
        onEnd: () => setIsNarrating(false),
        onError: () => setIsNarrating(false)
      });
    }
  };

  const handleFinishExam = () => {
    stopSpeaking();
    setIsNarrating(false);
    sound.playMilitaryAchievement();
    setIsFinished(true);

    confetti({
      particleCount: 130,
      spread: 85,
      origin: { y: 0.4 },
      colors: ['#fbbf24', '#22c55e', '#3b82f6', '#f59e0b', '#dc2626']
    });

    // Registra respostas para telemetria
    examQuestions.forEach((q, idx) => {
      const chosen = answers[idx];
      const isCorrect = chosen === q.correctIndex;
      onQuestionAnswered?.(isCorrect, isCorrect ? 30 : 0);
    });
  };

  // Cálculo do Resultado Oficial e Nota de Corte Estimada
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
    // Regra AOCP PMPE: Mínimo 30 pontos e não zerar nenhuma disciplina
    const hasZeroedAny = Object.values(subjectStats).some((s) => s.total > 0 && s.correct === 0);
    const isApprovedMinimo = correctCount >= 30 && !hasZeroedAny;

    // Projeção Estatística de Nota de Corte baseada nos concursos anteriores da PMPE (2024 / 2018)
    let cutoffTier: {
      status: string;
      color: string;
      bg: string;
      text: string;
      projection: string;
    };

    if (hasZeroedAny) {
      cutoffTier = {
        status: 'ELIMINADO POR MATÉRIA ZERADA',
        color: '#f87171',
        bg: 'rgba(239, 68, 68, 0.2)',
        text: 'O edital da PMPE elimina sumariamente candidatos com pontuação zero em qualquer disciplina.',
        projection: 'Risco Crítico • Reforçar urgentemente a matéria zerada.'
      };
    } else if (correctCount >= 46) {
      cutoffTier = {
        status: '🏆 DENTRO DAS VAGAS DIRETAS (EXCELÊNCIA)',
        color: '#4ade80',
        bg: 'rgba(34, 197, 94, 0.2)',
        text: 'Pontuação de elite (≥76%). Histórico de convocação direta nas primeiras turmas do CFSD.',
        projection: 'Ampla Concorrência • Vaga Direta com altíssima probabilidade!'
      };
    } else if (correctCount >= 41) {
      cutoffTier = {
        status: '🎯 ZONA SEGURA DE CONVOCAÇÃO PRO TAF',
        color: '#fbbf24',
        bg: 'rgba(245, 158, 11, 0.2)',
        text: 'Nota compatível com o corte histórico da ampla concorrência PMPE 2024 (cerca de 42-44 pontos).',
        projection: 'Classificado para correção de redação e convocação pro TAF!'
      };
    } else if (correctCount >= 35) {
      cutoffTier = {
        status: '⚠️ ZONA DE RISCO / LISTA DE ESPERA',
        color: '#f97316',
        bg: 'rgba(249, 115, 22, 0.2)',
        text: 'Atingiu os critérios mínimos do edital, porém abaixo da nota de corte média para ampla concorrência.',
        projection: 'Pode alcançar vaga em cotas ou cadastro de reserva caso a prova venha muito difícil.'
      };
    } else {
      cutoffTier = {
        status: '❌ ABAIXO DO PONTO DE CORTE',
        color: '#ef4444',
        bg: 'rgba(239, 68, 68, 0.2)',
        text: 'Pontuação insuficiente para concorrer às vagas reais da PMPE. Intensifique os simulados diários!',
        projection: 'Necessário elevar pelo menos +12 acertos para alcançar a nota de corte.'
      };
    }

    return {
      correctCount,
      totalQuestions: examQuestions.length,
      totalAnswered,
      scorePercentage,
      subjectStats,
      isApprovedMinimo,
      hasZeroedAny,
      cutoffTier
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
    text += `🛡️ *Projeção de Corte:* ${results.cutoffTier.status}\n`;
    text += `⏱️ *Tempo Restante:* ${formatTimer(secondsRemaining)}\n\n`;
    text += `📊 *Desempenho por Disciplina:*\n`;

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

  // Gerador de Prova Impressa A4 para treino no papel com caneta preta
  const handlePrintPaperExam = () => {
    sound.playLevelUp();
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Por favor, autorize pop-ups para imprimir o simulado!');
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Simulado Oficial PMPE 2026 - 60 Questões AOCP</title>
        <style>
          @page { size: A4; margin: 12mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.4; font-size: 10pt; margin: 0; }
          .header { border: 2px solid #000; padding: 10px; margin-bottom: 15px; text-align: center; background: #f8fafc; }
          .header h1 { margin: 0; font-size: 13pt; text-transform: uppercase; font-weight: 900; }
          .header h2 { margin: 3px 0 0; font-size: 10pt; color: #15803d; }
          .instructions { border: 1px dashed #666; padding: 8px 12px; margin-bottom: 15px; font-size: 8.5pt; background: #fffbeb; }
          .columns { column-count: 2; column-gap: 20px; }
          .q-item { break-inside: avoid; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px dotted #ccc; }
          .q-num { font-weight: 900; color: #000; }
          .q-text { margin: 4px 0 6px; text-align: justify; }
          .opt { margin: 2px 0 2px 14px; }
          .answer-card { page-break-before: always; text-align: center; margin-top: 20px; }
          .grid-bubbles { display: grid; grid-template-columns: repeat(10, 1fr); gap: 6px; max-width: 650px; margin: 20px auto; }
          .bubble-row { border: 1px solid #999; padding: 4px; border-radius: 4px; font-size: 8pt; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>POLÍCIA MILITAR DE PERNAMBUCO • EDITAL 2026</h1>
          <h2>CADERNO FECHADO DE QUESTÕES — PADRÃO INSTITUTO AOCP (60 QUESTÕES)</h2>
          <div style="margin-top: 6px; font-size: 8.5pt;">Candidato: ____________________________________ | Data: ____/____/2026 | Duração: 4h00</div>
        </div>
        <div class="instructions">
          <strong>INSTRUÇÕES OPERACIONAIS:</strong> Treine com caneta esferográfica de tinta preta em tubo transparente. Não é permitido consulta. Controle rigidamente o tempo de 4 horas.
        </div>
        <div class="columns">
          ${examQuestions
            .map(
              (q, idx) => `
            <div class="q-item">
              <span class="q-num">QUESTÃO ${idx + 1} (${q.materiaNome || 'Geral'})</span>
              <div class="q-text">${q.question}</div>
              ${q.options
                .map(
                  (opt, oIdx) => `
                <div class="opt">
                  <strong>(${String.fromCharCode(65 + oIdx)})</strong> ${opt}
                </div>
              `
                )
                .join('')}
            </div>
          `
            )
            .join('')}
        </div>
        <div class="answer-card">
          <h2>CARTÃO-RESPOSTA OFICIAL • FOLHA ÓPTICA PMPE</h2>
          <p style="font-size: 9pt;">Preencha completamente a bolha correspondente à opção escolhida:</p>
          <div class="grid-bubbles">
            ${examQuestions
              .map(
                (_, idx) => `
              <div class="bubble-row">
                <strong>Q${idx + 1}:</strong> [A] [B] [C] [D] [E]
              </div>
            `
              )
              .join('')}
          </div>
          <div style="margin-top: 30px; border-top: 1px solid #000; display: inline-block; padding: 4px 60px; font-size: 9pt;">
            Assinatura do Candidato
          </div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
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
          maxWidth: '1100px',
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
                  SIMULADO OFICIAL CRONOMETRADO (AOCP PMPE)
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
                  60 QUESTÕES • 4H
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Espelho Fiel da Prova da PMPE • Gabarito Oculto até a entrega • Nota de Corte Estimada
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            {/* BOTÃO DE IMPRESSÃO EM PAPEL */}
            <button
              onClick={handlePrintPaperExam}
              title="Gerar PDF em 2 Colunas para Treino Impresso"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#e2e8f0',
                padding: '0.45rem 0.85rem',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Printer size={15} />
              <span>Imprimir Simulado</span>
            </button>

            {/* TIMER REGRESSIVO */}
            {!isFinished && (
              <div
                style={{
                  background: secondsRemaining < 1800 ? 'rgba(239, 68, 68, 0.25)' : 'rgba(30, 58, 138, 0.35)',
                  border: secondsRemaining < 1800 ? '1px solid #ef4444' : '1px solid rgba(59, 130, 246, 0.5)',
                  color: secondsRemaining < 1800 ? '#fca5a5' : '#67e8f9',
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
                Entregar Cartão-Resposta
              </button>
            )}

            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
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

        {/* NAVEGAÇÃO DE ABAS (CADERNO VS CARTÃO-RESPOSTA VIRTUAL) */}
        {!isFinished && (
          <div
            style={{
              padding: '0.65rem 1.5rem',
              background: 'rgba(5, 9, 18, 0.9)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('caderno');
                }}
                style={{
                  background: activeTab === 'caderno' ? '#f59e0b' : 'rgba(255, 255, 255, 0.06)',
                  color: activeTab === 'caderno' ? '#060b17' : '#cbd5e1',
                  border: 'none',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <BookOpen size={15} />
                <span>Caderno de Questões</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('cartao');
                }}
                style={{
                  background: activeTab === 'cartao' ? '#f59e0b' : 'rgba(255, 255, 255, 0.06)',
                  color: activeTab === 'cartao' ? '#060b17' : '#cbd5e1',
                  border: 'none',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <LayoutGrid size={15} />
                <span>Cartão-Resposta Virtual (Folha de Bolinhas)</span>
                <span
                  style={{
                    background: activeTab === 'cartao' ? '#060b17' : 'rgba(245, 158, 11, 0.25)',
                    color: activeTab === 'cartao' ? '#fbbf24' : '#fbbf24',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '10px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  {Object.keys(answers).length}/60
                </span>
              </button>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              🔒 <strong style={{ color: '#fbbf24' }}>Gabarito Oculto:</strong> Explicações e respostas liberadas somente ao entregar.
            </div>
          </div>
        )}

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
              {/* PLACAR E NOTA DE CORTE ESTIMADA */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '20px',
                  background: results.isApprovedMinimo
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.18) 0%, rgba(10, 17, 32, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.18) 0%, rgba(10, 17, 32, 0.95) 100%)',
                  border: results.isApprovedMinimo ? '2px solid rgba(34, 197, 94, 0.6)' : '2px solid rgba(239, 68, 68, 0.6)',
                  boxShadow: results.isApprovedMinimo ? '0 0 35px rgba(34, 197, 94, 0.25)' : '0 0 35px rgba(239, 68, 68, 0.25)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                  {results.isApprovedMinimo ? '🎖️' : '⚠️'}
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    background: results.cutoffTier.bg,
                    border: `1px solid ${results.cutoffTier.color}`,
                    color: results.cutoffTier.color,
                    padding: '0.35rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem'
                  }}
                >
                  {results.cutoffTier.status}
                </div>

                <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 900, color: '#ffffff' }}>
                  {results.correctCount}{' '}
                  <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>/ {results.totalQuestions} acertos</span>
                </h1>

                <div style={{ fontSize: '1.05rem', color: '#cbd5e1', marginTop: '0.35rem' }}>
                  Aproveitamento Global: <strong style={{ color: '#fbbf24' }}>{results.scorePercentage}%</strong> • Tempo:{' '}
                  <strong style={{ color: '#67e8f9' }}>{formatTimer(4 * 3600 - secondsRemaining)}</strong>
                </div>

                {/* PARECER PROJETIVO DE NOTA DE CORTE */}
                <div
                  style={{
                    marginTop: '1rem',
                    background: 'rgba(0, 0, 0, 0.35)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '0.85rem 1.25rem',
                    maxWidth: '680px',
                    margin: '1rem auto 0',
                    fontSize: '0.88rem',
                    color: '#e2e8f0',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontWeight: 800, color: results.cutoffTier.color, marginBottom: '0.25rem' }}>
                    📈 Projeção Estatística PMPE 2026:
                  </div>
                  <div>{results.cutoffTier.text}</div>
                  <div style={{ marginTop: '0.35rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                    <strong style={{ color: '#fbbf24' }}>Veredito Operacional: </strong>
                    {results.cutoffTier.projection}
                  </div>
                </div>
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

              {/* REVISÃO COMPLETA QUESTÃO POR QUESTÃO COM GABARITO COMENTADO */}
              <div
                style={{
                  background: 'rgba(8, 12, 22, 0.95)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Eye size={20} color="#fbbf24" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff', fontWeight: 900 }}>
                      Gabarito Oficial Comentado (Revisão das 60 Questões)
                    </h3>
                  </div>

                  {/* Filtro de Revisão */}
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <button
                      onClick={() => setReviewFilter('all')}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        background: reviewFilter === 'all' ? '#f59e0b' : 'rgba(255,255,255,0.08)',
                        color: reviewFilter === 'all' ? '#060b17' : '#cbd5e1',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Todas (60)
                    </button>
                    <button
                      onClick={() => setReviewFilter('wrong')}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        background: reviewFilter === 'wrong' ? '#ef4444' : 'rgba(255,255,255,0.08)',
                        color: reviewFilter === 'wrong' ? '#ffffff' : '#fca5a5',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Apenas Erros ({60 - results.correctCount})
                    </button>
                    <button
                      onClick={() => setReviewFilter('correct')}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        background: reviewFilter === 'correct' ? '#22c55e' : 'rgba(255,255,255,0.08)',
                        color: reviewFilter === 'correct' ? '#060b17' : '#86efac',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Apenas Acertos ({results.correctCount})
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {examQuestions.map((q, idx) => {
                    const chosen = answers[idx];
                    const isCorrect = chosen === q.correctIndex;
                    const isSkipped = typeof chosen !== 'number';

                    if (reviewFilter === 'wrong' && isCorrect) return null;
                    if (reviewFilter === 'correct' && !isCorrect) return null;

                    return (
                      <div
                        key={q.id || idx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: isCorrect
                            ? '1px solid rgba(34, 197, 94, 0.35)'
                            : '1px solid rgba(239, 68, 68, 0.45)',
                          borderRadius: '12px',
                          padding: '1rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.6rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#fbbf24' }}>
                            Questão {idx + 1} • {q.materiaNome}
                          </span>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 900,
                              padding: '0.15rem 0.55rem',
                              borderRadius: '6px',
                              background: isCorrect ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                              color: isCorrect ? '#4ade80' : '#f87171'
                            }}
                          >
                            {isCorrect ? '✓ ACERTOU' : isSkipped ? '⚪ NÃO MARCADA' : '✗ ERROU'}
                          </span>
                        </div>

                        <div style={{ fontSize: '0.95rem', color: '#ffffff', lineHeight: 1.5 }}>
                          {q.question}
                        </div>

                        {/* Alternativas com indicação da correta e marcada */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          {q.options.map((opt, oIdx) => {
                            const isThisCorrect = oIdx === q.correctIndex;
                            const isThisChosen = oIdx === chosen;
                            const letter = String.fromCharCode(65 + oIdx);

                            let optBorder = 'rgba(255, 255, 255, 0.08)';
                            let optBg = 'transparent';
                            let optColor = '#cbd5e1';

                            if (isThisCorrect) {
                              optBorder = '#22c55e';
                              optBg = 'rgba(34, 197, 94, 0.15)';
                              optColor = '#86efac';
                            } else if (isThisChosen && !isThisCorrect) {
                              optBorder = '#ef4444';
                              optBg = 'rgba(239, 68, 68, 0.15)';
                              optColor = '#fca5a5';
                            }

                            return (
                              <div
                                key={oIdx}
                                style={{
                                  border: `1px solid ${optBorder}`,
                                  background: optBg,
                                  color: optColor,
                                  borderRadius: '8px',
                                  padding: '0.45rem 0.75rem',
                                  fontSize: '0.85rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem'
                                }}
                              >
                                <strong>({letter})</strong>
                                <span>{opt}</span>
                                {isThisCorrect && <span style={{ marginLeft: 'auto', fontWeight: 900 }}>[GABARITO OFICIAL]</span>}
                                {isThisChosen && !isThisCorrect && <span style={{ marginLeft: 'auto', fontWeight: 900 }}>[SUA RESPOSTA]</span>}
                              </div>
                            );
                          })}
                        </div>

                        {/* Explicação da Banca */}
                        {q.explanation && (
                          <div
                            style={{
                              background: 'rgba(245, 158, 11, 0.08)',
                              borderLeft: '3px solid #f59e0b',
                              padding: '0.65rem 0.85rem',
                              borderRadius: '0 8px 8px 0',
                              fontSize: '0.82rem',
                              color: '#fef3c7',
                              lineHeight: 1.5
                            }}
                          >
                            <strong style={{ color: '#fbbf24' }}>Comentário da Banca AOCP: </strong>
                            {q.explanation}
                          </div>
                        )}
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
                  onClick={() => {
                    stopSpeaking();
                    onClose();
                  }}
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
          ) : activeTab === 'cartao' ? (
            /* ================= CARTÃO-RESPOSTA VIRTUAL (BOLINHAS ÓPTICAS) ================= */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '12px',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: '#fef08a', fontSize: '0.95rem' }}>
                    Cartão Óptico Oficial de Respostas (Simulação Real da Prova)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                    Clique diretamente nas bolinhas para marcar a alternativa ou clique no número da questão para lê-la.
                  </div>
                </div>

                <div style={{ fontSize: '0.9rem', fontWeight: 900, color: '#4ade80' }}>
                  {Object.keys(answers).length} de 60 preenchidas
                </div>
              </div>

              {/* GRADE DE BOLINHAS (COLUNAS DE QUESTÕES) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0.75rem',
                  maxHeight: '62vh',
                  overflowY: 'auto',
                  paddingRight: '0.35rem'
                }}
              >
                {examQuestions.map((q, idx) => {
                  const isCurrent = currentIdx === idx;
                  const chosenOpt = answers[idx];

                  return (
                    <div
                      key={idx}
                      style={{
                        background: isCurrent ? 'rgba(245, 158, 11, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isCurrent ? '1.5px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '10px',
                        padding: '0.55rem 0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <button
                        onClick={() => {
                          sound.playClick();
                          setCurrentIdx(idx);
                          setActiveTab('caderno');
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: isCurrent ? '#fbbf24' : '#e2e8f0',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        Q{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}{' '}
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                          ({q.materiaNome?.slice(0, 10)})
                        </span>
                      </button>

                      {/* 5 BOLINHAS ÓPTICAS (A, B, C, D, E) */}
                      <div style={{ display: 'flex', gap: '0.35rem' }}>
                        {[0, 1, 2, 3, 4].map((optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isMarked = chosenOpt === optIdx;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                sound.playClick();
                                setAnswers((prev) => ({ ...prev, [idx]: optIdx }));
                              }}
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: isMarked ? '#22c55e' : 'rgba(255, 255, 255, 0.06)',
                                border: isMarked ? '2px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.2)',
                                color: isMarked ? '#060b17' : '#cbd5e1',
                                fontWeight: 900,
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.15s'
                              }}
                              title={`Marcar opção (${letter}) para Questão ${idx + 1}`}
                            >
                              {letter}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveTab('caderno');
                  }}
                  style={{
                    padding: '0.65rem 1.5rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Voltar ao Caderno de Questões
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
                  maxHeight: '110px',
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
                      color: '#93c5fd',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <span>
                      Questão {currentIdx + 1} de 60 • <strong>{currentQ.materiaNome}</strong>
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {/* BOTÃO DO NARRADOR DE VOZ */}
                      <button
                        onClick={handleToggleAudio}
                        style={{
                          background: isNarrating ? 'rgba(239, 68, 68, 0.25)' : 'rgba(245, 158, 11, 0.2)',
                          border: isNarrating ? '1px solid #ef4444' : '1px solid #f59e0b',
                          color: isNarrating ? '#fca5a5' : '#fbbf24',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          cursor: 'pointer'
                        }}
                      >
                        {isNarrating ? <VolumeX size={15} /> : <Volume2 size={15} />}
                        <span>{isNarrating ? 'Parar Leitura' : 'Ouvir Questão'}</span>
                      </button>

                      <span>Respondidas: {Object.keys(answers).length}/60</span>
                    </div>
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
                        setCurrentIdx((prev) => Math.max(0, prev - 1));
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
                        setCurrentIdx((prev) => Math.min(examQuestions.length - 1, prev + 1));
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
