import React from 'react';

const MINI_NEXT_LINK_CLASSES = `
  relative
  ml-3
  inline-flex items-center
  rounded-md
  border border-gray-300
  bg-white
  px-4 py-2
  text-sm font-medium
  text-gray-700
  hover:bg-gray-50`;
const MINI_NEXT_SPAN_CLASSES = `
  relative
  ml-3
  inline-flex items-center
  rounded-md
  border border-gray-300
  bg-white
  px-4 py-2
  text-sm font-medium
  text-gray-400`;

/**
 * Next button for mini pagination strip
 * @param params
 * @returns
 */
const MiniNextButton: React.FC<{
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ totalPages, currentPage, paginate }) =>
  currentPage < totalPages ? (
    <a
      href="#"
      className={MINI_NEXT_LINK_CLASSES}
      onClick={(e) => {
        e.preventDefault();
        paginate(currentPage + 1);
      }}
    >
      Next
    </a>
  ) : (
    <span className={MINI_NEXT_SPAN_CLASSES}>Next</span>
  );

export default MiniNextButton;
