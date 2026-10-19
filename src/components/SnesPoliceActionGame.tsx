import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Shield, 
  Zap, 
  Trophy, 
  Crosshair, 
  Flame, 
  Gamepad2, 
  Swords, 
  Play, 
  Pause 
} from 'lucide-react';
import { sound } from '../utils/sound';

interface SnesPoliceActionGameProps {
  onBackToApp: () => void;
}

// Tipos do Jogo
interface Bullet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isPlayer: boolean;
  damage: number;
  color: string;
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
  const [playerAmmo, setPlayerAmmo] = useState(30);
  const [currentWeapon, setCurrentWeapon] = useState<'pistol' | 'rifle' | 'shotgun'>('pistol');
  const [combo, setCombo] = useState(0);

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
      ammo: 30,
      weapon: 'pistol' as 'pistol' | 'rifle' | 'shotgun',
      invulnerableTimer: 0
    },
    bullets: [] as Bullet[],
    particles: [] as Particle[],
    enemies: [] as Enemy[],
    keys: {
      left: false,
      right: false,
      up: false,
      down: false,
      shoot: false,
      melee: false
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

  // Inicializar / Resetar Partida
  const initGame = useCallback((levelToStart = 1) => {
    const s = gameStateRef.current;
    s.player.x = 100;
    s.player.y = 280;
    s.player.vx = 0;
    s.player.vy = 0;
    s.player.hp = 100;
    s.player.armor = 100;
    s.player.ammo = 30;
    s.player.weapon = levelToStart === 1 ? 'pistol' : levelToStart === 2 ? 'rifle' : 'shotgun';
    s.player.facing = 1;
    s.bullets = [];
    s.particles = [];
    s.enemies = [];
    s.cameraX = 0;
    s.level = levelToStart;
    s.kills = 0;
    s.bossSpawned = false;
    s.spawnTimer = 0;

    setPlayerHp(100);
    setPlayerArmor(100);
    setPlayerAmmo(30);
    setCurrentWeapon(s.player.weapon);
    setCurrentLevel(levelToStart);
    setIsGameOver(false);
    setIsVictory(false);
    setIsPaused(false);
    setCombo(0);

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
        facing: -1
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
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') k.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') k.right = true;
      if (e.code === 'ArrowUp' || e.code === 'KeyW') k.up = true;
      if (e.code === 'ArrowDown' || e.code === 'KeyS') k.down = true;
      if (e.code === 'Space' || e.code === 'KeyZ') {
        k.shoot = true;
        e.preventDefault();
      }
      if (e.code === 'KeyX' || e.code === 'ShiftLeft') {
        k.melee = true;
        e.preventDefault();
      }
      if (e.code === 'KeyC') {
        // Trocar arma
        const weapons: ('pistol' | 'rifle' | 'shotgun')[] = ['pistol', 'rifle', 'shotgun'];
        const currentIdx = weapons.indexOf(gameStateRef.current.player.weapon);
        const nextW = weapons[(currentIdx + 1) % weapons.length];
        gameStateRef.current.player.weapon = nextW;
        setCurrentWeapon(nextW);
        sound.playClick();
      }
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
      if (e.code === 'KeyX' || e.code === 'ShiftLeft') k.melee = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Loop Principal de Física e Renderização 60 FPS
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameLoop = () => {
      const state = gameStateRef.current;
      const { player, keys, bullets, particles, enemies } = state;

      if (!isPaused && !isGameOver && !isVictory) {
        // ================= ATUALIZAÇÃO DO JOGADOR =================
        // Movimento Horizontal
        if (keys.left) {
          player.vx = -4.2;
          player.facing = -1;
        } else if (keys.right) {
          player.vx = 4.2;
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

        // Limites do Mundo
        player.x = Math.max(20, Math.min(state.worldWidth - player.width - 20, player.x));

        // Câmera segue o jogador suavemente
        const targetCamX = player.x - 350;
        state.cameraX += (targetCamX - state.cameraX) * 0.1;
        state.cameraX = Math.max(0, Math.min(state.worldWidth - 800, state.cameraX));

        if (player.invulnerableTimer > 0) player.invulnerableTimer--;
        if (player.attackCooldown > 0) player.attackCooldown--;

        // ================= DISPAROS DO POLICIAL =================
        if (keys.shoot && player.attackCooldown <= 0) {
          if (player.weapon === 'pistol') {
            player.attackCooldown = 15;
            sound.playGunshot38();
            bullets.push({
              x: player.facing === 1 ? player.x + player.width + 4 : player.x - 4,
              y: player.isCrouching ? player.y + 40 : player.y + 24,
              vx: player.facing * 14,
              vy: 0,
              isPlayer: true,
              damage: 25,
              color: '#fde047'
            });
          } else if (player.weapon === 'rifle') {
            player.attackCooldown = 8;
            sound.playHeavyAk47Burst();
            bullets.push({
              x: player.facing === 1 ? player.x + player.width + 4 : player.x - 4,
              y: player.isCrouching ? player.y + 38 : player.y + 22,
              vx: player.facing * 16,
              vy: (Math.random() - 0.5) * 1.2,
              isPlayer: true,
              damage: 32,
              color: '#38bdf8'
            });
          } else if (player.weapon === 'shotgun') {
            player.attackCooldown = 28;
            sound.playHeavyAk47Burst();
            for (let i = -2; i <= 2; i++) {
              bullets.push({
                x: player.facing === 1 ? player.x + player.width + 4 : player.x - 4,
                y: player.isCrouching ? player.y + 38 : player.y + 24,
                vx: player.facing * (13 + Math.random() * 3),
                vy: i * 1.5,
                isPlayer: true,
                damage: 20,
                color: '#fb923c'
              });
            }
          }
        }

        // ================= CORONHADA / GOLPE CORPO A CORPO =================
        if (keys.melee && player.attackCooldown <= 0) {
          player.attackCooldown = 20;
          sound.playHit();
          // Área de acerto da coronhada na frente do policial
          const hitBox = {
            x: player.facing === 1 ? player.x + player.width : player.x - 45,
            y: player.y,
            width: 45,
            height: player.height
          };

          enemies.forEach((enemy) => {
            if (
              enemy.hp > 0 &&
              hitBox.x < enemy.x + enemy.width &&
              hitBox.x + hitBox.width > enemy.x &&
              hitBox.y < enemy.y + enemy.height &&
              hitBox.y + hitBox.height > enemy.y
            ) {
              enemy.hp -= 40;
              enemy.vx = player.facing * 8; // empurrão tático
              enemy.state = 'hurt';
              // Partículas de impacto
              for (let p = 0; p < 8; p++) {
                particles.push({
                  x: enemy.x + enemy.width / 2,
                  y: enemy.y + enemy.height / 2,
                  vx: (Math.random() - 0.5) * 6,
                  vy: (Math.random() - 0.5) * 6,
                  alpha: 1,
                  color: '#ffffff',
                  size: 3
                });
              }
            }
          });
        }

        // ================= ATUALIZAÇÃO DOS PROJÉTEIS =================
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          b.x += b.vx;
          b.y += b.vy;

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
                hit = true;

                // Partículas de sangue / faísca
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
            // Tiro do Inimigo acertando o Policial
            if (
              player.invulnerableTimer <= 0 &&
              b.x > player.x &&
              b.x < player.x + player.width &&
              b.y > (player.isCrouching ? player.y + 24 : player.y) &&
              b.y < player.y + player.height
            ) {
              sound.playError();
              player.invulnerableTimer = 35; // 35 frames de invulnerabilidade

              // Dano no Colete primeiro, depois no HP
              if (player.armor > 0) {
                player.armor = Math.max(0, player.armor - b.damage);
                setPlayerArmor(player.armor);
              } else {
                player.hp = Math.max(0, player.hp - b.damage);
                setPlayerHp(player.hp);
              }

              if (player.hp <= 0) {
                setIsGameOver(true);
              }

              bullets.splice(i, 1);
              continue;
            }
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
              facing: spawnX > player.x ? -1 : 1
            });
          }
        }

        // Chefão de Fase se atingir mortes suficientes
        if (state.kills >= 12 && !state.bossSpawned) {
          state.bossSpawned = true;
          sound.playMilitaryAchievement();
          enemies.push({
            id: state.enemyIdCounter++,
            type: 'boss',
            x: player.x + 500,
            y: state.groundY - 76,
            vx: 0,
            width: 52,
            height: 76,
            hp: 250,
            maxHp: 250,
            shootCooldown: 40,
            state: 'walk',
            facing: -1
          });
        }

        // Comportamento da IA dos Inimigos
        for (let i = enemies.length - 1; i >= 0; i--) {
          const enemy = enemies[i];

          if (enemy.hp <= 0) {
            // Morte do inimigo
            state.kills++;
            setKillsCount(state.kills);
            const gainedScore = enemy.type === 'boss' ? 500 : 50;
            state.score += gainedScore;
            setScore(state.score);
            setCombo(prev => prev + 1);

            if (state.score > highScore) {
              setHighScore(state.score);
              localStorage.setItem('pmpe_snes_highscore', state.score.toString());
            }

            // Se matou o Chefão: Vitória da Fase!
            if (enemy.type === 'boss') {
              setIsVictory(true);
              sound.playMilitaryAchievement();
            }

            // Remove inimigo derrotado
            enemies.splice(i, 1);
            continue;
          }

          // Olha na direção do policial
          enemy.facing = enemy.x < player.x ? 1 : -1;
          const distToPlayer = Math.abs(enemy.x - player.x);

          if (enemy.type === 'knife') {
            // Inimigo corpo a corpo: corre na direção do policial
            enemy.vx = enemy.facing * 2.8;
            enemy.x += enemy.vx;

            // Ataca se encostar
            if (distToPlayer < 40 && player.invulnerableTimer <= 0) {
              player.invulnerableTimer = 30;
              if (player.armor > 0) player.armor = Math.max(0, player.armor - 15);
              else player.hp = Math.max(0, player.hp - 15);
              setPlayerArmor(player.armor);
              setPlayerHp(player.hp);
              sound.playError();
              if (player.hp <= 0) setIsGameOver(true);
            }
          } else {
            // Inimigos com armas de fogo (pistol, rifle, boss)
            if (distToPlayer > 260) {
              enemy.vx = enemy.facing * 1.8;
              enemy.x += enemy.vx;
            } else if (distToPlayer < 120) {
              enemy.vx = -enemy.facing * 1.5; // recua um pouco
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

      // 1. Céu Urbano Noturno / Recife Antigo (Gradiente 16-bit)
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

        // Janelas amarelas acesas
        ctx.fillStyle = '#fef08a';
        for (let w = 0; w < 4; w++) {
          if ((b + w) % 3 === 0) {
            ctx.fillRect(bx + 15 + (w % 2) * 40, state.groundY - bh + 25 + Math.floor(w / 2) * 35, 16, 16);
          }
        }
        ctx.fillStyle = '#090d16';
      }

      // 3. Asfalto / Chão da Rua com Faixa Branca
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, state.groundY, canvas.width, canvas.height - state.groundY);

      // Meio-fio
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, state.groundY, canvas.width, 6);

      // Faixas Amarelas da Rua
      ctx.fillStyle = '#f59e0b';
      for (let f = 0; f < 15; f++) {
        const fx = f * 100 - (state.cameraX % 100);
        ctx.fillRect(fx, state.groundY + 28, 48, 8);
      }

      // ================= RENDERIZAÇÃO DO POLICIAL (16-BIT PIXEL STYLE) =================
      const p = player;
      const screenPx = p.x - state.cameraX;

      ctx.save();
      if (p.invulnerableTimer > 0 && Math.floor(p.invulnerableTimer / 4) % 2 === 0) {
        ctx.globalAlpha = 0.4;
      }

      // Sombra no chão
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.beginPath();
      ctx.ellipse(screenPx + p.width / 2, state.groundY + 2, p.width * 0.7, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Corpo / Uniforme PMPE (Azul Ferrete Tático)
      const bodyH = p.isCrouching ? p.height * 0.6 : p.height;
      const bodyY = p.isCrouching ? p.y + p.height * 0.4 : p.y;

      // Pernas / Calça Tática Camuflada Azul
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(screenPx + 6, bodyY + 36, 10, bodyH - 36);
      ctx.fillRect(screenPx + p.width - 16, bodyY + 36, 10, bodyH - 36);

      // Coturnos pretos
      ctx.fillStyle = '#020617';
      ctx.fillRect(screenPx + (p.facing === 1 ? 6 : 4), bodyY + bodyH - 8, 14, 8);
      ctx.fillRect(screenPx + (p.facing === 1 ? p.width - 16 : p.width - 18), bodyY + bodyH - 8, 14, 8);

      // Tronco / Colete Balístico Tático PMPE
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(screenPx + 4, bodyY + 14, p.width - 8, 24);

      // Brasão / Detalhe Amarelo PMPE no Peito
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(screenPx + (p.facing === 1 ? 16 : 8), bodyY + 18, 6, 6);

      // Cabeça / Rosto
      ctx.fillStyle = '#fbcfe8';
      ctx.fillRect(screenPx + 10, bodyY + 2, 18, 14);

      // Boina / Quepe Militar PMPE Azul e Dourado
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(screenPx + 6, bodyY - 4, 26, 8);
      ctx.fillStyle = '#d97706';
      ctx.fillRect(screenPx + (p.facing === 1 ? 22 : 6), bodyY + 1, 8, 3); // Emblema da Boina

      // Arma em punho
      ctx.fillStyle = '#020617';
      const gunX = p.facing === 1 ? screenPx + p.width - 2 : screenPx - 14;
      const gunY = bodyY + 20;

      if (p.weapon === 'pistol') {
        ctx.fillRect(gunX, gunY, 14, 6);
        ctx.fillRect(p.facing === 1 ? gunX + 2 : gunX + 8, gunY + 4, 5, 8);
      } else if (p.weapon === 'rifle') {
        ctx.fillRect(p.facing === 1 ? gunX - 8 : gunX - 6, gunY - 2, 26, 8);
        ctx.fillStyle = '#78350f'; // coronha de madeira/polímero
        ctx.fillRect(p.facing === 1 ? gunX - 12 : gunX + 16, gunY, 8, 6);
      } else {
        ctx.fillRect(p.facing === 1 ? gunX - 6 : gunX - 4, gunY, 24, 7);
      }

      ctx.restore();

      // ================= RENDERIZAÇÃO DOS INIMIGOS (BANDIDOS) =================
      enemies.forEach((enemy) => {
        const ex = enemy.x - state.cameraX;

        // Sombra
        ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.beginPath();
        ctx.ellipse(ex + enemy.width / 2, state.groundY + 2, enemy.width * 0.7, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Barra de Vida sobre a cabeça
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(ex, enemy.y - 14, enemy.width, 5);
        ctx.fillStyle = enemy.type === 'boss' ? '#f59e0b' : '#ef4444';
        const hpPct = Math.max(0, enemy.hp / enemy.maxHp);
        ctx.fillRect(ex, enemy.y - 14, enemy.width * hpPct, 5);

        // Visual do Bandido dependendo do tipo
        if (enemy.type === 'boss') {
          // CHEFÃO "O SOMBRA"
          ctx.fillStyle = '#450a0a'; // Sobretudo vermelho escuro
          ctx.fillRect(ex + 4, enemy.y + 12, enemy.width - 8, enemy.height - 24);
          ctx.fillStyle = '#020617';
          ctx.fillRect(ex + 8, enemy.y + enemy.height - 12, 14, 12);
          ctx.fillRect(ex + enemy.width - 22, enemy.y + enemy.height - 12, 14, 12);

          // Rosto sombrio com máscara
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(ex + 14, enemy.y + 2, 24, 14);
          ctx.fillStyle = '#ef4444'; // Olhos vermelhos
          ctx.fillRect(enemy.facing === 1 ? ex + 28 : ex + 18, enemy.y + 6, 4, 3);

          // Fuzil duplo do Boss
          ctx.fillStyle = '#020617';
          ctx.fillRect(enemy.facing === 1 ? ex + enemy.width - 4 : ex - 18, enemy.y + 24, 24, 9);
        } else {
          // BANDIDO COMUM
          ctx.fillStyle = enemy.type === 'knife' ? '#ca8a04' : enemy.type === 'rifle' ? '#15803d' : '#b91c1c';
          ctx.fillRect(ex + 6, enemy.y + 14, enemy.width - 12, enemy.height - 28);

          // Calça jeans
          ctx.fillStyle = '#1e3a8a';
          ctx.fillRect(ex + 8, enemy.y + enemy.height - 14, 8, 14);
          ctx.fillRect(ex + enemy.width - 16, enemy.y + enemy.height - 14, 8, 14);

          // Rosto com boné virado
          ctx.fillStyle = '#fed7aa';
          ctx.fillRect(ex + 10, enemy.y + 2, 16, 12);
          ctx.fillStyle = '#020617'; // Boné
          ctx.fillRect(ex + 6, enemy.y - 2, 24, 6);

          // Arma branca ou de fogo
          if (enemy.type === 'knife') {
            ctx.fillStyle = '#e2e8f0'; // Faca brilhante
            ctx.fillRect(enemy.facing === 1 ? ex + enemy.width - 2 : ex - 8, enemy.y + 22, 10, 4);
          } else {
            ctx.fillStyle = '#020617'; // Revólver
            ctx.fillRect(enemy.facing === 1 ? ex + enemy.width - 2 : ex - 10, enemy.y + 20, 12, 5);
          }
        }
      });

      // ================= RENDERIZAÇÃO DOS DISPAROS E PARTÍCULAS =================
      bullets.forEach((b) => {
        const bx = b.x - state.cameraX;
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(bx, b.y, b.isPlayer ? 3.5 : 3, 0, Math.PI * 2);
        ctx.fill();

        // Rastro de luz
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(bx, b.y);
        ctx.lineTo(bx - b.vx * 1.5, b.y);
        ctx.stroke();
      });

      particles.forEach((pt) => {
        const px = pt.x - state.cameraX;
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = Math.max(0, pt.alpha);
        ctx.fillRect(px, pt.y, pt.size, pt.size);
        ctx.globalAlpha = 1;
      });

      // Efeito de Scanlines Retrô Estilo SNES
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 1.5);
      }

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isGameOver, isVictory, highScore]);

  // Controles Virtuais Touch para Celular / Tablet
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
              🎮
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h1 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, letterSpacing: '0.04em' }}>
                  OPERAÇÃO RUA • 16-BIT ACTION (SNES)
                </h1>
                <span
                  style={{
                    background: '#dc2626',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 900,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px'
                  }}
                >
                  ESTILO THE SHADOW
                </span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                100% Ação & Diversão • Sem perguntas • Patrulhe as ruas e elimine os criminosos
              </div>
            </div>
          </div>
        </div>

        {/* HUD de Status (Pontos, Arma, Pausa) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {/* Pontuação */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 800 }}>PONTUAÇÃO</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fbbf24' }}>
                {score.toString().padStart(6, '0')}
              </div>
            </div>

            {/* Recorde */}
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
        {/* HUD DO POLICIAL (VIDA, COLETE, ARMA) */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.65rem',
            padding: '0.75rem 1.25rem',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Vida e Colete */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>❤️ VIDA DO POLICIAL</span>
                <span>{playerHp}%</span>
              </div>
              <div style={{ width: '130px', height: '10px', background: '#334155', borderRadius: '5px', overflow: 'hidden', marginTop: '0.2rem' }}>
                <div style={{ width: `${playerHp}%`, height: '100%', background: '#ef4444', transition: 'width 0.2s' }} />
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Shield size={12} />
                <span>COLETE BALÍSTICO</span>
                <span>{playerArmor}%</span>
              </div>
              <div style={{ width: '130px', height: '10px', background: '#334155', borderRadius: '5px', overflow: 'hidden', marginTop: '0.2rem' }}>
                <div style={{ width: `${playerArmor}%`, height: '100%', background: '#0284c7', transition: 'width 0.2s' }} />
              </div>
            </div>
          </div>

          {/* Arma Atual & Abates */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 800 }}>ARMA EQUIPADA (TECLA C)</div>
              <div style={{ fontSize: '0.98rem', fontWeight: 900, color: '#4ade80' }}>
                {currentWeapon === 'pistol' && '🔫 Pistola Taurus .40'}
                {currentWeapon === 'rifle' && '⚡ Fuzil IMBEL IA2 5.56'}
                {currentWeapon === 'shotgun' && '💥 Escopeta Tática Calibre 12'}
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
                POLICIAL ABATIDO EM COMBATE!
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '450px', margin: 0 }}>
                Os criminosos prevaleceram nesta rodada. Mas a farda da PMPE não desiste nunca!
              </p>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fbbf24' }}>
                Pontuação Final: {score} pontos ({killsCount} criminosos neutralizados)
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
                <span>Reiniciar Operação</span>
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
                MISSÃO CUMPRIDA • CIDADE PACIFICADA!
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '450px', margin: 0 }}>
                Você neutralizou o Chefão "O Sombra" e honrou a briosa Polícia Militar de Pernambuco com extrema coragem!
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
                <span>Próxima Operação de Patrulha</span>
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
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
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
              <strong style={{ color: '#ffffff' }}>Agachar (Esquivar):</strong> Seta Baixo / S
            </div>
            <div>
              <strong style={{ color: '#fde047' }}>Atirar:</strong> Barra de Espaço / Z
            </div>
            <div>
              <strong style={{ color: '#f87171' }}>Coronhada:</strong> Tecla X
            </div>
            <div>
              <strong style={{ color: '#38bdf8' }}>Trocar Arma:</strong> Tecla C
            </div>
          </div>

          {/* D-Pad Virtual para Telas Touch / Mobile */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onMouseDown={() => handleTouchStart('left')}
              onMouseUp={() => handleTouchEnd('left')}
              onTouchStart={() => handleTouchStart('left')}
              onTouchEnd={() => handleTouchEnd('left')}
              style={{
                padding: '0.65rem 1rem',
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
                padding: '0.65rem 1rem',
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
                padding: '0.65rem 1rem',
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
            <button
              onMouseDown={() => handleTouchStart('shoot')}
              onMouseUp={() => handleTouchEnd('shoot')}
              onTouchStart={() => handleTouchStart('shoot')}
              onTouchEnd={() => handleTouchEnd('shoot')}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                border: 'none',
                color: '#ffffff',
                fontWeight: 900,
                cursor: 'pointer'
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
