import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import fern from '../images/fern.jpg'

function LoginSignup() {
  const [toLogin, setToLogin] = useState(false)

  return (
    <div className="container images" style={{backgroundImage: `url(${fern})`}}>
      {toLogin ?
        <SignupForm setToLogin={setToLogin} />
      :
        <LoginForm setToLogin={setToLogin} />
      }
    </div>
  )
}

export default LoginSignup
