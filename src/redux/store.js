import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { waterReduser } from './water/waterSlice';
import { filterReduser } from './sliceFilter'
import { authReduser } from './auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'profile'],
};

const persistedReduser = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    water: waterReduser,
    filter: filterReduser,
    auth: persistedReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
