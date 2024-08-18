import React, { forwardRef } from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <select
      {...rest}
      ref={ref}
      className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";

export default Select;
