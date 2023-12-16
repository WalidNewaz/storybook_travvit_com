import React from 'react';

const ITEM_BASE_CLASSES = `
  relative inline-flex
  items-center
  px-4 py-2
  text-sm
  font-semibold
  focus:z-20`;
const CURRENT_ITEM_CLASSES = `
  z-10 bg-indigo-600 text-white
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-indigo-600`;
const DEFAULT_ITEM_CLASSES = `
  text-gray-900
  ring-1 ring-inset
  ring-gray-300
  hover:bg-gray-50
  focus:outline-offset-0`;

/**
 * A single pagination button
 * @param params
 * @returns
 */
const PaginationButton: React.FC<{
  index: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ index, currentPage, paginate }) =>
  currentPage === index ? (
    <span
      key={index}
      className={`${ITEM_BASE_CLASSES} ${CURRENT_ITEM_CLASSES}`}
    >
      {index}
    </span>
  ) : (
    <a
      key={index}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        paginate(index);
      }}
      className={`${ITEM_BASE_CLASSES} ${DEFAULT_ITEM_CLASSES}`}
    >
      {index}
    </a>
  );

export default PaginationButton;
