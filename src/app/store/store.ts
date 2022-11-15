import { configureStore } from '@reduxjs/toolkit';

import auth from 'processes/Auth/authSlice';
import breath from 'widgets/Breath/model/breathSlice';
import progress from 'widgets/Progress/model/ProgressSlice';

export const store = configureStore({
  reducer: { auth, breath, progress },
});
