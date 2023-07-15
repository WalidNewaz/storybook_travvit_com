import nearbyActivities from '../stories/mocks/nearby_activities.json';
import { Dispatch } from 'redux';
import { AppActions, RootState } from './types';

export const fetchNearbyActivities = (position: GeolocationPosition) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => RootState) => {
    try {
      // Perform API request to fetch nearby activities based on position
      // const response = await fetch(`${API_BASE_URL}/activities?lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
      // const data = await response.json();
      const data = nearbyActivities;

      // Dispatch a success action with the fetched data
      dispatch(fetchNearbyActivitiesSuccess(data));
    } catch (error) {
      // Dispatch an error action if the request fails
      dispatch(fetchNearbyActivitiesFailure(error.message));
    }
  };
};

export const fetchNearbyActivitiesSuccess = (data) => ({
  type: 'FETCH_NEARBY_ACTIVITIES_SUCCESS',
  payload: data,
});

export const fetchNearbyActivitiesFailure = (error) => ({
  type: 'FETCH_NEARBY_ACTIVITIES_FAILURE',
  payload: error,
});
