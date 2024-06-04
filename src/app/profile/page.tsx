"use client";

import PrivateRoute from "@/components/PrivateRoute";
import UserProfile from "@/components/UserProfile/UserProfile";
import CourseCardList from "@/components/CourseCardList/CourseCardList";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks";
import { getDatabase, ref, get } from "firebase/database";
import { db } from "@/lib/firebaseConfig";

export default function ProfilePage() {
  const [pickedCourses, setPickedCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const user = useAppSelector((state) => state.user);
  const userUid = useAppSelector((state) => state.user.uid);
  console.log(userUid);

  useEffect(() => {
    const fetchPickedCourses = async () => {
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        console.log(snapshot);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPickedCourses(data.pickedCourses || []);
        } else {
          console.error("No data available for user");
        }
      }
    };

    const fetchCourses = async () => {
      const dbRef = ref(db, "courses");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setCourses(Object.values(data));
      } else {
        console.error("No data available");
      }
    };

    fetchPickedCourses();
    fetchCourses();
  }, [user]);

  //@ts-ignore
  const pickedCoursesData = courses.filter(course => pickedCourses.includes(course._id));

  return (
    <PrivateRoute>
      <div data-tid="pageWrap" className="py-[60px]">
        <UserProfile />
        <h2
          data-tid="titleCourses"
          className="text-[40px] font-semibold leading-[44px] mt-[60px] mb-[40px]"
        >
          Мои курсы
        </h2>
        <CourseCardList courses={pickedCoursesData} pickedCourses={pickedCourses} />
      </div>
    </PrivateRoute>
  );
}
