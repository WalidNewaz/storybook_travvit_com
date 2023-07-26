import React from 'react';
import Notification from './Notification';
import { IoWarning } from 'react-icons/io5';

const WarningNotification: React.FC<{
  heading?: string;
  message: string;
  hidden?: boolean;
  className?: string;
}> = ({ heading = 'Warning!', message, hidden = true, className }) => {
  return (
    <Notification
      icon={<IoWarning className="w-6 h-6 text-yellow-600" />}
      heading={heading}
      message={message}
      hidden={hidden}
      className={className}
    />
  );
};

export default WarningNotification;
