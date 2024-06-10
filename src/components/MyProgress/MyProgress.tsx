"use client";

import Routes from "@/routes";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Exercise } from "@/types/types";
import { setExerciseQuantity } from "@/store/features/coursesSlice";

export default function MyProgress() {
  const router = useRouter();
  const dispatch = useAppDispatch();


  const onSaveClick = () => {
    router.replace(Routes.ApprovalResult);
  };

  const exercisesArray: Exercise[] =
    useAppSelector(
      (state) => state.usersCourses.currentWorkoutData?.exercises
    ) || [];

    const currentExercisesQuantity = useAppSelector(
      (state) => state.usersCourses.currentExercisesQuantity
    );
  
    const exerciseUpdateProgress = (index: number, value: number) => {
      dispatch(setExerciseQuantity({ index, quantity: value }));
    };
  

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl leading-8 text-left font-medium">
          Мой прогресс
        </h1>
      </div>
      <form>
        <div className="h-[346px] mb-9 overflow-y-auto scrollbar">
          {exercisesArray.map((item, index) => (
            <div key={index} data-tid="input-item" className="mr-5">
              <div className="mb-5 space-y-2">
                <p className="text-sm leading-5 text-left">
                  {`Сколько раз вы сделали ${item.name.toLowerCase()}?`}
                </p>
                <div>
                  <Input
                    name={`times-${index}`}
                    type="string"
                    placeholder="0"
                    value={currentExercisesQuantity[index]}
                    onChange={(e) => exerciseUpdateProgress(index, Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <Button onClick={onSaveClick}>Сохранить</Button>
        </div>
      </form>
    </>
  );
}
