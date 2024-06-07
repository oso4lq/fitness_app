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
  const [isModalVisible, setIsModalVisible] = useState(true); // Состояние для управления видимостью модального окна
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

  // сделать чтобы окно закрывалось после клика по кнопке Начать
  const selectedWorkoutPageOpen = () => {
    router.push(Routes.Workout + "/" + selectedWorkout?._id);
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
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
      )}
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

// <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-1"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-1" className="font-medium">
//           <div>Утренняя практика</div>
//           <p id="helper-radio-text-1" className="text-sm font-normal">
//             Йога на каждый день / 1 день
//           </p>
//         </label>
//       </div>
//     </div>
//     <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-2"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-2" className="font-medium">
//           <div>Красота и здоровье</div>
//           <p id="helper-radio-text-2" className="text-sm font-normal">
//             Йога на каждый день / 2 день
//           </p>
//         </label>
//       </div>
//     </div>
//     <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-3"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-3" className="font-medium">
//           <div>Асаны стоя</div>
//           <p id="helper-radio-text-3" className="text-sm font-normal">
//             Йога на каждый день / 3 день
//           </p>
//         </label>
//       </div>
//     </div>
//     <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-4"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-4" className="font-medium">
//           <div>Растягиваем мышцы бедра</div>
//           <p id="helper-radio-text-4" className="text-sm font-normal">
//             Йога на каждый день / 4 день
//           </p>
//         </label>
//       </div>
//     </div>
//     <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-5"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-5" className="font-medium">
//           <div>Гибкость спины</div>
//           <p id="helper-radio-text-5" className="text-sm font-normal">
//             Йога на каждый день / 5 день
//           </p>
//         </label>
//       </div>
//     </div>
//     <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-6"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-6" className="font-medium">
//           <div>Сильные руки</div>
//           <p id="helper-radio-text-6" className="text-sm font-normal">
//             Йога на каждый день / 6 день
//           </p>
//         </label>
//       </div>
//     </div>
//     <div className="py-3 flex items-center first:pt-0 last:pb-0">
//       <div className="flex rounded mr-2">
//         <input
//           id="helper-radio-7"
//           type="radio"
//           value="training"
//           name="training"
//           className="w-[20px] h-[20px] text-base leading-2 text-left"
//         />
//       </div>
//       <div className="text-base">
//         <label htmlFor="helper-radio-7" className="font-medium">
//           <div>Глубокое расслабление</div>
//           <p id="helper-radio-text-7" className="text-sm font-normal">
//             Йога на каждый день / 7 день
//           </p>
//         </label>
//       </div>
//     </div>
