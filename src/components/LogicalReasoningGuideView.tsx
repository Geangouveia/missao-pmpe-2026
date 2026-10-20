import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Brain, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Calculator, 
  Table, 
  Zap, 
  Layers, 
  Lightbulb, 
  Flame, 
  ShieldAlert, 
  Copy, 
  Check, 
  Award,
  BookOpen,
  Split,
  Compass
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface LogicalReasoningGuideViewProps {
  onClose: () => void;
  onOpenSurvivalMode?: () => void;
}

type TabType = 'conceito' | 'conectivos' | 'tabela' | 'negacoes' | 'equivalencias' | 'exercicios';

export const LogicalReasoningGuideView: React.FC<LogicalReasoningGuideViewProps> = ({
  onClose,
  onOpenSurvivalMode,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('conceito');

  // Estado do Simulador Interativo de Tabela Verdade
  const [simP, setSimP] = useState<boolean>(true);
  const [simQ, setSimQ] = useState<boolean>(false);
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  // Estados dos Exercícios Interativos
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedFormula(id);
    setTimeout(() => setCopiedFormula(null), 1800);
  };

  // Cálculos lógicos instantâneos
  const notP = !simP;
  const notQ = !simQ;
  const andVal = simP && simQ;
  const orVal = simP || simQ;
  const xorVal = simP !== simQ;
  const condVal = !simP || simQ; // P -> Q é F apenas se P=V e Q=F (Vera Fischer)
  const bicondVal = simP === simQ; // P <-> Q é V se ambos tiverem mesmo valor

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(180deg, #070d18 0%, #03060c 100%)',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* CABEÇALHO TÁTICO FIXO */}
      <header style={{
        padding: '0.85rem 1.4rem',
        background: 'rgba(10, 18, 32, 0.95)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        backdropFilter: 'blur(12px)',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <ArrowLeft size={16} />
            <span>Voltar ao QG</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
            }}>
              <Brain size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <h1 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                  Raciocínio Lógico Tático PMPE
                </h1>
                <span style={{
                  fontSize: '0.65rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '6px',
                  background: 'rgba(6, 182, 212, 0.2)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  fontWeight: 800
                }}>
                  EDAL AOCP 2026
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
                Manual Completo: Proposições, Tabela Verdade, Conectivos, Macete MANÉ e Equivalências
              </p>
            </div>
          </div>
        </div>

        {/* BARRINHA DE NAVEGAÇÃO ENTRE MÓDULOS */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          {[
            { id: 'conceito' as TabType, label: '1. O que é Proposição', icon: <Lightbulb size={14} /> },
            { id: 'conectivos' as TabType, label: '2. Conectivos Lógicos', icon: <Split size={14} /> },
            { id: 'tabela' as TabType, label: '3. Simulador de Tabela', icon: <Table size={14} /> },
            { id: 'negacoes' as TabType, label: '4. Negações (MANÉ)', icon: <ShieldAlert size={14} /> },
            { id: 'equivalencias' as TabType, label: '5. Equivalências (NEOU)', icon: <Layers size={14} /> },
            { id: 'exercicios' as TabType, label: '6. Questões AOCP', icon: <Award size={14} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sound.playClick();
                setActiveTab(tab.id);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.42rem 0.75rem',
                borderRadius: '8px',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255, 255, 255, 0.05)',
                border: activeTab === tab.id ? '1px solid #60a5fa' : '1px solid rgba(255, 255, 255, 0.08)',
                color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
                fontSize: '0.76rem',
                fontWeight: activeTab === tab.id ? 800 : 600,
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* ÁREA DE CONTEÚDO COM ROLAGEM SUAVE */}
      <main style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* ============================================================== */}
        {/* ABA 1: O QUE É PROPOSIÇÃO & O QUE NÃO É PROPOSIÇÃO (BASE AOCP) */}
        {/* ============================================================== */}
        {activeTab === 'conceito' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            {/* Banner Introdução */}
            <div style={{
              padding: '1.5rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
              border: '1.5px solid rgba(59, 130, 246, 0.4)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '1.6rem' }}>💡</span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  Conceito Fundamental: O que é uma Proposição Lógica?
                </h2>
              </div>
              <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                Na lógica sentencial cobrada pelo Instituto AOCP, uma <strong>proposição</strong> é toda <strong>sentença declarativa</strong> (afirmativa ou negativa), que possui sentido completo, expressa um pensamento e à qual se pode atribuir <strong>um único valor lógico: Verdadeiro (V) ou Falso (F)</strong>, sem qualquer ambiguidade.
              </p>
            </div>

            {/* Os Três Princípios da Lógica Clássica */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(56, 189, 248, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>1️⃣</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#38bdf8', margin: 0 }}>
                    Princípio da Identidade
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Uma proposição verdadeira é sempre verdadeira; uma proposição falsa é sempre falsa. O que é, é.
                </p>
              </div>

              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>2️⃣</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fbbf24', margin: 0 }}>
                    Princípio da Não-Contradição
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Uma proposição <strong>não pode ser verdadeira e falsa simultaneamente</strong>. É impossível que p e ~p ocorram ao mesmo tempo.
                </p>
              </div>

              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>3️⃣</span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#4ade80', margin: 0 }}>
                    Princípio do Terceiro Excluído
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Toda proposição ou é Verdadeira ou é Falsa; <strong>não existe um terceiro valor lógico</strong> ou meio-termo.
                </p>
              </div>
            </div>

            {/* SEÇÃO CRÍTICA: O QUE NÃO É PROPOSIÇÃO (PEGADINHA AOCP) */}
            <div style={{
              padding: '1.4rem',
              borderRadius: '16px',
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1.5px solid rgba(239, 68, 68, 0.35)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <ShieldAlert size={22} color="#ef4444" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#fca5a5', margin: 0 }}>
                  Cuidado Máximo na AOCP: O que NÃO é Proposição Lógica!
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                Se a frase não puder ser classificada com convicção como Verdadeira ou Falsa, ela <strong>NÃO É PROPOSIÇÃO</strong>. Guarde estes 6 casos clássicos:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.85rem' }}>
                {[
                  {
                    tipo: 'Frases Interrogativas (Perguntas)',
                    exemplo: '"Quantas vagas tem no concurso da PMPE?" ou "Você é policial?"',
                    motivo: 'Perguntas não declaram nada; não faz sentido dizer se uma pergunta é V ou F.'
                  },
                  {
                    tipo: 'Frases Exclamativas (Emoções)',
                    exemplo: '"Que farda bonita!" ou "Excelente tiro, recruta!"',
                    motivo: 'Exclamações expressam sentimentos e surpresas, não têm valor lógico.'
                  },
                  {
                    tipo: 'Frases Imperativas (Ordens/Comandos)',
                    exemplo: '"Faça 40 flexões agora!" ou "Feche o portão do quartel!"',
                    motivo: 'Ordens mandam agir, não afirmam ou negam fatos verificáveis.'
                  },
                  {
                    tipo: 'Frases Optativas (Desejos/Preces)',
                    exemplo: '"Deus te guarde na ronda!" ou "Tomara que a prova seja fácil!"',
                    motivo: 'Expressam votos e esperanças pessoais.'
                  },
                  {
                    tipo: 'Sentenças Abertas (Incógnitas)',
                    exemplo: '"x + 4 = 10" ou "Ele é um excelente sargento da PMPE."',
                    motivo: 'Sem saber quem é "x" ou quem é "ele", é impossível julgar V ou F.'
                  },
                  {
                    tipo: 'Paradoxos Lógicos',
                    exemplo: '"Esta frase que estou dizendo é falsa."',
                    motivo: 'Se for verdadeira, ela é falsa; se for falsa, ela é verdadeira (loop infinito).'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(239, 68, 68, 0.25)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#f87171', fontWeight: 800, fontSize: '0.85rem' }}>
                      <XCircle size={15} />
                      <span>{item.tipo}</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#ffffff', fontStyle: 'italic', margin: '0.35rem 0' }}>
                      {item.exemplo}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                      {item.motivo}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simples vs Composta */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(59, 130, 246, 0.35)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#3b82f6" />
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#93c5fd', margin: 0 }}>
                    Proposição Simples (Atômica)
                  </h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Contém um único pensamento completo, sem conectivos lógicos conectando outras proposições.
                </p>
                <div style={{ marginTop: '0.75rem', padding: '0.6rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.3)', borderLeft: '3px solid #3b82f6', fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <strong>Exemplo:</strong> "O Soldado Silva concluiu o curso de formação militar." (Representação: <em>p</em>)
                </div>
              </div>

              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(168, 85, 247, 0.35)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#a855f7" />
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#d8b4fe', margin: 0 }}>
                    Proposição Composta (Molecular)
                  </h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Formada pela união de duas ou mais proposições simples por meio de <strong>conectivos lógicos</strong> (e, ou, se...então, etc.).
                </p>
                <div style={{ marginTop: '0.75rem', padding: '0.6rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.3)', borderLeft: '3px solid #a855f7', fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <strong>Exemplo:</strong> "O Soldado Silva concluiu o curso <strong>E</strong> foi promovido a Cabo." (<em>p ∧ q</em>)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 2: OS 5 CONECTIVOS LÓGICOS ESSENCIAIS DA AOCP             */}
        {/* ============================================================== */}
        {activeTab === 'conectivos' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            <div style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.4rem 0' }}>
                Os 5 Conectivos Lógicos: Regras de Ouro & Macetes Mnemônicos
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0 }}>
                Cada conectivo possui uma <strong>regra mandatória</strong> que decide quando a proposição é Verdadeira ou Falsa. Decore as frases de efeito e você gabarita qualquer questão de tabela verdade!
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* CONECTIVO 1: CONJUNÇÃO (E) */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1.5px solid rgba(59, 130, 246, 0.4)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                      CONECTIVO E (∧)
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
                      Conjunção: "O Exigente"
                    </h3>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid rgba(59, 130, 246, 0.35)',
                    color: '#93c5fd',
                    fontWeight: 800,
                    fontSize: '0.82rem'
                  }}>
                    Símbolo: p ∧ q
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.85rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#60a5fa', fontWeight: 800 }}>REGRA DE OURO AOCP:</div>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, marginTop: '0.25rem' }}>
                      "Só é VERDADE se TUDO for Verdade. Um único F já contamina tudo e vira Falso!"
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#fbbf24', fontWeight: 800 }}>EXEMPLO TÁTICO:</div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                      "Passei no TAF <strong>E</strong> fui aprovado na prova médica." (Se reprovou em um, a frase inteira é FALSA).
                    </div>
                  </div>
                </div>
              </div>

              {/* CONECTIVO 2: DISJUNÇÃO INCLUSIVA (OU) */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1.5px solid rgba(34, 197, 94, 0.4)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                      CONECTIVO OU (∨)
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
                      Disjunção Inclusiva: "O Generoso"
                    </h3>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.35)',
                    color: '#86efac',
                    fontWeight: 800,
                    fontSize: '0.82rem'
                  }}>
                    Símbolo: p ∨ q
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.85rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#4ade80', fontWeight: 800 }}>REGRA DE OURO AOCP:</div>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, marginTop: '0.25rem' }}>
                      "Basta UMA verdade para que toda a proposição seja VERDADEIRA. Só é Falsa se TUDO for Falso!"
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#fbbf24', fontWeight: 800 }}>EXEMPLO TÁTICO:</div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                      "Estudei Constitucional <strong>OU</strong> estudei História de Pernambuco." (Se estudou qualquer um dos dois, a frase é VERDADEIRA).
                    </div>
                  </div>
                </div>
              </div>

              {/* CONECTIVO 3: CONDICIONAL (SE... ENTÃO) - O MAIS COBRADO! */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(234, 179, 8, 0.08)',
                border: '2px solid rgba(234, 179, 8, 0.55)',
                boxShadow: '0 4px 25px rgba(234, 179, 8, 0.15)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: '#eab308', color: '#000000' }}>
                      ⭐ CAMPEÃO DE PROVAS AOCP (→)
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#fef08a', margin: '0.35rem 0' }}>
                      Condicional (Se... então): O Macete "Vera Fischer é Falsa"
                    </h3>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(234, 179, 8, 0.2)',
                    border: '1px solid #eab308',
                    color: '#facc15',
                    fontWeight: 900,
                    fontSize: '0.85rem'
                  }}>
                    Símbolo: p → q
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.85rem' }}>
                  <div style={{ padding: '0.85rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.45)', borderLeft: '4px solid #eab308' }}>
                    <div style={{ fontSize: '0.78rem', color: '#facc15', fontWeight: 900 }}>O MACETE INFALÍVEL:</div>
                    <div style={{ fontSize: '0.98rem', color: '#ffffff', fontWeight: 800, marginTop: '0.25rem' }}>
                      "V → F = F (Vera Fischer é Falsa!)"
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: '0.35rem 0 0 0' }}>
                      O condicional <strong>SÓ TEM UM JEITO DE DAR FALSO</strong>: quando a primeira parte (antecedente) for VERDADEIRA e a segunda parte (consequente) for FALSA! Todos os outros 3 casos são SEMPRE VERDADEIROS!
                    </p>
                  </div>

                  <div style={{ padding: '0.85rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.45)' }}>
                    <div style={{ fontSize: '0.78rem', color: '#86efac', fontWeight: 800 }}>DETALHE DE OURO:</div>
                    <div style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: '0.25rem', lineHeight: 1.5 }}>
                      Se a primeira proposição for FALSA (F → ...), a condicional é <strong>AUTOMATICAMENTE VERDADEIRA</strong>, não importa o que vem depois! (F → V = V e F → F = V).
                    </div>
                  </div>
                </div>
              </div>

              {/* CONECTIVO 4: DISJUNÇÃO EXCLUSIVA (OU... OU) */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1.5px solid rgba(236, 72, 153, 0.4)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6' }}>
                      CONECTIVO OU... OU (⊻ ou ⊕)
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
                      Disjunção Exclusiva: "O Incompatível"
                    </h3>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(236, 72, 153, 0.15)',
                    border: '1px solid rgba(236, 72, 153, 0.35)',
                    color: '#fbcfe8',
                    fontWeight: 800,
                    fontSize: '0.82rem'
                  }}>
                    Símbolo: p ⊻ q
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.85rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#f472b6', fontWeight: 800 }}>REGRA DE OURO AOCP:</div>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, marginTop: '0.25rem' }}>
                      "Valores DIFERENTES dá VERDADE. Valores IGUAIS dá FALSO!"
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#fbbf24', fontWeight: 800 }}>EXEMPLO TÁTICO:</div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                      "<strong>OU</strong> você está em serviço na viatura <strong>OU</strong> você está de folga." (Não pode estar nos dois ao mesmo tempo!).
                    </div>
                  </div>
                </div>
              </div>

              {/* CONECTIVO 5: BICONDICIONAL (SE E SOMENTE SE) */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1.5px solid rgba(168, 85, 247, 0.4)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc' }}>
                      CONECTIVO SE E SOMENTE SE (↔)
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
                      Bicondicional: "Os Irmãos Gêmeos"
                    </h3>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.35)',
                    color: '#e9d5ff',
                    fontWeight: 800,
                    fontSize: '0.82rem'
                  }}>
                    Símbolo: p ↔ q
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.85rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#c084fc', fontWeight: 800 }}>REGRA DE OURO AOCP:</div>
                    <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700, marginTop: '0.25rem' }}>
                      "Valores IGUAIS dá VERDADE (V↔V = V e F↔F = V). Valores DIFERENTES dá FALSO!"
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.35)' }}>
                    <div style={{ fontSize: '0.76rem', color: '#fbbf24', fontWeight: 800 }}>EXEMPLO TÁTICO:</div>
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                      "O candidato é convocado <strong>SE E SOMENTE SE</strong> for aprovado em todas as etapas."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 3: SIMULADOR INTERATIVO DE TABELA VERDADE EM TEMPO REAL     */}
        {/* ============================================================== */}
        {activeTab === 'tabela' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            <div style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.35)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Calculator size={22} color="#38bdf8" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  Laboratório Tático: Simulador de Tabela Verdade Interativo
                </h2>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0 }}>
                Alterne os valores de <strong>P</strong> e <strong>Q</strong> abaixo com um clique e observe como cada conectivo lógico reage instantaneamente!
              </p>
            </div>

            {/* PAINEL DE CONTROLE DOS VALORES LÓGICOS P E Q */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '1.5rem',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1.5px solid rgba(59, 130, 246, 0.4)',
              flexWrap: 'wrap'
            }}>
              {/* TOGGLE P */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.5rem' }}>
                  PROPOSIÇÃO P
                </div>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSimP(true);
                    }}
                    style={{
                      padding: '0.6rem 1.4rem',
                      borderRadius: '10px',
                      background: simP ? '#22c55e' : 'rgba(255, 255, 255, 0.08)',
                      color: simP ? '#052e16' : '#94a3b8',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      border: simP ? '2px solid #86efac' : '1px solid rgba(255, 255, 255, 0.15)',
                      cursor: 'pointer',
                      boxShadow: simP ? '0 0 15px rgba(34, 197, 94, 0.5)' : 'none'
                    }}
                  >
                    V (Verdade)
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSimP(false);
                    }}
                    style={{
                      padding: '0.6rem 1.4rem',
                      borderRadius: '10px',
                      background: !simP ? '#ef4444' : 'rgba(255, 255, 255, 0.08)',
                      color: !simP ? '#ffffff' : '#94a3b8',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      border: !simP ? '2px solid #fca5a5' : '1px solid rgba(255, 255, 255, 0.15)',
                      cursor: 'pointer',
                      boxShadow: !simP ? '0 0 15px rgba(239, 68, 68, 0.5)' : 'none'
                    }}
                  >
                    F (Falso)
                  </button>
                </div>
              </div>

              <div style={{ width: '2px', height: '60px', background: 'rgba(255, 255, 255, 0.1)' }} />

              {/* TOGGLE Q */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.5rem' }}>
                  PROPOSIÇÃO Q
                </div>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSimQ(true);
                    }}
                    style={{
                      padding: '0.6rem 1.4rem',
                      borderRadius: '10px',
                      background: simQ ? '#22c55e' : 'rgba(255, 255, 255, 0.08)',
                      color: simQ ? '#052e16' : '#94a3b8',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      border: simQ ? '2px solid #86efac' : '1px solid rgba(255, 255, 255, 0.15)',
                      cursor: 'pointer',
                      boxShadow: simQ ? '0 0 15px rgba(34, 197, 94, 0.5)' : 'none'
                    }}
                  >
                    V (Verdade)
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSimQ(false);
                    }}
                    style={{
                      padding: '0.6rem 1.4rem',
                      borderRadius: '10px',
                      background: !simQ ? '#ef4444' : 'rgba(255, 255, 255, 0.08)',
                      color: !simQ ? '#ffffff' : '#94a3b8',
                      fontWeight: 900,
                      fontSize: '1.1rem',
                      border: !simQ ? '2px solid #fca5a5' : '1px solid rgba(255, 255, 255, 0.15)',
                      cursor: 'pointer',
                      boxShadow: !simQ ? '0 0 15px rgba(239, 68, 68, 0.5)' : 'none'
                    }}
                  >
                    F (Falso)
                  </button>
                </div>
              </div>
            </div>

            {/* CARDS DE RESULTADOS CALCULADOS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem'
            }}>
              {/* Card Condicional P -> Q */}
              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: condVal ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.15)',
                border: condVal ? '2px solid #22c55e' : '2px solid #ef4444',
                boxShadow: condVal ? '0 0 15px rgba(34, 197, 94, 0.25)' : '0 0 20px rgba(239, 68, 68, 0.35)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8' }}>SE P ENTÃO Q (→)</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0.4rem 0', color: condVal ? '#4ade80' : '#f87171' }}>
                  {condVal ? 'V (Verdadeiro)' : 'F (Falso)'}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                  {!condVal ? '🚨 CAIU NA VERA FISCHER (V → F = F)' : 'Condicional Válida'}
                </div>
              </div>

              {/* Card Conjunção P ^ Q */}
              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: andVal ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.15)',
                border: andVal ? '2px solid #22c55e' : '2px solid #ef4444',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8' }}>CONJUNÇÃO: P ∧ Q (E)</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0.4rem 0', color: andVal ? '#4ade80' : '#f87171' }}>
                  {andVal ? 'V (Verdadeiro)' : 'F (Falso)'}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                  {andVal ? 'Ambas são verdadeiras' : 'Exigente: falhou por conter F'}
                </div>
              </div>

              {/* Card Disjunção P v Q */}
              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: orVal ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.15)',
                border: orVal ? '2px solid #22c55e' : '2px solid #ef4444',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8' }}>DISJUNÇÃO: P ∨ Q (OU)</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0.4rem 0', color: orVal ? '#4ade80' : '#f87171' }}>
                  {orVal ? 'V (Verdadeiro)' : 'F (Falso)'}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                  {orVal ? 'Generoso: ao menos uma V' : 'Tudo F: deu Falso'}
                </div>
              </div>

              {/* Card Disjunção Exclusiva P ⊻ Q */}
              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: xorVal ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.15)',
                border: xorVal ? '2px solid #22c55e' : '2px solid #ef4444',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8' }}>EXCLUSIVO: P ⊻ Q (OU... OU)</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0.4rem 0', color: xorVal ? '#4ade80' : '#f87171' }}>
                  {xorVal ? 'V (Verdadeiro)' : 'F (Falso)'}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                  {xorVal ? 'Valores Diferentes' : 'Valores Iguais'}
                </div>
              </div>

              {/* Card Bicondicional P <-> Q */}
              <div style={{
                padding: '1.15rem',
                borderRadius: '14px',
                background: bicondVal ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.15)',
                border: bicondVal ? '2px solid #22c55e' : '2px solid #ef4444',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#94a3b8' }}>BICONDICIONAL: P ↔ Q</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0.4rem 0', color: bicondVal ? '#4ade80' : '#f87171' }}>
                  {bicondVal ? 'V (Verdadeiro)' : 'F (Falso)'}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                  {bicondVal ? 'Gêmeos: Valores Iguais' : 'Valores Diferentes'}
                </div>
              </div>
            </div>

            {/* TABELA VERDADE GERAL COMPLETA (MATRIZ OFICIAL) */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1.5px solid rgba(59, 130, 246, 0.35)',
              borderRadius: '16px',
              padding: '1.25rem',
              overflowX: 'auto'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.85rem' }}>
                Matriz Completa de Tabela Verdade (2 Proposições = 2² = 4 Linhas)
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontSize: '0.86rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(59, 130, 246, 0.25)', color: '#93c5fd' }}>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>P</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>Q</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>~P</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>~Q</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>P ∧ Q (E)</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>P ∨ Q (OU)</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>P ⊻ Q (OU..OU)</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(234, 179, 8, 0.25)', color: '#facc15' }}>P → Q (SE..ENTÃO)</th>
                    <th style={{ padding: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>P ↔ Q (SE E SOMENTE SE)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: true, q: true, and: 'V', or: 'V', xor: 'F', cond: 'V', bicond: 'V' },
                    { p: true, q: false, and: 'F', or: 'V', xor: 'V', cond: 'F', bicond: 'F', highlight: true },
                    { p: false, q: true, and: 'F', or: 'V', xor: 'V', cond: 'V', bicond: 'F' },
                    { p: false, q: false, and: 'F', or: 'F', xor: 'F', cond: 'V', bicond: 'V' }
                  ].map((row, idx) => {
                    const isSelected = row.p === simP && row.q === simQ;
                    return (
                      <tr
                        key={idx}
                        style={{
                          background: isSelected 
                            ? 'rgba(37, 99, 235, 0.35)' 
                            : row.highlight 
                              ? 'rgba(239, 68, 68, 0.12)' 
                              : 'transparent',
                          fontWeight: isSelected ? 900 : 500,
                          border: isSelected ? '2px solid #38bdf8' : 'none'
                        }}
                      >
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.p ? '#4ade80' : '#f87171' }}>{row.p ? 'V' : 'F'}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.q ? '#4ade80' : '#f87171' }}>{row.q ? 'V' : 'F'}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: !row.p ? '#4ade80' : '#f87171' }}>{!row.p ? 'V' : 'F'}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: !row.q ? '#4ade80' : '#f87171' }}>{!row.q ? 'V' : 'F'}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.and === 'V' ? '#4ade80' : '#f87171' }}>{row.and}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.or === 'V' ? '#4ade80' : '#f87171' }}>{row.or}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.xor === 'V' ? '#4ade80' : '#f87171' }}>{row.xor}</td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.cond === 'V' ? '#4ade80' : '#f87171', fontWeight: 900 }}>
                          {row.cond} {row.highlight && '(Vera Fischer!)'}
                        </td>
                        <td style={{ padding: '0.65rem', border: '1px solid rgba(255, 255, 255, 0.08)', color: row.bicond === 'V' ? '#4ade80' : '#f87171' }}>{row.bicond}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.65rem', fontStyle: 'italic' }}>
                * A linha 2 (V → F = F) é a célebre regra Vera Fischer. Todas as demais linhas da condicional resultam em Verdadeiro!
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 4: NEGAÇÕES TÁTICAS (MACETE MANÉ & LEIS DE DE MORGAN)       */}
        {/* ============================================================== */}
        {activeTab === 'negacoes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            <div style={{
              padding: '1.35rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(245, 158, 11, 0.15) 100%)',
              border: '1.5px solid rgba(239, 68, 68, 0.45)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <ShieldAlert size={24} color="#ef4444" />
                <h2 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  Negações Táticas: Como Destruir as Pegadinhas da AOCP
                </h2>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0 }}>
                A banca AOCP adora pedir a negação de proposições compostas e quantificadores. Aqui estão as 3 regras sagradas para acertar em 10 segundos:
              </p>
            </div>

            {/* 1. REGRA DO MANÉ (NEGAÇÃO DO SE... ENTÃO) */}
            <div style={{
              padding: '1.35rem',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '2px solid #eab308',
              boxShadow: '0 0 25px rgba(234, 179, 8, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.6rem' }}>💥</span>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fde047', margin: 0 }}>
                      Regra do MANÉ: Negação da Condicional (Se... então)
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                      Fórmula: ~(p → q) ≡ p ∧ ~q
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('~(p → q) ≡ p ∧ ~q', 'mane')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '8px',
                    background: 'rgba(234, 179, 8, 0.15)',
                    border: '1px solid rgba(234, 179, 8, 0.4)',
                    color: '#fef08a',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {copiedFormula === 'mane' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedFormula === 'mane' ? 'Copiado!' : 'Copiar Fórmula'}</span>
                </button>
              </div>

              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                  <span style={{ color: '#22c55e' }}>MA</span>ntém a 1ª &nbsp;
                  <span style={{ color: '#38bdf8' }}>E</span> &nbsp;
                  <span style={{ color: '#ef4444' }}>NE</span>ga a 2ª!
                </div>
                <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  <strong>Atenção Absoluta:</strong> A negação do "Se... então" <strong>NUNCA É OUTRO "SE... ENTÃO"</strong>! O conectivo vira <strong>"E"</strong>!
                </div>
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  borderLeft: '4px solid #22c55e',
                  fontSize: '0.85rem'
                }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>PROPOSIÇÃO ORIGINAL:</div>
                  <div style={{ color: '#ffffff', fontWeight: 700, marginTop: '0.15rem' }}>
                    "Se o soldado Gean treinar tiros, então ele passará no concurso da PMPE."
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.45rem' }}>NEGAÇÃO CORRETA (MANÉ):</div>
                  <div style={{ color: '#4ade80', fontWeight: 900, marginTop: '0.15rem' }}>
                    "O soldado Gean treina tiros <strong>E</strong> ele NÃO passará no concurso da PMPE."
                  </div>
                </div>
              </div>
            </div>

            {/* 2. LEIS DE DE MORGAN (NEGAÇÃO DO E E DO OU) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1.5px solid rgba(59, 130, 246, 0.35)'
              }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                  1ª LEI DE DE MORGAN
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', margin: '0.45rem 0' }}>
                  Negação do Conectivo "E"
                </h3>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.3)', color: '#38bdf8', fontWeight: 800, fontSize: '0.85rem' }}>
                  ~(p ∧ q) ≡ ~p ∨ ~q
                </div>
                <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5, marginTop: '0.65rem' }}>
                  Nega a primeira, <strong>troca o E pelo OU</strong>, e nega a segunda.
                </p>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', marginTop: '0.4rem' }}>
                  "Comi cuscuz <strong>E</strong> tomei café" → "NÃO comi cuscuz <strong>OU</strong> NÃO tomei café".
                </div>
              </div>

              <div style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1.5px solid rgba(34, 197, 94, 0.35)'
              }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                  2ª LEI DE DE MORGAN
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', margin: '0.45rem 0' }}>
                  Negação do Conectivo "OU"
                </h3>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(0, 0, 0, 0.3)', color: '#4ade80', fontWeight: 800, fontSize: '0.85rem' }}>
                  ~(p ∨ q) ≡ ~p ∧ ~q
                </div>
                <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5, marginTop: '0.65rem' }}>
                  Nega a primeira, <strong>troca o OU pelo E</strong>, e nega a segunda.
                </p>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', marginTop: '0.4rem' }}>
                  "Corro na orla <strong>OU</strong> nado no mar" → "NÃO corro na orla <strong>E</strong> NÃO nado no mar".
                </div>
              </div>
            </div>

            {/* 3. NEGAÇÃO DE QUANTIFICADORES (TODO, NENHUM, ALGUM) */}
            <div style={{
              padding: '1.25rem',
              borderRadius: '14px',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1.5px solid rgba(168, 85, 247, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Compass size={20} color="#c084fc" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#d8b4fe', margin: 0 }}>
                  Negação de Quantificadores Lógicos (Macete PEA + NÃO)
                </h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0 0 0.85rem 0' }}>
                A maior pegadinha da AOCP é dizer que a negação de "TODO" é "NENHUM". <strong>ISSO ESTÁ ERRADO!</strong>
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.4)', borderLeft: '3px solid #ef4444' }}>
                  <div style={{ fontSize: '0.78rem', color: '#f87171', fontWeight: 800 }}>Negação de "TODO A é B":</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, margin: '0.25rem 0' }}>
                    PEA + NÃO (Pelo menos um NÃO é / Existe um que NÃO é / Algum NÃO é)
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                    "Todo policial usa farda" → Negação: "Pelo menos um policial <strong>NÃO</strong> usa farda".
                  </div>
                </div>

                <div style={{ padding: '0.85rem', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.4)', borderLeft: '3px solid #38bdf8' }}>
                  <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800 }}>Negação de "NENHUM A é B":</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, margin: '0.25rem 0' }}>
                    PEA (Pelo menos um é / Existe um que é / Algum é)
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#cbd5e1' }}>
                    "Nenhum soldado recuou" → Negação: "Algum soldado recuou".
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 5: EQUIVALÊNCIAS LÓGICAS (CONTRAPOSITIVA & MACETE NEOU)    */}
        {/* ============================================================== */}
        {activeTab === 'equivalencias' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            <div style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 197, 94, 0.15) 100%)',
              border: '1.5px solid rgba(59, 130, 246, 0.35)'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                Equivalências Lógicas: Dizer a Mesma Coisa com Outras Palavras
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0 }}>
                Duas proposições são equivalentes quando possuem <strong>exatamente a mesma tabela verdade</strong>. Na condicional (p → q), existem DUAS equivalências fundamentais:
              </p>
            </div>

            {/* 1. CONTRAPOSITIVA (INVERTE E NEGA AS DUAS) */}
            <div style={{
              padding: '1.35rem',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '2px solid #38bdf8',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8' }}>
                    EQUIVALÊNCIA 1 (A MAIS FREQUENTE)
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
                    A Contrapositiva: "Inverte e Nega as Duas Partes"
                  </h3>
                </div>
                <div style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid #38bdf8',
                  color: '#bae6fd',
                  fontWeight: 900,
                  fontSize: '0.9rem'
                }}>
                  p → q &nbsp;≡&nbsp; ~q → ~p
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '12px', background: 'rgba(0, 0, 0, 0.45)' }}>
                <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  Para criar a equivalência mantendo o "Se... então":
                  <br />
                  1. Pegue a segunda parte (q) e jogue para a frente, NEGANDO-A (~q).
                  <br />
                  2. Pegue a primeira parte (p) e jogue para trás, NEGANDO-A (~p).
                </div>

                <div style={{
                  marginTop: '0.85rem',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  borderLeft: '4px solid #38bdf8'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>FRASE ORIGINAL:</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, marginTop: '0.15rem' }}>
                    "Se chove no Recife, então a pista fica escorregadia."
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>EQUIVALÊNCIA CONTRAPOSITIVA:</div>
                  <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 900, marginTop: '0.15rem' }}>
                    "Se a pista NÃO fica escorregadia, então NÃO chove no Recife."
                  </div>
                </div>
              </div>
            </div>

            {/* 2. REGRA DO NEOU (TRANSFORMAÇÃO EM OU) */}
            <div style={{
              padding: '1.35rem',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '2px solid #22c55e',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                    EQUIVALÊNCIA 2 (MACETE DO NEOU)
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
                    Regra do NEOU: Transformando "Se... então" em "OU"
                  </h3>
                </div>
                <div style={{
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid #22c55e',
                  color: '#86efac',
                  fontWeight: 900,
                  fontSize: '0.9rem'
                }}>
                  p → q &nbsp;≡&nbsp; ~p ∨ q
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '12px', background: 'rgba(0, 0, 0, 0.45)' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                  <span style={{ color: '#ef4444' }}>NE</span>ga a 1ª &nbsp;
                  <span style={{ color: '#fbbf24' }}>OU</span> &nbsp;
                  <span style={{ color: '#22c55e' }}>Repete a 2ª</span>!
                </div>
                <div style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5, marginTop: '0.5rem' }}>
                  Muito cobrada quando as alternativas da questão NÃO trazem o conectivo "Se... então", mas trazem o conectivo "OU"!
                </div>

                <div style={{
                  marginTop: '0.85rem',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  borderLeft: '4px solid #22c55e'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>FRASE ORIGINAL:</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, marginTop: '0.15rem' }}>
                    "Se sou policial militar, então defendo a sociedade."
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>EQUIVALÊNCIA NEOU:</div>
                  <div style={{ fontSize: '0.88rem', color: '#4ade80', fontWeight: 900, marginTop: '0.15rem' }}>
                    "NÃO sou policial militar <strong>OU</strong> defendo a sociedade."
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ABA 6: BATERIA DE QUESTÕES AOCP RESOLVIDAS PASSO A PASSO        */}
        {/* ============================================================== */}
        {activeTab === 'exercicios' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.2s ease' }}>
            <div style={{
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(249, 115, 22, 0.15) 100%)',
              border: '1.5px solid rgba(234, 179, 8, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Award size={24} color="#facc15" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  Treinamento Prático: Questões Comentadas Padrão AOCP
                </h2>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0 }}>
                Teste seu aprendizado agora mesmo nas questões abaixo. Selecione a alternativa e veja o passo a passo tático com justificativa detalhada!
              </p>
            </div>

            {[
              {
                id: 1,
                banca: 'Instituto AOCP • Concurso Policial Militar',
                enunciado: 'Considere a seguinte afirmação: "Se o soldado treinou tiro tático, então ele acertou o alvo com precisão." Assinale a alternativa que apresenta a NEGAÇÃO lógica dessa afirmação:',
                options: [
                  'A) Se o soldado não treinou tiro tático, então ele não acertou o alvo.',
                  'B) O soldado treinou tiro tático e não acertou o alvo com precisão.',
                  'C) O soldado não treinou tiro tático ou acertou o alvo com precisão.',
                  'D) Se o soldado acertou o alvo com precisão, então ele treinou tiro tático.',
                  'E) O soldado não treinou tiro tático e acertou o alvo com precisão.'
                ],
                correctIndex: 1,
                passoAPasso: [
                  'Passo 1: Identificar a estrutura da proposição: trata-se de uma CONDICIONAL (Se p, então q).',
                  'Passo 2: Lembrar a regra de negação da condicional: REGRA DO MANÉ (MAntém a primeira E NEga a segunda).',
                  'Passo 3: Primeira parte (p): "O soldado treinou tiro tático" -> Mantém!',
                  'Passo 4: Troca o conectivo "Se... então" por "E".',
                  'Passo 5: Segunda parte (q): "ele acertou o alvo com precisão" -> Nega: "NÃO acertou o alvo com precisão".',
                  'Passo 6: Resultado final: "O soldado treinou tiro tático E NÃO acertou o alvo com precisão". Alternativa correta: B.'
                ]
              },
              {
                id: 2,
                banca: 'Instituto AOCP • Segurança Pública',
                enunciado: 'Dadas as frases a seguir, assinale a única que representa uma PROPOSIÇÃO LÓGICA VÁLIDA:',
                options: [
                  'A) Quantos disparos foram efetuados no local da ocorrência?',
                  'B) Mantenha a guarda alta e avance com cuidado!',
                  'C) O Recife é a capital de Pernambuco.',
                  'D) Que dia glorioso para o pelotão de Choque!',
                  'E) Ele é um delegado exemplar.'
                ],
                correctIndex: 2,
                passoAPasso: [
                  'Passo 1: Relembrar o que NÃO é proposição: perguntas, ordens, exclamações, desejos e sentenças abertas.',
                  'Passo 2: Analisar a opção A: É uma pergunta (interrogativa) -> NÃO é proposição.',
                  'Passo 3: Analisar a opção B: É uma ordem (imperativa) -> NÃO é proposição.',
                  'Passo 4: Analisar a opção D: É uma exclamação -> NÃO é proposição.',
                  'Passo 5: Analisar a opção E: Contém a palavra "Ele" sem sujeito definido (sentença aberta) -> NÃO é proposição.',
                  'Passo 6: Analisar a opção C: Sentença declarativa afirmativa com sentido completo e valor lógico Verdadeiro claro -> É UMA PROPOSIÇÃO! Alternativa correta: C.'
                ]
              },
              {
                id: 3,
                banca: 'Instituto AOCP • Soldado PM',
                enunciado: 'A proposição "Se pratico atividade física, então tenho boa saúde" é logicamente EQUIVALENTE à proposição:',
                options: [
                  'A) Se não pratico atividade física, então não tenho boa saúde.',
                  'B) Pratico atividade física ou tenho boa saúde.',
                  'C) Se não tenho boa saúde, então não pratico atividade física.',
                  'D) Tenho boa saúde se e somente se pratico atividade física.',
                  'E) Pratico atividade física e não tenho boa saúde.'
                ],
                correctIndex: 2,
                passoAPasso: [
                  'Passo 1: A questão pede a EQUIVALÊNCIA da condicional (p → q).',
                  'Passo 2: Aplicamos a CONTRAPOSITIVA: inverte os termos e nega ambos (p → q ≡ ~q → ~p).',
                  'Passo 3: Invertendo e negando: "Se NÃO tenho boa saúde, então NÃO pratico atividade física".',
                  'Passo 4: Conferir as alternativas: a opção C traz exatamente a contrapositiva perfeita.',
                  'Passo 5: Nota: a alternativa E é a negação (MANÉ), não a equivalência. Cuidado para não confundir!'
                ]
              }
            ].map((q) => {
              const selected = exerciseAnswers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = selected === q.correctIndex;
              const isOpenExpl = showExplanation[q.id];

              return (
                <div
                  key={q.id}
                  style={{
                    padding: '1.35rem',
                    borderRadius: '16px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: isAnswered 
                      ? isCorrect 
                        ? '2px solid #22c55e' 
                        : '2px solid #ef4444' 
                      : '1.5px solid rgba(59, 130, 246, 0.35)',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 800 }}>
                      {q.banca}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      Questão {q.id} de 3
                    </span>
                  </div>

                  <p style={{ fontSize: '0.94rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                    {q.enunciado}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selected === optIdx;
                      let btnBg = 'rgba(255, 255, 255, 0.04)';
                      let btnBorder = '1px solid rgba(255, 255, 255, 0.12)';
                      let textColor = '#cbd5e1';

                      if (isAnswered) {
                        if (optIdx === q.correctIndex) {
                          btnBg = 'rgba(34, 197, 94, 0.2)';
                          btnBorder = '1.5px solid #22c55e';
                          textColor = '#86efac';
                        } else if (isOptionSelected) {
                          btnBg = 'rgba(239, 68, 68, 0.2)';
                          btnBorder = '1.5px solid #ef4444';
                          textColor = '#fca5a5';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => {
                            sound.playClick();
                            setExerciseAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                            if (optIdx === q.correctIndex) {
                              sound.playLevelUp();
                              confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
                            } else {
                              sound.playError();
                            }
                          }}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            background: btnBg,
                            border: btnBorder,
                            color: textColor,
                            fontSize: '0.86rem',
                            fontWeight: isOptionSelected ? 800 : 500,
                            textAlign: 'left',
                            cursor: isAnswered ? 'default' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.15s'
                          }}
                        >
                          <span>{opt}</span>
                          {isAnswered && optIdx === q.correctIndex && <CheckCircle2 size={16} color="#22c55e" />}
                          {isAnswered && isOptionSelected && optIdx !== q.correctIndex && <XCircle size={16} color="#ef4444" />}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div style={{ marginTop: '1rem' }}>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setShowExplanation((prev) => ({ ...prev, [q.id]: !prev[q.id] }));
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          background: 'transparent',
                          border: 'none',
                          color: '#38bdf8',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          padding: '0.25rem 0'
                        }}
                      >
                        <HelpCircle size={15} />
                        <span>{isOpenExpl ? 'Ocultar Resolução Passo a Passo' : 'Ver Resolução Passo a Passo Tática'}</span>
                      </button>

                      {isOpenExpl && (
                        <div style={{
                          marginTop: '0.65rem',
                          padding: '0.85rem',
                          borderRadius: '10px',
                          background: 'rgba(0, 0, 0, 0.45)',
                          borderLeft: '4px solid #38bdf8'
                        }}>
                          <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 900, marginBottom: '0.45rem' }}>
                            RAIO-X DA QUESTÃO • DOUTRINA AOCP:
                          </div>
                          {q.passoAPasso.map((p, pIdx) => (
                            <div key={pIdx} style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5, marginBottom: '0.25rem' }}>
                              {p}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* BOTÃO PARA PRATICAR NO MODO SOBREVIVÊNCIA */}
            <div style={{
              padding: '1.5rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)',
              border: '2px solid #22c55e',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              <Flame size={32} color="#22c55e" />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  Pronto para Testar no Campo de Batalha?
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: '0.25rem 0 0 0' }}>
                  Entre na Operação Sobrevivência e enfrente o banco infinito de questões de RLM e matérias da PMPE com as 8 patentes de dificuldade!
                </p>
              </div>

              <button
                onClick={() => {
                  sound.playGunshot38();
                  onClose();
                  if (onOpenSurvivalMode) onOpenSurvivalMode();
                }}
                style={{
                  padding: '0.85rem 1.75rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: '#052e16',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(34, 197, 94, 0.45)'
                }}
              >
                <Zap size={18} />
                <span>Iniciar Operação Sobrevivência Agora</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
