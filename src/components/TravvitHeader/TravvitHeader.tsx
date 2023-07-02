import React, { useState } from 'react';

import { TravvitLogo } from '../TravvitLogo/TravvitLogo';

const HambugerIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-slate-900 dark:text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 5C2 4.44772 2.44772 4 3 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H3C2.44772 6 2 5.55228 2 5ZM3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H3ZM3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H3Z"
    ></path>
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-slate-900 dark:text-white text-slate-300 mr-1"
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7071 10L15.3536 15.3536C15.5488 15.5488 15.5488 15.8654 15.3536 16.0607C15.1583 16.256 14.8417 16.256 14.6464 16.0607L10 11.4142L5.35355 16.0607C5.15829 16.256 4.84171 16.256 4.64645 16.0607C4.45118 15.8654 4.45118 15.5488 4.64645 15.3536L9.29289 10.7071L4.64645 6.06066C4.45118 5.86539 4.45118 5.54882 4.64645 5.35355C4.84171 5.15829 5.15829 5.15829 5.35355 5.35355L10 9.99999L14.6464 5.35355C14.8417 5.15829 15.1583 5.15829 15.3536 5.35355C15.5488 5.54882 15.5488 5.86539 15.3536 6.06066L10.7071 10Z"
    ></path>
  </svg>
);

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
          <h1 className="pl-1 text-[#35B5E8]">Travvit</h1>
        </a>
        <div id="ham-menu" className="flex visible md:hidden">
          <button className="p-2" onClick={handleMenuToggle}>
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden clip-none whitespace-nowrap border-0">
              Open main menu
            </span>
            {menuOpen ? <CloseIcon /> : <HambugerIcon />}
          </button>
        </div>
        <div id="main-menu" className="hidden md:visible md:block">
          <a
            href="#"
            className="ml-8 first:ml-0 text-slate-600 hover:text-slate-900"
          >
            Discover Places
          </a>
          <a
            href="#"
            className="ml-8 first:ml-0 text-slate-600 hover:text-slate-900"
          >
            Start a Trip
          </a>
          <a
            href="#"
            className="ml-8 first:ml-0 text-slate-600 hover:text-slate-900"
          >
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
                <a href="#" className="text-slate-300 footer-menu-item">
                  Discover Places
                </a>
                <a href="#" className="text-slate-300 footer-menu-item">
                  Start a Trip
                </a>
                <div className="border-t pt-8" style={{ marginTop: '2rem' }}>
                  <a href="#" className="text-slate-300 footer-menu-item">
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
