"use client";

import { Button } from "../Button/Button";
import SelectWorkoutItem from "../SelectWorkoutItem/SelectWorkoutItem";

export default function SelectWorkout() {
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

            <SelectWorkoutItem/>

          </div>
        </div>
        <div>
          <Button>Начать</Button>
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
