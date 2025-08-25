import React from "react";

interface ButtonCustomProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function ButtonCustom({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonCustomProps) {
  const baseClasses =
    "h-11 px-6 rounded-md font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2";

  const variants = {
    primary: `bg-[#E11138] text-white shadow-sm 
              hover:bg-[#c70f30] active:bg-[#a50c28] 
              focus:ring-[#E11138]`,
    secondary: `bg-gray-200 text-gray-800 shadow-sm 
                hover:bg-gray-300 active:bg-gray-400 
                focus:ring-gray-400`,
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
