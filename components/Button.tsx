import React, { ButtonHTMLAttributes } from "react";

type VariantType = "default" | "outline" | "ghost";
type SizeType = "base" | "xs" | "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  size?: SizeType;
}
const variants: Record<VariantType, string> = {
  default:
    "bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-200",
  outline:
    "border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500",
  ghost:
    "rounded-md bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500",
};

const sizes: Record<SizeType, string> = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  base: "text-base px-4 py-2",
  lg: "text-lg px-4 py-2",
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "base",
  className = "",
  ...props
}) => {
  const variantClass = variants[variant];
  const sizeClass = sizes[size];

  return (
    <button
      {...props}
      className={`${variantClass} ${sizeClass} ${className}.trim()`}
    ></button>
  );
};

export default Button;
