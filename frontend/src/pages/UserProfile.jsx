import React, { useContext, useEffect, useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileUser from '../components/ProfileUser'
import Cookies from 'js-cookie'
import axios from 'axios'
import context from '../context/Context'
import { useNavigate } from 'react-router-dom'
const UserProfile = () => {
  const [userBookedCar, setUserBookedCar] = useState("")
  const auth = useContext(context);
  const navigator=useNavigate()
  console.log(auth);
  
  const { contract } = auth.state;
  useEffect(() => {
    const getUserRentCar = async () => {
      try {
        console.log(auth.user.phone);
        const data2 = await contract.getAvailableUser(auth.user.phone);
        console.log(data2);
        setUserBookedCar(data2)

      } catch (error) {
        console.warn(error)
      }
    }

    getUserRentCar();
  }, [])
  const burl = import.meta.env.VITE_URL;
  useEffect(() => {
    const getProfile = async () => {
      
      try {
        const url = `${burl}/api/user/myProfile`
        const api = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("tokenSmartPooluser")}`
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
    if(auth.isAuth){
      getProfile();

    }
    else{
      navigator("/");
    }
  }, [])



  console.log(userBookedCar);
  return (
    <div className="profile">
      <div className="profileNav">
        <ProfileNav d="User" />
      </div>
      {<div className="profilesub">
        <ProfileUser car={userBookedCar} />
      </div>}
    </div>
  )
}

export default UserProfile