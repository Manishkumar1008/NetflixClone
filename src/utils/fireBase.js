// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Tu33i_Lg1BriPqC2F1TSeOIiMlxpvFU",
  authDomain: "netflix-342c9.firebaseapp.com",
  projectId: "netflix-342c9",
  storageBucket: "netflix-342c9.firebasestorage.app",
  messagingSenderId: "733722182509",
  appId: "1:733722182509:web:a8105e933c7d9230cbd064",
  measurementId: "G-Q3DXNKP6B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();