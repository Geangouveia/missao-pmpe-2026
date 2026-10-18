import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  X, 
  MessageCircle, 
  Clock, 
  AlertCircle,
  Sparkles,
  Inbox
} from 'lucide-react';
import { submitSupportRequest, type StudentSupportRequest } from '../utils/authManager';
import { sound } from '../utils/sound';

interface OrderRequestsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string | null;
}

export const OrderRequestsModal: React.FC<OrderRequestsModalProps> = ({
  isOpen,
  onClose,
  userName,
}) => {
  const [requestType, setRequestType] = useState<StudentSupportRequest['type']>('cronograma_vip');
  const [message, setMessage] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [myHistory, setMyHistory] = useState<StudentSupportRequest[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    setIsSent(false);
    setMessage('');
    try {
      const raw = localStorage.getItem('pmpe_support_requests');
      if (raw) {
        const list: StudentSupportRequest[] = JSON.parse(raw);
        const filtered = list.filter((r) => r.userName === userName);
        setMyHistory(filtered);
      }
    } catch {}
  }, [isOpen, userName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      sound.playError();
      return;
    }

    setIsSubmitting(true);
    try {
      await submitSupportRequest(userName || 'Aluno PMPE', requestType, message, whatsapp);
      sound.playLevelUp();
      setIsSent(true);

      // Atualiza histórico local
      const raw = localStorage.getItem('pmpe_support_requests');
      if (raw) {
        const list: StudentSupportRequest[] = JSON.parse(raw);
        setMyHistory(list.filter((r) => r.userName === userName));
      }
    } catch {
      sound.playError();
    } finally {
      setIsSubmitting(false);
    }
  };

  const typeLabels: Record<StudentSupportRequest['type'], string> = {
    cronograma_vip: '🛡️ Liberação do Cronograma VIP (R$ 4,00)',
    sugestao: '💡 Sugestão de Novos Simulados / Matérias',
    duvida: '❓ Dúvida sobre Conteúdo ou Edital',
    report_erro: '⚠️ Reportar Erro ou Correção em Questão',
    outro: '💬 Outro Assunto',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(5, 10, 7, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          background: 'linear-gradient(145deg, #131d16 0%, #0a110c 100%)',
          border: '1.5px solid rgba(34, 197, 94, 0.4)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(34, 197, 94, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            background: 'rgba(20, 30, 23, 0.95)',
            borderBottom: '1px solid rgba(34, 197, 94, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)',
              }}
            >
              <MessageSquare size={22} color="#ffffff" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: '#f8fafc' }}>
                Canal de Pedidos & Dúvidas
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#86efac' }}>
                Envie suas solicitações diretamente para o Comandante Gean
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Conteúdo */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          {isSent ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.2)',
                  border: '2px solid #22c55e',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <CheckCircle2 size={36} color="#22c55e" />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.5rem' }}>
                Mensagem Enviada com Sucesso!
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', maxWidth: '420px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
                Seu pedido foi registrado na plataforma e enviado para o painel do Comandante Gean.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '380px', margin: '0 auto' }}>
                <a
                  href={`https://wa.me/5581997327341?text=${encodeURIComponent(
                    `Olá, Comandante Gean! Sou o aluno ${userName || 'da plataforma'} e enviei o seguinte pedido: ${message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Enviar também pelo WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#cbd5e1',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Enviar Outro Pedido
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {/* Tipo de Solicitação */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.45rem', textTransform: 'uppercase' }}>
                  Tipo de Solicitação:
                </label>
                <select
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value as StudentSupportRequest['type'])}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(24, 34, 27, 0.9)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                >
                  <option value="cronograma_vip">🛡️ Quero Liberar o Cronograma de Estudos VIP (R$ 4,00)</option>
                  <option value="sugestao">💡 Sugerir Novo Simulado ou Matéria</option>
                  <option value="duvida">❓ Dúvida sobre Conteúdo ou Edital</option>
                  <option value="report_erro">⚠️ Reportar Erro ou Pegadinha em Questão</option>
                  <option value="outro">💬 Outro Assunto com o Comandante</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.45rem', textTransform: 'uppercase' }}>
                  Sua Mensagem ou Pedido:
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva aqui o que você gostaria de pedir, sugerir ou perguntar..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(24, 34, 27, 0.9)',
                    border: '1px solid rgba(71, 85, 105, 0.55)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Contato WhatsApp */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.45rem', textTransform: 'uppercase' }}>
                  Seu WhatsApp com DDD (para retorno):
                </label>
                <input
                  type="text"
                  placeholder="Ex: (81) 99999-9999"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(24, 34, 27, 0.9)',
                    border: '1px solid rgba(71, 85, 105, 0.55)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.95rem',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 20px rgba(34, 197, 94, 0.35)',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Gravando Pedido...' : 'Enviar Pedido ao Comandante'}</span>
              </button>
            </form>
          )}

          {/* Histórico de Pedidos Anteriores */}
          {myHistory.length > 0 && !isSent && (
            <div style={{ marginTop: '1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                <Clock size={15} />
                <span>Seus Pedidos Anteriores:</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {myHistory.map((h) => (
                  <div
                    key={h.id}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#f1f5f9' }}>
                        {typeLabels[h.type]}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.15rem' }}>
                        "{h.message.substring(0, 50)}..."
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px',
                        background: h.status === 'resolved' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: h.status === 'resolved' ? '#4ade80' : '#fbbf24',
                      }}
                    >
                      {h.status === 'resolved' ? 'Atendido' : 'Em análise'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
