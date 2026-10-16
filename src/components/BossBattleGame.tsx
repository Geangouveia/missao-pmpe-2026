import React, { useState } from 'react';
import type { QuizQuestion, BossEnemy } from '../types/game';
import { Swords, Shield, Zap, Heart, Sparkles, CheckCircle2, XCircle, ArrowLeft, Trophy, Award, Volume2, Crosshair, Flame } from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { prepareGameQuestions } from '../utils/questionRandomizer';
import { filterOutAnsweredToday, markQuestionAnsweredToday } from '../utils/dailyQuestionTracker';

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
    const unrep = filterOutAnsweredToday(questions);
    return prepareGameQuestions(unrep.length > 0 ? unrep : questions);
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
  const [showVictoryModal, setShowVictoryModal] = useState<boolean>(false);

  const currentQ = shuffledQuestions[currentQIndex % shuffledQuestions.length] || questions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (currentQ?.id) {
      markQuestionAnsweredToday(undefined, currentQ.id);
    }

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
        // Vitória contra o Boss! Aciona comemoração militar com rajada e modal comemorativo
        setTimeout(() => {
          sound.playHeavyAk47Burst();
          confetti({
            particleCount: 160,
            spread: 110,
            origin: { y: 0.5 }
          });
          setTimeout(() => {
            sound.playMilitaryAchievement();
            confetti({
              particleCount: 90,
              spread: 70,
              origin: { y: 0.3 }
            });
          }, 650);
          setShowVictoryModal(true);
        }, 450);
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

          {/* Explicação e Passo a Passo da Questão */}
          {isAnswered && (
            <div style={{ padding: '1rem', background: 'rgba(15, 23, 42, 0.75)', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.3)', fontSize: '0.88rem' }}>
              <div style={{ color: selectedOption === currentQ.correctIndex ? '#34d399' : '#f87171', fontWeight: 800, marginBottom: '0.4rem' }}>
                {selectedOption === currentQ.correctIndex ? '🎯 Golpe Certeiro!' : '⚠️ Você sofreu dano!'} Gabarito Oficial: Alternativa {['A','B','C','D','E'][currentQ.correctIndex]}
              </div>
              <div style={{ color: '#e2e8f0', lineHeight: 1.5 }}>{currentQ.explanation}</div>
              {currentQ.passoAPassoConta && currentQ.passoAPassoConta.length > 0 && (
                <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.3rem' }}>📐 Passo a Passo Matemático:</div>
                  {currentQ.passoAPassoConta.map((step, sIdx) => (
                    <div key={sIdx} style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.2rem', paddingLeft: '0.5rem', borderLeft: '2px solid #fbbf24' }}>{step}</div>
                  ))}
                </div>
              )}
            </div>
          )}

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

      {/* MODAL COMEMORATIVO DE VITÓRIA CONTRA O CHEFÃO DA BANCA */}
      {showVictoryModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.25rem'
          }}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '680px',
              width: '100%',
              borderRadius: '24px',
              border: '2px solid rgba(34, 197, 94, 0.6)',
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(5, 10, 20, 0.98))',
              padding: '2.25rem',
              textAlign: 'center',
              boxShadow: '0 0 60px rgba(34, 197, 94, 0.35)',
              position: 'relative',
              maxHeight: '92vh',
              overflowY: 'auto'
            }}
          >
            {/* Ícone de Troféu Militar com Pulso */}
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.2)',
                border: '3px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)'
              }}
            >
              <Trophy size={44} color="#4ade80" />
            </div>

            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#4ade80',
                letterSpacing: '0.12em',
                marginBottom: '0.35rem'
              }}
            >
              💥 VITÓRIA MILITAR SUPREMA • OPERAÇÃO CFSD
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#f8fafc', marginBottom: '0.4rem' }}>
              CHEFÃO DA BANCA NEUTRALIZADO!
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.5', maxWidth: '520px', margin: '0 auto 1.25rem auto' }}>
              Você derrotou com precisão cirúrgica o temido <strong style={{ color: '#fca5a5' }}>{boss.name}</strong> ({boss.title})! As pegadinhas da banca examinadora foram aniquiladas pela sua disciplina militar.
            </p>

            {/* Painel de Recompensas */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#22c55e' }}>Vencido ⚔️</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Recompensa XP</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#facc15' }}>+250 XP ⚡</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pontuação Tática</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38bdf8' }}>1.000 pts 🎖️</div>
              </div>
            </div>

            {/* Soundboard de Comemoração Militar de Tiros (Conforme solicitado pelo Comandante!) */}
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.65)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '16px',
                padding: '1.15rem',
                marginBottom: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#38bdf8', fontWeight: 800, fontSize: '0.9rem' }}>
                <Volume2 size={18} />
                <span>MESA DE DISPAROS DE HONRA (COMEMORE COM TIROS):</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0 0 0.85rem 0' }}>
                Clique nos botões abaixo para disparar a salva cerimonial de honra de sua preferência:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.6rem' }}>
                <button
                  onClick={() => {
                    sound.playHeavyAk47Burst();
                    confetti({ particleCount: 45, spread: 60, origin: { y: 0.6 } });
                  }}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.82rem',
                    padding: '0.6rem 0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#fca5a5'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>💥</span>
                  <span style={{ fontWeight: 800 }}>Rajada AK-47</span>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>Fuzil 7.62mm</span>
                </button>

                <button
                  onClick={() => sound.playDoubleTap()}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.82rem',
                    padding: '0.6rem 0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'rgba(234, 179, 8, 0.15)',
                    border: '1px solid rgba(234, 179, 8, 0.4)',
                    color: '#fde047'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🔫</span>
                  <span style={{ fontWeight: 800 }}>Tiro Duplo .38</span>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>Double Tap</span>
                </button>

                <button
                  onClick={() => sound.playSniperShot()}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.82rem',
                    padding: '0.6rem 0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    color: '#7dd3fc'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🎯</span>
                  <span style={{ fontWeight: 800 }}>Sniper Militar</span>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>Longo Alcance</span>
                </button>

                <button
                  onClick={() => sound.playShotgunBlast()}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.82rem',
                    padding: '0.6rem 0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    color: '#d8b4fe'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>💥</span>
                  <span style={{ fontWeight: 800 }}>Calibre 12</span>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>Dispersão Pesada</span>
                </button>

                <button
                  onClick={() => {
                    sound.playMilitaryAchievement();
                    confetti({ particleCount: 60, spread: 80, origin: { y: 0.5 } });
                  }}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.82rem',
                    padding: '0.6rem 0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    color: '#86efac'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🎺</span>
                  <span style={{ fontWeight: 800 }}>Clarim & Salva</span>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>Honra Militar</span>
                </button>
              </div>
            </div>

            {/* Ação Final: Resgatar Recompensas */}
            <button
              onClick={() => {
                sound.playClick();
                onFinish({
                  won: true,
                  xpEarned: 250,
                  score: 1000,
                  bossDefeatedName: boss.name
                });
              }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                color: '#ffffff',
                border: 'none',
                padding: '1.1rem 1.75rem',
                borderRadius: '16px',
                fontSize: '1.05rem',
                fontWeight: 900,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: '0 4px 20px rgba(22, 163, 74, 0.45)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Award size={22} />
              <span>Resgatar Recompensas & Finalizar Operação</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
