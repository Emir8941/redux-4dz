import React from 'react'

const user = ({name, email , password}) => {
  return (
    <ul className='usersList'>
        <li>
            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
        </li>
    </ul>
  )
}

export default user