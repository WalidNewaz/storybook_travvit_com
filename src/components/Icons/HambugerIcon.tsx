import React from 'react';
import { IconProps } from './IconProps.interface';

export const HambugerIcon: React.FC<IconProps> = ({ classes }) => (
  <svg
    className={`w-6 h-6 ${classes}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5C2 4.44772 2.44772 4 3 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H3C2.44772 6 2 5.55228 2 5ZM3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H3ZM3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H3Z"
    ></path>
  </svg>
);
