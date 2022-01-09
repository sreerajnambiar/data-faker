import { createSlice } from '@reduxjs/toolkit'

export const rowInputSlice = createSlice({
  name: 'rowInput',
  initialState: {
    rows: []
  },
  reducers: {
    addRow: (state, action) => {
      let id = Object.values(state.rows).length + 1
      state.rows.push({
        id : id,
        ...action.payload
      })
    }
  }
})

export const { addRow } = rowInputSlice.actions

export default rowInputSlice.reducer