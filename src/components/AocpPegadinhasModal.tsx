import React, { useState } from 'react';
import {
  AlertTriangle,
  Search,
  Eye,
  ShieldAlert,
  Sparkles,
  BookOpen,
  Volume2,
  VolumeX,
  X,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';
import { PEGADINHAS_AOCP_DATABASE, type PegadinhaItem } from '../data/pegadinhasData';
import { sound } from '../utils/sound';
import { speakQuestion, stopSpeaking } from '../utils/speechNarrator';

interface AocpPegadinhasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AocpPegadinhasModal: React.FC<AocpPegadinhasModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [selectedMateria, setSelectedMateria] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  const materias = [
    { id: 'all', label: 'Todas as Matérias' },
    { id: 'Direito Constitucional', label: '⚖️ Constitucional' },
    { id: 'Raciocínio Lógico (RLM)', label: '🧠 RLM' },
    { id: 'Língua Portuguesa', label: '📖 Português' },
    { id: 'História de Pernambuco', label: '🦁 História de PE' },
    { id: 'Legislação Extravagante', label: '🚨 Leis Extravagantes' },
    { id: 'Legislação PMPE', label: '🛡️ Estatuto PMPE' },
    { id: 'Informática', label: '💻 Informática' },
    { id: 'Direitos Humanos', label: '🕊️ Direitos Humanos' }
  ];

  const filteredItems = PEGADINHAS_AOCP_DATABASE.filter((item) => {
    const matchMateria = selectedMateria === 'all' || item.materia === selectedMateria;
    const matchSearch =
      searchTerm === '' ||
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.enunciadoFalsoOuCapcioso.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.antidotoTatico.toLowerCase().includes(searchTerm.toLowerCase());

    return matchMateria && matchSearch;
  });

  const toggleReveal = (id: string) => {
    sound.playGunshot38();
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleAudio = (item: PegadinhaItem) => {
    if (activeSpeechId === item.id) {
      stopSpeaking();
      setActiveSpeechId(null);
    } else {
      stopSpeaking();
      setActiveSpeechId(item.id);
      const text = `Atenção guerreiro. Armadilha da Banca: ${item.titulo}. Enunciado falso da prova: ${item.enunciadoFalsoOuCapcioso}. Onde a banca tentou te derrubar: ${item.ondeABancaTentouDerrubar}. Antídoto tático: ${item.antidotoTatico}`;
      speakQuestion(text, [], {
        onStart: () => setActiveSpeechId(item.id),
        onEnd: () => setActiveSpeechId(null),
        onError: () => setActiveSpeechId(null)
      });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(4, 7, 14, 0.96)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1050px',
          maxHeight: '94vh',
          background: 'linear-gradient(180deg, #090e1a 0%, #05070c 100%)',
          border: '2px solid rgba(239, 68, 68, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(239, 68, 68, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(185, 28, 28, 0.35) 0%, rgba(10, 17, 32, 0.98) 100%)',
            borderBottom: '1px solid rgba(239, 68, 68, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(239, 68, 68, 0.5)',
                color: '#ffffff'
              }}
            >
              <ShieldAlert size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  LABORATÓRIO DE PEGADINHAS DA AOCP (CASCAS DE BANANA)
                </h2>
                <span
                  style={{
                    background: 'rgba(239, 68, 68, 0.25)',
                    border: '1px solid #ef4444',
                    color: '#fca5a5',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  BLINDAGEM COGNITIVA
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
                Aprenda a detectar onde o examinador do Instituto AOCP esconde as armadilhas para derrubar os candidatos desatentos.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              stopSpeaking();
              sound.playClick();
              onClose();
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* BARRA DE FILTROS & BUSCA */}
        <div
          style={{
            padding: '0.85rem 1.5rem',
            background: 'rgba(6, 10, 20, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Pesquisar por assunto ou palavra-chave (Ex: Mandado, MANÉ, Crase, Frei Caneca)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 2.2rem 0.45rem 0.8rem',
                  borderRadius: '8px',
                  background: '#07090e',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
              <Search
                size={16}
                color="#f87171"
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>

            <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 800 }}>
              {filteredItems.length} {filteredItems.length === 1 ? 'armadilha cadastrada' : 'armadilhas cadastradas'}
            </div>
          </div>

          {/* Pílulas de Matéria */}
          <div style={{ display: 'flex', gap: '0.35rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
            {materias.map((m) => {
              const isSelected = selectedMateria === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedMateria(m.id);
                  }}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '16px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    background: isSelected ? '#ef4444' : 'rgba(255,255,255,0.06)',
                    border: isSelected ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.12)',
                    color: isSelected ? '#ffffff' : '#cbd5e1',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* LISTA DE PEGADINHAS */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {filteredItems.map((item) => {
            const isRevealed = !!revealedIds[item.id];
            const isSpeaking = activeSpeechId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: isRevealed ? '1.5px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  boxShadow: isRevealed ? '0 0 25px rgba(239, 68, 68, 0.15)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Cabeçalho do Card */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(239, 68, 68, 0.2)',
                        color: '#fca5a5',
                        border: '1px solid rgba(239, 68, 68, 0.4)'
                      }}
                    >
                      {item.materia}
                    </span>
                    <h3 style={{ margin: 0, fontSize: '1.02rem', fontWeight: 900, color: '#ffffff' }}>
                      {item.titulo}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <button
                      onClick={() => handleToggleAudio(item)}
                      style={{
                        background: isSpeaking ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                        border: isSpeaking ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.15)',
                        color: isSpeaking ? '#fca5a5' : '#e2e8f0',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        cursor: 'pointer'
                      }}
                    >
                      {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      <span>{isSpeaking ? 'Parar Áudio' : 'Ouvir Exame'}</span>
                    </button>
                  </div>
                </div>

                {/* Enunciado Capcioso */}
                <div
                  style={{
                    background: 'rgba(10, 15, 26, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    fontSize: '0.94rem',
                    lineHeight: 1.55,
                    color: '#f8fafc'
                  }}
                >
                  <strong style={{ color: '#fbbf24' }}>Como a prova formula: </strong>
                  {item.enunciadoFalsoOuCapcioso}
                </div>

                {/* BOTÃO PARA REVELAR ONDE ESTÁ A CASCA DE BANANA */}
                {!isRevealed ? (
                  <button
                    onClick={() => toggleReveal(item.id)}
                    style={{
                      alignSelf: 'flex-start',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: '0.82rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      boxShadow: '0 0 12px rgba(220, 38, 38, 0.35)'
                    }}
                  >
                    <Eye size={16} />
                    <span>Revelar a Armadilha da Banca</span>
                  </button>
                ) : (
                  /* ÁREA REVELADA COM TRECHO E ANTÍDOTO */
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      background: 'rgba(239, 68, 68, 0.06)',
                      border: '1.5px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '12px',
                      padding: '1rem',
                      animation: 'fadeIn 0.2s ease-out'
                    }}
                  >
                    {/* Trecho Traiçoeiro */}
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#fca5a5', textTransform: 'uppercase', fontWeight: 900 }}>
                        🚨 Trecho Traiçoeiro da Alternativa:
                      </span>
                      <div
                        style={{
                          fontSize: '0.92rem',
                          fontWeight: 800,
                          color: '#fca5a5',
                          background: 'rgba(0, 0, 0, 0.45)',
                          padding: '0.45rem 0.75rem',
                          borderRadius: '6px',
                          marginTop: '0.25rem',
                          borderLeft: '4px solid #ef4444'
                        }}
                      >
                        "{item.trechoArmadilha}"
                      </div>
                    </div>

                    {/* Análise da Pegadinha */}
                    <div style={{ fontSize: '0.86rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      <strong style={{ color: '#fbbf24' }}>Onde a Banca Tentou te Derrubar: </strong>
                      {item.ondeABancaTentouDerrubar}
                    </div>

                    {/* Antídoto Tático */}
                    <div
                      style={{
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.35)',
                        borderRadius: '8px',
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.84rem',
                        color: '#86efac',
                        lineHeight: 1.5
                      }}
                    >
                      <strong style={{ color: '#4ade80' }}>🛡️ Antídoto Tático da PMPE: </strong>
                      {item.antidotoTatico}
                    </div>

                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                      Fundamentação: <strong>{item.artigoOuRegra}</strong> • Foco: <em>{item.bancaFoco}</em>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RODAPÉ */}
        <div
          style={{
            padding: '1rem 1.5rem',
            background: 'rgba(10, 17, 32, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            A banca AOCP não cria novas leis; ela apenas manipula as palavras para pegar quem lê na pressa!
          </div>

          <button
            onClick={() => {
              stopSpeaking();
              sound.playClick();
              onClose();
            }}
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '0.88rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Blindado contra a Banca!
          </button>
        </div>
      </div>
    </div>
  );
};
