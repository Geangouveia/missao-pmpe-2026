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
  Shield,
  Waves
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

  // Índices do Aluno (Iniciados nos padrões mínimos do edital masculino)
  const [barras, setBarras] = useState<number>(5); // 5 repetições (masc) ou 25 segundos de isometria (fem)
  const [abdominais, setAbdominais] = useState<number>(40); // 40 reps (masc) ou 36 reps (fem) em 1 minuto
  const [salto, setSalto] = useState<number>(3.60); // 3,60m (masc) ou 2,80m (fem) no salto em distância
  const [natacaoSec, setNatacaoSec] = useState<number>(55); // 50 metros em até 60s (masc) ou 70s (fem)
  const [corridaMin, setCorridaMin] = useState<number>(11); // minutos para 2400m
  const [corridaSec, setCorridaSec] = useState<number>(20); // segundos para 2400m

  // Alterna o sexo e atualiza os valores padrão para a referência do edital
  const handleSelectGender = (newGender: Gender) => {
    sound.playClick();
    setGender(newGender);
    if (newGender === 'male') {
      setBarras(5);
      setAbdominais(40);
      setSalto(3.60);
      setNatacaoSec(55);
      setCorridaMin(11);
      setCorridaSec(20);
    } else {
      setBarras(25);
      setAbdominais(36);
      setSalto(2.80);
      setNatacaoSec(65);
      setCorridaMin(13);
      setCorridaSec(20);
    }
  };

  // Critérios Oficiais PMPE (Edital Soldado - Instituto AOCP)
  const criteria = useMemo(() => {
    if (gender === 'male') {
      return {
        // 1º Dia
        barraMin: 5,
        barraLabel: 'Barra Fixa Dinâmica (mínimo 5 repetições)',
        barraUnit: 'reps',
        saltoMin: 3.60,
        saltoLabel: 'Salto em Distância (mínimo 3,60 metros)',
        natacaoMaxSeconds: 60,
        natacaoLabel: 'Natação 50 metros (máximo 1\'00" / 60s)',
        // 2º Dia
        abdominaisMin: 40,
        abdominaisLabel: 'Abdominal Remador (mínimo 40 reps em 60s)',
        corridaMaxSeconds: 11 * 60 + 30, // 11min30s
        corridaLabel: 'Corrida de 2.400 metros (máximo 11m30s)'
      };
    } else {
      return {
        // 1º Dia
        barraMin: 25,
        barraLabel: 'Isometria na Barra (mínimo 25 segundos)',
        barraUnit: 'segundos',
        saltoMin: 2.80,
        saltoLabel: 'Salto em Distância (mínimo 2,80 metros)',
        natacaoMaxSeconds: 70,
        natacaoLabel: 'Natação 50 metros (máximo 1\'10" / 70s)',
        // 2º Dia
        abdominaisMin: 36,
        abdominaisLabel: 'Abdominal Remador (mínimo 36 reps em 60s)',
        corridaMaxSeconds: 13 * 60 + 30, // 13m30s
        corridaLabel: 'Corrida de 2.400 metros (máximo 13m30s)'
      };
    }
  }, [gender]);

  // Formatação de Tempo mm:ss
  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(m)}:${pad(s)}`;
  };

  // Cálculos de Aprovação em conformidade absoluta com o Edital PMPE
  const results = useMemo(() => {
    const totalCorridaSec = corridaMin * 60 + corridaSec;
    const isBarraApta = barras >= criteria.barraMin;
    const isAbdominalApto = abdominais >= criteria.abdominaisMin;
    const isSaltoApto = salto >= criteria.saltoMin;
    const isNatacaoApta = natacaoSec <= criteria.natacaoMaxSeconds && natacaoSec > 0;
    const isCorridaApta = totalCorridaSec <= criteria.corridaMaxSeconds && totalCorridaSec > 0;

    const isTotalApto = isBarraApta && isAbdominalApto && isSaltoApto && isNatacaoApta && isCorridaApta;

    const fails: string[] = [];
    if (!isBarraApta) {
      fails.push(
        gender === 'male'
          ? `Barra Fixa Dinâmica: faltam ${criteria.barraMin - barras} repetições para atingir o mínimo oficial de 5.`
          : `Isometria na Barra: faltam ${criteria.barraMin - barras}s para atingir os 25s obrigatórios com o queixo acima da barra.`
      );
    }
    if (!isAbdominalApto) {
      fails.push(
        `Abdominal Remador: faltam ${criteria.abdominaisMin - abdominais} repetições para atingir o mínimo de ${criteria.abdominaisMin} em 1 minuto.`
      );
    }
    if (!isSaltoApto) {
      fails.push(
        `Salto em Distância: faltam ${(criteria.saltoMin - salto).toFixed(2)}m para atingir a marca de ${criteria.saltoMin.toFixed(2)}m.`
      );
    }
    if (!isNatacaoApta) {
      const diffSec = natacaoSec - criteria.natacaoMaxSeconds;
      fails.push(
        `Natação 50m: tempo acima do limite por ${diffSec}s (máximo permitido: ${criteria.natacaoMaxSeconds}s).`
      );
    }
    if (!isCorridaApta) {
      const diffSec = totalCorridaSec - criteria.corridaMaxSeconds;
      const m = Math.floor(diffSec / 60);
      const s = diffSec % 60;
      fails.push(
        `Corrida de 2.400m: tempo acima do limite por ${m > 0 ? `${m}m` : ''}${s}s (máximo permitido: ${formatTime(criteria.corridaMaxSeconds)}).`
      );
    }

    return {
      isTotalApto,
      isBarraApta,
      isAbdominalApto,
      isSaltoApto,
      isNatacaoApta,
      isCorridaApta,
      fails
    };
  }, [barras, abdominais, salto, natacaoSec, corridaMin, corridaSec, criteria, gender]);

  // Cronômetro Tático
  const [stopwatchSeconds, setStopwatchSeconds] = useState(60);
  const [stopwatchTarget, setStopwatchTarget] = useState<'60s' | '25s' | '70s' | '11m30s' | '13m30s'>('60s');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<any>(null);

  const setTimerMode = (target: '60s' | '25s' | '70s' | '11m30s' | '13m30s') => {
    setIsTimerRunning(false);
    clearInterval(timerRef.current);
    setStopwatchTarget(target);
    if (target === '60s') setStopwatchSeconds(60);
    else if (target === '25s') setStopwatchSeconds(25);
    else if (target === '70s') setStopwatchSeconds(70);
    else if (target === '11m30s') setStopwatchSeconds(11 * 60 + 30);
    else if (target === '13m30s') setStopwatchSeconds(13 * 60 + 30);
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
    if (stopwatchTarget === '60s') setStopwatchSeconds(60);
    else if (stopwatchTarget === '25s') setStopwatchSeconds(25);
    else if (stopwatchTarget === '70s') setStopwatchSeconds(70);
    else if (stopwatchTarget === '11m30s') setStopwatchSeconds(11 * 60 + 30);
    else if (stopwatchTarget === '13m30s') setStopwatchSeconds(13 * 60 + 30);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

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
              <th>Etapa / Prova Oficial</th>
              <th>Mínimo Exigido no Edital</th>
              <th>Seu Índice Atual</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1º Dia:</strong> 1. Barra Fixa</td>
              <td>${criteria.barraMin} ${criteria.barraUnit} (${gender === 'male' ? 'Dinâmica pronada' : 'Isometria'})</td>
              <td>${barras} ${criteria.barraUnit}</td>
              <td><strong>${results.isBarraApta ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td><strong>1º Dia:</strong> 2. Salto em Distância</td>
              <td>Mínimo ${criteria.saltoMin.toFixed(2)}m</td>
              <td>${salto.toFixed(2)}m</td>
              <td><strong>${results.isSaltoApto ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td><strong>1º Dia:</strong> 3. Natação (50 metros)</td>
              <td>Máximo ${criteria.natacaoMaxSeconds}s (${gender === 'male' ? "1'00\"" : "1'10\""})</td>
              <td>${natacaoSec}s</td>
              <td><strong>${results.isNatacaoApta ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td><strong>2º Dia:</strong> 4. Abdominal Remador (1 min)</td>
              <td>Mínimo ${criteria.abdominaisMin} reps</td>
              <td>${abdominais} reps</td>
              <td><strong>${results.isAbdominalApto ? 'APTO' : 'INAPTO'}</strong></td>
            </tr>
            <tr>
              <td><strong>2º Dia:</strong> 5. Corrida de 2.400 metros</td>
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
          <p>Mantenha treinos intervalados de corrida (3x por semana), fortalecimento da pegada na barra fixa (mínimo 5 repetições masculinas ou 25s de isometria feminina), treinos de natação e séries de abdominais remador visando ${criteria.abdominaisMin} reps em 60s. O policial militar deve estar pronto para a mente e para o corpo!</p>
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
          maxWidth: '1100px',
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
                  EDITAL SOLDADO • AOCP
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '0.15rem' }}>
                Índices oficiais dos 5 testes em 2 dias (Barra, Salto, Natação, Abdominal Remador e Corrida 2.400m).
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

        {/* NAVEGAÇÃO DE ABAS & SELETOR DE SEXO */}
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
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'calculadora', label: '📊 Calculadora de Índices', icon: Activity },
              { id: 'cronometro', label: '⏱️ Cronômetro Tático do TAF', icon: Timer },
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
              onClick={() => handleSelectGender('male')}
              style={{
                background: gender === 'male' ? '#3b82f6' : 'transparent',
                color: gender === 'male' ? '#ffffff' : '#94a3b8',
                border: 'none',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              ♂ Masculino (5 Barras / 40 Remadores)
            </button>
            <button
              onClick={() => handleSelectGender('female')}
              style={{
                background: gender === 'female' ? '#ec4899' : 'transparent',
                color: gender === 'female' ? '#ffffff' : '#94a3b8',
                border: 'none',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              ♀ Feminino (25s Isometria / 36 Remadores)
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

                <div style={{ fontSize: '0.95rem', color: '#e2e8f0', maxWidth: '700px', margin: '0.25rem auto 0' }}>
                  {results.isTotalApto
                    ? `Excelente, recruta! Seus índices cumprem ou superam todos os 5 testes eliminatórios previstos no edital oficial da PMPE (${gender === 'male' ? 'Mínimo 5 barras, 40 abdominais, 3,60m no salto, natação e corrida 11m30s' : 'Mínimo 25s isometria, 36 abdominais, 2,80m no salto, natação e corrida 13m30s'}).`
                    : 'Atenção, o TAF elimina sem dó no concurso da PMPE. Veja abaixo as provas onde você ainda não atingiu o índice mínimo e ajuste os treinos hoje mesmo:'}
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

              {/* SEÇÃO 1: 1º DIA DE TESTES DO EDITAL PMPE */}
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>📅 1º Dia de Testes Oficiais: Barra, Salto e Natação</span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                        1. {gender === 'male' ? 'Barra Dinâmica (Pronada)' : 'Isometria na Barra'}
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
                      Exigido no Edital: Mínimo <strong>{criteria.barraMin} {criteria.barraUnit}</strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                      <input
                        type="number"
                        min={0}
                        max={60}
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
                        {criteria.barraUnit} ({gender === 'male' ? 'reps' : 'segundos'})
                      </span>
                    </div>
                  </div>

                  {/* 2. Salto em Distância */}
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
                        2. Salto em Distância
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
                      Exigido no Edital: Mínimo <strong>{criteria.saltoMin.toFixed(2)} metros</strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                      <input
                        type="number"
                        step={0.05}
                        min={0}
                        max={6.0}
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

                  {/* 3. Natação (50 metros) */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: results.isNatacaoApta ? '1.5px solid #22c55e' : '1.5px solid rgba(239, 68, 68, 0.5)',
                      borderRadius: '14px',
                      padding: '1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                        3. Natação (50 metros)
                      </span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 900,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          background: results.isNatacaoApta ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                          color: results.isNatacaoApta ? '#4ade80' : '#f87171'
                        }}
                      >
                        {results.isNatacaoApta ? '✓ APTO' : '✗ INAPTO'}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      Exigido no Edital: Máximo <strong>{criteria.natacaoMaxSeconds}s ({gender === 'male' ? "1'00\"" : "1'10\""})</strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                      <input
                        type="number"
                        min={0}
                        max={180}
                        value={natacaoSec}
                        onChange={(e) => setNatacaoSec(Math.max(0, parseInt(e.target.value, 10) || 0))}
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
                        segundos
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEÇÃO 2: 2º DIA DE TESTES DO EDITAL PMPE */}
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>📅 2º Dia de Testes Oficiais: Abdominal Remador e Corrida 2.400m</span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}
                >
                  {/* 4. Abdominal Remador */}
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
                        4. Abdominal Remador (1 min)
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
                      Exigido no Edital: Mínimo <strong>{criteria.abdominaisMin} reps</strong> em 60 segundos
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
                        repetições em 60s
                      </span>
                    </div>
                  </div>

                  {/* 5. Corrida de 2.400 Metros */}
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
                        5. Corrida de 2.400 metros
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
                      Exigido no Edital: Máximo <strong>{formatTime(criteria.corridaMaxSeconds)}</strong>
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
              {/* Botões de Presets Oficiais */}
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  onClick={() => setTimerMode('60s')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '60s' ? '#f59e0b' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '60s' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  ⏱️ 60s (Remador / Natação Masc)
                </button>

                <button
                  onClick={() => setTimerMode('25s')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '25s' ? '#ec4899' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '25s' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  ⏱️ 25s (Isometria Barra Feminina)
                </button>

                <button
                  onClick={() => setTimerMode('70s')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '70s' ? '#38bdf8' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '70s' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  🏊 70s (Natação 50m Feminina)
                </button>

                <button
                  onClick={() => setTimerMode('11m30s')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '11m30s' ? '#22c55e' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '11m30s' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  🏃‍♂️ 11m30s (Corrida 2.400m Masc)
                </button>

                <button
                  onClick={() => setTimerMode('13m30s')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                    background: stopwatchTarget === '13m30s' ? '#a855f7' : 'rgba(255,255,255,0.06)',
                    color: stopwatchTarget === '13m30s' ? '#060b17' : '#cbd5e1',
                    border: 'none',
                    fontWeight: 900,
                    cursor: 'pointer'
                  }}
                >
                  🏃‍♀️ 13m30s (Corrida 2.400m Fem)
                </button>
              </div>

              {/* Visor Gigante com Efeito Militar */}
              <div
                style={{
                  width: '320px',
                  height: '180px',
                  borderRadius: '24px',
                  background: 'linear-gradient(180deg, #060911 0%, #020306 100%)',
                  border: isTimerRunning ? '3px solid #22c55e' : '3px solid rgba(245, 158, 11, 0.5)',
                  boxShadow: isTimerRunning ? '0 0 35px rgba(34, 197, 94, 0.4)' : '0 0 25px rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 900, color: isTimerRunning ? '#4ade80' : '#fbbf24', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {isTimerRunning ? '🚨 CRONÔMETRO ATIVO' : 'PAUSADO / AGUARDANDO'}
                </div>
                <div
                  style={{
                    fontSize: '4.5rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em',
                    lineHeight: 1.1
                  }}
                >
                  {formatTime(stopwatchSeconds)}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  {stopwatchTarget === '60s'
                    ? 'Meta: 40 reps (masc) / 36 reps (fem)'
                    : stopwatchTarget === '25s'
                    ? 'Meta: 25s de isometria na barra fixa feminina'
                    : stopwatchTarget === '70s'
                    ? 'Meta: 50m natação feminina'
                    : stopwatchTarget === '11m30s'
                    ? 'Meta: 2.400m masculino'
                    : 'Meta: 2.400m feminino'}
                </div>
              </div>

              {/* Botões de Ação */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={handleToggleTimer}
                  style={{
                    padding: '0.85rem 2.2rem',
                    borderRadius: '14px',
                    background: isTimerRunning ? '#ef4444' : 'linear-gradient(135deg, #16a34a, #15803d)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 900,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: isTimerRunning ? '0 0 20px rgba(239, 68, 68, 0.4)' : '0 0 20px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  {isTimerRunning ? <Pause size={20} /> : <Play size={20} />}
                  <span>{isTimerRunning ? 'Pausar' : 'Iniciar Contagem'}</span>
                </button>

                <button
                  onClick={handleResetTimer}
                  style={{
                    padding: '0.85rem 1.4rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
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
                Cronograma tático desenvolvido especificamente para candidatos que precisam bater os índices oficiais da PMPE (5 barras, 40 remadores, salto 3,60m e 2.400m em 11m30s / fem: 25s barra, 36 remadores, salto 2,80m e 2.400m em 13m30s):
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {[
                  {
                    fase: 'Semanas 1 & 2 • Construção da Base',
                    corrida: 'Trote leve de 20 min (3x/sem) intercalando 2 min correndo e 1 min andando.',
                    barra: 'Isometria na barra 4x10s com auxílio de elástico ou banco para ganhar força nos dorsais.',
                    abdominal: '4 séries de 25 abdominais remadores controlados + prancha de 30s.'
                  },
                  {
                    fase: 'Semanas 3 & 4 • Resistência & Volume',
                    corrida: 'Tiros de 400m em pista (5 a 6 repetições com 1 min de intervalo).',
                    barra: 'Barra negativa (subir com impulso e descer em 5 segundos estritos) + isometria até a falha.',
                    abdominal: '4 séries de 30 abdominais remadores cronometrados visando acelerar o giro.'
                  },
                  {
                    fase: 'Semanas 5 & 6 • Simulação nos Padrões PMPE',
                    corrida: 'Simulado real de 2.400m aos sábados com cronômetro cravado (meta: sub-11m30s masc / sub-13m30s fem).',
                    barra: 'Tentativa de repetições completas estritas (meta: atingir as 5 barras completas masculinas ou 25s fem).',
                    abdominal: 'Treino de 1 minuto em ritmo de prova visando cravar 40 repetições masculinas / 36 femininas.'
                  },
                  {
                    fase: 'Semanas 7 & 8 • Polimento & Descanso',
                    corrida: 'Tiros curtos de velocidade de 200m, hidratação e manutenção leve.',
                    barra: 'Execução estrita com técnica da banca AOCP (queixo acima da barra, pegada pronada sem balançar pernas).',
                    abdominal: 'Simulado completo com intervalo de 15 minutos entre as provas, simulando o dia D da PMPE.'
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
            Edital PMPE / Instituto AOCP: O TAF é <strong style={{ color: '#f87171' }}>ELIMINATÓRIO</strong> em 2 dias consecutivos. Índice mínimo masculino: <strong>5 barras e 40 remadores</strong>; feminino: <strong>25s isometria e 36 remadores</strong>.
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
            Foco na Farda da PMPE!
          </button>
        </div>
      </div>
    </div>
  );
};
