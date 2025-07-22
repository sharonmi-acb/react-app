import React from 'react';

const Section = ({ 
  children, 
  className = '',
  background = 'bg-white',
  padding = 'py-20',
  ...props 
}) => {
  return (
    <section className={`${background} ${padding} ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

const SectionHeader = ({ 
  title, 
  subtitle, 
  badge,
  className = '',
  centered = true 
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <div className="mb-4">
          {badge}
        </div>
      )}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

Section.Header = SectionHeader;

export default Section;
