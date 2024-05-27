import { Activity } from "@/components/Activity";
import Image from "next/image";

interface CourseMainProps {
  courseData: any;
}

export default function CourseMain({ courseData }: CourseMainProps) {
  if (!courseData) {
    return <div>no data loaded</div>;
  }

  const { fitting, directions } = courseData;

  return (
    <div data-tid="courseMainBox" className="mt-[60px]">
      <Activity courseData={courseData} />

      <h2 className="mb-[40px] text-[40px] font-semibold leadin-[44px] text-black-base">
        Подойдёт для вас, если:
      </h2>

      <div className="flex mb-[60px] gap-[10px]">
        {fitting.map((fittingItem: any, index: any) => (
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

      <h2 className="mb-[40px] text-[40px] font-semibold leadin-[44px] text-black-base">
        Направления
      </h2>
      <div className="grid grid-cols-3 gap-x-[124px] gap-y-[34px] p-[30px] rounded-[28px] bg-green-dark"> 
        {directions.map((direction: any, index: any) => (
          <div key={index} className="flex gap-[3px]">
            <Image
              src="/img/icon/sparcle.svg"
              width={26}
              height={26}
              alt="sparcle"
            />
            <div className="text-black-base text-[24px] font-normal leading-[26.4px]">{direction}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
