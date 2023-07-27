import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Context'

import DonationForm from '../components/DonationForm'

import vine from '../images/vine.jpg'

function Organization({ organization, setOrganization, onDelete, grabId, orgProjects, setOrgProjects, donations, setDonations}) {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()
  const params = useParams()

  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch(`/organizations/${params.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(org => {
          setOrganization(org)
          setOrgProjects(org.projects)
          grabId(org.id)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  function deleteOrg() {
    fetch(`/organizations/${organization.id}`, {
      method: 'DELETE'
    }).then(r => {
      if(r.ok) {
        onDelete(organization.id)
        navigate('/organizations')
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }
  
  return (
    <div>
      {user ?
        <div class='container images' style={{backgroundImage: `url(${vine})`, color: "black"}}>
          <div class='hello'>
            <h1>{organization.name}</h1>
            <h3>{organization.mission}</h3>
            <h3>{organization.location}</h3>
            <h4>Projects</h4>
            {orgProjects.map(proj => {
              return (
                <li key={proj.id}>
                  <Link to={`/projects/${proj.id}`}>{proj.name}</Link>
                </li>
              )
            })}
            <span class='form-container'>
              <p class='form-button' onClick={() => navigate(`/organizations/${params.id}/update`)}>update</p>
              <p class='form-button' onClick={deleteOrg}>delete</p>
              <p class='form-button' onClick={() => navigate('/projects/create')}>new</p>
            </span>
          </div>
          <DonationForm
            orgId={organization.id}
            donations={donations}
            setDonations={setDonations}
          />
        </div>
      :
        <p>{errors}</p>
      }
    </div>
  )
}

export default Organization