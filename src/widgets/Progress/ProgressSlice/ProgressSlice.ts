import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { progressState } from './types';

const initialState: progressState = {
  progress: [1, 40, 55, 60, 5, 1, 8, 100, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgress: (state) => {
      state.progress = [];
    },
    updateProgress: (state, action) => {
      state.progress[action.payload]++;
    },
  },
});

export const { setProgress, updateProgress } = progressSlice.actions;
export default progressSlice.reducer;
