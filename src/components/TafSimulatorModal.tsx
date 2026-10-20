import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Activity,
  Timer,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Award,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Printer,
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  User,
  Shield
} from 'lucide-react';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';

interface TafSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

type Gender = 'male' | 'female';

export const TafSimulatorModal: React.FC<TafSimulatorModalProps> = ({
  isOpen,
  onClose,
  userName = 'Soldado'
}) => {
  if (!isOpen) return null;

  const [gender, setGender] = useState<Gender>('male');
  const [activeTab, setActiveTab] = useState<'calculadora' | 'cronometro' | 'treinamento'>('calculadora');

  // Índices do Aluno
  const [barras, setBarras] = useState<number>(4); // repetições (masc) ou segundos de isometria (fem)
  const [abdominais, setAbdominais] = useState<number>(38); // remador em 1 minuto
  const [salto, setSalto] = useState<number>(1.85); // metros (impulsão horizontal)
  const [corridaMin, setCorridaMin] = useState<number>(11); // minutos para 2400m
  const [corridaSec, setCorridaSec] = useState<number>(20); // segundos para 2400m

  // Critérios Oficiais PMPE (Edital Soldado)
  const criteria = useMemo(() => {
    if (gender === 'male') {
      return {
        barraMin: 3, // repetições dinâmicas
        barraLabel: 'Barra Fixa Dinâmica (mínimo 3 reps)',
        barraUnit: 'reps',
        abdominaisMin: 36, // remador em 60s
        saltoMin: 1.80, // metros
        corridaMaxSeconds: 11 * 60 + 30, // 11min30s
        corridaLabel: 'Corrida de 2.400m (máx 11m30s)'
      };
    } else {
      return {
        barraMin: 15, // segundos em suspensão isométrica
        barraLabel: 'Isometria na Barra (mínimo 15 segundos)',
        barraUnit: 'segundos',
        abdominaisMin: 30, // remador em 60s
        saltoMin: 1.40, // metros
        corridaMaxSeconds: 13 * 60 + 30, // 13m30s
        corridaLabel: 'Corrida de 2.400m (máx 13m30s)'
      };
    }
  }, [gender]);

  // Cálculos de Aprovação
  const results = useMemo(() => {
    const totalCorridaSec = corridaMin * 60 + corridaSec;
    const isBarraApta = barras >= criteria.barraMin;
    const isAbdominalApto = abdominais >= criteria.abdominaisMin;
    const isSaltoApto = salto >= criteria.saltoMin;
    const isCorridaApta = totalCorridaSec <= criteria.corridaMaxSeconds && totalCorridaSec > 0;

    const isTotalApto = isBarraApta && isAbdominalApto && isSaltoApto && isCorridaApta;

    const fails: string[] = [];
    if (!isBarraApta) {
      fails.push(
        gender === 'male'
          ? `Barra Fixa: faltam ${criteria.barraMin - barras} repetições para atingir o mínimo de 3.`
          : `Isometria na Barra: faltam ${criteria.barraMin - barras}s para atingir os 15s obrigatórios.`
      );
    }
    if (!isAbdominalApto) {
      fails.push(`Abdominal Remador: faltam ${criteria.abdominaisMin - abdominais} repetições para atingir ${criteria.abdominaisMin} em 1 min.`);
    }
    if (!isSaltoApto) {
      fails.push(`Salto em Distância: faltam ${(criteria.saltoMin - salto).toFixed(2)}m para atingir ${criteria.saltoMin}m.`);
    }
    if (!isCorridaApta) {
      const diffSec = totalCorridaSec - criteria.corridaMaxSeconds;
      const m = Math.floor(diffSec / 60);
      const s = diffSec % 60;
      fails.push(`Corrida de 2.400m: tempo acima do limite por ${m > 0 ? `${m}m` : ''}${s}s.`);
    }

    return {
      isTotalApto,
      isBarraApta,
      isAbdominalApto,
      isSaltoApto,
      isCorridaApta,
      fails
    };
  }, [barras, abdominais, salto, corridaMin, corridaSec, criteria, gender]);

  // Cronômetro Tático
  const [stopwatchSeconds, setStopwatchSeconds] = useState(60);
  const [stopwatchTarget, setStopwatchTarget] = useState<'1min' | '12min' | 'manual'>('1min');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<any>(null);

  const setTimerMode = (target: '1min' | '12min') => {
    setIsTimerRunning(false);
    clearInterval(timerRef.current);
    setStopwatchTarget(target);
    setStopwatchSeconds(target === '1min' ? 60 : 12 * 60);
  };

  const handleToggleTimer = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      clearInterval(timerRef.current);
    } else {
      sound.playGunshot38();
      setIsTimerRunning(true);
      timerRef.current = setInterval(() => {
        setStopwatchSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            sound.playLevelUp();
            // Apito final sintetizado
            if ('speechSynthesis' in window) {
              const u = new SpeechSynthesisUtterance('Atenção candidato, tempo encerrado no cronômetro do TAF!');
              u.lang = 'pt-BR';
              window.speechSynthesis.speak(u);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timerRef.current);
    setStopwatchSeconds(stopwatchTarget === '1min' ? 60 : 12 * 60);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(m)}:${pad(s)}`;
  };

  const handlePrintTafPlan = () => {
    sound.playLevelUp();
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Ficha Oficial de Avaliação TAF - PMPE 2026</title>
        <style>
          @page { size: A4; margin: 15mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111; line-height: 1.5; font-size: 11pt; }
          .header { border: 2px solid #000; padding: 12px; text-align: center; margin-bottom: 20px; background: #f8fafc; }
          .header h1 { margin: 0; font-size: 14pt; font-weight: 900; }
          .table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          .table th, .table td { border: 1px solid #444; padding: 8px 12px; text-align: left; }
          .table th { background: #e2e8f0; font-weight: 800; }
          .verdict { margin-top: 25px; padding: 15px; border: 2px solid ${results.isTotalApto ? '#16a34a' : '#dc2626'}; background: ${results.isTotalApto ? '#f0fdf4' : '#fef2f2'}; font-weight: 900; font-size: 13pt; text-align: center; }
          .plan-box { margin-top: 25px; border-left: 4px solid #f59e0b; padding-left: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>POLÍCIA MILITAR DE PERNAMBUCO • EDITAL SOLDADO 2026</h1>
          <div>FICHA DE CONTROLE TÁTICO INDIVIDUAL — TESTE DE APTIDÃO FÍSICA (TAF)</div>
          <div style="font-size: 9pt; margin-top: 5px;">Candidato: <strong>${userName}</strong> | Sexo: <strong>${gender === 'male' ? 'Masculino' : 'Feminino'}</strong> | Data: <strong>${new Date().toLocaleDateString('pt-BR')}</strong></div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>Prova Oficial</th>
              <th>Mínimo Exigido</th>
              <th>Seu Índice Atual</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Barra Fixa</td>
              <td>${criteria.barraMin} ${criteria.barraUnit}</td>
              <td>${barras} ${criteria.barraUnit}</td>
              <td><strong>${results.isBarraApta ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td>2. Abdominal Remador (1 min)</td>
              <td>${criteria.abdominaisMin} reps</td>
              <td>${abdominais} reps</td>
              <td><strong>${results.isAbdominalApto ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td>3. Salto em Distância (Impulsão)</td>
              <td>${criteria.saltoMin.toFixed(2)}m</td>
              <td>${salto.toFixed(2)}m</td>
              <td><strong>${results.isSaltoApto ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td>4. Corrida de 2.400 metros</td>
              <td>Máximo ${formatTime(criteria.corridaMaxSeconds)}</td>
              <td>${formatTime(corridaMin * 60 + corridaSec)}</td>
              <td><strong>${results.isCorridaApta ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="verdict">
          PARECER OFICIAL DO SIMULADOR: ${results.isTotalApto ? '✅ CANDIDATO APTO PARA O COMBATE NA PMPE' : '⚠️ CANDIDATO INAPTO TEMPORARIAMENTE (NECESSÁRIO AJUSTAR METAS)'}
        </div>

        <div class="plan-box">
          <h3>Diretriz Tática de Treinamento:</h3>
          <p>Mantenha treinos intervalados de corrida (3x por semana), fortalecimento da pegada na barra fixa e 3 séries de abdominais remador até a falha. O policial militar deve estar pronto para a mente e para o corpo!</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 350);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(4, 7, 14, 0.96)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.25s ease'
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
          boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* TOPO */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'linear-gradient(90deg, rgba(30, 58, 138, 0.35) 0%, rgba(10, 17, 32, 0.98) 100%)',
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
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(34, 197, 94, 0.4)',
                color: '#ffffff'
              }}
            >
              <Activity size={24} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
                  SIMULADOR OFICIAL DO TAF (TESTE FÍSICO PMPE)
                </h2>
                <span
                  style={{
                    background: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid #22c55e',
                    color: '#4ade80',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  EDITAL SOLDADO
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Calculadora exata de índices eliminatórios, cronômetro tático com avisos e planilha de 8 semanas.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrintTafPlan}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#e2e8f0',
                padding: '0.45rem 0.85rem',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <Printer size={15} />
              <span>Imprimir Ficha</span>
            </button>

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
        </div>

        {/* NAVEGAÇÃO DE ABAS */}
        <div
          style={{
            padding: '0.65rem 1.5rem',
            background: 'rgba(6, 10, 20, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[
              { id: 'calculadora', label: '📊 Calculadora de Índices', icon: Activity },
              { id: 'cronometro', label: '⏱️ Cronômetro do TAF (1min & 12min)', icon: Timer },
              { id: 'treinamento', label: '🏋️ Planilha de Treino (8 Semanas)', icon: Calendar }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(tab.id as any);
                  }}
                  style={{
                    background: isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.06)',
                    color: isActive ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <tab.icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Seletor de Sexo */}
          <div
            style={{
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.06)',
              borderRadius: '8px',
              padding: '0.15rem',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <button
              onClick={() => {
                sound.playClick();
                setGender('male');
              }}
              style={{
                background: gender === 'male' ? '#3b82f6' : 'transparent',
                color: gender === 'male' ? '#ffffff' : '#94a3b8',
                border: 'none',
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              ♂ Masculino
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setGender('female');
              }}
              style={{
                background: gender === 'female' ? '#ec4899' : 'transparent',
                color: gender === 'female' ? '#ffffff' : '#94a3b8',
                border: 'none',
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              ♀ Feminino
            </button>
          </div>
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
          {activeTab === 'calculadora' ? (
            <>
              {/* PLACAR DE STATUS GERAL DO TAF */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: results.isTotalApto
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(10, 17, 32, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(10, 17, 32, 0.95) 100%)',
                  border: results.isTotalApto ? '2px solid #22c55e' : '2px solid #ef4444',
                  boxShadow: results.isTotalApto ? '0 0 30px rgba(34, 197, 94, 0.25)' : '0 0 30px rgba(239, 68, 68, 0.25)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.35rem' }}>
                  {results.isTotalApto ? '🎖️' : '⚠️'}
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    background: results.isTotalApto ? '#16a34a' : '#dc2626',
                    color: '#ffffff',
                    padding: '0.25rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                  }}
                >
                  {results.isTotalApto ? 'STATUS: APTO PARA A POLÍCIA MILITAR' : 'STATUS: INAPTO TEMPORARIAMENTE NO TAF'}
                </div>

                <div style={{ fontSize: '0.95rem', color: '#e2e8f0', maxWidth: '650px', margin: '0.25rem auto 0' }}>
                  {results.isTotalApto
                    ? 'Parabéns, guerreiro! Seus índices cumprem ou superam todos os 4 testes eliminatórios previstos no edital de Soldado da PMPE.'
                    : 'Atenção, o TAF elimina sem dó. Veja abaixo as provas onde você ainda não atingiu o índice mínimo e ajuste os treinos hoje mesmo:'}
                </div>

                {results.fails.length > 0 && (
                  <div
                    style={{
                      marginTop: '0.85rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      alignItems: 'center'
                    }}
                  >
                    {results.fails.map((f, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: '1px solid rgba(239, 68, 68, 0.4)',
                          color: '#fca5a5',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700
                        }}
                      >
                        ⚠️ {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* GRADE DE ENTRADA DOS 4 TESTES OFICIAIS */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem'
                }}
              >
                {/* 1. Barra Fixa */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: results.isBarraApta ? '1.5px solid #22c55e' : '1.5px solid rgba(239, 68, 68, 0.5)',
                    borderRadius: '14px',
                    padding: '1.15rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                      1. {gender === 'male' ? 'Barra Dinâmica' : 'Isometria na Barra'}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: results.isBarraApta ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: results.isBarraApta ? '#4ade80' : '#f87171'
                      }}
                    >
                      {results.isBarraApta ? '✓ APTO' : '✗ INAPTO'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Exigido: Mínimo <strong>{criteria.barraMin} {criteria.barraUnit}</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                    <input
                      type="number"
                      min={0}
                      max={50}
                      value={barras}
                      onChange={(e) => setBarras(Math.max(0, parseInt(e.target.value, 10) || 0))}
                      style={{
                        width: '80px',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        background: '#07090e',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#fbbf24',
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        textAlign: 'center'
                      }}
                    />
                    <span style={{ fontSize: '0.88rem', color: '#e2e8f0', fontWeight: 700 }}>
                      {criteria.barraUnit}
                    </span>
                  </div>
                </div>

                {/* 2. Abdominal Remador */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: results.isAbdominalApto ? '1.5px solid #22c55e' : '1.5px solid rgba(239, 68, 68, 0.5)',
                    borderRadius: '14px',
                    padding: '1.15rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                      2. Abdominal Remador
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: results.isAbdominalApto ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: results.isAbdominalApto ? '#4ade80' : '#f87171'
                      }}
                    >
                      {results.isAbdominalApto ? '✓ APTO' : '✗ INAPTO'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Exigido: Mínimo <strong>{criteria.abdominaisMin} reps</strong> em 1 minuto
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={abdominais}
                      onChange={(e) => setAbdominais(Math.max(0, parseInt(e.target.value, 10) || 0))}
                      style={{
                        width: '80px',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        background: '#07090e',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#fbbf24',
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        textAlign: 'center'
                      }}
                    />
                    <span style={{ fontSize: '0.88rem', color: '#e2e8f0', fontWeight: 700 }}>
                      repetições / 60s
                    </span>
                  </div>
                </div>

                {/* 3. Salto em Distância (Impulsão Horizontal) */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: results.isSaltoApto ? '1.5px solid #22c55e' : '1.5px solid rgba(239, 68, 68, 0.5)',
                    borderRadius: '14px',
                    padding: '1.15rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                      3. Salto em Distância
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: results.isSaltoApto ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: results.isSaltoApto ? '#4ade80' : '#f87171'
                      }}
                    >
                      {results.isSaltoApto ? '✓ APTO' : '✗ INAPTO'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Exigido: Mínimo <strong>{criteria.saltoMin.toFixed(2)} metros</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                    <input
                      type="number"
                      step={0.05}
                      min={0}
                      max={4.0}
                      value={salto}
                      onChange={(e) => setSalto(Math.max(0, parseFloat(e.target.value) || 0))}
                      style={{
                        width: '80px',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        background: '#07090e',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#fbbf24',
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        textAlign: 'center'
                      }}
                    />
                    <span style={{ fontSize: '0.88rem', color: '#e2e8f0', fontWeight: 700 }}>
                      metros
                    </span>
                  </div>
                </div>

                {/* 4. Corrida de 2.400 Metros */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: results.isCorridaApta ? '1.5px solid #22c55e' : '1.5px solid rgba(239, 68, 68, 0.5)',
                    borderRadius: '14px',
                    padding: '1.15rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                      4. Corrida de 2.400m
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: results.isCorridaApta ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        color: results.isCorridaApta ? '#4ade80' : '#f87171'
                      }}
                    >
                      {results.isCorridaApta ? '✓ APTO' : '✗ INAPTO'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Exigido: Máximo <strong>{formatTime(criteria.corridaMaxSeconds)}</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.25rem' }}>
                    <input
                      type="number"
                      min={0}
                      max={30}
                      value={corridaMin}
                      onChange={(e) => setCorridaMin(Math.max(0, parseInt(e.target.value, 10) || 0))}
                      style={{
                        width: '56px',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        background: '#07090e',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#fbbf24',
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        textAlign: 'center'
                      }}
                    />
                    <span style={{ fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 800 }}>min</span>
                    <input
                      type="number"
                      min={0}
                      max={59}
                      value={corridaSec}
                      onChange={(e) => setCorridaSec(Math.min(59, Math.max(0, parseInt(e.target.value, 10) || 0)))}
                      style={{
                        width: '56px',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        background: '#07090e',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#fbbf24',
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        textAlign: 'center'
                      }}
                    />
                    <span style={{ fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 800 }}>seg</span>
                  </div>
                </div>
              </div>
            </>
          ) : activeTab === 'cronometro' ? (
            /* ================= CRONÔMETRO TÁTICO COM APITO ================= */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1rem',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setTimerMode('1min')}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '1min' ? '#f59e0b' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '1min' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  ⏱️ 1 Minuto (Abdominais Remador)
                </button>
                <button
                  onClick={() => setTimerMode('12min')}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '12min' ? '#f59e0b' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '12min' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  🏃‍♂️ 12 Minutos (Corrida 2.400m)
                </button>
              </div>

              {/* DISPLAY GIGANTE DO CRONÔMETRO */}
              <div
                style={{
                  fontSize: '5.5rem',
                  fontWeight: 900,
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em',
                  color: stopwatchSeconds < 10 ? '#ef4444' : '#fbbf24',
                  textShadow: '0 0 35px rgba(245, 158, 11, 0.4)',
                  padding: '1.5rem 3rem',
                  borderRadius: '24px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  border: '2px solid rgba(245, 158, 11, 0.35)'
                }}
              >
                {formatTime(stopwatchSeconds)}
              </div>

              {/* CONTROLES */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={handleToggleTimer}
                  style={{
                    padding: '0.9rem 2.2rem',
                    borderRadius: '14px',
                    background: isTimerRunning ? '#dc2626' : 'linear-gradient(135deg, #16a34a, #15803d)',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.35)'
                  }}
                >
                  {isTimerRunning ? <Pause size={20} /> : <Play size={20} />}
                  <span>{isTimerRunning ? 'Pausar Treino' : 'Iniciar com Apito'}</span>
                </button>

                <button
                  onClick={handleResetTimer}
                  style={{
                    padding: '0.9rem 1.4rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <RotateCcw size={18} />
                  <span>Reiniciar</span>
                </button>
              </div>
            </div>
          ) : (
            /* ================= PLANILHA DE TREINAMENTO 8 SEMANAS ================= */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                Cronograma tático desenvolvido especificamente para candidatos que precisam bater os índices oficiais da PMPE saindo do zero em até 8 semanas:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {[
                  {
                    fase: 'Semanas 1 & 2 • Construção da Base',
                    corrida: 'Trote leve de 20 min (3x/sem) intercalando 2 min correndo e 1 min andando.',
                    barra: 'Isometria na barra 3x10s com auxílio de elástico ou banco.',
                    abdominal: '4 séries de 20 abdominais tradicionais + prancha de 30s.'
                  },
                  {
                    fase: 'Semanas 3 & 4 • Resistência Cardiovascular',
                    corrida: 'Tiros de 400m em pista (5 repetições com 1 min de intervalo).',
                    barra: 'Barra negativa (subir com pulo e descer em 5 segundos controlados).',
                    abdominal: '4 séries de 25 abdominais remadores cronometrados.'
                  },
                  {
                    fase: 'Semanas 5 & 6 • Simulação de Prova',
                    corrida: 'Simulado real de 2.400m aos sábados com cronômetro cravado em 12 minutos.',
                    barra: 'Tentativa de repetições completas sem elástico (meta: 3 a 5 reps masculinas / 20s fem).',
                    abdominal: 'Treino de 1 minuto em ritmo acelerado visando 36 repetições.'
                  },
                  {
                    fase: 'Semanas 7 & 8 • Polimento & Descanso',
                    corrida: 'Tiros curtos de velocidade de 200m e manutenção leve.',
                    barra: 'Execução estrita com técnica da banca (sem mexer as pernas ou dar impulso).',
                    abdominal: 'Simulado completo com intervalo de 15 minutos entre as provas.'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: '14px',
                      padding: '1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#fbbf24' }}>
                      {item.fase}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                      <strong style={{ color: '#38bdf8' }}>🏃 Corrida:</strong> {item.corrida}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                      <strong style={{ color: '#4ade80' }}>💪 Barra:</strong> {item.barra}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0' }}>
                      <strong style={{ color: '#f472b6' }}>🔥 Abdominal:</strong> {item.abdominal}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
            Edital PMPE: O Teste de Aptidão Física tem caráter unicamente <strong style={{ color: '#f87171' }}>ELIMINATÓRIO</strong>. Não pontua, mas derruba quem negligencia!
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              padding: '0.65rem 1.5rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #16a34a, #15803d)',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '0.88rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Foco no TAF, Comandante!
          </button>
        </div>
      </div>
    </div>
  );
};
