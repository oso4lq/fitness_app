import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="w-55 h-8,5"
        src="/img/icon/logo_main.svg"
        alt="logo_img"
        width={220}
        height={34}
      />
    </div>
  );
}
