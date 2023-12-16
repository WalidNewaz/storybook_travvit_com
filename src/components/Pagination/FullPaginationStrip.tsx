import React from 'react';

/** Components */
import FullPrevButton from './FullPrevButton';
import FullNextButton from './FullNextButton';
import PageNumberButtons from './PageNumberButtons';
import PaginationItemsInfo from './PaginationItemsInfo';

/**
 * Full pagination strip
 * @param params
 * @returns
 */
const FullPaginationStrip: React.FC<{
  maxPages: number;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  itemsCount: number;
  paginate: (pageNumber: number) => void;
}> = ({
  maxPages,
  currentPage,
  totalPages,
  itemsPerPage,
  itemsCount,
  paginate,
}) => {
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);

  return (
    <div className="full-pagination-strip hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <PaginationItemsInfo
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        itemsCount={itemsCount}
      />
      <nav
        className="full-pagination-buttons isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <FullPrevButton
          startPage={startPage}
          currentPage={currentPage}
          paginate={paginate}
        />
        <PageNumberButtons
          startPage={startPage}
          endPage={endPage}
          currentPage={currentPage}
          paginate={paginate}
        />
        <FullNextButton
          endPage={endPage}
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      </nav>
    </div>
  );
};

export default FullPaginationStrip;
