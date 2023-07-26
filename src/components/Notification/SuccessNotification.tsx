import React from 'react';
import Notification from './Notification';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const SuccessNotification: React.FC<{
  heading?: string;
  message: string;
  hidden?: boolean;
  className?: string;
}> = ({ heading = 'Successfully!', message, hidden = true, className }) => {
  return (
    <Notification
      icon={<IoCheckmarkCircleOutline className="w-6 h-6 text-green-600" />}
      heading={heading}
      message={message}
      hidden={hidden}
      className={className}
    />
  );
};

export default SuccessNotification;
