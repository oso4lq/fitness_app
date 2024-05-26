import user from "../../../public/img/icon/photo_user.svg";
import Image from "next/image";
import { Button, ButtonAdditional } from "../Button/Button";

export default function UserProfile() {
  return (
    <>
      <h2
        data-tid="titleProfile"
        className="mt-50 text-[40px] font-semibold leading-[44px]"
      >
        Профиль
      </h2>
      <div
        data-tid="profileUserInfoBlock"
        className="bg-white-base mt-10 h-[257px] p-[30px] rounded-[30px] shadow-blocks"
      >
        <div data-tid="contentBlock" className="flex gap-[30px] flex-wrap">
          <Image height={197} width={197} alt="photo_user" src={user} />
          <div data-tid="userData" className="flex flex-col gap-[30px]">
            <h3 className="text-[32px] font-medium leading-[35px]">Сергей</h3>
            <div className="">
              <p className="mb-[10px] text-[18px] font-normal leading-[19px]">
                Логин: sergey.petrov96
              </p>
              <p className="text-[18px] font-normal leading-[19px]">
                Пароль: 4fkhdj880d
              </p>
            </div>
            <div className="w-[394px] flex flex-wrap gap-[10px]">
              <Button width="192px">Изменить пароль</Button>
              <ButtonAdditional width="192px">Выйти</ButtonAdditional>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
