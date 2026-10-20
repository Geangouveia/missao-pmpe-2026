import React, { useMemo } from 'react';
import { 
  Radar, 
  X, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Target, 
  Award,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { getAllStudents } from '../utils/studentAnalytics';
import { sound } from '../utils/sound';

interface ProficiencyRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: string | null;
  onNavigateToCategory?: (categoryId: string) => void;
}

interface SubjectProficiency {
  id: string;
  name: string;
  categoryId: string;
  accuracy: number; // 0 to 100
  answered: number;
  correct: number;
  targetCutoff: number; // 60%
  zone: 'safe' | 'warning' | 'danger';
  recommendation: string;
}

const PMPE_SUBJECTS = [
  { id: 'portugues', name: 'Língua Portuguesa', categoryId: 'portugues', weight: 10, defaultAcc: 75, tip: 'Foco total em Crase, Concordância Verbal e Interpretação de Texto AOCP.' },
  { id: 'raciocinio', name: 'Raciocínio Lógico (RLM)', categoryId: 'raciocinio', weight: 10, defaultAcc: 55, tip: 'Treinar regra do MANÉ, De Morgan e Probabilidade simples/condicional.' },
  { id: 'historia_pe', name: 'História de PE', categoryId: 'historia_pe', weight: 10, defaultAcc: 70, tip: 'Revolução de 1817, Confederação do Equador 1824 e Batalha dos Guararapes.' },
  { id: 'informatica', name: 'Informática', categoryId: 'informatica', weight: 10, defaultAcc: 68, tip: 'Redes, Segurança da Informação, Atalhos e Pacote LibreOffice/Microsoft.' },
  { id: 'constitucional', name: 'Direito Constitucional', categoryId: 'constitucional', weight: 10, defaultAcc: 80, tip: 'Art. 5º (direitos e garantias) e Art. 144 (segurança pública e PM).' },
  { id: 'humanos_leis', name: 'Direitos Humanos', categoryId: 'humanos_leis', weight: 10, defaultAcc: 78, tip: 'Pacto de San José da Costa Rica e DUDH 1948 - tópicos favoritos AOCP.' },
  { id: 'legislacao_extravagante', name: 'Leis Extravagantes', categoryId: 'legislacao_extravagante', weight: 10, defaultAcc: 62, tip: 'Lei Maria da Penha (11.340), Abuso de Autoridade (13.869) e ECA.' },
  { id: 'legislacao_pmpe', name: 'Estatuto PMPE', categoryId: 'legislacao_pmpe', weight: 10, defaultAcc: 72, tip: 'Lei Estadual 6.783/74: deveres, patentes militares, transgressões e licenças.' },
];

