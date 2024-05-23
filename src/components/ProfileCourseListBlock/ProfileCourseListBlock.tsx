import CourseCard from "../CourseCard/CourseCard";
import data from "../../lib/data.json";
import { CoursType } from "@/types/types";

export default function ProfileCourseListBlock() {
  const usersCoursesList: CoursType[] = Object.values(data.courses);

  return (
    <div className="mt-[60px]">
      <h2
        data-tid="titleCourses"
        className="text-[40px] font-semibold leading-[44px]"
      >
        Мои курсы
      </h2>
      <div className="mt-[40px] flex flex-wrap gap-[40px]">
        {usersCoursesList?.map((item) => {
        return (
          <CourseCard key={item._id} courseData={item}/>
        )

        })}
        
      </div>
    </div>
  );
}
