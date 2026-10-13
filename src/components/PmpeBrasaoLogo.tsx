import React from 'react';

interface PmpeBrasaoLogoProps {
  size?: number;
  showText?: boolean;
}

export const PmpeBrasaoLogo: React.FC<PmpeBrasaoLogoProps> = ({ size = 120, showText = true }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 0 16px rgba(251, 191, 36, 0.45)) drop-shadow(0 8px 24px rgba(0, 0, 0, 0.7))',
          transition: 'transform 0.3s ease',
        }}
      >
        <defs>
          {/* Gradientes Nobres Militares */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          <linearGradient id="blueSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#034b8c" />
          </linearGradient>

          <linearGradient id="greenPasture" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="25%" stopColor="#1e3a8a" />
            <stop offset="75%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Ramos de Louro e Cana-de-Açúcar Circundantes */}
        <g opacity="0.95">
          {/* Ramos da Esquerda */}
          <path d="M 45 130 C 25 100 30 65 52 40 C 48 55 52 75 60 90 C 50 105 45 120 45 130 Z" fill="#15803d" />
          <path d="M 38 115 C 22 95 28 70 42 55" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          {/* Ramos da Direita */}
          <path d="M 155 130 C 175 100 170 65 148 40 C 152 55 148 75 140 90 C 150 105 155 120 155 130 Z" fill="#15803d" />
          <path d="M 162 115 C 178 95 172 70 158 55" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 2. Pistolas/Garruchas Cruzadas da PM (Símbolo das Polícias Militares) */}
        <g stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.9">
          {/* Garrucha 1 */}
          <line x1="45" y1="155" x2="155" y2="45" />
          <circle cx="48" cy="152" r="4" fill="#f59e0b" />
          {/* Garrucha 2 */}
          <line x1="155" y1="155" x2="45" y2="45" />
          <circle cx="152" cy="152" r="4" fill="#f59e0b" />
        </g>

        {/* 3. Escudo Português da PMPE */}
        {/* Moldura Externa Dourada */}
        <path
          d="M 50 40 
             L 150 40 
             L 150 115 
             C 150 155 100 175 100 175 
             C 100 175 50 155 50 115 
             Z"
          fill="url(#shieldBorder)"
          stroke="#fef08a"
          strokeWidth="2.5"
        />

        {/* Fundo Interno do Escudo (Bipartido: Superior Azul Celeste / Inferior Branco e Verde) */}
        <path
          d="M 56 46 
             L 144 46 
             L 144 112 
             C 144 148 100 166 100 166 
             C 100 166 56 148 56 112 
             Z"
          fill="#0c1d3f"
        />

        {/* Parte Superior: Céu Azul de Pernambuco */}
        <path
          d="M 56 46 
             L 144 46 
             L 144 100 
             L 56 100 
             Z"
          fill="url(#blueSky)"
        />

        {/* Arco-Íris de Pernambuco (Cores da Bandeira: Vermelho, Amarelo, Verde) */}
        <path d="M 68 88 C 68 62 132 62 132 88" stroke="#dc2626" strokeWidth="4.5" fill="none" />
        <path d="M 72 88 C 72 67 128 67 128 88" stroke="#facc15" strokeWidth="4" fill="none" />
        <path d="M 76 88 C 76 72 124 72 124 88" stroke="#16a34a" strokeWidth="3.5" fill="none" />

        {/* Sol Radiante Dourado e Estrela de Pernambuco */}
        <circle cx="100" cy="88" r="11" fill="url(#sunGrad)" />
        {/* Raios do Sol */}
        <path d="M 100 73 L 100 70 M 89 77 L 87 75 M 111 77 L 113 75 M 85 88 L 82 88 M 115 88 L 118 88" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
        {/* Estrela de Pernambuco acima do arco-íris */}
        <polygon points="100,53 102.5,59 109,59 104,63 106,69 100,65 94,69 96,63 91,59 97.5,59" fill="#fde047" />

        {/* Parte Inferior: Campo com Leão do Norte e Cruz */}
        <path
          d="M 56 100 
             L 144 100 
             L 144 112 
             C 144 148 100 166 100 166 
             C 100 166 56 148 56 112 
             Z"
          fill="url(#greenPasture)"
        />

        {/* Cruz Vermelha de Pernambuco */}
        <rect x="74" y="112" width="5" height="22" fill="#ef4444" rx="1" />
        <rect x="66" y="118" width="21" height="5" fill="#ef4444" rx="1" />

        {/* Leão do Norte Dourado Passante (Símbolo de Bravura de Pernambuco) */}
        <g transform="translate(102, 114) scale(0.38)">
          <path
            d="M 10 35 C 10 20 25 15 35 15 C 45 15 55 25 55 35 C 55 45 45 50 40 55 L 45 75 L 35 75 L 32 60 L 22 60 L 20 75 L 10 75 L 15 50 C 10 45 10 40 10 35 Z"
            fill="url(#goldGrad)"
          />
          {/* Cauda levantada do Leão */}
          <path d="M 12 40 C 0 35 -5 15 8 10 C 15 8 18 18 10 22" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Coroa Real do Leão */}
          <polygon points="35,8 40,14 45,8 50,14 55,8 53,16 37,16" fill="#fef08a" />
        </g>

        {/* 4. Estrela Radiante de 5 Pontas no Topo (Distintivo Militar da PMPE) */}
        <g filter="url(#glow)">
          <polygon
            points="100,10 106,27 124,27 110,38 115,55 100,44 85,55 90,38 76,27 94,27"
            fill="url(#goldGrad)"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <circle cx="100" cy="33" r="4.5" fill="#1e3a8a" stroke="#fef08a" strokeWidth="1.5" />
        </g>

        {/* 5. Faixa / Listel Curvado na Base com o Lema */}
        <path
          d="M 28 165 
             Q 100 195 172 165 
             L 168 178 
             Q 100 205 32 178 
             Z"
          fill="url(#ribbonGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="2"
        />

        {/* Inscrição Militar no Listel */}
        <text
          x="100"
          y="180"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="8.5"
          fontWeight="900"
          letterSpacing="0.1em"
          fontFamily="system-ui, -apple-system, sans-serif"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
        >
          POLÍCIA MILITAR • PE
        </text>

        {/* Ano Histórico de Fundação (1825) */}
        <rect x="88" y="38" width="24" height="10" rx="3" fill="#1e3a8a" stroke="#f59e0b" strokeWidth="1" />
        <text
          x="100"
          y="46"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="7"
          fontWeight="900"
          letterSpacing="0.08em"
          fontFamily="system-ui, sans-serif"
        >
          1825
        </text>
      </svg>

      {showText && (
        <div style={{ textAlign: 'center', marginTop: '0.65rem' }}>
          <div style={{
            fontSize: '1.25rem',
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
            fontSize: '0.78rem',
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
