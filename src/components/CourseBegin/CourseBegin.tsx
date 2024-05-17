import classNames from "classnames";
import styles from "./CourseBegin.module.css";
import Image from "next/image";

export default function CourseBegin() {
    // logic


    return (
        <div className={styles.beginBox}>
            <div>
                <h1>Начните путь к новому телу</h1>
                <p>проработка всех групп мышц    </p>
                <p>тренировка суставов</p>
                <p>улучшение циркуляции крови</p>
                <p>упражнения заряжают бодростью</p>
                <p>помогают противостоять стрессам</p>
                <button>Войдите, чтобы добавить курс</button>
                <button>Добавить курс</button>
            </div>
            <Image
                width={250}
                height={150}
                className={styles.beginImg}
                src="/img/runner.png"
                alt="runner"
            />
        </div>
    )
}
