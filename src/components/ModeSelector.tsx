import React from 'react';
import type { GameMode } from '../types/game';
import { Target, Network, Swords, BookOpen, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface ModeSelectorProps {
  onSelectMode: (mode: GameMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ onSelectMode }) => {
  const modes = [
    {
      id: 'quiz' as GameMode,
      title: 'Batalha de Questões AOCP',
      subtitle: 'Simulado Turbo • 5 Alternativas (A a E)',
      description: 'Resolva questões no padrão exato do Instituto AOCP. Treine sob pressão de tempo e domine a fundamentação legal.',
      icon: <Target size={28} />,
      badge: 'Padrão Prova',
      color: '#38bdf8',
      accentBg: 'linear-gradient(135deg, #0284c7, #1e3a8a)',
      shadow: 'rgba(2, 132, 199, 0.4)'
    },
    {
      id: 'match' as GameMode,
      title: 'Conexão Tática',
      subtitle: 'Fixação de Fatos & Artigos de Lei',
      description: 'Conecte datas históricas de PE (1817, 1824, Guararapes), crimes extravagantes e dispositivos constitucionais às definições certas.',
      icon: <Network size={28} />,
      badge: 'Treino de Memória',
      color: '#c084fc',
      accentBg: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      shadow: 'rgba(124, 58, 237, 0.4)'
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
    },
    {
      id: 'flashcards' as GameMode,
      title: 'Cofre da Lei Seca',
      subtitle: 'Flashcards 3D de Memorização',
      description: 'Gire os cartões 3D para fixar incisos do Art. 5º, Art. 144, DUDH, leis de drogas, abuso de autoridade e fórmulas de RLM.',
      icon: <BookOpen size={28} />,
      badge: 'Lei Seca & Regras',
      color: '#34d399',
      accentBg: 'linear-gradient(135deg, #059669, #0d9488)',
      shadow: 'rgba(5, 150, 105, 0.4)'
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
