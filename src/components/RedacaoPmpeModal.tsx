import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  PenTool,
  Clock,
  FileText,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Copy,
  Printer,
  Save,
  Trash2,
  X,
  Sparkles,
  Layers,
  Award,
  ChevronRight,
  Shield,
  HelpCircle,
  Target
} from 'lucide-react';
import { 
  TEMAS_REDACAO_PMPE, 
  ESQUELETOS_CORINGA, 
  REPERTORIOS_BOLSO,
  type RedacaoTema,
  type RedacaoEsqueleto,
  type RepertorioSociocultural
} from '../data/redacaoData';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface RedacaoPmpeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

interface SavedEssay {
  id: string;
  themeTitle: string;
  text: string;
  linesCount: number;
  score: number;
  createdAt: string;
}

export const RedacaoPmpeModal: React.FC<RedacaoPmpeModalProps> = ({
  isOpen,
  onClose,
  userName = 'Soldado Recruta'
}) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState<'editor' | 'temas' | 'esqueletos' | 'repertorios' | 'historico'>('editor');
  const [selectedTema, setSelectedTema] = useState<RedacaoTema>(TEMAS_REDACAO_PMPE[0]);
  const [essayText, setEssayText] = useState<string>('');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(60 * 60); // 60 minutos oficiais
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [savedEssays, setSavedEssays] = useState<SavedEssay[]>(() => {
    try {
      const raw = localStorage.getItem('pmpe_saved_essays');
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  });

  // Checklist de autocorreção pelos critérios do Instituto AOCP (total 40 pontos)
  const [checklist, setChecklist] = useState({
    c1_tipologia: false,    // Tipologia dissertativo-argumentativa com tese explícita (8 pts)
    c2_tema: false,         // Abordagem completa do tema sem tangenciamento (8 pts)
    c3_coesao: false,       // Conectivos inter e intraparágrafos sem repetições viciosas (8 pts)
    c4_gramatica: false,    // Norma culta (crase, concordância, regência e pontuação) (8 pts)
    c5_intervencao: false   // Fechamento articulado com proposta coerente ao papel estatal (8 pts)
  });

  const estimatedScore = useMemo(() => {
    let score = 0;
    if (checklist.c1_tipologia) score += 8;
    if (checklist.c2_tema) score += 8;
    if (checklist.c3_coesao) score += 8;
    if (checklist.c4_gramatica) score += 8;
    if (checklist.c5_intervencao) score += 8;
    return score;
  }, [checklist]);

  // Contagem de linhas e palavras
  const stats = useMemo(() => {
    if (!essayText.trim()) return { lines: 0, words: 0, chars: 0 };
    // Divide por quebras de linha ou calcula por densidade média de caracteres por linha pautada (aprox 70 chars)
    const rawLines = essayText.split('\n');
    let estimatedVisualLines = 0;
    for (const line of rawLines) {
      if (line.trim().length === 0) {
        estimatedVisualLines += 1;
      } else {
        estimatedVisualLines += Math.max(1, Math.ceil(line.length / 68));
      }
    }
    const words = essayText.trim().split(/\s+/).filter(Boolean).length;
    return {
      lines: Math.min(45, estimatedVisualLines),
      words,
      chars: essayText.length
    };
  }, [essayText]);

  // Timer de 60 minutos
  useEffect(() => {
    let timer: any = null;
    if (isTimerRunning && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            sound.playError();
            alert('Tempo esgotado! Seus 60 minutos de redação foram concluídos.');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, secondsRemaining]);

  const formatTimer = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleSaveEssay = () => {
    if (!essayText.trim()) {
      alert('Escreva sua redação antes de salvar!');
      return;
    }
    sound.playSuccess();
    const newEssay: SavedEssay = {
      id: `essay_${Date.now()}`,
      themeTitle: selectedTema.titulo,
      text: essayText,
      linesCount: stats.lines,
      score: estimatedScore,
      createdAt: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    const updated = [newEssay, ...savedEssays];
    setSavedEssays(updated);
    try {
      localStorage.setItem('pmpe_saved_essays', JSON.stringify(updated));
    } catch {}

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#f59e0b', '#22c55e', '#ef4444', '#ffffff']
    });
    alert('Redação salva com sucesso no seu histórico!');
  };

  const handleDeleteSaved = (id: string) => {
    sound.playClick();
    const updated = savedEssays.filter(e => e.id !== id);
    setSavedEssays(updated);
    try {
      localStorage.setItem('pmpe_saved_essays', JSON.stringify(updated));
    } catch {}
  };

  const handleCopyText = () => {
    sound.playClick();
    navigator.clipboard.writeText(essayText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    sound.playLevelUp();
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Permita pop-ups no seu navegador para imprimir!');
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Redação Oficial PMPE 2026 - ${userName}</title>
        <style>
          @page { size: A4; margin: 1.5cm; }
          body { font-family: 'Times New Roman', serif; color: #000; padding: 20px; line-height: 1.6; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 15px; }
          .header h2 { margin: 0; font-size: 16pt; text-transform: uppercase; }
          .header p { margin: 3px 0; font-size: 11pt; }
          .theme-box { background: #f3f4f6; border: 1px solid #000; padding: 10px; margin-bottom: 20px; font-size: 11pt; }
          .lines-container { border: 1px solid #000; padding: 15px 25px; min-height: 550px; }
          .pauta-line { border-bottom: 1px solid #aaa; height: 28px; display: flex; align-items: flex-end; font-size: 11pt; }
          .line-num { width: 30px; font-size: 9pt; color: #555; user-select: none; }
          .content { white-space: pre-wrap; font-size: 11pt; line-height: 28px; }
          .footer { margin-top: 20px; font-size: 10pt; text-align: right; border-top: 1px solid #ccc; padding-top: 5px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>POLÍCIA MILITAR DE PERNAMBUCO • EDITAL OFICIAL 2026</h2>
          <p>FOLHA OFICIAL DE RESPOSTA DISCURSIVA • INSTITUTO AOCP</p>
          <p><strong>Candidato:</strong> ${userName} | <strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>
        <div class="theme-box">
          <strong>TEMA PROPOSTO:</strong> ${selectedTema.titulo} (${selectedTema.eixoTematico})
        </div>
        <div class="lines-container">
          <div class="content">${essayText || '(Folha pautada em branco para treino manuscrito)'}</div>
        </div>
        <div class="footer">
          Total de linhas produzidas: ${stats.lines} (Mínimo: 20 | Máximo: 30) • Nota Autoavaliada: ${estimatedScore}/40 pontos
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

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
        padding: '0.85rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1120px',
          maxHeight: '95vh',
          background: 'linear-gradient(180deg, #0c0e14 0%, #07080a 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 158, 11, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO TÁTICO BOPE */}
        <div
          style={{
            padding: '1.15rem 1.4rem',
            background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.18) 0%, rgba(12, 14, 20, 0.98) 100%)',
            borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
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
                boxShadow: '0 0 16px rgba(245, 158, 11, 0.45)',
                color: '#000000'
              }}
            >
              <PenTool size={22} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.04em' }}>
                  QG DA REDAÇÃO PMPE 2026
                </h2>
                <span
                  style={{
                    background: 'rgba(245, 158, 11, 0.25)',
                    border: '1px solid #f59e0b',
                    color: '#fbbf24',
                    padding: '0.12rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 900
                  }}
                >
                  SIMULADOR OFICIAL AOCP • 40 PONTOS
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                Folha Pautada Oficial (20 a 30 linhas), Cronômetro de 60 minutos, Modelos Coringa e Repertórios.
              </div>
            </div>
          </div>

          {/* CRONÔMETRO REGRESSIVO & CONTROLES */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: secondsRemaining < 600 ? 'rgba(220, 38, 38, 0.3)' : 'rgba(245, 158, 11, 0.15)',
                border: secondsRemaining < 600 ? '1px solid #ef4444' : '1px solid rgba(245, 158, 11, 0.4)',
                padding: '0.35rem 0.85rem',
                borderRadius: '10px',
                color: secondsRemaining < 600 ? '#fca5a5' : '#fbbf24',
                fontWeight: 900,
                fontSize: '0.92rem'
              }}
            >
              <Clock size={16} />
              <span>{formatTimer(secondsRemaining)}</span>
              <button
                onClick={() => {
                  sound.playClick();
                  setIsTimerRunning(prev => !prev);
                }}
                style={{
                  background: isTimerRunning ? '#dc2626' : '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.2rem 0.5rem',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  marginLeft: '0.35rem'
                }}
              >
                {isTimerRunning ? 'Pausar' : 'Iniciar 60min'}
              </button>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* BARRA DE NAVEGAÇÃO DE ABAS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.65rem 1.4rem',
            background: 'rgba(8, 9, 13, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap'
          }}
        >
          {[
            { id: 'editor', label: '✍️ Simulador de Folha Pautada', icon: PenTool },
            { id: 'temas', label: `🎯 Banco de Temas (${TEMAS_REDACAO_PMPE.length})`, icon: Target },
            { id: 'esqueletos', label: '⚡ Esqueletos / Modelos Coringa', icon: Layers },
            { id: 'repertorios', label: '📚 Repertórios de Bolso (CF/Filósofos)', icon: BookOpen },
            { id: 'historico', label: `📂 Minhas Redações (${savedEssays.length})`, icon: FileText }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(tab.id as any);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: 'none',
                  background: isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#000000' : '#ffffff',
                  boxShadow: isActive ? '0 0 12px rgba(245, 158, 11, 0.4)' : 'none'
                }}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* CONTEÚDO DAS ABAS */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.4rem' }}>
          {/* ABA 1: SIMULADOR DE FOLHA PAUTADA OFICIAL */}
          {activeTab === 'editor' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* TEMA ATIVO SELECIONADO */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(12, 15, 22, 0.98) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '12px',
                  padding: '0.9rem 1.15rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Tema Oficial em Treinamento ({selectedTema.eixoTematico}):
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 900, color: '#ffffff', marginTop: '0.15rem' }}>
                    {selectedTema.titulo}
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('temas')}
                  style={{
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid #f59e0b',
                    color: '#fbbf24',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  Trocar de Tema
                </button>
              </div>

              {/* BARRA DE MONITORAMENTO: LINHAS, PALAVRAS E NOTA */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {/* Linhas */}
                <div
                  style={{
                    background: stats.lines < 20 
                      ? 'rgba(220, 38, 38, 0.15)' 
                      : stats.lines <= 30 
                        ? 'rgba(34, 197, 94, 0.15)' 
                        : 'rgba(220, 38, 38, 0.25)',
                    border: stats.lines < 20 || stats.lines > 30 
                      ? '1.5px solid #ef4444' 
                      : '1.5px solid #22c55e',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: stats.lines < 20 || stats.lines > 30 ? '#fca5a5' : '#86efac', fontWeight: 900 }}>
                    LINHAS OFICIAIS (20 a 30)
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: stats.lines < 20 || stats.lines > 30 ? '#ef4444' : '#22c55e', marginTop: '0.1rem' }}>
                    {stats.lines} / 30 linhas
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                    {stats.lines < 20 && '⚠️ Abaixo de 20 linhas (Eliminação pelo edital)'}
                    {stats.lines >= 20 && stats.lines <= 30 && '✅ Tamanho ideal no padrão da banca AOCP'}
                    {stats.lines > 30 && '⚠️ Excedeu 30 linhas (linhas extras desconsideradas)'}
                  </div>
                </div>

                {/* Palavras e Caracteres */}
                <div style={{ background: 'rgba(15, 20, 28, 0.8)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 900 }}>EXTENSÃO TEXTUAL</div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff', marginTop: '0.1rem' }}>
                    {stats.words} palavras
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                    {stats.chars} caracteres totais
                  </div>
                </div>

                {/* Nota da Autocorreção */}
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                  <div style={{ fontSize: '0.72rem', color: '#fef08a', fontWeight: 900 }}>AUTOAVALIAÇÃO AOCP</div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#fbbf24', marginTop: '0.1rem' }}>
                    {estimatedScore} / 40 pts
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                    {estimatedScore >= 24 ? '✅ Acima do corte mínimo (60%)' : '⚠️ Abaixo do mínimo de 24 pts'}
                  </div>
                </div>
              </div>

              {/* ÁREA DA FOLHA PAUTADA (EDITOR) */}
              <div
                style={{
                  display: 'flex',
                  background: 'rgba(12, 14, 20, 0.98)',
                  border: '1.5px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: '12px',
                  boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.8)',
                  overflow: 'hidden'
                }}
              >
                {/* Numeração de Linhas 1 a 30 */}
                <div
                  style={{
                    width: '38px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0.85rem 0',
                    userSelect: 'none',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontSize: '0.82rem',
                    color: '#64748b',
                    lineHeight: '26px'
                  }}
                >
                  {Array.from({ length: 30 }, (_, i) => (
                    <div
                      key={i + 1}
                      style={{
                        color: i + 1 >= 20 ? (i + 1 <= 30 ? '#22c55e' : '#ef4444') : '#f59e0b',
                        fontWeight: i + 1 === 20 || i + 1 === 30 ? 900 : 400
                      }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Caixa de Texto Pautada */}
                <textarea
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  placeholder={`Escreva sua redação aqui no padrão oficial da PMPE 2026 (20 a 30 linhas)...

Dica do Comandante Gean:
• Parágrafo 1: Introdução contextualizada com tese explícita (5 a 7 linhas)
• Parágrafo 2: Desenvolvimento 1 com repertório e causa primária (6 a 8 linhas)
• Parágrafo 3: Desenvolvimento 2 com análise crítica e pensador (6 a 8 linhas)
• Parágrafo 4: Conclusão com intervenção estatal articulada (5 a 7 linhas)`}
                  style={{
                    flex: 1,
                    minHeight: '440px',
                    background: 'transparent',
                    border: 'none',
                    color: '#f8fafc',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.98rem',
                    lineHeight: '26px',
                    padding: '0.85rem 1.15rem',
                    resize: 'vertical',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* BOTÕES DE AÇÃO: SALVAR, COPIAR, IMPRIMIR */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.65rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={handleCopyText}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      padding: '0.55rem 0.95rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    <Copy size={15} />
                    <span>{isCopied ? 'Copiado!' : 'Copiar Texto'}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid #f59e0b',
                      color: '#fbbf24',
                      padding: '0.55rem 0.95rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    <Printer size={15} />
                    <span>Imprimir Folha A4</span>
                  </button>
                </div>

                <button
                  onClick={handleSaveEssay}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'linear-gradient(135deg, #16a34a, #15803d)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.65rem 1.35rem',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(22, 163, 74, 0.4)'
                  }}
                >
                  <Save size={16} />
                  <span>Salvar no Meu Histórico</span>
                </button>
              </div>

              {/* CHECKLIST DE AUTOCORREÇÃO OFICIAL DA BANCA AOCP */}
              <div
                style={{
                  background: 'rgba(14, 18, 26, 0.95)',
                  border: '1.5px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} color="#fbbf24" />
                    <span style={{ fontSize: '0.92rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase' }}>
                      Checklist de Autocorreção (Critérios Oficiais AOCP)
                    </span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Cada competência vale 8 pontos (Total: 40 pts)
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { key: 'c1_tipologia', label: '1. Tipologia Textual: Meu texto é estritamente dissertativo-argumentativo com tese clara na introdução?' },
                    { key: 'c2_tema', label: '2. Abordagem Temática: Abordei todos os aspectos dos textos motivadores sem tangenciar nem fugir ao tema?' },
                    { key: 'c3_coesao', label: '3. Coesão e Conectivos: Utilizei conectivos no início dos parágrafos ("Nesse contexto", "Ademais", "Portanto")?' },
                    { key: 'c4_gramatica', label: '4. Norma-Padrão: Revisei crase, concordância, regência verbal e pontuação sem erros graves?' },
                    { key: 'c5_intervencao', label: '5. Conclusão Propositiva: Minha conclusão fecha o raciocínio com uma proposta institucional coerente para a segurança?' }
                  ].map(item => {
                    const isChecked = checklist[item.key as keyof typeof checklist];
                    return (
                      <label
                        key={item.key}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          background: isChecked ? 'rgba(34, 197, 94, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                          border: isChecked ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '8px',
                          padding: '0.65rem 0.85rem',
                          color: isChecked ? '#86efac' : '#cbd5e1',
                          fontSize: '0.84rem',
                          cursor: 'pointer',
                          fontWeight: isChecked ? 700 : 400
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            sound.playClick();
                            setChecklist(prev => ({ ...prev, [item.key]: e.target.checked }));
                          }}
                          style={{ width: '16px', height: '16px', accentColor: '#22c55e' }}
                        />
                        <span>{item.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ABA 2: BANCO DE TEMAS QUENTES */}
          {activeTab === 'temas' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.86rem', color: '#94a3b8' }}>
                Selecione um tema quente cotado para o concurso da PMPE para carregar no simulador:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem' }}>
                {TEMAS_REDACAO_PMPE.map(tema => {
                  const isSelected = selectedTema.id === tema.id;
                  return (
                    <div
                      key={tema.id}
                      onClick={() => {
                        sound.playClick();
                        setSelectedTema(tema);
                        setActiveTab('editor');
                      }}
                      style={{
                        background: isSelected ? 'rgba(245, 158, 11, 0.15)' : 'rgba(15, 20, 28, 0.9)',
                        border: isSelected ? '1.5px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '0.85rem',
                        transition: 'all 0.15s'
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '6px',
                            background: 'rgba(220, 38, 38, 0.25)',
                            color: '#fca5a5',
                            fontWeight: 900
                          }}
                        >
                          {tema.eixoTematico}
                        </span>
                        <h4 style={{ margin: '0.5rem 0 0.4rem', fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.4 }}>
                          {tema.titulo}
                        </h4>
                        <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.45 }}>
                          {tema.textosMotivadores[0].slice(0, 120)}...
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <span style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 800 }}>
                          {tema.repertoriosSugeridos.length} repertórios disponíveis
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          Treinar neste Tema <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ABA 3: ESQUELETOS / MODELOS CORINGA */}
          {activeTab === 'esqueletos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ fontSize: '0.86rem', color: '#cbd5e1' }}>
                Utilize nossos <strong>Modelos Coringa Nota 10</strong> estruturados especificamente para o padrão do <strong>Instituto AOCP</strong>. Cada modelo é dividido em 4 parágrafos prontos com conectivos de transição que você pode adaptar:
              </div>

              {ESQUELETOS_CORINGA.map(esq => (
                <div
                  key={esq.id}
                  style={{
                    background: 'rgba(14, 18, 26, 0.95)',
                    border: '1.5px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', background: '#f59e0b', color: '#000000', fontWeight: 900, padding: '0.1rem 0.45rem', borderRadius: '4px' }}>
                        {esq.eixo}
                      </span>
                      <h3 style={{ margin: '0.35rem 0 0', fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                        {esq.nome}
                      </h3>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        {esq.descricao}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        sound.playSuccess();
                        const fullSkeleton = `${esq.estrutura.introducao}\n\n${esq.estrutura.desenvolvimento1}\n\n${esq.estrutura.desenvolvimento2}\n\n${esq.estrutura.conclusao}`;
                        setEssayText(fullSkeleton);
                        setActiveTab('editor');
                      }}
                      style={{
                        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                        color: '#000000',
                        border: 'none',
                        padding: '0.55rem 1.15rem',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 900,
                        cursor: 'pointer'
                      }}
                    >
                      Copiar Modelo para o Editor
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.85rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                      <strong style={{ color: '#fbbf24' }}>1. INTRODUÇÃO (Apresentação do Tema + Tese Clara):</strong>
                      <p style={{ margin: '0.35rem 0 0' }}>{esq.estrutura.introducao}</p>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.85rem', borderRadius: '8px', borderLeft: '4px solid #38bdf8' }}>
                      <strong style={{ color: '#38bdf8' }}>2. DESENVOLVIMENTO 1 (Causa / Fator Primário + Filosofia de Hobbes):</strong>
                      <p style={{ margin: '0.35rem 0 0' }}>{esq.estrutura.desenvolvimento1}</p>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.85rem', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
                      <strong style={{ color: '#c084fc' }}>3. DESENVOLVIMENTO 2 (Consequência / Desafio Prático + Dimenstein):</strong>
                      <p style={{ margin: '0.35rem 0 0' }}>{esq.estrutura.desenvolvimento2}</p>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.85rem', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                      <strong style={{ color: '#4ade80' }}>4. CONCLUSÃO (Proposta Institucional de Ação Operacional):</strong>
                      <p style={{ margin: '0.35rem 0 0' }}>{esq.estrutura.conclusao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ABA 4: ARSENAL DE REPERTÓRIOS DE BOLSO */}
          {activeTab === 'repertorios' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.86rem', color: '#94a3b8' }}>
                Consultório rápido de <strong>repertórios socioculturais legítimos e produtivos</strong> para fundamentar seus argumentos perante a banca examinadora:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem' }}>
                {REPERTORIOS_BOLSO.map(rep => (
                  <div
                    key={rep.id}
                    style={{
                      background: 'rgba(15, 20, 28, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.25)', color: '#93c5fd', fontWeight: 800 }}>
                        {rep.fonte}
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#fbbf24' }}>
                        {rep.autorOuDocumento}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
                      {rep.conceitoChave}
                    </div>

                    <div style={{ background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '8px', padding: '0.75rem', fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5 }}>
                      {rep.fraseOuCitacao}
                    </div>

                    <div style={{ fontSize: '0.76rem', color: '#a3e635', lineHeight: 1.45 }}>
                      💡 <strong>Como usar na redação:</strong> {rep.comoAplicar}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABA 5: HISTÓRICO DE REDAÇÕES SALVAS */}
          {activeTab === 'historico' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {savedEssays.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '2px solid #f59e0b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem',
                      color: '#fbbf24'
                    }}
                  >
                    <FileText size={32} />
                  </div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.2rem', margin: 0, fontWeight: 900 }}>
                    Nenhuma Redação Salva Ainda
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.86rem', maxWidth: '420px', margin: '0.65rem auto 1.25rem', lineHeight: 1.5 }}>
                    Escreva sua primeira redação no simulador e clique em "Salvar no Meu Histórico" para acompanhar sua evolução rumo à nota 40 na PMPE.
                  </p>
                  <button
                    onClick={() => setActiveTab('editor')}
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      color: '#000000',
                      border: 'none',
                      padding: '0.65rem 1.4rem',
                      borderRadius: '10px',
                      fontWeight: 900,
                      cursor: 'pointer'
                    }}
                  >
                    Começar a Escrever Agora
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {savedEssays.map(essay => (
                    <div
                      key={essay.id}
                      style={{
                        background: 'rgba(15, 20, 28, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <h4 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 900, color: '#ffffff' }}>
                            {essay.themeTitle}
                          </h4>
                          <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                            Salva em: {essay.createdAt} • {essay.linesCount} linhas produzidas • Nota autoavaliada: {essay.score}/40
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.45rem' }}>
                          <button
                            onClick={() => {
                              sound.playClick();
                              setEssayText(essay.text);
                              setActiveTab('editor');
                            }}
                            style={{
                              background: 'rgba(59, 130, 246, 0.2)',
                              border: '1px solid #3b82f6',
                              color: '#93c5fd',
                              padding: '0.35rem 0.75rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            Carregar no Editor
                          </button>

                          <button
                            onClick={() => handleDeleteSaved(essay.id)}
                            style={{
                              background: 'rgba(220, 38, 38, 0.2)',
                              border: '1px solid #ef4444',
                              color: '#fca5a5',
                              padding: '0.35rem 0.55rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              cursor: 'pointer'
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>

                      <div
                        style={{
                          background: 'rgba(0, 0, 0, 0.35)',
                          borderRadius: '8px',
                          padding: '0.75rem 1rem',
                          fontSize: '0.86rem',
                          color: '#cbd5e1',
                          whiteSpace: 'pre-wrap',
                          maxHeight: '180px',
                          overflowY: 'auto',
                          lineHeight: 1.55
                        }}
                      >
                        {essay.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
