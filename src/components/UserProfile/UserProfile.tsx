// src/components/UserProfile/UserProfile.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updatePassword } from "firebase/auth";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { auth } from "@/lib/firebaseConfig";
import Image from "next/image";
import { Button, ButtonAdditional } from "../Button/Button";
import Routes from "@/routes";
import { logOutUser } from "@/store/features/userSlice";

export default function UserProfile() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = auth.currentUser;
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChangePassword = async () => {
    if (!currentUser) {
      setError("User not authenticated");
      return;
    }

    try {
      await updatePassword(currentUser, newPassword);
      setNewPassword("");
      alert("Password updated successfully");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logOutUser());
      router.push(Routes.Main);
    } catch (err) {
      setError((err as Error).message);
    }
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
            src={currentUser ? "/img/icon/USER_PHOTO.svg" : "/img/icon/photo_user.svg"}
          />
          <div data-tid="userData" className="flex flex-col gap-[30px]">
            <h3 className="text-[32px] font-medium leading-[35px]">{currentUser?.email}</h3>
            <div className="">
              <p className="mb-[10px] text-[18px] font-normal leading-[19px]">
                Логин: {currentUser?.email}
              </p>
              <div className="mb-[10px] text-[18px] font-normal leading-[19px]">
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-[394px] flex flex-wrap gap-[10px]">
              <Button width="192px" onClick={handleChangePassword}>
                Изменить пароль
              </Button>
              <ButtonAdditional width="192px" onClick={handleLogout}>
                Выйти
              </ButtonAdditional>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
