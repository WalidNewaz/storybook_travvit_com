import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from './Card';

describe('Card', () => {
  it('renders header and body components', () => {
    const MockHeader = () => <h1>Header</h1>;
    const MockBody = () => <p>Body</p>;

    render(<Card header={MockHeader} body={MockBody} />);

    const headerElement = screen.getByText('Header');
    const bodyElement = screen.getByText('Body');

    expect(headerElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  it('applies custom classes and styles', () => {
    const MockHeader = () => <h1>Header</h1>;
    const MockBody = () => <p>Body</p>;

    const customCardClasses = 'custom-card';
    const customHeaderClasses = 'custom-header';
    const customBodyClasses = 'custom-body';

    const customCardStyle = {
      backgroundColor: 'red',
      color: 'white',
    };

    render(
      <Card
        header={MockHeader}
        body={MockBody}
        cardClasses={customCardClasses}
        cardStyle={customCardStyle}
        headerClasses={customHeaderClasses}
        bodyClasses={customBodyClasses}
      />,
    );

    const cardElement = screen.getByTestId('card');
    const headerElement = screen.getByTestId('header');
    const bodyElement = screen.getByTestId('body');

    expect(cardElement).toHaveClass(customCardClasses);
    expect(cardElement).toHaveStyle(customCardStyle);

    expect(headerElement).toHaveClass(customHeaderClasses);
    expect(bodyElement).toHaveClass(customBodyClasses);
  });
});
