import React, { useContext } from 'react'
import { UserContext } from '../Context'
import Chart from './Chart'

function Dashboard({ donations }) {
  const { user } = useContext(UserContext)

  return (
    <div className='container'>
      {user ?
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {user.username}!</p>
          <ul>
            {donations ?
              donations.map(d => {
                return (
                  <li key={d.id}>{d.amount} || {d.organization_name}</li>
                )
              })
            : 
             <p>Start donating to view progress!</p>
            }
          </ul>
          <Chart donations={donations} />
        </div>
      :
        <div>
          <h1>Dashboard</h1>
          <p>Please log in to access app features!</p>
        </div>
      }
      
    </div>
  )
}

export default Dashboard