"use client";

import Routes from "@/routes";
import { Button } from "../Button/Button";
import { useRouter } from "next/navigation";
import Input from "../Input/Input";

export default function MyProgress() {
  const router = useRouter();

  const onSaveClick = () => {
    router.replace(Routes.ApprovalResult);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl leading-8 text-left font-medium">
          Мой прогресс
        </h1>
      </div>
      <form>
        <div className="h-[346px] mb-9 overflow-y-auto scrollbar">
          <div className="mr-5">
            <div className="mb-5 space-y-2">
              <p className="text-sm leading-5 text-left">
                Сколько раз вы сделали наклоны вперед?
              </p>
              <div>
                <input
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                  name="times"
                  type="number"
                  placeholder="0"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Button onClick={onSaveClick}>Сохранить</Button>
        </div>
      </form>
    </>
  );
}
