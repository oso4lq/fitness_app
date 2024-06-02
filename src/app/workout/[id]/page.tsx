// src/app/workout/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Workout, WorkoutsData } from "@/types/types";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { Button } from "@/components/Button/Button";

type WorkoutVideoPageProps = {
  params: { id: string };
};

export default function WorkoutVideoPage({ params }: WorkoutVideoPageProps) {
  const workoutId = params.id;

  const [workoutData, setWorkoutData] = useState<Workout | null>(null);

  useEffect(() => {
    const getWorkoutData = async () => {
      try {
        const response = await fetch(`https://fitness-project-ind15-default-rtdb.europe-west1.firebasedatabase.app/workouts/${workoutId}.json`);
        const data = await response.json();
        setWorkoutData(data);
      } catch (error) {
        console.error("Error fetching workout data:", error);
      }
    };
    getWorkoutData();
  }, [workoutId]);

  return (
    <>
      {workoutData ? (
        <div>
          <h1
            data-tid="titleCourseName"
            className="mt-10 text-6xl font-medium leading-none"
          >
            <span className="text-red-500">course_name from profile_page</span>
          </h1>
          <p
            data-tid="workoutName"
            className="mt-6 text-4xl font-normal leading-snug"
          >
            {workoutData.name}
          </p>

          <div
            data-tid="videoContainer"
            className="relative mt-10 w-full overflow-hidden aspect-w-16 aspect-h-9 rounded"
          >
            <iframe
              data-tid="video"
              className="absolute top-0 left-0 h-full w-full rounded-2xl object-cover"
              src={workoutData.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>

          {workoutData.exercises ? (
            <div
              data-tid="exercisesBlock"
              className="mt-10 mb-[60px] rounded bg-white-base p-10 shadow-blocks"
            >
              <h2
                data-tid="titleExercises"
                className="text-4xl font-normal leading-snug"
              >
                Упражнения тренировки{" "}
                <span className="text-red-500">#index</span>
              </h2>

              <div
                data-tid="containerListExercises"
                className="mt-5 mb-10 flex flex-wrap items-end gap-y-[20px] gap-x-[60px]"
              >
                {workoutData.exercises?.map((item, index) => {
                  const currentProgress = 5; // заглушка для рендера, поменять логику на получение из инпута
                  const completionPercentage =
                    Math.round((currentProgress / item.quantity) * 100);
                  const nameExerciseUpgrate: string = item.name.replace(
                    /\(\d+ повторений\)/,
                    `${completionPercentage}%`
                  );

                  return (
                    <div
                      key={index}
                      data-tid="wrapperExercise"
                      className="w-[320px]"
                    >
                      <p
                        data-tid="nameExercise"
                        className="text-lg font-normal leading-snug"
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

              <Button width="320px">Заполнить свой прогресс</Button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <p>Workout is loading...</p>
      )}
    </>
  );
}
