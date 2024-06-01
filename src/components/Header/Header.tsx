// src/components/Header/Header.tsx

"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./Header.module.css";
import Link from "next/link";
import Logo from "../Logo/Logo";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { logOutUser } from "@/store/features/userSlice";
import { useRouter } from "next/navigation";

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logOutUser());
    router.push("/");
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <p className="opacity-60">Онлайн-тренировки для занятий дома</p>
      </div>

      <div className={styles.funcs}>
        {!isAuthenticated ? (
          <button
            className={styles.funcs__btn}
            onClick={() => router.push("/login")}
          >
            Войти
          </button>
        ) : (
          <div className={styles.funcs__user}>
            <Image
              className="w-12 h-12"
              src="/img/icon/user.svg"
              alt="user_img"
              width={48}
              height={48}
            />
            <p>{user?.email}</p>
            <Image
              className="w-3 h-2"
              src="/img/icon/button_user.svg"
              alt="button_user_img"
              width={12}
              height={8}
              onClick={() => setDropdownVisible(!dropdownVisible)}
              style={{ cursor: "pointer" }}
            />
            {dropdownVisible && (
              <div className={styles.dropdown}>
                <p>{user?.email}</p>
                <button onClick={handleLogout}>Выйти</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
