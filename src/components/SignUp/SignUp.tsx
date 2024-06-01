"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import Routes from "@/routes";
import { auth, createUserWithEmailAndPassword } from "@/lib/firebaseConfig";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <Button>Sign Up</Button>
          <ButtonAdditional
            className="mt-3"
            onClick={() => {
              router.push(Routes.Login);
            }}
          >
            Log In
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
