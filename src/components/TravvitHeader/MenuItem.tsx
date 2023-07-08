import React from 'react';
import classNames from 'classnames';
import type { IconType } from 'react-icons';

export interface IconProps {
  className?: string;
  'aria-hidden'?: string;
}

export interface MenuItemProps {
  icon: IconType;
  label: string;
  href?: string;
  mobile?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void)
    | (() => Promise<void>)
    | undefined;
  iconLabel?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  href,
  mobile = false,
  onClick,
  iconLabel = '',
}) => {
  const Icon = icon as unknown as React.ComponentType<IconProps>;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  const menuItemWrapperClassName = classNames(
    'group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50',
  );
  const labelClassName = classNames(
    `font-semibold hover:text-travvit-blue self-center`,
    mobile ? 'text-slate-300' : 'text-gray-900',
  );
  const iconWrapperClassName = classNames(
    'flex h-11 w-11 flex-none items-center justify-center',
    mobile ? '' : 'rounded-lg bg-gray-50 group-hover:bg-white',
  );
  const iconClassName = classNames(
    'w-6 h-6',
    mobile
      ? 'text-slate-300 group-hover:text-indigo-600'
      : 'text-gray-600 group-hover:text-indigo-600',
  );

  return (
    <div className={menuItemWrapperClassName}>
      <div className={iconWrapperClassName}>
        <Icon
          className={iconClassName}
          aria-label={iconLabel}
          aria-hidden="true"
        />
      </div>
      {href && (
        <a href={href} className={labelClassName} onClick={handleClick}>
          {label}
        </a>
      )}
      {!href && onClick && (
        <button onClick={onClick} className={labelClassName}>
          {label}
        </button>
      )}
    </div>
  );
};
