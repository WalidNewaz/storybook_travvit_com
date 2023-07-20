import type { Size, clickHandler } from '../../types';

interface Button extends Record<string, any> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string | React.CSSProperties['backgroundColor'];
  /**
   * How large should the button be?
   */
  size?: Size;
  /**
   * Button contents
   */
  label: string;
  /**
   * Custom style classes for the button
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: clickHandler;
  /**
   * Optional type for the button
   * @default 'button'
   * */
  type?: 'button' | 'submit' | 'reset';
}

export default Button;
