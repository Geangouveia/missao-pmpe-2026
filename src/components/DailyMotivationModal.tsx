import React from 'react';
import { Flame, Sparkles, X, ShieldAlert, Award } from 'lucide-react';
import type { MotivationalQuote } from '../utils/motivationalQuotes';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { StreakFlame } from './StreakFlame';

interface DailyMotivationModalProps {
  userName: string;
  quote: MotivationalQuote;
  onClose: () => void;
}

export const DailyMotivationModal: React.FC<DailyMotivationModalProps> = ({
  userName,
  quote,
  onClose,
}) => {
  const handleAcknowledge = () => {
    sound.playLevelUp();
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#f59e0b', '#3b82f6', '#10b981']
    });
    onClose();
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        style={{
          maxWidth: '520px',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.96) 0%, rgba(8, 14, 28, 0.98) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 158, 11, 0.25)',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          title="Fechar mensagem"
          style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        >
          <X size={20} />
        </button>

        {/* Emblema com chama motivacional viva */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.25rem'
        }}>
          <StreakFlame days={1} size="lg" showLabel={false} />
        </div>

        {/* Badge do dia */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.25rem 0.8rem',
          borderRadius: '20px',
          background: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          color: '#fbbf24',
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '0.75rem'
        }}>
          <ShieldAlert size={13} />
          <span>Ordem do Dia • {quote.tag}</span>
        </div>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 900,
          color: '#ffffff',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em'
        }}>
          Atenção, Guerreiro(a) <span style={{ color: '#38bdf8' }}>{userName}</span>!
        </h2>

        {/* Card da Citação */}
        <div style={{
          margin: '1.5rem 0',
          padding: '1.5rem 1.25rem',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative'
        }}>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: '#f8fafc',
            fontStyle: 'italic',
            fontWeight: 500,
            margin: '0 0 1rem'
          }}>
            "{quote.quote}"
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.85rem',
            color: '#94a3b8',
            fontWeight: 700
          }}>
            <Award size={16} color="#fbbf24" />
            <span>— {quote.author}</span>
          </div>
        </div>

        <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '1.75rem' }}>
          *Esta mensagem renova-se automaticamente a cada 24 horas para manter seu foco blindado.*
        </p>

        {/* Botão de avanço */}
        <button
          onClick={handleAcknowledge}
          style={{
            width: '100%',
            padding: '0.95rem 1.5rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            border: '1px solid rgba(56, 189, 248, 0.5)',
            color: '#ffffff',
            fontSize: '0.95rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0 10px 25px rgba(6, 182, 212, 0.35)',
            transition: 'transform 0.15s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Sparkles size={18} />
          <span>Missão Recebida • Rumo à Farda!</span>
        </button>
      </div>
    </div>
  );
};