export const ProficiencyRadarModal: React.FC<ProficiencyRadarModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onNavigateToCategory
}) => {
  if (!isOpen) return null;

  // Carrega os dados reais do aluno atual
  const subjectData: SubjectProficiency[] = useMemo(() => {
    let studentStats: Record<string, { answered: number; correct: number; accuracy: number }> = {};
    if (currentUser) {
      const all = getAllStudents();
      const profile = all[currentUser.trim()];
      if (profile && profile.subjectStats) {
        studentStats = profile.subjectStats;
      }
    }

    return PMPE_SUBJECTS.map((sub) => {
      // Procura match por chave ou nome
      const matched = studentStats[sub.name] || studentStats[sub.categoryId] || studentStats[sub.id];
      let answered = matched?.answered || 0;
      let correct = matched?.correct || 0;
      let accuracy = answered >= 3 ? Math.round((correct / answered) * 100) : sub.defaultAcc;

      // Classificação por Zona
      let zone: 'safe' | 'warning' | 'danger' = 'safe';
      if (accuracy < 50) {
        zone = 'danger';
      } else if (accuracy < 70) {
        zone = 'warning';
      }

      return {
        id: sub.id,
        name: sub.name,
        categoryId: sub.categoryId,
        accuracy: Math.min(100, Math.max(10, accuracy)),
        answered,
        correct,
        targetCutoff: 60,
        zone,
        recommendation: sub.tip
      };
    });
  }, [currentUser]);

  // Cálculos do Gráfico de Radar SVG
  const size = 380;
  const center = size / 2;
  const radius = center - 50;
  const totalAxes = subjectData.length;
  const angleStep = (Math.PI * 2) / totalAxes;

  // Converte (índice, valor 0-100) para coordenadas Cartesianas (x, y)
  const getCoordinates = (index: number, valuePct: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (valuePct / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  // Linhas das Teias Concêntricas (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [20, 40, 60, 80, 100];

  const polygonPath = useMemo(() => {
    return subjectData
      .map((item, idx) => {
        const { x, y } = getCoordinates(idx, item.accuracy);
        return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ') + ' Z';
  }, [subjectData]);

  // Estatísticas Globais
  const avgAccuracy = Math.round(
    subjectData.reduce((acc, curr) => acc + curr.accuracy, 0) / subjectData.length
  );
  const dangerSubjects = subjectData.filter((s) => s.zone === 'danger');
  const warningSubjects = subjectData.filter((s) => s.zone === 'warning');
  const safeSubjects = subjectData.filter((s) => s.zone === 'safe');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 7, 18, 0.94)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1050px',
          maxHeight: '94vh',
          background: 'linear-gradient(180deg, #090e1a 0%, #05070c 100%)',
          border: '2px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.3) 0%, rgba(10, 17, 32, 0.95) 100%)',
            borderBottom: '1px solid rgba(245, 158, 11, 0.35)',
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
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(245, 158, 11, 0.4)',
                color: '#ffffff'
              }}
            >
              <Radar size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: '#ffffff' }}>
                  RAIO-X DE PROFICIÊNCIA OPERACIONAL (RADAR AOCP)
                </h2>
                <span
                  style={{
                    background: 'rgba(245, 158, 11, 0.2)',
                    border: '1px solid #f59e0b',
                    color: '#fbbf24',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  8 DISCIPLINAS
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Diagnóstico de vulnerabilidades para evitar a ilusão de competência e direcionar o estudo cirúrgico.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
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

        {/* CORPO DO MODAL */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* BANNER DE DIAGNÓSTICO RÁPIDO */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem'
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  border: '1px solid #f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24'
                }}
              >
                <TrendingUp size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                  Aproveitamento Global
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#fbbf24' }}>
                  {avgAccuracy}%
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '14px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid #ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f87171'
                }}
              >
                <AlertTriangle size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#fca5a5', textTransform: 'uppercase', fontWeight: 700 }}>
                  Alerta Vermelho (&lt;50%)
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#f87171' }}>
                  {dangerSubjects.length} {dangerSubjects.length === 1 ? 'Matéria Crítica' : 'Matérias Críticas'}
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '14px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '1px solid #22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4ade80'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#86efac', textTransform: 'uppercase', fontWeight: 700 }}>
                  Zona Segura (≥70%)
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#4ade80' }}>
                  {safeSubjects.length} {safeSubjects.length === 1 ? 'Matéria Blindada' : 'Matérias Blindadas'}
                </div>
              </div>
            </div>
          </div>

          {/* ÁREA CENTRAL: GRÁFICO RADAR SVG + PAINEL DE FRAQUEZAS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {/* GRÁFICO RADAR SVG PURO */}
            <div
              style={{
                background: 'rgba(8, 12, 22, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '18px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.75rem', textAlign: 'center' }}>
                🕸️ Mapa Poligonal de Competências (Padrão PMPE 2026)
              </div>

              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: 'visible' }}>
                {/* Círculos / Polígonos de Grade */}
                {gridLevels.map((lvl) => {
                  const pts = subjectData
                    .map((_, idx) => {
                      const { x, y } = getCoordinates(idx, lvl);
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    })
                    .join(' ');

                  return (
                    <polygon
                      key={lvl}
                      points={pts}
                      fill={lvl === 100 ? 'rgba(30, 58, 138, 0.05)' : 'none'}
                      stroke="rgba(255, 255, 255, 0.12)"
                      strokeWidth="1"
                      strokeDasharray={lvl === 60 ? '3 3' : 'none'}
                    />
                  );
                })}

                {/* Eixos Radiais */}
                {subjectData.map((_, idx) => {
                  const { x, y } = getCoordinates(idx, 100);
                  return (
                    <line
                      key={idx}
                      x1={center}
                      y1={center}
                      x2={x}
                      y2={y}
                      stroke="rgba(255, 255, 255, 0.15)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Polígono de Desempenho do Aluno */}
                <polygon
                  points={subjectData
                    .map((item, idx) => {
                      const { x, y } = getCoordinates(idx, item.accuracy);
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    })
                    .join(' ')}
                  fill="rgba(245, 158, 11, 0.35)"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                />

                {/* Vértices Interativos e Rótulos */}
                {subjectData.map((item, idx) => {
                  const pt = getCoordinates(idx, item.accuracy);
                  const labelPt = getCoordinates(idx, 118);

                  const ptColor = item.zone === 'safe' ? '#22c55e' : item.zone === 'warning' ? '#f59e0b' : '#ef4444';

                  return (
                    <g key={item.id}>
                      {/* Ponto */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="5"
                        fill={ptColor}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />

                      {/* Rótulo da Matéria */}
                      <text
                        x={labelPt.x}
                        y={labelPt.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="9.5"
                        fontWeight="800"
                        fill={item.zone === 'danger' ? '#fca5a5' : '#e2e8f0'}
                        style={{ pointerEvents: 'none' }}
                      >
                        {item.name.replace('Direito ', '').replace('Língua ', '')}
                      </text>
                      <text
                        x={labelPt.x}
                        y={labelPt.y + 11}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="9"
                        fontWeight="900"
                        fill={ptColor}
                      >
                        {item.accuracy}%
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Legenda das Zonas */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.75rem',
                  marginTop: '0.75rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#4ade80' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                  Zona Segura (≥70%)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fbbf24' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                  Atenção (50-69%)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#f87171' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                  Alerta Vermelho (&lt;50%)
                </div>
              </div>
            </div>

            {/* LISTA DE MATÉRIAS & PRESCRIÇÃO TÁTICA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Target size={18} color="#fbbf24" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#ffffff', fontWeight: 900 }}>
                  Prescrição Tática de Estudos
                </h3>
              </div>

              {subjectData.map((item) => {
                const isDanger = item.zone === 'danger';
                const isWarning = item.zone === 'warning';

                const borderColor = isDanger ? 'rgba(239, 68, 68, 0.5)' : isWarning ? 'rgba(245, 158, 11, 0.4)' : 'rgba(34, 197, 94, 0.3)';
                const badgeBg = isDanger ? 'rgba(239, 68, 68, 0.2)' : isWarning ? 'rgba(245, 158, 11, 0.2)' : 'rgba(34, 197, 94, 0.2)';
                const badgeColor = isDanger ? '#fca5a5' : isWarning ? '#fef08a' : '#86efac';

                return (
                  <div
                    key={item.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${borderColor}`,
                      borderRadius: '12px',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            background: badgeBg,
                            color: badgeColor,
                            fontWeight: 800
                          }}
                        >
                          {isDanger ? '🚨 Alerta Vermelho' : isWarning ? '⚠️ Atenção' : '🛡️ Blindado'}
                        </span>
                      </div>

                      <div style={{ fontSize: '1.05rem', fontWeight: 900, color: badgeColor }}>
                        {item.accuracy}%
                      </div>
                    </div>

                    {/* Barra de Progresso */}
                    <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${item.accuracy}%`,
                          background: isDanger ? '#ef4444' : isWarning ? '#f59e0b' : '#22c55e',
                          borderRadius: '3px'
                        }}
                      />
                    </div>

                    {/* Dica Cirúrgica */}
                    <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                      <strong style={{ color: '#fbbf24' }}>Mira da Prova: </strong>
                      {item.recommendation}
                    </div>

                    {isDanger && (
                      <div style={{ fontSize: '0.72rem', color: '#f87171', fontWeight: 700 }}>
                        ⚡ Ação Imediata: Dedique 30 minutos a mais nesta disciplina hoje para evitar ser eliminado pelo ponto de corte!
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
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
            Edital PMPE AOCP: Exige nota mínima geral e <strong style={{ color: '#fbbf24' }}>NUNCA ZERAR NENHUMA DISCIPLINA</strong>.
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#060b17',
              fontWeight: 900,
              fontSize: '0.88rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Entendido, Comandante!
          </button>
        </div>
      </div>
    </div>
  );
};
