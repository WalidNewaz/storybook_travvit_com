import React from 'react';

import PaginationItemsInfo from './PaginationItemsInfo';
import MiniPrevButton from './MiniPrevButton';
import MiniNextButton from './MiniNextButton';

/**
 * Mini pagination strip displayed on mobile
 * @returns
 */
const MiniPaginationStrip: React.FC<{
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  itemsCount: number;
  paginate: (pageNumber: number) => void;
}> = ({ currentPage, totalPages, itemsPerPage, itemsCount, paginate }) => {
  return (
    <>
      <div className="mini-pagination flex flex-col w-full sm:hidden">
        <div className="mini-pagination-info my-4 mx-auto">
          <PaginationItemsInfo
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            itemsCount={itemsCount}
          />
        </div>
        <div className="mini-pagination-strip flex flex-1 justify-between">
          <MiniPrevButton currentPage={currentPage} paginate={paginate} />
          <MiniNextButton
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default MiniPaginationStrip;
