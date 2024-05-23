import CourseCard from "../CourseCard/CourseCard";

export default function ProfileCourseListBlock() {
  return (
    <div className="mt-[60px]">
      <h2
        data-tid="titleCourses"
        className="text-[40px] font-semibold leading-[44px]"
      >
        Мои курсы
      </h2>
      <div className="mt-[40px] flex flex-wrap">
        <CourseCard/>
      </div>
    </div>
  );
}
