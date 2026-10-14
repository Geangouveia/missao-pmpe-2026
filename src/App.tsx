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
import { AchievementsModal } from './components/AchievementsModal';
import { DeckCreatorModal } from './components/DeckCreatorModal';
import { SummaryModal } from './components/SummaryModal';
import { LoginScreen } from './components/LoginScreen';
import { DailyMotivationModal } from './components/DailyMotivationModal';
import { StudentAnalyticsModal } from './components/StudentAnalyticsModal';
import { CommanderAccessModal } from './components/CommanderAccessModal';
import { getDailyMotivationalQuote, type MotivationalQuote } from './utils/motivationalQuotes';
import { recordStudentLogin, recordQuizCompletion } from './utils/studentAnalytics';
import { fetchRegistryFromCloud, isMasterUser } from './utils/authManager';
import { Swords, ArrowRight } from 'lucide-react';
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

  // Estado do Jogador com mesclagem garantida de todas as 26 conquistas militares
  const [stats, setStats] = useState<PlayerStats>(() => {
    const saved = localStorage.getItem('neuroquest_pmpe_stats');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const existingMap = new Map<string, Achievement>((parsed.achievements || []).map((a: Achievement) => [a.id, a]));
        const mergedAchievements = INITIAL_ACHIEVEMENTS.map((initAch) => {
          const found = existingMap.get(initAch.id);
          return found ? { ...initAch, unlocked: found.unlocked, unlockedAt: found.unlockedAt } : initAch;
        });
        return {
          ...parsed,
          achievements: mergedAchievements,
        };
      } catch {
        // Fallback
      }
    }
    return {
      xp: 0,
      level: 1,
      streakDays: 1,
      totalAnswered: 0,
      correctAnswers: 0,
      bossesDefeated: 0,
      matchesCompleted: 0,
      flashcardsMastered: 0,
      achievements: INITIAL_ACHIEVEMENTS,
    };
  });

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
  const [isCommanderAccessModalOpen, setIsCommanderAccessModalOpen] = useState(false);
  const [pendingUsersCount, setPendingUsersCount] = useState(0);
  const [dailyQuote, setDailyQuote] = useState<MotivationalQuote>(() => getDailyMotivationalQuote());
  const [summaryData, setSummaryData] = useState<{
    title: string;
    score: number;
    xpEarned: number;
    statsDetail: { label: string; value: string | number }[];
  } | null>(null);

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

  // Registrar login inicial do aluno se já autenticado
  useEffect(() => {
    if (currentUser) {
      recordStudentLogin(currentUser);
    }
  }, [currentUser]);

  // Persistir stats
  useEffect(() => {
    localStorage.setItem('neuroquest_pmpe_stats', JSON.stringify(stats));
  }, [stats]);

  // Atualizar e calcular Sequência Diária (Streak) de Estudos Militar
  useEffect(() => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const lastDate = localStorage.getItem('pmpe_last_study_date');

      if (!lastDate) {
        localStorage.setItem('pmpe_last_study_date', today);
        setStats((prev) => ({ ...prev, streakDays: Math.max(1, prev.streakDays) }));
      } else if (lastDate !== today) {
        const last = new Date(lastDate);
        const cur = new Date(today);
        const diffTime = cur.getTime() - last.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Dia consecutivo: aviva a chama e incrementa streak
          const newStreak = (stats.streakDays || 1) + 1;
          localStorage.setItem('pmpe_last_study_date', today);
          setStats((prev) => ({ ...prev, streakDays: newStreak }));
        } else if (diffDays > 1) {
          // Quebrou a sequência
          localStorage.setItem('pmpe_last_study_date', today);
          setStats((prev) => ({ ...prev, streakDays: 1 }));
        }
      }
    } catch {
      // fallback
    }
  }, []);

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
  const handleQuestionAnswered = useCallback((isCorrect: boolean, xpGained: number) => {
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

      // Verificação automática de marcos militares (patentes por volume e vigília)
      const toUnlock: string[] = ['first-win'];
      if (nextTotal >= 25) toUnlock.push('soldier-25');
      if (nextTotal >= 50) toUnlock.push('cabo-50');
      if (nextTotal >= 100) toUnlock.push('sargento-100');
      if (nextTotal >= 200) toUnlock.push('subtenente-200');
      if (nextTotal >= 500) toUnlock.push('oficial-500');

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
  }, []);

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

  // Filtrar dados pela categoria/bloco E pelo simulado/semana selecionado
  const filterByBlockOrCat = useCallback(<T extends { id?: string; categoryId: CategoryId; bloco?: string; simuladoOrigem?: string }>(item: T) => {
    // 1. Filtro por Categoria ou Bloco Oficial PMPE
    let matchCat = true;
    if (selectedCategory === 'bloco_1') matchCat = item.bloco === 'bloco_1';
    else if (selectedCategory === 'bloco_2') matchCat = item.bloco === 'bloco_2';
    else if (selectedCategory === 'bloco_3') matchCat = item.bloco === 'bloco_3';
    else if (selectedCategory !== 'all') matchCat = item.categoryId === selectedCategory;

    // 2. Filtro por Origem do Simulado / Semana
    let matchSim = true;
    if (selectedSimulado === 'edital_200') matchSim = item.simuladoOrigem ? item.simuladoOrigem.includes('Edital 200') : (item.id ? item.id.startsWith('ed200-') : true);
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

    return matchCat && matchSim;
  }, [selectedCategory, selectedSimulado]);

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
    if (result.maxCombo >= 20) unlockAchievement('combo-20');
    if (result.correctCount >= 10) unlockAchievement('survival-veteran');

    if (result.subjectBreakdown) {
      if ((result.subjectBreakdown['historia_pe']?.correct || 0) > 0) unlockAchievement('pe-master');
      if ((result.subjectBreakdown['constitucional']?.correct || 0) > 0) unlockAchievement('cf-guardian');
      if ((result.subjectBreakdown['humanos_leis']?.correct || 0) > 0) unlockAchievement('dh-patriot');
      if ((result.subjectBreakdown['raciocinio']?.correct || 0) > 0) unlockAchievement('rlm-strategist');
      if ((result.subjectBreakdown['informatica']?.correct || 0) > 0) unlockAchievement('info-operator');
      if ((result.subjectBreakdown['portugues']?.correct || 0) > 0) unlockAchievement('portugues-mestre');
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
  }) => {
    addXp(result.xpEarned);
    setStats((prev) => ({
      ...prev,
      matchesCompleted: prev.matchesCompleted + 1,
    }));

    unlockAchievement('first-win');
    if (result.mistakes === 0) {
      unlockAchievement('matrix-master');
    }

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
    setDailyQuote(getDailyMotivationalQuote());
    setIsMotivationModalOpen(true);
    unlockAchievement('recruit');
    if (stats.streakDays >= 3) unlockAchievement('streak-3');
    if (stats.streakDays >= 7) unlockAchievement('streak-7');
  };

  const handleLogout = () => {
    localStorage.removeItem('pmpe_auth_user');
    sessionStorage.removeItem('pmpe_auth_user');
    setCurrentUser(null);
    setActiveMode(null);
  };

  // Se o guerreiro ainda não autenticou, exibe a tela de login tático
  if (!currentUser) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  const hasCustomDecks = questions.some((q) => q.categoryId === 'custom');

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
        onOpenCommanderAccess={() => setIsCommanderAccessModalOpen(true)}
        pendingUsersCount={pendingUsersCount}
      />

      {/* Roteamento de Telas */}
      {activeMode === null && (
        <>
          {/* Seletor de Categoria, Semanas e Blocos PMPE */}
          <CategorySelector
            categories={CATEGORIES}
            selectedCategoryId={selectedCategory}
            onSelectCategory={setSelectedCategory}
            hasCustomDecks={hasCustomDecks}
            selectedSimulado={selectedSimulado}
            onSelectSimulado={setSelectedSimulado}
            totalFilteredQuestions={filteredQuestions.length}
          />

          {/* BANNER MILITAR: DISPUTA DE PELOTÃO & DUELO AMIGÁVEL (6 VAGAS) */}
          <div 
            onClick={() => {
              sound.playGunshot38();
              setIsAnalyticsModalOpen(true);
            }}
            style={{
              cursor: 'pointer',
              padding: '1.15rem 1.4rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(20, 36, 24, 0.95) 0%, rgba(12, 22, 14, 0.98) 100%)',
              border: '2px solid #f59e0b',
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)',
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
              e.currentTarget.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.25)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #b45309, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.6)',
                flexShrink: 0
              }}>
                <Swords size={24} color="#ffffff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                    ⚔️ DISPUTA DE PELOTÃO • DUELO 1 VS 1 (6 VAGAS)
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: '#22c55e', color: '#052e16', fontWeight: 900 }}>
                    AO VIVO EM NUVEM
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
                  Compare seu aproveitamento (% de acerto e disparos) lado a lado com os colegas para evoluir até a farda da PMPE!
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1.15rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #d97706, #b45309)',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '0.84rem',
              boxShadow: '0 0 15px rgba(217, 119, 6, 0.5)'
            }}>
              <span>Abrir Duelo do Pelotão</span>
              <ArrowRight size={15} />
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

      {/* MODAL: COMANDO GERAL DE AUTORIZAÇÃO DE ACESSOS (EXCLUSIVO GEAN) */}
      {isCommanderAccessModalOpen && (
        <CommanderAccessModal
          onClose={() => setIsCommanderAccessModalOpen(false)}
          onRefreshPendingCount={checkPendingUsers}
        />
      )}
    </div>
  );
}

export default App;
