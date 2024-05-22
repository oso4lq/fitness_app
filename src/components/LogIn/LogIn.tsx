import Logo from "../Logo/Logo";

export default function LogIn() {
  return (
    <div className="h-[425px] w-[360px] rounded p-[40px] bg-white-base">
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <div className="mb-8">
          <div className="mb-2.5">
            <input
              type="text"
              placeholder="Логин"
              className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Пароль"
              className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="h-[52px] bg-green-dark text-black-base hover:bg-green-light w-full text-center rounded-large"
          >
            Войти
          </button>

          <button
            type="button"
            className="h-[52px] mt-3 bg-white-base text-black-base hover:bg-gray-light w-full text-center border border-black-base rounded-large"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
