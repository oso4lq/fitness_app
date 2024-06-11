"use client"

import Image from "next/image";
import { Button } from "../Button/Button";
import { CoursType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  addPickedCourse,
  fetchPickedIDsCourses,
  removePickedCourse,
} from "@/lib/firebaseUser";
import { useRouter } from "next/navigation";
import Routes from "@/routes";
import { setPickedIDsCourses } from "@/store/features/coursesSlice";

export default function CourseBegin({ courseData }: { courseData: CoursType }) {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const pickedIDsCourses = useAppSelector(
    (state) => state.usersCourses.pickedIDsCourses
  );
  const isPickedCourse = pickedIDsCourses.includes(courseData._id);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePickCourse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      await (isPickedCourse
        ? removePickedCourse(courseData._id)
        : addPickedCourse(courseData._id));
      const IDsCourses: string[] = await fetchPickedIDsCourses();
      dispatch(setPickedIDsCourses(IDsCourses));
    } else {
      router.replace(Routes.Login);
    }
  };

  return (
    <div className="relative">
      <Image
        width={482}
        height={455}
        className="hidden lg:block w-[375px] md:w-[482px] h-[455px] object-none right-[-1] top-[-250px] absolute z-10"
        src="/img/runner_mini.svg"
        alt="runner"
      />
      <div className="bg-white-base mt-[102px] sm:mt-40 md:mt-40 mb-24 sm:mx-4 md:mx-4 p-8 rounded relative shadow-blocks flex z-30">
        <div className="w-[437px] md:w-auto">
          <h1 className="mb-7 text-black-base text-6xl sm:text-4xl md:text-4xl font-medium leading-[60px] sm:leading-9">
            Начните путь к новому телу
          </h1>

          {/* содержание напоминает description в курсе, но там строка произвольного текста, а по макету маркированный список?! */}
          <ul
            data-tid="description-list"
            className="mb-[28px] list-inside space-y-3"
          >
            <p>{courseData.description}</p>
          </ul>

          <Button onClick={handlePickCourse}>
            {!isAuthenticated
              ? "Войдите, чтобы добавить курс"
              : isPickedCourse
              ? "Удалить курс"
              : "Добавить курс"}
          </Button>
        </div>
        <Image
          width={738}
          height={708}
          className="block lg:hidden w-[738px] h-[588px] bottom-8 right-[-10px] z-30 -rotate-3 absolute object-none object-left-top"
          src="/img/runner.svg"
          alt="runner"
        />
      </div>
    </div>
  );
}
