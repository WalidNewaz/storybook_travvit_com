import React, { useState, useEffect, ReactNode } from 'react';

/**
 * This is a notification component that displays a notification.
 * @returns A JSX component that displays a notification
 */
const Notification: React.FC<{
  icon: ReactNode;
  heading: string;
  message: ReactNode;
  hidden?: boolean;
  onClose?: () => void;
  className?: string;
}> = ({ icon, heading, message, hidden, onClose, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // console.log('useEffect', hidden);
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
      className={`notification z-20 flex flex-col w-full items-center md:items-end ${
        isVisible ? 'fade-in' : 'fade-out'
      }
        ${hidden ? 'hidden' : 'block'}
        ${className}
      `}
    >
      <div className="ring-gray-100 drop-shadow-xl bg-white rounded-lg overflow-hidden max-w-sm w-full pointer-events-auto">
        <div className="p-4">
          <div className="flex items-start">
            <div className="shrink-0">{icon}</div>
            <div className="pt-0.5 flex-1 w-0 ml-3">
              <p className="text-slate-800 font-medium text-sm leading-5">
                {heading}
              </p>
              <div className="text-slate-600 text-sm leading-5 mt-1">
                {message}
              </div>
            </div>
            <div className="flex shrink-0 ml-4">
              <button
                type="button"
                className="text-slate-500 rounded-md inline-flex cursor-pointer normal-case"
                onClick={handleClose}
              >
                <span className="absolute w-px h-px p-0 m-[-1px] overflow-hidden text-clip whitespace-nowrap border-0">
                  Close
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
