import React from 'react';
import classNames from 'classnames';

import type { IconType } from '../../../types';

/**
 * Icon for a menu item
 * @param params
 * @returns
 */
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

export default MenuItemIcon;
