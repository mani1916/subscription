import React from 'react'
import {faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/user.css'
import { useEffect } from 'react'
import Login from './Login'
import Register from './Register'

export default function User() {
  useEffect(() => {
    document.title = "User Login";  
  }, []);
    
  return (
    <div className='main'>
      <h1 id='sticky'><FontAwesomeIcon icon={faNewspaper}/> CenZo</h1>
      <div className='display'>
        <Login/>
        <Register/>
        
        
      </div>
    </div>
  )
}
