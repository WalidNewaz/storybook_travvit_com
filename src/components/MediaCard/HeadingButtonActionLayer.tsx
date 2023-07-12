import React from 'react';
import { Button } from '../Button/Button';
import withOverlay from './withOverlay';
import type { clickHandler } from '../../types/eventHandler.types';

const HeadingButtonAction: React.FC<{
  heading: string;
  label: string;
  onClick: clickHandler;
  className?: string;
  headingClassName?: string;
}> = ({ heading, label, onClick, className = '', headingClassName = '' }) => (
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

export default withOverlay(HeadingButtonAction);
