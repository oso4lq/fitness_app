import CourseCard from "../CourseCard/CourseCard";
import data from "../../lib/data.json";
import { CoursType } from "@/types/types";

export default function CourseCardList() {
  const usersCoursesList: CoursType[] = Object.values(data.courses);

  return (
    <div className="grid grid-cols-3 gap-[40px]">
      {usersCoursesList?.map((item) => {
        return <CourseCard key={item._id} courseData={item} />;
      })}
    </div>
  );
}
