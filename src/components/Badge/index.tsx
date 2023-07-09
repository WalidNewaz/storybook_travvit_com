import React from 'react';

type Color =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

interface BadgeProps {
  label: string;
  color?: Color;
  rounded?: boolean;
}

const BASE_CLASS_NAME = `inline-flex items-center px-2 py-1 text-xs font-medium ring-1 ring-inset`;

const colorClassNames: Record<string, string> = {
  gray: `bg-gray-50 text-gray-600 ring-gray-500/10`,
  red: `bg-red-50 text-red-700 ring-red-600/10`,
  yellow: `bg-yellow-50 text-yellow-800 ring-yellow-600/20`,
  green: `bg-green-50 text-green-700 ring-green-600/20`,
  blue: `bg-blue-50 text-blue-700 ring-blue-700/10`,
  indigo: `bg-indigo-50 text-indigo-700 ring-indigo-700/10`,
  purple: `bg-purple-50 text-purple-700 ring-purple-700/10`,
  pink: `bg-pink-50 text-pink-700 ring-pink-700/10`,
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'gray',
  rounded = false,
}) => {
  const badgeClassName = `${BASE_CLASS_NAME} ${colorClassNames[color]} ${
    rounded ? 'rounded-full' : 'rounded-md'
  }`;

  return <span className={badgeClassName}>{label}</span>;
};
