// admin/consultation-management.js
import { db } from '../firebase/database.js';
import { ref, onValue, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function manageConsultations(container) {
  container.innerHTML = `<h2>Konsultasi User</h2><div id="consultList"></div>`;
  const consRef = ref(db, 'consultations');
  onValue(consRef, snap => {
    const data = snap.val();
    let html = '';
    for (let userId in data) {
      for (let msgId in data[userId]) {
        html += `<div><strong>${userId}</strong>: ${data[userId][msgId].message}</div>`;
      }
    }
    document.getElementById('consultList').innerHTML = html || '<p>Tidak ada pesan.</p>';
  });
}