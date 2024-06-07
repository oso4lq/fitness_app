import classNames from "classnames";
import styles from "./Activity.module.css";
import Image from "next/image";

export default function Activity({ courseData }: any) {
  // logic

  const { nameRU, nameEN } = courseData;

  return (
    <div
      data-tid="activityBox"
      className="mb-[60px] rounded-[30px] flex relative sm:mx-4" //justify-between
    >
      <h1 className="absolute mx-[40px] mt-[40px] text-[60px] font-medium leadin-[66px] text-white-base sm:hidden">{nameRU}</h1>
      <div className="sm:w-[343px] sm:h-[389px]">
        <Image
          width={1160}
          height={310}
          className=""
          src={`/img/themeBig_${nameEN}.png`}
          alt={`${nameRU}`}
        />
      </div>
    </div>
  );
}
