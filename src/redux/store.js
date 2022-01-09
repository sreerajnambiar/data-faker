import { configureStore } from '@reduxjs/toolkit'
import rowInputSlice from './rowInput/rowInputSlice'
import rowCountSlice from './rowCount/rowCountSlice'

export default configureStore({
  reducer: {
    rowInput : rowInputSlice,
    rowCount : rowCountSlice
  }
})