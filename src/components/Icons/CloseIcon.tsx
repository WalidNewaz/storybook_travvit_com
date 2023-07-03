import React from 'react';
import { IconProps } from './IconProps.interface';

export const CloseIcon: React.FC<IconProps> = ({ classes }) => (
  <svg
    className={`w-6 h-6 ${classes}`}
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7071 10L15.3536 15.3536C15.5488 15.5488 15.5488 15.8654 15.3536 16.0607C15.1583 16.256 14.8417 16.256 14.6464 16.0607L10 11.4142L5.35355 16.0607C5.15829 16.256 4.84171 16.256 4.64645 16.0607C4.45118 15.8654 4.45118 15.5488 4.64645 15.3536L9.29289 10.7071L4.64645 6.06066C4.45118 5.86539 4.45118 5.54882 4.64645 5.35355C4.84171 5.15829 5.15829 5.15829 5.35355 5.35355L10 9.99999L14.6464 5.35355C14.8417 5.15829 15.1583 5.15829 15.3536 5.35355C15.5488 5.54882 15.5488 5.86539 15.3536 6.06066L10.7071 10Z"
    ></path>
  </svg>
);
