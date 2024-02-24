import React, { useContext, useEffect } from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileDriver from '../components/ProfileDriver'
import context from '../context/Context'
import axios from 'axios'
import Cookies from 'js-cookie'
const DriverProfile = () => {
  const auth = useContext(context);
    console.log(auth);
  const burl = import.meta.env.VITE_URL;
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
        <ProfileNav d="Driver"/>
      </div>
      <div className="profilesub">
        <ProfileDriver />
      </div>
    </div>
  )
}

export default DriverProfile