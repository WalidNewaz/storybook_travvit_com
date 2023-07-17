import React from 'react';
import classNames from 'classnames';
import CardProps from './Card.interface';

const CARD_CLASSES = `
  flex
  flex-wrap
  justify-between
  mb-4
  rounded-lg
  p-4
  md:flex-row
  bg-transparent
`;

const CARD_CONTENT_CLASSES = `
  inline-flex
  basis-full
  text-center
  mb-2
  md:basis-1/2
  md:text-left
`;

export const Card: React.FC<CardProps> = ({
  header: Header,
  body: Body,
  cardClasses = '',
  cardStyle = {},
  headerClasses = '',
  bodyClasses = '',
}) => {
  const cardClassName = classNames(CARD_CLASSES, cardClasses);
  const headerClassName = classNames(CARD_CONTENT_CLASSES, headerClasses);
  const bodyClassName = classNames(CARD_CONTENT_CLASSES, bodyClasses);

  return (
    <div className={cardClassName} style={cardStyle} data-testid="card">
      <div className={headerClassName} data-testid="header">
        {Header && <Header />}
      </div>
      <div className={bodyClassName} data-testid="body">
        {Body && <Body />}
      </div>
    </div>
  );
};
