import React from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileUser from '../components/ProfileUser'

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="profileNav">
        <ProfileNav />
      </div>
      <div className="profilesub">
        <ProfileUser/>
      </div>
    </div>
  )
}

export default UserProfile