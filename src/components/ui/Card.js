import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'p-6',
  shadow = 'shadow-lg',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl';
  const hoverClasses = hover ? 'card-hover' : '';
  const classes = `${baseClasses} ${shadow} ${padding} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
