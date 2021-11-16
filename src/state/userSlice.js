import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    theme: 'light',
    status: 'offline',
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload
    }
  },
})

export const { setTheme } = userSlice.actions

export default userSlice.reducer
