import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

function Organizations({ organizations, setOrganizations }) {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()

  const [count, setCount] = useState(0)

  function increment() {
    if(count < 10) {
      setCount(() => count + 1)
    }
  }

  function decrement() {
    if(count > 0) {
      setCount(() => count - 1)
    }
  }
  console.log(organizations)

  return (
    <div className='container'>
      <h1>Organization List</h1>
      <ul>
        {organizations.map(org => {
          return (
            <li key={org.id}>
              <Link to={`/organizations/${org.id}`}>{org.name}</Link>
            </li>
          )
        })}
      </ul>
      {user ?
        <button onClick={() => navigate('/organizations/new')}>Create</button>
      :
        null
      }
      <span>
        <button onClick={decrement}>Back</button>
        <h1>{count}</h1>
        <button onClick={increment}>Next</button>
      </span>
    </div>
  )
}

export default Organizations


      {/* {organizations.map(org => {
        return (
          <li key={org.id}>
            <h3>{org.name}</h3>
            <h4>{org.mission}</h4>
            <h5>{org.location}</h5>
          </li>
        )
      })} */}