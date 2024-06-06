import Check from "../Check/Check";

export default function SelectWorkoutItem() {
  return (
    <>
    <div className="py-3 flex items-center first:pt-0 last:pb-0">
      <div className="flex rounded mr-2">
        <Check isChecked={true} />
      </div>
      <div className="text-base">
        <label htmlFor="helper-checkbox-1" className="font-medium">
          <div>Утренняя практика</div>
          <p id="helper-checkbox-text-1" className="text-sm font-normal">
            Йога на каждый день / 1 день
          </p>
        </label>
      </div>
    </div>

<div className="py-3 flex items-center first:pt-0 last:pb-0">
<div className="flex rounded mr-2">
  <Check isChecked={false} />
</div>
<div className="text-base">
  <label htmlFor="helper-checkbox-1" className="font-medium">
    <div>Утренняя практика</div>
    <p id="helper-checkbox-text-1" className="text-sm font-normal">
      Йога на каждый день / 1 день
    </p>
  </label>
</div>
</div>
</>
  );
}
