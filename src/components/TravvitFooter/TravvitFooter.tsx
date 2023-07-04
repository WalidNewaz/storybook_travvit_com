import React from 'react';

import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, GithubIcon } from '../Icons';

const FOOTER_WRAPPER_CLASSES = 'pt-32 pl-8 pr-8 pb-2 max-w-full';
const BRAND_MENU_CLASSES = 'flex flex-col basis-1/2';
const FOOTER_TEXT_CLASSES = 'text-sm mt-8 text-slate-900 dark:text-white';
const MENU_CLASSES = 'grid grid-cols-2 gap-8 mt-16';
const MENU_GROUP_CLASSES = 'md:grid md:grid-cols-2 md:gap-4';
const MENU_HEADER_CLASSES = 'font-bold text-travvit-orange';
const COPYRIGHT_CLASSES =
  'flex flex-col basis-1/2 mt-20 pt-8 pb-8 border-t text-slate-600 dark:text-slate-400';

export const TravvitFooter: React.FC = () => {
  return (
    <footer>
      <div className={FOOTER_WRAPPER_CLASSES}>
        <nav className={BRAND_MENU_CLASSES}>
          <section className="branding">
            <TravvitLogo size="small" />
            <p className={FOOTER_TEXT_CLASSES}>Explore Together!</p>
            <div id="social-links" className="flex mt-8">
              <a href="#" className="footer-social-link">
                <FacebookIcon classes="icon" />
              </a>
              <a href="#" className="footer-social-link">
                <InstagramIcon classes="icon" />
              </a>
              <a href="#" className="footer-social-link">
                <YoutubeIcon classes="icon" />
              </a>
              <a href="#" className="footer-social-link">
                <GithubIcon classes="icon" />
              </a>
            </div>
          </section>
          <section className={MENU_CLASSES}>
            <div className={MENU_GROUP_CLASSES}>
              <div className="discover">
                <h3 className={MENU_HEADER_CLASSES}>Discover</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Places
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Activities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Trips
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Explorers
                    </a>
                  </li>
                </ul>
              </div>
              <div id="company" className="mt-10 md:mt-0">
                <h3 className={MENU_HEADER_CLASSES}>Company</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={MENU_GROUP_CLASSES}>
              <div id="legal">
                <h3 className={MENU_HEADER_CLASSES}>Legal</h3>
                <ul className="footer-menu">
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-menu-item-link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
        <section className={COPYRIGHT_CLASSES}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Travvit. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};
