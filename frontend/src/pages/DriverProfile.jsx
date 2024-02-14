import React from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileDriver from '../components/ProfileDriver'

const DriverProfile = () => {
  return (
    <div className="profile">
      <div className="profileNav">
        <ProfileNav />
      </div>
      <div className="profilesub">
        <ProfileDriver />
      </div>
    </div>
  )
}

export default DriverProfile