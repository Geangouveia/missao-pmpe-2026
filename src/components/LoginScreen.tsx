import React, { useState } from 'react';
import { 
  Lock, 
  User, 
  KeyRound, 
  AlertTriangle, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Quote, 
  RefreshCw, 
  ShieldCheck,
  Smartphone,
  ShieldAlert
} from 'lucide-react';
import { PmpeBrasaoLogo } from './PmpeBrasaoLogo';
import { StreakFlame } from './StreakFlame';
import { getDailyMotivationalQuote, MOTIVATIONAL_QUOTES } from '../utils/motivationalQuotes';
import { 
  validateLoginAttempt, 
  setUserPersonalPassword, 
  isMasterUser,
  createAndRecordSession,
  verifyDeviceLock
} from '../utils/authManager';
import { sound } from '../utils/sound';

interface LoginScreenProps {
  onLoginSuccess: (userName: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  // Formulário de Login Único (Acesso Restrito)
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [errorMsg, setErrorMsg] = useState('');
  const [isDeviceBlocked, setIsDeviceBlocked] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Modal de Criação de Senha (caso use a chave padrão inicial)
  const [isFirstLoginNewPasswordModal, setIsFirstLoginNewPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordModalError, setPasswordModalError] = useState('');
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);

  // Citações motivacionais rotativas
  const currentQuote = MOTIVATIONAL_QUOTES[quoteIndex] || getDailyMotivationalQuote();

  const handleNextQuote = () => {
    sound.playClick();
    setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
  };

  // Submit de Login Militar
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsDeviceBlocked(false);
    setSuccessMsg('');

    const trimmedName = name.trim();
    const cleanPass = password.trim();

    if (!trimmedName) {
      sound.playError();
      setErrorMsg('Informe seu nome de guerra ou identificação.');
      return;
    }

