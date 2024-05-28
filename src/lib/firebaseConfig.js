// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { firebaseConfig, app, db };