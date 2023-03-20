import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizations/slice';
import serviceReducer from './services/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    organizations: organizationReducer,
    services: serviceReducer,
    user: userReducer,
  },
});

export default store;
