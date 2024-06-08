"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import Image from "next/image";
import { logOutUser } from "@/store/features/userSlice";
import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import { useAppDispatch, useAppSelector, useOutsideClick } from "@/hooks";
import Routes from "@/routes";
import { setCurrentCourseData, setCurrentWorkoutData, setPickedIDsCourses } from "@/store/features/coursesSlice";

export default function Header() {
  const { isAuthenticated, email } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleLogout = () => {
    dispatch(logOutUser()).then(() => {
      setIsOpen(false);
      dispatch(setPickedIDsCourses([]));
      dispatch(setCurrentCourseData(null));
      dispatch(setCurrentWorkoutData({data: null, index: null}));
      router.replace("/");
    });
  };

  const onLoginClick = () => {
    router.push(Routes.Login);
  };

  const onProfileClick = () => {
    setIsOpen(false);
    router.push(Routes.Profile);
  };

  return (
    <div className="flex justify-between sm:mx-4">
      <div className="sm:mb-[2px]">
        <Link href={"/"}>
          <Logo />
          <div className="text-lg opacity-60 sm:hidden">
            Онлайн-тренировки для занятий дома
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        {isAuthenticated ? (
          <div className="flex">
            <Image
              className="w-12 h-12 sm:w-[36px] sm:h-[36px]"
              src="/img/icon/user.svg"
              alt="user_img"
              width={48}
              height={48}
            />
            <div
              className="flex items-center ml-4 sm:ml-0 cursor-pointer relative"
              onClick={() => {
                setIsOpen((val) => !val);
              }}
            >
              <div className="sm:hidden">{email?.split("@")[0]}</div>
              <Image
                className="w-3 h-2 ml-3"
                src="/img/icon/button_user.svg"
                alt="button_user_img"
                width={12}
                height={8}
              />
              {isOpen && (
                <div
                  ref={ref}
                  className="modal w-[266px] rounded p-[30px] bg-white-base absolute z-10 top-[74px] right-0"
                >
                  <div className="mb-8">
                    <div className="text-lg text-center">
                      {email?.split("@")[0]}
                    </div>
                    <div className="text-lg text-center opacity-60">
                      {email}
                    </div>
                  </div>
                  <div>
                    <Button onClick={onProfileClick}>Мой профиль</Button>
                    <ButtonAdditional onClick={handleLogout} className="mt-3">
                      Выйти
                    </ButtonAdditional>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Button width="102px" onClick={onLoginClick} className="sm:h-[36px] sm:w-[83px]">
            Войти
          </Button>
        )}
      </div>
    </div>
  );
}
