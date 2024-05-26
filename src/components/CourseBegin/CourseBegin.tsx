import classNames from "classnames";
import styles from "./CourseBegin.module.css";
import Image from "next/image";
import { Button } from "../Button/Button";

export default function CourseBegin() {
    // logic


    return (
        <div className={styles.beginBox}>
            <div className="w-[437px]">
                <h1>Начните путь к новому телу</h1>
                <p>проработка всех групп мышц    </p>
                <p>тренировка суставов</p>
                <p>улучшение циркуляции крови</p>
                <p>упражнения заряжают бодростью</p>
                <p>помогают противостоять стрессам</p>
                <Button>Войдите, чтобы добавить курс</Button>
                {/* <button>Добавить курс</button> // заменить на условное применение текста в кнопке по авторизации*/}
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
