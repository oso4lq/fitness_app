import { Workout } from "@/types/types";
import Check from "../Check/Check";
import { useState } from "react";
import { useAppDispatch } from "@/hooks";
import { setCurrentWorkoutData, setExerciseQuantity } from "@/store/features/coursesSlice";

export default function SelectWorkoutItem({
  workoutData,
  isChecked,
  index,
}: {
  workoutData: Workout;
  isChecked: boolean;
  index: number;
}) {
  const dispatch = useAppDispatch();
  const [isCheckedNew, setIsCheckedNew] = useState<boolean>(isChecked);
  const handleCheckedtWorkout = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCheckedNew((prev) => !prev);
    dispatch(setCurrentWorkoutData({ data: workoutData, index: index }));
  };

  return (
    <div
      onClick={handleCheckedtWorkout}
      className="py-3 cursor-pointer flex items-center first:pt-0 last:pb-0"
    >
      <div className="flex rounded mr-2">
        <Check isChecked={isCheckedNew} />
      </div>
      <div className="text-base">
        <label htmlFor={`helper-checkbox-${index}`} className="font-medium">
          <div>{workoutData.name.split(" / ")[0]}</div>
          <p
            id={`helper-checkbox-text-${index}`}
            className="text-sm font-normal"
          >
            {workoutData.name.split(" / ").slice(1).join(" / ")}
          </p>
        </label>
      </div>
    </div>
  );
}
