import { createSlice } from '@reduxjs/toolkit'

export const activeLinkSlice = createSlice({
    name: 'activeLink',
    initialState: {
        value: "home"
    },
    reducers: {
        activeLinkAction: (state, action) => { 
            state.value = action.payload
        }
    }
})

export const { activeLinkAction } = activeLinkSlice.actions

export default activeLinkSlice.reducer