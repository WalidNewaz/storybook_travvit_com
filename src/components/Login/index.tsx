import React from 'react';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { Button } from '../Button/Button';

export const Login: React.FC = () => {
  const LOGIN_BTN_CLASSES = `flex w-full justify-center bg-travvit-orange-900 border-travvit-orange-900 hover:bg-travvit-orange hover:border-travvit-orange`;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <TravvitLogo size="small" containerClasses="flex justify-center" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome to Travvit
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-travvit-blue-800 hover:text-travvit-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button primary label="Log In" className={LOGIN_BTN_CLASSES} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            By continuing, you agree to Travvit's{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-travvit-blue-800 hover:text-travvit-blue-500"
            >
              Terms of Service
            </a>
            , and acknowledge that you've read our{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-travvit-blue-800 hover:text-travvit-blue-500"
            >
              Privacy Policy.
            </a>
          </p>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-travvit-blue-800 hover:text-travvit-blue-500"
            >
              Register here.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
