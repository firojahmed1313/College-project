import React, { useContext } from 'react'
import context from '../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AllCarDetails = ({ cardetails }) => {
  console.log(cardetails);
  const navigation = useNavigate();
  const auth = useContext(context);
  const { contract } = auth.state;
  console.log(contract);
  console.log(auth.user);
  const disibleCar = (data) => {
    console.log("disibleCar");
    //alert("disibleCar cardeleteRecord add test post");
    const carDelete = async () => {
      try {
        console.log(data[4]);
        const data2 = await contract.cardeleteRecord(data[4]);
        console.log(data2);
        navigation('/');
      } catch (error) {
        console.warn(error);
      }
    }

    const cardisible = async (data) => {
      const carData = {
        carOwner: data[0],
        num_of_seat: data[1].toString(),
        vehicle: data[3],
        vehicleNo: data[4],
        category: data[5],
        licence_id: data[6],
        phoneNumber: data[7],
        rent: data[8].toString(),
        from: data[9].toUpperCase(),
        dest: data[10].toUpperCase()
      }
      console.log(carData);
      const burl = import.meta.env.VITE_URL;
      try {
        const res = await axios.post(`${burl}/api/driver/disableCar`, { carData });
        console.log(res);
        if (res.data.success) {
          carDelete();
        }
      } catch (error) {
        console.warn(error);
      }
    }
    cardisible(data)
  }
  const deleteCar = (data) => {
    console.log("deleteCar");
    //alert("deleteCar cardeleteRecord");
    const carDelete = async () => {
      try {
        console.log(data[4]);
        const data2 = await contract.cardeleteRecord(data[4]);
        console.log(data2);
        navigation('/');
      } catch (error) {
        console.warn(error);
      }
    }
    carDelete();
    //cardeleteRecord
  }
  return (
    <>
      <details>
        <summary >List Of Your Registed Car : </summary>
        {(cardetails) ? cardetails?.map((data) => {

          return (
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }} key={data[3].toString()}>
              <div className='AllCarDetails' >
                <h5 className="carData"><span className="carDataSpan" >Owner :</span> {(data[0]).substring(0, 20)}...</h5>
                <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {data[1].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >Name : </span> {data[2]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {data[3]}</h5>
                <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {data[4]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Category : </span> {data[5]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {data[6]}</h5>
                <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {data[7]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Rent : </span> {data[8].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >From : </span> {data[9]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Dest : </span> {data[10]}</h5>
              </div>
              <div style={{ "display": "flex" }} >

                <button style={{ "marginRight": "10px" }} onClick={() => disibleCar(data)}>Disable Car</button>
                <button onClick={() => deleteCar(data)}>Delete Car</button>
              </div>
            </div>
          )
        }) : <h2>NO CAR FOUND</h2>}

      </details>
    </>
  )
}

export default AllCarDetails