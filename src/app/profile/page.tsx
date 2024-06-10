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
      <div
        data-tid="pageWrap"
        className="mb-20 sm:mb-10 md:mb-10 pt-[60px] sm:py-10 md:py-10"
      >
        <UserProfile />
        <h2
          data-tid="titleCourses"
          className="mt-[60px] mb-[40px] sm:my-6 md:my-6 sm:mx-4 md:mx-4 text-[40px] sm:text-[26px] md:text-[32px] font-semibold leading-[44px]"
        >
          Мои курсы
        </h2>
        <CourseCardList />
        <div className="hidden sm:mr-4 sm:flex md:flex sm:justify-end md:justify-center">
          <Button
            className="mt-[34px] flex justify-center items-center content-end gap-[4px]"
            width="126px"
            onClick={onTopClick}
          >
            Наверх
            <span className="-mt-[4.5px] text-[15px] font-bold">↑</span>
          </Button>
        </div>
      </div>
    </PrivateRoute>
  );
}
