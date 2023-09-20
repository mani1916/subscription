import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../style/login.css'
import { Link } from 'react-router-dom'
export default function Register() {
    const{display1}=useContext(DataContext)
  return (
    <div style={{display:display1?'none':'block',marginTop:'3%',marginLeft:'5%'}}>
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
    <button id='loginbtn'><Link>Register</Link></button>
  </div>
  )
}
