import React, { useContext, useState } from 'react'
import context from '../context/Context'
import { ethers } from 'ethers';
import axios from 'axios';
const GetBlance = () => {
    const [blance, setBlance] = useState();
    const [inrblance, setInrBlance] = useState();
    const [inrConvert, setInrConvert] = useState();
    const [button, setButton] = useState(true);
    const auth = useContext(context);
    const { provider} = auth.state;
    console.log(auth.account);
    const getBlance =async () => {
        try {
            const data= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=ethereum");
            console.log(data.data[0].current_price);
            setInrConvert(data.data[0].current_price)
        } catch (error) {
            console.warn(error);
        }
        setButton(false);
        const balanceBigInt = await provider.getBalance(auth.account);

        setBlance(ethers.formatEther(balanceBigInt));
        setInrBlance((ethers.formatEther(balanceBigInt))*inrConvert);


    }
    setTimeout(() => {
        setButton(true);
    }, 10000);

    return (
        <>
            <div className='getBlanceContainer'>
                <h3>Your Blance Is :</h3>
                {(button)?<button className='BlanceButton' onClick={getBlance}> Chack Blance</button>:<h2>{Number(blance).toFixed(2)} Eth  ,  {Number(inrblance).toFixed(2)} Inr</h2>}
            </div >
        </>
    )
}

export default GetBlance