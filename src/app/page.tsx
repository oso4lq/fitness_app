import CourseCardList from "@/components/CourseCardList/CourseCardList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="DEVBLOCK">
        <p>блок на время разработки с кнопками на страницы</p>
        <Link href={"/course/"}>Course Page q02a6i</Link>
        <Link href={"/profile/"}>Profile Page</Link>
        <Link href={"/workout/"}>Workout Page 9yolz2</Link>
      </div>
      <CourseCardList/>
    </>
  );
}
