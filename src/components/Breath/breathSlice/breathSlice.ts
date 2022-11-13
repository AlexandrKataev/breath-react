import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { breathState } from './types';

const initialState: breathState = {
  time: 0,
  vdohTime: 10,
  zadTime: [10, 12, 14, 16, 20, 23, 39, 39, 39, 20, 29],
  started: false,
  isVdoh: false,
  isZad: false,
  isVidoh: false,
  finished: 0,
  itter: 0,
  hint: 'Вдох',
  difficulty: 5,
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
    setTimings: (state) => {
      state.vdohTime = state.difficulty + 5;
      state.zadTime[0] = state.difficulty + 5;
      state.zadTime[9] = state.zadTime[0] * 2;
      state.zadTime[4] = Math.floor((state.zadTime[9] + state.zadTime[0]) / 2 - 1);
      state.zadTime[5] = Math.floor((state.zadTime[9] + state.zadTime[0]) / 2);
      state.zadTime[2] = Math.ceil((state.zadTime[0] + state.zadTime[4]) / 2);
      state.zadTime[1] = Math.floor((state.zadTime[0] + state.zadTime[2]) / 2);
      state.zadTime[3] = Math.floor((state.zadTime[2] + state.zadTime[4]) / 2);
      state.zadTime[7] = Math.floor((state.zadTime[5] + state.zadTime[9]) / 2);
      state.zadTime[6] = Math.floor((state.zadTime[5] + state.zadTime[7]) / 2);
      state.zadTime[8] = Math.floor((state.zadTime[7] + state.zadTime[9]) / 2);
    },
    minusDifficulty: (state) => {
      state.difficulty--;
    },
    plusDifficulty: (state) => {
      state.difficulty++;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
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
    setReady: (state) => {
      state.hint = 'Приготовьтесь...';
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
  setTimings,
  setReady,
  minusDifficulty,
  plusDifficulty,
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
