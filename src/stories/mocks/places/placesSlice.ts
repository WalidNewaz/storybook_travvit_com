import { createSlice } from '@reduxjs/toolkit';
import type { RequestStatus } from '../../../types';
import { PlaceType } from '../../../components/ContentCardGroup/PlaceCardGroup/PlaceCardGroup.interface';

interface DataState {
  data: PlaceType[];
  status: RequestStatus;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
});

export default placesSlice.reducer;
