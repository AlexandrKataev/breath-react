import { configureStore } from '@reduxjs/toolkit';

import reg from 'components/Reg/regSlice/regSlice';
import breath from 'components/Breath/breathSlice/breathSlice';

export const store = configureStore({
  reducer: { reg, breath },
});
