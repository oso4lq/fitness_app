// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import CourseCardList from "@/components/CourseCardList/CourseCardList";
import { CoursType } from "@/types/types";
import Link from "next/link";

export default function Home() {
  const [courses, setCourses] = useState<CoursType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://fitness-project-ind15-default-rtdb.europe-west1.firebasedatabase.app/courses.json"
        );
        const data = await response.json();
        const coursesArray = Object.keys(data).map((key) => ({
          ...data[key],
          _id: key,
        }));
        setCourses(coursesArray);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CourseCardList courses={courses} />
      )}

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
