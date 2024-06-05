// src/components/CourseCardList/CourseCardList.tsx

"use client";

import { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { CoursType } from "@/types/types";
import { useAppSelector } from "@/hooks";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebaseConfig";
import { usePathname } from "next/navigation";


export default function CourseCardList() {
  const [courses, setCourses] = useState([]);
  const [pickedCourses, setPickedCourses] = useState<string[]>([]);
  const user = useAppSelector((state) => state.user);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
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

    const fetchPickedCourses = async () => {
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPickedCourses(data.pickedCourses || []);
        } else {
          console.error("No data available for user");
        }
      }
    };

    fetchCourses();
    if (user) {
      fetchPickedCourses();
    }
  }, [user]);

  const pickedCoursesData: CoursType[] = courses.filter((course: CoursType) =>
    pickedCourses.includes(course._id)
  );

  return (
    <div className="flex flex-wrap gap-[30px]">
      {(isHomePage ? courses : pickedCoursesData).map(
        (course: CoursType) => (
          <CourseCard
            key={course._id}
            courseData={course}
            isPicked={pickedCourses.includes(course._id)}
            isHomePage={isHomePage}
          />
        )
      )}
    </div>
  );
}
