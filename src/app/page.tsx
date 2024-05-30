"use client";

import Arrow from "@/components/Arrow/Arrow";
import { Button } from "@/components/Button/Button";
import CourseCardList from "@/components/CourseCardList/CourseCardList";
import { useAppSelector } from "@/hooks";
import Routes from "@/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);

  const onHomeClick = () => {
    router.push(Routes.Main);
    setIsOpen(false);
  };

  return (
    <>
      <div className="mt-14 mb-12 h-[120px] flex">
        <div className="w-[872px]">
          <h1 className="text-5xl font-medium">
            Начните заниматься спортом и улучшите качество жизни
          </h1>
        </div>
        <div className="w-[288px] flex items-start">
          <div className="speech-bubble rounded-small bg-green-dark">
            <h2 className="text-2xl mx-5 my-4">Измени своё тело за полгода!</h2>
          </div>
        </div>
      </div>
      <CourseCardList />
      <div className="flex justify-center">
      <Button className="mt-[34px] flex justify-center items-center content-end gap-[4px]" width="126px" onClick={onHomeClick}>
        Наверх
        <span className="-mt-[4.5px] text-[15px] font-bold">↑</span>
          {/* <Arrow /> */}
      </Button>
      </div>

      <div className="DEVBLOCK">
        <p>блок на время разработки с кнопками на страницы</p>
        <Link href={"/course/"}>Course Page q02a6i</Link>
        <Link href={"/profile/"}>Profile Page</Link>
        <Link href={"/workout/"}>Workout Page</Link>
        <Link href={"/login/"}>Log in</Link>
        <Link href={"/signup/"}>Sign up</Link>
        <Link href={"/reset-pass-mail/"}>Reset mail</Link>
        <Link href={"/reset-pass/"}>Reset password</Link>
        <Link href={"/select-workout/"}>Select workout</Link>
        <Link href={"/my-progress/"}>My Progress</Link>
        <Link href={"/approval-result/"}>Approval result</Link>
      </div>
    </>
  );
}
