// components/footer.js
export function createFooter(containerId) {
  const footer = document.getElementById(containerId);
  if (!footer) return;
  footer.innerHTML = `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="/" class="navbar__logo"><span>✦</span> Dipta<span>Digital</span></a>
            <p class="footer__desc">Agency digital modern untuk jasa website & aplikasi.</p>
          </div>
          <div class="footer__links"><h4>Menu</h4><ul><li><a href="#hero">Beranda</a></li><li><a href="#portfolio">Portfolio</a></li></ul></div>
          <div class="footer__links"><h4>Layanan</h4><ul><li><a href="#">Website</a></li><li><a href="#">Aplikasi</a></li></ul></div>
          <div class="footer__links"><h4>Kontak</h4><ul><li><a href="https://wa.me/62823641915">WhatsApp</a></li></ul></div>
        </div>
        <div class="footer__bottom"><p>&copy; 2026 Dipta Digital Service.</p></div>
      </div>
    </footer>
  `;
}