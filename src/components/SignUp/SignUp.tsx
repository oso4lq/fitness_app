"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("SignUp Form Submitted"); // debug

    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push(Routes.Profile);
    } catch (err) {
      setError((err as Error).message);

      console.error("Error during sign up:", err); // debug

    }
  };

  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form onSubmit={handleSignUp}>
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
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <Button onClick={handleSignUp}>Зарегистрироваться</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {
              
              console.log("Navigate to Login Clicked"); // debug

              router.push(Routes.Login);
            }}
          >
            Войти
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
