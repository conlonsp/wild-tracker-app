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
    <div class="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
      <div class="formbg-outer">
        <div class="formbg">
          <div class="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">Sign in to your account</span>
            <form onSubmit={handleSubmit}>
              <div class="field padding-bottom--24">
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  value={logUser.username}
                  onChange={handleChange}
                />
              </div>
              <div class="field padding-bottom--24">
                <div class="padding-top--15">
                  <label>Password</label>
                </div>
                <input
                  type='password'
                  name='password'
                  value={logUser.password}
                  onChange={handleChange}
                />
              </div>
              <div class="field padding-bottom--24 padding-top--24">
                <input type="submit" name="submit" value="Continue"/>
              </div>
              {errors.map(err => {
                return (
                  <p key={err} style={{color: 'red'}}>{err}</p>
                )
              })}
              <div class="footer-link padding-top--24">
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

// {errors ?
//   errors.map(err => {
//     return (
//       <p key={err} style={{color: 'red'}}>{err}</p>
//     )
//   })
// :
//   null
// }

            {/* <form id="stripe-login">
              <div class="field padding-bottom--24">
                <label for="email">Email</label>
                <input type="email" name="email"/>
              </div>
              <div class="field padding-bottom--24">
                <div class="grid--50-50">
                  <label for="password">Password</label>
                </div>
                <input type="password" name="password"/>
              </div>
              <div class="field padding-bottom--24">
                <input type="submit" name="submit" value="Continue"/>
              </div>
            </form> */}


    // <div>
    //   <h1>LoginForm</h1>

    //   {errors.map(err => {
    //     return (
    //       <p key={err} style={{color: 'red'}}>{err}</p>
    //     )
    //   })}
    //   <span>
    //     <p>
    //       Don't have an account?
    //       &nbsp;
    //       <button onClick={()=>setToLogin(true)}>Signup</button>
    //     </p>
    //   </span>
    // </div>