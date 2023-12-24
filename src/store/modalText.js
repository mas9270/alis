import { createSlice } from '@reduxjs/toolkit'

export const modalTextSlice = createSlice({
    name: 'modalText',
    initialState: {
        value: ""
    },
    reducers: {
        modalTextAction: (state, action) => { 
            state.value = action.payload
        }
    }
})

export const { modalTextAction } = modalTextSlice.actions

export default modalTextSlice.reducer