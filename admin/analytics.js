// admin/analytics.js
import { db } from '../firebase/database.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function showAnalytics(container) {
  container.innerHTML = `<h2>Analitik</h2><div class="dashboard-cards">
    <div class="admin-card"><div class="admin-card__label">Total User</div><div class="admin-card__value" id="aTotalUsers">0</div></div>
    <div class="admin-card"><div class="admin-card__label">Invoice Paid</div><div class="admin-card__value" id="aPaid">0</div></div>
    <div class="admin-card"><div class="admin-card__label">Pendapatan</div><div class="admin-card__value" id="aRevenue">Rp0</div></div>
  </div>`;
  const usersRef = ref(db, 'users');
  const invRef = ref(db, 'invoices');
  onValue(usersRef, snap => document.getElementById('aTotalUsers').textContent = snap.size);
  onValue(invRef, snap => {
    const invs = snap.val();
    let paid = 0, revenue = 0;
    for (let id in invs) {
      if (invs[id].status === 'paid') { paid++; revenue += invs[id].amount; }
    }
    document.getElementById('aPaid').textContent = paid;
    document.getElementById('aRevenue').textContent = 'Rp' + revenue.toLocaleString();
  });
}