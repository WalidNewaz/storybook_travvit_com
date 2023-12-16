import React from 'react';

const ACTIVE_COUNT_CLASS = `
  inline-block
  px-2 py-1 ml-3 
  text-xs font-semibold
  leading-none text-center
  text-indigo-600
  bg-indigo-50
  rounded-full`;
const INACTIVE_COUNT_CLASS = `
  inline-block
  px-2 py-1 ml-3 
  text-xs font-semibold
  leading-none text-center
  text-gray-600
  bg-gray-200
  rounded-full`;

/**
 * ItemCount component.
 * @param params
 * @returns
 */
const ItemCount: React.FC<{
  count?: number;
  index: number;
  activeTab: number;
}> = ({ count, index, activeTab }) =>
  count && (
    <span
      className={
        index === activeTab ? ACTIVE_COUNT_CLASS : INACTIVE_COUNT_CLASS
      }
    >
      {count}
    </span>
  );

export default ItemCount;
