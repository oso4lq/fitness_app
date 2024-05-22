export default function MyProgress() {
  return (
    <div className="h-[596px] w-[426px] rounded p-[40px] bg-white-base">
      <div className="h-[35px] mb-12">
        <h2 className="text-3xl leading-8 text-left font-medium">
          Мой прогресс
        </h2>
      </div>
      <form>
        <div className="h-[346px] w-[346px] mb-9 overflow-y-auto scrollbar">
          <div className="mr-5">
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали наклоны вперед?
              </h6>
              <div>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали наклоны назад?
              </h6>
              <div className="">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали поднятие ног, согнутых в коленях?
              </h6>
              <div className="">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали наклоны вперед?
              </h6>
              <div>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали наклоны назад?
              </h6>
              <div className="">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали поднятие ног, согнутых в коленях?
              </h6>
              <div className="">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали наклоны вперед?
              </h6>
              <div>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="mb-5 space-y-2">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали наклоны назад?
              </h6>
              <div className="">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
            <div className="">
              <h6 className="text-lg leading-5 text-left">
                Сколько раз вы сделали поднятие ног, согнутых в коленях?
              </h6>
              <div className="">
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            className="h-[52px] bg-green-dark text-black-base hover:bg-green-light w-full text-center rounded-large"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}
