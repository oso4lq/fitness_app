import classNames from "classnames";
import styles from "./CourseMain.module.css";
import { Activity } from "@/components/Activity";

export default function CourseMain() {
    // logic

    return (
        <>
            <div className={styles.courseMainBox}>

                <Activity />
                <h2>Подойдёт для вас, если:</h2>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h2>Направления</h2>
                <div></div>
            </div>
        </>
    )
}
