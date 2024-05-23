import Image from "next/image";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import theme_yoga from "../../../public/img/theme_yoga.png";
import order_5 from "../../../public/img/icon/order_5.svg";

export default function CourseCard() {
  return (
    <div className="w-[360px] rounded-[30px] shadow-blocks">
      <div className="rounded-[30px] overflow-hidden">
        <Image src={theme_yoga} alt="theme_yoga" height={325} width={360} />
      </div>
      <Image src={order_5} alt="order_5" height={18} width={18}/>
      <ProgressBar completionPercentage={4} />
    </div>
  );
}
