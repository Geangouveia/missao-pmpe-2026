import React, { useState, useEffect, useMemo } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Users, 
  UserCheck, 
  UserX, 
  Ban, 
  KeyRound, 
  Lock, 
  RefreshCw, 
  CheckCircle2, 
  Search, 
  ArrowLeft, 
  Trash2, 
  Sparkles, 
  Clock, 
  Eye, 
  EyeOff,
  Filter,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { 
  fetchRegistryFromCloud, 
  approveUserAccess, 
  rejectUserAccess, 
  resetUserToDefaultPass,
  deleteUserPermanently,
  setMasterUserPassword,
  isMasterUser,
  type UserAccessRecord 
} from '../utils/authManager';
import { sound } from '../utils/sound';

interface CommanderDashboardViewProps {
  onBackToApp: () => void;
  onRefreshPendingCount?: () => void;
}

export const CommanderDashboardView: React.FC<CommanderDashboardViewProps> = ({
  onBackToApp,
  onRefreshPendingCount
}) => {
  const [users, setUsers] = useState<Record<string, UserAccessRecord>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'approved' | 'rejected'>('all');
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);
  const [processingUserKey, setProcessingUserKey] = useState<string | null>(null);
  const [deleteConfirmKey, setDeleteConfirmKey] = useState<string | null>(null);

  // Alteração de Senha Master
  const [showMasterPassSection, setShowMasterPassSection] = useState(false);
  const [newMasterPass, setNewMasterPass] = useState('');
  const [confirmMasterPass, setConfirmMasterPass] = useState('');
  const [showPassText, setShowPassText] = useState(false);
  const [masterPassError, setMasterPassError] = useState('');
  const [isSavingMasterPass, setIsSavingMasterPass] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const registry = await fetchRegistryFromCloud();
    setUsers(registry);
    setIsLoading(false);
    onRefreshPendingCount?.();
  };

  useEffect(() => {
    loadData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showFeedback = (msg: string) => {
    setActionSuccessMsg(msg);
    setTimeout(() => setActionSuccessMsg(null), 4000);
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
    showFeedback(`✅ Acesso do guerreiro "${displayName}" foi ATIVADO com sucesso!`);
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
    showFeedback(`🚫 Acesso de "${displayName}" CANCELADO / BLOQUEADO! Ele não conseguirá mais logar.`);
    onRefreshPendingCount?.();

    try {
      await rejectUserAccess(userKey);
    } catch (err) {
      console.error('Erro ao bloquear:', err);
    } finally {
      setProcessingUserKey(null);
    }
  };

  // Resetar Senha do Aluno para o Padrão PMPE2026
  const handleResetPassword = async (userKey: string, displayName: string) => {
    sound.playClick();
    setProcessingUserKey(userKey);
    const ok = await resetUserToDefaultPass(userKey);
    setProcessingUserKey(null);

    if (ok) {
      showFeedback(`🔑 Senha do aluno "${displayName}" redefinida para: PMPE2026`);
    } else {
      showFeedback(`❌ Não foi possível resetar a senha no momento.`);
    }
  };

  // Excluir Definitivamente o Aluno
  const handleDeleteUser = async (userKey: string, displayName: string) => {
    sound.playClick();
    setProcessingUserKey(userKey);
    await deleteUserPermanently(userKey);

    setUsers((prev) => {
      const next = { ...prev };
      delete next[userKey];
      return next;
    });

    setDeleteConfirmKey(null);
    setProcessingUserKey(null);
    showFeedback(`🗑️ Cadastro do aluno "${displayName}" removido definitivamente do sistema.`);
    onRefreshPendingCount?.();
  };

  // Salvar Nova Senha Master do Gean
  const handleSaveMasterPass = async () => {
    setMasterPassError('');
    if (!newMasterPass || newMasterPass.trim().length < 4) {
      setMasterPassError('A nova senha deve ter no mínimo 4 caracteres.');
      sound.playError();
      return;
    }
    if (newMasterPass !== confirmMasterPass) {
      setMasterPassError('As senhas digitadas não coincidem.');
      sound.playError();
      return;
    }

    setIsSavingMasterPass(true);
    try {
      const ok = await setMasterUserPassword(newMasterPass.trim());
      if (ok) {
        sound.playLevelUp();
        showFeedback('🔒 Senha Master do Comandante Gean atualizada com sucesso!');
        setNewMasterPass('');
        setConfirmMasterPass('');
        setShowMasterPassSection(false);
      } else {
        setMasterPassError('Erro ao salvar senha na nuvem. Tente novamente.');
        sound.playError();
      }
    } catch {
      setMasterPassError('Falha de conexão com a nuvem.');
      sound.playError();
    } finally {
      setIsSavingMasterPass(false);
    }
  };

  // Filtros dos Alunos (exclui a conta do Comandante Gean da listagem de alunos)
  const studentsOnly = useMemo(() => {
    return Object.values(users).filter((u) => {
      return !isMasterUser(u.name);
    });
  }, [users]);

  const filteredStudents = useMemo(() => {
    return studentsOnly.filter((u) => {
      // Filtro status
      if (filterStatus === 'approved' && u.status === 'rejected') return false;
      if (filterStatus === 'rejected' && u.status !== 'rejected') return false;

      // Filtro busca
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase().trim();
      return u.name.toLowerCase().includes(term);
    });
  }, [studentsOnly, filterStatus, searchTerm]);

  const approvedCount = studentsOnly.filter(u => u.status !== 'rejected').length;
  const blockedCount = studentsOnly.filter(u => u.status === 'rejected').length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top, #0d1b10 0%, #080f0a 60%, #030704 100%)',
      color: '#f8fafc',
      paddingBottom: '4rem'
    }}>
      {/* BARRA SUPERIOR DE COMANDO */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(16, 32, 20, 0.98) 0%, rgba(10, 20, 13, 0.98) 100%)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.35)',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
      }}>
        <div style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '1rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Lado Esquerdo: Voltar & Título */}
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
                padding: '0.6rem 1.15rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Voltar ao simulador e às questões"
            >
              <ArrowLeft size={18} />
              <span>Voltar ao Treinamento</span>
            </button>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.68rem',
                  padding: '0.15rem 0.6rem',
                  borderRadius: '999px',
                  background: 'linear-gradient(90deg, #b45309, #f59e0b)',
                  color: '#ffffff',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  COMANDANTE TITULAR: GEAN
                </span>
                <span style={{ fontSize: '0.74rem', color: '#4ade80', fontWeight: 800 }}>
                  ● Sistema 100% Online
                </span>
              </div>
              <h1 style={{
                margin: '0.2rem 0 0',
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Shield color="#f59e0b" size={24} />
                Comando Geral de Acessos • PMPE 2026
              </h1>
            </div>
          </div>

          {/* Lado Direito: Ações */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={() => {
                sound.playClick();
                loadData();
              }}
              disabled={isLoading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1rem',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                color: '#fbbf24',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer'
              }}
              title="Atualizar lista de alunos da nuvem"
            >
              <RefreshCw size={15} className={isLoading ? 'animate-spin' : ''} />
              <span>{isLoading ? 'Sincronizando...' : 'Atualizar Dados'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL (TELA COMPLETA) */}
      <main style={{
        maxWidth: '1240px',
        margin: '1.5rem auto 0',
        padding: '0 1.25rem'
      }}>
        {/* MENSAGEM DE SUCESSO FLUTUANTE */}
        {actionSuccessMsg && (
          <div style={{
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.95) 0%, rgba(21, 128, 61, 0.98) 100%)',
            color: '#ffffff',
            padding: '1rem 1.5rem',
            borderRadius: '14px',
            marginBottom: '1.5rem',
            boxShadow: '0 8px 25px rgba(34, 197, 94, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 800,
            fontSize: '0.95rem'
          }}>
            <Sparkles size={20} />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* CARDS DE ESTATÍSTICA DO EFETIVO (KPIs) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          {/* Card 1: Total Alunos */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 35, 24, 0.9) 0%, rgba(12, 22, 15, 0.95) 100%)',
            padding: '1.35rem 1.5rem',
            borderRadius: '18px',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Total de Cadastros
              </span>
              <Users size={20} color="#fbbf24" />
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', margin: '0.35rem 0' }}>
              {studentsOnly.length} <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 600 }}>Alunos</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              Capacidade recomendada: até 20 alunos simultâneos
            </div>
          </div>

          {/* Card 2: Acessos Ativos */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 52, 28, 0.9) 0%, rgba(9, 32, 17, 0.95) 100%)',
            padding: '1.35rem 1.5rem',
            borderRadius: '18px',
            border: '1px solid rgba(34, 197, 94, 0.5)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#86efac', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Acessos Liberados (Ativos)
              </span>
              <CheckCircle2 size={20} color="#22c55e" />
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#4ade80', margin: '0.35rem 0' }}>
              {approvedCount} <span style={{ fontSize: '1rem', color: '#86efac', fontWeight: 600 }}>Ativos</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#86efac' }}>
              Podem entrar, treinar e disputar o ranking livremente
            </div>
          </div>

          {/* Card 3: Acessos Bloqueados */}
          <div style={{
            background: blockedCount > 0 
              ? 'linear-gradient(135deg, rgba(69, 10, 10, 0.9) 0%, rgba(41, 6, 6, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(20, 24, 30, 0.7) 0%, rgba(12, 15, 20, 0.8) 100%)',
            padding: '1.35rem 1.5rem',
            borderRadius: '18px',
            border: blockedCount > 0 ? '1px solid rgba(239, 68, 68, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: blockedCount > 0 ? '#fca5a5' : '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Acessos Cancelados / Bloqueados
              </span>
              <Ban size={20} color={blockedCount > 0 ? '#ef4444' : '#64748b'} />
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: blockedCount > 0 ? '#f87171' : '#94a3b8', margin: '0.35rem 0' }}>
              {blockedCount} <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 600 }}>Cancelados</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: blockedCount > 0 ? '#fca5a5' : '#64748b' }}>
              Bloqueados pelo Comandante com mensagem informativa
            </div>
          </div>
        </div>

        {/* SEGURANÇA DA CONTA TITULAR DO COMANDANTE GEAN */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(30, 24, 10, 0.85) 0%, rgba(18, 14, 5, 0.95) 100%)',
          borderRadius: '18px',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #b45309, #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(245, 158, 11, 0.4)'
              }}>
                <KeyRound size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                    Segurança da Conta Titular (Comandante Gean)
                  </span>
                  <span style={{
                    fontSize: '0.66rem',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '4px',
                    background: '#15803d',
                    color: '#ffffff',
                    fontWeight: 900
                  }}>
                    CONECTADO & BLINDADO
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#fbbf24', marginTop: '0.15rem' }}>
                  Altere e defina sua senha exclusiva de Comandante a qualquer momento com salvamento em nuvem.
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                setShowMasterPassSection(!showMasterPassSection);
              }}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                background: showMasterPassSection ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(135deg, #d97706, #b45309)',
                border: '1px solid #f59e0b',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '0.86rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: showMasterPassSection ? 'none' : '0 0 15px rgba(245, 158, 11, 0.35)'
              }}
            >
              <KeyRound size={16} />
              <span>{showMasterPassSection ? 'Fechar Alteração' : '🔑 Alterar Minha Senha Master'}</span>
            </button>
          </div>

          {/* FORMULÁRIO DE ALTERAÇÃO DA SENHA MASTER */}
          {showMasterPassSection && (
            <div style={{
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(245, 158, 11, 0.25)',
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '1.25rem',
              borderRadius: '14px'
            }}>
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.96rem', fontWeight: 900, color: '#fef3c7' }}>
                Definir Nova Senha Master para a Conta Gean:
              </h4>
              <p style={{ margin: '0 0 1rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
                Essa senha será salva tanto no seu navegador quanto na nuvem. Apenas você terá acesso ao Painel de Comando.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                alignItems: 'flex-start'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', color: '#fbbf24', fontWeight: 800, marginBottom: '0.35rem' }}>
                    Nova Senha Master:
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassText ? 'text' : 'password'}
                      value={newMasterPass}
                      onChange={(e) => setNewMasterPass(e.target.value)}
                      placeholder="Mínimo 4 caracteres..."
                      style={{
                        width: '100%',
                        padding: '0.65rem 2.5rem 0.65rem 0.85rem',
                        borderRadius: '10px',
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassText(!showPassText)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer'
                      }}
                    >
                      {showPassText ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', color: '#fbbf24', fontWeight: 800, marginBottom: '0.35rem' }}>
                    Confirmar Nova Senha:
                  </label>
                  <input
                    type={showPassText ? 'text' : 'password'}
                    value={confirmMasterPass}
                    onChange={(e) => setConfirmMasterPass(e.target.value)}
                    placeholder="Repita a nova senha..."
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ alignSelf: 'flex-end' }}>
                  <button
                    onClick={handleSaveMasterPass}
                    disabled={isSavingMasterPass}
                    style={{
                      width: '100%',
                      padding: '0.65rem 1.25rem',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #16a34a, #15803d)',
                      border: '1px solid #22c55e',
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      boxShadow: '0 0 15px rgba(34, 197, 94, 0.35)'
                    }}
                  >
                    {isSavingMasterPass ? 'Salvando na Nuvem...' : '💾 Salvar Nova Senha'}
                  </button>
                </div>
              </div>

              {masterPassError && (
                <div style={{ color: '#f87171', fontSize: '0.8rem', fontWeight: 800, marginTop: '0.65rem' }}>
                  ⚠️ {masterPassError}
                </div>
              )}
            </div>
          )}
        </section>

        {/* ÁREA DE GESTÃO DO EFETIVO DE ALUNOS */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(15, 25, 18, 0.95) 0%, rgba(9, 16, 11, 0.98) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.75rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Cabeçalho da Seção com Busca e Filtros */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.25rem'
          }}>
            <div>
              <h2 style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Users size={22} color="#4ade80" />
                Quadro de Alunos Matriculados ({studentsOnly.length})
              </h2>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.82rem', color: '#94a3b8' }}>
                Gerencie quem tem autorização para treinar no sistema, cancele ou reative acessos instantaneamente.
              </p>
            </div>

            {/* Barra de Busca e Filtros */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', minWidth: '220px' }}>
                <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Buscar por nome..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.85rem 0.55rem 2.2rem',
                    borderRadius: '10px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Botões de Filtro */}
              <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px', padding: '0.2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <button
                  onClick={() => setFilterStatus('all')}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: filterStatus === 'all' ? 'rgba(255, 255, 255, 0.15)' : 'none',
                    border: 'none',
                    color: filterStatus === 'all' ? '#ffffff' : '#94a3b8',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                >
                  Todos ({studentsOnly.length})
                </button>
                <button
                  onClick={() => setFilterStatus('approved')}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: filterStatus === 'approved' ? 'rgba(34, 197, 94, 0.25)' : 'none',
                    border: 'none',
                    color: filterStatus === 'approved' ? '#4ade80' : '#94a3b8',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                >
                  Ativos ({approvedCount})
                </button>
                <button
                  onClick={() => setFilterStatus('rejected')}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    background: filterStatus === 'rejected' ? 'rgba(239, 68, 68, 0.25)' : 'none',
                    border: 'none',
                    color: filterStatus === 'rejected' ? '#f87171' : '#94a3b8',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                >
                  Bloqueados ({blockedCount})
                </button>
              </div>
            </div>
          </div>

          {/* LISTA AMPLA DE ALUNOS (CARDS GRANDES E CONFORTÁVEIS) */}
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: '#94a3b8' }}>
              <RefreshCw size={36} className="animate-spin" style={{ margin: '0 auto 0.75rem', color: '#f59e0b' }} />
              <p style={{ fontWeight: 800 }}>Carregando dados dos alunos direto da nuvem...</p>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 1.5rem',
              borderRadius: '16px',
              border: '2px dashed rgba(255, 255, 255, 0.15)',
              background: 'rgba(0, 0, 0, 0.25)',
              color: '#94a3b8'
            }}>
              <Users size={48} style={{ opacity: 0.35, marginBottom: '0.85rem' }} />
              <h3 style={{ color: '#ffffff', margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
                {searchTerm ? 'Nenhum aluno encontrado para a busca' : 'Nenhum aluno cadastrado no momento'}
              </h3>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                Assim que você comercializar o acesso para novos candidatos e eles se cadastrarem, eles aparecerão aqui com total controle nas suas mãos.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {filteredStudents.map((user) => {
                const userKey = Object.keys(users).find(k => users[k] === user) || user.name.toLowerCase().replace(/\s+/g, '_');
                const isBlocked = user.status === 'rejected';
                const isProcessing = processingUserKey === userKey;
                const formattedDate = user.requestedAt ? new Date(user.requestedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }) : 'Recente';

                return (
                  <div
                    key={userKey}
                    style={{
                      background: isBlocked 
                        ? 'linear-gradient(135deg, rgba(35, 12, 12, 0.85) 0%, rgba(20, 8, 8, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(16, 28, 20, 0.85) 0%, rgba(10, 18, 13, 0.9) 100%)',
                      border: isBlocked ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(34, 197, 94, 0.35)',
                      borderRadius: '16px',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1.25rem',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {/* Informações do Aluno */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '240px' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: isBlocked ? 'rgba(239, 68, 68, 0.2)' : 'linear-gradient(135deg, #15803d, #22c55e)',
                        border: isBlocked ? '1px solid #ef4444' : '1px solid #4ade80',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 900,
                        fontSize: '1.3rem',
                        boxShadow: isBlocked ? 'none' : '0 0 15px rgba(34, 197, 94, 0.35)'
                      }}>
                        {isBlocked ? '🚫' : '👮'}
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>
                            {user.name}
                          </span>

                          {isBlocked ? (
                            <span style={{
                              fontSize: '0.72rem',
                              padding: '0.2rem 0.65rem',
                              borderRadius: '6px',
                              background: '#dc2626',
                              color: '#ffffff',
                              fontWeight: 900,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}>
                              <Ban size={12} />
                              ACESSO CANCELADO / BLOQUEADO
                            </span>
                          ) : (
                            <span style={{
                              fontSize: '0.72rem',
                              padding: '0.2rem 0.65rem',
                              borderRadius: '6px',
                              background: '#15803d',
                              color: '#dcfce7',
                              fontWeight: 900,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}>
                              <CheckCircle2 size={12} />
                              ACESSO ATIVO (LIBERADO)
                            </span>
                          )}
                        </div>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          marginTop: '0.35rem',
                          fontSize: '0.8rem',
                          color: '#94a3b8',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Clock size={13} color="#94a3b8" />
                            Cadastrado em {formattedDate}
                          </span>
                          <span style={{ color: '#64748b' }}>•</span>
                          <span style={{ color: user.hasChangedPassword ? '#86efac' : '#f59e0b', fontWeight: 700 }}>
                            {user.hasChangedPassword ? '🔒 Senha própria cadastrada' : '🔑 Senha padrão ativa'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Botões de Ação do Comandante Gean */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      flexWrap: 'wrap'
                    }}>
                      {/* Botão de Cancelar / Bloquear ou Reativar */}
                      {isBlocked ? (
                        <button
                          onClick={() => handleApprove(userKey, user.name)}
                          disabled={isProcessing}
                          style={{
                            padding: '0.6rem 1.15rem',
                            borderRadius: '10px',
                            background: 'linear-gradient(135deg, #15803d, #16a34a)',
                            border: '1px solid #22c55e',
                            color: '#ffffff',
                            fontWeight: 900,
                            fontSize: '0.84rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            boxShadow: '0 0 14px rgba(34, 197, 94, 0.4)'
                          }}
                          title="Reativar e permitir a entrada deste aluno"
                        >
                          <UserCheck size={16} />
                          <span>Reativar Acesso</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleReject(userKey, user.name)}
                          disabled={isProcessing}
                          style={{
                            padding: '0.6rem 1.15rem',
                            borderRadius: '10px',
                            background: 'rgba(239, 68, 68, 0.2)',
                            border: '1px solid #ef4444',
                            color: '#fca5a5',
                            fontWeight: 900,
                            fontSize: '0.84rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem'
                          }}
                          title="Cancelar e suspender a conta deste aluno (ele não conseguirá mais entrar)"
                        >
                          <Ban size={16} color="#ef4444" />
                          <span>Cancelar / Bloquear</span>
                        </button>
                      )}

                      {/* Resetar Senha para PMPE2026 */}
                      <button
                        onClick={() => handleResetPassword(userKey, user.name)}
                        disabled={isProcessing}
                        style={{
                          padding: '0.6rem 1rem',
                          borderRadius: '10px',
                          background: 'rgba(245, 158, 11, 0.15)',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          color: '#fbbf24',
                          fontWeight: 800,
                          fontSize: '0.84rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem'
                        }}
                        title="Redefinir senha para PMPE2026 caso o aluno esqueça"
                      >
                        <KeyRound size={15} />
                        <span>Resetar Senha</span>
                      </button>

                      {/* Excluir Aluno Permanentemente */}
                      {deleteConfirmKey === userKey ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <button
                            onClick={() => handleDeleteUser(userKey, user.name)}
                            disabled={isProcessing}
                            style={{
                              padding: '0.6rem 1rem',
                              borderRadius: '10px',
                              background: '#dc2626',
                              border: '1px solid #ef4444',
                              color: '#ffffff',
                              fontWeight: 900,
                              fontSize: '0.82rem',
                              cursor: 'pointer'
                            }}
                          >
                            Confirmar Exclusão?
                          </button>
                          <button
                            onClick={() => setDeleteConfirmKey(null)}
                            style={{
                              padding: '0.6rem 0.8rem',
                              borderRadius: '10px',
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
                            padding: '0.6rem 0.85rem',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            color: '#94a3b8',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.82rem'
                          }}
                          title="Excluir o aluno definitivamente do banco"
                        >
                          <Trash2 size={15} />
                          <span>Excluir</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ORIENTAÇÕES DE MONETIZAÇÃO & CONTROLE PARA O COMANDANTE GEAN */}
        <section style={{
          marginTop: '2rem',
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem'
        }}>
          <AlertTriangle size={24} color="#f59e0b" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
          <div style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: '1.5' }}>
            <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '0.25rem' }}>
              Doutrina de Operação Comercial (Como gerenciar até 20 alunos):
            </strong>
            1. Novos alunos que comprarem seu acesso podem se cadastrar na tela inicial.
            <br />
            2. Quando a mensalidade ou prazo do aluno expirar, basta clicar em <strong>"Cancelar / Bloquear"</strong> nesta tela. O aluno será deslogado e barrado no login com uma mensagem orientando falar com você.
            <br />
            3. Caso o aluno efetue o pagamento, com 1 clique você clica em <strong>"Reativar Acesso"</strong> e ele continua os estudos exatamente de onde parou.
          </div>
        </section>
      </main>
    </div>
  );
};
