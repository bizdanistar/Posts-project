import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    username: 'Alex',
    password: 'randompasswordforalex'
  },
  {
    username: 'Robert',
    password: 'randompasswordforobert'
  }
]

export const isLogged = createSlice({
  name: 'isLogged',
  initialState: {

    value: false,
    errorMessage: null
  },
  reducers: {
        changeLogged: (state) => {
state.value = !state.value
    },
authentification: (state, action) => {
  const { username, password } = action.payload
const user = users.find((user) => user.username === username && user.password === password)
  if (user){
state.value = true
state.errorMessage=false
  }else {
    state.errorMessage = "Invalid username or password";  
  }
}
  }
})
export const { changeLogged, authentification } = isLogged.actions
export default isLogged.reducer
