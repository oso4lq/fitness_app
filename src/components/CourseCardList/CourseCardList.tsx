// src/components/CourseCardList/CourseCardList.tsx

"use client";

import { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { CoursType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebaseConfig";
import { usePathname } from "next/navigation";
import { setPickedIDsCourses } from "@/store/features/coursesSlice";
import Routes from "@/routes";

export default function CourseCardList() {
  const [courses, setCourses] = useState([]);
  const user = useAppSelector((state) => state.user);
  const pickedIDsCourses = useAppSelector(
    (state) => state.usersCourses.pickedIDsCourses
  );

  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isProfilePage = pathname === Routes.Profile;

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
          dispatch(setPickedIDsCourses(data.pickedCourses || []));
        } else {
          console.error("No data available for user");
        }
      }
    };

    fetchCourses();
    // fetchPickedCourses();
    if (user) {
      fetchPickedCourses();
    }
  }, [user, dispatch]);

  const pickedCourses: CoursType[] = pickedIDsCourses.length
    ? courses.filter((course: CoursType) =>
        pickedIDsCourses.includes(course._id)
      )
    : [];
  const coursesForRender = isProfilePage ? pickedCourses : courses;

  return (
    <div className="flex flex-wrap gap-[30px]">
      {coursesForRender.map((course: CoursType) => (
        <CourseCard
          key={course._id}
          courseData={course}
          isPicked={pickedIDsCourses.includes(course._id)}
          isProfilePage={isProfilePage}
        />
      ))}
      {isProfilePage && !coursesForRender.length && (
        <div className="text-[35px] my-[5%] mx-[25%]">
          у вас нет выбранных курсов
        </div>
      )}
    </div>
  );
}

// style={{ fontSize: "35px", margin: "10% 25%" }}
