import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  extraElement?: React.ReactNode;
  autoComplete?: string; // Add the `autoComplete` prop
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
  autoComplete,
}) => (
  <div>
    <div className="flex items-center justify-between">
      <label htmlFor={name} className={LABEL_CLASSES}>
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
        autoComplete={autoComplete}
      />
    </div>
    <ErrorMessage name={name}>
      {(msg: string) => (
        <p className="mt-2 text-sm text-red-500 text-left">{msg}</p>
      )}
    </ErrorMessage>
  </div>
);
