import PrivateRoute from "@/components/PrivateRoute";
import UserProfile from "@/components/UserProfile/UserProfile";
import CourseCardList from "@/components/CourseCardList/CourseCardList";

export default function ProfilePage() {

  return (
    <PrivateRoute>
      <div data-tid="pageWrap" className="py-[60px] sm:py-[40px]">
        <UserProfile />
        <h2
          data-tid="titleCourses"
          className="mt-[60px] mb-[40px] sm:my-6 sm:mx-4 text-[40px] sm:text-[26px] font-semibold leading-[44px]"
        >
          Мои курсы
        </h2>
        <CourseCardList />
      </div>
    </PrivateRoute>
  );
}
