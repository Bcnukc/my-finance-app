import React, { ButtonHTMLAttributes } from "react";
import { variants, sizes, VariantType, SizeType } from "../lib/Variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  size?: SizeType;
}

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
