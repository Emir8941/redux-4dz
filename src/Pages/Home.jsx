import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as userActions from '../Store/Action/user'
import { Link } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState({
    email : '',
    name: '',
    password: ''
  })

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setUser((prevItems) => {
      return {
        ...prevItems,
        [name]: value
      }
    })
  }

  const dispatch = useDispatch()
  const addUser = () => {
    dispatch(userActions.addUser(user))
    setUser({
      email : '',
      name: '',
      password: ''
    })
  }

  return (
    <div className='Form'>
      <div className='Form_input'>
        <h1>Registration</h1>
        <input name='email' id='email' placeholder='email' onChange={inputHandler} value={user.email} />
        <input name='name' id='name' placeholder='name' onChange={inputHandler} value={user.name}/>
        <input name='password' id='password' type='password' placeholder='password' onChange={inputHandler} value={user.password}/>
        <button className='Add_btn' type='submit' onClick={addUser}>OK</button>
        <Link className='Link' to='/Users'>Users List</Link>
      </div>
    </div>
  )
}

export default Home;