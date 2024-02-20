import React, { useState } from "react";
import axios from "axios";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
const LoginDriver = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [isVisiable, setIsVisiable] = useState(false);
  const navigator=useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name, password);
    navigator('/driverProfile')
  }
  return (
    <>
      <div className="formbody">
        <form onSubmit={onSubmit} >
          <h1>LOGIN</h1>
          <div className="formiconplusi">
            <BadgeIcon fontSize="large" />
            <input
              placeholder="Enter Your Licence Id"
              type="text"
              name="licence_id"
              id="licence_id"
              value={name}
              onChange={(e) => setname(e.target.value)}
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

export default LoginDriver;