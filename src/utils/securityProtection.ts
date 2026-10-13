/**
 * SISTEMA DE PROTEÇÃO E SEGURANÇA MILITAR PMPE
 * Bloqueia inspeção de código (DevTools, atalhos F12, Ctrl+Shift+I, Ctrl+U),
 * bloqueia clique direito e previne cópia/engenharia reversa do sistema.
 */

let toastTimeout: any = null;

function showTacticalSecurityAlert(message: string = 'Área Militar Restrita • Cópia e inspeção de código desativadas!') {
  if (typeof document === 'undefined') return;

  let banner = document.getElementById('pmpe-security-alert-toast');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'pmpe-security-alert-toast';
    banner.style.position = 'fixed';
    banner.style.bottom = '24px';
    banner.style.left = '50%';
    banner.style.transform = 'translateX(-50%)';
    banner.style.zIndex = '999999';
    banner.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.98))';
    banner.style.border = '1.5px solid rgba(239, 68, 68, 0.7)';
    banner.style.borderRadius = '16px';
    banner.style.padding = '0.75rem 1.4rem';
    banner.style.color = '#fecaca';
    banner.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    banner.style.fontSize = '0.85rem';
    banner.style.fontWeight = '800';
    banner.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 25px rgba(239, 68, 68, 0.4)';
    banner.style.display = 'flex';
    banner.style.alignItems = 'center';
    banner.style.gap = '0.6rem';
    banner.style.pointerEvents = 'none';
    banner.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    banner.style.opacity = '0';
    document.body.appendChild(banner);
  }

  banner.innerHTML = `
    <span style="font-size: 1.15rem;">🛡️</span>
    <span>${message}</span>
  `;
  banner.style.opacity = '1';
  banner.style.transform = 'translateX(-50%) translateY(0)';

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(10px)';
    }
  }, 2400);
}

export function initSecurityProtection(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Log de aviso no console militar
  console.log(
    '%c🛡️ MISSÃO PMPE 2026 - SISTEMA MILITAR PROTEGIDO %c\nTodos os direitos reservados. É proibida qualquer tentativa de engenharia reversa, cópia ou extração de conteúdo não autorizada pelo Comandante Titular.',
    'background: #b45309; color: #ffffff; font-weight: bold; font-size: 14px; padding: 6px 12px; border-radius: 6px;',
    'color: #94a3b8; font-size: 11px; margin-top: 4px;'
  );

  // 1. Bloqueio de Clique Direito (Menu de Contexto)
  const handleContextMenu = (e: MouseEvent) => {
    // Permite clique direito em inputs normais se o usuário precisar colar
    const target = e.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }
    e.preventDefault();
    showTacticalSecurityAlert('Menu de inspeção bloqueado por segurança corporativa.');
  };

  // 2. Bloqueio de Atalhos de Desenvolvedor (F12, Ctrl+Shift+I, Ctrl+U, etc.)
  const handleKeyDown = (e: KeyboardEvent) => {
    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      showTacticalSecurityAlert('Ferramenta de desenvolvedor desativada neste sistema.');
      return;
    }

    // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element)
    if (isCtrlOrCmd && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      showTacticalSecurityAlert('Atalho de inspeção de código bloqueado.');
      return;
    }

    // Ctrl+U (Ver Código-Fonte)
    if (isCtrlOrCmd && ['U', 'u'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      showTacticalSecurityAlert('Visualização direta de código-fonte desativada.');
      return;
    }

    // Ctrl+S (Salvar página como HTML/MHTML)
    if (isCtrlOrCmd && ['S', 's'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      showTacticalSecurityAlert('Download e cópia da página desativados.');
      return;
    }
  };

  // 3. Prevenção de Drag de Imagens/Logos
  const handleDragStart = (e: DragEvent) => {
    const target = e.target as HTMLElement;
    if (target && target.tagName === 'IMG') {
      e.preventDefault();
    }
  };

  window.addEventListener('contextmenu', handleContextMenu);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('dragstart', handleDragStart);

  return () => {
    window.removeEventListener('contextmenu', handleContextMenu);
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('dragstart', handleDragStart);
  };
}
