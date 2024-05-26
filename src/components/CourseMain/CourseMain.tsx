import classNames from "classnames";
import styles from "./CourseMain.module.css";
import { Activity } from "@/components/Activity";

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

      <div className={styles.fitting}>
        {fitting.map((fittingItem: any, index: any) => (
          <div key={index} className="flex gap-[25px]">
            <div className="">{index + 1}</div>
            <div className={styles.fittingItem}>
              {fittingItem}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-[40px] text-[40px] font-semibold leadin-[44px] text-black-base">Направления</h2>
      <div className={styles.direction}>
        {directions.map((direction: any, index: any) => (
          <div className={styles.directionItem} key={index}>
            {direction}
          </div>
        ))}
      </div>
    </div>
  );
}
