"use client";

import ResetPass from "@/components/ResetPass/ResetPass";
import { useState } from "react";

export default function ResetPassPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>поменяй пароль</button>
      <ResetPass isOpen={isOpen} />
    </>
  );
}
