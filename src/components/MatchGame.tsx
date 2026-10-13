import React, { useState, useEffect } from 'react';
import type { MatchPair } from '../types/game';
import { Timer, Check, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface MatchGameProps {
  pairs: MatchPair[];
  onFinish: (result: {
    score: number;
    xpEarned: number;
    timeTaken: number;
    mistakes: number;
  }) => void;
  onExit: () => void;
}

export const MatchGame: React.FC<MatchGameProps> = ({ pairs, onFinish, onExit }) => {
  // Pegamos até 5 ou 6 pares para uma rodada emocionante
  const activePairs = React.useMemo(() => {
    return [...pairs].sort(() => 0.5 - Math.random()).slice(0, Math.min(5, pairs.length));
  }, [pairs]);

  const [shuffledTerms, setShuffledTerms] = useState<{ id: string; text: string }[]>([]);
  const [shuffledDefs, setShuffledDefs] = useState<{ id: string; text: string }[]>([]);
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [selectedDefId, setSelectedDefId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState<{ termId: string; defId: string } | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Inicializa os lados embaralhados
  useEffect(() => {
    const terms = activePairs.map((p) => ({ id: p.id, text: p.term }));
    const defs = activePairs.map((p) => ({ id: p.id, text: p.definition }));

    setShuffledTerms([...terms].sort(() => 0.5 - Math.random()));
    setShuffledDefs([...defs].sort(() => 0.5 - Math.random()));
    setMatchedIds([]);
    setSeconds(0);
  }, [activePairs]);

  // Cronômetro progressivo
  useEffect(() => {
    if (matchedIds.length === activePairs.length && activePairs.length > 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [matchedIds.length, activePairs.length]);

  // Checa conexão quando ambos são selecionados
  useEffect(() => {
    if (selectedTermId && selectedDefId) {
      if (selectedTermId === selectedDefId) {
        // Acerto!
        sound.playSuccess();
        setMatchedIds((prev) => [...prev, selectedTermId]);
        setSelectedTermId(null);
        setSelectedDefId(null);

        // Se completou todos
        if (matchedIds.length + 1 === activePairs.length) {
          confetti({
            particleCount: 60,
            spread: 80,
            origin: { y: 0.6 }
          });
          setTimeout(() => {
            const baseScore = 500;
            const timePenalty = Math.min(300, seconds * 5);
            const mistakePenalty = mistakes * 30;
            const finalScore = Math.max(100, baseScore - timePenalty - mistakePenalty);
            const xpEarned = Math.floor(finalScore / 4) + 60;

            onFinish({
              score: finalScore,
              xpEarned,
              timeTaken: seconds,
              mistakes
            });
          }, 800);
        }
      } else {
        // Erro
        sound.playError();
        setMistakes((prev) => prev + 1);
        setWrongMatch({ termId: selectedTermId, defId: selectedDefId });

        setTimeout(() => {
          setWrongMatch(null);
          setSelectedTermId(null);
          setSelectedDefId(null);
        }, 500);
      }
    }
  }, [selectedTermId, selectedDefId, activePairs.length, matchedIds.length, seconds, mistakes, onFinish]);

  const handleSelectTerm = (id: string) => {
    if (matchedIds.includes(id) || wrongMatch) return;
    sound.playClick();
    setSelectedTermId(selectedTermId === id ? null : id);
  };

  const handleSelectDef = (id: string) => {
    if (matchedIds.includes(id) || wrongMatch) return;
    sound.playClick();
    setSelectedDefId(selectedDefId === id ? null : id);
  };

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '1.75rem' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button
          onClick={() => {
            sound.playClick();
            onExit();
          }}
          className="btn-secondary"
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', borderRadius: '10px' }}
        >
          ← Sair
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
            <Timer size={18} />
            <span>{seconds}s</span>
          </div>

          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Conectados:{' '}
            <strong style={{ color: 'var(--neon-emerald)' }}>
              {matchedIds.length} / {activePairs.length}
            </strong>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.35rem' }}>
          Conecte os Conceitos às suas Definições
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Clique em um termo à esquerda e encontre sua definição correta à direita.
        </p>
      </div>

      {/* Grid de 2 Colunas */}
      <div className="match-grid">
        {/* Coluna 1: Termos */}
        <div className="match-column">
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            CONCEITO / TERMO
          </div>
          {shuffledTerms.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedTermId === item.id;
            const isWrong = wrongMatch?.termId === item.id;

            return (
              <button
                key={item.id}
                className={`match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${isWrong ? 'wrong-match' : ''}`}
                onClick={() => handleSelectTerm(item.id)}
                disabled={isMatched}
              >
                <span style={{ fontWeight: 700 }}>{item.text}</span>
                {isMatched && <Check size={18} color="var(--neon-emerald)" />}
              </button>
            );
          })}
        </div>

        {/* Coluna 2: Definições */}
        <div className="match-column">
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--neon-purple)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            DEFINIÇÃO CORRESPONDENTE
          </div>
          {shuffledDefs.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedDefId === item.id;
            const isWrong = wrongMatch?.defId === item.id;

            return (
              <button
                key={item.id}
                className={`match-card-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${isWrong ? 'wrong-match' : ''}`}
                onClick={() => handleSelectDef(item.id)}
                disabled={isMatched}
              >
                <span>{item.text}</span>
                {isMatched && <Check size={18} color="var(--neon-emerald)" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
