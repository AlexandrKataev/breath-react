import { RootState } from 'app/store/types';

export const selectBreathState = (state: RootState) => state.breath;
export const selectBreathStarted = (state: RootState) => state.breath.started;
export const selectBreathIsVdoh = (state: RootState) => state.breath.isVdoh;
export const selectBreathIsZad = (state: RootState) => state.breath.isZad;
export const selectBreathIsVidoh = (state: RootState) => state.breath.isVidoh;

export const selectBreathHint = (state: RootState) => state.breath.hint;
export const selectBreathDifficulty = (state: RootState) => state.breath.difficulty;

export const selectBreathZadTime = (state: RootState) => state.breath.zadTime;
export const selectBreathVdohTime = (state: RootState) => state.breath.vdohTime;
export const selectBreathItter = (state: RootState) => state.breath.itter;
export const selectTime = (state: RootState) => state.breath.time;
