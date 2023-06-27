import React from 'react';
import '../../../src/tailwind.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="global-wrapper grid gap-4 sm:grid-cols-3 sm:gap-2 sm:place-items-center md:grid-col-3">
      {children}
    </div>
  );
};
