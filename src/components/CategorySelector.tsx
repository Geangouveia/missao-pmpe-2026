import React from 'react';
import type { Category, CategoryId } from '../types/game';
import { BookOpen, Landmark, BrainCircuit, Laptop, Scale, ShieldAlert, Shield, Layers, Sparkles, Gavel } from 'lucide-react';
import { sound } from '../utils/sound';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategoryId: CategoryId | 'all' | 'bloco_1' | 'bloco_2' | 'bloco_3';
  onSelectCategory: (id: CategoryId | 'all' | 'bloco_1' | 'bloco_2' | 'bloco_3') => void;
  hasCustomDecks: boolean;
  selectedSimulado?: string;
  onSelectSimulado?: (simuladoId: string) => void;
  totalFilteredQuestions?: number;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  hasCustomDecks,
  selectedSimulado = 'all',
  onSelectSimulado,
  totalFilteredQuestions
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'portugues': return <BookOpen size={16} />;
      case 'historia_pe': return <Landmark size={16} />;
      case 'raciocinio': return <BrainCircuit size={16} />;
      case 'informatica': return <Laptop size={16} />;
      case 'constitucional': return <Scale size={16} />;
      case 'humanos_leis': return <ShieldAlert size={16} />;
      case 'legislacao_extravagante': return <Gavel size={16} />;
      case 'legislacao_pmpe': return <Shield size={16} />;
      default: return <Layers size={16} />;
    }
  };

  const simuladosOptions = [
    { id: 'all', label: '⭐ Acervo Comentado Tintim por Tintim' },
    { id: 'caderno_direitos_humanos', label: '🕊️ Direitos Humanos & CADH' },
    { id: 'caderno_leg_extravagante', label: '🚨 Leis Extravagantes (250Q)' },
    { id: 'caderno_rlm_probabilidade', label: '🧠 RLM & Probabilidade (250Q)' },
    { id: 'caderno_const_pmpe', label: '⚖️ Constitucional & Art. 144 (160Q)' },
    { id: 'caderno_portugues_aocp', label: '📖 Português AOCP (150Q)' },
    { id: 'caderno_pmpe_estatuto', label: '🛡️ Estatuto PMPE (Lei 6.783/74)' },
    { id: 'caderno_informatica', label: '💻 Informática PMPE AOCP' },
    { id: 'caderno_historia_pe', label: '🦁 História de PE AOCP' },
    { id: 'aocp_elite', label: '⭐ Caderno Elite AOCP' },
    { id: 'aocp_especial', label: '⚡ Foco AOCP Edital (30Q)' },
    { id: 'nuce_completo', label: 'Simulado PMPE Completo (60Q)' },
    { id: 'semana_1', label: '1ª Semana (15Q)' },
    { id: 'semana_2', label: '2ª Semana (25Q)' },
    { id: 'semana_3', label: '3ª Semana (25Q)' },
    { id: 'semana_4', label: '4ª Semana (25Q)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Barra de Filtro de Blocos Oficiais & Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            EDITAL PMPE (INSTITUTO AOCP)
          </span>
          <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', color: '#fef08a' }}>
            Mínimo 30% por Bloco
          </span>
        </div>
        {typeof totalFilteredQuestions === 'number' && (
          <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700, background: 'rgba(56, 189, 248, 0.12)', padding: '0.2rem 0.6rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
            🎯 {totalFilteredQuestions} questões ativas
          </div>
        )}
      </div>

      {/* Seletor Rápido de Simulado / Semanas */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', padding: '0.4rem 0.6rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginRight: '0.25rem', letterSpacing: '0.05em' }}>
          Semana:
        </span>
        {simuladosOptions.map((sim) => {
          const isActive = selectedSimulado === sim.id;
          return (
            <button
              key={sim.id}
              onClick={() => {
                sound.playClick();
                onSelectSimulado?.(sim.id);
              }}
              style={{
                padding: '0.28rem 0.65rem',
                fontSize: '0.76rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#ffffff' : '#9ca3af',
                background: isActive ? 'linear-gradient(135deg, #15803d, #16a34a)' : 'rgba(255, 255, 255, 0.05)',
                border: isActive ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isActive ? '0 0 12px rgba(34, 197, 94, 0.45)' : 'none'
              }}
            >
              {sim.label}
            </button>
          );
        })}
      </div>

      {/* Seleção de Disciplinas e Blocos */}
      <div className="categories-wrap">
        <button
          className={`category-chip ${selectedCategoryId === 'all' ? 'active' : ''}`}
          onClick={() => {
            sound.playClick();
            onSelectCategory('all');
          }}
          title="Todas as 6 matérias do concurso reunidas"
        >
          <Layers size={16} />
          <span>Simulado Geral (Todas)</span>
        </button>

        {/* Bloco I */}
        <button
          className={`category-chip ${selectedCategoryId === 'bloco_1' ? 'active' : ''}`}
          onClick={() => {
            sound.playClick();
            onSelectCategory('bloco_1');
          }}
          style={{ ['--active-color' as string]: '#38bdf8' }}
          title="Português + História de PE"
        >
          <span style={{ fontWeight: 800, color: '#93c5fd' }}>Bloco I</span>
          <span>(Português & História PE)</span>
        </button>

        {/* Bloco II */}
        <button
          className={`category-chip ${selectedCategoryId === 'bloco_2' ? 'active' : ''}`}
          onClick={() => {
            sound.playClick();
            onSelectCategory('bloco_2');
          }}
          style={{ ['--active-color' as string]: '#22c55e' }}
          title="Raciocínio Lógico + Informática"
        >
          <span style={{ fontWeight: 800, color: '#86efac' }}>Bloco II</span>
          <span>(RLM & Informática)</span>
        </button>

        {/* Bloco III */}
        <button
          className={`category-chip ${selectedCategoryId === 'bloco_3' ? 'active' : ''}`}
          onClick={() => {
            sound.playClick();
            onSelectCategory('bloco_3');
          }}
          style={{ ['--active-color' as string]: '#ef4444' }}
          title="Constitucional + Direitos Humanos"
        >
          <span style={{ fontWeight: 800, color: '#fca5a5' }}>Bloco III</span>
          <span>(Constitucional & Direitos)</span>
        </button>

        {/* Separador */}
        <div style={{ width: '1px', background: 'var(--border-subtle)', margin: '0 0.25rem' }} />

        {/* Disciplinas Individuais */}
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-chip ${selectedCategoryId === cat.id ? 'active' : ''}`}
            onClick={() => {
              sound.playClick();
              onSelectCategory(cat.id);
            }}
            style={{
              ['--active-color' as string]: cat.color,
            }}
          >
            {getIcon(cat.id)}
            <span>{cat.name}</span>
          </button>
        ))}

        {hasCustomDecks && (
          <button
            className={`category-chip ${selectedCategoryId === 'custom' ? 'active' : ''}`}
            onClick={() => {
              sound.playClick();
              onSelectCategory('custom');
            }}
            style={{
              ['--active-color' as string]: 'var(--neon-pink)',
            }}
          >
            <Sparkles size={16} color="var(--neon-pink)" />
            <span>Meus Decks</span>
          </button>
        )}
      </div>
    </div>
  );
};
