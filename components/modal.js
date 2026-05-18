// components/modal.js
export function createModal({ title, content, onClose }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:200;';
  
  const modal = document.createElement('div');
  modal.className = 'modal-card';
  modal.style.cssText = 'background:var(--color-card-bg);border-radius:var(--radius-xl);padding:2rem;max-width:500px;width:90%;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);';
  
  modal.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h3 style="font-weight:700;">${title}</h3>
      <button class="btn btn--ghost btn--sm modal-close">&times;</button>
    </div>
    <div>${content}</div>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.remove();
    if (onClose) onClose();
  };

  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  return { close: closeModal };
}