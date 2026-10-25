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
  BookOpen,
  Check,
  ChevronRight,
  ChevronLeft,
  Compass,
  Target
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { sound } from '../utils/sound';
import { haptics } from '../utils/haptics';
import { speakQuestion, stopSpeaking } from '../utils/speechNarrator';
import confetti from 'canvas-confetti';

interface SundaySimuladoModalProps {
  allQuestions: QuizQuestion[];
  userName: string;
  onClose: () => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

// 6 Disciplinas Oficiais do Edital AOCP PMPE (10 questões cada = 60 questões)
const SIMULADO_DISCIPLINES = [
  { id: 'portugues', name: 'Língua Portuguesa', shortName: 'Português', range: [0, 9], bloco: 'Bloco I' },
  { id: 'raciocinio', name: 'Raciocínio Lógico (RLM)', shortName: 'RLM', range: [10, 19], bloco: 'Bloco II' },
  { id: 'historia_pe', name: 'História de Pernambuco', shortName: 'História PE', range: [20, 29], bloco: 'Bloco I' },
  { id: 'informatica', name: 'Noções de Informática', shortName: 'Informática', range: [30, 39], bloco: 'Bloco II' },
  { id: 'constitucional', name: 'Direito Constitucional', shortName: 'Constitucional', range: [40, 49], bloco: 'Bloco III' },
  { id: 'humanos_leis', name: 'Direitos Humanos & Legislação', shortName: 'Humanos/Leis', range: [50, 59], bloco: 'Bloco III' }
];

// Limpeza tática do enunciado: remove marcadores internos [Simulado PMPE AOCP - Questão 119] que poluem a tela
function cleanQuestionText(text: string): string {
  if (!text) return '';
  return text
    .replace(/^\[(?:Simulado|AOCP|PMPE|Questão|Q\d+)[^\]]*\]\s*/gi, '')
    .replace(/^\[.*?\]\s*/, '')
    .trim();
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

