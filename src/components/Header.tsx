import React from 'react';
import { Volume2, VolumeX, Trophy, PlusCircle, Flame, Sparkles, ShieldAlert, LogOut, UserCheck, BarChart3 } from 'lucide-react';
import type { PlayerStats } from '../types/game';
import { sound } from '../utils/sound';

interface HeaderProps {
  stats: PlayerStats;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenAchievements: () => void;
  onOpenDeckCreator: () => void;
  onResetToHome: () => void;
  userName?: string;
  onLogout?: () => void;
  onOpenAnalytics?: () => void;
  onOpenMotivation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  isMuted,
  onToggleMute,
  onOpenAchievements,
  onOpenDeckCreator,
  onResetToHome,
  userName,
  onLogout,
  onOpenAnalytics,
  onOpenMotivation,
}) => {
  // Cálculo de XP para o próximo nível (100 XP por nível com escala suave)
  const xpCurrentLevel = stats.xp % 100;
  const xpPercentage = Math.min(100, Math.max(0, xpCurrentLevel));
  const unlockedBadgesCount = stats.achievements.filter(a => a.unlocked).length;

  return (
    <header className="main-header">
      <div 
        className="brand-section" 
        onClick={() => {
          sound.playClick();
          onResetToHome();
        }}
        title="Voltar ao Menu Principal"
      >
        <div className="brand-icon-box" style={{ background: 'linear-gradient(135deg, #1e3a8a, #06b6d4)' }}>
          <ShieldAlert size={26} color="#fbbf24" />
        </div>
        <div>
          <div className="brand-title">
            MISSÃO PMPE
            <span className="brand-badge" style={{ background: 'rgba(234, 179, 8, 0.2)', color: '#fbbf24', borderColor: '#f59e0b' }}>
              SOLDADO 2026
            </span>
          </div>
          <div style={{ fontSize: '0.78rem', color: '#93c5fd' }}>
            Preparatório Oficial • Instituto AOCP
          </div>
        </div>
      </div>

      <div className="player-hud">
        {/* Nível & Barra de XP */}
        <div className="hud-stat-pill" title={`Nível ${stats.level} • ${xpCurrentLevel}/100 XP`}>
          <Sparkles size={18} color="var(--neon-purple)" />
          <div className="xp-progress-bar-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
              <span style={{ color: 'var(--neon-purple)', fontWeight: 800 }}>NV. {stats.level}</span>
              <span style={{ color: 'var(--text-dim)' }}>{xpCurrentLevel}/100 XP</span>
            </div>
            <div className="xp-bar-track">
              <div 
                className="xp-bar-fill" 
                style={{ width: `${xpPercentage}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Sequência / Streak */}
        <div className="hud-stat-pill" title="Dias seguidos de estudo">
          <Flame size={18} color="#f97316" />
          <span style={{ color: '#fed7aa' }}>{stats.streakDays} {stats.streakDays === 1 ? 'Dia' : 'Dias'}</span>
        </div>

        {/* Ações Rápidas */}
        <div className="hud-actions">
          {onOpenAnalytics && (
            <button 
              className="btn-secondary"
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.12)',
                borderColor: 'rgba(6, 182, 212, 0.4)',
                color: '#38bdf8'
              }}
              onClick={() => {
                sound.playClick();
                onOpenAnalytics();
              }}
              title="Quadro de Acompanhamento e Comparativo dos Alunos"
            >
              <BarChart3 size={16} color="#38bdf8" />
              <span>Pelotão</span>
            </button>
          )}

          {onOpenMotivation && (
            <button 
              className="icon-btn"
              style={{
                background: 'rgba(245, 158, 11, 0.12)',
                borderColor: 'rgba(245, 158, 11, 0.35)',
                color: '#f59e0b'
              }}
              onClick={() => {
                sound.playClick();
                onOpenMotivation();
              }}
              title="Ordem do Dia • Frase Motivacional"
            >
              <Flame size={17} color="#f59e0b" />
            </button>
          )}

          <button 
            className="btn-secondary"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem', borderRadius: '12px' }}
            onClick={() => {
              sound.playClick();
              onOpenDeckCreator();
            }}
            title="Criar ou Importar Decks Personalizados"
          >
            <PlusCircle size={16} color="var(--neon-cyan)" />
            <span>Criar Deck</span>
          </button>

          <button 
            className="icon-btn" 
            onClick={() => {
              sound.playClick();
              onOpenAchievements();
            }}
            title="Conquistas e Medalhas"
          >
            <Trophy size={18} />
            {unlockedBadgesCount > 0 && (
              <span className="badge-counter">{unlockedBadgesCount}</span>
            )}
          </button>

          <button 
            className="icon-btn" 
            onClick={onToggleMute}
            title={isMuted ? 'Ativar Efeitos Sonoros' : 'Mutar Sons'}
          >
            {isMuted ? <VolumeX size={18} color="var(--text-dim)" /> : <Volume2 size={18} color="var(--neon-cyan)" />}
          </button>

          {userName && (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                fontSize: '0.8rem',
                color: '#38bdf8',
                fontWeight: 700
              }}
              title={`Guerreiro autenticado: ${userName}`}
            >
              <UserCheck size={14} color="#38bdf8" />
              <span>{userName}</span>
            </div>
          )}

          {onLogout && (
            <button
              className="icon-btn"
              onClick={() => {
                sound.playClick();
                onLogout();
              }}
              title="Encerrar Sessão / Bloquear Acesso"
              style={{ color: '#f87171' }}
            >
              <LogOut size={17} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
