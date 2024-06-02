//src/components/LogIn/LogIn.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";

export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("LogIn Form Submitted"); // debug

    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push(Routes.Profile);
    } catch (err) {
      setError((err as Error).message);

      console.error("Error during log in:", err); // debug

    }
  };

  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form onSubmit={handleLogIn}>
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
            name="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <Button onClick={handleLogIn}>Войти</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {

              console.log("Navigate to SignUp Clicked"); // debug

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
