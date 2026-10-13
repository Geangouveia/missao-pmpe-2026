import React, { useState } from 'react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface StreakFlameProps {
  days: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const StreakFlame: React.FC<StreakFlameProps> = ({
  days,
  size = 'md',
  showLabel = true
}) => {
  const [isSparking, setIsSparking] = useState(false);

  const handleClick = () => {
    sound.playCombo(3);
    setIsSparking(true);
    setTimeout(() => setIsSparking(false), 800);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.15 },
      colors: ['#f97316', '#ef4444', '#facc15', '#fef08a']
    });
  };

  const iconSizes = {
    sm: { width: 20, height: 24, fontSize: '0.8rem', padding: '0.35rem 0.65rem' },
    md: { width: 24, height: 28, fontSize: '0.88rem', padding: '0.45rem 0.85rem' },
    lg: { width: 36, height: 42, fontSize: '1.05rem', padding: '0.65rem 1.1rem' }
  };

  const dim = iconSizes[size];

  return (
    <div
      onClick={handleClick}
      className="streak-flame-pill"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.55rem',
        padding: dim.padding,
        borderRadius: '30px',
        background: 'linear-gradient(135deg, rgba(30, 15, 5, 0.85) 0%, rgba(20, 10, 5, 0.95) 100%)',
        border: '1.5px solid rgba(249, 115, 22, 0.65)',
        boxShadow: '0 0 16px rgba(249, 115, 22, 0.35), inset 0 0 10px rgba(234, 88, 12, 0.2)',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isSparking ? 'scale(1.08)' : 'scale(1)'
      }}
      title="🔥 Chama da Disciplina Diária • Clique para avivar o fogo sagrado!"
    >
      {/* Container da Chama Viva Animada */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Aura de calor pulsante */}
        <div className="flame-heat-aura" />

        {/* Faíscas ascendentes */}
        <span className="spark-particle s1" />
        <span className="spark-particle s2" />
        <span className="spark-particle s3" />

        {/* SVG da Chama Viva Multicamadas */}
        <svg
          width={dim.width}
          height={dim.height}
          viewBox="0 0 24 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="living-flame-svg"
        >
          <defs>
            {/* Gradiente da Chama Externa (Fogo Vivo Laranja-Rubro) */}
            <linearGradient id="flameOuterGrad" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="40%" stopColor="#ea580c" />
              <stop offset="75%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>

            {/* Gradiente da Chama do Meio (Dourado Intenso) */}
            <linearGradient id="flameMidGrad" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>

            {/* Gradiente do Núcleo da Chama (Branco Plasma Incandescente) */}
            <linearGradient id="flameCoreGrad" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Camada 1: Chama Externa Maior */}
          <path
            d="M 12 1 
               C 13 4, 17 8, 18 12 
               C 19 16, 17.5 19, 19.5 21 
               C 21 22.5, 22 23, 22 24.5 
               C 22 28, 17.5 30, 12 30 
               C 6.5 30, 2 28, 2 24.5 
               C 2 22, 4 19.5, 4.5 17 
               C 5 14, 4 11, 8 7 
               C 8 10, 10 11.5, 11 10 
               C 11 7, 10 4, 12 1 Z"
            fill="url(#flameOuterGrad)"
            className="flame-layer-outer"
          />

          {/* Camada 2: Chama Intermediária Dinâmica */}
          <path
            d="M 12 8 
               C 13.5 11, 16 13, 16.5 16 
               C 17 19, 15.5 21, 16 23 
               C 16 26, 14 27.5, 12 27.5 
               C 9.5 27.5, 7.5 26, 7.5 23 
               C 7.5 20.5, 9.5 18, 9.5 15.5 
               C 9.5 13.5, 8.5 12, 12 8 Z"
            fill="url(#flameMidGrad)"
            className="flame-layer-mid"
          />

          {/* Camada 3: Núcleo Incandescente (Hot Plasma) */}
          <path
            d="M 12 15 
               C 13 17, 14.5 18.5, 14.5 21 
               C 14.5 23.5, 13.5 24.5, 12 24.5 
               C 10.5 24.5, 9.5 23.5, 9.5 21 
               C 9.5 18.5, 11 17, 12 15 Z"
            fill="url(#flameCoreGrad)"
            className="flame-layer-core"
          />
        </svg>
      </div>

      {/* Rótulo da Sequência / Streak */}
      {showLabel && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <div style={{
            fontSize: dim.fontSize,
            fontWeight: 900,
            background: 'linear-gradient(90deg, #fdba74 0%, #fef08a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <span>{days}</span>
            <span>{days === 1 ? 'Dia Ativo' : 'Dias Ativos'}</span>
          </div>
          <span style={{
            fontSize: '0.62rem',
            color: '#f97316',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            Fogo Sagrado
          </span>
        </div>
      )}
    </div>
  );
};
