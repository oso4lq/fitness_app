// src/components/UserProfile/UserProfile.tsx
"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Image from "next/image";
import { Button, ButtonAdditional } from "../Button/Button";
import Routes from "@/routes";
import { logOutUser } from "@/store/features/userSlice";

export default function UserProfile() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user);

  const handleChangePassword = () => {
    router.push(Routes.ResetPass);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    router.push(Routes.Main);
  };

  return (
    <>
      <h2
        data-tid="titleProfile"
        className="mt-50 text-[40px] font-semibold leading-[44px]"
      >
        Профиль
      </h2>
      <div
        data-tid="profileUserInfoBlock"
        className="bg-white-base mt-10 h-[257px] p-[30px] rounded-[30px] shadow-blocks"
      >
        <div data-tid="contentBlock" className="flex gap-[30px] flex-wrap">
          <Image
            height={197}
            width={197}
            alt="photo_user"
            src="/img/icon/photo_user.svg"
          />
          <div data-tid="userData" className="flex flex-col gap-[30px]">
            <h3 className="text-[32px] font-medium leading-[35px]">
              {email?.split("@")[0]}
            </h3>
            <div className="">
              <p className="mb-[10px] text-[18px] font-normal leading-[19px]">
                Логин: {email}
              </p>
            </div>
            <div className="w-[394px] flex flex-wrap gap-[10px]">
              <Button width="192px" onClick={handleChangePassword}>
                Изменить пароль
              </Button>
              <ButtonAdditional width="192px" onClick={handleLogout}>
                Выйти
              </ButtonAdditional>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
