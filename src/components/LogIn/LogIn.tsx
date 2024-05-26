import { Button, ButtonAdditional } from "../Button/Button";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";

export default function LogIn() {
  return (
    <>
      <div className="mb-12 flex justify-center items-center">
        <Logo></Logo>
      </div>
      <form>
        <div className="mb-8">
          <Input
            className="mb-2.5"
            name="login"
            type="text"
            placeholder="Логин"
          ></Input>
          <Input name="password" type="password" placeholder="Пароль"></Input>
        </div>
        <div>
          <Button>Войти</Button>
          <ButtonAdditional className="mt-3">
            Зарегистрироваться
          </ButtonAdditional>
        </div>
      </form>
    </>
  );
}
