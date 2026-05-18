// admin/users-management.js
import { db } from '../firebase/database.js';
import { ref, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function manageUsers(container) {
  container.innerHTML = `<h2>Manajemen User</h2><div id="userTable"></div>`;
  const usersRef = ref(db, 'users');
  onValue(usersRef, snap => {
    const users = snap.val();
    let html = '<table class="data-table"><tr><th>Nama</th><th>Email</th><th>Aksi</th></tr>';
    for (let id in users) {
      html += `<tr><td>${users[id].name}</td><td>${users[id].email}</td>
        <td><button class="btn btn--sm btn--ghost delete-user" data-id="${id}">Hapus</button></td></tr>`;
    }
    html += '</table>';
    document.getElementById('userTable').innerHTML = html;
    document.querySelectorAll('.delete-user').forEach(b => b.addEventListener('click', (e) => {
      remove(ref(db, `users/${e.target.dataset.id}`));
    }));
  });
}