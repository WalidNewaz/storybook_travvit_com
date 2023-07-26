import React from 'react';
import Notification from './Notification';
import { IoCloseCircle } from 'react-icons/io5';

const ErrorNotification: React.FC<{
  heading?: string;
  message: string;
  hidden?: boolean;
  onClose?: () => void;
  className?: string;
}> = ({ heading = 'Error!', message, hidden = true, onClose, className }) => {
  return (
    <Notification
      icon={<IoCloseCircle className="w-6 h-6 text-red-600" />}
      heading={heading}
      message={message}
      hidden={hidden}
      onClose={onClose}
      className={className}
    />
  );
};

export default ErrorNotification;
