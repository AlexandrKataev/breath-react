import { RootState } from 'shared/types';

export const selectProgressState = (state: RootState) => state.progress.progress;
