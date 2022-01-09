import { createSlice } from '@reduxjs/toolkit'

export const rowCountSlice = createSlice({
  name: 'rowCount',
  initialState: {
    count: 0
  },
  reducers: {
    addCount: (state, action) => {
      state.count = eval(action.payload)
      console.log(action.payload)
    }
  }
})

export const { addCount } = rowCountSlice.actions

export default rowCountSlice.reducer