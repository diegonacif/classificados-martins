// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqvHRbfuvKCXtHA5rcwJWQBvlDxjsM95Y",
  authDomain: "classificados-martins.firebaseapp.com",
  projectId: "classificados-martins",
  storageBucket: "classificados-martins.appspot.com",
  messagingSenderId: "715662255231",
  appId: "1:715662255231:web:0523b2eec8d932f5c9cb4a",
  measurementId: "G-Q1HJHC6LW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);