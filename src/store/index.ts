import { configureStore } from '@reduxjs/toolkit'
import shopSlice from './slice/shopSlice'

export const store = configureStore({
  reducer: {
    shopSlice,
  },
})

// store에 등록된 모든 slice의 모든 state type
export type RootState = ReturnType<typeof store.getState>
// useDispatch의 모든 property type
export type AppDispatch = typeof store.dispatch