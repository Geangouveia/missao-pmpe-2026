import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  X, 
  UserCheck, 
  UserX, 
  Clock, 
  KeyRound, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Sparkles,
  Users
} from 'lucide-react';
import { 
  fetchRegistryFromCloud, 
  approveUserAccess, 
  rejectUserAccess, 
  resetUserToDefaultPass,
  setMasterUserPassword,
  type UserAccessRecord 
} from '../utils/authManager';
import { sound } from '../utils/sound';

interface CommanderAccessModalProps {
  onClose: () => void;
  onRefreshPendingCount?: () => void;
}

export const CommanderAccessModal: React.FC<CommanderAccessModalProps> = ({ 
  onClose,
  onRefreshPendingCount 
}) => {
  const [users, setUsers] = useState<Record<string, UserAccessRecord>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    const registry = await fetchRegistryFromCloud();
    setUsers(registry);
    setIsLoading(false);
    onRefreshPendingCount?.();
  };

  useEffect(() => {
    loadData();
  }, []);

  const showFeedback = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 3500);
  };

  const [processingUserKey, setProcessingUserKey] = useState<string | null>(null);

  const handleApprove = async (userKey: string, displayName: string) => {
    sound.playLevelUp();
    setProcessingUserKey(userKey);

    // 1. Atualização OTIMISTA imediata na interface (0ms, tela NUNCA trava!)
    setUsers((prev) => ({
      ...prev,
      [userKey]: {
        ...prev[userKey],
        status: 'approved',
        approvedAt: new Date().toISOString(),
      }
    }));
    showFeedback(`✅ Acesso de "${displayName}" AUTORIZADO com sucesso!`);
    onRefreshPendingCount?.();

    try {
      await approveUserAccess(userKey);
    } catch (err) {
      console.error('Erro na sincronização de aprovação:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  const handleReject = async (userKey: string, displayName: string) => {
    sound.playError();
    setProcessingUserKey(userKey);

    // Atualização OTIMISTA imediata
    setUsers((prev) => ({
      ...prev,
      [userKey]: {
        ...prev[userKey],
        status: 'rejected',
      }
    }));
    showFeedback(`🚫 Acesso de "${displayName}" BLOQUEADO/REVOGADO.`);
    onRefreshPendingCount?.();

    try {
      await rejectUserAccess(userKey);
    } catch (err) {
      console.error('Erro na sincronização de bloqueio:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  const handleResetPassword = async (userKey: string, displayName: string) => {
    sound.playClick();
    setProcessingUserKey(userKey);

    // Atualização OTIMISTA imediata
    setUsers((prev) => ({
      ...prev,
      [userKey]: {
        ...prev[userKey],
        hasChangedPassword: false,
        personalPassword: undefined,
      }
    }));
    showFeedback(`🔑 Senha de "${displayName}" resetada para a chave padrão militar.`);

    try {
      await resetUserToDefaultPass(userKey);
    } catch (err) {
      console.error('Erro no reset de senha:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  const userList = Object.values(users);
  const pendingCount = userList.filter((u) => u.status === 'pending').length;
  const approvedCount = userList.filter((u) => u.status === 'approved').length;

  // Estados para alteração da senha titular do Gean
  const [showMasterPassSection, setShowMasterPassSection] = useState(false);
  const [newMasterPass, setNewMasterPass] = useState('');
  const [confirmMasterPass, setConfirmMasterPass] = useState('');
  const [showPassText, setShowPassText] = useState(false);
  const [masterPassError, setMasterPassError] = useState('');
  const [isSavingMasterPass, setIsSavingMasterPass] = useState(false);

  const handleUpdateMasterPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMasterPassError('');

    const clean = newMasterPass.trim();
    const cleanConfirm = confirmMasterPass.trim();

    if (!clean || clean.length < 4) {
      sound.playError();
      setMasterPassError('A nova senha deve ter no mínimo 4 caracteres.');
      return;
    }

    if (clean !== cleanConfirm) {
      sound.playError();
      setMasterPassError('A confirmação da senha não confere com a nova senha digitada.');
      return;
    }

    setIsSavingMasterPass(true);
    try {
      const ok = await setMasterUserPassword(clean);
      if (ok) {
        sound.playLevelUp();
        showFeedback('🔑 Senha titular do Comandante Gean alterada e sincronizada na nuvem com sucesso!');
        setNewMasterPass('');
        setConfirmMasterPass('');
        setShowMasterPassSection(false);
        await loadData();
      } else {
        sound.playError();
        setMasterPassError('Erro ao atualizar a senha.');
      }
    } catch (err) {
      console.error(err);
      sound.playError();
      setMasterPassError('Falha de conexão ao gravar senha.');
    } finally {
      setIsSavingMasterPass(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(2, 6, 23, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1.25rem',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '780px',
        maxHeight: '90vh',
        background: 'rgba(15, 23, 42, 0.95)',
        border: '1.5px solid rgba(245, 158, 11, 0.5)',
        borderRadius: '24px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 158, 11, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Top Header */}
        <div style={{
          padding: '1.5rem 1.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(90deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #b45309, #f59e0b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)'
            }}>
              <ShieldCheck size={28} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
                  Comando Geral de Acessos • PMPE 2026
                </h2>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '12px',
                  background: 'rgba(234, 179, 8, 0.2)',
                  color: '#fbbf24',
                  border: '1px solid rgba(245, 158, 11, 0.4)'
                }}>
                  TITULAR: GEAN
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                Somente sua conta principal (Gean) pode autorizar a entrada de novos guerreiros no sistema.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => {
                sound.playClick();
                loadData();
              }}
              title="Sincronizar Nuvem em Tempo Real"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#38bdf8',
                borderRadius: '10px',
                padding: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700
              }}
            >
              <RefreshCw size={15} className={isLoading ? 'spin-anim' : ''} />
              <span>Atualizar</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#94a3b8',
                borderRadius: '10px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Notificação Temporária de Ação */}
        {actionSuccessMsg && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            borderBottom: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#6ee7b7',
            padding: '0.65rem 1.75rem',
            fontSize: '0.85rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'fadeIn 0.2s ease-in'
          }}>
            <Sparkles size={16} />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* Resumo de Status */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          padding: '1.25rem 1.75rem',
          background: 'rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{
            background: 'rgba(30, 41, 59, 0.6)',
            padding: '0.85rem 1rem',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>
              Total de Cadastros
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', marginTop: '0.2rem' }}>
              {userList.length} Alunos
            </div>
          </div>

          <div style={{
            background: pendingCount > 0 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(30, 41, 59, 0.6)',
            padding: '0.85rem 1rem',
            borderRadius: '14px',
            border: pendingCount > 0 ? '1px solid rgba(245, 158, 11, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: pendingCount > 0 ? '0 0 15px rgba(245, 158, 11, 0.2)' : 'none'
          }}>
            <div style={{ fontSize: '0.75rem', color: pendingCount > 0 ? '#fbbf24' : '#94a3b8', fontWeight: 800, textTransform: 'uppercase' }}>
              Aguardando Sua Autorização
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: pendingCount > 0 ? '#fbbf24' : '#ffffff', marginTop: '0.2rem' }}>
              {pendingCount} Pendente(s)
            </div>
          </div>

          <div style={{
            background: 'rgba(16, 185, 129, 0.12)',
            padding: '0.85rem 1rem',
            borderRadius: '14px',
            border: '1px solid rgba(16, 185, 129, 0.35)'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 700, textTransform: 'uppercase' }}>
              Acessos Autorizados
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#34d399', marginTop: '0.2rem' }}>
              {approvedCount} Ativos
            </div>
          </div>
        </div>

        {/* Painel do Comandante Gean: Alterar Minha Própria Senha Master */}
        <div style={{
          padding: '1rem 1.75rem',
          background: showMasterPassSection ? 'rgba(245, 158, 11, 0.12)' : 'rgba(30, 41, 59, 0.45)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'rgba(245, 158, 11, 0.25)',
                border: '1px solid rgba(245, 158, 11, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fbbf24'
              }}>
                <KeyRound size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>
                  Segurança da Conta Titular (Comandante Gean)
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                  Altere e defina sua senha exclusiva de Comandante a qualquer momento.
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setShowMasterPassSection(!showMasterPassSection);
                setMasterPassError('');
              }}
              style={{
                padding: '0.45rem 0.95rem',
                borderRadius: '10px',
                background: showMasterPassSection ? 'rgba(239, 68, 68, 0.2)' : 'linear-gradient(135deg, #d97706, #f59e0b)',
                border: showMasterPassSection ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid #fbbf24',
                color: showMasterPassSection ? '#fca5a5' : '#000000',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <KeyRound size={14} />
              <span>{showMasterPassSection ? 'Fechar' : '🔑 Alterar Minha Senha Master'}</span>
            </button>
          </div>

          {showMasterPassSection && (
            <form onSubmit={handleUpdateMasterPassword} style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {masterPassError && (
                <div style={{
                  padding: '0.55rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#fca5a5',
                  fontSize: '0.78rem',
                  fontWeight: 700
                }}>
                  ⚠️ {masterPassError}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    Nova Senha do Comandante Gean:
                  </label>
                  <input
                    type={showPassText ? 'text' : 'password'}
                    placeholder="Mínimo 4 caracteres"
                    value={newMasterPass}
                    onChange={(e) => setNewMasterPass(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: '1px solid rgba(245, 158, 11, 0.5)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    Confirmar Nova Senha:
                  </label>
                  <input
                    type={showPassText ? 'text' : 'password'}
                    placeholder="Repita a nova senha"
                    value={confirmMasterPass}
                    onChange={(e) => setConfirmMasterPass(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: '1px solid rgba(245, 158, 11, 0.5)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.35rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#94a3b8', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={showPassText}
                    onChange={(e) => setShowPassText(e.target.checked)}
                  />
                  <span>Mostrar texto da senha</span>
                </label>

                <button
                  type="submit"
                  disabled={isSavingMasterPass}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    border: '1px solid #34d399',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <CheckCircle2 size={15} />
                  <span>{isSavingMasterPass ? 'Salvando...' : 'Salvar Nova Senha Master'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Lista de Alunos e Pedidos de Acesso */}
        {/* Lista de Alunos e Pedidos de Acesso */}
        <div style={{
          padding: '1rem',
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem'
        }}>
          {Object.keys(users).length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
              <Users size={40} style={{ opacity: 0.4, marginBottom: '0.75rem' }} />
              <p>Nenhuma solicitação de acesso registrada no momento.</p>
            </div>
          ) : (
            Object.entries(users).map(([userKey, user]) => {
              const isGeanMaster = user.isAdmin;
              const formattedDate = user.requestedAt ? new Date(user.requestedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
              }) : 'Recente';
              const isProcessing = processingUserKey === userKey;

              return (
                <div
                  key={userKey}
                  style={{
                    background: user.status === 'pending'
                      ? 'linear-gradient(135deg, rgba(45, 25, 10, 0.85) 0%, rgba(30, 41, 59, 0.85) 100%)'
                      : 'rgba(30, 41, 59, 0.55)',
                    border: user.status === 'pending'
                      ? '1.5px solid rgba(245, 158, 11, 0.75)'
                      : user.status === 'approved'
                        ? '1px solid rgba(16, 185, 129, 0.4)'
                        : '1px solid rgba(239, 68, 68, 0.4)',
                    borderRadius: '16px',
                    padding: '0.9rem 1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.85rem'
                  }}
                >
                  {/* Informações do Usuário */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: '220px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: isGeanMaster
                        ? 'linear-gradient(135deg, #b45309, #f59e0b)'
                        : user.status === 'pending'
                          ? 'rgba(245, 158, 11, 0.2)'
                          : user.status === 'approved'
                            ? 'rgba(16, 185, 129, 0.2)'
                            : 'rgba(239, 68, 68, 0.2)',
                      border: user.status === 'pending' ? '1px solid #f59e0b' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isGeanMaster ? '#ffffff' : user.status === 'approved' ? '#34d399' : '#f87171',
                      flexShrink: 0
                    }}>
                      {isGeanMaster ? <ShieldCheck size={22} /> : <UserCheck size={20} />}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                          {user.name}
                        </span>
                        {isGeanMaster && (
                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 900,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '10px',
                            background: '#f59e0b',
                            color: '#000000',
                            textTransform: 'uppercase'
                          }}>
                            Comandante Titular
                          </span>
                        )}
                        {user.status === 'pending' && (
                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 900,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '10px',
                            background: 'rgba(245, 158, 11, 0.25)',
                            color: '#fbbf24',
                            border: '1px solid #f59e0b',
                            animation: 'pulse 1.5s infinite'
                          }}>
                            ⏳ Aguardando Sua Aprovação
                          </span>
                        )}
                        {user.status === 'approved' && !isGeanMaster && (
                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '0.15rem 0.45rem',
                            borderRadius: '10px',
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#6ee7b7'
                          }}>
                            Aprovado
                          </span>
                        )}
                        {user.status === 'rejected' && (
                          <span style={{
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '0.15rem 0.45rem',
                            borderRadius: '10px',
                            background: 'rgba(239, 68, 68, 0.2)',
                            color: '#f87171'
                          }}>
                            Bloqueado
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '0.25rem', fontSize: '0.75rem', color: '#94a3b8', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={12} />
                          {formattedDate}
                        </span>

                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Lock size={12} />
                          {user.hasChangedPassword
                            ? 'Senha própria cadastrada'
                            : 'Chave inicial (senha pendente)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ações de Comando (apenas para contas não-master) */}
                  {!isGeanMaster && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {user.status !== 'approved' && (
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() => handleApprove(userKey, user.name)}
                          style={{
                            padding: '0.55rem 0.95rem',
                            minHeight: '40px',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            border: '1px solid rgba(16, 185, 129, 0.5)',
                            color: '#ffffff',
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            cursor: isProcessing ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                            opacity: isProcessing ? 0.7 : 1
                          }}
                        >
                          <CheckCircle2 size={16} />
                          <span>{isProcessing ? 'Gravando...' : 'Autorizar Acesso'}</span>
                        </button>
                      )}

                      {user.status === 'approved' && (
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() => handleReject(userKey, user.name)}
                          style={{
                            padding: '0.55rem 0.85rem',
                            minHeight: '40px',
                            borderRadius: '10px',
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid rgba(239, 68, 68, 0.4)',
                            color: '#f87171',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            cursor: isProcessing ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            opacity: isProcessing ? 0.7 : 1
                          }}
                        >
                          <UserX size={15} />
                          <span>Bloquear</span>
                        </button>
                      )}

                      {user.hasChangedPassword && (
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() => handleResetPassword(userKey, user.name)}
                          title="Resetar senha caso o aluno tenha esquecido"
                          style={{
                            padding: '0.55rem 0.75rem',
                            minHeight: '40px',
                            borderRadius: '10px',
                            background: 'rgba(56, 189, 248, 0.12)',
                            border: '1px solid rgba(56, 189, 248, 0.35)',
                            color: '#38bdf8',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            cursor: isProcessing ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            opacity: isProcessing ? 0.7 : 1
                          }}
                        >
                          <KeyRound size={14} />
                          <span>Resetar Senha</span>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Ações para a conta titular Gean */}
                  {isGeanMaster && (
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setShowMasterPassSection(true);
                        }}
                        style={{
                          padding: '0.55rem 0.95rem',
                          minHeight: '40px',
                          borderRadius: '10px',
                          background: 'linear-gradient(135deg, #d97706, #f59e0b)',
                          border: '1px solid #fbbf24',
                          color: '#000000',
                          fontWeight: 800,
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)'
                        }}
                      >
                        <KeyRound size={15} />
                        <span>Mudar Minha Senha</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Rodapé Informativo */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: '#64748b'
        }}>
          <div>
            🛡️ Doutrina de Acesso Blindado: Nenhum candidato entra sem aprovação da conta Gean.
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="btn-secondary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.82rem', borderRadius: '10px' }}
          >
            Fechar Painel
          </button>
        </div>
      </div>
    </div>
  );
};
