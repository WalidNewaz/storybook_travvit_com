import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import MenuItems from './MenuItems';
import { FaChevronDown } from 'react-icons/fa6';

describe('MenuItems', () => {
  const items = [
    {
      icon: FaChevronDown,
      label: 'Item 1',
      href: '#',
      onClick: jest.fn(),
    },
    {
      icon: FaChevronDown,
      label: 'Item 2',
      href: '#',
      onClick: jest.fn(),
    },
    {
      icon: FaChevronDown,
      label: 'Item 3',
      href: '#',
      onClick: jest.fn(),
    },
  ];

  test('should render menu items', () => {
    const { getByText } = render(<MenuItems items={items} />);

    items.forEach((item) => {
      const menuItem = getByText(item.label);
      expect(menuItem).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
