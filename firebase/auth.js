// firebase/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDX0ZI6LnmijvmVlJgbNXkbudOXaUT6fsM",
  authDomain: "diptadigital-service.firebaseapp.com",
  databaseURL: "https://diptadigital-service-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "diptadigital-service",
  storageBucket: "diptadigital-service.firebasestorage.app",
  messagingSenderId: "411938166244",
  appId: "1:411938166244:web:75f063e07fb95ae2e9e3f1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth };

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const register = (email, password, name) => 
  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => updateProfile(cred.user, { displayName: name }).then(() => cred));
export const logout = () => signOut(auth);
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);