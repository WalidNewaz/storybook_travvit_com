import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

/**
 * This component renders the approved badge for a trip user.
 * @param params
 * @returns
 */
const ApprovedBadge: React.FC<{ approved: boolean }> = ({ approved }) =>
  approved && (
    <FaCircleCheck className="h-4 w-4 flex-none text-emerald-500 relative -left-6 top-7" />
  );

export default ApprovedBadge;
