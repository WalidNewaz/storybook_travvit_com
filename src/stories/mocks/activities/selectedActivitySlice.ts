import { createSlice } from '@reduxjs/toolkit';

interface DataState {
  type: string;
}

const initialState: DataState = {
  type: 'All Activities',
};

const selectedActivitySlice = createSlice({
  name: 'selectedActivity',
  initialState,
  reducers: {
    setSelectedActivity: (state, action) => {
      const { type } = action.payload;
      state.type = type;
    },
  },
});

export default selectedActivitySlice.reducer;
export const { setSelectedActivity } = selectedActivitySlice.actions;

/** Selectors */
export const getSelectedActivityType = (state: any) => {
  return state.selectedActivity.type;
};
