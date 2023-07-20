/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ActivitySummaryType } from '../components/ContentCardGroup/ActivityCardGroup/ActivityCardGroup.interface';

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

/*
 * Creates an asyncThunk to fetch tasks from a remote endpoint.
 * You can read more about Redux Toolkit's thunks in the docs:
 * https://redux-toolkit.js.org/api/createAsyncThunk
 */
// export const fetchTasks = createAsyncThunk(
//   'activities/fetchActivitiesNearMe',
//   async () => {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/activities?userId=1',
//     );
//     const data = await response.json();
//     // const result = data.map((activities: ActivitySummaryType[]) => ({
//     //   id: `${task.id}`,
//     //   title: task.title,
//     //   state: task.completed ? 'TASK_ARCHIVED' : 'TASK_INBOX',
//     // }));
//     return data;
//   },
// );

type MediaType = 'image' | 'video';

const defaultActivities = [
  {
    id: '1',
    mediaType: 'image' as MediaType,
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
    mediaType: 'image' as MediaType,
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

interface ActivitiesPageDataType {
  activities: ActivitySummaryType[];
  status: string;
  error: null | string;
}

const ActivitiesPageData: ActivitiesPageDataType = {
  activities: defaultActivities,
  status: 'idle',
  error: null,
};

const ActivitiesSlice = createSlice({
  name: 'nearbyActivities',
  initialState: ActivitiesPageData,
  reducers: {},
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchTasks.pending, (state) => {
  //       state.status = 'loading';
  //       state.error = null;
  //       state.activities = [];
  //     })
  //     .addCase(fetchTasks.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.error = null;
  //       // Add any fetched tasks to the array
  //       state.activities = action.payload;
  //     })
  //     .addCase(fetchTasks.rejected, (state) => {
  //       state.status = 'failed';
  //       state.error = 'Something went wrong';
  //       state.activities = [];
  //     });
  // },
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
