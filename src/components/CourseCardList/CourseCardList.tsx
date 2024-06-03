// src/components/CourseCardList/CourseCardList.tsx
import CourseCard from "../CourseCard/CourseCard";
import { CoursType } from "@/types/types";

interface CourseCardListProps {
  courses: CoursType[];
  pickedCourses: string[];
}

export default function CourseCardList({ courses, pickedCourses }: CourseCardListProps) {
  return (
    <div className="flex flex-wrap gap-[30px]">
      {courses.map((course) => (
        <CourseCard key={course._id} courseData={course} isPicked={pickedCourses.includes(course._id)} />
      ))}
    </div>
  );
}
