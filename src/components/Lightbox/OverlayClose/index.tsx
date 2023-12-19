import React from 'react';

import { IoCloseCircleOutline } from 'react-icons/io5';

const CLOSE_BUTTON_CLASSES = `
  absolute
  top-0 right-0 m-4
  text-white
  cursor-pointer`;
const CLOSE_ICON_CLASSES = `
  w-12 h-12
  text-white-600 opacity-60
  hover:opacity-80`;

/**
 * The close button for the lightbox
 * @param params
 * @returns
 */
const OverlayClose: React.FC<{ closeLightbox: () => void }> = ({
  closeLightbox,
}) => {
  return (
    <button className={CLOSE_BUTTON_CLASSES} onClick={closeLightbox}>
      <span className="sr-only">Close</span>
      <IoCloseCircleOutline className={CLOSE_ICON_CLASSES} />
    </button>
  );
};

export default OverlayClose;
