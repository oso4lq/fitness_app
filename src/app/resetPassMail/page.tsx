"use client";

import ResetPassMail from "@/components/ResetPassMail/ResetPassMail";
import { useState } from "react";

export default function ResetPassMailPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>смена пароля email</button>
      <ResetPassMail isOpen={isOpen} />
    </>
  );
}
