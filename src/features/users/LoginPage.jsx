import React from 'react'
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const LoginPage = () => {
  return (
    <section>
    <h2>Welcom</h2>
    <h4>Sign in to your account</h4>
    <form>
      <label>Username<CiUser /></label>
        <input type="text" className='loginInput'/>

        <label>Password<CiLock /></label>
        <input type="password" className='loginInput'/>
   
      <button>Sign in</button>
    </form>
  </section>
  )
}

export default LoginPage
