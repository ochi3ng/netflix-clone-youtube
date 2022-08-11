import React from 'react'
import "./LoginScreen.css"


function LoginScreen() {
  return (
  <div className="loginScreen">
      <div className="loginScreen_background">
     <img className="loginScreen_logo" src="data:image/png;base64,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"
      alto=""
      />
        <button className="loginScreen_button">Sing
       in</button>
       <div className='loginScreen_gradient'/>
    </div>
    <div className='loginScreen_body'>
      <>
      <h1>OCHIENG NETFLIX MOVIE SHOW</h1>
      </>
      <h2>Watch anywhere,cancelat any time</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership</h3>
      <div>
        <form>
          <input type="email" placeholder='Email Adress
          '/>
          <button className='loginScreen_getstarted'>GET STARTED</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginScreen