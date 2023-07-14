import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function LoginSignup() {
  const [toLogin, setToLogin] = useState(false)

  return (
    <div>
      {toLogin ?
        <SignupForm setToLogin={setToLogin} />
      :
        <LoginForm setToLogin={setToLogin} />
      }
    </div>
  )
}

export default LoginSignup