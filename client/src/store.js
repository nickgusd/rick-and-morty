import { getDefaultMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import rickReducer from './reducers/index';

const rootReducer = combineReducers({
  rick: rickReducer
});

const store = configureStore({
  reducer: rootReducer,
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: [...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })]
});

export const generateStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    // devTools: process.env.NODE_ENV !== "production",
    middleware: [...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })],
    preloadedState
  });

export default store;
