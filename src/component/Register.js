import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../style/login.css'
import login from '../images/register.gif'

import { Link } from 'react-router-dom'
export default function Register() {
    const{display1,change}=useContext(DataContext)
  return (
    <div style={{display:display1?'none':'flex',marginTop:'3%',marginLeft:'5%'}} className="form">
      <div style={{width:'60%',borderRight:'2px solid #426259'}}>
    <form className='Loginform' style={{padding:'3%'}}>
     <h2 style={{display:display1?'none':'block',fontWeight:'bold',marginBottom:'6%'}}>Create your account</h2>
      <input type="text"
      required
      placeholder='Enter name'
      />
      <input type="text"
      required
      placeholder='Enter email'
      />
      <input type="text"
      required
      placeholder='Enter Password'
      />
    </form>
    <button id='loginbtn'><Link to={'/articles'} id='link'>Register</Link></button>
    <h5 style={{display:!display1?'block':'none',marginLeft:'24.5%'}}>Have an account?<button onClick={change} id='userbutton'>Log in now</button></h5>
  </div>
  <img src={login} alt="" />
  </div>
  )
}
