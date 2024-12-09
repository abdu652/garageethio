import React from 'react';
import '../../assets/styles/Login.css';
function Login(){
   return(
      <form className='login-form'>
         <h1>Login to your account</h1>
         <input type="email" placeholder='Email' name='email'/>
         <input type="password" placeholder='Password' name='password'/>
         <button className='login-button'>Login</button>
      </form>
   )
}
export default Login;