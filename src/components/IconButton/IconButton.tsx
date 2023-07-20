import React from 'react';
import classNames from 'classnames';
import IconButtonProps from './IconButton.interface';

const sizeClassNames: Record<string, string> = {
  small: 'px-4 py-2.5',
  large: 'px-6 py-3',
};

const DEFAULT_SIZE = 'px-5 py-2.5';

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'primary text-white bg-travvit-blue-800 border-travvit-blue-800 dark:bg-travvit-blue-700 dark:border-travvit-blue-700'
    : 'text-travvit-blue-700 bg-transparent border-travvit-blue-700 dark:text-slate-300 dark:travvit-blue-300';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

const LABEL_CLASSES = 'inline-block pt-1 pl-2 whitespace-nowrap';

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  icon,
  onClick,
  primary = false,
  size = 'medium',
  type = 'button',
  className = '',
  ...props
}) => {
  const computedClasses = classNames(
    BASE_BUTTON_CLASSES,
    getModeClasses(primary),
    sizeClassNames[size] || DEFAULT_SIZE,
    className,
  );

  return (
    <button
      type={type}
      value={label.toLocaleLowerCase()}
      className={computedClasses}
      onClick={onClick}
      {...props}
    >
      {icon}
      <span className={LABEL_CLASSES}>{label}</span>
    </button>
  );
};
