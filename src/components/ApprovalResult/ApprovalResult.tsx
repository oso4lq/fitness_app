import Image from "next/image";
import Modal from "../Modal/Modal";

export default function ApprovalResult({isOpen}:{isOpen: boolean}) {
  return (
    <Modal isOpen={isOpen}>
      <div className="h-[96px] mb-[34px] flex justify-center items-center">
        <h1 className="text-4xl text-center font-medium">Ваш прогресс засчитан!</h1>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="w-[57px] h-[57px]"
          src="/img/icon/approved.svg"
          alt="approved"
          width={57}
          height={57}
        />
      </div>
    </Modal>
  );
}
