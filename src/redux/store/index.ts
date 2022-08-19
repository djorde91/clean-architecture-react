import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userReducer';
import timelineReducer from '../slices/timelineReducer';
export const store = configureStore({
  reducer: {
    activeUser: userReducer,
    timeline: timelineReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
