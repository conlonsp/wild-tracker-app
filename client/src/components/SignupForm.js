import React, { useState, useContext } from "react";
import { UserContext } from "../Context";
import { useNavigate } from "react-router-dom";

function SignupForm({ setToLogin }) {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
    avatarUrl: '',
    bio: ''
  })
  const [errors, setErrors] = useState([])
  
  const { setUser } = useContext(UserContext)

  const navigate = useNavigate()

  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password,
        password_confirmation: newUser.passwordConfirmation,
        avatar_url: newUser.avatarUrl,
        bio: newUser.bio
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(user => {
          setUser(user)
          setNewUser({
            username: '',
            password: '',
            passwordConfirmation: '',
            avatarUrl: '',
            bio: ''
          })
          navigate('/')
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <h1>SignupForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={newUser.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={newUser.password}
          onChange={handleChange}
        />
        <input
          type='password'
          name='passwordConfirmation'
          placeholder="Password Confirmation"
          value={newUser.passwordConfirmation}
          onChange={handleChange}
        />
        <input
          type='text'
          name='avatarUrl'
          placeholder="Avatar URL"
          value={newUser.avatarUrl}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='bio'
          placeholder="Bio"
          value={newUser.bio}
          onChange={handleChange}
        />
        <button type='submit'>Signup</button>
      </form>
      {errors.map(err => {
        return (
          <p key={err} style={{color: 'red'}}>{err}</p>
        )
      })}
      <span>
        <p>
          Already have an account?
          &nbsp;
          <button onClick={()=>setToLogin(false)}>Login</button>
        </p>
      </span>
    </div>
  )
}

export default SignupForm