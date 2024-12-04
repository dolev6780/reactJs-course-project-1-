// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQPgHuFC-HIHURFwPl3lBjQNOZKVeSRxk",
  authDomain: "socialnetwork-fd954.firebaseapp.com",
  projectId: "socialnetwork-fd954",
  storageBucket: "socialnetwork-fd954.firebasestorage.app",
  messagingSenderId: "635407803134",
  appId: "1:635407803134:web:fec344ca5fbab3122b3baf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);