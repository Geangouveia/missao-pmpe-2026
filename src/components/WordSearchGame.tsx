import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  ArrowLeft, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  Radar, 
  HelpCircle, 
  ChevronRight, 
  Timer as TimerIcon, 
  Check, 
  BookOpen, 
  X,
  Volume2,
  RefreshCw,
  Award,
  AlertTriangle
} from 'lucide-react';
import { WORD_SEARCH_BOARDS, type WordSearchBoard, type WordSearchItem, type WordSearchPathCell } from '../data/wordSearchData';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface WordSearchGameProps {
  onExit: () => void;
  onAwardXp: (amount: number) => void;
  userName?: string;
}

// Paleta de cores vibrantes para cada palavra encontrada
const FOUND_PALETTES = [
  { bg: 'rgba(16, 185, 129, 0.35)', border: '#10b981', text: '#34d399' }, // Esmeralda
  { bg: 'rgba(6, 182, 212, 0.35)', border: '#06b6d4', text: '#38bdf8' },  // Ciano
  { bg: 'rgba(245, 158, 11, 0.35)', border: '#f59e0b', text: '#fbbf24' }, // Âmbar
  { bg: 'rgba(168, 85, 247, 0.35)', border: '#a855f7', text: '#c084fc' }, // Roxo
  { bg: 'rgba(244, 63, 94, 0.35)', border: '#f43f5e', text: '#fb7185' },  // Rosa Tático
  { bg: 'rgba(59, 130, 246, 0.35)', border: '#3b82f6', text: '#60a5fa' }, // Azul Militar
  { bg: 'rgba(132, 204, 22, 0.35)', border: '#84cc16', text: '#a3e635' }  // Lima
];

