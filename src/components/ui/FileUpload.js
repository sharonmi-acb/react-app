import React from "react";

const FileUpload = ({
  label,
  error,
  helperText,
  accept,
  multiple = false,
  className = "",
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.files);
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className={`
            block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default FileUpload;
