import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    nowpage : "0",
}

export const pageSlice = createSlice({
    name : "page",
    initialState,
    reducers : {
        navpages : (state, action) => {
            state.nowpage = action.payload
        },
    },
})

export const { navpages } = pageSlice.actions
export default pageSlice.reducer