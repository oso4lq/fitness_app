import { Activity } from "@/components/Activity";
import { CoursType } from "@/types/types";
import Image from "next/image";


export default function CourseMain({ courseData }: {courseData: CoursType}) {
  if (!courseData) {
    return <div>no data loaded</div>;
  }

  const { fitting, directions } = courseData;

  return (
    <div data-tid="courseMainBox" className="mt-[60px]">
      <Activity courseData={courseData} />

      <h2 className="mb-[40px] sm:mb-6 sm:mx-[16px] text-[40px] sm:text-[26px] font-semibold leadin-[44px] text-black-base">
        Подойдёт для вас, если:
      </h2>

      <div className="flex mb-[60px] sm:mb-[40px] gap-[10px] sm:flex-col sm:mx-4">
        {fitting.map((fittingItem: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-[25px] bg-dark-gradient p-[20px] rounded-[28px]"
          >
            <div className="text-green-dark text-[75px] font-medium leading-[101.25px]">
              {index + 1}
            </div>
            <div className="text-white-base text-[24px] font-normal leading-[26.4px]">
              {fittingItem}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-[40px] sm:mb-6 sm:mx-4 text-[40px] sm:text-[24px] font-semibold sm:font-medium leadin-[44px] text-black-base">
        Направления
      </h2>
      <div className="grid sm:flex sm:flex-col sm:mx-4 grid-cols-3 gap-x-[124px] gap-y-[34px] p-[30px] rounded-[28px] bg-green-dark"> 
        {directions.map((direction: string, index: number) => (
          <div key={index} className="flex gap-[3px]">
            <Image
              src="/img/icon/sparcle.svg"
              width={26}
              height={26}
              alt="sparcle"
            />
            <div className="text-black-base text-[24px] sm:text-[20px] font-normal leading-[26.4px]">{direction}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
