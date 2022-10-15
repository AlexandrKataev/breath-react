import { RootState } from '../../../app/store/store';

export const selectRegState = (state: RootState) => state.reg;
export const selectUserName = (state: RootState) => state.reg.userName;
export const selectMail = (state: RootState) => state.reg.password;
