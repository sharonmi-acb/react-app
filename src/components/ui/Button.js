import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  onClick,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl focus:ring-blue-500",
    secondary:
      "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 focus:ring-blue-500",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-white",
    ghost:
      "text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${
    sizes[size]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
