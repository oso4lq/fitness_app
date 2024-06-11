import Image from "next/image";

export default function Activity({ courseData }: any) {
  const { nameRU, nameEN } = courseData;

  return (
    <div
      data-tid="activityBox"
      className="mb-[60px] sm:mb-10 md:mb-10 rounded-[30px] flex relative sm:mx-4 md:mx-4"
    >
      <h1 className="absolute mx-[40px] mt-[40px] text-[60px] font-medium leading-[66px] text-white-base sm:hidden">
        {nameRU}
      </h1>
      <div className="block sm:hidden">
        <Image
          width={1160}
          height={310}
          src={`/img/themeBig_${nameEN}.svg`}
          alt={`${nameRU}`}
        />
      </div>
      <div className="hidden lg:block md:hidden sm:w-[343px] sm:rounded">
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
