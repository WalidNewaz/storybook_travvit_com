import React, { useState, useEffect } from 'react';
import './FormSubmissionOverlay.css';
import { FormStates } from '../enums';

const FormSubmissionOverlay: React.FC<{
  formState: FormStates;
  loadingMessage?: string;
  hidden?: boolean;
  className?: string;
}> = ({
  formState,
  hidden = true,
  loadingMessage = 'Submitting...',
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hidden) return;
    // Use a timeout to wait for the component to be rendered
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [hidden]);

  const renderOverlay = () => {
    if (formState === FormStates.LOADING) {
      return (
        <div
          className={`form-submission-overlay flex flex-col ${
            isVisible ? 'fade-in' : 'fade-out'
          }
          ${hidden ? 'hidden' : 'block'}
          ${className}
        `}
        >
          <div className="overlay-spinner"></div>
          <p className="overlay-text text-slate-100 pt-4">{loadingMessage}</p>
        </div>
      );
    }
    return null;
  };

  return renderOverlay();
};

export default FormSubmissionOverlay;
