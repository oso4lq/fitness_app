interface ButtonProps {
  width?: string;
  children: React.ReactNode;
}

export function Button({ width, children }: ButtonProps) {
  return (
    <button
      data-tid="styles.btn"
      style={{ width: width ? width : "100%" }}
      className="h-[52px] rounded-full border text-lg font-normal leading-tight"
    >
      {children}
    </button>
  );
}