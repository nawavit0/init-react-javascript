import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './slices/counterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  })
}
