import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ActivityType } from '../../../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';
import ActivitiesService from './activities.service';
import type { RequestStatus } from '../../../types';

const activitiesService = new ActivitiesService();

interface AddActivityAction {
  type: string;
  payload: ActivityType;
}

interface AddActivitiesAction {
  type: string;
  payload: ActivityType[];
}

export interface DataState {
  data: ActivityType[];
  status: RequestStatus;
  error: string | null | undefined;
}

const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: (state, action: AddActivityAction) => {
      state.data.push(action.payload);
    },
    addActivities: (state, action: AddActivitiesAction) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllActivities.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getAllActivities.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(getAllActivities.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { addActivity } = activitiesSlice.actions;

/** Thunks */
// export const getActivitiesNearMe = () => async (dispatch: any) => {
//   try {
//     // const response = await fetch('/api/activities');
//     const response = await activitiesService.getActivitiesNearMe();
//     // const data = await response.json();
//     dispatch(activitiesSlice.actions.addActivities(response));
//   } catch (error) {
//     console.error(error);
//   }
// };
export const getAllActivities = createAsyncThunk(
  'activities/getAllActivities',
  async () => {
    try {
      const response = await activitiesService.getActivitiesNearMe();
      return response;
    } catch (error) {
      throw error;
    }
  },
);

/** Selectors */
export const selectAllActivities = (state: any) => state.activities;

export const selectActivityById = (state: any, activityId: string) =>
  state.activities.data.find(
    (activity: ActivityType) => activity.id === activityId,
  );

export default activitiesSlice.reducer;

// export const { getAllActivities } = activitiesSlice.actions;
