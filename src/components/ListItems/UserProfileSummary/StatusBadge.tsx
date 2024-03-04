import React from 'react';

import { Badge } from '../../Badge/Badge';

export enum UserStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  SUSPENDED = 'suspended',
  CANCELLED = 'cancelled',
}

/**
 * Renders a badge with the user status
 * @param status
 * @param className
 * @returns
 */
const StatusBadge: React.FC<{
  status: UserStatus;
  className?: string;
}> = ({ status, className }) => {
  switch (status) {
    case UserStatus.PENDING:
      return <Badge label="Pending" color="blue" className={className} />;
    case UserStatus.ACTIVE:
      return <Badge label="Active" color="green" className={className} />;
    case UserStatus.ARCHIVED:
      return <Badge label="Archived" color="red" className={className} />;
    case UserStatus.SUSPENDED:
      return <Badge label="Suspended" color="purple" className={className} />;
    case UserStatus.CANCELLED:
      return <Badge label="Cancelled" color="gray" className={className} />;
    default:
      return <Badge label="Unknown" className={className} />;
  }
};

export default StatusBadge;
