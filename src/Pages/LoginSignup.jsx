import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SIGN UP</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='YOUR NAME' />
          <input type="email" placeholder='your@email' />
          <input type="password" name="" id="" placeholder='PASSWORD' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing i agree to use & privacy policies</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
