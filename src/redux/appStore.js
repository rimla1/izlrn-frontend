import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices.js/themeSlice';
import languageReducer from './slices.js/languangeSlice';
import tokenReducer from './slices.js/authSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    token: tokenReducer,
  },
});

export default store;
