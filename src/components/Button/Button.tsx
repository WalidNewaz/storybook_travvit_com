import React from 'react';
import classNames from 'classnames';
import ButtonProps from './Button.interface';

const sizeClassNames: Record<string, string> = {
  small: 'px-4 py-2.5',
  large: 'px-6 py-3',
};

const DEFAULT_SIZE = 'px-5 py-2.5';

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
  size = 'small',
  label,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const computedClasses = classNames(
    BASE_BUTTON_CLASSES,
    getModeClasses(primary),
    sizeClassNames[size] || DEFAULT_SIZE,
    className,
  );

  return (
    <button type={type} className={computedClasses} {...props}>
      {label}
    </button>
  );
};
