import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      icon,
      className = "",
      required = false,
      type = "text",
      ...props
    },
    ref
  ) => {
    const inputClasses = `
    w-full px-4 py-3 border rounded-lg transition-all duration-200
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${error ? "border-red-500 bg-red-50" : "border-gray-300"}
    ${icon ? "pl-12" : ""}
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
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={inputClasses}
            required={required}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
