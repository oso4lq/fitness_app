"use client";

import Modal from "@/components/Modal/Modal";
import ResetPassMail from "@/components/ResetPassMail/ResetPassMail";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <Modal>
      <ResetPassMail email={email} />
    </Modal>
  );
}
