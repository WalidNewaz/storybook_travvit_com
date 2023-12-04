import React, { ReactNode } from 'react';

const ICON_CLASSES = `
  mx-auto flex h-12 w-12
  flex-shrink-0 items-center
  justify-center rounded-full
  bg-red-100 sm:mx-0
  sm:h-10 sm:w-10`;

/**
 * This is the icon for the dialog.
 * @param icon
 * @returns
 */
const Icon: React.FC<{ icon: ReactNode }> = ({ icon }) => (
  <div className={ICON_CLASSES}>{icon}</div>
);

export default Icon;
