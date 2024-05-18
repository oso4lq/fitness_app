"use client";
import { useEffect, useState } from "react";
import data from "../../../lib/data.json";
import { Workout, WorkoutsData } from "@/types/types";
import styles from "../page.module.css";

type WorkoutVideoPageProps = {
  params: { id: string };
};

export default function WorkoutVideoPage({ params }: WorkoutVideoPageProps) {
  const workoutsContent: WorkoutsData = data.workouts;
  const workoutId = params.id;

  const [workoutData, setWorkoutData] = useState<Workout | null>(null);

  useEffect(() => {
    const getWorkoutData = async () => {
      try {
        const workout = workoutsContent[workoutId];
        if (workout) {
          setWorkoutData(workout);
        } else {
          console.error("Workout not found");
        }
      } catch (error) {
        console.error("Error fetching workout data:", error);
      }
    };
    getWorkoutData();
  }, [workoutsContent, workoutId]);

  return (
    <>
      {workoutData ? (
        <div>
          <h1 data-tid="styles.titleCourseName" className="mt-10 text-6xl font-medium leading-none">
            Йога <span className="text-red-500">из Курса подтягивать</span>
          </h1>
          <p data-tid="styles.workoutName" className="mt-6 text-4xl font-normal leading-snug">{workoutData.name}</p>

        {/* выбрать что оставить либо iframe либо video */}
          <div data-tid="styles.videoContainer" className="relative mt-10 w-full overflow-hidden aspect-w-16 aspect-h-9">
            <iframe data-tid="styles.video" className="absolute top-0 left-0 h-full w-full rounded-2xl object-cover"
              src={workoutData.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            {/* <video
              data-tid="styles.videoContainer" className="relative mt-10 w-full overflow-hidden aspect-w-16 aspect-h-9"
              src={workoutData.video}
              controls
              poster=""
            /> */}
          </div>

          <div data-tid="styles.exercisesBlock" className="mt-10 rounded-2xl bg-white p-10 shadow-lg">

            <h2 data-tid="styles.titleExercises" className="text-4xl font-normal leading-snug">
              Упражнения тренировки{" "}
              <span className="text-red-500">
                #index courses.workouts._id: [..]
              </span>
            </h2>

            <div data-tid="styles.containerListExercises" className="mt-5 flex flex-wrap items-start gap-y-[20px] gap-x-[60px]">
              
              {workoutData.exercises?.map((item, index) => {
                const currentProgress = 0; //заглушка для рендера, поменять логику на получение из инпута
                const completionPercentage =
                  (currentProgress / item.quantity) * 100;
                const nameExerciseUpgrate: string = item.name.replace(
                  /\(\d+ повторений\)/,
                  `${completionPercentage}%`
                );

                return (
                  <div key={index} data-tid="styles.wrapperExercise" className={styles.wrapperExercise}>
                    <p data-tid="styles.nameExercise" className="text-lg font-normal leading-snug">{nameExerciseUpgrate}</p>
                    <input
                      data-tid="tyles.progressBarExercise"
                      type="range"
                      name="exerciseProgress"
                      max={item.quantity}
                      value={currentProgress}
                      className="mt-2 w-full"
                    />
                  </div>
                );
              })}
            </div>

            <button data-tid="styles.btn" className="mt-10 w-80 h-[52px] rounded-full border text-lg font-normal leading-tight">Заполнить свой прогресс</button>
          </div>
        </div>
      ) : (
        <p>Workout is loading...</p>
      )}
    </>
  );
}
