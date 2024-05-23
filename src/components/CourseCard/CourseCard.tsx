"use client";

import Image from "next/image";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { CoursType } from "@/types/types";
import { usePathname } from "next/navigation";

interface CourseCardProps {
  courseData: CoursType;
}

export default function CourseCard({ courseData }: CourseCardProps) {
  const pathname = usePathname();
  const isProfilePage = pathname === "/profile";
  const minusBtnUrl = "img/icon/minus.svg";
  const plusBtnUrl = "img/icon/plus.svg";

  return (
    <div className="w-[360px] rounded-[30px] shadow-blocks bg-white-base">
      <div className="rounded-[30px] overflow-hidden w-[360px] h-[325px] relative">
        <Image
          src={`/img/theme_${courseData.nameEN}.png`}
          alt={courseData.nameRU}
          height={325}
          width={360}
          className="object-cover w-full h-full"
        />
        <button className="absolute top-5 right-5">
          <Image
            src={isProfilePage ? minusBtnUrl : plusBtnUrl}
            alt="minusBtn"
            width={32}
            height={32}
          />
        </button>
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
        {isProfilePage ? (
          <>
            {" "}
            {/* Написать логику получения данных о проценте выполнении */}
            <div className="mb-[40px]">
              <p>Прогресс 40%</p>
              <ProgressBar completionPercentage={40} />
            </div>
            <button className="w-full h-[52px] rounded-[50px] border text-lg font-normal leading-tight">
              Продолжить
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
