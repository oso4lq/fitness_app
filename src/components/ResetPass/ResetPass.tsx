"use client";

import { changePassword } from "@/store/features/userSlice";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import { useAppDispatch } from "@/hooks";
import { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPass({
  verificationCode,
}: {
  verificationCode?: string;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handlePasswordChange = () => {
    if (password !== repeatPassword) {
      alert("Passwords not match!");
      return;
    }
    if (verificationCode) {
      console.log("Reset password scenario");
    } else {
      dispatch(changePassword({ oldPassword, password }));
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
          {!verificationCode && (
            <Input
              className="mb-2.5"
              name="oldPassword"
              type="oldPassword"
              placeholder="Старый пароль"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            ></Input>
          )}
          <Input
            className="mb-2.5"
            name="password"
            type="password"
            placeholder="Новый пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></Input>
        </div>
        <div>
          <Button onClick={handlePasswordChange}>Подтвердить</Button>
        </div>
      </form>
    </>
  );
}
