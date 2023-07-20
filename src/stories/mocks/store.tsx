import React from 'react';

import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import nearbyActivities from './activities/nearby_activities.json';

// A super-simple mock of the state of the store
export const mockedState = {
  activities: [],
  status: 'idle',
  error: null,
};

// A super-simple mock of a redux store
export const Mockstore = ({ ActivitiesPageData, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        activities: createSlice({
          name: 'nearbyActivities',
          initialState: ActivitiesPageData,
          reducers: {},
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);
