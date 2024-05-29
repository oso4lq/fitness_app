"use client";

import cn from "classnames";

interface ButtonProps {
  width?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

function handleClick(
  ev: React.MouseEvent<HTMLButtonElement>,
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
): void {
  ev.preventDefault();
  ev.stopPropagation();
  if (onClick) {
    onClick(ev);
  }
}

export function Button({ width, children, className, onClick }: ButtonProps) {
  return (
    <button
      data-tid="styles.btn"
      onClick={(ev) => handleClick(ev, onClick)}
      style={{ width: width ? width : "100%" }}
      className={cn(
        className || "",
        "h-[52px] rounded-large text-base font-normal leading-tight bg-green-dark hover:bg-green-light active:bg-black-base active:text-white-base disabled:bg-gray-light disabled:text-gray-dark transition-colors duration-300"
      )}
    >
      {children}
    </button>
  );
}

export function ButtonAdditional({
  width,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      data-tid="styles.btn"
      onClick={(ev) => handleClick(ev, onClick)}
      style={{ width: width ? width : "100%" }}
      className={cn(
        className || "",
        "h-[52px] rounded-large text-base font-normal leading-tight border bg-white-base hover:bg-gray-light active:bg-gray-dark disabled:bg-gray-light disabled:text-gray-dark disabled:border-gray-dark transition-colors duration-300"
      )}
    >
      {children}
    </button>
  );
}
