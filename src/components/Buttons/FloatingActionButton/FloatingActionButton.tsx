import React from 'react';
import FloatingActionButtonProps from './FloatingActionButton.interface';

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon,
  position = 'bottom-right',
}) => {
  return (
    <div
      className={`fob-container fixed ${
        position === 'top-left'
          ? 'top-4 left-4'
          : position === 'top-right'
          ? 'top-4 right-4'
          : position === 'bottom-left'
          ? 'bottom-4 left-4'
          : 'bottom-4 right-4'
      }`}
    >
      <button
        className="fob flex items-center justify-center w-12 h-12 p-2 bg-travvit-orange-800 rounded-full shadow-lg hover:bg-travvit-orange-700 focus:outline-none"
        onClick={onClick}
      >
        {icon}
      </button>
    </div>
  );
};

export default FloatingActionButton;
