import React from 'react';
import classNames from 'classnames';
import type { IconType } from 'react-icons';

interface IconProps {
  className?: string;
  'aria-hidden'?: string;
}

export const MenuItem: React.FC<{
  icon: IconType;
  lable: string;
  link: string;
  mobile?: boolean;
}> = ({ icon, lable, link, mobile = false }) => {
  const IconComponent = icon as unknown as React.ComponentType<IconProps>;

  const menuItemWrapperClassName =
    'group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50';
  const labelClassName = classNames(
    `font-semibold hover:text-travvit-blue self-center`,
    mobile ? 'text-slate-300' : 'text-gray-900',
  );
  const iconWrapperClassName = mobile
    ? 'flex h-11 w-11 flex-none items-center justify-center'
    : 'flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white';
  const iconClassName = classNames(
    'w-6 h-6',
    mobile
      ? 'text-slate-300 group-hover:text-indigo-600'
      : 'text-gray-600 group-hover:text-indigo-600',
  );

  return (
    <div className={menuItemWrapperClassName}>
      <div className={iconWrapperClassName}>
        <IconComponent className={iconClassName} aria-hidden="true" />
      </div>
      <a href={link} className={labelClassName}>
        {lable}
      </a>
    </div>
  );
};
