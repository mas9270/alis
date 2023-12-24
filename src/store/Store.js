import { configureStore } from '@reduxjs/toolkit'

import activeLinkSlice from './activeLink'
import showHeaderMenuSlice from './showHeaderMenu'
import modalTextSlice from './modalText'

export default configureStore({
  reducer: {
    activeLink: activeLinkSlice,
    showHeaderMenu: showHeaderMenuSlice,
    modalText: modalTextSlice
  }
})