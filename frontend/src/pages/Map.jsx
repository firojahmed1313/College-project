import React, { useContext, useEffect, useState } from 'react'
import locationmap from '../assets/locationMap.png'; // with import
import { useNavigate } from 'react-router-dom';
import context from '../context/Context';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleMap from '../components/GoogleMap';
const Map = () => {
    const navigate = useNavigate();
    const auth = useContext(context);
    console.log(auth);
    const { allDriver } = auth;
    const onBookfun = (dd) => {
        console.log("Booking Sucessfull");
        auth.setBook(dd);
        if (dd) {

            navigate("/userProfile")
        }
        //navigate("/userProfile");

    }
    useEffect(() => {

        //auth.setBook(driver);
    }, [])
    return (
        <>
            <h2 className='maph2'>List All Driver :</h2>
            <div className='mapCatagory'>
                <button>MICRO</button>
                <button>SUV</button>
                <button>MINIVAN</button>
            </div>
            <div className='mapContener'>
                <div className='showmapContener' >
                    {(allDriver.length != 0) ?
                        allDriver.map((driver) => {
                            return (

                                <div className='mapsubContener' key={driver[3].toString()}>
                                    <h5 className="carData"><span className="carDataSpan" >Num of Seat : </span> {driver[0].toString()}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >CarId : </span> {driver[1].toString()}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Name : </span> {driver[2]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Vehicle : </span> {driver[3]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >VehicleNo :</span>  {driver[4]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Category : </span> {driver[5]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Licence_id : </span> {driver[6]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >PhoneNumber :</span>  {driver[7]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Rent : </span> {driver[8].toString()}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >From : </span> {driver[9]}</h5>
                                    <h5 className="carData"><span className="carDataSpan" >Dest : </span> {driver[10]}</h5>

                                    <button onClick={() => onBookfun(driver)} type="submit">
                                        Book
                                    </button>

                                </div>

                            )
                        }) : <h2 >NO DRIVER FOUND</h2>
                    }
                </div>
                <div className='map'>
                    <GoogleMap />
                </div>
            </div>


        </>
    )
}

export default Map;