"use client";

import Image from "next/image";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import Routes from "@/routes";
import { useAppSelector } from "@/hooks";

export default function CourseBegin() {
  const router = useRouter();
  const state = useAppSelector(({ user }) => user);

  const onLoginClick = () => {
    router.push(Routes.Login);
  };

  const onProfileClick = () => {
    router.push(Routes.Profile);
  };

  return (
    <div className="bg-white-base mt-[102px] mb-[100px] p-[30px] rounded-[30px] shadow-blocks flex relative">
      <div className="w-[437px]">
        <h1 className="mb-[28px] text-black-base text-[60px] font-medium leading-[60px]">
          Начните путь к новому телу
        </h1>

        {/* содержание напоминает description в курсе, но там строка произвольного текста, уточнить должен ли тут быть список?! */}
        <ul
          data-tid="description-list"
          className="mb-[28px] list-inside space-y-3"
        >
          <li className="list-item-grey">проработка всех групп мышц</li>
          <li className="list-item-grey">тренировка суставов</li>
          <li className="list-item-grey">улучшение циркуляции крови</li>
          <li className="list-item-grey">упражнения заряжают бодростью</li>
          <li className="list-item-grey">помогают противостоять стрессам</li>
        </ul>

        {state.isAuthenticated ? (
          <Button onClick={onProfileClick}>Добавить курс</Button>
        ) : (
          <Button onClick={onLoginClick}>Войдите, чтобы добавить курс</Button>
        )}
      </div>

      <Image
        width={487}
        height={543}
        className="absolute bottom-[30px] right-[44px] z-30 -rotate-3"
        src="/img/new_body.png"
        alt="runner"
      />
      <div className="absolute bottom-0 right-[20px] z-20 max-w-[650px] h-[370px] overflow-hidden">
        <Image
          width={670}
          height={390}
          src="/img/curve-green.svg"
          alt="curve-green"
        />
      </div>
      <Image
        width={50}
        height={42}
        className="absolute top-[32px] right-[378px] z-20"
        src="/img/curve-black.svg"
        alt="curve-black"
      />
    </div>
  );
}
