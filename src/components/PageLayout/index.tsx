import React from 'react';
import '../../../src/tailwind.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="global-wrapper grid gap-6 place-items-center">
      {children}
    </div>
  );
};
