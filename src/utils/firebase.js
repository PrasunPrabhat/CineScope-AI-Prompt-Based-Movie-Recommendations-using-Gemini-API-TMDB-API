// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_API } from "./Constants/Constant";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "netflix-frontend-d318e.firebaseapp.com",
  projectId: "netflix-frontend-d318e",
  storageBucket: "netflix-frontend-d318e.firebasestorage.app",
  messagingSenderId: "274893104170",
  appId: "1:274893104170:web:8d7b07d588c25aa587cf53",
  measurementId: "G-VQ271WPRG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();