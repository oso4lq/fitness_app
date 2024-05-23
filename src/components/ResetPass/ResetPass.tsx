import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";

export default function ResetPass({ isOpen }: { isOpen: boolean }) {
  return (
    <Modal isOpen={isOpen}>
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
    </Modal>
  );
}
