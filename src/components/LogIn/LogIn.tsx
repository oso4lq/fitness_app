"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logInUser } from "@/store/features/userSlice";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { useRouter } from "next/router";

export default function LogIn() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };

  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <Input
            className="mb-2.5"
            name="login"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <Button disabled={loading}>Войти</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {
              router.push(Routes.SignUp);
            }}
          >
            Зарегистрироваться
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
