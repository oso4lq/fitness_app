"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { auth, signInWithEmailAndPassword } from "@/lib/firebaseConfig";

export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push(Routes.Profile);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <Button>Log In</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {
              router.push(Routes.SignUp);
            }}
          >
            Sign Up
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
