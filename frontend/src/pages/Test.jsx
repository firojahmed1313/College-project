import React, { useEffect, useState } from 'react'
import axios from "axios";
const Test = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async () => {
            const dData = await axios.get("https://5000-firojahmed1-collegeproj-q61ufo89vz5.ws-us110.gitpod.io/api/driver/disableCar/123");
            setData(dData.data.data);
            //console.log(dData.data.data);
        }

        getData()
    }, [])
    console.log(data);
    return (
        <>
            <div>Test</div>
            <p>{data}</p>
        </>
    )
}

export default Test