import React, { UseRef } from 'react'
import { auth } from './firebase'
import './SignupScreen.css'
const signupScreen = () => {
const emailRef=UseRef()
const passwordRef=UseRef()

const regester=(e)=>{
  e.preventDefault()
};
const signIn=(e)=>{
  e.preventDefault()
  auth.creteUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ) .then((authUser)=>{
    console.log(authUser)
  })
};

  return (
    <div className='SignupScreen'>
     <form>
      <h1>Sign in</h1>
      <input placeholder='Email' type="Email"/>
      <input placeholder='password' type="Password"/>
      <button type='Submit' onClick={signIn}>Sign in</button>




      <h4>
        <span className='SignupScreen_gray'>New to Netflix?</span>
        <span className='SignupScreen_link'> Sign up now.</span>
        </h4>
     </form>
    </div>
  )
}

export default signupScreen