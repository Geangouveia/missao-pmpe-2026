import React, { useState } from 'react';
import { Lock, User, KeyRound, AlertTriangle, CheckCircle2, Eye, EyeOff, Sparkles, Quote, RefreshCw } from 'lucide-react';
import { PmpeBrasaoLogo } from './PmpeBrasaoLogo';
import { StreakFlame } from './StreakFlame';
import { getDailyMotivationalQuote, MOTIVATIONAL_QUOTES } from '../utils/motivationalQuotes';
import { sound } from '../utils/sound';

interface LoginScreenProps {
  onLoginSuccess: (userName: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Citações motivacionais rotativas
  const currentQuote = MOTIVATIONAL_QUOTES[quoteIndex] || getDailyMotivationalQuote();

  // Lista de chaves de acesso autorizadas
  const AUTHORIZED_PASSCODES = ['PMPE2026', 'AOCP2026', 'FARDADO2026', 'POLICIA2026', 'MISSÃO2026'];

  const handleNextQuote = () => {
    sound.playClick();
    setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const cleanPass = password.trim().toUpperCase();

    if (!trimmedName) {
      sound.playError();
      setErrorMsg('Informe seu nome de guerra ou matrícula.');
      return;
    }

    if (!cleanPass) {
      sound.playError();
      setErrorMsg('Digite a chave de acesso da corporação.');
      return;
    }

    setIsSubmitting(true);

    // Validação da chave militar
    setTimeout(() => {
      const customKey = localStorage.getItem('pmpe_custom_auth_key')?.toUpperCase();
      const isAuthorized = AUTHORIZED_PASSCODES.includes(cleanPass) || (customKey && cleanPass === customKey);

      if (isAuthorized) {
        sound.playLevelUp();
        if (rememberMe) {
          localStorage.setItem('pmpe_auth_user', JSON.stringify({
            name: trimmedName,
            authenticatedAt: new Date().toISOString()
          }));
        } else {
          sessionStorage.setItem('pmpe_auth_user', JSON.stringify({
            name: trimmedName,
            authenticatedAt: new Date().toISOString()
          }));
        }
        onLoginSuccess(trimmedName);
      } else {
        sound.playError();
        setErrorMsg('Acesso Negado: Chave de segurança incorreta. Tente "PMPE2026" ou "AOCP2026".');
        setIsSubmitting(false);
      }
    }, 350);
  };

  const handleQuickName = (warriorName: string) => {
    sound.playClick();
    setName(warriorName);
    if (!password) {
      setPassword('PMPE2026');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      background: 'radial-gradient(circle at 50% 15%, #0f1c3f 0%, #060d1f 55%, #02050e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Luzes Nebulares e Feixes Militares */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '650px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(245, 158, 11, 0.08) 35%, rgba(30, 58, 138, 0.04) 70%, transparent 80%)',
        borderRadius: '50%',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        width: '100%',
        maxWidth: '520px',
        background: 'rgba(15, 23, 42, 0.92)',
        backdropFilter: 'blur(24px)',
        border: '1.5px solid rgba(56, 189, 248, 0.3)',
        borderRadius: '26px',
        padding: '2.5rem 2.25rem',
        boxShadow: '0 25px 55px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.18)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Brasão Oficial da PMPE no Topo */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
          <div style={{
            display: 'inline-block',
            position: 'relative',
            filter: 'drop-shadow(0 0 25px rgba(245, 158, 11, 0.45))'
          }}>
            <PmpeBrasaoLogo size={135} showText={false} />
          </div>

          {/* Insígnia e Título Nobre */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.3rem 0.9rem',
            borderRadius: '24px',
            background: 'rgba(234, 179, 8, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.45)',
            color: '#fbbf24',
            fontSize: '0.74rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.09em',
            margin: '0.85rem auto 0.6rem'
          }}>
            <Lock size={12} />
            <span>PORTAL TÁTICO MILITAR • PMPE 2026</span>
          </div>

          <h1 style={{
            fontSize: '1.65rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: '0 0 0.35rem',
            lineHeight: 1.2
          }}>
            Polícia Militar de Pernambuco
          </h1>

          <p style={{
            fontSize: '0.85rem',
            color: '#93c5fd',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.04em'
          }}>
            Preparatório Oficial para Soldado • Instituto AOCP
          </p>
        </div>

        {/* Card Motivacional Militar Dinâmico */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '16px',
          padding: '1rem 1.15rem',
          marginBottom: '1.5rem',
          position: 'relative',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(245, 158, 11, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <StreakFlame days={1} size="sm" showLabel={false} />
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 900,
                color: '#f59e0b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                Ordem do Dia • {currentQuote.tag}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextQuote}
              title="Nova Frase Motivacional"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '0.2rem 0.45rem',
                color: '#94a3b8',
                fontSize: '0.7rem',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={11} />
              <span>Trocar</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <Quote size={20} color="#f59e0b" style={{ flexShrink: 0, opacity: 0.85, marginTop: '2px' }} />
            <div>
              <p style={{
                margin: 0,
                fontSize: '0.86rem',
                color: '#f8fafc',
                fontWeight: 600,
                fontStyle: 'italic',
                lineHeight: 1.45
              }}>
                "{currentQuote.quote}"
              </p>
              <div style={{
                marginTop: '0.4rem',
                fontSize: '0.75rem',
                color: '#fbbf24',
                fontWeight: 800,
                letterSpacing: '0.03em'
              }}>
                — {currentQuote.author}
              </div>
            </div>
          </div>
        </div>

        {/* Mensagem de Erro */}
        {errorMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.85rem 1rem',
            borderRadius: '12px',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#fca5a5',
            fontSize: '0.84rem',
            marginBottom: '1.25rem',
            animation: 'shake 0.3s ease-in-out'
          }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Formulário de Acesso Militar */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          {/* Identificação do Aluno */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <label style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#cbd5e1',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}>
                Identificação do Guerreiro:
              </label>

              {/* Acesso Rápido de Guerreiro */}
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => handleQuickName('Soldado Gean')}
                  style={{
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '6px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.35)',
                    color: '#38bdf8',
                    cursor: 'pointer',
                    fontWeight: 700
                  }}
                  title="Preencher Soldado Gean"
                >
                  Soldado Gean
                </button>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b'
              }}>
                <User size={18} />
              </div>
              <input
                type="text"
                placeholder="Ex: Soldado Gean ou Seu Nome de Guerra"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  background: 'rgba(30, 41, 59, 0.75)',
                  border: '1px solid rgba(71, 85, 105, 0.55)',
                  borderRadius: '14px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#06b6d4'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.55)'}
                required
              />
            </div>
          </div>

