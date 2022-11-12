import { configureStore } from '@reduxjs/toolkit';

import auth from 'processes/Auth/authSlice';
import breath from 'components/Breath/breathSlice/breathSlice';

export const store = configureStore({
  reducer: { auth, breath },
});
