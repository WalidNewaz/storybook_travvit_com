import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

/** Component */
import Pagination from '../components/Pagination';
import TabPane from '../components/Tabs';

export default {
  title: 'Components/Navigation',
  component: Pagination,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem] h-[50vh] flex">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Pagination>;

// Define the interface for your item
export interface Item {
  id: number;
  name: string;
  // Add other properties as needed
}

const paginationItems: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  { id: 12, name: 'Item 12' },
  { id: 13, name: 'Item 13' },
  { id: 14, name: 'Item 14' },
  { id: 15, name: 'Item 15' },
  { id: 16, name: 'Item 16' },
  { id: 17, name: 'Item 17' },
  { id: 18, name: 'Item 18' },
  { id: 19, name: 'Item 19' },
  { id: 20, name: 'Item 20' },
  { id: 21, name: 'Item 21' },
  { id: 22, name: 'Item 22' },
  { id: 23, name: 'Item 23' },
  { id: 24, name: 'Item 24' },
  { id: 25, name: 'Item 25' },
  { id: 26, name: 'Item 26' },
  { id: 27, name: 'Item 27' },
  { id: 28, name: 'Item 28' },
  { id: 29, name: 'Item 29' },
  { id: 30, name: 'Item 30' },
  { id: 31, name: 'Item 31' },
  { id: 32, name: 'Item 32' },
  { id: 33, name: 'Item 33' },
  { id: 34, name: 'Item 34' },
  { id: 35, name: 'Item 35' },
  { id: 36, name: 'Item 36' },
  { id: 37, name: 'Item 37' },
  { id: 38, name: 'Item 38' },
  { id: 39, name: 'Item 39' },
  { id: 40, name: 'Item 40' },
  { id: 41, name: 'Item 41' },
  // Add more items as needed
];

export const ListPagination: Story = {
  name: 'List item pagination',
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Generate content for the current page
    const currentItems = paginationItems
      .slice(indexOfFirstItem, indexOfLastItem)
      .map((item, index) => (
        <React.Fragment key={index}>
          <div key={item.id}>{item.name}</div>
        </React.Fragment>
      ));
    // Fetch the next page
    const fetchNextPage = (pageNumber: number) => {
      console.log(`Fetching page ${pageNumber}`);
    };
    return (
      <Pagination
        items={<div className="grid grid-cols-1 gap-4">{currentItems}</div>}
        totalItemsCount={paginationItems.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={5}
        maxPages={5}
        fetchNextPage={fetchNextPage}
      />
    );
  },
};

export const TabbedNavigation: Story = {
  name: 'Tabbed navigation',
  render: () => {
    // Define the tabs
    const tabs = [
      {
        label: 'Tab 1',
        count: 10,
        content: <div>Tab 1 content</div>,
      },
      {
        label: 'Tab 2',
        count: 20,
        content: <div>Tab 2 content</div>,
      },
      {
        label: 'Tab 3',
        // count: 30,
        content: <div>Tab 3 content</div>,
      },
    ];
    return <TabPane tabs={tabs} />;
  },
};
