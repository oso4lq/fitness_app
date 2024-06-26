// src/components/CourseCard/CourseCard.tsx
"use client";

import Image from "next/image";
import { CoursType } from "@/types/types";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Button } from "../Button/Button";
import { getTextButtonProfile } from "@/lib/getTextButtonProfile";
import { useRouter } from "next/navigation";
import Routes from "@/routes";
import PickCourseBtn from "../PickCourseBtn/PickCourseBtn";
import { useAppDispatch } from "@/hooks";
import { setCurrentCourseData } from "@/store/features/coursesSlice";

interface CourseCardProps {
  courseData: CoursType;
  isPicked: boolean;
  isProfilePage: boolean;
}

export default function CourseCard({
  courseData,
  isPicked,
  isProfilePage,
}: CourseCardProps) {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const completionPercentage: number = 30; //заменить на получение из backend

  const handleCoursePageOpen = () => {
    router.push(Routes.Course + "/" + courseData._id);
  };

  const handleSelectWorkoutPageOpen = () => {
    dispatch(setCurrentCourseData(courseData));
    router.push(Routes.SelectWorkout);
  };

  return (
    <div
      className="w-[360px] sm:w-[343px] md:w-[310px] rounded-[30px] shadow-blocks bg-white-base cursor-pointer"
      onClick={handleCoursePageOpen}
    >
      <div className="rounded-[30px] overflow-hidden w-[360px] sm:w-[343px] md:w-[310px] h-[325px] md:h-[310px] relative">
        <Image
          src={`/img/theme_${courseData.nameEN}.svg`}
          alt={courseData.nameRU}
          height={325}
          width={360}
          className="object-cover w-full h-full"
        />
        <PickCourseBtn isPicked={isPicked} courseID={courseData._id}/>
      </div>

      <div className="mx-8 md:mx-4 mt-6 md:mt-4 mb-4 md:mb-4">

        <h3 className="text-[32px] md:text-[26px] leading-9 mb-5 md:mb-4 font-medium">
          {courseData.nameRU}
        </h3>

        <div className="flex start gap-[6px] flex-wrap mb-5">
          <div className="rounded-large flex p-2.5 gap-[6px] bg-gray-light">
            <Image
              src="img/icon/calendar.svg"
              width={18}
              height={18}
              alt="calendar"
            />
            <p className="text-[16px] font-normal leading-[17.6px]">25 дней</p>
          </div>
          <div className="rounded-large flex p-2.5 gap-[6px] bg-gray-light">
            <Image src="img/icon/time.svg" width={18} height={18} alt="time" />
            <p className="text-[16px] font-normal leading-[17.6px]">
              20-50 мин/день
            </p>
          </div>
          <div className="rounded-large flex p-2.5 gap-[6px] bg-gray-light">
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

        {isProfilePage && (
          <>
            {" "}
            {/* Написать логику получения данных о проценте выполнении */}
            <div className="mb-10">
              <p>{`Прогресс ${completionPercentage}%`}</p>
              <ProgressBar completionPercentage={completionPercentage} />
            </div>
            <Button onClick={handleSelectWorkoutPageOpen}>
              {getTextButtonProfile(completionPercentage)}
            </Button>
          </>
        )}


      </div>
    </div>
  );
}
