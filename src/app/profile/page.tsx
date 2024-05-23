import CourseCardList from "@/components/CourseCardList/CourseCardList";
import UserProfile from "@/components/UserProfile/UserProfile";

export default function ProfilePage() {
  return (
    <div data-tid="pageWrap" className="px-[100px] py-[60px]">
      <UserProfile />
      <h2
        data-tid="titleCourses"
        className="text-[40px] font-semibold leading-[44px] mt-[60px] mb-[40px]"
      >
        Мои курсы
      </h2>
      <CourseCardList/>
    </div>
  );
}
