import React from 'react';

import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, GithubIcon } from '../Icons';

export const TravvitFooter: React.FC = () => {
  return (
    <footer>
      <div id="footer-wrapper" className="pt-32 pl-8 pr-8 pb-2 max-w-full">
        <section id="branding-menu" className="flex flex-col basis-1/2">
          <section id="branding">
            <TravvitLogo size="small" />
            <p className="text-sm mt-8 text-slate-900 dark:text-white">
              Explore Together!
            </p>
            <div id="social-links" className="flex mt-8">
              <a href="#" className="footer-social">
                <FacebookIcon />
              </a>
              <a href="#" className="footer-social">
                <InstagramIcon />
              </a>
              <a href="#" className="footer-social">
                <YoutubeIcon />
              </a>
              <a href="#" className="footer-social">
                <GithubIcon />
              </a>
            </div>
          </section>
          <section id="menu" className="grid grid-cols-2 gap-8 mt-16">
            <section
              id="menu-group-1"
              className="md:grid md:grid-cols-2 md:gap-4"
            >
              <div id="discover">
                <h3 className="font-bold text-travvit-orange">Discover</h3>
                <ul className="mt-6">
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Places
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Activities
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Trips
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Explorers
                    </a>
                  </li>
                </ul>
              </div>
              <div id="company" className="mt-10 md:mt-0">
                <h3 className="font-bold text-travvit-orange">Company</h3>
                <ul className="mt-6">
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      About
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Blog
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Jobs
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Press
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section
              id="menu-group-2"
              className="md:grid md:grid-cols-2 md:gap-4"
            >
              <div id="legal">
                <h3 className="font-bold text-travvit-orange">Legal</h3>
                <ul className="mt-6">
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Privacy
                    </a>
                  </li>
                  <li className="mt-4 first:mt-0">
                    <a href="#" className="footer-menu-item">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </section>
        <section
          id="copyright"
          className="flex flex-col basis-1/2 mt-20 pt-8 pb-8 border-t text-slate-600 dark:text-slate-400"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Travvit. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
};
