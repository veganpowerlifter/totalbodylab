import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { coachesReducer } from '../features/coaches/coachesSlice';

export const store = configureStore({
  reducer: {
    coaches: coachesReducer,
  },
});
