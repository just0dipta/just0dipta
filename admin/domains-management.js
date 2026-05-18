// admin/domains-management.js
import { db } from '../firebase/database.js';
import { ref, onValue, set, remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function manageDomains(container) {
  container.innerHTML = `<h2>Manajemen Domain</h2><div id="domainAdminList"></div><form id="addDomainForm"><input placeholder="Nama domain" id="domainName"><input placeholder="Harga" id="domainPrice"><button type="submit" class="btn btn--sm">Tambah</button></form>`;
  const domainRef = ref(db, 'domainList');
  onValue(domainRef, snap => {
    const domains = snap.val();
    let html = '<table class="data-table"><tr><th>Domain</th><th>Harga</th><th>Aksi</th></tr>';
    for (let id in domains) {
      html += `<tr><td>${domains[id].name}</td><td>${domains[id].price}</td><td><button class="btn btn--sm delete-domain" data-id="${id}">Hapus</button></td></tr>`;
    }
    html += '</table>';
    document.getElementById('domainAdminList').innerHTML = html;
    document.querySelectorAll('.delete-domain').forEach(b => b.addEventListener('click', (e) => {
      remove(ref(db, `domainList/${e.target.dataset.id}`));
    }));
  });
  document.getElementById('addDomainForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('domainName').value.trim();
    const price = document.getElementById('domainPrice').value.trim();
    if (name && price) {
      const newRef = ref(db, `domainList/${name.replace(/\./g, '_')}`);
      set(newRef, { name, price });
    }
  });
}