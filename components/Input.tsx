import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const styles = {
    checkbox:
      "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-500 shadow-sm",
    default:
      "w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
  };

  const { className, type = "text", ...rest } = props;
  const styleClass = type === "checkbox" ? styles.checkbox : styles.default;

  return (
    <input
      {...rest}
      ref={ref}
      type={type}
      className={`${styleClass} ${className || ""}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
