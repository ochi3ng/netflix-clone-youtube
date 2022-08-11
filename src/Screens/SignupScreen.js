import React from 'react'
import './SignupScreen.css'
const signupScreen = () => {
  return (
    <div className='SignupScreen'>
     <form>
      <h1>Sign in</h1>
      <input placeholder='Email' type="Email"/>
      <input placeholder='password' type="Password"/>
      <button type='Submit'>Sign in</button>
     </form>
    </div>
  )
}

export default signupScreen