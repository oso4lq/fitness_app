"use client";

import SignIn from "@/components/SignIn/SignIn";
import { useState } from "react";

export default function SignInPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>зарегайтесь</button>
      <SignIn isOpen={isOpen} />
    </>
  );
}
