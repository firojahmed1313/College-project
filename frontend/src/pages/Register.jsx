import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const initialData = {
  name: "",
  email: "",
  phone:"",
  password: "",
};

const Register = () => {
  const [register, setRegister] = useState(initialData);
  const [isVisiable, setIsVisiable] = useState(false);
  const navigator = useNavigate()
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const burl = import.meta.env.VITE_URL;
  console.log(burl);
  const onSubmits = async (e) => {
    e.preventDefault();
    try {
      const url= `${burl}api/user/register`
      const api= await axios.post(url,register,{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      console.log(api);
      setTimeout(()=>{
        navigator('/login');
      },"3000")
    } catch (error) {
      console.warn(error);
    }
    
    

    toast.success(register, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  };

  console.log(register);
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
      <div className="formbody">
        {
          //<form action="/api/user/register" method="POST">
        }
        <form onSubmit={onSubmits}>
          <h1>REGISTER</h1>
          <div className="formiconplusi">
            <PersonIcon fontSize="large" />
            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              id="name"
              value={register.name}
              onChange={inputEvent}
            />
          </div>
          <div className="formiconplusi">
            <AlternateEmailIcon fontSize="large" />
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id="email"
              value={register.email}
              onChange={inputEvent}
            />
          </div>
          <div className="formiconplusi">
            <LocalPhoneIcon fontSize="large" />
            <input
              placeholder="Enter Your Phone No"
              type="text"
              name="phone"
              id="phone"
              value={register.phone}
              onChange={inputEvent}
            />
          </div>
          <div className="formiconplusi">
            <GppGoodIcon fontSize="large" />
            <input
              placeholder="Enter Your Password"
              type={(isVisiable) ? "text" : "password"}
              name="password"
              id="password"
              value={register.password}
              onChange={inputEvent}
            />
            <div onClick={() => setIsVisiable(!isVisiable)}>
              {(isVisiable) ? <VisibilityOffIcon fontSize="large" /> : <VisibilityIcon fontSize="large" />}
            </div>
          </div>
          {
            <input type="submit" value="Create Account" onClick={onSubmits} />
          }

          <button onClick={() => navigator('/login')} type="submit">
            Already registered
          </button>
        </form >
      </div >
    </>
  );
};

export default Register;