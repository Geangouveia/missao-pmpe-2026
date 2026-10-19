import React, { useState, useMemo } from 'react';
import { 
  Target, 
  X, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  BookOpen,
  Award,
  AlertTriangle,
  Lightbulb,
  Check
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { 
  getPendingMistakeIds, 
  resolveMistake, 
  clearResolvedMistakes, 
  getAllMistakes 
} from '../utils/errorNotebookManager';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface MistakeNotebookModalProps {
  userName: string;
  allQuestions: QuizQuestion[];
  onClose: () => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  userName,
  allQuestions,
  onClose,
  onQuestionAnswered
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [resolvedIds, setResolvedIds] = useState<string[]>([]);

  // Carrega as questões que o usuário errou
  const pendingIds = useMemo(() => getPendingMistakeIds(userName), [userName]);
  const mistakeRecords = useMemo(() => getAllMistakes(userName), [userName]);

  const mistakeQuestions = useMemo(() => {
    const map = new Map<string, QuizQuestion>();
    allQuestions.forEach(q => map.set(q.id, q));
    return pendingIds
      .map(id => map.get(id))
      .filter((q): q is QuizQuestion => Boolean(q));
  }, [allQuestions, pendingIds]);

  const currentQ = mistakeQuestions[selectedIdx];
  const mistakeInfo = currentQ ? mistakeRecords[currentQ.id] : null;

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      sound.playSuccess();
      resolveMistake(userName, currentQ.id);
      setResolvedIds(prev => [...prev, currentQ.id]);
      onQuestionAnswered?.(true, 50);

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#22c55e', '#10b981', '#3b82f6']
      });
    } else {
      sound.playError();
      onQuestionAnswered?.(false, 0);
    }
  };

  const handleNext = () => {
    sound.playClick();
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);

    if (selectedIdx + 1 < mistakeQuestions.length) {
      setSelectedIdx(prev => prev + 1);
    } else {
      setSelectedIdx(0); // Reinicia ciclo se ainda houver
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.94)',
        backdropFilter: 'blur(12px)',
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
          maxWidth: '920px',
          maxHeight: '92vh',
          background: 'linear-gradient(180deg, #0d1726 0%, #060b17 100%)',
          border: '1.5px solid rgba(239, 68, 68, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 45px rgba(239, 68, 68, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.2) 0%, rgba(10, 17, 32, 0.95) 100%)',
            borderBottom: '1px solid rgba(239, 68, 68, 0.35)',
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
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(239, 68, 68, 0.5)',
                color: '#ffffff'
              }}
            >
              <Target size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  CADERNO DE ERROS INTELIGENTE
                </h2>
                <span
                  style={{
                    background: 'rgba(239, 68, 68, 0.25)',
                    border: '1px solid #ef4444',
                    color: '#fca5a5',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  RETREINAMENTO AOCP
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                Elimine suas falhas até gabaritar todas as questões marcadas pelo sistema.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                padding: '0.4rem 0.85rem',
                borderRadius: '10px',
                fontSize: '0.84rem',
                fontWeight: 800
              }}
            >
              {mistakeQuestions.length} {mistakeQuestions.length === 1 ? 'questão pendente' : 'questões pendentes'}
            </span>

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

        {/* CORPO DO RETREINAMENTO */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {mistakeQuestions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '2px solid #22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#4ade80'
                }}
              >
                <CheckCircle2 size={44} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.4rem', margin: 0, fontWeight: 900 }}>
                Prontuário Limpo! Nenhuma Falha Registrada.
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', maxWidth: '480px', margin: '0.75rem auto 1.5rem', lineHeight: 1.5 }}>
                Excelente, guerreiro! Você não possui nenhuma questão pendente no Caderno de Erros.
                Continue respondendo simulados normalmente.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: 'linear-gradient(135deg, #16a34a, #15803d)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '12px',
                  fontWeight: 900,
                  cursor: 'pointer'
                }}
              >
                Voltar aos Estudos
              </button>
            </div>
          ) : currentQ ? (
            <>
              {/* STATUS DA QUESTÃO */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  fontSize: '0.84rem',
                  color: '#93c5fd',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 900 }}>
                    Questão {selectedIdx + 1} de {mistakeQuestions.length}
                  </span>
                  <span>•</span>
                  <span>{currentQ.materiaNome}</span>
                  {currentQ.banca && (
                    <>
                      <span>•</span>
                      <span style={{ color: '#86efac' }}>Banca {currentQ.banca}</span>
                    </>
                  )}
                </div>

                {mistakeInfo && (
                  <span style={{ color: '#f87171', fontWeight: 800 }}>
                    ⚠️ Errada {mistakeInfo.failedCount}x anteriormente
                  </span>
                )}
              </div>

              {/* ENUNCIADO */}
              <div
                style={{
                  background: 'rgba(10, 17, 32, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: '#ffffff',
                  fontWeight: 600
                }}
              >
                {currentQ.question}
              </div>

              {/* ALTERNATIVAS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentQ.options.map((option, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswered && idx === currentQ.correctIndex;
                  const isWrong = isAnswered && isSelected && !isCorrect;

                  let bg = 'rgba(255, 255, 255, 0.03)';
                  let border = '1px solid rgba(255, 255, 255, 0.1)';
                  let color = '#e2e8f0';

                  if (isCorrect) {
                    bg = 'rgba(34, 197, 94, 0.2)';
                    border = '2px solid #22c55e';
                    color = '#86efac';
                  } else if (isWrong) {
                    bg = 'rgba(239, 68, 68, 0.2)';
                    border = '2px solid #ef4444';
                    color = '#fca5a5';
                  } else if (isSelected) {
                    bg = 'rgba(59, 130, 246, 0.2)';
                    border = '2px solid #3b82f6';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      style={{
                        background: bg,
                        border,
                        color,
                        borderRadius: '14px',
                        padding: '1rem 1.25rem',
                        textAlign: 'left',
                        fontSize: '0.96rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: isAnswered ? 'default' : 'pointer',
                        transition: 'all 0.2s',
                        lineHeight: 1.45
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isCorrect ? '#22c55e' : isWrong ? '#ef4444' : 'rgba(255, 255, 255, 0.08)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 900,
                          flexShrink: 0
                        }}
                      >
                        {letter}
                      </div>
                      <span style={{ flex: 1 }}>{option}</span>
                      {isCorrect && <CheckCircle2 size={22} color="#22c55e" />}
                      {isWrong && <XCircle size={22} color="#ef4444" />}
                    </button>
                  );
                })}
              </div>

              {/* COMENTÁRIO & EXPLICAÇÃO TÁTICA */}
              {isAnswered && (
                <div
                  style={{
                    background: selectedOption === currentQ.correctIndex ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: selectedOption === currentQ.correctIndex ? '1px solid rgba(34, 197, 94, 0.35)' : '1px solid rgba(239, 68, 68, 0.35)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, color: selectedOption === currentQ.correctIndex ? '#4ade80' : '#f87171' }}>
                    <Lightbulb size={20} />
                    <span>
                      {selectedOption === currentQ.correctIndex
                        ? '🎯 PARABÉNS! Falha superada e resolvida com sucesso.'
                        : '⚠️ ATENÇÃO MILITAR: Analise o fundamento para não repetir esta falha.'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.92rem', color: '#f8fafc', lineHeight: 1.55 }}>
                    {currentQ.explanation}
                  </div>

                  {currentQ.dicaMacete && (
                    <div style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '10px', padding: '0.65rem 1rem', color: '#fef08a', fontSize: '0.86rem', fontWeight: 700 }}>
                      💡 <strong>Macete AOCP:</strong> {currentQ.dicaMacete}
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                    <button
                      onClick={handleNext}
                      style={{
                        background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.75rem 1.6rem',
                        borderRadius: '12px',
                        fontWeight: 900,
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)'
                      }}
                    >
                      <span>Avançar para Próxima</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
