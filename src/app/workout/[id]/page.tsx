"use client";
import { useEffect, useState } from "react";
import data from "../../../lib/data.json";
import { Workout, WorkoutsData } from "@/types/types";

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
          <p>{workoutData.name}</p>
          <video src={workoutData.video} controls poster="" />
          <div>
            <h2>Упражнения тренировки</h2>
            {workoutData.exercises?.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
            <button>Заполнить свой прогресс</button>
          </div>
        </div>
      ) : (
        <p>Workout not found</p>
      )}
    </>
  );
}
