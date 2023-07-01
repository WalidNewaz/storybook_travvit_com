import React from 'react';

export const TravvitFooter: React.FC = () => {
  return (
    <footer className="flex flex-row items-center justify-center w-full h-24 border-t">
      <section className="flex flex-col basis-1/2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <a
            href="#"
            className="font-bold text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Company Name
          </a>
          . All rights reserved.
        </p>
      </section>
      <section className="flex flex-col basis-1/2">
        <p className="text-sm">
          <a
            href="#"
            className="font-bold text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </p>
      </section>
    </footer>
  );
};
