import Logo from "../Logo/Logo";

export default function ResetPassMail({ email}: {email: string | null}) {
  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo/>
      </div>
      <form>
        <h6 className="leading-tight text-center">
          Ссылка для востановления пароля отправлена на {email}
        </h6>
      </form>
    </>
  );
}
