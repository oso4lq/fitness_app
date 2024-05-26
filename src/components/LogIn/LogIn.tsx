"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";

export default function LogIn() {
  const router = useRouter();

  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <div className="mb-8">
          <Input
            className="mb-2.5"
            name="login"
            type="text"
            placeholder="Логин"
          ></Input>
          <Input name="password" type="password" placeholder="Пароль"></Input>
        </div>
        <div>
          <Button>Войти</Button>
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
