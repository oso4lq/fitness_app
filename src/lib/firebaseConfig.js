// src/lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS1ulykLC4onw2L0awp9VeqbR_lkdpi3Q",
  authDomain: "fitness-project-ind15.firebaseapp.com",
  projectId: "fitness-project-ind15",
  storageBucket: "fitness-project-ind15.appspot.com",
  messagingSenderId: "278924056979",
  appId: "1:278924056979:web:8e5708e8a00e479978b066",
  measurementId: "G-MYXJ9KCFR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set persistence
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});

export { app, auth, db };
