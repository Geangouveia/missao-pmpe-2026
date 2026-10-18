import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Brain, 
  Sparkles, 
  Lock, 
  KeyRound, 
  Printer, 
  RefreshCw, 
  X, 
  MessageCircle, 
  Flame, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { isMasterUser, grantScheduleAccess, isScheduleUnlocked } from '../utils/authManager';
import { sound } from '../utils/sound';

interface StudyScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string | null;
}

export type RoutineType = 'comercial' | 'escala_12x36' | 'escala_24x72' | 'integral';
export type ShiftType = 'manha' | 'tarde' | 'noite' | 'fracionado';

export interface DayPlan {
  dayName: string;
  shortName: string;
  isRestDay: boolean;
  isSimuladoDay: boolean;
  blocks: {
    id: string;
    timeSlot: string;
    subject: string;
    topic: string;
    type: 'teoria' | 'questoes' | 'revisao' | 'simulado';
    durationMin: number;
    completed: boolean;
  }[];
}

const MASTER_VIP_CODES = ['CRONO-PMPE-2026', 'GEAN-VIP-2026', 'SOLDADO-2026', 'PMPE4REAIS'];

export const StudyScheduleModal: React.FC<StudyScheduleModalProps> = ({
  isOpen,
  onClose,
  userName,
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [vipCodeInput, setVipCodeInput] = useState('');
  const [vipError, setVipError] = useState('');
  const [vipSuccess, setVipSuccess] = useState('');

  // Estados do Diagnóstico
  const [hasGenerated, setHasGenerated] = useState(false);
  const [dailyHours, setDailyHours] = useState<number>(3);
  const [routine, setRoutine] = useState<RoutineType>('comercial');
  const [preferredShift, setPreferredShift] = useState<ShiftType>('noite');
  const [difficultySubjects, setDifficultySubjects] = useState<string[]>(['raciocinio', 'portugues']);
  const [scheduleData, setScheduleData] = useState<DayPlan[]>([]);
  const [activeTabDay, setActiveTabDay] = useState<number>(0);

  // Verifica desbloqueio ao abrir
  useEffect(() => {
    if (!userName) return;
    const unlocked = isScheduleUnlocked(userName);
    setIsUnlocked(unlocked);

    // Carrega dados salvos do cronograma
    const saved = localStorage.getItem(`pmpe_schedule_plan_${userName}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === 7) {
          setScheduleData(parsed);
          setHasGenerated(true);
        }
      } catch {}
    }
  }, [userName, isOpen]);

  // Se o dia atual da semana for identificado, abre nele
  useEffect(() => {
    const todayIndex = new Date().getDay(); // 0 domingo, 1 segunda...
    // Mapeia para 0 = segunda ... 6 = domingo
    const mapped = todayIndex === 0 ? 6 : todayIndex - 1;
    setActiveTabDay(mapped);
  }, []);

  if (!isOpen) return null;

  // Handler de Desbloqueio com Código VIP
  const handleUnlockWithCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setVipError('');
    setVipSuccess('');

    const clean = vipCodeInput.trim().toUpperCase();
    if (!clean) {
      sound.playError();
      setVipError('Digite o código ou chave de liberação.');
      return;
    }

    if (MASTER_VIP_CODES.includes(clean) || clean.startsWith('VIP-') || isMasterUser(clean)) {
      sound.playLevelUp();
      if (userName) {
        await grantScheduleAccess(userName);
      }
      setIsUnlocked(true);
      setVipSuccess('🎉 ACESSO VIP LIBERADO COM SUCESSO! Seja bem-vindo à Mentoria de Estudos.');
    } else {
      sound.playError();
      setVipError('Código inválido ou expirado. Fale com o Comandante Gean no WhatsApp para ativar.');
    }
  };

  // Gerador Inteligente do Cronograma baseado em Neurociência
  const handleGenerateSchedule = () => {
    sound.playLevelUp();

    const days = [
      { name: 'Segunda-feira', short: 'SEG' },
      { name: 'Terça-feira', short: 'TER' },
      { name: 'Quarta-feira', short: 'QUA' },
      { name: 'Quinta-feira', short: 'QUI' },
      { name: 'Sexta-feira', short: 'SEX' },
      { name: 'Sábado', short: 'SÁB' },
      { name: 'Domingo', short: 'DOM' },
    ];

    // Matérias prioritárias e complementares
    const allSubjects = [
      { id: 'portugues', name: 'Língua Portuguesa', topic: 'Interpretação e Gramática AOCP' },
      { id: 'raciocinio', name: 'RLM & Probabilidade', topic: 'Análise Combinatória & Lógica Proposicional' },
      { id: 'constitucional', name: 'Direito Constitucional', topic: 'Art. 5º e Art. 144 da Segurança Pública' },
      { id: 'direitos_humanos', name: 'Direitos Humanos & CADH', topic: 'Pacto de São José da Costa Rica & DUDH' },
      { id: 'legislacao_pmpe', name: 'Legislação da PMPE', topic: 'Estatuto (Lei 6.783/74) & LC 108/2008' },
      { id: 'legislacao_extravagante', name: 'Legislação Extravagante', topic: 'Abuso de Autoridade, Tortura & Drogas' },
      { id: 'informatica', name: 'Noções de Informática', topic: 'Segurança da Informação & Redes AOCP' },
      { id: 'historia_pe', name: 'História de Pernambuco', topic: 'Revolução Republicana de 1817 & Confederação' },
    ];

    // Ordena priorizando matérias em que o aluno marcou dificuldade
    const prioritized = [...allSubjects].sort((a, b) => {
      const aDiff = difficultySubjects.includes(a.id) ? -1 : 1;
      const bDiff = difficultySubjects.includes(b.id) ? -1 : 1;
      return aDiff - bDiff;
    });

    let subjectIndex = 0;

    const newPlans: DayPlan[] = days.map((d, index) => {
      const isSunday = index === 6;
      const isSaturday = index === 5;

      if (isSunday) {
        // Domingo: Descanso Ativo & Revisão Leve Espaçada (Curva de Ebbinghaus)
        return {
          dayName: d.name,
          shortName: d.short,
          isRestDay: true,
          isSimuladoDay: false,
          blocks: [
            {
              id: `blk_${index}_1`,
              timeSlot: 'Manhã (09:00 - 10:00)',
              subject: 'Revisão Espaçada Geral (Flashcards)',
              topic: 'Curva de Esquecimento (Revisar anotações dos 7 dias anteriores)',
              type: 'revisao',
              durationMin: 60,
              completed: false,
            },
            {
              id: `blk_${index}_2`,
              timeSlot: 'Tarde / Noite',
              subject: 'Recuperação Neural & Descanso Tático',
              topic: 'Sono, hidratação e lazer para fixação na memória de longo prazo.',
              type: 'teoria',
              durationMin: 0,
              completed: true,
            }
          ]
        };
      }

      if (isSaturday) {
        // Sábado: Simulado Geral Cronometrado & Treino de Prova Real
        return {
          dayName: d.name,
          shortName: d.short,
          isRestDay: false,
          isSimuladoDay: true,
          blocks: [
            {
              id: `blk_${index}_sim`,
              timeSlot: 'Manhã (08:30 - 12:30)',
              subject: 'Simulado Completo PMPE (Caderno Oficial)',
              topic: '60 Questões no App com contagem regressiva e cartão-resposta',
              type: 'simulado',
              durationMin: 180,
              completed: false,
            },
            {
              id: `blk_${index}_diag`,
              timeSlot: 'Tarde (15:00 - 16:30)',
              subject: 'Análise de Erros Tintim por Tintim',
              topic: 'Revisar comentários das questões erradas no app para eliminar lacunas',
              type: 'revisao',
              durationMin: 90,
              completed: false,
            }
          ]
        };
      }

      // Dias de Semana (Segunda a Sexta): Ciclo Intercalado (Alternância Cognitiva)
      const sub1 = prioritized[subjectIndex % prioritized.length];
      subjectIndex++;
      const sub2 = prioritized[subjectIndex % prioritized.length];
      subjectIndex++;

      const blocks: DayPlan['blocks'] = [];

      // Bloco 1: Matéria 1
      blocks.push({
        id: `blk_${index}_1`,
        timeSlot: preferredShift === 'manha' ? '07:30 - 08:30' : preferredShift === 'tarde' ? '14:00 - 15:00' : '19:00 - 20:00',
        subject: sub1.name,
        topic: sub1.topic,
        type: 'teoria',
        durationMin: 50,
        completed: false,
      });

      // Bloco 2: Resolução de Questões no App (Regra 70/30)
      blocks.push({
        id: `blk_${index}_2`,
        timeSlot: preferredShift === 'manha' ? '08:40 - 09:20' : preferredShift === 'tarde' ? '15:10 - 15:50' : '20:10 - 20:50',
        subject: `Questões da Banca AOCP: ${sub1.name}`,
        topic: 'Resolver 15 a 20 questões comentadas no próprio aplicativo',
        type: 'questoes',
        durationMin: 40,
        completed: false,
      });

      // Bloco 3: Alternância para Matéria 2 (Evita fadiga mental)
      if (dailyHours >= 2.5) {
        blocks.push({
          id: `blk_${index}_3`,
          timeSlot: preferredShift === 'manha' ? '09:30 - 10:20' : preferredShift === 'tarde' ? '16:00 - 16:50' : '21:00 - 21:50',
          subject: sub2.name,
          topic: sub2.topic,
          type: 'teoria',
          durationMin: 50,
          completed: false,
        });

        blocks.push({
          id: `blk_${index}_4`,
          timeSlot: preferredShift === 'manha' ? '10:30 - 11:00' : preferredShift === 'tarde' ? '17:00 - 17:30' : '22:00 - 22:30',
          subject: `Questões da Banca AOCP: ${sub2.name}`,
          topic: 'Fixação prática no acervo de questões',
          type: 'questoes',
          durationMin: 30,
          completed: false,
        });
      }

      // Bloco 5: Revisão Espaçada de 24 horas (Ebbinghaus)
      blocks.push({
        id: `blk_${index}_rev`,
        timeSlot: 'Revisão Rápida (15 min)',
        subject: 'Revisão Espaçada (Curva 24h)',
        topic: 'Reler os tópicos estudados ontem antes de dormir',
        type: 'revisao',
        durationMin: 15,
        completed: false,
      });

      return {
        dayName: d.name,
        shortName: d.short,
        isRestDay: false,
        isSimuladoDay: false,
        blocks,
      };
    });

    setScheduleData(newPlans);
    setHasGenerated(true);

    if (userName) {
      localStorage.setItem(`pmpe_schedule_plan_${userName}`, JSON.stringify(newPlans));
    }
  };

  // Alterna status de conclusão do bloco
  const toggleBlockCompleted = (dayIndex: number, blockId: string) => {
    sound.playClick();
    const updated = scheduleData.map((d, dIdx) => {
      if (dIdx !== dayIndex) return d;
      return {
        ...d,
        blocks: d.blocks.map((b) => (b.id === blockId ? { ...b, completed: !b.completed } : b)),
      };
    });
    setScheduleData(updated);
    if (userName) {
      localStorage.setItem(`pmpe_schedule_plan_${userName}`, JSON.stringify(updated));
    }
  };

  // Alterna matéria de dificuldade
  const toggleDifficulty = (subjectId: string) => {
    sound.playClick();
    if (difficultySubjects.includes(subjectId)) {
      setDifficultySubjects(difficultySubjects.filter((s) => s !== subjectId));
    } else {
      setDifficultySubjects([...difficultySubjects, subjectId]);
    }
  };

  // Impressão / Exportação do Cronograma em PDF
  const handlePrintSchedule = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(5, 10, 7, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          background: 'linear-gradient(145deg, #121a14 0%, #0d140f 100%)',
          border: '1.5px solid rgba(34, 197, 94, 0.4)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(34, 197, 94, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Cabeçalho do Modal */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            background: 'rgba(20, 30, 23, 0.95)',
            borderBottom: '1px solid rgba(34, 197, 94, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
              }}
            >
              <Calendar size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#f8fafc' }}>
                  Cronograma Inteligente de Estudos
                </h2>
                <span
                  style={{
                    background: 'rgba(234, 179, 8, 0.2)',
                    border: '1px solid rgba(234, 179, 8, 0.45)',
                    color: '#fbbf24',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '8px',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                  }}
                >
                  MENTORIA PMPE
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#86efac' }}>
                Método Neurocientífico • Ciclo Intercalado + Repetição Espaçada (AOCP 2026)
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {isUnlocked && hasGenerated && (
              <button
                type="button"
                onClick={handlePrintSchedule}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 0.9rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#e2e8f0',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
                title="Imprimir ou Salvar em PDF"
              >
                <Printer size={16} />
                <span>Imprimir PDF</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CORPO DO MODAL */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          {/* TELA DE BLOQUEIO VIP / REQUER AUTORIZAÇÃO DO COMANDANTE */}
          {!isUnlocked ? (
            <div
              style={{
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                maxWidth: '620px',
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '24px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '2px solid rgba(245, 158, 11, 0.5)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '0 0 30px rgba(245, 158, 11, 0.25)',
                }}
              >
                <Lock size={36} color="#fbbf24" />
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.5rem' }}>
                Área Exclusiva da Mentoria Militar
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                O <strong>Cronograma Inteligente de Estudos</strong> é uma ferramenta de alta tecnologia que
                monta seu plano de aprovação personalizado segundo sua rotina, turnos e dificuldades, aplicando
                o <em>Ciclo de Ebbinghaus</em> e a <em>Regra 70/30 de Questões</em> da banca <strong>Instituto AOCP</strong>.
              </p>

              {/* CARD DE OFERTA / VALOR TAXA ÚNICA R$ 4,00 */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(24, 34, 27, 0.95), rgba(16, 24, 18, 0.95))',
                  border: '1.5px solid rgba(234, 179, 8, 0.45)',
                  borderRadius: '18px',
                  padding: '1.35rem 1.5rem',
                  marginBottom: '1.75rem',
                  textAlign: 'left',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={20} color="#fbbf24" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#f8fafc', textTransform: 'uppercase' }}>
                      Liberação pelo Comandante Gean
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'line-through', marginRight: '0.4rem' }}>
                      R$ 29,90
                    </span>
                    <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#4ade80' }}>
                      R$ 4,00
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#86efac', display: 'block' }}>taxa única de ativação</span>
                  </div>
                </div>

                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.84rem', lineHeight: 1.6 }}>
                  <li>Plano adaptado para horário comercial, 12x36 ou 24x72;</li>
                  <li>Intercalação cognitiva entre RLM, Português e Leis;</li>
                  <li>Revisões automáticas espaçadas de 24h, 7 dias e simulados aos sábados;</li>
                  <li>Exportação e impressão direta em folha de metas A4.</li>
                </ul>

                {/* BOTÃO WHATSAPP COMANDANTE GEAN */}
                <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                  <a
                    href="https://wa.me/5581997327341?text=Comandante%20Gean,%20quero%20liberar%20meu%20Cronograma%20Inteligente%20de%20Estudos%20PMPE%20(R$%204,00)"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.85rem 1.5rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      boxShadow: '0 8px 20px rgba(34, 197, 94, 0.4)',
                    }}
                  >
                    <MessageCircle size={20} />
                    <span>Falar no WhatsApp com Comandante Gean</span>
                  </a>
                </div>
              </div>

              {/* FORMULÁRIO DE INSERÇÃO DO CÓDIGO VIP */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.75rem', color: '#cbd5e1', fontSize: '0.82rem', fontWeight: 700 }}>
                  <KeyRound size={16} color="#fbbf24" />
                  <span>Já possui o Código / Chave VIP do Comandante? Digite abaixo:</span>
                </div>

                <form onSubmit={handleUnlockWithCode} style={{ display: 'flex', gap: '0.5rem', maxWidth: '440px', margin: '0 auto' }}>
                  <input
                    type="text"
                    placeholder="Ex: CRONO-PMPE-2026"
                    value={vipCodeInput}
                    onChange={(e) => {
                      setVipCodeInput(e.target.value);
                      setVipError('');
                    }}
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      background: 'rgba(15, 23, 18, 0.9)',
                      border: '1px solid rgba(71, 85, 105, 0.6)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
                      border: 'none',
                      borderRadius: '10px',
                      color: '#0f172a',
                      fontWeight: 900,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                    }}
                  >
                    Ativar
                  </button>
                </form>

                {vipError && (
                  <p style={{ margin: '0.6rem 0 0', color: '#f87171', fontSize: '0.8rem', fontWeight: 700 }}>
                    {vipError}
                  </p>
                )}
                {vipSuccess && (
                  <p style={{ margin: '0.6rem 0 0', color: '#4ade80', fontSize: '0.8rem', fontWeight: 700 }}>
                    {vipSuccess}
                  </p>
                )}
              </div>
            </div>
          ) : !hasGenerated ? (
            /* ETAPA 1: DIAGNÓSTICO DO ALUNO (ROTINA & DIFICULDADES) */
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <span
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    color: '#86efac',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                  }}
                >
                  Etapa 1 de 2 • Diagnóstico Tático
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#f8fafc', margin: '0.6rem 0 0.25rem' }}>
                  Como é a sua rotina diária de preparação?
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
                  O algoritmo distribuirá as disciplinas do Edital da PMPE para máxima retenção neural.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Horas Líquidas por Dia */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.75rem' }}>
                    <Clock size={18} color="#22c55e" />
                    <span>Quantas horas líquidas você consegue estudar por dia?</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.6rem' }}>
                    {[1, 2, 3, 4, 6].map((hrs) => (
                      <button
                        key={hrs}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setDailyHours(hrs);
                        }}
                        style={{
                          padding: '0.8rem 0.5rem',
                          borderRadius: '12px',
                          background: dailyHours === hrs ? 'rgba(34, 197, 94, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                          border: dailyHours === hrs ? '2px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: dailyHours === hrs ? '#4ade80' : '#cbd5e1',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                        }}
                      >
                        {hrs}h por dia
                      </button>
                    ))}
                  </div>
                </div>

                {/* Regime de Trabalho */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.75rem' }}>
                    <Brain size={18} color="#f59e0b" />
                    <span>Qual é o seu regime de trabalho atual?</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.6rem' }}>
                    {[
                      { id: 'comercial', label: 'Horário Comercial', desc: 'Trabalha 8h de seg a sex' },
                      { id: 'escala_12x36', label: 'Escala 12x36', desc: 'Planta 1 dia e folga outro' },
                      { id: 'escala_24x72', label: 'Escala 24x72', desc: 'Planta 1 e folga 3 dias' },
                      { id: 'integral', label: 'Dedicação Exclusiva', desc: 'Foco 100% no concurso' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setRoutine(item.id as RoutineType);
                        }}
                        style={{
                          padding: '0.85rem',
                          borderRadius: '12px',
                          textAlign: 'left',
                          background: routine === item.id ? 'rgba(234, 179, 8, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                          border: routine === item.id ? '2px solid #eab308' : '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#ffffff',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontWeight: 800, fontSize: '0.85rem', color: routine === item.id ? '#fbbf24' : '#f8fafc' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '0.2rem' }}>{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Matérias de Maior Dificuldade */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.75rem' }}>
                    <Flame size={18} color="#ef4444" />
                    <span>Em quais matérias você sente MAIOR dificuldade? (O app priorizará no ciclo):</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.6rem' }}>
                    {[
                      { id: 'raciocinio', label: '🧠 RLM & Probabilidade' },
                      { id: 'portugues', label: '📖 Língua Portuguesa' },
                      { id: 'constitucional', label: '⚖️ Direito Constitucional' },
                      { id: 'direitos_humanos', label: '🕊️ Direitos Humanos & CADH' },
                      { id: 'legislacao_pmpe', label: '🛡️ Legislação da PMPE (Estatuto)' },
                      { id: 'legislacao_extravagante', label: '🚨 Legislação Extravagante' },
                      { id: 'informatica', label: '💻 Noções de Informática' },
                      { id: 'historia_pe', label: '🦁 História de Pernambuco' },
                    ].map((sub) => {
                      const isSelected = difficultySubjects.includes(sub.id);
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => toggleDifficulty(sub.id)}
                          style={{
                            padding: '0.7rem 0.8rem',
                            borderRadius: '10px',
                            textAlign: 'left',
                            background: isSelected ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                            border: isSelected ? '1.5px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                            color: isSelected ? '#fca5a5' : '#cbd5e1',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* BOTÃO GERAR CRONOGRAMA */}
                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleGenerateSchedule}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '1rem 2.25rem',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
                    }}
                  >
                    <Sparkles size={20} />
                    <span>Construir Meu Cronograma de Estudos</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ETAPA 2: GRADE INTERATIVA DO CRONOGRAMA PERSONALIZADO */
            <div>
              {/* Abas dos Dias da Semana */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.45rem',
                  overflowX: 'auto',
                  paddingBottom: '0.75rem',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {scheduleData.map((d, idx) => {
                  const isActive = activeTabDay === idx;
                  const completedCount = d.blocks.filter((b) => b.completed).length;
                  const totalBlocks = d.blocks.length;

                  return (
                    <button
                      key={d.dayName}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setActiveTabDay(idx);
                      }}
                      style={{
                        padding: '0.65rem 0.95rem',
                        borderRadius: '12px',
                        background: isActive
                          ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                          : 'rgba(255, 255, 255, 0.05)',
                        border: isActive ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.12)',
                        color: isActive ? '#ffffff' : '#cbd5e1',
                        cursor: 'pointer',
                        flexShrink: 0,
                        textAlign: 'center',
                        minWidth: '100px',
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>
                        {d.shortName}
                      </div>
                      <div style={{ fontSize: '0.68rem', opacity: 0.85, marginTop: '2px' }}>
                        {completedCount}/{totalBlocks} feitos
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detalhes do Dia Selecionado */}
              {scheduleData[activeTabDay] && (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      padding: '0.85rem 1.25rem',
                      borderRadius: '14px',
                    }}
                  >
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: '#f8fafc' }}>
                        📅 {scheduleData[activeTabDay].dayName}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: '#86efac' }}>
                        {scheduleData[activeTabDay].isRestDay
                          ? 'Dia de descanso ativo, sono e recuperação neural.'
                          : scheduleData[activeTabDay].isSimuladoDay
                          ? 'Dia de simulação de prova real sob pressão de tempo!'
                          : 'Ciclo Intercalado: Alternância entre Teoria, Questões no App e Revisão.'}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setHasGenerated(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.45rem 0.8rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#cbd5e1',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      <RefreshCw size={13} />
                      <span>Reconfigurar Rotina</span>
                    </button>
                  </div>

                  {/* Lista de Blocos do Dia */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {scheduleData[activeTabDay].blocks.map((block) => (
                      <div
                        key={block.id}
                        onClick={() => toggleBlockCompleted(activeTabDay, block.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem 1.25rem',
                          borderRadius: '14px',
                          background: block.completed
                            ? 'rgba(34, 197, 94, 0.12)'
                            : 'rgba(24, 34, 27, 0.8)',
                          border: block.completed
                            ? '1.5px solid #22c55e'
                            : '1px solid rgba(71, 85, 105, 0.45)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        <div
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '8px',
                            border: block.completed ? 'none' : '2px solid #64748b',
                            background: block.completed ? '#22c55e' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {block.completed && <CheckCircle2 size={18} color="#ffffff" />}
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                padding: '0.15rem 0.5rem',
                                borderRadius: '6px',
                                background:
                                  block.type === 'questoes'
                                    ? 'rgba(56, 189, 248, 0.2)'
                                    : block.type === 'revisao'
                                    ? 'rgba(245, 158, 11, 0.2)'
                                    : block.type === 'simulado'
                                    ? 'rgba(239, 68, 68, 0.2)'
                                    : 'rgba(168, 85, 247, 0.2)',
                                color:
                                  block.type === 'questoes'
                                    ? '#38bdf8'
                                    : block.type === 'revisao'
                                    ? '#fbbf24'
                                    : block.type === 'simulado'
                                    ? '#f87171'
                                    : '#c084fc',
                                textTransform: 'uppercase',
                              }}
                            >
                              {block.type}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
                              ⏱️ {block.timeSlot} ({block.durationMin} min)
                            </span>
                          </div>

                          <div
                            style={{
                              fontSize: '0.98rem',
                              fontWeight: 800,
                              color: block.completed ? '#86efac' : '#f8fafc',
                              textDecoration: block.completed ? 'line-through' : 'none',
                            }}
                          >
                            {block.subject}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                            {block.topic}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dica Neurocientífica de Fixação */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      padding: '0.85rem 1.15rem',
                      background: 'rgba(234, 179, 8, 0.08)',
                      border: '1px solid rgba(234, 179, 8, 0.25)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                    }}
                  >
                    <Brain size={22} color="#fbbf24" style={{ flexShrink: 0 }} />
                    <p style={{ margin: 0, fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                      <strong>Dica de Ouro de Neurociência:</strong> Para cada 50 minutos de estudo concentrado,
                      faça uma pausa de 10 minutos (Técnica Pomodoro). Durante a pausa, beba água e não mexa em redes
                      sociais para permitir a consolidação sináptica na memória de longo prazo.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
