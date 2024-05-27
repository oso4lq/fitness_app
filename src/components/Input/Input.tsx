import cn from "classnames";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}
export default function Input({
  name,
  type,
  placeholder,
  className,
}: InputProps) {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        data-tid="styles.input"
        className={cn(
          className || "",
          "w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
        )}
      />
    </>
  );
}
