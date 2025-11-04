import React from "react";

const Checkbox = ({ label, error, className = "", id, ...props }) => {
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="ml-2 text-sm text-gray-700 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Checkbox;
