import React, { useContext, useEffect } from 'react'
import abi from "../blokchain/contact/carPool.json";
import context from '../context/Context';
import {ethers} from "ethers"
import Display from './Display';
const Extra = () => {
    const auth = useContext(context);
    //console.log(auth);
    useEffect(() => {
        const connectWallet = async () => {
            const contractAddress = "0xf3032DfB35D0a88FF9e9a03a5593Ffe26ED1c94d";
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
    console.log("state",auth.state);
    console.log("account",auth.account);
    return (
        <>
            <Display/>
        </>
    )
}

export default Extra