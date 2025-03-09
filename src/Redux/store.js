import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ Ensure `auth` is part of the store
  },
});

export default store;