import React, { ReactNode } from 'react';

/**
 * This is the body for the dialog.
 * @param message
 * @returns
 */
const Body: React.FC<{ message: ReactNode }> = ({ message }) => (
  <div className="mt-2">
    <div className="font-mono text-sm text-gray-500 whitespace-pre-wrap overflow-y-scroll overflow-x-auto max-h-60">
      {message}
    </div>
  </div>
);

export default Body;
