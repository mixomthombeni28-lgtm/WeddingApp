import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDDtLy5Lv-JkS2aWt862NvXg7YLFi2LTZU",
  authDomain: "wedding-app-9feb4.firebaseapp.com",
  projectId: "wedding-app-9feb4",
  storageBucket: "wedding-app-9feb4.firebasestorage.app",
  messagingSenderId: "298767304267",
  appId: "1:298767304267:web:61e3f14ffa3e7bcac2afce",
  measurementId: "G-Q2PPXLYXH1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);