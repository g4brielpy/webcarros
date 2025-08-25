import React from "react";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function InputCustom({ label, error, ...props }: InputCustomProps) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`h-11 px-4 rounded-md border text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
}
