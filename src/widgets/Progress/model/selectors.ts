import { RootState } from 'app/store/types';

export const selectProgressState = (state: RootState) => state.progress.progress;
