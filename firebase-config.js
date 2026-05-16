// firebase-config.js
// GANTI SEMUA NILAI DI BAWAH INI DENGAN KONFIGURASI FIREBASE ANDA SENDIRI

const firebaseConfig = {
  apiKey: "AIzaSyDX0ZI6LnmijvmVlJgbNXkbudOXaUT6fsM",
  authDomain: "diptadigital-service.firebaseapp.com",
  databaseURL: "https://diptadigital-service-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "diptadigital-service",
  storageBucket: "diptadigital-service.firebasestorage.app",
  messagingSenderId: "411938166244",
  appId: "1:411938166244:web:75f063e07fb95ae2e9e3f1"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log("Firebase initialized successfully!");