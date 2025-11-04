import React from "react";
import PropTypes from "prop-types";
import { MoreHorizontal, ExternalLink, Trash2, Edit } from "lucide-react";
import Button from "./Button";

const Card = ({
  children,
  className = "",
  padding = "default",
  shadow = "default",
  border = true,
  hover = false,
  clickable = false,
  onClick,
  header,
  footer,
  actions = [],
  loading = false,
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-3",
    default: "p-4",
    lg: "p-6",
    xl: "p-8",
  };

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    default: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const baseClasses = `
    bg-white rounded-lg transition-all duration-200
    ${border ? "border border-gray-200" : ""}
    ${shadowClasses[shadow]}
    ${hover ? "hover:shadow-lg hover:-translate-y-1" : ""}
    ${clickable || onClick ? "cursor-pointer" : ""}
    ${loading ? "opacity-50 pointer-events-none" : ""}
    ${className}
  `;

  const CardContent = () => (
    <div className={baseClasses} onClick={onClick}>
      {header && (
        <div className="border-b border-gray-200 pb-4 mb-4">
          {typeof header === "string" ? (
            <h3 className="text-lg font-semibold text-gray-900">{header}</h3>
          ) : (
            header
          )}
        </div>
      )}

      <div className={paddingClasses[padding]}>{children}</div>

      {(footer || actions.length > 0) && (
        <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
          <div className="flex-1">{footer}</div>
          {actions.length > 0 && (
            <div className="flex items-center space-x-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "secondary"}
                  size="sm"
                  onClick={action.onClick}
                  disabled={action.disabled}
                >
                  {action.icon && <span className="mr-2">{action.icon}</span>}
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return <CardContent />;
};

const CardHeader = ({ title, subtitle, actions = [], className = "" }) => (
  <div className={`flex justify-between items-start ${className}`}>
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
    </div>
    {actions.length > 0 && (
      <div className="flex items-center space-x-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={action.onClick}
          >
            {action.icon || <MoreHorizontal className="w-4 h-4" />}
          </Button>
        ))}
      </div>
    )}
  </div>
);

const CardBody = ({ children, className = "" }) => (
  <div className={`py-4 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`pt-4 border-t border-gray-200 ${className}`}>{children}</div>
);

const StatsCard = ({
  title,
  value,
  change,
  icon,
  trend = "neutral",
  className = "",
}) => {
  const trendColors = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600",
  };

  const trendBg = {
    positive: "bg-green-100",
    negative: "bg-red-100",
    neutral: "bg-gray-100",
  };

  return (
    <Card className={className} padding="lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p
              className={`text-sm mt-1 flex items-center ${trendColors[trend]}`}
            >
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${trendBg[trend]}`}
          >
            {React.cloneElement(icon, {
              className: `w-6 h-6 ${trendColors[trend]}`,
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

const ProductCard = ({
  title,
  description,
  price,
  image,
  badge,
  onView,
  onEdit,
  onDelete,
  className = "",
}) => (
  <Card className={className} hover={true}>
    {image && (
      <div className="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
    )}

    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {badge && (
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
            {badge}
          </span>
        )}
      </div>

      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}

      {price && <p className="text-xl font-bold text-gray-900 mb-4">{price}</p>}

      <div className="flex space-x-2">
        {onView && (
          <Button variant="primary" size="sm" onClick={onView}>
            <ExternalLink className="w-4 h-4 mr-2" />
            View
          </Button>
        )}
        {onEdit && (
          <Button variant="secondary" size="sm" onClick={onEdit}>
            <Edit className="w-4 h-4" />
          </Button>
        )}
        {onDelete && (
          <Button variant="secondary" size="sm" onClick={onDelete}>
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  </Card>
);

// PropTypes
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.oneOf(["none", "sm", "default", "lg", "xl"]),
  shadow: PropTypes.oneOf(["none", "sm", "default", "lg", "xl"]),
  border: PropTypes.bool,
  hover: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.node,
      variant: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  loading: PropTypes.bool,
};

CardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.array,
  className: PropTypes.string,
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.string,
  icon: PropTypes.node,
  trend: PropTypes.oneOf(["positive", "negative", "neutral"]),
  className: PropTypes.string,
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  badge: PropTypes.string,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  className: PropTypes.string,
};

export { Card, CardHeader, CardBody, CardFooter, StatsCard, ProductCard };
export default Card;
