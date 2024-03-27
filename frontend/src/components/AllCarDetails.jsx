import React from 'react'

const AllCarDetails = ({ cardetails }) => {
  console.log(cardetails);
  const disibleCar=()=>{
    console.log("disibleCar");
    alert("disibleCar cardeleteRecord add test post");
  }
  const deleteCar=()=>{
    console.log("deleteCar");
    alert("deleteCar cardeleteRecord");
    //cardeleteRecord
  }
  return (
    <>
      <details>
        <summary >List Of Your Registed Car : </summary>
        {(cardetails) ? cardetails?.map((data) => {

          return (
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
              <div className='AllCarDetails' key={data[3].toString()}>
                <h5 className="carData"><span className="carDataSpan" >Owner :</span> {(data[0]).substring(0, 20)}...</h5>
                <h5 className="carData"><span className="carDataSpan" >Driver : </span> {(data[1]).substring(0, 20)}...</h5>
                <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {data[2].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >CarId : </span> {data[3].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >Name : </span> {data[4]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {data[5]}</h5>
                <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {data[6]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Category : </span> {data[7]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {data[8]}</h5>
                <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {data[9]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Rent : </span> {data[10].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >From : </span> {data[11]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Dest : </span> {data[12]}</h5>
              </div>
              <div style={{ "display": "flex" }} >

                <button style={{"marginRight":"10px"}} onClick={disibleCar}>Disable Car</button>
                <button onClick={deleteCar}>Delete Car</button>
              </div>
            </div>
          )
        }) : <h2></h2>}

      </details>
    </>
  )
}

export default AllCarDetails