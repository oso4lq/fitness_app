"use client";

import { useAppSelector } from "@/hooks";
import { Button } from "../Button/Button";
import SelectWorkoutItem from "../SelectWorkoutItem/SelectWorkoutItem";
import { Workout } from "@/types/types";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "@/lib/firebaseConfig";
import { sortWorkoutsNames } from "@/lib/sortWorkoutsNames";
import { useRouter } from "next/navigation";
import Routes from "@/routes";

export default function SelectWorkout() {
  const workoutsIDArray = useAppSelector(
    (state) => state.usersCourses.currentCourseData
  )?.workouts;
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  // const [isModalVisible, setIsModalVisible] = useState(true); // Состояние для управления видимостью модального окна
  const router = useRouter();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const dbRef = ref(db, "workouts");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setWorkouts(Object.values(data));
      } else {
        console.error("No data available");
      }
    };
    fetchWorkouts();
  }, [workoutsIDArray]);

  const workoutsDataArray =
    workouts?.filter((workout) => workoutsIDArray?.includes(workout._id)) || [];

  const isCompletedWorkouts: boolean = false; // тут написать логику получения массива завершенных полноситью тренировок
  // и передача в проп isChecked значения по содержанию workout/item в этом массиве

  const selectedWorkout = useAppSelector(
    (state) => state.usersCourses.currentWorkoutData
  );

  const selectedWorkoutPageOpen = () => {
    router.push(Routes.Workout + "/" + selectedWorkout?._id);
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
                {sortWorkoutsNames(workoutsDataArray).map((workout, index) => (
                  <SelectWorkoutItem
                    key={workout._id}
                    workoutData={workout}
                    isChecked={isCompletedWorkouts}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div>
              <Button onClick={selectedWorkoutPageOpen}>Начать</Button>
            </div>
          </form>
        </>

  );
}
