import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { breathState } from './types';

const initialState: breathState = {
  vdoh: 5,
  zad: [10, 12, 14, 16, 20, 23, 39, 39, 39, 20, 29],
  started: false,
  isVdoh: false,
  isVidoh: false,
  finished: 0,
  itter: 0,
  hint: 'Вдох',
};

export const breathSlice = createSlice({
  name: 'breath',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    stop: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    setIsVdoh: (state, action: PayloadAction<boolean>) => {
      state.isVdoh = action.payload;
    },
    setIsVidoh: (state, action: PayloadAction<boolean>) => {
      state.isVidoh = action.payload;
    },
  },
});

export const { start, stop, setDifficulty, setIsVdoh, setIsVidoh } = breathSlice.actions;
export default breathSlice.reducer;
