import React from 'react';

/**
 * Display the items for the current page
 * @param params
 * @returns
 */
const PaginatedItemsPane: React.FC<{ items: React.ReactNode }> = ({
  items,
}) => <>{items}</>;

export default PaginatedItemsPane;
