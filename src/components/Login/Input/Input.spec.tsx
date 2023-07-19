/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Formik, Form } from 'formik';
import { Input } from './Input';

describe('Input', () => {
  test('should render input component with label and placeholder', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Input
            name="username"
            type="text"
            label="Username"
            placeholder="Enter your username"
          />
        </Form>
      </Formik>,
    );

    const inputElement = getByLabelText('Username');
    const placeholderElement = getByPlaceholderText('Enter your username');

    expect(inputElement).toBeInTheDocument();
    expect(placeholderElement).toBeInTheDocument();
  });

  test('should handle input change', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Input
            name="username"
            type="text"
            label="Username"
            onChange={handleChange}
          />
        </Form>
      </Formik>,
    );

    const inputElement = getByLabelText('Username');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue('test');
  });

  // Add more test cases as needed
});
