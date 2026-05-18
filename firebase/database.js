// firebase/database.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = { /* sama */ };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };

// Simpan data user
export const saveUser = (userId, data) => set(ref(db, 'users/' + userId), data);

// Ambil data user
export const getUser = async (userId) => {
  const snap = await get(child(ref(db), `users/${userId}`));
  return snap.exists() ? snap.val() : null;
};

// Simpan invoice
export const createInvoice = (invoiceId, data) => set(ref(db, 'invoices/' + invoiceId), data);

// Ambil semua invoice user
export const getUserInvoices = (userId, callback) => {
  const invoicesRef = ref(db, 'invoices');
  onValue(invoicesRef, (snapshot) => {
    const data = snapshot.val();
    const userInvoices = data ? Object.entries(data).filter(([key, val]) => val.userId === userId).map(([key, val]) => ({ id: key, ...val })) : [];
    callback(userInvoices);
  });
};

// Update status pembayaran
export const updatePaymentStatus = (invoiceId, status) => update(ref(db, `invoices/${invoiceId}`), { status });

// Chat konsultasi
export const sendConsultation = (userId, message) => {
  const chatRef = ref(db, 'consultations/' + userId);
  const newMessageRef = push(chatRef);
  set(newMessageRef, { message, timestamp: Date.now(), sender: 'user' });
};