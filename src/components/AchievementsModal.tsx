import React, { useState } from 'react';
import type { Achievement } from '../types/game';
import { Trophy, X, Lock, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { sound } from '../utils/sound';

interface AchievementsModalProps {
  achievements: Achievement[];
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({ achievements, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const progressPercent = Math.round((unlockedCount / Math.max(1, totalCount)) * 100);

  const filteredAchievements = achievements.filter((a) => {
    if (filter === 'unlocked') return a.unlocked;
    if (filter === 'locked') return !a.unlocked;
    return true;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '680px',
          width: '95%',
          maxHeight: '88vh',
          background: 'rgba(17, 24, 19, 0.96)',
          backdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(245, 158, 11, 0.4)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(34, 197, 94, 0.15)',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Cabeçalho Militar de Condecorações */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #d97706, #f59e0b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.45)',
              flexShrink: 0
            }}>
              <Award size={30} />
            </div>
            <div>
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                color: '#fbbf24',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.15rem'
              }}>
                BATALHÃO PMPE 2026 • LIVRO DE HONRA
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#f8fafc', margin: 0, letterSpacing: '-0.02em' }}>
                Mural de Condecorações Militares
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="icon-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#9ca3af'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Barra de Progresso Militar Tático */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(24, 34, 27, 0.9) 0%, rgba(14, 20, 16, 0.95) 100%)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '16px',
          padding: '1rem 1.15rem',
          marginBottom: '1.15rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ShieldCheck size={16} color="#4ade80" />
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#f8fafc' }}>
                {unlockedCount} de {totalCount} Condecorações Conquistadas
              </span>
            </div>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 900,
              color: '#fbbf24',
              background: 'rgba(245, 158, 11, 0.15)',
              padding: '0.15rem 0.55rem',
              borderRadius: '10px',
              border: '1px solid rgba(245, 158, 11, 0.35)'
            }}>
              {progressPercent}% CONCLUÍDO
            </span>
          </div>

          <div style={{
            width: '100%',
            height: '9px',
            background: 'rgba(0, 0, 0, 0.45)',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 50%, #f59e0b 100%)',
              borderRadius: '10px',
              transition: 'width 0.4s ease-out',
              boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)'
            }} />
          </div>
        </div>

        {/* Filtros: Todas / Conquistadas / A Conquistar */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              sound.playClick();
              setFilter('all');
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              background: filter === 'all' ? 'linear-gradient(135deg, #15803d, #16a34a)' : 'rgba(255, 255, 255, 0.05)',
              color: filter === 'all' ? '#ffffff' : '#9ca3af',
              border: filter === 'all' ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            Todas ({totalCount})
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setFilter('unlocked');
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              background: filter === 'unlocked' ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'rgba(255, 255, 255, 0.05)',
              color: filter === 'unlocked' ? '#000000' : '#9ca3af',
              border: filter === 'unlocked' ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            🎖️ Conquistadas ({unlockedCount})
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setFilter('locked');
            }}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              background: filter === 'locked' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              color: filter === 'locked' ? '#ffffff' : '#9ca3af',
              border: filter === 'locked' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            🔒 Em Missão ({totalCount - unlockedCount})
          </button>
        </div>

        {/* Lista de Condecorações com Rolagem Suave */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          overflowY: 'auto',
          paddingRight: '0.35rem',
          maxHeight: '52vh'
        }}>
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.95rem 1.15rem',
                borderRadius: '16px',
                background: ach.unlocked
                  ? 'linear-gradient(135deg, rgba(28, 40, 31, 0.92) 0%, rgba(18, 26, 20, 0.96) 100%)'
                  : 'rgba(0, 0, 0, 0.35)',
                border: ach.unlocked
                  ? '1.5px solid rgba(245, 158, 11, 0.45)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: ach.unlocked
                  ? '0 6px 20px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(245, 158, 11, 0.06)'
                  : 'none',
                opacity: ach.unlocked ? 1 : 0.65,
                transition: 'all 0.2s ease'
              }}
            >
              {/* Ícone / Medalha */}
              <div
                style={{
                  fontSize: '1.9rem',
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: ach.unlocked
                    ? 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(34, 197, 94, 0.15) 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: ach.unlocked
                    ? '1.5px solid rgba(245, 158, 11, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: ach.unlocked ? '0 0 15px rgba(245, 158, 11, 0.3)' : 'none'
                }}
              >
                {ach.unlocked ? ach.icon : <Lock size={20} color="#6b7280" />}
              </div>

              {/* Informações da Conquista */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <h4 style={{
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: ach.unlocked ? '#fef08a' : '#cbd5e1',
                      margin: 0
                    }}>
                      {ach.title}
                    </h4>
                    {ach.unlocked && <CheckCircle2 size={16} color="#22c55e" />}
                  </div>

                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '8px',
                    background: ach.unlocked ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: ach.unlocked ? '#86efac' : '#6b7280',
                    border: ach.unlocked ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {ach.unlocked ? (ach.unlockedAt ? `Conquistada em ${ach.unlockedAt}` : 'Conquistada') : 'Em Missão'}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.82rem',
                  color: ach.unlocked ? '#d1d5db' : '#9ca3af',
                  marginTop: '0.25rem',
                  lineHeight: 1.4,
                  margin: '0.25rem 0 0'
                }}>
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
