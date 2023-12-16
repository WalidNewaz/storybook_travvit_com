import React from 'react';

/** Components */
import PaginationStrip from './PaginationStrip';
import PaginatedItemsPane from './PaginatedItemsPane';

// Define the props for the Pagination component
interface PaginationProps {
  items: React.ReactNode;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalItemsCount: number;
  itemsPerPage: number;
  maxPages: number;
  fetchNextPage: (pageNumber: number) => void;
}

/**
 * Pagination component.
 * Each page is fetched and rendered on demand.
 * `fetchNextPage` is called when the user clicks on a page number.
 * Use this to fetch the next page of items from the server.
 *
 * This component does not restrict how the items on the page are rendered.
 * @param params
 * @returns
 */
const Pagination: React.FC<PaginationProps> = ({
  items,
  currentPage,
  setCurrentPage,
  totalItemsCount,
  itemsPerPage,
  maxPages,
  fetchNextPage,
}) => {
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    fetchNextPage(pageNumber);
  };

  return (
    <div className="container mx-auto my-4">
      <PaginatedItemsPane items={items} />
      <PaginationStrip
        maxPages={maxPages}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        itemsCount={totalItemsCount}
        paginate={paginate}
      />
    </div>
  );
};

Pagination.defaultProps = {
  maxPages: 5,
};

export default Pagination;
