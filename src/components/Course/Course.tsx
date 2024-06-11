"use client"

import { CourseBegin } from "@/components/CourseBegin";
import { CourseMain } from "@/components/CourseMain";
import { CoursType } from "@/types/types";

export default function Course({ courseData }: { courseData: CoursType }) {
  return (
    <>
      <CourseMain courseData={courseData} />
      <CourseBegin courseData={courseData} />
    </>
  );
}
