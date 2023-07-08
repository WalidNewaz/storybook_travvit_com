import React from 'react';

interface NotFoundPageProps {
  backgroundImg: string;
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  backgroundImg,
  className,
}) => {
  const baseClassName = className || 'text-slate-100 drop-shadow-lg';
  return (
    <main className={`isolate isolation-[100%] min-h-full relative`}>
      <img
        src={backgroundImg}
        alt=""
        className={`absolute object-top object-cover w-full h-full z-[-10] max-w-full`}
      ></img>
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
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className={`flex justify-center mt-12`}>
          <a
            href="#"
            className={`${baseClassName} leading-7 font-semibold text-sm`}
          >
            <span aria-hidden="true">←</span> Back to home
          </a>
        </div>
      </div>
    </main>
  );
};
