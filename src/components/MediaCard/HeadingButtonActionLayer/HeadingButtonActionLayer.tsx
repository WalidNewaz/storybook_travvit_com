import React from 'react';
import { Button } from '../../Button/Button';
import withOverlay from '../../../hocs/withOverlay';
import HeadingButtonActionLayerProps from './HeadingButtonActionLayer.interface';

const HeadingButtonActionLayer: React.FC<HeadingButtonActionLayerProps> = ({
  heading,
  label,
  onClick,
  className = '',
  headingClassName = '',
}) => (
  <>
    <div className={`heading-button-action-layer flex flex-col ${className}`}>
      <div className="grow flex flex-col justify-center">
        <h1 className={headingClassName}>{heading}</h1>
      </div>
      <div className="grow flex items-center justify-center">
        <Button onClick={onClick} label={label} primary />
      </div>
    </div>
  </>
);

export default withOverlay(HeadingButtonActionLayer);
