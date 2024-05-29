"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";
import { useState } from "react";
import Routes from "@/routes";
import Check from "../Check/Check";

export default function SelectWorkout() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onWorkoutClick = () => {
    router.push(Routes.Workout);
    setIsOpen(false);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl leading-8 text-center font-medium">
          Выберите тренировку
        </h1>
      </div>
      <form>
        <div className="h-[346px] mb-9 overflow-y-auto scrollbar">
          <div className="divide-y divide-gray-dark mr-5">
            <div className="py-3 flex items-center first:pt-0 last:pb-0">
              <div className="flex rounded mr-2">
                <Check isChecked={true}/>
              </div>
              <div className="text-base">
                <label htmlFor="helper-checkbox-1" className="font-medium">
                  <div>Утренняя практика</div>
                  <p
                    id="helper-checkbox-text-1"
                    className="text-sm font-normal"
                  >
                    Йога на каждый день / 1 день
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button onClick={onWorkoutClick}>Начать</Button>
        </div>
      </form>
    </>
  );
}

// Утренняя практика
// Йога на каждый день / 1 день

// Красота и здоровье
// Йога на каждый день / 2 день

// Асаны стоя
// Йога на каждый день / 3 день

// Растягиваем мышцы бедра
// Йога на каждый день / 4 день

// Гибкость спины
// Йога на каждый день / 5 день

// Сильные руки
// Йога на каждый день / 6 день

// Глубокое расслабление
// Йога на каждый день / 7 день
