import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  FastForward,
  Award,
  Sparkles,
  X,
  BookOpen,
  CheckCircle2,
  Zap,
  Copy,
  Radio,
  FileText,
  Search
} from 'lucide-react';
import { TACTICAL_PODCAST_EPISODES, type TacticalPodcastEpisode } from '../data/podcastData';
import { sound } from '../utils/sound';

interface TacticalPodcastModalProps {
  onClose: () => void;
  userName?: string;
}

export const TacticalPodcastModal: React.FC<TacticalPodcastModalProps> = ({
  onClose,
  userName = 'Soldado'
}) => {
  const [selectedEpId, setSelectedEpId] = useState<string>(TACTICAL_PODCAST_EPISODES[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.25);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  const activeEpisode = TACTICAL_PODCAST_EPISODES.find(ep => ep.id === selectedEpId) || TACTICAL_PODCAST_EPISODES[0];

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  // Cancela áudio ao desmontar modal
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Para o áudio quando trocar de episódio
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgressPercent(0);
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  }, [selectedEpId]);

  const handleTogglePlay = () => {
    sound.playClick();
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não possui suporte para síntese de voz.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activeEpisode.audioScript);
      utterance.lang = 'pt-BR';
      utterance.rate = playbackSpeed;
      utterance.pitch = 1.0;
      utterance.volume = isMuted ? 0 : 1;

      // Estima duração com base na contagem de palavras e velocidade
      const words = activeEpisode.audioScript.split(/\s+/).length;
      const estimatedSeconds = Math.max(15, (words / (140 * playbackSpeed)) * 60);

      const startTime = Date.now();
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = window.setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const pct = Math.min(99, Math.round((elapsed / estimatedSeconds) * 100));
        setProgressPercent(pct);
      }, 500);

      utterance.onend = () => {
        setIsPlaying(false);
        setProgressPercent(100);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        sound.playLevelUp();
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleSpeedChange = (newSpeed: number) => {
    sound.playClick();
    setPlaybackSpeed(newSpeed);
    if (isPlaying) {
      // Reinicia com a nova velocidade
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activeEpisode.audioScript);
      utterance.lang = 'pt-BR';
      utterance.rate = newSpeed;
      utterance.pitch = 1.0;
      utterance.volume = isMuted ? 0 : 1;
      utterance.onend = () => {
        setIsPlaying(false);
        setProgressPercent(100);
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      };
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleResetAudio = () => {
    sound.playClick();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgressPercent(0);
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  };

  const handleCopySummary = () => {
    sound.playClick();
    const text = `🎧 [PODCAST TÁTICO PMPE 2026 - EPISÓDIO ${activeEpisode.number}]\n` +
      `📌 TEMA: ${activeEpisode.title}\n` +
      `🎯 MATÉRIA: ${activeEpisode.subject}\n\n` +
      `🔥 PONTOS QUENTES AOCP:\n` +
      activeEpisode.keyPoints.map(k => `• ${k}`).join('\n') +
      `\n\n💡 MNEMÔNICOS:\n` +
      activeEpisode.mnemonics.map(m => `👉 ${m}`).join('\n') +
      `\n\n⚠️ REGRA DE PROVA: ${activeEpisode.targetExamRule}\n\n` +
      `Preparatório Missão PMPE 2026 • Soldado`;

    navigator.clipboard.writeText(text);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  const filteredEpisodes = TACTICAL_PODCAST_EPISODES.filter(ep => {
    const matchesCat = selectedCategory === 'all' || ep.category === selectedCategory;
    const matchesSearch =
      ep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ep.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ep.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(5, 7, 12, 0.94)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        overflowY: 'auto'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1080px',
          maxHeight: '92vh',
          background: 'linear-gradient(180deg, #0e1320 0%, #07090f 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(245, 158, 11, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* HEADER MILITAR */}
        <div
          style={{
            padding: '1.1rem 1.4rem',
            background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%)',
            borderBottom: '1.5px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(245, 158, 11, 0.45)'
              }}
            >
              <Headphones size={24} color="#05070c" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.04em' }}>
                  PODCAST TÁTICO PMPE
                </h2>
                <span
                  style={{
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    background: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid #22c55e',
                    color: '#86efac',
                    fontSize: '0.7rem',
                    fontWeight: 900
                  }}
                >
                  8 PÍLULAS DE ELITE
                </span>
              </div>
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.78rem', color: '#94a3b8' }}>
                Flash-Aulas de 3 a 4 minutos com síntese de voz para estudar no trânsito, na academia ou antes de dormir
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: '#ffffff',
              padding: '0.45rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Fechar Podcast"
          >
            <X size={20} />
          </button>
        </div>

        {/* CORPO PRINCIPAL COM GRID: LISTA DE EPISÓDIOS (ESQUERDA) + PLAYER TÁTICO (DIREITA) */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1rem',
            padding: '1.2rem'
          }}
        >
          {/* COLUNA ESQUERDA: LISTA & FILTROS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {/* BARRA DE PESQUISA & FILTRO DE CATEGORIA */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <Search size={15} color="#94a3b8" />
                <input
                  type="text"
                  placeholder="Pesquisar pílula..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    outline: 'none',
                    width: '100%'
                  }}
                />
              </div>

              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: '#fbbf24',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  borderRadius: '10px',
                  padding: '0.45rem 0.75rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="all">Todas as Matérias</option>
                <option value="direito">Direito / DDHH</option>
                <option value="portugues">Português</option>
                <option value="raciocinio">Raciocínio Lógico</option>
                <option value="legislacao">Legislação PMPE/Extravagante</option>
                <option value="informatica">Informática</option>
              </select>
            </div>

            {/* LISTAGEM DOS EPISÓDIOS */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                maxHeight: '520px',
                overflowY: 'auto',
                paddingRight: '0.35rem'
              }}
            >
              {filteredEpisodes.map(ep => {
                const isSelected = ep.id === activeEpisode.id;
                return (
                  <div
                    key={ep.id}
                    onClick={() => {
                      sound.playClick();
                      setSelectedEpId(ep.id);
                    }}
                    style={{
                      padding: '0.85rem',
                      borderRadius: '12px',
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.15) 100%)'
                        : 'rgba(15, 23, 42, 0.65)',
                      border: isSelected
                        ? '1.5px solid #f59e0b'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 0 15px rgba(245, 158, 11, 0.25)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          color: isSelected ? '#fbbf24' : '#94a3b8',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase'
                        }}
                      >
                        PÍLULA #{ep.number} • {ep.subject}
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: '#38bdf8',
                          fontWeight: 700,
                          background: 'rgba(56, 189, 248, 0.15)',
                          padding: '0.1rem 0.4rem',
                          borderRadius: '4px'
                        }}
                      >
                        ~{ep.durationMinutes} min
                      </span>
                    </div>

                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35 }}>
                      {ep.title}
                    </div>

                    <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.35rem', lineHeight: 1.3 }}>
                      {ep.summary}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUNA DIREITA: PLAYER OPERACIONAL EM TEMPO REAL & FICHA RESUMO */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              background: 'rgba(10, 14, 23, 0.85)',
              border: '1.5px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '16px',
              padding: '1.2rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            {/* CABEÇALHO DO EPISÓDIO ATUAL NO PLAYER */}
            <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                <Radio size={16} color={isPlaying ? '#22c55e' : '#f59e0b'} style={{ animation: isPlaying ? 'pulse 1.2s infinite' : 'none' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {isPlaying ? 'TRANSMISSÃO TÁTICA EM CURSO...' : 'AGUARDANDO REPRODUÇÃO'}
                </span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.3 }}>
                {activeEpisode.title}
              </h3>
              <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.78rem', color: '#cbd5e1' }}>
                {activeEpisode.summary}
              </p>
            </div>

            {/* CONTROLES DE ÁUDIO (BOTÃO GIGANTE, VELOCIDADE E BARRA DE PROGRESSO) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                background: 'rgba(15, 23, 42, 0.8)',
                padding: '1rem',
                borderRadius: '14px',
                border: '1px solid rgba(245, 158, 11, 0.25)'
              }}
            >
              {/* BARRA DE PROGRESSO VISUAL */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '0.35rem', fontWeight: 700 }}>
                  <span>{isPlaying ? 'Em execução' : 'Início'}</span>
                  <span style={{ color: '#fbbf24' }}>{progressPercent}% concluído</span>
                  <span>~{activeEpisode.durationMinutes} min</span>
                </div>
                <div
                  style={{
                    height: '8px',
                    borderRadius: '999px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${progressPercent}%`,
                      background: 'linear-gradient(90deg, #16a34a, #22c55e, #f59e0b)',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
              </div>

              {/* CONTROLES PRINCIPAIS: PLAY/PAUSE + VELOCIDADE + REINICIAR */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                {/* VELOCIDADES DISPONÍVEIS */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 800 }}>VEL:</span>
                  {[1.0, 1.25, 1.5, 2.0].map(spd => (
                    <button
                      key={spd}
                      onClick={() => handleSpeedChange(spd)}
                      style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: playbackSpeed === spd ? '#f59e0b' : 'rgba(255, 255, 255, 0.08)',
                        color: playbackSpeed === spd ? '#07090e' : '#ffffff',
                        border: 'none',
                        fontSize: '0.74rem',
                        fontWeight: 900,
                        cursor: 'pointer'
                      }}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* BOTÃO PLAY / PAUSE CENTRAL COM RADAR GLOW */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <button
                    onClick={handleResetAudio}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      width: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      cursor: 'pointer'
                    }}
                    title="Reiniciar do Começo"
                  >
                    <RotateCcw size={16} />
                  </button>

                  <button
                    onClick={handleTogglePlay}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: isPlaying
                        ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                        : 'linear-gradient(135deg, #22c55e, #16a34a)',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isPlaying
                        ? '0 0 25px rgba(239, 68, 68, 0.5)'
                        : '0 0 25px rgba(34, 197, 94, 0.5)',
                      transition: 'transform 0.15s ease'
                    }}
                    title={isPlaying ? 'Pausar Áudio' : 'Ouvir Aula em Áudio'}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setIsMuted(!isMuted);
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      width: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isMuted ? '#ef4444' : '#ffffff',
                      cursor: 'pointer'
                    }}
                    title={isMuted ? 'Desmutar' : 'Mutar Áudio'}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* PONTOS QUENTES & MNEMÔNICOS (CHEAT SHEET) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Zap size={14} color="#f59e0b" />
                  <span>Pontos Quentes Cobrados pela AOCP</span>
                </span>
                <button
                  onClick={handleCopySummary}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: copiedSuccess ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    border: copiedSuccess ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.15)',
                    color: copiedSuccess ? '#86efac' : '#cbd5e1',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    borderRadius: '6px',
                    padding: '0.3rem 0.6rem',
                    cursor: 'pointer'
                  }}
                >
                  {copiedSuccess ? <CheckCircle2 size={13} color="#22c55e" /> : <Copy size={13} />}
                  <span>{copiedSuccess ? 'Copiado!' : 'Copiar Ficha'}</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {activeEpisode.keyPoints.map((pt, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.45rem',
                      fontSize: '0.78rem',
                      color: '#e2e8f0',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.45rem 0.65rem',
                      borderRadius: '8px',
                      borderLeft: '3px solid #f59e0b'
                    }}
                  >
                    <span style={{ color: '#fbbf24', fontWeight: 900 }}>✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* CARD DE MNEMÔNICO INFALÍVEL */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: '10px',
                  padding: '0.75rem'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#fca5a5', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  💡 Macete de Memorização Rápida:
                </div>
                {activeEpisode.mnemonics.map((mn, idx) => (
                  <div key={idx} style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fef08a', marginBottom: '0.2rem' }}>
                    {mn}
                  </div>
                ))}
              </div>

              {/* ALERTA DE PEGADINHA */}
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  borderRadius: '10px',
                  padding: '0.65rem 0.85rem',
                  fontSize: '0.76rem',
                  color: '#86efac'
                }}
              >
                <span style={{ fontWeight: 900, color: '#4ade80' }}>🎯 Dica de Ouro do Comandante Gean: </span>
                {activeEpisode.targetExamRule}
              </div>
            </div>
          </div>
        </div>

        {/* RODAPÉ DO MODAL */}
        <div
          style={{
            padding: '0.75rem 1.4rem',
            background: 'rgba(5, 7, 12, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.74rem',
            color: '#94a3b8',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <span>Operação Concurso PMPE 2026 • Soldado Combatente</span>
          <span style={{ color: '#fbbf24', fontWeight: 700 }}>Pílulas em conformidade com o Edital e Jurisprudência STF/STJ</span>
        </div>
      </div>
    </div>
  );
};
