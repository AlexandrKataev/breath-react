import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { breathState } from './types';

const initialState: breathState = {
  time: 0,
  vdohTime: 7,
  zadTime: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  started: false,
  isVdoh: false,
  isZad: false,
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
      state.time = state.vdohTime;
      state.isVdoh = true;
      state.isZad = false;
      state.isVidoh = false;
      state.hint = 'Вдох';
    },
    stop: (state) => {
      state.started = false;
    },
    setDifficulty: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    setIsVdoh: (state) => {
      state.isVdoh = true;
      state.isZad = false;
      state.isVidoh = false;
      state.hint = 'Вдох';
    },
    setIsZad: (state) => {
      state.isVdoh = false;
      state.isZad = true;
      state.isVidoh = false;
      state.hint = 'Задержка';
    },
    setIsVidoh: (state) => {
      state.isVidoh = true;
      state.isZad = false;
      state.isVdoh = false;
      state.hint = 'Выдох';
    },
    resetItter: (state) => {
      state.itter = 0;
    },
    nextItter: (state) => {
      state.itter++;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    timeMinus: (state) => {
      state.time--;
    },
  },
});

export const {
  start,
  stop,
  setDifficulty,
  setIsVdoh,
  setIsZad,
  setIsVidoh,
  resetItter,
  nextItter,
  setTime,
  timeMinus,
} = breathSlice.actions;
export default breathSlice.reducer;
