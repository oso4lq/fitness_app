// src/components/CourseCard/CourseCard.tsx
"use client";

import Image from "next/image";
import { CoursType } from "@/types/types";
import { addPickedCourse, removePickedCourse } from "@/lib/firebaseUser";
import { useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Button } from "../Button/Button";
import { getTextButtonProfile } from "@/lib/getTextButtonProfile";
import { usePathname, useRouter } from "next/navigation";
import Routes from "@/routes";
import Tippy from "@tippyjs/react";

interface CourseCardProps {
  courseData: CoursType;
  isPicked: boolean;
}

export default function CourseCard({ courseData, isPicked }: CourseCardProps) {
  console.log(isPicked);
  const [picked, setPicked] = useState(isPicked);

  const handlePickCourse = async () => {
    await addPickedCourse(courseData._id);
    setPicked(true);
  };

  const handleRemoveCourse = async () => {
    await removePickedCourse(courseData._id);
    setPicked(false);
  };

  const router = useRouter();
  const completionPercentage: number = 30; //заменить на получение из backend
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";
  const minusBtnUrl = "img/icon/minus.svg";
  const plusBtnUrl = "img/icon/plus.svg";
  const tooltipContent = isPicked
    ? "Удалить тренировку"
    : "Добавить тренировку";

  const handleCoursePageOpen = () => {
    router.push(Routes.Course + "/" + courseData._id);
  };

  const handleSelectWorkoutPageOpen = () => {
    router.push(Routes.SelectWorkout);
  };

  return (
    <div
      className="w-[360px] rounded-[30px] shadow-blocks bg-white-base cursor-pointer"
      onClick={handleCoursePageOpen}
    >
      <div className="rounded-[30px] overflow-hidden w-[360px] h-[325px] relative">
        <Image
          src={`/img/theme_${courseData.nameEN}.svg`}
          alt={courseData.nameRU}
          height={325}
          width={360}
          className="object-cover w-full h-full"
        />
        <Tippy
          content={tooltipContent}
          placement="right"
          offset={[40, 10]}
          className="bg-white-base border border-black-base rounded-[5px] p-[6px] text-[14px] leading-[15.4px] font-normal shadow-lg"
        >
          <button
            className="absolute top-5 right-5 cursor-customCursor"
            onClick={picked ? handleRemoveCourse : handlePickCourse}
          >
            <Image
              src={isPicked ? minusBtnUrl : plusBtnUrl}
              alt={isPicked ? "minusBtn" : "plusBtn"}
              width={32}
              height={32}
            />
          </button>
        </Tippy>
      </div>
      <div className="mx-[30px] mt-[25px] mb-[15px]">
        <h3 className="text-[32px] leading-[35px] mb-[20px] font-medium">
          {courseData.nameRU}
        </h3>
        {/* Other course details */}
      </div>
    </div>
  );
}
