import React from 'react';

import { Badge } from '../../Badge/Badge';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

/**
 * Renders a badge with the user role
 * @param role
 * @param className
 * @returns
 */
const RoleBadge: React.FC<{ role: UserRole; className?: string }> = ({
  role,
  className,
}) => {
  switch (role) {
    case UserRole.ADMIN:
      return <Badge label="Admin" color="purple" className={className} />;
    case UserRole.USER:
      return <Badge label="User" className={className} />;
    default:
      return <Badge label="Unknown" className={className} />;
  }
};

export default RoleBadge;
