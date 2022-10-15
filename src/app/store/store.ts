import { configureStore } from '@reduxjs/toolkit';

import reg from '../../pages/Reg/regSlice/regSlice';
import breath from '../../components/Breath/breathSlice/breathSlice';

export const store = configureStore({
  reducer: { reg, breath },
});

export type RootState = ReturnType<typeof store.getState>;
