"use client";

import PrivateRoute from "@/components/PrivateRoute";
import UserProfile from "@/components/UserProfile/UserProfile";
import CourseCardList from "@/components/CourseCardList/CourseCardList";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Routes from "@/routes";

export default function ProfilePage() {
  const router = useRouter();
  const onTopClick = () => {
    router.push(Routes.Profile);
  };

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
        <div className="hidden sm:mr-4 sm:flex sm:justify-end">
          <Button
            className="mt-[34px] flex justify-center items-center content-end gap-[4px]"
            width="126px"
            onClick={onTopClick}
          >
            Наверх
            <span className="-mt-[4.5px] text-[15px] font-bold">↑</span>
            {/* <Arrow /> */}
          </Button>
        </div>
      </div>
    </PrivateRoute>
  );
}
