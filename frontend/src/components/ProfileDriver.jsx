import React from 'react'
import BookDetails from './BookDetails'
import AllCarDetails from './AllCarDetails'

const ProfileDriver = ({card}) => {
  return (
    <div className='ProfileDriver'>
      <div className='booked'>
        <BookDetails />
      </div>
      <div className='allCar'>
        <AllCarDetails cardetails={card}/>
      </div>
    </div>
  )
}

export default ProfileDriver