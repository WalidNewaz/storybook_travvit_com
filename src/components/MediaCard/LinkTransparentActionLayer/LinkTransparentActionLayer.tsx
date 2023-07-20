import React from 'react';
import withOverlay from '../withOverlay';
import LinkTransparentActionLayerProps from './LinkTransparentActionLayer.interface';

const LinkTransparentActionLayer: React.FC<LinkTransparentActionLayerProps> = ({
  href,
}) => (
  <>
    <a
      href={href}
      className="link-transparent-action-layer flex flex-col justify-end h-full w-full"
    ></a>
  </>
);

export default withOverlay(LinkTransparentActionLayer);
