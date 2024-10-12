import { createSlice } from "@reduxjs/toolkit";

export const isLogged = createSlice({
  name: 'isLogged',
  initialState: {
    value: false
  },
  reducers: {
        changeLogged: (state) => {
state.value = !state.value
    }
  }
})
export const { changeLogged } = isLogged.actions
export default isLogged.reducer
