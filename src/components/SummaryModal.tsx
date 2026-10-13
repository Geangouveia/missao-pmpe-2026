import React from 'react';
import { Trophy, Sparkles, Zap, RotateCcw, Home, Award, BarChart2 } from 'lucide-react';
import { sound } from '../utils/sound';

interface SummaryModalProps {
  title: string;
  score: number;
  xpEarned: number;
  statsDetail: { label: string; value: string | number; icon?: React.ReactNode }[];
  onPlayAgain: () => void;
  onHome: () => void;
  onOpenAnalytics?: () => void;
}

export const SummaryModal: React.FC<SummaryModalProps> = ({
  title,
  score,
  xpEarned,
  statsDetail,
  onPlayAgain,
  onHome,
  onOpenAnalytics,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ textAlign: 'center', maxWidth: '540px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(239, 68, 68, 0.25))',
            border: '2px solid rgba(245, 158, 11, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            boxShadow: '0 0 35px rgba(245, 158, 11, 0.3)',
          }}
        >
          <Trophy size={42} color="#f59e0b" />
        </div>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
          Sua mente expandiu! Novos conhecimentos foram consolidados.
        </p>

        {/* Painel de Recompensas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            padding: '1.25rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700 }}>
              PONTUAÇÃO
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--neon-cyan)', marginTop: '0.2rem' }}>
              {score} pts
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700 }}>
              XP GANHO
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--neon-purple)', marginTop: '0.2rem' }}>
              +{xpEarned} XP
            </div>
          </div>
        </div>

        {/* Detalhes extras */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
          {statsDetail.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                background: 'rgba(0,0,0,0.2)',
                fontSize: '0.9rem',
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>{item.label}</span>
              <strong style={{ color: 'white' }}>{item.value}</strong>
            </div>
          ))}
        </div>

        {/* Botão de Acesso Direto ao Relatório de Evolução */}
        {onOpenAnalytics && (
          <button
            className="btn-primary"
            style={{
              width: '100%',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #0ea5e9, #10b981)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
              fontWeight: 800,
              padding: '0.85rem 1.25rem',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
            onClick={() => {
              sound.playSuccess();
              onOpenAnalytics();
            }}
          >
            <BarChart2 size={20} />
            <span>📊 Ver Relatório & Comparativo do Pelotão</span>
          </button>
        )}

        {/* Botões de Ação */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            className="btn-secondary"
            onClick={() => {
              sound.playClick();
              onHome();
            }}
          >
            <Home size={18} />
            <span>Menu Principal</span>
          </button>

          <button
            className="btn-primary"
            onClick={() => {
              sound.playClick();
              onPlayAgain();
            }}
          >
            <RotateCcw size={18} />
            <span>Jogar Novamente</span>
          </button>
        </div>
      </div>
    </div>
  );
};
