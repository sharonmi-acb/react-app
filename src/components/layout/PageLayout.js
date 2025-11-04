import React from "react";
import PropTypes from "prop-types";

const PageLayout = ({
  children,
  title,
  description,
  breadcrumb,
  className = "",
  containerSize = "default",
  backgroundColor = "default",
}) => {
  const containerSizes = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-8xl",
    full: "max-w-full",
  };

  const backgrounds = {
    default: "bg-gray-50",
    white: "bg-white",
    dark: "bg-gray-900",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
  };

  return (
    <div
      className={`min-h-screen ${backgrounds[backgroundColor]} ${className}`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 ${containerSizes[containerSize]}`}
      >
        {breadcrumb && (
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-gray-900">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {(title || description) && (
          <div className="mb-8 lg:mb-12">
            {title && (
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  containerSize: PropTypes.oneOf(["sm", "default", "lg", "full"]),
  backgroundColor: PropTypes.oneOf(["default", "white", "dark", "gradient"]),
};

export default PageLayout;
