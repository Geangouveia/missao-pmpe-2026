import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Shield, 
  Play, 
  Pause,
  Zap,
  Flame,
  Bomb,
  Trophy
} from 'lucide-react';
import { sound } from '../utils/sound';

interface SnesPoliceActionGameProps {
  onBackToApp: () => void;
}

// Tipos de Armas Oficiais Metal Slug 2
export type WeaponType = 'PISTOL' | 'HMG' | 'ROCKET' | 'SHOTGUN';

// Tipos do Jogo
interface Bullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isPlayer: boolean;
  damage: number;
  color: string;
  isHoming?: boolean;
  isRocket?: boolean;
}

interface Grenade {
  x: number;
  y: number;
  groundY: number;
  vx: number;
  vy: number;
  gravity: number;
  timer: number;
}

interface Explosion {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  life: number;
}

interface Pow {
  id: number;
  x: number;
  y: number;
  freed: boolean;
  thanked: boolean;
  itemDropped: boolean;
  waveAnim: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface AmmoPickup {
  id: number;
  x: number;
  y: number;
  weapon: WeaponType;
  amount: number;
  isGunDrop?: boolean;
}

interface Enemy {
  id: number;
  type: 'knife' | 'pistol' | 'rifle' | 'boss';
  x: number;
  y: number;
  vx: number;
  width: number;
  height: number;
  hp: number;
  maxHp: number;
  shootCooldown: number;
  state: 'walk' | 'attack' | 'hurt' | 'dead';
  facing: -1 | 1;
  hitFlash: number;
}

export const SnesPoliceActionGame: React.FC<SnesPoliceActionGameProps> = ({ onBackToApp }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Estados do Jogo
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem('pmpe_snes_highscore') || '0', 10);
    } catch {
      return 0;
    }
  });
  const [currentLevel, setCurrentLevel] = useState(1);
  const [killsCount, setKillsCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playerHp, setPlayerHp] = useState(100);
  const [playerArmor, setPlayerArmor] = useState(100);
  
  // Arsenal Metal Slug 2
  const [currentWeapon, setCurrentWeapon] = useState<WeaponType>('PISTOL');
  const [ammoHmg, setAmmoHmg] = useState(150);
  const [ammoRocket, setAmmoRocket] = useState(20);
  const [ammoShotgun, setAmmoShotgun] = useState(15);
  const [grenadesCount, setGrenadesCount] = useState(10);
  const [isSuperSoldier, setIsSuperSoldier] = useState(false);
  const [rollReady, setRollReady] = useState(true);

  // Referências mutáveis para loop de alta performance a 60 FPS
  const gameStateRef = useRef({
    player: {
      x: 100,
      y: 280,
      vx: 0,
      vy: 0,
      width: 38,
      height: 64,
      isGrounded: true,
      isCrouching: false,
      facing: 1 as -1 | 1,
      isAttacking: false,
      attackCooldown: 0,
      hp: 100,
      armor: 100,
      weapon: 'PISTOL' as WeaponType,
      ammoHmg: 150,
      ammoRocket: 20,
      ammoShotgun: 15,
      grenades: 10,
      grenadeCooldown: 0,
      isSuperSoldier: false,
      superSoldierTimer: 0,
      invulnerableTimer: 0,
      muzzleFlash: 0,
      // Rolamento de Esquiva Tático (Dodge Roll)
      isRolling: false,
      rollTimer: 0,
      rollDuration: 14,
      rollCooldown: 0,
      rollCooldownTime: 28,
      rollSpeed: 7.2
    },
    bullets: [] as Bullet[],
    grenades: [] as Grenade[],
    explosions: [] as Explosion[],
    pows: [] as Pow[],
    particles: [] as Particle[],
    enemies: [] as Enemy[],
    ammoPickups: [] as AmmoPickup[],
    keys: {
      left: false,
      right: false,
      up: false,
      down: false,
      shoot: false,
      melee: false,
      grenade: false
    },
    level: 1,
    kills: 0,
    score: 0,
    cameraX: 0,
    worldWidth: 3200,
    groundY: 340,
    enemyIdCounter: 1,
    spawnTimer: 0,
    bossSpawned: false
  });

  // Função para acionar o Rolamento de Esquiva (Dodge Roll com i-frames)
  const triggerDodgeRoll = useCallback(() => {
    const p = gameStateRef.current.player;
    if (!p.isRolling && p.rollCooldown <= 0) {
      p.isRolling = true;
      p.rollTimer = p.rollDuration;
      p.rollCooldown = p.rollCooldownTime;
      p.isAttacking = false;
      setRollReady(false);
      sound.playRoll();
    }
  }, []);

  // Lançamento de Granadas de Mão estilo Metal Slug 2 [G]
  const triggerGrenade = useCallback(() => {
    const s = gameStateRef.current;
    const p = s.player;
    if (p.grenades > 0 && p.grenadeCooldown <= 0) {
      p.grenades--;
      p.grenadeCooldown = 25;
      setGrenadesCount(p.grenades);
      sound.playClick();

      s.grenades.push({
        x: p.x + (p.facing === 1 ? p.width + 4 : -4),
        y: p.y + 16,
        groundY: s.groundY - 10,
        vx: p.facing * 4.6,
        vy: -5.2, // Arco parabólico para cima
        gravity: 0.35,
        timer: 45
      });
    }
  }, []);

  // Alternar Arma
  const cycleWeapon = useCallback(() => {
    const p = gameStateRef.current.player;
    const weapons: WeaponType[] = ['PISTOL', 'HMG', 'ROCKET', 'SHOTGUN'];
    const currentIdx = weapons.indexOf(p.weapon);
    const nextW = weapons[(currentIdx + 1) % weapons.length];
    p.weapon = nextW;
    setCurrentWeapon(nextW);

    // Locutor Arcade anuncia a arma
    if (nextW === 'HMG') sound.voiceAnnounce('HEAVY MACHINE GUN!');
    else if (nextW === 'ROCKET') sound.voiceAnnounce('ROCKET LAUNCHER!');
    else if (nextW === 'SHOTGUN') sound.voiceAnnounce('SHOTGUN!');
    else sound.playClick();
  }, []);

  // Inicializar / Resetar Partida
  const initGame = useCallback((levelToStart = 1) => {
    const s = gameStateRef.current;
    s.player.x = 100;
    s.player.y = 280;
    s.player.vx = 0;
    s.player.vy = 0;
    s.player.hp = 100;
    s.player.armor = 100;
    s.player.weapon = 'PISTOL';
    s.player.ammoHmg = 150;
    s.player.ammoRocket = 20;
    s.player.ammoShotgun = 15;
    s.player.grenades = 10;
    s.player.grenadeCooldown = 0;
    s.player.isSuperSoldier = false;
    s.player.superSoldierTimer = 0;
    s.player.facing = 1;
    s.player.isRolling = false;
    s.player.rollTimer = 0;
    s.player.rollCooldown = 0;
    s.player.muzzleFlash = 0;
    s.bullets = [];
    s.grenades = [];
    s.explosions = [];
    s.particles = [];
    s.enemies = [];
    s.ammoPickups = [];
    s.cameraX = 0;
    s.level = levelToStart;
    s.kills = 0;
    s.bossSpawned = false;
    s.spawnTimer = 0;

    // Coloca os Prisioneiros de Guerra (P.O.W.) no cenário
    s.pows = [
      { id: 1, x: 550, y: s.groundY, freed: false, thanked: false, itemDropped: false, waveAnim: 0 },
      { id: 2, x: 1250, y: s.groundY, freed: false, thanked: false, itemDropped: false, waveAnim: 0 },
      { id: 3, x: 1950, y: s.groundY, freed: false, thanked: false, itemDropped: false, waveAnim: 0 }
    ];

    setPlayerHp(100);
    setPlayerArmor(100);
    setAmmoHmg(150);
    setAmmoRocket(20);
    setAmmoShotgun(15);
    setGrenadesCount(10);
    setCurrentWeapon('PISTOL');
    setIsSuperSoldier(false);
    setRollReady(true);
    setCurrentLevel(levelToStart);
    setIsGameOver(false);
    setIsVictory(false);
    setIsPaused(false);

    // Anúncio oficial de voz arcade estilo Metal Slug
    sound.voiceAnnounce(`MISSION ${levelToStart} START!`);

    // Spawna primeiros inimigos
    for (let i = 0; i < 4; i++) {
      s.enemies.push({
        id: s.enemyIdCounter++,
        type: i % 2 === 0 ? 'knife' : 'pistol',
        x: 450 + i * 220,
        y: s.groundY - 58,
        vx: 0,
        width: 36,
        height: 58,
        hp: 30,
        maxHp: 30,
        shootCooldown: 60 + Math.random() * 60,
        state: 'walk',
        facing: -1,
        hitFlash: 0
      });
    }
  }, []);

  useEffect(() => {
    initGame(1);
  }, [initGame]);

  // Teclado Desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const k = gameStateRef.current.keys;
      const p = gameStateRef.current.player;

      if (e.code === 'ArrowLeft' || e.code === 'KeyA') k.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') k.right = true;
      if (e.code === 'ArrowUp' || e.code === 'KeyW') k.up = true;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') k.down = true;

      // Atirar: Barra de Espaço ou Z
      if (e.code === 'Space' || e.code === 'KeyZ') {
        k.shoot = true;
        e.preventDefault();
      }

      // Coronhada: Tecla X
      if (e.code === 'KeyX') {
        k.melee = true;
        e.preventDefault();
      }

      // Esquiva / Rolamento: Tecla C ou Shift
      if (e.code === 'KeyC' || e.code === 'ShiftLeft') {
        triggerDodgeRoll();
        e.preventDefault();
      }

      // Granadas de Mão estilo Metal Slug: Tecla G
      if (e.code === 'KeyG') {
        triggerGrenade();
        e.preventDefault();
      }

      // Teclas de Armas Metal Slug (H, R, S) ou 1, 2, 3, 4
      if (e.code === 'Digit1') {
        p.weapon = 'PISTOL';
        setCurrentWeapon('PISTOL');
        sound.playClick();
      }
      if (e.code === 'KeyH' || e.code === 'Digit2') {
        p.weapon = 'HMG';
        setCurrentWeapon('HMG');
        sound.voiceAnnounce('HEAVY MACHINE GUN!');
      }
      if (e.code === 'KeyR' || e.code === 'Digit3') {
        p.weapon = 'ROCKET';
        setCurrentWeapon('ROCKET');
        sound.voiceAnnounce('ROCKET LAUNCHER!');
      }
      if (e.code === 'KeyS' || e.code === 'Digit4') {
        p.weapon = 'SHOTGUN';
        setCurrentWeapon('SHOTGUN');
        sound.voiceAnnounce('SHOTGUN!');
      }

      // Alternar armas com Q
      if (e.code === 'KeyQ') {
        cycleWeapon();
      }

      // Pausar com P
      if (e.code === 'KeyP') {
        setIsPaused(prev => !prev);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const k = gameStateRef.current.keys;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') k.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') k.right = false;
      if (e.code === 'ArrowUp' || e.code === 'KeyW') k.up = false;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') k.down = false;
      if (e.code === 'Space' || e.code === 'KeyZ') k.shoot = false;
      if (e.code === 'KeyX') k.melee = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [triggerDodgeRoll, triggerGrenade, cycleWeapon]);

  // Loop Principal de Física e Renderização 60 FPS
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameLoop = () => {
      const state = gameStateRef.current;
      const { player, keys, bullets, grenades, explosions, pows, particles, enemies, ammoPickups } = state;

      if (!isPaused && !isGameOver && !isVictory) {
        // ================= ATUALIZAÇÃO DO JOGADOR =================
        // Transformação Super Soldado PMPE (Modo Fúria Tática)
        if (player.isSuperSoldier) {
          player.superSoldierTimer--;
          if (player.superSoldierTimer <= 0) {
            player.isSuperSoldier = false;
            setIsSuperSoldier(false);
          }
          // Partículas de aura dourada
          if (Math.random() < 0.4) {
            particles.push({
              x: player.x + Math.random() * player.width,
              y: player.y + Math.random() * player.height,
              vx: (Math.random() - 0.5) * 1.5,
              vy: -Math.random() * 2.5,
              alpha: 0.9,
              color: '#fde047',
              size: 3
            });
          }
        }

        // Se estiver rolando (Dodge Roll Tático com i-frames)
        if (player.isRolling) {
          player.vx = player.facing * player.rollSpeed;
          player.x += player.vx;
          player.rollTimer--;

          // Rastro tático de velocidade (Motion Blur Particles)
          if (Math.random() < 0.65) {
            particles.push({
              x: player.x + (player.facing === 1 ? -12 : player.width + 12),
              y: state.groundY - 18 + (Math.random() - 0.5) * 8,
              vx: -player.facing * 2.5,
              vy: (Math.random() - 0.5) * 2,
              alpha: 0.65,
              color: '#38bdf8',
              size: 3
            });
          }

          if (player.rollTimer <= 0) {
            player.isRolling = false;
          }
        } else {
          // Movimento Horizontal Normal
          const moveSpeed = player.isSuperSoldier ? 5.5 : 4.2;
          if (keys.left) {
            player.vx = -moveSpeed;
            player.facing = -1;
          } else if (keys.right) {
            player.vx = moveSpeed;
            player.facing = 1;
          } else {
            player.vx *= 0.75;
          }

          // Pulo
          if (keys.up && player.isGrounded) {
            player.vy = -12.5;
            player.isGrounded = false;
          }

          // Agachar
          player.isCrouching = keys.down && player.isGrounded;

          // Gravidade
          player.vy += 0.65;
          player.x += player.vx;
          player.y += player.vy;

          // Colisão com o Chão
          if (player.y >= state.groundY - player.height) {
            player.y = state.groundY - player.height;
            player.vy = 0;
            player.isGrounded = true;
          }
        }

        // Decrementa Cooldown da Esquiva e Granada
        if (player.rollCooldown > 0) {
          player.rollCooldown--;
          if (player.rollCooldown === 0) setRollReady(true);
        }
        if (player.grenadeCooldown > 0) player.grenadeCooldown--;

        // Limites do Mundo
        player.x = Math.max(20, Math.min(state.worldWidth - player.width - 20, player.x));

        // Câmera segue o jogador suavemente
        const targetCamX = player.x - 350;
        state.cameraX += (targetCamX - state.cameraX) * 0.1;
        state.cameraX = Math.max(0, Math.min(state.worldWidth - 800, state.cameraX));

        if (player.invulnerableTimer > 0) player.invulnerableTimer--;
        if (player.attackCooldown > 0) player.attackCooldown--;
        if (player.muzzleFlash > 0) player.muzzleFlash--;

        // ================= DISPAROS DO ARSENAL METAL SLUG 2 =================
        if (keys.shoot && player.attackCooldown <= 0 && !player.isRolling) {
          const spawnX = player.facing === 1 ? player.x + player.width + 4 : player.x - 4;
          const spawnY = player.isCrouching ? player.y + 38 : player.y + 22;

          if (player.weapon === 'PISTOL') {
            player.attackCooldown = 15;
            player.muzzleFlash = 3;
            sound.playGunshot38();
            bullets.push({
              x: spawnX,
              y: spawnY,
              vx: player.facing * 14,
              vy: 0,
              isPlayer: true,
              damage: player.isSuperSoldier ? 35 : 20,
              color: '#fde047'
            });
          } else if (player.weapon === 'HMG') {
            // H - Heavy Machine Gun (Cadência ultrarrápida contínua)
            if (player.ammoHmg > 0) {
              player.ammoHmg--;
              setAmmoHmg(player.ammoHmg);
              player.attackCooldown = 5; // muito rápida!
              player.muzzleFlash = 3;
              sound.playHeavyAk47Burst();
              bullets.push({
                x: spawnX,
                y: spawnY + (Math.random() - 0.5) * 4,
                vx: player.facing * 16,
                vy: (Math.random() - 0.5) * 0.8,
                isPlayer: true,
                damage: player.isSuperSoldier ? 28 : 18,
                color: '#ffcc00'
              });
            } else {
              player.weapon = 'PISTOL';
              setCurrentWeapon('PISTOL');
              sound.playClick();
            }
          } else if (player.weapon === 'ROCKET') {
            // R - Rocket Launcher (Mísseis Teleguiados com Fumaça)
            if (player.ammoRocket > 0) {
              player.ammoRocket--;
              setAmmoRocket(player.ammoRocket);
              player.attackCooldown = 26;
              player.muzzleFlash = 4;
              sound.playRocket();
              bullets.push({
                x: spawnX,
                y: spawnY,
                vx: player.facing * 7.5,
                vy: 0,
                isPlayer: true,
                damage: player.isSuperSoldier ? 85 : 55,
                color: '#ef4444',
                isHoming: true,
                isRocket: true
              });
            } else {
              player.weapon = 'PISTOL';
              setCurrentWeapon('PISTOL');
              sound.playClick();
            }
          } else if (player.weapon === 'SHOTGUN') {
            // S - Shotgun (Nuvem de Estilhaços Devastadora)
            if (player.ammoShotgun > 0) {
              player.ammoShotgun--;
              setAmmoShotgun(player.ammoShotgun);
              player.attackCooldown = 32;
              player.muzzleFlash = 5;
              sound.playShotgunBlast();
              for (let i = -3; i <= 3; i++) {
                bullets.push({
                  x: spawnX,
                  y: spawnY,
                  vx: player.facing * (13 + Math.random() * 4),
                  vy: i * 1.6,
                  isPlayer: true,
                  damage: player.isSuperSoldier ? 22 : 15,
                  color: '#ffffff'
                });
              }
            } else {
              player.weapon = 'PISTOL';
              setCurrentWeapon('PISTOL');
              sound.playClick();
            }
          }
        }

        // ================= FÍSICA DAS GRANADAS DE MÃO [G] =================
        for (let i = grenades.length - 1; i >= 0; i--) {
          const g = grenades[i];
          g.x += g.vx;
          g.y += g.vy;
          g.vy += g.gravity;

          // Quica no chão
          if (g.y >= g.groundY) {
            g.y = g.groundY;
            g.vy = -g.vy * 0.45;
            g.vx *= 0.72;
          }

          // Fumaça sutil na granada
          if (Math.random() < 0.3) {
            particles.push({
              x: g.x,
              y: g.y,
              vx: (Math.random() - 0.5) * 1,
              vy: -Math.random() * 1.5,
              alpha: 0.7,
              color: '#94a3b8',
              size: 2.5
            });
          }

          g.timer--;
          if (g.timer <= 0) {
            // Explosão em Área (Splash Damage)
            explosions.push({
              x: g.x,
              y: g.groundY,
              radius: 36,
              maxRadius: 36,
              life: 14
            });
            sound.playExplosion();

            // Dano massivo a todos os inimigos no raio da explosão
            enemies.forEach((enemy) => {
              const dist = Math.hypot(enemy.x + enemy.width / 2 - g.x, enemy.y + enemy.height / 2 - g.groundY);
              if (dist < 48 && enemy.hp > 0) {
                enemy.hp -= 85;
                enemy.hitFlash = 6;
                enemy.vx = Math.sign(enemy.x - g.x) * 12;
              }
            });

            grenades.splice(i, 1);
          }
        }

        // ================= ATUALIZAÇÃO DOS PROJÉTEIS E FOGUETES =================
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          b.x += b.vx;
          b.y += b.vy;

          // Foguetes Teleguiados (Homing) & Fumaça
          if (b.isRocket) {
            particles.push({
              x: b.x - b.vx * 0.6,
              y: b.y + (Math.random() - 0.5) * 3,
              vx: -b.vx * 0.15,
              vy: (Math.random() - 0.5) * 1.2,
              alpha: 0.8,
              color: '#cbd5e1',
              size: 3
            });

            if (b.isHoming) {
              const target = enemies.find(e => e.hp > 0 && Math.abs(e.x - b.x) < 450);
              if (target) {
                const targetCenterY = target.y + target.height / 2;
                if (targetCenterY > b.y) b.y += 1.0;
                if (targetCenterY < b.y) b.y -= 1.0;
              }
            }
          }

          // Se saiu do campo de visão da câmera
          if (b.x < state.cameraX - 100 || b.x > state.cameraX + 900) {
            bullets.splice(i, 1);
            continue;
          }

          // Colisão com Inimigos (quando o tiro é do Policial)
          if (b.isPlayer) {
            let hit = false;
            for (const enemy of enemies) {
              if (
                enemy.hp > 0 &&
                b.x > enemy.x &&
                b.x < enemy.x + enemy.width &&
                b.y > enemy.y &&
                b.y < enemy.y + enemy.height
              ) {
                enemy.hp -= b.damage;
                enemy.state = 'hurt';
                enemy.hitFlash = 4;
                hit = true;

                // Se era foguete, causa explosão no impacto
                if (b.isRocket) {
                  explosions.push({
                    x: b.x,
                    y: b.y,
                    radius: 28,
                    maxRadius: 28,
                    life: 12
                  });
                  sound.playExplosion();
                }

                // Partículas de faísca / impacto
                for (let p = 0; p < 5; p++) {
                  particles.push({
                    x: b.x,
                    y: b.y,
                    vx: (Math.random() - 0.5) * 4,
                    vy: (Math.random() - 0.5) * 4,
                    alpha: 1,
                    color: '#ef4444',
                    size: 2.5
                  });
                }
                break;
              }
            }
            if (hit) {
              bullets.splice(i, 1);
              continue;
            }
          } else {
            // Tiro do Inimigo tentando acertar o Policial
            // FRAMES DE INVULNERABILIDADE (I-FRAMES DO ROLAMENTO)
            if (player.isRolling) continue;

            if (
              player.invulnerableTimer <= 0 &&
              b.x > player.x &&
              b.x < player.x + player.width &&
              b.y > (player.isCrouching ? player.y + 24 : player.y) &&
              b.y < player.y + player.height
            ) {
              sound.playError();
              player.invulnerableTimer = 35;

              if (player.armor > 0) {
                player.armor = Math.max(0, player.armor - b.damage);
                setPlayerArmor(player.armor);
              } else {
                player.hp = Math.max(0, player.hp - b.damage);
                setPlayerHp(player.hp);
              }

              if (player.hp <= 0) setIsGameOver(true);

              bullets.splice(i, 1);
              continue;
            }
          }
        }

        // ================= RESGATE DE PRISIONEIROS (P.O.W.) =================
        pows.forEach((pow) => {
          if (!pow.freed) {
            // Resgate ao encostar nele ou atingi-lo
            const dist = Math.abs(player.x + player.width / 2 - pow.x);
            if (dist < 34) {
              pow.freed = true;
              pow.thanked = true;
              sound.voiceAnnounce('THANK YOU!');
              state.score += 500;
              setScore(state.score);

              // Prisioneiro joga uma arma do Metal Slug 2 no chão!
              const weaponOptions: WeaponType[] = ['HMG', 'ROCKET', 'SHOTGUN'];
              const chosen = weaponOptions[Math.floor(Math.random() * weaponOptions.length)];
              
              ammoPickups.push({
                id: Math.random(),
                x: pow.x + (player.facing === 1 ? 25 : -25),
                y: state.groundY - 14,
                weapon: chosen,
                amount: chosen === 'HMG' ? 120 : chosen === 'ROCKET' ? 15 : 12,
                isGunDrop: true
              });
            }
          } else {
            // Prisioneiro resgatado corre para fora da tela agradecendo
            pow.x -= 1.8;
          }
        });

        // ================= COLETA DE ARMAS E MUNIÇÃO =================
        for (let i = ammoPickups.length - 1; i >= 0; i--) {
          const item = ammoPickups[i];
          const dist = Math.abs(player.x + player.width / 2 - item.x);
          if (dist < 32 && player.y + player.height >= state.groundY - 20) {
            if (item.isGunDrop) {
              // Caixa de Arma Especial do P.O.W.
              player.weapon = item.weapon;
              setCurrentWeapon(item.weapon);

              if (item.weapon === 'HMG') {
                player.ammoHmg = Math.min(300, player.ammoHmg + item.amount);
                setAmmoHmg(player.ammoHmg);
                sound.voiceAnnounce('HEAVY MACHINE GUN!');
              } else if (item.weapon === 'ROCKET') {
                player.ammoRocket = Math.min(40, player.ammoRocket + item.amount);
                setAmmoRocket(player.ammoRocket);
                sound.voiceAnnounce('ROCKET LAUNCHER!');
              } else if (item.weapon === 'SHOTGUN') {
                player.ammoShotgun = Math.min(30, player.ammoShotgun + item.amount);
                setAmmoShotgun(player.ammoShotgun);
                sound.voiceAnnounce('SHOTGUN!');
              }
            } else {
              // Caixa de Munição Comum / Granadas
              player.grenades = Math.min(20, player.grenades + 4);
              setGrenadesCount(player.grenades);
              if (item.weapon === 'HMG') {
                player.ammoHmg = Math.min(300, player.ammoHmg + item.amount);
                setAmmoHmg(player.ammoHmg);
              } else if (item.weapon === 'ROCKET') {
                player.ammoRocket = Math.min(40, player.ammoRocket + item.amount);
                setAmmoRocket(player.ammoRocket);
              } else {
                player.ammoShotgun = Math.min(30, player.ammoShotgun + item.amount);
                setAmmoShotgun(player.ammoShotgun);
              }
              sound.playPickup();
            }

            // Partículas verdes de coleta
            for (let p = 0; p < 8; p++) {
              particles.push({
                x: item.x,
                y: state.groundY - 10,
                vx: (Math.random() - 0.5) * 4,
                vy: -Math.random() * 4,
                alpha: 1,
                color: '#22c55e',
                size: 2.5
              });
            }

            ammoPickups.splice(i, 1);
          }
        }

        // ================= ATUALIZAÇÃO DOS INIMIGOS =================
        state.spawnTimer++;
        if (state.spawnTimer > 130 && enemies.filter(e => e.hp > 0).length < 7) {
          state.spawnTimer = 0;
          const types: ('knife' | 'pistol' | 'rifle')[] = ['knife', 'pistol', 'rifle'];
          const pickedType = types[Math.floor(Math.random() * types.length)];
          const spawnX = Math.random() > 0.5 ? player.x + 480 : player.x - 480;

          if (spawnX > 50 && spawnX < state.worldWidth - 50) {
            enemies.push({
              id: state.enemyIdCounter++,
              type: pickedType,
              x: spawnX,
              y: state.groundY - 58,
              vx: 0,
              width: 36,
              height: 58,
              hp: pickedType === 'rifle' ? 45 : 30,
              maxHp: pickedType === 'rifle' ? 45 : 30,
              shootCooldown: 50 + Math.random() * 50,
              state: 'walk',
              facing: spawnX > player.x ? -1 : 1,
              hitFlash: 0
            });
          }
        }

        // Chefão de Fase se atingir mortes suficientes
        if (state.kills >= 12 && !state.bossSpawned) {
          state.bossSpawned = true;
          sound.playMilitaryAchievement();
          sound.voiceAnnounce('WARNING! BOSS INCOMING!');
          enemies.push({
            id: state.enemyIdCounter++,
            type: 'boss',
            x: player.x + 500,
            y: state.groundY - 76,
            vx: 0,
            width: 52,
            height: 76,
            hp: 280,
            maxHp: 280,
            shootCooldown: 40,
            state: 'walk',
            facing: -1,
            hitFlash: 0
          });
        }

        // Comportamento da IA dos Inimigos
        for (let i = enemies.length - 1; i >= 0; i--) {
          const enemy = enemies[i];
          if (enemy.hitFlash > 0) enemy.hitFlash--;

          if (enemy.hp <= 0) {
            state.kills++;
            setKillsCount(state.kills);
            const gainedScore = enemy.type === 'boss' ? 500 : 50;
            state.score += gainedScore;
            setScore(state.score);

            // Chance de dropar munição / granadas
            if (Math.random() < 0.55) {
              const dropType: WeaponType = Math.random() < 0.5 ? 'HMG' : Math.random() < 0.75 ? 'ROCKET' : 'SHOTGUN';
              ammoPickups.push({
                id: Math.random(),
                x: enemy.x + enemy.width / 2,
                y: state.groundY - 14,
                weapon: dropType,
                amount: dropType === 'HMG' ? 30 : dropType === 'ROCKET' ? 4 : 3
              });
            }

            if (state.score > highScore) {
              setHighScore(state.score);
              localStorage.setItem('pmpe_snes_highscore', state.score.toString());
            }

            // Se matou o Chefão: Vitória da Fase!
            if (enemy.type === 'boss') {
              setIsVictory(true);
              sound.playMilitaryAchievement();
              sound.voiceAnnounce('MISSION COMPLETE!');
            }

            enemies.splice(i, 1);
            continue;
          }

          enemy.facing = enemy.x < player.x ? 1 : -1;
          const distToPlayer = Math.abs(enemy.x - player.x);

          if (enemy.type === 'knife') {
            enemy.vx = enemy.facing * 2.8;
            enemy.x += enemy.vx;

            if (distToPlayer < 40 && player.invulnerableTimer <= 0) {
              if (!player.isRolling) {
                player.invulnerableTimer = 30;
                if (player.armor > 0) player.armor = Math.max(0, player.armor - 15);
                else player.hp = Math.max(0, player.hp - 15);
                setPlayerArmor(player.armor);
                setPlayerHp(player.hp);
                sound.playError();
                if (player.hp <= 0) setIsGameOver(true);
              }
            }
          } else {
            if (distToPlayer > 260) {
              enemy.vx = enemy.facing * 1.8;
              enemy.x += enemy.vx;
            } else if (distToPlayer < 120) {
              enemy.vx = -enemy.facing * 1.5;
              enemy.x += enemy.vx;
            }

            enemy.shootCooldown--;
            if (enemy.shootCooldown <= 0 && distToPlayer < 450) {
              enemy.shootCooldown = enemy.type === 'boss' ? 45 : enemy.type === 'rifle' ? 60 : 80;
              sound.playGunshot38();
              bullets.push({
                x: enemy.facing === 1 ? enemy.x + enemy.width + 4 : enemy.x - 4,
                y: enemy.y + 24,
                vx: enemy.facing * 8.5,
                vy: (Math.random() - 0.5) * 0.8,
                isPlayer: false,
                damage: enemy.type === 'boss' ? 25 : 12,
                color: '#ef4444'
              });
            }
          }
        }

        // Atualiza Explosões de Fogo
        for (let i = explosions.length - 1; i >= 0; i--) {
          const exp = explosions[i];
          exp.life--;
          if (exp.life <= 0) explosions.splice(i, 1);
        }

        // Atualiza Partículas
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.035;
          if (p.alpha <= 0) particles.splice(i, 1);
        }
      }

      // ================= RENDERIZAÇÃO ESTILO 16-BIT SNES =================
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Céu Urbano Noturno / Recife Antigo
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGrad.addColorStop(0, '#020617');
      skyGrad.addColorStop(0.5, '#0f172a');
      skyGrad.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Silhueta de Prédios e Postes em Parallax
      ctx.fillStyle = '#090d16';
      for (let b = 0; b < 18; b++) {
        const bx = b * 140 - (state.cameraX * 0.25) % 140;
        const bh = 140 + (b % 4) * 45;
        ctx.fillRect(bx, state.groundY - bh, 110, bh);

        ctx.fillStyle = '#fef08a';
        for (let w = 0; w < 4; w++) {
          if ((b + w) % 3 === 0) {
            ctx.fillRect(bx + 15 + (w % 2) * 40, state.groundY - bh + 25 + Math.floor(w / 2) * 35, 16, 16);
          }
        }
        ctx.fillStyle = '#090d16';
      }

      // 3. Asfalto / Chão da Rua
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, state.groundY, canvas.width, canvas.height - state.groundY);

      ctx.fillStyle = '#475569';
      ctx.fillRect(0, state.groundY, canvas.width, 6);

      // Faixas Amarelas da Rua
      ctx.fillStyle = '#f59e0b';
      for (let f = 0; f < 15; f++) {
        const fx = f * 100 - (state.cameraX % 100);
        ctx.fillRect(fx, state.groundY + 28, 48, 8);
      }

      // 4. Prisioneiros de Guerra (P.O.W. - Metal Slug Style)
      pows.forEach((pow) => {
        const powScreenX = pow.x - state.cameraX;
        if (powScreenX < -60 || powScreenX > canvas.width + 60) return;

        // Sombra
        ctx.fillStyle = 'rgba(0,0,0,0.45)';
        ctx.beginPath();
        ctx.ellipse(powScreenX + 12, state.groundY + 2, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        if (!pow.freed) {
          // Amarrado: Shorts amarelo, tronco nu, barba e cabelos longos
          ctx.fillStyle = '#eab308'; // Shorts amarelo
          ctx.fillRect(powScreenX + 4, state.groundY - 20, 16, 18);

          ctx.fillStyle = '#fed7aa'; // Tronco
          ctx.fillRect(powScreenX + 6, state.groundY - 36, 12, 16);

          // Cordas amarrando os braços
          ctx.fillStyle = '#78350f';
          ctx.fillRect(powScreenX + 4, state.groundY - 28, 16, 4);

          // Rosto com barba e cabelo comprido castanho
          ctx.fillStyle = '#fed7aa';
          ctx.fillRect(powScreenX + 8, state.groundY - 48, 12, 12);
          ctx.fillStyle = '#854d0e'; // Barba comprida
          ctx.fillRect(powScreenX + 6, state.groundY - 40, 16, 10);
          ctx.fillRect(powScreenX + 4, state.groundY - 52, 18, 8); // Cabelos longos

          // Letreiro piscante "HELP!"
          if (Math.floor(Date.now() / 400) % 2 === 0) {
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 9px monospace';
            ctx.fillText('HELP!', powScreenX + 2, state.groundY - 56);
          }
        } else {
          // Resgatado: Acenando e correndo com letreiro "THANK YOU!"
          ctx.fillStyle = '#eab308';
          ctx.fillRect(powScreenX + 4, state.groundY - 24, 14, 22);
          ctx.fillStyle = '#fed7aa';
          ctx.fillRect(powScreenX + 6, state.groundY - 38, 10, 14);
          ctx.fillStyle = '#854d0e';
          ctx.fillRect(powScreenX + 6, state.groundY - 48, 14, 12);

          // Balão "THANK YOU!"
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 10px monospace';
          ctx.fillText('THANK YOU!', powScreenX - 16, state.groundY - 54);
        }
      });

      // 5. Caixas de Armas & Munição no Asfalto (Metal Slug Drops)
      ammoPickups.forEach((item) => {
        const ix = item.x - state.cameraX;
        const bounce = Math.sin(Date.now() / 150) * 3;
        
        ctx.fillStyle = item.weapon === 'HMG' ? '#eab308' : item.weapon === 'ROCKET' ? '#ef4444' : '#0284c7';
        ctx.fillRect(ix - 14, state.groundY - 16 + bounce, 28, 16);

        ctx.fillStyle = '#020617';
        ctx.font = 'bold 9px monospace';
        const label = item.weapon === 'HMG' ? '[H]' : item.weapon === 'ROCKET' ? '[R]' : '[S]';
        ctx.fillText(label, ix - 8, state.groundY - 4 + bounce);

        // Letreiro luminoso flutuante da arma
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 8px monospace';
        ctx.fillText(item.weapon, ix - 16, state.groundY - 20 + bounce);
      });

      // 6. Granadas de Mão em Movimento Parabólico
      grenades.forEach((g) => {
        const gx = g.x - state.cameraX;
        ctx.fillStyle = '#22c55e'; // Granada verde oliva redonda
        ctx.beginPath();
        ctx.arc(gx, g.y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#eab308'; // Pino dourado
        ctx.fillRect(gx - 2, g.y - 7, 4, 3);
      });

      // ================= RENDERIZAÇÃO DO POLICIAL =================
      const p = player;
      const screenPx = p.x - state.cameraX;

      ctx.save();
      if (p.invulnerableTimer > 0 && Math.floor(p.invulnerableTimer / 4) % 2 === 0) {
        ctx.globalAlpha = 0.4;
      }

      // Sombra no chão
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.beginPath();
      const shadowW = p.isRolling ? p.width * 1.1 : p.width * 0.7;
      ctx.ellipse(screenPx + p.width / 2, state.groundY + 2, shadowW, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // ANIMAÇÃO DE ESQUIVA TÁTICA (DODGE ROLL)
      if (p.isRolling) {
        ctx.save();
        ctx.translate(screenPx + p.width / 2, state.groundY - 18);
        const rotAngle = (Date.now() / 35) * p.facing;
        ctx.rotate(rotAngle);

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(-4, -4, 8, 8);
        ctx.restore();

        ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
        const trailOffset = -p.facing * 18;
        ctx.fillRect(screenPx + trailOffset, state.groundY - 24, p.width, 18);
      } else {
        const bodyH = p.isCrouching ? p.height * 0.6 : p.height;
        const bodyY = p.isCrouching ? p.y + p.height * 0.4 : p.y;

        // Calça Tática Azul PMPE
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(screenPx + 6, bodyY + 36, 10, bodyH - 36);
        ctx.fillRect(screenPx + p.width - 16, bodyY + 36, 10, bodyH - 36);

        // Coturnos pretos
        ctx.fillStyle = '#020617';
        ctx.fillRect(screenPx + (p.facing === 1 ? 6 : 4), bodyY + bodyH - 8, 14, 8);
        ctx.fillRect(screenPx + (p.facing === 1 ? p.width - 16 : p.width - 18), bodyY + bodyH - 8, 14, 8);

        // Tronco / Colete Balístico Tático PMPE
        ctx.fillStyle = p.isSuperSoldier ? '#d97706' : '#0f172a';
        ctx.fillRect(screenPx + 4, bodyY + 14, p.width - 8, 24);

        // Brasão PMPE
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(screenPx + (p.facing === 1 ? 16 : 8), bodyY + 18, 6, 6);

        // Rosto
        ctx.fillStyle = '#fbcfe8';
        ctx.fillRect(screenPx + 10, bodyY + 2, 18, 14);

        // Boina Militar PMPE
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(screenPx + 6, bodyY - 4, 26, 8);
        ctx.fillStyle = '#d97706';
        ctx.fillRect(screenPx + (p.facing === 1 ? 22 : 6), bodyY + 1, 8, 3);

        // Arma em punho de acordo com o arsenal Metal Slug
        ctx.fillStyle = '#020617';
        const gunX = p.facing === 1 ? screenPx + p.width - 2 : screenPx - 16;
        const gunY = bodyY + 20;

        if (p.weapon === 'PISTOL') {
          ctx.fillRect(gunX, gunY, 14, 6);
          ctx.fillRect(p.facing === 1 ? gunX + 2 : gunX + 8, gunY + 4, 5, 8);
        } else if (p.weapon === 'HMG') {
          // HMG: Fuzil pesado dourado/metálico com tambor
          ctx.fillStyle = '#ca8a04';
          ctx.fillRect(p.facing === 1 ? gunX - 6 : gunX - 4, gunY - 2, 28, 9);
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(p.facing === 1 ? gunX + 4 : gunX + 8, gunY + 6, 10, 8); // tambor de balas
        } else if (p.weapon === 'ROCKET') {
          // Rocket Launcher com tubo grosso
          ctx.fillStyle = '#15803d';
          ctx.fillRect(p.facing === 1 ? gunX - 10 : gunX - 8, gunY - 6, 34, 14);
          ctx.fillStyle = '#ef4444'; // ogiva vermelha
          ctx.fillRect(p.facing === 1 ? gunX + 24 : gunX - 12, gunY - 4, 6, 10);
        } else {
          // Shotgun com cano duplo prateado
          ctx.fillStyle = '#94a3b8';
          ctx.fillRect(p.facing === 1 ? gunX - 6 : gunX - 4, gunY, 26, 8);
          ctx.fillStyle = '#78350f';
          ctx.fillRect(p.facing === 1 ? gunX - 12 : gunX + 16, gunY + 2, 8, 6);
        }

        // Muzzle Flash
        if (p.muzzleFlash > 0) {
          ctx.fillStyle = '#fffb00';
          const flashX = p.facing === 1 ? gunX + 26 : gunX - 12;
          ctx.fillRect(flashX, gunY - 4, 12, 14);
        }
      }

      ctx.restore();

      // ================= RENDERIZAÇÃO DOS INIMIGOS =================
      enemies.forEach((enemy) => {
        const ex = enemy.x - state.cameraX;

        // Sombra
        ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.beginPath();
        ctx.ellipse(ex + enemy.width / 2, state.groundY + 2, enemy.width * 0.7, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Barra de Vida
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(ex, enemy.y - 14, enemy.width, 5);
        ctx.fillStyle = enemy.type === 'boss' ? '#f59e0b' : '#ef4444';
        const hpPct = Math.max(0, enemy.hp / enemy.maxHp);
        ctx.fillRect(ex, enemy.y - 14, enemy.width * hpPct, 5);

        // Flash de dano
        if (enemy.hitFlash > 0) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(ex + 4, enemy.y + 4, enemy.width - 8, enemy.height - 8);
          return;
        }

        if (enemy.type === 'boss') {
          // CHEFÃO "O SOMBRA"
          ctx.fillStyle = '#450a0a';
          ctx.fillRect(ex + 4, enemy.y + 12, enemy.width - 8, enemy.height - 24);
          ctx.fillStyle = '#020617';
          ctx.fillRect(ex + 8, enemy.y + enemy.height - 12, 14, 12);
          ctx.fillRect(ex + enemy.width - 22, enemy.y + enemy.height - 12, 14, 12);

          ctx.fillStyle = '#1e293b';
          ctx.fillRect(ex + 14, enemy.y + 2, 24, 14);
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(enemy.facing === 1 ? ex + 28 : ex + 18, enemy.y + 6, 4, 3);

          ctx.fillStyle = '#020617';
          ctx.fillRect(enemy.facing === 1 ? ex + enemy.width - 4 : ex - 18, enemy.y + 24, 24, 9);
        } else {
          ctx.fillStyle = enemy.type === 'knife' ? '#ca8a04' : enemy.type === 'rifle' ? '#15803d' : '#b91c1c';
          ctx.fillRect(ex + 6, enemy.y + 14, enemy.width - 12, enemy.height - 28);

          ctx.fillStyle = '#1e3a8a';
          ctx.fillRect(ex + 8, enemy.y + enemy.height - 14, 8, 14);
          ctx.fillRect(ex + enemy.width - 16, enemy.y + enemy.height - 14, 8, 14);

          ctx.fillStyle = '#fed7aa';
          ctx.fillRect(ex + 10, enemy.y + 2, 16, 12);
          ctx.fillStyle = '#020617';
          ctx.fillRect(ex + 6, enemy.y - 2, 24, 6);

          if (enemy.type === 'knife') {
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(enemy.facing === 1 ? ex + enemy.width - 2 : ex - 8, enemy.y + 22, 10, 4);
          } else {
            ctx.fillStyle = '#020617';
            ctx.fillRect(enemy.facing === 1 ? ex + enemy.width - 2 : ex - 10, enemy.y + 20, 12, 5);
          }
        }
      });

      // ================= PROJÉTEIS E FOGUETES =================
      bullets.forEach((b) => {
        const bx = b.x - state.cameraX;

        if (b.isRocket) {
          // Desenho do Míssil do Rocket Launcher
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(bx - (b.vx > 0 ? 12 : -2), b.y - 4, 14, 8);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(bx - (b.vx > 0 ? 6 : -4), b.y - 2, 4, 4);
        } else {
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(bx, b.y, b.isPlayer ? 3.5 : 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = b.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(bx, b.y);
          ctx.lineTo(bx - b.vx * 1.5, b.y);
          ctx.stroke();
        }
      });

      // ================= EXPLOSÕES DE FOGO EXPANSIVAS =================
      explosions.forEach((exp) => {
        const ex = exp.x - state.cameraX;
        const progress = 1 - exp.life / 14;
        const curRadius = exp.radius * progress;

        ctx.fillStyle = exp.life > 7 ? '#fef08a' : '#ef4444';
        ctx.beginPath();
        ctx.arc(ex, exp.y - 12, curRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ex, exp.y - 12, curRadius * 1.2, 0, Math.PI * 2);
        ctx.stroke();
      });

      particles.forEach((pt) => {
        const px = pt.x - state.cameraX;
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = Math.max(0, pt.alpha);
        ctx.fillRect(px, pt.y, pt.size, pt.size);
        ctx.globalAlpha = 1;
      });

      // Scanlines CRT Retrô
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 1.5);
      }

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isGameOver, isVictory, highScore]);

  // Controles Virtuais Touch
  const handleTouchStart = (action: 'left' | 'right' | 'up' | 'down' | 'shoot' | 'melee') => {
    gameStateRef.current.keys[action] = true;
  };

  const handleTouchEnd = (action: 'left' | 'right' | 'up' | 'down' | 'shoot' | 'melee') => {
    gameStateRef.current.keys[action] = false;
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#020617',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      {/* ================= BARRA SUPERIOR FIXA ================= */}
      <header
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(2, 6, 23, 0.98) 100%)',
          borderBottom: '2px solid #ef4444',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(239, 68, 68, 0.25)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => {
              sound.playClick();
              onBackToApp();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1.15rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            <span>Voltar ao App</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)'
              }}
            >
              🎖️
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h1 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, letterSpacing: '0.04em' }}>
                  MISSÃO METAL SLUG PMPE • ARCADE ACTION
                </h1>
                <span
                  style={{
                    background: '#eab308',
                    color: '#020617',
                    fontSize: '0.68rem',
                    fontWeight: 900,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px'
                  }}
                >
                  ESTILO METAL SLUG 2
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                Arsenal Clássico (HMG, Rocket, Shotgun) • Granadas de Mão • Resgate de Reféns (P.O.W.)
              </div>
            </div>
          </div>
        </div>

        {/* HUD de Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 800 }}>PONTUAÇÃO</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fbbf24' }}>
                {score.toString().padStart(6, '0')}
              </div>
            </div>

            <div style={{ textAlign: 'right', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '0.8rem' }}>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 800 }}>RECORDE</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#38bdf8' }}>
                {highScore.toString().padStart(6, '0')}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsPaused(prev => !prev)}
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: '10px',
              background: isPaused ? '#22c55e' : 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            {isPaused ? <Play size={15} /> : <Pause size={15} />}
            <span>{isPaused ? 'Continuar' : 'Pausar (P)'}</span>
          </button>
        </div>
      </header>

      {/* ================= ÁREA PRINCIPAL DO JOGO ================= */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {/* HUD DO ARSENAL METAL SLUG 2 (VIDA, COLETE, GRANADAS, ARMAS) */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '0.65rem',
            padding: '0.75rem 1.25rem',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Vida e Colete */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f87171' }}>
                ❤️ VIDA: {playerHp}%
              </div>
              <div style={{ width: '100px', height: '8px', background: '#334155', borderRadius: '4px', overflow: 'hidden', marginTop: '0.2rem' }}>
                <div style={{ width: `${playerHp}%`, height: '100%', background: '#ef4444', transition: 'width 0.2s' }} />
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#38bdf8' }}>
                🛡️ COLETE: {playerArmor}%
              </div>
              <div style={{ width: '100px', height: '8px', background: '#334155', borderRadius: '4px', overflow: 'hidden', marginTop: '0.2rem' }}>
                <div style={{ width: `${playerArmor}%`, height: '100%', background: '#0284c7', transition: 'width 0.2s' }} />
              </div>
            </div>

            {/* Granadas de Mão */}
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#4ade80' }}>
                💣 BOMBAS [G]
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#86efac' }}>
                {grenadesCount}x
              </div>
            </div>

            {/* Status da Esquiva Tática */}
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, color: rollReady ? '#c084fc' : '#64748b' }}>
                🌀 ESQUIVA [C]
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 900, color: rollReady ? '#a855f7' : '#475569' }}>
                {rollReady ? 'PRONTA' : 'RECARREGANDO'}
              </div>
            </div>
          </div>

          {/* Arma Atual & Munição */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 800 }}>
                ARSENAL [H / R / S / Q]
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 900, color: '#fde047' }}>
                {currentWeapon === 'PISTOL' && '🔫 HANDGUN (.40 ILIMITADA)'}
                {currentWeapon === 'HMG' && `⚡ [H] HEAVY MACHINE GUN (${ammoHmg})`}
                {currentWeapon === 'ROCKET' && `🚀 [R] ROCKET LAUNCHER (${ammoRocket})`}
                {currentWeapon === 'SHOTGUN' && `💥 [S] SHOTGUN (${ammoShotgun})`}
              </div>
            </div>

            <div
              style={{
                padding: '0.35rem 0.8rem',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid #ef4444',
                color: '#fca5a5',
                fontSize: '0.8rem',
                fontWeight: 900
              }}
            >
              💀 {killsCount} Abates
            </div>
          </div>
        </div>

        {/* CANVAS RETRÔ COM OVERLAY DE GAME OVER / VITÓRIA */}
        <div
          style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '3px solid #334155',
            boxShadow: '0 0 35px rgba(0, 0, 0, 0.9)'
          }}
        >
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            style={{
              display: 'block',
              background: '#020617',
              maxWidth: '100%',
              height: 'auto'
            }}
          />

          {/* MODAL DE GAME OVER */}
          {isGameOver && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.88)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3.5rem' }}>💀</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#ef4444', margin: 0, letterSpacing: '0.04em' }}>
                MISSION FAILED!
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '450px', margin: 0 }}>
                Os criminosos prevaleceram. O comando militar aguarda seu retorno!
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fbbf24' }}>
                Pontuação Final: {score} pontos
              </div>
              <button
                onClick={() => initGame(1)}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(220, 38, 38, 0.5)'
                }}
              >
                <RotateCcw size={18} />
                <span>Tentar Novamente</span>
              </button>
            </div>
          )}

          {/* MODAL DE VITÓRIA / MISSÃO CUMPRIDA */}
          {isVictory && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(2, 6, 23, 0.92)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3.5rem' }}>🎖️</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#4ade80', margin: 0, letterSpacing: '0.04em' }}>
                MISSION COMPLETE!
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '450px', margin: 0 }}>
                Você neutralizou as forças inimigas, resgatou os prisioneiros e concluiu a missão com honra!
              </p>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fbbf24' }}>
                Pontuação Total: {score} PONTOS!
              </div>
              <button
                onClick={() => initGame(currentLevel + 1)}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.85rem 1.8rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #15803d, #16a34a)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(34, 197, 94, 0.5)'
                }}
              >
                <Play size={18} />
                <span>Avançar para Missão {currentLevel + 1}</span>
              </button>
            </div>
          )}
        </div>

        {/* GUIA DE COMANDOS / CONTROLES VIRTUAIS TÁTEIS */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            marginTop: '1rem',
            padding: '1rem 1.25rem',
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {/* Instruções de Teclado */}
          <div style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            <div>
              <strong style={{ color: '#ffffff' }}>Mover:</strong> Setas / A-D
            </div>
            <div>
              <strong style={{ color: '#ffffff' }}>Pular:</strong> Seta Cima / W
            </div>
            <div>
              <strong style={{ color: '#ffffff' }}>Agachar:</strong> Seta Baixo / S
            </div>
            <div>
              <strong style={{ color: '#c084fc' }}>Esquiva (i-frames):</strong> Tecla C / Shift
            </div>
            <div>
              <strong style={{ color: '#4ade80' }}>Granada:</strong> Tecla G
            </div>
            <div>
              <strong style={{ color: '#fde047' }}>Atirar:</strong> Barra de Espaço / Z
            </div>
            <div>
              <strong style={{ color: '#f87171' }}>Coronhada:</strong> Tecla X
            </div>
            <div>
              <strong style={{ color: '#38bdf8' }}>Arsenal:</strong> [H] Machine Gun | [R] Rocket | [S] Shotgun | [Q] Trocar
            </div>
          </div>

          {/* D-Pad Virtual e Botões de Ação para Telas Touch / Mobile */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            {/* Movimentação */}
            <button
              onMouseDown={() => handleTouchStart('left')}
              onMouseUp={() => handleTouchEnd('left')}
              onTouchStart={() => handleTouchStart('left')}
              onTouchEnd={() => handleTouchEnd('left')}
              style={{
                padding: '0.65rem 0.9rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              ◀ Esquerda
            </button>
            <button
              onMouseDown={() => handleTouchStart('up')}
              onMouseUp={() => handleTouchEnd('up')}
              onTouchStart={() => handleTouchStart('up')}
              onTouchEnd={() => handleTouchEnd('up')}
              style={{
                padding: '0.65rem 0.9rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              ▲ Pular
            </button>
            <button
              onMouseDown={() => handleTouchStart('right')}
              onMouseUp={() => handleTouchEnd('right')}
              onTouchStart={() => handleTouchStart('right')}
              onTouchEnd={() => handleTouchEnd('right')}
              style={{
                padding: '0.65rem 0.9rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              Direita ▶
            </button>

            {/* ESQUIVA TÁTICA (C) */}
            <button
              onClick={triggerDodgeRoll}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                background: rollReady
                  ? 'linear-gradient(135deg, #7c3aed, #9333ea)'
                  : 'rgba(100, 116, 139, 0.4)',
                border: rollReady ? '1.5px solid #c084fc' : '1px solid #475569',
                color: '#ffffff',
                fontWeight: 900,
                cursor: rollReady ? 'pointer' : 'not-allowed',
                boxShadow: rollReady ? '0 0 15px rgba(147, 51, 234, 0.45)' : 'none'
              }}
            >
              🌀 ESQUIVA (C)
            </button>

            {/* LANÇAR GRANADA [G] */}
            <button
              onClick={triggerGrenade}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                background: grenadesCount > 0
                  ? 'linear-gradient(135deg, #15803d, #16a34a)'
                  : 'rgba(100, 116, 139, 0.4)',
                border: '1.5px solid #4ade80',
                color: '#ffffff',
                fontWeight: 900,
                cursor: grenadesCount > 0 ? 'pointer' : 'not-allowed'
              }}
            >
              💣 GRANADA ({grenadesCount})
            </button>

            {/* Coronhada */}
            <button
              onMouseDown={() => handleTouchStart('melee')}
              onMouseUp={() => handleTouchEnd('melee')}
              onTouchStart={() => handleTouchStart('melee')}
              onTouchEnd={() => handleTouchEnd('melee')}
              style={{
                padding: '0.65rem 0.9rem',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid #ef4444',
                color: '#fca5a5',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              👊 CORONHADA
            </button>

            {/* Alternar Arma */}
            <button
              onClick={cycleWeapon}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.2)',
                border: '1px solid #38bdf8',
                color: '#7dd3fc',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              🔄 ARMA ({currentWeapon})
            </button>

            {/* Disparo */}
            <button
              onMouseDown={() => handleTouchStart('shoot')}
              onMouseUp={() => handleTouchEnd('shoot')}
              onTouchStart={() => handleTouchStart('shoot')}
              onTouchEnd={() => handleTouchEnd('shoot')}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                border: 'none',
                color: '#ffffff',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(220, 38, 38, 0.4)'
              }}
            >
              💥 ATIRAR
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
