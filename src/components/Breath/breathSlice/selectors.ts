import { RootState } from '../../../shared/types';

export const selectBreathState = (state: RootState) => state.breath;
export const selectBreathStarted = (state: RootState) => state.breath.started;
