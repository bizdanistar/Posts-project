import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCount, increaseCount } from '../features/posts/postsSclice'
import {changeLogged, isLogged } from '../features/users/loginSlice';

const Header = () => {
  const isLogged = useSelector((state) => state.isLogged.value)
  const dispatch = useDispatch()
  const count = useSelector(getCount)
  return (
    <header className="Header">
            <h1>Made with Redux Toolkit</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post</Link></li>
                    <li><Link to="user">Users</Link></li>

                    {isLogged ? <button onClick={() => dispatch(changeLogged())}>Sign out</button> 
        : <button onClick={() => dispatch(changeLogged())} ><Link style={{color: '#000'}} to='login'> Sign in </Link></button>}
                </ul>
                <button onClick={() => 
                dispatch(increaseCount())}>
{count}
                </button>
            </nav>
        </header>
  )
}

export default Header
