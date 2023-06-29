import React from 'react';

interface CardProps {
  title?: string;
  content1?: any;
  ContentComponent1?: React.FC<any>;
  content2?: any;
  ContentComponent2?: React.FC<any>;
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
  title,
  content1,
  content2,
  ContentComponent1,
  ContentComponent2,
}) => {
  return (
    <div className={`${CARD_CLASSES}`}>
      <div className={CARD_CONTENT_CLASSES}>
        {ContentComponent1 && <ContentComponent1 />}
      </div>
      <div className={CARD_CONTENT_CLASSES}>
        {ContentComponent2 && <ContentComponent2 />}
      </div>
    </div>
  );
};
