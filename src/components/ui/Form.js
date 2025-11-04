import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { AlertCircle, Check } from "lucide-react";

const FormContext = createContext();

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a Form component");
  }
  return context;
};

const Form = ({
  children,
  onSubmit,
  initialValues = {},
  validation = {},
  className = "",
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedState] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const setTouched = (name) => {
    setTouchedState((prev) => ({ ...prev, [name]: true }));
  };

  const validateField = (name, value) => {
    const fieldValidation = validation[name];
    if (!fieldValidation) return "";

    if (typeof fieldValidation === "function") {
      return fieldValidation(value, values);
    }

    if (
      fieldValidation.required &&
      (!value || value.toString().trim() === "")
    ) {
      return fieldValidation.message || `${name} is required`;
    }

    if (fieldValidation.minLength && value.length < fieldValidation.minLength) {
      return (
        fieldValidation.message ||
        `${name} must be at least ${fieldValidation.minLength} characters`
      );
    }

    if (fieldValidation.pattern && !fieldValidation.pattern.test(value)) {
      return fieldValidation.message || `${name} format is invalid`;
    }

    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(validation).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }

    setIsSubmitting(false);
  };

  const contextValue = {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setTouched,
    validateField,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

const FormField = ({
  name,
  label,
  children,
  required = false,
  helpText,
  className = "",
}) => {
  const { errors, touched } = useForm();
  const hasError = touched[name] && errors[name];

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {React.cloneElement(children, { name, id: name })}
        {hasError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
        )}
      </div>

      {hasError && (
        <p className="text-sm text-red-600 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {errors[name]}
        </p>
      )}

      {helpText && !hasError && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

const FormInput = ({
  name,
  type = "text",
  placeholder,
  disabled = false,
  className = "",
  ...props
}) => {
  const { values, setValue, setTouched, validateField, errors, touched } =
    useForm();
  const hasError = touched[name] && errors[name];

  const handleChange = (e) => {
    setValue(name, e.target.value);
  };

  const handleBlur = () => {
    setTouched(name);
    validateField(name, values[name]);
  };

  return (
    <input
      type={type}
      name={name}
      value={values[name] || ""}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${hasError ? "border-red-300 focus:ring-red-500" : "border-gray-300"}
        ${className}
      `}
      {...props}
    />
  );
};

const FormTextarea = ({
  name,
  placeholder,
  rows = 3,
  disabled = false,
  className = "",
  ...props
}) => {
  const { values, setValue, setTouched, validateField, errors, touched } =
    useForm();
  const hasError = touched[name] && errors[name];

  const handleChange = (e) => {
    setValue(name, e.target.value);
  };

  const handleBlur = () => {
    setTouched(name);
    validateField(name, values[name]);
  };

  return (
    <textarea
      name={name}
      value={values[name] || ""}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`
        w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 resize-vertical
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${hasError ? "border-red-300 focus:ring-red-500" : "border-gray-300"}
        ${className}
      `}
      {...props}
    />
  );
};

const FormSelect = ({
  name,
  options = [],
  placeholder = "Select an option",
  disabled = false,
  className = "",
  ...props
}) => {
  const { values, setValue, setTouched, validateField, errors, touched } =
    useForm();
  const hasError = touched[name] && errors[name];

  const handleChange = (e) => {
    setValue(name, e.target.value);
  };

  const handleBlur = () => {
    setTouched(name);
    validateField(name, values[name]);
  };

  return (
    <select
      name={name}
      value={values[name] || ""}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
      className={`
        w-full px-3 py-2 border rounded-lg shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${hasError ? "border-red-300 focus:ring-red-500" : "border-gray-300"}
        ${className}
      `}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const FormCheckbox = ({ name, label, disabled = false, className = "" }) => {
  const { values, setValue } = useForm();

  const handleChange = (e) => {
    setValue(name, e.target.checked);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={values[name] || false}
        onChange={handleChange}
        disabled={disabled}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded disabled:cursor-not-allowed"
      />
      {label && (
        <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
};

// PropTypes
Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  validation: PropTypes.object,
  className: PropTypes.string,
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  helpText: PropTypes.string,
  className: PropTypes.string,
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

FormTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export { Form, FormField, FormInput, FormTextarea, FormSelect, FormCheckbox };
export default Form;
