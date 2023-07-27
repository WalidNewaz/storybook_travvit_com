import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RequestStatus } from '../../../types';
import { PlaceType } from '../../../components/ContentCardGroup/PlaceCardGroup/PlaceCardGroup.interface';
import PlacesService from './places.service';
import { RootState } from '../store';
import { error } from 'console';

const placesService = new PlacesService();

interface DataState {
  data: PlaceType[];
  status: RequestStatus;
  error: string | null | undefined;
}

const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPlaces.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getAllPlaces.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(getAllPlaces.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(getPlaceById.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getPlaceById.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(getPlaceById.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(createPlace.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(createPlace.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(createPlace.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(updatePlace.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(updatePlace.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(updatePlace.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(deletePlace.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(deletePlace.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(deletePlace.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default placesSlice.reducer;

export const { resetStatus } = placesSlice.actions;

/** Thunks */
export const getAllPlaces = createAsyncThunk(
  'places/getAllPlaces',
  async () => {
    try {
      const response = await placesService.getAllPlaces();
      return response;
    } catch (error) {
      console.log('getAllPlaces error', error);
      throw error;
    }
  },
);

export const getPlaceById = createAsyncThunk(
  'places/getPlaceById',
  async (id: string) => {
    try {
      const response = await placesService.getPlaceById(id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const createPlace = createAsyncThunk(
  'places/createPlace',
  async (place: any) => {
    try {
      const response = await placesService.createPlace(place);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const updatePlace = createAsyncThunk(
  'places/updatePlace',
  async (place: any) => {
    try {
      const response = await placesService.updatePlace(place);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const deletePlace = createAsyncThunk(
  'places/deletePlace',
  async (id: string) => {
    try {
      const response = await placesService.deletePlace(id);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
