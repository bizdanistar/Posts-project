import React, { useState } from 'react'
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { authentification } from './loginSlice';


const LoginPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onUserNameChanged = e => setUsername(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)
  const errorMessage = useSelector((state) => state.isLogged.errorMessage);

  

  const onSubmit = () => {
    if (username && password) {
      // Dispatch the authentication action with the entered username and password
      dispatch(authentification({ username, password }));
      
      // Reset the input fields
      setUsername('');
      setPassword('');
    }
  };

  return (
    <section>
    <h2>Welcom</h2>
    <h4>Sign in to your account</h4>
    <form>
      <label>Username<CiUser /></label>
        <input 
          onChange={onUserNameChanged} 
          type="text" 
          value={username}
          className='loginInput'
        />

        <label>Password<CiLock /></label>
        <input
        onChange={onPasswordChanged} 
        type="password" 
        value={password}
        className='loginInput'
        />
   
      <button onClick={onSubmit} type='button'>Sign in</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
    </form>
  </section>
  )
}

export default LoginPage
