import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  extraElement?: React.ReactNode;
}

const LABEL_CLASSES = `
  block text-sm font-medium
  leading-6 text-gray-900`;

const INPUT_CLASSES = `
  block w-full rounded-lg
  border-0 py-1.5 px-4 
  text-gray-900 shadow-sm 
  ring-1 ring-inset ring-gray-300 
  placeholder:text-gray-400
  focus:ring-2 focus:ring-inset
  focus:ring-indigo-600
  sm:text-sm sm:leading-6
`;

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  placeholder,
  extraElement,
}) => (
  <div>
    <div className="flex items-center justify-between">
      <label htmlFor="password" className={LABEL_CLASSES}>
        {label}
      </label>
      {extraElement}
    </div>
    <div className="mt-2">
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={INPUT_CLASSES}
      />
    </div>
    <ErrorMessage name="password" className="mt-2 text-sm text-red-500">
      {(msg: string) => <p className="mt-2 text-sm text-red-500">{msg}</p>}
    </ErrorMessage>
  </div>
);
