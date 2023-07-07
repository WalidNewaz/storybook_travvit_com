import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
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
  size?: 'small' | 'medium' | 'large';
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
  onClick?: () => void;
  /**
   * Optional type for the button
   * @default 'button'
   * */
  type?: 'button' | 'submit' | 'reset';
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-6 py-3';
    }
    default: {
      return 'px-5 py-2.5';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-travvit-orange-800 border-travvit-orange-800 dark:bg-travvit-orange-700 dark:border-travvit-orange-700'
    : 'text-travvit-orange-700 bg-transparent border-travvit-orange-700 dark:text-slate-300 dark:travvit-orange-300';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const computedClasses = classNames(
    BASE_BUTTON_CLASSES,
    getModeClasses(primary),
    getSizeClasses(size),
    className,
  );

  return (
    <button type={type} className={computedClasses} {...props}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  className: '',
  type: 'button',
};
