import React, { useContext, useEffect, useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileDriver from '../components/ProfileDriver'
import context from '../context/Context'
import axios from 'axios'
import Cookies from 'js-cookie'
import Display from '../components/Display'
const DriverProfile = () => {
  const auth = useContext(context);
  const [carDetails, setCarDetails] = useState()
  console.log(auth);

  const { contract } = auth.state;
  console.log(contract);
  const burl = import.meta.env.VITE_URL;

  useEffect(() => {
    const carCount = async () => {
      /*const data = await contract.getCarCount();
      console.log(data);
      const data2 = await contract.getUserCount();
      console.log(data2);
      const data4 = await contract.getAvailableCarByDest("KOLKAL");
      console.log(data4);*/
      try {
        const data5 = await contract.getAvailableCarBylicenceId("789654");
        console.log(data5[0][0]);
        setCarDetails(data5);
      } catch (error) {
        console.warn(error);
      }

      //const data6 = await contract.getAvailableCarpools("WB124");
      //console.log(data6);
    }

    carCount();

  }, [auth])

  useEffect(() => {

    const getProfile = async () => {


      try {


        const url = `${burl}api/driver/myProfile`
        const api = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("tokenSmartPool")}`
          },
          withCredentials: true,
        })
        //console.log(api.data.user);
        auth.setUser(api.data.user);
        console.log("user", auth.user);
      }
      catch (error) {
        console.warn(error)
      }
    }
    getProfile();
  }, [])
  return (
    <div className="profile">
      <div className="profileNav">
        <ProfileNav d="Driver" />
      </div>
      <div className="profilesub">
        <ProfileDriver card={carDetails} />
      </div>

    </div>
  )
}

export default DriverProfile