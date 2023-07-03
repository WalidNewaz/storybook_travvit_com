import React, { useState } from 'react';

import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { HambugerIcon, CloseIcon } from '../Icons';

export const TravvitHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="flex justify-between pl-8 pr-8">
        <a href="#" className="inline-flex">
          <TravvitLogo size="xs" />
          <h1 className="pl-1 text-travvit-blue">Travvit</h1>
        </a>
        <div id="ham-menu" className="flex visible md:hidden">
          <button className="p-2" onClick={handleMenuToggle}>
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden clip-none whitespace-nowrap border-0">
              Open main menu
            </span>
            {menuOpen ? (
              <CloseIcon classes="text-slate-900 dark:text-white text-slate-300 mr-1" />
            ) : (
              <HambugerIcon classes="text-slate-900 dark:text-white" />
            )}
          </button>
        </div>
        <div id="main-menu" className="hidden md:visible md:block pt-3">
          <a href="#" className="ml-8 first:ml-0 main-menu-item-link">
            Discover Places
          </a>
          <a href="#" className="ml-8 first:ml-0 main-menu-item-link">
            Start a Trip
          </a>
          <a href="#" className="ml-8 first:ml-0 main-menu-item-link">
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-95 flex flex-col pl-8 pr-8 pt-5 z-20">
            <div className="relative pt-4">
              <div id="logo-close" className="mb-16 flex justify-between">
                <TravvitLogo size="xs" />
                <button
                  className="top-2 right-2 text-slate-300"
                  onClick={handleMenuToggle}
                >
                  <CloseIcon />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <a href="#" className="main-menu-item-link">
                  Discover Places
                </a>
                <a href="#" className="main-menu-item-link">
                  Start a Trip
                </a>
                <div className="border-t pt-8" style={{ marginTop: '2rem' }}>
                  <a href="#" className="main-menu-item-link">
                    Log in <span aria-hidden="true">→</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
