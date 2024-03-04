import React from 'react';

/**
 * A small circle icon.
 */
const Circle: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 3 3"
      className={`w-2 h-2 my-2 mr-3 fill-current hidden sm:block ${className}`}
    >
      <circle cx="1" cy="1" r="1"></circle>
    </svg>
  );
};

export default Circle;
