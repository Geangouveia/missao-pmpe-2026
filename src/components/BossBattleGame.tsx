import React, { useState } from 'react';
import type { QuizQuestion, BossEnemy } from '../types/game';
import { Swords, Shield, Zap, Heart, Sparkles, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { prepareGameQuestions } from '../utils/questionRandomizer';

interface BossBattleGameProps {
  questions: QuizQuestion[];
  boss: BossEnemy;
  onFinish: (result: {
    won: boolean;
    xpEarned: number;
    score: number;
    bossDefeatedName?: string;
  }) => void;
  onExit: () => void;
  onAwardXp?: (amount: number) => void;
  onQuestionAnswered?: (isCorrect: boolean, xpGained: number) => void;
}

export const BossBattleGame: React.FC<BossBattleGameProps> = ({
  questions,
  boss,
  onFinish,
  onExit,
  onAwardXp,
  onQuestionAnswered
}) => {
  const [shuffledQuestions] = useState<QuizQuestion[]>(() => {
    return prepareGameQuestions(questions);
  });

  const [bossHp, setBossHp] = useState(boss.maxHp);
  const [playerHp, setPlayerHp] = useState(100);
  const [playerMana, setPlayerMana] = useState(60);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [battleLog, setBattleLog] = useState<string[]>(['A batalha começou! Mostre o poder do seu estudo.']);
  const [isBossHurt, setIsBossHurt] = useState(false);
  const [isPlayerHurt, setIsPlayerHurt] = useState(false);

  const currentQ = shuffledQuestions[currentQIndex % shuffledQuestions.length] || questions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;

    if (isCorrect) {
      // Jogador acerta: causa dano no boss e ganha XP imediato
      const damage = Math.floor(Math.random() * 15) + 35;
      const nextBossHp = Math.max(0, bossHp - damage);

      onAwardXp?.(30);
      onQuestionAnswered?.(true, 30);

      sound.playGunshot38();
      sound.playBossHit();
      setIsBossHurt(true);
      setTimeout(() => setIsBossHurt(false), 400);

      setBossHp(nextBossHp);
      setPlayerMana((prev) => Math.min(100, prev + 25));
      setBattleLog((prev) => [
        `💥 Disparo Tático Certeiro! Você atingiu a Banca causando ${damage} de dano!`,
        ...prev.slice(0, 3)
      ]);

      if (nextBossHp <= 0) {
        // Vitória contra o Boss!
        setTimeout(() => {
          sound.playMilitaryAchievement();
          confetti({
            particleCount: 120,
            spread: 100,
            origin: { y: 0.5 }
          });
          onFinish({
            won: true,
            xpEarned: 250,
            score: 1000,
            bossDefeatedName: boss.name
          });
        }, 800);
      }
    } else {
      // Jogador erra: Boss ataca
      onQuestionAnswered?.(false, 0);
      const damage = boss.attackPower;
      const nextPlayerHp = Math.max(0, playerHp - damage);

      sound.playError();
      setIsPlayerHurt(true);
      setTimeout(() => setIsPlayerHurt(false), 400);

      setPlayerHp(nextPlayerHp);
      setBattleLog((prev) => [
        `💥 Resposta incorreta! ${boss.name} usou Distração e causou ${damage} de dano!`,
        ...prev.slice(0, 3)
      ]);

      if (nextPlayerHp <= 0) {
        // Derrota do jogador
        setTimeout(() => {
          onFinish({
            won: false,
            xpEarned: 40,
            score: 150
          });
        }, 800);
      }
    }
  };

  // Magia Especial de Cura
  const handleHealSpell = () => {
    if (playerMana < 40 || playerHp >= 100 || isAnswered) return;
    sound.playSuccess();
    setPlayerMana((prev) => prev - 40);
    setPlayerHp((prev) => Math.min(100, prev + 35));
    setBattleLog((prev) => [
      '🛡️ Você usou "Revisão Revigorante" e recuperou 35 de Vida!',
      ...prev.slice(0, 3)
    ]);
  };

  const handleNextTurn = () => {
    sound.playClick();
    setCurrentQIndex((prev) => prev + 1);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '920px', margin: '0 auto', padding: '1.75rem' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <button
          onClick={() => {
            sound.playClick();
            onExit();
          }}
          className="quiz-exit-btn"
          title="Fugir da Arena e voltar ao menu"
        >
          <ArrowLeft size={16} />
          <span>Fugir da Arena</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontWeight: 800 }}>
          <Swords size={20} />
          <span>ARENA DO GUARDIÃO</span>
        </div>
      </div>

      {/* Cartão do Boss */}
      <div className={`boss-character-card ${isBossHurt ? 'wrong-match' : ''}`}>
        <div className="boss-avatar-display">
          {boss.avatar}
        </div>

        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#fca5a5' }}>{boss.name}</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{boss.title}</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', margin: '0.2rem 0 0.5rem' }}>
            {boss.description}
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700 }}>
            <span style={{ color: '#f87171' }}>HP DO CHEFÃO</span>
            <span style={{ color: 'white' }}>{bossHp} / {boss.maxHp}</span>
          </div>
          <div className="hp-bar-outer">
            <div className="hp-bar-inner" style={{ width: `${(bossHp / boss.maxHp) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Status do Jogador */}
      <div className="player-combat-stats" style={{ margin: '1.5rem 0 1rem' }}>
        <div style={{ padding: '0.9rem 1.2rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', fontWeight: 700 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#34d399' }}>
              <Heart size={16} fill="#34d399" /> SUA VIDA
            </span>
            <span>{playerHp} / 100</span>
          </div>
          <div className="hp-bar-outer">
            <div className="hp-bar-inner" style={{ width: `${playerHp}%`, background: 'linear-gradient(90deg, #10b981, #06b6d4)' }} />
          </div>
        </div>

        <div style={{ padding: '0.9rem 1.2rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', fontWeight: 700 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--neon-purple)' }}>
              <Zap size={16} fill="var(--neon-purple)" /> MANA DE FOCO
            </span>
            <span>{playerMana} / 100</span>
          </div>
          <div className="hp-bar-outer">
            <div className="hp-bar-inner" style={{ width: `${playerMana}%`, background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }} />
          </div>
        </div>
      </div>

      {/* Battle Log */}
      <div style={{ padding: '0.6rem 1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem', borderLeft: '3px solid var(--neon-cyan)' }}>
        {battleLog[0]}
      </div>

      {/* Questão de Ataque */}
      {bossHp > 0 && playerHp > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', lineHeight: 1.45 }}>
            {currentQ.question}
          </div>

          <div className="quiz-options-list">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let optionClass = 'quiz-option-btn';
              if (isAnswered) {
                if (isCorrect) optionClass += ' selected-correct';
                else if (isSelected) optionClass += ' selected-wrong';
              }

              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                >
                  <div style={{ flex: 1 }}>{opt}</div>
                  {isAnswered && isCorrect && <CheckCircle2 size={20} color="var(--neon-emerald)" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle size={20} color="var(--neon-red)" />}
                </button>
              );
            })}
          </div>

          {/* Habilidades e Próximo Turno */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              className="btn-secondary"
              onClick={handleHealSpell}
              disabled={playerMana < 40 || playerHp >= 100 || isAnswered}
              style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
            >
              <Shield size={16} color="#34d399" />
              <span>Cura (40 Mana)</span>
            </button>

            {isAnswered && (
              <button className="btn-primary" onClick={handleNextTurn}>
                <span>Próximo Round</span>
                <Swords size={18} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