    if (!cleanPass) {
      sound.playError();
      setErrorMsg('Digite sua senha de acesso militar.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await validateLoginAttempt(trimmedName, cleanPass);

      if (res.allowed) {
        sound.playLevelUp();
        await createAndRecordSession(trimmedName);
        const userData = {
          name: trimmedName,
          authenticatedAt: new Date().toISOString(),
          isAdmin: isMasterUser(trimmedName)
        };
        if (rememberMe) {
          localStorage.setItem('pmpe_auth_user', JSON.stringify(userData));
        } else {
          sessionStorage.setItem('pmpe_auth_user', JSON.stringify(userData));
        }
        onLoginSuccess(trimmedName);
      } else if (res.status === 'device_locked') {
        sound.playError();
        setIsDeviceBlocked(true);
        setErrorMsg(res.message);
      } else if (res.status === 'needs_new_password') {
        sound.playSuccess();
        setIsFirstLoginNewPasswordModal(true);
      } else {
        sound.playError();
        setErrorMsg(res.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Falha de conexão com a rede de autenticação.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Concluir criação de senha pessoal
  const handleSaveFirstPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordModalError('');

    const trimmedNew = newPassword.trim();
    const trimmedConfirm = confirmPassword.trim();

    if (!trimmedNew || trimmedNew.length < 4) {
      sound.playError();
      setPasswordModalError('A nova senha deve ter no mínimo 4 caracteres.');
      return;
    }

    if (trimmedNew !== trimmedConfirm) {
      sound.playError();
      setPasswordModalError('A confirmação da senha não confere com a nova senha digitada.');
      return;
    }

    setIsSubmittingPassword(true);

    try {
      const trimmedName = name.trim();

      // Valida Trava Atômica de Dispositivo Único na Nuvem
      const devCheck = await verifyDeviceLock(trimmedName);
      if (!devCheck.allowed) {
        sound.playError();
        setPasswordModalError(devCheck.message || 'Dispositivo não autorizado para esta conta militar.');
        setIsSubmittingPassword(false);
        return;
      }

      await setUserPersonalPassword(trimmedName, trimmedNew);
      sound.playLevelUp();
      await createAndRecordSession(trimmedName);

      const userData = {
        name: trimmedName,
        authenticatedAt: new Date().toISOString(),
        isAdmin: isMasterUser(trimmedName)
      };

      if (rememberMe) {
        localStorage.setItem('pmpe_auth_user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('pmpe_auth_user', JSON.stringify(userData));
      }

      setIsFirstLoginNewPasswordModal(false);
      onLoginSuccess(trimmedName);
    } catch (err) {
      console.error(err);
      setPasswordModalError('Erro ao gravar sua nova senha.');
      setIsSubmittingPassword(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      background: 'radial-gradient(circle at 50% 12%, #101218 0%, #07080a 55%, #040507 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Iluminação Tática Militar (Dourado de Insígnia e Aço Escuro BOPE) */}
      <div style={{
        position: 'absolute',
        top: '2%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '680px',
        height: '680px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(220, 38, 38, 0.04) 45%, transparent 75%)',
        borderRadius: '50%',
        filter: 'blur(75px)',
        pointerEvents: 'none'
      }} />

      {/* Grid Tático Militar de Fundo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none'
      }} />

      <div 
        className="login-card-container"
        style={{
          width: '100%',
          maxWidth: '500px',
          background: 'linear-gradient(145deg, rgba(16, 18, 24, 0.98) 0%, rgba(10, 11, 15, 0.99) 100%)',
          backdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '24px',
          padding: '2.25rem 2rem',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.12)',
          position: 'relative',
          zIndex: 10,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* SELO DISCRETO NO TOPO: POWERED BY GEAN COM ASSINATURA DIFERENCIADA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.25rem 0.95rem',
          borderRadius: '20px',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          width: 'fit-content',
          margin: '0 auto 1.15rem auto',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}>
          <span style={{
            fontSize: '0.7rem',
            color: '#94a3b8',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 800
          }}>
            Powered by
          </span>
          <span style={{
            fontFamily: '"Caveat", "Dancing Script", cursive',
            fontSize: '1.45rem',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fef08a 0%, #fbbf24 50%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.04em',
            filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.7))',
            transform: 'rotate(-2.5deg)',
            display: 'inline-block',
            lineHeight: 1
          }}>
            GEAN
          </span>
          <span style={{ fontSize: '0.65rem', color: '#fbbf24', opacity: 0.9 }}>✦</span>
        </div>

        {/* Brasão Oficial da PMPE no Topo */}
        <div style={{ textAlign: 'center', marginBottom: '1.35rem', position: 'relative' }}>
          <div style={{
            display: 'inline-block',
            position: 'relative',
            filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.4))'
          }}>
            <PmpeBrasaoLogo size={98} showText={false} />
          </div>

          {/* Insígnia Militar e Título Oficial */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '20px',
            background: 'rgba(234, 179, 8, 0.15)',
            border: '1px solid rgba(234, 179, 8, 0.45)',
            color: '#fbbf24',
            fontSize: '0.78rem',
            fontWeight: 900,
            letterSpacing: '0.06em',
            marginTop: '0.85rem',
            textTransform: 'uppercase'
          }}>
            <ShieldCheck size={14} color="#f59e0b" />
            <span>Missão Militar • Soldado 2026</span>
          </div>

          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 900,
            color: '#ffffff',
            margin: '0.5rem 0 0.2rem',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
          }}>
            Polícia Militar de Pernambuco
          </h1>

          <p style={{
            fontSize: '0.84rem',
            color: '#d4af37',
            fontWeight: 700,
            margin: 0,
            letterSpacing: '0.04em'
          }}>
            Preparatório Oficial Soldado • Instituto AOCP
          </p>
        </div>

        {/* Card Motivacional Militar */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 18, 24, 0.96) 0%, rgba(10, 11, 15, 0.98) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '14px',
          padding: '0.85rem 1rem',
          marginBottom: '1.25rem',
          position: 'relative',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.65)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <StreakFlame days={1} size="sm" showLabel={false} />
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 900,
                color: '#d4af37',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                Ordem do Dia • {currentQuote.tag}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextQuote}
              title="Trocar Citação Motivacional"
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

          <div style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start' }}>
            <Quote size={18} color="#f59e0b" style={{ flexShrink: 0, opacity: 0.85, marginTop: '2px' }} />
            <div>
              <p style={{
                margin: 0,
                fontSize: '0.84rem',
                color: '#f8fafc',
                fontWeight: 600,
                fontStyle: 'italic',
                lineHeight: 1.4
              }}>
                "{currentQuote.quote}"
              </p>
              <div style={{
                marginTop: '0.35rem',
                fontSize: '0.74rem',
                color: '#fbbf24',
                fontWeight: 800,
                letterSpacing: '0.03em'
              }}>
                — {currentQuote.author}
              </div>
            </div>
          </div>
        </div>

