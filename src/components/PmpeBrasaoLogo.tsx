import React from 'react';

interface PmpeBrasaoLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const PmpeBrasaoLogo: React.FC<PmpeBrasaoLogoProps> = ({ 
  size = 90, 
  showText = true, 
  className = '' 
}) => {
  // O brasão oficial com fundo transparente gerado e otimizado
  const brasaoUrl = `${import.meta.env.BASE_URL}brasao-pmpe.png`;

  return (
    <div 
      className={`pmpe-logo-container ${className}`} 
      style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        userSelect: 'none',
        pointerEvents: 'none'
      }}
    >
      <img
        src={brasaoUrl}
        alt="Brasão Oficial da Polícia Militar de Pernambuco"
        width={size}
        style={{
          width: `${size}px`,
          height: 'auto',
          maxHeight: `${Math.round(size * 1.05)}px`,
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 14px rgba(250, 204, 21, 0.45)) drop-shadow(0 8px 18px rgba(0, 0, 0, 0.85))',
          display: 'block',
          transition: 'transform 0.25s ease'
        }}
        onError={(e) => {
          // Fallback se necessário
          const target = e.currentTarget;
          if (!target.src.endsWith('brasao-pmpe-original.png')) {
            target.src = `${import.meta.env.BASE_URL}brasao-pmpe-original.png`;
          }
        }}
      />

      {showText && (
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <div style={{
            fontSize: '1.15rem',
            fontWeight: 900,
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #facc15 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            lineHeight: 1.15
          }}>
            Polícia Militar de Pernambuco
          </div>
          <div style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#fbbf24',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginTop: '0.2rem'
          }}>
            MISSÃO SOLDADO 2026 • CFSD
          </div>
        </div>
      )}
    </div>
  );
};
