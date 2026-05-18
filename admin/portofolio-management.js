// admin/portfolio-management.js
import { db } from '../firebase/database.js';
import { ref, onValue, set, remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

export function managePortfolio(container) {
  container.innerHTML = `<h2>Manajemen Portfolio</h2><div id="portoList"></div><form id="addPortoForm"><input placeholder="Judul" id="portoTitle"><input placeholder="Deskripsi" id="portoDesc"><button type="submit" class="btn btn--sm">Tambah</button></form>`;
  const portoRef = ref(db, 'portfolio');
  onValue(portoRef, snap => {
    const items = snap.val();
    let html = '';
    for (let id in items) {
      html += `<div class="project-item"><strong>${items[id].title}</strong> <button class="btn btn--sm delete-porto" data-id="${id}">Hapus</button></div>`;
    }
    document.getElementById('portoList').innerHTML = html || '<p>Belum ada portfolio.</p>';
    document.querySelectorAll('.delete-porto').forEach(b => b.addEventListener('click', (e) => {
      remove(ref(db, `portfolio/${e.target.dataset.id}`));
    }));
  });
  document.getElementById('addPortoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('portoTitle').value.trim();
    const desc = document.getElementById('portoDesc').value.trim();
    if (title) {
      const newRef = ref(db, `portfolio/${Date.now()}`);
      set(newRef, { title, desc });
    }
  });
}