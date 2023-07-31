import React, { useContext } from 'react'
import { UserContext } from '../Context'
import Chart from '../components/Chart'
import fernSpine from '../images/fern-spine.jpg'

function Dashboard({ donations }) {
  const { user } = useContext(UserContext)

  return (
    <div className="container images" style={{backgroundImage: `url(${fernSpine})`}}>
      {user ?
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {user.username}!</p>
          {/* <ul>
            {donations ?
              donations.map(d => {
                return (
                  <li key={d.id}>{d.amount} || {d.organization_name}</li>
                )
              })
            : 
             <p>Start donating to view progress!</p>
            }
          </ul> */}
          {donations ?
            <div class='text-blurb--white' style={{opacity: '1', backgroundColor: 'grey', color: 'white'}}>
              <Chart donations={donations} />
            </div>
          :
           <p>Start donating to view progress!</p>
          }
        </div>
      :
        <div>
          <p class='text-blurb--white'><em>Log in or Sign up to access Dashboard features!</em></p>
        </div>
      }
      
    </div>
  )
}

export default Dashboard