        {/* ALERTA ESPECIAL: DISPOSITIVO BLOQUEADO (TRAVA DE APARELHO ÚNICO) */}
        {isDeviceBlocked && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            padding: '1rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(69, 10, 10, 0.8))',
            border: '2px solid #ef4444',
            color: '#fecaca',
            fontSize: '0.86rem',
            lineHeight: 1.5,
            marginBottom: '1.25rem',
            animation: 'fadeIn 0.25s ease-out',
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)'
          }}>
            <Smartphone size={24} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                🚫 Acesso Bloqueado • Dispositivo Não Autorizado
              </div>
              <div style={{ fontSize: '0.82rem', color: '#fca5a5' }}>
                {errorMsg}
              </div>
            </div>
          </div>
        )}

        {/* Mensagens de Sucesso e Outros Erros */}
        {successMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.8rem 1rem',
            borderRadius: '12px',
            background: 'rgba(34, 197, 94, 0.2)',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            color: '#86efac',
            fontSize: '0.84rem',
            fontWeight: 700,
            marginBottom: '1.15rem'
          }}>
            <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0 }} />
            <span>{successMsg}</span>
          </div>
        )}

        {errorMsg && !isDeviceBlocked && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.8rem 1rem',
            borderRadius: '12px',
            background: 'rgba(239, 68, 68, 0.18)',
            border: '1px solid rgba(239, 68, 68, 0.45)',
            color: '#fca5a5',
            fontSize: '0.84rem',
            marginBottom: '1.15rem',
            animation: 'fadeIn 0.25s ease-out'
          }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* FORMULÁRIO DE LOGIN MILITAR EXCLUSIVO */}
        <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase' }}>
                Identificação do Aluno / Nome de Guerra:
              </label>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Cadastro Militar</span>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#d4af37' }}>
                <User size={18} />
              </div>
              <input
                type="text"
                placeholder="Ex: Soldado Gean, Thiago, João..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrorMsg('');
                  setIsDeviceBlocked(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  background: 'rgba(18, 20, 27, 0.95)',
                  border: '1.5px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
                required
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase' }}>
                Senha de Acesso:
              </label>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#d4af37' }}>
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha de acesso"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg('');
                  setIsDeviceBlocked(false);
                }}
                style={{
                  width: '100%',
                  padding: '0.85rem 3rem 0.85rem 2.8rem',
                  background: 'rgba(18, 20, 27, 0.95)',
                  border: '1.5px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
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
                  color: '#a1a1aa',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.82rem', color: '#cbd5e1' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#d4af37', width: '16px', height: '16px' }}
              />
              <span>Manter conectado neste dispositivo</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '0.95rem',
              borderRadius: '14px',
              border: 'none',
              background: 'linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #e5c158 100%)',
              color: '#07080a',
              fontWeight: 900,
              fontSize: '1.02rem',
              letterSpacing: '0.04em',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
              transition: 'all 0.15s ease',
              opacity: isSubmitting ? 0.8 : 1,
              marginTop: '0.35rem'
            }}
          >
            {isSubmitting ? (
              <span>Validando Acesso Militar...</span>
            ) : (
              <>
                <CheckCircle2 size={19} color="#07080a" />
                <span>Entrar na Missão PMPE ➔</span>
              </>
            )}
          </button>
        </form>

        {/* AVISO INSTITUCIONAL DE ACESSO RESTRITO & DISPOSITIVO ÚNICO */}
        <div style={{
          marginTop: '1.75rem',
          padding: '0.85rem 1rem',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            fontSize: '0.74rem',
            fontWeight: 800,
            color: '#fbbf24',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '0.25rem'
          }}>
            <ShieldAlert size={14} color="#f59e0b" />
            <span>Plataforma Restrita ao Efetivo Matriculado</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.76rem', color: '#94a3b8', lineHeight: 1.4 }}>
            Matrículas e senhas são geradas exclusivamente pelo <strong>Comandante Gean</strong>.<br />
            Por segurança operacional, cada conta possui autorização em <strong>apenas 1 dispositivo</strong>.
          </p>
        </div>

        {/* ASSINATURA OFICIAL DE AUTENTICIDADE DO CRIADOR (COMANDANTE GEAN) */}
        <div style={{
          marginTop: '1.25rem',
          padding: '1rem 1.25rem',
          borderRadius: '16px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(35, 26, 10, 0.95) 0%, rgba(15, 12, 6, 0.98) 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.55)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(245, 158, 11, 0.12)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Cabeçalho da Chancela */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(245, 158, 11, 0.25)',
            paddingBottom: '0.45rem',
            marginBottom: '0.65rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.64rem',
              fontWeight: 900,
              color: '#f59e0b',
              textTransform: 'uppercase',
              letterSpacing: '0.12em'
            }}>
              <span>✦ CHANCELA OFICIAL DE AUTORIA ✦</span>
            </div>
            <span style={{
              fontSize: '0.62rem',
              color: '#fbbf24',
              background: 'rgba(245, 158, 11, 0.15)',
              padding: '0.15rem 0.45rem',
              borderRadius: '6px',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontWeight: 800
            }}>
              PATENTE PMPE 2026
            </span>
          </div>

          {/* Área da Assinatura Manuscrita com Selo Dourado */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.04em' }}>
                Idealizador & Desenvolvedor:
              </div>

              {/* Assinatura Manuscrita Estilizada com SVG e Tipografia Cursiva */}
              <div style={{ position: 'relative', display: 'inline-block', marginTop: '0.15rem' }}>
                <div style={{
                  fontFamily: '"Caveat", "Dancing Script", cursive',
                  fontSize: '2.1rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  lineHeight: 1.1,
                  letterSpacing: '0.04em',
                  textShadow: '0 0 12px rgba(245, 158, 11, 0.6), 0 2px 4px rgba(0, 0, 0, 0.8)',
                  transform: 'rotate(-2deg)'
                }}>
                  Gean Gouveia
                </div>

                {/* Traço Fluido de Caneta-Tinteiro com SVG (Florão da Assinatura) */}
                <svg width="190" height="18" viewBox="0 0 190 18" fill="none" style={{ display: 'block', marginTop: '-4px' }}>
                  <path
                    d="M 5 8 Q 45 15, 95 6 T 175 9 Q 185 10, 188 4"
                    stroke="url(#sigGoldGrad)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="sigGoldGrad" x1="0" y1="0" x2="190" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f59e0b" />
                      <stop offset="0.5" stopColor="#fef08a" />
                      <stop offset="1" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div style={{ fontSize: '0.68rem', color: '#d4af37', fontWeight: 700, marginTop: '0.2rem' }}>
                Assinatura Oficial do Autor da Plataforma
              </div>
            </div>

            {/* Selo Tático Dourado de Autenticidade */}
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #f59e0b 0%, #b45309 70%, #78350f 100%)',
              border: '2px solid #fef08a',
              boxShadow: '0 0 20px rgba(245, 158, 11, 0.65), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '1rem', lineHeight: 1 }}>⭐</span>
              <span style={{
                fontSize: '0.55rem',
                fontWeight: 900,
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                letterSpacing: '0.06em'
              }}>
                GEAN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE PRIMEIRO ACESSO (DEFINIÇÃO DE SENHA PESSOAL) */}
      {isFirstLoginNewPasswordModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem',
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '440px',
            width: '100%',
            background: 'linear-gradient(145deg, rgba(16, 18, 24, 0.98) 0%, rgba(10, 11, 15, 0.99) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.45)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.15)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1.5px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem',
                color: '#d4af37',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.25)'
              }}>
                <KeyRound size={26} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                Primeiro Acesso: Cadastre Sua Senha
              </h3>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.84rem', color: '#94a3b8' }}>
                Guerreiro <strong>{name}</strong>, defina sua senha pessoal definitiva para acessar a plataforma.
              </p>
            </div>

            {passwordModalError && (
              <div style={{
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid #ef4444',
                color: '#fca5a5',
                fontSize: '0.82rem',
                marginBottom: '1rem'
              }}>
                ⚠️ {passwordModalError}
              </div>
            )}

            <form onSubmit={handleSaveFirstPassword} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  Nova Senha Pessoal (mínimo 4 caracteres):
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Digite sua nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 2.8rem 0.8rem 1rem',
                      background: 'rgba(18, 20, 27, 0.95)',
                      border: '1.5px solid rgba(212, 175, 55, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      color: '#a1a1aa',
                      cursor: 'pointer'
                    }}
                  >
                    {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  Confirme a Nova Senha:
                </label>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Repita a senha para confirmar"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(18, 20, 27, 0.95)',
                    border: '1.5px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingPassword}
                style={{
                  padding: '0.85rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #e5c158 100%)',
                  color: '#07080a',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                  cursor: isSubmittingPassword ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.35)',
                  marginTop: '0.5rem'
                }}
              >
                {isSubmittingPassword ? 'Salvando Senha...' : 'Confirmar e Entrar no Sistema'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
