import classNames from "classnames";
import styles from "./Header.module.css";
import Link from "next/link";
import Logo from "../Logo/Logo";
import Image from "next/image";

export default function Header() {
  // logic

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <div>
          <Logo></Logo>
          <Link href={"/"}></Link>
        </div>
        <p className="opacity-60">Онлайн-тренировки для занятий дома</p>
      </div>

      <div className={styles.funcs}>
        <button className={styles.funcs__btn}>Войти</button>
        <div className={styles.funcs__user}>
          <Image
            className="w-12 h-12"
            src="/img/icon/user.svg"
            alt="user_img"
            width={48}
            height={48}
          />
          <p>Osetr</p>
          <Image
            className="w-3 h-2"
            src="/img/icon/button_user.svg"
            alt="button_user_img"
            width={12}
            height={8}
          />
        </div>
      </div>
    </div>
  );
}
