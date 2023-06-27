import React, { useState } from 'react';
import './button.css';
import { Button } from './Button';
import { ButtonProps } from './Button';

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
export const ButtonWithHooks = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};