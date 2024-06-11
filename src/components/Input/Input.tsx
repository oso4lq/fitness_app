import cn from "classnames";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  // new
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  type,
  placeholder,
  className,
  // new
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}

        // no longer needed
        // data-tid="styles.input"

        // new
        value={value}
        onChange={onChange}

        className={cn(
          className || "",
          "w-full px-[18px] py-[12px] text-lg appearance-none border rounded-small border-gray-extra  bg-white-base text-black-base placeholder-gray-extra"
        )}
      />
    </>
  );
}