export const WordSearchGame: React.FC<WordSearchGameProps> = ({ onExit, onAwardXp, userName }) => {
  // Estado do Tabuleiro
  const [boardIndex, setBoardIndex] = useState<number>(0);
  const currentBoard: WordSearchBoard = WORD_SEARCH_BOARDS[boardIndex] || WORD_SEARCH_BOARDS[0];

  // Palavras encontradas: mapa de word.id -> índice da paleta de cores
  const [foundWords, setFoundWords] = useState<Record<string, number>>({});
  
  // Seleção atual
  const [startCell, setStartCell] = useState<WordSearchPathCell | null>(null);
  const [hoverCell, setHoverCell] = useState<WordSearchPathCell | null>(null);
  const [isPointerDown, setIsPointerDown] = useState<boolean>(false);
  const [shakeError, setShakeError] = useState<boolean>(false);

  // Dica Radar
  const [radarHintCell, setRadarHintCell] = useState<WordSearchPathCell | null>(null);
  const [hintsRemaining, setHintsRemaining] = useState<number>(4);

  // Modal Educacional da Palavra Encontrada
  const [activeConceptModal, setActiveConceptModal] = useState<WordSearchItem | null>(null);

  // Modal de Conclusão / Vitória
  const [showVictoryModal, setShowVictoryModal] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  // Tabuleiros concluídos persistidos
  const [completedBoards, setCompletedBoards] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pmpe_wordsearch_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Cronômetro da partida
  useEffect(() => {
    if (showVictoryModal) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [showVictoryModal]);

  // Reinicia ao mudar de tabuleiro
  useEffect(() => {
    setFoundWords({});
    setStartCell(null);
    setHoverCell(null);
    setIsPointerDown(false);
    setRadarHintCell(null);
    setHintsRemaining(4);
    setShowVictoryModal(false);
    setActiveConceptModal(null);
    setTimerSeconds(0);
  }, [boardIndex, currentBoard]);

  // Calcula a linha reta entre start e target
  const getLinePath = useCallback((from: WordSearchPathCell, to: WordSearchPathCell): WordSearchPathCell[] => {
    const dr = to.row - from.row;
    const dc = to.col - from.col;

    const absR = Math.abs(dr);
    const absC = Math.abs(dc);

    // Deve ser estritamente horizontal, vertical ou diagonal perfeita (45 graus)
    if (dr !== 0 && dc !== 0 && absR !== absC) {
      return [from]; // Não é uma linha reta válida
    }

    const steps = Math.max(absR, absC);
    const stepR = dr === 0 ? 0 : dr / absR;
    const stepC = dc === 0 ? 0 : dc / absC;

    const path: WordSearchPathCell[] = [];
    for (let i = 0; i <= steps; i++) {
      path.push({
        row: from.row + i * stepR,
        col: from.col + i * stepC
      });
    }

    return path;
  }, []);

  // Células atualmente destacadas pela seleção do jogador
  const currentSelectionPath = useMemo(() => {
    if (!startCell) return [];
    if (!hoverCell) return [startCell];
    return getLinePath(startCell, hoverCell);
  }, [startCell, hoverCell, getLinePath]);

  // Texto da palavra sendo selecionada em tempo real
  const currentSelectedString = useMemo(() => {
    if (!currentSelectionPath || currentSelectionPath.length === 0) return '';
    return currentSelectionPath.map((c) => currentBoard.grid[c.row]?.[c.col] || '').join('');
  }, [currentSelectionPath, currentBoard]);

  // Mapeamento de células já encontradas para estilização
  const foundCellsMap = useMemo(() => {
    const map = new Map<string, { colorIdx: number; word: WordSearchItem }>();

    Object.entries(foundWords).forEach(([wordId, colorIdx]) => {
      const item = currentBoard.words.find((w) => w.id === wordId);
      if (item) {
        item.path.forEach((cell) => {
          map.set(`${cell.row},${cell.col}`, { colorIdx, word: item });
        });
      }
    });

    return map;
  }, [foundWords, currentBoard]);

  // Verifica se o caminho selecionado corresponde a uma palavra
  const checkSelection = useCallback((path: WordSearchPathCell[]) => {
    if (path.length < 2) {
      setStartCell(null);
      setHoverCell(null);
      return;
    }

    // Monta a string na ordem normal e inversa
    let forwardStr = '';
    path.forEach((c) => {
      forwardStr += currentBoard.grid[c.row][c.col];
    });
    const reverseStr = forwardStr.split('').reverse().join('');

    // Procura na lista de palavras que ainda não foram encontradas
    const match = currentBoard.words.find(
      (w) => (!foundWords[w.id]) && (w.term === forwardStr || w.term === reverseStr)
    );

    if (match) {
      sound.playSuccess();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });

      const nextPaletteIdx = Object.keys(foundWords).length % FOUND_PALETTES.length;
      setFoundWords((prev) => ({
        ...prev,
        [match.id]: nextPaletteIdx
      }));

      // Se havia um radar ativo nessa palavra, limpa
      setRadarHintCell(null);

      // Abre o card explicativo do conceito para o estudante ler
      setActiveConceptModal(match);

      setStartCell(null);
      setHoverCell(null);
    } else {
      // Erro: vibração e som
      sound.playError();
      setShakeError(true);
      setTimeout(() => {
        setShakeError(false);
        setStartCell(null);
        setHoverCell(null);
      }, 350);
    }
  }, [currentBoard, foundWords]);

  // Verifica se todas as palavras foram encontradas para acionar vitória
  useEffect(() => {
    const totalWords = currentBoard.words.length;
    const foundCount = Object.keys(foundWords).length;

    if (totalWords > 0 && foundCount === totalWords && !showVictoryModal) {
      sound.playSuccess();
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.55 }
      });

      setShowVictoryModal(true);
      onAwardXp(currentBoard.xpReward);

      if (!completedBoards.includes(currentBoard.id)) {
        const next = [...completedBoards, currentBoard.id];
        setCompletedBoards(next);
        try {
          localStorage.setItem('pmpe_wordsearch_completed', JSON.stringify(next));
        } catch {}
      }
    }
  }, [foundWords, currentBoard, showVictoryModal, completedBoards, onAwardXp]);

  // Eventos de Toque / Clique na célula
  const handleCellClick = (r: number, c: number) => {
    sound.playClick();

    if (!startCell) {
      // Primeiro clique: inicia seleção
      setStartCell({ row: r, col: c });
      setHoverCell({ row: r, col: c });
    } else {
      // Segundo clique: tenta validar a linha formada
      const finalPath = getLinePath(startCell, { row: r, col: c });
      checkSelection(finalPath);
    }
  };

  // Eventos de Arraste (Pointer / Mouse Drag)
  const handlePointerDown = (r: number, c: number) => {
    setIsPointerDown(true);
    setStartCell({ row: r, col: c });
    setHoverCell({ row: r, col: c });
  };

  const handlePointerEnter = (r: number, c: number) => {
    if (isPointerDown && startCell) {
      setHoverCell({ row: r, col: c });
    }
  };

  const handlePointerUp = () => {
    if (isPointerDown && startCell && hoverCell) {
      setIsPointerDown(false);
      // Se arrastou para uma célula diferente, valida imediatamente
      if (startCell.row !== hoverCell.row || startCell.col !== hoverCell.col) {
        const path = getLinePath(startCell, hoverCell);
        checkSelection(path);
      }
    }
  };

  // Usar Radar Tático (Dica: revela a posição inicial de uma palavra não encontrada)
  const handleUseRadar = () => {
    if (hintsRemaining <= 0) return;

    // Encontra primeira palavra não achada
    const unrevealed = currentBoard.words.filter((w) => !foundWords[w.id]);
    if (unrevealed.length === 0) return;

    sound.playSuccess();
    const target = unrevealed[0];
    setRadarHintCell(target.start);
    setHintsRemaining((prev) => prev - 1);
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Conjunto de chaves da seleção atual para visualização rápida
  const selectionSet = useMemo(() => {
    const s = new Set<string>();
    currentSelectionPath.forEach((c) => s.add(`${c.row},${c.col}`));
    return s;
  }, [currentSelectionPath]);

  return (
    <div 
      onPointerUp={handlePointerUp}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minHeight: '85vh', paddingBottom: '3rem' }}
    >
      
      {/* CABEÇALHO TÁTICO */}
      <div 
        className="glass-panel" 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1rem 1.25rem',
          background: 'linear-gradient(135deg, rgba(16, 20, 28, 0.95), rgba(9, 11, 16, 0.98))',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              onExit();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0.85rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#cbd5e1',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <ArrowLeft size={16} />
            <span>Voltar</span>
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span 
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '20px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.35)'
                }}
              >
                {currentBoard.badge}
              </span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {currentBoard.title}
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#94a3b8' }}>
              {currentBoard.theme}
            </p>
          </div>
        </div>

        {/* STATUS BAR: CRONÔMETRO, PALAVRAS ENCONTRADAS E XP */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.8rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.82rem',
              color: '#e2e8f0',
              fontWeight: 700
            }}
          >
            <TimerIcon size={15} color="#38bdf8" />
            <span>{formatTimer(timerSeconds)}</span>
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.8rem',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontSize: '0.82rem',
              color: '#34d399',
              fontWeight: 800
            }}
          >
            <CheckCircle2 size={15} />
            <span>{Object.keys(foundWords).length} / {currentBoard.words.length} encontradas</span>
          </div>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.8rem',
              borderRadius: '10px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              fontSize: '0.82rem',
              color: '#d4af37',
              fontWeight: 800
            }}
          >
            <Trophy size={15} />
            <span>+{currentBoard.xpReward} XP</span>
          </div>
        </div>
      </div>

      {/* SELETOR DE MISSÕES (ABAS 1 A 5) */}
      <div 
        style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
          scrollbarWidth: 'none'
        }}
      >
        {WORD_SEARCH_BOARDS.map((b, idx) => {
          const isCurrent = idx === boardIndex;
          const isDone = completedBoards.includes(b.id);

          return (
            <button
              key={b.id}
              onClick={() => {
                sound.playClick();
                setBoardIndex(idx);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                border: isCurrent 
                  ? '1.5px solid #38bdf8' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: isCurrent 
                  ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(14, 165, 233, 0.15))' 
                  : 'rgba(15, 18, 26, 0.85)',
                color: isCurrent ? '#ffffff' : '#94a3b8',
                fontWeight: isCurrent ? 800 : 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                boxShadow: isCurrent ? '0 0 15px rgba(56, 189, 248, 0.25)' : 'none'
              }}
            >
              <span>{b.badge}</span>
              <span>Missão {idx + 1}</span>
              {isDone && <Check size={14} color="#34d399" />}
            </button>
          );
        })}
      </div>

      {/* ÁREA CENTRAL: MATRIZ DE CAÇA-PALAVRAS + PAINEL DE TERMOS */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.4fr) minmax(300px, 1fr)',
          gap: '1.25rem',
          alignItems: 'start'
        }}
      >

        {/* LADO ESQUERDO: GRADE MATRICIAL TÁTICA */}
        <div 
          className="glass-panel"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.25rem',
            background: 'linear-gradient(145deg, rgba(14, 18, 26, 0.98), rgba(8, 10, 15, 0.98))',
            border: shakeError ? '1.5px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.65)',
            userSelect: 'none',
            touchAction: 'none',
            transition: 'border 0.2s'
          }}
        >
          {/* BARRA SUPERIOR DA GRADE (INSTRUÇÃO E DICA RADAR) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.82rem' }}>
              <Search size={15} color="#38bdf8" />
              <span>
                {startCell 
                  ? 'Toque na última letra para validar a palavra!' 
                  : 'Toque na 1ª letra e depois na última (ou arraste)'}
              </span>
            </div>

            <button
              onClick={handleUseRadar}
              disabled={hintsRemaining <= 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                background: 'rgba(212, 175, 55, 0.12)',
                color: hintsRemaining > 0 ? '#d4af37' : '#71717a',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: hintsRemaining > 0 ? 'pointer' : 'not-allowed',
                opacity: hintsRemaining > 0 ? 1 : 0.6
              }}
            >
              <Radar size={14} />
              <span>Radar Tático ({hintsRemaining})</span>
            </button>
          </div>

          {/* BARRA DE VARREDURA EM TEMPO REAL */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '40px',
              padding: '0.45rem 0.95rem',
              borderRadius: '10px',
              background: currentSelectedString.length > 1 
                ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(14, 165, 233, 0.08))' 
                : 'rgba(255, 255, 255, 0.03)',
              border: currentSelectedString.length > 1 
                ? '1px solid rgba(56, 189, 248, 0.45)' 
                : '1px solid rgba(255, 255, 255, 0.06)',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: currentSelectedString.length > 1 ? '#38bdf8' : '#71717a',
                  boxShadow: currentSelectedString.length > 1 ? '0 0 8px #38bdf8' : 'none'
                }}
              />
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>
                {currentSelectedString.length > 1 ? 'Varrendo Palavra:' : 'Toque/arraste para formar a palavra:'}
              </span>
            </div>
            <span 
              style={{
                fontSize: '1rem',
                fontWeight: 900,
                color: currentSelectedString.length > 1 ? '#38bdf8' : '#64748b',
                letterSpacing: '0.14em',
                fontFamily: 'monospace'
              }}
            >
              {currentSelectedString || '---'}
            </span>
          </div>

          {/* MATRIZ DE LETRAS */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              overflowX: 'auto',
              padding: '0.25rem 0'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateRows: `repeat(${currentBoard.size}, minmax(24px, 40px))`,
                gridTemplateColumns: `repeat(${currentBoard.size}, minmax(24px, 40px))`,
                gap: '3px',
                background: 'rgba(0, 0, 0, 0.65)',
                padding: '10px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: 'inset 0 4px 16px rgba(0, 0, 0, 0.8)'
              }}
            >
              {currentBoard.grid.map((row, r) =>
                row.map((letter, c) => {
                  const key = `${r},${c}`;
                  const isSelected = selectionSet.has(key);
                  const foundEntry = foundCellsMap.get(key);
                  const isRadarHint = radarHintCell?.row === r && radarHintCell?.col === c;

                  let bgColor = 'rgba(22, 27, 38, 0.85)';
                  let borderColor = 'rgba(255, 255, 255, 0.1)';
                  let textColor = '#cbd5e1';
                  let transform = 'none';

                  // Célula pertencente a palavra encontrada
                  if (foundEntry) {
                    const pal = FOUND_PALETTES[foundEntry.colorIdx];
                    bgColor = pal.bg;
                    borderColor = pal.border;
                    textColor = '#ffffff';
                  }

                  // Célula na seleção ativa
                  if (isSelected) {
                    bgColor = 'rgba(56, 189, 248, 0.55)';
                    borderColor = '#38bdf8';
                    textColor = '#ffffff';
                    transform = 'scale(1.05)';
                  }

                  // Dica Radar Tático
                  if (isRadarHint) {
                    bgColor = 'rgba(212, 175, 55, 0.5)';
                    borderColor = '#d4af37';
                    textColor = '#ffffff';
                  }

                  if (shakeError && isSelected) {
                    bgColor = 'rgba(239, 68, 68, 0.55)';
                    borderColor = '#ef4444';
                  }

                  return (
                    <div
                      key={`ws-cell-${r}-${c}`}
                      onClick={() => handleCellClick(r, c)}
                      onPointerDown={() => handlePointerDown(r, c)}
                      onPointerEnter={() => handlePointerEnter(r, c)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: bgColor,
                        border: `1.5px solid ${borderColor}`,
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
                        fontWeight: 900,
                        fontFamily: 'monospace',
                        color: textColor,
                        userSelect: 'none',
                        transition: 'all 0.1s ease',
                        transform: transform,
                        boxShadow: isSelected 
                          ? '0 0 10px rgba(56, 189, 248, 0.6)' 
                          : isRadarHint 
                          ? '0 0 12px rgba(212, 175, 55, 0.8)' 
                          : 'none'
                      }}
                    >
                      {letter}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* LADO DIREITO: TERMOS DA OPERAÇÃO PARA ENCONTRAR */}
        <div 
          className="glass-panel"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.25rem',
            background: 'linear-gradient(145deg, rgba(14, 18, 26, 0.98), rgba(8, 10, 15, 0.98))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#38bdf8' }}>
              🎯 TERMOS DO EDITAL ({currentBoard.words.length})
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Clique no termo para rever o conceito
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {currentBoard.words.map((w, idx) => {
              const isFound = foundWords[w.id] !== undefined;
              const pal = isFound ? FOUND_PALETTES[foundWords[w.id]] : null;

              return (
                <div
                  key={w.id}
                  onClick={() => {
                    if (isFound) {
                      sound.playClick();
                      setActiveConceptModal(w);
                    }
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '10px',
                    border: isFound 
                      ? `1.5px solid ${pal?.border}` 
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isFound 
                      ? pal?.bg 
                      : 'rgba(255, 255, 255, 0.02)',
                    cursor: isFound ? 'pointer' : 'default',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span 
                        style={{
                          fontWeight: 900,
                          fontSize: '0.95rem',
                          letterSpacing: '0.04em',
                          color: isFound ? pal?.text : '#f8fafc',
                          textDecoration: isFound ? 'line-through' : 'none'
                        }}
                      >
                        {w.displayTerm}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                        ({w.term.length} letras)
                      </span>
                    </div>

                    {isFound ? (
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: pal?.text,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}
                      >
                        <Check size={14} /> Encontrado
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.72rem', color: '#71717a', fontWeight: 600 }}>
                        Pendente
                      </span>
                    )}
                  </div>

                  <p style={{ margin: 0, fontSize: '0.8rem', color: isFound ? '#cbd5e1' : '#94a3b8', lineHeight: 1.35 }}>
                    {w.clue}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL EDUCACIONAL: CONCEITO JURÍDICO DESBLOQUEADO */}
      {activeConceptModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
        >
          <div 
            className="glass-panel"
            style={{
              maxWidth: '460px',
              width: '100%',
              padding: '1.75rem',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(20, 26, 38, 0.98), rgba(9, 12, 18, 0.98))',
              border: '2px solid #38bdf8',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActiveConceptModal(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cbd5e1',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <BookOpen size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase' }}>
                  Conceito Desbloqueado 🧠
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                  {activeConceptModal.displayTerm}
                </h3>
              </div>
            </div>

            <div 
              style={{
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.88rem',
                color: '#e2e8f0',
                lineHeight: 1.5
              }}
            >
              {activeConceptModal.explanation}
            </div>

            {/* DESDOBRAMENTO COMPLETO DO MNEMÔNICO (ARTIGO NA ÍNTEGRA) */}
            {activeConceptModal.mnemonicItems && activeConceptModal.mnemonicItems.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#facc15', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    💡 Desdobramento do Mnemônico (Artigo Completo):
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {activeConceptModal.mnemonicItems.map((item, i) => (
                    <div 
                      key={i} 
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        padding: '0.55rem 0.8rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <span 
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 900,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(184, 134, 11, 0.15))',
                          color: '#facc15',
                          border: '1px solid rgba(212, 175, 55, 0.5)',
                          flexShrink: 0
                        }}
                      >
                        {item.code}
                      </span>
                      <span style={{ fontSize: '0.84rem', color: '#f1f5f9', fontWeight: 600, lineHeight: 1.35, paddingTop: '1px' }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ALERTA DE PEGADINHA DA BANCA AOCP / PMPE */}
            {activeConceptModal.bancaPegadinha && (
              <div 
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1.5px solid rgba(239, 68, 68, 0.45)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f87171', fontWeight: 900, fontSize: '0.78rem' }}>
                  <AlertTriangle size={15} />
                  <span>ALERTA DE PROVA DA BANCA (PMPE / AOCP)</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#fecaca', lineHeight: 1.4 }}>
                  {activeConceptModal.bancaPegadinha}
                </p>
              </div>
            )}

            <button
              onClick={() => setActiveConceptModal(null)}
              style={{
                padding: '0.75rem',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                marginTop: '0.25rem'
              }}
            >
              Continuar a Missão
            </button>
          </div>
        </div>
      )}

      {/* MODAL DE VITÓRIA TÁTICA */}
      {showVictoryModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
        >
          <div 
            className="glass-panel"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '2rem',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(20, 26, 38, 0.98), rgba(9, 12, 18, 0.98))',
              border: '2px solid #34d399',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(52, 211, 153, 0.3)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div 
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(52, 211, 153, 0.15)',
                border: '2px solid #34d399',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                boxShadow: '0 0 20px rgba(52, 211, 153, 0.4)'
              }}
            >
              <Trophy size={36} color="#34d399" />
            </div>

            <div>
              <span 
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 900,
                  color: '#34d399',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Varredura Concluída com Sucesso! 🎖️
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0' }}>
                Todos os Termos Foram Identificados!
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
                Excelente visão tática no <strong style={{ color: '#ffffff' }}>{currentBoard.title}</strong>.
              </p>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 700 }}>RECOMPENSA</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#d4af37' }}>+{currentBoard.xpReward} XP</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 700 }}>TEMPO</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#38bdf8' }}>{formatTimer(timerSeconds)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  sound.playClick();
                  setShowVictoryModal(false);
                  onExit();
                }}
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#cbd5e1',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Voltar ao Menu
              </button>

              {boardIndex < WORD_SEARCH_BOARDS.length - 1 ? (
                <button
                  onClick={() => {
                    sound.playClick();
                    setBoardIndex((prev) => prev + 1);
                  }}
                  style={{
                    flex: 1.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <span>Próxima Missão</span>
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    sound.playClick();
                    setBoardIndex(0);
                  }}
                  style={{
                    flex: 1.2,
                    padding: '0.8rem',
                    borderRadius: '10px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #d4af37, #b8860b)',
                    color: '#000000',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  Reiniciar Missão 1
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
