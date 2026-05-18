// admin/invoice-management.js
import { db } from '../firebase/database.js';
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function loadInvoices(containerId) {
  const container = document.getElementById(containerId);
  const invoicesRef = ref(db, 'invoices');
  
  onValue(invoicesRef, (snapshot) => {
    const data = snapshot.val();
    container.innerHTML = '';
    if (!data) {
      container.innerHTML = '<p class="text-secondary">Belum ada invoice.</p>';
      return;
    }
    Object.entries(data).forEach(([id, inv]) => {
      const row = document.createElement('div');
      row.className = 'project-item';
      row.innerHTML = `
        <div>
          <strong>${inv.customerName}</strong> - ${inv.package}
          <div class="badge-status badge--${inv.status === 'paid' ? 'done' : 'pending'}">${inv.status}</div>
        </div>
        <div>
          ${inv.status === 'pending' ? 
            `<button class="btn btn--sm btn--primary approve-btn" data-id="${id}">Approve</button>
             <button class="btn btn--sm btn--ghost reject-btn" data-id="${id}">Reject</button>` : ''}
        </div>
      `;
      container.appendChild(row);
    });

    // Event listeners
    document.querySelectorAll('.approve-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        update(ref(db, `invoices/${e.target.dataset.id}`), { status: 'paid' });
      });
    });
    document.querySelectorAll('.reject-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        update(ref(db, `invoices/${e.target.dataset.id}`), { status: 'rejected' });
      });
    });
  });
}