import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { regState } from './types';

const initialState: regState = {
  userName: '',
  password: '',
};

export const regSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setUserName, setPassword } = regSlice.actions;

export default regSlice.reducer;
