import { createSlice } from '@reduxjs/toolkit'

export const showHeaderMenuSlice = createSlice({
    name: 'adminmenu',
    initialState: {
        value: false
    },
    reducers: {
        // adminShowItem: state => {
        //   state.value += 1
        // },
        showHeaderMenuAction: (state, action) => {
            if(action.payload){
                document.body.style.overflow = "hidden"
            }
            else{
                document.body.style.overflow = "auto"
            }
      
            state.value = action.payload
        }
    }
})

export const { showHeaderMenuAction } = showHeaderMenuSlice.actions

export default showHeaderMenuSlice.reducer