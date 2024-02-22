import React, { useEffect, useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import ProfileUser from '../components/ProfileUser'
import Cookies from 'js-cookie'
import axios from 'axios'

const UserProfile = () => {
  const [user,setUser]= useState();
  const burl = import.meta.env.VITE_URL;
  useEffect(()=>{
    const getProfile=async()=>{
      try {
        const url = `${burl}api/user/myProfile`
        const api = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("tokenSmartPool")}`
          },
          withCredentials: true,
        })
        //console.log(api.data.user);
        setUser(api.data.user);
        console.log("user",user);
      }
      catch(error){
        console.warn(error)
      }
    }
    getProfile();
  },[])
  return (
    <div className="profile">
      <div className="profileNav">
        <ProfileNav d="User" />
      </div>
      <div className="profilesub">
        <ProfileUser user={user}/>
      </div>
    </div>
  )
}

export default UserProfile