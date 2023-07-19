import React from 'react';
import classNames from 'classnames';
import MenuItemProps from './MenuItem.interface';
import type { IconType } from '../../../types';

const MenuItemWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const className = classNames(
    'group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50',
  );
  return <div className={className}>{children}</div>;
};

const MenuItemIcon: React.FC<{
  icon: React.ComponentType<IconType>;
  iconLabel: string;
  mobile: boolean;
}> = ({ icon: Icon, iconLabel, mobile }) => {
  const wrapperClassName = classNames(
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
    <div className={wrapperClassName}>
      <Icon
        className={iconClassName}
        aria-label={iconLabel}
        aria-hidden="true"
      />
    </div>
  );
};

const MenuItemLabel: React.FC<{
  label: string;
  href?: string;
  mobile: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}> = ({ label, href, mobile, onClick }) => {
  const className = classNames(
    `font-semibold hover:text-travvit-blue self-center`,
    mobile ? 'text-slate-300' : 'text-gray-900',
  );
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }
  if (onClick) {
    return (
      <button
        onClick={onClick as React.MouseEventHandler}
        className={className}
      >
        {label}
      </button>
    );
  }
  return null;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  href,
  mobile = false,
  onClick,
  iconLabel = '',
}) => {
  const Icon = icon as unknown as React.ComponentType<IconType>;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <MenuItemWrapper>
      <MenuItemIcon icon={Icon} iconLabel={iconLabel} mobile={mobile} />
      <MenuItemLabel
        label={label}
        href={href}
        mobile={mobile}
        onClick={handleClick}
      />
    </MenuItemWrapper>
  );
};
