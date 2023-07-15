// actions.ts

import {
  ActionTypes,
  FetchNearbyActivitiesSuccessAction,
  FetchNearbyActivitiesFailureAction,
} from './types';

// Action creators
export const fetchNearbyActivitiesSuccess = (
  activities: Activity[],
): FetchNearbyActivitiesSuccessAction => ({
  type: ActionTypes.FETCH_NEARBY_ACTIVITIES_SUCCESS,
  payload: activities,
});

export const fetchNearbyActivitiesFailure = (
  error: string,
): FetchNearbyActivitiesFailureAction => ({
  type: ActionTypes.FETCH_NEARBY_ACTIVITIES_FAILURE,
  payload: error,
});
