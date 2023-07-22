import { createSlice } from '@reduxjs/toolkit';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getPlacesNearMe: (state) => {
      state.loading = true;
    },
  },
});

export const { getPlacesNearMe } = placesSlice.actions;

export default placesSlice.reducer;
