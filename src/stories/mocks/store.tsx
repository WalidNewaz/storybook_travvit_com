import React from 'react';

import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// A super-simple mock of the state of the store
export const mockedState = {
  activities: [
    {
      id: '1',
      mediaType: 'image',
      imageProps: {
        sources: [
          {
            srcSet: 'red-rocks-trading-post-trail.webp',
            type: 'image/webp',
          },
        ],
        src: 'red-rocks-trading-post-trail.jpeg',
        alt: 'Red Rocks Trading Post Trail',
        className: '',
      },
      badges: ['Hiking'],
      name: 'Red Rocks Trading Post Trail',
      slug: 'red-rocks-trading-post-trail',
      place: {
        id: '1',
        name: 'Red Rocks Trading Post Trail',
        slug: 'red-rocks-trading-post-trail',
      },
      createdBy: {
        id: '1',
        name: 'John Doe',
        avatar: 'avatar-john-doe-1.jpeg',
        slug: 'john-doe-1',
      },
      rating: 4.5,
    },
    {
      id: '2',
      mediaType: 'image',
      imageProps: {
        sources: [
          {
            srcSet: 'red-rocks-trading-post-trail.webp',
            type: 'image/webp',
          },
        ],
        src: 'red-rocks-trading-post-trail.jpeg',
        alt: 'Red Rocks Trading Post Trail',
        className: '',
      },
      badges: ['Hiking'],
      name: 'Red Rocks Trading Post Trail',
      slug: 'red-rocks-trading-post-trail',
      place: {
        id: '1',
        name: 'Red Rocks Trading Post Trail',
        slug: 'red-rocks-trading-post-trail',
      },
      createdBy: {
        id: '1',
        name: 'John Doe',
        avatar: 'avatar-john-doe-1.jpeg',
        slug: 'john-doe-1',
      },
      rating: 4.5,
    },
  ],
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
