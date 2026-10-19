import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Shield, 
  ExternalLink,
  Volume2,
  VolumeX,
  Trophy,
  Maximize2,
  Minimize2,
  Tv
} from 'lucide-react';
import { sound } from '../utils/sound';

interface SnesPoliceActionGameProps {
  onBackToApp: () => void;
}

// ==========================================
// DEFINIÇÃO DO ARSENAL METAL SLUG 2
// ==========================================
interface WeaponDef {
  id: string;
  name: string;
  code: string;
  damage: number;
  speed: number;
  cooldown: number;
  pellets: number;
  spread: number;
  ammo: number;
  barrelLen: number;
  color: string;
  isHoming?: boolean;
  sound: () => void;
}

const WEAPONS: Record<string, WeaponDef> = {
  PISTOL: {
    id: "PISTOL",
    name: "HANDGUN",
    code: "HG",
    damage: 22,
    speed: 7.5,
    cooldown: 18,
    pellets: 1,
    spread: 0,
    ammo: Infinity,
    barrelLen: 8,
    color: "#facc15",
    sound: () => sound.playPistol()
  },
  HMG: {
    id: "HMG",
    name: "HEAVY MACHINE GUN",
    code: "H",
    damage: 18,
    speed: 9.5,
    cooldown: 5,
    pellets: 1,
    spread: 0.18,
    ammo: 150,
    barrelLen: 15,
    color: "#fbbf24",
    sound: () => sound.playHmg()
  },
  ROCKET: {
    id: "ROCKET",
    name: "ROCKET LAUNCHER",
    code: "R",
    damage: 65,
    speed: 4.8,
    cooldown: 28,
    pellets: 1,
    spread: 0,
    ammo: 25,
    barrelLen: 14,
    color: "#f87171",
    isHoming: true,
    sound: () => sound.playRocket()
  },
  SHOTGUN: {
    id: "SHOTGUN",
    name: "SHOTGUN",
    code: "S",
    damage: 16,
    speed: 7.0,
    cooldown: 34,
    pellets: 6,
    spread: 0.85,
    ammo: 20,
    barrelLen: 13,
    color: "#f3f4f6",
    sound: () => sound.playShotgun()
  }
};

// ==========================================
// ESTÁGIOS OFICIAIS DO JOGO
// ==========================================
interface StageDecoration {
  type: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface StageProp {
  type: string;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  solid?: boolean;
  explosive?: boolean;
  drop?: string;
}

interface StageTrap {
  type: 'steam' | 'spikes' | 'electric';
  x: number;
  y: number;
  w: number;
  h: number;
  timer: number;
  activeTime: number;
  interval: number;
}

interface StageDef {
  id: number;
  title: string;
  skyColor: string;
  groundColor: string;
  curbColor: string;
  ambient: string;
  enemiesToClear: number;
  generateDecorations: () => StageDecoration[];
  generateProps: () => StageProp[];
  generatePOWs: () => Array<{ x: number; y: number; freed: boolean; reward: string }>;
  traps: StageTrap[];
}

const STAGES: StageDef[] = [
  {
    id: 1,
    title: "MISSION 1: ARABIAN RUINS & MARKET",
    skyColor: "#f59e0b",
    groundColor: "#b45309",
    curbColor: "#78350f",
    ambient: "desert",
    enemiesToClear: 7,
    generateDecorations() {
      return [
        { type: "dune", x: 40, y: 70, w: 90, h: 45 },
        { type: "minaret", x: 140, y: 25, w: 35, h: 90 },
        { type: "tent", x: 230, y: 75, w: 75, h: 40 },
        { type: "dune", x: 310, y: 65, w: 80, h: 50 }
      ];
    },
    generateProps() {
      return [
        { type: "crate", x: 110, y: 145, hp: 30, maxHp: 30, drop: "HMG" },
        { type: "wood_barrel", x: 170, y: 185, hp: 20, maxHp: 20, drop: "FOOD" },
        { type: "fuel_barrel", x: 250, y: 155, hp: 25, maxHp: 25, explosive: true },
        { type: "sandbag", x: 290, y: 190, hp: 50, maxHp: 50, solid: true }
      ];
    },
    generatePOWs() {
      return [{ x: 200, y: 150, freed: false, reward: "ROCKET" }];
    },
    traps: []
  },
  {
    id: 2,
    title: "MISSION 2: INDUSTRIAL HARBOR NIGHT",
    skyColor: "#0f172a",
    groundColor: "#1e293b",
    curbColor: "#0f172a",
    ambient: "night",
    enemiesToClear: 9,
    generateDecorations() {
      return [
        { type: "crane", x: 50, y: 20, w: 60, h: 95 },
        { type: "ship_hull", x: 140, y: 55, w: 100, h: 60 },
        { type: "warehouse", x: 260, y: 35, w: 110, h: 80 }
      ];
    },
    generateProps() {
      return [
        { type: "fuel_barrel", x: 100, y: 150, hp: 25, maxHp: 25, explosive: true },
        { type: "crate", x: 180, y: 190, hp: 30, maxHp: 30, drop: "SHOTGUN" },
        { type: "fuel_barrel", x: 270, y: 165, hp: 25, maxHp: 25, explosive: true },
        { type: "crate", x: 310, y: 145, hp: 30, maxHp: 30, drop: "AMMO" }
      ];
    },
    generatePOWs() {
      return [{ x: 220, y: 170, freed: false, reward: "HMG" }];
    },
    traps: [
      { type: "steam", x: 145, y: 135, w: 14, h: 22, timer: 0, activeTime: 70, interval: 140 },
      { type: "steam", x: 235, y: 185, w: 14, h: 22, timer: 70, activeTime: 70, interval: 140 }
    ]
  },
  {
    id: 3,
    title: "MISSION 3: ANCIENT CATACOMBS",
    skyColor: "#1c1917",
    groundColor: "#292524",
    curbColor: "#1c1917",
    ambient: "dungeon",
    enemiesToClear: 11,
    generateDecorations() {
      return [
        { type: "stone_pillar", x: 45, y: 30, w: 20, h: 85 },
        { type: "crypt_arch", x: 120, y: 40, w: 70, h: 75 },
        { type: "stone_pillar", x: 220, y: 30, w: 20, h: 85 },
        { type: "crypt_arch", x: 290, y: 40, w: 70, h: 75 }
      ];
    },
    generateProps() {
      return [
        { type: "stone_pillar_destruct", x: 90, y: 160, hp: 45, maxHp: 45, solid: true, drop: "ROCKET" },
        { type: "crate", x: 160, y: 195, hp: 30, maxHp: 30, drop: "FOOD" },
        { type: "wood_barrel", x: 260, y: 140, hp: 20, maxHp: 20, drop: "AMMO" },
        { type: "stone_pillar_destruct", x: 320, y: 180, hp: 45, maxHp: 45, solid: true }
      ];
    },
    generatePOWs() {
      return [{ x: 190, y: 140, freed: false, reward: "SHOTGUN" }];
    },
    traps: [
      { type: "spikes", x: 130, y: 175, w: 28, h: 14, timer: 0, activeTime: 80, interval: 160 },
      { type: "spikes", x: 220, y: 145, w: 28, h: 14, timer: 80, activeTime: 80, interval: 160 }
    ]
  },
  {
    id: 4,
    title: "FINAL MISSION: MILITARY BASE RAIN",
    skyColor: "#022c22",
    groundColor: "#064e3b",
    curbColor: "#022c22",
    ambient: "rain",
    enemiesToClear: 15,
    generateDecorations() {
      return [
        { type: "radar", x: 50, y: 25, w: 50, h: 90 },
        { type: "bunker", x: 130, y: 45, w: 85, h: 70 },
        { type: "searchlight_tower", x: 245, y: 15, w: 45, h: 100 },
        { type: "barracks", x: 310, y: 45, w: 70, h: 70 }
      ];
    },
    generateProps() {
      return [
        { type: "sandbag", x: 90, y: 150, hp: 60, maxHp: 60, solid: true },
        { type: "fuel_barrel", x: 140, y: 190, hp: 25, maxHp: 25, explosive: true },
        { type: "generator", x: 210, y: 140, hp: 80, maxHp: 80, explosive: true, drop: "HMG" },
        { type: "fuel_barrel", x: 270, y: 165, hp: 25, maxHp: 25, explosive: true },
        { type: "sandbag", x: 310, y: 195, hp: 60, maxHp: 60, solid: true }
      ];
    },
    generatePOWs() {
      return [{ x: 170, y: 145, freed: false, reward: "ROCKET" }];
    },
    traps: [
      { type: "electric", x: 210, y: 148, w: 22, h: 16, timer: 0, activeTime: 60, interval: 120 }
    ]
  }
];

interface GameEnemy {
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
  hp: number;
  maxHp: number;
  facing: number;
  isAttacking: boolean;
  attackTimer: number;
  shootCooldown: number;
  hitFlash: number;
  color: string;
}

interface GameBullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseY: number;
  damage: number;
  color: string;
  isHoming?: boolean;
  fromPlayer: boolean;
  life: number;
}

interface GameGrenade {
  x: number;
  y: number;
  groundY: number;
  vx: number;
  vy: number;
  gravity: number;
  timer: number;
}

interface GameExplosion {
  x: number;
  y: number;
  radius: number;
  life: number;
  maxLife: number;
}

interface GamePickup {
  x: number;
  y: number;
  type: string;
  weapon?: WeaponDef;
}

interface GameRainDrop {
  x: number;
  y: number;
  len: number;
  speed: number;
}

interface GamePow {
  x: number;
  y: number;
  freed: boolean;
  reward: string;
}

