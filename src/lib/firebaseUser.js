// src/lib/firebaseUser.ts
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, set, update } from "firebase/database";
import { auth, db } from "./firebaseConfig";

export const addPickedCourse = async (courseId) => {
  const user = auth.currentUser;
  if (user) {
    const userRef = ref(db, `users/${user.uid}`);
    const userSnap = await get(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.val();
      const pickedCourses = userData.pickedCourses || [];
      if (!pickedCourses.includes(courseId)) {
        update(userRef, {
          pickedCourses: [...pickedCourses, courseId],
        });
      }
    } else {
      set(userRef, {
        pickedCourses: [courseId],
      });
    }
  }
};

export const removePickedCourse = async (courseId) => {
  const user = auth.currentUser;
  if (user) {
    const userRef = ref(db, `users/${user.uid}`);
    const userSnap = await get(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.val();
      const pickedCourses = userData.pickedCourses || [];
      update(userRef, {
        pickedCourses: pickedCourses.filter((id) => id !== courseId),
      });
    }
  }
};
