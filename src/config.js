// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4t8duUa14lzMRWk2TZIyvq_ae7F1NtkA",
  authDomain: "must-do-it-c5a54.firebaseapp.com",
  projectId: "must-do-it-c5a54",
  storageBucket: "must-do-it-c5a54.appspot.com",
  messagingSenderId: "934763446168",
  appId: "1:934763446168:web:78fb104e660310895035ed",
  measurementId: "G-81F5P98SV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;