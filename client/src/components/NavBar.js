import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

function NavBar() {

  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  function handleLogout() {
    if(user) {
      fetch('/logout', { method: "DELETE" }).then(r => {
        if(r.ok) {
          setUser(null)
        }
      })
    } else {
      navigate('/loginsignup')
    }
  }

  return (
    <div className="navbar-container">
      <span className="nav-links">
        <NavLink to="/" exact className="nav-item">
          Dashboard
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/organizations" className="nav-item">
          Organizations
        </NavLink>
      </span>
      <button className="logout-button" onClick={handleLogout}>
        {user ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default NavBar

    // <span>
    //   <NavLink
    //     to='/'
    //     exact='true'
    //   >
    //     Dashboard
    //   </NavLink>
    //   <NavLink
    //     to='/about'
    //   >
    //     About
    //   </NavLink>
    //   <NavLink
    //     to='/organizations'
    //   >
    //     Organizations
    //   </NavLink>
    //   <button onClick={handleLogout}>{user ? "Logout" : "Login"}</button>
    // </span>