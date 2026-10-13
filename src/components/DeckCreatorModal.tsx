import React, { useState } from 'react';
import type { QuizQuestion, MatchPair, Flashcard, CategoryId, BlocoEdital } from '../types/game';
import { PlusCircle, X, Check } from 'lucide-react';
import { sound } from '../utils/sound';

interface DeckCreatorModalProps {
  onClose: () => void;
  onAddQuestion: (q: QuizQuestion) => void;
  onAddMatchPair: (p: MatchPair) => void;
  onAddFlashcard: (f: Flashcard) => void;
  customQuestionsCount: number;
}

export const DeckCreatorModal: React.FC<DeckCreatorModalProps> = ({
  onClose,
  onAddQuestion,
  onAddMatchPair,
  onAddFlashcard,
}) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcard' | 'match'>('quiz');

  // Form states Quiz PMPE
  const [qSubject, setQSubject] = useState<CategoryId>('constitucional');
  const [qQuestion, setQQuestion] = useState('');
  const [qOptions, setQOptions] = useState(['', '', '', '', '']); // 5 opções A, B, C, D, E
  const [qCorrect, setQCorrect] = useState(0);
  const [qExplanation, setQExplanation] = useState('');
  const [qFundamentacao, setQFundamentacao] = useState('');
  const [qHint, setQHint] = useState('');

  // Form states Flashcard
  const [fcFront, setFcFront] = useState('');
  const [fcBack, setFcBack] = useState('');

  // Form states Match
  const [mTerm, setMTerm] = useState('');
  const [mDef, setMDef] = useState('');

  const [successMsg, setSuccessMsg] = useState('');

  const getBlocoForSubject = (subj: CategoryId): BlocoEdital => {
    if (subj === 'portugues' || subj === 'historia_pe') return 'bloco_1';
    if (subj === 'raciocinio' || subj === 'informatica') return 'bloco_2';
    return 'bloco_3';
  };

  const getSubjectName = (subj: CategoryId): string => {
    switch (subj) {
      case 'portugues': return 'Língua Portuguesa';
      case 'historia_pe': return 'História de PE';
      case 'raciocinio': return 'Raciocínio Lógico';
      case 'informatica': return 'Noções de Informática';
      case 'constitucional': return 'Direito Constitucional';
      case 'humanos_leis': return 'Direitos Humanos & Leis';
      default: return 'Meu Deck Customizado';
    }
  };

  const handleCreateQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qQuestion.trim() || qOptions.some((o) => !o.trim())) return;

    const newQ: QuizQuestion = {
      id: `custom-q-${Date.now()}`,
      categoryId: qSubject,
      bloco: getBlocoForSubject(qSubject),
      materiaNome: getSubjectName(qSubject),
      topicoEdital: 'Caderno Pessoal de Treinamento',
      banca: 'Simulado do Candidato',
      question: qQuestion.trim(),
      options: qOptions.map((o) => o.trim()),
      correctIndex: qCorrect,
      explanation: qExplanation.trim() || 'Resolução pessoal adicionada pelo candidato.',
      fundamentacaoLegal: qFundamentacao.trim() || undefined,
      hint: qHint.trim() || 'Foque nas palavras-chave da lei seca.',
      difficulty: 'medium',
    };

    onAddQuestion(newQ);
    sound.playSuccess();
    setSuccessMsg('Questão padrão AOCP (A-E) adicionada com sucesso!');
    setQQuestion('');
    setQOptions(['', '', '', '', '']);
    setQExplanation('');
    setQFundamentacao('');
    setQHint('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleCreateFlashcard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fcFront.trim() || !fcBack.trim()) return;

    const newFc: Flashcard = {
      id: `custom-fc-${Date.now()}`,
      categoryId: qSubject,
      bloco: getBlocoForSubject(qSubject),
      categoryName: getSubjectName(qSubject),
      front: fcFront.trim(),
      back: fcBack.trim(),
    };

    onAddFlashcard(newFc);
    sound.playSuccess();
    setSuccessMsg('Flashcard adicionado ao Cofre da Lei Seca!');
    setFcFront('');
    setFcBack('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleCreateMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mTerm.trim() || !mDef.trim()) return;

    const newMatch: MatchPair = {
      id: `custom-m-${Date.now()}`,
      categoryId: qSubject,
      bloco: getBlocoForSubject(qSubject),
      term: mTerm.trim(),
      definition: mDef.trim(),
    };

    onAddMatchPair(newMatch);
    sound.playSuccess();
    setSuccessMsg('Par de Conexão Tática adicionado!');
    setMTerm('');
    setMDef('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Estúdio de Questões & Caderno PMPE</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Adicione questões de provas anteriores ou anotações de lei seca para treinar.
            </p>
          </div>

          <button onClick={onClose} className="icon-btn">
            <X size={18} />
          </button>
        </div>

        {/* Abas */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          <button
            className={`btn-secondary ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setActiveTab('quiz')}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderColor: activeTab === 'quiz' ? 'var(--neon-cyan)' : 'transparent',
              color: activeTab === 'quiz' ? 'var(--neon-cyan)' : 'var(--text-muted)',
            }}
          >
            Questão 5 Alternativas (A a E)
          </button>
          <button
            className={`btn-secondary ${activeTab === 'flashcard' ? 'active' : ''}`}
            onClick={() => setActiveTab('flashcard')}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderColor: activeTab === 'flashcard' ? 'var(--neon-emerald)' : 'transparent',
              color: activeTab === 'flashcard' ? 'var(--neon-emerald)' : 'var(--text-muted)',
            }}
          >
            Flashcard da Lei Seca
          </button>
          <button
            className={`btn-secondary ${activeTab === 'match' ? 'active' : ''}`}
            onClick={() => setActiveTab('match')}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              borderColor: activeTab === 'match' ? 'var(--neon-purple)' : 'transparent',
              color: activeTab === 'match' ? 'var(--neon-purple)' : 'var(--text-muted)',
            }}
          >
            Conexão Tática
          </button>
        </div>

        {successMsg && (
          <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--neon-emerald)', color: '#34d399', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Check size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Seleção da Disciplina do Edital PMPE */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
            Disciplina do Edital PMPE *
          </label>
          <select
            value={qSubject}
            onChange={(e) => setQSubject(e.target.value as CategoryId)}
            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: '#0f172a', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
          >
            <option value="portugues">Bloco I: Língua Portuguesa</option>
            <option value="historia_pe">Bloco I: História de Pernambuco</option>
            <option value="raciocinio">Bloco II: Raciocínio Lógico Matemático</option>
            <option value="informatica">Bloco II: Noções de Informática</option>
            <option value="constitucional">Bloco III: Direito Constitucional (Art. 5º / 144)</option>
            <option value="humanos_leis">Bloco III: Direitos Humanos & Legislação Extravagante</option>
          </select>
        </div>

        {/* Formulário: Quiz PMPE (A a E) */}
        {activeTab === 'quiz' && (
          <form onSubmit={handleCreateQuiz} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Enunciado da Questão *
              </label>
              <textarea
                value={qQuestion}
                onChange={(e) => setQQuestion(e.target.value)}
                placeholder="Ex: Conforme prevê expressamente o Artigo 144 da CF/88, assinale a opção correta a respeito da Polícia Militar de Pernambuco..."
                rows={2}
                required
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {qOptions.map((opt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => setQCorrect(i)}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: qCorrect === i ? 'var(--neon-emerald)' : 'rgba(255,255,255,0.08)',
                      color: qCorrect === i ? 'black' : 'white',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                    title="Clique para marcar como correta"
                  >
                    {String.fromCharCode(65 + i)}
                  </button>
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => {
                      const next = [...qOptions];
                      next[i] = e.target.value;
                      setQOptions(next);
                    }}
                    placeholder={`Alternativa ${String.fromCharCode(65 + i)} ${qCorrect === i ? '(Gabarito Correto)' : ''}`}
                    required
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: qCorrect === i ? '1px solid var(--neon-emerald)' : '1px solid var(--border-subtle)',
                      color: 'white',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Fundamentação Legal (Artigo/Súmula)
                </label>
                <input
                  type="text"
                  value={qFundamentacao}
                  onChange={(e) => setQFundamentacao(e.target.value)}
                  placeholder="Ex: CF/88, Art. 144, § 5º"
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Dica de Prova (Pegadinha)
                </label>
                <input
                  type="text"
                  value={qHint}
                  onChange={(e) => setQHint(e.target.value)}
                  placeholder="Ex: Cuidado com mandado judicial à noite!"
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Resolução e Comentário Didático
              </label>
              <textarea
                value={qExplanation}
                onChange={(e) => setQExplanation(e.target.value)}
                placeholder="Explique detalhadamente por que o gabarito está certo..."
                rows={2}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
              <PlusCircle size={18} />
              <span>Adicionar ao Simulado PMPE</span>
            </button>
          </form>
        )}

        {/* Formulário: Flashcard */}
        {activeTab === 'flashcard' && (
          <form onSubmit={handleCreateFlashcard} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Frente (Pergunta de Lei Seca ou Fato Histórico) *
              </label>
              <input
                type="text"
                value={fcFront}
                onChange={(e) => setFcFront(e.target.value)}
                placeholder="Ex: Qual o quórum para aprovação de Emenda Constitucional?"
                required
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Verso (Resposta / Artigo da Lei / Mnemônico) *
              </label>
              <textarea
                value={fcBack}
                onChange={(e) => setFcBack(e.target.value)}
                placeholder="Ex: 3/5 dos votos dos respectivos membros, em dois turnos de votação em cada Casa do Congresso Nacional (Art. 60, § 2º)."
                rows={4}
                required
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <PlusCircle size={18} />
              <span>Adicionar ao Cofre da Lei Seca</span>
            </button>
          </form>
        )}

        {/* Formulário: Match Pair */}
        {activeTab === 'match' && (
          <form onSubmit={handleCreateMatch} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Termo / Fato / Artigo *
              </label>
              <input
                type="text"
                value={mTerm}
                onChange={(e) => setMTerm(e.target.value)}
                placeholder="Ex: Revolução Praieira (1848)"
                required
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Definição / Consequência Correspondente *
              </label>
              <textarea
                value={mDef}
                onChange={(e) => setMDef(e.target.value)}
                placeholder="Ex: Última revolta liberal do Império, ocorrida em Pernambuco e marcada pelo Manifesto ao Mundo."
                rows={3}
                required
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'white', outline: 'none' }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }}>
              <PlusCircle size={18} />
              <span>Adicionar Conexão Tática</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
