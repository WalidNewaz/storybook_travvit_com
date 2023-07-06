import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface IconButtonProps {
  label: string;
  icon: ReactNode;
  onClick?:
    | (() => void)
    | ((
        event: React.MouseEvent<
          HTMLAnchorElement | HTMLButtonElement,
          MouseEvent
        >,
      ) => void | undefined)
    | undefined;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
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
    ? 'primary text-white bg-travvit-blue-800 border-travvit-blue-800 dark:bg-travvit-blue-700 dark:border-travvit-blue-700'
    : 'text-travvit-blue-700 bg-transparent border-travvit-blue-700 dark:text-slate-300 dark:travvit-blue-300';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

const LABEL_CLASSES = 'inline-block pt-1 pl-2';

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
    getSizeClasses(size),
    className,
  );

  return (
    <button
      type={type}
      className={computedClasses}
      onClick={onClick}
      {...props}
    >
      {icon}
      <span className={LABEL_CLASSES}>{label}</span>
    </button>
  );
};
