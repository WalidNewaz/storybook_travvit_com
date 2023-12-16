import React from 'react';

import ItemCount from './ItemCount';

const TAB_COMMON_CLASS = `
  py-2 px-4
  focus:outline-none
  font-medium text-sm
  cursor-pointer
  px-4 py1
  border-b-2
  first:ml-0
  ml-4`;
const ACTIVE_TAB_CLASS = 'text-indigo-600 border-indigo-600';
const INACTIVE_TAB_CLASS =
  'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300';

/**
 * TabButton component.
 * Renders a tab button.
 * @param params
 * @returns
 */
const TabButton: React.FC<{
  index: number;
  label: string;
  count?: number;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}> = ({ index, label, count, activeTab, setActiveTab }) =>
  index === activeTab ? (
    <span
      key={index}
      onClick={() => setActiveTab(index)}
      className={`${TAB_COMMON_CLASS} ${ACTIVE_TAB_CLASS}`}
      aria-current="page"
    >
      {label}
      <ItemCount count={count} index={index} activeTab={activeTab} />
    </span>
  ) : (
    <a
      key={index}
      onClick={() => setActiveTab(index)}
      className={`${TAB_COMMON_CLASS} ${INACTIVE_TAB_CLASS}`}
    >
      {label}
      <ItemCount count={count} index={index} activeTab={activeTab} />
    </a>
  );

export default TabButton;
