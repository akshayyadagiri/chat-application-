import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbcQ9UiXVY1fc-3so5OldydKLuT1c_X7E",
  authDomain: "akshay-19e7d.firebaseapp.com",
  projectId: "akshay-19e7d",
  storageBucket: "akshay-19e7d.appspot.com",
  messagingSenderId: "528196294839",
  appId: "1:528196294839:web:9915e20c2a07eb7afe9532"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
