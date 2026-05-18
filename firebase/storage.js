// firebase/storage.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = { /* sama */ };
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadLogo = (file, userId) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `logos/${userId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', null, reject, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(resolve);
    });
  });
};