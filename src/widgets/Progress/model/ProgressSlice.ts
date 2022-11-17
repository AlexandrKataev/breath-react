import { FetchProgressArgs, progressState, pushProgressArgs, Status } from './types';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, doc, setDoc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import db from '../../../firebase';
import { _ActionCreatorWithPreparedPayload } from '@reduxjs/toolkit/dist/createAction';

export const fetchProgress = createAsyncThunk<number[], FetchProgressArgs>(
  'progress/fetchProgress',
  async (params) => {
    const docRef = doc(db, 'progress', params);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data().progress);
      return docSnap.data().progress;
    } else {
      await setDoc(doc(db, 'progress', params), {
        progress: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      });
      console.log('No such document! Created one.');
      return [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
    }
  },
);

export const pushProgress = createAsyncThunk<any, pushProgressArgs>(
  'progress/pushProgress',
  async (params, { dispatch }) => {
    const updatedProgress = Array.from(params.progress);
    updatedProgress[params.difficulty]++;
    console.log(updatedProgress);
    const ref = doc(db, 'progress', params.userId);
    await setDoc(ref, {
      progress: updatedProgress,
    });
    dispatch(updateProgress(params.difficulty));
  },
);

const initialState: progressState = {
  progress: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  status: null,
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    updateProgress: (state, action) => {
      state.progress[action.payload]++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProgress.pending, (state, action) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProgress.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.progress = action.payload;
    });
    builder.addCase(fetchProgress.rejected, (state, action) => {
      state.status = Status.ERROR;
    });
  },
});

export const { setProgress, updateProgress } = progressSlice.actions;
export default progressSlice.reducer;
