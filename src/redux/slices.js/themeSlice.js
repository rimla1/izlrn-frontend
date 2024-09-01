import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkModeOn: true
    },
    reducers: {
        changeTheme(state, action){
            state.isDarkModeOn = !state.isDarkModeOn
        }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer