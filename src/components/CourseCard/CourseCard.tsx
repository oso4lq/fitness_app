import Image from "next/image";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import theme_yoga from "../../../public/img/theme_yoga.png";

export default function CourseCard() {
  return (
    <div className="w-[360px] rounded-[30px] shadow-blocks">
      <div className="rounded-[30px] overflow-hidden">
        <Image src={theme_yoga} alt="theme_yoga" height={325} width={360} />
      </div>
      <ProgressBar completionPercentage={4} />
    </div>
  );
}
