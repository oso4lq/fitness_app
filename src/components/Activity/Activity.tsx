// import classNames from "classnames";
import Image from "next/image";

export default function Activity({ courseData }: any) {
  // logic

  const { nameRU, nameEN } = courseData;

  return (
    <div
      data-tid="activityBox"
      className="mb-[60px] rounded-[30px] flex relative" //justify-between
    >
      <h1 className="absolute mx-[40px] mt-[40px] text-[60px] font-medium leadin-[66px] text-white-base">{nameRU}</h1>
      <div className="">
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
