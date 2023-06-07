
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6S8Q-BAgNQqvPvKoLK8dMdm2qaN2fCn4",
  authDomain: "react-netflix-clone1.firebaseapp.com",
  projectId: "react-netflix-clone1",
  storageBucket: "react-netflix-clone1.appspot.com",
  messagingSenderId: "644071380661",
  appId: "1:644071380661:web:7d7c5a3be05efec62f90fc",
  measurementId: "G-FP2XDYTLQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);