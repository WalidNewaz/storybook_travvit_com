import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TravvitLogo } from '../TravvitLogo/TravvitLogo';
import { Button } from '../Button/Button';
import { Input } from './Input/Input';
import LoginProps from './Login.interface';

const LOGIN_BTN_CLASSES = `
  flex w-full justify-center
  bg-travvit-orange-900
  border-travvit-orange-900
  hover:bg-travvit-orange
  hover:border-travvit-orange`;

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormHeader: React.FC = () => (
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <TravvitLogo size="small" containerClasses="flex justify-center" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Welcome to Travvit
    </h2>
  </div>
);

const ForgotPassword: React.FC = () => (
  <div className="text-sm">
    <a
      href="#"
      className="font-semibold text-travvit-blue-800 hover:text-travvit-blue-500"
    >
      Forgot password?
    </a>
  </div>
);

const Disclaimer: React.FC = () => (
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
);

const Register: React.FC = () => (
  <p className="mt-10 text-center text-sm text-gray-500">
    Not a member?{' '}
    <a
      href="#"
      className="font-semibold leading-6 text-travvit-blue-800 hover:text-travvit-blue-500"
    >
      Register here.
    </a>
  </p>
);

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleSubmit = (values: { email: string; password: string }) => {
    onLogin(values.email, values.password);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <FormHeader />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6" action="#" method="POST">
              <Input
                name="email"
                type="email"
                label="Email address"
                placeholder="Email address"
              />

              <Input
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                extraElement={<ForgotPassword />}
              />
              <div className="pt-4">
                <Button
                  primary
                  label="Log In"
                  className={LOGIN_BTN_CLASSES}
                  type="submit"
                />
              </div>
            </Form>
          </Formik>
          <Disclaimer />

          <Register />
        </div>
      </div>
    </>
  );
};
