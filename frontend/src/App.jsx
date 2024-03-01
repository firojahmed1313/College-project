import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navber from "./components/Navber";
import AddCar from "./pages/AddCar";
import Map from "./pages/Map";
import Payment from "./pages/Payment";
import Location from "./pages/Location";
import DriverProfile from "./pages/DriverProfile";
import UserProfile from "./pages/UserProfile";
import RegisterDriver from "./pages/RegisterDriver";
import LoginDriver from "./pages/LoginDriver";
import context from "./context/Context";
import Cookies from 'js-cookie'
import abi from "./blokchain/contact/carPool.json"
import { ethers } from "ethers"
const App = () => {
  const auth = useContext(context);
  const [data, setData] = useState();
  useEffect(() => {
    const isCookiesuser = Cookies.get("tokenSmartPooluser");
    const isCookiesdriver = Cookies.get("tokenSmartPooldriver");
    if (isCookiesuser) {
      auth.setIsAuth(true);
      setData("user");

    }
    else if (isCookiesdriver) {
      auth.setIsAuth(true);
      setData("driver");
    }


  }, [])


  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x54d6CA2FB7b2b629cb98B09D51A8EA6bB2e9297c";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        //console.log(ethereum);
        if (ethereum && ethereum.request) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          if (account && account.length > 0) {
            auth.setAccount(account[0]);
            //const provider = new ethers.providers.Web3Provider(ethereum);
            const provider = new ethers.BrowserProvider(ethereum)
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
            //console.log({ provider, signer, contract });
            auth.setState({ provider, signer, contract });
          }
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.warn(error);
      }
    };

    connectWallet();
  }, []);
  console.log(auth);
  console.log(data);
  return (

    <>
      <Navber d={data}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerdriver" element={<RegisterDriver />} />
        <Route path="/logindriver" element={<LoginDriver />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/mapDetails" element={<Map />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/driverProfile" element={<DriverProfile />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;