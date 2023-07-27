import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import leaves from '../images/leaves.jpg'

function LoginSignup() {
  const [toLogin, setToLogin] = useState(false)

  return (
    <div className="container images" style={{backgroundImage: `url(${leaves})`}}>
      {toLogin ?
        <SignupForm setToLogin={setToLogin} />
      :
        <LoginForm setToLogin={setToLogin} />
      }
    </div>
  )
}

export default LoginSignup
