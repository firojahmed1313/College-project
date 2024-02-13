import React from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileDriver from '../components/ProfileDriver'

const DriverProfile = () => {
  return (
    <div className="profile">
      <div className="profileNav">
        <ProfileNav />
      </div>
      <div className="profileBlog">
        <ProfileDriver />
      </div>
    </div>
  )
}

export default DriverProfile