// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1ulykLC4onw2L0awp9VeqbR_lkdpi3Q",
  authDomain: "fitness-project-ind15.firebaseapp.com",
  projectId: "fitness-project-ind15",
  storageBucket: "fitness-project-ind15.appspot.com",
  messagingSenderId: "278924056979",
  appId: "1:278924056979:web:8e5708e8a00e479978b066",
  measurementId: "G-MYXJ9KCFR1"
};

// TODO: integate those functions into the app
// createUserWithEmailAndPassword()
// signInWithEmailAndPassword()
// updatePassword()
// getAuth()
// create Auth var, put app into it, export var Auth

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore
const db = getDatabase(app);
console.log(db);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { firebaseConfig, app, db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword };


// export { firebaseConfig, db };