"use client"

import SelectWorkout from "@/components/SelectWorkout/SelectWorkout";
import { useState } from "react";

export default function SelectWorkoutPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button onClick={() => setIsOpen(true)}>выбор трени</button>
      <SelectWorkout isOpen={isOpen}/>
    </>
  );
}