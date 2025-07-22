import React from 'react';

const Avatar = ({ 
  src, 
  alt = 'Avatar', 
  size = 'md', 
  className = '',
  fallback,
  ...props 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };
  
  const classes = `${sizes[size]} rounded-full object-cover ${className}`;
  
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={classes}
        {...props}
      />
    );
  }
  
  // Fallback to initials or default
  return (
    <div className={`${classes} bg-gray-300 flex items-center justify-center text-gray-600 font-semibold`}>
      {fallback || alt.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
