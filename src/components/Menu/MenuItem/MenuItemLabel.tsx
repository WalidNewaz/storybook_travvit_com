import React from 'react';
import classNames from 'classnames';

/**
 * Label for a menu item
 * @param params
 * @returns
 */
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
      <a
        href={href}
        className={className}
        onClick={onClick}
        data-testid="menu-item-href"
      >
        {label}
      </a>
    );
  }
  if (onClick) {
    return (
      <button
        onClick={onClick as React.MouseEventHandler}
        className={className}
        data-testid="menu-item-button"
      >
        {label}
      </button>
    );
  }
  return null;
};

export default MenuItemLabel;
