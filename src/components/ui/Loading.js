import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 'md', color = 'blue', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    gray: 'text-gray-600',
    white: 'text-white'
  };

  return (
    <div className={`animate-spin ${sizes[size]} ${colors[color]} ${className}`}>
      <svg fill="none" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className="opacity-25"
        />
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          className="opacity-75"
        />
      </svg>
    </div>
  );
};

const LoadingButton = ({ children, loading, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`relative ${props.className || ''}`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : ''}>
        {children}
      </span>
    </button>
  );
};

const LoadingCard = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-gray-200 rounded-lg p-6 space-y-4">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);

const LoadingPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <LoadingSpinner size="xl" />
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['blue', 'purple', 'gray', 'white']),
  className: PropTypes.string
};

LoadingButton.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

LoadingCard.propTypes = {
  className: PropTypes.string
};

export { LoadingSpinner, LoadingButton, LoadingCard, LoadingPage };
export default LoadingSpinner;
