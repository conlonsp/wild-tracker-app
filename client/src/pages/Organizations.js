import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

function Organizations({ organizations, setOrganizations }) {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()

  // const renderOrgs = organizations.map(org => (
  //   <li key={org.id}>
  //     <Link to={`/organizations/${org.id}`}>{org.name}</Link>
  //   </li>
  // ))
  console.log(organizations)

  return (
    <div>
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