/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateTaskState } = TasksSlice.actions;

const defaultActivities = [
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
];

const ActivitiesPageData = {
  activities: defaultActivities,
  status: 'idle',
  error: null,
};

const ActivitiesSlice = createSlice({
  name: 'nearbyActivities',
  initialState: ActivitiesPageData,
  reducers: {},
});

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
    activities: ActivitiesSlice.reducer,
  },
});

// const reducer = combineReducers({
//   taskbox: TasksSlice.reducer,
//   activities: ActivitiesSlice.reducer,
// });

// const store = createStore(reducer);

export default store;
