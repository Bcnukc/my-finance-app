import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: React.FC<LabelProps> = ({ className, children, ...rest }) => {
  return (
    <label
      {...rest}
      className={`text-gray-700 dark:text-gray-300 ${className || ""}`}
    >
      {children}
    </label>
  );
};

export default Label;
