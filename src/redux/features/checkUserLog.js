import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name : "user",
    initialState : {loggedIn : false},
    reducers: {
        toggleUser: (state, action) => {
            state.loggedIn = action.payload
        }
    }
})

export const {toggleUser} = user.actions

export default user.reducer