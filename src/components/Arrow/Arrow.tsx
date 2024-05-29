import Image from "next/image";

export default function Arrow() {
  return (
    <div>
      <Image
        className="w-2 h-4"
        src="/img/icon/arrow.svg"
        alt="arrow"
        width={8}
        height={16}
      />
    </div>
  );
}
