import React from 'react';
import withOverlay from './withOverlay';

const LinkTransparent: React.FC<{
  heading: string;
  href: string;
  className?: string;
}> = ({ heading, href, className }) => (
  <>
    <a href={href} className="flex flex-col justify-end h-full">
      <h1 className={`text-center ${className}`}>{heading}</h1>
    </a>
  </>
);

export default withOverlay(LinkTransparent);
