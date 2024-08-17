import React from "react";

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  const { className, children, ...rest } = props;

  return (
    <select
      {...rest}
      className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
    >
      {children}
    </select>
  );
};
export default Select;
