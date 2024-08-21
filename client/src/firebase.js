// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homefinderpro-58141.firebaseapp.com",
  projectId: "homefinderpro-58141",
  storageBucket: "homefinderpro-58141.appspot.com",
  messagingSenderId: "9994237453",
  appId: "1:9994237453:web:84ed24205b34ffe34cc744"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);