          {/* Chave de Segurança */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <label style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#cbd5e1',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}>
                Chave de Acesso da Corporação:
              </label>

              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>
                (Padrão: PMPE2026)
              </span>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b'
              }}>
                <KeyRound size={18} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Insira a chave (Ex: PMPE2026)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 3rem 0.85rem 2.8rem',
                  background: 'rgba(30, 41, 59, 0.75)',
                  border: '1px solid rgba(71, 85, 105, 0.55)',
                  borderRadius: '14px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  letterSpacing: showPassword ? 'normal' : '0.15em',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#06b6d4'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.55)'}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
                title={showPassword ? 'Ocultar chave' : 'Exibir chave'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Opção: Lembrar no dispositivo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#06b6d4', width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <span>Manter conectado neste aparelho</span>
            </label>

            <span style={{ color: '#06b6d4', fontSize: '0.76rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Sparkles size={13} />
              <span>Sincronizado na Nuvem</span>
            </span>
          </div>

          {/* Botão Principal de Login */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '0.5rem',
              padding: '1rem 1.5rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 50%, #06b6d4 100%)',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              boxShadow: '0 12px 28px rgba(6, 182, 212, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              opacity: isSubmitting ? 0.8 : 1
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {isSubmitting ? (
              <span>Validando Credenciais Militares...</span>
            ) : (
              <>
                <CheckCircle2 size={20} />
                <span>Entrar na Missão PMPE</span>
              </>
            )}
          </button>
        </form>

        {/* Rodapé do Card com Lema Militar */}
        <div style={{
          marginTop: '1.75rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          fontSize: '0.76rem',
          color: '#64748b',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem'
        }}>
          <div style={{ color: '#fbbf24', fontWeight: 800, letterSpacing: '0.06em' }}>
            ⚔️ "O SUOR NO TREINO POUPA O SANGUE NA BATALHA"
          </div>
          <div>
            Polícia Militar de Pernambuco • Tradição de Bravura desde 1825
          </div>
        </div>
      </div>
    </div>
  );
};
