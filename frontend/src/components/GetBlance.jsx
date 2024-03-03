import React, { useContext, useState } from 'react'
import context from '../context/Context'
import { ethers } from 'ethers';
const GetBlance = () => {
    const [blance, setBlance] = useState();
    const [button, setButton] = useState(true);
    const auth = useContext(context);
    const { provider} = auth.state;
    console.log(auth.account);
    const getBlance =async () => {

        setButton(false);
        const balanceBigInt = await provider.getBalance(auth.account);
        setBlance(ethers.formatEther(balanceBigInt));


    }
    setTimeout(() => {
        setButton(true);
    }, 10000);

    return (
        <>
            <div className='getBlanceContainer'>
                <h3>Your Blance Is :</h3>
                {(button)?<button className='BlanceButton' onClick={getBlance}> Chack Blance</button>:<h2>{blance} ETH</h2>}
            </div >
        </>
    )
}

export default GetBlance