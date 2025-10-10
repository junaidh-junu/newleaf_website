import React from 'react';

const LoadingSpinner = ({ 
  size = 'medium', 
  variant = 'spinner', 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const dotSizes = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  if (variant === 'dots') {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <div className="loading-dots">
          <div className={dotSizes[size]}></div>
          <div className={dotSizes[size]}></div>
          <div className={dotSizes[size]}></div>
        </div>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <div className={`loading-pulse ${sizeClasses[size]}`}></div>
      </div>
    );
  }

  // Default spinner variant
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className={`loading-spinner ${sizeClasses[size]}`}></div>
    </div>
  );
};

// Modern minimalist loading component with multiple variants
const ModernLoader = ({ 
  text = 'Loading...', 
  size = 'medium',
  variant = 'spinner',
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <LoadingSpinner size={size} variant={variant} />
      {text && (
        <p className="text-sm text-neutral-500 font-medium tracking-wide animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
export { ModernLoader };
