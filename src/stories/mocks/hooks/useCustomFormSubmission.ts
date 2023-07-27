// useCustomFormSubmission.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  FormStates,
  setFormStatus,
  setFormError,
} from '../forms/formSubmissionSlice';

export const useCustomFormSubmission = (formName: string) => {
  const dispatch = useDispatch();
  const formStatus = useSelector(
    (state: RootState) => state.formSubmission.formStatus[formName],
  );
  const error = useSelector(
    (state: RootState) => state.formSubmission.errors[formName],
  );

  const submitForm = async (formData: FormData, apiUrl: string) => {
    dispatch(setFormStatus({ formName, status: FormStates.LOADING }));

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      dispatch(setFormStatus({ formName, status: FormStates.SUCCESS }));
      dispatch(setFormError({ formName, error: null }));
    } catch (error: any) {
      dispatch(setFormStatus({ formName, status: FormStates.FAILURE }));
      dispatch(setFormError({ formName, error: error.message }));
    }
  };

  return { formStatus, error, submitForm };
};
