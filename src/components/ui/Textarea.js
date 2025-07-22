import React, { forwardRef } from 'react';

const Textarea = forwardRef(({ 
  label, 
  error, 
  helperText,
  className = '',
  required = false,
  rows = 4,
  ...props 
}, ref) => {
  const textareaClasses = `
    w-full px-4 py-3 border rounded-lg transition-all duration-200
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    resize-vertical
    ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}
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
      <textarea
        ref={ref}
        rows={rows}
        className={textareaClasses}
        required={required}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
