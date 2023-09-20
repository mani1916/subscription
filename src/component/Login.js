import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../style/login.css'
export default function Login() {
    const{display1}=useContext(DataContext)
  return (
    <div style={{display:display1?'block':'none',marginTop:'3%',marginLeft:'5%'}}>
      <form className='Loginform' style={{padding:'3%'}}>
       <h2 style={{display:display1?'block':'none',fontWeight:'bold',marginBottom:'6%'}}>Login into your account</h2>
        <input type="text"
        required
        placeholder='Enter email'
        />
        <input type="text"
        required
        placeholder='Enter Password'
        />
      </form>
      <button id='loginbtn'>Login</button>
    </div>
  )
}
