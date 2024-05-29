"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { useAppDispatch } from "@/hooks";
import { logIn } from "@/store/features/userSlice";

export default function LogIn() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(logIn());
    router.back();
  };

  const onSignupClick = () => {
    router.replace(Routes.SignUp);
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
            name="login"
            type="text"
            placeholder="Логин"
          ></Input>
          <Input name="password" type="password" placeholder="Пароль"></Input>
        </div>
        <div>
          <Button onClick={handleLogin}>Войти</Button>
          <ButtonAdditional className="mt-3" onClick={onSignupClick}>
            Зарегистрироваться
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
