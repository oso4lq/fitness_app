// src/components/UserProfile/UserProfile.tsx
"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Image from "next/image";
import { Button, ButtonAdditional } from "../Button/Button";
import Routes from "@/routes";
import { logOutUser } from "@/store/features/userSlice";
import {
  setCurrentCourseData,
  setCurrentWorkoutData,
  setPickedIDsCourses,
} from "@/store/features/coursesSlice";

export default function UserProfile() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user);

  const handleChangePassword = () => {
    router.push(Routes.ResetPass);
  };

  const handleLogout = () => {
    dispatch(logOutUser()).then(() => {
      dispatch(setPickedIDsCourses([]));
      dispatch(setCurrentCourseData(null));
      dispatch(setCurrentWorkoutData({ data: null, index: null }));
      router.push(Routes.Main);
    });
  };

  return (
    <>
      <h2
        data-tid="titleProfile"
        className="text-[40px] sm:text-[26px] md:text-[32px] sm:mx-4 md:mx-4 font-semibold leading-[44px]"
      >
        Профиль
      </h2>
      <div
        data-tid="profileUserInfoBlock"
        className="bg-white-base mt-10 sm:mt-6 md:mt-6 sm:mx-4 md:mx-4 h-[257px] sm:h-auto p-[30px] rounded-[30px] shadow-blocks"
      >
        <div
          data-tid="contentBlock"
          className="flex gap-[30px] md:gap-6 sm:flex-col sm:items-center"
        >
          <Image
            height={197}
            width={197}
            alt="photo_user"
            src="/img/icon/photo_user.svg"
            className="sm:w-[141px] sm:h-[141px]"
          />
          <div
            data-tid="userData"
            className="flex flex-col gap-[30px] md:gap-[37px] sm:gap-[20px]"
          >
            <h3 className="text-[32px] sm:text-[26px] font-medium leading-[35px]">
              {email?.split("@")[0]}
            </h3>
            <div className="text-[18px] font-normal leading-[19px]">
              Логин: {email}
            </div>
            <div className="w-[394px] sm:w-[283px] md:w-[350px] flex gap-[10px] sm:flex-col sm:items-center">
              <Button
                onClick={handleChangePassword}
                className="w-[192px] sm:h-[50px] sm:w-[283px]"
              >
                Изменить пароль
              </Button>
              <ButtonAdditional
                onClick={handleLogout}
                className="w-[192px] sm:h-[50px] sm:w-[283px]"
              >
                Выйти
              </ButtonAdditional>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
