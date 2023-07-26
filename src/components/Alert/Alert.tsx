import React, { ReactNode, useState, useEffect } from 'react';

/**
 * A generic alert component that displays an alert.
 * @returns a JSX component that displays an alert
 */
const Alert: React.FC<{
  icon?: ReactNode;
  bgColor?: string;
  heading: string;
  headingColor?: string;
  message: ReactNode;
  messageColor?: string;
  hidden?: boolean;
  onClose?: () => void;
}> = ({
  bgColor = 'bg-red-50',
  icon,
  heading,
  headingColor = 'text-red-700',
  message,
  messageColor = 'text-red-700',
  hidden = true,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('useEffect', hidden);
    if (hidden) return;
    // Use a timeout to wait for the component to be rendered
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [hidden]);

  const handleClose = () => {
    setIsVisible(false);
    onClose && onClose();
  };

  return (
    <div
      className={`max-w-[85vw] w-full mx-auto ${
        isVisible ? 'fade-in' : 'fade-out'
      }
      ${hidden ? 'hidden' : 'block'}`}
    >
      <div className={`p-4 rounded-md ${bgColor}`}>
        <div className="flex">
          <div className="shrink-0">{icon}</div>
          <div className="ml-3">
            <h3
              className={`font-medium text-sm leading-5 normal-case ${headingColor}`}
            >
              {heading}
            </h3>
            <div className={`text-sm leading-5 mt-2 ${messageColor}`}>
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
