import Image from "next/image";

export default function Activity({ courseData }: any) {
  // logic

  const { nameRU, nameEN } = courseData;

  return (
    <div
      data-tid="activityBox"
      className="mb-[60px] sm:mb-[40px] rounded-[30px] flex relative sm:mx-4" //justify-between
    >
      <h1 className="absolute mx-[40px] mt-[40px] text-[60px] font-medium leadin-[66px] text-white-base sm:hidden">
        {nameRU}
      </h1>
      <div className="block md:hidden">
        <Image
          width={1160}
          height={310}
          src={`/img/themeBig_${nameEN}.svg`}
          alt={`${nameRU}`}
        />
      </div>
      <div className="hidden md:block sm:w-[343px] sm:rounded">
        <Image
          width={343}
          height={389}
          src={`/img/theme_${nameEN}.svg`}
          alt={`${nameRU}`}
          className="sm:rounded"
        />
      </div>
    </div>
  );
}
