import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  CheckSquare, 
  BookOpen, 
  X, 
  Shield, 
  HelpCircle,
  Sparkles,
  Sliders
} from 'lucide-react';
import type { QuizQuestion } from '../types/game';
import { SIMULADOS_LIST } from '../data/questions';
import { sound } from '../utils/sound';

interface QuestionPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuizQuestion[];
  initialSimuladoId?: string;
  userName?: string | null;
}

export const QuestionPdfModal: React.FC<QuestionPdfModalProps> = ({
  isOpen,
  onClose,
  questions,
  initialSimuladoId = 'caderno_pmpe_estatuto',
  userName = 'Aluno Militar'
}) => {
  const [selectedSimulado, setSelectedSimulado] = useState<string>(initialSimuladoId);
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [includeComments, setIncludeComments] = useState<boolean>(false);
  const [includeAnswerSheet, setIncludeAnswerSheet] = useState<boolean>(true);

  if (!isOpen) return null;

  // Filtra questões do caderno selecionado
  const getFilteredQuestions = (): QuizQuestion[] => {
    let list: QuizQuestion[] = [];
    if (selectedSimulado === 'all') {
      list = [...questions];
    } else if (selectedSimulado === 'caderno_pmpe_estatuto') {
      list = questions.filter(
        (q) =>
          q.categoryId === 'legislacao_pmpe' ||
          (q.topicoEdital && q.topicoEdital.includes('Estatuto')) ||
          (q.materiaNome && q.materiaNome.includes('PMPE'))
      );
    } else if (selectedSimulado === 'caderno_direitos_humanos') {
      list = questions.filter(
        (q) =>
          q.categoryId === 'humanos_leis' ||
          (q.topicoEdital &&
            (q.topicoEdital.includes('Direitos Humanos') || q.topicoEdital.includes('Pacto')))
      );
    } else if (selectedSimulado === 'caderno_leg_extravagante') {
      list = questions.filter(
        (q) =>
          q.categoryId === 'legislacao_extravagante' ||
          (q.simuladoOrigem && q.simuladoOrigem.includes('Extravagante'))
      );
    } else if (selectedSimulado === 'caderno_rlm_probabilidade') {
      list = questions.filter(
        (q) =>
          q.categoryId === 'raciocinio' ||
          (q.simuladoOrigem && q.simuladoOrigem.includes('Probabilidade'))
      );
    } else if (selectedSimulado === 'caderno_const_pmpe') {
      list = questions.filter((q) => q.categoryId === 'constitucional');
    } else if (selectedSimulado === 'caderno_portugues_aocp') {
      list = questions.filter((q) => q.categoryId === 'portugues');
    } else if (selectedSimulado === 'caderno_informatica') {
      list = questions.filter((q) => q.categoryId === 'informatica');
    } else if (selectedSimulado === 'caderno_historia_pe') {
      list = questions.filter((q) => q.categoryId === 'historia_pe');
    } else if (selectedSimulado === 'caderno_600_ineditas_edital') {
      list = questions.filter((q) => q.simuladoOrigem === 'Caderno Oficial Edital AOCP 100 Inéditas');
    } else if (selectedSimulado === 'caderno_100_portugues_aocp') {
      list = questions.filter((q) => q.categoryId === 'portugues' && q.id.startsWith('port_inedita_100'));
    } else if (selectedSimulado === 'caderno_100_historia_pe_aocp') {
      list = questions.filter((q) => q.categoryId === 'historia_pe' && q.id.startsWith('hist_pe_inedita_100'));
    } else if (selectedSimulado === 'caderno_100_rlm_aocp') {
      list = questions.filter((q) => q.categoryId === 'raciocinio' && q.id.startsWith('rlm_inedita_100'));
    } else if (selectedSimulado === 'caderno_100_informatica_aocp') {
      list = questions.filter((q) => q.categoryId === 'informatica' && q.id.startsWith('info_inedita_100'));
    } else if (selectedSimulado === 'caderno_100_constitucional_aocp') {
      list = questions.filter((q) => q.categoryId === 'constitucional' && q.id.startsWith('const_inedita_100'));
    } else if (selectedSimulado === 'caderno_100_humanos_leis_aocp') {
      list = questions.filter((q) => q.categoryId === 'humanos_leis' && q.id.startsWith('humanos_leis_inedita_100'));
    } else {
      list = questions.filter((q) => q.simuladoOrigem === selectedSimulado);
    }

    if (list.length === 0) list = questions.slice(0, 50);

    return list.slice(0, questionCount);
  };

  // Dispara a geração do PDF e tela de impressão
  const handleGeneratePdf = () => {
    sound.playLevelUp();
    const targetQuestions = getFilteredQuestions();
    const simInfo = SIMULADOS_LIST.find((s) => s.id === selectedSimulado) || {
      name: 'Caderno de Questões PMPE',
    };

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Por favor, permita pop-ups no seu navegador para gerar o PDF de impressão!');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Caderno de Questões - PMPE 2026</title>
        <style>
          @page {
            size: A4;
            margin: 15mm 15mm 15mm 15mm;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #111827;
            background: #ffffff;
            line-height: 1.45;
            font-size: 11pt;
            margin: 0;
            padding: 0;
          }
          .header {
            border: 2px solid #0f172a;
            border-radius: 8px;
            padding: 12px 16px;
            margin-bottom: 20px;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .header-title {
            text-align: center;
            flex: 1;
          }
          .header-title h1 {
            margin: 0;
            font-size: 14pt;
            text-transform: uppercase;
            font-weight: 900;
            letter-spacing: 0.5px;
          }
          .header-title h2 {
            margin: 4px 0 0;
            font-size: 11pt;
            color: #15803d;
            font-weight: 700;
          }
          .header-meta {
            border-top: 1px dashed #cbd5e1;
            margin-top: 8px;
            padding-top: 6px;
            display: flex;
            justify-content: space-between;
            font-size: 9pt;
            color: #475569;
          }
          .instructions {
            background: #f1f5f9;
            border-left: 4px solid #16a34a;
            padding: 8px 12px;
            font-size: 9pt;
            margin-bottom: 18px;
            color: #334155;
          }
          .question-card {
            margin-bottom: 18px;
            padding-bottom: 14px;
            border-bottom: 1px solid #e2e8f0;
            page-break-inside: avoid;
          }
          .question-header {
            font-weight: 800;
            font-size: 11pt;
            color: #0f172a;
            margin-bottom: 6px;
          }
          .question-tag {
            font-size: 8pt;
            background: #e2e8f0;
            color: #475569;
            padding: 2px 6px;
            border-radius: 4px;
            margin-left: 6px;
            font-weight: 600;
          }
          .question-text {
            margin-bottom: 10px;
            text-align: justify;
          }
          .options-list {
            margin-left: 10px;
          }
          .option-row {
            display: flex;
            align-items: flex-start;
            margin-bottom: 5px;
            font-size: 10.5pt;
          }
          .option-letter {
            width: 22px;
            height: 22px;
            border: 1px solid #64748b;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 8.5pt;
            margin-right: 8px;
            flex-shrink: 0;
          }
          .option-text {
            flex: 1;
          }
          .comment-box {
            margin-top: 8px;
            padding: 8px 12px;
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 6px;
            font-size: 9pt;
            color: #166534;
          }
          .answer-grid {
            page-break-before: always;
            border: 2px solid #0f172a;
            border-radius: 8px;
            padding: 16px;
            background: #ffffff;
          }
          .grid-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
          }
          .grid-table th, .grid-table td {
            border: 1px solid #cbd5e1;
            padding: 6px 8px;
            text-align: center;
            font-size: 9.5pt;
          }
          .grid-table th {
            background: #f1f5f9;
            font-weight: 800;
          }
          .bubble {
            width: 18px;
            height: 18px;
            border: 1.5px solid #475569;
            border-radius: 50%;
            display: inline-block;
            margin: 0 3px;
          }
          .print-bar {
            background: #0f172a;
            color: #ffffff;
            padding: 12px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .print-btn {
            background: #22c55e;
            color: #ffffff;
            border: none;
            padding: 8px 20px;
            font-weight: 900;
            font-size: 11pt;
            border-radius: 6px;
            cursor: pointer;
            margin-left: 12px;
          }
          @media print {
            .print-bar {
              display: none !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-bar">
          📄 <strong>Caderno de Questões Gerado com Sucesso!</strong>
          <button class="print-btn" onclick="window.print()">🖨️ Imprimir / Salvar como PDF</button>
        </div>

        <div style="padding: 15px;">
          <!-- CABEÇALHO MILITAR -->
          <div class="header">
            <div class="header-title">
              <h1>POLÍCIA MILITAR DE PERNAMBUCO • EDITAL SOLDADO 2026</h1>
              <h2>${simInfo.name} • BANCA INSTITUTO AOCP</h2>
              <div class="header-meta">
                <span>👤 <strong>Aluno:</strong> ${userName || 'Guerreiro(a)'}</span>
                <span>📅 <strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</span>
                <span>🎯 <strong>Total:</strong> ${targetQuestions.length} Questões</span>
              </div>
            </div>
          </div>

          <div class="instructions">
            <strong>Instruções de Prova:</strong> Preencha o cartão-resposta com caneta esferográfica preta ou azul. Cada questão possui 5 alternativas (A, B, C, D, E) com apenas 1 alternativa correta.
          </div>

          <!-- LISTA DE QUESTÕES -->
          ${targetQuestions
            .map((q, index) => {
              const letters = ['A', 'B', 'C', 'D', 'E'];
              return `
              <div class="question-card">
                <div class="question-header">
                  QUESTÃO ${String(index + 1).padStart(2, '0')}
                  <span class="question-tag">${q.banca || 'AOCP'} • ${q.topicoEdital || 'PMPE'}</span>
                </div>
                <div class="question-text">${q.question}</div>
                <div class="options-list">
                  ${q.options
                    .map(
                      (opt, oIdx) => `
                    <div class="option-row">
                      <span class="option-letter">${letters[oIdx]}</span>
                      <span class="option-text">${opt}</span>
                    </div>
                  `
                    )
                    .join('')}
                </div>
                ${
                  includeComments
                    ? `
                  <div class="comment-box">
                    <strong>Gabarito Oficial: ${letters[q.correctIndex]}</strong><br>
                    <strong>Fundamentação:</strong> ${q.fundamentacaoLegal || 'Legislação aplicável'}<br>
                    <strong>Comentário:</strong> ${q.explanation}
                  </div>
                `
                    : ''
                }
              </div>
            `;
            })
            .join('')}

          <!-- CARTÃO-RESPOSTA / FOLHA DE GABARITO -->
          ${
            includeAnswerSheet
              ? `
            <div class="answer-grid">
              <div style="text-align: center; margin-bottom: 12px;">
                <h3 style="margin: 0; font-size: 13pt; text-transform: uppercase;">FOLHA DE RESPOSTAS (CARTÃO-RESPOSTA)</h3>
                <p style="margin: 3px 0 0; font-size: 9pt; color: #64748b;">Marque preenchendo totalmente a bolha correspondente.</p>
              </div>

              <table class="grid-table">
                <thead>
                  <tr>
                    <th>Nº</th>
                    <th>OPÇÕES</th>
                    <th>Nº</th>
                    <th>OPÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  ${Array.from({ length: Math.ceil(targetQuestions.length / 2) })
                    .map((_, rIdx) => {
                      const q1 = rIdx + 1;
                      const q2 = rIdx + 1 + Math.ceil(targetQuestions.length / 2);
                      return `
                      <tr>
                        <td><strong>${String(q1).padStart(2, '0')}</strong></td>
                        <td>
                          <span class="bubble"></span> A
                          <span class="bubble"></span> B
                          <span class="bubble"></span> C
                          <span class="bubble"></span> D
                          <span class="bubble"></span> E
                        </td>
                        ${
                          q2 <= targetQuestions.length
                            ? `
                          <td><strong>${String(q2).padStart(2, '0')}</strong></td>
                          <td>
                            <span class="bubble"></span> A
                            <span class="bubble"></span> B
                            <span class="bubble"></span> C
                            <span class="bubble"></span> D
                            <span class="bubble"></span> E
                          </td>
                        `
                            : '<td>-</td><td>-</td>'
                        }
                      </tr>
                    `;
                    })
                    .join('')}
                </tbody>
              </table>

              <!-- GABARITO CONSOLIDADO NO FINAL DA PÁGINA -->
              <div style="margin-top: 30px; border-top: 2px dashed #94a3b8; padding-top: 15px;">
                <h4 style="margin: 0 0 10px; font-size: 11pt; text-align: center; color: #15803d;">
                  GABARITO OFICIAL DO PROFESSOR (DESTAQUE APÓS TERMINAR)
                </h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; font-size: 9.5pt;">
                  ${targetQuestions
                    .map((q, idx) => {
                      const letters = ['A', 'B', 'C', 'D', 'E'];
                      return `<span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #cbd5e1;">
                      <strong>${idx + 1}:</strong> [ ${letters[q.correctIndex]} ]
                    </span>`;
                    })
                    .join('')}
                </div>
              </div>
            </div>
          `
              : ''
          }
        </div>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(5, 10, 7, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'linear-gradient(145deg, #131b15 0%, #0c120e 100%)',
          border: '1.5px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            background: 'rgba(18, 28, 22, 0.95)',
            borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(2, 132, 199, 0.4)',
              }}
            >
              <FileText size={22} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#f8fafc' }}>
                Gerador de Caderno em PDF
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#7dd3fc' }}>
                Baixe e imprima listas de questões com cartão-resposta oficial
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Opções de Configuração */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Seleção do Caderno */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Escolha a Matéria / Caderno:
            </label>
            <select
              value={selectedSimulado}
              onChange={(e) => setSelectedSimulado(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                background: 'rgba(24, 34, 27, 0.9)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '0.92rem',
                outline: 'none',
              }}
            >
              <option value="caderno_pmpe_estatuto">🛡️ Legislação da PMPE & Estatuto (114 Questões)</option>
              <option value="caderno_direitos_humanos">🕊️ Direitos Humanos & Pacto de São José (200 Questões)</option>
              <option value="caderno_leg_extravagante">🚨 Legislação Extravagante (250 Questões)</option>
              <option value="caderno_rlm_probabilidade">🧠 RLM & Probabilidade com Passo a Passo (250 Questões)</option>
              <option value="caderno_const_pmpe">⚖️ Direito Constitucional & Art. 144 (160 Questões)</option>
              <option value="caderno_portugues_aocp">📖 Língua Portuguesa AOCP (250 Questões)</option>
              <option value="caderno_informatica">💻 Noções de Informática PMPE (300 Questões)</option>
              <option value="caderno_historia_pe">🦁 História de Pernambuco</option>
              <option value="nuce_completo">🎯 Simulado Completo PMPE (60 Questões)</option>
              <option value="all">⭐ Acervo Geral (Todas as Disciplinas)</option>
            </select>
          </div>

          {/* Quantidade de Questões */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Quantidade de Questões para o PDF:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
              {[15, 30, 60, 100].map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setQuestionCount(qty);
                  }}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '10px',
                    background: questionCount === qty ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: questionCount === qty ? '2px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.12)',
                    color: questionCount === qty ? '#38bdf8' : '#cbd5e1',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  {qty} Questões
                </button>
              ))}
            </div>
          </div>

          {/* Opções de Formato */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
              Opções de Impressão:
            </label>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.86rem', color: '#f1f5f9' }}>
                <input
                  type="checkbox"
                  checked={includeAnswerSheet}
                  onChange={(e) => setIncludeAnswerSheet(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#38bdf8' }}
                />
                <span>Incluir <strong>Cartão-Resposta (Folha de Bolhas)</strong> e Gabarito ao final</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.86rem', color: '#f1f5f9' }}>
                <input
                  type="checkbox"
                  checked={includeComments}
                  onChange={(e) => setIncludeComments(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#38bdf8' }}
                />
                <span>Imprimir como <strong>Apostila Comentada</strong> (com resoluções abaixo de cada questão)</span>
              </label>
            </div>
          </div>

          {/* Botão de Ação */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              type="button"
              onClick={handleGeneratePdf}
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                padding: '0.95rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(2, 132, 199, 0.4)',
              }}
            >
              <Printer size={20} />
              <span>Gerar & Imprimir Caderno em PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
