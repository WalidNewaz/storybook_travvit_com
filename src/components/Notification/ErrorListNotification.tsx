import React from 'react';
import Notification from './Notification';
import { IoCloseCircle } from 'react-icons/io5';

const Message: React.FC<{ listItems: string[] }> = ({ listItems }) => {
  return (
    <ul role="list" className="pl-4 list-disc">
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const ErrorListNotification: React.FC<{
  heading?: string;
  listItems: string[];
  hidden?: boolean;
  onClose?: () => void;
  className?: string;
}> = ({ heading = 'Error!', listItems, hidden = true, onClose, className }) => {
  return (
    <Notification
      icon={<IoCloseCircle className="w-6 h-6 text-red-600" />}
      heading={heading}
      message={<Message listItems={listItems} />}
      hidden={hidden}
      onClose={onClose}
      className={className}
    />
  );
};

export default ErrorListNotification;
