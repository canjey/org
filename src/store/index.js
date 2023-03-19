import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizations/slice';

export const store = configureStore({
  reducer: {
    organizations: organizationReducer,
  },
});

export default store;
