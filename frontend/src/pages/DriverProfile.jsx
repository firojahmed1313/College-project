import React, { useContext, useEffect, useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileDriver from '../components/ProfileDriver'
import context from '../context/Context'
import axios from 'axios'
import Cookies from 'js-cookie'
import Display from '../components/Display'
import { useNavigate } from 'react-router-dom'
const DriverProfile = () => {
  const auth = useContext(context);
  const [carDetails, setCarDetails] = useState("");
  const navigator=useNavigate();
  console.log(auth);

  const { contract } = auth.state;
  console.log(contract);
  const burl = import.meta.env.VITE_URL;

  useEffect(() => {
    const carCount = async () => {
      try {
        const data5 = await contract.getAvailableCarBylicenceId(auth.user.licence_id);
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
        const url = `${burl}/api/driver/myProfile`
        const api = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("tokenSmartPooldriver")}`
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
    if (auth.isAuth) {
      getProfile();
    } else {
      navigator("/");
    }
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