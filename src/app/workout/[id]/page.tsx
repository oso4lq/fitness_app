// src/app/workout/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Workout } from "@/types/types";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Routes from "@/routes";
import { useAppSelector } from "@/hooks";
import { calculateCompletionPercentage } from "@/lib/calculateCompletionPercentage";

type WorkoutVideoPageProps = {
  params: { id: string };
};

export default function WorkoutVideoPage({ params }: WorkoutVideoPageProps) {
  const router = useRouter();
  const workoutId = params.id;

  const indexWorkout = useAppSelector(
    (state) => state.usersCourses.currentWorkoutIndex
  );
  const nameCourse = useAppSelector(
    (state) => state.usersCourses.currentCourseData?.nameRU
  );

  const [workoutData, setWorkoutData] = useState<Workout | null>(null);
  const currentExercisesQuantity = useAppSelector(
    (state) => state.usersCourses.currentExercisesQuantity
  );

  useEffect(() => {
    const getWorkoutData = async () => {
      try {
        const response = await fetch(
          `https://fitness-project-ind15-default-rtdb.europe-west1.firebasedatabase.app/workouts/${workoutId}.json`
        );
        const data = await response.json();
        setWorkoutData(data);
      } catch (error) {
        console.error("Error fetching workout data:", error);
      }
    };
    getWorkoutData();
  }, [workoutId, currentExercisesQuantity]);

  const onSaveClick = () => {
    router.push(Routes.MyProgress);
  };

  return (
    <>
      {workoutData ? (
        <div>
          <h1
            data-tid="titleCourseName"
            className="mt-10 sm:mx-4 md:mx-4 text-6xl sm:text-[26px] md:text-[32px] font-medium leading-none"
          >
            {nameCourse}
          </h1>
          <p
            data-tid="workoutName"
            className="mt-6 sm:mt-[10px] sm:mx-4 md:mx-4 text-4xl sm:text-xl md:text-xl font-normal leading-snug"
          >
            {workoutData.name}
          </p>

          <div
            data-tid="videoContainer"
            className="relative mt-10 sm:mt-6 md:mt-6 sm:mx-4 md:mx-4 w-full sm:w-auto md:w-auto overflow-hidden aspect-w-16 aspect-h-9 rounded"
          >
            <iframe
              data-tid="video"
              className="absolute top-0 left-0 h-full w-full rounded-2xl object-cover"
              src={workoutData.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>

          <div
            data-tid="exercisesBlock"
            className="mt-10 sm:mt-6 md:mt-6 mb-[60px] sm:mx-4 md:mx-4 rounded bg-white-base p-10 sm:p-7 md:p-7 shadow-blocks"
          >
            {workoutData.exercises ? (
              <>
                <h2
                  data-tid="titleExercises"
                  className="text-[35px] md:text-2xl font-normal leading-snug"
                >
                  {`Упражнения тренировки ${indexWorkout}`}
                </h2>

                <div
                  data-tid="containerListExercises"
                  className="mt-5 mb-10 flex flex-wrap items-end gap-y-[20px] gap-x-[60px]"
                >
                  {workoutData.exercises?.map((item, index) => {
                    const currentProgress =
                      currentExercisesQuantity[index] || 0;
                    const completionPercentage = calculateCompletionPercentage(
                      currentProgress,
                      item.quantity
                    );
                    const nameExerciseUpgrate: string = item.name.replace(
                      /\(\d+ повторений\)/,
                      `${(currentProgress / item.quantity) * 100}%`
                    );

                    return (
                      <div
                        key={index}
                        data-tid="wrapperExercise"
                        className="w-[320px] md:w-[250px]"
                      >
                        <p
                          data-tid="nameExercise"
                          className="text-lg md:text-base font-normal leading-snug"
                        >
                          {nameExerciseUpgrate}
                        </p>
                        <ProgressBar
                          completionPercentage={completionPercentage}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="w-[320px] sm:w-[283px] md:w-[250px]">
                  <Button onClick={onSaveClick}>
                    {currentExercisesQuantity.length > 0
                      ? "Обновить свой прогресс"
                      : "Заполнить свой прогресс"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-[35px] my-[5%] mx-[15%]">
                у тренировки нет обязательных упражнений
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Workout is loading...</p>
      )}
    </>
  );
}
