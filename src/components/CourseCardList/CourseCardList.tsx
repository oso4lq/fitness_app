// src/components/CourseCardList/CourseCardList.tsx
import CourseCard from "../CourseCard/CourseCard";
import { CoursType } from "@/types/types";

interface CourseCardListProps {
  courses: CoursType[];
}

export default function CourseCardList({ courses }: CourseCardListProps) {
  return (
    <div className="flex flex-wrap gap-[30px]">
      {courses?.map((item) => {
        return <CourseCard key={item._id} courseData={item} />;
      })}
    </div>
  );
}
