import { Button } from "../Button/Button";
import Input from "../Input/Input";
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
          <Input
            className="mb-2.5"
            name="password"
            type="password"
            placeholder="Новый пароль"
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="Повторите пароль"
          ></Input>
        </div>
        <div>
          <Button>Подтвердить</Button>
        </div>
      </form>
    </Modal>
  );
}
