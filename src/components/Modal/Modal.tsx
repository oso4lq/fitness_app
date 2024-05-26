"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const handleCloseModal = () => {
    router.back();
  };

  const handleClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (modalRef.current) {
      const rect = modalRef.current?.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        handleCloseModal();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="modal w-[360px] rounded p-[40px] bg-white-base"
    >
      {children}
    </dialog>
  );
}

export default Modal;
