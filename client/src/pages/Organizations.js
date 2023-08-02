import React, { useContext } from "react";
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
    <div className='images' style={{backgroundImage: `url(${plantVase})`, color: 'black'}}>
      <h1 style={{marginTop: "155px", fontSize: '60px'}}><em>Our Partners...</em></h1>
      <div className='container--right'>
        <div>
          {organizations.map(org => {
            return (
              <p key={org.id} style={{fontSize: '30px'}}>
                <Link to={`/organizations/${org.id}`}>{org.name}</Link>
              </p>
            )
          })}
        </div>
        <div className='page-block'>
          <Pagination
            siblingRange='5'
            boundaryRange='1'
            defaultActivePage={page}
            totalPages={pages}
            onPageChange={handlePage}
          />
        </div>
        {user ?
          <p className='form-button' onClick={() => navigate('/organizations/new')}>create</p>
        :
          null
        }
      </div>
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