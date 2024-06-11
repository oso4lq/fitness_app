import { Activity } from "@/components/Activity";
import { CoursType } from "@/types/types";
import Image from "next/image";


export default function CourseMain({ courseData }: {courseData: CoursType}) {
  if (!courseData) {
    return <div>no data loaded</div>;
  }

  const { fitting, directions } = courseData;

  return (
    <div data-tid="courseMainBox" className="mt-[60px] sm:mt-[40px]">
      <Activity courseData={courseData} />

      <h2 className="mb-10 sm:mb-6 md:mb-10 sm:mx-4 md:mx-4 text-[40px] sm:text-2xl md:text-3xl font-semibold leading-[44px] text-black-base">
        Подойдёт для вас, если:
      </h2>

      <div className="flex mb-[60px] sm:mb-10 md:mb-10 gap-[10px] sm:flex-col md:flex-col sm:mx-4 md:mx-4">
        {fitting.map((fittingItem: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-[25px] bg-dark-gradient p-5 md:p-4 rounded"
          >
            <div className="text-green-dark text-7xl font-medium leading-[101.25px]">
              {index + 1}
            </div>
            <div className="text-white-base text-2xl md:text-xl font-normal leading-[26.4px]">
              {fittingItem}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-10 sm:mb-6 md:mb-10 sm:mx-4 md:mx-4 text-[40px] sm:text-2xl md:text-3xl font-semibold sm:font-medium leading-[44px] text-black-base">
        Направления
      </h2>
      <div className="grid sm:flex sm:flex-col sm:mx-4 md:mx-4 grid-cols-3 md:grid-cols-2 gap-x-[124px] gap-y-[34px] p-[30px] rounded bg-green-dark"> 
        {directions.map((direction: string, index: number) => (
          <div key={index} className="flex gap-[3px] md:gap-3">
            <Image
              src="/img/icon/sparcle.svg"
              width={26}
              height={26}
              alt="sparcle"
            />
            <div className="text-black-base text-2xl sm:text-xl md:text-xl font-normal leading-[26.4px]">{direction}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
