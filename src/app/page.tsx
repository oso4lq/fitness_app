// "use client"

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="DEVBLOCK">
        <p>блок на время разработки с кнопками на страницы</p>
        <Link href={"/course/"}>Course Page</Link>
        <Link href={"/profile/"}>Profile Page</Link>
        <Link href={"/workout/"}>Workout Page</Link>
        <Link href={"/logIn/"}>Log in</Link>
        <Link href={"/signIn/"}>Sign in</Link>
        <Link href={"/resetPassMail/"}>Reset mail</Link>
        <Link href={"/resetPass/"}>Reset password</Link>
        <Link href={"/selectWorkout/"}>Select workout</Link>
        <Link href={"/myProgress/"}>My Progress</Link>
        <Link href={"/approvalResult/"}>Approval result</Link>
      </div>
    </>
  );
}
