import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  AlertTriangle,
  Smartphone,
  UserPlus,
  Download,
  Upload,
  Copy,
  Check
} from 'lucide-react';
import { 
  fetchRegistryFromCloud, 
  approveUserAccess, 
  rejectUserAccess, 
  resetUserToDefaultPass,
  deleteUserPermanently,
  setMasterUserPassword,
  registerStudentByCommander,
  unbindUserDevice,
  saveLocalUsersRegistry,
  getLocalUsersRegistry,
  pushRegistryToCloud,
  normalizeUserName,
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
  const [users, setUsers] = useState<Record<string, UserAccessRecord>>(() => getLocalUsersRegistry());
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'approved' | 'rejected'>('all');
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);
  const [processingUserKey, setProcessingUserKey] = useState<string | null>(null);
  const [deleteConfirmKey, setDeleteConfirmKey] = useState<string | null>(null);

  // Cadastro de Novo Aluno pelo Comandante Gean
  const [showAddStudentSection, setShowAddStudentSection] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentPass, setNewStudentPass] = useState('PMPE2026');
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [addStudentError, setAddStudentError] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  // Cadastrar Novo Aluno pelo Comandante Gean
  const handleRegisterStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddStudentError('');

    const cleanName = newStudentName.trim();
    const cleanPass = newStudentPass.trim();

    if (!cleanName || cleanName.length < 2) {
      sound.playError();
      setAddStudentError('Informe o nome do aluno com pelo menos 2 caracteres.');
      return;
    }

    if (!cleanPass || cleanPass.length < 4) {
      sound.playError();
      setAddStudentError('A senha de acesso deve ter no mínimo 4 caracteres.');
      return;
    }

    setIsAddingStudent(true);
    try {
      const res = await registerStudentByCommander(cleanName, cleanPass);
      if (res.success && res.userRecord) {
        sound.playLevelUp();
        const userKey = normalizeUserName(cleanName);
        setUsers((prev) => ({
          ...prev,
          [userKey]: res.userRecord!
        }));
        showFeedback(`🎖️ Aluno "${cleanName}" matriculado com sucesso! Login: "${cleanName}" | Senha: "${cleanPass}"`);
        setNewStudentName('');
        setNewStudentPass('PMPE2026');
        setShowAddStudentSection(false);
        onRefreshPendingCount?.();
      } else {
        sound.playError();
        setAddStudentError(res.message);
      }
    } catch {
      sound.playError();
      setAddStudentError('Falha ao cadastrar aluno na nuvem.');
    } finally {
      setIsAddingStudent(false);
    }
  };

  // Desvincular Aparelho do Aluno (Permite conectar novo celular)
  const handleUnbindDevice = async (userKey: string, displayName: string) => {
    sound.playClick();
    setProcessingUserKey(userKey);
    const ok = await unbindUserDevice(userKey);
    setProcessingUserKey(null);

    if (ok) {
      sound.playSuccess();
      setUsers((prev) => {
        const u = prev[userKey];
        if (!u) return prev;
        return {
          ...prev,
          [userKey]: {
            ...u,
            boundDeviceId: undefined,
            boundDeviceName: undefined,
            boundAt: undefined
          }
        };
      });
      showFeedback(`🔓 Aparelho de "${displayName}" desvinculado com sucesso! O aluno poderá conectar em seu novo celular no próximo acesso.`);
    } else {
      showFeedback(`❌ Não foi possível desvincular o aparelho no momento.`);
    }
  };

  // Exportar Backup de Todos os Alunos (Arquivo JSON)
  const handleExportBackup = () => {
    sound.playClick();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(users, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `backup_alunos_pmpe_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showFeedback('💾 Arquivo de backup dos alunos baixado com sucesso!');
  };

  // Importar / Restaurar Backup de Alunos
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && typeof parsed === 'object') {
          sound.playLevelUp();
          const merged = { ...users, ...parsed };
          setUsers(merged);
          saveLocalUsersRegistry(merged);
          await pushRegistryToCloud(merged);
          showFeedback('📥 Backup de alunos restaurado com sucesso no sistema e na nuvem!');
        }
      } catch {
        sound.playError();
        showFeedback('❌ Arquivo de backup inválido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleCopyCredentials = (userName: string, pass?: string) => {
    sound.playClick();
    const textToCopy = `*ACESSO MILITAR PMPE 2026*\n👤 *Login:* ${userName}\n🔑 *Senha:* ${pass || 'PMPE2026'}\n🔗 *Link Oficial:* https://geangouveia.github.io/missao-pmpe-2026/`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedKey(userName);
    showFeedback(`📋 Credenciais do aluno "${userName}" copiadas para o WhatsApp!`);
    setTimeout(() => setCopiedKey(null), 3000);
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
                Gerencie quem tem autorização para treinar no sistema, matricule novos guerreiros e trave o acesso por aparelho.
              </p>
            </div>

            {/* Barra de Ações Rápidas (Matricular Aluno e Backup) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  sound.playClick();
                  setShowAddStudentSection(!showAddStudentSection);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem 1.15rem',
                  borderRadius: '10px',
                  background: showAddStudentSection ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(135deg, #16a34a, #15803d)',
                  border: '1px solid #22c55e',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  boxShadow: showAddStudentSection ? 'none' : '0 0 16px rgba(34, 197, 94, 0.35)'
                }}
              >
                <UserPlus size={16} />
                <span>{showAddStudentSection ? 'Fechar Formulário' : '➕ Matricular Aluno'}</span>
              </button>

              <button
                onClick={handleExportBackup}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#fbbf24',
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  cursor: 'pointer'
                }}
                title="Baixar cópia de segurança de todos os alunos cadastrados"
              >
                <Download size={15} />
                <span>Backup JSON</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#e2e8f0',
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  cursor: 'pointer'
                }}
                title="Restaurar lista de alunos a partir de um arquivo JSON anterior"
              >
                <Upload size={15} />
                <span>Restaurar Backup</span>
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImportBackup}
                accept=".json"
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {/* FORMULÁRIO DE CADASTRO DE NOVO ALUNO */}
          {showAddStudentSection && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(20, 45, 25, 0.95) 0%, rgba(10, 25, 15, 0.98) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.5)',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '1.75rem',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <UserPlus size={22} color="#4ade80" />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#ffffff' }}>
                  Matricular Novo Guerreiro / Aluno PMPE 2026
                </h3>
              </div>
              <p style={{ margin: '0 0 1.25rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                O auto-cadastro público está <strong>desativado</strong>. Somente você, Comandante Gean, cadastra novos alunos aqui. O primeiro aparelho em que o aluno fizer login ficará travado automaticamente na conta dele.
              </p>

              <form onSubmit={handleRegisterStudent} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                alignItems: 'flex-end'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#86efac', fontWeight: 800, marginBottom: '0.4rem' }}>
                    Nome de Guerra / Nome do Aluno:
                  </label>
                  <input
                    type="text"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    placeholder="Ex: Soldado Silva ou Lucas Lima"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#86efac', fontWeight: 800, marginBottom: '0.4rem' }}>
                    Senha Inicial de Acesso:
                  </label>
                  <input
                    type="text"
                    value={newStudentPass}
                    onChange={(e) => setNewStudentPass(e.target.value)}
                    placeholder="Padrão: PMPE2026"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isAddingStudent}
                    style={{
                      width: '100%',
                      padding: '0.7rem 1.25rem',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #16a34a, #15803d)',
                      border: '1px solid #22c55e',
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 0 16px rgba(34, 197, 94, 0.4)'
                    }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{isAddingStudent ? 'Cadastrando na Nuvem...' : 'Confirmar Matrícula'}</span>
                  </button>
                </div>
              </form>

              {addStudentError && (
                <div style={{ color: '#f87171', fontSize: '0.82rem', fontWeight: 800, marginTop: '0.75rem' }}>
                  ⚠️ {addStudentError}
                </div>
              )}
            </div>
          )}

          {/* Barra de Filtros e Busca de Alunos */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.25rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ position: 'relative', minWidth: '240px', flex: '1 1 240px', maxWidth: '400px' }}>
              <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Buscar aluno por nome..."
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
                          gap: '0.75rem',
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
                          <span style={{ color: '#64748b' }}>•</span>
                          {user.boundDeviceId ? (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              color: '#38bdf8',
                              background: 'rgba(56, 189, 248, 0.12)',
                              padding: '0.15rem 0.55rem',
                              borderRadius: '6px',
                              border: '1px solid rgba(56, 189, 248, 0.3)',
                              fontWeight: 700,
                              fontSize: '0.74rem'
                            }}>
                              <Smartphone size={13} />
                              {user.boundDeviceName || 'Celular Vinculado'} (Trava Ativa)
                            </span>
                          ) : (
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              color: '#cbd5e1',
                              background: 'rgba(255, 255, 255, 0.06)',
                              padding: '0.15rem 0.55rem',
                              borderRadius: '6px',
                              fontSize: '0.74rem'
                            }}>
                              <Smartphone size={13} />
                              Aparelho livre (Vincula no 1º login)
                            </span>
                          )}
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
                      {/* Copiar Credenciais para WhatsApp */}
                      <button
                        onClick={() => handleCopyCredentials(user.name)}
                        style={{
                          padding: '0.6rem 0.95rem',
                          borderRadius: '10px',
                          background: copiedKey === user.name ? 'rgba(34, 197, 94, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                          border: copiedKey === user.name ? '1px solid #22c55e' : '1px solid rgba(255, 255, 255, 0.2)',
                          color: copiedKey === user.name ? '#4ade80' : '#f1f5f9',
                          fontWeight: 800,
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          transition: 'all 0.2s'
                        }}
                        title="Copiar dados de acesso formatados para enviar no WhatsApp do aluno"
                      >
                        {copiedKey === user.name ? <Check size={15} /> : <Copy size={15} />}
                        <span>{copiedKey === user.name ? 'Copiado!' : 'Copiar WhatsApp'}</span>
                      </button>

                      {/* Desvincular Celular (Liberar novo aparelho se o aluno trocar de celular) */}
                      {user.boundDeviceId && (
                        <button
                          onClick={() => handleUnbindDevice(userKey, user.name)}
                          disabled={isProcessing}
                          style={{
                            padding: '0.6rem 0.95rem',
                            borderRadius: '10px',
                            background: 'rgba(56, 189, 248, 0.15)',
                            border: '1px solid rgba(56, 189, 248, 0.4)',
                            color: '#38bdf8',
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          title="Desvincula o celular atual do aluno para permitir que ele acesse de outro aparelho"
                        >
                          <Smartphone size={15} />
                          <span>Liberar Novo Celular</span>
                        </button>
                      )}
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
              Doutrina de Operação Militar & Comercial (Gestão do Comandante Gean):
            </strong>
            1. <strong>Cadastro Exclusivo:</strong> O auto-cadastro público foi desativado. Apenas você matricula novos alunos no botão <strong>"➕ Matricular Aluno"</strong>.
            <br />
            2. <strong>Trava de Aparelho Único:</strong> Cada aluno só consegue entrar em 1 celular. Se passar a senha para outra pessoa, o acesso em outro celular é bloqueado na hora. Se o aluno trocar de aparelho, você clica em <strong>"Liberar Novo Celular"</strong>.
            <br />
            3. <strong>Envio Fácil via WhatsApp:</strong> Clique em <strong>"Copiar WhatsApp"</strong> para mandar os dados de acesso já prontos e formatados direto no WhatsApp do aluno.
            <br />
            4. <strong>Backup de Segurança:</strong> Salve uma cópia de todos os seus alunos clicando em <strong>"Backup JSON"</strong> sempre que desejar.
          </div>
        </section>
      </main>
    </div>
  );
};
