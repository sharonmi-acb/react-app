import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({ 
  rating = 5, 
  maxRating = 5, 
  size = 'md',
  showValue = false,
  className = '',
  ...props 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return (
    <div className={`flex items-center space-x-1 ${className}`} {...props}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`${sizes[size]} ${
            index < rating 
              ? 'text-yellow-400 fill-current' 
              : 'text-gray-300'
          }`}
        />
      ))}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default Rating;
