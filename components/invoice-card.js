// components/invoice-card.js
export function createInvoiceCard(invoice) {
  const card = document.createElement('div');
  card.className = 'project-item';
  card.innerHTML = `
    <div>
      <strong>#${invoice.id}</strong> - ${invoice.package}
      <div class="badge-status badge--${invoice.status === 'paid' ? 'done' : 'pending'}">${invoice.status}</div>
    </div>
    <span>Rp ${invoice.amount.toLocaleString()}</span>
    <a href="../pages/invoice.html?id=${invoice.id}" class="btn btn--sm btn--ghost">Lihat Invoice</a>
  `;
  return card;
}