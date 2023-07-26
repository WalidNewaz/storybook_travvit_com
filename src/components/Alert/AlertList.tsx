import React from 'react';
import Alert from './Alert';
import { IoCloseCircle } from 'react-icons/io5';

const Message: React.FC<{ listItems: string[] }> = ({ listItems }) => {
  return (
    <ul role="list" className="pl-4 list-disc">
      {listItems.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

const AlertList: React.FC<{
  heading: string;
  listItems: string[];
  hidden?: boolean;
  onClose?: () => void;
}> = ({ heading, listItems, hidden = true, onClose }) => {
  return (
    <Alert
      heading={heading}
      message={<Message listItems={listItems} />}
      icon={<IoCloseCircle className="w-6 h-6 text-red-600" />}
      hidden={hidden}
      onClose={onClose}
    />
  );
};

export default AlertList;
