import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from "./contacts/contactsSlice"
import {filterReducer} from "./contacts/filterSlice"

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
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/authslice';


const persistConfig = {
key: 'auth',
  storage,
   whitelist: ['token'],
};



export const store = configureStore({
  reducer:{
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
    
  }, 
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


