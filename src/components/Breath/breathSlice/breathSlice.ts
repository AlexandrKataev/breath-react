import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { breathState } from './types';

const initialState: breathState = {
  vdohTime: 10000,
  zadTime: [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000],
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
    },
    stop: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
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
    nextItter: (state) => {
      state.itter++;
    },
  },
});

export const { start, stop, setDifficulty, setIsVdoh, setIsZad, setIsVidoh, nextItter } =
  breathSlice.actions;
export default breathSlice.reducer;
