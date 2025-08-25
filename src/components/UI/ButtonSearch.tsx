import React, { ReactNode } from "react";

interface ButtonSearchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonSearch({
  children,
  className,
  ...rest
}: ButtonSearchProps) {
  return (
    <button
      {...rest}
      className={`w-60 h-10 text-white bg-red-700 text-xl font-bold rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
