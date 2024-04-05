import React, { useContext, useEffect, useState } from 'react'
import context from '../context/Context';

const AllBookedCarDetails = () => {
  const auth = useContext(context);
  const [carDetails, setCarDetails] = useState("t");
  console.log(auth);
  const { contract } = auth.state;
  console.log(contract);
  useEffect(() => {

    const getBooedData = async () => {
      try {
        const data2 = await contract.getBookedCarBylicenceId(auth.user.licence_id);
        console.log(data2);
        setCarDetails(data2)
      } catch (error) {
        console.warn(error);
      }
    }
    getBooedData()
  }, [])
  console.log(carDetails)
  return (
    <>
      {(carDetails.length != 0) ?
        <>
          <details>
            <summary >List Of Your Booked Car : </summary>
            
              
            
          </details>
        </>
        : <h3>No Car Booked</h3>}
    </>

  )
}

export default AllBookedCarDetails