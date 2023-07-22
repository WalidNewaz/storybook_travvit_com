import { createSlice } from '@reduxjs/toolkit';
import { ActivityType } from '../../../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';
import ActivitiesService from './activities.service';

const activitiesService = new ActivitiesService();

interface AddActivityAction {
  type: string;
  payload: ActivityType;
}

interface AddActivitiesAction {
  type: string;
  payload: ActivityType[];
}

interface DataState {
  data: ActivityType[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
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
      state.loading = false;
    },
  },
});

export const { addActivity } = activitiesSlice.actions;

/** Thunks */
export const getActivitiesNearMe = () => async (dispatch: any) => {
  try {
    // const response = await fetch('/api/activities');
    const response = await activitiesService.getActivitiesNearMe();
    // const data = await response.json();
    dispatch(activitiesSlice.actions.addActivities(response));
  } catch (error) {
    console.error(error);
  }
};
// export const getActivitiesNearMe = createAsyncThunk(
//   'activities/getActivitiesNearMe',
//   async () => {
//     try {
//       const response = await activitiesService.getActivitiesNearMe();
//       // dispatch(activitiesSlice.actions.addActivities(response));
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

/** Selectors */
export const selectAllActivities = (state: any) => state.activities.data;

export const selectActivityById = (state: any, activityId: string) =>
  state.activities.data.find(
    (activity: ActivityType) => activity.id === activityId,
  );

export default activitiesSlice.reducer;
