import React from 'react';

interface CardProps {
  Content1?: React.FC<any>;
  Content2?: React.FC<any>;
  contentClasses1?: string;
  contentClasses2?: string;
}

const CARD_CLASSES = `
  flex
  flex-wrap
  justify-between
  mb-4
  bg-slate-50
  rounded-lg
  p-4
  md:flex-row
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
  Content1,
  Content2,
  contentClasses1,
  contentClasses2,
}) => {
  return (
    <div className={`${CARD_CLASSES}`}>
      <div className={`${CARD_CONTENT_CLASSES} ${contentClasses1}`}>
        {Content1 && <Content1 />}
      </div>
      <div className={`${CARD_CONTENT_CLASSES} ${contentClasses2}`}>
        {Content2 && <Content2 />}
      </div>
    </div>
  );
};
