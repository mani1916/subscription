import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../style/login.css'
import { Link } from 'react-router-dom'
import login from '../images/login.gif'
export default function Login() {
    const{display1,change}=useContext(DataContext)
  return (
    <div style={{display:display1?'flex':'none',marginTop:'3%',marginLeft:'5%'}} className='form'>
      <div style={{width:'60%',borderRight:'2px solid #426259'}}>
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
      <button id='loginbtn'><Link to={'/articles'} id='link'>Login</Link></button>
      <h5 style={{display:display1?'block':'none',marginLeft:'22%'}}>Don't have an account?<button onClick={change} id='userbutton'>Sign Up</button></h5>
      </div>
      <img src={login} alt="" />
    </div>
  )
}
