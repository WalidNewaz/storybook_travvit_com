import React from 'react';

const MINI_PREV_LINK_CLASSES = `
  relative
  inline-flex items-center
  rounded-md
  border border-gray-300
  bg-white
  px-4 py-2
  text-sm font-medium
  text-gray-700
  hover:bg-gray-50`;
const MINI_PREV_SPAN_CLASSES = `
  relative
  inline-flex items-center
  rounded-md
  border border-gray-300
  bg-white
  px-4 py-2
  text-sm font-medium
  text-gray-400
`;

/**
 * Previous button for mini pagination strip
 * @param params
 * @returns
 */
const MiniPrevButton: React.FC<{
  currentPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ currentPage, paginate }) =>
  currentPage > 1 ? (
    <a
      href="#"
      className={MINI_PREV_LINK_CLASSES}
      onClick={(e) => {
        e.preventDefault();
        paginate(currentPage - 1);
      }}
    >
      Previous
    </a>
  ) : (
    <span className={MINI_PREV_SPAN_CLASSES}>Previous</span>
  );

export default MiniPrevButton;
