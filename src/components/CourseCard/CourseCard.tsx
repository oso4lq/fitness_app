// src/components/CourseCard/CourseCard.tsx
"use client";

import Image from "next/image";
import { CoursType } from "@/types/types";
import { addPickedCourse, removePickedCourse } from "@/lib/firebaseUser";
import { useState } from "react";

interface CourseCardProps {
  courseData: CoursType;
  isPicked: boolean;
}

export default function CourseCard({ courseData, isPicked }: CourseCardProps) {
  const [picked, setPicked] = useState(isPicked);

  const handlePickCourse = async () => {
    await addPickedCourse(courseData._id);
    setPicked(true);
  };

  const handleRemoveCourse = async () => {
    await removePickedCourse(courseData._id);
    setPicked(false);
  };

  return (
    <div className="w-[360px] rounded-[30px] shadow-blocks bg-white-base">
      <div className="rounded-[30px] overflow-hidden w-[360px] h-[325px] relative">
        <Image
          src={`/img/theme_${courseData.nameEN}.svg`}
          alt={courseData.nameRU}
          height={325}
          width={360}
          className="object-cover w-full h-full"
        />
        <button className="absolute top-5 right-5" onClick={picked ? handleRemoveCourse : handlePickCourse}>
          <Image
            src={picked ? "/img/icon/minus.svg" : "/img/icon/plus.svg"}
            alt={picked ? "minusBtn" : "plusBtn"}
            width={32}
            height={32}
          />
        </button>
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
