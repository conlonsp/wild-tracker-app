import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Context'
import DonationForm from '../components/DonationForm'
import vine from '../images/vine.jpg'
import { Pagination } from "semantic-ui-react"

function Organization({ organization, setOrganization, onDelete, grabId, orgProjects, setOrgProjects, donations, setDonations}) {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()
  const params = useParams()

  const [errors, setErrors] = useState([])
  const [projPage, setProjPage] = useState(1)
  const [projPages, setProjPages] = useState(0)

  useEffect(() => {
    fetch(`/organizations/${params.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => {
          setOrganization(data)
          grabId(data.id)
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch(`/organizations/${params.id}/projects?page=${projPage}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => {
          setOrgProjects(data.projects)
          setProjPage(data.page)
          setProjPages(data.pages)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  function handlePage(e, {activePage}) {
    fetch(`/organizations/${params.id}/projects?page=${activePage}`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setOrgProjects(data.projects)
      setProjPage(data.page)
    })
  }

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
    <div className="images" style={{backgroundImage: `url(${vine})`, color: "black"}}>
      {user ?
        <div>
          <div className='container--left' >
            <div>
              <h1>{organization.name}</h1>
              <h3>{organization.mission}</h3>
              <h3>{organization.location}</h3>
              <h4>Projects</h4>
              {orgProjects.map(proj => {
                return (
                  <p key={proj.id} style={{fontSize: '30px'}}>
                    <Link to={`/projects/${proj.id}`}>{proj.name}</Link>
                  </p>
                )
              })}
              <span className='form-container'>
                <p className='form-button' onClick={() => navigate(`/organizations/${params.id}/update`)}>update</p>
                <p className='form-button' onClick={deleteOrg}>delete</p>
                <p className='form-button' onClick={() => navigate('/projects/create')}>new</p>
              </span>
              <div className='page-block'>
                <Pagination
                  siblingRange='5'
                  boundaryRange='1'
                  defaultActivePage={projPage}
                  totalPages={projPages}
                  onPageChange={handlePage}
                />
              </div>
              <p className='form-button' onClick={() => navigate('/organizations')}>back</p>
            </div>
          </div>
          <div className='container--right' style={{top: '49%', marginLeft: '60.5%'}}>
            <DonationForm
              orgId={organization.id}
              donations={donations}
              setDonations={setDonations}
            />
          </div>
        </div>
      :
        <h1 className='container--left' style={{marginTop: '-5%'}}>{errors}</h1>
      }
    </div>
  )
}

export default Organization