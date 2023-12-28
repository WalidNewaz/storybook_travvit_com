import React from 'react';

import { Badge } from '../../Badge/Badge';
import { UserInviteStatus } from './index';

/**
 * The status badge for a user invite.
 * @param params
 * @returns
 */
const StatusBadge: React.FC<{ status: UserInviteStatus }> = ({ status }) => {
  switch (status) {
    case UserInviteStatus.CREATED:
      return <Badge label="Created" />;
    case UserInviteStatus.PENDING:
      return <Badge label="Pending" color="blue" />;
    case UserInviteStatus.ACCEPTED:
      return <Badge label="Accepted" color="green" />;
    case UserInviteStatus.REJECTED:
      return <Badge label="Rejected" color="red" />;
    case UserInviteStatus.CANCELED:
      return <Badge label="Canceled" color="purple" />;
    default:
      return <Badge label="Unknown" />;
  }
};

export default StatusBadge;
