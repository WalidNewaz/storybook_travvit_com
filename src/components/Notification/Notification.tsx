import React, { useState, useEffect, ReactNode } from 'react';

/**
 * This is the icon for the notification.
 * @param icon The icon to display in the notification.
 * @returns
 */
const Icon: React.FC<{ icon: ReactNode }> = ({ icon }) => (
  <div className="shrink-0">{icon}</div>
);

/**
 * This is the heading for the notification.
 * @param heading The heading to display in the notification.
 * @returns
 */
const Heading: React.FC<{ heading: string }> = ({ heading }) => (
  <p className="text-slate-800 font-medium text-sm leading-5">{heading}</p>
);

/**
 * This is the body for the notification.
 * @param message The message to display in the notification.
 * @returns
 */
const Body: React.FC<{ message: ReactNode }> = ({ message }) => (
  <div className="text-slate-600 text-sm leading-5 mt-1">{message}</div>
);

const ACTION_BUTTON_CLASS = `
  rounded-md
  text-travvit-blue-800
  hover:text-travvit-blue
  font-medium
  text-sm
  leading-5
  py-1 px-2`;

/**
 * This is the proceed button for the notification.
 * @param onProceed On click handler for the proceed button.
 * @returns
 */
const Proceed: React.FC<{ onProceed: () => void }> = ({ onProceed }) => (
  <button
    type="button"
    className={`${ACTION_BUTTON_CLASS} bg-travvit-blue-900/20`}
    onClick={onProceed}
  >
    Proceed
  </button>
);

/**
 * This is the dismiss button for the notification.
 * @param onDismiss On click handler for the dismiss button.
 * @returns
 */
const Dismiss: React.FC<{ onDismiss: () => void }> = ({ onDismiss }) => (
  <button
    type="button"
    className={`${ACTION_BUTTON_CLASS} hover:bg-travvit-blue-900/20 ml-3`}
    onClick={onDismiss}
  >
    Dismiss
  </button>
);

/**
 * This is the actions for the notification.
 * @param params
 * @returns
 */
const Actions: React.FC<{
  onProceed?: () => void;
  onDismiss?: () => void;
}> = ({ onProceed, onDismiss }) =>
  onProceed &&
  onDismiss && (
    <div className="mt-4">
      <div className="flex my-3 mx-2">
        {onProceed && <Proceed onProceed={onProceed} />}
        {onDismiss && <Dismiss onDismiss={onDismiss} />}
      </div>
    </div>
  );

/**
 * This is the content for the notification.
 * @param params
 * @returns
 */
const Content: React.FC<{
  heading: string;
  message: ReactNode;
  onProceed?: () => void;
  onDismiss?: () => void;
}> = ({ heading, message, onProceed, onDismiss }) => (
  <div className="pt-0.5 flex-1 w-0 ml-3">
    <Heading heading={heading} />
    <Body message={message} />
    <Actions onProceed={onProceed} onDismiss={onDismiss} />
  </div>
);

/**
 * This is the SVG close icon for the notification.
 * @returns
 */
const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="w-6 h-6"
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
  </svg>
);

/**
 * This is the close button for the notification.
 * @param params
 * @returns
 */
const Close: React.FC<{ handleClose: () => void }> = ({ handleClose }) => (
  <div className="flex shrink-0 ml-4">
    <button
      type="button"
      className="text-slate-500 rounded-md inline-flex cursor-pointer normal-case"
      onClick={handleClose}
    >
      <span className="absolute w-px h-px p-0 m-[-1px] overflow-hidden text-clip whitespace-nowrap border-0">
        Close
      </span>
      <CloseIcon />
    </button>
  </div>
);

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
  onProceed?: () => void;
  onDismiss?: () => void;
  className?: string;
}> = ({
  icon,
  heading,
  message,
  hidden,
  onClose,
  onProceed,
  onDismiss,
  className,
}) => {
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
            <Icon icon={icon} />
            <Content
              heading={heading}
              message={message}
              onProceed={onProceed}
              onDismiss={onDismiss}
            />
            <Close handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
