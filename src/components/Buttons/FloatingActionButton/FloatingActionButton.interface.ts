import type { clickHandler } from '../../../types';

interface FloatingActionButton {
  onClick: clickHandler;
  icon: JSX.Element;
  label?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default FloatingActionButton;
