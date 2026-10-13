import React, { useState, useEffect, useCallback } from 'react';
import type { Flashcard } from '../types/game';
import { RotateCw, Check, ArrowRight, ArrowLeft, Sparkles, Brain, Award } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface FlashcardGameProps {
  cards: Flashcard[];
  onFinish: (result: {
    cardsMastered: number;
    totalCards: number;
    xpEarned: number;
  }) => void;
  onExit: () => void;
}

export const FlashcardGame: React.FC<FlashcardGameProps> = ({ cards, onFinish, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);
  const [cardHistory, setCardHistory] = useState<Record<string, 'easy' | 'medium' | 'hard'>>({});

  const currentCard = cards[currentIndex] || cards[0];

  const handleFlip = useCallback(() => {
    sound.playFlip();
    setIsFlipped((prev) => !prev);
  }, []);

  const handleRate = useCallback((difficulty: 'hard' | 'medium' | 'easy') => {
    sound.playClick();
    setCardHistory((prev) => ({ ...prev, [currentCard.id]: difficulty }));

    if (difficulty === 'easy') {
      setMasteredCount((prev) => prev + 1);
    }

    // Avançar
    if (currentIndex + 1 < cards.length) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Fim do deck
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 }
      });
      const mastered = difficulty === 'easy' ? masteredCount + 1 : masteredCount;
      const xpEarned = mastered * 20 + cards.length * 10;
      onFinish({
        cardsMastered: mastered,
        totalCards: cards.length,
        xpEarned
      });
    }
  }, [cards.length, currentCard.id, currentIndex, masteredCount, onFinish]);

  // Suporte a atalhos de teclado (Espaço para virar, 1/2/3 para avaliar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (isFlipped) {
        if (e.key === '1' || e.code === 'ArrowLeft') handleRate('hard');
        if (e.key === '2' || e.code === 'ArrowUp') handleRate('medium');
        if (e.key === '3' || e.code === 'ArrowRight') handleRate('easy');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleRate, isFlipped]);

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '1.75rem' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
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

        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Card <strong style={{ color: 'white' }}>{currentIndex + 1}</strong> de {cards.length}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px solid var(--border-cyan)',
            color: 'var(--neon-cyan)'
          }}
        >
          {currentCard.categoryName}
        </span>
      </div>

      {/* Cena 3D do Flashcard */}
      <div className="flashcards-scene" onClick={handleFlip}>
        <div className={`flashcard-object ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Frente do Card */}
          <div className="flashcard-face">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700 }}>
                FRENTE • CONCEITO
              </span>
              <RotateCw size={18} color="var(--text-dim)" />
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1.4 }}>
                {currentCard.front}
              </p>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Pressione <kbd style={{ padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white' }}>Espaço</kbd> ou clique para virar
            </div>
          </div>

          {/* Verso do Card */}
          <div className="flashcard-face flashcard-back">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
                VERSO • DEFINIÇÃO & RESPOSTA
              </span>
              <Sparkles size={18} color="var(--neon-cyan)" />
            </div>

            <div style={{ padding: '1.5rem 0' }}>
              <p style={{ fontSize: '1.2rem', color: '#e0f2fe', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {currentCard.back}
              </p>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Como você avalia sua memorização deste card?
            </div>
          </div>
        </div>
      </div>

      {/* Controles de Avaliação (aparecem ao virar) */}
      <div className="flashcard-controls">
        {!isFlipped ? (
          <button className="btn-primary" onClick={handleFlip}>
            <RotateCw size={18} />
            <span>Virar Cartão</span>
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => handleRate('hard')}
              className="btn-secondary"
              style={{
                borderColor: 'rgba(239, 68, 68, 0.4)',
                color: '#fca5a5',
                background: 'rgba(239, 68, 68, 0.1)'
              }}
            >
              <span>Difícil (1)</span>
            </button>

            <button
              onClick={() => handleRate('medium')}
              className="btn-secondary"
              style={{
                borderColor: 'rgba(245, 158, 11, 0.4)',
                color: '#fde68a',
                background: 'rgba(245, 158, 11, 0.1)'
              }}
            >
              <span>Médio (2)</span>
            </button>

            <button
              onClick={() => handleRate('easy')}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)'
              }}
            >
              <Check size={18} />
              <span>Dominado! (3)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
