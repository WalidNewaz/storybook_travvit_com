import React from 'react';
import { FaBars } from 'react-icons/fa6';
import HamburgerMenuProps from './HamburgerMenu.interface';

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  onClick,
}) => (
  <div id="ham-menu" className="flex visible md:hidden">
    <button className="p-2" onClick={onClick} aria-label="Toggle menu">
      <span className="absolute w-px h-px p-0 -m-px overflow-hidden clip-none whitespace-nowrap border-0">
        Open main menu
      </span>
      <FaBars
        className={`icon ${isOpen ? 'text-indigo-600' : 'text-slate-900'}`}
        aria-label="Toggle icon"
      />
    </button>
  </div>
);
