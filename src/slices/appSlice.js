import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    hasConnection: true,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setHasConnection: (state, action) => {state.hasConnection = action.payload},
    }
})

export const {setHasConnection} = navSlice.actions

export const selectHasConnection = (state) => state.navApp.hasConnection;

export default navSlice.reducer