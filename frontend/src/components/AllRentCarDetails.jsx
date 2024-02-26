import React from 'react'

const AllRentCarDetails = ({ carDetails }) => {
  console.log(carDetails);
  return (
    <>
      <h2>List Of Your Booked Car : </h2>
      {(carDetails) ?
        carDetails.map((data) => {

          return (
            <div className='AllCarDetails' key={data[3].toString()}>
              <h5 className="carData"><span className="carDataSpan" >Owner :</span> {data[5][0]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Driver : </span> {data[5][1]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {data[5][2].toString()}</h5>
              <h5 className="carData"><span className="carDataSpan" >CarId : </span> {data[5][3].toString()}</h5>
              <h5 className="carData"><span className="carDataSpan" >Name : </span> {data[5][4]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {data[5][5]}</h5>
              <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {data[5][6]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Category : </span> {data[5][7]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {data[5][8]}</h5>
              <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {data[5][9]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Rent : </span> {data[5][10].toString()}</h5>
              <h5 className="carData"><span className="carDataSpan" >From : </span> {data[5][11]}</h5>
              <h5 className="carData"><span className="carDataSpan" >Dest : </span> {data[5][12]}</h5>
            </div>

          )
        })
        : <h2></h2>}


    </>
  )
}

export default AllRentCarDetails