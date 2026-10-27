import React from 'react';
import type { GameMode } from '../types/game';
import { Target, Network, Swords, Compass, ArrowRight, Flame, Zap, Search } from 'lucide-react';
import { sound } from '../utils/sound';

interface ModeSelectorProps {
  onSelectMode: (mode: GameMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ onSelectMode }) => {
  const modes = [
    {
      id: 'survival' as GameMode,
      title: 'Operação Sobrevivência: Tiro Certo',
      subtitle: 'Morte Súbita • 4 Vidas, 50s & Barrinha de Patentes',
      description: '4 vidas táticas, cronômetro de 50s, 4 disparos de pistola e barrinha de promoção militar (acerte 4 consecutivas para subir na carreira da PMPE). Questões 100% comentadas!',
      icon: <Flame size={26} color="#d4af37" />,
      badge: 'Mais Viciante 🔥',
      badgeColor: '#d4af37',
      badgeBg: 'rgba(212, 175, 55, 0.15)',
      badgeBorder: 'rgba(212, 175, 55, 0.4)',
      color: '#d4af37',
      subtitleColor: '#d4af37',
      accentBg: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(184, 134, 11, 0.12))',
      iconBorder: '1px solid rgba(212, 175, 55, 0.45)',
      shadow: 'rgba(212, 175, 55, 0.35)',
      borderColor: 'rgba(212, 175, 55, 0.35)'
    },
    {
      id: 'wordsearch' as GameMode,
      title: 'Caça-Palavras Tático: Varredura',
      subtitle: 'Varredura Visual • Termos & Leis PMPE',
      description: 'Encontre termos jurídicos, crimes e artigos do edital escondidos na matriz tática. Selecione palavras na horizontal, vertical e diagonal para desbloquear conceitos comentados e ganhar XP!',
      icon: <Search size={26} color="#38bdf8" />,
      badge: 'Novo Modo 🔍',
      badgeColor: '#38bdf8',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      badgeBorder: 'rgba(56, 189, 248, 0.4)',
      color: '#38bdf8',
      subtitleColor: '#7dd3fc',
      accentBg: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22), rgba(14, 165, 233, 0.12))',
      iconBorder: '1px solid rgba(56, 189, 248, 0.45)',
      shadow: 'rgba(56, 189, 248, 0.35)',
      borderColor: 'rgba(56, 189, 248, 0.35)'
    },
    {
      id: 'maze' as GameMode,
      title: 'Labirinto Tático: Caçada Policial',
      subtitle: 'Incursão Noturna • 4 Vidas • 6 Questões por Nível',
      description: 'Guie o policial pelo labirinto tático até o destino. A cada acerto, o policial avança pelos corredores; a cada erro, o bandido se aproxima no escuro! 4 vidas antes da emboscada final.',
      icon: <Compass size={26} color="#e5c158" />,
      badge: 'Novo Modo Tático 🧭',
      badgeColor: '#e5c158',
      badgeBg: 'rgba(212, 175, 55, 0.12)',
      badgeBorder: 'rgba(212, 175, 55, 0.35)',
      color: '#e5c158',
      subtitleColor: '#cbd5e1',
      accentBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
      iconBorder: '1px solid rgba(212, 175, 55, 0.35)',
      shadow: 'rgba(212, 175, 55, 0.25)',
      borderColor: 'rgba(212, 175, 55, 0.25)'
    },
    {
      id: 'match' as GameMode,
      title: 'Conexão Tática',
      subtitle: 'Fixação de Fatos & Artigos de Lei',
      description: 'Conecte datas históricas de PE (1817, 1824, Guararapes), crimes extravagantes e dispositivos constitucionais às definições certas.',
      icon: <Network size={26} color="#d4af37" />,
      badge: 'Treino de Memória 🧠',
      badgeColor: '#cbd5e1',
      badgeBg: 'rgba(255, 255, 255, 0.05)',
      badgeBorder: 'rgba(255, 255, 255, 0.15)',
      color: '#d4af37',
      subtitleColor: '#cbd5e1',
      accentBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
      iconBorder: '1px solid rgba(212, 175, 55, 0.35)',
      shadow: 'rgba(212, 175, 55, 0.25)',
      borderColor: 'rgba(212, 175, 55, 0.25)'
    },
    {
      id: 'battle' as GameMode,
      title: 'Operação CFSD: Desafio da Banca',
      subtitle: 'Combate Tático • Vencendo a AOCP',
      description: 'Enfrente a Banca Examinadora AOCP e o Fantasma do Ponto de Corte. Cada acerto desfere golpes de conhecimento policial!',
      icon: <Swords size={26} color="#ef4444" />,
      badge: 'Desafio Tático ⚔️',
      badgeColor: '#fca5a5',
      badgeBg: 'rgba(220, 38, 38, 0.18)',
      badgeBorder: 'rgba(220, 38, 38, 0.45)',
      color: '#ef4444',
      subtitleColor: '#f87171',
      accentBg: 'linear-gradient(135deg, rgba(220, 38, 38, 0.25), rgba(185, 28, 28, 0.15))',
      iconBorder: '1px solid rgba(220, 38, 38, 0.45)',
      shadow: 'rgba(220, 38, 38, 0.35)',
      borderColor: 'rgba(220, 38, 38, 0.35)'
    },
    {
      id: 'flashcards' as GameMode,
      title: 'Flashcards Táticos Operacionais',
      subtitle: 'Mnemônicos, Prazos e Leis Secas',
      description: 'Cartões interativos frente e verso com rotação 3D para revisões relâmpago de 10 a 15 min: "Até a Maria sua", Prazos do ECA, Leis de De Morgan, 3T+H e CF Art. 144.',
      icon: <Zap size={26} color="#d4af37" />,
      badge: 'Revisão Rápida ⚡',
      badgeColor: '#d4af37',
      badgeBg: 'rgba(212, 175, 55, 0.12)',
      badgeBorder: 'rgba(212, 175, 55, 0.35)',
      color: '#d4af37',
      subtitleColor: '#cbd5e1',
      accentBg: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(255, 255, 255, 0.03))',
      iconBorder: '1px solid rgba(212, 175, 55, 0.35)',
      shadow: 'rgba(212, 175, 55, 0.25)',
      borderColor: 'rgba(212, 175, 55, 0.25)'
    }
  ];


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Escolha seu Modo de Treinamento</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Metodologia ativa e gamificada desenvolvida sob medida para o edital de Soldado da Polícia Militar de Pernambuco.
        </p>
      </div>

      <div className="modes-grid">
        {modes.map((m) => (
          <div
            key={m.id}
            className="glass-panel mode-card"
            onClick={() => {
              sound.playClick();
              onSelectMode(m.id);
            }}
            style={{
              background: 'linear-gradient(145deg, rgba(16, 18, 24, 0.98), rgba(9, 10, 14, 0.98))',
              border: `1.5px solid ${m.borderColor}`,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.85)',
              ['--card-border' as string]: m.color,
              ['--card-shadow' as string]: m.shadow,
              ['--card-glow' as string]: m.shadow,
              ['--card-accent' as string]: m.accentBg,
              ['--card-accent-shadow' as string]: m.shadow,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div 
                  className="mode-icon-circle"
                  style={{
                    background: m.accentBg,
                    border: m.iconBorder,
                    boxShadow: `0 4px 15px ${m.shadow}`
                  }}
                >
                  {m.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '20px',
                    background: m.badgeBg,
                    color: m.badgeColor,
                    border: m.badgeBorder,
                    letterSpacing: '0.04em'
                  }}
                >
                  {m.badge}
                </span>
              </div>

              <div>
                <h3 className="mode-title" style={{ color: '#ffffff' }}>{m.title}</h3>
                <div style={{ fontSize: '0.8rem', color: m.subtitleColor, fontWeight: 700, marginBottom: '0.4rem' }}>
                  {m.subtitle}
                </div>
                <p className="mode-desc" style={{ color: '#a1a1aa' }}>{m.description}</p>
              </div>
            </div>

            <div className="mode-footer" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: '#71717a', fontSize: '0.82rem', fontWeight: 600 }}>Iniciar Missão</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: m.color, fontWeight: 800 }}>
                <span>Entrar</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
