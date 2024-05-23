"use client";

import ApprovalResult from "@/components/ApprovalResult/ApprovalResult";
import { useState } from "react";

export default function ApprovalResultPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>прогресс засчитан</button>
      <ApprovalResult isOpen={isOpen} />
    </>
  );
}
