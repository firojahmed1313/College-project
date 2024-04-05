import React, { useContext, useEffect, useState } from 'react'
import context from '../context/Context';

const AllBookedCarDetails = () => {
  const auth = useContext(context);
  const [carDetails, setCarDetails] = useState();
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


      <details>
        <summary >List Of Your Booked Car : </summary>
        {(carDetails) ?
          <>
            {carDetails.map((data) => {
              return (
                <div className='AllCarDetails' key={data[5][3].toString()}>
                  <h5 className="carData"><span className="carDataSpan" >Owner :</span> {data[5][0].substring(0, 20)}...</h5>
                  <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {data[5][1].toString()}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Name : </span> {data[5][2]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {data[5][3]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {data[5][4]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Category : </span> {data[5][5]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {data[5][6]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {data[5][7]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Rent : </span> {data[5][8]?.toString()}</h5>
                  <h5 className="carData"><span className="carDataSpan" >From : </span> {data[5][9]}</h5>
                  <h5 className="carData"><span className="carDataSpan" >Dest : </span> {data[5][10]}</h5>
                </div>

              )
            })}
          </>
          : <h3>No Car Booked</h3>
        }


      </details>


    </>

  )
}

export default AllBookedCarDetails