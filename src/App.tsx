import { useState, useEffect, useMemo, useCallback } from 'react';
import type { GameMode, CategoryId, QuizQuestion, MatchPair, Flashcard, PlayerStats, Achievement } from './types/game';
import {
  CATEGORIES,
  INITIAL_QUESTIONS,
  INITIAL_MATCH_PAIRS,
  INITIAL_FLASHCARDS,
  BOSS_ENEMIES,
  INITIAL_ACHIEVEMENTS,
} from './data/studyData';
import { sound } from './utils/sound';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { ModeSelector } from './components/ModeSelector';
import { SurvivalGame } from './components/SurvivalGame';
import { MatchGame } from './components/MatchGame';
import { BossBattleGame } from './components/BossBattleGame';
import { FlashcardGame } from './components/FlashcardGame';
import { TacticalMazeGame } from './components/TacticalMazeGame';
import { AchievementsModal } from './components/AchievementsModal';
import { DeckCreatorModal } from './components/DeckCreatorModal';
import { SummaryModal } from './components/SummaryModal';
import { LoginScreen } from './components/LoginScreen';
import { DailyMotivationModal } from './components/DailyMotivationModal';
import { StudentAnalyticsModal } from './components/StudentAnalyticsModal';
import { CommanderAccessModal } from './components/CommanderAccessModal';
import { CommanderDashboardView } from './components/CommanderDashboardView';
import { StudyScheduleModal } from './components/StudyScheduleModal';
import { QuestionPdfModal } from './components/QuestionPdfModal';
import { PromotionalAdModal } from './components/PromotionalAdModal';
import { OrderRequestsModal } from './components/OrderRequestsModal';
import { MilitaryLawBookletModal } from './components/MilitaryLawBookletModal';
import { MilitaryLawBookletView } from './components/MilitaryLawBookletView';
import { SnesPoliceActionGame } from './components/SnesPoliceActionGame';
import { PelotaoCompetitionView } from './components/PelotaoCompetitionView';
import { MistakeNotebookModal } from './components/MistakeNotebookModal';
import { SundaySimuladoModal } from './components/SundaySimuladoModal';
import { PlatoonDuelModal } from './components/PlatoonDuelModal';
import { InvestorPitchView } from './components/InvestorPitchView';
import { LogicalReasoningGuideView } from './components/LogicalReasoningGuideView';
import { RedacaoPmpeModal } from './components/RedacaoPmpeModal';
import { ProficiencyRadarModal } from './components/ProficiencyRadarModal';
import { TafSimulatorModal } from './components/TafSimulatorModal';
import { AocpPegadinhasModal } from './components/AocpPegadinhasModal';
import { MilitaryCertificateModal } from './components/MilitaryCertificateModal';
import { RetaFinalModal } from './components/RetaFinalModal';
import { TacticalPodcastModal } from './components/TacticalPodcastModal';
import { getDailyMotivationalQuote, type MotivationalQuote } from './utils/motivationalQuotes';
import { recordStudentLogin, recordQuizCompletion } from './utils/studentAnalytics';
import { fetchRegistryFromCloud, isMasterUser, checkActiveSessionValidity } from './utils/authManager';
import { updateAndCalculateStreak } from './utils/studentStreak';
import { recordLiveQuestionAnswer, isRondaNoturnaActive } from './utils/competitionManager';
import { recordMistake, getPendingMistakesCount } from './utils/errorNotebookManager';
import { Swords, ArrowRight, ShieldCheck, Shield, Calendar, FileText, Smartphone, AlertTriangle, BookOpen, Bell, Trophy, Target, Award, Flame, Gamepad2, BrainCircuit } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  // Autenticação e Controle de Acesso
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    try {
      const local = localStorage.getItem('pmpe_auth_user');
      if (local) return JSON.parse(local).name;
      const session = sessionStorage.getItem('pmpe_auth_user');
      if (session) return JSON.parse(session).name;
    } catch {
      // fallback
    }
    return null;
  });

  // Gerador de chave exclusiva por usuário para isolamento absoluto de conquistas e dados
  const getUserStatsKey = useCallback((userName: string | null | undefined): string => {
    if (!userName || !userName.trim()) return 'pmpe_user_stats_guest';
    const safe = userName.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '_');
    return `pmpe_user_stats_${safe}`;
  }, []);

  // Retorna estado 100% limpo e zerado para novos recrutas (0 conquistas, 0 XP, nível 1)
  const getCleanPlayerStats = useCallback((): PlayerStats => ({
    xp: 0,
    level: 1,
    streakDays: 1,
    totalAnswered: 0,
    correctAnswers: 0,
    bossesDefeated: 0,
    matchesCompleted: 0,
    flashcardsMastered: 0,
    achievements: INITIAL_ACHIEVEMENTS.map((ach) => ({
      ...ach,
      unlocked: false,
      unlockedAt: undefined,
    })),
  }), []);

  // Carrega os dados específicos e isolados do usuário
  const loadUserStats = useCallback((userName: string | null | undefined): PlayerStats => {
    if (!userName) return getCleanPlayerStats();
    const userKey = getUserStatsKey(userName);
    let saved = localStorage.getItem(userKey);

    // Migração suave exclusiva para a conta titular do Comandante Gean (preserva histórico)
    if (!saved && isMasterUser(userName)) {
      saved = localStorage.getItem('neuroquest_pmpe_stats');
    }

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const existingMap = new Map<string, Achievement>(
          (parsed.achievements || []).map((a: Achievement) => [a.id, a])
        );
        const mergedAchievements = INITIAL_ACHIEVEMENTS.map((initAch) => {
          const found = existingMap.get(initAch.id);
          return found
            ? { ...initAch, unlocked: !!found.unlocked, unlockedAt: found.unlockedAt }
            : { ...initAch, unlocked: false, unlockedAt: undefined };
        });
        const realStreak = userName ? updateAndCalculateStreak(userName) : 1;
        return {
          xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
          level: typeof parsed.level === 'number' ? parsed.level : 1,
          streakDays: typeof parsed.streakDays === 'number' ? Math.max(parsed.streakDays, realStreak) : realStreak,
          totalAnswered: typeof parsed.totalAnswered === 'number' ? parsed.totalAnswered : 0,
          correctAnswers: typeof parsed.correctAnswers === 'number' ? parsed.correctAnswers : 0,
          bossesDefeated: typeof parsed.bossesDefeated === 'number' ? parsed.bossesDefeated : 0,
          matchesCompleted: typeof parsed.matchesCompleted === 'number' ? parsed.matchesCompleted : 0,
          flashcardsMastered: typeof parsed.flashcardsMastered === 'number' ? parsed.flashcardsMastered : 0,
          achievements: mergedAchievements,
        };
      } catch {
        // Fallback
      }
    }

    // Novo usuário cadastrado: 100% zerado e sem conquistas prévias!
    return getCleanPlayerStats();
  }, [getUserStatsKey, getCleanPlayerStats]);

  // Estado do Jogador carregado EXCLUSIVAMENTE para o usuário logado
  const [stats, setStats] = useState<PlayerStats>(() => loadUserStats(currentUser));

  // Som mudo/desmudo
  const [isMuted, setIsMuted] = useState(() => sound.getIsMuted());

  // Perguntas, Matches e Flashcards (incluindo Decks customizados do localStorage)
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => {
    const saved = localStorage.getItem('neuroquest_pmpe_custom_q');
    return saved ? [...INITIAL_QUESTIONS, ...JSON.parse(saved)] : INITIAL_QUESTIONS;
  });

  const [matchPairs, setMatchPairs] = useState<MatchPair[]>(() => {
    const saved = localStorage.getItem('neuroquest_pmpe_custom_m');
    return saved ? [...INITIAL_MATCH_PAIRS, ...JSON.parse(saved)] : INITIAL_MATCH_PAIRS;
  });

  const [flashcards, setFlashcards] = useState<Flashcard[]>(() => {
    const saved = localStorage.getItem('neuroquest_pmpe_custom_fc');
    return saved ? [...INITIAL_FLASHCARDS, ...JSON.parse(saved)] : INITIAL_FLASHCARDS;
  });

  // Navegação e Filtros PMPE
  const [activeMode, setActiveMode] = useState<GameMode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all' | 'bloco_1' | 'bloco_2' | 'bloco_3'>('all');
  const [selectedSimulado, setSelectedSimulado] = useState<string>('all');
  const [gameSessionNonce, setGameSessionNonce] = useState(0);

  // Modais
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isDeckCreatorOpen, setIsDeckCreatorOpen] = useState(false);
  const [isMotivationModalOpen, setIsMotivationModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  const [isCommanderScreenOpen, setIsCommanderScreenOpen] = useState(false);
  const [pendingUsersCount, setPendingUsersCount] = useState(0);
  const [dailyQuote, setDailyQuote] = useState<MotivationalQuote>(() => getDailyMotivationalQuote());
  const [summaryData, setSummaryData] = useState<{
    title: string;
    score: number;
    xpEarned: number;
    statsDetail: { label: string; value: string | number }[];
  } | null>(null);

  // Novos Recursos: Cronograma VIP, PDF de Questões, Anúncio e Canal de Pedidos
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isLawBookletOpen, setIsLawBookletOpen] = useState(false);
  const [isPromoAdOpen, setIsPromoAdOpen] = useState(false);
  const [isOrderRequestsOpen, setIsOrderRequestsOpen] = useState(false);
  const [isCompetitionModalOpen, setIsCompetitionModalOpen] = useState(false);
  const [isMistakeNotebookOpen, setIsMistakeNotebookOpen] = useState(false);
  const [isSundaySimuladoOpen, setIsSundaySimuladoOpen] = useState(false);
  const [isPlatoonDuelOpen, setIsPlatoonDuelOpen] = useState(false);
  const [isActionGameOpen, setIsActionGameOpen] = useState(false);
  const [isInvestorPitchOpen, setIsInvestorPitchOpen] = useState(false);
  const [isRlmGuideOpen, setIsRlmGuideOpen] = useState(false);
  const [isRedacaoOpen, setIsRedacaoOpen] = useState(false);
  const [isRadarOpen, setIsRadarOpen] = useState(false);
  const [isTafOpen, setIsTafOpen] = useState(false);
  const [isPegadinhasOpen, setIsPegadinhasOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isRetaFinalOpen, setIsRetaFinalOpen] = useState(false);
  const [isPodcastOpen, setIsPodcastOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pendingMistakesCount, setPendingMistakesCount] = useState<number>(0);
  const [isRondaNoturna, setIsRondaNoturna] = useState<boolean>(() => isRondaNoturnaActive());
  const [sessionKickedReason, setSessionKickedReason] = useState<{ title: string; message: string } | null>(null);

  // Monitora prontuário de erros e status da Ronda Noturna
  useEffect(() => {
    if (currentUser) {
      setPendingMistakesCount(getPendingMistakesCount(currentUser));
    }
    const updateRonda = () => {
      setIsRondaNoturna(isRondaNoturnaActive());
    };
    updateRonda();
    const interval = setInterval(updateRonda, 15000);
    return () => clearInterval(interval);
  }, [currentUser]);

  // Monitoramento em tempo real do Alarme de Estudos (100% Gratuito - Voz & Push)
  const [showStudyAlarmBanner, setShowStudyAlarmBanner] = useState(false);
  const [activeAlarmTime, setActiveAlarmTime] = useState<string>('');

  // Monitoramento em segundo plano do Alarme de Estudos (100% Grátis)
  useEffect(() => {
    if (!currentUser) return;

    const checkStudyTime = () => {
      const savedTime = localStorage.getItem(`pmpe_alert_time_${currentUser}`);
      if (!savedTime) return;

      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, '0');
      const currentHHMM = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
      const todayStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
      const triggerKey = `pmpe_alert_fired_${currentUser}_${todayStr}_${currentHHMM}`;

      if (currentHHMM === savedTime && !sessionStorage.getItem(triggerKey)) {
        sessionStorage.setItem(triggerKey, 'true');
        setActiveAlarmTime(savedTime);
        setShowStudyAlarmBanner(true);
        sound.playLevelUp();

        // 1. Áudio Falado Sintetizado (Nativo e Grátis)
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(
            `Atenção soldado ${currentUser}! São ${savedTime} em ponto. Chegou o seu horário de estudar para o concurso da Polícia Militar de Pernambuco! Foco na farda!`
          );
          utterance.lang = 'pt-BR';
          utterance.rate = 1.05;
          utterance.pitch = 1.0;
          window.speechSynthesis.speak(utterance);
        }

        // 2. Notificação Push do Navegador (Se permitida)
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('🚨 [MISSÃO PMPE 2026] HORA DE ESTUDAR!', {
            body: `Soldado ${currentUser}, são ${savedTime}h! Hora da sua sessão tática de questões do Edital PMPE!`,
            icon: '/favicon.ico'
          });
        }
      }
    };

    checkStudyTime();
    const interval = setInterval(checkStudyTime, 15000);
    return () => clearInterval(interval);
  }, [currentUser]);

  // Exibe o mini anúncio promocional da mentoria para o guerreiro
  useEffect(() => {
    if (currentUser) {
      const shown = sessionStorage.getItem('pmpe_promo_ad_shown');
      if (!shown) {
        const timer = setTimeout(() => {
          setIsPromoAdOpen(true);
          sessionStorage.setItem('pmpe_promo_ad_shown', 'true');
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentUser]);

  // Monitorar solicitações pendentes de acesso para a conta Titular do Comandante Gean
  const checkPendingUsers = async () => {
    try {
      const reg = await fetchRegistryFromCloud();
      const count = Object.values(reg).filter((u) => u.status === 'pending').length;
      setPendingUsersCount(count);
    } catch {
      // fallback
    }
  };

  useEffect(() => {
    if (currentUser && isMasterUser(currentUser)) {
      checkPendingUsers();
      const interval = setInterval(checkPendingUsers, 12000);
      return () => clearInterval(interval);
    }
  }, [currentUser]);

  // Trava de Dispositivo Único & Sessão Ativa (Anti-Fraude e Anti-Compartilhamento)
  useEffect(() => {
    if (!currentUser || isMasterUser(currentUser)) return;

    const checkSession = async () => {
      const check = await checkActiveSessionValidity(currentUser);
      if (!check.valid) {
        sound.playError();
        handleLogout();
        setSessionKickedReason({
          title: '🚫 SESSÃO ENCERRADA: OUTRO DISPOSITIVO CONECTADO',
          message: `Sua conta foi acessada em outro aparelho (${check.deviceName || 'Celular/Computador'}). Por motivo de segurança e combate a fraudes (compartilhamento indevido de conta), o acesso neste aparelho foi encerrado. Cada aluno pode utilizar apenas 1 dispositivo ativo por vez.`
        });
      }
    };

    checkSession();
    const interval = setInterval(checkSession, 6000);

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        checkSession();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleVisibility);
    };
  }, [currentUser]);

  // Registrar login inicial do aluno se já autenticado
  useEffect(() => {
    if (currentUser) {
      recordStudentLogin(currentUser);
    }
  }, [currentUser]);

  // Persistir stats EXCLUSIVAMENTE na chave do usuário atual logado
  useEffect(() => {
    if (currentUser) {
      const userKey = getUserStatsKey(currentUser);
      localStorage.setItem(userKey, JSON.stringify(stats));
    }
  }, [stats, currentUser, getUserStatsKey]);

  // Atualizar e calcular Sequência Diária (Streak / Fogo Sagrado) Militar isolada por guerreiro
  useEffect(() => {
    if (!currentUser) return;
    try {
      const realStreak = updateAndCalculateStreak(currentUser);
      setStats((prev) => {
        if (prev.streakDays !== realStreak) {
          return { ...prev, streakDays: realStreak };
        }
        return prev;
      });
      if (realStreak >= 3) unlockAchievement('streak-3');
      if (realStreak >= 7) unlockAchievement('streak-7');
      if (realStreak >= 14) unlockAchievement('streak-14');
      if (realStreak >= 30) unlockAchievement('streak-30');
    } catch {
      // fallback
    }
  }, [currentUser]);

  // Função para adicionar XP e recalcular nível
  const addXp = useCallback((amount: number) => {
    setStats((prev) => {
      const newXp = prev.xp + amount;
      const newLevel = Math.floor(newXp / 100) + 1;
      const leveledUp = newLevel > prev.level;

      if (leveledUp) {
        sound.playLevelUp();
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.35 },
          colors: ['#06b6d4', '#fbbf24', '#10b981', '#ec4899', '#f97316']
        });
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
      };
    });
  }, []);

  // Elevação de nível e registro em tempo real a cada resposta dada
  const handleQuestionAnswered = useCallback((isCorrect: boolean, xpGained: number, questionId?: string) => {
    // 1. TELEMETRIA EM TEMPO REAL: Registra a resposta imediatamente na nuvem KVdb e na competição semanal
    if (currentUser) {
      recordLiveQuestionAnswer(currentUser, isCorrect);
      // Registra automaticamente no Caderno de Erros se errar a questão
      if (!isCorrect && questionId) {
        recordMistake(currentUser, questionId);
        setPendingMistakesCount(getPendingMistakesCount(currentUser));
      }
    }

    setStats((prev) => {
      const newXp = prev.xp + xpGained;
      const newLevel = Math.floor(newXp / 100) + 1;
      const leveledUp = newLevel > prev.level;

      if (leveledUp) {
        sound.playLevelUp();
        confetti({
          particleCount: 130,
          spread: 90,
          origin: { y: 0.35 },
          colors: ['#06b6d4', '#fbbf24', '#10b981', '#ec4899', '#f97316']
        });
      }

      const nextTotal = prev.totalAnswered + 1;
      const nextCorrect = prev.correctAnswers + (isCorrect ? 1 : 0);

      // Verificação automática de marcos militares (patentes por volume, XP e vigília)
      const toUnlock: string[] = ['recruit', 'first-win'];
      if (nextTotal >= 25) toUnlock.push('soldier-25');
      if (nextTotal >= 50) toUnlock.push('cabo-50');
      if (nextTotal >= 100) toUnlock.push('sargento-100');
      if (nextTotal >= 200) toUnlock.push('subtenente-200');
      if (nextTotal >= 350) toUnlock.push('aspirante-350');
      if (nextTotal >= 500) toUnlock.push('oficial-500');
      if (nextTotal >= 1000) toUnlock.push('coronel-1000');

      if (newXp >= 1000) toUnlock.push('xp-cadet-1000');
      if (newXp >= 5000) toUnlock.push('xp-capitao-5000');
      if (newXp >= 10000) toUnlock.push('xp-general-10000');

      const hour = new Date().getHours();
      if (hour < 8) toUnlock.push('early-bird');
      if (hour >= 21 || hour < 4) toUnlock.push('night-patrol');

      let hasNewUnlock = false;
      let updatedAch = prev.achievements;
      for (const achId of toUnlock) {
        const item = updatedAch.find((a) => a.id === achId);
        if (item && !item.unlocked) {
          hasNewUnlock = true;
          updatedAch = updatedAch.map((a) =>
            a.id === achId ? { ...a, unlocked: true, unlockedAt: new Date().toLocaleDateString('pt-BR') } : a
          );
        }
      }

      if (hasNewUnlock) {
        sound.playMilitaryAchievement();
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        totalAnswered: nextTotal,
        correctAnswers: nextCorrect,
        achievements: updatedAch,
      };
    });
  }, [currentUser]);

  // Desbloquear Conquista
  const unlockAchievement = (id: string) => {
    setStats((prev) => {
      const ach = prev.achievements.find((a) => a.id === id);
      if (ach && !ach.unlocked) {
        sound.playMilitaryAchievement();
        const updated = prev.achievements.map((a) =>
          a.id === id ? { ...a, unlocked: true, unlockedAt: new Date().toLocaleDateString('pt-BR') } : a
        );
        return { ...prev, achievements: updated };
      }
      return prev;
    });
  };

  // Filtrar dados pela categoria/bloco E pelo simulado/semana selecionado E pela busca textual
  const filterByBlockOrCat = useCallback(<T extends { id?: string; categoryId: CategoryId; bloco?: string; simuladoOrigem?: string; topicoEdital?: string; materiaNome?: string }>(item: T) => {
    // 0. Filtro por Busca Textual Tática (Item 3)
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const anyItem = item as any;
      const inStem = anyItem.question ? anyItem.question.toLowerCase().includes(q) : false;
      const inFront = anyItem.front ? anyItem.front.toLowerCase().includes(q) : false;
      const inBack = anyItem.back ? anyItem.back.toLowerCase().includes(q) : false;
      const inLeft = anyItem.left ? anyItem.left.toLowerCase().includes(q) : false;
      const inRight = anyItem.right ? anyItem.right.toLowerCase().includes(q) : false;
      const inMateria = anyItem.materiaNome ? anyItem.materiaNome.toLowerCase().includes(q) : false;
      const inTopico = anyItem.topicoEdital ? anyItem.topicoEdital.toLowerCase().includes(q) : false;
      const inTag = anyItem.tag ? anyItem.tag.toLowerCase().includes(q) : false;
      const inOptions = Array.isArray(anyItem.options) ? anyItem.options.some((opt: string) => opt.toLowerCase().includes(q)) : false;

      if (!inStem && !inFront && !inBack && !inLeft && !inRight && !inMateria && !inTopico && !inTag && !inOptions) {
        return false;
      }
    }

    // 1. Filtro por Categoria ou Bloco Oficial PMPE
    let matchCat = true;
    if (selectedCategory === 'bloco_1') matchCat = item.bloco === 'bloco_1';
    else if (selectedCategory === 'bloco_2') matchCat = item.bloco === 'bloco_2';
    else if (selectedCategory === 'bloco_3') matchCat = item.bloco === 'bloco_3';
    else if (selectedCategory !== 'all') matchCat = item.categoryId === selectedCategory;

    // 2. Filtro por Origem do Simulado / Semana
    let matchSim = true;
    if (selectedSimulado === 'caderno_direitos_humanos') matchSim = item.categoryId === 'humanos_leis' || (item.topicoEdital ? item.topicoEdital.includes('Direitos Humanos') || item.topicoEdital.includes('Pacto') : false);
    else if (selectedSimulado === 'caderno_leg_extravagante') matchSim = item.categoryId === 'legislacao_extravagante' || (item.simuladoOrigem ? item.simuladoOrigem.includes('Extravagante') : false);
    else if (selectedSimulado === 'caderno_rlm_probabilidade') matchSim = item.categoryId === 'raciocinio' || (item.simuladoOrigem ? item.simuladoOrigem.includes('Probabilidade') : false);
    else if (selectedSimulado === 'caderno_informatica') matchSim = item.categoryId === 'informatica';
    else if (selectedSimulado === 'caderno_historia_pe') matchSim = item.categoryId === 'historia_pe';
    else if (selectedSimulado === 'caderno_const_pmpe') matchSim = item.categoryId === 'constitucional';
    else if (selectedSimulado === 'caderno_portugues_aocp') matchSim = item.categoryId === 'portugues';
    else if (selectedSimulado === 'caderno_pmpe_estatuto') matchSim = item.categoryId === 'legislacao_pmpe' || (item.topicoEdital ? item.topicoEdital.includes('Estatuto') : false) || (item.materiaNome ? item.materiaNome.includes('PMPE') : false);
    else if (selectedSimulado === 'edital_200') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('Edital 200') : (item.id ? item.id.startsWith('ed200-') : true);
    else if (selectedSimulado === 'semana_1') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('1ª Semana') : true;
    else if (selectedSimulado === 'semana_2') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('2ª Semana') : true;
    else if (selectedSimulado === 'semana_3') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('3ª Semana') : true;
    else if (selectedSimulado === 'semana_4') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('4ª Semana') : true;
    else if (selectedSimulado === 'nuce_completo') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('Completo') : true;
    else if (selectedSimulado === 'aocp_elite') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('Elite') : true;
    else if (selectedSimulado === 'aocp_especial') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('Especial') : true;
    else if (selectedSimulado === 'banco_bloco1') matchSim = item.simuladoOrigem === 'banco_bloco1' || item.bloco === 'bloco_1';
    else if (selectedSimulado === 'banco_bloco2') matchSim = item.simuladoOrigem === 'banco_bloco2' || item.bloco === 'bloco_2';
    else if (selectedSimulado === 'banco_bloco3') matchSim = item.simuladoOrigem === 'banco_bloco3' || item.bloco === 'bloco_3';
    else if (selectedSimulado === 'caderno_400_novas_edital') matchSim = (item.id ? item.id.includes('_50_edital_') : false);

    return matchCat && matchSim;
  }, [selectedCategory, selectedSimulado, searchQuery]);

  const filteredQuestions = useMemo(() => questions.filter(filterByBlockOrCat), [questions, filterByBlockOrCat]);
  const filteredMatchPairs = useMemo(() => matchPairs.filter(filterByBlockOrCat), [matchPairs, filterByBlockOrCat]);
  const filteredFlashcards = useMemo(() => flashcards.filter(filterByBlockOrCat), [flashcards, filterByBlockOrCat]);

  const handleToggleMute = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) sound.playClick();
  };

  // Handlers para adicionar itens customizados
  const handleAddQuestion = (newQ: QuizQuestion) => {
    const updated = [...questions, newQ];
    setQuestions(updated);
    const customOnly = updated.filter((q) => q.categoryId === 'custom');
    localStorage.setItem('neuroquest_pmpe_custom_q', JSON.stringify(customOnly));
    unlockAchievement('creator-badge');
  };

  const handleAddMatchPair = (newM: MatchPair) => {
    const updated = [...matchPairs, newM];
    setMatchPairs(updated);
    const customOnly = updated.filter((m) => m.categoryId === 'custom');
    localStorage.setItem('neuroquest_pmpe_custom_m', JSON.stringify(customOnly));
    unlockAchievement('creator-badge');
  };

  const handleAddFlashcard = (newFc: Flashcard) => {
    const updated = [...flashcards, newFc];
    setFlashcards(updated);
    const customOnly = updated.filter((f) => f.categoryId === 'custom');
    localStorage.setItem('neuroquest_pmpe_custom_fc', JSON.stringify(customOnly));
    unlockAchievement('creator-badge');
  };

  // Fim do Simulado Quiz
  const handleQuizFinish = (result: {
    score: number;
    xpEarned: number;
    maxCombo: number;
    correctCount: number;
    totalCount: number;
    subjectBreakdown?: Record<string, { total: number; correct: number }>;
    timeSpentSeconds?: number;
    averageTimePerQuestion?: number;
  }) => {
    // Adiciona bônus de conclusão
    addXp(result.xpEarned);

    if (currentUser) {
      const simLabel = selectedSimulado === 'edital_200'
        ? 'Caderno Oficial Edital AOCP (100Q)'
        : selectedSimulado === 'aocp_elite'
          ? 'Caderno Elite AOCP'
          : selectedSimulado === 'aocp_especial'
            ? 'Simulado Especial AOCP'
            : selectedSimulado !== 'all'
              ? `Simulado ${selectedSimulado.replace('_', ' ').toUpperCase()}`
              : 'Simulado Geral PMPE';

      recordQuizCompletion(currentUser, {
        simuladoName: simLabel,
        totalAnswered: result.totalCount,
        correctAnswers: result.correctCount,
        score: result.score,
        xpEarned: result.xpEarned,
        subjectBreakdown: result.subjectBreakdown || {},
        timeSpentSeconds: result.timeSpentSeconds,
        averageTimePerQuestion: result.averageTimePerQuestion,
      });
    }

    unlockAchievement('first-win');
    if (result.maxCombo >= 5) unlockAchievement('combo-5');
    if (result.maxCombo >= 10) unlockAchievement('combo-10');
    if (result.maxCombo >= 15) unlockAchievement('combo-15');
    if (result.maxCombo >= 20) unlockAchievement('combo-20');
    if (result.maxCombo >= 30) unlockAchievement('combo-30');
    if (result.correctCount >= 10) unlockAchievement('survival-veteran');
    if (result.correctCount >= 25) unlockAchievement('survival-25');
    if (result.correctCount >= 50) unlockAchievement('survival-50');

    if (result.totalCount >= 5 && result.correctCount === result.totalCount) {
      unlockAchievement('first-perfect');
    }

    if (result.subjectBreakdown) {
      if ((result.subjectBreakdown['historia_pe']?.correct || 0) > 0) unlockAchievement('pe-master');
      if ((result.subjectBreakdown['constitucional']?.correct || 0) > 0) unlockAchievement('cf-guardian');
      if ((result.subjectBreakdown['humanos_leis']?.correct || 0) > 0) {
        unlockAchievement('dh-patriot');
        unlockAchievement('dh-dimensoes-master');
        unlockAchievement('pacto-san-jose');
      }
      if ((result.subjectBreakdown['legislacao_extravagante']?.correct || 0) > 0) {
        unlockAchievement('planalto-specialist');
        unlockAchievement('penal-tactical');
      }
      if ((result.subjectBreakdown['raciocinio']?.correct || 0) > 0) {
        unlockAchievement('rlm-strategist');
        unlockAchievement('sniper-calculos');
        unlockAchievement('probabilidade-mestre');
      }
      if ((result.subjectBreakdown['informatica']?.correct || 0) > 0) {
        unlockAchievement('info-operator');
        unlockAchievement('cyber-pmpe');
      }
      if ((result.subjectBreakdown['portugues']?.correct || 0) > 0) unlockAchievement('portugues-mestre');
      if ((result.subjectBreakdown['legislacao_pmpe']?.correct || 0) > 0) unlockAchievement('estatuto-expert');
      if (result.maxCombo >= 10) unlockAchievement('promocao-oficialato');
    }

    const accuracy = Math.round((result.correctCount / Math.max(1, result.totalCount)) * 100);
    const passCutoff = accuracy >= 30;
    const wrongCount = Math.max(0, result.totalCount - result.correctCount);
    const timeDisplay = result.timeSpentSeconds
      ? `${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s (méd. ${result.averageTimePerQuestion || 0}s/q)`
      : 'Ritmo Padrão';

    setSummaryData({
      title: accuracy >= 70 ? 'Aprovado com Excelência PMPE!' : passCutoff ? 'Acima do Ponto de Corte (30%)!' : 'Abaixo da Nota de Corte',
      score: result.score,
      xpEarned: result.xpEarned,
      statsDetail: [
        { label: 'Aproveitamento', value: `${accuracy}%` },
        { label: 'Corte do Edital (mín. 30%)', value: passCutoff ? '✅ Atingido' : '⚠️ Não atingido' },
        { label: 'Acertos da Rodada', value: `${result.correctCount} / ${result.totalCount} questões` },
        { label: 'Erros da Rodada', value: `${wrongCount} questões` },
        { label: 'Tempo & Ritmo de Prova', value: timeDisplay },
        { label: 'Maior Sequência de Acertos', value: `${result.maxCombo}x consecutivas` },
      ],
    });
  };

  // Fim do Modo Match
  const handleMatchFinish = (result: {
    score: number;
    xpEarned: number;
    timeTaken: number;
    mistakes: number;
    completedLevels?: number[];
  }) => {
    // XP já foi concedido gradualmente a cada nível superado via onAwardXp
    setStats((prev) => ({
      ...prev,
      matchesCompleted: prev.matchesCompleted + 1,
    }));

    unlockAchievement('first-win');
    if (result.mistakes === 0) {
      unlockAchievement('matrix-master');
    }
    if (result.completedLevels?.includes(1)) unlockAchievement('match-level-1');
    if (result.completedLevels?.includes(2)) unlockAchievement('match-level-2');
    if (result.completedLevels?.includes(3)) unlockAchievement('match-level-3');
    if (result.completedLevels?.includes(4)) unlockAchievement('match-level-4');
    if (result.completedLevels?.includes(5)) unlockAchievement('match-level-5');

    setSummaryData({
      title: 'Conexão Tática Estabelecida!',
      score: result.score,
      xpEarned: result.xpEarned,
      statsDetail: [
        { label: 'Tempo de Resposta', value: `${result.timeTaken} segundos` },
        { label: 'Falhas de Conexão', value: result.mistakes === 0 ? 'Nenhuma (Perfeito!)' : `${result.mistakes} falhas` },
      ],
    });
  };

  // Fim do Modo Boss Battle (Banca AOCP)
  const handleBossFinish = (result: {
    won: boolean;
    xpEarned: number;
    score: number;
    bossDefeatedName?: string;
  }) => {
    addXp(result.xpEarned);

    if (result.won) {
      setStats((prev) => ({
        ...prev,
        bossesDefeated: prev.bossesDefeated + 1,
      }));
      unlockAchievement('boss-slayer');
      if (result.bossDefeatedName?.includes('Corte') || result.bossDefeatedName?.includes('Fantasma')) {
        unlockAchievement('boss-phantom');
      }
      if (result.bossDefeatedName?.includes('CFSD') || result.bossDefeatedName?.includes('Instrutor')) {
        unlockAchievement('boss-cfsd');
      }
    }

    setSummaryData({
      title: result.won ? 'Banca AOCP Superada!' : 'A Banca te Derrubou desta vez...',
      score: result.score,
      xpEarned: result.xpEarned,
      statsDetail: [
        { label: 'Resultado da Operação', value: result.won ? 'Vitória & Rumo à Farda!' : 'Revisar conteúdo e tentar de novo' },
        { label: 'Oponente', value: result.bossDefeatedName || 'Banca Examinadora' },
      ],
    });
  };

  // Fim do Modo Flashcards
  const handleFlashcardFinish = (result: {
    cardsMastered: number;
    totalCards: number;
    xpEarned: number;
  }) => {
    addXp(result.xpEarned);
    setStats((prev) => ({
      ...prev,
      flashcardsMastered: prev.flashcardsMastered + result.cardsMastered,
    }));

    unlockAchievement('first-win');
    if (result.cardsMastered >= 4) {
      unlockAchievement('card-scholar');
    }
    if (stats.flashcardsMastered + result.cardsMastered >= 30) {
      unlockAchievement('card-vault-30');
    }
    if (stats.flashcardsMastered + result.cardsMastered >= 100) {
      unlockAchievement('card-vault-100');
    }

    setSummaryData({
      title: 'Lei Seca Revisada com Sucesso!',
      score: result.cardsMastered * 100,
      xpEarned: result.xpEarned,
      statsDetail: [
        { label: 'Artigos Dominados', value: `${result.cardsMastered} de ${result.totalCards} cards` },
        { label: 'Grau de Memorização', value: `${Math.round((result.cardsMastered / Math.max(1, result.totalCards)) * 100)}%` },
      ],
    });
  };

  // Handlers de Login e Logout
  const handleLoginSuccess = (name: string) => {
    recordStudentLogin(name);
    setCurrentUser(name);
    // Carrega EXCLUSIVAMENTE os dados e conquistas deste usuário
    const userStats = loadUserStats(name);
    setStats(userStats);
    setDailyQuote(getDailyMotivationalQuote());
    setIsMotivationModalOpen(true);

    // Exibe sempre o anúncio promocional VIP para o guerreiro recém-logado
    setTimeout(() => {
      setIsPromoAdOpen(true);
    }, 700);
  };

  const handleLogout = () => {
    localStorage.removeItem('pmpe_auth_user');
    sessionStorage.removeItem('pmpe_auth_user');
    sessionStorage.removeItem('pmpe_promo_ad_shown');
    setCurrentUser(null);
    setActiveMode(null);
    // Reseta estado para 100% limpo ao desconectar
    setStats(getCleanPlayerStats());
  };

  // Se o guerreiro ainda não autenticou, exibe a tela de login tático
  if (!currentUser) {
    return (
      <>
        {sessionKickedReason && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0, 0, 0, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              maxWidth: '520px',
              width: '100%',
              background: 'linear-gradient(135deg, rgba(38, 14, 14, 0.98), rgba(18, 6, 6, 0.98))',
              border: '2px solid #ef4444',
              borderRadius: '24px',
              padding: '2.25rem 2rem',
              textAlign: 'center',
              boxShadow: '0 0 50px rgba(239, 68, 68, 0.4)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1.5px solid #ef4444'
              }}>
                <Smartphone size={32} color="#f87171" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.75rem', textTransform: 'uppercase' }}>
                {sessionKickedReason.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#fca5a5', lineHeight: 1.55, margin: '0 0 1.5rem' }}>
                {sessionKickedReason.message}
              </p>
              <button
                onClick={() => setSessionKickedReason(null)}
                style={{
                  padding: '0.85rem 2rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4)'
                }}
              >
                Entendido • Fazer Novo Login
              </button>
            </div>
          </div>
        )}
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  const hasCustomDecks = questions.some((q) => q.categoryId === 'custom');

  // TELA DEDICADA E COMPLETA DE COMANDO GERAL DE ALUNOS (EXCLUSIVO COMANDANTE GEAN)
  if (isCommanderScreenOpen && currentUser && isMasterUser(currentUser)) {
    return (
      <CommanderDashboardView
        onBackToApp={() => setIsCommanderScreenOpen(false)}
        onRefreshPendingCount={checkPendingUsers}
        onOpenInvestorPitch={() => {
          setIsCommanderScreenOpen(false);
          setIsInvestorPitchOpen(true);
        }}
      />
    );
  }

  // TELA DEDICADA E COMPLETA DE COMPETIÇÃO SEMANAL DO PELOTÃO (PÁGINA INTEIRA)
  if (isCompetitionModalOpen) {
    return (
      <PelotaoCompetitionView
        onBackToApp={() => setIsCompetitionModalOpen(false)}
        currentUser={currentUser || ''}
      />
    );
  }

  // TELA DEDICADA E COMPLETA DO VADE MECUM & CADERNO DE LEIS SECAS (TELA CHEIA)
  if (isLawBookletOpen) {
    return (
      <MilitaryLawBookletView
        onBackToApp={() => setIsLawBookletOpen(false)}
      />
    );
  }

  // TELA DEDICADA E COMPLETA DO JOGO DE AÇÃO POLICIAL 16-BIT (ESTILO THE SHADOW SNES)
  if (isActionGameOpen) {
    return (
      <SnesPoliceActionGame
        onBackToApp={() => setIsActionGameOpen(false)}
      />
    );
  }

  return (
    <div className="app-container">
      {/* Top HUD Header */}
      <Header
        stats={stats}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
        onOpenDeckCreator={() => setIsDeckCreatorOpen(true)}
        onResetToHome={() => {
          setActiveMode(null);
          setSummaryData(null);
        }}
        userName={currentUser}
        onLogout={handleLogout}
        onOpenAnalytics={() => setIsAnalyticsModalOpen(true)}
        onOpenMotivation={() => setIsMotivationModalOpen(true)}
        onOpenCommanderAccess={() => setIsCommanderScreenOpen(true)}
        pendingUsersCount={pendingUsersCount}
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
        onOpenPdfExport={() => setIsPdfModalOpen(true)}
        onOpenLawBooklet={() => setIsLawBookletOpen(true)}
        onOpenOrders={() => setIsOrderRequestsOpen(true)}
        onOpenCompetition={() => setIsCompetitionModalOpen(true)}
        onOpenMistakes={() => setIsMistakeNotebookOpen(true)}
        mistakesCount={pendingMistakesCount}
        onOpenSundaySimulado={() => setIsSundaySimuladoOpen(true)}
        isRondaNoturnaActive={isRondaNoturna}
        onOpenActionGame={() => setIsActionGameOpen(true)}
        onOpenInvestorPitch={() => setIsInvestorPitchOpen(true)}
        onOpenRlmGuide={() => setIsRlmGuideOpen(true)}
        onOpenRedacao={() => setIsRedacaoOpen(true)}
        onOpenRadar={() => setIsRadarOpen(true)}
        onOpenFlashcards={() => setActiveMode('flashcards')}
        onOpenTaf={() => setIsTafOpen(true)}
        onOpenPegadinhas={() => setIsPegadinhasOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenRetaFinal={() => setIsRetaFinalOpen(true)}
        onOpenPodcast={() => setIsPodcastOpen(true)}
      />

      {/* Roteamento de Telas */}
      {activeMode === null && (
        <>
          {/* BANNER DE ACESSO DIRETO À TELA DE COMANDO (EXCLUSIVO GEAN - PADRÃO BOPE) */}
          {isMasterUser(currentUser) && (
            <div 
              onClick={() => {
                sound.playClick();
                setIsCommanderScreenOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '0.95rem 1.35rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1.5px solid rgba(212, 175, 55, 0.45)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1f232c, #13151b)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)'
                }}>
                  <Shield color="#d4af37" size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                      Sala de Comando Geral & Gestão de Alunos
                    </span>
                    <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                      COMANDANTE GEAN
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.15rem' }}>
                    Clique aqui para gerenciar os alunos matriculados, certidões militares, bloqueios e senhas
                  </div>
                </div>
              </div>

              <button 
                className="btn-primary" 
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.84rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #c59b27, #967117)',
                  border: 'none',
                  color: '#07080a',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}
              >
                Abrir Tela de Gestão de Alunos ➔
              </button>
            </div>
          )}

          {/* BANNER OFICIAL: COMPETIÇÃO SEMANAL DO PELOTÃO (PADRÃO BOPE) */}
          <div 
            onClick={() => {
              sound.playLevelUp();
              setIsCompetitionModalOpen(true);
            }}
            style={{
              cursor: 'pointer',
              padding: '1rem 1.4rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
              border: '1.5px solid rgba(212, 175, 55, 0.45)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.25rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                color: '#d4af37'
              }}>
                <Trophy size={24} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.08rem', fontWeight: 900, color: '#ffffff' }}>
                    🏆 Competição Semanal do Pelotão PMPE 2026
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.35)', color: '#d4af37', fontWeight: 900 }}>
                    DISPUTA OFICIAL
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Premiação Oficial estipulada pelo Comandante Gean para o 1º Colocado no fechamento de Sábado!
                </div>
              </div>
            </div>

            <button 
              className="btn-primary" 
              style={{
                padding: '0.55rem 1.25rem',
                fontSize: '0.86rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #c59b27, #967117)',
                border: 'none',
                color: '#07080a',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              <span>Ver Ranking & Premiação</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* BANNER DINÂMICO: RONDA NOTURNA (PADRÃO TÁTICO BOPE) */}
          {isRondaNoturna && (
            <div
              onClick={() => {
                sound.playClick();
                setIsCompetitionModalOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '0.95rem 1.35rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #150a0a 0%, #0d0808 100%)',
                border: '1.5px solid rgba(220, 38, 38, 0.55)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(220, 38, 38, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem',
                animation: 'pulse 2s infinite'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#1f0d0d',
                    border: '1px solid rgba(220, 38, 38, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    flexShrink: 0
                  }}
                >
                  🚨
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 900, color: '#ffffff' }}>
                      RONDA NOTURNA OPERACIONAL EM ANDAMENTO
                    </span>
                    <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.55rem', borderRadius: '6px', background: '#dc2626', color: '#ffffff', fontWeight: 900 }}>
                      2X PONTOS ATIVOS
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#fca5a5', marginTop: '0.15rem' }}>
                    De 21:00 às 23:59, todas as questões certas contam o DOBRO de pontos na competição semanal!
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fca5a5', fontWeight: 900, fontSize: '0.84rem' }}>
                <span>Ver Placar ao Vivo</span>
                <ArrowRight size={15} />
              </div>
            </div>
          )}

          {/* CABEÇALHO ORGANIZADO: CENTRAL OPERACIONAL DO SOLDADO */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '0.65rem',
            marginBottom: '0.75rem',
            padding: '0 0.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.2rem', color: '#d4af37' }}>⚡</span>
              <div>
                <h2 style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  Central Operacional do Soldado
                </h2>
                <p style={{ fontSize: '0.76rem', color: '#a1a1aa' }}>
                  Vade Mecum em tela cheia, caderno de erros, cronograma VIP e simulados AOCP
                </p>
              </div>
            </div>
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.12)', color: '#d4af37', fontWeight: 800, border: '1px solid rgba(212, 175, 55, 0.35)' }}>
              8 MÓDULOS TÁTICOS
            </span>
          </div>

          {/* CARDS DE AÇÃO RÁPIDA: CRONOGRAMA, PDF, LEIS, ERROS & SIMULADO DOMINGO */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            {/* Card 1: Cronograma Inteligente */}
            <div
              onClick={() => {
                sound.playClick();
                setIsScheduleModalOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1px solid #27272a',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <Calendar size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Cronograma de Estudos
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    VIP
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Metodologia neurocientífica de alta retenção adaptada à sua rotina (AOCP)
                </div>
              </div>
            </div>

            {/* Card 2: Baixar Caderno em PDF */}
            <div
              onClick={() => {
                sound.playClick();
                setIsPdfModalOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1px solid #27272a',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <FileText size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Baixar Caderno em PDF
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    IMPRIMIR
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Gere listas de questões prontas para imprimir com folha de respostas
                </div>
              </div>
            </div>

            {/* Card 3: Caderno de Leis Secas do Edital PMPE (Vade Mecum Tático em Tela Cheia) */}
            <div
              onClick={() => {
                sound.playClick();
                setIsLawBookletOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1px solid #27272a',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <BookOpen size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Caderno de Leis Secas
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    TELA CHEIA • VADE MECUM
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Planalto atualizado, Artigos na íntegra, Crimes Hediondos, Direitos Humanos (DUDH/CADH), Estatuto PMPE e CF/88
                </div>
              </div>
            </div>

            {/* Card 4: Caderno de Erros Inteligente (Prontuário de Falhas AOCP) */}
            <div
              onClick={() => {
                sound.playClick();
                setIsMistakeNotebookOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: pendingMistakesCount > 0 ? '1.5px solid rgba(220, 38, 38, 0.65)' : '1px solid #27272a',
                boxShadow: pendingMistakesCount > 0
                  ? '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 18px rgba(220, 38, 38, 0.2)'
                  : '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.7)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(220, 38, 38, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = pendingMistakesCount > 0 ? 'rgba(220, 38, 38, 0.65)' : '#27272a';
                e.currentTarget.style.boxShadow = pendingMistakesCount > 0 ? '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 18px rgba(220, 38, 38, 0.2)' : '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #220e0e, #140808)',
                border: '1px solid rgba(220, 38, 38, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(220, 38, 38, 0.3)',
                flexShrink: 0
              }}>
                <Target size={24} color="#dc2626" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Caderno de Erros Inteligente
                  </span>
                  <span style={{
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    background: pendingMistakesCount > 0 ? '#dc2626' : 'rgba(212, 175, 55, 0.15)',
                    border: pendingMistakesCount > 0 ? '1px solid #ef4444' : '1px solid rgba(212, 175, 55, 0.35)',
                    color: pendingMistakesCount > 0 ? '#ffffff' : '#d4af37',
                    fontWeight: 900
                  }}>
                    {pendingMistakesCount > 0 ? `${pendingMistakesCount} FALHAS` : '0 FALHAS'}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Retreine taticamente apenas as questões que errou até alcançar 100% de domínio
                </div>
              </div>
            </div>

            {/* Card 5: Simulado Oficial de Domingo (60 Questões Espelho AOCP) */}
            <div
              onClick={() => {
                sound.playClick();
                setIsSundaySimuladoOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1px solid #27272a',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <Award size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Simulado Oficial de Domingo
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    60Q AOCP
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Espelho fiel da prova: 6 matérias balanceadas, 4h de prova e boletim militar
                </div>
              </div>
            </div>

            {/* Card 6: Operação Policial 16-Bit */}
            <div
              onClick={() => {
                try { sound.playGunshot38(); } catch {}
                setIsActionGameOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1px solid #27272a',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <Gamepad2 size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Operação Rua 16-Bit
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    AÇÃO TÁTICA
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Descontraia do estudo: Ação pura PMPE vs Bandidos, armas, tiros e chefão estilo The Shadow!
                </div>
              </div>
            </div>

            {/* Card 7: Guia de Raciocínio Lógico Proposicional (RLM) */}
            <div
              onClick={() => {
                sound.playClick();
                setIsRlmGuideOpen(true);
              }}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1px solid #27272a',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#27272a';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <BrainCircuit size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Guia Raciocínio Lógico (RLM)
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    MANÉ & TABELA
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Tabela verdade interativa, o que é proposição, regra do MANÉ, De Morgan e equivalências
                </div>
              </div>
            </div>

            {/* Card 8: Apresentação do Investidor & Projeção SaaS (CLIQUE DIRETO COM POPUP INSTANTÂNEO) */}
            <div
              onClick={() => {
                try {
                  sound.playClick();
                } catch {}
                setIsInvestorPitchOpen(true);
              }}
              role="button"
              tabIndex={0}
              style={{
                cursor: 'pointer',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
                border: '1.5px solid rgba(212, 175, 55, 0.45)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#d4af37';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 18px rgba(212, 175, 55, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.55)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(0, 0, 0, 0.6)',
                flexShrink: 0
              }}>
                <Award size={24} color="#d4af37" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#ffffff' }}>
                    Apresentação Investidores 2026
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.2)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.4)', fontWeight: 900 }}>
                    PITCH KEYNOTE
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Demonstração dos módulos, simulador interativo de receita SaaS (MRR/ARR) e roteiro do fundador
                </div>
              </div>
            </div>
          </div>

          {/* Seletor de Categoria, Semanas e Blocos PMPE */}
          <CategorySelector
            categories={CATEGORIES}
            selectedCategoryId={selectedCategory}
            onSelectCategory={setSelectedCategory}
            hasCustomDecks={hasCustomDecks}
            selectedSimulado={selectedSimulado}
            onSelectSimulado={setSelectedSimulado}
            totalFilteredQuestions={filteredQuestions.length}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* BANNER MILITAR: DISPUTA DE PELOTÃO • DUELO 1 VS 1 TÁTICO */}
          <div 
            onClick={() => {
              sound.playGunshot38();
              setIsPlatoonDuelOpen(true);
            }}
            style={{
              cursor: 'pointer',
              padding: '1.15rem 1.4rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #101217 0%, #151720 100%)',
              border: '1.5px solid rgba(212, 175, 55, 0.45)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              marginBottom: '0.75rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1f232c, #13151b)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                flexShrink: 0
              }}>
                <Swords size={24} color="#d4af37" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    ⚔️ DUELO 1 VS 1 DO PELOTÃO (5 TIROS TÁTICOS)
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.35)', fontWeight: 900 }}>
                    DISPUTA DIRETA
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#a1a1aa', marginTop: '0.2rem' }}>
                  Desafie qualquer colega do pelotão em um tiroteio rápido de 5 questões AOCP e veja quem é mais rápido e certeiro!
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  setIsAnalyticsModalOpen(true);
                }}
                style={{
                  padding: '0.55rem 0.95rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  color: '#f4f4f5',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                📊 Telemetria do Pelotão
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.15rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #c59b27, #967117)',
                color: '#07080a',
                fontWeight: 900,
                fontSize: '0.84rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}>
                <span>Iniciar Duelo 1 vs 1</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>

          {/* Seletor de Modo de Jogo */}
          <ModeSelector
            onSelectMode={(mode) => {
              setGameSessionNonce((prev) => prev + 1);
              setActiveMode(mode);
            }}
          />
        </>
      )}

      {/* NOVO MODO: OPERAÇÃO SOBREVIVÊNCIA (TIRO CERTO) */}
      {activeMode === 'survival' && (
        <SurvivalGame
          key={`survival-${selectedCategory}-${selectedSimulado}-${gameSessionNonce}`}
          questions={filteredQuestions.length > 0 ? filteredQuestions : questions}
          userName={currentUser || ''}
          onFinish={handleQuizFinish}
          onExit={() => setActiveMode(null)}
          onAwardXp={addXp}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}

      {/* MODO 2: CONEXÃO TÁTICA (MATCH) */}
      {activeMode === 'match' && (
        <MatchGame
          key={`match-${selectedCategory}-${selectedSimulado}-${gameSessionNonce}`}
          pairs={filteredMatchPairs.length > 0 ? filteredMatchPairs : matchPairs}
          onFinish={handleMatchFinish}
          onExit={() => setActiveMode(null)}
          onAwardXp={addXp}
        />
      )}

      {/* MODO 3: OPERAÇÃO CFSD (BOSS AOCP) */}
      {activeMode === 'battle' && (
        <BossBattleGame
          key={`battle-${selectedCategory}-${selectedSimulado}-${gameSessionNonce}`}
          questions={filteredQuestions.length > 0 ? filteredQuestions : questions}
          boss={BOSS_ENEMIES[0]}
          onFinish={handleBossFinish}
          onExit={() => setActiveMode(null)}
          onAwardXp={addXp}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}

      {/* MODO 4: COFRE DA LEI SECA (FLASHCARDS 3D) */}
      {activeMode === 'flashcards' && (
        <FlashcardGame
          key={`flashcards-${selectedCategory}-${selectedSimulado}-${gameSessionNonce}`}
          cards={filteredFlashcards.length > 0 ? filteredFlashcards : flashcards}
          onFinish={handleFlashcardFinish}
          onExit={() => setActiveMode(null)}
        />
      )}

      {/* NOVO MODO: LABIRINTO TÁTICO POLICIAL */}
      {activeMode === 'maze' && (
        <TacticalMazeGame
          key={`maze-${selectedCategory}-${gameSessionNonce}`}
          questions={questions}
          selectedCategory={selectedCategory}
          onBack={() => setActiveMode(null)}
          onFinishGame={(summary) => {
            setSummaryData(summary);
            if (summary.xpEarned) addXp(summary.xpEarned);
          }}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}

      {/* MODAL: MURAL DE CONQUISTAS */}
      {isAchievementsOpen && (
        <AchievementsModal
          achievements={stats.achievements}
          onClose={() => setIsAchievementsOpen(false)}
        />
      )}

      {/* MODAL: ESTÚDIO DE CRIAÇÃO DE QUESTÕES */}
      {isDeckCreatorOpen && (
        <DeckCreatorModal
          onClose={() => setIsDeckCreatorOpen(false)}
          onAddQuestion={handleAddQuestion}
          onAddMatchPair={handleAddMatchPair}
          onAddFlashcard={handleAddFlashcard}
          customQuestionsCount={questions.filter((q) => q.categoryId === 'custom').length}
        />
      )}

      {/* MODAL: RESUMO PÓS-SIMULADO */}
      {summaryData && (
        <SummaryModal
          title={summaryData.title}
          score={summaryData.score}
          xpEarned={summaryData.xpEarned}
          statsDetail={summaryData.statsDetail}
          onPlayAgain={() => {
            setGameSessionNonce((prev) => prev + 1);
            setSummaryData(null);
          }}
          onHome={() => {
            setSummaryData(null);
            setActiveMode(null);
          }}
          onOpenAnalytics={() => setIsAnalyticsModalOpen(true)}
        />
      )}

      {/* MODAL: MENSAGEM MOTIVACIONAL DO DIA */}
      {isMotivationModalOpen && currentUser && (
        <DailyMotivationModal
          userName={currentUser}
          quote={dailyQuote}
          onClose={() => setIsMotivationModalOpen(false)}
        />
      )}

      {/* MODAL: RELATÓRIO E COMPARATIVO DE ALUNOS DO PELOTÃO */}
      {isAnalyticsModalOpen && currentUser && (
        <StudentAnalyticsModal
          currentUserName={currentUser}
          onClose={() => setIsAnalyticsModalOpen(false)}
        />
      )}

      {/* MODAL: CRONOGRAMA INTELIGENTE DE ESTUDOS VIP */}
      <StudyScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        userName={currentUser}
      />

      {/* MODAL: GERADOR & DOWNLOAD DE CADERNO EM PDF */}
      <QuestionPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        questions={questions}
        initialSimuladoId={selectedSimulado}
        userName={currentUser}
      />

      {/* MODAL: MINI ANÚNCIO DE ENTRADA & MONETIZAÇÃO */}
      <PromotionalAdModal
        isOpen={isPromoAdOpen}
        onClose={() => setIsPromoAdOpen(false)}
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
        onOpenOrders={() => setIsOrderRequestsOpen(true)}
      />

      {/* MODAL: CANAL DE PEDIDOS & DÚVIDAS */}
      <OrderRequestsModal
        isOpen={isOrderRequestsOpen}
        onClose={() => setIsOrderRequestsOpen(false)}
        userName={currentUser}
      />

      {/* MODAL: CADERNO DE LEIS SECAS DO EDITAL PMPE (VADE MECUM) */}
      <MilitaryLawBookletModal
        isOpen={isLawBookletOpen}
        onClose={() => setIsLawBookletOpen(false)}
      />

      {/* BANNER / MODAL TÁTICO: ALARME DE ESTUDOS DISPARADO */}
      {showStudyAlarmBanner && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '1rem'
        }}>
          <div style={{
            maxWidth: '500px',
            width: '100%',
            background: 'linear-gradient(145deg, #09130d 0%, #030805 100%)',
            border: '2px solid #22c55e',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(34, 197, 94, 0.35)',
            position: 'relative'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.15)',
              border: '2px solid #22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.15rem',
              boxShadow: '0 0 25px rgba(34, 197, 94, 0.4)'
            }}>
              <Bell size={34} color="#4ade80" />
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.85rem',
              borderRadius: '999px',
              background: 'rgba(234, 179, 8, 0.15)',
              border: '1px solid rgba(234, 179, 8, 0.4)',
              color: '#facc15',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '0.85rem'
            }}>
              🚨 ALARME TÁTICO PROGRAMADO: {activeAlarmTime || '07:00'}H
            </div>

            <h2 style={{
              fontSize: '1.45rem',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '0.65rem',
              letterSpacing: '-0.02em'
            }}>
              HORA DE ESTUDAR, SOLDADO!
            </h2>

            <p style={{
              fontSize: '0.9rem',
              color: '#cbd5e1',
              lineHeight: 1.5,
              marginBottom: '1.4rem'
            }}>
              O seu cronograma marcou este exato horário para o seu treinamento tático da <strong>PMPE 2026</strong>. 
              Sua concorrência não está descansando. Vista a carcaça e inicie agora!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowStudyAlarmBanner(false);
                  setActiveMode('survival');
                  setSelectedCategory('all');
                }}
                style={{
                  padding: '0.85rem 1.4rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  color: '#052e16',
                  fontWeight: 900,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)'
                }}
              >
                <Swords size={18} />
                Entrar em Combate Agora (Iniciar Questões)
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowStudyAlarmBanner(false);
                  setIsScheduleModalOpen(true);
                }}
                style={{
                  padding: '0.7rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#e2e8f0',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                Ver Meu Cronograma de Estudos
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setShowStudyAlarmBanner(false);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '0.35rem'
                }}
              >
                Dispensar Alarme por Hoje
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CADERNO DE ERROS INTELIGENTE (PRONTUÁRIO DE FALHAS AOCP) */}
      {isMistakeNotebookOpen && (
        <MistakeNotebookModal
          onClose={() => {
            setIsMistakeNotebookOpen(false);
            if (currentUser) {
              setPendingMistakesCount(getPendingMistakesCount(currentUser));
            }
          }}
          allQuestions={questions}
          userName={currentUser || 'Soldado'}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}

      {/* MODAL: SIMULADO GERAL OFICIAL DE DOMINGO (60 QUESTÕES ESPELHO AOCP) */}
      {isSundaySimuladoOpen && (
        <SundaySimuladoModal
          onClose={() => setIsSundaySimuladoOpen(false)}
          allQuestions={questions}
          userName={currentUser || 'Soldado'}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}

      {/* MODAL: DUELO 1 VS 1 DO PELOTÃO */}
      {isPlatoonDuelOpen && (
        <PlatoonDuelModal
          onClose={() => setIsPlatoonDuelOpen(false)}
          allQuestions={questions}
          userName={currentUser || 'Soldado'}
          onQuestionAnswered={handleQuestionAnswered}
        />
      )}

      {/* APRESENTAÇÃO KEYNOTE INTERATIVA DO INVESTIDOR */}
      {isInvestorPitchOpen && (
        <InvestorPitchView
          onClose={() => setIsInvestorPitchOpen(false)}
          onStartDemo={() => {
            setIsInvestorPitchOpen(false);
            setActiveMode('survival');
          }}
        />
      )}

      {/* GUIA COMPLETO DE RACIOCÍNIO LÓGICO PROPOSICIONAL (RLM AOCP) */}
      {isRlmGuideOpen && (
        <LogicalReasoningGuideView
          onClose={() => setIsRlmGuideOpen(false)}
          onOpenSurvivalMode={() => {
            setIsRlmGuideOpen(false);
            setActiveMode('survival');
            setSelectedCategory('raciocinio');
          }}
        />
      )}

      {/* MODAL: QG DA REDAÇÃO PMPE (AOCP 20 A 30 LINHAS) */}
      <RedacaoPmpeModal
        isOpen={isRedacaoOpen}
        onClose={() => setIsRedacaoOpen(false)}
        userName={currentUser || 'Soldado PMPE'}
      />

      {/* MODAL: RAIO-X RADAR DE PROFICIÊNCIA */}
      <ProficiencyRadarModal
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
        currentUser={currentUser}
        onNavigateToCategory={(catId) => {
          setSelectedCategory(catId as any);
          setIsRadarOpen(false);
        }}
      />

      {/* MODAL: SIMULADOR OFICIAL DO TAF PMPE */}
      <TafSimulatorModal
        isOpen={isTafOpen}
        onClose={() => setIsTafOpen(false)}
        userName={currentUser || 'Soldado PMPE'}
      />

      {/* MODAL: LABORATÓRIO DE PEGADINHAS DA AOCP */}
      <AocpPegadinhasModal
        isOpen={isPegadinhasOpen}
        onClose={() => setIsPegadinhasOpen(false)}
      />

      {/* MODAL: CERTIFICADO MILITAR DE CONCLUSÃO */}
      <MilitaryCertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        userName={currentUser || 'Soldado Combatente'}
        userLevel={stats.level}
        totalAnswered={stats.totalAnswered}
        correctAnswers={stats.correctAnswers}
        xp={stats.xp}
      />

      {/* MODAL: OPERAÇÃO RETA FINAL (ÚLTIMOS 15 DIAS) */}
      <RetaFinalModal
        isOpen={isRetaFinalOpen}
        onClose={() => setIsRetaFinalOpen(false)}
        userName={currentUser || 'Soldado PMPE'}
        onStartSurvival={(catId) => {
          setSelectedCategory(catId as any);
          setActiveMode('survival');
          setIsRetaFinalOpen(false);
        }}
        onOpenSimulado={() => {
          setIsRetaFinalOpen(false);
          setIsSundaySimuladoOpen(true);
        }}
        onOpenRedacao={() => {
          setIsRetaFinalOpen(false);
          setIsRedacaoOpen(true);
        }}
        onOpenMistakes={() => {
          setIsRetaFinalOpen(false);
          setIsMistakeNotebookOpen(true);
        }}
      />

      {/* MODAL: PODCAST TÁTICO / FLASH-AULAS EM ÁUDIO */}
      {isPodcastOpen && (
        <TacticalPodcastModal
          onClose={() => setIsPodcastOpen(false)}
          userName={currentUser || 'Soldado'}
        />
      )}
    </div>
  );
}

export default App;

