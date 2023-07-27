// formSubmissionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define an Enum type for form state
export enum FormStates {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

interface FormSubmissionState {
  formStatus: { [key: string]: FormStates };
  errors: { [key: string]: string | null };
}

const initialState: FormSubmissionState = {
  formStatus: {},
  errors: {},
};

const formSubmissionSlice = createSlice({
  name: 'formSubmission',
  initialState,
  reducers: {
    setFormStatus(
      state,
      action: PayloadAction<{ formName: string; status: FormStates }>,
    ) {
      const { formName, status } = action.payload;
      state.formStatus[formName] = status;
    },
    setFormError(
      state,
      action: PayloadAction<{ formName: string; error: string | null }>,
    ) {
      const { formName, error } = action.payload;
      state.errors[formName] = error;
    },
  },
});

export const { setFormStatus, setFormError } = formSubmissionSlice.actions;

export default formSubmissionSlice.reducer;
