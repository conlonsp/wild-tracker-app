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
  const [isNext, setIsNext] = useState(false)
  
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
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {!isNext ?
           <div className="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
           <div className="formbg-outer">
             <div className="formbg">
               <div className="formbg-inner padding-horizontal--48">
                 <span className="padding-bottom--15">Create your account</span>
                 <form>
                   <div className="field">
                     <label>Username</label>
                     <input
                       type='text'
                       name='username'
                       value={newUser.username}
                       onChange={handleChange}
                     />
                   </div>
                   <div className="field">
                     <div className="padding-top--10">
                       <label>Password</label>
                     </div>
                     <input
                       type='password'
                       name='password'
                       value={newUser.password}
                       onChange={handleChange}
                     />
                   </div>
                   <div className="field">
                     <div className="padding-top--10">
                       <label>Password Confirmation</label>
                     </div>
                     <input
                       type='password'
                       name='passwordConfirmation'
                       value={newUser.passwordConfirmation}
                       onChange={handleChange}
                     />
                   </div>
                   <div className="field padding-bottom--24 padding-top--24">
                    <input type="submit" name="next" value="Next"onClick={() => setIsNext(true)}/>
                   </div>
                   {errors.map(err => {
                     return (
                       <p key={err} className='error'>{err}</p>
                     )
                   })}
                   <div className="footer-link padding-top--24">
                     <span>
                       Already have an account?
                       &nbsp;
                       <p
                         onClick={() => setToLogin(false)}
                         style={{color: "rgb(84, 105, 212)", cursor: "pointer"}}
                       >
                         Log in
                       </p>
                     </span>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
        :
        <div className="box-root flex-flex flex-direction--column container" style={{minHeight: '100vh', flexGrow: '1'}}>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15">Tell us about yourself!</span>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label>Avatar URL</label>
                  <input
                    type='text'
                    name='avatarUrl'
                    value={newUser.avatarUrl}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <div className="padding-top--10">
                    <label>Bio</label>
                  </div>
                  <textarea
                    type='bio'
                    name='Bio'
                    value={newUser.bio}
                    onChange={handleChange}
                  />
                </div>
                <div className="field padding-bottom--24 padding-top--24 grid--25-75">
                  <input type='button' name='back' value="<" onClick={() => setIsNext(false)}/>
                  <input type="submit" name="submit" value="Continue"/>
                </div>
                {errors.map(err => {
                  return (
                    <p key={err} className='error'>{err}</p>
                  )
                })}
                <div className="footer-link padding-top--24">
                  <span>
                    Already have an account?
                    &nbsp;
                    <p
                      onClick={() => setToLogin(false)}
                      style={{color: "rgb(84, 105, 212)", cursor: "pointer"}}
                    >
                      Log in
                    </p>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default SignupForm