export const SnesPoliceActionGame: React.FC<SnesPoliceActionGameProps> = ({ onBackToApp }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Estados React para topo da tela e recordes
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem('pmpe_snes_highscore') || '0', 10);
    } catch {
      return 0;
    }
  });
  const [hudHp, setHudHp] = useState(100);
  const [hudScore, setHudScore] = useState(0);
  const [hudLives, setHudLives] = useState(3);
  const [hudWeapon, setHudWeapon] = useState<string>("HANDGUN");
  const [hudAmmo, setHudAmmo] = useState<string>("INF");
  const [hudGrenades, setHudGrenades] = useState(10);
  const [hudStage, setHudStage] = useState(1);
  const [hudTargets, setHudTargets] = useState(7);
  const [isMuted, setIsMuted] = useState(() => sound.getIsMuted());
  const [isExpanded, setIsExpanded] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(false);

  // Referência interna mutável de 60fps
  const gameRef = useRef({
    currentStageIndex: 0,
    stageDecorations: [] as StageDecoration[],
    props: [] as StageProp[],
    pows: [] as GamePow[],
    enemies: [] as GameEnemy[],
    bullets: [] as GameBullet[],
    grenades: [] as GameGrenade[],
    explosions: [] as GameExplosion[],
    pickups: [] as GamePickup[],
    rainDrops: [] as GameRainDrop[],
    enemiesDefeated: 0,
    isAreaCleared: false,
    goBlinkTimer: 0,
    stageBannerTimer: 160,
    gameWon: false,
    gameOver: false,
    keys: {} as Record<string, boolean>,
    player: {
      name: "SHADOW",
      x: 35,
      y: 170,
      w: 18,
      h: 36,
      speed: 2.1,
      hp: 100,
      maxHp: 100,
      lives: 3,
      score: 0,
      facing: 1,
      isAttacking: false,
      punchCooldown: 0,
      shootCooldown: 0,
      muzzleFlash: 0,
      grenades: 10,
      grenadeCooldown: 0,
      // Dodge Roll
      isRolling: false,
      rollTimer: 0,
      rollDuration: 13,
      rollCooldown: 0,
      rollCooldownTime: 26,
      rollSpeed: 4.2,
      currentWeapon: WEAPONS.PISTOL,
      color: "#3b82f6"
    }
  });

  // Alternar som
  const toggleMute = () => {
    const next = sound.toggleMute();
    setIsMuted(next);
  };

  // Carregar Estágio
  const loadStage = useCallback((index: number) => {
    const g = gameRef.current;
    g.currentStageIndex = index;
    const stage = STAGES[index];
    g.stageDecorations = stage.generateDecorations();
    g.props = stage.generateProps();
    g.pows = stage.generatePOWs();
    g.enemiesDefeated = 0;
    g.isAreaCleared = false;
    g.goBlinkTimer = 0;
    g.stageBannerTimer = 160;

    g.bullets = [];
    g.grenades = [];
    g.pickups = [];
    g.player.x = 25;

    // Função de criação de inimigo
    const createEnemy = (x?: number, y?: number) => {
      const hpMultiplier = 1 + index * 0.35;
      return {
        name: "SOLDIER",
        x: x || 340,
        y: y || (130 + Math.random() * 70),
        w: 18,
        h: 36,
        speed: 1.0 + Math.random() * 0.4,
        hp: Math.round(50 * hpMultiplier),
        maxHp: Math.round(50 * hpMultiplier),
        facing: -1,
        isAttacking: false,
        attackTimer: 0,
        shootCooldown: 80 + Math.random() * 60,
        hitFlash: 0,
        color: index === 0 ? "#b45309" : (index === 1 ? "#334155" : (index === 2 ? "#57534e" : "#065f46"))
      };
    };

    g.enemies = [
      createEnemy(240, 150),
      createEnemy(300, 185)
    ];

    setHudStage(index + 1);
    setHudTargets(stage.enemiesToClear);

    // Locutor Arcade
    sound.voiceAnnounce(stage.title.split(":")[0]);
  }, []);

  // Reiniciar Jogo Completo
  const resetGame = useCallback(() => {
    const g = gameRef.current;
    g.player.hp = 100;
    g.player.lives = 3;
    g.player.score = 0;
    g.player.grenades = 10;
    g.player.currentWeapon = WEAPONS.PISTOL;
    WEAPONS.HMG.ammo = 150;
    WEAPONS.ROCKET.ammo = 25;
    WEAPONS.SHOTGUN.ammo = 20;
    g.gameWon = false;
    g.gameOver = false;
    loadStage(0);
  }, [loadStage]);

  // Estado dos botões ativos (feedback visual nos controles touch)
  const [activeButtons, setActiveButtons] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dpadRef = useRef<HTMLDivElement>(null);
  const dpadTouchIdRef = useRef<number | null>(null);

  // Monitora mudança de fullscreen
  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  // Feedback tátil de vibração para celulares
  const triggerVibrate = (ms = 14) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try { navigator.vibrate(ms); } catch { /* ignore */ }
    }
  };

  // Controles virtuais (Mobile/Touch)
  const setVirtualKey = (key: string, state: boolean) => {
    const k = key.toLowerCase();
    gameRef.current.keys[k] = state;
    setActiveButtons(prev => {
      if (prev[k] === state) return prev;
      return { ...prev, [k]: state };
    });
    if (state) triggerVibrate(15);
  };

  const setVirtualDirection = (up: boolean, down: boolean, left: boolean, right: boolean) => {
    const g = gameRef.current;
    g.keys['arrowup'] = up;
    g.keys['arrowdown'] = down;
    g.keys['arrowleft'] = left;
    g.keys['arrowright'] = right;
    setActiveButtons(prev => ({
      ...prev,
      arrowup: up,
      arrowdown: down,
      arrowleft: left,
      arrowright: right
    }));
    if (up || down || left || right) triggerVibrate(10);
  };

  // Processa o toque no D-Pad (Touch Drag e Ângulo 8-Way)
  const updateDpadFromTouch = (clientX: number, clientY: number) => {
    if (!dpadRef.current) return;
    const rect = dpadRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const dist = Math.hypot(dx, dy);

    if (dist < 14) {
      // Deadzone central
      setVirtualDirection(false, false, false, false);
      return;
    }

    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    let up = false;
    let down = false;
    let left = false;
    let right = false;

    if (angle >= -22.5 && angle < 22.5) {
      right = true;
    } else if (angle >= 22.5 && angle < 67.5) {
      down = true; right = true;
    } else if (angle >= 67.5 && angle < 112.5) {
      down = true;
    } else if (angle >= 112.5 && angle < 157.5) {
      down = true; left = true;
    } else if (angle >= 157.5 || angle < -157.5) {
      left = true;
    } else if (angle >= -157.5 && angle < -112.5) {
      up = true; left = true;
    } else if (angle >= -112.5 && angle < -67.5) {
      up = true;
    } else if (angle >= -67.5 && angle < -22.5) {
      up = true; right = true;
    }

    setVirtualDirection(up, down, left, right);
  };

  const handleDpadTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    dpadTouchIdRef.current = touch.identifier;
    updateDpadFromTouch(touch.clientX, touch.clientY);
  };

  const handleDpadTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (dpadTouchIdRef.current === null) return;
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === dpadTouchIdRef.current) {
        updateDpadFromTouch(touch.clientX, touch.clientY);
        break;
      }
    }
  };

  const handleDpadTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === dpadTouchIdRef.current) {
        dpadTouchIdRef.current = null;
        setVirtualDirection(false, false, false, false);
        break;
      }
    }
  };

  const cycleWeapon = () => {
    triggerVibrate(18);
    const p = gameRef.current.player;
    const available = [WEAPONS.PISTOL];
    if (WEAPONS.HMG.ammo > 0) available.push(WEAPONS.HMG);
    if (WEAPONS.ROCKET.ammo > 0) available.push(WEAPONS.ROCKET);
    if (WEAPONS.SHOTGUN.ammo > 0) available.push(WEAPONS.SHOTGUN);
    const idx = available.indexOf(p.currentWeapon);
    p.currentWeapon = available[(idx + 1) % available.length];
    sound.voiceAnnounce(p.currentWeapon.name);
  };

  // Loop do jogo Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const g = gameRef.current;

    // Inicializa pingos de chuva
    g.rainDrops = [];
    for (let i = 0; i < 70; i++) {
      g.rainDrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: 4 + Math.random() * 5,
        speed: 8 + Math.random() * 4
      });
    }

    // Handlers de teclado
    const handleKeyDown = (e: KeyboardEvent) => {
      g.keys[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      g.keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Carrega primeira fase
    loadStage(0);

    let animId: number;

    const createEnemy = (x?: number, y?: number) => {
      const idx = g.currentStageIndex;
      const hpMultiplier = 1 + idx * 0.35;
      return {
        name: "SOLDIER",
        x: x || 340,
        y: y || (130 + Math.random() * 70),
        w: 18,
        h: 36,
        speed: 1.0 + Math.random() * 0.4,
        hp: Math.round(50 * hpMultiplier),
        maxHp: Math.round(50 * hpMultiplier),
        facing: -1,
        isAttacking: false,
        attackTimer: 0,
        shootCooldown: 80 + Math.random() * 60,
        hitFlash: 0,
        color: idx === 0 ? "#b45309" : (idx === 1 ? "#334155" : (idx === 2 ? "#57534e" : "#065f46"))
      };
    };

    const triggerExplosion = (x: number, y: number, radius: number, damage: number) => {
      sound.playExplosion();
      g.explosions.push({ x, y, radius, life: 14, maxLife: 14 });

      if (damage > 0) {
        g.enemies.forEach(e => {
          if (e.hp <= 0) return;
          const dist = Math.hypot(e.x - x, e.y - y);
          if (dist < radius + 15) {
            e.hp -= damage;
            e.x += Math.sign(e.x - x) * 12;
            e.hitFlash = 6;
            if (e.hp <= 0) killEnemy(e);
          }
        });

        g.props.forEach(p => {
          if (p.hp <= 0) return;
          const dist = Math.hypot(p.x - x, p.y - y);
          if (dist < radius + 10) damageProp(p, damage);
        });

        const distPlayer = Math.hypot(g.player.x - x, g.player.y - y);
        if (distPlayer < radius && !g.player.isRolling) {
          damagePlayer(Math.round(damage * 0.4));
        }
      }
    };

    const damageProp = (prop: StageProp, amount: number) => {
      prop.hp -= amount;
      if (prop.hp <= 0) {
        if (prop.explosive) {
          triggerExplosion(prop.x, prop.y, 45, 95);
        } else {
          sound.playPunch();
        }
        if (prop.drop) {
          const rewardWeapon = WEAPONS[prop.drop];
          if (rewardWeapon) {
            g.pickups.push({ x: prop.x, y: prop.y, type: "WEAPON", weapon: rewardWeapon });
          } else {
            g.pickups.push({ x: prop.x, y: prop.y, type: prop.drop });
          }
        }
      }
    };

    const killEnemy = (enemy: typeof g.enemies[0]) => {
      g.player.score += 100;
      g.enemiesDefeated++;
      triggerExplosion(enemy.x + 8, enemy.y - 12, 16, 0);

      // Recorde local
      if (g.player.score > highScore) {
        setHighScore(g.player.score);
        try {
          localStorage.setItem('pmpe_snes_highscore', String(g.player.score));
        } catch {
          // ignore
        }
      }

      if (Math.random() < 0.45) {
        const type = Math.random() < 0.35 ? "FOOD" : "AMMO";
        g.pickups.push({ x: enemy.x + 6, y: enemy.y, type });
      }
    };

    const damagePlayer = (amount: number) => {
      g.player.hp -= amount;
      sound.playPunch();
      if (g.player.hp <= 0) {
        g.player.lives--;
        if (g.player.lives <= 0) {
          g.gameOver = true;
          sound.voiceAnnounce("GAME OVER");
        } else {
          g.player.hp = g.player.maxHp;
          g.player.x = 25;
          g.player.isRolling = true;
          g.player.rollTimer = 25;
        }
      }
    };

    // UPDATE DO JOGO
    const update = () => {
      if (g.gameOver || g.gameWon) return;

      const currentStage = STAGES[g.currentStageIndex];
      const p = g.player;

      // Atalhos de Armas
      if (g.keys["1"]) p.currentWeapon = WEAPONS.PISTOL;
      if (g.keys["2"] && WEAPONS.HMG.ammo > 0) p.currentWeapon = WEAPONS.HMG;
      if (g.keys["3"] && WEAPONS.ROCKET.ammo > 0) p.currentWeapon = WEAPONS.ROCKET;
      if (g.keys["4"] && WEAPONS.SHOTGUN.ammo > 0) p.currentWeapon = WEAPONS.SHOTGUN;

      // Dodge Roll [C]
      if (g.keys["c"] && !p.isRolling && p.rollCooldown <= 0) {
        p.isRolling = true;
        p.rollTimer = p.rollDuration;
        p.rollCooldown = p.rollCooldownTime;
        p.isAttacking = false;
        sound.playRoll();
      }

      if (p.isRolling) {
        p.x += p.facing * p.rollSpeed;
        if (g.keys["arrowdown"] || g.keys["s"]) p.y += 0.8;
        if (g.keys["arrowup"] || g.keys["w"]) p.y -= 0.8;
        p.rollTimer--;
        if (p.rollTimer <= 0) p.isRolling = false;
      } else {
        let moveX = 0;
        let moveY = 0;
        if (g.keys["arrowright"] || g.keys["d"]) { moveX += p.speed; p.facing = 1; }
        if (g.keys["arrowleft"] || g.keys["a"])  { moveX -= p.speed; p.facing = -1; }
        if (g.keys["arrowdown"] || g.keys["s"])  { moveY += p.speed; }
        if (g.keys["arrowup"] || g.keys["w"])    { moveY -= p.speed; }

        const nextX = p.x + moveX;
        const nextY = p.y + moveY;
        let blocked = false;

        g.props.forEach(prop => {
          if (prop.solid && prop.hp > 0) {
            const inX = nextX + p.w > prop.x - 12 && nextX < prop.x + 12;
            const inY = Math.abs(nextY - prop.y) < 8;
            if (inX && inY) blocked = true;
          }
        });

        if (!blocked) {
          p.x = nextX;
          p.y = nextY;
        }

        // Soco [Z]
        if (g.keys["z"] && !p.isAttacking && p.punchCooldown <= 0) {
          p.isAttacking = true;
          p.punchCooldown = 18;
          sound.playPunch();

          g.enemies.forEach(e => {
            if (e.hp <= 0) return;
            const hitX = p.facing === 1
              ? (e.x > p.x && e.x < p.x + p.w + 24)
              : (e.x < p.x && e.x > p.x - p.w - 24);
            const depth = Math.abs(p.y - e.y) < 10;
            if (hitX && depth) {
              e.hp -= 20;
              e.x += p.facing * 10;
              e.hitFlash = 4;
              if (e.hp <= 0) killEnemy(e);
            }
          });

          g.props.forEach(prop => {
            if (prop.hp <= 0) return;
            const hitX = Math.abs(p.x - prop.x) < 26;
            const depth = Math.abs(p.y - prop.y) < 12;
            if (hitX && depth) damageProp(prop, 25);
          });
        }

        // Tiro [X ou Espaço]
        if ((g.keys["x"] || g.keys[" "]) && p.shootCooldown <= 0) {
          const w = p.currentWeapon;
          if (w.ammo > 0) {
            if (w.ammo !== Infinity) w.ammo--;
            p.shootCooldown = w.cooldown;
            p.muzzleFlash = 3;
            w.sound();

            const spawnX = p.facing === 1 ? p.x + p.w + w.barrelLen : p.x - w.barrelLen;
            const spawnY = p.y - p.h * 0.55;

            for (let i = 0; i < w.pellets; i++) {
              const vy = (Math.random() - 0.5) * w.spread * 4;
              g.bullets.push({
                x: spawnX,
                y: spawnY,
                vx: p.facing * w.speed,
                vy: vy,
                baseY: p.y,
                damage: w.damage,
                color: w.color,
                isHoming: !!w.isHoming,
                fromPlayer: true,
                life: 55
              });
            }

            if (w.ammo <= 0 && w !== WEAPONS.PISTOL) {
              p.currentWeapon = WEAPONS.PISTOL;
            }
          }
        }

        // Lançar Granada [G]
        if (g.keys["g"] && p.grenades > 0 && p.grenadeCooldown <= 0) {
          p.grenades--;
          p.grenadeCooldown = 28;
          g.grenades.push({
            x: p.x + (p.facing === 1 ? p.w : 0),
            y: p.y - 20,
            groundY: p.y,
            vx: p.facing * 3.8,
            vy: -4.4,
            gravity: 0.32,
            timer: 45
          });
        }
      }

      // Limites de tela
      p.x = Math.max(10, Math.min(canvas.width - p.w - 10, p.x));
      p.y = Math.max(125, Math.min(218, p.y));

      // Timers
      if (p.rollCooldown > 0) p.rollCooldown--;
      if (p.punchCooldown > 0) {
        p.punchCooldown--;
        if (p.punchCooldown < 10) p.isAttacking = false;
      }
      if (p.shootCooldown > 0) p.shootCooldown--;
      if (p.grenadeCooldown > 0) p.grenadeCooldown--;
      if (p.muzzleFlash > 0) p.muzzleFlash--;

      // Física das granadas
      for (let i = g.grenades.length - 1; i >= 0; i--) {
        const gr = g.grenades[i];
        gr.x += gr.vx;
        gr.y += gr.vy;
        gr.vy += gr.gravity;

        if (gr.y >= gr.groundY) {
          gr.y = gr.groundY;
          gr.vy = -gr.vy * 0.45;
          gr.vx *= 0.7;
        }

        gr.timer--;
        if (gr.timer <= 0) {
          triggerExplosion(gr.x, gr.groundY, 32, 90);
          g.grenades.splice(i, 1);
        }
      }

      // Projéteis
      for (let i = g.bullets.length - 1; i >= 0; i--) {
        const b = g.bullets[i];
        b.x += b.vx;
        b.y += b.vy;
        b.life--;

        // Mísseis teleguiados
        if (b.isHoming && b.fromPlayer) {
          const target = g.enemies.find(e => e.hp > 0);
          if (target) {
            if (target.y - 15 > b.y) b.y += 1.1;
            if (target.y - 15 < b.y) b.y -= 1.1;
          }
        }

        let consumed = false;

        if (b.fromPlayer) {
          for (let j = 0; j < g.enemies.length; j++) {
            const e = g.enemies[j];
            if (e.hp <= 0) continue;
            const inX = b.x >= e.x && b.x <= e.x + e.w;
            const inY = b.y >= e.y - e.h && b.y <= e.y;
            const depth = Math.abs(b.baseY - e.y) < 14;

            if (inX && inY && depth) {
              e.hp -= b.damage;
              e.x += Math.sign(b.vx) * 6;
              e.hitFlash = 4;
              consumed = true;
              if (b.isHoming) triggerExplosion(b.x, b.y, 20, 30);
              if (e.hp <= 0) killEnemy(e);
              break;
            }
          }

          if (!consumed) {
            for (let k = 0; k < g.props.length; k++) {
              const prop = g.props[k];
              if (prop.hp <= 0) continue;
              const inX = Math.abs(b.x - prop.x) < 14;
              const depth = Math.abs(b.baseY - prop.y) < 14;
              if (inX && depth) {
                damageProp(prop, b.damage);
                consumed = true;
                if (b.isHoming) triggerExplosion(b.x, b.y, 20, 30);
                break;
              }
            }
          }
        } else {
          // Bala inimiga atinge o jogador
          const inX = b.x >= p.x && b.x <= p.x + p.w;
          const inY = b.y >= p.y - p.h && b.y <= p.y;
          const depth = Math.abs(b.baseY - p.y) < 12;

          if (inX && inY && depth) {
            consumed = true;
            if (!p.isRolling) {
              damagePlayer(b.damage);
            }
          }
        }

        if (consumed || b.life <= 0 || b.x < 0 || b.x > canvas.width) {
          g.bullets.splice(i, 1);
        }
      }

      // Inimigos
      g.enemies.forEach(e => {
        if (e.hp <= 0) return;
        if (e.hitFlash > 0) e.hitFlash--;

        const dx = p.x - e.x;
        const dy = p.y - e.y;
        e.facing = dx >= 0 ? 1 : -1;

        if (Math.abs(dx) > 35) e.x += Math.sign(dx) * e.speed;
        if (Math.abs(dy) > 4)  e.y += Math.sign(dy) * (e.speed * 0.7);

        // Tiro à distância
        e.shootCooldown--;
        if (e.shootCooldown <= 0 && Math.abs(dy) < 14 && Math.abs(dx) < 160) {
          e.shootCooldown = 90 + Math.random() * 60;
          g.bullets.push({
            x: e.facing === 1 ? e.x + e.w + 6 : e.x - 6,
            y: e.y - e.h * 0.55,
            vx: e.facing * 4.2,
            vy: 0,
            baseY: e.y,
            damage: 10,
            color: "#ef4444",
            fromPlayer: false,
            life: 60
          });
          sound.playPistol();
        }

        // Soco próximo
        if (Math.abs(dx) <= 28 && Math.abs(dy) <= 6) {
          e.attackTimer++;
          if (e.attackTimer > 40) {
            e.attackTimer = 0;
            if (!p.isRolling) {
              damagePlayer(12);
              p.x += e.facing * 8;
            }
          }
        }
      });

      // Armadilhas de Cenário
      currentStage.traps.forEach(trap => {
        trap.timer = (trap.timer + 1) % trap.interval;
        const isActive = trap.timer < trap.activeTime;

        if (isActive) {
          const inTrap = Math.abs(p.x - trap.x) < trap.w && Math.abs(p.y - trap.y) < 10;
          if (inTrap && !p.isRolling) {
            damagePlayer(1);
            if (trap.type === "steam" && Math.random() < 0.1) sound.playSteam();
          }
        }
      });

      // Coleta de Itens
      for (let i = g.pickups.length - 1; i >= 0; i--) {
        const item = g.pickups[i];
        const dist = Math.hypot((p.x + p.w / 2) - item.x, p.y - item.y);
        if (dist < 18) {
          if (item.type === "WEAPON" && item.weapon) {
            p.currentWeapon = item.weapon;
            p.currentWeapon.ammo += item.weapon.ammo;
            sound.voiceAnnounce(item.weapon.name);
            p.score += 200;
          } else if (item.type === "FOOD") {
            p.hp = Math.min(p.maxHp, p.hp + 35);
            sound.playPickup();
            p.score += 150;
          } else if (item.type === "AMMO") {
            WEAPONS.HMG.ammo += 40;
            WEAPONS.ROCKET.ammo += 8;
            WEAPONS.SHOTGUN.ammo += 8;
            p.grenades += 3;
            sound.playPickup();
          }
          g.pickups.splice(i, 1);
        }
      }

      // Resgate de P.O.W.
      g.pows.forEach(pow => {
        if (!pow.freed) {
          const dist = Math.hypot((p.x + p.w / 2) - pow.x, p.y - pow.y);
          if (dist < 22) {
            pow.freed = true;
            sound.voiceAnnounce("THANK YOU!");
            p.score += 500;
            const rewardWeapon = WEAPONS[pow.reward] || WEAPONS.HMG;
            g.pickups.push({ x: pow.x + 12, y: pow.y, type: "WEAPON", weapon: rewardWeapon });
          }
        } else {
          pow.x -= 1.1;
        }
      });

      // Explosões
      for (let i = g.explosions.length - 1; i >= 0; i--) {
        const exp = g.explosions[i];
        exp.life--;
        if (exp.life <= 0) g.explosions.splice(i, 1);
      }

      // Chuva na Missão 4
      if (currentStage.ambient === "rain") {
        g.rainDrops.forEach(r => {
          r.y += r.speed;
          r.x += 1.2;
          if (r.y > canvas.height) {
            r.y = -10;
            r.x = Math.random() * canvas.width;
          }
        });
      }

      // Spawner Contínuo
      if (g.enemiesDefeated < currentStage.enemiesToClear) {
        const active = g.enemies.filter(e => e.hp > 0).length;
        if (active < 3 && Math.random() < 0.025) {
          g.enemies.push(createEnemy(Math.random() < 0.5 ? -15 : canvas.width + 15));
        }
      } else if (!g.isAreaCleared) {
        g.isAreaCleared = true;
        sound.playGo();
      }

      // Avanço de Fase clássico "GO! ➔"
      if (g.isAreaCleared) {
        g.goBlinkTimer++;
        if (p.x >= canvas.width - p.w - 8) {
          if (g.currentStageIndex + 1 < STAGES.length) {
            loadStage(g.currentStageIndex + 1);
          } else {
            g.gameWon = true;
            sound.voiceAnnounce("ALL MISSIONS COMPLETE! YOU ARE A HERO!");
          }
        }
      }

      if (g.stageBannerTimer > 0) g.stageBannerTimer--;

      // Atualiza estados para HUD React
      setHudHp(p.hp);
      setHudScore(p.score);
      setHudLives(p.lives);
      setHudWeapon(p.currentWeapon.name);
      setHudAmmo(p.currentWeapon.ammo === Infinity ? "INF" : String(p.currentWeapon.ammo));
      setHudGrenades(p.grenades);
      setHudTargets(Math.max(0, currentStage.enemiesToClear - g.enemiesDefeated));
    };

    // DRAW DO JOGO
    const draw = () => {
      const stage = STAGES[g.currentStageIndex];
      const p = g.player;

      // 1. Céu e Decorações
      ctx.fillStyle = stage.skyColor;
      ctx.fillRect(0, 0, canvas.width, 120);

      stage.generateDecorations().forEach(dec => {
        if (dec.type === "dune") {
          ctx.fillStyle = "#d97706";
          ctx.beginPath();
          ctx.arc(dec.x + dec.w/2, dec.y + dec.h, dec.w/2, Math.PI, 0);
          ctx.fill();
        } else if (dec.type === "minaret") {
          ctx.fillStyle = "#78350f";
          ctx.fillRect(dec.x, dec.y, dec.w, dec.h);
          ctx.beginPath();
          ctx.arc(dec.x + dec.w/2, dec.y, dec.w/2, Math.PI, 0);
          ctx.fill();
        } else if (dec.type === "tent") {
          ctx.fillStyle = "#fef3c7";
          ctx.beginPath();
          ctx.moveTo(dec.x, dec.y + dec.h);
          ctx.lineTo(dec.x + dec.w/2, dec.y);
          ctx.lineTo(dec.x + dec.w, dec.y + dec.h);
          ctx.fill();
        } else if (dec.type === "crane") {
          ctx.fillStyle = "#f97316";
          ctx.fillRect(dec.x, dec.y, 8, dec.h);
          ctx.fillRect(dec.x, dec.y, dec.w, 8);
          ctx.strokeStyle = "#ea580c";
          ctx.strokeRect(dec.x, dec.y + 10, dec.w - 10, 20);
        } else if (dec.type === "stone_pillar") {
          ctx.fillStyle = "#44403c";
          ctx.fillRect(dec.x, dec.y, dec.w, dec.h);
          ctx.fillStyle = "#78716c";
          ctx.fillRect(dec.x - 3, dec.y, dec.w + 6, 6);
        } else if (dec.type === "searchlight_tower") {
          ctx.fillStyle = "#1e293b";
          ctx.fillRect(dec.x, dec.y, dec.w, dec.h);
          ctx.fillStyle = "rgba(254, 240, 138, 0.15)";
          ctx.beginPath();
          ctx.moveTo(dec.x + dec.w/2, dec.y);
          ctx.lineTo(dec.x - 40, canvas.height);
          ctx.lineTo(dec.x + 80, canvas.height);
          ctx.fill();
        } else {
          ctx.fillStyle = "#1e293b";
          ctx.fillRect(dec.x, dec.y, dec.w, dec.h);
        }
      });

      // 2. Chão e Pista de Combate
      ctx.fillStyle = stage.groundColor;
      ctx.fillRect(0, 120, canvas.width, 104);
      ctx.fillStyle = stage.curbColor;
      ctx.fillRect(0, 120, canvas.width, 4);

      // Armadilhas
      stage.traps.forEach(trap => {
        const isActive = (trap.timer < trap.activeTime);
        if (trap.type === "steam") {
          ctx.fillStyle = "#64748b";
          ctx.fillRect(trap.x - 4, trap.y - 4, 8, 8);
          if (isActive) {
            ctx.fillStyle = "rgba(241, 245, 249, 0.75)";
            ctx.beginPath();
            ctx.arc(trap.x, trap.y - 12, 10 + Math.random() * 4, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (trap.type === "spikes") {
          ctx.fillStyle = "#1c1917";
          ctx.fillRect(trap.x - trap.w/2, trap.y - 2, trap.w, trap.h);
          if (isActive) {
            ctx.fillStyle = "#e7e5e4";
            for (let s = -trap.w/2 + 2; s < trap.w/2; s += 6) {
              ctx.beginPath();
              ctx.moveTo(trap.x + s, trap.y + trap.h);
              ctx.lineTo(trap.x + s + 3, trap.y - 8);
              ctx.lineTo(trap.x + s + 6, trap.y + trap.h);
              ctx.fill();
            }
          }
        } else if (trap.type === "electric") {
          if (isActive) {
            ctx.fillStyle = "#67e8f9";
            ctx.fillRect(trap.x - 6, trap.y - 6, 12, 12);
            ctx.strokeStyle = "#fff";
            ctx.strokeRect(trap.x - 8, trap.y - 8, 16, 16);
          }
        }
      });

      // 3. Projéteis
      g.bullets.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, b.y, b.isHoming ? 6 : 4, 2);
        if (b.isHoming) {
          ctx.fillStyle = "rgba(255,255,255,0.4)";
          ctx.fillRect(b.x - 4, b.y, 3, 2);
        }
      });

      // Granadas
      g.grenades.forEach(gr => {
        ctx.fillStyle = "#15803d";
        ctx.beginPath();
        ctx.arc(gr.x, gr.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Entidades em Profundidade 2.5D
      const renderList = [
        p,
        ...g.enemies.filter(e => e.hp > 0),
        ...g.props.filter(prop => prop.hp > 0),
        ...g.pows,
        ...g.pickups
      ].sort((a, b) => a.y - b.y);

      renderList.forEach(item => {
        // Sombra dos elementos na pista
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.beginPath();
        const baseW = ('w' in item && typeof item.w === 'number') ? item.w : 16;
        ctx.ellipse(item.x + baseW / 2, item.y, baseW * 0.7, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        // ==========================================
        // 1. JOGADOR PRINCIPAL (POLICIAL MILITAR / COMMANDO)
        // ==========================================
        if (item === p) {
          if (p.isRolling) {
            // Efeito visual de Rolamento Tático
            ctx.fillStyle = "#9333ea";
            ctx.beginPath();
            ctx.arc(p.x + p.w / 2, p.y - 10, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#c084fc";
            ctx.beginPath();
            ctx.arc(p.x + p.w / 2, p.y - 10, 6, 0, Math.PI * 2);
            ctx.fill();
            // Rastro de velocidade
            ctx.fillStyle = "rgba(192, 132, 252, 0.45)";
            ctx.beginPath();
            ctx.arc(p.x + p.w / 2 - p.facing * 8, p.y - 10, 8, 0, Math.PI * 2);
            ctx.fill();
            return;
          }

          // Calça Farda PMPE (Azul Escuro Operacional & Coturnos)
          ctx.fillStyle = "#1e3a8a";
          ctx.fillRect(p.x + 2, p.y - 14, 6, 14);
          ctx.fillRect(p.x + 10, p.y - 14, 6, 14);
          // Coturnos pretos
          ctx.fillStyle = "#020617";
          ctx.fillRect(p.x + (p.facing === 1 ? 2 : 0), p.y - 4, 7, 4);
          ctx.fillRect(p.x + (p.facing === 1 ? 10 : 8), p.y - 4, 7, 4);

          // Cinto de Guarnição & Coldre
          ctx.fillStyle = "#0f172a";
          ctx.fillRect(p.x + 1, p.y - 17, 16, 4);
          ctx.fillStyle = "#facc15"; // Fivela dourada
          ctx.fillRect(p.x + 7, p.y - 16, 4, 2);

          // Tronco / Colete Balístico Tático Operacional
          ctx.fillStyle = "#1e40af"; // Camisa interna
          ctx.fillRect(p.x + 2, p.y - p.h + 10, 14, 15);
          ctx.fillStyle = "#0f172a"; // Colete balístico
          ctx.fillRect(p.x + 3, p.y - p.h + 10, 12, 12);
          // Brasão PMPE dourado no peito
          ctx.fillStyle = "#facc15";
          ctx.fillRect(p.x + 5, p.y - p.h + 13, 3, 4);

          // Cabeça e Rosto
          ctx.fillStyle = "#fed7aa"; // Pele
          ctx.fillRect(p.x + 4, p.y - p.h + 2, 10, 9);
          // Óculos escuros táticos
          ctx.fillStyle = "#020617";
          ctx.fillRect(p.x + (p.facing === 1 ? 6 : 4), p.y - p.h + 4, 6, 3);
          // Boina / Boné Operacional PMPE
          ctx.fillStyle = "#1d4ed8";
          ctx.fillRect(p.x + 2, p.y - p.h - 3, 14, 6);
          ctx.fillStyle = "#facc15"; // Divisa / Brasão na boina
          ctx.fillRect(p.x + (p.facing === 1 ? 10 : 4), p.y - p.h - 2, 3, 3);

          // Braço e Arma
          const gunBarrel = p.currentWeapon.barrelLen;
          const gunColor = p.currentWeapon.color;
          const gunX = p.facing === 1 ? p.x + p.w - 2 : p.x - gunBarrel + 2;
          const gunY = p.y - p.h * 0.52;

          // Desenho da Arma
          ctx.fillStyle = "#475569";
          ctx.fillRect(gunX, gunY, gunBarrel, 5);
          ctx.fillStyle = gunColor;
          ctx.fillRect(gunX + (p.facing === 1 ? gunBarrel - 4 : 0), gunY - 1, 4, 7);

          // Efeito de Disparo (Muzzle Flash)
          if (p.muzzleFlash > 0) {
            ctx.fillStyle = "#fef08a";
            const fx = p.facing === 1 ? gunX + gunBarrel : gunX - 8;
            ctx.fillRect(fx, gunY - 3, 8, 10);
            ctx.fillStyle = "#f97316";
            ctx.fillRect(fx + 2, gunY - 1, 4, 6);
          }

          // Ataque Corpo a Corpo (Soco)
          if (p.isAttacking) {
            ctx.fillStyle = "#f8fafc";
            const fistX = p.facing === 1 ? p.x + p.w : p.x - 12;
            ctx.fillRect(fistX, p.y - p.h * 0.6, 12, 8);
            ctx.fillStyle = "rgba(56, 189, 248, 0.6)";
            ctx.fillRect(fistX + (p.facing === 1 ? 6 : -4), p.y - p.h * 0.6 - 2, 8, 12);
          }
          return;
        }

        // ==========================================
        // 2. INIMIGO (SOLDADO REBELDE / TERRORISTA)
        // ==========================================
        if ('facing' in item && 'shootCooldown' in item) {
          const enemy = item as GameEnemy;
          const eColor = enemy.hitFlash > 0 ? "#ffffff" : enemy.color;

          // Pernas / Calça de combate
          ctx.fillStyle = enemy.hitFlash > 0 ? "#ffffff" : "#374151";
          ctx.fillRect(enemy.x + 2, enemy.y - 12, 5, 12);
          ctx.fillRect(enemy.x + 9, enemy.y - 12, 5, 12);

          // Tronco / Uniforme Militar Inimigo
          ctx.fillStyle = eColor;
          ctx.fillRect(enemy.x + 2, enemy.y - enemy.h + 10, 14, 15);
          ctx.fillStyle = enemy.hitFlash > 0 ? "#ffffff" : "#1f2937"; // Colete
          ctx.fillRect(enemy.x + 4, enemy.y - enemy.h + 11, 10, 10);

          // Cabeça e Capacete de Combate
          ctx.fillStyle = enemy.hitFlash > 0 ? "#ffffff" : "#fed7aa"; // Pele
          ctx.fillRect(enemy.x + 4, enemy.y - enemy.h + 2, 9, 8);
          ctx.fillStyle = enemy.hitFlash > 0 ? "#ffffff" : "#451a03"; // Capacete / Bandana
          ctx.fillRect(enemy.x + 2, enemy.y - enemy.h - 2, 13, 6);

          // Arma do Inimigo
          ctx.fillStyle = "#0f172a";
          const eGunX = enemy.facing === 1 ? enemy.x + enemy.w - 2 : enemy.x - 8;
          ctx.fillRect(eGunX, enemy.y - enemy.h * 0.5, 9, 3);

          // Barra de Vida Mini sobre a cabeça se atingido
          if (enemy.hp < enemy.maxHp) {
            ctx.fillStyle = "#ef4444";
            ctx.fillRect(enemy.x - 2, enemy.y - enemy.h - 8, enemy.w + 4, 3);
            ctx.fillStyle = "#22c55e";
            ctx.fillRect(enemy.x - 2, enemy.y - enemy.h - 8, (enemy.w + 4) * (enemy.hp / enemy.maxHp), 3);
          }
          return;
        }

        // ==========================================
        // 3. PROPS DESTRUTÍVEIS (CAIXAS, BARRIS, GERADORES)
        // ==========================================
        if ('maxHp' in item && 'type' in item && typeof (item as any).type === 'string') {
          const prop = item as StageProp;
          if (prop.type === "fuel_barrel") {
            ctx.fillStyle = "#dc2626";
            ctx.fillRect(prop.x - 8, prop.y - 18, 16, 18);
            ctx.fillStyle = "#fef08a";
            ctx.font = "bold 10px monospace";
            ctx.fillText("!", prop.x - 3, prop.y - 5);
          } else if (prop.type === "wood_barrel") {
            ctx.fillStyle = "#92400e";
            ctx.fillRect(prop.x - 7, prop.y - 16, 14, 16);
            ctx.fillStyle = "#451a03";
            ctx.fillRect(prop.x - 7, prop.y - 10, 14, 2);
          } else if (prop.type === "crate") {
            ctx.fillStyle = "#b45309";
            ctx.fillRect(prop.x - 9, prop.y - 18, 18, 18);
            ctx.strokeStyle = "#78350f";
            ctx.strokeRect(prop.x - 8, prop.y - 17, 16, 16);
          } else if (prop.type === "sandbag") {
            ctx.fillStyle = "#ca8a04";
            ctx.fillRect(prop.x - 12, prop.y - 12, 24, 12);
          } else if (prop.type === "stone_pillar_destruct") {
            ctx.fillStyle = "#57534e";
            ctx.fillRect(prop.x - 8, prop.y - 28, 16, 28);
          } else if (prop.type === "generator") {
            ctx.fillStyle = "#0284c7";
            ctx.fillRect(prop.x - 10, prop.y - 22, 20, 22);
            ctx.fillStyle = "#facc15";
            ctx.fillRect(prop.x - 3, prop.y - 16, 6, 10);
          }
          return;
        }

        // ==========================================
        // 4. P.O.W. (PRISIONEIROS DE GUERRA AMARRADOS)
        // ==========================================
        if ('reward' in item) {
          const pow = item as { x: number; y: number; freed: boolean; reward: string };
          if (!pow.freed) {
            ctx.fillStyle = "#facc15"; // Bermuda amarela clássica
            ctx.fillRect(pow.x - 4, pow.y - 12, 8, 12);
            ctx.fillStyle = "#fed7aa"; // Tronco
            ctx.fillRect(pow.x - 3, pow.y - 20, 6, 8);
            ctx.fillStyle = "#78350f"; // Cabelos longos e barba
            ctx.fillRect(pow.x - 5, pow.y - 26, 10, 6);
          } else {
            ctx.fillStyle = "#facc15";
            ctx.fillRect(pow.x - 3, pow.y - 14, 6, 14);
            ctx.fillStyle = "#fff";
            ctx.font = "8px monospace";
            ctx.fillText("THANK YOU!", pow.x - 18, pow.y - 24);
          }
          return;
        }

        // ==========================================
        // 5. ITENS COLETÁVEIS (ARMAS, COMIDA, MUNIÇÃO)
        // ==========================================
        if ('type' in item && typeof (item as { type: string }).type === 'string') {
          const pickup = item as { type: string; weapon?: WeaponDef; x: number; y: number };
          if (pickup.type === "WEAPON" && pickup.weapon) {
            ctx.fillStyle = "#1e293b";
            ctx.fillRect(pickup.x - 8, pickup.y - 12, 16, 12);
            ctx.fillStyle = pickup.weapon.color;
            ctx.font = "bold 8px monospace";
            ctx.fillText(pickup.weapon.code, pickup.x - 3, pickup.y - 3);
            return;
          } else if (pickup.type === "FOOD") {
            ctx.fillStyle = "#f43f5e";
            ctx.fillRect(pickup.x - 6, pickup.y - 10, 12, 10);
            ctx.fillStyle = "#84cc16";
            ctx.fillRect(pickup.x - 2, pickup.y - 12, 4, 3);
            return;
          } else if (pickup.type === "AMMO") {
            ctx.fillStyle = "#15803d";
            ctx.fillRect(pickup.x - 6, pickup.y - 8, 12, 8);
            ctx.fillStyle = "#fff";
            ctx.fillText("+", pickup.x - 3, pickup.y - 1);
            return;
          }
        }
      });

      // 5. Explosões
      g.explosions.forEach(exp => {
        const progress = 1 - (exp.life / exp.maxLife);
        ctx.fillStyle = exp.life > 6 ? "#facc15" : "#ef4444";
        ctx.beginPath();
        ctx.arc(exp.x, exp.y, exp.radius * (0.4 + progress * 0.6), 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Efeito Climático de Chuva
      if (stage.ambient === "rain") {
        ctx.strokeStyle = "rgba(148, 163, 184, 0.45)";
        ctx.beginPath();
        g.rainDrops.forEach(r => {
          ctx.moveTo(r.x, r.y);
          ctx.lineTo(r.x + 1.2, r.y + r.len);
        });
        ctx.stroke();
      }

      // HUD Arcade no Canvas
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(8, 8, 90, 8);
      ctx.fillStyle = p.hp > 30 ? "#3b82f6" : "#ef4444";
      ctx.fillRect(8, 8, Math.max(0, (p.hp / p.maxHp) * 90), 8);
      ctx.strokeStyle = "#475569";
      ctx.strokeRect(8, 8, 90, 8);

      ctx.fillStyle = "#fff";
      ctx.font = "8px monospace";
      ctx.fillText(`1P LIVES: ${p.lives} | SCORE: ${p.score}`, 8, 24);

      ctx.fillStyle = p.currentWeapon.color;
      const ammoStr = p.currentWeapon.ammo === Infinity ? "INF" : p.currentWeapon.ammo;
      ctx.fillText(`[${p.currentWeapon.code}] ${p.currentWeapon.name}: ${ammoStr} | GRENADES [G]: ${p.grenades}`, 8, 34);

      ctx.fillStyle = "#94a3b8";
      const remaining = Math.max(0, stage.enemiesToClear - g.enemiesDefeated);
      ctx.fillText(`STAGE ${g.currentStageIndex + 1}/${STAGES.length} - ALVOS: ${remaining}`, canvas.width - 145, 16);

      // Banner "START"
      if (g.stageBannerTimer > 0) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, 85, canvas.width, 40);
        ctx.fillStyle = "#facc15";
        ctx.font = "bold 10px monospace";
        ctx.textAlign = "center";
        ctx.fillText(stage.title, canvas.width / 2, 102);
        ctx.fillStyle = "#38bdf8";
        ctx.fillText("MISSION START!", canvas.width / 2, 115);
        ctx.textAlign = "left";
      }

      // Sinalizador clássico "GO! ➔"
      if (g.isAreaCleared && Math.floor(g.goBlinkTimer / 10) % 2 === 0) {
        ctx.fillStyle = "#facc15";
        ctx.font = "bold 15px monospace";
        ctx.fillText("GO! ➔", canvas.width - 65, 145);
      }

      // Telas de Fim
      if (g.gameOver) {
        ctx.fillStyle = "rgba(0,0,0,0.85)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 16px monospace";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, 110);
        ctx.fillStyle = "#fff";
        ctx.font = "9px monospace";
        ctx.fillText("PRESSIONE REINICIAR ACIMA", canvas.width / 2, 130);
      } else if (g.gameWon) {
        ctx.fillStyle = "rgba(0,0,0,0.85)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#facc15";
        ctx.font = "bold 14px monospace";
        ctx.textAlign = "center";
        ctx.fillText("ALL MISSIONS COMPLETED!", canvas.width / 2, 100);
        ctx.fillStyle = "#38bdf8";
        ctx.font = "10px monospace";
        ctx.fillText(`FINAL SCORE: ${p.score}`, canvas.width / 2, 120);
      }
    };

    const loop = () => {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [loadStage, highScore]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at center, #0f172a 0%, #030712 100%)',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Courier New', Courier, monospace"
    }}>
      {/* Barra Superior de Comando e HUD */}
      <header style={{
        padding: '0.75rem 1.25rem',
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '2px solid rgba(234, 179, 8, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Voltar e Título */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onBackToApp}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.9rem',
              background: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '6px',
              color: '#38bdf8',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} /> Voltar à Missão PMPE
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#ef4444',
                boxShadow: '0 0 10px #ef4444'
              }} />
              <h1 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 900, color: '#facc15', letterSpacing: '1px' }}>
                THE SHADOW <span style={{ color: '#ef4444' }}>X</span> METAL SLUG 2
              </h1>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Módulo Tático de Descompressão 16-Bit &bull; 0 Questões &bull; 100% Arcade
            </span>
          </div>
        </div>

        {/* Stats de Batalha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(30, 41, 59, 0.6)',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            border: '1px solid rgba(234, 179, 8, 0.4)'
          }}>
            <Trophy size={16} color="#facc15" />
            <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>RECORDE:</span>
            <strong style={{ fontSize: '0.95rem', color: '#facc15' }}>{highScore}</strong>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(30, 41, 59, 0.6)',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            border: '1px solid rgba(56, 189, 248, 0.4)'
          }}>
            <Shield size={16} color="#38bdf8" />
            <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>MISSÃO:</span>
            <strong style={{ fontSize: '0.95rem', color: '#38bdf8' }}>{hudStage}/4</strong>
          </div>

          <button
            onClick={resetGame}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.8rem',
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              borderRadius: '6px',
              color: '#fca5a5',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={14} /> Reiniciar
          </button>

          <button
            onClick={toggleMute}
            style={{
              padding: '0.45rem 0.6rem',
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '6px',
              color: '#f8fafc',
              cursor: 'pointer'
            }}
            title={isMuted ? "Ativar Áudio" : "Silenciar Áudio"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <button
            onClick={() => setIsExpanded(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.8rem',
              background: isExpanded ? 'rgba(59, 130, 246, 0.3)' : 'rgba(30, 41, 59, 0.8)',
              border: isExpanded ? '1px solid #3b82f6' : '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '6px',
              color: isExpanded ? '#60a5fa' : '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            title={isExpanded ? "Tamanho Normal" : "Expandir Tela para Máximo Conforto"}
          >
            {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            <span>{isExpanded ? "Normal" : "Expandir Tela"}</span>
          </button>

          <button
            onClick={() => setCrtEnabled(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.8rem',
              background: crtEnabled ? 'rgba(234, 179, 8, 0.25)' : 'rgba(30, 41, 59, 0.8)',
              border: crtEnabled ? '1px solid #facc15' : '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '6px',
              color: crtEnabled ? '#fef08a' : '#94a3b8',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            title="Ligar ou desligar efeito retrô de TV (Linhas CRT)"
          >
            <Tv size={14} />
            <span>CRT {crtEnabled ? "ON" : "OFF"}</span>
          </button>

          <button
            onClick={() => window.open('./arcade.html', '_blank')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.8rem',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid #38bdf8',
              borderRadius: '6px',
              color: '#7dd3fc',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            title="Abrir em aba cheia independente"
          >
            <ExternalLink size={14} /> Tela Independente
          </button>
        </div>
      </header>

      {/* Área Central do Jogo e Gabinete */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        gap: '0.75rem'
      }}>
        {/* Gabinete Retro Arcade (Tela Ampla & Confortável) */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: isExpanded ? '1120px' : '880px',
          background: 'linear-gradient(180deg, #1e293b 0%, #030712 100%)',
          padding: '8px',
          borderRadius: '12px',
          border: '4px solid #334155',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.2)',
          overflow: 'hidden',
          transition: 'max-width 0.25s ease'
        }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px' }}>
            <canvas
              ref={canvasRef}
              width={384}
              height={224}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                aspectRatio: '384 / 224',
                background: '#000',
                imageRendering: 'pixelated'
              }}
            />
            {/* Scanlines CRT (Apenas quando crtEnabled for true) */}
            {crtEnabled && (
              <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.16) 50%)',
                backgroundSize: '100% 4px'
              }} />
            )}
          </div>
        </div>

        {/* HUD Rápido Integrado */}
        <div style={{
          width: '100%',
          maxWidth: isExpanded ? '1120px' : '880px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.5rem',
          fontSize: '0.75rem',
          transition: 'max-width 0.25s ease'
        }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.5rem', borderRadius: '6px', border: '1px solid #334155' }}>
            <span style={{ color: '#94a3b8', display: 'block' }}>VIDA & VIDAS</span>
            <strong style={{ color: hudHp > 30 ? '#38bdf8' : '#ef4444', fontSize: '0.9rem' }}>
              HP {hudHp}% &bull; {hudLives}P LIVES
            </strong>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.5rem', borderRadius: '6px', border: '1px solid #334155' }}>
            <span style={{ color: '#94a3b8', display: 'block' }}>PONTUAÇÃO</span>
            <strong style={{ color: '#facc15', fontSize: '0.9rem' }}>{hudScore} PTS</strong>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.5rem', borderRadius: '6px', border: '1px solid #334155' }}>
            <span style={{ color: '#94a3b8', display: 'block' }}>ARMA EM USO</span>
            <strong style={{ color: '#fbbf24', fontSize: '0.9rem' }}>{hudWeapon} ({hudAmmo})</strong>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.5rem', borderRadius: '6px', border: '1px solid #334155' }}>
            <span style={{ color: '#94a3b8', display: 'block' }}>GRANADAS [G]</span>
            <strong style={{ color: '#4ade80', fontSize: '0.9rem' }}>{hudGrenades} BOMBAS</strong>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '0.5rem', borderRadius: '6px', border: '1px solid #334155' }}>
            <span style={{ color: '#94a3b8', display: 'block' }}>ALVOS RESTANTES</span>
            <strong style={{ color: '#f87171', fontSize: '0.9rem' }}>{hudTargets} INIMIGOS</strong>
          </div>
        </div>

        {/* D-Pad e Controles Virtuais Touch para Celular / Tablet (Arcade Cockpit Pro) */}
        <div style={{
          width: '100%',
          maxWidth: isExpanded ? '1120px' : '880px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          padding: '0.85rem',
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(3, 7, 18, 0.98) 100%)',
          borderRadius: '14px',
          border: '2px solid rgba(148, 163, 184, 0.25)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          transition: 'max-width 0.25s ease',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'none'
        }}>
          {/* Barra Tática de Ações Rápidas (Centro de Comando) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            flexWrap: 'wrap',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid rgba(148, 163, 184, 0.15)'
          }}>
            {/* Trocar Arma com Nome e Munição Atual */}
            <button
              onClick={cycleWeapon}
              onTouchStart={(e) => { e.preventDefault(); cycleWeapon(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.85rem',
                background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                color: '#fff',
                border: '1px solid #38bdf8',
                borderRadius: '8px',
                fontWeight: 900,
                fontSize: '0.82rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.4)'
              }}
              title="Trocar arma atual"
            >
              <span>🔄 ARMA:</span>
              <strong style={{ color: '#fef08a' }}>{hudWeapon} ({hudAmmo})</strong>
            </button>

            {/* Atalhos Rápidos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <button
                onClick={resetGame}
                onTouchStart={(e) => { e.preventDefault(); resetGame(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0.7rem',
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid #ef4444',
                  borderRadius: '6px',
                  color: '#fca5a5',
                  fontSize: '0.78rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={13} /> Reiniciar
              </button>

              <button
                onClick={toggleFullscreen}
                onTouchStart={(e) => { e.preventDefault(); toggleFullscreen(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0.7rem',
                  background: isFullscreen ? 'rgba(34, 197, 94, 0.3)' : 'rgba(30, 41, 59, 0.8)',
                  border: isFullscreen ? '1px solid #22c55e' : '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '6px',
                  color: isFullscreen ? '#86efac' : '#cbd5e1',
                  fontSize: '0.78rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                title="Modo Tela Cheia para Celular (Remove barras do navegador)"
              >
                {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                <span>{isFullscreen ? "Tela Normal" : "Tela Cheia"}</span>
              </button>

              <button
                onClick={() => setCrtEnabled(prev => !prev)}
                onTouchStart={(e) => { e.preventDefault(); setCrtEnabled(prev => !prev); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.4rem 0.7rem',
                  background: crtEnabled ? 'rgba(234, 179, 8, 0.25)' : 'rgba(30, 41, 59, 0.8)',
                  border: crtEnabled ? '1px solid #facc15' : '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '6px',
                  color: crtEnabled ? '#fef08a' : '#94a3b8',
                  fontSize: '0.78rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                <Tv size={13} /> CRT {crtEnabled ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          {/* Painel Principal de Controles (Cockpit: D-Pad à Esquerda e Botões de Combate à Direita) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {/* LADO ESQUERDO: D-PAD TÁTICO 8-DIREÇÕES COM SUPORTE A TOUCH DRAG */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
              <div
                ref={dpadRef}
                onTouchStart={handleDpadTouchStart}
                onTouchMove={handleDpadTouchMove}
                onTouchEnd={handleDpadTouchEnd}
                onTouchCancel={handleDpadTouchEnd}
                style={{
                  position: 'relative',
                  width: '160px',
                  height: '160px',
                  background: 'radial-gradient(circle, #1e293b 0%, #0b1120 70%, #030712 100%)',
                  borderRadius: '50%',
                  border: '3px solid #334155',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.8), inset 0 2px 8px rgba(0, 0, 0, 0.6)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(3, 1fr)',
                  gap: '3px',
                  padding: '5px',
                  touchAction: 'none',
                  cursor: 'pointer'
                }}
              >
                {/* 1. Diagonal Cima-Esquerda */}
                <button
                  onMouseDown={() => setVirtualDirection(true, false, true, false)}
                  onMouseUp={() => setVirtualDirection(false, false, false, false)}
                  style={{
                    background: (activeButtons['arrowup'] && activeButtons['arrowleft']) ? '#38bdf8' : 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '8px 4px 4px 4px',
                    color: (activeButtons['arrowup'] && activeButtons['arrowleft']) ? '#000' : '#64748b',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ◤
                </button>

                {/* 2. CIMA */}
                <button
                  onMouseDown={() => setVirtualKey('arrowup', true)}
                  onMouseUp={() => setVirtualKey('arrowup', false)}
                  style={{
                    background: activeButtons['arrowup'] ? 'linear-gradient(180deg, #38bdf8, #0284c7)' : '#1e293b',
                    border: activeButtons['arrowup'] ? '1px solid #38bdf8' : '1px solid #475569',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: activeButtons['arrowup'] ? '0 0 12px #38bdf8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ▲
                </button>

                {/* 3. Diagonal Cima-Direita */}
                <button
                  onMouseDown={() => setVirtualDirection(true, false, false, true)}
                  onMouseUp={() => setVirtualDirection(false, false, false, false)}
                  style={{
                    background: (activeButtons['arrowup'] && activeButtons['arrowright']) ? '#38bdf8' : 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '4px 8px 4px 4px',
                    color: (activeButtons['arrowup'] && activeButtons['arrowright']) ? '#000' : '#64748b',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ◥
                </button>

                {/* 4. ESQUERDA */}
                <button
                  onMouseDown={() => setVirtualKey('arrowleft', true)}
                  onMouseUp={() => setVirtualKey('arrowleft', false)}
                  style={{
                    background: activeButtons['arrowleft'] ? 'linear-gradient(90deg, #38bdf8, #0284c7)' : '#1e293b',
                    border: activeButtons['arrowleft'] ? '1px solid #38bdf8' : '1px solid #475569',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: activeButtons['arrowleft'] ? '0 0 12px #38bdf8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ◀
                </button>

                {/* 5. NÚCLEO CENTRAL */}
                <div style={{
                  background: 'radial-gradient(circle, #334155 0%, #0f172a 100%)',
                  borderRadius: '50%',
                  border: '2px solid #475569',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: (activeButtons['arrowup'] || activeButtons['arrowdown'] || activeButtons['arrowleft'] || activeButtons['arrowright']) ? '#22c55e' : '#475569',
                    boxShadow: (activeButtons['arrowup'] || activeButtons['arrowdown'] || activeButtons['arrowleft'] || activeButtons['arrowright']) ? '0 0 8px #22c55e' : 'none'
                  }} />
                </div>

                {/* 6. DIREITA */}
                <button
                  onMouseDown={() => setVirtualKey('arrowright', true)}
                  onMouseUp={() => setVirtualKey('arrowright', false)}
                  style={{
                    background: activeButtons['arrowright'] ? 'linear-gradient(270deg, #38bdf8, #0284c7)' : '#1e293b',
                    border: activeButtons['arrowright'] ? '1px solid #38bdf8' : '1px solid #475569',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: activeButtons['arrowright'] ? '0 0 12px #38bdf8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ▶
                </button>

                {/* 7. Diagonal Baixo-Esquerda */}
                <button
                  onMouseDown={() => setVirtualDirection(false, true, true, false)}
                  onMouseUp={() => setVirtualDirection(false, false, false, false)}
                  style={{
                    background: (activeButtons['arrowdown'] && activeButtons['arrowleft']) ? '#38bdf8' : 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '4px 4px 4px 8px',
                    color: (activeButtons['arrowdown'] && activeButtons['arrowleft']) ? '#000' : '#64748b',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ◣
                </button>

                {/* 8. BAIXO */}
                <button
                  onMouseDown={() => setVirtualKey('arrowdown', true)}
                  onMouseUp={() => setVirtualKey('arrowdown', false)}
                  style={{
                    background: activeButtons['arrowdown'] ? 'linear-gradient(0deg, #38bdf8, #0284c7)' : '#1e293b',
                    border: activeButtons['arrowdown'] ? '1px solid #38bdf8' : '1px solid #475569',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: activeButtons['arrowdown'] ? '0 0 12px #38bdf8' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ▼
                </button>

                {/* 9. Diagonal Baixo-Direita */}
                <button
                  onMouseDown={() => setVirtualDirection(false, true, false, true)}
                  onMouseUp={() => setVirtualDirection(false, false, false, false)}
                  style={{
                    background: (activeButtons['arrowdown'] && activeButtons['arrowright']) ? '#38bdf8' : 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '4px 4px 8px 4px',
                    color: (activeButtons['arrowdown'] && activeButtons['arrowright']) ? '#000' : '#64748b',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ◢
                </button>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 'bold' }}>
                D-PAD 8-WAY (TOQUE OU ARRASTE)
              </span>
            </div>

            {/* LADO DIREITO: CLUSTER ARCADE DE BOTÕES DE COMBATE (ERGONÔMICO PARA O POLEGAR) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* BOTÃO 1: SOCO [Z] */}
                <button
                  onMouseDown={() => setVirtualKey('z', true)}
                  onMouseUp={() => setVirtualKey('z', false)}
                  onTouchStart={(e) => { e.preventDefault(); setVirtualKey('z', true); }}
                  onTouchEnd={(e) => { e.preventDefault(); setVirtualKey('z', false); }}
                  onTouchCancel={(e) => { e.preventDefault(); setVirtualKey('z', false); }}
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                    background: activeButtons['z']
                      ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
                      : 'linear-gradient(135deg, #d97706, #92400e)',
                    border: '3px solid #f59e0b',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: activeButtons['z']
                      ? '0 0 20px rgba(245, 158, 11, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                      : '0 6px 14px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                    transform: activeButtons['z'] ? 'scale(0.94)' : 'scale(1)',
                    transition: 'transform 0.08s, box-shadow 0.08s',
                    touchAction: 'none'
                  }}
                >
                  <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>👊</span>
                  <span style={{ fontSize: '0.62rem', fontWeight: 900, marginTop: '2px', letterSpacing: '0.5px' }}>SOCO</span>
                </button>

                {/* BOTÃO 2: GRANADA [G] */}
                <button
                  onMouseDown={() => setVirtualKey('g', true)}
                  onMouseUp={() => setVirtualKey('g', false)}
                  onTouchStart={(e) => { e.preventDefault(); setVirtualKey('g', true); }}
                  onTouchEnd={(e) => { e.preventDefault(); setVirtualKey('g', false); }}
                  onTouchCancel={(e) => { e.preventDefault(); setVirtualKey('g', false); }}
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                    background: activeButtons['g']
                      ? 'linear-gradient(135deg, #4ade80, #22c55e)'
                      : 'linear-gradient(135deg, #16a34a, #14532d)',
                    border: '3px solid #22c55e',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: activeButtons['g']
                      ? '0 0 20px rgba(34, 197, 94, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                      : '0 6px 14px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                    transform: activeButtons['g'] ? 'scale(0.94)' : 'scale(1)',
                    transition: 'transform 0.08s, box-shadow 0.08s',
                    position: 'relative',
                    touchAction: 'none'
                  }}
                >
                  <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>💣</span>
                  <span style={{ fontSize: '0.62rem', fontWeight: 900, marginTop: '2px', letterSpacing: '0.5px' }}>BOMBA</span>
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    background: '#ef4444',
                    color: '#fff',
                    borderRadius: '10px',
                    fontSize: '0.6rem',
                    fontWeight: 900,
                    padding: '1px 5px',
                    border: '1px solid #fff'
                  }}>
                    {hudGrenades}
                  </span>
                </button>

                {/* BOTÃO 3: ESQUIVA [C] */}
                <button
                  onMouseDown={() => setVirtualKey('c', true)}
                  onMouseUp={() => setVirtualKey('c', false)}
                  onTouchStart={(e) => { e.preventDefault(); setVirtualKey('c', true); }}
                  onTouchEnd={(e) => { e.preventDefault(); setVirtualKey('c', false); }}
                  onTouchCancel={(e) => { e.preventDefault(); setVirtualKey('c', false); }}
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                    background: activeButtons['c']
                      ? 'linear-gradient(135deg, #c084fc, #a855f7)'
                      : 'linear-gradient(135deg, #9333ea, #581c87)',
                    border: '3px solid #c084fc',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: activeButtons['c']
                      ? '0 0 20px rgba(168, 85, 247, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
                      : '0 6px 14px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                    transform: activeButtons['c'] ? 'scale(0.94)' : 'scale(1)',
                    transition: 'transform 0.08s, box-shadow 0.08s',
                    touchAction: 'none'
                  }}
                >
                  <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>🌀</span>
                  <span style={{ fontSize: '0.62rem', fontWeight: 900, marginTop: '2px', letterSpacing: '0.5px' }}>ESQUIVA</span>
                </button>

                {/* BOTÃO 4: ATIRAR [X / ESPAÇO] - BOTÃO PRINCIPAL COM DESTAQUE */}
                <button
                  onMouseDown={() => setVirtualKey('x', true)}
                  onMouseUp={() => setVirtualKey('x', false)}
                  onTouchStart={(e) => { e.preventDefault(); setVirtualKey('x', true); }}
                  onTouchEnd={(e) => { e.preventDefault(); setVirtualKey('x', false); }}
                  onTouchCancel={(e) => { e.preventDefault(); setVirtualKey('x', false); }}
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    background: activeButtons['x']
                      ? 'linear-gradient(135deg, #f87171, #ef4444)'
                      : 'linear-gradient(135deg, #dc2626, #7f1d1d)',
                    border: '4px solid #ef4444',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: activeButtons['x']
                      ? '0 0 28px rgba(239, 68, 68, 1), inset 0 2px 6px rgba(255, 255, 255, 0.6)'
                      : '0 8px 18px rgba(220, 38, 38, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
                    transform: activeButtons['x'] ? 'scale(0.93)' : 'scale(1)',
                    transition: 'transform 0.08s, box-shadow 0.08s',
                    touchAction: 'none'
                  }}
                >
                  <span style={{ fontSize: '1.45rem', lineHeight: 1 }}>💥</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 900, marginTop: '2px', letterSpacing: '1px' }}>FOGO</span>
                </button>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 'bold' }}>
                ARSENAL DE COMBATE (MULTI-TOUCH)
              </span>
            </div>
          </div>
        </div>

        {/* Legenda de Teclado */}
        <footer style={{
          width: '100%',
          maxWidth: '768px',
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid #334155',
          borderRadius: '8px',
          padding: '0.65rem 1rem',
          fontSize: '0.75rem',
          color: '#cbd5e1'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.5rem',
            textAlign: 'center'
          }}>
            <div><strong style={{ color: '#facc15' }}>Mover:</strong> Setas / WASD</div>
            <div><strong style={{ color: '#ef4444' }}>Ataque:</strong> [Z] Soco &bull; [X / Espaço] Fogo</div>
            <div><strong style={{ color: '#c084fc' }}>Tática:</strong> [C] Esquiva &bull; [G] Granada</div>
            <div><strong style={{ color: '#38bdf8' }}>Arsenal:</strong> [1] HG &bull; [2] HMG &bull; [3] Rocket &bull; [4] Shotgun</div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '0.35rem', color: '#94a3b8', fontSize: '0.7rem' }}>
            Destrua barris e caixas para itens &bull; Resgate prisioneiros amarrados &bull; Quando surgir <strong style={{ color: '#facc15' }}>GO! ➔</strong>, avance para a direita!
          </div>
        </footer>
      </main>
    </div>
  );
};
