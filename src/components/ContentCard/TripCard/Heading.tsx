import React from 'react';

const Heading: React.FC<{
  heading: string;
  headingLink: string;
}> = ({ heading, headingLink }) => (
  <a
    href={headingLink}
    className="text-travvit-blue-800 hover:text-travvit-blue"
  >
    <h2>{heading}</h2>
  </a>
);

export default Heading;
