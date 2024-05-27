import classNames from "classnames";
import styles from "./CourseBegin.module.css";
import Image from "next/image";
import { Button } from "../Button/Button";

export default function CourseBegin() {
    // logic


    return (
        <div className={styles.beginBox}>
            <div className="w-[437px]">
                <h1 className="mb-[28px] text-black-base text-[60px] font-medium leading-[60px]">Начните путь к новому телу</h1>
                <ul data-tid="description-list" className="mb-[28px] list-inside space-y-3">
                    <li className="list-item-grey">проработка всех групп мышц</li>
                    <li className="list-item-grey">тренировка суставов</li>
                    <li className="list-item-grey">улучшение циркуляции крови</li>
                    <li className="list-item-grey">упражнения заряжают бодростью</li>
                    <li className="list-item-grey">помогают противостоять стрессам</li>
                </ul>

                {/* <button>Добавить курс</button> // заменить на условное применение текста в кнопке по авторизации*/}
                <Button>Войдите, чтобы добавить курс</Button>

            </div>
            <Image
                width={250}
                height={150}
                className={styles.beginImg}
                src="/img/runner.png"
                alt="runner"
            />
        </div>

        // <style>
        //     .list-item {
        //     }
        // </style>
    )
}
