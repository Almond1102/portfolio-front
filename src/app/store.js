import { configureStore } from '@reduxjs/toolkit'
import pageReducer from '../front/features/pageSlice'

export const store = configureStore({
  reducer: {
      page : pageReducer,
  },
})