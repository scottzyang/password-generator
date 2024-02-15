import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from '../features/passwords/passwordSlice'

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer
  },
})
