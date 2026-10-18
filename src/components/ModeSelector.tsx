import React from 'react';
import type { GameMode } from '../types/game';
import { Target, Network, Swords, Compass, ArrowRight, Flame } from 'lucide-react';
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
      icon: <Flame size={28} />,
      badge: 'Mais Viciante 🔥',
      color: '#f59e0b',
      accentBg: 'linear-gradient(135deg, #d97706, #b45309)',
      shadow: 'rgba(245, 158, 11, 0.45)'
    },
    {
      id: 'maze' as GameMode,
      title: 'Labirinto Tático: Caçada Policial',
      subtitle: 'Incursão Tática • 4 Vidas • 6 Questões por Nível',
      description: 'Guie o policial pelo labirinto tático até o destino. A cada acerto, o policial avança pelos corredores; a cada erro, o bandido se aproxima no escuro! 4 vidas antes da emboscada final.',
      icon: <Compass size={28} />,
      badge: 'Novo Modo Tático 🧭',
      color: '#22c55e',
      accentBg: 'linear-gradient(135deg, #16a34a, #14532d)',
      shadow: 'rgba(34, 197, 94, 0.45)'
    },
    {
      id: 'match' as GameMode,
      title: 'Conexão Tática',
      subtitle: 'Fixação de Fatos & Artigos de Lei',
      description: 'Conecte datas históricas de PE (1817, 1824, Guararapes), crimes extravagantes e dispositivos constitucionais às definições certas.',
      icon: <Network size={28} />,
      badge: 'Treino de Memória',
      color: '#38bdf8',
      accentBg: 'linear-gradient(135deg, #0284c7, #0369a1)',
      shadow: 'rgba(2, 132, 199, 0.4)'
    },
    {
      id: 'battle' as GameMode,
      title: 'Operação CFSD: Desafio da Banca',
      subtitle: 'Modo RPG • Vencendo a AOCP',
      description: 'Enfrente a Banca Examinadora AOCP e o Fantasma do Ponto de Corte. Cada acerto desfere golpes de conhecimento policial!',
      icon: <Swords size={28} />,
      badge: 'Desafio Tático',
      color: '#f87171',
      accentBg: 'linear-gradient(135deg, #dc2626, #ea580c)',
      shadow: 'rgba(220, 38, 38, 0.4)'
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
              ['--card-border' as string]: m.color,
              ['--card-shadow' as string]: m.shadow,
              ['--card-glow' as string]: m.shadow,
              ['--card-accent' as string]: m.accentBg,
              ['--card-accent-shadow' as string]: m.shadow,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="mode-icon-circle">
                  {m.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: m.color,
                    border: `1px solid ${m.color}40`,
                    letterSpacing: '0.04em'
                  }}
                >
                  {m.badge}
                </span>
              </div>

              <div>
                <h3 className="mode-title">{m.title}</h3>
                <div style={{ fontSize: '0.8rem', color: m.color, fontWeight: 600, marginBottom: '0.4rem' }}>
                  {m.subtitle}
                </div>
                <p className="mode-desc">{m.description}</p>
              </div>
            </div>

            <div className="mode-footer">
              <span style={{ color: 'var(--text-muted)' }}>Iniciar Missão</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: m.color }}>
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
