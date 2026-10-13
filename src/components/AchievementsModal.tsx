import React from 'react';
import type { Achievement } from '../types/game';
import { Trophy, X, Lock, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

interface AchievementsModalProps {
  achievements: Achievement[];
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({ achievements, onClose }) => {
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '12px' }}>
              <Trophy size={22} color="#f59e0b" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Mural de Conquistas</h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {unlockedCount} de {achievements.length} medalhas conquistadas
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="icon-btn"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {achievements.map((ach) => (
            <div
              key={ach.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.15rem',
                padding: '1.1rem 1.25rem',
                borderRadius: '16px',
                background: ach.unlocked ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.25)',
                border: ach.unlocked ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid var(--border-subtle)',
                boxShadow: ach.unlocked ? '0 0 20px rgba(245, 158, 11, 0.1)' : 'none',
                opacity: ach.unlocked ? 1 : 0.6,
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: ach.unlocked ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {ach.unlocked ? ach.icon : <Lock size={20} color="var(--text-dim)" />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <h4 style={{ fontSize: '1rem', color: ach.unlocked ? '#fef08a' : 'white' }}>
                    {ach.title}
                  </h4>
                  {ach.unlocked && <CheckCircle2 size={16} color="var(--neon-emerald)" />}
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
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
