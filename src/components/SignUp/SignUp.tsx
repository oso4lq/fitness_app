"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { signUpUser } from "@/store/features/userSlice";

export default function SignUp() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isUserExists, genericError, isAuthenticated } = useAppSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }

    dispatch(signUpUser({ email, password }));
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
            className={isUserExists ? "mb-2.5 border-error" : "mb-2.5"}
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            className="mb-2.5"
            name="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
        </div>
        {isUserExists && (
          <div className="text-error text-sm mb-8 text-center">
            Данная почта уже используется. Попробуйте войти.
          </div>
        )}
        {genericError && (
          <div className="text-error text-sm mb-8 text-center">
            Что-то пошло не так!
          </div>
        )}
        <div>
          <Button onClick={handleSignUp}>Зарегистрироваться</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {
              console.log("Navigate to Login Clicked"); // debug
              router.replace(Routes.Login);
            }}
          >
            Войти
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
