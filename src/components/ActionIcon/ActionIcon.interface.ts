import type { IconType } from 'react-icons';
import type { clickHandler } from '../../types/eventHandler.types';

interface ActionIconProps {
  icon?: IconType;
  label: string;
  onClick: clickHandler;
  selected?: boolean;
  className?: string;
}

export default ActionIconProps;
