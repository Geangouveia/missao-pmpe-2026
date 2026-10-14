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
  Users,
  Trash2,
  AlertTriangle,
  Ban,
  ShieldAlert
} from 'lucide-react';
import { 
  fetchRegistryFromCloud, 
  approveUserAccess, 
  rejectUserAccess, 
  resetUserToDefaultPass,
  deleteUserPermanently,
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
  const [processingUserKey, setProcessingUserKey] = useState<string | null>(null);
  const [deleteConfirmKey, setDeleteConfirmKey] = useState<string | null>(null);

  // Estados para alteração da senha titular do Gean
  const [showMasterPassSection, setShowMasterPassSection] = useState(false);
  const [newMasterPass, setNewMasterPass] = useState('');
  const [confirmMasterPass, setConfirmMasterPass] = useState('');
  const [showPassText, setShowPassText] = useState(false);
  const [masterPassError, setMasterPassError] = useState('');
  const [isSavingMasterPass, setIsSavingMasterPass] = useState(false);

  // 1. BLOQUEIO DE SCROLL NO BODY: A tela de trás nunca se move enquanto este modal estiver aberto!
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalOverscroll = document.body.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehavior = originalOverscroll;
    };
  }, []);

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
    setTimeout(() => setActionSuccessMsg(null), 3800);
  };

  // Reativar / Aprovar Acesso
  const handleApprove = async (userKey: string, displayName: string) => {
    sound.playLevelUp();
    setProcessingUserKey(userKey);

    setUsers((prev) => ({
      ...prev,
      [userKey]: {
        ...prev[userKey],
        status: 'approved',
        approvedAt: new Date().toISOString(),
      }
    }));
    showFeedback(`✅ Acesso de "${displayName}" ATIVADO/LIBERADO com sucesso!`);
    onRefreshPendingCount?.();

    try {
      await approveUserAccess(userKey);
    } catch (err) {
      console.error('Erro ao reativar:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  // Cancelar / Bloquear Acesso do Aluno
  const handleReject = async (userKey: string, displayName: string) => {
    sound.playError();
    setProcessingUserKey(userKey);

    setUsers((prev) => ({
      ...prev,
      [userKey]: {
        ...prev[userKey],
        status: 'rejected',
      }
    }));
    showFeedback(`🚫 Acesso de "${displayName}" CANCELADO / SUSPENSO. O aluno não conseguirá entrar!`);
    onRefreshPendingCount?.();

    try {
      await rejectUserAccess(userKey);
    } catch (err) {
      console.error('Erro ao bloquear:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  // Excluir Aluno Permanentemente
  const handleDeleteUser = async (userKey: string, displayName: string) => {
    sound.playGunshot38();
    setProcessingUserKey(userKey);

    setUsers((prev) => {
      const copy = { ...prev };
      delete copy[userKey];
      return copy;
    });

    setDeleteConfirmKey(null);
    showFeedback(`🗑️ Aluno "${displayName}" EXCLUÍDO definitivamente do sistema e da nuvem!`);
    onRefreshPendingCount?.();

    try {
      await deleteUserPermanently(userKey);
    } catch (err) {
      console.error('Erro ao excluir:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  // Resetar Senha do Aluno para a Chave Padrão
  const handleResetPassword = async (userKey: string, displayName: string) => {
    sound.playClick();
    setProcessingUserKey(userKey);

    setUsers((prev) => ({
      ...prev,
      [userKey]: {
        ...prev[userKey],
        hasChangedPassword: false,
        personalPassword: 'PMPE2026',
      }
    }));
    showFeedback(`🔑 Senha de "${displayName}" resetada para a chave padrão militar (PMPE2026).`);

    try {
      await resetUserToDefaultPass(userKey);
    } catch (err) {
      console.error('Erro no reset de senha:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

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
        showFeedback('🔒 Senha Master do Comandante Gean atualizada com sucesso!');
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

  const userList = Object.values(users);
  const studentsOnly = userList.filter(u => !u.isAdmin && !u.name.toLowerCase().includes('gean'));
  const approvedCount = studentsOnly.filter(u => u.status === 'approved').length;
  const blockedCount = studentsOnly.filter(u => u.status === 'rejected').length;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(2, 6, 23, 0.88)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem',
        overscrollBehavior: 'contain'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick();
          onClose();
        }
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '92vh',
          background: 'linear-gradient(180deg, #132216 0%, #0c140d 60%, #060a07 100%)',
          border: '2px solid rgba(245, 158, 11, 0.65)',
          borderRadius: '24px',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(245, 158, 11, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          overscrollBehavior: 'contain'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CABEÇALHO TÁTICO EXPANDIDO */}
        <div style={{
          padding: '1.4rem 1.75rem',
          borderBottom: '1px solid rgba(245, 158, 11, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(90deg, rgba(20, 36, 24, 0.98) 0%, rgba(12, 22, 14, 0.98) 100%)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #b45309, #f59e0b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.6)',
              flexShrink: 0
            }}>
              <ShieldCheck size={28} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 900, margin: 0, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  Comando Geral de Acessos • PMPE 2026
                </h2>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  background: '#f59e0b',
                  color: '#000000',
                  letterSpacing: '0.04em'
                }}>
                  COMANDANTE: GEAN
                </span>
              </div>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.82rem', color: '#86efac' }}>
                ⭐ Gestão Operacional de Alunos: Controle total para cancelar, bloquear ou reativar qualquer conta com 1 clique!
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={() => {
                sound.playClick();
                loadData();
              }}
              disabled={isLoading}
              title="Sincronizar Nuvem em Tempo Real"
              style={{
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid #22c55e',
                color: '#86efac',
                borderRadius: '10px',
                padding: '0.5rem 0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.84rem',
                fontWeight: 800
              }}
            >
              <RefreshCw size={15} className={isLoading ? 'animate-spin' : ''} />
              <span>{isLoading ? 'Atualizando...' : 'Atualizar'}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#94a3b8',
                borderRadius: '10px',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Fechar Painel"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* FEEDBACK DE AÇÃO REALIZADA */}
        {actionSuccessMsg && (
          <div style={{
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.25) 0%, rgba(20, 83, 45, 0.3) 100%)',
            borderBottom: '1px solid #22c55e',
            color: '#86efac',
            padding: '0.75rem 1.75rem',
            fontSize: '0.88rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={16} />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* CARDS RESUMO DO EFETIVO DE ALUNOS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          padding: '1.25rem 1.75rem',
          background: 'rgba(0, 0, 0, 0.3)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{
            background: 'rgba(20, 32, 24, 0.8)',
            padding: '0.95rem 1.15rem',
            borderRadius: '14px',
            border: '1px solid rgba(245, 158, 11, 0.35)'
          }}>
            <div style={{ fontSize: '0.74rem', color: '#fbbf24', fontWeight: 800, textTransform: 'uppercase' }}>
              Alunos Cadastrados
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', marginTop: '0.2rem' }}>
              {studentsOnly.length} Guerreiro(s)
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Capacidade ideal: até 20 alunos</div>
          </div>

          <div style={{
            background: 'rgba(34, 197, 94, 0.12)',
            padding: '0.95rem 1.15rem',
            borderRadius: '14px',
            border: '1px solid #22c55e'
          }}>
            <div style={{ fontSize: '0.74rem', color: '#86efac', fontWeight: 800, textTransform: 'uppercase' }}>
              Acessos Ativos (Liberados)
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#4ade80', marginTop: '0.2rem' }}>
              {approvedCount} Ativo(s)
            </div>
            <div style={{ fontSize: '0.72rem', color: '#86efac' }}>Podem treinar normalmente</div>
          </div>

          <div style={{
            background: blockedCount > 0 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.03)',
            padding: '0.95rem 1.15rem',
            borderRadius: '14px',
            border: blockedCount > 0 ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '0.74rem', color: blockedCount > 0 ? '#fca5a5' : '#94a3b8', fontWeight: 800, textTransform: 'uppercase' }}>
              Acessos Bloqueados / Cancelados
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 900, color: blockedCount > 0 ? '#ef4444' : '#94a3b8', marginTop: '0.2rem' }}>
              {blockedCount} Suspenso(s)
            </div>
            <div style={{ fontSize: '0.72rem', color: blockedCount > 0 ? '#fca5a5' : '#64748b' }}>Entrada barrada na tela de login</div>
          </div>
        </div>

        {/* SEGURANÇA DA CONTA TITULAR DO COMANDANTE GEAN */}
        <div style={{
          padding: '0.85rem 1.75rem',
          background: showMasterPassSection ? 'rgba(245, 158, 11, 0.15)' : 'rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.2s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(245, 158, 11, 0.25)',
                border: '1px solid #f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fbbf24'
              }}>
                <KeyRound size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
                  Segurança da Conta Titular (Comandante Gean)
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  Altere sua senha de Comandante a qualquer momento.
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
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                background: showMasterPassSection ? 'rgba(239, 68, 68, 0.2)' : 'linear-gradient(135deg, #d97706, #f59e0b)',
                border: showMasterPassSection ? '1px solid #ef4444' : '1px solid #fbbf24',
                color: showMasterPassSection ? '#fca5a5' : '#000000',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <KeyRound size={13} />
              <span>{showMasterPassSection ? 'Fechar' : '🔑 Alterar Minha Senha Master'}</span>
            </button>
          </div>

          {showMasterPassSection && (
            <form onSubmit={handleUpdateMasterPassword} style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {masterPassError && (
                <div style={{
                  padding: '0.5rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.25)',
                  border: '1px solid #ef4444',
                  color: '#fca5a5',
                  fontSize: '0.78rem',
                  fontWeight: 700
                }}>
                  ⚠️ {masterPassError}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <input
                  type={showPassText ? 'text' : 'password'}
                  placeholder="Nova Senha Master..."
                  value={newMasterPass}
                  onChange={(e) => setNewMasterPass(e.target.value)}
                  style={{
                    padding: '0.55rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    color: '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
                <input
                  type={showPassText ? 'text' : 'password'}
                  placeholder="Confirmar Nova Senha..."
                  value={confirmMasterPass}
                  onChange={(e) => setConfirmMasterPass(e.target.value)}
                  style={{
                    padding: '0.55rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    color: '#ffffff',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                    padding: '0.45rem 1.15rem',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    border: '1px solid #34d399',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>{isSavingMasterPass ? 'Salvando...' : 'Salvar Nova Senha'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* LISTA EXPANDIDA DE ALUNOS COM CONTROLE TOTAL DE ACESSO */}
        <div style={{
          padding: '1.25rem 1.75rem',
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          overscrollBehavior: 'contain'
        }}>
          {/* Card Especial da Conta Gean */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 42, 26, 0.95) 0%, rgba(16, 26, 18, 0.98) 100%)',
            border: '2px solid #f59e0b',
            borderRadius: '16px',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #b45309, #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900
              }}>
                ⭐
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                    {users['gean']?.name || 'Soldado Gean'}
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: '#b45309', color: '#fef3c7', fontWeight: 900 }}>
                    CONTA PRINCIPAL
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#fbbf24', marginTop: '0.15rem' }}>
                  🛡️ Acesso Master Permanente • Administrador Geral da Plataforma
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#86efac', fontWeight: 800 }}>
              ✅ Blindado & Conectado
            </div>
          </div>

          {/* LISTAGEM DOS ALUNOS */}
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#fbbf24', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Users size={16} />
            <span>ALUNOS CADASTRADOS NA PLATAFORMA ({studentsOnly.length}):</span>
          </div>

          {studentsOnly.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '2.5rem 1rem',
              borderRadius: '16px',
              border: '2px dashed rgba(255, 255, 255, 0.15)',
              background: 'rgba(0, 0, 0, 0.2)',
              color: '#94a3b8'
            }}>
              <Users size={40} style={{ opacity: 0.35, marginBottom: '0.65rem' }} />
              <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1rem', fontWeight: 800 }}>Nenhum aluno adicional no momento</h4>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.8rem' }}>
                Os alunos que comprarem ou se cadastrarem aparecerão aqui com o botão de controle imediato.
              </p>
            </div>
          ) : (
            studentsOnly.map((user) => {
              const userKey = Object.keys(users).find(k => users[k] === user) || user.name.toLowerCase().replace(/\s+/g, '_');
              const isBlocked = user.status === 'rejected';
              const isProcessing = processingUserKey === userKey;
              const formattedDate = user.requestedAt ? new Date(user.requestedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
              }) : 'Recente';

              return (
                <div
                  key={userKey}
                  style={{
                    background: isBlocked ? 'rgba(69, 10, 10, 0.65)' : 'rgba(20, 30, 22, 0.75)',
                    border: isBlocked ? '1.5px solid #ef4444' : '1.5px solid rgba(34, 197, 94, 0.4)',
                    borderRadius: '16px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                    boxShadow: isBlocked ? '0 0 15px rgba(239, 68, 68, 0.2)' : 'none'
                  }}
                >
                  {/* Dados do Aluno */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1, minWidth: '220px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: isBlocked ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                      border: isBlocked ? '1px solid #ef4444' : '1px solid #22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isBlocked ? '#f87171' : '#4ade80',
                      flexShrink: 0
                    }}>
                      {isBlocked ? <Ban size={22} /> : <UserCheck size={22} />}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff' }}>
                          {user.name}
                        </span>
                        {isBlocked ? (
                          <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem', borderRadius: '4px', background: '#dc2626', color: '#ffffff', fontWeight: 900 }}>
                            🚫 ACESSO CANCELADO
                          </span>
                        ) : (
                          <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem', borderRadius: '4px', background: '#15803d', color: '#dcfce7', fontWeight: 900 }}>
                            ✅ ATIVO (PODE ENTRAR)
                          </span>
                        )}
                      </div>

                      <div style={{ fontSize: '0.74rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                        <Clock size={12} />
                        <span>Cadastrado em {formattedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* AÇÕES DE PODER DO COMANDANTE GEAN */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {/* Botão de Bloquear / Cancelar ou Reativar */}
                    {isBlocked ? (
                      <button
                        onClick={() => handleApprove(userKey, user.name)}
                        disabled={isProcessing}
                        style={{
                          padding: '0.5rem 0.95rem',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #15803d, #16a34a)',
                          border: '1px solid #22c55e',
                          color: '#ffffff',
                          fontWeight: 900,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          boxShadow: '0 0 12px rgba(34, 197, 94, 0.4)'
                        }}
                        title="Reativar e permitir a entrada deste aluno"
                      >
                        <UserCheck size={14} />
                        <span>Reativar Acesso</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleReject(userKey, user.name)}
                        disabled={isProcessing}
                        style={{
                          padding: '0.5rem 0.95rem',
                          borderRadius: '8px',
                          background: 'rgba(239, 68, 68, 0.18)',
                          border: '1px solid #ef4444',
                          color: '#fca5a5',
                          fontWeight: 900,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                        title="Cancelar e suspender a conta deste aluno (ele não conseguirá mais entrar)"
                      >
                        <Ban size={14} color="#ef4444" />
                        <span>Cancelar / Bloquear</span>
                      </button>
                    )}

                    {/* Resetar Senha para PMPE2026 */}
                    <button
                      onClick={() => handleResetPassword(userKey, user.name)}
                      disabled={isProcessing}
                      style={{
                        padding: '0.5rem 0.85rem',
                        borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.15)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#fbbf24',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                      title="Resetar a senha do aluno para PMPE2026 caso ele esqueça"
                    >
                      <KeyRound size={13} />
                      <span>Resetar Senha</span>
                    </button>

                    {/* Excluir Aluno Permanentemente */}
                    {deleteConfirmKey === userKey ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <button
                          onClick={() => handleDeleteUser(userKey, user.name)}
                          disabled={isProcessing}
                          style={{
                            padding: '0.5rem 0.85rem',
                            borderRadius: '8px',
                            background: '#dc2626',
                            border: '1px solid #ef4444',
                            color: '#ffffff',
                            fontWeight: 900,
                            fontSize: '0.76rem',
                            cursor: 'pointer'
                          }}
                        >
                          Confirmar Exclusão?
                        </button>
                        <button
                          onClick={() => setDeleteConfirmKey(null)}
                          style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none',
                            color: '#cbd5e1',
                            cursor: 'pointer'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          sound.playClick();
                          setDeleteConfirmKey(userKey);
                        }}
                        disabled={isProcessing}
                        style={{
                          padding: '0.5rem 0.75rem',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          color: '#94a3b8',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.76rem'
                        }}
                        title="Excluir o aluno definitivamente do banco"
                      >
                        <Trash2 size={13} />
                        <span>Excluir</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* RODAPÉ DO PAINEL */}
        <div style={{
          padding: '1rem 1.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldAlert size={14} color="#f59e0b" />
            <span>Doutrina de Comando: O Comandante Gean tem o poder exclusivo de cancelar acessos e gerenciar o efetivo.</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #1f2937, #111827)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer'
            }}
          >
            Fechar Painel
          </button>
        </div>
      </div>
    </div>
  );
};
