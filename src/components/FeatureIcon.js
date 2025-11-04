import React from "react";

const FeatureIcon = ({
  icon,
  title,
  description,
  className = "",
  iconColor = "text-blue-500",
  ...props
}) => {
  return (
    <div className={`text-center ${className}`} {...props}>
      <div className={`flex justify-center mb-4 ${iconColor}`}>{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureIcon;
