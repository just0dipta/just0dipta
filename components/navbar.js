// components/navbar.js
export function createNavbar(containerId, links, logoHTML = '✦ DiptaDigital') {
  const nav = document.getElementById(containerId);
  if (!nav) return;
  nav.innerHTML = `
    <nav class="navbar">
      <div class="navbar__container">
        <a href="/" class="navbar__logo">${logoHTML}</a>
        <ul class="navbar__menu" id="navbarMenu">
          ${links.map(l => `<li><a href="${l.href}" class="navbar__link">${l.label}</a></li>`).join('')}
        </ul>
        <div class="navbar__actions">
          <button class="btn btn--ghost btn--sm" onclick="window.location.href='/pages/login.html'">Masuk</button>
        </div>
      </div>
    </nav>
  `;
}