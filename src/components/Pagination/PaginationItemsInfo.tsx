import React from 'react';

/**
 * The summary info for the items being displayed
 * @param params
 * @returns
 */
const PaginationItemsInfo: React.FC<{
  currentPage: number;
  itemsPerPage: number;
  itemsCount: number;
}> = ({ currentPage, itemsPerPage, itemsCount }) => {
  return (
    <div className="pagination-items-info">
      <p className="text-sm text-gray-700">
        Showing{' '}
        <span className="font-medium">
          {(currentPage - 1) * itemsPerPage + 1}
        </span>{' '}
        to{' '}
        <span className="font-medium">
          {(currentPage - 1) * itemsPerPage + itemsPerPage}
        </span>{' '}
        of <span className="font-medium">{itemsCount}</span> results
      </p>
    </div>
  );
};

export default PaginationItemsInfo;
