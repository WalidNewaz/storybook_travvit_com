import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { User, UserType } from '../../../types';
import ProfileService from './profile.service';
import type { RequestStatus } from '../../../types';

const profileService = new ProfileService();

interface LoginAction {
  type: string;
  payload: {
    username: string;
    password: string;
  };
}

export interface DataState {
  user: User<UserType> | object | null;
  status: RequestStatus;
  error: string | null | undefined;
}

const initialState: DataState = {
  user: null,
  status: 'idle',
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default profileSlice.reducer;

/** Thunks */
export const login = createAsyncThunk(
  'profile/login',
  async (payload: { username: string; password: string }) => {
    try {
      const user = await profileService.login(
        payload.username,
        payload.password,
      );
      return user;
    } catch (error) {
      throw error;
    }
  },
);

export const logout = createAsyncThunk('profile/logout', async () => {
  try {
    await profileService.logout();
  } catch (error) {
    throw error;
  }
});
