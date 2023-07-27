import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context";
import { Pagination } from "semantic-ui-react"
import plantVase from '../images/plant-vase.jpg'

function Organizations({ organizations, setOrganizations, page, setPage, pages }) {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()
  
  function handlePage(e, {activePage}) {
    fetch(`/organizations?page=${activePage}`)
    .then(r => r.json())
    .then(orgs => {
      setOrganizations(orgs.organizations)
      setPage(orgs.page)
    })
  }

  return (
    <div className='container images' style={{backgroundImage: `url(${plantVase})`, color: 'black'}}>
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
      <div style={{backgroundColor: 'gray'}}>
        <Pagination
          siblingRange='5'
          boundaryRange='1'
          defaultActivePage={page}
          totalPages={pages}
          onPageChange={handlePage}
        />
      </div>
      {user ?
        <p class='form-button' onClick={() => navigate('/organizations/new')}>create</p>
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