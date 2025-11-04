import React, { forwardRef } from "react";

const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      options = [],
      placeholder = "Select an option",
      className = "",
      required = false,
      ...props
    },
    ref
  ) => {
    const selectClasses = `
    w-full px-4 py-3 border rounded-lg transition-all duration-200
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${error ? "border-red-500 bg-red-50" : "border-gray-300"}
    ${className}
  `;

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={selectClasses}
          required={required}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
