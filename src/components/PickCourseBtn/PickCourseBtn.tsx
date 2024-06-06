import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  addPickedCourse,
  fetchPickedIDsCourses,
  removePickedCourse,
} from "@/lib/firebaseUser";
import { setPickedIDsCourses } from "@/store/features/coursesSlice";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Routes from "@/routes";

export default function PickCourseBtn({
  isPicked,
  courseID,
}: {
  isPicked: boolean;
  courseID: string;
}) {
  const minusBtnUrl = "img/icon/minus.svg";
  const plusBtnUrl = "img/icon/plus.svg";
  const tooltipContent = isPicked ? "Удалить курс" : "Добавить курс";
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePickCourse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      await (isPicked
        ? removePickedCourse(courseID)
        : addPickedCourse(courseID));
      const IDsCourses: string[] = await fetchPickedIDsCourses();
      dispatch(setPickedIDsCourses(IDsCourses));
    } else {
      router.replace(Routes.Login);
    }
  };

  return (
    <Tippy
      content={tooltipContent}
      placement="right"
      offset={[40, 10]}
      className="bg-white-base border border-black-base rounded-[5px] p-[6px] text-[14px] leading-[15.4px] font-normal shadow-lg"
    >
      <button
        className="absolute top-5 right-5 cursor-customCursor"
        onClick={handlePickCourse}
      >
        <Image
          src={isPicked ? minusBtnUrl : plusBtnUrl}
          alt={isPicked ? "minusBtn" : "plusBtn"}
          width={32}
          height={32}
          className="hover:scale-125 active:scale-125 active:rounded-[50%] active:border-4 active:border-gray-dark"
        />
      </button>
    </Tippy>
  );
}


        //  посмотреть в документации Next.js еще раз по вставку svg
        // <svg
        //   width="32"
        //   height="32"
        //   viewBox="0 0 32 32"
        //   className="h-[32px] w-[32px] fill-white-base hover:fill-gray-dark active:fill-black-base"
        // >
        //   <use className="h-[32px] w-[32px]" href={isPicked ? minusBtnUrl : plusBtnUrl} />{" "}
        // </svg> 