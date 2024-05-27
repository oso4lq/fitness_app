"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import Image from "next/image";
import { Button, ButtonAdditional } from "../Button/Button";
import { useState } from "react";
import { useAppDispatch, useAppSelector, useOutsideClick } from "@/hooks";
import Routes from "@/routes";
import { useRouter } from "next/navigation";
import { logOut } from "@/store/features/userSlice";

export default function Header() {
  const router = useRouter();
  const state = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const onLoginClick = () => {
    router.push(Routes.Login);
  };

  const onLogOutClick = () => {
    dispatch(logOut());
    setIsOpen(false);
  };

  const onProfileClick = () => {
    router.push(Routes.Profile);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between">
      <div>
        <div>
          <Link href={"/"}>
            <Logo />
            <div className="text-lg opacity-60">
              Онлайн-тренировки для занятий дома
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        {state.isAuthenticated ? (
          <div className="flex">
            <Image
              className="w-12 h-12"
              src="/img/icon/user.svg"
              alt="user_img"
              width={48}
              height={48}
            />
            <div
              className="flex items-center ml-4 cursor-pointer relative"
              onClick={() => {
                setIsOpen((val) => !val);
              }}
            >
              <div>{state.name}</div>
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
                    <div className="text-lg text-center">{state.name}</div>
                    <div className="text-lg text-center opacity-60">
                      {state.email}
                    </div>
                  </div>
                  <div className="">
                    <Button onClick={onProfileClick}>Мой профиль</Button>
                    <ButtonAdditional onClick={onLogOutClick} className="mt-3">
                      Выйти
                    </ButtonAdditional>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Button width="102px" onClick={onLoginClick}>
            Войти
          </Button>
        )}
      </div>
    </div>
  );
}
