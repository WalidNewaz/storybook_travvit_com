import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { FaChevronDown } from 'react-icons/fa6';
import DesktopMenuDiscover from './DesktopMenuDiscover';

describe('DesktopMenuDiscover', () => {
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

  test('should render discover menu button', () => {
    const { getByText } = render(<DesktopMenuDiscover items={items} />);
    const discoverButton = getByText('Discover');
    expect(discoverButton).toBeInTheDocument();
  });

  test('should toggle menu panel when button is clicked', async () => {
    const { getByTestId } = render(<DesktopMenuDiscover items={items} />);
    const discoverButton = getByTestId('discover-button');
    let discoverPanel: Element;
    act(() => {
      fireEvent.click(discoverButton);
    });
    await waitFor(() => {
      discoverPanel = getByTestId('discover-panel');
      expect(discoverPanel).toBeInTheDocument();
    });

    act(() => {
      fireEvent.click(discoverButton);
    });
    await waitFor(() => {
      expect(discoverPanel).not.toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
