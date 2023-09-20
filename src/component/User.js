import React, { useContext } from 'react'
import {faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/user.css'
import Login from './Login'
import Register from './Register'
import DataContext from '../context/DataContext'
export default function User() {
    const{display1,setDisplay}=useContext(DataContext)
    function change(){
        console.log(display1)
        setDisplay(display1=>!display1)
    }
  return (
    <div className='main'>
      <h1 id='sticky'><FontAwesomeIcon icon={faNewspaper}/> CenZo</h1>
      <div className='display'>
        <Login/>
        <Register/>
        <h5 style={{display:display1?'block':'none',marginLeft:'15%'}}>Don't have an account?<button onClick={change} id='userbutton'>Sign Up</button></h5>
        <h5 style={{display:!display1?'block':'none',marginLeft:'15%'}}>Have an account?<button onClick={change} id='userbutton'>Log in now</button></h5>
      </div>
    </div>
  )
}
