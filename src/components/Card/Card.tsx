import React from 'react';

interface CardProps {
  title: string;
  content1: string;
  content2: string;
}

// const CARD_CLASSES = `
//   bg-white
//   border
//   border-solid
//   border-current
//   rounded-lg
//   p-4
//   mb-4
//   w-full
//   box-border
//   block
//   mr-0
//   md:inline-block
//   md:w-[calc(50%-16px)]
//   md:mr-4
//   md:align-top
//   md:even:mr-0`;
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
  basis-full
  text-center
  mb-2
  md:basis-1/2
  md:text-left
`;

export const Card: React.FC<CardProps> = ({ title, content1, content2 }) => {
  return (
    <div className={`card ${CARD_CLASSES}`}>
      {/* <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p> */}
      <div className={CARD_CONTENT_CLASSES}>
        <h2>{title}</h2>
        <p>{content1}</p>
      </div>
      <div className={CARD_CONTENT_CLASSES}>
        <p>{content2}</p>
      </div>
    </div>
  );
};
