// types.ts

// Define your action types
export enum ActionTypes {
  FETCH_NEARBY_ACTIVITIES_REQUEST = 'FETCH_NEARBY_ACTIVITIES_REQUEST',
  FETCH_NEARBY_ACTIVITIES_SUCCESS = 'FETCH_NEARBY_ACTIVITIES_SUCCESS',
  FETCH_NEARBY_ACTIVITIES_FAILURE = 'FETCH_NEARBY_ACTIVITIES_FAILURE',
}

// Define your action interfaces
export interface FetchNearbyActivitiesRequestAction {
  type: ActionTypes.FETCH_NEARBY_ACTIVITIES_REQUEST;
  payload: GeolocationPosition;
}

export interface FetchNearbyActivitiesSuccessAction {
  type: ActionTypes.FETCH_NEARBY_ACTIVITIES_SUCCESS;
  payload: Activity[];
}

export interface FetchNearbyActivitiesFailureAction {
  type: ActionTypes.FETCH_NEARBY_ACTIVITIES_FAILURE;
  payload: string;
}

// Create a union type for all the action types
export type AppActions =
  | FetchNearbyActivitiesRequestAction
  | FetchNearbyActivitiesSuccessAction
  | FetchNearbyActivitiesFailureAction;

// Define your state interfaces
export interface Activity {
  // Define the structure of your activity object
  id: string;
  name: string;
  // Add other properties as needed
}

export interface AppState {
  // Define the structure of your app state
  nearbyActivities: Activity[];
  loading: boolean;
  error: string | null;
}

// Define the root state type
export interface RootState {
  app: AppState;
  // Add other state slices as needed
}
