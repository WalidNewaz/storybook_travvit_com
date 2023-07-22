import React from 'react';

import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import nearbyActivities from './activities/nearby_activities.json';
import { user as defaultUser } from './user';
import activitiesReducer from './activities/activitiesSlice';
import placesReducer from './places/placesSlice';
import selectedActivityReducer from './activities/selectedActivitySlice';

// A super-simple mock of the state of the store
export const mockedState = {
  activities: [],
  loggedInUser: {
    user: defaultUser,
    status: 'idle',
    error: null,
  },
  status: 'idle',
  error: null,
};

export const mockedUserState = {
  loggedInUser: {
    user: defaultUser,
    status: 'idle',
    error: null,
  },
};

// A super-simple mock of a redux store
export const Mockstore = ({ ActivitiesPageData, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        activities: activitiesReducer,
        places: placesReducer,
        selectedActivity: selectedActivityReducer,
        // activities: createSlice({
        //   name: 'nearbyActivities',
        //   initialState: ActivitiesPageData,
        //   reducers: {},
        // }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);
