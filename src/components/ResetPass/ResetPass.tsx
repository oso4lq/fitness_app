"use client"

import { Button } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";

export default function ResetPass() {
  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <div className="mb-8">
          <Input
            className="mb-2.5"
            name="password"
            type="password"
            placeholder="Новый пароль"
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="Повторите пароль"
          ></Input>
        </div>
        <div>
          <Button>Подтвердить</Button>
        </div>
      </form>
    </>
  );
}
