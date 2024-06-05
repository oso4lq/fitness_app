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
    ? "Удалить курс"
    : "Добавить курс";

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
        <div className="flex start gap-[6px] flex-wrap mb-[20px]">
          <div className="rounded-[50px] flex p-[10px] gap-[6px] bg-gray-light">
            <Image
              src="img/icon/calendar.svg"
              width={18}
              height={18}
              alt="calendar"
            />
            <p className="text-[16px] font-normal leading-[17.6px]">25 дней</p>
          </div>
          <div className="rounded-[50px] flex p-[10px] gap-[6px] bg-gray-light">
            <Image src="img/icon/time.svg" width={18} height={18} alt="time" />
            <p className="text-[16px] font-normal leading-[17.6px]">
              20-50 мин/день
            </p>
          </div>
          <div className="rounded-[50px] flex p-[10px] gap-[6px] bg-gray-light">
            <Image
              src={`/img/icon/order_${courseData.order}.svg`}
              alt={`order_${courseData.order}.svg`}
              height={18}
              width={18}
            />
            <p className="text-[16px] font-normal leading-[17.6px]">
              Сложность
            </p>
          </div>
        </div>
        {isNotHomePage ? (
          <>
            {" "}
            {/* Написать логику получения данных о проценте выполнении */}
            <div className="mb-[40px]">
              <p>{`Прогресс ${completionPercentage}%`}</p>
              <ProgressBar completionPercentage={completionPercentage} />
            </div>
            <Button onClick={handleSelectWorkoutPageOpen}>{getTextButtonProfile(completionPercentage)}</Button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
