import React, { useState } from 'react';
import { ShieldCheck, Lock, User, KeyRound, AlertTriangle, CheckCircle2, Eye, EyeOff } from 'lucide-react';
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

  // Lista de chaves de acesso autorizadas
  const AUTHORIZED_PASSCODES = ['PMPE2026', 'AOCP2026', 'FARDADO2026', 'POLICIA2026', 'MISSÃO2026'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const cleanPass = password.trim().toUpperCase();

    if (!trimmedName) {
      sound.playError();
      setErrorMsg('Informe seu nome ou matrícula para identificação.');
      return;
    }

    if (!cleanPass) {
      sound.playError();
      setErrorMsg('Digite a chave de acesso militar.');
      return;
    }

    setIsSubmitting(true);

    // Validação da chave
    setTimeout(() => {
      // Verifica se a chave digitada bate com as autorizadas ou com chave customizada salva em localStorage
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
        setErrorMsg('Acesso Negado: Chave de segurança incorreta ou não autorizada.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      background: 'radial-gradient(circle at 50% 20%, #0d1b3e 0%, #050b18 60%, #02050c 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Efeitos de iluminação de fundo */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(30, 58, 138, 0.05) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(15, 23, 42, 0.88)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px rgba(6, 182, 212, 0.15)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Cabeçalho do Card */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '74px',
            height: '74px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #1e3a8a, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
            border: '2px solid rgba(251, 191, 36, 0.5)'
          }}>
            <ShieldCheck size={42} color="#fbbf24" />
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.25rem 0.75rem',
            borderRadius: '20px',
            background: 'rgba(234, 179, 8, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#fbbf24',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.75rem'
          }}>
            <Lock size={12} />
            <span>Acesso Restrito • PMPE 2026</span>
          </div>

          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: '0 0 0.5rem',
            lineHeight: 1.2
          }}>
            Portal Tático do Candidato
          </h1>

          <p style={{
            fontSize: '0.88rem',
            color: '#94a3b8',
            margin: 0,
            lineHeight: 1.5
          }}>
            Ambiente exclusivo para preparação de Soldado da Polícia Militar de Pernambuco.
          </p>
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
            border: '1px solid rgba(239, 68, 68, 0.35)',
            color: '#fca5a5',
            fontSize: '0.85rem',
            marginBottom: '1.5rem',
            animation: 'shake 0.3s ease-in-out'
          }}>
            <AlertTriangle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Formulário de Acesso */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Campo: Nome / Matrícula */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#cbd5e1',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Identificação do Guerreiro:
            </label>
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
                placeholder="Ex: Soldado Gean ou Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '14px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#06b6d4'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)'}
                required
              />
            </div>
          </div>

          {/* Campo: Chave de Segurança */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#cbd5e1',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Chave de Autorização:
            </label>
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
                placeholder="Insira a chave de segurança"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 3rem 0.85rem 2.8rem',
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(71, 85, 105, 0.5)',
                  borderRadius: '14px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  letterSpacing: showPassword ? 'normal' : '0.15em',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#06b6d4'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(71, 85, 105, 0.5)'}
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

          {/* Opção: Lembrar de mim */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '0.82rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#06b6d4', width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <span>Lembrar neste aparelho</span>
            </label>
          </div>

          {/* Botão de Entrar */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: '0.5rem',
              padding: '0.95rem 1.5rem',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #1d4ed8, #06b6d4)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              boxShadow: '0 10px 25px rgba(6, 182, 212, 0.35)',
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
              <span>Autenticando...</span>
            ) : (
              <>
                <CheckCircle2 size={20} />
                <span>Entrar na Missão PMPE</span>
              </>
            )}
          </button>
        </form>

        {/* Rodapé do Card */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          fontSize: '0.76rem',
          color: '#64748b'
        }}>
          🛡️ Sistema de Aprendizagem Tática Blindada • Versão 2.0 PMPE
        </div>
      </div>
    </div>
  );
};
