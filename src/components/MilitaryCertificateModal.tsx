import React, { useState } from 'react';
import {
  Award,
  Printer,
  Share2,
  Copy,
  CheckCircle2,
  Sparkles,
  Shield,
  X,
  QrCode,
  Download
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface MilitaryCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userLevel?: number;
  totalAnswered?: number;
  correctAnswers?: number;
  xp?: number;
}

export const MilitaryCertificateModal: React.FC<MilitaryCertificateModalProps> = ({
  isOpen,
  onClose,
  userName = 'Soldado Combatente',
  userLevel = 1,
  totalAnswered = 0,
  correctAnswers = 0,
  xp = 0
}) => {
  if (!isOpen) return null;

  const [studentName, setStudentName] = useState(userName || 'Guerreiro PMPE');
  const [isCopied, setIsCopied] = useState(false);

  const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 85;
  const certificateCode = `PMPE-2026-${(userName || 'REC').slice(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  const handlePrintCertificate = () => {
    sound.playLevelUp();
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.4 },
      colors: ['#fbbf24', '#f59e0b', '#d97706', '#22c55e']
    });

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Certificado Militar PMPE 2026 - ${studentName}</title>
        <style>
          @page { size: A4 landscape; margin: 10mm; }
          body {
            font-family: 'Times New Roman', Times, serif;
            color: #0f172a;
            margin: 0;
            padding: 20px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
          }
          .border-outer {
            border: 6px double #b45309;
            padding: 25px;
            width: 95%;
            background: #fefdf9;
            box-shadow: inset 0 0 30px rgba(180, 83, 9, 0.1);
            position: relative;
            text-align: center;
          }
          .border-inner {
            border: 2px solid #d97706;
            padding: 25px 35px;
          }
          .logo-img {
            width: 75px;
            height: auto;
            margin-bottom: 8px;
          }
          .header-state {
            font-size: 11pt;
            letter-spacing: 4px;
            text-transform: uppercase;
            font-weight: bold;
            color: #1e3a8a;
            margin: 0;
          }
          .header-main {
            font-size: 22pt;
            letter-spacing: 2px;
            font-weight: 900;
            color: #92400e;
            margin: 10px 0 15px;
            text-transform: uppercase;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .cert-text {
            font-size: 13pt;
            line-height: 1.6;
            color: #1e293b;
            margin: 15px 0;
            text-align: justify;
          }
          .candidate-name {
            font-size: 24pt;
            font-weight: 900;
            color: #047857;
            text-decoration: underline;
            display: block;
            margin: 10px 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .stats-row {
            display: flex;
            justify-content: space-around;
            border-top: 1px dashed #94a3b8;
            border-bottom: 1px dashed #94a3b8;
            padding: 10px 0;
            margin: 20px 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 10pt;
            color: #334155;
          }
          .signatures {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 35px;
            padding: 0 40px;
          }
          .sig-box {
            text-align: center;
          }
          .sig-line {
            width: 250px;
            border-top: 1.5px solid #0f172a;
            margin-bottom: 5px;
          }
          .sig-name {
            font-weight: 900;
            font-size: 11pt;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }
          .sig-title {
            font-size: 9pt;
            color: #64748b;
          }
          .sig-handwritten {
            font-family: 'Brush Script MT', cursive, serif;
            font-size: 22pt;
            color: #1e3a8a;
            margin-bottom: -8px;
          }
          .hash-code {
            position: absolute;
            bottom: 12px;
            right: 25px;
            font-size: 7.5pt;
            font-family: monospace;
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <div class="border-outer">
          <div class="border-inner">
            <img src="./brasao-pmpe.png" class="logo-img" alt="Brasão PMPE" onerror="this.style.display='none'">
            <div class="header-state">Governo do Estado de Pernambuco • Polícia Militar</div>
            <div class="header-main">Certificado de Aptidão & Mérito Operacional</div>

            <div class="cert-text">
              Certificamos que o(a) Soldado Recruta
              <span class="candidate-name">${studentName}</span>
              concluiu com êxito e disciplina militar a grade preparatória intensiva do <strong>Edital de Soldado da Polícia Militar de Pernambuco 2026 (Instituto AOCP)</strong>, demonstrando aptidão tática nas disciplinas de Língua Portuguesa, Raciocínio Lógico Proposicional, História de Pernambuco, Informática Aplicada, Direito Constitucional, Direitos Humanos, Legislação Extravagante e Redação Dissertativa-Argumentativa.
            </div>

            <div class="stats-row">
              <div>🎯 <strong>Precisão Geral:</strong> ${accuracy}%</div>
              <div>⚡ <strong>Nível Militar:</strong> Nível ${userLevel}</div>
              <div>🏆 <strong>Experiência Operacional:</strong> ${xp} XP</div>
              <div>📅 <strong>Data de Emissão:</strong> ${new Date().toLocaleDateString('pt-BR')}</div>
            </div>

            <div class="signatures">
              <div class="sig-box">
                <div class="sig-handwritten">Gean Gouveia</div>
                <div class="sig-line"></div>
                <div class="sig-name">Comandante Gean Gouveia</div>
                <div class="sig-title">Instrutor-Chefe & Fundador da Missão PMPE 2026</div>
              </div>

              <div class="sig-box">
                <div style="font-size: 9pt; color: #475569; margin-bottom: 5px;">Autenticado Eletronicamente</div>
                <div class="sig-line"></div>
                <div class="sig-name">Registro de Conclusão do Pelotão</div>
                <div class="sig-title">Código: ${certificateCode}</div>
              </div>
            </div>

            <div class="hash-code">Validado pelo Sistema Antigravity Ide • Edição Especial PMPE 2026</div>
          </div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 350);
  };

  const handleShareStory = () => {
    sound.playClick();
    const shareText = `🎖️ Oficialmente Apto para a PMPE 2026! Concluí o treinamento no Preparatório Tático com ${accuracy}% de acerto e ${xp} XP. Foco na farda da Polícia Militar de Pernambuco! 🦁⚔️ #PMPE2026 #MissaoPMPE`;
    navigator.clipboard.writeText(shareText);
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
          maxWidth: '920px',
          maxHeight: '94vh',
          background: 'linear-gradient(180deg, #090e1a 0%, #05070c 100%)',
          border: '2px solid rgba(245, 158, 11, 0.55)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 158, 11, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(180, 83, 9, 0.35) 0%, rgba(10, 17, 32, 0.98) 100%)',
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
              <Award size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  CERTIFICADO OFICIAL DE APTIDÃO MILITAR
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
                  PMPE 2026
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Emissão de honra ao mérito para impressão em alta definição e compartilhamento no Instagram.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
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

        {/* CORPO DO MODAL (PREVIEW DO CERTIFICADO) */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center'
          }}
        >
          {/* Nome no Certificado */}
          <div style={{ width: '100%', maxWidth: '750px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fbbf24', whiteSpace: 'nowrap' }}>
              Nome no Certificado:
            </span>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={{
                flex: 1,
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                background: '#07090e',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.92rem',
                outline: 'none'
              }}
            />
          </div>

          {/* MOLDURA DO CERTIFICADO NA TELA */}
          <div
            style={{
              width: '100%',
              maxWidth: '750px',
              background: 'linear-gradient(135deg, #fefefb 0%, #f7f4ea 100%)',
              border: '6px double #b45309',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              color: '#0f172a',
              textAlign: 'center',
              boxShadow: '0 0 35px rgba(245, 158, 11, 0.35)',
              position: 'relative'
            }}
          >
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1e3a8a', fontWeight: 900 }}>
              Governo de Pernambuco • Polícia Militar
            </div>
            <h1 style={{ margin: '0.5rem 0', fontSize: '1.5rem', color: '#92400e', fontWeight: 900, textTransform: 'uppercase' }}>
              Certificado de Aptidão Militar
            </h1>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#334155', margin: '0.85rem 0' }}>
              Certificamos que o(a) Aluno(a) Soldado
            </p>

            <div
              style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                color: '#047857',
                borderBottom: '2px solid #047857',
                display: 'inline-block',
                padding: '0.1rem 1.5rem',
                marginBottom: '0.85rem'
              }}
            >
              {studentName}
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.6, color: '#334155', margin: '0.5rem 0' }}>
              concluiu com êxito o programa intensivo de treinamento do <strong>Edital de Soldado PMPE 2026 (Instituto AOCP)</strong>, atingindo os parâmetros de excelência cognitiva e disciplina operacional.
            </p>

            {/* DADOS DE TELEMETRIA */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                borderTop: '1px dashed #cbd5e1',
                borderBottom: '1px dashed #cbd5e1',
                padding: '0.65rem 0',
                margin: '1rem 0',
                fontSize: '0.82rem',
                color: '#475569',
                fontWeight: 700
              }}
            >
              <div>🎯 Aproveitamento: <strong style={{ color: '#047857' }}>{accuracy}%</strong></div>
              <div>⚡ Nível: <strong style={{ color: '#b45309' }}>Nível {userLevel}</strong></div>
              <div>🏆 Experiência: <strong style={{ color: '#b45309' }}>{xp} XP</strong></div>
              <div>📅 Emissão: <strong>{new Date().toLocaleDateString('pt-BR')}</strong></div>
            </div>

            {/* ASSINATURA */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1.5rem', padding: '0 1.5rem' }}>
              <div>
                <div style={{ fontFamily: 'cursive', fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '-4px' }}>
                  Gean Gouveia
                </div>
                <div style={{ width: '180px', borderTop: '1.5px solid #0f172a', margin: '0 auto 3px' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: 900 }}>Comandante Gean Gouveia</div>
                <div style={{ fontSize: '0.68rem', color: '#64748b' }}>Instrutor-Chefe PMPE 2026</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.68rem', color: '#64748b' }}>Autenticação Operacional</div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 900, color: '#b45309' }}>
                  {certificateCode}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RODAPÉ COM BOTÕES DE AÇÃO */}
        <div
          style={{
            padding: '1rem 1.5rem',
            background: 'rgba(10, 17, 32, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handleShareStory}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Share2 size={16} />
              <span>{isCopied ? 'Texto de Story Copiado!' : 'Compartilhar no Instagram'}</span>
            </button>
          </div>

          <button
            onClick={handlePrintCertificate}
            style={{
              padding: '0.75rem 1.8rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#060b17',
              fontWeight: 900,
              fontSize: '0.92rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
            }}
          >
            <Printer size={18} />
            <span>Imprimir Certificado A4</span>
          </button>
        </div>
      </div>
    </div>
  );
};
