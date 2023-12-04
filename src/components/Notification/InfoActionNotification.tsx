import React from 'react';
import Notification from './Notification';
import { IoInformationCircleSharp } from 'react-icons/io5';

const InfoActionNotification: React.FC<{
  heading?: string;
  message: string;
  hidden?: boolean;
  onProceed?: () => void;
  onDismiss?: () => void;
  className?: string;
}> = ({
  heading = 'Warning!',
  message,
  hidden = true,
  onProceed,
  onDismiss,
  className,
}) => {
  return (
    <Notification
      icon={<IoInformationCircleSharp className="w-6 h-6 text-travvit-blue" />}
      heading={heading}
      message={message}
      hidden={hidden}
      onProceed={onProceed}
      onDismiss={onDismiss}
      className={className}
    />
  );
};

export default InfoActionNotification;
