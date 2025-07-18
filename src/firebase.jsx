// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvSOUDmoCjR5IT_9sGTo6BDzYCXVCULo0",
  authDomain: "eds-blogs.firebaseapp.com",
  databaseURL: "https://eds-blogs-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eds-blogs",
  storageBucket: "eds-blogs.firebasestorage.app",
  messagingSenderId: "439347008495",
  appId: "1:439347008495:web:ad4cd6e442e43a99961c1a",
  measurementId: "G-6M3CHTT4VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);