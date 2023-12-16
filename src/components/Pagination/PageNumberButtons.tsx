import React from 'react';

/** Components */
import PaginationButton from './PaginationButton';

/**
 * Display the page number buttons
 * @param params
 * @returns
 */
const PageNumberButtons: React.FC<{
  startPage: number;
  endPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ startPage, endPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <PaginationButton
        index={i}
        currentPage={currentPage}
        paginate={paginate}
      />,
    );
  }

  return pageNumbers;
};

export default PageNumberButtons;
