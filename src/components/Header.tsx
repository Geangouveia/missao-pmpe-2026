import React, { useState, useRef, useEffect } from 'react';
import { 
  Volume2, VolumeX, Trophy, PlusCircle, Flame, Sparkles, LogOut, UserCheck, 
  BarChart3, ShieldCheck, Calendar, FileText, MessageSquare, BookOpen, 
  Target, Award, Gamepad2, ChevronDown, ChevronUp, Zap, Swords, PenTool, Radar
} from 'lucide-react';
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
  onOpenSchedule?: () => void;
  onOpenPdfExport?: () => void;
  onOpenOrders?: () => void;
  onOpenLawBooklet?: () => void;
  onOpenCompetition?: () => void;
  onOpenMistakes?: () => void;
  mistakesCount?: number;
  onOpenSundaySimulado?: () => void;
  isRondaNoturnaActive?: boolean;
  onOpenActionGame?: () => void;
  onOpenInvestorPitch?: () => void;
  onOpenRlmGuide?: () => void;
  onOpenRedacao?: () => void;
  onOpenRadar?: () => void;
  onOpenFlashcards?: () => void;
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
  onOpenSchedule,
  onOpenPdfExport,
  onOpenOrders,
  onOpenLawBooklet,
  onOpenCompetition,
  onOpenMistakes,
  mistakesCount = 0,
  onOpenSundaySimulado,
  isRondaNoturnaActive = false,
  onOpenActionGame,
  onOpenInvestorPitch,
  onOpenRlmGuide,
  onOpenRedacao,
  onOpenRadar,
  onOpenFlashcards,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu suspenso ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cálculo de XP para o próximo nível (100 XP por nível com escala suave)
  const xpCurrentLevel = stats.xp % 100;
  const xpPercentage = Math.min(100, Math.max(0, xpCurrentLevel));
  const unlockedBadgesCount = stats.achievements.filter(a => a.unlocked).length;

  return (
    <header className="main-header" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {/* LINHA 1: IDENTIDADE & UTILIDADES DO RECRUTA */}
      <div className="header-brand-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.85rem', width: '100%' }}>
        {/* Lado Esquerdo: Marca & Brasão Oficial PMPE */}
        <div 
          className="brand-section" 
          onClick={() => {
            sound.playClick();
            onResetToHome();
          }}
          title="Voltar ao Menu Principal"
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
            <div style={{ fontSize: '0.78rem', color: '#93c5fd', display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
              <span>Preparatório Oficial • Instituto AOCP</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
              <span style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Powered by</span>
              <span style={{
                fontFamily: '"Caveat", "Dancing Script", cursive',
                fontSize: '1.05rem',
                fontWeight: 900,
                color: '#fbbf24',
                textShadow: '0 0 8px rgba(245, 158, 11, 0.5)',
                lineHeight: 1
              }}>
                GEAN
              </span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Ações de Utilidade (Limpo, Alinhado e Discreto) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {userName && (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.38rem 0.75rem',
                borderRadius: '12px',
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                fontSize: '0.78rem',
                color: '#86efac',
                fontWeight: 700
              }}
              title={`Guerreiro autenticado: ${userName}`}
            >
              <UserCheck size={14} color="#22c55e" />
              <span>{userName}</span>
            </div>
          )}

          {/* Botão de Comando militar (Apenas Master Gean) */}
          {isMasterUser(userName || '') && onOpenCommanderAccess && (
            <button 
              className="btn-secondary"
              style={{
                padding: '0.4rem 0.8rem',
                fontSize: '0.8rem',
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
              title="Painel de Controle de Acesso Militar (Exclusivo Comandante Gean)"
            >
              <ShieldCheck size={15} color="#fbbf24" />
              <span>Comando {pendingUsersCount && pendingUsersCount > 0 ? `(${pendingUsersCount})` : ''}</span>
            </button>
          )}

          {/* Dúvidas e Pedidos */}
          {onOpenOrders && (
            <button
              className="icon-btn"
              style={{
                background: 'rgba(16, 185, 129, 0.12)',
                borderColor: 'rgba(16, 185, 129, 0.4)',
                color: '#34d399'
              }}
              onClick={() => {
                sound.playClick();
                onOpenOrders();
              }}
              title="Canal de Pedidos & Dúvidas com o Comandante Gean"
            >
              <MessageSquare size={17} color="#34d399" />
            </button>
          )}

          {/* Conquistas e Medalhas */}
          <button 
            className="icon-btn" 
            onClick={() => {
              sound.playClick();
              onOpenAchievements();
            }}
            title="Conquistas e Medalhas Militares"
          >
            <Trophy size={17} color="#f59e0b" />
            {unlockedBadgesCount > 0 && (
              <span className="badge-counter">{unlockedBadgesCount}</span>
            )}
          </button>

          {/* Som Ativo/Mudo */}
          <button 
            className="icon-btn" 
            onClick={onToggleMute}
            title={isMuted ? 'Ativar Efeitos Sonoros' : 'Mutar Sons'}
          >
            {isMuted ? <VolumeX size={17} color="var(--text-dim)" /> : <Volume2 size={17} color="#22c55e" />}
          </button>

          {/* Sair do Jogo */}
          {onLogout && (
            <button
              className="header-logout-btn"
              onClick={() => {
                sound.playClick();
                onLogout();
              }}
              title="Encerrar Sessão / Sair do Jogo"
            >
              <LogOut size={15} />
              <span>Sair</span>
            </button>
          )}
        </div>
      </div>

      {/* DIVISÓRIA MILITAR SUAVE */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.25) 50%, transparent 100%)' }} />

      {/* LINHA 2: HUD DO GUERREIRO & AÇÕES OPERACIONAIS PRINCIPAIS */}
      <div className="player-hud" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.85rem', width: '100%' }}>
        {/* Esquerda: Nível & Barra de XP + Fogo Sagrado */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <div 
            className="hud-stat-pill" 
            title={`Nível Militar ${stats.level} • ${xpCurrentLevel}/100 XP (Cada questão correta eleva o XP)`}
            style={{
              background: 'linear-gradient(135deg, rgba(20, 32, 24, 0.9) 0%, rgba(12, 18, 14, 0.95) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              boxShadow: '0 0 14px rgba(34, 197, 94, 0.15)',
              padding: '0.45rem 0.85rem'
            }}
          >
            <div style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              background: 'linear-gradient(135deg, #15803d, #22c55e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
            }}>
              <Sparkles size={15} color="#ffffff" />
            </div>
            <div className="xp-progress-bar-wrap" style={{ minWidth: '130px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', gap: '0.5rem' }}>
                <span style={{ color: '#4ade80', fontWeight: 900, letterSpacing: '0.04em' }}>NÍVEL {stats.level}</span>
                <span style={{ color: '#94a3b8', fontWeight: 700 }}>{xpCurrentLevel}/100 XP</span>
              </div>
              <div className="xp-bar-track" style={{ height: '6px', background: 'rgba(0, 0, 0, 0.45)' }}>
                <div 
                  className="xp-bar-fill" 
                  style={{ 
                    width: `${xpPercentage}%`,
                    background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 60%, #f59e0b 100%)',
                    boxShadow: '0 0 12px rgba(34, 197, 94, 0.7)'
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Fogo Sagrado / Dias Ativos */}
          <StreakFlame days={stats.streakDays} size="sm" />
        </div>

        {/* Direita: Ações Prioritárias & Menu Tático Suspenso */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          {/* Badge Ronda Noturna 2X (quando ativa) */}
          {isRondaNoturnaActive && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.8rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.35) 0%, rgba(147, 51, 234, 0.35) 100%)',
                border: '1.5px solid #ef4444',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 900,
                boxShadow: '0 0 15px rgba(239, 68, 68, 0.45)',
                animation: 'pulse 2s infinite'
              }}
              title="Ronda Noturna Operacional ativa até 23:59: Pontos em dobro (2x)!"
            >
              <span>🚨 2X PONTOS ATIVOS</span>
            </div>
          )}

          {/* Competição Semanal (Destaque Principal) */}
          {onOpenCompetition && (
            <button 
              className="btn-secondary"
              style={{
                padding: '0.48rem 0.95rem',
                fontSize: '0.84rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.28) 0%, rgba(180, 83, 9, 0.35) 100%)',
                borderColor: '#f59e0b',
                color: '#fbbf24',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.35)',
                cursor: 'pointer'
              }}
              onClick={() => {
                sound.playLevelUp();
                onOpenCompetition();
              }}
              title="Competição Semanal do Pelotão PMPE (Segunda a Sábado com Premiação Oficial R$ 50/R$ 100)"
            >
              <Trophy size={16} color="#fbbf24" />
              <span>🏆 Competição Semanal</span>
            </button>
          )}

          {/* QG da Redação PMPE */}
          {onOpenRedacao && (
            <button 
              className="btn-secondary"
              style={{
                padding: '0.48rem 0.95rem',
                fontSize: '0.84rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.3) 100%)',
                borderColor: '#f59e0b',
                color: '#fef08a',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 0 14px rgba(245, 158, 11, 0.25)',
                cursor: 'pointer'
              }}
              onClick={() => {
                sound.playClick();
                onOpenRedacao();
              }}
              title="QG da Redação PMPE: Folha Pautada Oficial (20-30 Linhas), Temas Quentes e Modelos Coringa"
            >
              <PenTool size={16} color="#fbbf24" />
              <span>✍️ Redação PMPE</span>
            </button>
          )}

          {/* Raio-X Radar de Fraquezas */}
          {onOpenRadar && (
            <button 
              className="btn-secondary"
              style={{
                padding: '0.48rem 0.95rem',
                fontSize: '0.84rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.25) 100%)',
                borderColor: '#22c55e',
                color: '#86efac',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 0 14px rgba(34, 197, 94, 0.2)',
                cursor: 'pointer'
              }}
              onClick={() => {
                sound.playClick();
                onOpenRadar();
              }}
              title="Raio-X de Proficiência: Gráfico Radar de Fraquezas nas 8 Matérias do Edital AOCP"
            >
              <Radar size={16} color="#4ade80" />
              <span>🕸️ Radar AOCP</span>
            </button>
          )}

          {/* MENU TÁTICO ORGANIZADO (PADRÃO BOPE - ALINHADO & COMPACTO) */}
          <div ref={menuRef} style={{ position: 'relative' }}>
            <button
              onClick={() => {
                sound.playClick();
                setIsMenuOpen(!isMenuOpen);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.48rem 0.95rem',
                borderRadius: '10px',
                background: isMenuOpen 
                  ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(220, 38, 38, 0.25) 100%)' 
                  : 'linear-gradient(135deg, #0e1017 0%, #08090d 100%)',
                border: isMenuOpen ? '1.5px solid #fbbf24' : '1px solid rgba(245, 158, 11, 0.4)',
                color: '#ffffff',
                fontSize: '0.84rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: isMenuOpen ? '0 0 15px rgba(245, 158, 11, 0.4)' : '0 2px 8px rgba(0,0,0,0.6)',
                transition: 'all 0.2s ease'
              }}
              title="Acesse todas as ferramentas táticas do aplicativo em um só lugar"
            >
              <Zap size={16} color="#fbbf24" />
              <span style={{ letterSpacing: '0.04em' }}>Menu Tático</span>
              {isMenuOpen ? <ChevronUp size={15} color="#fbbf24" /> : <ChevronDown size={15} color="#cbd5e1" />}
            </button>

            {/* PAINEL DROPDOWN SUSPENSO (BOPE MILITAR: PRETO, DOURADO, VERMELHO E BRANCO) */}
            {isMenuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  width: '340px',
                  maxWidth: '92vw',
                  maxHeight: 'min(80vh, 640px)',
                  overflowY: 'auto',
                  background: 'linear-gradient(180deg, #0d0f15 0%, #06070a 100%)',
                  border: '1.5px solid rgba(245, 158, 11, 0.45)',
                  borderRadius: '14px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.95), 0 0 25px rgba(245, 158, 11, 0.2)',
                  backdropFilter: 'blur(20px)',
                  padding: '0.85rem',
                  zIndex: 9999,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  animation: 'fadeIn 0.15s ease'
                }}
              >
                {/* GRUPO 1: ESTUDO & CADERNOS */}
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <BookOpen size={13} color="#f59e0b" />
                    <span>Estudos & Legislação</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {onOpenRedacao && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenRedacao();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(245, 158, 11, 0.15)',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          color: '#fef08a',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <PenTool size={15} color="#fbbf24" />
                          <span>QG da Redação PMPE</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: '#f59e0b', color: '#060b17', fontWeight: 900 }}>
                          20-30 LINHAS
                        </span>
                      </button>
                    )}

                    {onOpenRadar && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenRadar();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.35)',
                          color: '#86efac',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Radar size={15} color="#4ade80" />
                          <span>Radar de Fraquezas AOCP</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: '#22c55e', color: '#060b17', fontWeight: 900 }}>
                          RAIO-X
                        </span>
                      </button>
                    )}

                    {onOpenFlashcards && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenFlashcards();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.35)',
                          color: '#bae6fd',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Zap size={15} color="#38bdf8" />
                          <span>Flashcards Táticos</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: '#0284c7', color: '#ffffff', fontWeight: 900 }}>
                          MNEMÔNICOS
                        </span>
                      </button>
                    )}
                    {onOpenLawBooklet && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenLawBooklet();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(245, 158, 11, 0.08)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <BookOpen size={15} color="#fbbf24" />
                          <span>Caderno de Leis Secas</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24', fontWeight: 800 }}>
                          VADE MECUM
                        </span>
                      </button>
                    )}

                    {onOpenRlmGuide && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenRlmGuide();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(245, 158, 11, 0.08)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <BookOpen size={15} color="#f59e0b" />
                          <span>Guia Raciocínio Lógico (RLM)</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: '#d97706', color: '#000000', fontWeight: 900 }}>
                          MANÉ & TABELA
                        </span>
                      </button>
                    )}

                    {onOpenMistakes && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenMistakes();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(220, 38, 38, 0.12)',
                          border: '1px solid rgba(220, 38, 38, 0.35)',
                          color: '#fee2e2',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Target size={15} color="#ef4444" />
                          <span>Caderno de Erros</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: '#dc2626', color: '#ffffff', fontWeight: 900 }}>
                          {mistakesCount || 0} FALHAS
                        </span>
                      </button>
                    )}

                    {onOpenSchedule && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenSchedule();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(245, 158, 11, 0.08)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Calendar size={15} color="#fbbf24" />
                          <span>Cronograma de Estudos</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24', fontWeight: 800 }}>
                          VIP
                        </span>
                      </button>
                    )}

                    {onOpenPdfExport && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenPdfExport();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <FileText size={15} color="#e2e8f0" />
                          <span>Baixar Caderno em PDF</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', fontWeight: 800 }}>
                          IMPRIMIR
                        </span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        sound.playClick();
                        setIsMenuOpen(false);
                        onOpenDeckCreator();
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.65rem',
                        borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        color: '#ffffff',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <PlusCircle size={15} color="#fbbf24" />
                      <span>Criar / Importar Decks</span>
                    </button>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(245, 158, 11, 0.2)' }} />

                {/* GRUPO 2: OPERAÇÕES & SIMULADOS */}
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Award size={13} color="#ef4444" />
                    <span>Simulados & Disputas</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {onOpenSundaySimulado && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenSundaySimulado();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(220, 38, 38, 0.1)',
                          border: '1px solid rgba(220, 38, 38, 0.3)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Award size={15} color="#ef4444" />
                          <span>Simulado Oficial 60Q</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: 'rgba(220, 38, 38, 0.3)', color: '#fca5a5', fontWeight: 800 }}>
                          DOMINGO
                        </span>
                      </button>
                    )}

                    {onOpenAnalytics && (
                      <button
                        onClick={() => {
                          sound.playGunshot38();
                          setIsMenuOpen(false);
                          onOpenAnalytics();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(245, 158, 11, 0.08)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <Swords size={15} color="#fbbf24" />
                        <span>Duelo 1v1 & Quadro do Pelotão</span>
                      </button>
                    )}

                    {onOpenInvestorPitch && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenInvestorPitch();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
                          border: '1px solid rgba(245, 158, 11, 0.5)',
                          color: '#fbbf24',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Award size={15} color="#fbbf24" />
                          <span>Pitch do Investidor 2026</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: '#f59e0b', color: '#000000', fontWeight: 900 }}>
                          SLIDES & MRR
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(245, 158, 11, 0.2)' }} />

                {/* GRUPO 3: DESCOMPRESSÃO */}
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Gamepad2 size={13} color="#f8fafc" />
                    <span>Descompressão & Moral</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {onOpenActionGame && (
                      <button
                        onClick={() => {
                          sound.playGunshot38();
                          setIsMenuOpen(false);
                          onOpenActionGame();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(220, 38, 38, 0.1)',
                          border: '1px solid rgba(220, 38, 38, 0.3)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Gamepad2 size={15} color="#ef4444" />
                          <span>Operação Rua 16-Bit</span>
                        </div>
                        <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem', borderRadius: '4px', background: 'rgba(220, 38, 38, 0.3)', color: '#fca5a5' }}>
                          SNES
                        </span>
                      </button>
                    )}

                    {onOpenMotivation && (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setIsMenuOpen(false);
                          onOpenMotivation();
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0.65rem',
                          borderRadius: '8px',
                          background: 'rgba(245, 158, 11, 0.08)',
                          border: '1px solid rgba(245, 158, 11, 0.25)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <Flame size={15} color="#fbbf24" />
                        <span>Ordem do Dia (Motivação)</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
