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
    { id: 'all', label: '⭐ Acervo Geral Soldado (2.157Q Comentadas)' },
    { id: 'caderno_edital_aocp_300', label: '🎯 300Q Cirúrgicas Edital AOCP 2026' },
    { id: 'caderno_direitos_humanos', label: '🕊️ Direitos Humanos & CADH (200Q)' },
    { id: 'caderno_leg_extravagante', label: '🚨 Leis Extravagantes (250Q)' },
    { id: 'caderno_rlm_probabilidade', label: '🧠 RLM & Probabilidade (250Q)' },
    { id: 'caderno_const_pmpe', label: '⚖️ Constitucional & Art. 144 (160Q)' },
    { id: 'caderno_portugues_aocp', label: '📖 Português AOCP (250Q)' },
    { id: 'caderno_pmpe_estatuto', label: '🛡️ Estatuto PMPE (114Q)' },
    { id: 'caderno_informatica', label: '💻 Informática PMPE AOCP (350Q)' },
    { id: 'caderno_historia_pe', label: '🦁 História de PE AOCP (58Q)' },
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
          <div style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: 800, background: 'rgba(245, 158, 11, 0.12)', padding: '0.2rem 0.6rem', borderRadius: '10px', border: '1px solid rgba(245, 158, 11, 0.35)' }}>
            🎯 {totalFilteredQuestions} questões ativas
          </div>
        )}
      </div>

      {/* Seletor Compacto de Caderno / Semana (Padrão Tático BOPE) */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.65rem', 
          padding: '0.45rem 0.85rem', 
          background: 'linear-gradient(135deg, rgba(14, 16, 22, 0.95) 0%, rgba(8, 9, 12, 0.98) 100%)', 
          borderRadius: '10px', 
          border: '1.5px solid rgba(245, 158, 11, 0.35)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(245, 158, 11, 0.05)',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Sparkles size={15} color="#fbbf24" />
          <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Caderno / Semana:
          </span>
        </div>

        <div style={{ flex: 1, minWidth: '180px', position: 'relative' }}>
          <select
            value={selectedSimulado}
            onChange={(e) => {
              sound.playClick();
              onSelectSimulado?.(e.target.value);
            }}
            style={{
              width: '100%',
              padding: '0.42rem 0.75rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#ffffff',
              background: '#090a0d',
              border: '1px solid rgba(245, 158, 11, 0.45)',
              borderRadius: '8px',
              outline: 'none',
              cursor: 'pointer',
              boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.8)'
            }}
            title="Selecione o Caderno de Questões ou Simulado da Semana"
          >
            {simuladosOptions.map((sim) => (
              <option 
                key={sim.id} 
                value={sim.id} 
                style={{ 
                  background: '#0e1017', 
                  color: sim.id === selectedSimulado ? '#fbbf24' : '#e2e8f0',
                  fontWeight: sim.id === selectedSimulado ? 'bold' : 'normal',
                  padding: '6px'
                }}
              >
                {sim.label}
              </option>
            ))}
          </select>
        </div>

        {selectedSimulado !== 'all' && (
          <button
            onClick={() => {
              sound.playClick();
              onSelectSimulado?.('all');
            }}
            style={{
              padding: '0.35rem 0.65rem',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              border: '1px solid #ef4444',
              borderRadius: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 8px rgba(220, 38, 38, 0.4)'
            }}
            title="Voltar ao Acervo Geral Completo"
          >
            Resetar Geral
          </button>
        )}
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
          style={{ ['--active-color' as string]: '#fbbf24' }}
          title="Português + História de PE"
        >
          <span style={{ fontWeight: 800, color: '#fbbf24' }}>Bloco I</span>
          <span>(Português & História PE)</span>
        </button>

        {/* Bloco II */}
        <button
          className={`category-chip ${selectedCategoryId === 'bloco_2' ? 'active' : ''}`}
          onClick={() => {
            sound.playClick();
            onSelectCategory('bloco_2');
          }}
          style={{ ['--active-color' as string]: '#ef4444' }}
          title="Raciocínio Lógico + Informática"
        >
          <span style={{ fontWeight: 800, color: '#ef4444' }}>Bloco II</span>
          <span>(RLM & Informática)</span>
        </button>

        {/* Bloco III */}
        <button
          className={`category-chip ${selectedCategoryId === 'bloco_3' ? 'active' : ''}`}
          onClick={() => {
            sound.playClick();
            onSelectCategory('bloco_3');
          }}
          style={{ ['--active-color' as string]: '#ffffff' }}
          title="Constitucional + Direitos Humanos"
        >
          <span style={{ fontWeight: 800, color: '#ffffff' }}>Bloco III</span>
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
