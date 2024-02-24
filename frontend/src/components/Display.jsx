import React, { useContext, useEffect } from 'react'
import context from '../context/Context'
import { ethers } from "ethers"
const Display = async() => {
    const auth = useContext(context);
    const { contract } = auth.state;
    console.log(contract);//getCarCount
    /*try {
         
        const data8 = await contract.addCar("0x6501Baf726FA584f163C68379546fE3f059EA014","3", "qwe", "we", "re", "ert", "123", "111111", "13", "kol", "des");
        await data8.wait();
        console.log(data8);
        
    } catch (error) {
        console.warn(error);
    }*/
    useEffect(() => {
        const carCount = async () => {
            try {

                const data = await contract.getCarCount();
                const data2 = await contract.getUserCount();
                //const data3 = await contract.getSelected("re");
                /*const data4 = await contract.getAvailableCarByDest("koldes");
                const data5 = await contract.getAvailableCarBylicenceId("abc12345");
                const data6 = await contract.getAvailableCarpools("WB123");
                const data7 = await contract.getAvailableUser("1234567");
                const amount = { value: ethers.parseEther("0.001") };
                /*const transaction = await contract.makePayment("WB123", amount);
                await transaction.wait();
                console.log("Transaction is done");
                console.log(transaction);*/



                console.log(data);
                console.log(data2);
                //console.log(data3);
                /*console.log(data4);
                console.log(data5);
                console.log(data6);
                console.log(data7);*/

            } catch (error) {
                console.warn(error);
            }


        }
        contract && carCount();
    }, [contract])
    return (
        <></>
    )
}

export default Display