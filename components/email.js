// components/email.js
export function sendInvoiceEmail(invoiceData) {
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    to_email: invoiceData.email,
    customer_name: invoiceData.customerName,
    invoice_id: invoiceData.invoiceId,
    package: invoiceData.package,
    total: invoiceData.total.toLocaleString(),
    domain: invoiceData.domainFull || '-',
    invoice_link: `https://diptadigital.com/pages/invoice.html?id=${invoiceData.invoiceId}`,
  }, 'YOUR_USER_ID')
  .then(() => console.log('Email terkirim'))
  .catch(err => console.error('Gagal kirim email:', err));
}