import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCounter: (state) => ({ ...state, count: state.count + 1 }),
    decreaseCounter: (state) => ({ ...state, count: state.count + 1 }),
  },
})

export const { increaseCounter, decreaseCounter } = counter.actions

export default counter.reducer
