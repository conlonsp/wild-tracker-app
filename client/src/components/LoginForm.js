import React, { useContext, useState } from "react";
import { UserContext } from "../Context";
import { useNavigate } from "react-router-dom";

function LoginForm({ setToLogin }) {
  const { setUser } = useContext(UserContext)

  const [logUser, setLogUser] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  function handleChange(e) {
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: logUser.username,
        password: logUser.password
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(user => {
          setUser(user)
          setLogUser({
            username: "",
            password: ""
          })
          navigate('/')
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }
  
  return (
    <div className="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15">Sign in to your account</span>
            <form onSubmit={handleSubmit}>
              <div className="field padding-bottom--24">
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  value={logUser.username}
                  onChange={handleChange}
                />
              </div>
              <div className="field padding-bottom--24">
                <div className="padding-top--15">
                  <label>Password</label>
                </div>
                <input
                  type='password'
                  name='password'
                  value={logUser.password}
                  onChange={handleChange}
                />
              </div>
              <div className="field padding-bottom--24 padding-top--24">
                <input type="submit" name="submit" value="Continue"/>
              </div>
              {errors.map(err => {
                return (
                  <p key={err} style={{color: 'red'}}>{err}</p>
                )
              })}
              <div className="footer-link padding-top--24">
                <span>
                  Don't have an account?
                  &nbsp;
                  <p
                    onClick={() => setToLogin(true)}
                    style={{color: "rgb(84, 105, 212)", cursor: "pointer"}}
                  >
                    Sign up
                  </p>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm