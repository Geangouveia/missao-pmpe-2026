import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Search,
  ArrowLeft,
  Printer,
  Copy,
  Check,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  ArrowUp,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { MILITARY_LAWS_DATA, type LawArticle } from '../data/militaryLawsData';
import { sound } from '../utils/sound';
import './MilitaryLawBookletView.css';

interface MilitaryLawBookletViewProps {
  onBackToApp: () => void;
}

export const MilitaryLawBookletView: React.FC<MilitaryLawBookletViewProps> = ({ onBackToApp }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(MILITARY_LAWS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [themeMode, setThemeMode] = useState<'dark' | 'oled' | 'sepia'>('dark');
  const [copiedArticleNumber, setCopiedArticleNumber] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileListModal, setShowMobileListModal] = useState(false);

  // Monitora scroll para exibir o botão flutuante "Voltar ao topo"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedTopic = useMemo(() => {
    return MILITARY_LAWS_DATA.find((t) => t.id === selectedTopicId) || MILITARY_LAWS_DATA[0];
  }, [selectedTopicId]);

  // Filtra artigos pela busca
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return selectedTopic.articles;
    const q = searchQuery.toLowerCase().trim();
    return selectedTopic.articles.filter(
      (art) =>
        art.number.toLowerCase().includes(q) ||
        (art.heading && art.heading.toLowerCase().includes(q)) ||
        art.text.toLowerCase().includes(q) ||
        (art.tip && art.tip.toLowerCase().includes(q)) ||
        (art.warning && art.warning.toLowerCase().includes(q))
    );
  }, [selectedTopic, searchQuery]);

  // Copiar artigo para área de transferência
  const handleCopyArticle = (article: LawArticle) => {
    sound.playClick();
    const textToCopy = `${selectedTopic.fullTitle}\n\n${article.number} - ${article.heading || ''}\n\n${article.text}\n\n[Dica AOCP]: ${article.tip || ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedArticleNumber(article.number);
    setTimeout(() => setCopiedArticleNumber(null), 2500);
  };

  // Imprimir página
  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cores por tema
  const themeStyles = {
    dark: {
      bg: 'radial-gradient(ellipse at top, #0d1b2a 0%, #060b17 60%, #030712 100%)',
      headerBg: 'linear-gradient(180deg, rgba(10, 17, 32, 0.98) 0%, rgba(6, 11, 23, 0.98) 100%)',
      cardBg: 'rgba(15, 23, 42, 0.9)',
      cardBorder: 'rgba(59, 130, 246, 0.22)',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1',
      textMuted: '#94a3b8'
    },
    oled: {
      bg: '#000000',
      headerBg: 'rgba(5, 5, 5, 0.98)',
      cardBg: '#080808',
      cardBorder: 'rgba(59, 130, 246, 0.35)',
      textPrimary: '#ffffff',
      textSecondary: '#f1f5f9',
      textMuted: '#94a3b8'
    },
    sepia: {
      bg: '#1c1917',
      headerBg: 'rgba(28, 25, 23, 0.98)',
      cardBg: '#292524',
      cardBorder: 'rgba(245, 158, 11, 0.25)',
      textPrimary: '#fef3c7',
      textSecondary: '#e7e5e4',
      textMuted: '#a8a29e'
    }
  }[themeMode];

  const fontSizes = {
    normal: { text: '0.96rem', line: 1.7 },
    large: { text: '1.1rem', line: 1.8 },
    xlarge: { text: '1.24rem', line: 1.9 }
  }[fontSizeLevel];

  // Função para destacar termos buscados no texto
  const renderHighlighted = (text?: string) => {
    if (!text) return null;
    if (!searchQuery.trim()) return text;
    const q = searchQuery.trim();
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="law-search-highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className="law-booklet-root"
      style={{
        background: themeStyles.bg,
        color: themeStyles.textPrimary
      }}
    >
      {/* ================= BARRA SUPERIOR FIXA E RESPONSIVA ================= */}
      <header
        className="law-booklet-header"
        style={{
          background: themeStyles.headerBg
        }}
      >
        <div className="law-booklet-header-inner">
          {/* Lado Esquerdo: Voltar & Título */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                sound.playClick();
                onBackToApp();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              title="Voltar ao Treinamento / Menu Principal"
            >
              <ArrowLeft size={16} />
              <span>Voltar</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(37, 99, 235, 0.45)',
                  color: '#ffffff',
                  flexShrink: 0
                }}
              >
                <BookOpen size={20} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: '1.05rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      letterSpacing: '0.01em',
                      lineHeight: 1.2
                    }}
                  >
                    VADE MECUM PMPE
                  </h1>
                  <span
                    style={{
                      background: 'rgba(34, 197, 94, 0.2)',
                      border: '1px solid #22c55e',
                      color: '#4ade80',
                      padding: '0.12rem 0.45rem',
                      borderRadius: '5px',
                      fontSize: '0.68rem',
                      fontWeight: 900,
                      letterSpacing: '0.04em'
                    }}
                  >
                    LEI SECA
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#93c5fd', marginTop: '0.1rem' }}>
                  Edital PMPE &bull; Planalto Atualizado 2026
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Controles de Leitura (Fonte, Tema, Imprimir) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {/* Controle de Fonte */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '0.15rem'
              }}
            >
              <button
                onClick={() => setFontSizeLevel('normal')}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  background: fontSizeLevel === 'normal' ? 'rgba(59, 130, 246, 0.55)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.76rem',
                  cursor: 'pointer'
                }}
                title="Tamanho padrão de fonte"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  background: fontSizeLevel === 'large' ? 'rgba(59, 130, 246, 0.55)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.86rem',
                  cursor: 'pointer'
                }}
                title="Fonte média"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  background: fontSizeLevel === 'xlarge' ? 'rgba(59, 130, 246, 0.55)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.96rem',
                  cursor: 'pointer'
                }}
                title="Fonte grande para leitura prolongada no celular"
              >
                A++
              </button>
            </div>

            {/* Seletor de Tema */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '0.15rem'
              }}
            >
              <button
                onClick={() => setThemeMode('dark')}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  background: themeMode === 'dark' ? 'rgba(30, 58, 138, 0.7)' : 'transparent',
                  border: 'none',
                  color: '#93c5fd',
                  fontWeight: 800,
                  fontSize: '0.74rem',
                  cursor: 'pointer'
                }}
                title="Tema Azul Militar"
              >
                Azul
              </button>
              <button
                onClick={() => setThemeMode('oled')}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  background: themeMode === 'oled' ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.74rem',
                  cursor: 'pointer'
                }}
                title="Tema Preto OLED (Economiza bateria no celular)"
              >
                OLED
              </button>
              <button
                onClick={() => setThemeMode('sepia')}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  background: themeMode === 'sepia' ? 'rgba(180, 83, 9, 0.5)' : 'transparent',
                  border: 'none',
                  color: '#fbbf24',
                  fontWeight: 800,
                  fontSize: '0.74rem',
                  cursor: 'pointer'
                }}
                title="Tema Sépia Noturno (Conforto visual)"
              >
                Sépia
              </button>
            </div>

            {/* Imprimir (oculto no mobile via CSS) */}
            <button
              onClick={handlePrint}
              className="law-booklet-print-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#e2e8f0',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
              title="Imprimir esta Lei para Estudo em Papel"
            >
              <Printer size={15} />
              <span>Imprimir</span>
            </button>
          </div>
        </div>

        {/* ================= BARRA DE BUSCA RÁPIDA NO MOBILE ================= */}
        <div style={{ padding: '0 1rem 0.55rem', maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ position: 'relative' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8'
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar termo ou artigo (ex: Art. 1º, latrocínio, tortura, DUDH)..."
              style={{
                width: '100%',
                padding: '0.65rem 2.2rem 0.65rem 2.4rem',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.92)',
                border: '1px solid rgba(59, 130, 246, 0.45)',
                color: '#ffffff',
                fontSize: '0.84rem',
                outline: 'none',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontWeight: 900,
                  fontSize: '0.9rem'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ================= NAVEGAÇÃO HORIZONTAL DE LEIS NO MOBILE (CHIPS/PÍLULAS) ================= */}
        <nav className="law-booklet-mobile-nav" aria-label="Seletor de Leis para Celular">
          {MILITARY_LAWS_DATA.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            return (
              <button
                key={`mobile-chip-${topic.id}`}
                onClick={() => {
                  sound.playClick();
                  setSelectedTopicId(topic.id);
                  setSearchQuery('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`law-booklet-chip ${isSelected ? 'active' : ''}`}
              >
                <span>{topic.icon}</span>
                <span>{topic.shortTitle}</span>
              </button>
            );
          })}
          <button
            onClick={() => setShowMobileListModal(true)}
            className="law-booklet-chip"
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              borderColor: '#38bdf8',
              color: '#7dd3fc'
            }}
          >
            <SlidersHorizontal size={14} />
            <span>Ver Todas ({MILITARY_LAWS_DATA.length})</span>
          </button>
        </nav>
      </header>

      {/* ================= CORPO PRINCIPAL COM GRID RESPONSIVO ================= */}
      <main className="law-booklet-main">
        {/* ================= BARRA LATERAL (DESKTOP): LISTA COMPLETA DAS 6 LEIS ================= */}
        <aside className="law-booklet-sidebar">
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 900,
              color: '#93c5fd',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              paddingLeft: '0.35rem'
            }}
          >
            Matérias & Diplomas Legais ({MILITARY_LAWS_DATA.length})
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {MILITARY_LAWS_DATA.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <div
                  key={`desktop-nav-${topic.id}`}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTopicId(topic.id);
                    setSearchQuery('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(37, 99, 235, 0.45) 100%)'
                      : themeStyles.cardBg,
                    border: isSelected ? '2px solid #3b82f6' : `1px solid ${themeStyles.cardBorder}`,
                    boxShadow: isSelected ? '0 0 16px rgba(59, 130, 246, 0.35)' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '1.45rem', flexShrink: 0 }}>{topic.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 900,
                        color: isSelected ? '#ffffff' : themeStyles.textPrimary,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {topic.shortTitle}
                    </div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: isSelected ? '#bfdbfe' : themeStyles.textMuted,
                        marginTop: '0.1rem'
                      }}
                    >
                      {topic.badge}
                    </div>
                  </div>
                  <ChevronRight size={15} color={isSelected ? '#93c5fd' : '#64748b'} />
                </div>
              );
            })}
          </div>
        </aside>

        {/* ================= COLUNA DIREITA (CONTEÚDO DA LEI) ================= */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
          {/* Cabeçalho da Lei Ativa */}
          <div
            style={{
              padding: '1.1rem 1.25rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  boxShadow: '0 0 16px rgba(37, 99, 235, 0.45)',
                  flexShrink: 0
                }}
              >
                {selectedTopic.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 900,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '5px',
                    background: 'rgba(59, 130, 246, 0.25)',
                    color: '#93c5fd',
                    letterSpacing: '0.04em'
                  }}
                >
                  {selectedTopic.badge}
                </span>
                <h2
                  style={{
                    margin: '0.25rem 0 0',
                    fontSize: '1.15rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1.25
                  }}
                >
                  {selectedTopic.fullTitle}
                </h2>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                  Fonte Oficial: <strong>{selectedTopic.officialRef}</strong>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {selectedTopic.summary}
            </div>
          </div>

          {/* Feedback de busca ativa */}
          {searchQuery && (
            <div
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                background: 'rgba(30, 58, 138, 0.35)',
                border: '1px solid rgba(59, 130, 246, 0.45)',
                fontSize: '0.82rem',
                color: '#93c5fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <span>
                Filtrado por "<strong>{searchQuery}</strong>" ({filteredArticles.length} artigos encontrados):
              </span>
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 900,
                  cursor: 'pointer',
                  fontSize: '0.78rem'
                }}
              >
                Limpar Busca
              </button>
            </div>
          )}

          {/* Lista de Artigos Formatados com Otimização Mobile */}
          {filteredArticles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                background: themeStyles.cardBg,
                borderRadius: '16px',
                border: `1px dashed ${themeStyles.cardBorder}`
              }}
            >
              <Search size={36} style={{ color: '#64748b', margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.1rem' }}>Nenhum artigo encontrado</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.84rem', marginTop: '0.35rem' }}>
                Tente buscar por termos mais genéricos, como o número do artigo ou palavras-chave.
              </p>
            </div>
          ) : (
            filteredArticles.map((article, idx) => (
              <article
                key={`${selectedTopic.id}-${idx}`}
                className="law-booklet-article"
                style={{
                  background: themeStyles.cardBg,
                  border: `1.5px solid ${themeStyles.cardBorder}`
                }}
              >
                {/* Cabeçalho do Artigo */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.08rem',
                        fontWeight: 900,
                        color: '#fbbf24',
                        letterSpacing: '0.01em',
                        lineHeight: 1.25
                      }}
                    >
                      {article.number}
                    </h3>
                    {article.heading && (
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: '#93c5fd',
                          marginTop: '0.15rem'
                        }}
                      >
                        {article.heading}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopyArticle(article)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.4rem 0.75rem',
                      borderRadius: '8px',
                      background: copiedArticleNumber === article.number ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: copiedArticleNumber === article.number ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.15)',
                      color: copiedArticleNumber === article.number ? '#4ade80' : '#cbd5e1',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      flexShrink: 0
                    }}
                    title="Copiar artigo formatado"
                  >
                    {copiedArticleNumber === article.number ? (
                      <>
                        <Check size={13} />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Texto da Lei na Íntegra (Tipografia adaptada para leitura prolongada em tela de celular) */}
                <div
                  className="law-article-body"
                  style={{
                    fontSize: fontSizes.text,
                    lineHeight: fontSizes.line,
                    color: themeStyles.textSecondary,
                    whiteSpace: 'pre-line',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    padding: '1.05rem',
                    background: 'rgba(0, 0, 0, 0.28)',
                    borderRadius: '12px',
                    borderLeft: '4px solid #3b82f6',
                    wordBreak: 'break-word'
                  }}
                >
                  {renderHighlighted(article.text)}
                </div>

                {/* Dica Tática AOCP */}
                {article.tip && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(180, 83, 9, 0.15) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.45)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <Lightbulb size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div style={{ minWidth: 0 }}>
                      <strong style={{ fontSize: '0.82rem', color: '#fef08a', textTransform: 'uppercase' }}>
                        💡 Dica Tática & Macete AOCP:
                      </strong>
                      <div style={{ fontSize: '0.82rem', color: '#fef3c7', marginTop: '0.2rem', lineHeight: 1.5 }}>
                        {renderHighlighted(article.tip)}
                      </div>
                    </div>
                  </div>
                )}

                {/* Alerta de Pegadinha da Banca */}
                {article.warning && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(185, 28, 28, 0.15) 100%)',
                      border: '1px solid rgba(239, 68, 68, 0.45)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <AlertTriangle size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div style={{ minWidth: 0 }}>
                      <strong style={{ fontSize: '0.82rem', color: '#fca5a5', textTransform: 'uppercase' }}>
                        ⚠️ Pegadinha Clássica da Banca AOCP:
                      </strong>
                      <div style={{ fontSize: '0.82rem', color: '#fee2e2', marginTop: '0.2rem', lineHeight: 1.5 }}>
                        {renderHighlighted(article.warning)}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </section>
      </main>

      {/* ================= BOTÃO FLUTUANTE VOLTAR AO TOPO NO MOBILE ================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="law-floating-top-btn"
          title="Voltar ao início da página"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* ================= MODAL SELETOR DE LEIS COMPLETO (MOBILE DRAWER) ================= */}
      {showMobileListModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'flex-end',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setShowMobileListModal(false)}
        >
          <div
            style={{
              width: '100%',
              maxHeight: '80vh',
              background: '#090d16',
              borderTop: '2px solid #3b82f6',
              borderRadius: '24px 24px 0 0',
              padding: '1.25rem',
              overflowY: 'auto',
              boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} color="#60a5fa" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#ffffff', fontWeight: 900 }}>
                  Escolha o Diploma Legal
                </h3>
              </div>
              <button
                onClick={() => setShowMobileListModal(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {MILITARY_LAWS_DATA.map((topic) => {
                const isSelected = topic.id === selectedTopicId;
                return (
                  <div
                    key={`modal-topic-${topic.id}`}
                    onClick={() => {
                      sound.playClick();
                      setSelectedTopicId(topic.id);
                      setSearchQuery('');
                      setShowMobileListModal(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      padding: '0.9rem 1rem',
                      borderRadius: '14px',
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(37, 99, 235, 0.5) 100%)'
                        : 'rgba(15, 23, 42, 0.8)',
                      border: isSelected ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem'
                    }}
                  >
                    <div style={{ fontSize: '1.6rem', flexShrink: 0 }}>{topic.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#ffffff' }}>
                        {topic.shortTitle}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                        {topic.badge}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem', lineHeight: 1.3 }}>
                        {topic.summary}
                      </div>
                    </div>
                    <ChevronRight size={16} color={isSelected ? '#60a5fa' : '#64748b'} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
