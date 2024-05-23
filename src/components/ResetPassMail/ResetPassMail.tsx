import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";

export default function ResetPassMail({ isOpen }: { isOpen: boolean }) {
  return (
    <Modal isOpen={isOpen}>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <h6 className="leading-tight text-center">
          Ссылка для востановления пароля отправлена на sergey.petrov96@mail.ru
        </h6>
      </form>
    </Modal>
  );
}
