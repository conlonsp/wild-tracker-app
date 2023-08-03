import React, { useContext } from 'react'
import { UserContext } from '../Context'
import Chart from '../components/Chart'
import fernSpine from '../images/fern-spine.jpg'

function Dashboard({ donations }) {
  const { user } = useContext(UserContext)

  return (
    <div className="images" style={{backgroundImage: `url(${fernSpine})`}}>
      <div>
        <h1  style={{color: 'black', marginTop: '150px', marginBottom: '0', fontSize: '70px', alignItems: 'center'}}>Dashboard</h1>
        {user ?
          <div>
             <img src={user.avatar_url} className='user-img'></img>
            <p className='welcome-tag'>Welcome, {user.username}!</p>
            {donations.length > 0 ?
              <div className='container--chart' >
                <Chart donations={donations} />
              </div>
            :
            <p className='text-blurb--white'>Start donating to view progress!</p>
            }
          </div>
        :
          <div>
            <p className='text-blurb--white'><em>Log in or Sign up to access Dashboard features!</em></p>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard

// chart styling: style={{opacity: '1', backgroundColor: 'grey', color: 'white'}}