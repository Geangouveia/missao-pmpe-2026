import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  ArrowLeft,
  Printer,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  Shield,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  Bookmark,
  Share2
} from 'lucide-react';
import { MILITARY_LAWS_DATA, type LawTopic, type LawArticle } from '../data/militaryLawsData';
import { sound } from '../utils/sound';

interface MilitaryLawBookletViewProps {
  onBackToApp: () => void;
}

export const MilitaryLawBookletView: React.FC<MilitaryLawBookletViewProps> = ({ onBackToApp }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(MILITARY_LAWS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [themeMode, setThemeMode] = useState<'dark' | 'oled' | 'sepia'>('dark');
  const [copiedArticleNumber, setCopiedArticleNumber] = useState<string | null>(null);

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

  // Cores por tema
  const themeStyles = {
    dark: {
      bg: 'radial-gradient(ellipse at top, #0d1b2a 0%, #060b17 60%, #030712 100%)',
      cardBg: 'rgba(15, 23, 42, 0.85)',
      cardBorder: 'rgba(255, 255, 255, 0.08)',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1',
      textMuted: '#94a3b8'
    },
    oled: {
      bg: '#000000',
      cardBg: '#090d16',
      cardBorder: 'rgba(59, 130, 246, 0.25)',
      textPrimary: '#ffffff',
      textSecondary: '#e2e8f0',
      textMuted: '#94a3b8'
    },
    sepia: {
      bg: '#1c1917',
      cardBg: '#292524',
      cardBorder: 'rgba(245, 158, 11, 0.2)',
      textPrimary: '#fef3c7',
      textSecondary: '#e7e5e4',
      textMuted: '#a8a29e'
    }
  }[themeMode];

  const fontSizes = {
    normal: { text: '0.98rem', line: 1.7 },
    large: { text: '1.12rem', line: 1.8 },
    xlarge: { text: '1.26rem', line: 1.9 }
  }[fontSizeLevel];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: themeStyles.bg,
        color: themeStyles.textPrimary,
        paddingBottom: '5rem',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      {/* ================= BARRA SUPERIOR FIXA ================= */}
      <header
        style={{
          background: 'linear-gradient(180deg, rgba(10, 17, 32, 0.98) 0%, rgba(6, 11, 23, 0.98) 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.4)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.7)'
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '1rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Lado Esquerdo: Voltar & Título */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                sound.playClick();
                onBackToApp();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
              title="Voltar ao Treinamento / Menu Principal"
            >
              <ArrowLeft size={18} />
              <span>Voltar ao Treinamento</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(37, 99, 235, 0.45)',
                  color: '#ffffff'
                }}
              >
                <BookOpen size={24} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      letterSpacing: '0.02em'
                    }}
                  >
                    VADE MECUM & CADERNO DE LEIS SECAS
                  </h1>
                  <span
                    style={{
                      background: 'rgba(34, 197, 94, 0.2)',
                      border: '1px solid #22c55e',
                      color: '#4ade80',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 900,
                      letterSpacing: '0.05em'
                    }}
                  >
                    EDITAL PMPE • PLANALTO ATUALIZADO
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                  Legislação integral com macetes táticos e pegadinhas da Banca AOCP
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Controles de Leitura (Fonte, Tema, Imprimir) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            {/* Controle de Fonte */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '0.2rem'
              }}
            >
              <button
                onClick={() => setFontSizeLevel('normal')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  background: fontSizeLevel === 'normal' ? 'rgba(59, 130, 246, 0.5)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
                title="Tamanho padrão de fonte"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  background: fontSizeLevel === 'large' ? 'rgba(59, 130, 246, 0.5)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                title="Fonte média"
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  background: fontSizeLevel === 'xlarge' ? 'rgba(59, 130, 246, 0.5)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
                title="Fonte grande para leitura prolongada"
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
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '0.2rem'
              }}
            >
              <button
                onClick={() => setThemeMode('dark')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  background: themeMode === 'dark' ? 'rgba(30, 58, 138, 0.6)' : 'transparent',
                  border: 'none',
                  color: '#93c5fd',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
                title="Tema Azul Militar"
              >
                Azul
              </button>
              <button
                onClick={() => setThemeMode('oled')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  background: themeMode === 'oled' ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
                title="Tema Preto OLED (Economiza bateria)"
              >
                OLED
              </button>
              <button
                onClick={() => setThemeMode('sepia')}
                style={{
                  padding: '0.35rem 0.65rem',
                  borderRadius: '8px',
                  background: themeMode === 'sepia' ? 'rgba(180, 83, 9, 0.4)' : 'transparent',
                  border: 'none',
                  color: '#fbbf24',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
                title="Tema Sépia (Conforto visual)"
              >
                Sépia
              </button>
            </div>

            {/* Imprimir */}
            <button
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#e2e8f0',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
              title="Imprimir esta Lei para Estudo em Papel"
            >
              <Printer size={16} />
              <span>Imprimir</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= CORPO PRINCIPAL: TELA CHEIA E ESPAÇOSA ================= */}
      <main
        style={{
          maxWidth: '1360px',
          margin: '1.5rem auto 0',
          padding: '0 1.25rem',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 340px) 1fr',
          gap: '1.5rem',
          alignItems: 'start'
        }}
      >
        {/* ================= COLUNA LATERAL ESQUERDA: LISTA DE LEIS DO EDITAL ================= */}
        <aside
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            position: 'sticky',
            top: '5.5rem'
          }}
        >
          {/* Caixa de Busca em Tempo Real */}
          <div
            style={{
              position: 'relative',
              marginBottom: '0.25rem'
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94a3b8'
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar termo ou artigo (ex: Art. 1º, latrocínio, tortura)..."
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.6rem',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                color: '#ffffff',
                fontSize: '0.88rem',
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
                  fontWeight: 900
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div
            style={{
              fontSize: '0.74rem',
              fontWeight: 900,
              color: '#93c5fd',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              paddingLeft: '0.5rem'
            }}
          >
            Matérias & Diplomas Legais ({MILITARY_LAWS_DATA.length})
          </div>

          {/* Cards da Lista Lateral */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {MILITARY_LAWS_DATA.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <div
                  key={topic.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedTopicId(topic.id);
                    setSearchQuery('');
                  }}
                  style={{
                    padding: '0.9rem 1.1rem',
                    borderRadius: '14px',
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.6) 0%, rgba(37, 99, 235, 0.4) 100%)'
                      : themeStyles.cardBg,
                    border: isSelected ? '2px solid #3b82f6' : `1px solid ${themeStyles.cardBorder}`,
                    boxShadow: isSelected ? '0 0 20px rgba(59, 130, 246, 0.4)' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', flexShrink: 0 }}>{topic.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '0.92rem',
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
                        fontSize: '0.74rem',
                        color: isSelected ? '#bfdbfe' : themeStyles.textMuted,
                        marginTop: '0.15rem'
                      }}
                    >
                      {topic.badge}
                    </div>
                  </div>
                  <ChevronRight size={16} color={isSelected ? '#93c5fd' : '#64748b'} />
                </div>
              );
            })}
          </div>
        </aside>

        {/* ================= COLUNA DIREITA: CONTEÚDO AMPLO DA LEI ================= */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Cabeçalho do Diploma Selecionado */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)',
              border: '2px solid rgba(59, 130, 246, 0.45)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)',
                  flexShrink: 0
                }}
              >
                {selectedTopic.icon}
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    background: 'rgba(59, 130, 246, 0.25)',
                    color: '#93c5fd',
                    letterSpacing: '0.05em'
                  }}
                >
                  {selectedTopic.badge}
                </span>
                <h2 style={{ margin: '0.35rem 0 0', fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>
                  {selectedTopic.fullTitle}
                </h2>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Fonte Oficial: <strong>{selectedTopic.officialRef}</strong>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', maxWidth: '380px', lineHeight: 1.45 }}>
              {selectedTopic.summary}
            </div>
          </div>

          {/* Aviso se a busca filtrou artigos */}
          {searchQuery && (
            <div
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                background: 'rgba(30, 58, 138, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                fontSize: '0.86rem',
                color: '#93c5fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>
                Exibindo resultados para "<strong>{searchQuery}</strong>" ({filteredArticles.length} artigos encontrados):
              </span>
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 900,
                  cursor: 'pointer',
                  fontSize: '0.82rem'
                }}
              >
                Limpar Busca
              </button>
            </div>
          )}

          {/* Lista de Artigos Formatados com Alta Legibilidade */}
          {filteredArticles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: themeStyles.cardBg,
                borderRadius: '20px',
                border: `1px dashed ${themeStyles.cardBorder}`
              }}
            >
              <Search size={42} style={{ color: '#64748b', margin: '0 auto 1rem' }} />
              <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.2rem' }}>Nenhum artigo encontrado</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '0.5rem' }}>
                Tente buscar por termos mais genéricos, como o número do artigo ou palavras-chave.
              </p>
            </div>
          ) : (
            filteredArticles.map((article, idx) => (
              <article
                key={`${selectedTopic.id}-${idx}`}
                style={{
                  padding: '1.8rem',
                  borderRadius: '20px',
                  background: themeStyles.cardBg,
                  border: `1.5px solid ${themeStyles.cardBorder}`,
                  boxShadow: '0 4px 25px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  transition: 'border-color 0.2s ease'
                }}
              >
                {/* Cabeçalho do Artigo */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        color: '#fbbf24',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {article.number}
                    </h3>
                    {article.heading && (
                      <div
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: '#93c5fd',
                          marginTop: '0.2rem'
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
                      gap: '0.4rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      background: copiedArticleNumber === article.number ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: copiedArticleNumber === article.number ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.15)',
                      color: copiedArticleNumber === article.number ? '#4ade80' : '#cbd5e1',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    title="Copiar artigo formatado"
                  >
                    {copiedArticleNumber === article.number ? (
                      <>
                        <Check size={14} />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copiar Artigo</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Texto da Lei na Íntegra */}
                <div
                  style={{
                    fontSize: fontSizes.text,
                    lineHeight: fontSizes.line,
                    color: themeStyles.textSecondary,
                    whiteSpace: 'pre-line',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    padding: '1.2rem',
                    background: 'rgba(0, 0, 0, 0.25)',
                    borderRadius: '14px',
                    borderLeft: '4px solid #3b82f6'
                  }}
                >
                  {article.text}
                </div>

                {/* Dica Tática AOCP */}
                {article.tip && (
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(180, 83, 9, 0.15) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.45)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem'
                    }}
                  >
                    <Lightbulb size={20} color="#fbbf24" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ fontSize: '0.86rem', color: '#fef08a', textTransform: 'uppercase' }}>
                        💡 Dica Tática & Macete AOCP:
                      </strong>
                      <div style={{ fontSize: '0.85rem', color: '#fef3c7', marginTop: '0.2rem', lineHeight: 1.5 }}>
                        {article.tip}
                      </div>
                    </div>
                  </div>
                )}

                {/* Alerta de Pegadinha da Banca */}
                {article.warning && (
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(185, 28, 28, 0.15) 100%)',
                      border: '1px solid rgba(239, 68, 68, 0.45)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem'
                    }}
                  >
                    <AlertTriangle size={20} color="#f87171" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <strong style={{ fontSize: '0.86rem', color: '#fca5a5', textTransform: 'uppercase' }}>
                        ⚠️ Pegadinha Clássica da Banca AOCP:
                      </strong>
                      <div style={{ fontSize: '0.85rem', color: '#fee2e2', marginTop: '0.2rem', lineHeight: 1.5 }}>
                        {article.warning}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
};
