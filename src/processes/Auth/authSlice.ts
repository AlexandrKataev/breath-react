import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authState } from './types';

const initialState: authState = {
  email: null,
  token: null,
  id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    exitAuth: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setAuth, exitAuth } = authSlice.actions;

export default authSlice.reducer;
