import { RootState } from '../../../shared/types';

export const selectBreathState = (state: RootState) => state.breath;
export const selectBreathStarted = (state: RootState) => state.breath.started;
export const selectBreathIsVdoh = (state: RootState) => state.breath.isVdoh;
export const selectBreathIsVidoh = (state: RootState) => state.breath.isVidoh;
export const selectBreathZad = (state: RootState) => state.breath.zad;
