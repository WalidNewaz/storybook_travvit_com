import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { TravvitFooter } from './TravvitFooter';

describe('TravvitFooter', () => {
  test('should render the Travvit footer with correct sections and links', () => {
    const { getByText, getAllByRole } = render(<TravvitFooter />);

    // Check if the branding section is rendered correctly
    const brandingSection = getByText('Explore Together!');
    expect(brandingSection).toBeInTheDocument();

    // Check if the social links are rendered correctly
    const socialLinks = getAllByRole('link', { name: 'footer-social-link' });
    expect(socialLinks.length).toBe(4);

    // Check if the discover menu is rendered correctly
    const discoverMenu = getByText('Discover');
    expect(discoverMenu).toBeInTheDocument();

    // Check if the company menu is rendered correctly
    const companyMenu = getByText('Company');
    expect(companyMenu).toBeInTheDocument();

    // Check if the legal menu is rendered correctly
    const legalMenu = getByText('Legal');
    expect(legalMenu).toBeInTheDocument();

    // Check if the copyright section is rendered correctly
    const copyrightSection = getByText(
      `© ${new Date().getFullYear()} Travvit. All rights reserved.`
    );
    expect(copyrightSection).toBeInTheDocument();
  });

  // Add more test cases as needed
});
