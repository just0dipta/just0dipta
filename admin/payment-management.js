// admin/payment-management.js
import { db } from '../firebase/database.js';
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function managePayments(container) {
  container.innerHTML = `<h2>Verifikasi Pembayaran</h2><div id="paymentList"></div>`;
  const invRef = ref(db, 'invoices');
  onValue(invRef, snap => {
    const invs = snap.val();
    let html = '';
    for (let id in invs) {
      if (invs[id].status === 'menunggu verifikasi') {
        html += `<div class="admin-card"><strong>${invs[id].customerName}</strong> - Rp${invs[id].amount}
          <button class="btn btn--sm btn--primary approve-pay" data-id="${id}">Approve</button>
          <button class="btn btn--sm btn--ghost reject-pay" data-id="${id}">Reject</button></div>`;
      }
    }
    document.getElementById('paymentList').innerHTML = html || '<p>Tidak ada pembayaran.</p>';
    document.querySelectorAll('.approve-pay').forEach(b => b.addEventListener('click', (e) => {
      update(ref(db, `invoices/${e.target.dataset.id}`), { status: 'paid' });
    }));
    document.querySelectorAll('.reject-pay').forEach(b => b.addEventListener('click', (e) => {
      update(ref(db, `invoices/${e.target.dataset.id}`), { status: 'rejected' });
    }));
  });
}