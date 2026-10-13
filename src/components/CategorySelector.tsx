import React from 'react';
import type { Category, CategoryId } from '../types/game';
import { BookOpen, Landmark, BrainCircuit, Laptop, Scale, ShieldAlert, Layers, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategoryId: CategoryId | 'all' | 'bloco_1' | 'bloco_2' | 'bloco_3';
  onSelectCategory: (id: CategoryId | 'all' | 'bloco_1' | 'bloco_2' | 'bloco_3') => void;
  hasCustomDecks: boolean;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  hasCustomDecks
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'portugues': return <BookOpen size={16} />;
      case 'historia_pe': return <Landmark size={16} />;
      case 'raciocinio': return <BrainCircuit size={16} />;
      case 'informatica': return <Laptop size={16} />;
      case 'constitucional': return <Scale size={16} />;
      case 'humanos_leis': return <ShieldAlert size={16} />;
      default: return <Layers size={16} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Barra de Filtro de Blocos Oficiais */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            EDITAL PMPE (INSTITUTO AOCP)
          </span>
          <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', color: '#fef08a' }}>
            Mínimo 30% por Bloco
          </span>
        </div>
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
          style={{ ['--active-color' as string]: '#3b82f6' }}
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
          style={{ ['--active-color' as string]: '#8b5cf6' }}
          title="Raciocínio Lógico + Informática"
        >
          <span style={{ fontWeight: 800, color: '#c084fc' }}>Bloco II</span>
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
