"use client";

import LogIn from "@/components/LogIn/LogIn";
import { useState } from "react";

export default function LogInPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>залогинься</button>
      <LogIn isOpen={isOpen} />
    </>
  );
}
