"use client";

import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { useState } from "react";

export default function ResetPass() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onProfileClick = () => {
    router.push(Routes.Profile);
    setIsOpen(false);
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
          <Button onClick={onProfileClick}>Подтвердить</Button>
        </div>
      </form>
    </>
  );
}
