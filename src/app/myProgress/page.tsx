"use client";

import MyProgress from "@/components/MyProgress/MyProgress";
import { useState } from "react";

export default function MyProgressPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>мой прогресс</button>
      <MyProgress isOpen={isOpen} />
    </>
  );
}
