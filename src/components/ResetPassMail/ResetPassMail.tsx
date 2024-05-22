import Logo from "../Logo/Logo";

export default function ResetPassMail() {
  return (
    <div className="h-[223px] w-[360px] rounded p-[40px] bg-white-base">
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <h6 className="leading-tight text-center">
          Ссылка для востановления пароля отправлена на sergey.petrov96@mail.ru
        </h6>
      </form>
    </div>
  );
}
