"use client";
import { useEffect, useState } from "react";
import CourseCardList from "@/components/CourseCardList/CourseCardList";
import { useAppSelector } from "@/hooks";
import Link from "next/link";
import { getDatabase, ref, get } from "firebase/database";
import { db } from "@/lib/firebaseConfig";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [pickedCourses, setPickedCourses] = useState([]);
  const user = useAppSelector((state) => state.user);

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
    fetchPickedCourses();
  }, [user]);

  console.log(pickedCourses);

  return (
    <>
      <div className="mt-14 mb-12 h-[120px] flex">
        <div className="w-[872px]">
          <h1 className="text-5xl font-medium">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
        </div>
        <div className="w-[288px] flex items-start">
          <div className="speech-bubble rounded-small bg-green-dark">
            <h2 className="text-2xl mx-5 my-4">Измени своё тело за полгода!</h2>
          </div>
        </div>
      </div>
      <CourseCardList courses={courses} pickedCourses={pickedCourses} />

      <div className="DEVBLOCK">
        <p>блок на время разработки с кнопками на страницы</p>
        <Link href={"/course/q02a6i"}>Course Page q02a6i</Link>
        <Link href={"/profile/"}>Profile Page</Link>
        <Link href={"/workout/17oz5f"}>Workout Page 17oz5f</Link>
        <Link href={"/login/"}>Log in</Link>
        <Link href={"/signup/"}>Sign up</Link>
        <Link href={"/reset-pass-mail/"}>Reset mail</Link>
        <Link href={"/reset-pass/"}>Reset password</Link>
        <Link href={"/select-workout/"}>Select workout</Link>
        <Link href={"/my-progress/"}>My Progress</Link>
        <Link href={"/approval-result/"}>Approval result</Link>
      </div>
    </>
  );
}
