import React, { useContext, useEffect, useState } from 'react'
import AllRentCarDetails from './AllRentCarDetails';
import context from '../context/Context';
import { ethers } from 'ethers';
import { ToastContainer, toast } from "react-toastify";
import GetBlance from './GetBlance';


const ProfileUser = ({ car }) => {
  const auth = useContext(context);
  const { book } = auth;
  const [payment, setPayment] = useState(false);
  const { contract } = auth.state;
  //console.log(contract);
  const addUserData = {
    "name":auth.user.name,
    "from":auth.depert?.toUpperCase(),
    "dest":auth.goingto?.toUpperCase(),
    "phone_no":auth.user.phone,
    "vehicleNo":book[4],
    "licence_id":book[6]
  }
  console.log(addUserData);
  const onPayment = async (e) => {
    
    try {
      const amount = { value: ethers.parseEther("0.01") };
      const transaction = await contract.makePayment(addUserData.from, addUserData.dest, addUserData.phone_no,addUserData.vehicleNo, amount);
      await transaction.wait();
      console.log("Transaction is done");
      console.log("Payment Sucessfull Wait For Booking");
      toast.success("Payment Sucessfull Wait For Booking", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      auth.setBook("");
      console.log(transaction);
      //const Useraddincon = await contract.addUser(addUserData.from, addUserData.dest, addUserData.phone_no,addUserData.vehicleNo);
      //await Useraddincon.wait();
      //console.log(Useraddincon);
      console.log("Booking Sucessfull");
      toast.success("Booking Sucessfull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.warn(error);
    }


  }

  //console.log(props.user);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='ProfileDriver'>
        <div className='paymentProfilecontaner'>
          <GetBlance/>
        </div>
        <div className='paymentProfilecontaner'>
          {(book) ?
            <>
              <h2>YOUR BOOKING CAR : </h2>
              <div className='paymentProfilesubContaner'>
                <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {book[1].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >Name : </span> {book[2]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {book[3]}</h5>
                <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {book[4]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Category : </span> {book[5]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {book[6]}</h5>
                <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {book[7]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Rent : </span> {book[8].toString()}</h5>
                <h5 className="carData"><span className="carDataSpan" >From : </span> {book[9]}</h5>
                <h5 className="carData"><span className="carDataSpan" >Dest : </span> {book[10]}</h5>
                <button onClick={onPayment} type="submit">
                  Payment
                </button>
              </div>
            </>
            : <h2>YOU NOT BOOKING ANY CAR</h2>
          }
        </div>
        <div className='allrentCar'>
          <AllRentCarDetails carDetails={car} />
        </div>
      </div>
    </>
  )
}

export default ProfileUser