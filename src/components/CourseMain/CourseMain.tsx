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
        <div className={styles.courseMainBox}>
            <Activity courseData={courseData} />
            <h2>Подойдёт для вас, если:</h2>
            <div>
                {fitting.map((fittingItem: any, index: any) => (
                    <div key={index}>{fittingItem}</div>
                ))}
            </div>
            <h2>Направления</h2>
            <div>
                {directions.map((direction: any, index: any) => (
                    <div key={index}>{direction}</div>
                ))}
            </div>
        </div>
    );
}
