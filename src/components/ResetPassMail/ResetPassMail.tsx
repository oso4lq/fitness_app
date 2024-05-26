"use client";

// import Link from "next/link";
import Logo from "../Logo/Logo";

export default function ResetPassMail() {
  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <h6 className="leading-tight text-center">
          Ссылка для востановления пароля отправлена на sergey.petrov96@mail.ru
        </h6>
        {/* <Link to={?????????}>sergey.petrov96@mail.ru</Link> */}
      </form>
    </>
  );
}
