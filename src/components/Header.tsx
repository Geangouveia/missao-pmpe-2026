import React from 'react';
import { Volume2, VolumeX, Trophy, PlusCircle, Flame, Sparkles, LogOut, UserCheck, BarChart3, ShieldCheck } from 'lucide-react';
import type { PlayerStats } from '../types/game';
import { sound } from '../utils/sound';
import { StreakFlame } from './StreakFlame';
import { PmpeBrasaoLogo } from './PmpeBrasaoLogo';
import { isMasterUser } from '../utils/authManager';

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
  onOpenCommanderAccess?: () => void;
  pendingUsersCount?: number;
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
  onOpenCommanderAccess,
  pendingUsersCount,
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
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))',
          transition: 'transform 0.2s ease'
        }}>
          <PmpeBrasaoLogo size={42} showText={false} />
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
        {/* Nível & Barra de XP com transição dinâmica */}
        <div 
          className="hud-stat-pill" 
          title={`Nível Militar ${stats.level} • ${xpCurrentLevel}/100 XP (Cada questão correta eleva o XP)`}
          style={{
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            boxShadow: '0 0 14px rgba(139, 92, 246, 0.15)'
          }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.4)'
          }}>
            <Sparkles size={16} color="#ffffff" />
          </div>
          <div className="xp-progress-bar-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', gap: '0.5rem' }}>
              <span style={{ color: '#c084fc', fontWeight: 900, letterSpacing: '0.04em' }}>NÍVEL {stats.level}</span>
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>{xpCurrentLevel}/100 XP</span>
            </div>
            <div className="xp-bar-track" style={{ height: '7px', background: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="xp-bar-fill" 
                style={{ 
                  width: `${xpPercentage}%`,
                  background: 'linear-gradient(90deg, #a855f7 0%, #06b6d4 100%)',
                  boxShadow: '0 0 12px rgba(6, 182, 212, 0.7)'
                }} 
              />
            </div>
          </div>
        </div>

        {/* Sequência / Chama da Diária Viva */}
        <StreakFlame days={stats.streakDays} size="sm" />

        {/* Ações Rápidas */}
        <div className="hud-actions">
          {isMasterUser(userName || '') && onOpenCommanderAccess && (
            <button 
              className="btn-secondary"
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                borderRadius: '12px',
                background: (pendingUsersCount && pendingUsersCount > 0)
                  ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.25) 100%)'
                  : 'rgba(245, 158, 11, 0.12)',
                borderColor: (pendingUsersCount && pendingUsersCount > 0)
                  ? '#f59e0b'
                  : 'rgba(245, 158, 11, 0.4)',
                color: '#fbbf24',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: (pendingUsersCount && pendingUsersCount > 0)
                  ? '0 0 15px rgba(245, 158, 11, 0.4)'
                  : 'none'
              }}
              onClick={() => {
                sound.playClick();
                onOpenCommanderAccess();
              }}
              title="Painel de Controle de Acesso Militar (Exclusivo Titular Gean)"
            >
              <ShieldCheck size={16} color="#fbbf24" />
              <span>Comando {pendingUsersCount && pendingUsersCount > 0 ? `(${pendingUsersCount})` : ''}</span>
            </button>
          )}

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
