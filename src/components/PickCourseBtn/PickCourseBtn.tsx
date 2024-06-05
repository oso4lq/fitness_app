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
  const userUID = useAppSelector((state) => state.user.uid);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePickCourse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (userUID) {
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
        />
      </button>
    </Tippy>
  );
}
