import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "../lib/firebaseConfig.js";
import data from "../lib/data.json" assert { type: "json" };

// Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadData = async () => {
    try {
        // Upload courses
        for (const courseId in data.courses) {
            await setDoc(doc(db, "courses", courseId), data.courses[courseId]);
        }
        // Upload workouts
        for (const workoutId in data.workouts) {
            await setDoc(doc(db, "workouts", workoutId), data.workouts[workoutId]);
        }
        console.log("Data successfully uploaded to Firestore!");
    } catch (error) {
        console.error("Error uploading data: ", error);
    }
};

uploadData();
