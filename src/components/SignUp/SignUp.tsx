"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { useAppDispatch } from "@/hooks";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSignup = () => {
    // dispatch(SignUp());
    // router.back();
  };

  const onLoginClick = () => {
    router.replace(Routes.Login);
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
          <Input
            className="mb-2.5"
            name="password"
            type="password"
            placeholder="Пароль"
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="Повторите пароль"
          ></Input>
        </div>
        <div>
          <Button onClick={handleSignup}>Зарегистрироваться</Button>
          <ButtonAdditional className="mt-3" onClick={onLoginClick}>
            Войти
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
