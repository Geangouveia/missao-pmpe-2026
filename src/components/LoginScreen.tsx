import React, { useState } from 'react';
import { 
  Lock, 
  User, 
  KeyRound, 
  AlertTriangle, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Quote, 
  RefreshCw, 
  Clock, 
  ShieldAlert, 
  ShieldCheck 
} from 'lucide-react';
import { PmpeBrasaoLogo } from './PmpeBrasaoLogo';
import { StreakFlame } from './StreakFlame';
import { getDailyMotivationalQuote, MOTIVATIONAL_QUOTES } from '../utils/motivationalQuotes';
import { 
  validateLoginAttempt, 
  setUserPersonalPassword, 
  isMasterUser 
} from '../utils/authManager';
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
  const [pendingNotice, setPendingNotice] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Estados para o Modal de Criação Obrigatória de Nova Senha no 1º Acesso
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setPendingNotice(null);

    const trimmedName = name.trim();
    const cleanPass = password.trim();

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
        // Aluno aprovado no primeiro acesso com a senha padrão: exige criação de senha pessoal
        sound.playSuccess();
        setIsFirstLoginNewPasswordModal(true);
      } else if (res.status === 'pending') {
        sound.playError();
        setPendingNotice(res.message);
      } else {
        sound.playError();
        setErrorMsg(res.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Falha de conexão com a rede militar de autenticação.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Salvar a nova senha criada pelo aluno no 1º acesso
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
      setPasswordModalError('Erro ao gravar sua nova senha na nuvem.');
      setIsSubmittingPassword(false);
    }
  };

  const handleQuickName = (warriorName: string) => {
    sound.playClick();
    setName(warriorName);
    setErrorMsg('');
    setPendingNotice(null);
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

        {/* Notificação de Solicitação Pendente de Autorização por Gean */}
        {pendingNotice && (
          <div style={{
            padding: '1rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.15) 100%)',
            border: '1.5px solid rgba(245, 158, 11, 0.65)',
            marginBottom: '1.25rem',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.25)',
            animation: 'fadeIn 0.25s ease-out'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fbbf24', fontWeight: 900, fontSize: '0.9rem' }}>
              <Clock size={20} />
              <span>Aguardando Autorização da Conta Gean</span>
            </div>
            <p style={{ margin: '0.45rem 0 0.85rem', fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.45 }}>
              {pendingNotice}
            </p>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '0.6rem 1rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #d97706, #f59e0b)',
                border: 'none',
                color: '#000000',
                fontWeight: 900,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <RefreshCw size={14} className={isSubmitting ? 'spin-anim' : ''} />
              <span>Verificar se Gean já Autorizou</span>
            </button>
          </div>
        )}

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

              {/* Atalhos de Conta */}
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => handleQuickName('Gean')}
                  style={{
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '6px',
                    background: 'rgba(245, 158, 11, 0.2)',
                    border: '1px solid rgba(245, 158, 11, 0.45)',
                    color: '#fbbf24',
                    cursor: 'pointer',
                    fontWeight: 800
                  }}
                  title="Acesso Titular Gean"
                >
                  ⭐ Gean (Titular)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickName('Thiago')}
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
                  title="Testar acesso como Thiago"
                >
                  Thiago
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
                placeholder="Ex: Gean, Thiago ou seu Nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setPendingNotice(null);
                  setErrorMsg('');
                }}
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
                Chave Militar / Senha:
              </label>

              <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                (Padrão 1º Acesso: PMPE2026)
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
                placeholder="Insira a chave (Ex: PMPE2026 ou sua nova senha)"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMsg('');
                }}
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
              <span>Lembrar neste aparelho</span>
            </label>

            <span style={{ color: '#06b6d4', fontSize: '0.76rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Sparkles size={13} />
              <span>Controle Militar Ativo</span>
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
              <span>Autenticando na Nuvem Militar...</span>
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
            Acessos controlados sob autorização do Comandante Gean • PMPE 2026
          </div>
        </div>
      </div>

      {/* MODAL OBRIGATÓRIO: CRIAÇÃO DE NOVA SENHA PESSOAL NO PRIMEIRO ACESSO */}
      {isFirstLoginNewPasswordModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(2, 6, 23, 0.92)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '1.5rem',
          animation: 'fadeIn 0.25s ease-out'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '460px',
            background: 'rgba(15, 23, 42, 0.96)',
            border: '2px solid rgba(16, 185, 129, 0.65)',
            borderRadius: '24px',
            padding: '2.25rem 2rem',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.25)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.5)'
            }}>
              <ShieldCheck size={36} color="#ffffff" />
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '16px',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.5)',
              color: '#34d399',
              fontSize: '0.74rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <CheckCircle2 size={13} />
              <span>Acesso Autorizado por Gean!</span>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.5rem' }}>
              Crie Sua Nova Senha Pessoal
            </h2>

            <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: '0 0 1.5rem', lineHeight: 1.45 }}>
              Olá, <strong style={{ color: '#ffffff' }}>{name}</strong>! Este é o seu primeiro acesso. Por questões de segurança militar, crie sua senha exclusiva para os próximos logins.
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
                  Nova Senha Pessoal (mínimo 4 dígitos):
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
                      background: 'rgba(30, 41, 59, 0.85)',
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
                  placeholder="Repita sua nova senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(30, 41, 59, 0.85)',
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
                  background: 'linear-gradient(135deg, #10b981, #059669)',
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
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)'
                }}
              >
                {isSubmittingPassword ? (
                  <span>Salvando Senha Militar...</span>
                ) : (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Cadastrar Senha & Entrar</span>
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
