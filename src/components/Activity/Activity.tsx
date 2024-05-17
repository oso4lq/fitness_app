import classNames from "classnames";
import styles from "./Activity.module.css";
import Image from "next/image";

export default function Activity({ courseData }: any) {
    // logic

    const { nameRU, nameEN } = courseData;


    return (
        <div className={styles.activityBox}>
            <h1>{nameRU}</h1>
            <Image
                width={250}
                height={150}
                className={styles.activityImg}
                src={`/img/${nameEN}.jpg`}
                alt={`${nameRU}`}
            />
        </div>

    )
}
