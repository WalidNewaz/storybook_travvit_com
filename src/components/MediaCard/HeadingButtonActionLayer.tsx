import React from 'react';
import { Button } from '../Button/Button';
import withOverlay from './withOverlay';
import type { clickHandler } from '../../types/eventHandler.types';

const HeadingButtonAction: React.FC<{
  heading: string;
  label: string;
  onClick: clickHandler;
  className?: string;
}> = ({ heading, label, onClick, className = '' }) => (
  <>
    <h1 className={`text-center ${className}`}>{heading}</h1>
    <div className="buttons pt-8">
      <Button onClick={onClick} label={label} primary />
    </div>
  </>
);

export default withOverlay(HeadingButtonAction);
