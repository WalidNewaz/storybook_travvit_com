import type { Color } from '../../types';

interface Badge {
  label?: string;
  color?: Color;
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default Badge;
