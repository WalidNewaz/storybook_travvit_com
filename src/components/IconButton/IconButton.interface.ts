import { ReactNode } from 'react';
import type { clickHandler, Size } from '../../types';

interface IconButton {
  label: string;
  icon: ReactNode;
  onClick?: clickHandler;
  primary?: boolean;
  size?: Size;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default IconButton;
