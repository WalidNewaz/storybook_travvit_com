import React from 'react';

import { BsChevronLeft } from 'react-icons/bs';

const LINK_CLASSES = `
  relative inline-flex
  items-center rounded-l-md
  px-2 py-2 text-gray-400
  ring-1 ring-inset ring-gray-300
  hover:bg-gray-50
  focus:z-20
  focus:outline-offset-0`;
const SPAN_CLASSES = `
  relative inline-flex
  items-center rounded-l-md
  px-2 py-2 text-gray-200
  ring-1 ring-inset ring-gray-300
  focus:z-20
  focus:outline-offset-0`;

/**
 * Previous button for pull pagination strip
 * @param params
 * @returns
 */
const FullPrevButton: React.FC<{
  startPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ startPage, currentPage, paginate }) =>
  startPage > 1 ? (
    <a
      key="backward"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        paginate(currentPage - 1);
      }}
      className={LINK_CLASSES}
    >
      <span className="sr-only">Previous</span>
      <BsChevronLeft className="h-5 w-5" aria-hidden />
    </a>
  ) : (
    <span className={SPAN_CLASSES}>
      <span className="sr-only">Previous</span>
      <BsChevronLeft className="h-5 w-5" aria-hidden />
    </span>
  );

export default FullPrevButton;
