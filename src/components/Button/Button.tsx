interface ButtonProps {
  width?: string;
  children: React.ReactNode;
}

export function Button({ width, children }: ButtonProps) {
  return (
    <button
      data-tid="styles.btn"
      style={{ width: width ? width : "100%" }}
      className="h-[52px] rounded-[46px] text-lg font-normal leading-tight bg-green-dark hover:bg-green-light active:bg-black-base active:text-white-base disabled:bg-gray-light disabled:text-gray-dark transition-colors duration-300"
    >
      {children}
    </button>
  );
}

export function ButtonAdditional({ width, children }: ButtonProps) {
  return (
    <button
      data-tid="styles.btn"
      style={{ width: width ? width : "100%" }}
      className="h-[52px] rounded-[46px] text-lg font-normal leading-tight border bg-white-base hover:bg-gray-light active:bg-gray-dark disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark transition-colors duration-300"
    >
      {children}
    </button>
  );
}
