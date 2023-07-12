import React from 'react';
import withOverlay from './withOverlay';

const LinkTransparent: React.FC<{
  href: string;
}> = ({ href }) => (
  <>
    <a
      href={href}
      className="link-transparent-action-layer flex flex-col justify-end h-full w-full"
    ></a>
  </>
);

export default withOverlay(LinkTransparent);
