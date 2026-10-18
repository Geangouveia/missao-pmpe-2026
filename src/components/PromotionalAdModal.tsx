import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  MessageCircle, 
  X, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../utils/sound';

interface PromotionalAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
  onOpenOrders: () => void;
}

export const PromotionalAdModal: React.FC<PromotionalAdModalProps> = ({
  isOpen,
  onClose,
  onOpenSchedule,
  onOpenOrders,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        background: 'rgba(5, 10, 7, 0.85)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          background: 'linear-gradient(150deg, #152219 0%, #0d1611 100%)',
          border: '1.5px solid rgba(234, 179, 8, 0.5)',
          borderRadius: '24px',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(234, 179, 8, 0.25)',
          padding: '2rem 1.75rem',
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease-out',
        }}
      >
        {/* Efeito Glow Dourado de Fundo */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Botão Fechar */}
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={16} />
        </button>

        {/* Badge de Anúncio / Novidade */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '20px',
              background: 'rgba(234, 179, 8, 0.15)',
              border: '1px solid rgba(234, 179, 8, 0.45)',
              color: '#fbbf24',
              fontSize: '0.78rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            <Sparkles size={14} color="#fbbf24" />
            <span>Comunicado Oficial • Comandante Gean</span>
          </div>

          <h3
            style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: '#ffffff',
              margin: '0.75rem 0 0.35rem',
              letterSpacing: '-0.02em',
            }}
          >
            🔥 Novo Cronograma de Estudos Liberado!
          </h3>

          <p style={{ margin: 0, fontSize: '0.86rem', color: '#86efac', fontWeight: 600 }}>
            Metodologia Científica com Ciclo Intercalado e Repetição Espaçada
          </p>
        </div>

        {/* Card Informativo com Preço R$ 4,00 */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.45)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '16px',
            padding: '1.15rem 1.25rem',
            marginBottom: '1.35rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f1f5f9', textTransform: 'uppercase' }}>
              Ativação Exclusiva da Mentoria
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'line-through' }}>R$ 29,90</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#4ade80' }}>R$ 4,00</span>
            </div>
          </div>

          <p style={{ margin: '0 0 0.75rem', fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            Agora você pode ter o seu plano diário personalizado segundo a sua rotina (comercial ou escalas 12x36/24x72),
            com foco nas pegadinhas do <strong>Instituto AOCP</strong>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: '#86efac' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#22c55e" />
              <span>Grade horária inteligente com metas diárias e checklist</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#22c55e" />
              <span>Revisões automáticas de 24h, 7 dias e simulados aos sábados</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} color="#22c55e" />
              <span>Canal direto para pedidos e dúvidas na plataforma</span>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5581997327341?text=Comandante%20Gean,%20quero%20liberar%20meu%20Cronograma%20Inteligente%20de%20Estudos%20PMPE%20(R$%204,00)"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
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
              boxShadow: '0 6px 18px rgba(34, 197, 94, 0.35)',
            }}
          >
            <MessageCircle size={18} />
            <span>Liberar com Comandante Gean no WhatsApp</span>
          </a>

          {/* Botão Ver Cronograma */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
              onOpenSchedule();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.25rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
              border: 'none',
              color: '#0f172a',
              fontWeight: 900,
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
          >
            <Calendar size={18} />
            <span>Acessar / Ativar Cronograma VIP</span>
          </button>

          {/* Botão Canal de Pedidos */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
              onOpenOrders();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#cbd5e1',
              fontWeight: 700,
              fontSize: '0.84rem',
              cursor: 'pointer',
            }}
          >
            <HelpCircle size={16} />
            <span>Fazer um Pedido ou Pergunta na Plataforma</span>
          </button>
        </div>

        {/* Link Fechar */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#64748b',
              fontSize: '0.78rem',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Continuar para o Treino de Questões
          </button>
        </div>
      </div>
    </div>
  );
};
