import React from 'react';
import { useSelector } from 'react-redux';

const FormSubmissionOverlay = ({ loading, success, failure, redirectUrl }) => {
  const submissionStatus = useSelector((state) => state.formSubmissionStatus);

  const renderOverlay = () => {
    if (submissionStatus === 'LOADING' || loading) {
      return (
        <div className="form-submission-overlay">
          <div className="overlay-spinner"></div>
        </div>
      );
    } else if (submissionStatus === 'SUCCESS' || success) {
      // You can perform any additional actions for success, like redirecting to a URL
      // For example, using React Router's history.push(redirectUrl) to navigate to the desired URL
      return null;
    } else if (submissionStatus === 'FAILURE' || failure) {
      // Handle failure scenario and display any errors, if applicable
      return (
        <div className="form-submission-overlay failure">
          <p>Form submission failed. Please try again.</p>
        </div>
      );
    }
    return null;
  };

  return renderOverlay();
};

export default FormSubmissionOverlay;
