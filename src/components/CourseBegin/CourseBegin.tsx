import Image from "next/image";
import { Button } from "../Button/Button";
import { CoursType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  addPickedCourse,
  fetchPickedIDsCourses,
  removePickedCourse,
} from "@/lib/firebaseUser";
import { useRouter } from "next/navigation";
import Routes from "@/routes";
import { setPickedIDsCourses } from "@/store/features/coursesSlice";

export default function CourseBegin({ courseData }: { courseData: CoursType }) {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const pickedIDsCourses = useAppSelector(
    (state) => state.usersCourses.pickedIDsCourses
  );
  const isPickedCourse = pickedIDsCourses.includes(courseData._id);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handlePickCourse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      await (isPickedCourse
        ? removePickedCourse(courseData._id)
        : addPickedCourse(courseData._id));
      const IDsCourses: string[] = await fetchPickedIDsCourses();
      dispatch(setPickedIDsCourses(IDsCourses));
    } else {
      router.replace(Routes.Login);
    }
  };

  return (
    <div className="bg-white-base mt-[102px] sm:mt-[156px] mb-[100px] sm:mx-4 p-[30px] rounded-[30px] shadow-blocks flex relative">
      <div className="w-[437px] sm:z-[10]">
        <h1 className="mb-[28px] text-black-base text-[60px] sm:text-[35px] font-medium leading-[60px] sm:leading-9">
          Начните путь к новому телу
        </h1>

        {/* содержание напоминает description в курсе, но там строка произвольного текста, уточнить должен ли тут быть список?! */}
        <ul
          data-tid="description-list"
          className="mb-[28px] list-inside space-y-3"
        >
          {/* className="text-[24px] font-normal leading-[26.4px] text-black-base opacity-60" */}
          <p>{courseData.description}</p>
          {/* <li className="list-item-grey">проработка всех групп мышц</li>
          <li className="list-item-grey">тренировка суставов</li>
          <li className="list-item-grey">улучшение циркуляции крови</li>
          <li className="list-item-grey">упражнения заряжают бодростью</li>
          <li className="list-item-grey">помогают противостоять стрессам</li> */}
        </ul>

        <Button onClick={handlePickCourse}>
          {!isAuthenticated
            ? "Войдите, чтобы добавить курс"
            : isPickedCourse
            ? "Удалить курс"
            : "Добавить курс"}
        </Button>
      </div>

      <Image
        width={487}
        height={543}
        className="absolute bottom-[30px] sm:bottom-[462px] right-[44px] sm:right-[-60px] z-30 sm:z-[1] -rotate-3"
        src="/img/new_body.png"
        alt="runner"
      />
      <div className="absolute bottom-0 sm:bottom-[400px] right-[20px] sm:right-[-50px] z-20 sm:z-[0] max-w-[650px] h-[370px] overflow-hidden">
        <Image
          width={670}
          height={390}
          src="/img/curve-green.svg"
          alt="curve-green"
        />
      </div>
      <Image
        width={50}
        height={42}
        className="absolute top-[32px] right-[378px] z-20"
        src="/img/curve-black.svg"
        alt="curve-black"
      />
    </div>
  );
}
