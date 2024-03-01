import React, { useContext, useEffect, useState } from 'react'
import context from '../context/Context';

const BookDetails = () => {
  const auth = useContext(context);
  const [carDetails,setCarDetails]=useState();
  console.log(auth);
  const { contract } = auth.state;
  console.log(contract);
  useEffect(() => {
    const carCount = async () => {
      try {
        const data5 = await contract.getSelected(auth.user.licence_id);
        console.log(data5[0]);
        setCarDetails(data5);
      } catch (error) {
        console.warn(error);
      }

      //const data6 = await contract.getAvailableCarpools("WB124");
      //console.log(data6);
    }

    carCount();

  }, [auth])
  console.log(carDetails);
  return (
    <>
    {(carDetails)?
    <>
      <h2>BOOKING DETAILS :</h2>
      <div className='AllCarDetails'>
        <h5 className="carData"><span className="carDataSpan" >User :</span> {carDetails[0]}</h5>
        <h5 className="carData"><span className="carDataSpan" >Name : </span> {carDetails[1]}</h5>
        <h5 className="carData"><span className="carDataSpan" >UserId : </span> {carDetails[2].toString()}</h5>
        <h5 className="carData"><span className="carDataSpan" >Phone No : </span> {carDetails[5]} </h5>
        <h5 className="carData"><span className="carDataSpan" >From : </span> {carDetails[3]} </h5>
        <h5 className="carData"><span className="carDataSpan" >Dest : </span> {carDetails[4]}</h5>
        <h5 className="carData"><span className="carDataSpan" >Booked VehicleNo : </span> {carDetails[6][6]}</h5>
      </div>
      </>
      :<h2>No Booking</h2>
    }
    </>
  )
}

export default BookDetails