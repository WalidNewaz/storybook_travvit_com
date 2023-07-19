import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MobileMenuSiteLogo } from './MobileMenuSiteLogo';

describe('MobileMenuSiteLogo', () => {
  test('should render TravvitLogo and close button', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<MobileMenuSiteLogo onClick={onClick} />);

    const travvitLogo = getByTestId('travvit-logo');
    expect(travvitLogo).toBeInTheDocument();

    const closeButton = getByTestId('mobile-toggle-menu');
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
