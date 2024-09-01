import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices.js/themeSlice'
import languageReducer from './slices.js/languangeSlice'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
    }
})

export default store