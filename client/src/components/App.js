import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context';
import { Route, Routes } from 'react-router-dom';

import '../App.css';

import Dashboard from '../pages/Dashboard';
import LoginSignup from '../pages/LoginSignup';
import Header from './Header';
import About from '../pages/About';
import Organizations from '../pages/Organizations';
import Organization from '../pages/Organization';
import Project from '../pages/Project';
import CreateOrg from "../pages/CreateOrg";
import UpdateOrg from "../pages/UpdateOrg";
import CreateProj from "../pages/CreateProj"

function App() {
  const { user, setUser } = useContext(UserContext)

  const [organizations, setOrganizations] = useState([])
  const [organization, setOrganization] = useState({})
  const [orgId, setOrgId] = useState(null)
  const [orgProjects, setOrgProjects] = useState([])
  const [donations, setDonations] = useState([])
  const [orgPage, setOrgPage] = useState(1)
  const [orgPages, setOrgPages] = useState(0)

  useEffect(() => {
    fetch('/me').then(r => {
      if(r.ok) {
        r.json().then(user => {
          setUser(user)
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch('/donations')
    .then(r => r.json())
    .then(donations => setDonations(donations))
  }, [user, organizations])

  useEffect(() => {
    fetch(`/organizations?page=${orgPage}`)
    .then(r => {
      if(r.ok) {
        r.json().then(orgs => {
          setOrganizations(orgs.organizations)
          setOrgPage(orgs.page)
          setOrgPages(orgs.pages)
        })
      }
    })
  }, [])

  function handleUpdate(updatedOrg) {
    let updates = organizations.map(org => {
      if(org.id === updatedOrg.id) {
        return updatedOrg
      } else {
        return org
      }
    })
    setOrganizations(updates)
  }

  function handleDelete(id) {
    setOrganizations(prevOrgs => prevOrgs.filter(org => org.id !== id))
    setOrgId(id)
  }

  function grabId(id) {
    setOrgId(id)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <Dashboard donations={donations} />
        }/>
        <Route path='/loginsignup' element={
          <LoginSignup />
        }/>
        <Route path='/about' element={
          <About />
        }/>
        <Route path='/organizations'>
          <Route index element={
            <Organizations
              organizations={organizations}
              setOrganizations={setOrganizations}
              page={orgPage}
              setPage={setOrgPage}
              pages={orgPages}
            />
          }/>
          <Route path=':id' element={
            <Organization
              organization={organization}
              setOrganization={setOrganization}
              onDelete={handleDelete}
              grabId={grabId}
              orgProjects={orgProjects}
              setOrgProjects={setOrgProjects}
              donations={donations}
              setDonations={setDonations}
            />
          }/>
          <Route path='new' element={
            <CreateOrg
              organizations={organizations}
              setOrganizations={setOrganizations}
            />
          }/>
          <Route path=':id/update' element={
            <UpdateOrg
              organization={organization}
              onUpdate={handleUpdate}
            />
          }/>
        </Route>
        <Route path='/projects/:id' element={
          <Project orgId={orgId} />
        }/>
        <Route path='/projects/create' element={
          <CreateProj
            orgId={orgId}
            orgProjects={orgProjects}
            setOrgProjects={setOrgProjects}
            organizations={organizations}
          />
        }/>
      </Routes>
    </div>
  );
}

export default App;