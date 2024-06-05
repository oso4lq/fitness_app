import PrivateRoute from "@/components/PrivateRoute";
import UserProfile from "@/components/UserProfile/UserProfile";
import CourseCardList from "@/components/CourseCardList/CourseCardList";

export default function ProfilePage() {

  return (
    <PrivateRoute>
      <div data-tid="pageWrap" className="py-[60px]">
        <UserProfile />
        <h2
          data-tid="titleCourses"
          className="text-[40px] font-semibold leading-[44px] mt-[60px] mb-[40px]"
        >
          Мои курсы
        </h2>
        <CourseCardList />
      </div>
    </PrivateRoute>
  );
}