  const questionTrackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll da régua de questões para manter a questão atual sempre visível e centralizada
  useEffect(() => {
    if (questionTrackRef.current) {
      const activeBtn = questionTrackRef.current.children[currentIdx] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIdx]);

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

  // Identifica a disciplina atual
  const currentDiscipline = useMemo(() => {
    return SIMULADO_DISCIPLINES.find((d) => currentIdx >= d.range[0] && currentIdx <= d.range[1]) || SIMULADO_DISCIPLINES[0];
  }, [currentIdx]);

  const handleSelectOption = (optIdx: number) => {
    if (isFinished) return;
    sound.playClick();
    haptics.tap();
    setAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleToggleAudio = () => {
    if (!currentQ) return;
    if (isNarrating) {
      stopSpeaking();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      const textToRead = cleanQuestionText(currentQ.question);
      speakQuestion(textToRead, currentQ.options, {
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
    haptics.levelUp();
    setIsFinished(true);

    confetti({
      particleCount: 130,
      spread: 85,
      origin: { y: 0.4 },
      colors: ['#d4af37', '#10b981', '#3b82f6', '#f59e0b', '#dc2626']
    });

    // Registra respostas para telemetria
    examQuestions.forEach((q, idx) => {
      const chosen = answers[idx];
      const isCorrect = chosen === q.correctIndex;
      onQuestionAnswered?.(isCorrect, isCorrect ? 30 : 0);
    });
  };

  // Pular direto para a próxima questão não respondida
  const handleJumpToNextUnanswered = () => {
    sound.playClick();
    haptics.tap();
    for (let i = currentIdx + 1; i < examQuestions.length; i++) {
      if (typeof answers[i] !== 'number') {
        setCurrentIdx(i);
        return;
      }
    }
    for (let i = 0; i < currentIdx; i++) {
      if (typeof answers[i] !== 'number') {
        setCurrentIdx(i);
        return;
      }
    }
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
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.2)',
        text: 'Pontuação de elite (≥76%). Histórico de convocação direta nas primeiras turmas do CFSD.',
        projection: 'Ampla Concorrência • Vaga Direta com altíssima probabilidade!'
      };
    } else if (correctCount >= 41) {
      cutoffTier = {
        status: '🎯 ZONA SEGURA DE CONVOCAÇÃO PRO TAF',
        color: '#d4af37',
        bg: 'rgba(212, 175, 55, 0.2)',
        text: 'Nota compatível com o corte histórico da ampla concorrência PMPE 2024 (cerca de 42-44 pontos).',
        projection: 'Classificado para correção de redação e convocação pro TAF!'
      };
    } else if (correctCount >= 35) {
      cutoffTier = {
        status: '⚠️ ZONA DE RISCO / LISTA DE ESPERA',
        color: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.2)',
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
    haptics.tap();
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
              <div class="q-text">${cleanQuestionText(q.question)}</div>
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

  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / 60) * 100);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(4, 5, 8, 0.96)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          height: '95vh',
          maxHeight: '95vh',
          background: 'linear-gradient(180deg, #0e1118 0%, #07080b 100%)',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          borderRadius: '18px',
          boxShadow: '0 24px 65px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* ================================================================= */}
        {/* CABEÇALHO UNIFICADO E COMPACTO (1 ÚNICA BARRA LIMPA E ORGANIZADA) */}
        {/* ================================================================= */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            background: 'linear-gradient(90deg, rgba(20, 24, 34, 0.98) 0%, rgba(12, 14, 20, 0.98) 100%)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}
        >
          {/* IDENTIFICAÇÃO DO SIMULADO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #d4af37, #967117)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 14px rgba(212, 175, 55, 0.35)',
                color: '#07080a',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={22} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.02em' }}>
                  SIMULADO OFICIAL PMPE 2026
                </h2>
                <span
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: '#d4af37',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '4px',
                    fontSize: '0.68rem',
                    fontWeight: 900
                  }}
                >
                  60 QUESTÕES AOCP • 4H
                </span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#a1a1aa' }}>
                Espelho fiel da prova • Gabarito oculto até a entrega
              </div>
            </div>
          </div>

          {/* CENTRO: CRONÔMETRO DIGITAL REAL */}
          {!isFinished && (
            <div
              style={{
                background: secondsRemaining < 1800 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 0, 0, 0.6)',
                border: secondsRemaining < 1800 ? '1.5px solid #ef4444' : '1px solid rgba(212, 175, 55, 0.4)',
                color: secondsRemaining < 1800 ? '#fca5a5' : '#fbbf24',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                fontWeight: 900,
                fontSize: '0.95rem',
                fontFamily: 'monospace',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: secondsRemaining < 1800 ? '0 0 12px rgba(239, 68, 68, 0.3)' : 'none'
              }}
              title="Tempo restante de prova (4 horas oficiais)"
            >
              <Clock size={16} />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>
          )}

          {/* AÇÕES DA BARRA: TABS, IMPRESSÃO, ENTREGA E FECHAR */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
            {/* SELETOR DE VISTA: CADERNO VS CARTÃO ÓPTICO */}
            {!isFinished && (
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  padding: '3px',
                  borderRadius: '8px',
                  display: 'flex',
                  border: '1px solid #27272a'
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    haptics.tap();
                    setActiveTab('caderno');
                  }}
                  style={{
                    background: activeTab === 'caderno' ? '#d4af37' : 'transparent',
                    color: activeTab === 'caderno' ? '#07080a' : '#cbd5e1',
                    border: 'none',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <BookOpen size={13} />
                  <span>Caderno</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    haptics.tap();
                    setActiveTab('cartao');
                  }}
                  style={{
                    background: activeTab === 'cartao' ? '#d4af37' : 'transparent',
                    color: activeTab === 'cartao' ? '#07080a' : '#cbd5e1',
                    border: 'none',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <LayoutGrid size={13} />
                  <span>Cartão ({answeredCount}/60)</span>
                </button>
              </div>
            )}

            {/* BOTÃO IMPRIMIR SIMULADO EM PAPEL */}
            <button
              type="button"
              onClick={handlePrintPaperExam}
              title="Gerar Prova A4 com Folha de Respostas para Imprimir"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#e2e8f0',
                padding: '0.4rem 0.65rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer'
              }}
            >
              <Printer size={14} />
              <span className="hidden-mobile">Imprimir</span>
            </button>

            {/* BOTÃO ENTREGAR CARTÃO-RESPOSTA */}
            {!isFinished && (
              <button
                type="button"
                onClick={() => {
                  if (answeredCount < 60) {
                    const confirmFinish = window.confirm(
                      `Atenção candidato: Você respondeu ${answeredCount} de 60 questões.\nRestam ${60 - answeredCount} em branco.\n\nDeseja realmente entregar e ver seu resultado e gabarito oficial agora?`
                    );
                    if (!confirmFinish) return;
                  }
                  handleFinishExam();
                }}
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '8px',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <CheckCircle2 size={15} />
                <span>Entregar Prova</span>
              </button>
            )}

            {/* BOTÃO FECHAR */}
            <button
              type="button"
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Sair do Simulado"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* CORPO DO SIMULADO: CADERNO, CARTÃO ÓPTICO OU RESULTADO FINAL      */}
        {/* ================================================================= */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {isFinished ? (
            /* ============================================================= */
            /* TELA DE RESULTADO & BOLETIM OFICIAL COM GABARITO COMENTADO   */
            /* ============================================================= */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* PLACAR E NOTA DE CORTE ESTIMADA */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '1.8rem 1.5rem',
                  borderRadius: '16px',
                  background: results.isApprovedMinimo
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(10, 14, 20, 0.98) 100%)'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(10, 14, 20, 0.98) 100%)',
                  border: results.isApprovedMinimo ? '2px solid rgba(16, 185, 129, 0.6)' : '2px solid rgba(239, 68, 68, 0.6)',
                  boxShadow: results.isApprovedMinimo ? '0 0 35px rgba(16, 185, 129, 0.25)' : '0 0 35px rgba(239, 68, 68, 0.25)'
                }}
              >
                <div style={{ fontSize: '2.8rem', marginBottom: '0.4rem' }}>
                  {results.isApprovedMinimo ? '🎖️' : '⚠️'}
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    background: results.cutoffTier.bg,
                    border: `1px solid ${results.cutoffTier.color}`,
                    color: results.cutoffTier.color,
                    padding: '0.35rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '0.65rem'
                  }}
                >
                  {results.cutoffTier.status}
                </div>

                <h1 style={{ margin: 0, fontSize: '2.4rem', fontWeight: 900, color: '#ffffff' }}>
                  {results.correctCount}{' '}
                  <span style={{ fontSize: '1.15rem', color: '#94a3b8' }}>/ {results.totalQuestions} acertos</span>
                </h1>

                <div style={{ fontSize: '0.98rem', color: '#cbd5e1', marginTop: '0.3rem' }}>
                  Aproveitamento: <strong style={{ color: '#d4af37' }}>{results.scorePercentage}%</strong> • Tempo:{' '}
                  <strong style={{ color: '#67e8f9' }}>{formatTimer(4 * 3600 - secondsRemaining)}</strong>
                </div>

                {/* PARECER PROJETIVO DE NOTA DE CORTE */}
                <div
                  style={{
                    marginTop: '0.9rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '12px',
                    padding: '0.85rem 1.15rem',
                    maxWidth: '680px',
                    margin: '0.9rem auto 0',
                    fontSize: '0.86rem',
                    color: '#e2e8f0',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontWeight: 800, color: results.cutoffTier.color, marginBottom: '0.2rem' }}>
                    📈 Parecer Estatístico da Banca AOCP:
                  </div>
                  <div>{results.cutoffTier.text}</div>
                  <div style={{ marginTop: '0.35rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                    <strong style={{ color: '#d4af37' }}>Veredito Operacional: </strong>
                    {results.cutoffTier.projection}
                  </div>
                </div>
              </div>

              {/* DETALHAMENTO POR MATÉRIA DO EDITAL */}
              <div
                style={{
                  background: 'rgba(16, 18, 24, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '1.15rem'
                }}
              >
                <h3 style={{ margin: '0 0 0.85rem', fontSize: '1rem', color: '#ffffff', fontWeight: 900 }}>
                  Boletim por Disciplina do Edital AOCP
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.65rem' }}>
                  {Object.entries(results.subjectStats).map(([subj, data]) => {
                    const pct = Math.round((data.correct / Math.max(1, data.total)) * 100);
                    const isZero = data.correct === 0;

                    return (
                      <div
                        key={subj}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: isZero ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '10px',
                          padding: '0.75rem 0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#ffffff' }}>{subj}</div>
                          <div style={{ fontSize: '0.74rem', color: isZero ? '#f87171' : '#94a3b8' }}>
                            {data.correct} de {data.total} acertos ({pct}%)
                          </div>
                        </div>

                        <div
                          style={{
                            fontSize: '1.05rem',
                            fontWeight: 900,
                            color: pct >= 70 ? '#10b981' : pct >= 50 ? '#d4af37' : '#ef4444'
                          }}
                        >
                          {data.correct}/{data.total}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* REVISÃO COMPLETA QUESTÃO POR QUESTÃO */}
              <div
                style={{
                  background: 'rgba(12, 14, 20, 0.95)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '14px',
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Eye size={18} color="#d4af37" />
                    <h3 style={{ margin: 0, fontSize: '1rem', color: '#ffffff', fontWeight: 900 }}>
                      Gabarito Oficial Comentado (Revisão das 60 Questões)
                    </h3>
                  </div>

                  {/* Filtro de Revisão */}
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <button
                      type="button"
                      onClick={() => setReviewFilter('all')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        background: reviewFilter === 'all' ? '#d4af37' : 'rgba(255,255,255,0.06)',
                        color: reviewFilter === 'all' ? '#07080a' : '#cbd5e1',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Todas (60)
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewFilter('wrong')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        background: reviewFilter === 'wrong' ? '#ef4444' : 'rgba(255,255,255,0.06)',
                        color: reviewFilter === 'wrong' ? '#ffffff' : '#fca5a5',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Erros ({60 - results.correctCount})
                    </button>
                    <button
                      type="button"
                      onClick={() => setReviewFilter('correct')}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        background: reviewFilter === 'correct' ? '#10b981' : 'rgba(255,255,255,0.06)',
                        color: reviewFilter === 'correct' ? '#07080a' : '#86efac',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Acertos ({results.correctCount})
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                            ? '1px solid rgba(16, 185, 129, 0.35)'
                            : '1px solid rgba(239, 68, 68, 0.45)',
                          borderRadius: '10px',
                          padding: '0.9rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d4af37' }}>
                            Questão {idx + 1} • {q.materiaNome}
                          </span>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 900,
                              padding: '0.15rem 0.5rem',
                              borderRadius: '5px',
                              background: isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                              color: isCorrect ? '#4ade80' : '#f87171'
                            }}
                          >
                            {isCorrect ? '✓ ACERTOU' : isSkipped ? '⚪ NÃO MARCADA' : '✗ ERROU'}
                          </span>
                        </div>

                        <div style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: 1.5 }}>
                          {cleanQuestionText(q.question)}
                        </div>

                        {/* Alternativas */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          {q.options.map((opt, oIdx) => {
                            const isThisCorrect = oIdx === q.correctIndex;
                            const isThisChosen = oIdx === chosen;
                            const letter = String.fromCharCode(65 + oIdx);

                            let optBorder = 'rgba(255, 255, 255, 0.08)';
                            let optBg = 'transparent';
                            let optColor = '#cbd5e1';

                            if (isThisCorrect) {
                              optBorder = '#10b981';
                              optBg = 'rgba(16, 185, 129, 0.15)';
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
                                  fontSize: '0.83rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem'
                                }}
                              >
                                <strong>({letter})</strong>
                                <span>{opt}</span>
                                {isThisCorrect && <span style={{ marginLeft: 'auto', fontWeight: 900, fontSize: '0.72rem' }}>[GABARITO OFICIAL]</span>}
                                {isThisChosen && !isThisCorrect && <span style={{ marginLeft: 'auto', fontWeight: 900, fontSize: '0.72rem' }}>[SUA RESPOSTA]</span>}
                              </div>
                            );
                          })}
                        </div>

                        {/* Explicação da Banca */}
                        {q.explanation && (
                          <div
                            style={{
                              background: 'rgba(212, 175, 55, 0.08)',
                              borderLeft: '3px solid #d4af37',
                              padding: '0.6rem 0.8rem',
                              borderRadius: '0 8px 8px 0',
                              fontSize: '0.8rem',
                              color: '#fef3c7',
                              lineHeight: 1.5
                            }}
                          >
                            <strong style={{ color: '#d4af37' }}>Comentário da Banca AOCP: </strong>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTÕES DE COMPARTILHAMENTO DO BOLETIM */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={handleCopyReport}
                  style={{
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Copy size={16} />
                  <span>{isCopied ? 'Boletim Copiado!' : 'Copiar Boletim Completo'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    stopSpeaking();
                    onClose();
                  }}
                  style={{
                    padding: '0.75rem 1.4rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #d4af37, #967117)',
                    color: '#07080a',
                    fontWeight: 900,
                    fontSize: '0.88rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Concluir e Voltar
                </button>
              </div>
            </div>
          ) : activeTab === 'cartao' ? (
            /* ============================================================= */
            /* CARTÃO-RESPOSTA VIRTUAL (FOLHA ÓPTICA COM 6 BLOCOS LIMPOS)   */
            /* ============================================================= */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: '#fbbf24', fontSize: '0.9rem' }}>
                    Folha Óptica Virtual Oficial (Espelho da Prova da PMPE)
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                    Clique diretamente nas bolinhas para marcar a alternativa ou clique no número da questão para lê-la.
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981' }}>
                  {answeredCount} de 60 preenchidas ({progressPct}%)
                </div>
              </div>

              {/* GRADE DE BOLINHAS AGRUPADAS POR DISCIPLINA */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '0.85rem'
                }}
              >
                {SIMULADO_DISCIPLINES.map((disc) => {
                  const [startIdx, endIdx] = disc.range;
                  const discQuestions = examQuestions.slice(startIdx, endIdx + 1);
                  const discAnswered = discQuestions.filter((_, i) => typeof answers[startIdx + i] === 'number').length;

                  return (
                    <div
                      key={disc.id}
                      style={{
                        background: 'rgba(16, 18, 24, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '0.75rem 0.95rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.4rem' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d4af37' }}>
                          {disc.name}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: discAnswered === 10 ? '#10b981' : '#a1a1aa', fontWeight: 700 }}>
                          {discAnswered}/10 preenchidas
                        </span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {discQuestions.map((q, localIdx) => {
                          const globalIdx = startIdx + localIdx;
                          const isCurrent = currentIdx === globalIdx;
                          const chosenOpt = answers[globalIdx];

                          return (
                            <div
                              key={globalIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: isCurrent ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                                border: isCurrent ? '1px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '8px',
                                padding: '0.35rem 0.65rem'
                              }}
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  sound.playClick();
                                  haptics.tap();
                                  setCurrentIdx(globalIdx);
                                  setActiveTab('caderno');
                                }}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: isCurrent ? '#fbbf24' : '#e2e8f0',
                                  fontSize: '0.78rem',
                                  fontWeight: 800,
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                              >
                                Questão {globalIdx + 1 < 10 ? `0${globalIdx + 1}` : globalIdx + 1}
                              </button>

                              {/* 5 BOLINHAS ÓPTICAS (A, B, C, D, E) */}
                              <div style={{ display: 'flex', gap: '0.35rem' }}>
                                {[0, 1, 2, 3, 4].map((optIdx) => {
                                  const letter = String.fromCharCode(65 + optIdx);
                                  const isMarked = chosenOpt === optIdx;

                                  return (
                                    <button
                                      key={optIdx}
                                      type="button"
                                      onClick={() => {
                                        sound.playClick();
                                        haptics.tap();
                                        setAnswers((prev) => ({ ...prev, [globalIdx]: optIdx }));
                                      }}
                                      style={{
                                        width: '26px',
                                        height: '26px',
                                        borderRadius: '50%',
                                        background: isMarked ? '#10b981' : 'rgba(255, 255, 255, 0.06)',
                                        border: isMarked ? '2px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.2)',
                                        color: isMarked ? '#ffffff' : '#cbd5e1',
                                        fontWeight: 900,
                                        fontSize: '0.72rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s'
                                      }}
                                      title={`Marcar opção (${letter}) para Questão ${globalIdx + 1}`}
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
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    haptics.tap();
                    setActiveTab('caderno');
                  }}
                  style={{
                    padding: '0.55rem 1.4rem',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #d4af37, #967117)',
                    color: '#07080a',
                    fontWeight: 900,
                    fontSize: '0.84rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Voltar ao Caderno de Questões
                </button>
              </div>
            </div>
          ) : (
            /* ============================================================= */
            /* CADERNO DE QUESTÕES (RESOLUÇÃO LIMPA, CLARA E ORGANIZADA)     */
            /* ============================================================= */
            <>
              {/* 1. SELETOR RÁPIDO DE DISCIPLINAS (ATALHOS 1 A 6) */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.45rem',
                  overflowX: 'auto',
                  paddingBottom: '0.2rem',
                  scrollbarWidth: 'none'
                }}
              >
                {SIMULADO_DISCIPLINES.map((disc) => {
                  const isActive = currentIdx >= disc.range[0] && currentIdx <= disc.range[1];
                  const [startIdx, endIdx] = disc.range;
                  const answeredInDisc = examQuestions
                    .slice(startIdx, endIdx + 1)
                    .filter((_, i) => typeof answers[startIdx + i] === 'number').length;

                  return (
                    <button
                      key={disc.id}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        haptics.tap();
                        setCurrentIdx(disc.range[0]);
                      }}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: '8px',
                        background: isActive ? 'rgba(212, 175, 55, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                        border: isActive ? '1.5px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: isActive ? '#fbbf24' : '#a1a1aa',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        flexShrink: 0,
                        transition: 'all 0.15s'
                      }}
                    >
                      <span>{disc.shortName}</span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          padding: '0.05rem 0.35rem',
                          borderRadius: '4px',
                          background: answeredInDisc === 10 ? '#10b981' : 'rgba(0,0,0,0.4)',
                          color: answeredInDisc === 10 ? '#ffffff' : '#fbbf24',
                          fontWeight: 900
                        }}
                      >
                        {answeredInDisc}/10
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 2. RÉGUA HORIZONTAL DE 60 QUESTÕES (NÃO ENCOLHE, NÃO CORTA) */}
              <div
                style={{
                  background: 'rgba(12, 14, 20, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '0.45rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div
                  ref={questionTrackRef}
                  style={{
                    display: 'flex',
                    gap: '0.4rem',
                    overflowX: 'auto',
                    padding: '0.2rem',
                    width: '100%',
                    scrollbarWidth: 'thin'
                  }}
                >
                  {examQuestions.map((_, idx) => {
                    const isCurrent = currentIdx === idx;
                    const isAnswered = typeof answers[idx] === 'number';

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          haptics.tap();
                          setCurrentIdx(idx);
                        }}
                        style={{
                          width: '32px',
                          height: '32px',
                          minWidth: '32px',
                          borderRadius: '8px',
                          background: isCurrent
                            ? '#d4af37'
                            : isAnswered
                            ? '#10b981'
                            : 'rgba(255, 255, 255, 0.05)',
                          border: isCurrent
                            ? '2px solid #ffffff'
                            : isAnswered
                            ? '1px solid #10b981'
                            : '1px solid rgba(255, 255, 255, 0.12)',
                          color: isCurrent ? '#07080a' : isAnswered ? '#ffffff' : '#cbd5e1',
                          fontWeight: 900,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: isCurrent ? '0 0 12px rgba(212, 175, 55, 0.5)' : 'none',
                          transition: 'all 0.15s'
                        }}
                        title={`Questão ${idx + 1} (${isAnswered ? 'Respondida' : 'Em branco'})`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. CARD DA QUESTÃO ATUAL E ALTERNATIVAS */}
              {currentQ && (
                <>
                  {/* BARRA DE STATUS DA QUESTÃO */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '0.55rem 0.95rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      color: '#a1a1aa',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#ffffff', fontWeight: 900 }}>
                        Questão {currentIdx + 1} de 60
                      </span>
                      <span>•</span>
                      <span style={{ color: '#d4af37', fontWeight: 800 }}>
                        {currentDiscipline.name}
                      </span>
                      <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', fontWeight: 800 }}>
                        {currentDiscipline.bloco}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      {/* BOTÃO DO NARRADOR DE VOZ */}
                      <button
                        type="button"
                        onClick={handleToggleAudio}
                        style={{
                          background: isNarrating ? 'rgba(239, 68, 68, 0.25)' : 'rgba(212, 175, 55, 0.15)',
                          border: isNarrating ? '1px solid #ef4444' : '1px solid rgba(212, 175, 55, 0.4)',
                          color: isNarrating ? '#fca5a5' : '#d4af37',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          cursor: 'pointer'
                        }}
                      >
                        {isNarrating ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        <span>{isNarrating ? 'Parar Áudio' : 'Ouvir Enunciado'}</span>
                      </button>

                      <span style={{ fontSize: '0.76rem', color: answeredCount === 60 ? '#10b981' : '#94a3b8', fontWeight: 700 }}>
                        {answeredCount}/60 Respondidas ({progressPct}%)
                      </span>
                    </div>
                  </div>

                  {/* ENUNCIADO LIMPO (SEM PREFIXOS CONFUSOS) */}
                  <div
                    style={{
                      background: 'rgba(16, 18, 24, 0.95)',
                      border: '1.5px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '14px',
                      padding: '1.15rem 1.35rem',
                      fontSize: '1rem',
                      lineHeight: 1.65,
                      color: '#ffffff',
                      fontWeight: 500,
                      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {cleanQuestionText(currentQ.question)}
                  </div>

                  {/* OPÇÕES DE RESPOSTA (A, B, C, D, E) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {currentQ.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isChosen = answers[currentIdx] === optIdx;

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(optIdx)}
                          style={{
                            background: isChosen ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                            border: isChosen ? '1.5px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                            color: isChosen ? '#ffffff' : '#cbd5e1',
                            borderRadius: '10px',
                            padding: '0.8rem 1rem',
                            textAlign: 'left',
                            fontSize: '0.92rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            boxShadow: isChosen ? '0 0 12px rgba(212, 175, 55, 0.2)' : 'none'
                          }}
                        >
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: isChosen ? '#d4af37' : 'rgba(255, 255, 255, 0.08)',
                              color: isChosen ? '#07080a' : '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 900,
                              fontSize: '0.85rem',
                              flexShrink: 0
                            }}
                          >
                            {letter}
                          </div>
                          <span style={{ lineHeight: 1.45 }}>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* RODAPÉ DE NAVEGAÇÃO: ANTERIOR, PULAR NÃO RESPONDIDA E PRÓXIMA */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <button
                      type="button"
                      disabled={currentIdx === 0}
                      onClick={() => {
                        sound.playClick();
                        haptics.tap();
                        setCurrentIdx((prev) => Math.max(0, prev - 1));
                      }}
                      style={{
                        padding: '0.55rem 1.15rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        cursor: currentIdx === 0 ? 'not-allowed' : 'pointer',
                        opacity: currentIdx === 0 ? 0.35 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <ArrowLeft size={15} />
                      <span>Anterior</span>
                    </button>

                    {/* BOTÃO TÁTICO: PULAR PARA PRÓXIMA NÃO RESPONDIDA */}
                    {answeredCount < 60 && (
                      <button
                        type="button"
                        onClick={handleJumpToNextUnanswered}
                        style={{
                          padding: '0.45rem 0.9rem',
                          borderRadius: '8px',
                          background: 'rgba(212, 175, 55, 0.12)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          color: '#fbbf24',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                        title="Ir direto para a próxima questão que ainda não foi respondida"
                      >
                        <Target size={14} />
                        <span>Próxima em Branco</span>
                      </button>
                    )}

                    {currentIdx < examQuestions.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          haptics.tap();
                          setCurrentIdx((prev) => Math.min(examQuestions.length - 1, prev + 1));
                        }}
                        style={{
                          padding: '0.55rem 1.25rem',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #d4af37, #967117)',
                          border: 'none',
                          color: '#07080a',
                          fontWeight: 900,
                          fontSize: '0.84rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          boxShadow: '0 2px 10px rgba(212, 175, 55, 0.3)'
                        }}
                      >
                        <span>Próxima</span>
                        <ArrowRight size={15} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          handleFinishExam();
                        }}
                        style={{
                          padding: '0.55rem 1.25rem',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          border: 'none',
                          color: '#ffffff',
                          fontWeight: 900,
                          fontSize: '0.84rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          boxShadow: '0 2px 12px rgba(16, 185, 129, 0.4)'
                        }}
                      >
                        <span>Finalizar Simulado</span>
                        <CheckCircle2 size={15} />
                      </button>
                    )}
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
