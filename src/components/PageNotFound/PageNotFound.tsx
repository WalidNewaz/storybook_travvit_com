import React from 'react';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';
import PageNotFoundProps from './PageNotFound.interface';
import { FaArrowLeft } from 'react-icons/fa6';

export const PageNotFound: React.FC<PageNotFoundProps> = ({
  imageProps,
  className,
}) => {
  const baseClassName = className || 'text-slate-100 drop-shadow-md';
  return (
    <main className={`isolate isolation-[100%] min-h-full h-screen relative`}>
      <TravvitLogo
        size="xs"
        containerClasses="absolute object-top object-cover flex w-full justify-center mt-24 drop-shadow-lg"
      />
      {imageProps && (
        <ResponsiveImage
          {...imageProps}
          aria-label="media-image"
          data-testid="media-image"
          className={`absolute object-top object-cover w-full h-full z-[-10] max-w-full ${imageProps.className}`}
        />
      )}
      <div
        className={`lg:px-8 sm:py-40 px-6 py-32 text-center max-w-7xl mx-auto`}
      >
        <p className={`${baseClassName} leading-8 font-semibold text-base`}>
          404
        </p>
        <h1
          className={`${baseClassName} text-5xl tracking-tight font-bold mt-4`}
        >
          Page not found
        </h1>
        <p className={`${baseClassName} mt-6 text-base leading-6`}>
          Sorry, but the area of the site you've currently ventured into does
          not exist or is unavailable at the moment.
        </p>
        <div className={`flex justify-center mt-12`}>
          <a
            href="#"
            className={`${baseClassName} leading-7 font-semibold text-sm`}
          >
            <span aria-hidden="true" className="pt-1">
              <FaArrowLeft className="h-5 w-5 ml-2" aria-hidden="true" />
            </span>
            Back to home
          </a>
        </div>
      </div>
    </main>
  );
};
