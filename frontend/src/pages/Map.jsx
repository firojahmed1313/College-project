import React, { useContext, useEffect, useState } from 'react'
import locationmap from '../assets/locationMap.png'; // with import
import { useNavigate } from 'react-router-dom';
import context from '../context/Context';
import axios from 'axios';
import Cookies
 from 'js-cookie';
const Map = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const auth = useContext(context);
    console.log(auth);
    
    const onDetails = (e) => {

        console.log("Sucessfull");
        navigate('/payment')
    }
    return (
        <>
            <div className='mapContener'>
                <div className='showmapContener'>
                    <div className='mapsubContener'>
                        <h3>Name : MD FIROJ AHMED</h3>
                        <p>Depert Place  : KOLKATA</p>
                        <p>Destination : KALYANI</p>
                        <p>Rent : 1 ETHER </p>
                        <p>Available Seat : 03</p>
                        <button onClick={onDetails} type="submit">
                            More
                        </button>
                    </div>
                    <div className='mapsubContener'>
                        <h3>Name : MD FIROJ AHMED</h3>
                        <p>Depert Place  : KOLKATA</p>
                        <p>Destination : KALYANI</p>
                        <p>Rent : 1 ETHER </p>
                        <p>Available Seat : 03</p>
                        <button onClick={onDetails} type="submit">
                            More
                        </button>
                    </div>
                    <div className='mapsubContener'>
                        <h3>Name : MD FIROJ AHMED</h3>
                        <p>Depert Place  : KOLKATA</p>
                        <p>Destination : KALYANI</p>
                        <p>Rent : 1 ETHER </p>
                        <p>Available Seat : 03</p>
                        <button onClick={onDetails} type="submit">
                            More
                        </button>
                    </div>



                </div>
                <div className='map'>
                    <img src={locationmap} alt='map' className='mapimg' />
                </div>
            </div>


        </>
    )
}

export default Map;