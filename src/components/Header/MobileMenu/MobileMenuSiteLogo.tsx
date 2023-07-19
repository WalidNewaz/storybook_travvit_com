import React from 'react';
import type { clickHandler } from '../../../types';
import { TravvitLogo } from '../../TravvitLogo/TravvitLogo';
import { FaXmark } from 'react-icons/fa6';

export const MobileMenuSiteLogo: React.FC<{ onClick: clickHandler }> = ({
  onClick,
}) => (
  <div id="logo-close" className="mb-8 flex justify-between">
    <TravvitLogo size="xs" />
    <button
      className="top-2 right-2 text-slate-200"
      onClick={onClick}
      data-testid="mobile-toggle-menu"
    >
      <FaXmark className="icon !text-slate-300" />
    </button>
  </div>
);

export default MobileMenuSiteLogo;
