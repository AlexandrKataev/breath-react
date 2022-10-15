import { RootState } from '../../../app/store/store';

export const selectBreathState = (state: RootState) => state.breath;
export const selectBreathStarted = (state: RootState) => state.breath.started;
