import React, { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import context from "../context/Context";
import Cookies from 'js-cookie'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Login = () => {
  const [phone, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isVisiable, setIsVisiable] = useState(false);
  const navigator = useNavigate();
  const auth = useContext(context);
  console.log(auth)
  const burl = import.meta.env.VITE_URL;
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(phone, password);
    try {
      const url = `${burl}/api/user/logIn`
      const api = await axios.post(url, { phone, password }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      console.log(api.data);

      if (api.data.success) {
        auth.setIsAuth(true);
        auth.setUser(api.data.user);
        console.log(api.data.token);
        Cookies.set("tokenSmartPooluser", JSON.stringify(api.data.token), {
          expires: 1,
          sameSite: "strict",
          secure: true,
          path: "/"
        })
        setTimeout(() => {
          navigator('/userProfile');
        }, "3000")
      }
      toast.success(api.data.massage, {
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
      toast.error(error.response.data.massage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }
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
        <form onSubmit={onSubmit} >
          <h1>LOGIN</h1>
          <div className="formiconplusi">
          <LocalPhoneIcon fontSize="large" />
            <input
              placeholder="Enter Your Phone No"
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="formiconplusi">
            <PasswordIcon fontSize="large" />
            <input
              placeholder="Enter Your Password"
              type={(isVisiable) ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div onClick={() => setIsVisiable(!isVisiable)}>
              {(isVisiable) ? <VisibilityOffIcon fontSize="large" /> : <VisibilityIcon fontSize="large" />}
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;