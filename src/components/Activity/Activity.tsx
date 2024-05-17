import classNames from "classnames";
import styles from "./Activity.module.css";
import Image from "next/image";

export default function Activity() {
    // logic


    return (
        <div className={styles.activity}>
            <h1>TITLE</h1>
            <Image
                width={250}
                height={150}
                className={styles.activityImg}
                src="/img/yoga.jpg"
                alt="yoga"
            />
        </div>

    )
}
