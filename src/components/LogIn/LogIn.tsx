"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logInUser } from "@/store/features/userSlice";
import Link from "next/link";

export default function LogIn() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isCredentialsInvalid, genericError, isAuthenticated } =
    useAppSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    if (isAuthenticated) {
      router.back();
    }
  };

  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <div className="mb-8">
          <Input
            className="mb-2.5"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            className={isCredentialsInvalid ? "border-error" : ""}
            name="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        {isCredentialsInvalid && (
          <div className="text-error text-sm mb-8 text-center">
            Пароль введен неверно, попробуйте еще раз.&nbsp;
            <Link
              href={"/reset-pass-mail/?email=" + email}
              className="underline decoration-error"
            >
              Восстановить пароль?
            </Link>
          </div>
        )}
        {genericError && (
          <div className="text-error text-sm mb-8 text-center">
            Что-то пошло не так!
          </div>
        )}
        <div>
          <Button onClick={handleLogIn}>Войти</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {
              console.log("Navigate to SignUp Clicked"); // debug

              router.replace(Routes.SignUp);
            }}
          >
            Зарегистрироваться
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
