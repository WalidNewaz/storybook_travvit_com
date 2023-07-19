import React from 'react';
import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import InputProps from './Input.interface';

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

const Label: React.FC<{
  name: string;
  label: string;
  extraElement?: React.ReactNode;
}> = ({ name, label, extraElement }) => (
  <div className="flex items-center justify-between">
    <label htmlFor={name} className={LABEL_CLASSES}>
      {label}
    </label>
    {extraElement}
  </div>
);

const Field: React.FC<{
  name: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
}> = ({ name, type, placeholder, autoComplete, ...attributes }) => (
  <div className="mt-2">
    <FormikField
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={INPUT_CLASSES}
      autoComplete={autoComplete}
      {...attributes}
    />
  </div>
);

const ErrorMessage: React.FC<{
  name: string;
}> = ({ name }) => (
  <FormikErrorMessage name={name}>
    {(msg: string) => (
      <p className="mt-2 text-sm text-red-500 text-left">{msg}</p>
    )}
  </FormikErrorMessage>
);

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  placeholder,
  extraElement,
  autoComplete,
  ...attributes
}) => (
  <div>
    <Label name={name} label={label} extraElement={extraElement} />
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...attributes}
    />
    <ErrorMessage name={name} />
  </div>
);
