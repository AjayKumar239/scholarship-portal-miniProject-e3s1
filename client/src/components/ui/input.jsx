import * as React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`
        flex h-10 w-full rounded-md border border-gray-200
        bg-white px-3 py-2 text-sm
        file:border-0 file:bg-transparent file:text-sm file:font-medium
        placeholder:text-gray-500
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;