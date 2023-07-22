import React from 'react';
import withOverlay from '../../../hocs/withOverlay';
import LinkHeadingActionLayerProps from './LinkHeadingActionLayer.interface';

const LinkHeadingActionLayer: React.FC<LinkHeadingActionLayerProps> = ({
  heading,
  href,
  className,
}) => (
  <>
    <a
      href={href}
      className="link-heading-acton-layer flex flex-col justify-end h-full w-full"
    >
      <h1 className={`text-center ${className}`}>{heading}</h1>
    </a>
  </>
);

export default withOverlay(LinkHeadingActionLayer);
