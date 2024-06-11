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
  const isProfilePage =
    pathname === Routes.Profile || pathname === Routes.SelectWorkout;

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
  }, [user, dispatch, setCourses]);

  const pickedCourses: CoursType[] = pickedIDsCourses.length
    ? courses.filter((course: CoursType) =>
        pickedIDsCourses.includes(course._id)
      )
    : [];
  const coursesForRender = isProfilePage ? pickedCourses : courses;

  return (
    <>
      <div className="grid grid-cols-3 gap-10 sm:flex sm:items-center sm:flex-col md:mx-4 md:grid-cols-2 md:gap-2.5">
        {coursesForRender.map((course: CoursType) => (
          <CourseCard
            key={course._id}
            courseData={course}
            isPicked={pickedIDsCourses.includes(course._id)}
            isProfilePage={isProfilePage}
          />
        ))}
      </div>
      {isProfilePage && !coursesForRender.length && (
        <div className="text-[35px] text-center my-[2%] mx-[15%] md:mx-[5%] md:text-[32px] sm:my-4 sm:text-[26px]">
          у вас нет выбранных курсов
        </div>
      )}
    </>
  );
}
