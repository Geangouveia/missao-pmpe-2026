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
  UserPlus,
  LogIn
} from 'lucide-react';
import { PmpeBrasaoLogo } from './PmpeBrasaoLogo';
import { StreakFlame } from './StreakFlame';
import { getDailyMotivationalQuote, MOTIVATIONAL_QUOTES } from '../utils/motivationalQuotes';
import { 
  validateLoginAttempt, 
  setUserPersonalPassword, 
  registerNewUser,
  isMasterUser 
} from '../utils/authManager';
import { sound } from '../utils/sound';

interface LoginScreenProps {
  onLoginSuccess: (userName: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  // Aba ativa: 'login' (Entrar) ou 'register' (Novo Alistamento)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Formulário de Login
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Formulário de Cadastro Rápido (Entrada Imediata)
  const [regName, setRegName] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
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

  // 1. Submit de Login (Entrar)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
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

  // 2. Submit de Cadastro Rápido (Entrada Imediata Sem Autorização Prévia)
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const trimmedName = regName.trim();
    const cleanPass = regPassword.trim();
    const confirmPass = regConfirmPassword.trim();

    if (!trimmedName || trimmedName.length < 2) {
      sound.playError();
      setErrorMsg('Informe seu nome ou identificação com pelo menos 2 caracteres.');
      return;
    }

    if (!cleanPass || cleanPass.length < 4) {
      sound.playError();
      setErrorMsg('A sua senha militar deve conter pelo menos 4 caracteres.');
      return;
    }

    if (cleanPass !== confirmPass) {
      sound.playError();
      setErrorMsg('A confirmação da senha não confere com a senha digitada.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await registerNewUser(trimmedName, cleanPass);

      if (res.success) {
        sound.playLevelUp();
        setSuccessMsg(res.message);

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

        setTimeout(() => {
          onLoginSuccess(trimmedName);
        }, 300);
      } else {
        sound.playError();
        setErrorMsg(res.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Erro ao registrar novo guerreiro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 3. Salvar nova senha se usou chave padrão
  const handleSaveNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordModalError('');

    const trimmedNew = newPassword.trim();
    const trimmedConfirm = confirmPassword.trim();

    if (!trimmedNew || trimmedNew.length < 4) {
      sound.playError();
      setPasswordModalError('A sua nova senha deve conter pelo menos 4 caracteres.');
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
      await setUserPersonalPassword(trimmedName, trimmedNew);
      sound.playLevelUp();

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
      background: 'radial-gradient(circle at 50% 12%, #18231c 0%, #0d1410 50%, #060907 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Iluminação Tática Militar (Verde Oliva & Dourado PMPE) */}
      <div style={{
        position: 'absolute',
        top: '2%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '680px',
        height: '680px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(245, 158, 11, 0.08) 40%, transparent 75%)',
        borderRadius: '50%',
        filter: 'blur(75px)',
        pointerEvents: 'none'
      }} />

      {/* Grid Tático Militar de Fundo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none'
      }} />

      <div 
        className="login-card-container"
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'rgba(17, 24, 19, 0.94)',
          backdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(34, 197, 94, 0.35)',
          borderRadius: '24px',
          padding: '2.25rem 2rem',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(34, 197, 94, 0.15)',
          position: 'relative',
          zIndex: 10
        }}
      >
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
            border: '1px solid rgba(245, 158, 11, 0.45)',
            color: '#fbbf24',
            fontSize: '0.74rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            margin: '0.75rem auto 0.45rem'
          }}>
            <Lock size={12} />
            <span>SISTEMA TÁTICO MILITAR • PMPE 2026</span>
          </div>

          <h1 style={{
            fontSize: '1.6rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#f8fafc',
            margin: '0 0 0.25rem',
            lineHeight: 1.2
          }}>
            Polícia Militar de Pernambuco
          </h1>

          <p style={{
            fontSize: '0.84rem',
            color: '#86efac',
            fontWeight: 600,
            margin: 0,
            letterSpacing: '0.04em'
          }}>
            Preparatório Oficial Soldado • Instituto AOCP
          </p>
        </div>

        {/* Card Motivacional Militar */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(24, 34, 27, 0.9) 0%, rgba(14, 20, 16, 0.95) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '14px',
          padding: '0.85rem 1rem',
          marginBottom: '1.25rem',
          position: 'relative',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
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

        {/* Abas Táticas Militares: Entrar vs. Novo Alistamento */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem',
          background: 'rgba(0, 0, 0, 0.35)',
          padding: '0.35rem',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '1.25rem'
        }}>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setAuthMode('login');
              setErrorMsg('');
              setSuccessMsg('');
            }}
            style={{
              padding: '0.65rem 0.8rem',
              borderRadius: '10px',
              border: 'none',
              background: authMode === 'login' ? 'linear-gradient(135deg, #15803d, #16a34a)' : 'transparent',
              color: authMode === 'login' ? '#ffffff' : '#94a3b8',
              fontWeight: 800,
              fontSize: '0.84rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: authMode === 'login' ? '0 4px 14px rgba(22, 163, 74, 0.4)' : 'none'
            }}
          >
            <LogIn size={15} />
            <span>Entrar na Missão</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setAuthMode('register');
              setErrorMsg('');
              setSuccessMsg('');
            }}
            style={{
              padding: '0.65rem 0.8rem',
              borderRadius: '10px',
              border: 'none',
              background: authMode === 'register' ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'transparent',
              color: authMode === 'register' ? '#000000' : '#94a3b8',
              fontWeight: 800,
              fontSize: '0.84rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: authMode === 'register' ? '0 4px 14px rgba(245, 158, 11, 0.4)' : 'none'
            }}
          >
            <UserPlus size={15} />
            <span>Novo Alistamento</span>
          </button>
        </div>

        {/* Mensagens de Sucesso e Erro */}
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

        {errorMsg && (
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
            animation: 'shake 0.3s ease-in-out'
          }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* 1. ABA DE LOGIN (JÁ ALISTADO) */}
        {authMode === 'login' ? (
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Identificação do Guerreiro:
                </label>
                <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 700 }}>
                  Acesso Militar
                </span>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Nome de guerra ou identificação"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrorMsg('');
                  }}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.8rem',
                    background: 'rgba(24, 34, 27, 0.85)',
                    border: '1px solid rgba(71, 85, 105, 0.55)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.55)'}
                  required
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Senha de Acesso Militar:
                </label>
                <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                  (Senha do Guerreiro)
                </span>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  <KeyRound size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Insira sua senha militar"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMsg('');
                  }}
                  style={{
                    width: '100%',
                    padding: '0.85rem 3rem 0.85rem 2.8rem',
                    background: 'rgba(24, 34, 27, 0.85)',
                    border: '1px solid rgba(71, 85, 105, 0.55)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    letterSpacing: showPassword ? 'normal' : '0.12em'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#22c55e'}
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
                  title={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ accentColor: '#22c55e', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span>Manter conectado neste aparelho</span>
              </label>

              <span style={{ color: '#4ade80', fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <ShieldCheck size={14} />
                <span>Entrada Direta</span>
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: '0.4rem',
                padding: '0.95rem 1.5rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #15803d 0%, #16a34a 60%, #22c55e 100%)',
                border: '1px solid rgba(34, 197, 94, 0.6)',
                color: '#ffffff',
                fontSize: '0.98rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                boxShadow: '0 8px 24px rgba(22, 163, 74, 0.45)',
                transition: 'all 0.15s ease',
                opacity: isSubmitting ? 0.8 : 1
              }}
            >
              {isSubmitting ? (
                <span>Validando Acesso Militar...</span>
              ) : (
                <>
                  <CheckCircle2 size={19} />
                  <span>Entrar na Missão PMPE</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* 2. ABA DE NOVO ALISTAMENTO (CADASTRO INSTANTÂNEO SEM ESPERA) */
          <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
            <div style={{
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#fef08a',
              fontSize: '0.78rem',
              lineHeight: 1.4
            }}>
              ⭐ <strong>Entrada Imediata:</strong> Novos guerreiros são cadastrados e liberados instantaneamente para treinar, sem fila de espera!
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Seu Nome de Guerra / Identificação:
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Ex: Aluno Silva, Carlos, Maria..."
                  value={regName}
                  onChange={(e) => {
                    setRegName(e.target.value);
                    setErrorMsg('');
                  }}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.8rem',
                    background: 'rgba(24, 34, 27, 0.85)',
                    border: '1px solid rgba(71, 85, 105, 0.55)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.55)'}
                  required
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Crie Sua Senha Pessoal (mínimo 4 dígitos):
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  <KeyRound size={18} />
                </div>
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  placeholder="Defina sua senha de acesso"
                  value={regPassword}
                  onChange={(e) => {
                    setRegPassword(e.target.value);
                    setErrorMsg('');
                  }}
                  style={{
                    width: '100%',
                    padding: '0.85rem 3rem 0.85rem 2.8rem',
                    background: 'rgba(24, 34, 27, 0.85)',
                    border: '1px solid rgba(71, 85, 105, 0.55)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.55)'}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
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
                >
                  {showRegPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Confirmar Senha:
              </label>
              <input
                type={showRegPassword ? 'text' : 'password'}
                placeholder="Repita a senha digitada"
                value={regConfirmPassword}
                onChange={(e) => {
                  setRegConfirmPassword(e.target.value);
                  setErrorMsg('');
                }}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  background: 'rgba(24, 34, 27, 0.85)',
                  border: '1px solid rgba(71, 85, 105, 0.55)',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.55)'}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: '0.4rem',
                padding: '0.95rem 1.5rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 60%, #fbbf24 100%)',
                border: '1px solid rgba(245, 158, 11, 0.6)',
                color: '#000000',
                fontSize: '0.98rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                boxShadow: '0 8px 24px rgba(245, 158, 11, 0.45)',
                transition: 'all 0.15s ease',
                opacity: isSubmitting ? 0.8 : 1
              }}
            >
              {isSubmitting ? (
                <span>Efetivando Alistamento Militar...</span>
              ) : (
                <>
                  <UserPlus size={19} />
                  <span>Cadastrar & Iniciar Missão</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Rodapé com Lema Militar Oficial */}
        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1.15rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          fontSize: '0.76rem',
          color: '#94a3b8',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem'
        }}>
          <div style={{ color: '#fbbf24', fontWeight: 800, letterSpacing: '0.06em' }}>
            ⚔️ "O SUOR NO TREINO POUPA O SANGUE NA BATALHA"
          </div>
          <div>
            Polícia Militar de Pernambuco • CFSD Soldado 2026
          </div>
        </div>
      </div>

      {/* Modal de Criação de Senha Caso o Aluno Tenha Usado Chave Padrão */}
      {isFirstLoginNewPasswordModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(2, 6, 4, 0.94)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '1.5rem'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '460px',
            background: 'rgba(17, 24, 19, 0.98)',
            border: '2px solid rgba(34, 197, 94, 0.65)',
            borderRadius: '24px',
            padding: '2.25rem 2rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(34, 197, 94, 0.25)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #15803d, #22c55e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)'
            }}>
              <ShieldCheck size={36} color="#ffffff" />
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '16px',
              background: 'rgba(34, 197, 94, 0.2)',
              border: '1px solid rgba(34, 197, 94, 0.5)',
              color: '#86efac',
              fontSize: '0.74rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <CheckCircle2 size={13} />
              <span>Acesso Liberado!</span>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.5rem' }}>
              Crie Sua Senha Pessoal Militar
            </h2>

            <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: '0 0 1.5rem', lineHeight: 1.45 }}>
              Guerreiro <strong style={{ color: '#ffffff' }}>{name}</strong>! Crie sua senha de uso pessoal para os próximos acessos.
            </p>

            {passwordModalError && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                color: '#fca5a5',
                fontSize: '0.8rem',
                marginBottom: '1.25rem',
                textAlign: 'left'
              }}>
                <AlertTriangle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                <span>{passwordModalError}</span>
              </div>
            )}

            <form onSubmit={handleSaveNewPassword} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 800, color: '#cbd5e1', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Nova Senha (mínimo 4 dígitos):
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Digite sua nova senha militar"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 2.8rem 0.8rem 1rem',
                      background: 'rgba(24, 34, 27, 0.85)',
                      border: '1px solid rgba(71, 85, 105, 0.6)',
                      borderRadius: '12px',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
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
                      color: '#64748b',
                      cursor: 'pointer'
                    }}
                  >
                    {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 800, color: '#cbd5e1', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  Confirmar Nova Senha:
                </label>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Repita sua nova senha militar"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(24, 34, 27, 0.85)',
                    border: '1px solid rgba(71, 85, 105, 0.6)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingPassword}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.95rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #15803d, #22c55e)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  cursor: isSubmittingPassword ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px rgba(34, 197, 94, 0.4)'
                }}
              >
                {isSubmittingPassword ? (
                  <span>Salvando Senha Militar...</span>
                ) : (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Gravar Senha & Entrar</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
