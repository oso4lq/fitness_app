import Logo from "../Logo/Logo";

export default function ResetPass() {
  return (
    <div className="h-[363px] w-[360px] rounded p-[40px] bg-white-base">
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <div className="mb-8">
          <div className="mb-2.5">
            <input
              type="password"
              placeholder="Новый пароль"
              className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Повторите пароль"
              className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="h-[52px] bg-green-dark text-black-base hover:bg-green-light w-full text-center rounded-large"
          >
            Подтвердить
          </button>
        </div>
      </form>
    </div>
  );
}
