import Image from "next/image";

export default function ApprovalResult() {
  return (
    <div className="h-[278px] w-[426px] rounded p-[40px] bg-white-base">
      <div className="h-[96px] mb-[34px] flex justify-center items-center">
        <h6 className="text-5xl text-center font-medium">Ваш прогресс засчитан!</h6>
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
    </div>
  );
}
